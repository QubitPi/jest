"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1312],{66160:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"tutorial-async","title":"An Async Example","description":"First, enable Babel support in Jest as documented in the Getting Started guide.","source":"@site/versioned_docs/version-29.7/TutorialAsync.md","sourceDirName":".","slug":"/tutorial-async","permalink":"/ro/docs/tutorial-async","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ro","tags":[],"version":"29.7","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738910716000,"frontMatter":{"id":"tutorial-async","title":"An Async Example"},"sidebar":"docs","previous":{"title":"Snapshot Testing","permalink":"/ro/docs/snapshot-testing"},"next":{"title":"Timer Mocks","permalink":"/ro/docs/timer-mocks"}}');var r=t(62540),a=t(43023);const o={id:"tutorial-async",title:"An Async Example"},i=void 0,c={},l=[{value:"<code>.resolves</code>",id:"resolves",level:2},{value:"<code>async</code>/<code>await</code>",id:"asyncawait",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"<code>.rejects</code>",id:"rejects",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["First, enable Babel support in Jest as documented in the ",(0,r.jsx)(s.a,{href:"/ro/docs/getting-started#using-babel",children:"Getting Started"})," guide."]}),"\n",(0,r.jsx)(s.p,{children:"Let's implement a module that fetches user data from an API and returns the user name."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="user.js"',children:"import request from './request';\n\nexport function getUserName(userID) {\n  return request(`/users/${userID}`).then(user => user.name);\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["In the above implementation, we expect the ",(0,r.jsx)(s.code,{children:"request.js"})," module to return a promise. We chain a call to ",(0,r.jsx)(s.code,{children:"then"})," to receive the user name."]}),"\n",(0,r.jsxs)(s.p,{children:["Now imagine an implementation of ",(0,r.jsx)(s.code,{children:"request.js"})," that goes to the network and fetches some user data:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="request.js"',children:"const http = require('http');\n\nexport default function request(url) {\n  return new Promise(resolve => {\n    // This is an example of an http request, for example to fetch\n    // user data from an API.\n    // This module is being mocked in __mocks__/request.js\n    http.get({path: url}, response => {\n      let data = '';\n      response.on('data', _data => (data += _data));\n      response.on('end', () => resolve(data));\n    });\n  });\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Because we don't want to go to the network in our test, we are going to create a manual mock for our ",(0,r.jsx)(s.code,{children:"request.js"})," module in the ",(0,r.jsx)(s.code,{children:"__mocks__"})," folder (the folder is case-sensitive, ",(0,r.jsx)(s.code,{children:"__MOCKS__"})," will not work). It could look something like this:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/request.js"',children:"const users = {\n  4: {name: 'Mark'},\n  5: {name: 'Paul'},\n};\n\nexport default function request(url) {\n  return new Promise((resolve, reject) => {\n    const userID = parseInt(url.slice('/users/'.length), 10);\n    process.nextTick(() =>\n      users[userID]\n        ? resolve(users[userID])\n        : reject({\n            error: `User with ${userID} not found.`,\n          }),\n    );\n  });\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"Now let's write a test for our async functionality."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="__tests__/user-test.js"',children:"jest.mock('../request');\n\nimport * as user from '../user';\n\n// The assertion for a promise must be returned.\nit('works with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(4).then(data => expect(data).toBe('Mark'));\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["We call ",(0,r.jsx)(s.code,{children:"jest.mock('../request')"})," to tell Jest to use our manual mock. ",(0,r.jsx)(s.code,{children:"it"})," expects the return value to be a Promise that is going to be resolved. You can chain as many Promises as you like and call ",(0,r.jsx)(s.code,{children:"expect"})," at any time, as long as you return a Promise at the end."]}),"\n",(0,r.jsx)(s.h2,{id:"resolves",children:(0,r.jsx)(s.code,{children:".resolves"})}),"\n",(0,r.jsxs)(s.p,{children:["There is a less verbose way using ",(0,r.jsx)(s.code,{children:"resolves"})," to unwrap the value of a fulfilled promise together with any other matcher. If the promise is rejected, the assertion will fail."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"it('works with resolves', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"asyncawait",children:[(0,r.jsx)(s.code,{children:"async"}),"/",(0,r.jsx)(s.code,{children:"await"})]}),"\n",(0,r.jsxs)(s.p,{children:["Writing tests using the ",(0,r.jsx)(s.code,{children:"async"}),"/",(0,r.jsx)(s.code,{children:"await"})," syntax is also possible. Here is how you'd write the same examples from before:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// async/await can be used.\nit('works with async/await', async () => {\n  expect.assertions(1);\n  const data = await user.getUserName(4);\n  expect(data).toBe('Mark');\n});\n\n// async/await can also be used with `.resolves`.\nit('works with async/await and resolves', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To enable async/await in your project, install ",(0,r.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",children:(0,r.jsx)(s.code,{children:"@babel/preset-env"})})," and enable the feature in your ",(0,r.jsx)(s.code,{children:"babel.config.js"})," file."]}),"\n",(0,r.jsx)(s.h2,{id:"error-handling",children:"Error handling"}),"\n",(0,r.jsxs)(s.p,{children:["Errors can be handled using the ",(0,r.jsx)(s.code,{children:".catch"})," method. Make sure to add ",(0,r.jsx)(s.code,{children:"expect.assertions"})," to verify that a certain number of assertions are called. Otherwise a fulfilled promise would not fail the test:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// Testing for async errors using Promise.catch.\nit('tests error with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(2).catch(error =>\n    expect(error).toEqual({\n      error: 'User with 2 not found.',\n    }),\n  );\n});\n\n// Or using async/await.\nit('tests error with async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (error) {\n    expect(error).toEqual({\n      error: 'User with 1 not found.',\n    });\n  }\n});\n"})}),"\n",(0,r.jsx)(s.h2,{id:"rejects",children:(0,r.jsx)(s.code,{children:".rejects"})}),"\n",(0,r.jsxs)(s.p,{children:["The",(0,r.jsx)(s.code,{children:".rejects"})," helper works like the ",(0,r.jsx)(s.code,{children:".resolves"})," helper. If the promise is fulfilled, the test will automatically fail. ",(0,r.jsx)(s.code,{children:"expect.assertions(number)"})," is not required but recommended to verify that a certain number of ",(0,r.jsx)(s.a,{href:"expect#expectassertionsnumber",children:"assertions"})," are called during a test. It is otherwise easy to forget to ",(0,r.jsx)(s.code,{children:"return"}),"/",(0,r.jsx)(s.code,{children:"await"})," the ",(0,r.jsx)(s.code,{children:".resolves"})," assertions."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// Testing for async errors using `.rejects`.\nit('tests error with rejects', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n\n// Or using async/await with `.rejects`.\nit('tests error with async/await and rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The code for this example is available at ",(0,r.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/async",children:"examples/async"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["If you'd like to test timers, like ",(0,r.jsx)(s.code,{children:"setTimeout"}),", take a look at the ",(0,r.jsx)(s.a,{href:"/ro/docs/timer-mocks",children:"Timer mocks"})," documentation."]})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},43023:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(63696);const r={},a=n.createContext(r);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);