(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var s=t(2),a=(t(0),t(229));const o={title:"Events Reference",description:"Geocortex Web - Events Reference"},r={unversionedId:"web/sdk-events-reference",id:"web/sdk-events-reference",isDocsHomePage:!1,title:"Events Reference",description:"Geocortex Web - Events Reference",source:"@site/docs/web/sdk-events-reference.mdx",slug:"/web/sdk-events-reference",permalink:"/docs/web/sdk-events-reference",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-events-reference.mdx",version:"current",sidebar:"web",previous:{title:"Events Overview",permalink:"/docs/web/sdk-events-overview"},next:{title:"Commands and Operations",permalink:"/docs/web/sdk-commands-operations"}},i=[{value:"Publishing Events",id:"publishing-events",children:[{value:"Services",id:"services",children:[]},{value:"Component Models",id:"component-models",children:[]},{value:"Components",id:"components",children:[]}]},{value:"Subscribing to Events",id:"subscribing-to-events",children:[{value:"Services",id:"services-1",children:[]},{value:"Component Models",id:"component-models-1",children:[]},{value:"Components",id:"components-1",children:[]}]},{value:"Creating Custom Events",id:"creating-custom-events",children:[{value:"Event Arguments",id:"event-arguments",children:[]}]}],c={rightToc:i};function l({components:e,...n}){return Object(a.b)("wrapper",Object(s.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Events can be published, subscribed, or created by an custom service, component model, or component."),Object(a.b)("h2",{id:"publishing-events"},"Publishing Events"),Object(a.b)("p",null,"Events can be published by calling the ",Object(a.b)("inlineCode",{parentName:"p"},".publish")," method on the event object."),Object(a.b)("h3",{id:"services"},"Services"),Object(a.b)("p",null,"Events are accessed in services through the ",Object(a.b)("inlineCode",{parentName:"p"},"messages")," property."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"export default class CustomService extends ServiceBase {\n    customIdentify() {\n        // ... run a custom identify here.\n        this.messages.events.tasks.identified.publish(someFeatures);\n    }\n}\n")),Object(a.b)("h3",{id:"component-models"},"Component Models"),Object(a.b)("p",null,"Events are accessed in component models through the ",Object(a.b)("inlineCode",{parentName:"p"},"messages")," property."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"export default class ExampleComponentModel extends ComponentModelBase {\n    customIdentify() {\n        // ... run a custom identify here.\n        this.messages.events.tasks.identified.publish(someFeatures);\n    }\n}\n")),Object(a.b)("h3",{id:"components"},"Components"),Object(a.b)("p",null,"Events in components are accessed through the ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/web/sdk-components-ui-context#accessing-the-uicontext"}),"UIContext"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-tsx"}),"export default function ExampleComponent(\n    props: LayoutElementProperties<ExampleComponentModel>\n) {\n    const { events } = useContext(UIContext);\n\n    const customIdentify = () => {\n        // ... run a custom identify here.\n        this.messages.events.tasks.identified.publish(someFeatures);\n    };\n\n    return (\n        <LayoutElement {...props}>\n            <p>Hello World</p>\n        </LayoutElement>\n    );\n}\n")),Object(a.b)("h2",{id:"subscribing-to-events"},"Subscribing to Events"),Object(a.b)("p",null,"Events can be subscribed to by calling the ",Object(a.b)("inlineCode",{parentName:"p"},".subscribe")," method on the event object."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(s.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(s.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"It is vital that the event handles are cleaned up when the object is cleaned up, otherwise dangling references can occur."))),Object(a.b)("h3",{id:"services-1"},"Services"),Object(a.b)("p",null,"Events are accessed in services through the ",Object(a.b)("inlineCode",{parentName:"p"},"messages")," property."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"export default class CustomService extends ServiceBase {\n    handles: IHandle[] = [];\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n        this.handles.push(\n            this.messages.events.ui.activated.subscribe((id: string) => {\n                console.log(`Component '${id}' activated.`);\n            })\n        );\n    }\n\n    protected async _onDestroy(): Promise<void> {\n        await super._onDestroy();\n        this.handles.forEach((handle) => handle.remove());\n    }\n}\n")),Object(a.b)("h3",{id:"component-models-1"},"Component Models"),Object(a.b)("p",null,"Events are accessed in component models through the ",Object(a.b)("inlineCode",{parentName:"p"},"messages")," property."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"export default class ExampleComponentModel extends ComponentModelBase {\n    handles: IHandle[] = [];\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n        this.handles.push(\n            this.messages.events.ui.activated.subscribe((id: string) => {\n                console.log(`Component '${id}' activated.`);\n            })\n        );\n    }\n\n    protected async _onDestroy(): Promise<void> {\n        await super._onDestroy();\n        this.handles.forEach((handle) => handle.remove());\n    }\n}\n")),Object(a.b)("h3",{id:"components-1"},"Components"),Object(a.b)("p",null,"Events in components are accessed through the ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/web/sdk-components-ui-context#accessing-the-uicontext"}),"UIContext"),"."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(s.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(s.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you need to subscribe to events in a component, it's best practice to use the ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/web/sdk-components-hooks"}),"component hooks")," instead of a ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),", as the component hooks will automatically clean up the event handle."))),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-tsx"}),"export default function ExampleComponent(\n    props: LayoutElementProperties<ExampleComponentModel>\n) {\n    const { events } = useContext(UIContext);\n\n    useSubscribe(events.ui.activated, (id: string) => {\n        console.log(`Component '${id}' activated.`);\n    });\n\n    return (\n        <LayoutElement {...props}>\n            <p>Hello World</p>\n        </LayoutElement>\n    );\n}\n")),Object(a.b)("h2",{id:"creating-custom-events"},"Creating Custom Events"),Object(a.b)("p",null,"Creating custom events is as simple as referencing the custom event by name and publishing or subscribing to it. This is because the logic of creating an event is abstracted away; if an event is referenced in a publish or subscribe call that doesn't exist yet, it will be automatically created."),Object(a.b)("p",null,"When the service calls the ",Object(a.b)("inlineCode",{parentName:"p"},'this.messages.events("my.custom-event")'),", this creates the event if it has not already been created. It can then be immediately subscribed to. Likewise, if the event has not been created, it will be when ",Object(a.b)("inlineCode",{parentName:"p"},'this.messages.event<string>("my-custom-event").publish(...)')," is called."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),'export default class CustomService extends ServiceBase {\n    handles: IHandle[] = [];\n\n    publishCustomEvent() {\n        // highlight-next-line\n        this.messages.event<string>("my-custom-event").publish("some argument");\n    }\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n        this.handles.push(\n            // highlight-next-line\n            this.messages\n                .event<string>("my-custom-event")\n                .subscribe((someArg: string) => {\n                    console.log(`Event published with arg: \'${someArg}\'`);\n                })\n        );\n    }\n\n    protected async _onDestroy(): Promise<void> {\n        await super._onDestroy();\n        this.handles.forEach((handle) => handle.remove());\n    }\n}\n')),Object(a.b)("h3",{id:"event-arguments"},"Event Arguments"),Object(a.b)("p",null,"Events optionally take a type argument, which represents the object associated with the event consumed by the subscriber. This can be a simple or complex object."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),'this.messages\n    .event<string>("my-custom-event")\n    .publish("Some String Arg")\n\nthis.messages\n    .event<string>("my-custom-event")\n    .subscribe((someArg: string) => { ... })\n\nthis.messages\n    .event<CustomType>("another-custom-event")\n    .publish(new CustomType("param"))\n\n')))}l.isMDXComponent=!0},229:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var s=t(0),a=t.n(s);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(t),m=s,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return t?a.a.createElement(u,i(i({ref:n},l),{},{components:t})):a.a.createElement(u,i({ref:n},l))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<o;l++)r[l]=t[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);