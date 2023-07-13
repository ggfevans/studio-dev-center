"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,u=p["".concat(c,".").concat(m)]||p[m]||v[m]||o;return r?n.createElement(u,a(a({ref:t},d),{},{components:r})):n.createElement(u,a({ref:t},d))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5858:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(9960),i=r(7294),o=r(6010);const a={root:"root_Uwqo"};function s(e){let{title:t,description:r,link:s}=e;return i.createElement("div",{className:(0,o.Z)("card-demo",a.root)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__header"},i.createElement("h3",null,t)),i.createElement("div",{className:"card__body"},i.createElement("p",null,r)),i.createElement("div",{className:"card__footer"},i.createElement(n.Z,{className:"button button--secondary button--block",to:s},"Get Started"))))}},7467:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const i={root:"root_vxd5"};function o(e){let{children:t}=e;return n.createElement("div",{className:i.root},t)}},7312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var n=r(7462),i=(r(7294),r(3905)),o=r(4996),a=r(5858),s=r(7467);const c={title:"Services Overview",sidebar_label:"Overview",description:"VertiGIS Studio Web - Overview of Services",hide_table_of_contents:!0},l=void 0,d={unversionedId:"web/sdk-services-overview",id:"web/sdk-services-overview",title:"Services Overview",description:"VertiGIS Studio Web - Overview of Services",source:"@site/docs/web/sdk-services-overview.mdx",sourceDirName:"web",slug:"/web/sdk-services-overview",permalink:"/docs/web/sdk-services-overview",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/sdk-services-overview.mdx",tags:[],version:"current",frontMatter:{title:"Services Overview",sidebar_label:"Overview",description:"VertiGIS Studio Web - Overview of Services",hide_table_of_contents:!0},sidebar:"web",previous:{title:"Internationalization",permalink:"/docs/web/sdk-components-internationalization"},next:{title:"Create a Service",permalink:"/docs/web/sdk-services-create"}},p={},v=[{value:"Next Steps",id:"next-steps",level:2}],m={toc:v},u="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In VertiGIS Studio Web, services represent a shared application-wide concern that needs to be accessed by many components or other services. There is only one instance of each service in the application. Interactions with services usually happen through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-commands-operations#implementing-commands-and-operations"},"commands and operations they implement"),", but services can also be ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-injecting-services"},"directly injected")," into other services and component models."),(0,i.kt)("p",null,"Services are created at startup if they are ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-reference#service-registration"},"registered")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadOnStartup")," option, otherwise, they will be created when one of their commands and operations is run or they are directly injected into another service or component model."),(0,i.kt)("p",null,"Services can be optionally configured by ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/sdk-services-reference#models-and-configuration"},"extending the ",(0,i.kt)("inlineCode",{parentName:"a"},"ConfigurableServiceBase")," class"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { ServiceBase } from "@vertigis/web/services";\nimport { command, operation } from "@vertigis/web/messaging";\n\nexport default class ExampleService extends ServiceBase {\n\n    someSharedGlobalState: Map<string,string>;\n\n    @command("example-service.some-command")\n    protected _someCommand(args: any) {\n        ...\n    }\n\n    @operation("example-service.some-operation")\n    protected async _someOperation(){\n        ...\n        return result;\n    }\n}\n')),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)(s.Z,{mdxType:"UseCaseContainer"},(0,i.kt)(a.Z,{title:"Create a Service",description:"Learn how to create a basic service",link:(0,o.Z)("docs/web/sdk-services-create"),mdxType:"UseCaseCard"}),(0,i.kt)(a.Z,{title:"Check out the Service Reference",description:"Take a deep dive into services in the VertiGIS Studio Web SDK",link:(0,o.Z)("docs/web/sdk-services-reference"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0}}]);