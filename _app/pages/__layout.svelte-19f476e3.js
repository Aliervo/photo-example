import{S as q,i as F,s as O,e as p,t as w,k as E,c as $,a as d,h as B,m as y,d as u,F as V,b as i,g as C,G as o,j as D,n as L,H as M,I as N,J as Q,x as z,y as H,z as J,K as U,L as W,M as X,r as x,p as I,C as K}from"../chunks/index-edf25201.js";import{a as Y,b as T}from"../chunks/paths-396f020f.js";function ee(c){let e,s,n,f,r,h,_=`(${c[0].slice(0,3)})${c[0].slice(3,6)}-${c[0].slice(6)}`,v,l;return{c(){e=p("a"),s=p("img"),f=w(`
  Call or Text:`),r=p("br"),h=E(),v=w(_),this.h()},l(t){e=$(t,"A",{href:!0,class:!0});var a=d(e);s=$(a,"IMG",{src:!0,alt:!0,class:!0}),f=B(a,`
  Call or Text:`),r=$(a,"BR",{}),h=y(a),v=B(a,_),a.forEach(u),this.h()},h(){V(s.src,n=Y+"/phone.svg")||i(s,"src",n),i(s,"alt","Call Now!"),i(s,"class","svelte-f666t8"),i(e,"href",l="tel:"+c[0]),i(e,"class","svelte-f666t8")},m(t,a){C(t,e,a),o(e,s),o(e,f),o(e,r),o(e,h),o(e,v)},p(t,[a]){a&1&&_!==(_=`(${t[0].slice(0,3)})${t[0].slice(3,6)}-${t[0].slice(6)}`)&&D(v,_),a&1&&l!==(l="tel:"+t[0])&&i(e,"href",l)},i:L,o:L,d(t){t&&u(e)}}}function te(c,e,s){let{phone:n="7855554321"}=e;return c.$$set=f=>{"phone"in f&&s(0,n=f.phone)},[n]}class ae extends q{constructor(e){super(),F(this,e,te,ee,O,{phone:0})}}function se(c){let e,s,n,f,r,h,_,v,l,t,a,b,G,g,k;return{c(){e=p("nav"),s=M("svg"),n=M("path"),f=E(),r=p("a"),h=w("About"),_=E(),v=p("a"),l=w("Gallery"),t=E(),a=p("a"),b=w("Packages"),G=E(),g=M("svg"),k=M("path"),this.h()},l(A){e=$(A,"NAV",{class:!0});var m=d(e);s=N(m,"svg",{viewBox:!0,"aria-hidden":!0});var P=d(s);n=N(P,"path",{d:!0}),d(n).forEach(u),P.forEach(u),f=y(m),r=$(m,"A",{href:!0,class:!0});var R=d(r);h=B(R,"About"),R.forEach(u),_=y(m),v=$(m,"A",{href:!0,class:!0});var S=d(v);l=B(S,"Gallery"),S.forEach(u),t=y(m),a=$(m,"A",{href:!0,class:!0});var Z=d(a);b=B(Z,"Packages"),Z.forEach(u),G=y(m),g=N(m,"svg",{viewBox:!0,"aria-hidden":!0});var j=d(g);k=N(j,"path",{d:!0}),d(k).forEach(u),j.forEach(u),m.forEach(u),this.h()},h(){i(n,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),i(s,"viewBox","0 0 2 3"),i(s,"aria-hidden","true"),i(r,"href",T+"/about"),i(r,"class","svelte-d7kdi0"),i(v,"href",T+"/"),i(v,"class","svelte-d7kdi0"),i(a,"href",T+"/packages"),i(a,"class","svelte-d7kdi0"),i(k,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),i(g,"viewBox","0 0 2 3"),i(g,"aria-hidden","true"),i(e,"class","svelte-d7kdi0")},m(A,m){C(A,e,m),o(e,s),o(s,n),o(e,f),o(e,r),o(r,h),o(e,_),o(e,v),o(v,l),o(e,t),o(e,a),o(a,b),o(e,G),o(e,g),o(g,k)},p:L,i:L,o:L,d(A){A&&u(e)}}}class le extends q{constructor(e){super(),F(this,e,null,se,O,{})}}function re(c){let e,s,n,f,r,h,_;e=new le({});const v=c[1].default,l=Q(v,c,c[0],null);return h=new ae({}),{c(){z(e.$$.fragment),s=E(),n=p("main"),l&&l.c(),f=E(),r=p("footer"),z(h.$$.fragment)},l(t){H(e.$$.fragment,t),s=y(t),n=$(t,"MAIN",{});var a=d(n);l&&l.l(a),a.forEach(u),f=y(t),r=$(t,"FOOTER",{});var b=d(r);H(h.$$.fragment,b),b.forEach(u)},m(t,a){J(e,t,a),C(t,s,a),C(t,n,a),l&&l.m(n,null),C(t,f,a),C(t,r,a),J(h,r,null),_=!0},p(t,[a]){l&&l.p&&(!_||a&1)&&U(l,v,t,t[0],_?X(v,t[0],a,null):W(t[0]),null)},i(t){_||(x(e.$$.fragment,t),x(l,t),x(h.$$.fragment,t),_=!0)},o(t){I(e.$$.fragment,t),I(l,t),I(h.$$.fragment,t),_=!1},d(t){K(e,t),t&&u(s),t&&u(n),l&&l.d(t),t&&u(f),t&&u(r),K(h)}}}function ne(c,e,s){let{$$slots:n={},$$scope:f}=e;return c.$$set=r=>{"$$scope"in r&&s(0,f=r.$$scope)},[f,n]}class fe extends q{constructor(e){super(),F(this,e,ne,re,O,{})}}export{fe as default};
