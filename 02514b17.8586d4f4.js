(window.webpackJsonp=window.webpackJsonp||[]).push([[4,154],{229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||r;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},230:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(233),o=n(231);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},231:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},232:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},233:function(e,t,n){"use strict";var a=n(0),o=n(19);t.a=function(){const e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},234:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(13),i=n(231),c=n(8);const s=Object(a.createContext)({collectLink:()=>{}});var l=n(230),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:m,"data-noBrokenLinkCheck":d}=e,f=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:h}=Object(l.b)(),g=Object(a.useContext)(s),v=p||b,O=Object(i.a)(v),y=null==v?void 0:v.replace("pathname://",""),j=void 0!==y?(e=>e.startsWith("/"))(w=y)?h(w):w:void 0;var w;const x=Object(a.useRef)(!1),k=n?r.e:r.c,C=c.a.canUseIntersectionObserver;let N;Object(a.useEffect)(()=>(!C&&O&&window.docusaurus.prefetch(j),()=>{C&&N&&N.disconnect()}),[j,C,O]);const T=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,E=!j||!O||T;return j&&O&&!T&&!d&&g.collectLink(j),E?o.a.createElement("a",Object.assign({href:j},!O&&{target:"_blank",rel:"noopener noreferrer"},f)):o.a.createElement(k,Object.assign({},f,{onMouseEnter:()=>{x.current||(window.docusaurus.preload(j),x.current=!0)},innerRef:e=>{var t,n;C&&e&&O&&(t=e,n=()=>{window.docusaurus.prefetch(j)},N=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())})}),N.observe(t))},to:j||""},n&&{activeClassName:m}))}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),r=n(46),i=n.n(r);function c({children:e}){return o.a.createElement("div",{className:i.a.root},e)}},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(234),o=n(0),r=n.n(o),i=n(232),c=n(47),s=n.n(c);function l({title:e,description:t,link:n}){return r.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,e)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,t)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},237:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},238:function(e,t,n){"use strict";var a=n(0),o=n(237);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},239:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(238),i=n(232),c=n(48),s=n.n(c);const l=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(r.a)(),[f,h]=Object(a.useState)(c),[g,v]=Object(a.useState)(!1);if(null!=b){const e=m[b];null!=e&&e!==f&&p.some(t=>t.value===e)&&h(e)}const O=e=>{h(e),null!=b&&d(b,e)},y=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},w=()=>{v(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",w)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),j(e)},onFocus:()=>O(e),onClick:()=>{O(e),v(!1)},onPointerDown:()=>v(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},240:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=(n(0),n(229));const r={},i={unversionedId:"web/snippets/prereqs-layout-config-editing",id:"web/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the Geocortex Web SDK and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",slug:"/web/snippets/prereqs-layout-config-editing",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx",version:"current"},c=[],s={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Follow along by setting up the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," and editing the minimal layout and app config provided."),Object(o.b)("li",{parentName:"ul"},"Check out the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#upload-app-config-and-layout-to-an-app-optional"}),"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}l.isMDXComponent=!0},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return f}));var a=n(2),o=(n(0),n(229)),r=n(239),i=n(240),c=n(230),s=n(235),l=n(236),u=n(54);const p={title:"Change the Default Behavior of Components",description:"Geocortex Web - Learn how to configure Geocortex Web to change default application behavior"},b={unversionedId:"web/tutorial-change-default-behavior",id:"web/tutorial-change-default-behavior",isDocsHomePage:!1,title:"Change the Default Behavior of Components",description:"Geocortex Web - Learn how to configure Geocortex Web to change default application behavior",source:"@site/docs/web/tutorial-change-default-behavior.mdx",slug:"/web/tutorial-change-default-behavior",permalink:"/docs/web/tutorial-change-default-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-change-default-behavior.mdx",version:"current",sidebar:"web",previous:{title:"Configure Button Click Behavior",permalink:"/docs/web/tutorial-configure-button-click"},next:{title:"Customize the Theme",permalink:"/docs/web/tutorial-customize-application-theme"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Change the Behavior of the Bookmarks Component",id:"change-the-behavior-of-the-bookmarks-component",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:m};function f({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Many of the behaviors of Geocortex Web's built-in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-overview"}),"components")," are configurable through the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config"),"."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Many behaviors which are configurable through the app config are more easily configurable by using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),". App config should be used if you need to modify a property not available in the app config, or use a custom command as part of a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations#configuring-commands-and-operations"}),"command chain"),"."))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(u.default,{mdxType:"PrereqsLayoutConfigSnippet"})," ",Object(o.b)("h2",{id:"change-the-behavior-of-the-bookmarks-component"},"Change the Behavior of the Bookmarks Component"),Object(o.b)("p",null,"The following example demonstrates changing the ",Object(o.b)("inlineCode",{parentName:"p"},"onClick")," property of the bookmarks model. The default value of this property is the singular command, ",Object(o.b)("inlineCode",{parentName:"p"},"map.zoom-to-viewpoint"),". This property is not available to edit through the Geocortex Web Designer, but can be edited through the use of app config."),Object(o.b)("p",null,"First, let's create a basic map with a bookmarks component using the layout and app config. Start up the application and add a few bookmarks."),Object(o.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"app"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"app",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": []\n}\n'))),Object(o.b)(i.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace" xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks/>\n    </map>\n</layout>\n')))),Object(o.b)("p",null,"Next, add a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started#anatomy-of-an-app-config"}),"app item")," to the configuration for the bookmarks component."),Object(o.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"app"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"app",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "bookmarks-config",\n            "$type": "bookmarks"\n        }\n    ]\n}\n'))),Object(o.b)(i.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace" xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks config="bookmarks-config"/>\n    </map>\n</layout>\n')))),Object(o.b)("p",null,"Finally, modify the ",Object(o.b)("inlineCode",{parentName:"p"},"onClick")," property of the bookmarks app item to run the commands ",Object(o.b)("inlineCode",{parentName:"p"},"map.zoom-to-viewpoint")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ui.alert"),"."),Object(o.b)(r.a,{defaultValue:"config",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace" xmlns:web="https://geocortex.com/layout/web/v1">\n    <map>\n        <web:bookmarks config="bookmarks-config"/>\n    </map>\n</layout>\n'))),Object(o.b)(i.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "bookmarks-config",\n            "$type": "bookmarks",\n            "onClick": [\n                "map.zoom-to-viewpoint",\n                {\n                    "name": "ui.alert",\n                    "arguments": {\n                        "message": "Message from config."\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(o.b)(i.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(c.a)("img/web-customize-bookmarks-component.png")}))),Object(o.b)("p",null,"Congratulations! You just changed the default behavior for a built in component using config. All components can be configured through the app config JSON in this manner."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Geocortex Web comes with many built-in commands and operations to help you accomplish your goal. If these are not enough, Geocortex Workflow can help you implement custom behaviors without writing custom code. If you cannot create the behavior you want with Geocortex Workflow, it might be time to look into using the Geocortex Web SDK to implement a custom command or operation."),Object(o.b)(s.a,{mdxType:"UseCaseContainer"},Object(o.b)(l.a,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:Object(c.a)("docs/web/api-commands-operations-events"),mdxType:"UseCaseCard"}),Object(o.b)(l.a,{title:"Run a Workflow using a Command and App Config",description:"Configure a workflow to run on map initialization using app config",link:Object(c.a)("docs/web/tutorial-run-workflow-app-config"),mdxType:"UseCaseCard"}),Object(o.b)(l.a,{title:"Change Geocortex Web's Default Map Click Behavior",description:"Learn how to Geocortex Workflow to override Geocortex Web's default map click behavior",link:Object(c.a)("docs/web/tutorial-change-default-map-click-behavior"),mdxType:"UseCaseCard"}),Object(o.b)(l.a,{title:"Implement Custom Command/Operation",description:"Implement a custom Command/Operation with the Geocortex Web SDK",link:Object(c.a)("docs/web/tutorial-implement-command-operation"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0}}]);