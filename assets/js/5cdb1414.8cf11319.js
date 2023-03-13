"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[31733],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(25773),a=(r(27378),r(35318));const o={title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},i=void 0,s={permalink:"/jest/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2017-05-06-jest-20-delightful-testing-multi-project-runner.md",source:"@site/blog/2017-05-06-jest-20-delightful-testing-multi-project-runner.md",title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",description:"A few months ago we announced Jest 19 which came with major new features and was the biggest Jest release until today. Jest 20 has twice the amount of changes compared to the previous version, features a complete rewrite of the test runner, adds new testing APIs. The new release enables a new level of customization and configuration for projects all while making it effortless to upgrade. Beyond Painless JavaScript Testing, we believe Jest is now delivering a Delightful JavaScript Testing experience. Let's take a look at the best new features and changes in depth:",date:"2017-05-06T00:00:00.000Z",formattedDate:"May 6, 2017",tags:[],readingTime:6.325,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest 22: Refinements & Custom Runners",permalink:"/jest/blog/2017/12/18/jest-22"},nextItem:{title:"\ud83c\udccf Jest 19: Immersive Watch Mode & Test Platform Improvements",permalink:"/jest/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements"}},l={authorsImageUrls:[void 0]},c=[{value:"Multi-Project-Runner &amp; Configuration Overhaul",id:"multi-project-runner--configuration-overhaul",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A few months ago we announced ",(0,a.kt)("a",{parentName:"p",href:"/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements"},"Jest 19")," which came with major new features and was the biggest Jest release until today. Jest 20 has twice the amount of changes compared to the previous version, features a complete rewrite of the test runner, adds new testing APIs. The new release enables a new level of customization and configuration for projects all while making it effortless to upgrade. Beyond Painless JavaScript Testing, we believe Jest is now delivering a ",(0,a.kt)("strong",{parentName:"p"},"Delightful JavaScript Testing experience"),". Let's take a look at the best new features and changes in depth:"),(0,a.kt)("h2",{id:"multi-project-runner--configuration-overhaul"},"Multi-Project-Runner & Configuration Overhaul"),(0,a.kt)("p",null,"Until now, Jest could only operate in one project at a time. This is often cumbersome if you are working on many smaller projects that each have their own setup and configuration. With Jest 20, we rewrote the test runner completely to run many projects at the same time within a single instance of Jest, for example if you are working on a React frontend and a node.js backend. Here is a video of Jest running tests for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react"},"React"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay"},"Relay"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/yarn"},"Yarn")," and Jest all at the same time:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"multi-runner",src:r(83671).Z,width:"839",height:"520"})))}p.isMDXComponent=!0},83671:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/20-multi-runner-bca686433b2cb63c147951eedce67538.gif"}}]);