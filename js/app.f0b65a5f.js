(function(){"use strict";var e={4494:function(e,t,n){var o=n(5130),r=n(6768);function a(e,t,n,o,a,i){const u=(0,r.g2)("MainMenu"),c=(0,r.g2)("router-view"),s=(0,r.g2)("TheFooter");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(u),(0,r.bF)(c),(0,r.bF)(s)],64)}var i=n.p+"img/logo.543df023.png";function u(e,t,n,o,a,u){const c=(0,r.g2)("el-menu-item"),s=(0,r.g2)("el-menu");return(0,r.uX)(),(0,r.Wv)(s,{mode:"horizontal",class:"menu-bar","default-active":o.currentRouter,onSelect:o.handleSelect},{default:(0,r.k6)((()=>[(0,r.Lk)("div",{class:"meta",onClick:t[0]||(t[0]=(...e)=>o.metaClicked&&o.metaClicked(...e))},t[1]||(t[1]=[(0,r.Lk)("img",{src:i,id:"logo"},null,-1),(0,r.Lk)("span",{id:"title"},"FlowD",-1)])),(0,r.bF)(c,{index:"/index"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("主页")]))),_:1}),(0,r.bF)(c,{index:"/newfeature"},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)("新特性")]))),_:1}),(0,r.bF)(c,{index:"/releasedownload"},{default:(0,r.k6)((()=>t[4]||(t[4]=[(0,r.eW)("发行版本")]))),_:1}),(0,r.bF)(c,{index:"/contributecomp"},{default:(0,r.k6)((()=>t[5]||(t[5]=[(0,r.eW)("贡献")]))),_:1})])),_:1},8,["default-active","onSelect"])}n(4114);var c=n(144),s=n(1387),l={name:"MainMenu",setup(){const e=(0,s.rd)();let t=(0,c.KR)("/");function n(t){e.push(t)}function o(){e.push("/index")}return e.afterEach(((n,o)=>{"/"==n.path&&e.push("/index"),t.value=n.path,console.log(n.path),console.log(o.path)})),{handleSelect:n,currentRouter:t,metaClicked:o}}},d=n(1241);const f=(0,d.A)(l,[["render",u],["__scopeId","data-v-363e34b6"]]);var p=f;function v(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("div")}var h={name:"TheFooter",setup(){}};const m=(0,d.A)(h,[["render",v]]);var b=m,g={name:"App",components:{MainMenu:p,TheFooter:b}};const w=(0,d.A)(g,[["render",a]]);var k=w,y=n(6835),C=(n(4188),n(7477));function _(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("div")}var F={name:"NewFeature",setup(){}};const x=(0,d.A)(F,[["render",_]]);var D=x;function L(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("div")}var S={name:"ProductDisplay",setup(){}};const E=(0,d.A)(S,[["render",L]]);var O=E;function j(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("div",null,"111111")}var A={name:"ReleaseDownload",setup(){}};const T=(0,d.A)(A,[["render",j]]);var X=T,M=n(4232);const R={class:"statics"},W={class:"overview"},K={class:"contributors"},P=["onClick"],G={style:{color:"white"}},I={style:{color:"white"}};function q(e,t,n,o,a,i){const u=(0,r.g2)("el-button");return(0,r.uX)(),(0,r.CE)("div",R,[(0,r.Lk)("div",W,[(0,r.Lk)("p",null,"总贡献次数："+(0,M.v_)(o.commits),1),(0,r.bF)(u,{icon:"refresh",loading:o.isRefreshing,onClick:t[0]||(t[0]=e=>o.getData(!0))},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("刷新")]))),_:1},8,["loading"])]),t[2]||(t[2]=(0,r.Lk)("h2",{style:{"margin-top":"30px"}},"贡献者:",-1)),t[3]||(t[3]=(0,r.Lk)("p",null,"感谢所有的贡献者！",-1)),(0,r.Lk)("div",K,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.contributors,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:"contributor",key:e,onClick:e=>o.contributorClicked(t)},[(0,r.Lk)("h3",G,(0,M.v_)(e.login),1),(0,r.Lk)("p",I,"贡献次数："+(0,M.v_)(e.contributions),1)],8,P)))),128))])])}var z={name:"ContributeComp",setup(){const e=(0,c.KR)(0),t=(0,c.KR)(!1);let n=(0,c.KR)([]);const o=async n=>{try{t.value=n;const o=await fetch("https://api.github.com/repos/L-super/FlowD/contributors?per_page=1&anon=true");if(!o.ok)throw new Error(`Get Commit Data Status: ${o.status}`);const r=await o.json();n?setTimeout((()=>{e.value=r[0].contributions,t.value=!1}),1e3):(e.value=r[0].contributions,t.value=!1)}catch(o){console.error("There was a problem with the fetch operation:",o),t.value=!1}},a=async e=>{try{t.value=e;const o=await fetch("https://api.github.com/repos/L-Super/FlowD/contributors");if(!o.ok)throw new Error(`Get Commit Data Status: ${o.status}`);n.value=await o.json(),console.log(n.value),t.value=!1}catch(o){console.error("There was a problem with the fetch operation:",o),t.value=!1}};function i(e){o(e),a(e)}function u(e){window.open(n.value[e].html_url,"_blank")}return(0,r.sV)((()=>{i(!1)})),{GetCommitData:o,GetContributorsData:a,contributorClicked:u,getData:i,commits:e,isRefreshing:t,contributors:n}}};const U=(0,d.A)(z,[["render",q],["__scopeId","data-v-70ecbf4c"]]);var $=U;const B={class:"title-wrap"};function N(e,t,n,o,a,u){const c=(0,r.g2)("el-button");return(0,r.uX)(),(0,r.CE)("div",B,[t[2]||(t[2]=(0,r.Fv)('<img src="'+i+'" height="50px" id="product-logo" data-v-088af6df><h1 id="title" data-v-088af6df>FlowD</h1><p id="info" data-v-088af6df>An efficient multi-threaded download manager</p><div data-v-088af6df><img class="badge" src="https://img.shields.io/github/stars/L-Super/FlowD?logo=github&amp;style=round-square" data-v-088af6df><img class="badge" src="https://img.shields.io/github/license/L-Super/FlowD?style=round-square&amp;logo=github" data-v-088af6df><img class="badge" src="https://github.com/L-Super/FlowD/actions/workflows/build.yml/badge.svg" data-v-088af6df></div>',4)),(0,r.bF)(c,{type:"primary",id:"contribute-button",size:"large",onClick:t[0]||(t[0]=e=>o.openUrl("https://github.com/L-Super/FlowD"))},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("仓库地址")]))),_:1})])}var V={setup(){let e=e=>{window.open(e,"_blank")};return{openUrl:e}}};const H=(0,d.A)(V,[["render",N],["__scopeId","data-v-088af6df"]]);var J=H;const Q=(0,s.aE)({history:(0,s.Bt)(),routes:[{path:"/index",alias:"/",component:J,name:"index"},{path:"/newfeature",component:D,name:"newfeature"},{path:"/productdisplay",component:O,name:"productdisplay"},{path:"/releasedownload",component:X,name:"releasedownload"},{path:"/contributecomp",component:$,name:"contributecomp"}]});var Y=Q;const Z=(0,o.Ef)(k);Z.use(y.A),Z.use(Y);for(const[ee,te]of Object.entries(C))Z.component(ee,te);Z.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var l=c(n)}for(t&&t(o);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkflowd_site"]=self["webpackChunkflowd_site"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(4494)}));o=n.O(o)})();
//# sourceMappingURL=app.f0b65a5f.js.map