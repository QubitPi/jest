"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8523],{65803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"puppeteer","title":"Using with puppeteer","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with puppeteer.","source":"@site/../docs/Puppeteer.md","sourceDirName":".","slug":"/puppeteer","permalink":"/es-ES/docs/next/puppeteer","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/es-ES","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738912609000,"frontMatter":{"id":"puppeteer","title":"Using with puppeteer"},"sidebar":"docs","previous":{"title":"Using with webpack","permalink":"/es-ES/docs/next/webpack"},"next":{"title":"Using with MongoDB","permalink":"/es-ES/docs/next/mongodb"}}');var r=n(62540),o=n(43023),a=n(65457),i=n(97265);const l={id:"puppeteer",title:"Using with puppeteer"},u=void 0,c={},p=[{value:"Use jest-puppeteer Preset",id:"use-jest-puppeteer-preset",level:2},{value:"Custom example without jest-puppeteer preset",id:"custom-example-without-jest-puppeteer-preset",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["With the ",(0,r.jsx)(t.a,{href:"/es-ES/docs/next/configuration#globalsetup-string",children:"Global Setup/Teardown"})," and ",(0,r.jsx)(t.a,{href:"/es-ES/docs/next/configuration#testenvironment-string",children:"Async Test Environment"})," APIs, Jest can work smoothly with ",(0,r.jsx)(t.a,{href:"https://github.com/GoogleChrome/puppeteer",children:"puppeteer"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Generating code coverage for test files using Puppeteer is currently not possible if your test uses ",(0,r.jsx)(t.code,{children:"page.$eval"}),", ",(0,r.jsx)(t.code,{children:"page.$$eval"})," or ",(0,r.jsx)(t.code,{children:"page.evaluate"})," as the passed function is executed outside of Jest's scope. Check out ",(0,r.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues/7962#issuecomment-495272339",children:"issue #7962"})," on GitHub for a workaround."]})}),"\n",(0,r.jsx)(t.h2,{id:"use-jest-puppeteer-preset",children:"Use jest-puppeteer Preset"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"Jest Puppeteer"})," provides all required configuration to run your tests using Puppeteer."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["First, install ",(0,r.jsx)(t.code,{children:"jest-puppeteer"})]}),"\n"]}),"\n",(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest-puppeteer\n"})})}),(0,r.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add --dev jest-puppeteer\n"})})}),(0,r.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-dev jest-puppeteer\n"})})})]}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Specify preset in your ",(0,r.jsx)(t.a,{href:"/es-ES/docs/next/configuration",children:"Jest configuration"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "preset": "jest-puppeteer"\n}\n'})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Write your test"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"describe('Google', () => {\n  beforeAll(async () => {\n    await page.goto('https://google.com');\n  });\n\n  it('should be titled \"Google\"', async () => {\n    await expect(page.title()).resolves.toMatch('Google');\n  });\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["There's no need to load any dependencies. Puppeteer's ",(0,r.jsx)(t.code,{children:"page"})," and ",(0,r.jsx)(t.code,{children:"browser"})," classes will automatically be exposed"]}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"documentation"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"custom-example-without-jest-puppeteer-preset",children:"Custom example without jest-puppeteer preset"}),"\n",(0,r.jsx)(t.p,{children:"You can also hook up puppeteer from scratch. The basic idea is to:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"launch & file the websocket endpoint of puppeteer with Global Setup"}),"\n",(0,r.jsx)(t.li,{children:"connect to puppeteer from each Test Environment"}),"\n",(0,r.jsx)(t.li,{children:"close puppeteer with Global Teardown"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Here's an example of the GlobalSetup script"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="setup.js"',children:"const {mkdir, writeFile} = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\nconst puppeteer = require('puppeteer');\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\n\nmodule.exports = async function () {\n  const browser = await puppeteer.launch();\n  // store the browser instance so we can teardown it later\n  // this global is only available in the teardown but not in TestEnvironments\n  globalThis.__BROWSER_GLOBAL__ = browser;\n\n  // use the file system to expose the wsEndpoint for TestEnvironments\n  await mkdir(DIR, {recursive: true});\n  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then we need a custom Test Environment for puppeteer"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="puppeteer_environment.js"',children:"const {readFile} = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\nconst puppeteer = require('puppeteer');\nconst NodeEnvironment = require('jest-environment-node').TestEnvironment;\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\n\nclass PuppeteerEnvironment extends NodeEnvironment {\n  constructor(config) {\n    super(config);\n  }\n\n  async setup() {\n    await super.setup();\n    // get the wsEndpoint\n    const wsEndpoint = await readFile(path.join(DIR, 'wsEndpoint'), 'utf8');\n    if (!wsEndpoint) {\n      throw new Error('wsEndpoint not found');\n    }\n\n    // connect to puppeteer\n    this.global.__BROWSER_GLOBAL__ = await puppeteer.connect({\n      browserWSEndpoint: wsEndpoint,\n    });\n  }\n\n  async teardown() {\n    if (this.global.__BROWSER_GLOBAL__) {\n      this.global.__BROWSER_GLOBAL__.disconnect();\n    }\n    await super.teardown();\n  }\n\n  getVmContext() {\n    return super.getVmContext();\n  }\n}\n\nmodule.exports = PuppeteerEnvironment;\n"})}),"\n",(0,r.jsx)(t.p,{children:"Finally, we can close the puppeteer instance and clean-up the file"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="teardown.js"',children:"const fs = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\nmodule.exports = async function () {\n  // close the browser instance\n  await globalThis.__BROWSER_GLOBAL__.close();\n\n  // clean-up the wsEndpoint file\n  await fs.rm(DIR, {recursive: true, force: true});\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"With all the things set up, we can now write our tests like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="test.js"',children:"const timeout = 5000;\n\ndescribe(\n  '/ (Home Page)',\n  () => {\n    let page;\n    beforeAll(async () => {\n      page = await globalThis.__BROWSER_GLOBAL__.newPage();\n      await page.goto('https://google.com');\n    }, timeout);\n\n    it('should load without error', async () => {\n      const text = await page.evaluate(() => document.body.textContent);\n      expect(text).toContain('google');\n    });\n  },\n  timeout,\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Finally, set ",(0,r.jsx)(t.code,{children:"jest.config.js"})," to read from these files. (The ",(0,r.jsx)(t.code,{children:"jest-puppeteer"})," preset does something like this under the hood.)"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"module.exports = {\n  globalSetup: './setup.js',\n  globalTeardown: './teardown.js',\n  testEnvironment: './puppeteer_environment.js',\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Here's the code of ",(0,r.jsx)(t.a,{href:"https://github.com/xfumihiro/jest-puppeteer-example",children:"full working example"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},97265:(e,t,n)=>{n.d(t,{A:()=>a});n(63696);var s=n(11750);const r={tabItem:"tabItem_wHwb"};var o=n(62540);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},65457:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(63696),r=n(11750),o=n(93707),a=n(49519),i=n(83604),l=n(95196),u=n(76229),c=n(88030);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[u,p]=m({queryString:n,groupId:r}),[j,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=u??j;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var f=n(95200);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=n(62540);function x(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==s&&(u(t),a(r))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{l.push(e)},onKeyDown:p,onClick:c,...o,className:(0,r.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(w,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,b.jsx)(v,{...e,children:p(e.children)},String(t))}},43023:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(63696);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);