"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[43290],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(25773),r=(n(27378),n(35318));const s={id:"mongodb",title:"Using with MongoDB"},a=void 0,i={unversionedId:"mongodb",id:"version-26.x/mongodb",title:"Using with MongoDB",description:"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with MongoDB.",source:"@site/versioned_docs/version-26.x/MongoDB.md",sourceDirName:".",slug:"/mongodb",permalink:"/jest/es-ES/docs/26.x/mongodb",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"26.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"6 abr 2023",frontMatter:{id:"mongodb",title:"Using with MongoDB"},sidebar:"version-26.x/docs",previous:{title:"Using with puppeteer",permalink:"/jest/es-ES/docs/26.x/puppeteer"},next:{title:"Using with DynamoDB",permalink:"/jest/es-ES/docs/26.x/dynamodb"}},l={},c=[{value:"Use jest-mongodb Preset",id:"use-jest-mongodb-preset",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With the ",(0,r.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/26.x/configuration#globalsetup-string"},"Global Setup/Teardown")," and ",(0,r.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/26.x/configuration#testenvironment-string"},"Async Test Environment")," APIs, Jest can work smoothly with ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),"."),(0,r.kt)("h2",{id:"use-jest-mongodb-preset"},"Use jest-mongodb Preset"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/shelfio/jest-mongodb"},"Jest MongoDB")," provides all required configuration to run your tests using MongoDB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First install ",(0,r.kt)("inlineCode",{parentName:"li"},"@shelf/jest-mongodb"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @shelf/jest-mongodb --dev\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Specify preset in your Jest configuration:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "preset": "@shelf/jest-mongodb"\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Write your test")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const {MongoClient} = require('mongodb');\n\ndescribe('insert', () => {\n  let connection;\n  let db;\n\n  beforeAll(async () => {\n    connection = await MongoClient.connect(global.__MONGO_URI__, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n    });\n    db = await connection.db(global.__MONGO_DB_NAME__);\n  });\n\n  afterAll(async () => {\n    await connection.close();\n  });\n\n  it('should insert a doc into collection', async () => {\n    const users = db.collection('users');\n\n    const mockUser = {_id: 'some-user-id', name: 'John'};\n    await users.insertOne(mockUser);\n\n    const insertedUser = await users.findOne({_id: 'some-user-id'});\n    expect(insertedUser).toEqual(mockUser);\n  });\n});\n")),(0,r.kt)("p",null,"There's no need to load any dependencies."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shelfio/jest-mongodb"},"documentation")," for details (configuring MongoDB version, etc)."))}d.isMDXComponent=!0}}]);