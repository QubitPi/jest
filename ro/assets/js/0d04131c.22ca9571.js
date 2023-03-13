"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[88545],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,h=u["".concat(o,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(25773),i=(n(27378),n(35318));const r={id:"timer-mocks",title:"Timer Mocks"},s=void 0,l={unversionedId:"timer-mocks",id:"version-27.x/timer-mocks",title:"Timer Mocks",description:"The native timer functions (i.e., setTimeout, setInterval, clearTimeout, clearInterval) are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. Great Scott!",source:"@site/versioned_docs/version-27.x/TimerMocks.md",sourceDirName:".",slug:"/timer-mocks",permalink:"/jest/ro/docs/27.x/timer-mocks",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"27.x",lastUpdatedBy:"Jack",lastUpdatedAt:1678695180,formattedLastUpdatedAt:"13 mar. 2023",frontMatter:{id:"timer-mocks",title:"Timer Mocks"},sidebar:"docs",previous:{title:"An Async Example",permalink:"/jest/ro/docs/27.x/tutorial-async"},next:{title:"Manual Mocks",permalink:"/jest/ro/docs/27.x/manual-mocks"}},o={},m=[{value:"Run All Timers",id:"run-all-timers",level:2},{value:"Run Pending Timers",id:"run-pending-timers",level:2},{value:"Advance Timers by Time",id:"advance-timers-by-time",level:2}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The native timer functions (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clearTimeout"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clearInterval"),") are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QZoJ2Pt27BY"},"Great Scott!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="timerGame.js"',title:'"timerGame.js"'},"'use strict';\n\nfunction timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',title:'"__tests__/timerGame-test.js"'},"'use strict';\n\njest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ntest('waits 1 second before ending the game', () => {\n  const timerGame = require('../timerGame');\n  timerGame();\n\n  expect(setTimeout).toHaveBeenCalledTimes(1);\n  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n});\n")),(0,i.kt)("p",null,"Here we enable fake timers by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.useFakeTimers()"),". This mocks out ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout")," and other timer functions with mock functions. Timers can be restored to their normal behavior with ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.useRealTimers()"),"."),(0,i.kt)("p",null,"While you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.useFakeTimers()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.useRealTimers()")," from anywhere (top level, inside an ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," block, etc.), it is a ",(0,i.kt)("strong",{parentName:"p"},"global operation")," and will affect other tests within the same file. Additionally, you need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.useFakeTimers()")," to reset internal counters before each test. If you plan to not use fake timers in all your tests, you will want to clean up manually, as otherwise the faked timers will leak across tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"afterEach(() => {\n  jest.useRealTimers();\n});\n\ntest('do something with fake timers', () => {\n  jest.useFakeTimers();\n  // ...\n});\n\ntest('do something with real timers', () => {\n  // ...\n});\n")),(0,i.kt)("p",null,"Currently, two implementations of the fake timers are included - ",(0,i.kt)("inlineCode",{parentName:"p"},"modern")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"legacy"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"modern")," is the default one. See ",(0,i.kt)("a",{parentName:"p",href:"/jest/ro/docs/27.x/configuration#timers-string"},"configuration")," for how to configure it."),(0,i.kt)("h2",{id:"run-all-timers"},"Run All Timers"),(0,i.kt)("p",null,"Another test we might want to write for this module is one that asserts that the callback is called after 1 second. To do this, we're going to use Jest's timer control APIs to fast-forward time right in the middle of the test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"jest.useFakeTimers();\ntest('calls the callback after 1 second', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.runAllTimers();\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n")),(0,i.kt)("h2",{id:"run-pending-timers"},"Run Pending Timers"),(0,i.kt)("p",null,"There are also scenarios where you might have a recursive timer -- that is a timer that sets a new timer in its own callback. For these, running all the timers would be an endless loop, throwing the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Ran 100000 timers, and there are still more! Assuming we've hit an infinite recursion and bailing out...\n")),(0,i.kt)("p",null,"So something like ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.runAllTimers()")," is not desirable. For these cases you might use ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.runOnlyPendingTimers()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="infiniteTimerGame.js"',title:'"infiniteTimerGame.js"'},"'use strict';\n\nfunction infiniteTimerGame(callback) {\n  console.log('Ready....go!');\n\n  setTimeout(() => {\n    console.log(\"Time's up! 10 seconds before the next game starts...\");\n    callback && callback();\n\n    // Schedule the next game in 10 seconds\n    setTimeout(() => {\n      infiniteTimerGame(callback);\n    }, 10000);\n  }, 1000);\n}\n\nmodule.exports = infiniteTimerGame;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/infiniteTimerGame-test.js"',title:'"__tests__/infiniteTimerGame-test.js"'},"'use strict';\n\njest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ndescribe('infiniteTimerGame', () => {\n  test('schedules a 10-second timer after 1 second', () => {\n    const infiniteTimerGame = require('../infiniteTimerGame');\n    const callback = jest.fn();\n\n    infiniteTimerGame(callback);\n\n    // At this point in time, there should have been a single call to\n    // setTimeout to schedule the end of the game in 1 second.\n    expect(setTimeout).toHaveBeenCalledTimes(1);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n\n    // Fast forward and exhaust only currently pending timers\n    // (but not any new timers that get created during that process)\n    jest.runOnlyPendingTimers();\n\n    // At this point, our 1-second timer should have fired its callback\n    expect(callback).toBeCalled();\n\n    // And it should have created a new timer to start the game over in\n    // 10 seconds\n    expect(setTimeout).toHaveBeenCalledTimes(2);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);\n  });\n});\n")),(0,i.kt)("h2",{id:"advance-timers-by-time"},"Advance Timers by Time"),(0,i.kt)("p",null,"Another possibility is use ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.advanceTimersByTime(msToRun)"),". When this API is called, all timers are advanced by ",(0,i.kt)("inlineCode",{parentName:"p"},"msToRun"),' milliseconds. All pending "macro-tasks" that have been queued via setTimeout() or setInterval(), and would be executed during this time frame, will be executed. Additionally, if those macro-tasks schedule new macro-tasks that would be executed within the same time frame, those will be executed until there are no more macro-tasks remaining in the queue that should be run within msToRun milliseconds.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="timerGame.js"',title:'"timerGame.js"'},"'use strict';\n\nfunction timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',title:'"__tests__/timerGame-test.js"'},"jest.useFakeTimers();\nit('calls the callback after 1 second via advanceTimersByTime', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.advanceTimersByTime(1000);\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n")),(0,i.kt)("p",null,"Lastly, it may occasionally be useful in some tests to be able to clear all of the pending timers. For this, we have ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.clearAllTimers()"),"."),(0,i.kt)("p",null,"The code for this example is available at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/timer"},"examples/timer"),"."))}u.isMDXComponent=!0}}]);