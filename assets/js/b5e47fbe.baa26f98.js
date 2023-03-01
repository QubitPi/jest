"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1863],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(25773),a=(n(27378),n(35318));const o={id:"environment-variables",title:"Environment Variables"},i=void 0,s={unversionedId:"environment-variables",id:"environment-variables",title:"Environment Variables",description:"Jest sets the following environment variables:",source:"@site/../docs/EnvironmentVariables.md",sourceDirName:".",slug:"/environment-variables",permalink:"/jest/docs/next/environment-variables",draft:!1,editUrl:"https://github.com/facebook/jest/edit/main/website/../docs/EnvironmentVariables.md",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1677667296,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{id:"environment-variables",title:"Environment Variables"},sidebar:"api",previous:{title:"Jest CLI Options",permalink:"/jest/docs/next/cli"},next:{title:"Code Transformation",permalink:"/jest/docs/next/code-transformation"}},l={},c=[{value:"<code>NODE_ENV</code>",id:"node_env",level:3},{value:"<code>JEST_WORKER_ID</code>",id:"jest_worker_id",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jest sets the following environment variables:"),(0,a.kt)("h3",{id:"node_env"},(0,a.kt)("inlineCode",{parentName:"h3"},"NODE_ENV")),(0,a.kt)("p",null,"Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"'test'")," if it's not already set to something else."),(0,a.kt)("h3",{id:"jest_worker_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"JEST_WORKER_ID")),(0,a.kt)("p",null,"Each worker process is assigned a unique id (index-based that starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"). This is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," for all tests when ",(0,a.kt)("a",{parentName:"p",href:"/jest/docs/next/cli#--runinband"},(0,a.kt)("inlineCode",{parentName:"a"},"runInBand"))," is set to true."))}d.isMDXComponent=!0}}]);