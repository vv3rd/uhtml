const{setPrototypeOf:e}=Object;const{isArray:t}=Array,n=[],r=()=>document.createRange(),s=(e,t,n)=>(e.set(t,n),n);let l;var o=(e,t,n)=>(l||(l=r()),n?l.setStartAfter(e):l.setStartBefore(e),l.setEndAfter(t),l.deleteContents(),e);const i=({firstChild:e,lastChild:t})=>o(e,t,!0);let c=!1;const a=(e,t)=>c&&11===e.nodeType?1/t<0?t?i(e):e.lastChild:t?e.valueOf():e.firstChild:e;class u extends((t=>{function n(t){return e(t,new.target.prototype)}return n.prototype=t.prototype,n})(DocumentFragment)){#e;#t;constructor(e){super(e),this.#e=[...e.childNodes],this.#t=this.#e.length,c=!0}get firstChild(){return this.#e[0]}get lastChild(){return this.#e.at(-1)}replaceWith(e){i(this).replaceWith(e)}valueOf(){return this.childNodes.length!==this.#t&&this.append(...this.#e),this}}const h=(e,t,n,r="")=>({t:e,p:t,u:n,n:r}),d=(e,t)=>t.reduceRight(f,e),f=(e,t)=>e.childNodes[t];const p=/^(?:plaintext|script|style|textarea|title|xmp)$/i,g=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,m=/<([a-zA-Z0-9]+[a-zA-Z0-9:._-]*)([^>]*?)(\/?)>/g,x=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,b=/[\x01\x02]/g;const v=(e,t)=>{for(const n in t){const r=t[n],s="role"===n?n:`aria-${n}`;null==r?e.removeAttribute(s):e.setAttribute(s,r)}return t};let $;const C=(e,n,r)=>{r=r.slice(1),$||($=new WeakMap);const l=$.get(e)||s($,e,{});let o=l[r];return o&&o[0]&&e.removeEventListener(...o),o=t(n)?n:[n,!1],l[r]=o,o[0]&&e.addEventListener(...o),n},y=(e,t)=>A(e,t,"className"),N=(e,t)=>{const{dataset:n}=e;for(const e in t)null==t[e]?delete n[e]:n[e]=t[e];return t},A=(e,t,n)=>e[n]=t,w=(e,t,n)=>A(e,t,n.slice(1)),W=(e,t)=>("function"==typeof t?t(e):t.current=e,t),k=(e,t,n)=>(null==t?e.removeAttribute(n):e.setAttribute(n,t),t),E=(e,t)=>A(e.style,t,"cssText"),O=(e,t,n)=>(e.toggleAttribute(n.slice(1),t),t),S=(e,t,r,s)=>t.length?((e,t,n,r,s)=>{const l=n.length;let o=t.length,i=l,c=0,a=0,u=null;for(;c<o||a<i;)if(o===c){const t=i<l?a?r(n[a-1],-0).nextSibling:r(n[i-a],0):s;for(;a<i;)e.insertBefore(r(n[a++],1),t)}else if(i===a)for(;c<o;)u&&u.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[a])c++,a++;else if(t[o-1]===n[i-1])o--,i--;else if(t[c]===n[i-1]&&n[a]===t[o-1]){const s=r(t[--o],-1).nextSibling;e.insertBefore(r(n[a++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--i],1),s),t[o]=n[i]}else{if(!u){u=new Map;let e=a;for(;e<i;)u.set(n[e],e++)}if(u.has(t[c])){const s=u.get(t[c]);if(a<s&&s<i){let l=c,h=1;for(;++l<o&&l<i&&u.get(t[l])===s+h;)h++;if(h>s-a){const l=r(t[c],0);for(;a<s;)e.insertBefore(r(n[a++],1),l)}else e.replaceChild(r(n[a++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n})(e.parentNode,s,t,a,e):(s.length&&o(s[0],s.at(-1),!1),n),T=(e,t)=>{switch(t[0]){case".":return w;case"?":return O;case"@":return C;default:switch(t){case"aria":return v;case"class":return y;case"data":return N;case"ref":return W;case"style":return E;default:return t in e?A:k}}},B=(e,t)=>(e.texContent=null==t?"":t,t);function M(e,t){const n=this.n||(this.n=e);switch(typeof t){case"string":case"number":case"boolean":n!==e&&n.replaceWith(this.n=e),this.n.data=t;break;case"object":case"undefined":n.replaceWith(this.n=null==t?e:t.valueOf())}return t}let j,L,z=document.createElement("template");var F=(e,t)=>{if(t)return j||(j=document.createElementNS("http://www.w3.org/2000/svg","svg"),L=r(),L.selectNodeContents(j)),L.createContextualFragment(e);z.innerHTML=e;const{content:n}=z;return z=z.cloneNode(!1),n};const R=e=>{const t=[];let n;for(;n=e.parentNode;)t.push(t.indexOf.call(n.childNodes,e)),e=n;return t},Z=()=>M.bind({n:null}),D=()=>S,H=(e,r,l)=>{const o=F(((e,t,n)=>{let r=0;return e.join("").trim().replace(m,((e,t,r,s)=>`<${t}${r.replace(x,"=$2$1").trimEnd()}${s?n||g.test(t)?" /":`></${t}`:""}>`)).replace(b,(e=>""===e?`\x3c!--${t+r++}--\x3e`:t+r++))})(e,_,l),l);let i=n;const{length:c}=e;if(c>1){const e=document.createTreeWalker(o,129),n=[];let s=0,l=`${_}${s++}`;for(i=[];s<c;){const o=e.nextNode();if(8===o.nodeType){if(o.data===l){let e=t(r[s-1])?D:Z;e===Z&&n.push(o),i.push(h(8,R(o),e)),l=`${_}${s++}`}}else{let e;for(;o.hasAttribute(l);){e||(e=R(o));const t=o.getAttribute(l);i.push(h(2,e,T(o,t),t)),o.removeAttribute(l),l=`${_}${s++}`}p.test(o.localName)&&o.textContent.trim()===`\x3c!--${l}--\x3e`&&(i.push(h(3,e||R(o),B)),l=`${_}${s++}`)}}for(s=0;s<n.length;s++)n[s].replaceWith(document.createTextNode(""))}return s(P,e,(a=o,u=i,d=o.childNodes.length,{c:a,e:u,l:d}));var a,u,d},P=new WeakMap,_="isµ";var q=(e,t)=>(e.replaceChildren("function"==typeof t?t():t),e);
/*! (c) Andrea Giammarchi - MIT */
const G=e=>{const t=(e=>(t,r)=>{const{c:s,e:l,l:o}=e(t,r),i=s.cloneNode(!0);let c,a,h=l.length,f=h?l.slice(0):n;for(;h--;){const{t:e,p:t,u:s,n:o}=l[h],u=t===a?c:c=d(i,a=t),p=8===e?s():s;f[h]={v:p(u,r[h],o,n),u:p,t:u,n:o}}return{n:1===o?i.firstChild:new u(i),d:f}})((r=e,(e,t)=>P.get(e)||H(e,t,r)));var r;return(e,...n)=>t(e,n).n},I=G(!1),J=G(!0);export{I as html,q as render,J as svg};