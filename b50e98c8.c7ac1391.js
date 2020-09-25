(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),a=(n(0),n(223)),i=n(224),c=n(233),s=n(230),u=n(229),l=n(234),p={title:"Components Overview",sidebar_label:"Overview",description:"Geocortex Web - Overview of components"},d={unversionedId:"web/sdk-components-overview",id:"web/sdk-components-overview",isDocsHomePage:!1,title:"Components Overview",description:"Geocortex Web - Overview of components",source:"@site/docs/web/sdk-components-overview.mdx",slug:"/web/sdk-components-overview",permalink:"/docs/web/sdk-components-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-components-overview.mdx",version:"current",sidebar_label:"Overview",sidebar:"web",previous:{title:"Deployment",permalink:"/docs/web/sdk-deployment"},next:{title:"Create a Component",permalink:"/docs/web/sdk-components-create"}},f=[{value:"Component Models and Configuration",id:"component-models-and-configuration",children:[]}],m={rightToc:f};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In Geocortex Web, components are entities which implement UI/UX experiences and the associated logic. An example of a component is an I Want to Menu (IWTM). IWTMs participate in layout, implement custom behavior (display a list when clicked), and participate in the app config (the menu items are configurable)."),Object(a.b)("p",null,"Components are only ",Object(a.b)("strong",{parentName:"p"},"created")," if they participate in the layout - if no component definition exists in the layout, none will be created. Multiple instances of the same component will be created if specified in the layout."),Object(a.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"layout",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n      <map>\n        <iwtm config="iwtm-1" slot="top-right"/>\n      </map>\n      <map>\n        <iwtm config="iwtm-2" slot="top-right"/>\n      </map>\n  </split>\n</layout>\n'))),Object(a.b)(l.a,{value:"config",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu",\n            "id": "iwtm-1",\n            "items": [\n                {\n                    "id": "return-to-initial-view",\n                    "iconId": "zoom-initial",\n                    "title": "Return to Initial View",\n                    "action": "map.zoom-to-initial-viewpoint",\n                    "$type": "menu-item"\n                }\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm-2",\n            "items": [\n                {\n                    "id": "display-alert",\n                    "iconId": "pop-out",\n                    "title": "Display Alert",\n                    "$type": "menu-item",\n                    "action": {\n                        "name": "ui.alert",\n                        "arguments": {\n                            "title": "Alert!",\n                            "message": "You have been alerted."\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(a.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(i.a)("img/web-sdk-components-simple.png")}))),Object(a.b)("h2",{id:"component-models-and-configuration"},"Component Models and Configuration"),Object(a.b)("p",null,"Every component has an associated model. This model functions as the underlying data source for the component, as well as providing a way to interface with the larger application, through ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"commands, operations")," and shared services. This allows the component to solely worry about presentation concerns, and delegate data and application concerns to the underlying model. Models are also responsible for loading and consuming the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),"app config")," for the component."),Object(a.b)(u.a,{mdxType:"UseCaseContainer"},Object(a.b)(s.a,{title:"Create a Component",description:"Learn how to create a basic component",link:Object(i.a)("docs/web/sdk-components-create"),mdxType:"UseCaseCard"}),Object(a.b)(s.a,{title:"Check out the Component Reference",description:"Take a deep dive into components in the Geocortex Web SDK",link:Object(i.a)("docs/web/sdk-components-reference"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(227),o=n(225);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},226:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},227:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},228:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(13),i=n(225),c=n(8),s=Object(r.createContext)({collectLink:function(){}}),u=n(224),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,f=e.to,m=e.href,b=e.activeClassName,v=e["data-noBrokenLinkCheck"],y=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(u.b)().withBaseUrl,w=Object(r.useContext)(s),h=f||m,g=Object(i.a)(h),j=null==h?void 0:h.replace("pathname://",""),x=void 0!==j?function(e){return e.startsWith("/")}(n=j)?O(n):n:void 0,k=Object(r.useRef)(!1),C=d?a.e:a.c,E=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&g&&window.docusaurus.prefetch(x),function(){E&&p&&p.disconnect()}}),[x,E,g]);var T=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,N=!x||!g||T;return x&&g&&!T&&!v&&w.collectLink(x),N?o.a.createElement("a",Object.assign({href:x},!g&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(C,Object.assign({},y,{onMouseEnter:function(){k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:function(e){var t,n;E&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(x)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:x||""},d&&{activeClassName:b}))}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(46),i=n.n(a);function c(e){var t=e.children;return o.a.createElement("div",{className:i.a.root},t)}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(228),o=n(0),a=n.n(o),i=n(226),c=n(47),s=n.n(c);function u(e){var t=e.title,n=e.description,o=e.link;return a.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(r.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},231:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},232:function(e,t,n){"use strict";var r=n(0),o=n(231);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},233:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(232),i=n(226),c=n(48),s=n.n(c),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,d=e.groupId,f=Object(a.a)(),m=f.tabGroupChoices,b=f.setTabGroupChoices,v=Object(r.useState)(c),y=v[0],O=v[1],w=Object(r.useState)(!1),h=w[0],g=w[1];if(null!=d){var j=m[d];null!=j&&j!==y&&p.some((function(e){return e.value===j}))&&O(j)}var x=function(e){O(e),null!=d&&b(d,e)},k=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},E=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",E)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},234:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);