(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var o=n(3),a=(n(0),n(255)),r=n(256),c=n(264),i=n(265),l=n(261),s=n(260);const p={title:"Create a Component",description:"Geocortex Web - Create a component for Geocortex Web"},m={unversionedId:"web/sdk-components-create",id:"web/sdk-components-create",isDocsHomePage:!1,title:"Create a Component",description:"Geocortex Web - Create a component for Geocortex Web",source:"@site/docs/web/sdk-components-create.mdx",slug:"/web/sdk-components-create",permalink:"/docs/web/sdk-components-create",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-create.mdx",version:"current",sidebar:"web",previous:{title:"Components Overview",permalink:"/docs/web/sdk-components-overview"},next:{title:"Component Reference",permalink:"/docs/web/sdk-components-reference"}},u=[{value:"Create the Component",id:"create-the-component",children:[]},{value:"Create the Component Model",id:"create-the-component-model",children:[]},{value:"Register the Component",id:"register-the-component",children:[]},{value:"Add the Component to your Layout",id:"add-the-component-to-your-layout",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={toc:u};function b({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," project template includes an example of a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-create"}),"custom component")," following our best practices. Creating a new custom component involves a few important steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#create-the-component"}),"Create the component source file")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#create-the-component-model"}),"Create the component model")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#register-the-component"}),"Register the component and component model in your library registration file"))),Object(a.b)("h2",{id:"create-the-component"},"Create the Component"),Object(a.b)("p",null,"Create the component source file in a new folder within the ",Object(a.b)("inlineCode",{parentName:"p"},"src/components")," folder. For example to create a new component called ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleComponent"),", create a new file called ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleComponent.tsx")," in ",Object(a.b)("inlineCode",{parentName:"p"},"src/components/ExampleComponent")," with the following content:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/ExampleComponent/ExampleComponent.tsx"',title:'"src/components/ExampleComponent/ExampleComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@vertigis/web/components";\nimport React from "react";\n\n// We will create this model in the next step.\nimport ExampleComponentModel from "./ExampleComponentModel";\n\nconst ExampleComponent = (\n    props: LayoutElementProperties<ExampleComponentModel>\n) => {\n    const { model } = props;\n\n    return (\n        <LayoutElement {...props}>\n            <p>{model.exampleValue}</p>\n        </LayoutElement>\n    );\n};\n\nexport default ExampleComponent;\n')),Object(a.b)("h2",{id:"create-the-component-model"},"Create the Component Model"),Object(a.b)("p",null,"Next we need to create the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-reference#models"}),"component model")," that will be bound to the component we just created. This model will function as the underlying data source for the component."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"It's best practice to use the model to define configurable or persistent state, and use the React state hooks for UI specific transient state, like an active selection."))),Object(a.b)("p",null,"Create a new file called ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleComponentModel.ts")," in ",Object(a.b)("inlineCode",{parentName:"p"},"src/components/ExampleComponent"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/ExampleComponent/ExampleComponentModel.ts"',title:'"src/components/ExampleComponent/ExampleComponentModel.ts"'}),'import {\n    ComponentModelBase,\n    ComponentModelProperties,\n    serializable,\n    PropertyDefs,\n} from "@vertigis/web/models";\n\ninterface ExampleComponentModelProperties\n    extends ComponentModelProperties {\n    exampleValue?: string;\n}\n\n// The serializable decorator marks this class as being serializable\n// so it can be serialized to/from the app.json configuration of\n// your app.\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<ExampleComponentModelProperties> {\n    exampleValue: string;\n\n    // This method defines how the model will be serialized and deserialized into\n    // an app item. We override it to include our new property `exampleValue`.\n    protected _getSerializableProperties(): PropertyDefs<ExampleComponentModelProperties> {\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            exampleValue: {\n                serializeModes: ["initial"],\n                default: "Default Value",\n            },\n        };\n    }\n}\n')),Object(a.b)("h2",{id:"register-the-component"},"Register the Component"),Object(a.b)("p",null,"Finally we need to register the component and component model with the Geocortex Web component registry so that it is aware of your new component."),Object(a.b)("p",null,"To simplify the module imports, we'll make a new file in the ",Object(a.b)("inlineCode",{parentName:"p"},"ExampleComponent")," folder called ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts"),". Note that this file is for convenience, and is not required:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/ExampleComponent/index.ts"',title:'"src/components/ExampleComponent/index.ts"'}),'export { default } from "./ExampleComponent";\nexport { default as ExampleComponentModel } from "./ExampleComponentModel";\n')),Object(a.b)("p",null,"Now register your component and component model with the component registry by modifying the ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.ts")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@vertigis/web/config";\n\n// highlight-start\nimport ExampleComponent, {\n    ExampleComponentModel,\n} from "./components/ExampleComponent";\n// highlight-end\n\n// This namespace is generated when you create your project\n// and will be unique to your library.\nconst LAYOUT_NAMESPACE = "custom.abc123";\n\nexport default function (registry: LibraryRegistry) {\n    // ... other item registrations\n\n    // highlight-start\n    registry.registerComponent({\n        name: "example",\n        namespace: LAYOUT_NAMESPACE,\n        getComponentType: () => ExampleComponent,\n        itemType: "example-model",\n        title: "Example Component",\n    });\n    registry.registerModel({\n        getModel: (config) => new ExampleComponentModel(config),\n        itemType: "example-model",\n    });\n    // highlight-end\n}\n')),Object(a.b)("h2",{id:"add-the-component-to-your-layout"},"Add the Component to your Layout"),Object(a.b)("p",null,"You can now add the component to your ",Object(a.b)("inlineCode",{parentName:"p"},"layout.xml")," file and run the development server to see it in use."),Object(a.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"layout",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="custom.abc123">\n    <custom:example margin="3"/>\n</layout>\n'))),Object(a.b)(i.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(r.a)("img/web-sdk-components-create.png")}))),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(s.a,{mdxType:"UseCaseContainer"},Object(a.b)(l.a,{title:"Check out the Component Reference",description:"Take a deep dive into components in the Geocortex Web SDK",link:Object(r.a)("docs/web/sdk-components-reference"),mdxType:"UseCaseCard"}),Object(a.b)(l.a,{title:"Deploy your Component",description:"Learn how to deploy your custom component.",link:Object(r.a)("docs/web/sdk-deployment"),mdxType:"UseCaseCard"}),Object(a.b)(l.a,{title:"Create a Component with a Complex UI",description:"Follow along with a more in depth component example",link:Object(r.a)("docs/web/tutorial-implement-component-with-ui"),mdxType:"UseCaseCard"}),Object(a.b)(l.a,{title:"Create a Component that Consumes App Config",description:"Learn more about writing components that consume configuration values.",link:Object(r.a)("docs/web/tutorial-implement-component-participate-app-config"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?a.a.createElement(b,i(i({ref:t},s),{},{components:n})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},256:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var o=n(21),a=n(257);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+c:c}(t,e,n,o)}}function c(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},257:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},258:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},259:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(11),c=n(257),i=n(9);const l=Object(o.createContext)({collectLink:()=>{}});var s=n(256),p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:m,href:u,activeClassName:d,isActive:b,"data-noBrokenLinkCheck":f,autoAddBaseUrl:h=!0}=e,O=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(s.b)(),y=Object(o.useContext)(l),v=m||u,C=Object(c.a)(v),g=null==v?void 0:v.replace("pathname://",""),x=void 0!==g?(w=g,h&&(e=>e.startsWith("/"))(w)?j(w):w):void 0;var w;const E=Object(o.useRef)(!1),N=n?r.e:r.c,k=i.a.canUseIntersectionObserver;let T;Object(o.useEffect)((()=>(!k&&C&&window.docusaurus.prefetch(x),()=>{k&&T&&T.disconnect()})),[x,k,C]);const M=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,P=!x||!C||M;return x&&C&&!M&&!f&&y.collectLink(x),P?a.a.createElement("a",Object.assign({href:x},v&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(N,Object.assign({},O,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(x),E.current=!0)},innerRef:e=>{var t,n;k&&e&&C&&(t=e,n=()=>{window.docusaurus.prefetch(x)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:x||""},n&&{isActive:b,activeClassName:d}))}},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),a=n.n(o),r=n(54),c=n.n(r);function i({children:e}){return a.a.createElement("div",{className:c.a.root},e)}},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(259),a=n(0),r=n.n(a),c=n(258),i=n(55),l=n.n(i);function s({title:e,description:t,link:n}){return r.a.createElement("div",{className:Object(c.a)("card-demo",l.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,e)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,t)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(o.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},262:function(e,t,n){"use strict";var o=n(0),a=n(263);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},263:function(e,t,n){"use strict";var o=n(0);const a=Object(o.createContext)(void 0);t.a=a},264:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(262),c=n(258),i=n(56),l=n.n(i);const s=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:u,className:d}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(r.a)(),[h,O]=Object(o.useState)(i),j=o.Children.toArray(e.children);if(null!=u){const e=b[u];null!=e&&e!==h&&m.some((t=>t.value===e))&&O(e)}const y=e=>{O(e),null!=u&&f(u,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},m.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(o.cloneElement)(j.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},265:function(e,t,n){"use strict";var o=n(3),a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);