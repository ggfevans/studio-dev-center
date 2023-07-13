"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||n;return r?i.createElement(d,a(a({ref:t},p),{},{components:r})):i.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<n;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=r(7462),o=(r(7294),r(3905));const n={title:"Integrating the ArcGIS Runtime SDK for .NET",description:"VertiGIS Studio Workflow - Integrate the ArcGIS Runtime SDK for .NET into custom activities for .NET applications"},a=void 0,s={unversionedId:"workflow/sdk-net-integrating-the-arcgis-api",id:"workflow/sdk-net-integrating-the-arcgis-api",title:"Integrating the ArcGIS Runtime SDK for .NET",description:"VertiGIS Studio Workflow - Integrate the ArcGIS Runtime SDK for .NET into custom activities for .NET applications",source:"@site/docs/workflow/sdk-net-integrating-the-arcgis-api.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-net-integrating-the-arcgis-api",permalink:"/docs/workflow/sdk-net-integrating-the-arcgis-api",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-net-integrating-the-arcgis-api.mdx",tags:[],version:"current",frontMatter:{title:"Integrating the ArcGIS Runtime SDK for .NET",description:"VertiGIS Studio Workflow - Integrate the ArcGIS Runtime SDK for .NET into custom activities for .NET applications"},sidebar:"workflow",previous:{title:"Registering .NET Activities with VertiGIS Studio Workflow Designer",permalink:"/docs/workflow/sdk-net-register-activities"},next:{title:"SDK Overview",permalink:"/docs/workflow/sdk-mobile-overview"}},c={},l=[{value:"VertiGIS Studio Mobile",id:"vertigis-studio-mobile",level:2},{value:"VertiGIS Studio Workflow Server",id:"vertigis-studio-workflow-server",level:2}],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apps.vertigisstudio.com/workflow/designer/"},"VertiGIS Studio Workflow")," was designed to be a flexible tool for implementing business logic for mapping applications, and tightly integrates with ArcGIS Runtime SDK for .NET. You may want to use the ArcGIS Runtime SDK in your own custom activities; this article will explain how to reference ArcGIS Runtime SDK types in your custom activity or custom form elements for .NET applications."),(0,o.kt)("h2",{id:"vertigis-studio-mobile"},"VertiGIS Studio Mobile"),(0,o.kt)("p",null,"The VertiGIS Studio Mobile ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-overview"},"Quickstart")," already references the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/net/latest/api-reference/"},"ArcGIS Runtime SDK for .NET"),", so integrating the ArcGIS API is as easy as adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," statement to the top of your custom activity or form element."),(0,o.kt)("p",null,"For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},"using Esri.ArcGISRuntime.Data;\n")),(0,o.kt)("h2",{id:"vertigis-studio-workflow-server"},"VertiGIS Studio Workflow Server"),(0,o.kt)("p",null,"It is ",(0,o.kt)("strong",{parentName:"p"},"not possible")," to reference the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/net/latest/api-reference/"},"ArcGIS Runtime SDK for .NET")," in VertiGIS Studio Workflow Server, as the licensing does not allow for this usage."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Consider using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/geometries.htm#Work_with_Geometries%3FTocPath%3DWork%2520with%2520Geometries%7C_____0"},"Geoprocessing activities")," in a client workflow or the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activities/run-python.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____174"},(0,o.kt)("inlineCode",{parentName:"a"},"Run Python"))," activity on the server to have your workflow offload any operations that require server processing of ArcGIS types.")))}f.isMDXComponent=!0}}]);