"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7014],{83344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"timer-mocks","title":"Timer Mocks","description":"The native timer functions (i.e., setTimeout(), setInterval(), clearTimeout(), clearInterval()) are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. Great Scott!","source":"@site/../docs/TimerMocks.md","sourceDirName":".","slug":"/timer-mocks","permalink":"/ru/docs/next/timer-mocks","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ru","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738910716000,"frontMatter":{"id":"timer-mocks","title":"Timer Mocks"},"sidebar":"docs","previous":{"title":"An Async Example","permalink":"/ru/docs/next/tutorial-async"},"next":{"title":"Manual Mocks","permalink":"/ru/docs/next/manual-mocks"}}');var i=t(62540),s=t(43023);const l={id:"timer-mocks",title:"Timer Mocks"},c=void 0,o={},r=[{value:"Enable Fake Timers",id:"enable-fake-timers",level:2},{value:"Run All Timers",id:"run-all-timers",level:2},{value:"Run Pending Timers",id:"run-pending-timers",level:2},{value:"Advance Timers by Time",id:"advance-timers-by-time",level:2},{value:"Advance Timers to the next Frame",id:"advance-timers-to-the-next-frame",level:2},{value:"Selective Faking",id:"selective-faking",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The native timer functions (i.e., ",(0,i.jsx)(n.code,{children:"setTimeout()"}),", ",(0,i.jsx)(n.code,{children:"setInterval()"}),", ",(0,i.jsx)(n.code,{children:"clearTimeout()"}),", ",(0,i.jsx)(n.code,{children:"clearInterval()"}),") are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=QZoJ2Pt27BY",children:"Great Scott!"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Also see ",(0,i.jsx)(n.a,{href:"/ru/docs/next/jest-object#fake-timers",children:"Fake Timers API"})," documentation."]})}),"\n",(0,i.jsx)(n.h2,{id:"enable-fake-timers",children:"Enable Fake Timers"}),"\n",(0,i.jsxs)(n.p,{children:["In the following example we enable fake timers by calling ",(0,i.jsx)(n.code,{children:"jest.useFakeTimers()"}),". This is replacing the original implementation of ",(0,i.jsx)(n.code,{children:"setTimeout()"})," and other timer functions. Timers can be restored to their normal behavior with ",(0,i.jsx)(n.code,{children:"jest.useRealTimers()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ntest('waits 1 second before ending the game', () => {\n  const timerGame = require('../timerGame');\n  timerGame();\n\n  expect(setTimeout).toHaveBeenCalledTimes(1);\n  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-all-timers",children:"Run All Timers"}),"\n",(0,i.jsx)(n.p,{children:"Another test we might want to write for this module is one that asserts that the callback is called after 1 second. To do this, we're going to use Jest's timer control APIs to fast-forward time right in the middle of the test:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"jest.useFakeTimers();\ntest('calls the callback after 1 second', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toHaveBeenCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.runAllTimers();\n\n  // Now our callback should have been called!\n  expect(callback).toHaveBeenCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-pending-timers",children:"Run Pending Timers"}),"\n",(0,i.jsx)(n.p,{children:'There are also scenarios where you might have a recursive timer \u2013 that is a timer that sets a new timer in its own callback. For these, running all the timers would be an endless loop, throwing the following error: "Aborting after running 100000 timers, assuming an infinite loop!"'}),"\n",(0,i.jsxs)(n.p,{children:["If that is your case, using ",(0,i.jsx)(n.code,{children:"jest.runOnlyPendingTimers()"})," will solve the problem:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="infiniteTimerGame.js"',children:"function infiniteTimerGame(callback) {\n  console.log('Ready....go!');\n\n  setTimeout(() => {\n    console.log(\"Time's up! 10 seconds before the next game starts...\");\n    callback && callback();\n\n    // Schedule the next game in 10 seconds\n    setTimeout(() => {\n      infiniteTimerGame(callback);\n    }, 10000);\n  }, 1000);\n}\n\nmodule.exports = infiniteTimerGame;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/infiniteTimerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ndescribe('infiniteTimerGame', () => {\n  test('schedules a 10-second timer after 1 second', () => {\n    const infiniteTimerGame = require('../infiniteTimerGame');\n    const callback = jest.fn();\n\n    infiniteTimerGame(callback);\n\n    // At this point in time, there should have been a single call to\n    // setTimeout to schedule the end of the game in 1 second.\n    expect(setTimeout).toHaveBeenCalledTimes(1);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n\n    // Fast forward and exhaust only currently pending timers\n    // (but not any new timers that get created during that process)\n    jest.runOnlyPendingTimers();\n\n    // At this point, our 1-second timer should have fired its callback\n    expect(callback).toHaveBeenCalled();\n\n    // And it should have created a new timer to start the game over in\n    // 10 seconds\n    expect(setTimeout).toHaveBeenCalledTimes(2);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);\n  });\n});\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"For debugging or any other reason you can change the limit of timers that will be run before throwing an error:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"jest.useFakeTimers({timerLimit: 100});\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"advance-timers-by-time",children:"Advance Timers by Time"}),"\n",(0,i.jsxs)(n.p,{children:["Another possibility is use ",(0,i.jsx)(n.code,{children:"jest.advanceTimersByTime(msToRun)"}),". When this API is called, all timers are advanced by ",(0,i.jsx)(n.code,{children:"msToRun"}),' milliseconds. All pending "macro-tasks" that have been queued via setTimeout() or setInterval(), and would be executed during this time frame, will be executed. Additionally, if those macro-tasks schedule new macro-tasks that would be executed within the same time frame, those will be executed until there are no more macro-tasks remaining in the queue that should be run within msToRun milliseconds.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\nit('calls the callback after 1 second via advanceTimersByTime', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toHaveBeenCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.advanceTimersByTime(1000);\n\n  // Now our callback should have been called!\n  expect(callback).toHaveBeenCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Lastly, it may occasionally be useful in some tests to be able to clear all of the pending timers. For this, we have ",(0,i.jsx)(n.code,{children:"jest.clearAllTimers()"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"advance-timers-to-the-next-frame",children:"Advance Timers to the next Frame"}),"\n",(0,i.jsxs)(n.p,{children:["In applications, often you want to schedule work inside of an animation frame (with ",(0,i.jsx)(n.code,{children:"requestAnimationFrame"}),"). We expose a convenience method ",(0,i.jsx)(n.code,{children:"jest.advanceTimersToNextFrame()"})," to advance all timers enough milliseconds to execute all actively scheduled animation frames."]}),"\n",(0,i.jsxs)(n.p,{children:["For mock timing purposes, animation frames are executed every ",(0,i.jsx)(n.code,{children:"16ms"})," (mapping to roughly ",(0,i.jsx)(n.code,{children:"60"})," frames per second) after the clock starts. When you schedule a callback in an animation frame (with ",(0,i.jsx)(n.code,{children:"requestAnimationFrame(callback)"}),"), the ",(0,i.jsx)(n.code,{children:"callback"})," will be called when the clock has advanced ",(0,i.jsx)(n.code,{children:"16ms"}),". ",(0,i.jsx)(n.code,{children:"jest.advanceTimersToNextFrame()"})," will advance the clock just enough to get to the next ",(0,i.jsx)(n.code,{children:"16ms"})," increment. If the clock has already advanced ",(0,i.jsx)(n.code,{children:"6ms"})," since a animation frame ",(0,i.jsx)(n.code,{children:"callback"})," was scheduled, then the clock will be advanced by ",(0,i.jsx)(n.code,{children:"10ms"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"jest.useFakeTimers();\nit('calls the animation frame callback after advanceTimersToNextFrame()', () => {\n  const callback = jest.fn();\n\n  requestAnimationFrame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toHaveBeenCalled();\n\n  jest.advanceTimersToNextFrame();\n\n  // Now our callback should have been called!\n  expect(callback).toHaveBeenCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"selective-faking",children:"Selective Faking"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes your code may require to avoid overwriting the original implementation of one or another API. If that is the case, you can use ",(0,i.jsx)(n.code,{children:"doNotFake"})," option. For example, here is how you could provide a custom mock function for ",(0,i.jsx)(n.code,{children:"performance.mark()"})," in jsdom environment:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/**\n * @jest-environment jsdom\n */\n\nconst mockPerformanceMark = jest.fn();\nwindow.performance.mark = mockPerformanceMark;\n\ntest('allows mocking `performance.mark()`', () => {\n  jest.useFakeTimers({doNotFake: ['performance']});\n\n  expect(window.performance.mark).toBe(mockPerformanceMark);\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var a=t(63696);const i={},s=a.createContext(i);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);