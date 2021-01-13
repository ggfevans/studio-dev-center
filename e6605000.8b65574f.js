(window.webpackJsonp=window.webpackJsonp||[]).push([[144,130],{227:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return f})),o.d(t,"default",(function(){return u}));var r=o(3),n=(o(0),o(243)),a=o(244),i=o(249),c=o(248),s=o(79);const l={title:"Key Concepts",description:"Geocortex Workflow - Learn about key concepts."},p={unversionedId:"workflow/key-concepts",id:"workflow/key-concepts",isDocsHomePage:!1,title:"Key Concepts",description:"Geocortex Workflow - Learn about key concepts.",source:"@site/docs/workflow/key-concepts.mdx",slug:"/workflow/key-concepts",permalink:"/docs/workflow/key-concepts",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/key-concepts.mdx",version:"current",sidebar:"workflow",previous:{title:"Overview",permalink:"/docs/workflow/overview"},next:{title:"Geocortex Workflow TypeScript SDK Overview",permalink:"/docs/workflow/sdk-web-overview"}},f=[{value:"Workflow",id:"workflow",children:[]},{value:"Activities",id:"activities",children:[]},{value:"Form Elements",id:"form-elements",children:[]},{value:"Geocortex Workflow Designer and Runtime",id:"geocortex-workflow-designer-and-runtime",children:[]},{value:"Geocortex Workflow Hosts",id:"geocortex-workflow-hosts",children:[]},{value:"Activity Packs",id:"activity-packs",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={toc:f};function u({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)(s.default,{mdxType:"DesignerCallout"}),Object(n.b)("p",null,"Geocortex Workflow is a flexible tool for automating business processes. It allows you to create ",Object(n.b)("strong",{parentName:"p"},"workflows"),", which are composed of various ",Object(n.b)("strong",{parentName:"p"},"activities"),", control flow elements such as loops, and forms that enable user interaction. Workflows can run on different platforms, including ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxw/"}),"Geocortex Web"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxm/"}),"Geocortex Mobile"),", on a business server, or in ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.esri.com/en-us/arcgis/products/web-appbuilder/overview"}),"Web AppBuilder for ArcGIS"),"."),Object(n.b)("h2",{id:"workflow"},"Workflow"),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"workflow")," is a collection of connected activities and forms, and is created using Geocortex Workflow Designer. Workflows are generic and not tied to a platform by default, but certain activities and features will only work in certain platforms."),Object(n.b)("h2",{id:"activities"},"Activities"),Object(n.b)("p",null,"Activities are the building blocks of a workflow. Each activity represents a unit of work. For example, Geocortex Workflow provides activities to set the map extent, perform geocoding, and gather input from the user. In all, Geocortex Workflow ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"provides over 200 activities")," for building workflows."),Object(n.b)("p",null,"Most activities have inputs - the values that the activity operates on, and outputs - the results of the activity's operations. When you add an activity to a workflow, you customize the activity by configuring the activity's inputs. The outputs are computed when the workflow runs."),Object(n.b)("p",null,"Activities have metadata that Geocortex Workflow Designer presents to an end user for easy workflow creation. This metadata can be defined in an ",Object(n.b)("strong",{parentName:"p"},"activity pack"),". They also have an implementation, which powers the behavior of the activity. This implementation is defined in the appropriate language for the target platform; activities for web applications are defined in TypeScript, and activities for Geocortex Mobile applications are defined in C#."),Object(n.b)("h2",{id:"form-elements"},"Form Elements"),Object(n.b)("p",null,"Some platforms have UI, like Geocortex Web or Geocortex Mobile, and can use forms to facilitate end user interaction. Geocortex Workflow ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"provides over twenty configurable ",Object(n.b)("strong",{parentName:"a"},"form elements"))," for building forms, like the Auto Complete, Geometry Picker, Date Picker, Number Slider, and Text Area elements. Just as activities are the building blocks of workflows, form elements are the building blocks of forms."),Object(n.b)("h2",{id:"geocortex-workflow-designer-and-runtime"},"Geocortex Workflow Designer and Runtime"),Object(n.b)("p",null,"Geocortex Workflow includes a powerful tool for building workflows, Geocortex Workflow Designer. Designer's drag-and-drop interface and library of predefined activities simplify the process of creating custom functionality for your web mapping applications, without programming. Geocortex Workflow Designer uses activity definitions to produce workflows."),Object(n.b)("p",null,"When a workflow is run, the workflow definition is read and executed by the ",Object(n.b)("strong",{parentName:"p"},"workflow runtime"),". The runtime is responsible for locating the activity implementation definitions, and executing them with the inputs defined in the workflow definitions. Each ",Object(n.b)("strong",{parentName:"p"},"workflow host")," has a different runtime:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Geocortex Web and Web AppBuilder for ArcGIS use the JavaScript workflow runtime"),Object(n.b)("li",{parentName:"ul"},"Geocortex Mobile and Geocortex Workflow Server use the .NET workflow runtime")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Types of Workflows")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Workflows are classified as ",Object(n.b)("strong",{parentName:"p"},"client")," and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),Object(n.b)("strong",{parentName:"a"},"server workflows")),". Client workflows support visual elements such as forms and prompts, and can be run on platforms with a visual interface, such as Geocortex Web or Geocortex Mobile. Server workflows do not support forms, prompts, or other visual elements, and can only be run on Geocortex Workflow Server, which has no visual interface. However, server workflows have a number of unique capabilities, such as the ability to connect to a database or mail server."))),Object(n.b)("h2",{id:"geocortex-workflow-hosts"},"Geocortex Workflow Hosts"),Object(n.b)("p",null,"Geocortex Workflow, is a cross platform product. If an environment supports a version of the workflow runtime it, is called a ",Object(n.b)("strong",{parentName:"p"},"workflow host"),"."),Object(n.b)("p",null,"The current existing workflow hosts are:"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Web Applications")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Geocortex Web (client)"),Object(n.b)("li",{parentName:"ul"},"Geocortex Viewer for HTML5 (client)"),Object(n.b)("li",{parentName:"ul"},"Web AppBuilder for ArcGIS (client)")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},".NET Applications")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Geocortex Mobile (client)"),Object(n.b)("li",{parentName:"ul"},"Geocortex Workflow Server (server)")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/hosting.htm%3FTocPath%3DConfigure%2520Host%2520Applications%7C_____0"}),"Learn more about the different workflow hosts")," or about ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/run-in-different-environments.htm#Run_a_Workflow_in_Different_Environments%3FTocPath%3DRun%2520a%2520Workflow%2520in%2520Different%2520Environments%7C_____0"}),"adapting workflows to different environments"),"."),Object(n.b)("h2",{id:"activity-packs"},"Activity Packs"),Object(n.b)("p",null,"An activity pack defines a collection of activities that Geocortex Workflow Designer is aware of. An activity pack defines the metadata for one or more activities so that it can participate in the Geocortex Workflow Designer interface."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"If the activities are targeted for web platforms, the activity pack can also define activity implementations and form elements otherwise, activity implementations and form elements are defined on the target platform."))),Object(n.b)("p",null,"Activity packs must be registered as an ArcGIS item, and this makes them ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-overview#sharing-the-activity-pack"}),"shareable with other workflow authors"),"."),Object(n.b)("h2",{id:"next-steps"},"Next Steps"),Object(n.b)(c.a,{mdxType:"UseCaseContainer"},Object(n.b)(i.a,{title:"Get Started with the Web Applications SDK",description:"Build custom activities and form elements with the Web Applications SDK",link:Object(a.a)("docs/workflow/sdk-web-overview"),mdxType:"UseCaseCard"}),Object(n.b)(i.a,{title:"Get Started with the Geocortex Mobile SDK",description:"Build custom activities and form elements with the Geocortex Mobile SDK",link:Object(a.a)("docs/workflow/sdk-mobile-overview"),mdxType:"UseCaseCard"}),Object(n.b)(i.a,{title:"Get Started with Geocortex Workflow Server",description:"Build custom activities for a server environment with Geocortex Workflow Server",link:Object(a.a)("docs/workflow/sdk-server-overview"),mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},243:function(e,t,o){"use strict";o.d(t,"a",(function(){return f})),o.d(t,"b",(function(){return d}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},f=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(o),u=r,d=f["".concat(i,".").concat(u)]||f[u]||b[u]||a;return o?n.a.createElement(d,c(c({ref:t},l),{},{components:o})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},244:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return i}));var r=o(21),n=o(245);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(o,r)=>function(e,t,o,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if(Object(n.b)(o))return o;if(r)return t+o;const i=o.startsWith(t)?o:t+o.replace(/^\//,"");return a?e+i:i}(t,e,o,r)}}function i(e,t={}){const{withBaseUrl:o}=a();return o(e,t)}},245:function(e,t,o){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return n}))},246:function(e,t,o){"use strict";function r(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},247:function(e,t,o){"use strict";var r=o(0),n=o.n(r),a=o(11),i=o(245),c=o(9);const s=Object(r.createContext)({collectLink:()=>{}});var l=o(244),p=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};t.a=function(e){var t,{isNavLink:o,to:f,href:b,activeClassName:u,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:w=!0}=e,h=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),O=Object(r.useContext)(s),k=f||b,j=Object(i.a)(k),g=null==k?void 0:k.replace("pathname://",""),y=void 0!==g?(x=g,w&&(e=>e.startsWith("/"))(x)?v(x):x):void 0;var x;const N=Object(r.useRef)(!1),W=o?a.e:a.c,G=c.a.canUseIntersectionObserver;let D;Object(r.useEffect)((()=>(!G&&j&&window.docusaurus.prefetch(y),()=>{G&&D&&D.disconnect()})),[y,G,j]);const _=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,A=!y||!j||_;return y&&j&&!_&&!m&&O.collectLink(y),A?n.a.createElement("a",Object.assign({href:y},k&&!j&&{target:"_blank",rel:"noopener noreferrer"},h)):n.a.createElement(W,Object.assign({},h,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(y),N.current=!0)},innerRef:e=>{var t,o;G&&e&&j&&(t=e,o=()=>{window.docusaurus.prefetch(y)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),o())}))})),D.observe(t))},to:y||""},o&&{isActive:d,activeClassName:u}))}},248:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var r=o(0),n=o.n(r),a=o(54),i=o.n(a);function c({children:e}){return n.a.createElement("div",{className:i.a.root},e)}},249:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var r=o(247),n=o(0),a=o.n(n),i=o(246),c=o(55),s=o.n(c);function l({title:e,description:t,link:o}){return a.a.createElement("div",{className:Object(i.a)("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,e)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,t)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(r.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},79:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(3),n=(o(0),o(243));const a={},i={unversionedId:"workflow/snippets/designer-callout",id:"workflow/snippets/designer-callout",isDocsHomePage:!1,title:"designer-callout",description:"The Geocortex Workflow Designer has a wide range of built-in activities you can use to satisfy your business case. You can take the behavior of workflow even further by running the commands and operations available in Geocortex Web and Geocortex Mobile.",source:"@site/docs/workflow/snippets/designer-callout.mdx",slug:"/workflow/snippets/designer-callout",permalink:"/docs/workflow/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/designer-callout.mdx",version:"current"},c=[],s={toc:c};function l({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Have you explored the Geocortex Workflow Designer?")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"The ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer")," has a wide range of built-in activities you can use to satisfy your business case. You can take the behavior of workflow even further by running the commands and operations available in ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations"}),"Geocortex Web")," and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/configuration-commands-operations"}),"Geocortex Mobile"),"."))))}l.isMDXComponent=!0}}]);