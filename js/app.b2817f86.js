(function(){"use strict";var e={6015:function(e,t,n){var o=n(5130),a=n(6768);const i={class:"app-wrapper"};function l(e,t,n,o,l,r){const s=(0,a.g2)("MainMenu"),u=(0,a.g2)("router-view"),c=(0,a.g2)("TheFooter");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(s),(0,a.bF)(u),(0,a.bF)(c)])}var r=n.p+"img/logo.543df023.png";function s(e,t,n,o,i,l){const s=(0,a.g2)("el-menu-item"),u=(0,a.g2)("el-menu"),c=(0,a.g2)("el-header");return(0,a.uX)(),(0,a.Wv)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)(u,{mode:"horizontal",class:"menu-bar","default-active":o.currentRouter,onSelect:o.handleSelect},{default:(0,a.k6)((()=>[(0,a.Lk)("div",{class:"meta",onClick:t[0]||(t[0]=(...e)=>o.metaClicked&&o.metaClicked(...e))},t[1]||(t[1]=[(0,a.Lk)("img",{src:r,id:"logo"},null,-1),(0,a.Lk)("span",{id:"title"},"FlowD",-1)])),(0,a.bF)(s,{index:"/index"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("主页")]))),_:1}),(0,a.bF)(s,{index:"/newfeature"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("新特性")]))),_:1}),(0,a.bF)(s,{index:"/releasedownload"},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)("发行版本")]))),_:1}),(0,a.bF)(s,{index:"/contributecomp"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)("贡献")]))),_:1})])),_:1},8,["default-active","onSelect"])])),_:1})}n(4114);var u=n(144),c=n(1387),d={name:"MainMenu",setup(){const e=(0,c.rd)();let t=(0,u.KR)("/");function n(t){e.push(t)}function o(){e.push("/")}return e.afterEach(((n,o)=>{"/"==n.path&&e.push("/index"),t.value=n.path,console.log(n.path),console.log(o.path)})),{handleSelect:n,currentRouter:t,metaClicked:o}}},p=n(1241);const f=(0,p.A)(d,[["render",s],["__scopeId","data-v-53205e1e"]]);var v=f;function g(e,t,n,o,i,l){return(0,a.uX)(),(0,a.CE)("div")}var h={name:"TheFooter",setup(){}};const b=(0,p.A)(h,[["render",g]]);var m=b,k={name:"App",components:{MainMenu:v,TheFooter:m}};const w=(0,p.A)(k,[["render",l]]);var y=w,F=n(6874),_=(n(4188),n(7477)),L=n.p+"img/developing.28844f38.svg";const T={class:"developing"};function E(e,t,n,o,i,l){const r=(0,a.g2)("el-tag"),s=(0,a.g2)("el-button");return(0,a.uX)(),(0,a.CE)("div",T,[t[2]||(t[2]=(0,a.Lk)("img",{src:L,style:{height:"200px"}},null,-1)),t[3]||(t[3]=(0,a.Lk)("h3",{id:"title"},"正在开发中...",-1)),(0,a.bF)(r,null,{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("你可以加入我们，一起为伟大的开源社区贡献力量！😘")]))),_:1}),(0,a.bF)(s,{type:"success",plain:"true",style:{"margin-top":"30px"},onClick:o.joinDeveloping},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("加入开发")]))),_:1},8,["onClick"])])}var C={name:"NewFeature",setup(){const e=()=>{window.open("https://github.com/L-Super/FlowD","_blank")};return{joinDeveloping:e}}};const I=(0,p.A)(C,[["render",E],["__scopeId","data-v-737a0e1a"]]);var O=I,R=n.p+"img/test.db1f4aa6.png",S=n.p+"img/test_1.194c4862.png";const D={class:"gif-div"},A={class:"gif-pic"},N={class:"gif",src:R},W={class:"gif",src:S},x={class:"gif",src:R},M={class:"gif",src:S};function H(e,t,n,i,l,r){const s=(0,a.g2)("el-radio-button"),u=(0,a.g2)("el-radio-group");return(0,a.uX)(),(0,a.CE)(a.FK,null,[t[5]||(t[5]=(0,a.Lk)("div",null,null,-1)),(0,a.Lk)("div",D,[(0,a.Lk)("div",A,[(0,a.bo)((0,a.Lk)("img",N,null,512),[[o.aG,i.display[0]]]),(0,a.bo)((0,a.Lk)("img",W,null,512),[[o.aG,i.display[1]]]),(0,a.bo)((0,a.Lk)("img",x,null,512),[[o.aG,i.display[2]]]),(0,a.bo)((0,a.Lk)("img",M,null,512),[[o.aG,i.display[3]]])]),(0,a.Lk)("div",null,[(0,a.bF)(u,{modelValue:i.selectedItem,"onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedItem=e),onChange:i.updateDisplay,style:{"margin-bottom":"20px"}},{default:(0,a.k6)((()=>[(0,a.bF)(s,{label:"0"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("精美UI")]))),_:1}),(0,a.bF)(s,{label:"1"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("极速下载")]))),_:1}),(0,a.bF)(s,{label:"2"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("方便管理")]))),_:1}),(0,a.bF)(s,{label:"3"},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)("支持BT种子")]))),_:1})])),_:1},8,["modelValue","onChange"])])])],64)}var G={name:"ProductDisplay",setup(){let e=(0,u.KR)([!0,!1,!1,!1]),t=(0,u.KR)("0");function n(){e.value.fill(!1),e.value[Number(t.value)]=!0}function o(){setInterval((()=>{if("3"==t.value)t.value="0";else{let e=Number(t.value);e++,t.value=String(e)}e.value.fill(!1),e.value[Number(t.value)]=!0}),3e3)}return o(),{display:e,selectedItem:t,updateDisplay:n,changeGifInterval:o}}};const P=(0,p.A)(G,[["render",H],["__scopeId","data-v-4e555e56"]]);var j=P,U=n(4232);const K={class:"content-wraper"};function X(e,t,n,o,i,l){const r=(0,a.g2)("el-menu-item"),s=(0,a.g2)("el-menu"),u=(0,a.g2)("el-aside"),c=(0,a.g2)("el-table-column"),d=(0,a.g2)("el-button"),p=(0,a.g2)("el-table"),f=(0,a.g2)("el-main"),v=(0,a.g2)("el-container");return(0,a.uX)(),(0,a.Wv)(v,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",K,[(0,a.bF)(u,{class:"aside-layout"},{default:(0,a.k6)((()=>[(0,a.bF)(s,{class:"aside",onSelect:o.selectFunc,"unique-opened":!0,"default-active":"0"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.releaseData,((e,t)=>((0,a.uX)(),(0,a.Wv)(r,{key:e,index:t.toString(),onClick:e=>o.versionClicked(t)},{default:(0,a.k6)((()=>[(0,a.eW)((0,U.v_)(e.tag_name),1)])),_:2},1032,["index","onClick"])))),128))])),_:1},8,["onSelect"])])),_:1}),(0,a.bF)(f,{class:"main"},{default:(0,a.k6)((()=>[(0,a.Lk)("h1",null,(0,U.v_)(o.currentData.name),1),(0,a.bF)(p,{data:o.currentData.assets,class:"table"},{default:(0,a.k6)((()=>[(0,a.bF)(c,{prop:"name",label:"文件名称"}),(0,a.bF)(c,{prop:"download_count",label:"下载次数"}),(0,a.bF)(c,{label:"操作"},{default:(0,a.k6)((({})=>[(0,a.bF)(d,{onClick:t[0]||(t[0]=e=>o.openUrl(o.currentData.assets[0].browser_download_url)),type:"primary",size:"small"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)(" 下载 ")]))),_:1})])),_:1})])),_:1},8,["data"])])),_:1})])])),_:1})}var B=n(3851),V={name:"ReleaseDownload",setup(){const e=(0,u.KR)([]),t=(0,u.KR)([]),n=async()=>{try{const n=await fetch("https://api.github.com/repos/agalwood/Motrix/releases");if(!n.ok)throw new Error(`Get Commit Data Status: ${n.status}`);e.value=await n.json(),t.value=e.value[0]}catch(n){console.error("There was a problem with the fetch operation:",n),(0,B.df)({title:"失败",message:"获取数据失败！"+n,type:"error",duration:3e3,position:"top-right"})}},o=n=>{t.value=e.value[n]},i=n=>{t.value=e.value[n]},l=e=>{window.open(e,"_blank")};return(0,a.sV)((()=>{n()})),{releaseData:e,currentData:t,versionClicked:o,selectFunc:i,openUrl:l}}};const Y=(0,p.A)(V,[["render",X],["__scopeId","data-v-77d3894e"]]);var q=Y;const z={class:"statics"},$={class:"overview"},Z={class:"contributors"},J=["onClick"],Q={style:{color:"white"}},ee={style:{color:"white"}};function te(e,t,n,o,i,l){const r=(0,a.g2)("el-button");return(0,a.uX)(),(0,a.CE)("div",z,[(0,a.Lk)("div",$,[(0,a.Lk)("b",null,"总贡献次数："+(0,U.v_)(o.commits),1)]),t[2]||(t[2]=(0,a.Lk)("h2",{style:{"margin-top":"30px"}},"贡献者:",-1)),t[3]||(t[3]=(0,a.Lk)("p",null,"感谢所有的贡献者！",-1)),(0,a.Lk)("div",Z,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.contributors,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{class:"contributor",key:e,onClick:e=>o.contributorClicked(t)},[(0,a.Lk)("h3",Q,(0,U.v_)(e.login),1),(0,a.Lk)("p",ee,"贡献次数："+(0,U.v_)(e.contributions),1)],8,J)))),128))]),(0,a.bF)(r,{icon:"refresh",loading:o.isRefreshing,onClick:t[0]||(t[0]=e=>o.getData(!0))},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("刷新")]))),_:1},8,["loading"]),t[4]||(t[4]=(0,a.Lk)("div",{class:"license"},[(0,a.Lk)("h2",null,"MIT License"),(0,a.Lk)("p",null,"Copyright (c) 2024 L-Super"),(0,a.Lk)("p",null,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),(0,a.Lk)("p",null," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),(0,a.Lk)("p",null,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. ')],-1))])}var ne={name:"ContributeComp",setup(){const e=(0,u.KR)(0),t=(0,u.KR)(!1);let n=(0,u.KR)([]);const o=async n=>{try{t.value=n;const o=await fetch("https://api.github.com/repos/L-super/FlowD/contributors?per_page=1&anon=true");if(!o.ok)throw new Error(`Get Commit Data Status: ${o.status}`);const a=await o.json();n?setTimeout((()=>{e.value=a[0].contributions,t.value=!1,(0,B.df)({title:"成功",message:"刷新数据成功！",type:"success",duration:3e3,position:"top-right"})}),1e3):(e.value=a[0].contributions,t.value=!1)}catch(o){console.error("There was a problem with the fetch operation:",o),t.value=!1,(0,B.df)({title:"失败",message:"刷新数据失败！"+o,type:"error",duration:3e3,position:"top-right"})}},i=async e=>{try{t.value=e;const o=await fetch("https://api.github.com/repos/L-Super/FlowD/contributors");if(!o.ok)throw new Error(`Get Commit Data Status: ${o.status}`);n.value=await o.json(),t.value=!1}catch(o){console.error("There was a problem with the fetch operation:",o),t.value=!1}};function l(e){o(e),i(e)}function r(e){window.open(n.value[e].html_url,"_blank")}return(0,a.sV)((()=>{l(!1)})),{GetCommitData:o,GetContributorsData:i,contributorClicked:r,getData:l,commits:e,isRefreshing:t,contributors:n}}};const oe=(0,p.A)(ne,[["render",te],["__scopeId","data-v-5c4c4793"]]);var ae=oe;const ie={class:"title-wrap"};function le(e,t,n,o,i,l){const s=(0,a.g2)("el-button"),u=(0,a.g2)("ProductDisplay");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",ie,[t[2]||(t[2]=(0,a.Fv)('<img src="'+r+'" height="100px" id="product-logo" data-v-8019f77e><h1 id="title" data-v-8019f77e>FlowD</h1><p id="info" data-v-8019f77e>一款高效的多线程下载工具</p><div data-v-8019f77e><img class="badge" src="https://img.shields.io/github/stars/L-Super/FlowD?logo=github&amp;style=round-square" data-v-8019f77e><img class="badge" src="https://img.shields.io/github/license/L-Super/FlowD?style=round-square&amp;logo=github" data-v-8019f77e><img class="badge" src="https://github.com/L-Super/FlowD/actions/workflows/build.yml/badge.svg" data-v-8019f77e></div>',4)),(0,a.bF)(s,{type:"primary",id:"contribute-button",size:"large",onClick:t[0]||(t[0]=e=>o.openUrl("https://github.com/L-Super/FlowD"))},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("项目地址")]))),_:1}),t[3]||(t[3]=(0,a.Lk)("div",{class:"tag"},[(0,a.Lk)("svg",{height:"32","aria-hidden":"true",viewBox:"0 0 24 24",version:"1.1",width:"20","data-view-component":"true",class:"octicon octicon-mark-github v-align-middle color-fg-default"},[(0,a.Lk)("path",{d:"M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"})]),(0,a.Lk)("p",{id:"tag-content"},"该软件免费并且开源，欢迎PR！")],-1))]),(0,a.bF)(u)],64)}var re={components:{ProductDisplay:j},setup(){let e=e=>{window.open(e,"_blank")};return{openUrl:e}}};const se=(0,p.A)(re,[["render",le],["__scopeId","data-v-8019f77e"]]);var ue=se;const ce=(0,c.aE)({history:(0,c.Bt)(),routes:[{path:"/index",alias:"/",component:ue,name:"index"},{path:"/newfeature",component:O,name:"newfeature"},{path:"/productdisplay",component:j,name:"productdisplay"},{path:"/releasedownload",component:q,name:"releasedownload"},{path:"/contributecomp",component:ae,name:"contributecomp"}]});var de=ce;const pe=(0,o.Ef)(y);pe.use(F.A),pe.use(de);for(const[fe,ve]of Object.entries(_))pe.component(fe,ve);pe.mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],i=e[c][2];for(var r=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(r=!1,i<l&&(l=i));if(r){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,l=o[0],r=o[1],s=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(s)var c=s(n)}for(t&&t(o);u<l.length;u++)i=l[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkflowd_site"]=self["webpackChunkflowd_site"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(6015)}));o=n.O(o)})();
//# sourceMappingURL=app.b2817f86.js.map