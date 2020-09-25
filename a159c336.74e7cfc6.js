(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{171:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return o})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return l}));var n=i(2),a=i(6),c=(i(0),i(223)),r={title:"Workflow Activity Reference",sidebar_label:"Activity Reference",description:"Geocortex Workflow - Reference for workflow activities for web applications"},o={unversionedId:"workflow/sdk-web-activity-reference",id:"workflow/sdk-web-activity-reference",isDocsHomePage:!1,title:"Workflow Activity Reference",description:"Geocortex Workflow - Reference for workflow activities for web applications",source:"@site/docs/workflow/sdk-web-activity-reference.mdx",slug:"/workflow/sdk-web-activity-reference",permalink:"/docs/workflow/sdk-web-activity-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-web-activity-reference.mdx",version:"current",sidebar_label:"Activity Reference",sidebar:"workflow",previous:{title:"Create an Activity",permalink:"/docs/workflow/sdk-web-create-activity"},next:{title:"Workflow Form Element Reference",permalink:"/docs/workflow/sdk-web-form-reference"}},s=[{value:"Registering Activities",id:"registering-activities",children:[]},{value:"Inputs and Outputs",id:"inputs-and-outputs",children:[]},{value:"App Activities",id:"app-activities",children:[]}],p={rightToc:s};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In the Geocortex Workflow TypeScript SDK, activities are represented as simple classes with an ",Object(c.b)("inlineCode",{parentName:"p"},"execute")," method."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'// @displayName MyCustomActivity\n// @category Custom Activities\nexport class MyCustomActivity {\n    // The unique identifier of the activity.\n    static action =\n        "uuid:5ab188eb-dc0d-42c7-bc3a-57cdcda0adcb::MyCustomActivity";\n\n    // The identifier of the suite of activities that this activity belongs to.\n    static suite = "uuid:5ab188eb-dc0d-42c7-bc3a-57cdcda0adcb";\n\n    // Perform the execution logic of the activity.\n    async execute(\n        inputs: MyCustomActivityInputs\n    ): Promise<MyCustomActivityOutputs> {\n        return { result: "test" };\n    }\n}\n')),Object(c.b)("h2",{id:"registering-activities"},"Registering Activities"),Object(c.b)("p",null,"The recommended method of creating and registering a new activity is through the ",Object(c.b)("inlineCode",{parentName:"p"},"npm run activity")," script."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"The script will perform the following operations:",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"Create a new activity ",Object(c.b)("inlineCode",{parentName:"li"},".ts")," file with the provided name in the ",Object(c.b)("inlineCode",{parentName:"li"},"src/activities")," folder."),Object(c.b)("li",{parentName:"ol"},"Populate the activity ",Object(c.b)("inlineCode",{parentName:"li"},".ts")," file from an activity template."),Object(c.b)("li",{parentName:"ol"},"Register the activity in ",Object(c.b)("inlineCode",{parentName:"li"},"src/index.ts"),".")))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"It's convention to use PascalCase for activity names.\nYou can add many activities to the same project."))),Object(c.b)("h2",{id:"inputs-and-outputs"},"Inputs and Outputs"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"execute")," method of an activity class has typed inputs and outputs. These inputs and outputs are decorated with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-activity-block-tags"}),"block tags")," to provide display hints in Geocortex Workflow Designer."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/activities/CustomActivity.ts"',title:'"src/activities/CustomActivity.ts"'}),'/** An interface that defines the inputs of the activity. */\nexport interface CustomActivityInputs {\n    // @description The first input to the activity.\n    // @required\n    input1?: string;\n\n    // @description The second input to the activity.\n    input2?: number;\n}\n\n/** An interface that defines the outputs of the activity. */\nexport interface CustomActivityOutputs {\n    /** A result of the activity. */\n    // @description The result of the activity.\n    result: string;\n}\n\n// @category Custom Activities\n// @description A description of the activity.\nexport class CustomActivity {\n    static action = "your:unique:namespace::CustomActivity";\n\n    static suite = "your:unique:namespace";\n\n    // Perform the execution logic of the activity.\n    // highlight-start\n    async execute(\n        inputs: CustomActivityInputs\n    ): Promise<CustomActivityOutputs> {\n        return { result: "test" };\n    }\n    // highlight-end\n}\n')),Object(c.b)("h2",{id:"app-activities"},"App Activities"),Object(c.b)("p",null,"The Geocortex Workflow TypeScript SDK has a concept of an ",Object(c.b)("inlineCode",{parentName:"p"},"AppActivity"),", which is an activity that needs access to its ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/key-concepts#geocortex-workflow-hosts"}),"host"),"."),Object(c.b)("p",null,"Activities that extend the ",Object(c.b)("inlineCode",{parentName:"p"},"AppActivity")," gain access to the ",Object(c.b)("inlineCode",{parentName:"p"},"map"),", ",Object(c.b)("inlineCode",{parentName:"p"},"app"),", or ",Object(c.b)("inlineCode",{parentName:"p"},"widget")," properties."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Depending on the type of host application, different resources will be available. For example, Web AppBuilder for ArcGIS is the only platform which has access to the ",Object(c.b)("inlineCode",{parentName:"p"},"widget")," property."))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'// highlight-next-line\nimport { AppActivity } from "@geocortex/workflow/runtime/app/AppActivity";\n\n// @supportedApps GWV\n// @category Custom Activities\n// @description An activity which adds a graphics layer to a map.\n// highlight-next-line\nexport class CustomAppActivity extends AppActivity {\n    static action = "your:unique:namespace::AddLayerToMap";\n\n    static suite = "your:unique:namespace";\n\n    // Perform the execution logic of the activity.\n    async execute(inputs: object): Promise<void> {\n        // highlight-next-line\n        // This function has access to the this.map, this.app, and this.widget properties.\n        // ...\n    }\n}\n')),Object(c.b)("p",null,"For a complete example, check out the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/tutorial-web-add-layer-to-map"}),"Add Layer to Map")," custom activity tutorial."))}l.isMDXComponent=!0},223:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return m}));var n=i(0),a=i.n(n);function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(i),d=n,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||c;return i?a.a.createElement(m,o(o({ref:t},p),{},{components:i})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=i.length,r=new Array(c);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var p=2;p<c;p++)r[p]=i[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);