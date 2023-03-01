"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7284],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const r={title:"Jest 26: Tick Tock",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},i=void 0,s={permalink:"/jest/pt-BR/blog/2020/05/05/jest-26",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2020-05-05-jest-26.md",source:"@site/blog/2020-05-05-jest-26.md",title:"Jest 26: Tick Tock",description:"When we started rebuilding Jest five years ago our goal was to provide a batteries-included zero-configuration test runner that is approachable for beginners, extensible for almost all testing use cases and scalable to large projects. One of the instrumental releases was Jest 15 which tied everything together and provided good defaults that allowed people to run Jest often without any setup. However, this approach has a big downside as Jest installs a lot of dependencies into your projects that you may not need.",date:"2020-05-05T00:00:00.000Z",formattedDate:"5 de maio de 2020",tags:[],readingTime:6.125,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 26: Tick Tock",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest Website Upgrade",permalink:"/jest/pt-BR/blog/2021/03/09/jest-website-upgrade"},nextItem:{title:"Jest 25: \ud83d\ude80 Laying foundations for the future",permalink:"/jest/pt-BR/blog/2020/01/21/jest-25"}},l={authorsImageUrls:[void 0]},p=[{value:"New fake timers",id:"new-fake-timers",level:2},{value:"A new way to consume Jest - <code>@jest/globals</code>",id:"a-new-way-to-consume-jest---jestglobals",level:2},{value:"Native ESM support",id:"native-esm-support",level:2},{value:"Other Breaking Changes in Jest 26",id:"other-breaking-changes-in-jest-26",level:2},{value:"Stay Safe",id:"stay-safe",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When we started rebuilding Jest five years ago our goal was to provide a batteries-included zero-configuration test runner that is approachable for beginners, extensible for almost all testing use cases and scalable to large projects. One of the instrumental releases was ",(0,o.kt)("a",{parentName:"p",href:"/blog/2016/09/01/jest-15"},"Jest 15")," which tied everything together and provided good defaults that allowed people to run Jest often without any setup. However, this approach has a big downside as Jest installs a lot of dependencies into your projects that you may not need."),(0,o.kt)("p",null,"We are now beginning to address this shortcoming and are working on reducing Jest\u2019s install size while keeping it approachable and extensible. We have made the following ",(0,o.kt)("strong",{parentName:"p"},"breaking changes")," in Jest 26:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"[expect, jest-mock, pretty-format]")," Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"ES5")," build files with a new minimum of support of ES2015 (Node 8) which were only used for browser builds (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/9945"},"#9945"),")"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Migration"),": With this change, we are pushing the responsibility to bundle the affected packages to the users, rather than Jest providing them out of the box, since they know their target environments best. If you want it back, we're open to shipping these as separate packages. PRs welcome!"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"[jest-config, jest-resolve]")," Remove support for ",(0,o.kt)("inlineCode",{parentName:"p"},"browser")," field (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/9943"},"#9943"),")"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Migration"),": Install ",(0,o.kt)("inlineCode",{parentName:"p"},"browser-resolve")," module and use the following configuration:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jest": {\n    "resolver": "<rootDir>/resolver.js"\n  }\n}\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// resolver.js\nconst browserResolve = require('browser-resolve');\n\nmodule.exports = browserResolve.sync;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"TypeScript definitions requires a minimum of TypeScript v3.8 (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/9823"},"#9823"),")"))),(0,o.kt)("p",null,"With the above changes Jest 26 is now 4 MiB smaller than Jest 25.5.4 (53 \u2192 49 MiB). Please keep in mind that many dependencies like Babel are likely already part of your project. Jest's own size was reduced by 1.2 MiB (4.3 -> 3.1 MiB)."),(0,o.kt)("p",null,"While this is a good start, it isn\u2019t enough to make Jest meaningfully leaner. We are planning on gradually reducing Jest's and its dependency tree size by up to 70%. Most of the changes to reduce Jest\u2019s default setup will be small breaking changes and we want to bring the community with us as much as possible. Therefore we will make the following changes in Jest 27 and Jest 28 using a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tick%E2%80%93tock_model"},'\u201cTick-Tock" release process'),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Jest 27 will ship with a new test runner "',(0,o.kt)("inlineCode",{parentName:"li"},"jest-circus"),'" and the Node.js environment by default. ',(0,o.kt)("inlineCode",{parentName:"li"},"jest-jasmine2")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-environment-jsdom")," will still be bundled so users can keep using them by changing one-line each in the configuration."),(0,o.kt)("li",{parentName:"ul"},"Jest 28 will remove ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-jasmine2")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-environment-jsdom")," from the default distribution of Jest. The packages will still be actively maintained as part of the Jest project and be published separately. Users will need to install these packages to use them.")),(0,o.kt)("p",null,"Upon upgrading to these major releases, Jest will guide you through the necessary changes. If you\u2019d like to get ahead and migrate to the new defaults now, and your project does not require a DOM environment, you can upgrade to Jest 26 and add the following configuration options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jest": {\n    "testEnvironment": "node",\n    "testRunner": "jest-circus/runner"\n  }\n}\n')),(0,o.kt)("p",null,"Jest will continue to ship with ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," enabled by default. It currently powers a few Jest features beyond compiling modern JavaScript syntax to something understood by current versions of Node.js and browsers: It also powers Jest's code coverage and mocking of ES modules. Jest currently ships with experimental support for ",(0,o.kt)("a",{parentName:"p",href:"/blog/2020/01/21/jest-25#v8-code-coverage"},"V8 coverage")," and native support for ES Modules (more on that below!). It is not possible to mock static ES Modules per the specification without transforming the code first, so we will be encouraging patterns that work without the transformation we use Babel for today. Once V8 coverage and native ESM support stabilizes in Jest, we will also be able remove ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," as a default but we will keep maintaining it."),(0,o.kt)("h2",{id:"new-fake-timers"},"New fake timers"),(0,o.kt)("p",null,"With Jest 26 we are shipping a new implementation of fake timers based on ",(0,o.kt)("inlineCode",{parentName:"p"},"@sinonjs/fake-timers"),". We've wanted to do this for years and are happy this has finally progressed far enough to support all of Jest's existing fake timer use cases."),(0,o.kt)("p",null,"The new implementation comes with extra features such as mocking ",(0,o.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"queueMicrotask")," and more, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinonjs/fake-timers/blob/master/README.md"},"this README"),". It works transparently using the existing timer APIs like ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.runAllTimers()")," \u2013 check out the documentation ",(0,o.kt)("a",{parentName:"p",href:"/docs/timer-mocks"},"on our website"),"."),(0,o.kt)("p",null,"We are confident this implementation is ready for prime time, however we don't want to force people to rewrite their tests if they depend on subtle differences between the old and new implementation. In Jest 26, this new implementation will remain ",(0,o.kt)("em",{parentName:"p"},"opt-in")," and can be activated by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.useFakeTimers('modern')")," or by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"modern")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"timers")," option in your config if you opted all tests into fake timers previously."),(0,o.kt)("p",null,'In Jest 27 we will swap the default to the new "modern" implementation but we will keep supporting and maintaining the legacy implementation which can be used by calling ',(0,o.kt)("inlineCode",{parentName:"p"},"jest.useFakeTimers('legacy')"),". If you are unsure whether you'll be able to upgrade all your tests by the time Jest 27 rolls out, you can add this to your tests now to keep the old behavior."),(0,o.kt)("p",null,"We'd like to thank ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fatso83"},"Carl-Erik Kopseng"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/benjamingr"},"Benjamin Gruenbaum")," and other maintainers of ",(0,o.kt)("inlineCode",{parentName:"p"},"@sinonjs/fake-timers")," for their help and patience when working with us to make this happen! ",(0,o.kt)("em",{parentName:"p"},"Exciting"),"."),(0,o.kt)("h2",{id:"a-new-way-to-consume-jest---jestglobals"},"A new way to consume Jest - ",(0,o.kt)("inlineCode",{parentName:"h2"},"@jest/globals")),(0,o.kt)("p",null,"Jest has relied on globals popularized by the Jasmine testing framework and others such as ",(0,o.kt)("inlineCode",{parentName:"p"},"describe"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"it"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"expect"),". While this is a widely used pattern, many people have expressed their preference for importing testing related functions instead. To support this use case, we added a new package ",(0,o.kt)("inlineCode",{parentName:"p"},"@jest/globals")," that can be used to import testing functions: ",(0,o.kt)("inlineCode",{parentName:"p"},"import {expect, jest, test} from '@jest/globals';"),"."),(0,o.kt)("p",null,"Caveats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Currently the globals still exist in the environment but we will introduce a mode to disable globals in the future. Similarly, you cannot use ",(0,o.kt)("inlineCode",{parentName:"li"},"const jest = require('@jest/globals')")," as you'll get declaration errors because the ",(0,o.kt)("inlineCode",{parentName:"li"},"jest")," variable is still a global for now."),(0,o.kt)("li",{parentName:"ul"},"There is currently no way to add custom matchers to the TypeScript definitions when using globals like this."),(0,o.kt)("li",{parentName:"ul"},"While this allows running tests without globals, it does not allow running tests without Jest's test runner at this time.")),(0,o.kt)("h2",{id:"native-esm-support"},"Native ESM support"),(0,o.kt)("p",null,"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/blog/2020/01/21/jest-25#ecmascript-modules-support"},"Jest 25 blog post")," we have been working on native support for ECMAScript Modules. It is not stable yet but it is ready to be tested. We'd love to hear your feedback and bug reports! For an overview of the current state you can check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/9430"},"this issue"),", or browse all issues with that label ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/labels/ES%20Modules"},"ES Modules"),"."),(0,o.kt)("h2",{id:"other-breaking-changes-in-jest-26"},"Other Breaking Changes in Jest 26"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dropped support for Node 8 (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/9423"},"#9423"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[jest-environment-jsdom]")," Upgrade ",(0,o.kt)("inlineCode",{parentName:"li"},"jsdom")," to v16 (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/9606"},"#9606"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[jest-runtime]")," Remove long-deprecated ",(0,o.kt)("inlineCode",{parentName:"li"},"require.requireActual")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"require.requireMock")," methods (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/9854"},"#9854"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[jest-haste-map]")," Removed ",(0,o.kt)("inlineCode",{parentName:"li"},"providesModuleNodeModules")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/8535"},"#8535"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[jest-circus]")," Fail tests if a test takes a done callback and have return values (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/9129"},"#9129"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[jest-circus]")," Throw a proper error if a test / hooks is defined asynchronously (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/8096"},"#8096"),")")),(0,o.kt)("h2",{id:"stay-safe"},"Stay Safe"),(0,o.kt)("p",null,"We are all currently experiencing an unprecedented time of uncertainty. If you are struggling financially, we would like to use ",(0,o.kt)("a",{parentName:"p",href:"https://opencollective.com/jest"},"Jest\u2019s Open Collective fund")," to help new and existing contributors. We place ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues?q=is%3Aissue+is%3Aopen+bounty+label%3A%22Has+Bounty%22"},"bounties on some issues")," and are open to offering a bounty on any of our current open issues - you can mention that an issue should have a bounty in the issue or contact ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/cpojer"},"@cpojer via private message on Twitter"),"."),(0,o.kt)("p",null,"Please stay safe."))}m.isMDXComponent=!0}}]);