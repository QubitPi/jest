"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[849],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(25773),o=(n(27378),n(35318));const r={id:"setup-teardown",title:"Setup and Teardown"},s=void 0,i={unversionedId:"setup-teardown",id:"version-25.x/setup-teardown",title:"Setup and Teardown",description:"Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this.",source:"@site/versioned_docs/version-25.x/SetupAndTeardown.md",sourceDirName:".",slug:"/setup-teardown",permalink:"/jest/ru/docs/25.x/setup-teardown",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"25.x",lastUpdatedBy:"Jack",lastUpdatedAt:1678699283,formattedLastUpdatedAt:"13 \u043c\u0430\u0440. 2023\u202f\u0433.",frontMatter:{id:"setup-teardown",title:"Setup and Teardown"},sidebar:"version-25.x/docs",previous:{title:"Testing Asynchronous Code",permalink:"/jest/ru/docs/25.x/asynchronous"},next:{title:"Mock Functions",permalink:"/jest/ru/docs/25.x/mock-functions"}},l={},c=[{value:"Repeating Setup For Many Tests",id:"repeating-setup-for-many-tests",level:2},{value:"One-Time Setup",id:"one-time-setup",level:2},{value:"Scoping",id:"scoping",level:2},{value:"Order of execution of describe and test blocks",id:"order-of-execution-of-describe-and-test-blocks",level:2},{value:"General Advice",id:"general-advice",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this."),(0,o.kt)("h2",{id:"repeating-setup-for-many-tests"},"Repeating Setup For Many Tests"),(0,o.kt)("p",null,"If you have some work you need to do repeatedly for many tests, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterEach"),"."),(0,o.kt)("p",null,"For example, let's say that several tests interact with a database of cities. You have a method ",(0,o.kt)("inlineCode",{parentName:"p"},"initializeCityDatabase()")," that must be called before each of these tests, and a method ",(0,o.kt)("inlineCode",{parentName:"p"},"clearCityDatabase()")," that must be called after each of these tests. You can do this with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"beforeEach(() => {\n  initializeCityDatabase();\n});\n\nafterEach(() => {\n  clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterEach")," can handle asynchronous code in the same ways that ",(0,o.kt)("a",{parentName:"p",href:"/jest/ru/docs/25.x/asynchronous"},"tests can handle asynchronous code")," - they can either take a ",(0,o.kt)("inlineCode",{parentName:"p"},"done")," parameter or return a promise. For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"initializeCityDatabase()")," returned a promise that resolved when the database was initialized, we would want to return that promise:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"beforeEach(() => {\n  return initializeCityDatabase();\n});\n")),(0,o.kt)("h2",{id:"one-time-setup"},"One-Time Setup"),(0,o.kt)("p",null,"In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Jest provides ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterAll")," to handle this situation."),(0,o.kt)("p",null,"For example, if both ",(0,o.kt)("inlineCode",{parentName:"p"},"initializeCityDatabase")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clearCityDatabase")," returned promises, and the city database could be reused between tests, we could change our test code to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"beforeAll(() => {\n  return initializeCityDatabase();\n});\n\nafterAll(() => {\n  return clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n")),(0,o.kt)("h2",{id:"scoping"},"Scoping"),(0,o.kt)("p",null,"The top level ",(0,o.kt)("inlineCode",{parentName:"p"},"before*")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"after*")," hooks apply to every test in a file. The hooks declared inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," block apply only to the tests within that ",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," block."),(0,o.kt)("p",null,"For example, let's say we had not just a city database, but also a food database. We could do different setup for different tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Applies to all tests in this file\nbeforeEach(() => {\n  return initializeCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n\ndescribe('matching cities to foods', () => {\n  // Applies only to tests in this describe block\n  beforeEach(() => {\n    return initializeFoodDatabase();\n  });\n\n  test('Vienna <3 veal', () => {\n    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);\n  });\n\n  test('San Juan <3 plantains', () => {\n    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);\n  });\n});\n")),(0,o.kt)("p",null,"Note that the top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," is executed before the ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," block. It may help to illustrate the order of execution of all hooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"beforeAll(() => console.log('1 - beforeAll'));\nafterAll(() => console.log('1 - afterAll'));\nbeforeEach(() => console.log('1 - beforeEach'));\nafterEach(() => console.log('1 - afterEach'));\ntest('', () => console.log('1 - test'));\ndescribe('Scoped / Nested block', () => {\n  beforeAll(() => console.log('2 - beforeAll'));\n  afterAll(() => console.log('2 - afterAll'));\n  beforeEach(() => console.log('2 - beforeEach'));\n  afterEach(() => console.log('2 - afterEach'));\n  test('', () => console.log('2 - test'));\n});\n\n// 1 - beforeAll\n// 1 - beforeEach\n// 1 - test\n// 1 - afterEach\n// 2 - beforeAll\n// 1 - beforeEach\n// 2 - beforeEach\n// 2 - test\n// 2 - afterEach\n// 1 - afterEach\n// 2 - afterAll\n// 1 - afterAll\n")),(0,o.kt)("h2",{id:"order-of-execution-of-describe-and-test-blocks"},"Order of execution of describe and test blocks"),(0,o.kt)("p",null,"Jest executes all describe handlers in a test file ",(0,o.kt)("em",{parentName:"p"},"before")," it executes any of the actual tests. This is another reason to do setup and teardown inside ",(0,o.kt)("inlineCode",{parentName:"p"},"before*")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"after*")," handlers rather than inside the describe blocks. Once the describe blocks are complete, by default Jest runs all the tests serially in the order they were encountered in the collection phase, waiting for each to finish and be tidied up before moving on."),(0,o.kt)("p",null,"Consider the following illustrative test file and output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('outer', () => {\n  console.log('describe outer-a');\n\n  describe('describe inner 1', () => {\n    console.log('describe inner 1');\n    test('test 1', () => {\n      console.log('test for describe inner 1');\n      expect(true).toBe(true);\n    });\n  });\n\n  console.log('describe outer-b');\n\n  test('test 1', () => {\n    console.log('test for describe outer');\n    expect(true).toBe(true);\n  });\n\n  describe('describe inner 2', () => {\n    console.log('describe inner 2');\n    test('test for describe inner 2', () => {\n      console.log('test for describe inner 2');\n      expect(false).toBe(false);\n    });\n  });\n\n  console.log('describe outer-c');\n});\n\n// describe outer-a\n// describe inner 1\n// describe outer-b\n// describe inner 2\n// describe outer-c\n// test for describe inner 1\n// test for describe outer\n// test for describe inner 2\n")),(0,o.kt)("h2",{id:"general-advice"},"General Advice"),(0,o.kt)("p",null,"If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. To run only one test with Jest, temporarily change that ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," command to a ",(0,o.kt)("inlineCode",{parentName:"p"},"test.only"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test.only('this will be the only test that runs', () => {\n  expect(true).toBe(false);\n});\n\ntest('this test will not run', () => {\n  expect('A').toBe('A');\n});\n")),(0,o.kt)("p",null,"If you have a test that often fails when it's run as part of a larger suite, but doesn't fail when you run it alone, it's a good bet that something from a different test is interfering with this one. You can often fix this by clearing some shared state with ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach"),". If you're not sure whether some shared state is being modified, you can also try a ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," that logs data."))}p.isMDXComponent=!0}}]);