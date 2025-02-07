/*! For license information please see 4024aba0.4065badd.js.LICENSE.txt */
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5827],{79754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"architecture","title":"Architecture","description":"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:","source":"@site/versioned_docs/version-29.6/Architecture.md","sourceDirName":".","slug":"/architecture","permalink":"/ja/docs/29.6/architecture","draft":false,"unlisted":false,"editUrl":"https://crowdin.com/project/jest-v2/ja","tags":[],"version":"29.6","lastUpdatedBy":"Jiaqi Liu \uff5c\u3010\u70ec\u706b\u3011\u80e1\u6843","lastUpdatedAt":1738912609000,"frontMatter":{"id":"architecture","title":"Architecture"},"sidebar":"docs","previous":{"title":"Troubleshooting","permalink":"/ja/docs/29.6/troubleshooting"},"next":{"title":"Testing React Apps","permalink":"/ja/docs/29.6/tutorial-react"}}');var c=n(62540),o=n(43023),r=n(62872);const i={id:"architecture",title:"Architecture"},s=void 0,l={},u=[];function p(e){const t={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:"}),"\n",(0,c.jsx)(r.A,{id:"3YDiloj8_d0"}),"\n",(0,c.jsx)(t.p,{children:"If you'd like to learn how to build a testing framework like Jest from scratch, check out this video:"}),"\n",(0,c.jsx)(r.A,{id:"B8FbUK0WpVU"}),"\n",(0,c.jsxs)(t.p,{children:["There is also a ",(0,c.jsx)(t.a,{href:"https://cpojer.net/posts/building-a-javascript-testing-framework",children:"written guide you can follow"}),". It teaches the fundamental concepts of Jest and explains how various parts of Jest can be used to compose a custom testing framework."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},62872:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(63696),c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},c.apply(this,arguments)};var o=a.forwardRef((function(e,t){var n=a.useState(!1),o=n[0],r=n[1],i=a.useState(!1),s=i[0],l=i[1],u=encodeURIComponent(e.id),p="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,m=e.poster||"hqdefault",h="&".concat(e.params)||0,f=e.muted?"&mute=1":"",w=e.announce||"Watch",g=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",k=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(b,"/").concat(p,"/").concat(m,".").concat(g):"https://i.ytimg.com/".concat(b,"/").concat(u,"/").concat(m,".").concat(g)),v=e.noCookie;v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var y=e.playlist?"".concat(v,"/embed/videoseries?autoplay=1").concat(f,"&list=").concat(u).concat(h):"".concat(v,"/embed/").concat(u,"?autoplay=1&state=1").concat(f).concat(h),j=e.activatedClass||"lyt-activated",x=e.adNetwork||!1,C=e.aspectHeight||9,E=e.aspectWidth||16,A=e.iframeClass||"",I=e.playerClass||"lty-playbtn",J=e.wrapperClass||"yt-lite",F=e.onIframeAdded||function(){},R=e.rel?"prefetch":"preload",U=e.containerElement||"article";return a.useEffect((function(){s&&F()}),[s]),a.createElement(a.Fragment,null,a.createElement("link",{rel:R,href:k,as:"image"}),a.createElement(a.Fragment,null,o&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:v}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),x&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement(U,{onPointerOver:function(){o||r(!0)},onClick:function(){s||l(!0)},className:"".concat(J," ").concat(s?j:""),"data-title":d,style:c({backgroundImage:"url(".concat(k,")")},{"--aspect-ratio":"".concat(C/E*100,"%")})},a.createElement("button",{type:"button",className:I,"aria-label":"".concat(w," ").concat(d)}),s&&a.createElement("iframe",{ref:t,className:A,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:y})))}))},43023:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(63696);const c={},o=a.createContext(c);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);