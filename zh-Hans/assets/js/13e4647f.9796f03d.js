"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6525],{99268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tutorial-react","title":"Testing React Apps","description":"At Facebook, we use Jest to test React applications.","source":"@site/../docs/TutorialReact.md","sourceDirName":".","slug":"/tutorial-react","permalink":"/zh-Hans/docs/next/tutorial-react","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/zh-CN","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1741052460000,"frontMatter":{"id":"tutorial-react","title":"Testing React Apps"},"sidebar":"docs","previous":{"title":"Architecture","permalink":"/zh-Hans/docs/next/architecture"},"next":{"title":"Testing React Native Apps","permalink":"/zh-Hans/docs/next/tutorial-react-native"}}');var r=t(62540),a=t(43023),o=t(65457),c=t(97265);const l={id:"tutorial-react",title:"Testing React Apps"},i=void 0,d={},u=[{value:"Setup",id:"setup",level:2},{value:"Setup with Create React App",id:"setup-with-create-react-app",level:3},{value:"Setup without Create React App",id:"setup-without-create-react-app",level:3},{value:"Snapshot Testing",id:"snapshot-testing",level:3},{value:"Snapshot Testing with Mocks, Enzyme and React 16+",id:"snapshot-testing-with-mocks-enzyme-and-react-16",level:4},{value:"DOM Testing",id:"dom-testing",level:3},{value:"@testing-library/react",id:"testing-libraryreact",level:4},{value:"Custom transformers",id:"custom-transformers",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["At Facebook, we use Jest to test ",(0,r.jsx)(n.a,{href:"https://reactjs.org/",children:"React"})," applications."]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.h3,{id:"setup-with-create-react-app",children:"Setup with Create React App"}),"\n",(0,r.jsxs)(n.p,{children:["If you are new to React, we recommend using ",(0,r.jsx)(n.a,{href:"https://create-react-app.dev/",children:"Create React App"}),". It is ready to use and ",(0,r.jsx)(n.a,{href:"https://create-react-app.dev/docs/running-tests/#docsNav",children:"ships with Jest"}),"! You will only need to add ",(0,r.jsx)(n.code,{children:"react-test-renderer"})," for rendering snapshots."]}),"\n",(0,r.jsx)(n.p,{children:"Run"}),"\n",(0,r.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,r.jsx)(c.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev react-test-renderer\n"})})}),(0,r.jsx)(c.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev react-test-renderer\n"})})}),(0,r.jsx)(c.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev react-test-renderer\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"setup-without-create-react-app",children:"Setup without Create React App"}),"\n",(0,r.jsxs)(n.p,{children:["If you have an existing application you'll need to install a few packages to make everything work well together. We are using the ",(0,r.jsx)(n.code,{children:"babel-jest"})," package and the ",(0,r.jsx)(n.code,{children:"react"})," babel preset to transform our code inside of the test environment. Also see ",(0,r.jsx)(n.a,{href:"/zh-Hans/docs/next/getting-started#using-babel",children:"using babel"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Run"}),"\n",(0,r.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,r.jsx)(c.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})}),(0,r.jsx)(c.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})}),(0,r.jsx)(c.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Your ",(0,r.jsx)(n.code,{children:"package.json"})," should look something like this (where ",(0,r.jsx)(n.code,{children:"<current-version>"})," is the actual latest version number for the package). Please add the scripts and jest configuration entries:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "dependencies": {\n    "react": "<current-version>",\n    "react-dom": "<current-version>"\n  },\n  "devDependencies": {\n    "@babel/preset-env": "<current-version>",\n    "@babel/preset-react": "<current-version>",\n    "babel-jest": "<current-version>",\n    "jest": "<current-version>",\n    "react-test-renderer": "<current-version>"\n  },\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    '@babel/preset-env',\n    ['@babel/preset-react', {runtime: 'automatic'}],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"And you're good to go!"})}),"\n",(0,r.jsx)(n.h3,{id:"snapshot-testing",children:"Snapshot Testing"}),"\n",(0,r.jsxs)(n.p,{children:["Let's create a ",(0,r.jsx)(n.a,{href:"/zh-Hans/docs/next/snapshot-testing",children:"snapshot test"})," for a Link component that renders hyperlinks:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="Link.js"',children:"import {useState} from 'react';\n\nconst STATUS = {\n  HOVERED: 'hovered',\n  NORMAL: 'normal',\n};\n\nexport default function Link({page, children}) {\n  const [status, setStatus] = useState(STATUS.NORMAL);\n\n  const onMouseEnter = () => {\n    setStatus(STATUS.HOVERED);\n  };\n\n  const onMouseLeave = () => {\n    setStatus(STATUS.NORMAL);\n  };\n\n  return (\n    <a\n      className={status}\n      href={page || '#'}\n      onMouseEnter={onMouseEnter}\n      onMouseLeave={onMouseLeave}\n    >\n      {children}\n    </a>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Examples are using Function components, but Class components can be tested in the same way. See ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/components-and-props.html#function-and-class-components",children:"React: Function and Class Components"}),". ",(0,r.jsx)(n.strong,{children:"Reminders"})," that with Class components, we expect Jest to be used to test props and not methods directly."]})}),"\n",(0,r.jsx)(n.p,{children:"Now let's use React's test renderer and Jest's snapshot feature to interact with the component and capture the rendered output and create a snapshot file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="Link.test.js"',children:"import renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('changes the class when hovered', () => {\n  const component = renderer.create(\n    <Link page=\"http://www.facebook.com\">Facebook</Link>,\n  );\n  let tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  renderer.act(() => {\n    tree.props.onMouseEnter();\n  });\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  renderer.act(() => {\n    tree.props.onMouseLeave();\n  });\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When you run ",(0,r.jsx)(n.code,{children:"yarn test"})," or ",(0,r.jsx)(n.code,{children:"jest"}),", this will produce an output file like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/__snapshots__/Link.test.js.snap"',children:'exports[`changes the class when hovered 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n\nexports[`changes the class when hovered 2`] = `\n<a\n  className="hovered"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n\nexports[`changes the class when hovered 3`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The next time you run the tests, the rendered output will be compared to the previously created snapshot. The snapshot should be committed along with code changes. When a snapshot test fails, you need to inspect whether it is an intended or unintended change. If the change is expected you can invoke Jest with ",(0,r.jsx)(n.code,{children:"jest -u"})," to overwrite the existing snapshot."]}),"\n",(0,r.jsxs)(n.p,{children:["The code for this example is available at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/snapshot",children:"examples/snapshot"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"snapshot-testing-with-mocks-enzyme-and-react-16",children:"Snapshot Testing with Mocks, Enzyme and React 16+"}),"\n",(0,r.jsx)(n.p,{children:"There's a caveat around snapshot testing when using Enzyme and React 16+. If you mock out a module using the following style:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"jest.mock('../SomeDirectory/SomeComponent', () => 'SomeComponent');\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you will see warnings in the console:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Warning: <SomeComponent /> is using uppercase HTML. Always use lowercase HTML tags in React.\n\n# Or:\nWarning: The tag <SomeComponent> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.\n"})}),"\n",(0,r.jsx)(n.p,{children:"React 16 triggers these warnings due to how it checks element types, and the mocked module fails these checks. Your options are:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Render as text. This way you won't see the props passed to the mock component in the snapshot, but it's straightforward:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"jest.mock('./SomeComponent', () => () => 'SomeComponent');\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Render as a custom element. DOM \"custom elements\" aren't checked for anything and shouldn't fire warnings. They are lowercase and have a dash in the name.","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"jest.mock('./Widget', () => () => <mock-widget />);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"react-test-renderer"}),". The test renderer doesn't care about element types and will happily accept e.g. ",(0,r.jsx)(n.code,{children:"SomeComponent"}),". You could check snapshots using the test renderer, and check component behavior separately using Enzyme."]}),"\n",(0,r.jsxs)(n.li,{children:["Disable warnings all together (should be done in your jest setup file):","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"jest.mock('fbjs/lib/warning', () => require('fbjs/lib/emptyFunction'));\n"})}),"\n","This shouldn't normally be your option of choice as useful warnings could be lost. However, in some cases, for example when testing react-native's components we are rendering react-native tags into the DOM and many warnings are irrelevant. Another option is to swizzle the console.warn and suppress specific warnings."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"dom-testing",children:"DOM Testing"}),"\n",(0,r.jsxs)(n.p,{children:["If you'd like to assert, and manipulate your rendered components you can use ",(0,r.jsx)(n.a,{href:"https://github.com/testing-library/react-testing-library",children:"@testing-library/react"}),", ",(0,r.jsx)(n.a,{href:"https://enzymejs.github.io/enzyme/",children:"Enzyme"}),", or React's ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/test-utils.html",children:"TestUtils"}),". The following example use ",(0,r.jsx)(n.code,{children:"@testing-library/react"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"testing-libraryreact",children:"@testing-library/react"}),"\n",(0,r.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,r.jsx)(c.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @testing-library/react\n"})})}),(0,r.jsx)(c.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @testing-library/react\n"})})}),(0,r.jsx)(c.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @testing-library/react\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Let's implement a checkbox which swaps between two labels:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="CheckboxWithLabel.js"',children:"import {useState} from 'react';\n\nexport default function CheckboxWithLabel({labelOn, labelOff}) {\n  const [isChecked, setIsChecked] = useState(false);\n\n  const onChange = () => {\n    setIsChecked(!isChecked);\n  };\n\n  return (\n    <label>\n      <input type=\"checkbox\" checked={isChecked} onChange={onChange} />\n      {isChecked ? labelOn : labelOff}\n    </label>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="__tests__/CheckboxWithLabel-test.js"',children:"import {cleanup, fireEvent, render} from '@testing-library/react';\nimport CheckboxWithLabel from '../CheckboxWithLabel';\n\n// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher\n// unmount and cleanup DOM after the test is finished.\nafterEach(cleanup);\n\nit('CheckboxWithLabel changes the text after click', () => {\n  const {queryByLabelText, getByLabelText} = render(\n    <CheckboxWithLabel labelOn=\"On\" labelOff=\"Off\" />,\n  );\n\n  expect(queryByLabelText(/off/i)).toBeTruthy();\n\n  fireEvent.click(getByLabelText(/off/i));\n\n  expect(queryByLabelText(/on/i)).toBeTruthy();\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The code for this example is available at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-testing-library",children:"examples/react-testing-library"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"custom-transformers",children:"Custom transformers"}),"\n",(0,r.jsxs)(n.p,{children:["If you need more advanced functionality, you can also build your own transformer. Instead of using ",(0,r.jsx)(n.code,{children:"babel-jest"}),", here is an example of using ",(0,r.jsx)(n.code,{children:"@babel/core"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="custom-transformer.js"',children:"'use strict';\n\nconst {transform} = require('@babel/core');\nconst jestPreset = require('babel-preset-jest');\n\nmodule.exports = {\n  process(src, filename) {\n    const result = transform(src, {\n      filename,\n      presets: [jestPreset],\n    });\n\n    return result || src;\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Don't forget to install the ",(0,r.jsx)(n.code,{children:"@babel/core"})," and ",(0,r.jsx)(n.code,{children:"babel-preset-jest"})," packages for this example to work."]}),"\n",(0,r.jsxs)(n.p,{children:["To make this work with Jest you need to update your Jest configuration with this: ",(0,r.jsx)(n.code,{children:'"transform": {"\\\\.js$": "path/to/custom-transformer.js"}'}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you'd like to build a transformer with babel support, you can also use ",(0,r.jsx)(n.code,{children:"babel-jest"})," to compose one and pass in your custom configuration options:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const babelJest = require('babel-jest');\n\nmodule.exports = babelJest.createTransformer({\n  presets: ['my-custom-preset'],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/zh-Hans/docs/next/code-transformation#writing-custom-transformers",children:"dedicated docs"})," for more details."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},97265:(e,n,t)=>{t.d(n,{A:()=>o});t(63696);var s=t(11750);const r={tabItem:"tabItem_wHwb"};var a=t(62540);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},65457:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(63696),r=t(11750),a=t(93707),o=t(49519),c=t(83604),l=t(95196),i=t(76229),d=t(88030);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[i,u]=m({queryString:t,groupId:r}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=i??b;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=t(95200);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var j=t(62540);function f(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=c[t].value;r!==s&&(i(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},43023:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(63696);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);