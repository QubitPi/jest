"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[12229],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),r=n(38944);const o="tabItem_wHwb";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},23930:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(25773),r=n(27378),o=n(38944),l=n(83457),s=n(3620),i=n(30654),u=n(70784),c=n(71819);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=b({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var y=n(76457);const h="tabList_J5MA",g="tabItem_l0OV";function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",g,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},63203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(25773),r=(n(27378),n(35318)),o=n(23930),l=n(39798);const s={id:"dynamodb",title:"Using with DynamoDB"},i=void 0,u={unversionedId:"dynamodb",id:"dynamodb",title:"Using with DynamoDB",description:"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with DynamoDB.",source:"@site/../docs/DynamoDB.md",sourceDirName:".",slug:"/dynamodb",permalink:"/jest/pt-BR/docs/next/dynamodb",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1680514817,formattedLastUpdatedAt:"3 de abr. de 2023",frontMatter:{id:"dynamodb",title:"Using with DynamoDB"},sidebar:"docs",previous:{title:"Using with MongoDB",permalink:"/jest/pt-BR/docs/next/mongodb"},next:{title:"DOM Manipulation",permalink:"/jest/pt-BR/docs/next/tutorial-jquery"}},c={},d=[{value:"Use jest-dynamodb Preset",id:"use-jest-dynamodb-preset",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With the ",(0,r.kt)("a",{parentName:"p",href:"/jest/pt-BR/docs/next/configuration#globalsetup-string"},"Global Setup/Teardown")," and ",(0,r.kt)("a",{parentName:"p",href:"/jest/pt-BR/docs/next/configuration#testenvironment-string"},"Async Test Environment")," APIs, Jest can work smoothly with ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb/"},"DynamoDB"),"."),(0,r.kt)("h2",{id:"use-jest-dynamodb-preset"},"Use jest-dynamodb Preset"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/shelfio/jest-dynamodb"},"Jest DynamoDB")," provides all required configuration to run your tests using DynamoDB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, install ",(0,r.kt)("inlineCode",{parentName:"li"},"@shelf/jest-dynamodb"))),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @shelf/jest-dynamodb\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @shelf/jest-dynamodb\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Specify preset in your Jest configuration:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "preset": "@shelf/jest-dynamodb"\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"jest-dynamodb-config.js")," and define DynamoDB tables")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property"},"Create Table API")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  tables: [\n    {\n      TableName: `files`,\n      KeySchema: [{AttributeName: 'id', KeyType: 'HASH'}],\n      AttributeDefinitions: [{AttributeName: 'id', AttributeType: 'S'}],\n      ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},\n    },\n    // etc\n  ],\n};\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Configure DynamoDB client")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const {DocumentClient} = require('aws-sdk/clients/dynamodb');\n\nconst isTest = process.env.JEST_WORKER_ID;\nconst config = {\n  convertEmptyValues: true,\n  ...(isTest && {\n    endpoint: 'localhost:8000',\n    sslEnabled: false,\n    region: 'local-env',\n  }),\n};\n\nconst ddb = new DocumentClient(config);\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Write tests")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it('should insert item into table', async () => {\n  await ddb\n    .put({TableName: 'files', Item: {id: '1', hello: 'world'}})\n    .promise();\n\n  const {Item} = await ddb.get({TableName: 'files', Key: {id: '1'}}).promise();\n\n  expect(Item).toEqual({\n    id: '1',\n    hello: 'world',\n  });\n});\n")),(0,r.kt)("p",null,"There's no need to load any dependencies."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shelfio/jest-dynamodb"},"documentation")," for details."))}m.isMDXComponent=!0}}]);