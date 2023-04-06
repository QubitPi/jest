"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[11375],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,k=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(25773),i=(n(27378),n(35318));const r={id:"timer-mocks",title:"Timer Mocks"},o=void 0,s={unversionedId:"timer-mocks",id:"version-29.3/timer-mocks",title:"Timer Mocks",description:"The native timer functions (i.e., setTimeout(), setInterval(), clearTimeout(), clearInterval()) are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. Great Scott!",source:"@site/versioned_docs/version-29.3/TimerMocks.md",sourceDirName:".",slug:"/timer-mocks",permalink:"/jest/es-ES/docs/29.3/timer-mocks",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"29.3",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"6 abr 2023",frontMatter:{id:"timer-mocks",title:"Timer Mocks"},sidebar:"docs",previous:{title:"An Async Example",permalink:"/jest/es-ES/docs/29.3/tutorial-async"},next:{title:"Manual Mocks",permalink:"/jest/es-ES/docs/29.3/manual-mocks"}},l={},m=[{value:"Enable Fake Timers",id:"enable-fake-timers",level:2},{value:"Run All Timers",id:"run-all-timers",level:2},{value:"Run Pending Timers",id:"run-pending-timers",level:2},{value:"Advance Timers by Time",id:"advance-timers-by-time",level:2},{value:"Selective Faking",id:"selective-faking",level:2}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The native timer functions (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clearTimeout()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clearInterval()"),") are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QZoJ2Pt27BY"},"Great Scott!")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Also see ",(0,i.kt)("a",{parentName:"p",href:"/jest/es-ES/docs/29.3/jest-object#fake-timers"},"Fake Timers API")," documentation.")),(0,i.kt)("h2",{id:"enable-fake-timers"},"Enable Fake Timers"),(0,i.kt)("p",null,"In the following example we enable fake timers by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.useFakeTimers()"),". This is replacing the original implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout()")," and other timer functions. Timers can be restored to their normal behavior with ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.useRealTimers()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="timerGame.js"',title:'"timerGame.js"'},"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',title:'"__tests__/timerGame-test.js"'},"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ntest('waits 1 second before ending the game', () => {\n  const timerGame = require('../timerGame');\n  timerGame();\n\n  expect(setTimeout).toHaveBeenCalledTimes(1);\n  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n});\n")),(0,i.kt)("h2",{id:"run-all-timers"},"Run All Timers"),(0,i.kt)("p",null,"Another test we might want to write for this module is one that asserts that the callback is called after 1 second. To do this, we're going to use Jest's timer control APIs to fast-forward time right in the middle of the test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"jest.useFakeTimers();\ntest('calls the callback after 1 second', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.runAllTimers();\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n")),(0,i.kt)("h2",{id:"run-pending-timers"},"Run Pending Timers"),(0,i.kt)("p",null,'There are also scenarios where you might have a recursive timer \u2013 that is a timer that sets a new timer in its own callback. For these, running all the timers would be an endless loop, throwing the following error: "Aborting after running 100000 timers, assuming an infinite loop!"'),(0,i.kt)("p",null,"If that is your case, using ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.runOnlyPendingTimers()")," will solve the problem:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="infiniteTimerGame.js"',title:'"infiniteTimerGame.js"'},"function infiniteTimerGame(callback) {\n  console.log('Ready....go!');\n\n  setTimeout(() => {\n    console.log(\"Time's up! 10 seconds before the next game starts...\");\n    callback && callback();\n\n    // Schedule the next game in 10 seconds\n    setTimeout(() => {\n      infiniteTimerGame(callback);\n    }, 10000);\n  }, 1000);\n}\n\nmodule.exports = infiniteTimerGame;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/infiniteTimerGame-test.js"',title:'"__tests__/infiniteTimerGame-test.js"'},"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ndescribe('infiniteTimerGame', () => {\n  test('schedules a 10-second timer after 1 second', () => {\n    const infiniteTimerGame = require('../infiniteTimerGame');\n    const callback = jest.fn();\n\n    infiniteTimerGame(callback);\n\n    // At this point in time, there should have been a single call to\n    // setTimeout to schedule the end of the game in 1 second.\n    expect(setTimeout).toHaveBeenCalledTimes(1);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n\n    // Fast forward and exhaust only currently pending timers\n    // (but not any new timers that get created during that process)\n    jest.runOnlyPendingTimers();\n\n    // At this point, our 1-second timer should have fired its callback\n    expect(callback).toBeCalled();\n\n    // And it should have created a new timer to start the game over in\n    // 10 seconds\n    expect(setTimeout).toHaveBeenCalledTimes(2);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);\n  });\n});\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For debugging or any other reason you can change the limit of timers that will be run before throwing an error:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"jest.useFakeTimers({timerLimit: 100});\n"))),(0,i.kt)("h2",{id:"advance-timers-by-time"},"Advance Timers by Time"),(0,i.kt)("p",null,"Another possibility is use ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.advanceTimersByTime(msToRun)"),". When this API is called, all timers are advanced by ",(0,i.kt)("inlineCode",{parentName:"p"},"msToRun"),' milliseconds. All pending "macro-tasks" that have been queued via setTimeout() or setInterval(), and would be executed during this time frame, will be executed. Additionally, if those macro-tasks schedule new macro-tasks that would be executed within the same time frame, those will be executed until there are no more macro-tasks remaining in the queue that should be run within msToRun milliseconds.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="timerGame.js"',title:'"timerGame.js"'},"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',title:'"__tests__/timerGame-test.js"'},"jest.useFakeTimers();\nit('calls the callback after 1 second via advanceTimersByTime', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.advanceTimersByTime(1000);\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n")),(0,i.kt)("p",null,"Lastly, it may occasionally be useful in some tests to be able to clear all of the pending timers. For this, we have ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.clearAllTimers()"),"."),(0,i.kt)("h2",{id:"selective-faking"},"Selective Faking"),(0,i.kt)("p",null,"Sometimes your code may require to avoid overwriting the original implementation of one or another API. If that is the case, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"doNotFake")," option. For example, here is how you could provide a custom mock function for ",(0,i.kt)("inlineCode",{parentName:"p"},"performance.mark()")," in jsdom environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @jest-environment jsdom\n */\n\nconst mockPerformanceMark = jest.fn();\nwindow.performance.mark = mockPerformanceMark;\n\ntest('allows mocking `performance.mark()`', () => {\n  jest.useFakeTimers({doNotFake: ['performance']});\n\n  expect(window.performance.mark).toBe(mockPerformanceMark);\n});\n")))}u.isMDXComponent=!0}}]);