"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[3189,2006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{Z:()=>o,b:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>a,Z:()=>i});var r=n(2263),o=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},8822:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",isDocsHomePage:!1,title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",version:"current",frontMatter:{}},p=[],m={toc:p};function s({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview"},"Web Applications SDK")," page to set up your development environment."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A working knowledge of ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is recommended before extending Workflow for web-based hosts."))))}s.isMDXComponent=!0},9595:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var r=n(7462),o=(n(7294),n(3905)),a=n(4996),i=n(8822);const l={title:"Implement a Captcha Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a captcha form element for web applications using a third party library"},p=void 0,m={unversionedId:"workflow/tutorial-web-implement-third-party-captcha-form-element",id:"workflow/tutorial-web-implement-third-party-captcha-form-element",isDocsHomePage:!1,title:"Implement a Captcha Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a captcha form element for web applications using a third party library",source:"@site/docs/workflow/tutorial-web-implement-third-party-captcha-form-element.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-web-implement-third-party-captcha-form-element",permalink:"/docs/workflow/tutorial-web-implement-third-party-captcha-form-element",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-web-implement-third-party-captcha-form-element.mdx",version:"current",frontMatter:{title:"Implement a Captcha Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a captcha form element for web applications using a third party library"},sidebar:"workflow",previous:{title:"Implement a Signature Block Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-signature-block-form-element"},next:{title:"Implement a QR Code Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-qr-code-form-element"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Google reCAPTCHA",id:"google-recaptcha",children:[]},{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Set up Custom Form Element Skeleton",id:"set-up-custom-form-element-skeleton",children:[]},{value:"Implement the Custom Form Element",id:"implement-the-custom-form-element",children:[]},{value:"Deploy the Form Element",id:"deploy-the-form-element",children:[]},{value:"Test the Form Element",id:"test-the-form-element",children:[]}],c={toc:s};function d({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Implementing a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#form-elements"},"form element")," allows you to augment the existing ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"},"form elements that come with VertiGIS Studio Workflow"),"."),(0,o.kt)("p",null,"This article will walk you through creating a form element that uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dozoisch/react-google-recaptcha"},"react-google-recaptcha")," component to implement a captcha to distinguish humans from bots."),(0,o.kt)("img",{src:(0,a.Z)("img/workflow-web-custom-captcha.png")}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(i.default,{mdxType:"WebPrereqs"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Implementing a captcha custom form element for web applications using a third party library consists of the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Obtaining a Google reCAPTCHA v2 Site Key"),(0,o.kt)("li",{parentName:"ol"},"Adding third party library dependencies to your project."),(0,o.kt)("li",{parentName:"ol"},"Creating the custom form element."),(0,o.kt)("li",{parentName:"ol"},"Implementing the custom form element using the third party library.")),(0,o.kt)("h2",{id:"google-recaptcha"},"Google reCAPTCHA"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dozoisch/react-google-recaptcha"},"react-google-recaptcha")," component uses reCAPTCHA technology from Google."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("a",{parentName:"li",href:"https://www.google.com/recaptcha/about/"},"Google reCAPTCHA")," in a web browser."),(0,o.kt)("li",{parentName:"ol"},"Sign in with your Google account."),(0,o.kt)("li",{parentName:"ol"},"Register a new Site."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"reCAPTCHA v2")," type."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},'"I\'m not a robot" tickbox')," option."),(0,o.kt)("li",{parentName:"ol"},"Add the domain(s) where your web application is hosted."),(0,o.kt)("li",{parentName:"ol"},"This generates a ",(0,o.kt)("inlineCode",{parentName:"li"},"Site Key"),". Copy this value, it will be required later.")),(0,o.kt)("h2",{id:"adding-dependencies"},"Adding Dependencies"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install react-google-recaptcha")," in the terminal to install the third party ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dozoisch/react-google-recaptcha"},"react-google-recaptcha")," component."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install @types/react-google-recaptcha")," in the terminal to install type information for the third party component. This is optional, but it provides an improved developer experience.")),(0,o.kt)("h2",{id:"set-up-custom-form-element-skeleton"},"Set up Custom Form Element Skeleton"),(0,o.kt)("p",null,"To create a new form element:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Workflow activity SDK in Visual Studio Code."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run generate")," in the terminal."),(0,o.kt)("li",{parentName:"ol"},"When prompted, select ",(0,o.kt)("inlineCode",{parentName:"li"},"Form Element"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter the name of the form element you would like to create and press ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter"),". For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"Captcha"),"."),(0,o.kt)("li",{parentName:"ol"},"Open the newly created ",(0,o.kt)("inlineCode",{parentName:"li"},"src/elements/Captcha.tsx")," file.")),(0,o.kt)("h2",{id:"implement-the-custom-form-element"},"Implement the Custom Form Element"),(0,o.kt)("p",null,"Modify the skeleton form element implementation in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/elements/Captcha.tsx")," to match the following example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/elements/Captcha.tsx"',title:'"src/elements/Captcha.tsx"'},'import * as React from "react";\nimport ReCAPTCHA from "react-google-recaptcha";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow/runtime";\n\ninterface CaptchaProps extends FormElementProps<string | undefined> {}\n\n/**\n * @displayName Captcha\n * @description A simple React Component that displays a captcha input.\n * @param props The props that will be provided by the Workflow runtime.\n */\nfunction Captcha(props: CaptchaProps): React.ReactElement {\n    const { setValue } = props;\n\n    const handleChange = (token: string | null) => {\n        setValue(token || undefined);\n    };\n\n    const handleExpired = () => {\n        setValue(undefined);\n    };\n\n    return (\n        <ReCAPTCHA\n            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"\n            onChange={handleChange}\n            onExpired={handleExpired}\n        />\n    );\n}\n\nconst CaptchaElementRegistration: FormElementRegistration<CaptchaProps> =\n    {\n        component: Captcha,\n        getInitialProperties: () => ({ value: undefined }),\n        id: "Captcha",\n    };\n\nexport default CaptchaElementRegistration;\n')),(0,o.kt)("p",null,"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"sitekey")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<ReCAPTCHA>")," element to use your own site key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'return (\n    <ReCAPTCHA\n        // highlight-next-line\n        sitekey="YOUR-SITE-KEY-GOES-HERE"\n        onChange={handleChange}\n        onExpired={handleExpired}\n    />\n);\n')),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sitekey")," included in this tutorial is for demonstration purposes only. It is watermarked and will not produce valid captcha results. You must use your own site key."))),(0,o.kt)("h2",{id:"deploy-the-form-element"},"Deploy the Form Element"),(0,o.kt)("p",null,"Follow the instructions to ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#deployment"},"build and deploy the activity pack"),"."),(0,o.kt)("h2",{id:"test-the-form-element"},"Test the Form Element"),(0,o.kt)("p",null,"Once your activity pack is hosted and registered, your ",(0,o.kt)("inlineCode",{parentName:"p"},"Captcha")," custom form element should appear in the form element toolbox in VertiGIS Studio Workflow Designer alongside the built-in form elements."),(0,o.kt)("p",null,"To use your custom form element in a workflow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Display Form")," activity that you want to include your form element in."),(0,o.kt)("li",{parentName:"ol"},"Locate the ",(0,o.kt)("inlineCode",{parentName:"li"},"Captcha")," form element in the toolbox and drag it onto the form."),(0,o.kt)("li",{parentName:"ol"},"Alternatively:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom")," form element to the form."),(0,o.kt)("li",{parentName:"ol"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom Type")," property of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom")," form element to ",(0,o.kt)("inlineCode",{parentName:"li"},"Captcha"),"."))),(0,o.kt)("li",{parentName:"ol"},"Test your workflow.")))}d.isMDXComponent=!0}}]);