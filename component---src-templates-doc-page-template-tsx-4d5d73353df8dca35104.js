(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4M6O":function(e,t,n){"use strict";n("m210"),n("4DPX"),n("Ggvi"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("ToIb");var i=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var i=window.document.createElement("script");return i.async=!0,i.src=e,i.id=t,n.appendChild(i),i},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var i;return function(){var a=this,o=arguments,r=function(){i=null,n||e.apply(a,o)},l=n&&!i;window.clearTimeout(i),i=setTimeout(r,t),l&&e.apply(a,o)}},t.isReactElement=o,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var r;if(i){if(a>=n.length)break;r=n[a++]}else{if((a=n.next()).done)break;r=a.value}var l=r;if(e[l]!==t[l]&&!o(e[l]))return!0}return!1};var a=i(n("q1tI"));function o(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},AIgE:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return ee}));var i=n("q1tI"),a=n.n(i),o=n("BBkP"),r=n("CMDK"),l=n("vOnD"),d=n("wqoF"),c=n("Hf4c"),s=n("LOFe"),p=n("ZGSP"),u=n("DmWS"),m=n.n(u),f=n("+K7j"),g=n.n(f),h=function(e){var t=e.data,n=e.originPath,i=t.site.siteMetadata,o=i.repositoryUrl+"/blob/master/website/src/docs/"+n;return a.a.createElement(x,null,a.a.createElement(w,null,a.a.createElement(v,null,"Help us improving our content"),a.a.createElement(b,null,a.a.createElement(y,null,a.a.createElement(_,{to:o},a.a.createElement(s.a,null,a.a.createElement(m.a,null)),"Edit on GitHub")),a.a.createElement(y,null,a.a.createElement(_,{to:i.tools.slack},a.a.createElement(s.a,null,a.a.createElement(g.a,null)),"Discuss on Slack")))))},x=l.b.aside.withConfig({displayName:"doc-page-aside__Aside",componentId:"sc-2nxd1-0"})(["display:none;flex:0 0 250px;flex-direction:column;*{user-select:none;}@media only screen and (min-width:1300px){display:flex;}"]),w=l.b.div.withConfig({displayName:"doc-page-aside__FixedContainer",componentId:"sc-2nxd1-1"})(["position:fixed;padding:25px 0 250px;width:250px;"]),v=l.b.h6.withConfig({displayName:"doc-page-aside__Title",componentId:"sc-2nxd1-2"})(["padding:0 20px 10px;font-size:0.833em;"]),b=l.b.ol.withConfig({displayName:"doc-page-aside__CommunityItems",componentId:"sc-2nxd1-3"})(["display:flex;flex-direction:column;margin:0;padding:0 20px 20px;list-style-type:none;"]),y=l.b.li.withConfig({displayName:"doc-page-aside__CommunityItem",componentId:"sc-2nxd1-4"})(["flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;"]),_=Object(l.b)(p.a).withConfig({displayName:"doc-page-aside__CommunityLink",componentId:"sc-2nxd1-5"})(["font-size:0.833em;color:#666;> ","{margin-right:10px;> svg{fill:#666;}}:hover{color:#000;> "," > svg{fill:#000;}}"],s.a,s.a),E=function(){return a.a.createElement(C,{role:"dialog","aria-live":"polite","aria-label":"legacydoc","aria-describedby":"legacydoc:desc"},a.a.createElement(I,null,a.a.createElement(N,{id:"legacydoc:desc"},a.a.createElement("strong",null,"Important:")," This documentation covers Hot Chocolate 11. For version 10 and lower click"," ",a.a.createElement(j,{to:"https://hotchocolate.io"},"here"),".")))},C=l.b.div.withConfig({displayName:"doc-page-legacy__Dialog",componentId:"sc-1ijx7hc-0"})(["background-color:#ffb806;"]),I=l.b.div.withConfig({displayName:"doc-page-legacy__Container",componentId:"sc-1ijx7hc-1"})(["display:flex;flex-direction:column;padding:10px 20px;@media only screen and (min-width:800px){padding:10px 50px;}"]),N=l.b.div.withConfig({displayName:"doc-page-legacy__Message",componentId:"sc-1ijx7hc-2"})(["flex:0 1 auto;font-size:0.889em;line-height:1.667em;color:#4f3903;"]),j=Object(l.b)(p.a).withConfig({displayName:"doc-page-legacy__LegacyDocLink",componentId:"sc-1ijx7hc-3"})(["text-decoration:underline;color:#4f3903;"]),k=(n("v9g0"),n("/MKj")),q=n("mcIw"),S=n("l5rq"),D=n.n(S),O=n("RkNZ"),z=n.n(O),P=n("XuCD"),M=n.n(P),T=function(e){var t,n,o=e.data,r=e.selectedProduct,l=Object(k.useSelector)((function(e){return e.common.expandedPaths})),d=Object(k.useDispatch)(),c=Object(i.useState)(!1),p=c[0],u=c[1],m=(null===(t=o.config)||void 0===t?void 0:t.products)&&o.config.products.find((function(e){return(null==e?void 0:e.path)===r})),f=Object(i.useCallback)((function(e){e.stopPropagation()}),[]),g=Object(i.useCallback)((function(){u(!1)}),[]),h=Object(i.useCallback)((function(e,t){u(!t),e.stopPropagation()}),[]),x=Object(i.useCallback)((function(e){d(Object(q.e)({path:e}))}),[]);return Object(i.useEffect)((function(){return window.addEventListener("click",g),function(){window.removeEventListener("click",g)}}),[g]),a.a.createElement(L,null,a.a.createElement(U,null,a.a.createElement(A,null,a.a.createElement(Q,{onClick:function(e){return h(e,p)}},null==m?void 0:m.title,a.a.createElement(s.a,{size:16},a.a.createElement(M.a,null))),a.a.createElement(V,{open:p,onClick:f},(null===(n=o.config)||void 0===n?void 0:n.products)&&o.config.products.map((function(e){return e===m?a.a.createElement(G,{onClick:g},a.a.createElement(H,null,e.title),a.a.createElement(B,null,e.description)):a.a.createElement(R,{to:"/docs/"+e.path},a.a.createElement(H,null,e.title),a.a.createElement(B,null,e.description))})))),(null==m?void 0:m.items)&&function e(t,n){return a.a.createElement(F,null,t.map((function(t){var i=t.path,o=t.title,r=t.items,d=r||"index"!==i?n+"/"+i:n;return a.a.createElement(X,{key:d+(r?"/parent":"")},r?a.a.createElement(Z,{expanded:-1!==l.indexOf(d)},a.a.createElement(W,{onClick:function(){return x(d)}},o,a.a.createElement(s.a,{size:16},a.a.createElement(D.a,{className:"arrow-down"}),a.a.createElement(z.a,{className:"arrow-up"}))),a.a.createElement(K,null,e(r,d))):a.a.createElement(J,{to:d},o))})))}(m.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title,items:e.items?null==e?void 0:e.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title}})):void 0}})),"/docs/"+m.path)))},L=l.b.nav.withConfig({displayName:"doc-page-navigation__Navigation",componentId:"j0l58s-0"})(["display:none;flex:0 0 250px;flex-direction:column;z-index:1;*{user-select:none;}@media only screen and (min-width:1050px){display:flex;}"]),U=l.b.div.withConfig({displayName:"doc-page-navigation__FixedContainer",componentId:"j0l58s-1"})(["position:fixed;padding:25px 0 250px;width:250px;overflow:initial;"]),A=l.b.div.withConfig({displayName:"doc-page-navigation__ProductSwitcher",componentId:"j0l58s-2"})([""]),Q=l.b.button.withConfig({displayName:"doc-page-navigation__ProductSwitcherButton",componentId:"j0l58s-3"})(["display:flex;flex-direction:row;align-items:center;margin:6px 14px 20px;border:1px solid #ccc;border-radius:5px;padding:7px 5px;width:calc(100% - 28px);font-size:0.833em;transition:background-color 0.2s ease-in-out;> ","{margin-left:auto;> svg{fill:#666;}}:hover{background-color:#ddd;}"],s.a),V=l.b.div.withConfig({displayName:"doc-page-navigation__ProductSwitcherDialog",componentId:"j0l58s-4"})(["position:fixed;top:130px;z-index:10;display:",";flex-direction:row;flex-wrap:wrap;margin:0 14px;padding:10px;border-radius:5px;width:700px;background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,0.25);"],(function(e){return e.open?"flex":"none"})),G=l.b.div.withConfig({displayName:"doc-page-navigation__CurrentProduct",componentId:"j0l58s-5"})(["flex:0 0 calc(50% - 32px);border:1px solid #ccc;border-radius:5px;margin:5px;padding:10px;font-size:0.833em;color:#666;background-color:#ddd;"]),R=Object(l.b)(p.a).withConfig({displayName:"doc-page-navigation__ProductLink",componentId:"j0l58s-6"})(["flex:0 0 calc(50% - 32px);border:1px solid #ccc;border-radius:5px;margin:5px;padding:10px;font-size:0.833em;color:#666;transition:background-color 0.2s ease-in-out;:hover{background-color:#ddd;}"]),H=l.b.h6.withConfig({displayName:"doc-page-navigation__ProductTitle",componentId:"j0l58s-7"})(["font-size:1em;"]),B=l.b.p.withConfig({displayName:"doc-page-navigation__ProductDescription",componentId:"j0l58s-8"})(["margin-bottom:0;"]),F=l.b.ol.withConfig({displayName:"doc-page-navigation__NavigationList",componentId:"j0l58s-9"})(["display:flex;flex-direction:column;margin:0;padding:0 20px 20px;list-style-type:none;"]),X=l.b.li.withConfig({displayName:"doc-page-navigation__NavigationItem",componentId:"j0l58s-10"})(["flex:0 0 auto;margin:5px 0;padding:0;min-height:20px;line-height:initial;"]),W=l.b.div.withConfig({displayName:"doc-page-navigation__NavigationGroupToggle",componentId:"j0l58s-11"})(["display:flex;flex-direction:row;align-items:center;min-height:20px;font-size:0.833em;"]),K=l.b.div.withConfig({displayName:"doc-page-navigation__NavigationGroupContent",componentId:"j0l58s-12"})(["> ","{padding:5px 0;}"],F),Z=l.b.div.withConfig({displayName:"doc-page-navigation__NavigationGroup",componentId:"j0l58s-13"})(["display:flex;flex-direction:column;cursor:pointer;> ","{display:",";}> "," > ","{margin-left:auto;> .arrow-down{display:",";fill:#666;}> .arrow-up{display:",";fill:#666;}}"],K,(function(e){return e.expanded?"initial":"none"}),W,s.a,(function(e){return e.expanded?"none":"initial"}),(function(e){return e.expanded?"initial":"none"})),J=Object(l.b)(p.a).withConfig({displayName:"doc-page-navigation__NavigationLink",componentId:"j0l58s-14"})(["font-size:0.833em;color:#666;:hover{color:#000;}"]),Y=function(e){var t=e.data,n=e.originPath,i=t.file.childMarkdownRemark,o=i.fields,r=i.frontmatter,l=i.html,s=o.slug.substring(1),p="/docs/"+s,u=s.substring(0,s.indexOf("/")),m=r.title;return a.a.createElement($,null,a.a.createElement(T,{data:t,selectedProduct:u}),a.a.createElement(c.d,null,a.a.createElement(c.a,null,a.a.createElement(E,null),a.a.createElement(c.c,null,m),a.a.createElement(c.b,{dangerouslySetInnerHTML:{__html:l}})),a.a.createElement(d.a,{data:t,path:p,title:m})),a.a.createElement(h,{data:t,originPath:n}))},$=l.b.div.withConfig({displayName:"doc-page__Container",componentId:"vhp4qm-0"})(["display:flex;flex-direction:row;width:100%;max-width:800px;@media only screen and (min-width:1050px){max-width:1050px;}@media only screen and (min-width:1300px){max-width:1300px;}"]),ee=(t.default=function(e){var t=e.data,n=e.pageContext;return a.a.createElement(r.a,null,a.a.createElement(o.a,{title:t.file.childMarkdownRemark.frontmatter.title}),a.a.createElement(Y,{data:t,originPath:n.originPath}))},"3185543776")},Hf4c:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return l}));var i=n("vOnD"),a=i.b.div.withConfig({displayName:"article-elements__ArticleWrapper",componentId:"sc-17wo9z6-0"})(["display:flex;flex:1 1 auto;flex-direction:column;"]),o=i.b.article.withConfig({displayName:"article-elements__Article",componentId:"sc-17wo9z6-1"})(["display:flex;flex:1 1 auto;flex-direction:column;margin-bottom:40px;padding-bottom:20px;@media only screen and (min-width:800px){border:1px solid #ccc;border-top:0 none;}"]),r=i.b.h1.withConfig({displayName:"article-elements__ArticleTitle",componentId:"sc-17wo9z6-2"})(["margin-top:20px;margin-right:20px;margin-left:20px;font-size:2em;@media only screen and (min-width:800px){margin-right:50px;margin-left:50px;}"]),l=i.b.div.withConfig({displayName:"article-elements__ArticleContent",componentId:"sc-17wo9z6-3"})(["> *{padding-right:20px;padding-left:20px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{padding-right:4px;transform:translateX(0px);}> table{margin-right:20px;margin-left:20px;padding-right:0;padding-left:0;width:calc(100% - 40px);}> .gatsby-highlight{padding-right:0;padding-left:0;> pre{padding:30px 20px;}}@media only screen and (min-width:800px){> *{padding-right:50px;padding-left:50px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{transform:translateX(30px);}> table{margin-right:50px;margin-left:50px;padding-right:0;padding-left:0;width:calc(100% - 100px);}> .gatsby-highlight{> pre{padding-right:50px;padding-left:50px;}}}"])},ORnI:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var a=i(n("VUT9"));t.Disqus=a.default;var o=i(n("qASQ"));t.CommentCount=o.default;var r=a.default;t.default=r},RkNZ:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"}))}a.defaultProps={viewBox:"0 0 448 512"},e.exports=a,a.default=a},VUT9:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var a=i(n("pVnL")),o=i(n("8OQS")),r=i(n("VbXa")),l=i(n("q1tI")),d=i(n("17x9")),c=n("4M6O"),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",t.config?n.config=t.config:n.config={identifier:t.identifier,url:t.url,title:t.title},n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,c.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,c.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return l.default.createElement("div",(0,a.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},t}(l.default.Component);t.default=s,s.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),identifier:d.default.string,title:d.default.string,url:d.default.string}},XuCD:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},l5rq:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}))}a.defaultProps={viewBox:"0 0 448 512"},e.exports=a,a.default=a},qASQ:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var a=i(n("pVnL")),o=i(n("8OQS")),r=i(n("VbXa")),l=i(n("q1tI")),d=i(n("17x9")),c=n("4M6O"),s=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,i=(0,o.default)(e,["config","placeholder"]);return l.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},i,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},t}(l.default.Component);t.default=p,p.defaultProps={placeholder:"..."},p.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}},wqoF:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("ORnI"),a=n("q1tI"),o=n.n(a),r=n("vOnD"),l=function(e){var t=e.data,n=e.path,i=e.title,a={url:t.site.siteMetadata.siteUrl+n,identifier:n,title:i};return o.a.createElement(d,{config:a})},d=Object(r.b)(i.Disqus).withConfig({displayName:"article-comments__DisqusWrapper",componentId:"sc-1uyp3j8-0"})(["margin:0 20px;@media only screen and (min-width:800px){margin:0 50px;}"])}}]);
//# sourceMappingURL=component---src-templates-doc-page-template-tsx-4d5d73353df8dca35104.js.map