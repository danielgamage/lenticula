!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="./",e(0)}([function(t,e,n){"use strict";function i(){var t=n(4).default;o=(0,r.render)((0,r.h)(t,null),document.body,o)}var r=n(1);n(12);var o=void 0;n(8),i()},function(t,e,n){!function(t,n){n(e)}(this,function(t){function e(t,e,n){this.nodeName=t,this.attributes=e,this.children=n,this.key=e&&e.key}function n(t,n){var i,r,o,a,s;for(s=arguments.length;s-- >2;)T.push(arguments[s]);for(n&&n.children&&(T.length||T.push(n.children),delete n.children);T.length;)if((o=T.pop())instanceof Array)for(s=o.length;s--;)T.push(o[s]);else null!=o&&o!==!0&&o!==!1&&("number"==typeof o&&(o=String(o)),a="string"==typeof o,a&&r?i[i.length-1]+=o:((i||(i=[])).push(o),r=a));var u=new e(t,n||void 0,i||z);return R.vnode&&R.vnode(u),u}function i(t,e){if(e)for(var n in e)t[n]=e[n];return t}function r(t){return i({},t)}function o(t,e){for(var n=e.split("."),i=0;i<n.length&&t;i++)t=t[n[i]];return t}function a(t){return"function"==typeof t}function s(t){return"string"==typeof t}function u(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function c(t,e){return n(t.nodeName,i(r(t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function l(t,e,n){var i=e.split(".");return function(e){for(var r=e&&e.target||this,a={},u=a,c=s(n)?o(e,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:e,l=0;l<i.length-1;l++)u=u[i[l]]||(u[i[l]]=!l&&t.state[i[l]]||{});u[i[l]]=c,t.setState(a)}}function f(t){!t._dirty&&(t._dirty=!0)&&1==$.push(t)&&(R.debounceRendering||G)(h)}function h(){var t,e=$;for($=[];t=e.pop();)t._dirty&&W(t)}function d(t){var e=t&&t.nodeName;return e&&a(e)&&!(e.prototype&&e.prototype.render)}function p(t,e){return t.nodeName(g(t),e||F)}function v(t,e){return s(e)?t instanceof Text:s(e.nodeName)?!t._componentConstructor&&m(t,e.nodeName):a(e.nodeName)?!t._componentConstructor||t._componentConstructor===e.nodeName||d(e):void 0}function m(t,e){return t.normalizedNodeName===e||B(t.nodeName)===B(e)}function g(t){var e=r(t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(n)for(var i in n)void 0===e[i]&&(e[i]=n[i]);return e}function y(t){var e=t.parentNode;e&&e.removeChild(t)}function b(t,e,n,i,r){if("className"===e&&(e="class"),"class"===e&&i&&"object"==typeof i&&(i=u(i)),"key"===e);else if("class"!==e||r)if("style"===e){if((!i||s(i)||s(n))&&(t.style.cssText=i||""),i&&"object"==typeof i){if(!s(n))for(var o in n)o in i||(t.style[o]="");for(var o in i)t.style[o]="number"!=typeof i[o]||V[o]?i[o]:i[o]+"px"}}else if("dangerouslySetInnerHTML"===e)i&&(t.innerHTML=i.__html||"");else if("o"==e[0]&&"n"==e[1]){var c=t._listeners||(t._listeners={});e=B(e.substring(2)),i?c[e]||t.addEventListener(e,w,!!X[e]):c[e]&&t.removeEventListener(e,w,!!X[e]),c[e]=i}else if("list"!==e&&"type"!==e&&!r&&e in t)_(t,e,null==i?"":i),null!=i&&i!==!1||t.removeAttribute(e);else{var l=r&&e.match(/^xlink\:?(.+)/);null==i||i===!1?l?t.removeAttributeNS("http://www.w3.org/1999/xlink",B(l[1])):t.removeAttribute(e):"object"==typeof i||a(i)||(l?t.setAttributeNS("http://www.w3.org/1999/xlink",B(l[1]),i):t.setAttribute(e,i))}else t.className=i||""}function _(t,e,n){try{t[e]=n}catch(t){}}function w(t){return this._listeners[t.type](R.event&&R.event(t)||t)}function x(t){if(y(t),t instanceof Element){t._component=t._componentConstructor=null;var e=t.normalizedNodeName||B(t.nodeName);(J[e]||(J[e]=[])).push(t)}}function k(t,e){var n=B(t),i=J[n]&&J[n].pop()||(e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t));return i.normalizedNodeName=n,i}function C(){for(var t;t=Q.pop();)R.afterMount&&R.afterMount(t),t.componentDidMount&&t.componentDidMount()}function O(t,e,n,i,r,o){Z++||(Y=r&&"undefined"!=typeof r.ownerSVGElement,tt=t&&!(K in t));var a=M(t,e,n,i);return r&&a.parentNode!==r&&r.appendChild(a),--Z||(tt=!1,o||C()),a}function M(t,e,n,i){for(var r=e&&e.attributes&&e.attributes.ref;d(e);)e=p(e,n);if(null==e&&(e=""),s(e))return t&&t instanceof Text&&t.parentNode?t.nodeValue!=e&&(t.nodeValue=e):(t&&j(t),t=document.createTextNode(e)),t;if(a(e.nodeName))return E(t,e,n,i);var o=t,u=String(e.nodeName),c=Y,l=e.children;if(Y="svg"===u||"foreignObject"!==u&&Y,t){if(!m(t,u)){for(o=k(u,Y);t.firstChild;)o.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(o,t),j(t)}}else o=k(u,Y);var f=o.firstChild,h=o[K];if(!h){o[K]=h={};for(var v=o.attributes,g=v.length;g--;)h[v[g].name]=v[g].value}return!tt&&l&&1===l.length&&"string"==typeof l[0]&&f&&f instanceof Text&&!f.nextSibling?f.nodeValue!=l[0]&&(f.nodeValue=l[0]):(l&&l.length||f)&&P(o,l,n,i,!!h.dangerouslySetInnerHTML),A(o,e.attributes,h),r&&(h.ref=r)(o),Y=c,o}function P(t,e,n,i,r){var o,a,s,u,c=t.childNodes,l=[],f={},h=0,d=0,p=c.length,m=0,g=e&&e.length;if(p)for(var b=0;b<p;b++){var _=c[b],w=_[K],x=g?(a=_._component)?a.__key:w?w.key:null:null;null!=x?(h++,f[x]=_):(tt||r||w||_ instanceof Text)&&(l[m++]=_)}if(g)for(var b=0;b<g;b++){s=e[b],u=null;var x=s.key;if(null!=x)h&&x in f&&(u=f[x],f[x]=void 0,h--);else if(!u&&d<m)for(o=d;o<m;o++)if(a=l[o],a&&v(a,s)){u=a,l[o]=void 0,o===m-1&&m--,o===d&&d++;break}u=M(u,s,n,i),u&&u!==t&&(b>=p?t.appendChild(u):u!==c[b]&&(u===c[b+1]&&y(c[b]),t.insertBefore(u,c[b]||null)))}if(h)for(var b in f)f[b]&&j(f[b]);for(;d<=m;)u=l[m--],u&&j(u)}function j(t,e){var n=t._component;if(n)L(n,!e);else{t[K]&&t[K].ref&&t[K].ref(null),e||x(t);for(var i;i=t.lastChild;)j(i,e)}}function A(t,e,n){var i;for(i in n)e&&i in e||null==n[i]||b(t,i,n[i],n[i]=void 0,Y);if(e)for(i in e)"children"===i||"innerHTML"===i||i in n&&e[i]===("value"===i||"checked"===i?t[i]:n[i])||b(t,i,n[i],n[i]=e[i],Y)}function N(t){var e=t.constructor.name,n=et[e];n?n.push(t):et[e]=[t]}function U(t,e,n){var i=new t(e,n),r=et[t.name];if(I.call(i,e,n),r)for(var o=r.length;o--;)if(r[o].constructor===t){i.nextBase=r[o].nextBase,r.splice(o,1);break}return i}function S(t,e,n,i,r){t._disable||(t._disable=!0,(t.__ref=e.ref)&&delete e.ref,(t.__key=e.key)&&delete e.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,i),i&&i!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=i),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&R.syncComponentUpdates===!1&&t.base?f(t):W(t,1,r)),t.__ref&&t.__ref(t))}function W(t,e,n,o){if(!t._disable){var s,u,c,l,f=t.props,h=t.state,v=t.context,m=t.prevProps||f,y=t.prevState||h,b=t.prevContext||v,_=t.base,w=t.nextBase,x=_||w,k=t._component;if(_&&(t.props=m,t.state=y,t.context=b,2!==e&&t.shouldComponentUpdate&&t.shouldComponentUpdate(f,h,v)===!1?s=!0:t.componentWillUpdate&&t.componentWillUpdate(f,h,v),t.props=f,t.state=h,t.context=v),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!s){for(t.render&&(u=t.render(f,h,v)),t.getChildContext&&(v=i(r(v),t.getChildContext()));d(u);)u=p(u,v);var M,P,A=u&&u.nodeName;if(a(A)){var N=g(u);c=k,c&&c.constructor===A&&N.key==c.__key?S(c,N,1,v):(M=c,c=U(A,N,v),c.nextBase=c.nextBase||w,c._parentComponent=t,t._component=c,S(c,N,0,v),W(c,1,n,!0)),P=c.base}else l=x,M=k,M&&(l=t._component=null),(x||1===e)&&(l&&(l._component=null),P=O(l,u,v,n||!_,x&&x.parentNode,!0));if(x&&P!==x&&c!==k){var E=x.parentNode;E&&P!==E&&(E.replaceChild(P,x),M||(x._component=null,j(x)))}if(M&&L(M,P!==x),t.base=P,P&&!o){for(var I=t,D=t;D=D._parentComponent;)(I=D).base=P;P._component=I,P._componentConstructor=I.constructor}}!_||n?Q.unshift(t):s||(t.componentDidUpdate&&t.componentDidUpdate(m,y,b),R.afterUpdate&&R.afterUpdate(t));var T,z=t._renderCallbacks;if(z)for(;T=z.pop();)T.call(t);Z||o||C()}}function E(t,e,n,i){for(var r=t&&t._component,o=r,a=t,s=r&&t._componentConstructor===e.nodeName,u=s,c=g(e);r&&!u&&(r=r._parentComponent);)u=r.constructor===e.nodeName;return r&&u&&(!i||r._component)?(S(r,c,3,n,i),t=r.base):(o&&!s&&(L(o,!0),t=a=null),r=U(e.nodeName,c,n),t&&!r.nextBase&&(r.nextBase=t,a=null),S(r,c,1,n,i),t=r.base,a&&t!==a&&(a._component=null,j(a))),t}function L(t,e){R.beforeUnmount&&R.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var i=t._component;if(i)L(i,e);else if(n){n[K]&&n[K].ref&&n[K].ref(null),t.nextBase=n,e&&(y(n),N(t));for(var r;r=n.lastChild;)j(r,!e)}t.__ref&&t.__ref(null),t.componentDidUnmount&&t.componentDidUnmount()}function I(t,e){this._dirty=!0,this.context=e,this.props=t,this.state||(this.state={})}function D(t,e,n){return O(n,t,{},!1,e)}var R={},T=[],z=[],H={},B=function(t){return H[t]||(H[t]=t.toLowerCase())},q="undefined"!=typeof Promise&&Promise.resolve(),G=q?function(t){q.then(t)}:setTimeout,F={},K="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",V={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},X={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},$=[],J={},Q=[],Z=0,Y=!1,tt=!1,et={};i(I.prototype,{linkState:function(t,e){var n=this._linkedStates||(this._linkedStates={});return n[t+e]||(n[t+e]=l(this,t,e))},setState:function(t,e){var n=this.state;this.prevState||(this.prevState=r(n)),i(n,a(t)?t(n,this.props):t),e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),f(this)},forceUpdate:function(){W(this,2)},render:function(){}}),t.h=n,t.cloneElement=c,t.Component=I,t.render=D,t.rerender=h,t.options=R})},function(t,e,n){!function(e,i){t.exports=i(n(1))}(this,function(t){"use strict";function e(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,r=/(?:\?([^#]*))?(#.*)?$/,o=t.match(r),a={},s=void 0;if(o&&o[1])for(var u=o[1].split("&"),c=0;c<u.length;c++){var l=u[c].split("=");a[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=i(t.replace(r,"")),e=i(e||"");for(var f=Math.max(t.length,e.length),h=0;h<f;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^\:|[+*?]+$)/g,""),p=(e[h].match(/[+*?]+$/)||_)[0]||"",v=~p.indexOf("+"),m=~p.indexOf("*"),g=t[h]||"";if(!g&&!m&&(p.indexOf("?")<0||v)){s=!1;break}if(a[d]=decodeURIComponent(g),v||m){a[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){s=!1;break}return(n.default===!0||s!==!1)&&a}function n(t,e){var n=t.attributes||_,i=e.attributes||_;if(n.default)return 1;if(i.default)return-1;var o=r(n.path)-r(i.path);return o||n.path.length-i.path.length}function i(t){return o(t).split("/")}function r(t){return(o(t).match(/\/+/g)||"").length}function o(t){return t.replace(/(^\/+|\/+$)/g,"")}function a(t,e){}function s(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}function c(t){return O in t}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"push";x&&x[e]?x[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function f(){var t=void 0;return t=x&&x.location?x.location:x&&x.getCurrentLocation?x.getCurrentLocation():"undefined"!=typeof location?location:C,""+(t.pathname||"")+(t.search||"")}function h(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),d(t)&&l(t,e?"replace":"push"),p(t)}function d(t){for(var e=k.length;e--;)if(k[e].canRoute(t))return!0;return!1}function p(t){for(var e=!1,n=0;n<k.length;n++)k[n].routeTo(t)===!0&&(e=!0);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return h(e)}}function m(t){if(0===t.button)return v(t.currentTarget||t.target||this),g(t)}function g(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey)){var e=t.target;do if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&c(e)){if(0!==t.button)return;if(v(e))return g(t)}while(e=e.parentNode)}}function b(){M||("function"==typeof addEventListener&&(x||addEventListener("popstate",function(){return p(f())}),addEventListener("click",y)),M=!0)}var _={},w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},x=null,k=[],C={},O="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",M=!1,P=function(e){return t.h("a",w({},e,{onClick:m}))},j=function(t){function i(e){a(this,i);var n=s(this,t.call(this,e));return e.history&&(x=e.history),n.state={url:n.props.url||f()},b(),n}return u(i,t),i.prototype.shouldComponentUpdate=function(t){return t.static!==!0||t.url!==this.props.url||t.onChange!==this.props.onChange},i.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},i.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},i.prototype.componentWillMount=function(){k.push(this),this.updating=!0},i.prototype.componentDidMount=function(){var t=this;x&&(this.unlisten=x.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},i.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),k.splice(k.indexOf(this),1)},i.prototype.componentWillUpdate=function(){this.updating=!0},i.prototype.componentDidUpdate=function(){this.updating=!1},i.prototype.getMatchingChildren=function(t,i,r){return t.slice().sort(n).filter(function(t){var n=t.attributes,o=n.path,a=e(i,o,n);if(a){if(r!==!1){n.url=i,n.matches=a;for(var s in a)a.hasOwnProperty(s)&&(n[s]=a[s])}return!0}})},i.prototype.render=function(t,e){var n=t.children,i=t.onChange,r=e.url,o=this.getMatchingChildren(n,r,!0),a=o[0]||null;this._didRoute=!!a;var s=this.previousUrl;return r!==s&&(this.previousUrl=r,"function"==typeof i&&i({router:this,url:r,previous:s,active:o,current:a})),a},i}(t.Component),A=function(e){var n=e.component,i=e.url,r=e.matches;return t.h(n,{url:i,matches:r})};return j.route=h,j.Router=j,j.Route=A,j.Link=P,j})},function(t,e){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){i(this,t),this.container=e.container,this.accelerometerEvents=e.accelerometerEvents||!0,this.mouseEvents=e.mouseEvents||!0,this.stripWidth=e.stripWidth||16,this.height=e.height||50,this.width=e.width||50,this.tiltMax=e.tiltMax||45,this.tiltMin=e.tiltMin||-45,this.bindEvents=this.bindEvents.bind(this),this.init=this.init.bind(this),this.sampleImages=this.sampleImages.bind(this),this.getImage=this.getImage.bind(this),this.handleSizing=this.handleSizing.bind(this),this.bindEvents=this.bindEvents.bind(this),this.destroy=this.destroy.bind(this),this.redraw=this.redraw.bind(this),this.handleMouse=this.handleMouse.bind(this),this.handleOrientation=this.handleOrientation.bind(this),this.remap=this.remap.bind(this)}return r(t,[{key:"init",value:function(){this.images=[].concat(n(this.container.querySelectorAll("img"))),this.imageCount=this.images.length,this.imageDataArray=[].concat(n(Array(this.imageCount).keys())),this.container.innerHTML+="<canvas />",this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.handleSizing(),this.bindEvents()}},{key:"sampleImages",value:function(){var t=this;this.images.map(function(e,n){if(!t.imageDataArray[0]){var i=new window.Image;return i.addEventListener("load",function(){this.getImage(e,n)}.bind(t)),i.crossOrigin="Anonymous",i.src=e.src,e}t.getImage(e,n)})}},{key:"getImage",value:function(t,e){this.ctx.drawImage(t,0,0,t.naturalWidth,t.naturalHeight,0,0,this.canvasWidth,this.canvasHeight);var n=this.ctx.getImageData(0,0,this.canvasWidth,this.canvasHeight);this.imageDataArray[e]=new Uint32Array(n.data.buffer)}},{key:"handleSizing",value:function(){this.canvasWidth=Math.floor(this.canvas.offsetWidth*window.devicePixelRatio),this.canvasHeight=Math.floor(this.canvasWidth*(this.height/this.width)),this.canvas.setAttribute("width",this.canvasWidth),this.canvas.setAttribute("height",this.canvasHeight),this.sampleImages(),this.imageData=this.ctx.getImageData(0,0,this.canvasWidth,this.canvasHeight)}},{key:"bindEvents",value:function(){this.mouseEvents&&this.canvas.addEventListener("mousemove",this.handleMouse),this.accelerometerEvents&&window.addEventListener("deviceorientation",this.handleOrientation),window.addEventListener("resize",this.handleSizing)}},{key:"destroy",value:function(){this.canvas.addEventListener("mousemove",this.handleMouse),window.addEventListener("deviceorientation",this.handleOrientation),window.removeEventListener("resize",this.handleSizing)}},{key:"redraw",value:function(t){if(this.imageDataArray[0]){for(var e=this.imageData.data,n=new Uint32Array(e.buffer),i=this.imageDataArray,r=this.canvasWidth,o=this.canvasHeight,a=this.stripWidth,s=this.imageCount,u=t*s-.5,c=0;c<r;c++)for(var l=c%a/a+u,f=Math.floor(Math.min(Math.max(l,0),s-1)),h=0;h<o;h++){var d=c+r*h;n[d]=i[f][d]}this.ctx.putImageData(this.imageData,0,0,0,0,this.canvasWidth,this.canvasHeight)}}},{key:"handleMouse",value:function(t){var e=this.remap(t.offsetX/this.canvasWidth,0,1,1,0);this.redraw(e)}},{key:"handleOrientation",value:function(t){console.log(t);var e=Math.min(Math.max(t.gamma,this.tiltMin),this.tiltMax),n=this.remap(e,this.tiltMin,this.tiltMax,1,0);this.redraw(n)}},{key:"remap",value:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}}]),t}();e.default=o},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){}function o(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(1),c=(n(2),n(5)),l=i(c),f=n(6),h=i(f),d=n(7),p=(i(d),function(t){function e(){var t,n,i,a;r(this,e);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),i.handleRoute=function(t){i.currentUrl=t.url},a=n,o(i,a)}return a(e,t),s(e,[{key:"render",value:function(){return(0,u.h)("div",{id:"app"},(0,u.h)(l.default,null),(0,u.h)(h.default,null))}}]),e}(u.Component));e.default=p},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){}function o(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(1),c=(n(2),n(9)),l=i(c),f=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"render",value:function(){return(0,u.h)("header",{class:l.default.header},(0,u.h)("h1",null,"Lenti"),(0,u.h)("nav",null,(0,u.h)("a",{href:"https://github.com/danielgamage/lenti",target:"_blank"},"Github")))}}]),e}(u.Component);e.default=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){}function a(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=n(1),l=n(10),f=i(l),h=n(3),d=i(h),p=function(t){function e(){return o(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),u(e,[{key:"componentDidMount",value:function(){var t=document.querySelectorAll("[data-lenticular-list]"),e=[];[].concat(r(t)).map(function(t,n){var i=t.querySelector("img");e[n]=new d.default({container:t,width:i.width,height:i.height,stripWidth:t.getAttribute("data-strip-width")}),e[n].init()})}},{key:"render",value:function(){return(0,c.h)("div",{class:f.default.home},(0,c.h)("div",{class:f.default.header},(0,c.h)("div",{class:f.default.main,"data-lenticular-list":"true","data-strip-width":"24"},(0,c.h)("img",{src:"./assets/images/Lenti1.png",crossorigin:"anonymous",alt:"",width:"1920",height:"1080"}),(0,c.h)("img",{src:"./assets/images/Lenti2.png",crossorigin:"anonymous",alt:"",width:"1920",height:"1080"}),(0,c.h)("img",{src:"./assets/images/Lenti3.png",crossorigin:"anonymous",alt:"",width:"1920",height:"1080"})),(0,c.h)("div",{class:f.default.trio},(0,c.h)("img",{src:"./assets/images/Lenti1.png",crossorigin:"anonymous",alt:"",width:"1920",height:"1080"}),(0,c.h)("img",{src:"./assets/images/Lenti2.png",crossorigin:"anonymous",alt:"",width:"1920",height:"1080"}),(0,c.h)("img",{src:"./assets/images/Lenti3.png",crossorigin:"anonymous",alt:"",width:"1920",height:"1080"}))),(0,c.h)("h2",null,"Lenticular image viewer"),(0,c.h)("p",null,"Lenti is an image viewer that mimicks the effect of lenticular printing. It displays images in a ",(0,c.h)("code",null,"canvas")," element and binds events for mouse and accelerometer events, so just as you would rotate a card or print with lenticular lenses on it, you can tilt your phone to transition between images."),(0,c.h)("div",{class:f.default.small},(0,c.h)("div",{"data-lenticular-list":"true","data-strip-width":"8"},(0,c.h)("img",{src:"./assets/images/Artboard-1.png",crossorigin:"anonymous",alt:"",width:"1024",height:"1024"}),(0,c.h)("img",{src:"./assets/images/Artboard-2.png",crossorigin:"anonymous",alt:"",width:"1024",height:"1024"}),(0,c.h)("img",{src:"./assets/images/Artboard-3.png",crossorigin:"anonymous",alt:"",width:"1024",height:"1024"}),(0,c.h)("img",{src:"./assets/images/Artboard-4.png",crossorigin:"anonymous",alt:"",width:"1024",height:"1024"}))),(0,c.h)("p",null,"Lenti will accomodate any number of images in the container (be good to your RAM and don’t go wild, though)."))}}]),e}(c.Component);e.default=p},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){}function o(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(1),c=n(11),l=i(c),f=function(t){function e(){var t,n,i,a;r(this,e);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),i.state={count:0},a=n,o(i,a)}return a(e,t),s(e,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.updateTime.bind(this),1e3),this.updateTime(),this.setState({count:this.state.count+1})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"updateTime",value:function(){var t=(new Date).toLocaleString();this.setState({time:t})}},{key:"render",value:function(t,e){var n=t.user,i=e.time,r=e.count;return(0,u.h)("div",{class:l.default.profile},(0,u.h)("h1",null,"Profile: ",n),(0,u.h)("p",null,"This is the user profile for a user named ",n,"."),(0,u.h)("div",null,"Current time: ",i),(0,u.h)("div",null,"Profile route mounted ",r," times."))}}]),e}(u.Component);e.default=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(13),o=i(r);o.default.install({onUpdateReady:function(){console.log("update ready"),o.default.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},function(t,e){t.exports={header:"_3fP58XuPgCmDWOEWzAZZKf"}},function(t,e){t.exports={home:"_2xyY27-hSytDZNDhO4G8vI",header:"_3TAxCBIGDgrm0hELLEXRa_",main:"_1UDBircuf-0U5lA3hdJ86n",trio:"JUfFuvlq0Aspcvu7iQg1P",small:"_3NE25LMhqWEgXb6IOTRF7C"}},function(t,e){t.exports={profile:"JmD9RgpseyQdqQb9x-LXt"}},function(t,e){},function(t,e){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function i(t){if(t||(t={}),n()){var e=navigator.serviceWorker.register("/sw.js"),i=function(t){function e(){switch(a.state){case"redundant":r("onUpdateFailed"),a.onstatechange=null;break;case"installing":i||r("onUpdating");break;case"installed":o||r("onUpdateReady");break;case"activated":r("onUpdated"),a.onstatechange=null}}function n(){switch(a.state){case"redundant":a.onstatechange=null;break;case"installing":break;case"installed":break;case"activated":r("onInstalled"),a.onstatechange=null}}var i,o,a=t.installing||t.waiting;if(a&&!a.onstatechange){var s;t.active?(e(),s=e):(n(),s=n),i=!0,t.waiting&&(o=!0),a.onstatechange=s}},r=function(e){"function"==typeof t[e]&&t[e]({source:"ServiceWorker"})};return void e.then(function(t){t&&(i(t),t.onupdatefound=function(){i(t)})}).catch(function(t){return r("onError"),Promise.reject(t)})}}function r(t,e){if(n())return void navigator.serviceWorker.getRegistration().then(function(n){return n&&n.waiting?(n.waiting.postMessage({action:"skipWaiting"}),void(t&&t())):void(e&&e())})}function o(){n()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()})}e.install=i,e.applyUpdate=r,e.update=o}]);
//# sourceMappingURL=bundle.js.map