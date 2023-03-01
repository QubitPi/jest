"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5438],{35318:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,d=c["".concat(p,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(d,o(o({ref:t},h),{},{components:n})):a.createElement(d,o({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(25773),r=(n(27378),n(35318));const s={title:"Jest 14.0: React Tree Snapshot Testing",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},o=void 0,i={permalink:"/jest/ro/blog/2016/07/27/jest-14",editUrl:"https://github.com/facebook/jest/tree/main/website/blog/2016-07-27-jest-14.md",source:"@site/blog/2016-07-27-jest-14.md",title:"Jest 14.0: React Tree Snapshot Testing",description:"One of Jest's philosophies is to provide an integrated \u201czero-configuration\u201d experience. We want to make it as frictionless as possible to write good tests that are useful. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in stable and healthy code bases.",date:"2016-07-27T00:00:00.000Z",formattedDate:"27 iulie 2016",tags:[],readingTime:5.355,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 14.0: React Tree Snapshot Testing",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},prevItem:{title:"Jest 15.0: New Defaults for Jest",permalink:"/jest/ro/blog/2016/09/01/jest-15"},nextItem:{title:"Jest 13.0: Flow & REPL",permalink:"/jest/ro/blog/2016/06/22/jest-13"}},p={authorsImageUrls:[void 0]},l=[{value:"Experimental React Native support",id:"experimental-react-native-support",level:2},{value:"Why snapshot testing?",id:"why-snapshot-testing",level:2},{value:"What&#39;s next for Jest",id:"whats-next-for-jest",level:2}],h={toc:l};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of Jest's philosophies is to provide an integrated \u201czero-configuration\u201d experience. We want to make it as frictionless as possible to write good tests that are useful. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in stable and healthy code bases."),(0,r.kt)("p",null,"One of the big open questions was how to write React tests efficiently. There are plenty of tools such as ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/test-utils.html"},"ReactTestUtils")," and ",(0,r.kt)("a",{parentName:"p",href:"https://enzymejs.github.io/enzyme/"},"enzyme"),". Both of these tools are great and are actively being used. However engineers frequently told us that they spend more time writing a test than the component itself. As a result many people stopped writing tests altogether which eventually led to instabilities. Engineers told us all they wanted was to make sure their components don't change unexpectedly."),(0,r.kt)("p",null,"Together with the React team we created a new test renderer for React and added snapshot testing to Jest. Consider this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/examples/snapshot/__tests__/link.test.js"},"example test")," for a simple ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/examples/snapshot/Link.js"},"Link component"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import renderer from 'react-test-renderer';\ntest('Link renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.facebook.com\">Facebook</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n")),(0,r.kt)("p",null,"The first time this test is run, Jest creates a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/examples/snapshot/__tests__/__snapshots__/link.test.js.snap"},"snapshot file")," that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'exports[`Link renders correctly 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function bound _onMouseEnter]}\n  onMouseLeave={[Function bound _onMouseLeave]}>\n  Facebook\n</a>\n`;\n')),(0,r.kt)("p",null,"The snapshot artifact should be committed alongside code changes. We use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thejameskyle/pretty-format"},"pretty-format")," to make snapshots human-readable during code review. On subsequent test runs Jest will simply compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the implementation has changed and the snapshot needs to be updated with ",(0,r.kt)("inlineCode",{parentName:"p"},"jest -u"),", or the test runner found a bug in your code that should be fixed."),(0,r.kt)("p",null,"If we change the address the Link component in our example is pointing to, Jest will print this output:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapshot-testing",src:n(50818).Z,width:"1450",height:"546"})),(0,r.kt)("p",null,"Now you know that you either need to accept the changes with ",(0,r.kt)("inlineCode",{parentName:"p"},"jest -u"),", or fix the component if the changes were unintentional. To try out this functionality, please clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/snapshot"},"snapshot example"),", modify the Link component and run Jest. We updated the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial-react"},"React Tutorial")," with a new guide for snapshot testing."),(0,r.kt)("p",null,"This feature was built by ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/soprano"},"Ben Alpert")," and ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/kentaromiura"},"Cristian Carlesso"),"."),(0,r.kt)("h2",{id:"experimental-react-native-support"},"Experimental React Native support"),(0,r.kt)("p",null,"By building a test renderer that targets no specific platform we are finally able to support a full, unmocked version of React Native. We are excited to launch experimental React Native support for Jest through the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-react-native")," package."),(0,r.kt)("p",null,"You can start using Jest with react-native by running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add --dev jest-react-native")," and by adding the preset to your Jest configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"jest": {\n  "preset": "jest-react-native"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorial-react-native#content"},"Tutorial and setup guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/tree/main/examples/react-native"},"Example project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bartonhammond/snowflake/pull/110"},"Example pull request for ",(0,r.kt)("em",{parentName:"a"},"snowflake")),", a popular react-native open source library.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The preset currently only implements the minimal set of configuration necessary to get started with React Native testing. We are hoping for community contributions to improve this project. Please try it and file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues"},"issues")," or send pull requests!")),(0,r.kt)("h2",{id:"why-snapshot-testing"},"Why snapshot testing?"),(0,r.kt)("p",null,"For Facebook's native apps we use a system called \u201csnapshot testing\u201d: a snapshot test system that renders UI components, takes a screenshot and subsequently compares a recorded screenshot with changes made by an engineer. If the screenshots don't match, there are two possibilities: either the change is unexpected or the screenshot can be updated to the new version of the UI component."),(0,r.kt)("p",null,"While this was the solution we wanted for the web, we also found many problems with such end-to-end tests that snapshot integration tests solve:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No flakiness:")," Because tests are run in a command line runner instead of a real browser or on a real phone, the test runner doesn't have to wait for builds, spawn browsers, load a page and drive the UI to get a component into the expected state which tends to be flaky and the test results become noisy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fast iteration speed:")," Engineers want to get results in less than a second rather than waiting for minutes or even hours. If tests don't run quickly like in most end-to-end frameworks, engineers don't run them at all or don't bother writing them in the first place."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Debugging:")," It's easy to step into the code of an integration test in JS instead of trying to recreate the screenshot test scenario and debugging what happened in the visual diff.")),(0,r.kt)("p",null,"Because we believe snapshot testing can be useful beyond Jest we split the feature into a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/packages/jest-snapshot"},"jest-snapshot")," package. We are happy to work with the community to make it more generic so it can be integrated with other test runners and share concepts and infrastructure with each other."),(0,r.kt)("p",null,"Finally, here is a quote of a Facebook engineer describing how snapshot testing changed his unit testing experience:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201cOne of the most challenging aspects of my project was keeping the input and output files for each test case in sync. Each little change in functionality could cause all the output files to change. With snapshot testing I do not need the output files, the snapshots are generated for free by Jest! I can simply inspect how Jest updates the snapshots rather than making the changes manually.\u201d \u2013 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kyldvs"},"Kyle Davis")," working on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kyldvs/fjs"},"fjs"),".")),(0,r.kt)("h2",{id:"whats-next-for-jest"},"What's next for Jest"),(0,r.kt)("p",null,"Recently ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/aarondjents"},"Aaron Abramov")," has joined the Jest team full time to improve our unit and integration test infrastructure for Facebook's ads products. For the next few months the Jest team is planning major improvements in these areas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Replace Jasmine:")," Jasmine is slowing us down and is not being very actively developed. We started replacing all the Jasmine matchers and are excited to add new features and drop this dependency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code Coverage:")," When Jest was originally created, tools such as babel didn't exist. Our code coverage support has a bunch of edge cases and isn't always working properly. We are rewriting it to address all the current problems with coverage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer Experience:")," This ranges from improving the setup process, the debugging experience to CLI improvements and more documentation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mocking:")," The mocking system, especially around manual mocks, is not working well and is confusing. We hope to make it more strict and easier to understand."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance:")," Further performance improvements especially for really large codebases are being worked on.")),(0,r.kt)("p",null,"As always, if you have questions or if you are excited to help out, please reach out to us!"))}c.isMDXComponent=!0},50818:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snapshot-8de6b9bafc9754f21e3c61604fc0623c.png"}}]);