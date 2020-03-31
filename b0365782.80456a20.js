/*! For license information please see b0365782.80456a20.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{184:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return f})),t.d(n,"default",(function(){return d}));var o=t(1),i=t(9),a=(t(0),t(210)),r=t(219),c=t(220),s=t(221),p=t(216),l=t(217),u={title:"App Config for a Component",description:"Geocortex Mobile - Learn how to make a component participate in app config."},m={id:"mobile/implement-component-participate-app-config",title:"App Config for a Component",description:"Geocortex Mobile - Learn how to make a component participate in app config.",source:"@site/docs/mobile/implement-component-participate-app-config.mdx",permalink:"/dev-center/docs/mobile/implement-component-participate-app-config",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/implement-component-participate-app-config.mdx",sidebar:"mobile",previous:{title:"Custom Component with a Visual Interface",permalink:"/dev-center/docs/mobile/implement-component-with-ui"},next:{title:"Custom Service",permalink:"/dev-center/docs/mobile/implement-service"}},f=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a Skeleton App Config Definition",id:"create-a-skeleton-app-config-definition",children:[]},{value:"Consume the Configuration in the Component",id:"consume-the-configuration-in-the-component",children:[]},{value:"Define Configuration Values in the app.json",id:"define-configuration-values-in-the-appjson",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:f};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A component can optionally participate in the global app config. This allows multiple instances of the component to be configured in different ways, or for component behaviour to be changed without having to edit custom code."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Complete the previous use case, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-component-with-ui"}),"Implement a Custom Component"),". This article will extend that component to consume custom app config."),Object(a.b)("h2",{id:"create-a-skeleton-app-config-definition"},"Create a Skeleton App Config Definition"),Object(a.b)("p",null,"Create a new file ",Object(a.b)("inlineCode",{parentName:"p"},"HarmlessComponentConfiguration.cs"),". This class defines a new app item type ",Object(a.b)("inlineCode",{parentName:"p"},"harmless-component-config"),". This app item type will be used as configuration for the ",Object(a.b)("inlineCode",{parentName:"p"},"HarmlessComponent"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using App1.Configuration;\nusing Geocortex.API;\nusing Geocortex.Mobile.Infrastructure.App;\nusing System;\n\n[assembly: AppItem(HarmlessComponentConfiguration.ConfigItemtype, typeof(HarmlessComponentConfiguration))]\nnamespace App1.Configuration\n{\n    public class HarmlessComponentConfiguration : VisualAppItem\n    {\n        public const string ConfigItemtype = "harmless-component-config";\n\n        public string ConfigTitle { get; private set; }\n\n        public string ConfigDescription { get; private set; }\n\n        public HarmlessComponentConfiguration()\n            : this(Guid.NewGuid().ToString())\n        {\n        }\n\n        public HarmlessComponentConfiguration(string id)\n            : this(new Properties { ["id"] = id })\n        {\n        }\n\n        public HarmlessComponentConfiguration(Properties properties) :\n            base(properties, ConfigItemtype)\n        {\n            // properties is an object corresponding to the config defined in the app.json\n            if (properties.TryGetValue("title", out var title))\n            {\n                ConfigTitle = title as string ?? "Default Title";\n            }\n\n            if (properties.TryGetValue("description", out var text))\n            {\n                ConfigDescription = text as string ?? "Default description.";\n            }\n        }\n\n        public override object CreateDefault()\n        {\n            return new HarmlessComponentConfiguration();\n        }\n    }\n}\n')),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The two key components of this snippet are the ",Object(a.b)("inlineCode",{parentName:"p"},"[assembly: AppItem(...)]")," tag and the class extension ",Object(a.b)("inlineCode",{parentName:"p"},"HarmlessComponentConfiguration : VisualAppItem"),". These two pieces register the configuration with Geocortex Mobile and autofac."))),Object(a.b)("h2",{id:"consume-the-configuration-in-the-component"},"Consume the Configuration in the Component"),Object(a.b)("p",null,"Components that consume configuration should extend ",Object(a.b)("inlineCode",{parentName:"p"},"AppItemComponentBase<ConfigurationClassType>"),". This forces them to have a constructor which takes in an ",Object(a.b)("inlineCode",{parentName:"p"},"IAppItem")," resolver for the specific configuration type. This resolver can then be called in the ",Object(a.b)("inlineCode",{parentName:"p"},"DoInitializeAsync")," method to retrieve the app config values. They should also register with autofac using the ",Object(a.b)("inlineCode",{parentName:"p"},"AppItemComponent")," assembly attribute."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using App1;\nusing App1.Components;\nusing App1.Configuration;\nusing Geocortex.Mobile.Composition.Layout;\nusing Geocortex.Mobile.Infrastructure.App;\nusing Geocortex.Mobile.Infrastructure.Layout;\nusing System.Threading.Tasks;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: AppItemComponent(typeof(HarmlessComponent), "harmless-component", HarmlessComponentConfiguration.ConfigItemtype, XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class HarmlessComponent : AppItemComponentBase<HarmlessComponentConfiguration>\n    {\n        private HarmlessComponentViewModel _viewModel;\n\n        IAppItem<HarmlessComponentConfiguration> _appItemResolver;\n\n        public HarmlessComponent(IAppItem<HarmlessComponentConfiguration> itemResolver)\n            : base(itemResolver)\n        {\n            _appItemResolver = itemResolver;\n            _viewModel = new HarmlessComponentViewModel();\n        }\n\n        protected override VisualElement Create(XNode node)\n        {\n            return new HarmlessComponentView()\n            {\n                BindingContext = _viewModel\n            };\n        }\n\n        protected override async Task DoInitializeAsync()\n        {\n            var item = await _appItemResolver.ResolveAsync();\n            _viewModel.Title = item.ConfigTitle;\n            _viewModel.Description = item.ConfigDescription;\n        }\n    }\n}\n')),Object(a.b)("h2",{id:"define-configuration-values-in-the-appjson"},"Define Configuration Values in the app.json"),Object(a.b)("p",null,"At this point, the component is hooked up to configuration, and configuration values can be defined and consumed."),Object(a.b)("p",null,"Configuration can be defined in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start#editing-the-layout-and-app-config"}),"app json")," and linked to the component through the ",Object(a.b)("inlineCode",{parentName:"p"},"config")," attribute in layout, just like any other component."),Object(a.b)(c.a,{defaultValue:"layout",values:[{label:"layout.xml",value:"layout"},{label:"app.json",value:"json"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd"\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        \x3c!--Taskbar / custom component--\x3e\n        <panel>\n            <custom:harmless-component icon="warning" config="harmless-component-config"/>\n        </panel>\n    </gxm:taskbar>\n</layout>\n'))),Object(a.b)(s.a,{value:"json",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "harmless-component-config",\n            "id": "harmless-component-config",\n            "title": "Title from Config",\n            "description": "This description came from config."\n        },\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        }\n    ]\n}\n'))),Object(a.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("img",{src:Object(r.a)("img/custom-configuration-final.png")}))),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)("p",null,"You've now created a custom component which consumes configuration values from the ",Object(a.b)("inlineCode",{parentName:"p"},"app.json"),". Using configuration in this manner allows you to make flexible, resuable components for your application."),Object(a.b)(l.a,{mdxType:"UseCaseContainer"},Object(a.b)(p.a,{title:"Check out the App Config SDK Sample",description:"Checkout the app config SDK sample",link:"https://github.com/mobile-sdk-samples/samples/app-config",mdxType:"UseCaseCard"}),Object(a.b)(p.a,{title:"Learn how to Implement a Custom Service",description:"Move on to learning how to implement a custom service.",link:"implement-service",mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},210:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,b=u["".concat(r,".").concat(f)]||u[f]||m[f]||a;return t?i.a.createElement(b,c({ref:n},p,{components:t})):i.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var p=2;p<a;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},211:function(e,n,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var r=i.apply(null,o);r&&e.push(r)}else if("object"===a)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(n,[]))||(e.exports=o)}()},212:function(e,n,t){"use strict";var o=t(1),i=t(0),a=t.n(i),r=t(36),c=t(213),s=t(24),p=t.n(s);n.a=function(e){var n,t=e.to,s=e.href,l=t||s,u=Object(c.a)(l),m=Object(i.useRef)(!1),f=p.a.canUseIntersectionObserver;return Object(i.useEffect)((function(){return!f&&u&&window.docusaurus.prefetch(l),function(){f&&n&&n.disconnect()}}),[l,f,u]),l&&u?a.a.createElement(r.b,Object(o.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(l),m.current=!0)},innerRef:function(e){var t,o;f&&e&&u&&(t=e,o=function(){window.docusaurus.prefetch(l)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),o())}))}))).observe(t))},to:l})):a.a.createElement("a",Object(o.a)({},e,{href:l}))}},213:function(e,n,t){"use strict";function o(e){return/^\/(?!\/)/.test(e)}t.d(n,"a",(function(){return o}))},214:function(e,n,t){"use strict";t(215)("link",(function(e){return function(n){return e(this,"a","href",n)}}))},215:function(e,n,t){var o=t(17),i=t(18),a=t(23),r=/"/g,c=function(e,n,t,o){var i=String(a(e)),c="<"+n;return""!==t&&(c+=" "+t+'="'+String(o).replace(r,"&quot;")+'"'),c+">"+i+"</"+n+">"};e.exports=function(e,n){var t={};t[e]=n(c),o(o.P+o.F*i((function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",t)}},216:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));t(214);var o=t(212),i=t(0),a=t.n(i),r=t(211),c=t.n(r),s=t(125),p=t.n(s);function l(e){var n=e.title,t=e.description,i=e.link;return a.a.createElement("div",{className:c()("card-demo",p.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,n)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,t)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(o.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}},217:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var o=t(0),i=t.n(o),a=t(211),r=t.n(a),c=t(126),s=t.n(c);function p(e){var n=e.children;return i.a.createElement("div",{className:r()(s.a.root)},n)}},218:function(e,n,t){"use strict";var o=t(0),i=t(50);n.a=function(){return Object(o.useContext)(i.a)}},219:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t(222);var o=t(218);function i(e){var n=(Object(o.a)().siteConfig||{}).baseUrl,t=void 0===n?"/":n;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?t+e.slice(1):t+e}},220:function(e,n,t){"use strict";t(25),t(19),t(20);var o=t(0),i=t.n(o),a=t(211),r=t.n(a),c=t(130),s=t.n(c),p=37,l=39;n.a=function(e){var n=e.block,t=e.children,a=e.defaultValue,c=e.values,u=Object(o.useState)(a),m=u[0],f=u[1],b=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":n})},c.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===n,className:r()("tab-item",s.a.tabItem,{"tab-item--active":m===n}),key:n,ref:function(e){return b.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case l:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case p:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(b,e.target,e)},onFocus:function(){return f(n)},onClick:function(){return f(n)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(t).filter((function(e){return e.props.value===m}))[0]))}},221:function(e,n,t){"use strict";var o=t(0),i=t.n(o);n.a=function(e){return i.a.createElement("div",null,e.children)}},222:function(e,n,t){"use strict";var o=t(17),i=t(37),a=t(223),r="".startsWith;o(o.P+o.F*t(224)("startsWith"),"String",{startsWith:function(e){var n=a(this,e,"startsWith"),t=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),o=String(e);return r?r.call(n,o,t):n.slice(t,t+o.length)===o}})},223:function(e,n,t){var o=t(69),i=t(23);e.exports=function(e,n,t){if(o(n))throw TypeError("String#"+t+" doesn't accept regex!");return String(i(e))}},224:function(e,n,t){var o=t(2)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[o]=!1,!"/./"[e](n)}catch(i){}}return!0}}}]);