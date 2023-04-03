"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[61888],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||s;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(25773),r=(n(27378),n(35318));const s={id:"tutorial-react",title:"Testing React Apps"},o=void 0,i={unversionedId:"tutorial-react",id:"version-26.x/tutorial-react",title:"Testing React Apps",description:"At Facebook, we use Jest to test React applications.",source:"@site/versioned_docs/version-26.x/TutorialReact.md",sourceDirName:".",slug:"/tutorial-react",permalink:"/jest/uk/docs/26.x/tutorial-react",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"26.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680514817,formattedLastUpdatedAt:"3 \u043a\u0432\u0456\u0442. 2023 \u0440.",frontMatter:{id:"tutorial-react",title:"Testing React Apps"},sidebar:"version-26.x/docs",previous:{title:"Architecture",permalink:"/jest/uk/docs/26.x/architecture"},next:{title:"Testing React Native Apps",permalink:"/jest/uk/docs/26.x/tutorial-react-native"}},l={},c=[{value:"Setup",id:"setup",level:2},{value:"Setup with Create React App",id:"setup-with-create-react-app",level:3},{value:"Setup without Create React App",id:"setup-without-create-react-app",level:3},{value:"Snapshot Testing",id:"snapshot-testing",level:3},{value:"Snapshot Testing with Mocks, Enzyme and React 16",id:"snapshot-testing-with-mocks-enzyme-and-react-16",level:4},{value:"DOM Testing",id:"dom-testing",level:3},{value:"react-testing-library",id:"react-testing-library",level:4},{value:"Enzyme",id:"enzyme",level:4},{value:"Custom transformers",id:"custom-transformers",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At Facebook, we use Jest to test ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," applications."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"setup-with-create-react-app"},"Setup with Create React App"),(0,r.kt)("p",null,"If you are new to React, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),". It is ready to use and ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/running-tests/#docsNav"},"ships with Jest"),"! You will only need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"react-test-renderer")," for rendering snapshots."),(0,r.kt)("p",null,"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev react-test-renderer\n")),(0,r.kt)("h3",{id:"setup-without-create-react-app"},"Setup without Create React App"),(0,r.kt)("p",null,"If you have an existing application you'll need to install a few packages to make everything work well together. We are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," package and the ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," babel preset to transform our code inside of the test environment. Also see ",(0,r.kt)("a",{parentName:"p",href:"/jest/uk/docs/26.x/getting-started#using-babel"},"using babel"),"."),(0,r.kt)("p",null,"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n")),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," should look something like this (where ",(0,r.kt)("inlineCode",{parentName:"p"},"<current-version>")," is the actual latest version number for the package). Please add the scripts and jest configuration entries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "react": "<current-version>",\n    "react-dom": "<current-version>"\n  },\n  "devDependencies": {\n    "@babel/preset-env": "<current-version>",\n    "@babel/preset-react": "<current-version>",\n    "babel-jest": "<current-version>",\n    "jest": "<current-version>",\n    "react-test-renderer": "<current-version>"\n  },\n  "scripts": {\n    "test": "jest"\n  }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: ['@babel/preset-env', '@babel/preset-react'],\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"And you're good to go!")),(0,r.kt)("h3",{id:"snapshot-testing"},"Snapshot Testing"),(0,r.kt)("p",null,"Let's create a ",(0,r.kt)("a",{parentName:"p",href:"/jest/uk/docs/26.x/snapshot-testing"},"snapshot test")," for a Link component that renders hyperlinks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Link.js"',title:'"Link.js"'},"import React, {useState} from 'react';\n\nconst STATUS = {\n  HOVERED: 'hovered',\n  NORMAL: 'normal',\n};\n\nconst Link = ({page, children}) => {\n  const [status, setStatus] = useState(STATUS.NORMAL);\n\n  const onMouseEnter = () => {\n    setStatus(STATUS.HOVERED);\n  };\n\n  const onMouseLeave = () => {\n    setStatus(STATUS.NORMAL);\n  };\n\n  return (\n    <a\n      className={status}\n      href={page || '#'}\n      onMouseEnter={onMouseEnter}\n      onMouseLeave={onMouseLeave}\n    >\n      {children}\n    </a>\n  );\n};\n\nexport default Link;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Examples are using Function components, but Class components can be tested in the same way. See ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html#function-and-class-components"},"React: Function and Class Components"),". ",(0,r.kt)("strong",{parentName:"p"},"Reminders")," that with Class components, we expect Jest to be used to test props and not methods directly.")),(0,r.kt)("p",null,"Now let's use React's test renderer and Jest's snapshot feature to interact with the component and capture the rendered output and create a snapshot file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Link.test.js"',title:'"Link.test.js"'},"import React from 'react';\nimport renderer from 'react-test-renderer';\nimport Link from '../Link';\n\ntest('Link changes the class when hovered', () => {\n  const component = renderer.create(\n    <Link page=\"http://www.facebook.com\">Facebook</Link>,\n  );\n  let tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  tree.props.onMouseEnter();\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  tree.props.onMouseLeave();\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n});\n")),(0,r.kt)("p",null,"When you run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"jest"),", this will produce an output file like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/__snapshots__/Link.test.js.snap"',title:'"__tests__/__snapshots__/Link.test.js.snap"'},'exports[`Link changes the class when hovered 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}>\n  Facebook\n</a>\n`;\n\nexports[`Link changes the class when hovered 2`] = `\n<a\n  className="hovered"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}>\n  Facebook\n</a>\n`;\n\nexports[`Link changes the class when hovered 3`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}>\n  Facebook\n</a>\n`;\n')),(0,r.kt)("p",null,"The next time you run the tests, the rendered output will be compared to the previously created snapshot. The snapshot should be committed along with code changes. When a snapshot test fails, you need to inspect whether it is an intended or unintended change. If the change is expected you can invoke Jest with ",(0,r.kt)("inlineCode",{parentName:"p"},"jest -u")," to overwrite the existing snapshot."),(0,r.kt)("p",null,"The code for this example is available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/snapshot"},"examples/snapshot"),"."),(0,r.kt)("h4",{id:"snapshot-testing-with-mocks-enzyme-and-react-16"},"Snapshot Testing with Mocks, Enzyme and React 16"),(0,r.kt)("p",null,"There's a caveat around snapshot testing when using Enzyme and React 16+. If you mock out a module using the following style:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('../SomeDirectory/SomeComponent', () => 'SomeComponent');\n")),(0,r.kt)("p",null,"Then you will see warnings in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Warning: <SomeComponent /> is using uppercase HTML. Always use lowercase HTML tags in React.\n\n# Or:\nWarning: The tag <SomeComponent> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.\n")),(0,r.kt)("p",null,"React 16 triggers these warnings due to how it checks element types, and the mocked module fails these checks. Your options are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Render as text. This way you won't see the props passed to the mock component in the snapshot, but it's straightforward:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('./SomeComponent', () => () => 'SomeComponent');\n"))),(0,r.kt)("li",{parentName:"ol"},"Render as a custom element. DOM \"custom elements\" aren't checked for anything and shouldn't fire warnings. They are lowercase and have a dash in the name.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"jest.mock('./Widget', () => () => <mock-widget />);\n"))),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"react-test-renderer"),". The test renderer doesn't care about element types and will happily accept e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"SomeComponent"),". You could check snapshots using the test renderer, and check component behavior separately using Enzyme."),(0,r.kt)("li",{parentName:"ol"},"Disable warnings all together (should be done in your jest setup file):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('fbjs/lib/warning', () => require('fbjs/lib/emptyFunction'));\n")),"This shouldn't normally be your option of choice as useful warnings could be lost. However, in some cases, for example when testing react-native's components we are rendering react-native tags into the DOM and many warnings are irrelevant. Another option is to swizzle the console.warn and suppress specific warnings.")),(0,r.kt)("h3",{id:"dom-testing"},"DOM Testing"),(0,r.kt)("p",null,"If you'd like to assert, and manipulate your rendered components you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/react-testing-library"},"react-testing-library"),", ",(0,r.kt)("a",{parentName:"p",href:"https://enzymejs.github.io/enzyme/"},"Enzyme"),", or React's ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/test-utils.html"},"TestUtils"),". The following two examples use react-testing-library and Enzyme."),(0,r.kt)("h4",{id:"react-testing-library"},"react-testing-library"),(0,r.kt)("p",null,"You have to run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add --dev @testing-library/react")," to use react-testing-library."),(0,r.kt)("p",null,"Let's implement a checkbox which swaps between two labels:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CheckboxWithLabel.js"',title:'"CheckboxWithLabel.js"'},"import React, {useState} from 'react';\n\nconst CheckboxWithLabel = ({labelOn, labelOff}) => {\n  const [isChecked, setIsChecked] = useState(false);\n\n  const onChange = () => {\n    setIsChecked(!isChecked);\n  };\n\n  return (\n    <label>\n      <input type=\"checkbox\" checked={isChecked} onChange={onChange} />\n      {isChecked ? labelOn : labelOff}\n    </label>\n  );\n};\n\nexport default CheckboxWithLabel;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="__tests__/CheckboxWithLabel-test.js"',title:'"__tests__/CheckboxWithLabel-test.js"'},"import React from 'react';\nimport {cleanup, fireEvent, render} from '@testing-library/react';\nimport CheckboxWithLabel from '../CheckboxWithLabel';\n\n// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher\n// unmount and cleanup DOM after the test is finished.\nafterEach(cleanup);\n\nit('CheckboxWithLabel changes the text after click', () => {\n  const {queryByLabelText, getByLabelText} = render(\n    <CheckboxWithLabel labelOn=\"On\" labelOff=\"Off\" />,\n  );\n\n  expect(queryByLabelText(/off/i)).toBeTruthy();\n\n  fireEvent.click(getByLabelText(/off/i));\n\n  expect(queryByLabelText(/on/i)).toBeTruthy();\n});\n")),(0,r.kt)("p",null,"The code for this example is available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/react-testing-library"},"examples/react-testing-library"),"."),(0,r.kt)("h4",{id:"enzyme"},"Enzyme"),(0,r.kt)("p",null,"You have to run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add --dev enzyme")," to use Enzyme. If you are using a React version below 15.5.0, you will also need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"react-addons-test-utils"),"."),(0,r.kt)("p",null,"Let's rewrite the test from above using Enzyme instead of react-testing-library. We use Enzyme's ",(0,r.kt)("a",{parentName:"p",href:"https://enzymejs.github.io/enzyme/docs/api/shallow.html"},"shallow renderer")," in this example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="__tests__/CheckboxWithLabel-test.js"',title:'"__tests__/CheckboxWithLabel-test.js"'},"import React from 'react';\nimport {shallow} from 'enzyme';\nimport CheckboxWithLabel from '../CheckboxWithLabel';\n\ntest('CheckboxWithLabel changes the text after click', () => {\n  // Render a checkbox with label in the document\n  const checkbox = shallow(<CheckboxWithLabel labelOn=\"On\" labelOff=\"Off\" />);\n\n  expect(checkbox.text()).toBe('Off');\n\n  checkbox.find('input').simulate('change');\n\n  expect(checkbox.text()).toBe('On');\n});\n")),(0,r.kt)("p",null,"The code for this example is available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/enzyme"},"examples/enzyme"),"."),(0,r.kt)("h3",{id:"custom-transformers"},"Custom transformers"),(0,r.kt)("p",null,"If you need more advanced functionality, you can also build your own transformer. Instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest"),", here is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="custom-transformer.js"',title:'"custom-transformer.js"'},"'use strict';\n\nconst {transform} = require('@babel/core');\nconst jestPreset = require('babel-preset-jest');\n\nmodule.exports = {\n  process(src, filename) {\n    const result = transform(src, {\n      filename,\n      presets: [jestPreset],\n    });\n\n    return result || src;\n  },\n};\n")),(0,r.kt)("p",null,"Don't forget to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-preset-jest")," packages for this example to work."),(0,r.kt)("p",null,"To make this work with Jest you need to update your Jest configuration with this: ",(0,r.kt)("inlineCode",{parentName:"p"},'"transform": {"\\\\.js$": "path/to/custom-transformer.js"}'),"."),(0,r.kt)("p",null,"If you'd like to build a transformer with babel support, you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-jest")," to compose one and pass in your custom configuration options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const babelJest = require('babel-jest');\n\nmodule.exports = babelJest.createTransformer({\n  presets: ['my-custom-preset'],\n});\n")))}u.isMDXComponent=!0}}]);