"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4e3],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61526:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const i={title:"Jest 15.0: New Defaults for Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},s=void 0,r={permalink:"/jest/pt-BR/blog/2016/09/01/jest-15",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2016-09-01-jest-15.md",source:"@site/blog/2016-09-01-jest-15.md",title:"Jest 15.0: New Defaults for Jest",description:"We spent the past year making Jest faster, easier to configure, added tons of features and built snapshot testing. However, there were two areas where we invested very little we can move fast and improve the framework for Facebook and the open source community at light-speed. Jest's goal is to come with batteries included and to require as little configuration as necessary. We recently got a chance to explain our philosophy on a create-react-app issue.",date:"2016-09-01T00:00:00.000Z",formattedDate:"1 de setembro de 2016",tags:[],readingTime:7.205,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 15.0: New Defaults for Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest 16.0: Turbocharged CLI & Community Update",permalink:"/jest/pt-BR/blog/2016/10/03/jest-16"},nextItem:{title:"Jest 14.0: React Tree Snapshot Testing",permalink:"/jest/pt-BR/blog/2016/07/27/jest-14"}},l={authorsImageUrls:[void 0]},p=[{value:"New CLI error messages and summaries",id:"new-cli-error-messages-and-summaries",level:2},{value:"New watch command",id:"new-watch-command",level:2},{value:"jest-react-native improvements",id:"jest-react-native-improvements",level:2},{value:"Buffered Console Messages",id:"buffered-console-messages",level:2},{value:"Disabled Automocking",id:"disabled-automocking",level:2},{value:"Test File Patterns",id:"test-file-patterns",level:2},{value:"Module Registry Persistence",id:"module-registry-persistence",level:2},{value:"Real vs Fake Timers",id:"real-vs-fake-timers",level:2},{value:"setupEnvScriptFile vs setupFiles",id:"setupenvscriptfile-vs-setupfiles",level:2},{value:"Rewritten Code Coverage Support",id:"rewritten-code-coverage-support",level:2},{value:"Other Improvements",id:"other-improvements",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We spent the past year making Jest ",(0,o.kt)("a",{parentName:"p",href:"/blog/2016/03/11/javascript-unit-testing-performance"},"faster"),", ",(0,o.kt)("a",{parentName:"p",href:"/blog/2016/04/12/jest-11"},"easier to configure"),", ",(0,o.kt)("a",{parentName:"p",href:"/blog/2016/06/22/jest-13"},"added tons of features")," and built ",(0,o.kt)("a",{parentName:"p",href:"/blog/2016/07/27/jest-14"},"snapshot testing"),". However, there were two areas where we invested very little: the CLI output and user experience. With Jest 15 we are changing the framework radically to make it easier to use both for beginners and experienced users. We are excited that our investment in Jest is now paying off: we can move fast and improve the framework for Facebook and the open source community at light-speed. Jest's goal is to come with batteries included and to require as little configuration as necessary. We recently got a chance to explain our philosophy on a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/create-react-app/pull/250#issuecomment-237098619"},"create-react-app issue"),"."),(0,o.kt)("p",null,"The most important change to talk about is a set of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/1511"},"new defaults"),". If you are an existing Jest user you will very likely need to update your configuration for Jest 15. In most cases it will simplify your setup and Jest will provide useful error messages during the upgrade. All of the new defaults can be disabled to suit your needs, but we still consider the disabled features critical for Jest in certain situations and will continue to use and support them at Facebook long-term. Our ",(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"API documentation")," was also completely rewritten to reflect these changes. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/pull/7625/files"},"This pull request for React")," highlights some of the changes necessary for existing projects."),(0,o.kt)("h2",{id:"new-cli-error-messages-and-summaries"},"New CLI error messages and summaries"),(0,o.kt)("p",null,"As part of our effort to remove Jasmine incrementally within Jest, replacing all Jasmine matchers was almost completed. A lot of time was spent tweaking every error message for every matcher to give the best signal to users when a test is failing \u2013 the time when Jest should provide the most value to you. In addition to printing the expected and received values, a diff is printed for the ",(0,o.kt)("inlineCode",{parentName:"p"},"toBe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"toEqual")," matchers to help spot mistakes. More colors were added and relevant files from stack traces are highlighted more prominently."),(0,o.kt)("p",null,"Here is a comparison of the before and after on a light terminal: ",(0,o.kt)("img",{alt:"failure1",src:a(81048).Z,width:"2414",height:"1422"})," It also works well with darker colors: ",(0,o.kt)("img",{alt:"failure2",src:a(56020).Z,width:"2442",height:"850"})),(0,o.kt)("h2",{id:"new-watch-command"},"New watch command"),(0,o.kt)("p",null,"We completely rewrote ",(0,o.kt)("inlineCode",{parentName:"p"},"jest --watch")," to be more interactive. It can now switch between running all tests or only test files related to changed files by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"o"),". By pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," a prompt appears that allows to specify a test pattern to focus on a specific set of files. Snapshot tests can be updated by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"u"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"watch",src:a(92849).Z,width:"858",height:"575"})),(0,o.kt)("h2",{id:"jest-react-native-improvements"},"jest-react-native improvements"),(0,o.kt)("p",null,"Mocks for ",(0,o.kt)("inlineCode",{parentName:"p"},"ListView"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TextInput"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ActivityIndicator"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," and more were added. The existing mocks were updated to use the real implementations and existing snapshots likely have to be updated when upgrading to Jest 15. A ",(0,o.kt)("inlineCode",{parentName:"p"},"mockComponent")," function was added to ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-react-native")," that can be used to mock native components:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('MyNativeComponent', () => {\n  const jestReactNative = require('jest-react-native');\n  return jestReactNative.mockComponent('MyNativeComponent');\n});\n")),(0,o.kt)("p",null,"There have also been a number of improvements around mocking images, the fetch module and other native APIs."),(0,o.kt)("h2",{id:"buffered-console-messages"},"Buffered Console Messages"),(0,o.kt)("p",null,"Jest parallelizes test runs across workers to maximize performance. Previously Jest used to forward console messages from workers to the parent and printed them immediately. When running multiple tests in parallel, it was often hard to find out which test and which module was calling a log function. In Jest 15, all console messages are buffered and printed together with individual test results. In addition the file and line number of the log call is printed so the code can easily be inspected."),(0,o.kt)("p",null,"Compare the output of the previous version of Jest and Jest 15: ",(0,o.kt)("img",{alt:"console",src:a(39986).Z,width:"2358",height:"1162"})),(0,o.kt)("h2",{id:"disabled-automocking"},"Disabled Automocking"),(0,o.kt)("p",null,"Automocking is now disabled by default in Jest. This is by far the most confusing feature for new users and in many ways it doesn't make sense for small projects. We introduced automocking at Facebook and it worked great for us when unit testing was adopted in a large existing code base with few existing tests, but over time it felt like people spent more time fighting with mocked/unmocked modules than it would have taken them to write a test normally. We also noticed that library authors often require a huge number of basic modules that always have to be manually unmocked. Even for Jest itself we realized that the majority of tests had automocking disabled manually. We still believe that explicit automocking can be incredibly valuable. This change simply trades implicit mocks for explicit mocks via calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.mock(moduleName)"),"."),(0,o.kt)("p",null,"If you would still like to use automocking by default, enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"automock")," setting in your configuration or manually call ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.enableAutomock()")," in your test or setup file."),(0,o.kt)("h2",{id:"test-file-patterns"},"Test File Patterns"),(0,o.kt)("p",null,"Not everyone uses the same convention of using a ",(0,o.kt)("inlineCode",{parentName:"p"},"__tests__")," folder to store tests. Jest 15 also looks for files ending in ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".test.js"),", two popular community standards. Jest 15 also removes the ",(0,o.kt)("inlineCode",{parentName:"p"},"testDirectoryName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"testFileExtensions")," configuration options and asks users to switch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"testRegex")," option when the old configuration options are used."),(0,o.kt)("h2",{id:"module-registry-persistence"},"Module Registry Persistence"),(0,o.kt)("p",null,"Jest used to implicitly reset all modules before each test and we recommended requiring modules in ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," or inside of tests. This is useful when modules have local state that shouldn't be shared between tests. However, two big shifts happened: ES modules with the top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," syntax and a renewed interest in writing stateless functional modules."),(0,o.kt)("p",null,"This has lead to numerous incompatibilities. We also noticed that at Facebook we weren't even using this implicit reset. Instead we relied on explicit calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.resetModules()")," which puts engineers in control on when to wipe away all state."),(0,o.kt)("p",null,"Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const React1 = require('react');\njest.resetModules();\nconst React2 = require('react');\n\nReact1 !== React2; // These two are separate copies of React.\n")),(0,o.kt)("p",null,"The call to ",(0,o.kt)("inlineCode",{parentName:"p"},"resetModules")," wipes away the require cache. A second call to require the same module will result in a new instantiation of the same module and all of its dependencies. This feature is especially useful when dealing with modules that have side effects, like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/3bbf32a239fc4aad8cc6928a787f235bd86fecac/packages/jest-haste-map/src/__tests__/index-test.js#L64"},"jest-haste-map"),"."),(0,o.kt)("p",null,"We believe it is better to put users in control so we disabled the implicit reset. Modules can be reset using ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.resetModules()")," in code and the ",(0,o.kt)("inlineCode",{parentName:"p"},"resetModules")," option can be enabled in the configuration to bring back the previous behavior."),(0,o.kt)("h2",{id:"real-vs-fake-timers"},"Real vs Fake Timers"),(0,o.kt)("p",null,"By default Jest used to mock all timer functions like ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"process.nextTick")," and provided an API ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.runAllTimers()")," to advance timers programatically. This is useful when a piece of code sets a long timeout that we don't want to wait for in a test."),(0,o.kt)("p",null,"However we found that most of the time the use cases are quite isolated. ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial-async"},"Async programming")," has also become much simpler in our test runner. Jest now uses the real timers by default."),(0,o.kt)("p",null,"You can still override this by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},'"timers": "fake"')," in the configuration or by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.useRealTimers()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.useFakeTimers()")," global switches."),(0,o.kt)("h2",{id:"setupenvscriptfile-vs-setupfiles"},"setupEnvScriptFile vs setupFiles"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"setupEnvScriptFile")," configuration option has been deprecated for a while. Jest 15 removes it completely and replaces it with ",(0,o.kt)("inlineCode",{parentName:"p"},"setupFiles"),". This option expects an array of file paths that are loaded in order before a test file is executed."),(0,o.kt)("h2",{id:"rewritten-code-coverage-support"},"Rewritten Code Coverage Support"),(0,o.kt)("p",null,"Code coverage in Jest can be used through ",(0,o.kt)("inlineCode",{parentName:"p"},"jest --coverage")," and requires no additional packages or configuration. Code coverage support was completely rewritten and a new ",(0,o.kt)("inlineCode",{parentName:"p"},"collectCoverageFrom")," option was added to collect code coverage information from entire projects, including ",(0,o.kt)("strong",{parentName:"p"},"untested files"),". Note that this option uses globs as we are hoping to further simplify configuration options in the future and provide a simpler alternative to regular expressions. See Jest's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/9088f6517813f6c089cf52e980d6579511dcde88/package.json#L47"},"package.json")," for an example."),(0,o.kt)("h2",{id:"other-improvements"},"Other Improvements"),(0,o.kt)("p",null,"A huge number of other improvements were also made:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improved performance of small test runs."),(0,o.kt)("li",{parentName:"ul"},"Jest now uses verbose mode when only a single test file is executed."),(0,o.kt)("li",{parentName:"ul"},"Added an ",(0,o.kt)("inlineCode",{parentName:"li"},"--env")," option to override the configured test environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"moduleNameMapper")," now uses a resolution algorithm."),(0,o.kt)("li",{parentName:"ul"},"Jest now works with paths that have special characters in them, like parenthesis."),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"global.global")," to the node environment."),(0,o.kt)("li",{parentName:"ul"},"Fixed ",(0,o.kt)("inlineCode",{parentName:"li"},"babel-plugin-jest-hoist"),"'s invalid error when a random user function was called ",(0,o.kt)("inlineCode",{parentName:"li"},"mock"),"."),(0,o.kt)("li",{parentName:"ul"},"Fix ",(0,o.kt)("inlineCode",{parentName:"li"},"testEnvironment")," resolution to prefer ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-environment-{name}")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"{name}")," only. This prevents a module collision when using ",(0,o.kt)("inlineCode",{parentName:"li"},"jsdom")," as test environment."),(0,o.kt)("li",{parentName:"ul"},"Improvements to Jest's own test infra by merging integration and unit tests. Code coverage is now collected for Jest.")),(0,o.kt)("p",null,"We are happy when looking back at all the changes we have made together with the help from the community and couldn't be more excited to make Jest even better over the course of the next few months. Please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues"},"file an issue")," if something isn't working as expected and send us pull requests."),(0,o.kt)("p",null,"Next up: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/1480"},"Concurrent Reporter"),"."))}u.isMDXComponent=!0},39986:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-console-5050b2c2d39cedc5bff49baa56bb78a3.png"},81048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-failure1-18a216b24eb5641ffe2f700795be8738.png"},56020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-failure2-0638fb4e0e8ef964763fab8c4bebd23c.png"},92849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-watch-951ac33b263d3ee8522e35b8836b1f88.gif"}}]);