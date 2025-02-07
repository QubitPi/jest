"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8522],{51424:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"troubleshooting","title":"Troubleshooting","description":"Uh oh, something went wrong? Use this guide to resolve issues with Jest.","source":"@site/versioned_docs/version-29.4/Troubleshooting.md","sourceDirName":".","slug":"/troubleshooting","permalink":"/uk/docs/29.4/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/uk","tags":[],"version":"29.4","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738912609000,"frontMatter":{"id":"troubleshooting","title":"Troubleshooting"},"sidebar":"docs","previous":{"title":"Migrating to Jest","permalink":"/uk/docs/29.4/migration-guide"},"next":{"title":"Architecture","permalink":"/uk/docs/29.4/architecture"}}');var r=s(62540),o=s(43023),a=s(65457),i=s(97265);const l={id:"troubleshooting",title:"Troubleshooting"},c=void 0,u={},d=[{value:"Tests are Failing and You Don&#39;t Know Why",id:"tests-are-failing-and-you-dont-know-why",level:2},{value:"Debugging in VS Code",id:"debugging-in-vs-code",level:2},{value:"Debugging in WebStorm",id:"debugging-in-webstorm",level:2},{value:"Caching Issues",id:"caching-issues",level:2},{value:"Unresolved Promises",id:"unresolved-promises",level:2},{value:"Watchman Issues",id:"watchman-issues",level:2},{value:"Tests are Extremely Slow on Docker and/or Continuous Integration (CI) server.",id:"tests-are-extremely-slow-on-docker-andor-continuous-integration-ci-server",level:2},{value:"<code>coveragePathIgnorePatterns</code> seems to not have any effect.",id:"coveragepathignorepatterns-seems-to-not-have-any-effect",level:2},{value:"Defining Tests",id:"defining-tests",level:2},{value:"Still unresolved?",id:"still-unresolved",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Uh oh, something went wrong? Use this guide to resolve issues with Jest."}),"\n",(0,r.jsx)(n.h2,{id:"tests-are-failing-and-you-dont-know-why",children:"Tests are Failing and You Don't Know Why"}),"\n",(0,r.jsxs)(n.p,{children:["Try using the ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/debugger.html",children:"debugging support"})," built into Node. Place a ",(0,r.jsx)(n.code,{children:"debugger;"})," statement in any of your tests, and then, in your project's directory, run:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will run Jest in a Node process that an external debugger can connect to. Note that the process will pause until the debugger has connected to it."}),"\n",(0,r.jsxs)(n.p,{children:["To debug in Google Chrome (or any Chromium-based browser), open your browser and go to ",(0,r.jsx)(n.code,{children:"chrome://inspect"}),' and click on "Open Dedicated DevTools for Node", which will give you a list of available node instances you can connect to. Click on the address displayed in the terminal (usually something like ',(0,r.jsx)(n.code,{children:"localhost:9229"}),") after running the above command, and you will be able to debug Jest using Chrome's DevTools."]}),"\n",(0,r.jsxs)(n.p,{children:['The Chrome Developer Tools will be displayed, and a breakpoint will be set at the first line of the Jest CLI script (this is done to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the ',(0,r.jsx)(n.code,{children:"debugger"})," statement, execution will pause and you can examine the current scope and call stack."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"--runInBand"})," cli option makes sure Jest runs the test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time."]})}),"\n",(0,r.jsx)(n.h2,{id:"debugging-in-vs-code",children:"Debugging in VS Code"}),"\n",(0,r.jsxs)(n.p,{children:["There are multiple ways to debug Jest tests with ",(0,r.jsx)(n.a,{href:"https://code.visualstudio.com",children:"Visual Studio Code's"})," built-in ",(0,r.jsx)(n.a,{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging",children:"debugger"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To attach the built-in debugger, run your tests as aforementioned:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then attach VS Code's debugger using the following ",(0,r.jsx)(n.code,{children:"launch.json"})," config:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "attach",\n      "name": "Attach",\n      "port": 9229\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"To automatically launch and attach to a process running your tests, use the following configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/.bin/jest",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"or the following for Windows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/jest/bin/jest.js",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If you are using Facebook's ",(0,r.jsx)(n.a,{href:"https://github.com/facebookincubator/create-react-app",children:(0,r.jsx)(n.code,{children:"create-react-app"})}),", you can debug your Jest tests with the following configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug CRA Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",\n      "args": [\n        "test",\n        "--runInBand",\n        "--no-cache",\n        "--env=jsdom",\n        "--watchAll=false"\n      ],\n      "cwd": "${workspaceRoot}",\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["More information on Node debugging can be found ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/debugger.html",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"debugging-in-webstorm",children:"Debugging in WebStorm"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.jetbrains.com/webstorm/",children:"WebStorm"})," has built-in support for Jest. Read ",(0,r.jsx)(n.a,{href:"https://blog.jetbrains.com/webstorm/2018/10/testing-with-jest-in-webstorm/",children:"Testing With Jest in WebStorm"})," to learn more."]}),"\n",(0,r.jsx)(n.h2,{id:"caching-issues",children:"Caching Issues"}),"\n",(0,r.jsx)(n.p,{children:"The transform script was changed or Babel was updated and the changes aren't being recognized by Jest?"}),"\n",(0,r.jsxs)(n.p,{children:["Retry with ",(0,r.jsx)(n.a,{href:"/uk/docs/29.4/cli#--cache",children:(0,r.jsx)(n.code,{children:"--no-cache"})}),". Jest caches transformed module files to speed up test execution. If you are using your own custom transformer, consider adding a ",(0,r.jsx)(n.code,{children:"getCacheKey"})," function to it: ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/relay/blob/58cf36c73769690f0bbf90562707eadb062b029d/scripts/jest/preprocessor.js#L56-L61",children:"getCacheKey in Relay"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"unresolved-promises",children:"Unresolved Promises"}),"\n",(0,r.jsx)(n.p,{children:"If a promise doesn't resolve at all, this error might be thrown:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"- Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Most commonly this is being caused by conflicting Promise implementations. Consider replacing the global promise implementation with your own, for example ",(0,r.jsx)(n.code,{children:"globalThis.Promise = jest.requireActual('promise');"})," and/or consolidate the used Promise libraries to a single one."]}),"\n",(0,r.jsxs)(n.p,{children:["If your test is long running, you may want to consider to increase the timeout by calling ",(0,r.jsx)(n.code,{children:"jest.setTimeout"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"jest.setTimeout(10_000); // 10 second timeout\n"})}),"\n",(0,r.jsx)(n.h2,{id:"watchman-issues",children:"Watchman Issues"}),"\n",(0,r.jsxs)(n.p,{children:["Try running Jest with ",(0,r.jsx)(n.a,{href:"/uk/docs/29.4/cli#--watchman",children:(0,r.jsx)(n.code,{children:"--no-watchman"})})," or set the ",(0,r.jsx)(n.code,{children:"watchman"})," configuration option to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Also see ",(0,r.jsx)(n.a,{href:"https://facebook.github.io/watchman/docs/troubleshooting",children:"watchman troubleshooting"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"tests-are-extremely-slow-on-docker-andor-continuous-integration-ci-server",children:"Tests are Extremely Slow on Docker and/or Continuous Integration (CI) server."}),"\n",(0,r.jsxs)(n.p,{children:["While Jest is most of the time extremely fast on modern multi-core computers with fast SSDs, it may be slow on certain setups as our users ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1395",children:"have"})," ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1524#issuecomment-260246008",children:"discovered"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Based on the ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1524#issuecomment-262366820",children:"findings"}),", one way to mitigate this issue and improve the speed by up to 50% is to run tests sequentially."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to do this you can run tests in the same thread using ",(0,r.jsx)(n.a,{href:"/uk/docs/29.4/cli#--runinband",children:(0,r.jsx)(n.code,{children:"--runInBand"})}),":"]}),"\n",(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nnpm test -- --runInBand\n"})})}),(0,r.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nyarn test --runInBand\n"})})}),(0,r.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\npnpm test --runInBand\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Another alternative to expediting test execution time on Continuous Integration Servers such as Travis-CI is to set the max worker pool to ~",(0,r.jsx)(n.em,{children:"4"}),". Specifically on Travis-CI, this can reduce test execution time in half. Note: The Travis CI ",(0,r.jsx)(n.em,{children:"free"})," plan available for open source projects only includes 2 CPU cores."]}),"\n",(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nnpm test -- --maxWorkers=4\n"})})}),(0,r.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nyarn test --maxWorkers=4\n"})})}),(0,r.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\npnpm test --maxWorkers=4\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["If you use GitHub Actions, you can use ",(0,r.jsx)(n.a,{href:"https://github.com/SimenB/github-actions-cpu-cores",children:(0,r.jsx)(n.code,{children:"github-actions-cpu-cores"})})," to detect number of CPUs, and pass that to Jest."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- name: Get number of CPU cores\n  id: cpu-cores\n  uses: SimenB/github-actions-cpu-cores@v2\n- name: run tests\n  run: yarn jest --max-workers ${{ steps.cpu-cores.outputs.count }}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Another thing you can do is use the ",(0,r.jsx)(n.a,{href:"/uk/docs/29.4/cli#--shard",children:(0,r.jsx)(n.code,{children:"shard"})})," flag to parallelize the test run across multiple machines."]}),"\n",(0,r.jsxs)(n.h2,{id:"coveragepathignorepatterns-seems-to-not-have-any-effect",children:[(0,r.jsx)(n.code,{children:"coveragePathIgnorePatterns"})," seems to not have any effect."]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure you are not using the ",(0,r.jsx)(n.code,{children:"babel-plugin-istanbul"})," plugin. Jest wraps Istanbul, and therefore also tells Istanbul what files to instrument with coverage collection. When using ",(0,r.jsx)(n.code,{children:"babel-plugin-istanbul"}),", every file that is processed by Babel will have coverage collection code, hence it is not being ignored by ",(0,r.jsx)(n.code,{children:"coveragePathIgnorePatterns"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"defining-tests",children:"Defining Tests"}),"\n",(0,r.jsx)(n.p,{children:"Tests must be defined synchronously for Jest to be able to collect your tests."}),"\n",(0,r.jsx)(n.p,{children:"As an example to show why this is the case, imagine we wrote a test like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Don't do this it will not work\nsetTimeout(() => {\n  it('passes', () => expect(1).toBe(1));\n}, 0);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When Jest runs your test to collect the ",(0,r.jsx)(n.code,{children:"test"}),"s it will not find any because we have set the definition to happen asynchronously on the next tick of the event loop. This means when you are using ",(0,r.jsx)(n.code,{children:"test.each"})," you cannot set the table asynchronously within a ",(0,r.jsx)(n.code,{children:"beforeEach"})," / ",(0,r.jsx)(n.code,{children:"beforeAll"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"still-unresolved",children:"Still unresolved?"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/help",children:"Help"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},97265:(e,n,s)=>{s.d(n,{A:()=>a});s(63696);var t=s(11750);const r={tabItem:"tabItem_wHwb"};var o=s(62540);function a(e){let{children:n,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:s,children:n})}},65457:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(63696),r=s(11750),o=s(93707),a=s(49519),i=s(83604),l=s(95196),c=s(76229),u=s(88030);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,o=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,d]=g({queryString:s,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:r}),j=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=s(95200);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=s(62540);function f(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,s=l.indexOf(n),r=i[s].value;r!==t&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:o}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(f,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},43023:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(63696);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);