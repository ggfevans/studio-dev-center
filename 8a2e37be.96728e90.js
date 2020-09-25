(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{160:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(2),o=t(6),a=(t(0),t(223)),i={title:"Reference a Third Party Library in Geocortex Workflow Server",sidebar_label:"Reference a Third Party Library",description:"Geocortex Workflow - Reference a third party library in a Geocortex Workflow Server extension"},c={unversionedId:"workflow/sdk-server-reference-third-party-library",id:"workflow/sdk-server-reference-third-party-library",isDocsHomePage:!1,title:"Reference a Third Party Library in Geocortex Workflow Server",description:"Geocortex Workflow - Reference a third party library in a Geocortex Workflow Server extension",source:"@site/docs/workflow/sdk-server-reference-third-party-library.mdx",slug:"/workflow/sdk-server-reference-third-party-library",permalink:"/docs/workflow/sdk-server-reference-third-party-library",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-server-reference-third-party-library.mdx",version:"current",sidebar_label:"Reference a Third Party Library",sidebar:"workflow",previous:{title:"Create an Activity",permalink:"/docs/workflow/sdk-server-create-activity"},next:{title:"Implement an Activity that Calculates a Logarithm",permalink:"/docs/workflow/tutorial-server-calculate-logarithm-activity"}},s=[{value:"Adding Third Party Libraries",id:"adding-third-party-libraries",children:[]},{value:"Deploying Third Party Libraries",id:"deploying-third-party-libraries",children:[]}],l={rightToc:s};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As discussed in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview#setting-up-a-geocortex-workflow-server-extension-project"}),"Geocortex Workflow Server"),", deploying a custom activity to Geocortex Workflow Server involves creating a .NET project that generates compatible assemblies and then copying them to the build folder. Adding a third party assembly is as simple as adding the library to your .NET project and then ensuring it is copied along with the user defined code."),Object(a.b)("h2",{id:"adding-third-party-libraries"},"Adding Third Party Libraries"),Object(a.b)("p",null,"Any nuget package can be added to the project and used in custom activities."),Object(a.b)("h2",{id:"deploying-third-party-libraries"},"Deploying Third Party Libraries"),Object(a.b)("p",null,"Build the project to output the project assemblies. Follow the instructions to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview#deploying-geocortex-workflow-server-activities"}),"Deploy the Activity"),". Ensure that you locate and copy the third party assemblies. If you don't see them in the build output folder, ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/sdk-server-overview#setting-up-a-geocortex-workflow-server-extension-project"}),"review the instructions")," and ensure you have followed all the steps."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"An important step not to miss is adding the ",Object(a.b)("inlineCode",{parentName:"p"},"CopyLocalLockFileAssemblies")," attribute to the ",Object(a.b)("inlineCode",{parentName:"p"},".csproj")," file if you created a .NET Standard class library. Without this attribute, your nuget package reference assemblies will not be output to the build folder."))))}d.isMDXComponent=!0},223:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=d(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,f=p["".concat(i,".").concat(u)]||p[u]||b[u]||a;return t?o.a.createElement(f,c(c({ref:r},l),{},{components:t})):o.a.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);