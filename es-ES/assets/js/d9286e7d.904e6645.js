"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[38462],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(25773),a=(n(27378),n(35318));const s={id:"tutorial-jquery",title:"DOM Manipulation"},o=void 0,i={unversionedId:"tutorial-jquery",id:"version-27.x/tutorial-jquery",title:"DOM Manipulation",description:"Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let's see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span.",source:"@site/versioned_docs/version-27.x/TutorialjQuery.md",sourceDirName:".",slug:"/tutorial-jquery",permalink:"/jest/es-ES/docs/27.x/tutorial-jquery",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"27.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680744104,formattedLastUpdatedAt:"6 abr 2023",frontMatter:{id:"tutorial-jquery",title:"DOM Manipulation"},sidebar:"docs",previous:{title:"Using with DynamoDB",permalink:"/jest/es-ES/docs/27.x/dynamodb"},next:{title:"Watch Plugins",permalink:"/jest/es-ES/docs/27.x/watch-plugins"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let's see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="displayUser.js"',title:'"displayUser.js"'},"'use strict';\n\nconst $ = require('jquery');\nconst fetchCurrentUser = require('./fetchCurrentUser.js');\n\n$('#button').click(() => {\n  fetchCurrentUser(user => {\n    const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');\n    $('#username').text(user.fullName + ' - ' + loggedText);\n  });\n});\n")),(0,a.kt)("p",null,"Again, we create a test file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"__tests__/")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/displayUser-test.js"',title:'"__tests__/displayUser-test.js"'},"'use strict';\n\njest.mock('../fetchCurrentUser');\n\ntest('displays a user after a click', () => {\n  // Set up our document body\n  document.body.innerHTML =\n    '<div>' +\n    '  <span id=\"username\" />' +\n    '  <button id=\"button\" />' +\n    '</div>';\n\n  // This module has a side-effect\n  require('../displayUser');\n\n  const $ = require('jquery');\n  const fetchCurrentUser = require('../fetchCurrentUser');\n\n  // Tell the fetchCurrentUser mock function to automatically invoke\n  // its callback with some data\n  fetchCurrentUser.mockImplementation(cb => {\n    cb({\n      fullName: 'Johnny Cash',\n      loggedIn: true,\n    });\n  });\n\n  // Use jquery to emulate a click on our button\n  $('#button').click();\n\n  // Assert that the fetchCurrentUser function was called, and that the\n  // #username span's inner text was updated as we'd expect it to.\n  expect(fetchCurrentUser).toBeCalled();\n  expect($('#username').text()).toBe('Johnny Cash - Logged In');\n});\n")),(0,a.kt)("p",null,"The function being tested adds an event listener on the ",(0,a.kt)("inlineCode",{parentName:"p"},"#button")," DOM element, so we need to set up our DOM correctly for the test. Jest ships with ",(0,a.kt)("inlineCode",{parentName:"p"},"jsdom")," which simulates a DOM environment as if you were in the browser. This means that every DOM API that we call can be observed in the same way it would be observed in a browser!"),(0,a.kt)("p",null,"We are mocking ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchCurrentUser.js")," so that our test doesn't make a real network request but instead resolves to mock data locally. This ensures that our test can complete in milliseconds rather than seconds and guarantees a fast unit test iteration speed."),(0,a.kt)("p",null,"The code for this example is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/jquery"},"examples/jquery"),"."))}p.isMDXComponent=!0}}]);