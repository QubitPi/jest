"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[68297],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||h[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"Jest 29: Snapshot format changes",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},s=void 0,i={permalink:"/jest/pt-BR/blog/2022/08/25/jest-29",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2022-08-25-jest-29.md",source:"@site/blog/2022-08-25-jest-29.md",title:"Jest 29: Snapshot format changes",description:"Jest 29 is here, just a few short months after Jest 28. As mentioned in the Jest 28 blog post, this version contains just a couple of breaking changes, in order to make the upgrade as smooth as possible.",date:"2022-08-25T00:00:00.000Z",formattedDate:"25 de agosto de 2022",tags:[],readingTime:.74,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB",imageURL:"https://avatars.githubusercontent.com/u/1404810"}],frontMatter:{title:"Jest 29: Snapshot format changes",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},nextItem:{title:"Jest joins OpenJS Foundation",permalink:"/jest/pt-BR/blog/2022/05/11/jest-joins-openjs"}},p={authorsImageUrls:[void 0]},l=[],u={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jest 29 is here, just a few short months after Jest 28. As mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"/blog/2022/04/25/jest-28#future"},"Jest 28 blog post"),", this version contains just a couple of breaking changes, in order to make the upgrade as smooth as possible."),(0,a.kt)("p",null,"The only breaking changes that should be noticeable are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Node versions 12 and 17 are dropped, both of which are EOL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshotFormat")," property is changed to:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"+ snapshotFormat: {\n+   escapeString: false,\n+   printBasicPrototype: false\n+ }\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom")," has upgraded ",(0,a.kt)("inlineCode",{parentName:"p"},"jsdom")," from v19 to v20"))),(0,a.kt)("p",null,"There are certain changes to the types exposed by Jest, but probably (hopefully!) nothing that should impede the upgrade. Please see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/upgrading-to-jest29"},"upgrade guide")," for more details."),(0,a.kt)("p",null,"That's it for breaking changes! Hopefully this means the upgrade path from Jest 28 is smooth. Please see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md#2900"},"changelog")," for other changes."),(0,a.kt)("p",null,"Thanks for reading, and happy Jesting! \ud83c\udccf"))}c.isMDXComponent=!0}}]);