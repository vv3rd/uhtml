var uhtml=function(e){"use strict";const t=new WeakMap,{isArray:n}=Array,{indexOf:r,slice:s}=[],o=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),l=(e,t)=>("svg"===t?a:c)(e),c=e=>{const t=o("template");return t.innerHTML=e,t.content},a=e=>{const{content:t}=o("template"),n=o("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:s}=r;for(;s--;)t.appendChild(r[0]);return t},i=(e,t)=>e.childNodes[t],u=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.unshift(r.call(n.childNodes,e)),n=(e=n).parentNode;return t},{defineProperties:d}=Object,f=e=>{const{childNodes:t}=e,{length:n}=t;if(1===n)return t[0];const r=s.call(t,0);return d(e,{remove:{value(){const e=document.createRange();return e.setStartBefore(r[1]),e.setEndAfter(r[n-1]),e.deleteContents(),r[0]}},valueOf:{value(){if(t.length!==n){const t=document.createRange();t.setStartBefore(r[0]),t.setEndAfter(r[n-1]),e.appendChild(t.extractContents())}return e}}})},{createTreeWalker:p,importNode:h}=document,m=!h.length,g=m?(e,t)=>h.call(document,l(e,t),!0):l,b=m?e=>p.call(document,e,129,null,!1):e=>p.call(document,e,129),w=(e,t,n,s,o,l)=>{const c="selectedIndex"in t;let a=c;for(;s<o;){const o=e(n[s],1);if(t.insertBefore(o,l),c&&a&&o.selected){a=!a;let{selectedIndex:e}=t;t.selectedIndex=e<0?s:r.call(t.querySelectorAll("option"),o)}s++}},v=(e,t,n,r,s,o)=>{const l=o-s;if(l<1)return-1;for(;n-t>=l;){let l=t,c=s;for(;l<n&&c<o&&e[l]===r[c];)l++,c++;if(c===o)return t;t=l+1}return-1},N=(e,t,n,r,s)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:s,x=(e,t,n,r)=>{for(;n<r;)((s=e(t[n++],-1)).remove||$).call(s);var s},y=(e,t,n,r,s)=>{const o=t.length;let l=o,c=0,a=n.length,i=0;for(;c<l&&i<a&&t[c]===n[i];)c++,i++;for(;c<l&&i<a&&t[l-1]===n[a-1];)l--,a--;const u=c===l,d=i===a;if(u&&d)return n;if(u&&i<a)return w(r,e,n,i,a,N(r,t,c,o,s)),n;if(d&&c<l)return x(r,t,c,l),n;const f=l-c,p=a-i;let h=-1;if(f<p){if(h=v(n,i,a,t,c,l),-1<h)return w(r,e,n,i,h,r(t[c],0)),w(r,e,n,h+f,a,N(r,t,l,o,s)),n}else if(p<f&&(h=v(t,c,l,n,i,a),-1<h))return x(r,t,c,h),x(r,t,h+p,l),n;return f<2||p<2?(w(r,e,n,i,a,r(t[c],0)),x(r,t,c,l),n):(x(r,t,0,o),w(r,e,n,0,n.length,s),n)};function $(){const{parentNode:e}=this;e&&e.removeChild(this)}const C=(e,t)=>11===e.nodeType?1/t<0?t?e.remove():e.lastChild:t?e.valueOf():e.firstChild:e;function L(e){const{type:t,path:r}=e,o=r.reduce(i,this);return"node"===t?((e,t)=>{let r;const o=document.createTextNode(""),l=c=>{switch(typeof c){case"string":case"number":case"boolean":r!==c&&(r=c,o.textContent=c,t=y(e.parentNode,t,[o],C,e));break;case"object":case"undefined":if(null==c){t=y(e.parentNode,t,[],C,e);break}default:if(r=c,n(c))if(0===c.length)t=y(e.parentNode,t,[],C,e);else switch(typeof c[0]){case"string":case"number":case"boolean":l(String(c));break;default:t=y(e.parentNode,t,c,C,e)}else"ELEMENT_NODE"in c&&(t=y(e.parentNode,t,11===c.nodeType?s.call(c.childNodes):[c],C,e))}};return l})(o,[]):"attr"===t?((e,t)=>{if("ref"===t)return t=>{t.current=e};if("."===t.slice(0,1)){const n=t.slice(1);return t=>{e[n]=t}}let n;if("on"===t.slice(0,2)){let r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}let r=!0;const s=e.ownerDocument.createAttribute(t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(s),r=!0):(s.value=t,r&&(e.setAttributeNode(s),r=!1)))}})(o,e.name):(e=>{let t;return n=>{t!==n&&(t=n,e.textContent=null==n?"":n)}})(o)}const A="".trimStart||function(){return this.replace(/^[ \f\n\r\t]+/,"")},k="".trimEnd||function(){return this.replace(/[ \f\n\r\t]+$/,"")},E=/([^ \f\n\r\t\\>"'=]+)\s*=\s*(['"]?)$/,T=new WeakMap,S=(e,t)=>{const{wire:n,updates:r}=M(e,t);return{type:e,template:t,wire:n,updates:r}},O=(e,t)=>{for(;t--;)if(/<[A-Za-z][^>]+$/.test(e[t]))return!0;return!1},j=(e,t)=>{const n=(e=>{const t=[];for(let n=0,{length:r}=e;n<r;n++){const s=n<1?A.call(e[n]):e[n];E.test(s)&&O(e,n+1)?t.push(s.replace(E,(e,t,r)=>`isµ${n}=${r||'"'}${t}${r?"":'"'}`)):n+1<r?t.push(s,`\x3c!--isµ${n}--\x3e`):t.push(k.call(s))}return t.join("").replace(/<([A-Za-z]+[A-Za-z0-9:._-]*)([^>]*?)(\/>)/g,Z)})(t),r=g(n,e),s=b(r),o=[],l=t.length-1;let c=0,a=`isµ${c}`;for(;c<l;){const e=s.nextNode();if(!e)throw`bad template: ${n}`;if(8===e.nodeType)e.textContent===a&&(o.push({type:"node",path:u(e)}),a=`isµ${++c}`);else{for(;e.hasAttribute(a);)o.push({type:"attr",path:u(e),name:e.getAttribute(a)}),e.removeAttribute(a),a=`isµ${++c}`;/^(?:style|textarea)$/i.test(e.tagName)&&A.call(k.call(e.textContent))===`\x3c!--${a}--\x3e`&&(o.push({type:"text",path:u(e)}),a=`isµ${++c}`)}}return{content:r,nodes:o}},M=(e,t)=>{const{content:n,nodes:r}=T.get(t)||B(e,t),s=h.call(document,n,!0),o=r.map(L,s);return{wire:f(s),updates:o}},z=(e,t)=>{const{sub:n,stack:r}=e,s={a:0,aLength:n.length,i:0,iLength:r.length},o=I(e,t,s),{a:l,i:c,aLength:a,iLength:i}=s;return l<a&&n.splice(l),c<i&&r.splice(c),o},B=(e,t)=>{const n=j(e,t);return T.set(t,n),n},I=(e,t,n)=>{const{stack:r}=e,{i:s,iLength:o}=n,{type:l,template:c,values:a}=t,i=s===o;i&&(n.iLength=r.push(S(l,c))),n.i++,W(e,a,n);let u=r[s];i||u.template===c&&u.type===l||(r[s]=u=S(l,c));const{wire:d,updates:f}=u;for(let e=0,{length:t}=f;e<t;e++)f[e](a[e]);return d},W=(e,t,r)=>{for(let s=0,{length:o}=t;s<o;s++){const o=t[s];if("object"==typeof o&&o)if(o instanceof D)t[s]=I(e,o,r);else if(n(o))for(let t=0,{length:n}=o;t<n;t++){const n=o[t];if("object"==typeof n&&n&&n instanceof D){const{sub:s}=e,{a:l,aLength:c}=r;l===c&&(r.aLength=s.push({sub:[],stack:[],wire:null})),r.a++,o[t]=z(s[l],n)}}}},Z=(e,t,n)=>/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i.test(t)?e:`<${t}${n}></${t}>`;function D(e,t,n){this.type=e,this.template=t,this.values=n}return e.html=(e,...t)=>new D("html",e,t),e.render=(e,n)=>{const r="function"==typeof n?n():n,s=t.get(e)||(e=>{const n={sub:[],stack:[],wire:null};return t.set(e,n),n})(e),o=r instanceof D?z(s,r):r;return o!==s.wire&&(s.wire=o,e.textContent="",e.appendChild(o.valueOf())),e},e.svg=(e,...t)=>new D("svg",e,t),e}({});
