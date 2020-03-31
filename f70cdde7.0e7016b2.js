/*! For license information please see f70cdde7.0e7016b2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(9),a=(n(0),n(210)),i=n(216),c=n(217),s={title:"Components and Services",description:"Geocortex Mobile - Learn about Components and Services"},l={id:"mobile/concepts-components-services",title:"Components and Services",description:"Geocortex Mobile - Learn about Components and Services",source:"@site/docs/mobile/concepts-components-services.mdx",permalink:"/dev-center/docs/mobile/concepts-components-services",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/concepts-components-services.mdx",sidebar:"mobile",previous:{title:"Events",permalink:"/dev-center/docs/mobile/concepts-events"},next:{title:"Advanced Layout",permalink:"/dev-center/docs/mobile/concepts-advanced-layout"}},p=[{value:"Components",id:"components",children:[]},{value:"Services",id:"services",children:[]},{value:"Creation and Initialization",id:"creation-and-initialization",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={rightToc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Components")," and ",Object(a.b)("strong",{parentName:"p"},"services")," are the two basic building blocks of Geocortex Mobile. Components power the UI experience of Geocortex Mobile, and services provide the shared infrastructure and core logic that power app behaviour."),Object(a.b)("h2",{id:"components"},"Components"),Object(a.b)("p",null,"In Geocortex Mobile, components are entities which implement UI/UX experiences and the associated logic. An example of a component is a I Want to Menu (IWTM). IWTMs participate in layout, implement custom behaviour (display a list when clicked), and participate in app config."),Object(a.b)("p",null,"Components are only ",Object(a.b)("strong",{parentName:"p"},"created")," if they participate in the layout - if no component definition exists in the layout, none will be created. Components are ",Object(a.b)("strong",{parentName:"p"},"initialized")," when they are activated."),Object(a.b)("h2",{id:"services"},"Services"),Object(a.b)("p",null,"In Geocortex Mobile, services are entities which provide a shared service or behaviour to other components. Two key differences between components are services are..."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Services do not participate in layout, and do not power UI (except indirectly)."),Object(a.b)("li",{parentName:"ol"},"Services are created ",Object(a.b)("strong",{parentName:"li"},"and")," initialized on startup, before any components are created.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This means any service is always available to any component")))),Object(a.b)("p",null,'An example of a service would be a "SettingsService", which provides global settings that other components can consume.'),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Services are not intended to directly interact with eachother. Instead, services should ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-command-operation"}),"implement operations")," which can be called by other services to indirectly interact."))),Object(a.b)("h2",{id:"creation-and-initialization"},"Creation and Initialization"),Object(a.b)("p",null,"This is the order of operations for component and service creation and initialization on app startup."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create all services"),Object(a.b)("li",{parentName:"ol"},"Initialize all services"),Object(a.b)("li",{parentName:"ol"},"Create all components consumed by the layout"),Object(a.b)("li",{parentName:"ol"},"Activate the necessary components, depending on the layout and user interaction. Components are initialized during activation.")),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(c.a,{mdxType:"UseCaseContainer"},Object(a.b)(i.a,{title:"Implement a Custom Component",description:"Learn how to implement a custom component using the Geocortex Mobile SDK",link:"implement-component-with-ui",mdxType:"UseCaseCard"}),Object(a.b)(i.a,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Mobile SDK",link:"implement-service",mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},211:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},212:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(36),c=n(213),s=n(24),l=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,p=n||s,u=Object(c.a)(p),d=Object(o.useRef)(!1),b=l.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!b&&u&&window.docusaurus.prefetch(p),function(){b&&t&&t.disconnect()}}),[p,b,u]),p&&u?a.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var n,r;b&&e&&u&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):a.a.createElement("a",Object(r.a)({},e,{href:p}))}},213:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))},214:function(e,t,n){"use strict";n(215)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},215:function(e,t,n){var r=n(17),o=n(18),a=n(23),i=/"/g,c=function(e,t,n,r){var o=String(a(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(214);var r=n(212),o=n(0),a=n.n(o),i=n(211),c=n.n(i),s=n(125),l=n.n(s);function p(e){var t=e.title,n=e.description,o=e.link;return a.a.createElement("div",{className:c()("card-demo",l.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(r.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),a=n(211),i=n.n(a),c=n(126),s=n.n(c);function l(e){var t=e.children;return o.a.createElement("div",{className:i()(s.a.root)},t)}}}]);