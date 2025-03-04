"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7235],{18817:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"es6-class-mocks","title":"ES6 Class Mocks","description":"Jest can be used to mock ES6 classes that are imported into files you want to test.","source":"@site/../docs/Es6ClassMocks.md","sourceDirName":".","slug":"/es6-class-mocks","permalink":"/ja/docs/next/es6-class-mocks","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ja","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1741052460000,"frontMatter":{"id":"es6-class-mocks","title":"ES6 Class Mocks"},"sidebar":"docs","previous":{"title":"Manual Mocks","permalink":"/ja/docs/next/manual-mocks"},"next":{"title":"Bypassing module mocks","permalink":"/ja/docs/next/bypassing-module-mocks"}}');var s=o(62540),a=o(43023);const c={id:"es6-class-mocks",title:"ES6 Class Mocks"},l=void 0,r={},i=[{value:"An ES6 Class Example",id:"an-es6-class-example",level:2},{value:"The 4 ways to create an ES6 class mock",id:"the-4-ways-to-create-an-es6-class-mock",level:2},{value:"Automatic mock",id:"automatic-mock",level:3},{value:"Manual mock",id:"manual-mock",level:3},{value:"Calling <code>jest.mock()</code> with the module factory parameter",id:"calling-jestmock-with-the-module-factory-parameter",level:3},{value:"Replacing the mock using <code>mockImplementation()</code> or <code>mockImplementationOnce()</code>",id:"replacing-the-mock-using-mockimplementation-or-mockimplementationonce",level:3},{value:"In depth: Understanding mock constructor functions",id:"in-depth-understanding-mock-constructor-functions",level:2},{value:"Manual mock that is another ES6 class",id:"manual-mock-that-is-another-es6-class",level:3},{value:"Mock using module factory parameter",id:"mock-using-module-factory-parameter",level:3},{value:"* Module factory function must return a function",id:"-module-factory-function-must-return-a-function",level:4},{value:"Mocking a specific method of a class",id:"mocking-a-specific-method-of-a-class",level:2},{value:"Static, getter and setter methods",id:"static-getter-and-setter-methods",level:3},{value:"Keeping track of usage (spying on the mock)",id:"keeping-track-of-usage-spying-on-the-mock",level:2},{value:"Spying on the constructor",id:"spying-on-the-constructor",level:3},{value:"Mocking non-default class exports",id:"mocking-non-default-class-exports",level:3},{value:"Spying on methods of our class",id:"spying-on-methods-of-our-class",level:3},{value:"Cleaning up between tests",id:"cleaning-up-between-tests",level:3},{value:"Complete example",id:"complete-example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Jest can be used to mock ES6 classes that are imported into files you want to test."}),"\n",(0,s.jsxs)(n.p,{children:["ES6 classes are constructor functions with some syntactic sugar. Therefore, any mock for an ES6 class must be a function or an actual ES6 class (which is, again, another function). So you can mock them using ",(0,s.jsx)(n.a,{href:"/ja/docs/next/mock-functions",children:"mock functions"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"an-es6-class-example",children:"An ES6 Class Example"}),"\n",(0,s.jsxs)(n.p,{children:["We'll use a contrived example of a class that plays sound files, ",(0,s.jsx)(n.code,{children:"SoundPlayer"}),", and a consumer class which uses that class, ",(0,s.jsx)(n.code,{children:"SoundPlayerConsumer"}),". We'll mock ",(0,s.jsx)(n.code,{children:"SoundPlayer"})," in our tests for ",(0,s.jsx)(n.code,{children:"SoundPlayerConsumer"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="sound-player.js"',children:"export default class SoundPlayer {\n  constructor() {\n    this.foo = 'bar';\n  }\n\n  playSoundFile(fileName) {\n    console.log('Playing sound file ' + fileName);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="sound-player-consumer.js"',children:"import SoundPlayer from './sound-player';\n\nexport default class SoundPlayerConsumer {\n  constructor() {\n    this.soundPlayer = new SoundPlayer();\n  }\n\n  playSomethingCool() {\n    const coolSoundFileName = 'song.mp3';\n    this.soundPlayer.playSoundFile(coolSoundFileName);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"the-4-ways-to-create-an-es6-class-mock",children:"The 4 ways to create an ES6 class mock"}),"\n",(0,s.jsx)(n.h3,{id:"automatic-mock",children:"Automatic mock"}),"\n",(0,s.jsxs)(n.p,{children:["Calling ",(0,s.jsx)(n.code,{children:"jest.mock('./sound-player')"}),' returns a useful "automatic mock" you can use to spy on calls to the class constructor and all of its methods. It replaces the ES6 class with a mock constructor, and replaces all of its methods with ',(0,s.jsx)(n.a,{href:"/ja/docs/next/mock-functions",children:"mock functions"})," that always return ",(0,s.jsx)(n.code,{children:"undefined"}),". Method calls are saved in ",(0,s.jsx)(n.code,{children:"theAutomaticMock.mock.instances[index].methodName.mock.calls"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you use arrow functions in your classes, they will ",(0,s.jsx)(n.em,{children:"not"})," be part of the mock. The reason for that is that arrow functions are not present on the object's prototype, they are merely properties holding a reference to a function."]})}),"\n",(0,s.jsx)(n.p,{children:"If you don't need to replace the implementation of the class, this is the easiest option to set up. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\njest.mock('./sound-player'); // SoundPlayer is now a mock constructor\n\nbeforeEach(() => {\n  // Clear all instances and calls to constructor and all methods:\n  SoundPlayer.mockClear();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  // Show that mockClear() is working:\n  expect(SoundPlayer).not.toHaveBeenCalled();\n\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  // Constructor should have been called again:\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n\n  // mock.instances is available with automatic mocks:\n  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];\n  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;\n  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);\n  // Equivalent to above check:\n  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);\n  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:'"JestJS TypeScript: mockImplementation Does not Exist on Type"',type:"caution",children:[(0,s.jsxs)(n.p,{children:["If we are testing TypeScript, we will see such error unless we convince Typescript that this is a jest Mock object by using something like ",(0,s.jsx)(n.code,{children:"const MockedSoundPlayer = SoundPlayer as jest.Mock<SoundPlayer>"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import SoundPlayer from './sound-player';\n\njest.mock('./sound-player'); // SoundPlayer is now a mock constructor\nconst MockedSoundPlayer = SoundPlayer as jest.Mock<SoundPlayer>; // Add this line in case of TypeScript\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"manual-mock",children:"Manual mock"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.a,{href:"/ja/docs/next/manual-mocks",children:"manual mock"})," by saving a mock implementation in the ",(0,s.jsx)(n.code,{children:"__mocks__"})," folder. This allows you to specify the implementation, and it can be used across test files."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',children:"// Import this named export into your test file:\nexport const mockPlaySoundFile = jest.fn();\nconst mock = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n\nexport default mock;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Import the mock and the mock method shared by all instances:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="sound-player-consumer.test.js"',children:"import SoundPlayer, {mockPlaySoundFile} from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\njest.mock('./sound-player'); // SoundPlayer is now a mock constructor\n\nbeforeEach(() => {\n  // Clear all instances and calls to constructor and all methods:\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"calling-jestmock-with-the-module-factory-parameter",children:["Calling ",(0,s.jsx)(n.a,{href:"/ja/docs/next/jest-object#jestmockmodulename-factory-options",children:(0,s.jsx)(n.code,{children:"jest.mock()"})})," with the module factory parameter"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"jest.mock(path, moduleFactory)"})," takes a ",(0,s.jsx)(n.strong,{children:"module factory"})," argument. A module factory is a function that returns the mock."]}),"\n",(0,s.jsx)(n.p,{children:"In order to mock a constructor function, the module factory must return a constructor function. In other words, the module factory must be a function that returns a function - a higher-order function (HOF)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n  });\n});\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Since calls to ",(0,s.jsx)(n.code,{children:"jest.mock()"})," are hoisted to the top of the file, Jest prevents access to out-of-scope variables. By default, you cannot first define a variable and then use it in the factory. Jest will disable this check for variables that start with the word ",(0,s.jsx)(n.code,{children:"mock"}),". However, it is still up to you to guarantee that they will be initialized on time. Be aware of ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz",children:"Temporal Dead Zone"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["For example, the following will throw an out-of-scope error due to the use of ",(0,s.jsx)(n.code,{children:"fake"})," instead of ",(0,s.jsx)(n.code,{children:"mock"})," in the variable declaration."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// Note: this will fail\nimport SoundPlayer from './sound-player';\nconst fakePlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: fakePlaySoundFile};\n  });\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The following will throw a ",(0,s.jsx)(n.code,{children:"ReferenceError"})," despite using ",(0,s.jsx)(n.code,{children:"mock"})," in the variable declaration, as the ",(0,s.jsx)(n.code,{children:"mockSoundPlayer"})," is not wrapped in an arrow function and thus accessed before initialization after hoisting."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nconst mockSoundPlayer = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n// results in a ReferenceError\njest.mock('./sound-player', () => {\n  return mockSoundPlayer;\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"replacing-the-mock-using-mockimplementation-or-mockimplementationonce",children:["Replacing the mock using ",(0,s.jsx)(n.a,{href:"/ja/docs/next/mock-function-api#mockfnmockimplementationfn",children:(0,s.jsx)(n.code,{children:"mockImplementation()"})})," or ",(0,s.jsx)(n.a,{href:"/ja/docs/next/mock-function-api#mockfnmockimplementationoncefn",children:(0,s.jsx)(n.code,{children:"mockImplementationOnce()"})})]}),"\n",(0,s.jsxs)(n.p,{children:["You can replace all of the above mocks in order to change the implementation, for a single test or all tests, by calling ",(0,s.jsx)(n.code,{children:"mockImplementation()"})," on the existing mock."]}),"\n",(0,s.jsxs)(n.p,{children:["Calls to jest.mock are hoisted to the top of the code. You can specify a mock later, e.g. in ",(0,s.jsx)(n.code,{children:"beforeAll()"}),", by calling ",(0,s.jsx)(n.code,{children:"mockImplementation()"})," (or ",(0,s.jsx)(n.code,{children:"mockImplementationOnce()"}),") on the existing mock instead of using the factory parameter. This also allows you to change the mock between tests, if needed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\njest.mock('./sound-player');\n\ndescribe('When SoundPlayer throws an error', () => {\n  beforeAll(() => {\n    SoundPlayer.mockImplementation(() => {\n      return {\n        playSoundFile: () => {\n          throw new Error('Test error');\n        },\n      };\n    });\n  });\n\n  it('Should throw an error when calling playSomethingCool', () => {\n    const soundPlayerConsumer = new SoundPlayerConsumer();\n    expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();\n  });\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"in-depth-understanding-mock-constructor-functions",children:"In depth: Understanding mock constructor functions"}),"\n",(0,s.jsxs)(n.p,{children:["Building your constructor function mock using ",(0,s.jsx)(n.code,{children:"jest.fn().mockImplementation()"})," makes mocks appear more complicated than they really are. This section shows how you can create your own mocks to illustrate how mocking works."]}),"\n",(0,s.jsx)(n.h3,{id:"manual-mock-that-is-another-es6-class",children:"Manual mock that is another ES6 class"}),"\n",(0,s.jsxs)(n.p,{children:["If you define an ES6 class using the same filename as the mocked class in the ",(0,s.jsx)(n.code,{children:"__mocks__"})," folder, it will serve as the mock. This class will be used in place of the real class. This allows you to inject a test implementation for the class, but does not provide a way to spy on calls."]}),"\n",(0,s.jsx)(n.p,{children:"For the contrived example, the mock might look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',children:"export default class SoundPlayer {\n  constructor() {\n    console.log('Mock SoundPlayer: constructor was called');\n  }\n\n  playSoundFile() {\n    console.log('Mock SoundPlayer: playSoundFile was called');\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"mock-using-module-factory-parameter",children:"Mock using module factory parameter"}),"\n",(0,s.jsxs)(n.p,{children:["The module factory function passed to ",(0,s.jsx)(n.code,{children:"jest.mock(path, moduleFactory)"})," can be a HOF that returns a function*. This will allow calling ",(0,s.jsx)(n.code,{children:"new"})," on the mock. Again, this allows you to inject different behavior for testing, but does not provide a way to spy on calls."]}),"\n",(0,s.jsx)(n.h4,{id:"-module-factory-function-must-return-a-function",children:"* Module factory function must return a function"}),"\n",(0,s.jsx)(n.p,{children:"In order to mock a constructor function, the module factory must return a constructor function. In other words, the module factory must be a function that returns a function - a higher-order function (HOF)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"jest.mock('./sound-player', () => {\n  return function () {\n    return {playSoundFile: () => {}};\n  };\n});\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["The mock can't be an arrow function because calling ",(0,s.jsx)(n.code,{children:"new"})," on an arrow function is not allowed in JavaScript. So this won't work:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"jest.mock('./sound-player', () => {\n  return () => {\n    // Does not work; arrow functions can't be called with new\n    return {playSoundFile: () => {}};\n  };\n});\n"})}),(0,s.jsxs)(n.p,{children:["This will throw ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"TypeError: _soundPlayer2.default is not a constructor"})}),", unless the code is transpiled to ES5, e.g. by ",(0,s.jsx)(n.code,{children:"@babel/preset-env"}),". (ES5 doesn't have arrow functions nor classes, so both will be transpiled to plain functions.)"]})]}),"\n",(0,s.jsx)(n.h2,{id:"mocking-a-specific-method-of-a-class",children:"Mocking a specific method of a class"}),"\n",(0,s.jsxs)(n.p,{children:["Lets say that you want to mock or spy on the method ",(0,s.jsx)(n.code,{children:"playSoundFile"})," within the class ",(0,s.jsx)(n.code,{children:"SoundPlayer"}),". A simple example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// your jest test file below\nimport SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\nconst playSoundFileMock = jest\n  .spyOn(SoundPlayer.prototype, 'playSoundFile')\n  .mockImplementation(() => {\n    console.log('mocked function');\n  }); // comment this line if just want to \"spy\"\n\nit('player consumer plays music', () => {\n  const player = new SoundPlayerConsumer();\n  player.playSomethingCool();\n  expect(playSoundFileMock).toHaveBeenCalled();\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"static-getter-and-setter-methods",children:"Static, getter and setter methods"}),"\n",(0,s.jsxs)(n.p,{children:["Lets imagine our class ",(0,s.jsx)(n.code,{children:"SoundPlayer"})," has a getter method ",(0,s.jsx)(n.code,{children:"foo"})," and a static method ",(0,s.jsx)(n.code,{children:"brand"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export default class SoundPlayer {\n  constructor() {\n    this.foo = 'bar';\n  }\n\n  playSoundFile(fileName) {\n    console.log('Playing sound file ' + fileName);\n  }\n\n  get foo() {\n    return 'bar';\n  }\n  static brand() {\n    return 'player-brand';\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can mock/spy on them easily, here is an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// your jest test file below\nimport SoundPlayer from './sound-player';\n\nconst staticMethodMock = jest\n  .spyOn(SoundPlayer, 'brand')\n  .mockImplementation(() => 'some-mocked-brand');\n\nconst getterMethodMock = jest\n  .spyOn(SoundPlayer.prototype, 'foo', 'get')\n  .mockImplementation(() => 'some-mocked-result');\n\nit('custom methods are called', () => {\n  const player = new SoundPlayer();\n  const foo = player.foo;\n  const brand = SoundPlayer.brand();\n\n  expect(staticMethodMock).toHaveBeenCalled();\n  expect(getterMethodMock).toHaveBeenCalled();\n});\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"TypeScript",type:"caution",children:[(0,s.jsxs)(n.p,{children:["In the case of testing TypeScript, instead of using ",(0,s.jsx)(n.code,{children:"spyOn"}),", use ",(0,s.jsx)(n.code,{children:"Object.defineProperty"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import SoundPlayer from './sound-player';\n\njest.mock('./sound-player');\nconst MockedSoundPlayer = SoundPlayer as jest.Mock<SoundPlayer>;\n\nObject.defineProperty(MockedSoundPlayer.prototype, 'foo', {\n  get() {\n    return 'testBar';\n  },\n});\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"keeping-track-of-usage-spying-on-the-mock",children:"Keeping track of usage (spying on the mock)"}),"\n",(0,s.jsx)(n.p,{children:"Injecting a test implementation is helpful, but you will probably also want to test whether the class constructor and methods are called with the correct parameters."}),"\n",(0,s.jsx)(n.h3,{id:"spying-on-the-constructor",children:"Spying on the constructor"}),"\n",(0,s.jsxs)(n.p,{children:["In order to track calls to the constructor, replace the function returned by the HOF with a Jest mock function. Create it with ",(0,s.jsx)(n.a,{href:"/ja/docs/next/jest-object#jestfnimplementation",children:(0,s.jsx)(n.code,{children:"jest.fn()"})}),", and then specify its implementation with ",(0,s.jsx)(n.code,{children:"mockImplementation()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\njest.mock('./sound-player', () => {\n  // Works and lets you check for constructor calls:\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: () => {}};\n  });\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will let us inspect usage of our mocked class, using ",(0,s.jsx)(n.code,{children:"SoundPlayer.mock.calls"}),": ",(0,s.jsx)(n.code,{children:"expect(SoundPlayer).toHaveBeenCalled();"})," or near-equivalent: ",(0,s.jsx)(n.code,{children:"expect(SoundPlayer.mock.calls.length).toBeGreaterThan(0);"})]}),"\n",(0,s.jsx)(n.h3,{id:"mocking-non-default-class-exports",children:"Mocking non-default class exports"}),"\n",(0,s.jsxs)(n.p,{children:["If the class is ",(0,s.jsx)(n.strong,{children:"not"})," the default export from the module then you need to return an object with the key that is the same as the class export name."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import {SoundPlayer} from './sound-player';\njest.mock('./sound-player', () => {\n  // Works and lets you check for constructor calls:\n  return {\n    SoundPlayer: jest.fn().mockImplementation(() => {\n      return {playSoundFile: () => {}};\n    }),\n  };\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"spying-on-methods-of-our-class",children:"Spying on methods of our class"}),"\n",(0,s.jsxs)(n.p,{children:["Our mocked class will need to provide any member functions (",(0,s.jsx)(n.code,{children:"playSoundFile"})," in the example) that will be called during our tests, or else we'll get an error for calling a function that doesn't exist. But we'll probably want to also spy on calls to those methods, to ensure that they were called with the expected parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["A new object will be created each time the mock constructor function is called during tests. To spy on method calls in all of these objects, we populate ",(0,s.jsx)(n.code,{children:"playSoundFile"})," with another mock function, and store a reference to that same mock function in our test file, so it's available during tests."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n    // Now we can track calls to playSoundFile\n  });\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"The manual mock equivalent of this would be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',children:"// Import this named export into your test file\nexport const mockPlaySoundFile = jest.fn();\nconst mock = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n\nexport default mock;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Usage is similar to the module factory function, except that you can omit the second argument from ",(0,s.jsx)(n.code,{children:"jest.mock()"}),", and you must import the mocked method into your test file, since it is no longer defined there. Use the original module path for this; don't include ",(0,s.jsx)(n.code,{children:"__mocks__"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"cleaning-up-between-tests",children:"Cleaning up between tests"}),"\n",(0,s.jsxs)(n.p,{children:["To clear the record of calls to the mock constructor function and its methods, we call ",(0,s.jsx)(n.a,{href:"/ja/docs/next/mock-function-api#mockfnmockclear",children:(0,s.jsx)(n.code,{children:"mockClear()"})})," in the ",(0,s.jsx)(n.code,{children:"beforeEach()"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"beforeEach(() => {\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"complete-example",children:"Complete example"}),"\n",(0,s.jsxs)(n.p,{children:["Here's a complete test file which uses the module factory parameter to ",(0,s.jsx)(n.code,{children:"jest.mock"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="sound-player-consumer.test.js"',children:"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n  });\n});\n\nbeforeEach(() => {\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n\nit('The consumer should be able to call new() on SoundPlayer', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  // Ensure constructor created the object:\n  expect(soundPlayerConsumer).toBeTruthy();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43023:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>l});var t=o(63696);const s={},a=t.createContext(s);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);