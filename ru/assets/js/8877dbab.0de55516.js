"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[91569],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),h=a,g=c["".concat(p,".").concat(h)]||c[h]||m[h]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},40739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"Jest Website Upgrade",author:"S\xe9bastien Lorber",authorTitle:"Docusaurus maintainer",authorURL:"https://sebastienlorber.com",authorImageURL:"https://github.com/slorber.png"},s=void 0,i={permalink:"/jest/ru/blog/2021/03/09/jest-website-upgrade",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2021-03-09-jest-website-upgrade.md",source:"@site/blog/2021-03-09-jest-website-upgrade.md",title:"Jest Website Upgrade",description:"We are excited to present the new Jest website!",date:"2021-03-09T00:00:00.000Z",formattedDate:"9 \u043c\u0430\u0440\u0442\u0430 2021\u202f\u0433.",tags:[],readingTime:1.115,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png"}],frontMatter:{title:"Jest Website Upgrade",author:"S\xe9bastien Lorber",authorTitle:"Docusaurus maintainer",authorURL:"https://sebastienlorber.com",authorImageURL:"https://github.com/slorber.png"},prevItem:{title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",permalink:"/jest/ru/blog/2021/05/25/jest-27"},nextItem:{title:"Jest 26: Tick Tock",permalink:"/jest/ru/blog/2020/05/05/jest-26"}},p={authorsImageUrls:[void 0]},l=[{value:"What&#39;s new?",id:"whats-new",level:2},{value:"For site translators",id:"for-site-translators",level:2},{value:"Thanks",id:"thanks",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are excited to present the ",(0,a.kt)("strong",{parentName:"p"},"new Jest website"),"!"),(0,a.kt)("p",null,"The Jest site was upgraded from ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://v1.docusaurus.io/"},"Docusaurus 1"))," to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://v2.docusaurus.io/"},"Docusaurus 2")),", and is an early adopter of the ",(0,a.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/blog/2021/03/09/releasing-docusaurus-i18n"},"newly released Docusaurus 2 i18n support"),"."),(0,a.kt)("p",null,"So, what's new exactly?"),(0,a.kt)("h2",{id:"whats-new"},"What's new?"),(0,a.kt)("p",null,"Here's a good overview of the most visible improvements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dark Mode"),": change the color scheme through the navbar switch.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Modern navigation"),": we improved the navigation experience with ",(0,a.kt)("strong",{parentName:"p"},"client-side routing")," and ",(0,a.kt)("strong",{parentName:"p"},"prefetching"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Versions dropdown"),": it is now simpler to switch from one Jest version to another.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Progressive-Web-App"),": you can install the Jest website and browse it offline.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Search"),": try the new Algolia ",(0,a.kt)("strong",{parentName:"p"},"DocSearch v3")," user-experience. It is now possible to ",(0,a.kt)("strong",{parentName:"p"},"search in blog posts"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"I18n"),": Jest is the first website using the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://v2.docusaurus.io/docs/i18n/introduction"},"new i18n feature of Docusaurus 2")),". It is now possible to ",(0,a.kt)("strong",{parentName:"p"},"translate blog posts"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"MDX"),": embedding React components in Markdown will allow maintainers to make the ",(0,a.kt)("strong",{parentName:"p"},"documentation more interactive"),"."))),(0,a.kt)("h2",{id:"for-site-translators"},"For site translators"),(0,a.kt)("p",null,"If you want to help to translate the new Jest website, please use the new Crowdin project ",(0,a.kt)("a",{parentName:"p",href:"https://crowdin.com/project/jest-v2"},"jest-v2")," instead of the previous one."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In localized pages, the edit button now links directly to Crowdin.")),(0,a.kt)("h2",{id:"thanks"},"Thanks"),(0,a.kt)("p",null,"Thanks to all the contributors that supported or reviewed this migration: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SimenB"},"Simen"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orta"},"Orta"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JoelMarcey"},"Joel"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/merceyz"},"Kristoffer"),"..."),(0,a.kt)("p",null,"Please report any problem on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/11021"},"migration issue"),"."))}c.isMDXComponent=!0}}]);