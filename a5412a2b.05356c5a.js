(window.webpackJsonp=window.webpackJsonp||[]).push([[103,81,87],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return h}));var a=n(2),o=(n(0),n(229)),i=n(239),r=n(240),c=n(230),l=n(56),s=n(235),u=n(236);const p={title:"Change the Default Behavior of Components",description:"Geocortex Mobile - Learn how to configure Geocortex Mobile to change default application behavior"},d={unversionedId:"mobile/tutorial-change-default-behavior",id:"mobile/tutorial-change-default-behavior",isDocsHomePage:!1,title:"Change the Default Behavior of Components",description:"Geocortex Mobile - Learn how to configure Geocortex Mobile to change default application behavior",source:"@site/docs/mobile/tutorial-change-default-behavior.mdx",slug:"/mobile/tutorial-change-default-behavior",permalink:"/docs/mobile/tutorial-change-default-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-change-default-behavior.mdx",version:"current",sidebar:"mobile",previous:{title:"Configure Button Click Behavior",permalink:"/docs/mobile/tutorial-configure-button-click"},next:{title:"Customize the Theme",permalink:"/docs/mobile/tutorial-customize-application-theme"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Change the Behavior of the Feature Details Component",id:"change-the-behavior-of-the-feature-details-component",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:m};function h({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Many of the behaviors of Geocortex Mobile's built-in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-overview"}),"components")," are configurable through the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-getting-started"}),"app config"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Many behaviors which are configurable through the app config are more easily configurable by using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/mobileviewer/designer/"}),"Geocortex Mobile Designer"),". App config should be used if you need to modify a property not available in the app config, or use a custom command as part of a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations#configuring-commands-and-operations"}),"command chain"),"."))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(l.default,{mdxType:"PrereqsLayoutConfigSnippet"}),Object(o.b)("h2",{id:"change-the-behavior-of-the-feature-details-component"},"Change the Behavior of the Feature Details Component"),Object(o.b)("p",null,"The following example demonstrates changing the ",Object(o.b)("inlineCode",{parentName:"p"},"onFeatureDelete")," property of the ",Object(o.b)("inlineCode",{parentName:"p"},"<feature-details>")," component. The default value of this property is the command chain,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    "highlights.remove-focus",\n    "highlights.remove",\n    "edit.delete-features",\n    "results.hide-details",\n    "results.remove"\n]\n')),Object(o.b)("p",null,'We are going to extend this behavior to add a notification that says "Feature has been deleted". The ',Object(o.b)("inlineCode",{parentName:"p"},"onFeatureDelete")," property is not available to edit through the Geocortex Mobile Designer, but can be edited through the use of app config."),Object(o.b)("p",null,"First, let's create a basic map with a feature details component using the layout and app config."),Object(o.b)(i.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"app"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"app",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "layout",\n            "id": "handheld-layout",\n            "url": "resource://layout-small.xml",\n            "tags": ["mobile", "small"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "webMap": "c6008288a95247428fc55d9aaa72b670",\n            "onClick": [\n                "tasks.identify",\n                "highlights.pulse",\n                "results.display-details"\n            ]\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus"\n        }\n    ]\n}\n'))),Object(o.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n\n    \x3c!-- Taskbar main content --\x3e\n      <map id="default" config="default" slot="main"/>\n\n    \x3c!-- Taskbar / Results --\x3e\n    <panel id="search-panel">\n      <feature-details config="feature-details"/>\n    </panel>\n\n  </gxm:taskbar>\n</layout>\n\n')))),Object(o.b)("p",null,"Next, configure the ",Object(o.b)("inlineCode",{parentName:"p"},"onFeatureDetails")," property of the feature details component to replicate the default behavior. You can test this behavior out by deleting a fire hydrant feature from the map."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "layout",\n            "id": "handheld-layout",\n            "url": "resource://layout-small.xml",\n            "tags": ["mobile", "small"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "webMap": "c6008288a95247428fc55d9aaa72b670",\n            "onClick": [\n                "tasks.identify",\n                "highlights.pulse",\n                "results.display-details"\n            ]\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus",\n            // highlight-start\n            "onFeatureDelete": [\n                "highlights.remove-focus",\n                "highlights.remove",\n                "edit.delete-features",\n                "results.hide-details",\n                "results.remove"\n            ]\n            // highlight-end\n        }\n    ]\n}\n')),Object(o.b)("p",null,"Finally, add a ",Object(o.b)("inlineCode",{parentName:"p"},"ui.display-notification"),' command after the existing command that displays the message "Feature has been deleted".'),Object(o.b)(i.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "layout",\n            "id": "handheld-layout",\n            "url": "resource://layout-small.xml",\n            "tags": ["mobile", "small"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "webMap": "c6008288a95247428fc55d9aaa72b670",\n            "onClick": [\n                "tasks.identify",\n                "highlights.pulse",\n                "results.display-details"\n            ]\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus",\n            "onFeatureDelete": [\n                "highlights.remove-focus",\n                "highlights.remove",\n                "edit.delete-features",\n                "results.hide-details",\n                "results.remove",\n                // highlight-start\n                {\n                    "name": "ui.display-notification",\n                    "arguments": {\n                        "message": "Feature has been deleted."\n                    }\n                }\n                // highlight-end\n            ]\n        }\n    ]\n}\n'))),Object(o.b)(r.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(c.a)("img/mobile-customize-feature-details-component.png")}))),Object(o.b)("p",null,"Congratulations! You just changed the default behavior for a built in component using config. All components can be configured through the app config JSON in this manner."),Object(o.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(o.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Commands"}),"Configuring basic commands"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/MapAndFeatureCommands"}),"Configuring map and feature commands")))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Geocortex Mobile comes with many built-in commands and operations to help you accomplish your goal. If these are not enough, Geocortex Workflow can help you implement custom behaviors without writing custom code. If you cannot create the behavior you want with Geocortex Workflow, it might be time to look into using the Geocortex Mobile SDK to implement a custom command or operation."),Object(o.b)(s.a,{mdxType:"UseCaseContainer"},Object(o.b)(u.a,{title:"Commands and Operations",description:"Learn more about commands and operations",link:Object(c.a)("docs/mobile/configuration-commands-operations"),mdxType:"UseCaseCard"}),Object(o.b)(u.a,{title:"Change Geocortex Mobile's Default Map Click Behavior",description:"Learn how to Geocortex Workflow to override Geocortex Mobile's default map click behavior",link:Object(c.a)("docs/mobile/tutorial-change-default-map-click-behavior"),mdxType:"UseCaseCard"}),Object(o.b)(u.a,{description:"Learn more about Geocortex Workflow",link:Object(c.a)("docs/workflow/overview"),mdxType:"UseCaseCard"}),Object(o.b)(u.a,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:Object(c.a)("docs/mobile/api-commands-operations-events"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},230:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(233),o=n(231);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},231:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},232:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},233:function(e,t,n){"use strict";var a=n(0),o=n(19);t.a=function(){const e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},234:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(13),r=n(231),c=n(8);const l=Object(a.createContext)({collectLink:()=>{}});var s=n(230),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:m,"data-noBrokenLinkCheck":b}=e,h=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:f}=Object(s.b)(),g=Object(a.useContext)(l),v=p||d,y=Object(r.a)(v),O=null==v?void 0:v.replace("pathname://",""),j=void 0!==O?(e=>e.startsWith("/"))(w=O)?f(w):w:void 0;var w;const x=Object(a.useRef)(!1),k=n?i.e:i.c,C=c.a.canUseIntersectionObserver;let N;Object(a.useEffect)(()=>(!C&&y&&window.docusaurus.prefetch(j),()=>{C&&N&&N.disconnect()}),[j,C,y]);const T=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,M=!j||!y||T;return j&&y&&!T&&!b&&g.collectLink(j),M?o.a.createElement("a",Object.assign({href:j},!y&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(k,Object.assign({},h,{onMouseEnter:()=>{x.current||(window.docusaurus.preload(j),x.current=!0)},innerRef:e=>{var t,n;C&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(j)},N=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())})}),N.observe(t))},to:j||""},n&&{activeClassName:m}))}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),i=n(46),r=n.n(i);function c({children:e}){return o.a.createElement("div",{className:r.a.root},e)}},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(234),o=n(0),i=n.n(o),r=n(232),c=n(47),l=n.n(c);function s({title:e,description:t,link:n}){return i.a.createElement("div",{className:Object(r.a)("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,t)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},237:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},238:function(e,t,n){"use strict";var a=n(0),o=n(237);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},239:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(238),r=n(232),c=n(48),l=n.n(c);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:d}=e,{tabGroupChoices:m,setTabGroupChoices:b}=Object(i.a)(),[h,f]=Object(a.useState)(c),[g,v]=Object(a.useState)(!1);if(null!=d){const e=m[d];null!=e&&e!==h&&p.some(t=>t.value===e)&&f(e)}const y=e=>{f(e),null!=d&&b(d,e)},O=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},w=()=>{v(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",w)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),style:g?{}:{outline:"none"},key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),j(e)},onFocus:()=>y(e),onClick:()=>{y(e),v(!1)},onPointerDown:()=>v(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},240:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),o=(n(0),n(229));const i={},r={unversionedId:"mobile/snippets/tweak-layout-config",id:"mobile/snippets/tweak-layout-config",isDocsHomePage:!1,title:"tweak-layout-config",description:"If you just need to make a small change to the layout and app config of an existing application, you can download the config and layout files for the application, tweak them, and then re-upload them.",source:"@site/docs/mobile/snippets/tweak-layout-config.mdx",slug:"/mobile/snippets/tweak-layout-config",permalink:"/docs/mobile/snippets/tweak-layout-config",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/tweak-layout-config.mdx",version:"current"},c=[],l={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you just need to make a small change to the layout and app config of an existing application, you can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/configuration-Options.htm#Download-app-config%3FTocPath%3DConfiguration%7CConfiguration%2520Options%7C_____3"}),"download the config and layout files for the application"),", tweak them, and then re-upload them."))))}s.isMDXComponent=!0},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),o=(n(0),n(229)),i=n(53);const r={},c={unversionedId:"mobile/snippets/prereqs-layout-config-editing",id:"mobile/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"Follow along by setting up the Geocortex Mobile SDK and editing the minimal layout and app config provided.",source:"@site/docs/mobile/snippets/prereqs-layout-config-editing.mdx",slug:"/mobile/snippets/prereqs-layout-config-editing",permalink:"/docs/mobile/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs-layout-config-editing.mdx",version:"current"},l=[],s={rightToc:l};function u({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow along by setting up the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK")," and editing the minimal layout and app config provided."),Object(o.b)(i.default,{mdxType:"TweakLayoutConfigSnippet"}))}u.isMDXComponent=!0}}]);