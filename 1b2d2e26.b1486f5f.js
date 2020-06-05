(window.webpackJsonp=window.webpackJsonp||[]).push([[18,140],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return l}));var o=n(2),a=n(9),c=(n(0),n(295)),s={},m={id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the Geocortex Web SDK.",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx"},r=[],i={rightToc:r};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Download and setup the ",Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(c.b)("li",{parentName:"ul"},"Check out the ",Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}l.isMDXComponent=!0},173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(2),a=n(9),c=(n(0),n(295)),s=n(302),m=n(301),r=n(300),i=(n(298),n(297),n(128)),l={title:"Using the canExecute Command Hook",description:"Geocortex Web - Learn how to optionally disable a command with the canExecute hook"},u={id:"web/tutorial-command-can-execute",title:"Using the canExecute Command Hook",description:"Geocortex Web - Learn how to optionally disable a command with the canExecute hook",source:"@site/docs/web/tutorial-command-can-execute.mdx",permalink:"/docs/web/tutorial-command-can-execute",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-command-can-execute.mdx",sidebar:"web",previous:{title:"Translate a Component's Text",permalink:"/docs/web/tutorial-internationalization"},next:{title:"Manage Dynamic Data with a Service",permalink:"/docs/web/tutorial-service-dynamic-data"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create an App with an IWTM and a Custom Component",id:"create-an-app-with-an-iwtm-and-a-custom-component",children:[]},{value:"Add a Button to Toggle the <code>canExecute</code> Status",id:"add-a-button-to-toggle-the-canexecute-status",children:[]},{value:"Implement the <code>canExecute</code> Function",id:"implement-the-canexecute-function",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:d};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This article will guide you through how to prevent a custom command from executing through the ",Object(c.b)("inlineCode",{parentName:"p"},"canExecute")," hook."),Object(c.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(c.b)(i.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(c.b)("h2",{id:"create-an-app-with-an-iwtm-and-a-custom-component"},"Create an App with an IWTM and a Custom Component"),Object(c.b)("p",null,"First, let's create an app with an IWTM and a custom component that implements a simple command that displays an alert."),Object(c.b)(m.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"Component",value:"component"},{label:"Component Model",value:"model"},{label:"Component Index",value:"index"},{label:"Registration",value:"registration"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="custom.abc123">\n    <map>\n        <iwtm config="iwtm-config" slot="top-left" />\n        <custom:custom-component margin="3" slot="top-center"/>\n    </map>\n</layout>\n'))),Object(c.b)(r.a,{value:"config",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu",\n            "id": "iwtm-config",\n            "items": [\n                {\n                    "$type": "menu-item",\n                    "id": "command-with-can-execute",\n                    "title": "Command With Can Execute",\n                    "iconId": "info",\n                    "action": "custom.command-with-can-execute"\n                }\n            ],\n            "title": "I want to..."\n        }\n    ]\n}\n'))),Object(c.b)(r.a,{value:"component",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent.tsx"',title:'"src/components/CustomComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@geocortex/web/components";\nimport Button from "@geocortex/web/ui/button";\nimport React from "react";\n\nimport CustomModel from "./CustomModel";\n\nconst CustomComponent = (props: LayoutElementProperties<CustomModel>) => {\n    return (\n        <LayoutElement {...props}>\n            <Button>Placeholder</Button>\n        </LayoutElement>\n    );\n};\n\nexport default CustomComponent;\n'))),Object(c.b)(r.a,{value:"model",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import { ComponentModelBase, serializable } from "@geocortex/web/models";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    private _handles: IHandle[] = [];\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n\n        this._handles.push(\n            this.messages\n                .command("custom.command-with-can-execute")\n                .register(() => {\n                    this.messages.commands.ui.alert.execute({\n                        message: "Executed `custom.command-with-can-execute`",\n                    });\n                    return;\n                })\n        );\n    }\n\n    destroy(): void {\n        super.destroy();\n\n        // Clean up event handlers.\n        this._handles.forEach((h) => h.remove());\n    }\n}\n'))),Object(c.b)(r.a,{value:"index",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/index.ts"',title:'"src/components/index.ts"'}),'export { default } from "./CustomComponent";\nexport { default as CustomModel } from "./CustomModel";\n'))),Object(c.b)(r.a,{value:"registration",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@geocortex/web/config";\nimport { ComponentType } from "react";\n\nimport CustomComponent, { CustomModel } from "./components/CustomComponent";\n\nconst LAYOUT_NAMESPACE = "custom.abc123";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerComponent({\n        name: "custom-component",\n        namespace: LAYOUT_NAMESPACE,\n        getComponentType: () => CustomComponent as ComponentType,\n        itemType: "custom-model",\n        title: "Custom Component",\n    });\n    registry.registerModel({\n        getModelType: () => CustomModel,\n        itemType: "custom-model",\n    });\n\n    registry.registerCommand("custom.command-with-can-execute");\n}\n')))),Object(c.b)("h2",{id:"add-a-button-to-toggle-the-canexecute-status"},"Add a Button to Toggle the ",Object(c.b)("inlineCode",{parentName:"h2"},"canExecute")," Status"),Object(c.b)("p",null,"Next, let's add a button to the custom component that will toggle the ",Object(c.b)("inlineCode",{parentName:"p"},"canExecute")," status of the ",Object(c.b)("inlineCode",{parentName:"p"},"custom.command-with-can-execute")," command."),Object(c.b)(m.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Component Model",value:"model"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"component",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/CustomComponent.tsx"',title:'"src/components/CustomComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@geocortex/web/components";\nimport Button from "@geocortex/web/ui/button";\nimport React from "react";\n\nimport CustomModel from "./CustomModel";\n\nconst CustomComponent = (props: LayoutElementProperties<CustomModel>) => {\n    const { model } = props;\n\n    return (\n        <LayoutElement {...props}>\n            // highlight-next-line\n            <Button onClick={() => model.toggleCanExecute()}>\n                Toggle Can Execute\n            </Button>\n        </LayoutElement>\n    );\n};\n\nexport default CustomComponent;\n'))),Object(c.b)(r.a,{value:"model",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import { ComponentModelBase, serializable } from "@geocortex/web/models";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    private _handles: IHandle[] = [];\n\n    // highlight-start\n    private _canExecuteValue: boolean = false;\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n\n        this._handles.push(\n            this.messages\n                .command("custom.command-with-can-execute")\n                .register(() => {\n                    this.messages.commands.ui.alert.execute({\n                        message: "Executed `custom.command-with-can-execute`",\n                    });\n                    return;\n                })\n        );\n    }\n\n    // highlight-start\n    toggleCanExecute(): void {\n        this._canExecuteValue = !this._canExecuteValue;\n    }\n    // highlight-end\n\n    destroy(): void {\n        super.destroy();\n\n        // Clean up event handlers.\n        this._handles.forEach((h) => h.remove());\n    }\n}\n')))),Object(c.b)("h2",{id:"implement-the-canexecute-function"},"Implement the ",Object(c.b)("inlineCode",{parentName:"h2"},"canExecute")," Function"),Object(c.b)("p",null,"Finally, we need to implement the ",Object(c.b)("inlineCode",{parentName:"p"},"canExecute")," function for the ",Object(c.b)("inlineCode",{parentName:"p"},"custom.command-with-can-execute")," command."),Object(c.b)(m.a,{defaultValue:"model",values:[{label:"Component Model",value:"model"},{label:"UI - Command Disabled",value:"ui-disabled"},{label:"UI - Command Enabled",value:"ui-enabled"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"model",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/CustomModel.ts"',title:'"src/components/CustomModel.ts"'}),'import {\n    ComponentModelBase,\n    serializable,\n} from "@geocortex/web/models";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    private _handles: IHandle[] = [];\n\n    // highlight-start\n    private _canExecuteValue: boolean = false;\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n\n        this._handles.push(\n            this.messages\n                .command("custom.command-with-can-execute")\n                .register(() => {\n                    this.messages.commands.ui.alert.execute({ message: "Executed `custom.command-with-can-execute`"});\n                    return;\n                },\n                // highlight-start\n                () => this._canExecuteValue\n            ))\n                // highlight-end\n        );\n    }\n\n    toggleCanExecute(): void {\n        this._canExecuteValue = !this._canExecuteValue;\n        // highlight-start\n        this.messages\n            .command("custom.command-with-can-execute")\n            .canExecuteChanged.publish();\n        // highlight-end\n    }\n\n    destroy(): void {\n        super.destroy();\n\n        // Clean up event handlers.\n        this._handles.forEach((h) => h.remove());\n    }\n}\n'))),Object(c.b)(r.a,{value:"ui-disabled",mdxType:"TabItem"},Object(c.b)("img",{src:Object(s.a)("img/web-command-can-execute-disabled.png")})),Object(c.b)(r.a,{value:"ui-enabled",mdxType:"TabItem"},Object(c.b)("img",{src:Object(s.a)("img/web-command-can-execute-enabled.png")}))),Object(c.b)("h2",{id:"next-steps"},"Next Steps"),Object(c.b)("p",null,"Check out a ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://vertigis-web-samples.netlify.app/commands-and-operations"}),"live SDK sample")," of a command that has a ",Object(c.b)("inlineCode",{parentName:"p"},"canExecute")," hook."))}b.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),a=n.n(o),c=n(296),s=n.n(c),m=n(125),r=n.n(m);function i(e){var t=e.children;return a.a.createElement("div",{className:s()(r.a.root)},t)}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(304);var o=n(303),a=n(0),c=n.n(a),s=n(296),m=n.n(s),r=n(126),i=n.n(r);function l(e){var t=e.title,n=e.description,a=e.link;return c.a.createElement("div",{className:m()("card-demo",i.a.root)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,t)),c.a.createElement("div",{className:"card__body"},c.a.createElement("p",null,n)),c.a.createElement("div",{className:"card__footer"},c.a.createElement(o.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}},299:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},300:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},301:function(e,t,n){"use strict";n(24),n(19),n(18);var o=n(0),a=n.n(o),c=n(299);var s=function(){return Object(o.useContext)(c.a)},m=n(296),r=n.n(m),i=n(127),l=n.n(i),u=37,d=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,m=e.values,i=e.groupId,p=s(),b=p.tabGroupChoices,h=p.setTabGroupChoices,g=Object(o.useState)(c),x=g[0],C=g[1];if(null!=i){var f=b[i];null!=f&&f!==x&&C(f)}var v=function(e){C(e),null!=i&&h(i,e)},O=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},m.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":x===t,className:r()("tabs__item",l.a.tabItem,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===x}))[0]))}}}]);