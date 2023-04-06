"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[25470],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(25773),o=(n(27378),n(35318));const a={id:"environment-variables",title:"Environment Variables"},i=void 0,s={unversionedId:"environment-variables",id:"version-29.4/environment-variables",title:"Environment Variables",description:"Jest sets the following environment variables:",source:"@site/versioned_docs/version-29.4/EnvironmentVariables.md",sourceDirName:".",slug:"/environment-variables",permalink:"/jest/fr/docs/29.4/environment-variables",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"29.4",lastUpdatedBy:"Jack",lastUpdatedAt:1680744104,formattedLastUpdatedAt:"6 avr. 2023",frontMatter:{id:"environment-variables",title:"Environment Variables"},sidebar:"api",previous:{title:"Jest CLI Options",permalink:"/jest/fr/docs/29.4/cli"},next:{title:"Code Transformation",permalink:"/jest/fr/docs/29.4/code-transformation"}},l={},c=[{value:"<code>NODE_ENV</code>",id:"node_env",level:3},{value:"<code>JEST_WORKER_ID</code>",id:"jest_worker_id",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jest sets the following environment variables:"),(0,o.kt)("h3",{id:"node_env"},(0,o.kt)("inlineCode",{parentName:"h3"},"NODE_ENV")),(0,o.kt)("p",null,"Set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'test'")," if it's not already set to something else."),(0,o.kt)("h3",{id:"jest_worker_id"},(0,o.kt)("inlineCode",{parentName:"h3"},"JEST_WORKER_ID")),(0,o.kt)("p",null,"Each worker process is assigned a unique id (index-based that starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"). This is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," for all tests when ",(0,o.kt)("a",{parentName:"p",href:"/jest/fr/docs/29.4/cli#--runinband"},(0,o.kt)("inlineCode",{parentName:"a"},"runInBand"))," is set to true."))}d.isMDXComponent=!0}}]);