(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{204:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return p})),i.d(t,"default",(function(){return l}));var a=i(1),n=i(9),r=(i(0),i(254)),o={title:"Access App Properties in an Activity",description:"Geocortex Workflow - Access app properties in a web applications workflow activity"},c={id:"workflow/usecases-web-access-app-properties",title:"Access App Properties in an Activity",description:"Geocortex Workflow - Access app properties in a web applications workflow activity",source:"@site/docs/workflow/usecases-web-access-app-properties.mdx",permalink:"/docs/workflow/usecases-web-access-app-properties",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/usecases-web-access-app-properties.mdx",sidebar:"workflow",previous:{title:"Implement a Custom Activity for Web Applications",permalink:"/docs/workflow/usecases-web-implement-custom-activity"},next:{title:"Implement a Custom Form Element for Web Applications",permalink:"/docs/workflow/usecases-web-implement-custom-form-elements"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"App Activities",id:"app-activities",children:[]},{value:"Example: Custom Activity that Adds a Layer to the Map",id:"example-custom-activity-that-adds-a-layer-to-the-map",children:[]}],s={rightToc:p};function l(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Learn how to build a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/usecases-web-implement-custom-activity"}),"custom activity")," for web applications before reading this article."),Object(r.b)("h2",{id:"app-activities"},"App Activities"),Object(r.b)("p",null,"Some activities may need access to resources like the map, the host application or host widget. The ",Object(r.b)("inlineCode",{parentName:"p"},"AppActivity")," base class can be used to extend an existing custom activity to access these resources."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Depending on the type of host application different resources will be available."))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add an import for the ",Object(r.b)("inlineCode",{parentName:"li"},"AppActivity")," base class at the top of your activity ",Object(r.b)("inlineCode",{parentName:"li"},".ts(x)")," file.",Object(r.b)("br",{parentName:"li"}),Object(r.b)("inlineCode",{parentName:"li"},'import { AppActivity } from "@geocortex/workflow/runtime/app/AppActivity";')),Object(r.b)("li",{parentName:"ol"},"Modify the activity class declaration to extend the ",Object(r.b)("inlineCode",{parentName:"li"},"AppActivity")," base class.",Object(r.b)("br",{parentName:"li"}),Object(r.b)("inlineCode",{parentName:"li"},"export class CustomActivity extends AppActivity")),Object(r.b)("li",{parentName:"ol"},"Use the ",Object(r.b)("inlineCode",{parentName:"li"},"map"),", ",Object(r.b)("inlineCode",{parentName:"li"},"app")," or ",Object(r.b)("inlineCode",{parentName:"li"},"widget")," properties of the activity class within the ",Object(r.b)("inlineCode",{parentName:"li"},"execute(inputs)")," method.")),Object(r.b)("h2",{id:"example-custom-activity-that-adds-a-layer-to-the-map"},"Example: Custom Activity that Adds a Layer to the Map"),Object(r.b)("p",null,"The following activity uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-integrating-the-arcgis-api"}),"ArcGIS Runtime SDK for .NET")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"AppActivity")," class to create a graphics layer and add it to the host's map. This activity assumes that it will be running in Geocortex Web, and so ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-integrating-the-arcgis-api#change-the-api-version-used-by-the-activity-sdk"}),"it uses the 4.x ArcGIS API for Javascript"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { AppActivity } from "@geocortex/workflow/runtime/app/AppActivity";\nimport * as Map from "esri/Map";\nimport * as Graphic from "esri/Graphic";\nimport * as GraphicsLayer from "esri/layers/GraphicsLayer";\nimport * as Polyline from "esri/geometry/Polyline";\nimport * as LineSymbol from "esri/symbols/LineSymbol";\n\n// @supportedApps GWV\n// @category Custom Activities\n// @description An activity which adds a graphics layer to a map.\nexport class AddLayerToMap extends AppActivity {\n    static action = "your:unique:namespace::AddLayerToMap";\n\n    static suite = "your:unique:namespace";\n\n    // Perform the execution logic of the activity.\n    async execute(inputs: object): Promise<void> {\n        var polylineGraphic = new Graphic({\n            geometry: new Polyline({\n                paths: [\n                    [\n                        [-111.3, 52.68],\n                        [-98, 49.5],\n                        [-93.94, 29.89],\n                    ],\n                ],\n            }),\n            symbol: new LineSymbol({\n                color: [226, 119, 40],\n                width: 4,\n            }),\n        });\n\n        var graphicsLayer = new GraphicsLayer({\n            graphics: [polylineGraphic],\n        });\n\n        (this.map as Map).add(graphicsLayer);\n\n        return;\n    }\n}\n')))}l.isMDXComponent=!0},254:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return u}));var a=i(0),n=i.n(a);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):c({},t,{},e)),i},b=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(i),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||r;return i?n.a.createElement(u,c({ref:t},s,{components:i})):n.a.createElement(u,c({ref:t},s))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=i[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);