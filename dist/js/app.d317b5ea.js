(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],h=0,u=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},n={app:0},a=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("85ec"),n=s.n(i);n.a},"0372":function(t,e,s){},"1e56":function(t,e,s){"use strict";var i=s("0372"),n=s.n(i);n.a},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("TopPanel"),s("LeftPanel"),s("RightPanel"),s("MainCanvas")],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v_left-panel absolute-y-center p-5 text-center"},[s("button",{staticClass:"btn btn-primary btn btn-primary btn-circle btn-xl",attrs:{title:"Edit"},on:{click:function(e){return t.store.selectTool("EDIT")}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{"data-v-076a7a29":"","data-v-306af221":"",d:"M     5 5L     5 5L     14 25L     16 16L     25 13Z      ",fill:"none",transform:"","stroke-linecap":"butt","stroke-width":"2"}})])]),s("button",{staticClass:"btn btn-primary btn btn-primary btn-circle btn-xl",attrs:{title:"Select"},on:{click:function(e){return t.store.selectTool("SELECT")}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 19 10 L 19 4 L 4 4 L 4 19 L 10 19 M 11 11 L 15 21 L 17 17 L 21 15 Z M 2 17 L 2 21 L 6 21 L 6 17 Z M 6 2 L 6 6 L 2 6 L 2 2 Z M 17 2 L 21 2 L 21 6 L 17 6 Z","stroke-width":"2"}})])]),s("button",{staticClass:"btn btn-primary btn btn-primary btn-circle btn-xl",attrs:{title:"Pen"},on:{click:function(e){return t.store.selectTool("PEN")}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 19 2 L 13 8 L 10 6 L 4 13 L 2 22 L 12 20 L 18 14 L 16 11 L 22 5 L 19 2 Z M 2 22 L 9 15 M 16 5 L 19 8 ","stroke-width":"2"}})])]),s("button",{staticClass:"btn btn-primary btn btn-primary btn-circle btn-xl",attrs:{title:"New"},on:{click:t.newPath}},[t._v("+")]),s("button",{staticClass:"btn btn-primary btn btn-primary btn-circle btn-xl",attrs:{title:"Delete"},on:{click:function(e){return t.store.deleteAction()}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 4 4 L 4 8 L 20 8 L 20 3 L 4 3 Z M 6 8 L 6 21 L 18 21 L 18 8 M 10 9 L 10 20 M 14 9 L 14 21 ","stroke-width":"2"}})])])])},r=[];function l(){return{id:(new Date).getTime(),definition:[],rotation:null,scale:{x:1,y:1},bbox:{},center:{},rotationCenter:{},translate:{x:null,y:null},strokeLinecap:"butt",strokeLinejoin:"miter",strokeWidth:2}}function c(t){let e={};return e.x=Math.round(t.x),e.y=Math.round(t.y),e}window.SELECTED_PATH={};const d={debug:!0,state:{history:[],historyPos:-1,allPaths:[],selectedPathIndex:null,selectedPathId:null,tool:"PEN",transformMatrix:null,currentPoint:{},livePreviewSegment:{},selectedPointId:null,selectedPointStep:null,selectedPointIndex:null,isMovingPoint:!1,isMovingPath:!1,svgPoint:{},isFirstPoint:!0,isDrawing:!1,currentSegment:"L",snapToGrid:!0,hideControls:!1,viewBox:{x:24,y:24},clientStartPos:{},movePathStartPos:{}},createPath(){this.debug&&console.log("createPath"),this.state.allPaths.push(l()),this.state.selectedPathIndex=this.state.allPaths.length-1,this.state.selectedPathId=this.state.allPaths[this.state.selectedPathIndex].id,this.state.isFirstPoint=!0,this.debug&&console.log("index:",this.state.selectedPathIndex),this.debug&&console.log("id:",this.state.selectedPathId)},selectTool(t){this.debug&&console.log("selectTool",t),this.state.tool=t,"PEN"===t&&null===this.state.selectedPathIndex&&this.createPath()},handleMouseDown(t,e){this.debug&&console.log("handleMouseDown");const{selectedPointIndex:s,selectedPathIndex:i}=this.state;let n;this.state.transformMatrix=e.getScreenCTM().inverse(),this.state.svgPoint=document.querySelector("#app svg").createSVGPoint();let a=this.state.svgPoint;switch(a.x=t.clientX,a.y=t.clientY,a=a.matrixTransform(this.state.transformMatrix),this.state.snapToGrid&&(a=c(a)),this.state.clientStartPos={x:a.x,y:a.y},this.state.movePathStartPos=JSON.parse(JSON.stringify(this.state.allPaths[i].definition)),null!==i&&(n=this.state.allPaths[i].definition.length),this.state.tool){case"PEN":this.state.isDrawing=!0,n-1===s?(this.debug&&console.log("end"),this.addSegment(t,"END")):0===s?(this.debug&&console.log("start"),this.addSegment(t,"START")):(this.debug&&console.log("new"),this.createPath(),this.addSegment(t,"NEW"));break;default:return}},handleMouseMove(t){if(this.debug&&console.log("handleMouseMove"),"PEN"===this.state.tool&&!this.state.isMovingPoint){if(0===this.state.allPaths[this.state.selectedPathIndex].definition.length)return;let e=this.state.svgPoint;e.x=t.clientX,e.y=t.clientY,e=e.matrixTransform(this.state.transformMatrix),this.state.snapToGrid&&(e=c(e)),this.state.livePreviewSegment={type:"L",dest:{x:e.x,y:e.y}}}if("PEN"===this.state.tool&&this.state.isDrawing){let{allPaths:e,selectedPathIndex:s,selectedPointIndex:i,snapToGrid:n}=this.state,a=e[s].definition[i-1].dest,o=this.state.svgPoint;o.x=t.clientX,o.y=t.clientY,o=o.matrixTransform(this.state.transformMatrix),n&&(o=c(o)),e[s].definition[i].type="C",e[s].definition[i].curve1={x:a.x,y:a.y},e[s].definition[i].curve2={x:o.x,y:o.y}}if(this.state.isMovingPoint){let e=this.state.svgPoint;e.x=t.clientX,e.y=t.clientY,e=e.matrixTransform(this.state.transformMatrix),this.state.snapToGrid&&(e=c(e)),this.state.allPaths[this.state.selectedPathIndex].definition[this.state.selectedPointIndex][this.state.selectedPointStep]={x:e.x,y:e.y}}if("SELECT"===this.state.tool&&this.state.isMovingPath){const{movePathStartPos:e}=this.state;let s={},i=this.state.svgPoint;i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(this.state.transformMatrix),this.state.snapToGrid&&(i=c(i)),s.x=i.x-this.state.clientStartPos.x,s.y=i.y-this.state.clientStartPos.y,this.state.allPaths[this.state.selectedPathIndex].definition.forEach((t,i)=>{"Z"!==t.type&&(t.dest.x=e[i].dest.x+s.x,t.dest.y=e[i].dest.y+s.y,void 0!==t.curve1.x&&(t.curve1.x=e[i].curve1.x+s.x,t.curve1.y=e[i].curve1.y+s.y),void 0!==t.curve2.x&&(t.curve2.x=e[i].curve2.x+s.x,t.curve2.y=e[i].curve2.y+s.y))})}},handleMouseUp(){let{allPaths:t,selectedPathIndex:e,selectedPointIndex:s}=this.state;this.state.isMovingPoint&&this.historySnapshot(),this.state.isMovingPoint=!1,this.state.isMovingPath=!1,this.state.isDrawing=!1,this.updateBBox(),this.updatePathCenter(t[e].bbox),null!==e&&null!==s&&(this.state.currentPoint=t[e].definition[s].dest)},addSegment(t,e){this.debug&&console.log("addSegment",t);let{allPaths:s,selectedPathIndex:i,selectedPointIndex:n}=this.state,a=document.querySelector("#app svg").createSVGPoint();if(a.x=t.clientX,a.y=t.clientY,a=a.matrixTransform(this.state.transformMatrix),this.state.snapToGrid&&(a=c(a)),this.state.currentPoint={x:a.x,y:a.y},"END"===e){let t=(new Date).getTime();s[i].definition.push({type:"L",id:t,curve1:{},curve2:{},dest:{x:a.x,y:a.y}}),this.state.selectedPointId=t,this.state.selectedPointIndex++}if("START"===e){let t=(new Date).getTime();s[i].definition.unshift({type:"M",id:t,curve1:{},curve2:{},dest:{x:a.x,y:a.y}}),s[i].definition[n+1].type="L",this.state.selectedPointId=t,this.state.isDrawing=!1}if("NEW"===e){let t=(new Date).getTime();this.state.allPaths[this.state.selectedPathIndex].definition.push({type:"M",id:t,curve1:{},curve2:{},dest:{x:a.x,y:a.y}}),this.state.isDrawing=!1,this.state.selectedPointId=t,this.state.selectedPointIndex=0}if(this.state.isFirstPoint=!1,window.SELECTED_PATH){let t=window.SELECTED_PATH.getBBox();this.updateBBox(),this.updatePathCenter(t),this.updateRotationCenter()}this.historySnapshot()},deleteAction(){this.debug&&console.log("delete");const{tool:t}=this.state;"PEN"===t||"EDIT"===t?this.deleteSegment():"SELECT"===t&&this.deletePath(),this.historySnapshot()},deletePath(){const{selectedPathIndex:t}=this.state;null!==t&&this.state.allPaths.splice(t,1)},deleteSegment(){this.debug&&console.log("deleteSegment");let{selectedPointIndex:t,selectedPathIndex:e}=this.state;null!==t&&(0===t&&this.state.allPaths[e].definition.length>1&&(this.state.allPaths[e].definition[1].type="M",this.state.allPaths[e].definition[1].curve1={},this.state.allPaths[e].definition[1].curve2={}),this.state.allPaths[e].definition.splice(this.state.selectedPointIndex,1),this.state.selectedPointIndex=null,this.state.selectedPointId=null),this.updateBBox()},selectPath(t,e){this.debug&&console.log("selectPath",t,e);const{tool:s}=this.state;this.updateBBox(),"EDIT"!==s&&"SELECT"!==s||(this.state.selectedPathId=t,this.state.selectedPathIndex=e)},unselectPath(){this.debug&&console.log("unselectPath"),this.state.selectedPathId=null,this.state.selectedPathIndex=null},setSelectedPoint(t,e){let{allPaths:s,selectedPathIndex:i}=this.state;this.state.isMovingPoint=!0,this.state.selectedPointId=t,this.state.selectedPointStep=e,this.state.selectedPointIndex=s[i].definition.findIndex(e=>e.id===t),this.state.svgPoint=document.querySelector("#app svg").createSVGPoint(),this.state.currentPoint=s[i].definition[this.state.selectedPointIndex].dest},updateBBox(){const{selectedPathIndex:t}=this.state;if(window.SELECTED_PATH&&t){const e=window.SELECTED_PATH.getBBox();this.state.allPaths[t].bbox=e}this.debug&&console.log("updateBBox")},updatePathCenter(t){const{selectedPathIndex:e}=this.state;let s={x:t.x+t.width/2,y:t.y+t.height/2};this.state.allPaths[e].center=s},updateRotation(t){this.state.allPaths[this.state.selectedPathIndex].rotation=t,this.updateRotationCenter(),this.state.transformMatrix=window.SELECTED_PATH.getScreenCTM().inverse(),this.historySnapshot()},updateRotationCenter(){let t=this.state.allPaths[this.state.selectedPathIndex].center;this.state.allPaths[this.state.selectedPathIndex].rotationCenter=t},updateScale(t,e){const{center:s}=this.state.allPaths[this.state.selectedPathIndex],i=this.state.allPaths[this.state.selectedPathIndex].scale;function n(t,e,s){let i=t-e;return i*=s,i+=e,i}this.state.allPaths[this.state.selectedPathIndex].definition.forEach(a=>{"C"===a.type&&(a.curve1.x=n(a.curve1.x,s.x,t/i.x),a.curve1.y=n(a.curve1.y,s.y,e/i.y),a.curve2.x=n(a.curve2.x,s.x,t/i.x),a.curve2.y=n(a.curve2.y,s.y,e/i.y)),a.dest.x=n(a.dest.x,s.x,t/i.x),a.dest.y=n(a.dest.y,s.y,e/i.y)}),this.state.allPaths[this.state.selectedPathIndex].scale.x=t,this.state.allPaths[this.state.selectedPathIndex].scale.y=e,this.state.transformMatrix=window.SELECTED_PATH.getScreenCTM().inverse(),this.historySnapshot()},historySnapshot(){this.debug&&console.log("historySnapshot"),this.state.historyPos>-1&&(this.state.history.splice(0,this.state.historyPos+1),console.log("snapshot clear",this.state.history),this.state.historyPos=-1);const t=JSON.parse(JSON.stringify(this.state.allPaths));this.state.history.unshift(t)},setHistoryPos(t){this.debug&&console.log("setHistoryPos",t),this.state.historyPos+=t},historyGoTo(t=0){this.debug&&console.log("historyGoTo",t),i["a"].set(this.state,"allPaths",JSON.parse(JSON.stringify(this.state.history[t+1]))),this.selectTool(this.state.tool),this.state.selectedPathIndex=null,this.state.selectedPathId=null,this.state.currentPoint={},this.state.livePreviewSegment={},this.state.selectedPointId=null,this.state.selectedPointStep=null,this.state.selectedPointIndex=null,this.state.isFirstPoint=!0},setStrokeLinecap(t){const{selectedPathIndex:e}=this.state;this.state.allPaths[e].strokeLinecap=t},setStrokeLinejoin(t){const{selectedPathIndex:e}=this.state;this.state.allPaths[e].strokeLinejoin=t},setStrokeWidth(t){const{selectedPathIndex:e}=this.state;this.state.allPaths[e].strokeWidth=t},joinPoints(t){let e=Object.assign({},this.state.allPaths[t].definition[0]);e.type="Z",e.dest={},e.id=(new Date).getTime(),this.state.allPaths[t].definition.push(e)},createSVG(){const t=document.createElement("div"),e=document.createElementNS("http://www.w3.org/2000/svg","svg");d.state.allPaths.forEach(t=>{const s=document.createElementNS("http://www.w3.org/2000/svg","path");let i="";t.definition.forEach(t=>{i+=[t.type,t.curve1.x,t.curve1.y,t.curve2.x,t.curve2.y,t.dest.x,t.dest.y].join(" ")}),s.setAttribute("d",i),s.setAttribute("stroke-width",t.strokeWidth),s.setAttribute("translate","rotate("+t.rotation+" "+t.rotationCenter.x+" "+t.rotationCenter.y),e.appendChild(s)}),t.appendChild(e),alert(t.innerHTML)}};var h=d,u={name:"LeftPanel",data:function(){return{store:h}},methods:{newPath:function(){this.store.createPath(),this.store.selectTool("PEN")}}},p=u,f=(s("9bd8"),s("2877")),v=Object(f["a"])(p,o,r,!1,null,"2db4b631",null),P=v.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-right-panel shadow position-absolute top-0 right-0 h-100"},[null!=t.store.state.selectedPathIndex?s("div",{staticClass:"accordion"},[s("AccordionItem",{attrs:{open:!0,title:"Transformation"}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Rotation")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.rotate,expression:"rotate",modifiers:{number:!0}}],staticClass:"form-input-range w-50 display-inline mr-2",attrs:{type:"range",min:"0",max:"360"},domProps:{value:t.rotate},on:{focus:t.updateCenter,__r:function(e){t.rotate=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.rotate,expression:"rotate",modifiers:{number:!0}}],staticClass:"form-input w-25 display-inline",attrs:{type:"number"},domProps:{value:t.rotate},on:{focus:t.updateCenter,input:function(e){e.target.composing||(t.rotate=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Scale")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.scale,expression:"scale",modifiers:{number:!0}}],staticClass:"form-input-range w-50 display-inline mr-2",attrs:{type:"range",min:"0.01",max:"5",step:"0.01"},domProps:{value:t.scale},on:{focus:t.updateCenter,__r:function(e){t.scale=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.scale,expression:"scale",modifiers:{number:!0}}],staticClass:"form-input w-25 display-inline mr-1",attrs:{type:"number",min:"0.01",step:"0.01"},domProps:{value:t.scale},on:{focus:t.updateCenter,input:function(e){e.target.composing||(t.scale=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),s("button",{staticClass:"btn btn-alt-gray-3 btn-sm btn-circle",on:{click:t.resetScaleVal}},[s("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 4 12 L 8 17 L 20 7","stroke-width":"2"}})])])])]),s("AccordionItem",{attrs:{open:!0,title:"Stroke"}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Line End")]),s("label",{staticClass:"form-radio mr-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeLinejoin,expression:"strokeLinejoin"}],attrs:{value:"miter",type:"radio",name:"radio-linejoin"},domProps:{checked:t._q(t.strokeLinejoin,"miter")},on:{change:function(e){t.strokeLinejoin="miter"}}}),s("i",{staticClass:"radio"}),s("span",[s("svg",{attrs:{height:"24",width:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 21 21 L 3 21 L 3 3 L 21 3 L 21 21 Z M 12 21 L 12 12 L 21 12 ","stroke-width":"2"}})])])]),s("label",{staticClass:"form-radio mr-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeLinejoin,expression:"strokeLinejoin"}],attrs:{value:"round",type:"radio",name:"radio-linejoin"},domProps:{checked:t._q(t.strokeLinejoin,"round")},on:{change:function(e){t.strokeLinejoin="round"}}}),s("i",{staticClass:"radio"}),s("span",[s("svg",{attrs:{height:"24",width:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 21 21 L 3 21 S 3 11 3 11 C 3 6 6 3 11 3 L 21 3 L 21 21 Z M 12 21 L 12 12 L 21 12 ","stroke-width":"2"}})])])]),s("label",{staticClass:"form-radio mr-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeLinejoin,expression:"strokeLinejoin"}],attrs:{value:"bevel",type:"radio",name:"radio-linejoin"},domProps:{checked:t._q(t.strokeLinejoin,"bevel")},on:{change:function(e){t.strokeLinejoin="bevel"}}}),s("i",{staticClass:"radio"}),s("span",[s("svg",{attrs:{height:"24",width:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 21 21 L 3 21 L 3 11 L 11 3 L 21 3 L 21 21 Z M 12 21 L 12 12 L 21 12 ","stroke-width":"2"}})])])])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Line End")]),s("label",{staticClass:"form-radio mr-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeLinecap,expression:"strokeLinecap"}],attrs:{value:"round",type:"radio",name:"radio-linecap"},domProps:{checked:t._q(t.strokeLinecap,"round")},on:{change:function(e){t.strokeLinecap="round"}}}),s("i",{staticClass:"radio"}),s("span",[s("svg",{attrs:{height:"24",width:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 21 21 L 11 21 C 0 21 0 3 11 3 L 21 3 L 21 21 Z M 12 12 L 21 12 Z M 12 15 L 12 9 M 11 3 ","stroke-width":"2"}})])])]),s("label",{staticClass:"form-radio mr-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeLinecap,expression:"strokeLinecap"}],attrs:{value:"butt",type:"radio",name:"radio-linecap"},domProps:{checked:t._q(t.strokeLinecap,"butt")},on:{change:function(e){t.strokeLinecap="butt"}}}),s("i",{staticClass:"radio"}),s("span",[s("svg",{attrs:{height:"24",width:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 21 21 L 11 21 L 11 3 L 21 3 L 21 21 Z M 12 12 L 21 12 Z M 12 15 L 12 9 ","stroke-width":"2"}})])])]),s("label",{staticClass:"form-radio mr-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeLinecap,expression:"strokeLinecap"}],attrs:{value:"square",type:"radio",name:"radio-linecap"},domProps:{checked:t._q(t.strokeLinecap,"square")},on:{change:function(e){t.strokeLinecap="square"}}}),s("i",{staticClass:"radio"}),s("span",[s("svg",{attrs:{height:"24",width:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 21 21 L 3 21 L 3 3 L 21 3 L 21 21 Z M 12 12 L 21 12 Z M 12 15 L 12 9 ","stroke-width":"2"}})])])])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Stroke width")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.strokeWidth,expression:"strokeWidth",modifiers:{number:!0}}],staticClass:"form-input-range w-50 display-inline mr-2",attrs:{type:"range",min:"0.5",max:"6",step:"0.5"},domProps:{value:t.strokeWidth},on:{__r:function(e){t.strokeWidth=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.strokeWidth,expression:"strokeWidth",modifiers:{number:!0}}],staticClass:"form-input w-25 display-inline",attrs:{type:"number"},domProps:{value:t.strokeWidth},on:{input:function(e){e.target.composing||(t.strokeWidth=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),"M"!==t.segmentType?s("AccordionItem",{attrs:{title:"Segment Settings"}},[t._v(" change to "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.segmentType,expression:"segmentType"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.segmentType=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"L"}},[t._v("Line")]),s("option",{attrs:{value:"C"}},[t._v("Bezier")])])]):t._e()],1):t._e(),s("div",{staticClass:"position-absolute bottom-0 p-2 w-100"},[s("button",{staticClass:"btn btn-primary w-100 mb-0",on:{click:t.store.createSVG}},[t._v(" Get Code ")])])])},x=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"accordion-item",class:{open:t.isOpen}},[s("div",{staticClass:"accordion-btn text-uppercase text-bold",on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v(" "+t._s(t.title)+" ")]),s("div",{staticClass:"accordion-content-wrapper"},[s("div",{staticClass:"accordion-content"},[t._t("default")],2)])])},g=[],b={name:"AccordionItem",props:{title:String,open:Boolean},data:function(){return{isOpen:this.open||!1}}},w=b,L=(s("bfc3"),Object(f["a"])(w,y,g,!1,null,"5f953900",null)),C=L.exports,k={name:"RightPanel",components:{AccordionItem:C},data:function(){return{store:h}},computed:{rotate:{get(){return this.store.state.allPaths[this.store.state.selectedPathIndex].rotation||0},set(t){this.store.updateRotation(t)}},scale:{get(){return this.store.state.allPaths[this.store.state.selectedPathIndex].scale.x||1},set(t){this.store.updateScale(t,t)}},strokeLinecap:{get(){return this.store.state.allPaths[h.state.selectedPathIndex].strokeLinecap},set(t){this.store.setStrokeLinecap(t)}},strokeLinejoin:{get(){return this.store.state.allPaths[h.state.selectedPathIndex].strokeLinejoin},set(t){this.store.setStrokeLinejoin(t)}},strokeWidth:{get(){return this.store.state.allPaths[h.state.selectedPathIndex].strokeWidth},set(t){this.store.setStrokeWidth(t)}},segmentType:{get(){const{allPaths:t,selectedPathIndex:e,selectedPointIndex:s}=this.store.state;if(null!==s)return t[e].definition[s].type},set(t){"C"===t&&(this.store.state.allPaths[h.state.selectedPathIndex].definition[h.state.selectedPointIndex].curve1={x:0,y:0},this.store.state.allPaths[h.state.selectedPathIndex].definition[h.state.selectedPointIndex].curve2={x:0,y:0}),"L"===t&&(this.store.state.allPaths[h.state.selectedPathIndex].definition[h.state.selectedPointIndex].curve1={},this.store.state.allPaths[h.state.selectedPathIndex].definition[h.state.selectedPointIndex].curve2={}),this.store.state.allPaths[h.state.selectedPathIndex].definition[h.state.selectedPointIndex].type=t}}},methods:{resetScaleVal:function(){const{allPaths:t,selectedPathIndex:e}=this.store.state;t[e].scale.x=1,t[e].scale.y=1},updateCenter:function(){if(window.SELECTED_PATH){const t=window.SELECTED_PATH.getBBox();this.store.updatePathCenter(t),this.store.updateRotationCenter()}}}},M=k,S=(s("62eb"),Object(f["a"])(M,m,x,!1,null,"a696a8e6",null)),I=S.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-top-panel p-1"},[s("button",{staticClass:"btn btn-alt-gray-3 btn-sm mr-1 mb-0",on:{click:t.historyUndo}},[s("svg",{attrs:{width:"24",height:"16",viewBox:"0 0 24 16",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 21 17 C 21 13 18 10 14 10 L 4 10 M 7 6 L 3 10 L 7 14 ","stroke-width":"2"}})])]),s("button",{staticClass:"btn btn-alt-gray-3 btn-primary btn-sm mb-0",class:{disabled:-1===t.store.state.historyPos},attrs:{disabled:-1===t.store.state.historyPos},on:{click:t.historyRedo}},[s("svg",{attrs:{width:"24",height:"16",viewBox:"0 0 24 16",fill:"none",stroke:"currentColor"}},[s("path",{attrs:{d:"M 21 17 C 21 13 18 10 14 10 L 4 10 M 7 6 L 3 10 L 7 14 ","stroke-width":"2",transform:"scale(-1,1) translate(-24,0)"}})])]),s("div",{staticClass:"position-absolute right-0 top-0 py-2 px-4"},[s("div",{staticClass:"form-group display-inline ml-2"},[s("label",{staticClass:"form-switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.state.snapToGrid,expression:"store.state.snapToGrid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.store.state.snapToGrid)?t._i(t.store.state.snapToGrid,null)>-1:t.store.state.snapToGrid},on:{change:function(e){var s=t.store.state.snapToGrid,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=null,o=t._i(s,a);i.checked?o<0&&t.$set(t.store.state,"snapToGrid",s.concat([a])):o>-1&&t.$set(t.store.state,"snapToGrid",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.store.state,"snapToGrid",n)}}}),s("i",{staticClass:"switch"}),s("span",[t._v("Snap to Grid")])])]),s("div",{staticClass:"form-group display-inline ml-2"},[s("label",{staticClass:"form-switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.state.hideControls,expression:"store.state.hideControls"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.store.state.hideControls)?t._i(t.store.state.hideControls,null)>-1:t.store.state.hideControls},on:{change:function(e){var s=t.store.state.hideControls,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=null,o=t._i(s,a);i.checked?o<0&&t.$set(t.store.state,"hideControls",s.concat([a])):o>-1&&t.$set(t.store.state,"hideControls",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.store.state,"hideControls",n)}}}),s("i",{staticClass:"switch"}),s("span",[t._v("Hide Controls")])])])])])},T=[],_={name:"TopPanel",data:function(){return{store:h}},methods:{historyUndo(){this.store.state.historyPos!==this.store.state.history.length-1&&(this.store.setHistoryPos(1),this.store.historyGoTo(this.store.state.historyPos))},historyRedo(){-1!==this.store.state.historyPos&&(this.store.setHistoryPos(-1),this.store.historyGoTo(this.store.state.historyPos))}}},j=_,N=(s("ef35"),Object(f["a"])(j,E,T,!1,null,"599bc42d",null)),D=N.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v_app-canvas position-relative shadow",on:{mouseup:t.endPointMove}},[s("svg",{staticClass:"w-100",attrs:{stroke:"black",viewBox:"0 0 "+t.store.state.viewBox.x+" "+t.store.state.viewBox.y}},t._l(t.store.state.allPaths,(function(t,e){return s("SvgPath",{key:t.id,ref:t.id,refInFor:!0,attrs:{definition:t.definition,path:t,id:t.id,index:e}})})),1),s("ControlsLayer",{on:{handleMouseDown:t.handleMouseDown,handleMouseMove:t.handleMouseMove}})],1)},A=[],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("path",{ref:"path",class:{active:t.isActive},attrs:{d:t.dToString,fill:"none",transform:t.transform,"stroke-linecap":t.path.strokeLinecap,"stroke-linejoin":t.path.strokeLinejoin,"stroke-width":t.path.strokeWidth}})},O=[],G={name:"SvgPath",props:{definition:Array,id:Number,index:Number,path:Object},data:function(){return{store:h}},computed:{dToString:function(){let t="";return this.definition.forEach(e=>{t+=[e.type,e.curve1.x,e.curve1.y,e.curve2.x,e.curve2.y,e.dest.x,e.dest.y].join(" ")}),t},isActive:function(){return this.store.state.selectedPathId===this.id},transform:function(){let t="";return this.path.rotation&&(t+=`rotate(${this.path.rotation} ${this.path.rotationCenter.x} ${this.path.rotationCenter.y}) `),t}},updated:function(){const{selectedPathId:t}=this.store.state;this.id===t&&window.SELECTED_PATH!==this.$refs.path&&(window.SELECTED_PATH=this.$refs.path)},mounted:function(){const{selectedPathId:t}=this.store.state;this.id===t&&(window.SELECTED_PATH=this.$refs.path)}},H=G,X=Object(f["a"])(H,B,O,!1,null,"246bae93",null),Y=X.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return this.store.state.hideControls?t._e():s("svg",{ref:"svg",staticClass:"controls-layer position-absolute w-100 h-100 top-0 left-0",on:{mousedown:t.handleMouseDown,mousemove:t.handleMouseMove}},[t._l(t.store.state.allPaths,(function(e,i){return s("EditPath",{key:e.id,attrs:{definition:e.definition,path:e,id:e.id,index:i,scaleX:t.scaleX,scaleY:t.scaleY}})})),t._l(t.store.state.allPaths,(function(e,i){return s("g",{key:"group-"+e.id,class:{active:e.id===t.store.state.selectedPathId},attrs:{transform:t.transform(e)}},[t._l(e.definition,(function(n,a){return s("g",{key:"seg-"+n.id,class:{hide:i!==t.store.state.selectedPathIndex||"SELECT"===t.store.state.tool},attrs:{stroke:"none",fill:"#363bd2"}},["C"===n.type?s("path",{attrs:{d:"M"+e.definition[a-1].dest.x*t.scaleX+" "+e.definition[a-1].dest.y*t.scaleY+" L "+n.curve1.x*t.scaleX+" "+n.curve1.y*t.scaleY,stroke:"#363bd2","stroke-width":"1"}}):t._e(),"C"===n.type?s("circle",{attrs:{cx:n.curve1.x*t.scaleX,cy:n.curve1.y*t.scaleY,r:"4"},on:{mousedown:function(s){return t.pointHandleMouseDown(n.id,a,"curve1",e.id,i)}}}):t._e(),"C"===n.type?s("path",{attrs:{d:"M"+n.dest.x*t.scaleX+" "+n.dest.y*t.scaleY+" L "+n.curve2.x*t.scaleX+" "+n.curve2.y*t.scaleY,stroke:"#363bd2","stroke-width":"1"}}):t._e(),"C"===n.type?s("circle",{attrs:{cx:n.curve2.x*t.scaleX,cy:n.curve2.y*t.scaleY,r:"4"},on:{mousedown:function(s){return t.pointHandleMouseDown(n.id,a,"curve2",e.id,i)}}}):t._e(),"Z"!==n.type?s("rect",{key:"point-"+n.id,staticClass:"path-point",class:{active:n.id===t.store.state.selectedPointId},attrs:{x:n.dest.x*t.scaleX-5,y:n.dest.y*t.scaleY-5,width:"10",height:"10"},on:{mousedown:function(s){return t.pointHandleMouseDown(n.id,a,"dest",e.id,i)},mouseup:t.drawLine}}):t._e()])})),"SELECT"===t.store.state.tool?s("rect",{key:"bbox-"+e.id,class:{hide:e.id!==t.store.state.selectedPathId},attrs:{x:e.bbox.x*t.scaleX,y:e.bbox.y*t.scaleY,width:e.bbox.width*t.scaleX,height:e.bbox.height*t.scaleY,fill:"none",stroke:"red"}}):t._e()],2)})),t.hasLivePreview?s("path",{class:{hide:t.store.state.hideControls},attrs:{id:"live-preview-path",d:t.livePreview,stroke:"#363bd2",transform:t.transform(t.store.state.allPaths[t.store.state.selectedPathIndex])}}):t._e()],2)},Z=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("path",{ref:"path",staticClass:"edit-path",class:{active:t.isActive},attrs:{d:t.dToString,fill:"none",transform:t.transform},on:{click:t.handleClick,mousedown:t.handleMouseDown}})},q=[],U={name:"EditPath",props:{scaleX:Number,scaleY:Number,definition:Array,id:Number,index:Number,path:Object},data:function(){return{store:h}},computed:{dToString:function(){let t="";const{scaleX:e,scaleY:s}=this;return this.definition.forEach(i=>{t+=[i.type,void 0!==i.curve1.x?i.curve1.x*e:"",void 0!==i.curve1.y?i.curve1.y*s:"",void 0!==i.curve2.x?i.curve2.x*e:"",void 0!==i.curve2.y?i.curve2.y*s:"",void 0!==i.dest.x?i.dest.x*e:"",void 0!==i.dest.y?i.dest.y*s:""].join(" ")}),t},isActive:function(){const{selectedPathId:t,tool:e}=this.store.state;return("EDIT"===e||"PEN"===e)&&t===this.id},transform:function(){let t="";const{scaleX:e,scaleY:s}=this;return this.path.rotation&&(t+=`rotate(${this.path.rotation} ${this.path.rotationCenter.x*e} ${this.path.rotationCenter.y*s})`),t}},methods:{handleClick:function(){this.store.selectPath(this.id,this.index)},handleMouseDown:function(){"SELECT"===this.store.state.tool&&(this.store.state.isMovingPath=!0)}}},J=U,F=(s("984f"),Object(f["a"])(J,R,q,!1,null,"5011f092",null)),V=F.exports,z={name:"ControlsLayer",components:{EditPath:V},data:function(){return{store:h,private:{width:0,height:0}}},mounted:function(){this.private.width=this.$refs.svg.clientWidth,this.private.height=this.$refs.svg.clientHeight,window.addEventListener("resize",function(){this.private.width=this.$refs.svg.clientWidth,this.private.height=this.$refs.svg.clientHeight}.bind(this))},computed:{scaleX:function(){const{viewBox:t}=this.store.state,{width:e}=this.private;return e/t.x},scaleY:function(){const{viewBox:t}=this.store.state,{height:e}=this.private;return e/t.y},hasLivePreview:function(){return!h.state.isFirstPoint&&"PEN"===h.state.tool},livePreview:function(){const{currentPoint:t,livePreviewSegment:e}=this.store.state,{scaleX:s,scaleY:i}=this;let n="";return e.dest&&(n=["M",t.x*s,t.y*i,e.type,e.dest.x*s,e.dest.y*i].join(" ")),n}},methods:{transform:function(t){const{scaleX:e,scaleY:s}=this;let i="";return t&&t.rotation&&(i+=`rotate(${t.rotation} ${t.rotationCenter.x*e} ${t.rotationCenter.y*s})`),i},selectPath:function(t,e){this.store.selectPath(t,e)},startPointMove:function(t,e){this.store.setSelectedPoint(t,e)},drawLine(){let{tool:t}=this.store.state;"PEN"===t&&(this.store.state.currentSegment="L",this.store.state.isDrawing=!1)},handleMouseDown(t){let{tool:e}=this.store.state;console.log(t.target.matches(".controls-layer")),"PEN"!==e&&t.target.matches(".controls-layer")&&this.store.unselectPath(),this.$emit("handleMouseDown",t)},handleMouseMove(t){this.$emit("handleMouseMove",t)},pointHandleMouseDown(t,e,s,i,n){const{tool:a,allPaths:o,selectedPointIndex:r,selectedPathId:l}=this.store.state;let c=!1;const d=function(){return r===o[n].definition.length-1},h=function(){return e===o[n].definition.length-1};"PEN"===a&&l===i&&(0===e&&d||h&&0===r)&&(c=!0),this.selectPath(i,n),this.startPointMove(t,s),c&&this.store.joinPoints(n)}}},K=z,Q=(s("1e56"),Object(f["a"])(K,W,Z,!1,null,"601957ca",null)),tt=Q.exports,et={name:"MainCanvas",data:function(){return{store:h}},components:{SvgPath:Y,ControlsLayer:tt},computed:{hasLivePreview:function(){return!h.state.isFirstPoint&&"PEN"===h.state.tool},livePreview:function(){const{currentPoint:t,livePreviewSegment:e}=this.store.state;let s="";return e.dest&&(s=["M",t.x,t.y,e.type,e.dest.x,e.dest.y].join(" ")),s}},methods:{drawLine(){let{tool:t}=this.store.state;"PEN"===t&&(this.store.state.currentSegment="L",this.store.state.isDrawing=!1)},handleMouseDown:function(t){let e=this.store.state.selectedPathId;e&&this.store.handleMouseDown(t,this.$refs[e][0].$el)},handleMouseMove:function(t){let e=this.store.state.selectedPathId;e&&this.store.handleMouseMove(t,this.$refs[e][0].$el)},selectPath:function(t,e){this.store.selectPath(t,e)},transform:function(t){let e="";return t&&t.rotation&&(e+=`rotate(${t.rotation} ${t.rotationCenter.x} ${t.rotationCenter.y})`),e},startPointMove:function(t,e){this.store.setSelectedPoint(t,e)},endPointMove:function(){this.store.handleMouseUp()}}},st=et,it=(s("ba29"),Object(f["a"])(st,$,A,!1,null,"2945417c",null)),nt=it.exports,at={name:"App",data:function(){return{store:h}},created:function(){this.store.createPath()},components:{LeftPanel:P,RightPanel:I,TopPanel:D,MainCanvas:nt}},ot=at,rt=(s("034f"),Object(f["a"])(ot,n,a,!1,null,null,null)),lt=rt.exports;i["a"].config.productionTip=!0,new i["a"]({data:h,render:t=>t(lt)}).$mount("#app")},"62eb":function(t,e,s){"use strict";var i=s("85d9"),n=s.n(i);n.a},"7d1c":function(t,e,s){},"802b":function(t,e,s){},"811f":function(t,e,s){},"85d9":function(t,e,s){},"85ec":function(t,e,s){},"984f":function(t,e,s){"use strict";var i=s("c0db"),n=s.n(i);n.a},"9a1d":function(t,e,s){},"9bd8":function(t,e,s){"use strict";var i=s("811f"),n=s.n(i);n.a},ba29:function(t,e,s){"use strict";var i=s("9a1d"),n=s.n(i);n.a},bfc3:function(t,e,s){"use strict";var i=s("7d1c"),n=s.n(i);n.a},c0db:function(t,e,s){},ef35:function(t,e,s){"use strict";var i=s("802b"),n=s.n(i);n.a}});
//# sourceMappingURL=app.d317b5ea.js.map