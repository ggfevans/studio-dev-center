"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[3482,2006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),m=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,m.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var h=n(2389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=m.indexOf(t),r=u[n].value;r!==i&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",w.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",w.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},2349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"workflow/snippets/prereqs-web",id:"workflow/snippets/prereqs-web",title:"prereqs-web",description:"Follow the instructions in the Web Applications SDK page to set up your development environment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",sourceDirName:"workflow/snippets",slug:"/workflow/snippets/prereqs-web",permalink:"/docs/workflow/snippets/prereqs-web",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow the instructions in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview"},"Web Applications SDK")," page to set up your development environment."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A working knowledge of ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is recommended before extending Workflow for web-based hosts.")))}p.isMDXComponent=!0},5262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4996),l=n(2349),i=n(4866),s=n(5162);const u={title:"Implement a Star Rating Custom Form Element",description:"VertiGIS Studio Workflow - Implement a star rating form element for web applications"},m=void 0,c={unversionedId:"workflow/tutorial-web-implement-star-rating-form-element",id:"workflow/tutorial-web-implement-star-rating-form-element",title:"Implement a Star Rating Custom Form Element",description:"VertiGIS Studio Workflow - Implement a star rating form element for web applications",source:"@site/docs/workflow/tutorial-web-implement-star-rating-form-element.mdx",sourceDirName:"workflow",slug:"/workflow/tutorial-web-implement-star-rating-form-element",permalink:"/docs/workflow/tutorial-web-implement-star-rating-form-element",draft:!1,editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/workflow/tutorial-web-implement-star-rating-form-element.mdx",tags:[],version:"current",frontMatter:{title:"Implement a Star Rating Custom Form Element",description:"VertiGIS Studio Workflow - Implement a star rating form element for web applications"},sidebar:"workflow",previous:{title:"Implement an activity that creates a QR Code image using a Third Party Library",permalink:"/docs/workflow/tutorial-web-qr-code-activity"},next:{title:"Implement a Star Rating Custom Form Element using a Third Party Library",permalink:"/docs/workflow/tutorial-web-implement-third-party-star-rating-form-element"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Set up the Custom Form Element Skeleton",id:"set-up-the-custom-form-element-skeleton",level:2},{value:"Build the Star Rating UI",id:"build-the-star-rating-ui",level:2},{value:"Add Interactivity and Expose the Form Element&#39;s Value",id:"add-interactivity-and-expose-the-form-elements-value",level:2},{value:"Deploy the Activity",id:"deploy-the-activity",level:2},{value:"Test the Activity",id:"test-the-activity",level:2}],f={toc:d},g="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Implementing a custom ",(0,a.kt)("a",{parentName:"p",href:"/docs/workflow/key-concepts#form-elements"},"form element")," allows you to augment the existing ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"},"form elements that come with VertiGIS Studio Workflow"),"."),(0,a.kt)("p",null,"This article will walk you through creating a form element for rating that allows you to select up to five stars."),(0,a.kt)("img",{src:(0,o.Z)("img/workflow-web-custom-star-rating.png")}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)(l.default,{mdxType:"WebPrereqs"}),(0,a.kt)("p",null,"Custom workflow form elements are built in TypeScript and ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Implementing a custom form element for web applications just involves creating the custom form element and implementing the UI."),(0,a.kt)("h2",{id:"set-up-the-custom-form-element-skeleton"},"Set up the Custom Form Element Skeleton"),(0,a.kt)("p",null,"To create a new form element:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the Workflow activity SDK in Visual Studio Code.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run generate")," in the terminal.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When prompted, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Form Element"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the name of the form element you would like to create and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter"),". For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"StarRating"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the newly created ",(0,a.kt)("inlineCode",{parentName:"p"},"src/elements/StarRating.tsx")," file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new file ",(0,a.kt)("inlineCode",{parentName:"p"},"StarRating.tsx")," in the activity SDK.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a skeleton React form element."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/elements/StarRating.tsx"',title:'"src/elements/StarRating.tsx"'},'import * as React from "react";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow";\n\ninterface StarRatingProps extends FormElementProps<number> {}\n\nfunction StarRating(props: StarRatingProps): React.ReactElement {\n    return <div>Hello. Is it me you\'re looking for.</div>;\n}\n\nconst StarRatingElementRegistration: FormElementRegistration<StarRatingProps> =\n    {\n        component: StarRating,\n        getInitialProperties: () => ({ value: 0 }),\n        id: "StarRating",\n    };\n\nexport default StarRatingElementRegistration;\n')),(0,a.kt)("h2",{id:"build-the-star-rating-ui"},"Build the Star Rating UI"),(0,a.kt)("p",null,"Next, we are going to build the form element to display the five stars the user can select. Form Elements are just React elements, and use React patterns to define their UI."),(0,a.kt)("p",null,"First, let's build the star DOM elements."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/elements/StarRating.tsx"',title:'"src/elements/StarRating.tsx"'},'import * as React from "react";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow";\n\ninterface StarRatingProps extends FormElementProps<number> {}\n\nfunction StarRating(props: StarRatingProps): React.ReactElement {\n    const rating = 5;\n\n    // Button style to show only the button content.\n    const baseStyle: React.CSSProperties = {\n        background: "none",\n        border: "none",\n        outline: "none",\n        fontSize: "2em",\n        padding: 0,\n    };\n\n    // Button styles to show selected and unselected states.\n    const selectedStyle = { ...baseStyle, ...{ color: "#ffa91b" } };\n    const unselectedStyle = { ...baseStyle, ...{ color: "#c6c6c6" } };\n\n    // Create 5 buttons\n    const buttons: JSX.Element[] = [];\n    for (let i = 1; i <= 5; i++) {\n        buttons.push(\n            <button\n                value={i}\n                style={rating < i ? unselectedStyle : selectedStyle}\n            >\n                \u2605\n            </button>\n        );\n    }\n\n    return <div>{buttons}</div>;\n}\n\nconst StarRatingElementRegistration: FormElementRegistration<StarRatingProps> =\n    {\n        component: StarRating,\n        getInitialProperties: () => ({ value: 0 }),\n        id: "StarRating",\n    };\n\nexport default StarRatingElementRegistration;\n')),(0,a.kt)("h2",{id:"add-interactivity-and-expose-the-form-elements-value"},"Add Interactivity and Expose the Form Element's Value"),(0,a.kt)("p",null,"Next, we are going to add interactivity to the form element to show how many stars the user has selected."),(0,a.kt)(i.Z,{defaultValue:"custom-form-element",values:[{label:"Star Rating Form Element",value:"custom-form-element"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"custom-form-element",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/elements/StarRating.tsx"',title:'"src/elements/StarRating.tsx"'},'import * as React from "react";\nimport {\n    FormElementProps,\n    FormElementRegistration,\n} from "@vertigis/workflow";\n\ninterface StarRatingProps extends FormElementProps<number> {}\n    // highlight-start\n    const { setValue, value } = props;\n\n    const handleClick = (event) => {\n        // Get the value from the button.\n        // Parse as an integer because the value is a string in the event.\n        const newValue = parseInt(event.target.value);\n\n        if (value !== newValue) {\n            // Update the element\'s value.\n            setValue(newValue);\n        }\n    };\n    // highlight-end\n\n    // Button style to show only the button content.\n    const baseStyle: React.CSSProperties = {\n        background: "none",\n        border: "none",\n        outline: "none",\n        fontSize: "2em",\n        padding: 0,\n    };\n\n    // Button styles to show selected and unselected states.\n    const selectedStyle = { ...baseStyle, ...{ color: "#ffa91b" } };\n    const unselectedStyle = { ...baseStyle, ...{ color: "#c6c6c6" } };\n\n    // Create 5 buttons\n    const buttons: JSX.Element[] = [];\n    for (let i = 1; i <= 5; i++) {\n        buttons.push(\n            <button\n                // highlight-start\n                onClick={handleClick}\n                // highlight-end\n                value={i}\n                style={value < i ? unselectedStyle : selectedStyle}\n            >\n                \u2605\n            </button>\n        );\n    }\n\n    return <div>{buttons}</div>;\n}\n\nconst StarRatingElementRegistration: FormElementRegistration<StarRatingProps> =\n    {\n        component: StarRating,\n        getInitialProperties: () => ({ value: 0 }),\n        id: "StarRating",\n    };\n\nexport default StarRatingElementRegistration;\n'))),(0,a.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,a.kt)("img",{src:(0,o.Z)("img/workflow-web-custom-star-rating.png")}))),(0,a.kt)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),(0,a.kt)("p",null,"Follow the instructions to ",(0,a.kt)("a",{parentName:"p",href:"/docs/workflow/sdk-web-overview#deployment"},"build and deploy the activity pack"),"."),(0,a.kt)("h2",{id:"test-the-activity"},"Test the Activity"),(0,a.kt)("p",null,"Once your activity pack is hosted and registered, your custom form element should appear in the form element toolbox in VertiGIS Studio Workflow Designer alongside the built-in form elements, and can be used in the graphical interface like any other form element."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"You can",(0,a.kt)("a",{href:(0,o.Z)("workflows/web-custom-form-element.json"),download:"custom-form-element.json",target:"_blank"}," ","download this demo workflow"," "),"that registers and displays the custom form element and then",(0,a.kt)("a",{href:"https://docs.vertigisstudio.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the VertiGIS Studio Workflow Designer."," "),"You will have to"," ",(0,a.kt)("a",{href:(0,o.Z)("docs/workflow/sdk-web-overview#host-the-activity-pack")}," ","deploy the custom activity and form element")," ","for it to function. This workflow assumes you are hosting the activity pack with the dev server on https://localhost:57999/.")),(0,a.kt)("img",{src:(0,o.Z)("img/workflow-web-custom-form-element-basic.png")}))}h.isMDXComponent=!0}}]);