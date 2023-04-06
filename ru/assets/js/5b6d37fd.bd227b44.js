"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[78618],{74981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>k,toc:()=>u});var a=n(25773),o=(n(27378),n(35318)),l=n(23930),c=n(39798),s=n(72992),m=n(36391);const r={id:"mock-function-api",title:"Mock Functions"},i=void 0,k={unversionedId:"mock-function-api",id:"version-29.1/mock-function-api",title:"Mock Functions",description:'Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.',source:"@site/versioned_docs/version-29.1/MockFunctionAPI.md",sourceDirName:".",slug:"/mock-function-api",permalink:"/jest/ru/docs/29.1/mock-function-api",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"29.1",lastUpdatedBy:"Jack",lastUpdatedAt:1680744104,formattedLastUpdatedAt:"6 \u0430\u043f\u0440. 2023 \u0433.",frontMatter:{id:"mock-function-api",title:"Mock Functions"},sidebar:"api",previous:{title:"Expect",permalink:"/jest/ru/docs/29.1/expect"},next:{title:"The Jest Object",permalink:"/jest/ru/docs/29.1/jest-object"}},p={},u=[{value:"Methods",id:"methods",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>mockFn.getMockName()</code>",id:"mockfngetmockname",level:3},{value:"<code>mockFn.mock.calls</code>",id:"mockfnmockcalls",level:3},{value:"<code>mockFn.mock.results</code>",id:"mockfnmockresults",level:3},{value:"<code>mockFn.mock.instances</code>",id:"mockfnmockinstances",level:3},{value:"<code>mockFn.mock.contexts</code>",id:"mockfnmockcontexts",level:3},{value:"<code>mockFn.mock.lastCall</code>",id:"mockfnmocklastcall",level:3},{value:"<code>mockFn.mockClear()</code>",id:"mockfnmockclear",level:3},{value:"<code>mockFn.mockReset()</code>",id:"mockfnmockreset",level:3},{value:"<code>mockFn.mockRestore()</code>",id:"mockfnmockrestore",level:3},{value:"<code>mockFn.mockImplementation(fn)</code>",id:"mockfnmockimplementationfn",level:3},{value:"<code>mockFn.mockImplementationOnce(fn)</code>",id:"mockfnmockimplementationoncefn",level:3},{value:"<code>mockFn.mockName(name)</code>",id:"mockfnmocknamename",level:3},{value:"<code>mockFn.mockReturnThis()</code>",id:"mockfnmockreturnthis",level:3},{value:"<code>mockFn.mockReturnValue(value)</code>",id:"mockfnmockreturnvaluevalue",level:3},{value:"<code>mockFn.mockReturnValueOnce(value)</code>",id:"mockfnmockreturnvalueoncevalue",level:3},{value:"<code>mockFn.mockResolvedValue(value)</code>",id:"mockfnmockresolvedvaluevalue",level:3},{value:"<code>mockFn.mockResolvedValueOnce(value)</code>",id:"mockfnmockresolvedvalueoncevalue",level:3},{value:"<code>mockFn.mockRejectedValue(value)</code>",id:"mockfnmockrejectedvaluevalue",level:3},{value:"<code>mockFn.mockRejectedValueOnce(value)</code>",id:"mockfnmockrejectedvalueoncevalue",level:3},{value:"<code>mockFn.withImplementation(fn, callback)</code>",id:"mockfnwithimplementationfn-callback",level:3},{value:"TypeScript Usage",id:"typescript-usage",level:2},{value:"<code>jest.fn(implementation?)</code>",id:"jestfnimplementation",level:3},{value:"<code>jest.Mock&lt;T&gt;</code>",id:"jestmockt",level:3},{value:"<code>jest.Mocked&lt;Source&gt;</code>",id:"jestmockedsource",level:3},{value:"<code>jest.mocked(source, options?)</code>",id:"jestmockedsource-options",level:3}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with ',(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn()"),". If no implementation is given, the mock function will return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," when invoked."),(0,o.kt)(s.ZP,{mdxType:"TypeScriptExamplesNote"}),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)(m.Z,{toc:u.slice(1),mdxType:"TOCInline"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"mockfngetmockname"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.getMockName()")),(0,o.kt)("p",null,"Returns the mock name string set by calling ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmocknamename"},(0,o.kt)("inlineCode",{parentName:"a"},".mockName()")),"."),(0,o.kt)("h3",{id:"mockfnmockcalls"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mock.calls")),(0,o.kt)("p",null,"An array containing the call arguments of all calls that have been made to this mock function. Each item in the array is an array of arguments that were passed during the call."),(0,o.kt)("p",null,"For example: A mock function ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," that has been called twice, with the arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"f('arg1', 'arg2')"),", and then with the arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"f('arg3', 'arg4')"),", would have a ",(0,o.kt)("inlineCode",{parentName:"p"},"mock.calls")," array that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"[\n  ['arg1', 'arg2'],\n  ['arg3', 'arg4'],\n];\n")),(0,o.kt)("h3",{id:"mockfnmockresults"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mock.results")),(0,o.kt)("p",null,"An array containing the results of all calls that have been made to this mock function. Each entry in this array is an object containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," property, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property. ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," will be one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'return'")," - Indicates that the call completed by returning normally."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'throw'")," - Indicates that the call completed by throwing a value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'incomplete'")," - Indicates that the call has not yet completed. This occurs if you test the result from within the mock function itself, or from within a function that was called by the mock.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property contains the value that was thrown or returned. ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is undefined when ",(0,o.kt)("inlineCode",{parentName:"p"},"type === 'incomplete'"),"."),(0,o.kt)("p",null,"For example: A mock function ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," that has been called three times, returning ",(0,o.kt)("inlineCode",{parentName:"p"},"'result1'"),", throwing an error, and then returning ",(0,o.kt)("inlineCode",{parentName:"p"},"'result2'"),", would have a ",(0,o.kt)("inlineCode",{parentName:"p"},"mock.results")," array that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"[\n  {\n    type: 'return',\n    value: 'result1',\n  },\n  {\n    type: 'throw',\n    value: {\n      /* Error instance */\n    },\n  },\n  {\n    type: 'return',\n    value: 'result2',\n  },\n];\n")),(0,o.kt)("h3",{id:"mockfnmockinstances"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mock.instances")),(0,o.kt)("p",null,"An array that contains all the object instances that have been instantiated from this mock function using ",(0,o.kt)("inlineCode",{parentName:"p"},"new"),"."),(0,o.kt)("p",null,"For example: A mock function that has been instantiated twice would have the following ",(0,o.kt)("inlineCode",{parentName:"p"},"mock.instances")," array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mockFn = jest.fn();\n\nconst a = new mockFn();\nconst b = new mockFn();\n\nmockFn.mock.instances[0] === a; // true\nmockFn.mock.instances[1] === b; // true\n")),(0,o.kt)("h3",{id:"mockfnmockcontexts"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mock.contexts")),(0,o.kt)("p",null,"An array that contains the contexts for all calls of the mock function."),(0,o.kt)("p",null,"A context is the ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," value that a function receives when called. The context can be set using ",(0,o.kt)("inlineCode",{parentName:"p"},"Function.prototype.bind"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Function.prototype.call")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Function.prototype.apply"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mockFn = jest.fn();\n\nconst boundMockFn = mockFn.bind(thisContext0);\nboundMockFn('a', 'b');\nmockFn.call(thisContext1, 'a', 'b');\nmockFn.apply(thisContext2, ['a', 'b']);\n\nmockFn.mock.contexts[0] === thisContext0; // true\nmockFn.mock.contexts[1] === thisContext1; // true\nmockFn.mock.contexts[2] === thisContext2; // true\n")),(0,o.kt)("h3",{id:"mockfnmocklastcall"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mock.lastCall")),(0,o.kt)("p",null,"An array containing the call arguments of the last call that was made to this mock function. If the function was not called, it will return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"For example: A mock function ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," that has been called twice, with the arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"f('arg1', 'arg2')"),", and then with the arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"f('arg3', 'arg4')"),", would have a ",(0,o.kt)("inlineCode",{parentName:"p"},"mock.lastCall")," array that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"['arg3', 'arg4'];\n")),(0,o.kt)("h3",{id:"mockfnmockclear"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockClear()")),(0,o.kt)("p",null,"Clears all information stored in the ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockcalls"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mock.calls")),", ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockinstances"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mock.instances")),", ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockcontexts"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mock.contexts"))," and ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockresults"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mock.results"))," arrays. Often this is useful when you want to clean up a mocks usage data between two assertions."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"configuration#clearmocks-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"clearMocks"))," configuration option is available to clear mocks automatically before each tests."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Beware that ",(0,o.kt)("inlineCode",{parentName:"p"},"mockFn.mockClear()")," will replace ",(0,o.kt)("inlineCode",{parentName:"p"},"mockFn.mock"),", not just reset the values of its properties! You should, therefore, avoid assigning ",(0,o.kt)("inlineCode",{parentName:"p"},"mockFn.mock")," to other variables, temporary or not, to make sure you don't access stale data.")),(0,o.kt)("h3",{id:"mockfnmockreset"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockReset()")),(0,o.kt)("p",null,"Does everything that ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockclear"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mockClear()"))," does, and also removes any mocked return values or implementations."),(0,o.kt)("p",null,"This is useful when you want to completely reset a ",(0,o.kt)("em",{parentName:"p"},"mock")," back to its initial state."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"configuration#resetmocks-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"resetMocks"))," configuration option is available to reset mocks automatically before each test."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Resetting a mock created with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.spyOn()")," will result in a function with no return value.")),(0,o.kt)("h3",{id:"mockfnmockrestore"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockRestore()")),(0,o.kt)("p",null,"Does everything that ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockreset"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mockReset()"))," does, and also restores the original (non-mocked) implementation."),(0,o.kt)("p",null,"This is useful when you want to mock functions in certain test cases and restore the original implementation in others."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"configuration#restoremocks-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"restoreMocks"))," configuration option is available to restore mocks automatically before each test."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"mockFn.mockRestore()")," only works when the mock was created with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.spyOn()"),". Thus you have to take care of restoration yourself when manually assigning ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn()"),".")),(0,o.kt)("h3",{id:"mockfnmockimplementationfn"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockImplementation(fn)")),(0,o.kt)("p",null,"Accepts a function that should be used as the implementation of the mock. The mock itself will still record all calls that go into and instances that come from itself \u2013 the only difference is that the implementation will also be executed when the mock is called."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn(implementation)")," is a shorthand for ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn().mockImplementation(implementation)"),".")),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const mockFn = jest.fn(scalar => 42 + scalar);\n\nmockFn(0); // 42\nmockFn(1); // 43\n\nmockFn.mockImplementation(scalar => 36 + scalar);\n\nmockFn(2); // 38\nmockFn(3); // 39\n"))),(0,o.kt)(c.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import {jest} from '@jest/globals';\n\nconst mockFn = jest.fn((scalar: number) => 42 + scalar);\n\nmockFn(0); // 42\nmockFn(1); // 43\n\nmockFn.mockImplementation(scalar => 36 + scalar);\n\nmockFn(2); // 38\nmockFn(3); // 39\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".mockImplementation()")," can also be used to mock class constructors:"),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'tab={"span":2} title="SomeClass.js"',tab:'{"span":2}',title:'"SomeClass.js"'},"module.exports = class SomeClass {\n  method(a, b) {}\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeClass.test.js"',title:'"SomeClass.test.js"'},"const SomeClass = require('./SomeClass');\n\njest.mock('./SomeClass'); // this happens automatically with automocking\n\nconst mockMethod = jest.fn();\nSomeClass.mockImplementation(() => {\n  return {\n    method: mockMethod,\n  };\n});\n\nconst some = new SomeClass();\nsome.method('a', 'b');\n\nconsole.log('Calls to method: ', mockMethod.mock.calls);\n"))),(0,o.kt)(c.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'tab={"span":2} title="SomeClass.ts"',tab:'{"span":2}',title:'"SomeClass.ts"'},"export class SomeClass {\n  method(a: string, b: string): void {}\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="SomeClass.test.ts"',title:'"SomeClass.test.ts"'},"import {jest} from '@jest/globals';\nimport {SomeClass} from './SomeClass';\n\njest.mock('./SomeClass'); // this happens automatically with automocking\n\nconst mockMethod = jest.fn<(a: string, b: string) => void>();\njest.mocked(SomeClass).mockImplementation(() => {\n  return {\n    method: mockMethod,\n  };\n});\n\nconst some = new SomeClass();\nsome.method('a', 'b');\n\nconsole.log('Calls to method: ', mockMethod.mock.calls);\n")))),(0,o.kt)("h3",{id:"mockfnmockimplementationoncefn"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockImplementationOnce(fn)")),(0,o.kt)("p",null,"Accepts a function that will be used as an implementation of the mock for one call to the mocked function. Can be chained so that multiple function calls produce different results."),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const mockFn = jest\n  .fn()\n  .mockImplementationOnce(cb => cb(null, true))\n  .mockImplementationOnce(cb => cb(null, false));\n\nmockFn((err, val) => console.log(val)); // true\nmockFn((err, val) => console.log(val)); // false\n"))),(0,o.kt)(c.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import {jest} from '@jest/globals';\n\nconst mockFn = jest\n  .fn<(cb: (a: null, b: boolean) => void) => void>()\n  .mockImplementationOnce(cb => cb(null, true))\n  .mockImplementationOnce(cb => cb(null, false));\n\nmockFn((err, val) => console.log(val)); // true\nmockFn((err, val) => console.log(val)); // false\n")))),(0,o.kt)("p",null,"When the mocked function runs out of implementations defined with ",(0,o.kt)("inlineCode",{parentName:"p"},".mockImplementationOnce()"),", it will execute the default implementation set with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn(() => defaultValue)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".mockImplementation(() => defaultValue)")," if they were called:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mockFn = jest\n  .fn(() => 'default')\n  .mockImplementationOnce(() => 'first call')\n  .mockImplementationOnce(() => 'second call');\n\nmockFn(); // 'first call'\nmockFn(); // 'second call'\nmockFn(); // 'default'\nmockFn(); // 'default'\n")),(0,o.kt)("h3",{id:"mockfnmocknamename"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockName(name)")),(0,o.kt)("p",null,"Accepts a string to use in test result output in place of ",(0,o.kt)("inlineCode",{parentName:"p"},"'jest.fn()'")," to indicate which mock function is being referenced."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mockFn = jest.fn().mockName('mockedFunction');\n\n// mockFn();\nexpect(mockFn).toHaveBeenCalled();\n")),(0,o.kt)("p",null,"Will result in this error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"expect(mockedFunction).toHaveBeenCalled()\n\nExpected number of calls: >= 1\nReceived number of calls:    0\n")),(0,o.kt)("h3",{id:"mockfnmockreturnthis"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockReturnThis()")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn(function () {\n  return this;\n});\n")),(0,o.kt)("h3",{id:"mockfnmockreturnvaluevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockReturnValue(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementation(() => value);\n")),(0,o.kt)("p",null,"Accepts a value that will be returned whenever the mock function is called."),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const mock = jest.fn();\n\nmock.mockReturnValue(42);\nmock(); // 42\n\nmock.mockReturnValue(43);\nmock(); // 43\n"))),(0,o.kt)(c.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import {jest} from '@jest/globals';\n\nconst mock = jest.fn<() => number>();\n\nmock.mockReturnValue(42);\nmock(); // 42\n\nmock.mockReturnValue(43);\nmock(); // 43\n")))),(0,o.kt)("h3",{id:"mockfnmockreturnvalueoncevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockReturnValueOnce(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementationOnce(() => value);\n")),(0,o.kt)("p",null,"Accepts a value that will be returned for one call to the mock function. Can be chained so that successive calls to the mock function return different values. When there are no more ",(0,o.kt)("inlineCode",{parentName:"p"},"mockReturnValueOnce")," values to use, calls will return a value specified by ",(0,o.kt)("inlineCode",{parentName:"p"},"mockReturnValue"),"."),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const mockFn = jest\n  .fn()\n  .mockReturnValue('default')\n  .mockReturnValueOnce('first call')\n  .mockReturnValueOnce('second call');\n\nmockFn(); // 'first call'\nmockFn(); // 'second call'\nmockFn(); // 'default'\nmockFn(); // 'default'\n"))),(0,o.kt)(c.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import {jest} from '@jest/globals';\n\nconst mockFn = jest\n  .fn<() => string>()\n  .mockReturnValue('default')\n  .mockReturnValueOnce('first call')\n  .mockReturnValueOnce('second call');\n\nmockFn(); // 'first call'\nmockFn(); // 'second call'\nmockFn(); // 'default'\nmockFn(); // 'default'\n")))),(0,o.kt)("h3",{id:"mockfnmockresolvedvaluevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockResolvedValue(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementation(() => Promise.resolve(value));\n")),(0,o.kt)("p",null,"Useful to mock async functions in async tests:"),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"test('async test', async () => {\n  const asyncMock = jest.fn().mockResolvedValue(43);\n\n  await asyncMock(); // 43\n});\n"))),(0,o.kt)(c.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import {jest, test} from '@jest/globals';\n\ntest('async test', async () => {\n  const asyncMock = jest.fn<() => Promise<number>>().mockResolvedValue(43);\n\n  await asyncMock(); // 43\n});\n")))),(0,o.kt)("h3",{id:"mockfnmockresolvedvalueoncevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockResolvedValueOnce(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementationOnce(() => Promise.resolve(value));\n")),(0,o.kt)("p",null,"Useful to resolve different values over multiple async calls:"),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"test('async test', async () => {\n  const asyncMock = jest\n    .fn()\n    .mockResolvedValue('default')\n    .mockResolvedValueOnce('first call')\n    .mockResolvedValueOnce('second call');\n\n  await asyncMock(); // 'first call'\n  await asyncMock(); // 'second call'\n  await asyncMock(); // 'default'\n  await asyncMock(); // 'default'\n});\n"))),(0,o.kt)(c.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import {jest, test} from '@jest/globals';\n\ntest('async test', async () => {\n  const asyncMock = jest\n    .fn<() => Promise<string>>()\n    .mockResolvedValue('default')\n    .mockResolvedValueOnce('first call')\n    .mockResolvedValueOnce('second call');\n\n  await asyncMock(); // 'first call'\n  await asyncMock(); // 'second call'\n  await asyncMock(); // 'default'\n  await asyncMock(); // 'default'\n});\n")))),(0,o.kt)("h3",{id:"mockfnmockrejectedvaluevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockRejectedValue(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementation(() => Promise.reject(value));\n")),(0,o.kt)("p",null,"Useful to create async mock functions that will always reject:"),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"test('async test', async () => {\n  const asyncMock = jest\n    .fn()\n    .mockRejectedValue(new Error('Async error message'));\n\n  await asyncMock(); // throws 'Async error message'\n});\n"))),(0,o.kt)(c.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import {jest, test} from '@jest/globals';\n\ntest('async test', async () => {\n  const asyncMock = jest\n    .fn<() => Promise<never>>()\n    .mockRejectedValue(new Error('Async error message'));\n\n  await asyncMock(); // throws 'Async error message'\n});\n")))),(0,o.kt)("h3",{id:"mockfnmockrejectedvalueoncevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockRejectedValueOnce(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementationOnce(() => Promise.reject(value));\n")),(0,o.kt)("p",null,"Useful together with ",(0,o.kt)("inlineCode",{parentName:"p"},".mockResolvedValueOnce()")," or to reject with different exceptions over multiple async calls:"),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"test('async test', async () => {\n  const asyncMock = jest\n    .fn()\n    .mockResolvedValueOnce('first call')\n    .mockRejectedValueOnce(new Error('Async error message'));\n\n  await asyncMock(); // 'first call'\n  await asyncMock(); // throws 'Async error message'\n});\n"))),(0,o.kt)(c.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import {jest, test} from '@jest/globals';\n\ntest('async test', async () => {\n  const asyncMock = jest\n    .fn<() => Promise<string>>()\n    .mockResolvedValueOnce('first call')\n    .mockRejectedValueOnce(new Error('Async error message'));\n\n  await asyncMock(); // 'first call'\n  await asyncMock(); // throws 'Async error message'\n});\n")))),(0,o.kt)("h3",{id:"mockfnwithimplementationfn-callback"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.withImplementation(fn, callback)")),(0,o.kt)("p",null,"Accepts a function which should be temporarily used as the implementation of the mock while the callback is being executed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('test', () => {\n  const mock = jest.fn(() => 'outside callback');\n\n  mock.withImplementation(\n    () => 'inside callback',\n    () => {\n      mock(); // 'inside callback'\n    },\n  );\n\n  mock(); // 'outside callback'\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mockFn.withImplementation")," can be used regardless of whether or not the callback is asynchronous (returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"thenable"),"). If the callback is asynchronous a promise will be returned. Awaiting the promise will await the callback and reset the implementation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('async test', async () => {\n  const mock = jest.fn(() => 'outside callback');\n\n  // We await this call since the callback is async\n  await mock.withImplementation(\n    () => 'inside callback',\n    async () => {\n      mock(); // 'inside callback'\n    },\n  );\n\n  mock(); // 'outside callback'\n});\n")),(0,o.kt)("h2",{id:"typescript-usage"},"TypeScript Usage"),(0,o.kt)(s.ZP,{mdxType:"TypeScriptExamplesNote"}),(0,o.kt)("h3",{id:"jestfnimplementation"},(0,o.kt)("inlineCode",{parentName:"h3"},"jest.fn(implementation?)")),(0,o.kt)("p",null,"Correct mock typings will be inferred if implementation is passed to ",(0,o.kt)("a",{parentName:"p",href:"/jest/ru/docs/29.1/jest-object#jestfnimplementation"},(0,o.kt)("inlineCode",{parentName:"a"},"jest.fn()")),". There are many use cases where the implementation is omitted. To ensure type safety you may pass a generic type argument (also see the examples above for more reference):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {expect, jest, test} from '@jest/globals';\nimport type add from './add';\nimport calculate from './calc';\n\ntest('calculate calls add', () => {\n  // Create a new mock that can be used in place of `add`.\n  const mockAdd = jest.fn<typeof add>();\n\n  // `.mockImplementation()` now can infer that `a` and `b` are `number`\n  // and that the returned value is a `number`.\n  mockAdd.mockImplementation((a, b) => {\n    // Yes, this mock is still adding two numbers but imagine this\n    // was a complex function we are mocking.\n    return a + b;\n  });\n\n  // `mockAdd` is properly typed and therefore accepted by anything\n  // requiring `add`.\n  calculate(mockAdd, 1, 2);\n\n  expect(mockAdd).toHaveBeenCalledTimes(1);\n  expect(mockAdd).toHaveBeenCalledWith(1, 2);\n});\n")),(0,o.kt)("h3",{id:"jestmockt"},(0,o.kt)("inlineCode",{parentName:"h3"},"jest.Mock<T>")),(0,o.kt)("p",null,"Constructs the type of a mock function, e.g. the return type of ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn()"),". It can be useful if you have to defined a recursive mock function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {jest} from '@jest/globals';\n\nconst sumRecursively: jest.Mock<(value: number) => number> = jest.fn(value => {\n  if (value === 0) {\n    return 0;\n  } else {\n    return value + fn(value - 1);\n  }\n});\n")),(0,o.kt)("h3",{id:"jestmockedsource"},(0,o.kt)("inlineCode",{parentName:"h3"},"jest.Mocked<Source>")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.Mocked<Source>")," utility type returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"Source")," type wrapped with type definitions of Jest mock function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {expect, jest, test} from '@jest/globals';\nimport type {fetch} from 'node-fetch';\n\njest.mock('node-fetch');\n\nlet mockedFetch: jest.Mocked<typeof fetch>;\n\nafterEach(() => {\n  mockedFetch.mockClear();\n});\n\ntest('makes correct call', () => {\n  mockedFetch = getMockedFetch();\n  // ...\n});\n\ntest('returns correct data', () => {\n  mockedFetch = getMockedFetch();\n  // ...\n});\n")),(0,o.kt)("p",null,"Types of classes, functions or objects can be passed as type argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.Mocked<Source>"),". If you prefer to constrain the input type, use: ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.MockedClass<Source>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.MockedFunction<Source>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.MockedObject<Source>"),"."),(0,o.kt)("h3",{id:"jestmockedsource-options"},(0,o.kt)("inlineCode",{parentName:"h3"},"jest.mocked(source, options?)")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mocked()")," helper method wraps types of the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," object and its deep nested members with type definitions of Jest mock function. You can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"{shallow: true}")," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," argument to disable the deeply mocked behavior."),(0,o.kt)("p",null,"Returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="song.ts"',title:'"song.ts"'},"export const song = {\n  one: {\n    more: {\n      time: (t: number) => {\n        return t;\n      },\n    },\n  },\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="song.test.ts"',title:'"song.test.ts"'},"import {expect, jest, test} from '@jest/globals';\nimport {song} from './song';\n\njest.mock('./song');\njest.spyOn(console, 'log');\n\nconst mockedSong = jest.mocked(song);\n// or through `jest.Mocked<Source>`\n// const mockedSong = song as jest.Mocked<typeof song>;\n\ntest('deep method is typed correctly', () => {\n  mockedSong.one.more.time.mockReturnValue(12);\n\n  expect(mockedSong.one.more.time(10)).toBe(12);\n  expect(mockedSong.one.more.time.mock.calls).toHaveLength(1);\n});\n\ntest('direct usage', () => {\n  jest.mocked(console.log).mockImplementation(() => {\n    return;\n  });\n\n  console.log('one more time');\n\n  expect(jest.mocked(console.log).mock.calls).toHaveLength(1);\n});\n")))}h.isMDXComponent=!0},72992:(e,t,n)=>{n.d(t,{ZP:()=>c});var a=n(25773),o=(n(27378),n(35318));const l={toc:[]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The TypeScript examples from this page will only work as documented if you explicitly import Jest APIs:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {expect, jest, test} from '@jest/globals';\n")),(0,o.kt)("p",{parentName:"admonition"},"Consult the ",(0,o.kt)("a",{parentName:"p",href:"/jest/ru/docs/29.1/getting-started#using-typescript"},"Getting Started")," guide for details on how to setup Jest with TypeScript.")))}c.isMDXComponent=!0}}]);