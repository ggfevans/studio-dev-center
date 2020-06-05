(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{204:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return g}));var n=a(2),o=a(9),i=(a(0),a(295)),r=a(302),c=a(301),s=a(300),l=a(324),m=a(298),p=a(297),d={title:"Commands and Operations",description:"Geocortex Mobile - Learn about commands and operations"},b={id:"mobile/configuration-commands-operations",title:"Commands and Operations",description:"Geocortex Mobile - Learn about commands and operations",source:"@site/docs/mobile/configuration-commands-operations.mdx",permalink:"/docs/mobile/configuration-commands-operations",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/configuration-commands-operations.mdx",sidebar:"mobile",previous:{title:"Configuring the Theme",permalink:"/docs/mobile/configuration-theme"},next:{title:"Configure Button Click Behavior",permalink:"/docs/mobile/tutorial-configure-button-click"}},u=[{value:"Workflow Command",id:"workflow-command",children:[]},{value:"Configuring Commands and Operations",id:"configuring-commands-and-operations",children:[{value:"Passing Explicit Arguments",id:"passing-explicit-arguments",children:[]},{value:"Passing Implicit Arguments",id:"passing-implicit-arguments",children:[]}]},{value:"Command Chains",id:"command-chains",children:[]},{value:"Example: Configured Map and I Want To Menu",id:"example-configured-map-and-i-want-to-menu",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:u};function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Before learning about commands and operations...")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/key-concepts"}),"Key Concepts"),"."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Commands and operations")," are runnable, independent units of work within Geocortex Mobile. Commands and operations act as global functions which can be\nexecuted from any component or service."),Object(i.b)("p",null,"In Geocortex Mobile, commands and operations are compatible extensions of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/commanding"}),"ICommand interface")," with strongly typed arguments and return values. Operations are implementations of ",Object(i.b)("inlineCode",{parentName:"p"},"ICommand")," that have been extended to have an ",Object(i.b)("inlineCode",{parentName:"p"},"ExecuteAsync")," method, which allows the operation to run asynchronously and return a value. Commands and Operations are registered with the globally available service ",Object(i.b)("inlineCode",{parentName:"p"},"IOperationRegistry"),", in which they can be looked up by their ",Object(i.b)("inlineCode",{parentName:"p"},"name"),". Commands and Operations are grouped by namespaces, such as ",Object(i.b)("inlineCode",{parentName:"p"},"auth")," or ",Object(i.b)("inlineCode",{parentName:"p"},"edit"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"auth.sign-in\nauth.sign-out\nedit.add-feature\nedit.delete-features\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The full list of existing commands and operations available in Geocortex Mobile can be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events"}),"found in the API documentation"),"."))),Object(i.b)("p",null,"Commands and operations are used to power much of Geocortex Mobile's built in behavior and interactions. They can be run through configuration, or through ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-commands-operations"}),"custom services")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-commands-operations"}),"components"),"."),Object(i.b)("p",null,"One thing that makes commands and operations so powerful is that built in components have properties in the app config which take them as values. They power everything from basic components like the IWTM, to advanced functionality like the results list. This allows built-in component's internal behavior to be configured with different commands and operations."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...{\n            "$type": "feature-details",\n            "id": "feature-details",\n            // highlight-next-line\n            "onFeatureShow": "highlights.add-focus",\n            // highlight-next-line\n            "onFeatureHide": "highlights.remove-focus"\n        },\n        {\n            "$type": "results",\n            "id": "results",\n            // highlight-start\n            "onFeatureShow": [\n                "highlights.add",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "userSet": true\n                    }\n                }\n            ],\n            "onFeatureRemove": "highlights.remove",\n            "onAllFeaturesRemoved": [\n                "panel.close-host-panel",\n                "search.clear",\n                "results.clear"\n            ],\n            "onFeatureClick": [\n                "results.display-details",\n                {\n                    "name": "panel.snap-host-panel",\n                    "arguments": {\n                        "snapPosition": "middle"\n                    }\n                },\n                "map.zoom-to-features",\n                "highlights.pulse"\n            ]\n            // highlight-end\n        }\n    ]\n}\n')),Object(i.b)("h2",{id:"workflow-command"},"Workflow Command"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/"}),"Geocortex Workflow")," can allow for the creation of completely customized behavior without writing custom code. Geocortex Mobile has a special command, ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.run"),", which allows you to run workflows anywhere you would run a command or operation. Using workflow, you can take custom behavior in Geocortex Mobile further without having to write custom code."),Object(i.b)("p",null,"Check out this example of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/tutorial-run-workflow-app-config"}),"running a workflow from app config"),"."),Object(i.b)("h2",{id:"configuring-commands-and-operations"},"Configuring Commands and Operations"),Object(i.b)("p",null,"Commands and operations can be used through the app config to customize built in components."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "menu-item",\n            "id": "button-config",\n            "iconId": "zoom-in",\n            "title": "Zoom In",\n            // highlight-next-line\n            "action": "map.zoom-in"\n        }\n        ...\n    ]\n}\n')),Object(i.b)("p",null,"App config properties like ",Object(i.b)("inlineCode",{parentName:"p"},"action")," can accept a singular command/operation or a ",Object(i.b)("strong",{parentName:"p"},"command chain")," ."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations and commands, allowing for complex input dependent behavior."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "menu-item",\n    "id": "zoom",\n    "title": "Zoom to Features",\n    // highlight-next-line\n    "action": ["map.zoom-to-features", "highlights.pulse"]\n}\n')),Object(i.b)("h3",{id:"passing-explicit-arguments"},"Passing Explicit Arguments"),Object(i.b)("p",null,"Commands and operations can be configured with an ",Object(i.b)("inlineCode",{parentName:"p"},"arguments")," property that passes values to the function at execution time."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "menu",\n    "id": "iwtm",\n    "items": [\n        {\n            "title": "Rotate by 45 Degrees",\n            "isEnabled": true,\n            "iconId": "sync",\n            "action": {\n                "name": "map.rotate-by",\n                "arguments": {\n                    "rotation": 45\n                }\n            }\n        }\n    ]\n}\n')),Object(i.b)("p",null,"Each command has typed arguments that will ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-reference#schema-properties"}),"autocomplete in the app.json"),". For example, ",Object(i.b)("inlineCode",{parentName:"p"},"map.rotate-by")," takes a object of type ",Object(i.b)("inlineCode",{parentName:"p"},"MapRotateArgs"),", which has the property ",Object(i.b)("inlineCode",{parentName:"p"},"Rotation")," of type ",Object(i.b)("inlineCode",{parentName:"p"},"double"),". In the app config, the ",Object(i.b)("inlineCode",{parentName:"p"},"Rotation")," property can be camelCased instead of PascalCased."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can find out what arguments a command or operation takes in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events"}),"commands and operations API reference"),"."))),Object(i.b)("h3",{id:"passing-implicit-arguments"},"Passing Implicit Arguments"),Object(i.b)("p",null,"If you do not pass explicit arguments, then implicit arguments will be passed to the command or operation. Implicit arguments come from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context")," that a command or operation is running in, or from a previous operation in the command chain"),Object(i.b)("p",null,"For example, let's look at the configuration for a ",Object(i.b)("inlineCode",{parentName:"p"},"<feature-details>")," component. ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," has been configured as the command that runs ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureShow"),", but it is not passed any arguments explicitly. Instead, the command receives arguments from the ",Object(i.b)("strong",{parentName:"p"},"context")," it is run in."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus"\n}\n')),Object(i.b)("p",null,"In this example, the context is the feature details menu, so ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," will receive an argument with a ",Object(i.b)("inlineCode",{parentName:"p"},"Features")," property, which is the shape of argument it needs."),Object(i.b)("p",null,"Arguments are also passed implicitly if you create a command chain, which runs operations one after the other."),Object(i.b)("h2",{id:"command-chains"},"Command Chains"),Object(i.b)("p",null,"App config properties that accept a command or operation can take a single operation or they can take a ",Object(i.b)("strong",{parentName:"p"},"command chain"),". Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations, allowing for complex chains of behavior."),Object(i.b)("p",null,"For example, here's configuration for the various behaviors of a ",Object(i.b)("inlineCode",{parentName:"p"},"<feature-details>")," component."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus",\n    "onFeatureDelete": [\n        "highlights.remove-focus",\n        "highlights.remove",\n        "edit.delete-features",\n        "results.hide-details",\n        "results.remove"\n    ]\n}\n')),Object(i.b)("p",null,"In this example, when a feature is deleted,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The focus and highlights are removed,"),Object(i.b)("li",{parentName:"ul"},"The feature is deleted from the layer,"),Object(i.b)("li",{parentName:"ul"},"The results details are hidden,"),Object(i.b)("li",{parentName:"ul"},"The feature is removed from the results list.")),Object(i.b)("p",null,"Since these commands and operations are running from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context")," of a ",Object(i.b)("inlineCode",{parentName:"p"},"<feature-details>")," component, the first command or operation will receive the relevant feature as its input. If the property is a command chain, the next step in line will receive one of two possible inputs."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"If the previous step was a command (which doesn't produce output), then the original input is passed on to the next step."),Object(i.b)("li",{parentName:"ol"},"If the previous step was an operation (which produces an output), then the output of that operation is passed onto the next step.")),Object(i.b)("p",null,"In this way, you can run multiple commands in a row that receive a feature as input, as seen in the ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureDelete")," command chain in the example."),Object(i.b)("h2",{id:"example-configured-map-and-i-want-to-menu"},"Example: Configured Map and I Want To Menu"),Object(i.b)(c.a,{defaultValue:"app",values:[{label:"App Config",value:"app"},{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"app",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "demo-map",\n            "onClick": [\n                "tasks.identify",\n                "highlights.add-focus",\n                "highlights.pulse"\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Return to Default Map View",\n                    "isEnabled": true,\n                    "iconId": "zoom_initial",\n                    "action": [\n                        {\n                            "name": "map.zoom-to-initial-viewpoint",\n                            "arguments": {\n                                "maps": "item://map-extension/demo-map"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'))),Object(i.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n  xmlns="https://geocortex.com/layout/v1"\n  xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    <map config="demo-map" slot="main">\n    <stack margin="0.8" slot="top-right" halign="end">\n      <iwtm config="iwtm" />\n    </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n'))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)(l.a,{src:Object(r.a)("video/commands-operations-demo.webm"),mdxType:"DemoVideo"}))),Object(i.b)("p",null,"This example demonstrates two different types of argument passing behavior. The first action in the app config is a command chain defined on the ",Object(i.b)("inlineCode",{parentName:"p"},"onClick")," property of a map. This chain consists of three operations and commands:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"task.identify"),","),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"highlights.add-focus")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"highlights.pulse"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," does not have any named arguments defined, so it will take arguments passed into it from its current ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context"),". Since this chain is run on a map click, the context argument passed in has the shape:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "geometry": "Esri.Point(<map-click-location>)",\n  ... <other props>\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," receives this argument, and since it is an operation, produces an output. Looking at the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events"}),"Commands and Operations Documentation"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," has output with the shape:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "features": [<feature1>, <feature2>, ...],\n  "results": [<Result(feature1)>, <Result(feature2)>, ...],\n  ... <other props>\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," and ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.pulse"),' both take an input object with a "features" property, so the output of ',Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," will work nicely. ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is immediately after ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify"),", so it receives the output of identify. Since ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is a command, it does not produce any output. ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.pulse")," will receive the output of the last operation, ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify"),". In this way, you can pass the output of an operation to multiple commands."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/tutorial-change-default-behavior"}),"Change Default Behavior")," for more ways to override default behavior like a Map's on click event."))),Object(i.b)("p",null,"The second command/operation in this application is a ",Object(i.b)("inlineCode",{parentName:"p"},"map.zoom-to-initial-viewpoint")," command on the I Want To Menu. This command takes a MapExtensionArgs, which is provided as a named argument. The ",Object(i.b)("inlineCode",{parentName:"p"},"maps")," property in the argument references the ",Object(i.b)("inlineCode",{parentName:"p"},"demo-map")," in the config through an ",Object(i.b)("strong",{parentName:"p"},"Item URI"),". Item URIs are a way of referencing other items within the app config. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/configuration-app-config-reference#item-uris-and-resource-uris"}),"Item URIs")," for more details."),Object(i.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(i.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Commands"}),"Commands"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/MapAndFeatureCommands"}),"Map and Feature Commands")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Geocortex Mobile has a large array of built-in command and operations that you can chain to power custom behavior. Custom commands and operations can also be implemented with the SDK."),Object(i.b)(p.a,{mdxType:"UseCaseContainer"},Object(i.b)(m.a,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:Object(r.a)("docs/mobile/api-commands-operations-events"),mdxType:"UseCaseCard"}),Object(i.b)(m.a,{title:"Configure Commands and Operations",description:"Change built-in behavior or add new behavior using app config and layout",link:Object(r.a)("docs/mobile/tutorial-change-default-behavior"),mdxType:"UseCaseCard"}),Object(i.b)(m.a,{title:"Build your own Commands and Operations",description:"Use the SDK to implement custom commands and operations",link:Object(r.a)("docs/mobile/tutorial-implement-command-operation"),mdxType:"UseCaseCard"}),Object(i.b)(m.a,{title:"Learn about Events built into Geocortex Mobile",description:"Learn about the global event infrastructure in Geocortex Mobile",link:Object(r.a)("docs/mobile/sdk-events-reference"),mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},297:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),o=a.n(n),i=a(296),r=a.n(i),c=a(125),s=a.n(c);function l(e){var t=e.children;return o.a.createElement("div",{className:r()(s.a.root)},t)}},298:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(304);var n=a(303),o=a(0),i=a.n(o),r=a(296),c=a.n(r),s=a(126),l=a.n(s);function m(e){var t=e.title,a=e.description,o=e.link;return i.a.createElement("div",{className:c()("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},299:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},300:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}},301:function(e,t,a){"use strict";a(24),a(19),a(18);var n=a(0),o=a.n(n),i=a(299);var r=function(){return Object(n.useContext)(i.a)},c=a(296),s=a.n(c),l=a(127),m=a.n(l),p=37,d=39;t.a=function(e){var t=e.block,a=e.children,i=e.defaultValue,c=e.values,l=e.groupId,b=r(),u=b.tabGroupChoices,h=b.setTabGroupChoices,g=Object(n.useState)(i),f=g[0],j=g[1];if(null!=l){var O=u[l];null!=O&&O!==f&&j(O)}var v=function(e){j(e),null!=l&&h(l,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:s()("tabs__item",m.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},a)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===f}))[0]))}},324:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),o=a.n(n),i=a(150),r=a.n(i);function c(e){var t=e.src;return o.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,className:r.a.video},o.a.createElement("source",{src:t,type:"video/webm"}),"Your browser does not support the video tag.")}}}]);