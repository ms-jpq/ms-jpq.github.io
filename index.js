(()=>{var j=Object.create;var F=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var rt=Reflect.get,ot=Reflect.set;var J=d=>F(d,"__esModule",{value:!0});var x=(d,h)=>()=>(h||d((h={exports:{}}).exports,h),h.exports);var K=(d,h,g)=>{if(h&&typeof h=="object"||typeof h=="function")for(let f of X(h))!Z.call(d,f)&&f!=="default"&&F(d,f,{get:()=>h[f],enumerable:!(g=V(h,f))||g.enumerable});return d},tt=d=>K(J(F(d!=null?j($(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:!0}:{value:d,enumerable:!0})),d);var A=x((q,L)=>{(function(d,h){typeof define=="function"&&define.amd?define(h):typeof L=="object"&&L.exports?L.exports=h():d.EvEmitter=h()})(typeof window!="undefined"?window:q,function(){"use strict";function d(){}var h=d.prototype;return h.on=function(g,f){if(!(!g||!f)){var u=this._events=this._events||{},a=u[g]=u[g]||[];return a.indexOf(f)==-1&&a.push(f),this}},h.once=function(g,f){if(!(!g||!f)){this.on(g,f);var u=this._onceEvents=this._onceEvents||{},a=u[g]=u[g]||{};return a[f]=!0,this}},h.off=function(g,f){var u=this._events&&this._events[g];if(!(!u||!u.length)){var a=u.indexOf(f);return a!=-1&&u.splice(a,1),this}},h.emitEvent=function(g,f){var u=this._events&&this._events[g];if(!(!u||!u.length)){u=u.slice(0),f=f||[];for(var a=this._onceEvents&&this._onceEvents[g],o=0;o<u.length;o++){var s=u[o],p=a&&a[s];p&&(this.off(g,s),delete a[s]),s.apply(this,f)}return this}},h.allOff=function(){delete this._events,delete this._onceEvents},d})});var C=x((at,O)=>{(function(d,h){typeof define=="function"&&define.amd?define(h):typeof O=="object"&&O.exports?O.exports=h():d.getSize=h()})(window,function(){"use strict";function h(r){var _=parseFloat(r),m=r.indexOf("%")==-1&&!isNaN(_);return m&&_}function g(){}var f=typeof console=="undefined"?g:function(r){console.error(r)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],a=u.length;function o(){for(var r={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},_=0;_<a;_++){var m=u[_];r[m]=0}return r}function s(r){var _=getComputedStyle(r);return _||f("Style returned "+_+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),_}var p=!1,y;function l(){if(!p){p=!0;var r=document.createElement("div");r.style.width="200px",r.style.padding="1px 2px 3px 4px",r.style.borderStyle="solid",r.style.borderWidth="1px 2px 3px 4px",r.style.boxSizing="border-box";var _=document.body||document.documentElement;_.appendChild(r);var m=s(r);y=Math.round(h(m.width))==200,z.isBoxSizeOuter=y,_.removeChild(r)}}function z(r){if(l(),typeof r=="string"&&(r=document.querySelector(r)),!(!r||typeof r!="object"||!r.nodeType)){var _=s(r);if(_.display=="none")return o();var m={};m.width=r.offsetWidth,m.height=r.offsetHeight;for(var e=m.isBorderBox=_.boxSizing=="border-box",t=0;t<a;t++){var i=u[t],n=_[i],c=parseFloat(n);m[i]=isNaN(c)?0:c}var v=m.paddingLeft+m.paddingRight,E=m.paddingTop+m.paddingBottom,b=m.marginLeft+m.marginRight,T=m.marginTop+m.marginBottom,S=m.borderLeftWidth+m.borderRightWidth,I=m.borderTopWidth+m.borderBottomWidth,W=e&&y,D=h(_.width);D!==!1&&(m.width=D+(W?0:v+S));var Y=h(_.height);return Y!==!1&&(m.height=Y+(W?0:E+I)),m.innerWidth=m.width-(v+S),m.innerHeight=m.height-(E+I),m.outerWidth=m.width+b,m.outerHeight=m.height+T,m}}return z})});var k=x((ht,P)=>{(function(d,h){"use strict";typeof define=="function"&&define.amd?define(h):typeof P=="object"&&P.exports?P.exports=h():d.matchesSelector=h()})(window,function(){"use strict";var h=function(){var g=window.Element.prototype;if(g.matches)return"matches";if(g.matchesSelector)return"matchesSelector";for(var f=["webkit","moz","ms","o"],u=0;u<f.length;u++){var a=f[u],o=a+"MatchesSelector";if(g[o])return o}}();return function(f,u){return f[h](u)}})});var N=x((ut,R)=>{(function(d,h){typeof define=="function"&&define.amd?define(["desandro-matches-selector/matches-selector"],function(g){return h(d,g)}):typeof R=="object"&&R.exports?R.exports=h(d,k()):d.fizzyUIUtils=h(d,d.matchesSelector)})(window,function(h,g){"use strict";var f={};f.extend=function(o,s){for(var p in s)o[p]=s[p];return o},f.modulo=function(o,s){return(o%s+s)%s};var u=Array.prototype.slice;f.makeArray=function(o){if(Array.isArray(o))return o;if(o==null)return[];var s=typeof o=="object"&&typeof o.length=="number";return s?u.call(o):[o]},f.removeFrom=function(o,s){var p=o.indexOf(s);p!=-1&&o.splice(p,1)},f.getParent=function(o,s){for(;o.parentNode&&o!=document.body;)if(o=o.parentNode,g(o,s))return o},f.getQueryElement=function(o){return typeof o=="string"?document.querySelector(o):o},f.handleEvent=function(o){var s="on"+o.type;this[s]&&this[s](o)},f.filterFindElements=function(o,s){o=f.makeArray(o);var p=[];return o.forEach(function(y){if(y instanceof HTMLElement){if(!s){p.push(y);return}g(y,s)&&p.push(y);for(var l=y.querySelectorAll(s),z=0;z<l.length;z++)p.push(l[z])}}),p},f.debounceMethod=function(o,s,p){p=p||100;var y=o.prototype[s],l=s+"Timeout";o.prototype[s]=function(){var z=this[l];clearTimeout(z);var r=arguments,_=this;this[l]=setTimeout(function(){y.apply(_,r),delete _[l]},p)}},f.docReady=function(o){var s=document.readyState;s=="complete"||s=="interactive"?setTimeout(o):document.addEventListener("DOMContentLoaded",o)},f.toDashed=function(o){return o.replace(/(.)([A-Z])/g,function(s,p,y){return p+"-"+y}).toLowerCase()};var a=h.console;return f.htmlInit=function(o,s){f.docReady(function(){var p=f.toDashed(s),y="data-"+p,l=document.querySelectorAll("["+y+"]"),z=document.querySelectorAll(".js-"+p),r=f.makeArray(l).concat(f.makeArray(z)),_=y+"-options",m=h.jQuery;r.forEach(function(e){var t=e.getAttribute(y)||e.getAttribute(_),i;try{i=t&&JSON.parse(t)}catch(c){a&&a.error("Error parsing "+y+" on "+e.className+": "+c);return}var n=new o(e,i);m&&m.data(e,s,n)})})},f})});var G=x((ft,M)=>{(function(d,h){typeof define=="function"&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size"],h):typeof M=="object"&&M.exports?M.exports=h(A(),C()):(d.Outlayer={},d.Outlayer.Item=h(d.EvEmitter,d.getSize))})(window,function(h,g){"use strict";function f(e){for(var t in e)return!1;return t=null,!0}var u=document.documentElement.style,a=typeof u.transition=="string"?"transition":"WebkitTransition",o=typeof u.transform=="string"?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],p={transform:o,transition:a,transitionDuration:a+"Duration",transitionProperty:a+"Property",transitionDelay:a+"Delay"};function y(e,t){!e||(this.element=e,this.layout=t,this.position={x:0,y:0},this._create())}var l=y.prototype=Object.create(h.prototype);l.constructor=y,l._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},l.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.getSize=function(){this.size=g(this.element)},l.css=function(e){var t=this.element.style;for(var i in e){var n=p[i]||i;t[n]=e[i]}},l.getPosition=function(){var e=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=e[t?"left":"right"],c=e[i?"top":"bottom"],v=parseFloat(n),E=parseFloat(c),b=this.layout.size;n.indexOf("%")!=-1&&(v=v/100*b.width),c.indexOf("%")!=-1&&(E=E/100*b.height),v=isNaN(v)?0:v,E=isNaN(E)?0:E,v-=t?b.paddingLeft:b.paddingRight,E-=i?b.paddingTop:b.paddingBottom,this.position.x=v,this.position.y=E},l.layoutPosition=function(){var e=this.layout.size,t={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),c=i?"paddingLeft":"paddingRight",v=i?"left":"right",E=i?"right":"left",b=this.position.x+e[c];t[v]=this.getXValue(b),t[E]="";var T=n?"paddingTop":"paddingBottom",S=n?"top":"bottom",I=n?"bottom":"top",W=this.position.y+e[T];t[S]=this.getYValue(W),t[I]="",this.css(t),this.emitEvent("layout",[this])},l.getXValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?e/this.layout.size.width*100+"%":e+"px"},l.getYValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?e/this.layout.size.height*100+"%":e+"px"},l._transitionTo=function(e,t){this.getPosition();var i=this.position.x,n=this.position.y,c=e==this.position.x&&t==this.position.y;if(this.setPosition(e,t),c&&!this.isTransitioning){this.layoutPosition();return}var v=e-i,E=t-n,b={};b.transform=this.getTranslate(v,E),this.transition({to:b,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},l.getTranslate=function(e,t){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return e=i?e:-e,t=n?t:-t,"translate3d("+e+"px, "+t+"px, 0)"},l.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition()},l.moveTo=l._transitionTo,l.setPosition=function(e,t){this.position.x=parseFloat(e),this.position.y=parseFloat(t)},l._nonTransition=function(e){this.css(e.to),e.isCleaning&&this._removeStyles(e.to);for(var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)},l.transition=function(e){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(e);return}var t=this._transn;for(var i in e.onTransitionEnd)t.onEnd[i]=e.onTransitionEnd[i];for(i in e.to)t.ingProperties[i]=!0,e.isCleaning&&(t.clean[i]=!0);if(e.from){this.css(e.from);var n=this.element.offsetHeight;n=null}this.enableTransition(e.to),this.css(e.to),this.isTransitioning=!0};function z(e){return e.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r="opacity,"+z(o);l.enableTransition=function(){if(!this.isTransitioning){var e=this.layout.options.transitionDuration;e=typeof e=="number"?e+"ms":e,this.css({transitionProperty:r,transitionDuration:e,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(s,this,!1)}},l.onwebkitTransitionEnd=function(e){this.ontransitionend(e)},l.onotransitionend=function(e){this.ontransitionend(e)};var _={"-webkit-transform":"transform"};l.ontransitionend=function(e){if(e.target===this.element){var t=this._transn,i=_[e.propertyName]||e.propertyName;if(delete t.ingProperties[i],f(t.ingProperties)&&this.disableTransition(),i in t.clean&&(this.element.style[e.propertyName]="",delete t.clean[i]),i in t.onEnd){var n=t.onEnd[i];n.call(this),delete t.onEnd[i]}this.emitEvent("transitionEnd",[this])}},l.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},l._removeStyles=function(e){var t={};for(var i in e)t[i]="";this.css(t)};var m={transitionProperty:"",transitionDuration:"",transitionDelay:""};return l.removeTransitionStyles=function(){this.css(m)},l.stagger=function(e){e=isNaN(e)?0:e,this.staggerDelay=e+"ms"},l.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},l.remove=function(){if(!a||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},l.reveal=function(){delete this.isHidden,this.css({display:""});var e=this.layout.options,t={},i=this.getHideRevealTransitionEndProperty("visibleStyle");t[i]=this.onRevealTransitionEnd,this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0,onTransitionEnd:t})},l.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},l.getHideRevealTransitionEndProperty=function(e){var t=this.layout.options[e];if(t.opacity)return"opacity";for(var i in t)return i},l.hide=function(){this.isHidden=!0,this.css({display:""});var e=this.layout.options,t={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");t[i]=this.onHideTransitionEnd,this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},l.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},l.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},y})});var w=x((dt,B)=>{(function(d,h){"use strict";typeof define=="function"&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(g,f,u,a){return h(d,g,f,u,a)}):typeof B=="object"&&B.exports?B.exports=h(d,A(),C(),N(),G()):d.Outlayer=h(d,d.EvEmitter,d.getSize,d.fizzyUIUtils,d.Outlayer.Item)})(window,function(h,g,f,u,a){"use strict";var o=h.console,s=h.jQuery,p=function(){},y=0,l={};function z(t,i){var n=u.getQueryElement(t);if(!n){o&&o.error("Bad element for "+this.constructor.namespace+": "+(n||t));return}this.element=n,s&&(this.$element=s(this.element)),this.options=u.extend({},this.constructor.defaults),this.option(i);var c=++y;this.element.outlayerGUID=c,l[c]=this,this._create();var v=this._getOption("initLayout");v&&this.layout()}z.namespace="outlayer",z.Item=a,z.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var r=z.prototype;u.extend(r,g.prototype),r.option=function(t){u.extend(this.options,t)},r._getOption=function(t){var i=this.constructor.compatOptions[t];return i&&this.options[i]!==void 0?this.options[i]:this.options[t]},z.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},r._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),u.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},r.reloadItems=function(){this.items=this._itemize(this.element.children)},r._itemize=function(t){for(var i=this._filterFindItemElements(t),n=this.constructor.Item,c=[],v=0;v<i.length;v++){var E=i[v],b=new n(E,this);c.push(b)}return c},r._filterFindItemElements=function(t){return u.filterFindElements(t,this.options.itemSelector)},r.getItemElements=function(){return this.items.map(function(t){return t.element})},r.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),i=t!==void 0?t:!this._isLayoutInited;this.layoutItems(this.items,i),this._isLayoutInited=!0},r._init=r.layout,r._resetLayout=function(){this.getSize()},r.getSize=function(){this.size=f(this.element)},r._getMeasurement=function(t,i){var n=this.options[t],c;n?(typeof n=="string"?c=this.element.querySelector(n):n instanceof HTMLElement&&(c=n),this[t]=c?f(c)[i]:n):this[t]=0},r.layoutItems=function(t,i){t=this._getItemsForLayout(t),this._layoutItems(t,i),this._postLayout()},r._getItemsForLayout=function(t){return t.filter(function(i){return!i.isIgnored})},r._layoutItems=function(t,i){if(this._emitCompleteOnItems("layout",t),!(!t||!t.length)){var n=[];t.forEach(function(c){var v=this._getItemLayoutPosition(c);v.item=c,v.isInstant=i||c.isLayoutInstant,n.push(v)},this),this._processLayoutQueue(n)}},r._getItemLayoutPosition=function(){return{x:0,y:0}},r._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(i,n){this._positionItem(i.item,i.x,i.y,i.isInstant,n)},this)},r.updateStagger=function(){var t=this.options.stagger;if(t==null){this.stagger=0;return}return this.stagger=e(t),this.stagger},r._positionItem=function(t,i,n,c,v){c?t.goTo(i,n):(t.stagger(v*this.stagger),t.moveTo(i,n))},r._postLayout=function(){this.resizeContainer()},r.resizeContainer=function(){var t=this._getOption("resizeContainer");if(!!t){var i=this._getContainerSize();i&&(this._setContainerMeasure(i.width,!0),this._setContainerMeasure(i.height,!1))}},r._getContainerSize=p,r._setContainerMeasure=function(t,i){if(t!==void 0){var n=this.size;n.isBorderBox&&(t+=i?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),t=Math.max(t,0),this.element.style[i?"width":"height"]=t+"px"}},r._emitCompleteOnItems=function(t,i){var n=this;function c(){n.dispatchEvent(t+"Complete",null,[i])}var v=i.length;if(!i||!v){c();return}var E=0;function b(){E++,E==v&&c()}i.forEach(function(T){T.once(t,b)})},r.dispatchEvent=function(t,i,n){var c=i?[i].concat(n):n;if(this.emitEvent(t,c),s)if(this.$element=this.$element||s(this.element),i){var v=s.Event(i);v.type=t,this.$element.trigger(v,n)}else this.$element.trigger(t,n)},r.ignore=function(t){var i=this.getItem(t);i&&(i.isIgnored=!0)},r.unignore=function(t){var i=this.getItem(t);i&&delete i.isIgnored},r.stamp=function(t){t=this._find(t),!!t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},r.unstamp=function(t){t=this._find(t),!!t&&t.forEach(function(i){u.removeFrom(this.stamps,i),this.unignore(i)},this)},r._find=function(t){if(!!t)return typeof t=="string"&&(t=this.element.querySelectorAll(t)),t=u.makeArray(t),t},r._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},r._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),i=this.size;this._boundingRect={left:t.left+i.paddingLeft+i.borderLeftWidth,top:t.top+i.paddingTop+i.borderTopWidth,right:t.right-(i.paddingRight+i.borderRightWidth),bottom:t.bottom-(i.paddingBottom+i.borderBottomWidth)}},r._manageStamp=p,r._getElementOffset=function(t){var i=t.getBoundingClientRect(),n=this._boundingRect,c=f(t),v={left:i.left-n.left-c.marginLeft,top:i.top-n.top-c.marginTop,right:n.right-i.right-c.marginRight,bottom:n.bottom-i.bottom-c.marginBottom};return v},r.handleEvent=u.handleEvent,r.bindResize=function(){h.addEventListener("resize",this),this.isResizeBound=!0},r.unbindResize=function(){h.removeEventListener("resize",this),this.isResizeBound=!1},r.onresize=function(){this.resize()},u.debounceMethod(z,"onresize",100),r.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},r.needsResizeLayout=function(){var t=f(this.element),i=this.size&&t;return i&&t.innerWidth!==this.size.innerWidth},r.addItems=function(t){var i=this._itemize(t);return i.length&&(this.items=this.items.concat(i)),i},r.appended=function(t){var i=this.addItems(t);!i.length||(this.layoutItems(i,!0),this.reveal(i))},r.prepended=function(t){var i=this._itemize(t);if(!!i.length){var n=this.items.slice(0);this.items=i.concat(n),this._resetLayout(),this._manageStamps(),this.layoutItems(i,!0),this.reveal(i),this.layoutItems(n)}},r.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),!(!t||!t.length)){var i=this.updateStagger();t.forEach(function(n,c){n.stagger(c*i),n.reveal()})}},r.hide=function(t){if(this._emitCompleteOnItems("hide",t),!(!t||!t.length)){var i=this.updateStagger();t.forEach(function(n,c){n.stagger(c*i),n.hide()})}},r.revealItemElements=function(t){var i=this.getItems(t);this.reveal(i)},r.hideItemElements=function(t){var i=this.getItems(t);this.hide(i)},r.getItem=function(t){for(var i=0;i<this.items.length;i++){var n=this.items[i];if(n.element==t)return n}},r.getItems=function(t){t=u.makeArray(t);var i=[];return t.forEach(function(n){var c=this.getItem(n);c&&i.push(c)},this),i},r.remove=function(t){var i=this.getItems(t);this._emitCompleteOnItems("remove",i),!(!i||!i.length)&&i.forEach(function(n){n.remove(),u.removeFrom(this.items,n)},this)},r.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(n){n.destroy()}),this.unbindResize();var i=this.element.outlayerGUID;delete l[i],delete this.element.outlayerGUID,s&&s.removeData(this.element,this.constructor.namespace)},z.data=function(t){t=u.getQueryElement(t);var i=t&&t.outlayerGUID;return i&&l[i]},z.create=function(t,i){var n=_(z);return n.defaults=u.extend({},z.defaults),u.extend(n.defaults,i),n.compatOptions=u.extend({},z.compatOptions),n.namespace=t,n.data=z.data,n.Item=_(a),u.htmlInit(n,t),s&&s.bridget&&s.bridget(t,n),n};function _(t){function i(){t.apply(this,arguments)}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i}var m={ms:1,s:1e3};function e(t){if(typeof t=="number")return t;var i=t.match(/(^\d*\.?\d*)(\w*)/),n=i&&i[1],c=i&&i[2];if(!n.length)return 0;n=parseFloat(n);var v=m[c]||1;return n*v}return z.Item=a,z})});var U=x((lt,H)=>{(function(d,h){typeof define=="function"&&define.amd?define(["outlayer/outlayer","get-size/get-size"],h):typeof H=="object"&&H.exports?H.exports=h(w(),C()):d.Masonry=h(d.Outlayer,d.getSize)})(window,function(h,g){"use strict";var f=h.create("masonry");f.compatOptions.fitWidth="isFitWidth";var u=f.prototype;return u._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var a=0;a<this.cols;a++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},u.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],o=a&&a.element;this.columnWidth=o&&g(o).outerWidth||this.containerWidth}var s=this.columnWidth+=this.gutter,p=this.containerWidth+this.gutter,y=p/s,l=s-p%s,z=l&&l<1?"round":"floor";y=Math[z](y),this.cols=Math.max(y,1)},u.getContainerWidth=function(){var a=this._getOption("fitWidth"),o=a?this.element.parentNode:this.element,s=g(o);this.containerWidth=s&&s.innerWidth},u._getItemLayoutPosition=function(a){a.getSize();var o=a.size.outerWidth%this.columnWidth,s=o&&o<1?"round":"ceil",p=Math[s](a.size.outerWidth/this.columnWidth);p=Math.min(p,this.cols);for(var y=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",l=this[y](p,a),z={x:this.columnWidth*l.col,y:l.y},r=l.y+a.size.outerHeight,_=p+l.col,m=l.col;m<_;m++)this.colYs[m]=r;return z},u._getTopColPosition=function(a){var o=this._getTopColGroup(a),s=Math.min.apply(Math,o);return{col:o.indexOf(s),y:s}},u._getTopColGroup=function(a){if(a<2)return this.colYs;for(var o=[],s=this.cols+1-a,p=0;p<s;p++)o[p]=this._getColGroupY(p,a);return o},u._getColGroupY=function(a,o){if(o<2)return this.colYs[a];var s=this.colYs.slice(a,a+o);return Math.max.apply(Math,s)},u._getHorizontalColPosition=function(a,o){var s=this.horizontalColIndex%this.cols,p=a>1&&s+a>this.cols;s=p?0:s;var y=o.size.outerWidth&&o.size.outerHeight;return this.horizontalColIndex=y?s+a:this.horizontalColIndex,{col:s,y:this._getColGroupY(s,a)}},u._manageStamp=function(a){var o=g(a),s=this._getElementOffset(a),p=this._getOption("originLeft"),y=p?s.left:s.right,l=y+o.outerWidth,z=Math.floor(y/this.columnWidth);z=Math.max(0,z);var r=Math.floor(l/this.columnWidth);r-=l%this.columnWidth?0:1,r=Math.min(this.cols-1,r);for(var _=this._getOption("originTop"),m=(_?s.top:s.bottom)+o.outerHeight,e=z;e<=r;e++)this.colYs[e]=Math.max(m,this.colYs[e])},u._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this._getOption("fitWidth")&&(a.width=this._getContainerFitWidth()),a},u._getContainerFitWidth=function(){for(var a=0,o=this.cols;--o&&this.colYs[o]===0;)a++;return(this.cols-a)*this.columnWidth-this.gutter},u.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!=this.containerWidth},f})});var Q=tt(U()),it=function*(){let d=0;for(;;)yield d++},et=(d,h)=>{let g,f=!1,u=()=>f=!1,a=(...o)=>{if(!f)return f=!0,setTimeout(u,d),h(...o)};return(...o)=>{if(clearTimeout(g),f)g=setTimeout(a,d,...o);else return a(...o)}},nt=async()=>{let d=document.body.querySelector(".masonry"),h=new Set(document.body.querySelectorAll("img")),g=document.body.querySelector("header > button");d?.classList.add("scripting");let f=d&&new Q.default(d,{itemSelector:".card",gutter:".col-gap-sizer",transitionDuration:"0.5s",initLayout:!1});g?.addEventListener("click",async()=>{await new Promise(requestAnimationFrame),f?.layout?.()});let u=et(50,()=>f?.layout?.());u();for(let a of h)a.onload=a.onerror=u;for(let a of it()){if(!h.size||a>40)break;{await new Promise(s=>setTimeout(s,250));let o=h.size;for(let s of h)s.naturalWidth!==0&&s.naturalHeight!==0&&h.delete(s);h.size!==o&&u()}}};nt();})();
/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
