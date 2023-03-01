"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6097],{35318:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var o=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),i=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=i(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return t?o.createElement(k,r(r({ref:n},u),{},{components:t})):o.createElement(k,r({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var i=2;i<l;i++)r[i]=t[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var o=t(25773),a=(t(27378),t(35318));const l={id:"es6-class-mocks",title:"ES6 Class Mocks"},r=void 0,s={unversionedId:"es6-class-mocks",id:"version-27.x/es6-class-mocks",title:"ES6 Class Mocks",description:"Jest can be used to mock ES6 classes that are imported into files you want to test.",source:"@site/versioned_docs/version-27.x/Es6ClassMocks.md",sourceDirName:".",slug:"/es6-class-mocks",permalink:"/jest/ru/docs/27.x/es6-class-mocks",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"27.x",lastUpdatedBy:"Jack",lastUpdatedAt:1677667296,formattedLastUpdatedAt:"1 \u043c\u0430\u0440. 2023\u202f\u0433.",frontMatter:{id:"es6-class-mocks",title:"ES6 Class Mocks"},sidebar:"docs",previous:{title:"Manual Mocks",permalink:"/jest/ru/docs/27.x/manual-mocks"},next:{title:"Bypassing module mocks",permalink:"/jest/ru/docs/27.x/bypassing-module-mocks"}},c={},i=[{value:"An ES6 Class Example",id:"an-es6-class-example",level:2},{value:"The 4 ways to create an ES6 class mock",id:"the-4-ways-to-create-an-es6-class-mock",level:2},{value:"Automatic mock",id:"automatic-mock",level:3},{value:"Manual mock",id:"manual-mock",level:3},{value:"Calling <code>jest.mock()</code> with the module factory parameter",id:"calling-jestmock-with-the-module-factory-parameter",level:3},{value:"Replacing the mock using <code>mockImplementation()</code> or <code>mockImplementationOnce()</code>",id:"replacing-the-mock-using-mockimplementation-or-mockimplementationonce",level:3},{value:"In depth: Understanding mock constructor functions",id:"in-depth-understanding-mock-constructor-functions",level:2},{value:"Manual mock that is another ES6 class",id:"manual-mock-that-is-another-es6-class",level:3},{value:"Mock using module factory parameter",id:"mock-using-module-factory-parameter",level:3},{value:"* Module factory function must return a function",id:"-module-factory-function-must-return-a-function",level:4},{value:"Mocking a specific method of a class",id:"mocking-a-specific-method-of-a-class",level:2},{value:"Static, getter and setter methods",id:"static-getter-and-setter-methods",level:3},{value:"Keeping track of usage (spying on the mock)",id:"keeping-track-of-usage-spying-on-the-mock",level:2},{value:"Spying on the constructor",id:"spying-on-the-constructor",level:3},{value:"Mocking non-default class exports",id:"mocking-non-default-class-exports",level:3},{value:"Spying on methods of our class",id:"spying-on-methods-of-our-class",level:3},{value:"Cleaning up between tests",id:"cleaning-up-between-tests",level:3},{value:"Complete example",id:"complete-example",level:2}],u={toc:i};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jest can be used to mock ES6 classes that are imported into files you want to test."),(0,a.kt)("p",null,"ES6 classes are constructor functions with some syntactic sugar. Therefore, any mock for an ES6 class must be a function or an actual ES6 class (which is, again, another function). So you can mock them using ",(0,a.kt)("a",{parentName:"p",href:"/jest/ru/docs/27.x/mock-functions"},"mock functions"),"."),(0,a.kt)("h2",{id:"an-es6-class-example"},"An ES6 Class Example"),(0,a.kt)("p",null,"We'll use a contrived example of a class that plays sound files, ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundPlayer"),", and a consumer class which uses that class, ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundPlayerConsumer"),". We'll mock ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundPlayer")," in our tests for ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundPlayerConsumer"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="sound-player.js"',title:'"sound-player.js"'},"export default class SoundPlayer {\n  constructor() {\n    this.foo = 'bar';\n  }\n\n  playSoundFile(fileName) {\n    console.log('Playing sound file ' + fileName);\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="sound-player-consumer.js"',title:'"sound-player-consumer.js"'},"import SoundPlayer from './sound-player';\n\nexport default class SoundPlayerConsumer {\n  constructor() {\n    this.soundPlayer = new SoundPlayer();\n  }\n\n  playSomethingCool() {\n    const coolSoundFileName = 'song.mp3';\n    this.soundPlayer.playSoundFile(coolSoundFileName);\n  }\n}\n")),(0,a.kt)("h2",{id:"the-4-ways-to-create-an-es6-class-mock"},"The 4 ways to create an ES6 class mock"),(0,a.kt)("h3",{id:"automatic-mock"},"Automatic mock"),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock('./sound-player')"),' returns a useful "automatic mock" you can use to spy on calls to the class constructor and all of its methods. It replaces the ES6 class with a mock constructor, and replaces all of its methods with ',(0,a.kt)("a",{parentName:"p",href:"/jest/ru/docs/27.x/mock-functions"},"mock functions")," that always return ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". Method calls are saved in ",(0,a.kt)("inlineCode",{parentName:"p"},"theAutomaticMock.mock.instances[index].methodName.mock.calls"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you use arrow functions in your classes, they will ",(0,a.kt)("em",{parentName:"p"},"not")," be part of the mock. The reason for that is that arrow functions are not present on the object's prototype, they are merely properties holding a reference to a function.")),(0,a.kt)("p",null,"If you don't need to replace the implementation of the class, this is the easiest option to set up. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\njest.mock('./sound-player'); // SoundPlayer is now a mock constructor\n\nbeforeEach(() => {\n  // Clear all instances and calls to constructor and all methods:\n  SoundPlayer.mockClear();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  // Show that mockClear() is working:\n  expect(SoundPlayer).not.toHaveBeenCalled();\n\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  // Constructor should have been called again:\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n\n  // mock.instances is available with automatic mocks:\n  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];\n  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;\n  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);\n  // Equivalent to above check:\n  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);\n  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);\n});\n")),(0,a.kt)("h3",{id:"manual-mock"},"Manual mock"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"/jest/ru/docs/27.x/manual-mocks"},"manual mock")," by saving a mock implementation in the ",(0,a.kt)("inlineCode",{parentName:"p"},"__mocks__")," folder. This allows you to specify the implementation, and it can be used across test files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',title:'"__mocks__/sound-player.js"'},"// Import this named export into your test file:\nexport const mockPlaySoundFile = jest.fn();\nconst mock = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n\nexport default mock;\n")),(0,a.kt)("p",null,"Import the mock and the mock method shared by all instances:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="sound-player-consumer.test.js"',title:'"sound-player-consumer.test.js"'},"import SoundPlayer, {mockPlaySoundFile} from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\njest.mock('./sound-player'); // SoundPlayer is now a mock constructor\n\nbeforeEach(() => {\n  // Clear all instances and calls to constructor and all methods:\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);\n});\n")),(0,a.kt)("h3",{id:"calling-jestmock-with-the-module-factory-parameter"},"Calling ",(0,a.kt)("a",{parentName:"h3",href:"/jest/ru/docs/27.x/jest-object#jestmockmodulename-factory-options"},(0,a.kt)("inlineCode",{parentName:"a"},"jest.mock()"))," with the module factory parameter"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock(path, moduleFactory)")," takes a ",(0,a.kt)("strong",{parentName:"p"},"module factory")," argument. A module factory is a function that returns the mock."),(0,a.kt)("p",null,"In order to mock a constructor function, the module factory must return a constructor function. In other words, the module factory must be a function that returns a function - a higher-order function (HOF)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import SoundPlayer from './sound-player';\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n  });\n});\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Since calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock()")," are hoisted to the top of the file, Jest prevents access to out-of-scope variables. By default, you cannot first define a variable and then use it in the factory. Jest will disable this check for variables that start with the word ",(0,a.kt)("inlineCode",{parentName:"p"},"mock"),". However, it is still up to you to guarantee that they will be initialized on time. Be aware of ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz"},"Temporal Dead Zone"),".")),(0,a.kt)("p",null,"For example, the following will throw an out-of-scope error due to the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"fake")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"mock")," in the variable declaration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Note: this will fail\nimport SoundPlayer from './sound-player';\nconst fakePlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: fakePlaySoundFile};\n  });\n});\n")),(0,a.kt)("p",null,"The following will throw a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReferenceError")," despite using ",(0,a.kt)("inlineCode",{parentName:"p"},"mock")," in the variable declaration, as the ",(0,a.kt)("inlineCode",{parentName:"p"},"mockSoundPlayer")," is not wrapped in an arrow function and thus accessed before initialization after hoisting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import SoundPlayer from './sound-player';\nconst mockSoundPlayer = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n// results in a ReferenceError\njest.mock('./sound-player', () => {\n  return mockSoundPlayer;\n});\n")),(0,a.kt)("h3",{id:"replacing-the-mock-using-mockimplementation-or-mockimplementationonce"},"Replacing the mock using ",(0,a.kt)("a",{parentName:"h3",href:"/jest/ru/docs/27.x/mock-function-api#mockfnmockimplementationfn"},(0,a.kt)("inlineCode",{parentName:"a"},"mockImplementation()"))," or ",(0,a.kt)("a",{parentName:"h3",href:"/jest/ru/docs/27.x/mock-function-api#mockfnmockimplementationoncefn"},(0,a.kt)("inlineCode",{parentName:"a"},"mockImplementationOnce()"))),(0,a.kt)("p",null,"You can replace all of the above mocks in order to change the implementation, for a single test or all tests, by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"mockImplementation()")," on the existing mock."),(0,a.kt)("p",null,"Calls to jest.mock are hoisted to the top of the code. You can specify a mock later, e.g. in ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeAll()"),", by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"mockImplementation()")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"mockImplementationOnce()"),") on the existing mock instead of using the factory parameter. This also allows you to change the mock between tests, if needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\njest.mock('./sound-player');\n\ndescribe('When SoundPlayer throws an error', () => {\n  beforeAll(() => {\n    SoundPlayer.mockImplementation(() => {\n      return {\n        playSoundFile: () => {\n          throw new Error('Test error');\n        },\n      };\n    });\n  });\n\n  it('Should throw an error when calling playSomethingCool', () => {\n    const soundPlayerConsumer = new SoundPlayerConsumer();\n    expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();\n  });\n});\n")),(0,a.kt)("h2",{id:"in-depth-understanding-mock-constructor-functions"},"In depth: Understanding mock constructor functions"),(0,a.kt)("p",null,"Building your constructor function mock using ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.fn().mockImplementation()")," makes mocks appear more complicated than they really are. This section shows how you can create your own mocks to illustrate how mocking works."),(0,a.kt)("h3",{id:"manual-mock-that-is-another-es6-class"},"Manual mock that is another ES6 class"),(0,a.kt)("p",null,"If you define an ES6 class using the same filename as the mocked class in the ",(0,a.kt)("inlineCode",{parentName:"p"},"__mocks__")," folder, it will serve as the mock. This class will be used in place of the real class. This allows you to inject a test implementation for the class, but does not provide a way to spy on calls."),(0,a.kt)("p",null,"For the contrived example, the mock might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',title:'"__mocks__/sound-player.js"'},"export default class SoundPlayer {\n  constructor() {\n    console.log('Mock SoundPlayer: constructor was called');\n  }\n\n  playSoundFile() {\n    console.log('Mock SoundPlayer: playSoundFile was called');\n  }\n}\n")),(0,a.kt)("h3",{id:"mock-using-module-factory-parameter"},"Mock using module factory parameter"),(0,a.kt)("p",null,"The module factory function passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock(path, moduleFactory)")," can be a HOF that returns a function","*",". This will allow calling ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," on the mock. Again, this allows you to inject different behavior for testing, but does not provide a way to spy on calls."),(0,a.kt)("h4",{id:"-module-factory-function-must-return-a-function"},"*"," Module factory function must return a function"),(0,a.kt)("p",null,"In order to mock a constructor function, the module factory must return a constructor function. In other words, the module factory must be a function that returns a function - a higher-order function (HOF)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"jest.mock('./sound-player', () => {\n  return function () {\n    return {playSoundFile: () => {}};\n  };\n});\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The mock can't be an arrow function because calling ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," on an arrow function is not allowed in JavaScript. So this won't work:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"jest.mock('./sound-player', () => {\n  return () => {\n    // Does not work; arrow functions can't be called with new\n    return {playSoundFile: () => {}};\n  };\n});\n")),(0,a.kt)("p",{parentName:"admonition"},"This will throw ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"TypeError: ","_","soundPlayer2.default is not a constructor")),", unless the code is transpiled to ES5, e.g. by ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),". (ES5 doesn't have arrow functions nor classes, so both will be transpiled to plain functions.)")),(0,a.kt)("h2",{id:"mocking-a-specific-method-of-a-class"},"Mocking a specific method of a class"),(0,a.kt)("p",null,"Lets say that you want to mock or spy on the method ",(0,a.kt)("inlineCode",{parentName:"p"},"playSoundFile")," within the class ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundPlayer"),". A simple example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// your jest test file below\nimport SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\nconst playSoundFileMock = jest\n  .spyOn(SoundPlayer.prototype, 'playSoundFile')\n  .mockImplementation(() => {\n    console.log('mocked function');\n  }); // comment this line if just want to \"spy\"\n\nit('player consumer plays music', () => {\n  const player = new SoundPlayerConsumer();\n  player.playSomethingCool();\n  expect(playSoundFileMock).toHaveBeenCalled();\n});\n")),(0,a.kt)("h3",{id:"static-getter-and-setter-methods"},"Static, getter and setter methods"),(0,a.kt)("p",null,"Lets imagine our class ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundPlayer")," has a getter method ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," and a static method ",(0,a.kt)("inlineCode",{parentName:"p"},"brand")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default class SoundPlayer {\n  constructor() {\n    this.foo = 'bar';\n  }\n\n  playSoundFile(fileName) {\n    console.log('Playing sound file ' + fileName);\n  }\n\n  get foo() {\n    return 'bar';\n  }\n  static brand() {\n    return 'player-brand';\n  }\n}\n")),(0,a.kt)("p",null,"You can mock/spy on them easily, here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// your jest test file below\nimport SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\nconst staticMethodMock = jest\n  .spyOn(SoundPlayer, 'brand')\n  .mockImplementation(() => 'some-mocked-brand');\n\nconst getterMethodMock = jest\n  .spyOn(SoundPlayer.prototype, 'foo', 'get')\n  .mockImplementation(() => 'some-mocked-result');\n\nit('custom methods are called', () => {\n  const player = new SoundPlayer();\n  const foo = player.foo;\n  const brand = SoundPlayer.brand();\n\n  expect(staticMethodMock).toHaveBeenCalled();\n  expect(getterMethodMock).toHaveBeenCalled();\n});\n")),(0,a.kt)("h2",{id:"keeping-track-of-usage-spying-on-the-mock"},"Keeping track of usage (spying on the mock)"),(0,a.kt)("p",null,"Injecting a test implementation is helpful, but you will probably also want to test whether the class constructor and methods are called with the correct parameters."),(0,a.kt)("h3",{id:"spying-on-the-constructor"},"Spying on the constructor"),(0,a.kt)("p",null,"In order to track calls to the constructor, replace the function returned by the HOF with a Jest mock function. Create it with ",(0,a.kt)("a",{parentName:"p",href:"/jest/ru/docs/27.x/jest-object#jestfnimplementation"},(0,a.kt)("inlineCode",{parentName:"a"},"jest.fn()")),", and then specify its implementation with ",(0,a.kt)("inlineCode",{parentName:"p"},"mockImplementation()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import SoundPlayer from './sound-player';\njest.mock('./sound-player', () => {\n  // Works and lets you check for constructor calls:\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: () => {}};\n  });\n});\n")),(0,a.kt)("p",null,"This will let us inspect usage of our mocked class, using ",(0,a.kt)("inlineCode",{parentName:"p"},"SoundPlayer.mock.calls"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"expect(SoundPlayer).toHaveBeenCalled();")," or near-equivalent: ",(0,a.kt)("inlineCode",{parentName:"p"},"expect(SoundPlayer.mock.calls.length).toBeGreaterThan(0);")),(0,a.kt)("h3",{id:"mocking-non-default-class-exports"},"Mocking non-default class exports"),(0,a.kt)("p",null,"If the class is ",(0,a.kt)("strong",{parentName:"p"},"not")," the default export from the module then you need to return an object with the key that is the same as the class export name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {SoundPlayer} from './sound-player';\njest.mock('./sound-player', () => {\n  // Works and lets you check for constructor calls:\n  return {\n    SoundPlayer: jest.fn().mockImplementation(() => {\n      return {playSoundFile: () => {}};\n    }),\n  };\n});\n")),(0,a.kt)("h3",{id:"spying-on-methods-of-our-class"},"Spying on methods of our class"),(0,a.kt)("p",null,"Our mocked class will need to provide any member functions (",(0,a.kt)("inlineCode",{parentName:"p"},"playSoundFile")," in the example) that will be called during our tests, or else we'll get an error for calling a function that doesn't exist. But we'll probably want to also spy on calls to those methods, to ensure that they were called with the expected parameters."),(0,a.kt)("p",null,"A new object will be created each time the mock constructor function is called during tests. To spy on method calls in all of these objects, we populate ",(0,a.kt)("inlineCode",{parentName:"p"},"playSoundFile")," with another mock function, and store a reference to that same mock function in our test file, so it's available during tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import SoundPlayer from './sound-player';\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n    // Now we can track calls to playSoundFile\n  });\n});\n")),(0,a.kt)("p",null,"The manual mock equivalent of this would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',title:'"__mocks__/sound-player.js"'},"// Import this named export into your test file\nexport const mockPlaySoundFile = jest.fn();\nconst mock = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n\nexport default mock;\n")),(0,a.kt)("p",null,"Usage is similar to the module factory function, except that you can omit the second argument from ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock()"),", and you must import the mocked method into your test file, since it is no longer defined there. Use the original module path for this; don't include ",(0,a.kt)("inlineCode",{parentName:"p"},"__mocks__"),"."),(0,a.kt)("h3",{id:"cleaning-up-between-tests"},"Cleaning up between tests"),(0,a.kt)("p",null,"To clear the record of calls to the mock constructor function and its methods, we call ",(0,a.kt)("a",{parentName:"p",href:"/jest/ru/docs/27.x/mock-function-api#mockfnmockclear"},(0,a.kt)("inlineCode",{parentName:"a"},"mockClear()"))," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeEach()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"beforeEach(() => {\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n")),(0,a.kt)("h2",{id:"complete-example"},"Complete example"),(0,a.kt)("p",null,"Here's a complete test file which uses the module factory parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.mock"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="sound-player-consumer.test.js"',title:'"sound-player-consumer.test.js"'},"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n  });\n});\n\nbeforeEach(() => {\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n\nit('The consumer should be able to call new() on SoundPlayer', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  // Ensure constructor created the object:\n  expect(soundPlayerConsumer).toBeTruthy();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);\n});\n")))}m.isMDXComponent=!0}}]);