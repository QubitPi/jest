/*! For license information please see 382c9817.a5ffabd5.js.LICENSE.txt */
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[54186],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(25773),a=(r(27378),r(35318)),o=r(28475);const i={id:"architecture",title:"Architecture"},c=void 0,l={unversionedId:"architecture",id:"version-25.x/architecture",title:"Architecture",description:"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:",source:"@site/versioned_docs/version-25.x/Architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/jest/es-ES/docs/25.x/architecture",draft:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"25.x",lastUpdatedBy:"Jack",lastUpdatedAt:1678695180,formattedLastUpdatedAt:"13 mar 2023",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"version-25.x/docs",previous:{title:"Troubleshooting",permalink:"/jest/es-ES/docs/25.x/troubleshooting"},next:{title:"Testing React Apps",permalink:"/jest/es-ES/docs/25.x/tutorial-react"}},s={},u=[],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:"),(0,a.kt)(o.Z,{id:"3YDiloj8_d0",mdxType:"LiteYouTubeEmbed"}),(0,a.kt)("p",null,"If you'd like to learn how to build a testing framework like Jest from scratch, check out this video:"),(0,a.kt)(o.Z,{id:"B8FbUK0WpVU",mdxType:"LiteYouTubeEmbed"}),(0,a.kt)("p",null,"There is also a ",(0,a.kt)("a",{parentName:"p",href:"https://cpojer.net/posts/building-a-javascript-testing-framework"},"written guide you can follow"),". It teaches the fundamental concepts of Jest and explains how various parts of Jest can be used to compose a custom testing framework."))}d.isMDXComponent=!0},28475:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function o(e){var t=n.useState(!1),r=t[0],o=t[1],i=n.useState(!1),c=i[0],l=i[1],s=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,d=e.poster||"hqdefault",m="&"+e.params||0,f=e.muted?"&mute=1":"",h=e.announce||"Watch",y=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",g=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+b+"/"+u+"/"+d+"."+y:"https://i.ytimg.com/"+b+"/"+s+"/"+d+"."+y),v=e.noCookie;v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var w=e.playlist?v+"/embed/videoseries?autoplay=1"+f+"&list="+s+m:v+"/embed/"+s+"?autoplay=1&state=1"+f+m,k=e.activatedClass||"lyt-activated",O=e.adNetwork||!1,j=e.aspectHeight||9,E=e.aspectWidth||16,x=e.iframeClass||"",C=e.playerClass||"lty-playbtn",T=e.wrapperClass||"yt-lite",P=e.onIframeAdded||function(){},I=e.rel?"prefetch":"preload";return n.useEffect((function(){c&&P()}),[c]),n.createElement(n.Fragment,null,n.createElement("link",{rel:I,href:g,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:v}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),O&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){r||o(!0)},onClick:function(){c||l(!0)},className:T+" "+(c?k:""),"data-title":p,style:a({backgroundImage:"url("+g+")"},{"--aspect-ratio":j/E*100+"%"})},n.createElement("button",{type:"button",className:C,"aria-label":h+" "+p}),c&&n.createElement("iframe",{className:x,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:w})))}}}]);