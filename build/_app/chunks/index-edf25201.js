function P(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function j(){return Object.create(null)}function p(t){t.forEach(q)}function U(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function dt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function W(t){return Object.keys(t).length===0}function ht(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function pt(t,n,e,i,r,o){if(r){const c=D(n,e,i,o);t.p(c,r)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function yt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function xt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let E=!1;function V(){E=!0}function X(){E=!1}function Y(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const u=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:Y(1,r,y=>n[e[y]].claim_order,u))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const o=[],c=[];let s=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(o.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(c[l],f)}}function tt(t,n){if(E){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function nt(t,n,e){t.insertBefore(n,e||null)}function et(t,n,e){E&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function O(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function $t(){return A(" ")}function wt(){return A("")}function vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function I(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Et(t,n,e){return I(t,n,e,O)}function Nt(t,n,e){return I(t,n,e,G)}function rt(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Tt(t){return rt(t," ")}function M(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function kt(t,n){const e=M(t,"HTML_TAG_START",0),i=M(t,"HTML_TAG_END",e);if(e===i)return new H(void 0,n);z(t);const r=t.splice(e,i-e+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const c of o)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(o,n)}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function ct(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=G(e.nodeName):this.e=O(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(v)}}class H extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}}let m;function h(t){m=t}function g(){if(!m)throw new Error("Function called outside component initialization");return m}function Ct(t){g().$$.on_mount.push(t)}function jt(t){g().$$.after_update.push(t)}function Mt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=ct(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Ht(t,n){return g().$$.context.set(t,n),n}function Bt(t){return g().$$.context.get(t)}const d=[],B=[],$=[],L=[],R=Promise.resolve();let T=!1;function J(){T||(T=!0,R.then(K))}function Lt(){return J(),R}function k(t){$.push(t)}const N=new Set;let b=0;function K(){const t=m;do{for(;b<d.length;){const n=d[b];b++,h(n),st(n.$$)}for(h(null),d.length=0,b=0;B.length;)B.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];N.has(e)||(N.add(e),e())}$.length=0}while(d.length);for(;L.length;)L.pop()();T=!1,N.clear(),h(t)}function st(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const w=new Set;let _;function Pt(){_={r:0,c:[],p:_}}function qt(){_.r||p(_.c),_=_.p}function ot(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Dt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Ot(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],s=n[o];if(s){for(const l in c)l in s||(i[l]=1);for(const l in s)r[l]||(e[l]=s[l],r[l]=1);t[o]=s}else for(const l in c)r[l]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Gt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:o,on_destroy:c,after_update:s}=t.$$;r&&r.m(n,e),i||k(()=>{const l=o.map(q).filter(U);c?c.push(...l):p(l),t.$$.on_mount=[]}),s.forEach(k)}function at(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(d.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function It(t,n,e,i,r,o,c,s=[-1]){const l=m;h(t);const u=t.$$={fragment:null,ctx:null,props:o,update:P,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:j(),dirty:s,skip_bound:!1,root:n.target||l.$$.root};c&&c(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...S)=>{const C=S.length?S[0]:y;return u.ctx&&r(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&ft(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){V();const a=it(n.target);u.fragment&&u.fragment.l(a),a.forEach(v)}else u.fragment&&u.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),X(),K()}h(l)}class Rt{$destroy(){at(this,1),this.$destroy=P}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ot as A,Gt as B,at as C,Q as D,Lt as E,dt as F,tt as G,G as H,Nt as I,ht as J,pt as K,gt as L,mt as M,xt as N,yt as O,bt as P,Bt as Q,H as R,Rt as S,kt as T,Mt as U,it as a,vt as b,Et as c,v as d,O as e,St as f,et as g,rt as h,It as i,At as j,$t as k,wt as l,Tt as m,P as n,Pt as o,Dt as p,qt as q,ot as r,_t as s,A as t,Ht as u,jt as v,Ct as w,zt as x,Ft as y,ut as z};