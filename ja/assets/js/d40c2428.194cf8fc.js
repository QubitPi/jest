"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9991],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(25773),o=(r(27378),r(35318));const a={title:"A Great Developer Experience",author:"H\xe9ctor Ramos",authorURL:"http://twitter.com/hectorramos",authorFBID:121800083},i=void 0,s={permalink:"/jest/ja/blog/2017/01/30/a-great-developer-experience",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2017-01-30-a-great-developer-experience.md",source:"@site/blog/2017-01-30-a-great-developer-experience.md",title:"A Great Developer Experience",description:"We strongly believe that great documentation is crucial to providing a great developer experience. The docs should be clear, concise, and useful to new users and veterans alike. With that in mind, we recently took some time to overhaul the Jest website.",date:"2017-01-30T00:00:00.000Z",formattedDate:"2017\u5e741\u670830\u65e5",tags:[],readingTime:2.43,hasTruncateMarker:!0,authors:[{name:"H\xe9ctor Ramos",url:"http://twitter.com/hectorramos"}],frontMatter:{title:"A Great Developer Experience",author:"H\xe9ctor Ramos",authorURL:"http://twitter.com/hectorramos",authorFBID:121800083},prevItem:{title:"\ud83c\udccf Jest 19: Immersive Watch Mode & Test Platform Improvements",permalink:"/jest/ja/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements"},nextItem:{title:"2016 in Jest",permalink:"/jest/ja/blog/2016/12/15/2016-in-jest"}},c={authorsImageUrls:[void 0]},l=[{value:"Improved docs",id:"improved-docs",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We strongly believe that great documentation is crucial to providing a great developer experience. The docs should be clear, concise, and useful to new users and veterans alike. With that in mind, we recently took some time to overhaul the Jest website."),(0,o.kt)("h2",{id:"improved-docs"},"Improved docs"),(0,o.kt)("p",null,"One of the changes you'll notice upon visiting our docs is the updated sidebar. The documentation is now divided into three main areas: an introduction to Jest, detailed guides to Jest's features, and a comprehensive API reference."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Introduction")," section will guide you from installing Jest and writing your first case, to using Jest's matchers and testing async code. If you're new to Jest or need a quick refresher, these docs should get you up to speed in no time. If you've used Jest before and only need a quick reference on how it's installed, you need to go no further than the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started")," guide."),(0,o.kt)("p",null,"Once you feel comfortable using Jest, proceed to the advanced ",(0,o.kt)("strong",{parentName:"p"},"Guides")," section. The new ",(0,o.kt)("a",{parentName:"p",href:"/docs/snapshot-testing"},"Snapshot Testing guide")," covers everything you need to know about creating and maintaining snapshot test cases."),(0,o.kt)("p",null,"Finally, we've completely overhauled our API reference docs. You can now find detailed information on all of Jest's ",(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"Globals"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/expect"},"matchers"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"every flag")," supported by the ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," CLI."))}u.isMDXComponent=!0}}]);