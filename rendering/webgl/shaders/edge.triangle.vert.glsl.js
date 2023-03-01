(()=>{"use strict";var n={d:(o,e)=>{for(var t in e)n.o(e,t)&&!n.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})},o:(n,o)=>Object.prototype.hasOwnProperty.call(n,o),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},o={};n.r(o),n.d(o,{default:()=>e});const e="attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  // The only different here with edge.vert.glsl is that we need to handle null\n  // input normal vector. Apart from that, you can read edge.vert.glsl more info\n  // on how it works:\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n  if (normalLength <= 0.0) unitNormal = a_normal;\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * adaptedWebGLThickness, 1)).xy, 0, 1);\n\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";module.exports=o})();