"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2597],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={id:"jest-platform",title:"Jest Platform"},l=void 0,s={unversionedId:"jest-platform",id:"version-29.0/jest-platform",title:"Jest Platform",description:"You can cherry pick specific features of Jest and use them as standalone packages. Here's a list of the available packages:",source:"@site/versioned_docs/version-29.0/JestPlatform.md",sourceDirName:".",slug:"/jest-platform",permalink:"/jest/ro/docs/29.0/jest-platform",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"29.0",lastUpdatedBy:"Jack",lastUpdatedAt:1677667296,formattedLastUpdatedAt:"1 mar. 2023",frontMatter:{id:"jest-platform",title:"Jest Platform"},sidebar:"docs",previous:{title:"Mock Functions",permalink:"/jest/ro/docs/29.0/mock-functions"},next:{title:"Jest Community",permalink:"/jest/ro/docs/29.0/jest-community"}},i={},p=[{value:"jest-changed-files",id:"jest-changed-files",level:2},{value:"Example",id:"example",level:3},{value:"jest-diff",id:"jest-diff",level:2},{value:"Example",id:"example-1",level:3},{value:"jest-docblock",id:"jest-docblock",level:2},{value:"Example",id:"example-2",level:3},{value:"jest-get-type",id:"jest-get-type",level:2},{value:"Example",id:"example-3",level:3},{value:"jest-validate",id:"jest-validate",level:2},{value:"Example",id:"example-4",level:3},{value:"jest-worker",id:"jest-worker",level:2},{value:"Example",id:"example-5",level:3},{value:"pretty-format",id:"pretty-format",level:2},{value:"Example",id:"example-6",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can cherry pick specific features of Jest and use them as standalone packages. Here's a list of the available packages:"),(0,r.kt)("h2",{id:"jest-changed-files"},"jest-changed-files"),(0,r.kt)("p",null,"Tool for identifying modified files in a git/hg repository. Exports two functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getChangedFilesForRoots")," returns a promise that resolves to an object with the changed files and repos."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"findRepos")," returns a promise that resolves to a set of repositories contained in the specified path.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {getChangedFilesForRoots} = require('jest-changed-files');\n\n// print the set of modified files since last commit in the current repo\ngetChangedFilesForRoots(['./'], {\n  lastCommit: true,\n}).then(result => console.log(result.changedFiles));\n")),(0,r.kt)("p",null,"You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-changed-files")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/packages/jest-changed-files/README.md"},"readme file"),"."),(0,r.kt)("h2",{id:"jest-diff"},"jest-diff"),(0,r.kt)("p",null,'Tool for visualizing changes in data. Exports a function that compares two values of any type and returns a "pretty-printed" string illustrating the difference between the two arguments.'),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {diff} = require('jest-diff');\n\nconst a = {a: {b: {c: 5}}};\nconst b = {a: {b: {c: 6}}};\n\nconst result = diff(a, b);\n\n// print diff\nconsole.log(result);\n")),(0,r.kt)("h2",{id:"jest-docblock"},"jest-docblock"),(0,r.kt)("p",null,"Tool for extracting and parsing the comments at the top of a JavaScript file. Exports various functions to manipulate the data inside the comment block."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {parseWithComments} = require('jest-docblock');\n\nconst code = `\n/**\n * This is a sample\n *\n * @flow\n */\n\n console.log('Hello World!');\n`;\n\nconst parsed = parseWithComments(code);\n\n// prints an object with two attributes: comments and pragmas.\nconsole.log(parsed);\n")),(0,r.kt)("p",null,"You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-docblock")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/packages/jest-docblock/README.md"},"readme file"),"."),(0,r.kt)("h2",{id:"jest-get-type"},"jest-get-type"),(0,r.kt)("p",null,"Module that identifies the primitive type of any JavaScript value. Exports a function that returns a string with the type of the value passed as argument."),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {getType} = require('jest-get-type');\n\nconst array = [1, 2, 3];\nconst nullValue = null;\nconst undefinedValue = undefined;\n\n// prints 'array'\nconsole.log(getType(array));\n// prints 'null'\nconsole.log(getType(nullValue));\n// prints 'undefined'\nconsole.log(getType(undefinedValue));\n")),(0,r.kt)("h2",{id:"jest-validate"},"jest-validate"),(0,r.kt)("p",null,"Tool for validating configurations submitted by users. Exports a function that takes two arguments: the user's configuration and an object containing an example configuration and other options. The return value is an object with two attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasDeprecationWarnings"),", a boolean indicating whether the submitted configuration has deprecation warnings,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isValid"),", a boolean indicating whether the configuration is correct or not.")),(0,r.kt)("h3",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {validate} = require('jest-validate');\n\nconst configByUser = {\n  transform: '<rootDir>/node_modules/my-custom-transform',\n};\n\nconst result = validate(configByUser, {\n  comment: '  Documentation: http://custom-docs.com',\n  exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},\n});\n\nconsole.log(result);\n")),(0,r.kt)("p",null,"You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-validate")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/packages/jest-validate/README.md"},"readme file"),"."),(0,r.kt)("h2",{id:"jest-worker"},"jest-worker"),(0,r.kt)("p",null,"Module used for parallelization of tasks. Exports a class ",(0,r.kt)("inlineCode",{parentName:"p"},"JestWorker")," that takes the path of Node.js module and lets you call the module's exported methods as if they were class methods, returning a promise that resolves when the specified method finishes its execution in a forked process."),(0,r.kt)("h3",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="heavy-task.js"',title:'"heavy-task.js"'},"module.exports = {\n  myHeavyTask: args => {\n    // long running CPU intensive task.\n  },\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"async function main() {\n  const worker = new Worker(require.resolve('./heavy-task.js'));\n\n  // run 2 tasks in parallel with different arguments\n  const results = await Promise.all([\n    worker.myHeavyTask({foo: 'bar'}),\n    worker.myHeavyTask({bar: 'foo'}),\n  ]);\n\n  console.log(results);\n}\n\nmain();\n")),(0,r.kt)("p",null,"You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-worker")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/packages/jest-worker/README.md"},"readme file"),"."),(0,r.kt)("h2",{id:"pretty-format"},"pretty-format"),(0,r.kt)("p",null,"Exports a function that converts any JavaScript value into a human-readable string. Supports all built-in JavaScript types out of the box and allows extension for application-specific types via user-defined plugins."),(0,r.kt)("h3",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {format: prettyFormat} = require('pretty-format');\n\nconst val = {object: {}};\nval.circularReference = val;\nval[Symbol('foo')] = 'foo';\nval.map = new Map([['prop', 'value']]);\nval.array = [-0, Infinity, NaN];\n\nconsole.log(prettyFormat(val));\n")),(0,r.kt)("p",null,"You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"pretty-format")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/packages/pretty-format/README.md"},"readme file"),"."))}u.isMDXComponent=!0}}]);