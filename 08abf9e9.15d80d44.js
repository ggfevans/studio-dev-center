(window.webpackJsonp=window.webpackJsonp||[]).push([[7,80],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return f}));var a=n(3),o=(n(0),n(255)),r=n(256),i=n(264),c=n(265),l=n(260),s=n(261),p=n(59);const u={title:"Edit the Layout and App Config",description:"Geocortex Mobile - Edit the layout and app config in the SDK Quickstart"},b={unversionedId:"mobile/sdk-edit-layout-app-config",id:"mobile/sdk-edit-layout-app-config",isDocsHomePage:!1,title:"Edit the Layout and App Config",description:"Geocortex Mobile - Edit the layout and app config in the SDK Quickstart",source:"@site/docs/mobile/sdk-edit-layout-app-config.mdx",slug:"/mobile/sdk-edit-layout-app-config",permalink:"/docs/mobile/sdk-edit-layout-app-config",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-edit-layout-app-config.mdx",version:"current",sidebar:"mobile",previous:{title:"SDK Overview",permalink:"/docs/mobile/sdk-overview"},next:{title:"Quickstart Reference",permalink:"/docs/mobile/sdk-quickstart-reference"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Simple Layout with a Map",id:"simple-layout-with-a-map",children:[]},{value:"Add Buttons",id:"add-buttons",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={toc:m};function f({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This tutorial assumes you are using windows and can run the Universal Windows Version of Geocortex Mobile."))),Object(o.b)("p",null,"Many changes to Geocortex Mobile will require editing the layout and app config for your custom application. The app config (",Object(o.b)("inlineCode",{parentName:"p"},"app.json"),") and layout files (",Object(o.b)("inlineCode",{parentName:"p"},"layout-*.xml"),") are contained in the shared platform agnostic project. Each platform specific project links to these files as an asset or a reference, so editing the files in the platform agnostic project will change them for all platforms. Check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-layout-getting-started"}),"layout")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-getting-started"}),"app config")," to learn more about configuring Geocortex Mobile with these files."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(p.default,{mdxType:"QuickstartPrereqsSnippet"}),Object(o.b)("h2",{id:"simple-layout-with-a-map"},"Simple Layout with a Map"),Object(o.b)("p",null,"Replace the layout in the ",Object(o.b)("inlineCode",{parentName:"p"},"layout-large.xml")," file and the app config in the ",Object(o.b)("inlineCode",{parentName:"p"},"app.json")," file with the content below.\nSet ",Object(o.b)("inlineCode",{parentName:"p"},"App1.UWP")," as your startup project. Build and run Geocortex Mobile and ensure only a plain map appears."),Object(o.b)(i.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    // highlight-next-line\n    <map id="map1"></map>\n</layout>\n'))),Object(o.b)(c.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "desktop-layout",\n            "$type": "layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["medium", "large"]\n        }\n    ]\n}\n'))),Object(o.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(r.a)("img/mobile-sdk-basic-layout-config.png")}))),Object(o.b)("h2",{id:"add-buttons"},"Add Buttons"),Object(o.b)("p",null,"We can now add some buttons and populate them with some simple ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"commands"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add two ",Object(o.b)("inlineCode",{parentName:"li"},"<button>")," components to your layout."),Object(o.b)("li",{parentName:"ul"},"Link the buttons to commands defined in the app config.")),Object(o.b)(i.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <map id="map1" >\n        // highlight-start\n        <button id="rotate-button" config="rotate-button" style="map-widget" show-title="true" margin="0.3" slot="top-right"/>\n        <button id="refresh-button" config="refresh-button" style="map-widget" show-title="true" margin="0.3" slot="top-left"/>\n        // highlight-end\n    </map>\n</layout>\n\n'))),Object(o.b)(c.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "desktop-layout",\n            "$type": "layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["medium", "large"]\n        },\n        // highlight-start\n        {\n            "id": "rotate-button",\n            "iconId": "arrow-bottom-right",\n            "title": "Rotate Map Right",\n            "action": {\n                "name": "map.rotate-by",\n                "arguments": {\n                    "rotation": "40"\n                }\n            },\n            "$type": "menu-item"\n        },\n        {\n            "id": "refresh-button",\n            "iconId": "refresh",\n            "title": "Refresh App",\n            "action": "app.refresh",\n            "$type": "menu-item"\n        }\n        // highlight-end\n    ]\n}\n'))),Object(o.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(r.a)("img/mobile-sdk-layout-config-buttons.png")}))),Object(o.b)("p",null,"You've now accomplished the basics of building a Geocortex Mobile Application using layout and app config. By using components in the layout to compose the visual structure of your application, and app config to describe behavior, you can create highly customized interfaces with custom behavior."),Object(o.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(o.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Layout"}),"Various Layout Samples"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration"}),"Various Configuration Samples"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/App/GeocortexMobileViewer"}),"A complete Geocortex Mobile App")))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(l.a,{mdxType:"UseCaseContainer"},Object(o.b)(s.a,{title:"Create a Custom Component",description:"Learn how to create a custom component with the SDK",link:Object(r.a)("docs/mobile/sdk-components-create"),mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"Deploy your Custom Layout and App Config",description:"Deploy your custom layout and app config to a Geocortex Mobile Application",link:Object(r.a)("docs/mobile/sdk-deployment#deploying-app-config-and-layout"),mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"Learn More About Layout and App Config",description:"Check out the concepts to learn more about the layout and app config",link:Object(r.a)("docs/mobile/key-concepts"),mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"Explore the Tutorials",description:"Check out the the various tutorials on configuring Geocortex Mobile",link:Object(r.a)("docs/mobile/tutorial-configure-button-click"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},256:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(21),o=n(257);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},257:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},258:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},259:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(11),i=n(257),c=n(9);const l=Object(a.createContext)({collectLink:()=>{}});var s=n(256),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:u,href:b,activeClassName:m,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:h=!0}=e,g=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(s.b)(),O=Object(a.useContext)(l),j=u||b,v=Object(i.a)(j),x=null==j?void 0:j.replace("pathname://",""),w=void 0!==x?(k=x,h&&(e=>e.startsWith("/"))(k)?y(k):k):void 0;var k;const N=Object(a.useRef)(!1),C=n?r.e:r.c,A=c.a.canUseIntersectionObserver;let S;Object(a.useEffect)((()=>(!A&&v&&window.docusaurus.prefetch(w),()=>{A&&S&&S.disconnect()})),[w,A,v]);const E=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,M=!w||!v||E;return w&&v&&!E&&!f&&O.collectLink(w),M?o.a.createElement("a",Object.assign({href:w},j&&!v&&{target:"_blank",rel:"noopener noreferrer"},g)):o.a.createElement(C,Object.assign({},g,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(w),N.current=!0)},innerRef:e=>{var t,n;A&&e&&v&&(t=e,n=()=>{window.docusaurus.prefetch(w)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))})),S.observe(t))},to:w||""},n&&{isActive:d,activeClassName:m}))}},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),r=n(54),i=n.n(r);function c({children:e}){return o.a.createElement("div",{className:i.a.root},e)}},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(259),o=n(0),r=n.n(o),i=n(258),c=n(55),l=n.n(c);function s({title:e,description:t,link:n}){return r.a.createElement("div",{className:Object(i.a)("card-demo",l.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,e)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,t)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},262:function(e,t,n){"use strict";var a=n(0),o=n(263);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},263:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},264:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(262),i=n(258),c=n(56),l=n.n(c);const s=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:u,groupId:b,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(r.a)(),[h,g]=Object(a.useState)(c),y=a.Children.toArray(e.children);if(null!=b){const e=d[b];null!=e&&e!==h&&u.some((t=>t.value===e))&&g(e)}const O=e=>{g(e),null!=b&&f(b,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(a.cloneElement)(y.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},265:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),o=(n(0),n(255));const r={},i={unversionedId:"mobile/snippets/quickstart-prereqs",id:"mobile/snippets/quickstart-prereqs",isDocsHomePage:!1,title:"quickstart-prereqs",description:"Check out and setup the Geocortex Mobile SDK Quickstart project.",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",slug:"/mobile/snippets/quickstart-prereqs",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx",version:"current"},c=[],l={toc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Check out and setup the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK Quickstart project"),"."))}s.isMDXComponent=!0}}]);