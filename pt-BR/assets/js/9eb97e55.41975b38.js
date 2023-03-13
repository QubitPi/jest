"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[67781],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(25773),o=(n(27378),n(35318));const i={id:"environment-variables",title:"Environment Variables"},a=void 0,s={unversionedId:"environment-variables",id:"version-25.x/environment-variables",title:"Environment Variables",description:"Jest sets the following environment variables:",source:"@site/versioned_docs/version-25.x/EnvironmentVariables.md",sourceDirName:".",slug:"/environment-variables",permalink:"/jest/pt-BR/docs/25.x/environment-variables",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"25.x",lastUpdatedBy:"Jack",lastUpdatedAt:1678699283,formattedLastUpdatedAt:"13 de mar. de 2023",frontMatter:{id:"environment-variables",title:"Environment Variables"},sidebar:"version-25.x/api",previous:{title:"Jest CLI Options",permalink:"/jest/pt-BR/docs/25.x/cli"}},l={},c=[{value:"<code>NODE_ENV</code>",id:"node_env",level:3},{value:"<code>JEST_WORKER_ID</code>",id:"jest_worker_id",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jest sets the following environment variables:"),(0,o.kt)("h3",{id:"node_env"},(0,o.kt)("inlineCode",{parentName:"h3"},"NODE_ENV")),(0,o.kt)("p",null,"Set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'test'")," if it's not already set to something else."),(0,o.kt)("h3",{id:"jest_worker_id"},(0,o.kt)("inlineCode",{parentName:"h3"},"JEST_WORKER_ID")),(0,o.kt)("p",null,"Each worker process is assigned a unique id (index-based that starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"). This is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," for all tests when ",(0,o.kt)("a",{parentName:"p",href:"/jest/pt-BR/docs/25.x/cli#--runinband"},(0,o.kt)("inlineCode",{parentName:"a"},"runInBand"))," is set to true."))}d.isMDXComponent=!0}}]);