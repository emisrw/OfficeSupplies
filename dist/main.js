(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){a.exports=c(2)},function(){},function(a,b,c){'use strict';function d(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);'function'==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function g(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function h(a,b,c){return b&&g(a.prototype,b),c&&g(a,c),a}c.r(b);var i=function(){function a(b,c){f(this,a),this.cartLabelElement=b,this.cartPriceElement=c,this.products=[]}return h(a,[{key:'getProductsSummary',value:function(){return this.products.reduce(function(a,b){return a+b.price},0)}},{key:'setPriceAndLabel',value:function(){this.cartPriceElement.innerHTML=''.concat(this.getProductsSummary(),' Kr'),this.cartLabelElement.textContent=this.products.length}},{key:'addProduct',value:function(a){this.products.push(a),this.setPriceAndLabel()}}]),a}(),j=function(){function a(b,c,e){f(this,a),this.current=b.querySelector('img'),this.container=c,this.images=c.querySelectorAll('img'),this.options=d({opacity:.6},e)}return h(a,[{key:'imgEventClick',value:function(a){var b=this;void 0!==a.target.src&&this.current.src!=a.target.src&&(this.images.forEach(function(a){return a.style.opacity=1}),this.current.src=a.target.src,this.current.classList.add('fade-in'),setTimeout(function(){return b.current.classList.remove('fade-in')},500),a.target.style.opacity=this.options.opacity)}},{key:'init',value:function(){var a=this;this.container.addEventListener('click',function(b){return a.imgEventClick(b)})}}]),a}(),k=c(1),l=function(){var a=document.querySelector('.icon-bag__label'),b=document.querySelector('.header__cart-price'),c=document.querySelector('.product'),d=new i(a,b);c.addEventListener('click',function(a){if(a.target.classList.contains('btn__buy')){var b=parseFloat(this.querySelector('span[data-price]').dataset.price),c=this.querySelector('.product__title').textContent;d.addProduct({name:c,price:b})}})},m=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:220,b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'#read-more-text',c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:'.btn__readmore',d=document.querySelector(b),e=document.querySelector(c),f=d.offsetHeight;d.style.transition='all 1s ease-in-out',d.style.maxHeight=a+'px',e.addEventListener('click',function(){e.classList.contains('open')?(d.style.maxHeight=a+'px',e.classList.remove('open'),e.textContent='Read more'):(d.style.maxHeight=f+20+'px',e.classList.add('open'),e.textContent='Read less')})},n=function(){var a=document.querySelector('.thumb-gallery__main'),b=document.querySelector('.thumb-gallery__thumbnails'),c=new j(a,b,{opacity:.5});c.init()};document.addEventListener('DOMContentLoaded',function(){l(),n(),m(300)})}]);