"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[3428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),o=n(3727),i=n(2263),r=n(3919),s=n(412);const l=(0,a.createContext)({collectLink:()=>{}});var p=n(4996),m=n(8780);const c=function({isNavLink:e,to:t,href:n,activeClassName:c,isActive:d,"data-noBrokenLinkCheck":u,autoAddBaseUrl:h=!0,...f}){var g;const{siteConfig:{trailingSlash:k}}=(0,i.Z)(),{withBaseUrl:v}=(0,p.C)(),b=(0,a.useContext)(l),w=t||n,N=(0,r.Z)(w),y=null==w?void 0:w.replace("pathname://","");let C=void 0!==y?(x=y,h&&(e=>e.startsWith("/"))(x)?v(x):x):void 0;var x;C&&N&&(C=(0,m.applyTrailingSlash)(C,k));const S=(0,a.useRef)(!1),I=e?o.OL:o.rU,M=s.Z.canUseIntersectionObserver;let T;(0,a.useEffect)((()=>(!M&&N&&null!=C&&window.docusaurus.prefetch(C),()=>{M&&T&&T.disconnect()})),[C,M,N]);const O=null!==(g=null==C?void 0:C.startsWith("#"))&&void 0!==g&&g,E=!C||!N||O;return C&&N&&!O&&!u&&b.collectLink(C),E?a.createElement("a",{href:C,...w&&!N&&{target:"_blank",rel:"noopener noreferrer"},...f}):a.createElement(I,{...f,onMouseEnter:()=>{S.current||null==C||(window.docusaurus.preload(C),S.current=!0)},innerRef:e=>{var t,n;M&&e&&N&&(t=e,n=()=>{null!=C&&window.docusaurus.prefetch(C)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:C||"",...e&&{isActive:d,activeClassName:c}})}},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{Z:()=>o,b:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>i,Z:()=>r});var a=n(2263),o=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),o=n(944),i=n(6010);const r="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,p=39;const m=function(e){const{lazy:t,block:n,defaultValue:m,values:c,groupId:d,className:u}=e,{tabGroupChoices:h,setTabGroupChoices:f}=(0,o.Z)(),[g,k]=(0,a.useState)(m),v=a.Children.toArray(e.children),b=[];if(null!=d){const e=h[d];null!=e&&e!==g&&c.some((t=>t.value===e))&&k(e)}const w=e=>{const t=e.currentTarget,n=b.indexOf(t),a=c[n].value;k(a),null!=d&&(f(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:r}=window;return t>=0&&o<=r&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case p:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case l:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},u)},c.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":g===e}),key:e,ref:e=>b.push(e),onKeyDown:N,onFocus:w,onClick:w},t)))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(9443);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":t?(o=n).endsWith("/")?o:`${o}/`:function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);var o;return e.replace(n,a)}},8780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(o).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},921:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const o="video_21ps";function i({src:e}){return a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,className:o},a.createElement("source",{src:e,type:"video/webm"}),"Your browser does not support the video tag.")}},1962:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(6742),o=n(7294),i=n(6010);const r="root_2PFE";function s({title:e,description:t,link:n}){return o.createElement("div",{className:(0,i.Z)("card-demo",r)},o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e)),o.createElement("div",{className:"card__body"},o.createElement("p",null,t)),o.createElement("div",{className:"card__footer"},o.createElement(a.Z,{className:"button button--secondary button--block",to:n},"Get Started"))))}},7763:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const o="root_NqT0";function i({children:e}){return a.createElement("div",{className:o},e)}},2339:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=n(7462),o=(n(7294),n(3905)),i=n(4996),r=n(1395),s=n(8215),l=n(921),p=n(1962),m=n(7763);const c={title:"Commands and Operations",description:"VertiGIS Studio Mobile - Learn about commands and operations"},d=void 0,u={unversionedId:"mobile/configuration-commands-operations",id:"mobile/configuration-commands-operations",isDocsHomePage:!1,title:"Commands and Operations",description:"VertiGIS Studio Mobile - Learn about commands and operations",source:"@site/docs/mobile/configuration-commands-operations.mdx",sourceDirName:"mobile",slug:"/mobile/configuration-commands-operations",permalink:"/docs/mobile/configuration-commands-operations",editUrl:"https://github.com/vertigis/studio-dev-center/edit/master/docs/mobile/configuration-commands-operations.mdx",version:"current",frontMatter:{title:"Commands and Operations",description:"VertiGIS Studio Mobile - Learn about commands and operations"},sidebar:"mobile",previous:{title:"Configuring the Theme",permalink:"/docs/mobile/configuration-theme"},next:{title:"Configure Button Click Behavior",permalink:"/docs/mobile/tutorial-configure-button-click"}},h=[{value:"Workflow Command",id:"workflow-command",children:[]},{value:"Configuring Commands and Operations",id:"configuring-commands-and-operations",children:[{value:"Passing Explicit Arguments",id:"passing-explicit-arguments",children:[]},{value:"Passing Implicit Arguments",id:"passing-implicit-arguments",children:[]}]},{value:"Command Chains",id:"command-chains",children:[]},{value:"Example: Configured Map and I Want To Menu",id:"example-configured-map-and-i-want-to-menu",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={toc:h};function g({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Before learning about commands and operations...")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/key-concepts"},"Key Concepts"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Commands and operations")," are runnable, independent units of work within VertiGIS Studio Mobile. Commands and operations act as global functions which can be\nexecuted from any component or service."),(0,o.kt)("p",null,"In VertiGIS Studio Mobile, commands and operations are compatible extensions of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/commanding"},"ICommand interface")," with strongly typed arguments and return values. Operations are implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"ICommand")," that have been extended to have an ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteAsync")," method, which allows the operation to run asynchronously and return a value. Commands and Operations are registered with the globally available service ",(0,o.kt)("inlineCode",{parentName:"p"},"IOperationRegistry"),", in which they can be looked up by their ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),". Commands and Operations are grouped by namespaces, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"auth.sign-in\nauth.sign-out\nedit.add-feature\nedit.delete-features\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The full list of existing commands and operations available in VertiGIS Studio Mobile can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/api-commands-operations-events"},"found in the API documentation"),"."))),(0,o.kt)("p",null,"Commands and operations are used to power much of VertiGIS Studio Mobile's built in behavior and interactions. They can be run through configuration, or through ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-commands-operations"},"custom services")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/sdk-commands-operations"},"components"),"."),(0,o.kt)("p",null,"One thing that makes commands and operations so powerful is that built in components have properties in the app config which take them as values. They power everything from basic components like the IWTM, to advanced functionality like the results list. This allows built-in component's internal behavior to be configured with different commands and operations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...{\n            "$type": "feature-details",\n            "id": "feature-details",\n            // highlight-next-line\n            "onFeatureShow": "highlights.add-focus",\n            // highlight-next-line\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            // highlight-start\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n            // highlight-end\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"workflow-command"},"Workflow Command"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/workflow/"},"VertiGIS Studio Workflow")," can allow for the creation of completely customized behavior without writing custom code. VertiGIS Studio Mobile has a special command, ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow.run"),", which allows you to run workflows anywhere you would run a command or operation. Using workflow, you can take custom behavior in VertiGIS Studio Mobile further without having to write custom code."),(0,o.kt)("p",null,"Check out this example of ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-run-workflow-app-config"},"running a workflow from app config"),"."),(0,o.kt)("h2",{id:"configuring-commands-and-operations"},"Configuring Commands and Operations"),(0,o.kt)("p",null,"Commands and operations can be used through the app config to customize built in components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "menu-item",\n            "id": "button-config",\n            "iconId": "zoom-in",\n            "title": "Zoom In",\n            // highlight-next-line\n            "action": "map.zoom-in"\n        }\n        ...\n    ]\n}\n')),(0,o.kt)("p",null,"App config properties like ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," can accept a singular command/operation or a ",(0,o.kt)("strong",{parentName:"p"},"command chain")," ."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations and commands, allowing for complex input dependent behavior."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "menu-item",\n    "id": "zoom",\n    "title": "Zoom to Features",\n    // highlight-next-line\n    "action": ["map.zoom-to-features", "highlights.pulse"]\n}\n')),(0,o.kt)("h3",{id:"passing-explicit-arguments"},"Passing Explicit Arguments"),(0,o.kt)("p",null,"Commands and operations can be configured with an ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," property that passes values to the function at execution time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "menu",\n    "id": "iwtm",\n    "items": [\n        {\n            "title": "Rotate by 45 Degrees",\n            "isEnabled": true,\n            "iconId": "sync",\n            "action": {\n                "name": "map.rotate-by",\n                "arguments": {\n                    "rotation": 45\n                }\n            }\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Each command has typed arguments that will ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-app-config-reference#schema-properties"},"autocomplete in the app.json"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"map.rotate-by")," takes a object of type ",(0,o.kt)("inlineCode",{parentName:"p"},"MapRotateArgs"),", which has the property ",(0,o.kt)("inlineCode",{parentName:"p"},"Rotation")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"double"),". In the app config, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Rotation")," property can be camelCased instead of PascalCased."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can find out what arguments a command or operation takes in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/api-commands-operations-events"},"commands and operations API reference"),"."))),(0,o.kt)("h3",{id:"passing-implicit-arguments"},"Passing Implicit Arguments"),(0,o.kt)("p",null,"If you do not pass explicit arguments, then implicit arguments will be passed to the command or operation. Implicit arguments come from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"},"context")," that a command or operation is running in, or from a previous operation in the command chain"),(0,o.kt)("p",null,"For example, let's look at the configuration for a ",(0,o.kt)("inlineCode",{parentName:"p"},"<feature-details>")," component. ",(0,o.kt)("inlineCode",{parentName:"p"},"highlights.add-focus")," has been configured as the command that runs ",(0,o.kt)("inlineCode",{parentName:"p"},"onFeatureShow"),", but it is not passed any arguments explicitly. Instead, the command receives arguments from the ",(0,o.kt)("strong",{parentName:"p"},"context")," it is run in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus"\n}\n')),(0,o.kt)("p",null,"In this example, the context is the feature details menu, so ",(0,o.kt)("inlineCode",{parentName:"p"},"highlights.add-focus")," will receive an argument with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Features")," property, which is the shape of argument it needs."),(0,o.kt)("p",null,"Arguments are also passed implicitly if you create a command chain, which runs operations one after the other."),(0,o.kt)("h2",{id:"command-chains"},"Command Chains"),(0,o.kt)("p",null,"App config properties that accept a command or operation can take a single operation or they can take a ",(0,o.kt)("strong",{parentName:"p"},"command chain"),". Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations, allowing for complex chains of behavior."),(0,o.kt)("p",null,"For example, here's configuration for the various behaviors of a ",(0,o.kt)("inlineCode",{parentName:"p"},"<feature-details>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus",\n    "onFeatureDelete": [\n        "highlights.remove-focus",\n        "highlights.remove",\n        "edit.delete-features",\n        "results.hide-details",\n        "results.remove"\n    ]\n}\n')),(0,o.kt)("p",null,"In this example, when a feature is deleted,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The focus and highlights are removed,"),(0,o.kt)("li",{parentName:"ul"},"The feature is deleted from the layer,"),(0,o.kt)("li",{parentName:"ul"},"The results details are hidden,"),(0,o.kt)("li",{parentName:"ul"},"The feature is removed from the results list.")),(0,o.kt)("p",null,"Since these commands and operations are running from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"},"context")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},"<feature-details>")," component, the first command or operation will receive the relevant feature as its input. If the property is a command chain, the next step in line will receive one of two possible inputs."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the previous step was a command (which doesn't produce output), then the original input is passed on to the next step."),(0,o.kt)("li",{parentName:"ol"},"If the previous step was an operation (which produces an output), then the output of that operation is passed onto the next step.")),(0,o.kt)("p",null,"In this way, you can run multiple commands in a row that receive a feature as input, as seen in the ",(0,o.kt)("inlineCode",{parentName:"p"},"onFeatureDelete")," command chain in the example."),(0,o.kt)("h2",{id:"example-configured-map-and-i-want-to-menu"},"Example: Configured Map and I Want To Menu"),(0,o.kt)(r.Z,{defaultValue:"app",values:[{label:"App Config",value:"app"},{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"app",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'},'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "demo-map",\n            "onClick": [\n                "tasks.identify",\n                "highlights.add-focus",\n                "highlights.pulse"\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Return to Default Map View",\n                    "isEnabled": true,\n                    "iconId": "zoom_initial",\n                    "action": [\n                        {\n                            "name": "map.zoom-to-initial-viewpoint",\n                            "arguments": {\n                                "maps": "item://map-extension/demo-map"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'))),(0,o.kt)(s.Z,{value:"layout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'},'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n  xmlns="https://geocortex.com/layout/v1"\n  xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    <map config="demo-map" slot="main">\n    <stack margin="0.8" slot="top-right" halign="end">\n      <iwtm config="iwtm" />\n    </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n'))),(0,o.kt)(s.Z,{value:"ui",mdxType:"TabItem"},(0,o.kt)(l.Z,{src:(0,i.Z)("video/commands-operations-demo.webm"),mdxType:"DemoVideo"}))),(0,o.kt)("p",null,"This example demonstrates two different types of argument passing behavior. The first action in the app config is a command chain defined on the ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," property of a map. This chain consists of three operations and commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task.identify"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"highlights.add-focus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"highlights.pulse"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tasks.identify")," does not have any named arguments defined, so it will take arguments passed into it from its current ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vertigisstudio.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"},"context"),". Since this chain is run on a map click, the context argument passed in has the shape:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "geometry": "Esri.Point(<map-click-location>)",\n  ... <other props>\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tasks.identify")," receives this argument, and since it is an operation, produces an output. Looking at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/api-commands-operations-events"},"Commands and Operations Documentation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tasks.identify")," has output with the shape:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "features": [<feature1>, <feature2>, ...],\n  "results": [<Result(feature1)>, <Result(feature2)>, ...],\n  ... <other props>\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"highlights.add-focus")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"highlights.pulse"),' both take an input object with a "features" property, so the output of ',(0,o.kt)("inlineCode",{parentName:"p"},"tasks.identify")," will work nicely. ",(0,o.kt)("inlineCode",{parentName:"p"},"highlights.add-focus")," is immediately after ",(0,o.kt)("inlineCode",{parentName:"p"},"tasks.identify"),", so it receives the output of identify. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"highlights.add-focus")," is a command, it does not produce any output. ",(0,o.kt)("inlineCode",{parentName:"p"},"highlights.pulse")," will receive the output of the last operation, ",(0,o.kt)("inlineCode",{parentName:"p"},"tasks.identify"),". In this way, you can pass the output of an operation to multiple commands."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/tutorial-change-default-behavior"},"Change Default Behavior")," for more ways to override default behavior like a Map's on click event."))),(0,o.kt)("p",null,"The second command/operation in this application is a ",(0,o.kt)("inlineCode",{parentName:"p"},"map.zoom-to-initial-viewpoint")," command on the I Want To Menu. This command takes a MapExtensionArgs, which is provided as a named argument. The ",(0,o.kt)("inlineCode",{parentName:"p"},"maps")," property in the argument references the ",(0,o.kt)("inlineCode",{parentName:"p"},"demo-map")," in the config through an ",(0,o.kt)("strong",{parentName:"p"},"Item URI"),". Item URIs are a way of referencing other items within the app config. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile/configuration-app-config-reference#item-uris-and-resource-uris"},"Item URIs")," for more details."),(0,o.kt)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),(0,o.kt)("p",null,"Check out the relevant VertiGIS Studio Mobile SDK Samples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Commands"},"Commands"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/MapAndFeatureCommands"},"Map and Feature Commands")))),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"VertiGIS Studio Mobile has a large array of built-in command and operations that you can chain to power custom behavior. Custom commands and operations can also be implemented with the SDK."),(0,o.kt)(m.Z,{mdxType:"UseCaseContainer"},(0,o.kt)(p.Z,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:(0,i.Z)("docs/mobile/api-commands-operations-events"),mdxType:"UseCaseCard"}),(0,o.kt)(p.Z,{title:"Configure Commands and Operations",description:"Change built-in behavior or add new behavior using app config and layout",link:(0,i.Z)("docs/mobile/tutorial-change-default-behavior"),mdxType:"UseCaseCard"}),(0,o.kt)(p.Z,{title:"Build your own Commands and Operations",description:"Use the SDK to implement custom commands and operations",link:(0,i.Z)("docs/mobile/tutorial-implement-command-operation"),mdxType:"UseCaseCard"}),(0,o.kt)(p.Z,{title:"Learn about Events built into VertiGIS Studio Mobile",description:"Learn about the global event infrastructure in VertiGIS Studio Mobile",link:(0,i.Z)("docs/mobile/sdk-events-reference"),mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);