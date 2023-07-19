(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"body {\n    font-family: Arial, sans-serif;\n    background-color: #f2f2f2;\n    margin: 0;\n    padding: 0;\n}\n  \n#game-container {\n    text-align: center;\n    padding: 20px;\n}\n  \nh1 {\n    color: #333;\n}\n\nbutton {\n    padding: 10px 20px;\n    font-size: 16px;\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n  \nbutton:hover {\n    background-color: #0056b3;\n}\n\n/* Estilos para los tableros */\n.boards-container {\n    display: flex;\n    justify-content: center;\n}\n\n#player-board,\n#ai-board {\n    width: 400px;\n    height: 400px;\n    background-color: #ddd;\n    margin: 20px auto;\n    border-collapse: collapse; /* Para colapsar los bordes de las celdas */\n}\n\n.ai-board {\n    margin-left: 40px; /* Ajusta el margen izquierdo para separar las tablas */\n}\n  \n#player-board h2, #ai-board h2 {\n    margin-top: 0;\n}\n  \ntable {\n    border-collapse: collapse;\n    width: 300px;\n    height: 300px;\n}\n\ntd {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #000;\n}\n\n.hidden {\n    background-color: #c7e1ff !important;\n}\n\n.ship {\n    border: 1px solid #000;\n}\n\n.water {\n    background-color: #c7e1ff;\n}\n\n.ghost-ship {\n    width: 40px;\n    height: 40px;\n    background-color: #333;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    pointer-events: none; /* Para que el elemento no afecte a otros eventos del ratón */\n    opacity: 0.5; /* Para hacerlo más transparente */\n}\n\n.hidden-message {\n    display: none;\n}\n\n#message {\n    text-align: center;\n    margin-top: 20px;\n}\n\n#message h3 {\n    font-size: 24px;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=r(h,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),h=t(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;class m{constructor(e,n){this.length=e,this.validateCoordinates(n),this.position=n,this.hits=[],this.isSunk=!1}validateCoordinates(e){if(e.length!==this.length)throw new Error("Invalid coordinates");if(!e.every((([e,n])=>e>=0&&e<10&&n>=0&&n<10)))throw new Error("Invalid coordinates")}hit(e){this.hits.push(e),this.hits.length===this.length&&(this.isSunk=!0)}isSunk(){return isSunk}}class y{constructor(){this.board=Array(10).fill(null).map((()=>Array(10)));for(let e=0;e<10;e++)for(let n=0;n<10;n++)this.board[e][n]={hasShip:!1,isShot:!1};this.ships=[]}placeShip(e){if(!(e instanceof m))throw new Error("Not Ship object");const n=e.position;if(!n.every((([e,n])=>!this.board[e][n].hasShip)))throw new Error("Cannot place ship at specified coordinates");n.forEach((([e,n])=>{this.board[e][n]={hasShip:!0,isShot:!1}})),this.ships.push(e)}findShipByCoord(e){return this.ships.find((n=>n.position.some((n=>n[0]===e[0]&&n[1]===e[1]))))}getShipPosition(e){return this.ships.findIndex((n=>n.position.some((n=>n[0]===e[0]&&n[1]===e[1]))))}receiveAttack(e){const[n,t]=e;return this.board[n][t].isShot?"Already shot position":(this.board[n][t].isShot=!0,this.board[n][t].hasShip?(this.findShipByCoord(e).hit(e),"Hit"):"No hit")}gameLost(){return this.ships.every((e=>e.isSunk))}}class g{constructor(e,n){this.gameboard=e,this.enemyGameboard=n}attackEnemy(e){return this.isValidMove(e)?this.enemyGameboard.receiveAttack(e):"Invalid move"}isValidMove(e){return e[0]>=0&&e[0]<10&&e[1]>=0&&e[1]<10&&!this.enemyGameboard.board[e[0]][e[1]].isShot}}class b extends g{generateAttack(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}}let v=!1,w="U";function x(e){const n=document.getElementById("message");n.querySelector("h3").textContent=e,n.classList.remove("hidden-message")}let k=null;function E(e){const n=e.target;n.classList.contains("water")&&(n.style.backgroundColor="#0759b6"),n.classList.remove("hidden");const t=n.parentNode.rowIndex,o=n.cellIndex;k=[t,o]}function S(e,n){L(document.getElementById("player-board"),e),L(document.getElementById("ai-board"),n)}function L(e,n){const t=["#111111","#222222","#333333","#444444","#555555"];for(let o=0;o<10;o++){const r=document.createElement("tr");for(let a=0;a<10;a++){const i=document.createElement("td");if(n.board[o][a].hasShip){const e=n.getShipPosition([o,a]);i.style.backgroundColor=t[e],i.classList.add("ship")}else i.classList.add("water");"ai-board"===e.id&&i.classList.add("hidden"),r.appendChild(i)}e.querySelector("tbody").appendChild(r)}}function A(e,n){const[t,o]=e,r=document.querySelectorAll("#player-board td")[10*t+o];"Hit"===n?r.style.backgroundColor="red":"No hit"===n&&(r.style.backgroundColor="#0759b6")}function C(){return new Promise((e=>{const n=setInterval((()=>{const t=I();null!==t&&(clearInterval(n),e(t))}),100)}))}function I(){let e=k;return k=null,e}document.querySelectorAll("#ai-board td").forEach((e=>{e.addEventListener("click",E)})),document.getElementById("start-button").addEventListener("click",(function(e){(function(){const e=document.getElementById("player-board"),n=document.getElementById("ai-board");e.innerHTML="",e.appendChild(document.createElement("tbody")),n.innerHTML="",n.appendChild(document.createElement("tbody"))})(),S(new y,new y),document.getElementById("message").classList.add("hidden-message")})),document.addEventListener("keydown",(function(e){if("ArrowLeft"===e.key||"ArrowRight"===e.key){switch(console.log("RFD"),w){case"R":w="ArrowLeft"===e.key?"U":"D";break;case"U":w="ArrowLeft"===e.key?"L":"R";break;case"L":w="ArrowLeft"===e.key?"D":"U";break;case"D":w="ArrowLeft"===e.key?"R":"L"}console.log(w)}})),v=!0,async function(){const e=new y,n=new y,t=new g(e,n),o=new b(n,e);!async function(e){const n=document.createElement("div");n.classList.add("ghost-ship"),document.body.appendChild(n),w="R",n.style.width="200px",document.addEventListener("mousemove",(e=>{!function(e,n){let t=e.clientX-15,o=e.clientY-15;switch(w){case"R":t=e.clientX-15,o=e.clientY-15;break;case"L":w="ArrowLeft"===e.key?"D":"U";break;case"D":w="ArrowLeft"===e.key?"R":"L"}n.style.left=`${t}px`,n.style.top=`${o}px`}(e,n)}))}();const r=[{length:3,coordinates:[[3,2],[3,3],[3,4]]},{length:4,coordinates:[[4,2],[5,2],[6,2],[7,2]]},{length:4,coordinates:[[8,2],[8,3],[8,4],[8,5]]},{length:5,coordinates:[[5,3],[5,4],[5,5],[5,6],[5,7]]}];for(r.forEach((n=>{const t=new m(n.length,n.coordinates);e.placeShip(t)})),r.forEach((e=>{const t=new m(e.length,e.coordinates);n.placeShip(t)})),S(e,n);!a();){let e=await C();for(;!t.isValidMove(e);)e=await C();t.attackEnemy(e),a();let n=o.generateAttack();for(;!o.isValidMove(n);)n=o.generateAttack();A(n,o.attackEnemy(n))}function a(){return n.gameLost()?(x("You Win!"),!0):!!e.gameLost()&&(x("You Lose!"),!0)}}()})()})();