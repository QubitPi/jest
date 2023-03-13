"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[86291],{35318:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(s,".").concat(m)]||u[m]||h[m]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},94005:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(25773),r=(o(27378),o(35318));const a={title:"Supporting Jest Open Source",author:"Rick Hanlon II",authorURL:"https://twitter.com/rickhanlonii",authorFBID:160800566},i=void 0,l={permalink:"/jest/ja/blog/2018/06/27/supporting-jest-open-source",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2018-06-27-supporting-jest-open-source.md",source:"@site/blog/2018-06-27-supporting-jest-open-source.md",title:"Supporting Jest Open Source",description:"Jest is maintained by a community of open source contributors and Facebook employees.",date:"2018-06-27T00:00:00.000Z",formattedDate:"2018\u5e746\u670827\u65e5",tags:[],readingTime:2.74,hasTruncateMarker:!0,authors:[{name:"Rick Hanlon II",url:"https://twitter.com/rickhanlonii"}],frontMatter:{title:"Supporting Jest Open Source",author:"Rick Hanlon II",authorURL:"https://twitter.com/rickhanlonii",authorFBID:160800566},prevItem:{title:"Jest 24: \ud83d\udc85 Refreshing, Polished, TypeScript-friendly",permalink:"/jest/ja/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly"},nextItem:{title:"Jest 23: \ud83d\udd25 Blazing Fast Delightful Testing",permalink:"/jest/ja/blog/2018/05/29/jest-23-blazing-fast-delightful-testing"}},s={authorsImageUrls:[void 0]},c=[{value:"The Jest Open Collective",id:"the-jest-open-collective",level:2},{value:"What is the Jest Open Collective",id:"what-is-the-jest-open-collective",level:3},{value:"What is the structure of the collective",id:"what-is-the-structure-of-the-collective",level:3},{value:"Backers",id:"backers",level:4},{value:"Sponsors",id:"sponsors",level:4},{value:"What is the goal of the collective",id:"what-is-the-goal-of-the-collective",level:3},{value:"Thank You",id:"thank-you",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jest is maintained by a community of open source contributors and Facebook employees."),(0,r.kt)("p",null,"Our open source contributors work on behalf of the community to create new features, fix bugs, and maintain the issue backlog. Facebook employees do the same, focused on the problems specific to Facebook's scale, and run all proposed releases on Facebook's enormous test suite before publishing."),(0,r.kt)("p",null,"All of us do our part to make testing delightful."),(0,r.kt)("p",null,"At the Jest Summit we announced the Jest Open Collective. This is our way to help support the efforts of the open source Jest community. ",(0,r.kt)("strong",{parentName:"p"},"To be absolutely clear: Facebook employees cannot benefit from the Jest Open Collective.")," The collective's sole purpose is to support the open source side of the Jest community."),(0,r.kt)("p",null,"In this post we'll outline what the Jest Open Collective is, the structure, and the goals we have."),(0,r.kt)("h2",{id:"the-jest-open-collective"},"The Jest Open Collective"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner image for Jest Open Collective",src:o(5440).Z,width:"1869",height:"800"})),(0,r.kt)("p",null,"Open Collective is a platform to manage groups of people transparently. Jest joins projects like ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/webpack"},"webpack"),", ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"Babel"),", ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/mochajs"},"Mocha"),", ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/preact"},"Preact"),", ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/vuejs"},"Vue"),", and many more in supporting the open source community through the Open Collective platform."),(0,r.kt)("h3",{id:"what-is-the-jest-open-collective"},"What is the Jest Open Collective"),(0,r.kt)("p",null,"The Jest Open Collective is a group of open source contributors who operate in full transparency to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Receive funds from backers and sponsors"),(0,r.kt)("li",{parentName:"ul"},"Approve expenses submitted by the community"),(0,r.kt)("li",{parentName:"ul"},"Give everyone visibility on the budget")),(0,r.kt)("h3",{id:"what-is-the-structure-of-the-collective"},"What is the structure of the collective"),(0,r.kt)("p",null,"The Jest Open Collective is currently managed by three non-Facebook core contributors from the open source community:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/thymikee"},"Michal Pierzchala")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/simenb"},"Simen Bekkhus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/rickhanlonii"},"Rick Hanlon"))),(0,r.kt)("p",null,"Michal has been an active Jest contributor since September 2016, Simen joined the core team in June 2017, and Rick joined in January. They're responsible for setting the budget, approving expenses, and managing admins of the collective. We have elected to keep ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/cpojer"},"Christoph Nakazawa")," as an adviser."),(0,r.kt)("p",null,"There are two levels of support for the collective: Backer and Sponsor."),(0,r.kt)("h4",{id:"backers"},"Backers"),(0,r.kt)("p",null,"Backers of the collective are individuals contributing at least \\$2/month. We'll include a list of backers on the Jest homepage, README on github/yarn/npm, and Contributors page."),(0,r.kt)("h4",{id:"sponsors"},"Sponsors"),(0,r.kt)("p",null,"Sponsors of the collective are individuals and organizations contributing at least $100/month. We'll place sponsor logos with a link to their site on the Jest homepage, README on github/yarn/npm, and Contributors page."),(0,r.kt)("h3",{id:"what-is-the-goal-of-the-collective"},"What is the goal of the collective"),(0,r.kt)("p",null,"The goal of the collective is to support the work of open source contributors to Jest in order to make testing delightful."),(0,r.kt)("p",null,"To achieve that goal, we will use the funds to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cover speaker travel expenses"),(0,r.kt)("li",{parentName:"ul"},"Host events and meetups"),(0,r.kt)("li",{parentName:"ul"},"Print and distribute swag"),(0,r.kt)("li",{parentName:"ul"},"Develop and fund a bug bounty program (TBD)")),(0,r.kt)("p",null,"This is just the beginning and we're committed to getting this right. If you have ideas on how else we can support the community, or feedback on the structure of the collective, please reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/fbjest"},"twitter"),"!"),(0,r.kt)("h2",{id:"thank-you"},"Thank You"),(0,r.kt)("p",null,"Finally, thank you to everyone who contributes to the Jest community and open source in general. We are incredibly grateful that we get the opportunity to work on improving JavaScript testing together."),(0,r.kt)("p",null,"The Jest core team would also like to make a special thank you to Facebook Open Source for driving the creation of this collective."))}u.isMDXComponent=!0},5440:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/collective-fcec198ec20af7c295dbdab660e972b5.png"}}]);