(window.webpackJsonp=window.webpackJsonp||[]).push([[74,30,48,80,86],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return f})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return w}));var o=n(2),a=n(6),r=(n(0),n(223)),i=n(224),c=n(233),l=n(234),s=n(229),p=n(230),u=n(55),m=n(51),b=n(54),d={title:"Change Default Map Click Behavior",description:"Geocortex Mobile - Learn how to configure Geocortex Mobile to change the default map click behavior"},f={unversionedId:"mobile/tutorial-change-default-map-click-behavior",id:"mobile/tutorial-change-default-map-click-behavior",isDocsHomePage:!1,title:"Change Default Map Click Behavior",description:"Geocortex Mobile - Learn how to configure Geocortex Mobile to change the default map click behavior",source:"@site/docs/mobile/tutorial-change-default-map-click-behavior.mdx",slug:"/mobile/tutorial-change-default-map-click-behavior",permalink:"/docs/mobile/tutorial-change-default-map-click-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/tutorial-change-default-map-click-behavior.mdx",version:"current",sidebar:"mobile",previous:{title:"Display a Custom Form",permalink:"/docs/mobile/tutorial-display-custom-form"},next:{title:"Implement a Custom Form Element",permalink:"/docs/mobile/tutorial-implement-custom-form-elements"}},h=[{value:"What you&#39;re Building",id:"what-youre-building",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Initial Set up",id:"initial-set-up",children:[]},{value:"Set up a Workflow to Run on Map Click",id:"set-up-a-workflow-to-run-on-map-click",children:[]},{value:"Extend the Workflow to Create a Graphic Buffering the Click Geometry",id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],g={rightToc:h};function w(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Geocortex Mobile comes with default behavior that runs on a map click. The default behavior will identify and display details for results in the nearby area. But what if you want to replace the functionality with your own behavior? This can be accomplished by leveraging ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow")," and editing the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-getting-started"}),"app config"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It's actually possible to configure the Map's ",Object(r.b)("inlineCode",{parentName:"p"},"onClick")," event in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/mobileviewer/designer/"}),"Geocortex Mobile Designer"),", by setting a workflow as the action for the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____0"}),"Maps click event"),". However, the point of this tutorial is to demonstrate the concept of configuring actions using the app config."))),Object(r.b)("h2",{id:"what-youre-building"},"What you're Building"),Object(r.b)("p",null,"We will modify the default map on click behavior to buffer the click geometry by a user provided distance and create a graphic which visualizes this buffer."),Object(r.b)("img",{src:Object(i.a)("img/mobile-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(u.default,{mdxType:"PrereqsLayoutConfigSnippet"}),Object(r.b)("h2",{id:"initial-set-up"},"Initial Set up"),Object(r.b)("p",null,"Start the Geocortex Mobile SDK with the following layout and app JSON. You should see a simple application with one layer, Fire Hydrants, which has a related table Fire Hydrant Surveys."),Object(r.b)("p",null,"Try clicking the map. It should return results for the point you clicked in the results list."),Object(r.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"config",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "map-1",\n            "onClick": [\n                "tasks.identify",\n                "highlights.pulse",\n                "results.display"\n            ],\n            "webMap": "0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "feature-details",\n            "id": "feature-details",\n            "onFeatureShow": "highlights.add-focus",\n            "onFeatureHide": "highlights.remove-focus",\n            "onFeatureDelete": [\n                "highlights.remove-focus",\n                "highlights.remove",\n                "edit.delete-features",\n                "results.hide-details",\n                "results.remove"\n            ]\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureHide": null,\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ],\n            "onFeatureLocate": [\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.pan-to-features",\n                "highlights.pulse"\n            ],\n            "onClear": ["highlights.clear", "highlights.clear-focus"]\n        }\n    ]\n}\n'))),Object(r.b)(l.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout-large.xml"',title:'"app/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    <map config="map-1" slot="main"/>\n    <panel>\n      <results-list config="results" />\n      <feature-details config="feature-details"/>\n      <gxm:update-feature/>\n      <gxm:add-related-feature />\n    </panel>\n  </gxm:taskbar>\n</layout>\n\n')))),Object(r.b)("h2",{id:"set-up-a-workflow-to-run-on-map-click"},"Set up a Workflow to Run on Map Click"),Object(r.b)("p",null,"The first thing we need to do is override the default map click behavior. We can do this by ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/tutorial-change-default-behavior"}),"editing the default behavior")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"<map/>")," component in the app config. The default behavior for the map's ",Object(r.b)("inlineCode",{parentName:"p"},"onClick")," event is a command chain that runs ",Object(r.b)("inlineCode",{parentName:"p"},"tasks.identify")," and then ",Object(r.b)("inlineCode",{parentName:"p"},"highlights.pulse"),", and finally, ",Object(r.b)("inlineCode",{parentName:"p"},"results.display"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n          "$type": "map-extension",\n          "id": "map-1",\n          "onClick": [\n              "tasks.identify",\n              "highlights.pulse",\n              "results.display"\n          ]\n          ...\n        }\n    ]\n}\n')),Object(r.b)("p",null,"First, we are going to replace the command chain with a ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.run")," command that replicates this behavior."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open up ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer")," and create and save a new workflow."),Object(r.b)("li",{parentName:"ol"},'Add an "Alert" activity as a test.'),Object(r.b)("li",{parentName:"ol"},"Copy the ID of the the workflow from the URL")),Object(r.b)(m.default,{mdxType:"WorkflowUrlSnippet"}),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Add the workflow as an app item to your app config.")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "workflow",\n            "id": "map-click-workflow",\n            "title": "Map Click Workflow",\n            "commandArgumentInput": "context",\n            "target": "#taskbar",\n            "portalItem": "<your-workflow-id-here>"\n        },\n        ...\n    ]\n}\n')),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Next, configure the ",Object(r.b)("inlineCode",{parentName:"li"},"onClick")," property of the Map Component in the app config to run the workflow.")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "id": "default",\n            "$type": "map-extension",\n            "onClick": "workflow.run-map-click-workflow",\n            ...\n        }\n    ]\n}\n')),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Run the app and test your workflow. You should see your alert pop up when you try to click on the map.")),Object(r.b)("img",{src:Object(i.a)("img/mobile-custom-map-click-workflow-alert.png"),alt:"Map Click Workflow with Alert"}),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Open up your workflow in the Geocortex Workflow Designer again. The default behavior we just overrode can be recreated with the use of ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____169"}),"RunCommand")," and ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-operation.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____173"}),"RunOperation")," activities. ",Object(r.b)("inlineCode",{parentName:"li"},"tasks.identify")," is an operation, so it needs a RunOperation activity, and ",Object(r.b)("inlineCode",{parentName:"li"},"highlights.pulse")," and ",Object(r.b)("inlineCode",{parentName:"li"},"results.display")," are commands, so they need RunCommand Activities. Chain these three activities together, passing the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input%3FTocPath%3DConfiguration%7CAdd%2520a%2520Workflow%2520to%2520an%2520App%7C_____4"}),"workflow context")," to ",Object(r.b)("inlineCode",{parentName:"li"},"tasks.identify")," and then passing the output of that operation to ",Object(r.b)("inlineCode",{parentName:"li"},"highlights.pulse"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"results.display"),".")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",null,"You can"," ",Object(r.b)("a",{href:Object(i.a)("workflows/mobile-map-click-behavior-recreated.json"),download:"map-click-behavior-recreated.json"},"download this workflow")," ","and then"," ",Object(r.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into the Geocortex Workflow Designer.")))),Object(r.b)("img",{src:Object(i.a)("img/mobile-custom-map-click-workflow-recreated.png"),alt:"Map Click Workflow with Original Operations"}),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Save the workflow and reload the application. Test the map click functionality and ensure it works as it originally did.")),Object(r.b)("h2",{id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry"},"Extend the Workflow to Create a Graphic Buffering the Click Geometry"),Object(r.b)("p",null,'At this point, you can choose to extend the map click behavior with Geocortex Workflow in whatever way is appropriate for your use case. You could execute a different "identify" for external results and add them to the set of results displayed, or zoom the map to a specific orientation and scale, or display a form for the user to fill out with relevant information to that location. For this example, a workflow was created which asks a user for a buffer distance, and creates a graphic showing the buffer around the click location.'),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",null,"You can"," ",Object(r.b)("a",{href:Object(i.a)("workflows/web-map-click-behavior-buffer.json"),download:"map-click-behavior-buffer.json"},"download this buffer geometry workflow")," ","and then"," ",Object(r.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into the Geocortex Workflow Designer.")))),Object(r.b)("img",{src:Object(i.a)("img/mobile-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}),Object(r.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(r.b)(b.default,{mdxType:"RelevantWorkflowSamples"}),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"This pattern of configuring behavior with a workflow can be applied to numerous components. You can use a workflow to control the behavior of the Map, Feature Details, Geolocate, Custom Components, and more. Often, a workflow can be created and used to execute custom behavior instead of requiring the implementation of a custom command or operation."),Object(r.b)(s.a,{mdxType:"UseCaseContainer"},Object(r.b)(p.a,{title:"Geocortex Workflow",description:"Learn more about Geocortex Workflow",link:Object(i.a)("docs/workflow/overview"),mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"Change Default Behavior",description:"Learn more about overriding default behaviors",link:Object(i.a)("docs/mobile/tutorial-change-default-behavior"),mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"SDK Sample that Demonstrates Overriding Default Behaviors",description:"Check out the SDK Sample for overriding default behaviors",link:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/MapAndFeatureCommands",mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"Implement Custom Command or Operation",description:"Implement a custom command or operation with the Mobile SDK",link:Object(i.a)("docs/mobile/tutorial-implement-command-operation"),mdxType:"UseCaseCard"})))}w.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||r;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var o=n(227),a=n(225);function r(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,c=void 0!==i&&i,l=r.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},226:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},227:function(e,t,n){"use strict";var o=n(0),a=n(19);t.a=function(){var e=Object(o.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},228:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(13),i=n(225),c=n(8),l=Object(o.createContext)({collectLink:function(){}}),s=n(224),p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,n,u,m=e.isNavLink,b=e.to,d=e.href,f=e.activeClassName,h=e["data-noBrokenLinkCheck"],g=p(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),w=Object(s.b)().withBaseUrl,v=Object(o.useContext)(l),O=b||d,j=Object(i.a)(O),k=null==O?void 0:O.replace("pathname://",""),y=void 0!==k?function(e){return e.startsWith("/")}(n=k)?w(n):n:void 0,x=Object(o.useRef)(!1),N=m?r.e:r.c,C=c.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!C&&j&&window.docusaurus.prefetch(y),function(){C&&u&&u.disconnect()}}),[y,C,j]);var M=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,D=!y||!j||M;return y&&j&&!M&&!h&&v.collectLink(y),D?a.a.createElement("a",Object.assign({href:y},!j&&{target:"_blank",rel:"noopener noreferrer"},g)):a.a.createElement(N,Object.assign({},g,{onMouseEnter:function(){x.current||(window.docusaurus.preload(y),x.current=!0)},innerRef:function(e){var t,n;C&&e&&j&&(t=e,n=function(){window.docusaurus.prefetch(y)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:y||""},m&&{activeClassName:f}))}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),a=n.n(o),r=n(46),i=n.n(r);function c(e){var t=e.children;return a.a.createElement("div",{className:i.a.root},t)}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(228),a=n(0),r=n.n(a),i=n(226),c=n(47),l=n.n(c);function s(e){var t=e.title,n=e.description,a=e.link;return r.a.createElement("div",{className:Object(i.a)("card-demo",l.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(o.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}},231:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},232:function(e,t,n){"use strict";var o=n(0),a=n(231);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},233:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(232),i=n(226),c=n(48),l=n.n(c),s=37,p=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,m=e.groupId,b=Object(r.a)(),d=b.tabGroupChoices,f=b.setTabGroupChoices,h=Object(o.useState)(c),g=h[0],w=h[1],v=Object(o.useState)(!1),O=v[0],j=v[1];if(null!=m){var k=d[m];null!=k&&k!==g&&u.some((function(e){return e.value===k}))&&w(k)}var y=function(e){w(e),null!=m&&f(m,e)},x=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},C=function(){j(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",C)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),N(e)},onFocus:function(){return y(t)},onClick:function(){y(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},234:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(223)),i={},c={unversionedId:"snippets/workflow-url",id:"snippets/workflow-url",isDocsHomePage:!1,title:"workflow-url",description:"https://apps.geocortex.com/workflow/designer/#workflow=",source:"@site/docs/snippets/workflow-url.mdx",slug:"/snippets/workflow-url",permalink:"/docs/snippets/workflow-url",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/workflow-url.mdx",version:"current"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{class:"alert alert--secondary",role:"alert"},"https://apps.geocortex.com/workflow/designer/#workflow=",Object(r.b)("b",null,"44010fc421dd4659b74fb921e09ba594")),Object(r.b)("br",null))}p.isMDXComponent=!0},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(223)),i={},c={unversionedId:"mobile/snippets/tweak-layout-config",id:"mobile/snippets/tweak-layout-config",isDocsHomePage:!1,title:"tweak-layout-config",description:"If you just need to make a small change to the layout and app config of an existing application, you can download the config and layout files for the application, tweak them, and then re-upload them.",source:"@site/docs/mobile/snippets/tweak-layout-config.mdx",slug:"/mobile/snippets/tweak-layout-config",permalink:"/docs/mobile/snippets/tweak-layout-config",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/tweak-layout-config.mdx",version:"current"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you just need to make a small change to the layout and app config of an existing application, you can ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/configuration-Options.htm#Download-app-config%3FTocPath%3DConfiguration%7CConfiguration%2520Options%7C_____3"}),"download the config and layout files for the application"),", tweak them, and then re-upload them."))))}p.isMDXComponent=!0},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(223)),i={},c={unversionedId:"mobile/snippets/relevant-workflow-samples",id:"mobile/snippets/relevant-workflow-samples",isDocsHomePage:!1,title:"relevant-workflow-samples",description:"The Geocortex Mobile SDK Samples project has a variety of workflow samples:",source:"@site/docs/mobile/snippets/relevant-workflow-samples.mdx",slug:"/mobile/snippets/relevant-workflow-samples",permalink:"/docs/mobile/snippets/relevant-workflow-samples",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/relevant-workflow-samples.mdx",version:"current"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Geocortex Mobile SDK Samples project has a variety of workflow samples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/RunWorkflow"}),"Run a Workflow"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomActivity"}),"Build a Custom Activity"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomFormComponent"}),"Build a Custom Form Element")))))}p.isMDXComponent=!0},55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),r=(n(0),n(223)),i=n(52),c={},l={unversionedId:"mobile/snippets/prereqs-layout-config-editing",id:"mobile/snippets/prereqs-layout-config-editing",isDocsHomePage:!1,title:"prereqs-layout-config-editing",description:"Follow along by setting up the Geocortex Mobile SDK and editing the minimal layout and app config provided.",source:"@site/docs/mobile/snippets/prereqs-layout-config-editing.mdx",slug:"/mobile/snippets/prereqs-layout-config-editing",permalink:"/docs/mobile/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs-layout-config-editing.mdx",version:"current"},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Follow along by setting up the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-overview"}),"Geocortex Mobile SDK")," and editing the minimal layout and app config provided."),Object(r.b)(i.default,{mdxType:"TweakLayoutConfigSnippet"}))}u.isMDXComponent=!0}}]);