"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9267],{12276:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"manual-mocks","title":"Manual Mocks","description":"Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data. This ensures your tests will be fast and not flaky.","source":"@site/versioned_docs/version-29.7/ManualMocks.md","sourceDirName":".","slug":"/manual-mocks","permalink":"/ru/docs/manual-mocks","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ru","tags":[],"version":"29.7","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738912609000,"frontMatter":{"id":"manual-mocks","title":"Manual Mocks"},"sidebar":"docs","previous":{"title":"Timer Mocks","permalink":"/ru/docs/timer-mocks"},"next":{"title":"ES6 Class Mocks","permalink":"/ru/docs/es6-class-mocks"}}');var o=s(62540),i=s(43023);const c={id:"manual-mocks",title:"Manual Mocks"},a=void 0,r={},l=[{value:"Mocking user modules",id:"mocking-user-modules",level:2},{value:"Mocking Node modules",id:"mocking-node-modules",level:2},{value:"Examples",id:"examples",level:2},{value:"Using with ES module imports",id:"using-with-es-module-imports",level:2},{value:"Mocking methods which are not implemented in JSDOM",id:"mocking-methods-which-are-not-implemented-in-jsdom",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data. This ensures your tests will be fast and not flaky."}),"\n",(0,o.jsx)(t.h2,{id:"mocking-user-modules",children:"Mocking user modules"}),"\n",(0,o.jsxs)(t.p,{children:["Manual mocks are defined by writing a module in a ",(0,o.jsx)(t.code,{children:"__mocks__/"})," subdirectory immediately adjacent to the module. For example, to mock a module called ",(0,o.jsx)(t.code,{children:"user"})," in the ",(0,o.jsx)(t.code,{children:"models"})," directory, create a file called ",(0,o.jsx)(t.code,{children:"user.js"})," and put it in the ",(0,o.jsx)(t.code,{children:"models/__mocks__"})," directory."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"__mocks__"})," folder is case-sensitive, so naming the directory ",(0,o.jsx)(t.code,{children:"__MOCKS__"})," will break on some systems."]})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["When we require that module in our tests (meaning we want to use the manual mock instead of the real implementation), explicitly calling ",(0,o.jsx)(t.code,{children:"jest.mock('./moduleName')"})," is ",(0,o.jsx)(t.strong,{children:"required"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"mocking-node-modules",children:"Mocking Node modules"}),"\n",(0,o.jsxs)(t.p,{children:["If the module you are mocking is a Node module (e.g.: ",(0,o.jsx)(t.code,{children:"lodash"}),"), the mock should be placed in the ",(0,o.jsx)(t.code,{children:"__mocks__"})," directory adjacent to ",(0,o.jsx)(t.code,{children:"node_modules"})," (unless you configured ",(0,o.jsx)(t.a,{href:"/ru/docs/configuration#roots-arraystring",children:(0,o.jsx)(t.code,{children:"roots"})})," to point to a folder other than the project root) and will be ",(0,o.jsx)(t.strong,{children:"automatically"})," mocked. There's no need to explicitly call ",(0,o.jsx)(t.code,{children:"jest.mock('module_name')"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Scoped modules (also known as ",(0,o.jsx)(t.a,{href:"https://docs.npmjs.com/cli/v6/using-npm/scope",children:"scoped packages"}),") can be mocked by creating a file in a directory structure that matches the name of the scoped module. For example, to mock a scoped module called ",(0,o.jsx)(t.code,{children:"@scope/project-name"}),", create a file at ",(0,o.jsx)(t.code,{children:"__mocks__/@scope/project-name.js"}),", creating the ",(0,o.jsx)(t.code,{children:"@scope/"})," directory accordingly."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["If we want to mock Node's built-in modules (e.g.: ",(0,o.jsx)(t.code,{children:"fs"})," or ",(0,o.jsx)(t.code,{children:"path"}),"), then explicitly calling e.g. ",(0,o.jsx)(t.code,{children:"jest.mock('path')"})," is ",(0,o.jsx)(t.strong,{children:"required"}),", because built-in modules are not mocked by default."]})}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 __mocks__\n\u2502\xa0\xa0 \u2514\u2500\u2500 fs.js\n\u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u251c\u2500\u2500 __mocks__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 user.js\n\u251c\u2500\u2500 node_modules\n\u2514\u2500\u2500 views\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When a manual mock exists for a given module, Jest's module system will use that module when explicitly calling ",(0,o.jsx)(t.code,{children:"jest.mock('moduleName')"}),". However, when ",(0,o.jsx)(t.code,{children:"automock"})," is set to ",(0,o.jsx)(t.code,{children:"true"}),", the manual mock implementation will be used instead of the automatically created mock, even if ",(0,o.jsx)(t.code,{children:"jest.mock('moduleName')"})," is not called. To opt out of this behavior you will need to explicitly call ",(0,o.jsx)(t.code,{children:"jest.unmock('moduleName')"})," in tests that should use the actual module implementation."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["In order to mock properly, Jest needs ",(0,o.jsx)(t.code,{children:"jest.mock('moduleName')"})," to be in the same scope as the ",(0,o.jsx)(t.code,{children:"require/import"})," statement."]})}),"\n",(0,o.jsxs)(t.p,{children:["Here's a contrived example where we have a module that provides a summary of all the files in a given directory. In this case, we use the core (built in) ",(0,o.jsx)(t.code,{children:"fs"})," module."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",metastring:'title="FileSummarizer.js"',children:"'use strict';\n\nconst fs = require('fs');\n\nfunction summarizeFilesInDirectorySync(directory) {\n  return fs.readdirSync(directory).map(fileName => ({\n    directory,\n    fileName,\n  }));\n}\n\nexports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Since we'd like our tests to avoid actually hitting the disk (that's pretty slow and fragile), we create a manual mock for the ",(0,o.jsx)(t.code,{children:"fs"})," module by extending an automatic mock. Our manual mock will implement custom versions of the ",(0,o.jsx)(t.code,{children:"fs"})," APIs that we can build on for our tests:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",metastring:'title="__mocks__/fs.js"',children:"'use strict';\n\nconst path = require('path');\n\nconst fs = jest.createMockFromModule('fs');\n\n// This is a custom function that our tests can use during setup to specify\n// what the files on the \"mock\" filesystem should look like when any of the\n// `fs` APIs are used.\nlet mockFiles = Object.create(null);\nfunction __setMockFiles(newMockFiles) {\n  mockFiles = Object.create(null);\n  for (const file in newMockFiles) {\n    const dir = path.dirname(file);\n\n    if (!mockFiles[dir]) {\n      mockFiles[dir] = [];\n    }\n    mockFiles[dir].push(path.basename(file));\n  }\n}\n\n// A custom version of `readdirSync` that reads from the special mocked out\n// file list set via __setMockFiles\nfunction readdirSync(directoryPath) {\n  return mockFiles[directoryPath] || [];\n}\n\nfs.__setMockFiles = __setMockFiles;\nfs.readdirSync = readdirSync;\n\nmodule.exports = fs;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Now we write our test. In this case ",(0,o.jsx)(t.code,{children:"jest.mock('fs')"})," must be called explicitly, because ",(0,o.jsx)(t.code,{children:"fs"})," is Node\u2019s built-in module:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/FileSummarizer-test.js"',children:"'use strict';\n\njest.mock('fs');\n\ndescribe('listFilesInDirectorySync', () => {\n  const MOCK_FILE_INFO = {\n    '/path/to/file1.js': 'console.log(\"file1 contents\");',\n    '/path/to/file2.txt': 'file2 contents',\n  };\n\n  beforeEach(() => {\n    // Set up some mocked out file info before each test\n    require('fs').__setMockFiles(MOCK_FILE_INFO);\n  });\n\n  test('includes all files in the directory in the summary', () => {\n    const FileSummarizer = require('../FileSummarizer');\n    const fileSummary =\n      FileSummarizer.summarizeFilesInDirectorySync('/path/to');\n\n    expect(fileSummary.length).toBe(2);\n  });\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The example mock shown here uses ",(0,o.jsx)(t.a,{href:"/ru/docs/jest-object#jestcreatemockfrommodulemodulename",children:(0,o.jsx)(t.code,{children:"jest.createMockFromModule"})})," to generate an automatic mock, and overrides its default behavior. This is the recommended approach, but is completely optional. If you do not want to use the automatic mock at all, you can export your own functions from the mock file. One downside to fully manual mocks is that they're manual \u2013 meaning you have to manually update them any time the module they are mocking changes. Because of this, it's best to use or extend the automatic mock when it works for your needs."]}),"\n",(0,o.jsxs)(t.p,{children:["To ensure that a manual mock and its real implementation stay in sync, it might be useful to require the real module using ",(0,o.jsx)(t.a,{href:"/ru/docs/jest-object#jestrequireactualmodulename",children:(0,o.jsx)(t.code,{children:"jest.requireActual(moduleName)"})})," in your manual mock and amending it with mock functions before exporting it."]}),"\n",(0,o.jsxs)(t.p,{children:["The code for this example is available at ",(0,o.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/manual-mocks",children:"examples/manual-mocks"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"using-with-es-module-imports",children:"Using with ES module imports"}),"\n",(0,o.jsxs)(t.p,{children:["If you're using ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",children:"ES module imports"})," then you'll normally be inclined to put your ",(0,o.jsx)(t.code,{children:"import"})," statements at the top of the test file. But often you need to instruct Jest to use a mock before modules use it. For this reason, Jest will automatically hoist ",(0,o.jsx)(t.code,{children:"jest.mock"})," calls to the top of the module (before any imports). To learn more about this and see it in action, see ",(0,o.jsx)(t.a,{href:"https://github.com/kentcdodds/how-jest-mocking-works",children:"this repo"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"jest.mock"})," calls cannot be hoisted to the top of the module if you enabled ECMAScript modules support. The ESM module loader always evaluates the static imports before executing code. See ",(0,o.jsx)(t.a,{href:"/ru/docs/ecmascript-modules",children:"ECMAScriptModules"})," for details."]})}),"\n",(0,o.jsx)(t.h2,{id:"mocking-methods-which-are-not-implemented-in-jsdom",children:"Mocking methods which are not implemented in JSDOM"}),"\n",(0,o.jsxs)(t.p,{children:["If some code uses a method which JSDOM (the DOM implementation used by Jest) hasn't implemented yet, testing it is not easily possible. This is e.g. the case with ",(0,o.jsx)(t.code,{children:"window.matchMedia()"}),". Jest returns ",(0,o.jsx)(t.code,{children:"TypeError: window.matchMedia is not a function"})," and doesn't properly execute the test."]}),"\n",(0,o.jsxs)(t.p,{children:["In this case, mocking ",(0,o.jsx)(t.code,{children:"matchMedia"})," in the test file should solve the issue:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"Object.defineProperty(window, 'matchMedia', {\n  writable: true,\n  value: jest.fn().mockImplementation(query => ({\n    matches: false,\n    media: query,\n    onchange: null,\n    addListener: jest.fn(), // deprecated\n    removeListener: jest.fn(), // deprecated\n    addEventListener: jest.fn(),\n    removeEventListener: jest.fn(),\n    dispatchEvent: jest.fn(),\n  })),\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This works if ",(0,o.jsx)(t.code,{children:"window.matchMedia()"})," is used in a function (or method) which is invoked in the test. If ",(0,o.jsx)(t.code,{children:"window.matchMedia()"})," is executed directly in the tested file, Jest reports the same error. In this case, the solution is to move the manual mock into a separate file and include this one in the test ",(0,o.jsx)(t.strong,{children:"before"})," the tested file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import './matchMedia.mock'; // Must be imported before the tested file\nimport {myMethod} from './file-to-test';\n\ndescribe('myMethod()', () => {\n  // Test the method here...\n});\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},43023:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>a});var n=s(63696);const o={},i=n.createContext(o);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);