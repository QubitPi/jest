"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[76515],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(25773),n=(r(27378),r(35318));const o={title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",author:"Tim Seckinger",authorURL:"https://github.com/jeysal",authorImageURL:"https://avatars.githubusercontent.com/u/16069751"},s=void 0,i={permalink:"/jest/uk/blog/2021/05/25/jest-27",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2021-05-25-jest-27.md",source:"@site/blog/2021-05-25-jest-27.md",title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",description:"In the Jest 26 blog post about a year ago, we announced that after two major releases with few breaking changes, Jest 27 will flip some switches to set better defaults for projects that are new or can migrate smoothly. This gives us the opportunity to remove some packages from the default distribution of Jest 28 and publish them as separately installable and pluggable modules instead. Everyone on the new defaults can benefit from a smaller install size, while people needing these packages can still install them separately.",date:"2021-05-25T00:00:00.000Z",formattedDate:"25 \u0442\u0440\u0430\u0432\u043d\u044f 2021\u202f\u0440.",tags:[],readingTime:6.54,hasTruncateMarker:!0,authors:[{name:"Tim Seckinger",url:"https://github.com/jeysal",imageURL:"https://avatars.githubusercontent.com/u/16069751"}],frontMatter:{title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",author:"Tim Seckinger",authorURL:"https://github.com/jeysal",authorImageURL:"https://avatars.githubusercontent.com/u/16069751"},prevItem:{title:"Jest 28: Shedding weight and improving compatibility \ud83e\udef6",permalink:"/jest/uk/blog/2022/04/25/jest-28"},nextItem:{title:"Jest Website Upgrade",permalink:"/jest/uk/blog/2021/03/09/jest-website-upgrade"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{parentName:"p",href:"/blog/2020/05/05/jest-26"},"Jest 26 blog post")," about a year ago, we announced that after two major releases with few breaking changes, Jest 27 will flip some switches to set better defaults for projects that are new or can migrate smoothly. This gives us the opportunity to remove some packages from the default distribution of Jest 28 and publish them as separately installable and pluggable modules instead. Everyone on the new defaults can benefit from a smaller install size, while people needing these packages can still install them separately."),(0,n.kt)("p",null,"With the first major change of defaults since the ",(0,n.kt)("a",{parentName:"p",href:"/blog/2016/09/01/jest-15"},"New Defaults for Jest")," that came with the seminal version 15, Jest 27 is now here, to keep Jest fast, lean, and relevant in the future. We will explain those changes of defaults and other notable breaking changes in this post, but first, let's get into some exciting new features!"))}p.isMDXComponent=!0}}]);