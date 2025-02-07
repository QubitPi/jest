"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[610],{4341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"setup-teardown","title":"Setup and Teardown","description":"Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this.","source":"@site/versioned_docs/version-29.5/SetupAndTeardown.md","sourceDirName":".","slug":"/setup-teardown","permalink":"/es-ES/docs/29.5/setup-teardown","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/es-ES","tags":[],"version":"29.5","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738910716000,"frontMatter":{"id":"setup-teardown","title":"Setup and Teardown"},"sidebar":"docs","previous":{"title":"Testing Asynchronous Code","permalink":"/es-ES/docs/29.5/asynchronous"},"next":{"title":"Mock Functions","permalink":"/es-ES/docs/29.5/mock-functions"}}');var o=t(62540),a=t(43023);const i={id:"setup-teardown",title:"Setup and Teardown"},r=void 0,c={},l=[{value:"Repeating Setup",id:"repeating-setup",level:2},{value:"One-Time Setup",id:"one-time-setup",level:2},{value:"Scoping",id:"scoping",level:2},{value:"Order of Execution",id:"order-of-execution",level:2},{value:"General Advice",id:"general-advice",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this."}),"\n",(0,o.jsx)(n.h2,{id:"repeating-setup",children:"Repeating Setup"}),"\n",(0,o.jsxs)(n.p,{children:["If you have some work you need to do repeatedly for many tests, you can use ",(0,o.jsx)(n.code,{children:"beforeEach"})," and ",(0,o.jsx)(n.code,{children:"afterEach"})," hooks."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, let's say that several tests interact with a database of cities. You have a method ",(0,o.jsx)(n.code,{children:"initializeCityDatabase()"})," that must be called before each of these tests, and a method ",(0,o.jsx)(n.code,{children:"clearCityDatabase()"})," that must be called after each of these tests. You can do this with:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  initializeCityDatabase();\n});\n\nafterEach(() => {\n  clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"beforeEach"})," and ",(0,o.jsx)(n.code,{children:"afterEach"})," can handle asynchronous code in the same ways that ",(0,o.jsx)(n.a,{href:"/es-ES/docs/29.5/asynchronous",children:"tests can handle asynchronous code"})," - they can either take a ",(0,o.jsx)(n.code,{children:"done"})," parameter or return a promise. For example, if ",(0,o.jsx)(n.code,{children:"initializeCityDatabase()"})," returned a promise that resolved when the database was initialized, we would want to return that promise:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  return initializeCityDatabase();\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"one-time-setup",children:"One-Time Setup"}),"\n",(0,o.jsxs)(n.p,{children:["In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Jest provides ",(0,o.jsx)(n.code,{children:"beforeAll"})," and ",(0,o.jsx)(n.code,{children:"afterAll"})," hooks to handle this situation."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if both ",(0,o.jsx)(n.code,{children:"initializeCityDatabase()"})," and ",(0,o.jsx)(n.code,{children:"clearCityDatabase()"})," returned promises, and the city database could be reused between tests, we could change our test code to:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"beforeAll(() => {\n  return initializeCityDatabase();\n});\n\nafterAll(() => {\n  return clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"scoping",children:"Scoping"}),"\n",(0,o.jsxs)(n.p,{children:["The top level ",(0,o.jsx)(n.code,{children:"before*"})," and ",(0,o.jsx)(n.code,{children:"after*"})," hooks apply to every test in a file. The hooks declared inside a ",(0,o.jsx)(n.code,{children:"describe"})," block apply only to the tests within that ",(0,o.jsx)(n.code,{children:"describe"})," block."]}),"\n",(0,o.jsx)(n.p,{children:"For example, let's say we had not just a city database, but also a food database. We could do different setup for different tests:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// Applies to all tests in this file\nbeforeEach(() => {\n  return initializeCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n\ndescribe('matching cities to foods', () => {\n  // Applies only to tests in this describe block\n  beforeEach(() => {\n    return initializeFoodDatabase();\n  });\n\n  test('Vienna <3 veal', () => {\n    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);\n  });\n\n  test('San Juan <3 plantains', () => {\n    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);\n  });\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that the top-level ",(0,o.jsx)(n.code,{children:"beforeEach"})," is executed before the ",(0,o.jsx)(n.code,{children:"beforeEach"})," inside the ",(0,o.jsx)(n.code,{children:"describe"})," block. It may help to illustrate the order of execution of all hooks."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"beforeAll(() => console.log('1 - beforeAll'));\nafterAll(() => console.log('1 - afterAll'));\nbeforeEach(() => console.log('1 - beforeEach'));\nafterEach(() => console.log('1 - afterEach'));\n\ntest('', () => console.log('1 - test'));\n\ndescribe('Scoped / Nested block', () => {\n  beforeAll(() => console.log('2 - beforeAll'));\n  afterAll(() => console.log('2 - afterAll'));\n  beforeEach(() => console.log('2 - beforeEach'));\n  afterEach(() => console.log('2 - afterEach'));\n\n  test('', () => console.log('2 - test'));\n});\n\n// 1 - beforeAll\n// 1 - beforeEach\n// 1 - test\n// 1 - afterEach\n// 2 - beforeAll\n// 1 - beforeEach\n// 2 - beforeEach\n// 2 - test\n// 2 - afterEach\n// 1 - afterEach\n// 2 - afterAll\n// 1 - afterAll\n"})}),"\n",(0,o.jsx)(n.h2,{id:"order-of-execution",children:"Order of Execution"}),"\n",(0,o.jsxs)(n.p,{children:["Jest executes all describe handlers in a test file ",(0,o.jsx)(n.em,{children:"before"})," it executes any of the actual tests. This is another reason to do setup and teardown inside ",(0,o.jsx)(n.code,{children:"before*"})," and ",(0,o.jsx)(n.code,{children:"after*"})," handlers rather than inside the ",(0,o.jsx)(n.code,{children:"describe"})," blocks. Once the ",(0,o.jsx)(n.code,{children:"describe"})," blocks are complete, by default Jest runs all the tests serially in the order they were encountered in the collection phase, waiting for each to finish and be tidied up before moving on."]}),"\n",(0,o.jsx)(n.p,{children:"Consider the following illustrative test file and output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"describe('describe outer', () => {\n  console.log('describe outer-a');\n\n  describe('describe inner 1', () => {\n    console.log('describe inner 1');\n\n    test('test 1', () => console.log('test 1'));\n  });\n\n  console.log('describe outer-b');\n\n  test('test 2', () => console.log('test 2'));\n\n  describe('describe inner 2', () => {\n    console.log('describe inner 2');\n\n    test('test 3', () => console.log('test 3'));\n  });\n\n  console.log('describe outer-c');\n});\n\n// describe outer-a\n// describe inner 1\n// describe outer-b\n// describe inner 2\n// describe outer-c\n// test 1\n// test 2\n// test 3\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Just like the ",(0,o.jsx)(n.code,{children:"describe"})," and ",(0,o.jsx)(n.code,{children:"test"})," blocks Jest calls the ",(0,o.jsx)(n.code,{children:"before*"})," and ",(0,o.jsx)(n.code,{children:"after*"})," hooks in the order of declaration. Note that the ",(0,o.jsx)(n.code,{children:"after*"})," hooks of the enclosing scope are called first. For example, here is how you can set up and tear down resources which depend on each other:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"beforeEach(() => console.log('connection setup'));\nbeforeEach(() => console.log('database setup'));\n\nafterEach(() => console.log('database teardown'));\nafterEach(() => console.log('connection teardown'));\n\ntest('test 1', () => console.log('test 1'));\n\ndescribe('extra', () => {\n  beforeEach(() => console.log('extra database setup'));\n  afterEach(() => console.log('extra database teardown'));\n\n  test('test 2', () => console.log('test 2'));\n});\n\n// connection setup\n// database setup\n// test 1\n// database teardown\n// connection teardown\n\n// connection setup\n// database setup\n// extra database setup\n// test 2\n// extra database teardown\n// database teardown\n// connection teardown\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["If you are using ",(0,o.jsx)(n.code,{children:"jasmine2"})," test runner, take into account that it calls the ",(0,o.jsx)(n.code,{children:"after*"})," hooks in the reverse order of declaration. To have identical output, the above example should be altered like this:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"  beforeEach(() => console.log('connection setup'));\n+ afterEach(() => console.log('connection teardown'));\n\n  beforeEach(() => console.log('database setup'));\n+ afterEach(() => console.log('database teardown'));\n\n- afterEach(() => console.log('database teardown'));\n- afterEach(() => console.log('connection teardown'));\n\n  // ...\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"general-advice",children:"General Advice"}),"\n",(0,o.jsxs)(n.p,{children:["If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. To run only one test with Jest, temporarily change that ",(0,o.jsx)(n.code,{children:"test"})," command to a ",(0,o.jsx)(n.code,{children:"test.only"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test.only('this will be the only test that runs', () => {\n  expect(true).toBe(false);\n});\n\ntest('this test will not run', () => {\n  expect('A').toBe('A');\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you have a test that often fails when it's run as part of a larger suite, but doesn't fail when you run it alone, it's a good bet that something from a different test is interfering with this one. You can often fix this by clearing some shared state with ",(0,o.jsx)(n.code,{children:"beforeEach"}),". If you're not sure whether some shared state is being modified, you can also try a ",(0,o.jsx)(n.code,{children:"beforeEach"})," that logs data."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(63696);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);