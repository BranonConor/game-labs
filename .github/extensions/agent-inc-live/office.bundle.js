var wE=Object.create;var zv=Object.defineProperty;var RE=Object.getOwnPropertyDescriptor;var CE=Object.getOwnPropertyNames;var DE=Object.getPrototypeOf,NE=Object.prototype.hasOwnProperty;var ls=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var UE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of CE(t))!NE.call(e,s)&&s!==n&&zv(e,s,{get:()=>t[s],enumerable:!(i=RE(t,s))||i.enumerable});return e};var Mu=(e,t,n)=>(n=e!=null?wE(DE(e)):{},UE(t||!e||!e.__esModule?zv(n,"default",{value:e,enumerable:!0}):n,e));var Kv=ls(Xt=>{"use strict";var cp=Symbol.for("react.transitional.element"),LE=Symbol.for("react.portal"),OE=Symbol.for("react.fragment"),IE=Symbol.for("react.strict_mode"),PE=Symbol.for("react.profiler"),zE=Symbol.for("react.consumer"),BE=Symbol.for("react.context"),FE=Symbol.for("react.forward_ref"),HE=Symbol.for("react.suspense"),VE=Symbol.for("react.memo"),Gv=Symbol.for("react.lazy"),GE=Symbol.for("react.activity"),kE=Symbol.for("react.view_transition"),Bv=Symbol.iterator;function XE(e){return e===null||typeof e!="object"?null:(e=Bv&&e[Bv]||e["@@iterator"],typeof e=="function"?e:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xv=Object.assign,Wv={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Wv,this.updater=n||kv}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qv(){}qv.prototype=Kr.prototype;function up(e,t,n){this.props=e,this.context=t,this.refs=Wv,this.updater=n||kv}var hp=up.prototype=new qv;hp.constructor=up;Xv(hp,Kr.prototype);hp.isPureReactComponent=!0;var Fv=Array.isArray;function lp(){}var De={H:null,A:null,T:null,S:null},Yv=Object.prototype.hasOwnProperty;function fp(e,t,n){var i=n.ref;return{$$typeof:cp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function WE(e,t){return fp(e.type,t,e.props)}function dp(e){return typeof e=="object"&&e!==null&&e.$$typeof===cp}function qE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hv=/\/+/g;function op(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qE(""+e.key):t.toString(36)}function YE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(lp,lp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Jr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case cp:case LE:r=!0;break;case Gv:return r=e._init,Jr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+op(e,0):i,Fv(s)?(n="",r!=null&&(n=r.replace(Hv,"$&/")+"/"),Jr(s,t,n,"",function(c){return c})):s!=null&&(dp(s)&&(s=WE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Hv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Fv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+op(i,l),r+=Jr(i,t,n,a,s);else if(l=XE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+op(i,l++),r+=Jr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Jr(YE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function bu(e,t,n){if(e==null)return e;var i=[],s=0;return Jr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function ZE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Vv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zv(e){var t=De.T,n={};n.types=t!==null?t.types:null,De.T=n;try{var i=e(),s=De.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(lp,Vv)}catch(a){Vv(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),De.T=t}}function Jv(e){var t=De.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Zv(Jv.bind(null,e))}var JE={map:bu,forEach:function(e,t,n){bu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bu(e,function(){t++}),t},toArray:function(e){return bu(e,function(t){return t})||[]},only:function(e){if(!dp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Xt.Activity=GE;Xt.Children=JE;Xt.Component=Kr;Xt.Fragment=OE;Xt.Profiler=PE;Xt.PureComponent=up;Xt.StrictMode=IE;Xt.Suspense=HE;Xt.ViewTransition=kE;Xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=De;Xt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return De.H.useMemoCache(e)}};Xt.addTransitionType=Jv;Xt.cache=function(e){return function(){return e.apply(null,arguments)}};Xt.cacheSignal=function(){return null};Xt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Xv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Yv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return fp(e.type,s,i)};Xt.createContext=function(e){return e={$$typeof:BE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:zE,_context:e},e};Xt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Yv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return fp(e,a,s)};Xt.createRef=function(){return{current:null}};Xt.forwardRef=function(e){return{$$typeof:FE,render:e}};Xt.isValidElement=dp;Xt.lazy=function(e){return{$$typeof:Gv,_payload:{_status:-1,_result:e},_init:ZE}};Xt.memo=function(e,t){return{$$typeof:VE,type:e,compare:t===void 0?null:t}};Xt.startTransition=Zv;Xt.unstable_useCacheRefresh=function(){return De.H.useCacheRefresh()};Xt.use=function(e){return De.H.use(e)};Xt.useActionState=function(e,t,n){return De.H.useActionState(e,t,n)};Xt.useCallback=function(e,t){return De.H.useCallback(e,t)};Xt.useContext=function(e){return De.H.useContext(e)};Xt.useDebugValue=function(){};Xt.useDeferredValue=function(e,t){return De.H.useDeferredValue(e,t)};Xt.useEffect=function(e,t){return De.H.useEffect(e,t)};Xt.useEffectEvent=function(e){return De.H.useEffectEvent(e)};Xt.useId=function(){return De.H.useId()};Xt.useImperativeHandle=function(e,t,n){return De.H.useImperativeHandle(e,t,n)};Xt.useInsertionEffect=function(e,t){return De.H.useInsertionEffect(e,t)};Xt.useLayoutEffect=function(e,t){return De.H.useLayoutEffect(e,t)};Xt.useMemo=function(e,t){return De.H.useMemo(e,t)};Xt.useOptimistic=function(e,t){return De.H.useOptimistic(e,t)};Xt.useReducer=function(e,t,n){return De.H.useReducer(e,t,n)};Xt.useRef=function(e){return De.H.useRef(e)};Xt.useState=function(e){return De.H.useState(e)};Xt.useSyncExternalStore=function(e,t,n){return De.H.useSyncExternalStore(e,t,n)};Xt.useTransition=function(){return De.H.useTransition()};Xt.version="19.3.0"});var Eu=ls((QN,Qv)=>{"use strict";Qv.exports=Kv()});var o_=ls(Fe=>{"use strict";function vp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Tu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function cs(e){return e.length===0?null:e[0]}function wu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Tu(o,n))l<s&&0>Tu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Tu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Tu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Fe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(jv=performance,Fe.unstable_now=function(){return jv.now()}):(pp=Date,$v=pp.now(),Fe.unstable_now=function(){return pp.now()-$v});var jv,pp,$v,Us=[],ua=[],KE=1,Ni=null,Dn=3,_p=!1,Ll=!1,Ol=!1,yp=!1,n_=typeof setTimeout=="function"?setTimeout:null,i_=typeof clearTimeout=="function"?clearTimeout:null,t_=typeof setImmediate<"u"?setImmediate:null;function Au(e){for(var t=cs(ua);t!==null;){if(t.callback===null)wu(ua);else if(t.startTime<=e)wu(ua),t.sortIndex=t.expirationTime,vp(Us,t);else break;t=cs(ua)}}function xp(e){if(Ol=!1,Au(e),!Ll)if(cs(Us)!==null)Ll=!0,jr||(jr=!0,Qr());else{var t=cs(ua);t!==null&&Sp(xp,t.startTime-e)}}var jr=!1,Il=-1,s_=5,a_=-1;function r_(){return yp?!0:!(Fe.unstable_now()-a_<s_)}function mp(){if(yp=!1,jr){var e=Fe.unstable_now();a_=e;var t=!0;try{t:{Ll=!1,Ol&&(Ol=!1,i_(Il),Il=-1),_p=!0;var n=Dn;try{e:{for(Au(e),Ni=cs(Us);Ni!==null&&!(Ni.expirationTime>e&&r_());){var i=Ni.callback;if(typeof i=="function"){Ni.callback=null,Dn=Ni.priorityLevel;var s=i(Ni.expirationTime<=e);if(e=Fe.unstable_now(),typeof s=="function"){Ni.callback=s,Au(e),t=!0;break e}Ni===cs(Us)&&wu(Us),Au(e)}else wu(Us);Ni=cs(Us)}if(Ni!==null)t=!0;else{var a=cs(ua);a!==null&&Sp(xp,a.startTime-e),t=!1}}break t}finally{Ni=null,Dn=n,_p=!1}t=void 0}}finally{t?Qr():jr=!1}}}var Qr;typeof t_=="function"?Qr=function(){t_(mp)}:typeof MessageChannel<"u"?(gp=new MessageChannel,e_=gp.port2,gp.port1.onmessage=mp,Qr=function(){e_.postMessage(null)}):Qr=function(){n_(mp,0)};var gp,e_;function Sp(e,t){Il=n_(function(){e(Fe.unstable_now())},t)}Fe.unstable_IdlePriority=5;Fe.unstable_ImmediatePriority=1;Fe.unstable_LowPriority=4;Fe.unstable_NormalPriority=3;Fe.unstable_Profiling=null;Fe.unstable_UserBlockingPriority=2;Fe.unstable_cancelCallback=function(e){e.callback=null};Fe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):s_=0<e?Math.floor(1e3/e):5};Fe.unstable_getCurrentPriorityLevel=function(){return Dn};Fe.unstable_next=function(e){switch(Dn){case 1:case 2:case 3:var t=3;break;default:t=Dn}var n=Dn;Dn=t;try{return e()}finally{Dn=n}};Fe.unstable_requestPaint=function(){yp=!0};Fe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Dn;Dn=e;try{return t()}finally{Dn=n}};Fe.unstable_scheduleCallback=function(e,t,n){var i=Fe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:KE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,vp(ua,e),cs(Us)===null&&e===cs(ua)&&(Ol?(i_(Il),Il=-1):Ol=!0,Sp(xp,n-i))):(e.sortIndex=s,vp(Us,e),Ll||_p||(Ll=!0,jr||(jr=!0,Qr()))),e};Fe.unstable_shouldYield=r_;Fe.unstable_wrapCallback=function(e){var t=Dn;return function(){var n=Dn;Dn=t;try{return e.apply(this,arguments)}finally{Dn=n}}}});var c_=ls(($N,l_)=>{"use strict";l_.exports=o_()});var f_=ls(Nn=>{"use strict";var QE=Eu();function h_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ha(){}var kn={d:{f:ha,r:function(){throw Error(h_(522))},D:ha,C:ha,L:ha,m:ha,X:ha,S:ha,M:ha},p:0,findDOMNode:null},jE=Symbol.for("react.portal"),$E=Symbol.for("react.recoverable"),u_=Symbol.for("react.optimistic_key");function tT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jE,key:i==null?null:i===u_?u_:""+i,children:e,containerInfo:t,implementation:n}}var Pl=QE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ru(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=kn;Nn.browser=function(e){return{$$typeof:$E,_reason:e}};Nn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(h_(299));return tT(e,t,null,n)};Nn.flushSync=function(e){var t=Pl.T,n=kn.p;try{if(Pl.T=null,kn.p=2,e)return e()}finally{Pl.T=t,kn.p=n,kn.d.f()}};Nn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,kn.d.C(e,t))};Nn.prefetchDNS=function(e){typeof e=="string"&&kn.d.D(e)};Nn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Ru(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?kn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&kn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Nn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ru(t.as,t.crossOrigin);kn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&kn.d.M(e)};Nn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Ru(n,t.crossOrigin);kn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Nn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ru(t.as,t.crossOrigin);kn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else kn.d.m(e)};Nn.requestFormReset=function(e){kn.d.r(e)};Nn.unstable_batchedUpdates=function(e,t){return e(t)};Nn.useFormState=function(e,t,n){return Pl.H.useFormState(e,t,n)};Nn.useFormStatus=function(){return Pl.H.useHostTransitionStatus()};Nn.version="19.3.0"});var m_=ls((eU,p_)=>{"use strict";function d_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d_)}catch(e){console.error(e)}}d_(),p_.exports=f_()});var eM=ls(uf=>{"use strict";var sn=c_(),tx=Eu(),eT=m_();function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ex(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function nx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ix(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g_(e){if(bc(e)!==e)throw Error(K(188))}function nT(e){var t=e.alternate;if(!t){if(t=bc(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return g_(s),e;if(a===i)return g_(s),t;a=a.sibling}throw Error(K(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function sx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=sx(e),t!==null)return t;e=e.sibling}return null}function si(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&si(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Mr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function v_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function ax(e){var t=[null,null],n=Mr(e);return n===null||rx(t,e,n.child,{foundSelf:!1}),t}function rx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&rx(e,t,n.child,i))return!0;n=n.sibling}return!1}function nn(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(K(559))}}var ao=null,$p=null;function iT(e,t,n){return e===n?!0:e===t?(ao=e,!0):!1}function sT(e,t,n){return e===n?($p=e,!1):e===t?($p!==null&&(ao=e),!0):!1}function __(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function tm(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Re=Object.assign,aT=Symbol.for("react.element"),Cu=Symbol.for("react.transitional.element"),kl=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),ox=Symbol.for("react.strict_mode"),em=Symbol.for("react.profiler"),lx=Symbol.for("react.consumer"),ms=Symbol.for("react.context"),ug=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),im=Symbol.for("react.suspense_list"),hg=Symbol.for("react.memo"),ma=Symbol.for("react.lazy");Symbol.for("react.scope");var sm=Symbol.for("react.activity"),rT=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var oT=Symbol.for("react.memo_cache_sentinel"),am=Symbol.for("react.view_transition"),lT=Symbol.for("react.recoverable"),y_=Symbol.iterator;function zl(e){return e===null||typeof e!="object"?null:(e=y_&&e[y_]||e["@@iterator"],typeof e=="function"?e:null)}var cT=Symbol.for("react.client.reference");function rm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===cT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ro:return"Fragment";case em:return"Profiler";case ox:return"StrictMode";case nm:return"Suspense";case im:return"SuspenseList";case sm:return"Activity";case am:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case kl:return"Portal";case ms:return e.displayName||"Context";case lx:return(e._context.displayName||"Context")+".Consumer";case ug:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hg:return t=e.displayName||null,t!==null?t:rm(e.type)||"Memo";case ma:t=e._payload,e=e._init;try{return rm(e(t))}catch{}}return null}var Xl=Array.isArray,Gt=tx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=eT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cr={pending:!1,data:null,method:null,action:null},om=[],oo=-1;function Ms(e){return{current:e}}function xn(e){0>oo||(e.current=om[oo],om[oo]=null,oo--)}function Le(e,t){oo++,om[oo]=e.current,e.current=t}var ys=Ms(null),oc=Ms(null),Ea=Ms(null),mh=Ms(null);function gh(e,t){switch(Le(Ea,t),Le(oc,e),Le(ys,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ly(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ly(t),e=DS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xn(ys),Le(ys,e)}function Ro(){xn(ys),xn(oc),xn(Ea)}function lm(e){var t=e.memoizedState;t!==null&&(Bo._currentValue=t.memoizedState,Le(mh,e)),t=ys.current;var n=DS(t,e.type);t!==n&&(Le(oc,e),Le(ys,n))}function vh(e){oc.current===e&&(xn(ys),xn(oc)),mh.current===e&&(xn(mh),Bo._currentValue=cr)}var Mp,x_;function da(e){if(Mp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mp=t&&t[1]||"",x_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mp+e+x_}var bp=!1;function Ep(e,t){if(!e||bp)return"";bp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var f=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){f=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){f=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&f&&typeof g.stack=="string")return[g.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{bp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?da(n):""}function uT(e,t){switch(e.tag){case 26:case 27:case 5:return da(e.type);case 16:return da("Lazy");case 13:return e.child!==t&&t!==null?da("Suspense Fallback"):da("Suspense");case 19:return da("SuspenseList");case 0:case 15:return Ep(e.type,!1);case 11:return Ep(e.type.render,!1);case 1:return Ep(e.type,!0);case 31:return da("Activity");case 30:return da("ViewTransition");default:return""}}function S_(e){try{var t="",n=null;do t+=uT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var cm=Object.prototype.hasOwnProperty,fg=sn.unstable_scheduleCallback,Tp=sn.unstable_cancelCallback,hT=sn.unstable_shouldYield,fT=sn.unstable_requestPaint,yi=sn.unstable_now,dT=sn.unstable_getCurrentPriorityLevel,cx=sn.unstable_ImmediatePriority,ux=sn.unstable_UserBlockingPriority,_h=sn.unstable_NormalPriority,pT=sn.unstable_LowPriority,hx=sn.unstable_IdlePriority,mT=sn.log,gT=sn.unstable_setDisableYieldValue,Ec=null,xi=null;function _a(e){if(typeof mT=="function"&&gT(e),xi&&typeof xi.setStrictMode=="function")try{xi.setStrictMode(Ec,e)}catch{}}var Si=Math.clz32?Math.clz32:yT,vT=Math.log,_T=Math.LN2;function yT(e){return e>>>=0,e===0?32:31-(vT(e)/_T|0)|0}var Du=256,Nu=262144,Uu=4194304;function sr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=sr(i):(r&=o,r!==0?s=sr(r):n||(n=o&~e,n!==0&&(s=sr(n))))):(o=i&~a,o!==0?s=sr(o):r!==0?s=sr(r):n||(n=i&~e,n!==0&&(s=sr(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Tc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function fx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Si(n),s=1<<i;t|=e[i],n&=~s}return t}function xT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dx(){var e=Uu;return Uu<<=1,(Uu&62914560)===0&&(Uu=4194304),e}function Ap(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ac(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ST(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Si(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&px(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function px(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Si(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function mx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Si(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function gx(e,t){var n=t&-t;return n=(n&42)!==0?1:dg(n),(n&(e.suspendedLanes|t))!==0?0:n}function dg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function vx(){var e=de.p;return e!==0?e:(e=window.event,e===void 0?32:jS(e.type))}function M_(e,t){var n=de.p;try{return de.p=e,t()}finally{de.p=n}}var Ws=Math.random().toString(36).slice(2),_n="__reactFiber$"+Ws,ai="__reactProps$"+Ws,Vo="__reactContainer$"+Ws,b_="__reactEvents$"+Ws,MT="__reactListeners$"+Ws,bT="__reactHandles$"+Ws,E_="__reactResources$"+Ws,wc="__reactMarker$"+Ws,yh="__reactLoad$"+Ws;function Wh(e){delete e[_n],delete e[ai],delete e[MT],delete e[bT]}function or(e){var t;if(t=e[_n])return t;for(var n=e.parentNode;n;){if(t=n[Vo]||n[_n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vy(e);e!==null;){if(n=e[_n])return n;e=Vy(e)}return t}e=n,n=e.parentNode}return null}function Go(e){if(e=e[_n]||e[Vo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function _o(e){var t=e[E_];return t||(t=e[E_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function hn(e){e[wc]=!0}function _x(e){e[yh]=void 0}var yx=new Set,xx={};function br(e,t){Co(e,t),Co(e+"Capture",t)}function Co(e,t){for(xx[e]=t,e=0;e<t.length;e++)yx.add(t[e])}var ET=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),T_={},A_={};function TT(e){return cm.call(A_,e)?!0:cm.call(T_,e)?!1:ET.test(e)?A_[e]=!0:(T_[e]=!0,!1)}var he=!1;function w_(){var e=he;return he=!1,e}function Ku(e,t,n){if(TT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Lu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ls(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function mi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function AT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function um(e){if(!e._valueTracker){var t=Sx(e)?"checked":"value";e._valueTracker=AT(e,t,""+e[t])}}function Mx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Sx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var wT=/[\n"\\]/g;function Pi(e){return e.replace(wT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+mi(t)):e.value!==""+mi(t)&&(e.value=""+mi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?wp(e,mi(e.value)):wp(e,mi(t)):n!=null?wp(e,mi(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+mi(o):e.removeAttribute("name")}function bx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){um(e);return}n=n!=null?""+mi(n):"",t=t!=null?""+mi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),um(e)}function wp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function yo(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+mi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ex(e,t,n){if(t!=null&&(t=""+mi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+mi(n):""}function Tx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(K(92));if(Xl(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=mi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),um(e)}function Do(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var RT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function R_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||RT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ax(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",he=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(R_(e,s,i),he=!0)}else for(var a in t)t.hasOwnProperty(a)&&R_(e,a,t[a])}function mg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),DT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qu(e){return DT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gs(){}var fm=null;function gg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,xo=null;function C_(e){var t=Go(e);if(t&&(e=t.stateNode)){var n=e[ai]||null;t:switch(e=t.stateNode,t.type){case"input":if(hm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Pi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ai]||null;if(!s)throw Error(K(90));hm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Mx(i)}break t;case"textarea":Ex(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&yo(e,!!n.multiple,t,!1)}}}var Rp=!1;function wx(e,t,n){if(Rp)return e(t,n);Rp=!0;try{var i=e(t);return i}finally{if(Rp=!1,(lo!==null||xo!==null)&&(rf(),lo&&(t=lo,e=xo,xo=lo=null,C_(t),e)))for(t=0;t<e.length;t++)C_(e[t])}}function lc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ai]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var Fs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dm=!1;if(Fs)try{$r={},Object.defineProperty($r,"passive",{get:function(){dm=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{dm=!1}var $r,ya=null,vg=null,ju=null;function Rx(){if(ju)return ju;var e,t=vg,n=t.length,i,s="value"in ya?ya.value:ya.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return ju=s.slice(e,1<i?1-i:void 0)}function $u(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ou(){return!0}function D_(){return!1}function Yn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ou:D_,this.isPropagationStopped=D_,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ou)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ou)},persist:function(){},isPersistent:Ou}),t}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qh=Yn(Fa),Rc=Re({},Fa,{view:0,detail:0}),NT=Yn(Rc),Cp,Dp,Bl,Yh=Re({},Rc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_g,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(Cp=e.screenX-Bl.screenX,Dp=e.screenY-Bl.screenY):Dp=Cp=0,Bl=e),Cp)},movementY:function(e){return"movementY"in e?e.movementY:Dp}}),N_=Yn(Yh),UT=Re({},Yh,{dataTransfer:0}),LT=Yn(UT),OT=Re({},Rc,{relatedTarget:0}),Np=Yn(OT),IT=Re({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),PT=Yn(IT),zT=Re({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),BT=Yn(zT),FT=Re({},Fa,{data:0}),U_=Yn(FT),HT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=GT[e])?!!t[e]:!1}function _g(){return kT}var XT=Re({},Rc,{key:function(e){if(e.key){var t=HT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$u(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?VT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_g,charCode:function(e){return e.type==="keypress"?$u(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$u(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),WT=Yn(XT),qT=Re({},Yh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L_=Yn(qT),YT=Re({},Fa,{submitter:0}),ZT=Yn(YT),JT=Re({},Rc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_g}),KT=Yn(JT),QT=Re({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),jT=Yn(QT),$T=Re({},Yh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tA=Yn($T),eA=Re({},Fa,{newState:0,oldState:0,source:0}),nA=Yn(eA),iA=[9,13,27,32],yg=Fs&&"CompositionEvent"in window,Zl=null;Fs&&"documentMode"in document&&(Zl=document.documentMode);var sA=Fs&&"TextEvent"in window&&!Zl,Cx=Fs&&(!yg||Zl&&8<Zl&&11>=Zl),O_=" ",I_=!1;function Dx(e,t){switch(e){case"keyup":return iA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var co=!1;function aA(e,t){switch(e){case"compositionend":return Nx(t);case"keypress":return t.which!==32?null:(I_=!0,O_);case"textInput":return e=t.data,e===O_&&I_?null:e;default:return null}}function rA(e,t){if(co)return e==="compositionend"||!yg&&Dx(e,t)?(e=Rx(),ju=vg=ya=null,co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cx&&t.locale!=="ko"?null:t.data;default:return null}}var oA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function P_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oA[e.type]:t==="textarea"}function Ux(e,t,n,i){lo?xo?xo.push(i):xo=[i]:lo=i,t=Vh(t,"onChange"),0<t.length&&(n=new qh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Jl=null,cc=null;function lA(e){wS(e,0)}function Zh(e){var t=Wl(e);if(Mx(t))return e}function z_(e,t){if(e==="change")return t}var Lx=!1;Fs&&(Fs?(Pu="oninput"in document,Pu||(Up=document.createElement("div"),Up.setAttribute("oninput","return;"),Pu=typeof Up.oninput=="function"),Iu=Pu):Iu=!1,Lx=Iu&&(!document.documentMode||9<document.documentMode));var Iu,Pu,Up;function B_(){Jl&&(Jl.detachEvent("onpropertychange",Ox),cc=Jl=null)}function Ox(e){if(e.propertyName==="value"&&Zh(cc)){var t=[];Ux(t,cc,e,gg(e)),wx(lA,t)}}function cA(e,t,n){e==="focusin"?(B_(),Jl=t,cc=n,Jl.attachEvent("onpropertychange",Ox)):e==="focusout"&&B_()}function uA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zh(cc)}function hA(e,t){if(e==="click")return Zh(t)}function fA(e,t){if(e==="input"||e==="change")return Zh(t)}function dA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bi=typeof Object.is=="function"?Object.is:dA;function uc(e,t){if(bi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!cm.call(t,s)||!bi(e[s],t[s]))return!1}return!0}function pm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function F_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function H_(e,t){var n=F_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=F_(n)}}function Ix(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ix(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Px(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pm(e.document)}return t}function xg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pA=Fs&&"documentMode"in document&&11>=document.documentMode,uo=null,mm=null,Kl=null,gm=!1;function V_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gm||uo==null||uo!==pm(i)||(i=uo,"selectionStart"in i&&xg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Kl&&uc(Kl,i)||(Kl=i,i=Vh(mm,"onSelect"),0<i.length&&(t=new qh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=uo)))}function nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ho={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Lp={},zx={};Fs&&(zx=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Er(e){if(Lp[e])return Lp[e];if(!ho[e])return e;var t=ho[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zx)return Lp[e]=t[n];return e}var Bx=Er("animationend"),Fx=Er("animationiteration"),Hx=Er("animationstart"),mA=Er("transitionrun"),gA=Er("transitionstart"),vA=Er("transitioncancel"),Vx=Er("transitionend"),Gx=new Map,vm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vm.push("scrollEnd");function Qi(e,t){Gx.set(e,t),br(t,[e])}var _A=0;function Hs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ki.identifierPrefix;var n=_A++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function G_(e){if(e==null||typeof e=="string")return e;var t=null,n=wo;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function qs(e,t){return e=G_(e),t=G_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var xh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Li=[],fo=0,Sg=0;function Jh(){for(var e=fo,t=Sg=fo=0;t<e;){var n=Li[t];Li[t++]=null;var i=Li[t];Li[t++]=null;var s=Li[t];Li[t++]=null;var a=Li[t];if(Li[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&kx(n,s,a)}}function Kh(e,t,n,i){Li[fo++]=e,Li[fo++]=t,Li[fo++]=n,Li[fo++]=i,Sg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Mg(e,t,n,i){return Kh(e,t,n,i),Sh(e)}function Tr(e,t){return Kh(e,null,null,t),Sh(e)}function kx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Si(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Sh(e){if(50<rc)throw rc=0,ch=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var po={};function yA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,t,n,i){return new yA(e,t,n,i)}function bg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zs(e,t){var n=e.alternate;return n===null?(n=ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Xx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function th(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")bg(i)&&(r=1);else if(typeof i=="string")r=Ww(e,n,ys.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case sm:return e=ni(31,n,t,s),e.elementType=sm,e.lanes=a,e;case ro:return ur(n.children,s,a,t);case ox:r=8,s|=24;break;case em:return e=ni(12,n,t,s|2),e.elementType=em,e.lanes=a,e;case nm:return e=ni(13,n,t,s),e.elementType=nm,e.lanes=a,e;case im:return e=ni(19,n,t,s),e.elementType=im,e.lanes=a,e;case rT:case am:return e=s|32,e=ni(30,n,t,e),e.elementType=am,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ms:r=10;break t;case lx:r=9;break t;case ug:r=11;break t;case hg:r=14;break t;case ma:r=16,i=null;break t}r=29,n=Error(K(130,e===null?"null":typeof e,"")),i=null}return t=ni(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function ur(e,t,n,i){return e=ni(7,e,i,t),e.lanes=n,e}function Op(e,t,n){return e=ni(6,e,null,t),e.lanes=n,e}function Wx(e){var t=ni(18,null,null,0);return t.stateNode=e,t}function Ip(e,t,n){return t=ni(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var k_=new WeakMap;function zi(e,t){if(typeof e=="object"&&e!==null){var n=k_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:S_(t)},k_.set(e,t),t)}return{value:e,source:t,stack:S_(t)}}var mo=[],go=0,Mh=null,hc=0,Oi=[],Ii=0,Oa=null,vs=1,_s="";function Is(e,t){mo[go++]=hc,mo[go++]=Mh,Mh=e,hc=t}function qx(e,t,n){Oi[Ii++]=vs,Oi[Ii++]=_s,Oi[Ii++]=Oa,Oa=e;var i=vs;e=_s;var s=32-Si(i)-1;i&=~(1<<s),n+=1;var a=32-Si(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,vs=1<<32-Si(t)+s|n<<s|i,_s=a+e}else vs=1<<a|n<<s|i,_s=e}function Qh(e){e.return!==null&&(Is(e,1),qx(e,1,0))}function Eg(e){for(;e===Mh;)Mh=mo[--go],mo[go]=null,hc=mo[--go],mo[go]=null;for(;e===Oa;)Oa=Oi[--Ii],Oi[Ii]=null,_s=Oi[--Ii],Oi[Ii]=null,vs=Oi[--Ii],Oi[Ii]=null}function Yx(e,t){Oi[Ii++]=vs,Oi[Ii++]=_s,Oi[Ii++]=Oa,vs=t.id,_s=t.overflow,Oa=e}var fn=null,Ue=null,ee=!1,Ta=null,Bi=!1,_m=Error(K(519));function Ia(e){var t=Error(K(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fc(zi(t,e)),_m}function X_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[_n]=e,t[ai]=i,n){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(n=0;n<gc.length;n++)ne(gc[n],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),bx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Tx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||CS(t.textContent,n)?(i.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),i.onScroll!=null&&ne("scroll",t),i.onScrollEnd!=null&&ne("scrollend",t),i.onClick!=null&&(t.onclick=gs),t=!0):t=!1,t||Ia(e,!0)}function bh(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:fn=fn.return}}function to(e){if(e!==fn)return!1;if(!ee)return bh(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ng(e.type,e.memoizedProps)),n=!n),n&&Ue&&Ia(e),bh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Ue=Hy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Ue=Hy(e)}else t===27?(t=Ue,Ha(e.type)?(e=rg,rg=null,Ue=e):Ue=t):Ue=fn?Fi(e.stateNode.nextSibling):null;return!0}function pr(){Ue=fn=null,ee=!1}function Pp(){var e=Ta;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),Ta=null),e}function fc(e){Ta===null?Ta=[e]:Ta.push(e)}var ym=Ms(null),Ar=null,Ps=null;function xa(e,t,n){Le(ym,t._currentValue),t._currentValue=n}function Bs(e){e._currentValue=ym.current,xn(ym)}function eh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function xm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),eh(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(K(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),eh(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),eh(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function mr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(K(387));if(r=r.memoizedProps,r!==null){var o=s.type;bi(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===mh.current){if(r=s.alternate,r===null)throw Error(K(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}s=s.return}return e!==null&&xm(t,e,n,i),t.flags|=262144,e!==null}function Eh(e){for(e=e.firstContext;e!==null;){if(!bi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gr(e){Ar=e,Ps=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return Zx(Ar,e)}function zu(e,t){return Ar===null&&gr(e),Zx(e,t)}function Zx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ps===null){if(e===null)throw Error(K(308));Ps=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ps=Ps.next=t;return n}var xA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},SA=sn.unstable_scheduleCallback,MA=sn.unstable_NormalPriority,Qe={$$typeof:ms,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tg(){return{controller:new xA,data:new Map,refCount:0}}function Cc(e){e.refCount--,e.refCount===0&&SA(MA,function(){e.controller.abort()})}function W_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var ql=null;function bA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ql=null,Sm=0,vr=0,So=null;function EA(e,t){if(Ql===null){var n=Ql=[];Sm=0,vr=$g(),So={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sm++,t.then(q_,q_),t}function q_(){if(--Sm===0&&(ql=null,Ql!==null)){So!==null&&(So.status="fulfilled");var e=Ql;Ql=null,vr=0,So=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function TA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Y_=Gt.S;Gt.S=function(e,t){if(fS=yi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&EA(e,t),ql!==null)for(var n=Io;n!==null;)W_(n,ql),n=n.next;if(n=e.types,n!==null){for(var i=Io;i!==null;)W_(i,n),i=i.next;if(vr!==0){i=ql,i===null&&(i=ql=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Y_!==null&&Y_(e,t)};var hr=Ms(null);function Ag(){var e=hr.current;return e!==null?e:we.pooledCache}function nh(e,t){t===null?Le(hr,hr.current):Le(hr,t.pool)}function Jx(){var e=Ag();return e===null?null:{parent:Qe._currentValue,pool:e}}var ko=Error(K(460)),wg=Error(K(474)),jh=Error(K(542)),Th={then:function(){}};function Z_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Kx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gs,gs),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,K_(e),e===void 0&&!("reason"in t)?Error(K(600)):e;default:if(typeof t.status=="string")t.then(gs,gs);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,K_(e),e}throw fr=t,ko}}function ar(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fr=n,ko):n}}var fr=null;function J_(){if(fr===null)throw Error(K(459));var e=fr;return fr=null,e}function K_(e){if(e===ko||e===jh)throw Error(K(483))}var Mo=null,dc=0;function Bu(e){var t=dc;return dc+=1,Mo===null&&(Mo=[]),Kx(Mo,e,t)}function fa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fu(e,t){throw t.$$typeof===aT?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Qx(e){function t(u,v){if(e){var y=u.deletions;y===null?(u.deletions=[v],u.flags|=16):y.push(v)}}function n(u,v){if(!e)return null;for(;v!==null;)t(u,v),v=v.sibling;return null}function i(u){for(var v=new Map;u!==null;)u.key===null?v.set(u.index,u):v.set(u.key,u),u=u.sibling;return v}function s(u,v){return u=zs(u,v),u.index=0,u.sibling=null,u}function a(u,v,y){return u.index=y,e?(y=u.alternate,y!==null?(y=y.index,y<v?(u.flags|=2,v):y):(u.flags|=134217730,v)):(u.flags|=1048576,v)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,v,y,_){return v===null||v.tag!==6?(v=Op(y,u.mode,_),v.return=u,v):(v=s(v,y),v.return=u,v)}function l(u,v,y,_){var T=y.type;return T===ro?(u=h(u,v,y.props.children,_,y.key),fa(u,y),u):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ma&&ar(T)===v.type)?(v=s(v,y.props),fa(v,y),v.return=u,v):(v=th(y.type,y.key,y.props,null,u.mode,_),fa(v,y),v.return=u,v)}function c(u,v,y,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Ip(y,u.mode,_),v.return=u,v):(v=s(v,y.children||[]),v.return=u,v)}function h(u,v,y,_,T){return v===null||v.tag!==7?(v=ur(y,u.mode,_,T),v.return=u,v):(v=s(v,y),v.return=u,v)}function d(u,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Op(""+v,u.mode,y),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cu:return y=th(v.type,v.key,v.props,null,u.mode,y),fa(y,v),y.return=u,y;case kl:return v=Ip(v,u.mode,y),v.return=u,v;case ma:return v=ar(v),d(u,v,y)}if(Xl(v)||zl(v))return v=ur(v,u.mode,y,null),v.return=u,v;if(typeof v.then=="function")return d(u,Bu(v),y);if(v.$$typeof===ms)return d(u,zu(u,v),y);Fu(u,v)}return null}function f(u,v,y,_){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(u,v,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cu:return y.key===T?l(u,v,y,_):null;case kl:return y.key===T?c(u,v,y,_):null;case ma:return y=ar(y),f(u,v,y,_)}if(Xl(y)||zl(y))return T!==null?null:h(u,v,y,_,null);if(typeof y.then=="function")return f(u,v,Bu(y),_);if(y.$$typeof===ms)return f(u,v,zu(u,y),_);Fu(u,y)}return null}function p(u,v,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return u=u.get(y)||null,o(v,u,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Cu:return u=u.get(_.key===null?y:_.key)||null,l(v,u,_,T);case kl:return u=u.get(_.key===null?y:_.key)||null,c(v,u,_,T);case ma:return _=ar(_),p(u,v,y,_,T)}if(Xl(_)||zl(_))return u=u.get(y)||null,h(v,u,_,T,null);if(typeof _.then=="function")return p(u,v,y,Bu(_),T);if(_.$$typeof===ms)return p(u,v,y,zu(v,_),T);Fu(v,_)}return null}function g(u,v,y,_){for(var T=null,w=null,C=v,N=v=0,E=null;C!==null&&N<y.length;N++){C.index>N?(E=C,C=null):E=C.sibling;var M=f(u,C,y[N],_);if(M===null){C===null&&(C=E);break}e&&C&&M.alternate===null&&t(u,C),v=a(M,v,N),w===null?T=M:w.sibling=M,w=M,C=E}if(N===y.length)return n(u,C),ee&&Is(u,N),T;if(C===null){for(;N<y.length;N++)C=d(u,y[N],_),C!==null&&(v=a(C,v,N),w===null?T=C:w.sibling=C,w=C);return ee&&Is(u,N),T}for(C=i(C);N<y.length;N++)E=p(C,u,N,y[N],_),E!==null&&(e&&(M=E.alternate,M!==null&&C.delete(M.key===null?N:M.key)),v=a(E,v,N),w===null?T=E:w.sibling=E,w=E);return e&&C.forEach(function(U){return t(u,U)}),ee&&Is(u,N),T}function x(u,v,y,_){if(y==null)throw Error(K(151));for(var T=null,w=null,C=v,N=v=0,E=null,M=y.next();C!==null&&!M.done;N++,M=y.next()){C.index>N?(E=C,C=null):E=C.sibling;var U=f(u,C,M.value,_);if(U===null){C===null&&(C=E);break}e&&C&&U.alternate===null&&t(u,C),v=a(U,v,N),w===null?T=U:w.sibling=U,w=U,C=E}if(M.done)return n(u,C),ee&&Is(u,N),T;if(C===null){for(;!M.done;N++,M=y.next())M=d(u,M.value,_),M!==null&&(v=a(M,v,N),w===null?T=M:w.sibling=M,w=M);return ee&&Is(u,N),T}for(C=i(C);!M.done;N++,M=y.next())M=p(C,u,N,M.value,_),M!==null&&(e&&(E=M.alternate,E!==null&&C.delete(E.key===null?N:E.key)),v=a(M,v,N),w===null?T=M:w.sibling=M,w=M);return e&&C.forEach(function(z){return t(u,z)}),ee&&Is(u,N),T}function m(u,v,y,_){if(typeof y=="object"&&y!==null&&y.type===ro&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Cu:t:{for(var T=y.key;v!==null;){if(v.key===T){if(T=y.type,T===ro){if(v.tag===7){n(u,v.sibling),_=s(v,y.props.children),fa(_,y),_.return=u,u=_;break t}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ma&&ar(T)===v.type){n(u,v.sibling),_=s(v,y.props),fa(_,y),_.return=u,u=_;break t}n(u,v);break}else t(u,v);v=v.sibling}y.type===ro?(_=ur(y.props.children,u.mode,_,y.key),fa(_,y),_.return=u,u=_):(_=th(y.type,y.key,y.props,null,u.mode,_),fa(_,y),_.return=u,u=_)}return r(u);case kl:t:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(u,v.sibling),_=s(v,y.children||[]),_.return=u,u=_;break t}else{n(u,v);break}else t(u,v);v=v.sibling}_=Ip(y,u.mode,_),_.return=u,u=_}return r(u);case ma:return y=ar(y),m(u,v,y,_)}if(Xl(y))return g(u,v,y,_);if(zl(y)){if(T=zl(y),typeof T!="function")throw Error(K(150));return y=T.call(y),x(u,v,y,_)}if(typeof y.then=="function")return m(u,v,Bu(y),_);if(y.$$typeof===ms)return m(u,v,zu(u,y),_);Fu(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(n(u,v.sibling),_=s(v,y),_.return=u,u=_):(n(u,v),_=Op(y,u.mode,_),_.return=u,u=_),r(u)):n(u,v)}return function(u,v,y,_){try{dc=0;var T=m(u,v,y,_);return Mo=null,T}catch(C){if(C===ko||C===jh)throw C;var w=ni(29,C,null,u.mode);return w.lanes=_,w.return=u,w}finally{}}}var _r=Qx(!0),jx=Qx(!1),ga=!1;function Rg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(fe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Sh(e),kx(e,null,n),t}return Kh(e,i,t,n),Sh(e)}function jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,mx(e,n)}}function zp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bm=!1;function $l(){if(bm){var e=So;if(e!==null)throw e}}function tc(e,t,n,i){bm=!1;var s=e.updateQueue;ga=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(re&f)===f:(i&f)===f){f!==0&&f===vr&&(bm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,f);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break t;d=Re({},d,f);break t;case 2:ga=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Ba|=r,e.lanes=r,e.memoizedState=d}}function $x(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function t1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$x(n[e],t)}var Pa=Ms(null),Ah=Ms(0);function Q_(e,t){e=Xs,Le(Ah,e),Le(Pa,t),Xs=e|t.baseLanes}function Em(){Le(Ah,Xs),Le(Pa,Pa.current)}function Cg(){Xs=Ah.current,xn(Pa),xn(Ah)}var bn=Ms(null),Un=null;function Ra(e){var t=e.alternate;Le(Sn,Sn.current&1),Le(bn,e),Un===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(Un=e)}function Tm(e){Le(Sn,Sn.current),Le(bn,e),Un===null&&(Un=e)}function e1(e){e.tag===22?(Le(Sn,Sn.current),Le(bn,e),Un===null&&(Un=e)):Ca()}function Ca(){Le(Sn,Sn.current),Le(bn,bn.current)}function gi(e){xn(bn),Un===e&&(Un=null),xn(Sn)}var Sn=Ms(0);function pc(e,t){Le(bn,bn.current),Le(Sn,t)}function Dg(e){xn(Sn),xn(bn),Un===e&&(Un=null)}function wh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ag(n)||i0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vs=0,Zt=null,Ee=null,Ke=null,Rh=!1,bo=!1,yr=!1,Ch=0,mc=0,Eo=null,AA=0;function Ye(){throw Error(K(321))}function Ng(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bi(e[n],t[n]))return!1;return!0}function Ug(e,t,n,i,s,a){return Vs=a,Zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?U1:L1,yr=!1,a=n(i,s),yr=!1,bo&&(a=i1(t,n,i,s)),n1(e),a}function n1(e){Gt.H=Dh;var t=Ee!==null&&Ee.next!==null;if(Vs=0,Ke=Ee=Zt=null,Rh=!1,mc=0,Eo=null,t)throw Error(K(300));e===null||je||(e=e.dependencies,e!==null&&Eh(e)&&(je=!0))}function i1(e,t,n,i){Zt=e;var s=0;do{if(bo&&(Eo=null),mc=0,bo=!1,25<=s)throw Error(K(301));if(s+=1,Ke=Ee=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Gt.H=OA,a=t(n,i)}while(bo);return a}function wA(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?Dc(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(Zt.flags|=1024),t}function Lg(){var e=Ch!==0;return Ch=0,e}function Og(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ig(e){if(Rh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Rh=!1}Vs=0,Ke=Ee=Zt=null,bo=!1,mc=Ch=0,Eo=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Zt.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Je(){if(Ee===null){var e=Zt.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ke===null?Zt.memoizedState:Ke.next;if(t!==null)Ke=t,Ee=e;else{if(e===null)throw Zt.alternate===null?Error(K(467)):Error(K(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ke===null?Zt.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function $h(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dc(e){var t=mc;return mc+=1,Eo===null&&(Eo=[]),e=Kx(Eo,e,t),t=Zt,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?U1:L1),e}function tf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dc(e);if(e.$$typeof===lT)return;if(e.$$typeof===ms)return yn(e)}throw Error(K(438,String(e)))}function Pg(e){var t=null,n=Zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=$h(),Zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=oT;return t.index++,n}function Gs(e,t){return typeof t=="function"?t(e):t}function ih(e){var t=Je();return zg(t,Ee,e)}function zg(e,t,n){var i=e.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(re&d)===d:(Vs&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===vr&&(h=!0);else if((Vs&f)===f){c=c.next,f===vr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Zt.lanes|=f,Ba|=f;d=c.action,yr&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Zt.lanes|=d,Ba|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!bi(a,e.memoizedState)&&(je=!0,h&&(n=So,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Bp(e){var t=Je(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);bi(a,t.memoizedState)||(je=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function s1(e,t,n){var i=Zt,s=Je(),a=ee;if(a){if(n===void 0)throw Error(K(407));n=n()}else n=t();var r=!bi((Ee||s).memoizedState,n);if(r&&(s.memoizedState=n,je=!0),s=s.queue,Bg(o1.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Ke!==null&&(Ke.memoizedState.tag&1)!==0,No(e?9:8,{destroy:void 0},r1.bind(null,i,s,n,t),null),e){if(i.flags|=2048,we===null)throw Error(K(349));a||(Vs&127)!==0||a1(i,t,n)}return n}function a1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Zt.updateQueue,t===null?(t=$h(),Zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function r1(e,t,n,i){t.value=n,t.getSnapshot=i,l1(t)&&c1(e)}function o1(e,t,n){return n(function(){l1(t)&&c1(e)})}function l1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bi(e,n)}catch{return!0}}function c1(e){var t=Tr(e,2);t!==null&&ii(t,e,2)}function Am(e){var t=qn();if(typeof e=="function"){var n=e;if(e=n(),yr){_a(!0);try{n()}finally{_a(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:e},t}function u1(e,t,n,i){return e.baseState=n,zg(e,Ee,typeof i=="function"?i:Gs)}function RA(e,t,n,i,s){if(nf(e))throw Error(K(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Gt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,h1(t,a)):(a.next=n.next,t.pending=n.next=a)}}function h1(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Gt.T,r={};r.types=a!==null?a.types:null,Gt.T=r;try{var o=n(s,i),l=Gt.S;l!==null&&l(r,o),j_(e,t,o)}catch(c){wm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Gt.T=a}}else try{a=n(s,i),j_(e,t,a)}catch(c){wm(e,t,c)}}function j_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){$_(e,t,i)},function(i){return wm(e,t,i)}):$_(e,t,n)}function $_(e,t,n){t.status="fulfilled",t.value=n,f1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,h1(e,n)))}function wm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,f1(t),t=t.next;while(t!==i)}e.action=null}function f1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function d1(e,t){return t}function ty(e,t){if(ee){var n=we.formState;if(n!==null){t:{var i=Zt;if(ee){if(Ue){e:{for(var s=Ue,a=Bi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Fi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ue=Fi(s.nextSibling),i=s.data==="F!";break t}}Ia(i)}i=!1}i&&(t=n[0])}}return n=qn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:d1,lastRenderedState:t},n.queue=i,n=C1.bind(null,Zt,i),i.dispatch=n,i=Am(!1),a=Gg.bind(null,Zt,!1,i.queue),i=qn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=RA.bind(null,Zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function ey(e){var t=Je();return p1(t,Ee,e)}function p1(e,t,n){if(t=zg(e,t,d1)[0],e=ih(Gs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Dc(t)}catch(r){throw r===ko?jh:r}else i=t;t=Je();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Zt.flags|=2048,No(9,{destroy:void 0},CA.bind(null,s,n),null)),[i,a,e]}function CA(e,t){e.action=t}function ny(e){var t=Je(),n=Ee;if(n!==null)return p1(t,n,e);Je(),t=t.memoizedState,n=Je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function No(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Zt.updateQueue,t===null&&(t=$h(),Zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function m1(){return Je().memoizedState}function sh(e,t,n,i){var s=qn();Zt.flags|=e,s.memoizedState=No(1|t,{destroy:void 0},n,i===void 0?null:i)}function ef(e,t,n,i){var s=Je();i=i===void 0?null:i;var a=s.memoizedState.inst;Ee!==null&&i!==null&&Ng(i,Ee.memoizedState.deps)?s.memoizedState=No(t,a,n,i):(Zt.flags|=e,s.memoizedState=No(1|t,a,n,i))}function iy(e,t){sh(8390656,8,e,t)}function Bg(e,t){ef(2048,8,e,t)}function DA(e){Zt.flags|=4;var t=Zt.updateQueue;if(t===null)t=$h(),Zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function g1(e){var t=Je().memoizedState;return DA({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(K(440));return t.impl.apply(void 0,arguments)}}function v1(e,t){return ef(4,2,e,t)}function _1(e,t){return ef(4,4,e,t)}function y1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function x1(e,t,n){n=n!=null?n.concat([e]):null,ef(4,4,y1.bind(null,t,e),n)}function Fg(){}function S1(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Ng(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function M1(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Ng(t,i[1]))return i[0];if(i=e(),yr){_a(!0);try{e()}finally{_a(!1)}}return n.memoizedState=[i,t],i}function Hg(e,t,n){return n===void 0||(Vs&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=pS(),Zt.lanes|=e,Ba|=e,n)}function b1(e,t,n,i){return bi(n,t)?n:Pa.current!==null?(e=Hg(e,n,i),bi(e,t)||(je=!0),e):(Vs&106)===0||(Vs&1073741824)!==0&&(re&261930)===0?(je=!0,e.memoizedState=n):(e=pS(),Zt.lanes|=e,Ba|=e,t)}function E1(e,t,n,i,s){var a=de.p;de.p=a!==0&&8>a?a:8;var r=Gt.T,o={};o.types=r!==null?r.types:null,Gt.T=o,Gg(e,!1,t,n);try{var l=s(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=TA(l,i);ec(e,t,h,Mi(e))}else ec(e,t,i,Mi(e))}catch(d){ec(e,t,{then:function(){},status:"rejected",reason:d},Mi())}finally{de.p=a,r!==null&&o.types!==null&&(r.types=o.types),Gt.T=r}}function NA(){}function Rm(e,t,n,i){if(e.tag!==5)throw Error(K(476));var s=T1(e).queue;E1(e,s,t,cr,n===null?NA:function(){return A1(e),n(i)})}function T1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:cr,baseState:cr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:cr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function A1(e){var t=T1(e);t.next===null&&(t=e.alternate.memoizedState),ec(e,t.next.queue,{},Mi())}function Vg(){return yn(Bo)}function w1(){return Je().memoizedState}function R1(){return Je().memoizedState}function UA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Mi();e=Aa(n);var i=wa(t,e,n);i!==null&&(ii(i,t,n),jl(i,t,n)),t={cache:Tg()},e.payload=t;return}t=t.return}}function LA(e,t,n){var i=Mi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},nf(e)?D1(t,n):(n=Mg(e,t,n,i),n!==null&&(ii(n,e,i),N1(n,t,i)))}function C1(e,t,n){var i=Mi();ec(e,t,n,i)}function ec(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(nf(e))D1(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,bi(o,r))return Kh(e,t,s,0),we===null&&Jh(),!1}catch{}finally{}if(n=Mg(e,t,s,i),n!==null)return ii(n,e,i),N1(n,t,i),!0}return!1}function Gg(e,t,n,i){if(i={lane:2,revertLane:$g(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},nf(e)){if(t)throw Error(K(479))}else t=Mg(e,n,i,2),t!==null&&ii(t,e,2)}function nf(e){var t=e.alternate;return e===Zt||t!==null&&t===Zt}function D1(e,t){bo=Rh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function N1(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,mx(e,n)}}var Dh={readContext:yn,use:tf,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye,useEffectEvent:Ye},U1={readContext:yn,use:tf,useCallback:function(e,t){return qn().memoizedState=[e,t===void 0?null:t],e},useContext:yn,useEffect:iy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,sh(4194308,4,y1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sh(4194308,4,e,t)},useInsertionEffect:function(e,t){sh(4,2,e,t)},useMemo:function(e,t){var n=qn();t=t===void 0?null:t;var i=e();if(yr){_a(!0);try{e()}finally{_a(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=qn();if(n!==void 0){var s=n(t);if(yr){_a(!0);try{n(t)}finally{_a(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=LA.bind(null,Zt,e),[i.memoizedState,e]},useRef:function(e){var t=qn();return e={current:e},t.memoizedState=e},useState:function(e){e=Am(e);var t=e.queue,n=C1.bind(null,Zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fg,useDeferredValue:function(e,t){var n=qn();return Hg(n,e,t)},useTransition:function(){var e=Am(!1);return e=E1.bind(null,Zt,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Zt,s=qn();if(ee){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),we===null)throw Error(K(349));(re&127)!==0||a1(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,iy(o1.bind(null,i,a,e),[e]),i.flags|=2048,No(9,{destroy:void 0},r1.bind(null,i,a,n,t),null),n},useId:function(){var e=qn(),t=we.identifierPrefix;if(ee){var n=_s,i=vs;n=(i&~(1<<32-Si(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ch++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=AA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vg,useFormState:ty,useActionState:ty,useOptimistic:function(e){var t=qn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Gg.bind(null,Zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Pg,useCacheRefresh:function(){return qn().memoizedState=UA.bind(null,Zt)},useEffectEvent:function(e){var t=qn(),n={impl:e};return t.memoizedState=n,function(){if((fe&2)!==0)throw Error(K(440));return n.impl.apply(void 0,arguments)}}},L1={readContext:yn,use:tf,useCallback:S1,useContext:yn,useEffect:Bg,useImperativeHandle:x1,useInsertionEffect:v1,useLayoutEffect:_1,useMemo:M1,useReducer:ih,useRef:m1,useState:function(){return ih(Gs)},useDebugValue:Fg,useDeferredValue:function(e,t){var n=Je();return b1(n,Ee.memoizedState,e,t)},useTransition:function(){var e=ih(Gs)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Dc(e),t]},useSyncExternalStore:s1,useId:w1,useHostTransitionStatus:Vg,useFormState:ey,useActionState:ey,useOptimistic:function(e,t){var n=Je();return u1(n,Ee,e,t)},useMemoCache:Pg,useCacheRefresh:R1,useEffectEvent:g1},OA={readContext:yn,use:tf,useCallback:S1,useContext:yn,useEffect:Bg,useImperativeHandle:x1,useInsertionEffect:v1,useLayoutEffect:_1,useMemo:M1,useReducer:Bp,useRef:m1,useState:function(){return Bp(Gs)},useDebugValue:Fg,useDeferredValue:function(e,t){var n=Je();return Ee===null?Hg(n,e,t):b1(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Bp(Gs)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Dc(e),t]},useSyncExternalStore:s1,useId:w1,useHostTransitionStatus:Vg,useFormState:ny,useActionState:ny,useOptimistic:function(e,t){var n=Je();return Ee!==null?u1(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Pg,useCacheRefresh:R1,useEffectEvent:g1};function Fp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Mi(),s=Aa(i);s.payload=t,n!=null&&(s.callback=n),t=wa(e,s,i),t!==null&&(ii(t,e,i),jl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Mi(),s=Aa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=wa(e,s,i),t!==null&&(ii(t,e,i),jl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mi(),i=Aa(n);i.tag=2,t!=null&&(i.callback=t),t=wa(e,i,n),t!==null&&(ii(t,e,n),jl(t,e,n))}};function sy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!uc(n,i)||!uc(s,a):!0}function ay(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Cm.enqueueReplaceState(t,t.state,null)}function xr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Re({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function O1(e){xh(e)}function I1(e){console.error(e)}function P1(e){xh(e)}function Nh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ry(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Dm(e,t,n){return n=Aa(n),n.tag=3,n.payload={element:null},n.callback=function(){Nh(e,t)},n}function z1(e){return e=Aa(e),e.tag=3,e}function B1(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){ry(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ry(t,n,i),typeof s!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function IA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&mr(t,n,s,!0),n=bn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Un===null?Fh():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Th?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),qp(e,i,s)),!1;case 22:return n.flags|=65536,i===Th?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),qp(e,i,s)),!1}throw Error(K(435,n.tag))}return qp(e,i,s),Fh(),!1}if(ee)return t=bn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==_m&&(e=Error(K(422),{cause:i}),fc(zi(e,n)))):(i!==_m&&(t=Error(K(423),{cause:i}),fc(zi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=zi(i,n),s=Dm(e.stateNode,i,s),zp(e,s),Ze!==4&&(Ze=2)),!1;var a=Error(K(520),{cause:i});if(a=zi(a,n),ac===null?ac=[a]:ac.push(a),Ze!==4&&(Ze=2),t===null)return!0;i=zi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Dm(n.stateNode,i,e),zp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Da===null||!Da.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=z1(s),B1(s,e,n,i),zp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var kg=Error(K(461)),je=!1;function en(e,t,n,i){t.child=e===null?jx(t,null,n,i):_r(t,e.child,n,i)}function oy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return gr(t),i=Ug(e,t,n,r,a,s),o=Lg(),e!==null&&!je?(Og(e,t,s),ks(e,t,s)):(ee&&o&&Qh(t),t.flags|=1,en(e,t,i,s),t.child)}function ly(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!bg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,F1(e,t,a,i,s)):(e=th(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Wg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:uc,n(r,i)&&e.ref===t.ref)return ks(e,t,s)}return t.flags|=1,e=zs(a,i),e.ref=t.ref,e.return=t,t.child=e}function F1(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(uc(a,i)&&e.ref===t.ref)if(je=!1,t.pendingProps=i=a,Wg(e,s))(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,ks(e,t,s)}return Nm(e,t,n,i,s)}function H1(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return cy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&nh(t,a!==null?a.cachePool:null),a!==null?Q_(t,a):Em(),e1(t);else return i=t.lanes=536870912,cy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(nh(t,a.cachePool),Q_(t,a),Ca(),t.memoizedState=null):(e!==null&&nh(t,null),Em(),Ca());return en(e,t,s,n),t.child}function nc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cy(e,t,n,i,s){var a=Ag();return a=a===null?null:{parent:Qe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&nh(t,null),Em(),e1(t),e!==null&&mr(e,t,i,!0),t.childLanes=s,null}function ah(e,t){return t=sf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uy(e,t,n){return _r(t,e.child,null,n),e=ah(t,t.pendingProps),e.flags|=2,gi(t),t.memoizedState=null,e}function PA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(i.mode==="hidden")return e=ah(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},nc(null,e);if(Tm(t),(e=Ue)?(e=HS(e,Bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:vs,overflow:_s}:null,retryLane:536870912,hydrationErrors:null},n=Wx(e),n.return=t,t.child=n,fn=t,Ue=null)):e=null,e===null)throw Ia(t);return t.lanes=536870912,null}return ah(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Tm(t),s)if(t.flags&256)t.flags&=-257,t=uy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(K(558));else if(je||mr(e,t,n,!1),s=(n&e.childLanes)!==0,je||s){if(Pa.current===null){if(i=we,i!==null&&(r=gx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Tr(e,r),ii(i,e,r),kg;Fh()}t=uy(e,t,n)}else e=a.treeContext,Ue=Fi(r.nextSibling),fn=t,ee=!0,Ta=null,Bi=!1,e!==null&&Yx(t,e),t=ah(t,i),t.flags|=134221824;return t}return e=zs(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function no(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Nm(e,t,n,i,s){return gr(t),n=Ug(e,t,n,i,void 0,s),i=Lg(),e!==null&&!je?(Og(e,t,s),ks(e,t,s)):(ee&&i&&Qh(t),t.flags|=1,en(e,t,n,s),t.child)}function hy(e,t,n,i,s,a){return gr(t),t.updateQueue=null,n=i1(t,i,n,s),n1(e),i=Lg(),e!==null&&!je?(Og(e,t,a),ks(e,t,a)):(ee&&i&&Qh(t),t.flags|=1,en(e,t,n,a),t.child)}function fy(e,t,n,i,s){if(gr(t),t.stateNode===null){var a=po,r=n.contextType;typeof r=="object"&&r!==null&&(a=yn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Cm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Rg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?yn(r):po,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Fp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Cm.enqueueReplaceState(a,a.state,null),tc(t,i,a,s),$l(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=xr(n,o);a.props=l;var c=a.context,h=n.contextType;r=po,typeof h=="object"&&h!==null&&(r=yn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&ay(t,a,i,r),ga=!1;var f=t.memoizedState;a.state=f,tc(t,i,a,s),$l(),c=t.memoizedState,o||f!==c||ga?(typeof d=="function"&&(Fp(t,n,d,i),c=t.memoizedState),(l=ga||sy(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Mm(e,t),r=t.memoizedProps,h=xr(n,r),a.props=h,d=t.pendingProps,f=a.context,c=n.contextType,l=po,typeof c=="object"&&c!==null&&(l=yn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&ay(t,a,i,l),ga=!1,f=t.memoizedState,a.state=f,tc(t,i,a,s),$l();var p=t.memoizedState;r!==d||f!==p||ga||e!==null&&e.dependencies!==null&&Eh(e.dependencies)?(typeof o=="function"&&(Fp(t,n,o,i),p=t.memoizedState),(h=ga||sy(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&Eh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,no(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=_r(t,e.child,null,s),t.child=_r(t,null,n,s)):en(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ks(e,t,s),e}function dy(e,t,n,i){return pr(),t.flags|=256,en(e,t,n,i),t.child}var Um={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lm(e){return{baseLanes:e,cachePool:Jx()}}function Om(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=_i),e}function V1(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Sn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(s?Ra(t):Ca(),(e=Ue)?(e=HS(e,Bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:vs,overflow:_s}:null,retryLane:536870912,hydrationErrors:null},n=Wx(e),n.return=t,t.child=n,fn=t,Ue=null)):e=null,e===null)throw Ia(t);return i0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(Ca(),s=t.mode,a=sf({mode:"hidden",children:a},s),i=ur(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Lm(n),i.childLanes=Om(e,r,n),t.memoizedState=Um,nc(null,i)):(Ra(t),Xg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return zA(e,t,a,r,i,l,o,n)}return s?(Ca(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=zs(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=zs(l,s):(s=ur(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,nc(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Lm(n):(a=s.cachePool,a!==null?(o=Qe._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Jx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Om(e,r,n),t.memoizedState=Um,nc(e.child,i)):(Ra(t),n=e.child,e=n.sibling,n=zs(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xg(e,t){return t=sf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function sf(e,t){return e=ni(22,e,null,t),e.lanes=0,e}function Hu(e,t,n){return _r(t,e.child,null,n),e=Xg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Ra(t),t.flags&=-257,Hu(e,t,o)):t.memoizedState!==null?(Ca(),t.child=e.child,t.flags|=128,null):(Ca(),a=s.fallback,r=t.mode,s=sf({mode:"visible",children:s.children},r),a=ur(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,_r(t,e.child,null,o),s=t.child,s.memoizedState=Lm(o),s.childLanes=Om(e,i,o),t.memoizedState=Um,nc(null,s));if(Ra(t),i0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(K(419)),s.stack="",s.digest=i,fc({value:s,source:null,stack:null})),Hu(e,t,o)}if(je||mr(e,t,o,!1),i=(o&e.childLanes)!==0,je||i){if(Pa.current!==null)return Hu(e,t,o);if(i=we,i!==null&&(s=gx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Tr(e,s),ii(i,e,s),kg;return ag(a)||Fh(),Hu(e,t,o)}return ag(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ue=Fi(a.nextSibling),fn=t,ee=!0,Ta=null,Bi=!1,e!==null&&Yx(t,e),t=Xg(t,s.children),t.flags|=134221824,t)}function py(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),eh(e.return,t,n)}function my(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&wh(n)===null&&(t=e),e=e.sibling}return t}function Vu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Hp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Im(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Sn.current;if(t.flags&128)return pc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,pc(t,r),s==="backwards"&&e!==null?(Hp(e),en(e,t,i,n),Hp(e)):en(e,t,i,n),i=ee?hc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&py(e,n,t);else if(e.tag===19)py(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=my(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Hp(t)),Vu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&wh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Vu(t,!0,n,null,a,i);break;case"together":Vu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=my(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Vu(t,!1,s,n,a,i)}return t.child}function gy(e,t,n){var i=t.pendingProps;return xa(t,t.type,i.value),en(e,t,i.children,n),t.child}function ks(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ba|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(mr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=zs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Eh(e)))}function BA(e,t,n){switch(t.tag){case 3:gh(t,t.stateNode.containerInfo),xa(t,Qe,e.memoizedState.cache),pr();break;case 27:case 5:lm(t);break;case 4:gh(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ra(t),t.flags|=128,null;i=mr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?V1(e,t,n):(Ra(t),e=ks(e,t,n),e!==null?e.sibling:null)}Ra(t);break;case 19:if(t.flags&128)return Im(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(mr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Im(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),pc(t,Sn.current),i)break;return null;case 22:return t.lanes=0,H1(e,t,n,t.pendingProps);case 24:xa(t,Qe,e.memoizedState.cache)}return ks(e,t,n)}function G1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)je=!0;else{if(!Wg(e,n)&&(t.flags&128)===0)return je=!1,BA(e,t,n);je=(e.flags&131072)!==0}else je=!1,ee&&(t.flags&1048576)!==0&&qx(t,hc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ar(t.elementType),t.type=e,typeof e=="function")bg(e)?(i=xr(e,i),t.tag=1,t=fy(null,t,e,i,n)):(t.tag=0,t=Nm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===ug){t.tag=11,t=oy(null,t,e,i,n);break t}else if(s===hg){t.tag=14,t=ly(null,t,e,i,n);break t}else if(s===ms){t.tag=10,t.type=e,t=gy(null,t,n);break t}}throw t=rm(e)||e,Error(K(306,t,""))}}return t;case 0:return Nm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=xr(i,t.pendingProps),fy(e,t,i,s,n);case 3:t:{if(gh(t,t.stateNode.containerInfo),e===null)throw Error(K(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Mm(e,t),tc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,xa(t,Qe,i),i!==a.cache&&xm(t,[Qe],n,!0),$l(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=dy(e,t,i,n);break t}else if(i!==s){s=zi(Error(K(424)),t),fc(s),t=dy(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Fi(e.firstChild),fn=t,ee=!0,Ta=null,Bi=!0,n=jx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(pr(),i===s){t=ks(e,t,n);break t}en(e,t,i,n)}t=t.child}return t;case 26:return no(e,t),e===null?(n=ky(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(t.stateNode=NS(t.type,t.pendingProps,Ea.current,t)):t.memoizedState=ky(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lm(t),e===null&&ee&&(i=t.stateNode=VS(t.type,t.pendingProps,Ea.current),fn=t,Bi=!0,s=Ue,Ha(t.type)?(rg=s,Ue=Fi(i.firstChild)):Ue=s),en(e,t,t.pendingProps.children,n),no(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((s=i=Ue)&&(i=Dw(i,t.type,t.pendingProps,Bi),i!==null?(t.stateNode=i,fn=t,Ue=Fi(i.firstChild),Bi=!1,s=!0):s=!1),s||Ia(t)),lm(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,ng(s,a)?i=null:r!==null&&ng(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Ug(e,t,wA,null,null,n),Bo._currentValue=s),no(e,t),en(e,t,i,n),t.child;case 6:return e===null&&ee&&((e=n=Ue)&&(n=Nw(n,t.pendingProps,Bi),n!==null?(t.stateNode=n,fn=t,Ue=null,e=!0):e=!1),e||Ia(t)),null;case 13:return V1(e,t,n);case 4:return gh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_r(t,null,i,n):en(e,t,i,n),t.child;case 11:return oy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,no(e,t),en(e,t,i,n),t.child;case 8:return en(e,t,t.pendingProps.children,n),t.child;case 12:return en(e,t,t.pendingProps.children,n),t.child;case 10:return gy(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,gr(t),s=yn(s),i=i(s),t.flags|=1,en(e,t,i,n),t.child;case 14:return ly(e,t,t.type,t.pendingProps,n);case 15:return F1(e,t,t.type,t.pendingProps,n);case 19:return Im(e,t,n);case 31:return PA(e,t,n);case 22:return H1(e,t,n,t.pendingProps);case 24:return gr(t),i=yn(Qe),e===null?(s=Ag(),s===null&&(s=we,a=Tg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Rg(t),xa(t,Qe,s)):((e.lanes&n)!==0&&(Mm(e,t),tc(t,null,null,n),$l()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),xa(t,Qe,i)):(i=a.cache,xa(t,Qe,i),i!==s.cache&&xm(t,[Qe],n,!0))),en(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:ee&&Qh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:no(e,t),en(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}function Os(e){e.flags|=4}function Vp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?qy(t,i):qy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(vS())e.flags|=8192;else throw fr=Th,wg}else e.flags&=-16777217}function vy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!WS(t))if(vS())e.flags|=8192;else throw fr=Th,wg}function Gu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?dx():536870912,e.lanes|=t,Uo|=t)}function Fl(e,t){if(!ee)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function FA(e,t,n){var i=t.pendingProps;switch(Eg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Bs(Qe),Ro(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(to(t)?Os(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pp())),Ne(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Os(t),a!==null?(Ne(t),vy(t,a)):(Ne(t),Vp(t,s,null,i,n))):a?a!==e.memoizedState?(Os(t),Ne(t),vy(t,a)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Os(t),Ne(t),Vp(t,s,e,i,n)),null;case 27:if(vh(t),n=Ea.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Os(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Ne(t),t.subtreeFlags&=-33554433,null}e=ys.current,to(t)?X_(t,e):(e=VS(s,i,n),t.stateNode=e,Os(t))}return Ne(t),t.subtreeFlags&=-33554433,null;case 5:if(vh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Os(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Ne(t),t.subtreeFlags&=-33554433,null}if(a=ys.current,to(t))X_(t,a);else{var r=_c(Ea.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[_n]=t,a[ai]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Mn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Os(t)}}return Ne(t),t.subtreeFlags&=-33554433,Vp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Os(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(K(166));if(e=Ea.current,to(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=fn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[_n]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||CS(e.nodeValue,n)),e||Ia(t,!0)}else e=_c(e).createTextNode(i),e[_n]=t,t.stateNode=e}return Ne(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=to(t),n!==null){if(e===null){if(!i)throw Error(K(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(557));e[_n]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else n=Pp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(gi(t),t):(gi(t),null);if((t.flags&128)!==0)throw Error(K(558))}return Ne(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=to(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(K(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[_n]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else s=Pp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(gi(t),t):(gi(t),null)}return gi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Gu(t,t.updateQueue),Ne(t),null);case 4:return Ro(),e===null&&t0(t.stateNode.containerInfo),t.flags|=67108864,Ne(t),null;case 10:return Bs(t.type),Ne(t),null;case 19:if(Dg(t),i=t.memoizedState,i===null)return Ne(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Fl(i,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=wh(e),a!==null){for(t.flags|=128,Fl(i,!1),e=a.updateQueue,t.updateQueue=e,Gu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Xx(n,e),n=n.sibling;return pc(t,Sn.current&1|2),ee&&Is(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&yi()>zh&&(t.flags|=128,s=!0,Fl(i,!1),t.lanes=4194304)}else{if(!s)if(e=wh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Gu(t,e),Fl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!ee)return Ne(t),null}else 2*yi()-i.renderingStartTime>zh&&n!==536870912&&(t.flags|=128,s=!0,Fl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=yi(),e.sibling=null,a=Sn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||ee?pc(t,a):(n=a,Le(bn,t),Le(Sn,n),Un===null&&(Un=t)),ee&&Is(t,i.treeForkCount),e}return Ne(t),null;case 22:case 23:return gi(t),Cg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),n=t.updateQueue,n!==null&&Gu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&xn(hr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bs(Qe),Ne(t),null;case 25:return null;case 30:return t.flags|=33554432,Ne(t),null}throw Error(K(156,t.tag))}function HA(e,t){switch(Eg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bs(Qe),Ro(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return vh(t),null;case 31:if(t.memoizedState!==null){if(gi(t),t.alternate===null)throw Error(K(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(gi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Dg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ro(),null;case 10:return Bs(t.type),null;case 22:case 23:return gi(t),Cg(),e!==null&&xn(hr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bs(Qe),null;case 25:return null;default:return null}}function k1(e,t){switch(Eg(t),t.tag){case 3:Bs(Qe),Ro();break;case 26:case 27:case 5:vh(t);break;case 4:Ro();break;case 31:t.memoizedState!==null&&gi(t);break;case 13:gi(t);break;case 19:Dg(t);break;case 10:Bs(t.type);break;case 22:case 23:gi(t),Cg(),e!==null&&xn(hr);break;case 24:Bs(Qe)}}function Nc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){_e(t,t.return,o)}}function za(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){_e(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){_e(t,t.return,h)}}function X1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{t1(t,n)}catch(i){_e(e,e.return,i)}}}function W1(e,t,n){n.props=xr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){_e(e,t,i)}}function ds(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Hs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=IS(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new Ei(e);si(e.child,!1,Rw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){_e(e,t,o)}}function vn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){_e(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){_e(e,t,s)}else n.current=null}function Uh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)FS(e.stateNode,t[n])}function _y(e){for(var t=e.return;t!==null&&(Yg(t)&&FS(e.stateNode,t.stateNode),!qg(t));)t=t.return}function ic(e){for(var t=e.return;t!==null&&(Yg(t)&&Cw(e.stateNode,t.stateNode),!qg(t));)t=t.return}function qg(e){return e.tag===5||e.tag===3||e.tag===27}function Yg(e){return e&&e.tag===7&&e.stateNode!==null}function Pm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){_e(e,e.return,s)}}function Gp(e,t,n){try{var i=e.stateNode;uw(i,e.type,n,t),i[ai]=t}catch(s){_e(e,e.return,s)}}function q1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function kp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||q1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gs)),Uh(e,i),he=!0;else if(s!==4&&(s===27&&(Uh(e,i),i=null,Ha(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zm(e,t,n,i),e=e.sibling;e!==null;)zm(e,t,n,i),e=e.sibling}function Lh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Uh(e,i),he=!0;else if(s!==4&&(s===27&&(Uh(e,i),i=null,Ha(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Lh(e,t,n,i),e=e.sibling;e!==null;)Lh(e,t,n,i),e=e.sibling}function Y1(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Mn(t,i,n),t[_n]=e,t[ai]=n}catch(a){_e(e,e.return,a)}}var Oh=!1,vi=null;function yy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Oh=!0)}var ps=null;function xy(){var e=ps;return ps=null,e}var ei=0;function Xo(e,t,n,i,s){return ei=0,Z1(e.child,t,n,i,s)}function Z1(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=ig(r);i.push(o),o.view&&(a=!0)}else a||ig(r).view&&(a=!0);Oh=!0,US(r,ei===0?t:t+"_"+ei,n),ei++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||Z1(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function Ss(e,t){for(;e!==null;)e.tag===5?LS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ss(e.child,t)),e=e.sibling}function rh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(rh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(K(544));var n=t.name;t=qs(t.default,t.share),t!=="none"&&(Xo(e,n,t,null,!1)||Ss(e.child,!1))}e=e.sibling}}function Bm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Hs(i,n),a=qs(i.default,n.paired?i.share:i.enter);a!=="none"?Xo(e,s,a,null,!1)?(rh(e),n.paired||t||Lo(e,i.onEnter)):Ss(e.child,!1):rh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bm(e,t),e=e.sibling;else rh(e)}function Fm(e){if(vi!==null&&vi.size!==0){var t=vi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=qs(n.default,n.share);if(a!=="none"&&(Xo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Lo(e,n.onShare)):Ss(e.child,!1)),t.delete(i),t.size===0)break}}}Fm(e)}e=e.sibling}}}function Hm(e){if(e.tag===30){var t=e.memoizedProps,n=Hs(t,e.stateNode),i=vi!==null?vi.get(n):void 0,s=qs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Xo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,vi.delete(n),Lo(e,t.onShare)):Lo(e,t.onExit):Ss(e.child,!1)),vi!==null&&Fm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hm(e),e=e.sibling;else vi!==null&&Fm(e)}function J1(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Hs(t,e.stateNode);t=qs(t.default,t.update),e.flags&=-5,t!=="none"&&Xo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&J1(e);e=e.sibling}}function Vm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ss(e.child,!1))}Vm(e)}e=e.sibling}}function oh(e){if(e.tag===30)e.stateNode.paired=null,Ss(e.child,!1),Vm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)oh(e),e=e.sibling;else Vm(e)}function K1(e){for(e=e.child;e!==null;)e.tag===30?Ss(e.child,!1):(e.subtreeFlags&33554432)!==0&&K1(e),e=e.sibling}function Zg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&ei<a.length){var c=a[ei],h=ig(l);(c.view||h.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(h.clip)d=!0;else{d=c.rect;var f=h.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}d&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&US(l,ei===0?n:n+"_"+ei,s),o&&(e.flags&4)!==0||(ps===null&&(ps=[]),ps.push(l,ei===0?i:i+"_"+ei,t.memoizedProps)),ei++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Zg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function Q1(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Hs(n,i),a=qs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(gw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;ei=0,s=Zg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Lo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&Q1(e,t);e=e.sibling}}var cn=!1,me=!1,us=!1,Xp=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,un=null,hs=!1,Yl=!1,Ih=!1,Gm=!1;function VA(e,t,n){if(e=e.containerInfo,tg=Fo,e=Px(e),xg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,d=0,f=e,p=null;e:for(;;){for(var g;f!==i||a!==0&&f.nodeType!==3||(l=o+a),f!==r||s!==0&&f.nodeType!==3||(c=o+s),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break e;if(p===i&&++h===a&&(l=o),p===r&&++d===s&&(c=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(eg={focusedElem:e,selectionRange:i},Fo=!1,n=(n&335544064)===n,un=t,t=n?9270:1024;un!==null;){if(e=un,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Hm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&yy(e),ku(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Hm(i),ku(n);continue}else if(i!==null&&i.memoizedState!==null){n&&yy(e),ku(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,un=i):(n&&J1(e),ku(n))}}vi=null}function ku(e){for(;un!==null;){var t=un,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=xr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){_e(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)sg(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":sg(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Hs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=qs(s.default,s.update),s!=="none"&&Xo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(K(163))}if(i=t.sibling,i!==null){i.return=t.return,un=i;break}un=t.return}}function j1(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fs(e,n),i&4&&Nc(5,n);break;case 1:if(fs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){_e(n,n.return,r)}else{var s=xr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){_e(n,n.return,r)}}i&64&&X1(n),i&512&&ds(n,n.return);break;case 3:if(fs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{t1(e,t)}catch(r){_e(n,n.return,r)}}break;case 27:t===null&&i&4&&Y1(n);case 26:case 5:fs(e,n),t===null&&i&4&&Pm(n),i&512&&ds(n,n.return);break;case 12:fs(e,n);break;case 31:fs(e,n),i&4&&nS(e,n);break;case 13:fs(e,n),i&4&&iS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=$A.bind(null,n),Uw(e,n))));break;case 22:if(i=n.memoizedState!==null||cn,!i){var a=t!==null&&t.memoizedState!==null||me;t=cn,s=me,cn=i,(me=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Yi(e,n,i)):fs(e,n),cn=t,me=s}break;case 30:fs(e,n),i&512&&ds(n,n.return);break;case 7:i&512&&ds(n,n.return);default:fs(e,n)}}function km(e,t){for(e=e.child;e!==null;)$1(e,t),e=e.sibling}function $1(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){_e(e,e.return,l)}Xm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,he=!0}catch(l){_e(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?zy(o,!0):zy(e.stateNode,!1)}catch(l){_e(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&km(e,t);break;default:km(e,t)}}function Xm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:$1(n,i);break t;case 22:n.memoizedState===null&&Xm(n,i);break t;default:Xm(n,i)}}e=e.sibling}}function tS(e){var t=e.alternate;t!==null&&(e.alternate=null,tS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,$n=!1;function qi(e,t,n){for(n=n.child;n!==null;)eS(e,t,n),n=n.sibling}function eS(e,t,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 26:me||vn(n,t),qi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!me&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:me||vn(n,t),ic(n);var i=He,s=$n;Ha(n.type)&&(He=n.stateNode,$n=!1),qi(e,t,n),GS(n.stateNode,n.type,n.memoizedProps),He=i,$n=s;break;case 5:me||vn(n,t),ic(n);case 6:if(n.tag===6&&ic(n),i=He,s=$n,He=null,qi(e,t,n),He=i,$n=s,He!==null)if($n)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(n.stateNode),he=!0}catch(a){_e(n,t,a)}else try{He.removeChild(n.stateNode),he=!0}catch(a){_e(n,t,a)}break;case 18:He!==null&&($n?(e=He,Py(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ho(e)):Py(He,n.stateNode));break;case 4:i=He,s=$n,He=n.stateNode.containerInfo,$n=!0,qi(e,t,n),He=i,$n=s;break;case 0:case 11:case 14:case 15:za(2,n,t),me||za(4,n,t),qi(e,t,n);break;case 1:me||(vn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&W1(n,t,i)),qi(e,t,n);break;case 21:qi(e,t,n);break;case 22:me=(i=me)||n.memoizedState!==null,qi(e,t,n),me=i;break;case 30:vn(n,t),qi(e,t,n);break;case 7:me||vn(n,t),qi(e,t,n);break;default:qi(e,t,n)}}function nS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ho(e)}catch(n){_e(t,t.return,n)}}}function iS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ho(e)}catch(n){_e(t,t.return,n)}}function GA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sy),t;default:throw Error(K(435,e.tag))}}function Xu(e,t){var n=GA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=tw.bind(null,e,i);i.then(s,s)}})}function Xn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ha(l.type)){He=l.stateNode,$n=!1;break t}break;case 5:He=l.stateNode,$n=!1;break t;case 3:case 4:He=l.stateNode.containerInfo,$n=!0;break t}l=l.return}if(He===null)throw Error(K(160));eS(r,o,a),He=null,$n=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sS(t,e,n),t=t.sibling}var Zi=null;function sS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Xn(t,e,n),Wn(e),s&4&&(za(3,e,e.return),Nc(3,e),za(5,e,e.return));break;case 1:Xn(t,e,n),Wn(e),s&512&&(me||i===null||vn(i,i.return)),s&64&&cn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Zi,Xn(t,e,n),Wn(e),s&512&&(me||i===null||vn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(cn)e.stateNode=NS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[wc]||i[_n]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),Mn(i,t,n),i[_n]=e,hn(i),t=i;break t;case"link":if(a=Wy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),Mn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Wy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),Mn(i,t,n),s.head.appendChild(i);break;default:throw Error(K(468,t))}i[_n]=e,hn(i),t=i}e.stateNode=t}else cn||og(a,e.type,e.stateNode);else e.stateNode=Xy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||me||t.parentNode.removeChild(t)):s.count--,n===null?cn||og(a,e.type,e.stateNode):Xy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Gp(e,e.memoizedProps,i.memoizedProps);break;case 27:Xn(t,e,n),Wn(e),s&512&&(me||i===null||vn(i,i.return)),i!==null&&s&4&&Gp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=us,us=!1,Xn(t,e,n),us=a,Wn(e),s&512&&(me||i===null||vn(i,i.return)),e.flags&32){t=e.stateNode;try{Do(t,""),he=!0}catch(h){_e(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Gp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Xp=!0);break;case 6:if(Xn(t,e,n),Wn(e),s&4){if(e.stateNode===null)throw Error(K(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,he=!0}catch(h){_e(e,e.return,h)}}break;case 3:if(he=!1,hh=null,a=Zi,Zi=yc(t.containerInfo),Xn(t,e,n),Zi=a,Wn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Ho(t.containerInfo)}catch(h){_e(e,e.return,h)}Xp&&(Xp=!1,aS(e)),he=!1;break;case 4:s=us,us=cn,i=w_(),a=Zi,Zi=yc(e.stateNode.containerInfo),Xn(t,e,n),Wn(e),Zi=a,he&&Yl&&(Ih=!0),he=i,us=s;break;case 12:Xn(t,e,n),Wn(e);break;case 31:Xn(t,e,n),Wn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Xu(e,t)));break;case 13:Xn(t,e,n),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(af=yi()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Xu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=cn,l=me,c=us;cn=o||a,us=c||a,me=l||r,Xn(t,e,n),me=l,us=c,cn=o,Wn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||cn||me||(t=r||me,n=cn,i=me,cn=a||cn,me=t,pa(e,2),cn=n,me=i),!a&&us||km(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Xu(e,n))));break;case 19:Xn(t,e,n),Wn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Xu(e,t)));break;case 30:s&512&&(me||i===null||vn(i,i.return)),s=w_(),a=Yl,r=(n&335544064)===n,o=e.memoizedProps,Yl=r&&qs(o.default,o.update)!=="none",Xn(t,e,n),Wn(e),r&&i!==null&&he&&(e.flags|=4),Yl=a,he=s;break;case 21:break;case 7:s&512&&(me||i===null||vn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Xn(t,e,n),Wn(e)}}function Wn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(q1(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Yg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(qg(s))break;s=s.return}var r=i;if(n==null)throw Error(K(160));switch(n.tag){case 27:var o=n.stateNode,l=kp(e);Lh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Do(c,""),n.flags&=-33);var h=kp(e);Lh(e,h,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,f=kp(e);zm(e,f,d,r);break;default:throw Error(K(161))}}catch(p){_e(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function aS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;aS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Fo=!0,t.reset(),Fo=!1),e=e.sibling}}function eo(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)rS(t,e),t=t.sibling;else Q1(t,!1)}function rS(e,t){var n=e.alternate;if(n===null)Bm(e,!1);else switch(e.tag){case 3:if(Gm=hs=!1,xy(),eo(t,e),!hs&&!Ih){if(e=ps,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];LS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Gm=!0}ps=null;break;case 5:eo(t,e);break;case 4:i=hs,hs=!1,eo(t,e),hs&&(Ih=!0),hs=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Bm(e,!1):eo(t,e));break;case 30:i=hs,s=xy(),hs=!1,eo(t,e),hs&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Hs(a,r),r=Hs(n.memoizedProps,r);var o=qs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ei=0,t=Zg(e,n,t,r,o,a,!0),ei!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Lo(e,e.memoizedProps.onUpdate),ps=s):s!==null&&(s.push.apply(s,ps),ps=s),hs=(e.flags&32)!==0?!0:i;break;default:eo(t,e)}}function fs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)j1(e,t.alternate,t),t=t.sibling}function pa(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),pa(n,i);break;case 1:vn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&W1(n,n.return,s),pa(n,i);break;case 27:(i&2)!==0&&GS(n.stateNode,n.type,n.memoizedProps);case 5:vn(n,n.return),n.tag!==5&&n.tag!==27||ic(n),pa(n,i);break;case 6:ic(n);break;case 26:vn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||me||s.parentNode.removeChild(s),pa(n,i);break;case 22:n.memoizedState===null&&pa(n,i);break;case 30:vn(n,n.return),pa(n,i);break;case 7:vn(n,n.return);default:pa(n,i)}e=e.sibling}}function Yi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Yi(s,a,n),Nc(4,a);break;case 1:if(Yi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){_e(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)$x(c[s],l)}catch(h){_e(i,i.return,h)}}o&&r&64&&X1(a),ds(a,a.return);break;case 27:(n&2)!==0&&Y1(a);case 5:a.tag!==5&&a.tag!==27||_y(a),Yi(s,a,n),o&&i===null&&r&4&&Pm(a),ds(a,a.return);break;case 6:_y(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||cn||og(yc(l.ownerDocument),a.type,l),Yi(s,a,n),o&&i===null&&r&4&&Pm(a),ds(a,a.return);break;case 12:Yi(s,a,n);break;case 31:Yi(s,a,n),o&&r&4&&nS(s,a);break;case 13:Yi(s,a,n),o&&r&4&&iS(s,a);break;case 22:a.memoizedState===null&&Yi(s,a,n),ds(a,a.return);break;case 30:Yi(s,a,n),ds(a,a.return);break;case 7:ds(a,a.return);default:Yi(s,a,n)}t=t.sibling}}function Jg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cc(n))}function Kg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cc(e))}function Ui(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)oS(e,t,n,i),t=t.sibling;else s&&K1(t)}function oS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&oh(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ui(e,t,n,i),a&2048&&Nc(9,t);break;case 1:Ui(e,t,n,i);break;case 3:Ui(e,t,n,i),s&&Gm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Cc(a)));break;case 12:if(a&2048){Ui(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){_e(t,t.return,c)}}else Ui(e,t,n,i);break;case 31:Ui(e,t,n,i);break;case 13:Ui(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&oh(o),r._visibility&2?Ui(e,t,n,i):sc(e,t)):(s&&o!==null&&o.memoizedState!==null&&oh(t),r._visibility&2?Ui(e,t,n,i):(r._visibility|=2,io(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Jg(o,t);break;case 24:Ui(e,t,n,i),a&2048&&Kg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(Ss(a.child,!0),Ss(t.child,!0))),Ui(e,t,n,i);break;default:Ui(e,t,n,i)}}function io(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:io(a,r,o,l,s),Nc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?io(a,r,o,l,s):sc(a,r):(h._visibility|=2,io(a,r,o,l,s)),s&&c&2048&&Jg(r.alternate,r);break;case 24:io(a,r,o,l,s),s&&c&2048&&Kg(r.alternate,r);break;default:io(a,r,o,l,s)}t=t.sibling}}function sc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:sc(n,i),s&2048&&Jg(i.alternate,i);break;case 24:sc(n,i),s&2048&&Kg(i.alternate,i);break;default:sc(n,i)}t=t.sibling}}var rr=8192;function ir(e,t,n){if(e.subtreeFlags&rr)for(e=e.child;e!==null;)lS(e,t,n),e=e.sibling}function lS(e,t,n){switch(e.tag){case 26:ir(e,t,n),e.flags&rr&&(e.memoizedState!==null?qw(n,Zi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Yy(n,e)));break;case 5:ir(e,t,n),e.flags&rr&&(e=e.stateNode,(t&335544128)===t&&Yy(n,e));break;case 3:case 4:var i=Zi;Zi=yc(e.stateNode.containerInfo),ir(e,t,n),Zi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=rr,rr=16777216,ir(e,t,n),rr=i):ir(e,t,n));break;case 30:if((e.flags&rr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,vi===null&&(vi=new Map),vi.set(i,s)}ir(e,t,n);break;default:ir(e,t,n)}}function cS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];un=i,hS(i,e)}cS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uS(e),e=e.sibling}function uS(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&za(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,lh(e)):Hl(e);break;default:Hl(e)}}function lh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];un=i,hS(i,e)}cS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:za(8,t,t.return),lh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,lh(t));break;default:lh(t)}e=e.sibling}}function hS(e,t){for(;un!==null;){var n=un;switch(n.tag){case 0:case 11:case 15:za(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Cc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,un=i;else t:for(n=e;un!==null;){i=un;var s=i.sibling,a=i.return;if(tS(i),i===n){un=null;break t}if(s!==null){s.return=a,un=s;break t}un=a}}}var kA={getCacheForType:function(e){var t=yn(Qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return yn(Qe).controller.signal}},XA=typeof WeakMap=="function"?WeakMap:Map,fe=0,we=null,ie=null,re=0,ge=0,pi=null,Sa=!1,Wo=!1,Qg=!1,Xs=0,Ze=0,Ba=0,dr=0,Ph=0,_i=0,Uo=0,ac=null,ti=null,Wm=!1,af=0,fS=0,zh=1/0,Bh=null,Da=null,Xe=0,Ki=null,Sr=null,xs=0,qm=0,Ym=null,dS=null,To=null,Ao=null,wo=null,rc=0,ch=null;function Mi(){return(fe&2)!==0&&re!==0?re&-re:Gt.T!==null?$g():vx()}function pS(){if(_i===0)if((re&536870912)===0||ee){var e=Nu;Nu<<=1,(Nu&3932160)===0&&(Nu=262144),_i=e}else _i=536870912;return e=bn.current,e!==null&&(e.flags|=32),_i}function Lo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=IS(Hs(e.memoizedProps,n))),Ao===null&&(Ao=[]),Ao.push(t.bind(null,i))}}function ii(e,t,n){(e===we&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Oo(e,0),Ma(e,re,_i,!1)),Ac(e,n),((fe&2)===0||e!==we)&&(e===we&&((fe&2)===0&&(dr|=n),Ze===4&&Ma(e,re,_i,!1)),bs(e))}function mS(e,t,n){if((fe&6)!==0)throw Error(K(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Tc(e,t),s=i?YA(e,t):Wp(e,t,!0),a=i;do{if(s===0){Wo&&!i&&Ma(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!WA(n)){s=Wp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=ac;var l=o.current.memoizedState.isDehydrated;if(l&&(Oo(o,r).flags|=256),r=Wp(o,r,!1),r!==2&&r!==6){if(Qg&&!l){o.errorRecoveryDisabledLanes|=a,dr|=a,s=4;break t}a=ti,ti=s,a!==null&&(ti===null?ti=a:ti.push.apply(ti,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Oo(e,0),Ma(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(K(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ma(i,t,_i,!Sa);break t;case 2:ti=null;break;case 3:case 5:break;default:throw Error(K(329))}if((t&62914560)===t&&(s=af+300-yi(),10<s)){if(Ma(i,t,_i,!Sa),Xh(i,0,!0)!==0)break t;xs=t,i.timeoutHandle=e0(My.bind(null,i,n,ti,Bh,Wm,t,_i,dr,Uo,Sa,a,"Throttled",-0,0),s);break t}My(i,n,ti,Bh,Wm,t,_i,dr,Uo,Sa,a,null,-0,0)}}break}while(!0);bs(e)}function My(e,t,n,i,s,a,r,o,l,c,h,d,f,p){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gs},vi=null,lS(t,a,d),x&&(g=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=xc.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?af-yi():(a&4194048)===a?fS-yi():0,g=Yw(d,g),g!==null)){xs=a,e.cancelPendingCommit=g(Ey.bind(null,e,t,a,n,i,s,r,o,l,c,h,d,null,f,p)),Ma(e,a,r,!c);return}Ey(e,t,a,n,i,s,r,o,l,c,h,d)}function WA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!bi(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ma(e,t,n,i){t=fx(e,t),t&=~Ph,t&=~dr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Si(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&px(e,n,t)}function rf(){return(fe&6)===0?(Uc(0,!1),!1):!0}function jg(){if(ie!==null){if(ge===0)var e=ie.return;else e=ie,Ps=Ar=null,Ig(e),Mo=null,dc=0,e=ie;for(;e!==null;)k1(e.alternate,e),e=e.return;ie=null}}function Oo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,dw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xs=0,jg(),we=e,ie=n=zs(e.current,null),re=t,ge=0,pi=null,Sa=!1,Wo=Tc(e,t),Qg=!1,Uo=_i=Ph=dr=Ba=Ze=0,ti=ac=null,Wm=!1,Xs=fx(e,t),Jh(),n}function gS(e,t){Zt=null,Gt.H=Dh,t===ko||t===jh?(t=J_(),ge=3):t===wg?(t=J_(),ge=4):ge=t===kg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pi=t,ie===null&&(Ze=1,Nh(e,zi(t,e.current)))}function vS(){var e=bn.current;return e===null?!0:(re&4194048)===re?Un===null:(re&62914560)===re||(re&536870912)!==0?e===Un:!1}function _S(){var e=Gt.H;return Gt.H=Dh,e===null?Dh:e}function yS(){var e=Gt.A;return Gt.A=kA,e}function Fh(){Ze=4,Sa||(re&4194048)!==re&&bn.current!==null||(Wo=!0),(Ba&134217727)===0&&(dr&134217727)===0||we===null||Ma(we,re,_i,!1)}function Wp(e,t,n){var i=fe;fe|=2;var s=_S(),a=yS();(we!==e||re!==t)&&(Bh=null,Oo(e,t)),t=!1;var r=Ze;t:do try{if(ge!==0&&ie!==null){var o=ie,l=pi;switch(ge){case 8:jg(),r=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(t=!0);var c=ge;if(ge=0,pi=null,vo(e,o,l,c),n&&Wo){r=0;break t}break;default:c=ge,ge=0,pi=null,vo(e,o,l,c)}}qA(),r=Ze;break}catch(h){gS(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ps=Ar=null,fe=i,Gt.H=s,Gt.A=a,ie===null&&(we=null,re=0,Jh()),r}function qA(){for(;ie!==null;)xS(ie)}function YA(e,t){var n=fe;fe|=2;var i=_S(),s=yS();we!==e||re!==t?(Bh=null,zh=yi()+500,Oo(e,t)):Wo=Tc(e,t);t:do try{if(ge!==0&&ie!==null){t=ie;var a=pi;e:switch(ge){case 1:ge=0,pi=null,vo(e,t,a,1);break;case 2:case 9:if(Z_(a)){ge=0,pi=null,by(t);break}t=function(){ge!==2&&ge!==9||we!==e||(ge=7),bs(e)},a.then(t,t);break t;case 3:ge=7;break t;case 4:ge=5;break t;case 7:Z_(a)?(ge=0,pi=null,by(t)):(ge=0,pi=null,vo(e,t,a,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var o=ie;if(r?WS(r):o.stateNode.complete){ge=0,pi=null;var l=o.sibling;if(l!==null)ie=l;else{var c=o.return;c!==null?(ie=c,of(c)):ie=null}break e}}ge=0,pi=null,vo(e,t,a,5);break;case 6:ge=0,pi=null,vo(e,t,a,6);break;case 8:jg(),Ze=6;break t;default:throw Error(K(462))}}ZA();break}catch(h){gS(e,h)}while(!0);return Ps=Ar=null,Gt.H=i,Gt.A=s,fe=n,ie!==null?0:(we=null,re=0,Jh(),Ze)}function ZA(){for(;ie!==null&&!hT();)xS(ie)}function xS(e){var t=G1(e.alternate,e,Xs);e.memoizedProps=e.pendingProps,t===null?of(e):ie=t}function by(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hy(n,t,t.pendingProps,t.type,void 0,re);break;case 11:t=hy(n,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Ig(t);var i=t;i===fn&&(ee?(bh(i),i.tag===5&&i.stateNode!=null&&(Ue=i.stateNode)):(bh(i),ee=!0));default:k1(n,t),t=ie=Xx(t,Xs),t=G1(n,t,Xs)}e.memoizedProps=e.pendingProps,t===null?of(e):ie=t}function vo(e,t,n,i){Ps=Ar=null,Ig(t),Mo=null,dc=0;var s=t.return;try{if(IA(e,s,t,n,re)){Ze=1,Nh(e,zi(n,e.current)),ie=null;return}}catch(a){if(s!==null)throw ie=s,a;Ze=1,Nh(e,zi(n,e.current)),ie=null;return}t.flags&32768?(ee||i===1?e=!0:Wo||(re&536870912)!==0?e=!1:(Sa=e=!0,(i===2||i===9||i===3||i===6)&&(i=bn.current,i!==null&&i.tag===13&&(i.flags|=16384))),SS(t,e)):of(t)}function of(e){var t=e;do{if((t.flags&32768)!==0){SS(t,Sa);return}e=t.return;var n=FA(t.alternate,t,Xs);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ze===0&&(Ze=5)}function SS(e,t){do{var n=HA(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);Ze=6,ie=null}function Ey(e,t,n,i,s,a,r,o,l,c,h,d){e.cancelPendingCommit=null;do lf();while(Xe!==0);if((fe&6)!==0)throw Error(K(327));if(t!==null){if(t===e.current)throw Error(K(177));e===we&&(ie=we=null,re=0),Sr=t,Ki=e,xs=n,Ym=s,dS=i,JA(e,t,n,r,o,l,d)}}function JA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(qm=o,o|=Sg,ST(e,n,o,i,s,a),Ao=null,(n&335544064)===n?(wo=bA(e),i=10262):(wo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,ew(_h,function(){return Qm(),null})):(e.callbackNode=null,e.callbackPriority=0),Oh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Gt.T,Gt.T=null,s=de.p,de.p=2,a=fe,fe|=4;try{VA(e,t,n)}finally{fe=a,de.p=s,Gt.T=i}}Xe=1,Oh?To=yw(r,e.containerInfo,wo,Zm,Jm,QA,Km,Qm,KA,null,null):(Zm(),Jm(),Km())}function KA(e){if(Xe!==0){var t=Ki.onRecoverableError;t(e,{componentStack:null})}}function QA(){Xe===3&&(Xe=0,rS(Sr,Ki),Xe=4)}function Zm(){if(Xe===1){Xe=0;var e=Ki,t=Sr,n=xs,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Gt.T,Gt.T=null;var s=de.p;de.p=2;var a=fe;fe|=4;try{Yl=Ih=!1,sS(t,e,n),n=eg;var r=Px(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Ix(o.ownerDocument.documentElement,o)){if(l!==null&&xg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!p.extend&&x>m&&(r=m,m=x,x=r);var u=H_(o,x),v=H_(o,m);if(u&&v&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var _=d[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Fo=!!tg,eg=tg=null}finally{fe=a,de.p=s,Gt.T=i}}e.current=t,Xe=2}}function Jm(){if(Xe===2){Xe=0;var e=Ki,t=Sr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Gt.T,Gt.T=null;var i=de.p;de.p=2;var s=fe;fe|=4;try{j1(e,t.alternate,t)}finally{fe=s,de.p=i,Gt.T=n}}Xe=3}}function Km(){if(Xe===4||Xe===3){Xe=0;var e=To;To=null,fT();var t=Ki,n=Sr,i=xs,s=dS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Xe=5:(Xe=0,Sr=Ki=null,MS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Da=null),pg(i),n=n.stateNode,xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Ec,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Gt.T,a=de.p,de.p=2,Gt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Gt.T=n,de.p=a}}if(s=Ao,r=wo,wo=null,s!==null&&(Ao=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(xs&3)!==0&&lf(),bs(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===ch?rc++:(rc=0,ch=t):(rc=0,ch=null),Uc(0,!1)}}function MS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cc(t)))}function lf(){return To!==null&&(To.skipTransition(),To=null),Zm(),Jm(),Km(),Qm()}function Qm(){if(Xe!==5)return!1;var e=Ki,t=qm;qm=0;var n=pg(xs),i=Gt.T,s=de.p;try{de.p=32>n?32:n,Gt.T=null,n=Ym,Ym=null;var a=Ki,r=xs;if(Xe=0,Sr=Ki=null,xs=0,(fe&6)!==0)throw Error(K(331));var o=fe;if(fe|=4,uS(a.current),oS(a,a.current,r,n),fe=o,Uc(0,!1),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Ec,a)}catch{}return!0}finally{de.p=s,Gt.T=i,MS(e,t)}}function Ty(e,t,n){t=zi(n,t),t=Dm(e.stateNode,t,2),e=wa(e,t,2),e!==null&&(Ac(e,2),bs(e))}function _e(e,t,n){if(e.tag===3)Ty(e,e,n);else for(;t!==null;){if(t.tag===3){Ty(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Da===null||!Da.has(i))){e=zi(n,e),n=z1(2),i=wa(t,n,2),i!==null&&(B1(n,i,t,e),Ac(i,2),bs(i));break}}t=t.return}}function qp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new XA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Qg=!0,s.add(n),e=jA.bind(null,e,t,n),t.then(e,e))}function jA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,we===e&&(re&n)===n&&((Ze===4||Ze===3&&(re&62914560)===re&&300>yi()-af)&&(fe&2)===0?Oo(e,0):Ph|=n,Uo===re&&(Uo=0)),bs(e)}function bS(e,t){t===0&&(t=dx()),e=Tr(e,t),e!==null&&(Ac(e,t),bs(e))}function $A(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bS(e,n)}function tw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(t),bS(e,n)}function ew(e,t){return fg(e,t)}var Io=null,so=null,jm=!1,Hh=!1,Yp=!1,ba=0;function bs(e){e!==so&&e.next===null&&(so===null?Io=so=e:so=so.next=e),Hh=!0,jm||(jm=!0,iw())}function Uc(e,t){if(!Yp&&Hh){Yp=!0;do for(var n=!1,i=Io;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Si(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Ay(i,a))}else a=re,a=Xh(i,i===we?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Tc(i,a)||(n=!0,Ay(i,a));i=i.next}while(n);Yp=!1}}function nw(){ES()}function ES(){Hh=jm=!1;var e=0;ba!==0&&fw()&&(e=ba);for(var t=yi(),n=null,i=Io;i!==null;){var s=i.next,a=TS(i,t);a===0?(i.next=null,n===null?Io=s:n.next=s,s===null&&(so=n)):(n=i,(e!==0||(a&3)!==0)&&(Hh=!0)),i=s}Xe!==0&&Xe!==5||Uc(e,!1),ba!==0&&(ba=0)}function TS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Si(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=xT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=we,n=re,n=Xh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Tp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Tc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Tp(i),pg(n)){case 2:case 8:n=ux;break;case 32:n=_h;break;case 268435456:n=hx;break;default:n=_h}return i=AS.bind(null,e),n=fg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Tp(i),e.callbackPriority=2,e.callbackNode=null,2}function AS(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var i=re;return i=Xh(e,e===we?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(mS(e,i,t),TS(e,yi()),e.callbackNode!=null&&e.callbackNode===n?AS.bind(null,e):null)}function Ay(e,t){if(lf())return null;mS(e,t,!0)}function iw(){pw(function(){(fe&6)!==0?fg(cx,nw):ES()})}function $g(){if(ba===0){var e=vr;e===0&&(e=Du,Du<<=1,(Du&261888)===0&&(Du=256)),ba=e}return ba}function wy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qu(e)}function sw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=wy((s[ai]||null).action),r=i.submitter;r&&(t=(t=r[ai]||null)?wy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new qh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ba!==0){var l=new FormData(s,r);Rm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Rm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Wu=0;Wu<vm.length;Wu++)qu=vm[Wu],Ry=qu.toLowerCase(),Cy=qu[0].toUpperCase()+qu.slice(1),Qi(Ry,"on"+Cy);var qu,Ry,Cy,Wu;Qi(Bx,"onAnimationEnd");Qi(Fx,"onAnimationIteration");Qi(Hx,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(mA,"onTransitionRun");Qi(gA,"onTransitionStart");Qi(vA,"onTransitionCancel");Qi(Vx,"onTransitionEnd");Co("onMouseEnter",["mouseout","mouseover"]);Co("onMouseLeave",["mouseout","mouseover"]);Co("onPointerEnter",["pointerout","pointerover"]);Co("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gc));function wS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){xh(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){xh(h)}s.currentTarget=null,a=l}}}}function ne(e,t){var n=t[b_];n===void 0&&(n=t[b_]=new Set);var i=e+"__bubble";n.has(i)||(RS(t,e,2,!1),n.add(i))}function Zp(e,t,n){var i=0;t&&(i|=4),RS(n,e,i,t)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function t0(e){if(!e[Yu]){e[Yu]=!0,yx.forEach(function(n){n!=="selectionchange"&&(aw.has(n)||Zp(n,!1,e),Zp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yu]||(t[Yu]=!0,Zp("selectionchange",!1,t))}}function RS(e,t,n,i){switch(jS(t)){case 2:var s=Qw;break;case 8:s=jw;break;default:s=o0}n=s.bind(null,t,n,e),s=void 0,!dm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Jp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=or(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}wx(function(){var c=a,h=gg(n),d=[];t:{var f=Gx.get(e);if(f!==void 0){var p=qh,g=e;switch(e){case"keypress":if($u(n)===0)break t;case"keydown":case"keyup":p=WT;break;case"focusin":g="focus",p=Np;break;case"focusout":g="blur",p=Np;break;case"beforeblur":case"afterblur":p=Np;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=N_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=KT;break;case Bx:case Fx:case Hx:p=PT;break;case Vx:p=jT;break;case"scroll":case"scrollend":p=NT;break;case"wheel":p=tA;break;case"copy":case"cut":case"paste":p=BT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=L_;break;case"submit":p=ZT;break;case"toggle":case"beforetoggle":p=nA}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var v=c,y;v!==null;){var _=v;if(y=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||y===null||u===null||(_=lc(v,u),_!=null&&x.push(vc(v,_,y))),m)break;v=v.return}0<x.length&&(f=new p(f,g,null,n,h),d.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==fm&&(g=n.relatedTarget||n.fromElement)&&(or(g)||g[Vo]))break t;(f||p)&&(g=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=c,p=p?or(p):null,p!==null&&(m=bc(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(f=null,p=c),f!==p&&(x=N_,_="onMouseLeave",u="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(x=L_,_="onPointerLeave",u="onPointerEnter",v="pointer"),m=f==null?g:Wl(f),y=p==null?g:Wl(p),g=new x(_,v+"leave",f,n,h),g.target=m,g.relatedTarget=y,_=null,or(h)===c&&(x=new x(u,v+"enter",p,n,h),x.target=y,x.relatedTarget=m,_=x),m=_,x=f&&p?tm(f,p,rw):null,f!==null&&Dy(d,g,f,x,!1),p!==null&&m!==null&&Dy(d,m,p,x,!0)))}t:{if(f=c?Wl(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=z_;else if(P_(f))if(Lx)T=fA;else{T=uA;var w=cA}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&mg(c.elementType)&&(T=z_):T=hA;if(T&&(T=T(e,c))){Ux(d,T,n,h);break t}w&&w(e,f,c)}switch(w=c?Wl(c):window,e){case"focusin":(P_(w)||w.contentEditable==="true")&&(uo=w,mm=c,Kl=null);break;case"focusout":Kl=mm=uo=null;break;case"mousedown":gm=!0;break;case"contextmenu":case"mouseup":case"dragend":gm=!1,V_(d,n,h);break;case"selectionchange":if(pA)break;case"keydown":case"keyup":V_(d,n,h)}var C;if(yg)t:{switch(e){case"compositionstart":var N="onCompositionStart";break t;case"compositionend":N="onCompositionEnd";break t;case"compositionupdate":N="onCompositionUpdate";break t}N=void 0}else co?Dx(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Cx&&n.locale!=="ko"&&(co||N!=="onCompositionStart"?N==="onCompositionEnd"&&co&&(C=Rx()):(ya=h,vg="value"in ya?ya.value:ya.textContent,co=!0)),w=Vh(c,N),0<w.length&&(N=new U_(N,e,null,n,h),d.push({event:N,listeners:w}),C?N.data=C:(C=Nx(n),C!==null&&(N.data=C)))),(C=sA?aA(e,n):rA(e,n))&&(N=Vh(c,"onBeforeInput"),0<N.length&&(w=new U_("onBeforeInput","beforeinput",null,n,h),d.push({event:w,listeners:N}),w.data=C)),sw(d,e,c,n,h)}wS(d,t)})}function vc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=lc(e,n),s!=null&&i.unshift(vc(e,s,a)),s=lc(e,t),s!=null&&i.push(vc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function rw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=lc(n,a),c!=null&&r.unshift(vc(n,c,l))):s||(c=lc(n,a),c!=null&&r.push(vc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var ow=/\r\n?/g,lw=/\u0000|\uFFFD/g;function Ny(e){return(typeof e=="string"?e:""+e).replace(ow,`
`).replace(lw,"")}function CS(e,t){return t=Ny(t),Ny(e)===t}function ve(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Do(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Do(e,""+i);else return;break;case"className":Lu(e,"class",i);break;case"tabIndex":Lu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Lu(e,n,i);break;case"style":Ax(e,i,a);return;case"data":if(t!=="object"){Lu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ve(e,t,"name",s.name,s,null),ve(e,t,"formEncType",s.formEncType,s,null),ve(e,t,"formMethod",s.formMethod,s,null),ve(e,t,"formTarget",s.formTarget,s,null)):(ve(e,t,"encType",s.encType,s,null),ve(e,t,"method",s.method,s,null),ve(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=gs);return;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(K(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Qu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Ku(e,"popover",i);break;case"xlinkActuate":Ls(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ls(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ls(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ls(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ls(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ls(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ls(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ls(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ls(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ku(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=CT.get(n)||n,Ku(e,n,i);else return}he=!0}function $m(e,t,n,i,s,a){switch(n){case"style":Ax(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(K(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Do(e,i);else if(typeof i=="number"||typeof i=="bigint")Do(e,""+i);else return;break;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"onClick":i!=null&&(e.onclick=gs);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!xx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[ai]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}he=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ku(e,n,i)}return}he=!0}function Mn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ve(e,t,a,r,n,null)}}s&&ve(e,t,"srcSet",n.srcSet,n,null),i&&ve(e,t,"src",n.src,n,null);return;case"input":ne("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(K(137,t));break;default:ve(e,t,i,h,n,null)}}bx(e,a,o,l,c,r,s,!1);return;case"select":ne("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ve(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?yo(e,!!i,t,!1):n!=null&&yo(e,!!i,n,!0);return;case"textarea":ne("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:ve(e,t,r,o,n,null)}Tx(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ve(e,t,l,i,n,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<gc.length;i++)ne(gc[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ve(e,t,c,i,n,null)}return;default:if(mg(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&$m(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ve(e,t,o,i,n,null))}var cw={};function uw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ve(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":p!==d&&(he=!0),a=p;break;case"name":p!==d&&(he=!0),s=p;break;case"checked":p!==d&&(he=!0),c=p;break;case"defaultChecked":p!==d&&(he=!0),h=p;break;case"value":p!==d&&(he=!0),r=p;break;case"defaultValue":p!==d&&(he=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(K(137,t));break;default:p!==d&&ve(e,t,f,p,i,d)}}hm(e,r,o,l,c,h,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||ve(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(he=!0),f=a;break;case"defaultValue":a!==l&&(he=!0),o=a;break;case"multiple":a!==l&&(he=!0),r=a;default:a!==l&&ve(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?yo(e,!!n,f,!1):!!i!=!!n&&(t!=null?yo(e,!!n,t,!0):yo(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ve(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(he=!0),f=s;break;case"defaultValue":s!==a&&(he=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(K(91));break;default:s!==a&&ve(e,t,r,s,i,a)}Ex(e,f,p);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:ve(e,t,g,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":f!==p&&(he=!0),e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:ve(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&ve(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(K(137,t));break;default:ve(e,t,c,f,i,p)}return;default:if(mg(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&$m(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||$m(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&ve(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||ve(e,t,d,f,i,p)}function Uy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Uy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&Uy(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tg=null,eg=null;function _c(e){return e.nodeType===9?e:e.ownerDocument}function Ly(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function DS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function NS(e,t,n,i){return n=_c(n).createElement(e),n[_n]=i,n[ai]=t,Mn(n,e,t),hn(n),n}function ng(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kp=null;function fw(){var e=window.event;return e&&e.type==="popstate"?e===Kp?!1:(Kp=e,!0):(Kp=null,!1)}var e0=typeof setTimeout=="function"?setTimeout:void 0,dw=typeof clearTimeout=="function"?clearTimeout:void 0,Oy=typeof Promise=="function"?Promise:void 0,Iy=typeof requestAnimationFrame=="function"?requestAnimationFrame:e0,pw=typeof queueMicrotask=="function"?queueMicrotask:typeof Oy<"u"?function(e){return Oy.resolve(null).then(e).catch(mw)}:e0;function mw(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function Py(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Ho(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")jp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,jp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[wc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&jp(e.ownerDocument.body);n=s}while(n);Ho(t)}function zy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function US(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function LS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function OS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function ig(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return OS(t,n,e)}function gw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return OS(t,n,e)}function vw(e){return e.documentElement.clientHeight}function _w(e){this.addEventListener("load",e),this.addEventListener("error",e)}function yw(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var f=c.defaultView,p=f.navigation&&f.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(vw(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,u=0,v=0;v<m.length;v++){var y=m[v];if(!y.complete){var _=y.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<f.innerHeight&&_.left<f.innerWidth){if(u+=qS(y),u>fh){x.length=g;break}y=new Promise(_w.bind(y)),x.push(y)}}}if(0<x.length)return f=Promise.race([Promise.all(x),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(p?Promise.allSettled([p.finished,f]):f).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var d=[];return h.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),p=0;p<f.length;p++){var g=f[p],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=x.getKeyframes();for(var u=m=void 0,v=!0,y=0;y<g.length;y++){var _=g[y],T=_.width;if(m===void 0)m=T;else if(m!==T){v=!1;break}if(T=_.height,u===void 0)u=T;else if(u!==T){v=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}v&&m!==void 0&&u!==void 0&&(x.setKeyframes(g),v=getComputedStyle(x.target,x.pseudoElement),v.width!==m||v.height!==u)&&(v=g[0],v.width=m,v.height=u,v=g[g.length-1],v.width=m,v.height=u,x.setKeyframes(g))}}r()},function(f){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var f=0;f<d.length;f++)d[f].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function lr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}lr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Re({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};lr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function IS(e){return{name:e,group:new lr("group",e),imagePair:new lr("image-pair",e),old:new lr("old",e),new:new lr("new",e)}}function Ei(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ei.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(PS(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Po(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),si(this._fragmentFiber.child,!1,xw,e,o,i)}this._eventListeners=a}};function xw(e,t,n,i){return nn(e).addEventListener(t,n,i),!1}Ei.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=PS(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Po(s.optionsOrUseCapture),si(this._fragmentFiber.child,!1,Sw,e,n,s),i.splice(t,1),a!==null&&a()}};function Sw(e,t,n,i){return nn(e).removeEventListener(t,n,i),!1}function Po(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function By(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function PS(e,t,n,i){if(e.length===0)return-1;i=By(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&By(a.optionsOrUseCapture)===i)return s}return-1}Ei.prototype.dispatchEvent=function(e){var t=Mr(this._fragmentFiber);if(t===null)return!0;t=nn(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Po(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Po(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};Ei.prototype.focus=function(e){si(this._fragmentFiber.child,!0,zS,e,void 0,void 0)};function zS(e,t){return e.tag===6?!1:(e=nn(e),Lw(e,t))}Ei.prototype.focusLast=function(e){var t=[];si(this._fragmentFiber.child,!0,n0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!zS(t[n],e);n--);};function n0(e,t){return t.push(e),!1}Ei.prototype.blur=function(){var e=Mr(this._fragmentFiber);e!==null&&(e=nn(e),e=_c(e).activeElement,e!==null&&si(this._fragmentFiber.child,!1,Mw,e,void 0,void 0))};function Mw(e,t){return e.tag===6?!1:(e=nn(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Ei.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),si(this._fragmentFiber.child,!1,bw,e,void 0,void 0)};function bw(e,t){return e.tag===6||(e=nn(e),t.observe(e)),!1}Ei.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),si(this._fragmentFiber.child,!1,Ew,e,void 0,void 0);for(var n=t=0;n<Ji.length;n++){var i=Ji[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ji[t++]=i}Ji.length=t}};function Ew(e,t){return e.tag===6||(e=nn(e),t.unobserve(e)),!1}var Ji=[],Qp=!1;function Tw(e,t,n){Ji.push({fragmentInstance:e,observer:t,instance:n}),Qp||(Qp=!0,Ow(function(){Qp=!1;var i=Ji;Ji=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}Ei.prototype.getClientRects=function(){var e=[];return si(this._fragmentFiber.child,!1,Aw,e,void 0,void 0),e};function Aw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=nn(e),t.push.apply(t,e.getClientRects());return!1}Ei.prototype.getRootNode=function(e){var t=Mr(this._fragmentFiber);return t===null?this:nn(t).getRootNode(e)};Ei.prototype.compareDocumentPosition=function(e){var t=Mr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];si(this._fragmentFiber.child,!1,n0,n,void 0,void 0);var i=nn(t);if(n.length===0){if(n=i,v_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ax(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=nn(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=nn(n[0]),s=nn(n[n.length-1]);var a=v_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ww(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ww(e,t,n,i,s){var a=or(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Mr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=tm(n,a,__),t===null?t=!1:(si(t,!0,iT,a,n),a=ao,ao=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=tm(i,a,__),t===null?t=!1:(si(t,!0,sT,a,i),a=ao,$p=ao=null,t=a!==null)),t):!1}function Fy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ei.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(K(566));var t=[];si(this._fragmentFiber.child,!1,n0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=ax(this._fragmentFiber);if(i=n?i[1]||i[0]||Mr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=nn(i),Fy(e,n);return}if(i=nn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=nn(s),Fy(s,n)):nn(s).scrollIntoView(e),i+=n?-1:1}};function Rw(e,t){return e=nn(e),BS(e,t),!1}function BS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function FS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Po(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ji.length;o++){var l=Ji[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ji[r++]=l)}Ji.length=r,a.observe(e)}),BS(e,t))}function Cw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Po(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?Tw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function sg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":sg(n),Wh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Dw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[wc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Fi(e.nextSibling),e===null)break}return null}function Nw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Fi(e.nextSibling),e===null))return null;return e}function HS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Fi(e.nextSibling),e===null))return null;return e}function ag(e){return e.data==="$?"||e.data==="$~"}function i0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var rg=null;function Hy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Fi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Vy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Lw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Ow(e){Iy(function(){Iy(function(t){return e(t)})})}function VS(e,t,n){switch(t=_c(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}function GS(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&ve(e,t,i,null,cw,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===gs&&(e.onclick=null),Wh(e)}function jp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wh(e)}var Hi=new Map,Gy=new Set;function yc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ys=de.d;de.d={f:Iw,r:Pw,D:zw,C:Bw,L:Fw,m:Hw,X:Gw,S:Vw,M:kw};function Iw(){var e=Ys.f(),t=rf();return e||t}function Pw(e){var t=Go(e);t!==null&&t.tag===5&&t.type==="form"?A1(t):Ys.r(e)}var qo=typeof document>"u"?null:document;function kS(e,t,n){var i=qo;if(i&&typeof t=="string"&&t){var s=Pi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Gy.has(s)||(Gy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Mn(t,"link",e),hn(t),i.head.appendChild(t)))}}function zw(e){Ys.D(e),kS("dns-prefetch",e,null)}function Bw(e,t){Ys.C(e,t),kS("preconnect",e,t)}function Fw(e,t,n){Ys.L(e,t,n);var i=qo;if(i&&e&&t){var s='link[rel="preload"][as="'+Pi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Pi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Pi(n.imageSizes)+'"]')):s+='[href="'+Pi(e)+'"]';var a=s;switch(t){case"style":a=zo(e);break;case"script":a=Yo(e)}if(!(Hi.has(a)||(e=Re({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Hi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Lc(a))||t==="script"&&i.querySelector(Oc(a))))){var r=i.createElement("link");Mn(r,"link",e),t==="style"&&(r[yh]=!0,r.onload=r.onerror=function(){_x(r)}),hn(r),i.head.appendChild(r)}}}function Hw(e,t){Ys.m(e,t);var n=qo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Pi(i)+'"][href="'+Pi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Yo(e)}if(!Hi.has(a)&&(e=Re({rel:"modulepreload",href:e},t),Hi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Oc(a)))return}i=n.createElement("link"),Mn(i,"link",e),hn(i),n.head.appendChild(i)}}}function Vw(e,t,n){Ys.S(e,t,n);var i=qo;if(i&&e){var s=_o(i).hoistableStyles,a=zo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Lc(a)))o.loading=5;else{e=Re({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Hi.get(a))&&s0(e,n);var l=r=i.createElement("link");hn(l),Mn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,uh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function Gw(e,t){Ys.X(e,t);var n=qo;if(n&&e){var i=_o(n).hoistableScripts,s=Yo(e),a=i.get(s);a||(a=n.querySelector(Oc(s)),a||(e=Re({src:e,async:!0},t),(t=Hi.get(s))&&a0(e,t),a=n.createElement("script"),hn(a),Mn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function kw(e,t){Ys.M(e,t);var n=qo;if(n&&e){var i=_o(n).hoistableScripts,s=Yo(e),a=i.get(s);a||(a=n.querySelector(Oc(s)),a||(e=Re({src:e,async:!0,type:"module"},t),(t=Hi.get(s))&&a0(e,t),a=n.createElement("script"),hn(a),Mn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function ky(e,t,n,i){var s=(s=Ea.current)?yc(s):null;if(!s)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=zo(n.href),t=_o(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zo(n.href);var a=_o(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Lc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Hi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Hi.set(e,a)),Xw(s,e,a,r.state))),t&&i===null)throw Error(K(528,""));return r}if(t&&i!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Yo(n),t=_o(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function zo(e){return'href="'+Pi(e)+'"'}function Lc(e){return'link[rel="stylesheet"]['+e+"]"}function XS(e){return Re({},e,{"data-precedence":e.precedence,precedence:null})}function Xw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[yh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[yh]=!0,t.onload=t.onerror=_x.bind(null,t),Mn(t,"link",n),hn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Yo(e){return'[src="'+Pi(e)+'"]'}function Oc(e){return"script[async]"+e}function Xy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Pi(n.href)+'"]');if(i)return t.instance=i,hn(i),i;var s=Re({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),hn(i),Mn(i,"style",s),uh(i,n.precedence,e),t.instance=i;case"stylesheet":s=zo(n.href);var a=e.querySelector(Lc(s));if(a)return t.state.loading|=4,t.instance=a,hn(a),a;i=XS(n),(s=Hi.get(s))&&s0(i,s),a=(e.ownerDocument||e).createElement("link"),hn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Mn(a,"link",i),t.state.loading|=4,uh(a,n.precedence,e),t.instance=a;case"script":return a=Yo(n.src),(s=e.querySelector(Oc(a)))?(t.instance=s,hn(s),s):(i=n,(s=Hi.get(a))&&(i=Re({},n),a0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),hn(s),Mn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,uh(i,n.precedence,e));return t.instance}function uh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function s0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function a0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hh=null;function Wy(e,t,n){if(hh===null){var i=new Map,s=hh=new Map;s.set(n,i)}else s=hh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[wc]||a[_n]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function og(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ww(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function qy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function WS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Yy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=qS(t),e.suspenseyImages.push(t)),e=Zw.bind(e),t.decode().then(e,e))}function qw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=zo(i.href),a=t.querySelector(Lc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,hn(a);return}a=t.ownerDocument||t,i=XS(i),(s=Hi.get(s))&&s0(i,s),a=a.createElement("link"),hn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Mn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=xc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var fh=0;function Yw(e,t){return e.stylesheets&&e.count===0&&dh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&dh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&fh===0&&(fh=62500*hw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>fh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function YS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)dh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function xc(){this.count--,YS(this)}function Zw(){this.imgCount--,YS(this)}var Gh=null;function dh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gh=new Map,t.forEach(Jw,e),Gh=null,xc.call(e))}function Jw(e,t){if(!(t.state.loading&4)){var n=Gh.get(e);if(n)var i=n.get(null);else{n=new Map,Gh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=xc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Bo={$$typeof:ms,Provider:null,Consumer:null,_currentValue:cr,_currentValue2:cr,_threadCount:0};function Kw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ap(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ap(0),this.hiddenUpdates=Ap(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function ZS(e,t,n,i,s,a,r,o,l,c,h,d){return e=new Kw(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=ni(3,null,null,t),e.current=a,a.stateNode=e,t=Tg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Rg(a),e}function JS(e){return e?(e=po,e):po}function KS(e,t,n,i,s,a){s=JS(s),i.context===null?i.context=s:i.pendingContext=s,i=Aa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=wa(e,i,t),n!==null&&(ii(n,e,t),jl(n,e,t))}function Zy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function r0(e,t){Zy(e,t),(e=e.alternate)&&Zy(e,t)}function QS(e){if(e.tag===13||e.tag===31){var t=Tr(e,67108864);t!==null&&ii(t,e,67108864),r0(e,67108864)}}function Jy(e){if(e.tag===13||e.tag===31){var t=Mi();t=dg(t);var n=Tr(e,t);n!==null&&ii(n,e,t),r0(e,t)}}var Fo=!0;function Qw(e,t,n,i){var s=Gt.T;Gt.T=null;var a=de.p;try{de.p=2,o0(e,t,n,i)}finally{de.p=a,Gt.T=s}}function jw(e,t,n,i){var s=Gt.T;Gt.T=null;var a=de.p;try{de.p=8,o0(e,t,n,i)}finally{de.p=a,Gt.T=s}}function o0(e,t,n,i){if(Fo){var s=lg(i);if(s===null)Jp(e,t,i,kh,n),Ky(e,i);else if(t2(s,e,t,n,i))i.stopPropagation();else if(Ky(e,i),t&4&&-1<$w.indexOf(e)){for(;s!==null;){var a=Go(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=sr(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Si(r);o.entanglements[1]|=l,r&=~l}bs(a),(fe&6)===0&&(zh=yi()+500,Uc(0,!1))}}break;case 31:case 13:o=Tr(a,2),o!==null&&ii(o,a,2),rf(),r0(a,2)}if(a=lg(i),a===null&&Jp(e,t,i,kh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Jp(e,t,i,null,n)}}function lg(e){return e=gg(e),l0(e)}var kh=null;function l0(e){if(kh=null,e=or(e),e!==null){var t=bc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=nx(t),e!==null)return e;e=null}else if(n===31){if(e=ix(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return kh=e,null}function jS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dT()){case cx:return 2;case ux:return 8;case _h:case pT:return 32;case hx:return 268435456;default:return 32}default:return 32}}var cg=!1,Na=null,Ua=null,La=null,Sc=new Map,Mc=new Map,va=[],$w="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ky(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Sc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mc.delete(t.pointerId)}}function Vl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Go(t),t!==null&&QS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function t2(e,t,n,i,s){switch(t){case"focusin":return Na=Vl(Na,e,t,n,i,s),!0;case"dragenter":return Ua=Vl(Ua,e,t,n,i,s),!0;case"mouseover":return La=Vl(La,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Sc.set(a,Vl(Sc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Mc.set(a,Vl(Mc.get(a)||null,e,t,n,i,s)),!0}return!1}function $S(e){var t=or(e.target);if(t!==null){var n=bc(t);if(n!==null){if(t=n.tag,t===13){if(t=nx(n),t!==null){e.blockedOn=t,M_(e.priority,function(){Jy(n)});return}}else if(t===31){if(t=ix(n),t!==null){e.blockedOn=t,M_(e.priority,function(){Jy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ph(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);fm=i,n.target.dispatchEvent(i),fm=null}else return t=Go(n),t!==null&&QS(t),e.blockedOn=n,!1;t.shift()}return!0}function Qy(e,t,n){ph(e)&&n.delete(t)}function e2(){cg=!1,Na!==null&&ph(Na)&&(Na=null),Ua!==null&&ph(Ua)&&(Ua=null),La!==null&&ph(La)&&(La=null),Sc.forEach(Qy),Mc.forEach(Qy)}function Zu(e,t){e.blockedOn===t&&(e.blockedOn=null,cg||(cg=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,e2)))}var Ju=null;function jy(e){Ju!==e&&(Ju=e,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,function(){Ju===e&&(Ju=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(l0(i||n)===null)continue;break}var a=Go(n);a!==null&&(e.splice(t,3),t-=3,Rm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Ho(e){function t(l){return Zu(l,e)}Na!==null&&Zu(Na,e),Ua!==null&&Zu(Ua,e),La!==null&&Zu(La,e),Sc.forEach(t),Mc.forEach(t);for(var n=0;n<va.length;n++){var i=va[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<va.length&&(n=va[0],n.blockedOn===null);)$S(n),n.blockedOn===null&&va.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[ai]||null;if(typeof a=="function")r||jy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[ai]||null)o=r.formAction;else if(l0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),jy(n)}}}function tM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function c0(e){this._internalRoot=e}cf.prototype.render=c0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,i=Mi();KS(n,i,e,t,null,null)};cf.prototype.unmount=c0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;KS(e.current,2,null,e,null,null),rf(),t[Vo]=null}};function cf(e){this._internalRoot=e}cf.prototype.unstable_scheduleHydration=function(e){if(e){var t=vx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<va.length&&t!==0&&t<va[n].priority;n++);va.splice(n,0,e),n===0&&$S(e)}};var $y=tx.version;if($y!=="19.3.0")throw Error(K(527,$y,"19.3.0"));de.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=nT(t),e=e!==null?sx(e):null,e=e===null?null:e.stateNode,e};var n2={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Gl.isDisabled&&Gl.supportsFiber))try{Ec=Gl.inject(n2),xi=Gl}catch{}var Gl;uf.createRoot=function(e,t){if(!ex(e))throw Error(K(299));var n=!1,i="",s=O1,a=I1,r=P1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=ZS(e,1,!1,null,null,n,i,null,s,a,r,tM),e[Vo]=t.current,t0(e),new c0(t)};uf.hydrateRoot=function(e,t,n){if(!ex(e))throw Error(K(299));var i=!1,s="",a=O1,r=I1,o=P1,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=ZS(e,1,!0,t,n??null,i,s,l,a,r,o,tM),t.context=JS(null),n=t.current,i=Mi(),i=dg(i),s=Aa(i),s.callback=null,wa(n,s,i),n=i,t.current.lanes=n,Ac(t,n),bs(t),e[Vo]=t.current,t0(e),new cf(t)};uf.version="19.3.0"});var sM=ls((iU,iM)=>{"use strict";function nM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nM)}catch(e){console.error(e)}}nM(),iM.exports=eM()});var ME=ls(ap=>{"use strict";var VN=Symbol.for("react.transitional.element"),GN=Symbol.for("react.fragment");function SE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:VN,type:e,key:i,ref:t!==void 0?t:null,props:n}}ap.Fragment=GN;ap.jsx=SE;ap.jsxs=SE});var Iv=ls((OI,bE)=>{"use strict";bE.exports=ME()});var tn=Mu(Eu(),1),TE=Mu(sM(),1);var u0={x:3,z:-1.8},Ic=[{x:-1.55,z:4.3},{x:-.52,z:4.3},{x:.52,z:4.3},{x:1.55,z:4.3}],Es=[{x:-1,z:.15},{x:.85,z:.15},{x:-2.35,z:1.75},{x:2.25,z:1.75}],i2=["Why does the moon glow?","Tell me a little story","What makes rain fall?","Explain how bees dance","How do seeds grow?","Describe a perfect afternoon"],s2=["Compare these two ideas","Remember the earlier details","Summarize a long conversation","Connect the clues together"],aM=28,rM=64,h0=4,a2=3,r2=3,o2=3;var oM=e=>46*(e+1),lM=e=>42+e*36,cM=(e,t)=>(e==="speed"?34:42)+t*(e==="speed"?26:32),uM=e=>16/(1+e*.35),l2=e=>.82+e*.055;var c2=()=>Array.from({length:h0},()=>({speed:0,accuracy:0}));function f0(e=Date.now()){return{version:1,tokens:0,capacity:1,context:!1,workflow:0,stationLevels:Array(h0).fill(0),agentLevels:c2(),completed:0,errors:0,earned:0,seed:41729,nextId:1,savedAt:e}}var hf=class{constructor(t=f0()){this.agents=[];this.requests=[];this.time=0;this.paused=!1;this.speed=1;this.nextArrival=Ic.map((t,n)=>1.8+n*3.7);this.lastResult=null;this.progress={...t,stationLevels:[...t.stationLevels],agentLevels:t.agentLevels.map(n=>({...n}))};for(let n=0;n<this.progress.capacity;n++)this.addAgent()}addAgent(){let t=this.agents.length,{x:n,z:i}=Ic[t];this.agents.push({id:t,state:"idle",x:n,z:i,target:{x:n,z:i},route:[],workLeft:0,workTotal:0,visitedContext:!1})}random(){return this.progress.seed=Math.imul(1664525,this.progress.seed)+1013904223>>>0,this.progress.seed/4294967296}spawnRequest(t){let n=this.progress.context&&this.random()<.38?"context":"chat",i=n==="context"?s2:i2,s=i[Math.floor(this.random()*i.length)],a=(n==="context"?14:9)+Math.floor(this.random()*4)+this.progress.workflow;this.requests.unshift({id:this.progress.nextId++,stationId:t,title:s,kind:n,status:"queued",reward:a,progress:0});let r=this.requests.filter(o=>o.status==="complete"||o.status==="failed").slice(0,12);this.requests=[...this.requests.filter(o=>o.status!=="complete"&&o.status!=="failed"),...r]}assign(){for(let t of this.agents){if(t.taskId!==void 0||t.state==="working")continue;let n=this.requests.find(i=>i.status==="queued"&&i.stationId===t.id);n&&(n.status="assigned",n.agentId=t.id,t.taskId=n.id,t.state="walking",t.visitedContext=!1,t.route=[...n.kind==="context"?[{...u0}]:[],{...Es[t.id]}],t.target=t.route.shift(),t.workTotal=(n.kind==="context"?7.2:5.4+this.random()*1.4)*(1-this.progress.workflow*.1)*(1-this.progress.agentLevels[t.id].speed*.12),t.workLeft=t.workTotal)}}resolve(t){let n=this.requests.find(s=>s.id===t.taskId);if(!n)throw new Error(`Missing request for agent ${t.id}`);let i=this.random()<l2(this.progress.agentLevels[t.id].accuracy);n.progress=1,n.resolvedAt=this.time,this.progress.completed++,i?(n.status="complete",this.progress.tokens+=n.reward,this.progress.earned+=n.reward,this.lastResult={success:i,amount:n.reward,agentId:t.id}):(n.status="failed",n.loss=Math.min(this.progress.tokens,n.kind==="context"?5:3),this.progress.tokens-=n.loss,this.progress.errors++,this.lastResult={success:i,amount:n.loss,agentId:t.id}),this.nextArrival[n.stationId]=Math.max(this.nextArrival[n.stationId],3.5),t.taskId=void 0,t.state="returning",t.target={...Ic[t.id]}}move(t,n){let i=t.target.x-t.x,s=t.target.z-t.z,a=Math.hypot(i,s),r=2.05*n;if(a>r){t.x+=i/a*r,t.z+=s/a*r;return}if(t.x=t.target.x,t.z=t.target.z,t.state==="returning"){t.state="idle";return}t.target.x===u0.x&&t.target.z===u0.z&&(t.visitedContext=!0);let o=t.route.shift();if(o)t.target=o;else{t.state="working";let l=this.requests.find(c=>c.id===t.taskId);l&&(l.status="working")}}update(t){if(this.paused||t<=0)return;let n=Math.min(t*this.speed,5);for(;n>0;){let i=Math.min(n,.03333333333333333);n-=i,this.time+=i;for(let s=0;s<this.progress.capacity;s++){this.nextArrival[s]-=i;let a=this.requests.some(r=>r.stationId===s&&(r.status==="queued"||r.status==="assigned"||r.status==="working"));this.nextArrival[s]<=0&&!a&&(this.spawnRequest(s),this.nextArrival[s]=uM(this.progress.stationLevels[s]))}this.assign();for(let s of this.agents)if(s.state==="walking"||s.state==="returning")this.move(s,i);else if(s.state==="working"){s.workLeft=Math.max(0,s.workLeft-i);let a=this.requests.find(r=>r.id===s.taskId);if(!a)throw new Error(`Missing request for agent ${s.id}`);a.progress=1-s.workLeft/s.workTotal,s.workLeft===0&&this.resolve(s)}}}buyCapacity(){return this.progress.tokens<aM||this.progress.capacity>=h0?!1:(this.progress.tokens-=aM,this.progress.capacity++,this.addAgent(),this.nextArrival[this.progress.capacity-1]=1.8,!0)}buyWorkflow(){return this.progress.capacity<2||this.progress.workflow>=a2||this.progress.tokens<oM(this.progress.workflow)?!1:(this.progress.tokens-=oM(this.progress.workflow),this.progress.workflow++,!0)}buyStation(t){if(!Number.isInteger(t)||t<0||t>=this.progress.capacity)return!1;let n=this.progress.stationLevels[t];return n>=r2||this.progress.tokens<lM(n)?!1:(this.progress.tokens-=lM(n),this.progress.stationLevels[t]++,this.nextArrival[t]=Math.min(this.nextArrival[t],uM(this.progress.stationLevels[t])),!0)}trainAgent(t,n){if(!Number.isInteger(t)||t<0||t>=this.progress.capacity||n!=="speed"&&n!=="accuracy")return!1;let i=this.progress.agentLevels[t][n];return i>=o2||this.progress.tokens<cM(n,i)?!1:(this.progress.tokens-=cM(n,i),this.progress.agentLevels[t][n]++,!0)}unlockContext(){return this.progress.tokens<rM||this.progress.context||this.progress.capacity<2?!1:(this.progress.tokens-=rM,this.progress.context=!0,!0)}save(t=Date.now()){return{...this.progress,savedAt:t,stationLevels:[...this.progress.stationLevels],agentLevels:this.progress.agentLevels.map(n=>({...n}))}}};var d0=[{time:0,sun:0,ambient:.54,lamp:1.5,warmth:.35,sunColor:10200532,skyColor:4337747,bounceColor:10516621},{time:.19,sun:.08,ambient:.82,lamp:1.2,warmth:.7,sunColor:16746085,skyColor:14448789,bounceColor:15049099},{time:.32,sun:2.75,ambient:1.08,lamp:.55,warmth:.95,sunColor:16756328,skyColor:8639179,bounceColor:15120529},{time:.5,sun:3.25,ambient:1.18,lamp:.32,warmth:.76,sunColor:16765066,skyColor:9034192,bounceColor:15451552},{time:.67,sun:2.65,ambient:1.02,lamp:.72,warmth:1,sunColor:16749414,skyColor:14785442,bounceColor:15575694},{time:.79,sun:.09,ambient:.8,lamp:1.4,warmth:.8,sunColor:16022403,skyColor:6701415,bounceColor:10778760},{time:1,sun:0,ambient:.54,lamp:1.5,warmth:.35,sunColor:10200532,skyColor:4337747,bounceColor:10516621}];function p0(e,t,n){let i=s=>Math.round((e>>s&255)*(1-n)+(t>>s&255)*n);return i(16)<<16|i(8)<<8|i(0)}function ff(e,t=0){let n=((e/240+.35+t)%1+1)%1,i=Math.max(0,d0.findIndex(p=>p.time>=n)),s=d0[Math.max(i,1)],a=d0[Math.max(i-1,0)],r=(n-a.time)/(s.time-a.time||1),o=r*r*(3-2*r),l=p=>a[p]+(s[p]-a[p])*o,c=Math.floor(n*1440+1e-7),h=Math.floor(c/60),d=c%60,f=Math.max(Math.min(1,Math.max(0,(.19-n)/.12)),Math.min(1,Math.max(0,(n-.79)/.12)));return{time:n,hour:h,label:`${h.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`,sun:l("sun"),moon:f*.45,ambient:l("ambient"),lamp:l("lamp"),warmth:l("warmth"),sunColor:p0(a.sunColor,s.sunColor,o),skyColor:p0(a.skyColor,s.skyColor,o),bounceColor:p0(a.bounceColor,s.bounceColor,o),sunX:Math.cos((n-.47)*Math.PI*2)*6,sunY:4.2+Math.max(0,Math.sin((n-.19)/.6*Math.PI))*5.2}}var PM=0,Y0=1,zM=2;var Z0=1,BM=2,Xi=3,na=0,An=1,wn=2,ra=0,Ur=1,Fr=2,J0=3,K0=4,FM=5,Za=100,HM=101,VM=102,GM=103,kM=104,XM=200,WM=201,qM=202,YM=203,zf=204,Bf=205,ZM=206,JM=207,KM=208,QM=209,jM=210,$M=211,tb=212,eb=213,nb=214,ld=0,cd=1,ud=2,Lr=3,hd=4,fd=5,dd=6,pd=7,Q0=0,ib=1,sb=2,oa=0,ab=1,rb=2,ob=3,md=4,lb=5,cb=6,ub=7;var j0=300,Hr=301,Vr=302,gd=303,vd=304,du=306,Ff=1e3,Ya=1001,Hf=1002,mn=1003,hb=1004;var pu=1005;var Tn=1006,_d=1007;var ss=1008;var as=1009,$0=1010,tv=1011,Ml=1012,yd=1013,$a=1014,Rs=1015,bl=1016,xd=1017,Sd=1018,El=1020,ev=35902,nv=35899,iv=1021,sv=1022,Wi=1023,hl=1026,Tl=1027,av=1028,Md=1029,rv=1030,bd=1031;var Ed=1033,mu=33776,gu=33777,vu=33778,_u=33779,Td=35840,Ad=35841,wd=35842,Rd=35843,Cd=36196,Dd=37492,Nd=37496,Ud=37808,Ld=37809,Od=37810,Id=37811,Pd=37812,zd=37813,Bd=37814,Fd=37815,Hd=37816,Vd=37817,Gd=37818,kd=37819,Xd=37820,Wd=37821,qd=36492,Yd=36494,Zd=36495,Jd=36283,Kd=36284,Qd=36285,jd=36286;var qc=2300,Vf=2301,Pf=2302,F0=2400,H0=2401,V0=2402;var fb=3200,db=3201;var ov=0,pb=1,la="",an="srgb",Or="srgb-linear",Yc="linear",Se="srgb";var Nr=7680;var G0=519,mb=512,gb=513,vb=514,lv=515,_b=516,yb=517,xb=518,Sb=519,Gf=35044;var cv="300 es",ns=2e3,Zc=2001;var ia=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hM=1234567,Xc=Math.PI/180,fl=180/Math.PI;function ta(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[e&255]+Ln[e>>8&255]+Ln[e>>16&255]+Ln[e>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function oe(e,t,n){return Math.max(t,Math.min(n,e))}function uv(e,t){return(e%t+t)%t}function u2(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function h2(e,t,n){return e!==t?(n-e)/(t-e):0}function Wc(e,t,n){return(1-n)*e+n*t}function f2(e,t,n,i){return Wc(e,t,1-Math.exp(-n*i))}function d2(e,t=1){return t-Math.abs(uv(e,t*2)-t)}function p2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function m2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function g2(e,t){return e+Math.floor(Math.random()*(t-e+1))}function v2(e,t){return e+Math.random()*(t-e)}function _2(e){return e*(.5-Math.random())}function y2(e){e!==void 0&&(hM=e);let t=hM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function x2(e){return e*Xc}function S2(e){return e*fl}function M2(e){return(e&e-1)===0&&e!==0}function b2(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function E2(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function T2(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ye(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Kn={DEG2RAD:Xc,RAD2DEG:fl,generateUUID:ta,clamp:oe,euclideanModulo:uv,mapLinear:u2,inverseLerp:h2,lerp:Wc,damp:f2,pingpong:d2,smoothstep:p2,smootherstep:m2,randInt:g2,randFloat:v2,randFloatSpread:_2,seededRandom:y2,degToRad:x2,radToDeg:S2,isPowerOfTwo:M2,ceilPowerOfTwo:b2,floorPowerOfTwo:E2,setQuaternionFromProperEuler:T2,normalize:ye,denormalize:es},Qt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},sa=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let m=1-o,u=l*f+c*p+h*g+d*x,v=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let T=Math.sqrt(y),w=Math.atan2(T,u*v);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}let _=o*v;if(l=l*m+f*_,c=c*m+p*_,h=h*m+g*_,d=d*m+x*_,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+h*d+l*p-c*f,t[n+1]=l*g+h*f+c*d-o*p,t[n+2]=c*g+h*p+o*f-l*d,t[n+3]=h*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(fM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(fM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return m0.copy(this).projectOnVector(t),this.sub(m0)}reflect(t){return this.sub(m0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},m0=new I,fM=new sa,Jt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],u=s[6],v=s[1],y=s[4],_=s[7],T=s[2],w=s[5],C=s[8];return a[0]=r*x+o*v+l*T,a[3]=r*m+o*y+l*w,a[6]=r*u+o*_+l*C,a[1]=c*x+h*v+d*T,a[4]=c*m+h*y+d*w,a[7]=c*u+h*_+d*C,a[2]=f*x+p*v+g*T,a[5]=f*m+p*y+g*w,a[8]=f*u+p*_+g*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*a,p=c*a-r*l,g=n*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*r)*x,t[3]=f*x,t[4]=(h*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(g0.makeScale(t,n)),this}rotate(t){return this.premultiply(g0.makeRotation(-t)),this}translate(t,n){return this.premultiply(g0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},g0=new Jt;function hv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Jc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Mb(){let e=Jc("canvas");return e.style.display="block",e}var dM={};function dl(e){e in dM||(dM[e]=!0,console.warn(e))}function bb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var pM=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mM=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A2(){let e={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Se&&(s.r=ea(s.r),s.g=ea(s.g),s.b=ea(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Se&&(s.r=ul(s.r),s.g=ul(s.g),s.b=ul(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===la?Yc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return dl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return dl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Or]:{primaries:t,whitePoint:i,transfer:Yc,toXYZ:pM,fromXYZ:mM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:pM,fromXYZ:mM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),e}var ce=A2();function ea(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ul(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Zo,kf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zo===void 0&&(Zo=Jc("canvas")),Zo.width=t.width,Zo.height=t.height;let s=Zo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Zo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Jc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ea(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ea(n[i]/255)*255):n[i]=ea(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},w2=0,pl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w2++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(v0(s[r].image)):a.push(v0(s[r]))}else a=v0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function v0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?kf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var R2=0,_0=new I,ri=class e extends ia{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ya,s=Ya,a=Tn,r=ss,o=Wi,l=as,c=e.DEFAULT_ANISOTROPY,h=la){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=ta(),this.name="",this.source=new pl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_0).x}get height(){return this.source.getSize(_0).y}get depth(){return this.source.getSize(_0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==j0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ff:t.x=t.x-Math.floor(t.x);break;case Ya:t.x=t.x<0?0:1;break;case Hf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ff:t.y=t.y-Math.floor(t.y);break;case Ya:t.y=t.y<0?0:1;break;case Hf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=j0;ri.DEFAULT_ANISOTROPY=1;var xe=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,_=(p+1)/2,T=(u+1)/2,w=(h+f)/4,C=(d+x)/4,N=(g+m)/4;return y>_&&y>T?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=w/i,a=C/i):_>T?_<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(_),i=w/s,a=N/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=C/a,s=N/a),this.set(i,s,a,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this.w=oe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this.w=oe(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xf=class extends ia{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new xe(0,0,t,n),this.scissorTest=!1,this.viewport=new xe(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new ri(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new pl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=class extends Xf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Kc=class extends ri{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wf=class extends ri{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ja=class{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ji.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ji.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=ji.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ji):ji.fromBufferAttribute(a,r),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),df.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),df.copy(i.boundingBox)),df.applyMatrix4(t.matrixWorld),this.union(df)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pc),pf.subVectors(this.max,Pc),Jo.subVectors(t.a,Pc),Ko.subVectors(t.b,Pc),Qo.subVectors(t.c,Pc),Va.subVectors(Ko,Jo),Ga.subVectors(Qo,Ko),wr.subVectors(Jo,Qo);let n=[0,-Va.z,Va.y,0,-Ga.z,Ga.y,0,-wr.z,wr.y,Va.z,0,-Va.x,Ga.z,0,-Ga.x,wr.z,0,-wr.x,-Va.y,Va.x,0,-Ga.y,Ga.x,0,-wr.y,wr.x,0];return!y0(n,Jo,Ko,Qo,pf)||(n=[1,0,0,0,1,0,0,0,1],!y0(n,Jo,Ko,Qo,pf))?!1:(mf.crossVectors(Va,Ga),n=[mf.x,mf.y,mf.z],y0(n,Jo,Ko,Qo,pf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zs=[new I,new I,new I,new I,new I,new I,new I,new I],ji=new I,df=new Ja,Jo=new I,Ko=new I,Qo=new I,Va=new I,Ga=new I,wr=new I,Pc=new I,pf=new I,mf=new I,Rr=new I;function y0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Rr.fromArray(e,a);let o=s.x*Math.abs(Rr.x)+s.y*Math.abs(Rr.y)+s.z*Math.abs(Rr.z),l=t.dot(Rr),c=n.dot(Rr),h=i.dot(Rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var C2=new Ja,zc=new I,x0=new I,Ir=class{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):C2.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zc.subVectors(t,this.center);let n=zc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(zc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(x0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zc.copy(t.center).add(x0)),this.expandByPoint(zc.copy(t.center).sub(x0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Js=new I,S0=new I,gf=new I,ka=new I,M0=new I,vf=new I,b0=new I,Qc=class{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Js)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Js.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Js.copy(this.origin).addScaledVector(this.direction,n),Js.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){S0.copy(t).add(n).multiplyScalar(.5),gf.copy(n).sub(t).normalize(),ka.copy(this.origin).sub(S0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(gf),o=ka.dot(this.direction),l=-ka.dot(gf),c=ka.lengthSq(),h=Math.abs(1-r*r),d,f,p,g;if(h>0)if(d=r*l-o,f=r*o-l,g=a*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(S0).addScaledVector(gf,f),p}intersectSphere(t,n){Js.subVectors(t.center,this.origin);let i=Js.dot(this.direction),s=Js.dot(Js)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Js)!==null}intersectTriangle(t,n,i,s,a){M0.subVectors(n,t),vf.subVectors(i,t),b0.crossVectors(M0,vf);let r=this.direction.dot(b0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ka.subVectors(this.origin,t);let l=o*this.direction.dot(vf.crossVectors(ka,vf));if(l<0)return null;let c=o*this.direction.dot(M0.cross(ka));if(c<0||l+c>r)return null;let h=-o*ka.dot(b0);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class e{constructor(t,n,i,s,a,r,o,l,c,h,d,f,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,f,p,g,x,m)}set(t,n,i,s,a,r,o,l,c,h,d,f,p,g,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/jo.setFromMatrixColumn(t,0).length(),a=1/jo.setFromMatrixColumn(t,1).length(),r=1/jo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*h,p=r*d,g=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,g=c*h,x=c*d;n[0]=f+x*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-g,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,g=c*h,x=c*d;n[0]=f-x*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*h,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,p=r*d,g=o*h,x=o*d;n[0]=l*h,n[4]=g*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=g*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+g,n[10]=f-x*d}else if(t.order==="XZY"){let f=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=r*h,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D2,t,N2)}lookAt(t,n,i){let s=this.elements;return Ti.subVectors(t,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Xa.crossVectors(i,Ti),Xa.lengthSq()===0&&(Math.abs(i.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Xa.crossVectors(i,Ti)),Xa.normalize(),_f.crossVectors(Ti,Xa),s[0]=Xa.x,s[4]=_f.x,s[8]=Ti.x,s[1]=Xa.y,s[5]=_f.y,s[9]=Ti.y,s[2]=Xa.z,s[6]=_f.z,s[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],v=i[3],y=i[7],_=i[11],T=i[15],w=s[0],C=s[4],N=s[8],E=s[12],M=s[1],U=s[5],z=s[9],V=s[13],q=s[2],J=s[6],Y=s[10],it=s[14],k=s[3],ct=s[7],gt=s[11],yt=s[15];return a[0]=r*w+o*M+l*q+c*k,a[4]=r*C+o*U+l*J+c*ct,a[8]=r*N+o*z+l*Y+c*gt,a[12]=r*E+o*V+l*it+c*yt,a[1]=h*w+d*M+f*q+p*k,a[5]=h*C+d*U+f*J+p*ct,a[9]=h*N+d*z+f*Y+p*gt,a[13]=h*E+d*V+f*it+p*yt,a[2]=g*w+x*M+m*q+u*k,a[6]=g*C+x*U+m*J+u*ct,a[10]=g*N+x*z+m*Y+u*gt,a[14]=g*E+x*V+m*it+u*yt,a[3]=v*w+y*M+_*q+T*k,a[7]=v*C+y*U+_*J+T*ct,a[11]=v*N+y*z+_*Y+T*gt,a[15]=v*E+y*V+_*it+T*yt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+x*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*r*d-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],u=t[15],v=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,y=g*f*c-h*m*c-g*l*p+r*m*p+h*l*u-r*f*u,_=h*x*c-g*d*c+g*o*p-r*x*p-h*o*u+r*d*u,T=g*d*l-h*x*l-g*o*f+r*x*f+h*o*m-r*d*m,w=n*v+i*y+s*_+a*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=v*C,t[1]=(x*f*a-d*m*a-x*s*p+i*m*p+d*s*u-i*f*u)*C,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*u+i*l*u)*C,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*C,t[4]=y*C,t[5]=(h*m*a-g*f*a+g*s*p-n*m*p-h*s*u+n*f*u)*C,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*u-n*l*u)*C,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*p+n*l*p)*C,t[8]=_*C,t[9]=(g*d*a-h*x*a-g*i*p+n*x*p+h*i*u-n*d*u)*C,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*u+n*o*u)*C,t[11]=(h*o*a-r*d*a-h*i*c+n*d*c+r*i*p-n*o*p)*C,t[12]=T*C,t[13]=(h*x*s-g*d*s+g*i*f-n*x*f-h*i*m+n*d*m)*C,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*C,t[15]=(r*d*s-h*o*s+h*i*l-n*d*l-r*i*f+n*o*f)*C,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,f=a*c,p=a*h,g=a*d,x=r*h,m=r*d,u=o*d,v=l*c,y=l*h,_=l*d,T=i.x,w=i.y,C=i.z;return s[0]=(1-(x+u))*T,s[1]=(p+_)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(p-_)*w,s[5]=(1-(f+u))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*C,s[9]=(m-v)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=jo.set(s[0],s[1],s[2]).length(),r=jo.set(s[4],s[5],s[6]).length(),o=jo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],$i.copy(this);let c=1/a,h=1/r,d=1/o;return $i.elements[0]*=c,$i.elements[1]*=c,$i.elements[2]*=c,$i.elements[4]*=h,$i.elements[5]*=h,$i.elements[6]*=h,$i.elements[8]*=d,$i.elements[9]*=d,$i.elements[10]*=d,n.setFromRotationMatrix($i),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=ns,l=!1){let c=this.elements,h=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===ns)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Zc)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=ns,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===ns)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Zc)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},jo=new I,$i=new Ve,D2=new I(0,0,0),N2=new I(1,1,1),Xa=new I,_f=new I,Ti=new I,gM=new Ve,vM=new sa,is=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-oe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return gM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return vM.setFromEuler(this),this.setFromQuaternion(vM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};is.DEFAULT_ORDER="XYZ";var jc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},U2=0,_M=new I,$o=new sa,Ks=new Ve,yf=new I,Bc=new I,L2=new I,O2=new sa,yM=new I(1,0,0),xM=new I(0,1,0),SM=new I(0,0,1),MM={type:"added"},I2={type:"removed"},tl={type:"childadded",child:null},E0={type:"childremoved",child:null},gn=class e extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U2++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new is,i=new sa,s=new I(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Jt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return $o.setFromAxisAngle(t,n),this.quaternion.multiply($o),this}rotateOnWorldAxis(t,n){return $o.setFromAxisAngle(t,n),this.quaternion.premultiply($o),this}rotateX(t){return this.rotateOnAxis(yM,t)}rotateY(t){return this.rotateOnAxis(xM,t)}rotateZ(t){return this.rotateOnAxis(SM,t)}translateOnAxis(t,n){return _M.copy(t).applyQuaternion(this.quaternion),this.position.add(_M.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(yM,t)}translateY(t){return this.translateOnAxis(xM,t)}translateZ(t){return this.translateOnAxis(SM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ks.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?yf.copy(t):yf.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Bc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ks.lookAt(Bc,yf,this.up):Ks.lookAt(yf,Bc,this.up),this.quaternion.setFromRotationMatrix(Ks),s&&(Ks.extractRotation(s.matrixWorld),$o.setFromRotationMatrix(Ks),this.quaternion.premultiply($o.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(MM),tl.child=t,this.dispatchEvent(tl),tl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(I2),E0.child=t,this.dispatchEvent(E0),E0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ks.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ks.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ks),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(MM),tl.child=t,this.dispatchEvent(tl),tl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bc,t,L2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bc,O2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};gn.DEFAULT_UP=new I(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ts=new I,Qs=new I,T0=new I,js=new I,el=new I,nl=new I,bM=new I,A0=new I,w0=new I,R0=new I,C0=new xe,D0=new xe,N0=new xe,$s=class e{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),ts.subVectors(t,n),s.cross(ts);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){ts.subVectors(s,n),Qs.subVectors(i,n),T0.subVectors(t,n);let r=ts.dot(ts),o=ts.dot(Qs),l=ts.dot(T0),c=Qs.dot(Qs),h=Qs.dot(T0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,js)===null?!1:js.x>=0&&js.y>=0&&js.x+js.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,js)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,js.x),l.addScaledVector(r,js.y),l.addScaledVector(o,js.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return C0.setScalar(0),D0.setScalar(0),N0.setScalar(0),C0.fromBufferAttribute(t,n),D0.fromBufferAttribute(t,i),N0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(C0,a.x),r.addScaledVector(D0,a.y),r.addScaledVector(N0,a.z),r}static isFrontFacing(t,n,i,s){return ts.subVectors(i,n),Qs.subVectors(t,n),ts.cross(Qs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ts.subVectors(this.c,this.b),Qs.subVectors(this.a,this.b),ts.cross(Qs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;el.subVectors(s,i),nl.subVectors(a,i),A0.subVectors(t,i);let l=el.dot(A0),c=nl.dot(A0);if(l<=0&&c<=0)return n.copy(i);w0.subVectors(t,s);let h=el.dot(w0),d=nl.dot(w0);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(el,r);R0.subVectors(t,a);let p=el.dot(R0),g=nl.dot(R0);if(g>=0&&p<=g)return n.copy(a);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(nl,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return bM.subVectors(a,s),o=(d-h)/(d-h+(p-g)),n.copy(s).addScaledVector(bM,o);let u=1/(m+x+f);return r=x*u,o=f*u,n.copy(i).addScaledVector(el,r).addScaledVector(nl,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Eb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},xf={h:0,s:0,l:0};function U0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var qt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ce.workingColorSpace){return this.r=t,this.g=n,this.b=i,ce.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ce.workingColorSpace){if(t=uv(t,1),n=oe(n,0,1),i=oe(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=U0(r,a,t+1/3),this.g=U0(r,a,t),this.b=U0(r,a,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,n=an){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=an){let i=Eb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ea(t.r),this.g=ea(t.g),this.b=ea(t.b),this}copyLinearToSRGB(t){return this.r=ul(t.r),this.g=ul(t.g),this.b=ul(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ce.workingToColorSpace(On.copy(this),t),Math.round(oe(On.r*255,0,255))*65536+Math.round(oe(On.g*255,0,255))*256+Math.round(oe(On.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ce.workingColorSpace){ce.workingToColorSpace(On.copy(this),n);let i=On.r,s=On.g,a=On.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ce.workingColorSpace){return ce.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=an){ce.workingToColorSpace(On.copy(this),t);let n=On.r,i=On.g,s=On.b;return t!==an?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Wa),this.setHSL(Wa.h+t,Wa.s+n,Wa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Wa),t.getHSL(xf);let i=Wc(Wa.h,xf.h,n),s=Wc(Wa.s,xf.s,n),a=Wc(Wa.l,xf.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new qt;qt.NAMES=Eb;var P2=0,ws=class extends ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Ur,this.side=na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Bf,this.blendEquation=Za,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(i.blending=this.blending),this.side!==na&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Bf&&(i.blendDst=this.blendDst),this.blendEquation!==Za&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pn=class extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var $e=new I,Sf=new Qt,z2=0,pn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Gf,this.updateRanges=[],this.gpuType=Rs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sf.fromBufferAttribute(this,n),Sf.applyMatrix3(t),this.setXY(n,Sf.x,Sf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.applyMatrix3(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.applyMatrix4(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.applyNormalMatrix(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.transformDirection(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ye(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(t,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(t,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(t,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ye(n,this.array),i=ye(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array),a=ye(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gf&&(t.usage=this.usage),t}};var $c=class extends pn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var tu=class extends pn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var In=class extends pn{constructor(t,n,i){super(new Float32Array(t),n,i)}},B2=0,Vi=new Ve,L0=new gn,il=new I,Ai=new Ja,Fc=new Ja,dn=new I,Jn=class e extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B2++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hv(t)?tu:$c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Jt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vi.makeRotationFromQuaternion(t),this.applyMatrix4(Vi),this}rotateX(t){return Vi.makeRotationX(t),this.applyMatrix4(Vi),this}rotateY(t){return Vi.makeRotationY(t),this.applyMatrix4(Vi),this}rotateZ(t){return Vi.makeRotationZ(t),this.applyMatrix4(Vi),this}translate(t,n,i){return Vi.makeTranslation(t,n,i),this.applyMatrix4(Vi),this}scale(t,n,i){return Vi.makeScale(t,n,i),this.applyMatrix4(Vi),this}lookAt(t){return L0.lookAt(t),L0.updateMatrix(),this.applyMatrix4(L0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(il).negate(),this.translate(il.x,il.y,il.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new In(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Fc.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(Ai.min,Fc.min),Ai.expandByPoint(dn),dn.addVectors(Ai.max,Fc.max),Ai.expandByPoint(dn)):(Ai.expandByPoint(Fc.min),Ai.expandByPoint(Fc.max))}Ai.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)dn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(dn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dn.fromBufferAttribute(o,c),l&&(il.fromBufferAttribute(t,c),dn.add(il)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new I,l[N]=new I;let c=new I,h=new I,d=new I,f=new Qt,p=new Qt,g=new Qt,x=new I,m=new I;function u(N,E,M){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(a,N),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),o[N].add(x),o[E].add(x),o[M].add(x),l[N].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let N=0,E=v.length;N<E;++N){let M=v[N],U=M.start,z=M.count;for(let V=U,q=U+z;V<q;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let y=new I,_=new I,T=new I,w=new I;function C(N){T.fromBufferAttribute(s,N),w.copy(T);let E=o[N];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),_.crossVectors(w,E);let U=_.dot(l[N])<0?-1:1;r.setXYZW(N,y.x,y.y,y.z,U)}for(let N=0,E=v.length;N<E;++N){let M=v[N],U=M.start,z=M.count;for(let V=U,q=U+z;V<q;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new I,a=new I,r=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)dn.fromBufferAttribute(t,n),dn.normalize(),t.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new pn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},EM=new Ve,Cr=new Qc,Mf=new Ir,TM=new I,bf=new I,Ef=new I,Tf=new I,O0=new I,Af=new I,AM=new I,wf=new I,Me=class extends gn{constructor(t=new Jn,n=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Af.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(O0.fromBufferAttribute(d,t),r?Af.addScaledVector(O0,h):Af.addScaledVector(O0.sub(n),h))}n.add(Af)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mf.copy(i.boundingSphere),Mf.applyMatrix4(a),Cr.copy(t.ray).recast(t.near),!(Mf.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Mf,TM)===null||Cr.origin.distanceToSquared(TM)>(t.far-t.near)**2))&&(EM.copy(a).invert(),Cr.copy(t.ray).applyMatrix4(EM),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Cr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=r[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,T=y;_<T;_+=3){let w=o.getX(_),C=o.getX(_+1),N=o.getX(_+2);s=Rf(this,u,t,i,c,h,d,w,C,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let v=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=Rf(this,r,t,i,c,h,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=r[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,T=y;_<T;_+=3){let w=_,C=_+1,N=_+2;s=Rf(this,u,t,i,c,h,d,w,C,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let v=m,y=m+1,_=m+2;s=Rf(this,r,t,i,c,h,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function F2(e,t,n,i,s,a,r,o){let l;if(t.side===An?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===na,o),l===null)return null;wf.copy(o),wf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(wf);return c<n.near||c>n.far?null:{distance:c,point:wf.clone(),object:e}}function Rf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,bf),e.getVertexPosition(l,Ef),e.getVertexPosition(c,Tf);let h=F2(e,t,n,i,bf,Ef,Tf,AM);if(h){let d=new I;$s.getBarycoord(AM,bf,Ef,Tf,d),s&&(h.uv=$s.getInterpolatedAttribute(s,o,l,c,d,new Qt)),a&&(h.uv1=$s.getInterpolatedAttribute(a,o,l,c,d,new Qt)),r&&(h.normal=$s.getInterpolatedAttribute(r,o,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};$s.getNormal(bf,Ef,Tf,f.normal),h.face=f,h.barycoord=d}return h}var Ka=class e extends Jn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(h,3)),this.setAttribute("uv",new In(d,2));function g(x,m,u,v,y,_,T,w,C,N,E){let M=_/C,U=T/N,z=_/2,V=T/2,q=w/2,J=C+1,Y=N+1,it=0,k=0,ct=new I;for(let gt=0;gt<Y;gt++){let yt=gt*U-V;for(let Yt=0;Yt<J;Yt++){let rt=Yt*M-z;ct[x]=rt*v,ct[m]=yt*y,ct[u]=q,c.push(ct.x,ct.y,ct.z),ct[x]=0,ct[m]=0,ct[u]=w>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(Yt/C),d.push(1-gt/N),it+=1}}for(let gt=0;gt<N;gt++)for(let yt=0;yt<C;yt++){let Yt=f+yt+J*gt,rt=f+yt+J*(gt+1),Kt=f+(yt+1)+J*(gt+1),Ft=f+(yt+1)+J*gt;l.push(Yt,rt,Ft),l.push(rt,Kt,Ft),k+=6}o.addGroup(p,k,E),p+=k,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Bn(e){let t={};for(let n=0;n<e.length;n++){let i=Gr(e[n]);for(let s in i)t[s]=i[s]}return t}function H2(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function fv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Tb={clone:Gr,merge:Bn},V2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V2,this.fragmentShader=G2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=H2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},eu=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ns,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qa=new I,wM=new Qt,RM=new Qt,En=class extends eu{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=fl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,n){return this.getViewBounds(t,wM,RM),n.subVectors(RM,wM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},sl=-90,al=1,qf=class extends gn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new En(sl,al,t,n);s.layers=this.layers,this.add(s);let a=new En(sl,al,t,n);a.layers=this.layers,this.add(a);let r=new En(sl,al,t,n);r.layers=this.layers,this.add(r);let o=new En(sl,al,t,n);o.layers=this.layers,this.add(o);let l=new En(sl,al,t,n);l.layers=this.layers,this.add(l);let c=new En(sl,al,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===ns)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},nu=class extends ri{constructor(t=[],n=Hr,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yf=class extends As{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new nu(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ka(5,5,5),a=new oi({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:ra});a.uniforms.tEquirect.value=n;let r=new Me(s,a),o=n.minFilter;return n.minFilter===ss&&(n.minFilter=Tn),new qf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Gi=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},k2={type:"move"},ml=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(k2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Gi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var iu=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Zf=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Gf,this.updateRanges=[],this.version=0,this.uuid=ta()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zn=new I,su=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.applyMatrix4(t),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.applyNormalMatrix(t),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Zn.fromBufferAttribute(this,n),Zn.transformDirection(t),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=es(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=es(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=es(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=es(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ye(n,this.array),i=ye(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array),a=ye(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return new pn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gl=class extends ws{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rl,Hc=new I,ol=new I,ll=new I,cl=new Qt,Vc=new Qt,Ab=new Ve,Cf=new I,Gc=new I,Df=new I,CM=new Qt,I0=new Qt,DM=new Qt,vl=class extends gn{constructor(t=new gl){if(super(),this.isSprite=!0,this.type="Sprite",rl===void 0){rl=new Jn;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zf(n,5);rl.setIndex([0,1,2,0,2,3]),rl.setAttribute("position",new su(i,3,0,!1)),rl.setAttribute("uv",new su(i,2,3,!1))}this.geometry=rl,this.material=t,this.center=new Qt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ol.setFromMatrixScale(this.matrixWorld),Ab.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ll.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ol.multiplyScalar(-ll.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let r=this.center;Nf(Cf.set(-.5,-.5,0),ll,r,ol,s,a),Nf(Gc.set(.5,-.5,0),ll,r,ol,s,a),Nf(Df.set(.5,.5,0),ll,r,ol,s,a),CM.set(0,0),I0.set(1,0),DM.set(1,1);let o=t.ray.intersectTriangle(Cf,Gc,Df,!1,Hc);if(o===null&&(Nf(Gc.set(-.5,.5,0),ll,r,ol,s,a),I0.set(0,1),o=t.ray.intersectTriangle(Cf,Df,Gc,!1,Hc),o===null))return;let l=t.ray.origin.distanceTo(Hc);l<t.near||l>t.far||n.push({distance:l,point:Hc.clone(),uv:$s.getInterpolation(Hc,Cf,Gc,Df,CM,I0,DM,new Qt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Nf(e,t,n,i,s,a){cl.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Vc.x=a*cl.x-s*cl.y,Vc.y=s*cl.x+a*cl.y):Vc.copy(cl),e.copy(t),e.x+=Vc.x,e.y+=Vc.y,e.applyMatrix4(Ab)}var P0=new I,X2=new I,W2=new Jt,Ts=class{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=P0.subVectors(i,n).cross(X2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(P0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||W2.getNormalMatrix(t),s=this.coplanarPoint(P0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dr=new Ir,q2=new Qt(.5,.5),Uf=new I,_l=class{constructor(t=new Ts,n=new Ts,i=new Ts,s=new Ts,a=new Ts,r=new Ts){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ns,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],p=a[7],g=a[8],x=a[9],m=a[10],u=a[11],v=a[12],y=a[13],_=a[14],T=a[15];if(s[0].setComponents(c-r,p-h,u-g,T-v).normalize(),s[1].setComponents(c+r,p+h,u+g,T+v).normalize(),s[2].setComponents(c+o,p+d,u+x,T+y).normalize(),s[3].setComponents(c-o,p-d,u-x,T-y).normalize(),i)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,p-f,u-m,T-_).normalize();else if(s[4].setComponents(c-l,p-f,u-m,T-_).normalize(),n===ns)s[5].setComponents(c+l,p+f,u+m,T+_).normalize();else if(n===Zc)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);let n=q2.distanceTo(t.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Uf.x=s.normal.x>0?t.max.x:t.min.x,Uf.y=s.normal.y>0?t.max.y:t.min.y,Uf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yl=class extends ws{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},NM=new Ve,k0=new Qc,Lf=new Ir,Of=new I,xl=class extends gn{constructor(t=new Jn,n=new yl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lf.copy(i.boundingSphere),Lf.applyMatrix4(s),Lf.radius+=a,t.ray.intersectsSphere(Lf)===!1)return;NM.copy(s).invert(),k0.copy(t.ray).applyMatrix4(NM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);Of.fromBufferAttribute(d,m),UM(Of,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=f,x=p;g<x;g++)Of.fromBufferAttribute(d,g),UM(Of,g,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function UM(e,t,n,i,s,a,r){let o=k0.distanceSqToPoint(e);if(o<n){let l=new I;k0.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var ki=class extends ri{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},au=class extends ri{constructor(t,n,i=$a,s,a,r,o=mn,l=mn,c,h=hl,d=1){if(h!==hl&&h!==Tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ru=class extends ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ou=class e extends Jn{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],d=[],f=[],p=[],g=0,x=[],m=i/2,u=0;v(),r===!1&&(t>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new In(d,3)),this.setAttribute("normal",new In(f,3)),this.setAttribute("uv",new In(p,2));function v(){let _=new I,T=new I,w=0,C=(n-t)/i;for(let N=0;N<=a;N++){let E=[],M=N/a,U=M*(n-t)+t;for(let z=0;z<=s;z++){let V=z/s,q=V*l+o,J=Math.sin(q),Y=Math.cos(q);T.x=U*J,T.y=-M*i+m,T.z=U*Y,d.push(T.x,T.y,T.z),_.set(J,C,Y).normalize(),f.push(_.x,_.y,_.z),p.push(V,1-M),E.push(g++)}x.push(E)}for(let N=0;N<s;N++)for(let E=0;E<a;E++){let M=x[E][N],U=x[E+1][N],z=x[E+1][N+1],V=x[E][N+1];(t>0||E!==0)&&(h.push(M,U,V),w+=3),(n>0||E!==a-1)&&(h.push(U,z,V),w+=3)}c.addGroup(u,w,0),u+=w}function y(_){let T=g,w=new Qt,C=new I,N=0,E=_===!0?t:n,M=_===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let U=g;for(let z=0;z<=s;z++){let q=z/s*l+o,J=Math.cos(q),Y=Math.sin(q);C.x=E*Y,C.y=m*M,C.z=E*J,d.push(C.x,C.y,C.z),f.push(0,M,0),w.x=J*.5+.5,w.y=Y*.5*M+.5,p.push(w.x,w.y),g++}for(let z=0;z<s;z++){let V=T+z,q=U+z;_===!0?h.push(q,q+1,V):h.push(q+1,q,V),N+=3}c.addGroup(u,N,_===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zn=class e extends Jn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=n/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let v=u*f-r;for(let y=0;y<c;y++){let _=y*d-a;g.push(_,-v,0),x.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){let y=v+c*u,_=v+c*(u+1),T=v+1+c*(u+1),w=v+1+c*u;p.push(y,_,w),p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Sl=class e extends Jn{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],d=new I,f=new I,p=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){let v=[],y=u/i,_=0;u===0&&r===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let T=0;T<=n;T++){let w=T/n;d.x=-t*Math.cos(s+w*a)*Math.sin(r+y*o),d.y=t*Math.cos(r+y*o),d.z=t*Math.sin(s+w*a)*Math.sin(r+y*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(w+_,1-y),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){let y=h[u][v+1],_=h[u][v],T=h[u+1][v],w=h[u+1][v+1];(u!==0||r>0)&&p.push(y,_,w),(u!==i-1||l<Math.PI)&&p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pr=class extends ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Jf=class extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kf=class extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function If(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Y2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var zr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qf=class extends zr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:F0,endingEnd:F0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case H0:a=t,o=2*n-i;break;case V0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case H0:r=t,l=2*i-n;break;case V0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let T=0;T!==o;++T)a[T]=u*r[h+T]+v*r[c+T]+y*r[l+T]+_*r[d+T];return a}},jf=class extends zr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*h;return a}},$f=class extends zr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=If(n,this.TimeBufferType),this.values=If(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:If(t.times,Array),values:If(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $f(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case qc:n=this.InterpolantFactoryMethodDiscrete;break;case Vf:n=this.InterpolantFactoryMethodLinear;break;case Pf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qc;case this.InterpolantFactoryMethodLinear:return Vf;case this.InterpolantFactoryMethodSmooth:return Pf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&Y2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let x=n[d+g];if(x!==n[f+g]||x!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=Vf;var Qa=class extends wi{constructor(t,n,i){super(t,n,i)}};Qa.prototype.ValueTypeName="bool";Qa.prototype.ValueBufferType=Array;Qa.prototype.DefaultInterpolation=qc;Qa.prototype.InterpolantFactoryMethodLinear=void 0;Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var td=class extends wi{constructor(t,n,i,s){super(t,n,i,s)}};td.prototype.ValueTypeName="color";var ed=class extends wi{constructor(t,n,i,s){super(t,n,i,s)}};ed.prototype.ValueTypeName="number";var nd=class extends zr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)sa.slerpFlat(a,0,r,c-o,r,c,l);return a}},lu=class extends wi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new nd(this.times,this.values,this.getValueSize(),t)}};lu.prototype.ValueTypeName="quaternion";lu.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends wi{constructor(t,n,i){super(t,n,i)}};ja.prototype.ValueTypeName="string";ja.prototype.ValueBufferType=Array;ja.prototype.DefaultInterpolation=qc;ja.prototype.InterpolantFactoryMethodLinear=void 0;ja.prototype.InterpolantFactoryMethodSmooth=void 0;var id=class extends wi{constructor(t,n,i,s){super(t,n,i,s)}};id.prototype.ValueTypeName="vector";var sd=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},wb=new sd,ad=class{constructor(t){this.manager=t!==void 0?t:wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ad.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},cu=class extends Br{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},z0=new Ve,LM=new I,OM=new I,rd=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=as,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;LM.setFromMatrixPosition(t.matrixWorld),n.position.copy(LM),OM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(OM),n.updateMatrixWorld(),z0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(z0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(z0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var IM=new Ve,kc=new I,B0=new I,X0=class extends rd{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),kc.setFromMatrixPosition(t.matrixWorld),i.position.copy(kc),B0.copy(i.position),B0.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(B0),i.updateMatrixWorld(),s.makeTranslation(-kc.x,-kc.y,-kc.z),IM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(IM,i.coordinateSystem,i.reversedDepth)}},aa=class extends Br{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new X0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},uu=class extends eu{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},W0=class extends rd{constructor(){super(new uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hu=class extends Br{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new W0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},fu=class extends Br{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var od=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var dv="\\[\\]\\.:\\/",Z2=new RegExp("["+dv+"]","g"),pv="[^"+dv+"]",J2="[^"+dv.replace("\\.","")+"]",K2=/((?:WC+[\/:])*)/.source.replace("WC",pv),Q2=/(WCOD+)?/.source.replace("WCOD",J2),j2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pv),$2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pv),tR=new RegExp("^"+K2+Q2+j2+$2+"$"),eR=["material","materials","bones","map"],q0=class{constructor(t,n,i){let s=i||ze.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},ze=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z2,"")}static parseTrackName(t){let n=tR.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);eR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=q0;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rU=new Float32Array(1);function mv(e,t,n,i){let s=nR(i);switch(n){case iv:return e*t;case av:return e*t/s.components*s.byteLength;case Md:return e*t/s.components*s.byteLength;case rv:return e*t*2/s.components*s.byteLength;case bd:return e*t*2/s.components*s.byteLength;case sv:return e*t*3/s.components*s.byteLength;case Wi:return e*t*4/s.components*s.byteLength;case Ed:return e*t*4/s.components*s.byteLength;case mu:case gu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vu:case _u:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ad:case Rd:return Math.max(e,16)*Math.max(t,8)/4;case Td:case wd:return Math.max(e,8)*Math.max(t,8)/2;case Cd:case Dd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Nd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Od:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Id:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case zd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case kd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case qd:case Yd:case Zd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Jd:case Kd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Qd:case jd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nR(e){switch(e){case as:case $0:return{byteLength:1,components:1};case Ml:case tv:case bl:return{byteLength:2,components:1};case xd:case Sd:return{byteLength:2,components:4};case $a:case yd:case Rs:return{byteLength:4,components:1};case ev:case nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Qb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function sR(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var aR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_R=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ER=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,RR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IR="gl_FragColor = linearToOutputTexel( gl_FragColor );",PR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,FR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,HR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$R=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_C=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$C=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,f3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:aR,alphahash_pars_fragment:rR,alphamap_fragment:oR,alphamap_pars_fragment:lR,alphatest_fragment:cR,alphatest_pars_fragment:uR,aomap_fragment:hR,aomap_pars_fragment:fR,batching_pars_vertex:dR,batching_vertex:pR,begin_vertex:mR,beginnormal_vertex:gR,bsdfs:vR,iridescence_fragment:_R,bumpmap_pars_fragment:yR,clipping_planes_fragment:xR,clipping_planes_pars_fragment:SR,clipping_planes_pars_vertex:MR,clipping_planes_vertex:bR,color_fragment:ER,color_pars_fragment:TR,color_pars_vertex:AR,color_vertex:wR,common:RR,cube_uv_reflection_fragment:CR,defaultnormal_vertex:DR,displacementmap_pars_vertex:NR,displacementmap_vertex:UR,emissivemap_fragment:LR,emissivemap_pars_fragment:OR,colorspace_fragment:IR,colorspace_pars_fragment:PR,envmap_fragment:zR,envmap_common_pars_fragment:BR,envmap_pars_fragment:FR,envmap_pars_vertex:HR,envmap_physical_pars_fragment:QR,envmap_vertex:VR,fog_vertex:GR,fog_pars_vertex:kR,fog_fragment:XR,fog_pars_fragment:WR,gradientmap_pars_fragment:qR,lightmap_pars_fragment:YR,lights_lambert_fragment:ZR,lights_lambert_pars_fragment:JR,lights_pars_begin:KR,lights_toon_fragment:jR,lights_toon_pars_fragment:$R,lights_phong_fragment:tC,lights_phong_pars_fragment:eC,lights_physical_fragment:nC,lights_physical_pars_fragment:iC,lights_fragment_begin:sC,lights_fragment_maps:aC,lights_fragment_end:rC,logdepthbuf_fragment:oC,logdepthbuf_pars_fragment:lC,logdepthbuf_pars_vertex:cC,logdepthbuf_vertex:uC,map_fragment:hC,map_pars_fragment:fC,map_particle_fragment:dC,map_particle_pars_fragment:pC,metalnessmap_fragment:mC,metalnessmap_pars_fragment:gC,morphinstance_vertex:vC,morphcolor_vertex:_C,morphnormal_vertex:yC,morphtarget_pars_vertex:xC,morphtarget_vertex:SC,normal_fragment_begin:MC,normal_fragment_maps:bC,normal_pars_fragment:EC,normal_pars_vertex:TC,normal_vertex:AC,normalmap_pars_fragment:wC,clearcoat_normal_fragment_begin:RC,clearcoat_normal_fragment_maps:CC,clearcoat_pars_fragment:DC,iridescence_pars_fragment:NC,opaque_fragment:UC,packing:LC,premultiplied_alpha_fragment:OC,project_vertex:IC,dithering_fragment:PC,dithering_pars_fragment:zC,roughnessmap_fragment:BC,roughnessmap_pars_fragment:FC,shadowmap_pars_fragment:HC,shadowmap_pars_vertex:VC,shadowmap_vertex:GC,shadowmask_pars_fragment:kC,skinbase_vertex:XC,skinning_pars_vertex:WC,skinning_vertex:qC,skinnormal_vertex:YC,specularmap_fragment:ZC,specularmap_pars_fragment:JC,tonemapping_fragment:KC,tonemapping_pars_fragment:QC,transmission_fragment:jC,transmission_pars_fragment:$C,uv_pars_fragment:t3,uv_pars_vertex:e3,uv_vertex:n3,worldpos_vertex:i3,background_vert:s3,background_frag:a3,backgroundCube_vert:r3,backgroundCube_frag:o3,cube_vert:l3,cube_frag:c3,depth_vert:u3,depth_frag:h3,distanceRGBA_vert:f3,distanceRGBA_frag:d3,equirect_vert:p3,equirect_frag:m3,linedashed_vert:g3,linedashed_frag:v3,meshbasic_vert:_3,meshbasic_frag:y3,meshlambert_vert:x3,meshlambert_frag:S3,meshmatcap_vert:M3,meshmatcap_frag:b3,meshnormal_vert:E3,meshnormal_frag:T3,meshphong_vert:A3,meshphong_frag:w3,meshphysical_vert:R3,meshphysical_frag:C3,meshtoon_vert:D3,meshtoon_frag:N3,points_vert:U3,points_frag:L3,shadow_vert:O3,shadow_frag:I3,sprite_vert:P3,sprite_frag:z3},ft={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Cs={basic:{uniforms:Bn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Bn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Bn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Bn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Bn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Bn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Bn([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Bn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Bn([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Bn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Bn([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Bn([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Bn([ft.lights,ft.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Cs.physical={uniforms:Bn([Cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var $d={r:0,b:0,g:0},kr=new is,B3=new Ve;function F3(e,t,n,i,s,a,r){let o=new qt(0),l=a===!0?0:1,c,h,d=null,f=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:t).get(_)),_}function x(y){let _=!1,T=g(y);T===null?u(o,l):T&&T.isColor&&(u(T,1),_=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,_){let T=g(_);T&&(T.isCubeTexture||T.mapping===du)?(h===void 0&&(h=new Me(new Ka(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Gr(Cs.backgroundCube.uniforms),vertexShader:Cs.backgroundCube.vertexShader,fragmentShader:Cs.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),kr.copy(_.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B3.makeRotationFromEuler(kr)),h.material.toneMapped=ce.getTransfer(T.colorSpace)!==Se,(d!==T||f!==T.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Me(new zn(2,2),new oi({name:"BackgroundMaterial",uniforms:Gr(Cs.background.uniforms),vertexShader:Cs.background.vertexShader,fragmentShader:Cs.background.fragmentShader,side:na,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ce.getTransfer(T.colorSpace)!==Se,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,_){y.getRGB($d,fv(e)),i.buffers.color.setClear($d.r,$d.g,$d.b,_,r)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:x,addToRenderList:m,dispose:v}}function H3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(M,U,z,V,q){let J=!1,Y=d(V,z,U);a!==Y&&(a=Y,c(a.object)),J=p(M,V,z,q),J&&g(M,V,z,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,_(M,U,z,V),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function d(M,U,z){let V=z.wireframe===!0,q=i[M.id];q===void 0&&(q={},i[M.id]=q);let J=q[U.id];J===void 0&&(J={},q[U.id]=J);let Y=J[V];return Y===void 0&&(Y=f(l()),J[V]=Y),Y}function f(M){let U=[],z=[],V=[];for(let q=0;q<n;q++)U[q]=0,z[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,U,z,V){let q=a.attributes,J=U.attributes,Y=0,it=z.getAttributes();for(let k in it)if(it[k].location>=0){let gt=q[k],yt=J[k];if(yt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),gt===void 0||gt.attribute!==yt||yt&&gt.data!==yt.data)return!0;Y++}return a.attributesNum!==Y||a.index!==V}function g(M,U,z,V){let q={},J=U.attributes,Y=0,it=z.getAttributes();for(let k in it)if(it[k].location>=0){let gt=J[k];gt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor));let yt={};yt.attribute=gt,gt&&gt.data&&(yt.data=gt.data),q[k]=yt,Y++}a.attributes=q,a.attributesNum=Y,a.index=V}function x(){let M=a.newAttributes;for(let U=0,z=M.length;U<z;U++)M[U]=0}function m(M){u(M,0)}function u(M,U){let z=a.newAttributes,V=a.enabledAttributes,q=a.attributeDivisors;z[M]=1,V[M]===0&&(e.enableVertexAttribArray(M),V[M]=1),q[M]!==U&&(e.vertexAttribDivisor(M,U),q[M]=U)}function v(){let M=a.newAttributes,U=a.enabledAttributes;for(let z=0,V=U.length;z<V;z++)U[z]!==M[z]&&(e.disableVertexAttribArray(z),U[z]=0)}function y(M,U,z,V,q,J,Y){Y===!0?e.vertexAttribIPointer(M,U,z,q,J):e.vertexAttribPointer(M,U,z,V,q,J)}function _(M,U,z,V){x();let q=V.attributes,J=z.getAttributes(),Y=U.defaultAttributeValues;for(let it in J){let k=J[it];if(k.location>=0){let ct=q[it];if(ct===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){let gt=ct.normalized,yt=ct.itemSize,Yt=t.get(ct);if(Yt===void 0)continue;let rt=Yt.buffer,Kt=Yt.type,Ft=Yt.bytesPerElement,Q=Kt===e.INT||Kt===e.UNSIGNED_INT||ct.gpuType===yd;if(ct.isInterleavedBufferAttribute){let $=ct.data,vt=$.stride,Nt=ct.offset;if($.isInstancedInterleavedBuffer){for(let Dt=0;Dt<k.locationSize;Dt++)u(k.location+Dt,$.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Dt=0;Dt<k.locationSize;Dt++)m(k.location+Dt);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let Dt=0;Dt<k.locationSize;Dt++)y(k.location+Dt,yt/k.locationSize,Kt,gt,vt*Ft,(Nt+yt/k.locationSize*Dt)*Ft,Q)}else{if(ct.isInstancedBufferAttribute){for(let $=0;$<k.locationSize;$++)u(k.location+$,ct.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let $=0;$<k.locationSize;$++)m(k.location+$);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let $=0;$<k.locationSize;$++)y(k.location+$,yt/k.locationSize,Kt,gt,yt*Ft,yt/k.locationSize*$*Ft,Q)}}else if(Y!==void 0){let gt=Y[it];if(gt!==void 0)switch(gt.length){case 2:e.vertexAttrib2fv(k.location,gt);break;case 3:e.vertexAttrib3fv(k.location,gt);break;case 4:e.vertexAttrib4fv(k.location,gt);break;default:e.vertexAttrib1fv(k.location,gt)}}}}v()}function T(){N();for(let M in i){let U=i[M];for(let z in U){let V=U[z];for(let q in V)h(V[q].object),delete V[q];delete U[z]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let z in U){let V=U[z];for(let q in V)h(V[q].object),delete V[q];delete U[z]}delete i[M.id]}function C(M){for(let U in i){let z=i[U];if(z[M.id]===void 0)continue;let V=z[M.id];for(let q in V)h(V[q].object),delete V[q];delete z[M.id]}}function N(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function V3(e,t,n){let i;function s(c){i=c}function a(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function G3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Wi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let N=C===bl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==as&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rs&&!N)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:T,maxSamples:w}}function k3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ts,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let v=a?0:i,y=v*4,_=u.clippingState||null;l.value=_,_=h(g,f,y,p);for(let T=0;T!==y;++T)_[T]=n[T];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,_=p;y!==x;++y,_+=4)r.copy(d[y]).applyMatrix4(v,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function X3(e){let t=new WeakMap;function n(r,o){return o===gd?r.mapping=Hr:o===vd&&(r.mapping=Vr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===gd||o===vd)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Yf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var wl=4,Rb=[.125,.215,.35,.446,.526,.582],qr=20,gv=new uu,Cb=new qt,vv=null,_v=0,yv=0,xv=!1,Wr=(1+Math.sqrt(5))/2,Al=1/Wr,Db=[new I(-Wr,Al,0),new I(Wr,Al,0),new I(-Al,0,Wr),new I(Al,0,Wr),new I(0,Wr,-Al),new I(0,Wr,Al),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],W3=new I,np=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=W3}=a;vv=this._renderer.getRenderTarget(),_v=this._renderer.getActiveCubeFace(),yv=this._renderer.getActiveMipmapLevel(),xv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ub(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vv,_v,yv),this._renderer.xr.enabled=xv,t.scissorTest=!1,tp(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Hr||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vv=this._renderer.getRenderTarget(),_v=this._renderer.getActiveCubeFace(),yv=this._renderer.getActiveMipmapLevel(),xv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:bl,format:Wi,colorSpace:Or,depthBuffer:!1},s=Nb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q3(a)),this._blurMaterial=Y3(a,t,n)}return s}_compileMaterial(t){let n=new Me(this._lodPlanes[0],t);this._renderer.compile(n,gv)}_sceneToCubeUV(t,n,i,s,a){let l=new En(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Cb),d.toneMapping=oa,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new Pn({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),m=new Me(new Ka,x),u=!1,v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,u=!0):(x.color.copy(Cb),u=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[y],a.y,a.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[y]));let T=this._cubeSize;tp(s,_*T,y>2?T:0,T,T),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Hr||t.mapping===Vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ub());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Me(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;tp(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,gv)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Db[(s-a-1)%Db.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Me(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*qr-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):qr;m>qr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);let u=[],v=0;for(let C=0;C<qr;++C){let N=C/x,E=Math.exp(-N*N/2);u.push(E),C===0?v+=E:C<m&&(v+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let _=this._sizeLods[s],T=3*_*(s>y-wl?s-y+wl:0),w=4*(this._cubeSize-_);tp(n,T,w,3*_,2*_),l.setRenderTarget(n),l.render(d,gv)}};function q3(e){let t=[],n=[],i=[],s=e,a=e-wl+1+Rb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-wl?l=Rb[r-e+wl-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,v=new Float32Array(x*g*p),y=new Float32Array(m*g*p),_=new Float32Array(u*g*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,N=w>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];v.set(E,x*g*w),y.set(f,m*g*w);let M=[w,w,w,w,w,w];_.set(M,u*g*w)}let T=new Jn;T.setAttribute("position",new pn(v,x)),T.setAttribute("uv",new pn(y,m)),T.setAttribute("faceIndex",new pn(_,u)),t.push(T),s>wl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Nb(e,t,n){let i=new As(e,t,n);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tp(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function Y3(e,t,n){let i=new Float32Array(qr),s=new I(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Ub(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Lb(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Dv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===gd||l===vd,h=l===Hr||l===Vr;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new np(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new np(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function J3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&dl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function K3(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let y=0,_=v.length;y<_;y+=3){let T=v[y+0],w=v[y+1],C=v[y+2];f.push(T,w,w,C,C,T)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let T=y+0,w=y+1,C=y+2;f.push(T,w,w,C,C,T)}}else return;let m=new(hv(f)?tu:$c)(f,1);m.version=x;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function h(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Q3(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,f*r,g),n.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v]*x[v];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function j3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function $3(e,t,n){let i=new WeakMap,s=new xe;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*T*4*d),C=new Kc(w,_,T,d);C.type=Rs,C.needsUpdate=!0;let N=y*4;for(let M=0;M<d;M++){let U=m[M],z=u[M],V=v[M],q=_*T*4*M;for(let J=0;J<U.count;J++){let Y=J*N;p===!0&&(s.fromBufferAttribute(U,J),w[q+Y+0]=s.x,w[q+Y+1]=s.y,w[q+Y+2]=s.z,w[q+Y+3]=0),g===!0&&(s.fromBufferAttribute(z,J),w[q+Y+4]=s.x,w[q+Y+5]=s.y,w[q+Y+6]=s.z,w[q+Y+7]=0),x===!0&&(s.fromBufferAttribute(V,J),w[q+Y+8]=s.x,w[q+Y+9]=s.y,w[q+Y+10]=s.z,w[q+Y+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:C,size:new Qt(_,T)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function tD(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var jb=new ri,Ob=new au(1,1),$b=new Kc,tE=new Wf,eE=new nu,Ib=[],Pb=[],zb=new Float32Array(16),Bb=new Float32Array(9),Fb=new Float32Array(4);function Cl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Ib[s];if(a===void 0&&(a=new Float32Array(s),Ib[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function rn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function on(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function sp(e,t){let n=Pb[t];n===void 0&&(n=new Int32Array(t),Pb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function eD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rn(n,t))return;e.uniform2fv(this.addr,t),on(n,t)}}function iD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(rn(n,t))return;e.uniform3fv(this.addr,t),on(n,t)}}function sD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rn(n,t))return;e.uniform4fv(this.addr,t),on(n,t)}}function aD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(rn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),on(n,t)}else{if(rn(n,i))return;Fb.set(i),e.uniformMatrix2fv(this.addr,!1,Fb),on(n,i)}}function rD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(rn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),on(n,t)}else{if(rn(n,i))return;Bb.set(i),e.uniformMatrix3fv(this.addr,!1,Bb),on(n,i)}}function oD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(rn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),on(n,t)}else{if(rn(n,i))return;zb.set(i),e.uniformMatrix4fv(this.addr,!1,zb),on(n,i)}}function lD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function cD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rn(n,t))return;e.uniform2iv(this.addr,t),on(n,t)}}function uD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(rn(n,t))return;e.uniform3iv(this.addr,t),on(n,t)}}function hD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rn(n,t))return;e.uniform4iv(this.addr,t),on(n,t)}}function fD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function dD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rn(n,t))return;e.uniform2uiv(this.addr,t),on(n,t)}}function pD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(rn(n,t))return;e.uniform3uiv(this.addr,t),on(n,t)}}function mD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rn(n,t))return;e.uniform4uiv(this.addr,t),on(n,t)}}function gD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Ob.compareFunction=lv,a=Ob):a=jb,n.setTexture2D(t||a,s)}function vD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||tE,s)}function _D(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||eE,s)}function yD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||$b,s)}function xD(e){switch(e){case 5126:return eD;case 35664:return nD;case 35665:return iD;case 35666:return sD;case 35674:return aD;case 35675:return rD;case 35676:return oD;case 5124:case 35670:return lD;case 35667:case 35671:return cD;case 35668:case 35672:return uD;case 35669:case 35673:return hD;case 5125:return fD;case 36294:return dD;case 36295:return pD;case 36296:return mD;case 35678:case 36198:case 36298:case 36306:case 35682:return gD;case 35679:case 36299:case 36307:return vD;case 35680:case 36300:case 36308:case 36293:return _D;case 36289:case 36303:case 36311:case 36292:return yD}}function SD(e,t){e.uniform1fv(this.addr,t)}function MD(e,t){let n=Cl(t,this.size,2);e.uniform2fv(this.addr,n)}function bD(e,t){let n=Cl(t,this.size,3);e.uniform3fv(this.addr,n)}function ED(e,t){let n=Cl(t,this.size,4);e.uniform4fv(this.addr,n)}function TD(e,t){let n=Cl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function AD(e,t){let n=Cl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wD(e,t){let n=Cl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function RD(e,t){e.uniform1iv(this.addr,t)}function CD(e,t){e.uniform2iv(this.addr,t)}function DD(e,t){e.uniform3iv(this.addr,t)}function ND(e,t){e.uniform4iv(this.addr,t)}function UD(e,t){e.uniform1uiv(this.addr,t)}function LD(e,t){e.uniform2uiv(this.addr,t)}function OD(e,t){e.uniform3uiv(this.addr,t)}function ID(e,t){e.uniform4uiv(this.addr,t)}function PD(e,t,n){let i=this.cache,s=t.length,a=sp(n,s);rn(i,a)||(e.uniform1iv(this.addr,a),on(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||jb,a[r])}function zD(e,t,n){let i=this.cache,s=t.length,a=sp(n,s);rn(i,a)||(e.uniform1iv(this.addr,a),on(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||tE,a[r])}function BD(e,t,n){let i=this.cache,s=t.length,a=sp(n,s);rn(i,a)||(e.uniform1iv(this.addr,a),on(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||eE,a[r])}function FD(e,t,n){let i=this.cache,s=t.length,a=sp(n,s);rn(i,a)||(e.uniform1iv(this.addr,a),on(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||$b,a[r])}function HD(e){switch(e){case 5126:return SD;case 35664:return MD;case 35665:return bD;case 35666:return ED;case 35674:return TD;case 35675:return AD;case 35676:return wD;case 5124:case 35670:return RD;case 35667:case 35671:return CD;case 35668:case 35672:return DD;case 35669:case 35673:return ND;case 5125:return UD;case 36294:return LD;case 36295:return OD;case 36296:return ID;case 35678:case 36198:case 36298:case 36306:case 35682:return PD;case 35679:case 36299:case 36307:return zD;case 35680:case 36300:case 36308:case 36293:return BD;case 36289:case 36303:case 36311:case 36292:return FD}}var Mv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xD(n.type)}},bv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HD(n.type)}},Ev=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Sv=/(\w+)(\])?(\[|\.)?/g;function Hb(e,t){e.seq.push(t),e.map[t.id]=t}function VD(e,t,n){let i=e.name,s=i.length;for(Sv.lastIndex=0;;){let a=Sv.exec(i),r=Sv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Hb(n,c===void 0?new Mv(o,e,t):new bv(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Ev(o),Hb(n,d)),n=d}}}var Rl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);VD(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Vb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var GD=37297,kD=0;function XD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Gb=new Jt;function WD(e){ce._getMatrix(Gb,ce.workingColorSpace,e);let t=`mat3( ${Gb.elements.map(n=>n.toFixed(4))} )`;switch(ce.getTransfer(e)){case Yc:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function kb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+XD(e.getShaderSource(t),o)}else return a}function qD(e,t){let n=WD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function YD(e,t){let n;switch(t){case ab:n="Linear";break;case rb:n="Reinhard";break;case ob:n="Cineon";break;case md:n="ACESFilmic";break;case cb:n="AgX";break;case ub:n="Neutral";break;case lb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ep=new I;function ZD(){ce.getLuminanceCoefficients(ep);let e=ep.x.toFixed(4),t=ep.y.toFixed(4),n=ep.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yu).join(`
`)}function KD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function QD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function yu(e){return e!==""}function Xb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tv(e){return e.replace(jD,tN)}var $D=new Map;function tN(e,t){let n=$t[t];if(n===void 0){let i=$D.get(t);if(i!==void 0)n=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Tv(n)}var eN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qb(e){return e.replace(eN,nN)}function nN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Yb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iN(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Z0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===BM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function sN(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Hr:case Vr:t="ENVMAP_TYPE_CUBE";break;case du:t="ENVMAP_TYPE_CUBE_UV";break}return t}function aN(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Vr:t="ENVMAP_MODE_REFRACTION";break}return t}function rN(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Q0:t="ENVMAP_BLENDING_MULTIPLY";break;case ib:t="ENVMAP_BLENDING_MIX";break;case sb:t="ENVMAP_BLENDING_ADD";break}return t}function oN(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function lN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=iN(n),c=sN(n),h=aN(n),d=rN(n),f=oN(n),p=JD(n),g=KD(a),x=s.createProgram(),m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(yu).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(yu).join(`
`),u.length>0&&(u+=`
`)):(m=[Yb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yu).join(`
`),u=[Yb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oa?"#define TONE_MAPPING":"",n.toneMapping!==oa?$t.tonemapping_pars_fragment:"",n.toneMapping!==oa?YD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,qD("linearToOutputTexel",n.outputColorSpace),ZD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yu).join(`
`)),r=Tv(r),r=Xb(r,n),r=Wb(r,n),o=Tv(o),o=Xb(o,n),o=Wb(o,n),r=qb(r),o=qb(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=v+m+r,_=v+u+o,T=Vb(s,s.VERTEX_SHADER,y),w=Vb(s,s.FRAGMENT_SHADER,_);s.attachShader(x,T),s.attachShader(x,w),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(U){if(e.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(T)||"",q=s.getShaderInfoLog(w)||"",J=z.trim(),Y=V.trim(),it=q.trim(),k=!0,ct=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,T,w);else{let gt=kb(s,T,"vertex"),yt=kb(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+gt+`
`+yt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||it==="")&&(ct=!1);ct&&(U.diagnostics={runnable:k,programLog:J,vertexShader:{log:Y,prefix:m},fragmentShader:{log:it,prefix:u}})}s.deleteShader(T),s.deleteShader(w),N=new Rl(s,x),E=QD(s,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,GD)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kD++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var cN=0,Av=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new wv(t),n.set(t,i)),i}},wv=class{constructor(t){this.id=cN++,this.code=t,this.usedTimes=0}};function uN(e,t,n,i,s,a,r){let o=new jc,l=new Av,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,U,z,V){let q=z.fog,J=V.geometry,Y=E.isMeshStandardMaterial?z.environment:null,it=(E.isMeshStandardMaterial?n:t).get(E.envMap||Y),k=it&&it.mapping===du?it.image.height:null,ct=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=gt!==void 0?gt.length:0,Yt=0;J.morphAttributes.position!==void 0&&(Yt=1),J.morphAttributes.normal!==void 0&&(Yt=2),J.morphAttributes.color!==void 0&&(Yt=3);let rt,Kt,Ft,Q;if(ct){let _t=Cs[ct];rt=_t.vertexShader,Kt=_t.fragmentShader}else rt=E.vertexShader,Kt=E.fragmentShader,l.update(E),Ft=l.getVertexShaderID(E),Q=l.getFragmentShaderID(E);let $=e.getRenderTarget(),vt=e.state.buffers.depth.getReversed(),Nt=V.isInstancedMesh===!0,Dt=V.isBatchedMesh===!0,jt=!!E.map,We=!!E.matcap,D=!!it,pe=!!E.aoMap,Ut=!!E.lightMap,Mt=!!E.bumpMap,bt=!!E.normalMap,Te=!!E.displacementMap,St=!!E.emissiveMap,Wt=!!E.metalnessMap,Be=!!E.roughnessMap,Ce=E.anisotropy>0,A=E.clearcoat>0,S=E.dispersion>0,B=E.iridescence>0,Z=E.sheen>0,tt=E.transmission>0,W=Ce&&!!E.anisotropyMap,wt=A&&!!E.clearcoatMap,lt=A&&!!E.clearcoatNormalMap,Tt=A&&!!E.clearcoatRoughnessMap,Rt=B&&!!E.iridescenceMap,st=B&&!!E.iridescenceThicknessMap,dt=Z&&!!E.sheenColorMap,Pt=Z&&!!E.sheenRoughnessMap,At=!!E.specularMap,ht=!!E.specularColorMap,Lt=!!E.specularIntensityMap,L=tt&&!!E.transmissionMap,at=tt&&!!E.thicknessMap,ot=!!E.gradientMap,mt=!!E.alphaMap,nt=E.alphaTest>0,j=!!E.alphaHash,Et=!!E.extensions,F=oa;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(F=e.toneMapping);let ut={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:rt,fragmentShader:Kt,defines:E.defines,customVertexShaderID:Ft,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&V._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&V.instanceColor!==null,instancingMorph:Nt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Or,alphaToCoverage:!!E.alphaToCoverage,map:jt,matcap:We,envMap:D,envMapMode:D&&it.mapping,envMapCubeUVHeight:k,aoMap:pe,lightMap:Ut,bumpMap:Mt,normalMap:bt,displacementMap:f&&Te,emissiveMap:St,normalMapObjectSpace:bt&&E.normalMapType===pb,normalMapTangentSpace:bt&&E.normalMapType===ov,metalnessMap:Wt,roughnessMap:Be,anisotropy:Ce,anisotropyMap:W,clearcoat:A,clearcoatMap:wt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Tt,dispersion:S,iridescence:B,iridescenceMap:Rt,iridescenceThicknessMap:st,sheen:Z,sheenColorMap:dt,sheenRoughnessMap:Pt,specularMap:At,specularColorMap:ht,specularIntensityMap:Lt,transmission:tt,transmissionMap:L,thicknessMap:at,gradientMap:ot,opaque:E.transparent===!1&&E.blending===Ur&&E.alphaToCoverage===!1,alphaMap:mt,alphaTest:nt,alphaHash:j,combine:E.combine,mapUv:jt&&x(E.map.channel),aoMapUv:pe&&x(E.aoMap.channel),lightMapUv:Ut&&x(E.lightMap.channel),bumpMapUv:Mt&&x(E.bumpMap.channel),normalMapUv:bt&&x(E.normalMap.channel),displacementMapUv:Te&&x(E.displacementMap.channel),emissiveMapUv:St&&x(E.emissiveMap.channel),metalnessMapUv:Wt&&x(E.metalnessMap.channel),roughnessMapUv:Be&&x(E.roughnessMap.channel),anisotropyMapUv:W&&x(E.anisotropyMap.channel),clearcoatMapUv:wt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:lt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(E.sheenRoughnessMap.channel),specularMapUv:At&&x(E.specularMap.channel),specularColorMapUv:ht&&x(E.specularColorMap.channel),specularIntensityMapUv:Lt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:at&&x(E.thicknessMap.channel),alphaMapUv:mt&&x(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(bt||Ce),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(jt||mt),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:V.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Yt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:F,decodeVideoTexture:jt&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:St&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===An,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function u(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(M,E),y(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){let M=g[E.type],U;if(M){let z=Cs[M];U=Tb.clone(z.uniforms)}else U=E.uniforms;return U}function T(E,M){let U;for(let z=0,V=h.length;z<V;z++){let q=h[z];if(q.cacheKey===M){U=q,++U.usedTimes;break}}return U===void 0&&(U=new lN(e,M,E,a),h.push(U)),U}function w(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:N}}function hN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function fN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Zb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Jb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,g,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,g,x,m){let u=r(d,f,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,g,x,m){let u=r(d,f,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||fN),i.length>1&&i.sort(f||Zb),s.length>1&&s.sort(f||Zb)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function dN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Jb,e.set(i,[r])):s>=a.length?(r=new Jb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function pN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new I,color:new qt};break;case"SpotLight":n={position:new I,direction:new I,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":n={color:new qt,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function mN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var gN=0;function vN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function _N(e){let t=new pN,n=mN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,a=new Ve,r=new Ve;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,v=0,y=0,_=0,T=0,w=0,C=0;c.sort(vN);for(let E=0,M=c.length;E<M;E++){let U=c[E],z=U.color,V=U.intensity,q=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*V,d+=z.g*V,f+=z.b*V;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],V);C++}else if(U.isDirectionalLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let it=U.shadow,k=n.get(U);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=Y,p++}else if(U.isSpotLight){let Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(z).multiplyScalar(V),Y.distance=q,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[x]=Y;let it=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,it.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[x]=it.matrix,U.castShadow){let k=n.get(U);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=J,_++}x++}else if(U.isRectAreaLight){let Y=t.get(U);Y.color.copy(z).multiplyScalar(V),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=Y,m++}else if(U.isPointLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let it=U.shadow,k=n.get(U);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,k.shadowCameraNear=it.camera.near,k.shadowCameraFar=it.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=U.shadow.matrix,y++}i.point[g]=Y,g++}else if(U.isHemisphereLight){let Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(V),Y.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[u]=Y,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==v||N.numPointShadows!==y||N.numSpotShadows!==_||N.numSpotMaps!==T||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=v,N.numPointShadows=y,N.numSpotShadows=_,N.numSpotMaps=T,N.numLightProbes=C,i.version=gN++)}function l(c,h){let d=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){let y=c[u];if(y.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Kb(e){let t=new _N(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function yN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Kb(e),t.set(s,[o])):a>=r.length?(o=new Kb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var xN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MN(e,t,n){let i=new _l,s=new Qt,a=new Qt,r=new xe,o=new Jf({depthPacking:db}),l=new Kf,c={},h=n.maxTextureSize,d={[na]:An,[An]:na,[wn]:wn},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:xN,fragmentShader:SN}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Jn;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Me(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let u=this.type;this.render=function(w,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),z=e.state;z.setBlending(ra),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=u!==Xi&&this.type===Xi,q=u===Xi&&this.type!==Xi;for(let J=0,Y=w.length;J<Y;J++){let it=w[J],k=it.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ct=k.getFrameExtents();if(s.multiply(ct),a.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ct.x),s.x=a.x*ct.x,k.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ct.y),s.y=a.y*ct.y,k.mapSize.y=a.y)),k.map===null||V===!0||q===!0){let yt=this.type!==Xi?{minFilter:mn,magFilter:mn}:{};k.map!==null&&k.map.dispose(),k.map=new As(s.x,s.y,yt),k.map.texture.name=it.name+".shadowMap",k.camera.updateProjectionMatrix()}e.setRenderTarget(k.map),e.clear();let gt=k.getViewportCount();for(let yt=0;yt<gt;yt++){let Yt=k.getViewport(yt);r.set(a.x*Yt.x,a.y*Yt.y,a.x*Yt.z,a.y*Yt.w),z.viewport(r),k.updateMatrices(it,yt),i=k.getFrustum(),_(C,N,k.camera,it,this.type)}k.isPointLightShadow!==!0&&this.type===Xi&&v(k,N),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,U)};function v(w,C){let N=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new As(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(C,null,N,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(C,null,N,p,x,null)}function y(w,C,N,E){let M=null,U=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)M=U;else if(M=N.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=M.uuid,V=C.uuid,q=c[z];q===void 0&&(q={},c[z]=q);let J=q[V];J===void 0&&(J=M.clone(),q[V]=J,C.addEventListener("dispose",T)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,E===Xi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=e.properties.get(M);z.light=N}return M}function _(w,C,N,E,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Xi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);let V=t.update(w),q=w.material;if(Array.isArray(q)){let J=V.groups;for(let Y=0,it=J.length;Y<it;Y++){let k=J[Y],ct=q[k.materialIndex];if(ct&&ct.visible){let gt=y(w,ct,E,M);w.onBeforeShadow(e,w,C,N,V,gt,k),e.renderBufferDirect(N,null,V,gt,w,k),w.onAfterShadow(e,w,C,N,V,gt,k)}}}else if(q.visible){let J=y(w,q,E,M);w.onBeforeShadow(e,w,C,N,V,J,null),e.renderBufferDirect(N,null,V,J,w,null),w.onAfterShadow(e,w,C,N,V,J,null)}}let z=w.children;for(let V=0,q=z.length;V<q;V++)_(z[V],C,N,E,M)}function T(w){w.target.removeEventListener("dispose",T);for(let N in c){let E=c[N],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var bN={[ld]:cd,[ud]:dd,[hd]:pd,[Lr]:fd,[cd]:ld,[dd]:ud,[pd]:hd,[fd]:Lr};function EN(e,t){function n(){let L=!1,at=new xe,ot=null,mt=new xe(0,0,0,0);return{setMask:function(nt){ot!==nt&&!L&&(e.colorMask(nt,nt,nt,nt),ot=nt)},setLocked:function(nt){L=nt},setClear:function(nt,j,Et,F,ut){ut===!0&&(nt*=F,j*=F,Et*=F),at.set(nt,j,Et,F),mt.equals(at)===!1&&(e.clearColor(nt,j,Et,F),mt.copy(at))},reset:function(){L=!1,ot=null,mt.set(-1,0,0,0)}}}function i(){let L=!1,at=!1,ot=null,mt=null,nt=null;return{setReversed:function(j){if(at!==j){let Et=t.get("EXT_clip_control");j?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),at=j;let F=nt;nt=null,this.setClear(F)}},getReversed:function(){return at},setTest:function(j){j?$(e.DEPTH_TEST):vt(e.DEPTH_TEST)},setMask:function(j){ot!==j&&!L&&(e.depthMask(j),ot=j)},setFunc:function(j){if(at&&(j=bN[j]),mt!==j){switch(j){case ld:e.depthFunc(e.NEVER);break;case cd:e.depthFunc(e.ALWAYS);break;case ud:e.depthFunc(e.LESS);break;case Lr:e.depthFunc(e.LEQUAL);break;case hd:e.depthFunc(e.EQUAL);break;case fd:e.depthFunc(e.GEQUAL);break;case dd:e.depthFunc(e.GREATER);break;case pd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}mt=j}},setLocked:function(j){L=j},setClear:function(j){nt!==j&&(at&&(j=1-j),e.clearDepth(j),nt=j)},reset:function(){L=!1,ot=null,mt=null,nt=null,at=!1}}}function s(){let L=!1,at=null,ot=null,mt=null,nt=null,j=null,Et=null,F=null,ut=null;return{setTest:function(_t){L||(_t?$(e.STENCIL_TEST):vt(e.STENCIL_TEST))},setMask:function(_t){at!==_t&&!L&&(e.stencilMask(_t),at=_t)},setFunc:function(_t,le,Oe){(ot!==_t||mt!==le||nt!==Oe)&&(e.stencilFunc(_t,le,Oe),ot=_t,mt=le,nt=Oe)},setOp:function(_t,le,Oe){(j!==_t||Et!==le||F!==Oe)&&(e.stencilOp(_t,le,Oe),j=_t,Et=le,F=Oe)},setLocked:function(_t){L=_t},setClear:function(_t){ut!==_t&&(e.clearStencil(_t),ut=_t)},reset:function(){L=!1,at=null,ot=null,mt=null,nt=null,j=null,Et=null,F=null,ut=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,v=null,y=null,_=null,T=null,w=null,C=new qt(0,0,0),N=0,E=!1,M=null,U=null,z=null,V=null,q=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,it=0,k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=it>=1):k.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=it>=2);let ct=null,gt={},yt=e.getParameter(e.SCISSOR_BOX),Yt=e.getParameter(e.VIEWPORT),rt=new xe().fromArray(yt),Kt=new xe().fromArray(Yt);function Ft(L,at,ot,mt){let nt=new Uint8Array(4),j=e.createTexture();e.bindTexture(L,j),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Et=0;Et<ot;Et++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,mt,0,e.RGBA,e.UNSIGNED_BYTE,nt):e.texImage2D(at+Et,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,nt);return j}let Q={};Q[e.TEXTURE_2D]=Ft(e.TEXTURE_2D,e.TEXTURE_2D,1),Q[e.TEXTURE_CUBE_MAP]=Ft(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[e.TEXTURE_2D_ARRAY]=Ft(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Q[e.TEXTURE_3D]=Ft(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),$(e.DEPTH_TEST),r.setFunc(Lr),Mt(!1),bt(Y0),$(e.CULL_FACE),pe(ra);function $(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function vt(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function Nt(L,at){return d[L]!==at?(e.bindFramebuffer(L,at),d[L]=at,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=at),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=at),!0):!1}function Dt(L,at){let ot=p,mt=!1;if(L){ot=f.get(at),ot===void 0&&(ot=[],f.set(at,ot));let nt=L.textures;if(ot.length!==nt.length||ot[0]!==e.COLOR_ATTACHMENT0){for(let j=0,Et=nt.length;j<Et;j++)ot[j]=e.COLOR_ATTACHMENT0+j;ot.length=nt.length,mt=!0}}else ot[0]!==e.BACK&&(ot[0]=e.BACK,mt=!0);mt&&e.drawBuffers(ot)}function jt(L){return g!==L?(e.useProgram(L),g=L,!0):!1}let We={[Za]:e.FUNC_ADD,[HM]:e.FUNC_SUBTRACT,[VM]:e.FUNC_REVERSE_SUBTRACT};We[GM]=e.MIN,We[kM]=e.MAX;let D={[XM]:e.ZERO,[WM]:e.ONE,[qM]:e.SRC_COLOR,[zf]:e.SRC_ALPHA,[jM]:e.SRC_ALPHA_SATURATE,[KM]:e.DST_COLOR,[ZM]:e.DST_ALPHA,[YM]:e.ONE_MINUS_SRC_COLOR,[Bf]:e.ONE_MINUS_SRC_ALPHA,[QM]:e.ONE_MINUS_DST_COLOR,[JM]:e.ONE_MINUS_DST_ALPHA,[$M]:e.CONSTANT_COLOR,[tb]:e.ONE_MINUS_CONSTANT_COLOR,[eb]:e.CONSTANT_ALPHA,[nb]:e.ONE_MINUS_CONSTANT_ALPHA};function pe(L,at,ot,mt,nt,j,Et,F,ut,_t){if(L===ra){x===!0&&(vt(e.BLEND),x=!1);return}if(x===!1&&($(e.BLEND),x=!0),L!==FM){if(L!==m||_t!==E){if((u!==Za||_!==Za)&&(e.blendEquation(e.FUNC_ADD),u=Za,_=Za),_t)switch(L){case Ur:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fr:e.blendFunc(e.ONE,e.ONE);break;case J0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case K0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ur:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case J0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,T=null,w=null,C.set(0,0,0),N=0,m=L,E=_t}return}nt=nt||at,j=j||ot,Et=Et||mt,(at!==u||nt!==_)&&(e.blendEquationSeparate(We[at],We[nt]),u=at,_=nt),(ot!==v||mt!==y||j!==T||Et!==w)&&(e.blendFuncSeparate(D[ot],D[mt],D[j],D[Et]),v=ot,y=mt,T=j,w=Et),(F.equals(C)===!1||ut!==N)&&(e.blendColor(F.r,F.g,F.b,ut),C.copy(F),N=ut),m=L,E=!1}function Ut(L,at){L.side===wn?vt(e.CULL_FACE):$(e.CULL_FACE);let ot=L.side===An;at&&(ot=!ot),Mt(ot),L.blending===Ur&&L.transparent===!1?pe(ra):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let mt=L.stencilWrite;o.setTest(mt),mt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),St(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):vt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(L){M!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),M=L)}function bt(L){L!==PM?($(e.CULL_FACE),L!==U&&(L===Y0?e.cullFace(e.BACK):L===zM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):vt(e.CULL_FACE),U=L}function Te(L){L!==z&&(Y&&e.lineWidth(L),z=L)}function St(L,at,ot){L?($(e.POLYGON_OFFSET_FILL),(V!==at||q!==ot)&&(e.polygonOffset(at,ot),V=at,q=ot)):vt(e.POLYGON_OFFSET_FILL)}function Wt(L){L?$(e.SCISSOR_TEST):vt(e.SCISSOR_TEST)}function Be(L){L===void 0&&(L=e.TEXTURE0+J-1),ct!==L&&(e.activeTexture(L),ct=L)}function Ce(L,at,ot){ot===void 0&&(ct===null?ot=e.TEXTURE0+J-1:ot=ct);let mt=gt[ot];mt===void 0&&(mt={type:void 0,texture:void 0},gt[ot]=mt),(mt.type!==L||mt.texture!==at)&&(ct!==ot&&(e.activeTexture(ot),ct=ot),e.bindTexture(L,at||Q[L]),mt.type=L,mt.texture=at)}function A(){let L=gt[ct];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(L){rt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),rt.copy(L))}function Pt(L){Kt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Kt.copy(L))}function At(L,at){let ot=c.get(at);ot===void 0&&(ot=new WeakMap,c.set(at,ot));let mt=ot.get(L);mt===void 0&&(mt=e.getUniformBlockIndex(at,L.name),ot.set(L,mt))}function ht(L,at){let mt=c.get(at).get(L);l.get(at)!==mt&&(e.uniformBlockBinding(at,mt,L.__bindingPointIndex),l.set(at,mt))}function Lt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},ct=null,gt={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,v=null,y=null,_=null,T=null,w=null,C=new qt(0,0,0),N=0,E=!1,M=null,U=null,z=null,V=null,q=null,rt.set(0,0,e.canvas.width,e.canvas.height),Kt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:$,disable:vt,bindFramebuffer:Nt,drawBuffers:Dt,useProgram:jt,setBlending:pe,setMaterial:Ut,setFlipSided:Mt,setCullFace:bt,setLineWidth:Te,setPolygonOffset:St,setScissorTest:Wt,activeTexture:Be,bindTexture:Ce,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Rt,texImage3D:st,updateUBOMapping:At,uniformBlockBinding:ht,texStorage2D:lt,texStorage3D:Tt,texSubImage2D:Z,texSubImage3D:tt,compressedTexSubImage2D:W,compressedTexSubImage3D:wt,scissor:dt,viewport:Pt,reset:Lt}}function TN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Jc("canvas")}function x(A,S,B){let Z=1,tt=Ce(A);if((tt.width>B||tt.height>B)&&(Z=B/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let W=Math.floor(Z*tt.width),wt=Math.floor(Z*tt.height);d===void 0&&(d=g(W,wt));let lt=S?g(W,wt):d;return lt.width=W,lt.height=wt,lt.getContext("2d").drawImage(A,0,0,W,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+W+"x"+wt+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(A,S,B,Z,tt=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=S;if(S===e.RED&&(B===e.FLOAT&&(W=e.R32F),B===e.HALF_FLOAT&&(W=e.R16F),B===e.UNSIGNED_BYTE&&(W=e.R8)),S===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(W=e.R8UI),B===e.UNSIGNED_SHORT&&(W=e.R16UI),B===e.UNSIGNED_INT&&(W=e.R32UI),B===e.BYTE&&(W=e.R8I),B===e.SHORT&&(W=e.R16I),B===e.INT&&(W=e.R32I)),S===e.RG&&(B===e.FLOAT&&(W=e.RG32F),B===e.HALF_FLOAT&&(W=e.RG16F),B===e.UNSIGNED_BYTE&&(W=e.RG8)),S===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(W=e.RG8UI),B===e.UNSIGNED_SHORT&&(W=e.RG16UI),B===e.UNSIGNED_INT&&(W=e.RG32UI),B===e.BYTE&&(W=e.RG8I),B===e.SHORT&&(W=e.RG16I),B===e.INT&&(W=e.RG32I)),S===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(W=e.RGB8UI),B===e.UNSIGNED_SHORT&&(W=e.RGB16UI),B===e.UNSIGNED_INT&&(W=e.RGB32UI),B===e.BYTE&&(W=e.RGB8I),B===e.SHORT&&(W=e.RGB16I),B===e.INT&&(W=e.RGB32I)),S===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),B===e.UNSIGNED_INT&&(W=e.RGBA32UI),B===e.BYTE&&(W=e.RGBA8I),B===e.SHORT&&(W=e.RGBA16I),B===e.INT&&(W=e.RGBA32I)),S===e.RGB&&(B===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),S===e.RGBA){let wt=tt?Yc:ce.getTransfer(Z);B===e.FLOAT&&(W=e.RGBA32F),B===e.HALF_FLOAT&&(W=e.RGBA16F),B===e.UNSIGNED_BYTE&&(W=wt===Se?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(A,S){let B;return A?S===null||S===$a||S===El?B=e.DEPTH24_STENCIL8:S===Rs?B=e.DEPTH32F_STENCIL8:S===Ml&&(B=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$a||S===El?B=e.DEPTH_COMPONENT24:S===Rs?B=e.DEPTH_COMPONENT32F:S===Ml&&(B=e.DEPTH_COMPONENT16),B}function T(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==mn&&A.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){let S=A.target;S.removeEventListener("dispose",w),N(S),S.isVideoTexture&&h.delete(S)}function C(A){let S=A.target;S.removeEventListener("dispose",C),M(S)}function N(A){let S=i.get(A);if(S.__webglInit===void 0)return;let B=A.source,Z=f.get(B);if(Z){let tt=Z[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(A),Object.keys(Z).length===0&&f.delete(B)}i.remove(A)}function E(A){let S=i.get(A);e.deleteTexture(S.__webglTexture);let B=A.source,Z=f.get(B);delete Z[S.__cacheKey],r.memory.textures--}function M(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let tt=0;tt<S.__webglFramebuffer[Z].length;tt++)e.deleteFramebuffer(S.__webglFramebuffer[Z][tt]);else e.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[Z]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=A.textures;for(let Z=0,tt=B.length;Z<tt;Z++){let W=i.get(B[Z]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),r.memory.textures--),i.remove(B[Z])}i.remove(A)}let U=0;function z(){U=0}function V(){let A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function q(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function J(A,S){let B=i.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+S)}function Y(A,S){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Q(B,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+S)}function it(A,S){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Q(B,A,S);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+S)}function k(A,S){let B=i.get(A);if(A.version>0&&B.__version!==A.version){$(B,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+S)}let ct={[Ff]:e.REPEAT,[Ya]:e.CLAMP_TO_EDGE,[Hf]:e.MIRRORED_REPEAT},gt={[mn]:e.NEAREST,[hb]:e.NEAREST_MIPMAP_NEAREST,[pu]:e.NEAREST_MIPMAP_LINEAR,[Tn]:e.LINEAR,[_d]:e.LINEAR_MIPMAP_NEAREST,[ss]:e.LINEAR_MIPMAP_LINEAR},yt={[mb]:e.NEVER,[Sb]:e.ALWAYS,[gb]:e.LESS,[lv]:e.LEQUAL,[vb]:e.EQUAL,[xb]:e.GEQUAL,[_b]:e.GREATER,[yb]:e.NOTEQUAL};function Yt(A,S){if(S.type===Rs&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===_d||S.magFilter===pu||S.magFilter===ss||S.minFilter===Tn||S.minFilter===_d||S.minFilter===pu||S.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,ct[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,ct[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,ct[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,gt[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,gt[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===mn||S.minFilter!==pu&&S.minFilter!==ss||S.type===Rs&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function rt(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));let Z=S.source,tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));let W=q(S);if(W!==A.__cacheKey){tt[W]===void 0&&(tt[W]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),tt[W].usedTimes++;let wt=tt[A.__cacheKey];wt!==void 0&&(tt[A.__cacheKey].usedTimes--,wt.usedTimes===0&&E(S)),A.__cacheKey=W,A.__webglTexture=tt[W].texture}return B}function Kt(A,S,B){return Math.floor(Math.floor(A/B)/S)}function Ft(A,S,B,Z){let W=A.updateRanges;if(W.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,B,Z,S.data);else{W.sort((st,dt)=>st.start-dt.start);let wt=0;for(let st=1;st<W.length;st++){let dt=W[wt],Pt=W[st],At=dt.start+dt.count,ht=Kt(Pt.start,S.width,4),Lt=Kt(dt.start,S.width,4);Pt.start<=At+1&&ht===Lt&&Kt(Pt.start+Pt.count-1,S.width,4)===ht?dt.count=Math.max(dt.count,Pt.start+Pt.count-dt.start):(++wt,W[wt]=Pt)}W.length=wt+1;let lt=e.getParameter(e.UNPACK_ROW_LENGTH),Tt=e.getParameter(e.UNPACK_SKIP_PIXELS),Rt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let st=0,dt=W.length;st<dt;st++){let Pt=W[st],At=Math.floor(Pt.start/4),ht=Math.ceil(Pt.count/4),Lt=At%S.width,L=Math.floor(At/S.width),at=ht,ot=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Lt,L,at,ot,B,Z,S.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,lt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Rt)}}function Q(A,S,B){let Z=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=e.TEXTURE_3D);let tt=rt(A,S),W=S.source;n.bindTexture(Z,A.__webglTexture,e.TEXTURE0+B);let wt=i.get(W);if(W.version!==wt.__version||tt===!0){n.activeTexture(e.TEXTURE0+B);let lt=ce.getPrimaries(ce.workingColorSpace),Tt=S.colorSpace===la?null:ce.getPrimaries(S.colorSpace),Rt=S.colorSpace===la||lt===Tt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let st=x(S.image,!1,s.maxTextureSize);st=Be(S,st);let dt=a.convert(S.format,S.colorSpace),Pt=a.convert(S.type),At=y(S.internalFormat,dt,Pt,S.colorSpace,S.isVideoTexture);Yt(Z,S);let ht,Lt=S.mipmaps,L=S.isVideoTexture!==!0,at=wt.__version===void 0||tt===!0,ot=W.dataReady,mt=T(S,st);if(S.isDepthTexture)At=_(S.format===Tl,S.type),at&&(L?n.texStorage2D(e.TEXTURE_2D,1,At,st.width,st.height):n.texImage2D(e.TEXTURE_2D,0,At,st.width,st.height,0,dt,Pt,null));else if(S.isDataTexture)if(Lt.length>0){L&&at&&n.texStorage2D(e.TEXTURE_2D,mt,At,Lt[0].width,Lt[0].height);for(let nt=0,j=Lt.length;nt<j;nt++)ht=Lt[nt],L?ot&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,ht.width,ht.height,dt,Pt,ht.data):n.texImage2D(e.TEXTURE_2D,nt,At,ht.width,ht.height,0,dt,Pt,ht.data);S.generateMipmaps=!1}else L?(at&&n.texStorage2D(e.TEXTURE_2D,mt,At,st.width,st.height),ot&&Ft(S,st,dt,Pt)):n.texImage2D(e.TEXTURE_2D,0,At,st.width,st.height,0,dt,Pt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,At,Lt[0].width,Lt[0].height,st.depth);for(let nt=0,j=Lt.length;nt<j;nt++)if(ht=Lt[nt],S.format!==Wi)if(dt!==null)if(L){if(ot)if(S.layerUpdates.size>0){let Et=mv(ht.width,ht.height,S.format,S.type);for(let F of S.layerUpdates){let ut=ht.data.subarray(F*Et/ht.data.BYTES_PER_ELEMENT,(F+1)*Et/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,F,ht.width,ht.height,1,dt,ut)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,st.depth,dt,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,nt,At,ht.width,ht.height,st.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ot&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,st.depth,dt,Pt,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,nt,At,ht.width,ht.height,st.depth,0,dt,Pt,ht.data)}else{L&&at&&n.texStorage2D(e.TEXTURE_2D,mt,At,Lt[0].width,Lt[0].height);for(let nt=0,j=Lt.length;nt<j;nt++)ht=Lt[nt],S.format!==Wi?dt!==null?L?ot&&n.compressedTexSubImage2D(e.TEXTURE_2D,nt,0,0,ht.width,ht.height,dt,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,nt,At,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ot&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,ht.width,ht.height,dt,Pt,ht.data):n.texImage2D(e.TEXTURE_2D,nt,At,ht.width,ht.height,0,dt,Pt,ht.data)}else if(S.isDataArrayTexture)if(L){if(at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,mt,At,st.width,st.height,st.depth),ot)if(S.layerUpdates.size>0){let nt=mv(st.width,st.height,S.format,S.type);for(let j of S.layerUpdates){let Et=st.data.subarray(j*nt/st.data.BYTES_PER_ELEMENT,(j+1)*nt/st.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,dt,Pt,Et)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,dt,Pt,st.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,st.width,st.height,st.depth,0,dt,Pt,st.data);else if(S.isData3DTexture)L?(at&&n.texStorage3D(e.TEXTURE_3D,mt,At,st.width,st.height,st.depth),ot&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,dt,Pt,st.data)):n.texImage3D(e.TEXTURE_3D,0,At,st.width,st.height,st.depth,0,dt,Pt,st.data);else if(S.isFramebufferTexture){if(at)if(L)n.texStorage2D(e.TEXTURE_2D,mt,At,st.width,st.height);else{let nt=st.width,j=st.height;for(let Et=0;Et<mt;Et++)n.texImage2D(e.TEXTURE_2D,Et,At,nt,j,0,dt,Pt,null),nt>>=1,j>>=1}}else if(Lt.length>0){if(L&&at){let nt=Ce(Lt[0]);n.texStorage2D(e.TEXTURE_2D,mt,At,nt.width,nt.height)}for(let nt=0,j=Lt.length;nt<j;nt++)ht=Lt[nt],L?ot&&n.texSubImage2D(e.TEXTURE_2D,nt,0,0,dt,Pt,ht):n.texImage2D(e.TEXTURE_2D,nt,At,dt,Pt,ht);S.generateMipmaps=!1}else if(L){if(at){let nt=Ce(st);n.texStorage2D(e.TEXTURE_2D,mt,At,nt.width,nt.height)}ot&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,Pt,st)}else n.texImage2D(e.TEXTURE_2D,0,At,dt,Pt,st);m(S)&&u(Z),wt.__version=W.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function $(A,S,B){if(S.image.length!==6)return;let Z=rt(A,S),tt=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+B);let W=i.get(tt);if(tt.version!==W.__version||Z===!0){n.activeTexture(e.TEXTURE0+B);let wt=ce.getPrimaries(ce.workingColorSpace),lt=S.colorSpace===la?null:ce.getPrimaries(S.colorSpace),Tt=S.colorSpace===la||wt===lt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!Rt&&!st?dt[j]=x(S.image[j],!0,s.maxCubemapSize):dt[j]=st?S.image[j].image:S.image[j],dt[j]=Be(S,dt[j]);let Pt=dt[0],At=a.convert(S.format,S.colorSpace),ht=a.convert(S.type),Lt=y(S.internalFormat,At,ht,S.colorSpace),L=S.isVideoTexture!==!0,at=W.__version===void 0||Z===!0,ot=tt.dataReady,mt=T(S,Pt);Yt(e.TEXTURE_CUBE_MAP,S);let nt;if(Rt){L&&at&&n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Lt,Pt.width,Pt.height);for(let j=0;j<6;j++){nt=dt[j].mipmaps;for(let Et=0;Et<nt.length;Et++){let F=nt[Et];S.format!==Wi?At!==null?L?ot&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,0,0,F.width,F.height,At,F.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,Lt,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,0,0,F.width,F.height,At,ht,F.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,Lt,F.width,F.height,0,At,ht,F.data)}}}else{if(nt=S.mipmaps,L&&at){nt.length>0&&mt++;let j=Ce(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Lt,j.width,j.height)}for(let j=0;j<6;j++)if(st){L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,At,ht,dt[j].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Lt,dt[j].width,dt[j].height,0,At,ht,dt[j].data);for(let Et=0;Et<nt.length;Et++){let ut=nt[Et].image[j].image;L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,0,0,ut.width,ut.height,At,ht,ut.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,Lt,ut.width,ut.height,0,At,ht,ut.data)}}else{L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At,ht,dt[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Lt,At,ht,dt[j]);for(let Et=0;Et<nt.length;Et++){let F=nt[Et];L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,0,0,At,ht,F.image[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,Lt,At,ht,F.image[j])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),W.__version=tt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function vt(A,S,B,Z,tt,W){let wt=a.convert(B.format,B.colorSpace),lt=a.convert(B.type),Tt=y(B.internalFormat,wt,lt,B.colorSpace),Rt=i.get(S),st=i.get(B);if(st.__renderTarget=S,!Rt.__hasExternalTextures){let dt=Math.max(1,S.width>>W),Pt=Math.max(1,S.height>>W);tt===e.TEXTURE_3D||tt===e.TEXTURE_2D_ARRAY?n.texImage3D(tt,W,Tt,dt,Pt,S.depth,0,wt,lt,null):n.texImage2D(tt,W,Tt,dt,Pt,0,wt,lt,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),St(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,tt,st.__webglTexture,0,Te(S)):(tt===e.TEXTURE_2D||tt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,tt,st.__webglTexture,W),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Nt(A,S,B){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){let Z=S.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,W=_(S.stencilBuffer,tt),wt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=Te(S);St(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt,W,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,W,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,W,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,wt,e.RENDERBUFFER,A)}else{let Z=S.textures;for(let tt=0;tt<Z.length;tt++){let W=Z[tt],wt=a.convert(W.format,W.colorSpace),lt=a.convert(W.type),Tt=y(W.internalFormat,wt,lt,W.colorSpace),Rt=Te(S);B&&St(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,Tt,S.width,S.height):St(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Rt,Tt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Tt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Dt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);let tt=Z.__webglTexture,W=Te(S);if(S.depthTexture.format===hl)St(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0);else if(S.depthTexture.format===Tl)St(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function jt(A){let S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let Z=A.texture.mipmaps;Z&&Z.length>0?Dt(S.__webglFramebuffer[0],A):Dt(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=e.createRenderbuffer(),Nt(S.__webglDepthbuffer[Z],A,!1);else{let tt=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,W)}}else{let Z=A.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Nt(S.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,W)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function We(A,S,B){let Z=i.get(A);S!==void 0&&vt(Z.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&jt(A)}function D(A){let S=A.texture,B=i.get(A),Z=i.get(S);A.addEventListener("dispose",C);let tt=A.textures,W=A.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=S.version,r.memory.textures++),W){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)B.__webglFramebuffer[lt][Tt]=e.createFramebuffer()}else B.__webglFramebuffer[lt]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)B.__webglFramebuffer[lt]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(wt)for(let lt=0,Tt=tt.length;lt<Tt;lt++){let Rt=i.get(tt[lt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&St(A)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){let Tt=tt[lt];B.__webglColorRenderbuffer[lt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);let Rt=a.convert(Tt.format,Tt.colorSpace),st=a.convert(Tt.type),dt=y(Tt.internalFormat,Rt,st,Tt.colorSpace,A.isXRRenderTarget===!0),Pt=Te(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Pt,dt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Nt(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Yt(e.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)vt(B.__webglFramebuffer[lt][Tt],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt);else vt(B.__webglFramebuffer[lt],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(wt){for(let lt=0,Tt=tt.length;lt<Tt;lt++){let Rt=tt[lt],st=i.get(Rt),dt=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(dt,st.__webglTexture),Yt(dt,Rt),vt(B.__webglFramebuffer,A,Rt,e.COLOR_ATTACHMENT0+lt,dt,0),m(Rt)&&u(dt)}n.unbindTexture()}else{let lt=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(lt,Z.__webglTexture),Yt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)vt(B.__webglFramebuffer[Tt],A,S,e.COLOR_ATTACHMENT0,lt,Tt);else vt(B.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,lt,0);m(S)&&u(lt),n.unbindTexture()}A.depthBuffer&&jt(A)}function pe(A){let S=A.textures;for(let B=0,Z=S.length;B<Z;B++){let tt=S[B];if(m(tt)){let W=v(A),wt=i.get(tt).__webglTexture;n.bindTexture(W,wt),u(W),n.unbindTexture()}}}let Ut=[],Mt=[];function bt(A){if(A.samples>0){if(St(A)===!1){let S=A.textures,B=A.width,Z=A.height,tt=e.COLOR_BUFFER_BIT,W=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,wt=i.get(A),lt=S.length>1;if(lt)for(let Rt=0;Rt<S.length;Rt++)n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let Tt=A.texture.mipmaps;Tt&&Tt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=e.STENCIL_BUFFER_BIT)),lt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,wt.__webglColorRenderbuffer[Rt]);let st=i.get(S[Rt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,st,0)}e.blitFramebuffer(0,0,B,Z,0,0,B,Z,tt,e.NEAREST),l===!0&&(Ut.length=0,Mt.length=0,Ut.push(e.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ut.push(W),Mt.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Mt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),lt)for(let Rt=0;Rt<S.length;Rt++){n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,wt.__webglColorRenderbuffer[Rt]);let st=i.get(S[Rt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,st,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Te(A){return Math.min(s.maxSamples,A.samples)}function St(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Wt(A){let S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Be(A,S){let B=A.colorSpace,Z=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Or&&B!==la&&(ce.getTransfer(B)===Se?(Z!==Wi||tt!==as)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=it,this.setTextureCube=k,this.rebindTextures=We,this.setupRenderTarget=D,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=St}function AN(e,t){function n(i,s=la){let a,r=ce.getTransfer(s);if(i===as)return e.UNSIGNED_BYTE;if(i===xd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Sd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ev)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===nv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===$0)return e.BYTE;if(i===tv)return e.SHORT;if(i===Ml)return e.UNSIGNED_SHORT;if(i===yd)return e.INT;if(i===$a)return e.UNSIGNED_INT;if(i===Rs)return e.FLOAT;if(i===bl)return e.HALF_FLOAT;if(i===iv)return e.ALPHA;if(i===sv)return e.RGB;if(i===Wi)return e.RGBA;if(i===hl)return e.DEPTH_COMPONENT;if(i===Tl)return e.DEPTH_STENCIL;if(i===av)return e.RED;if(i===Md)return e.RED_INTEGER;if(i===rv)return e.RG;if(i===bd)return e.RG_INTEGER;if(i===Ed)return e.RGBA_INTEGER;if(i===mu||i===gu||i===vu||i===_u)if(r===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===mu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===mu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_u)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Td||i===Ad||i===wd||i===Rd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Td)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ad)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cd||i===Dd||i===Nd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Cd||i===Dd)return r===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Nd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ud||i===Ld||i===Od||i===Id||i===Pd||i===zd||i===Bd||i===Fd||i===Hd||i===Vd||i===Gd||i===kd||i===Xd||i===Wd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ud)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ld)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Od)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Id)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qd||i===Yd||i===Zd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===qd)return r===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===Kd||i===Qd||i===jd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Jd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===El?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var wN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new ru(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new oi({vertexShader:wN,fragmentShader:RN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Me(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cv=class extends ia{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Rv,u={},v=n.getContextAttributes(),y=null,_=null,T=[],w=[],C=new Qt,N=null,E=new En;E.viewport=new xe;let M=new En;M.viewport=new xe;let U=[E,M],z=new od,V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let $=T[Q];return $===void 0&&($=new ml,T[Q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Q){let $=T[Q];return $===void 0&&($=new ml,T[Q]=$),$.getGripSpace()},this.getHand=function(Q){let $=T[Q];return $===void 0&&($=new ml,T[Q]=$),$.getHandSpace()};function J(Q){let $=w.indexOf(Q.inputSource);if($===-1)return;let vt=T[$];vt!==void 0&&(vt.update(Q.inputSource,Q.frame,c||r),vt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let Q=0;Q<T.length;Q++){let $=w[Q];$!==null&&(w[Q]=null,T[Q].disconnect($))}V=null,q=null,m.reset();for(let Q in u)delete u[Q];t.setRenderTarget(y),p=null,f=null,d=null,s=null,_=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await n.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Nt=null,Dt=null;v.depth&&(Dt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,vt=v.stencil?Tl:hl,Nt=v.stencil?El:$a);let jt={colorFormat:n.RGBA8,depthFormat:Dt,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new As(f.textureWidth,f.textureHeight,{format:Wi,type:as,depthTexture:new au(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let vt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new As(p.framebufferWidth,p.framebufferHeight,{format:Wi,type:as,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Q){for(let $=0;$<Q.removed.length;$++){let vt=Q.removed[$],Nt=w.indexOf(vt);Nt>=0&&(w[Nt]=null,T[Nt].disconnect(vt))}for(let $=0;$<Q.added.length;$++){let vt=Q.added[$],Nt=w.indexOf(vt);if(Nt===-1){for(let jt=0;jt<T.length;jt++)if(jt>=w.length){w.push(vt),Nt=jt;break}else if(w[jt]===null){w[jt]=vt,Nt=jt;break}if(Nt===-1)break}let Dt=T[Nt];Dt&&Dt.connect(vt)}}let k=new I,ct=new I;function gt(Q,$,vt){k.setFromMatrixPosition($.matrixWorld),ct.setFromMatrixPosition(vt.matrixWorld);let Nt=k.distanceTo(ct),Dt=$.projectionMatrix.elements,jt=vt.projectionMatrix.elements,We=Dt[14]/(Dt[10]-1),D=Dt[14]/(Dt[10]+1),pe=(Dt[9]+1)/Dt[5],Ut=(Dt[9]-1)/Dt[5],Mt=(Dt[8]-1)/Dt[0],bt=(jt[8]+1)/jt[0],Te=We*Mt,St=We*bt,Wt=Nt/(-Mt+bt),Be=Wt*-Mt;if($.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Be),Q.translateZ(Wt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Dt[10]===-1)Q.projectionMatrix.copy($.projectionMatrix),Q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Ce=We+Wt,A=D+Wt,S=Te-Be,B=St+(Nt-Be),Z=pe*D/A*Ce,tt=Ut*D/A*Ce;Q.projectionMatrix.makePerspective(S,B,Z,tt,Ce,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,$){$===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices($.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let $=Q.near,vt=Q.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),z.near=M.near=E.near=$,z.far=M.far=E.far=vt,(V!==z.near||q!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,q=z.far),z.layers.mask=Q.layers.mask|6,E.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;let Nt=Q.parent,Dt=z.cameras;yt(z,Nt);for(let jt=0;jt<Dt.length;jt++)yt(Dt[jt],Nt);Dt.length===2?gt(z,E,M):z.projectionMatrix.copy(E.projectionMatrix),Yt(Q,z,Nt)};function Yt(Q,$,vt){vt===null?Q.matrix.copy($.matrixWorld):(Q.matrix.copy(vt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply($.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy($.projectionMatrix),Q.projectionMatrixInverse.copy($.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=fl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Q){return u[Q]};let rt=null;function Kt(Q,$){if(h=$.getViewerPose(c||r),g=$,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Nt=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,Nt=!0);for(let D=0;D<vt.length;D++){let pe=vt[D],Ut=null;if(p!==null)Ut=p.getViewport(pe);else{let bt=d.getViewSubImage(f,pe);Ut=bt.viewport,D===0&&(t.setRenderTargetTextures(_,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(_))}let Mt=U[D];Mt===void 0&&(Mt=new En,Mt.layers.enable(D),Mt.viewport=new xe,U[D]=Mt),Mt.matrix.fromArray(pe.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(pe.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),D===0&&(z.matrix.copy(Mt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Nt===!0&&z.cameras.push(Mt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let D=d.getDepthInformation(vt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Dt&&Dt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<vt.length;D++){let pe=vt[D].camera;if(pe){let Ut=u[pe];Ut||(Ut=new ru,u[pe]=Ut);let Mt=d.getCameraImage(pe);Ut.sourceTexture=Mt}}}}for(let vt=0;vt<T.length;vt++){let Nt=w[vt],Dt=T[vt];Nt!==null&&Dt!==void 0&&Dt.update(Nt,$,c||r)}rt&&rt(Q,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let Ft=new Qb;Ft.setAnimationLoop(Kt),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}},Xr=new is,CN=new Ve;function DN(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,fv(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,v,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(a(m,u),g(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===An&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===An&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let v=t.get(u),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Xr.copy(_),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(CN.makeRotationFromEuler(Xr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===An&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let v=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function NN(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;i.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));let T=y.program;i.updateUBOMapping(v,T);let w=t.render.frame;a[v.id]!==w&&(f(v),a[v.id]=w)}function h(v){let y=d();v.__bindingPointIndex=y;let _=e.createBuffer(),T=v.__size,w=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,T,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,_),_}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],_=v.uniforms,T=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let w=0,C=_.length;w<C;w++){let N=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,M=N.length;E<M;E++){let U=N[E];if(p(U,w,E,T)===!0){let z=U.__offset,V=Array.isArray(U.value)?U.value:[U.value],q=0;for(let J=0;J<V.length;J++){let Y=V[J],it=x(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,e.bufferSubData(e.UNIFORM_BUFFER,z+q,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,q),q+=it.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,y,_,T){let w=v.value,C=y+"_"+_;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{let N=T[C];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return T[C]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(v){let y=v.uniforms,_=0,T=16;for(let C=0,N=y.length;C<N;C++){let E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,U=E.length;M<U;M++){let z=E[M],V=Array.isArray(z.value)?z.value:[z.value];for(let q=0,J=V.length;q<J;q++){let Y=V[q],it=x(Y),k=_%T,ct=k%it.boundary,gt=k+ct;_+=ct,gt!==0&&T-gt<it.storage&&(_+=T-gt),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=it.storage}}}let w=_%T;return w>0&&(_+=T-w),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function u(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var ip=class{constructor(t={}){let{canvas:n=Mb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,T=!1;this._outputColorSpace=an;let w=0,C=0,N=null,E=-1,M=null,U=new xe,z=new xe,V=null,q=new qt(0),J=0,Y=n.width,it=n.height,k=1,ct=null,gt=null,yt=new xe(0,0,Y,it),Yt=new xe(0,0,Y,it),rt=!1,Kt=new _l,Ft=!1,Q=!1,$=new Ve,vt=new I,Nt=new xe,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function We(){return N===null?k:1}let D=i;function pe(b,O){return n.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",nt,!1),D===null){let O="webgl2";if(D=pe(O,b),D===null)throw pe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ut,Mt,bt,Te,St,Wt,Be,Ce,A,S,B,Z,tt,W,wt,lt,Tt,Rt,st,dt,Pt,At,ht,Lt;function L(){Ut=new J3(D),Ut.init(),At=new AN(D,Ut),Mt=new G3(D,Ut,t,At),bt=new EN(D,Ut),Mt.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),Te=new j3(D),St=new hN,Wt=new TN(D,Ut,bt,St,Mt,At,Te),Be=new X3(_),Ce=new Z3(_),A=new sR(D),ht=new H3(D,A),S=new K3(D,A,Te,ht),B=new tD(D,S,A,Te),st=new $3(D,Mt,Wt),lt=new k3(St),Z=new uN(_,Be,Ce,Ut,Mt,ht,lt),tt=new DN(_,St),W=new dN,wt=new yN(Ut),Rt=new F3(_,Be,Ce,bt,B,p,l),Tt=new MN(_,B,Mt),Lt=new NN(D,Te,Mt,bt),dt=new V3(D,Ut,Te),Pt=new Q3(D,Ut,Te),Te.programs=Z.programs,_.capabilities=Mt,_.extensions=Ut,_.properties=St,_.renderLists=W,_.shadowMap=Tt,_.state=bt,_.info=Te}L();let at=new Cv(_,D);this.xr=at,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=Ut.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ut.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(Y,it,!1))},this.getSize=function(b){return b.set(Y,it)},this.setSize=function(b,O,H=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,it=O,n.width=Math.floor(b*k),n.height=Math.floor(O*k),H===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Y*k,it*k).floor()},this.setDrawingBufferSize=function(b,O,H){Y=b,it=O,k=H,n.width=Math.floor(b*H),n.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(yt)},this.setViewport=function(b,O,H,G){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,O,H,G),bt.viewport(U.copy(yt).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Yt)},this.setScissor=function(b,O,H,G){b.isVector4?Yt.set(b.x,b.y,b.z,b.w):Yt.set(b,O,H,G),bt.scissor(z.copy(Yt).multiplyScalar(k).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(b){bt.setScissorTest(rt=b)},this.setOpaqueSort=function(b){ct=b},this.setTransparentSort=function(b){gt=b},this.getClearColor=function(b){return b.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,H=!0){let G=0;if(b){let P=!1;if(N!==null){let et=N.texture.format;P=et===Ed||et===bd||et===Md}if(P){let et=N.texture.type,pt=et===as||et===$a||et===Ml||et===El||et===xd||et===Sd,Ct=Rt.getClearColor(),xt=Rt.getClearAlpha(),Vt=Ct.r,kt=Ct.g,Ot=Ct.b;pt?(g[0]=Vt,g[1]=kt,g[2]=Ot,g[3]=xt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Vt,x[1]=kt,x[2]=Ot,x[3]=xt,D.clearBufferiv(D.COLOR,0,x))}else G|=D.COLOR_BUFFER_BIT}O&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",nt,!1),Rt.dispose(),W.dispose(),wt.dispose(),St.dispose(),Be.dispose(),Ce.dispose(),B.dispose(),ht.dispose(),Lt.dispose(),Z.dispose(),at.dispose(),at.removeEventListener("sessionstart",Oe),at.removeEventListener("sessionend",te),ln.stop()};function ot(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=Te.autoReset,O=Tt.enabled,H=Tt.autoUpdate,G=Tt.needsUpdate,P=Tt.type;L(),Te.autoReset=b,Tt.enabled=O,Tt.autoUpdate=H,Tt.needsUpdate=G,Tt.type=P}function nt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function j(b){let O=b.target;O.removeEventListener("dispose",j),Et(O)}function Et(b){F(b),St.remove(b)}function F(b){let O=St.get(b).programs;O!==void 0&&(O.forEach(function(H){Z.releaseProgram(H)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,G,P,et){O===null&&(O=Dt);let pt=P.isMesh&&P.matrixWorld.determinant()<0,Ct=Ie(b,O,H,G,P);bt.setMaterial(G,pt);let xt=H.index,Vt=1;if(G.wireframe===!0){if(xt=S.getWireframeAttribute(H),xt===void 0)return;Vt=2}let kt=H.drawRange,Ot=H.attributes.position,ae=kt.start*Vt,be=(kt.start+kt.count)*Vt;et!==null&&(ae=Math.max(ae,et.start*Vt),be=Math.min(be,(et.start+et.count)*Vt)),xt!==null?(ae=Math.max(ae,0),be=Math.min(be,xt.count)):Ot!=null&&(ae=Math.max(ae,0),be=Math.min(be,Ot.count));let qe=be-ae;if(qe<0||qe===1/0)return;ht.setup(P,G,Ct,H,xt);let Pe,Ae=dt;if(xt!==null&&(Pe=A.get(xt),Ae=Pt,Ae.setIndex(Pe)),P.isMesh)G.wireframe===!0?(bt.setLineWidth(G.wireframeLinewidth*We()),Ae.setMode(D.LINES)):Ae.setMode(D.TRIANGLES);else if(P.isLine){let zt=G.linewidth;zt===void 0&&(zt=1),bt.setLineWidth(zt*We()),P.isLineSegments?Ae.setMode(D.LINES):P.isLineLoop?Ae.setMode(D.LINE_LOOP):Ae.setMode(D.LINE_STRIP)}else P.isPoints?Ae.setMode(D.POINTS):P.isSprite&&Ae.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)dl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))Ae.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let zt=P._multiDrawStarts,Ge=P._multiDrawCounts,ue=P._multiDrawCount,fi=xt?A.get(xt).bytesPerElement:1,Zr=St.get(G).currentProgram.getUniforms();for(let di=0;di<ue;di++)Zr.setValue(D,"_gl_DrawID",di),Ae.render(zt[di]/fi,Ge[di])}else if(P.isInstancedMesh)Ae.renderInstances(ae,qe,P.count);else if(H.isInstancedBufferGeometry){let zt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ge=Math.min(H.instanceCount,zt);Ae.renderInstances(ae,qe,Ge)}else Ae.render(ae,qe)};function ut(b,O,H){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=An,b.needsUpdate=!0,tr(b,O,H),b.side=na,b.needsUpdate=!0,tr(b,O,H),b.side=wn):tr(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),u=wt.get(H),u.init(O),y.push(u),H.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),b!==H&&b.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();let G=new Set;return b.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let et=P.material;if(et)if(Array.isArray(et))for(let pt=0;pt<et.length;pt++){let Ct=et[pt];ut(Ct,H,P),G.add(Ct)}else ut(et,H,P),G.add(et)}),u=y.pop(),G},this.compileAsync=function(b,O,H=null){let G=this.compile(b,O,H);return new Promise(P=>{function et(){if(G.forEach(function(pt){St.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){P(b);return}setTimeout(et,10)}Ut.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let _t=null;function le(b){_t&&_t(b)}function Oe(){ln.stop()}function te(){ln.start()}let ln=new Qb;ln.setAnimationLoop(le),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(b){_t=b,at.setAnimationLoop(b),b===null?ln.stop():ln.start()},at.addEventListener("sessionstart",Oe),at.addEventListener("sessionend",te),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(O),O=at.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,N),u=wt.get(b,y.length),u.init(O),y.push(u),$.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Kt.setFromProjectionMatrix($,ns,O.reversedDepth),Q=this.localClippingEnabled,Ft=lt.init(this.clippingPlanes,Q),m=W.get(b,v.length),m.init(),v.push(m),at.enabled===!0&&at.isPresenting===!0){let et=_.xr.getDepthSensingMesh();et!==null&&ci(et,O,-1/0,_.sortObjects)}ci(b,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ct,gt),jt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,jt&&Rt.addToRenderList(m,b),this.info.render.frame++,Ft===!0&&lt.beginShadows();let H=u.state.shadowsArray;Tt.render(H,b,O),Ft===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,P=m.transmissive;if(u.setupLights(),O.isArrayCamera){let et=O.cameras;if(P.length>0)for(let pt=0,Ct=et.length;pt<Ct;pt++){let xt=et[pt];Ds(G,P,b,xt)}jt&&Rt.render(b);for(let pt=0,Ct=et.length;pt<Ct;pt++){let xt=et[pt];ui(m,b,xt,xt.viewport)}}else P.length>0&&Ds(G,P,b,O),jt&&Rt.render(b),ui(m,b,O);N!==null&&C===0&&(Wt.updateMultisampleRenderTarget(N),Wt.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(_,b,O),ht.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],Ft===!0&&lt.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ci(b,O,H,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Kt.intersectsSprite(b)){G&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4($);let pt=B.update(b),Ct=b.material;Ct.visible&&m.push(b,pt,Ct,H,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Kt.intersectsObject(b))){let pt=B.update(b),Ct=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Nt.copy(pt.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4($)),Array.isArray(Ct)){let xt=pt.groups;for(let Vt=0,kt=xt.length;Vt<kt;Vt++){let Ot=xt[Vt],ae=Ct[Ot.materialIndex];ae&&ae.visible&&m.push(b,pt,ae,H,Nt.z,Ot)}}else Ct.visible&&m.push(b,pt,Ct,H,Nt.z,null)}}let et=b.children;for(let pt=0,Ct=et.length;pt<Ct;pt++)ci(et[pt],O,H,G)}function ui(b,O,H,G){let P=b.opaque,et=b.transmissive,pt=b.transparent;u.setupLightsView(H),Ft===!0&&lt.setGlobalState(_.clippingPlanes,H),G&&bt.viewport(U.copy(G)),P.length>0&&rs(P,O,H),et.length>0&&rs(et,O,H),pt.length>0&&rs(pt,O,H),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Ds(b,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new As(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?bl:as,minFilter:ss,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let et=u.state.transmissionRenderTarget[G.id],pt=G.viewport||U;et.setSize(pt.z*_.transmissionResolutionScale,pt.w*_.transmissionResolutionScale);let Ct=_.getRenderTarget(),xt=_.getActiveCubeFace(),Vt=_.getActiveMipmapLevel();_.setRenderTarget(et),_.getClearColor(q),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),jt&&Rt.render(H);let kt=_.toneMapping;_.toneMapping=oa;let Ot=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),Ft===!0&&lt.setGlobalState(_.clippingPlanes,G),rs(b,H,G),Wt.updateMultisampleRenderTarget(et),Wt.updateRenderTargetMipmap(et),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let be=0,qe=O.length;be<qe;be++){let Pe=O[be],Ae=Pe.object,zt=Pe.geometry,Ge=Pe.material,ue=Pe.group;if(Ge.side===wn&&Ae.layers.test(G.layers)){let fi=Ge.side;Ge.side=An,Ge.needsUpdate=!0,Nl(Ae,H,G,zt,Ge,ue),Ge.side=fi,Ge.needsUpdate=!0,ae=!0}}ae===!0&&(Wt.updateMultisampleRenderTarget(et),Wt.updateRenderTargetMipmap(et))}_.setRenderTarget(Ct,xt,Vt),_.setClearColor(q,J),Ot!==void 0&&(G.viewport=Ot),_.toneMapping=kt}function rs(b,O,H){let G=O.isScene===!0?O.overrideMaterial:null;for(let P=0,et=b.length;P<et;P++){let pt=b[P],Ct=pt.object,xt=pt.geometry,Vt=pt.group,kt=pt.material;kt.allowOverride===!0&&G!==null&&(kt=G),Ct.layers.test(H.layers)&&Nl(Ct,O,H,xt,kt,Vt)}}function Nl(b,O,H,G,P,et){b.onBeforeRender(_,O,H,G,P,et),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),P.onBeforeRender(_,O,H,G,b,et),P.transparent===!0&&P.side===wn&&P.forceSinglePass===!1?(P.side=An,P.needsUpdate=!0,_.renderBufferDirect(H,O,G,P,b,et),P.side=na,P.needsUpdate=!0,_.renderBufferDirect(H,O,G,P,b,et),P.side=wn):_.renderBufferDirect(H,O,G,P,b,et),b.onAfterRender(_,O,H,G,P,et)}function tr(b,O,H){O.isScene!==!0&&(O=Dt);let G=St.get(b),P=u.state.lights,et=u.state.shadowsArray,pt=P.state.version,Ct=Z.getParameters(b,P.state,et,O,H),xt=Z.getProgramCacheKey(Ct),Vt=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?Ce:Be).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",j),Vt=new Map,G.programs=Vt);let kt=Vt.get(xt);if(kt!==void 0){if(G.currentProgram===kt&&G.lightsStateVersion===pt)return se(b,Ct),kt}else Ct.uniforms=Z.getUniforms(b),b.onBeforeCompile(Ct,_),kt=Z.acquireProgram(Ct,xt),Vt.set(xt,kt),G.uniforms=Ct.uniforms;let Ot=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=lt.uniform),se(b,Ct),G.needsLights=Vn(b),G.lightsStateVersion=pt,G.needsLights&&(Ot.ambientLightColor.value=P.state.ambient,Ot.lightProbe.value=P.state.probe,Ot.directionalLights.value=P.state.directional,Ot.directionalLightShadows.value=P.state.directionalShadow,Ot.spotLights.value=P.state.spot,Ot.spotLightShadows.value=P.state.spotShadow,Ot.rectAreaLights.value=P.state.rectArea,Ot.ltc_1.value=P.state.rectAreaLTC1,Ot.ltc_2.value=P.state.rectAreaLTC2,Ot.pointLights.value=P.state.point,Ot.pointLightShadows.value=P.state.pointShadow,Ot.hemisphereLights.value=P.state.hemi,Ot.directionalShadowMap.value=P.state.directionalShadowMap,Ot.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Ot.spotShadowMap.value=P.state.spotShadowMap,Ot.spotLightMatrix.value=P.state.spotLightMatrix,Ot.spotLightMap.value=P.state.spotLightMap,Ot.pointShadowMap.value=P.state.pointShadowMap,Ot.pointShadowMatrix.value=P.state.pointShadowMatrix),G.currentProgram=kt,G.uniformsList=null,kt}function Ht(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Rl.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function se(b,O){let H=St.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Ie(b,O,H,G,P){O.isScene!==!0&&(O=Dt),Wt.resetTextureUnits();let et=O.fog,pt=G.isMeshStandardMaterial?O.environment:null,Ct=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Or,xt=(G.isMeshStandardMaterial?Ce:Be).get(G.envMap||pt),Vt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ot=!!H.morphAttributes.position,ae=!!H.morphAttributes.normal,be=!!H.morphAttributes.color,qe=oa;G.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(qe=_.toneMapping);let Pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ae=Pe!==void 0?Pe.length:0,zt=St.get(G),Ge=u.state.lights;if(Ft===!0&&(Q===!0||b!==M)){let Gn=b===M&&G.id===E;lt.setState(G,b,Gn)}let ue=!1;G.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Ge.state.version||zt.outputColorSpace!==Ct||P.isBatchedMesh&&zt.batching===!1||!P.isBatchedMesh&&zt.batching===!0||P.isBatchedMesh&&zt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&zt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&zt.instancing===!1||!P.isInstancedMesh&&zt.instancing===!0||P.isSkinnedMesh&&zt.skinning===!1||!P.isSkinnedMesh&&zt.skinning===!0||P.isInstancedMesh&&zt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&zt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&zt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&zt.instancingMorph===!1&&P.morphTexture!==null||zt.envMap!==xt||G.fog===!0&&zt.fog!==et||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==lt.numPlanes||zt.numIntersection!==lt.numIntersection)||zt.vertexAlphas!==Vt||zt.vertexTangents!==kt||zt.morphTargets!==Ot||zt.morphNormals!==ae||zt.morphColors!==be||zt.toneMapping!==qe||zt.morphTargetsCount!==Ae)&&(ue=!0):(ue=!0,zt.__version=G.version);let fi=zt.currentProgram;ue===!0&&(fi=tr(G,O,P));let Zr=!1,di=!1,Ul=!1,ke=fi.getUniforms(),Ci=zt.uniforms;if(bt.useProgram(fi.program)&&(Zr=!0,di=!0,Ul=!0),G.id!==E&&(E=G.id,di=!0),Zr||M!==b){bt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ke.setValue(D,"projectionMatrix",b.projectionMatrix),ke.setValue(D,"viewMatrix",b.matrixWorldInverse);let jn=ke.map.cameraPosition;jn!==void 0&&jn.setValue(D,vt.setFromMatrixPosition(b.matrixWorld)),Mt.logarithmicDepthBuffer&&ke.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ke.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,di=!0,Ul=!0)}if(P.isSkinnedMesh){ke.setOptional(D,P,"bindMatrix"),ke.setOptional(D,P,"bindMatrixInverse");let Gn=P.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),ke.setValue(D,"boneTexture",Gn.boneTexture,Wt))}P.isBatchedMesh&&(ke.setOptional(D,P,"batchingTexture"),ke.setValue(D,"batchingTexture",P._matricesTexture,Wt),ke.setOptional(D,P,"batchingIdTexture"),ke.setValue(D,"batchingIdTexture",P._indirectTexture,Wt),ke.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&ke.setValue(D,"batchingColorTexture",P._colorsTexture,Wt));let Di=H.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&st.update(P,H,fi),(di||zt.receiveShadow!==P.receiveShadow)&&(zt.receiveShadow=P.receiveShadow,ke.setValue(D,"receiveShadow",P.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ci.envMap.value=xt,Ci.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Ci.envMapIntensity.value=O.environmentIntensity),di&&(ke.setValue(D,"toneMappingExposure",_.toneMappingExposure),zt.needsLights&&Cn(Ci,Ul),et&&G.fog===!0&&tt.refreshFogUniforms(Ci,et),tt.refreshMaterialUniforms(Ci,G,k,it,u.state.transmissionRenderTarget[b.id]),Rl.upload(D,Ht(zt),Ci,Wt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rl.upload(D,Ht(zt),Ci,Wt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ke.setValue(D,"center",P.center),ke.setValue(D,"modelViewMatrix",P.modelViewMatrix),ke.setValue(D,"normalMatrix",P.normalMatrix),ke.setValue(D,"modelMatrix",P.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Gn=G.uniformsGroups;for(let jn=0,rp=Gn.length;jn<rp;jn++){let er=Gn[jn];Lt.update(er,fi),Lt.bind(er,fi)}}return fi}function Cn(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Vn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,O,H){let G=St.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),St.get(b.texture).__webglTexture=O,St.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let H=St.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};let hi=D.createFramebuffer();this.setRenderTarget=function(b,O=0,H=0){N=b,w=O,C=H;let G=!0,P=null,et=!1,pt=!1;if(b){let xt=St.get(b);if(xt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(xt.__webglFramebuffer===void 0)Wt.setupRenderTarget(b);else if(xt.__hasExternalTextures)Wt.rebindTextures(b,St.get(b.texture).__webglTexture,St.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ot=b.depthTexture;if(xt.__boundDepthTexture!==Ot){if(Ot!==null&&St.has(Ot)&&(b.width!==Ot.image.width||b.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(b)}}let Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(pt=!0);let kt=St.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?P=kt[O][H]:P=kt[O],et=!0):b.samples>0&&Wt.useMultisampledRTT(b)===!1?P=St.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?P=kt[H]:P=kt,U.copy(b.viewport),z.copy(b.scissor),V=b.scissorTest}else U.copy(yt).multiplyScalar(k).floor(),z.copy(Yt).multiplyScalar(k).floor(),V=rt;if(H!==0&&(P=hi),bt.bindFramebuffer(D.FRAMEBUFFER,P)&&G&&bt.drawBuffers(b,P),bt.viewport(U),bt.scissor(z),bt.setScissorTest(V),et){let xt=St.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,H)}else if(pt){let xt=O;for(let Vt=0;Vt<b.textures.length;Vt++){let kt=St.get(b.textures[Vt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Vt,kt.__webglTexture,H,xt)}}else if(b!==null&&H!==0){let xt=St.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,H)}E=-1},this.readRenderTargetPixels=function(b,O,H,G,P,et,pt,Ct=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){bt.bindFramebuffer(D.FRAMEBUFFER,xt);try{let Vt=b.textures[Ct],kt=Vt.format,Ot=Vt.type;if(!Mt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&H>=0&&H<=b.height-P&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ct),D.readPixels(O,H,G,P,At.convert(kt),At.convert(Ot),et))}finally{let Vt=N!==null?St.get(N).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(b,O,H,G,P,et,pt,Ct=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt)if(O>=0&&O<=b.width-G&&H>=0&&H<=b.height-P){bt.bindFramebuffer(D.FRAMEBUFFER,xt);let Vt=b.textures[Ct],kt=Vt.format,Ot=Vt.type;if(!Mt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ae),D.bufferData(D.PIXEL_PACK_BUFFER,et.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ct),D.readPixels(O,H,G,P,At.convert(kt),At.convert(Ot),0);let be=N!==null?St.get(N).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,be);let qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bb(D,qe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,et),D.deleteBuffer(ae),D.deleteSync(qe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,H=0){let G=Math.pow(2,-H),P=Math.floor(b.image.width*G),et=Math.floor(b.image.height*G),pt=O!==null?O.x:0,Ct=O!==null?O.y:0;Wt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,pt,Ct,P,et),bt.unbindTexture()};let os=D.createFramebuffer(),Ns=D.createFramebuffer();this.copyTextureToTexture=function(b,O,H=null,G=null,P=0,et=null){et===null&&(P!==0?(dl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=P,P=0):et=0);let pt,Ct,xt,Vt,kt,Ot,ae,be,qe,Pe=b.isCompressedTexture?b.mipmaps[et]:b.image;if(H!==null)pt=H.max.x-H.min.x,Ct=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,Vt=H.min.x,kt=H.min.y,Ot=H.isBox3?H.min.z:0;else{let Di=Math.pow(2,-P);pt=Math.floor(Pe.width*Di),Ct=Math.floor(Pe.height*Di),b.isDataArrayTexture?xt=Pe.depth:b.isData3DTexture?xt=Math.floor(Pe.depth*Di):xt=1,Vt=0,kt=0,Ot=0}G!==null?(ae=G.x,be=G.y,qe=G.z):(ae=0,be=0,qe=0);let Ae=At.convert(O.format),zt=At.convert(O.type),Ge;O.isData3DTexture?(Wt.setTexture3D(O,0),Ge=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Wt.setTexture2DArray(O,0),Ge=D.TEXTURE_2D_ARRAY):(Wt.setTexture2D(O,0),Ge=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let ue=D.getParameter(D.UNPACK_ROW_LENGTH),fi=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zr=D.getParameter(D.UNPACK_SKIP_PIXELS),di=D.getParameter(D.UNPACK_SKIP_ROWS),Ul=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ot);let ke=b.isDataArrayTexture||b.isData3DTexture,Ci=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let Di=St.get(b),Gn=St.get(O),jn=St.get(Di.__renderTarget),rp=St.get(Gn.__renderTarget);bt.bindFramebuffer(D.READ_FRAMEBUFFER,jn.__webglFramebuffer),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,rp.__webglFramebuffer);for(let er=0;er<xt;er++)ke&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(b).__webglTexture,P,Ot+er),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(O).__webglTexture,et,qe+er)),D.blitFramebuffer(Vt,kt,pt,Ct,ae,be,pt,Ct,D.DEPTH_BUFFER_BIT,D.NEAREST);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(P!==0||b.isRenderTargetTexture||St.has(b)){let Di=St.get(b),Gn=St.get(O);bt.bindFramebuffer(D.READ_FRAMEBUFFER,os),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ns);for(let jn=0;jn<xt;jn++)ke?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Di.__webglTexture,P,Ot+jn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Di.__webglTexture,P),Ci?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gn.__webglTexture,et,qe+jn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gn.__webglTexture,et),P!==0?D.blitFramebuffer(Vt,kt,pt,Ct,ae,be,pt,Ct,D.COLOR_BUFFER_BIT,D.NEAREST):Ci?D.copyTexSubImage3D(Ge,et,ae,be,qe+jn,Vt,kt,pt,Ct):D.copyTexSubImage2D(Ge,et,ae,be,Vt,kt,pt,Ct);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ci?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ge,et,ae,be,qe,pt,Ct,xt,Ae,zt,Pe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ge,et,ae,be,qe,pt,Ct,xt,Ae,Pe.data):D.texSubImage3D(Ge,et,ae,be,qe,pt,Ct,xt,Ae,zt,Pe):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,et,ae,be,pt,Ct,Ae,zt,Pe.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,et,ae,be,Pe.width,Pe.height,Ae,Pe.data):D.texSubImage2D(D.TEXTURE_2D,et,ae,be,pt,Ct,Ae,zt,Pe);D.pixelStorei(D.UNPACK_ROW_LENGTH,ue),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fi),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zr),D.pixelStorei(D.UNPACK_SKIP_ROWS,di),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ul),et===0&&O.generateMipmaps&&D.generateMipmap(Ge),bt.unbindTexture()},this.initRenderTarget=function(b){St.get(b).__webglFramebuffer===void 0&&Wt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Wt.setTextureCube(b,0):b.isData3DTexture?Wt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Wt.setTexture2DArray(b,0):Wt.setTexture2D(b,0),bt.unbindTexture()},this.resetState=function(){w=0,C=0,N=null,bt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=ce._getUnpackColorSpace()}};function iE(e,t,n){if(!e)return t;let i=Math.max(0,Math.min(1,n));return{x:e.x+(t.x-e.x)*i,z:e.z+(t.z-e.z)*i}}var sE=[{coat:"#79bda5",shade:"#568b8d",deep:"#426a7e",hair:"#49445e",hairLight:"#756480",skin:"#e7af8f",skinLight:"#ffd2a6",accent:"#f5e2a2"},{coat:"#b29acb",shade:"#80759f",deep:"#60577f",hair:"#65516a",hairLight:"#9e7887",skin:"#c99074",skinLight:"#eab997",accent:"#f5c39b"},{coat:"#d99683",shade:"#ab727d",deep:"#755d78",hair:"#34374f",hairLight:"#65647b",skin:"#aa745b",skinLight:"#d4a27d",accent:"#d5efbc"},{coat:"#d9bc78",shade:"#a78673",deep:"#786b78",hair:"#a87962",hairLight:"#d2a477",skin:"#ddab85",skinLight:"#f7caa3",accent:"#a7ddd1"}],It="#2d3049";function R(e,t,n,i,s,a){e.fillStyle=t,e.fillRect(n,i,s,a)}function Fn(e,t,n,i,s,a){for(let r=-a;r<=a;r++){let o=Math.floor(s*Math.sqrt(1-r*r/((a+.5)*(a+.5))));R(e,t,n-o,i+r,o*2+1,1)}}function ca(e,t,n){for(let[i,s]of n)R(e,t,i,s,1,1)}function Hn(e,t,n){let i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d");if(!s)throw new Error("Canvas 2D is required to draw the office sprites.");n(s);let a=new ki(i);return a.colorSpace=an,a.magFilter=mn,a.minFilter=mn,a.generateMipmaps=!1,a}function Nv(e,t,n,i){let{coat:s,shade:a,deep:r,hair:o,hairLight:l,skin:c,skinLight:h,accent:d}=sE[t%sE.length],f=n==="stepA"?-2:n==="stepB"?2:0,p=n==="working",g=i==="left",x=p?22:24;for(let[m,u]of[[11+f,8+f],[19-f,18-f]])R(e,It,m,30,4,7),R(e,r,m+1,31,2,5),R(e,It,u,36,7,3),R(e,a,u+1,36,4,1);for(let m of[6,23])R(e,It,m,x,4,7),R(e,a,m+1,x+1,2,5),R(e,s,m+1,x+1,2,3),R(e,c,m+1,x+6,3,2);if(Fn(e,It,16,25,9,7),Fn(e,r,18,26,6,5),Fn(e,s,14,24,6,5),R(e,d,12,20,7,2),R(e,h,15,22,2,2),R(e,a,11,28,3,2),R(e,It,16,24,1,7),i==="away"){Fn(e,s,16,25,7,6),R(e,a,10,24,3,6),R(e,d,15,24,2,5),Fn(e,It,16,13,10,10),Fn(e,o,16,12,9,8),Fn(e,l,13,9,5,3),R(e,c,6,16,2,3),R(e,c,24,16,2,3),t%4===1?(R(e,o,7,16,4,7),R(e,o,22,16,4,7)):t%4===2?(R(e,o,7,16,5,4),R(e,l,19,8,5,2)):t%4===3?(R(e,d,10,8,14,3),R(e,o,7,11,18,3)):(R(e,l,10,5,6,2),R(e,o,8,12,5,5)),n==="coffee"&&(R(e,It,23,24,6,7),R(e,"#fff2d3",24,25,4,5),R(e,a,25,26,2,2)),p&&R(e,d,12,29,8,1);return}switch(Fn(e,It,16,13,10,10),Fn(e,o,16,11,9,8),Fn(e,c,16,16,7,6),Fn(e,h,g?13:15,14,4,3),R(e,c,g?25:6,15,2,3),t%4){case 0:Fn(e,o,14,7,8,4),R(e,l,10,5,6,2),R(e,o,g?6:19,10,7,5);break;case 1:Fn(e,o,16,7,9,5),R(e,l,12,5,6,2),R(e,o,6,12,4,8),R(e,o,23,11,3,8),R(e,d,12,22,8,2);break;case 2:Fn(e,o,16,9,10,7),R(e,l,10,5,6,2),R(e,o,g?6:22,12,4,6),R(e,It,10,14,5,3),R(e,It,18,14,5,3),R(e,It,15,15,3,1),R(e,h,11,15,3,1),R(e,h,19,15,3,1);break;default:Fn(e,o,16,9,9,6),R(e,It,7,9,18,3),R(e,d,9,9,14,2),R(e,o,11,12,5,2),R(e,d,20,24,3,2);break}R(e,It,g?12:19,16,2,p?1:2),R(e,It,g?19:12,16,1,p?1:2),R(e,a,g?11:21,18,1,1),R(e,"#bd7979",g?14:16,20,3,1),n==="coffee"&&(R(e,It,g?1:25,23,6,7),R(e,"#fff2d3",g?2:26,24,4,5),R(e,a,g?3:27,26,3,1)),p&&R(e,d,12,29,8,1)}function aE(e){let t=n=>({left:Hn(32,40,i=>Nv(i,e,n,"left")),right:Hn(32,40,i=>Nv(i,e,n,"right")),away:Hn(32,40,i=>Nv(i,e,n,"away"))});return{idle:t("idle"),stepA:t("stepA"),stepB:t("stepB"),working:t("working"),coffee:t("coffee")}}function rE(){return Hn(96,56,e=>{R(e,It,6,22,84,31),R(e,"#775d70",8,27,80,23),R(e,"#a17b80",10,30,75,13),R(e,"#d9ac8e",12,30,70,3),R(e,"#3c384e",30,34,36,9),R(e,"#5aa59a",33,36,30,3),R(e,"#e4c391",36,39,24,2),R(e,"#f0d3ae",9,20,79,9),R(e,"#fff0d1",13,21,69,2),R(e,It,35,3,27,18),R(e,"#777087",38,5,21,14),R(e,"#b9a2aa",39,5,14,3),R(e,"#3b5260",42,9,13,8),R(e,"#8be0bd",44,11,9,3),R(e,It,41,18,16,3);for(let t of[17,70])R(e,It,t,14,9,8),R(e,"#f8e6cd",t+1,15,6,5),R(e,"#82bbad",t+2,16,3,2),R(e,"#f4d5af",t+2,11,2,3);R(e,It,10,50,14,4),R(e,It,73,50,14,4)})}function oE(){return Hn(256,64,e=>{R(e,"#3b344d",5,8,246,49),R(e,"#d5a989",8,11,240,43),R(e,"#51445c",13,15,230,35),R(e,"#bce7cd",18,20,6,25),R(e,"#bce7cd",232,20,6,25),e.fillStyle="#fff0ce",e.font="bold 31px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText("CHAT ROOM",128,34)})}function Dl(e,t=0){return Hn(48,48,n=>{R(n,"#31334c",5,5,38,38),R(n,"#f7e9cc",8,8,32,32),R(n,e==="failed"?"#d2828c":"#8bbda9",10,10,28,3),R(n,"#4a465d",14,18,21,13),R(n,"#fff2d7",17,20,15,8),R(n,e==="failed"?"#d2828c":"#72b4a5",20,22,9,2),R(n,"#4a465d",18,30,5,4),R(n,"#fff0d1",25,31,5,2);let i=e==="working"?t:e==="complete"||e==="failed"?16:0;for(let s=0;s<16;s++){let a=Math.floor(s/4),r=s%4,o=a===0?6+r*9:a===1?41:a===2?33-r*9:4,l=a===0?3:a===1?6+r*9:a===2?41:33-r*9;R(n,s<i?e==="failed"?"#f2a3a3":"#95f2cc":"#74617d",o,l,a%2===0?8:3,a%2===0?3:8)}(e==="queued"||e==="assigned")&&(R(n,"#f5b978",22,15,4,5),R(n,"#f5b978",22,33,4,3))})}function lE(e){return Hn(40,40,t=>{let n=e%2?"#d4b5ee":"#9ce4ce";R(t,It,7,3,25,28),R(t,It,5,6,30,21),R(t,"#806d91",8,5,24,23),R(t,"#c0a6bb",9,5,18,2),R(t,"#39394e",11,8,20,17),R(t,"#30485c",12,9,17,14),R(t,"#568f9c",13,10,11,1),R(t,n,14,12,10,2),R(t,"#ffdfaa",14,16,7,1),R(t,n,14,19,12,2),R(t,"#6f9eaa",14,22,5,1),R(t,"#f6d7aa",14,27,11,2),R(t,It,18,31,5,5),R(t,"#aa8da5",19,31,2,4),R(t,It,12,36,17,3),R(t,"#ffedcc",14,36,12,1),ca(t,"#e9e1db",[[10,8],[10,9],[31,26],[30,27]])})}function cE(){return Hn(42,50,e=>{R(e,"#293f50",18,15,5,23),R(e,"#456b65",20,18,2,16),R(e,"#293f50",9,13,9,19),R(e,"#293f50",6,18,16,11),R(e,"#293f50",4,15,5,8),R(e,"#293f50",11,7,6,9),R(e,"#293f50",14,4,5,6),R(e,"#4f897a",8,16,12,12),R(e,"#5a9a83",10,12,7,13),R(e,"#82bb91",12,9,4,9),R(e,"#91c8a0",6,20,5,4),R(e,"#74ad8e",10,23,8,3),R(e,"#b0d5a4",12,14,2,4),R(e,"#293f50",25,10,7,22),R(e,"#293f50",22,17,15,11),R(e,"#293f50",31,13,6,9),R(e,"#293f50",27,5,5,8),R(e,"#4f897a",24,15,11,13),R(e,"#5a9a83",27,11,7,13),R(e,"#82bb91",28,8,4,9),R(e,"#a9d6a2",33,17,4,4),R(e,"#74ad8e",28,23,6,3),R(e,"#b0d5a4",28,13,2,4),R(e,"#293f50",17,21,8,12),R(e,"#599784",17,20,7,11),R(e,"#9ac69a",18,19,4,7),ca(e,"#b6d9a5",[[9,15],[13,12],[15,7],[27,13],[31,9],[29,21]]),ca(e,"#294c58",[[8,26],[17,18],[34,24],[23,28]]),R(e,It,13,35,17,4),R(e,"#e8bb96",15,38,14,8),R(e,"#c78980",20,40,9,6),R(e,"#f6d7aa",16,39,6,2),R(e,It,15,46,15,2)})}function uE(){return Hn(28,24,e=>{R(e,It,3,10,23,11),R(e,"#72617c",4,11,20,8),R(e,"#9c83a1",5,11,15,3),R(e,"#d1a58c",7,6,13,6),R(e,"#f2d5a1",8,7,10,3),R(e,"#eff5d3",11,3,11,7),R(e,"#77b9a4",12,4,7,2),R(e,"#f7deaa",13,7,6,1),R(e,"#aad4b0",6,16,14,2),R(e,It,4,21,21,2)})}function hE(e){return Hn(80,70,t=>{let n=e%2?"#ead4bb":"#f3ddba";R(t,It,13,21,57,20),R(t,It,9,25,58,17),R(t,"#785e78",11,30,57,16),R(t,"#a97e7f",10,26,56,15),R(t,"#f8e8c7",17,19,49,8),R(t,n,13,24,52,10),R(t,"#fff4d6",20,19,39,2),R(t,"#d4af9b",13,32,52,3),R(t,"#9a6d79",14,37,52,4),R(t,"#efbda2",19,32,26,2),R(t,"#564664",14,42,10,22),R(t,"#8c687e",15,43,6,18),R(t,"#d8a69c",16,45,2,5),R(t,"#564664",58,41,10,22),R(t,"#8c687e",60,42,6,17),R(t,"#d8a69c",60,45,2,5),R(t,It,12,62,13,5),R(t,It,56,61,14,5),R(t,"#382d4b",28,37,4,2),R(t,"#382d4b",46,37,4,2),ca(t,"#fff7de",[[21,22],[23,22],[59,23],[61,23]])})}function fE(){return Hn(40,54,e=>{R(e,It,8,6,26,30),R(e,It,6,9,30,24),R(e,"#6c608a",9,8,24,25),R(e,"#9b83ab",11,8,20,19),R(e,"#c9aecc",14,10,14,13),R(e,"#f1d9d0",15,10,9,2),R(e,It,7,33,28,8),R(e,"#8b77a1",10,33,23,5),R(e,"#c7acc3",12,33,14,2),R(e,It,19,41,5,8),R(e,"#6a5f80",20,41,2,6),R(e,It,10,48,24,4),R(e,"#b2a2b8",14,48,14,1),ca(e,"#f8e4d7",[[14,15],[17,14],[28,23]])})}function dE(){return Hn(48,64,e=>{R(e,It,7,46,36,14),R(e,"#765b68",9,47,31,11),R(e,"#b18683",10,48,24,5),R(e,"#e2b698",11,48,19,2),R(e,"#533f53",11,55,28,2),R(e,"#e6c4a4",13,55,6,1),R(e,"#e6c4a4",28,55,6,1),R(e,It,10,59,8,3),R(e,It,32,59,8,3),R(e,It,9,11,32,36),R(e,"#775c73",11,13,27,32),R(e,"#a8838d",12,14,22,3),R(e,"#d9b49f",12,18,2,23),R(e,"#4c465d",15,18,20,23),R(e,"#356a74",17,20,16,17),R(e,"#579e96",18,21,13,11),R(e,"#9bd4ae",19,22,9,6),R(e,"#e8e6af",21,24,4,4),R(e,"#fff1ba",22,24,2,2),R(e,"#377778",20,30,10,2),R(e,"#f7d9a5",19,39,3,2),R(e,"#8dd2aa",24,39,3,2),R(e,"#f7d9a5",29,39,3,2),R(e,It,7,8,36,5),R(e,"#9c7882",9,8,32,3),R(e,"#f2c9a5",11,8,24,1),R(e,"#533f53",6,42,36,5),R(e,"#d4a48e",9,42,27,2),R(e,"#f8e3b9",10,43,15,1),ca(e,"#fce6bd",[[12,15],[36,15],[12,48],[39,48]])})}function pE(){return Hn(64,63,e=>{R(e,It,13,8,41,36),R(e,"#706493",16,6,34,35),R(e,"#ad9cc6",18,7,26,30),R(e,"#eddaee",20,9,23,25),R(e,"#34485c",22,13,20,19),R(e,"#517883",23,14,15,3),R(e,"#a5f0cc",25,19,13,2),R(e,"#b9d5e2",25,24,8,2),R(e,"#f8e4aa",25,29,12,1),R(e,It,7,39,50,17),R(e,"#866f9c",9,40,46,13),R(e,"#c6b3d0",12,40,38,8),R(e,"#f9ebd8",14,41,31,2),R(e,It,10,51,10,11),R(e,"#706184",12,52,7,8),R(e,It,44,51,10,11),R(e,"#706184",46,52,6,8),ca(e,"#fff9e5",[[19,11],[20,11],[50,43],[51,43]])})}function Uv(e){return Hn(40,52,t=>{R(t,It,6,36,29,11),R(t,"#ab829e",9,36,23,8),R(t,"#f7e7c7",11,36,17,2),R(t,It,9,25,25,10),R(t,e%2?"#91ceb0":"#e3b695",12,26,19,5),R(t,"#fff0d1",13,26,10,1),R(t,It,4,15,25,9),R(t,"#9d90bb",7,16,19,5),R(t,"#e6d5ef",8,16,9,1),R(t,It,14,6,22,9),R(t,"#e5bd91",17,7,16,6),R(t,"#f9e8b7",18,7,11,1),R(t,It,12,47,22,3),ca(t,"#ebdcce",[[8,19],[10,20],[20,29],[14,40]])})}function mE(e){return Hn(36,44,t=>{R(t,It,2,3,32,38),R(t,"#ab8ea7",4,4,28,35),R(t,"#eedadd",6,6,24,32),R(t,e%2?"#d99b97":"#83b9ae",8,8,20,27),Fn(t,"#fff2d4",e%2?20:16,19,5,7),R(t,"#474964",15,22,11,3),R(t,"#f4ddac",10,29,12,2),ca(t,"#fff9e5",[[8,7],[9,7],[27,34]])})}function gE(){return Hn(20,26,e=>{R(e,"#302d4a",3,4,14,19),R(e,"#726b92",5,5,10,14),R(e,"#a0f3d2",6,7,8,8),R(e,"#fff4d4",8,8,3,3),R(e,"#302d4a",6,22,9,3)})}var Ri={edge:6181475,wall:9533568,wallTop:15910293,cream:16769709,lavender:12297963},Bt={halfWidth:7.7,back:-5.2,front:5.8,windowY:1.72},Lv=[-4.8,0,4.8],vE=0,xu=new I(0,15,20),li={x:-3.8,z:-2.2},UN=new qt(11127295),LN=new qt(12110826),ON=new qt(11848948),IN=new qt(16767681),PN=new qt(7506858);function _E(e,t=0,n=0){return new Pr({color:e,roughness:.88,flatShading:!0,emissive:t,emissiveIntensity:n})}function zN(){let e=document.createElement("canvas");e.width=1024,e.height=768;let t=e.getContext("2d");if(!t)throw new Error("Canvas 2D is required for the office floor.");t.fillStyle="#785a51",t.fillRect(0,0,e.width,e.height);let n=["#d8af83","#cba076","#dfb78c","#d2a77b","#c59a72","#dbb287"],i=(a,r)=>(Math.imul(a,73856093)^Math.imul(r,19349663))>>>0;for(let a=0;a<12;a++){let r=a*64,o=a%2?-116:-20,l=0;for(;o<e.width;){let c=i(l,a),h=188+c%53;t.fillStyle=n[c%n.length],t.fillRect(o+2,r+2,h-3,61),t.fillStyle="#fff0cb20",t.fillRect(o+5,r+4,h-9,2),t.fillStyle="#573e4a18",t.fillRect(o+3,r+58,h-5,3);for(let d=0;d<7;d++){let f=r+9+i(l*7+d,a)%46;t.fillStyle=d%2?"#633f3920":"#ffe2ac32",t.fillRect(o+12+d%3*8,f,h-36-d%3*15,1)}o+=h,l++}}let s=new ki(e);return s.colorSpace=an,s.minFilter=ss,s.magFilter=Tn,s}function BN(){let e=document.createElement("canvas");e.width=128,e.height=96;let t=e.getContext("2d");if(!t)throw new Error("Canvas 2D is required for the window garden.");for(let[i,s,a]of[["#426e6b",83,23],["#5c8971",89,21],["#83a77a",96,17]]){t.fillStyle=i;for(let r=-15;r<150;r+=21)t.beginPath(),t.ellipse(r+r%3*3,s-r%4*4,a,18,0,0,Math.PI*2),t.fill()}for(let i=0;i<42;i++){let s=(Math.imul(i+11,47)%128+128)%128,a=67+Math.imul(i+3,31)%29;t.fillStyle=i%3?"#b6c490":"#365e63",t.fillRect(s,a,2+i%3,1)}let n=new ki(e);return n.colorSpace=an,n.minFilter=ss,n.magFilter=Tn,n}function Qn(e,t,n,i,s,a,r,o,l=0,c=0){let h=new Me(new Ka(s,a,r),_E(o,l,c));return h.position.set(t,n,i),h.castShadow=a>.17,h.receiveShadow=!0,e.add(h),h}function Rn(e,t,n,i,s,a,r){let o=new Me(new zn(a,r),new Pr({map:t,alphaTest:.38,side:wn,roughness:1,emissiveMap:t,emissive:16777215,emissiveIntensity:.24}));return o.position.set(n,i,s),o.rotation.y=vE,o.castShadow=!1,o.receiveShadow=!0,e.add(o),o}function yE(e,t){let n=new Me(new Sl(1,10,6),new Pn({colorWrite:!1,depthWrite:!1}));return n.scale.set(e*.38,.12,t*.3),n.castShadow=!0,n}function Ov(e,t="#4e4762"){let n=document.createElement("canvas");n.width=256,n.height=64;let i=n.getContext("2d");if(!i)throw new Error("Canvas 2D context is required for office signs.");i.fillStyle="#574c5a",i.fillRect(4,4,248,56),i.strokeStyle="#d4a986",i.lineWidth=5,i.strokeRect(4,4,248,56),i.fillStyle=t==="#4e4762"?"#f9e5bb":t,i.font="bold 25px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,34);let s=new ki(n);s.magFilter=mn,s.minFilter=mn;let a=new vl(new gl({map:s,transparent:!0,depthTest:!1}));return a.scale.set(1.65,.42,1),a}function FN(e,t,n,i,s){Rn(e,s(hE(i)),t,.58,n-.56,1.55,1.23);let a=Rn(e,s(lE(i)),t-.1,1.08,n-.67,.77,.77);return Rn(e,s(fE()),t+.35,.49,n+.37,.66,.94),a}function HN(e,t,n){let i=new Gi,s=Rn(i,n.idle.away,.035,.68,-.065,.99,1.35);s.material.color.setHex(7759223),s.material.emissiveIntensity=0,s.castShadow=!1,s.receiveShadow=!1;let a=Rn(i,n.idle.away,0,.67,0,.95,1.32);a.material.emissiveIntensity=.44,s.rotation.y=0,a.rotation.y=0,i.rotation.y=vE;let r=new Me(new zn(.68,.52),new Pn({map:t,transparent:!0,depthWrite:!1,opacity:.66,toneMapped:!1}));r.rotation.x=-Math.PI/2,r.renderOrder=3;let o=yE(.68,.52);return{group:i,backing:s,figure:a,frames:n,facing:"away",shadow:r,caster:o}}function xE(e,t){let n=new iu,i=[],s=F=>(i.push(F),F),a=new En(28,1,.1,100);a.position.copy(xu),a.lookAt(0,.4,0);let r=new ip({antialias:!1,alpha:!0,powerPreference:"low-power"});r.outputColorSpace=an,r.toneMapping=md,r.toneMappingExposure=1.35,r.setClearColor(0,0),r.shadowMap.enabled=!0,r.shadowMap.type=Xi,r.shadowMap.autoUpdate=!1,r.shadowMap.needsUpdate=!0,r.domElement.className="world-canvas",r.domElement.setAttribute("aria-label","Perspective view of the little AI office"),r.domElement.setAttribute("role","img"),e.appendChild(r.domElement);let o=!1,l=F=>{F.preventDefault(),o=!0,e.classList.add("context-lost")},c=()=>{o=!1,r.shadowMap.needsUpdate=!0,e.classList.remove("context-lost")};r.domElement.addEventListener("webglcontextlost",l),r.domElement.addEventListener("webglcontextrestored",c);let h=new oi({depthWrite:!1,side:An,toneMapped:!1,uniforms:{uDay:{value:.7},uWarm:{value:.8},uTime:{value:0},uSun:{value:new I(1,1,-1)},uSkyTint:{value:new qt(9034192)}},vertexShader:`
      varying vec3 vDirection;
      void main() {
        vDirection = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vDirection;
      uniform float uDay;
      uniform float uWarm;
      uniform float uTime;
      uniform vec3 uSun;
      uniform vec3 uSkyTint;
      float hash(vec3 p) {
        return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
      }
      void main() {
        vec3 direction = normalize(vDirection);
        float horizon = smoothstep(-0.48, 0.65, direction.y);
        vec3 upper = mix(vec3(0.08, 0.055, 0.16), vec3(0.14, 0.64, 0.64), uDay);
        upper = mix(upper, uSkyTint, 0.2 * uDay);
        vec3 lower = mix(vec3(0.21, 0.09, 0.22), vec3(0.89, 0.48, 0.37), uDay);
        vec3 color = mix(lower, upper, horizon);
        color += vec3(0.06, 0.015, 0.0) * uWarm * uDay * (1.0 - horizon);
        float corona = pow(max(dot(direction, normalize(uSun)), 0.0), 16.0);
        color += corona * mix(vec3(0.12, 0.15, 0.22), vec3(0.65, 0.41, 0.24), uDay) * (0.5 + uWarm * 0.5);
        vec3 cell = floor(direction * 180.0);
        float star = step(0.999, hash(cell)) * pow(1.0 - uDay, 3.0) * 0.2;
        color += vec3(star);
        float dust = (hash(floor(direction * 380.0 + uTime * 0.14)) - 0.5) * 0.018;
        gl_FragColor = vec4(clamp(color + dust, 0.0, 1.0), 1.0);
      }
    `}),d=new Me(new Sl(45,24,14),h);d.renderOrder=-1,n.add(d);let f=new fu(15193564,.75),p=new cu(11979214,9858176,.9);n.add(f,p);let g=new hu(16767394,2.4);g.position.set(2,9,-24),g.castShadow=!0;let x=e.clientWidth<980||matchMedia("(pointer: coarse)").matches?512:1024;g.shadow.mapSize.set(x,x),g.shadow.radius=8,g.shadow.blurSamples=8,g.shadow.camera.left=-11,g.shadow.camera.right=11,g.shadow.camera.top=11,g.shadow.camera.bottom=-11,g.shadow.bias=-5e-4,g.shadow.normalBias=.012,n.add(g);let m=new aa(9107160,1.5,5,2);m.position.set(li.x,1.55,li.z);let u=new aa(16756347,.9,4,2);u.position.set(0,1.35,3.65);let v=new aa(16758135,1.1,8,2);v.position.set(.3,2.4,.55),n.add(m,u,v),Qn(n,0,-.3,0,Bt.halfWidth*2,.55,Bt.front-Bt.back,Ri.edge);let y=s(zN());y.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let _=new Me(new zn(Bt.halfWidth*2-.18,Bt.front-Bt.back-.18),new Pr({map:y,roughness:.86}));_.rotation.x=-Math.PI/2,_.position.y=.028,_.receiveShadow=!0,n.add(_);let T=new Me(new zn(Bt.halfWidth*2-.18,Bt.front-Bt.back-.18),new oi({transparent:!0,depthWrite:!1,uniforms:{uSunSide:{value:0},uNight:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float uSunSide;
        uniform float uNight;
        void main() {
          float nearEdge = smoothstep(0.15, 0.98, 1.0 - vUv.y);
          float corners = smoothstep(0.15, 1.0, abs(vUv.x - 0.5) * 2.0);
          float awayFromSun = max(0.0, -uSunSide * (vUv.x - 0.5) * 2.0);
          float shade = nearEdge * (0.11 + 0.12 * corners + 0.12 * awayFromSun + 0.06 * uNight);
          gl_FragColor = vec4(0.10, 0.065, 0.13, shade);
        }
      `}));T.rotation.x=-Math.PI/2,T.position.y=.047,n.add(T),Qn(n,0,.575,Bt.back,Bt.halfWidth*2,1.15,.2,Ri.wall),Qn(n,0,2.52,Bt.back,Bt.halfWidth*2,.46,.2,Ri.wall);let w=-Bt.halfWidth;for(let F of Lv){let ut=F-.9;Qn(n,(w+ut)/2,Bt.windowY,Bt.back,ut-w,1.14,.2,Ri.wall),w=F+.9}Qn(n,(w+Bt.halfWidth)/2,Bt.windowY,Bt.back,Bt.halfWidth-w,1.14,.2,Ri.wall),Qn(n,0,2.75,Bt.back,Bt.halfWidth*2,.17,.3,Ri.wallTop);let C=s(oE()),N=new Me(new zn(3.35,.82),new Pn({map:C,transparent:!0,alphaTest:.2,side:wn}));N.position.set(0,3.22,Bt.back+.2),n.add(N),Qn(n,0,.38,Bt.back+.12,Bt.halfWidth*2-.2,.55,.06,7822694),Qn(n,0,.74,Bt.back+.16,Bt.halfWidth*2-.1,.08,.1,13803644);let E=new Pn({map:s(BN()),transparent:!0,alphaTest:.03,side:wn,depthWrite:!1});for(let F of Lv){let ut=new Me(new zn(1.72,1.08),E);ut.position.set(F,Bt.windowY,Bt.back-.14),n.add(ut);let _t=new Me(new zn(1.65,1.08),new Pn({color:16173467,transparent:!0,opacity:.1,side:wn,depthWrite:!1}));_t.position.set(F,Bt.windowY,Bt.back+.02),n.add(_t),Qn(n,F,1.14,Bt.back+.2,1.98,.11,.36,Ri.cream),Qn(n,F,2.3,Bt.back+.12,1.92,.11,.22,Ri.cream);for(let le of[-.88,0,.88])Qn(n,F+le,Bt.windowY,Bt.back+.12,.09,1.13,.15,Ri.cream)}for(let[F,ut]of[-6.4,-2.5,2.5].entries())Rn(n,s(mE(F)),ut,1.65,Bt.back+.17,.66,.81);let M=[-2.4,2.4].map(F=>{Qn(n,F,2.22,Bt.back+.3,.31,.15,.2,7230304);let ut=Qn(n,F,2.13,Bt.back+.42,.15,.12,.14,16766368,16762250,.5),_t=new aa(16758651,0,4.5,2);return _t.position.set(F,2.08,Bt.back+.6),n.add(_t),{bulb:ut,glow:_t}}),U=new Me(new ou(.92,.92,.04,12),_E(11439750));U.position.set(li.x,.05,li.z),U.receiveShadow=!0,n.add(U);let z=s(dE()),V=Rn(n,z,li.x+.1,.96,li.z-.14,1.39,1.9);V.material.color.setHex(7960718),V.material.emissiveIntensity=0,V.castShadow=!1;let q=Rn(n,z,li.x,.95,li.z,1.35,1.86),J=Ov("AI CORE");J.position.set(li.x,2.38,li.z),n.add(J),Rn(n,s(rE()),0,.68,3.55,4.6,1.25);let Y=document.createElement("canvas");Y.width=64,Y.height=64;let it=Y.getContext("2d");if(!it)throw new Error("Canvas 2D is required for contact shadows.");let k=it.createRadialGradient(32,32,3,32,32,31);k.addColorStop(0,"#241f38e8"),k.addColorStop(.3,"#292335a8"),k.addColorStop(.7,"#29233540"),k.addColorStop(1,"#29233500"),it.fillStyle=k,it.fillRect(0,0,64,64);let ct=new ki(Y);ct.magFilter=Tn;let gt=[],yt=(F,ut,_t,le,Oe,te=.065,ln=.68)=>{let ci=new Me(new zn(le,Oe),new Pn({map:ct,transparent:!0,depthWrite:!1,opacity:ln,toneMapped:!1}));ci.rotation.x=-Math.PI/2,ci.position.set(ut,te,_t),ci.renderOrder=3,F.add(ci);let ui=yE(le,Oe);ui.position.set(ut,te+.12,_t),F.add(ui),gt.push({mesh:ci,opacity:ln})};yt(n,li.x,li.z,1.05,.85,.076),yt(n,0,3.55,4.1,.82);let Yt=F=>{let ut=aE(F);Object.values(ut).flatMap(le=>Object.values(le)).forEach(s);let _t=HN(F,ct,ut);return n.add(_t.group,_t.shadow,_t.caster),_t},rt=t.agents.map(F=>Yt(F.id)),Kt=t.agents.map(({x:F,z:ut})=>({x:F,z:ut})),Ft=new Gi;Ft.visible=t.progress.context,Qn(Ft,3,.08,-1.8,3.05,.12,2.85,Ri.lavender),Rn(Ft,s(pE()),3,.76,-2.5,1.45,1.42),yt(Ft,3,-2.5,1.25,.65,.153);for(let F=0;F<3;F++)Rn(Ft,s(Uv(F)),2.1+F*.78,.48,-1.18,.66,.87),yt(Ft,2.1+F*.78,-1.18,.54,.42,.153,.55);let Q=Ov("CONTEXT");Q.position.set(3,2.28,-2.1),Ft.add(Q),n.add(Ft);let $=new Gi,vt=Ov("CONTEXT  ?");vt.position.set(3,1.34,-1.8),$.add(vt),n.add($);let Nt=new Gi;n.add(Nt);let Dt=Es.map(({x:F,z:ut},_t)=>{let le=FN(Nt,F,ut,_t,s);return yt(Nt,F,ut-.56,1.3,.65),yt(Nt,F+.35,ut+.37,.55,.45,.065,.5),le}),jt=Es.map(({x:F,z:ut},_t)=>{let le=new aa(_t%2?12755181:7726029,0,3.1,2);return le.position.set(F,1.35,ut-.54),n.add(le),le}),We=Es.map(({x:F,z:ut})=>Rn(Nt,s(gE()),F+.43,.82,ut-.55,.18,.27)),D=Es.map(({x:F,z:ut})=>Rn(Nt,s(uE()),F-.58,.79,ut-.49,.36,.34)),pe={queued:[s(Dl("queued"))],assigned:[s(Dl("assigned"))],working:Array.from({length:17},(F,ut)=>s(Dl("working",ut))),complete:[s(Dl("complete"))],failed:[s(Dl("failed"))]},Ut=Es.map(({x:F,z:ut})=>{let _t=new Me(new zn(.58,.58),new Pn({map:pe.queued[0],transparent:!0,alphaTest:.25,depthWrite:!1,side:wn}));return _t.position.set(F,2.06,ut-.57),n.add(_t),_t});for(let F=0;F<2;F++)Rn(n,s(Uv(F)),-4.6+F*.35,.43,2.2,.65,.81),yt(n,-4.6+F*.35,2.2,.55,.4,.065,.52);let Mt=s(cE());Rn(n,Mt,-4.42,.84,2.83,.94,1.14).material.color.setHex(9084052),Rn(n,Mt,-4.37,.84,2.99,.98,1.16),yt(n,-4.37,2.99,.63,.55),Rn(n,Mt,5.8,.67,3.35,.78,.94),yt(n,5.8,3.35,.55,.42);let Te=[];for(let F=0;F<9;F++){let ut=Qn(n,li.x-.32+F%3*.32,2.2+F%2*.2,li.z-.33+Math.floor(F/3)*.31,.08,.08,.08,Ri.cream,Ri.cream,.8);Te.push(ut)}let St=document.createElement("canvas");St.width=128,St.height=128;let Wt=St.getContext("2d");if(!Wt)throw new Error("Canvas 2D is required for sunlight pools.");let Be=Wt.createImageData(128,128);for(let F=0;F<128;F++)for(let ut=0;ut<128;ut++){let _t=Math.max(0,1-Math.abs((ut+.5)/64-1)),le=(F+.5)/128,Oe=Math.min(1,le*9,(1-le)*5),te=(F*128+ut)*4;Be.data[te]=Be.data[te+1]=Be.data[te+2]=255,Be.data[te+3]=Math.round(220*_t**1.4*Oe)}Wt.putImageData(Be,0,0);let Ce=new ki(St);Ce.minFilter=Tn;let A=document.createElement("canvas");A.width=A.height=64;let S=A.getContext("2d");if(!S)throw new Error("Canvas 2D is required for sunlight pools.");let B=S.createRadialGradient(32,32,3,32,32,32);B.addColorStop(0,"#ffffffcc"),B.addColorStop(.65,"#ffffff80"),B.addColorStop(1,"#ffffff00"),S.fillStyle=B,S.fillRect(0,0,64,64);let Z=new ki(A);Z.minFilter=Tn;let tt=Lv.map(F=>{let ut=new Jn;ut.setAttribute("position",new pn(new Float32Array(12),3)),ut.setAttribute("uv",new pn(new Float32Array([0,1,1,1,0,0,1,0]),2)),ut.setIndex([0,1,2,1,3,2]);let _t=new Pn({map:Ce,color:16763280,transparent:!0,opacity:0,depthWrite:!1,side:wn,blending:Fr}),le=new Me(ut,_t);le.renderOrder=2,n.add(le);let Oe=new Me(new zn(2.05,2.2),new Pn({map:Z,transparent:!0,opacity:0,depthWrite:!1,color:16766637,blending:Fr}));Oe.rotation.x=-Math.PI/2,Oe.renderOrder=2,n.add(Oe);let te=new Jn;te.setAttribute("position",new pn(new Float32Array(36),3));let ln=new xl(te,new yl({map:Z,color:16766637,size:3,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,blending:Fr}));return ln.renderOrder=2,n.add(ln),{x:F,shaft:le,pool:Oe,dust:ln}}),W=1,wt=0,lt=0,Tt=!1,Rt=0,st=0,dt=F=>{Tt=!0,Rt=F.clientX,st=F.clientY,r.domElement.setPointerCapture(F.pointerId)},Pt=F=>{if(!Tt)return;let ut=F.clientX-Rt,_t=F.clientY-st;wt=Kn.clamp(wt-ut*.012/W,-2.5,2.5),lt=Kn.clamp(lt-_t*.014/W,-2,2),Rt=F.clientX,st=F.clientY},At=()=>{Tt=!1},ht=F=>{F.preventDefault(),W=Kn.clamp(W*(F.deltaY>0?.9:1.1),.74,1.65)},Lt=r.domElement;Lt.addEventListener("pointerdown",dt),Lt.addEventListener("pointermove",Pt),Lt.addEventListener("pointerup",At),Lt.addEventListener("pointercancel",At),Lt.addEventListener("wheel",ht,{passive:!1});let L=()=>{let F=Math.max(1,e.clientWidth),ut=Math.max(1,e.clientHeight),_t=F<700?.8:1;r.setSize(Math.ceil(F*_t),Math.ceil(ut*_t),!1);let le=F/ut,Oe=4.7,te=xu.distanceTo(new I(0,.4,0));a.aspect=le,a.fov=Kn.radToDeg(2*Math.atan(Math.max(Math.tan(Kn.degToRad(28/2)),Oe/(te*le)))),a.updateProjectionMatrix()},at=new ResizeObserver(L);at.observe(e),L();let ot=matchMedia("(prefers-reduced-motion: reduce)").matches,mt=performance.now()/1e3,nt=mt,j=0,Et="";return{capturePositions(){Kt=t.agents.map(({x:F,z:ut})=>({x:F,z:ut}))},render(F,ut,_t,le){mt+=Math.max(0,Math.min(.05,F-nt)),nt=F;let Oe=`${t.progress.capacity}/${t.progress.context}/${t.progress.workflow}`;(le||ut!==j||Oe!==Et)&&(r.shadowMap.needsUpdate=!0),j=ut,Et=Oe;let te=ff(t.time,ut),ln=te.sun+te.moon,ci=ln>0?te.moon/ln:0,ui=te.moon/.45,Ds=Kn.clamp(1-te.sun/2,0,1);E.color.setHex(16777215).lerp(PN,ui*.7),g.color.setHex(te.sunColor).lerp(UN,ci),g.intensity=ln,g.position.set(Kn.lerp(te.sunX,-3.4,ci),Kn.lerp(te.sunY,6.6,ci),-24),f.color.setHex(te.skyColor).lerp(LN,ui*.32).lerp(IN,te.lamp*(.28-ui*.1)),f.intensity=te.ambient,p.color.setHex(te.bounceColor).lerp(ON,ui*.32),p.groundColor.setHex(11827574),p.intensity=te.ambient*.95;let rs=Math.min(1,te.sun/3.2),Nl=T.material;Nl.uniforms.uSunSide.value=Kn.clamp(te.sunX/6,-1,1)*rs,Nl.uniforms.uNight.value=Ds,gt.forEach(({mesh:Ht,opacity:se})=>{Ht.material.opacity=se*(.72+rs*.28)}),m.intensity=.9+Ds*1.35+te.lamp*.35,u.intensity=.25+Ds*1.4,v.intensity=.25+te.lamp*1.1,M.forEach(({bulb:Ht,glow:se})=>{Ht.material.emissiveIntensity=te.lamp*.75,se.intensity=te.lamp*1.25}),r.toneMappingExposure=1.34-Ds*.16,h.uniforms.uDay.value=Math.min(1,te.sun/3.2),h.uniforms.uWarm.value=te.warmth,h.uniforms.uSkyTint.value.setHex(te.skyColor),h.uniforms.uTime.value=ot?0:t.time,h.uniforms.uSun.value.copy(g.position).normalize();for(let{x:Ht,shaft:se,pool:Ie,dust:Cn}of tt){let Vn=(Bt.windowY-.08)/(g.position.y-Bt.windowY),hi=Ht+(Ht-g.position.x)*Vn,os=Bt.back+(Bt.back-g.position.z)*Vn,Ns=Kn.clamp((Bt.halfWidth-.9-Math.abs(hi))/.7,0,1);se.geometry.attributes.position.array.set([Ht-.82,Bt.windowY+.06,Bt.back+.2,Ht+.82,Bt.windowY+.06,Bt.back+.2,hi-1.15,.08,os,hi+1.15,.08,os]),se.geometry.attributes.position.needsUpdate=!0,se.geometry.computeBoundingSphere(),se.material.color.copy(g.color),se.material.opacity=(rs*.4+ui*.04)*Ns,Ie.material.color.copy(g.color),Ie.material.opacity=(te.sun/3.2*.22+ui*.12)*Ns,Ie.position.set(hi,.067,os);let O=Cn.geometry.attributes.position.array;for(let H=0;H<12;H++){let G=.14+(H*.31+Ht*.13+1)%1*.7,P=ot?0:Math.sin(mt*.38+H*2.3+Ht),et=G+P*.025,pt=Math.sin(H*15.73+Ht*7.19)*.68;O[H*3]=Kn.lerp(Ht,hi,et)+pt*(.6+et*.3),O[H*3+1]=Kn.lerp(Bt.windowY,.12,et),O[H*3+2]=Kn.lerp(Bt.back+.22,os,et)}Cn.geometry.attributes.position.needsUpdate=!0,Cn.geometry.computeBoundingSphere(),Cn.material.color.copy(g.color),Cn.material.opacity=(rs*.42+ui*.09)*Ns}for(;rt.length<t.agents.length;)rt.push(Yt(rt.length));let tr=t.agents.some(Ht=>Ht.taskId!==void 0);q.material.emissiveIntensity=(tr?.65:.37)+(ot?0:Math.sin(mt*2.2)*.1),q.position.y=.95+(ot?0:Math.sin(mt*1.9)*.035),Ft.visible=t.progress.context,$.visible=!t.progress.context,We.forEach((Ht,se)=>{let Ie=t.agents[se]?.state==="working";Ht.material.emissiveIntensity=se<t.progress.capacity?Ie?1.1:.45:0,Ht.material.color.setHex(se<t.progress.capacity?Ie?16777215:10930622:Ri.edge)}),Dt.forEach((Ht,se)=>{Ht.material.emissiveIntensity=.24+Ds*.58,jt[se].intensity=se<t.progress.capacity?.12+Ds*1.45+(t.agents[se]?.state==="working"?.3:0):0}),D.forEach((Ht,se)=>{Ht.visible=se<t.progress.capacity&&t.progress.workflow>0,Ht.material.emissiveIntensity=.18+t.progress.workflow*.1}),Ut.forEach((Ht,se)=>{let Ie=t.requests.find(Vn=>Vn.stationId===se&&(Vn.status==="queued"||Vn.status==="assigned"||Vn.status==="working"))??t.requests.find(Vn=>Vn.stationId===se&&Vn.resolvedAt!==void 0&&t.time-Vn.resolvedAt<2.5);if(Ht.visible=!!Ie&&se<t.progress.capacity,!Ie)return;let Cn=Ie.status==="working"?Math.min(16,Math.floor(Ie.progress*16)):0;Ht.material.map=pe[Ie.status][Cn],Ht.position.y=2.06+(ot?0:Math.sin(mt*1.8+se)*.045)}),rt.forEach((Ht,se)=>{let Ie=t.agents[se],Cn=iE(Kt[se],Ie,_t);if(Ht.group.position.set(Cn.x,Ie.state==="idle"&&!ot?Math.sin(mt*1.65+se)*.038:0,Cn.z),Ht.shadow.position.set(Cn.x,.095,Cn.z),Ht.caster.position.set(Cn.x,.18,Cn.z),Ht.shadow.material.opacity=.68*(.72+rs*.28),Ie.state==="idle")Ht.facing=se<2?"right":"left";else if(Ie.state==="working")Ht.facing="away";else{let os=Ie.target.x-Ie.x,Ns=Ie.target.z-Ie.z;Ns<-Math.abs(os)*.85&&Math.abs(Ns)>.2?Ht.facing="away":Math.abs(os)>.2?Ht.facing=os<0?"left":"right":Ns>.2&&(Ht.facing="left")}let Vn=Ie.state==="working"?"working":Ie.state==="idle"?"coffee":!ot&&Math.sin(mt*8+se)>0?"stepA":"stepB",hi=Ht.frames[Vn][Ht.facing];hi!==Ht.figure.material.map&&(Ht.figure.material.map=hi,Ht.figure.material.emissiveMap=hi,Ht.backing.material.map=hi,Ht.backing.material.emissiveMap=hi)}),Te.forEach((Ht,se)=>{Ht.position.y=2.2+(ot?0:Math.sin(mt*1.2+se*2.1)*.15),Ht.visible=tr||se%3===0}),a.zoom=W,a.position.set(xu.x+wt,xu.y,xu.z+lt),a.lookAt(wt,.4,lt),a.updateProjectionMatrix(),d.position.copy(a.position),o||r.render(n,a)},dispose(){at.disconnect(),Lt.removeEventListener("pointerdown",dt),Lt.removeEventListener("pointermove",Pt),Lt.removeEventListener("pointerup",At),Lt.removeEventListener("pointercancel",At),Lt.removeEventListener("wheel",ht),Lt.removeEventListener("webglcontextlost",l),Lt.removeEventListener("webglcontextrestored",c),e.classList.remove("context-lost"),n.traverse(F=>{F instanceof Me&&(F.geometry.dispose(),F.material instanceof Pn&&F.material.map===Ce&&(F.material.map=null),(Array.isArray(F.material)?F.material:[F.material]).forEach(_t=>_t.dispose())),F instanceof vl&&(F.material.map?.dispose(),F.material.dispose()),F instanceof xl&&(F.geometry.dispose(),F.material.dispose())}),Ce.dispose(),Z.dispose(),ct.dispose(),i.forEach(F=>F.dispose()),r.dispose(),Lt.remove()}}}var X=Mu(Iv(),1),Yr=Es.length,Su=1/30,kN={currentSessionId:"",sessions:[]};function Pv(e,t){return e===t?"Your session":`Session ${e.slice(0,8)}`}function EE(e){let t=e.sessions.map(i=>({key:i.sessionId,title:Pv(i.sessionId,e.currentSessionId),status:i.status,activity:i.activity,helper:!1})),n=e.sessions.flatMap(i=>i.subagents.map((s,a)=>({key:`${i.sessionId}:helper:${a}`,title:`${Pv(i.sessionId,e.currentSessionId)} \xB7 helper ${a+1}`,status:s.status,activity:s.activity,helper:!0})));return[...t,...n]}function XN(e){return{id:e,state:"idle",x:100,z:100,target:{x:100,z:100},route:[],workLeft:0,workTotal:0,visitedContext:!1}}function WN(){let e=new hf(f0());return e.agents=Array.from({length:Yr},(t,n)=>XN(n)),e.requests=[],e.progress.capacity=0,e.progress.context=!0,e.progress.workflow=1,e}function qN(e,t,n){let i=t.slice(0,Yr);e.progress.capacity=i.length,e.requests=[],i.forEach((s,a)=>{let r=e.agents[a],o=s.status!=="idle"&&s.status!=="offline",l=o?Es[a]:Ic[a];if(n[a]||(r.x=l.x,r.z=l.z),n[a]=!0,r.target={...l},o){r.taskId=a+1;let c=s.status==="blocked"?"failed":s.status==="thinking"?"assigned":"working";e.requests.push({id:a+1,stationId:a,title:s.activity,kind:"chat",status:c,progress:0,reward:0,...c==="failed"?{resolvedAt:e.time}:{}})}else r.taskId=void 0});for(let s=i.length;s<Yr;s++){n[s]=!1;let a=e.agents[s];a.x=a.z=100,a.target={x:100,z:100},a.taskId=void 0,a.state="idle"}}function YN(e,t){for(let n=0;n<e.progress.capacity;n++){let i=e.agents[n],s=i.target.x-i.x,a=i.target.z-i.z,r=Math.hypot(s,a),o=i.taskId!==void 0;if(r>.02){let l=Math.min(r,2.05*t);i.x+=s/r*l,i.z+=a/r*l,i.state=o?"walking":"returning"}else i.x=i.target.x,i.z=i.target.z,i.state=o?"working":"idle"}}function ZN(){let[e,t]=(0,tn.useState)(kN),[n,i]=(0,tn.useState)("Connecting to local Copilot sessions\u2026"),[s,a]=(0,tn.useState)(!1),[r,o]=(0,tn.useState)("office"),[l,c]=(0,tn.useState)(!1),[h,d]=(0,tn.useState)(!1),[f,p]=(0,tn.useState)(0),[g,x]=(0,tn.useState)(0),[m,u]=(0,tn.useState)(!1),[v,y]=(0,tn.useState)(1),[_,T]=(0,tn.useState)(""),w=(0,tn.useRef)(null),C=(0,tn.useRef)(null),N=(0,tn.useRef)(0),E=(0,tn.useRef)(!1),M=(0,tn.useRef)(1);(0,tn.useEffect)(()=>{if(!w.current)return;let rt=WN();C.current=rt;let Kt=Array(Yr).fill(!1),Ft;try{Ft=xE(w.current,rt)}catch(Ut){w.current.classList.add("static-fallback"),i(`3D office unavailable; live status remains visible. ${Ut instanceof Error?Ut.message:String(Ut)}`)}let Q=new EventSource("/events");Q.onmessage=Ut=>{try{let Mt=JSON.parse(Ut.data);if(!Array.isArray(Mt.sessions)||typeof Mt.currentSessionId!="string")throw new Error("Invalid office status");Ft?.capturePositions(),qN(rt,EE(Mt),Kt),t(Mt),i("Live read-only view \xB7 local sessions running Agent Inc Live")}catch(Mt){i(`Office update failed: ${Mt instanceof Error?Mt.message:String(Mt)}`)}},Q.addEventListener("error",()=>{i("Connection interrupted; reconnecting to the local office\u2026")});let $=0,vt=performance.now(),Nt=0,Dt=vt/1e3,jt=0,We=vt,D=()=>{vt=performance.now(),Nt=0,Ft?.capturePositions()},pe=Ut=>{let Mt=Math.min((Ut-vt)/1e3,.2);if(vt=Ut,!document.hidden){Nt+=Mt;let bt=!1;for(;Nt>=Su;)Ft?.capturePositions(),YN(rt,Su),E.current||(rt.time+=Su*M.current),Nt-=Su,bt=!0;E.current||(Dt+=Mt*M.current),Ft?.render(Dt,N.current,Nt/Su,bt),jt++,Ut-We>=1e3&&(p(Math.round(jt*1e3/(Ut-We))),jt=0,We=Ut)}$=requestAnimationFrame(pe)};return document.addEventListener("visibilitychange",D),$=requestAnimationFrame(pe),()=>{cancelAnimationFrame($),document.removeEventListener("visibilitychange",D),Q.close(),Ft?.dispose(),C.current=null}},[]);let U=EE(e),z=U.slice(0,Yr),V=U.filter(rt=>rt.status==="thinking"||rt.status==="tool").length,q=U.filter(rt=>rt.status==="idle").length,J=U.filter(rt=>rt.status==="blocked").length,Y=e.sessions.reduce((rt,Kt)=>rt+Kt.subagents.length,0),it=e.sessions.reduce((rt,Kt)=>rt+(Kt.messages??0),0),k=e.sessions.flatMap(rt=>(rt.events??[]).map((Kt,Ft)=>({...Kt,owner:Pv(rt.sessionId,e.currentSessionId),key:`${rt.sessionId}:${Kt.at}:${Ft}`}))).sort((rt,Kt)=>Kt.at-rt.at).slice(0,8),ct=ff(C.current?.time??0,g),gt=()=>{N.current=(N.current+.25)%1,x(N.current)},yt=()=>{E.current=!E.current,u(E.current)},Yt=()=>{M.current=M.current===1?2:1,y(M.current)};return(0,X.jsxs)("main",{className:"shell",children:[(0,X.jsxs)("header",{className:"topbar",children:[(0,X.jsxs)("div",{className:"identity","aria-label":"Agent Inc Live Office",children:[(0,X.jsx)("span",{className:"brand-icon","aria-hidden":"true",children:"\u2726"}),(0,X.jsxs)("div",{className:"brand",children:["agent",(0,X.jsx)("span",{children:"inc."})]})]}),(0,X.jsxs)("div",{className:"top-stats",children:[(0,X.jsxs)("div",{className:"stat",children:[(0,X.jsx)("span",{className:"stat-label",children:"\u2727 \xA0SESSIONS"}),(0,X.jsx)("strong",{children:e.sessions.length})]}),(0,X.jsxs)("div",{className:"stat",children:[(0,X.jsx)("span",{className:"stat-label",children:"\u25C8 \xA0WORKING"}),(0,X.jsx)("strong",{children:V})]}),(0,X.jsxs)("div",{className:"stat desktop-stat",children:[(0,X.jsx)("span",{className:"stat-label",children:"\u25CC \xA0MESSAGES"}),(0,X.jsx)("strong",{children:it})]}),(0,X.jsxs)("button",{type:"button",className:"system-toggle","aria-expanded":s,"aria-controls":"system-panel",onClick:()=>a(rt=>!rt),children:[s?"CLOSE":"ACTIVITY"," ",(0,X.jsx)("span",{"aria-hidden":"true",children:"\u2733"})]})]})]}),(0,X.jsxs)("div",{className:"layout",children:[(0,X.jsxs)("section",{className:"world-panel","aria-label":"Live Copilot office",children:[(0,X.jsxs)("div",{className:"scene-header",children:[(0,X.jsxs)("div",{children:[(0,X.jsx)("span",{className:"online-dot"})," LIVE OFFICE"]}),(0,X.jsx)("div",{className:"scene-tools",children:(0,X.jsxs)("button",{type:"button",className:"time-preview",onClick:gt,title:"Preview the next six hours of decorative office lighting","aria-label":`Office lighting ${ct.label}; preview next six hours`,children:[(0,X.jsx)("span",{"aria-hidden":"true",children:ct.sun>1?"\u263C":ct.moon>.2?"\u263E":"\u25D1"})," ",ct.label," ",(0,X.jsx)("span",{className:"time-arrow",children:"\u21BB"})]})})]}),(0,X.jsx)("div",{ref:w,className:"world-host",children:(0,X.jsxs)("div",{className:"world-callout live-callout",children:[(0,X.jsx)("span",{className:"callout-star",children:"\u2726"}),(0,X.jsx)("span",{children:J?`${J} worker${J===1?"":"s"} need attention.`:V?`${V} worker${V===1?" is":"s are"} active.`:"The office is listening for Copilot activity."})]})}),(0,X.jsxs)("div",{className:"scene-footer",children:[(0,X.jsxs)("div",{className:"scene-live",children:[(0,X.jsx)("span",{className:"tiny-pulse"}),(0,X.jsx)("span",{className:"live-label",children:"OBSERVING"}),(0,X.jsxs)("span",{className:"live-count",children:[" ",(0,X.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",V," working",(0,X.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",q," on break",(0,X.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",J," needing attention"]})]}),(0,X.jsxs)("div",{className:"scene-controls",children:[(0,X.jsx)("button",{type:"button",onClick:yt,title:"Pause only decorative light and idle motion, not live sessions","aria-label":m?"Resume office ambience":"Pause office ambience",children:m?"\u25B6":"\u2161"}),(0,X.jsxs)("button",{type:"button",onClick:Yt,title:"Change cosmetic lighting speed only","aria-label":`Set office ambience to ${v===1?"double":"normal"} speed`,children:[v,"\xD7"]}),(0,X.jsx)("button",{type:"button",onClick:()=>d(!h),title:"Toggle view diagnostics","aria-label":h?"Hide diagnostics":"Show diagnostics","aria-expanded":h,children:"\u22EF"})]})]})]}),(0,X.jsxs)("aside",{id:"system-panel",className:`sidebar ${s?"sidebar-open":""}`,children:[(0,X.jsxs)("div",{className:"sidebar-heading",children:[(0,X.jsx)("span",{children:"LIVE OFFICE / ACTIVITY"}),(0,X.jsx)("button",{type:"button",className:"sidebar-close",onClick:()=>a(!1),"aria-label":"Close activity",children:"\xD7"})]}),(0,X.jsx)("div",{className:"sidebar-tabs",role:"tablist","aria-label":"Activity categories",children:["office","stations","agents"].map(rt=>(0,X.jsx)("button",{type:"button",id:`tab-${rt}`,role:"tab","aria-selected":r===rt,"aria-controls":`panel-${rt}`,onClick:()=>o(rt),children:rt},rt))}),r==="office"&&(0,X.jsxs)("div",{id:"panel-office",role:"tabpanel","aria-labelledby":"tab-office",className:"upgrade-pane",children:[(0,X.jsxs)("div",{className:"system-card",children:[(0,X.jsx)("div",{className:"system-emblem",children:"\u2726"}),(0,X.jsxs)("div",{children:[(0,X.jsx)("div",{className:"system-name",children:"The Living Office"}),(0,X.jsx)("div",{className:"system-desc",children:"Real sessions, displayed without prompts, code or tool output."})]})]}),(0,X.jsxs)("div",{className:"mini-metrics",children:[(0,X.jsxs)("div",{children:[(0,X.jsx)("span",{children:"LOCAL SESSIONS"}),(0,X.jsx)("strong",{children:e.sessions.length})]}),(0,X.jsxs)("div",{children:[(0,X.jsx)("span",{children:"MESSAGES SEEN"}),(0,X.jsx)("strong",{children:it})]})]}),(0,X.jsxs)("div",{className:"live-detail",children:[(0,X.jsxs)("span",{children:[Y," subagents"]}),(0,X.jsxs)("span",{children:[k.length," recent events"]})]}),(0,X.jsxs)("div",{className:"section-title",children:[(0,X.jsx)("span",{children:"\u2726 \xA0OFFICE SYSTEMS"}),(0,X.jsx)("span",{children:"READ ONLY"})]}),(0,X.jsxs)("div",{className:"upgrade-list",children:[(0,X.jsxs)("div",{className:"upgrade",children:[(0,X.jsx)("div",{className:"upgrade-symbol",children:"\u25C8"}),(0,X.jsxs)("div",{className:"upgrade-info",children:[(0,X.jsxs)("div",{className:"upgrade-name",children:["Live status ",(0,X.jsx)("span",{children:"CONNECTED"})]}),(0,X.jsx)("p",{children:n}),(0,X.jsxs)("div",{className:"live-detail",children:[(0,X.jsxs)("span",{children:[V," active"]}),(0,X.jsxs)("span",{children:[q," idle"]}),(0,X.jsxs)("span",{className:J?"attention":"",children:[J," need attention"]})]})]})]}),(0,X.jsxs)("div",{className:"upgrade",children:[(0,X.jsx)("div",{className:"upgrade-symbol context-symbol",children:"\u25A3"}),(0,X.jsxs)("div",{className:"upgrade-info",children:[(0,X.jsxs)("div",{className:"upgrade-name",children:["Project room ",(0,X.jsxs)("span",{children:[z.length," / ",Yr," DESKS"]})]}),(0,X.jsx)("p",{children:"Additional sessions and helpers stay visible in the lists below. Only sessions running this extension can join."})]})]})]})]}),r==="stations"&&(0,X.jsxs)("div",{id:"panel-stations",role:"tabpanel","aria-labelledby":"tab-stations",className:"upgrade-pane",children:[(0,X.jsxs)("div",{className:"pane-intro",children:[(0,X.jsx)("strong",{children:"Session desks"}),(0,X.jsx)("span",{children:"Each desk represents actual local Copilot activity. Selection highlights its status here; the canvas cannot navigate App sessions."})]}),z.map((rt,Kt)=>(0,X.jsxs)("div",{className:"upgrade station-card live-card",children:[(0,X.jsx)("div",{className:"station-number",children:String(Kt+1).padStart(2,"0")}),(0,X.jsxs)("div",{className:"upgrade-info",children:[(0,X.jsxs)("div",{className:"upgrade-name",children:[rt.title," ",(0,X.jsx)("span",{children:rt.status.toUpperCase()})]}),(0,X.jsx)("p",{children:rt.activity}),(0,X.jsxs)("button",{type:"button",className:"buy-button","aria-pressed":_===rt.key,onClick:()=>T(rt.key),children:[_===rt.key?"SELECTED":"SELECT DESK"," ",(0,X.jsxs)("span",{children:["\u25C8 ",Kt+1]})]})]})]},rt.key)),!z.length&&(0,X.jsx)("div",{className:"pane-intro",children:"Waiting for the first participating session."})]}),r==="agents"&&(0,X.jsxs)("div",{id:"panel-agents",role:"tabpanel","aria-labelledby":"tab-agents",className:"upgrade-pane",children:[(0,X.jsxs)("div",{className:"pane-intro",children:[(0,X.jsx)("strong",{children:"The workers"}),(0,X.jsx)("span",{children:"Subagents appear as additional workers when a desk is free. No training or upgrades alter real Copilot sessions."})]}),U.map(rt=>(0,X.jsxs)("div",{className:"persona-card",children:[(0,X.jsxs)("div",{className:"persona-heading",children:[(0,X.jsx)("span",{className:"persona-avatar",style:{backgroundColor:rt.helper?"#b49ccc":"#78bea6"},children:rt.helper?"\u2733":"\u2726"}),(0,X.jsxs)("span",{children:[(0,X.jsx)("strong",{children:rt.title}),(0,X.jsxs)("small",{children:[rt.helper?"Subagent":"Session"," \xB7 ",rt.status]})]})]}),(0,X.jsx)("div",{className:"live-descriptor",children:rt.activity})]},rt.key)),!U.length&&(0,X.jsx)("div",{className:"pane-intro",children:"No workers are connected yet."})]}),(0,X.jsx)("div",{className:"side-hint",children:"\u2727 \xA0Only sanitized local activity is shown. All controls here affect this view, not the underlying agents."})]})]}),(0,X.jsxs)("section",{className:`feed-panel ${l?"feed-open":""}`,"aria-label":"Live activity feed",children:[(0,X.jsxs)("button",{type:"button",className:"feed-top",onClick:()=>c(rt=>!rt),"aria-expanded":l,"aria-controls":"signal-list",children:[(0,X.jsxs)("span",{children:[(0,X.jsx)("span",{className:"feed-glyph",children:"\u25C8"})," SIGNALS ",(0,X.jsxs)("span",{className:"feed-count",children:[V," LIVE"]})]}),(0,X.jsx)("span",{className:"feed-chevron","aria-hidden":"true",children:l?"\u2304":"\u2303"})]}),(0,X.jsxs)("div",{id:"signal-list",className:"feed-list","aria-live":"off",children:[!k.length&&(0,X.jsxs)("div",{className:"feed-empty",children:[(0,X.jsx)("span",{children:"\u25CC"})," Listening for the first activity\u2026"]}),k.map(rt=>(0,X.jsxs)("div",{className:`feed-item feed-${rt.kind==="error"?"failed":rt.kind==="message"?"complete":"working"}`,children:[(0,X.jsx)("span",{className:"feed-icon",children:rt.kind==="error"?"!":rt.kind==="message"?"\u2713":"\u25C9"}),(0,X.jsxs)("span",{className:"feed-task",children:[rt.owner," \xB7 ",rt.label]}),(0,X.jsx)("span",{className:"feed-status",children:rt.kind.toUpperCase()})]},rt.key))]})]}),n!=="Live read-only view \xB7 local sessions running Agent Inc Live"&&(0,X.jsx)("div",{className:"storage-error",role:"status",children:n}),h&&(0,X.jsxs)("div",{className:"debug-panel",children:[(0,X.jsxs)("span",{children:["LIGHT ",C.current?.time.toFixed(1)??0,"s"]}),(0,X.jsxs)("span",{children:["FPS ",f]}),(0,X.jsxs)("span",{children:["DESKS ",z.length,"/",Yr]}),(0,X.jsxs)("span",{children:["WORKERS ",U.length]}),(0,X.jsxs)("span",{children:["SESSIONS ",e.sessions.length]}),(0,X.jsxs)("span",{children:["HELPERS ",Y]}),(0,X.jsxs)("span",{children:["VISUAL SPEED ",v,"\xD7"]})]})]})}var AE=document.getElementById("root");if(!AE)throw new Error("Agent Inc Live office root is missing");(0,TE.createRoot)(AE).render((0,X.jsx)(ZN,{}));
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
