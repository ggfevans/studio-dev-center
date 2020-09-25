(window.webpackJsonp=window.webpackJsonp||[]).push([[136,30,141],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return w}));var o=n(2),r=n(6),i=(n(0),n(223)),a=n(224),c=n(233),s=n(234),l=n(229),u=n(230),p=n(57),m=n(51),b={title:"Create an Activity",description:"Geocortex Workflow - Create a workflow activity for web applications"},d={unversionedId:"workflow/sdk-mobile-create-activity",id:"workflow/sdk-mobile-create-activity",isDocsHomePage:!1,title:"Create an Activity",description:"Geocortex Workflow - Create a workflow activity for web applications",source:"@site/docs/workflow/sdk-mobile-create-activity.mdx",slug:"/workflow/sdk-mobile-create-activity",permalink:"/docs/workflow/sdk-mobile-create-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-mobile-create-activity.mdx",version:"current",sidebar:"workflow",previous:{title:"Using the .NET Workflow SDK with Geocortex Mobile",permalink:"/docs/workflow/sdk-mobile-overview"},next:{title:"Workflow Activity Reference",permalink:"/docs/workflow/sdk-mobile-activity-reference"}},f=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Activity",id:"create-the-activity",children:[]},{value:"Register the Activity with the <code>IActivityHandlerFactory</code>",id:"register-the-activity-with-the-iactivityhandlerfactory",children:[]},{value:"Use the Activity in a Workflow",id:"use-the-activity-in-a-workflow",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],v={rightToc:f};function w(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article will walk you through creating a new workflow activity for Geocortex Mobile applications."),Object(i.b)("img",{src:Object(a.a)("img/workflow-mobile-create-activity.png")}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)(p.default,{mdxType:"MobilePrereqs"}),Object(i.b)("h2",{id:"create-the-activity"},"Create the Activity"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new file ",Object(i.b)("inlineCode",{parentName:"li"},"CustomActivity.cs")," in the platform agnostic project of the Geocortex Mobile ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/mobile/sdk-overview"}),"Quickstart"),"."),Object(i.b)("li",{parentName:"ol"},"Add a new skeleton workflow activity that implements ",Object(i.b)("inlineCode",{parentName:"li"},"IActivityHandler"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/CustomActivity.cs"',title:'"App1/App1/CustomActivity.cs"'}),'using App1.Workflow;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\n[assembly: Export(typeof(CustomActivity))]\nnamespace App1.Workflow\n{\n    public class CustomActivity : IActivityHandler\n    {\n        public static string Action { get; } = "your:unique:namespace::CustomActivity";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>(){\n                ["test"] = "value"\n            });\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"register-the-activity-with-the-iactivityhandlerfactory"},"Register the Activity with the ",Object(i.b)("inlineCode",{parentName:"h2"},"IActivityHandlerFactory")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new file, ",Object(i.b)("inlineCode",{parentName:"li"},"ActivityLoader.cs")," in the platform agnostic project of the Geocortex Mobile ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/mobile/sdk-overview"}),"Quickstart"),"."),Object(i.b)("li",{parentName:"ol"},"Implement the ",Object(i.b)("inlineCode",{parentName:"li"},"IActivityHandlerFactory")," interface and register the activity skeleton we created in the constructor.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cs",metastring:'title="App1/App1/ActivityLoader.cs"',title:'"App1/App1/ActivityLoader.cs"'}),'using System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing VertiGIS.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Definition;\nusing Geocortex.Workflow.Runtime.Execution;\nusing App1.Workflow;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Workflow\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader(Func<CustomActivity> customActivityFactory)\n        {\n            // highlight-next-line\n            RegisteredActivities[CustomActivity.Action] = customActivityFactory;\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"use-the-activity-in-a-workflow"},"Use the Activity in a Workflow"),Object(i.b)("p",null,"Workflows that run in your custom Geocortex Mobile application can now run this custom activity."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/sdk-net-register-activities"}),"Registering stubs for .NET activities")," provides a user friendly interface for your custom activities in Geocortex Workflow Designer."))),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____167"}),Object(i.b)("inlineCode",{parentName:"a"},"RunActivity"))," activity can be used to execute your activity by the name defined in ",Object(i.b)("inlineCode",{parentName:"p"},"CustomActivity.cs")," (for this example, ",Object(i.b)("inlineCode",{parentName:"p"},"your:unique:namespace::CustomActivity"),")."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",null,"You can"," ",Object(i.b)("a",{href:Object(a.a)("workflows/mobile-create-activity.json"),download:"custom-activity-workflow.json"},"download this demo workflow")," ","that runs the custom activity and",Object(i.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," ")))),Object(i.b)("p",null,"Next you need to run the workflow you just created in your Geocortex Mobile SDK project."),Object(i.b)("p",null,"You can do this by configuring the layout and app config to run a workflow. You will need to copy the ID of the the workflow you created into the app.json"),Object(i.b)(m.default,{mdxType:"WorkflowUrlSnippet"}),Object(i.b)(c.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["large"]\n        },\n        {\n            "$type": "workflow",\n            "id": "custom-workflow",\n            "title": "Custom Workflow",\n            "target": "#taskbar",\n            // highlight-next-line\n            "portalItem": "<your-workflow-id>"\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Run Custom Workflow",\n                    "isEnabled": true,\n                    "iconId": "workflow",\n                    "action": {\n                        "name": "workflow.run",\n                        "arguments": {\n                            "id": "custom-workflow"\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(i.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n    <gxm:taskbar id="taskbar" orientation="vertical">\n        <map slot="main">\n            <stack margin="0.8" slot="top-right" halign="end">\n                <iwtm config="iwtm"/>\n            </stack>\n        </map>\n    </gxm:taskbar>\n</layout>\n'))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(a.a)("img/workflow-mobile-create-activity.png")}))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(l.a,{mdxType:"UseCaseContainer"},Object(i.b)(u.a,{title:"Calculate a Logarithm with a Custom Activity",description:"Implement a custom activity that calculates the logarithm of a number",link:Object(a.a)("docs/workflow/tutorial-mobile-calculate-logarithm-activity"),mdxType:"UseCaseCard"}),Object(i.b)(u.a,{title:"Implement a Custom Form Element",description:"Implement a custom form element for applications like Geocortex Mobile",link:Object(a.a)("docs/workflow/tutorial-mobile-activity-indicator-form-element"),mdxType:"UseCaseCard"}),Object(i.b)(u.a,{title:"Add a Callout to the Map through a Custom Activity",description:"Access the map in custom activities for Geocortex Mobile",link:Object(a.a)("docs/workflow/tutorial-mobile-show-map-callout"),mdxType:"UseCaseCard"}),Object(i.b)(u.a,{title:"Use the ArcGIS Runtime SDK for .NET in an activity.",description:"Use the ArcGIS Runtime SDK for .NET in an activity or form element",link:Object(a.a)("docs/workflow/sdk-net-integrating-the-arcgis-api"),mdxType:"UseCaseCard"})))}w.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,d=p["".concat(a,".").concat(b)]||p[b]||m[b]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var o=n(227),r=n(225);function i(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},226:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},227:function(e,t,n){"use strict";var o=n(0),r=n(19);t.a=function(){var e=Object(o.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},228:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(13),a=n(225),c=n(8),s=Object(o.createContext)({collectLink:function(){}}),l=n(224),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};t.a=function(e){var t,n,p,m=e.isNavLink,b=e.to,d=e.href,f=e.activeClassName,v=e["data-noBrokenLinkCheck"],w=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),h=Object(l.b)().withBaseUrl,y=Object(o.useContext)(s),g=b||d,O=Object(a.a)(g),j=null==g?void 0:g.replace("pathname://",""),k=void 0!==j?function(e){return e.startsWith("/")}(n=j)?h(n):n:void 0,x=Object(o.useRef)(!1),N=m?i.e:i.c,A=c.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!A&&O&&window.docusaurus.prefetch(k),function(){A&&p&&p.disconnect()}}),[k,A,O]);var C=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,T=!k||!O||C;return k&&O&&!C&&!v&&y.collectLink(k),T?r.a.createElement("a",Object.assign({href:k},!O&&{target:"_blank",rel:"noopener noreferrer"},w)):r.a.createElement(N,Object.assign({},w,{onMouseEnter:function(){x.current||(window.docusaurus.preload(k),x.current=!0)},innerRef:function(e){var t,n;A&&e&&O&&(t=e,n=function(){window.docusaurus.prefetch(k)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:k||""},m&&{activeClassName:f}))}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),r=n.n(o),i=n(46),a=n.n(i);function c(e){var t=e.children;return r.a.createElement("div",{className:a.a.root},t)}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(228),r=n(0),i=n.n(r),a=n(226),c=n(47),s=n.n(c);function l(e){var t=e.title,n=e.description,r=e.link;return i.a.createElement("div",{className:Object(a.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}},231:function(e,t,n){"use strict";var o=n(0),r=Object(o.createContext)(void 0);t.a=r},232:function(e,t,n){"use strict";var o=n(0),r=n(231);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},233:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(232),a=n(226),c=n(48),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,m=e.groupId,b=Object(i.a)(),d=b.tabGroupChoices,f=b.setTabGroupChoices,v=Object(o.useState)(c),w=v[0],h=v[1],y=Object(o.useState)(!1),g=y[0],O=y[1];if(null!=m){var j=d[m];null!=j&&j!==w&&p.some((function(e){return e.value===j}))&&h(j)}var k=function(e){h(e),null!=m&&f(m,e)},x=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||O(!0)},A=function(){O(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",A)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(a.a)("tabs__item",s.a.tabItem,{"tabs__item--active":w===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),N(e)},onFocus:function(){return k(t)},onClick:function(){k(t),O(!1)},onPointerDown:function(){return O(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===w}))[0]))}},234:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){return r.a.createElement("div",null,e.children)}},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),i=(n(0),n(223)),a={},c={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.geocortex.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.geocortex.com/workflow/designer/#workflow=",Object(i.b)("b",null,"44010fc421dd4659b74fb921e09ba594")),Object(i.b)("br",null))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),i=(n(0),n(223)),a={},c={unversionedId:"workflow/snippets/prereqs-mobile",id:"workflow/snippets/prereqs-mobile",isDocsHomePage:!1,title:"prereqs-mobile",description:"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the Geocortex Mobile SDK",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",slug:"/workflow/snippets/prereqs-mobile",permalink:"/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx",version:"current"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK")))),Object(i.b)("p",null,"Follow the instructions in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/sdk-mobile-overview"}),"Geocortex Mobile SDK")," page to set up the environment for extending Workflow for Geocortex Mobile."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A working knowledge of ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"}),"C#")," and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/platform/dotnet-standard"}),".NET Standard")," is recommended before extending Workflow for Geocortex Mobile"))))}u.isMDXComponent=!0}}]);