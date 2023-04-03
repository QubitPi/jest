"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[15803],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(27378),a=n(38944);const o="tabItem_wHwb";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},23930:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(25773),a=n(27378),o=n(38944),s=n(83457),l=n(3620),u=n(30654),i=n(70784),c=n(71819);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,i]=f({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var g=n(76457);const h="tabList_J5MA",v="tabItem_l0OV";function y(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==l&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",v,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function j(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},8280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(25773),a=(n(27378),n(35318)),o=n(23930),s=n(39798);const l={id:"mongodb",title:"Using with MongoDB"},u=void 0,i={unversionedId:"mongodb",id:"version-29.2/mongodb",title:"Using with MongoDB",description:"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with MongoDB.",source:"@site/versioned_docs/version-29.2/MongoDB.md",sourceDirName:".",slug:"/mongodb",permalink:"/jest/zh-Hans/docs/29.2/mongodb",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/zh-CN",tags:[],version:"29.2",lastUpdatedBy:"Jack",lastUpdatedAt:1680514817,formattedLastUpdatedAt:"2023\u5e744\u67083\u65e5",frontMatter:{id:"mongodb",title:"Using with MongoDB"},sidebar:"docs",previous:{title:"Using with puppeteer",permalink:"/jest/zh-Hans/docs/29.2/puppeteer"},next:{title:"Using with DynamoDB",permalink:"/jest/zh-Hans/docs/29.2/dynamodb"}},c={},d=[{value:"Use jest-mongodb Preset",id:"use-jest-mongodb-preset",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the ",(0,a.kt)("a",{parentName:"p",href:"/jest/zh-Hans/docs/29.2/configuration#globalsetup-string"},"Global Setup/Teardown")," and ",(0,a.kt)("a",{parentName:"p",href:"/jest/zh-Hans/docs/29.2/configuration#testenvironment-string"},"Async Test Environment")," APIs, Jest can work smoothly with ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),"."),(0,a.kt)("h2",{id:"use-jest-mongodb-preset"},"Use jest-mongodb Preset"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/shelfio/jest-mongodb"},"Jest MongoDB")," provides all required configuration to run your tests using MongoDB."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First install ",(0,a.kt)("inlineCode",{parentName:"li"},"@shelf/jest-mongodb"))),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @shelf/jest-mongodb\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @shelf/jest-mongodb\n")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Specify preset in your Jest configuration:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "preset": "@shelf/jest-mongodb"\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Write your test")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const {MongoClient} = require('mongodb');\n\ndescribe('insert', () => {\n  let connection;\n  let db;\n\n  beforeAll(async () => {\n    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n    });\n    db = await connection.db(globalThis.__MONGO_DB_NAME__);\n  });\n\n  afterAll(async () => {\n    await connection.close();\n  });\n\n  it('should insert a doc into collection', async () => {\n    const users = db.collection('users');\n\n    const mockUser = {_id: 'some-user-id', name: 'John'};\n    await users.insertOne(mockUser);\n\n    const insertedUser = await users.findOne({_id: 'some-user-id'});\n    expect(insertedUser).toEqual(mockUser);\n  });\n});\n")),(0,a.kt)("p",null,"There's no need to load any dependencies."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shelfio/jest-mongodb"},"documentation")," for details (configuring MongoDB version, etc)."))}m.isMDXComponent=!0}}]);