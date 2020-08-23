!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){return{TITLE:document.querySelector("#title").value,DESCRIPTION:document.querySelector("#toDoDescription").value,PRIORITY:function(){const e=Array.from(document.querySelectorAll(".priorityLevel"));let t="";for(let n=0;n<e.length;n++)e[n].checked&&(t=e[n].value);return null!=t?t:void 0}(),DUE_DATE:document.querySelector("#dueDate").value}}n.r(t);class l{constructor(){}createToDoListCard(e,t,n,r){let l=this.createDiv("toDoListCard"),o=this.createDiv(),i=this.createDeleteTodoListCard(),a=this.createToDoListCardContent(e,t),c=this.createToDoListCardFooterContent(n,r);return o.appendChild(c),l.appendChild(i),l.appendChild(a),l.appendChild(o),l}createDeleteTodoListCard(){let e=this.createDiv("deleteToDoContainer"),t=this.CreateParagraph("X");return e.appendChild(t),e}createToDoListCardContent(e,t){let n=this.createDiv("toDoListCardContent"),r=this.CreateParagraph(void 0,"toDoListTitle"),l=this.createStrong(e);r.appendChild(l);let o=this.CreateParagraph(t,"toDoListText");return n.appendChild(r),n.appendChild(o),n}createToDoListCardFooterContent(e,t){let n=this.createFooter("toDoListCardFooter"),r=this.CreateParagraph(e),l=this.CreateButton("Edit","toDoEdit"),o="priority"+e,i=this.createDiv(o);i.appendChild(r);let a=this.createDiv();a.appendChild(i),a.appendChild(l);let c=this.createInput("checkbox"),d=this.createDiv("toDoDate"),s=this.CreateParagraph(t);d.appendChild(s);let u=this.createDiv();return u.appendChild(c),u.appendChild(d),n.appendChild(a),n.appendChild(u),n}CreateButton(e,t){let n=document.createElement("button");return n.textContent=e,null!=t&&n.setAttribute("class",t),n}CreateParagraph(e,t){let n=document.createElement("p");return n.textContent=e,null!=t&&n.setAttribute("class",t),n}createDiv(e){let t=document.createElement("div");return null!=e&&t.setAttribute("class",e),t}createInput(e,t){let n=document.createElement("input");return null!=e&&n.setAttribute("type",e),null!=t&&n.setAttribute("class",t),n}createFooter(e){let t=document.createElement("footer");return null!=e&&t.setAttribute("class",e),t}createStrong(e){let t=document.createElement("strong");return t.textContent=e,t}}let o=[];function i(e){!function(){let e=Array.from(document.querySelectorAll(".projectSelected"))[0].firstElementChild.textContent,t=!1;for(let n=0;n<o.length;n++)o[n].originalProjectName===e&&(t=!0);if(!t){let t={storedProjectList:[],originalProjectName:""};t.originalProjectName=e,o.push(t)}}();let t=Array.from(document.querySelectorAll(".projectSelected"))[0].firstElementChild.textContent;for(let n=0;n<o.length;n++)o[n].originalProjectName===t&&o[n].storedProjectList.push(e)}function a(){console.log(o)}function c(){document.querySelector(".positionInputContent").style.display="none"}function d(e){const t=r();!function(e,t,n,r,l){const o=e.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.firstChild,i=e.parentElement.parentElement.parentElement.parentElement.children[1].lastChild,a=e.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.firstChild.firstChild,c=e.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.lastChild.lastChild.firstChild;o.textContent=t,i.textContent=n;let d="priority"+r;a.parentElement.setAttribute("class",d),a.textContent=r,c.textContent=l}(e,t.TITLE,t.DESCRIPTION,t.PRIORITY,t.DUE_DATE),c(),function(){o=[];let e=document.querySelectorAll(".toDoListCard");for(let t=0;t<e.length;t++){i({TITLE:e[t].children[1].firstElementChild.firstElementChild.textContent,DESCRIPTION:e[t].children[1].lastElementChild.textContent,PRIORITY:e[t].children[1].parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.textContent,DUE_DATE:e[t].children[1].parentElement.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.textContent})}a()}()}function s(){const e=document.querySelector("#toDoListSection"),t=r(),n=t.TITLE,o=t.DESCRIPTION,d=t.PRIORITY,s=t.DUE_DATE;let m=new l;e.appendChild(m.createToDoListCard(n,o,d,s)),u(),i({TITLE:n,DESCRIPTION:o,PRIORITY:d,DUE_DATE:s}),c(),a()}function u(e){const t=Array.from(document.querySelectorAll(".toDoEdit")),n=Array.from(document.querySelectorAll(".deleteToDoContainer"));t.length>=1&&(t[t.length-1].addEventListener("click",m),n[n.length-1].firstElementChild.addEventListener("click",C))}function m(e){let t=e.target||e.srcElement;!function(e){let t=e.CURRENT_TITLE,n=e.CURRENT_DESCRIPTION,r=e.CURRENT_PRIORITY,l=e.CURRENT_DUE_DATE;const o=document.querySelector("#title"),i=document.querySelector("#toDoDescription"),a=Array.from(document.querySelectorAll(".priorityLevel")),c=document.querySelector("#dueDate");o.value=t,i.value=n,c.value=l;for(let e=0;e<a.length;e++)a[e].value===r&&(a[e].checked=!0)}(function(e){const t=e.parentElement.parentElement.parentElement.parentElement.children[1].firstChild.firstChild.textContent,n=e.parentElement.parentElement.parentElement.parentElement.children[1].lastChild.textContent,r=e.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.firstChild.firstChild.textContent,l=e.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.lastChild.lastChild.firstChild.textContent;return{CURRENT_TITLE:t,CURRENT_DESCRIPTION:n,CURRENT_PRIORITY:r,CURRENT_DUE_DATE:l}}(t));let n=document.getElementById("createToDoBtn"),r=n.cloneNode(!0);n.parentNode.replaceChild(r,n),document.querySelector("#createToDoBtn").addEventListener("click",()=>{d(t)}),document.querySelector(".positionInputContent").style.display="flex"}function C(e){let t=e.target||e.srcElement;const n=t.parentElement.parentElement.children[1].firstChild.firstChild.textContent,r=t.parentElement.parentElement.children[1].lastChild.textContent,l=t.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent,i=t.parentElement.parentElement.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.textContent;t.parentElement.parentElement.remove(),function(e,t,n,r){let l=Array.from(document.querySelectorAll(".projectSelected"))[0].firstElementChild.textContent;for(let i=0;i<o.length;i++)if(o[i].originalProjectName===l)for(let l=0;l<o[i].storedProjectList.length;l++){let a=o[i].storedProjectList[l].TITLE,c=o[i].storedProjectList[l].DESCRIPTION,d=o[i].storedProjectList[l].PRIORITY,s=o[i].storedProjectList[l].DUE_DATE;a===e&&c===t&&d===n&&s==r&&o[i].storedProjectList.splice(l,1)}}(n,r,l,i)}function p(e){let t=(e.target||e.srcElement).parentElement;document.querySelector(".projectSelected").classList.remove("projectSelected"),t.classList.add("projectSelected"),function(){let e=Array.from(document.querySelectorAll(".toDoListCard"));for(let t=0;t<e.length;t++)e[t].remove();a()}()}!function(){let e=Array.from(document.querySelectorAll(".selectedProjectTitle"));for(let t=0;t<e.length;t++)e[t].addEventListener("click",p)}(),document.querySelector("#createToDoBtn").addEventListener("click",s),document.querySelector("#addList").addEventListener("click",(function(){let e=document.getElementById("createToDoBtn"),t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),document.querySelector("#createToDoBtn").addEventListener("click",s),document.querySelector(".positionInputContent").style.display="flex",function(){const e=document.querySelector("#title"),t=document.querySelector("#toDoDescription"),n=Array.from(document.querySelectorAll(".priorityLevel")),r=document.querySelector("#dueDate");e.value=null,t.value=null,r.value=null;for(let e=0;e<n.length;e++)n[e].checked=!1}()})),document.querySelector("#todoInputCardClose").firstElementChild.addEventListener("click",(function(){document.querySelector(".positionInputContent").style.display="none"}))}]);