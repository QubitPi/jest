"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9198],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(c,".").concat(d)]||m[d]||l[d]||n;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(25773),a=(r(27378),r(35318));const n={id:"migration-guide",title:"Migrating to Jest"},i=void 0,s={unversionedId:"migration-guide",id:"version-29.3/migration-guide",title:"Migrating to Jest",description:"If you'd like to try out Jest with an existing codebase, there are a number of ways to convert to Jest:",source:"@site/versioned_docs/version-29.3/MigrationGuide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/jest/ja/docs/29.3/migration-guide",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"29.3",lastUpdatedBy:"Jack",lastUpdatedAt:1678699283,formattedLastUpdatedAt:"2023\u5e743\u670813\u65e5",frontMatter:{id:"migration-guide",title:"Migrating to Jest"},sidebar:"docs",previous:{title:"Watch Plugins",permalink:"/jest/ja/docs/29.3/watch-plugins"},next:{title:"Troubleshooting",permalink:"/jest/ja/docs/29.3/troubleshooting"}},c={},p=[{value:"jest-codemods",id:"jest-codemods",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you'd like to try out Jest with an existing codebase, there are a number of ways to convert to Jest:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using Jasmine, or a Jasmine like API (for example ",(0,a.kt)("a",{parentName:"li",href:"https://mochajs.org"},"Mocha"),"), Jest should be mostly compatible, which makes it less complicated to migrate to."),(0,a.kt)("li",{parentName:"ul"},"If you are using AVA, Expect.js (by Automattic), Jasmine, Mocha, proxyquire, Should.js or Tape you can automatically migrate with Jest Codemods (see below)."),(0,a.kt)("li",{parentName:"ul"},"If you like ",(0,a.kt)("a",{parentName:"li",href:"http://chaijs.com/"},"chai"),", you can upgrade to Jest and continue using chai. However, we recommend trying out Jest's assertions and their failure messages. Jest Codemods can migrate from chai (see below).")),(0,a.kt)("h2",{id:"jest-codemods"},"jest-codemods"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/avajs/ava"},"AVA"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaijs/chai"},"Chai"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Automattic/expect.js"},"Expect.js (by Automattic)"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jasmine/jasmine"},"Jasmine"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mochajs/mocha"},"Mocha"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thlorenz/proxyquire"},"proxyquire"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shouldjs/should.js"},"Should.js"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/substack/tape"},"Tape"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://sinonjs.org/"},"Sinon")," you can use the third-party ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/skovhus/jest-codemods"},"jest-codemods")," to do most of the dirty migration work. It runs a code transformation on your codebase using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift"},"jscodeshift"),"."),(0,a.kt)("p",null,"To transform your existing tests, navigate to the project containing the tests and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx jest-codemods\n")),(0,a.kt)("p",null,"More information can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/skovhus/jest-codemods"},"https://github.com/skovhus/jest-codemods"),"."))}m.isMDXComponent=!0}}]);