"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9093],{35318:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return o?r.createElement(m,s(s({ref:t},p),{},{components:o})):r.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},33709:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(25773),n=(o(27378),o(35318));const a={title:"A Great Developer Experience",author:"H\xe9ctor Ramos",authorURL:"http://twitter.com/hectorramos",authorFBID:121800083},s=void 0,i={permalink:"/jest/blog/2017/01/30/a-great-developer-experience",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2017-01-30-a-great-developer-experience.md",source:"@site/blog/2017-01-30-a-great-developer-experience.md",title:"A Great Developer Experience",description:"We strongly believe that great documentation is crucial to providing a great developer experience. The docs should be clear, concise, and useful to new users and veterans alike. With that in mind, we recently took some time to overhaul the Jest website.",date:"2017-01-30T00:00:00.000Z",formattedDate:"January 30, 2017",tags:[],readingTime:2.43,hasTruncateMarker:!0,authors:[{name:"H\xe9ctor Ramos",url:"http://twitter.com/hectorramos"}],frontMatter:{title:"A Great Developer Experience",author:"H\xe9ctor Ramos",authorURL:"http://twitter.com/hectorramos",authorFBID:121800083},prevItem:{title:"\ud83c\udccf Jest 19: Immersive Watch Mode & Test Platform Improvements",permalink:"/jest/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements"},nextItem:{title:"2016 in Jest",permalink:"/jest/blog/2016/12/15/2016-in-jest"}},l={authorsImageUrls:[void 0]},c=[{value:"Improved docs",id:"improved-docs",level:2},{value:"New colors &amp; website",id:"new-colors--website",level:2},{value:"Who&#39;s using Jest?",id:"whos-using-jest",level:2},{value:"Jest in the browser",id:"jest-in-the-browser",level:2},{value:"Get involved",id:"get-involved",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We strongly believe that great documentation is crucial to providing a great developer experience. The docs should be clear, concise, and useful to new users and veterans alike. With that in mind, we recently took some time to overhaul the Jest website."),(0,n.kt)("h2",{id:"improved-docs"},"Improved docs"),(0,n.kt)("p",null,"One of the changes you'll notice upon visiting our docs is the updated sidebar. The documentation is now divided into three main areas: an introduction to Jest, detailed guides to Jest's features, and a comprehensive API reference."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Introduction")," section will guide you from installing Jest and writing your first case, to using Jest's matchers and testing async code. If you're new to Jest or need a quick refresher, these docs should get you up to speed in no time. If you've used Jest before and only need a quick reference on how it's installed, you need to go no further than the ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started")," guide."),(0,n.kt)("p",null,"Once you feel comfortable using Jest, proceed to the advanced ",(0,n.kt)("strong",{parentName:"p"},"Guides")," section. The new ",(0,n.kt)("a",{parentName:"p",href:"/docs/snapshot-testing"},"Snapshot Testing guide")," covers everything you need to know about creating and maintaining snapshot test cases."),(0,n.kt)("p",null,"Finally, we've completely overhauled our API reference docs. You can now find detailed information on all of Jest's ",(0,n.kt)("a",{parentName:"p",href:"/docs/api"},"Globals"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/expect"},"matchers"),", and ",(0,n.kt)("a",{parentName:"p",href:"/docs/cli"},"every flag")," supported by the ",(0,n.kt)("inlineCode",{parentName:"p"},"jest")," CLI."),(0,n.kt)("h2",{id:"new-colors--website"},"New colors & website"),(0,n.kt)("p",null,"The colors in the Jest logo and on the website have felt outdated to us for a while. We changed the color scheme we are using for Jest and changed the landing page significantly to be more inviting. We hope you like the new colors and showcase of Jest's strengths."),(0,n.kt)("h2",{id:"whos-using-jest"},"Who's using Jest?"),(0,n.kt)("p",null,"We have created a ",(0,n.kt)("a",{parentName:"p",href:"/"},"showcase of users")," to highlight some of the companies that are using Jest. We're thankful to all of these companies for using Jest to test their websites, mobile apps, and APIs. If you're using Jest, check out the guidelines on GitHub and send us a pull request!"),(0,n.kt)("div",{class:"productShowcaseSection"},(0,n.kt)("div",{class:"logos"},(0,n.kt)("img",{src:"/jest/img/logos/twitter.png",title:"Twitter"}),(0,n.kt)("img",{src:"/jest/img/logos/pinterest.png",title:"Pinterest"}),(0,n.kt)("img",{src:"/jest/img/logos/paypal.png",title:"PayPal"}),(0,n.kt)("img",{src:"/jest/img/logos/ibm.png",title:"IBM"}),(0,n.kt)("img",{src:"/jest/img/logos/spotify.png",title:"Spotify"}))),(0,n.kt)("h2",{id:"jest-in-the-browser"},"Jest in the browser"),(0,n.kt)("p",null,"As highlighted ",(0,n.kt)("a",{parentName:"p",href:"/blog/2016/12/15/2016-in-jest"},"last month"),", it is now possible to use Jest directly in the browser using ",(0,n.kt)("a",{parentName:"p",href:"https://repl.it/languages/jest"},"repl.it"),". If you want to try out Jest before installing it, you can easily do so below or directly from the Jest homepage. Go ahead and give it a try!"),(0,n.kt)("div",{class:"jest-repl"},(0,n.kt)("iframe",{src:"https://repl.it/@amasad/try-jest?lite=true"})),(0,n.kt)("h2",{id:"get-involved"},"Get involved"),(0,n.kt)("p",null,"This is just the start. Go ahead and take a look at the docs, and don't hesitate to send any feedback our way. If you find a mistake in the docs or you just want to let us know what needs to be documented better, please tweet at us at ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/fbjest"},"@fbjest"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues"},"open an issue on GitHub"),', or send us a PR by clicking "Edit on GitHub" at the top of the doc.'),(0,n.kt)("p",null,"We're really excited for the year ahead and can't wait to hear from you!"))}u.isMDXComponent=!0}}]);