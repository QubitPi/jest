"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4008],{56601:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"getting-started","title":"Getting Started","description":"Install Jest using your favorite package manager:","source":"@site/versioned_docs/version-29.7/GettingStarted.md","sourceDirName":".","slug":"/getting-started","permalink":"/docs/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/jestjs/jest/edit/main/website/versioned_docs/version-29.7/GettingStarted.md","tags":[],"version":"29.7","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738910716000,"frontMatter":{"id":"getting-started","title":"Getting Started"},"sidebar":"docs","next":{"title":"Using Matchers","permalink":"/docs/using-matchers"}}');var a=n(62540),r=n(43023),i=n(65457),l=n(97265);const o={id:"getting-started",title:"Getting Started"},c=void 0,d={},u=[{value:"Running from command line",id:"running-from-command-line",level:2},{value:"Additional Configuration",id:"additional-configuration",level:2},{value:"Generate a basic configuration file",id:"generate-a-basic-configuration-file",level:3},{value:"Using Babel",id:"using-babel",level:3},{value:"Using webpack",id:"using-webpack",level:3},{value:"Using Vite",id:"using-vite",level:3},{value:"Using Parcel",id:"using-parcel",level:3},{value:"Using TypeScript",id:"using-typescript",level:3},{value:"Via <code>babel</code>",id:"via-babel",level:4},{value:"Via <code>ts-jest</code>",id:"via-ts-jest",level:4},{value:"Type definitions",id:"type-definitions",level:4},{value:"Using ESLint",id:"using-eslint",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Install Jest using your favorite package manager:"}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev jest\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add --dev jest\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev jest\n"})})})]}),"\n",(0,a.jsxs)(s.p,{children:["Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a ",(0,a.jsx)(s.code,{children:"sum.js"})," file:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"function sum(a, b) {\n  return a + b;\n}\nmodule.exports = sum;\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Then, create a file named ",(0,a.jsx)(s.code,{children:"sum.test.js"}),". This will contain our actual test:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"const sum = require('./sum');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Add the following section to your ",(0,a.jsx)(s.code,{children:"package.json"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Finally, run ",(0,a.jsx)(s.code,{children:"yarn test"})," or ",(0,a.jsx)(s.code,{children:"npm test"})," and Jest will print this message:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"PASS  ./sum.test.js\n\u2713 adds 1 + 2 to equal 3 (5ms)\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"You just successfully wrote your first test using Jest!"})}),"\n",(0,a.jsxs)(s.p,{children:["This test used ",(0,a.jsx)(s.code,{children:"expect"})," and ",(0,a.jsx)(s.code,{children:"toBe"})," to test that two values were exactly identical. To learn about the other things that Jest can test, see ",(0,a.jsx)(s.a,{href:"/docs/using-matchers",children:"Using Matchers"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"running-from-command-line",children:"Running from command line"}),"\n",(0,a.jsxs)(s.p,{children:["You can run Jest directly from the CLI (if it's globally available in your ",(0,a.jsx)(s.code,{children:"PATH"}),", e.g. by ",(0,a.jsx)(s.code,{children:"yarn global add jest"})," or ",(0,a.jsx)(s.code,{children:"npm install jest --global"}),") with a variety of useful options."]}),"\n",(0,a.jsxs)(s.p,{children:["Here's how to run Jest on files matching ",(0,a.jsx)(s.code,{children:"my-test"}),", using ",(0,a.jsx)(s.code,{children:"config.json"})," as a configuration file and display a native OS notification after the run:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"jest my-test --notify --config=config.json\n"})}),"\n",(0,a.jsxs)(s.p,{children:["If you'd like to learn more about running ",(0,a.jsx)(s.code,{children:"jest"})," through the command line, take a look at the ",(0,a.jsx)(s.a,{href:"/docs/cli",children:"Jest CLI Options"})," page."]}),"\n",(0,a.jsx)(s.h2,{id:"additional-configuration",children:"Additional Configuration"}),"\n",(0,a.jsx)(s.h3,{id:"generate-a-basic-configuration-file",children:"Generate a basic configuration file"}),"\n",(0,a.jsx)(s.p,{children:"Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:"}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm init jest@latest\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn create jest\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm create jest\n"})})})]}),"\n",(0,a.jsx)(s.h3,{id:"using-babel",children:"Using Babel"}),"\n",(0,a.jsxs)(s.p,{children:["To use ",(0,a.jsx)(s.a,{href:"https://babeljs.io/",children:"Babel"}),", install required dependencies:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add --dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev babel-jest @babel/core @babel/preset-env\n"})})})]}),"\n",(0,a.jsxs)(s.p,{children:["Configure Babel to target your current version of Node by creating a ",(0,a.jsx)(s.code,{children:"babel.config.js"})," file in the root of your project:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],\n};\n"})}),"\n",(0,a.jsxs)(s.p,{children:["The ideal configuration for Babel will depend on your project. See ",(0,a.jsx)(s.a,{href:"https://babeljs.io/docs/en/",children:"Babel's docs"})," for more details."]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{markdown:"span",children:(0,a.jsx)("strong",{children:"Making your Babel config jest-aware"})}),(0,a.jsxs)(s.p,{children:["Jest will set ",(0,a.jsx)(s.code,{children:"process.env.NODE_ENV"})," to ",(0,a.jsx)(s.code,{children:"'test'"})," if it's not set to something else. You can use that in your configuration to conditionally setup only the compilation needed for Jest, e.g."]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = api => {\n  const isTest = api.env('test');\n  // You can use isTest to determine what presets and plugins to use.\n\n  return {\n    // ...\n  };\n};\n"})}),(0,a.jsxs)(s.admonition,{type:"note",children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"babel-jest"})," is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. To avoid this behavior, you can explicitly reset the ",(0,a.jsx)(s.code,{children:"transform"})," configuration option:"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {},\n};\n"})})]})]}),"\n",(0,a.jsx)(s.h3,{id:"using-webpack",children:"Using webpack"}),"\n",(0,a.jsxs)(s.p,{children:["Jest can be used in projects that use ",(0,a.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"})," to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools. Refer to the ",(0,a.jsx)(s.a,{href:"/docs/webpack",children:"webpack guide"})," to get started."]}),"\n",(0,a.jsx)(s.h3,{id:"using-vite",children:"Using Vite"}),"\n",(0,a.jsxs)(s.p,{children:["Jest can be used in projects that use ",(0,a.jsx)(s.a,{href:"https://vitejs.dev/",children:"vite"})," to serve source code over native ESM to provide some frontend tooling, vite is an opinionated tool and does offer some out-of-the box workflows. Jest is not fully supported by vite due to how the ",(0,a.jsx)(s.a,{href:"https://github.com/vitejs/vite/issues/1955#issuecomment-776009094",children:"plugin system"})," from vite works, but there are some working examples for first-class jest integration using ",(0,a.jsx)(s.code,{children:"vite-jest"}),", since this is not fully supported, you might as well read the ",(0,a.jsxs)(s.a,{href:"https://github.com/sodatea/vite-jest/tree/main/packages/vite-jest#limitations-and-differences-with-commonjs-tests",children:["limitation of the ",(0,a.jsx)(s.code,{children:"vite-jest"})]}),". Refer to the ",(0,a.jsx)(s.a,{href:"https://vitejs.dev/guide/",children:"vite guide"})," to get started."]}),"\n",(0,a.jsx)(s.h3,{id:"using-parcel",children:"Using Parcel"}),"\n",(0,a.jsxs)(s.p,{children:["Jest can be used in projects that use ",(0,a.jsx)(s.a,{href:"https://parceljs.org/",children:"parcel-bundler"})," to manage assets, styles, and compilation similar to webpack. Parcel requires zero configuration. Refer to the official ",(0,a.jsx)(s.a,{href:"https://parceljs.org/docs/",children:"docs"})," to get started."]}),"\n",(0,a.jsx)(s.h3,{id:"using-typescript",children:"Using TypeScript"}),"\n",(0,a.jsxs)(s.h4,{id:"via-babel",children:["Via ",(0,a.jsx)(s.code,{children:"babel"})]}),"\n",(0,a.jsxs)(s.p,{children:["Jest supports TypeScript, via Babel. First, make sure you followed the instructions on ",(0,a.jsx)(s.a,{href:"#using-babel",children:"using Babel"})," above. Next, install the ",(0,a.jsx)(s.code,{children:"@babel/preset-typescript"}),":"]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @babel/preset-typescript\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @babel/preset-typescript\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @babel/preset-typescript\n"})})})]}),"\n",(0,a.jsxs)(s.p,{children:["Then add ",(0,a.jsx)(s.code,{children:"@babel/preset-typescript"})," to the list of presets in your ",(0,a.jsx)(s.code,{children:"babel.config.js"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    ['@babel/preset-env', {targets: {node: 'current'}}],\n    // highlight-next-line\n    '@babel/preset-typescript',\n  ],\n};\n"})}),"\n",(0,a.jsxs)(s.p,{children:["However, there are some ",(0,a.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats",children:"caveats"})," to using TypeScript with Babel. Because TypeScript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. If you want that, you can use ",(0,a.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," instead, or just run the TypeScript compiler ",(0,a.jsx)(s.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",children:"tsc"})," separately (or as part of your build process)."]}),"\n",(0,a.jsxs)(s.h4,{id:"via-ts-jest",children:["Via ",(0,a.jsx)(s.code,{children:"ts-jest"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript."]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev ts-jest\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add --dev ts-jest\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev ts-jest\n"})})})]}),"\n",(0,a.jsxs)(s.p,{children:["In order for Jest to transpile TypeScript with ",(0,a.jsx)(s.code,{children:"ts-jest"}),", you may also need to create a ",(0,a.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file",children:"configuration"})," file."]}),"\n",(0,a.jsx)(s.h4,{id:"type-definitions",children:"Type definitions"}),"\n",(0,a.jsxs)(s.p,{children:["There are two ways to have ",(0,a.jsx)(s.a,{href:"/docs/api",children:"Jest global APIs"})," typed for test files written in TypeScript."]}),"\n",(0,a.jsxs)(s.p,{children:["You can use type definitions which ships with Jest and will update each time you update Jest. Install the ",(0,a.jsx)(s.code,{children:"@jest/globals"})," package:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @jest/globals\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @jest/globals\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @jest/globals\n"})})})]}),"\n",(0,a.jsx)(s.p,{children:"And import the APIs from it:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",metastring:'title="sum.test.ts"',children:"import {describe, expect, test} from '@jest/globals';\nimport {sum} from './sum';\n\ndescribe('sum module', () => {\n  test('adds 1 + 2 to equal 3', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n});\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["See the additional usage documentation of ",(0,a.jsxs)(s.a,{href:"/docs/api#typescript-usage",children:[(0,a.jsx)(s.code,{children:"describe.each"}),"/",(0,a.jsx)(s.code,{children:"test.each"})]})," and ",(0,a.jsx)(s.a,{href:"/docs/mock-function-api#typescript-usage",children:(0,a.jsx)(s.code,{children:"mock functions"})}),"."]})}),"\n",(0,a.jsxs)(s.p,{children:["Or you may choose to install the ",(0,a.jsx)(s.a,{href:"https://npmjs.com/package/@types/jest",children:(0,a.jsx)(s.code,{children:"@types/jest"})})," package. It provides types for Jest globals without a need to import them."]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @types/jest\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @types/jest\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @types/jest\n"})})})]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"@types/jest"})," is a third party library maintained at ",(0,a.jsx)(s.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest",children:"DefinitelyTyped"}),", hence the latest Jest features or versions may not be covered yet. Try to match versions of Jest and ",(0,a.jsx)(s.code,{children:"@types/jest"})," as closely as possible. For example, if you are using Jest ",(0,a.jsx)(s.code,{children:"27.4.0"})," then installing ",(0,a.jsx)(s.code,{children:"27.4.x"})," of ",(0,a.jsx)(s.code,{children:"@types/jest"})," is ideal."]})}),"\n",(0,a.jsx)(s.h3,{id:"using-eslint",children:"Using ESLint"}),"\n",(0,a.jsxs)(s.p,{children:["Jest can be used with ESLint without any further configuration as long as you import the ",(0,a.jsx)(s.a,{href:"/docs/api",children:"Jest global helpers"})," (",(0,a.jsx)(s.code,{children:"describe"}),", ",(0,a.jsx)(s.code,{children:"it"}),", etc.) from ",(0,a.jsx)(s.code,{children:"@jest/globals"})," before using them in your test file. This is necessary to avoid ",(0,a.jsx)(s.code,{children:"no-undef"})," errors from ESLint, which doesn't know about the Jest globals."]}),"\n",(0,a.jsxs)(s.p,{children:["If you'd like to avoid these imports, you can configure your ",(0,a.jsx)(s.a,{href:"https://eslint.org/docs/latest/use/configure/language-options#specifying-environments",children:"ESLint environment"})," to support these globals by adding the ",(0,a.jsx)(s.code,{children:"jest"})," environment:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "overrides": [\n    {\n      "files": ["tests/**/*"],\n      "env": {\n        "jest": true\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Or use ",(0,a.jsx)(s.a,{href:"https://github.com/jest-community/eslint-plugin-jest",children:(0,a.jsx)(s.code,{children:"eslint-plugin-jest"})}),", which has a similar effect:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "overrides": [\n    {\n      "files": ["tests/**/*"],\n      "plugins": ["jest"],\n      "env": {\n        "jest/globals": true\n      }\n    }\n  ]\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},97265:(e,s,n)=>{n.d(s,{A:()=>i});n(63696);var t=n(11750);const a={tabItem:"tabItem_wHwb"};var r=n(62540);function i(e){let{children:s,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:n,children:s})}},65457:(e,s,n)=>{n.d(s,{A:()=>w});var t=n(63696),a=n(11750),r=n(93707),i=n(49519),l=n(83604),o=n(95196),c=n(76229),d=n(88030);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:a}}=e;return{value:s,label:n,attributes:t,default:a}}))}(n);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:n}=e;const a=(0,i.W6)(),r=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(a.location.search);s.set(r,e),a.replace({...a.location,search:s.toString()})}),[r,a])]}function g(e){const{defaultValue:s,queryString:n=!1,groupId:a}=e,r=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:r}))),[c,u]=j({queryString:n,groupId:a}),[g,m]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,r]=(0,d.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=n(95200);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=n(62540);function f(e){let{className:s,block:n,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const s=e.currentTarget,n=o.indexOf(s),a=l[n].value;a!==t&&(c(s),i(a))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(f,{...s,...e}),(0,x.jsx)(v,{...s,...e})]})}function w(e){const s=(0,m.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(s))}},43023:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(63696);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);