(function(t){function e(e){for(var n,o,a=e[0],l=e[1],c=e[2],h=0,f=[];h<a.length;h++)o=a[h],r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Board")],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{height:t.height},attrs:{id:"board"}},t._l(t.toggle,(function(e,n){return i("Cell",{ref:n,refInFor:!0,attrs:{id:n},on:{playerClick:t.playerClick}})})),1)},a=[],l=(i("ac4d"),i("8a81"),i("ac6a"),i("456d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ticCell",style:{background:t.background},on:{click:t.playerClick}},[i("span",{staticClass:"helper"}),i("img",{directives:[{name:"show",rawName:"v-show",value:t.user,expression:"user"}],attrs:{src:"usericon.png"}}),i("img",{directives:[{name:"show",rawName:"v-show",value:t.ai,expression:"ai"}],attrs:{src:"pcicon.png"}})])}),c=[],u={name:"Cell",props:["id"],data:function(){return{user:!1,ai:!1,background:""}},methods:{playerClick:function(){var t=this.$parent,e=t.toggle,i=t.finished;(0===e[this.id]||i)&&this.$emit("playerClick",this.id)},select:function(t){0===t?(this.user=!1,this.ai=!1):3===t?this.user=!0:this.ai=!0},paint:function(t){this.background=t}}},h=u,f=(i("e44d"),i("2877")),d=Object(f["a"])(h,l,c,!1,null,"62e112f8",null),p=d.exports,v={name:"Board",components:{Cell:p},data:function(){return{height:"0",finished:!1,toggle:{t11:0,t12:0,t13:0,t21:0,t22:0,t23:0,t31:0,t32:0,t33:0},rowsets:[["t11","t12","t13"],["t21","t22","t23"],["t31","t32","t33"],["t11","t21","t31"],["t12","t22","t32"],["t13","t23","t33"],["t11","t22","t33"],["t13","t22","t31"]]}},computed:{empties:function(){var t=this;return Object.keys(this.toggle).filter((function(e){return 0===t.toggle[e]}))}},methods:{playerClick:function(t){var e=this,i=this.toggle,n=this.rowsets;this.finished&&(this.reload(),this.finished=!1),this.setClick(3,t);var r=n.every((function(t){return i[t[0]]+i[t[1]]+i[t[2]]!==9||(t.forEach((function(t){return e.paint(t,"red")})),alert("You win, player!"),e.finished=!0,!1)}));if(r)return 0===this.empties.length?(alert("Draw Match!"),void(this.finished=!0)):void this.startAI(t)},setClick:function(t,e){this.$refs[e][0].select(t),this.toggle[e]=t},startAI:function(t){var e=this,i=this.toggle,n=this.rowsets,r=!0,s=!1,o=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var c=a.value;if(i[c[0]]+i[c[1]]+i[c[2]]===2)return 0===i[c[0]]?this.setClick(1,c[0]):0===i[c[1]]?this.setClick(1,c[1]):this.setClick(1,c[2]),c.forEach((function(t){return e.paint(t,"red")})),alert("Cyborg wins!"),void(this.finished=!0)}}catch(y){s=!0,o=y}finally{try{r||null==l.return||l.return()}finally{if(s)throw o}}var u=!0,h=!1,f=void 0;try{for(var d,p=n[Symbol.iterator]();!(u=(d=p.next()).done);u=!0){var v=d.value;if(i[v[0]]+i[v[1]]+i[v[2]]===6)return 0===i[v[0]]?void this.setClick(1,v[0]):0===i[v[1]]?void this.setClick(1,v[1]):void this.setClick(1,v[2])}}catch(y){h=!0,f=y}finally{try{u||null==p.return||p.return()}finally{if(h)throw f}}if(Math.random()>=.5)return"t11"!==t&&"t13"!==t&&"t31"!==t&&"t33"!==t?0===i["t11"]?void this.setClick(1,"t11"):0===i["t13"]?void this.setClick(1,"t13"):0===i["t31"]?void this.setClick(1,"t31"):void this.setClick(1,"t33"):0===i["t22"]?void this.setClick(1,"t22"):0===i["t21"]?void this.setClick(1,"t21"):0===i["t12"]?void this.setClick(1,"t12"):0===i["t23"]?void this.setClick(1,"t23"):void this.setClick(1,"t32");var g=this.empties[Math.floor(this.empties.length*Math.random())];this.setClick(1,g)},paint:function(t,e){this.$refs[t][0].paint(e)},setHeight:function(){this.height=getComputedStyle(this.$el,"").getPropertyValue("width")},reload:function(){var t=this;Object.keys(this.toggle).forEach((function(e){t.setClick(0,e),t.paint(e,"silver")}))}},mounted:function(){var t=this;this.setHeight(),window.addEventListener("resize",(function(){t.setHeight()}))}},g=v,y=(i("fe2c"),Object(f["a"])(g,o,a,!1,null,"6a7442ec",null)),b=y.exports,k={name:"app",components:{Board:b}},m=k,C=(i("5c0b"),Object(f["a"])(m,r,s,!1,null,null,null)),w=C.exports;n["a"].config.productionTip=!1,window.Bus=new n["a"],new n["a"]({render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("5e27"),r=i.n(n);r.a},"5e27":function(t,e,i){},"91b5":function(t,e,i){},b0df:function(t,e,i){},e44d:function(t,e,i){"use strict";var n=i("b0df"),r=i.n(n);r.a},fe2c:function(t,e,i){"use strict";var n=i("91b5"),r=i.n(n);r.a}});
//# sourceMappingURL=app.65c6dc78.js.map