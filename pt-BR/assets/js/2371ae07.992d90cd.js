"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[10132],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(25773),r=(n(27378),n(35318));const o={id:"asynchronous",title:"Testing Asynchronous Code"},s=void 0,i={unversionedId:"asynchronous",id:"version-29.2/asynchronous",title:"Testing Asynchronous Code",description:"It's common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed, before it can move on to another test. Jest has several ways to handle this.",source:"@site/versioned_docs/version-29.2/TestingAsyncCode.md",sourceDirName:".",slug:"/asynchronous",permalink:"/jest/pt-BR/docs/29.2/asynchronous",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.2",lastUpdatedBy:"Jack",lastUpdatedAt:1680514817,formattedLastUpdatedAt:"3 de abr. de 2023",frontMatter:{id:"asynchronous",title:"Testing Asynchronous Code"},sidebar:"docs",previous:{title:"Using Matchers",permalink:"/jest/pt-BR/docs/29.2/using-matchers"},next:{title:"Setup and Teardown",permalink:"/jest/pt-BR/docs/29.2/setup-teardown"}},l={},c=[{value:"Promises",id:"promises",level:2},{value:"Async/Await",id:"asyncawait",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"<code>.resolves</code> / <code>.rejects</code>",id:"resolves--rejects",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It's common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed, before it can move on to another test. Jest has several ways to handle this."),(0,r.kt)("h2",{id:"promises"},"Promises"),(0,r.kt)("p",null,"Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will fail."),(0,r.kt)("p",null,"For example, let's say that ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData")," returns a promise that is supposed to resolve to the string ",(0,r.kt)("inlineCode",{parentName:"p"},"'peanut butter'"),". We could test it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('the data is peanut butter', () => {\n  return fetchData().then(data => {\n    expect(data).toBe('peanut butter');\n  });\n});\n")),(0,r.kt)("h2",{id:"asyncawait"},"Async/Await"),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," in your tests. To write an async test, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," keyword in front of the function passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),". For example, the same ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData")," scenario can be tested with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('the data is peanut butter', async () => {\n  const data = await fetchData();\n  expect(data).toBe('peanut butter');\n});\n\ntest('the fetch fails with an error', async () => {\n  expect.assertions(1);\n  try {\n    await fetchData();\n  } catch (e) {\n    expect(e).toMatch('error');\n  }\n});\n")),(0,r.kt)("p",null,"You can combine ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," with ",(0,r.kt)("inlineCode",{parentName:"p"},".resolves")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".rejects"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('the data is peanut butter', async () => {\n  await expect(fetchData()).resolves.toBe('peanut butter');\n});\n\ntest('the fetch fails with an error', async () => {\n  await expect(fetchData()).rejects.toMatch('error');\n});\n")),(0,r.kt)("p",null,"In these cases, ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," are effectively syntactic sugar for the same logic as the promises example uses."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be sure to return (or ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),") the promise - if you omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"return"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"await")," statement, your test will complete before the promise returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData")," resolves or rejects.")),(0,r.kt)("p",null,"If you expect a promise to be rejected, use the ",(0,r.kt)("inlineCode",{parentName:"p"},".catch")," method. Make sure to add ",(0,r.kt)("inlineCode",{parentName:"p"},"expect.assertions")," to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would not fail the test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('the fetch fails with an error', () => {\n  expect.assertions(1);\n  return fetchData().catch(e => expect(e).toMatch('error'));\n});\n")),(0,r.kt)("h2",{id:"callbacks"},"Callbacks"),(0,r.kt)("p",null,"If you don't use promises, you can use callbacks. For example, let's say that ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData"),", instead of returning a promise, expects a callback, i.e. fetches some data and calls ",(0,r.kt)("inlineCode",{parentName:"p"},"callback(null, data)")," when it is complete. You want to test that this returned data is the string ",(0,r.kt)("inlineCode",{parentName:"p"},"'peanut butter'"),"."),(0,r.kt)("p",null,"By default, Jest tests complete once they reach the end of their execution. That means this test will ",(0,r.kt)("em",{parentName:"p"},"not")," work as intended:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Don't do this!\ntest('the data is peanut butter', () => {\n  function callback(error, data) {\n    if (error) {\n      throw error;\n    }\n    expect(data).toBe('peanut butter');\n  }\n\n  fetchData(callback);\n});\n")),(0,r.kt)("p",null,"The problem is that the test will complete as soon as ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData")," completes, before ever calling the callback."),(0,r.kt)("p",null,"There is an alternate form of ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," that fixes this. Instead of putting the test in a function with an empty argument, use a single argument called ",(0,r.kt)("inlineCode",{parentName:"p"},"done"),". Jest will wait until the ",(0,r.kt)("inlineCode",{parentName:"p"},"done")," callback is called before finishing the test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('the data is peanut butter', done => {\n  function callback(error, data) {\n    if (error) {\n      done(error);\n      return;\n    }\n    try {\n      expect(data).toBe('peanut butter');\n      done();\n    } catch (error) {\n      done(error);\n    }\n  }\n\n  fetchData(callback);\n});\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"done()")," is never called, the test will fail (with timeout error), which is what you want to happen."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," statement fails, it throws an error and ",(0,r.kt)("inlineCode",{parentName:"p"},"done()")," is not called. If we want to see in the test log why it failed, we have to wrap ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block and pass the error in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block to ",(0,r.kt)("inlineCode",{parentName:"p"},"done"),". Otherwise, we end up with an opaque timeout error that doesn't show what value was received by ",(0,r.kt)("inlineCode",{parentName:"p"},"expect(data)"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Jest will throw an error, if the same test function is passed a ",(0,r.kt)("inlineCode",{parentName:"p"},"done()")," callback and returns a promise. This is done as a precaution to avoid memory leaks in your tests.")),(0,r.kt)("h2",{id:"resolves--rejects"},(0,r.kt)("inlineCode",{parentName:"h2"},".resolves")," / ",(0,r.kt)("inlineCode",{parentName:"h2"},".rejects")),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},".resolves")," matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('the data is peanut butter', () => {\n  return expect(fetchData()).resolves.toBe('peanut butter');\n});\n")),(0,r.kt)("p",null,"Be sure to return the assertion\u2014if you omit this ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," statement, your test will complete before the promise returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchData")," is resolved and then() has a chance to execute the callback."),(0,r.kt)("p",null,"If you expect a promise to be rejected, use the ",(0,r.kt)("inlineCode",{parentName:"p"},".rejects")," matcher. It works analogically to the ",(0,r.kt)("inlineCode",{parentName:"p"},".resolves")," matcher. If the promise is fulfilled, the test will automatically fail."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('the fetch fails with an error', () => {\n  return expect(fetchData()).rejects.toMatch('error');\n});\n")),(0,r.kt)("p",null,"None of these forms is particularly superior to the others, and you can mix and match them across a codebase or even in a single file. It just depends on which style you feel makes your tests simpler."))}u.isMDXComponent=!0}}]);