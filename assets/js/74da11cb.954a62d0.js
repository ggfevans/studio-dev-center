"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[1345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||n;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<n;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5858:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(9960),i=r(7294),n=r(6010);const a={root:"root_Uwqo"};function c(e){let{title:t,description:r,link:c}=e;return i.createElement("div",{className:(0,n.Z)("card-demo",a.root)},i.createElement("div",{className:"card"},i.createElement("div",{className:"card__header"},i.createElement("h3",null,t)),i.createElement("div",{className:"card__body"},i.createElement("p",null,r)),i.createElement("div",{className:"card__footer"},i.createElement(o.Z,{className:"button button--secondary button--block",to:c},"Get Started"))))}},7467:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(7294);const i={root:"root_vxd5"};function n(e){let{children:t}=e;return o.createElement("div",{className:i.root},t)}},186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=r(7462),i=(r(7294),r(3905)),n=r(4996),a=r(5858),c=r(7467);const l={title:"Implement a Custom Activity",description:"VertiGIS Studio Web - Learn how to implement a custom workflow activity"},s=void 0,u={unversionedId:"web/tutorial-implement-custom-activity",id:"web/tutorial-implement-custom-activity",title:"Implement a Custom Activity",description:"VertiGIS Studio Web - Learn how to implement a custom workflow activity",source:"@site/docs/web/tutorial-implement-custom-activity.mdx",sourceDirName:"web",slug:"/web/tutorial-implement-custom-activity",permalink:"/docs/web/tutorial-implement-custom-activity",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/web/tutorial-implement-custom-activity.mdx",tags:[],version:"current",frontMatter:{title:"Implement a Custom Activity",description:"VertiGIS Studio Web - Learn how to implement a custom workflow activity"},sidebar:"web",previous:{title:"Change Default Map Click Behavior",permalink:"/docs/web/tutorial-change-default-map-click-behavior"},next:{title:"Implement a Custom Form Element",permalink:"/docs/web/tutorial-implement-custom-form-elements"}},m={},p=[],d={toc:p},f="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"VertiGIS Studio Web comes with bundled with ",(0,i.kt)("a",{parentName:"p",href:"https://www.vertigisstudio.com/products/vertigis-studio-workflow/"},"VertiGIS Studio Workflow"),". VertiGIS Studio Workflow includes a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"},"large suite of activities")," to help you solve your business case. However, if VertiGIS Studio Workflow is missing functionality you need, you can implement a custom activity with the VertiGIS Studio Workflow SDK."),(0,i.kt)(c.Z,{mdxType:"UseCaseContainer"},(0,i.kt)(a.Z,{title:"VertiGIS Studio Workflow SDK",description:"Learn more about the VertiGIS Studio Workflow SDK",link:(0,n.Z)("docs/workflow/overview"),mdxType:"UseCaseCard"}),(0,i.kt)(a.Z,{title:"Implement a Custom Activity",description:"Learn how to build a custom workflow activity in the VertiGIS Studio Workflow SDK",link:(0,n.Z)("docs/workflow/sdk-web-create-activity"),mdxType:"UseCaseCard"})))}v.isMDXComponent=!0}}]);