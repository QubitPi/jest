"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7884],{60208:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"bypassing-module-mocks","title":"Bypassing module mocks","description":"Jest allows you to mock out whole modules in your tests, which can be useful for testing if your code is calling functions from that module correctly. However, sometimes you may want to use parts of a mocked module in your test file, in which case you want to access the original implementation, rather than a mocked version.","source":"@site/versioned_docs/version-29.7/BypassingModuleMocks.md","sourceDirName":".","slug":"/bypassing-module-mocks","permalink":"/ro/docs/bypassing-module-mocks","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ro","tags":[],"version":"29.7","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1741011166000,"frontMatter":{"id":"bypassing-module-mocks","title":"Bypassing module mocks"},"sidebar":"docs","previous":{"title":"ES6 Class Mocks","permalink":"/ro/docs/es6-class-mocks"},"next":{"title":"ECMAScript Modules","permalink":"/ro/docs/ecmascript-modules"}}');var n=s(62540),r=s(43023);const c={id:"bypassing-module-mocks",title:"Bypassing module mocks"},i=void 0,a={},l=[];function d(e){const t={code:"code",em:"em",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Jest allows you to mock out whole modules in your tests, which can be useful for testing if your code is calling functions from that module correctly. However, sometimes you may want to use parts of a mocked module in your ",(0,n.jsx)(t.em,{children:"test file"}),", in which case you want to access the original implementation, rather than a mocked version."]}),"\n",(0,n.jsxs)(t.p,{children:["Consider writing a test case for this ",(0,n.jsx)(t.code,{children:"createUser"})," function:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="createUser.js"',children:"import fetch from 'node-fetch';\n\nexport const createUser = async () => {\n  const response = await fetch('https://website.com/users', {method: 'POST'});\n  const userId = await response.text();\n  return userId;\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Your test will want to mock the ",(0,n.jsx)(t.code,{children:"fetch"})," function so that we can be sure that it gets called without actually making the network request. However, you'll also need to mock the return value of ",(0,n.jsx)(t.code,{children:"fetch"})," with a ",(0,n.jsx)(t.code,{children:"Response"})," (wrapped in a ",(0,n.jsx)(t.code,{children:"Promise"}),"), as our function uses it to grab the created user's ID. So you might initially try writing a test like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"jest.mock('node-fetch');\n\nimport fetch, {Response} from 'node-fetch';\nimport {createUser} from './createUser';\n\ntest('createUser calls fetch with the right args and returns the user id', async () => {\n  fetch.mockReturnValue(Promise.resolve(new Response('4')));\n\n  const userId = await createUser();\n\n  expect(fetch).toHaveBeenCalledTimes(1);\n  expect(fetch).toHaveBeenCalledWith('https://website.com/users', {\n    method: 'POST',\n  });\n  expect(userId).toBe('4');\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["However, if you ran that test you would find that the ",(0,n.jsx)(t.code,{children:"createUser"})," function would fail, throwing the error: ",(0,n.jsx)(t.code,{children:"TypeError: response.text is not a function"}),". This is because the ",(0,n.jsx)(t.code,{children:"Response"})," class you've imported from ",(0,n.jsx)(t.code,{children:"node-fetch"})," has been mocked (due to the ",(0,n.jsx)(t.code,{children:"jest.mock"})," call at the top of the test file) so it no longer behaves the way it should."]}),"\n",(0,n.jsxs)(t.p,{children:["To get around problems like this, Jest provides the ",(0,n.jsx)(t.code,{children:"jest.requireActual"})," helper. To make the above test work, make the following change to the imports in the test file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// BEFORE\njest.mock('node-fetch');\nimport fetch, {Response} from 'node-fetch';\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// AFTER\njest.mock('node-fetch');\nimport fetch from 'node-fetch';\nconst {Response} = jest.requireActual('node-fetch');\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This allows your test file to import the actual ",(0,n.jsx)(t.code,{children:"Response"})," object from ",(0,n.jsx)(t.code,{children:"node-fetch"}),", rather than a mocked version. This means the test will now pass correctly."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},43023:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>i});var o=s(63696);const n={},r=o.createContext(n);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);