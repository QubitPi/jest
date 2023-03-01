"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4846],{51443:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"25.x","label":"25.x","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-25.x","isLast":false,"docsSidebars":{"version-25.x/docs":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"Getting Started","href":"/jest/fr/docs/25.x/getting-started","docId":"getting-started"},{"type":"link","label":"Using Matchers","href":"/jest/fr/docs/25.x/using-matchers","docId":"using-matchers"},{"type":"link","label":"Testing Asynchronous Code","href":"/jest/fr/docs/25.x/asynchronous","docId":"asynchronous"},{"type":"link","label":"Setup and Teardown","href":"/jest/fr/docs/25.x/setup-teardown","docId":"setup-teardown"},{"type":"link","label":"Mock Functions","href":"/jest/fr/docs/25.x/mock-functions","docId":"mock-functions"},{"type":"link","label":"Jest Platform","href":"/jest/fr/docs/25.x/jest-platform","docId":"jest-platform"},{"type":"link","label":"Jest Community","href":"/jest/fr/docs/25.x/jest-community","docId":"jest-community"},{"type":"link","label":"More Resources","href":"/jest/fr/docs/25.x/more-resources","docId":"more-resources"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Snapshot Testing","href":"/jest/fr/docs/25.x/snapshot-testing","docId":"snapshot-testing"},{"type":"link","label":"An Async Example","href":"/jest/fr/docs/25.x/tutorial-async","docId":"tutorial-async"},{"type":"link","label":"Timer Mocks","href":"/jest/fr/docs/25.x/timer-mocks","docId":"timer-mocks"},{"type":"link","label":"Manual Mocks","href":"/jest/fr/docs/25.x/manual-mocks","docId":"manual-mocks"},{"type":"link","label":"ES6 Class Mocks","href":"/jest/fr/docs/25.x/es6-class-mocks","docId":"es6-class-mocks"},{"type":"link","label":"Bypassing module mocks","href":"/jest/fr/docs/25.x/bypassing-module-mocks","docId":"bypassing-module-mocks"},{"type":"link","label":"ECMAScript Modules","href":"/jest/fr/docs/25.x/ecmascript-modules","docId":"ecmascript-modules"},{"type":"link","label":"Using with webpack","href":"/jest/fr/docs/25.x/webpack","docId":"webpack"},{"type":"link","label":"Using with puppeteer","href":"/jest/fr/docs/25.x/puppeteer","docId":"puppeteer"},{"type":"link","label":"Using with MongoDB","href":"/jest/fr/docs/25.x/mongodb","docId":"mongodb"},{"type":"link","label":"Using with DynamoDB","href":"/jest/fr/docs/25.x/dynamodb","docId":"dynamodb"},{"type":"link","label":"DOM Manipulation","href":"/jest/fr/docs/25.x/tutorial-jquery","docId":"tutorial-jquery"},{"type":"link","label":"Watch Plugins","href":"/jest/fr/docs/25.x/watch-plugins","docId":"watch-plugins"},{"type":"link","label":"Migrating to Jest","href":"/jest/fr/docs/25.x/migration-guide","docId":"migration-guide"},{"type":"link","label":"Troubleshooting","href":"/jest/fr/docs/25.x/troubleshooting","docId":"troubleshooting"},{"type":"link","label":"Architecture","href":"/jest/fr/docs/25.x/architecture","docId":"architecture"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Framework Guides","items":[{"type":"link","label":"Testing React Apps","href":"/jest/fr/docs/25.x/tutorial-react","docId":"tutorial-react"},{"type":"link","label":"Testing React Native Apps","href":"/jest/fr/docs/25.x/tutorial-react-native","docId":"tutorial-react-native"},{"type":"link","label":"Testing Web Frameworks","href":"/jest/fr/docs/25.x/testing-frameworks","docId":"testing-frameworks"}],"collapsed":true,"collapsible":true}],"version-25.x/api":[{"type":"link","label":"Globals","href":"/jest/fr/docs/25.x/api","docId":"api"},{"type":"link","label":"Expect","href":"/jest/fr/docs/25.x/expect","docId":"expect"},{"type":"link","label":"Mock Functions","href":"/jest/fr/docs/25.x/mock-function-api","docId":"mock-function-api"},{"type":"link","label":"The Jest Object","href":"/jest/fr/docs/25.x/jest-object","docId":"jest-object"},{"type":"link","label":"Configuring Jest","href":"/jest/fr/docs/25.x/configuration","docId":"configuration"},{"type":"link","label":"Jest CLI Options","href":"/jest/fr/docs/25.x/cli","docId":"cli"},{"type":"link","label":"Environment Variables","href":"/jest/fr/docs/25.x/environment-variables","docId":"environment-variables"}]},"docs":{"api":{"id":"api","title":"Globals","description":"In your test files, Jest puts each of these methods and objects into the global environment. You don\'t have to require or import anything to use them. However, if you prefer explicit imports, you can do import {describe, expect, test} from \'@jest/globals\'.","sidebar":"version-25.x/api"},"architecture":{"id":"architecture","title":"Architecture","description":"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:","sidebar":"version-25.x/docs"},"asynchronous":{"id":"asynchronous","title":"Testing Asynchronous Code","description":"It\'s common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed, before it can move on to another test. Jest has several ways to handle this.","sidebar":"version-25.x/docs"},"bypassing-module-mocks":{"id":"bypassing-module-mocks","title":"Bypassing module mocks","description":"Jest allows you to mock out whole modules in your tests, which can be useful for testing if your code is calling functions from that module correctly. However, sometimes you may want to use parts of a mocked module in your test file, in which case you want to access the original implementation, rather than a mocked version.","sidebar":"version-25.x/docs"},"cli":{"id":"cli","title":"Jest CLI Options","description":"The jest command line runner has a number of useful options. You can run jest --help to view all available options. Many of the options shown below can also be used together to run tests exactly the way you want. Every one of Jest\'s Configuration options can also be specified through the CLI.","sidebar":"version-25.x/api"},"configuration":{"id":"configuration","title":"Configuring Jest","description":"Jest\'s configuration can be defined in the package.json file of your project, or through a jest.config.js file or through the --config  option. If you\'d like to use your package.json to store Jest\'s config, the \\"jest\\" key should be used on the top level so Jest will know how to find your settings:","sidebar":"version-25.x/api"},"dynamodb":{"id":"dynamodb","title":"Using with DynamoDB","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with DynamoDB.","sidebar":"version-25.x/docs"},"ecmascript-modules":{"id":"ecmascript-modules","title":"ECMAScript Modules","description":"Jest ships with experimental support for ECMAScript Modules (ESM).","sidebar":"version-25.x/docs"},"environment-variables":{"id":"environment-variables","title":"Environment Variables","description":"Jest sets the following environment variables:","sidebar":"version-25.x/api"},"es6-class-mocks":{"id":"es6-class-mocks","title":"ES6 Class Mocks","description":"Jest can be used to mock ES6 classes that are imported into files you want to test.","sidebar":"version-25.x/docs"},"expect":{"id":"expect","title":"Expect","description":"When you\'re writing tests, you often need to check that values meet certain conditions. expect gives you access to a number of \\"matchers\\" that let you validate different things.","sidebar":"version-25.x/api"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Install Jest using your favorite package manager:","sidebar":"version-25.x/docs"},"jest-community":{"id":"jest-community","title":"Jest Community","description":"The community around Jest is working hard to make the testing experience even greater.","sidebar":"version-25.x/docs"},"jest-object":{"id":"jest-object","title":"The Jest Object","description":"The jest object is automatically in scope within every test file. The methods in the jest object help create mocks and let you control Jest\'s overall behavior. It can also be imported explicitly by via import  from \'@jest/globals\'.","sidebar":"version-25.x/api"},"jest-platform":{"id":"jest-platform","title":"Jest Platform","description":"You can cherry pick specific features of Jest and use them as standalone packages. Here\'s a list of the available packages:","sidebar":"version-25.x/docs"},"manual-mocks":{"id":"manual-mocks","title":"Manual Mocks","description":"Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data. This ensures your tests will be fast and not flaky.","sidebar":"version-25.x/docs"},"migration-guide":{"id":"migration-guide","title":"Migrating to Jest","description":"If you\'d like to try out Jest with an existing codebase, there are a number of ways to convert to Jest:","sidebar":"version-25.x/docs"},"mock-function-api":{"id":"mock-function-api","title":"Mock Functions","description":"Mock functions are also known as \\"spies\\", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.","sidebar":"version-25.x/api"},"mock-functions":{"id":"mock-functions","title":"Mock Functions","description":"Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.","sidebar":"version-25.x/docs"},"mongodb":{"id":"mongodb","title":"Using with MongoDB","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with MongoDB.","sidebar":"version-25.x/docs"},"more-resources":{"id":"more-resources","title":"More Resources","description":"By now you should have a good idea of how Jest can help you test your applications. If you\'re interested in learning more, here\'s some related stuff you might want to check out.","sidebar":"version-25.x/docs"},"puppeteer":{"id":"puppeteer","title":"Using with puppeteer","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with puppeteer.","sidebar":"version-25.x/docs"},"setup-teardown":{"id":"setup-teardown","title":"Setup and Teardown","description":"Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this.","sidebar":"version-25.x/docs"},"snapshot-testing":{"id":"snapshot-testing","title":"Snapshot Testing","description":"Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.","sidebar":"version-25.x/docs"},"testing-frameworks":{"id":"testing-frameworks","title":"Testing Web Frameworks","description":"Jest is a universal testing platform, with the ability to adapt to any JavaScript library or framework. In this section, we\'d like to link to community posts and articles about integrating Jest into popular JS libraries.","sidebar":"version-25.x/docs"},"timer-mocks":{"id":"timer-mocks","title":"Timer Mocks","description":"The native timer functions (i.e., setTimeout, setInterval, clearTimeout, clearInterval) are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. Great Scott!","sidebar":"version-25.x/docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Uh oh, something went wrong? Use this guide to resolve issues with Jest.","sidebar":"version-25.x/docs"},"tutorial-async":{"id":"tutorial-async","title":"An Async Example","description":"First, enable Babel support in Jest as documented in the Getting Started guide.","sidebar":"version-25.x/docs"},"tutorial-jquery":{"id":"tutorial-jquery","title":"DOM Manipulation","description":"Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let\'s see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span.","sidebar":"version-25.x/docs"},"tutorial-react":{"id":"tutorial-react","title":"Testing React Apps","description":"At Facebook, we use Jest to test React applications.","sidebar":"version-25.x/docs"},"tutorial-react-native":{"id":"tutorial-react-native","title":"Testing React Native Apps","description":"At Facebook, we use Jest to test React Native applications.","sidebar":"version-25.x/docs"},"using-matchers":{"id":"using-matchers","title":"Using Matchers","description":"Jest uses \\"matchers\\" to let you test values in different ways. This document will introduce some commonly used matchers. For the full list, see the expect API doc.","sidebar":"version-25.x/docs"},"watch-plugins":{"id":"watch-plugins","title":"Watch Plugins","description":"The Jest watch plugin system provides a way to hook into specific parts of Jest and to define watch mode menu prompts that execute code on key press. Combined, these features allow you to develop interactive experiences custom for your workflow.","sidebar":"version-25.x/docs"},"webpack":{"id":"webpack","title":"Using with webpack","description":"Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools.","sidebar":"version-25.x/docs"}}}')}}]);