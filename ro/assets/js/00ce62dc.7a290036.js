"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9661],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||p;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,s=new Array(p);s[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<p;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var r=n(25773),o=(n(27378),n(35318));const p={id:"puppeteer",title:"Using with puppeteer"},s=void 0,a={unversionedId:"puppeteer",id:"version-25.x/puppeteer",title:"Using with puppeteer",description:"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with puppeteer.",source:"@site/versioned_docs/version-25.x/Puppeteer.md",sourceDirName:".",slug:"/puppeteer",permalink:"/jest/ro/docs/25.x/puppeteer",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"25.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680744104,formattedLastUpdatedAt:"6 apr. 2023",frontMatter:{id:"puppeteer",title:"Using with puppeteer"},sidebar:"version-25.x/docs",previous:{title:"Using with webpack",permalink:"/jest/ro/docs/25.x/webpack"},next:{title:"Using with MongoDB",permalink:"/jest/ro/docs/25.x/mongodb"}},i={},l=[{value:"Use jest-puppeteer Preset",id:"use-jest-puppeteer-preset",level:2},{value:"Custom example without jest-puppeteer preset",id:"custom-example-without-jest-puppeteer-preset",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/jest/ro/docs/25.x/configuration#globalsetup-string"},"Global Setup/Teardown")," and ",(0,o.kt)("a",{parentName:"p",href:"/jest/ro/docs/25.x/configuration#testenvironment-string"},"Async Test Environment")," APIs, Jest can work smoothly with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/puppeteer"},"puppeteer"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Generating code coverage for test files using Puppeteer is currently not possible if your test uses ",(0,o.kt)("inlineCode",{parentName:"p"},"page.$eval"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"page.$$eval")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate")," as the passed function is executed outside of Jest's scope. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/7962#issuecomment-495272339"},"issue #7962")," on GitHub for a workaround.")),(0,o.kt)("h2",{id:"use-jest-puppeteer-preset"},"Use jest-puppeteer Preset"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/smooth-code/jest-puppeteer"},"Jest Puppeteer")," provides all required configuration to run your tests using Puppeteer."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, install ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-puppeteer"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add --dev jest-puppeteer\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Specify preset in your Jest configuration:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "preset": "jest-puppeteer"\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Write your test")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('Google', () => {\n  beforeAll(async () => {\n    await page.goto('https://google.com');\n  });\n\n  it('should be titled \"Google\"', async () => {\n    await expect(page.title()).resolves.toMatch('Google');\n  });\n});\n")),(0,o.kt)("p",null,"There's no need to load any dependencies. Puppeteer's ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"browser")," classes will automatically be exposed"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/smooth-code/jest-puppeteer"},"documentation"),"."),(0,o.kt)("h2",{id:"custom-example-without-jest-puppeteer-preset"},"Custom example without jest-puppeteer preset"),(0,o.kt)("p",null,"You can also hook up puppeteer from scratch. The basic idea is to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"launch & file the websocket endpoint of puppeteer with Global Setup"),(0,o.kt)("li",{parentName:"ol"},"connect to puppeteer from each Test Environment"),(0,o.kt)("li",{parentName:"ol"},"close puppeteer with Global Teardown")),(0,o.kt)("p",null,"Here's an example of the GlobalSetup script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="setup.js"',title:'"setup.js"'},"const {mkdir, writeFile} = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\nconst puppeteer = require('puppeteer');\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\n\nmodule.exports = async function () {\n  const browser = await puppeteer.launch();\n  // store the browser instance so we can teardown it later\n  // this global is only available in the teardown but not in TestEnvironments\n  global.__BROWSER_GLOBAL__ = browser;\n\n  // use the file system to expose the wsEndpoint for TestEnvironments\n  await mkdir(DIR, {recursive: true});\n  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());\n};\n")),(0,o.kt)("p",null,"Then we need a custom Test Environment for puppeteer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="puppeteer_environment.js"',title:'"puppeteer_environment.js"'},"const {readFile} = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\nconst puppeteer = require('puppeteer');\nconst NodeEnvironment = require('jest-environment-node');\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\n\nclass PuppeteerEnvironment extends NodeEnvironment {\n  constructor(config) {\n    super(config);\n  }\n\n  async setup() {\n    await super.setup();\n    // get the wsEndpoint\n    const wsEndpoint = await readFile(path.join(DIR, 'wsEndpoint'), 'utf8');\n    if (!wsEndpoint) {\n      throw new Error('wsEndpoint not found');\n    }\n\n    // connect to puppeteer\n    this.global.__BROWSER_GLOBAL__ = await puppeteer.connect({\n      browserWSEndpoint: wsEndpoint,\n    });\n  }\n\n  async teardown() {\n    if (this.global.__BROWSER_GLOBAL__) {\n      this.global.__BROWSER_GLOBAL__.disconnect();\n    }\n    await super.teardown();\n  }\n\n  runScript(script) {\n    return super.runScript(script);\n  }\n}\n\nmodule.exports = PuppeteerEnvironment;\n")),(0,o.kt)("p",null,"Finally, we can close the puppeteer instance and clean-up the file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="teardown.js"',title:'"teardown.js"'},"const fs = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\nmodule.exports = async function () {\n  // close the browser instance\n  await global.__BROWSER_GLOBAL__.close();\n\n  // clean-up the wsEndpoint file\n  await fs.rm(DIR, {recursive: true, force: true});\n};\n")),(0,o.kt)("p",null,"With all the things set up, we can now write our tests like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="test.js"',title:'"test.js"'},"const timeout = 5000;\n\ndescribe(\n  '/ (Home Page)',\n  () => {\n    let page;\n    beforeAll(async () => {\n      page = await global.__BROWSER_GLOBAL__.newPage();\n      await page.goto('https://google.com');\n    }, timeout);\n\n    it('should load without error', async () => {\n      const text = await page.evaluate(() => document.body.textContent);\n      expect(text).toContain('google');\n    });\n  },\n  timeout,\n);\n")),(0,o.kt)("p",null,"Finally, set ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js")," to read from these files. (The ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-puppeteer")," preset does something like this under the hood.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  globalSetup: './setup.js',\n  globalTeardown: './teardown.js',\n  testEnvironment: './puppeteer_environment.js',\n};\n")),(0,o.kt)("p",null,"Here's the code of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xfumihiro/jest-puppeteer-example"},"full working example"),"."))}c.isMDXComponent=!0}}]);