"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2132],{3219:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"upgrading-to-jest29","title":"From v28 to v29","description":"Upgrading Jest from v28 to v29? This guide aims to help refactoring your configuration and tests.","source":"@site/../docs/UpgradingToJest29.md","sourceDirName":".","slug":"/upgrading-to-jest29","permalink":"/pt-BR/docs/next/upgrading-to-jest29","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/pt-BR","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738910716000,"frontMatter":{"id":"upgrading-to-jest29","title":"From v28 to v29"},"sidebar":"docs","previous":{"title":"Testing Web Frameworks","permalink":"/pt-BR/docs/next/testing-frameworks"}}');var n=o(62540),r=o(43023),d=o(42573);const i={id:"upgrading-to-jest29",title:"From v28 to v29"},c=void 0,a={},l=[{value:"Compatibility",id:"compatibility",level:2},{value:"Snapshot format",id:"snapshot-format",level:2},{value:"JSDOM upgrade",id:"jsdom-upgrade",level:2},{value:"<code>pretty-format</code>",id:"pretty-format",level:2},{value:"<code>jest-mock</code>",id:"jest-mock",level:3},{value:"TypeScript",id:"typescript",level:2},...d.RM,{value:"<code>jest.mocked()</code>",id:"jestmocked",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Upgrading Jest from v28 to v29? This guide aims to help refactoring your configuration and tests."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md#2900",children:"changelog"})," for the full list of changes."]})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Upgrading from an older version? You can see the upgrade guide from v27 to v28 ",(0,n.jsx)(t.a,{href:"/docs/28.x/upgrading-to-jest28",children:"here"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsx)(t.p,{children:"The supported Node versions are 14.15, 16.10, 18.0 and above."}),"\n",(0,n.jsx)(t.h2,{id:"snapshot-format",children:"Snapshot format"}),"\n",(0,n.jsxs)(t.p,{children:["As announced in the ",(0,n.jsx)(t.a,{href:"/blog/2022/04/25/jest-28#future",children:"Jest 28 blog post"}),", Jest 29 has changed the default snapshot formatting to ",(0,n.jsx)(t.code,{children:"{escapeString: false, printBasicPrototype: false}"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to keep the old behavior, you can set the ",(0,n.jsx)(t.code,{children:"snapshotFormat"})," property to:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"+ snapshotFormat: {\n+   escapeString: true,\n+   printBasicPrototype: true\n+ }\n"})}),"\n",(0,n.jsx)(t.h2,{id:"jsdom-upgrade",children:"JSDOM upgrade"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"jest-environment-jsdom"})," has upgraded ",(0,n.jsx)(t.code,{children:"jsdom"})," from v19 to v20."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["If you use ",(0,n.jsx)(t.code,{children:"jest-environment-jsdom"}),", the minimum TypeScript version is set to ",(0,n.jsx)(t.code,{children:"4.5"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["Notably, ",(0,n.jsx)(t.code,{children:"jsdom@20"})," includes support for ",(0,n.jsx)(t.code,{children:"crypto.getRandomValues()"}),", which means packages like ",(0,n.jsx)(t.code,{children:"uuid"})," and ",(0,n.jsx)(t.code,{children:"nanoid"}),", which doesn't work properly in Jest@28, can work without extra polyfills."]}),"\n",(0,n.jsx)(t.h2,{id:"pretty-format",children:(0,n.jsx)(t.code,{children:"pretty-format"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ConvertAnsi"})," plugin is removed from ",(0,n.jsx)(t.code,{children:"pretty-format"})," package in favour of ",(0,n.jsx)(t.a,{href:"https://github.com/mrazauskas/jest-serializer-ansi-escapes",children:(0,n.jsx)(t.code,{children:"jest-serializer-ansi-escapes"})}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"jest-mock",children:(0,n.jsx)(t.code,{children:"jest-mock"})}),"\n",(0,n.jsxs)(t.p,{children:["Exports of ",(0,n.jsx)(t.code,{children:"Mocked*"})," utility types from ",(0,n.jsx)(t.code,{children:"jest-mock"})," package have changed. ",(0,n.jsx)(t.code,{children:"MaybeMockedDeep"})," and ",(0,n.jsx)(t.code,{children:"MaybeMocked"})," now are exported as ",(0,n.jsx)(t.code,{children:"Mocked"})," and ",(0,n.jsx)(t.code,{children:"MockedShallow"})," respectively; only deep mocked variants of ",(0,n.jsx)(t.code,{children:"MockedClass"}),", ",(0,n.jsx)(t.code,{children:"MockedFunction"})," and ",(0,n.jsx)(t.code,{children:"MockedObject"})," are exposed."]}),"\n",(0,n.jsx)(t.h2,{id:"typescript",children:"TypeScript"}),"\n","\n",(0,n.jsx)(d.Ay,{}),"\n",(0,n.jsx)(t.h3,{id:"jestmocked",children:(0,n.jsx)(t.code,{children:"jest.mocked()"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/pt-BR/docs/next/mock-function-api#jestmockedsource-options",children:(0,n.jsx)(t.code,{children:"jest.mocked()"})})," helper method now wraps types of deep members of passed object by default. If you have used the method with ",(0,n.jsx)(t.code,{children:"true"})," as the second argument, remove it to avoid type errors:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"- const mockedObject = jest.mocked(someObject, true);\n+ const mockedObject = jest.mocked(someObject);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To have the old shallow mocked behavior, pass ",(0,n.jsx)(t.code,{children:"{shallow: true}"})," as the second argument:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"- const mockedObject = jest.mocked(someObject);\n+ const mockedObject = jest.mocked(someObject, {shallow: true});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},42573:(e,t,o)=>{o.d(t,{Ay:()=>i,RM:()=>r});var s=o(62540),n=o(43023);const r=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"The TypeScript examples from this page will only work as documented if you explicitly import Jest APIs:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {expect, jest, test} from '@jest/globals';\n"})}),(0,s.jsxs)(t.p,{children:["Consult the ",(0,s.jsx)(t.a,{href:"/pt-BR/docs/next/getting-started#using-typescript",children:"Getting Started"})," guide for details on how to setup Jest with TypeScript."]})]})}function i(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43023:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>i});var s=o(63696);const n={},r=s.createContext(n);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);