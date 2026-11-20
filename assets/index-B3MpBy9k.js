(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=t(l);fetch(l.href,s)}})();function tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vi={exports:{}},Zr={},$i={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wt=Symbol.for("react.element"),rc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ic=Symbol.for("react.provider"),ac=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),Lo=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Lo&&e[Lo]||e["@@iterator"],typeof e=="function"?e:null)}var Hi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wi=Object.assign,Gi={};function rt(e,n,t){this.props=e,this.context=n,this.refs=Gi,this.updater=t||Hi}rt.prototype.isReactComponent={};rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ki(){}Ki.prototype=rt.prototype;function js(e,n,t){this.props=e,this.context=n,this.refs=Gi,this.updater=t||Hi}var Os=js.prototype=new Ki;Os.constructor=js;Wi(Os,rt.prototype);Os.isPureReactComponent=!0;var To=Array.isArray,Yi=Object.prototype.hasOwnProperty,Is={current:null},Xi={key:!0,ref:!0,__self:!0,__source:!0};function qi(e,n,t){var r,l={},s=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(s=""+n.key),n)Yi.call(n,r)&&!Xi.hasOwnProperty(r)&&(l[r]=n[r]);var i=arguments.length-2;if(i===1)l.children=t;else if(1<i){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:Wt,type:e,key:s,ref:o,props:l,_owner:Is.current}}function mc(e,n){return{$$typeof:Wt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wt}function xc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ro=/\/+/g;function gl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?xc(""+e.key):n.toString(36)}function vr(e,n,t,r,l){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Wt:case rc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+gl(o,0):r,To(l)?(t="",e!=null&&(t=e.replace(Ro,"$&/")+"/"),vr(l,n,t,"",function(c){return c})):l!=null&&(Ms(l)&&(l=mc(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ro,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",To(e))for(var i=0;i<e.length;i++){s=e[i];var a=r+gl(s,i);o+=vr(s,n,t,a,l)}else if(a=pc(e),typeof a=="function")for(e=a.call(e),i=0;!(s=e.next()).done;)s=s.value,a=r+gl(s,i++),o+=vr(s,n,t,a,l);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Jt(e,n,t){if(e==null)return e;var r=[],l=0;return vr(e,r,"","",function(s){return n.call(t,s,l++)}),r}function vc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},gr={transition:null},gc={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:gr,ReactCurrentOwner:Is};function Zi(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:Jt,forEach:function(e,n,t){Jt(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Jt(e,function(){n++}),n},toArray:function(e){return Jt(e,function(n){return n})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=rt;P.Fragment=lc;P.Profiler=oc;P.PureComponent=js;P.StrictMode=sc;P.Suspense=cc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gc;P.act=Zi;P.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wi({},e.props),l=e.key,s=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,o=Is.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in n)Yi.call(n,a)&&!Xi.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&i!==void 0?i[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){i=Array(a);for(var c=0;c<a;c++)i[c]=arguments[c+2];r.children=i}return{$$typeof:Wt,type:e.type,key:l,ref:s,props:r,_owner:o}};P.createContext=function(e){return e={$$typeof:ac,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ic,_context:e},e.Consumer=e};P.createElement=qi;P.createFactory=function(e){var n=qi.bind(null,e);return n.type=e,n};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:uc,render:e}};P.isValidElement=Ms;P.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:vc}};P.memo=function(e,n){return{$$typeof:dc,type:e,compare:n===void 0?null:n}};P.startTransition=function(e){var n=gr.transition;gr.transition={};try{e()}finally{gr.transition=n}};P.unstable_act=Zi;P.useCallback=function(e,n){return oe.current.useCallback(e,n)};P.useContext=function(e){return oe.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};P.useEffect=function(e,n){return oe.current.useEffect(e,n)};P.useId=function(){return oe.current.useId()};P.useImperativeHandle=function(e,n,t){return oe.current.useImperativeHandle(e,n,t)};P.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};P.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};P.useMemo=function(e,n){return oe.current.useMemo(e,n)};P.useReducer=function(e,n,t){return oe.current.useReducer(e,n,t)};P.useRef=function(e){return oe.current.useRef(e)};P.useState=function(e){return oe.current.useState(e)};P.useSyncExternalStore=function(e,n,t){return oe.current.useSyncExternalStore(e,n,t)};P.useTransition=function(){return oe.current.useTransition()};P.version="18.3.1";$i.exports=P;var Us=$i.exports;const hc=tc(Us);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=Us,Cc=Symbol.for("react.element"),wc=Symbol.for("react.fragment"),Ec=Object.prototype.hasOwnProperty,kc=yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fc={key:!0,ref:!0,__self:!0,__source:!0};function Ji(e,n,t){var r,l={},s=null,o=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Ec.call(n,r)&&!Fc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Cc,type:e,key:s,ref:o,props:l,_owner:kc.current}}Zr.Fragment=wc;Zr.jsx=Ji;Zr.jsxs=Ji;Vi.exports=Zr;var Vl=Vi.exports,$l={},ea={exports:{}},ge={},na={exports:{}},ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(k,_){var B=k.length;k.push(_);e:for(;0<B;){var V=B-1>>>1,K=k[V];if(0<l(K,_))k[V]=_,k[B]=K,B=V;else break e}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var _=k[0],B=k.pop();if(B!==_){k[0]=B;e:for(var V=0,K=k.length,qt=K>>>1;V<qt;){var xn=2*(V+1)-1,vl=k[xn],vn=xn+1,Zt=k[vn];if(0>l(vl,B))vn<K&&0>l(Zt,vl)?(k[V]=Zt,k[vn]=B,V=vn):(k[V]=vl,k[xn]=B,V=xn);else if(vn<K&&0>l(Zt,B))k[V]=Zt,k[vn]=B,V=vn;else break e}}return _}function l(k,_){var B=k.sortIndex-_.sortIndex;return B!==0?B:k.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var a=[],c=[],x=1,m=null,p=3,h=!1,y=!1,C=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(k){for(var _=t(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=k)r(c),_.sortIndex=_.expirationTime,n(a,_);else break;_=t(c)}}function v(k){if(C=!1,f(k),!y)if(t(a)!==null)y=!0,ml(E);else{var _=t(c);_!==null&&xl(v,_.startTime-k)}}function E(k,_){y=!1,C&&(C=!1,d(b),b=-1),h=!0;var B=p;try{for(f(_),m=t(a);m!==null&&(!(m.expirationTime>_)||k&&!Se());){var V=m.callback;if(typeof V=="function"){m.callback=null,p=m.priorityLevel;var K=V(m.expirationTime<=_);_=e.unstable_now(),typeof K=="function"?m.callback=K:m===t(a)&&r(a),f(_)}else r(a);m=t(a)}if(m!==null)var qt=!0;else{var xn=t(c);xn!==null&&xl(v,xn.startTime-_),qt=!1}return qt}finally{m=null,p=B,h=!1}}var F=!1,S=null,b=-1,Q=5,D=-1;function Se(){return!(e.unstable_now()-D<Q)}function ot(){if(S!==null){var k=e.unstable_now();D=k;var _=!0;try{_=S(!0,k)}finally{_?it():(F=!1,S=null)}}else F=!1}var it;if(typeof u=="function")it=function(){u(ot)};else if(typeof MessageChannel<"u"){var No=new MessageChannel,nc=No.port2;No.port1.onmessage=ot,it=function(){nc.postMessage(null)}}else it=function(){R(ot,0)};function ml(k){S=k,F||(F=!0,it())}function xl(k,_){b=R(function(){k(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,ml(E))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(k){switch(p){case 1:case 2:case 3:var _=3;break;default:_=p}var B=p;p=_;try{return k()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,_){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var B=p;p=k;try{return _()}finally{p=B}},e.unstable_scheduleCallback=function(k,_,B){var V=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?V+B:V):B=V,k){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=B+K,k={id:x++,callback:_,priorityLevel:k,startTime:B,expirationTime:K,sortIndex:-1},B>V?(k.sortIndex=B,n(c,k),t(a)===null&&k===t(c)&&(C?(d(b),b=-1):C=!0,xl(v,B-V))):(k.sortIndex=K,n(a,k),y||h||(y=!0,ml(E))),k},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(k){var _=p;return function(){var B=p;p=_;try{return k.apply(this,arguments)}finally{p=B}}}})(ta);na.exports=ta;var Sc=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=Us,ve=Sc;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ra=new Set,Pt={};function Pn(e,n){Xn(e,n),Xn(e+"Capture",n)}function Xn(e,n){for(Pt[e]=n,e=0;e<n.length;e++)ra.add(n[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,_c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jo={},Oo={};function Bc(e){return Hl.call(Oo,e)?!0:Hl.call(jo,e)?!1:_c.test(e)?Oo[e]=!0:(jo[e]=!0,!1)}function Pc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,n,t,r){if(n===null||typeof n>"u"||Pc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ie(e,n,t,r,l,s,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=o}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];J[n]=new ie(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){J[e]=new ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){J[e]=new ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){J[e]=new ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){J[e]=new ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qs=/[\-:]([a-z])/g;function Vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Qs,Vs);J[n]=new ie(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Qs,Vs);J[n]=new ie(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Qs,Vs);J[n]=new ie(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){J[e]=new ie(e,1,!1,e.toLowerCase(),null,!1,!1)});J.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){J[e]=new ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function $s(e,n,t,r){var l=J.hasOwnProperty(n)?J[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Dc(n,t,l,r)&&(t=null),r||l===null?Bc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ge=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,er=Symbol.for("react.element"),An=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Hs=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),sa=Symbol.for("react.context"),Ws=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Gs=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),oa=Symbol.for("react.offscreen"),Io=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=Io&&e[Io]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,hl;function vt(e){if(hl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);hl=n&&n[1]||""}return`
`+hl+e}var yl=!1;function Cl(e,n){if(!e||yl)return"";yl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),s=r.stack.split(`
`),o=l.length-1,i=s.length-1;1<=o&&0<=i&&l[o]!==s[i];)i--;for(;1<=o&&0<=i;o--,i--)if(l[o]!==s[i]){if(o!==1||i!==1)do if(o--,i--,0>i||l[o]!==s[i]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=i);break}}}finally{yl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?vt(e):""}function zc(e){switch(e.tag){case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case An:return"Portal";case Wl:return"Profiler";case Hs:return"StrictMode";case Gl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sa:return(e.displayName||"Context")+".Consumer";case la:return(e._context.displayName||"Context")+".Provider";case Ws:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gs:return n=e.displayName||null,n!==null?n:Yl(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return Yl(e(n))}catch{}}return null}function Ac(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(n);case 8:return n===Hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ia(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Nc(e){var n=ia(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function nr(e){e._valueTracker||(e._valueTracker=Nc(e))}function aa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ia(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,n){var t=n.checked;return M({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Mo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ua(e,n){n=n.checked,n!=null&&$s(e,"checked",n,!1)}function ql(e,n){ua(e,n);var t=cn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Zl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Zl(e,n.type,cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Uo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Zl(e,n,t){(n!=="number"||Br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gt=Array.isArray;function $n(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+cn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Jl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(g(91));return M({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(g(92));if(gt(t)){if(1<t.length)throw Error(g(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:cn(t)}}function ca(e,n){var t=cn(n.value),r=cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Vo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function da(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function es(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?da(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tr,fa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Dt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lc=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(e){Lc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ct[n]=Ct[e]})});function pa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ct.hasOwnProperty(e)&&Ct[e]?(""+n).trim():n+"px"}function ma(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=pa(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Tc=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ns(e,n){if(n){if(Tc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(g(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(g(61))}if(n.style!=null&&typeof n.style!="object")throw Error(g(62))}}function ts(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rs=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,Hn=null,Wn=null;function $o(e){if(e=Yt(e)){if(typeof ls!="function")throw Error(g(280));var n=e.stateNode;n&&(n=rl(n),ls(e.stateNode,e.type,n))}}function xa(e){Hn?Wn?Wn.push(e):Wn=[e]:Hn=e}function va(){if(Hn){var e=Hn,n=Wn;if(Wn=Hn=null,$o(e),n)for(e=0;e<n.length;e++)$o(n[e])}}function ga(e,n){return e(n)}function ha(){}var wl=!1;function ya(e,n,t){if(wl)return e(n,t);wl=!0;try{return ga(e,n,t)}finally{wl=!1,(Hn!==null||Wn!==null)&&(ha(),va())}}function zt(e,n){var t=e.stateNode;if(t===null)return null;var r=rl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(g(231,n,typeof t));return t}var ss=!1;if(Ve)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){ss=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{ss=!1}function Rc(e,n,t,r,l,s,o,i,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(x){this.onError(x)}}var wt=!1,Pr=null,Dr=!1,os=null,jc={onError:function(e){wt=!0,Pr=e}};function Oc(e,n,t,r,l,s,o,i,a){wt=!1,Pr=null,Rc.apply(jc,arguments)}function Ic(e,n,t,r,l,s,o,i,a){if(Oc.apply(this,arguments),wt){if(wt){var c=Pr;wt=!1,Pr=null}else throw Error(g(198));Dr||(Dr=!0,os=c)}}function Dn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ca(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ho(e){if(Dn(e)!==e)throw Error(g(188))}function Mc(e){var n=e.alternate;if(!n){if(n=Dn(e),n===null)throw Error(g(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===t)return Ho(l),e;if(s===r)return Ho(l),n;s=s.sibling}throw Error(g(188))}if(t.return!==r.return)t=l,r=s;else{for(var o=!1,i=l.child;i;){if(i===t){o=!0,t=l,r=s;break}if(i===r){o=!0,r=l,t=s;break}i=i.sibling}if(!o){for(i=s.child;i;){if(i===t){o=!0,t=s,r=l;break}if(i===r){o=!0,r=s,t=l;break}i=i.sibling}if(!o)throw Error(g(189))}}if(t.alternate!==r)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?e:n}function wa(e){return e=Mc(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ea(e);if(n!==null)return n;e=e.sibling}return null}var ka=ve.unstable_scheduleCallback,Wo=ve.unstable_cancelCallback,Uc=ve.unstable_shouldYield,Qc=ve.unstable_requestPaint,$=ve.unstable_now,Vc=ve.unstable_getCurrentPriorityLevel,Ys=ve.unstable_ImmediatePriority,Fa=ve.unstable_UserBlockingPriority,zr=ve.unstable_NormalPriority,$c=ve.unstable_LowPriority,Sa=ve.unstable_IdlePriority,Jr=null,Re=null;function Hc(e){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Jr,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Kc,Wc=Math.log,Gc=Math.LN2;function Kc(e){return e>>>=0,e===0?32:31-(Wc(e)/Gc|0)|0}var rr=64,lr=4194304;function ht(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,o=t&268435455;if(o!==0){var i=o&~l;i!==0?r=ht(i):(s&=o,s!==0&&(r=ht(s)))}else o=t&~l,o!==0?r=ht(o):s!==0&&(r=ht(s));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,s=n&-n,l>=s||l===16&&(s&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-De(n),l=1<<t,r|=e[t],n&=~l;return r}function Yc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-De(s),i=1<<o,a=l[o];a===-1?(!(i&t)||i&r)&&(l[o]=Yc(i,n)):a<=n&&(e.expiredLanes|=i),s&=~i}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ba(){var e=rr;return rr<<=1,!(rr&4194240)&&(rr=64),e}function El(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Gt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function qc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-De(t),s=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~s}}function Xs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-De(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var A=0;function _a(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ba,qs,Pa,Da,za,as=!1,sr=[],nn=null,tn=null,rn=null,At=new Map,Nt=new Map,qe=[],Zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,n){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":At.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(n.pointerId)}}function ct(e,n,t,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},n!==null&&(n=Yt(n),n!==null&&qs(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Jc(e,n,t,r,l){switch(n){case"focusin":return nn=ct(nn,e,n,t,r,l),!0;case"dragenter":return tn=ct(tn,e,n,t,r,l),!0;case"mouseover":return rn=ct(rn,e,n,t,r,l),!0;case"pointerover":var s=l.pointerId;return At.set(s,ct(At.get(s)||null,e,n,t,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Nt.set(s,ct(Nt.get(s)||null,e,n,t,r,l)),!0}return!1}function Aa(e){var n=yn(e.target);if(n!==null){var t=Dn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ca(t),n!==null){e.blockedOn=n,za(e.priority,function(){Pa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=us(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);rs=r,t.target.dispatchEvent(r),rs=null}else return n=Yt(t),n!==null&&qs(n),e.blockedOn=t,!1;n.shift()}return!0}function Ko(e,n,t){hr(e)&&t.delete(n)}function ed(){as=!1,nn!==null&&hr(nn)&&(nn=null),tn!==null&&hr(tn)&&(tn=null),rn!==null&&hr(rn)&&(rn=null),At.forEach(Ko),Nt.forEach(Ko)}function dt(e,n){e.blockedOn===n&&(e.blockedOn=null,as||(as=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,ed)))}function Lt(e){function n(l){return dt(l,e)}if(0<sr.length){dt(sr[0],e);for(var t=1;t<sr.length;t++){var r=sr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&dt(nn,e),tn!==null&&dt(tn,e),rn!==null&&dt(rn,e),At.forEach(n),Nt.forEach(n),t=0;t<qe.length;t++)r=qe[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(t=qe[0],t.blockedOn===null);)Aa(t),t.blockedOn===null&&qe.shift()}var Gn=Ge.ReactCurrentBatchConfig,Nr=!0;function nd(e,n,t,r){var l=A,s=Gn.transition;Gn.transition=null;try{A=1,Zs(e,n,t,r)}finally{A=l,Gn.transition=s}}function td(e,n,t,r){var l=A,s=Gn.transition;Gn.transition=null;try{A=4,Zs(e,n,t,r)}finally{A=l,Gn.transition=s}}function Zs(e,n,t,r){if(Nr){var l=us(e,n,t,r);if(l===null)Al(e,n,r,Lr,t),Go(e,r);else if(Jc(l,e,n,t,r))r.stopPropagation();else if(Go(e,r),n&4&&-1<Zc.indexOf(e)){for(;l!==null;){var s=Yt(l);if(s!==null&&Ba(s),s=us(e,n,t,r),s===null&&Al(e,n,r,Lr,t),s===l)break;l=s}l!==null&&r.stopPropagation()}else Al(e,n,r,null,t)}}var Lr=null;function us(e,n,t,r){if(Lr=null,e=Ks(r),e=yn(e),e!==null)if(n=Dn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ca(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Lr=e,null}function Na(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vc()){case Ys:return 1;case Fa:return 4;case zr:case $c:return 16;case Sa:return 536870912;default:return 16}default:return 16}}var Je=null,Js=null,yr=null;function La(){if(yr)return yr;var e,n=Js,t=n.length,r,l="value"in Je?Je.value:Je.textContent,s=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[s-r];r++);return yr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function Yo(){return!1}function he(e){function n(t,r,l,s,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?or:Yo,this.isPropagationStopped=Yo,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),n}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=he(lt),Kt=M({},lt,{view:0,detail:0}),rd=he(Kt),kl,Fl,ft,el=M({},Kt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ft&&(ft&&e.type==="mousemove"?(kl=e.screenX-ft.screenX,Fl=e.screenY-ft.screenY):Fl=kl=0,ft=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Fl}}),Xo=he(el),ld=M({},el,{dataTransfer:0}),sd=he(ld),od=M({},Kt,{relatedTarget:0}),Sl=he(od),id=M({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=he(id),ud=M({},lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=he(ud),dd=M({},lt,{data:0}),qo=he(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=md[e])?!!n[e]:!1}function no(){return xd}var vd=M({},Kt,{key:function(e){if(e.key){var n=fd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=he(vd),hd=M({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=he(hd),yd=M({},Kt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),Cd=he(yd),wd=M({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=he(wd),kd=M({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fd=he(kd),Sd=[9,13,27,32],to=Ve&&"CompositionEvent"in window,Et=null;Ve&&"documentMode"in document&&(Et=document.documentMode);var bd=Ve&&"TextEvent"in window&&!Et,Ta=Ve&&(!to||Et&&8<Et&&11>=Et),Jo=" ",ei=!1;function Ra(e,n){switch(e){case"keyup":return Sd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ja(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function _d(e,n){switch(e){case"compositionend":return ja(n);case"keypress":return n.which!==32?null:(ei=!0,Jo);case"textInput":return e=n.data,e===Jo&&ei?null:e;default:return null}}function Bd(e,n){if(Ln)return e==="compositionend"||!to&&Ra(e,n)?(e=La(),yr=Js=Je=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ta&&n.locale!=="ko"?null:n.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ni(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pd[e.type]:n==="textarea"}function Oa(e,n,t,r){xa(r),n=Tr(n,"onChange"),0<n.length&&(t=new eo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var kt=null,Tt=null;function Dd(e){Ya(e,0)}function nl(e){var n=jn(e);if(aa(n))return e}function zd(e,n){if(e==="change")return n}var Ia=!1;if(Ve){var bl;if(Ve){var _l="oninput"in document;if(!_l){var ti=document.createElement("div");ti.setAttribute("oninput","return;"),_l=typeof ti.oninput=="function"}bl=_l}else bl=!1;Ia=bl&&(!document.documentMode||9<document.documentMode)}function ri(){kt&&(kt.detachEvent("onpropertychange",Ma),Tt=kt=null)}function Ma(e){if(e.propertyName==="value"&&nl(Tt)){var n=[];Oa(n,Tt,e,Ks(e)),ya(Dd,n)}}function Ad(e,n,t){e==="focusin"?(ri(),kt=n,Tt=t,kt.attachEvent("onpropertychange",Ma)):e==="focusout"&&ri()}function Nd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Tt)}function Ld(e,n){if(e==="click")return nl(n)}function Td(e,n){if(e==="input"||e==="change")return nl(n)}function Rd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ae=typeof Object.is=="function"?Object.is:Rd;function Rt(e,n){if(Ae(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Hl.call(n,l)||!Ae(e[l],n[l]))return!1}return!0}function li(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function si(e,n){var t=li(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=li(t)}}function Ua(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ua(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qa(){for(var e=window,n=Br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Br(e.document)}return n}function ro(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function jd(e){var n=Qa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ua(t.ownerDocument.documentElement,t)){if(r!==null&&ro(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=si(t,s);var o=si(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Od=Ve&&"documentMode"in document&&11>=document.documentMode,Tn=null,cs=null,Ft=null,ds=!1;function oi(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ds||Tn==null||Tn!==Br(r)||(r=Tn,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ft&&Rt(Ft,r)||(Ft=r,r=Tr(cs,"onSelect"),0<r.length&&(n=new eo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Tn)))}function ir(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Rn={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionend:ir("Transition","TransitionEnd")},Bl={},Va={};Ve&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function tl(e){if(Bl[e])return Bl[e];if(!Rn[e])return e;var n=Rn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Va)return Bl[e]=n[t];return e}var $a=tl("animationend"),Ha=tl("animationiteration"),Wa=tl("animationstart"),Ga=tl("transitionend"),Ka=new Map,ii="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,n){Ka.set(e,n),Pn(n,[e])}for(var Pl=0;Pl<ii.length;Pl++){var Dl=ii[Pl],Id=Dl.toLowerCase(),Md=Dl[0].toUpperCase()+Dl.slice(1);fn(Id,"on"+Md)}fn($a,"onAnimationEnd");fn(Ha,"onAnimationIteration");fn(Wa,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(Ga,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(yt));function ai(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Ic(r,n,void 0,e),e.currentTarget=null}function Ya(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var o=r.length-1;0<=o;o--){var i=r[o],a=i.instance,c=i.currentTarget;if(i=i.listener,a!==s&&l.isPropagationStopped())break e;ai(l,i,c),s=a}else for(o=0;o<r.length;o++){if(i=r[o],a=i.instance,c=i.currentTarget,i=i.listener,a!==s&&l.isPropagationStopped())break e;ai(l,i,c),s=a}}}if(Dr)throw e=os,Dr=!1,os=null,e}function L(e,n){var t=n[vs];t===void 0&&(t=n[vs]=new Set);var r=e+"__bubble";t.has(r)||(Xa(n,e,2,!1),t.add(r))}function zl(e,n,t){var r=0;n&&(r|=4),Xa(t,e,r,n)}var ar="_reactListening"+Math.random().toString(36).slice(2);function jt(e){if(!e[ar]){e[ar]=!0,ra.forEach(function(t){t!=="selectionchange"&&(Ud.has(t)||zl(t,!1,e),zl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ar]||(n[ar]=!0,zl("selectionchange",!1,n))}}function Xa(e,n,t,r){switch(Na(n)){case 1:var l=nd;break;case 4:l=td;break;default:l=Zs}t=l.bind(null,n,t,e),l=void 0,!ss||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Al(e,n,t,r,l){var s=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;i!==null;){if(o=yn(i),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}i=i.parentNode}}r=r.return}ya(function(){var c=s,x=Ks(t),m=[];e:{var p=Ka.get(e);if(p!==void 0){var h=eo,y=e;switch(e){case"keypress":if(Cr(t)===0)break e;case"keydown":case"keyup":h=gd;break;case"focusin":y="focus",h=Sl;break;case"focusout":y="blur",h=Sl;break;case"beforeblur":case"afterblur":h=Sl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Cd;break;case $a:case Ha:case Wa:h=ad;break;case Ga:h=Ed;break;case"scroll":h=rd;break;case"wheel":h=Fd;break;case"copy":case"cut":case"paste":h=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Zo}var C=(n&4)!==0,R=!C&&e==="scroll",d=C?p!==null?p+"Capture":null:p;C=[];for(var u=c,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=zt(u,d),v!=null&&C.push(Ot(u,v,f)))),R)break;u=u.return}0<C.length&&(p=new h(p,y,null,t,x),m.push({event:p,listeners:C}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==rs&&(y=t.relatedTarget||t.fromElement)&&(yn(y)||y[$e]))break e;if((h||p)&&(p=x.window===x?x:(p=x.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=c,y=y?yn(y):null,y!==null&&(R=Dn(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=c),h!==y)){if(C=Xo,v="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(C=Zo,v="onPointerLeave",d="onPointerEnter",u="pointer"),R=h==null?p:jn(h),f=y==null?p:jn(y),p=new C(v,u+"leave",h,t,x),p.target=R,p.relatedTarget=f,v=null,yn(x)===c&&(C=new C(d,u+"enter",y,t,x),C.target=f,C.relatedTarget=R,v=C),R=v,h&&y)n:{for(C=h,d=y,u=0,f=C;f;f=zn(f))u++;for(f=0,v=d;v;v=zn(v))f++;for(;0<u-f;)C=zn(C),u--;for(;0<f-u;)d=zn(d),f--;for(;u--;){if(C===d||d!==null&&C===d.alternate)break n;C=zn(C),d=zn(d)}C=null}else C=null;h!==null&&ui(m,p,h,C,!1),y!==null&&R!==null&&ui(m,R,y,C,!0)}}e:{if(p=c?jn(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var E=zd;else if(ni(p))if(Ia)E=Td;else{E=Nd;var F=Ad}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Ld);if(E&&(E=E(e,c))){Oa(m,E,t,x);break e}F&&F(e,p,c),e==="focusout"&&(F=p._wrapperState)&&F.controlled&&p.type==="number"&&Zl(p,"number",p.value)}switch(F=c?jn(c):window,e){case"focusin":(ni(F)||F.contentEditable==="true")&&(Tn=F,cs=c,Ft=null);break;case"focusout":Ft=cs=Tn=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,oi(m,t,x);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":oi(m,t,x)}var S;if(to)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ln?Ra(e,t)&&(b="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(Ta&&t.locale!=="ko"&&(Ln||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ln&&(S=La()):(Je=x,Js="value"in Je?Je.value:Je.textContent,Ln=!0)),F=Tr(c,b),0<F.length&&(b=new qo(b,e,null,t,x),m.push({event:b,listeners:F}),S?b.data=S:(S=ja(t),S!==null&&(b.data=S)))),(S=bd?_d(e,t):Bd(e,t))&&(c=Tr(c,"onBeforeInput"),0<c.length&&(x=new qo("onBeforeInput","beforeinput",null,t,x),m.push({event:x,listeners:c}),x.data=S))}Ya(m,n)})}function Ot(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Tr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=zt(e,t),s!=null&&r.unshift(Ot(e,s,l)),s=zt(e,n),s!=null&&r.push(Ot(e,s,l))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ui(e,n,t,r,l){for(var s=n._reactName,o=[];t!==null&&t!==r;){var i=t,a=i.alternate,c=i.stateNode;if(a!==null&&a===r)break;i.tag===5&&c!==null&&(i=c,l?(a=zt(t,s),a!=null&&o.unshift(Ot(t,a,i))):l||(a=zt(t,s),a!=null&&o.push(Ot(t,a,i)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Qd=/\r\n?/g,Vd=/\u0000|\uFFFD/g;function ci(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Vd,"")}function ur(e,n,t){if(n=ci(n),ci(e)!==n&&t)throw Error(g(425))}function Rr(){}var fs=null,ps=null;function ms(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xs=typeof setTimeout=="function"?setTimeout:void 0,$d=typeof clearTimeout=="function"?clearTimeout:void 0,di=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof di<"u"?function(e){return di.resolve(null).then(e).catch(Wd)}:xs;function Wd(e){setTimeout(function(){throw e})}function Nl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Lt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Lt(n)}function ln(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fi(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var st=Math.random().toString(36).slice(2),Te="__reactFiber$"+st,It="__reactProps$"+st,$e="__reactContainer$"+st,vs="__reactEvents$"+st,Gd="__reactListeners$"+st,Kd="__reactHandles$"+st;function yn(e){var n=e[Te];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$e]||t[Te]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fi(e);e!==null;){if(t=e[Te])return t;e=fi(e)}return n}e=t,t=e.parentNode}return null}function Yt(e){return e=e[Te]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function rl(e){return e[It]||null}var gs=[],On=-1;function pn(e){return{current:e}}function T(e){0>On||(e.current=gs[On],gs[On]=null,On--)}function N(e,n){On++,gs[On]=e.current,e.current=n}var dn={},re=pn(dn),ce=pn(!1),Fn=dn;function qn(e,n){var t=e.type.contextTypes;if(!t)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in t)l[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function jr(){T(ce),T(re)}function pi(e,n,t){if(re.current!==dn)throw Error(g(168));N(re,n),N(ce,t)}function qa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(g(108,Ac(e)||"Unknown",l));return M({},t,r)}function Or(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Fn=re.current,N(re,e),N(ce,ce.current),!0}function mi(e,n,t){var r=e.stateNode;if(!r)throw Error(g(169));t?(e=qa(e,n,Fn),r.__reactInternalMemoizedMergedChildContext=e,T(ce),T(re),N(re,e)):T(ce),N(ce,t)}var Ie=null,ll=!1,Ll=!1;function Za(e){Ie===null?Ie=[e]:Ie.push(e)}function Yd(e){ll=!0,Za(e)}function mn(){if(!Ll&&Ie!==null){Ll=!0;var e=0,n=A;try{var t=Ie;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ie=null,ll=!1}catch(l){throw Ie!==null&&(Ie=Ie.slice(e+1)),ka(Ys,mn),l}finally{A=n,Ll=!1}}return null}var In=[],Mn=0,Ir=null,Mr=0,ye=[],Ce=0,Sn=null,Me=1,Ue="";function gn(e,n){In[Mn++]=Mr,In[Mn++]=Ir,Ir=e,Mr=n}function Ja(e,n,t){ye[Ce++]=Me,ye[Ce++]=Ue,ye[Ce++]=Sn,Sn=e;var r=Me;e=Ue;var l=32-De(r)-1;r&=~(1<<l),t+=1;var s=32-De(n)+l;if(30<s){var o=l-l%5;s=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Me=1<<32-De(n)+l|t<<l|r,Ue=s+e}else Me=1<<s|t<<l|r,Ue=e}function lo(e){e.return!==null&&(gn(e,1),Ja(e,1,0))}function so(e){for(;e===Ir;)Ir=In[--Mn],In[Mn]=null,Mr=In[--Mn],In[Mn]=null;for(;e===Sn;)Sn=ye[--Ce],ye[Ce]=null,Ue=ye[--Ce],ye[Ce]=null,Me=ye[--Ce],ye[Ce]=null}var xe=null,me=null,j=!1,Pe=null;function eu(e,n){var t=we(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function xi(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xe=e,me=ln(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xe=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Sn!==null?{id:Me,overflow:Ue}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=we(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,xe=e,me=null,!0):!1;default:return!1}}function hs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ys(e){if(j){var n=me;if(n){var t=n;if(!xi(e,n)){if(hs(e))throw Error(g(418));n=ln(t.nextSibling);var r=xe;n&&xi(e,n)?eu(r,t):(e.flags=e.flags&-4097|2,j=!1,xe=e)}}else{if(hs(e))throw Error(g(418));e.flags=e.flags&-4097|2,j=!1,xe=e}}}function vi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function cr(e){if(e!==xe)return!1;if(!j)return vi(e),j=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ms(e.type,e.memoizedProps)),n&&(n=me)){if(hs(e))throw nu(),Error(g(418));for(;n;)eu(e,n),n=ln(n.nextSibling)}if(vi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=ln(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=xe?ln(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=me;e;)e=ln(e.nextSibling)}function Zn(){me=xe=null,j=!1}function oo(e){Pe===null?Pe=[e]:Pe.push(e)}var Xd=Ge.ReactCurrentBatchConfig;function pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var r=t.stateNode}if(!r)throw Error(g(147,e));var l=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(o){var i=l.refs;o===null?delete i[s]:i[s]=o},n._stringRef=s,n)}if(typeof e!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,e))}return e}function dr(e,n){throw e=Object.prototype.toString.call(n),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gi(e){var n=e._init;return n(e._payload)}function tu(e){function n(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=un(d,u),d.index=0,d.sibling=null,d}function s(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function i(d,u,f,v){return u===null||u.tag!==6?(u=Ul(f,d.mode,v),u.return=d,u):(u=l(u,f),u.return=d,u)}function a(d,u,f,v){var E=f.type;return E===Nn?x(d,u,f.props.children,v,f.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ye&&gi(E)===u.type)?(v=l(u,f.props),v.ref=pt(d,u,f),v.return=d,v):(v=_r(f.type,f.key,f.props,null,d.mode,v),v.ref=pt(d,u,f),v.return=d,v)}function c(d,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Ql(f,d.mode,v),u.return=d,u):(u=l(u,f.children||[]),u.return=d,u)}function x(d,u,f,v,E){return u===null||u.tag!==7?(u=kn(f,d.mode,v,E),u.return=d,u):(u=l(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ul(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case er:return f=_r(u.type,u.key,u.props,null,d.mode,f),f.ref=pt(d,null,u),f.return=d,f;case An:return u=Ql(u,d.mode,f),u.return=d,u;case Ye:var v=u._init;return m(d,v(u._payload),f)}if(gt(u)||at(u))return u=kn(u,d.mode,f,null),u.return=d,u;dr(d,u)}return null}function p(d,u,f,v){var E=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:i(d,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case er:return f.key===E?a(d,u,f,v):null;case An:return f.key===E?c(d,u,f,v):null;case Ye:return E=f._init,p(d,u,E(f._payload),v)}if(gt(f)||at(f))return E!==null?null:x(d,u,f,v,null);dr(d,f)}return null}function h(d,u,f,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,i(u,d,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case er:return d=d.get(v.key===null?f:v.key)||null,a(u,d,v,E);case An:return d=d.get(v.key===null?f:v.key)||null,c(u,d,v,E);case Ye:var F=v._init;return h(d,u,f,F(v._payload),E)}if(gt(v)||at(v))return d=d.get(f)||null,x(u,d,v,E,null);dr(u,v)}return null}function y(d,u,f,v){for(var E=null,F=null,S=u,b=u=0,Q=null;S!==null&&b<f.length;b++){S.index>b?(Q=S,S=null):Q=S.sibling;var D=p(d,S,f[b],v);if(D===null){S===null&&(S=Q);break}e&&S&&D.alternate===null&&n(d,S),u=s(D,u,b),F===null?E=D:F.sibling=D,F=D,S=Q}if(b===f.length)return t(d,S),j&&gn(d,b),E;if(S===null){for(;b<f.length;b++)S=m(d,f[b],v),S!==null&&(u=s(S,u,b),F===null?E=S:F.sibling=S,F=S);return j&&gn(d,b),E}for(S=r(d,S);b<f.length;b++)Q=h(S,d,b,f[b],v),Q!==null&&(e&&Q.alternate!==null&&S.delete(Q.key===null?b:Q.key),u=s(Q,u,b),F===null?E=Q:F.sibling=Q,F=Q);return e&&S.forEach(function(Se){return n(d,Se)}),j&&gn(d,b),E}function C(d,u,f,v){var E=at(f);if(typeof E!="function")throw Error(g(150));if(f=E.call(f),f==null)throw Error(g(151));for(var F=E=null,S=u,b=u=0,Q=null,D=f.next();S!==null&&!D.done;b++,D=f.next()){S.index>b?(Q=S,S=null):Q=S.sibling;var Se=p(d,S,D.value,v);if(Se===null){S===null&&(S=Q);break}e&&S&&Se.alternate===null&&n(d,S),u=s(Se,u,b),F===null?E=Se:F.sibling=Se,F=Se,S=Q}if(D.done)return t(d,S),j&&gn(d,b),E;if(S===null){for(;!D.done;b++,D=f.next())D=m(d,D.value,v),D!==null&&(u=s(D,u,b),F===null?E=D:F.sibling=D,F=D);return j&&gn(d,b),E}for(S=r(d,S);!D.done;b++,D=f.next())D=h(S,d,b,D.value,v),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?b:D.key),u=s(D,u,b),F===null?E=D:F.sibling=D,F=D);return e&&S.forEach(function(ot){return n(d,ot)}),j&&gn(d,b),E}function R(d,u,f,v){if(typeof f=="object"&&f!==null&&f.type===Nn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case er:e:{for(var E=f.key,F=u;F!==null;){if(F.key===E){if(E=f.type,E===Nn){if(F.tag===7){t(d,F.sibling),u=l(F,f.props.children),u.return=d,d=u;break e}}else if(F.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ye&&gi(E)===F.type){t(d,F.sibling),u=l(F,f.props),u.ref=pt(d,F,f),u.return=d,d=u;break e}t(d,F);break}else n(d,F);F=F.sibling}f.type===Nn?(u=kn(f.props.children,d.mode,v,f.key),u.return=d,d=u):(v=_r(f.type,f.key,f.props,null,d.mode,v),v.ref=pt(d,u,f),v.return=d,d=v)}return o(d);case An:e:{for(F=f.key;u!==null;){if(u.key===F)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(d,u.sibling),u=l(u,f.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=Ql(f,d.mode,v),u.return=d,d=u}return o(d);case Ye:return F=f._init,R(d,u,F(f._payload),v)}if(gt(f))return y(d,u,f,v);if(at(f))return C(d,u,f,v);dr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(d,u.sibling),u=l(u,f),u.return=d,d=u):(t(d,u),u=Ul(f,d.mode,v),u.return=d,d=u),o(d)):t(d,u)}return R}var Jn=tu(!0),ru=tu(!1),Ur=pn(null),Qr=null,Un=null,io=null;function ao(){io=Un=Qr=null}function uo(e){var n=Ur.current;T(Ur),e._currentValue=n}function Cs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Kn(e,n){Qr=e,io=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ue=!0),e.firstContext=null)}function ke(e){var n=e._currentValue;if(io!==e)if(e={context:e,memoizedValue:n,next:null},Un===null){if(Qr===null)throw Error(g(308));Un=e,Qr.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return n}var Cn=null;function co(e){Cn===null?Cn=[e]:Cn.push(e)}function lu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,co(n)):(t.next=l.next,l.next=t),n.interleaved=t,He(e,r)}function He(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xe=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,He(e,t)}return l=r.interleaved,l===null?(n.next=n,co(r)):(n.next=l.next,l.next=n),r.interleaved=n,He(e,t)}function wr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xs(e,t)}}function hi(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?l=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?l=s=n:s=s.next=n}else l=s=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Vr(e,n,t,r){var l=e.updateQueue;Xe=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var a=i,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var x=e.alternate;x!==null&&(x=x.updateQueue,i=x.lastBaseUpdate,i!==o&&(i===null?x.firstBaseUpdate=c:i.next=c,x.lastBaseUpdate=a))}if(s!==null){var m=l.baseState;o=0,x=c=a=null,i=s;do{var p=i.lane,h=i.eventTime;if((r&p)===p){x!==null&&(x=x.next={eventTime:h,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,C=i;switch(p=n,h=t,C.tag){case 1:if(y=C.payload,typeof y=="function"){m=y.call(h,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,p=typeof y=="function"?y.call(h,m,p):y,p==null)break e;m=M({},m,p);break e;case 2:Xe=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[i]:p.push(i))}else h={eventTime:h,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},x===null?(c=x=h,a=m):x=x.next=h,o|=p;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;p=i,i=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(x===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=x,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else s===null&&(l.shared.lanes=0);_n|=o,e.lanes=o,e.memoizedState=m}}function yi(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var Xt={},je=pn(Xt),Mt=pn(Xt),Ut=pn(Xt);function wn(e){if(e===Xt)throw Error(g(174));return e}function po(e,n){switch(N(Ut,n),N(Mt,e),N(je,Xt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:es(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=es(n,e)}T(je),N(je,n)}function et(){T(je),T(Mt),T(Ut)}function ou(e){wn(Ut.current);var n=wn(je.current),t=es(n,e.type);n!==t&&(N(Mt,e),N(je,t))}function mo(e){Mt.current===e&&(T(je),T(Mt))}var O=pn(0);function $r(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Tl=[];function xo(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var Er=Ge.ReactCurrentDispatcher,Rl=Ge.ReactCurrentBatchConfig,bn=0,I=null,W=null,Y=null,Hr=!1,St=!1,Qt=0,qd=0;function ee(){throw Error(g(321))}function vo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ae(e[t],n[t]))return!1;return!0}function go(e,n,t,r,l,s){if(bn=s,I=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Er.current=e===null||e.memoizedState===null?nf:tf,e=t(r,l),St){s=0;do{if(St=!1,Qt=0,25<=s)throw Error(g(301));s+=1,Y=W=null,n.updateQueue=null,Er.current=rf,e=t(r,l)}while(St)}if(Er.current=Wr,n=W!==null&&W.next!==null,bn=0,Y=W=I=null,Hr=!1,n)throw Error(g(300));return e}function ho(){var e=Qt!==0;return Qt=0,e}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?I.memoizedState=Y=e:Y=Y.next=e,Y}function Fe(){if(W===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var n=Y===null?I.memoizedState:Y.next;if(n!==null)Y=n,W=e;else{if(e===null)throw Error(g(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},Y===null?I.memoizedState=Y=e:Y=Y.next=e}return Y}function Vt(e,n){return typeof n=="function"?n(e):n}function jl(e){var n=Fe(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=W,l=r.baseQueue,s=t.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}r.baseQueue=l=s,t.pending=null}if(l!==null){s=l.next,r=r.baseState;var i=o=null,a=null,c=s;do{var x=c.lane;if((bn&x)===x)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:x,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(i=a=m,o=r):a=a.next=m,I.lanes|=x,_n|=x}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=i,Ae(r,n.memoizedState)||(ue=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do s=l.lane,I.lanes|=s,_n|=s,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ol(e){var n=Fe(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,s=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do s=e(s,o.action),o=o.next;while(o!==l);Ae(s,n.memoizedState)||(ue=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function iu(){}function au(e,n){var t=I,r=Fe(),l=n(),s=!Ae(r.memoizedState,l);if(s&&(r.memoizedState=l,ue=!0),r=r.queue,yo(du.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,$t(9,cu.bind(null,t,r,l,n),void 0,null),X===null)throw Error(g(349));bn&30||uu(t,n,l)}return l}function uu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=I.updateQueue,n===null?(n={lastEffect:null,stores:null},I.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function cu(e,n,t,r){n.value=t,n.getSnapshot=r,fu(n)&&pu(e)}function du(e,n,t){return t(function(){fu(n)&&pu(e)})}function fu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ae(e,t)}catch{return!0}}function pu(e){var n=He(e,1);n!==null&&ze(n,e,1,-1)}function Ci(e){var n=Le();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},n.queue=e,e=e.dispatch=ef.bind(null,I,e),[n.memoizedState,e]}function $t(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=I.updateQueue,n===null?(n={lastEffect:null,stores:null},I.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function mu(){return Fe().memoizedState}function kr(e,n,t,r){var l=Le();I.flags|=e,l.memoizedState=$t(1|n,t,void 0,r===void 0?null:r)}function sl(e,n,t,r){var l=Fe();r=r===void 0?null:r;var s=void 0;if(W!==null){var o=W.memoizedState;if(s=o.destroy,r!==null&&vo(r,o.deps)){l.memoizedState=$t(n,t,s,r);return}}I.flags|=e,l.memoizedState=$t(1|n,t,s,r)}function wi(e,n){return kr(8390656,8,e,n)}function yo(e,n){return sl(2048,8,e,n)}function xu(e,n){return sl(4,2,e,n)}function vu(e,n){return sl(4,4,e,n)}function gu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hu(e,n,t){return t=t!=null?t.concat([e]):null,sl(4,4,gu.bind(null,n,e),t)}function Co(){}function yu(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cu(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function wu(e,n,t){return bn&21?(Ae(t,n)||(t=ba(),I.lanes|=t,_n|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=t)}function Zd(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),n()}finally{A=t,Rl.transition=r}}function Eu(){return Fe().memoizedState}function Jd(e,n,t){var r=an(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ku(e))Fu(n,t);else if(t=lu(e,n,t,r),t!==null){var l=se();ze(t,e,r,l),Su(t,n,r)}}function ef(e,n,t){var r=an(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ku(e))Fu(n,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var o=n.lastRenderedState,i=s(o,t);if(l.hasEagerState=!0,l.eagerState=i,Ae(i,o)){var a=n.interleaved;a===null?(l.next=l,co(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=lu(e,n,l,r),t!==null&&(l=se(),ze(t,e,r,l),Su(t,n,r))}}function ku(e){var n=e.alternate;return e===I||n!==null&&n===I}function Fu(e,n){St=Hr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Su(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xs(e,t)}}var Wr={readContext:ke,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},nf={readContext:ke,useCallback:function(e,n){return Le().memoizedState=[e,n===void 0?null:n],e},useContext:ke,useEffect:wi,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,kr(4194308,4,gu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return kr(4194308,4,e,n)},useInsertionEffect:function(e,n){return kr(4,2,e,n)},useMemo:function(e,n){var t=Le();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Le();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Jd.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var n=Le();return e={current:e},n.memoizedState=e},useState:Ci,useDebugValue:Co,useDeferredValue:function(e){return Le().memoizedState=e},useTransition:function(){var e=Ci(!1),n=e[0];return e=Zd.bind(null,e[1]),Le().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=I,l=Le();if(j){if(t===void 0)throw Error(g(407));t=t()}else{if(t=n(),X===null)throw Error(g(349));bn&30||uu(r,n,t)}l.memoizedState=t;var s={value:t,getSnapshot:n};return l.queue=s,wi(du.bind(null,r,s,e),[e]),r.flags|=2048,$t(9,cu.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=Le(),n=X.identifierPrefix;if(j){var t=Ue,r=Me;t=(r&~(1<<32-De(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=qd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tf={readContext:ke,useCallback:yu,useContext:ke,useEffect:yo,useImperativeHandle:hu,useInsertionEffect:xu,useLayoutEffect:vu,useMemo:Cu,useReducer:jl,useRef:mu,useState:function(){return jl(Vt)},useDebugValue:Co,useDeferredValue:function(e){var n=Fe();return wu(n,W.memoizedState,e)},useTransition:function(){var e=jl(Vt)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:iu,useSyncExternalStore:au,useId:Eu,unstable_isNewReconciler:!1},rf={readContext:ke,useCallback:yu,useContext:ke,useEffect:yo,useImperativeHandle:hu,useInsertionEffect:xu,useLayoutEffect:vu,useMemo:Cu,useReducer:Ol,useRef:mu,useState:function(){return Ol(Vt)},useDebugValue:Co,useDeferredValue:function(e){var n=Fe();return W===null?n.memoizedState=e:wu(n,W.memoizedState,e)},useTransition:function(){var e=Ol(Vt)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:iu,useSyncExternalStore:au,useId:Eu,unstable_isNewReconciler:!1};function _e(e,n){if(e&&e.defaultProps){n=M({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ws(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:M({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ol={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),l=an(e),s=Qe(r,l);s.payload=n,t!=null&&(s.callback=t),n=sn(e,s,l),n!==null&&(ze(n,e,l,r),wr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),l=an(e),s=Qe(r,l);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=sn(e,s,l),n!==null&&(ze(n,e,l,r),wr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=an(e),l=Qe(t,r);l.tag=2,n!=null&&(l.callback=n),n=sn(e,l,r),n!==null&&(ze(n,e,r,t),wr(n,e,r))}};function Ei(e,n,t,r,l,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):n.prototype&&n.prototype.isPureReactComponent?!Rt(t,r)||!Rt(l,s):!0}function bu(e,n,t){var r=!1,l=dn,s=n.contextType;return typeof s=="object"&&s!==null?s=ke(s):(l=de(n)?Fn:re.current,r=n.contextTypes,s=(r=r!=null)?qn(e,l):dn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ol,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),n}function ki(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ol.enqueueReplaceState(n,n.state,null)}function Es(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},fo(e);var s=n.contextType;typeof s=="object"&&s!==null?l.context=ke(s):(s=de(n)?Fn:re.current,l.context=qn(e,s)),l.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(ws(e,n,s,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ol.enqueueReplaceState(l,l.state,null),Vr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nt(e,n){try{var t="",r=n;do t+=zc(r),r=r.return;while(r);var l=t}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:l,digest:null}}function Il(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ks(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function _u(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Kr||(Kr=!0,Ns=r),ks(e,n)},t}function Bu(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){ks(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ks(e,n),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Fi(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=yf.bind(null,e,n,t),n.then(e,e))}function Si(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function bi(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var sf=Ge.ReactCurrentOwner,ue=!1;function le(e,n,t,r){n.child=e===null?ru(n,null,t,r):Jn(n,e.child,t,r)}function _i(e,n,t,r,l){t=t.render;var s=n.ref;return Kn(n,l),r=go(e,n,t,r,s,l),t=ho(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,We(e,n,l)):(j&&t&&lo(n),n.flags|=1,le(e,n,r,l),n.child)}function Bi(e,n,t,r,l){if(e===null){var s=t.type;return typeof s=="function"&&!Bo(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,Pu(e,n,s,r,l)):(e=_r(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&l)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Rt,t(o,r)&&e.ref===n.ref)return We(e,n,l)}return n.flags|=1,e=un(s,r),e.ref=n.ref,e.return=n,n.child=e}function Pu(e,n,t,r,l){if(e!==null){var s=e.memoizedProps;if(Rt(s,r)&&e.ref===n.ref)if(ue=!1,n.pendingProps=r=s,(e.lanes&l)!==0)e.flags&131072&&(ue=!0);else return n.lanes=e.lanes,We(e,n,l)}return Fs(e,n,t,r,l)}function Du(e,n,t){var r=n.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},N(Vn,pe),pe|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,N(Vn,pe),pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,N(Vn,pe),pe|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,N(Vn,pe),pe|=r;return le(e,n,l,t),n.child}function zu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Fs(e,n,t,r,l){var s=de(t)?Fn:re.current;return s=qn(n,s),Kn(n,l),t=go(e,n,t,r,s,l),r=ho(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,We(e,n,l)):(j&&r&&lo(n),n.flags|=1,le(e,n,t,l),n.child)}function Pi(e,n,t,r,l){if(de(t)){var s=!0;Or(n)}else s=!1;if(Kn(n,l),n.stateNode===null)Fr(e,n),bu(n,t,r),Es(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,i=n.memoizedProps;o.props=i;var a=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=ke(c):(c=de(t)?Fn:re.current,c=qn(n,c));var x=t.getDerivedStateFromProps,m=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||a!==c)&&ki(n,o,r,c),Xe=!1;var p=n.memoizedState;o.state=p,Vr(n,r,o,l),a=n.memoizedState,i!==r||p!==a||ce.current||Xe?(typeof x=="function"&&(ws(n,t,x,r),a=n.memoizedState),(i=Xe||Ei(n,t,i,r,p,a,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=c,r=i):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,su(e,n),i=n.memoizedProps,c=n.type===n.elementType?i:_e(n.type,i),o.props=c,m=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=ke(a):(a=de(t)?Fn:re.current,a=qn(n,a));var h=t.getDerivedStateFromProps;(x=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==m||p!==a)&&ki(n,o,r,a),Xe=!1,p=n.memoizedState,o.state=p,Vr(n,r,o,l);var y=n.memoizedState;i!==m||p!==y||ce.current||Xe?(typeof h=="function"&&(ws(n,t,h,r),y=n.memoizedState),(c=Xe||Ei(n,t,c,r,p,y,a)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Ss(e,n,t,r,s,l)}function Ss(e,n,t,r,l,s){zu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&mi(n,t,!1),We(e,n,s);r=n.stateNode,sf.current=n;var i=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Jn(n,e.child,null,s),n.child=Jn(n,null,i,s)):le(e,n,i,s),n.memoizedState=r.state,l&&mi(n,t,!0),n.child}function Au(e){var n=e.stateNode;n.pendingContext?pi(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pi(e,n.context,!1),po(e,n.containerInfo)}function Di(e,n,t,r,l){return Zn(),oo(l),n.flags|=256,le(e,n,t,r),n.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nu(e,n,t){var r=n.pendingProps,l=O.current,s=!1,o=(n.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),N(O,l&1),e===null)return ys(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,s?(r=n.mode,s=n.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ul(o,r,0,null),e=kn(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=_s(t),n.memoizedState=bs,e):wo(n,o));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return of(e,n,o,r,i,l,t);if(s){s=r.fallback,o=n.mode,l=e.child,i=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=un(l,a),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?s=un(i,s):(s=kn(s,o,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,o=e.child.memoizedState,o=o===null?_s(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~t,n.memoizedState=bs,r}return s=e.child,e=s.sibling,r=un(s,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function wo(e,n){return n=ul({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function fr(e,n,t,r){return r!==null&&oo(r),Jn(n,e.child,null,t),e=wo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function of(e,n,t,r,l,s,o){if(t)return n.flags&256?(n.flags&=-257,r=Il(Error(g(422))),fr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,l=n.mode,r=ul({mode:"visible",children:r.children},l,0,null),s=kn(s,l,o,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,n.mode&1&&Jn(n,e.child,null,o),n.child.memoizedState=_s(o),n.memoizedState=bs,s);if(!(n.mode&1))return fr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,s=Error(g(419)),r=Il(s,r,void 0),fr(e,n,o,r)}if(i=(o&e.childLanes)!==0,ue||i){if(r=X,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,He(e,l),ze(r,e,l,-1))}return _o(),r=Il(Error(g(421))),fr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Cf.bind(null,e),l._reactRetry=n,null):(e=s.treeContext,me=ln(l.nextSibling),xe=n,j=!0,Pe=null,e!==null&&(ye[Ce++]=Me,ye[Ce++]=Ue,ye[Ce++]=Sn,Me=e.id,Ue=e.overflow,Sn=n),n=wo(n,r.children),n.flags|=4096,n)}function zi(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Cs(e.return,n,t)}function Ml(e,n,t,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=l)}function Lu(e,n,t){var r=n.pendingProps,l=r.revealOrder,s=r.tail;if(le(e,n,r.children,t),r=O.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zi(e,t,n);else if(e.tag===19)zi(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(N(O,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&$r(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ml(n,!1,l,t,s);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&$r(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ml(n,!0,t,null,s);break;case"together":Ml(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function We(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_n|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(g(153));if(n.child!==null){for(e=n.child,t=un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function af(e,n,t){switch(n.tag){case 3:Au(n),Zn();break;case 5:ou(n);break;case 1:de(n.type)&&Or(n);break;case 4:po(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;N(Ur,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(N(O,O.current&1),n.flags|=128,null):t&n.child.childLanes?Nu(e,n,t):(N(O,O.current&1),e=We(e,n,t),e!==null?e.sibling:null);N(O,O.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Lu(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),N(O,O.current),r)break;return null;case 22:case 23:return n.lanes=0,Du(e,n,t)}return We(e,n,t)}var Tu,Bs,Ru,ju;Tu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bs=function(){};Ru=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,wn(je.current);var s=null;switch(t){case"input":l=Xl(e,l),r=Xl(e,r),s=[];break;case"select":l=M({},l,{value:void 0}),r=M({},r,{value:void 0}),s=[];break;case"textarea":l=Jl(e,l),r=Jl(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rr)}ns(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var i=l[c];for(o in i)i.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pt.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(i=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==i&&(a!=null||i!=null))if(c==="style")if(i){for(o in i)!i.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&i[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(s||(s=[]),s.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,i=i?i.__html:void 0,a!=null&&i!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pt.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&L("scroll",e),s||i===a||(s=[])):(s=s||[]).push(c,a))}t&&(s=s||[]).push("style",t);var c=s;(n.updateQueue=c)&&(n.flags|=4)}};ju=function(e,n,t,r){t!==r&&(n.flags|=4)};function mt(e,n){if(!j)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function uf(e,n,t){var r=n.pendingProps;switch(so(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return de(n.type)&&jr(),ne(n),null;case 3:return r=n.stateNode,et(),T(ce),T(re),xo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Pe!==null&&(Rs(Pe),Pe=null))),Bs(e,n),ne(n),null;case 5:mo(n);var l=wn(Ut.current);if(t=n.type,e!==null&&n.stateNode!=null)Ru(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(g(166));return ne(n),null}if(e=wn(je.current),cr(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[Te]=n,r[It]=s,e=(n.mode&1)!==0,t){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(l=0;l<yt.length;l++)L(yt[l],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":Mo(r,s),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},L("invalid",r);break;case"textarea":Qo(r,s),L("invalid",r)}ns(t,s),l=null;for(var o in s)if(s.hasOwnProperty(o)){var i=s[o];o==="children"?typeof i=="string"?r.textContent!==i&&(s.suppressHydrationWarning!==!0&&ur(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&ur(r.textContent,i,e),l=["children",""+i]):Pt.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&L("scroll",r)}switch(t){case"input":nr(r),Uo(r,s,!0);break;case"textarea":nr(r),Vo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Rr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=da(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Te]=n,e[It]=r,Tu(e,n,!1,!1),n.stateNode=e;e:{switch(o=ts(t,r),t){case"dialog":L("cancel",e),L("close",e),l=r;break;case"iframe":case"object":case"embed":L("load",e),l=r;break;case"video":case"audio":for(l=0;l<yt.length;l++)L(yt[l],e);l=r;break;case"source":L("error",e),l=r;break;case"img":case"image":case"link":L("error",e),L("load",e),l=r;break;case"details":L("toggle",e),l=r;break;case"input":Mo(e,r),l=Xl(e,r),L("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=M({},r,{value:void 0}),L("invalid",e);break;case"textarea":Qo(e,r),l=Jl(e,r),L("invalid",e);break;default:l=r}ns(t,l),i=l;for(s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="style"?ma(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fa(e,a)):s==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Dt(e,a):typeof a=="number"&&Dt(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pt.hasOwnProperty(s)?a!=null&&s==="onScroll"&&L("scroll",e):a!=null&&$s(e,s,a,o))}switch(t){case"input":nr(e),Uo(e,r,!1);break;case"textarea":nr(e),Vo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?$n(e,!!r.multiple,s,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Rr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)ju(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(g(166));if(t=wn(Ut.current),wn(je.current),cr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Te]=n,(s=r.nodeValue!==t)&&(e=xe,e!==null))switch(e.tag){case 3:ur(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ur(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Te]=n,n.stateNode=r}return ne(n),null;case 13:if(T(O),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(j&&me!==null&&n.mode&1&&!(n.flags&128))nu(),Zn(),n.flags|=98560,s=!1;else if(s=cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(g(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(g(317));s[Te]=n}else Zn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),s=!1}else Pe!==null&&(Rs(Pe),Pe=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||O.current&1?G===0&&(G=3):_o())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return et(),Bs(e,n),e===null&&jt(n.stateNode.containerInfo),ne(n),null;case 10:return uo(n.type._context),ne(n),null;case 17:return de(n.type)&&jr(),ne(n),null;case 19:if(T(O),s=n.memoizedState,s===null)return ne(n),null;if(r=(n.flags&128)!==0,o=s.rendering,o===null)if(r)mt(s,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=$r(e),o!==null){for(n.flags|=128,mt(s,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return N(O,O.current&1|2),n.child}e=e.sibling}s.tail!==null&&$()>tt&&(n.flags|=128,r=!0,mt(s,!1),n.lanes=4194304)}else{if(!r)if(e=$r(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),mt(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!j)return ne(n),null}else 2*$()-s.renderingStartTime>tt&&t!==1073741824&&(n.flags|=128,r=!0,mt(s,!1),n.lanes=4194304);s.isBackwards?(o.sibling=n.child,n.child=o):(t=s.last,t!==null?t.sibling=o:n.child=o,s.last=o)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=$(),n.sibling=null,t=O.current,N(O,r?t&1|2:t&1),n):(ne(n),null);case 22:case 23:return bo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?pe&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(g(156,n.tag))}function cf(e,n){switch(so(n),n.tag){case 1:return de(n.type)&&jr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(),T(ce),T(re),xo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return mo(n),null;case 13:if(T(O),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(g(340));Zn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return T(O),null;case 4:return et(),null;case 10:return uo(n.type._context),null;case 22:case 23:return bo(),null;case 24:return null;default:return null}}var pr=!1,te=!1,df=typeof WeakSet=="function"?WeakSet:Set,w=null;function Qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){U(e,n,r)}else t.current=null}function Ps(e,n,t){try{t()}catch(r){U(e,n,r)}}var Ai=!1;function ff(e,n){if(fs=Nr,e=Qa(),ro(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,i=-1,a=-1,c=0,x=0,m=e,p=null;n:for(;;){for(var h;m!==t||l!==0&&m.nodeType!==3||(i=o+l),m!==s||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(h=m.firstChild)!==null;)p=m,m=h;for(;;){if(m===e)break n;if(p===t&&++c===l&&(i=o),p===s&&++x===r&&(a=o),(h=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=h}t=i===-1||a===-1?null:{start:i,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(ps={focusedElem:e,selectionRange:t},Nr=!1,w=n;w!==null;)if(n=w,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,w=e;else for(;w!==null;){n=w;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var C=y.memoizedProps,R=y.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?C:_e(n.type,C),R);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){U(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,w=e;break}w=n.return}return y=Ai,Ai=!1,y}function bt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&Ps(n,t,s)}l=l.next}while(l!==r)}}function il(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ds(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ou(e){var n=e.alternate;n!==null&&(e.alternate=null,Ou(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Te],delete n[It],delete n[vs],delete n[Gd],delete n[Kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iu(e){return e.tag===5||e.tag===3||e.tag===4}function Ni(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Rr));else if(r!==4&&(e=e.child,e!==null))for(zs(e,n,t),e=e.sibling;e!==null;)zs(e,n,t),e=e.sibling}function As(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(As(e,n,t),e=e.sibling;e!==null;)As(e,n,t),e=e.sibling}var q=null,Be=!1;function Ke(e,n,t){for(t=t.child;t!==null;)Mu(e,n,t),t=t.sibling}function Mu(e,n,t){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Jr,t)}catch{}switch(t.tag){case 5:te||Qn(t,n);case 6:var r=q,l=Be;q=null,Ke(e,n,t),q=r,Be=l,q!==null&&(Be?(e=q,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):q.removeChild(t.stateNode));break;case 18:q!==null&&(Be?(e=q,t=t.stateNode,e.nodeType===8?Nl(e.parentNode,t):e.nodeType===1&&Nl(e,t),Lt(e)):Nl(q,t.stateNode));break;case 4:r=q,l=Be,q=t.stateNode.containerInfo,Be=!0,Ke(e,n,t),q=r,Be=l;break;case 0:case 11:case 14:case 15:if(!te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ps(t,n,o),l=l.next}while(l!==r)}Ke(e,n,t);break;case 1:if(!te&&(Qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(i){U(t,n,i)}Ke(e,n,t);break;case 21:Ke(e,n,t);break;case 22:t.mode&1?(te=(r=te)||t.memoizedState!==null,Ke(e,n,t),te=r):Ke(e,n,t);break;default:Ke(e,n,t)}}function Li(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new df),n.forEach(function(r){var l=wf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function be(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var s=e,o=n,i=o;e:for(;i!==null;){switch(i.tag){case 5:q=i.stateNode,Be=!1;break e;case 3:q=i.stateNode.containerInfo,Be=!0;break e;case 4:q=i.stateNode.containerInfo,Be=!0;break e}i=i.return}if(q===null)throw Error(g(160));Mu(s,o,l),q=null,Be=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){U(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Uu(n,e),n=n.sibling}function Uu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(n,e),Ne(e),r&4){try{bt(3,e,e.return),il(3,e)}catch(C){U(e,e.return,C)}try{bt(5,e,e.return)}catch(C){U(e,e.return,C)}}break;case 1:be(n,e),Ne(e),r&512&&t!==null&&Qn(t,t.return);break;case 5:if(be(n,e),Ne(e),r&512&&t!==null&&Qn(t,t.return),e.flags&32){var l=e.stateNode;try{Dt(l,"")}catch(C){U(e,e.return,C)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,o=t!==null?t.memoizedProps:s,i=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&ua(l,s),ts(i,o);var c=ts(i,s);for(o=0;o<a.length;o+=2){var x=a[o],m=a[o+1];x==="style"?ma(l,m):x==="dangerouslySetInnerHTML"?fa(l,m):x==="children"?Dt(l,m):$s(l,x,m,c)}switch(i){case"input":ql(l,s);break;case"textarea":ca(l,s);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?$n(l,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?$n(l,!!s.multiple,s.defaultValue,!0):$n(l,!!s.multiple,s.multiple?[]:"",!1))}l[It]=s}catch(C){U(e,e.return,C)}}break;case 6:if(be(n,e),Ne(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(C){U(e,e.return,C)}}break;case 3:if(be(n,e),Ne(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Lt(n.containerInfo)}catch(C){U(e,e.return,C)}break;case 4:be(n,e),Ne(e);break;case 13:be(n,e),Ne(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(Fo=$())),r&4&&Li(e);break;case 22:if(x=t!==null&&t.memoizedState!==null,e.mode&1?(te=(c=te)||x,be(n,e),te=c):be(n,e),Ne(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!x&&e.mode&1)for(w=e,x=e.child;x!==null;){for(m=w=x;w!==null;){switch(p=w,h=p.child,p.tag){case 0:case 11:case 14:case 15:bt(4,p,p.return);break;case 1:Qn(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(C){U(r,t,C)}}break;case 5:Qn(p,p.return);break;case 22:if(p.memoizedState!==null){Ri(m);continue}}h!==null?(h.return=p,w=h):Ri(m)}x=x.sibling}e:for(x=null,m=e;;){if(m.tag===5){if(x===null){x=m;try{l=m.stateNode,c?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,i.style.display=pa("display",o))}catch(C){U(e,e.return,C)}}}else if(m.tag===6){if(x===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(C){U(e,e.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;x===m&&(x=null),m=m.return}x===m&&(x=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:be(n,e),Ne(e),r&4&&Li(e);break;case 21:break;default:be(n,e),Ne(e)}}function Ne(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Iu(t)){var r=t;break e}t=t.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dt(l,""),r.flags&=-33);var s=Ni(e);As(e,s,l);break;case 3:case 4:var o=r.stateNode.containerInfo,i=Ni(e);zs(e,i,o);break;default:throw Error(g(161))}}catch(a){U(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pf(e,n,t){w=e,Qu(e)}function Qu(e,n,t){for(var r=(e.mode&1)!==0;w!==null;){var l=w,s=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||pr;if(!o){var i=l.alternate,a=i!==null&&i.memoizedState!==null||te;i=pr;var c=te;if(pr=o,(te=a)&&!c)for(w=l;w!==null;)o=w,a=o.child,o.tag===22&&o.memoizedState!==null?ji(l):a!==null?(a.return=o,w=a):ji(l);for(;s!==null;)w=s,Qu(s),s=s.sibling;w=l,pr=i,te=c}Ti(e)}else l.subtreeFlags&8772&&s!==null?(s.return=l,w=s):Ti(e)}}function Ti(e){for(;w!==null;){var n=w;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||il(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!te)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:_e(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&yi(n,s,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}yi(n,o,t)}break;case 5:var i=n.stateNode;if(t===null&&n.flags&4){t=i;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var x=c.memoizedState;if(x!==null){var m=x.dehydrated;m!==null&&Lt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}te||n.flags&512&&Ds(n)}catch(p){U(n,n.return,p)}}if(n===e){w=null;break}if(t=n.sibling,t!==null){t.return=n.return,w=t;break}w=n.return}}function Ri(e){for(;w!==null;){var n=w;if(n===e){w=null;break}var t=n.sibling;if(t!==null){t.return=n.return,w=t;break}w=n.return}}function ji(e){for(;w!==null;){var n=w;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{il(4,n)}catch(a){U(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){U(n,l,a)}}var s=n.return;try{Ds(n)}catch(a){U(n,s,a)}break;case 5:var o=n.return;try{Ds(n)}catch(a){U(n,o,a)}}}catch(a){U(n,n.return,a)}if(n===e){w=null;break}var i=n.sibling;if(i!==null){i.return=n.return,w=i;break}w=n.return}}var mf=Math.ceil,Gr=Ge.ReactCurrentDispatcher,Eo=Ge.ReactCurrentOwner,Ee=Ge.ReactCurrentBatchConfig,z=0,X=null,H=null,Z=0,pe=0,Vn=pn(0),G=0,Ht=null,_n=0,al=0,ko=0,_t=null,ae=null,Fo=0,tt=1/0,Oe=null,Kr=!1,Ns=null,on=null,mr=!1,en=null,Yr=0,Bt=0,Ls=null,Sr=-1,br=0;function se(){return z&6?$():Sr!==-1?Sr:Sr=$()}function an(e){return e.mode&1?z&2&&Z!==0?Z&-Z:Xd.transition!==null?(br===0&&(br=ba()),br):(e=A,e!==0||(e=window.event,e=e===void 0?16:Na(e.type)),e):1}function ze(e,n,t,r){if(50<Bt)throw Bt=0,Ls=null,Error(g(185));Gt(e,t,r),(!(z&2)||e!==X)&&(e===X&&(!(z&2)&&(al|=t),G===4&&Ze(e,Z)),fe(e,r),t===1&&z===0&&!(n.mode&1)&&(tt=$()+500,ll&&mn()))}function fe(e,n){var t=e.callbackNode;Xc(e,n);var r=Ar(e,e===X?Z:0);if(r===0)t!==null&&Wo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Wo(t),n===1)e.tag===0?Yd(Oi.bind(null,e)):Za(Oi.bind(null,e)),Hd(function(){!(z&6)&&mn()}),t=null;else{switch(_a(r)){case 1:t=Ys;break;case 4:t=Fa;break;case 16:t=zr;break;case 536870912:t=Sa;break;default:t=zr}t=Xu(t,Vu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Vu(e,n){if(Sr=-1,br=0,z&6)throw Error(g(327));var t=e.callbackNode;if(Yn()&&e.callbackNode!==t)return null;var r=Ar(e,e===X?Z:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Xr(e,r);else{n=r;var l=z;z|=2;var s=Hu();(X!==e||Z!==n)&&(Oe=null,tt=$()+500,En(e,n));do try{gf();break}catch(i){$u(e,i)}while(!0);ao(),Gr.current=s,z=l,H!==null?n=0:(X=null,Z=0,n=G)}if(n!==0){if(n===2&&(l=is(e),l!==0&&(r=l,n=Ts(e,l))),n===1)throw t=Ht,En(e,0),Ze(e,r),fe(e,$()),t;if(n===6)Ze(e,r);else{if(l=e.current.alternate,!(r&30)&&!xf(l)&&(n=Xr(e,r),n===2&&(s=is(e),s!==0&&(r=s,n=Ts(e,s))),n===1))throw t=Ht,En(e,0),Ze(e,r),fe(e,$()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(g(345));case 2:hn(e,ae,Oe);break;case 3:if(Ze(e,r),(r&130023424)===r&&(n=Fo+500-$(),10<n)){if(Ar(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=xs(hn.bind(null,e,ae,Oe),n);break}hn(e,ae,Oe);break;case 4:if(Ze(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-De(r);s=1<<o,o=n[o],o>l&&(l=o),r&=~s}if(r=l,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=xs(hn.bind(null,e,ae,Oe),r);break}hn(e,ae,Oe);break;case 5:hn(e,ae,Oe);break;default:throw Error(g(329))}}}return fe(e,$()),e.callbackNode===t?Vu.bind(null,e):null}function Ts(e,n){var t=_t;return e.current.memoizedState.isDehydrated&&(En(e,n).flags|=256),e=Xr(e,n),e!==2&&(n=ae,ae=t,n!==null&&Rs(n)),e}function Rs(e){ae===null?ae=e:ae.push.apply(ae,e)}function xf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],s=l.getSnapshot;l=l.value;try{if(!Ae(s(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ze(e,n){for(n&=~ko,n&=~al,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),r=1<<t;e[t]=-1,n&=~r}}function Oi(e){if(z&6)throw Error(g(327));Yn();var n=Ar(e,0);if(!(n&1))return fe(e,$()),null;var t=Xr(e,n);if(e.tag!==0&&t===2){var r=is(e);r!==0&&(n=r,t=Ts(e,r))}if(t===1)throw t=Ht,En(e,0),Ze(e,n),fe(e,$()),t;if(t===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,hn(e,ae,Oe),fe(e,$()),null}function So(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(tt=$()+500,ll&&mn())}}function Bn(e){en!==null&&en.tag===0&&!(z&6)&&Yn();var n=z;z|=1;var t=Ee.transition,r=A;try{if(Ee.transition=null,A=1,e)return e()}finally{A=r,Ee.transition=t,z=n,!(z&6)&&mn()}}function bo(){pe=Vn.current,T(Vn)}function En(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,$d(t)),H!==null)for(t=H.return;t!==null;){var r=t;switch(so(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jr();break;case 3:et(),T(ce),T(re),xo();break;case 5:mo(r);break;case 4:et();break;case 13:T(O);break;case 19:T(O);break;case 10:uo(r.type._context);break;case 22:case 23:bo()}t=t.return}if(X=e,H=e=un(e.current,null),Z=pe=n,G=0,Ht=null,ko=al=_n=0,ae=_t=null,Cn!==null){for(n=0;n<Cn.length;n++)if(t=Cn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=l,r.next=o}t.pending=r}Cn=null}return e}function $u(e,n){do{var t=H;try{if(ao(),Er.current=Wr,Hr){for(var r=I.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Hr=!1}if(bn=0,Y=W=I=null,St=!1,Qt=0,Eo.current=null,t===null||t.return===null){G=1,Ht=n,H=null;break}e:{var s=e,o=t.return,i=t,a=n;if(n=Z,i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,x=i,m=x.tag;if(!(x.mode&1)&&(m===0||m===11||m===15)){var p=x.alternate;p?(x.updateQueue=p.updateQueue,x.memoizedState=p.memoizedState,x.lanes=p.lanes):(x.updateQueue=null,x.memoizedState=null)}var h=Si(o);if(h!==null){h.flags&=-257,bi(h,o,i,s,n),h.mode&1&&Fi(s,c,n),n=h,a=c;var y=n.updateQueue;if(y===null){var C=new Set;C.add(a),n.updateQueue=C}else y.add(a);break e}else{if(!(n&1)){Fi(s,c,n),_o();break e}a=Error(g(426))}}else if(j&&i.mode&1){var R=Si(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),bi(R,o,i,s,n),oo(nt(a,i));break e}}s=a=nt(a,i),G!==4&&(G=2),_t===null?_t=[s]:_t.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var d=_u(s,a,n);hi(s,d);break e;case 1:i=a;var u=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(on===null||!on.has(f)))){s.flags|=65536,n&=-n,s.lanes|=n;var v=Bu(s,i,n);hi(s,v);break e}}s=s.return}while(s!==null)}Gu(t)}catch(E){n=E,H===t&&t!==null&&(H=t=t.return);continue}break}while(!0)}function Hu(){var e=Gr.current;return Gr.current=Wr,e===null?Wr:e}function _o(){(G===0||G===3||G===2)&&(G=4),X===null||!(_n&268435455)&&!(al&268435455)||Ze(X,Z)}function Xr(e,n){var t=z;z|=2;var r=Hu();(X!==e||Z!==n)&&(Oe=null,En(e,n));do try{vf();break}catch(l){$u(e,l)}while(!0);if(ao(),z=t,Gr.current=r,H!==null)throw Error(g(261));return X=null,Z=0,G}function vf(){for(;H!==null;)Wu(H)}function gf(){for(;H!==null&&!Uc();)Wu(H)}function Wu(e){var n=Yu(e.alternate,e,pe);e.memoizedProps=e.pendingProps,n===null?Gu(e):H=n,Eo.current=null}function Gu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cf(t,n),t!==null){t.flags&=32767,H=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,H=null;return}}else if(t=uf(t,n,pe),t!==null){H=t;return}if(n=n.sibling,n!==null){H=n;return}H=n=e}while(n!==null);G===0&&(G=5)}function hn(e,n,t){var r=A,l=Ee.transition;try{Ee.transition=null,A=1,hf(e,n,t,r)}finally{Ee.transition=l,A=r}return null}function hf(e,n,t,r){do Yn();while(en!==null);if(z&6)throw Error(g(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(qc(e,s),e===X&&(H=X=null,Z=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||mr||(mr=!0,Xu(zr,function(){return Yn(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Ee.transition,Ee.transition=null;var o=A;A=1;var i=z;z|=4,Eo.current=null,ff(e,t),Uu(t,e),jd(ps),Nr=!!fs,ps=fs=null,e.current=t,pf(t),Qc(),z=i,A=o,Ee.transition=s}else e.current=t;if(mr&&(mr=!1,en=e,Yr=l),s=e.pendingLanes,s===0&&(on=null),Hc(t.stateNode),fe(e,$()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Kr)throw Kr=!1,e=Ns,Ns=null,e;return Yr&1&&e.tag!==0&&Yn(),s=e.pendingLanes,s&1?e===Ls?Bt++:(Bt=0,Ls=e):Bt=0,mn(),null}function Yn(){if(en!==null){var e=_a(Yr),n=Ee.transition,t=A;try{if(Ee.transition=null,A=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Yr=0,z&6)throw Error(g(331));var l=z;for(z|=4,w=e.current;w!==null;){var s=w,o=s.child;if(w.flags&16){var i=s.deletions;if(i!==null){for(var a=0;a<i.length;a++){var c=i[a];for(w=c;w!==null;){var x=w;switch(x.tag){case 0:case 11:case 15:bt(8,x,s)}var m=x.child;if(m!==null)m.return=x,w=m;else for(;w!==null;){x=w;var p=x.sibling,h=x.return;if(Ou(x),x===c){w=null;break}if(p!==null){p.return=h,w=p;break}w=h}}}var y=s.alternate;if(y!==null){var C=y.child;if(C!==null){y.child=null;do{var R=C.sibling;C.sibling=null,C=R}while(C!==null)}}w=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,w=o;else e:for(;w!==null;){if(s=w,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bt(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,w=d;break e}w=s.return}}var u=e.current;for(w=u;w!==null;){o=w;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,w=f;else e:for(o=u;w!==null;){if(i=w,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:il(9,i)}}catch(E){U(i,i.return,E)}if(i===o){w=null;break e}var v=i.sibling;if(v!==null){v.return=i.return,w=v;break e}w=i.return}}if(z=l,mn(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Jr,e)}catch{}r=!0}return r}finally{A=t,Ee.transition=n}}return!1}function Ii(e,n,t){n=nt(t,n),n=_u(e,n,1),e=sn(e,n,1),n=se(),e!==null&&(Gt(e,1,n),fe(e,n))}function U(e,n,t){if(e.tag===3)Ii(e,e,t);else for(;n!==null;){if(n.tag===3){Ii(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=nt(t,e),e=Bu(n,e,1),n=sn(n,e,1),e=se(),n!==null&&(Gt(n,1,e),fe(n,e));break}}n=n.return}}function yf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,X===e&&(Z&t)===t&&(G===4||G===3&&(Z&130023424)===Z&&500>$()-Fo?En(e,0):ko|=t),fe(e,n)}function Ku(e,n){n===0&&(e.mode&1?(n=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):n=1);var t=se();e=He(e,n),e!==null&&(Gt(e,n,t),fe(e,t))}function Cf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ku(e,t)}function wf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(n),Ku(e,t)}var Yu;Yu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ce.current)ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ue=!1,af(e,n,t);ue=!!(e.flags&131072)}else ue=!1,j&&n.flags&1048576&&Ja(n,Mr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fr(e,n),e=n.pendingProps;var l=qn(n,re.current);Kn(n,t),l=go(null,n,r,e,l,t);var s=ho();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,de(r)?(s=!0,Or(n)):s=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fo(n),l.updater=ol,n.stateNode=l,l._reactInternals=n,Es(n,r,e,t),n=Ss(null,n,r,!0,s,t)):(n.tag=0,j&&s&&lo(n),le(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=kf(r),e=_e(r,e),l){case 0:n=Fs(null,n,r,e,t);break e;case 1:n=Pi(null,n,r,e,t);break e;case 11:n=_i(null,n,r,e,t);break e;case 14:n=Bi(null,n,r,_e(r.type,e),t);break e}throw Error(g(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),Fs(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),Pi(e,n,r,l,t);case 3:e:{if(Au(n),e===null)throw Error(g(387));r=n.pendingProps,s=n.memoizedState,l=s.element,su(e,n),Vr(n,r,null,t);var o=n.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){l=nt(Error(g(423)),n),n=Di(e,n,r,t,l);break e}else if(r!==l){l=nt(Error(g(424)),n),n=Di(e,n,r,t,l);break e}else for(me=ln(n.stateNode.containerInfo.firstChild),xe=n,j=!0,Pe=null,t=ru(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zn(),r===l){n=We(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return ou(n),e===null&&ys(n),r=n.type,l=n.pendingProps,s=e!==null?e.memoizedProps:null,o=l.children,ms(r,l)?o=null:s!==null&&ms(r,s)&&(n.flags|=32),zu(e,n),le(e,n,o,t),n.child;case 6:return e===null&&ys(n),null;case 13:return Nu(e,n,t);case 4:return po(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Jn(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),_i(e,n,r,l,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,s=n.memoizedProps,o=l.value,N(Ur,r._currentValue),r._currentValue=o,s!==null)if(Ae(s.value,o)){if(s.children===l.children&&!ce.current){n=We(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var i=s.dependencies;if(i!==null){o=s.child;for(var a=i.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Qe(-1,t&-t),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var x=c.pending;x===null?a.next=a:(a.next=x.next,x.next=a),c.pending=a}}s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Cs(s.return,t,n),i.lanes|=t;break}a=a.next}}else if(s.tag===10)o=s.type===n.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(g(341));o.lanes|=t,i=o.alternate,i!==null&&(i.lanes|=t),Cs(o,t,n),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===n){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}le(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Kn(n,t),l=ke(l),r=r(l),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,l=_e(r,n.pendingProps),l=_e(r.type,l),Bi(e,n,r,l,t);case 15:return Pu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:_e(r,l),Fr(e,n),n.tag=1,de(r)?(e=!0,Or(n)):e=!1,Kn(n,t),bu(n,r,l),Es(n,r,l,t),Ss(null,n,r,!0,e,t);case 19:return Lu(e,n,t);case 22:return Du(e,n,t)}throw Error(g(156,n.tag))};function Xu(e,n){return ka(e,n)}function Ef(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(e,n,t,r){return new Ef(e,n,t,r)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kf(e){if(typeof e=="function")return Bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ws)return 11;if(e===Gs)return 14}return 2}function un(e,n){var t=e.alternate;return t===null?(t=we(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _r(e,n,t,r,l,s){var o=2;if(r=e,typeof e=="function")Bo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Nn:return kn(t.children,l,s,n);case Hs:o=8,l|=8;break;case Wl:return e=we(12,t,n,l|2),e.elementType=Wl,e.lanes=s,e;case Gl:return e=we(13,t,n,l),e.elementType=Gl,e.lanes=s,e;case Kl:return e=we(19,t,n,l),e.elementType=Kl,e.lanes=s,e;case oa:return ul(t,l,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case la:o=10;break e;case sa:o=9;break e;case Ws:o=11;break e;case Gs:o=14;break e;case Ye:o=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return n=we(o,t,n,l),n.elementType=e,n.type=r,n.lanes=s,n}function kn(e,n,t,r){return e=we(7,e,r,n),e.lanes=t,e}function ul(e,n,t,r){return e=we(22,e,r,n),e.elementType=oa,e.lanes=t,e.stateNode={isHidden:!1},e}function Ul(e,n,t){return e=we(6,e,null,n),e.lanes=t,e}function Ql(e,n,t){return n=we(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ff(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(e,n,t,r,l,s,o,i,a){return e=new Ff(e,n,t,i,a),n===1?(n=1,s===!0&&(n|=8)):n=0,s=we(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(s),e}function Sf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function qu(e){if(!e)return dn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(g(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(de(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(g(171))}if(e.tag===1){var t=e.type;if(de(t))return qa(e,t,n)}return n}function Zu(e,n,t,r,l,s,o,i,a){return e=Po(t,r,!0,e,l,s,o,i,a),e.context=qu(null),t=e.current,r=se(),l=an(t),s=Qe(r,l),s.callback=n??null,sn(t,s,l),e.current.lanes=l,Gt(e,l,r),fe(e,r),e}function cl(e,n,t,r){var l=n.current,s=se(),o=an(l);return t=qu(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(s,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=sn(l,n,o),e!==null&&(ze(e,l,o,s),wr(e,l,o)),o}function qr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mi(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Do(e,n){Mi(e,n),(e=e.alternate)&&Mi(e,n)}function bf(){return null}var Ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function zo(e){this._internalRoot=e}dl.prototype.render=zo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(g(409));cl(e,n,null,null)};dl.prototype.unmount=zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bn(function(){cl(null,e,null,null)}),n[$e]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Da();e={blockedOn:null,target:e,priority:n};for(var t=0;t<qe.length&&n!==0&&n<qe[t].priority;t++);qe.splice(t,0,e),t===0&&Aa(e)}};function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ui(){}function _f(e,n,t,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var c=qr(o);s.call(c)}}var o=Zu(n,r,e,0,null,!1,!1,"",Ui);return e._reactRootContainer=o,e[$e]=o.current,jt(e.nodeType===8?e.parentNode:e),Bn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var c=qr(a);i.call(c)}}var a=Po(e,0,!1,null,null,!1,!1,"",Ui);return e._reactRootContainer=a,e[$e]=a.current,jt(e.nodeType===8?e.parentNode:e),Bn(function(){cl(n,a,t,r)}),a}function pl(e,n,t,r,l){var s=t._reactRootContainer;if(s){var o=s;if(typeof l=="function"){var i=l;l=function(){var a=qr(o);i.call(a)}}cl(n,o,e,l)}else o=_f(t,n,e,l,r);return qr(o)}Ba=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ht(n.pendingLanes);t!==0&&(Xs(n,t|1),fe(n,$()),!(z&6)&&(tt=$()+500,mn()))}break;case 13:Bn(function(){var r=He(e,1);if(r!==null){var l=se();ze(r,e,1,l)}}),Do(e,1)}};qs=function(e){if(e.tag===13){var n=He(e,134217728);if(n!==null){var t=se();ze(n,e,134217728,t)}Do(e,134217728)}};Pa=function(e){if(e.tag===13){var n=an(e),t=He(e,n);if(t!==null){var r=se();ze(t,e,n,r)}Do(e,n)}};Da=function(){return A};za=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};ls=function(e,n,t){switch(n){case"input":if(ql(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=rl(r);if(!l)throw Error(g(90));aa(r),ql(r,l)}}}break;case"textarea":ca(e,t);break;case"select":n=t.value,n!=null&&$n(e,!!t.multiple,n,!1)}};ga=So;ha=Bn;var Bf={usingClientEntryPoint:!1,Events:[Yt,jn,rl,xa,va,So]},xt={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pf={bundleType:xt.bundleType,version:xt.version,rendererPackageName:xt.rendererPackageName,rendererConfig:xt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wa(e),e===null?null:e.stateNode},findFiberByHostInstance:xt.findFiberByHostInstance||bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{Jr=xr.inject(Pf),Re=xr}catch{}}ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bf;ge.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ao(n))throw Error(g(200));return Sf(e,n,null,t)};ge.createRoot=function(e,n){if(!Ao(e))throw Error(g(299));var t=!1,r="",l=Ju;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Po(e,1,!1,null,null,t,!1,r,l),e[$e]=n.current,jt(e.nodeType===8?e.parentNode:e),new zo(n)};ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=wa(n),e=e===null?null:e.stateNode,e};ge.flushSync=function(e){return Bn(e)};ge.hydrate=function(e,n,t){if(!fl(n))throw Error(g(200));return pl(null,e,n,!0,t)};ge.hydrateRoot=function(e,n,t){if(!Ao(e))throw Error(g(405));var r=t!=null&&t.hydratedSources||null,l=!1,s="",o=Ju;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Zu(n,null,e,1,t??null,l,!1,s,o),e[$e]=n.current,jt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new dl(n)};ge.render=function(e,n,t){if(!fl(n))throw Error(g(200));return pl(null,e,n,!1,t)};ge.unmountComponentAtNode=function(e){if(!fl(e))throw Error(g(40));return e._reactRootContainer?(Bn(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};ge.unstable_batchedUpdates=So;ge.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!fl(t))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return pl(e,n,t,!1,r)};ge.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),ea.exports=ge;var Df=ea.exports,Qi=Df;$l.createRoot=Qi.createRoot,$l.hydrateRoot=Qi.hydrateRoot;const zf=`<svg class="inline-defs-container" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden"></svg>



<!-- 1. NAVBAR -->
<header class="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#E6EBF0] shadow-[0_2px_12px_rgba(36,60,76,0.04)]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<!-- Logo Oficial -->
<a class="flex items-center gap-2 transition-transform hover:scale-[1.02]" href="#">
<img alt="FlowCommerce" class="h-8 sm:h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSVA639-ifhCTJC2SHIn9lRBomVpzWTcoWuAJNO3ewk_7So1fXXwbglVzIMAN6DOIkyYXSkDidnhc_eGFSiJU3Ld6aL60CZ3OSgxnLlOFxz4FRek1QAopqcky6acPoVAqcv7ZWKRlZ6lG3d0h7DU-ZSbPgUtoWInI1bWCd8esbW6r2TLBzdE9ZV75qd-POKuQAcFoe1Kev0K-IYK8QcBlzG4Kbksgmd3Hh_RqS8aF7cRhPo6sZTmymJdaH5Rsb16iIZQ">
</a>
<!-- Navegación Central -->
<nav class="hidden lg:flex items-center gap-1 xl:gap-2">
<a class="px-3 py-2 text-sm font-medium text-[#243C4C]/80 hover:text-[#1F609C] hover:bg-[#E6EBF0]/50 rounded-lg transition-colors" href="#como-funciona">¿Cómo funciona?</a>
<a class="px-3 py-2 text-sm font-medium text-[#243C4C]/80 hover:text-[#1F609C] hover:bg-[#E6EBF0]/50 rounded-lg transition-colors" href="#beneficios">Beneficios</a>
<a class="px-3 py-2 text-sm font-medium text-[#243C4C]/80 hover:text-[#1F609C] hover:bg-[#E6EBF0]/50 rounded-lg transition-colors" href="#soluciones">Soluciones</a>
<a class="px-3 py-2 text-sm font-medium text-[#243C4C]/80 hover:text-[#1F609C] hover:bg-[#E6EBF0]/50 rounded-lg transition-colors" href="#planes">Precios</a>
<a class="px-3 py-2 text-sm font-medium text-[#243C4C]/80 hover:text-[#1F609C] hover:bg-[#E6EBF0]/50 rounded-lg transition-colors" href="#complementos">Complementos</a>
<a class="px-3 py-2 text-sm font-medium text-[#243C4C]/80 hover:text-[#1F609C] hover:bg-[#E6EBF0]/50 rounded-lg transition-colors" href="#faq">FAQ</a>
</nav>
<!-- Botones de Acción Derecha -->
<div class="flex items-center gap-3">
<a class="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-[#1F609C] hover:text-[#243C4C] hover:bg-[#E6EBF0]/60 rounded-lg transition-colors" href="#planes">
          Iniciar Sesión
        </a>
<a class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1F609C] hover:bg-[#243C4C] rounded-lg shadow-sm hover:shadow transition-all" href="#planes">
<span class="">Comenzar gratis</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</header>
<main class="w-full">
<!-- 2. HERO / SECCIÓN PRINCIPAL -->
<section class="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/60 to-[#F8FAFC]">
<!-- Luces ambientales de fondo -->
<div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-r from-[#1F609C]/10 via-[#5289AD]/15 to-[#4B8D4B]/15 blur-3xl pointer-events-none -z-10 rounded-full"></div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
<!-- Eyebrow Badge -->
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E6EBF0] text-[#1F609C] font-mono-num text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
<span class="w-2 h-2 rounded-full bg-[#4B8D4B] animate-pulse"></span>
            CRM COMERCIAL · VENTAS ÁGILES · GUATEMALA Y LATAM
          </div>
<!-- Título principal H1 exacto con degradado azul y verde -->
<h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#243C4C] tracking-tight mb-6 leading-tight">
            Automatiza tus ventas. Desde la cotización hasta el <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#1F609C] via-[#5289AD] to-[#4B8D4B]">pago</span>.
          </h1>
<!-- Subtítulo exacto -->
<p class="text-base sm:text-xl text-[#243C4C]/80 max-w-2xl mb-8 leading-relaxed font-normal">
            FlowCommerce centraliza clientes, cotizaciones, seguimiento y pagos en una sola plataforma.
          </p>
<!-- Botones CTA -->
<div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#1F609C] text-white font-semibold text-base shadow-md hover:bg-[#243C4C] hover:shadow-lg transition-all transform hover:-translate-y-0.5" href="#planes">
<span class="">Comenzar gratis</span>
<span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</a>
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white border border-[#E6EBF0] text-[#243C4C] font-semibold text-base shadow-sm hover:bg-[#E6EBF0]/50 transition-all" href="#planes">
<span class="">Ver planes</span>
<span class="material-symbols-outlined text-[20px] text-[#5289AD]">payments</span>
</a>
</div>
<!-- Micro-garantías -->
<div class="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8 text-sm text-[#243C4C]/75 font-medium">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[#4B8D4B] text-[18px]">verified</span>
<span class="">Sin tarjeta de crédito requerida</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">bolt</span>
<span class="">Onboarding en 2 minutos</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[#5289AD] text-[18px]">lock</span>
<span class="">Cifrado bancario 256-Bit</span>
</div>
</div>
</div>
<!-- Mockup Interactivo / Visual de Producto -->
<div class="w-full rounded-2xl bg-white border border-[#E6EBF0] p-4 sm:p-6 lg:p-8 shadow-2xl shadow-[#243C4C]/8 relative overflow-hidden">
<!-- Top bar navegador mockup -->
<div class="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#E6EBF0] bg-[#F8FAFC] -m-4 sm:-m-6 lg:-m-8 p-4 sm:p-5 rounded-t-2xl">
<div class="flex items-center gap-3">
<div class="flex items-center gap-1.5">
<span class="w-3 h-3 rounded-full bg-red-400"></span>
<span class="w-3 h-3 rounded-full bg-amber-400"></span>
<span class="w-3 h-3 rounded-full bg-emerald-400"></span>
</div>
<span class="font-mono-num text-xs text-[#243C4C]/70">flowcommerce.app/workspace/pipeline-live</span>
</div>
<div class="flex items-center gap-3">
<span class="px-2.5 py-1 rounded-full bg-[#D9EAD7] text-[#4B8D4B] font-mono-num text-xs font-semibold flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-[#4B8D4B] animate-pulse"></span> EN VIVO
              </span>
<span class="font-mono-num text-xs sm:text-sm text-[#1F609C] font-bold">Q 248,850.00 / Mes</span>
</div>
</div>
<!-- Métricas Resumen -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div class="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF0] flex flex-col justify-between">
<div class="flex items-center justify-between mb-2">
<span class="text-xs font-semibold uppercase tracking-wider text-[#243C4C]/70">Pipeline Activo</span>
<span class="material-symbols-outlined text-[#1F609C] text-[20px]">account_balance_wallet</span>
</div>
<div class="flex items-baseline gap-2 mb-1">
<span class="font-mono-num text-2xl sm:text-3xl font-bold text-[#243C4C]">Q 342,120</span>
<span class="font-mono-num text-xs text-[#4B8D4B] font-semibold bg-[#D9EAD7] px-2 py-0.5 rounded">+18.4%</span>
</div>
<p class="text-xs text-[#243C4C]/70">42 negociaciones activas en 3 etapas de cierre.</p>
</div>
<div class="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF0] flex flex-col justify-between">
<div class="flex items-center justify-between mb-2">
<span class="text-xs font-semibold uppercase tracking-wider text-[#243C4C]/70">Cotizaciones Cerradas</span>
<span class="material-symbols-outlined text-[#4B8D4B] text-[20px]">task_alt</span>
</div>
<div class="flex items-baseline gap-2 mb-1">
<span class="font-mono-num text-2xl sm:text-3xl font-bold text-[#243C4C]">184</span>
<span class="font-mono-num text-xs text-[#4B8D4B] font-semibold bg-[#D9EAD7] px-2 py-0.5 rounded">87% ratio</span>
</div>
<p class="text-xs text-[#243C4C]/70">Tiempo promedio de aprobación: 14 minutos.</p>
</div>
<div class="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF0] flex flex-col justify-between">
<div class="flex items-center justify-between mb-2">
<span class="text-xs font-semibold uppercase tracking-wider text-[#243C4C]/70">Cobros vía Smart Links</span>
<span class="material-symbols-outlined text-[#5289AD] text-[20px]">link</span>
</div>
<div class="flex items-baseline gap-2 mb-1">
<span class="font-mono-num text-2xl sm:text-3xl font-bold text-[#243C4C]">Q 98,480</span>
<span class="font-mono-num text-xs text-[#1F609C] font-semibold bg-[#E6EBF0] px-2 py-0.5 rounded">0 fricción</span>
</div>
<p class="text-xs text-[#243C4C]/70">Cobro directo con liquidación bancaria inmediata en Q.</p>
</div>
</div>
<!-- Tablero Kanban + Conversión -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- Pipeline Kanban de 3 columnas -->
<div class="lg:col-span-8 bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-[#E6EBF0]">
<div class="flex items-center justify-between mb-4">
<div class="flex items-center gap-2">
<span class="font-semibold text-sm text-[#243C4C]">Pipeline Comercial en Tiempo Real</span>
<span class="px-2 py-0.5 rounded bg-white text-[11px] font-mono-num font-semibold text-[#1F609C] border border-[#E6EBF0]">Activo</span>
</div>
<span class="text-xs font-semibold text-[#1F609C] flex items-center gap-1 cursor-pointer hover:underline">
<span class="material-symbols-outlined text-[16px]">add</span> Nueva cotización
                </span>
</div>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
<!-- Columna 1 -->
<div class="bg-white p-3 rounded-lg border border-[#E6EBF0]">
<div class="flex justify-between items-center text-xs font-semibold text-[#243C4C]/70 mb-2 pb-1 border-b border-[#E6EBF0]">
<span class="">Prospectos (12)</span>
<span class="font-mono-num text-[#1F609C]">Q 45k</span>
</div>
<div class="space-y-2">
<div class="p-2.5 rounded bg-[#F8FAFC] border border-[#E6EBF0] text-left">
<span class="text-xs font-bold block text-[#243C4C]">Inmobiliaria Las Cumbres</span>
<span class="font-mono-num text-[11px] text-[#5289AD]">Q 14,500 · Cotiz #1092</span>
</div>
<div class="p-2.5 rounded bg-[#F8FAFC] border border-[#E6EBF0] text-left">
<span class="text-xs font-bold block text-[#243C4C]">Grupo Alimentos G&amp;T</span>
<span class="font-mono-num text-[11px] text-[#5289AD]">Q 8,200 · Cotiz #1094</span>
</div>
</div>
</div>
<!-- Columna 2 -->
<div class="bg-white p-3 rounded-lg border border-[#E6EBF0]">
<div class="flex justify-between items-center text-xs font-semibold text-[#243C4C]/70 mb-2 pb-1 border-b border-[#E6EBF0]">
<span class="">Negociación (8)</span>
<span class="font-mono-num text-[#1F609C]">Q 112k</span>
</div>
<div class="space-y-2">
<div class="p-2.5 rounded bg-[#F8FAFC] border border-[#E6EBF0] text-left">
<div class="flex items-center justify-between">
<span class="text-xs font-bold block text-[#243C4C]">TechLogistics Corp</span>
<span class="w-1.5 h-1.5 rounded-full bg-[#1F609C]"></span>
</div>
<span class="font-mono-num text-[11px] text-[#1F609C] font-semibold">Q 68,000 · Revisión</span>
</div>
<div class="p-2.5 rounded bg-[#F8FAFC] border border-[#E6EBF0] text-left">
<span class="text-xs font-bold block text-[#243C4C]">Farmacias del Centro</span>
<span class="font-mono-num text-[11px] text-[#5289AD]">Q 18,900 · Link enviado</span>
</div>
</div>
</div>
<!-- Columna 3 -->
<div class="bg-white p-3 rounded-lg border border-[#E6EBF0]">
<div class="flex justify-between items-center text-xs font-semibold text-[#4B8D4B] mb-2 pb-1 border-b border-[#E6EBF0]">
<span class="">Cerrado / Pagado (24)</span>
<span class="font-mono-num text-[#4B8D4B]">Q 185k</span>
</div>
<div class="space-y-2">
<div class="p-2.5 rounded bg-[#F8FAFC] border border-[#D9EAD7] text-left">
<div class="flex items-center justify-between">
<span class="text-xs font-bold block text-[#243C4C]">Distribuidora Maya</span>
<span class="material-symbols-outlined text-[#4B8D4B] text-[15px]">check_circle</span>
</div>
<span class="font-mono-num text-[11px] text-[#4B8D4B] font-bold">Q 45,000 · Cobrado</span>
</div>
<div class="p-2.5 rounded bg-[#F8FAFC] border border-[#D9EAD7] text-left">
<div class="flex items-center justify-between">
<span class="text-xs font-bold block text-[#243C4C]">Soluciones B2B Pro</span>
<span class="material-symbols-outlined text-[#4B8D4B] text-[15px]">check_circle</span>
</div>
<span class="font-mono-num text-[11px] text-[#4B8D4B] font-bold">Q 32,500 · Cobrado</span>
</div>
</div>
</div>
</div>
</div>
<!-- Gráfico de Conversión -->
<div class="lg:col-span-4 bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-[#E6EBF0] flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-xs font-bold uppercase tracking-wider text-[#243C4C]">Tasa de Conversión</span>
<span class="font-mono-num text-xs font-semibold text-[#4B8D4B] bg-[#D9EAD7] px-2 py-0.5 rounded">+34% mensual</span>
</div>
<!-- Mini Gráfica SVG -->
<div class="w-full py-2">
<svg class="w-full h-24" fill="none" viewBox="0 0 260 90">
<defs>
<linearGradient id="chartHero" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#1F609C" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#1F609C" stop-opacity="0"></stop>
</linearGradient>
</defs>
<path d="M10 75 L60 55 L110 60 L160 35 L210 40 L250 15" stroke="#1F609C" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
<path d="M10 75 L60 55 L110 60 L160 35 L210 40 L250 15 L250 85 L10 85 Z" fill="url(#chartHero)"></path>
<circle cx="250" cy="15" fill="#4B8D4B" r="4.5" stroke="#FFFFFF" stroke-width="2"></circle>
</svg>
</div>
</div>
<div class="space-y-2 pt-2 border-t border-[#E6EBF0]">
<div class="flex justify-between text-xs text-[#243C4C]/80 font-medium">
<span class="">Smart Links Cobrados</span>
<span class="font-mono-num font-bold text-[#4B8D4B]">82% efectividad</span>
</div>
<div class="w-full bg-[#E6EBF0] h-2 rounded-full overflow-hidden">
<div class="bg-[#4B8D4B] h-full rounded-full" style="width: 82%"></div>
</div>
<div class="flex justify-between text-xs text-[#243C4C]/80 font-medium pt-1">
<span class="">Aprobación de Cotizaciones</span>
<span class="font-mono-num font-bold text-[#1F609C]">64% cierre</span>
</div>
<div class="w-full bg-[#E6EBF0] h-2 rounded-full overflow-hidden">
<div class="bg-[#1F609C] h-full rounded-full" style="width: 64%"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- 3. PROBLEMA / NECESIDAD COMERCIAL -->
<section class="py-20 bg-white border-y border-[#E6EBF0]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#5289AD] uppercase block mb-3">PUNTOS DE DOLOR EN VENTAS</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] mb-4">
            ¿Pierdes ventas por falta de seguimiento y procesos manuales?
          </h2>
<p class="text-base sm:text-lg text-[#243C4C]/75">
            El 70% de las oportunidades de venta no se cierran porque las cotizaciones tardan demasiado o los prospectos quedan en el olvido entre mensajes dispersos.
          </p>
</div>
<!-- Comparativa Visual: Caos vs FlowCommerce -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
<!-- El Caos Tradicional -->
<div class="p-8 rounded-2xl bg-[#FFF5F5] border border-red-200/80 flex flex-col justify-between">
<div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono-num text-xs font-semibold mb-6">
<span class="material-symbols-outlined text-[16px]">close</span> MÉTODO TRADICIONAL DISPERSO
              </div>
<h3 class="text-xl font-bold text-red-950 mb-4">El costo de la fricción comercial</h3>
<ul class="space-y-4 text-sm text-red-900/80">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-red-500 mt-0.5 text-[20px] shrink-0">cancel</span>
<span class=""><strong>Cotizaciones lentas en PDF:</strong> Tardas horas diseñando propuestas en Excel o Word que se desconfiguran o se pierden en correos.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-red-500 mt-0.5 text-[20px] shrink-0">cancel</span>
<span class=""><strong>Chats de WhatsApp sin control:</strong> Decenas de prospectos olvidados sin recordatorio ni seguimiento estructurado de cobranza.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-red-500 mt-0.5 text-[20px] shrink-0">cancel</span>
<span class=""><strong>Cobros tardíos y facturas vencidas:</strong> Solicitar transferencias bancarias y esperar comprobantes manuales atrasa el flujo de caja.</span>
</li>
</ul>
</div>
<div class="mt-8 pt-4 border-t border-red-200 text-xs font-mono-num text-red-700 font-semibold">
              Resultado: Pérdida de hasta un 38% del pipeline mensual y clientes insatisfechos.
            </div>
</div>
<!-- La Velocidad con FlowCommerce -->
<div class="p-8 rounded-2xl bg-[#F0FDF4] border border-[#76B37A]/50 flex flex-col justify-between shadow-sm">
<div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9EAD7] text-[#4B8D4B] font-mono-num text-xs font-semibold mb-6">
<span class="material-symbols-outlined text-[16px]">check_circle</span> CON FLOWCOMMERCE
              </div>
<h3 class="text-xl font-bold text-[#243C4C] mb-4">Velocidad, orden y cierres ágiles</h3>
<ul class="space-y-4 text-sm text-[#243C4C]/85">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-[#4B8D4B] mt-0.5 text-[20px] shrink-0">check_circle</span>
<span class=""><strong>Cotizaciones generadas en segundos:</strong> Emite cotizaciones profesionales con cálculo automático y en Quetzales (Q).</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-[#4B8D4B] mt-0.5 text-[20px] shrink-0">check_circle</span>
<span class=""><strong>Pipeline y alertas proactivas:</strong> Todo prospecto clasificado por etapa con historial y recordatorios automáticos de contacto.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-[#4B8D4B] mt-0.5 text-[20px] shrink-0">check_circle</span>
<span class=""><strong>Smart Links de pago directos:</strong> Tu cliente aprueba y paga al instante con tarjeta de crédito o débito de forma 100% segura.</span>
</li>
</ul>
</div>
<div class="mt-8 pt-4 border-t border-[#76B37A]/30 text-xs font-mono-num text-[#4B8D4B] font-semibold">
              Resultado: +300% de rapidez operativa y hasta 40% de incremento en conversiones de pago.
            </div>
</div>
</div>
</div>
</section>
<!-- 4. SOLUCIÓN FLOWCOMMERCE -->
<section class="py-20 bg-[#F8FAFC]" id="soluciones">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div class="lg:col-span-6 space-y-6">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#1F609C] uppercase block">LA PLATAFORMA INTEGRAL</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] leading-snug">
              La suite comercial que acompaña cada etapa de tu ciclo de venta
            </h2>
<p class="text-base sm:text-lg text-[#243C4C]/80 leading-relaxed">
              FlowCommerce reúne en un entorno unificado todo lo que tu equipo necesita: cotiza en menos de 30 segundos, visualiza con precisión en qué fase se encuentra cada cliente potencial y habilita pagos inmediatos mediante Smart Links seguros.
            </p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
<div class="p-4 rounded-xl bg-white border border-[#E6EBF0]">
<div class="w-10 h-10 rounded-lg bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center mb-3">
<span class="material-symbols-outlined text-[22px]">timer</span>
</div>
<h4 class="font-bold text-sm text-[#243C4C] mb-1">Cotizaciones en 30s</h4>
<p class="text-xs text-[#243C4C]/70">Genera propuestas formales desde tu celular o computadora sin errores de cálculo.</p>
</div>
<div class="p-4 rounded-xl bg-white border border-[#E6EBF0]">
<div class="w-10 h-10 rounded-lg bg-[#D9EAD7] text-[#4B8D4B] flex items-center justify-center mb-3">
<span class="material-symbols-outlined text-[22px]">credit_card</span>
</div>
<h4 class="font-bold text-sm text-[#243C4C] mb-1">Pagos con Smart Links</h4>
<p class="text-xs text-[#243C4C]/70">El cliente recibe su cotización con botón de pago integrado en Quetzales (Q).</p>
</div>
</div>
</div>
<div class="lg:col-span-6">
<div class="p-6 sm:p-8 rounded-2xl bg-white border border-[#E6EBF0] shadow-xl relative">
<div class="flex items-center justify-between pb-4 mb-4 border-b border-[#E6EBF0]">
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-[#1F609C]"></span>
<span class="font-bold text-sm text-[#243C4C]">Cotización Dinámica #FC-2026-89</span>
</div>
<span class="font-mono-num text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D9EAD7] text-[#4B8D4B]">Lista para cobro</span>
</div>
<div class="space-y-3 mb-6 font-body text-sm">
<div class="flex justify-between py-1 text-[#243C4C]/80">
<span class="">Cliente: Corporación Agropecuaria del Sur</span>
<span class="font-mono-num text-xs font-semibold text-[#1F609C]">NIT: 928374-1</span>
</div>
<div class="p-3 rounded-lg bg-[#F8FAFC] border border-[#E6EBF0] space-y-2">
<div class="flex justify-between text-xs">
<span class="">1x Plan Anual Equipos B2B (Licencias 12m)</span>
<span class="font-mono-num font-semibold text-[#243C4C]">Q 18,500.00</span>
</div>
<div class="flex justify-between text-xs">
<span class="">1x Módulo Onboarding &amp; Implementación</span>
<span class="font-mono-num font-semibold text-[#243C4C]">Q 4,200.00</span>
</div>
<div class="flex justify-between text-xs text-[#4B8D4B] font-medium">
<span class="">Descuento Comercial Pago Inmediato</span>
<span class="font-mono-num font-semibold">- Q 1,200.00</span>
</div>
</div>
<div class="flex justify-between text-base font-bold text-[#243C4C] pt-1">
<span class="">Total a Pagar:</span>
<span class="font-mono-num text-xl text-[#1F609C]">Q 21,500.00</span>
</div>
</div>
<div class="p-4 rounded-xl bg-gradient-to-r from-[#1F609C] to-[#243C4C] text-white flex items-center justify-between">
<div>
<span class="text-xs uppercase font-mono-num opacity-80 block">Link de pago bancario</span>
<span class="font-semibold text-sm">Pagar vía Smart Link</span>
</div>
<div class="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-xs font-mono-num">
<span class="material-symbols-outlined text-[16px]">lock</span> 256-Bit SSL
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- 5. CÓMO FUNCIONA FLOWCOMMERCE (Flujo visual paso a paso) -->
<section class="py-20 bg-white border-t border-[#E6EBF0]" id="como-funciona">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#4B8D4B] uppercase block mb-3">FLUJO ÁGIL Y TRANSPARENTE</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] mb-4">
            ¿Cómo funciona FlowCommerce?
          </h2>
<p class="text-base sm:text-lg text-[#243C4C]/75">
            Cinco pasos sencillos para transformar solicitudes en ingresos confirmados en tu cuenta bancaria.
          </p>
<!-- Barra de Proceso Sintetizada -->
<div class="mt-8 py-3 px-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF0] inline-flex items-center flex-wrap justify-center gap-2 text-xs sm:text-sm font-semibold text-[#243C4C]">
<span class="text-[#1F609C]">Solicitud</span>
<span class="text-[#5289AD]">→</span>
<span class="text-[#1F609C]">Cotización</span>
<span class="text-[#5289AD]">→</span>
<span class="text-[#1F609C]">Seguimiento</span>
<span class="text-[#5289AD]">→</span>
<span class="text-[#1F609C]">Link de pago</span>
<span class="text-[#5289AD]">→</span>
<span class="text-[#4B8D4B] font-bold">Venta</span>
</div>
</div>
<!-- 5 Pasos con conectores y tarjetas -->
<div class="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
<!-- Paso 01 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] hover:border-[#1F609C]/50 transition-all flex flex-col justify-between relative group">
<div>
<div class="flex items-center justify-between mb-4">
<span class="font-mono-num text-xl font-bold text-[#1F609C]">01</span>
<span class="w-10 h-10 rounded-lg bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">person_add</span>
</span>
</div>
<h3 class="font-bold text-base text-[#243C4C] mb-2">Recibe la solicitud</h3>
<p class="text-xs text-[#243C4C]/75 leading-relaxed">
                Registra al cliente y su solicitud comercial de inmediato desde cualquier canal.
              </p>
</div>
<div class="mt-6 pt-3 border-t border-[#E6EBF0] font-mono-num text-[11px] text-[#5289AD] font-medium">
              Captura instantánea
            </div>
</div>
<!-- Paso 02 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] hover:border-[#1F609C]/50 transition-all flex flex-col justify-between relative group">
<div>
<div class="flex items-center justify-between mb-4">
<span class="font-mono-num text-xl font-bold text-[#1F609C]">02</span>
<span class="w-10 h-10 rounded-lg bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">request_quote</span>
</span>
</div>
<h3 class="font-bold text-base text-[#243C4C] mb-2">Crea la cotización</h3>
<p class="text-xs text-[#243C4C]/75 leading-relaxed">
                Genera y personaliza cotizaciones rápidamente en moneda local (Q) con cálculo exacto.
              </p>
</div>
<div class="mt-6 pt-3 border-t border-[#E6EBF0] font-mono-num text-[11px] text-[#5289AD] font-medium">
              Emisión en segundos
            </div>
</div>
<!-- Paso 03 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] hover:border-[#1F609C]/50 transition-all flex flex-col justify-between relative group">
<div>
<div class="flex items-center justify-between mb-4">
<span class="font-mono-num text-xl font-bold text-[#1F609C]">03</span>
<span class="w-10 h-10 rounded-lg bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">monitoring</span>
</span>
</div>
<h3 class="font-bold text-base text-[#243C4C] mb-2">Da seguimiento</h3>
<p class="text-xs text-[#243C4C]/75 leading-relaxed">
                Mantén el seguimiento proactivo de tus clientes y oportunidades en el pipeline visual.
              </p>
</div>
<div class="mt-6 pt-3 border-t border-[#E6EBF0] font-mono-num text-[11px] text-[#5289AD] font-medium">
              Cero prospectos perdidos
            </div>
</div>
<!-- Paso 04 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] hover:border-[#1F609C]/50 transition-all flex flex-col justify-between relative group">
<div>
<div class="flex items-center justify-between mb-4">
<span class="font-mono-num text-xl font-bold text-[#1F609C]">04</span>
<span class="w-10 h-10 rounded-lg bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">link</span>
</span>
</div>
<h3 class="font-bold text-base text-[#243C4C] mb-2">Envía el link de pago</h3>
<p class="text-xs text-[#243C4C]/75 leading-relaxed">
                Facilita que tus clientes realicen el pago inmediato con Smart Links bancarios y seguros.
              </p>
</div>
<div class="mt-6 pt-3 border-t border-[#E6EBF0] font-mono-num text-[11px] text-[#5289AD] font-medium">
              Cobro sin fricciones
            </div>
</div>
<!-- Paso 05 -->
<div class="p-6 rounded-2xl bg-[#F0FDF4] border border-[#76B37A] hover:border-[#4B8D4B] transition-all flex flex-col justify-between relative group">
<div>
<div class="flex items-center justify-between mb-4">
<span class="font-mono-num text-xl font-bold text-[#4B8D4B]">05</span>
<span class="w-10 h-10 rounded-lg bg-[#D9EAD7] text-[#4B8D4B] flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">verified</span>
</span>
</div>
<h3 class="font-bold text-base text-[#243C4C] mb-2">Cierra la venta</h3>
<p class="text-xs text-[#243C4C]/75 leading-relaxed">
                Consulta el historial en tiempo real y controla tus ventas sin fricción operativa.
              </p>
</div>
<div class="mt-6 pt-3 border-t border-[#D9EAD7] font-mono-num text-[11px] text-[#4B8D4B] font-bold">
              Liquidación confirmada
            </div>
</div>
</div>
</div>
</section>
<!-- 6. BENEFICIOS ("¿Por qué elegir FlowCommerce?") -->
<section class="py-20 bg-[#F8FAFC]" id="beneficios">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#1F609C] uppercase block mb-3">VENTAJAS COMPETITIVAS</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] mb-4">
            ¿Por qué elegir FlowCommerce?
          </h2>
<p class="text-base sm:text-lg text-[#243C4C]/75">
            Una infraestructura construida específicamente para el dinamismo de negocios en Guatemala y América Latina.
          </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Beneficio 1 -->
<div class="p-6 rounded-2xl bg-white border border-[#E6EBF0] shadow-sm hover:shadow-md transition-all">
<div class="w-12 h-12 rounded-xl bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center mb-5">
<span class="material-symbols-outlined text-[26px]">schedule</span>
</div>
<div class="inline-block px-2.5 py-0.5 rounded-full bg-[#E6EBF0] text-[#1F609C] font-mono-num text-xs font-semibold mb-2">-80% tiempo manual</div>
<h3 class="text-lg font-bold text-[#243C4C] mb-2">Ahorra tiempo</h3>
<p class="text-sm text-[#243C4C]/75">
              Reduce tareas manuales en tu proceso de ventas y elimina el papeleo repetitivo en hojas de cálculo.
            </p>
</div>
<!-- Beneficio 2 -->
<div class="p-6 rounded-2xl bg-white border border-[#E6EBF0] shadow-sm hover:shadow-md transition-all">
<div class="w-12 h-12 rounded-xl bg-[#D9EAD7] text-[#4B8D4B] flex items-center justify-center mb-5">
<span class="material-symbols-outlined text-[26px]">trending_up</span>
</div>
<div class="inline-block px-2.5 py-0.5 rounded-full bg-[#D9EAD7] text-[#4B8D4B] font-mono-num text-xs font-semibold mb-2">+40% cierres de venta</div>
<h3 class="text-lg font-bold text-[#243C4C] mb-2">Aumenta tus oportunidades</h3>
<p class="text-sm text-[#243C4C]/75">
              Da seguimiento a tus clientes y evita perder oportunidades de cierre gracias a notificaciones inteligentes.
            </p>
</div>
<!-- Beneficio 3 -->
<div class="p-6 rounded-2xl bg-white border border-[#E6EBF0] shadow-sm hover:shadow-md transition-all">
<div class="w-12 h-12 rounded-xl bg-[#E6EBF0] text-[#5289AD] flex items-center justify-center mb-5">
<span class="material-symbols-outlined text-[26px]">point_of_sale</span>
</div>
<div class="inline-block px-2.5 py-0.5 rounded-full bg-[#E6EBF0] text-[#5289AD] font-mono-num text-xs font-semibold mb-2">Liquidación en Quetzales</div>
<h3 class="text-lg font-bold text-[#243C4C] mb-2">Facilita los pagos</h3>
<p class="text-sm text-[#243C4C]/75">
              Envía links de pago directamente a tus clientes con liquidación ágil e integración bancaria transparente.
            </p>
</div>
<!-- Beneficio 4 -->
<div class="p-6 rounded-2xl bg-white border border-[#E6EBF0] shadow-sm hover:shadow-md transition-all">
<div class="w-12 h-12 rounded-xl bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center mb-5">
<span class="material-symbols-outlined text-[26px]">insights</span>
</div>
<div class="inline-block px-2.5 py-0.5 rounded-full bg-[#E6EBF0] text-[#1F609C] font-mono-num text-xs font-semibold mb-2">Control en tiempo real</div>
<h3 class="text-lg font-bold text-[#243C4C] mb-2">Mejora tus decisiones</h3>
<p class="text-sm text-[#243C4C]/75">
              Consulta reportes detallados e historial de ventas con métricas en tiempo real para optimizar tu estrategia.
            </p>
</div>
<!-- Beneficio 5 -->
<div class="p-6 rounded-2xl bg-white border border-[#E6EBF0] shadow-sm hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-xl bg-[#D9EAD7] text-[#4B8D4B] flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-[26px]">groups</span>
</div>
<div>
<h3 class="text-lg font-bold text-[#243C4C]">Trabaja en equipo</h3>
<div class="inline-block px-2.5 py-0.5 rounded-full bg-[#D9EAD7] text-[#4B8D4B] font-mono-num text-xs font-semibold mt-1">Multi-usuario y Asignación de Roles</div>
</div>
</div>
<span class="text-xs font-mono-num text-[#5289AD] font-bold">Colaboración B2B ágil</span>
</div>
<p class="text-sm text-[#243C4C]/75">
              Gestiona usuarios, asigna prospectos a vendedores y coordina equipos comerciales sin fricción ni duplicidad de tareas. Control total sobre permisos y visibilidad de cotizaciones.
            </p>
</div>
</div>
</div>
</section>
<!-- 7. FUNCIONALIDADES CLAVE (Integradas) -->
<section class="py-20 bg-white border-y border-[#E6EBF0]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#5289AD] uppercase block mb-3">TECNOLOGÍA ROBUSTA</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] mb-4">
            Funcionalidades Clave Integradas
          </h2>
<p class="text-base sm:text-lg text-[#243C4C]/75">
            Cada herramienta fue diseñada para simplificar tu operación comercial e impulsar tu crecimiento.
          </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Funcionalidad 1 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] flex flex-col justify-between">
<div>
<div class="w-10 h-10 rounded-lg bg-[#1F609C] text-white flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-[22px]">description</span>
</div>
<h4 class="font-bold text-base text-[#243C4C] mb-2">Generador de Cotizaciones</h4>
<p class="text-xs text-[#243C4C]/75 leading-relaxed">
                Elabora cotizaciones formales en segundos. Precios, impuestos y moneda nacional en Quetzales (Q) integrados automáticamente.
              </p>
</div>
<div class="mt-4 pt-3 border-t border-[#E6EBF0] text-xs font-mono-num text-[#1F609C] font-semibold">
              Exportación instantánea
            </div>
</div>
<!-- Funcionalidad 2 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] flex flex-col justify-between">
<div>
<div class="w-10 h-10 rounded-lg bg-[#5289AD] text-white flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-[22px]">view_kanban</span>
</div>
<h4 class="font-bold text-base text-[#243C4C] mb-2">Pipeline Kanban / Embudo</h4>
<p class="text-xs text-[#243C4C]/75 leading-relaxed">
                Mueve tus oportunidades entre etapas con arrastrar y soltar (Drag &amp; Drop). Visibilidad total del estado de cada negociación.
              </p>
</div>
<div class="mt-4 pt-3 border-t border-[#E6EBF0] text-xs font-mono-num text-[#5289AD] font-semibold">
              Etapas configurables
            </div>
</div>
<!-- Funcionalidad 3 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] flex flex-col justify-between">
<div>
<div class="w-10 h-10 rounded-lg bg-[#4B8D4B] text-white flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-[22px]">payments</span>
</div>
<h4 class="font-bold text-base text-[#243C4C] mb-2">Smart Links de Cobro en Q</h4>
<p class="text-xs text-[#243C4C]/75 leading-relaxed">
                Links seguros de pago enlazados directamente a cada cotización emitida. Notificación inmediata cuando el cliente realiza el abono.
              </p>
</div>
<div class="mt-4 pt-3 border-t border-[#E6EBF0] text-xs font-mono-num text-[#4B8D4B] font-semibold">
              Tarjetas &amp; Transferencias
            </div>
</div>
<!-- Funcionalidad 4 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] flex flex-col justify-between">
<div>
<div class="w-10 h-10 rounded-lg bg-[#243C4C] text-white flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-[22px]">analytics</span>
</div>
<h4 class="font-bold text-base text-[#243C4C] mb-2">Historial y Métricas</h4>
<p class="text-xs text-[#243C4C]/75 leading-relaxed">
                Consulta ventas cerradas, ticket promedio, tiempos de respuesta y desempeño comercial de tus colaboradores en un solo panel.
              </p>
</div>
<div class="mt-4 pt-3 border-t border-[#E6EBF0] text-xs font-mono-num text-[#243C4C] font-semibold">
              Reportes en tiempo real
            </div>
</div>
</div>
</div>
</section>
<!-- 8. FLOWCOMMERCE PARA CADA ETAPA DE TU NEGOCIO (Diferenciación de audiencias) -->
<section class="py-20 bg-[#F8FAFC]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#1F609C] uppercase block mb-3">SEGMENTACIÓN A MEDIDA</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] mb-4">
            FlowCommerce para cada etapa de tu negocio
          </h2>
<p class="text-base sm:text-lg text-[#243C4C]/75">
            Soluciones adaptadas a la escala de tu equipo, desde creadores y microempresas hasta corporaciones consolidadas.
          </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
<!-- Bloque 1: EMPRENDEDORES -->
<div class="p-8 sm:p-10 rounded-2xl bg-white border border-[#E6EBF0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9EAD7] text-[#4B8D4B] font-mono-num text-xs font-bold mb-4">
                EMPRENDEDORES &amp; NEGOCIOS ÁGILES
              </div>
<h3 class="text-2xl font-bold text-[#243C4C] mb-2">
                Organiza tus ventas y comienza a crecer sin complicaciones.
              </h3>
<p class="text-sm text-[#243C4C]/75 mb-6">
                Ideal para negocios en crecimiento activos en Redes Sociales (TikTok, Instagram, Facebook) que atienden cotizaciones por chat y desean profesionalizar sus ventas de inmediato.
              </p>
<div class="space-y-3 pt-2 mb-8">
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#4B8D4B] text-[20px]">check_circle</span>
<span class="">Gestión ágil de clientes</span>
</div>
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#4B8D4B] text-[20px]">check_circle</span>
<span class="">Cotizaciones rápidas desde el móvil</span>
</div>
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#4B8D4B] text-[20px]">check_circle</span>
<span class="">Seguimiento de prospectos</span>
</div>
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#4B8D4B] text-[20px]">check_circle</span>
<span class="">Links de pago por WhatsApp y Web</span>
</div>
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#4B8D4B] text-[20px]">check_circle</span>
<span class="">Historial de ventas en tiempo real</span>
</div>
</div>
</div>
<a class="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#4B8D4B] text-white font-semibold text-sm shadow hover:bg-[#3d753d] transition-all" href="#planes">
<span class="">Empezar como Emprendedor</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<!-- Bloque 2: EMPRESAS -->
<div class="p-8 sm:p-10 rounded-2xl bg-white border border-[#1F609C]/30 shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-[#E6EBF0]/50 rounded-bl-full pointer-events-none -z-0"></div>
<div class="relative z-10">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6EBF0] text-[#1F609C] font-mono-num text-xs font-bold mb-4">
                EMPRESAS &amp; EQUIPOS COMERCIALES
              </div>
<h3 class="text-2xl font-bold text-[#243C4C] mb-2">
                Centraliza y automatiza el proceso comercial de tu equipo.
              </h3>
<p class="text-sm text-[#243C4C]/75 mb-6">
                Potenciado para corporaciones y prospección en LinkedIn Ads y Mailing B2B que exigen visibilidad de embudos, múltiples asesores comerciales y métricas directivas.
              </p>
<div class="space-y-3 pt-2 mb-8">
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#1F609C] text-[20px]">check_circle</span>
<span class="">Gestión de equipos comerciales y roles</span>
</div>
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#1F609C] text-[20px]">check_circle</span>
<span class="">Automatización de seguimientos y recordatorios</span>
</div>
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#1F609C] text-[20px]">check_circle</span>
<span class="">Reportes avanzados y analítica por asesor</span>
</div>
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#1F609C] text-[20px]">check_circle</span>
<span class="">Panel de ventas multi-etapa unificado</span>
</div>
<div class="flex items-center gap-3 text-sm text-[#243C4C]/90 font-medium">
<span class="material-symbols-outlined text-[#1F609C] text-[20px]">check_circle</span>
<span class="">Asientos y usuarios adicionales según escala</span>
</div>
</div>
</div>
<a class="relative z-10 w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#1F609C] text-white font-semibold text-sm shadow hover:bg-[#243C4C] transition-all" href="#planes">
<span class="">Ver Solución Empresa</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<!-- 9. MODELO FREEMIUM -->
<section class="py-20 bg-white border-y border-[#E6EBF0]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-14">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#4B8D4B] uppercase block mb-3">CRECIMIENTO SOSTENIBLE</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] mb-4">
            Empieza gratis. Crece cuando estés listo.
          </h2>
<p class="text-base sm:text-lg text-[#243C4C]/75">
            Utiliza FlowCommerce gratis con funciones básicas y aumenta las capacidades de tu negocio cuando necesites más clientes, cotizaciones, usuarios o automatizaciones.
          </p>
</div>
<!-- Visualización del Modelo de Crecimiento Continuo -->
<div class="max-w-4xl mx-auto mb-10">
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
<!-- Paso Gratis -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] text-center">
<span class="font-mono-num text-xs font-semibold text-[#5289AD] uppercase block mb-1">Nivel 01</span>
<h3 class="text-xl font-bold text-[#243C4C] mb-1">GRATIS</h3>
<div class="font-mono-num text-2xl font-bold text-[#1F609C] mb-3">Q0 <span class="text-xs font-normal text-[#243C4C]/60">/ mes</span></div>
<p class="text-xs text-[#243C4C]/70">Para validar tu negocio y emitir tus primeras cotizaciones sin ningún costo.</p>
</div>
<!-- Paso Profesional -->
<div class="p-6 rounded-2xl bg-[#F0FDF4] border border-[#76B37A] text-center shadow-md relative">
<div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#4B8D4B] text-white font-mono-num text-[11px] font-bold">
                RECOMENDADO
              </div>
<span class="font-mono-num text-xs font-semibold text-[#4B8D4B] uppercase block mb-1">Nivel 02</span>
<h3 class="text-xl font-bold text-[#243C4C] mb-1">PROFESIONAL</h3>
<div class="font-mono-num text-2xl font-bold text-[#4B8D4B] mb-3">Q80 <span class="text-xs font-normal text-[#243C4C]/60">/ mes</span></div>
<p class="text-xs text-[#243C4C]/70">Clientes y cotizaciones ilimitadas con Smart Links de cobro activos.</p>
</div>
<!-- Paso Empresa -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] text-center">
<span class="font-mono-num text-xs font-semibold text-[#1F609C] uppercase block mb-1">Nivel 03</span>
<h3 class="text-xl font-bold text-[#243C4C] mb-1">EMPRESA</h3>
<div class="font-mono-num text-2xl font-bold text-[#243C4C] mb-3">Q160 <span class="text-xs font-normal text-[#243C4C]/60">/ mes</span></div>
<p class="text-xs text-[#243C4C]/70">Automatizaciones, reportes avanzados y múltiples equipos comerciales.</p>
</div>
</div>
</div>
<!-- Badge Destacado -->
<div class="text-center">
<div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D9EAD7] text-[#4B8D4B] font-mono-num text-xs sm:text-sm font-bold border border-[#76B37A]/50">
<span class="material-symbols-outlined text-[18px]">verified</span>
            Prueba gratuita de 14 días del plan Profesional disponible sin tarjeta.
          </div>
</div>
</div>
</section>
<!-- 10. PLANES Y PRECIOS -->
<section class="py-20 bg-[#F8FAFC]" id="planes">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#1F609C] uppercase block mb-3">PRECIOS EN QUETZALES (Q)</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] mb-4">
            Planes para cada etapa de tu negocio
          </h2>
<p class="text-base sm:text-lg text-[#243C4C]/75">
            Precios transparentes en Quetzales (Q). Sin contratos forzosos. Cambia o cancela cuando quieras.
          </p>
</div>
<!-- Grid de 3 Tarjetas de Precios -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
<!-- Tarjeta 1: PLAN GRATIS -->
<div class="p-8 rounded-2xl bg-white border border-[#E6EBF0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div class="mb-6">
<span class="text-xs font-bold font-mono-num text-[#5289AD] uppercase block mb-1">Para comenzar</span>
<h3 class="text-2xl font-bold text-[#243C4C]">Plan Gratis</h3>
<p class="text-xs text-[#243C4C]/70 mt-1">Explora la herramienta y emite propuestas base sin ningún costo.</p>
</div>
<div class="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF0] mb-6">
<div class="flex items-baseline gap-1">
<span class="font-mono-num text-4xl font-bold text-[#243C4C]">Q0</span>
<span class="text-xs text-[#243C4C]/60">/ mes</span>
</div>
<span class="font-mono-num text-xs text-[#5289AD] font-medium block mt-1">Acceso permanente</span>
</div>
<!-- Lista de características -->
<ul class="space-y-3 mb-8 text-sm text-[#243C4C]/85">
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Hasta <strong>10 clientes</strong></span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Hasta <strong>2 cotizaciones al día</strong></span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Gestión básica de clientes</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Seguimiento básico</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">1 usuario</span>
</li>
<li class="flex items-center gap-2.5 text-[#243C4C]/60 text-xs">
<span class="material-symbols-outlined text-[16px]">info</span>
<span class="">Marca de FlowCommerce en las cotizaciones</span>
</li>
<li class="flex items-center gap-2.5 text-xs text-[#1F609C] font-medium">
<span class="material-symbols-outlined text-[16px]">add_circle</span>
<span class="">Posibilidad de adquirir herramientas premium individualmente</span>
</li>
</ul>
</div>
<a class="w-full py-3 px-4 rounded-lg bg-[#E6EBF0] text-[#1F609C] font-semibold text-sm text-center hover:bg-[#1F609C] hover:text-white transition-colors" href="#contacto">
              Comenzar gratis
            </a>
</div>
<!-- Tarjeta 2: PLAN PROFESIONAL (DESTACADO) -->
<div class="p-8 rounded-2xl bg-white border-2 border-[#4B8D4B] shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative transform lg:-translate-y-2">
<!-- Badge superior flotante -->
<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#4B8D4B] text-white font-mono-num text-xs font-bold tracking-wide shadow flex items-center gap-1.5 whitespace-nowrap">
<span class="material-symbols-outlined text-[16px]">star</span> MÁS POPULAR · RECOMENDADO
            </div>
<div>
<div class="mb-6 mt-2">
<span class="text-xs font-bold font-mono-num text-[#4B8D4B] uppercase block mb-1">Para emprendimientos en crecimiento</span>
<h3 class="text-2xl font-bold text-[#243C4C]">Plan Profesional</h3>
<p class="text-xs text-[#243C4C]/70 mt-1">La suite comercial completa para cerrar y cobrar sin límites.</p>
</div>
<div class="p-4 rounded-xl bg-[#F0FDF4] border border-[#D9EAD7] mb-6">
<div class="flex items-baseline gap-1">
<span class="font-mono-num text-4xl font-bold text-[#4B8D4B]">Q80</span>
<span class="text-xs text-[#243C4C]/60">/ mes</span>
</div>
<span class="font-mono-num text-xs text-[#4B8D4B] font-semibold block mt-1">Facturación mensual estándar</span>
</div>
<!-- Lista de características -->
<ul class="space-y-3 mb-8 text-sm text-[#243C4C]/90 font-medium">
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#4B8D4B] text-[18px]">check_circle</span>
<span class=""><strong>Clientes ilimitados</strong></span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#4B8D4B] text-[18px]">check_circle</span>
<span class=""><strong>Cotizaciones ilimitadas</strong></span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#4B8D4B] text-[18px]">check_circle</span>
<span class="">Seguimiento de clientes</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#4B8D4B] text-[18px]">check_circle</span>
<span class="">Generación de links de pago</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#4B8D4B] text-[18px]">check_circle</span>
<span class="">Historial de ventas</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#4B8D4B] text-[18px]">check_circle</span>
<span class="">Reportes básicos</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#4B8D4B] text-[18px]">check_circle</span>
<span class="">Hasta <strong>3 usuarios</strong></span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#4B8D4B] text-[18px]">check_circle</span>
<span class="">Personalización de cotizaciones</span>
</li>
<li class="flex items-center gap-2.5 text-[#4B8D4B] font-bold">
<span class="material-symbols-outlined text-[18px]">verified</span>
<span class="">Sin publicidad ni marca de FlowCommerce</span>
</li>
</ul>
</div>
<a class="w-full py-3.5 px-4 rounded-lg bg-[#4B8D4B] hover:bg-[#3d753d] text-white font-bold text-sm text-center shadow-md transition-all flex items-center justify-center gap-2" href="#contacto">
<span class="">Probar 14 días gratis</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<!-- Tarjeta 3: PLAN EMPRESA -->
<div class="p-8 rounded-2xl bg-white border border-[#E6EBF0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div class="mb-6">
<span class="text-xs font-bold font-mono-num text-[#1F609C] uppercase block mb-1">Para empresas con equipos de ventas</span>
<h3 class="text-2xl font-bold text-[#243C4C]">Plan Empresa</h3>
<p class="text-xs text-[#243C4C]/70 mt-1">Automatización, jerarquías de roles y analítica comercial avanzada.</p>
</div>
<div class="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF0] mb-6">
<div class="flex items-baseline gap-1">
<span class="font-mono-num text-4xl font-bold text-[#243C4C]">Q160</span>
<span class="text-xs text-[#243C4C]/60">/ mes</span>
</div>
<span class="font-mono-num text-xs text-[#1F609C] font-semibold block mt-1">Facturación mensual por empresa</span>
</div>
<!-- Lista de características -->
<ul class="space-y-3 mb-8 text-sm text-[#243C4C]/85">
<li class="flex items-center gap-2.5 font-bold text-[#1F609C]">
<span class="material-symbols-outlined text-[18px]">done_all</span>
<span class="">Todo lo incluido en Profesional</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Usuarios adicionales</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Automatización de seguimientos</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Reportes avanzados</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Panel de ventas</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Gestión de equipos</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Personalización avanzada</span>
</li>
<li class="flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">check</span>
<span class="">Soporte prioritario</span>
</li>
</ul>
</div>
<a class="w-full py-3 px-4 rounded-lg bg-[#243C4C] text-white font-semibold text-sm text-center hover:bg-[#1F609C] transition-colors" href="#contacto">
              Elegir Empresa
            </a>
</div>
</div>
</div>
</section>
<!-- 11. SECCIÓN DE COMPLEMENTOS / HERRAMIENTAS INDIVIDUALES -->
<section class="py-20 bg-white border-y border-[#E6EBF0]" id="complementos">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-16">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#5289AD] uppercase block mb-3">FLEXIBILIDAD A DEMANDA</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] mb-4">
            Potencia tu experiencia con complementos
          </h2>
<p class="text-base sm:text-lg text-[#243C4C]/75">
            Adquiere funcionalidades específicas según las necesidades puntuales de tu operación. Complementos desde Q4.
          </p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Complemento 1 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] hover:border-[#1F609C] transition-all flex flex-col justify-between">
<div>
<div class="w-10 h-10 rounded-lg bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-[22px]">smart_toy</span>
</div>
<h4 class="font-bold text-base text-[#243C4C] mb-2">Automatizaciones comerciales</h4>
<p class="text-xs text-[#243C4C]/70 leading-relaxed mb-4">
                Triggers automáticos, recordatorios inteligentes de cobro y avisos de seguimiento por correo y chat.
              </p>
</div>
<div class="pt-4 border-t border-[#E6EBF0] flex items-center justify-between">
<span class="font-mono-num text-xs font-bold text-[#1F609C]">Desde Q4 / mes</span>
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">add_circle_outline</span>
</div>
</div>
<!-- Complemento 2 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] hover:border-[#1F609C] transition-all flex flex-col justify-between">
<div>
<div class="w-10 h-10 rounded-lg bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-[22px]">query_stats</span>
</div>
<h4 class="font-bold text-base text-[#243C4C] mb-2">Reportes avanzados &amp; Analítica</h4>
<p class="text-xs text-[#243C4C]/70 leading-relaxed mb-4">
                Exportación de métricas a Excel, comparativa intermensual y medición de productividad por asesor comercial.
              </p>
</div>
<div class="pt-4 border-t border-[#E6EBF0] flex items-center justify-between">
<span class="font-mono-num text-xs font-bold text-[#1F609C]">Desde Q4 / mes</span>
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">add_circle_outline</span>
</div>
</div>
<!-- Complemento 3 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] hover:border-[#1F609C] transition-all flex flex-col justify-between">
<div>
<div class="w-10 h-10 rounded-lg bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-[22px]">person_add_alt</span>
</div>
<h4 class="font-bold text-base text-[#243C4C] mb-2">Usuarios adicionales</h4>
<p class="text-xs text-[#243C4C]/70 leading-relaxed mb-4">
                Asientos escalables para tu fuerza de ventas sin necesidad de cambiar el tipo de suscripción base.
              </p>
</div>
<div class="pt-4 border-t border-[#E6EBF0] flex items-center justify-between">
<span class="font-mono-num text-xs font-bold text-[#1F609C]">Desde Q4 / mes</span>
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">add_circle_outline</span>
</div>
</div>
<!-- Complemento 4 -->
<div class="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] hover:border-[#1F609C] transition-all flex flex-col justify-between">
<div>
<div class="w-10 h-10 rounded-lg bg-[#E6EBF0] text-[#1F609C] flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-[22px]">branding_watermark</span>
</div>
<h4 class="font-bold text-base text-[#243C4C] mb-2">Personalización avanzada</h4>
<p class="text-xs text-[#243C4C]/70 leading-relaxed mb-4">
                Plantillas de cotización con diseño a medida, marca blanca completa y dominio propio para enlaces de pago.
              </p>
</div>
<div class="pt-4 border-t border-[#E6EBF0] flex items-center justify-between">
<span class="font-mono-num text-xs font-bold text-[#1F609C]">Desde Q4 / mes</span>
<span class="material-symbols-outlined text-[#1F609C] text-[18px]">add_circle_outline</span>
</div>
</div>
</div>
</div>
</section>
<!-- 12. PRUEBA GRATUITA DESTACADA -->
<section class="py-20 bg-[#F8FAFC]">
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#243C4C] via-[#1F609C] to-[#243C4C] text-white text-center shadow-2xl relative overflow-hidden">
<!-- Brillo de fondo -->
<div class="absolute -top-24 -right-24 w-80 h-80 bg-[#4B8D4B]/20 rounded-full blur-3xl pointer-events-none"></div>
<div class="relative z-10 max-w-2xl mx-auto">
<span class="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/10 text-[#D9EAD7] font-mono-num text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
<span class="material-symbols-outlined text-[16px]">verified</span> Activación inmediata · Sin tarjeta de crédito
            </span>
<h2 class="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Prueba las funciones profesionales durante 14 días
            </h2>
<p class="text-base sm:text-lg text-white/80 mb-8 leading-relaxed font-light">
              Descubre todo lo que FlowCommerce puede hacer por tu negocio antes de elegir tu plan.
            </p>
<a class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#4B8D4B] text-white font-bold text-base hover:bg-[#3d753d] shadow-lg transition-all transform hover:-translate-y-0.5" href="#planes">
<span class="">Comenzar prueba gratuita</span>
<span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<!-- 13. PREGUNTAS FRECUENTES (FAQ INTERACTIVA / ACORDEÓN) -->
<section class="py-20 bg-white border-t border-[#E6EBF0]" id="faq">
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-16">
<span class="font-mono-num text-xs font-bold tracking-widest text-[#1F609C] uppercase block mb-3">RESOLVIENDO DUDAS</span>
<h2 class="text-3xl sm:text-4xl font-bold text-[#243C4C] mb-4">
            Preguntas Frecuentes
          </h2>
<p class="text-base sm:text-lg text-[#243C4C]/75">
            Respuestas claras para que comiences a cotizar y vender con total confianza.
          </p>
</div>
<div class="space-y-4">
<!-- FAQ 1 -->
<details class="group p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] open:border-[#1F609C]/40 transition-all">
<summary class="flex justify-between items-center font-bold text-base sm:text-lg text-[#243C4C] cursor-pointer list-none">
<span class="">¿Puedo utilizar FlowCommerce gratis?</span>
<span class="material-symbols-outlined text-[#5289AD] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-sm text-[#243C4C]/80 leading-relaxed pt-2 border-t border-[#E6EBF0]">
              Sí. El plan Gratis puede utilizarse permanentemente con algunas limitaciones (hasta 10 clientes y 2 cotizaciones diarias). Es ideal para validar la herramienta y emitir propuestas sin costo alguno.
            </p>
</details>
<!-- FAQ 2 -->
<details class="group p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] open:border-[#1F609C]/40 transition-all">
<summary class="flex justify-between items-center font-bold text-base sm:text-lg text-[#243C4C] cursor-pointer list-none">
<span class="">¿Puedo probar el plan Profesional?</span>
<span class="material-symbols-outlined text-[#5289AD] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-sm text-[#243C4C]/80 leading-relaxed pt-2 border-t border-[#E6EBF0]">
              Sí. Puedes probar todas las funciones profesionales durante 14 días completos sin costo ni compromiso, sin tener que ingresar tarjetas de crédito.
            </p>
</details>
<!-- FAQ 3 -->
<details class="group p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] open:border-[#1F609C]/40 transition-all">
<summary class="flex justify-between items-center font-bold text-base sm:text-lg text-[#243C4C] cursor-pointer list-none">
<span class="">¿Puedo agregar más usuarios?</span>
<span class="material-symbols-outlined text-[#5289AD] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-sm text-[#243C4C]/80 leading-relaxed pt-2 border-t border-[#E6EBF0]">
              Sí. El plan Empresa permite agregar usuarios y asesores comerciales adicionales según el crecimiento de tu equipo, o puedes adquirir usuarios extra como complementos individuales desde Q4.
            </p>
</details>
<!-- FAQ 4 -->
<details class="group p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] open:border-[#1F609C]/40 transition-all">
<summary class="flex justify-between items-center font-bold text-base sm:text-lg text-[#243C4C] cursor-pointer list-none">
<span class="">¿Puedo cancelar mi suscripción?</span>
<span class="material-symbols-outlined text-[#5289AD] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-sm text-[#243C4C]/80 leading-relaxed pt-2 border-t border-[#E6EBF0]">
              Sí, puedes cambiar de plan o cancelar tu suscripción en cualquier momento sin penalizaciones ni contratos forzosos. Tú tienes el control total de tu cuenta.
            </p>
</details>
<!-- FAQ 5 -->
<details class="group p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF0] open:border-[#1F609C]/40 transition-all">
<summary class="flex justify-between items-center font-bold text-base sm:text-lg text-[#243C4C] cursor-pointer list-none">
<span class="">¿Los links de pago aceptan cobros en Quetzales?</span>
<span class="material-symbols-outlined text-[#5289AD] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-sm text-[#243C4C]/80 leading-relaxed pt-2 border-t border-[#E6EBF0]">
              Sí, FlowCommerce está optimizado para cobrar en Quetzales (Q) de forma segura con liquidación ágil e integración bancaria directa en Guatemala y toda la región.
            </p>
</details>
</div>
</div>
</section>
<!-- 14. CTA FINAL -->
<section class="py-20 bg-[#F8FAFC]">
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="p-8 sm:p-14 rounded-3xl bg-white border border-[#E6EBF0] shadow-xl text-center relative overflow-hidden">
<div class="max-w-2xl mx-auto">
<h2 class="text-3xl sm:text-4xl font-extrabold text-[#243C4C] mb-4">
              ¿Listo para hacer crecer tus ventas?
            </h2>
<p class="text-base sm:text-lg text-[#243C4C]/80 mb-8 leading-relaxed">
              Gestiona clientes, cotizaciones, seguimiento y pagos desde un solo lugar.
            </p>
<a class="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#1F609C] text-white font-bold text-base shadow-md hover:bg-[#243C4C] hover:shadow-lg transition-all mb-4" href="#planes">
<span class="">Comenzar gratis</span>
<span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</a>
<p class="text-xs sm:text-sm text-[#243C4C]/60 font-medium">
              Empieza con el plan gratuito y escala cuando tu negocio lo necesite.
            </p>
</div>
</div>
</div>
</section>
</main>
<!-- 15. FOOTER -->
<footer class="w-full bg-white border-t border-[#E6EBF0]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
<!-- Columna Marca -->
<div class="lg:col-span-2 space-y-4">
<a class="inline-block" href="#">
<img alt="FlowCommerce" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSVA639-ifhCTJC2SHIn9lRBomVpzWTcoWuAJNO3ewk_7So1fXXwbglVzIMAN6DOIkyYXSkDidnhc_eGFSiJU3Ld6aL60CZ3OSgxnLlOFxz4FRek1QAopqcky6acPoVAqcv7ZWKRlZ6lG3d0h7DU-ZSbPgUtoWInI1bWCd8esbW6r2TLBzdE9ZV75qd-POKuQAcFoe1Kev0K-IYK8QcBlzG4Kbksgmd3Hh_RqS8aF7cRhPo6sZTmymJdaH5Rsb16iIZQ">
</a>
<p class="text-sm text-[#243C4C]/75 max-w-sm leading-relaxed">
            Plataforma comercial y CRM ágil para acelerar ventas, emitir cotizaciones profesionales y recaudar pagos en moneda local sin fricción operativa.
          </p>
<div class="flex items-center gap-2 text-xs font-mono-num text-[#5289AD]">
<span class="w-2 h-2 rounded-full bg-[#4B8D4B]"></span>
<span class="">Servicios operativos 99.8% SLA</span>
</div>
</div>
<!-- Columna Producto -->
<div class="space-y-3">
<h4 class="font-bold text-sm text-[#243C4C] tracking-wide uppercase font-mono-num">Producto</h4>
<ul class="space-y-2 text-sm text-[#243C4C]/80">
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#como-funciona">¿Cómo funciona?</a></li>
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#beneficios">Beneficios</a></li>
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#planes">Planes &amp; Precios</a></li>
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#complementos">Complementos desde Q4</a></li>
</ul>
</div>
<!-- Columna Soluciones -->
<div class="space-y-3">
<h4 class="font-bold text-sm text-[#243C4C] tracking-wide uppercase font-mono-num">Soluciones</h4>
<ul class="space-y-2 text-sm text-[#243C4C]/80">
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#soluciones">Para Emprendedores</a></li>
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#soluciones">Para Empresas B2B</a></li>
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#como-funciona">Links de Pago en Q</a></li>
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#faq">Preguntas Frecuentes</a></li>
</ul>
</div>
<!-- Columna Seguridad & Legal -->
<div class="space-y-3">
<h4 class="font-bold text-sm text-[#243C4C] tracking-wide uppercase font-mono-num">Seguridad &amp; Legal</h4>
<ul class="space-y-2 text-sm text-[#243C4C]/80">
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#">Políticas de Privacidad</a></li>
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#">Términos de Servicio</a></li>
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#">Cifrado Bancario 256-Bit</a></li>
<li class=""><a class="hover:text-[#1F609C] transition-colors" href="#">SLA de Disponibilidad</a></li>
</ul>
</div>
</div>
<!-- Barra Inferior Copyright -->
<div class="pt-8 border-t border-[#E6EBF0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#243C4C]/60">
<p class="font-mono-num">
          © 2026 FlowCommerce Technologies Inc. Todos los derechos reservados.
        </p>
<p class="font-mono-num">
          Diseñado para Guatemala y América Latina · Precios en Quetzales (Q)
        </p>
</div>
</div>
</footer>
`;function Af(){return Vl.jsx("div",{dangerouslySetInnerHTML:{__html:zf}})}$l.createRoot(document.getElementById("root")).render(Vl.jsx(hc.StrictMode,{children:Vl.jsx(Af,{})}));
