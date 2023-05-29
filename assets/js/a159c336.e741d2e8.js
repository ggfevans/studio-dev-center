"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[5100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,v=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(v,c(c({ref:t},u),{},{components:r})):n.createElement(v,c({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3792:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={title:"Workflow Activity Reference",sidebar_label:"Activity Reference",description:"VertiGIS Studio Workflow - Reference for workflow activities for web applications"},c=void 0,a={unversionedId:"workflow/sdk-web-activity-reference",id:"workflow/sdk-web-activity-reference",isDocsHomePage:!1,title:"Workflow Activity Reference",description:"VertiGIS Studio Workflow - Reference for workflow activities for web applications",source:"@site/docs/workflow/sdk-web-activity-reference.mdx",sourceDirName:"workflow",slug:"/workflow/sdk-web-activity-reference",permalink:"/docs/workflow/sdk-web-activity-reference",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/sdk-web-activity-reference.mdx",version:"current",frontMatter:{title:"Workflow Activity Reference",sidebar_label:"Activity Reference",description:"VertiGIS Studio Workflow - Reference for workflow activities for web applications"},sidebar:"workflow",previous:{title:"Create a Form Element",permalink:"/docs/workflow/sdk-web-create-element"},next:{title:"Form Element Reference",permalink:"/docs/workflow/sdk-web-form-reference"}},s=[{value:"Inputs and Outputs",id:"inputs-and-outputs",children:[]}],l={toc:s};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"inputs-and-outputs"},"Inputs and Outputs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method of an activity class has typed inputs and outputs. These inputs and outputs are decorated with ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-activity-block-tags"},"block tags")," to provide display hints in VertiGIS Studio Workflow Designer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/activities/CustomActivity.ts"',title:'"src/activities/CustomActivity.ts"'},'import type { IActivityHandler } from "@vertigis/workflow/runtime/IActivityHandler";\n\n/** An interface that defines the inputs of the activity. */\nexport interface CustomActivityInputs {\n    // highlight-start\n    /**\n     * @description The first input to the activity.\n     * @required\n     */\n    // highlight-end\n    input1?: string;\n\n    // highlight-start\n    /**\n     * @description The second input to the activity.\n     */\n    // highlight-end\n    input2?: number;\n}\n\n/** An interface that defines the outputs of the activity. */\nexport interface CustomActivityOutputs {\n    // highlight-start\n    /**\n     * @description The result of the activity.\n     */\n    // highlight-end\n    result: string;\n}\n\n/**\n * @category Custom Activities\n * @description A description of the activity.\n */\nexport class CustomActivity implements IActivityHandler {\n    /** Perform the execution logic of the activity. */\n    async execute(\n        inputs: CustomActivityInputs\n    ): Promise<CustomActivityOutputs> {\n        return { result: "test" };\n    }\n}\n')))}u.isMDXComponent=!0}}]);