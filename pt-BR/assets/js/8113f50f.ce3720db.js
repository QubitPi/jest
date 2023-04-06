"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[24473],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(25773),o=(n(27378),n(35318));const r={id:"tutorial-react-native",title:"Testing React Native Apps"},i=void 0,s={unversionedId:"tutorial-react-native",id:"version-25.x/tutorial-react-native",title:"Testing React Native Apps",description:"At Facebook, we use Jest to test React Native applications.",source:"@site/versioned_docs/version-25.x/TutorialReactNative.md",sourceDirName:".",slug:"/tutorial-react-native",permalink:"/jest/pt-BR/docs/25.x/tutorial-react-native",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"25.x",lastUpdatedBy:"Jack",lastUpdatedAt:1680766055,formattedLastUpdatedAt:"6 de abr. de 2023",frontMatter:{id:"tutorial-react-native",title:"Testing React Native Apps"},sidebar:"version-25.x/docs",previous:{title:"Testing React Apps",permalink:"/jest/pt-BR/docs/25.x/tutorial-react"},next:{title:"Testing Web Frameworks",permalink:"/jest/pt-BR/docs/25.x/testing-frameworks"}},p={},l=[{value:"Setup",id:"setup",level:2},{value:"Snapshot Test",id:"snapshot-test",level:2},{value:"Preset configuration",id:"preset-configuration",level:2},{value:"Environment",id:"environment",level:3},{value:"transformIgnorePatterns customization",id:"transformignorepatterns-customization",level:3},{value:"setupFiles",id:"setupfiles",level:3},{value:"moduleNameMapper",id:"modulenamemapper",level:3},{value:"Tips",id:"tips",level:2},{value:"Mock native modules using jest.mock",id:"mock-native-modules-using-jestmock",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At Facebook, we use Jest to test ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native")," applications."),(0,o.kt)("p",null,"Get a deeper insight into testing a working React Native app example by reading the following series: ",(0,o.kt)("a",{parentName:"p",href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-1-snapshots-come-into-play/"},"Part 1: Jest \u2013 Snapshot come into play")," and ",(0,o.kt)("a",{parentName:"p",href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-2-redux-snapshots-for-your-actions-and-reducers/"},"Part 2: Jest \u2013 Redux Snapshots for your Actions and Reducers"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Starting from react-native version 0.38, a Jest setup is included by default when running ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native init"),". The following configuration should be automatically added to your package.json file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "jest"\n  },\n  "jest": {\n    "preset": "react-native"\n  }\n}\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test")," to run tests with Jest."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are upgrading your react-native application and previously used the ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-react-native")," preset, remove the dependency from your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file and change the preset to ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," instead.","_")),(0,o.kt)("h2",{id:"snapshot-test"},"Snapshot Test"),(0,o.kt)("p",null,"Let's create a ",(0,o.kt)("a",{parentName:"p",href:"/jest/pt-BR/docs/25.x/snapshot-testing"},"snapshot test")," for a small intro component with a few views and text components and some styles:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Intro.js"',title:'"Intro.js"'},"import React, {Component} from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\n\nclass Intro extends Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.welcome}>Welcome to React Native!</Text>\n        <Text style={styles.instructions}>\n          This is a React Native snapshot test.\n        </Text>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n    flex: 1,\n    justifyContent: 'center',\n  },\n  instructions: {\n    color: '#333333',\n    marginBottom: 5,\n    textAlign: 'center',\n  },\n  welcome: {\n    fontSize: 20,\n    margin: 10,\n    textAlign: 'center',\n  },\n});\n\nexport default Intro;\n")),(0,o.kt)("p",null,"Now let's use React's test renderer and Jest's snapshot feature to interact with the component and capture the rendered output and create a snapshot file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="__tests__/Intro-test.js"',title:'"__tests__/Intro-test.js"'},"import React from 'react';\nimport renderer from 'react-test-renderer';\nimport Intro from '../Intro';\n\ntest('renders correctly', () => {\n  const tree = renderer.create(<Intro />).toJSON();\n  expect(tree).toMatchSnapshot();\n});\n")),(0,o.kt)("p",null,"When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"jest"),", this will produce an output file like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="__tests__/__snapshots__/Intro-test.js.snap"',title:'"__tests__/__snapshots__/Intro-test.js.snap"'},'exports[`Intro renders correctly 1`] = `\n<View\n  style={\n    Object {\n      "alignItems": "center",\n      "backgroundColor": "#F5FCFF",\n      "flex": 1,\n      "justifyContent": "center",\n    }\n  }>\n  <Text\n    style={\n      Object {\n        "fontSize": 20,\n        "margin": 10,\n        "textAlign": "center",\n      }\n    }>\n    Welcome to React Native!\n  </Text>\n  <Text\n    style={\n      Object {\n        "color": "#333333",\n        "marginBottom": 5,\n        "textAlign": "center",\n      }\n    }>\n    This is a React Native snapshot test.\n  </Text>\n</View>\n`;\n')),(0,o.kt)("p",null,"The next time you run the tests, the rendered output will be compared to the previously created snapshot. The snapshot should be committed along with code changes. When a snapshot test fails, you need to inspect whether it is an intended or unintended change. If the change is expected you can invoke Jest with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest -u")," to overwrite the existing snapshot."),(0,o.kt)("p",null,"The code for this example is available at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/tree/main/examples/react-native"},"examples/react-native"),"."),(0,o.kt)("h2",{id:"preset-configuration"},"Preset configuration"),(0,o.kt)("p",null,"The preset sets up the environment and is very opinionated and based on what we found to be useful at Facebook. All of the configuration options can be overwritten just as they can be customized when no preset is used."),(0,o.kt)("h3",{id:"environment"},"Environment"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," ships with a Jest preset, so the ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.preset")," field of your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," should point to ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native"),". The preset is a node environment that mimics the environment of a React Native app. Because it doesn't load any DOM or browser APIs, it greatly improves Jest's startup time."),(0,o.kt)("h3",{id:"transformignorepatterns-customization"},"transformIgnorePatterns customization"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"configuration#transformignorepatterns-arraystring"},(0,o.kt)("inlineCode",{parentName:"a"},"transformIgnorePatterns"))," option can be used to specify which files shall be transformed by Babel. Many ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," npm modules unfortunately don't pre-compile their source code before publishing."),(0,o.kt)("p",null,"By default the ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-react-native")," preset only processes the project's own source files and ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native"),". If you have npm dependencies that have to be transformed you can customize this configuration option by including modules other than ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," by grouping them and separating them with the ",(0,o.kt)("inlineCode",{parentName:"p"},"|")," operator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transformIgnorePatterns": [\n    "node_modules/(?!(react-native|my-project|react-native-button)/)"\n  ]\n}\n')),(0,o.kt)("p",null,"You can test which paths would match (and thus be excluded from transformation) with a tool ",(0,o.kt)("a",{parentName:"p",href:"https://regex101.com/r/JsLIDM/1"},"like this"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," will exclude a file from transformation if the path matches against ",(0,o.kt)("strong",{parentName:"p"},"any")," pattern provided. Splitting into multiple patterns could therefore have unintended results if you are not careful. In the example below, the exclusion (also known as a negative lookahead assertion) for ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," cancel each other out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transformIgnorePatterns": ["node_modules/(?!foo/)", "node_modules/(?!bar/)"] // not what you want\n}\n')),(0,o.kt)("h3",{id:"setupfiles"},"setupFiles"),(0,o.kt)("p",null,"If you'd like to provide additional configuration for every test file, the ",(0,o.kt)("a",{parentName:"p",href:"configuration#setupfiles-array"},(0,o.kt)("inlineCode",{parentName:"a"},"setupFiles")," configuration option")," can be used to specify setup scripts."),(0,o.kt)("h3",{id:"modulenamemapper"},"moduleNameMapper"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"configuration#modulenamemapper-objectstring-string--arraystring"},(0,o.kt)("inlineCode",{parentName:"a"},"moduleNameMapper"))," can be used to map a module path to a different module. By default the preset maps all images to an image stub module but if a module cannot be found this configuration option can help:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "moduleNameMapper": {\n    "my-module.js": "<rootDir>/path/to/my-module.js"\n  }\n}\n')),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("h3",{id:"mock-native-modules-using-jestmock"},"Mock native modules using jest.mock"),(0,o.kt)("p",null,"The Jest preset built into ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," comes with a few default mocks that are applied on a react-native repository. However, some react-native components or third party components rely on native code to be rendered. In such cases, Jest's manual mocking system can help to mock out the underlying implementation."),(0,o.kt)("p",null,"For example, if your code depends on a third party native video component called ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-video")," you might want to stub it out with a manual mock like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('react-native-video', () => 'Video');\n")),(0,o.kt)("p",null,"This will render the component as ",(0,o.kt)("inlineCode",{parentName:"p"},"<Video {...props} />")," with all of its props in the snapshot output. See also ",(0,o.kt)("a",{parentName:"p",href:"tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16"},"caveats around Enzyme and React 16"),"."),(0,o.kt)("p",null,"Sometimes you need to provide a more complex manual mock. For example if you'd like to forward the prop types or static fields of a native component to a mock, you can return a different React component from a mock through this helper from jest-react-native:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('path/to/MyNativeComponent', () => {\n  const mockComponent = require('react-native/jest/mockComponent');\n  return mockComponent('path/to/MyNativeComponent');\n});\n")),(0,o.kt)("p",null,"Or if you'd like to create your own manual mock, you can do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('Text', () => {\n  const RealComponent = jest.requireActual('Text');\n  const React = require('React');\n  class Text extends React.Component {\n    render() {\n      return React.createElement('Text', this.props, this.props.children);\n    }\n  }\n  Text.propTypes = RealComponent.propTypes;\n  return Text;\n});\n")),(0,o.kt)("p",null,"In other cases you may want to mock a native module that isn't a React component. The same technique can be applied. We recommend inspecting the native module's source code and logging the module when running a react native app on a real device and then modeling a manual mock after the real module."),(0,o.kt)("p",null,"If you end up mocking the same modules over and over it is recommended to define these mocks in a separate file and add it to the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"setupFiles"),"."))}u.isMDXComponent=!0}}]);