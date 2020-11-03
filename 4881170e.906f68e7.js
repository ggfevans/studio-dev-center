(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(2),o=(r(0),r(229)),i=r(230),c=r(236),a=r(235);const s={title:"Services Overview",sidebar_label:"Overview",description:"Geocortex Mobile - Overview of services",hide_table_of_contents:!0},l={unversionedId:"mobile/sdk-services-overview",id:"mobile/sdk-services-overview",isDocsHomePage:!1,title:"Services Overview",description:"Geocortex Mobile - Overview of services",source:"@site/docs/mobile/sdk-services-overview.mdx",slug:"/mobile/sdk-services-overview",permalink:"/docs/mobile/sdk-services-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-services-overview.mdx",version:"current",sidebar_label:"Overview",sidebar:"mobile",previous:{title:"Internationalization",permalink:"/docs/mobile/sdk-components-internationalization"},next:{title:"Create a Service",permalink:"/docs/mobile/sdk-services-create"}},u=[{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:u};function b({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In Geocortex Mobile, services represent a shared application-wide concern that needs to be accessed by many components or other services. There is only one instance of each service in the application. Interactions with services usually happen through the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-commands-operations#implementing-commands-and-operations"}),"commands and operations they implement"),", but services can also be ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"directly injected")," into other services and components."),Object(o.b)("p",null,"Two key differences between components are services are..."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Services do not participate in layout, and do not power UI (except indirectly)."),Object(o.b)("li",{parentName:"ol"},"Services are created ",Object(o.b)("strong",{parentName:"li"},"and")," initialized on startup, before any components are created.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This means any service is always available to any component.")))),Object(o.b)("p",null,'An example of a service would be a "SettingsService", which provides global settings that other components can consume.'),Object(o.b)("p",null,"Services can be optionally ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-services-reference#configuration-models"}),"consume configuration through app items"),"."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)(a.a,{mdxType:"UseCaseContainer"},Object(o.b)(c.a,{title:"Create a Service",description:"Learn how to create a basic service",link:Object(i.a)("docs/mobile/sdk-services-create"),mdxType:"UseCaseCard"}),Object(o.b)(c.a,{title:"Check out the Service Reference",description:"Take a deep dive into services in the Geocortex Mobile SDK",link:Object(i.a)("docs/mobile/sdk-services-reference"),mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,f=d["".concat(c,".").concat(p)]||d[p]||b[p]||i;return r?o.a.createElement(f,a(a({ref:t},l),{},{components:r})):o.a.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},230:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var n=r(233),o=r(231);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},231:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},232:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},233:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},234:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(13),c=r(231),a=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=r(230),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,{isNavLink:r,to:d,href:b,activeClassName:p,"data-noBrokenLinkCheck":f}=e,v=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:m}=Object(l.b)(),O=Object(n.useContext)(s),y=d||b,h=Object(c.a)(y),j=null==y?void 0:y.replace("pathname://",""),w=void 0!==j?(e=>e.startsWith("/"))(g=j)?m(g):g:void 0;var g;const k=Object(n.useRef)(!1),x=r?i.e:i.c,E=a.a.canUseIntersectionObserver;let N;Object(n.useEffect)(()=>(!E&&h&&window.docusaurus.prefetch(w),()=>{E&&N&&N.disconnect()}),[w,E,h]);const C=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,S=!w||!h||C;return w&&h&&!C&&!f&&O.collectLink(w),S?o.a.createElement("a",Object.assign({href:w},!h&&{target:"_blank",rel:"noopener noreferrer"},v)):o.a.createElement(x,Object.assign({},v,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(w),k.current=!0)},innerRef:e=>{var t,r;E&&e&&h&&(t=e,r=()=>{window.docusaurus.prefetch(w)},N=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),r())})}),N.observe(t))},to:w||""},r&&{activeClassName:p}))}},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),o=r.n(n),i=r(46),c=r.n(i);function a({children:e}){return o.a.createElement("div",{className:c.a.root},e)}},236:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(234),o=r(0),i=r.n(o),c=r(232),a=r(47),s=r.n(a);function l({title:e,description:t,link:r}){return i.a.createElement("div",{className:Object(c.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,t)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}}}]);