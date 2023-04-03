"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[64025],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378),o=n(38944);const s="tabItem_wHwb";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,r),hidden:n},t)}},23930:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(25773),o=n(27378),s=n(38944),r=n(83457),l=n(3620),i=n(30654),p=n(70784),c=n(71819);function u(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,p]=f({queryString:n,groupId:a}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),k=(()=>{const e=i??u;return d({value:e,tabValues:s})?e:null})();(0,o.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,s]),tabValues:s}}var k=n(76457);const b="tabList_J5MA",h="tabItem_l0OV";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==l&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},r,{className:(0,s.Z)("tabs__item",h,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function j(e){const t=g(e);return o.createElement("div",{className:(0,s.Z)("tabs-container",b)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(w,(0,a.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return o.createElement(j,(0,a.Z)({key:String(t)},e))}},19558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(25773),o=(n(27378),n(35318)),s=n(23930),r=n(39798);const l={id:"webpack",title:"Using with webpack"},i=void 0,p={unversionedId:"webpack",id:"version-29.3/webpack",title:"Using with webpack",description:"Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools.",source:"@site/versioned_docs/version-29.3/Webpack.md",sourceDirName:".",slug:"/webpack",permalink:"/jest/es-ES/docs/29.3/webpack",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"29.3",lastUpdatedBy:"Jack",lastUpdatedAt:1680514817,formattedLastUpdatedAt:"3 abr 2023",frontMatter:{id:"webpack",title:"Using with webpack"},sidebar:"docs",previous:{title:"ECMAScript Modules",permalink:"/jest/es-ES/docs/29.3/ecmascript-modules"},next:{title:"Using with puppeteer",permalink:"/jest/es-ES/docs/29.3/puppeteer"}},c={},u=[{value:"A webpack example",id:"a-webpack-example",level:2},{value:"Handling Static Assets",id:"handling-static-assets",level:3},{value:"Mocking CSS Modules",id:"mocking-css-modules",level:3},{value:"Configuring Jest to find our files",id:"configuring-jest-to-find-our-files",level:3},{value:"Using with webpack",id:"using-with-webpack",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jest can be used in projects that use ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," to manage assets, styles, and compilation. webpack ",(0,o.kt)("em",{parentName:"p"},"does")," offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools."),(0,o.kt)("h2",{id:"a-webpack-example"},"A webpack example"),(0,o.kt)("p",null,"Let's start with a common sort of webpack config file and translate it to a Jest setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.jsx?$/,\n        exclude: ['node_modules'],\n        use: ['babel-loader'],\n      },\n      {\n        test: /\\.css$/,\n        use: ['style-loader', 'css-loader'],\n      },\n      {\n        test: /\\.gif$/,\n        type: 'asset/inline',\n      },\n      {\n        test: /\\.(ttf|eot|svg)$/,\n        type: 'asset/resource',\n      },\n    ],\n  },\n  resolve: {\n    alias: {\n      config$: './configs/app-config.js',\n      react: './vendor/react-master',\n    },\n    extensions: ['.js', '.jsx'],\n    modules: [\n      'node_modules',\n      'bower_components',\n      'shared',\n      '/shared/vendor/modules',\n    ],\n  },\n};\n")),(0,o.kt)("p",null,"If you have JavaScript files that are transformed by Babel, you can ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/29.3/getting-started#using-babel"},"enable support for Babel")," by installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," plugin. Non-Babel JavaScript transformations can be handled with Jest's ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/29.3/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"},(0,o.kt)("inlineCode",{parentName:"a"},"transform"))," config option."),(0,o.kt)("h3",{id:"handling-static-assets"},"Handling Static Assets"),(0,o.kt)("p",null,"Next, let's configure Jest to gracefully handle asset files such as stylesheets and images. Usually, these files aren't particularly useful in tests so we can safely mock them out. However, if you are using CSS Modules then it's better to mock a proxy for your className lookups."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/__mocks__/fileMock.js',\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n  },\n};\n")),(0,o.kt)("p",null,"And the mock files themselves:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="__mocks__/styleMock.js"',title:'"__mocks__/styleMock.js"'},"module.exports = {};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="__mocks__/fileMock.js"',title:'"__mocks__/fileMock.js"'},"module.exports = 'test-file-stub';\n")),(0,o.kt)("h3",{id:"mocking-css-modules"},"Mocking CSS Modules"),(0,o.kt)("p",null,"You can use an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/keyanzhang/identity-obj-proxy"},"ES6 Proxy")," to mock ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules"),":"),(0,o.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev identity-obj-proxy\n"))),(0,o.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev identity-obj-proxy\n")))),(0,o.kt)("p",null,"Then all your className lookups on the styles object will be returned as-is (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.foobar === 'foobar'"),"). This is pretty handy for React ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/29.3/snapshot-testing"},"Snapshot Testing"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js (for CSS Modules)"',title:'"jest.config.js',"(for":!0,CSS:!0,'Modules)"':!0},"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/__mocks__/fileMock.js',\n    '\\\\.(css|less)$': 'identity-obj-proxy',\n  },\n};\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," cannot fulfill your requirements, you can use Jest's ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/29.3/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"},(0,o.kt)("inlineCode",{parentName:"a"},"transform"))," config option to specify how assets are transformed. For example, a transformer that returns the basename of a file (such that ",(0,o.kt)("inlineCode",{parentName:"p"},"require('logo.jpg');")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"'logo'"),") can be written as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="fileTransformer.js"',title:'"fileTransformer.js"'},"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js (for custom transformers and CSS Modules)"',title:'"jest.config.js',"(for":!0,custom:!0,transformers:!0,and:!0,CSS:!0,'Modules)"':!0},"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(css|less)$': 'identity-obj-proxy',\n  },\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n")),(0,o.kt)("p",null,"We've told Jest to ignore files matching a stylesheet or image extension, and instead, require our mock files. You can adjust the regular expression to match the file types your webpack config handles."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Remember to include the default ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," transformer explicitly, if you wish to use it alongside with additional code preprocessors:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'))),(0,o.kt)("h3",{id:"configuring-jest-to-find-our-files"},"Configuring Jest to find our files"),(0,o.kt)("p",null,"Now that Jest knows how to process our files, we need to tell it how to ",(0,o.kt)("em",{parentName:"p"},"find")," them. For webpack's ",(0,o.kt)("inlineCode",{parentName:"p"},"modules"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," options there are direct analogs in Jest's ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleDirectories")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n  },\n};\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"<rootDir>")," is a special token that gets replaced by Jest with the root of your project. Most of the time this will be the folder where your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," is located unless you specify a custom ",(0,o.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/29.3/configuration#rootdir-string"},(0,o.kt)("inlineCode",{parentName:"a"},"rootDir"))," option in your configuration.")),(0,o.kt)("p",null,"Similarly, Jest's counterpart for Webpack's ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve.roots")," (an alternative to setting ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_PATH"),") is ",(0,o.kt)("inlineCode",{parentName:"p"},"modulePaths"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  modulePaths: ['/shared/vendor/modules'],\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n  },\n};\n")),(0,o.kt)("p",null,"And finally, we have to handle the webpack ",(0,o.kt)("inlineCode",{parentName:"p"},"alias"),". For that, we can make use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," option again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  modulePaths: ['/shared/vendor/modules'],\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n\n    '^react(.*)$': '<rootDir>/vendor/react-master$1',\n    '^config$': '<rootDir>/configs/app-config.js',\n  },\n};\n")),(0,o.kt)("p",null,"That's it! webpack is a complex and flexible tool, so you may have to make some adjustments to handle your specific application's needs. Luckily for most projects, Jest should be more than flexible enough to handle your webpack config."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more complex webpack configurations, you may also want to investigate projects such as: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/istarkov/babel-plugin-webpack-loaders"},"babel-plugin-webpack-loaders"),".")),(0,o.kt)("h2",{id:"using-with-webpack"},"Using with webpack"),(0,o.kt)("p",null,"In addition to installing ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," as described earlier, you'll need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," like so:"),(0,o.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @babel/preset-env\n"))),(0,o.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @babel/preset-env\n")))),(0,o.kt)("p",null,"Then, you'll want to configure Babel as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".babelrc"',title:'".babelrc"'},'{\n  "presets": ["@babel/preset-env"]\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Jest caches files to speed up test execution. If you updated ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," and Jest is not working as expected, try clearing the cache by running ",(0,o.kt)("inlineCode",{parentName:"p"},"jest --clearCache"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you use dynamic imports (",(0,o.kt)("inlineCode",{parentName:"p"},"import('some-file.js').then(module => ...)"),"), you need to enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamic-import-node")," plugin."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".babelrc"',title:'".babelrc"'},'{\n  "presets": [["env", {"modules": false}]],\n\n  "plugins": ["syntax-dynamic-import"],\n\n  "env": {\n    "test": {\n      "plugins": ["dynamic-import-node"]\n    }\n  }\n}\n'))),(0,o.kt)("p",null,"For an example of how to use Jest with webpack with React, you can view one ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jenniferabowd/jest_webpack_example"},"here"),"."))}d.isMDXComponent=!0}}]);