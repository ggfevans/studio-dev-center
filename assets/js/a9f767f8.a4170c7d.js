"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[9811,2006],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{Z:()=>o,b:()=>n})},4996:(e,t,r)=>{r.d(t,{C:()=>i,Z:()=>a});var n=r(2263),o=r(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},8822:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const i={},a=void 0,l={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",isDocsHomePage:!1,title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",version:"current",frontMatter:{}},m=[],s={toc:m};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview"},"Web Applications SDK")," page to set up your development environment."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A working knowledge of ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is recommended before extending Workflow for web-based hosts."))))}p.isMDXComponent=!0},4306:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),i=r(4996),a=r(8822);const l={title:"Implement a Star Rating Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a star rating form element for web applications using a third party library"},m=void 0,s={unversionedId:"workflow/tutorial-web-implement-third-party-star-rating-form-element",id:"workflow/tutorial-web-implement-third-party-star-rating-form-element",isDocsHomePage:!1,title:"Implement a Star Rating Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a star rating form element for web applications using a third party library",source:"@site/docs/workflow/tutorial-web-implement-third-party-star-rating-form-element.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-web-implement-third-party-star-rating-form-element",permalink:"/docs/workflow/tutorial-web-implement-third-party-star-rating-form-element",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-web-implement-third-party-star-rating-form-element.mdx",version:"current",frontMatter:{title:"Implement a Star Rating Custom Form Element using a Third Party Library",description:"VertiGIS Studio Workflow - Implement a star rating form element for web applications using a third party library"},sidebar:"workflow",previous:{title:"Implement a Star Rating Custom Form Element",permalink:"/docs/workflow/tutorial-web-implement-star-rating-form-element"},next:{title:"Implement a Signature Block Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-signature-block-form-element"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Set up Custom Form Element Skeleton",id:"set-up-custom-form-element-skeleton",children:[]},{value:"Implement the Custom Form Element",id:"implement-the-custom-form-element",children:[]},{value:"Deploy the Form Element",id:"deploy-the-form-element",children:[]},{value:"Test the Form Element",id:"test-the-form-element",children:[]}],c={toc:p};function u({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Implementing a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#form-elements"},"form element")," allows you to augment the existing ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"},"form elements that come with VertiGIS Studio Workflow"),"."),(0,o.kt)("p",null,"This article will walk you through creating a form element that uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ekeric13/react-star-ratings"},"react-star-ratings")," component to allow the user to select up to five stars."),(0,o.kt)("img",{src:(0,i.Z)("img/workflow-web-custom-star-rating.png")}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(a.default,{mdxType:"WebPrereqs"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Implementing a star rating custom form element for web applications using a third party library consists of the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Adding third party library dependencies to your project."),(0,o.kt)("li",{parentName:"ol"},"Creating the custom form element."),(0,o.kt)("li",{parentName:"ol"},"Implementing the custom form element using the third party library.")),(0,o.kt)("h2",{id:"adding-dependencies"},"Adding Dependencies"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install react-star-ratings")," in the terminal to install the third party ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ekeric13/react-star-ratings"},"react-star-ratings")," component.")),(0,o.kt)("h2",{id:"set-up-custom-form-element-skeleton"},"Set up Custom Form Element Skeleton"),(0,o.kt)("p",null,"To create a new form element:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Workflow activity SDK in Visual Studio Code."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run generate")," in the terminal."),(0,o.kt)("li",{parentName:"ol"},"When prompted, select ",(0,o.kt)("inlineCode",{parentName:"li"},"Form Element"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter the name of the form element you would like to create and press ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter"),". For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"StarRating"),"."),(0,o.kt)("li",{parentName:"ol"},"Open the newly created ",(0,o.kt)("inlineCode",{parentName:"li"},"src/elements/StarRating.tsx")," file.")),(0,o.kt)("h2",{id:"implement-the-custom-form-element"},"Implement the Custom Form Element"),(0,o.kt)("p",null,"Modify the skeleton form element implementation in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/elements/StarRating.tsx")," to match the following example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/elements/StarRating.tsx"',title:'"src/elements/StarRating.tsx"'},'import * as React from "react";\nimport StarRatings from "react-star-ratings";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow/runtime";\n\ninterface StarRatingProps extends FormElementProps<number> {}\n\n/**\n * A simple React Component that displays a star rating input.\n * @param props The props that will be provided by the Workflow runtime.\n */\nfunction StarRating(props: StarRatingProps): React.ReactElement {\n    const { setValue, value } = props;\n\n    // Update the form state when the rating value changes.\n    const handleRatingChange = (newRating: number) => {\n        setValue(newRating);\n    };\n\n    return (\n        <StarRatings\n            changeRating={handleRatingChange}\n            rating={value}\n            starDimension="1.5em"\n            starHoverColor="#ffb400"\n            starRatedColor="#ffb400"\n        />\n    );\n}\n\nconst StarRatingElementRegistration: FormElementRegistration<StarRatingProps> =\n    {\n        component: StarRating,\n        getInitialProperties: () => ({ value: 0 }),\n        id: "StarRating",\n    };\n\nexport default StarRatingElementRegistration;\n')),(0,o.kt)("h2",{id:"deploy-the-form-element"},"Deploy the Form Element"),(0,o.kt)("p",null,"Follow the instructions to ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#deployment"},"build and deploy the activity pack"),"."),(0,o.kt)("h2",{id:"test-the-form-element"},"Test the Form Element"),(0,o.kt)("p",null,"Once your activity pack is hosted and registered, your ",(0,o.kt)("inlineCode",{parentName:"p"},"StarRating")," custom form element should appear in the form element toolbox in VertiGIS Studio Workflow Designer alongside the built-in form elements."),(0,o.kt)("p",null,"To use your custom form element in a workflow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Display Form")," activity that you want to include your form element in."),(0,o.kt)("li",{parentName:"ol"},"Locate the ",(0,o.kt)("inlineCode",{parentName:"li"},"StarRating")," form element in the toolbox and drag it onto the form."),(0,o.kt)("li",{parentName:"ol"},"Alternatively:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom")," form element to the form."),(0,o.kt)("li",{parentName:"ol"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom Type")," property of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom")," form element to ",(0,o.kt)("inlineCode",{parentName:"li"},"StarRating"),"."))),(0,o.kt)("li",{parentName:"ol"},"Test your workflow.")))}u.isMDXComponent=!0}}]);