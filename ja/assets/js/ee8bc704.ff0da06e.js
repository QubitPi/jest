"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[91103],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?o.createElement(k,i(i({ref:t},l),{},{components:n})):o.createElement(k,i({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(25773),a=(n(27378),n(35318)),r=n(34982);const i={id:"upgrading-to-jest29",title:"From v28 to v29"},p=void 0,s={unversionedId:"upgrading-to-jest29",id:"version-29.4/upgrading-to-jest29",title:"From v28 to v29",description:"Upgrading Jest from v28 to v29? This guide aims to help refactoring your configuration and tests.",source:"@site/versioned_docs/version-29.4/UpgradingToJest29.md",sourceDirName:".",slug:"/upgrading-to-jest29",permalink:"/jest/ja/docs/29.4/upgrading-to-jest29",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"29.4",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"2023\u5e744\u67086\u65e5",frontMatter:{id:"upgrading-to-jest29",title:"From v28 to v29"},sidebar:"docs",previous:{title:"Testing Web Frameworks",permalink:"/jest/ja/docs/29.4/testing-frameworks"}},d={},l=[{value:"Compatibility",id:"compatibility",level:2},{value:"Snapshot format",id:"snapshot-format",level:2},{value:"JSDOM upgrade",id:"jsdom-upgrade",level:2},{value:"<code>pretty-format</code>",id:"pretty-format",level:2},{value:"<code>jest-mock</code>",id:"jest-mock",level:3},{value:"TypeScript",id:"typescript",level:2},{value:"<code>jest.mocked()</code>",id:"jestmocked",level:3}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Upgrading Jest from v28 to v29? This guide aims to help refactoring your configuration and tests."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/CHANGELOG.md#2900"},"changelog")," for the full list of changes.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Upgrading from an older version? You can see the upgrade guide from v27 to v28 ",(0,a.kt)("a",{parentName:"p",href:"/docs/28.x/upgrading-to-jest28"},"here"),".")),(0,a.kt)("h2",{id:"compatibility"},"Compatibility"),(0,a.kt)("p",null,"The supported Node versions are 14.15, 16.10, 18.0 and above."),(0,a.kt)("h2",{id:"snapshot-format"},"Snapshot format"),(0,a.kt)("p",null,"As announced in the ",(0,a.kt)("a",{parentName:"p",href:"/blog/2022/04/25/jest-28#future"},"Jest 28 blog post"),", Jest 29 has changed the default snapshot formatting to ",(0,a.kt)("inlineCode",{parentName:"p"},"{escapeString: false, printBasicPrototype: false}"),"."),(0,a.kt)("p",null,"If you want to keep the old behavior, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshotFormat")," property to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"+ snapshotFormat: {\n+   escapeString: true,\n+   printBasicPrototype: true\n+ }\n")),(0,a.kt)("h2",{id:"jsdom-upgrade"},"JSDOM upgrade"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom")," has upgraded ",(0,a.kt)("inlineCode",{parentName:"p"},"jsdom")," from v19 to v20."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom"),", the minimum TypeScript version is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"4.5"),".")),(0,a.kt)("p",null,"Notably, ",(0,a.kt)("inlineCode",{parentName:"p"},"jsdom@20")," includes support for ",(0,a.kt)("inlineCode",{parentName:"p"},"crypto.getRandomValues()"),", which means packages like ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nanoid"),", which doesn't work properly in Jest@28, can work without extra polyfills."),(0,a.kt)("h2",{id:"pretty-format"},(0,a.kt)("inlineCode",{parentName:"h2"},"pretty-format")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ConvertAnsi")," plugin is removed from ",(0,a.kt)("inlineCode",{parentName:"p"},"pretty-format")," package in favour of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrazauskas/jest-serializer-ansi-escapes"},(0,a.kt)("inlineCode",{parentName:"a"},"jest-serializer-ansi-escapes")),"."),(0,a.kt)("h3",{id:"jest-mock"},(0,a.kt)("inlineCode",{parentName:"h3"},"jest-mock")),(0,a.kt)("p",null,"Exports of ",(0,a.kt)("inlineCode",{parentName:"p"},"Mocked*")," utility types from ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-mock")," package have changed. ",(0,a.kt)("inlineCode",{parentName:"p"},"MaybeMockedDeep")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MaybeMocked")," now are exported as ",(0,a.kt)("inlineCode",{parentName:"p"},"Mocked")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MockedShallow")," respectively; only deep mocked variants of ",(0,a.kt)("inlineCode",{parentName:"p"},"MockedClass"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MockedFunction")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MockedObject")," are exposed."),(0,a.kt)("h2",{id:"typescript"},"TypeScript"),(0,a.kt)(r.ZP,{mdxType:"TypeScriptExamplesNote"}),(0,a.kt)("h3",{id:"jestmocked"},(0,a.kt)("inlineCode",{parentName:"h3"},"jest.mocked()")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/jest/ja/docs/29.4/mock-function-api/#jestmockedsource-options"},(0,a.kt)("inlineCode",{parentName:"a"},"jest.mocked()"))," helper method now wraps types of deep members of passed object by default. If you have used the method with ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as the second argument, remove it to avoid type errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- const mockedObject = jest.mocked(someObject, true);\n+ const mockedObject = jest.mocked(someObject);\n")),(0,a.kt)("p",null,"To have the old shallow mocked behavior, pass ",(0,a.kt)("inlineCode",{parentName:"p"},"{shallow: true}")," as the second argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- const mockedObject = jest.mocked(someObject);\n+ const mockedObject = jest.mocked(someObject, {shallow: true});\n")))}m.isMDXComponent=!0},34982:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(25773),a=(n(27378),n(35318));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The TypeScript examples from this page will only work as documented if you explicitly import Jest APIs:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {expect, jest, test} from '@jest/globals';\n")),(0,a.kt)("p",{parentName:"admonition"},"Consult the ",(0,a.kt)("a",{parentName:"p",href:"/jest/ja/docs/29.4/getting-started#using-typescript"},"Getting Started")," guide for details on how to setup Jest with TypeScript.")))}i.isMDXComponent=!0}}]);