"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[72636],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(25773),a=(n(27378),n(35318));const s={id:"troubleshooting",title:"Troubleshooting"},r=void 0,i={unversionedId:"troubleshooting",id:"version-29.1/troubleshooting",title:"Troubleshooting",description:"Uh oh, something went wrong? Use this guide to resolve issues with Jest.",source:"@site/versioned_docs/version-29.1/Troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/jest/ru/docs/29.1/troubleshooting",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"29.1",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"6 \u0430\u043f\u0440. 2023 \u0433.",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Migrating to Jest",permalink:"/jest/ru/docs/29.1/migration-guide"},next:{title:"Architecture",permalink:"/jest/ru/docs/29.1/architecture"}},l={},u=[{value:"Tests are Failing and You Don&#39;t Know Why",id:"tests-are-failing-and-you-dont-know-why",level:2},{value:"Debugging in VS Code",id:"debugging-in-vs-code",level:2},{value:"Debugging in WebStorm",id:"debugging-in-webstorm",level:2},{value:"Caching Issues",id:"caching-issues",level:2},{value:"Unresolved Promises",id:"unresolved-promises",level:2},{value:"Watchman Issues",id:"watchman-issues",level:2},{value:"Tests are Extremely Slow on Docker and/or Continuous Integration (CI) server.",id:"tests-are-extremely-slow-on-docker-andor-continuous-integration-ci-server",level:2},{value:"<code>coveragePathIgnorePatterns</code> seems to not have any effect.",id:"coveragepathignorepatterns-seems-to-not-have-any-effect",level:2},{value:"Defining Tests",id:"defining-tests",level:2},{value:"Still unresolved?",id:"still-unresolved",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Uh oh, something went wrong? Use this guide to resolve issues with Jest."),(0,a.kt)("h2",{id:"tests-are-failing-and-you-dont-know-why"},"Tests are Failing and You Don't Know Why"),(0,a.kt)("p",null,"Try using the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/debugger.html"},"debugging support")," built into Node. Place a ",(0,a.kt)("inlineCode",{parentName:"p"},"debugger;")," statement in any of your tests, and then, in your project's directory, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n")),(0,a.kt)("p",null,"This will run Jest in a Node process that an external debugger can connect to. Note that the process will pause until the debugger has connected to it."),(0,a.kt)("p",null,"To debug in Google Chrome (or any Chromium-based browser), open your browser and go to ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome://inspect"),' and click on "Open Dedicated DevTools for Node", which will give you a list of available node instances you can connect to. Click on the address displayed in the terminal (usually something like ',(0,a.kt)("inlineCode",{parentName:"p"},"localhost:9229"),") after running the above command, and you will be able to debug Jest using Chrome's DevTools."),(0,a.kt)("p",null,'The Chrome Developer Tools will be displayed, and a breakpoint will be set at the first line of the Jest CLI script (this is done to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the ',(0,a.kt)("inlineCode",{parentName:"p"},"debugger")," statement, execution will pause and you can examine the current scope and call stack."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--runInBand")," cli option makes sure Jest runs the test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time.")),(0,a.kt)("h2",{id:"debugging-in-vs-code"},"Debugging in VS Code"),(0,a.kt)("p",null,"There are multiple ways to debug Jest tests with ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code's")," built-in ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"},"debugger"),"."),(0,a.kt)("p",null,"To attach the built-in debugger, run your tests as aforementioned:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n")),(0,a.kt)("p",null,"Then attach VS Code's debugger using the following ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "attach",\n      "name": "Attach",\n      "port": 9229\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"To automatically launch and attach to a process running your tests, use the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/.bin/jest",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"or the following for Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/jest/bin/jest.js",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"If you are using Facebook's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/create-react-app"},(0,a.kt)("inlineCode",{parentName:"a"},"create-react-app")),", you can debug your Jest tests with the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug CRA Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",\n      "args": [\n        "test",\n        "--runInBand",\n        "--no-cache",\n        "--env=jsdom",\n        "--watchAll=false"\n      ],\n      "cwd": "${workspaceRoot}",\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"More information on Node debugging can be found ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/debugger.html"},"here"),"."),(0,a.kt)("h2",{id:"debugging-in-webstorm"},"Debugging in WebStorm"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/webstorm/"},"WebStorm")," has built-in support for Jest. Read ",(0,a.kt)("a",{parentName:"p",href:"https://blog.jetbrains.com/webstorm/2018/10/testing-with-jest-in-webstorm/"},"Testing With Jest in WebStorm")," to learn more."),(0,a.kt)("h2",{id:"caching-issues"},"Caching Issues"),(0,a.kt)("p",null,"The transform script was changed or Babel was updated and the changes aren't being recognized by Jest?"),(0,a.kt)("p",null,"Retry with ",(0,a.kt)("a",{parentName:"p",href:"/jest/ru/docs/29.1/cli#--cache"},(0,a.kt)("inlineCode",{parentName:"a"},"--no-cache")),". Jest caches transformed module files to speed up test execution. If you are using your own custom transformer, consider adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"getCacheKey")," function to it: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay/blob/58cf36c73769690f0bbf90562707eadb062b029d/scripts/jest/preprocessor.js#L56-L61"},"getCacheKey in Relay"),"."),(0,a.kt)("h2",{id:"unresolved-promises"},"Unresolved Promises"),(0,a.kt)("p",null,"If a promise doesn't resolve at all, this error might be thrown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"- Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.`\n")),(0,a.kt)("p",null,"Most commonly this is being caused by conflicting Promise implementations. Consider replacing the global promise implementation with your own, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"globalThis.Promise = jest.requireActual('promise');")," and/or consolidate the used Promise libraries to a single one."),(0,a.kt)("p",null,"If your test is long running, you may want to consider to increase the timeout by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.setTimeout")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"jest.setTimeout(10000); // 10 second timeout\n")),(0,a.kt)("h2",{id:"watchman-issues"},"Watchman Issues"),(0,a.kt)("p",null,"Try running Jest with ",(0,a.kt)("a",{parentName:"p",href:"/jest/ru/docs/29.1/cli#--watchman"},(0,a.kt)("inlineCode",{parentName:"a"},"--no-watchman"))," or set the ",(0,a.kt)("inlineCode",{parentName:"p"},"watchman")," configuration option to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/troubleshooting"},"watchman troubleshooting"),"."),(0,a.kt)("h2",{id:"tests-are-extremely-slow-on-docker-andor-continuous-integration-ci-server"},"Tests are Extremely Slow on Docker and/or Continuous Integration (CI) server."),(0,a.kt)("p",null,"While Jest is most of the time extremely fast on modern multi-core computers with fast SSDs, it may be slow on certain setups as our users ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/1395"},"have")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/1524#issuecomment-260246008"},"discovered"),"."),(0,a.kt)("p",null,"Based on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/1524#issuecomment-262366820"},"findings"),", one way to mitigate this issue and improve the speed by up to 50% is to run tests sequentially."),(0,a.kt)("p",null,"In order to do this you can run tests in the same thread using ",(0,a.kt)("a",{parentName:"p",href:"/jest/ru/docs/29.1/cli#--runinband"},(0,a.kt)("inlineCode",{parentName:"a"},"--runInBand")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Using Jest CLI\njest --runInBand\n\n# Using yarn test (e.g. with create-react-app)\nyarn test --runInBand\n")),(0,a.kt)("p",null,"Another alternative to expediting test execution time on Continuous Integration Servers such as Travis-CI is to set the max worker pool to ~",(0,a.kt)("em",{parentName:"p"},"4"),". Specifically on Travis-CI, this can reduce test execution time in half. Note: The Travis CI ",(0,a.kt)("em",{parentName:"p"},"free")," plan available for open source projects only includes 2 CPU cores."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Using Jest CLI\njest --maxWorkers=4\n\n# Using yarn test (e.g. with create-react-app)\nyarn test --maxWorkers=4\n")),(0,a.kt)("p",null,"If you use GitHub Actions, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SimenB/github-actions-cpu-cores"},(0,a.kt)("inlineCode",{parentName:"a"},"github-actions-cpu-cores"))," to detect number of CPUs, and pass that to Jest."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Get number of CPU cores\n  id: cpu-cores\n  uses: SimenB/github-actions-cpu-cores@v1\n- name: run tests\n  run: yarn jest --max-workers ${{ steps.cpu-cores.outputs.count }}\n")),(0,a.kt)("p",null,"Another thing you can do is use the ",(0,a.kt)("a",{parentName:"p",href:"/jest/ru/docs/29.1/cli#--shard"},(0,a.kt)("inlineCode",{parentName:"a"},"shard"))," flag to parallelize the test run across multiple machines."),(0,a.kt)("h2",{id:"coveragepathignorepatterns-seems-to-not-have-any-effect"},(0,a.kt)("inlineCode",{parentName:"h2"},"coveragePathIgnorePatterns")," seems to not have any effect."),(0,a.kt)("p",null,"Make sure you are not using the ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-plugin-istanbul")," plugin. Jest wraps Istanbul, and therefore also tells Istanbul what files to instrument with coverage collection. When using ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-plugin-istanbul"),", every file that is processed by Babel will have coverage collection code, hence it is not being ignored by ",(0,a.kt)("inlineCode",{parentName:"p"},"coveragePathIgnorePatterns"),"."),(0,a.kt)("h2",{id:"defining-tests"},"Defining Tests"),(0,a.kt)("p",null,"Tests must be defined synchronously for Jest to be able to collect your tests."),(0,a.kt)("p",null,"As an example to show why this is the case, imagine we wrote a test like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Don't do this it will not work\nsetTimeout(() => {\n  it('passes', () => expect(1).toBe(1));\n}, 0);\n")),(0,a.kt)("p",null,"When Jest runs your test to collect the ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"s it will not find any because we have set the definition to happen asynchronously on the next tick of the event loop. This means when you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"test.each")," you cannot set the table asynchronously within a ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeEach")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeAll"),"."),(0,a.kt)("h2",{id:"still-unresolved"},"Still unresolved?"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/help"},"Help"),"."))}p.isMDXComponent=!0}}]);