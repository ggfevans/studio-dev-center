(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(2),o=(r(0),r(229)),c=r(230),a=r(236),i=r(235);const s={title:"Implement a Custom Activity",description:"Geocortex Web - Learn how to implement a custom workflow activity"},u={unversionedId:"web/tutorial-implement-custom-activity",id:"web/tutorial-implement-custom-activity",isDocsHomePage:!1,title:"Implement a Custom Activity",description:"Geocortex Web - Learn how to implement a custom workflow activity",source:"@site/docs/web/tutorial-implement-custom-activity.mdx",slug:"/web/tutorial-implement-custom-activity",permalink:"/docs/web/tutorial-implement-custom-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-implement-custom-activity.mdx",version:"current",sidebar:"web",previous:{title:"Change Default Map Click Behavior",permalink:"/docs/web/tutorial-change-default-map-click-behavior"},next:{title:"Implement a Custom Form Element",permalink:"/docs/web/tutorial-implement-custom-form-elements"}},l=[],f={rightToc:l};function m({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},f,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Geocortex Web comes with bundled with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.geocortex.com/products/geocortex-workflow/"}),"Geocortex Workflow"),". Geocortex Workflow includes a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"large suite of activities")," to help you solve your business case. However, if Geocortex Workflow is missing functionality you need, you can implement a custom activity with the Geocortex Workflow SDK."),Object(o.b)(i.a,{mdxType:"UseCaseContainer"},Object(o.b)(a.a,{title:"Geocortex Workflow SDK",description:"Learn more about the Geocortex Workflow SDK",link:Object(c.a)("docs/workflow/overview"),mdxType:"UseCaseCard"}),Object(o.b)(a.a,{title:"Implement a Custom Activity",description:"Learn how to build a custom workflow activity in the Geocortex Workflow SDK",link:Object(c.a)("docs/workflow/sdk-web-create-activity"),mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),p=n,d=f["".concat(a,".").concat(p)]||f[p]||m[p]||c;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},230:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return a}));var n=r(233),o=r(231);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},231:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},232:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},233:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},234:function(e,t,r){"use strict";var n=r(0),o=r.n(n),c=r(13),a=r(231),i=r(8);const s=Object(n.createContext)({collectLink:()=>{}});var u=r(230),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,{isNavLink:r,to:f,href:m,activeClassName:p,"data-noBrokenLinkCheck":d}=e,b=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:v}=Object(u.b)(),w=Object(n.useContext)(s),y=f||m,h=Object(a.a)(y),O=null==y?void 0:y.replace("pathname://",""),j=void 0!==O?(e=>e.startsWith("/"))(g=O)?v(g):g:void 0;var g;const k=Object(n.useRef)(!1),x=r?c.e:c.c,C=i.a.canUseIntersectionObserver;let E;Object(n.useEffect)(()=>(!C&&h&&window.docusaurus.prefetch(j),()=>{C&&E&&E.disconnect()}),[j,C,h]);const P=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,N=!j||!h||P;return j&&h&&!P&&!d&&w.collectLink(j),N?o.a.createElement("a",Object.assign({href:j},!h&&{target:"_blank",rel:"noopener noreferrer"},b)):o.a.createElement(x,Object.assign({},b,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(j),k.current=!0)},innerRef:e=>{var t,r;C&&e&&h&&(t=e,r=()=>{window.docusaurus.prefetch(j)},E=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())})}),E.observe(t))},to:j||""},r&&{activeClassName:p}))}},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),o=r.n(n),c=r(46),a=r.n(c);function i({children:e}){return o.a.createElement("div",{className:a.a.root},e)}},236:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(234),o=r(0),c=r.n(o),a=r(232),i=r(47),s=r.n(i);function u({title:e,description:t,link:r}){return c.a.createElement("div",{className:Object(a.a)("card-demo",s.a.root)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,e)),c.a.createElement("div",{className:"card__body"},c.a.createElement("p",null,t)),c.a.createElement("div",{className:"card__footer"},c.a.createElement(n.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}}}]);