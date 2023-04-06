"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[44249],{35318:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var s=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=s.createContext({}),l=function(e){var t=s.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,m=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return n?s.createElement(m,i(i({ref:t},h),{},{components:n})):s.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:a,i[1]=r;for(var l=2;l<o;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(25773),a=(n(27378),n(35318));const o={id:"snapshot-testing",title:"Snapshot Testing"},i=void 0,r={unversionedId:"snapshot-testing",id:"version-28.x/snapshot-testing",title:"Snapshot Testing",description:"Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.",source:"@site/versioned_docs/version-28.x/SnapshotTesting.md",sourceDirName:".",slug:"/snapshot-testing",permalink:"/jest/uk/docs/28.x/snapshot-testing",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"28.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680744104,formattedLastUpdatedAt:"6 \u043a\u0432\u0456\u0442. 2023 \u0440.",frontMatter:{id:"snapshot-testing",title:"Snapshot Testing"},sidebar:"docs",previous:{title:"More Resources",permalink:"/jest/uk/docs/28.x/more-resources"},next:{title:"An Async Example",permalink:"/jest/uk/docs/28.x/tutorial-async"}},p={},l=[{value:"Snapshot Testing with Jest",id:"snapshot-testing-with-jest",level:2},{value:"Updating Snapshots",id:"updating-snapshots",level:3},{value:"Interactive Snapshot Mode",id:"interactive-snapshot-mode",level:3},{value:"Inline Snapshots",id:"inline-snapshots",level:3},{value:"Property Matchers",id:"property-matchers",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Treat snapshots as code",id:"1-treat-snapshots-as-code",level:3},{value:"2. Tests should be deterministic",id:"2-tests-should-be-deterministic",level:3},{value:"3. Use descriptive snapshot names",id:"3-use-descriptive-snapshot-names",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Are snapshots written automatically on Continuous Integration (CI) systems?",id:"are-snapshots-written-automatically-on-continuous-integration-ci-systems",level:3},{value:"Should snapshot files be committed?",id:"should-snapshot-files-be-committed",level:3},{value:"Does snapshot testing only work with React components?",id:"does-snapshot-testing-only-work-with-react-components",level:3},{value:"What&#39;s the difference between snapshot testing and visual regression testing?",id:"whats-the-difference-between-snapshot-testing-and-visual-regression-testing",level:3},{value:"Does snapshot testing replace unit testing?",id:"does-snapshot-testing-replace-unit-testing",level:3},{value:"What is the performance of snapshot testing regarding speed and size of the generated files?",id:"what-is-the-performance-of-snapshot-testing-regarding-speed-and-size-of-the-generated-files",level:3},{value:"How do I resolve conflicts within snapshot files?",id:"how-do-i-resolve-conflicts-within-snapshot-files",level:3},{value:"Is it possible to apply test-driven development principles with snapshot testing?",id:"is-it-possible-to-apply-test-driven-development-principles-with-snapshot-testing",level:3},{value:"Does code coverage work with snapshot testing?",id:"does-code-coverage-work-with-snapshot-testing",level:3}],h={toc:l};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,s.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly."),(0,a.kt)("p",null,"A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component."),(0,a.kt)("h2",{id:"snapshot-testing-with-jest"},"Snapshot Testing with Jest"),(0,a.kt)("p",null,"A similar approach can be taken when it comes to testing your React components. Instead of rendering the graphical UI, which would require building the entire app, you can use a test renderer to quickly generate a serializable value for your React tree. Consider this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/examples/snapshot/__tests__/link.test.js"},"example test")," for a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/examples/snapshot/Link.js"},"Link component"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.facebook.com\">Facebook</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n")),(0,a.kt)("p",null,"The first time this test is run, Jest creates a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/examples/snapshot/__tests__/__snapshots__/link.test.js.snap"},"snapshot file")," that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'exports[`renders correctly 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n')),(0,a.kt)("p",null,"The snapshot artifact should be committed alongside code changes, and reviewed as part of your code review process. Jest uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/packages/pretty-format"},"pretty-format")," to make snapshots human-readable during code review. On subsequent test runs, Jest will compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the test runner found a bug in your code (in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Link>")," component in this case) that should be fixed, or the implementation has changed and the snapshot needs to be updated."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The snapshot is directly scoped to the data you render \u2013 in our example the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Link>")," component with ",(0,a.kt)("inlineCode",{parentName:"p"},"page")," prop passed to it. This implies that even if any other file has missing props (say, ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),") in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Link>")," component, it will still pass the test as the test doesn't know the usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Link>")," component and it's scoped only to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Link.js"),". Also, rendering the same component with different props in other snapshot tests will not affect the first one, as the tests don't know about each other.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"More information on how snapshot testing works and why we built it can be found on the ",(0,a.kt)("a",{parentName:"p",href:"/blog/2016/07/27/jest-14"},"release blog post"),". We recommend reading ",(0,a.kt)("a",{parentName:"p",href:"http://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/"},"this blog post")," to get a good sense of when you should use snapshot testing. We also recommend watching this ",(0,a.kt)("a",{parentName:"p",href:"https://egghead.io/lessons/javascript-use-jest-s-snapshot-testing-feature?pl=testing-javascript-with-jest-a36c4074"},"egghead video")," on Snapshot Testing with Jest.")),(0,a.kt)("h3",{id:"updating-snapshots"},"Updating Snapshots"),(0,a.kt)("p",null,"It's straightforward to spot when a snapshot test fails after a bug has been introduced. When that happens, go ahead and fix the issue and make sure your snapshot tests are passing again. Now, let's talk about the case when a snapshot test is failing due to an intentional implementation change."),(0,a.kt)("p",null,"One such situation can arise if we intentionally change the address the Link component in our example is pointing to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// Updated test case with a Link to a different address\nit('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.instagram.com\">Instagram</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n")),(0,a.kt)("p",null,"In that case, Jest will print this output:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50029).Z,width:"1844",height:"1246"})),(0,a.kt)("p",null,"Since we just updated our component to point to a different address, it's reasonable to expect changes in the snapshot for this component. Our snapshot test case is failing because the snapshot for our updated component no longer matches the snapshot artifact for this test case."),(0,a.kt)("p",null,"To resolve this, we will need to update our snapshot artifacts. You can run Jest with a flag that will tell it to re-generate snapshots:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jest --updateSnapshot\n")),(0,a.kt)("p",null,"Go ahead and accept the changes by running the above command. You may also use the equivalent single-character ",(0,a.kt)("inlineCode",{parentName:"p"},"-u")," flag to re-generate snapshots if you prefer. This will re-generate snapshot artifacts for all failing snapshot tests. If we had any additional failing snapshot tests due to an unintentional bug, we would need to fix the bug before re-generating snapshots to avoid recording snapshots of the buggy behavior."),(0,a.kt)("p",null,"If you'd like to limit which snapshot test cases get re-generated, you can pass an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"--testNamePattern")," flag to re-record snapshots only for those tests that match the pattern."),(0,a.kt)("p",null,"You can try out this functionality by cloning the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/snapshot"},"snapshot example"),", modifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," component, and running Jest."),(0,a.kt)("h3",{id:"interactive-snapshot-mode"},"Interactive Snapshot Mode"),(0,a.kt)("p",null,"Failed snapshots can also be updated interactively in watch mode:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(66097).Z,width:"2052",height:"1048"})),(0,a.kt)("p",null,"Once you enter Interactive Snapshot Mode, Jest will step you through the failed snapshots one test at a time and give you the opportunity to review the failed output."),(0,a.kt)("p",null,"From here you can choose to update that snapshot or skip to the next:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(82664).Z,width:"1106",height:"697"})),(0,a.kt)("p",null,"Once you're finished, Jest will give you a summary before returning back to watch mode:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(23011).Z,width:"1452",height:"400"})),(0,a.kt)("h3",{id:"inline-snapshots"},"Inline Snapshots"),(0,a.kt)("p",null,"Inline snapshots behave identically to external snapshots (",(0,a.kt)("inlineCode",{parentName:"p"},".snap")," files), except the snapshot values are written automatically back into the source code. This means you can get the benefits of automatically generated snapshots without having to switch to an external file to make sure the correct value was written."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,"First, you write a test, calling ",(0,a.kt)("inlineCode",{parentName:"p"},".toMatchInlineSnapshot()")," with no arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"it('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"https://example.com\">Example Site</Link>)\n    .toJSON();\n  expect(tree).toMatchInlineSnapshot();\n});\n")),(0,a.kt)("p",null,"The next time you run Jest, ",(0,a.kt)("inlineCode",{parentName:"p"},"tree")," will be evaluated, and a snapshot will be written as an argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"toMatchInlineSnapshot"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'it(\'renders correctly\', () => {\n  const tree = renderer\n    .create(<Link page="https://example.com">Example Site</Link>)\n    .toJSON();\n  expect(tree).toMatchInlineSnapshot(`\n<a\n  className="normal"\n  href="https://example.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Example Site\n</a>\n`);\n});\n')),(0,a.kt)("p",null,"That's all there is to it! You can even update the snapshots with ",(0,a.kt)("inlineCode",{parentName:"p"},"--updateSnapshot")," or using the ",(0,a.kt)("inlineCode",{parentName:"p"},"u")," key in ",(0,a.kt)("inlineCode",{parentName:"p"},"--watch")," mode."),(0,a.kt)("p",null,"By default, Jest handles the writing of snapshots into your source code. However, if you're using ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/prettier"},"prettier")," in your project, Jest will detect this and delegate the work to prettier instead (including honoring your configuration)."),(0,a.kt)("h3",{id:"property-matchers"},"Property Matchers"),(0,a.kt)("p",null,"Often there are fields in the object you want to snapshot which are generated (like IDs and Dates). If you try to snapshot these objects, they will force the snapshot to fail on every run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'it(\'will fail every time\', () => {\n  const user = {\n    createdAt: new Date(),\n    id: Math.floor(Math.random() * 20),\n    name: \'LeBron James\',\n  };\n\n  expect(user).toMatchSnapshot();\n});\n\n// Snapshot\nexports[`will fail every time 1`] = `\nObject {\n  "createdAt": 2018-05-19T23:36:09.816Z,\n  "id": 3,\n  "name": "LeBron James",\n}\n`;\n')),(0,a.kt)("p",null,"For these cases, Jest allows providing an asymmetric matcher for any property. These matchers are checked before the snapshot is written or tested, and then saved to the snapshot file instead of the received value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'it(\'will check the matchers and pass\', () => {\n  const user = {\n    createdAt: new Date(),\n    id: Math.floor(Math.random() * 20),\n    name: \'LeBron James\',\n  };\n\n  expect(user).toMatchSnapshot({\n    createdAt: expect.any(Date),\n    id: expect.any(Number),\n  });\n});\n\n// Snapshot\nexports[`will check the matchers and pass 1`] = `\nObject {\n  "createdAt": Any<Date>,\n  "id": Any<Number>,\n  "name": "LeBron James",\n}\n`;\n')),(0,a.kt)("p",null,"Any given value that is not a matcher will be checked exactly and saved to the snapshot:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"it('will check the values and pass', () => {\n  const user = {\n    createdAt: new Date(),\n    name: 'Bond... James Bond',\n  };\n\n  expect(user).toMatchSnapshot({\n    createdAt: expect.any(Date),\n    name: 'Bond... James Bond',\n  });\n});\n\n// Snapshot\nexports[`will check the values and pass 1`] = `\nObject {\n  \"createdAt\": Any<Date>,\n  \"name\": 'Bond... James Bond',\n}\n`;\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the case concerns a string not an object then you need to replace random part of that string on your own before testing the snapshot.",(0,a.kt)("br",{parentName:"p"}),"\n","You can use for that e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"},(0,a.kt)("inlineCode",{parentName:"a"},"replace()"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expressions"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const randomNumber = Math.round(Math.random() * 100);\nconst stringWithRandomData = `<div id="${randomNumber}">Lorem ipsum</div>`;\nconst stringWithConstantData = stringWithRandomData.replace(/id="\\d+"/, 123);\nexpect(stringWithConstantData).toMatchSnapshot();\n')),(0,a.kt)("p",{parentName:"admonition"},"Another way is to ",(0,a.kt)("a",{parentName:"p",href:"/jest/uk/docs/28.x/mock-functions"},"mock")," the library responsible for generating the random part of the code you're snapshotting.")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("p",null,"Snapshots are a fantastic tool for identifying unexpected interface changes within your application \u2013 whether that interface is an API response, UI, logs, or error messages. As with any testing strategy, there are some best-practices you should be aware of, and guidelines you should follow, in order to use them effectively."),(0,a.kt)("h3",{id:"1-treat-snapshots-as-code"},"1. Treat snapshots as code"),(0,a.kt)("p",null,"Commit snapshots and review them as part of your regular code review process. This means treating snapshots as you would any other type of test or code in your project."),(0,a.kt)("p",null,"Ensure that your snapshots are readable by keeping them focused, short, and by using tools that enforce these stylistic conventions."),(0,a.kt)("p",null,"As mentioned previously, Jest uses ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/package/pretty-format"},(0,a.kt)("inlineCode",{parentName:"a"},"pretty-format"))," to make snapshots human-readable, but you may find it useful to introduce additional tools, like ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/package/eslint-plugin-jest"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint-plugin-jest"))," with its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md"},(0,a.kt)("inlineCode",{parentName:"a"},"no-large-snapshots"))," option, or ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/package/snapshot-diff"},(0,a.kt)("inlineCode",{parentName:"a"},"snapshot-diff"))," with its component snapshot comparison feature, to promote committing short, focused assertions."),(0,a.kt)("p",null,"The goal is to make it easy to review snapshots in pull requests, and fight against the habit of regenerating snapshots when test suites fail instead of examining the root causes of their failure."),(0,a.kt)("h3",{id:"2-tests-should-be-deterministic"},"2. Tests should be deterministic"),(0,a.kt)("p",null,"Your tests should be deterministic. Running the same tests multiple times on a component that has not changed should produce the same results every time. You're responsible for making sure your generated snapshots do not include platform specific or other non-deterministic data."),(0,a.kt)("p",null,"For example, if you have a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/examples/snapshot/Clock.js"},"Clock")," component that uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Date.now()"),", the snapshot generated from this component will be different every time the test case is run. In this case we can ",(0,a.kt)("a",{parentName:"p",href:"/jest/uk/docs/28.x/mock-functions"},"mock the Date.now() method")," to return a consistent value every time the test is run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Date.now = jest.fn(() => 1482363367071);\n")),(0,a.kt)("p",null,"Now, every time the snapshot test case runs, ",(0,a.kt)("inlineCode",{parentName:"p"},"Date.now()")," will return ",(0,a.kt)("inlineCode",{parentName:"p"},"1482363367071")," consistently. This will result in the same snapshot being generated for this component regardless of when the test is run."),(0,a.kt)("h3",{id:"3-use-descriptive-snapshot-names"},"3. Use descriptive snapshot names"),(0,a.kt)("p",null,"Always strive to use descriptive test and/or snapshot names for snapshots. The best names describe the expected snapshot content. This makes it easier for reviewers to verify the snapshots during review, and for anyone to know whether or not an outdated snapshot is the correct behavior before updating."),(0,a.kt)("p",null,"For example, compare:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exports[`<UserName /> should handle some test case`] = `null`;\n\nexports[`<UserName /> should handle some other test case`] = `\n<div>\n  Alan Turing\n</div>\n`;\n")),(0,a.kt)("p",null,"To:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exports[`<UserName /> should render null`] = `null`;\n\nexports[`<UserName /> should render Alan Turing`] = `\n<div>\n  Alan Turing\n</div>\n`;\n")),(0,a.kt)("p",null,"Since the latter describes exactly what's expected in the output, it's more clear to see when it's wrong:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exports[`<UserName /> should render null`] = `\n<div>\n  Alan Turing\n</div>\n`;\n\nexports[`<UserName /> should render Alan Turing`] = `null`;\n")),(0,a.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h3",{id:"are-snapshots-written-automatically-on-continuous-integration-ci-systems"},"Are snapshots written automatically on Continuous Integration (CI) systems?"),(0,a.kt)("p",null,"No, as of Jest 20, snapshots in Jest are not automatically written when Jest is run in a CI system without explicitly passing ",(0,a.kt)("inlineCode",{parentName:"p"},"--updateSnapshot"),". It is expected that all snapshots are part of the code that is run on CI and since new snapshots automatically pass, they should not pass a test run on a CI system. It is recommended to always commit all snapshots and to keep them in version control."),(0,a.kt)("h3",{id:"should-snapshot-files-be-committed"},"Should snapshot files be committed?"),(0,a.kt)("p",null,"Yes, all snapshot files should be committed alongside the modules they are covering and their tests. They should be considered part of a test, similar to the value of any other assertion in Jest. In fact, snapshots represent the state of the source modules at any given point in time. In this way, when the source modules are modified, Jest can tell what changed from the previous version. It can also provide a lot of additional context during code review in which reviewers can study your changes better."),(0,a.kt)("h3",{id:"does-snapshot-testing-only-work-with-react-components"},"Does snapshot testing only work with React components?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/jest/uk/docs/28.x/tutorial-react"},"React")," and ",(0,a.kt)("a",{parentName:"p",href:"/jest/uk/docs/28.x/tutorial-react-native"},"React Native")," components are a good use case for snapshot testing. However, snapshots can capture any serializable value and should be used anytime the goal is testing whether the output is correct. The Jest repository contains many examples of testing the output of Jest itself, the output of Jest's assertion library as well as log messages from various parts of the Jest codebase. See an example of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/blob/main/e2e/__tests__/console.test.ts"},"snapshotting CLI output")," in the Jest repo."),(0,a.kt)("h3",{id:"whats-the-difference-between-snapshot-testing-and-visual-regression-testing"},"What's the difference between snapshot testing and visual regression testing?"),(0,a.kt)("p",null,"Snapshot testing and visual regression testing are two distinct ways of testing UIs, and they serve different purposes. Visual regression testing tools take screenshots of web pages and compare the resulting images pixel by pixel. With Snapshot testing values are serialized, stored within text files, and compared using a diff algorithm. There are different trade-offs to consider and we listed the reasons why snapshot testing was built in the ",(0,a.kt)("a",{parentName:"p",href:"/blog/2016/07/27/jest-14#why-snapshot-testing"},"Jest blog"),"."),(0,a.kt)("h3",{id:"does-snapshot-testing-replace-unit-testing"},"Does snapshot testing replace unit testing?"),(0,a.kt)("p",null,"Snapshot testing is only one of more than 20 assertions that ship with Jest. The aim of snapshot testing is not to replace existing unit tests, but to provide additional value and make testing painless. In some scenarios, snapshot testing can potentially remove the need for unit testing for a particular set of functionalities (e.g. React components), but they can work together as well."),(0,a.kt)("h3",{id:"what-is-the-performance-of-snapshot-testing-regarding-speed-and-size-of-the-generated-files"},"What is the performance of snapshot testing regarding speed and size of the generated files?"),(0,a.kt)("p",null,"Jest has been rewritten with performance in mind, and snapshot testing is not an exception. Since snapshots are stored within text files, this way of testing is fast and reliable. Jest generates a new file for each test file that invokes the ",(0,a.kt)("inlineCode",{parentName:"p"},"toMatchSnapshot")," matcher. The size of the snapshots is pretty small: For reference, the size of all snapshot files in the Jest codebase itself is less than 300 KB."),(0,a.kt)("h3",{id:"how-do-i-resolve-conflicts-within-snapshot-files"},"How do I resolve conflicts within snapshot files?"),(0,a.kt)("p",null,"Snapshot files must always represent the current state of the modules they are covering. Therefore, if you are merging two branches and encounter a conflict in the snapshot files, you can either resolve the conflict manually or update the snapshot file by running Jest and inspecting the result."),(0,a.kt)("h3",{id:"is-it-possible-to-apply-test-driven-development-principles-with-snapshot-testing"},"Is it possible to apply test-driven development principles with snapshot testing?"),(0,a.kt)("p",null,"Although it is possible to write snapshot files manually, that is usually not approachable. Snapshots help to figure out whether the output of the modules covered by tests is changed, rather than giving guidance to design the code in the first place."),(0,a.kt)("h3",{id:"does-code-coverage-work-with-snapshot-testing"},"Does code coverage work with snapshot testing?"),(0,a.kt)("p",null,"Yes, as well as with any other test."))}c.isMDXComponent=!0},50029:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/failedSnapshotTest-754bd8c54c17338fe046c6273fd3f9d1.png"},66097:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/interactiveSnapshot-58ae38e9cae13140c56d8472453f0595.png"},23011:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/interactiveSnapshotDone-59ee291ee320accbc4bfc4f33b22638a.png"},82664:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/interactiveSnapshotUpdate-a17d8d77f94702048b4d0e0e4c580719.gif"}}]);