(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n    font-family: Arial, sans-serif;\n    background-color: #f2f2f2;\n    margin: 0;\n    padding: 0;\n}\n  \n#game-container {\n    text-align: center;\n    padding: 20px;\n}\n  \nh1 {\n    color: #333;\n}\n\nbutton {\n    padding: 10px 20px;\n    font-size: 16px;\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n  \nbutton:hover {\n    background-color: #0056b3;\n}\n\n/* Estilos para los tableros */\n.boards-container {\n    display: flex;\n    justify-content: center;\n}\n\n#player-board,\n#ai-board {\n    width: 400px;\n    height: 400px;\n    background-color: #ddd;\n    margin: 20px auto;\n    border-collapse: collapse; /* Para colapsar los bordes de las celdas */\n}\n\n.ai-board {\n    margin-left: 40px; /* Ajusta el margen izquierdo para separar las tablas */\n}\n  \n#player-board h2, #ai-board h2 {\n    margin-top: 0;\n}\n  \ntable {\n    border-collapse: collapse;\n    width: 300px;\n    height: 300px;\n}\n\ntd {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #000;\n}\n\n.hidden {\n    background-color: #c7e1ff !important;\n}\n\n.ship {\n    border: 1px solid #000;\n}\n\n.water {\n    background-color: #c7e1ff;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=o(h,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},777:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(777),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),h=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;class m{constructor(e,n){this.length=e,this.validateCoordinates(n),this.position=n,this.hits=[],this.isSunk=!1}validateCoordinates(e){if(e.length!==this.length)throw new Error("Invalid coordinates");if(!e.every((([e,n])=>e>=0&&e<10&&n>=0&&n<10)))throw new Error("Invalid coordinates")}hit(e){this.hits.push(e),this.hits.length===this.length&&(this.isSunk=!0)}isSunk(){return isSunk}}class v{constructor(){this.board=Array(10).fill(null).map((()=>Array(10)));for(let e=0;e<10;e++)for(let n=0;n<10;n++)this.board[e][n]={hasShip:!1,isShot:!1};this.ships=[]}placeShip(e){if(!(e instanceof m))throw new Error("Not Ship object");const n=e.position;if(!n.every((([e,n])=>!this.board[e][n].hasShip)))throw new Error("Cannot place ship at specified coordinates");n.forEach((([e,n])=>{this.board[e][n]={hasShip:!0,isShot:!1}})),this.ships.push(e)}findShipByCoord(e){return this.ships.find((n=>n.position.some((n=>n[0]===e[0]&&n[1]===e[1]))))}getShipPosition(e){return this.ships.findIndex((n=>n.position.some((n=>n[0]===e[0]&&n[1]===e[1]))))}receiveAttack(e){const[n,t]=e;return this.board[n][t].isShot?"Already shot position":(this.board[n][t].isShot=!0,this.board[n][t].hasShip?(this.findShipByCoord(e).hit(e),"Hit"):"No hit")}gameLost(){return this.ships.every((e=>e.isSunk))}}class b{constructor(e,n){this.gameboard=e,this.enemyGameboard=n}attackEnemy(e){return this.isValidMove(e)?this.enemyGameboard.receiveAttack(e):"Invalid move"}isValidMove(e){return e[0]>=0&&e[0]<10&&e[1]>=0&&e[1]<10&&!this.enemyGameboard.board[e[0]][e[1]].isShot}}class g extends b{generateAttack(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}}let y=null;function x(e,n){const t=["#111111","#222222","#333333","#444444","#555555"];for(let r=0;r<10;r++){const o=document.createElement("tr");for(let a=0;a<10;a++){const i=document.createElement("td");if(n.board[r][a].hasShip){const e=n.getShipPosition([r,a]);i.style.backgroundColor=t[e],i.classList.add("ship")}else i.classList.add("water");"ai-board"===e.id&&i.classList.add("hidden"),o.appendChild(i)}e.querySelector("tbody").appendChild(o)}}function S(e,n,t){const[r,o]=e,a=document.querySelectorAll("#player-board td")[10*r+o];"Hit"===n?a.style.backgroundColor="red":"No hit"===n&&(a.style.backgroundColor="gray")}function w(){let e=y;return y=null,e}let k=!1;k=!0,async function(){const e=new v,n=new v,t=new b(e,n),r=new g(n,e),o=[{length:3,coordinates:[[3,2],[3,3],[3,4]]},{length:4,coordinates:[[4,2],[5,2],[6,2],[7,2]]},{length:4,coordinates:[[8,2],[8,3],[8,4],[8,5]]},{length:5,coordinates:[[5,3],[5,4],[5,5],[5,6],[5,7]]}];for(o.forEach((n=>{const t=new m(n.length,n.coordinates);e.placeShip(t)})),o.forEach((e=>{const t=new m(e.length,e.coordinates);n.placeShip(t)})),function(e,n){x(document.getElementById("player-board"),e),x(document.getElementById("ai-board"),n),document.querySelectorAll("#ai-board td").forEach((e=>{e.addEventListener("click",(()=>{e.classList.remove("hidden");const n=e.parentNode.rowIndex,t=e.cellIndex;y=[n,t]}))}))}(e,n);;){let e=await new Promise((e=>{const n=setInterval((()=>{const t=w();null!==t&&(clearInterval(n),e(t))}),100)}));t.attackEnemy(e),console.log(n);let o=r.generateAttack();for(;!r.isValidMove(o);)o=r.generateAttack();S(o,r.attackEnemy(o))}}()})()})();