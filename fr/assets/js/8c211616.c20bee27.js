"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[71954],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},40360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const o={title:"Jest 28: Shedding weight and improving compatibility \ud83e\udef6",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},i=void 0,s={permalink:"/jest/fr/blog/2022/04/25/jest-28",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2022-04-25-jest-28.md",source:"@site/blog/2022-04-25-jest-28.md",title:"Jest 28: Shedding weight and improving compatibility \ud83e\udef6",description:"Jest 28 is finally here, and it comes with some long requested features such as support for sharding a test run across multiple machines, package exports and the ability to customize the behavior of fake timers. These are just some personal highlights, and we'll be highlighting more in this blog post.",date:"2022-04-25T00:00:00.000Z",formattedDate:"25 avril 2022",tags:[],readingTime:7.335,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB",imageURL:"https://avatars.githubusercontent.com/u/1404810"}],frontMatter:{title:"Jest 28: Shedding weight and improving compatibility \ud83e\udef6",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},prevItem:{title:"Jest joins OpenJS Foundation",permalink:"/jest/fr/blog/2022/05/11/jest-joins-openjs"},nextItem:{title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",permalink:"/jest/fr/blog/2021/05/25/jest-27"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jest 28 is finally here, and it comes with some long requested features such as support for ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli#--shard"},"sharding")," a test run across multiple machines, ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#exports"},"package ",(0,a.kt)("inlineCode",{parentName:"a"},"exports"))," and the ability to customize the behavior of ",(0,a.kt)("a",{parentName:"p",href:"/docs/jest-object#fake-timers"},"fake timers"),". These are just some personal highlights, and we'll be highlighting more in this blog post."),(0,a.kt)("p",null,"Additionally, as announced in the ",(0,a.kt)("a",{parentName:"p",href:"/blog/2021/05/25/jest-27"},"Jest 27 blog post")," last year, we have removed some packages that no longer are used by default from the default installation. As a result the installation size has dropped by about 1/3."))}u.isMDXComponent=!0}}]);