(function(t){function e(e){for(var i,a,o=e[0],u=e[1],c=e[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);s&&s(e);while(f.length)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],i=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(i=!1)}i&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},l=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var s=u;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"container"},[null!=t.fileData?[n("div",{staticClass:"col"},[n("p",[t._v("Записать объект для хранения (Объект ID)")]),n("button",{on:{click:function(e){return t.writeRes(t.result,t.dictionary,"файл для хранения")}}},[t._v("Скачать")])]),n("div",{staticClass:"col"},[n("p",[t._v("Записать объект для хранения с возможностью восстановления массива исходных значений (массивы ID)")]),n("button",{on:{click:function(e){return t.writeRes(t.ids,t.dictionary,"файл для хранения ")}}},[t._v("Скачать")])])]:[n("div",{staticClass:"col"},[n("p",[t._v('Приложите файл json (массив объектов с ключом "data") для формирования объекта для хранения')]),n("form",[n("input",{attrs:{type:"file",name:"fileinput",accept:".json",id:"fileinput"},on:{change:t.importFile}})])]),n("div",{staticClass:"col"},[n("p",[t._v('Приложите файл json (массив id с ключом "structure" и массивом значений с ключом "dictionary") для восстановления массива исходных значений ')]),n("form",[n("input",{attrs:{type:"file",name:"fileinput2",accept:".json",id:"fileinput2"},on:{change:t.importFile2}})])])]],2),n("div",{attrs:{id:"structureDiv"}})])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task"},[n("h1",[t._v("Тестовое задание")]),n("p",[t._v(' Из полей "value" приложенной структуры создать объект, пригодный на Ваш взгляд, для хранения иерархических данных и отрисовать их, как вложенный список. ')])])}],a=(n("4160"),n("fb6a"),n("b0c0"),n("ac1f"),n("1276"),n("159b"),n("b85c")),o={data:function(){return{fileData:null,limit:void 0,name:"App",result:{},dict:{},maxlen:0,dictionary:[],file:null}},computed:{ids:function(){return this.idStructure(this.fileData.data,this.limit)}},mounted:function(){},methods:{importFile:function(t){var e=this,n=t.target.files[0]||t.dataTransfer.files[0],i=(document.getElementById("fileinput"),new FileReader);i.readAsText(n),i.onload=function(){e.fileData=JSON.parse(i.result),e.hi(e.ids,e.dictionary)}},importFile2:function(t){var e=this,n=t.target.files[0]||t.dataTransfer.files[0],i=(document.getElementById("fileinput"),new FileReader);i.readAsText(n),i.onload=function(){var t=JSON.parse(i.result);e.restore(t)}},writeRes:function(t,e,n){var i=null==e?{structure:t,dictionary:e}:t,r="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(i)),l=document.createElement("a");l.setAttribute("href",r),l.setAttribute("download",n||"file.json"),l.click()},hi:function(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=this.result,l=0;o(i,l,r)}function o(t,n,i){var r=t[n-1],l=document.getElementById("structureDiv"),u=t.slice(0,n);if(!i.hasOwnProperty(r)&&void 0!=u){i[r]={};var c=document.getElementById(t.slice(0,n-1))||l;0===n&&(c=l);var s=document.createElement("ul");n>1&&(s.className="hidden"),s.id=u;var d=document.createElement("li");d.textContent=e[r]||r,d.className="structure",d.onclick=function(t){var e,n=Object(a["a"])(t.target.parentElement.children);try{for(n.s();!(e=n.n()).done;){var i,r,l=e.value;"ul"==l.localName&&(null===l||void 0===l||null===(i=l.classList)||void 0===i||i.toggle("hidden")),"li"==l.localName&&(null===l||void 0===l||null===(r=l.classList)||void 0===r||r.toggle("active"))}}catch(o){n.e(o)}finally{n.f()}},s.append(d),c.append(s),c=document.getElementById(t.slice(0,n-1))||l}n++,n<=t.length&&o(t,n,i[r])}},restore:function(t){if(null!=t&&null!=t.structure&&null!=t.dictionary){var e=t.structure,n=t.dictionary;this.hi(e,n);var i={data:[]};e.forEach((function(t){for(var e="",r=0;r<t.length;r++){var l=n[t[r]];r<t.length&&(l+="\\"),e+=l}i.data.push(e)})),this.writeRes(i,null,"Массив значений.json")}else alert("Неверный формат файла")},idStructure:function(t,e){var n=null!=e?t.slice(0,e):t;this.maxlen=0;var i=0;console.table("idStructure -> List",n);for(var r=0;r<n.length;r++){var l,a,o,u=n[r];u.splitedKey=null===(l=u.key)||void 0===l?void 0:l.split("\\"),u.splitedVal=null===(a=u.value)||void 0===a?void 0:a.split("\\"),u.value=[],u.splitedVal.length>this.maxlen&&(this.maxlen=(null===(o=u.splitedVal)||void 0===o?void 0:o.length)||0);for(var c=0;c<(null===(s=u.splitedVal)||void 0===s?void 0:s.length);c++){var s;this.dict.hasOwnProperty(u.splitedKey[c])||(this.dict[u.splitedKey[c]]={name:u.splitedVal[c],id:i},i++),u.value[c]=this.dict[u.splitedKey[c]].id}n[r]=u.value}return this.getDictionary(),console.table("Массивы id: ",n),console.log("глубина вложенности - ",this.maxlen),n},getDictionary:function(){var t=this.dict,e=[];for(var n in t)if(t.hasOwnProperty(n)){var i=t[n].id,r=t[n].name;e[i]=r}return this.dictionary=e,e}}},u=o,c=(n("034f"),n("2877")),s=Object(c["a"])(u,r,l,!1,null,null,null),d=s.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.a2041d2b.js.map