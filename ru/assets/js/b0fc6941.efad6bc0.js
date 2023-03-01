"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[299],{35318:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const s={title:"Jest 25: \ud83d\ude80 Laying foundations for the future",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},i=void 0,r={permalink:"/jest/ru/blog/2020/01/21/jest-25",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2020-01-21-jest-25.md",source:"@site/blog/2020-01-21-jest-25.md",title:"Jest 25: \ud83d\ude80 Laying foundations for the future",description:"Jest 25 is laying the groundwork for many major changes in the future. As such, we kept breaking changes to a minimum, but internal architecture changes may require attention during the upgrade. The main changes are an upgrade of JSDOM from v11 to v15, 10-15% faster test runs, a new diff view for outdated snapshots and dropped Node 6 support.",date:"2020-01-21T00:00:00.000Z",formattedDate:"21 \u044f\u043d\u0432\u0430\u0440\u044f 2020\u202f\u0433.",tags:[],readingTime:6.995,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB"}],frontMatter:{title:"Jest 25: \ud83d\ude80 Laying foundations for the future",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},prevItem:{title:"Jest 26: Tick Tock",permalink:"/jest/ru/blog/2020/05/05/jest-26"},nextItem:{title:"Jest 24: \ud83d\udc85 Refreshing, Polished, TypeScript-friendly",permalink:"/jest/ru/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly"}},l={authorsImageUrls:[void 0]},p=[{value:"Bye Node 6",id:"bye-node-6",level:2},{value:"Performance improvements",id:"performance-improvements",level:2},{value:"V8 Code Coverage",id:"v8-code-coverage",level:2},{value:"Thinking fast and slow when tests fail",id:"thinking-fast-and-slow-when-tests-fail",level:2},{value:"Colors of differences when snapshot tests fail",id:"colors-of-differences-when-snapshot-tests-fail",level:2},{value:"ECMAScript Modules support",id:"ecmascript-modules-support",level:2},{value:"Other improvements and updates",id:"other-improvements-and-updates",level:2},{value:"Plans for the future",id:"plans-for-the-future",level:2}],h={toc:p};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jest 25 is laying the groundwork for many major changes in the future. As such, we kept breaking changes to a minimum, but internal architecture changes may require attention during the upgrade. The main changes are an upgrade of JSDOM from v11 to v15, 10-15% faster test runs, a new diff view for outdated snapshots and dropped Node 6 support."),(0,o.kt)("p",null,"There has been more than 200 commits since Jest 24.9 by more than 80 different contributors, so as always, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md"},"changelog")," for a full list of changes."),(0,o.kt)("h2",{id:"bye-node-6"},"Bye Node 6"),(0,o.kt)("p",null,"Node 6 has been EOL since April 30th 2019, and Jest 25 leaves it behind. Dropping Node 6 means we can upgrade our dependencies, the main one being JSDOM, which has been upgraded to version 15. Upgrading also means we no longer have to transpile ",(0,o.kt)("inlineCode",{parentName:"p"},"async-await")," syntax, which results in both faster code execution and less memory consumption. As a bonus, Jest\u2019s transpiled code should be easier to debug if anyone finds themselves tumbling down that particular rabbit hole."),(0,o.kt)("p",null,"Even though Node 8 has also entered EOL, Jest 25 will keep support for it to make the upgrade as easy as possible for those of us who still support Node 8. It does come with some tradeoffs though, such as JSDOM v16 having been released without Node 8 support, so you'll need to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jest-environment-jsdom-sixteen"},(0,o.kt)("inlineCode",{parentName:"a"},"jest-environment-jsdom-sixteen"))," if you want to use the latest version."),(0,o.kt)("h2",{id:"performance-improvements"},"Performance improvements"),(0,o.kt)("p",null,"We\u2019ve gotten reports that Jest has slowed down over the last couple of releases. Jest 25 includes upgraded Micromatch, which brings huge gains in startup time, and some bug fixes and performance tweaks which brings Jest back to the speed it was at for Jest 23. For Jest itself, like mentioned at the beginning of this post, that means a 10-15% reduction of test runtime. We're always looking to improve here of course, so please check how it stacks up against earlier versions and create issues if we should be better!"),(0,o.kt)("h2",{id:"v8-code-coverage"},"V8 Code Coverage"),(0,o.kt)("p",null,"Jest\u2019s current code coverage instrumentation is powered by ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-plugin-istanbul")," inserting code coverage collection code before creating reports. However, this is quite slow and memory-intensive, especially for large files and code bases. Luckily, V8 has built-in code coverage, which is becoming more and more usable in Node thanks to the hard work of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bcoe"},"Benjamin Coe")," and others on the V8 and Node.js teams. Jest 25 comes with experimental support for this via a new ",(0,o.kt)("inlineCode",{parentName:"p"},"--coverage-provider")," flag. Please see its ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#coverageprovider-string"},"documentation")," for caveats and how to use it."),(0,o.kt)("h2",{id:"thinking-fast-and-slow-when-tests-fail"},"Thinking fast and slow when tests fail"),(0,o.kt)("p",null,"Unnecessary effort to interpret the reports when tests fail hinders:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u201cthinking fast\u201d to recognize patterns from your past experience"),(0,o.kt)("li",{parentName:"ul"},"\u201cthinking slow\u201d to analyze changes and decide whether they are expected progress or unexpected regressions")),(0,o.kt)("p",null,"Jest 25 completes the second half of an effort begun in Jest 24 to improve all matchers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"correct description line, including ",(0,o.kt)("inlineCode",{parentName:"li"},".rejects"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".resolves"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},".not")," modifiers"),(0,o.kt)("li",{parentName:"ul"},"concise labels and consistent alignment for expected and received values"),(0,o.kt)("li",{parentName:"ul"},"inverse highlight of substring differences when expected and received are strings"),(0,o.kt)("li",{parentName:"ul"},"counts of change lines in differences to know if they are only delete or insert")),(0,o.kt)("p",null,"Special thanks to Jest maintainer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pedrottimark"},"Mark Pedrotti")," for driving this effort and his continued work towards making expectation errors as good as they can be."),(0,o.kt)("h2",{id:"colors-of-differences-when-snapshot-tests-fail"},"Colors of differences when snapshot tests fail"),(0,o.kt)("p",null,"The most obvious change to replace confusion with confidence is the colors of change lines in differences when snapshot tests fail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"- Snapshot")," changes from green to ",(0,o.kt)("strong",{parentName:"li"},"magenta")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+ Received")," changes from red to ",(0,o.kt)("strong",{parentName:"li"},"teal")," foreground on cyan/aqua background")),(0,o.kt)("p",null,"Examples of snapshot test reports (before at left and after at right)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Counts of changed lines confirm your first impression which way did the snapshot change (that is, deleted or inserted lines)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"snapshot-insert-lines",src:n(79697).Z,width:"1800",height:"532"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Background colors attract your eyes to compare adjacent changed lines")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"snapshot-change-lines",src:n(10258).Z,width:"1800",height:"504"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Background colors also help you see which ",(0,o.kt)("inlineCode",{parentName:"li"},"toThrow")," tests require a decision whether or not to update the snapshot")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"snapshot-change-substrings",src:n(64653).Z,width:"1800",height:"168"})),(0,o.kt)("p",null,"Here are some reasons why we chose unique colors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The 95% of people who have full color vision can quickly recognize which reports are from snapshot tests versus all other matchers."),(0,o.kt)("li",{parentName:"ul"},"It solves the direct conflict between meaning of green/red in Jest tests versus red/green in code review."),(0,o.kt)("li",{parentName:"ul"},"Unlike a reversal to red/green which suggests that update is the default decision, it suggests that differences require more careful review for possible regression in local snapshot test failures than in code review (when problems have already been fixed).")),(0,o.kt)("p",null,"The difference in hue from magenta at 300\xb0 to teal/cyan/aqua at 180\xb0 gives better color vision accessibility and the light background tint for changed lines gives consistent contrast on light and dark themes."),(0,o.kt)("p",null,"If you maintain a command line tool, you might find inspiration to improve its accessibility in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/9132"},"#9132"),"."),(0,o.kt)("h2",{id:"ecmascript-modules-support"},"ECMAScript Modules support"),(0,o.kt)("p",null,"Node 13 has unflagged ESM support, and we have started a tiny bit working towards native support in Jest. Jest 25 includes support for ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.cjs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.mjs")," configuration files, but tests themselves cannot yet be written using ESM without something like Babel or TypeScript transforming it into CJS."),(0,o.kt)("p",null,"The APIs Jest will use are still flagged and experimental, so don't expect support right away. These APIs are something the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/modules"},"Node.js Modules team")," is actively working on, and we'll be keeping an eye on it moving forward and experiment with them so we can provide feedback. You can subscribe to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/9430"},"this issue")," to get any updates about the implementation status in Jest."),(0,o.kt)("h2",{id:"other-improvements-and-updates"},"Other improvements and updates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jest has passed ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/graphs/contributors"},"1000 unique contributors"),". This is an incredible milestone! Thank you to everybody who helps us make testing as delightful as possible."),(0,o.kt)("li",{parentName:"ul"},"Thanks to community member ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/JoshRosenstein"},"Josh Rosenstein"),", Jest now comes with support for ",(0,o.kt)("inlineCode",{parentName:"li"},"BigInt")," in most matchers, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"toBeGreaterThan"),". Jest will also understand bigint literals out of the box."),(0,o.kt)("li",{parentName:"ul"},"Jest\u2019s feature ",(0,o.kt)("inlineCode",{parentName:"li"},"--detect-leaks")," has been broken for Node 12 and newer - this has been fixed in Jest 25."),(0,o.kt)("li",{parentName:"ul"},"As announced in the blog post for Jest 24, Jest\u2019s code base has been rewritten in TypeScript - this work was completed in Jest 24.3. So if you use any of Jest\u2019s individual parts, you should get great IDE integration. Looking forward, we really want to make Jest mocks play nicer with type systems, and we\u2019d love the community\u2019s help with this. Please chime in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/issues/7832"},"here")," with ideas and send PRs! We\u2019ll also be investigating moving the typings for using Jest as a test runner from DefinitelyTyped into Jest itself."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-diff")," package now exports functions like ",(0,o.kt)("inlineCode",{parentName:"li"},"diffLinesUnified")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"diffStringsUnified")," which have configuration options, so other applications can format differences in a custom way. For more information and code examples, see its new ",(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," file in the Jest repository or on package repositories."),(0,o.kt)("li",{parentName:"ul"},"Thanks to community member ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/WeiAnAn"},"Wei An Yen"),", Jest will no longer highlight passing asymmetric matchers in expectation errors. This has been a long-standing pain point with asymmetric matchers and we're very happy it's finally solved."),(0,o.kt)("li",{parentName:"ul"},"For the second year running, Jest won the Highest Satisfaction award from ",(0,o.kt)("a",{parentName:"li",href:"https://2019.stateofjs.com/awards/"},"State of JS"),". We are incredibly grateful for the support from the community, and hope we can build on this momentum to make 2020 even better!")),(0,o.kt)("h2",{id:"plans-for-the-future"},"Plans for the future"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jest\u2019s configuration is vast and somewhat clunky - there is often ",(0,o.kt)("em",{parentName:"li"},"at least")," two ways of doing the same thing, oftentimes even more. For Jest 26 we hope to condense the config down, and make it more predictable. See this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/issues/7185"},"issue")," for details."),(0,o.kt)("li",{parentName:"ul"},"We also hope to be able to provide a proper programmatic API for running Jest, to make integration into IDEs and other tooling easier. Please see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/issues/5048"},"this")," tracking issue."),(0,o.kt)("li",{parentName:"ul"},"There\u2019s been an open PR for adding Lolex as an implementation of Jest\u2019s fake timers since December 2017. While we\u2019re not adding it to any public APIs in Jest 25, support for it is technically included and you we're looking into how to expose this so people can test and experiment with it. Using it means you can mock out ",(0,o.kt)("inlineCode",{parentName:"li"},"Date")," and other timer function Jest currently doesn\u2019t touch. Note that this should be considered experimental, and a proper API support will come in a later release. Follow ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/pull/7776"},"this PR")," for the latest updates on the status.")),(0,o.kt)("p",null,"Happy Jesting! \ud83c\udccf"))}c.isMDXComponent=!0},10258:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/25-snapshot-change-lines-d42906add66e08bb7c0ffffbca9a44bc.png"},64653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/25-snapshot-change-substrings-0798d37f2f603ec43b57145cddc1247b.png"},79697:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/25-snapshot-insert-lines-8168b88f07172d72e4d2cd0e05d200f1.png"}}]);