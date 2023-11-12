const{isArray:e}=Array,t=[],n=()=>document.createRange(),r=(e,t,n)=>(e.set(t,n),n),s=(e,t,n,r="")=>({t:e,p:t,u:n,n:r}),l=e=>({s:e,t:null,n:null,d:t}),{setPrototypeOf:o}=Object;let i;var c=(e,t,r)=>(i||(i=n()),r?i.setStartAfter(e):i.setStartBefore(e),i.setEndAfter(t),i.deleteContents(),e);const a=({firstChild:e,lastChild:t})=>c(e,t,!0);let u=!1;const h=(e,t)=>u&&11===e.nodeType?1/t<0?t?a(e):e.lastChild:t?e.valueOf():e.firstChild:e;class d extends((e=>{function t(e){return o(e,new.target.prototype)}return t.prototype=e.prototype,t})(DocumentFragment)){#e;#t;constructor(e){super(e),this.#e=[...e.childNodes],this.#t=this.#e.length,u=!0}get firstChild(){return this.#e[0]}get lastChild(){return this.#e.at(-1)}replaceWith(e){a(this).replaceWith(e)}valueOf(){return this.childNodes.length!==this.#t&&this.append(...this.#e),this}}const f=(e,t)=>t.reduceRight(p,e),p=(e,t)=>e.childNodes[t];var g=e=>(n,r)=>{const{c:s,e:l,l:o}=e(n,r),i=s.cloneNode(!0);let c,a,u=l.length,h=u?l.slice(0):t;for(;u--;){const{t:e,p:n,u:s,n:o}=l[u],d=n===a?c:c=f(i,a=n),p=8===e?s():s;h[u]={v:p(d,r[u],o,t),u:p,t:d,n:o}}return((e,t)=>({n:e,d:t}))(1===o?i.firstChild:new d(i),h)};const m=/^(?:plaintext|script|style|textarea|title|xmp)$/i,v=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,b=/<([a-zA-Z0-9]+[a-zA-Z0-9:._-]*)([^>]*?)(\/?)>/g,x=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,$=/[\x01\x02]/g;const w=(e,t)=>{for(const n in t){const r=t[n],s="role"===n?n:`aria-${n}`;null==r?e.removeAttribute(s):e.setAttribute(s,r)}return t};let C;const y=(t,n,s)=>{s=s.slice(1),C||(C=new WeakMap);const l=C.get(t)||r(C,t,{});let o=l[s];return o&&o[0]&&t.removeEventListener(...o),o=e(n)?n:[n,!1],l[s]=o,o[0]&&t.addEventListener(...o),n},N=(e,t)=>W(e,t,"className"),A=(e,t)=>{const{dataset:n}=e;for(const e in t)null==t[e]?delete n[e]:n[e]=t[e];return t},W=(e,t,n)=>e[n]=t,k=(e,t,n)=>W(e,t,n.slice(1)),M=(e,t)=>("function"==typeof t?t(e):t.current=e,t),E=(e,t,n)=>(null==t?e.removeAttribute(n):e.setAttribute(n,t),t),O=(e,t)=>W(e.style,t,"cssText"),S=(e,t,n)=>(e.toggleAttribute(n.slice(1),t),t),T=(e,n,r,s)=>n.length?((e,t,n,r,s)=>{const l=n.length;let o=t.length,i=l,c=0,a=0,u=null;for(;c<o||a<i;)if(o===c){const t=i<l?a?r(n[a-1],-0).nextSibling:r(n[i-a],0):s;for(;a<i;)e.insertBefore(r(n[a++],1),t)}else if(i===a)for(;c<o;)u&&u.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[a])c++,a++;else if(t[o-1]===n[i-1])o--,i--;else if(t[c]===n[i-1]&&n[a]===t[o-1]){const s=r(t[--o],-1).nextSibling;e.insertBefore(r(n[a++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--i],1),s),t[o]=n[i]}else{if(!u){u=new Map;let e=a;for(;e<i;)u.set(n[e],e++)}if(u.has(t[c])){const s=u.get(t[c]);if(a<s&&s<i){let l=c,h=1;for(;++l<o&&l<i&&u.get(t[l])===s+h;)h++;if(h>s-a){const l=r(t[c],0);for(;a<s;)e.insertBefore(r(n[a++],1),l)}else e.replaceChild(r(n[a++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n})(e.parentNode,s,n,h,e):(s.length&&c(s[0],s.at(-1),!1),t),B=(e,t)=>{switch(t[0]){case".":return k;case"?":return S;case"@":return y;default:switch(t){case"aria":return w;case"class":return N;case"data":return A;case"ref":return M;case"style":return O;default:return t in e?W:E}}},j=(e,t)=>(e.texContent=null==t?"":t,t);function L(e,t){const n=this.n||(this.n=e);switch(typeof t){case"string":case"number":case"boolean":n!==e&&n.replaceWith(this.n=e),this.n.data=t;break;case"object":case"undefined":n.replaceWith(this.n=null==t?e:t.valueOf())}return t}let z,F,R=document.createElement("template");var Z=(e,t)=>{if(t)return z||(z=document.createElementNS("http://www.w3.org/2000/svg","svg"),F=n(),F.selectNodeContents(z)),F.createContextualFragment(e);R.innerHTML=e;const{content:r}=R;return R=R.cloneNode(!1),r};const D=e=>{const t=[];let n;for(;n=e.parentNode;)t.push(t.indexOf.call(n.childNodes,e)),e=n;return t},H=()=>L.bind({n:null}),P=()=>T,_=(n,l,o)=>{const i=Z(((e,t,n)=>{let r=0;return e.join("").trim().replace(b,((e,t,r,s)=>`<${t}${r.replace(x,"=$2$1").trimEnd()}${s?n||v.test(t)?" /":`></${t}`:""}>`)).replace($,(e=>""===e?`\x3c!--${t+r++}--\x3e`:t+r++))})(n,G,o),o);let c=t;const{length:a}=n;if(a>1){const t=document.createTreeWalker(i,129),n=[];let r=0,o=`${G}${r++}`;for(c=[];r<a;){const i=t.nextNode();if(8===i.nodeType){if(i.data===o){let t=e(l[r-1])?P:H;t===H&&n.push(i),c.push(s(8,D(i),t)),o=`${G}${r++}`}}else{let e;for(;i.hasAttribute(o);){e||(e=D(i));const t=i.getAttribute(o);c.push(s(2,e,B(i,t),t)),i.removeAttribute(o),o=`${G}${r++}`}m.test(i.localName)&&i.textContent.trim()===`\x3c!--${o}--\x3e`&&(c.push(s(3,e||D(i),j)),o=`${G}${r++}`)}}for(r=0;r<n.length;r++)n[r].replaceWith(document.createTextNode(""))}return r(q,n,(u=i,h=c,d=i.childNodes.length,{c:u,e:h,l:d}));var u,h,d},q=new WeakMap,G="isµ";var I=e=>(t,n)=>q.get(t)||_(t,n,e);const J=g(I(!1)),K=g(I(!0)),Q=(e,{s:n,t:r,v:s})=>{if(s.length&&e.s===t&&(e.s=[]),U(e,s),e.t!==r){const{n:t,d:l}=(n?K:J)(r,s);e.t=r,e.n=t,e.d=l}else{const{d:t}=e;for(let e=0;e<t.length;e++){const n=t[e],r=s[e],{v:l}=n;if(r!==l){const{u:e,t:t,n:s}=n;n.v=e(t,r,s,l)}}}return e.n},U=({s:n},r)=>{const{length:s}=r;for(let o=0;o<s;o++){const s=r[o];s instanceof V?r[o]=Q(n[o]||(n[o]=l(t)),s):e(s)?U(n[o]||(n[o]=l([])),s):n[o]=null}return s<n.length&&n.splice(s),s};class V{constructor(e,t,n){this.s=e,this.t=t,this.v=n}}
/*! (c) Andrea Giammarchi - MIT */const X=e=>(t,...n)=>new V(e,t,n),Y=X(!1),ee=X(!0),te=new WeakMap;var ne=(e,n)=>{const s=te.get(e)||r(te,e,l(t)),o="function"==typeof n?n():n,{n:i}=s,c=o instanceof V?Q(s,o):o;return i!==c&&e.replaceChildren(s.n=c),e};
/*! (c) Andrea Giammarchi - MIT */const re=new WeakMap,se=e=>(n,s)=>{const o=re.get(n)||r(re,n,new Map);return o.get(s)||r(o,s,function(t,...n){return Q(this,new V(e,t,n))}.bind(l(t)))},le=se(!1),oe=se(!0);export{V as Hole,Y as html,le as htmlFor,ne as render,ee as svg,oe as svgFor};