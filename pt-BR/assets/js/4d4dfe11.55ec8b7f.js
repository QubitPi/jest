"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9045],{35318:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,c=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(c,s(s({ref:t},h),{},{components:n})):a.createElement(c,s({ref:t},h))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const i={title:"Jest 28: Shedding weight and improving compatibility \ud83e\udef6",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},s=void 0,r={permalink:"/jest/pt-BR/blog/2022/04/25/jest-28",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2022-04-25-jest-28.md",source:"@site/blog/2022-04-25-jest-28.md",title:"Jest 28: Shedding weight and improving compatibility \ud83e\udef6",description:"Jest 28 is finally here, and it comes with some long requested features such as support for sharding a test run across multiple machines, package exports and the ability to customize the behavior of fake timers. These are just some personal highlights, and we'll be highlighting more in this blog post.",date:"2022-04-25T00:00:00.000Z",formattedDate:"25 de abril de 2022",tags:[],readingTime:7.335,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB",imageURL:"https://avatars.githubusercontent.com/u/1404810"}],frontMatter:{title:"Jest 28: Shedding weight and improving compatibility \ud83e\udef6",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},prevItem:{title:"Jest joins OpenJS Foundation",permalink:"/jest/pt-BR/blog/2022/05/11/jest-joins-openjs"},nextItem:{title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",permalink:"/jest/pt-BR/blog/2021/05/25/jest-27"}},l={authorsImageUrls:[void 0]},p=[{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Features",id:"features",level:2},{value:"Sharding of test run",id:"sharding-of-test-run",level:3},{value:"<code>package.json</code> <code>exports</code>",id:"packagejson-exports",level:3},{value:"Fake timers",id:"fake-timers",level:3},{value:"GitHub Actions Reporter",id:"github-actions-reporter",level:3},{value:"Inline <code>testEnvironmentOptions</code>",id:"inline-testenvironmentoptions",level:3},{value:"All Node.js globals",id:"all-nodejs-globals",level:3},{value:"ECMAScript Modules",id:"ecmascript-modules",level:3},{value:"<code>data:</code> URLs",id:"data-urls",level:4},{value:"<code>import.meta.jest</code>",id:"importmetajest",level:4},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"Asynchronous resolvers",id:"asynchronous-resolvers",level:4},{value:"Asynchronous setup files",id:"asynchronous-setup-files",level:4},{value:"Using <code>globalThis</code>",id:"using-globalthis",level:4},{value:"JSDOM 19",id:"jsdom-19",level:4},{value:"TypeScript",id:"typescript",level:2},{value:"<code>expect</code>",id:"expect",level:3},{value:"Custom plugins",id:"custom-plugins",level:3},{value:"<code>jest-runner-tsd</code>",id:"jest-runner-tsd",level:3},{value:"<code>jest-light-runner</code>",id:"jest-light-runner",level:2},{value:"Future",id:"future",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}],h={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jest 28 is finally here, and it comes with some long requested features such as support for ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli#--shard"},"sharding")," a test run across multiple machines, ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#exports"},"package ",(0,o.kt)("inlineCode",{parentName:"a"},"exports"))," and the ability to customize the behavior of ",(0,o.kt)("a",{parentName:"p",href:"/docs/jest-object#fake-timers"},"fake timers"),". These are just some personal highlights, and we'll be highlighting more in this blog post."),(0,o.kt)("p",null,"Additionally, as announced in the ",(0,o.kt)("a",{parentName:"p",href:"/blog/2021/05/25/jest-27"},"Jest 27 blog post")," last year, we have removed some packages that no longer are used by default from the default installation. As a result the installation size has dropped by about 1/3."),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,o.kt)("p",null,"The list of breaking changes is long (and can be seen fully in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md#2800"},"changelog"),"), but for migration purposes, we've also written ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.x/upgrading-to-jest28"},"a guide")," you can follow. Hopefully this makes the upgrade experience as frictionless as possible!"),(0,o.kt)("p",null,"Main breaking changes likely to impact your migration are dropped support for Node 10 and 15 (but ",(0,o.kt)("em",{parentName:"p"},"not")," Node 12, which will be EOL in a few days) and some renamed configuration options."),(0,o.kt)("p",null,"Please note that both of the removed modules (",(0,o.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-jasmine2"),") are still actively maintained and tested in the same way, so the only breaking change here is that you'll need to explicitly install them."),(0,o.kt)("p",null,"The guide should hopefully make migration trivial, but note that if you use any of the packages Jest consists of directly (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-worker")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pretty-format"),"), instead of just running ",(0,o.kt)("inlineCode",{parentName:"p"},"jest"),", then you need to go through the changelog to view any breaking changes."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"Now let's talk about the new features in Jest 28, which is way more exciting! And there's quite a few of them, so buckle up."),(0,o.kt)("h3",{id:"sharding-of-test-run"},"Sharding of test run"),(0,o.kt)("p",null,"Jest now includes a new ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli#--shard"},(0,o.kt)("inlineCode",{parentName:"a"},"--shard"))," CLI option, contributed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/marionebl"},"Mario Nebl"),". It allows you to run parts of your test across different machine, and has been one of Jest's oldest feature requests."),(0,o.kt)("p",null,"Jest's own test suite on CI went from about 10 minutes to 3 on Ubuntu, and on Windows from 20 minutes to 7."),(0,o.kt)("h3",{id:"packagejson-exports"},(0,o.kt)("inlineCode",{parentName:"h3"},"package.json")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"exports")),(0,o.kt)("p",null,"Jest shipped minimal support of ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#exports"},(0,o.kt)("inlineCode",{parentName:"a"},"exports")),' in 27.3. However, it only supported the "main" entry point (',(0,o.kt)("inlineCode",{parentName:"p"},"."),"), and only if no ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," field was present in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". With Jest 28 we're excited to finally be shipping full support!"),(0,o.kt)("p",null,"Related, in Jest 27, we provided either ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," condition. In Jest 28, ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-environment-node")," will now automatically provide ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node-addons")," conditions, while ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom")," will provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"browser")," condition."),(0,o.kt)("p",null,"This has been one of the biggest compatibility issues of Jest, and hopefully this is now resolved once and for all."),(0,o.kt)("h3",{id:"fake-timers"},"Fake timers"),(0,o.kt)("p",null,'Jest 26 introduced the concept of "modern" fake timers, which uses ',(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sinonjs/fake-timers"},(0,o.kt)("inlineCode",{parentName:"a"},"@sinonjs/fake-timers"))," under the hood, and Jest 27 made it the default. In Jest 28, we are now exposing more of the underlying implementation through both configuration and runtime APIs. Huge thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mrazauskas"},"Tom Mrazauskas")," who contributed this feature!"),(0,o.kt)("p",null,"This allows you to not mock out ",(0,o.kt)("inlineCode",{parentName:"p"},"process.nextTick")," which improves compatibility with fake ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"s, or to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"advanceTimers")," which automatically advance timers."),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#faketimers-object"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"fakeTimers")," configuration")," for details."),(0,o.kt)("h3",{id:"github-actions-reporter"},"GitHub Actions Reporter"),(0,o.kt)("p",null,"Jest now ships with a reporter to be used on GitHub Actions, which will use annotations to print test errors inline."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Actions test error screenshot",src:n(95505).Z,width:"2286",height:"554"})),(0,o.kt)("p",null,"You can activate this reporter by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"github-actions")," in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#reporters-arraymodulename--modulename-options"},(0,o.kt)("inlineCode",{parentName:"a"},"reporters")," configuration option"),"."),(0,o.kt)("p",null,"Huge thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ockham"},"Bernie Reiter")," and other contributors for sticking by us and finally landing this feature."),(0,o.kt)("h3",{id:"inline-testenvironmentoptions"},"Inline ",(0,o.kt)("inlineCode",{parentName:"h3"},"testEnvironmentOptions")),(0,o.kt)("p",null,"You can now pass ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#testenvironmentoptions-object"},(0,o.kt)("inlineCode",{parentName:"a"},"testEnvironmentOptions"))," inline in a file, similar to how you can set test environment. This is useful if you want to e.g. change the URL in a single file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @jest-environment jsdom\n * @jest-environment-options {\"url\": \"https://jestjs.io/\"}\n */\n\ntest('use jsdom and set the URL in this test file', () => {\n  expect(window.location.href).toBe('https://jestjs.io/');\n});\n")),(0,o.kt)("h3",{id:"all-nodejs-globals"},"All Node.js globals"),(0,o.kt)("p",null,"If you are using the new ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental"},(0,o.kt)("inlineCode",{parentName:"a"},"fetch"))," implementation in Node v18, you might have noticed that this function is not available in Jest. It has been a long-standing issue that we have to manually copy over any globals into the test globals. With Jest 28, this is no longer an issue as we now inspect the global environment Jest itself is running in, and copy over any globals that are missing in the test environment."),(0,o.kt)("h3",{id:"ecmascript-modules"},"ECMAScript Modules"),(0,o.kt)("p",null,"Not much has changed in Jest's support for native ESM since Jest 27 came out. We continue to be blocked by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node/issues/37648"},"stabilization in Node"),", and are hopeful this situation will improve sooner rather than later!"),(0,o.kt)("p",null,"However, we have been able to add a couple of new features in Jest 28."),(0,o.kt)("h4",{id:"data-urls"},(0,o.kt)("inlineCode",{parentName:"h4"},"data:")," URLs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tbossi"},"Tommaso Bossi")," has contributed support for ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#data-imports"},(0,o.kt)("inlineCode",{parentName:"a"},"data")," URLs"),", meaning you can now inline define some JavaScript to run without using ",(0,o.kt)("inlineCode",{parentName:"p"},"eval"),"."),(0,o.kt)("h4",{id:"importmetajest"},(0,o.kt)("inlineCode",{parentName:"h4"},"import.meta.jest")),(0,o.kt)("p",null,"While you have been able to access ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"import {jest} from '@jest/globals'")," in Jest, we've received feedback that this is less ergonomical than the (seemingly, but not really) global ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," variable available in CJS. So Jest 28 ships with ",(0,o.kt)("inlineCode",{parentName:"p"},"import.meta.jest")," to allow easier access."),(0,o.kt)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,o.kt)("p",null,"That's quite a lot of features, and are my personal highlights. However, we still have many more which I'll quickly go through:"),(0,o.kt)("h4",{id:"asynchronous-resolvers"},"Asynchronous resolvers"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/IanVS"},"Ian VanSchooten")," has contributed support for ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#resolver-string"},"asynchronous resolvers"),", which enables tools like ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," to have better integrations with Jest."),(0,o.kt)("h4",{id:"asynchronous-setup-files"},"Asynchronous setup files"),(0,o.kt)("p",null,"If you have some async work you want to do when using ",(0,o.kt)("inlineCode",{parentName:"p"},"setupFiles"),", you can now export an ",(0,o.kt)("inlineCode",{parentName:"p"},"async function"),", which Jest will call and await before loading any tests."),(0,o.kt)("p",null,"Note that this feature is only available for CJS. For ESM, we recommend using top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," instead."),(0,o.kt)("h4",{id:"using-globalthis"},"Using ",(0,o.kt)("inlineCode",{parentName:"h4"},"globalThis")),(0,o.kt)("p",null,"Internally, Jest has been using ",(0,o.kt)("inlineCode",{parentName:"p"},"global")," to refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Global_object"},"global environment"),". However, since this only exists in Node, and not browsers (",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"), this led to incompatibility when attempting to use Jest's modules in another environment."),(0,o.kt)("p",null,"Jest 28 uses ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis"},(0,o.kt)("inlineCode",{parentName:"a"},"globalThis"))," instead, which works in all environments."),(0,o.kt)("h4",{id:"jsdom-19"},"JSDOM 19"),(0,o.kt)("p",null,"While, as mentioned, Jest no longer ships ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom")," in the default installation, it is still actively maintained. As part of that, Jest 28 has upgraded from ",(0,o.kt)("inlineCode",{parentName:"p"},"jsdom@16")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"jsdom@19"),"."),(0,o.kt)("h2",{id:"typescript"},"TypeScript"),(0,o.kt)("p",null,"If you use Jest with TypeScript, either in your tests or when writing plugins such as custom runners, Jest 28 comes with extensive improvements to our types. Here's a non-exhaustive list of the changes in Jest 28."),(0,o.kt)("h3",{id:"expect"},(0,o.kt)("inlineCode",{parentName:"h3"},"expect")),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"expect"),"'s own types (either directly, or via ",(0,o.kt)("inlineCode",{parentName:"p"},"import {expect} from '@jest/globals'"),"), it's now finally possible to add custom matchers. See our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/expect-extend"},"example")," for how to do this."),(0,o.kt)("h3",{id:"custom-plugins"},"Custom plugins"),(0,o.kt)("p",null,"If you write a custom runner, test reporter, resolver or something else, we now export more types that should help you type these more correctly. This is a moving target, so if you are the author of something pluggable in Jest and the types aren't as useful as they could be, please file an issue!"),(0,o.kt)("h3",{id:"jest-runner-tsd"},(0,o.kt)("inlineCode",{parentName:"h3"},"jest-runner-tsd")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/jest-community/jest-runner-tsd"},(0,o.kt)("inlineCode",{parentName:"a"},"jest-runner-tsd"))," is a custom runner for running type tests. This is what Jest uses itself to test our types, and we hope it can also be used by others! As its name implies, it is based on ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/package/tsd"},(0,o.kt)("inlineCode",{parentName:"a"},"tsd")),", although it under the hood uses the fork ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/package/tsd-lite"},(0,o.kt)("inlineCode",{parentName:"a"},"tsd-lite")),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"All of these improvements and fixes has been contributed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mrazauskas"},"Tom Mrazauskas"),". Thank you so much, Tom! \ud83d\udc4f"),(0,o.kt)("p",null,"Lastly, the minimum support version of TypeScript is now 4.3."),(0,o.kt)("h2",{id:"jest-light-runner"},(0,o.kt)("inlineCode",{parentName:"h2"},"jest-light-runner")),(0,o.kt)("p",null,"The last thing we want to highlight in this blog post, is a very cool new Jest runner, created by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nicolo-ribaudo"},"Nicol\xf2 Ribaudo"),", called ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jest-light-runner"},(0,o.kt)("inlineCode",{parentName:"a"},"jest-light-runner")),". This takes almost all of the DX Jest is known for, and speeds it way up by being a smaller abstraction on top of Node. Babel's tests became almost twice as fast after migrating. While there are caveats, the existence of this runner should make it even easier for people who have smaller Node modules to test to choose Jest. Thanks, Nicol\xf2!"),(0,o.kt)("h2",{id:"future"},"Future"),(0,o.kt)("p",null,"While Jest 28 came almost a year after Jest 27, Jest 29 will be coming sooner, probably in just a few months. The current plan then is to just have one breaking change (except dropping Node versions), and that is to default ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#snapshotformat-object"},(0,o.kt)("inlineCode",{parentName:"a"},"snapshotFormat"))," to ",(0,o.kt)("inlineCode",{parentName:"p"},"{escapeString: false, printBasicPrototype: false}"),". This makes snapshots both more readable and more copy-pasteable."),(0,o.kt)("p",null,"This will of course be possible to override if you don't want to change, but you can also use those options today if you don't want to wait!"),(0,o.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,o.kt)("p",null,"Jest 28 contains contributions from more than 60 people, of which more than two thirds are first time contributors. Thank you so much to all contributors, old and new. Without you the project wouldn't be nearly as good as it is! I'd particularly like to thank ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mrazauskas"},"Tom Mrazauskas")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/F3n67u"},"Feng Yu")," for all their contributions, from code, to issue triaging to debugging, that made Jest 28 what it is. Thank you! \ud83d\ude4f"),(0,o.kt)("p",null,"Thanks for reading, and happy Jesting! \ud83c\udccf"))}u.isMDXComponent=!0},95505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/28-gh-actions-reporter-1ee03f15b770cc9e04bb15ad1a532e1d.png"}}]);