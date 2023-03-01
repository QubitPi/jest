"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9343],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,d=h["".concat(l,".").concat(p)]||h[p]||c[p]||r;return n?o.createElement(d,s(s({ref:t},m),{},{components:n})):o.createElement(d,s({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(25773),a=(n(27378),n(35318));const r={title:"Jest 22: Refinements & Custom Runners",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},s=void 0,i={permalink:"/jest/ru/blog/2017/12/18/jest-22",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2017-12-18-jest-22.md",source:"@site/blog/2017-12-18-jest-22.md",title:"Jest 22: Refinements & Custom Runners",description:"Today we are announcing a new major version of Jest which refines almost all parts of Jest to provide a more solid testing foundation. Together with the Jest community we made a number of changes across the board that will help you get more out of Jest. We are also graduating the custom runners feature out of the experimental stage and added a new package, jest-worker, for parallelizing work across multiple processes. We have compiled a list of highlights below but make sure to check out the (as always) massive changelog.",date:"2017-12-18T00:00:00.000Z",formattedDate:"18 \u0434\u0435\u043a\u0430\u0431\u0440\u044f 2017\u202f\u0433.",tags:[],readingTime:7.11,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB"}],frontMatter:{title:"Jest 22: Refinements & Custom Runners",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},prevItem:{title:"Jest 23: \ud83d\udd25 Blazing Fast Delightful Testing",permalink:"/jest/ru/blog/2018/05/29/jest-23-blazing-fast-delightful-testing"},nextItem:{title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",permalink:"/jest/ru/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner"}},l={authorsImageUrls:[void 0]},u=[{value:"Good bye Node 4 &amp; welcome JSDOM 11",id:"good-bye-node-4--welcome-jsdom-11",level:2},{value:"Custom Runners + Easy parallelization with <code>jest-worker</code>",id:"custom-runners--easy-parallelization-with-jest-worker",level:2},{value:"Codeframe in test failures",id:"codeframe-in-test-failures",level:2},{value:"Easier testing of errors thrown in async code",id:"easier-testing-of-errors-thrown-in-async-code",level:2},{value:"Asynchronous test environments",id:"asynchronous-test-environments",level:2},{value:"Experimental Leak Detection",id:"experimental-leak-detection",level:2},{value:"Watch Mode Refinements",id:"watch-mode-refinements",level:2},{value:"Babel 7 support",id:"babel-7-support",level:2},{value:"Mock function improvements",id:"mock-function-improvements",level:2},{value:"Highlights from Jest 21",id:"highlights-from-jest-21",level:2},{value:"Jest Community",id:"jest-community",level:2}],m={toc:u};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Today we are announcing a new major version of Jest which refines almost all parts of Jest to provide a more solid testing foundation. Together with the Jest community we made a number of changes across the board that will help you get more out of Jest. We are also graduating the custom runners feature out of the experimental stage and added a new package, ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-worker"),", for parallelizing work across multiple processes. We have compiled a list of highlights below but make sure to check out the (as always) ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md"},"massive changelog"),"."),(0,a.kt)("h2",{id:"good-bye-node-4--welcome-jsdom-11"},"Good bye Node 4 & welcome JSDOM 11"),(0,a.kt)("p",null,"With this release we are dropping support for Node 4, mainly because one of our main dependencies, JSDOM, ended their support. Jest now comes out of the box with JSDOM 11 which features better support for SVGs, ",(0,a.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"URL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"URLSearchParams")," built in, and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/blob/master/Changelog.md"},"much more"),"."),(0,a.kt)("h2",{id:"custom-runners--easy-parallelization-with-jest-worker"},"Custom Runners + Easy parallelization with ",(0,a.kt)("inlineCode",{parentName:"h2"},"jest-worker")),(0,a.kt)("p",null,"In Jest 21 we introduced the concept of custom Jest runners. Since then, Rogelio, one of Jest's core contributors, built a number of useful runners: If you have many existing tests written using another framework but you'd like to immediately benefit from Jest's features, check out ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/package/jest-runner-mocha"},"jest-runner-mocha"),". If you have a large codebase that needs linting, ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/lencioni/status/907398856756695040"},"you may get a significant speedup")," if you run eslint within Jest using ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/package/jest-runner-eslint"},"jest-runner-eslint"),"."),(0,a.kt)("p",null,"To gain more of fine-grained control over heavy tasks parallelization (e.g. transforming files or crawling the file system), we designed a new library perfectly suited for the job. We developed a modern, Promise-based module with an approachable API, called ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-worker"),", that allows you to delegate to child processes those intensive functions. As ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-worker"),", like any other Jest package, is a part of the Jest platform, you can use it however you like even without ever using Jest itself. You'll find more in the documentation ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/package/jest-worker"},"here"),"."),(0,a.kt)("p",null,"To get a better understanding of custom runners and Jest as a platform, make sure to check out Rogelio's talk from Reactive Conf 2017: ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NtjyeojAOBs"},"Jest as a Platform"),"."),(0,a.kt)("h2",{id:"codeframe-in-test-failures"},"Codeframe in test failures"),(0,a.kt)("p",null,"In order to more easily identify which assertion is failing your test, we've added a code frame showing the context where the assertion is in order to focus on your own code. See the following example test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"test('some test', () => {\n  function someFunctionWhichShouldThrow() {\n    if (false) {\n      throw new Error();\n    }\n\n    return 'success!';\n  }\n\n  expect(someFunctionWhichShouldThrow).toThrow();\n});\n")),(0,a.kt)("p",null,"In Jest 21, we would display the following error:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"failure in Jest 21",src:n(47025).Z,width:"972",height:"650"})),(0,a.kt)("p",null,"In Jest 22, we have added a codeframe, giving more context to the failing assertions. We have also cleaned up the stack trace to remove more clutter than ever."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"failure in Jest 22",src:n(26985).Z,width:"938",height:"744"})),(0,a.kt)("h2",{id:"easier-testing-of-errors-thrown-in-async-code"},"Easier testing of errors thrown in async code"),(0,a.kt)("p",null,"You can now use ",(0,a.kt)("inlineCode",{parentName:"p"},"toThrow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"toThrowErrorMatchingSnapshot")," on promise rejections in the same way you can on synchronous errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function throwingFunction() {\n  throw new Error('This failed');\n}\n\ntest('asynchronous rejection', async () => {\n  await expect(throwingFunction()).rejects.toThrowErrorMatchingSnapshot();\n});\n")),(0,a.kt)("h2",{id:"asynchronous-test-environments"},"Asynchronous test environments"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/puppeteer/"},"Puppeteer"),", a way of programmatically interacting with a real Chromium Browser, was announced by the Google Chrome team in August, many wanted to be able to use Jest to write their tests running them in Chrome. The community have helped us out making this possible by allowing asynchronous test environments. We are still working on making this experience as good as possible, but please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/puppeteer"},"this guide")," for how to use Puppeteer with Jest, starting today."),(0,a.kt)("h2",{id:"experimental-leak-detection"},"Experimental Leak Detection"),(0,a.kt)("p",null,"We added an experimental ",(0,a.kt)("inlineCode",{parentName:"p"},"--detectLeaks")," setting to Jest that will let you know if your internal environment instance is leaked after a test execution. It will also warn you when your test suite tries to require a file after the test has finished, meaning you forgot to wait for all async operations or left something not properly cleaned. This will however not discover leaks in user land code, only in test land code; although the technology used behind it can help you (see ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-leak-detector"),"). If you are reporting a bug about Jest's memory usage, please provide a repro where ",(0,a.kt)("inlineCode",{parentName:"p"},"--detectLeaks")," will make the test suite fail. We ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/4970"},"started building a better sandboxing mechanism")," for Jest but it's not ready yet to be enabled by default. If you'd like to help, please reach out to us on discord!"),(0,a.kt)("h2",{id:"watch-mode-refinements"},"Watch Mode Refinements"),(0,a.kt)("p",null,"When using watch mode, there is now a way to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/4886"},"focus only on tests that previously failed"),". In this mode, Jest will not re-run previously passing tests which should help you iron out all test failures. Additionally, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/4841"},"we added a plugin system to watch mode"),". By adding modules to ",(0,a.kt)("inlineCode",{parentName:"p"},"watchPlugins")," in your configuration you can extend the features of the watch mode."),(0,a.kt)("h2",{id:"babel-7-support"},"Babel 7 support"),(0,a.kt)("p",null,"Jest uses Babel under the hood to power code coverage and advanced mocking features. With Jest 22, it also supports the upcoming Babel 7. You'll find more in the documentation ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started#using-babel"},"here"),"."),(0,a.kt)("h2",{id:"mock-function-improvements"},"Mock function improvements"),(0,a.kt)("p",null,"There has been a couple of changes to mock functions in Jest 22, making them even easier to use. Firstly, we added a ",(0,a.kt)("a",{parentName:"p",href:"/docs/mock-function-api#mockfnmocknamevalue"},(0,a.kt)("inlineCode",{parentName:"a"},"mockName"))," property allowing you to name your mocks, which is useful in assertion failures. We have also made the Jest mock function serializable in ",(0,a.kt)("inlineCode",{parentName:"p"},"pretty-format"),", meaning that you can snapshot test mocks. In Jest 21, ",(0,a.kt)("inlineCode",{parentName:"p"},"expect(jest.fn()).toMatchSnapshot()")," would serialize to ",(0,a.kt)("inlineCode",{parentName:"p"},"[Function]"),", in Jest 22, you might get something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"test('my mocking test', () => {\n  const mock = jest.fn().mockName('myMock');\n\n  mock('hello', {foo: 'bar'});\n\n  expect(mock).toMatchSnapshot();\n});\n\n// Serializes to:\n\nexports[`my mocking test 1`] = `\n[MockFunction myMock] {\n  \"calls\": Array [\n    Array [\n      \"hello\",\n      Object {\n        \"foo\": \"bar\",\n      },\n    ],\n  ],\n}\n`;\n")),(0,a.kt)("h2",{id:"highlights-from-jest-21"},"Highlights from Jest 21"),(0,a.kt)("p",null,"Jest 21 was released back in September, and we unfortunately never got around to write a blog post. So here is a quick summary of the main changes in version 21:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Use expect and jest-mock in the browser:")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mjackson"},"Michael Jackson")," donated his excellent ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mjackson/expect"},(0,a.kt)("inlineCode",{parentName:"a"},"expect"))," package to the Jest project. As part of that transition, the Jest core team, with much help from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/skovhus/"},"Kenneth Skovhus"),", made both ",(0,a.kt)("inlineCode",{parentName:"li"},"jest-matchers")," (renamed to ",(0,a.kt)("inlineCode",{parentName:"li"},"expect"),") and ",(0,a.kt)("inlineCode",{parentName:"li"},"jest-mock")," work in browsers. This means that while you cannot use Jest itself in browsers (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/issues/848"},"yet"),"), you can use its awesome assertions and mocks for instance as replacements for Chai and Sinon running in Mocha tests. If you are migrating from earlier ",(0,a.kt)("inlineCode",{parentName:"li"},"expect")," to the new Jest-powered ",(0,a.kt)("inlineCode",{parentName:"li"},"expect"),", you can use ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/skovhus/jest-codemods/"},(0,a.kt)("inlineCode",{parentName:"a"},"jest-codemods"))," to automate the migration."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"MIT License:")," We changed Jest's license to MIT. ",(0,a.kt)("em",{parentName:"li"},"Yay!")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Fail test suites on async errors:")," Jest used to have a bug that made it crash when errors were thrown in certain parts of async code. This was fixed by community contributors."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Faster startup:")," With Jest 21 we fine tuned Jest's startup to be more than 50% faster. The large overhead of Jest when running it on a small and fast test was always an issue for us and now this shouldn't be a reason to hold you back from using Jest any longer.")),(0,a.kt)("h2",{id:"jest-community"},"Jest Community"),(0,a.kt)("p",null,"The community around Jest is working hard to make the testing experience even greater. These are separate projects from the main Jest project, but we want to highlight some of our personal favorites here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/americanexpress/jest-image-snapshot"},"jest-image-snapshot")," \u2013 custom matcher to compare images with snapshots by American Express developers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kulshekhar/ts-jest"},"ts-jest")," \u2013 all you need to successfully run Jest within TypeScript project by ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kulshekhar/ts-jest"},"@kulshekhar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/skovhus/jest-codemods/"},"jest-codemods")," \u2013 migrate your tests from other frameworks to Jest with ease"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/negativetwelve/jest-plugins"},"jest-plugins")," \u2013 a new community project oriented around simplifying setting up test environment for specific tools, like React, or providing some handy utilities")),(0,a.kt)("p",null,"We'd also like to announce that recently we launched a new place for high quality Jest additions \u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jest-community"},"jest-community"),". It's a new GitHub organization already featuring our favorite projects, like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jest-community/vscode-jest"},"vscode-jest"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jest-community/jest-extended"},"jest-extended"),", to name a few, curated by Jest maintainers and collaborators. We've even migrated our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jest-community/eslint-plugin-jest"},"eslint-plugin-jest")," there, and already see some great contributions, which are published independently at a faster pace."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Jest Community",src:n(26138).Z,width:"2004",height:"1090"})),(0,a.kt)("p",null,"Community projects under one organisation are also a great way for us to experiment on things like automated releases, which we'd like to explore for Jest as well. They also enable us to share some common things between them, like the shape of the README for example (thanks to the webpack Community for the idea), making it easier to learn and use for all of us."),(0,a.kt)("p",null,"If you have something awesome to share, feel free to reach out to us! We'd love to share your project here."))}h.isMDXComponent=!0},26138:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/22-community-2b148613668cb789c0215015bfbc10c7.png"},47025:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/22-failure-21-a7eb296a994d13405234955abd946adc.png"},26985:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/22-failure-22-2dfad8dd25ea9b4b87a9359658f5eab4.png"}}]);