(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),A=a(144),i=(a(32),a(7)),o=a.n(i),c=a(176),l=a(174),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).iconRef=r.a.createRef(),a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Object(l.d)(this.iconRef.current.querySelector("svg")),t=Object(l.d)(this.iconRef.current.querySelector("#kawaii-face__eyes__circle circle:first-child")),a=Object(l.d)(this.iconRef.current.querySelector("#kawaii-face__eyes__circle circle:last-child")),n=Object(l.e)({from:{scaleY:0},to:{scaleY:1},duration:200}),r=Object(l.e)({from:{scaleY:1},to:{scaleY:.3},duration:125,flip:1}),A=Object(l.a)(function(e){var a=e.complete;n.start({update:t.set,complete:function(){a(),setInterval(function(){return r.start({update:t.set})},2e3)}})}),i=Object(l.a)(function(e){var t=e.complete;n.start({update:a.set,complete:function(){t(),setInterval(function(){return r.start({update:a.set})},2e3)}})});Object(l.e)({from:{y:0},to:{y:20},easings:l.b.easeInOut,duration:1650,yoyo:1/0}).start(e.set),Object(l.c)(A,i).start()},a.render=function(){return r.a.createElement("div",{ref:this.iconRef,style:{alignSelf:"center"}},r.a.createElement(c.a,Object.assign({},this.props,{mood:"happy"})))},t}(r.a.Component),u=a(149),d=a(143),p=A.a.h3.withConfig({displayName:"Post__PostTitle",componentId:"sc-250nla-0"})(["margin-top:1rem;margin-bottom:0.25rem;"]),f=A.a.div.withConfig({displayName:"Post__PostContainer",componentId:"sc-250nla-1"})(["box-shadow:1px 0px 50px #0000001a;border-radius:6px;padding:16px;margin-bottom:48px;"]),m=function(e){var t=e.post,a=t.excerpt,n=t.frontmatter,A=n.title,i=n.date,o=n.path;return r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d.Link,{to:o},A)),r.a.createElement("small",null,i),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}}))},g=(a(170),a(172)),h=a(173),b=a.n(h),y=a(146),E=A.a.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-3ote3c-0"})(["display:flex;margin-bottom:",";"],Object(y.a)(1)),v=Object(A.a)(b.a).withConfig({displayName:"Bio__Avatar",componentId:"sc-3ote3c-1"})(["margin-right:",";margin-bottom:0;min-width:60;border-radius:100%;"],Object(y.a)(.5)),x=A.a.div.withConfig({displayName:"Bio__BioText",componentId:"sc-3ote3c-2"})(["display:flex;flex-direction:column;"]);var w="2222508901",j=function(){return r.a.createElement(d.StaticQuery,{query:w,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return r.a.createElement(E,null,r.a.createElement(v,{fixed:e.avatar.childImageSharp.fixed,alt:a}),r.a.createElement(x,null,r.a.createElement("p",{style:{marginBottom:0}},"Written by ",r.a.createElement("strong",null,a),"."," "),r.a.createElement("p",null,r.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"@awaveawave"))))},data:g})};a.d(t,"pageQuery",function(){return B});var Q=A.a.div.withConfig({displayName:"pages__PostContainer",componentId:"sc-12501ze-0"})(["margin-top:45px;"]),B=(t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter(function(e){return!!e.node.frontmatter.date}).map(function(e){return r.a.createElement(m,{key:e.node.id,post:e.node})});return r.a.createElement(u.a,null,r.a.createElement(j,null),r.a.createElement(s,{size:100}),r.a.createElement(Q,null,t))},"1123293424")},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(142),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(145),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},146:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(150),r=a.n(n),A=a(151),i=a.n(A),o=new r.a(i.a);var c=o.rhythm;o.scale},147:function(e){e.exports={data:{site:{siteMetadata:{title:"notes"}}}}},148:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(52),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){"use strict";var n=a(7),r=a.n(n),A=a(147),i=a(0),o=a.n(i),c=a(143),l=a(144),s=l.a.nav.withConfig({displayName:"Navbar__Nav",componentId:"x6cdwk-0"})(["background:#202124;margin-bottom:1.45rem;box-shadow:0px 0px 50px #0000001a;border-bottom-left-radius:3px;border-bottom-right-radius:3px;"]),u=l.a.div.withConfig({displayName:"Navbar__NavContent",componentId:"x6cdwk-1"})(["margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;"]),d=Object(l.a)(c.Link).withConfig({displayName:"Navbar__NavHeader",componentId:"x6cdwk-2"})(["color:#fff;text-decoration:none;text-shadow:none;background-image:none;"]),p=function(e){var t=e.siteTitle;e.usePrimaryNav;return o.a.createElement(s,null,o.a.createElement(u,null,o.a.createElement(d,{to:"/"},t)))},f=a(146),m=l.a.div.withConfig({displayName:"Layout__Container",componentId:"ioxt3p-0"})(["display:flex;flex-direction:column;margin:0 auto;max-width:960px;padding:"," ",";padding-top:0;"],Object(f.a)(1.5),Object(f.a)(.75)),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(c.StaticQuery,{query:"1044757290",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{siteTitle:t.site.siteMetadata.title}),o.a.createElement(m,null,e))},data:A})},t}(o.a.Component);t.a=g},172:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAQP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGe1P07jgf/xAAYEAEBAQEBAAAAAAAAAAAAAAABAhIDIf/aAAgBAQABBQIj05CVCNUqU7oNf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAICAwAAAAAAAAAAAAAAAAABETEhobH/2gAIAQEABj8CUJkcK2XQnI8H/8QAGxABAAIDAQEAAAAAAAAAAAAAAQAhETFRQWH/2gAIAQEAAT8hSp5q+wlgqby1FJ4i6rj5AkssEANz/9oADAMBAAIAAwAAABCQz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQVFhgaH/2gAIAQEAAT8QRpmdcuoy9m028/IR9iZGYJsaG69IoyoL2NXcPgBcT//Z",width:60,height:60,src:"/notes/static/fb56d78f01b37fee7da1ea3c99c4439f/0a2ed/profile_pic.jpg",srcSet:"/notes/static/fb56d78f01b37fee7da1ea3c99c4439f/0a2ed/profile_pic.jpg 1x,\n/notes/static/fb56d78f01b37fee7da1ea3c99c4439f/9e3e1/profile_pic.jpg 1.5x,\n/notes/static/fb56d78f01b37fee7da1ea3c99c4439f/bf8bc/profile_pic.jpg 2x,\n/notes/static/fb56d78f01b37fee7da1ea3c99c4439f/e72f0/profile_pic.jpg 3x"}}},site:{siteMetadata:{author:"Artem Golovin",social:{twitter:"awaveawave"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-333e2e00a1b3c17f807b.js.map