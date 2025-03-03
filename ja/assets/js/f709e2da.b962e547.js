"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1503],{48651:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"code-transformation","title":"Code Transformation","description":"Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you\'ll need to transform that code into plain JavaScript, similar to what you would do when building for browsers.","source":"@site/versioned_docs/version-29.7/CodeTransformation.md","sourceDirName":".","slug":"/code-transformation","permalink":"/ja/docs/code-transformation","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ja","tags":[],"version":"29.7","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1741006263000,"frontMatter":{"id":"code-transformation","title":"Code Transformation"},"sidebar":"api","previous":{"title":"Environment Variables","permalink":"/ja/docs/environment-variables"}}');var o=r(62540),t=r(43023);const i={id:"code-transformation",title:"Code Transformation"},a=void 0,c={},d=[{value:"Defaults",id:"defaults",level:2},{value:"Writing custom transformers",id:"writing-custom-transformers",level:2},{value:"Examples",id:"examples",level:3},{value:"TypeScript with type checking",id:"typescript-with-type-checking",level:3},{value:"Transforming images to their path",id:"transforming-images-to-their-path",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you'll need to transform that code into plain JavaScript, similar to what you would do when building for browsers."}),"\n",(0,o.jsxs)(n.p,{children:["Jest supports this via the ",(0,o.jsx)(n.a,{href:"/ja/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,o.jsx)(n.code,{children:"transform"})})," configuration option."]}),"\n",(0,o.jsx)(n.p,{children:"A transformer is a module that provides a method for transforming source files. For example, if you wanted to be able to use a new language feature in your modules or tests that aren't yet supported by Node, you might plug in a code preprocessor that would transpile a future version of JavaScript to a current one."}),"\n",(0,o.jsx)(n.p,{children:"Jest will cache the result of a transformation and attempt to invalidate that result based on a number of factors, such as the source of the file being transformed and changing configuration."}),"\n",(0,o.jsx)(n.h2,{id:"defaults",children:"Defaults"}),"\n",(0,o.jsxs)(n.p,{children:["Jest ships with one transformer out of the box \u2013 ",(0,o.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/packages/babel-jest#setup",children:(0,o.jsx)(n.code,{children:"babel-jest"})}),". It will load your project's Babel configuration and transform any file matching the ",(0,o.jsx)(n.code,{children:"/\\.[jt]sx?$/"})," RegExp (in other words, any ",(0,o.jsx)(n.code,{children:".js"}),", ",(0,o.jsx)(n.code,{children:".jsx"}),", ",(0,o.jsx)(n.code,{children:".ts"})," or ",(0,o.jsx)(n.code,{children:".tsx"})," file). In addition, ",(0,o.jsx)(n.code,{children:"babel-jest"})," will inject the Babel plugin necessary for mock hoisting talked about in ",(0,o.jsx)(n.a,{href:"/ja/docs/manual-mocks#using-with-es-module-imports",children:"ES Module mocking"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["Remember to include the default ",(0,o.jsx)(n.code,{children:"babel-jest"})," transformer explicitly, if you wish to use it alongside with additional code preprocessors:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'})})]}),"\n",(0,o.jsx)(n.h2,{id:"writing-custom-transformers",children:"Writing custom transformers"}),"\n",(0,o.jsx)(n.p,{children:"You can write your own transformer. The API of a transformer is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface TransformOptions<TransformerConfig = unknown> {\n  supportsDynamicImport: boolean;\n  supportsExportNamespaceFrom: boolean;\n  /**\n   * The value is:\n   * - `false` if Jest runs without Node ESM flag `--experimental-vm-modules`\n   * - `true` if the file extension is defined in [extensionsToTreatAsEsm](Configuration.md#extensionstotreatasesm-arraystring)\n   * and Jest runs with Node ESM flag `--experimental-vm-modules`\n   *\n   * See more at https://jestjs.io/docs/next/ecmascript-modules\n   */\n  supportsStaticESM: boolean;\n  supportsTopLevelAwait: boolean;\n  instrument: boolean;\n  /** Cached file system which is used by `jest-runtime` to improve performance. */\n  cacheFS: Map<string, string>;\n  /** Jest configuration of currently running project. */\n  config: ProjectConfig;\n  /** Stringified version of the `config` - useful in cache busting. */\n  configString: string;\n  /** Transformer configuration passed through `transform` option by the user. */\n  transformerConfig: TransformerConfig;\n}\n\ntype TransformedSource = {\n  code: string;\n  map?: RawSourceMap | string | null;\n};\n\ninterface SyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ninterface AsyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ntype Transformer<TransformerConfig = unknown> =\n  | SyncTransformer<TransformerConfig>\n  | AsyncTransformer<TransformerConfig>;\n\ntype TransformerCreator<\n  X extends Transformer<TransformerConfig>,\n  TransformerConfig = unknown,\n> = (transformerConfig?: TransformerConfig) => X;\n\ntype TransformerFactory<X extends Transformer> = {\n  createTransformer: TransformerCreator<X>;\n};\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The definitions above were trimmed down for brevity. Full code can be found in ",(0,o.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-transform/src/types.ts",children:"Jest repo on GitHub"})," (remember to choose the right tag/commit for your version of Jest)."]})}),"\n",(0,o.jsxs)(n.p,{children:["There are a couple of ways you can import code into Jest - using Common JS (",(0,o.jsx)(n.code,{children:"require"}),") or ECMAScript Modules (",(0,o.jsx)(n.code,{children:"import"})," - which exists in static and dynamic versions). Jest passes files through code transformation on demand (for instance when a ",(0,o.jsx)(n.code,{children:"require"})," or ",(0,o.jsx)(n.code,{children:"import"}),' is evaluated). This process, also known as "transpilation", might happen ',(0,o.jsx)(n.em,{children:"synchronously"})," (in the case of ",(0,o.jsx)(n.code,{children:"require"}),"), or ",(0,o.jsx)(n.em,{children:"asynchronously"})," (in the case of ",(0,o.jsx)(n.code,{children:"import"})," or ",(0,o.jsx)(n.code,{children:"import()"}),", the latter of which also works from Common JS modules). For this reason, the interface exposes both pairs of methods for asynchronous and synchronous processes: ",(0,o.jsx)(n.code,{children:"process{Async}"})," and ",(0,o.jsx)(n.code,{children:"getCacheKey{Async}"}),". The latter is called to figure out if we need to call ",(0,o.jsx)(n.code,{children:"process{Async}"})," at all."]}),"\n",(0,o.jsxs)(n.p,{children:["Asynchronous transpilation can fall back to the synchronous ",(0,o.jsx)(n.code,{children:"process"})," call if ",(0,o.jsx)(n.code,{children:"processAsync"})," is unimplemented, but synchronous transpilation cannot use the asynchronous ",(0,o.jsx)(n.code,{children:"processAsync"})," call. If your codebase is ESM only, implementing the async variants are sufficient. Otherwise, if any code is loaded through ",(0,o.jsx)(n.code,{children:"require"})," (including ",(0,o.jsx)(n.code,{children:"createRequire"})," from within ESM), then you need to implement the synchronous ",(0,o.jsx)(n.code,{children:"process"})," variant."]}),"\n",(0,o.jsxs)(n.p,{children:["Be aware that ",(0,o.jsx)(n.code,{children:"node_modules"})," is not transpiled with default config, the ",(0,o.jsx)(n.code,{children:"transformIgnorePatterns"})," setting must be modified in order to do so."]}),"\n",(0,o.jsxs)(n.p,{children:["Semi-related to this are the supports flags we pass (see ",(0,o.jsx)(n.code,{children:"CallerTransformOptions"})," above), but those should be used within the transform to figure out if it should return ESM or CJS, and has no direct bearing on sync vs async"]}),"\n",(0,o.jsxs)(n.p,{children:["Though not required, we ",(0,o.jsx)(n.em,{children:"highly recommend"})," implementing ",(0,o.jsx)(n.code,{children:"getCacheKey"})," as well, so we do not waste resources transpiling when we could have read its previous result from disk. You can use ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@jest/create-cache-key-function",children:(0,o.jsx)(n.code,{children:"@jest/create-cache-key-function"})})," to help implement it."]}),"\n",(0,o.jsxs)(n.p,{children:["Instead of having your custom transformer implement the ",(0,o.jsx)(n.code,{children:"Transformer"})," interface directly, you can choose to export ",(0,o.jsx)(n.code,{children:"createTransformer"}),", a factory function to dynamically create transformers. This is to allow having a transformer config in your jest config."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/ja/docs/ecmascript-modules",children:"ECMAScript module"})," support is indicated by the passed in ",(0,o.jsx)(n.code,{children:"supports*"})," options. Specifically ",(0,o.jsx)(n.code,{children:"supportsDynamicImport: true"})," means the transformer can return ",(0,o.jsx)(n.code,{children:"import()"})," expressions, which is supported by both ESM and CJS. If ",(0,o.jsx)(n.code,{children:"supportsStaticESM: true"})," it means top level ",(0,o.jsx)(n.code,{children:"import"})," statements are supported and the code will be interpreted as ESM and not CJS. See ",(0,o.jsx)(n.a,{href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs",children:"Node's docs"})," for details on the differences."]})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["Make sure ",(0,o.jsx)(n.code,{children:"process{Async}"})," method returns source map alongside with transformed code, so it is possible to report line information accurately in code coverage and test errors. Inline source maps also work but are slower."]}),(0,o.jsxs)(n.p,{children:["During the development of a transformer it can be useful to run Jest with ",(0,o.jsx)(n.code,{children:"--no-cache"})," to frequently ",(0,o.jsx)(n.a,{href:"/ja/docs/troubleshooting#caching-issues",children:"delete cache"}),"."]})]}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.h3,{id:"typescript-with-type-checking",children:"TypeScript with type checking"}),"\n",(0,o.jsxs)(n.p,{children:["While ",(0,o.jsx)(n.code,{children:"babel-jest"})," by default will transpile TypeScript files, Babel will not verify the types. If you want that you can use ",(0,o.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",children:(0,o.jsx)(n.code,{children:"ts-jest"})}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"transforming-images-to-their-path",children:"Transforming images to their path"}),"\n",(0,o.jsx)(n.p,{children:"Importing images is a way to include them in your browser bundle, but they are not valid JavaScript. One way of handling it in Jest is to replace the imported value with its filename."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="fileTransformer.js"',children:"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},43023:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(63696);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);