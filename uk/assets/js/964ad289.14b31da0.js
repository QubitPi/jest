"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[27511],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const r={id:"using-matchers",title:"Using Matchers"},i=void 0,s={unversionedId:"using-matchers",id:"version-29.1/using-matchers",title:"Using Matchers",description:'Jest uses "matchers" to let you test values in different ways. This document will introduce some commonly used matchers. For the full list, see the expect API doc.',source:"@site/versioned_docs/version-29.1/UsingMatchers.md",sourceDirName:".",slug:"/using-matchers",permalink:"/jest/uk/docs/29.1/using-matchers",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"29.1",lastUpdatedBy:"Jack",lastUpdatedAt:1680744104,formattedLastUpdatedAt:"6 \u043a\u0432\u0456\u0442. 2023 \u0440.",frontMatter:{id:"using-matchers",title:"Using Matchers"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/jest/uk/docs/29.1/getting-started"},next:{title:"Testing Asynchronous Code",permalink:"/jest/uk/docs/29.1/asynchronous"}},l={},p=[{value:"Common Matchers",id:"common-matchers",level:2},{value:"Truthiness",id:"truthiness",level:2},{value:"Numbers",id:"numbers",level:2},{value:"Strings",id:"strings",level:2},{value:"Arrays and iterables",id:"arrays-and-iterables",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"And More",id:"and-more",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Jest uses "matchers" to let you test values in different ways. This document will introduce some commonly used matchers. For the full list, see the ',(0,o.kt)("a",{parentName:"p",href:"/jest/uk/docs/29.1/expect"},(0,o.kt)("inlineCode",{parentName:"a"},"expect")," API doc"),"."),(0,o.kt)("h2",{id:"common-matchers"},"Common Matchers"),(0,o.kt)("p",null,"The simplest way to test a value is with exact equality."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('two plus two is four', () => {\n  expect(2 + 2).toBe(4);\n});\n")),(0,o.kt)("p",null,"In this code, ",(0,o.kt)("inlineCode",{parentName:"p"},"expect(2 + 2)"),' returns an "expectation" object. You typically won\'t do much with these expectation objects except call matchers on them. In this code, ',(0,o.kt)("inlineCode",{parentName:"p"},".toBe(4)")," is the matcher. When Jest runs, it tracks all the failing matchers so that it can print out nice error messages for you."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toBe")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.is")," to test exact equality. If you want to check the value of an object, use ",(0,o.kt)("inlineCode",{parentName:"p"},"toEqual"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('object assignment', () => {\n  const data = {one: 1};\n  data['two'] = 2;\n  expect(data).toEqual({one: 1, two: 2});\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toEqual")," recursively checks every field of an object or array."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"toEqual")," ignores object keys with ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," properties, ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," array items, array sparseness, or object type mismatch. To take these into account use ",(0,o.kt)("inlineCode",{parentName:"p"},"toStrictEqual")," instead.")),(0,o.kt)("p",null,"You can also test for the opposite of a matcher using ",(0,o.kt)("inlineCode",{parentName:"p"},"not"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('adding positive numbers is not zero', () => {\n  for (let a = 1; a < 10; a++) {\n    for (let b = 1; b < 10; b++) {\n      expect(a + b).not.toBe(0);\n    }\n  }\n});\n")),(0,o.kt)("h2",{id:"truthiness"},"Truthiness"),(0,o.kt)("p",null,"In tests, you sometimes need to distinguish between ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toBeNull")," matches only ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toBeUndefined")," matches only ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toBeDefined")," is the opposite of ",(0,o.kt)("inlineCode",{parentName:"li"},"toBeUndefined")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toBeTruthy")," matches anything that an ",(0,o.kt)("inlineCode",{parentName:"li"},"if")," statement treats as true"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toBeFalsy")," matches anything that an ",(0,o.kt)("inlineCode",{parentName:"li"},"if")," statement treats as false")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('null', () => {\n  const n = null;\n  expect(n).toBeNull();\n  expect(n).toBeDefined();\n  expect(n).not.toBeUndefined();\n  expect(n).not.toBeTruthy();\n  expect(n).toBeFalsy();\n});\n\ntest('zero', () => {\n  const z = 0;\n  expect(z).not.toBeNull();\n  expect(z).toBeDefined();\n  expect(z).not.toBeUndefined();\n  expect(z).not.toBeTruthy();\n  expect(z).toBeFalsy();\n});\n")),(0,o.kt)("p",null,"You should use the matcher that most precisely corresponds to what you want your code to be doing."),(0,o.kt)("h2",{id:"numbers"},"Numbers"),(0,o.kt)("p",null,"Most ways of comparing numbers have matcher equivalents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('two plus two', () => {\n  const value = 2 + 2;\n  expect(value).toBeGreaterThan(3);\n  expect(value).toBeGreaterThanOrEqual(3.5);\n  expect(value).toBeLessThan(5);\n  expect(value).toBeLessThanOrEqual(4.5);\n\n  // toBe and toEqual are equivalent for numbers\n  expect(value).toBe(4);\n  expect(value).toEqual(4);\n});\n")),(0,o.kt)("p",null,"For floating point equality, use ",(0,o.kt)("inlineCode",{parentName:"p"},"toBeCloseTo")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"toEqual"),", because you don't want a test to depend on a tiny rounding error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('adding floating point numbers', () => {\n  const value = 0.1 + 0.2;\n  //expect(value).toBe(0.3);           This won't work because of rounding error\n  expect(value).toBeCloseTo(0.3); // This works.\n});\n")),(0,o.kt)("h2",{id:"strings"},"Strings"),(0,o.kt)("p",null,"You can check strings against regular expressions with ",(0,o.kt)("inlineCode",{parentName:"p"},"toMatch"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('there is no I in team', () => {\n  expect('team').not.toMatch(/I/);\n});\n\ntest('but there is a \"stop\" in Christoph', () => {\n  expect('Christoph').toMatch(/stop/);\n});\n")),(0,o.kt)("h2",{id:"arrays-and-iterables"},"Arrays and iterables"),(0,o.kt)("p",null,"You can check if an array or iterable contains a particular item using ",(0,o.kt)("inlineCode",{parentName:"p"},"toContain"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const shoppingList = [\n  'diapers',\n  'kleenex',\n  'trash bags',\n  'paper towels',\n  'milk',\n];\n\ntest('the shopping list has milk on it', () => {\n  expect(shoppingList).toContain('milk');\n  expect(new Set(shoppingList)).toContain('milk');\n});\n")),(0,o.kt)("h2",{id:"exceptions"},"Exceptions"),(0,o.kt)("p",null,"If you want to test whether a particular function throws an error when it's called, use ",(0,o.kt)("inlineCode",{parentName:"p"},"toThrow"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function compileAndroidCode() {\n  throw new Error('you are using the wrong JDK!');\n}\n\ntest('compiling android goes as expected', () => {\n  expect(() => compileAndroidCode()).toThrow();\n  expect(() => compileAndroidCode()).toThrow(Error);\n\n  // You can also use a string that must be contained in the error message or a regexp\n  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');\n  expect(() => compileAndroidCode()).toThrow(/JDK/);\n\n  // Or you can match an exact error message using a regexp like below\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass\n});\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The function that throws an exception needs to be invoked within a wrapping function otherwise the ",(0,o.kt)("inlineCode",{parentName:"p"},"toThrow")," assertion will fail.")),(0,o.kt)("h2",{id:"and-more"},"And More"),(0,o.kt)("p",null,"This is just a taste. For a complete list of matchers, check out the ",(0,o.kt)("a",{parentName:"p",href:"/jest/uk/docs/29.1/expect"},"reference docs"),"."),(0,o.kt)("p",null,"Once you've learned about the matchers that are available, a good next step is to check out how Jest lets you ",(0,o.kt)("a",{parentName:"p",href:"/jest/uk/docs/29.1/asynchronous"},"test asynchronous code"),"."))}u.isMDXComponent=!0}}]);