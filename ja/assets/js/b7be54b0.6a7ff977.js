"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[12999],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(25773),o=(r(27378),r(35318));const a={title:"JavaScript Unit Testing Performance",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},i=void 0,s={permalink:"/jest/ja/blog/2016/03/11/javascript-unit-testing-performance",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2016-03-11-javascript-unit-testing-performance.md",source:"@site/blog/2016-03-11-javascript-unit-testing-performance.md",title:"JavaScript Unit Testing Performance",description:"Jest is running thousands of tests at Facebook at all times, either through continuous integration or invoked by engineers manually during development. This worked well for years even as the people working on Jest moved on to other projects within Facebook.",date:"2016-03-11T00:00:00.000Z",formattedDate:"2016\u5e743\u670811\u65e5",tags:[],readingTime:9.875,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"JavaScript Unit Testing Performance",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest 11.0",permalink:"/jest/ja/blog/2016/04/12/jest-11"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jest is running thousands of tests at Facebook at all times, either through continuous integration or invoked by engineers manually during development. This worked well for years even as the people working on Jest moved on to other projects within Facebook."),(0,o.kt)("p",null,"As engineers added more and more tests though, we noticed the performance of Jest wasn't going to scale. Additionally, in the last year the JavaScript ecosystem has changed dramatically with the introduction of things like npm3 and Babel, which we hadn't anticipated. We formed a new Jest team to address all of these issues and we'll be sharing our progress and plans on this blog from now on."))}u.isMDXComponent=!0}}]);