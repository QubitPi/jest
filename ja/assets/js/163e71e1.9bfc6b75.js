"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1160],{48791:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"getting-started","title":"Getting Started","description":"Install Jest using your favorite package manager:","source":"@site/../docs/GettingStarted.md","sourceDirName":".","slug":"/getting-started","permalink":"/ja/docs/next/getting-started","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ja","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738912609000,"frontMatter":{"id":"getting-started","title":"Getting Started"},"sidebar":"docs","next":{"title":"Using Matchers","permalink":"/ja/docs/next/using-matchers"}}');var a=s(62540),r=s(43023),i=s(65457),l=s(97265);const o={id:"getting-started",title:"Getting Started"},c=void 0,d={},h=[{value:"Running from command line",id:"running-from-command-line",level:2},{value:"Additional Configuration",id:"additional-configuration",level:2},{value:"Generate a basic configuration file",id:"generate-a-basic-configuration-file",level:3},{value:"Using Babel",id:"using-babel",level:3},{value:"Using with bundlers",id:"using-with-bundlers",level:2},{value:"Using webpack",id:"using-webpack",level:3},{value:"Using Vite",id:"using-vite",level:3},{value:"Using Parcel",id:"using-parcel",level:3},{value:"Using TypeScript",id:"using-typescript",level:3},{value:"Via <code>babel</code>",id:"via-babel",level:4},{value:"Via <code>ts-jest</code>",id:"via-ts-jest",level:4},{value:"Type definitions",id:"type-definitions",level:4},{value:"Using ESLint",id:"using-eslint",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Install Jest using your favorite package manager:"}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev jest\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev jest\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a ",(0,a.jsx)(n.code,{children:"sum.js"})," file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"function sum(a, b) {\n  return a + b;\n}\nmodule.exports = sum;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, create a file named ",(0,a.jsx)(n.code,{children:"sum.test.js"}),". This will contain our actual test:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const sum = require('./sum');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Add the following section to your ",(0,a.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Finally, run ",(0,a.jsx)(n.code,{children:"yarn test"})," or ",(0,a.jsx)(n.code,{children:"npm test"})," and Jest will print this message:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"PASS  ./sum.test.js\n\u2713 adds 1 + 2 to equal 3 (5ms)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"You just successfully wrote your first test using Jest!"})}),"\n",(0,a.jsxs)(n.p,{children:["This test used ",(0,a.jsx)(n.code,{children:"expect"})," and ",(0,a.jsx)(n.code,{children:"toBe"})," to test that two values were exactly identical. To learn about the other things that Jest can test, see ",(0,a.jsx)(n.a,{href:"/ja/docs/next/using-matchers",children:"Using Matchers"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"running-from-command-line",children:"Running from command line"}),"\n",(0,a.jsxs)(n.p,{children:["You can run Jest directly from the CLI (if it's globally available in your ",(0,a.jsx)(n.code,{children:"PATH"}),", e.g. by ",(0,a.jsx)(n.code,{children:"yarn global add jest"})," or ",(0,a.jsx)(n.code,{children:"npm install jest --global"}),") with a variety of useful options."]}),"\n",(0,a.jsxs)(n.p,{children:["Here's how to run Jest on files matching ",(0,a.jsx)(n.code,{children:"my-test"}),", using ",(0,a.jsx)(n.code,{children:"config.json"})," as a configuration file and display a native OS notification after the run:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"jest my-test --notify --config=config.json\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you'd like to learn more about running ",(0,a.jsx)(n.code,{children:"jest"})," through the command line, take a look at the ",(0,a.jsx)(n.a,{href:"/ja/docs/next/cli",children:"Jest CLI Options"})," page."]}),"\n",(0,a.jsx)(n.h2,{id:"additional-configuration",children:"Additional Configuration"}),"\n",(0,a.jsx)(n.h3,{id:"generate-a-basic-configuration-file",children:"Generate a basic configuration file"}),"\n",(0,a.jsx)(n.p,{children:"Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:"}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm init jest@latest\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn create jest\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm create jest\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"using-babel",children:"Using Babel"}),"\n",(0,a.jsxs)(n.p,{children:["To use ",(0,a.jsx)(n.a,{href:"https://babeljs.io/",children:"Babel"}),", install required dependencies:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev babel-jest @babel/core @babel/preset-env\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Configure Babel to target your current version of Node by creating a ",(0,a.jsx)(n.code,{children:"babel.config.js"})," file in the root of your project:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ideal configuration for Babel will depend on your project. See ",(0,a.jsx)(n.a,{href:"https://babeljs.io/docs/en/",children:"Babel's docs"})," for more details."]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{markdown:"span",children:(0,a.jsx)("strong",{children:"Making your Babel config jest-aware"})}),(0,a.jsxs)(n.p,{children:["Jest will set ",(0,a.jsx)(n.code,{children:"process.env.NODE_ENV"})," to ",(0,a.jsx)(n.code,{children:"'test'"})," if it's not set to something else. You can use that in your configuration to conditionally setup only the compilation needed for Jest, e.g."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = api => {\n  const isTest = api.env('test');\n  // You can use isTest to determine what presets and plugins to use.\n\n  return {\n    // ...\n  };\n};\n"})}),(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"babel-jest"})," is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. To avoid this behavior, you can explicitly reset the ",(0,a.jsx)(n.code,{children:"transform"})," configuration option:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {},\n};\n"})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"using-with-bundlers",children:"Using with bundlers"}),"\n",(0,a.jsx)(n.p,{children:"Most of the time you do not need to do anything special to work with different bundlers - the exception is if you have some plugin or configuration which generates files or have custom file resolution rules."}),"\n",(0,a.jsx)(n.h3,{id:"using-webpack",children:"Using webpack"}),"\n",(0,a.jsxs)(n.p,{children:["Jest can be used in projects that use ",(0,a.jsx)(n.a,{href:"https://webpack.js.org/",children:"webpack"})," to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools. Refer to the ",(0,a.jsx)(n.a,{href:"/ja/docs/next/webpack",children:"webpack guide"})," to get started."]}),"\n",(0,a.jsx)(n.h3,{id:"using-vite",children:"Using Vite"}),"\n",(0,a.jsxs)(n.p,{children:["Jest is not supported by Vite due to incompatibilities with the Vite ",(0,a.jsx)(n.a,{href:"https://github.com/vitejs/vite/issues/1955#issuecomment-776009094",children:"plugin system"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["There are examples for Jest integration with Vite in the ",(0,a.jsx)(n.a,{href:"https://github.com/sodatea/vite-jest",children:"vite-jest"})," library. However, this library is not compatible with versions of Vite later than 2.4.2."]}),"\n",(0,a.jsxs)(n.p,{children:["One alternative is ",(0,a.jsx)(n.a,{href:"https://vitest.dev/",children:"Vitest"})," which has an API compatible Jest."]}),"\n",(0,a.jsx)(n.h3,{id:"using-parcel",children:"Using Parcel"}),"\n",(0,a.jsxs)(n.p,{children:["Jest can be used in projects that use ",(0,a.jsx)(n.a,{href:"https://parceljs.org/",children:"parcel-bundler"})," to manage assets, styles, and compilation similar to webpack. Parcel requires zero configuration. Refer to the official ",(0,a.jsx)(n.a,{href:"https://parceljs.org/docs/",children:"docs"})," to get started."]}),"\n",(0,a.jsx)(n.h3,{id:"using-typescript",children:"Using TypeScript"}),"\n",(0,a.jsxs)(n.h4,{id:"via-babel",children:["Via ",(0,a.jsx)(n.code,{children:"babel"})]}),"\n",(0,a.jsxs)(n.p,{children:["Jest supports TypeScript, via Babel. First, make sure you followed the instructions on ",(0,a.jsx)(n.a,{href:"#using-babel",children:"using Babel"})," above. Next, install the ",(0,a.jsx)(n.code,{children:"@babel/preset-typescript"}),":"]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @babel/preset-typescript\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @babel/preset-typescript\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @babel/preset-typescript\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Then add ",(0,a.jsx)(n.code,{children:"@babel/preset-typescript"})," to the list of presets in your ",(0,a.jsx)(n.code,{children:"babel.config.js"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    ['@babel/preset-env', {targets: {node: 'current'}}],\n    // highlight-next-line\n    '@babel/preset-typescript',\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["However, there are some ",(0,a.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats",children:"caveats"})," to using TypeScript with Babel. Because TypeScript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. If you want that, you can use ",(0,a.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," instead, or just run the TypeScript compiler ",(0,a.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",children:"tsc"})," separately (or as part of your build process)."]}),"\n",(0,a.jsxs)(n.h4,{id:"via-ts-jest",children:["Via ",(0,a.jsx)(n.code,{children:"ts-jest"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript."]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev ts-jest\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev ts-jest\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev ts-jest\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["In order for Jest to transpile TypeScript with ",(0,a.jsx)(n.code,{children:"ts-jest"}),", you may also need to create a ",(0,a.jsx)(n.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file",children:"configuration"})," file."]}),"\n",(0,a.jsx)(n.h4,{id:"type-definitions",children:"Type definitions"}),"\n",(0,a.jsxs)(n.p,{children:["There are two ways to have ",(0,a.jsx)(n.a,{href:"/ja/docs/next/api",children:"Jest global APIs"})," typed for test files written in TypeScript."]}),"\n",(0,a.jsxs)(n.p,{children:["You can use type definitions which ships with Jest and will update each time you update Jest. Install the ",(0,a.jsx)(n.code,{children:"@jest/globals"})," package:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @jest/globals\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @jest/globals\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @jest/globals\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"And import the APIs from it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="sum.test.ts"',children:"import {describe, expect, test} from '@jest/globals';\nimport {sum} from './sum';\n\ndescribe('sum module', () => {\n  test('adds 1 + 2 to equal 3', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n});\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["See the additional usage documentation of ",(0,a.jsxs)(n.a,{href:"/ja/docs/next/api#typescript-usage",children:[(0,a.jsx)(n.code,{children:"describe.each"}),"/",(0,a.jsx)(n.code,{children:"test.each"})]})," and ",(0,a.jsx)(n.a,{href:"/ja/docs/next/mock-function-api#typescript-usage",children:(0,a.jsx)(n.code,{children:"mock functions"})}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["Or you may choose to install the ",(0,a.jsx)(n.a,{href:"https://npmjs.com/package/@types/jest",children:(0,a.jsx)(n.code,{children:"@types/jest"})})," package. It provides types for Jest globals without a need to import them."]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @types/jest\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @types/jest\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @types/jest\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@types/jest"})," is a third party library maintained at ",(0,a.jsx)(n.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest",children:"DefinitelyTyped"}),", hence the latest Jest features or versions may not be covered yet. Try to match versions of Jest and ",(0,a.jsx)(n.code,{children:"@types/jest"})," as closely as possible. For example, if you are using Jest ",(0,a.jsx)(n.code,{children:"27.4.0"})," then installing ",(0,a.jsx)(n.code,{children:"27.4.x"})," of ",(0,a.jsx)(n.code,{children:"@types/jest"})," is ideal."]})}),"\n",(0,a.jsx)(n.h3,{id:"using-eslint",children:"Using ESLint"}),"\n",(0,a.jsxs)(n.p,{children:["Jest can be used with ESLint without any further configuration as long as you import the ",(0,a.jsx)(n.a,{href:"/ja/docs/next/api",children:"Jest global helpers"})," (",(0,a.jsx)(n.code,{children:"describe"}),", ",(0,a.jsx)(n.code,{children:"it"}),", etc.) from ",(0,a.jsx)(n.code,{children:"@jest/globals"})," before using them in your test file. This is necessary to avoid ",(0,a.jsx)(n.code,{children:"no-undef"})," errors from ESLint, which doesn't know about the Jest globals."]}),"\n",(0,a.jsxs)(n.p,{children:["If you'd like to avoid these imports, you can configure your ",(0,a.jsx)(n.a,{href:"https://eslint.org/docs/latest/use/configure/language-options#specifying-environments",children:"ESLint environment"})," to support these globals by adding the ",(0,a.jsx)(n.code,{children:"jest"})," environment:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "overrides": [\n    {\n      "files": ["tests/**/*"],\n      "env": {\n        "jest": true\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Or use ",(0,a.jsx)(n.a,{href:"https://github.com/jest-community/eslint-plugin-jest",children:(0,a.jsx)(n.code,{children:"eslint-plugin-jest"})}),", which has a similar effect:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "overrides": [\n    {\n      "files": ["tests/**/*"],\n      "plugins": ["jest"],\n      "env": {\n        "jest/globals": true\n      }\n    }\n  ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},97265:(e,n,s)=>{s.d(n,{A:()=>i});s(63696);var t=s(11750);const a={tabItem:"tabItem_wHwb"};var r=s(62540);function i(e){let{children:n,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:s,children:n})}},65457:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(63696),a=s(11750),r=s(93707),i=s(49519),l=s(83604),o=s(95196),c=s(76229),d=s(88030);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,r=u(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,h]=j({queryString:s,groupId:a}),[g,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),x=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=s(95200);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=s(62540);function f(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),a=l[s].value;a!==t&&(c(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},43023:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(63696);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);