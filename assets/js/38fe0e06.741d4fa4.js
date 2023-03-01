"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9294],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39798:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(27378),r=a(38944);const s="tabItem_wHwb";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},23930:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(25773),r=a(27378),s=a(38944),l=a(83457),i=a(3620),o=a(30654),p=a(70784),u=a(71819);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,p]=g({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),f=(()=>{const e=o??c;return m({value:e,tabValues:s})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,s]),tabValues:s}}var f=a(76457);const k="tabList_J5MA",h="tabItem_l0OV";function y(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",h,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=b(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function j(e){const t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},29089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(25773),r=(a(27378),a(35318)),s=a(23930),l=a(39798);const i={id:"getting-started",title:"Getting Started"},o=void 0,p={unversionedId:"getting-started",id:"version-26.x/getting-started",title:"Getting Started",description:"Install Jest using your favorite package manager:",source:"@site/versioned_docs/version-26.x/GettingStarted.md",sourceDirName:".",slug:"/getting-started",permalink:"/jest/docs/26.x/getting-started",draft:!1,editUrl:"https://github.com/facebook/jest/edit/main/website/versioned_docs/version-26.x/GettingStarted.md",tags:[],version:"26.x",lastUpdatedBy:"Jack",lastUpdatedAt:1677667296,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"version-26.x/docs",next:{title:"Using Matchers",permalink:"/jest/docs/26.x/using-matchers"}},u={},c=[{value:"Running from command line",id:"running-from-command-line",level:2},{value:"Additional Configuration",id:"additional-configuration",level:2},{value:"Generate a basic configuration file",id:"generate-a-basic-configuration-file",level:3},{value:"Using Babel",id:"using-babel",level:3},{value:"Using webpack",id:"using-webpack",level:3},{value:"Using parcel",id:"using-parcel",level:3},{value:"Using TypeScript",id:"using-typescript",level:3},{value:"Via <code>babel</code>",id:"via-babel",level:4},{value:"Via <code>ts-jest</code>",id:"via-ts-jest",level:4},{value:"Using TypeScript: type definitions",id:"using-typescript-type-definitions",level:3}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Install Jest using your favorite package manager:"),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev jest\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev jest\n")))),(0,r.kt)("p",null,"Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"sum.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function sum(a, b) {\n  return a + b;\n}\nmodule.exports = sum;\n")),(0,r.kt)("p",null,"Then, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"sum.test.js"),". This will contain our actual test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const sum = require('./sum');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});\n")),(0,r.kt)("p",null,"Add the following section to your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n')),(0,r.kt)("p",null,"Finally, run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," and Jest will print this message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PASS  ./sum.test.js\n\u2713 adds 1 + 2 to equal 3 (5ms)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You just successfully wrote your first test using Jest!")),(0,r.kt)("p",null,"This test used ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"toBe")," to test that two values were exactly identical. To learn about the other things that Jest can test, see ",(0,r.kt)("a",{parentName:"p",href:"/jest/docs/26.x/using-matchers"},"Using Matchers"),"."),(0,r.kt)("h2",{id:"running-from-command-line"},"Running from command line"),(0,r.kt)("p",null,"You can run Jest directly from the CLI (if it's globally available in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),", e.g. by ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn global add jest")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install jest --global"),") with a variety of useful options."),(0,r.kt)("p",null,"Here's how to run Jest on files matching ",(0,r.kt)("inlineCode",{parentName:"p"},"my-test"),", using ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," as a configuration file and display a native OS notification after the run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"jest my-test --notify --config=config.json\n")),(0,r.kt)("p",null,"If you'd like to learn more about running ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," through the command line, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/jest/docs/26.x/cli"},"Jest CLI Options")," page."),(0,r.kt)("h2",{id:"additional-configuration"},"Additional Configuration"),(0,r.kt)("h3",{id:"generate-a-basic-configuration-file"},"Generate a basic configuration file"),(0,r.kt)("p",null,"Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"jest --init\n")),(0,r.kt)("h3",{id:"using-babel"},"Using Babel"),(0,r.kt)("p",null,"To use ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel"),", install required dependencies:"),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev babel-jest @babel/core @babel/preset-env\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev babel-jest @babel/core @babel/preset-env\n")))),(0,r.kt)("p",null,"Configure Babel to target your current version of Node by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," file in the root of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],\n};\n")),(0,r.kt)("p",null,"The ideal configuration for Babel will depend on your project. See ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/"},"Babel's docs")," for more details."),(0,r.kt)("details",null,(0,r.kt)("summary",{markdown:"span"},(0,r.kt)("strong",null,"Making your Babel config jest-aware")),(0,r.kt)("p",null,"Jest will set ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"'test'")," if it's not set to something else. You can use that in your configuration to conditionally setup only the compilation needed for Jest, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = api => {\n  const isTest = api.env('test');\n  // You can use isTest to determine what presets and plugins to use.\n\n  return {\n    // ...\n  };\n};\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. To avoid this behavior, you can explicitly reset the ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," configuration option:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  transform: {},\n};\n")))),(0,r.kt)("h3",{id:"using-webpack"},"Using webpack"),(0,r.kt)("p",null,"Jest can be used in projects that use ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," to manage assets, styles, and compilation. Webpack does offer some unique challenges over other tools. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/jest/docs/26.x/webpack"},"webpack guide")," to get started."),(0,r.kt)("h3",{id:"using-parcel"},"Using parcel"),(0,r.kt)("p",null,"Jest can be used in projects that use ",(0,r.kt)("a",{parentName:"p",href:"https://parceljs.org/"},"parcel-bundler")," to manage assets, styles, and compilation similar to webpack. Parcel requires zero configuration. Refer to the official ",(0,r.kt)("a",{parentName:"p",href:"https://parceljs.org/docs/"},"docs")," to get started."),(0,r.kt)("h3",{id:"using-typescript"},"Using TypeScript"),(0,r.kt)("h4",{id:"via-babel"},"Via ",(0,r.kt)("inlineCode",{parentName:"h4"},"babel")),(0,r.kt)("p",null,"Jest supports TypeScript, via Babel. First, make sure you followed the instructions on ",(0,r.kt)("a",{parentName:"p",href:"#using-babel"},"using Babel")," above. Next, install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/preset-typescript"),":"),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @babel/preset-typescript\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @babel/preset-typescript\n")))),(0,r.kt)("p",null,"Then add ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/preset-typescript")," to the list of presets in your ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [\n    ['@babel/preset-env', {targets: {node: 'current'}}],\n    // highlight-next-line\n    '@babel/preset-typescript',\n  ],\n};\n")),(0,r.kt)("p",null,"However, there are some ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats"},"caveats")," to using TypeScript with Babel. Because TypeScript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. If you want that, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest"},"ts-jest")," instead, or just run the TypeScript compiler ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html"},"tsc")," separately (or as part of your build process)."),(0,r.kt)("h4",{id:"via-ts-jest"},"Via ",(0,r.kt)("inlineCode",{parentName:"h4"},"ts-jest")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest"},"ts-jest")," is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript."),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev ts-jest\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev ts-jest\n")))),(0,r.kt)("h3",{id:"using-typescript-type-definitions"},"Using TypeScript: type definitions"),(0,r.kt)("p",null,"You may also want to install the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@types/jest"},(0,r.kt)("inlineCode",{parentName:"a"},"@types/jest"))," module for the version of Jest you're using. This will help provide full typing when writing your tests with TypeScript."),(0,r.kt)("p",null,"In order for Jest to transpile TypeScript with ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest"),", you may also need to create a ",(0,r.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file"},"configuration")," file."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/*")," modules it's recommended to try to match the version of the associated module. For example, if you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"26.4.0")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," then using ",(0,r.kt)("inlineCode",{parentName:"p"},"26.4.x")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/jest")," is ideal. In general, try to match the major (",(0,r.kt)("inlineCode",{parentName:"p"},"26"),") and minor (",(0,r.kt)("inlineCode",{parentName:"p"},"4"),") version as closely as possible.")),(0,r.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @types/jest\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @types/jest\n")))))}m.isMDXComponent=!0}}]);