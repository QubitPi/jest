"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[90715],{35318:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(27378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(o),f=a,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||n;return o?r.createElement(h,s(s({ref:t},p),{},{components:o})):r.createElement(h,s({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<n;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},68073:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=o(25773),a=(o(27378),o(35318));const n={title:"Jest 13.0: Flow & REPL",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},s=void 0,i={permalink:"/jest/es-ES/blog/2016/06/22/jest-13",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2016-06-22-jest-13.md",source:"@site/blog/2016-06-22-jest-13.md",title:"Jest 13.0: Flow & REPL",description:"Today we are happy to announce the next major release of Jest. We have made major changes to Jest which are going to benefit you and all of Facebook's JavaScript test infrastructure. Most importantly, we added static types to all of Jest's code during a recent Jest hackathon at Facebook. Fifteen people worked for a day and night to add Flow types to Jest and to add new features to Jest. The Flow types serve two purposes: First, we believe that code is written to be read. Most of the time, code is written only once but read by dozens of people over the course of years. Adding static types to the project helps document the code and helps explain some of the architecture in Jest. Second, adding static types makes maintenance easier and will allow us to more confidently refactor parts of Jest without fear of breakages.",date:"2016-06-22T00:00:00.000Z",formattedDate:"22 de junio de 2016",tags:[],readingTime:2.565,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 13.0: Flow & REPL",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest 14.0: React Tree Snapshot Testing",permalink:"/jest/es-ES/blog/2016/07/27/jest-14"},nextItem:{title:"Jest 11.0",permalink:"/jest/es-ES/blog/2016/04/12/jest-11"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Today we are happy to announce the next major release of Jest. We have made major changes to Jest which are going to benefit you and all of Facebook's JavaScript test infrastructure. Most importantly, we added static types to all of Jest's code during a recent Jest hackathon at Facebook. Fifteen people worked for a day and night to add ",(0,a.kt)("a",{parentName:"p",href:"https://flowtype.org/"},"Flow")," types to Jest and to add new features to Jest. The Flow types serve two purposes: First, we believe that code is written to be read. Most of the time, code is written only once but read by dozens of people over the course of years. Adding static types to the project helps document the code and helps explain some of the architecture in Jest. Second, adding static types makes maintenance easier and will allow us to more confidently refactor parts of Jest without fear of breakages."),(0,a.kt)("p",null,"The Flow project has evolved a lot within Facebook and has been successfully adopted across many of our frameworks and almost all of our product code. Adoption can be parallelized incredibly well \u2013 it can be done file-by-file until enough of the codebase is well-typed. Then, Flow provides real value and helps guide through large changes. Through this, many small edge cases and bugs were found."))}d.isMDXComponent=!0}}]);