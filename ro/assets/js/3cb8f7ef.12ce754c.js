"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3079],{78299:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"mock-function-api","title":"Mock Functions","description":"Mock functions are also known as \\"spies\\", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.","source":"@site/versioned_docs/version-29.4/MockFunctionAPI.md","sourceDirName":".","slug":"/mock-function-api","permalink":"/ro/docs/29.4/mock-function-api","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ro","tags":[],"version":"29.4","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1741011166000,"frontMatter":{"id":"mock-function-api","title":"Mock Functions"},"sidebar":"api","previous":{"title":"Expect","permalink":"/ro/docs/29.4/expect"},"next":{"title":"The Jest Object","permalink":"/ro/docs/29.4/jest-object"}}');var t=c(62540),s=c(43023),l=c(65457),a=c(97265),r=c(52072),i=c(23192);const d={id:"mock-function-api",title:"Mock Functions"},m=void 0,h={},u=[...r.RM,{value:"Methods",id:"methods",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>mockFn.getMockName()</code>",id:"mockfngetmockname",level:3},{value:"<code>mockFn.mock.calls</code>",id:"mockfnmockcalls",level:3},{value:"<code>mockFn.mock.results</code>",id:"mockfnmockresults",level:3},{value:"<code>mockFn.mock.instances</code>",id:"mockfnmockinstances",level:3},{value:"<code>mockFn.mock.contexts</code>",id:"mockfnmockcontexts",level:3},{value:"<code>mockFn.mock.lastCall</code>",id:"mockfnmocklastcall",level:3},{value:"<code>mockFn.mockClear()</code>",id:"mockfnmockclear",level:3},{value:"<code>mockFn.mockReset()</code>",id:"mockfnmockreset",level:3},{value:"<code>mockFn.mockRestore()</code>",id:"mockfnmockrestore",level:3},{value:"<code>mockFn.mockImplementation(fn)</code>",id:"mockfnmockimplementationfn",level:3},{value:"<code>mockFn.mockImplementationOnce(fn)</code>",id:"mockfnmockimplementationoncefn",level:3},{value:"<code>mockFn.mockName(name)</code>",id:"mockfnmocknamename",level:3},{value:"<code>mockFn.mockReturnThis()</code>",id:"mockfnmockreturnthis",level:3},{value:"<code>mockFn.mockReturnValue(value)</code>",id:"mockfnmockreturnvaluevalue",level:3},{value:"<code>mockFn.mockReturnValueOnce(value)</code>",id:"mockfnmockreturnvalueoncevalue",level:3},{value:"<code>mockFn.mockResolvedValue(value)</code>",id:"mockfnmockresolvedvaluevalue",level:3},{value:"<code>mockFn.mockResolvedValueOnce(value)</code>",id:"mockfnmockresolvedvalueoncevalue",level:3},{value:"<code>mockFn.mockRejectedValue(value)</code>",id:"mockfnmockrejectedvaluevalue",level:3},{value:"<code>mockFn.mockRejectedValueOnce(value)</code>",id:"mockfnmockrejectedvalueoncevalue",level:3},{value:"<code>mockFn.withImplementation(fn, callback)</code>",id:"mockfnwithimplementationfn-callback",level:3},{value:"Replaced Properties",id:"replaced-properties",level:2},{value:"<code>replacedProperty.replaceValue(value)</code>",id:"replacedpropertyreplacevaluevalue",level:3},{value:"<code>replacedProperty.restore()</code>",id:"replacedpropertyrestore",level:3},{value:"TypeScript Usage",id:"typescript-usage",level:2},...r.RM,{value:"<code>jest.fn(implementation?)</code>",id:"jestfnimplementation",level:3},{value:"<code>jest.Mock&lt;T&gt;</code>",id:"jestmockt",level:3},{value:"<code>jest.Mocked&lt;Source&gt;</code>",id:"jestmockedsource",level:3},{value:"<code>jest.Replaced&lt;Source&gt;</code>",id:"jestreplacedsource",level:3},{value:"<code>jest.mocked(source, options?)</code>",id:"jestmockedsource-options",level:3},{value:"<code>jest.Spied&lt;Source&gt;</code>",id:"jestspiedsource",level:3}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:['Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with ',(0,t.jsx)(n.code,{children:"jest.fn()"}),". If no implementation is given, the mock function will return ",(0,t.jsx)(n.code,{children:"undefined"})," when invoked."]}),"\n","\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n","\n",(0,t.jsx)(i.A,{toc:u.slice(1)}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(n.h3,{id:"mockfngetmockname",children:(0,t.jsx)(n.code,{children:"mockFn.getMockName()"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the mock name string set by calling ",(0,t.jsx)(n.a,{href:"#mockfnmocknamename",children:(0,t.jsx)(n.code,{children:".mockName()"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockcalls",children:(0,t.jsx)(n.code,{children:"mockFn.mock.calls"})}),"\n",(0,t.jsx)(n.p,{children:"An array containing the call arguments of all calls that have been made to this mock function. Each item in the array is an array of arguments that were passed during the call."}),"\n",(0,t.jsxs)(n.p,{children:["For example: A mock function ",(0,t.jsx)(n.code,{children:"f"})," that has been called twice, with the arguments ",(0,t.jsx)(n.code,{children:"f('arg1', 'arg2')"}),", and then with the arguments ",(0,t.jsx)(n.code,{children:"f('arg3', 'arg4')"}),", would have a ",(0,t.jsx)(n.code,{children:"mock.calls"})," array that looks like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n  ['arg1', 'arg2'],\n  ['arg3', 'arg4'],\n];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockresults",children:(0,t.jsx)(n.code,{children:"mockFn.mock.results"})}),"\n",(0,t.jsxs)(n.p,{children:["An array containing the results of all calls that have been made to this mock function. Each entry in this array is an object containing a ",(0,t.jsx)(n.code,{children:"type"})," property, and a ",(0,t.jsx)(n.code,{children:"value"})," property. ",(0,t.jsx)(n.code,{children:"type"})," will be one of the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'return'"})," - Indicates that the call completed by returning normally."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'throw'"})," - Indicates that the call completed by throwing a value."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'incomplete'"})," - Indicates that the call has not yet completed. This occurs if you test the result from within the mock function itself, or from within a function that was called by the mock."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"value"})," property contains the value that was thrown or returned. ",(0,t.jsx)(n.code,{children:"value"})," is undefined when ",(0,t.jsx)(n.code,{children:"type === 'incomplete'"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example: A mock function ",(0,t.jsx)(n.code,{children:"f"})," that has been called three times, returning ",(0,t.jsx)(n.code,{children:"'result1'"}),", throwing an error, and then returning ",(0,t.jsx)(n.code,{children:"'result2'"}),", would have a ",(0,t.jsx)(n.code,{children:"mock.results"})," array that looks like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n  {\n    type: 'return',\n    value: 'result1',\n  },\n  {\n    type: 'throw',\n    value: {\n      /* Error instance */\n    },\n  },\n  {\n    type: 'return',\n    value: 'result2',\n  },\n];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockinstances",children:(0,t.jsx)(n.code,{children:"mockFn.mock.instances"})}),"\n",(0,t.jsxs)(n.p,{children:["An array that contains all the object instances that have been instantiated from this mock function using ",(0,t.jsx)(n.code,{children:"new"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example: A mock function that has been instantiated twice would have the following ",(0,t.jsx)(n.code,{children:"mock.instances"})," array:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mockFn = jest.fn();\n\nconst a = new mockFn();\nconst b = new mockFn();\n\nmockFn.mock.instances[0] === a; // true\nmockFn.mock.instances[1] === b; // true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockcontexts",children:(0,t.jsx)(n.code,{children:"mockFn.mock.contexts"})}),"\n",(0,t.jsx)(n.p,{children:"An array that contains the contexts for all calls of the mock function."}),"\n",(0,t.jsxs)(n.p,{children:["A context is the ",(0,t.jsx)(n.code,{children:"this"})," value that a function receives when called. The context can be set using ",(0,t.jsx)(n.code,{children:"Function.prototype.bind"}),", ",(0,t.jsx)(n.code,{children:"Function.prototype.call"})," or ",(0,t.jsx)(n.code,{children:"Function.prototype.apply"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mockFn = jest.fn();\n\nconst boundMockFn = mockFn.bind(thisContext0);\nboundMockFn('a', 'b');\nmockFn.call(thisContext1, 'a', 'b');\nmockFn.apply(thisContext2, ['a', 'b']);\n\nmockFn.mock.contexts[0] === thisContext0; // true\nmockFn.mock.contexts[1] === thisContext1; // true\nmockFn.mock.contexts[2] === thisContext2; // true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmocklastcall",children:(0,t.jsx)(n.code,{children:"mockFn.mock.lastCall"})}),"\n",(0,t.jsxs)(n.p,{children:["An array containing the call arguments of the last call that was made to this mock function. If the function was not called, it will return ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example: A mock function ",(0,t.jsx)(n.code,{children:"f"})," that has been called twice, with the arguments ",(0,t.jsx)(n.code,{children:"f('arg1', 'arg2')"}),", and then with the arguments ",(0,t.jsx)(n.code,{children:"f('arg3', 'arg4')"}),", would have a ",(0,t.jsx)(n.code,{children:"mock.lastCall"})," array that looks like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"['arg3', 'arg4'];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockclear",children:(0,t.jsx)(n.code,{children:"mockFn.mockClear()"})}),"\n",(0,t.jsxs)(n.p,{children:["Clears all information stored in the ",(0,t.jsx)(n.a,{href:"#mockfnmockcalls",children:(0,t.jsx)(n.code,{children:"mockFn.mock.calls"})}),", ",(0,t.jsx)(n.a,{href:"#mockfnmockinstances",children:(0,t.jsx)(n.code,{children:"mockFn.mock.instances"})}),", ",(0,t.jsx)(n.a,{href:"#mockfnmockcontexts",children:(0,t.jsx)(n.code,{children:"mockFn.mock.contexts"})})," and ",(0,t.jsx)(n.a,{href:"#mockfnmockresults",children:(0,t.jsx)(n.code,{children:"mockFn.mock.results"})})," arrays. Often this is useful when you want to clean up a mocks usage data between two assertions."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"configuration#clearmocks-boolean",children:(0,t.jsx)(n.code,{children:"clearMocks"})})," configuration option is available to clear mocks automatically before each tests."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Beware that ",(0,t.jsx)(n.code,{children:"mockFn.mockClear()"})," will replace ",(0,t.jsx)(n.code,{children:"mockFn.mock"}),", not just reset the values of its properties! You should, therefore, avoid assigning ",(0,t.jsx)(n.code,{children:"mockFn.mock"})," to other variables, temporary or not, to make sure you don't access stale data."]})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockreset",children:(0,t.jsx)(n.code,{children:"mockFn.mockReset()"})}),"\n",(0,t.jsxs)(n.p,{children:["Does everything that ",(0,t.jsx)(n.a,{href:"#mockfnmockclear",children:(0,t.jsx)(n.code,{children:"mockFn.mockClear()"})})," does, and also replaces the mock implementation with an empty function, returning ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"configuration#resetmocks-boolean",children:(0,t.jsx)(n.code,{children:"resetMocks"})})," configuration option is available to reset mocks automatically before each test."]}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockrestore",children:(0,t.jsx)(n.code,{children:"mockFn.mockRestore()"})}),"\n",(0,t.jsxs)(n.p,{children:["Does everything that ",(0,t.jsx)(n.a,{href:"#mockfnmockreset",children:(0,t.jsx)(n.code,{children:"mockFn.mockReset()"})})," does, and also restores the original (non-mocked) implementation."]}),"\n",(0,t.jsx)(n.p,{children:"This is useful when you want to mock functions in certain test cases and restore the original implementation in others."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"configuration#restoremocks-boolean",children:(0,t.jsx)(n.code,{children:"restoreMocks"})})," configuration option is available to restore mocks automatically before each test."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"mockFn.mockRestore()"})," only works when the mock was created with ",(0,t.jsx)(n.code,{children:"jest.spyOn()"}),". Thus you have to take care of restoration yourself when manually assigning ",(0,t.jsx)(n.code,{children:"jest.fn()"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockimplementationfn",children:(0,t.jsx)(n.code,{children:"mockFn.mockImplementation(fn)"})}),"\n",(0,t.jsx)(n.p,{children:"Accepts a function that should be used as the implementation of the mock. The mock itself will still record all calls that go into and instances that come from itself \u2013 the only difference is that the implementation will also be executed when the mock is called."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"jest.fn(implementation)"})," is a shorthand for ",(0,t.jsx)(n.code,{children:"jest.fn().mockImplementation(implementation)"}),"."]})}),"\n",(0,t.jsxs)(l.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"tab",children:"const mockFn = jest.fn(scalar => 42 + scalar);\n\nmockFn(0); // 42\nmockFn(1); // 43\n\nmockFn.mockImplementation(scalar => 36 + scalar);\n\nmockFn(2); // 38\nmockFn(3); // 39\n"})})}),(0,t.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import {jest} from '@jest/globals';\n\nconst mockFn = jest.fn((scalar: number) => 42 + scalar);\n\nmockFn(0); // 42\nmockFn(1); // 43\n\nmockFn.mockImplementation(scalar => 36 + scalar);\n\nmockFn(2); // 38\nmockFn(3); // 39\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".mockImplementation()"})," can also be used to mock class constructors:"]}),"\n",(0,t.jsxs)(l.A,{groupId:"code-examples",children:[(0,t.jsxs)(a.A,{value:"js",label:"JavaScript",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'tab={"span":2} title="SomeClass.js"',children:"module.exports = class SomeClass {\n  method(a, b) {}\n};\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="SomeClass.test.js"',children:"const SomeClass = require('./SomeClass');\n\njest.mock('./SomeClass'); // this happens automatically with automocking\n\nconst mockMethod = jest.fn();\nSomeClass.mockImplementation(() => {\n  return {\n    method: mockMethod,\n  };\n});\n\nconst some = new SomeClass();\nsome.method('a', 'b');\n\nconsole.log('Calls to method:', mockMethod.mock.calls);\n"})})]}),(0,t.jsxs)(a.A,{value:"ts",label:"TypeScript",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'tab={"span":2} title="SomeClass.ts"',children:"export class SomeClass {\n  method(a: string, b: string): void {}\n}\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="SomeClass.test.ts"',children:"import {jest} from '@jest/globals';\nimport {SomeClass} from './SomeClass';\n\njest.mock('./SomeClass'); // this happens automatically with automocking\n\nconst mockMethod = jest.fn<(a: string, b: string) => void>();\njest.mocked(SomeClass).mockImplementation(() => {\n  return {\n    method: mockMethod,\n  };\n});\n\nconst some = new SomeClass();\nsome.method('a', 'b');\n\nconsole.log('Calls to method:', mockMethod.mock.calls);\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockimplementationoncefn",children:(0,t.jsx)(n.code,{children:"mockFn.mockImplementationOnce(fn)"})}),"\n",(0,t.jsx)(n.p,{children:"Accepts a function that will be used as an implementation of the mock for one call to the mocked function. Can be chained so that multiple function calls produce different results."}),"\n",(0,t.jsxs)(l.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"tab",children:"const mockFn = jest\n  .fn()\n  .mockImplementationOnce(cb => cb(null, true))\n  .mockImplementationOnce(cb => cb(null, false));\n\nmockFn((err, val) => console.log(val)); // true\nmockFn((err, val) => console.log(val)); // false\n"})})}),(0,t.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import {jest} from '@jest/globals';\n\nconst mockFn = jest\n  .fn<(cb: (a: null, b: boolean) => void) => void>()\n  .mockImplementationOnce(cb => cb(null, true))\n  .mockImplementationOnce(cb => cb(null, false));\n\nmockFn((err, val) => console.log(val)); // true\nmockFn((err, val) => console.log(val)); // false\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["When the mocked function runs out of implementations defined with ",(0,t.jsx)(n.code,{children:".mockImplementationOnce()"}),", it will execute the default implementation set with ",(0,t.jsx)(n.code,{children:"jest.fn(() => defaultValue)"})," or ",(0,t.jsx)(n.code,{children:".mockImplementation(() => defaultValue)"})," if they were called:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mockFn = jest\n  .fn(() => 'default')\n  .mockImplementationOnce(() => 'first call')\n  .mockImplementationOnce(() => 'second call');\n\nmockFn(); // 'first call'\nmockFn(); // 'second call'\nmockFn(); // 'default'\nmockFn(); // 'default'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmocknamename",children:(0,t.jsx)(n.code,{children:"mockFn.mockName(name)"})}),"\n",(0,t.jsxs)(n.p,{children:["Accepts a string to use in test result output in place of ",(0,t.jsx)(n.code,{children:"'jest.fn()'"})," to indicate which mock function is being referenced."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mockFn = jest.fn().mockName('mockedFunction');\n\n// mockFn();\nexpect(mockFn).toHaveBeenCalled();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Will result in this error:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"expect(mockedFunction).toHaveBeenCalled()\n\nExpected number of calls: >= 1\nReceived number of calls:    0\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockreturnthis",children:(0,t.jsx)(n.code,{children:"mockFn.mockReturnThis()"})}),"\n",(0,t.jsx)(n.p,{children:"Shorthand for:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.fn(function () {\n  return this;\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockreturnvaluevalue",children:(0,t.jsx)(n.code,{children:"mockFn.mockReturnValue(value)"})}),"\n",(0,t.jsx)(n.p,{children:"Shorthand for:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.fn().mockImplementation(() => value);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Accepts a value that will be returned whenever the mock function is called."}),"\n",(0,t.jsxs)(l.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"tab",children:"const mock = jest.fn();\n\nmock.mockReturnValue(42);\nmock(); // 42\n\nmock.mockReturnValue(43);\nmock(); // 43\n"})})}),(0,t.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import {jest} from '@jest/globals';\n\nconst mock = jest.fn<() => number>();\n\nmock.mockReturnValue(42);\nmock(); // 42\n\nmock.mockReturnValue(43);\nmock(); // 43\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockreturnvalueoncevalue",children:(0,t.jsx)(n.code,{children:"mockFn.mockReturnValueOnce(value)"})}),"\n",(0,t.jsx)(n.p,{children:"Shorthand for:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.fn().mockImplementationOnce(() => value);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Accepts a value that will be returned for one call to the mock function. Can be chained so that successive calls to the mock function return different values. When there are no more ",(0,t.jsx)(n.code,{children:"mockReturnValueOnce"})," values to use, calls will return a value specified by ",(0,t.jsx)(n.code,{children:"mockReturnValue"}),"."]}),"\n",(0,t.jsxs)(l.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"tab",children:"const mockFn = jest\n  .fn()\n  .mockReturnValue('default')\n  .mockReturnValueOnce('first call')\n  .mockReturnValueOnce('second call');\n\nmockFn(); // 'first call'\nmockFn(); // 'second call'\nmockFn(); // 'default'\nmockFn(); // 'default'\n"})})}),(0,t.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import {jest} from '@jest/globals';\n\nconst mockFn = jest\n  .fn<() => string>()\n  .mockReturnValue('default')\n  .mockReturnValueOnce('first call')\n  .mockReturnValueOnce('second call');\n\nmockFn(); // 'first call'\nmockFn(); // 'second call'\nmockFn(); // 'default'\nmockFn(); // 'default'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockresolvedvaluevalue",children:(0,t.jsx)(n.code,{children:"mockFn.mockResolvedValue(value)"})}),"\n",(0,t.jsx)(n.p,{children:"Shorthand for:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.fn().mockImplementation(() => Promise.resolve(value));\n"})}),"\n",(0,t.jsx)(n.p,{children:"Useful to mock async functions in async tests:"}),"\n",(0,t.jsxs)(l.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"tab",children:"test('async test', async () => {\n  const asyncMock = jest.fn().mockResolvedValue(43);\n\n  await asyncMock(); // 43\n});\n"})})}),(0,t.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import {jest, test} from '@jest/globals';\n\ntest('async test', async () => {\n  const asyncMock = jest.fn<() => Promise<number>>().mockResolvedValue(43);\n\n  await asyncMock(); // 43\n});\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockresolvedvalueoncevalue",children:(0,t.jsx)(n.code,{children:"mockFn.mockResolvedValueOnce(value)"})}),"\n",(0,t.jsx)(n.p,{children:"Shorthand for:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.fn().mockImplementationOnce(() => Promise.resolve(value));\n"})}),"\n",(0,t.jsx)(n.p,{children:"Useful to resolve different values over multiple async calls:"}),"\n",(0,t.jsxs)(l.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"tab",children:"test('async test', async () => {\n  const asyncMock = jest\n    .fn()\n    .mockResolvedValue('default')\n    .mockResolvedValueOnce('first call')\n    .mockResolvedValueOnce('second call');\n\n  await asyncMock(); // 'first call'\n  await asyncMock(); // 'second call'\n  await asyncMock(); // 'default'\n  await asyncMock(); // 'default'\n});\n"})})}),(0,t.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import {jest, test} from '@jest/globals';\n\ntest('async test', async () => {\n  const asyncMock = jest\n    .fn<() => Promise<string>>()\n    .mockResolvedValue('default')\n    .mockResolvedValueOnce('first call')\n    .mockResolvedValueOnce('second call');\n\n  await asyncMock(); // 'first call'\n  await asyncMock(); // 'second call'\n  await asyncMock(); // 'default'\n  await asyncMock(); // 'default'\n});\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockrejectedvaluevalue",children:(0,t.jsx)(n.code,{children:"mockFn.mockRejectedValue(value)"})}),"\n",(0,t.jsx)(n.p,{children:"Shorthand for:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.fn().mockImplementation(() => Promise.reject(value));\n"})}),"\n",(0,t.jsx)(n.p,{children:"Useful to create async mock functions that will always reject:"}),"\n",(0,t.jsxs)(l.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"tab",children:"test('async test', async () => {\n  const asyncMock = jest\n    .fn()\n    .mockRejectedValue(new Error('Async error message'));\n\n  await asyncMock(); // throws 'Async error message'\n});\n"})})}),(0,t.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import {jest, test} from '@jest/globals';\n\ntest('async test', async () => {\n  const asyncMock = jest\n    .fn<() => Promise<never>>()\n    .mockRejectedValue(new Error('Async error message'));\n\n  await asyncMock(); // throws 'Async error message'\n});\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"mockfnmockrejectedvalueoncevalue",children:(0,t.jsx)(n.code,{children:"mockFn.mockRejectedValueOnce(value)"})}),"\n",(0,t.jsx)(n.p,{children:"Shorthand for:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.fn().mockImplementationOnce(() => Promise.reject(value));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Useful together with ",(0,t.jsx)(n.code,{children:".mockResolvedValueOnce()"})," or to reject with different exceptions over multiple async calls:"]}),"\n",(0,t.jsxs)(l.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"tab",children:"test('async test', async () => {\n  const asyncMock = jest\n    .fn()\n    .mockResolvedValueOnce('first call')\n    .mockRejectedValueOnce(new Error('Async error message'));\n\n  await asyncMock(); // 'first call'\n  await asyncMock(); // throws 'Async error message'\n});\n"})})}),(0,t.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import {jest, test} from '@jest/globals';\n\ntest('async test', async () => {\n  const asyncMock = jest\n    .fn<() => Promise<string>>()\n    .mockResolvedValueOnce('first call')\n    .mockRejectedValueOnce(new Error('Async error message'));\n\n  await asyncMock(); // 'first call'\n  await asyncMock(); // throws 'Async error message'\n});\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"mockfnwithimplementationfn-callback",children:(0,t.jsx)(n.code,{children:"mockFn.withImplementation(fn, callback)"})}),"\n",(0,t.jsx)(n.p,{children:"Accepts a function which should be temporarily used as the implementation of the mock while the callback is being executed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"test('test', () => {\n  const mock = jest.fn(() => 'outside callback');\n\n  mock.withImplementation(\n    () => 'inside callback',\n    () => {\n      mock(); // 'inside callback'\n    },\n  );\n\n  mock(); // 'outside callback'\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"mockFn.withImplementation"})," can be used regardless of whether or not the callback is asynchronous (returns a ",(0,t.jsx)(n.code,{children:"thenable"}),"). If the callback is asynchronous a promise will be returned. Awaiting the promise will await the callback and reset the implementation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"test('async test', async () => {\n  const mock = jest.fn(() => 'outside callback');\n\n  // We await this call since the callback is async\n  await mock.withImplementation(\n    () => 'inside callback',\n    async () => {\n      mock(); // 'inside callback'\n    },\n  );\n\n  mock(); // 'outside callback'\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"replaced-properties",children:"Replaced Properties"}),"\n",(0,t.jsx)(n.h3,{id:"replacedpropertyreplacevaluevalue",children:(0,t.jsx)(n.code,{children:"replacedProperty.replaceValue(value)"})}),"\n",(0,t.jsxs)(n.p,{children:["Changes the value of already replaced property. This is useful when you want to replace property and then adjust the value in specific tests. As an alternative, you can call ",(0,t.jsx)(n.a,{href:"/ro/docs/29.4/jest-object#jestreplacepropertyobject-propertykey-value",children:(0,t.jsx)(n.code,{children:"jest.replaceProperty()"})})," multiple times on same property."]}),"\n",(0,t.jsx)(n.h3,{id:"replacedpropertyrestore",children:(0,t.jsx)(n.code,{children:"replacedProperty.restore()"})}),"\n",(0,t.jsx)(n.p,{children:"Restores object's property to the original value."}),"\n",(0,t.jsxs)(n.p,{children:["Beware that ",(0,t.jsx)(n.code,{children:"replacedProperty.restore()"})," only works when the property value was replaced with ",(0,t.jsx)(n.a,{href:"/ro/docs/29.4/jest-object#jestreplacepropertyobject-propertykey-value",children:(0,t.jsx)(n.code,{children:"jest.replaceProperty()"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"configuration#restoremocks-boolean",children:(0,t.jsx)(n.code,{children:"restoreMocks"})})," configuration option is available to restore replaced properties automatically before each test."]}),"\n",(0,t.jsx)(n.h2,{id:"typescript-usage",children:"TypeScript Usage"}),"\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"jestfnimplementation",children:(0,t.jsx)(n.code,{children:"jest.fn(implementation?)"})}),"\n",(0,t.jsxs)(n.p,{children:["Correct mock typings will be inferred if implementation is passed to ",(0,t.jsx)(n.a,{href:"/ro/docs/29.4/jest-object#jestfnimplementation",children:(0,t.jsx)(n.code,{children:"jest.fn()"})}),". There are many use cases where the implementation is omitted. To ensure type safety you may pass a generic type argument (also see the examples above for more reference):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {expect, jest, test} from '@jest/globals';\nimport type add from './add';\nimport calculate from './calc';\n\ntest('calculate calls add', () => {\n  // Create a new mock that can be used in place of `add`.\n  const mockAdd = jest.fn<typeof add>();\n\n  // `.mockImplementation()` now can infer that `a` and `b` are `number`\n  // and that the returned value is a `number`.\n  mockAdd.mockImplementation((a, b) => {\n    // Yes, this mock is still adding two numbers but imagine this\n    // was a complex function we are mocking.\n    return a + b;\n  });\n\n  // `mockAdd` is properly typed and therefore accepted by anything\n  // requiring `add`.\n  calculate(mockAdd, 1, 2);\n\n  expect(mockAdd).toHaveBeenCalledTimes(1);\n  expect(mockAdd).toHaveBeenCalledWith(1, 2);\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"jestmockt",children:(0,t.jsx)(n.code,{children:"jest.Mock<T>"})}),"\n",(0,t.jsxs)(n.p,{children:["Constructs the type of a mock function, e.g. the return type of ",(0,t.jsx)(n.code,{children:"jest.fn()"}),". It can be useful if you have to defined a recursive mock function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {jest} from '@jest/globals';\n\nconst sumRecursively: jest.Mock<(value: number) => number> = jest.fn(value => {\n  if (value === 0) {\n    return 0;\n  } else {\n    return value + fn(value - 1);\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"jestmockedsource",children:(0,t.jsx)(n.code,{children:"jest.Mocked<Source>"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"jest.Mocked<Source>"})," utility type returns the ",(0,t.jsx)(n.code,{children:"Source"})," type wrapped with type definitions of Jest mock function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {expect, jest, test} from '@jest/globals';\nimport type {fetch} from 'node-fetch';\n\njest.mock('node-fetch');\n\nlet mockedFetch: jest.Mocked<typeof fetch>;\n\nafterEach(() => {\n  mockedFetch.mockClear();\n});\n\ntest('makes correct call', () => {\n  mockedFetch = getMockedFetch();\n  // ...\n});\n\ntest('returns correct data', () => {\n  mockedFetch = getMockedFetch();\n  // ...\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Types of classes, functions or objects can be passed as type argument to ",(0,t.jsx)(n.code,{children:"jest.Mocked<Source>"}),". If you prefer to constrain the input type, use: ",(0,t.jsx)(n.code,{children:"jest.MockedClass<Source>"}),", ",(0,t.jsx)(n.code,{children:"jest.MockedFunction<Source>"})," or ",(0,t.jsx)(n.code,{children:"jest.MockedObject<Source>"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"jestreplacedsource",children:(0,t.jsx)(n.code,{children:"jest.Replaced<Source>"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"jest.Replaced<Source>"})," utility type returns the ",(0,t.jsx)(n.code,{children:"Source"})," type wrapped with type definitions of Jest ",(0,t.jsx)(n.a,{href:"#replaced-properties",children:"replaced property"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/utils.ts"',children:"export function isLocalhost(): boolean {\n  return process.env['HOSTNAME'] === 'localhost';\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/__tests__/utils.test.ts"',children:"import {afterEach, expect, it, jest} from '@jest/globals';\nimport {isLocalhost} from '../utils';\n\nlet replacedEnv: jest.Replaced<typeof process.env> | undefined = undefined;\n\nafterEach(() => {\n  replacedEnv?.restore();\n});\n\nit('isLocalhost should detect localhost environment', () => {\n  replacedEnv = jest.replaceProperty(process, 'env', {HOSTNAME: 'localhost'});\n\n  expect(isLocalhost()).toBe(true);\n});\n\nit('isLocalhost should detect non-localhost environment', () => {\n  replacedEnv = jest.replaceProperty(process, 'env', {HOSTNAME: 'example.com'});\n\n  expect(isLocalhost()).toBe(false);\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"jestmockedsource-options",children:(0,t.jsx)(n.code,{children:"jest.mocked(source, options?)"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"mocked()"})," helper method wraps types of the ",(0,t.jsx)(n.code,{children:"source"})," object and its deep nested members with type definitions of Jest mock function. You can pass ",(0,t.jsx)(n.code,{children:"{shallow: true}"})," as the ",(0,t.jsx)(n.code,{children:"options"})," argument to disable the deeply mocked behavior."]}),"\n",(0,t.jsxs)(n.p,{children:["Returns the ",(0,t.jsx)(n.code,{children:"source"})," object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="song.ts"',children:"export const song = {\n  one: {\n    more: {\n      time: (t: number) => {\n        return t;\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="song.test.ts"',children:"import {expect, jest, test} from '@jest/globals';\nimport {song} from './song';\n\njest.mock('./song');\njest.spyOn(console, 'log');\n\nconst mockedSong = jest.mocked(song);\n// or through `jest.Mocked<Source>`\n// const mockedSong = song as jest.Mocked<typeof song>;\n\ntest('deep method is typed correctly', () => {\n  mockedSong.one.more.time.mockReturnValue(12);\n\n  expect(mockedSong.one.more.time(10)).toBe(12);\n  expect(mockedSong.one.more.time.mock.calls).toHaveLength(1);\n});\n\ntest('direct usage', () => {\n  jest.mocked(console.log).mockImplementation(() => {\n    return;\n  });\n\n  console.log('one more time');\n\n  expect(jest.mocked(console.log).mock.calls).toHaveLength(1);\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"jestspiedsource",children:(0,t.jsx)(n.code,{children:"jest.Spied<Source>"})}),"\n",(0,t.jsxs)(n.p,{children:["Constructs the type of a spied class or function (i.e. the return type of ",(0,t.jsx)(n.code,{children:"jest.spyOn()"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="__utils__/setDateNow.ts"',children:"import {jest} from '@jest/globals';\n\nexport function setDateNow(now: number): jest.Spied<typeof Date.now> {\n  return jest.spyOn(Date, 'now').mockReturnValue(now);\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {afterEach, expect, type jest, test} from '@jest/globals';\nimport {setDateNow} from './__utils__/setDateNow';\n\nlet spiedDateNow: jest.Spied<typeof Date.now> | undefined = undefined;\n\nafterEach(() => {\n  spiedDateNow?.mockReset();\n});\n\ntest('renders correctly with a given date', () => {\n  spiedDateNow = setDateNow(1_482_363_367_071);\n  // ...\n\n  expect(spiedDateNow).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Types of a class or function can be passed as type argument to ",(0,t.jsx)(n.code,{children:"jest.Spied<Source>"}),". If you prefer to constrain the input type, use: ",(0,t.jsx)(n.code,{children:"jest.SpiedClass<Source>"})," or ",(0,t.jsx)(n.code,{children:"jest.SpiedFunction<Source>"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"jest.SpiedGetter<Source>"})," or ",(0,t.jsx)(n.code,{children:"jest.SpiedSetter<Source>"})," to create the type of a spied getter or setter respectively."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},52072:(e,n,c)=>{c.d(n,{Ay:()=>a,RM:()=>s});var o=c(62540),t=c(43023);const s=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"The TypeScript examples from this page will only work as documented if you explicitly import Jest APIs:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import {expect, jest, test} from '@jest/globals';\n"})}),(0,o.jsxs)(n.p,{children:["Consult the ",(0,o.jsx)(n.a,{href:"/ro/docs/29.4/getting-started#using-typescript",children:"Getting Started"})," guide for details on how to setup Jest with TypeScript."]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);