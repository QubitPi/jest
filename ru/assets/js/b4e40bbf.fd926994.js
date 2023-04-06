"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[78916],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(25773),o=(n(27378),n(35318));const a={id:"ecmascript-modules",title:"ECMAScript Modules"},s=void 0,i={unversionedId:"ecmascript-modules",id:"version-25.x/ecmascript-modules",title:"ECMAScript Modules",description:"Jest ships with experimental support for ECMAScript Modules (ESM).",source:"@site/versioned_docs/version-25.x/ECMAScriptModules.md",sourceDirName:".",slug:"/ecmascript-modules",permalink:"/jest/ru/docs/25.x/ecmascript-modules",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"25.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680744104,formattedLastUpdatedAt:"6 \u0430\u043f\u0440. 2023 \u0433.",frontMatter:{id:"ecmascript-modules",title:"ECMAScript Modules"},sidebar:"version-25.x/docs",previous:{title:"Bypassing module mocks",permalink:"/jest/ru/docs/25.x/bypassing-module-mocks"},next:{title:"Using with webpack",permalink:"/jest/ru/docs/25.x/webpack"}},p={},l=[{value:"Differences between ESM and CommonJS",id:"differences-between-esm-and-commonjs",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Jest ships with ",(0,o.kt)("strong",{parentName:"p"},"experimental")," support for ECMAScript Modules (ESM)."),(0,o.kt)("p",{parentName:"admonition"},"The implementation may have bugs and lack features. For the latest status check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/9430"},"issue")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/labels/ES%20Modules"},"label")," on the issue tracker."),(0,o.kt)("p",{parentName:"admonition"},"Also note that the APIs Jest uses to implement ESM support are still ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/vm.html#vm_class_vm_module"},"considered experimental by Node")," (as of version ",(0,o.kt)("inlineCode",{parentName:"p"},"18.8.0"),").")),(0,o.kt)("p",null,"With the warnings out of the way, this is how you activate ESM support in your tests."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure you either disable ",(0,o.kt)("a",{parentName:"p",href:"/jest/ru/docs/25.x/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"},"code transforms")," by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"transform: {}")," or otherwise configure your transformer to emit ESM rather than the default CommonJS (CJS).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"--experimental-vm-modules"),", e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"node --experimental-vm-modules node_modules/jest/bin/jest.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_OPTIONS=--experimental-vm-modules npx jest")," etc."),(0,o.kt)("p",{parentName:"li"},"On Windows, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/cross-env"},(0,o.kt)("inlineCode",{parentName:"a"},"cross-env"))," to be able to set environment variables."),(0,o.kt)("p",{parentName:"li"},"If you use Yarn, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn node --experimental-vm-modules $(yarn bin jest)"),". This command will also work if you use ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn Plug'n'Play"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Beyond that, we attempt to follow ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),'\'s logic for activating "ESM mode" (such as looking at ',(0,o.kt)("inlineCode",{parentName:"p"},"type")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mjs")," files), see ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_enabling"},"their docs")," for details"))),(0,o.kt)("h2",{id:"differences-between-esm-and-commonjs"},"Differences between ESM and CommonJS"),(0,o.kt)("p",null,"Most of the differences are explained in ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs"},"Node's documentation"),", but in addition to the things mentioned there, Jest injects a special variable into all executed files - the ",(0,o.kt)("a",{parentName:"p",href:"/jest/ru/docs/25.x/jest-object"},(0,o.kt)("inlineCode",{parentName:"a"},"jest")," object"),". To access this object in ESM, you need to import it from the ",(0,o.kt)("inlineCode",{parentName:"p"},"@jest/globals")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {jest} from '@jest/globals';\n\njest.useFakeTimers();\n\n// etc.\n")),(0,o.kt)("p",null,"Additionally, since ESM evaluates static ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements before looking at the code, the hoisting of ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.mock")," calls that happens in CJS won't work in ESM. To mock modules in ESM, you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," or dynamic ",(0,o.kt)("inlineCode",{parentName:"p"},"import()")," after ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.mock")," calls to load the mocked modules - the same applies to modules which load the mocked modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.cjs"',title:'"main.cjs"'},"const {BrowserWindow, app} = require('electron');\n\n// etc.\n\nmodule.exports = {example};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.test.cjs"',title:'"main.test.cjs"'},"import {createRequire} from 'node:module';\nimport {jest} from '@jest/globals';\n\nconst require = createRequire(import.meta.url);\n\njest.mock('electron', () => ({\n  app: {\n    on: jest.fn(),\n    whenReady: jest.fn(() => Promise.resolve()),\n  },\n  BrowserWindow: jest.fn().mockImplementation(() => ({\n    // partial mocks.\n  })),\n}));\n\nconst {BrowserWindow} = require('electron');\nconst exported = require('./main.cjs');\n\n// alternatively\nconst {BrowserWindow} = (await import('electron')).default;\nconst exported = await import('./main.cjs');\n\n// etc.\n")),(0,o.kt)("p",null,"Please note that we currently don't support ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.mock")," in a clean way in ESM, but that is something we intend to add proper support for in the future. Follow ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/10025"},"this issue")," for updates."))}c.isMDXComponent=!0}}]);