"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[67446],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(25773),a=(n(27378),n(35318));const s={id:"tutorial-async",title:"An Async Example"},o=void 0,i={unversionedId:"tutorial-async",id:"version-29.2/tutorial-async",title:"An Async Example",description:"First, enable Babel support in Jest as documented in the Getting Started guide.",source:"@site/versioned_docs/version-29.2/TutorialAsync.md",sourceDirName:".",slug:"/tutorial-async",permalink:"/jest/docs/29.2/tutorial-async",draft:!1,editUrl:"https://github.com/facebook/jest/edit/main/website/versioned_docs/version-29.2/TutorialAsync.md",tags:[],version:"29.2",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"tutorial-async",title:"An Async Example"},sidebar:"docs",previous:{title:"Snapshot Testing",permalink:"/jest/docs/29.2/snapshot-testing"},next:{title:"Timer Mocks",permalink:"/jest/docs/29.2/timer-mocks"}},l={},c=[{value:"<code>.resolves</code>",id:"resolves",level:2},{value:"<code>async</code>/<code>await</code>",id:"asyncawait",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"<code>.rejects</code>",id:"rejects",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"First, enable Babel support in Jest as documented in the ",(0,a.kt)("a",{parentName:"p",href:"/jest/docs/29.2/getting-started#using-babel"},"Getting Started")," guide."),(0,a.kt)("p",null,"Let's implement a module that fetches user data from an API and returns the user name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="user.js"',title:'"user.js"'},"import request from './request';\n\nexport function getUserName(userID) {\n  return request(`/users/${userID}`).then(user => user.name);\n}\n")),(0,a.kt)("p",null,"In the above implementation, we expect the ",(0,a.kt)("inlineCode",{parentName:"p"},"request.js")," module to return a promise. We chain a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," to receive the user name."),(0,a.kt)("p",null,"Now imagine an implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"request.js")," that goes to the network and fetches some user data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="request.js"',title:'"request.js"'},"const http = require('http');\n\nexport default function request(url) {\n  return new Promise(resolve => {\n    // This is an example of an http request, for example to fetch\n    // user data from an API.\n    // This module is being mocked in __mocks__/request.js\n    http.get({path: url}, response => {\n      let data = '';\n      response.on('data', _data => (data += _data));\n      response.on('end', () => resolve(data));\n    });\n  });\n}\n")),(0,a.kt)("p",null,"Because we don't want to go to the network in our test, we are going to create a manual mock for our ",(0,a.kt)("inlineCode",{parentName:"p"},"request.js")," module in the ",(0,a.kt)("inlineCode",{parentName:"p"},"__mocks__")," folder (the folder is case-sensitive, ",(0,a.kt)("inlineCode",{parentName:"p"},"__MOCKS__")," will not work). It could look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="__mocks__/request.js"',title:'"__mocks__/request.js"'},"const users = {\n  4: {name: 'Mark'},\n  5: {name: 'Paul'},\n};\n\nexport default function request(url) {\n  return new Promise((resolve, reject) => {\n    const userID = parseInt(url.substr('/users/'.length), 10);\n    process.nextTick(() =>\n      users[userID]\n        ? resolve(users[userID])\n        : reject({\n            error: `User with ${userID} not found.`,\n          }),\n    );\n  });\n}\n")),(0,a.kt)("p",null,"Now let's write a test for our async functionality."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="__tests__/user-test.js"',title:'"__tests__/user-test.js"'},"jest.mock('../request');\n\nimport * as user from '../user';\n\n// The assertion for a promise must be returned.\nit('works with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(4).then(data => expect(data).toBe('Mark'));\n});\n")),(0,a.kt)("p",null,"We call ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock('../request')")," to tell Jest to use our manual mock. ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," expects the return value to be a Promise that is going to be resolved. You can chain as many Promises as you like and call ",(0,a.kt)("inlineCode",{parentName:"p"},"expect")," at any time, as long as you return a Promise at the end."),(0,a.kt)("h2",{id:"resolves"},(0,a.kt)("inlineCode",{parentName:"h2"},".resolves")),(0,a.kt)("p",null,"There is a less verbose way using ",(0,a.kt)("inlineCode",{parentName:"p"},"resolves")," to unwrap the value of a fulfilled promise together with any other matcher. If the promise is rejected, the assertion will fail."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"it('works with resolves', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n")),(0,a.kt)("h2",{id:"asyncawait"},(0,a.kt)("inlineCode",{parentName:"h2"},"async"),"/",(0,a.kt)("inlineCode",{parentName:"h2"},"await")),(0,a.kt)("p",null,"Writing tests using the ",(0,a.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"await")," syntax is also possible. Here is how you'd write the same examples from before:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// async/await can be used.\nit('works with async/await', async () => {\n  expect.assertions(1);\n  const data = await user.getUserName(4);\n  expect(data).toBe('Mark');\n});\n\n// async/await can also be used with `.resolves`.\nit('works with async/await and resolves', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n")),(0,a.kt)("p",null,"To enable async/await in your project, install ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},(0,a.kt)("inlineCode",{parentName:"a"},"@babel/preset-env"))," and enable the feature in your ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js")," file."),(0,a.kt)("h2",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"Errors can be handled using the ",(0,a.kt)("inlineCode",{parentName:"p"},".catch")," method. Make sure to add ",(0,a.kt)("inlineCode",{parentName:"p"},"expect.assertions")," to verify that a certain number of assertions are called. Otherwise a fulfilled promise would not fail the test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Testing for async errors using Promise.catch.\nit('tests error with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(2).catch(e =>\n    expect(e).toEqual({\n      error: 'User with 2 not found.',\n    }),\n  );\n});\n\n// Or using async/await.\nit('tests error with async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (e) {\n    expect(e).toEqual({\n      error: 'User with 1 not found.',\n    });\n  }\n});\n")),(0,a.kt)("h2",{id:"rejects"},(0,a.kt)("inlineCode",{parentName:"h2"},".rejects")),(0,a.kt)("p",null,"The",(0,a.kt)("inlineCode",{parentName:"p"},".rejects")," helper works like the ",(0,a.kt)("inlineCode",{parentName:"p"},".resolves")," helper. If the promise is fulfilled, the test will automatically fail. ",(0,a.kt)("inlineCode",{parentName:"p"},"expect.assertions(number)")," is not required but recommended to verify that a certain number of ",(0,a.kt)("a",{parentName:"p",href:"expect#expectassertionsnumber"},"assertions")," are called during a test. It is otherwise easy to forget to ",(0,a.kt)("inlineCode",{parentName:"p"},"return"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"await")," the ",(0,a.kt)("inlineCode",{parentName:"p"},".resolves")," assertions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Testing for async errors using `.rejects`.\nit('tests error with rejects', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n\n// Or using async/await with `.rejects`.\nit('tests error with async/await and rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n")),(0,a.kt)("p",null,"The code for this example is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/async"},"examples/async"),"."),(0,a.kt)("p",null,"If you'd like to test timers, like ",(0,a.kt)("inlineCode",{parentName:"p"},"setTimeout"),", take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/jest/docs/29.2/timer-mocks"},"Timer mocks")," documentation."))}p.isMDXComponent=!0}}]);