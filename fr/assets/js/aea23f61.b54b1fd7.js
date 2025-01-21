"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8508],{18938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"dynamodb","title":"Using with DynamoDB","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with DynamoDB.","source":"@site/versioned_docs/version-29.6/DynamoDB.md","sourceDirName":".","slug":"/dynamodb","permalink":"/fr/docs/29.6/dynamodb","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/fr","tags":[],"version":"29.6","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1737446335000,"frontMatter":{"id":"dynamodb","title":"Using with DynamoDB"},"sidebar":"docs","previous":{"title":"Using with MongoDB","permalink":"/fr/docs/29.6/mongodb"},"next":{"title":"DOM Manipulation","permalink":"/fr/docs/29.6/tutorial-jquery"}}');var r=t(62540),s=t(43023),l=t(65457),o=t(97265);const i={id:"dynamodb",title:"Using with DynamoDB"},c=void 0,u={},d=[{value:"Use jest-dynamodb Preset",id:"use-jest-dynamodb-preset",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.a,{href:"/fr/docs/29.6/configuration#globalsetup-string",children:"Global Setup/Teardown"})," and ",(0,r.jsx)(n.a,{href:"/fr/docs/29.6/configuration#testenvironment-string",children:"Async Test Environment"})," APIs, Jest can work smoothly with ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/dynamodb/",children:"DynamoDB"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"use-jest-dynamodb-preset",children:"Use jest-dynamodb Preset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/shelfio/jest-dynamodb",children:"Jest DynamoDB"})," provides all required configuration to run your tests using DynamoDB."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["First, install ",(0,r.jsx)(n.code,{children:"@shelf/jest-dynamodb"})]}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @shelf/jest-dynamodb\n"})})}),(0,r.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @shelf/jest-dynamodb\n"})})}),(0,r.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @shelf/jest-dynamodb\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Specify preset in your Jest configuration:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "preset": "@shelf/jest-dynamodb"\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Create ",(0,r.jsx)(n.code,{children:"jest-dynamodb-config.js"})," and define DynamoDB tables"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property",children:"Create Table API"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  tables: [\n    {\n      TableName: `files`,\n      KeySchema: [{AttributeName: 'id', KeyType: 'HASH'}],\n      AttributeDefinitions: [{AttributeName: 'id', AttributeType: 'S'}],\n      ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},\n    },\n    // etc\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Configure DynamoDB client"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const {DocumentClient} = require('aws-sdk/clients/dynamodb');\n\nconst isTest = process.env.JEST_WORKER_ID;\nconst config = {\n  convertEmptyValues: true,\n  ...(isTest && {\n    endpoint: 'localhost:8000',\n    sslEnabled: false,\n    region: 'local-env',\n  }),\n};\n\nconst ddb = new DocumentClient(config);\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"Write tests"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"it('should insert item into table', async () => {\n  await ddb\n    .put({TableName: 'files', Item: {id: '1', hello: 'world'}})\n    .promise();\n\n  const {Item} = await ddb.get({TableName: 'files', Key: {id: '1'}}).promise();\n\n  expect(Item).toEqual({\n    id: '1',\n    hello: 'world',\n  });\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"There's no need to load any dependencies."}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/shelfio/jest-dynamodb",children:"documentation"})," for details."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},97265:(e,n,t)=>{t.d(n,{A:()=>l});t(63696);var a=t(11750);const r={tabItem:"tabItem_wHwb"};var s=t(62540);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},65457:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(63696),r=t(11750),s=t(93707),l=t(49519),o=t(83604),i=t(95196),c=t(76229),u=t(88030);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),y=(()=>{const e=c??b;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(95200);const y={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var j=t(62540);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(x,{...e,children:d(e.children)},String(n))}},43023:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(63696);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);