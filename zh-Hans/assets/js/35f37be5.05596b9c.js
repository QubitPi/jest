"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9591],{15185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"jest-platform","title":"Jest Platform","description":"You can cherry pick specific features of Jest and use them as standalone packages. Here\'s a list of the available packages:","source":"@site/versioned_docs/version-29.7/JestPlatform.md","sourceDirName":".","slug":"/jest-platform","permalink":"/zh-Hans/docs/jest-platform","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/zh-CN","tags":[],"version":"29.7","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738910716000,"frontMatter":{"id":"jest-platform","title":"Jest Platform"},"sidebar":"docs","previous":{"title":"Mock Functions","permalink":"/zh-Hans/docs/mock-functions"},"next":{"title":"Jest Community","permalink":"/zh-Hans/docs/jest-community"}}');var a=n(62540),i=n(43023);const o={id:"jest-platform",title:"Jest Platform"},r=void 0,l={},c=[{value:"jest-changed-files",id:"jest-changed-files",level:2},{value:"Example",id:"example",level:3},{value:"jest-diff",id:"jest-diff",level:2},{value:"Example",id:"example-1",level:3},{value:"jest-docblock",id:"jest-docblock",level:2},{value:"Example",id:"example-2",level:3},{value:"jest-get-type",id:"jest-get-type",level:2},{value:"Example",id:"example-3",level:3},{value:"jest-validate",id:"jest-validate",level:2},{value:"Example",id:"example-4",level:3},{value:"jest-worker",id:"jest-worker",level:2},{value:"Example",id:"example-5",level:3},{value:"pretty-format",id:"pretty-format",level:2},{value:"Example",id:"example-6",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"You can cherry pick specific features of Jest and use them as standalone packages. Here's a list of the available packages:"}),"\n",(0,a.jsx)(t.h2,{id:"jest-changed-files",children:"jest-changed-files"}),"\n",(0,a.jsx)(t.p,{children:"Tool for identifying modified files in a git/hg repository. Exports two functions:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"getChangedFilesForRoots"})," returns a promise that resolves to an object with the changed files and repos."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"findRepos"})," returns a promise that resolves to a set of repositories contained in the specified path."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const {getChangedFilesForRoots} = require('jest-changed-files');\n\n// print the set of modified files since last commit in the current repo\ngetChangedFilesForRoots(['./'], {\n  lastCommit: true,\n}).then(result => console.log(result.changedFiles));\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can read more about ",(0,a.jsx)(t.code,{children:"jest-changed-files"})," in the ",(0,a.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-changed-files/README.md",children:"readme file"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"jest-diff",children:"jest-diff"}),"\n",(0,a.jsx)(t.p,{children:'Tool for visualizing changes in data. Exports a function that compares two values of any type and returns a "pretty-printed" string illustrating the difference between the two arguments.'}),"\n",(0,a.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const {diff} = require('jest-diff');\n\nconst a = {a: {b: {c: 5}}};\nconst b = {a: {b: {c: 6}}};\n\nconst result = diff(a, b);\n\n// print diff\nconsole.log(result);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"jest-docblock",children:"jest-docblock"}),"\n",(0,a.jsx)(t.p,{children:"Tool for extracting and parsing the comments at the top of a JavaScript file. Exports various functions to manipulate the data inside the comment block."}),"\n",(0,a.jsx)(t.h3,{id:"example-2",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const {parseWithComments} = require('jest-docblock');\n\nconst code = `\n/**\n * This is a sample\n *\n * @flow\n */\n\n console.log('Hello World!');\n`;\n\nconst parsed = parseWithComments(code);\n\n// prints an object with two attributes: comments and pragmas.\nconsole.log(parsed);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can read more about ",(0,a.jsx)(t.code,{children:"jest-docblock"})," in the ",(0,a.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-docblock/README.md",children:"readme file"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"jest-get-type",children:"jest-get-type"}),"\n",(0,a.jsx)(t.p,{children:"Module that identifies the primitive type of any JavaScript value. Exports a function that returns a string with the type of the value passed as argument."}),"\n",(0,a.jsx)(t.h3,{id:"example-3",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const {getType} = require('jest-get-type');\n\nconst array = [1, 2, 3];\nconst nullValue = null;\nconst undefinedValue = undefined;\n\n// prints 'array'\nconsole.log(getType(array));\n// prints 'null'\nconsole.log(getType(nullValue));\n// prints 'undefined'\nconsole.log(getType(undefinedValue));\n"})}),"\n",(0,a.jsx)(t.h2,{id:"jest-validate",children:"jest-validate"}),"\n",(0,a.jsx)(t.p,{children:"Tool for validating configurations submitted by users. Exports a function that takes two arguments: the user's configuration and an object containing an example configuration and other options. The return value is an object with two attributes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"hasDeprecationWarnings"}),", a boolean indicating whether the submitted configuration has deprecation warnings,"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"isValid"}),", a boolean indicating whether the configuration is correct or not."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"example-4",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const {validate} = require('jest-validate');\n\nconst configByUser = {\n  transform: '<rootDir>/node_modules/my-custom-transform',\n};\n\nconst result = validate(configByUser, {\n  comment: '  Documentation: http://custom-docs.com',\n  exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},\n});\n\nconsole.log(result);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can read more about ",(0,a.jsx)(t.code,{children:"jest-validate"})," in the ",(0,a.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-validate/README.md",children:"readme file"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"jest-worker",children:"jest-worker"}),"\n",(0,a.jsxs)(t.p,{children:["Module used for parallelization of tasks. Exports a class ",(0,a.jsx)(t.code,{children:"JestWorker"})," that takes the path of Node.js module and lets you call the module's exported methods as if they were class methods, returning a promise that resolves when the specified method finishes its execution in a forked process."]}),"\n",(0,a.jsx)(t.h3,{id:"example-5",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="heavy-task.js"',children:"module.exports = {\n  myHeavyTask: args => {\n    // long running CPU intensive task.\n  },\n};\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="main.js"',children:"async function main() {\n  const worker = new Worker(require.resolve('./heavy-task.js'));\n\n  // run 2 tasks in parallel with different arguments\n  const results = await Promise.all([\n    worker.myHeavyTask({foo: 'bar'}),\n    worker.myHeavyTask({bar: 'foo'}),\n  ]);\n\n  console.log(results);\n}\n\nmain();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can read more about ",(0,a.jsx)(t.code,{children:"jest-worker"})," in the ",(0,a.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-worker/README.md",children:"readme file"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"pretty-format",children:"pretty-format"}),"\n",(0,a.jsx)(t.p,{children:"Exports a function that converts any JavaScript value into a human-readable string. Supports all built-in JavaScript types out of the box and allows extension for application-specific types via user-defined plugins."}),"\n",(0,a.jsx)(t.h3,{id:"example-6",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const {format: prettyFormat} = require('pretty-format');\n\nconst val = {object: {}};\nval.circularReference = val;\nval[Symbol('foo')] = 'foo';\nval.map = new Map([['prop', 'value']]);\nval.array = [-0, Infinity, NaN];\n\nconsole.log(prettyFormat(val));\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can read more about ",(0,a.jsx)(t.code,{children:"pretty-format"})," in the ",(0,a.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/pretty-format/README.md",children:"readme file"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(63696);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);