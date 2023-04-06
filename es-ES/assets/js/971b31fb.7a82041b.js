"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[33032],{35318:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var a=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),k=i(t),d=o,p=k["".concat(s,".").concat(d)]||k[d]||u[d]||l;return t?a.createElement(p,c(c({ref:n},m),{},{components:t})):a.createElement(p,c({ref:n},m))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,c=new Array(l);c[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[k]="string"==typeof e?e:o,c[1]=r;for(var i=2;i<l;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36391:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(27378),o=t(36033);const l="tableOfContentsInline_pY9K";function c(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:c}=e;return a.createElement("div",{className:l},a.createElement(o.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:c,className:"table-of-contents",linkClassName:null}))}},36033:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(25773),o=t(27378),l=t(20624);function c(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):a.push(o)})),a}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function i(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function k(e){const n=(0,o.useRef)(void 0),t=m();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:c}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let o=n;o<=t;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:c}),s=i(r,{anchorTopOffset:t.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===m)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?o.createElement("ul",{className:l?void 0:t},n.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const d=o.memo(u);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:u,...p}=e;const f=(0,l.L)(),h=m??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,y=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>r({toc:c(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:h,maxHeadingLevel:v});return k((0,o.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:v}}),[s,i,h,v])),o.createElement(d,(0,a.Z)({toc:y,className:t,linkClassName:s},p))}},91104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var a=t(25773),o=(t(27378),t(35318)),l=t(36391);const c={id:"mock-function-api",title:"Mock Functions"},r=void 0,s={unversionedId:"mock-function-api",id:"version-27.x/mock-function-api",title:"Mock Functions",description:'Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.',source:"@site/versioned_docs/version-27.x/MockFunctionAPI.md",sourceDirName:".",slug:"/mock-function-api",permalink:"/jest/es-ES/docs/27.x/mock-function-api",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"27.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680744134,formattedLastUpdatedAt:"6 abr 2023",frontMatter:{id:"mock-function-api",title:"Mock Functions"},sidebar:"api",previous:{title:"Expect",permalink:"/jest/es-ES/docs/27.x/expect"},next:{title:"The Jest Object",permalink:"/jest/es-ES/docs/27.x/jest-object"}},i={},m=[{value:"Methods",id:"methods",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>mockFn.getMockName()</code>",id:"mockfngetmockname",level:3},{value:"<code>mockFn.mock.calls</code>",id:"mockfnmockcalls",level:3},{value:"<code>mockFn.mock.results</code>",id:"mockfnmockresults",level:3},{value:"<code>mockFn.mock.instances</code>",id:"mockfnmockinstances",level:3},{value:"<code>mockFn.mock.lastCall</code>",id:"mockfnmocklastcall",level:3},{value:"<code>mockFn.mockClear()</code>",id:"mockfnmockclear",level:3},{value:"<code>mockFn.mockReset()</code>",id:"mockfnmockreset",level:3},{value:"<code>mockFn.mockRestore()</code>",id:"mockfnmockrestore",level:3},{value:"<code>mockFn.mockImplementation(fn)</code>",id:"mockfnmockimplementationfn",level:3},{value:"<code>mockFn.mockImplementationOnce(fn)</code>",id:"mockfnmockimplementationoncefn",level:3},{value:"<code>mockFn.mockName(name)</code>",id:"mockfnmocknamename",level:3},{value:"<code>mockFn.mockReturnThis()</code>",id:"mockfnmockreturnthis",level:3},{value:"<code>mockFn.mockReturnValue(value)</code>",id:"mockfnmockreturnvaluevalue",level:3},{value:"<code>mockFn.mockReturnValueOnce(value)</code>",id:"mockfnmockreturnvalueoncevalue",level:3},{value:"<code>mockFn.mockResolvedValue(value)</code>",id:"mockfnmockresolvedvaluevalue",level:3},{value:"<code>mockFn.mockResolvedValueOnce(value)</code>",id:"mockfnmockresolvedvalueoncevalue",level:3},{value:"<code>mockFn.mockRejectedValue(value)</code>",id:"mockfnmockrejectedvaluevalue",level:3},{value:"<code>mockFn.mockRejectedValueOnce(value)</code>",id:"mockfnmockrejectedvalueoncevalue",level:3},{value:"TypeScript",id:"typescript",level:2},{value:"<code>jest.MockedFunction</code>",id:"jestmockedfunction",level:3},{value:"<code>jest.MockedClass</code>",id:"jestmockedclass",level:3}],k={toc:m};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with ',(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn()"),". If no implementation is given, the mock function will return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," when invoked."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)(l.Z,{toc:m.slice(1),mdxType:"TOCInline"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"mockfngetmockname"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.getMockName()")),(0,o.kt)("p",null,"Returns the mock name string set by calling ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmocknamename"},(0,o.kt)("inlineCode",{parentName:"a"},".mockName()")),"."),(0,o.kt)("h3",{id:"mockfnmockcalls"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mock.calls")),(0,o.kt)("p",null,"An array containing the call arguments of all calls that have been made to this mock function. Each item in the array is an array of arguments that were passed during the call."),(0,o.kt)("p",null,"For example: A mock function ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," that has been called twice, with the arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"f('arg1', 'arg2')"),", and then with the arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"f('arg3', 'arg4')"),", would have a ",(0,o.kt)("inlineCode",{parentName:"p"},"mock.calls")," array that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"[\n  ['arg1', 'arg2'],\n  ['arg3', 'arg4'],\n];\n")),(0,o.kt)("h3",{id:"mockfnmockresults"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mock.results")),(0,o.kt)("p",null,"An array containing the results of all calls that have been made to this mock function. Each entry in this array is an object containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," property, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property. ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," will be one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'return'")," - Indicates that the call completed by returning normally."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'throw'")," - Indicates that the call completed by throwing a value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'incomplete'")," - Indicates that the call has not yet completed. This occurs if you test the result from within the mock function itself, or from within a function that was called by the mock.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property contains the value that was thrown or returned. ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is undefined when ",(0,o.kt)("inlineCode",{parentName:"p"},"type === 'incomplete'"),"."),(0,o.kt)("p",null,"For example: A mock function ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," that has been called three times, returning ",(0,o.kt)("inlineCode",{parentName:"p"},"'result1'"),", throwing an error, and then returning ",(0,o.kt)("inlineCode",{parentName:"p"},"'result2'"),", would have a ",(0,o.kt)("inlineCode",{parentName:"p"},"mock.results")," array that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"[\n  {\n    type: 'return',\n    value: 'result1',\n  },\n  {\n    type: 'throw',\n    value: {\n      /* Error instance */\n    },\n  },\n  {\n    type: 'return',\n    value: 'result2',\n  },\n];\n")),(0,o.kt)("h3",{id:"mockfnmockinstances"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mock.instances")),(0,o.kt)("p",null,"An array that contains all the object instances that have been instantiated from this mock function using ",(0,o.kt)("inlineCode",{parentName:"p"},"new"),"."),(0,o.kt)("p",null,"For example: A mock function that has been instantiated twice would have the following ",(0,o.kt)("inlineCode",{parentName:"p"},"mock.instances")," array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mockFn = jest.fn();\n\nconst a = new mockFn();\nconst b = new mockFn();\n\nmockFn.mock.instances[0] === a; // true\nmockFn.mock.instances[1] === b; // true\n")),(0,o.kt)("h3",{id:"mockfnmocklastcall"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mock.lastCall")),(0,o.kt)("p",null,"An array containing the call arguments of the last call that was made to this mock function. If the function was not called, it will return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"For example: A mock function ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," that has been called twice, with the arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"f('arg1', 'arg2')"),", and then with the arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"f('arg3', 'arg4')"),", would have a ",(0,o.kt)("inlineCode",{parentName:"p"},"mock.lastCall")," array that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"['arg3', 'arg4'];\n")),(0,o.kt)("h3",{id:"mockfnmockclear"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockClear()")),(0,o.kt)("p",null,"Clears all information stored in the ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockcalls"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mock.calls")),", ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockinstances"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mock.instances"))," and ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockresults"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mock.results"))," arrays. Often this is useful when you want to clean up a mocks usage data between two assertions."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"configuration#clearmocks-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"clearMocks"))," configuration option is available to clear mocks automatically before each tests."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Beware that ",(0,o.kt)("inlineCode",{parentName:"p"},"mockClear")," will replace ",(0,o.kt)("inlineCode",{parentName:"p"},"mockFn.mock"),", not just these three properties! You should, therefore, avoid assigning ",(0,o.kt)("inlineCode",{parentName:"p"},"mockFn.mock")," to other variables, temporary or not, to make sure you don't access stale data.")),(0,o.kt)("h3",{id:"mockfnmockreset"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockReset()")),(0,o.kt)("p",null,"Does everything that ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockclear"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mockClear()"))," does, and also removes any mocked return values or implementations."),(0,o.kt)("p",null,"This is useful when you want to completely reset a ",(0,o.kt)("em",{parentName:"p"},"mock")," back to its initial state."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"configuration#resetmocks-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"resetMocks"))," configuration option is available to reset mocks automatically before each test."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Resetting a mock created with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.spyOn()")," will result in a function with no return value.")),(0,o.kt)("h3",{id:"mockfnmockrestore"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockRestore()")),(0,o.kt)("p",null,"Does everything that ",(0,o.kt)("a",{parentName:"p",href:"#mockfnmockreset"},(0,o.kt)("inlineCode",{parentName:"a"},"mockFn.mockReset()"))," does, and also restores the original (non-mocked) implementation."),(0,o.kt)("p",null,"This is useful when you want to mock functions in certain test cases and restore the original implementation in others."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"configuration#restoremocks-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"restoreMocks"))," configuration option is available to restore mocks automatically before each test."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"mockFn.mockRestore")," only works when the mock was created with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.spyOn"),". Thus you have to take care of restoration yourself when manually assigning ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn()"),".")),(0,o.kt)("h3",{id:"mockfnmockimplementationfn"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockImplementation(fn)")),(0,o.kt)("p",null,"Accepts a function that should be used as the implementation of the mock. The mock itself will still record all calls that go into and instances that come from itself \u2013 the only difference is that the implementation will also be executed when the mock is called."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn(implementation)")," is a shorthand for ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn().mockImplementation(implementation)"),".")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mockFn = jest.fn().mockImplementation(scalar => 42 + scalar);\n// or: jest.fn(scalar => 42 + scalar);\n\nconst a = mockFn(0);\nconst b = mockFn(1);\n\na === 42; // true\nb === 43; // true\n\nmockFn.mock.calls[0][0] === 0; // true\nmockFn.mock.calls[1][0] === 1; // true\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mockImplementation")," can also be used to mock class constructors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeClass.js"',title:'"SomeClass.js"'},"module.exports = class SomeClass {\n  m(a, b) {}\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="OtherModule.test.js"',title:'"OtherModule.test.js"'},"jest.mock('./SomeClass'); // this happens automatically with automocking\nconst SomeClass = require('./SomeClass');\nconst mMock = jest.fn();\nSomeClass.mockImplementation(() => {\n  return {\n    m: mMock,\n  };\n});\n\nconst some = new SomeClass();\nsome.m('a', 'b');\nconsole.log('Calls to m: ', mMock.mock.calls);\n")),(0,o.kt)("h3",{id:"mockfnmockimplementationoncefn"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockImplementationOnce(fn)")),(0,o.kt)("p",null,"Accepts a function that will be used as an implementation of the mock for one call to the mocked function. Can be chained so that multiple function calls produce different results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const myMockFn = jest\n  .fn()\n  .mockImplementationOnce(cb => cb(null, true))\n  .mockImplementationOnce(cb => cb(null, false));\n\nmyMockFn((err, val) => console.log(val)); // true\n\nmyMockFn((err, val) => console.log(val)); // false\n")),(0,o.kt)("p",null,"When the mocked function runs out of implementations defined with mockImplementationOnce, it will execute the default implementation set with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn(() => defaultValue)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".mockImplementation(() => defaultValue)")," if they were called:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const myMockFn = jest\n  .fn(() => 'default')\n  .mockImplementationOnce(() => 'first call')\n  .mockImplementationOnce(() => 'second call');\n\n// 'first call', 'second call', 'default', 'default'\nconsole.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());\n")),(0,o.kt)("h3",{id:"mockfnmocknamename"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockName(name)")),(0,o.kt)("p",null,"Accepts a string to use in test result output in place of ",(0,o.kt)("inlineCode",{parentName:"p"},"'jest.fn()'")," to indicate which mock function is being referenced."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mockFn = jest.fn().mockName('mockedFunction');\n// mockFn();\nexpect(mockFn).toHaveBeenCalled();\n")),(0,o.kt)("p",null,"Will result in this error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"expect(mockedFunction).toHaveBeenCalled()\n\nExpected number of calls: >= 1\nReceived number of calls:    0\n")),(0,o.kt)("h3",{id:"mockfnmockreturnthis"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockReturnThis()")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn(function () {\n  return this;\n});\n")),(0,o.kt)("h3",{id:"mockfnmockreturnvaluevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockReturnValue(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementation(() => value);\n")),(0,o.kt)("p",null,"Accepts a value that will be returned whenever the mock function is called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mock = jest.fn();\nmock.mockReturnValue(42);\nmock(); // 42\nmock.mockReturnValue(43);\nmock(); // 43\n")),(0,o.kt)("h3",{id:"mockfnmockreturnvalueoncevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockReturnValueOnce(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementationOnce(() => value);\n")),(0,o.kt)("p",null,"Accepts a value that will be returned for one call to the mock function. Can be chained so that successive calls to the mock function return different values. When there are no more ",(0,o.kt)("inlineCode",{parentName:"p"},"mockReturnValueOnce")," values to use, calls will return a value specified by ",(0,o.kt)("inlineCode",{parentName:"p"},"mockReturnValue"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const myMockFn = jest\n  .fn()\n  .mockReturnValue('default')\n  .mockReturnValueOnce('first call')\n  .mockReturnValueOnce('second call');\n\n// 'first call', 'second call', 'default', 'default'\nconsole.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());\n")),(0,o.kt)("h3",{id:"mockfnmockresolvedvaluevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockResolvedValue(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementation(() => Promise.resolve(value));\n")),(0,o.kt)("p",null,"Useful to mock async functions in async tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('async test', async () => {\n  const asyncMock = jest.fn().mockResolvedValue(43);\n\n  await asyncMock(); // 43\n});\n")),(0,o.kt)("h3",{id:"mockfnmockresolvedvalueoncevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockResolvedValueOnce(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementationOnce(() => Promise.resolve(value));\n")),(0,o.kt)("p",null,"Useful to resolve different values over multiple async calls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('async test', async () => {\n  const asyncMock = jest\n    .fn()\n    .mockResolvedValue('default')\n    .mockResolvedValueOnce('first call')\n    .mockResolvedValueOnce('second call');\n\n  await asyncMock(); // first call\n  await asyncMock(); // second call\n  await asyncMock(); // default\n  await asyncMock(); // default\n});\n")),(0,o.kt)("h3",{id:"mockfnmockrejectedvaluevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockRejectedValue(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementation(() => Promise.reject(value));\n")),(0,o.kt)("p",null,"Useful to create async mock functions that will always reject:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('async test', async () => {\n  const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));\n\n  await asyncMock(); // throws \"Async error\"\n});\n")),(0,o.kt)("h3",{id:"mockfnmockrejectedvalueoncevalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"mockFn.mockRejectedValueOnce(value)")),(0,o.kt)("p",null,"Shorthand for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.fn().mockImplementationOnce(() => Promise.reject(value));\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('async test', async () => {\n  const asyncMock = jest\n    .fn()\n    .mockResolvedValueOnce('first call')\n    .mockRejectedValueOnce(new Error('Async error'));\n\n  await asyncMock(); // first call\n  await asyncMock(); // throws \"Async error\"\n});\n")),(0,o.kt)("h2",{id:"typescript"},"TypeScript"),(0,o.kt)("p",null,"Jest itself is written in ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org"},"TypeScript"),"."),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev"},"Create React App")," then the ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-typescript/"},"TypeScript template")," has everything you need to start writing tests in TypeScript."),(0,o.kt)("p",null,"Otherwise, please see our ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/27.x/getting-started#using-typescript"},"Getting Started")," guide for to get setup with TypeScript."),(0,o.kt)("p",null,"You can see an example of using Jest with TypeScript in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/typescript"},"GitHub repository"),"."),(0,o.kt)("h3",{id:"jestmockedfunction"},(0,o.kt)("inlineCode",{parentName:"h3"},"jest.MockedFunction")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"jest.MockedFunction")," is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/jest")," module from version ",(0,o.kt)("inlineCode",{parentName:"p"},"24.9.0"),".")),(0,o.kt)("p",null,"The following examples will assume you have an understanding of how ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/27.x/mock-functions"},"Jest mock functions work with JavaScript"),"."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.MockedFunction")," to represent a function that has been replaced by a Jest mock."),(0,o.kt)("p",null,"Example using ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/27.x/jest-object#jestmockmodulename-factory-options"},"automatic ",(0,o.kt)("inlineCode",{parentName:"a"},"jest.mock")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Assume `add` is imported and used within `calculate`.\nimport add from './add';\nimport calculate from './calc';\n\njest.mock('./add');\n\n// Our mock of `add` is now fully typed\nconst mockAdd = add as jest.MockedFunction<typeof add>;\n\ntest('calculate calls add', () => {\n  calculate('Add', 1, 2);\n\n  expect(mockAdd).toHaveBeenCalledTimes(1);\n  expect(mockAdd).toHaveBeenCalledWith(1, 2);\n});\n")),(0,o.kt)("p",null,"Example using ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/27.x/jest-object#jestfnimplementation"},(0,o.kt)("inlineCode",{parentName:"a"},"jest.fn")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Here `add` is imported for its type\nimport add from './add';\nimport calculate from './calc';\n\ntest('calculate calls add', () => {\n  // Create a new mock that can be used in place of `add`.\n  const mockAdd = jest.fn() as jest.MockedFunction<typeof add>;\n\n  // Note: You can use the `jest.fn` type directly like this if you want:\n  // const mockAdd = jest.fn<ReturnType<typeof add>, Parameters<typeof add>>();\n  // `jest.MockedFunction` is a more friendly shortcut.\n\n  // Now we can easily set up mock implementations.\n  // All the `.mock*` API can now give you proper types for `add`.\n  // https://jestjs.io/docs/mock-function-api\n\n  // `.mockImplementation` can now infer that `a` and `b` are `number`\n  // and that the returned value is a `number`.\n  mockAdd.mockImplementation((a, b) => {\n    // Yes, this mock is still adding two numbers but imagine this\n    // was a complex function we are mocking.\n    return a + b;\n  });\n\n  // `mockAdd` is properly typed and therefore accepted by\n  // anything requiring `add`.\n  calculate(mockAdd, 1, 2);\n\n  expect(mockAdd).toHaveBeenCalledTimes(1);\n  expect(mockAdd).toHaveBeenCalledWith(1, 2);\n});\n")),(0,o.kt)("h3",{id:"jestmockedclass"},(0,o.kt)("inlineCode",{parentName:"h3"},"jest.MockedClass")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"jest.MockedClass")," is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/jest")," module from version ",(0,o.kt)("inlineCode",{parentName:"p"},"24.9.0"),".")),(0,o.kt)("p",null,"The following examples will assume you have an understanding of how ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/27.x/es6-class-mocks"},"Jest mock classes work with JavaScript"),"."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.MockedClass")," to represent a class that has been replaced by a Jest mock."),(0,o.kt)("p",null,"Converting the ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/27.x/es6-class-mocks#automatic-mock"},"ES6 Class automatic mock example")," would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import SoundPlayer from '../sound-player';\nimport SoundPlayerConsumer from '../sound-player-consumer';\n\njest.mock('../sound-player'); // SoundPlayer is now a mock constructor\n\nconst SoundPlayerMock = SoundPlayer as jest.MockedClass<typeof SoundPlayer>;\n\nbeforeEach(() => {\n  // Clear all instances and calls to constructor and all methods:\n  SoundPlayerMock.mockClear();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayerMock).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  // Show that mockClear() is working:\n  expect(SoundPlayerMock).not.toHaveBeenCalled();\n\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  // Constructor should have been called again:\n  expect(SoundPlayerMock).toHaveBeenCalledTimes(1);\n\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n\n  // mock.instances is available with automatic mocks:\n  const mockSoundPlayerInstance = SoundPlayerMock.mock.instances[0];\n\n  // However, it will not allow access to `.mock` in TypeScript as it\n  // is returning `SoundPlayer`. Instead, you can check the calls to a\n  // method like this fully typed:\n  expect(SoundPlayerMock.prototype.playSoundFile.mock.calls[0][0]).toBe(\n    coolSoundFileName,\n  );\n  // Equivalent to above check:\n  expect(SoundPlayerMock.prototype.playSoundFile).toHaveBeenCalledWith(\n    coolSoundFileName,\n  );\n  expect(SoundPlayerMock.prototype.playSoundFile).toHaveBeenCalledTimes(1);\n});\n")))}u.isMDXComponent=!0}}]);