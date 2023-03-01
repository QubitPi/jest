"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"docs":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"Getting Started","href":"/jest/es-ES/docs/next/getting-started","docId":"getting-started"},{"type":"link","label":"Using Matchers","href":"/jest/es-ES/docs/next/using-matchers","docId":"using-matchers"},{"type":"link","label":"Testing Asynchronous Code","href":"/jest/es-ES/docs/next/asynchronous","docId":"asynchronous"},{"type":"link","label":"Setup and Teardown","href":"/jest/es-ES/docs/next/setup-teardown","docId":"setup-teardown"},{"type":"link","label":"Mock Functions","href":"/jest/es-ES/docs/next/mock-functions","docId":"mock-functions"},{"type":"link","label":"Jest Platform","href":"/jest/es-ES/docs/next/jest-platform","docId":"jest-platform"},{"type":"link","label":"Jest Community","href":"/jest/es-ES/docs/next/jest-community","docId":"jest-community"},{"type":"link","label":"More Resources","href":"/jest/es-ES/docs/next/more-resources","docId":"more-resources"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Snapshot Testing","href":"/jest/es-ES/docs/next/snapshot-testing","docId":"snapshot-testing"},{"type":"link","label":"An Async Example","href":"/jest/es-ES/docs/next/tutorial-async","docId":"tutorial-async"},{"type":"link","label":"Timer Mocks","href":"/jest/es-ES/docs/next/timer-mocks","docId":"timer-mocks"},{"type":"link","label":"Manual Mocks","href":"/jest/es-ES/docs/next/manual-mocks","docId":"manual-mocks"},{"type":"link","label":"ES6 Class Mocks","href":"/jest/es-ES/docs/next/es6-class-mocks","docId":"es6-class-mocks"},{"type":"link","label":"Bypassing module mocks","href":"/jest/es-ES/docs/next/bypassing-module-mocks","docId":"bypassing-module-mocks"},{"type":"link","label":"ECMAScript Modules","href":"/jest/es-ES/docs/next/ecmascript-modules","docId":"ecmascript-modules"},{"type":"link","label":"Using with webpack","href":"/jest/es-ES/docs/next/webpack","docId":"webpack"},{"type":"link","label":"Using with puppeteer","href":"/jest/es-ES/docs/next/puppeteer","docId":"puppeteer"},{"type":"link","label":"Using with MongoDB","href":"/jest/es-ES/docs/next/mongodb","docId":"mongodb"},{"type":"link","label":"Using with DynamoDB","href":"/jest/es-ES/docs/next/dynamodb","docId":"dynamodb"},{"type":"link","label":"DOM Manipulation","href":"/jest/es-ES/docs/next/tutorial-jquery","docId":"tutorial-jquery"},{"type":"link","label":"Watch Plugins","href":"/jest/es-ES/docs/next/watch-plugins","docId":"watch-plugins"},{"type":"link","label":"Migrating to Jest","href":"/jest/es-ES/docs/next/migration-guide","docId":"migration-guide"},{"type":"link","label":"Troubleshooting","href":"/jest/es-ES/docs/next/troubleshooting","docId":"troubleshooting"},{"type":"link","label":"Architecture","href":"/jest/es-ES/docs/next/architecture","docId":"architecture"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Framework Guides","items":[{"type":"link","label":"Testing React Apps","href":"/jest/es-ES/docs/next/tutorial-react","docId":"tutorial-react"},{"type":"link","label":"Testing React Native Apps","href":"/jest/es-ES/docs/next/tutorial-react-native","docId":"tutorial-react-native"},{"type":"link","label":"Testing Web Frameworks","href":"/jest/es-ES/docs/next/testing-frameworks","docId":"testing-frameworks"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Upgrade Guides","items":[{"type":"link","label":"From v28 to v29","href":"/jest/es-ES/docs/next/upgrading-to-jest29","docId":"upgrading-to-jest29"}],"collapsed":true,"collapsible":true}],"api":[{"type":"link","label":"Globals","href":"/jest/es-ES/docs/next/api","docId":"api"},{"type":"link","label":"Expect","href":"/jest/es-ES/docs/next/expect","docId":"expect"},{"type":"link","label":"Mock Functions","href":"/jest/es-ES/docs/next/mock-function-api","docId":"mock-function-api"},{"type":"link","label":"The Jest Object","href":"/jest/es-ES/docs/next/jest-object","docId":"jest-object"},{"type":"link","label":"Configuring Jest","href":"/jest/es-ES/docs/next/configuration","docId":"configuration"},{"type":"link","label":"Jest CLI Options","href":"/jest/es-ES/docs/next/cli","docId":"cli"},{"type":"link","label":"Environment Variables","href":"/jest/es-ES/docs/next/environment-variables","docId":"environment-variables"},{"type":"link","label":"Code Transformation","href":"/jest/es-ES/docs/next/code-transformation","docId":"code-transformation"}]},"docs":{"api":{"id":"api","title":"Globals","description":"In your test files, Jest puts each of these methods and objects into the global environment. You don\'t have to require or import anything to use them. However, if you prefer explicit imports, you can do import {describe, expect, test} from \'@jest/globals\'.","sidebar":"api"},"architecture":{"id":"architecture","title":"Architecture","description":"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:","sidebar":"docs"},"asynchronous":{"id":"asynchronous","title":"Testing Asynchronous Code","description":"It\'s common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed, before it can move on to another test. Jest has several ways to handle this.","sidebar":"docs"},"bypassing-module-mocks":{"id":"bypassing-module-mocks","title":"Bypassing module mocks","description":"Jest allows you to mock out whole modules in your tests, which can be useful for testing if your code is calling functions from that module correctly. However, sometimes you may want to use parts of a mocked module in your test file, in which case you want to access the original implementation, rather than a mocked version.","sidebar":"docs"},"cli":{"id":"cli","title":"Jest CLI Options","description":"The jest command line runner has a number of useful options. You can run jest --help to view all available options. Many of the options shown below can also be used together to run tests exactly the way you want. Every one of Jest\'s Configuration options can also be specified through the CLI.","sidebar":"api"},"code-transformation":{"id":"code-transformation","title":"Code Transformation","description":"Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you\'ll need to transform that code into plain JavaScript, similar to what you would do when building for browsers.","sidebar":"api"},"configuration":{"id":"configuration","title":"Configuring Jest","description":"The Jest philosophy is to work great by default, but sometimes you just need more configuration power.","sidebar":"api"},"dynamodb":{"id":"dynamodb","title":"Using with DynamoDB","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with DynamoDB.","sidebar":"docs"},"ecmascript-modules":{"id":"ecmascript-modules","title":"ECMAScript Modules","description":"Jest ships with experimental support for ECMAScript Modules (ESM).","sidebar":"docs"},"environment-variables":{"id":"environment-variables","title":"Environment Variables","description":"Jest sets the following environment variables:","sidebar":"api"},"es6-class-mocks":{"id":"es6-class-mocks","title":"ES6 Class Mocks","description":"Jest can be used to mock ES6 classes that are imported into files you want to test.","sidebar":"docs"},"expect":{"id":"expect","title":"Expect","description":"When you\'re writing tests, you often need to check that values meet certain conditions. expect gives you access to a number of \\"matchers\\" that let you validate different things.","sidebar":"api"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Install Jest using your favorite package manager:","sidebar":"docs"},"jest-community":{"id":"jest-community","title":"Jest Community","description":"The community around Jest is working hard to make the testing experience even greater.","sidebar":"docs"},"jest-object":{"id":"jest-object","title":"The Jest Object","description":"The jest object is automatically in scope within every test file. The methods in the jest object help create mocks and let you control Jest\'s overall behavior. It can also be imported explicitly by via import  from \'@jest/globals\'.","sidebar":"api"},"jest-platform":{"id":"jest-platform","title":"Jest Platform","description":"You can cherry pick specific features of Jest and use them as standalone packages. Here\'s a list of the available packages:","sidebar":"docs"},"manual-mocks":{"id":"manual-mocks","title":"Manual Mocks","description":"Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data. This ensures your tests will be fast and not flaky.","sidebar":"docs"},"migration-guide":{"id":"migration-guide","title":"Migrating to Jest","description":"If you\'d like to try out Jest with an existing codebase, there are a number of ways to convert to Jest:","sidebar":"docs"},"mock-function-api":{"id":"mock-function-api","title":"Mock Functions","description":"Mock functions are also known as \\"spies\\", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.","sidebar":"api"},"mock-functions":{"id":"mock-functions","title":"Mock Functions","description":"Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.","sidebar":"docs"},"mongodb":{"id":"mongodb","title":"Using with MongoDB","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with MongoDB.","sidebar":"docs"},"more-resources":{"id":"more-resources","title":"More Resources","description":"By now you should have a good idea of how Jest can help you test your applications. If you\'re interested in learning more, here\'s some related stuff you might want to check out.","sidebar":"docs"},"puppeteer":{"id":"puppeteer","title":"Using with puppeteer","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with puppeteer.","sidebar":"docs"},"setup-teardown":{"id":"setup-teardown","title":"Setup and Teardown","description":"Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this.","sidebar":"docs"},"snapshot-testing":{"id":"snapshot-testing","title":"Snapshot Testing","description":"Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.","sidebar":"docs"},"testing-frameworks":{"id":"testing-frameworks","title":"Testing Web Frameworks","description":"Jest is a universal testing platform, with the ability to adapt to any JavaScript library or framework. In this section, we\'d like to link to community posts and articles about integrating Jest into popular JS libraries.","sidebar":"docs"},"timer-mocks":{"id":"timer-mocks","title":"Timer Mocks","description":"The native timer functions (i.e., setTimeout(), setInterval(), clearTimeout(), clearInterval()) are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. Great Scott!","sidebar":"docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Uh oh, something went wrong? Use this guide to resolve issues with Jest.","sidebar":"docs"},"tutorial-async":{"id":"tutorial-async","title":"An Async Example","description":"First, enable Babel support in Jest as documented in the Getting Started guide.","sidebar":"docs"},"tutorial-jquery":{"id":"tutorial-jquery","title":"DOM Manipulation","description":"Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let\'s see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span.","sidebar":"docs"},"tutorial-react":{"id":"tutorial-react","title":"Testing React Apps","description":"At Facebook, we use Jest to test React applications.","sidebar":"docs"},"tutorial-react-native":{"id":"tutorial-react-native","title":"Testing React Native Apps","description":"At Facebook, we use Jest to test React Native applications.","sidebar":"docs"},"upgrading-to-jest29":{"id":"upgrading-to-jest29","title":"From v28 to v29","description":"Upgrading Jest from v28 to v29? This guide aims to help refactoring your configuration and tests.","sidebar":"docs"},"using-matchers":{"id":"using-matchers","title":"Using Matchers","description":"Jest uses \\"matchers\\" to let you test values in different ways. This document will introduce some commonly used matchers. For the full list, see the expect API doc.","sidebar":"docs"},"watch-plugins":{"id":"watch-plugins","title":"Watch Plugins","description":"The Jest watch plugin system provides a way to hook into specific parts of Jest and to define watch mode menu prompts that execute code on key press. Combined, these features allow you to develop interactive experiences custom for your workflow.","sidebar":"docs"},"webpack":{"id":"webpack","title":"Using with webpack","description":"Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools.","sidebar":"docs"}}}')}}]);