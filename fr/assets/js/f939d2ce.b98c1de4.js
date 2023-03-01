"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4434],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,h=f["".concat(u,".").concat(m)]||f[m]||l[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[f]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(25773),a=(r(27378),r(35318));const o={title:"Jest 25: \ud83d\ude80 Laying foundations for the future",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},i=void 0,s={permalink:"/jest/fr/blog/2020/01/21/jest-25",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2020-01-21-jest-25.md",source:"@site/blog/2020-01-21-jest-25.md",title:"Jest 25: \ud83d\ude80 Laying foundations for the future",description:"Jest 25 is laying the groundwork for many major changes in the future. As such, we kept breaking changes to a minimum, but internal architecture changes may require attention during the upgrade. The main changes are an upgrade of JSDOM from v11 to v15, 10-15% faster test runs, a new diff view for outdated snapshots and dropped Node 6 support.",date:"2020-01-21T00:00:00.000Z",formattedDate:"21 janvier 2020",tags:[],readingTime:6.995,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB"}],frontMatter:{title:"Jest 25: \ud83d\ude80 Laying foundations for the future",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},prevItem:{title:"Jest 26: Tick Tock",permalink:"/jest/fr/blog/2020/05/05/jest-26"},nextItem:{title:"Jest 24: \ud83d\udc85 Refreshing, Polished, TypeScript-friendly",permalink:"/jest/fr/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jest 25 is laying the groundwork for many major changes in the future. As such, we kept breaking changes to a minimum, but internal architecture changes may require attention during the upgrade. The main changes are an upgrade of JSDOM from v11 to v15, 10-15% faster test runs, a new diff view for outdated snapshots and dropped Node 6 support."),(0,a.kt)("p",null,"There has been more than 200 commits since Jest 24.9 by more than 80 different contributors, so as always, take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md"},"changelog")," for a full list of changes."))}f.isMDXComponent=!0}}]);