(window.webpackJsonp=window.webpackJsonp||[]).push([[47,53],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(223)),i=n(63),c=n(224),s={title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for Geocortex Workflow Server that calculates the logarithm of a number"},l={unversionedId:"workflow/tutorial-server-calculate-logarithm-activity",id:"workflow/tutorial-server-calculate-logarithm-activity",isDocsHomePage:!1,title:"Implement an Activity that Calculates a Logarithm",description:"Geocortex Workflow - Implement a custom activity for Geocortex Workflow Server that calculates the logarithm of a number",source:"@site/docs/workflow/tutorial-server-calculate-logarithm-activity.mdx",slug:"/workflow/tutorial-server-calculate-logarithm-activity",permalink:"/docs/workflow/tutorial-server-calculate-logarithm-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/tutorial-server-calculate-logarithm-activity.mdx",version:"current",sidebar:"workflow",previous:{title:"Reference a Third Party Library in Geocortex Workflow Server",permalink:"/docs/workflow/sdk-server-reference-third-party-library"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up the Activity Skeleton",id:"set-up-the-activity-skeleton",children:[]},{value:"Register the Activity with an Assembly Attribute",id:"register-the-activity-with-an-assembly-attribute",children:[]},{value:"Implement the Custom Activity",id:"implement-the-custom-activity",children:[]},{value:"Deploy the Activity",id:"deploy-the-activity",children:[]},{value:"Test your Activity",id:"test-your-activity",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Implementing a custom ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/key-concepts#activities"}),"activity")," allows you to build a reusable, completely custom behavior to augment the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"existing activities")," that come with Geocortex Workflow."),Object(r.b)("p",null,"In this article, you will learn how to create a custom activity that calculates the logarithm of a number with a given base."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(i.default,{mdxType:"ServerPrereqs"}),Object(r.b)("h2",{id:"set-up-the-activity-skeleton"},"Set up the Activity Skeleton"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a new file ",Object(r.b)("inlineCode",{parentName:"li"},"CalculateLog.cs")," in the project."),Object(r.b)("li",{parentName:"ol"},"Add a new skeleton workflow activity that implements ",Object(r.b)("inlineCode",{parentName:"li"},"IActivityHandler"),".")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Use a unique prefix on the ",Object(r.b)("inlineCode",{parentName:"p"},"Action")," property to avoid it conflicting with someone else's custom activities.  "))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'title="YourProjectName/CalculateLog.cs"',title:'"YourProjectName/CalculateLog.cs"'}),'using Geocortex.Workflow.Runtime;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public static string Action { get; } = "your:unique:namespace::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>());\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"register-the-activity-with-an-assembly-attribute"},"Register the Activity with an Assembly Attribute"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a new file, ",Object(r.b)("inlineCode",{parentName:"li"},"Properties\\AssemblyInfo.cs")),Object(r.b)("li",{parentName:"ol"},"Add the custom Geocortex Workflow attribute to ",Object(r.b)("inlineCode",{parentName:"li"},"AssemblyInfo.cs"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'title="YourProjectName/Properties/AssemblyInfo.cs"',title:'"YourProjectName/Properties/AssemblyInfo.cs"'}),"[assembly: Geocortex.Workflow.Runtime.WorkflowActivities]`\n")),Object(r.b)("p",null,"This registers the assembly to a namespace that Geocortex Workflow Server can discover."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"By convention, assembly attributes are typically added to a file called ",Object(r.b)("inlineCode",{parentName:"p"},'"Properties\\AssemblyInfo.cs"'),", but they can be added to any code file."))),Object(r.b)("h2",{id:"implement-the-custom-activity"},"Implement the Custom Activity"),Object(r.b)("p",null,"We now have a empty activity that Geocortex Workflow Server can use that takes no inputs and produces no outputs. By changing the inputs, outputs, and execute logic, you can create your own custom activity that calculates the logarithm of a number."),Object(r.b)("p",null,"First, let's change the execute logic to parse inputs that make sense for a logarithm activity."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'title="YourProjectName/CalculateLog.cs"',title:'"YourProjectName/CalculateLog.cs"'}),'using Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public const string Action = "your:unique:namespace::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            // highlight-start\n            double? logBase = null;\n            if (inputs.ContainsKey("base"))\n            {\n                logBase = inputs["base"] as double?;\n            }\n            var value = (double)inputs["value"];\n            // highlight-end\n\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>());\n        }\n    }\n}\n')),Object(r.b)("p",null,"Next, modify the ",Object(r.b)("inlineCode",{parentName:"p"},"Execute")," method of the activity to calculate the logarithm of a number given an optional base"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'title="YourProjectName/CalculateLog.cs"',title:'"YourProjectName/CalculateLog.cs"'}),'using Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public const string Action = "your:unique:namespace::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            double? logBase = null;\n            if (inputs.ContainsKey("base"))\n            {\n                logBase = inputs["base"] as double?;\n            }\n            var value = (double)inputs["value"];\n\n            // highlight-start\n            double logResult;\n            if (logBase != null)\n            {\n                logResult = Math.Log(value, (double)logBase);\n            }\n            else\n            {\n                logResult = Math.Log(value);\n            }\n\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>()\n            {\n                ["result"] = logResult\n            });\n            // highlight-end\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"deploy-the-activity"},"Deploy the Activity"),Object(r.b)("p",null,"Follow the instructions to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview#deploying-geocortex-workflow-server-activities"}),"deploy Geocortex Workflow Server activities"),"."),Object(r.b)("h2",{id:"test-your-activity"},"Test your Activity"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm"}),"Server workflows")," that run on your Geocortex Workflow Server deployment can now run this custom activity."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-net-register-activities"}),"Registering .NET activity stubs")," provides a user friendly interface for your custom activities in Geocortex Workflow Designer."))),Object(r.b)("p",null,"You can run the custom activity by referencing it by action with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm"}),"the ",Object(r.b)("inlineCode",{parentName:"a"},"RunActivity")," activity"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",null,"You can"," ",Object(r.b)("a",{href:Object(c.a)("workflows/server-calculate-logarithm-activity.json"),download:"calculate-log-activity.json"},"download this demo server workflow")," ","that runs the custom activity and",Object(r.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"}," ","import it into the Geocortex Workflow Designer."," ")))))}p.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||r;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(227),o=n(225);function r(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,c=void 0!==i&&i,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},227:function(e,t,n){"use strict";var a=n(0),o=n(19);t.a=function(){var e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(223)),i={},c={unversionedId:"workflow/snippets/prereqs-server",id:"workflow/snippets/prereqs-server",isDocsHomePage:!1,title:"prereqs-server",description:"Extending Geocortex Workflow with server side components requires an on-premises installation of Geocortex Workflow. You will need administrative access to this installation.",source:"@site/docs/workflow/snippets/prereqs-server.mdx",slug:"/workflow/snippets/prereqs-server",permalink:"/docs/workflow/snippets/prereqs-server",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-server.mdx",version:"current"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Extending Geocortex Workflow with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),"server side components")," requires an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/installation.htm"}),"on-premises installation of Geocortex Workflow"),". You will need administrative access to this installation."))),Object(r.b)("p",null,"Follow the instructions in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview"}),"Geocortex Workflow Server")," page to set up your development environment and Geocortex Workflow Server extension project."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A working knowledge of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-ca/dotnet/csharp/"}),"C#")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/platform/dotnet-standard"}),".NET Standard")," is recommended before extending Geocortex Workflow Server"))))}u.isMDXComponent=!0}}]);