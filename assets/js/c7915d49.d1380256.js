"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[2430,3381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(v,s(s({ref:t},l),{},{components:r})):n.createElement(v,s({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6088:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},s=void 0,a={unversionedId:"web/snippets/prereqs-custom-code",id:"web/snippets/prereqs-custom-code",isDocsHomePage:!1,title:"prereqs-custom-code",description:"-   Download and setup the VertiGIS Studio Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",sourceDirName:"web/snippets",slug:"/web/snippets/prereqs-custom-code",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx",version:"current",frontMatter:{}},c=[],u={toc:c};function l({components:e,...t}){return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download and setup the ",(0,i.kt)("a",{parentName:"li",href:"/docs/web/sdk-overview"},"VertiGIS Studio Web SDK"),"."),(0,i.kt)("li",{parentName:"ul"},"Check out the ",(0,i.kt)("a",{parentName:"li",href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"},"deployment instructions")," to learn more about deploying custom code to a VertiGIS Studio Web App.")))}l.isMDXComponent=!0},7470:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),o=r(6088);const s={title:"Subscribe to an Existing Event",description:"VertiGIS Studio Web - Learn how to create and subscribe to an existing VertiGIS Studio Web event"},a=void 0,c={unversionedId:"web/tutorial-events-subscribe",id:"web/tutorial-events-subscribe",isDocsHomePage:!1,title:"Subscribe to an Existing Event",description:"VertiGIS Studio Web - Learn how to create and subscribe to an existing VertiGIS Studio Web event",source:"@site/docs/web/tutorial-events-subscribe.mdx",sourceDirName:"web",slug:"/web/tutorial-events-subscribe",permalink:"/docs/web/tutorial-events-subscribe",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/tutorial-events-subscribe.mdx",version:"current",frontMatter:{title:"Subscribe to an Existing Event",description:"VertiGIS Studio Web - Learn how to create and subscribe to an existing VertiGIS Studio Web event"},sidebar:"web",previous:{title:"Pull Component Data from App Config",permalink:"/docs/web/tutorial-implement-component-participate-app-config"},next:{title:"Translate a Component's Text",permalink:"/docs/web/tutorial-internationalization"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Custom Service",id:"create-the-custom-service",children:[]},{value:"Register the Custom Service",id:"register-the-custom-service",children:[]},{value:"Subscribe to the Event",id:"subscribe-to-the-event",children:[]}],l={toc:u};function p({components:e,...t}){return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Events can only be created, published, and subscribed to from within a custom service, component model, or component. This article will walk you through subscribing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui.activated")," event from within a custom service."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)(o.default,{mdxType:"PrereqsCustomCodeSnippet"}),(0,i.kt)("h2",{id:"create-the-custom-service"},"Create the Custom Service"),(0,i.kt)("p",null,"Create a custom service with an ",(0,i.kt)("inlineCode",{parentName:"p"},"_onInitialized")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"_onDestroy")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/CustomService.ts"',title:'"src/services/CustomService.ts"'},'import { ServiceBase } from "@vertigis/web/services";\n\nexport default class CustomService extends ServiceBase {\n    handles: IHandle[] = [];\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n    }\n\n    public async _onDestroy(): Promise<void> {\n        await super._onDestroy();\n    }\n}\n')),(0,i.kt)("h2",{id:"register-the-custom-service"},"Register the Custom Service"),(0,i.kt)("p",null,"Register the custom service in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts")," and set it to load on startup."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'import { LibraryRegistry } from "@vertigis/web/config";\nimport CustomService from "./services/CustomService";\n\nexport default function (registry: LibraryRegistry) {\n    // highlight-start\n    registry.registerService({\n        id: "custom-service",\n        getService: (config) => new CustomService(config),\n        loadOnStartup: true,\n    });\n    // highlight-end\n}\n')),(0,i.kt)("h2",{id:"subscribe-to-the-event"},"Subscribe to the Event"),(0,i.kt)("p",null,"Subscribe to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui.activated")," event."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/CustomService.ts"',title:'"src/services/CustomService.ts"'},"import { ServiceBase } from \"@vertigis/web/services\";\n\nexport default class CustomService extends ServiceBase {\n    handles: IHandle[] = [];\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n        this.handles.push(\n            this.messages.events.ui.activated.subscribe(\n                (id: string) => {\n                    console.log(`Component '${id}' activated.`);\n                }\n            )\n        );\n    }\n\n    protected async _onDestroy(): Promise<void> {\n        await super._onDestroy();\n        this.handles.forEach((handle) => handle.remove());\n    }\n}\n")))}p.isMDXComponent=!0}}]);