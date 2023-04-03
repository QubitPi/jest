"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[55486],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(25773),r=(n(27378),n(35318));const s={id:"bypassing-module-mocks",title:"Bypassing module mocks"},a=void 0,i={unversionedId:"bypassing-module-mocks",id:"version-26.x/bypassing-module-mocks",title:"Bypassing module mocks",description:"Jest allows you to mock out whole modules in your tests, which can be useful for testing if your code is calling functions from that module correctly. However, sometimes you may want to use parts of a mocked module in your test file, in which case you want to access the original implementation, rather than a mocked version.",source:"@site/versioned_docs/version-26.x/BypassingModuleMocks.md",sourceDirName:".",slug:"/bypassing-module-mocks",permalink:"/jest/es-ES/docs/26.x/bypassing-module-mocks",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"26.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680514817,formattedLastUpdatedAt:"3 abr 2023",frontMatter:{id:"bypassing-module-mocks",title:"Bypassing module mocks"},sidebar:"version-26.x/docs",previous:{title:"ES6 Class Mocks",permalink:"/jest/es-ES/docs/26.x/es6-class-mocks"},next:{title:"ECMAScript Modules",permalink:"/jest/es-ES/docs/26.x/ecmascript-modules"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jest allows you to mock out whole modules in your tests, which can be useful for testing if your code is calling functions from that module correctly. However, sometimes you may want to use parts of a mocked module in your ",(0,r.kt)("em",{parentName:"p"},"test file"),", in which case you want to access the original implementation, rather than a mocked version."),(0,r.kt)("p",null,"Consider writing a test case for this ",(0,r.kt)("inlineCode",{parentName:"p"},"createUser")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="createUser.js"',title:'"createUser.js"'},"import fetch from 'node-fetch';\n\nexport const createUser = async () => {\n  const response = await fetch('https://website.com/users', {method: 'POST'});\n  const userId = await response.text();\n  return userId;\n};\n")),(0,r.kt)("p",null,"Your test will want to mock the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," function so that we can be sure that it gets called without actually making the network request. However, you'll also need to mock the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," (wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"), as our function uses it to grab the created user's ID. So you might initially try writing a test like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jest.mock('node-fetch');\n\nimport fetch, {Response} from 'node-fetch';\nimport {createUser} from './createUser';\n\ntest('createUser calls fetch with the right args and returns the user id', async () => {\n  fetch.mockReturnValue(Promise.resolve(new Response('4')));\n\n  const userId = await createUser();\n\n  expect(fetch).toHaveBeenCalledTimes(1);\n  expect(fetch).toHaveBeenCalledWith('https://website.com/users', {\n    method: 'POST',\n  });\n  expect(userId).toBe('4');\n});\n")),(0,r.kt)("p",null,"However, if you ran that test you would find that the ",(0,r.kt)("inlineCode",{parentName:"p"},"createUser")," function would fail, throwing the error: ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeError: response.text is not a function"),". This is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," class you've imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"node-fetch")," has been mocked (due to the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.mock")," call at the top of the test file) so it no longer behaves the way it should."),(0,r.kt)("p",null,"To get around problems like this, Jest provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.requireActual")," helper. To make the above test work, make the following change to the imports in the test file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// BEFORE\njest.mock('node-fetch');\nimport fetch, {Response} from 'node-fetch';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// AFTER\njest.mock('node-fetch');\nimport fetch from 'node-fetch';\nconst {Response} = jest.requireActual('node-fetch');\n")),(0,r.kt)("p",null,"This allows your test file to import the actual ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," object from ",(0,r.kt)("inlineCode",{parentName:"p"},"node-fetch"),", rather than a mocked version. This means the test will now pass correctly."))}u.isMDXComponent=!0}}]);