"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3760],{96802:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"migration-guide","title":"Migrating to Jest","description":"If you\'d like to try out Jest with an existing codebase, there are a number of ways to convert to Jest:","source":"@site/versioned_docs/version-29.6/MigrationGuide.md","sourceDirName":".","slug":"/migration-guide","permalink":"/es-ES/docs/29.6/migration-guide","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/es-ES","tags":[],"version":"29.6","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738912609000,"frontMatter":{"id":"migration-guide","title":"Migrating to Jest"},"sidebar":"docs","previous":{"title":"Watch Plugins","permalink":"/es-ES/docs/29.6/watch-plugins"},"next":{"title":"Troubleshooting","permalink":"/es-ES/docs/29.6/troubleshooting"}}');var i=s(62540),n=s(43023);const r={id:"migration-guide",title:"Migrating to Jest"},a=void 0,c={},h=[{value:"jest-codemods",id:"jest-codemods",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"If you'd like to try out Jest with an existing codebase, there are a number of ways to convert to Jest:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you are using Jasmine, or a Jasmine like API (for example ",(0,i.jsx)(t.a,{href:"https://mochajs.org",children:"Mocha"}),"), Jest should be mostly compatible, which makes it less complicated to migrate to."]}),"\n",(0,i.jsx)(t.li,{children:"If you are using AVA, Expect.js (by Automattic), Jasmine, Mocha, proxyquire, Should.js or Tape you can automatically migrate with Jest Codemods (see below)."}),"\n",(0,i.jsxs)(t.li,{children:["If you like ",(0,i.jsx)(t.a,{href:"http://chaijs.com/",children:"chai"}),", you can upgrade to Jest and continue using chai. However, we recommend trying out Jest's assertions and their failure messages. Jest Codemods can migrate from chai (see below)."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"jest-codemods",children:"jest-codemods"}),"\n",(0,i.jsxs)(t.p,{children:["If you are using ",(0,i.jsx)(t.a,{href:"https://github.com/avajs/ava",children:"AVA"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/chaijs/chai",children:"Chai"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/Automattic/expect.js",children:"Expect.js (by Automattic)"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/jasmine/jasmine",children:"Jasmine"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mochajs/mocha",children:"Mocha"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/thlorenz/proxyquire",children:"proxyquire"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/shouldjs/should.js",children:"Should.js"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/substack/tape",children:"Tape"}),", or ",(0,i.jsx)(t.a,{href:"https://sinonjs.org/",children:"Sinon"})," you can use the third-party ",(0,i.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:"jest-codemods"})," to do most of the dirty migration work. It runs a code transformation on your codebase using ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/jscodeshift",children:"jscodeshift"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"To transform your existing tests, navigate to the project containing the tests and run:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npx jest-codemods\n"})}),"\n",(0,i.jsxs)(t.p,{children:["More information can be found at ",(0,i.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:"https://github.com/skovhus/jest-codemods"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},43023:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var o=s(63696);const i={},n=o.createContext(i);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);