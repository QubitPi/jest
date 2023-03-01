"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2356],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=p(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},21353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(25773),i=(a(27378),a(35318));const o={title:"Jest 24: \ud83d\udc85 Refreshing, Polished, TypeScript-friendly",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},s=void 0,r={permalink:"/jest/ja/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2019-01-25-jest-24-refreshing-polished-typescript-friendly.md",source:"@site/blog/2019-01-25-jest-24-refreshing-polished-typescript-friendly.md",title:"Jest 24: \ud83d\udc85 Refreshing, Polished, TypeScript-friendly",description:"Today we are happy to announce the next major release of Jest - version 24! It's been 4 months since the last minor release, and 8 months since Jest 23, so this upgrade is a big one, with something for everyone! Highlights include built-in support for TypeScript by upgrading the Jest internals to Babel 7, fixing some long-standing issues with missing console output and performance issues when computing large diffs, and a brand new sparkling website. \u2728",date:"2019-01-25T00:00:00.000Z",formattedDate:"2019\u5e741\u670825\u65e5",tags:[],readingTime:8.63,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB"}],frontMatter:{title:"Jest 24: \ud83d\udc85 Refreshing, Polished, TypeScript-friendly",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},prevItem:{title:"Jest 25: \ud83d\ude80 Laying foundations for the future",permalink:"/jest/ja/blog/2020/01/21/jest-25"},nextItem:{title:"Supporting Jest Open Source",permalink:"/jest/ja/blog/2018/06/27/supporting-jest-open-source"}},l={authorsImageUrls:[void 0]},p=[{value:"New Website",id:"new-website",level:2},{value:"TypeScript support",id:"typescript-support",level:2},{value:"<code>test.todo</code>",id:"testtodo",level:2},{value:"Improved Assertion Messages",id:"improved-assertion-messages",level:2},{value:"Fixing old pain",id:"fixing-old-pain",level:2},{value:"Other highlights",id:"other-highlights",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"The future",id:"the-future",level:2}],h={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Today we are happy to announce the next major release of Jest - version 24! It's been 4 months since the last minor release, and 8 months since Jest 23, so this upgrade is a big one, with something for everyone! Highlights include built-in support for TypeScript by upgrading the Jest internals to Babel 7, fixing some long-standing issues with missing console output and performance issues when computing large diffs, and a brand new sparkling website. \u2728"),(0,i.kt)("p",null,"For a full list of all changes see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md"},"changelog"),"."),(0,i.kt)("h2",{id:"new-website"},"New Website"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/orta"},"@orta")," has provided a beautiful redesign of Jest's website, which has been implemented by community members ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/montogeek"},"@montogeek")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/brainkim"},"@brainkim"),"."),(0,i.kt)("p",null,"The aim of the redesign was to highlight more of what makes Jest awesome, and to decouple the idea that Jest is primarily a tool for testing React apps - you can use Jest with all sorts of projects and we want to make that obvious. You can read more about the ideas behind the redesign in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/7265"},"this issue"),"."),(0,i.kt)("h2",{id:"typescript-support"},"TypeScript support"),(0,i.kt)("p",null,"We've upgraded to Babel 7 internally for Jest 24, which comes with support for TypeScript projects. That means Jest can support transpiling TypeScript out of the box, as long as you configure Babel to use it with ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-typescript"),". One caveat to the default TypeScript support, similar to Flow, is that Babel will only strip out the type annotations to make your code valid JavaScript. It will ",(0,i.kt)("em",{parentName:"p"},"not")," typecheck your code."),(0,i.kt)("p",null,"While Jest has supported Babel 7 since version 22 released in December 2017, it required usage of a bridge module in order to fit in with Jest's support of Babel 6. In Jest 24 we have migrated entirely over to Babel 7, with great help from community member ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/milesj"},"@milesj"),". This means that setup is now easier and we can take advantage of other Babel 7 features, such as config loading and automatic ",(0,i.kt)("inlineCode",{parentName:"p"},"modules")," transpilation. Make sure to remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-core@^7.0.0-bridge.0")," as it's not needed now."),(0,i.kt)("p",null,"If you want to run typechecks while you test, you should use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-jest")),". You will need to configure the transformer, as Jest by default applies Babel to ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," (and ",(0,i.kt)("inlineCode",{parentName:"p"},".tsx"),") files. Alternatively, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," or even use a Jest runner to simultaneously transpile your TypeScript whilst running your tests! See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/azz/jest-runner-tsc"},(0,i.kt)("inlineCode",{parentName:"a"},"jest-runner-tsc"))," for more information."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started#using-typescript"},"the docs")," for more details."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you for whatever reason cannot upgrade to Babel 7, you can still use Jest 24 with ",(0,i.kt)("inlineCode",{parentName:"p"},"babel@6")," as long as you keep ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-jest")," at version 23.")),(0,i.kt)("h2",{id:"testtodo"},(0,i.kt)("inlineCode",{parentName:"h2"},"test.todo")),(0,i.kt)("p",null,"Jest 23 had a change that made tests missing an implementation throw instead of being skipped. This change was made due to feedback that accidentally skipped tests were hard to discover and hard to track down. However, this change broke the workflow for quite a few developers who used the feature to sketch out which tests to write."),(0,i.kt)("p",null,"In Jest 24, we are addressing this issue by adding an explicit ",(0,i.kt)("inlineCode",{parentName:"p"},"test.todo")," (inspired by the excellent AVA), which will be printed separately in the test summary. It allows you to quickly sketch out which tests you want to write and in the future, an ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," rule might even be able to warn you that you have forgotten to write out some tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"test.todo('invalid input should throw');\n\ntest.todo('missing options should be normalized');\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"test.todo",src:a(85413).Z,width:"2324",height:"1422"})),(0,i.kt)("h2",{id:"improved-assertion-messages"},"Improved Assertion Messages"),(0,i.kt)("p",null,"When tests fail, you need to make confident and correct decisions which changes are expected progress and which changes are unexpected regressions. It is especially important not to miss a few regressions hidden among much progress. Jest 24 makes reports when assertions fail more clear and concise for several matchers. Because the effort will continue in Jest 25, you might notice some temporary inconsistencies. If your tests never fail, then you won't get to see them - for the rest of us, it'll be easier to debug why something isn't working as expected. Thanks for the hard work by ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/ittordepam"},"@ittordepam")," and other contributors from the community."),(0,i.kt)("p",null,"You can see these changes across all these PRs: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7621"},"7621"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7557"},"7557"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7448"},"7448"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7325"},"7325"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7241"},"7241"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7152"},"7152"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7125"},"7125"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7107"},"7107"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/6961"},"6961"),"."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("p",null,"Failing assertion"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"failing assertion",src:a(26244).Z,width:"1844",height:"1246"})),(0,i.kt)("p",null,"Type mismatch"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"different types",src:a(49778).Z,width:"1844",height:"1246"})),(0,i.kt)("p",null,"Mock function not called"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mock functions",src:a(33629).Z,width:"1844",height:"1246"})),(0,i.kt)("h2",{id:"fixing-old-pain"},"Fixing old pain"),(0,i.kt)("p",null,"We've fixed a couple of really old issues in this release."),(0,i.kt)("p",null,"The first one we'd like to highlight is ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log")," statements going missing. Jest intercepts and collects all logs in order to give you a stack trace to them, as well as provide them to reporters so you can handle them however you want. However, this has led to an issue where they have simply been missing in certain edge cases. Luckily for Jest 24, ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/spion"},"@spion")," has ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/6871"},"stepped up")," and fixed this issue. Thank you very much!"),(0,i.kt)("p",null,"The second one is an issue where Jest runs out of memory if the difference in serialization of expected and received value has a huge number of insertion changes (either unexpected because of mistake in test or defect in serializer or expected because of temporary failures during test-driven development). ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/ittordepam"},"@ittordepam")," has ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/6961"},"replaced")," the previous diffing algorithm with ",(0,i.kt)("inlineCode",{parentName:"p"},"diff-sequences")," package, which should fix this issue because it uses the theoretical minimum amount of memory. It opens up possibility for word-diffs in the future, similar to what ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-diff#git-diff---word-diffltmodegt"},"git provides"),". Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/4619"},"this PR")," and don't hesitate to reach out if you want to help make that happen!"),(0,i.kt)("h2",{id:"other-highlights"},"Other highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have some improvements for ",(0,i.kt)("inlineCode",{parentName:"li"},"globalSetup")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"globalTeardown")," as well - code transformation will be applied to them similar to ",(0,i.kt)("inlineCode",{parentName:"li"},"setupFiles")," and they are now supported as part of ",(0,i.kt)("inlineCode",{parentName:"li"},"projects"),"."),(0,i.kt)("li",{parentName:"ul"},"You can ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/6143"},"configure")," Jest's snapshot location, this is mainly useful if you are building tools which use Jest in a larger build process."),(0,i.kt)("li",{parentName:"ul"},"A quirk of Jest's CLI has been that while some flags and options have been camel cased (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"runInBand"),"), others have not been (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"no-cache"),"). In Jest 24, both are recognized, meaning you can write your CLI arguments however you want."),(0,i.kt)("li",{parentName:"ul"},"We've renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"setupTestFrameworkScriptFile")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"setupFilesAfterEnv"),", and made it into an array. We hope this will make it more obvious what the options is for. We have plans to further overhaul the configuration in the next major, see the paragraph in the section below."),(0,i.kt)("li",{parentName:"ul"},"To reduce the amount of magic Jest performs to \u201cjust work\u2122\u201d, in this release we decided to drop automatic injection of ",(0,i.kt)("inlineCode",{parentName:"li"},"regenerator-runtime"),", which is sometimes used in compiled async code. Including ",(0,i.kt)("inlineCode",{parentName:"li"},"regenerator-runtime")," is not always necessary and we believe it's the user's responsibility to include it if it's needed. If you use ",(0,i.kt)("inlineCode",{parentName:"li"},"@babel/preset-env")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"targets")," set to a modern Node version (e.g. Node 6+) you will not need to include it. Please see our ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started#using-babel"},"Using Babel docs")," for more information."),(0,i.kt)("li",{parentName:"ul"},"Node.js 10 came with an experimental module ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/worker_threads.html"},"called ",(0,i.kt)("inlineCode",{parentName:"a"},"worker_threads")),", which is similar to Worker threads in the browser. ",(0,i.kt)("inlineCode",{parentName:"li"},"jest-worker"),", part of the ",(0,i.kt)("a",{parentName:"li",href:"/docs/jest-platform"},"Jest platform"),", will be able to use ",(0,i.kt)("inlineCode",{parentName:"li"},"worker_threads")," if available instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"child_process"),", which makes it even faster! ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/6676"},"Benchmarks")," show a 50% improvement. Due to its experimental nature, it's not enabled when using Jest as a test runner, but you can use it in your own projects today! We plan to enable it by default when it's promoted from experimental status in Node.js.")),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("p",null,"While all breaking changes are listed in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md"},"changelog"),", there's a few of them that are worth highlighting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We've upgraded to Micromatch 3. While this might not affect every user, it is stricter in its parsing of globs than version 2, which is used in Jest 23. Please read through ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/micromatch/micromatch/issues/133#issuecomment-404211484"},"this")," and linked issues for examples of invalid globs in case you have problems."),(0,i.kt)("li",{parentName:"ul"},"We've removed code remnants that was needed for Node 4. It was previously technically possible to run Jest 23 on Node 4 - that is no longer possible without polyfilling and transpiling."),(0,i.kt)("li",{parentName:"ul"},"Some changes to serialization of mock functions in snapshots - make sure to double check your updated snapshots after upgrading. Related ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/6381"},"PR"),"."),(0,i.kt)("li",{parentName:"ul"},"Jest no longer automatically injects ",(0,i.kt)("inlineCode",{parentName:"li"},"regenerator-runtime")," - if you get errors concerning it, make sure to configure Babel to properly transpile ",(0,i.kt)("inlineCode",{parentName:"li"},"async")," functions, using e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"@babel/preset-env"),". Related ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/7595"},"PR"),".")),(0,i.kt)("h2",{id:"the-future"},"The future"),(0,i.kt)("p",null,"We are incredibly humbled by the results in ",(0,i.kt)("a",{parentName:"p",href:"https://2018.stateofjs.com/awards/"},"State Of JS 2018"),", where Jest won the \u201cHighest Satisfaction\u201d award. Another huge thing to happen in 2018 was in October, when Jest passed 2 million weekly downloads for the first time. Thank you."),(0,i.kt)("p",null,"We are very thankful for the trust in us shown by the community, and hope to build on it in the future. We will ensure Jest 24 and future releases will continue to build upon this incredible foundation, and continue to be an integral part of JavaScript developers' toolkits."),(0,i.kt)("p",null,"This has been the first release where we have explored the idea of using our Open Collective funding to create bug bounties. This worked well in getting non-core developers involved in the implementation of the new landing page, and we're optimistic for a long running bug where Jest globals ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/2549"},"are mismatched")," from Node globals. We'd like to do more, if you have a pet bug that's a good candidate for our bounty program, please let us know. In the meantime, you can find all the tickets with a bounty via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/labels/Has%20Bounty"},"the issue label"),"."),(0,i.kt)("p",null,"We have already started to make plans for the next release of Jest 25, with the biggest planned feature being an overhaul of our configuration, which is pretty hard to grok, mainly because of overlapping option and mixing globs and regular expressions. Feedback on how you want Jest's configuration to look is very much welcome, and can be submitted in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/7185"},"this issue"),"."),(0,i.kt)("p",null,"You might also have heard that we are planning to migrate the code base from Flow to TypeScript. We are hopeful that this migration will enable even more contributors to jump in and help make 2019 even better for JavaScript testing. \ud83d\ude80 The plan is to land this in a minor release in the not too distant future. Feedback on this choice can be added to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7554"},"the RFC"),"."),(0,i.kt)("p",null,"Lastly, if you've ever wondered about how Jest is built, ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/cpojer"},"@cpojer")," has recorded a video with an architectural overview of how Jest is put together under the hood. Feel free to reach out if you have any further questions about it. The video is available on our ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture"},"website"),"."),(0,i.kt)("p",null,"Happy Jesting! \ud83c\udccf"))}u.isMDXComponent=!0},26244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/24-assertion-error-424a6b04bd7012af7d80419981d553d4.png"},49778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/24-different-types-6cdc48fef8c458eeb7b804ba60f4661e.png"},33629:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/24-mock-function-c93fb0afe32cea366976c870d89d9309.png"},85413:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/24-todo-c06adf4108c116aa230143cb8a147ae3.png"}}]);