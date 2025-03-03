"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5381],{25066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"timer-mocks","title":"Timer Mocks","description":"The native timer functions (i.e., setTimeout(), setInterval(), clearTimeout(), clearInterval()) are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. Great Scott!","source":"@site/versioned_docs/version-29.6/TimerMocks.md","sourceDirName":".","slug":"/timer-mocks","permalink":"/uk/docs/29.6/timer-mocks","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/uk","tags":[],"version":"29.6","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1741006263000,"frontMatter":{"id":"timer-mocks","title":"Timer Mocks"},"sidebar":"docs","previous":{"title":"An Async Example","permalink":"/uk/docs/29.6/tutorial-async"},"next":{"title":"Manual Mocks","permalink":"/uk/docs/29.6/manual-mocks"}}');var a=t(62540),s=t(43023);const o={id:"timer-mocks",title:"Timer Mocks"},r=void 0,l={},c=[{value:"Enable Fake Timers",id:"enable-fake-timers",level:2},{value:"Run All Timers",id:"run-all-timers",level:2},{value:"Run Pending Timers",id:"run-pending-timers",level:2},{value:"Advance Timers by Time",id:"advance-timers-by-time",level:2},{value:"Selective Faking",id:"selective-faking",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The native timer functions (i.e., ",(0,a.jsx)(n.code,{children:"setTimeout()"}),", ",(0,a.jsx)(n.code,{children:"setInterval()"}),", ",(0,a.jsx)(n.code,{children:"clearTimeout()"}),", ",(0,a.jsx)(n.code,{children:"clearInterval()"}),") are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=QZoJ2Pt27BY",children:"Great Scott!"})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Also see ",(0,a.jsx)(n.a,{href:"/uk/docs/29.6/jest-object#fake-timers",children:"Fake Timers API"})," documentation."]})}),"\n",(0,a.jsx)(n.h2,{id:"enable-fake-timers",children:"Enable Fake Timers"}),"\n",(0,a.jsxs)(n.p,{children:["In the following example we enable fake timers by calling ",(0,a.jsx)(n.code,{children:"jest.useFakeTimers()"}),". This is replacing the original implementation of ",(0,a.jsx)(n.code,{children:"setTimeout()"})," and other timer functions. Timers can be restored to their normal behavior with ",(0,a.jsx)(n.code,{children:"jest.useRealTimers()"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ntest('waits 1 second before ending the game', () => {\n  const timerGame = require('../timerGame');\n  timerGame();\n\n  expect(setTimeout).toHaveBeenCalledTimes(1);\n  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"run-all-timers",children:"Run All Timers"}),"\n",(0,a.jsx)(n.p,{children:"Another test we might want to write for this module is one that asserts that the callback is called after 1 second. To do this, we're going to use Jest's timer control APIs to fast-forward time right in the middle of the test:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"jest.useFakeTimers();\ntest('calls the callback after 1 second', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toHaveBeenCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.runAllTimers();\n\n  // Now our callback should have been called!\n  expect(callback).toHaveBeenCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"run-pending-timers",children:"Run Pending Timers"}),"\n",(0,a.jsx)(n.p,{children:'There are also scenarios where you might have a recursive timer \u2013 that is a timer that sets a new timer in its own callback. For these, running all the timers would be an endless loop, throwing the following error: "Aborting after running 100000 timers, assuming an infinite loop!"'}),"\n",(0,a.jsxs)(n.p,{children:["If that is your case, using ",(0,a.jsx)(n.code,{children:"jest.runOnlyPendingTimers()"})," will solve the problem:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="infiniteTimerGame.js"',children:"function infiniteTimerGame(callback) {\n  console.log('Ready....go!');\n\n  setTimeout(() => {\n    console.log(\"Time's up! 10 seconds before the next game starts...\");\n    callback && callback();\n\n    // Schedule the next game in 10 seconds\n    setTimeout(() => {\n      infiniteTimerGame(callback);\n    }, 10000);\n  }, 1000);\n}\n\nmodule.exports = infiniteTimerGame;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/infiniteTimerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ndescribe('infiniteTimerGame', () => {\n  test('schedules a 10-second timer after 1 second', () => {\n    const infiniteTimerGame = require('../infiniteTimerGame');\n    const callback = jest.fn();\n\n    infiniteTimerGame(callback);\n\n    // At this point in time, there should have been a single call to\n    // setTimeout to schedule the end of the game in 1 second.\n    expect(setTimeout).toHaveBeenCalledTimes(1);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n\n    // Fast forward and exhaust only currently pending timers\n    // (but not any new timers that get created during that process)\n    jest.runOnlyPendingTimers();\n\n    // At this point, our 1-second timer should have fired its callback\n    expect(callback).toHaveBeenCalled();\n\n    // And it should have created a new timer to start the game over in\n    // 10 seconds\n    expect(setTimeout).toHaveBeenCalledTimes(2);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);\n  });\n});\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"For debugging or any other reason you can change the limit of timers that will be run before throwing an error:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"jest.useFakeTimers({timerLimit: 100});\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"advance-timers-by-time",children:"Advance Timers by Time"}),"\n",(0,a.jsxs)(n.p,{children:["Another possibility is use ",(0,a.jsx)(n.code,{children:"jest.advanceTimersByTime(msToRun)"}),". When this API is called, all timers are advanced by ",(0,a.jsx)(n.code,{children:"msToRun"}),' milliseconds. All pending "macro-tasks" that have been queued via setTimeout() or setInterval(), and would be executed during this time frame, will be executed. Additionally, if those macro-tasks schedule new macro-tasks that would be executed within the same time frame, those will be executed until there are no more macro-tasks remaining in the queue that should be run within msToRun milliseconds.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\nit('calls the callback after 1 second via advanceTimersByTime', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toHaveBeenCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.advanceTimersByTime(1000);\n\n  // Now our callback should have been called!\n  expect(callback).toHaveBeenCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Lastly, it may occasionally be useful in some tests to be able to clear all of the pending timers. For this, we have ",(0,a.jsx)(n.code,{children:"jest.clearAllTimers()"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"selective-faking",children:"Selective Faking"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes your code may require to avoid overwriting the original implementation of one or another API. If that is the case, you can use ",(0,a.jsx)(n.code,{children:"doNotFake"})," option. For example, here is how you could provide a custom mock function for ",(0,a.jsx)(n.code,{children:"performance.mark()"})," in jsdom environment:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/**\n * @jest-environment jsdom\n */\n\nconst mockPerformanceMark = jest.fn();\nwindow.performance.mark = mockPerformanceMark;\n\ntest('allows mocking `performance.mark()`', () => {\n  jest.useFakeTimers({doNotFake: ['performance']});\n\n  expect(window.performance.mark).toBe(mockPerformanceMark);\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(63696);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);