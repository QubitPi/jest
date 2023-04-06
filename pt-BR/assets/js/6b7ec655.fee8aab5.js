"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[38026],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=m(n),p=a,k=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?o.createElement(k,s(s({ref:t},c),{},{components:n})):o.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,s[1]=r;for(var m=2;m<i;m++)s[m]=n[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var o=n(25773),a=(n(27378),n(35318));const i={id:"manual-mocks",title:"Manual Mocks"},s=void 0,r={unversionedId:"manual-mocks",id:"version-29.4/manual-mocks",title:"Manual Mocks",description:"Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data. This ensures your tests will be fast and not flaky.",source:"@site/versioned_docs/version-29.4/ManualMocks.md",sourceDirName:".",slug:"/manual-mocks",permalink:"/jest/pt-BR/docs/29.4/manual-mocks",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.4",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"6 de abr. de 2023",frontMatter:{id:"manual-mocks",title:"Manual Mocks"},sidebar:"docs",previous:{title:"Timer Mocks",permalink:"/jest/pt-BR/docs/29.4/timer-mocks"},next:{title:"ES6 Class Mocks",permalink:"/jest/pt-BR/docs/29.4/es6-class-mocks"}},l={},m=[{value:"Mocking user modules",id:"mocking-user-modules",level:2},{value:"Mocking Node modules",id:"mocking-node-modules",level:2},{value:"Examples",id:"examples",level:2},{value:"Using with ES module imports",id:"using-with-es-module-imports",level:2},{value:"Mocking methods which are not implemented in JSDOM",id:"mocking-methods-which-are-not-implemented-in-jsdom",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data. This ensures your tests will be fast and not flaky."),(0,a.kt)("h2",{id:"mocking-user-modules"},"Mocking user modules"),(0,a.kt)("p",null,"Manual mocks are defined by writing a module in a ",(0,a.kt)("inlineCode",{parentName:"p"},"__mocks__/")," subdirectory immediately adjacent to the module. For example, to mock a module called ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"models")," directory, create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"user.js")," and put it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"models/__mocks__")," directory."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"__mocks__")," folder is case-sensitive, so naming the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"__MOCKS__")," will break on some systems.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When we require that module in our tests (meaning we want to use the manual mock instead of the real implementation), explicitly calling ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock('./moduleName')")," is ",(0,a.kt)("strong",{parentName:"p"},"required"),".")),(0,a.kt)("h2",{id:"mocking-node-modules"},"Mocking Node modules"),(0,a.kt)("p",null,"If the module you are mocking is a Node module (e.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash"),"), the mock should be placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"__mocks__")," directory adjacent to ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," (unless you configured ",(0,a.kt)("a",{parentName:"p",href:"/jest/pt-BR/docs/29.4/configuration#roots-arraystring"},(0,a.kt)("inlineCode",{parentName:"a"},"roots"))," to point to a folder other than the project root) and will be ",(0,a.kt)("strong",{parentName:"p"},"automatically")," mocked. There's no need to explicitly call ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock('module_name')"),"."),(0,a.kt)("p",null,"Scoped modules (also known as ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/using-npm/scope"},"scoped packages"),") can be mocked by creating a file in a directory structure that matches the name of the scoped module. For example, to mock a scoped module called ",(0,a.kt)("inlineCode",{parentName:"p"},"@scope/project-name"),", create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"__mocks__/@scope/project-name.js"),", creating the ",(0,a.kt)("inlineCode",{parentName:"p"},"@scope/")," directory accordingly."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If we want to mock Node's build-in modules (e.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"fs")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"), then explicitly calling e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock('path')")," is ",(0,a.kt)("strong",{parentName:"p"},"required"),", because build-in modules are not mocked by default.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 __mocks__\n\u2502\xa0\xa0 \u2514\u2500\u2500 fs.js\n\u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u251c\u2500\u2500 __mocks__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 user.js\n\u251c\u2500\u2500 node_modules\n\u2514\u2500\u2500 views\n")),(0,a.kt)("p",null,"When a manual mock exists for a given module, Jest's module system will use that module when explicitly calling ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock('moduleName')"),". However, when ",(0,a.kt)("inlineCode",{parentName:"p"},"automock")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the manual mock implementation will be used instead of the automatically created mock, even if ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock('moduleName')")," is not called. To opt out of this behavior you will need to explicitly call ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.unmock('moduleName')")," in tests that should use the actual module implementation."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In order to mock properly, Jest needs ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock('moduleName')")," to be in the same scope as the ",(0,a.kt)("inlineCode",{parentName:"p"},"require/import")," statement.")),(0,a.kt)("p",null,"Here's a contrived example where we have a module that provides a summary of all the files in a given directory. In this case, we use the core (built in) ",(0,a.kt)("inlineCode",{parentName:"p"},"fs")," module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="FileSummarizer.js"',title:'"FileSummarizer.js"'},"'use strict';\n\nconst fs = require('fs');\n\nfunction summarizeFilesInDirectorySync(directory) {\n  return fs.readdirSync(directory).map(fileName => ({\n    directory,\n    fileName,\n  }));\n}\n\nexports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;\n")),(0,a.kt)("p",null,"Since we'd like our tests to avoid actually hitting the disk (that's pretty slow and fragile), we create a manual mock for the ",(0,a.kt)("inlineCode",{parentName:"p"},"fs")," module by extending an automatic mock. Our manual mock will implement custom versions of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fs")," APIs that we can build on for our tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__mocks__/fs.js"',title:'"__mocks__/fs.js"'},"'use strict';\n\nconst path = require('path');\n\nconst fs = jest.createMockFromModule('fs');\n\n// This is a custom function that our tests can use during setup to specify\n// what the files on the \"mock\" filesystem should look like when any of the\n// `fs` APIs are used.\nlet mockFiles = Object.create(null);\nfunction __setMockFiles(newMockFiles) {\n  mockFiles = Object.create(null);\n  for (const file in newMockFiles) {\n    const dir = path.dirname(file);\n\n    if (!mockFiles[dir]) {\n      mockFiles[dir] = [];\n    }\n    mockFiles[dir].push(path.basename(file));\n  }\n}\n\n// A custom version of `readdirSync` that reads from the special mocked out\n// file list set via __setMockFiles\nfunction readdirSync(directoryPath) {\n  return mockFiles[directoryPath] || [];\n}\n\nfs.__setMockFiles = __setMockFiles;\nfs.readdirSync = readdirSync;\n\nmodule.exports = fs;\n")),(0,a.kt)("p",null,"Now we write our test. In this case ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock('fs')")," must be called explicitly, because ",(0,a.kt)("inlineCode",{parentName:"p"},"fs")," is Node\u2019s build-in module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/FileSummarizer-test.js"',title:'"__tests__/FileSummarizer-test.js"'},"'use strict';\n\njest.mock('fs');\n\ndescribe('listFilesInDirectorySync', () => {\n  const MOCK_FILE_INFO = {\n    '/path/to/file1.js': 'console.log(\"file1 contents\");',\n    '/path/to/file2.txt': 'file2 contents',\n  };\n\n  beforeEach(() => {\n    // Set up some mocked out file info before each test\n    require('fs').__setMockFiles(MOCK_FILE_INFO);\n  });\n\n  test('includes all files in the directory in the summary', () => {\n    const FileSummarizer = require('../FileSummarizer');\n    const fileSummary =\n      FileSummarizer.summarizeFilesInDirectorySync('/path/to');\n\n    expect(fileSummary.length).toBe(2);\n  });\n});\n")),(0,a.kt)("p",null,"The example mock shown here uses ",(0,a.kt)("a",{parentName:"p",href:"/jest/pt-BR/docs/29.4/jest-object#jestcreatemockfrommodulemodulename"},(0,a.kt)("inlineCode",{parentName:"a"},"jest.createMockFromModule"))," to generate an automatic mock, and overrides its default behavior. This is the recommended approach, but is completely optional. If you do not want to use the automatic mock at all, you can export your own functions from the mock file. One downside to fully manual mocks is that they're manual \u2013 meaning you have to manually update them any time the module they are mocking changes. Because of this, it's best to use or extend the automatic mock when it works for your needs."),(0,a.kt)("p",null,"To ensure that a manual mock and its real implementation stay in sync, it might be useful to require the real module using ",(0,a.kt)("a",{parentName:"p",href:"/jest/pt-BR/docs/29.4/jest-object#jestrequireactualmodulename"},(0,a.kt)("inlineCode",{parentName:"a"},"jest.requireActual(moduleName)"))," in your manual mock and amending it with mock functions before exporting it."),(0,a.kt)("p",null,"The code for this example is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/manual-mocks"},"examples/manual-mocks"),"."),(0,a.kt)("h2",{id:"using-with-es-module-imports"},"Using with ES module imports"),(0,a.kt)("p",null,"If you're using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},"ES module imports")," then you'll normally be inclined to put your ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statements at the top of the test file. But often you need to instruct Jest to use a mock before modules use it. For this reason, Jest will automatically hoist ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock")," calls to the top of the module (before any imports). To learn more about this and see it in action, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/how-jest-mocking-works"},"this repo"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock")," calls cannot be hoisted to the top of the module if you enabled ECMAScript modules support. The ESM module loader always evaluates the static imports before executing code. See ",(0,a.kt)("a",{parentName:"p",href:"/jest/pt-BR/docs/29.4/ecmascript-modules"},"ECMAScriptModules")," for details.")),(0,a.kt)("h2",{id:"mocking-methods-which-are-not-implemented-in-jsdom"},"Mocking methods which are not implemented in JSDOM"),(0,a.kt)("p",null,"If some code uses a method which JSDOM (the DOM implementation used by Jest) hasn't implemented yet, testing it is not easily possible. This is e.g. the case with ",(0,a.kt)("inlineCode",{parentName:"p"},"window.matchMedia()"),". Jest returns ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeError: window.matchMedia is not a function")," and doesn't properly execute the test."),(0,a.kt)("p",null,"In this case, mocking ",(0,a.kt)("inlineCode",{parentName:"p"},"matchMedia")," in the test file should solve the issue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Object.defineProperty(window, 'matchMedia', {\n  writable: true,\n  value: jest.fn().mockImplementation(query => ({\n    matches: false,\n    media: query,\n    onchange: null,\n    addListener: jest.fn(), // deprecated\n    removeListener: jest.fn(), // deprecated\n    addEventListener: jest.fn(),\n    removeEventListener: jest.fn(),\n    dispatchEvent: jest.fn(),\n  })),\n});\n")),(0,a.kt)("p",null,"This works if ",(0,a.kt)("inlineCode",{parentName:"p"},"window.matchMedia()")," is used in a function (or method) which is invoked in the test. If ",(0,a.kt)("inlineCode",{parentName:"p"},"window.matchMedia()")," is executed directly in the tested file, Jest reports the same error. In this case, the solution is to move the manual mock into a separate file and include this one in the test ",(0,a.kt)("strong",{parentName:"p"},"before")," the tested file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import './matchMedia.mock'; // Must be imported before the tested file\nimport {myMethod} from './file-to-test';\n\ndescribe('myMethod()', () => {\n  // Test the method here...\n});\n")))}d.isMDXComponent=!0}}]);