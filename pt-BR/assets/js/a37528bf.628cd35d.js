"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[61679],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,d=u["".concat(l,".").concat(c)]||u[c]||h[c]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const o={title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",author:"Tim Seckinger",authorURL:"https://github.com/jeysal",authorImageURL:"https://avatars.githubusercontent.com/u/16069751"},i=void 0,s={permalink:"/jest/pt-BR/blog/2021/05/25/jest-27",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2021-05-25-jest-27.md",source:"@site/blog/2021-05-25-jest-27.md",title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",description:"In the Jest 26 blog post about a year ago, we announced that after two major releases with few breaking changes, Jest 27 will flip some switches to set better defaults for projects that are new or can migrate smoothly. This gives us the opportunity to remove some packages from the default distribution of Jest 28 and publish them as separately installable and pluggable modules instead. Everyone on the new defaults can benefit from a smaller install size, while people needing these packages can still install them separately.",date:"2021-05-25T00:00:00.000Z",formattedDate:"25 de maio de 2021",tags:[],readingTime:6.54,hasTruncateMarker:!0,authors:[{name:"Tim Seckinger",url:"https://github.com/jeysal",imageURL:"https://avatars.githubusercontent.com/u/16069751"}],frontMatter:{title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",author:"Tim Seckinger",authorURL:"https://github.com/jeysal",authorImageURL:"https://avatars.githubusercontent.com/u/16069751"},prevItem:{title:"Jest 28: Shedding weight and improving compatibility \ud83e\udef6",permalink:"/jest/pt-BR/blog/2022/04/25/jest-28"},nextItem:{title:"Jest Website Upgrade",permalink:"/jest/pt-BR/blog/2021/03/09/jest-website-upgrade"}},l={authorsImageUrls:[void 0]},p=[{value:"Feature updates",id:"feature-updates",level:2},{value:"Flipping defaults",id:"flipping-defaults",level:2},{value:"Features coming with breaking changes",id:"features-coming-with-breaking-changes",level:2},{value:"Miscellaneous breaking changes",id:"miscellaneous-breaking-changes",level:2}],m={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/blog/2020/05/05/jest-26"},"Jest 26 blog post")," about a year ago, we announced that after two major releases with few breaking changes, Jest 27 will flip some switches to set better defaults for projects that are new or can migrate smoothly. This gives us the opportunity to remove some packages from the default distribution of Jest 28 and publish them as separately installable and pluggable modules instead. Everyone on the new defaults can benefit from a smaller install size, while people needing these packages can still install them separately."),(0,r.kt)("p",null,"With the first major change of defaults since the ",(0,r.kt)("a",{parentName:"p",href:"/blog/2016/09/01/jest-15"},"New Defaults for Jest")," that came with the seminal version 15, Jest 27 is now here, to keep Jest fast, lean, and relevant in the future. We will explain those changes of defaults and other notable breaking changes in this post, but first, let's get into some exciting new features!"),(0,r.kt)("h2",{id:"feature-updates"},"Feature updates"),(0,r.kt)("p",null,"Firstly, the interactive mode you may know from reviewing and updating failed snapshots can now also be used to ",(0,r.kt)("strong",{parentName:"p"},"step through failed tests")," one at a time. Credit goes to first-time contributor ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NullDivision"},"@NullDivision")," for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/10858"},"implementing")," this feature!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Interactive failed test run",src:n(54156).Z,width:"2416",height:"1289"})),(0,r.kt)("p",null,"Speaking of snapshots, one of the more exciting features we've shipped in recent years are Inline Snapshots, which ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/6380"},"landed")," in a minor release of Jest 23 almost three years ago. However, they came with the restriction that projects wanting to utilize them must be using ",(0,r.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," to format their code, because that's what Jest would use to make sure the file it writes the snapshots into remains properly formatted.",(0,r.kt)("br",{parentName:"p"}),"\n","And so for most of these years, we've had a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/7792"},"pull request")," in the pipeline to eliminate this restriction and allow using ",(0,r.kt)("strong",{parentName:"p"},"Inline Snapshots without Prettier"),". It has amassed well above a hundred comments, not even taking into account PRs split out from it and landed first, and even changed owner once after the initial submission by another first-time contributor, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mmkal"},"@mmkal")," under the hilarious working title 'Uglier Inline Snapshots'. With the stellar rise of Prettier in recent times, this improvement is now maybe less needed than back in 2018, but still, we know that feeling of getting into a project that does not use Prettier, and suddenly not being able to use inline snapshots anymore. Nevermore!"),(0,r.kt)("p",null,"The main reason why it took us so long to land this was, somewhat surprisingly, an out of memory error on our build pipeline. It turns out that the dependencies we load for each test file to perform the parsing, snapshot insertion, and printing do incur a significant time and memory overhead.",(0,r.kt)("br",{parentName:"p"}),"\n","So with some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/9898"},"tricks"),", we've ",(0,r.kt)("strong",{parentName:"p"},"speed up the initialization per test file")," by roughly 70% compared to Jest 26. Note that you will almost certainly not see this big of a performance improvement on your project\u2014you would need a lot of test files that each run very quickly to best notice this, and the overhead when using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#testenvironment-string"},"JSDOM environment")," dwarfs any such improvement."),(0,r.kt)("p",null,"In other news, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/9430"},"native ESM support")," is progressing, but some major complexities, for instance around mocking, are still ahead of us, and we continue to observe the migration to ESM as a huge ecosystem effort, where Node and a lot of crucial tools and packages all have to rely on each other to deliver an overall compelling experience.",(0,r.kt)("br",{parentName:"p"}),"\n","ESM support ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/11167"},"for plugging modules into Jest")," is more advanced\u2014custom runners, reporters, watch plugins, and many other modules can already be loaded as ES modules."),(0,r.kt)("p",null,"We've also merged ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/9351"},"a PR")," to be able to deal with test files symlinked into the test directory, a feature much wanted by users of ",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build/"},"Bazel"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/9504"},"Another PR")," enabled ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"},(0,r.kt)("inlineCode",{parentName:"a"},"transform"),"s")," to be asynchronous, a requirement to support transpilation through tools such as ",(0,r.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.snowpack.dev/"},"Snowpack"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," effectively."),(0,r.kt)("h2",{id:"flipping-defaults"},"Flipping defaults"),(0,r.kt)("p",null,"Up until now, if you were using Jest in its default configuration, you were\u2014perhaps unknowingly\u2014running some code forked many years ago from the test runner ",(0,r.kt)("a",{parentName:"p",href:"https://jasmine.github.io/2.0/introduction"},"Jasmine 2.0")," that provides test framework functions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"describe"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"it"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach"),". In 2017, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aaronabramov"},"Aaron Abramov")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/3668"},"initially wrote")," a ",(0,r.kt)("strong",{parentName:"p"},"replacement for the Jasmine code")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-circus"),", meant to improve error messages, maintainability, and extensibility.",(0,r.kt)("br",{parentName:"p"}),"\n","After years of large-scale use at Facebook and of course in Jest itself, as well as recent adoption in ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app"),", we are now confident that ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-circus")," is highly compatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-jasmine2")," and should work in most environments with little to no migration work. There may be minor differences in execution order and strictness, but we expect no major upgrade difficulties other than for code relying on Jasmine-specific APIs such as ",(0,r.kt)("inlineCode",{parentName:"p"},"jasmine.getEnv()"),". If you rely extensively on such APIs, you can opt back in to the Jasmine-based test runner by ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#testrunner-string"},"configuring")," ",(0,r.kt)("inlineCode",{parentName:"p"},'"testRunner": "jest-jasmine2"'),"."),(0,r.kt)("p",null,"Running tests in a ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#testenvironment-string"},"JSDOM environment")," incurs a significant performance overhead. Because this was the default behavior of Jest unless otherwise configured up until now, users who are writing Node apps, for example, may not even know they are given an expensive DOM environment that they do not even need.",(0,r.kt)("br",{parentName:"p"}),"\n","For this reason, we are ",(0,r.kt)("strong",{parentName:"p"},"changing the default test environment")," from ",(0,r.kt)("inlineCode",{parentName:"p"},'"jsdom"')," to ",(0,r.kt)("inlineCode",{parentName:"p"},'"node"'),". If you are affected by this change because you use DOM APIs and do not have the test environment explicitly configured, you should be receiving an error when e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," is accessed, and you can configure ",(0,r.kt)("inlineCode",{parentName:"p"},'"testEnvironment": "jsdom"')," or use ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#testenvironment-string"},"per-file environment configuration")," to resolve this.",(0,r.kt)("br",{parentName:"p"}),"\n","For mixed projects where some tests require a DOM environment but others don't, we recommend using the fast ",(0,r.kt)("inlineCode",{parentName:"p"},'"node"')," environment by default and declaring exactly those tests that need the DOM using ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#testenvironment-string"},"docblocks"),".",(0,r.kt)("br",{parentName:"p"}),"\n","In the next major, we plan to also eliminate ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-jasmine2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom")," from the Jest dependency tree and require them to be installed explicitly, so that many users can profit from a smaller install size with less clutter that they don't need."),(0,r.kt)("p",null,"Another default that we are changing affects Fake Timers aka ",(0,r.kt)("a",{parentName:"p",href:"/docs/timer-mocks"},"Timer Mocks"),'. We introduced an opt-in "modern" implementation of Fake Timers in Jest 26 accessed transparently through the same API, but with much more comprehensive mocking, such as for ',(0,r.kt)("inlineCode",{parentName:"p"},"Date")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"queueMicrotask"),".",(0,r.kt)("br",{parentName:"p"}),"\n","This ",(0,r.kt)("strong",{parentName:"p"},"modern fake timers implementation will now be the default"),". If you are among the unlucky few who are affected by the subtle implementation differences too heavily to migrate, you can get back the old implementation using ",(0,r.kt)("inlineCode",{parentName:"p"},'jest.useFakeTimers("legacy")')," or, if you are enabling fake timers globally via ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#timers-string"},"configuration"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"timers": "legacy"'),"."),(0,r.kt)("h2",{id:"features-coming-with-breaking-changes"},"Features coming with breaking changes"),(0,r.kt)("p",null,"We introduced a few more small breaking changes to help you avoid mistakes by disallowing some things that can easily happen unintentionally:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The same ",(0,r.kt)("inlineCode",{parentName:"li"},"done")," test callback may not be called more than once,"),(0,r.kt)("li",{parentName:"ul"},"calling ",(0,r.kt)("inlineCode",{parentName:"li"},"done")," and returning a Promise may not be combined,"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"describe")," block must not return anything,")),(0,r.kt)("p",null,"and we ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/10512"},"made some TypeScript types stricter"),"."),(0,r.kt)("p",null,"Modules used in the following configuration options are now transformed like the rest of your code, which may be breaking if you relied on them being loaded as-is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testEnvironment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testRunner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshotResolver"))),(0,r.kt)("h2",{id:"miscellaneous-breaking-changes"},"Miscellaneous breaking changes"),(0,r.kt)("p",null,"We removed some long-deprecated functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jest.addMatchers")," (use ",(0,r.kt)("inlineCode",{parentName:"li"},"expect.extend")," instead)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jest.resetModuleRegistry")," (use ",(0,r.kt)("inlineCode",{parentName:"li"},"jest.resetModules")," instead)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jest.runTimersToTime")," (use ",(0,r.kt)("inlineCode",{parentName:"li"},"jest.advanceTimersByTime")," instead)")),(0,r.kt)("p",null,"A lot of Jest's packages have been migrated to use ESM-style exports (although they are still shipped as CommonJS), so if you consume e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"pretty-format")," directly, you may need to adjust your import to a ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," import."),(0,r.kt)("p",null,"We dropped support for Node 13\u2014but Jest always supports the ",(0,r.kt)("em",{parentName:"p"},"Current")," and all ",(0,r.kt)("em",{parentName:"p"},"LTS")," ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"Node versions"),", and Jest 27 continues to support Node 10, which only recently became unmaintained."),(0,r.kt)("p",null,"As always, the full changelog and list of breaking changes can be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md#2700"},"viewed here"),"."),(0,r.kt)("p",null,"Finally, we'd like to thank the community for once again awarding Jest a sky-high satisfaction rating of 96% in the ",(0,r.kt)("a",{parentName:"p",href:"https://2020.stateofjs.com/en-US/technologies/testing/"},"State of JS 2020")," survey! Stay safe everyone, and we hope you continue to enjoy using Jest in the years and versions to come! \ud83c\udccf"))}u.isMDXComponent=!0},54156:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/27-interactive-failures-e22e3b31b285188ed65f6432cb21df30.png"}}]);