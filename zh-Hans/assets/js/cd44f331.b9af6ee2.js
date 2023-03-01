"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1285],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,h=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},l),{},{components:r})):a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(25773),n=(r(27378),r(35318));const o={title:"2016 in Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},i=void 0,s={permalink:"/jest/zh-Hans/blog/2016/12/15/2016-in-jest",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2016-12-15-2016-in-jest.md",source:"@site/blog/2016-12-15-2016-in-jest.md",title:"2016 in Jest",description:"2016 was a big year for JavaScript testing with Jest. In the first six months of the year we rewrote Jest and built a solid foundation to significantly improve performance and the developer experience of testing JavaScript code. We flow-typed the entire codebase, built a ton of integration tests for Jest itself and adopted lerna to turn Jest from a framework into a Painless JavaScript Testing platform.",date:"2016-12-15T00:00:00.000Z",formattedDate:"2016\u5e7412\u670815\u65e5",tags:[],readingTime:7.065,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"2016 in Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"A Great Developer Experience",permalink:"/jest/zh-Hans/blog/2017/01/30/a-great-developer-experience"},nextItem:{title:"Jest 16.0: Turbocharged CLI & Community Update",permalink:"/jest/zh-Hans/blog/2016/10/03/jest-16"}},c={authorsImageUrls:[void 0]},p=[],l={toc:p};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"2016 was a big year for JavaScript testing with Jest. In the first six months of the year we rewrote Jest and built a solid foundation to significantly improve performance and the developer experience of testing JavaScript code. We flow-typed the entire codebase, built a ton of integration tests for Jest itself and adopted ",(0,n.kt)("a",{parentName:"p",href:"https://lernajs.io/"},"lerna")," to turn Jest from a framework into a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/packages"},(0,n.kt)("em",{parentName:"a"},"Painless JavaScript Testing platform")),"."),(0,n.kt)("p",null,"The newly created ",(0,n.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/package/react-test-renderer"},"react-test-renderer")," finally enabled testing of react-native components. Through the jest-react-native preset (now merged directly into react-native) Jest now works out of the box for any React project and comes pre-configured in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/create-react-app"},"create-react-app")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native"},"react-native")," projects. We integrated core pieces of Jest into ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/tree/main/packager/react-packager/src"},"react-native's packager")," and the completely new snapshot testing feature has since been used outside of Jest: It was integrated with React Storybook as \u201c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/storybooks/storyshots"},"storyshots"),"\u201d and is being adopted by other test runners like ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/avajs/ava/pull/1113"},"ava"),"."))}f.isMDXComponent=!0}}]);