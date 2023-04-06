"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[76047],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,y=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(y,s(s({ref:t},d),{},{components:n})):a.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const o={id:"dynamodb",title:"Using with DynamoDB"},s=void 0,i={unversionedId:"dynamodb",id:"version-25.x/dynamodb",title:"Using with DynamoDB",description:"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with DynamoDB.",source:"@site/versioned_docs/version-25.x/DynamoDB.md",sourceDirName:".",slug:"/dynamodb",permalink:"/jest/ja/docs/25.x/dynamodb",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"25.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"2023\u5e744\u67086\u65e5",frontMatter:{id:"dynamodb",title:"Using with DynamoDB"},sidebar:"version-25.x/docs",previous:{title:"Using with MongoDB",permalink:"/jest/ja/docs/25.x/mongodb"},next:{title:"DOM Manipulation",permalink:"/jest/ja/docs/25.x/tutorial-jquery"}},l={},p=[{value:"Use jest-dynamodb Preset",id:"use-jest-dynamodb-preset",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With the ",(0,r.kt)("a",{parentName:"p",href:"/jest/ja/docs/25.x/configuration#globalsetup-string"},"Global Setup/Teardown")," and ",(0,r.kt)("a",{parentName:"p",href:"/jest/ja/docs/25.x/configuration#testenvironment-string"},"Async Test Environment")," APIs, Jest can work smoothly with ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb/"},"DynamoDB"),"."),(0,r.kt)("h2",{id:"use-jest-dynamodb-preset"},"Use jest-dynamodb Preset"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/shelfio/jest-dynamodb"},"Jest DynamoDB")," provides all required configuration to run your tests using DynamoDB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, install ",(0,r.kt)("inlineCode",{parentName:"li"},"@shelf/jest-dynamodb"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @shelf/jest-dynamodb --dev\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Specify preset in your Jest configuration:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "preset": "@shelf/jest-dynamodb"\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"jest-dynamodb-config.js")," and define DynamoDB tables")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property"},"Create Table API")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  tables: [\n    {\n      TableName: `files`,\n      KeySchema: [{AttributeName: 'id', KeyType: 'HASH'}],\n      AttributeDefinitions: [{AttributeName: 'id', AttributeType: 'S'}],\n      ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},\n    },\n    // etc\n  ],\n};\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Configure DynamoDB client")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const {DocumentClient} = require('aws-sdk/clients/dynamodb');\n\nconst isTest = process.env.JEST_WORKER_ID;\nconst config = {\n  convertEmptyValues: true,\n  ...(isTest && {\n    endpoint: 'localhost:8000',\n    sslEnabled: false,\n    region: 'local-env',\n  }),\n};\n\nconst ddb = new DocumentClient(config);\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Write tests")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it('should insert item into table', async () => {\n  await ddb\n    .put({TableName: 'files', Item: {id: '1', hello: 'world'}})\n    .promise();\n\n  const {Item} = await ddb.get({TableName: 'files', Key: {id: '1'}}).promise();\n\n  expect(Item).toEqual({\n    id: '1',\n    hello: 'world',\n  });\n});\n")),(0,r.kt)("p",null,"There's no need to load any dependencies."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shelfio/jest-dynamodb"},"documentation")," for details."))}c.isMDXComponent=!0}}]);