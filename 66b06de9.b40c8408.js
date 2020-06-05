(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return b}));var a=n(2),c=n(9),i=(n(0),n(295)),o={},s={id:"web/snippets/can-execute",title:"can-execute",description:"Commands can optionally register a hook function which indicates whether it is possible to execute the command. This canExecute callback is passed as the second argument to the register function.",source:"@site/docs/web/snippets/can-execute.mdx",permalink:"/docs/web/snippets/can-execute",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/can-execute.mdx"},m=[],r={rightToc:m};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Commands can optionally register a hook function which indicates whether it is possible to execute the command. This ",Object(i.b)("inlineCode",{parentName:"p"},"canExecute")," callback is passed as the second argument to the ",Object(i.b)("inlineCode",{parentName:"p"},"register")," function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'this.messages.command<number>("custom.divide-ten-by-x").register(\n    (x: number) => {\n        this.messages.commands.ui.alert.execute({\n            message: `10 / ${x} is ${10 / x}`,\n        });\n    },\n    // highlight-start\n    (x: number) => {\n        return x !== 0;\n    }\n);\n// highlight-end\n')),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"canExecute")," hook for the command implementation returns true, the ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," hook will be called. If the function returns false, the ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," hook will not be called. Some components, like the I Want To Menu, use the ",Object(i.b)("inlineCode",{parentName:"p"},"canExecute")," hook to disable buttons when no implementations of a command can be executed. This is accomplished through the ",Object(i.b)("inlineCode",{parentName:"p"},"canExecuteChanged")," event. This event can be published or subscribed to in order to react to changing command execution conditions."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'this.messages\n    .command("custom.command-with-can-execute")\n    .canExecuteChanged.publish();\n\nthis.messages\n    .command("custom.command-with-can-execute")\n    .canExecuteChanged.subscribe(() => {\n        // .. react to can execute status changing\n    });\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For a full example of a command with a dynamic execution status, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/tutorial-command-can-execute"}),"check out the ",Object(i.b)("inlineCode",{parentName:"a"},"canExecute")," tutorial"),", or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://vertigis-web-samples.netlify.app/commands-and-operations"}),"this live SDK sample"),"."))))}b.isMDXComponent=!0}}]);