"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[85727],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=m(n),f=o,d=l["".concat(p,".").concat(f)]||l[f]||u[f]||a;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(25773),o=(n(27378),n(35318));const a={id:"code-transformation",title:"Code Transformation"},s=void 0,i={unversionedId:"code-transformation",id:"code-transformation",title:"Code Transformation",description:"Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you'll need to transform that code into plain JavaScript, similar to what you would do when building for browsers.",source:"@site/../docs/CodeTransformation.md",sourceDirName:".",slug:"/code-transformation",permalink:"/jest/ja/docs/next/code-transformation",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1680744134,formattedLastUpdatedAt:"2023\u5e744\u67086\u65e5",frontMatter:{id:"code-transformation",title:"Code Transformation"},sidebar:"api",previous:{title:"Environment Variables",permalink:"/jest/ja/docs/next/environment-variables"}},p={},m=[{value:"Defaults",id:"defaults",level:2},{value:"Writing custom transformers",id:"writing-custom-transformers",level:2},{value:"Examples",id:"examples",level:3},{value:"TypeScript with type checking",id:"typescript-with-type-checking",level:3},{value:"Transforming images to their path",id:"transforming-images-to-their-path",level:4}],c={toc:m};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you'll need to transform that code into plain JavaScript, similar to what you would do when building for browsers."),(0,o.kt)("p",null,"Jest supports this via the ",(0,o.kt)("a",{parentName:"p",href:"/jest/ja/docs/next/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"},(0,o.kt)("inlineCode",{parentName:"a"},"transform"))," configuration option."),(0,o.kt)("p",null,"A transformer is a module that provides a method for transforming source files. For example, if you wanted to be able to use a new language feature in your modules or tests that aren't yet supported by Node, you might plug in a code preprocessor that would transpile a future version of JavaScript to a current one."),(0,o.kt)("p",null,"Jest will cache the result of a transformation and attempt to invalidate that result based on a number of factors, such as the source of the file being transformed and changing configuration."),(0,o.kt)("h2",{id:"defaults"},"Defaults"),(0,o.kt)("p",null,"Jest ships with one transformer out of the box ","\u2013"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/packages/babel-jest#setup"},(0,o.kt)("inlineCode",{parentName:"a"},"babel-jest")),". It will load your project's Babel configuration and transform any file matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"/\\.[jt]sx?$/")," RegExp (in other words, any ",(0,o.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".jsx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".tsx")," file). In addition, ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," will inject the Babel plugin necessary for mock hoisting talked about in ",(0,o.kt)("a",{parentName:"p",href:"/jest/ja/docs/next/manual-mocks#using-with-es-module-imports"},"ES Module mocking"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Remember to include the default ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," transformer explicitly, if you wish to use it alongside with additional code preprocessors:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'))),(0,o.kt)("h2",{id:"writing-custom-transformers"},"Writing custom transformers"),(0,o.kt)("p",null,"You can write your own transformer. The API of a transformer is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface TransformOptions<TransformerConfig = unknown> {\n  supportsDynamicImport: boolean;\n  supportsExportNamespaceFrom: boolean;\n  /**\n   * The value is:\n   * - `false` if Jest runs without Node ESM flag `--experimental-vm-modules`\n   * - `true` if the file extension is defined in [extensionsToTreatAsEsm](Configuration.md#extensionstotreatasesm-arraystring)\n   * and Jest runs with Node ESM flag `--experimental-vm-modules`\n   *\n   * See more at https://jestjs.io/docs/next/ecmascript-modules\n   */\n  supportsStaticESM: boolean;\n  supportsTopLevelAwait: boolean;\n  instrument: boolean;\n  /** Cached file system which is used by `jest-runtime` to improve performance. */\n  cacheFS: Map<string, string>;\n  /** Jest configuration of currently running project. */\n  config: ProjectConfig;\n  /** Stringified version of the `config` - useful in cache busting. */\n  configString: string;\n  /** Transformer configuration passed through `transform` option by the user. */\n  transformerConfig: TransformerConfig;\n}\n\ntype TransformedSource = {\n  code: string;\n  map?: RawSourceMap | string | null;\n};\n\ninterface SyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ninterface AsyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ntype Transformer<TransformerConfig = unknown> =\n  | SyncTransformer<TransformerConfig>\n  | AsyncTransformer<TransformerConfig>;\n\ntype TransformerCreator<\n  X extends Transformer<TransformerConfig>,\n  TransformerConfig = unknown,\n> = (transformerConfig?: TransformerConfig) => X;\n\ntype TransformerFactory<X extends Transformer> = {\n  createTransformer: TransformerCreator<X>;\n};\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The definitions above were trimmed down for brevity. Full code can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/packages/jest-transform/src/types.ts"},"Jest repo on GitHub")," (remember to choose the right tag/commit for your version of Jest).")),(0,o.kt)("p",null,"There are a couple of ways you can import code into Jest - using Common JS (",(0,o.kt)("inlineCode",{parentName:"p"},"require"),") or ECMAScript Modules (",(0,o.kt)("inlineCode",{parentName:"p"},"import")," - which exists in static and dynamic versions). Jest passes files through code transformation on demand (for instance when a ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),' is evaluated). This process, also known as "transpilation", might happen ',(0,o.kt)("em",{parentName:"p"},"synchronously")," (in the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),"), or ",(0,o.kt)("em",{parentName:"p"},"asynchronously")," (in the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"import()"),", the latter of which also works from Common JS modules). For this reason, the interface exposes both pairs of methods for asynchronous and synchronous processes: ",(0,o.kt)("inlineCode",{parentName:"p"},"process{Async}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getCacheKey{Async}"),". The latter is called to figure out if we need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"process{Async}"),' at all. Since async transformation can happen synchronously without issue, it\'s possible for the async case to "fall back" to the sync variant, but not vice versa.'),(0,o.kt)("p",null,"So if your code base is ESM only implementing the async variants is sufficient. Otherwise, if any code is loaded through ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," (including ",(0,o.kt)("inlineCode",{parentName:"p"},"createRequire")," from within ESM), then you need to implement the synchronous variant. Be aware that ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," is not transpiled with default config."),(0,o.kt)("p",null,"Semi-related to this are the supports flags we pass (see ",(0,o.kt)("inlineCode",{parentName:"p"},"CallerTransformOptions")," above), but those should be used within the transform to figure out if it should return ESM or CJS, and has no direct bearing on sync vs async"),(0,o.kt)("p",null,"Though not required, we ",(0,o.kt)("em",{parentName:"p"},"highly recommend")," implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"getCacheKey")," as well, so we do not waste resources transpiling when we could have read its previous result from disk. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@jest/create-cache-key-function"},(0,o.kt)("inlineCode",{parentName:"a"},"@jest/create-cache-key-function"))," to help implement it."),(0,o.kt)("p",null,"Instead of having your custom transformer implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transformer")," interface directly, you can choose to export ",(0,o.kt)("inlineCode",{parentName:"p"},"createTransformer"),", a factory function to dynamically create transformers. This is to allow having a transformer config in your jest config."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/jest/ja/docs/next/ecmascript-modules"},"ECMAScript module")," support is indicated by the passed in ",(0,o.kt)("inlineCode",{parentName:"p"},"supports*")," options. Specifically ",(0,o.kt)("inlineCode",{parentName:"p"},"supportsDynamicImport: true")," means the transformer can return ",(0,o.kt)("inlineCode",{parentName:"p"},"import()")," expressions, which is supported by both ESM and CJS. If ",(0,o.kt)("inlineCode",{parentName:"p"},"supportsStaticESM: true")," it means top level ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements are supported and the code will be interpreted as ESM and not CJS. See ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs"},"Node's docs")," for details on the differences.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"process{Async}")," method returns source map alongside with transformed code, so it is possible to report line information accurately in code coverage and test errors. Inline source maps also work but are slower."),(0,o.kt)("p",{parentName:"admonition"},"During the development of a transformer it can be useful to run Jest with ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-cache")," to frequently ",(0,o.kt)("a",{parentName:"p",href:"/jest/ja/docs/next/troubleshooting#caching-issues"},"delete cache"),".")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"typescript-with-type-checking"},"TypeScript with type checking"),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," by default will transpile TypeScript files, Babel will not verify the types. If you want that you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest"},(0,o.kt)("inlineCode",{parentName:"a"},"ts-jest")),"."),(0,o.kt)("h4",{id:"transforming-images-to-their-path"},"Transforming images to their path"),(0,o.kt)("p",null,"Importing images is a way to include them in your browser bundle, but they are not valid JavaScript. One way of handling it in Jest is to replace the imported value with its filename."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="fileTransformer.js"',title:'"fileTransformer.js"'},"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n")))}l.isMDXComponent=!0}}]);