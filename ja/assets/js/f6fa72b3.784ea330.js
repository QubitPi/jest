"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[902],{89756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tutorial-react-native","title":"Testing React Native Apps","description":"At Facebook, we use Jest to test React Native applications.","source":"@site/versioned_docs/version-29.7/TutorialReactNative.md","sourceDirName":".","slug":"/tutorial-react-native","permalink":"/ja/docs/tutorial-react-native","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ja","tags":[],"version":"29.7","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1737446335000,"frontMatter":{"id":"tutorial-react-native","title":"Testing React Native Apps"},"sidebar":"docs","previous":{"title":"Testing React Apps","permalink":"/ja/docs/tutorial-react"},"next":{"title":"Testing Web Frameworks","permalink":"/ja/docs/testing-frameworks"}}');var o=n(62540),a=n(43023);const r={id:"tutorial-react-native",title:"Testing React Native Apps"},i=void 0,c={},l=[{value:"Setup",id:"setup",level:2},{value:"Snapshot Test",id:"snapshot-test",level:2},{value:"Preset configuration",id:"preset-configuration",level:2},{value:"Environment",id:"environment",level:3},{value:"transformIgnorePatterns customization",id:"transformignorepatterns-customization",level:3},{value:"setupFiles",id:"setupfiles",level:3},{value:"moduleNameMapper",id:"modulenamemapper",level:3},{value:"Tips",id:"tips",level:2},{value:"Mock native modules using jest.mock",id:"mock-native-modules-using-jestmock",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["At Facebook, we use Jest to test ",(0,o.jsx)(t.a,{href:"https://reactnative.dev/",children:"React Native"})," applications."]}),"\n",(0,o.jsxs)(t.p,{children:["Get a deeper insight into testing a working React Native app example by reading the following series: ",(0,o.jsx)(t.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-1-snapshots-come-into-play/",children:"Part 1: Jest \u2013 Snapshot come into play"})," and ",(0,o.jsx)(t.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-2-redux-snapshots-for-your-actions-and-reducers/",children:"Part 2: Jest \u2013 Redux Snapshots for your Actions and Reducers"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(t.p,{children:["Starting from react-native version 0.38, a Jest setup is included by default when running ",(0,o.jsx)(t.code,{children:"react-native init"}),". The following configuration should be automatically added to your package.json file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  },\n  "jest": {\n    "preset": "react-native"\n  }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Run ",(0,o.jsx)(t.code,{children:"yarn test"})," to run tests with Jest."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you are upgrading your react-native application and previously used the ",(0,o.jsx)(t.code,{children:"jest-react-native"})," preset, remove the dependency from your ",(0,o.jsx)(t.code,{children:"package.json"})," file and change the preset to ",(0,o.jsx)(t.code,{children:"react-native"})," instead."]})}),"\n",(0,o.jsx)(t.h2,{id:"snapshot-test",children:"Snapshot Test"}),"\n",(0,o.jsxs)(t.p,{children:["Let's create a ",(0,o.jsx)(t.a,{href:"/ja/docs/snapshot-testing",children:"snapshot test"})," for a small intro component with a few views and text components and some styles:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="Intro.js"',children:"import React, {Component} from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\n\nclass Intro extends Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.welcome}>Welcome to React Native!</Text>\n        <Text style={styles.instructions}>\n          This is a React Native snapshot test.\n        </Text>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n    flex: 1,\n    justifyContent: 'center',\n  },\n  instructions: {\n    color: '#333333',\n    marginBottom: 5,\n    textAlign: 'center',\n  },\n  welcome: {\n    fontSize: 20,\n    margin: 10,\n    textAlign: 'center',\n  },\n});\n\nexport default Intro;\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now let's use React's test renderer and Jest's snapshot feature to interact with the component and capture the rendered output and create a snapshot file:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="__tests__/Intro-test.js"',children:"import React from 'react';\nimport renderer from 'react-test-renderer';\nimport Intro from '../Intro';\n\ntest('renders correctly', () => {\n  const tree = renderer.create(<Intro />).toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When you run ",(0,o.jsx)(t.code,{children:"yarn test"})," or ",(0,o.jsx)(t.code,{children:"jest"}),", this will produce an output file like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/__snapshots__/Intro-test.js.snap"',children:'exports[`Intro renders correctly 1`] = `\n<View\n  style={\n    Object {\n      "alignItems": "center",\n      "backgroundColor": "#F5FCFF",\n      "flex": 1,\n      "justifyContent": "center",\n    }\n  }>\n  <Text\n    style={\n      Object {\n        "fontSize": 20,\n        "margin": 10,\n        "textAlign": "center",\n      }\n    }>\n    Welcome to React Native!\n  </Text>\n  <Text\n    style={\n      Object {\n        "color": "#333333",\n        "marginBottom": 5,\n        "textAlign": "center",\n      }\n    }>\n    This is a React Native snapshot test.\n  </Text>\n</View>\n`;\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The next time you run the tests, the rendered output will be compared to the previously created snapshot. The snapshot should be committed along with code changes. When a snapshot test fails, you need to inspect whether it is an intended or unintended change. If the change is expected you can invoke Jest with ",(0,o.jsx)(t.code,{children:"jest -u"})," to overwrite the existing snapshot."]}),"\n",(0,o.jsxs)(t.p,{children:["The code for this example is available at ",(0,o.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-native",children:"examples/react-native"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"preset-configuration",children:"Preset configuration"}),"\n",(0,o.jsx)(t.p,{children:"The preset sets up the environment and is very opinionated and based on what we found to be useful at Facebook. All of the configuration options can be overwritten just as they can be customized when no preset is used."}),"\n",(0,o.jsx)(t.h3,{id:"environment",children:"Environment"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"react-native"})," ships with a Jest preset, so the ",(0,o.jsx)(t.code,{children:"jest.preset"})," field of your ",(0,o.jsx)(t.code,{children:"package.json"})," should point to ",(0,o.jsx)(t.code,{children:"react-native"}),". The preset is a node environment that mimics the environment of a React Native app. Because it doesn't load any DOM or browser APIs, it greatly improves Jest's startup time."]}),"\n",(0,o.jsx)(t.h3,{id:"transformignorepatterns-customization",children:"transformIgnorePatterns customization"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"configuration#transformignorepatterns-arraystring",children:(0,o.jsx)(t.code,{children:"transformIgnorePatterns"})})," option can be used to specify which files shall be transformed by Babel. Many ",(0,o.jsx)(t.code,{children:"react-native"})," npm modules unfortunately don't pre-compile their source code before publishing."]}),"\n",(0,o.jsxs)(t.p,{children:["By default the ",(0,o.jsx)(t.code,{children:"jest-react-native"})," preset only processes the project's own source files and ",(0,o.jsx)(t.code,{children:"react-native"}),". If you have npm dependencies that have to be transformed you can customize this configuration option by including modules other than ",(0,o.jsx)(t.code,{children:"react-native"})," by grouping them and separating them with the ",(0,o.jsx)(t.code,{children:"|"})," operator:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": [\n    "node_modules/(?!(react-native|my-project|react-native-button)/)"\n  ]\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can test which paths would match (and thus be excluded from transformation) with a tool ",(0,o.jsx)(t.a,{href:"https://regex101.com/r/JsLIDM/1",children:"like this"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"transformIgnorePatterns"})," will exclude a file from transformation if the path matches against ",(0,o.jsx)(t.strong,{children:"any"})," pattern provided. Splitting into multiple patterns could therefore have unintended results if you are not careful. In the example below, the exclusion (also known as a negative lookahead assertion) for ",(0,o.jsx)(t.code,{children:"foo"})," and ",(0,o.jsx)(t.code,{children:"bar"})," cancel each other out:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": ["node_modules/(?!foo/)", "node_modules/(?!bar/)"] // not what you want\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"setupfiles",children:"setupFiles"}),"\n",(0,o.jsxs)(t.p,{children:["If you'd like to provide additional configuration for every test file, the ",(0,o.jsxs)(t.a,{href:"configuration#setupfiles-array",children:[(0,o.jsx)(t.code,{children:"setupFiles"})," configuration option"]})," can be used to specify setup scripts."]}),"\n",(0,o.jsx)(t.h3,{id:"modulenamemapper",children:"moduleNameMapper"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"configuration#modulenamemapper-objectstring-string--arraystring",children:(0,o.jsx)(t.code,{children:"moduleNameMapper"})})," can be used to map a module path to a different module. By default the preset maps all images to an image stub module but if a module cannot be found this configuration option can help:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "moduleNameMapper": {\n    "my-module.js": "<rootDir>/path/to/my-module.js"\n  }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"tips",children:"Tips"}),"\n",(0,o.jsx)(t.h3,{id:"mock-native-modules-using-jestmock",children:"Mock native modules using jest.mock"}),"\n",(0,o.jsxs)(t.p,{children:["The Jest preset built into ",(0,o.jsx)(t.code,{children:"react-native"})," comes with a few default mocks that are applied on a react-native repository. However, some react-native components or third party components rely on native code to be rendered. In such cases, Jest's manual mocking system can help to mock out the underlying implementation."]}),"\n",(0,o.jsxs)(t.p,{children:["For example, if your code depends on a third party native video component called ",(0,o.jsx)(t.code,{children:"react-native-video"})," you might want to stub it out with a manual mock like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"jest.mock('react-native-video', () => 'Video');\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This will render the component as ",(0,o.jsx)(t.code,{children:"<Video {...props} />"})," with all of its props in the snapshot output. See also ",(0,o.jsx)(t.a,{href:"tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16",children:"caveats around Enzyme and React 16"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Sometimes you need to provide a more complex manual mock. For example if you'd like to forward the prop types or static fields of a native component to a mock, you can return a different React component from a mock through this helper from jest-react-native:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"jest.mock('path/to/MyNativeComponent', () => {\n  const mockComponent = require('react-native/jest/mockComponent');\n  return mockComponent('path/to/MyNativeComponent');\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"Or if you'd like to create your own manual mock, you can do something like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"jest.mock('Text', () => {\n  const RealComponent = jest.requireActual('Text');\n  const React = require('react');\n  class Text extends React.Component {\n    render() {\n      return React.createElement('Text', this.props, this.props.children);\n    }\n  }\n  Text.propTypes = RealComponent.propTypes;\n  return Text;\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"In other cases you may want to mock a native module that isn't a React component. The same technique can be applied. We recommend inspecting the native module's source code and logging the module when running a react native app on a real device and then modeling a manual mock after the real module."}),"\n",(0,o.jsxs)(t.p,{children:["If you end up mocking the same modules over and over it is recommended to define these mocks in a separate file and add it to the list of ",(0,o.jsx)(t.code,{children:"setupFiles"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(63696);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);