if(!self.define){let e,n={};const r=(r,l)=>(r=new URL(r+".js",l).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,u)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let s={};const o=e=>r(e,i),t={module:{uri:i},exports:s,require:o};n[i]=Promise.all(l.map((e=>t[e]||o(e)))).then((e=>(u(...e),s)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"_nuxt/config.2cc756aa.js",revision:null},{url:"_nuxt/entry.65e887cc.css",revision:null},{url:"_nuxt/entry.73d909dc.js",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.debd02fe.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-500.aa643b3e.js",revision:null},{url:"_nuxt/error-component.ea5c1550.js",revision:null},{url:"_nuxt/Icon.53089f3c.css",revision:null},{url:"_nuxt/Icon.f591cbbe.js",revision:null},{url:"_nuxt/IconCSS.23be1128.css",revision:null},{url:"_nuxt/IconCSS.9a57158a.js",revision:null},{url:"_nuxt/index.7a22c71d.js",revision:null},{url:"_nuxt/index.7a29fcb4.js",revision:null},{url:"_nuxt/useSavePDF.af634b63.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.295a6886.js",revision:null},{url:"200",revision:"6e38d37957c6dc03f3cff70cf2d84add"},{url:"404",revision:"6e38d37957c6dc03f3cff70cf2d84add"},{url:"/",revision:"6e38d37957c6dc03f3cff70cf2d84add"},{url:"manifest.webmanifest",revision:"0ea38775bdef7081a654136b25474f2f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
