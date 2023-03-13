"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[46454],{35318:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return o?a.createElement(m,i(i({ref:t},d),{},{components:o})):a.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},89302:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(25773),n=(o(27378),o(35318));const r={title:"Jest 13.0: Flow & REPL",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},i=void 0,s={permalink:"/jest/uk/blog/2016/06/22/jest-13",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2016-06-22-jest-13.md",source:"@site/blog/2016-06-22-jest-13.md",title:"Jest 13.0: Flow & REPL",description:"Today we are happy to announce the next major release of Jest. We have made major changes to Jest which are going to benefit you and all of Facebook's JavaScript test infrastructure. Most importantly, we added static types to all of Jest's code during a recent Jest hackathon at Facebook. Fifteen people worked for a day and night to add Flow types to Jest and to add new features to Jest. The Flow types serve two purposes: First, we believe that code is written to be read. Most of the time, code is written only once but read by dozens of people over the course of years. Adding static types to the project helps document the code and helps explain some of the architecture in Jest. Second, adding static types makes maintenance easier and will allow us to more confidently refactor parts of Jest without fear of breakages.",date:"2016-06-22T00:00:00.000Z",formattedDate:"22 \u0447\u0435\u0440\u0432\u043d\u044f 2016\u202f\u0440.",tags:[],readingTime:2.565,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 13.0: Flow & REPL",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest 14.0: React Tree Snapshot Testing",permalink:"/jest/uk/blog/2016/07/27/jest-14"},nextItem:{title:"Jest 11.0",permalink:"/jest/uk/blog/2016/04/12/jest-11"}},l={authorsImageUrls:[void 0]},p=[{value:"New and improved features",id:"new-and-improved-features",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Today we are happy to announce the next major release of Jest. We have made major changes to Jest which are going to benefit you and all of Facebook's JavaScript test infrastructure. Most importantly, we added static types to all of Jest's code during a recent Jest hackathon at Facebook. Fifteen people worked for a day and night to add ",(0,n.kt)("a",{parentName:"p",href:"https://flowtype.org/"},"Flow")," types to Jest and to add new features to Jest. The Flow types serve two purposes: First, we believe that code is written to be read. Most of the time, code is written only once but read by dozens of people over the course of years. Adding static types to the project helps document the code and helps explain some of the architecture in Jest. Second, adding static types makes maintenance easier and will allow us to more confidently refactor parts of Jest without fear of breakages."),(0,n.kt)("p",null,"The Flow project has evolved a lot within Facebook and has been successfully adopted across many of our frameworks and almost all of our product code. Adoption can be parallelized incredibly well \u2013 it can be done file-by-file until enough of the codebase is well-typed. Then, Flow provides real value and helps guide through large changes. Through this, many small edge cases and bugs were found."),(0,n.kt)("p",null,"With the help of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"lerna"),", we continued to modularize the Jest project. With just a small ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna#lernajson"},"update to the configuration"),", Flow and lerna now get along well with each other. Splitting up Jest into packages helped us rethink module boundaries and enabled us to ship useful ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/packages"},"packages")," standalone: The ",(0,n.kt)("inlineCode",{parentName:"p"},"jest-runtime")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"jest-repl")," cli tools now allow you to run scripts in a sandboxed Jest environment, enabling you to run and debug your app from the command line. This is especially helpful for projects that use Facebook's ",(0,n.kt)("inlineCode",{parentName:"p"},"@providesModule")," module convention. To get started, just install ",(0,n.kt)("inlineCode",{parentName:"p"},"jest-repl")," and run it in the same folder you normally run your tests in! We also published a ",(0,n.kt)("inlineCode",{parentName:"p"},"jest-changed-files")," package that finds changed files in version control for either git or hg, a common thing in developer tools."),(0,n.kt)("h2",{id:"new-and-improved-features"},"New and improved features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a notification plugin that shows a test run notification when using ",(0,n.kt)("inlineCode",{parentName:"li"},"--notify"),"."),(0,n.kt)("li",{parentName:"ul"},"Added a ",(0,n.kt)("inlineCode",{parentName:"li"},"browser")," config option to properly resolve npm packages with a browser field in ",(0,n.kt)("inlineCode",{parentName:"li"},"package.json")," if you are writing tests for client side apps."),(0,n.kt)("li",{parentName:"ul"},"Improved \u201cno tests found message\u201d which will now report which tests were found and how they were filtered."),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("inlineCode",{parentName:"li"},"jest.isMockFunction(jest.fn())")," to test for mock functions."),(0,n.kt)("li",{parentName:"ul"},"Improved test reporter printing and added a test failure summary when running many tests."),(0,n.kt)("li",{parentName:"ul"},"Added support for mocking virtual modules through ",(0,n.kt)("inlineCode",{parentName:"li"},"jest.mock('Module', implementation, {virtual: true})"),"."),(0,n.kt)("li",{parentName:"ul"},"Removed the ",(0,n.kt)("inlineCode",{parentName:"li"},".haste_cache")," folder. Jest now uses the operating system's preferred temporary file location."),(0,n.kt)("li",{parentName:"ul"},"Added the duration of individual tests in verbose mode."),(0,n.kt)("li",{parentName:"ul"},"Added the ability to record snapshots in Jest. We'll be publishing a separate blog post about this feature soon.")),(0,n.kt)("p",null,"Finally, we have received a complete website redesign done by Matthew Johnston and added documentation for using ",(0,n.kt)("a",{parentName:"p",href:"/docs/webpack"},"Jest with webpack"),". Happy Jesting!"))}c.isMDXComponent=!0}}]);