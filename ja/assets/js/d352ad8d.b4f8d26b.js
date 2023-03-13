"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[77742],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(25773),o=(n(27378),n(35318));const r={title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},i=void 0,s={permalink:"/jest/ja/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2017-05-06-jest-20-delightful-testing-multi-project-runner.md",source:"@site/blog/2017-05-06-jest-20-delightful-testing-multi-project-runner.md",title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",description:"A few months ago we announced Jest 19 which came with major new features and was the biggest Jest release until today. Jest 20 has twice the amount of changes compared to the previous version, features a complete rewrite of the test runner, adds new testing APIs. The new release enables a new level of customization and configuration for projects all while making it effortless to upgrade. Beyond Painless JavaScript Testing, we believe Jest is now delivering a Delightful JavaScript Testing experience. Let's take a look at the best new features and changes in depth:",date:"2017-05-06T00:00:00.000Z",formattedDate:"2017\u5e745\u67086\u65e5",tags:[],readingTime:6.325,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest 22: Refinements & Custom Runners",permalink:"/jest/ja/blog/2017/12/18/jest-22"},nextItem:{title:"\ud83c\udccf Jest 19: Immersive Watch Mode & Test Platform Improvements",permalink:"/jest/ja/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements"}},l={authorsImageUrls:[void 0]},u=[{value:"Multi-Project-Runner &amp; Configuration Overhaul",id:"multi-project-runner--configuration-overhaul",level:2},{value:"New &amp; Improved Testing APIs",id:"new--improved-testing-apis",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Other Improvements",id:"other-improvements",level:2},{value:"Talks about Jest",id:"talks-about-jest",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A few months ago we announced ",(0,o.kt)("a",{parentName:"p",href:"/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements"},"Jest 19")," which came with major new features and was the biggest Jest release until today. Jest 20 has twice the amount of changes compared to the previous version, features a complete rewrite of the test runner, adds new testing APIs. The new release enables a new level of customization and configuration for projects all while making it effortless to upgrade. Beyond Painless JavaScript Testing, we believe Jest is now delivering a ",(0,o.kt)("strong",{parentName:"p"},"Delightful JavaScript Testing experience"),". Let's take a look at the best new features and changes in depth:"),(0,o.kt)("h2",{id:"multi-project-runner--configuration-overhaul"},"Multi-Project-Runner & Configuration Overhaul"),(0,o.kt)("p",null,"Until now, Jest could only operate in one project at a time. This is often cumbersome if you are working on many smaller projects that each have their own setup and configuration. With Jest 20, we rewrote the test runner completely to run many projects at the same time within a single instance of Jest, for example if you are working on a React frontend and a node.js backend. Here is a video of Jest running tests for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react"},"React"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay"},"Relay"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/yarn"},"Yarn")," and Jest all at the same time:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"multi-runner",src:n(83671).Z,width:"839",height:"520"})),(0,o.kt)("p",null,"Jest is now collapsing the usage guide after the first test run to save vertical space in the terminal."),(0,o.kt)("p",null,"Further, we completely overhauled how the configuration system works inside of Jest. You can now pass any configuration option through the CLI to overwrite the ones specified in your configuration file. Along with that, we changed Jest to look for a ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file by default which means you are now able to define a Jest configuration using JavaScript as well as being able to configure it through ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," like before. Through the addition of all these new features, you are now able to combine Jest in more powerful ways than ever before. For example, if you would like to find out which tests Jest would run given a set of changed files from a commit across multiple projects in a monorepo, you can combine cli arguments like this now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ jest --projects projectA projectB --listTests --findRelatedTests projectA/banana.js projectB/kiwi.js\n[\n  "projectA/banana.test.js",\n  "projectB/kiwi.test.js",\n  "projectB/pineapple.test.js",\n]\n')),(0,o.kt)("p",null,"This is especially useful for continuous integration (CI) systems where you may want to only run a subset of tests for Pull Requests to prevent Jest from running thousands of test files on every small change."),(0,o.kt)("p",null,"Finally, we are now properly mapping code coverage when using TypeScript and we are running code coverage for untested files in worker processes which yields significant speed ups for this feature."),(0,o.kt)("h2",{id:"new--improved-testing-apis"},"New & Improved Testing APIs"),(0,o.kt)("p",null,"We made a number of additions and improvements to the testing APIs which will help write more effective tests. We'd like to point out that all of these improvements were made entirely by community members!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Better async testing:")," Added new async/Promise support through resolves/rejects modifiers on expect: ",(0,o.kt)("inlineCode",{parentName:"li"},"expect(Promise(\u2026)).resolves.toEqual(\u2026)"),". ",(0,o.kt)("a",{parentName:"li",href:"/docs/expect#resolves"},"See documentation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Expect ",(0,o.kt)("inlineCode",{parentName:"strong"},"n")," assertions:")," Along with the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"expect.assertions(n)"),", the new ",(0,o.kt)("inlineCode",{parentName:"li"},"expect.hasAssertions()")," can be used to ensure a test has at least one assertion."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lint Plugin:")," A ",(0,o.kt)("inlineCode",{parentName:"li"},"valid-expect")," rule was added to ",(0,o.kt)("inlineCode",{parentName:"li"},"eslint-plugin-jest")," to ensure that an assertion is called after invoking ",(0,o.kt)("inlineCode",{parentName:"li"},"expect"),". This will prevent mistakes like a stray ",(0,o.kt)("inlineCode",{parentName:"li"},"expect(banana);")," with a missing assertion call."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pretty-Format Plugins:")," A number of new pretty-format plugins were added to Jest. We now pretty-print ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/immutable-js/"},"Immutable.js")," data structures and HtmlElements in assertion failures and snapshots."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom Environment:")," It is now possible to add a ",(0,o.kt)("inlineCode",{parentName:"li"},"@jest-environment node|jsdom")," annotation to the doc-block comment of a test file to use a test environment different from the default for individual tests.")),(0,o.kt)("p",null,"Here is an example of all how all the new APIs together will make testing more delightful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @jest-environment node\n */\n\ntest('compares apples and bananas', async () => {\n  expect.hasAssertions(); // Ensure this test has at least one assertion.\n\n  await expect(\n    Promise.resolve(Immutable.Map({apples: 1, bananas: 2})),\n  ).resolves.toEqual(Immutable.Map({apples: 1, bananas: 3}));\n\n  expect('banana'); // valid-expect in eslint-plugin-jest will show an error.\n});\n")),(0,o.kt)("p",null,"This example will print a test failure similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"testing-apis",src:n(14165).Z,width:"2164",height:"1638"})),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("p",null,"As with every major release, we are making a number of breaking changes to make larger changes in the future possible and to push the testing experience to a new level. This time, we tried our best to only break APIs that we don't expect to affect the majority of Jest's users:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fork of Jasmine 2.5:")," We finally decided to fork Jasmine itself and take ownership over Jest's own test runner. This will allow us to improve all aspects of the unit testing experience in the future but for now we are focused on incremental rewrites and reducing the API surface. If you see a test breaking as a result of a Jasmine API that is now missing, there should be an equivalent feature on the ",(0,o.kt)("inlineCode",{parentName:"li"},"jest")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"expect")," objects. As such, we have removed many Jasmine features that aren't generally used in most codebases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"New Snapshots on CI:")," Snapshots must always be committed along with the test and the modules they are testing. We changed Jest to not save new snapshots automatically in Continuous Integration (CI) environments or when the ",(0,o.kt)("inlineCode",{parentName:"li"},"--ci")," flag is specified. To overwrite this behavior, which is generally not recommended, the ",(0,o.kt)("inlineCode",{parentName:"li"},"--updateSnapshot")," flag can be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Babel-Polyfill:")," Jest used to load ",(0,o.kt)("inlineCode",{parentName:"li"},"babel-polyfill")," automatically when using babel-jest which resulted in memory leaks inside of Jest. In most versions of node, it is not necessary to load ",(0,o.kt)("inlineCode",{parentName:"li"},"babel-polyfill")," so we removed this auto-inclusion and instead changed Jest to only include ",(0,o.kt)("inlineCode",{parentName:"li"},"regenerator-runtime")," by default, which is commonly used to support async/await in older versions of Node.js. If you need ",(0,o.kt)("inlineCode",{parentName:"li"},"babel-polyfill"),", you can manually require it in your setup files.")),(0,o.kt)("h2",{id:"other-improvements"},"Other Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Documentation:")," Documentation is critical to share best practices and teach everyone how to write effective tests which will lead to better software. Over the last few weeks we have also expanded Jest's documentation to include a Snapshot Testing FAQ, a guide with information about how to use Jest with common JavaScript libraries as well as we documented the new features mentioned above."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Translations:")," We are now asking for your help to ",(0,o.kt)("a",{parentName:"li",href:"https://crowdin.com/project/jest-v2"},"translate the Jest documentation")," to make it easier for people to learn how to use Jest."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom Reporters:")," Jest now supports custom test reporters through the ",(0,o.kt)("inlineCode",{parentName:"li"},"reporters")," configuration option. You can finally customize the output of Jest as well as integrate it with other tools by generating reports in formats such as XML. ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration#reporters-array-modulename-modulename-options"},"See documentation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Codebase Health:")," It was only possible iterate so quickly in Jest because we spent a significant amount of time on the health of the codebase. We were one of the early adopters of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/prettier/prettier"},"prettier"),", we notably increased flow coverage, forked Jasmine to improve our test runner library and we rewrote and refactored significant portions of Jest itself to set up Jest for success in the future."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bugfixes:")," As always, we made plenty of bugfixes in Jest. The full changelog can be found in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md#jest-2000"},"Jest repository"),".")),(0,o.kt)("h2",{id:"talks-about-jest"},"Talks about Jest"),(0,o.kt)("p",null,"Recently the Jest core team and other contributors started to talk more about Jest and the experience of working on Jest at conferences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rogelio Guzman did a talk about ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?time_continue=416&v=HAuXJVI_bUs"},"Jest Snapshots and Beyond")," at React Conf."),(0,o.kt)("li",{parentName:"ul"},"I spoke about ",(0,o.kt)("a",{parentName:"li",href:"https://developers.facebook.com/videos/f8-2017/building-high-quality-javascript-tools/"},"Building High-Quality JavaScript Tools")," at Facebook's F8 conference.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"As always, this release couldn't have been possible without you, the JavaScript community. We are incredibly grateful that we get the opportunity to work on improving JavaScript testing together. If you'd like to contribute to Jest, please don't hesitate to reach out to us on ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/facebook/jest"},"GitHub")," or on ",(0,o.kt)("a",{parentName:"em",href:"https://discord.gg/j6FKKQQrW9"},"Discord"),".")))}c.isMDXComponent=!0},83671:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20-multi-runner-bca686433b2cb63c147951eedce67538.gif"},14165:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20-testing-apis-d1ff5d93e72e0aedc768bd40bd179e96.png"}}]);