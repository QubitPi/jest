"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6775],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const o={title:"Jest 16.0: Turbocharged CLI & Community Update",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},s=void 0,i={permalink:"/jest/ja/blog/2016/10/03/jest-16",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2016-10-03-jest-16.md",source:"@site/blog/2016-10-03-jest-16.md",title:"Jest 16.0: Turbocharged CLI & Community Update",description:"It's been one month since the last major release and we've made significant improvements to Jest since. In this major release we are updating the snapshot format we are using which will likely require snapshots to be updated when upgrading Jest. We don't make these changes lightly and don't expect this to happen often but we think it is necessary to improve the format from time to time.",date:"2016-10-03T00:00:00.000Z",formattedDate:"2016\u5e7410\u67083\u65e5",tags:[],readingTime:5.84,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 16.0: Turbocharged CLI & Community Update",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"2016 in Jest",permalink:"/jest/ja/blog/2016/12/15/2016-in-jest"},nextItem:{title:"Jest 15.0: New Defaults for Jest",permalink:"/jest/ja/blog/2016/09/01/jest-15"}},l={authorsImageUrls:[void 0]},p=[{value:"Upgraded CLI",id:"upgraded-cli",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It's been one month since the last major release and we've made significant improvements to Jest since. In this major release we are updating the snapshot format we are using which will likely require snapshots to be updated when upgrading Jest. We don't make these changes lightly and don't expect this to happen often but we think it is necessary to improve the format from time to time."),(0,a.kt)("h2",{id:"upgraded-cli"},"Upgraded CLI"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"reporter",src:r(96034).Z,width:"858",height:"575"})),(0,a.kt)("p",null,"Jest 16 features a new reporter interface that shows running tests as well as a live summary and a progress bar based on the estimated test runtime from previous test runs. We also improved the CLI output to work better with different color schemes. If there were test failures in a previous run, Jest will now always run those tests first to give useful signal to users as quickly as possible."))}u.isMDXComponent=!0},96034:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/16-reporter-578f46980efc5766386bed963d75e333.gif"}}]);