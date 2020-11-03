(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return h}));var a=n(2),o=(n(0),n(229)),i=n(230),r=n(239),c=n(240),s=n(244),l=n(236),p=n(235);const m={title:"Commands and Operations",description:"Geocortex Mobile - Learn about commands and operations"},u={unversionedId:"mobile/configuration-commands-operations",id:"mobile/configuration-commands-operations",isDocsHomePage:!1,title:"Commands and Operations",description:"Geocortex Mobile - Learn about commands and operations",source:"@site/docs/mobile/configuration-commands-operations.mdx",slug:"/mobile/configuration-commands-operations",permalink:"/docs/mobile/configuration-commands-operations",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/configuration-commands-operations.mdx",version:"current",sidebar:"mobile",previous:{title:"Configuring the Theme",permalink:"/docs/mobile/configuration-theme"},next:{title:"Configure Button Click Behavior",permalink:"/docs/mobile/tutorial-configure-button-click"}},d=[{value:"Workflow Command",id:"workflow-command",children:[]},{value:"Configuring Commands and Operations",id:"configuring-commands-and-operations",children:[{value:"Passing Explicit Arguments",id:"passing-explicit-arguments",children:[]},{value:"Passing Implicit Arguments",id:"passing-implicit-arguments",children:[]}]},{value:"Command Chains",id:"command-chains",children:[]},{value:"Example: Configured Map and I Want To Menu",id:"example-configured-map-and-i-want-to-menu",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:d};function h({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Before learning about commands and operations...")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/key-concepts"}),"Key Concepts"),"."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Commands and operations")," are runnable, independent units of work within Geocortex Mobile. Commands and operations act as global functions which can be\nexecuted from any component or service."),Object(o.b)("p",null,"In Geocortex Mobile, commands and operations are compatible extensions of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/commanding"}),"ICommand interface")," with strongly typed arguments and return values. Operations are implementations of ",Object(o.b)("inlineCode",{parentName:"p"},"ICommand")," that have been extended to have an ",Object(o.b)("inlineCode",{parentName:"p"},"ExecuteAsync")," method, which allows the operation to run asynchronously and return a value. Commands and Operations are registered with the globally available service ",Object(o.b)("inlineCode",{parentName:"p"},"IOperationRegistry"),", in which they can be looked up by their ",Object(o.b)("inlineCode",{parentName:"p"},"name"),". Commands and Operations are grouped by namespaces, such as ",Object(o.b)("inlineCode",{parentName:"p"},"auth")," or ",Object(o.b)("inlineCode",{parentName:"p"},"edit"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"auth.sign-in\nauth.sign-out\nedit.add-feature\nedit.delete-features\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The full list of existing commands and operations available in Geocortex Mobile can be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events"}),"found in the API documentation"),"."))),Object(o.b)("p",null,"Commands and operations are used to power much of Geocortex Mobile's built in behavior and interactions. They can be run through configuration, or through ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-commands-operations"}),"custom services")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-commands-operations"}),"components"),"."),Object(o.b)("p",null,"One thing that makes commands and operations so powerful is that built in components have properties in the app config which take them as values. They power everything from basic components like the IWTM, to advanced functionality like the results list. This allows built-in component's internal behavior to be configured with different commands and operations."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...{\n            "$type": "feature-details",\n            "id": "feature-details",\n            // highlight-next-line\n            "onFeatureShow": "highlights.add-focus",\n            // highlight-next-line\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            // highlight-start\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n            // highlight-end\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"workflow-command"},"Workflow Command"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/"}),"Geocortex Workflow")," can allow for the creation of completely customized behavior without writing custom code. Geocortex Mobile has a special command, ",Object(o.b)("inlineCode",{parentName:"p"},"workflow.run"),", which allows you to run workflows anywhere you would run a command or operation. Using workflow, you can take custom behavior in Geocortex Mobile further without having to write custom code."),Object(o.b)("p",null,"Check out this example of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/tutorial-run-workflow-app-config"}),"running a workflow from app config"),"."),Object(o.b)("h2",{id:"configuring-commands-and-operations"},"Configuring Commands and Operations"),Object(o.b)("p",null,"Commands and operations can be used through the app config to customize built in components."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "menu-item",\n            "id": "button-config",\n            "iconId": "zoom-in",\n            "title": "Zoom In",\n            // highlight-next-line\n            "action": "map.zoom-in"\n        }\n        ...\n    ]\n}\n')),Object(o.b)("p",null,"App config properties like ",Object(o.b)("inlineCode",{parentName:"p"},"action")," can accept a singular command/operation or a ",Object(o.b)("strong",{parentName:"p"},"command chain")," ."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations and commands, allowing for complex input dependent behavior."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "menu-item",\n    "id": "zoom",\n    "title": "Zoom to Features",\n    // highlight-next-line\n    "action": ["map.zoom-to-features", "highlights.pulse"]\n}\n')),Object(o.b)("h3",{id:"passing-explicit-arguments"},"Passing Explicit Arguments"),Object(o.b)("p",null,"Commands and operations can be configured with an ",Object(o.b)("inlineCode",{parentName:"p"},"arguments")," property that passes values to the function at execution time."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "menu",\n    "id": "iwtm",\n    "items": [\n        {\n            "title": "Rotate by 45 Degrees",\n            "isEnabled": true,\n            "iconId": "sync",\n            "action": {\n                "name": "map.rotate-by",\n                "arguments": {\n                    "rotation": 45\n                }\n            }\n        }\n    ]\n}\n')),Object(o.b)("p",null,"Each command has typed arguments that will ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-reference#schema-properties"}),"autocomplete in the app.json"),". For example, ",Object(o.b)("inlineCode",{parentName:"p"},"map.rotate-by")," takes a object of type ",Object(o.b)("inlineCode",{parentName:"p"},"MapRotateArgs"),", which has the property ",Object(o.b)("inlineCode",{parentName:"p"},"Rotation")," of type ",Object(o.b)("inlineCode",{parentName:"p"},"double"),". In the app config, the ",Object(o.b)("inlineCode",{parentName:"p"},"Rotation")," property can be camelCased instead of PascalCased."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can find out what arguments a command or operation takes in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events"}),"commands and operations API reference"),"."))),Object(o.b)("h3",{id:"passing-implicit-arguments"},"Passing Implicit Arguments"),Object(o.b)("p",null,"If you do not pass explicit arguments, then implicit arguments will be passed to the command or operation. Implicit arguments come from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context")," that a command or operation is running in, or from a previous operation in the command chain"),Object(o.b)("p",null,"For example, let's look at the configuration for a ",Object(o.b)("inlineCode",{parentName:"p"},"<feature-details>")," component. ",Object(o.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," has been configured as the command that runs ",Object(o.b)("inlineCode",{parentName:"p"},"onFeatureShow"),", but it is not passed any arguments explicitly. Instead, the command receives arguments from the ",Object(o.b)("strong",{parentName:"p"},"context")," it is run in."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus"\n}\n')),Object(o.b)("p",null,"In this example, the context is the feature details menu, so ",Object(o.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," will receive an argument with a ",Object(o.b)("inlineCode",{parentName:"p"},"Features")," property, which is the shape of argument it needs."),Object(o.b)("p",null,"Arguments are also passed implicitly if you create a command chain, which runs operations one after the other."),Object(o.b)("h2",{id:"command-chains"},"Command Chains"),Object(o.b)("p",null,"App config properties that accept a command or operation can take a single operation or they can take a ",Object(o.b)("strong",{parentName:"p"},"command chain"),". Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations, allowing for complex chains of behavior."),Object(o.b)("p",null,"For example, here's configuration for the various behaviors of a ",Object(o.b)("inlineCode",{parentName:"p"},"<feature-details>")," component."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus",\n    "onFeatureDelete": [\n        "highlights.remove-focus",\n        "highlights.remove",\n        "edit.delete-features",\n        "results.hide-details",\n        "results.remove"\n    ]\n}\n')),Object(o.b)("p",null,"In this example, when a feature is deleted,"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The focus and highlights are removed,"),Object(o.b)("li",{parentName:"ul"},"The feature is deleted from the layer,"),Object(o.b)("li",{parentName:"ul"},"The results details are hidden,"),Object(o.b)("li",{parentName:"ul"},"The feature is removed from the results list.")),Object(o.b)("p",null,"Since these commands and operations are running from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context")," of a ",Object(o.b)("inlineCode",{parentName:"p"},"<feature-details>")," component, the first command or operation will receive the relevant feature as its input. If the property is a command chain, the next step in line will receive one of two possible inputs."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If the previous step was a command (which doesn't produce output), then the original input is passed on to the next step."),Object(o.b)("li",{parentName:"ol"},"If the previous step was an operation (which produces an output), then the output of that operation is passed onto the next step.")),Object(o.b)("p",null,"In this way, you can run multiple commands in a row that receive a feature as input, as seen in the ",Object(o.b)("inlineCode",{parentName:"p"},"onFeatureDelete")," command chain in the example."),Object(o.b)("h2",{id:"example-configured-map-and-i-want-to-menu"},"Example: Configured Map and I Want To Menu"),Object(o.b)(r.a,{defaultValue:"app",values:[{label:"App Config",value:"app"},{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"app",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "demo-map",\n            "onClick": [\n                "tasks.identify",\n                "highlights.add-focus",\n                "highlights.pulse"\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Return to Default Map View",\n                    "isEnabled": true,\n                    "iconId": "zoom_initial",\n                    "action": [\n                        {\n                            "name": "map.zoom-to-initial-viewpoint",\n                            "arguments": {\n                                "maps": "item://map-extension/demo-map"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'))),Object(o.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n  xmlns="https://geocortex.com/layout/v1"\n  xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerSpec/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    <map config="demo-map" slot="main">\n    <stack margin="0.8" slot="top-right" halign="end">\n      <iwtm config="iwtm" />\n    </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n'))),Object(o.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(o.b)(s.a,{src:Object(i.a)("video/commands-operations-demo.webm"),mdxType:"DemoVideo"}))),Object(o.b)("p",null,"This example demonstrates two different types of argument passing behavior. The first action in the app config is a command chain defined on the ",Object(o.b)("inlineCode",{parentName:"p"},"onClick")," property of a map. This chain consists of three operations and commands:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"task.identify"),","),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"highlights.add-focus")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"highlights.pulse"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tasks.identify")," does not have any named arguments defined, so it will take arguments passed into it from its current ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context"),". Since this chain is run on a map click, the context argument passed in has the shape:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "geometry": "Esri.Point(<map-click-location>)",\n  ... <other props>\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tasks.identify")," receives this argument, and since it is an operation, produces an output. Looking at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events"}),"Commands and Operations Documentation"),", ",Object(o.b)("inlineCode",{parentName:"p"},"tasks.identify")," has output with the shape:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "features": [<feature1>, <feature2>, ...],\n  "results": [<Result(feature1)>, <Result(feature2)>, ...],\n  ... <other props>\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," and ",Object(o.b)("inlineCode",{parentName:"p"},"highlights.pulse"),' both take an input object with a "features" property, so the output of ',Object(o.b)("inlineCode",{parentName:"p"},"tasks.identify")," will work nicely. ",Object(o.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is immediately after ",Object(o.b)("inlineCode",{parentName:"p"},"tasks.identify"),", so it receives the output of identify. Since ",Object(o.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is a command, it does not produce any output. ",Object(o.b)("inlineCode",{parentName:"p"},"highlights.pulse")," will receive the output of the last operation, ",Object(o.b)("inlineCode",{parentName:"p"},"tasks.identify"),". In this way, you can pass the output of an operation to multiple commands."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/tutorial-change-default-behavior"}),"Change Default Behavior")," for more ways to override default behavior like a Map's on click event."))),Object(o.b)("p",null,"The second command/operation in this application is a ",Object(o.b)("inlineCode",{parentName:"p"},"map.zoom-to-initial-viewpoint")," command on the I Want To Menu. This command takes a MapExtensionArgs, which is provided as a named argument. The ",Object(o.b)("inlineCode",{parentName:"p"},"maps")," property in the argument references the ",Object(o.b)("inlineCode",{parentName:"p"},"demo-map")," in the config through an ",Object(o.b)("strong",{parentName:"p"},"Item URI"),". Item URIs are a way of referencing other items within the app config. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-reference#item-uris-and-resource-uris"}),"Item URIs")," for more details."),Object(o.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(o.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Commands"}),"Commands"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/MapAndFeatureCommands"}),"Map and Feature Commands")))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Geocortex Mobile has a large array of built-in command and operations that you can chain to power custom behavior. Custom commands and operations can also be implemented with the SDK."),Object(o.b)(p.a,{mdxType:"UseCaseContainer"},Object(o.b)(l.a,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:Object(i.a)("docs/mobile/api-commands-operations-events"),mdxType:"UseCaseCard"}),Object(o.b)(l.a,{title:"Configure Commands and Operations",description:"Change built-in behavior or add new behavior using app config and layout",link:Object(i.a)("docs/mobile/tutorial-change-default-behavior"),mdxType:"UseCaseCard"}),Object(o.b)(l.a,{title:"Build your own Commands and Operations",description:"Use the SDK to implement custom commands and operations",link:Object(i.a)("docs/mobile/tutorial-implement-command-operation"),mdxType:"UseCaseCard"}),Object(o.b)(l.a,{title:"Learn about Events built into Geocortex Mobile",description:"Learn about the global event infrastructure in Geocortex Mobile",link:Object(i.a)("docs/mobile/sdk-events-reference"),mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(r,".").concat(d)]||m[d]||u[d]||i;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},230:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(233),o=n(231);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},231:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},232:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},233:function(e,t,n){"use strict";var a=n(0),o=n(19);t.a=function(){const e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},234:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(13),r=n(231),c=n(8);const s=Object(a.createContext)({collectLink:()=>{}});var l=n(230),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:m,href:u,activeClassName:d,"data-noBrokenLinkCheck":b}=e,h=p(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:f}=Object(l.b)(),g=Object(a.useContext)(s),O=m||u,j=Object(r.a)(O),v=null==O?void 0:O.replace("pathname://",""),w=void 0!==v?(e=>e.startsWith("/"))(y=v)?f(y):y:void 0;var y;const N=Object(a.useRef)(!1),x=n?i.e:i.c,C=c.a.canUseIntersectionObserver;let k;Object(a.useEffect)(()=>(!C&&j&&window.docusaurus.prefetch(w),()=>{C&&k&&k.disconnect()}),[w,C,j]);const E=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,M=!w||!j||E;return w&&j&&!E&&!b&&g.collectLink(w),M?o.a.createElement("a",Object.assign({href:w},!j&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(x,Object.assign({},h,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(w),N.current=!0)},innerRef:e=>{var t,n;C&&e&&j&&(t=e,n=()=>{window.docusaurus.prefetch(w)},k=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())})}),k.observe(t))},to:w||""},n&&{activeClassName:d}))}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),i=n(46),r=n.n(i);function c({children:e}){return o.a.createElement("div",{className:r.a.root},e)}},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(234),o=n(0),i=n.n(o),r=n(232),c=n(47),s=n.n(c);function l({title:e,description:t,link:n}){return i.a.createElement("div",{className:Object(r.a)("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,t)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},237:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},238:function(e,t,n){"use strict";var a=n(0),o=n(237);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},239:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(238),r=n(232),c=n(48),s=n.n(c);const l=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:m,groupId:u}=e,{tabGroupChoices:d,setTabGroupChoices:b}=Object(i.a)(),[h,f]=Object(a.useState)(c),[g,O]=Object(a.useState)(!1);if(null!=u){const e=d[u];null!=e&&e!==h&&m.some(t=>t.value===e)&&f(e)}const j=e=>{f(e),null!=u&&b(u,e)},v=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},y=()=>{O(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",y)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},m.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),style:g?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),w(e)},onFocus:()=>j(e),onClick:()=>{j(e),O(!1)},onPointerDown:()=>O(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},240:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),i=n(74),r=n.n(i);function c({src:e}){return o.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,className:r.a.video},o.a.createElement("source",{src:e,type:"video/webm"}),"Your browser does not support the video tag.")}}}]);