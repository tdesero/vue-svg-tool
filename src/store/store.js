import Vue from 'vue';

window.SELECTED_PATH = {};

function emptyPath() {
  return {
    id: new Date().getTime(),
    definition: [],
    rotation: null,
    scale: {x: 1, y: 1},
    bbox: {},
    center: {},
    rotationCenter: {},
    translate: {x: null, y: null},
    strokeLinecap: 'butt',
    strokeLinejoin: 'miter',
    strokeWidth: 2,
  }
}

function roundPoint(point) {
  let newPoint = {}
  newPoint.x = Math.round(point.x);
  newPoint.y = Math.round(point.y);

  return newPoint;
}

const store = {
  debug: true,
  state: {
    history: [],
    historyPos: -1, // -1 means history is not active
    allPaths: [],
    selectedPathIndex: null,
    selectedPathId: null,
    tool: 'PEN',
    transformMatrix: null,
    currentPoint: {},
    livePreviewSegment: {},
    selectedPointId: null,
    selectedPointStep: null,
    selectedPointIndex: null,
    isMovingPoint: false,
    isMovingPath: false,
    svgPoint: {},
    isFirstPoint: true,
    isDrawing: false,
    currentSegment: 'L',
    snapToGrid: true,
    hideControls: false,
    viewBox: {x: 24, y: 24},
    clientStartPos: {},
    movePathStartPos: {}, //stores the path definition (all segments)
    //clientMovePos: {}
  },

  /**
   * Create empty path.
   * @public
   */
  createPath() {
    if (this.debug) console.log("createPath");

    this.state.allPaths.push(emptyPath());
    this.state.selectedPathIndex = this.state.allPaths.length - 1;
    this.state.selectedPathId = this.state.allPaths[this.state.selectedPathIndex].id;

    /* clear currentPoint */
    this.state.isFirstPoint = true;

    if (this.debug) console.log("index:", this.state.selectedPathIndex);
    if (this.debug) console.log("id:", this.state.selectedPathId);
  },

  /**
   * select tool
   * 'PEN', 'CIRCLE', 'RECT', 'EDIT', 'BBOX', 'NONE'
   * @param {string} tool
   * @public
   */
  selectTool(tool) {
    if (this.debug) console.log("selectTool", tool);
    this.state.tool = tool;

    if (tool === 'PEN' && this.state.selectedPathIndex === null) {
      this.createPath();
    }
  },

  /**
   * handle mousedown depending on selected tool
   * expects the dom element of the currently selected path
   * @param {object} event
   * @param {array} domElement
   * @public
   */
  handleMouseDown(event, domElement) {
    if (this.debug) console.log("handleMouseDown");
    const { selectedPointIndex, selectedPathIndex } = this.state;
    let pathLength;

    this.state.transformMatrix = domElement.getScreenCTM().inverse();
    this.state.svgPoint = document.querySelector('#app svg').createSVGPoint();

    /* Tracking the point for path moving */
    let point = this.state.svgPoint;
    point.x = event.clientX;
    point.y = event.clientY;
    point = point.matrixTransform(this.state.transformMatrix);
    if (this.state.snapToGrid) { point = roundPoint(point) }
    this.state.clientStartPos = {x: point.x, y: point.y};
    this.state.movePathStartPos = JSON.parse(JSON.stringify(this.state.allPaths[selectedPathIndex].definition));

    
    if (selectedPathIndex !== null) {
      pathLength = this.state.allPaths[selectedPathIndex].definition.length;
    }

    switch(this.state.tool) {   
      case 'PEN':
        this.state.isDrawing = true;
        if( (pathLength - 1) === selectedPointIndex) {
          if (this.debug) console.log('end')
          this.addSegment(event, 'END');
        } else if( selectedPointIndex === 0 ) {
          if (this.debug) console.log('start')
          this.addSegment(event, 'START');
        } else {
          if (this.debug) console.log('new')
          this.createPath()
          this.addSegment(event, 'NEW');
        }
        break;
      default:
        return;
    }
  },

  /* TODO */
  handleMouseMove(event) {
    if (this.debug) console.log("handleMouseMove");

    /* pen selected */
    if (this.state.tool === 'PEN' && !this.state.isMovingPoint) {
      if (this.state.allPaths[this.state.selectedPathIndex].definition.length === 0) return;
      let point = this.state.svgPoint;
      point.x = event.clientX;
      point.y = event.clientY;
      point = point.matrixTransform(this.state.transformMatrix);
      if (this.state.snapToGrid) { point = roundPoint(point) }

      this.state.livePreviewSegment = {type: 'L', dest: {x: point.x, y: point.y}};
    }

    /* Draw Bezier */
    if (this.state.tool === 'PEN' && this.state.isDrawing) {
      let { allPaths, selectedPathIndex, selectedPointIndex, snapToGrid } = this.state;
      let fromPoint = allPaths[selectedPathIndex].definition[selectedPointIndex - 1].dest;

      let point = this.state.svgPoint;
      point.x = event.clientX;
      point.y = event.clientY;
      point = point.matrixTransform(this.state.transformMatrix);
      if (snapToGrid) { point = roundPoint(point) }

      allPaths[selectedPathIndex].definition[selectedPointIndex].type = 'C';
      allPaths[selectedPathIndex].definition[selectedPointIndex].curve1 = { x: fromPoint.x, y: fromPoint.y };
      allPaths[selectedPathIndex].definition[selectedPointIndex].curve2 = { x: point.x, y: point.y}
    }

    /* moving point */
    if (this.state.isMovingPoint) {
      let point = this.state.svgPoint;
      point.x = event.clientX;
      point.y = event.clientY;
      point = point.matrixTransform(this.state.transformMatrix);
      if (this.state.snapToGrid) { point = roundPoint(point) }

      /* this moves the current selected point */
      this.state.allPaths[this.state.selectedPathIndex].definition[this.state.selectedPointIndex][this.state.selectedPointStep] = {x: point.x, y: point.y};
    }

    /* moving path */
    if (this.state.tool === 'SELECT' && this.state.isMovingPath) {
      const { movePathStartPos } = this.state;
      let diff = {};
      let point = this.state.svgPoint;
      point.x = event.clientX;
      point.y = event.clientY;
      point = point.matrixTransform(this.state.transformMatrix);
      if (this.state.snapToGrid) { point = roundPoint(point) }

      diff.x = point.x - this.state.clientStartPos.x;
      diff.y = point.y - this.state.clientStartPos.y;

      this.state.allPaths[this.state.selectedPathIndex].definition.forEach((s, index) => {
        if (s.type === 'Z') return;
        s.dest.x = movePathStartPos[index].dest.x + diff.x;
        s.dest.y = movePathStartPos[index].dest.y + diff.y;

        if (s.curve1.x !== undefined) {
          s.curve1.x = movePathStartPos[index].curve1.x + diff.x;
          s.curve1.y = movePathStartPos[index].curve1.y + diff.y;
        }
        if (s.curve2.x !== undefined) {
          s.curve2.x = movePathStartPos[index].curve2.x + diff.x;
          s.curve2.y = movePathStartPos[index].curve2.y + diff.y;
        }
      })
    }
  },

  handleMouseUp() {
    let {allPaths, selectedPathIndex, selectedPointIndex} = this.state;

    if (this.state.isMovingPoint) {
      this.historySnapshot()
    }

    this.state.isMovingPoint = false;
    this.state.isMovingPath = false;

    this.state.isDrawing = false;

    this.updateBBox();
    this.updatePathCenter(allPaths[selectedPathIndex].bbox);
    //this.updateRotationCenter();

    if (selectedPathIndex !== null && selectedPointIndex !== null) {
      this.state.currentPoint = allPaths[selectedPathIndex].definition[selectedPointIndex].dest;
    }
  },

  /* TODO where = 'END' || 'START' || 'NEW' */
  addSegment(event, where) {
    if (this.debug) console.log("addSegment", event);

    let { allPaths, selectedPathIndex, selectedPointIndex } = this.state;

    // create new SVG Point
    let point = document.querySelector('#app svg').createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    point = point.matrixTransform(this.state.transformMatrix);
    if (this.state.snapToGrid) { point = roundPoint(point) }

    this.state.currentPoint = {x: point.x, y: point.y};

    if (where === 'END') {
      let id = new Date().getTime();

      allPaths[selectedPathIndex].definition.push({
        type: 'L',
        id: id,
        curve1: {},
        curve2: {},
        dest: {
          x: point.x,
          y: point.y
        }
      })
      this.state.selectedPointId = id;
      this.state.selectedPointIndex++;
    }
    if (where === 'START') {
      let id = new Date().getTime();

      allPaths[selectedPathIndex].definition.unshift({
        type: 'M',
        id: id,
        curve1: {},
        curve2: {},
        dest: {
          x: point.x,
          y: point.y
        }
      })
      allPaths[selectedPathIndex].definition[selectedPointIndex + 1].type = 'L';
      this.state.selectedPointId = id;
      this.state.isDrawing = false;
    }
    if ( where === "NEW" ) {
      let id = new Date().getTime();
      this.state.allPaths[this.state.selectedPathIndex].definition.push({
        type: 'M',
        id: id,
        curve1: {},
        curve2: {},
        dest: {
          x: point.x,
          y: point.y
        }
      })
      this.state.isDrawing = false;
      this.state.selectedPointId = id;
      this.state.selectedPointIndex = 0;
    } 

    this.state.isFirstPoint = false;
    
    /* update bbox according to the new point */
    if (window.SELECTED_PATH) {
      let bbox = window.SELECTED_PATH.getBBox();
      this.updateBBox()
      this.updatePathCenter(bbox);
      this.updateRotationCenter();
    }

    this.historySnapshot();
  },

  deleteAction() {
    if (this.debug) console.log("delete");
    const { tool } = this.state;

    if (tool === "PEN" || tool === "EDIT") {
      this.deleteSegment();
    } else if (tool === "SELECT") {
      this.deletePath();
    }
    this.historySnapshot();
  },

  deletePath() {
    const {selectedPathIndex} = this.state;

    if (selectedPathIndex !== null) {
      this.state.allPaths.splice(selectedPathIndex, 1);
    }
  },

  deleteSegment() {
    if (this.debug) console.log("deleteSegment");

    let {selectedPointIndex, selectedPathIndex} = this.state;

    if (selectedPointIndex !== null) {
      if ( selectedPointIndex === 0 ) {

        if (this.state.allPaths[selectedPathIndex].definition.length > 1) {
          /* make the first point moveto ('M') instead of lineto ('L') */
          this.state.allPaths[selectedPathIndex].definition[1].type = 'M';
          this.state.allPaths[selectedPathIndex].definition[1].curve1 = {};
          this.state.allPaths[selectedPathIndex].definition[1].curve2 = {};
        }
        
      }
      this.state.allPaths[selectedPathIndex].definition.splice(this.state.selectedPointIndex, 1);

      /* clear selected path */
      this.state.selectedPointIndex = null;
      this.state.selectedPointId = null;
    }
    this.updateBBox();
  },

  selectPath(id, index) {
    if (this.debug) console.log("selectPath", id, index);
    const { tool } = this.state;
    this.updateBBox();

    if (tool === "EDIT" || tool === "SELECT") {
      this.state.selectedPathId = id;
      this.state.selectedPathIndex = index;
    }
  },

  unselectPath() {
    if (this.debug) console.log("unselectPath");
    this.state.selectedPathId = null
    this.state.selectedPathIndex = null;
  },

  /* TODO */
  setSelectedPoint(id, step) {
    let { allPaths, selectedPathIndex} = this.state;

    this.state.isMovingPoint = true;
    this.state.selectedPointId = id;
    this.state.selectedPointStep = step;
    this.state.selectedPointIndex = allPaths[selectedPathIndex].definition.findIndex(p => p.id === id);
    this.state.svgPoint = document.querySelector('#app svg').createSVGPoint();
    this.state.currentPoint = allPaths[selectedPathIndex].definition[this.state.selectedPointIndex].dest;
  },

  updateBBox() {
    const { selectedPathIndex } = this.state;
    if (window.SELECTED_PATH && selectedPathIndex) {
      const bbox = window.SELECTED_PATH.getBBox();
      this.state.allPaths[selectedPathIndex].bbox = bbox;
    }
    if (this.debug) { console.log('updateBBox');}
  },

  updatePathCenter(bbox) {
    const { selectedPathIndex } = this.state;
    let center = {
      x: bbox.x + bbox.width/2,
      y: bbox.y + bbox.height/2
    }
    this.state.allPaths[selectedPathIndex].center = center;
  },

  updateRotation(val) {
    this.state.allPaths[this.state.selectedPathIndex].rotation = val;
    this.updateRotationCenter();
    this.state.transformMatrix = window.SELECTED_PATH.getScreenCTM().inverse();
    this.historySnapshot();
  },

  updateRotationCenter() {
    let center = this.state.allPaths[this.state.selectedPathIndex].center;
    this.state.allPaths[this.state.selectedPathIndex].rotationCenter = center;
  },

  updateScale(scaleX, scaleY) {
    const { center } = this.state.allPaths[this.state.selectedPathIndex];
    const oldScale = this.state.allPaths[this.state.selectedPathIndex].scale;

    function calcScale(val, center, scale) {
      let p = val - center; // get a vector to v relative to the centerpoint
      p = p * scale; // scale the cp-relative-vector
      p = p + center; // translate the scaled vector back
      return p;
    } 

    this.state.allPaths[this.state.selectedPathIndex].definition.forEach(s => {
      if (s.type === "C") {
        s.curve1.x = calcScale(s.curve1.x, center.x, scaleX/oldScale.x);
        s.curve1.y = calcScale(s.curve1.y, center.y, scaleY/oldScale.y);
        s.curve2.x = calcScale(s.curve2.x, center.x, scaleX/oldScale.x);
        s.curve2.y = calcScale(s.curve2.y, center.y, scaleY/oldScale.y);
      }
      s.dest.x = calcScale(s.dest.x, center.x, scaleX/oldScale.x);
      s.dest.y = calcScale(s.dest.y, center.y, scaleY/oldScale.y);
    })
    this.state.allPaths[this.state.selectedPathIndex].scale.x = scaleX;
    this.state.allPaths[this.state.selectedPathIndex].scale.y = scaleY;
    this.state.transformMatrix = window.SELECTED_PATH.getScreenCTM().inverse();
    this.historySnapshot();
  },

  historySnapshot() {
    if (this.debug) console.log("historySnapshot");

    /* first reset the history position and clear all history arrays smaller then the current historyPos */
    if (this.state.historyPos > -1) {
      this.state.history.splice(0, this.state.historyPos + 1);
      console.log('snapshot clear', this.state.history)
      this.state.historyPos = -1;
    }

    const copiedPaths = JSON.parse(JSON.stringify(this.state.allPaths));
    this.state.history.unshift( copiedPaths );
  },

  setHistoryPos(val) {
    if (this.debug) console.log("setHistoryPos", val);

    this.state.historyPos += val;
  },

  historyGoTo( count = 0 ) {
    if (this.debug) console.log("historyGoTo", count);
    Vue.set(this.state, 'allPaths', JSON.parse(JSON.stringify(this.state.history[count + 1])) );

    /* after time traveling selected elements have to be reset, because it is possible that they don't exist. */
    this.selectTool(this.state.tool);
    this.state.selectedPathIndex = null;
    this.state.selectedPathId = null;
    this.state.currentPoint = {};
    this.state.livePreviewSegment = {};
    this.state.selectedPointId = null;
    this.state.selectedPointStep = null;
    this.state.selectedPointIndex = null;
    this.state.isFirstPoint = true;
  },

  setStrokeLinecap(str) {
    const { selectedPathIndex } = this.state;
    this.state.allPaths[selectedPathIndex].strokeLinecap = str;
  },

  setStrokeLinejoin(str) {
    const { selectedPathIndex } = this.state;
    this.state.allPaths[selectedPathIndex].strokeLinejoin = str;
  },

  setStrokeWidth(n) {
    const { selectedPathIndex } = this.state;
    this.state.allPaths[selectedPathIndex].strokeWidth = n;
  },

  joinPoints(pathIndex) {
    let closeSegment = Object.assign({}, this.state.allPaths[pathIndex].definition[0]);
    closeSegment.type = 'Z';
    closeSegment.dest = {};
    closeSegment.id = new Date().getTime();
    this.state.allPaths[pathIndex].definition.push(closeSegment);
  },

  createSVG() {
    /* for now this provides just a very basic functionality */
    const div = document.createElement('div')
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    store.state.allPaths.forEach( p => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      let d = "";
      p.definition.forEach(s => {
        d += [s.type, s.curve1.x, s.curve1.y, s.curve2.x, s.curve2.y, s.dest.x, s.dest.y].join(' ');
      });
  
      path.setAttribute('d', d);
      path.setAttribute('stroke-width', p.strokeWidth);
      /* a lot to todos */
      path.setAttribute('translate', 'rotate(' + p.rotation + ' ' + p.rotationCenter.x + ' ' + p.rotationCenter.y);

      svg.appendChild(path);
    } )
    
    div.appendChild(svg);
    
    alert(div.innerHTML);
  }
};

export default store;
