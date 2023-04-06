"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[92318],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?o.createElement(d,s(s({ref:t},l),{},{components:n})):o.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(25773),r=(n(27378),n(35318));const a={id:"code-transformation",title:"Code Transformation"},s=void 0,i={unversionedId:"code-transformation",id:"version-27.x/code-transformation",title:"Code Transformation",description:"Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node.js out of the box (such as JSX, types from TypeScript, Vue templates etc.) then you'll need to transform that code into plain JavaScript, similar to what you would do when building for browsers.",source:"@site/versioned_docs/version-27.x/CodeTransformation.md",sourceDirName:".",slug:"/code-transformation",permalink:"/jest/docs/27.x/code-transformation",draft:!1,editUrl:"https://github.com/facebook/jest/edit/main/website/versioned_docs/version-27.x/CodeTransformation.md",tags:[],version:"27.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"code-transformation",title:"Code Transformation"},sidebar:"api",previous:{title:"Environment Variables",permalink:"/jest/docs/27.x/environment-variables"}},p={},c=[{value:"Defaults",id:"defaults",level:2},{value:"Writing custom transformers",id:"writing-custom-transformers",level:2},{value:"Examples",id:"examples",level:3},{value:"TypeScript with type checking",id:"typescript-with-type-checking",level:3},{value:"Transforming images to their path",id:"transforming-images-to-their-path",level:4}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node.js out of the box (such as JSX, types from TypeScript, Vue templates etc.) then you'll need to transform that code into plain JavaScript, similar to what you would do when building for browsers."),(0,r.kt)("p",null,"Jest supports this via the ",(0,r.kt)("a",{parentName:"p",href:"/jest/docs/27.x/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"},(0,r.kt)("inlineCode",{parentName:"a"},"transform")," configuration option"),"."),(0,r.kt)("p",null,"A transformer is a module that provides a synchronous function for transforming source files. For example, if you wanted to be able to use a new language feature in your modules or tests that aren't yet supported by Node, you might plug in one of many compilers that compile a future version of JavaScript to a current one."),(0,r.kt)("p",null,"Jest will cache the result of a transformation and attempt to invalidate that result based on a number of factors, such as the source of the file being transformed and changing configuration."),(0,r.kt)("h2",{id:"defaults"},"Defaults"),(0,r.kt)("p",null,"Jest ships with one transformer out of the box - ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest"),". It will automatically load your project's Babel configuration and transform any file matching the following RegEx: ",(0,r.kt)("inlineCode",{parentName:"p"},"/\\.[jt]sx?$/")," meaning any ",(0,r.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".jsx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".tsx")," file. In addition, ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," will inject the Babel plugin necessary for mock hoisting talked about in ",(0,r.kt)("a",{parentName:"p",href:"/jest/docs/27.x/manual-mocks#using-with-es-module-imports"},"ES Module mocking"),"."),(0,r.kt)("p",null,"If you override the ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," configuration option ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," will no longer be active, and you'll need to add it manually if you wish to use Babel."),(0,r.kt)("h2",{id:"writing-custom-transformers"},"Writing custom transformers"),(0,r.kt)("p",null,"You can write your own transformer. The API of a transformer is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface SyncTransformer<OptionType = unknown> {\n  /**\n   * Indicates if the transformer is capable of instrumenting the code for code coverage.\n   *\n   * If V8 coverage is _not_ active, and this is `true`, Jest will assume the code is instrumented.\n   * If V8 coverage is _not_ active, and this is `false`. Jest will instrument the code returned by this transformer using Babel.\n   */\n  canInstrument?: boolean;\n  createTransformer?: (options?: OptionType) => SyncTransformer<OptionType>;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: Config.Path,\n    options: TransformOptions<OptionType>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: Config.Path,\n    options: TransformOptions<OptionType>,\n  ) => Promise<string>;\n\n  process: (\n    sourceText: string,\n    sourcePath: Config.Path,\n    options: TransformOptions<OptionType>,\n  ) => TransformedSource;\n\n  processAsync?: (\n    sourceText: string,\n    sourcePath: Config.Path,\n    options: TransformOptions<OptionType>,\n  ) => Promise<TransformedSource>;\n}\n\ninterface AsyncTransformer<OptionType = unknown> {\n  /**\n   * Indicates if the transformer is capable of instrumenting the code for code coverage.\n   *\n   * If V8 coverage is _not_ active, and this is `true`, Jest will assume the code is instrumented.\n   * If V8 coverage is _not_ active, and this is `false`. Jest will instrument the code returned by this transformer using Babel.\n   */\n  canInstrument?: boolean;\n  createTransformer?: (options?: OptionType) => AsyncTransformer<OptionType>;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: Config.Path,\n    options: TransformOptions<OptionType>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: Config.Path,\n    options: TransformOptions<OptionType>,\n  ) => Promise<string>;\n\n  process?: (\n    sourceText: string,\n    sourcePath: Config.Path,\n    options: TransformOptions<OptionType>,\n  ) => TransformedSource;\n\n  processAsync: (\n    sourceText: string,\n    sourcePath: Config.Path,\n    options: TransformOptions<OptionType>,\n  ) => Promise<TransformedSource>;\n}\n\ntype Transformer<OptionType = unknown> =\n  | SyncTransformer<OptionType>\n  | AsyncTransformer<OptionType>;\n\ninterface TransformOptions<OptionType> {\n  /**\n   * If a transformer does module resolution and reads files, it should populate `cacheFS` so that\n   * Jest avoids reading the same files again, improving performance. `cacheFS` stores entries of\n   * <file path, file contents>\n   */\n  cacheFS: Map<string, string>;\n  config: Config.ProjectConfig;\n  /** A stringified version of the configuration - useful in cache busting */\n  configString: string;\n  instrument: boolean;\n  // names are copied from babel: https://babeljs.io/docs/en/options#caller\n  supportsDynamicImport: boolean;\n  supportsExportNamespaceFrom: boolean;\n  /**\n   * The value is:\n   * - `false` if Jest runs without Node ESM flag `--experimental-vm-modules`\n   * - `true` if the file extension is defined in [extensionsToTreatAsEsm](Configuration.md#extensionstotreatasesm-arraystring)\n   * and Jest runs with Node ESM flag `--experimental-vm-modules`\n   *\n   * See more at https://jestjs.io/docs/27.x/ecmascript-modules\n   */\n  supportsStaticESM: boolean;\n  supportsTopLevelAwait: boolean;\n  /** the options passed through Jest's config by the user */\n  transformerConfig: OptionType;\n}\n\ntype TransformedSource =\n  | {code: string; map?: RawSourceMap | string | null}\n  | string;\n\n// Config.ProjectConfig can be seen in code [here](https://github.com/facebook/jest/blob/v26.6.3/packages/jest-types/src/Config.ts#L323)\n// RawSourceMap comes from [`source-map`](https://github.com/mozilla/source-map/blob/0.6.1/source-map.d.ts#L6-L12)\n")),(0,r.kt)("p",null,"As can be seen, only ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"processAsync")," is mandatory to implement, although we highly recommend implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"getCacheKey")," as well, so we don't waste resources transpiling the same source file when we can read its previous result from disk. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@jest/create-cache-key-function"},(0,r.kt)("inlineCode",{parentName:"a"},"@jest/create-cache-key-function"))," to help implement it."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/jest/docs/27.x/ecmascript-modules"},"ECMAScript module")," support is indicated by the passed in ",(0,r.kt)("inlineCode",{parentName:"p"},"supports*")," options. Specifically ",(0,r.kt)("inlineCode",{parentName:"p"},"supportsDynamicImport: true")," means the transformer can return ",(0,r.kt)("inlineCode",{parentName:"p"},"import()")," expressions, which is supported by both ESM and CJS. If ",(0,r.kt)("inlineCode",{parentName:"p"},"supportsStaticESM: true")," it means top level ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements are supported and the code will be interpreted as ESM and not CJS. See ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs"},"Node's docs")," for details on the differences.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"TransformedSource")," contains a source map, so it is possible to report line information accurately in code coverage and test errors. Inline source maps also work but are slower.")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"typescript-with-type-checking"},"TypeScript with type checking"),(0,r.kt)("p",null,"While ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," by default will transpile TypeScript files, Babel will not verify the types. If you want that you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest"},(0,r.kt)("inlineCode",{parentName:"a"},"ts-jest")),"."),(0,r.kt)("h4",{id:"transforming-images-to-their-path"},"Transforming images to their path"),(0,r.kt)("p",null,"Importing images is a way to include them in your browser bundle, but they are not valid JavaScript. One way of handling it in Jest is to replace the imported value with its filename."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="fileTransformer.js"',title:'"fileTransformer.js"'},"const path = require('path');\n\nmodule.exports = {\n  process(src, filename, config, options) {\n    return `module.exports = ${JSON.stringify(path.basename(filename))};`;\n  },\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n")))}m.isMDXComponent=!0}}]);