(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"83a7d280"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({about:"about"}[e]||e)+"."+{about:"d0f746be"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u={data:function(){return{}}},i=u,c=(n("5c0b"),n("2877")),l=Object(c["a"])(i,a,o,!1,null,null,null),s=l.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["default"].use(f["a"]);var d=[{path:"/",name:"layout",component:function(){return n.e("about").then(n.bind(null,"38c6"))},redirect:"/home",children:[{path:"home",name:"home",component:function(){return n.e("about").then(n.bind(null,"7abe"))}},{path:"tradingHall",name:"tradingHall",component:function(){return n.e("about").then(n.bind(null,"a446"))}},{path:"annoucement",name:"annoucement",component:function(){return n.e("about").then(n.bind(null,"6b82"))}},{path:"tradeGuid",name:"tradeGuid",component:function(){return n.e("about").then(n.bind(null,"9f4e"))}},{path:"tradeGuid",name:"tradeGuid",component:function(){return n.e("about").then(n.bind(null,"9f4e"))}},{path:"relationCenter",name:"relationCenter",component:function(){return n.e("about").then(n.bind(null,"c3af"))}},{path:"userCenter",name:"relationCenter",component:function(){return n.e("about").then(n.bind(null,"1ec0"))}}]}],p=new f["a"]({mode:"history",base:"/",routes:d}),m=p,h=n("2f62");r["default"].use(h["a"]);var b=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=n("5c96"),g=n.n(v),y=(n("9536"),n("1f54"),n("cffa")),_=n("8605"),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"empty"},[r("img",{attrs:{src:n("f6da"),alt:""}})])}],j={},O=j,C=(n("b2a5"),Object(c["a"])(O,w,x,!1,null,"4de3ed97",null)),E=C.exports,k={customTabl:_["a"],empty:E},P={install:function(e){for(var t in k)e.component(t,k[t])}};r["default"].use(P),r["default"].use(g.a,{size:"large"}),r["default"].config.productionTip=!1,r["default"].prototype.$gsap=y["a"],new r["default"]({router:m,store:b,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"7e23":function(e,t,n){},8605:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-tab"},e._l(e.tabList,(function(t,r){return n("div",{key:t.label+r,staticClass:"left-nav-item",class:{"first-item":0===r,"is-active":e.activeIndex===r},on:{click:function(t){return e.changeIndex(r)}}},[t.icon?n("i",{class:t.icon}):e._e(),e._v(e._s(t.label)+" ")])})),0)},a=[],o={props:{tabList:{type:Array,default:function(){return[]}}},data:function(){return{activeIndex:0}},methods:{changeIndex:function(e){this.activeIndex=e,this.$emit("changeIndex",e)}}},u=o,i=(n("d2c2"),n("2877")),c=Object(i["a"])(u,r,a,!1,null,null,null);t["a"]=c.exports},9536:function(e,t,n){},"9c0c":function(e,t,n){},a936:function(e,t,n){},b2a5:function(e,t,n){"use strict";n("7e23")},d2c2:function(e,t,n){"use strict";n("a936")},f6da:function(e,t,n){e.exports=n.p+"static/img/noData.4d940d30.jpeg"}});