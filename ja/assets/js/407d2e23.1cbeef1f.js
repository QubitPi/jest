"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[972],{12081:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"asynchronous","title":"Testing Asynchronous Code","description":"It\'s common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed, before it can move on to another test. Jest has several ways to handle this.","source":"@site/versioned_docs/version-29.5/TestingAsyncCode.md","sourceDirName":".","slug":"/asynchronous","permalink":"/ja/docs/29.5/asynchronous","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ja","tags":[],"version":"29.5","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738912609000,"frontMatter":{"id":"asynchronous","title":"Testing Asynchronous Code"},"sidebar":"docs","previous":{"title":"Using Matchers","permalink":"/ja/docs/29.5/using-matchers"},"next":{"title":"Setup and Teardown","permalink":"/ja/docs/29.5/setup-teardown"}}');var a=s(62540),r=s(43023);const o={id:"asynchronous",title:"Testing Asynchronous Code"},c=void 0,i={},l=[{value:"Promises",id:"promises",level:2},{value:"Async/Await",id:"asyncawait",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"<code>.resolves</code> / <code>.rejects</code>",id:"resolves--rejects",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"It's common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed, before it can move on to another test. Jest has several ways to handle this."}),"\n",(0,a.jsx)(t.h2,{id:"promises",children:"Promises"}),"\n",(0,a.jsx)(t.p,{children:"Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will fail."}),"\n",(0,a.jsxs)(t.p,{children:["For example, let's say that ",(0,a.jsx)(t.code,{children:"fetchData"})," returns a promise that is supposed to resolve to the string ",(0,a.jsx)(t.code,{children:"'peanut butter'"}),". We could test it with:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"test('the data is peanut butter', () => {\n  return fetchData().then(data => {\n    expect(data).toBe('peanut butter');\n  });\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"asyncawait",children:"Async/Await"}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, you can use ",(0,a.jsx)(t.code,{children:"async"})," and ",(0,a.jsx)(t.code,{children:"await"})," in your tests. To write an async test, use the ",(0,a.jsx)(t.code,{children:"async"})," keyword in front of the function passed to ",(0,a.jsx)(t.code,{children:"test"}),". For example, the same ",(0,a.jsx)(t.code,{children:"fetchData"})," scenario can be tested with:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"test('the data is peanut butter', async () => {\n  const data = await fetchData();\n  expect(data).toBe('peanut butter');\n});\n\ntest('the fetch fails with an error', async () => {\n  expect.assertions(1);\n  try {\n    await fetchData();\n  } catch (error) {\n    expect(error).toMatch('error');\n  }\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can combine ",(0,a.jsx)(t.code,{children:"async"})," and ",(0,a.jsx)(t.code,{children:"await"})," with ",(0,a.jsx)(t.code,{children:".resolves"})," or ",(0,a.jsx)(t.code,{children:".rejects"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"test('the data is peanut butter', async () => {\n  await expect(fetchData()).resolves.toBe('peanut butter');\n});\n\ntest('the fetch fails with an error', async () => {\n  await expect(fetchData()).rejects.toMatch('error');\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In these cases, ",(0,a.jsx)(t.code,{children:"async"})," and ",(0,a.jsx)(t.code,{children:"await"})," are effectively syntactic sugar for the same logic as the promises example uses."]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["Be sure to return (or ",(0,a.jsx)(t.code,{children:"await"}),") the promise - if you omit the ",(0,a.jsx)(t.code,{children:"return"}),"/",(0,a.jsx)(t.code,{children:"await"})," statement, your test will complete before the promise returned from ",(0,a.jsx)(t.code,{children:"fetchData"})," resolves or rejects."]})}),"\n",(0,a.jsxs)(t.p,{children:["If you expect a promise to be rejected, use the ",(0,a.jsx)(t.code,{children:".catch"})," method. Make sure to add ",(0,a.jsx)(t.code,{children:"expect.assertions"})," to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would not fail the test."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"test('the fetch fails with an error', () => {\n  expect.assertions(1);\n  return fetchData().catch(error => expect(error).toMatch('error'));\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,a.jsxs)(t.p,{children:["If you don't use promises, you can use callbacks. For example, let's say that ",(0,a.jsx)(t.code,{children:"fetchData"}),", instead of returning a promise, expects a callback, i.e. fetches some data and calls ",(0,a.jsx)(t.code,{children:"callback(null, data)"})," when it is complete. You want to test that this returned data is the string ",(0,a.jsx)(t.code,{children:"'peanut butter'"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["By default, Jest tests complete once they reach the end of their execution. That means this test will ",(0,a.jsx)(t.em,{children:"not"})," work as intended:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// Don't do this!\ntest('the data is peanut butter', () => {\n  function callback(error, data) {\n    if (error) {\n      throw error;\n    }\n    expect(data).toBe('peanut butter');\n  }\n\n  fetchData(callback);\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The problem is that the test will complete as soon as ",(0,a.jsx)(t.code,{children:"fetchData"})," completes, before ever calling the callback."]}),"\n",(0,a.jsxs)(t.p,{children:["There is an alternate form of ",(0,a.jsx)(t.code,{children:"test"})," that fixes this. Instead of putting the test in a function with an empty argument, use a single argument called ",(0,a.jsx)(t.code,{children:"done"}),". Jest will wait until the ",(0,a.jsx)(t.code,{children:"done"})," callback is called before finishing the test."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"test('the data is peanut butter', done => {\n  function callback(error, data) {\n    if (error) {\n      done(error);\n      return;\n    }\n    try {\n      expect(data).toBe('peanut butter');\n      done();\n    } catch (error) {\n      done(error);\n    }\n  }\n\n  fetchData(callback);\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(t.code,{children:"done()"})," is never called, the test will fail (with timeout error), which is what you want to happen."]}),"\n",(0,a.jsxs)(t.p,{children:["If the ",(0,a.jsx)(t.code,{children:"expect"})," statement fails, it throws an error and ",(0,a.jsx)(t.code,{children:"done()"})," is not called. If we want to see in the test log why it failed, we have to wrap ",(0,a.jsx)(t.code,{children:"expect"})," in a ",(0,a.jsx)(t.code,{children:"try"})," block and pass the error in the ",(0,a.jsx)(t.code,{children:"catch"})," block to ",(0,a.jsx)(t.code,{children:"done"}),". Otherwise, we end up with an opaque timeout error that doesn't show what value was received by ",(0,a.jsx)(t.code,{children:"expect(data)"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["Jest will throw an error, if the same test function is passed a ",(0,a.jsx)(t.code,{children:"done()"})," callback and returns a promise. This is done as a precaution to avoid memory leaks in your tests."]})}),"\n",(0,a.jsxs)(t.h2,{id:"resolves--rejects",children:[(0,a.jsx)(t.code,{children:".resolves"})," / ",(0,a.jsx)(t.code,{children:".rejects"})]}),"\n",(0,a.jsxs)(t.p,{children:["You can also use the ",(0,a.jsx)(t.code,{children:".resolves"})," matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"test('the data is peanut butter', () => {\n  return expect(fetchData()).resolves.toBe('peanut butter');\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Be sure to return the assertion\u2014if you omit this ",(0,a.jsx)(t.code,{children:"return"})," statement, your test will complete before the promise returned from ",(0,a.jsx)(t.code,{children:"fetchData"})," is resolved and then() has a chance to execute the callback."]}),"\n",(0,a.jsxs)(t.p,{children:["If you expect a promise to be rejected, use the ",(0,a.jsx)(t.code,{children:".rejects"})," matcher. It works analogically to the ",(0,a.jsx)(t.code,{children:".resolves"})," matcher. If the promise is fulfilled, the test will automatically fail."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"test('the fetch fails with an error', () => {\n  return expect(fetchData()).rejects.toMatch('error');\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"None of these forms is particularly superior to the others, and you can mix and match them across a codebase or even in a single file. It just depends on which style you feel makes your tests simpler."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},43023:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(63696);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);