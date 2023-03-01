"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6279],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,m=u["".concat(c,".").concat(h)]||u[h]||f[h]||n;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},80984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(25773),o=(r(27378),r(35318));const n={title:"Jest 15.0: New Defaults for Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},s=void 0,i={permalink:"/jest/zh-Hans/blog/2016/09/01/jest-15",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2016-09-01-jest-15.md",source:"@site/blog/2016-09-01-jest-15.md",title:"Jest 15.0: New Defaults for Jest",description:"We spent the past year making Jest faster, easier to configure, added tons of features and built snapshot testing. However, there were two areas where we invested very little we can move fast and improve the framework for Facebook and the open source community at light-speed. Jest's goal is to come with batteries included and to require as little configuration as necessary. We recently got a chance to explain our philosophy on a create-react-app issue.",date:"2016-09-01T00:00:00.000Z",formattedDate:"2016\u5e749\u67081\u65e5",tags:[],readingTime:7.205,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 15.0: New Defaults for Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest 16.0: Turbocharged CLI & Community Update",permalink:"/jest/zh-Hans/blog/2016/10/03/jest-16"},nextItem:{title:"Jest 14.0: React Tree Snapshot Testing",permalink:"/jest/zh-Hans/blog/2016/07/27/jest-14"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We spent the past year making Jest ",(0,o.kt)("a",{parentName:"p",href:"/blog/2016/03/11/javascript-unit-testing-performance"},"faster"),", ",(0,o.kt)("a",{parentName:"p",href:"/blog/2016/04/12/jest-11"},"easier to configure"),", ",(0,o.kt)("a",{parentName:"p",href:"/blog/2016/06/22/jest-13"},"added tons of features")," and built ",(0,o.kt)("a",{parentName:"p",href:"/blog/2016/07/27/jest-14"},"snapshot testing"),". However, there were two areas where we invested very little: the CLI output and user experience. With Jest 15 we are changing the framework radically to make it easier to use both for beginners and experienced users. We are excited that our investment in Jest is now paying off: we can move fast and improve the framework for Facebook and the open source community at light-speed. Jest's goal is to come with batteries included and to require as little configuration as necessary. We recently got a chance to explain our philosophy on a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/create-react-app/pull/250#issuecomment-237098619"},"create-react-app issue"),"."),(0,o.kt)("p",null,"The most important change to talk about is a set of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/1511"},"new defaults"),". If you are an existing Jest user you will very likely need to update your configuration for Jest 15. In most cases it will simplify your setup and Jest will provide useful error messages during the upgrade. All of the new defaults can be disabled to suit your needs, but we still consider the disabled features critical for Jest in certain situations and will continue to use and support them at Facebook long-term. Our ",(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"API documentation")," was also completely rewritten to reflect these changes. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/pull/7625/files"},"This pull request for React")," highlights some of the changes necessary for existing projects."))}u.isMDXComponent=!0}}]);