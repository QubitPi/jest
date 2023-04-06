"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4105],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(38944);const o="tabItem_wHwb";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},23930:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(25773),r=n(27378),o=n(38944),s=n(83457),i=n(3620),l=n(30654),p=n(70784),u=n(71819);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,p]=f({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??c;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var g=n(76457);const h="tabList_J5MA",b="tabItem_l0OV";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},s,{className:(0,o.Z)("tabs__item",b,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function j(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},62185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=n(25773),r=(n(27378),n(35318)),o=n(23930),s=n(39798),i=n(90199);const l={id:"upgrading-to-jest28",title:"From v27 to v28"},p=void 0,u={unversionedId:"upgrading-to-jest28",id:"version-28.x/upgrading-to-jest28",title:"From v27 to v28",description:"Upgrading Jest from v27 to v28? This guide aims to help refactoring your configuration and tests.",source:"@site/versioned_docs/version-28.x/UpgradingToJest28.md",sourceDirName:".",slug:"/upgrading-to-jest28",permalink:"/jest/ru/docs/28.x/upgrading-to-jest28",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"28.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"6 \u0430\u043f\u0440. 2023 \u0433.",frontMatter:{id:"upgrading-to-jest28",title:"From v27 to v28"},sidebar:"docs",previous:{title:"Testing Web Frameworks",permalink:"/jest/ru/docs/28.x/testing-frameworks"}},c={},m=[{value:"Compatibility",id:"compatibility",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"<code>extraGlobals</code>",id:"extraglobals",level:3},{value:"<code>timers</code>",id:"timers",level:3},{value:"<code>testURL</code>",id:"testurl",level:3},{value:"Babel config",id:"babel-config",level:3},{value:"<code>expect</code>",id:"expect",level:2},{value:"Fake Timers",id:"fake-timers",level:2},{value:"<code>fakeTimers</code>",id:"faketimers",level:3},{value:"<code>jest.useFakeTimers()</code>",id:"jestusefaketimers",level:3},{value:"Test Environment",id:"test-environment",level:2},{value:"Custom Environment",id:"custom-environment",level:3},{value:"<code>jsdom</code>",id:"jsdom",level:3},{value:"Test Runner",id:"test-runner",level:2},{value:"Transformer",id:"transformer",level:2},{value:"<code>package.json</code> <code>exports</code>",id:"packagejson-exports",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"<code>jest.fn()</code>",id:"jestfn",level:3}],d={toc:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Upgrading Jest from v27 to v28? This guide aims to help refactoring your configuration and tests."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md#2800"},"changelog")," for the full list of changes.")),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"The supported Node versions are 12.13, 14.15, 16.10 and above."),(0,r.kt)("p",null,"If you plan to use type definitions of Jest (or any of its packages), make sure to install TypeScript version 4.3 or above."),(0,r.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,r.kt)("h3",{id:"extraglobals"},(0,r.kt)("inlineCode",{parentName:"h3"},"extraGlobals")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"extraGlobals")," option was renamed to ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/configuration#sandboxinjectedglobals-arraystring"},(0,r.kt)("inlineCode",{parentName:"a"},"sandboxInjectedGlobals")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- extraGlobals: ['Math']\n+ sandboxInjectedGlobals: ['Math']\n")),(0,r.kt)("h3",{id:"timers"},(0,r.kt)("inlineCode",{parentName:"h3"},"timers")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"timers")," option was renamed to ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/configuration#faketimers-object"},(0,r.kt)("inlineCode",{parentName:"a"},"fakeTimers")),". See ",(0,r.kt)("a",{parentName:"p",href:"#fake-timers"},"Fake Timers")," section below for details."),(0,r.kt)("h3",{id:"testurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"testURL")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"testURL")," option is removed. Now you should use ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/configuration#testenvironmentoptions-object"},(0,r.kt)("inlineCode",{parentName:"a"},"testEnvironmentOptions"))," to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," option to JSDOM environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- testURL: 'https://jestjs.io'\n+ testEnvironmentOptions: {\n+   url: 'https://jestjs.io'\n+ }\n")),(0,r.kt)("h3",{id:"babel-config"},"Babel config"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," now passes ",(0,r.kt)("inlineCode",{parentName:"p"},"root: config.rootDir")," to Babel when resolving configuration. This improves compatibility when using ",(0,r.kt)("inlineCode",{parentName:"p"},"projects")," with differing configuration, but it might mean your babel config isn't picked up in the same way anymore. You can override this option by passing options to ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," in your ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"},"configuration"),"."),(0,r.kt)("h2",{id:"expect"},(0,r.kt)("inlineCode",{parentName:"h2"},"expect")),(0,r.kt)("p",null,"In versions prior to Jest 28, ",(0,r.kt)("inlineCode",{parentName:"p"},"toHaveProperty")," checked for equality instead of existence, which means that e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"expect({}).toHaveProperty('a', undefined)")," is a passing test. This has been changed in Jest 28 to fail."),(0,r.kt)("p",null,"Additionally, if you import ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," directly, it has been changed from default export to a named export."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- import expect from 'expect';\n+ import {expect} from 'expect';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- const expect = require('expect');\n+ const {expect} = require('expect');\n")),(0,r.kt)("h2",{id:"fake-timers"},"Fake Timers"),(0,r.kt)("p",null,"Fake timers were refactored to allow passing options to the underlying ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinonjs/fake-timers"},(0,r.kt)("inlineCode",{parentName:"a"},"@sinonjs/fake-timers")),"."),(0,r.kt)("h3",{id:"faketimers"},(0,r.kt)("inlineCode",{parentName:"h3"},"fakeTimers")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"timers")," configuration option was renamed to ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/configuration#faketimers-object"},(0,r.kt)("inlineCode",{parentName:"a"},"fakeTimers"))," and now takes an object with options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- timers: 'real'\n+ fakeTimers: {\n+   enableGlobally: false\n+ }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- timers: 'fake'\n+ fakeTimers: {\n+   enableGlobally: true\n+ }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- timers: 'modern'\n+ fakeTimers: {\n+   enableGlobally: true\n+ }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- timers: 'legacy'\n+ fakeTimers: {\n+   enableGlobally: true,\n+   legacyFakeTimers: true\n+ }\n")),(0,r.kt)("h3",{id:"jestusefaketimers"},(0,r.kt)("inlineCode",{parentName:"h3"},"jest.useFakeTimers()")),(0,r.kt)("p",null,"An object with options now should be passed to ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/jest-object#jestusefaketimersfaketimersconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"jest.useFakeTimers()"))," as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- jest.useFakeTimers('modern')\n+ jest.useFakeTimers()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- jest.useFakeTimers('legacy')\n+ jest.useFakeTimers({\n+   legacyFakeTimers: true\n+ })\n")),(0,r.kt)("p",null,"If legacy fake timers are enabled in Jest config file, but you would like to disable them in a particular test file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- jest.useFakeTimers('modern')\n+ jest.useFakeTimers({\n+   legacyFakeTimers: false\n+ })\n")),(0,r.kt)("h2",{id:"test-environment"},"Test Environment"),(0,r.kt)("h3",{id:"custom-environment"},"Custom Environment"),(0,r.kt)("p",null,"The constructor of ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/configuration#testenvironment-string"},"test environment")," class now receives an object with Jest's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/v28.1.3/packages/jest-types/src/Config.ts#L358-L422"},(0,r.kt)("inlineCode",{parentName:"a"},"globalConfig"))," and ",(0,r.kt)("inlineCode",{parentName:"p"},"projectConfig")," as its first argument. The second argument is now mandatory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  class CustomEnvironment extends NodeEnvironment {\n-   constructor(config) {\n-     super(config);\n+   constructor({globalConfig, projectConfig}, context) {\n+     super({globalConfig, projectConfig}, context);\n+     const config = projectConfig;\n")),(0,r.kt)("p",null,"In addition, test environments are now exported with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"TestEnvironment"),", instead of simply exporting the class directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- const TestEnvironment = require('jest-environment-node');\n+ const {TestEnvironment} = require('jest-environment-node');\n\n- const TestEnvironment = require('jest-environment-jsdom');\n+ const {TestEnvironment} = require('jest-environment-jsdom');\n")),(0,r.kt)("h3",{id:"jsdom"},(0,r.kt)("inlineCode",{parentName:"h3"},"jsdom")),(0,r.kt)("p",null,"If you are using JSDOM ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/configuration#testenvironment-string"},"test environment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom")," package now must be installed separately:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev jest-environment-jsdom\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev jest-environment-jsdom\n")))),(0,r.kt)("h2",{id:"test-runner"},"Test Runner"),(0,r.kt)("p",null,"If you are using Jasmine ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/configuration#testrunner-string"},"test runner"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-jasmine2")," package now must be installed separately:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev jest-jasmine2\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev jest-jasmine2\n")))),(0,r.kt)("h2",{id:"transformer"},"Transformer"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"process()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"processAsync()")," methods of a custom ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/code-transformation"},"transformer module")," cannot return a string anymore. They must always return an object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  process(sourceText, sourcePath, options) {\n-   return `module.exports = ${JSON.stringify(path.basename(sourcePath))};`;\n+   return {\n+     code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n+   };\n  }\n")),(0,r.kt)("h2",{id:"packagejson-exports"},(0,r.kt)("inlineCode",{parentName:"h2"},"package.json")," ",(0,r.kt)("inlineCode",{parentName:"h2"},"exports")),(0,r.kt)("p",null,"Jest now includes full support for ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#exports"},"package ",(0,r.kt)("inlineCode",{parentName:"a"},"exports")),", which might mean that files you import are not resolved correctly."),(0,r.kt)("p",null,"Additionally, Jest now supplies more conditions. ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-environment-node")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"node-addons"),", while ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"browser"),". As a result, you might e.g. get browser code which assumes ESM, when Jest provides ",(0,r.kt)("inlineCode",{parentName:"p"},"['require', 'browser']"),". You can either report a bug to the library (or Jest, the implementation is new and might have bugs!), override the conditions Jest passes (by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"customExportConditions")," option to the test environment), or use a custom resolver or ",(0,r.kt)("inlineCode",{parentName:"p"},"moduleMapper"),". Lots of options, and you'll need to pick the correct one for your project."),(0,r.kt)("p",null,"Known examples of packages that fails in Jest 28 are ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/uuid"},(0,r.kt)("inlineCode",{parentName:"a"},"uuid"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/nanoid"},(0,r.kt)("inlineCode",{parentName:"a"},"nanoid"))," when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom")," environment. For an analysis, and a potential workaround, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/accessibility-insights-web/pull/5421#issuecomment-1109168149"},"this comment"),"."),(0,r.kt)("h2",{id:"typescript"},"TypeScript"),(0,r.kt)(i.ZP,{mdxType:"TypeScriptExamplesNote"}),(0,r.kt)("h3",{id:"jestfn"},(0,r.kt)("inlineCode",{parentName:"h3"},"jest.fn()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jest.fn()")," now takes only one generic type argument. See ",(0,r.kt)("a",{parentName:"p",href:"/jest/ru/docs/28.x/mock-function-api"},"Mock Functions API")," page for more usage examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  import add from './add';\n- const mockAdd = jest.fn<ReturnType<typeof add>, Parameters<typeof add>>();\n+ const mockAdd = jest.fn<typeof add>();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- const mock = jest.fn<number, []>()\n+ const mock = jest.fn<() => number>()\n    .mockReturnValue(42)\n    .mockReturnValueOnce(12);\n\n- const asyncMock = jest.fn<Promise<string>, []>()\n+ const asyncMock = jest.fn<() => Promise<string>>()\n    .mockResolvedValue('default')\n    .mockResolvedValueOnce('first call');\n")))}f.isMDXComponent=!0},90199:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(25773),r=(n(27378),n(35318));const o={toc:[]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The TypeScript examples from this page will only work as documented if you explicitly import Jest APIs:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {expect, jest, test} from '@jest/globals';\n"))))}s.isMDXComponent=!0}}]);