(()=>{var x=Object.create;var m=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var I=n=>m(n,"__esModule",{value:!0});var E=(n,i)=>()=>(i||n((i={exports:{}}).exports,i),i.exports);var S=(n,i,r,s)=>{if(i&&typeof i=="object"||typeof i=="function")for(let t of T(i))!b.call(n,t)&&(r||t!=="default")&&m(n,t,{get:()=>i[t],enumerable:!(s=C(i,t))||s.enumerable});return n},q=(n,i)=>S(I(m(n!=null?x(M(n)):{},"default",!i&&n&&n.__esModule?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);var v=E((f,d)=>{(function(n,i){typeof f=="object"&&typeof d!="undefined"?d.exports=i():typeof define=="function"&&define.amd?define(i):n.MagicGrid=i()})(f,function(){"use strict";var n=function(t){if(!t)throw new Error("No config object has been provided.");typeof t.useTransform!="boolean"&&(t.useTransform=!0),typeof t.gutter!="number"&&(t.gutter=25),t.container||i("container"),t.items||t.static||i("items or static")},i=function(t){throw new Error("Missing property '"+t+"' in MagicGrid config")},r=function(t){var e=t[0];for(var o of t)o.height<e.height&&(e=o);return e},s=function(t){n(t),t.container instanceof HTMLElement?(this.container=t.container,this.containerClass=t.container.className):(this.containerClass=t.container,this.container=document.querySelector(t.container)),this.items=this.container.children,this.static=t.static||!1,this.size=t.items,this.gutter=t.gutter,this.maxColumns=t.maxColumns||!1,this.useMin=t.useMin||!1,this.useTransform=t.useTransform,this.animate=t.animate||!1,this.started=!1,this.init()};return s.prototype.init=function(){if(this.ready()&&!this.started){this.container.style.position="relative";for(var t=0;t<this.items.length;t++){var e=this.items[t].style;e.position="absolute",this.animate&&(e.transition=(this.useTransform?"transform":"top, left")+" 0.2s ease")}this.started=!0}},s.prototype.colWidth=function(){return this.items[0].getBoundingClientRect().width+this.gutter},s.prototype.setup=function(){var t=this.container.getBoundingClientRect().width,e=this.colWidth(),o=Math.floor(t/e)||1,a=[];this.maxColumns&&o>this.maxColumns&&(o=this.maxColumns);for(var h=0;h<o;h++)a[h]={height:0,index:h};return{cols:a,wSpace:t-o*e+this.gutter}},s.prototype.nextCol=function(t,e){return this.useMin?r(t):t[e%t.length]},s.prototype.positionItems=function(){var t=this.setup(),e=t.cols,o=t.wSpace,a=0,h=this.colWidth();o=Math.floor(o/2);for(var u=0;u<this.items.length;u++){var c=this.nextCol(e,u),l=this.items[u],p=c.height?this.gutter:0,y=c.index*h+o+"px",g=c.height+p+"px";this.useTransform?l.style.transform="translate("+y+", "+g+")":(l.style.top=g,l.style.left=y),c.height+=l.getBoundingClientRect().height+p,c.height>a&&(a=c.height)}this.container.style.height=a+"px"},s.prototype.ready=function(){return!!this.static||this.items.length>=this.size},s.prototype.getReady=function(){var t=this,e=setInterval(function(){t.container=document.querySelector(t.containerClass),t.items=t.container.children,t.ready()&&(clearInterval(e),t.init(),t.listen())},100)},s.prototype.listen=function(){var t=this;if(this.ready()){var e;window.addEventListener("resize",function(){e||(e=setTimeout(function(){t.positionItems(),e=null},200))}),this.positionItems()}else this.getReady()},s})});var w=q(v()),F=(n,i)=>{let r,s=!1,t=()=>s=!1,e=(...o)=>{if(!s)return s=!0,setTimeout(t,n),i(...o)};return(...o)=>{if(clearTimeout(r),s)r=setTimeout(e,n,...o);else return e(...o)}},R=async()=>{let n=document.body.querySelector("header > button"),i=document.body.querySelector(".masonry"),r=i?.querySelectorAll("img"),s=i&&new w.default({container:i,static:!0,animate:!0,useMin:!0});n?.addEventListener("click",()=>requestAnimationFrame(()=>s?.positionItems()),{passive:!0});let t=F(18,()=>s?.positionItems());for(r?.forEach(e=>e.onload=e.onerror=t),s?.listen();;)await new Promise(e=>setTimeout(e,188)),s?.positionItems()};R();})();
