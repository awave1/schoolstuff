(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return u}));var r=n(0),a=n.n(r),o=n(262),i=n(171);n(250);t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date&&e.node.frontmatter.published})).map((function(e){return a.a.createElement(o.a,{key:e.node.id,post:e.node})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{marginTop:45}},t),a.a.createElement(i.a,null))};var u="2640419788"},253:function(e,t,n){n(68),n(17);var r=function(e){var t=(e?e.replace(/<(.|\n)*?>/g," "):"").match(/[a-zA-ZÀ-ÿ0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g),n=0;if(null===t)return n;for(var r=0;r<t.length;r++)t[r].charCodeAt(0)>=19968?n+=t[r].length:n+=1;return n},a=function(e){return e?(e.match(/<img(.|\n)*?>/g)||[]).length:0};e.exports={leKebab:function(e){return e.replace(/[^A-Za-z0-9\s]+/g,"").replace(/\s/g,"-")},getReadingTime:function(e){var t=function(e){return{wordCount:r(e),imageCount:a(e)}}(e),n=function(e,t){var n=e/(275/60);if(t)for(var r=12;r>12-t;r--)n+=Math.max(r,3);return Math.round(n/60)}(t.wordCount,t.imageCount);return n<=1?"1 min read":n+" min read"},flatten:function(e){return[].concat.apply([],e)},unique:function(e){return e.filter((function(e,t,n){return n.indexOf(e)===t}))}}},262:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(69),i=n(10),u=n(253),c=i.b.h3.withConfig({displayName:"PostCard__PostTitle",componentId:"sc-1jihatb-0"})(["margin-top:0.5rem;margin-bottom:0.25rem;"]),l=Object(i.b)(o.a).withConfig({displayName:"PostCard__PostContainer",componentId:"sc-1jihatb-1"})(["display:flex;flex-direction:column;position:relative;color:",";background:",";box-shadow:0px 0px 50px #0000001a;border-radius:6px;padding:1rem;margin-bottom:48px;transition:all 150ms cubic-bezier(0.55,0,0.1,1);&:hover{box-shadow:0px 0px 75px #00000012;}"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.card.background})),d=i.b.span.withConfig({displayName:"PostCard__CategoryLabel",componentId:"sc-1jihatb-2"})(["background:#df3131;position:absolute;color:white;right:15px;font-size:0.8rem;top:0;padding:3px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;white-space:nowrap;overflow:hidden;max-width:15ch;"]);t.a=function(e){var t=e.post,n=t.html,r=t.fields,o=r.slug,i=r.category,m=t.frontmatter,f=m.title,p=m.date,s=m.description,g=Object(u.getReadingTime)(n);return a.a.createElement(l,{to:o},a.a.createElement(d,null,i),a.a.createElement(c,null,f),a.a.createElement("small",null,p," | ",g),a.a.createElement("p",{style:{marginBottom:"0.5rem"}},s))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4033dcb0b117d87ff1c1.js.map