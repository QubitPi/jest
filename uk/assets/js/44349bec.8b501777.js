"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5068],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return n?o.createElement(k,s(s({ref:t},m),{},{components:n})):o.createElement(k,s({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(25773),a=(n(27378),n(35318));const r={id:"ecmascript-modules",title:"ECMAScript Modules"},s=void 0,i={unversionedId:"ecmascript-modules",id:"version-29.1/ecmascript-modules",title:"ECMAScript Modules",description:"Jest ships with experimental support for ECMAScript Modules (ESM).",source:"@site/versioned_docs/version-29.1/ECMAScriptModules.md",sourceDirName:".",slug:"/ecmascript-modules",permalink:"/jest/uk/docs/29.1/ecmascript-modules",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"29.1",lastUpdatedBy:"Jack",lastUpdatedAt:1678699283,formattedLastUpdatedAt:"13 \u0431\u0435\u0440. 2023\u202f\u0440.",frontMatter:{id:"ecmascript-modules",title:"ECMAScript Modules"},sidebar:"docs",previous:{title:"Bypassing module mocks",permalink:"/jest/uk/docs/29.1/bypassing-module-mocks"},next:{title:"Using with webpack",permalink:"/jest/uk/docs/29.1/webpack"}},p={},l=[{value:"Differences between ESM and CommonJS",id:"differences-between-esm-and-commonjs",level:2},{value:"Module mocking in ESM",id:"module-mocking-in-esm",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Jest ships with ",(0,a.kt)("strong",{parentName:"p"},"experimental")," support for ECMAScript Modules (ESM)."),(0,a.kt)("p",{parentName:"admonition"},"The implementation may have bugs and lack features. For the latest status check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/9430"},"issue")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/labels/ES%20Modules"},"label")," on the issue tracker."),(0,a.kt)("p",{parentName:"admonition"},"Also note that the APIs Jest uses to implement ESM support are still ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/vm.html#vm_class_vm_module"},"considered experimental by Node")," (as of version ",(0,a.kt)("inlineCode",{parentName:"p"},"18.8.0"),").")),(0,a.kt)("p",null,"With the warnings out of the way, this is how you activate ESM support in your tests."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure you either disable ",(0,a.kt)("a",{parentName:"p",href:"/jest/uk/docs/29.1/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"},"code transforms")," by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"transform: {}")," or otherwise configure your transformer to emit ESM rather than the default CommonJS (CJS).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"--experimental-vm-modules"),", e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"node --experimental-vm-modules node_modules/jest/bin/jest.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_OPTIONS=--experimental-vm-modules npx jest")," etc."),(0,a.kt)("p",{parentName:"li"},"On Windows, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/cross-env"},(0,a.kt)("inlineCode",{parentName:"a"},"cross-env"))," to be able to set environment variables."),(0,a.kt)("p",{parentName:"li"},"If you use Yarn, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn node --experimental-vm-modules $(yarn bin jest)"),". This command will also work if you use ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn Plug'n'Play"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Beyond that, we attempt to follow ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),'\'s logic for activating "ESM mode" (such as looking at ',(0,a.kt)("inlineCode",{parentName:"p"},"type")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".mjs")," files), see ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_enabling"},"their docs")," for details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you want to treat other file extensions (such as ",(0,a.kt)("inlineCode",{parentName:"p"},".jsx")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".ts"),") as ESM, please use the ",(0,a.kt)("a",{parentName:"p",href:"/jest/uk/docs/29.1/configuration#extensionstotreatasesm-arraystring"},(0,a.kt)("inlineCode",{parentName:"a"},"extensionsToTreatAsEsm")," option"),"."))),(0,a.kt)("h2",{id:"differences-between-esm-and-commonjs"},"Differences between ESM and CommonJS"),(0,a.kt)("p",null,"Most of the differences are explained in ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs"},"Node's documentation"),", but in addition to the things mentioned there, Jest injects a special variable into all executed files - the ",(0,a.kt)("a",{parentName:"p",href:"/jest/uk/docs/29.1/jest-object"},(0,a.kt)("inlineCode",{parentName:"a"},"jest")," object"),". To access this object in ESM, you need to import it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@jest/globals")," module or use ",(0,a.kt)("inlineCode",{parentName:"p"},"import.meta"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {jest} from '@jest/globals';\n\njest.useFakeTimers();\n\n// etc.\n\n// alternatively\nimport.meta.jest.useFakeTimers();\n\n// jest === import.meta.jest => true\n")),(0,a.kt)("h2",{id:"module-mocking-in-esm"},"Module mocking in ESM"),(0,a.kt)("p",null,"Since ESM evaluates static ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statements before looking at the code, the hoisting of ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock")," calls that happens in CJS won't work for ESM. To mock modules in ESM, you need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," or dynamic ",(0,a.kt)("inlineCode",{parentName:"p"},"import()")," after ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock")," calls to load the mocked modules - the same applies to modules which load the mocked modules."),(0,a.kt)("p",null,"ESM mocking is supported through ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.unstable_mockModule"),". As the name suggests, this API is still work in progress, please follow ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/10025"},"this issue")," for updates."),(0,a.kt)("p",null,"The usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.unstable_mockModule")," is essentially the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock")," with two differences: the factory function is required and it can be sync or async:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {jest} from '@jest/globals';\n\njest.unstable_mockModule('node:child_process', () => ({\n  execSync: jest.fn(),\n  // etc.\n}));\n\nconst {execSync} = await import('node:child_process');\n\n// etc.\n")),(0,a.kt)("p",null,"For mocking CJS modules, you should continue to use ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock"),". See the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.cjs"',title:'"main.cjs"'},"const {BrowserWindow, app} = require('electron');\n\n// etc.\n\nmodule.exports = {example};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.test.cjs"',title:'"main.test.cjs"'},"import {createRequire} from 'node:module';\nimport {jest} from '@jest/globals';\n\nconst require = createRequire(import.meta.url);\n\njest.mock('electron', () => ({\n  app: {\n    on: jest.fn(),\n    whenReady: jest.fn(() => Promise.resolve()),\n  },\n  BrowserWindow: jest.fn().mockImplementation(() => ({\n    // partial mocks.\n  })),\n}));\n\nconst {BrowserWindow} = require('electron');\nconst exported = require('./main.cjs');\n\n// alternatively\nconst {BrowserWindow} = (await import('electron')).default;\nconst exported = await import('./main.cjs');\n\n// etc.\n")))}c.isMDXComponent=!0}}]);