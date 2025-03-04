"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7860],{55946:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"ecmascript-modules","title":"ECMAScript Modules","description":"Jest ships with experimental support for ECMAScript Modules (ESM).","source":"@site/versioned_docs/version-29.7/ECMAScriptModules.md","sourceDirName":".","slug":"/ecmascript-modules","permalink":"/zh-Hans/docs/ecmascript-modules","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/zh-CN","tags":[],"version":"29.7","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1741052460000,"frontMatter":{"id":"ecmascript-modules","title":"ECMAScript Modules"},"sidebar":"docs","previous":{"title":"Bypassing module mocks","permalink":"/zh-Hans/docs/bypassing-module-mocks"},"next":{"title":"Using with webpack","permalink":"/zh-Hans/docs/webpack"}}');var o=n(62540),i=n(43023);const r={id:"ecmascript-modules",title:"ECMAScript Modules"},c=void 0,l={},d=[{value:"Differences between ESM and CommonJS",id:"differences-between-esm-and-commonjs",level:2},{value:"Module mocking in ESM",id:"module-mocking-in-esm",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.admonition,{type:"caution",children:[(0,o.jsxs)(s.p,{children:["Jest ships with ",(0,o.jsx)(s.strong,{children:"experimental"})," support for ECMAScript Modules (ESM)."]}),(0,o.jsxs)(s.p,{children:["The implementation may have bugs and lack features. For the latest status check out the ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/9430",children:"issue"})," and the ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/labels/ES%20Modules",children:"label"})," on the issue tracker."]}),(0,o.jsxs)(s.p,{children:["Also note that the APIs Jest uses to implement ESM support are still ",(0,o.jsx)(s.a,{href:"https://nodejs.org/api/vm.html#vm_class_vm_module",children:"considered experimental by Node"})," (as of version ",(0,o.jsx)(s.code,{children:"18.8.0"}),")."]})]}),"\n",(0,o.jsx)(s.p,{children:"With the warnings out of the way, this is how you activate ESM support in your tests."}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Ensure you either disable ",(0,o.jsx)(s.a,{href:"/zh-Hans/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:"code transforms"})," by passing ",(0,o.jsx)(s.code,{children:"transform: {}"})," or otherwise configure your transformer to emit ESM rather than the default CommonJS (CJS)."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Execute ",(0,o.jsx)(s.code,{children:"node"})," with ",(0,o.jsx)(s.code,{children:"--experimental-vm-modules"}),", e.g. ",(0,o.jsx)(s.code,{children:"node --experimental-vm-modules node_modules/jest/bin/jest.js"})," or ",(0,o.jsx)(s.code,{children:'NODE_OPTIONS="$NODE_OPTIONS --experimental-vm-modules" npx jest'})," etc."]}),"\n",(0,o.jsxs)(s.p,{children:["On Windows, you can use ",(0,o.jsx)(s.a,{href:"https://github.com/kentcdodds/cross-env",children:(0,o.jsx)(s.code,{children:"cross-env"})})," to be able to set environment variables."]}),"\n",(0,o.jsxs)(s.p,{children:["If you use Yarn, you can use ",(0,o.jsx)(s.code,{children:"yarn node --experimental-vm-modules $(yarn bin jest)"}),". This command will also work if you use ",(0,o.jsx)(s.a,{href:"https://yarnpkg.com/features/pnp",children:"Yarn Plug'n'Play"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["If your codebase includes ESM imports from ",(0,o.jsx)(s.code,{children:"*.wasm"})," files, you do ",(0,o.jsx)(s.em,{children:"not"})," need to pass ",(0,o.jsx)(s.code,{children:"--experimental-wasm-modules"})," to ",(0,o.jsx)(s.code,{children:"node"}),". Current implementation of WebAssembly imports in Jest relies on experimental VM modules, however, this may change in the future."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Beyond that, we attempt to follow ",(0,o.jsx)(s.code,{children:"node"}),'\'s logic for activating "ESM mode" (such as looking at ',(0,o.jsx)(s.code,{children:"type"})," in ",(0,o.jsx)(s.code,{children:"package.json"})," or ",(0,o.jsx)(s.code,{children:".mjs"})," files), see ",(0,o.jsx)(s.a,{href:"https://nodejs.org/api/esm.html#esm_enabling",children:"their docs"})," for details."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["If you want to treat other file extensions (such as ",(0,o.jsx)(s.code,{children:".jsx"})," or ",(0,o.jsx)(s.code,{children:".ts"}),") as ESM, please use the ",(0,o.jsxs)(s.a,{href:"/zh-Hans/docs/configuration#extensionstotreatasesm-arraystring",children:[(0,o.jsx)(s.code,{children:"extensionsToTreatAsEsm"})," option"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"differences-between-esm-and-commonjs",children:"Differences between ESM and CommonJS"}),"\n",(0,o.jsxs)(s.p,{children:["Most of the differences are explained in ",(0,o.jsx)(s.a,{href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs",children:"Node's documentation"}),", but in addition to the things mentioned there, Jest injects a special variable into all executed files - the ",(0,o.jsxs)(s.a,{href:"/zh-Hans/docs/jest-object",children:[(0,o.jsx)(s.code,{children:"jest"})," object"]}),". To access this object in ESM, you need to import it from the ",(0,o.jsx)(s.code,{children:"@jest/globals"})," module or use ",(0,o.jsx)(s.code,{children:"import.meta"}),"."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"import {jest} from '@jest/globals';\n\njest.useFakeTimers();\n\n// etc.\n\n// alternatively\nimport.meta.jest.useFakeTimers();\n\n// jest === import.meta.jest => true\n"})}),"\n",(0,o.jsx)(s.h2,{id:"module-mocking-in-esm",children:"Module mocking in ESM"}),"\n",(0,o.jsxs)(s.p,{children:["Since ESM evaluates static ",(0,o.jsx)(s.code,{children:"import"})," statements before looking at the code, the hoisting of ",(0,o.jsx)(s.code,{children:"jest.mock"})," calls that happens in CJS won't work for ESM. To mock modules in ESM, you need to use ",(0,o.jsx)(s.code,{children:"require"})," or dynamic ",(0,o.jsx)(s.code,{children:"import()"})," after ",(0,o.jsx)(s.code,{children:"jest.mock"})," calls to load the mocked modules - the same applies to modules which load the mocked modules."]}),"\n",(0,o.jsxs)(s.p,{children:["ESM mocking is supported through ",(0,o.jsx)(s.code,{children:"jest.unstable_mockModule"}),". As the name suggests, this API is still work in progress, please follow ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/10025",children:"this issue"})," for updates."]}),"\n",(0,o.jsxs)(s.p,{children:["The usage of ",(0,o.jsx)(s.code,{children:"jest.unstable_mockModule"})," is essentially the same as ",(0,o.jsx)(s.code,{children:"jest.mock"})," with two differences: the factory function is required and it can be sync or async:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"import {jest} from '@jest/globals';\n\njest.unstable_mockModule('node:child_process', () => ({\n  execSync: jest.fn(),\n  // etc.\n}));\n\nconst {execSync} = await import('node:child_process');\n\n// etc.\n"})}),"\n",(0,o.jsxs)(s.p,{children:["For mocking CJS modules, you should continue to use ",(0,o.jsx)(s.code,{children:"jest.mock"}),". See the example below:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="main.cjs"',children:"const {BrowserWindow, app} = require('electron');\n\n// etc.\n\nmodule.exports = {example};\n"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="main.test.cjs"',children:"import {createRequire} from 'node:module';\nimport {jest} from '@jest/globals';\n\nconst require = createRequire(import.meta.url);\n\njest.mock('electron', () => ({\n  app: {\n    on: jest.fn(),\n    whenReady: jest.fn(() => Promise.resolve()),\n  },\n  BrowserWindow: jest.fn().mockImplementation(() => ({\n    // partial mocks.\n  })),\n}));\n\nconst {BrowserWindow} = require('electron');\nconst exported = require('./main.cjs');\n\n// alternatively\nconst {BrowserWindow} = (await import('electron')).default;\nconst exported = await import('./main.cjs');\n\n// etc.\n"})})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},43023:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var t=n(63696);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);