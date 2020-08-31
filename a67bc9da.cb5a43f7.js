(window.webpackJsonp=window.webpackJsonp||[]).push([[99,110],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return f}));var o=n(2),a=n(6),r=(n(0),n(218)),c=n(219),i=n(65),s=n(225),l=n(224),u=n(242),m={title:"Overview",description:"Geocortex Web - Overview"},p={unversionedId:"web/overview",id:"web/overview",isDocsHomePage:!1,title:"Overview",description:"Geocortex Web - Overview",source:"@site/docs/web/overview.mdx",permalink:"/docs/web/overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/overview.mdx",sidebar:"web",next:{title:"Key Concepts",permalink:"/docs/web/key-concepts"}},b=[{value:"Extending Geocortex Web",id:"extending-geocortex-web",children:[{value:"Application Configuration",id:"application-configuration",children:[]},{value:"Geocortex Workflow",id:"geocortex-workflow",children:[]},{value:"Custom Workflow Activities and Form Elements",id:"custom-workflow-activities-and-form-elements",children:[]},{value:"Custom Components and Services",id:"custom-components-and-services",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:b};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxw/"}),"Geocortex Web")," is a next-generation framework for creating sleek and effective GIS applications for a wide variety of browsers. Apps allow users to view and interact with web-based maps and associated data. Geocortex Web can seamlessly display both 2D and 3D map data. Geocortex Web is part of the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.geocortex.com/products/"}),"Geocortex suite of products"),"."),Object(r.b)("p",null,"Geocortex Web apps are created, configured and deployed with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),". Web Designer is an intuitive web application that displays a live preview of Geocortex Web apps as they are being configured."),Object(r.b)(i.default,{mdxType:"DesignerCallout"}),Object(r.b)("h2",{id:"extending-geocortex-web"},"Extending Geocortex Web"),Object(r.b)("p",null,"If the Geocortex Web Designer cannot accomplish what you need, you can manually configure and extend Geocortex Web in a number of ways."),Object(r.b)("p",null,"The simplest way to customize your application is through configuration. If you need to implement complex behavior and user interactions, Geocortex Workflow may be able to accomplish your goals through an easy to use interface. Geocortex Workflow can be taken even further through custom extensions to its activity and form element library. Geocortex Web can also be extended through its SDK to create completely custom experiences."),Object(r.b)(u.a,{configLink:"#application-configuration",workflowLink:"#geocortex-workflow",customWorkflowLink:"#custom-workflow-activities-and-form-elements",customCodeLink:"#custom-components-and-services",mdxType:"ExtensibilitySpectrum"}),Object(r.b)("h3",{id:"application-configuration"},"Application Configuration"),Object(r.b)("p",null,"Every Geocortex Web application has a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-layout-getting-started"}),Object(r.b)("strong",{parentName:"a"},"layout")),", which represents the visual layout of the application, and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-getting-started"}),Object(r.b)("strong",{parentName:"a"},"app config"))," that configures various behaviors and settings within the application. Layout and app config can be easily edited to customize the appearance and behavior of an an Geocortex Web application without writing custom code."),Object(r.b)("p",null,"Before investing in developing workflows or custom code, see if your use case can be solved through the use of layout and configuration. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/key-concepts"}),"Explore the concepts")," to learn more about layout and app config."),Object(r.b)("h3",{id:"geocortex-workflow"},"Geocortex Workflow"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/"}),Object(r.b)("strong",{parentName:"a"},"Geocortex Workflow"))," is a powerful tool that comes bundled with Geocortex Web which can create custom behavior and UI without custom code development. Many behaviors in Geocortex Web can be ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/tutorial-change-default-map-click-behavior"}),"replaced by a workflow")," that runs entirely custom logic. Geocortex Workflow can even ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm"}),"display complex customized forms"),"."),Object(r.b)("h3",{id:"custom-workflow-activities-and-form-elements"},"Custom Workflow Activities and Form Elements"),Object(r.b)("p",null,"If Geocortex Workflow meets most of your need, but is missing a few crucial elements, the best solution may be to extend Geocortex Workflow with ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(o.a)({parentName:"strong"},{href:"/docs/web/tutorial-implement-custom-activity"}),"custom activities"))," and ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(o.a)({parentName:"strong"},{href:"/docs/web/tutorial-implement-custom-form-elements"}),"form elements")),". Extending Geocortex Workflow can take the rich out of the box Workflow experience and augment it with business logic or UI specific to your use case."),Object(r.b)("h3",{id:"custom-components-and-services"},"Custom Components and Services"),Object(r.b)("p",null,"If you need to build entirely custom and new behavior and UI, you should check out the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-overview"}),Object(r.b)("strong",{parentName:"a"},"Geocortex Web SDK")),". Using the Geocortex Web SDK, you can develop custom behavior by creating new ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/tutorial-implement-command-operation"}),"commands and operations")," which can be ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"used in the app config"),". If you need to create a new UI element, you can build ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-create"}),"custom components"),". With the ability to create ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/tutorial-service-dynamic-data"}),"background services"),", facilitate ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-components-interactions"}),"component interactions"),", and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/tutorial-implement-component-participate-app-config"}),"participate in the app config"),", the possibilities for extending Geocortex Web are endless."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(l.a,{mdxType:"UseCaseContainer"},Object(r.b)(s.a,{title:"Layout and App Config",description:"Learn more about the layout and app config",link:Object(c.a)("docs/web/key-concepts"),mdxType:"UseCaseCard"}),Object(r.b)(s.a,{title:"Running Workflows in Geocortex Web",description:"Learn how to build and run a workflow in Geocortex Web",link:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm",mdxType:"UseCaseCard"}),Object(r.b)(s.a,{title:"Building Custom Workflow Activities",description:"Learn how to build custom workflow activities for Geocortex Web",link:Object(c.a)("docs/web/tutorial-implement-custom-activity"),mdxType:"UseCaseCard"}),Object(r.b)(s.a,{title:"Geocortex Web SDK",description:"Develop custom commands and operations, components, and services using the Geocortex Web SDK",link:Object(c.a)("docs/web/sdk-overview"),mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),b=o,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||r;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},219:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var o=n(222),a=n(220);function r(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,c=r.forcePrependBaseUrl,i=void 0!==c&&c,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+u:u}(r,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},220:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},221:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},222:function(e,t,n){"use strict";var o=n(0),a=n(18);t.a=function(){var e=Object(o.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},223:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(13),c=n(220),i=n(8),s=Object(o.createContext)({collectLink:function(){}}),l=n(219),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,n,m=e.isNavLink,p=e.to,b=e.href,d=e.activeClassName,f=e["data-noBrokenLinkCheck"],v=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),h=Object(l.b)().withBaseUrl,w=Object(o.useContext)(s),g=p||b,O=void 0!==g?h(g):void 0,y=Object(c.a)(O),j=Object(o.useRef)(!1),x=m?r.e:r.c,k=i.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!k&&y&&window.docusaurus.prefetch(O),function(){k&&n&&n.disconnect()}}),[O,k,y]);var E=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,N=!O||!y||E;return O&&y&&!E&&!f&&w.collectLink(O),N?a.a.createElement("a",Object.assign({href:O},!y&&{target:"_blank",rel:"noopener noreferrer"},v)):a.a.createElement(x,Object.assign({},v,{onMouseEnter:function(){j.current||(window.docusaurus.preload(O),j.current=!0)},innerRef:function(e){var t,o;k&&e&&y&&(t=e,o=function(){window.docusaurus.prefetch(O)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),o())}))}))).observe(t))},to:O},m&&{activeClassName:d}))}},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),a=n.n(o),r=n(46),c=n.n(r);function i(e){var t=e.children;return a.a.createElement("div",{className:c.a.root},t)}},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(223),a=n(0),r=n.n(a),c=n(221),i=n(47),s=n.n(i);function l(e){var t=e.title,n=e.description,a=e.link;return r.a.createElement("div",{className:Object(c.a)("card-demo",s.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(o.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n(0),a=n.n(o),r=n(74),c=n.n(r),i=n(221);function s(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("path",{fill:"#fff",d:"M68.4 89.2h151v110.2h-151z"}),a.a.createElement("path",{className:c.a.svgFillBlue,d:"M219.4 202.7h-151c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3h151c1.8 0 3.3 1.5 3.3 3.3v110.2c0 1.8-1.5 3.3-3.3 3.3zm-147.7-6.6h144.4V92.5H71.7v103.6z"}),a.a.createElement("path",{className:c.a.svgFillBlue,d:"M218.4 112.4h-150c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h150c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3z"}),a.a.createElement("g",null,a.a.createElement("path",{className:c.a.svgFillBlue,d:"M191.5 111.1c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v18.6c0 1.8-1.5 3.3-3.3 3.3z"})),a.a.createElement("g",null,a.a.createElement("path",{className:c.a.svgFillBlue,d:"M141.8535 153.36022l5.42124-3.76464 19.6788 28.3383-5.42124 3.76464z"}),a.a.createElement("path",{className:c.a.svgFillBlue,d:"M129.4 170.3l-3.9-46.2 42 19.7z"})))}function l(){return a.a.createElement("path",{className:c.a.svgFillBlue,d:"M15 7H9V1h6v6zM7 17H1v6h6v-6zm8 0H9v6h6v-6zm8 0h-6v6h6v-6zm-10-6V8h-2v3H3v5h2v-3h6v3h2v-3h6v3h2v-5h-8z"})}function u(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("path",{fill:"#fff",d:"M68.4 89.2h151v110.2h-151z"}),a.a.createElement("path",{className:c.a.svgFillBlue,d:"M219.4 202.7h-151c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3h151c1.8 0 3.3 1.5 3.3 3.3v110.2c0 1.8-1.5 3.3-3.3 3.3zm-147.7-6.6h144.4V92.5H71.7v103.6z"}),a.a.createElement("path",{className:c.a.svgFillBlue,d:"M218.4 112.4h-150c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h150c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3z"}),a.a.createElement("g",null,a.a.createElement("path",{className:c.a.svgFillBlue,d:"M191.5 111.1c-1.8 0-3.3-1.5-3.3-3.3V89.2c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v18.6c0 1.8-1.5 3.3-3.3 3.3z"})),a.a.createElement("g",null,a.a.createElement("path",{className:Object(i.a)(c.a.svgFillBlue,c.a.svgStrokeBlue),d:"M125.6 176l-29.2-20.8v-5.1l29.2-22.6v9.2l-21.3 15.7v.2l21.3 14.2v9.2zM154.9 126.1l-16.6 59.2h-5l16.5-59.2h5.1zM192.3 154.9l-29.2 20.8v-9.2l21.4-14.1v-.3l-21.4-15.7v-9.2l29.2 22.5v5.2z"})))}function m(){return a.a.createElement("svg",{className:c.a.svgDashedLine,height:"80",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("defs",null,a.a.createElement("marker",{className:Object(i.a)(c.a.svgFillBlue,c.a.svgStrokeBlue),id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"2.5",markerHeight:"2.5",orient:"auto-start-reverse"},a.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z"}))),a.a.createElement("line",{className:Object(i.a)(c.a.arrowLine,c.a.svgStrokeBlue),strokeDashoffset:"-2.5",strokeDasharray:"10,5",x1:"10",y1:"10",x2:"10",y2:"60",markerEnd:"url(#arrow)"}))}function p(e){return a.a.createElement("a",{className:c.a.iconContainer,href:e.linkUrl},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{className:c.a.iconCircle,cx:"2.5em",cy:"2.5em",r:"2.5em"}),a.a.createElement("svg",{height:"5em",width:"5em"},e.children)),a.a.createElement("h2",{className:c.a.iconLabel},e.iconLabel))}function b(e){var t=e.configLink,n=e.workflowLink,o=e.customWorkflowLink,r=e.customCodeLink;return a.a.createElement("div",{className:c.a.container},a.a.createElement(p,{iconLabel:"Application Configuration",linkUrl:t},a.a.createElement("svg",{viewBox:"-10 -10 300 300"},a.a.createElement(s,null))),a.a.createElement(m,null),a.a.createElement(p,{iconLabel:"Geocortex Workflow",linkUrl:n},a.a.createElement("svg",{viewBox:"-12 -11 48 48"},a.a.createElement(l,null))),a.a.createElement(m,null),a.a.createElement(p,{iconLabel:"Custom Workflow Activities and Form Elements",linkUrl:o},a.a.createElement("svg",{viewBox:"-12 -11 48 48"},a.a.createElement(l,null)),a.a.createElement("svg",{viewBox:"-200 -190 500 500"},a.a.createElement(u,null))),a.a.createElement(m,null),a.a.createElement(p,{iconLabel:"Custom Components and Services",linkUrl:r},a.a.createElement("svg",{viewBox:"-10 -10 300 300"},a.a.createElement(u,null))))}},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),r=(n(0),n(218)),c={},i={unversionedId:"web/snippets/designer-callout",id:"web/snippets/designer-callout",isDocsHomePage:!1,title:"designer-callout",description:"The Geocortex Web Designer allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through Geocortex Workflow. Many use cases can be solved through the Geocortex Web Designer and don't require custom development.",source:"@site/docs/web/snippets/designer-callout.mdx",permalink:"/docs/web/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/designer-callout.mdx"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Have you explored the Geocortex Web Designer?")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer")," allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/overview"}),"Geocortex Workflow"),". Many use cases can be solved through the Geocortex Web Designer and don't require custom development."))))}u.isMDXComponent=!0}}]);