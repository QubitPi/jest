"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[12246],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),i=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(r.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(n),k=a,f=m["".concat(r,".").concat(k)]||m[k]||p[k]||c;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=k;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<c;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var o=n(25773),a=(n(27378),n(35318));const c={id:"mock-functions",title:"Mock Functions"},s=void 0,l={unversionedId:"mock-functions",id:"mock-functions",title:"Mock Functions",description:"Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.",source:"@site/../docs/MockFunctions.md",sourceDirName:".",slug:"/mock-functions",permalink:"/jest/ja/docs/next/mock-functions",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678699283,formattedLastUpdatedAt:"2023\u5e743\u670813\u65e5",frontMatter:{id:"mock-functions",title:"Mock Functions"},sidebar:"docs",previous:{title:"Setup and Teardown",permalink:"/jest/ja/docs/next/setup-teardown"},next:{title:"Jest Platform",permalink:"/jest/ja/docs/next/jest-platform"}},r={},i=[{value:"Using a mock function",id:"using-a-mock-function",level:2},{value:"<code>.mock</code> property",id:"mock-property",level:2},{value:"Mock Return Values",id:"mock-return-values",level:2},{value:"Mocking Modules",id:"mocking-modules",level:2},{value:"Mocking Partials",id:"mocking-partials",level:2},{value:"Mock Implementations",id:"mock-implementations",level:2},{value:"Mock Names",id:"mock-names",level:2},{value:"Custom Matchers",id:"custom-matchers",level:2}],u={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with ",(0,a.kt)("inlineCode",{parentName:"p"},"new"),", and allowing test-time configuration of return values."),(0,a.kt)("p",null,"There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a ",(0,a.kt)("a",{parentName:"p",href:"/jest/ja/docs/next/manual-mocks"},(0,a.kt)("inlineCode",{parentName:"a"},"manual mock"))," to override a module dependency."),(0,a.kt)("h2",{id:"using-a-mock-function"},"Using a mock function"),(0,a.kt)("p",null,"Let's imagine we're testing an implementation of a function ",(0,a.kt)("inlineCode",{parentName:"p"},"forEach"),", which invokes a callback for each item in a supplied array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="forEach.js"',title:'"forEach.js"'},"export function forEach(items, callback) {\n  for (let index = 0; index < items.length; index++) {\n    callback(items[index]);\n  }\n}\n")),(0,a.kt)("p",null,"To test this function, we can use a mock function, and inspect the mock's state to ensure the callback is invoked as expected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="forEach.test.js"',title:'"forEach.test.js"'},"const forEach = require('./forEach');\n\nconst mockCallback = jest.fn(x => 42 + x);\n\ntest('forEach mock function', () => {\n  forEach([0, 1], mockCallback);\n\n  // The mock function was called twice\n  expect(mockCallback.mock.calls).toHaveLength(2);\n\n  // The first argument of the first call to the function was 0\n  expect(mockCallback.mock.calls[0][0]).toBe(0);\n\n  // The first argument of the second call to the function was 1\n  expect(mockCallback.mock.calls[1][0]).toBe(1);\n\n  // The return value of the first call to the function was 42\n  expect(mockCallback.mock.results[0].value).toBe(42);\n});\n")),(0,a.kt)("h2",{id:"mock-property"},(0,a.kt)("inlineCode",{parentName:"h2"},".mock")," property"),(0,a.kt)("p",null,"All mock functions have this special ",(0,a.kt)("inlineCode",{parentName:"p"},".mock")," property, which is where data about how the function has been called and what the function returned is kept. The ",(0,a.kt)("inlineCode",{parentName:"p"},".mock")," property also tracks the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," for each call, so it is possible to inspect this as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myMock1 = jest.fn();\nconst a = new myMock1();\nconsole.log(myMock1.mock.instances);\n// > [ <a> ]\n\nconst myMock2 = jest.fn();\nconst b = {};\nconst bound = myMock2.bind(b);\nbound();\nconsole.log(myMock2.mock.contexts);\n// > [ <b> ]\n")),(0,a.kt)("p",null,"These mock members are very useful in tests to assert how these functions get called, instantiated, or what they returned:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// The function was called exactly once\nexpect(someMockFunction.mock.calls).toHaveLength(1);\n\n// The first arg of the first call to the function was 'first arg'\nexpect(someMockFunction.mock.calls[0][0]).toBe('first arg');\n\n// The second arg of the first call to the function was 'second arg'\nexpect(someMockFunction.mock.calls[0][1]).toBe('second arg');\n\n// The return value of the first call to the function was 'return value'\nexpect(someMockFunction.mock.results[0].value).toBe('return value');\n\n// The function was called with a certain `this` context: the `element` object.\nexpect(someMockFunction.mock.contexts[0]).toBe(element);\n\n// This function was instantiated exactly twice\nexpect(someMockFunction.mock.instances.length).toBe(2);\n\n// The object returned by the first instantiation of this function\n// had a `name` property whose value was set to 'test'\nexpect(someMockFunction.mock.instances[0].name).toBe('test');\n\n// The first argument of the last call to the function was 'test'\nexpect(someMockFunction.mock.lastCall[0]).toBe('test');\n")),(0,a.kt)("h2",{id:"mock-return-values"},"Mock Return Values"),(0,a.kt)("p",null,"Mock functions can also be used to inject test values into your code during a test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myMock = jest.fn();\nconsole.log(myMock());\n// > undefined\n\nmyMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);\n\nconsole.log(myMock(), myMock(), myMock(), myMock());\n// > 10, 'x', true, true\n")),(0,a.kt)("p",null,"Mock functions are also very effective in code that uses a functional continuation-passing style. Code written in this style helps avoid the need for complicated stubs that recreate the behavior of the real component they're standing in for, in favor of injecting values directly into the test right before they're used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const filterTestFn = jest.fn();\n\n// Make the mock return `true` for the first call,\n// and `false` for the second call\nfilterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);\n\nconst result = [11, 12].filter(num => filterTestFn(num));\n\nconsole.log(result);\n// > [11]\nconsole.log(filterTestFn.mock.calls[0][0]); // 11\nconsole.log(filterTestFn.mock.calls[1][0]); // 12\n")),(0,a.kt)("p",null,"Most real-world examples actually involve getting ahold of a mock function on a dependent component and configuring that, but the technique is the same. In these cases, try to avoid the temptation to implement logic inside of any function that's not directly being tested."),(0,a.kt)("h2",{id:"mocking-modules"},"Mocking Modules"),(0,a.kt)("p",null,"Suppose we have a class that fetches users from our API. The class uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," to call the API then returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," attribute which contains all the users:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="users.js"',title:'"users.js"'},"import axios from 'axios';\n\nclass Users {\n  static all() {\n    return axios.get('/users.json').then(resp => resp.data);\n  }\n}\n\nexport default Users;\n")),(0,a.kt)("p",null,"Now, in order to test this method without actually hitting the API (and thus creating slow and fragile tests), we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock(...)")," function to automatically mock the axios module."),(0,a.kt)("p",null,"Once we mock the module we can provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"mockResolvedValue")," for ",(0,a.kt)("inlineCode",{parentName:"p"},".get")," that returns the data we want our test to assert against. In effect, we are saying that we want ",(0,a.kt)("inlineCode",{parentName:"p"},"axios.get('/users.json')")," to return a fake response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="users.test.js"',title:'"users.test.js"'},"import axios from 'axios';\nimport Users from './users';\n\njest.mock('axios');\n\ntest('should fetch users', () => {\n  const users = [{name: 'Bob'}];\n  const resp = {data: users};\n  axios.get.mockResolvedValue(resp);\n\n  // or you could use the following depending on your use case:\n  // axios.get.mockImplementation(() => Promise.resolve(resp))\n\n  return Users.all().then(data => expect(data).toEqual(users));\n});\n")),(0,a.kt)("h2",{id:"mocking-partials"},"Mocking Partials"),(0,a.kt)("p",null,"Subsets of a module can be mocked and the rest of the module can keep their actual implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="foo-bar-baz.js"',title:'"foo-bar-baz.js"'},"export const foo = 'foo';\nexport const bar = () => 'bar';\nexport default () => 'baz';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//test.js\nimport defaultExport, {bar, foo} from '../foo-bar-baz';\n\njest.mock('../foo-bar-baz', () => {\n  const originalModule = jest.requireActual('../foo-bar-baz');\n\n  //Mock the default export and named export 'foo'\n  return {\n    __esModule: true,\n    ...originalModule,\n    default: jest.fn(() => 'mocked baz'),\n    foo: 'mocked foo',\n  };\n});\n\ntest('should do a partial mock', () => {\n  const defaultExportResult = defaultExport();\n  expect(defaultExportResult).toBe('mocked baz');\n  expect(defaultExport).toHaveBeenCalled();\n\n  expect(foo).toBe('mocked foo');\n  expect(bar()).toBe('bar');\n});\n")),(0,a.kt)("h2",{id:"mock-implementations"},"Mock Implementations"),(0,a.kt)("p",null,"Still, there are cases where it's useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function. This can be done with ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.fn")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"mockImplementationOnce")," method on mock functions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myMockFn = jest.fn(cb => cb(null, true));\n\nmyMockFn((err, val) => console.log(val));\n// > true\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mockImplementation")," method is useful when you need to define the default implementation of a mock function that is created from another module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="foo.js"',title:'"foo.js"'},"module.exports = function () {\n  // some implementation;\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="test.js"',title:'"test.js"'},"jest.mock('../foo'); // this happens automatically with automocking\nconst foo = require('../foo');\n\n// foo is a mock function\nfoo.mockImplementation(() => 42);\nfoo();\n// > 42\n")),(0,a.kt)("p",null,"When you need to recreate a complex behavior of a mock function such that multiple function calls produce different results, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mockImplementationOnce")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myMockFn = jest\n  .fn()\n  .mockImplementationOnce(cb => cb(null, true))\n  .mockImplementationOnce(cb => cb(null, false));\n\nmyMockFn((err, val) => console.log(val));\n// > true\n\nmyMockFn((err, val) => console.log(val));\n// > false\n")),(0,a.kt)("p",null,"When the mocked function runs out of implementations defined with ",(0,a.kt)("inlineCode",{parentName:"p"},"mockImplementationOnce"),", it will execute the default implementation set with ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.fn")," (if it is defined):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myMockFn = jest\n  .fn(() => 'default')\n  .mockImplementationOnce(() => 'first call')\n  .mockImplementationOnce(() => 'second call');\n\nconsole.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());\n// > 'first call', 'second call', 'default', 'default'\n")),(0,a.kt)("p",null,"For cases where we have methods that are typically chained (and thus always need to return ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"), we have a sugary API to simplify this in the form of a ",(0,a.kt)("inlineCode",{parentName:"p"},".mockReturnThis()")," function that also sits on all mocks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myObj = {\n  myMethod: jest.fn().mockReturnThis(),\n};\n\n// is the same as\n\nconst otherObj = {\n  myMethod: jest.fn(function () {\n    return this;\n  }),\n};\n")),(0,a.kt)("h2",{id:"mock-names"},"Mock Names"),(0,a.kt)("p",null,"You can optionally provide a name for your mock functions, which will be displayed instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"'jest.fn()'")," in the test error output. Use ",(0,a.kt)("a",{parentName:"p",href:"/jest/ja/docs/next/mock-function-api/#mockfnmocknamename"},(0,a.kt)("inlineCode",{parentName:"a"},".mockName()"))," if you want to be able to quickly identify the mock function reporting an error in your test output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myMockFn = jest\n  .fn()\n  .mockReturnValue('default')\n  .mockImplementation(scalar => 42 + scalar)\n  .mockName('add42');\n")),(0,a.kt)("h2",{id:"custom-matchers"},"Custom Matchers"),(0,a.kt)("p",null,"Finally, in order to make it less demanding to assert how mock functions have been called, we've added some custom matcher functions for you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// The mock function was called at least once\nexpect(mockFunc).toHaveBeenCalled();\n\n// The mock function was called at least once with the specified args\nexpect(mockFunc).toHaveBeenCalledWith(arg1, arg2);\n\n// The last call to the mock function was called with the specified args\nexpect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);\n\n// All calls and the name of the mock is written as a snapshot\nexpect(mockFunc).toMatchSnapshot();\n")),(0,a.kt)("p",null,"These matchers are sugar for common forms of inspecting the ",(0,a.kt)("inlineCode",{parentName:"p"},".mock")," property. You can always do this manually yourself if that's more to your taste or if you need to do something more specific:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// The mock function was called at least once\nexpect(mockFunc.mock.calls.length).toBeGreaterThan(0);\n\n// The mock function was called at least once with the specified args\nexpect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);\n\n// The last call to the mock function was called with the specified args\nexpect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([\n  arg1,\n  arg2,\n]);\n\n// The first arg of the last call to the mock function was `42`\n// (note that there is no sugar helper for this specific of an assertion)\nexpect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);\n\n// A snapshot will check that a mock was invoked the same number of times,\n// in the same order, with the same arguments. It will also assert on the name.\nexpect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);\nexpect(mockFunc.getMockName()).toBe('a mock name');\n")),(0,a.kt)("p",null,"For a complete list of matchers, check out the ",(0,a.kt)("a",{parentName:"p",href:"/jest/ja/docs/next/expect"},"reference docs"),"."))}m.isMDXComponent=!0}}]);