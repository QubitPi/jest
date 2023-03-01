"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8174],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),m=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(r),f=n,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<a;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var o=r(25773),n=(r(27378),r(35318));const a={title:"\ud83c\udccf Jest 19: Immersive Watch Mode & Test Platform Improvements",author:"Rogelio Guzman",authorURL:"http://twitter.com/rogeliog",authorFBID:511230566},i=void 0,s={permalink:"/jest/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2017-02-21-jest-19-immersive-watch-mode-test-platform-improvements.md",source:"@site/blog/2017-02-21-jest-19-immersive-watch-mode-test-platform-improvements.md",title:"\ud83c\udccf Jest 19: Immersive Watch Mode & Test Platform Improvements",description:"Today we are pleased to ship version 19 of the Jest testing platform. It's the biggest Jest release we have shipped so far and we are quite excited to show you what we've built over the last two months:",date:"2017-02-21T00:00:00.000Z",formattedDate:"February 21, 2017",tags:[],readingTime:6.86,hasTruncateMarker:!0,authors:[{name:"Rogelio Guzman",url:"http://twitter.com/rogeliog"}],frontMatter:{title:"\ud83c\udccf Jest 19: Immersive Watch Mode & Test Platform Improvements",author:"Rogelio Guzman",authorURL:"http://twitter.com/rogeliog",authorFBID:511230566},prevItem:{title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",permalink:"/jest/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner"},nextItem:{title:"A Great Developer Experience",permalink:"/jest/blog/2017/01/30/a-great-developer-experience"}},l={authorsImageUrls:[void 0]},m=[{value:"Immersive Watch Mode",id:"immersive-watch-mode",level:2}],c={toc:m};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Today we are pleased to ship version 19 of the Jest testing platform. It's the biggest Jest release we have shipped so far and we are quite excited to show you what we've built over the last two months:"),(0,n.kt)("h2",{id:"immersive-watch-mode"},"Immersive Watch Mode"),(0,n.kt)("p",null,"We ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/2362"},"completely rewrote the watch mode")," to make it instant and more extensible. As a result, the experience of using it really is immersive: tests re-run instantly after a file change and we made it easy to select the right tests."))}p.isMDXComponent=!0}}]);