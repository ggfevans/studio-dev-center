(window.webpackJsonp=window.webpackJsonp||[]).push([[4,46],{243:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return r?n.a.createElement(b,c(c({ref:t},l),{},{components:r})):n.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},244:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var o=r(21),n=r(245);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(r,o)=>function(e,t,r,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(o)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,o)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},245:function(e,t,r){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n}))},246:function(e,t,r){"use strict";function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}},247:function(e,t,r){"use strict";var o=r(0),n=r.n(o),a=r(11),i=r(245),c=r(9);const s=Object(o.createContext)({collectLink:()=>{}});var l=r(244),u=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};t.a=function(e){var t,{isNavLink:r,to:m,href:p,activeClassName:f,isActive:b,"data-noBrokenLinkCheck":d,autoAddBaseUrl:v=!0}=e,w=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(l.b)(),O=Object(o.useContext)(s),h=m||p,j=Object(i.a)(h),k=null==h?void 0:h.replace("pathname://",""),g=void 0!==k?(x=k,v&&(e=>e.startsWith("/"))(x)?y(x):x):void 0;var x;const C=Object(o.useRef)(!1),S=r?a.e:a.c,N=c.a.canUseIntersectionObserver;let E;Object(o.useEffect)((()=>(!N&&j&&window.docusaurus.prefetch(g),()=>{N&&E&&E.disconnect()})),[g,N,j]);const D=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,P=!g||!j||D;return g&&j&&!D&&!d&&O.collectLink(g),P?n.a.createElement("a",Object.assign({href:g},h&&!j&&{target:"_blank",rel:"noopener noreferrer"},w)):n.a.createElement(S,Object.assign({},w,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(g),C.current=!0)},innerRef:e=>{var t,r;N&&e&&j&&(t=e,r=()=>{window.docusaurus.prefetch(g)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())}))})),E.observe(t))},to:g||""},r&&{isActive:b,activeClassName:f}))}},248:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(0),n=r.n(o),a=r(54),i=r.n(a);function c({children:e}){return n.a.createElement("div",{className:i.a.root},e)}},249:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(247),n=r(0),a=r.n(n),i=r(246),c=r(55),s=r.n(c);function l({title:e,description:t,link:r}){return a.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,e)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,t)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(o.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}},63:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var o=r(3),n=(r(0),r(243));const a={},i={unversionedId:"mobile/snippets/relevant-workflow-samples",id:"mobile/snippets/relevant-workflow-samples",isDocsHomePage:!1,title:"relevant-workflow-samples",description:"The Geocortex Mobile SDK Samples project has a variety of workflow samples:",source:"@site/docs/mobile/snippets/relevant-workflow-samples.mdx",slug:"/mobile/snippets/relevant-workflow-samples",permalink:"/docs/mobile/snippets/relevant-workflow-samples",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/relevant-workflow-samples.mdx",version:"current"},c=[],s={toc:c};function l({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The Geocortex Mobile SDK Samples project has a variety of workflow samples:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/RunWorkflow"}),"Run a Workflow"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomActivity"}),"Build a Custom Activity"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomFormComponent"}),"Build a Custom Form Element")))))}l.isMDXComponent=!0},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return m})),r.d(t,"default",(function(){return f}));var o=r(3),n=(r(0),r(243)),a=r(244),i=r(249),c=r(248),s=r(63);const l={title:"Implement a Custom Activity",description:"Geocortex Mobile - Learn how to implement a custom workflow activity"},u={unversionedId:"mobile/tutorial-implement-custom-activity",id:"mobile/tutorial-implement-custom-activity",isDocsHomePage:!1,title:"Implement a Custom Activity",description:"Geocortex Mobile - Learn how to implement a custom workflow activity",source:"@site/docs/mobile/tutorial-implement-custom-activity.mdx",slug:"/mobile/tutorial-implement-custom-activity",permalink:"/docs/mobile/tutorial-implement-custom-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-implement-custom-activity.mdx",version:"current",sidebar:"mobile",previous:{title:"Implement a Custom Form Element",permalink:"/docs/mobile/tutorial-implement-custom-form-elements"},next:{title:"SDK Overview",permalink:"/docs/mobile/sdk-overview"}},m=[{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={toc:m};function f({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Geocortex Mobile comes with bundled with ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.geocortex.com/products/geocortex-workflow/"}),"Geocortex Workflow"),". Geocortex Workflow includes a ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"large suite of activities")," to help you solve your business case. However, if Geocortex Workflow is missing functionality you need, you can implement a custom activity with the Geocortex Workflow SDK."),Object(n.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(n.b)(s.default,{mdxType:"RelevantWorkflowSamples"}),Object(n.b)("h2",{id:"next-steps"},"Next Steps"),Object(n.b)(c.a,{mdxType:"UseCaseContainer"},Object(n.b)(i.a,{title:"Geocortex Workflow SDK",description:"Learn more about the Geocortex Workflow SDK",link:Object(a.a)("docs/workflow/overview"),mdxType:"UseCaseCard"}),Object(n.b)(i.a,{title:"Implement a Custom Activity",description:"Learn how to build a custom workflow activity",link:Object(a.a)("docs/workflow/sdk-mobile-create-activity"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0}}]);