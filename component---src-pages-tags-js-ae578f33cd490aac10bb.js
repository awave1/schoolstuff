(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{251:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",(function(){return f}));var a=t(0),r=t.n(a),u=t(69),i=t(146),l=t(10),o=t(253),c=l.b.li.withConfig({displayName:"tags__Tag",componentId:"sc-4sn2rl-0"})(["margin:1rem 0;font-family:Hack,monospace;"]),f="3450235017";n.default=function(e){var n=e.data,t=n.allMarkdownRemark.group,a=n.site.siteMetadata.title;return r.a.createElement("div",null,r.a.createElement(i.Helmet,{title:a}),r.a.createElement("div",null,r.a.createElement("h3",null,"Tags"),r.a.createElement("ul",{style:{listStyle:"none",margin:0,padding:0}},t.map((function(e){return r.a.createElement(c,{key:e.fieldValue},r.a.createElement(u.a,{to:"/tags/"+Object(o.leKebab)(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))})))))}},253:function(e,n,t){t(68),t(17);var a=function(e){var n=(e?e.replace(/<(.|\n)*?>/g," "):"").match(/[a-zA-ZÀ-ÿ0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g),t=0;if(null===n)return t;for(var a=0;a<n.length;a++)n[a].charCodeAt(0)>=19968?t+=n[a].length:t+=1;return t},r=function(e){return e?(e.match(/<img(.|\n)*?>/g)||[]).length:0};e.exports={leKebab:function(e){return e.replace(/[^A-Za-z0-9\s]+/g,"").replace(/\s/g,"-")},getReadingTime:function(e){var n=function(e){return{wordCount:a(e),imageCount:r(e)}}(e),t=function(e,n){var t=e/(275/60);if(n)for(var a=12;a>12-n;a--)t+=Math.max(a,3);return Math.round(t/60)}(n.wordCount,n.imageCount);return t<=1?"1 min read":t+" min read"},flatten:function(e){return[].concat.apply([],e)},unique:function(e){return e.filter((function(e,n,t){return t.indexOf(e)===n}))}}}}]);
//# sourceMappingURL=component---src-pages-tags-js-ae578f33cd490aac10bb.js.map