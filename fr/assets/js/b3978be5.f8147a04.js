/*! For license information please see b3978be5.f8147a04.js.LICENSE.txt */
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1334],{98927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"architecture","title":"Architecture","description":"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:","source":"@site/../docs/Architecture.md","sourceDirName":".","slug":"/architecture","permalink":"/fr/docs/next/architecture","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/fr","tags":[],"version":"current","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738910716000,"frontMatter":{"id":"architecture","title":"Architecture"},"sidebar":"docs","previous":{"title":"Troubleshooting","permalink":"/fr/docs/next/troubleshooting"},"next":{"title":"Testing React Apps","permalink":"/fr/docs/next/tutorial-react"}}');var a=n(62540),r=n(43023),o=n(62872);const i={id:"architecture",title:"Architecture"},s=void 0,l={},u=[];function p(e){const t={a:"a",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:"}),"\n",(0,a.jsx)(o.A,{id:"3YDiloj8_d0"}),"\n",(0,a.jsx)(t.p,{children:"If you'd like to learn how to build a testing framework like Jest from scratch, check out this video:"}),"\n",(0,a.jsx)(o.A,{id:"B8FbUK0WpVU"}),"\n",(0,a.jsxs)(t.p,{children:["There is also a ",(0,a.jsx)(t.a,{href:"https://cpojer.net/posts/building-a-javascript-testing-framework",children:"written guide you can follow"}),". It teaches the fundamental concepts of Jest and explains how various parts of Jest can be used to compose a custom testing framework."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},62872:(e,t,n)=>{n.d(t,{A:()=>r});var c=n(63696),a=function(){return a=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};var r=c.forwardRef((function(e,t){var n=c.useState(!1),r=n[0],o=n[1],i=c.useState(!1),s=i[0],l=i[1],u=encodeURIComponent(e.id),p="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,m=e.poster||"hqdefault",h="&".concat(e.params)||0,f=e.muted?"&mute=1":"",w=e.announce||"Watch",g=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",k=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(b,"/").concat(p,"/").concat(m,".").concat(g):"https://i.ytimg.com/".concat(b,"/").concat(u,"/").concat(m,".").concat(g)),y=e.noCookie;y=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?"".concat(y,"/embed/videoseries?autoplay=1").concat(f,"&list=").concat(u).concat(h):"".concat(y,"/embed/").concat(u,"?autoplay=1&state=1").concat(f).concat(h),j=e.activatedClass||"lyt-activated",x=e.adNetwork||!1,C=e.aspectHeight||9,E=e.aspectWidth||16,A=e.iframeClass||"",I=e.playerClass||"lty-playbtn",J=e.wrapperClass||"yt-lite",F=e.onIframeAdded||function(){},R=e.rel?"prefetch":"preload",U=e.containerElement||"article";return c.useEffect((function(){s&&F()}),[s]),c.createElement(c.Fragment,null,c.createElement("link",{rel:R,href:k,as:"image"}),c.createElement(c.Fragment,null,r&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:y}),c.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),x&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),c.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),c.createElement(U,{onPointerOver:function(){r||o(!0)},onClick:function(){s||l(!0)},className:"".concat(J," ").concat(s?j:""),"data-title":d,style:a({backgroundImage:"url(".concat(k,")")},{"--aspect-ratio":"".concat(C/E*100,"%")})},c.createElement("button",{type:"button",className:I,"aria-label":"".concat(w," ").concat(d)}),s&&c.createElement("iframe",{ref:t,className:A,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}))},43023:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var c=n(63696);const a={},r=c.createContext(a);function o(e){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);