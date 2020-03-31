/*! For license information please see 379b8705.42dffcb2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17,39],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(210)),i={},c={id:"mobile/snippets/prereqs",title:"prereqs",description:"## Prerequisites",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/dev-center/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},s=[{value:"Prerequisites",id:"prerequisites",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Download the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start")," application and open it in Visual Studio."))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(9),a=(n(0),n(210)),i=n(127),c=n(217),s=n(216),u={title:"Change Default Application Behaviour",description:"Geocortex Mobile - Learn how to configure mobile to change default application behaviour"},p={id:"mobile/change-default-behaviour",title:"Change Default Application Behaviour",description:"Geocortex Mobile - Learn how to configure mobile to change default application behaviour",source:"@site/docs/mobile/change-default-behaviour.mdx",permalink:"/dev-center/docs/mobile/change-default-behaviour",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/change-default-behaviour.mdx",sidebar:"mobile",previous:{title:"Overview",permalink:"/dev-center/docs/mobile/overview"},next:{title:"Customize the Look and Feel",permalink:"/dev-center/docs/mobile/look-and-feel"}},l=[{value:"Example",id:"example",children:[]}],m={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Many of the behaviours of Geocortex Mobile's built in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-components-services"}),"components")," have configurable behaviours through the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-app-config"}),"app config"),". If you browse the ",Object(a.b)("inlineCode",{parentName:"p"},"app.json")," that is included with the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start"),", you'll see properties like ",Object(a.b)("inlineCode",{parentName:"p"},"action")," or ",Object(a.b)("inlineCode",{parentName:"p"},"onClick")," in items that take an array of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-commands-operations"}),"commands and operations"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "map1",\n            "webMap": "c6008288a95247428fc55d9aaa72b670",\n            "onClick": [ "tasks.identify", "highlights.pulse", "results.display" ]\n        },\n        ...\n        {\n            "$type": "menu-item",\n            "id": "addPointAtCenterAction",\n            "title": "Add Measurement Point at Center",\n            "action": [\n                {\n                    "name": "sketching.add-point-at-center",\n                    "arguments": {\n                        "maps": "item://map-extension/map1"\n                    }\n                }\n            ]\n        },\n        ...\n    ]\n}\n')),Object(a.b)("p",null,"All behaviours defined in this manner are configurable. Commands or operations can be removed from the chain, and any behaviour can be replaced with a ",Object(a.b)("inlineCode",{parentName:"p"},"workflow.run")," command that ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/change-default-search-behaviour"}),"executes custom behaviour"),", or even with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-command-operation"}),"custom commands and operations"),"."),Object(a.b)(i.default,{mdxType:"PrereqsSnippet"}),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"This is modified configuration for the ",Object(a.b)("inlineCode",{parentName:"p"},"map1")," Map Extension in the Quick Start. The map's ",Object(a.b)("inlineCode",{parentName:"p"},"onClick")," behaviour has been changed to remove the ",Object(a.b)("inlineCode",{parentName:"p"},"highlights.pulse")," command and execute ",Object(a.b)("inlineCode",{parentName:"p"},"map.zoom-to-features")," instead."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "map-extension",\n    "id": "map1",\n    "webMap": "c6008288a95247428fc55d9aaa72b670",\n    "onClick": [ "tasks.identify", "results.display", "map.zoom-to-features" ]\n},\n')),Object(a.b)("h1",{id:"next-steps"},"Next Steps"),Object(a.b)("p",null,"Geocortex Mobile comes with many built in commands and operations to help you accomplish your goal. If these are not enough, Geocortex Workflow can help you implement custom behaviours without writing custom code. If you cannot create the behaviour you want with Geocortex Workflow, it might be time to look into using the Geocortex Mobile SDK to implement a custom command or operation."),Object(a.b)(c.a,{mdxType:"UseCaseContainer"},Object(a.b)(s.a,{title:"Commands and Operations",description:"Learn more about commands and operations",link:"concepts-commands-operations",mdxType:"UseCaseCard"}),Object(a.b)(s.a,{title:"Change Geocortex Mobile's Default Search Behaviour",description:"Learn how to Geocortex Workflow to override Geocortex Mobile's default search behaviour",link:"change-default-search-behaviour",mdxType:"UseCaseCard"}),Object(a.b)(s.a,{title:"Geocortex Workflow",description:"Learn more about Geocortex Workflow",link:"../workflow/overview",mdxType:"UseCaseCard"}),Object(a.b)(s.a,{title:"Implement Custom Command/Operation",description:"Implement a custom Command/Operation with the Mobile SDK",link:"implement-command-operation",mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,b=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return n?o.a.createElement(b,c({ref:t},u,{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},211:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},212:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(36),c=n(213),s=n(24),u=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,p=n||s,l=Object(c.a)(p),m=Object(o.useRef)(!1),d=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&l&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,l]),p&&l?a.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(p),m.current=!0)},innerRef:function(e){var n,r;d&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):a.a.createElement("a",Object(r.a)({},e,{href:p}))}},213:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))},214:function(e,t,n){"use strict";n(215)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},215:function(e,t,n){var r=n(17),o=n(18),a=n(23),i=/"/g,c=function(e,t,n,r){var o=String(a(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(214);var r=n(212),o=n(0),a=n.n(o),i=n(211),c=n.n(i),s=n(125),u=n.n(s);function p(e){var t=e.title,n=e.description,o=e.link;return a.a.createElement("div",{className:c()("card-demo",u.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(r.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),a=n(211),i=n.n(a),c=n(126),s=n.n(c);function u(e){var t=e.children;return o.a.createElement("div",{className:i()(s.a.root)},t)}}}]);