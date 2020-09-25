(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(2),r=n(6),a=(n(0),n(223)),i=n(224),c=n(233),s=n(230),l=n(229),u=n(234),p={title:"Components Overview",sidebar_label:"Overview",description:"Geocortex Mobile - Overview of components"},m={unversionedId:"mobile/sdk-components-overview",id:"mobile/sdk-components-overview",isDocsHomePage:!1,title:"Components Overview",description:"Geocortex Mobile - Overview of components",source:"@site/docs/mobile/sdk-components-overview.mdx",slug:"/mobile/sdk-components-overview",permalink:"/docs/mobile/sdk-components-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-components-overview.mdx",version:"current",sidebar_label:"Overview",sidebar:"mobile",previous:{title:"Commands and Operations",permalink:"/docs/mobile/sdk-commands-operations"},next:{title:"Create a Component",permalink:"/docs/mobile/sdk-components-create"}},d=[{value:"Component Views and Configuration Models",id:"component-views-and-configuration-models",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={rightToc:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In Geocortex Mobile, components are entities which implement UI/UX experiences and the associated logic. An example of a component is an I Want to Menu (IWTM). IWTMs participate in layout, implement custom behavior (display a list when clicked), and participate in app config."),Object(a.b)("p",null,"Components are only ",Object(a.b)("strong",{parentName:"p"},"created")," if they participate in the layout - if no component definition exists in the layout, none will be created. Components are ",Object(a.b)("strong",{parentName:"p"},"initialized")," when they are activated. Multiple instances of the same component will be created if specified in the layout."),Object(a.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(a.b)(u.a,{value:"layout",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <map>\n        <iwtm config="iwtm-1" slot="top-left"/>\n        <iwtm config="iwtm-2" slot="top-right"/>\n    </map>\n</layout>\n\n'))),Object(a.b)(u.a,{value:"config",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm-1",\n            "items": [\n                {\n                    "id": "return-to-initial-view",\n                    "iconId": "zoom-initial",\n                    "title": "Return to Initial View",\n                    "action": "map.zoom-to-initial-viewpoint",\n                    "$type": "menu-item"\n                }\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm-2",\n            "items": [\n                {\n                    "id": "display-alert",\n                    "iconId": "pop-out",\n                    "title": "Display Alert",\n                    "$type": "menu-item",\n                    "action": {\n                        "name": "ui.alert",\n                        "arguments": {\n                            "title": "Alert!",\n                            "message": "You have been alerted."\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(a.b)(u.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(i.a)("img/mobile-sdk-components-simple.png")}))),Object(a.b)("h2",{id:"component-views-and-configuration-models"},"Component Views and Configuration Models"),Object(a.b)("p",null,"In order to display in an Application, each component must create a ",Object(a.b)("inlineCode",{parentName:"p"},"VisualElement"),". This is usually accomplished through a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-reference#xaml-view"}),"XAML View"),". Each component can also optionally have an ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-components-reference#configuration-models"}),"associated configuration model"),". This model represents settings from the component from the app config JSON, and the component is responsible for consuming this configuration model and passing the appropriate settings along to the view."),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(l.a,{mdxType:"UseCaseContainer"},Object(a.b)(s.a,{title:"Create a Component",description:"Learn how to create a basic component",link:Object(i.a)("docs/mobile/sdk-components-create"),mdxType:"UseCaseCard"}),Object(a.b)(s.a,{title:"Check out the Component Reference",description:"Take a deep dive into components in the Geocortex Mobile SDK",link:Object(i.a)("docs/mobile/sdk-components-reference"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(227),r=n(225);function a(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},226:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},227:function(e,t,n){"use strict";var o=n(0),r=n(19);t.a=function(){var e=Object(o.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},228:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(13),i=n(225),c=n(8),s=Object(o.createContext)({collectLink:function(){}}),l=n(224),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};t.a=function(e){var t,n,p,m=e.isNavLink,d=e.to,f=e.href,b=e.activeClassName,v=e["data-noBrokenLinkCheck"],y=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(l.b)().withBaseUrl,h=Object(o.useContext)(s),w=d||f,g=Object(i.a)(w),j=null==w?void 0:w.replace("pathname://",""),x=void 0!==j?function(e){return e.startsWith("/")}(n=j)?O(n):n:void 0,k=Object(o.useRef)(!1),C=m?a.e:a.c,E=c.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!E&&g&&window.docusaurus.prefetch(x),function(){E&&p&&p.disconnect()}}),[x,E,g]);var N=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,T=!x||!g||N;return x&&g&&!N&&!v&&h.collectLink(x),T?r.a.createElement("a",Object.assign({href:x},!g&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(C,Object.assign({},y,{onMouseEnter:function(){k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:function(e){var t,n;E&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(x)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:x||""},m&&{activeClassName:b}))}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),r=n.n(o),a=n(46),i=n.n(a);function c(e){var t=e.children;return r.a.createElement("div",{className:i.a.root},t)}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(228),r=n(0),a=n.n(r),i=n(226),c=n(47),s=n.n(c);function l(e){var t=e.title,n=e.description,r=e.link;return a.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(o.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}},231:function(e,t,n){"use strict";var o=n(0),r=Object(o.createContext)(void 0);t.a=r},232:function(e,t,n){"use strict";var o=n(0),r=n(231);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},233:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(232),i=n(226),c=n(48),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,m=e.groupId,d=Object(a.a)(),f=d.tabGroupChoices,b=d.setTabGroupChoices,v=Object(o.useState)(c),y=v[0],O=v[1],h=Object(o.useState)(!1),w=h[0],g=h[1];if(null!=m){var j=f[m];null!=j&&j!==y&&p.some((function(e){return e.value===j}))&&O(j)}var x=function(e){O(e),null!=m&&b(m,e)},k=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},E=function(){g(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",E)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},234:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);