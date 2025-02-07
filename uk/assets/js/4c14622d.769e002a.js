"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3157],{57163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tutorial-jquery","title":"DOM Manipulation","description":"Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let\'s see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span.","source":"@site/../docs/TutorialjQuery.md","sourceDirName":".","slug":"/tutorial-jquery","permalink":"/uk/docs/next/tutorial-jquery","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/uk","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738912609000,"frontMatter":{"id":"tutorial-jquery","title":"DOM Manipulation"},"sidebar":"docs","previous":{"title":"Using with DynamoDB","permalink":"/uk/docs/next/dynamodb"},"next":{"title":"Watch Plugins","permalink":"/uk/docs/next/watch-plugins"}}');var a=n(62540),s=n(43023),o=n(65457),l=n(97265);const i={id:"tutorial-jquery",title:"DOM Manipulation"},u=void 0,c={},d=[];function h(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let's see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="displayUser.js"',children:"'use strict';\n\nconst $ = require('jquery');\nconst fetchCurrentUser = require('./fetchCurrentUser.js');\n\n$('#button').click(() => {\n  fetchCurrentUser(user => {\n    const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');\n    $('#username').text(user.fullName + ' - ' + loggedText);\n  });\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Again, we create a test file in the ",(0,a.jsx)(t.code,{children:"__tests__/"})," folder:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/displayUser-test.js"',children:"'use strict';\n\njest.mock('../fetchCurrentUser');\n\ntest('displays a user after a click', () => {\n  // Set up our document body\n  document.body.innerHTML =\n    '<div>' +\n    '  <span id=\"username\" />' +\n    '  <button id=\"button\" />' +\n    '</div>';\n\n  // This module has a side-effect\n  require('../displayUser');\n\n  const $ = require('jquery');\n  const fetchCurrentUser = require('../fetchCurrentUser');\n\n  // Tell the fetchCurrentUser mock function to automatically invoke\n  // its callback with some data\n  fetchCurrentUser.mockImplementation(cb => {\n    cb({\n      fullName: 'Johnny Cash',\n      loggedIn: true,\n    });\n  });\n\n  // Use jquery to emulate a click on our button\n  $('#button').click();\n\n  // Assert that the fetchCurrentUser function was called, and that the\n  // #username span's inner text was updated as we'd expect it to.\n  expect(fetchCurrentUser).toHaveBeenCalled();\n  expect($('#username').text()).toBe('Johnny Cash - Logged In');\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We are mocking ",(0,a.jsx)(t.code,{children:"fetchCurrentUser.js"})," so that our test doesn't make a real network request but instead resolves to mock data locally. This ensures that our test can complete in milliseconds rather than seconds and guarantees a fast unit test iteration speed."]}),"\n",(0,a.jsxs)(t.p,{children:["Also, the function being tested adds an event listener on the ",(0,a.jsx)(t.code,{children:"#button"})," DOM element, so we need to set up our DOM correctly for the test. ",(0,a.jsx)(t.code,{children:"jsdom"})," and the ",(0,a.jsx)(t.code,{children:"jest-environment-jsdom"})," package simulate a DOM environment as if you were in the browser. This means that every DOM API that we call can be observed in the same way it would be observed in a browser!"]}),"\n",(0,a.jsxs)(t.p,{children:["To get started with the JSDOM ",(0,a.jsx)(t.a,{href:"/uk/docs/next/configuration#testenvironment-string",children:"test environment"}),", the ",(0,a.jsx)(t.code,{children:"jest-environment-jsdom"})," package must be installed if it's not already:"]}),"\n",(0,a.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest-environment-jsdom\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add --dev jest-environment-jsdom\n"})})}),(0,a.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-dev jest-environment-jsdom\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["The code for this example is available at ",(0,a.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/jquery",children:"examples/jquery"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},97265:(e,t,n)=>{n.d(t,{A:()=>o});n(63696);var r=n(11750);const a={tabItem:"tabItem_wHwb"};var s=n(62540);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},65457:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(63696),a=n(11750),s=n(93707),o=n(49519),l=n(83604),i=n(95196),u=n(76229),c=n(88030);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),j=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(95200);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var v=n(62540);function g(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},43023:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(63696);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);