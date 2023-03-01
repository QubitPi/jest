"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5335],{35318:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(27378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var A=n.createContext({}),l=function(e){var t=n.useContext(A),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(A.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,A=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(o),g=a,d=c["".concat(A,".").concat(g)]||c[g]||h[g]||r;return o?n.createElement(d,s(s({ref:t},u),{},{components:o})):n.createElement(d,s({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=g;var i={};for(var A in t)hasOwnProperty.call(t,A)&&(i[A]=t[A]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2052:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>A,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=o(25773),a=(o(27378),o(35318));const r={title:"JavaScript Unit Testing Performance",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},s=void 0,i={permalink:"/jest/ru/blog/2016/03/11/javascript-unit-testing-performance",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2016-03-11-javascript-unit-testing-performance.md",source:"@site/blog/2016-03-11-javascript-unit-testing-performance.md",title:"JavaScript Unit Testing Performance",description:"Jest is running thousands of tests at Facebook at all times, either through continuous integration or invoked by engineers manually during development. This worked well for years even as the people working on Jest moved on to other projects within Facebook.",date:"2016-03-11T00:00:00.000Z",formattedDate:"11 \u043c\u0430\u0440\u0442\u0430 2016\u202f\u0433.",tags:[],readingTime:9.875,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"JavaScript Unit Testing Performance",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest 11.0",permalink:"/jest/ru/blog/2016/04/12/jest-11"}},A={authorsImageUrls:[void 0]},l=[{value:"Optimal Scheduling of a Test Run",id:"optimal-scheduling-of-a-test-run",level:2},{value:"Inline Requires and Lazy Mocking",id:"inline-requires-and-lazy-mocking",level:2},{value:"Repo-Sync and Caching",id:"repo-sync-and-caching",level:2},{value:"Question Everything",id:"question-everything",level:2},{value:"Adding everything up",id:"adding-everything-up",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jest is running thousands of tests at Facebook at all times, either through continuous integration or invoked by engineers manually during development. This worked well for years even as the people working on Jest moved on to other projects within Facebook."),(0,a.kt)("p",null,"As engineers added more and more tests though, we noticed the performance of Jest wasn't going to scale. Additionally, in the last year the JavaScript ecosystem has changed dramatically with the introduction of things like npm3 and Babel, which we hadn't anticipated. We formed a new Jest team to address all of these issues and we'll be sharing our progress and plans on this blog from now on."),(0,a.kt)("p",null,"Jest is a bit different from most test runners. We designed it to work well in the context of Facebook's infrastructure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monorepo")," At Facebook we have a huge monorepo that contains all of our JavaScript code. There are many reasons why this approach is advantageous for us and there is an ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=W71BTkUbdqE"},"awesome talk")," by a Google engineer that highlights all the benefits and drawbacks of monorepos."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sandboxing")," Another feature of Jest that's important to Facebook is how it virtualizes the test environment and wraps ",(0,a.kt)("inlineCode",{parentName:"li"},"require")," in order to sandbox code execution and isolate individual tests. We're even working on making Jest more modular so we can take advantage of this functionality in other non-testing related use cases."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"providesModule")," If you've looked at any of our open source JavaScript projects before, you may have noticed that we use a ",(0,a.kt)("inlineCode",{parentName:"li"},"@providesModule")," header to assign globally unique IDs to modules. This does require some custom tooling, but it allows us to reference modules without relative paths which has helped us move incredibly fast, has scaled well as our engineering organization has grown, and has fostered code sharing across the entire company. Check out ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/relay/blob/4eae620d86ed7fce1ee463c2fca88eb690d9cbde/src/container/RelayContainer.js#L9"},"RelayContainer")," for an example of how this works in practice. One downside to this approach, though, is that we're forced to read and parse our entire JavaScript codebase in order to resolve a single require statement. This would obviously be prohibitively expensive without extensive caching, especially for a short-lived process like Jest.")),(0,a.kt)("p",null,"As a result of these unique constraints, Jest may never be able to be as fast as other test runners when running on our entire suite of tests. However, engineers rarely need to run Jest on our entire test suite. Powered by static analysis in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/node-haste"},"node-haste")," project \u2013 we've been able to make the default mode for running Jest at Facebook ",(0,a.kt)("inlineCode",{parentName:"p"},"jest --onlyChanged"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"jest -o"),". In this mode we build a reverse dependency graph to find only the affected tests that need to be run based on the modules that have been changed."),(0,a.kt)("h2",{id:"optimal-scheduling-of-a-test-run"},"Optimal Scheduling of a Test Run"),(0,a.kt)("p",null,"Most of the time our static analysis determines that more than one test needs to be run. The number of affected tests can be anywhere from a couple of tests to thousands. In order to speed this process up Jest parallelizes test runs across workers. This is great because most of Facebook's development happens on remote servers with many CPU cores."),(0,a.kt)("p",null,"Recently we noticed Jest often seemed stuck ",(0,a.kt)("em",{parentName:"p"},"\u201cWaiting for 3 tests\u201d")," for up to a minute toward the end of a run. It turned out we had a few really slow tests in our codebase that were dominating the test runtime. While we were able to speed these individual tests up significantly, we also made a change in how Jest schedules test runs. Previously we used to schedule test runs based on file system traversal, which was actually quite random. Here is an example of 11 tests in gray blocks over two workers. The size of the block is the runtime of the test:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"perf-basic-scheduling",src:o(50796).Z,width:"1274",height:"427"})),(0,a.kt)("p",null,"We were randomly running a mix of fast and slow tests, and one of our slowest tests ended up running as almost all the other tests were completed, during which the second worker sat idle."),(0,a.kt)("p",null,"We made a change to schedule tests based on their file size which is usually a good proxy for how long a test is going to take. A test with a few thousand lines of code likely takes longer than a test with 15 lines of code. While this sped up the entire test run by about 10%, we ended up finding a better heuristic: now Jest stores the runtime of each test in a cache and on subsequent runs, it schedules the slowest tests to run first. Overall this helped improve the runtime of all tests by about 20%."),(0,a.kt)("p",null,"Here is an example of the same test run from before with better scheduling:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"perf-improved-scheduling",src:o(87222).Z,width:"1274",height:"427"})),(0,a.kt)("p",null,"Because we are running slow tests first, Jest can sometimes seem to take a long time to start up \u2013 we only print results after the first test has completed. For the future we are planning to run previously failed tests first, because getting that info to developers as quickly as possible matters the most."),(0,a.kt)("h2",{id:"inline-requires-and-lazy-mocking"},"Inline Requires and Lazy Mocking"),(0,a.kt)("p",null,"If you have written tests using Jasmine before, they probably look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const sum = require('sum');\ndescribe('sum', () => {\n  it('works', () => {\n    expect(sum(5, 4)).toBe(9);\n  });\n});\n")),(0,a.kt)("p",null,"One special thing we do in Jest is reset the entire module registry after every single test (call to ",(0,a.kt)("inlineCode",{parentName:"p"},"it"),") to make sure tests don't depend on each other. Before Jest, individual tests would depend on each other and internal module state often leaked between them. As engineers removed, reordered or refactored tests, some of them started to fail, making it hard for people to understand what was going on."),(0,a.kt)("p",null,"Every single test in Jest receives a fresh new copy of all modules, including new versions of all mocked dependencies which take a lot of time to generate for each test. A side effect of this is that we had to call ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," manually before every test, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let sum;\ndescribe('sum', () => {\n  beforeEach(() => {\n    sum = require('sum');\n  });\n  it('works', () => {\n    expect(sum(5, 4)).toBe(9);\n  });\n  it('works too', () => {\n    // This copy of sum is not the same as in the previous call to `it`.\n    expect(sum(2, 3)).toBe(5);\n  });\n});\n")),(0,a.kt)("p",null,"We built a babel transform called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/fbjs/blob/main/packages/babel-preset-fbjs/plugins/inline-requires.js"},"inline-requires")," that removes top-level require statements and inlines them in code. For example, the line ",(0,a.kt)("inlineCode",{parentName:"p"},"const sum = require('sum');")," will be removed from code, but every use of ",(0,a.kt)("inlineCode",{parentName:"p"},"sum")," in the file will be replaced by ",(0,a.kt)("inlineCode",{parentName:"p"},"require('sum')"),". With this transform we can write tests just like you'd expect in Jasmine and the code gets transformed into this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"describe('sum', () => {\n  it('works', () => {\n    expect(require('sum')(5, 4)).toBe(9);\n  });\n});\n")),(0,a.kt)("p",null,"A great side-effect of inline requires is that we only require the modules that we actually use within the test itself, instead of all the modules we used in the entire file."),(0,a.kt)("p",null,"Which leads to another optimization: lazy mocking. The idea is to only mock modules on demand, which combined with inline requires saves us from mocking a lot of modules and all their recursive dependencies."),(0,a.kt)("p",null,"We were able to update all tests using a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cpojer/js-codemod/blob/master/transforms/outline-require.js"},"codemod")," in no time \u2013 it was a ",(0,a.kt)("em",{parentName:"p"},"simple")," 50,000 line code change. Inline requires and lazy mocking improved the test runtime by 50%."),(0,a.kt)("p",null,"The inline-require babel plugin is not only useful for Jest but for normal JavaScript as well. It was shipped by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/voideanvalue"},"Bhuwan")," to all users of ",(0,a.kt)("a",{parentName:"p",href:"http://facebook.com/"},"facebook.com")," just a week ago and significantly improved startup time."),(0,a.kt)("p",null,"For now, if you'd like to use this transform in Jest you'll have to add it manually to your Babel configuration. We are working on ways to make this easier to opt-in."),(0,a.kt)("h2",{id:"repo-sync-and-caching"},"Repo-Sync and Caching"),(0,a.kt)("p",null,"The open source version of Jest used to be a fork of our internal version, and we'd sync Jest out only once every couple of months. This was a painful manual process that required fixing up many tests every time. We recently upgraded Jest and brought parity to all platforms (iOS, Android and web) and then enabled our sync process. Now, every change to Jest in open source is run against all of our internal tests, and there's only a single version of Jest that's consistent everywhere."),(0,a.kt)("p",null,"The first feature we got to take advantage of after unforking was the preprocessor cache. If you are using Babel together with Jest, Jest has to pre-process every JavaScript file before it can execute it. We built a caching layer so that each file, when unchanged, only has to be transformed a single time. After we unforked Jest, we were able to easily fix up the open source implementation and shipped it at Facebook. This resulted in another 50% performance win. Because the cache only works on the second-run, the cold start time of Jest was unaffected."),(0,a.kt)("p",null,"We also realized we were doing a lot of path operations when resolving relative requires. Because the module registry is reset for every test, there were thousands of calls that could be memoized. One big optimization was to add a lot more caching, not just around a single test, but also across test files. Previously, we would generate module metadata for the automocking feature once for every test file. The object a module exports never changes however, so we now share this code across test files. Unfortunately, because JavaScript and Node.js don't have shared memory, we have to do all of this work at least once per worker process."),(0,a.kt)("h2",{id:"question-everything"},"Question Everything"),(0,a.kt)("p",null,"When trying to improve performance, it's important to also dive into the systems that sit above and below your system. In the case of Jest, things like Node.js and the test files themselves, for example. One of the first things we did was to update Node.js at Facebook from the years-old 0.10 to iojs and subsequently to Node 4. The new version of V8 helped improve performance and was quite easy to upgrade to."),(0,a.kt)("p",null,"We noticed that the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," module in Node.js is slow when making thousands of path operations which was ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node/pull/5123"},"fixed in Node 5.7"),". Until we drop support for Node 4 internally at Facebook, we'll ship our own version of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/node-haste/blob/master/src/fastpath.js"},"fastpath")," module."),(0,a.kt)("p",null,"We next started questioning the outdated ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/node-haste"},"node-haste"),". As mentioned before, the entire project has to be parsed for ",(0,a.kt)("inlineCode",{parentName:"p"},"@providesModule")," headers to build a dependency graph. When this system was originally built, ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," didn't exist and our file system crawler wasn't excluding them properly."),(0,a.kt)("p",null,"In previous versions, Jest would actually read every file in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u2013 which contributed to the slow startup time of Jest. When we picked up Jest again we replaced the entire project with a new implementation, based on react-native's packager. The startup time of Jest is now less than a second even on large projects. The react-native team, specifically ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/void_0"},"David"),", ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/amasad"},"Amjad")," and ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/martinbigio"},"Martin")," did an outstanding job on this project."),(0,a.kt)("h2",{id:"adding-everything-up"},"Adding everything up"),(0,a.kt)("p",null,"A lot of the above changes improved the test runtime by 10% or sometimes even 50%. We started at a runtime of about 10 minutes for all tests, and without these improvements we'd probably be at around 20 minutes by now. After these improvements, though, it now consistently takes around 1 minute and 35 seconds to run all our tests!"),(0,a.kt)("p",null,"More importantly, adding new tests causes total runtime to grow very slowly. Engineers can write and run more tests without feeling the costs."),(0,a.kt)("p",null,"With Jest's recent 0.9 release and performance improvements from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/599"},"node-haste2 integration"),", the runtime of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay"},"Relay")," framework's test suite went down from 60 seconds to about 25 and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native"},"react-native")," test suite now finishes in less than ten seconds on a 13\u201d MacBook Pro."),(0,a.kt)("p",null,"We're very happy with the wins we've seen so far, and we're going to keep working on Jest and making it better. If you are curious about contributing to Jest, feel free get in touch on GitHub, ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/j6FKKQQrW9"},"Discord")," or Facebook :)"))}c.isMDXComponent=!0},50796:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},87222:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);