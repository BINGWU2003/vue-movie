import{d as T,k as F,e as j,q as C,s as _,b as N,g as v,r as K,t as E,m as R,p,u,v as B,j as q,f as W,l as Y,n as H,S as J,o as Q}from"./_initCloneObject-C3mgaNU_.js";import{S as m,U,O as V,T as X,br as Z}from"./index-BtiZJA6V.js";function z(r,e){for(var n=-1,o=r==null?0:r.length;++n<o&&e(r[n],n,r)!==!1;);return r}function k(r,e){return r&&T(e,F(e),r)}function rr(r,e){return r&&T(e,j(e),r)}function er(r,e){return T(r,C(r),e)}var tr=Object.getOwnPropertySymbols,x=tr?function(r){for(var e=[];r;)N(e,C(r)),r=v(r);return e}:_;function nr(r,e){return T(r,x(r),e)}function ar(r){return K(r,j,x)}var or=Object.prototype,sr=or.hasOwnProperty;function cr(r){var e=r.length,n=new r.constructor(e);return e&&typeof r[0]=="string"&&sr.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function ir(r,e){var n=e?E(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var fr=/\w*$/;function gr(r){var e=new r.constructor(r.source,fr.exec(r));return e.lastIndex=r.lastIndex,e}var O=m?m.prototype:void 0,w=O?O.valueOf:void 0;function br(r){return w?Object(w.call(r)):{}}var yr="[object Boolean]",ur="[object Date]",Tr="[object Map]",lr="[object Number]",jr="[object RegExp]",pr="[object Set]",Ar="[object String]",dr="[object Symbol]",Sr="[object ArrayBuffer]",$r="[object DataView]",mr="[object Float32Array]",Or="[object Float64Array]",wr="[object Int8Array]",Ir="[object Int16Array]",hr="[object Int32Array]",Fr="[object Uint8Array]",Cr="[object Uint8ClampedArray]",Er="[object Uint16Array]",Br="[object Uint32Array]";function Ur(r,e,n){var o=r.constructor;switch(e){case Sr:return E(r);case yr:case ur:return new o(+r);case $r:return ir(r,n);case mr:case Or:case wr:case Ir:case hr:case Fr:case Cr:case Er:case Br:return R(r,n);case Tr:return new o;case lr:case Ar:return new o(r);case jr:return gr(r);case pr:return new o;case dr:return br(r)}}var xr="[object Map]";function Lr(r){return U(r)&&p(r)==xr}var I=u&&u.isMap,Mr=I?B(I):Lr,Pr="[object Set]";function Dr(r){return U(r)&&p(r)==Pr}var h=u&&u.isSet,Gr=h?B(h):Dr,_r=1,Nr=2,vr=4,L="[object Arguments]",Kr="[object Array]",Rr="[object Boolean]",qr="[object Date]",Wr="[object Error]",M="[object Function]",Yr="[object GeneratorFunction]",Hr="[object Map]",Jr="[object Number]",P="[object Object]",Qr="[object RegExp]",Vr="[object Set]",Xr="[object String]",Zr="[object Symbol]",zr="[object WeakMap]",kr="[object ArrayBuffer]",re="[object DataView]",ee="[object Float32Array]",te="[object Float64Array]",ne="[object Int8Array]",ae="[object Int16Array]",oe="[object Int32Array]",se="[object Uint8Array]",ce="[object Uint8ClampedArray]",ie="[object Uint16Array]",fe="[object Uint32Array]",t={};t[L]=t[Kr]=t[kr]=t[re]=t[Rr]=t[qr]=t[ee]=t[te]=t[ne]=t[ae]=t[oe]=t[Hr]=t[Jr]=t[P]=t[Qr]=t[Vr]=t[Xr]=t[Zr]=t[se]=t[ce]=t[ie]=t[fe]=!0;t[Wr]=t[M]=t[zr]=!1;function l(r,e,n,o,g,s){var a,b=e&_r,y=e&Nr,D=e&vr;if(n&&(a=g?n(r,o,g,s):n(r)),a!==void 0)return a;if(!V(r))return r;var A=X(r);if(A){if(a=cr(r),!b)return q(r,a)}else{var f=p(r),d=f==M||f==Yr;if(W(r))return Y(r,b);if(f==P||f==L||d&&!g){if(a=y||d?{}:H(r),!b)return y?nr(r,rr(a,r)):er(r,k(a,r))}else{if(!t[f])return g?r:{};a=Ur(r,f,b)}}s||(s=new J);var S=s.get(r);if(S)return S;s.set(r,a),Gr(r)?r.forEach(function(c){a.add(l(c,e,n,c,r,s))}):Mr(r)&&r.forEach(function(c,i){a.set(i,l(c,e,n,i,r,s))});var G=D?y?ar:Q:y?j:F,$=A?void 0:G(r);return z($||r,function(c,i){$&&(i=c,c=r[i]),Z(a,i,l(c,e,n,i,r,s))}),a}export{l as b};