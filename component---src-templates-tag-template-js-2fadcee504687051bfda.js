(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{249:function(n,t,e){"use strict";e.r(t),e.d(t,"pageQuery",(function(){return f}));var r=e(0),a=e.n(r),i=e(57),o=e(256),c=e(262),s=e(263),f="1958827122";t.default=function(n){var t=n.pageContext,e=n.data,r=t.tag,f=e.allMarkdownRemark,l=f.edges,u=f.totalCount,m=u+" post"+(1===u?"":"s")+" tagged with ",d=l.filter((function(n){return!!n.node.frontmatter.date})).map((function(n){return a.a.createElement(s.a,{key:n.node.id,post:n.node})}));return a.a.createElement("div",null,a.a.createElement("h3",null,m," ",a.a.createElement("span",{style:{fontFamily:"'Hack', monospace"}},'"',r,'"')),d,a.a.createElement(o.a,{icon:c.b})," ",a.a.createElement(i.Link,{to:"/tags"},"Show all tags"))}},255:function(n,t,e){e(69),e(17);var r=function(n){var t=(n?n.replace(/<(.|\n)*?>/g," "):"").match(/[a-zA-ZÀ-ÿ0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g),e=0;if(null===t)return e;for(var r=0;r<t.length;r++)t[r].charCodeAt(0)>=19968?e+=t[r].length:e+=1;return e},a=function(n){return n?(n.match(/<img(.|\n)*?>/g)||[]).length:0};n.exports={leKebab:function(n){return n.replace(/[^A-Za-z0-9\s]+/g,"").replace(/\s/g,"-")},getReadingTime:function(n){var t=function(n){return{wordCount:r(n),imageCount:a(n)}}(n),e=function(n,t){var e=n/(275/60);if(t)for(var r=12;r>12-t;r--)e+=Math.max(r,3);return Math.round(e/60)}(t.wordCount,t.imageCount);return e<=1?"1 min read":e+" min read"},flatten:function(n){return[].concat.apply([],n)},unique:function(n){return n.filter((function(n,t,e){return e.indexOf(n)===t}))}}},256:function(n,t,e){"use strict";(function(n){e.d(t,"a",(function(){return b}));e(44),e(167),e(89),e(27),e(70),e(17),e(26),e(88),e(164),e(31),e(34),e(35),e(10),e(18),e(58),e(6),e(4),e(2),e(11),e(20),e(36),e(25);var r=e(257),a=e(29),i=e.n(a),o=e(0),c=e.n(o);function s(n){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){f(n,t,e[t])}))}return n}function u(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function m(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d="undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{};var p=function(n,t){return n(t={exports:{}},t.exports),t.exports}((function(n){!function(t){var e=function n(t,e,r){if(!s(e)||l(e)||u(e)||m(e)||c(e))return e;var a,i=0,o=0;if(f(e))for(a=[],o=e.length;i<o;i++)a.push(n(t,e[i],r));else for(var d in a={},e)Object.prototype.hasOwnProperty.call(e,d)&&(a[t(d,r)]=n(t,e[d],r));return a},r=function(n){return d(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1)},a=function(n){var t=r(n);return t.substr(0,1).toUpperCase()+t.substr(1)},i=function(n,t){return function(n,t){var e=(t=t||{}).separator||"_",r=t.split||/(?=[A-Z])/;return n.split(r).join(e)}(n,t).toLowerCase()},o=Object.prototype.toString,c=function(n){return"function"==typeof n},s=function(n){return n===Object(n)},f=function(n){return"[object Array]"==o.call(n)},l=function(n){return"[object Date]"==o.call(n)},u=function(n){return"[object RegExp]"==o.call(n)},m=function(n){return"[object Boolean]"==o.call(n)},d=function(n){return(n-=0)==n},p=function(n,t){var e=t&&"process"in t?t.process:t;return"function"!=typeof e?n:function(t,r){return e(t,n,r)}},h={camelize:r,decamelize:i,pascalize:a,depascalize:i,camelizeKeys:function(n,t){return e(p(r,t),n)},decamelizeKeys:function(n,t){return e(p(i,t),n,t)},pascalizeKeys:function(n,t){return e(p(a,t),n)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};n.exports?n.exports=h:t.humps=h}(d)}));var h=!1;try{h=!0}catch(w){}function g(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},n,t):{}}function y(n){return null===n?null:"object"===s(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function b(n){var t=n.icon,e=n.mask,a=n.symbol,i=n.className,o=n.title,c=y(t),s=g("classes",[].concat(m(function(n){var t,e=(f(t={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-inverse":n.inverse,"fa-border":n.border,"fa-li":n.listItem,"fa-flip-horizontal":"horizontal"===n.flip||"both"===n.flip,"fa-flip-vertical":"vertical"===n.flip||"both"===n.flip},"fa-".concat(n.size),null!==n.size),f(t,"fa-rotate-".concat(n.rotation),null!==n.rotation),f(t,"fa-pull-".concat(n.pull),null!==n.pull),t);return Object.keys(e).map((function(n){return e[n]?n:null})).filter((function(n){return n}))}(n)),m(i.split(" ")))),u=g("transform","string"==typeof n.transform?r.b.transform(n.transform):n.transform),d=g("mask",y(e)),p=Object(r.a)(c,l({},s,u,d,{symbol:a,title:o}));if(!p)return function(){var n;!h&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",c),null;var w=p.abstract,x={};return Object.keys(n).forEach((function(t){b.defaultProps.hasOwnProperty(t)||(x[t]=n[t])})),v(w[0],x)}b.displayName="FontAwesomeIcon",b.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object])},b.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var v=function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var a=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var r=e.attributes[t];switch(t){case"class":n.attrs.className=r,delete e.attributes.class;break;case"style":n.attrs.style=r.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,r=t.indexOf(":"),a=p.camelize(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[a]=i,n}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=r:n.attrs[p.camelize(t)]=r}return n}),{attrs:{}}),o=r.style,c=void 0===o?{}:o,s=u(r,["style"]);return i.attrs.style=l({},i.attrs.style,c),t.apply(void 0,[e.tag,l({},i.attrs,s)].concat(m(a)))}.bind(null,c.a.createElement)}).call(this,e(118))},257:function(n,t,e){"use strict";(function(n,r){e.d(t,"a",(function(){return Sn})),e.d(t,"b",(function(){return In}));e(21),e(33),e(69),e(71),e(260),e(70),e(89),e(17),e(26),e(43),e(27),e(10),e(88),e(164),e(31),e(34),e(35),e(18),e(58),e(6),e(4),e(2),e(11),e(20),e(36),e(25);function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){o(n,t,e[t])}))}return n}function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(){},l={},u={},m={mark:f,measure:f};try{"undefined"!=typeof window&&(l=window),"undefined"!=typeof document&&(u=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(m=performance)}catch(Nn){}var d=(l.navigator||{}).userAgent,p=void 0===d?"":d,h=l,g=u,y=m,b=(h.document,!!g.documentElement&&!!g.head&&"function"==typeof g.addEventListener&&"function"==typeof g.createElement),v=(~p.indexOf("MSIE")||p.indexOf("Trident/"),"fa"),w="svg-inline--fa",x="data-fa-i2svg",k=(function(){try{}catch(Nn){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),_=k.concat([11,12,13,14,15,16,17,18,19,20]),O={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},z=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",O.GROUP,O.SWAP_OPACITY,O.PRIMARY,O.SECONDARY].concat(k.map((function(n){return"".concat(n,"x")}))).concat(_.map((function(n){return"w-".concat(n)}))),h.FontAwesomeConfig||{});if(g&&"function"==typeof g.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=s(n,2),e=t[0],r=t[1],a=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=g.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=a&&(z[r]=a)}))}var E=c({},{familyPrefix:v,replacementClass:w,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},z);E.autoReplaceSvg||(E.observeMutations=!1);var C=c({},E);h.FontAwesomeConfig=C;var M=h||{};M.___FONT_AWESOME___||(M.___FONT_AWESOME___={}),M.___FONT_AWESOME___.styles||(M.___FONT_AWESOME___.styles={}),M.___FONT_AWESOME___.hooks||(M.___FONT_AWESOME___.hooks={}),M.___FONT_AWESOME___.shims||(M.___FONT_AWESOME___.shims=[]);var A=M.___FONT_AWESOME___,j=[];b&&((g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState)||g.addEventListener("DOMContentLoaded",(function n(){g.removeEventListener("DOMContentLoaded",n),1,j.map((function(n){return n()}))})));var T,P="pending",I="settled",S="fulfilled",N="rejected",L=function(){},F=void 0!==n&&void 0!==n.process&&"function"==typeof n.process.emit,R=void 0===r?setTimeout:r,W=[];function D(){for(var n=0;n<W.length;n++)W[n][0](W[n][1]);W=[],T=!1}function Y(n,t){W.push([n,t]),T||(T=!0,R(D,0))}function X(n){var t=n.owner,e=t._state,r=t._data,a=n[e],i=n.then;if("function"==typeof a){e=S;try{r=a(r)}catch(Nn){K(i,Nn)}}U(i,r)||(e===S&&B(i,r),e===N&&K(i,r))}function U(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===a(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){e||(e=!0,t===r?H(n,r):B(n,r))}),(function(t){e||(e=!0,K(n,t))})),!0}}catch(Nn){return e||K(n,Nn),!0}return!1}function B(n,t){n!==t&&U(n,t)||H(n,t)}function H(n,t){n._state===P&&(n._state=I,n._data=t,Y(V,n))}function K(n,t){n._state===P&&(n._state=I,n._data=t,Y(G,n))}function q(n){n._then=n._then.forEach(X)}function V(n){n._state=S,q(n)}function G(t){t._state=N,q(t),!t._handled&&F&&n.process.emit("unhandledRejection",t._data,t)}function Z(t){n.process.emit("rejectionHandled",t)}function J(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof J==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){K(t,n)}try{n((function(n){B(t,n)}),e)}catch(Nn){e(Nn)}}(n,this)}J.prototype={constructor:J,_state:P,_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(L),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,this._state===N&&F&&Y(Z,this)),this._state===S||this._state===N?Y(X,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},J.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new J((function(t,e){var r=[],a=0;function i(n){return a++,function(e){r[n]=e,--a||t(r)}}for(var o,c=0;c<n.length;c++)(o=n[c])&&"function"==typeof o.then?o.then(i(c),e):r[c]=o;a||t(r)}))},J.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new J((function(t,e){for(var r,a=0;a<n.length;a++)(r=n[a])&&"function"==typeof r.then?r.then(t,e):t(r)}))},J.resolve=function(n){return n&&"object"===a(n)&&n.constructor===J?n:new J((function(t){t(n)}))},J.reject=function(n){return new J((function(t,e){e(n)}))};"function"==typeof Promise&&Promise;var Q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $(n){if(n&&b){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=g.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return g.head.insertBefore(t,r),n}}var nn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var n=12,t="";n-- >0;)t+=nn[62*Math.random()|0];return t}function en(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rn(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function an(n){return n.size!==Q.size||n.x!==Q.x||n.y!==Q.y||n.rotate!==Q.rotate||n.flipX||n.flipY}function on(n){var t=n.transform,e=n.containerWidth,r=n.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var cn={x:0,y:0,width:"100%",height:"100%"};function sn(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function fn(n){var t=n.icons,e=t.main,r=t.mask,a=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,f=n.title,l=n.extra,u=n.watchable,m=void 0!==u&&u,d=r.found?r:e,p=d.width,h=d.height,g="fa-w-".concat(Math.ceil(p/h*16)),y=[C.replacementClass,i?"".concat(C.familyPrefix,"-").concat(i):"",g].filter((function(n){return-1===l.classes.indexOf(n)})).concat(l.classes).join(" "),b={children:[],attributes:c({},l.attributes,{"data-prefix":a,"data-icon":i,class:y,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(h)})};m&&(b.attributes[x]=""),f&&b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(tn())},children:[f]});var v=c({},b,{prefix:a,iconName:i,main:e,mask:r,transform:o,symbol:s,styles:l.styles}),w=r.found&&e.found?function(n){var t,e=n.children,r=n.attributes,a=n.main,i=n.mask,o=n.transform,s=a.width,f=a.icon,l=i.width,u=i.icon,m=on({transform:o,containerWidth:l,iconWidth:s}),d={tag:"rect",attributes:c({},cn,{fill:"white"})},p=f.children?{children:f.children.map(sn)}:{},h={tag:"g",attributes:c({},m.inner),children:[sn(c({tag:f.tag,attributes:c({},f.attributes,m.path)},p))]},g={tag:"g",attributes:c({},m.outer),children:[h]},y="mask-".concat(tn()),b="clip-".concat(tn()),v={tag:"mask",attributes:c({},cn,{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,g]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(t=u,"g"===t.tag?t.children:[t])},v]};return e.push(w,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(y,")")},cn)}),{children:e,attributes:r}}(v):function(n){var t=n.children,e=n.attributes,r=n.main,a=n.transform,i=rn(n.styles);if(i.length>0&&(e.style=i),an(a)){var o=on({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:c({},o.outer),children:[{tag:"g",attributes:c({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:e}}(v),k=w.children,_=w.attributes;return v.children=k,v.attributes=_,s?function(n){var t=n.prefix,e=n.iconName,r=n.children,a=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},a,{id:!0===i?"".concat(t,"-").concat(C.familyPrefix,"-").concat(e):i}),children:r}]}]}(v):function(n){var t=n.children,e=n.main,r=n.mask,a=n.attributes,i=n.styles,o=n.transform;if(an(o)&&e.found&&!r.found){var s={x:e.width/e.height/2,y:.5};a.style=rn(c({},i,{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(v)}var ln=function(){},un=(C.measurePerformance&&y&&y.mark&&y.measure,function(n,t,e,r){var a,i,o,c=Object.keys(n),s=c.length,f=void 0!==r?function(n,t){return function(e,r,a,i){return n.call(t,e,r,a,i)}}(t,r):t;for(void 0===e?(a=1,o=n[c[0]]):(a=0,o=e);a<s;a++)o=f(o,n[i=c[a]],i,n);return o});function mn(n,t){var e=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==e&&e,a=Object.keys(t).reduce((function(n,e){var r=t[e];return!!r.icon?n[r.iconName]=r.icon:n[e]=r,n}),{});"function"!=typeof A.hooks.addPack||r?A.styles[n]=c({},A.styles[n]||{},a):A.hooks.addPack(n,a),"fas"===n&&mn("fa",t)}var dn=A.styles,pn=A.shims,hn=function(){var n=function(n){return un(dn,(function(t,e,r){return t[r]=un(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var r=t[2];return n[e]=e,r.forEach((function(t){n[t]=e})),n}));var t="far"in dn;un(pn,(function(n,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||t||(a="fas"),n[r]={prefix:a,iconName:i},n}),{})};hn();A.styles;function gn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function yn(n){var t=n.tag,e=n.attributes,r=void 0===e?{}:e,a=n.children,i=void 0===a?[]:a;return"string"==typeof n?en(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(en(n[e]),'" ')}),"").trim()}(r),">").concat(i.map(yn).join(""),"</").concat(t,">")}var bn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return n.flipX=!0,n;if(r&&"v"===a)return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a}return n}),t):t};function vn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}vn.prototype=Object.create(Error.prototype),vn.prototype.constructor=vn;var wn={fill:"currentColor"},xn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},kn={tag:"path",attributes:c({},wn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},_n=c({},xn,{attributeName:"opacity"});c({},wn,{cx:"256",cy:"364",r:"28"}),c({},xn,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},_n,{values:"1;0;1;1;0;1;"}),c({},wn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},_n,{values:"1;0;0;0;0;1;"}),c({},wn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},_n,{values:"0;0;1;1;0;0;"}),A.styles;function On(n){var t=n[0],e=n[1],r=s(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(C.familyPrefix,"-").concat(O.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.familyPrefix,"-").concat(O.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(C.familyPrefix,"-").concat(O.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}A.styles;var zn='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function En(){var n=v,t=w,e=C.familyPrefix,r=C.replacementClass,a=zn;if(e!==n||r!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(c,".".concat(r))}return a}function Cn(){C.autoAddCss&&!Pn&&($(En()),Pn=!0)}function Mn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return yn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(b){var t=g.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function An(n){var t=n.prefix,e=void 0===t?"fa":t,r=n.iconName;if(r)return gn(Tn.definitions,e,r)||gn(A.styles,e,r)}var jn,Tn=new(function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,r;return t=n,(e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(t){n.definitions[t]=c({},n.definitions[t]||{},a[t]),mn(t,a[t]),hn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var r=e[t],a=r.prefix,i=r.iconName,o=r.icon;n[a]||(n[a]={}),n[a][i]=o})),n}}])&&i(t.prototype,e),r&&i(t,r),n}()),Pn=!1,In={transform:function(n){return bn(n)}},Sn=(jn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,r=void 0===e?Q:e,a=t.symbol,i=void 0!==a&&a,o=t.mask,s=void 0===o?null:o,f=t.title,l=void 0===f?null:f,u=t.classes,m=void 0===u?[]:u,d=t.attributes,p=void 0===d?{}:d,h=t.styles,g=void 0===h?{}:h;if(n){var y=n.prefix,b=n.iconName,v=n.icon;return Mn(c({type:"icon"},n),(function(){return Cn(),C.autoA11y&&(l?p["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(tn()):(p["aria-hidden"]="true",p.focusable="false")),fn({icons:{main:On(v),mask:s?On(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:b,transform:c({},Q,r),symbol:i,title:l,extra:{attributes:p,styles:g,classes:m}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:An(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:An(r||{})),jn(e,c({},t,{mask:r}))})}).call(this,e(118),e(258).setImmediate)},258:function(n,t,e){(function(n){var r=void 0!==n&&n||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function i(n,t){this._id=n,this._clearFn=t}t.setTimeout=function(){return new i(a.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(n){n&&n.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(n,t){clearTimeout(n._idleTimeoutId),n._idleTimeout=t},t.unenroll=function(n){clearTimeout(n._idleTimeoutId),n._idleTimeout=-1},t._unrefActive=t.active=function(n){clearTimeout(n._idleTimeoutId);var t=n._idleTimeout;t>=0&&(n._idleTimeoutId=setTimeout((function(){n._onTimeout&&n._onTimeout()}),t))},e(259),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==n&&n.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==n&&n.clearImmediate||this&&this.clearImmediate}).call(this,e(118))},259:function(n,t,e){(function(n,t){e(2),e(10),function(n,e){"use strict";if(!n.setImmediate){var r,a,i,o,c,s=1,f={},l=!1,u=n.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(n);m=m&&m.setTimeout?m:n,"[object process]"==={}.toString.call(n.process)?r=function(n){t.nextTick((function(){p(n)}))}:!function(){if(n.postMessage&&!n.importScripts){var t=!0,e=n.onmessage;return n.onmessage=function(){t=!1},n.postMessage("","*"),n.onmessage=e,t}}()?n.MessageChannel?((i=new MessageChannel).port1.onmessage=function(n){p(n.data)},r=function(n){i.port2.postMessage(n)}):u&&"onreadystatechange"in u.createElement("script")?(a=u.documentElement,r=function(n){var t=u.createElement("script");t.onreadystatechange=function(){p(n),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):r=function(n){setTimeout(p,0,n)}:(o="setImmediate$"+Math.random()+"$",c=function(t){t.source===n&&"string"==typeof t.data&&0===t.data.indexOf(o)&&p(+t.data.slice(o.length))},n.addEventListener?n.addEventListener("message",c,!1):n.attachEvent("onmessage",c),r=function(t){n.postMessage(o+t,"*")}),m.setImmediate=function(n){"function"!=typeof n&&(n=new Function(""+n));for(var t=new Array(arguments.length-1),e=0;e<t.length;e++)t[e]=arguments[e+1];var a={callback:n,args:t};return f[s]=a,r(s),s++},m.clearImmediate=d}function d(n){delete f[n]}function p(n){if(l)setTimeout(p,0,n);else{var t=f[n];if(t){l=!0;try{!function(n){var t=n.callback,r=n.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(e,r)}}(t)}finally{d(n),l=!1}}}}}("undefined"==typeof self?void 0===n?this:n:self)}).call(this,e(118),e(166))},260:function(n,t,e){var r=e(1);r(r.P,"Array",{fill:e(261)}),e(90)("fill")},261:function(n,t,e){"use strict";var r=e(32),a=e(165),i=e(28);n.exports=function(n){for(var t=r(this),e=i(t.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,e),s=o>2?arguments[2]:void 0,f=void 0===s?e:a(s,e);f>c;)t[c++]=n;return t}},262:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return a}));var r={prefix:"fas",iconName:"tag",icon:[512,512,[],"f02b","M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"]},a={prefix:"fas",iconName:"tags",icon:[640,512,[],"f02c","M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"]}},263:function(n,t,e){"use strict";var r=e(0),a=e.n(r),i=e(57),o=e(13),c=e(255),s=o.b.h3.withConfig({displayName:"PostCard__PostTitle",componentId:"sc-1jihatb-0"})(["margin-top:0.5rem;margin-bottom:0.25rem;"]),f=Object(o.b)(i.Link).withConfig({displayName:"PostCard__PostContainer",componentId:"sc-1jihatb-1"})(["display:flex;flex-direction:column;position:relative;color:",";background:",";box-shadow:0px 0px 50px #0000001a;border-radius:6px;padding:1rem;margin-bottom:48px;transition:all 150ms cubic-bezier(0.55,0,0.1,1);&:hover{box-shadow:0px 0px 75px #00000012;}"],(function(n){return n.theme.secondaryColor}),(function(n){return n.theme.card.background})),l=o.b.span.withConfig({displayName:"PostCard__CategoryLabel",componentId:"sc-1jihatb-2"})(["background:#df3131;position:absolute;color:white;right:15px;font-size:0.8rem;top:0;padding:3px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;white-space:nowrap;overflow:hidden;max-width:15ch;"]);t.a=function(n){var t=n.post,e=t.html,r=t.fields,i=r.slug,o=r.category,u=t.frontmatter,m=u.title,d=u.date,p=u.description,h=Object(c.getReadingTime)(e);return a.a.createElement(f,{to:i},a.a.createElement(l,null,o),a.a.createElement(s,null,m),a.a.createElement("small",null,d," | ",h),a.a.createElement("p",{style:{marginBottom:"0.5rem"}},p))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-js-2fadcee504687051bfda.js.map