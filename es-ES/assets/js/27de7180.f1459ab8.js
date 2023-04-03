"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[96836],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const i={id:"watch-plugins",title:"Watch Plugins"},r=void 0,l={unversionedId:"watch-plugins",id:"version-29.4/watch-plugins",title:"Watch Plugins",description:"The Jest watch plugin system provides a way to hook into specific parts of Jest and to define watch mode menu prompts that execute code on key press. Combined, these features allow you to develop interactive experiences custom for your workflow.",source:"@site/versioned_docs/version-29.4/WatchPlugins.md",sourceDirName:".",slug:"/watch-plugins",permalink:"/jest/es-ES/docs/29.4/watch-plugins",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"29.4",lastUpdatedBy:"Jack",lastUpdatedAt:1680514817,formattedLastUpdatedAt:"3 abr 2023",frontMatter:{id:"watch-plugins",title:"Watch Plugins"},sidebar:"docs",previous:{title:"DOM Manipulation",permalink:"/jest/es-ES/docs/29.4/tutorial-jquery"},next:{title:"Migrating to Jest",permalink:"/jest/es-ES/docs/29.4/migration-guide"}},s={},p=[{value:"Watch Plugin Interface",id:"watch-plugin-interface",level:2},{value:"Hooking into Jest",id:"hooking-into-jest",level:2},{value:"<code>apply(jestHooks)</code>",id:"applyjesthooks",level:3},{value:"<code>jestHooks.shouldRunTestSuite(testSuiteInfo)</code>",id:"jesthooksshouldruntestsuitetestsuiteinfo",level:4},{value:"<code>jestHooks.onTestRunComplete(results)</code>",id:"jesthooksontestruncompleteresults",level:4},{value:"<code>jestHooks.onFileChange({projects})</code>",id:"jesthooksonfilechangeprojects",level:4},{value:"Watch Menu Integration",id:"watch-menu-integration",level:2},{value:"<code>getUsageInfo(globalConfig)</code>",id:"getusageinfoglobalconfig",level:3},{value:"<code>run(globalConfig, updateConfigAndRun)</code>",id:"runglobalconfig-updateconfigandrun",level:3},{value:"Authorized configuration keys",id:"authorized-configuration-keys",level:4},{value:"Customization",id:"customization",level:2},{value:"Choosing a good key",id:"choosing-a-good-key",level:2},{value:"When a conflict happens",id:"when-a-conflict-happens",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Jest watch plugin system provides a way to hook into specific parts of Jest and to define watch mode menu prompts that execute code on key press. Combined, these features allow you to develop interactive experiences custom for your workflow."),(0,o.kt)("h2",{id:"watch-plugin-interface"},"Watch Plugin Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyWatchPlugin {\n  // Add hooks to Jest lifecycle events\n  apply(jestHooks) {}\n\n  // Get the prompt information for interactive plugins\n  getUsageInfo(globalConfig) {}\n\n  // Executed when the key from `getUsageInfo` is input\n  run(globalConfig, updateConfigAndRun) {}\n}\n")),(0,o.kt)("h2",{id:"hooking-into-jest"},"Hooking into Jest"),(0,o.kt)("p",null,"To connect your watch plugin to Jest, add its path under ",(0,o.kt)("inlineCode",{parentName:"p"},"watchPlugins")," in your Jest configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  // ...\n  watchPlugins: ['path/to/yourWatchPlugin'],\n};\n")),(0,o.kt)("p",null,"Custom watch plugins can add hooks to Jest events. These hooks can be added either with or without having an interactive key in the watch mode menu."),(0,o.kt)("h3",{id:"applyjesthooks"},(0,o.kt)("inlineCode",{parentName:"h3"},"apply(jestHooks)")),(0,o.kt)("p",null,"Jest hooks can be attached by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," method. This method receives a ",(0,o.kt)("inlineCode",{parentName:"p"},"jestHooks")," argument that allows the plugin to hook into specific parts of the lifecycle of a test run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyWatchPlugin {\n  apply(jestHooks) {}\n}\n")),(0,o.kt)("p",null,"Below are the hooks available in Jest."),(0,o.kt)("h4",{id:"jesthooksshouldruntestsuitetestsuiteinfo"},(0,o.kt)("inlineCode",{parentName:"h4"},"jestHooks.shouldRunTestSuite(testSuiteInfo)")),(0,o.kt)("p",null,"Returns a boolean (or ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<boolean>")," for handling asynchronous operations) to specify if a test should be run or not."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyWatchPlugin {\n  apply(jestHooks) {\n    jestHooks.shouldRunTestSuite(testSuiteInfo => {\n      return testSuiteInfo.testPath.includes('my-keyword');\n    });\n\n    // or a promise\n    jestHooks.shouldRunTestSuite(testSuiteInfo => {\n      return Promise.resolve(testSuiteInfo.testPath.includes('my-keyword'));\n    });\n  }\n}\n")),(0,o.kt)("h4",{id:"jesthooksontestruncompleteresults"},(0,o.kt)("inlineCode",{parentName:"h4"},"jestHooks.onTestRunComplete(results)")),(0,o.kt)("p",null,"Gets called at the end of every test run. It has the test results as an argument."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyWatchPlugin {\n  apply(jestHooks) {\n    jestHooks.onTestRunComplete(results => {\n      this._hasSnapshotFailure = results.snapshot.failure;\n    });\n  }\n}\n")),(0,o.kt)("h4",{id:"jesthooksonfilechangeprojects"},(0,o.kt)("inlineCode",{parentName:"h4"},"jestHooks.onFileChange({projects})")),(0,o.kt)("p",null,"Gets called whenever there is a change in the file system"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"projects: Array<config: ProjectConfig, testPaths: Array<string>"),": Includes all the test paths that Jest is watching.")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyWatchPlugin {\n  apply(jestHooks) {\n    jestHooks.onFileChange(({projects}) => {\n      this._projects = projects;\n    });\n  }\n}\n")),(0,o.kt)("h2",{id:"watch-menu-integration"},"Watch Menu Integration"),(0,o.kt)("p",null,"Custom watch plugins can also add or override functionality to the watch menu by specifying a key/prompt pair in ",(0,o.kt)("inlineCode",{parentName:"p"},"getUsageInfo")," method and a ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method for the execution of the key."),(0,o.kt)("h3",{id:"getusageinfoglobalconfig"},(0,o.kt)("inlineCode",{parentName:"h3"},"getUsageInfo(globalConfig)")),(0,o.kt)("p",null,"To add a key to the watch menu, implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUsageInfo")," method, returning a key and the prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyWatchPlugin {\n  getUsageInfo(globalConfig) {\n    return {\n      key: 's',\n      prompt: 'do something',\n    };\n  }\n}\n")),(0,o.kt)("p",null,"This will add a line in the watch mode menu ",(0,o.kt)("em",{parentName:"p"},"(",(0,o.kt)("inlineCode",{parentName:"em"},"\u203a Press s to do something."),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Watch Usage\n \u203a Press p to filter by a filename regex pattern.\n \u203a Press t to filter by a test name regex pattern.\n \u203a Press q to quit watch mode.\n \u203a Press s to do something. // <-- This is our plugin\n \u203a Press Enter to trigger a test run.\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the key for your plugin already exists as a default key, your plugin will override that key.")),(0,o.kt)("h3",{id:"runglobalconfig-updateconfigandrun"},(0,o.kt)("inlineCode",{parentName:"h3"},"run(globalConfig, updateConfigAndRun)")),(0,o.kt)("p",null,"To handle key press events from the key returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"getUsageInfo"),", you can implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method. This method returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<boolean>")," that can be resolved when the plugin wants to return control to Jest. The ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," specifies if Jest should rerun the tests after it gets the control back."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/blob/v29.2.1/packages/jest-types/src/Config.ts#L358-L422"},(0,o.kt)("inlineCode",{parentName:"a"},"globalConfig")),": A representation of Jest's current global configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"updateConfigAndRun"),": Allows you to trigger a test run while the interactive plugin is running.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyWatchPlugin {\n  run(globalConfig, updateConfigAndRun) {\n    // do something.\n  }\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you do call ",(0,o.kt)("inlineCode",{parentName:"p"},"updateConfigAndRun"),", your ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method should not resolve to a truthy value, as that would trigger a double-run.")),(0,o.kt)("h4",{id:"authorized-configuration-keys"},"Authorized configuration keys"),(0,o.kt)("p",null,"For stability and safety reasons, only part of the global configuration keys can be updated with ",(0,o.kt)("inlineCode",{parentName:"p"},"updateConfigAndRun"),". The current white list is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#bail-number--boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"bail"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"cli#--changedsince"},(0,o.kt)("inlineCode",{parentName:"a"},"changedSince"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#collectcoverage-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"collectCoverage"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#collectcoveragefrom-array"},(0,o.kt)("inlineCode",{parentName:"a"},"collectCoverageFrom"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#coveragedirectory-string"},(0,o.kt)("inlineCode",{parentName:"a"},"coverageDirectory"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#coveragereporters-arraystring"},(0,o.kt)("inlineCode",{parentName:"a"},"coverageReporters"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#notify-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"notify"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#notifymode-string"},(0,o.kt)("inlineCode",{parentName:"a"},"notifyMode"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#onlyfailures-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"onlyFailures"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#reporters-arraymodulename--modulename-options"},(0,o.kt)("inlineCode",{parentName:"a"},"reporters"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"cli#--testnamepatternregex"},(0,o.kt)("inlineCode",{parentName:"a"},"testNamePattern"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"cli#--testpathpatternregex"},(0,o.kt)("inlineCode",{parentName:"a"},"testPathPattern"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"cli#--updatesnapshot"},(0,o.kt)("inlineCode",{parentName:"a"},"updateSnapshot"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration#verbose-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"verbose")))),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"Plugins can be customized via your Jest configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  // ...\n  watchPlugins: [\n    [\n      'path/to/yourWatchPlugin',\n      {\n        key: 'k', // <- your custom key\n        prompt: 'show a custom prompt',\n      },\n    ],\n  ],\n};\n")),(0,o.kt)("p",null,"Recommended config names:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key"),": Modifies the plugin key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prompt"),": Allows user to customize the text in the plugin prompt.")),(0,o.kt)("p",null,"If the user provided a custom configuration, it will be passed as an argument to the plugin constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyWatchPlugin {\n  constructor({config}) {}\n}\n")),(0,o.kt)("h2",{id:"choosing-a-good-key"},"Choosing a good key"),(0,o.kt)("p",null,"Jest allows third-party plugins to override some of its built-in feature keys, but not all. Specifically, the following keys are ",(0,o.kt)("strong",{parentName:"p"},"not overwritable"),"\xa0:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"c")," (clears filter patterns)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i")," (updates non-matching snapshots interactively)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"q")," (quits)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"u")," (updates all non-matching snapshots)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"w")," (displays watch mode usage / available actions)")),(0,o.kt)("p",null,"The following keys for built-in functionality ",(0,o.kt)("strong",{parentName:"p"},"can be overwritten"),"\xa0:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"p")," (test filename pattern)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"t")," (test name pattern)")),(0,o.kt)("p",null,"Any key not used by built-in functionality can be claimed, as you would expect. Try to avoid using keys that are difficult to obtain on various keyboards (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"\xe9"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\u20ac"),"), or not visible by default (e.g. many Mac keyboards do not have visual hints for characters such as ",(0,o.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\\"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"["),", etc.)"),(0,o.kt)("h3",{id:"when-a-conflict-happens"},"When a conflict happens"),(0,o.kt)("p",null,"Should your plugin attempt to overwrite a reserved key, Jest will error out with a descriptive message, something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nWatch plugin YourFaultyPlugin attempted to register key `q`, that is reserved internally for quitting watch mode. Please change the configuration key for this plugin.\n\n")),(0,o.kt)("p",null,"Third-party plugins are also forbidden to overwrite a key reserved already by another third-party plugin present earlier in the configured plugins list (",(0,o.kt)("inlineCode",{parentName:"p"},"watchPlugins")," array setting). When this happens, you\u2019ll also get an error message that tries to help you fix that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nWatch plugins YourFaultyPlugin and TheirFaultyPlugin both attempted to register key `x`. Please change the key configuration for one of the conflicting plugins to avoid overlap.\n\n")))}c.isMDXComponent=!0}}]);