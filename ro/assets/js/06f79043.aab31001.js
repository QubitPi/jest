"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[652],{40416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"using-matchers","title":"Using Matchers","description":"Jest uses \\"matchers\\" to let you test values in different ways. This document will introduce some commonly used matchers. For the full list, see the expect API doc.","source":"@site/versioned_docs/version-29.4/UsingMatchers.md","sourceDirName":".","slug":"/using-matchers","permalink":"/ro/docs/29.4/using-matchers","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ro","tags":[],"version":"29.4","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1741011166000,"frontMatter":{"id":"using-matchers","title":"Using Matchers"},"sidebar":"docs","previous":{"title":"Getting Started","permalink":"/ro/docs/29.4/getting-started"},"next":{"title":"Testing Asynchronous Code","permalink":"/ro/docs/29.4/asynchronous"}}');var o=t(62540),r=t(43023);const i={id:"using-matchers",title:"Using Matchers"},c=void 0,a={},l=[{value:"Common Matchers",id:"common-matchers",level:2},{value:"Truthiness",id:"truthiness",level:2},{value:"Numbers",id:"numbers",level:2},{value:"Strings",id:"strings",level:2},{value:"Arrays and iterables",id:"arrays-and-iterables",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"And More",id:"and-more",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:['Jest uses "matchers" to let you test values in different ways. This document will introduce some commonly used matchers. For the full list, see the ',(0,o.jsxs)(n.a,{href:"/ro/docs/29.4/expect",children:[(0,o.jsx)(n.code,{children:"expect"})," API doc"]}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"common-matchers",children:"Common Matchers"}),"\n",(0,o.jsx)(n.p,{children:"The simplest way to test a value is with exact equality."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('two plus two is four', () => {\n  expect(2 + 2).toBe(4);\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this code, ",(0,o.jsx)(n.code,{children:"expect(2 + 2)"}),' returns an "expectation" object. You typically won\'t do much with these expectation objects except call matchers on them. In this code, ',(0,o.jsx)(n.code,{children:".toBe(4)"})," is the matcher. When Jest runs, it tracks all the failing matchers so that it can print out nice error messages for you."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"toBe"})," uses ",(0,o.jsx)(n.code,{children:"Object.is"})," to test exact equality. If you want to check the value of an object, use ",(0,o.jsx)(n.code,{children:"toEqual"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('object assignment', () => {\n  const data = {one: 1};\n  data['two'] = 2;\n  expect(data).toEqual({one: 1, two: 2});\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"toEqual"})," recursively checks every field of an object or array."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"toEqual"})," ignores object keys with ",(0,o.jsx)(n.code,{children:"undefined"})," properties, ",(0,o.jsx)(n.code,{children:"undefined"})," array items, array sparseness, or object type mismatch. To take these into account use ",(0,o.jsx)(n.code,{children:"toStrictEqual"})," instead."]})}),"\n",(0,o.jsxs)(n.p,{children:["You can also test for the opposite of a matcher using ",(0,o.jsx)(n.code,{children:"not"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('adding positive numbers is not zero', () => {\n  for (let a = 1; a < 10; a++) {\n    for (let b = 1; b < 10; b++) {\n      expect(a + b).not.toBe(0);\n    }\n  }\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"truthiness",children:"Truthiness"}),"\n",(0,o.jsxs)(n.p,{children:["In tests, you sometimes need to distinguish between ",(0,o.jsx)(n.code,{children:"undefined"}),", ",(0,o.jsx)(n.code,{children:"null"}),", and ",(0,o.jsx)(n.code,{children:"false"}),", but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeNull"})," matches only ",(0,o.jsx)(n.code,{children:"null"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeUndefined"})," matches only ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeDefined"})," is the opposite of ",(0,o.jsx)(n.code,{children:"toBeUndefined"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeTruthy"})," matches anything that an ",(0,o.jsx)(n.code,{children:"if"})," statement treats as true"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeFalsy"})," matches anything that an ",(0,o.jsx)(n.code,{children:"if"})," statement treats as false"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('null', () => {\n  const n = null;\n  expect(n).toBeNull();\n  expect(n).toBeDefined();\n  expect(n).not.toBeUndefined();\n  expect(n).not.toBeTruthy();\n  expect(n).toBeFalsy();\n});\n\ntest('zero', () => {\n  const z = 0;\n  expect(z).not.toBeNull();\n  expect(z).toBeDefined();\n  expect(z).not.toBeUndefined();\n  expect(z).not.toBeTruthy();\n  expect(z).toBeFalsy();\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"You should use the matcher that most precisely corresponds to what you want your code to be doing."}),"\n",(0,o.jsx)(n.h2,{id:"numbers",children:"Numbers"}),"\n",(0,o.jsx)(n.p,{children:"Most ways of comparing numbers have matcher equivalents."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('two plus two', () => {\n  const value = 2 + 2;\n  expect(value).toBeGreaterThan(3);\n  expect(value).toBeGreaterThanOrEqual(3.5);\n  expect(value).toBeLessThan(5);\n  expect(value).toBeLessThanOrEqual(4.5);\n\n  // toBe and toEqual are equivalent for numbers\n  expect(value).toBe(4);\n  expect(value).toEqual(4);\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For floating point equality, use ",(0,o.jsx)(n.code,{children:"toBeCloseTo"})," instead of ",(0,o.jsx)(n.code,{children:"toEqual"}),", because you don't want a test to depend on a tiny rounding error."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('adding floating point numbers', () => {\n  const value = 0.1 + 0.2;\n  //expect(value).toBe(0.3);           This won't work because of rounding error\n  expect(value).toBeCloseTo(0.3); // This works.\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"strings",children:"Strings"}),"\n",(0,o.jsxs)(n.p,{children:["You can check strings against regular expressions with ",(0,o.jsx)(n.code,{children:"toMatch"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('there is no I in team', () => {\n  expect('team').not.toMatch(/I/);\n});\n\ntest('but there is a \"stop\" in Christoph', () => {\n  expect('Christoph').toMatch(/stop/);\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"arrays-and-iterables",children:"Arrays and iterables"}),"\n",(0,o.jsxs)(n.p,{children:["You can check if an array or iterable contains a particular item using ",(0,o.jsx)(n.code,{children:"toContain"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const shoppingList = [\n  'diapers',\n  'kleenex',\n  'trash bags',\n  'paper towels',\n  'milk',\n];\n\ntest('the shopping list has milk on it', () => {\n  expect(shoppingList).toContain('milk');\n  expect(new Set(shoppingList)).toContain('milk');\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to test whether a particular function throws an error when it's called, use ",(0,o.jsx)(n.code,{children:"toThrow"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function compileAndroidCode() {\n  throw new Error('you are using the wrong JDK!');\n}\n\ntest('compiling android goes as expected', () => {\n  expect(() => compileAndroidCode()).toThrow();\n  expect(() => compileAndroidCode()).toThrow(Error);\n\n  // You can also use a string that must be contained in the error message or a regexp\n  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');\n  expect(() => compileAndroidCode()).toThrow(/JDK/);\n\n  // Or you can match an exact error message using a regexp like below\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass\n});\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The function that throws an exception needs to be invoked within a wrapping function otherwise the ",(0,o.jsx)(n.code,{children:"toThrow"})," assertion will fail."]})}),"\n",(0,o.jsx)(n.h2,{id:"and-more",children:"And More"}),"\n",(0,o.jsxs)(n.p,{children:["This is just a taste. For a complete list of matchers, check out the ",(0,o.jsx)(n.a,{href:"/ro/docs/29.4/expect",children:"reference docs"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Once you've learned about the matchers that are available, a good next step is to check out how Jest lets you ",(0,o.jsx)(n.a,{href:"/ro/docs/29.4/asynchronous",children:"test asynchronous code"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(63696);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);