"use strict";(globalThis.webpackChunkvertigis_studio_dev_center=globalThis.webpackChunkvertigis_studio_dev_center||[]).push([[8610],{3146:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(7294),r=a(6010),s=a(3905),n=a(4973),m=a(6742),i=a(9732),c=a(7933),o=a(1217),d=a(6146);const g="blogPostTitle_GeHD",u="blogPostData_291c",h="blogPostDetailsFull_3kfx";const p=function(e){const t=function(){const{selectMessage:e}=(0,i.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:p,metadata:E,truncated:b,isBlogPostPage:v=!1}=e,{date:_,formattedDate:N,permalink:f,tags:k,readingTime:Z,title:T,editUrl:w}=E,{author:P,image:M,keywords:I}=p,L=p.author_url||p.authorURL,x=p.author_title||p.authorTitle,y=p.author_image_url||p.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(o.Z,{keywords:I,image:M}),l.createElement("article",{className:v?void 0:"margin-bottom--xl"},(()=>{const e=v?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:g},v?T:l.createElement(m.Z,{to:f},T)),l.createElement("div",{className:(0,r.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:_},N),Z&&l.createElement(l.Fragment,null," \xb7 ",t(Z))),l.createElement("div",{className:"avatar margin-vert--md"},y&&l.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:L},l.createElement("img",{src:y,alt:P})),l.createElement("div",{className:"avatar__intro"},P&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(m.Z,{href:L},P)),l.createElement("small",{className:"avatar__subtitle"},x)))))})(),l.createElement("div",{className:"markdown"},l.createElement(s.Zo,{components:c.Z},a)),(k.length>0||b)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[h]:v})},k.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((({label:e,permalink:t})=>l.createElement(m.Z,{key:t,className:"margin-horiz--sm",to:t},e)))),v&&w&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:w})),!v&&b&&l.createElement("div",{className:"col text--right"},l.createElement(m.Z,{to:E.permalink,"aria-label":`Read more about ${T}`},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(7294),r=a(6010),s=a(6742);const n="sidebar_2ahu",m="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",c="sidebarItem_2UVv",o="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM";var g=a(4973);function u({sidebar:e}){return 0===e.items.length?null:l.createElement("nav",{className:(0,r.Z)(n,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},e.title),l.createElement("ul",{className:i},e.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))))))}},9404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(7294),r=a(6955),s=a(3146),n=a(6742),m=a(5601),i=a(4973),c=a(9732);const o=function(e){const{metadata:t,items:a,sidebar:o}=e,{allTagsPath:d,name:g,count:u}=t,h=function(){const{selectMessage:e}=(0,c.c2)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),p=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(u),tagName:g});return l.createElement(r.Z,{title:p,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("aside",{className:"col col--3"},l.createElement(m.Z,{sidebar:o})),l.createElement("main",{className:"col col--7"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,p),l.createElement(n.Z,{href:d},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((({content:e})=>l.createElement(s.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.createElement(e,null))))))))}},6146:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(4973),s=a(7462),n=a(6010);const m="iconEdit_2_ui",i=({className:e,...t})=>l.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(m,e),"aria-hidden":"true"},t),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function c({editUrl:e}){return l.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},l.createElement(i,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);