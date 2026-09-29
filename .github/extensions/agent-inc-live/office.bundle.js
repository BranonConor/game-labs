var RE=Object.create;var Bv=Object.defineProperty;var CE=Object.getOwnPropertyDescriptor;var DE=Object.getOwnPropertyNames;var NE=Object.getPrototypeOf,UE=Object.prototype.hasOwnProperty;var rs=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var LE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of DE(t))!UE.call(e,s)&&s!==n&&Bv(e,s,{get:()=>t[s],enumerable:!(i=CE(t,s))||i.enumerable});return e};var Su=(e,t,n)=>(n=e!=null?RE(NE(e)):{},LE(t||!e||!e.__esModule?Bv(n,"default",{value:e,enumerable:!0}):n,e));var Qv=rs(Xt=>{"use strict";var lp=Symbol.for("react.transitional.element"),OE=Symbol.for("react.portal"),IE=Symbol.for("react.fragment"),PE=Symbol.for("react.strict_mode"),zE=Symbol.for("react.profiler"),BE=Symbol.for("react.consumer"),FE=Symbol.for("react.context"),HE=Symbol.for("react.forward_ref"),VE=Symbol.for("react.suspense"),GE=Symbol.for("react.memo"),kv=Symbol.for("react.lazy"),kE=Symbol.for("react.activity"),XE=Symbol.for("react.view_transition"),Fv=Symbol.iterator;function WE(e){return e===null||typeof e!="object"?null:(e=Fv&&e[Fv]||e["@@iterator"],typeof e=="function"?e:null)}var Xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wv=Object.assign,qv={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=qv,this.updater=n||Xv}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yv(){}Yv.prototype=Yr.prototype;function cp(e,t,n){this.props=e,this.context=t,this.refs=qv,this.updater=n||Xv}var up=cp.prototype=new Yv;up.constructor=cp;Wv(up,Yr.prototype);up.isPureReactComponent=!0;var Hv=Array.isArray;function op(){}var Ce={H:null,A:null,T:null,S:null},Zv=Object.prototype.hasOwnProperty;function hp(e,t,n){var i=n.ref;return{$$typeof:lp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function qE(e,t){return hp(e.type,t,e.props)}function fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===lp}function YE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vv=/\/+/g;function rp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?YE(""+e.key):t.toString(36)}function ZE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(op,op):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function qr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case lp:case OE:r=!0;break;case kv:return r=e._init,qr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+rp(e,0):i,Hv(s)?(n="",r!=null&&(n=r.replace(Vv,"$&/")+"/"),qr(s,t,n,"",function(c){return c})):s!=null&&(fp(s)&&(s=qE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Vv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Hv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+rp(i,l),r+=qr(i,t,n,a,s);else if(l=WE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+rp(i,l++),r+=qr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return qr(ZE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Mu(e,t,n){if(e==null)return e;var i=[],s=0;return qr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function JE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Gv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Jv(e){var t=Ce.T,n={};n.types=t!==null?t.types:null,Ce.T=n;try{var i=e(),s=Ce.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(op,Gv)}catch(a){Gv(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ce.T=t}}function Kv(e){var t=Ce.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Jv(Kv.bind(null,e))}var KE={map:Mu,forEach:function(e,t,n){Mu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mu(e,function(){t++}),t},toArray:function(e){return Mu(e,function(t){return t})||[]},only:function(e){if(!fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Xt.Activity=kE;Xt.Children=KE;Xt.Component=Yr;Xt.Fragment=IE;Xt.Profiler=zE;Xt.PureComponent=cp;Xt.StrictMode=PE;Xt.Suspense=VE;Xt.ViewTransition=XE;Xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ce;Xt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ce.H.useMemoCache(e)}};Xt.addTransitionType=Kv;Xt.cache=function(e){return function(){return e.apply(null,arguments)}};Xt.cacheSignal=function(){return null};Xt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Wv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Zv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return hp(e.type,s,i)};Xt.createContext=function(e){return e={$$typeof:FE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:BE,_context:e},e};Xt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Zv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return hp(e,a,s)};Xt.createRef=function(){return{current:null}};Xt.forwardRef=function(e){return{$$typeof:HE,render:e}};Xt.isValidElement=fp;Xt.lazy=function(e){return{$$typeof:kv,_payload:{_status:-1,_result:e},_init:JE}};Xt.memo=function(e,t){return{$$typeof:GE,type:e,compare:t===void 0?null:t}};Xt.startTransition=Jv;Xt.unstable_useCacheRefresh=function(){return Ce.H.useCacheRefresh()};Xt.use=function(e){return Ce.H.use(e)};Xt.useActionState=function(e,t,n){return Ce.H.useActionState(e,t,n)};Xt.useCallback=function(e,t){return Ce.H.useCallback(e,t)};Xt.useContext=function(e){return Ce.H.useContext(e)};Xt.useDebugValue=function(){};Xt.useDeferredValue=function(e,t){return Ce.H.useDeferredValue(e,t)};Xt.useEffect=function(e,t){return Ce.H.useEffect(e,t)};Xt.useEffectEvent=function(e){return Ce.H.useEffectEvent(e)};Xt.useId=function(){return Ce.H.useId()};Xt.useImperativeHandle=function(e,t,n){return Ce.H.useImperativeHandle(e,t,n)};Xt.useInsertionEffect=function(e,t){return Ce.H.useInsertionEffect(e,t)};Xt.useLayoutEffect=function(e,t){return Ce.H.useLayoutEffect(e,t)};Xt.useMemo=function(e,t){return Ce.H.useMemo(e,t)};Xt.useOptimistic=function(e,t){return Ce.H.useOptimistic(e,t)};Xt.useReducer=function(e,t,n){return Ce.H.useReducer(e,t,n)};Xt.useRef=function(e){return Ce.H.useRef(e)};Xt.useState=function(e){return Ce.H.useState(e)};Xt.useSyncExternalStore=function(e,t,n){return Ce.H.useSyncExternalStore(e,t,n)};Xt.useTransition=function(){return Ce.H.useTransition()};Xt.version="19.3.0"});var bu=rs(($N,jv)=>{"use strict";jv.exports=Qv()});var l_=rs(Ie=>{"use strict";function gp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Eu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function os(e){return e.length===0?null:e[0]}function Au(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Eu(o,n))l<s&&0>Eu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Eu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Eu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ie.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?($v=performance,Ie.unstable_now=function(){return $v.now()}):(dp=Date,t_=dp.now(),Ie.unstable_now=function(){return dp.now()-t_});var $v,dp,t_,Ds=[],la=[],QE=1,Ci=null,Cn=3,vp=!1,Ul=!1,Ll=!1,_p=!1,i_=typeof setTimeout=="function"?setTimeout:null,s_=typeof clearTimeout=="function"?clearTimeout:null,e_=typeof setImmediate<"u"?setImmediate:null;function Tu(e){for(var t=os(la);t!==null;){if(t.callback===null)Au(la);else if(t.startTime<=e)Au(la),t.sortIndex=t.expirationTime,gp(Ds,t);else break;t=os(la)}}function yp(e){if(Ll=!1,Tu(e),!Ul)if(os(Ds)!==null)Ul=!0,Jr||(Jr=!0,Zr());else{var t=os(la);t!==null&&xp(yp,t.startTime-e)}}var Jr=!1,Ol=-1,a_=5,r_=-1;function o_(){return _p?!0:!(Ie.unstable_now()-r_<a_)}function pp(){if(_p=!1,Jr){var e=Ie.unstable_now();r_=e;var t=!0;try{t:{Ul=!1,Ll&&(Ll=!1,s_(Ol),Ol=-1),vp=!0;var n=Cn;try{e:{for(Tu(e),Ci=os(Ds);Ci!==null&&!(Ci.expirationTime>e&&o_());){var i=Ci.callback;if(typeof i=="function"){Ci.callback=null,Cn=Ci.priorityLevel;var s=i(Ci.expirationTime<=e);if(e=Ie.unstable_now(),typeof s=="function"){Ci.callback=s,Tu(e),t=!0;break e}Ci===os(Ds)&&Au(Ds),Tu(e)}else Au(Ds);Ci=os(Ds)}if(Ci!==null)t=!0;else{var a=os(la);a!==null&&xp(yp,a.startTime-e),t=!1}}break t}finally{Ci=null,Cn=n,vp=!1}t=void 0}}finally{t?Zr():Jr=!1}}}var Zr;typeof e_=="function"?Zr=function(){e_(pp)}:typeof MessageChannel<"u"?(mp=new MessageChannel,n_=mp.port2,mp.port1.onmessage=pp,Zr=function(){n_.postMessage(null)}):Zr=function(){i_(pp,0)};var mp,n_;function xp(e,t){Ol=i_(function(){e(Ie.unstable_now())},t)}Ie.unstable_IdlePriority=5;Ie.unstable_ImmediatePriority=1;Ie.unstable_LowPriority=4;Ie.unstable_NormalPriority=3;Ie.unstable_Profiling=null;Ie.unstable_UserBlockingPriority=2;Ie.unstable_cancelCallback=function(e){e.callback=null};Ie.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):a_=0<e?Math.floor(1e3/e):5};Ie.unstable_getCurrentPriorityLevel=function(){return Cn};Ie.unstable_next=function(e){switch(Cn){case 1:case 2:case 3:var t=3;break;default:t=Cn}var n=Cn;Cn=t;try{return e()}finally{Cn=n}};Ie.unstable_requestPaint=function(){_p=!0};Ie.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Cn;Cn=e;try{return t()}finally{Cn=n}};Ie.unstable_scheduleCallback=function(e,t,n){var i=Ie.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:QE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,gp(la,e),os(Ds)===null&&e===os(la)&&(Ll?(s_(Ol),Ol=-1):Ll=!0,xp(yp,n-i))):(e.sortIndex=s,gp(Ds,e),Ul||vp||(Ul=!0,Jr||(Jr=!0,Zr()))),e};Ie.unstable_shouldYield=o_;Ie.unstable_wrapCallback=function(e){var t=Cn;return function(){var n=Cn;Cn=t;try{return e.apply(this,arguments)}finally{Cn=n}}}});var u_=rs((eU,c_)=>{"use strict";c_.exports=l_()});var d_=rs(Dn=>{"use strict";var jE=bu();function f_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ca(){}var Vn={d:{f:ca,r:function(){throw Error(f_(522))},D:ca,C:ca,L:ca,m:ca,X:ca,S:ca,M:ca},p:0,findDOMNode:null},$E=Symbol.for("react.portal"),tT=Symbol.for("react.recoverable"),h_=Symbol.for("react.optimistic_key");function eT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$E,key:i==null?null:i===h_?h_:""+i,children:e,containerInfo:t,implementation:n}}var Il=jE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Vn;Dn.browser=function(e){return{$$typeof:tT,_reason:e}};Dn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(f_(299));return eT(e,t,null,n)};Dn.flushSync=function(e){var t=Il.T,n=Vn.p;try{if(Il.T=null,Vn.p=2,e)return e()}finally{Il.T=t,Vn.p=n,Vn.d.f()}};Dn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Vn.d.C(e,t))};Dn.prefetchDNS=function(e){typeof e=="string"&&Vn.d.D(e)};Dn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Vn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Vn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Dn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=wu(t.as,t.crossOrigin);Vn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Vn.d.M(e)};Dn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin);Vn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Dn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=wu(t.as,t.crossOrigin);Vn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Vn.d.m(e)};Dn.requestFormReset=function(e){Vn.d.r(e)};Dn.unstable_batchedUpdates=function(e,t){return e(t)};Dn.useFormState=function(e,t,n){return Il.H.useFormState(e,t,n)};Dn.useFormStatus=function(){return Il.H.useHostTransitionStatus()};Dn.version="19.3.0"});var g_=rs((iU,m_)=>{"use strict";function p_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p_)}catch(e){console.error(e)}}p_(),m_.exports=d_()});var nM=rs(cf=>{"use strict";var nn=u_(),ex=bu(),nT=g_();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function nx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function ix(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v_(e){if(Mc(e)!==e)throw Error(j(188))}function iT(e){var t=e.alternate;if(!t){if(t=Mc(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return v_(s),e;if(a===i)return v_(s),t;a=a.sibling}throw Error(j(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function ax(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ax(e),t!==null)return t;e=e.sibling}return null}function ii(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&ii(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function yr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function __(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function rx(e){var t=[null,null],n=yr(e);return n===null||ox(t,e,n.child,{foundSelf:!1}),t}function ox(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ox(e,t,n.child,i))return!0;n=n.sibling}return!1}function en(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(j(559))}}var no=null,jp=null;function sT(e,t,n){return e===n?!0:e===t?(no=e,!0):!1}function aT(e,t,n){return e===n?(jp=e,!1):e===t?(jp!==null&&(no=e),!0):!1}function y_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function $p(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var we=Object.assign,rT=Symbol.for("react.element"),Ru=Symbol.for("react.transitional.element"),Gl=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),lx=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),cx=Symbol.for("react.consumer"),ds=Symbol.for("react.context"),cg=Symbol.for("react.forward_ref"),em=Symbol.for("react.suspense"),nm=Symbol.for("react.suspense_list"),ug=Symbol.for("react.memo"),da=Symbol.for("react.lazy");Symbol.for("react.scope");var im=Symbol.for("react.activity"),oT=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var lT=Symbol.for("react.memo_cache_sentinel"),sm=Symbol.for("react.view_transition"),cT=Symbol.for("react.recoverable"),x_=Symbol.iterator;function Pl(e){return e===null||typeof e!="object"?null:(e=x_&&e[x_]||e["@@iterator"],typeof e=="function"?e:null)}var uT=Symbol.for("react.client.reference");function am(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===uT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case io:return"Fragment";case tm:return"Profiler";case lx:return"StrictMode";case em:return"Suspense";case nm:return"SuspenseList";case im:return"Activity";case sm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Gl:return"Portal";case ds:return e.displayName||"Context";case cx:return(e._context.displayName||"Context")+".Consumer";case cg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ug:return t=e.displayName||null,t!==null?t:am(e.type)||"Memo";case da:t=e._payload,e=e._init;try{return am(e(t))}catch{}}return null}var kl=Array.isArray,Vt=ex.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=nT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rr={pending:!1,data:null,method:null,action:null},rm=[],so=-1;function xs(e){return{current:e}}function yn(e){0>so||(e.current=rm[so],rm[so]=null,so--)}function Ue(e,t){so++,rm[so]=e.current,e.current=t}var vs=xs(null),rc=xs(null),Ma=xs(null),ph=xs(null);function mh(e,t){switch(Ue(Ma,t),Ue(rc,e),Ue(vs,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Oy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Oy(t),e=NS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yn(vs),Ue(vs,e)}function To(){yn(vs),yn(rc),yn(Ma)}function om(e){var t=e.memoizedState;t!==null&&(Io._currentValue=t.memoizedState,Ue(ph,e)),t=vs.current;var n=NS(t,e.type);t!==n&&(Ue(rc,e),Ue(vs,n))}function gh(e){rc.current===e&&(yn(vs),yn(rc)),ph.current===e&&(yn(ph),Io._currentValue=rr)}var Sp,S_;function ha(e){if(Sp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sp=t&&t[1]||"",S_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sp+e+S_}var Mp=!1;function bp(e,t){if(!e||Mp)return"";Mp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var f=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){f=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){f=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&f&&typeof g.stack=="string")return[g.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{Mp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ha(n):""}function hT(e,t){switch(e.tag){case 26:case 27:case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return e.child!==t&&t!==null?ha("Suspense Fallback"):ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return bp(e.type,!1);case 11:return bp(e.type.render,!1);case 1:return bp(e.type,!0);case 31:return ha("Activity");case 30:return ha("ViewTransition");default:return""}}function M_(e){try{var t="",n=null;do t+=hT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var lm=Object.prototype.hasOwnProperty,hg=nn.unstable_scheduleCallback,Ep=nn.unstable_cancelCallback,fT=nn.unstable_shouldYield,dT=nn.unstable_requestPaint,vi=nn.unstable_now,pT=nn.unstable_getCurrentPriorityLevel,ux=nn.unstable_ImmediatePriority,hx=nn.unstable_UserBlockingPriority,vh=nn.unstable_NormalPriority,mT=nn.unstable_LowPriority,fx=nn.unstable_IdlePriority,gT=nn.log,vT=nn.unstable_setDisableYieldValue,bc=null,_i=null;function ga(e){if(typeof gT=="function"&&vT(e),_i&&typeof _i.setStrictMode=="function")try{_i.setStrictMode(bc,e)}catch{}}var yi=Math.clz32?Math.clz32:xT,_T=Math.log,yT=Math.LN2;function xT(e){return e>>>=0,e===0?32:31-(_T(e)/yT|0)|0}var Cu=256,Du=262144,Nu=4194304;function er(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=er(i):(r&=o,r!==0?s=er(r):n||(n=o&~e,n!==0&&(s=er(n))))):(o=i&~a,o!==0?s=er(o):r!==0?s=er(r):n||(n=i&~e,n!==0&&(s=er(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Ec(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function dx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-yi(n),s=1<<i;t|=e[i],n&=~s}return t}function ST(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function px(){var e=Nu;return Nu<<=1,(Nu&62914560)===0&&(Nu=4194304),e}function Tp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function MT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-yi(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&mx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function mx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-yi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function gx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-yi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function vx(e,t){var n=t&-t;return n=(n&42)!==0?1:fg(n),(n&(e.suspendedLanes|t))!==0?0:n}function fg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _x(){var e=he.p;return e!==0?e:(e=window.event,e===void 0?32:$S(e.type))}function b_(e,t){var n=he.p;try{return he.p=e,t()}finally{he.p=n}}var ks=Math.random().toString(36).slice(2),vn="__reactFiber$"+ks,si="__reactProps$"+ks,Bo="__reactContainer$"+ks,E_="__reactEvents$"+ks,bT="__reactListeners$"+ks,ET="__reactHandles$"+ks,T_="__reactResources$"+ks,Ac="__reactMarker$"+ks,_h="__reactLoad$"+ks;function Xh(e){delete e[vn],delete e[si],delete e[bT],delete e[ET]}function sr(e){var t;if(t=e[vn])return t;for(var n=e.parentNode;n;){if(t=n[Bo]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gy(e);e!==null;){if(n=e[vn])return n;e=Gy(e)}return t}e=n,n=e.parentNode}return null}function Fo(e){if(e=e[vn]||e[Bo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function mo(e){var t=e[T_];return t||(t=e[T_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function cn(e){e[Ac]=!0}function yx(e){e[_h]=void 0}var xx=new Set,Sx={};function xr(e,t){Ao(e,t),Ao(e+"Capture",t)}function Ao(e,t){for(Sx[e]=t,e=0;e<t.length;e++)xx.add(t[e])}var TT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),A_={},w_={};function AT(e){return lm.call(w_,e)?!0:lm.call(A_,e)?!1:TT.test(e)?w_[e]=!0:(A_[e]=!0,!1)}var ce=!1;function R_(){var e=ce;return ce=!1,e}function Ju(e,t,n){if(AT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Uu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ns(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function di(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cm(e){if(!e._valueTracker){var t=Mx(e)?"checked":"value";e._valueTracker=wT(e,t,""+e[t])}}function bx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Mx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var RT=/[\n"\\]/g;function Oi(e){return e.replace(RT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function um(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+di(t)):e.value!==""+di(t)&&(e.value=""+di(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Ap(e,di(e.value)):Ap(e,di(t)):n!=null?Ap(e,di(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+di(o):e.removeAttribute("name")}function Ex(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){cm(e);return}n=n!=null?""+di(n):"",t=t!=null?""+di(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),cm(e)}function Ap(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function go(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+di(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Tx(e,t,n){if(t!=null&&(t=""+di(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+di(n):""}function Ax(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(kl(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=di(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),cm(e)}function wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var CT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function C_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||CT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function wx(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ce=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(C_(e,s,i),ce=!0)}else for(var a in t)t.hasOwnProperty(a)&&C_(e,a,t[a])}function pg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var DT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),NT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ku(e){return NT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ps(){}var hm=null;function mg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,vo=null;function D_(e){var t=Fo(e);if(t&&(e=t.stateNode)){var n=e[si]||null;t:switch(e=t.stateNode,t.type){case"input":if(um(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Oi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[si]||null;if(!s)throw Error(j(90));um(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&bx(i)}break t;case"textarea":Tx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&go(e,!!n.multiple,t,!1)}}}var wp=!1;function Rx(e,t,n){if(wp)return e(t,n);wp=!0;try{var i=e(t);return i}finally{if(wp=!1,(ao!==null||vo!==null)&&(af(),ao&&(t=ao,e=vo,vo=ao=null,D_(t),e)))for(t=0;t<e.length;t++)D_(e[t])}}function oc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[si]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var zs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fm=!1;if(zs)try{Kr={},Object.defineProperty(Kr,"passive",{get:function(){fm=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{fm=!1}var Kr,va=null,gg=null,Qu=null;function Cx(){if(Qu)return Qu;var e,t=gg,n=t.length,i,s="value"in va?va.value:va.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Qu=s.slice(e,1<i?1-i:void 0)}function ju(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lu(){return!0}function N_(){return!1}function Wn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Lu:N_,this.isPropagationStopped=N_,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lu)},persist:function(){},isPersistent:Lu}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wh=Wn(za),wc=we({},za,{view:0,detail:0}),UT=Wn(wc),Rp,Cp,zl,qh=we({},wc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Rp=e.screenX-zl.screenX,Cp=e.screenY-zl.screenY):Cp=Rp=0,zl=e),Rp)},movementY:function(e){return"movementY"in e?e.movementY:Cp}}),U_=Wn(qh),LT=we({},qh,{dataTransfer:0}),OT=Wn(LT),IT=we({},wc,{relatedTarget:0}),Dp=Wn(IT),PT=we({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),zT=Wn(PT),BT=we({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),FT=Wn(BT),HT=we({},za,{data:0}),L_=Wn(HT),VT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kT[e])?!!t[e]:!1}function vg(){return XT}var WT=we({},wc,{key:function(e){if(e.key){var t=VT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ju(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?GT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vg,charCode:function(e){return e.type==="keypress"?ju(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ju(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qT=Wn(WT),YT=we({},qh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O_=Wn(YT),ZT=we({},za,{submitter:0}),JT=Wn(ZT),KT=we({},wc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vg}),QT=Wn(KT),jT=we({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),$T=Wn(jT),tA=we({},qh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eA=Wn(tA),nA=we({},za,{newState:0,oldState:0,source:0}),iA=Wn(nA),sA=[9,13,27,32],_g=zs&&"CompositionEvent"in window,Yl=null;zs&&"documentMode"in document&&(Yl=document.documentMode);var aA=zs&&"TextEvent"in window&&!Yl,Dx=zs&&(!_g||Yl&&8<Yl&&11>=Yl),I_=" ",P_=!1;function Nx(e,t){switch(e){case"keyup":return sA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ux(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ro=!1;function rA(e,t){switch(e){case"compositionend":return Ux(t);case"keypress":return t.which!==32?null:(P_=!0,I_);case"textInput":return e=t.data,e===I_&&P_?null:e;default:return null}}function oA(e,t){if(ro)return e==="compositionend"||!_g&&Nx(e,t)?(e=Cx(),Qu=gg=va=null,ro=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dx&&t.locale!=="ko"?null:t.data;default:return null}}var lA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lA[e.type]:t==="textarea"}function Lx(e,t,n,i){ao?vo?vo.push(i):vo=[i]:ao=i,t=Hh(t,"onChange"),0<t.length&&(n=new Wh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Zl=null,lc=null;function cA(e){RS(e,0)}function Yh(e){var t=Xl(e);if(bx(t))return e}function B_(e,t){if(e==="change")return t}var Ox=!1;zs&&(zs?(Iu="oninput"in document,Iu||(Np=document.createElement("div"),Np.setAttribute("oninput","return;"),Iu=typeof Np.oninput=="function"),Ou=Iu):Ou=!1,Ox=Ou&&(!document.documentMode||9<document.documentMode));var Ou,Iu,Np;function F_(){Zl&&(Zl.detachEvent("onpropertychange",Ix),lc=Zl=null)}function Ix(e){if(e.propertyName==="value"&&Yh(lc)){var t=[];Lx(t,lc,e,mg(e)),Rx(cA,t)}}function uA(e,t,n){e==="focusin"?(F_(),Zl=t,lc=n,Zl.attachEvent("onpropertychange",Ix)):e==="focusout"&&F_()}function hA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yh(lc)}function fA(e,t){if(e==="click")return Yh(t)}function dA(e,t){if(e==="input"||e==="change")return Yh(t)}function pA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Si=typeof Object.is=="function"?Object.is:pA;function cc(e,t){if(Si(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!lm.call(t,s)||!Si(e[s],t[s]))return!1}return!0}function dm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function H_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function V_(e,t){var n=H_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=H_(n)}}function Px(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Px(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=dm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=dm(e.document)}return t}function yg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mA=zs&&"documentMode"in document&&11>=document.documentMode,oo=null,pm=null,Jl=null,mm=!1;function G_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mm||oo==null||oo!==dm(i)||(i=oo,"selectionStart"in i&&yg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jl&&cc(Jl,i)||(Jl=i,i=Hh(pm,"onSelect"),0<i.length&&(t=new Wh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=oo)))}function $a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lo={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Up={},Bx={};zs&&(Bx=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function Sr(e){if(Up[e])return Up[e];if(!lo[e])return e;var t=lo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bx)return Up[e]=t[n];return e}var Fx=Sr("animationend"),Hx=Sr("animationiteration"),Vx=Sr("animationstart"),gA=Sr("transitionrun"),vA=Sr("transitionstart"),_A=Sr("transitioncancel"),Gx=Sr("transitionend"),kx=new Map,gm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gm.push("scrollEnd");function Ji(e,t){kx.set(e,t),xr(t,[e])}var yA=0;function Bs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Zi.identifierPrefix;var n=yA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function k_(e){if(e==null||typeof e=="string")return e;var t=null,n=Eo;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Xs(e,t){return e=k_(e),t=k_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var yh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ni=[],co=0,xg=0;function Zh(){for(var e=co,t=xg=co=0;t<e;){var n=Ni[t];Ni[t++]=null;var i=Ni[t];Ni[t++]=null;var s=Ni[t];Ni[t++]=null;var a=Ni[t];if(Ni[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Xx(n,s,a)}}function Jh(e,t,n,i){Ni[co++]=e,Ni[co++]=t,Ni[co++]=n,Ni[co++]=i,xg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Sg(e,t,n,i){return Jh(e,t,n,i),xh(e)}function Mr(e,t){return Jh(e,null,null,t),xh(e)}function Xx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-yi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function xh(e){if(50<ac)throw ac=0,lh=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var uo={};function xA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,t,n,i){return new xA(e,t,n,i)}function Mg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Is(e,t){var n=e.alternate;return n===null?(n=ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $u(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Mg(i)&&(r=1);else if(typeof i=="string")r=qw(e,n,vs.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case im:return e=ei(31,n,t,s),e.elementType=im,e.lanes=a,e;case io:return or(n.children,s,a,t);case lx:r=8,s|=24;break;case tm:return e=ei(12,n,t,s|2),e.elementType=tm,e.lanes=a,e;case em:return e=ei(13,n,t,s),e.elementType=em,e.lanes=a,e;case nm:return e=ei(19,n,t,s),e.elementType=nm,e.lanes=a,e;case oT:case sm:return e=s|32,e=ei(30,n,t,e),e.elementType=sm,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ds:r=10;break t;case cx:r=9;break t;case cg:r=11;break t;case ug:r=14;break t;case da:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=ei(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function or(e,t,n,i){return e=ei(7,e,i,t),e.lanes=n,e}function Lp(e,t,n){return e=ei(6,e,null,t),e.lanes=n,e}function qx(e){var t=ei(18,null,null,0);return t.stateNode=e,t}function Op(e,t,n){return t=ei(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var X_=new WeakMap;function Ii(e,t){if(typeof e=="object"&&e!==null){var n=X_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:M_(t)},X_.set(e,t),t)}return{value:e,source:t,stack:M_(t)}}var ho=[],fo=0,Sh=null,uc=0,Ui=[],Li=0,Ua=null,ms=1,gs="";function Ls(e,t){ho[fo++]=uc,ho[fo++]=Sh,Sh=e,uc=t}function Yx(e,t,n){Ui[Li++]=ms,Ui[Li++]=gs,Ui[Li++]=Ua,Ua=e;var i=ms;e=gs;var s=32-yi(i)-1;i&=~(1<<s),n+=1;var a=32-yi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,ms=1<<32-yi(t)+s|n<<s|i,gs=a+e}else ms=1<<a|n<<s|i,gs=e}function Kh(e){e.return!==null&&(Ls(e,1),Yx(e,1,0))}function bg(e){for(;e===Sh;)Sh=ho[--fo],ho[fo]=null,uc=ho[--fo],ho[fo]=null;for(;e===Ua;)Ua=Ui[--Li],Ui[Li]=null,gs=Ui[--Li],Ui[Li]=null,ms=Ui[--Li],Ui[Li]=null}function Zx(e,t){Ui[Li++]=ms,Ui[Li++]=gs,Ui[Li++]=Ua,ms=t.id,gs=t.overflow,Ua=e}var un=null,Ne=null,te=!1,ba=null,Pi=!1,vm=Error(j(519));function La(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hc(Ii(t,e)),vm}function W_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[vn]=e,t[si]=i,n){case"dialog":ee("cancel",t),ee("close",t);break;case"iframe":case"object":case"embed":ee("load",t);break;case"video":case"audio":for(n=0;n<mc.length;n++)ee(mc[n],t);break;case"source":ee("error",t);break;case"img":case"image":case"link":ee("error",t),ee("load",t);break;case"details":ee("toggle",t);break;case"input":ee("invalid",t),Ex(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ee("invalid",t);break;case"textarea":ee("invalid",t),Ax(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||DS(t.textContent,n)?(i.popover!=null&&(ee("beforetoggle",t),ee("toggle",t)),i.onScroll!=null&&ee("scroll",t),i.onScrollEnd!=null&&ee("scrollend",t),i.onClick!=null&&(t.onclick=ps),t=!0):t=!1,t||La(e,!0)}function Mh(e){for(un=e.return;un;)switch(un.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:un=un.return}}function Qr(e){if(e!==un)return!1;if(!te)return Mh(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||eg(e.type,e.memoizedProps)),n=!n),n&&Ne&&La(e),Mh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Ne=Vy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Ne=Vy(e)}else t===27?(t=Ne,Ba(e.type)?(e=ag,ag=null,Ne=e):Ne=t):Ne=un?zi(e.stateNode.nextSibling):null;return!0}function hr(){Ne=un=null,te=!1}function Ip(){var e=ba;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),ba=null),e}function hc(e){ba===null?ba=[e]:ba.push(e)}var _m=xs(null),br=null,Os=null;function _a(e,t,n){Ue(_m,t._currentValue),t._currentValue=n}function Ps(e){e._currentValue=_m.current,yn(_m)}function th(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ym(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),th(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(j(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),th(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),th(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function fr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=s.type;Si(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===ph.current){if(r=s.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}s=s.return}return e!==null&&ym(t,e,n,i),t.flags|=262144,e!==null}function bh(e){for(e=e.firstContext;e!==null;){if(!Si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dr(e){br=e,Os=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _n(e){return Jx(br,e)}function Pu(e,t){return br===null&&dr(e),Jx(e,t)}function Jx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Os===null){if(e===null)throw Error(j(308));Os=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Os=Os.next=t;return n}var SA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},MA=nn.unstable_scheduleCallback,bA=nn.unstable_NormalPriority,Ke={$$typeof:ds,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eg(){return{controller:new SA,data:new Map,refCount:0}}function Rc(e){e.refCount--,e.refCount===0&&MA(bA,function(){e.controller.abort()})}function q_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Wl=null;function EA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Kl=null,xm=0,pr=0,_o=null;function TA(e,t){if(Kl===null){var n=Kl=[];xm=0,pr=jg(),_o={status:"pending",value:void 0,then:function(i){n.push(i)}}}return xm++,t.then(Y_,Y_),t}function Y_(){if(--xm===0&&(Wl=null,Kl!==null)){_o!==null&&(_o.status="fulfilled");var e=Kl;Kl=null,pr=0,_o=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function AA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Z_=Vt.S;Vt.S=function(e,t){if(dS=vi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&TA(e,t),Wl!==null)for(var n=Uo;n!==null;)q_(n,Wl),n=n.next;if(n=e.types,n!==null){for(var i=Uo;i!==null;)q_(i,n),i=i.next;if(pr!==0){i=Wl,i===null&&(i=Wl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Z_!==null&&Z_(e,t)};var lr=xs(null);function Tg(){var e=lr.current;return e!==null?e:Ae.pooledCache}function eh(e,t){t===null?Ue(lr,lr.current):Ue(lr,t.pool)}function Kx(){var e=Tg();return e===null?null:{parent:Ke._currentValue,pool:e}}var Ho=Error(j(460)),Ag=Error(j(474)),Qh=Error(j(542)),Eh={then:function(){}};function J_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ps,ps),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Q_(e),e===void 0&&!("reason"in t)?Error(j(600)):e;default:if(typeof t.status=="string")t.then(ps,ps);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Q_(e),e}throw cr=t,Ho}}function nr(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(cr=n,Ho):n}}var cr=null;function K_(){if(cr===null)throw Error(j(459));var e=cr;return cr=null,e}function Q_(e){if(e===Ho||e===Qh)throw Error(j(483))}var yo=null,fc=0;function zu(e){var t=fc;return fc+=1,yo===null&&(yo=[]),Qx(yo,e,t)}function ua(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bu(e,t){throw t.$$typeof===rT?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jx(e){function t(u,v){if(e){var y=u.deletions;y===null?(u.deletions=[v],u.flags|=16):y.push(v)}}function n(u,v){if(!e)return null;for(;v!==null;)t(u,v),v=v.sibling;return null}function i(u){for(var v=new Map;u!==null;)u.key===null?v.set(u.index,u):v.set(u.key,u),u=u.sibling;return v}function s(u,v){return u=Is(u,v),u.index=0,u.sibling=null,u}function a(u,v,y){return u.index=y,e?(y=u.alternate,y!==null?(y=y.index,y<v?(u.flags|=2,v):y):(u.flags|=134217730,v)):(u.flags|=1048576,v)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,v,y,_){return v===null||v.tag!==6?(v=Lp(y,u.mode,_),v.return=u,v):(v=s(v,y),v.return=u,v)}function l(u,v,y,_){var T=y.type;return T===io?(u=h(u,v,y.props.children,_,y.key),ua(u,y),u):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===da&&nr(T)===v.type)?(v=s(v,y.props),ua(v,y),v.return=u,v):(v=$u(y.type,y.key,y.props,null,u.mode,_),ua(v,y),v.return=u,v)}function c(u,v,y,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Op(y,u.mode,_),v.return=u,v):(v=s(v,y.children||[]),v.return=u,v)}function h(u,v,y,_,T){return v===null||v.tag!==7?(v=or(y,u.mode,_,T),v.return=u,v):(v=s(v,y),v.return=u,v)}function d(u,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Lp(""+v,u.mode,y),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ru:return y=$u(v.type,v.key,v.props,null,u.mode,y),ua(y,v),y.return=u,y;case Gl:return v=Op(v,u.mode,y),v.return=u,v;case da:return v=nr(v),d(u,v,y)}if(kl(v)||Pl(v))return v=or(v,u.mode,y,null),v.return=u,v;if(typeof v.then=="function")return d(u,zu(v),y);if(v.$$typeof===ds)return d(u,Pu(u,v),y);Bu(u,v)}return null}function f(u,v,y,_){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return T!==null?null:o(u,v,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ru:return y.key===T?l(u,v,y,_):null;case Gl:return y.key===T?c(u,v,y,_):null;case da:return y=nr(y),f(u,v,y,_)}if(kl(y)||Pl(y))return T!==null?null:h(u,v,y,_,null);if(typeof y.then=="function")return f(u,v,zu(y),_);if(y.$$typeof===ds)return f(u,v,Pu(u,y),_);Bu(u,y)}return null}function p(u,v,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return u=u.get(y)||null,o(v,u,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ru:return u=u.get(_.key===null?y:_.key)||null,l(v,u,_,T);case Gl:return u=u.get(_.key===null?y:_.key)||null,c(v,u,_,T);case da:return _=nr(_),p(u,v,y,_,T)}if(kl(_)||Pl(_))return u=u.get(y)||null,h(v,u,_,T,null);if(typeof _.then=="function")return p(u,v,y,zu(_),T);if(_.$$typeof===ds)return p(u,v,y,Pu(v,_),T);Bu(v,_)}return null}function g(u,v,y,_){for(var T=null,R=null,w=v,N=v=0,E=null;w!==null&&N<y.length;N++){w.index>N?(E=w,w=null):E=w.sibling;var M=f(u,w,y[N],_);if(M===null){w===null&&(w=E);break}e&&w&&M.alternate===null&&t(u,w),v=a(M,v,N),R===null?T=M:R.sibling=M,R=M,w=E}if(N===y.length)return n(u,w),te&&Ls(u,N),T;if(w===null){for(;N<y.length;N++)w=d(u,y[N],_),w!==null&&(v=a(w,v,N),R===null?T=w:R.sibling=w,R=w);return te&&Ls(u,N),T}for(w=i(w);N<y.length;N++)E=p(w,u,N,y[N],_),E!==null&&(e&&(M=E.alternate,M!==null&&w.delete(M.key===null?N:M.key)),v=a(E,v,N),R===null?T=E:R.sibling=E,R=E);return e&&w.forEach(function(U){return t(u,U)}),te&&Ls(u,N),T}function x(u,v,y,_){if(y==null)throw Error(j(151));for(var T=null,R=null,w=v,N=v=0,E=null,M=y.next();w!==null&&!M.done;N++,M=y.next()){w.index>N?(E=w,w=null):E=w.sibling;var U=f(u,w,M.value,_);if(U===null){w===null&&(w=E);break}e&&w&&U.alternate===null&&t(u,w),v=a(U,v,N),R===null?T=U:R.sibling=U,R=U,w=E}if(M.done)return n(u,w),te&&Ls(u,N),T;if(w===null){for(;!M.done;N++,M=y.next())M=d(u,M.value,_),M!==null&&(v=a(M,v,N),R===null?T=M:R.sibling=M,R=M);return te&&Ls(u,N),T}for(w=i(w);!M.done;N++,M=y.next())M=p(w,u,N,M.value,_),M!==null&&(e&&(E=M.alternate,E!==null&&w.delete(E.key===null?N:E.key)),v=a(M,v,N),R===null?T=M:R.sibling=M,R=M);return e&&w.forEach(function(H){return t(u,H)}),te&&Ls(u,N),T}function m(u,v,y,_){if(typeof y=="object"&&y!==null&&y.type===io&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ru:t:{for(var T=y.key;v!==null;){if(v.key===T){if(T=y.type,T===io){if(v.tag===7){n(u,v.sibling),_=s(v,y.props.children),ua(_,y),_.return=u,u=_;break t}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===da&&nr(T)===v.type){n(u,v.sibling),_=s(v,y.props),ua(_,y),_.return=u,u=_;break t}n(u,v);break}else t(u,v);v=v.sibling}y.type===io?(_=or(y.props.children,u.mode,_,y.key),ua(_,y),_.return=u,u=_):(_=$u(y.type,y.key,y.props,null,u.mode,_),ua(_,y),_.return=u,u=_)}return r(u);case Gl:t:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(u,v.sibling),_=s(v,y.children||[]),_.return=u,u=_;break t}else{n(u,v);break}else t(u,v);v=v.sibling}_=Op(y,u.mode,_),_.return=u,u=_}return r(u);case da:return y=nr(y),m(u,v,y,_)}if(kl(y))return g(u,v,y,_);if(Pl(y)){if(T=Pl(y),typeof T!="function")throw Error(j(150));return y=T.call(y),x(u,v,y,_)}if(typeof y.then=="function")return m(u,v,zu(y),_);if(y.$$typeof===ds)return m(u,v,Pu(u,y),_);Bu(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(n(u,v.sibling),_=s(v,y),_.return=u,u=_):(n(u,v),_=Lp(y,u.mode,_),_.return=u,u=_),r(u)):n(u,v)}return function(u,v,y,_){try{fc=0;var T=m(u,v,y,_);return yo=null,T}catch(w){if(w===Ho||w===Qh)throw w;var R=ei(29,w,null,u.mode);return R.lanes=_,R.return=u,R}finally{}}}var mr=jx(!0),$x=jx(!1),pa=!1;function wg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ue&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=xh(e),Xx(e,null,n),t}return Jh(e,i,t,n),xh(e)}function Ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gx(e,n)}}function Pp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Mm=!1;function jl(){if(Mm){var e=_o;if(e!==null)throw e}}function $l(e,t,n,i){Mm=!1;var s=e.updateQueue;pa=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(ae&f)===f:(i&f)===f){f!==0&&f===pr&&(Mm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,f);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break t;d=we({},d,f);break t;case 2:pa=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Pa|=r,e.lanes=r,e.memoizedState=d}}function t1(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function e1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)t1(n[e],t)}var Oa=xs(null),Th=xs(0);function j_(e,t){e=Gs,Ue(Th,e),Ue(Oa,t),Gs=e|t.baseLanes}function bm(){Ue(Th,Gs),Ue(Oa,Oa.current)}function Rg(){Gs=Th.current,yn(Oa),yn(Th)}var Mn=xs(null),Nn=null;function Aa(e){var t=e.alternate;Ue(xn,xn.current&1),Ue(Mn,e),Nn===null&&(t===null||Oa.current!==null||t.memoizedState!==null)&&(Nn=e)}function Em(e){Ue(xn,xn.current),Ue(Mn,e),Nn===null&&(Nn=e)}function n1(e){e.tag===22?(Ue(xn,xn.current),Ue(Mn,e),Nn===null&&(Nn=e)):wa()}function wa(){Ue(xn,xn.current),Ue(Mn,Mn.current)}function pi(e){yn(Mn),Nn===e&&(Nn=null),yn(xn)}var xn=xs(0);function dc(e,t){Ue(Mn,Mn.current),Ue(xn,t)}function Cg(e){yn(xn),yn(Mn),Nn===e&&(Nn=null)}function Ah(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sg(n)||n0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fs=0,Zt=null,Ee=null,Je=null,wh=!1,xo=!1,gr=!1,Rh=0,pc=0,So=null,wA=0;function Xe(){throw Error(j(321))}function Dg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Si(e[n],t[n]))return!1;return!0}function Ng(e,t,n,i,s,a){return Fs=a,Zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vt.H=e===null||e.memoizedState===null?L1:O1,gr=!1,a=n(i,s),gr=!1,xo&&(a=s1(t,n,i,s)),i1(e),a}function i1(e){Vt.H=Ch;var t=Ee!==null&&Ee.next!==null;if(Fs=0,Je=Ee=Zt=null,wh=!1,pc=0,So=null,t)throw Error(j(300));e===null||Qe||(e=e.dependencies,e!==null&&bh(e)&&(Qe=!0))}function s1(e,t,n,i){Zt=e;var s=0;do{if(xo&&(So=null),pc=0,xo=!1,25<=s)throw Error(j(301));if(s+=1,Je=Ee=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Vt.H=IA,a=t(n,i)}while(xo);return a}function RA(){var e=Vt.H,t=e.useState()[0];return t=typeof t.then=="function"?Cc(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(Zt.flags|=1024),t}function Ug(){var e=Rh!==0;return Rh=0,e}function Lg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Og(e){if(wh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wh=!1}Fs=0,Je=Ee=Zt=null,xo=!1,pc=Rh=0,So=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Zt.memoizedState=Je=e:Je=Je.next=e,Je}function qe(){if(Ee===null){var e=Zt.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Je===null?Zt.memoizedState:Je.next;if(t!==null)Je=t,Ee=e;else{if(e===null)throw Zt.alternate===null?Error(j(467)):Error(j(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Je===null?Zt.memoizedState=Je=e:Je=Je.next=e}return Je}function jh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cc(e){var t=pc;return pc+=1,So===null&&(So=[]),e=Qx(So,e,t),t=Zt,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,Vt.H=t===null||t.memoizedState===null?L1:O1),e}function $h(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cc(e);if(e.$$typeof===cT)return;if(e.$$typeof===ds)return _n(e)}throw Error(j(438,String(e)))}function Ig(e){var t=null,n=Zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=jh(),Zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=lT;return t.index++,n}function Hs(e,t){return typeof t=="function"?t(e):t}function nh(e){var t=qe();return Pg(t,Ee,e)}function Pg(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ae&d)===d:(Fs&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===pr&&(h=!0);else if((Fs&f)===f){c=c.next,f===pr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Zt.lanes|=f,Pa|=f;d=c.action,gr&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Zt.lanes|=d,Pa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Si(a,e.memoizedState)&&(Qe=!0,h&&(n=_o,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function zp(e){var t=qe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Si(a,t.memoizedState)||(Qe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function a1(e,t,n){var i=Zt,s=qe(),a=te;if(a){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!Si((Ee||s).memoizedState,n);if(r&&(s.memoizedState=n,Qe=!0),s=s.queue,zg(l1.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Je!==null&&(Je.memoizedState.tag&1)!==0,Ro(e?9:8,{destroy:void 0},o1.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ae===null)throw Error(j(349));a||(Fs&127)!==0||r1(i,t,n)}return n}function r1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Zt.updateQueue,t===null?(t=jh(),Zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function o1(e,t,n,i){t.value=n,t.getSnapshot=i,c1(t)&&u1(e)}function l1(e,t,n){return n(function(){c1(t)&&u1(e)})}function c1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Si(e,n)}catch{return!0}}function u1(e){var t=Mr(e,2);t!==null&&ni(t,e,2)}function Tm(e){var t=Xn();if(typeof e=="function"){var n=e;if(e=n(),gr){ga(!0);try{n()}finally{ga(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:e},t}function h1(e,t,n,i){return e.baseState=n,Pg(e,Ee,typeof i=="function"?i:Hs)}function CA(e,t,n,i,s){if(ef(e))throw Error(j(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Vt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,f1(t,a)):(a.next=n.next,t.pending=n.next=a)}}function f1(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Vt.T,r={};r.types=a!==null?a.types:null,Vt.T=r;try{var o=n(s,i),l=Vt.S;l!==null&&l(r,o),$_(e,t,o)}catch(c){Am(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Vt.T=a}}else try{a=n(s,i),$_(e,t,a)}catch(c){Am(e,t,c)}}function $_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ty(e,t,i)},function(i){return Am(e,t,i)}):ty(e,t,n)}function ty(e,t,n){t.status="fulfilled",t.value=n,d1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,f1(e,n)))}function Am(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,d1(t),t=t.next;while(t!==i)}e.action=null}function d1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function p1(e,t){return t}function ey(e,t){if(te){var n=Ae.formState;if(n!==null){t:{var i=Zt;if(te){if(Ne){e:{for(var s=Ne,a=Pi;s.nodeType!==8;){if(!a){s=null;break e}if(s=zi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ne=zi(s.nextSibling),i=s.data==="F!";break t}}La(i)}i=!1}i&&(t=n[0])}}return n=Xn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:p1,lastRenderedState:t},n.queue=i,n=D1.bind(null,Zt,i),i.dispatch=n,i=Tm(!1),a=Vg.bind(null,Zt,!1,i.queue),i=Xn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=CA.bind(null,Zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function ny(e){var t=qe();return m1(t,Ee,e)}function m1(e,t,n){if(t=Pg(e,t,p1)[0],e=nh(Hs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Cc(t)}catch(r){throw r===Ho?Qh:r}else i=t;t=qe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Zt.flags|=2048,Ro(9,{destroy:void 0},DA.bind(null,s,n),null)),[i,a,e]}function DA(e,t){e.action=t}function iy(e){var t=qe(),n=Ee;if(n!==null)return m1(t,n,e);qe(),t=t.memoizedState,n=qe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ro(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Zt.updateQueue,t===null&&(t=jh(),Zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function g1(){return qe().memoizedState}function ih(e,t,n,i){var s=Xn();Zt.flags|=e,s.memoizedState=Ro(1|t,{destroy:void 0},n,i===void 0?null:i)}function tf(e,t,n,i){var s=qe();i=i===void 0?null:i;var a=s.memoizedState.inst;Ee!==null&&i!==null&&Dg(i,Ee.memoizedState.deps)?s.memoizedState=Ro(t,a,n,i):(Zt.flags|=e,s.memoizedState=Ro(1|t,a,n,i))}function sy(e,t){ih(8390656,8,e,t)}function zg(e,t){tf(2048,8,e,t)}function NA(e){Zt.flags|=4;var t=Zt.updateQueue;if(t===null)t=jh(),Zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function v1(e){var t=qe().memoizedState;return NA({ref:t,nextImpl:e}),function(){if((ue&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function _1(e,t){return tf(4,2,e,t)}function y1(e,t){return tf(4,4,e,t)}function x1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function S1(e,t,n){n=n!=null?n.concat([e]):null,tf(4,4,x1.bind(null,t,e),n)}function Bg(){}function M1(e,t){var n=qe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Dg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function b1(e,t){var n=qe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Dg(t,i[1]))return i[0];if(i=e(),gr){ga(!0);try{e()}finally{ga(!1)}}return n.memoizedState=[i,t],i}function Fg(e,t,n){return n===void 0||(Fs&1073741824)!==0&&(ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=mS(),Zt.lanes|=e,Pa|=e,n)}function E1(e,t,n,i){return Si(n,t)?n:Oa.current!==null?(e=Fg(e,n,i),Si(e,t)||(Qe=!0),e):(Fs&106)===0||(Fs&1073741824)!==0&&(ae&261930)===0?(Qe=!0,e.memoizedState=n):(e=mS(),Zt.lanes|=e,Pa|=e,t)}function T1(e,t,n,i,s){var a=he.p;he.p=a!==0&&8>a?a:8;var r=Vt.T,o={};o.types=r!==null?r.types:null,Vt.T=o,Vg(e,!1,t,n);try{var l=s(),c=Vt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=AA(l,i);tc(e,t,h,xi(e))}else tc(e,t,i,xi(e))}catch(d){tc(e,t,{then:function(){},status:"rejected",reason:d},xi())}finally{he.p=a,r!==null&&o.types!==null&&(r.types=o.types),Vt.T=r}}function UA(){}function wm(e,t,n,i){if(e.tag!==5)throw Error(j(476));var s=A1(e).queue;T1(e,s,t,rr,n===null?UA:function(){return w1(e),n(i)})}function A1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:rr,baseState:rr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:rr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function w1(e){var t=A1(e);t.next===null&&(t=e.alternate.memoizedState),tc(e,t.next.queue,{},xi())}function Hg(){return _n(Io)}function R1(){return qe().memoizedState}function C1(){return qe().memoizedState}function LA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=xi();e=Ea(n);var i=Ta(t,e,n);i!==null&&(ni(i,t,n),Ql(i,t,n)),t={cache:Eg()},e.payload=t;return}t=t.return}}function OA(e,t,n){var i=xi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ef(e)?N1(t,n):(n=Sg(e,t,n,i),n!==null&&(ni(n,e,i),U1(n,t,i)))}function D1(e,t,n){var i=xi();tc(e,t,n,i)}function tc(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ef(e))N1(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Si(o,r))return Jh(e,t,s,0),Ae===null&&Zh(),!1}catch{}finally{}if(n=Sg(e,t,s,i),n!==null)return ni(n,e,i),U1(n,t,i),!0}return!1}function Vg(e,t,n,i){if(i={lane:2,revertLane:jg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ef(e)){if(t)throw Error(j(479))}else t=Sg(e,n,i,2),t!==null&&ni(t,e,2)}function ef(e){var t=e.alternate;return e===Zt||t!==null&&t===Zt}function N1(e,t){xo=wh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function U1(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gx(e,n)}}var Ch={readContext:_n,use:$h,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe,useEffectEvent:Xe},L1={readContext:_n,use:$h,useCallback:function(e,t){return Xn().memoizedState=[e,t===void 0?null:t],e},useContext:_n,useEffect:sy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ih(4194308,4,x1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ih(4194308,4,e,t)},useInsertionEffect:function(e,t){ih(4,2,e,t)},useMemo:function(e,t){var n=Xn();t=t===void 0?null:t;var i=e();if(gr){ga(!0);try{e()}finally{ga(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Xn();if(n!==void 0){var s=n(t);if(gr){ga(!0);try{n(t)}finally{ga(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=OA.bind(null,Zt,e),[i.memoizedState,e]},useRef:function(e){var t=Xn();return e={current:e},t.memoizedState=e},useState:function(e){e=Tm(e);var t=e.queue,n=D1.bind(null,Zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Bg,useDeferredValue:function(e,t){var n=Xn();return Fg(n,e,t)},useTransition:function(){var e=Tm(!1);return e=T1.bind(null,Zt,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Zt,s=Xn();if(te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Ae===null)throw Error(j(349));(ae&127)!==0||r1(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,sy(l1.bind(null,i,a,e),[e]),i.flags|=2048,Ro(9,{destroy:void 0},o1.bind(null,i,a,n,t),null),n},useId:function(){var e=Xn(),t=Ae.identifierPrefix;if(te){var n=gs,i=ms;n=(i&~(1<<32-yi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Rh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=wA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hg,useFormState:ey,useActionState:ey,useOptimistic:function(e){var t=Xn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vg.bind(null,Zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ig,useCacheRefresh:function(){return Xn().memoizedState=LA.bind(null,Zt)},useEffectEvent:function(e){var t=Xn(),n={impl:e};return t.memoizedState=n,function(){if((ue&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},O1={readContext:_n,use:$h,useCallback:M1,useContext:_n,useEffect:zg,useImperativeHandle:S1,useInsertionEffect:_1,useLayoutEffect:y1,useMemo:b1,useReducer:nh,useRef:g1,useState:function(){return nh(Hs)},useDebugValue:Bg,useDeferredValue:function(e,t){var n=qe();return E1(n,Ee.memoizedState,e,t)},useTransition:function(){var e=nh(Hs)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Cc(e),t]},useSyncExternalStore:a1,useId:R1,useHostTransitionStatus:Hg,useFormState:ny,useActionState:ny,useOptimistic:function(e,t){var n=qe();return h1(n,Ee,e,t)},useMemoCache:Ig,useCacheRefresh:C1,useEffectEvent:v1},IA={readContext:_n,use:$h,useCallback:M1,useContext:_n,useEffect:zg,useImperativeHandle:S1,useInsertionEffect:_1,useLayoutEffect:y1,useMemo:b1,useReducer:zp,useRef:g1,useState:function(){return zp(Hs)},useDebugValue:Bg,useDeferredValue:function(e,t){var n=qe();return Ee===null?Fg(n,e,t):E1(n,Ee.memoizedState,e,t)},useTransition:function(){var e=zp(Hs)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Cc(e),t]},useSyncExternalStore:a1,useId:R1,useHostTransitionStatus:Hg,useFormState:iy,useActionState:iy,useOptimistic:function(e,t){var n=qe();return Ee!==null?h1(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ig,useCacheRefresh:C1,useEffectEvent:v1};function Bp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=xi(),s=Ea(i);s.payload=t,n!=null&&(s.callback=n),t=Ta(e,s,i),t!==null&&(ni(t,e,i),Ql(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=xi(),s=Ea(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ta(e,s,i),t!==null&&(ni(t,e,i),Ql(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xi(),i=Ea(n);i.tag=2,t!=null&&(i.callback=t),t=Ta(e,i,n),t!==null&&(ni(t,e,n),Ql(t,e,n))}};function ay(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!cc(n,i)||!cc(s,a):!0}function ry(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Rm.enqueueReplaceState(t,t.state,null)}function vr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=we({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function I1(e){yh(e)}function P1(e){console.error(e)}function z1(e){yh(e)}function Dh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function oy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Cm(e,t,n){return n=Ea(n),n.tag=3,n.payload={element:null},n.callback=function(){Dh(e,t)},n}function B1(e){return e=Ea(e),e.tag=3,e}function F1(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){oy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){oy(t,n,i),typeof s!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function PA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&fr(t,n,s,!0),n=Mn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Nn===null?Bh():n.alternate===null&&We===0&&(We=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Eh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Wp(e,i,s)),!1;case 22:return n.flags|=65536,i===Eh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Wp(e,i,s)),!1}throw Error(j(435,n.tag))}return Wp(e,i,s),Bh(),!1}if(te)return t=Mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==vm&&(e=Error(j(422),{cause:i}),hc(Ii(e,n)))):(i!==vm&&(t=Error(j(423),{cause:i}),hc(Ii(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ii(i,n),s=Cm(e.stateNode,i,s),Pp(e,s),We!==4&&(We=2)),!1;var a=Error(j(520),{cause:i});if(a=Ii(a,n),sc===null?sc=[a]:sc.push(a),We!==4&&(We=2),t===null)return!0;i=Ii(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Cm(n.stateNode,i,e),Pp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ra===null||!Ra.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=B1(s),F1(s,e,n,i),Pp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Gg=Error(j(461)),Qe=!1;function tn(e,t,n,i){t.child=e===null?$x(t,null,n,i):mr(t,e.child,n,i)}function ly(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return dr(t),i=Ng(e,t,n,r,a,s),o=Ug(),e!==null&&!Qe?(Lg(e,t,s),Vs(e,t,s)):(te&&o&&Kh(t),t.flags|=1,tn(e,t,i,s),t.child)}function cy(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Mg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,H1(e,t,a,i,s)):(e=$u(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Xg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:cc,n(r,i)&&e.ref===t.ref)return Vs(e,t,s)}return t.flags|=1,e=Is(a,i),e.ref=t.ref,e.return=t,t.child=e}function H1(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(cc(a,i)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=i=a,Xg(e,s))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Vs(e,t,s)}return Dm(e,t,n,i,s)}function V1(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return uy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&eh(t,a!==null?a.cachePool:null),a!==null?j_(t,a):bm(),n1(t);else return i=t.lanes=536870912,uy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(eh(t,a.cachePool),j_(t,a),wa(),t.memoizedState=null):(e!==null&&eh(t,null),bm(),wa());return tn(e,t,s,n),t.child}function ec(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uy(e,t,n,i,s){var a=Tg();return a=a===null?null:{parent:Ke._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&eh(t,null),bm(),n1(t),e!==null&&fr(e,t,i,!0),t.childLanes=s,null}function sh(e,t){return t=nf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hy(e,t,n){return mr(t,e.child,null,n),e=sh(t,t.pendingProps),e.flags|=2,pi(t),t.memoizedState=null,e}function zA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(i.mode==="hidden")return e=sh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},ec(null,e);if(Em(t),(e=Ne)?(e=VS(e,Pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:ms,overflow:gs}:null,retryLane:536870912,hydrationErrors:null},n=qx(e),n.return=t,t.child=n,un=t,Ne=null)):e=null,e===null)throw La(t);return t.lanes=536870912,null}return sh(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Em(t),s)if(t.flags&256)t.flags&=-257,t=hy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(Qe||fr(e,t,n,!1),s=(n&e.childLanes)!==0,Qe||s){if(Oa.current===null){if(i=Ae,i!==null&&(r=vx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Mr(e,r),ni(i,e,r),Gg;Bh()}t=hy(e,t,n)}else e=a.treeContext,Ne=zi(r.nextSibling),un=t,te=!0,ba=null,Pi=!1,e!==null&&Zx(t,e),t=sh(t,i),t.flags|=134221824;return t}return e=Is(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function $r(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Dm(e,t,n,i,s){return dr(t),n=Ng(e,t,n,i,void 0,s),i=Ug(),e!==null&&!Qe?(Lg(e,t,s),Vs(e,t,s)):(te&&i&&Kh(t),t.flags|=1,tn(e,t,n,s),t.child)}function fy(e,t,n,i,s,a){return dr(t),t.updateQueue=null,n=s1(t,i,n,s),i1(e),i=Ug(),e!==null&&!Qe?(Lg(e,t,a),Vs(e,t,a)):(te&&i&&Kh(t),t.flags|=1,tn(e,t,n,a),t.child)}function dy(e,t,n,i,s){if(dr(t),t.stateNode===null){var a=uo,r=n.contextType;typeof r=="object"&&r!==null&&(a=_n(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},wg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?_n(r):uo,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Bp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Rm.enqueueReplaceState(a,a.state,null),$l(t,i,a,s),jl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=vr(n,o);a.props=l;var c=a.context,h=n.contextType;r=uo,typeof h=="object"&&h!==null&&(r=_n(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&ry(t,a,i,r),pa=!1;var f=t.memoizedState;a.state=f,$l(t,i,a,s),jl(),c=t.memoizedState,o||f!==c||pa?(typeof d=="function"&&(Bp(t,n,d,i),c=t.memoizedState),(l=pa||ay(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Sm(e,t),r=t.memoizedProps,h=vr(n,r),a.props=h,d=t.pendingProps,f=a.context,c=n.contextType,l=uo,typeof c=="object"&&c!==null&&(l=_n(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&ry(t,a,i,l),pa=!1,f=t.memoizedState,a.state=f,$l(t,i,a,s),jl();var p=t.memoizedState;r!==d||f!==p||pa||e!==null&&e.dependencies!==null&&bh(e.dependencies)?(typeof o=="function"&&(Bp(t,n,o,i),p=t.memoizedState),(h=pa||ay(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&bh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,$r(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=mr(t,e.child,null,s),t.child=mr(t,null,n,s)):tn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Vs(e,t,s),e}function py(e,t,n,i){return hr(),t.flags|=256,tn(e,t,n,i),t.child}var Nm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Um(e){return{baseLanes:e,cachePool:Kx()}}function Lm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gi),e}function G1(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(s?Aa(t):wa(),(e=Ne)?(e=VS(e,Pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:ms,overflow:gs}:null,retryLane:536870912,hydrationErrors:null},n=qx(e),n.return=t,t.child=n,un=t,Ne=null)):e=null,e===null)throw La(t);return n0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(wa(),s=t.mode,a=nf({mode:"hidden",children:a},s),i=or(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Um(n),i.childLanes=Lm(e,r,n),t.memoizedState=Nm,ec(null,i)):(Aa(t),kg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return BA(e,t,a,r,i,l,o,n)}return s?(wa(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Is(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Is(l,s):(s=or(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,ec(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Um(n):(a=s.cachePool,a!==null?(o=Ke._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Kx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Lm(e,r,n),t.memoizedState=Nm,ec(e.child,i)):(Aa(t),n=e.child,e=n.sibling,n=Is(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function kg(e,t){return t=nf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function nf(e,t){return e=ei(22,e,null,t),e.lanes=0,e}function Fu(e,t,n){return mr(t,e.child,null,n),e=kg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function BA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Aa(t),t.flags&=-257,Fu(e,t,o)):t.memoizedState!==null?(wa(),t.child=e.child,t.flags|=128,null):(wa(),a=s.fallback,r=t.mode,s=nf({mode:"visible",children:s.children},r),a=or(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,mr(t,e.child,null,o),s=t.child,s.memoizedState=Um(o),s.childLanes=Lm(e,i,o),t.memoizedState=Nm,ec(null,s));if(Aa(t),n0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(j(419)),s.stack="",s.digest=i,hc({value:s,source:null,stack:null})),Fu(e,t,o)}if(Qe||fr(e,t,o,!1),i=(o&e.childLanes)!==0,Qe||i){if(Oa.current!==null)return Fu(e,t,o);if(i=Ae,i!==null&&(s=vx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Mr(e,s),ni(i,e,s),Gg;return sg(a)||Bh(),Fu(e,t,o)}return sg(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ne=zi(a.nextSibling),un=t,te=!0,ba=null,Pi=!1,e!==null&&Zx(t,e),t=kg(t,s.children),t.flags|=134221824,t)}function my(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),th(e.return,t,n)}function gy(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ah(n)===null&&(t=e),e=e.sibling}return t}function Hu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Fp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Om(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=xn.current;if(t.flags&128)return dc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,dc(t,r),s==="backwards"&&e!==null?(Fp(e),tn(e,t,i,n),Fp(e)):tn(e,t,i,n),i=te?uc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&my(e,n,t);else if(e.tag===19)my(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=gy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Fp(t)),Hu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ah(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Hu(t,!0,n,null,a,i);break;case"together":Hu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=gy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Hu(t,!1,s,n,a,i)}return t.child}function vy(e,t,n){var i=t.pendingProps;return _a(t,t.type,i.value),tn(e,t,i.children,n),t.child}function Vs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(fr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Is(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Is(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bh(e)))}function FA(e,t,n){switch(t.tag){case 3:mh(t,t.stateNode.containerInfo),_a(t,Ke,e.memoizedState.cache),hr();break;case 27:case 5:om(t);break;case 4:mh(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Em(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Aa(t),t.flags|=128,null;i=fr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?G1(e,t,n):(Aa(t),e=Vs(e,t,n),e!==null?e.sibling:null)}Aa(t);break;case 19:if(t.flags&128)return Om(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(fr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Om(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),dc(t,xn.current),i)break;return null;case 22:return t.lanes=0,V1(e,t,n,t.pendingProps);case 24:_a(t,Ke,e.memoizedState.cache)}return Vs(e,t,n)}function k1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Xg(e,n)&&(t.flags&128)===0)return Qe=!1,FA(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,te&&(t.flags&1048576)!==0&&Yx(t,uc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=nr(t.elementType),t.type=e,typeof e=="function")Mg(e)?(i=vr(e,i),t.tag=1,t=dy(null,t,e,i,n)):(t.tag=0,t=Dm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===cg){t.tag=11,t=ly(null,t,e,i,n);break t}else if(s===ug){t.tag=14,t=cy(null,t,e,i,n);break t}else if(s===ds){t.tag=10,t.type=e,t=vy(null,t,n);break t}}throw t=am(e)||e,Error(j(306,t,""))}}return t;case 0:return Dm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=vr(i,t.pendingProps),dy(e,t,i,s,n);case 3:t:{if(mh(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Sm(e,t),$l(t,i,null,n);var r=t.memoizedState;if(i=r.cache,_a(t,Ke,i),i!==a.cache&&ym(t,[Ke],n,!0),jl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=py(e,t,i,n);break t}else if(i!==s){s=Ii(Error(j(424)),t),hc(s),t=py(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=zi(e.firstChild),un=t,te=!0,ba=null,Pi=!0,n=$x(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(hr(),i===s){t=Vs(e,t,n);break t}tn(e,t,i,n)}t=t.child}return t;case 26:return $r(e,t),e===null?(n=Xy(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(t.stateNode=US(t.type,t.pendingProps,Ma.current,t)):t.memoizedState=Xy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return om(t),e===null&&te&&(i=t.stateNode=GS(t.type,t.pendingProps,Ma.current),un=t,Pi=!0,s=Ne,Ba(t.type)?(ag=s,Ne=zi(i.firstChild)):Ne=s),tn(e,t,t.pendingProps.children,n),$r(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((s=i=Ne)&&(i=Nw(i,t.type,t.pendingProps,Pi),i!==null?(t.stateNode=i,un=t,Ne=zi(i.firstChild),Pi=!1,s=!0):s=!1),s||La(t)),om(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,eg(s,a)?i=null:r!==null&&eg(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Ng(e,t,RA,null,null,n),Io._currentValue=s),$r(e,t),tn(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Ne)&&(n=Uw(n,t.pendingProps,Pi),n!==null?(t.stateNode=n,un=t,Ne=null,e=!0):e=!1),e||La(t)),null;case 13:return G1(e,t,n);case 4:return mh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=mr(t,null,i,n):tn(e,t,i,n),t.child;case 11:return ly(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,$r(e,t),tn(e,t,i,n),t.child;case 8:return tn(e,t,t.pendingProps.children,n),t.child;case 12:return tn(e,t,t.pendingProps.children,n),t.child;case 10:return vy(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,dr(t),s=_n(s),i=i(s),t.flags|=1,tn(e,t,i,n),t.child;case 14:return cy(e,t,t.type,t.pendingProps,n);case 15:return H1(e,t,t.type,t.pendingProps,n);case 19:return Om(e,t,n);case 31:return zA(e,t,n);case 22:return V1(e,t,n,t.pendingProps);case 24:return dr(t),i=_n(Ke),e===null?(s=Tg(),s===null&&(s=Ae,a=Eg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},wg(t),_a(t,Ke,s)):((e.lanes&n)!==0&&(Sm(e,t),$l(t,null,null,n),jl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),_a(t,Ke,i)):(i=a.cache,_a(t,Ke,i),i!==s.cache&&ym(t,[Ke],n,!0))),tn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:te&&Kh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:$r(e,t),tn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function Us(e){e.flags|=4}function Hp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Yy(t,i):Yy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(_S())e.flags|=8192;else throw cr=Eh,Ag}else e.flags&=-16777217}function _y(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qS(t))if(_S())e.flags|=8192;else throw cr=Eh,Ag}function Vu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?px():536870912,e.lanes|=t,Co|=t)}function Bl(e,t){if(!te)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function HA(e,t,n){var i=t.pendingProps;switch(bg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ps(Ke),To(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Qr(t)?Us(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ip())),De(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Us(t),a!==null?(De(t),_y(t,a)):(De(t),Hp(t,s,null,i,n))):a?a!==e.memoizedState?(Us(t),De(t),_y(t,a)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Us(t),De(t),Hp(t,s,e,i,n)),null;case 27:if(gh(t),n=Ma.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Us(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return De(t),t.subtreeFlags&=-33554433,null}e=vs.current,Qr(t)?W_(t,e):(e=GS(s,i,n),t.stateNode=e,Us(t))}return De(t),t.subtreeFlags&=-33554433,null;case 5:if(gh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Us(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return De(t),t.subtreeFlags&=-33554433,null}if(a=vs.current,Qr(t))W_(t,a);else{var r=vc(Ma.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[vn]=t,a[si]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Sn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Us(t)}}return De(t),t.subtreeFlags&=-33554433,Hp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Us(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=Ma.current,Qr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=un,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[vn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||DS(e.nodeValue,n)),e||La(t,!0)}else e=vc(e).createTextNode(i),e[vn]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Qr(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[vn]=t}else hr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=Ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(pi(t),t):(pi(t),null);if((t.flags&128)!==0)throw Error(j(558))}return De(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Qr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[vn]=t}else hr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),s=!1}else s=Ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(pi(t),t):(pi(t),null)}return pi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vu(t,t.updateQueue),De(t),null);case 4:return To(),e===null&&$g(t.stateNode.containerInfo),t.flags|=67108864,De(t),null;case 10:return Ps(t.type),De(t),null;case 19:if(Cg(t),i=t.memoizedState,i===null)return De(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Bl(i,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Ah(e),a!==null){for(t.flags|=128,Bl(i,!1),e=a.updateQueue,t.updateQueue=e,Vu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wx(n,e),n=n.sibling;return dc(t,xn.current&1|2),te&&Ls(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&vi()>Ph&&(t.flags|=128,s=!0,Bl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Ah(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Vu(t,e),Bl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!te)return De(t),null}else 2*vi()-i.renderingStartTime>Ph&&n!==536870912&&(t.flags|=128,s=!0,Bl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=vi(),e.sibling=null,a=xn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||te?dc(t,a):(n=a,Ue(Mn,t),Ue(xn,n),Nn===null&&(Nn=t)),te&&Ls(t,i.treeForkCount),e}return De(t),null;case 22:case 23:return pi(t),Rg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&Vu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&yn(lr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ps(Ke),De(t),null;case 25:return null;case 30:return t.flags|=33554432,De(t),null}throw Error(j(156,t.tag))}function VA(e,t){switch(bg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ps(Ke),To(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gh(t),null;case 31:if(t.memoizedState!==null){if(pi(t),t.alternate===null)throw Error(j(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Cg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return To(),null;case 10:return Ps(t.type),null;case 22:case 23:return pi(t),Rg(),e!==null&&yn(lr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ps(Ke),null;case 25:return null;default:return null}}function X1(e,t){switch(bg(t),t.tag){case 3:Ps(Ke),To();break;case 26:case 27:case 5:gh(t);break;case 4:To();break;case 31:t.memoizedState!==null&&pi(t);break;case 13:pi(t);break;case 19:Cg(t);break;case 10:Ps(t.type);break;case 22:case 23:pi(t),Rg(),e!==null&&yn(lr);break;case 24:Ps(Ke)}}function Dc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ge(t,t.return,o)}}function Ia(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){ge(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){ge(t,t.return,h)}}function W1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{e1(t,n)}catch(i){ge(e,e.return,i)}}}function q1(e,t,n){n.props=vr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ge(e,t,i)}}function hs(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Bs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=PS(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new Mi(e);ii(e.child,!1,Cw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){ge(e,t,o)}}function gn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ge(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ge(e,t,s)}else n.current=null}function Nh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)HS(e.stateNode,t[n])}function yy(e){for(var t=e.return;t!==null&&(qg(t)&&HS(e.stateNode,t.stateNode),!Wg(t));)t=t.return}function nc(e){for(var t=e.return;t!==null&&(qg(t)&&Dw(e.stateNode,t.stateNode),!Wg(t));)t=t.return}function Wg(e){return e.tag===5||e.tag===3||e.tag===27}function qg(e){return e&&e.tag===7&&e.stateNode!==null}function Im(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ge(e,e.return,s)}}function Vp(e,t,n){try{var i=e.stateNode;hw(i,e.type,n,t),i[si]=t}catch(s){ge(e,e.return,s)}}function Y1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function Gp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Y1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ps)),Nh(e,i),ce=!0;else if(s!==4&&(s===27&&(Nh(e,i),i=null,Ba(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Pm(e,t,n,i),e=e.sibling;e!==null;)Pm(e,t,n,i),e=e.sibling}function Uh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Nh(e,i),ce=!0;else if(s!==4&&(s===27&&(Nh(e,i),i=null,Ba(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Uh(e,t,n,i),e=e.sibling;e!==null;)Uh(e,t,n,i),e=e.sibling}function Z1(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Sn(t,i,n),t[vn]=e,t[si]=n}catch(a){ge(e,e.return,a)}}var Lh=!1,mi=null;function xy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Lh=!0)}var fs=null;function Sy(){var e=fs;return fs=null,e}var ti=0;function Vo(e,t,n,i,s){return ti=0,J1(e.child,t,n,i,s)}function J1(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=ng(r);i.push(o),o.view&&(a=!0)}else a||ng(r).view&&(a=!0);Lh=!0,LS(r,ti===0?t:t+"_"+ti,n),ti++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||J1(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ys(e,t){for(;e!==null;)e.tag===5?OS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ys(e.child,t)),e=e.sibling}function ah(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ah(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(j(544));var n=t.name;t=Xs(t.default,t.share),t!=="none"&&(Vo(e,n,t,null,!1)||ys(e.child,!1))}e=e.sibling}}function zm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Bs(i,n),a=Xs(i.default,n.paired?i.share:i.enter);a!=="none"?Vo(e,s,a,null,!1)?(ah(e),n.paired||t||Do(e,i.onEnter)):ys(e.child,!1):ah(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)zm(e,t),e=e.sibling;else ah(e)}function Bm(e){if(mi!==null&&mi.size!==0){var t=mi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Xs(n.default,n.share);if(a!=="none"&&(Vo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Do(e,n.onShare)):ys(e.child,!1)),t.delete(i),t.size===0)break}}}Bm(e)}e=e.sibling}}}function Fm(e){if(e.tag===30){var t=e.memoizedProps,n=Bs(t,e.stateNode),i=mi!==null?mi.get(n):void 0,s=Xs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Vo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,mi.delete(n),Do(e,t.onShare)):Do(e,t.onExit):ys(e.child,!1)),mi!==null&&Bm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Fm(e),e=e.sibling;else mi!==null&&Bm(e)}function K1(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Bs(t,e.stateNode);t=Xs(t.default,t.update),e.flags&=-5,t!=="none"&&Vo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&K1(e);e=e.sibling}}function Hm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ys(e.child,!1))}Hm(e)}e=e.sibling}}function rh(e){if(e.tag===30)e.stateNode.paired=null,ys(e.child,!1),Hm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)rh(e),e=e.sibling;else Hm(e)}function Q1(e){for(e=e.child;e!==null;)e.tag===30?ys(e.child,!1):(e.subtreeFlags&33554432)!==0&&Q1(e),e=e.sibling}function Yg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&ti<a.length){var c=a[ti],h=ng(l);(c.view||h.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(h.clip)d=!0;else{d=c.rect;var f=h.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}d&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&LS(l,ti===0?n:n+"_"+ti,s),o&&(e.flags&4)!==0||(fs===null&&(fs=[]),fs.push(l,ti===0?i:i+"_"+ti,t.memoizedProps)),ti++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Yg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function j1(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Bs(n,i),a=Xs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(vw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;ti=0,s=Yg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Do(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&j1(e,t);e=e.sibling}}var on=!1,de=!1,ls=!1,kp=!1,My=typeof WeakSet=="function"?WeakSet:Set,ln=null,cs=!1,ql=!1,Oh=!1,Vm=!1;function GA(e,t,n){if(e=e.containerInfo,$m=Po,e=zx(e),yg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,d=0,f=e,p=null;e:for(;;){for(var g;f!==i||a!==0&&f.nodeType!==3||(l=o+a),f!==r||s!==0&&f.nodeType!==3||(c=o+s),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break e;if(p===i&&++h===a&&(l=o),p===r&&++d===s&&(c=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(tg={focusedElem:e,selectionRange:i},Po=!1,n=(n&335544064)===n,ln=t,t=n?9270:1024;ln!==null;){if(e=ln,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Fm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&xy(e),Gu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Fm(i),Gu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&xy(e),Gu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,ln=i):(n&&K1(e),Gu(n))}}mi=null}function Gu(e){for(;ln!==null;){var t=ln,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=vr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){ge(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)ig(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":ig(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Bs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Xs(s.default,s.update),s!=="none"&&Vo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(j(163))}if(i=t.sibling,i!==null){i.return=t.return,ln=i;break}ln=t.return}}function $1(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:us(e,n),i&4&&Dc(5,n);break;case 1:if(us(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ge(n,n.return,r)}else{var s=vr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ge(n,n.return,r)}}i&64&&W1(n),i&512&&hs(n,n.return);break;case 3:if(us(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{e1(e,t)}catch(r){ge(n,n.return,r)}}break;case 27:t===null&&i&4&&Z1(n);case 26:case 5:us(e,n),t===null&&i&4&&Im(n),i&512&&hs(n,n.return);break;case 12:us(e,n);break;case 31:us(e,n),i&4&&iS(e,n);break;case 13:us(e,n),i&4&&sS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=tw.bind(null,n),Lw(e,n))));break;case 22:if(i=n.memoizedState!==null||on,!i){var a=t!==null&&t.memoizedState!==null||de;t=on,s=de,on=i,(de=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Wi(e,n,i)):us(e,n),on=t,de=s}break;case 30:us(e,n),i&512&&hs(n,n.return);break;case 7:i&512&&hs(n,n.return);default:us(e,n)}}function Gm(e,t){for(e=e.child;e!==null;)tS(e,t),e=e.sibling}function tS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){ge(e,e.return,l)}km(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ce=!0}catch(l){ge(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?By(o,!0):By(e.stateNode,!1)}catch(l){ge(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Gm(e,t);break;default:Gm(e,t)}}function km(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:tS(n,i);break t;case 22:n.memoizedState===null&&km(n,i);break t;default:km(n,i)}}e=e.sibling}}function eS(e){var t=e.alternate;t!==null&&(e.alternate=null,eS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,jn=!1;function Xi(e,t,n){for(n=n.child;n!==null;)nS(e,t,n),n=n.sibling}function nS(e,t,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 26:de||gn(n,t),Xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!de&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:de||gn(n,t),nc(n);var i=Pe,s=jn;Ba(n.type)&&(Pe=n.stateNode,jn=!1),Xi(e,t,n),kS(n.stateNode,n.type,n.memoizedProps),Pe=i,jn=s;break;case 5:de||gn(n,t),nc(n);case 6:if(n.tag===6&&nc(n),i=Pe,s=jn,Pe=null,Xi(e,t,n),Pe=i,jn=s,Pe!==null)if(jn)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(n.stateNode),ce=!0}catch(a){ge(n,t,a)}else try{Pe.removeChild(n.stateNode),ce=!0}catch(a){ge(n,t,a)}break;case 18:Pe!==null&&(jn?(e=Pe,zy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),zo(e)):zy(Pe,n.stateNode));break;case 4:i=Pe,s=jn,Pe=n.stateNode.containerInfo,jn=!0,Xi(e,t,n),Pe=i,jn=s;break;case 0:case 11:case 14:case 15:Ia(2,n,t),de||Ia(4,n,t),Xi(e,t,n);break;case 1:de||(gn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&q1(n,t,i)),Xi(e,t,n);break;case 21:Xi(e,t,n);break;case 22:de=(i=de)||n.memoizedState!==null,Xi(e,t,n),de=i;break;case 30:gn(n,t),Xi(e,t,n);break;case 7:de||gn(n,t),Xi(e,t,n);break;default:Xi(e,t,n)}}function iS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zo(e)}catch(n){ge(t,t.return,n)}}}function sS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zo(e)}catch(n){ge(t,t.return,n)}}function kA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new My),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new My),t;default:throw Error(j(435,e.tag))}}function ku(e,t){var n=kA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=ew.bind(null,e,i);i.then(s,s)}})}function Gn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ba(l.type)){Pe=l.stateNode,jn=!1;break t}break;case 5:Pe=l.stateNode,jn=!1;break t;case 3:case 4:Pe=l.stateNode.containerInfo,jn=!0;break t}l=l.return}if(Pe===null)throw Error(j(160));nS(r,o,a),Pe=null,jn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)aS(t,e,n),t=t.sibling}var qi=null;function aS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Gn(t,e,n),kn(e),s&4&&(Ia(3,e,e.return),Dc(3,e),Ia(5,e,e.return));break;case 1:Gn(t,e,n),kn(e),s&512&&(de||i===null||gn(i,i.return)),s&64&&on&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=qi,Gn(t,e,n),kn(e),s&512&&(de||i===null||gn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(on)e.stateNode=US(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Ac]||i[vn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),Sn(i,t,n),i[vn]=e,cn(i),t=i;break t;case"link":if(a=qy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),Sn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=qy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),Sn(i,t,n),s.head.appendChild(i);break;default:throw Error(j(468,t))}i[vn]=e,cn(i),t=i}e.stateNode=t}else on||rg(a,e.type,e.stateNode);else e.stateNode=Wy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||de||t.parentNode.removeChild(t)):s.count--,n===null?on||rg(a,e.type,e.stateNode):Wy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Vp(e,e.memoizedProps,i.memoizedProps);break;case 27:Gn(t,e,n),kn(e),s&512&&(de||i===null||gn(i,i.return)),i!==null&&s&4&&Vp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=ls,ls=!1,Gn(t,e,n),ls=a,kn(e),s&512&&(de||i===null||gn(i,i.return)),e.flags&32){t=e.stateNode;try{wo(t,""),ce=!0}catch(h){ge(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Vp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(kp=!0);break;case 6:if(Gn(t,e,n),kn(e),s&4){if(e.stateNode===null)throw Error(j(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ce=!0}catch(h){ge(e,e.return,h)}}break;case 3:if(ce=!1,uh=null,a=qi,qi=_c(t.containerInfo),Gn(t,e,n),qi=a,kn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{zo(t.containerInfo)}catch(h){ge(e,e.return,h)}kp&&(kp=!1,rS(e)),ce=!1;break;case 4:s=ls,ls=on,i=R_(),a=qi,qi=_c(e.stateNode.containerInfo),Gn(t,e,n),kn(e),qi=a,ce&&ql&&(Oh=!0),ce=i,ls=s;break;case 12:Gn(t,e,n),kn(e);break;case 31:Gn(t,e,n),kn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Gn(t,e,n),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(sf=vi()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=on,l=de,c=ls;on=o||a,ls=c||a,de=l||r,Gn(t,e,n),de=l,ls=c,on=o,kn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||on||de||(t=r||de,n=on,i=de,on=a||on,de=t,fa(e,2),on=n,de=i),!a&&ls||Gm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Gn(t,e,n),kn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:s&512&&(de||i===null||gn(i,i.return)),s=R_(),a=ql,r=(n&335544064)===n,o=e.memoizedProps,ql=r&&Xs(o.default,o.update)!=="none",Gn(t,e,n),kn(e),r&&i!==null&&ce&&(e.flags|=4),ql=a,ce=s;break;case 21:break;case 7:s&512&&(de||i===null||gn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Gn(t,e,n),kn(e)}}function kn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Y1(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(qg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Wg(s))break;s=s.return}var r=i;if(n==null)throw Error(j(160));switch(n.tag){case 27:var o=n.stateNode,l=Gp(e);Uh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(wo(c,""),n.flags&=-33);var h=Gp(e);Uh(e,h,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,f=Gp(e);Pm(e,f,d,r);break;default:throw Error(j(161))}}catch(p){ge(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Po=!0,t.reset(),Po=!1),e=e.sibling}}function jr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)oS(t,e),t=t.sibling;else j1(t,!1)}function oS(e,t){var n=e.alternate;if(n===null)zm(e,!1);else switch(e.tag){case 3:if(Vm=cs=!1,Sy(),jr(t,e),!cs&&!Oh){if(e=fs,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];OS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Vm=!0}fs=null;break;case 5:jr(t,e);break;case 4:i=cs,cs=!1,jr(t,e),cs&&(Oh=!0),cs=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?zm(e,!1):jr(t,e));break;case 30:i=cs,s=Sy(),cs=!1,jr(t,e),cs&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Bs(a,r),r=Bs(n.memoizedProps,r);var o=Xs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ti=0,t=Yg(e,n,t,r,o,a,!0),ti!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Do(e,e.memoizedProps.onUpdate),fs=s):s!==null&&(s.push.apply(s,fs),fs=s),cs=(e.flags&32)!==0?!0:i;break;default:jr(t,e)}}function us(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$1(e,t.alternate,t),t=t.sibling}function fa(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),fa(n,i);break;case 1:gn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&q1(n,n.return,s),fa(n,i);break;case 27:(i&2)!==0&&kS(n.stateNode,n.type,n.memoizedProps);case 5:gn(n,n.return),n.tag!==5&&n.tag!==27||nc(n),fa(n,i);break;case 6:nc(n);break;case 26:gn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||de||s.parentNode.removeChild(s),fa(n,i);break;case 22:n.memoizedState===null&&fa(n,i);break;case 30:gn(n,n.return),fa(n,i);break;case 7:gn(n,n.return);default:fa(n,i)}e=e.sibling}}function Wi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Wi(s,a,n),Dc(4,a);break;case 1:if(Wi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){ge(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)t1(c[s],l)}catch(h){ge(i,i.return,h)}}o&&r&64&&W1(a),hs(a,a.return);break;case 27:(n&2)!==0&&Z1(a);case 5:a.tag!==5&&a.tag!==27||yy(a),Wi(s,a,n),o&&i===null&&r&4&&Im(a),hs(a,a.return);break;case 6:yy(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||on||rg(_c(l.ownerDocument),a.type,l),Wi(s,a,n),o&&i===null&&r&4&&Im(a),hs(a,a.return);break;case 12:Wi(s,a,n);break;case 31:Wi(s,a,n),o&&r&4&&iS(s,a);break;case 13:Wi(s,a,n),o&&r&4&&sS(s,a);break;case 22:a.memoizedState===null&&Wi(s,a,n),hs(a,a.return);break;case 30:Wi(s,a,n),hs(a,a.return);break;case 7:hs(a,a.return);default:Wi(s,a,n)}t=t.sibling}}function Zg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Rc(n))}function Jg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rc(e))}function Di(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)lS(e,t,n,i),t=t.sibling;else s&&Q1(t)}function lS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&rh(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Di(e,t,n,i),a&2048&&Dc(9,t);break;case 1:Di(e,t,n,i);break;case 3:Di(e,t,n,i),s&&Vm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Rc(a)));break;case 12:if(a&2048){Di(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){ge(t,t.return,c)}}else Di(e,t,n,i);break;case 31:Di(e,t,n,i);break;case 13:Di(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&rh(o),r._visibility&2?Di(e,t,n,i):ic(e,t)):(s&&o!==null&&o.memoizedState!==null&&rh(t),r._visibility&2?Di(e,t,n,i):(r._visibility|=2,to(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Zg(o,t);break;case 24:Di(e,t,n,i),a&2048&&Jg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ys(a.child,!0),ys(t.child,!0))),Di(e,t,n,i);break;default:Di(e,t,n,i)}}function to(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:to(a,r,o,l,s),Dc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?to(a,r,o,l,s):ic(a,r):(h._visibility|=2,to(a,r,o,l,s)),s&&c&2048&&Zg(r.alternate,r);break;case 24:to(a,r,o,l,s),s&&c&2048&&Jg(r.alternate,r);break;default:to(a,r,o,l,s)}t=t.sibling}}function ic(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:ic(n,i),s&2048&&Zg(i.alternate,i);break;case 24:ic(n,i),s&2048&&Jg(i.alternate,i);break;default:ic(n,i)}t=t.sibling}}var ir=8192;function tr(e,t,n){if(e.subtreeFlags&ir)for(e=e.child;e!==null;)cS(e,t,n),e=e.sibling}function cS(e,t,n){switch(e.tag){case 26:tr(e,t,n),e.flags&ir&&(e.memoizedState!==null?Yw(n,qi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Zy(n,e)));break;case 5:tr(e,t,n),e.flags&ir&&(e=e.stateNode,(t&335544128)===t&&Zy(n,e));break;case 3:case 4:var i=qi;qi=_c(e.stateNode.containerInfo),tr(e,t,n),qi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ir,ir=16777216,tr(e,t,n),ir=i):tr(e,t,n));break;case 30:if((e.flags&ir)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,mi===null&&(mi=new Map),mi.set(i,s)}tr(e,t,n);break;default:tr(e,t,n)}}function uS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ln=i,fS(i,e)}uS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hS(e),e=e.sibling}function hS(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,oh(e)):Fl(e);break;default:Fl(e)}}function oh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ln=i,fS(i,e)}uS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ia(8,t,t.return),oh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,oh(t));break;default:oh(t)}e=e.sibling}}function fS(e,t){for(;ln!==null;){var n=ln;switch(n.tag){case 0:case 11:case 15:Ia(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Rc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ln=i;else t:for(n=e;ln!==null;){i=ln;var s=i.sibling,a=i.return;if(eS(i),i===n){ln=null;break t}if(s!==null){s.return=a,ln=s;break t}ln=a}}}var XA={getCacheForType:function(e){var t=_n(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _n(Ke).controller.signal}},WA=typeof WeakMap=="function"?WeakMap:Map,ue=0,Ae=null,ne=null,ae=0,pe=0,fi=null,ya=!1,Go=!1,Kg=!1,Gs=0,We=0,Pa=0,ur=0,Ih=0,gi=0,Co=0,sc=null,$n=null,Xm=!1,sf=0,dS=0,Ph=1/0,zh=null,Ra=null,Ve=0,Zi=null,_r=null,_s=0,Wm=0,qm=null,pS=null,Mo=null,bo=null,Eo=null,ac=0,lh=null;function xi(){return(ue&2)!==0&&ae!==0?ae&-ae:Vt.T!==null?jg():_x()}function mS(){if(gi===0)if((ae&536870912)===0||te){var e=Du;Du<<=1,(Du&3932160)===0&&(Du=262144),gi=e}else gi=536870912;return e=Mn.current,e!==null&&(e.flags|=32),gi}function Do(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=PS(Bs(e.memoizedProps,n))),bo===null&&(bo=[]),bo.push(t.bind(null,i))}}function ni(e,t,n){(e===Ae&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(No(e,0),xa(e,ae,gi,!1)),Tc(e,n),((ue&2)===0||e!==Ae)&&(e===Ae&&((ue&2)===0&&(ur|=n),We===4&&xa(e,ae,gi,!1)),Ss(e))}function gS(e,t,n){if((ue&6)!==0)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ec(e,t),s=i?ZA(e,t):Xp(e,t,!0),a=i;do{if(s===0){Go&&!i&&xa(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!qA(n)){s=Xp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=sc;var l=o.current.memoizedState.isDehydrated;if(l&&(No(o,r).flags|=256),r=Xp(o,r,!1),r!==2&&r!==6){if(Kg&&!l){o.errorRecoveryDisabledLanes|=a,ur|=a,s=4;break t}a=$n,$n=s,a!==null&&($n===null?$n=a:$n.push.apply($n,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){No(e,0),xa(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:xa(i,t,gi,!ya);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(s=sf+300-vi(),10<s)){if(xa(i,t,gi,!ya),kh(i,0,!0)!==0)break t;_s=t,i.timeoutHandle=t0(by.bind(null,i,n,$n,zh,Xm,t,gi,ur,Co,ya,a,"Throttled",-0,0),s);break t}by(i,n,$n,zh,Xm,t,gi,ur,Co,ya,a,null,-0,0)}}break}while(!0);Ss(e)}function by(e,t,n,i,s,a,r,o,l,c,h,d,f,p){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ps},mi=null,cS(t,a,d),x&&(g=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=yc.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?sf-vi():(a&4194048)===a?dS-vi():0,g=Zw(d,g),g!==null)){_s=a,e.cancelPendingCommit=g(Ty.bind(null,e,t,a,n,i,s,r,o,l,c,h,d,null,f,p)),xa(e,a,r,!c);return}Ty(e,t,a,n,i,s,r,o,l,c,h,d)}function qA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Si(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xa(e,t,n,i){t=dx(e,t),t&=~Ih,t&=~ur,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-yi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&mx(e,n,t)}function af(){return(ue&6)===0?(Nc(0,!1),!1):!0}function Qg(){if(ne!==null){if(pe===0)var e=ne.return;else e=ne,Os=br=null,Og(e),yo=null,fc=0,e=ne;for(;e!==null;)X1(e.alternate,e),e=e.return;ne=null}}function No(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,pw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_s=0,Qg(),Ae=e,ne=n=Is(e.current,null),ae=t,pe=0,fi=null,ya=!1,Go=Ec(e,t),Kg=!1,Co=gi=Ih=ur=Pa=We=0,$n=sc=null,Xm=!1,Gs=dx(e,t),Zh(),n}function vS(e,t){Zt=null,Vt.H=Ch,t===Ho||t===Qh?(t=K_(),pe=3):t===Ag?(t=K_(),pe=4):pe=t===Gg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,fi=t,ne===null&&(We=1,Dh(e,Ii(t,e.current)))}function _S(){var e=Mn.current;return e===null?!0:(ae&4194048)===ae?Nn===null:(ae&62914560)===ae||(ae&536870912)!==0?e===Nn:!1}function yS(){var e=Vt.H;return Vt.H=Ch,e===null?Ch:e}function xS(){var e=Vt.A;return Vt.A=XA,e}function Bh(){We=4,ya||(ae&4194048)!==ae&&Mn.current!==null||(Go=!0),(Pa&134217727)===0&&(ur&134217727)===0||Ae===null||xa(Ae,ae,gi,!1)}function Xp(e,t,n){var i=ue;ue|=2;var s=yS(),a=xS();(Ae!==e||ae!==t)&&(zh=null,No(e,t)),t=!1;var r=We;t:do try{if(pe!==0&&ne!==null){var o=ne,l=fi;switch(pe){case 8:Qg(),r=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(t=!0);var c=pe;if(pe=0,fi=null,po(e,o,l,c),n&&Go){r=0;break t}break;default:c=pe,pe=0,fi=null,po(e,o,l,c)}}YA(),r=We;break}catch(h){vS(e,h)}while(!0);return t&&e.shellSuspendCounter++,Os=br=null,ue=i,Vt.H=s,Vt.A=a,ne===null&&(Ae=null,ae=0,Zh()),r}function YA(){for(;ne!==null;)SS(ne)}function ZA(e,t){var n=ue;ue|=2;var i=yS(),s=xS();Ae!==e||ae!==t?(zh=null,Ph=vi()+500,No(e,t)):Go=Ec(e,t);t:do try{if(pe!==0&&ne!==null){t=ne;var a=fi;e:switch(pe){case 1:pe=0,fi=null,po(e,t,a,1);break;case 2:case 9:if(J_(a)){pe=0,fi=null,Ey(t);break}t=function(){pe!==2&&pe!==9||Ae!==e||(pe=7),Ss(e)},a.then(t,t);break t;case 3:pe=7;break t;case 4:pe=5;break t;case 7:J_(a)?(pe=0,fi=null,Ey(t)):(pe=0,fi=null,po(e,t,a,7));break;case 5:var r=null;switch(ne.tag){case 26:r=ne.memoizedState;case 5:case 27:var o=ne;if(r?qS(r):o.stateNode.complete){pe=0,fi=null;var l=o.sibling;if(l!==null)ne=l;else{var c=o.return;c!==null?(ne=c,rf(c)):ne=null}break e}}pe=0,fi=null,po(e,t,a,5);break;case 6:pe=0,fi=null,po(e,t,a,6);break;case 8:Qg(),We=6;break t;default:throw Error(j(462))}}JA();break}catch(h){vS(e,h)}while(!0);return Os=br=null,Vt.H=i,Vt.A=s,ue=n,ne!==null?0:(Ae=null,ae=0,Zh(),We)}function JA(){for(;ne!==null&&!fT();)SS(ne)}function SS(e){var t=k1(e.alternate,e,Gs);e.memoizedProps=e.pendingProps,t===null?rf(e):ne=t}function Ey(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fy(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=fy(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:Og(t);var i=t;i===un&&(te?(Mh(i),i.tag===5&&i.stateNode!=null&&(Ne=i.stateNode)):(Mh(i),te=!0));default:X1(n,t),t=ne=Wx(t,Gs),t=k1(n,t,Gs)}e.memoizedProps=e.pendingProps,t===null?rf(e):ne=t}function po(e,t,n,i){Os=br=null,Og(t),yo=null,fc=0;var s=t.return;try{if(PA(e,s,t,n,ae)){We=1,Dh(e,Ii(n,e.current)),ne=null;return}}catch(a){if(s!==null)throw ne=s,a;We=1,Dh(e,Ii(n,e.current)),ne=null;return}t.flags&32768?(te||i===1?e=!0:Go||(ae&536870912)!==0?e=!1:(ya=e=!0,(i===2||i===9||i===3||i===6)&&(i=Mn.current,i!==null&&i.tag===13&&(i.flags|=16384))),MS(t,e)):rf(t)}function rf(e){var t=e;do{if((t.flags&32768)!==0){MS(t,ya);return}e=t.return;var n=HA(t.alternate,t,Gs);if(n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);We===0&&(We=5)}function MS(e,t){do{var n=VA(e.alternate,e);if(n!==null){n.flags&=32767,ne=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=n}while(e!==null);We=6,ne=null}function Ty(e,t,n,i,s,a,r,o,l,c,h,d){e.cancelPendingCommit=null;do of();while(Ve!==0);if((ue&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));e===Ae&&(ne=Ae=null,ae=0),_r=t,Zi=e,_s=n,qm=s,pS=i,KA(e,t,n,r,o,l,d)}}function KA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Wm=o,o|=xg,MT(e,n,o,i,s,a),bo=null,(n&335544064)===n?(Eo=EA(e),i=10262):(Eo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,nw(vh,function(){return Km(),null})):(e.callbackNode=null,e.callbackPriority=0),Lh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Vt.T,Vt.T=null,s=he.p,he.p=2,a=ue,ue|=4;try{GA(e,t,n)}finally{ue=a,he.p=s,Vt.T=i}}Ve=1,Lh?Mo=xw(r,e.containerInfo,Eo,Ym,Zm,jA,Jm,Km,QA,null,null):(Ym(),Zm(),Jm())}function QA(e){if(Ve!==0){var t=Zi.onRecoverableError;t(e,{componentStack:null})}}function jA(){Ve===3&&(Ve=0,oS(_r,Zi),Ve=4)}function Ym(){if(Ve===1){Ve=0;var e=Zi,t=_r,n=_s,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Vt.T,Vt.T=null;var s=he.p;he.p=2;var a=ue;ue|=4;try{ql=Oh=!1,aS(t,e,n),n=tg;var r=zx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Px(o.ownerDocument.documentElement,o)){if(l!==null&&yg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!p.extend&&x>m&&(r=m,m=x,x=r);var u=V_(o,x),v=V_(o,m);if(u&&v&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var _=d[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Po=!!$m,tg=$m=null}finally{ue=a,he.p=s,Vt.T=i}}e.current=t,Ve=2}}function Zm(){if(Ve===2){Ve=0;var e=Zi,t=_r,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Vt.T,Vt.T=null;var i=he.p;he.p=2;var s=ue;ue|=4;try{$1(e,t.alternate,t)}finally{ue=s,he.p=i,Vt.T=n}}Ve=3}}function Jm(){if(Ve===4||Ve===3){Ve=0;var e=Mo;Mo=null,dT();var t=Zi,n=_r,i=_s,s=pS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ve=5:(Ve=0,_r=Zi=null,bS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Ra=null),dg(i),n=n.stateNode,_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(bc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Vt.T,a=he.p,he.p=2,Vt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Vt.T=n,he.p=a}}if(s=bo,r=Eo,Eo=null,s!==null&&(bo=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(_s&3)!==0&&of(),Ss(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===lh?ac++:(ac=0,lh=t):(ac=0,lh=null),Nc(0,!1)}}function bS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rc(t)))}function of(){return Mo!==null&&(Mo.skipTransition(),Mo=null),Ym(),Zm(),Jm(),Km()}function Km(){if(Ve!==5)return!1;var e=Zi,t=Wm;Wm=0;var n=dg(_s),i=Vt.T,s=he.p;try{he.p=32>n?32:n,Vt.T=null,n=qm,qm=null;var a=Zi,r=_s;if(Ve=0,_r=Zi=null,_s=0,(ue&6)!==0)throw Error(j(331));var o=ue;if(ue|=4,hS(a.current),lS(a,a.current,r,n),ue=o,Nc(0,!1),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(bc,a)}catch{}return!0}finally{he.p=s,Vt.T=i,bS(e,t)}}function Ay(e,t,n){t=Ii(n,t),t=Cm(e.stateNode,t,2),e=Ta(e,t,2),e!==null&&(Tc(e,2),Ss(e))}function ge(e,t,n){if(e.tag===3)Ay(e,e,n);else for(;t!==null;){if(t.tag===3){Ay(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))){e=Ii(n,e),n=B1(2),i=Ta(t,n,2),i!==null&&(F1(n,i,t,e),Tc(i,2),Ss(i));break}}t=t.return}}function Wp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new WA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Kg=!0,s.add(n),e=$A.bind(null,e,t,n),t.then(e,e))}function $A(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(ae&n)===n&&((We===4||We===3&&(ae&62914560)===ae&&300>vi()-sf)&&(ue&2)===0?No(e,0):Ih|=n,Co===ae&&(Co=0)),Ss(e)}function ES(e,t){t===0&&(t=px()),e=Mr(e,t),e!==null&&(Tc(e,t),Ss(e))}function tw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ES(e,n)}function ew(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),ES(e,n)}function nw(e,t){return hg(e,t)}var Uo=null,eo=null,Qm=!1,Fh=!1,qp=!1,Sa=0;function Ss(e){e!==eo&&e.next===null&&(eo===null?Uo=eo=e:eo=eo.next=e),Fh=!0,Qm||(Qm=!0,sw())}function Nc(e,t){if(!qp&&Fh){qp=!0;do for(var n=!1,i=Uo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-yi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,wy(i,a))}else a=ae,a=kh(i,i===Ae?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Ec(i,a)||(n=!0,wy(i,a));i=i.next}while(n);qp=!1}}function iw(){TS()}function TS(){Fh=Qm=!1;var e=0;Sa!==0&&dw()&&(e=Sa);for(var t=vi(),n=null,i=Uo;i!==null;){var s=i.next,a=AS(i,t);a===0?(i.next=null,n===null?Uo=s:n.next=s,s===null&&(eo=n)):(n=i,(e!==0||(a&3)!==0)&&(Fh=!0)),i=s}Ve!==0&&Ve!==5||Nc(e,!1),Sa!==0&&(Sa=0)}function AS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-yi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=ST(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ae,n=ae,n=kh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ep(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ec(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ep(i),dg(n)){case 2:case 8:n=hx;break;case 32:n=vh;break;case 268435456:n=fx;break;default:n=vh}return i=wS.bind(null,e),n=hg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ep(i),e.callbackPriority=2,e.callbackNode=null,2}function wS(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(of()&&e.callbackNode!==n)return null;var i=ae;return i=kh(e,e===Ae?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(gS(e,i,t),AS(e,vi()),e.callbackNode!=null&&e.callbackNode===n?wS.bind(null,e):null)}function wy(e,t){if(of())return null;gS(e,t,!0)}function sw(){mw(function(){(ue&6)!==0?hg(ux,iw):TS()})}function jg(){if(Sa===0){var e=pr;e===0&&(e=Cu,Cu<<=1,(Cu&261888)===0&&(Cu=256)),Sa=e}return Sa}function Ry(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ku(e)}function aw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Ry((s[si]||null).action),r=i.submitter;r&&(t=(t=r[si]||null)?Ry(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Wh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Sa!==0){var l=new FormData(s,r);wm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),wm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Xu=0;Xu<gm.length;Xu++)Wu=gm[Xu],Cy=Wu.toLowerCase(),Dy=Wu[0].toUpperCase()+Wu.slice(1),Ji(Cy,"on"+Dy);var Wu,Cy,Dy,Xu;Ji(Fx,"onAnimationEnd");Ji(Hx,"onAnimationIteration");Ji(Vx,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(gA,"onTransitionRun");Ji(vA,"onTransitionStart");Ji(_A,"onTransitionCancel");Ji(Gx,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mc));function RS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){yh(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){yh(h)}s.currentTarget=null,a=l}}}}function ee(e,t){var n=t[E_];n===void 0&&(n=t[E_]=new Set);var i=e+"__bubble";n.has(i)||(CS(t,e,2,!1),n.add(i))}function Yp(e,t,n){var i=0;t&&(i|=4),CS(n,e,i,t)}var qu="_reactListening"+Math.random().toString(36).slice(2);function $g(e){if(!e[qu]){e[qu]=!0,xx.forEach(function(n){n!=="selectionchange"&&(rw.has(n)||Yp(n,!1,e),Yp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qu]||(t[qu]=!0,Yp("selectionchange",!1,t))}}function CS(e,t,n,i){switch($S(t)){case 2:var s=jw;break;case 8:s=$w;break;default:s=r0}n=s.bind(null,t,n,e),s=void 0,!fm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Zp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=sr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Rx(function(){var c=a,h=mg(n),d=[];t:{var f=kx.get(e);if(f!==void 0){var p=Wh,g=e;switch(e){case"keypress":if(ju(n)===0)break t;case"keydown":case"keyup":p=qT;break;case"focusin":g="focus",p=Dp;break;case"focusout":g="blur",p=Dp;break;case"beforeblur":case"afterblur":p=Dp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=U_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=OT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=QT;break;case Fx:case Hx:case Vx:p=zT;break;case Gx:p=$T;break;case"scroll":case"scrollend":p=UT;break;case"wheel":p=eA;break;case"copy":case"cut":case"paste":p=FT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=O_;break;case"submit":p=JT;break;case"toggle":case"beforetoggle":p=iA}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var v=c,y;v!==null;){var _=v;if(y=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||y===null||u===null||(_=oc(v,u),_!=null&&x.push(gc(v,_,y))),m)break;v=v.return}0<x.length&&(f=new p(f,g,null,n,h),d.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==hm&&(g=n.relatedTarget||n.fromElement)&&(sr(g)||g[Bo]))break t;(f||p)&&(g=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=c,p=p?sr(p):null,p!==null&&(m=Mc(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(f=null,p=c),f!==p&&(x=U_,_="onMouseLeave",u="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(x=O_,_="onPointerLeave",u="onPointerEnter",v="pointer"),m=f==null?g:Xl(f),y=p==null?g:Xl(p),g=new x(_,v+"leave",f,n,h),g.target=m,g.relatedTarget=y,_=null,sr(h)===c&&(x=new x(u,v+"enter",p,n,h),x.target=y,x.relatedTarget=m,_=x),m=_,x=f&&p?$p(f,p,ow):null,f!==null&&Ny(d,g,f,x,!1),p!==null&&m!==null&&Ny(d,m,p,x,!0)))}t:{if(f=c?Xl(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=B_;else if(z_(f))if(Ox)T=dA;else{T=hA;var R=uA}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&pg(c.elementType)&&(T=B_):T=fA;if(T&&(T=T(e,c))){Lx(d,T,n,h);break t}R&&R(e,f,c)}switch(R=c?Xl(c):window,e){case"focusin":(z_(R)||R.contentEditable==="true")&&(oo=R,pm=c,Jl=null);break;case"focusout":Jl=pm=oo=null;break;case"mousedown":mm=!0;break;case"contextmenu":case"mouseup":case"dragend":mm=!1,G_(d,n,h);break;case"selectionchange":if(mA)break;case"keydown":case"keyup":G_(d,n,h)}var w;if(_g)t:{switch(e){case"compositionstart":var N="onCompositionStart";break t;case"compositionend":N="onCompositionEnd";break t;case"compositionupdate":N="onCompositionUpdate";break t}N=void 0}else ro?Nx(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Dx&&n.locale!=="ko"&&(ro||N!=="onCompositionStart"?N==="onCompositionEnd"&&ro&&(w=Cx()):(va=h,gg="value"in va?va.value:va.textContent,ro=!0)),R=Hh(c,N),0<R.length&&(N=new L_(N,e,null,n,h),d.push({event:N,listeners:R}),w?N.data=w:(w=Ux(n),w!==null&&(N.data=w)))),(w=aA?rA(e,n):oA(e,n))&&(N=Hh(c,"onBeforeInput"),0<N.length&&(R=new L_("onBeforeInput","beforeinput",null,n,h),d.push({event:R,listeners:N}),R.data=w)),aw(d,e,c,n,h)}RS(d,t)})}function gc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=oc(e,n),s!=null&&i.unshift(gc(e,s,a)),s=oc(e,t),s!=null&&i.push(gc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function ow(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ny(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=oc(n,a),c!=null&&r.unshift(gc(n,c,l))):s||(c=oc(n,a),c!=null&&r.push(gc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var lw=/\r\n?/g,cw=/\u0000|\uFFFD/g;function Uy(e){return(typeof e=="string"?e:""+e).replace(lw,`
`).replace(cw,"")}function DS(e,t){return t=Uy(t),Uy(e)===t}function me(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||wo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&wo(e,""+i);else return;break;case"className":Uu(e,"class",i);break;case"tabIndex":Uu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Uu(e,n,i);break;case"style":wx(e,i,a);return;case"data":if(t!=="object"){Uu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ku(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&me(e,t,"name",s.name,s,null),me(e,t,"formEncType",s.formEncType,s,null),me(e,t,"formMethod",s.formMethod,s,null),me(e,t,"formTarget",s.formTarget,s,null)):(me(e,t,"encType",s.encType,s,null),me(e,t,"method",s.method,s,null),me(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ku(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ps);return;case"onScroll":i!=null&&ee("scroll",e);return;case"onScrollEnd":i!=null&&ee("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ku(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ee("beforetoggle",e),ee("toggle",e),Ju(e,"popover",i);break;case"xlinkActuate":Ns(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ns(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ns(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ns(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ns(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ns(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ns(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ns(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ns(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ju(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=DT.get(n)||n,Ju(e,n,i);else return}ce=!0}function jm(e,t,n,i,s,a){switch(n){case"style":wx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")wo(e,i);else if(typeof i=="number"||typeof i=="bigint")wo(e,""+i);else return;break;case"onScroll":i!=null&&ee("scroll",e);return;case"onScrollEnd":i!=null&&ee("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ps);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[si]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ce=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ju(e,n,i)}return}ce=!0}function Sn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:me(e,t,a,r,n,null)}}s&&me(e,t,"srcSet",n.srcSet,n,null),i&&me(e,t,"src",n.src,n,null);return;case"input":ee("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(j(137,t));break;default:me(e,t,i,h,n,null)}}Ex(e,a,o,l,c,r,s,!1);return;case"select":ee("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:me(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?go(e,!!i,t,!1):n!=null&&go(e,!!i,n,!0);return;case"textarea":ee("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:me(e,t,r,o,n,null)}Ax(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:me(e,t,l,i,n,null)}return;case"dialog":ee("beforetoggle",e),ee("toggle",e),ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(i=0;i<mc.length;i++)ee(mc[i],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:me(e,t,c,i,n,null)}return;default:if(pg(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&jm(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&me(e,t,o,i,n,null))}var uw={};function hw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||me(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":p!==d&&(ce=!0),a=p;break;case"name":p!==d&&(ce=!0),s=p;break;case"checked":p!==d&&(ce=!0),c=p;break;case"defaultChecked":p!==d&&(ce=!0),h=p;break;case"value":p!==d&&(ce=!0),r=p;break;case"defaultValue":p!==d&&(ce=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:p!==d&&me(e,t,f,p,i,d)}}um(e,r,o,l,c,h,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||me(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ce=!0),f=a;break;case"defaultValue":a!==l&&(ce=!0),o=a;break;case"multiple":a!==l&&(ce=!0),r=a;default:a!==l&&me(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?go(e,!!n,f,!1):!!i!=!!n&&(t!=null?go(e,!!n,t,!0):go(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:me(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ce=!0),f=s;break;case"defaultValue":s!==a&&(ce=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:s!==a&&me(e,t,r,s,i,a)}Tx(e,f,p);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:me(e,t,g,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":f!==p&&(ce=!0),e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:me(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&me(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:me(e,t,c,f,i,p)}return;default:if(pg(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&jm(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||jm(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&me(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||me(e,t,d,f,i,p)}function Ly(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Ly(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&Ly(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $m=null,tg=null;function vc(e){return e.nodeType===9?e:e.ownerDocument}function Oy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function NS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function US(e,t,n,i){return n=vc(n).createElement(e),n[vn]=i,n[si]=t,Sn(n,e,t),cn(n),n}function eg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jp=null;function dw(){var e=window.event;return e&&e.type==="popstate"?e===Jp?!1:(Jp=e,!0):(Jp=null,!1)}var t0=typeof setTimeout=="function"?setTimeout:void 0,pw=typeof clearTimeout=="function"?clearTimeout:void 0,Iy=typeof Promise=="function"?Promise:void 0,Py=typeof requestAnimationFrame=="function"?requestAnimationFrame:t0,mw=typeof queueMicrotask=="function"?queueMicrotask:typeof Iy<"u"?function(e){return Iy.resolve(null).then(e).catch(gw)}:t0;function gw(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function zy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),zo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Qp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Qp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Ac]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Qp(e.ownerDocument.body);n=s}while(n);zo(t)}function By(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function LS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function OS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function IS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function ng(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return IS(t,n,e)}function vw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return IS(t,n,e)}function _w(e){return e.documentElement.clientHeight}function yw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function xw(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var f=c.defaultView,p=f.navigation&&f.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(_w(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,u=0,v=0;v<m.length;v++){var y=m[v];if(!y.complete){var _=y.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<f.innerHeight&&_.left<f.innerWidth){if(u+=YS(y),u>hh){x.length=g;break}y=new Promise(yw.bind(y)),x.push(y)}}}if(0<x.length)return f=Promise.race([Promise.all(x),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(p?Promise.allSettled([p.finished,f]):f).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var d=[];return h.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),p=0;p<f.length;p++){var g=f[p],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=x.getKeyframes();for(var u=m=void 0,v=!0,y=0;y<g.length;y++){var _=g[y],T=_.width;if(m===void 0)m=T;else if(m!==T){v=!1;break}if(T=_.height,u===void 0)u=T;else if(u!==T){v=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}v&&m!==void 0&&u!==void 0&&(x.setKeyframes(g),v=getComputedStyle(x.target,x.pseudoElement),v.width!==m||v.height!==u)&&(v=g[0],v.width=m,v.height=u,v=g[g.length-1],v.width=m,v.height=u,x.setKeyframes(g))}}r()},function(f){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var f=0;f<d.length;f++)d[f].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function ar(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ar.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:we({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};ar.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};ar.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function PS(e){return{name:e,group:new ar("group",e),imagePair:new ar("image-pair",e),old:new ar("old",e),new:new ar("new",e)}}function Mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Mi.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(zS(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Lo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),ii(this._fragmentFiber.child,!1,Sw,e,o,i)}this._eventListeners=a}};function Sw(e,t,n,i){return en(e).addEventListener(t,n,i),!1}Mi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=zS(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Lo(s.optionsOrUseCapture),ii(this._fragmentFiber.child,!1,Mw,e,n,s),i.splice(t,1),a!==null&&a()}};function Mw(e,t,n,i){return en(e).removeEventListener(t,n,i),!1}function Lo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Fy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function zS(e,t,n,i){if(e.length===0)return-1;i=Fy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Fy(a.optionsOrUseCapture)===i)return s}return-1}Mi.prototype.dispatchEvent=function(e){var t=yr(this._fragmentFiber);if(t===null)return!0;t=en(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Lo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Lo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};Mi.prototype.focus=function(e){ii(this._fragmentFiber.child,!0,BS,e,void 0,void 0)};function BS(e,t){return e.tag===6?!1:(e=en(e),Ow(e,t))}Mi.prototype.focusLast=function(e){var t=[];ii(this._fragmentFiber.child,!0,e0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!BS(t[n],e);n--);};function e0(e,t){return t.push(e),!1}Mi.prototype.blur=function(){var e=yr(this._fragmentFiber);e!==null&&(e=en(e),e=vc(e).activeElement,e!==null&&ii(this._fragmentFiber.child,!1,bw,e,void 0,void 0))};function bw(e,t){return e.tag===6?!1:(e=en(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),ii(this._fragmentFiber.child,!1,Ew,e,void 0,void 0)};function Ew(e,t){return e.tag===6||(e=en(e),t.observe(e)),!1}Mi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ii(this._fragmentFiber.child,!1,Tw,e,void 0,void 0);for(var n=t=0;n<Yi.length;n++){var i=Yi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Yi[t++]=i}Yi.length=t}};function Tw(e,t){return e.tag===6||(e=en(e),t.unobserve(e)),!1}var Yi=[],Kp=!1;function Aw(e,t,n){Yi.push({fragmentInstance:e,observer:t,instance:n}),Kp||(Kp=!0,Iw(function(){Kp=!1;var i=Yi;Yi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}Mi.prototype.getClientRects=function(){var e=[];return ii(this._fragmentFiber.child,!1,ww,e,void 0,void 0),e};function ww(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=en(e),t.push.apply(t,e.getClientRects());return!1}Mi.prototype.getRootNode=function(e){var t=yr(this._fragmentFiber);return t===null?this:en(t).getRootNode(e)};Mi.prototype.compareDocumentPosition=function(e){var t=yr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ii(this._fragmentFiber.child,!1,e0,n,void 0,void 0);var i=en(t);if(n.length===0){if(n=i,__(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=rx(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=en(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=en(n[0]),s=en(n[n.length-1]);var a=__(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Rw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Rw(e,t,n,i,s){var a=sr(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=yr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=$p(n,a,y_),t===null?t=!1:(ii(t,!0,sT,a,n),a=no,no=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=$p(i,a,y_),t===null?t=!1:(ii(t,!0,aT,a,i),a=no,jp=no=null,t=a!==null)),t):!1}function Hy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(j(566));var t=[];ii(this._fragmentFiber.child,!1,e0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=rx(this._fragmentFiber);if(i=n?i[1]||i[0]||yr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=en(i),Hy(e,n);return}if(i=en(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=en(s),Hy(s,n)):en(s).scrollIntoView(e),i+=n?-1:1}};function Cw(e,t){return e=en(e),FS(e,t),!1}function FS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function HS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Lo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Yi.length;o++){var l=Yi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Yi[r++]=l)}Yi.length=r,a.observe(e)}),FS(e,t))}function Dw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Lo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?Aw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function ig(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ig(n),Xh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Nw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ac])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=zi(e.nextSibling),e===null)break}return null}function Uw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zi(e.nextSibling),e===null))return null;return e}function VS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zi(e.nextSibling),e===null))return null;return e}function sg(e){return e.data==="$?"||e.data==="$~"}function n0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Lw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function zi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ag=null;function Vy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return zi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Gy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ow(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Iw(e){Py(function(){Py(function(t){return e(t)})})}function GS(e,t,n){switch(t=vc(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function kS(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&me(e,t,i,null,uw,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ps&&(e.onclick=null),Xh(e)}function Qp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xh(e)}var Bi=new Map,ky=new Set;function _c(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ws=he.d;he.d={f:Pw,r:zw,D:Bw,C:Fw,L:Hw,m:Vw,X:kw,S:Gw,M:Xw};function Pw(){var e=Ws.f(),t=af();return e||t}function zw(e){var t=Fo(e);t!==null&&t.tag===5&&t.type==="form"?w1(t):Ws.r(e)}var ko=typeof document>"u"?null:document;function XS(e,t,n){var i=ko;if(i&&typeof t=="string"&&t){var s=Oi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),ky.has(s)||(ky.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Sn(t,"link",e),cn(t),i.head.appendChild(t)))}}function Bw(e){Ws.D(e),XS("dns-prefetch",e,null)}function Fw(e,t){Ws.C(e,t),XS("preconnect",e,t)}function Hw(e,t,n){Ws.L(e,t,n);var i=ko;if(i&&e&&t){var s='link[rel="preload"][as="'+Oi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Oi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Oi(n.imageSizes)+'"]')):s+='[href="'+Oi(e)+'"]';var a=s;switch(t){case"style":a=Oo(e);break;case"script":a=Xo(e)}if(!(Bi.has(a)||(e=we({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Bi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Uc(a))||t==="script"&&i.querySelector(Lc(a))))){var r=i.createElement("link");Sn(r,"link",e),t==="style"&&(r[_h]=!0,r.onload=r.onerror=function(){yx(r)}),cn(r),i.head.appendChild(r)}}}function Vw(e,t){Ws.m(e,t);var n=ko;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Oi(i)+'"][href="'+Oi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Xo(e)}if(!Bi.has(a)&&(e=we({rel:"modulepreload",href:e},t),Bi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Lc(a)))return}i=n.createElement("link"),Sn(i,"link",e),cn(i),n.head.appendChild(i)}}}function Gw(e,t,n){Ws.S(e,t,n);var i=ko;if(i&&e){var s=mo(i).hoistableStyles,a=Oo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Uc(a)))o.loading=5;else{e=we({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bi.get(a))&&i0(e,n);var l=r=i.createElement("link");cn(l),Sn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ch(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function kw(e,t){Ws.X(e,t);var n=ko;if(n&&e){var i=mo(n).hoistableScripts,s=Xo(e),a=i.get(s);a||(a=n.querySelector(Lc(s)),a||(e=we({src:e,async:!0},t),(t=Bi.get(s))&&s0(e,t),a=n.createElement("script"),cn(a),Sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Xw(e,t){Ws.M(e,t);var n=ko;if(n&&e){var i=mo(n).hoistableScripts,s=Xo(e),a=i.get(s);a||(a=n.querySelector(Lc(s)),a||(e=we({src:e,async:!0,type:"module"},t),(t=Bi.get(s))&&s0(e,t),a=n.createElement("script"),cn(a),Sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Xy(e,t,n,i){var s=(s=Ma.current)?_c(s):null;if(!s)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Oo(n.href),t=mo(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Oo(n.href);var a=mo(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Uc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Bi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bi.set(e,a)),Ww(s,e,a,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Xo(n),t=mo(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function Oo(e){return'href="'+Oi(e)+'"'}function Uc(e){return'link[rel="stylesheet"]['+e+"]"}function WS(e){return we({},e,{"data-precedence":e.precedence,precedence:null})}function Ww(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[_h]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[_h]=!0,t.onload=t.onerror=yx.bind(null,t),Sn(t,"link",n),cn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Xo(e){return'[src="'+Oi(e)+'"]'}function Lc(e){return"script[async]"+e}function Wy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Oi(n.href)+'"]');if(i)return t.instance=i,cn(i),i;var s=we({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),cn(i),Sn(i,"style",s),ch(i,n.precedence,e),t.instance=i;case"stylesheet":s=Oo(n.href);var a=e.querySelector(Uc(s));if(a)return t.state.loading|=4,t.instance=a,cn(a),a;i=WS(n),(s=Bi.get(s))&&i0(i,s),a=(e.ownerDocument||e).createElement("link"),cn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Sn(a,"link",i),t.state.loading|=4,ch(a,n.precedence,e),t.instance=a;case"script":return a=Xo(n.src),(s=e.querySelector(Lc(a)))?(t.instance=s,cn(s),s):(i=n,(s=Bi.get(a))&&(i=we({},n),s0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),cn(s),Sn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ch(i,n.precedence,e));return t.instance}function ch(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function i0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function s0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var uh=null;function qy(e,t,n){if(uh===null){var i=new Map,s=uh=new Map;s.set(n,i)}else s=uh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Ac]||a[vn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function rg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Yy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function qS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function YS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Zy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=YS(t),e.suspenseyImages.push(t)),e=Jw.bind(e),t.decode().then(e,e))}function Yw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Oo(i.href),a=t.querySelector(Uc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=yc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,cn(a);return}a=t.ownerDocument||t,i=WS(i),(s=Bi.get(s))&&i0(i,s),a=a.createElement("link"),cn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Sn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=yc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hh=0;function Zw(e,t){return e.stylesheets&&e.count===0&&fh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&fh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&hh===0&&(hh=62500*fw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>hh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function ZS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)fh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function yc(){this.count--,ZS(this)}function Jw(){this.imgCount--,ZS(this)}var Vh=null;function fh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vh=new Map,t.forEach(Kw,e),Vh=null,yc.call(e))}function Kw(e,t){if(!(t.state.loading&4)){var n=Vh.get(e);if(n)var i=n.get(null);else{n=new Map,Vh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=yc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Io={$$typeof:ds,Provider:null,Consumer:null,_currentValue:rr,_currentValue2:rr,_threadCount:0};function Qw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tp(0),this.hiddenUpdates=Tp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function JS(e,t,n,i,s,a,r,o,l,c,h,d){return e=new Qw(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=ei(3,null,null,t),e.current=a,a.stateNode=e,t=Eg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},wg(a),e}function KS(e){return e?(e=uo,e):uo}function QS(e,t,n,i,s,a){s=KS(s),i.context===null?i.context=s:i.pendingContext=s,i=Ea(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ta(e,i,t),n!==null&&(ni(n,e,t),Ql(n,e,t))}function Jy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function a0(e,t){Jy(e,t),(e=e.alternate)&&Jy(e,t)}function jS(e){if(e.tag===13||e.tag===31){var t=Mr(e,67108864);t!==null&&ni(t,e,67108864),a0(e,67108864)}}function Ky(e){if(e.tag===13||e.tag===31){var t=xi();t=fg(t);var n=Mr(e,t);n!==null&&ni(n,e,t),a0(e,t)}}var Po=!0;function jw(e,t,n,i){var s=Vt.T;Vt.T=null;var a=he.p;try{he.p=2,r0(e,t,n,i)}finally{he.p=a,Vt.T=s}}function $w(e,t,n,i){var s=Vt.T;Vt.T=null;var a=he.p;try{he.p=8,r0(e,t,n,i)}finally{he.p=a,Vt.T=s}}function r0(e,t,n,i){if(Po){var s=og(i);if(s===null)Zp(e,t,i,Gh,n),Qy(e,i);else if(e2(s,e,t,n,i))i.stopPropagation();else if(Qy(e,i),t&4&&-1<t2.indexOf(e)){for(;s!==null;){var a=Fo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=er(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-yi(r);o.entanglements[1]|=l,r&=~l}Ss(a),(ue&6)===0&&(Ph=vi()+500,Nc(0,!1))}}break;case 31:case 13:o=Mr(a,2),o!==null&&ni(o,a,2),af(),a0(a,2)}if(a=og(i),a===null&&Zp(e,t,i,Gh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Zp(e,t,i,null,n)}}function og(e){return e=mg(e),o0(e)}var Gh=null;function o0(e){if(Gh=null,e=sr(e),e!==null){var t=Mc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ix(t),e!==null)return e;e=null}else if(n===31){if(e=sx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gh=e,null}function $S(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pT()){case ux:return 2;case hx:return 8;case vh:case mT:return 32;case fx:return 268435456;default:return 32}default:return 32}}var lg=!1,Ca=null,Da=null,Na=null,xc=new Map,Sc=new Map,ma=[],t2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qy(e,t){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":xc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sc.delete(t.pointerId)}}function Hl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Fo(t),t!==null&&jS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function e2(e,t,n,i,s){switch(t){case"focusin":return Ca=Hl(Ca,e,t,n,i,s),!0;case"dragenter":return Da=Hl(Da,e,t,n,i,s),!0;case"mouseover":return Na=Hl(Na,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return xc.set(a,Hl(xc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Sc.set(a,Hl(Sc.get(a)||null,e,t,n,i,s)),!0}return!1}function tM(e){var t=sr(e.target);if(t!==null){var n=Mc(t);if(n!==null){if(t=n.tag,t===13){if(t=ix(n),t!==null){e.blockedOn=t,b_(e.priority,function(){Ky(n)});return}}else if(t===31){if(t=sx(n),t!==null){e.blockedOn=t,b_(e.priority,function(){Ky(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=og(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);hm=i,n.target.dispatchEvent(i),hm=null}else return t=Fo(n),t!==null&&jS(t),e.blockedOn=n,!1;t.shift()}return!0}function jy(e,t,n){dh(e)&&n.delete(t)}function n2(){lg=!1,Ca!==null&&dh(Ca)&&(Ca=null),Da!==null&&dh(Da)&&(Da=null),Na!==null&&dh(Na)&&(Na=null),xc.forEach(jy),Sc.forEach(jy)}function Yu(e,t){e.blockedOn===t&&(e.blockedOn=null,lg||(lg=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,n2)))}var Zu=null;function $y(e){Zu!==e&&(Zu=e,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,function(){Zu===e&&(Zu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(o0(i||n)===null)continue;break}var a=Fo(n);a!==null&&(e.splice(t,3),t-=3,wm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function zo(e){function t(l){return Yu(l,e)}Ca!==null&&Yu(Ca,e),Da!==null&&Yu(Da,e),Na!==null&&Yu(Na,e),xc.forEach(t),Sc.forEach(t);for(var n=0;n<ma.length;n++){var i=ma[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ma.length&&(n=ma[0],n.blockedOn===null);)tM(n),n.blockedOn===null&&ma.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[si]||null;if(typeof a=="function")r||$y(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[si]||null)o=r.formAction;else if(o0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),$y(n)}}}function eM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function l0(e){this._internalRoot=e}lf.prototype.render=l0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=xi();QS(n,i,e,t,null,null)};lf.prototype.unmount=l0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;QS(e.current,2,null,e,null,null),af(),t[Bo]=null}};function lf(e){this._internalRoot=e}lf.prototype.unstable_scheduleHydration=function(e){if(e){var t=_x();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ma.length&&t!==0&&t<ma[n].priority;n++);ma.splice(n,0,e),n===0&&tM(e)}};var tx=ex.version;if(tx!=="19.3.0")throw Error(j(527,tx,"19.3.0"));he.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=iT(t),e=e!==null?ax(e):null,e=e===null?null:e.stateNode,e};var i2={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Vt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Vl.isDisabled&&Vl.supportsFiber))try{bc=Vl.inject(i2),_i=Vl}catch{}var Vl;cf.createRoot=function(e,t){if(!nx(e))throw Error(j(299));var n=!1,i="",s=I1,a=P1,r=z1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=JS(e,1,!1,null,null,n,i,null,s,a,r,eM),e[Bo]=t.current,$g(e),new l0(t)};cf.hydrateRoot=function(e,t,n){if(!nx(e))throw Error(j(299));var i=!1,s="",a=I1,r=P1,o=z1,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=JS(e,1,!0,t,n??null,i,s,l,a,r,o,eM),t.context=KS(null),n=t.current,i=xi(),i=fg(i),s=Ea(i),s.callback=null,Ta(n,s,i),n=i,t.current.lanes=n,Tc(t,n),Ss(t),e[Bo]=t.current,$g(e),new lf(t)};cf.version="19.3.0"});var aM=rs((aU,sM)=>{"use strict";function iM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iM)}catch(e){console.error(e)}}iM(),sM.exports=nM()});var bE=rs(sp=>{"use strict";var GN=Symbol.for("react.transitional.element"),kN=Symbol.for("react.fragment");function ME(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:GN,type:e,key:i,ref:t!==void 0?t:null,props:n}}sp.Fragment=kN;sp.jsx=ME;sp.jsxs=ME});var Iv=rs((PI,EE)=>{"use strict";EE.exports=bE()});var $e=Su(bu(),1),AE=Su(aM(),1);var c0={x:3,z:-1.8},Oc=[{x:-1.55,z:4.3},{x:-.52,z:4.3},{x:.52,z:4.3},{x:1.55,z:4.3}],Ms=[{x:-1,z:.15},{x:.85,z:.15},{x:-2.35,z:1.75},{x:2.25,z:1.75}],s2=["Why does the moon glow?","Tell me a little story","What makes rain fall?","Explain how bees dance","How do seeds grow?","Describe a perfect afternoon"],a2=["Compare these two ideas","Remember the earlier details","Summarize a long conversation","Connect the clues together"],rM=28,oM=64,u0=4,r2=3,o2=3,l2=3;var lM=e=>46*(e+1),cM=e=>42+e*36,uM=(e,t)=>(e==="speed"?34:42)+t*(e==="speed"?26:32),hM=e=>16/(1+e*.35),c2=e=>.82+e*.055;var u2=()=>Array.from({length:u0},()=>({speed:0,accuracy:0}));function h0(e=Date.now()){return{version:1,tokens:0,capacity:1,context:!1,workflow:0,stationLevels:Array(u0).fill(0),agentLevels:u2(),completed:0,errors:0,earned:0,seed:41729,nextId:1,savedAt:e}}var uf=class{constructor(t=h0()){this.agents=[];this.requests=[];this.time=0;this.paused=!1;this.speed=1;this.nextArrival=Oc.map((t,n)=>1.8+n*3.7);this.lastResult=null;this.progress={...t,stationLevels:[...t.stationLevels],agentLevels:t.agentLevels.map(n=>({...n}))};for(let n=0;n<this.progress.capacity;n++)this.addAgent()}addAgent(){let t=this.agents.length,{x:n,z:i}=Oc[t];this.agents.push({id:t,state:"idle",x:n,z:i,target:{x:n,z:i},route:[],workLeft:0,workTotal:0,visitedContext:!1})}random(){return this.progress.seed=Math.imul(1664525,this.progress.seed)+1013904223>>>0,this.progress.seed/4294967296}spawnRequest(t){let n=this.progress.context&&this.random()<.38?"context":"chat",i=n==="context"?a2:s2,s=i[Math.floor(this.random()*i.length)],a=(n==="context"?14:9)+Math.floor(this.random()*4)+this.progress.workflow;this.requests.unshift({id:this.progress.nextId++,stationId:t,title:s,kind:n,status:"queued",reward:a,progress:0});let r=this.requests.filter(o=>o.status==="complete"||o.status==="failed").slice(0,12);this.requests=[...this.requests.filter(o=>o.status!=="complete"&&o.status!=="failed"),...r]}assign(){for(let t of this.agents){if(t.taskId!==void 0||t.state==="working")continue;let n=this.requests.find(i=>i.status==="queued"&&i.stationId===t.id);n&&(n.status="assigned",n.agentId=t.id,t.taskId=n.id,t.state="walking",t.visitedContext=!1,t.route=[...n.kind==="context"?[{...c0}]:[],{...Ms[t.id]}],t.target=t.route.shift(),t.workTotal=(n.kind==="context"?7.2:5.4+this.random()*1.4)*(1-this.progress.workflow*.1)*(1-this.progress.agentLevels[t.id].speed*.12),t.workLeft=t.workTotal)}}resolve(t){let n=this.requests.find(s=>s.id===t.taskId);if(!n)throw new Error(`Missing request for agent ${t.id}`);let i=this.random()<c2(this.progress.agentLevels[t.id].accuracy);n.progress=1,n.resolvedAt=this.time,this.progress.completed++,i?(n.status="complete",this.progress.tokens+=n.reward,this.progress.earned+=n.reward,this.lastResult={success:i,amount:n.reward,agentId:t.id}):(n.status="failed",n.loss=Math.min(this.progress.tokens,n.kind==="context"?5:3),this.progress.tokens-=n.loss,this.progress.errors++,this.lastResult={success:i,amount:n.loss,agentId:t.id}),this.nextArrival[n.stationId]=Math.max(this.nextArrival[n.stationId],3.5),t.taskId=void 0,t.state="returning",t.target={...Oc[t.id]}}move(t,n){let i=t.target.x-t.x,s=t.target.z-t.z,a=Math.hypot(i,s),r=2.05*n;if(a>r){t.x+=i/a*r,t.z+=s/a*r;return}if(t.x=t.target.x,t.z=t.target.z,t.state==="returning"){t.state="idle";return}t.target.x===c0.x&&t.target.z===c0.z&&(t.visitedContext=!0);let o=t.route.shift();if(o)t.target=o;else{t.state="working";let l=this.requests.find(c=>c.id===t.taskId);l&&(l.status="working")}}update(t){if(this.paused||t<=0)return;let n=Math.min(t*this.speed,5);for(;n>0;){let i=Math.min(n,.03333333333333333);n-=i,this.time+=i;for(let s=0;s<this.progress.capacity;s++){this.nextArrival[s]-=i;let a=this.requests.some(r=>r.stationId===s&&(r.status==="queued"||r.status==="assigned"||r.status==="working"));this.nextArrival[s]<=0&&!a&&(this.spawnRequest(s),this.nextArrival[s]=hM(this.progress.stationLevels[s]))}this.assign();for(let s of this.agents)if(s.state==="walking"||s.state==="returning")this.move(s,i);else if(s.state==="working"){s.workLeft=Math.max(0,s.workLeft-i);let a=this.requests.find(r=>r.id===s.taskId);if(!a)throw new Error(`Missing request for agent ${s.id}`);a.progress=1-s.workLeft/s.workTotal,s.workLeft===0&&this.resolve(s)}}}buyCapacity(){return this.progress.tokens<rM||this.progress.capacity>=u0?!1:(this.progress.tokens-=rM,this.progress.capacity++,this.addAgent(),this.nextArrival[this.progress.capacity-1]=1.8,!0)}buyWorkflow(){return this.progress.capacity<2||this.progress.workflow>=r2||this.progress.tokens<lM(this.progress.workflow)?!1:(this.progress.tokens-=lM(this.progress.workflow),this.progress.workflow++,!0)}buyStation(t){if(!Number.isInteger(t)||t<0||t>=this.progress.capacity)return!1;let n=this.progress.stationLevels[t];return n>=o2||this.progress.tokens<cM(n)?!1:(this.progress.tokens-=cM(n),this.progress.stationLevels[t]++,this.nextArrival[t]=Math.min(this.nextArrival[t],hM(this.progress.stationLevels[t])),!0)}trainAgent(t,n){if(!Number.isInteger(t)||t<0||t>=this.progress.capacity||n!=="speed"&&n!=="accuracy")return!1;let i=this.progress.agentLevels[t][n];return i>=l2||this.progress.tokens<uM(n,i)?!1:(this.progress.tokens-=uM(n,i),this.progress.agentLevels[t][n]++,!0)}unlockContext(){return this.progress.tokens<oM||this.progress.context||this.progress.capacity<2?!1:(this.progress.tokens-=oM,this.progress.context=!0,!0)}save(t=Date.now()){return{...this.progress,savedAt:t,stationLevels:[...this.progress.stationLevels],agentLevels:this.progress.agentLevels.map(n=>({...n}))}}};var f0=[{time:0,sun:0,ambient:.54,lamp:1.5,warmth:.35,sunColor:10200532,skyColor:4337747,bounceColor:10516621},{time:.19,sun:.08,ambient:.82,lamp:1.2,warmth:.7,sunColor:16746085,skyColor:14448789,bounceColor:15049099},{time:.32,sun:2.75,ambient:1.08,lamp:.55,warmth:.95,sunColor:16756328,skyColor:8639179,bounceColor:15120529},{time:.5,sun:3.25,ambient:1.18,lamp:.32,warmth:.76,sunColor:16765066,skyColor:9034192,bounceColor:15451552},{time:.67,sun:2.65,ambient:1.02,lamp:.72,warmth:1,sunColor:16749414,skyColor:14785442,bounceColor:15575694},{time:.79,sun:.09,ambient:.8,lamp:1.4,warmth:.8,sunColor:16022403,skyColor:6701415,bounceColor:10778760},{time:1,sun:0,ambient:.54,lamp:1.5,warmth:.35,sunColor:10200532,skyColor:4337747,bounceColor:10516621}];function d0(e,t,n){let i=s=>Math.round((e>>s&255)*(1-n)+(t>>s&255)*n);return i(16)<<16|i(8)<<8|i(0)}function hf(e,t=0){let n=((e/240+.35+t)%1+1)%1,i=Math.max(0,f0.findIndex(p=>p.time>=n)),s=f0[Math.max(i,1)],a=f0[Math.max(i-1,0)],r=(n-a.time)/(s.time-a.time||1),o=r*r*(3-2*r),l=p=>a[p]+(s[p]-a[p])*o,c=Math.floor(n*1440+1e-7),h=Math.floor(c/60),d=c%60,f=Math.max(Math.min(1,Math.max(0,(.19-n)/.12)),Math.min(1,Math.max(0,(n-.79)/.12)));return{time:n,hour:h,label:`${h.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`,sun:l("sun"),moon:f*.45,ambient:l("ambient"),lamp:l("lamp"),warmth:l("warmth"),sunColor:d0(a.sunColor,s.sunColor,o),skyColor:d0(a.skyColor,s.skyColor,o),bounceColor:d0(a.bounceColor,s.bounceColor,o),sunX:Math.cos((n-.47)*Math.PI*2)*6,sunY:4.2+Math.max(0,Math.sin((n-.19)/.6*Math.PI))*5.2}}var zM=0,q0=1,BM=2;var Y0=1,FM=2,Gi=3,ta=0,Tn=1,An=2,sa=0,Cr=1,Pr=2,Z0=3,J0=4,HM=5,qa=100,VM=101,GM=102,kM=103,XM=104,WM=200,qM=201,YM=202,ZM=203,Pf=204,zf=205,JM=206,KM=207,QM=208,jM=209,$M=210,tb=211,eb=212,nb=213,ib=214,od=0,ld=1,cd=2,Dr=3,ud=4,hd=5,fd=6,dd=7,K0=0,sb=1,ab=2,aa=0,rb=1,ob=2,lb=3,pd=4,cb=5,ub=6,hb=7;var Q0=300,zr=301,Br=302,md=303,gd=304,fu=306,Bf=1e3,Wa=1001,Ff=1002,dn=1003,fb=1004;var du=1005;var En=1006,vd=1007;var ns=1008;var is=1009,j0=1010,$0=1011,yl=1012,_d=1013,Qa=1014,As=1015,xl=1016,yd=1017,xd=1018,Sl=1020,tv=35902,ev=35899,nv=1021,iv=1022,ki=1023,ll=1026,Ml=1027,sv=1028,Sd=1029,av=1030,Md=1031;var bd=1033,pu=33776,mu=33777,gu=33778,vu=33779,Ed=35840,Td=35841,Ad=35842,wd=35843,Rd=36196,Cd=37492,Dd=37496,Nd=37808,Ud=37809,Ld=37810,Od=37811,Id=37812,Pd=37813,zd=37814,Bd=37815,Fd=37816,Hd=37817,Vd=37818,Gd=37819,kd=37820,Xd=37821,Wd=36492,qd=36494,Yd=36495,Zd=36283,Jd=36284,Kd=36285,Qd=36286;var Wc=2300,Hf=2301,If=2302,B0=2400,F0=2401,H0=2402;var db=3200,pb=3201;var rv=0,mb=1,ra="",sn="srgb",Nr="srgb-linear",qc="linear",ye="srgb";var Rr=7680;var V0=519,gb=512,vb=513,_b=514,ov=515,yb=516,xb=517,Sb=518,Mb=519,Vf=35044;var lv="300 es",ts=2e3,Yc=2001;var ea=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fM=1234567,kc=Math.PI/180,cl=180/Math.PI;function js(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[e&255]+Un[e>>8&255]+Un[e>>16&255]+Un[e>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function re(e,t,n){return Math.max(t,Math.min(n,e))}function cv(e,t){return(e%t+t)%t}function h2(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function f2(e,t,n){return e!==t?(n-e)/(t-e):0}function Xc(e,t,n){return(1-n)*e+n*t}function d2(e,t,n,i){return Xc(e,t,1-Math.exp(-n*i))}function p2(e,t=1){return t-Math.abs(cv(e,t*2)-t)}function m2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function g2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function v2(e,t){return e+Math.floor(Math.random()*(t-e+1))}function _2(e,t){return e+Math.random()*(t-e)}function y2(e){return e*(.5-Math.random())}function x2(e){e!==void 0&&(fM=e);let t=fM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function S2(e){return e*kc}function M2(e){return e*cl}function b2(e){return(e&e-1)===0&&e!==0}function E2(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function T2(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function A2(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ve(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Zn={DEG2RAD:kc,RAD2DEG:cl,generateUUID:js,clamp:re,euclideanModulo:cv,mapLinear:h2,inverseLerp:f2,lerp:Xc,damp:d2,pingpong:p2,smoothstep:m2,smootherstep:g2,randInt:v2,randFloat:_2,randFloatSpread:y2,seededRandom:x2,degToRad:S2,radToDeg:M2,isPowerOfTwo:b2,ceilPowerOfTwo:E2,floorPowerOfTwo:T2,setQuaternionFromProperEuler:A2,normalize:ve,denormalize:$i},jt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},na=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let m=1-o,u=l*f+c*p+h*g+d*x,v=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let T=Math.sqrt(y),R=Math.atan2(T,u*v);m=Math.sin(m*R)/T,o=Math.sin(o*R)/T}let _=o*v;if(l=l*m+f*_,c=c*m+p*_,h=h*m+g*_,d=d*m+x*_,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+h*d+l*p-c*f,t[n+1]=l*g+h*f+c*d-o*p,t[n+2]=c*g+h*p+o*f-l*d,t[n+3]=h*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(dM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(dM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return p0.copy(this).projectOnVector(t),this.sub(p0)}reflect(t){return this.sub(p0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},p0=new P,dM=new na,Jt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],u=s[6],v=s[1],y=s[4],_=s[7],T=s[2],R=s[5],w=s[8];return a[0]=r*x+o*v+l*T,a[3]=r*m+o*y+l*R,a[6]=r*u+o*_+l*w,a[1]=c*x+h*v+d*T,a[4]=c*m+h*y+d*R,a[7]=c*u+h*_+d*w,a[2]=f*x+p*v+g*T,a[5]=f*m+p*y+g*R,a[8]=f*u+p*_+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*a,p=c*a-r*l,g=n*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*r)*x,t[3]=f*x,t[4]=(h*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(m0.makeScale(t,n)),this}rotate(t){return this.premultiply(m0.makeRotation(-t)),this}translate(t,n){return this.premultiply(m0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},m0=new Jt;function uv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Zc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function bb(){let e=Zc("canvas");return e.style.display="block",e}var pM={};function ul(e){e in pM||(pM[e]=!0,console.warn(e))}function Eb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var mM=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gM=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w2(){let e={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ye&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ye&&(s.r=ol(s.r),s.g=ol(s.g),s.b=ol(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ra?qc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return ul("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return ul("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Nr]:{primaries:t,whitePoint:i,transfer:qc,toXYZ:mM,fromXYZ:gM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:mM,fromXYZ:gM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),e}var oe=w2();function $s(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ol(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Wo,Gf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wo===void 0&&(Wo=Zc("canvas")),Wo.width=t.width,Wo.height=t.height;let s=Wo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Wo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Zc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=$s(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($s(n[i]/255)*255):n[i]=$s(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},R2=0,hl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(g0(s[r].image)):a.push(g0(s[r]))}else a=g0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function g0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Gf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var C2=0,v0=new P,ai=class e extends ea{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Wa,s=Wa,a=En,r=ns,o=ki,l=is,c=e.DEFAULT_ANISOTROPY,h=ra){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C2++}),this.uuid=js(),this.name="",this.source=new hl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(v0).x}get height(){return this.source.getSize(v0).y}get depth(){return this.source.getSize(v0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Q0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bf:t.x=t.x-Math.floor(t.x);break;case Wa:t.x=t.x<0?0:1;break;case Ff:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bf:t.y=t.y-Math.floor(t.y);break;case Wa:t.y=t.y<0?0:1;break;case Ff:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Q0;ai.DEFAULT_ANISOTROPY=1;var _e=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,_=(p+1)/2,T=(u+1)/2,R=(h+f)/4,w=(d+x)/4,N=(g+m)/4;return y>_&&y>T?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=R/i,a=w/i):_>T?_<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(_),i=R/s,a=N/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=w/a,s=N/a),this.set(i,s,a,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this.w=re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this.w=re(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kf=class extends ea{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new _e(0,0,t,n),this.scissorTest=!1,this.viewport=new _e(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new ai(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new hl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Es=class extends kf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Jc=class extends ai{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xf=class extends ai{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ya=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ki):Ki.fromBufferAttribute(a,r),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ff.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ff.copy(i.boundingBox)),ff.applyMatrix4(t.matrixWorld),this.union(ff)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ic),df.subVectors(this.max,Ic),qo.subVectors(t.a,Ic),Yo.subVectors(t.b,Ic),Zo.subVectors(t.c,Ic),Fa.subVectors(Yo,qo),Ha.subVectors(Zo,Yo),Er.subVectors(qo,Zo);let n=[0,-Fa.z,Fa.y,0,-Ha.z,Ha.y,0,-Er.z,Er.y,Fa.z,0,-Fa.x,Ha.z,0,-Ha.x,Er.z,0,-Er.x,-Fa.y,Fa.x,0,-Ha.y,Ha.x,0,-Er.y,Er.x,0];return!_0(n,qo,Yo,Zo,df)||(n=[1,0,0,0,1,0,0,0,1],!_0(n,qo,Yo,Zo,df))?!1:(pf.crossVectors(Fa,Ha),n=[pf.x,pf.y,pf.z],_0(n,qo,Yo,Zo,df))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qs=[new P,new P,new P,new P,new P,new P,new P,new P],Ki=new P,ff=new Ya,qo=new P,Yo=new P,Zo=new P,Fa=new P,Ha=new P,Er=new P,Ic=new P,df=new P,pf=new P,Tr=new P;function _0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Tr.fromArray(e,a);let o=s.x*Math.abs(Tr.x)+s.y*Math.abs(Tr.y)+s.z*Math.abs(Tr.z),l=t.dot(Tr),c=n.dot(Tr),h=i.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var D2=new Ya,Pc=new P,y0=new P,Ur=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):D2.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pc.subVectors(t,this.center);let n=Pc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Pc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(y0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pc.copy(t.center).add(y0)),this.expandByPoint(Pc.copy(t.center).sub(y0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ys=new P,x0=new P,mf=new P,Va=new P,S0=new P,gf=new P,M0=new P,Kc=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ys)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ys.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ys.copy(this.origin).addScaledVector(this.direction,n),Ys.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){x0.copy(t).add(n).multiplyScalar(.5),mf.copy(n).sub(t).normalize(),Va.copy(this.origin).sub(x0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(mf),o=Va.dot(this.direction),l=-Va.dot(mf),c=Va.lengthSq(),h=Math.abs(1-r*r),d,f,p,g;if(h>0)if(d=r*l-o,f=r*o-l,g=a*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(x0).addScaledVector(mf,f),p}intersectSphere(t,n){Ys.subVectors(t.center,this.origin);let i=Ys.dot(this.direction),s=Ys.dot(Ys)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ys)!==null}intersectTriangle(t,n,i,s,a){S0.subVectors(n,t),gf.subVectors(i,t),M0.crossVectors(S0,gf);let r=this.direction.dot(M0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Va.subVectors(this.origin,t);let l=o*this.direction.dot(gf.crossVectors(Va,gf));if(l<0)return null;let c=o*this.direction.dot(S0.cross(Va));if(c<0||l+c>r)return null;let h=-o*Va.dot(M0);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class e{constructor(t,n,i,s,a,r,o,l,c,h,d,f,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,f,p,g,x,m)}set(t,n,i,s,a,r,o,l,c,h,d,f,p,g,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Jo.setFromMatrixColumn(t,0).length(),a=1/Jo.setFromMatrixColumn(t,1).length(),r=1/Jo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*h,p=r*d,g=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,g=c*h,x=c*d;n[0]=f+x*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-g,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,g=c*h,x=c*d;n[0]=f-x*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*h,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,p=r*d,g=o*h,x=o*d;n[0]=l*h,n[4]=g*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=g*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+g,n[10]=f-x*d}else if(t.order==="XZY"){let f=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=r*h,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N2,t,U2)}lookAt(t,n,i){let s=this.elements;return bi.subVectors(t,n),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Ga.crossVectors(i,bi),Ga.lengthSq()===0&&(Math.abs(i.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Ga.crossVectors(i,bi)),Ga.normalize(),vf.crossVectors(bi,Ga),s[0]=Ga.x,s[4]=vf.x,s[8]=bi.x,s[1]=Ga.y,s[5]=vf.y,s[9]=bi.y,s[2]=Ga.z,s[6]=vf.z,s[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],v=i[3],y=i[7],_=i[11],T=i[15],R=s[0],w=s[4],N=s[8],E=s[12],M=s[1],U=s[5],H=s[9],G=s[13],q=s[2],J=s[6],Y=s[10],nt=s[14],W=s[3],lt=s[7],ut=s[11],Dt=s[15];return a[0]=r*R+o*M+l*q+c*W,a[4]=r*w+o*U+l*J+c*lt,a[8]=r*N+o*H+l*Y+c*ut,a[12]=r*E+o*G+l*nt+c*Dt,a[1]=h*R+d*M+f*q+p*W,a[5]=h*w+d*U+f*J+p*lt,a[9]=h*N+d*H+f*Y+p*ut,a[13]=h*E+d*G+f*nt+p*Dt,a[2]=g*R+x*M+m*q+u*W,a[6]=g*w+x*U+m*J+u*lt,a[10]=g*N+x*H+m*Y+u*ut,a[14]=g*E+x*G+m*nt+u*Dt,a[3]=v*R+y*M+_*q+T*W,a[7]=v*w+y*U+_*J+T*lt,a[11]=v*N+y*H+_*Y+T*ut,a[15]=v*E+y*G+_*nt+T*Dt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+x*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*r*d-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],u=t[15],v=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,y=g*f*c-h*m*c-g*l*p+r*m*p+h*l*u-r*f*u,_=h*x*c-g*d*c+g*o*p-r*x*p-h*o*u+r*d*u,T=g*d*l-h*x*l-g*o*f+r*x*f+h*o*m-r*d*m,R=n*v+i*y+s*_+a*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=v*w,t[1]=(x*f*a-d*m*a-x*s*p+i*m*p+d*s*u-i*f*u)*w,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*u+i*l*u)*w,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*w,t[4]=y*w,t[5]=(h*m*a-g*f*a+g*s*p-n*m*p-h*s*u+n*f*u)*w,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*u-n*l*u)*w,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*p+n*l*p)*w,t[8]=_*w,t[9]=(g*d*a-h*x*a-g*i*p+n*x*p+h*i*u-n*d*u)*w,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*u+n*o*u)*w,t[11]=(h*o*a-r*d*a-h*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=T*w,t[13]=(h*x*s-g*d*s+g*i*f-n*x*f-h*i*m+n*d*m)*w,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-h*o*s+h*i*l-n*d*l-r*i*f+n*o*f)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,f=a*c,p=a*h,g=a*d,x=r*h,m=r*d,u=o*d,v=l*c,y=l*h,_=l*d,T=i.x,R=i.y,w=i.z;return s[0]=(1-(x+u))*T,s[1]=(p+_)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(p-_)*R,s[5]=(1-(f+u))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+y)*w,s[9]=(m-v)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Jo.set(s[0],s[1],s[2]).length(),r=Jo.set(s[4],s[5],s[6]).length(),o=Jo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Qi.copy(this);let c=1/a,h=1/r,d=1/o;return Qi.elements[0]*=c,Qi.elements[1]*=c,Qi.elements[2]*=c,Qi.elements[4]*=h,Qi.elements[5]*=h,Qi.elements[6]*=h,Qi.elements[8]*=d,Qi.elements[9]*=d,Qi.elements[10]*=d,n.setFromRotationMatrix(Qi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=ts,l=!1){let c=this.elements,h=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===ts)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Yc)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=ts,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===ts)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Yc)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Jo=new P,Qi=new ze,N2=new P(0,0,0),U2=new P(1,1,1),Ga=new P,vf=new P,bi=new P,vM=new ze,_M=new na,es=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return vM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return _M.setFromEuler(this),this.setFromQuaternion(_M,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};es.DEFAULT_ORDER="XYZ";var Qc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},L2=0,yM=new P,Ko=new na,Zs=new ze,_f=new P,zc=new P,O2=new P,I2=new na,xM=new P(1,0,0),SM=new P(0,1,0),MM=new P(0,0,1),bM={type:"added"},P2={type:"removed"},Qo={type:"childadded",child:null},b0={type:"childremoved",child:null},pn=class e extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L2++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new es,i=new na,s=new P(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Jt}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ko.setFromAxisAngle(t,n),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(t,n){return Ko.setFromAxisAngle(t,n),this.quaternion.premultiply(Ko),this}rotateX(t){return this.rotateOnAxis(xM,t)}rotateY(t){return this.rotateOnAxis(SM,t)}rotateZ(t){return this.rotateOnAxis(MM,t)}translateOnAxis(t,n){return yM.copy(t).applyQuaternion(this.quaternion),this.position.add(yM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(xM,t)}translateY(t){return this.translateOnAxis(SM,t)}translateZ(t){return this.translateOnAxis(MM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?_f.copy(t):_f.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zs.lookAt(zc,_f,this.up):Zs.lookAt(_f,zc,this.up),this.quaternion.setFromRotationMatrix(Zs),s&&(Zs.extractRotation(s.matrixWorld),Ko.setFromRotationMatrix(Zs),this.quaternion.premultiply(Ko.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bM),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(P2),b0.child=t,this.dispatchEvent(b0),b0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bM),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zc,t,O2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zc,I2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};pn.DEFAULT_UP=new P(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ji=new P,Js=new P,E0=new P,Ks=new P,jo=new P,$o=new P,EM=new P,T0=new P,A0=new P,w0=new P,R0=new _e,C0=new _e,D0=new _e,Qs=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),ji.subVectors(t,n),s.cross(ji);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){ji.subVectors(s,n),Js.subVectors(i,n),E0.subVectors(t,n);let r=ji.dot(ji),o=ji.dot(Js),l=ji.dot(E0),c=Js.dot(Js),h=Js.dot(E0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ks)===null?!1:Ks.x>=0&&Ks.y>=0&&Ks.x+Ks.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ks)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ks.x),l.addScaledVector(r,Ks.y),l.addScaledVector(o,Ks.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return R0.setScalar(0),C0.setScalar(0),D0.setScalar(0),R0.fromBufferAttribute(t,n),C0.fromBufferAttribute(t,i),D0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(R0,a.x),r.addScaledVector(C0,a.y),r.addScaledVector(D0,a.z),r}static isFrontFacing(t,n,i,s){return ji.subVectors(i,n),Js.subVectors(t,n),ji.cross(Js).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),Js.subVectors(this.a,this.b),ji.cross(Js).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;jo.subVectors(s,i),$o.subVectors(a,i),T0.subVectors(t,i);let l=jo.dot(T0),c=$o.dot(T0);if(l<=0&&c<=0)return n.copy(i);A0.subVectors(t,s);let h=jo.dot(A0),d=$o.dot(A0);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(jo,r);w0.subVectors(t,a);let p=jo.dot(w0),g=$o.dot(w0);if(g>=0&&p<=g)return n.copy(a);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector($o,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return EM.subVectors(a,s),o=(d-h)/(d-h+(p-g)),n.copy(s).addScaledVector(EM,o);let u=1/(m+x+f);return r=x*u,o=f*u,n.copy(i).addScaledVector(jo,r).addScaledVector($o,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},yf={h:0,s:0,l:0};function N0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Yt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=oe.workingColorSpace){return this.r=t,this.g=n,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=oe.workingColorSpace){if(t=cv(t,1),n=re(n,0,1),i=re(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=N0(r,a,t+1/3),this.g=N0(r,a,t),this.b=N0(r,a,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,n=sn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=sn){let i=Tb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}copyLinearToSRGB(t){return this.r=ol(t.r),this.g=ol(t.g),this.b=ol(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return oe.workingToColorSpace(Ln.copy(this),t),Math.round(re(Ln.r*255,0,255))*65536+Math.round(re(Ln.g*255,0,255))*256+Math.round(re(Ln.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=oe.workingColorSpace){oe.workingToColorSpace(Ln.copy(this),n);let i=Ln.r,s=Ln.g,a=Ln.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=oe.workingColorSpace){return oe.workingToColorSpace(Ln.copy(this),n),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=sn){oe.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,i=Ln.g,s=Ln.b;return t!==sn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+n,ka.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ka),t.getHSL(yf);let i=Xc(ka.h,yf.h,n),s=Xc(ka.s,yf.s,n),a=Xc(ka.l,yf.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new Yt;Yt.NAMES=Tb;var z2=0,Ts=class extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Cr,this.side=ta,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=zf,this.blendEquation=qa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==ta&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pf&&(i.blendSrc=this.blendSrc),this.blendDst!==zf&&(i.blendDst=this.blendDst),this.blendEquation!==qa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},In=class extends Ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var je=new P,xf=new jt,B2=0,fn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Vf,this.updateRanges=[],this.gpuType=As,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xf.fromBufferAttribute(this,n),xf.applyMatrix3(t),this.setXY(n,xf.x,xf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)je.fromBufferAttribute(this,n),je.applyMatrix3(t),this.setXYZ(n,je.x,je.y,je.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)je.fromBufferAttribute(this,n),je.applyMatrix4(t),this.setXYZ(n,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)je.fromBufferAttribute(this,n),je.applyNormalMatrix(t),this.setXYZ(n,je.x,je.y,je.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)je.fromBufferAttribute(this,n),je.transformDirection(t),this.setXYZ(n,je.x,je.y,je.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=$i(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=$i(n,this.array)),n}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=$i(n,this.array)),n}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=$i(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=$i(n,this.array)),n}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array),a=ve(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vf&&(t.usage=this.usage),t}};var jc=class extends fn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var $c=class extends fn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var On=class extends fn{constructor(t,n,i){super(new Float32Array(t),n,i)}},F2=0,Fi=new ze,U0=new pn,tl=new P,Ei=new Ya,Bc=new Ya,hn=new P,Yn=class e extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F2++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uv(t)?$c:jc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Jt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,n,i){return Fi.makeTranslation(t,n,i),this.applyMatrix4(Fi),this}scale(t,n,i){return Fi.makeScale(t,n,i),this.applyMatrix4(Fi),this}lookAt(t){return U0.lookAt(t),U0.updateMatrix(),this.applyMatrix4(U0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tl).negate(),this.translate(tl.x,tl.y,tl.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new On(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Bc.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Ei.min,Bc.min),Ei.expandByPoint(hn),hn.addVectors(Ei.max,Bc.max),Ei.expandByPoint(hn)):(Ei.expandByPoint(Bc.min),Ei.expandByPoint(Bc.max))}Ei.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)hn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(hn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(tl.fromBufferAttribute(t,c),hn.add(tl)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new P,l[N]=new P;let c=new P,h=new P,d=new P,f=new jt,p=new jt,g=new jt,x=new P,m=new P;function u(N,E,M){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(a,N),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),o[N].add(x),o[E].add(x),o[M].add(x),l[N].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let N=0,E=v.length;N<E;++N){let M=v[N],U=M.start,H=M.count;for(let G=U,q=U+H;G<q;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let y=new P,_=new P,T=new P,R=new P;function w(N){T.fromBufferAttribute(s,N),R.copy(T);let E=o[N];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),_.crossVectors(R,E);let U=_.dot(l[N])<0?-1:1;r.setXYZW(N,y.x,y.y,y.z,U)}for(let N=0,E=v.length;N<E;++N){let M=v[N],U=M.start,H=M.count;for(let G=U,q=U+H;G<q;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)hn.fromBufferAttribute(t,n),hn.normalize(),t.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new fn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},TM=new ze,Ar=new Kc,Sf=new Ur,AM=new P,Mf=new P,bf=new P,Ef=new P,L0=new P,Tf=new P,wM=new P,Af=new P,xe=class extends pn{constructor(t=new Yn,n=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Tf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(L0.fromBufferAttribute(d,t),r?Tf.addScaledVector(L0,h):Tf.addScaledVector(L0.sub(n),h))}n.add(Tf)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sf.copy(i.boundingSphere),Sf.applyMatrix4(a),Ar.copy(t.ray).recast(t.near),!(Sf.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Sf,AM)===null||Ar.origin.distanceToSquared(AM)>(t.far-t.near)**2))&&(TM.copy(a).invert(),Ar.copy(t.ray).applyMatrix4(TM),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ar)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=r[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,T=y;_<T;_+=3){let R=o.getX(_),w=o.getX(_+1),N=o.getX(_+2);s=wf(this,u,t,i,c,h,d,R,w,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let v=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=wf(this,r,t,i,c,h,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=r[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,T=y;_<T;_+=3){let R=_,w=_+1,N=_+2;s=wf(this,u,t,i,c,h,d,R,w,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let v=m,y=m+1,_=m+2;s=wf(this,r,t,i,c,h,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function H2(e,t,n,i,s,a,r,o){let l;if(t.side===Tn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ta,o),l===null)return null;Af.copy(o),Af.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Af);return c<n.near||c>n.far?null:{distance:c,point:Af.clone(),object:e}}function wf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Mf),e.getVertexPosition(l,bf),e.getVertexPosition(c,Ef);let h=H2(e,t,n,i,Mf,bf,Ef,wM);if(h){let d=new P;Qs.getBarycoord(wM,Mf,bf,Ef,d),s&&(h.uv=Qs.getInterpolatedAttribute(s,o,l,c,d,new jt)),a&&(h.uv1=Qs.getInterpolatedAttribute(a,o,l,c,d,new jt)),r&&(h.normal=Qs.getInterpolatedAttribute(r,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};Qs.getNormal(Mf,bf,Ef,f.normal),h.face=f,h.barycoord=d}return h}var Za=class e extends Yn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(d,2));function g(x,m,u,v,y,_,T,R,w,N,E){let M=_/w,U=T/N,H=_/2,G=T/2,q=R/2,J=w+1,Y=N+1,nt=0,W=0,lt=new P;for(let ut=0;ut<Y;ut++){let Dt=ut*U-G;for(let Wt=0;Wt<J;Wt++){let rt=Wt*M-H;lt[x]=rt*v,lt[m]=Dt*y,lt[u]=q,c.push(lt.x,lt.y,lt.z),lt[x]=0,lt[m]=0,lt[u]=R>0?1:-1,h.push(lt.x,lt.y,lt.z),d.push(Wt/w),d.push(1-ut/N),nt+=1}}for(let ut=0;ut<N;ut++)for(let Dt=0;Dt<w;Dt++){let Wt=f+Dt+J*ut,rt=f+Dt+J*(ut+1),Ht=f+(Dt+1)+J*(ut+1),qt=f+(Dt+1)+J*ut;l.push(Wt,rt,qt),l.push(rt,Ht,qt),W+=6}o.addGroup(p,W,E),p+=W,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function zn(e){let t={};for(let n=0;n<e.length;n++){let i=Fr(e[n]);for(let s in i)t[s]=i[s]}return t}function V2(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function hv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Ab={clone:Fr,merge:zn},G2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends Ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G2,this.fragmentShader=k2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=V2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},tu=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ts,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xa=new P,RM=new jt,CM=new jt,bn=class extends tu{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,n){return this.getViewBounds(t,RM,CM),n.subVectors(CM,RM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},el=-90,nl=1,Wf=class extends pn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(el,nl,t,n);s.layers=this.layers,this.add(s);let a=new bn(el,nl,t,n);a.layers=this.layers,this.add(a);let r=new bn(el,nl,t,n);r.layers=this.layers,this.add(r);let o=new bn(el,nl,t,n);o.layers=this.layers,this.add(o);let l=new bn(el,nl,t,n);l.layers=this.layers,this.add(l);let c=new bn(el,nl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===ts)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},eu=class extends ai{constructor(t=[],n=zr,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qf=class extends Es{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new eu(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Za(5,5,5),a=new ri({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:sa});a.uniforms.tEquirect.value=n;let r=new xe(s,a),o=n.minFilter;return n.minFilter===ns&&(n.minFilter=En),new Wf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Hi=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},X2={type:"move"},fl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var nu=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Yf=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Vf,this.updateRanges=[],this.version=0,this.uuid=js()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=js()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=js()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qn=new P,iu=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)qn.fromBufferAttribute(this,n),qn.applyMatrix4(t),this.setXYZ(n,qn.x,qn.y,qn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)qn.fromBufferAttribute(this,n),qn.applyNormalMatrix(t),this.setXYZ(n,qn.x,qn.y,qn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)qn.fromBufferAttribute(this,n),qn.transformDirection(t),this.setXYZ(n,qn.x,qn.y,qn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=$i(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=$i(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=$i(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=$i(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=$i(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array),a=ve(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return new fn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dl=class extends Ts{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},il,Fc=new P,sl=new P,al=new P,rl=new jt,Hc=new jt,wb=new ze,Rf=new P,Vc=new P,Cf=new P,DM=new jt,O0=new jt,NM=new jt,pl=class extends pn{constructor(t=new dl){if(super(),this.isSprite=!0,this.type="Sprite",il===void 0){il=new Yn;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Yf(n,5);il.setIndex([0,1,2,0,2,3]),il.setAttribute("position",new iu(i,3,0,!1)),il.setAttribute("uv",new iu(i,2,3,!1))}this.geometry=il,this.material=t,this.center=new jt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sl.setFromMatrixScale(this.matrixWorld),wb.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),al.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sl.multiplyScalar(-al.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let r=this.center;Df(Rf.set(-.5,-.5,0),al,r,sl,s,a),Df(Vc.set(.5,-.5,0),al,r,sl,s,a),Df(Cf.set(.5,.5,0),al,r,sl,s,a),DM.set(0,0),O0.set(1,0),NM.set(1,1);let o=t.ray.intersectTriangle(Rf,Vc,Cf,!1,Fc);if(o===null&&(Df(Vc.set(-.5,.5,0),al,r,sl,s,a),O0.set(0,1),o=t.ray.intersectTriangle(Rf,Cf,Vc,!1,Fc),o===null))return;let l=t.ray.origin.distanceTo(Fc);l<t.near||l>t.far||n.push({distance:l,point:Fc.clone(),uv:Qs.getInterpolation(Fc,Rf,Vc,Cf,DM,O0,NM,new jt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Df(e,t,n,i,s,a){rl.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Hc.x=a*rl.x-s*rl.y,Hc.y=s*rl.x+a*rl.y):Hc.copy(rl),e.copy(t),e.x+=Hc.x,e.y+=Hc.y,e.applyMatrix4(wb)}var I0=new P,W2=new P,q2=new Jt,bs=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=I0.subVectors(i,n).cross(W2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(I0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||q2.getNormalMatrix(t),s=this.coplanarPoint(I0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wr=new Ur,Y2=new jt(.5,.5),Nf=new P,ml=class{constructor(t=new bs,n=new bs,i=new bs,s=new bs,a=new bs,r=new bs){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ts,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],p=a[7],g=a[8],x=a[9],m=a[10],u=a[11],v=a[12],y=a[13],_=a[14],T=a[15];if(s[0].setComponents(c-r,p-h,u-g,T-v).normalize(),s[1].setComponents(c+r,p+h,u+g,T+v).normalize(),s[2].setComponents(c+o,p+d,u+x,T+y).normalize(),s[3].setComponents(c-o,p-d,u-x,T-y).normalize(),i)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,p-f,u-m,T-_).normalize();else if(s[4].setComponents(c-l,p-f,u-m,T-_).normalize(),n===ts)s[5].setComponents(c+l,p+f,u+m,T+_).normalize();else if(n===Yc)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(t){wr.center.set(0,0,0);let n=Y2.distanceTo(t.center);return wr.radius=.7071067811865476+n,wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Nf.x=s.normal.x>0?t.max.x:t.min.x,Nf.y=s.normal.y>0?t.max.y:t.min.y,Nf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gl=class extends Ts{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},UM=new ze,G0=new Kc,Uf=new Ur,Lf=new P,vl=class extends pn{constructor(t=new Yn,n=new gl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uf.copy(i.boundingSphere),Uf.applyMatrix4(s),Uf.radius+=a,t.ray.intersectsSphere(Uf)===!1)return;UM.copy(s).invert(),G0.copy(t.ray).applyMatrix4(UM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);Lf.fromBufferAttribute(d,m),LM(Lf,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=f,x=p;g<x;g++)Lf.fromBufferAttribute(d,g),LM(Lf,g,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function LM(e,t,n,i,s,a,r){let o=G0.distanceSqToPoint(e);if(o<n){let l=new P;G0.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Vi=class extends ai{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},su=class extends ai{constructor(t,n,i=Qa,s,a,r,o=dn,l=dn,c,h=ll,d=1){if(h!==ll&&h!==Ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},au=class extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ru=class e extends Yn{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],d=[],f=[],p=[],g=0,x=[],m=i/2,u=0;v(),r===!1&&(t>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new On(d,3)),this.setAttribute("normal",new On(f,3)),this.setAttribute("uv",new On(p,2));function v(){let _=new P,T=new P,R=0,w=(n-t)/i;for(let N=0;N<=a;N++){let E=[],M=N/a,U=M*(n-t)+t;for(let H=0;H<=s;H++){let G=H/s,q=G*l+o,J=Math.sin(q),Y=Math.cos(q);T.x=U*J,T.y=-M*i+m,T.z=U*Y,d.push(T.x,T.y,T.z),_.set(J,w,Y).normalize(),f.push(_.x,_.y,_.z),p.push(G,1-M),E.push(g++)}x.push(E)}for(let N=0;N<s;N++)for(let E=0;E<a;E++){let M=x[E][N],U=x[E+1][N],H=x[E+1][N+1],G=x[E][N+1];(t>0||E!==0)&&(h.push(M,U,G),R+=3),(n>0||E!==a-1)&&(h.push(U,H,G),R+=3)}c.addGroup(u,R,0),u+=R}function y(_){let T=g,R=new jt,w=new P,N=0,E=_===!0?t:n,M=_===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let U=g;for(let H=0;H<=s;H++){let q=H/s*l+o,J=Math.cos(q),Y=Math.sin(q);w.x=E*Y,w.y=m*M,w.z=E*J,d.push(w.x,w.y,w.z),f.push(0,M,0),R.x=J*.5+.5,R.y=Y*.5*M+.5,p.push(R.x,R.y),g++}for(let H=0;H<s;H++){let G=T+H,q=U+H;_===!0?h.push(q,q+1,G):h.push(q+1,q,G),N+=3}c.addGroup(u,N,_===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Pn=class e extends Yn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=n/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let v=u*f-r;for(let y=0;y<c;y++){let _=y*d-a;g.push(_,-v,0),x.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){let y=v+c*u,_=v+c*(u+1),T=v+1+c*(u+1),R=v+1+c*u;p.push(y,_,R),p.push(_,T,R)}this.setIndex(p),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(x,3)),this.setAttribute("uv",new On(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var _l=class e extends Yn{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],d=new P,f=new P,p=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){let v=[],y=u/i,_=0;u===0&&r===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let T=0;T<=n;T++){let R=T/n;d.x=-t*Math.cos(s+R*a)*Math.sin(r+y*o),d.y=t*Math.cos(r+y*o),d.z=t*Math.sin(s+R*a)*Math.sin(r+y*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(R+_,1-y),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){let y=h[u][v+1],_=h[u][v],T=h[u+1][v],R=h[u+1][v+1];(u!==0||r>0)&&p.push(y,_,R),(u!==i-1||l<Math.PI)&&p.push(_,T,R)}this.setIndex(p),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(x,3)),this.setAttribute("uv",new On(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Lr=class extends Ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rv,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Zf=class extends Ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jf=class extends Ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Of(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Z2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Or=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kf=class extends Or{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:B0,endingEnd:B0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case F0:a=t,o=2*n-i;break;case H0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case F0:r=t,l=2*i-n;break;case H0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let T=0;T!==o;++T)a[T]=u*r[h+T]+v*r[c+T]+y*r[l+T]+_*r[d+T];return a}},Qf=class extends Or{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*h;return a}},jf=class extends Or{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ti=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Of(n,this.TimeBufferType),this.values=Of(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Of(t.times,Array),values:Of(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new jf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Wc:n=this.InterpolantFactoryMethodDiscrete;break;case Hf:n=this.InterpolantFactoryMethodLinear;break;case If:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wc;case this.InterpolantFactoryMethodLinear:return Hf;case this.InterpolantFactoryMethodSmooth:return If}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&Z2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===If,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let x=n[d+g];if(x!==n[f+g]||x!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Hf;var Ja=class extends Ti{constructor(t,n,i){super(t,n,i)}};Ja.prototype.ValueTypeName="bool";Ja.prototype.ValueBufferType=Array;Ja.prototype.DefaultInterpolation=Wc;Ja.prototype.InterpolantFactoryMethodLinear=void 0;Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var $f=class extends Ti{constructor(t,n,i,s){super(t,n,i,s)}};$f.prototype.ValueTypeName="color";var td=class extends Ti{constructor(t,n,i,s){super(t,n,i,s)}};td.prototype.ValueTypeName="number";var ed=class extends Or{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)na.slerpFlat(a,0,r,c-o,r,c,l);return a}},ou=class extends Ti{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new ed(this.times,this.values,this.getValueSize(),t)}};ou.prototype.ValueTypeName="quaternion";ou.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Ti{constructor(t,n,i){super(t,n,i)}};Ka.prototype.ValueTypeName="string";Ka.prototype.ValueBufferType=Array;Ka.prototype.DefaultInterpolation=Wc;Ka.prototype.InterpolantFactoryMethodLinear=void 0;Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var nd=class extends Ti{constructor(t,n,i,s){super(t,n,i,s)}};nd.prototype.ValueTypeName="vector";var id=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Rb=new id,sd=class{constructor(t){this.manager=t!==void 0?t:Rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};sd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends pn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},lu=class extends Ir{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},P0=new ze,OM=new P,IM=new P,ad=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=is,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;OM.setFromMatrixPosition(t.matrixWorld),n.position.copy(OM),IM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(IM),n.updateMatrixWorld(),P0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(P0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var PM=new ze,Gc=new P,z0=new P,k0=class extends ad{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Gc.setFromMatrixPosition(t.matrixWorld),i.position.copy(Gc),z0.copy(i.position),z0.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(z0),i.updateMatrixWorld(),s.makeTranslation(-Gc.x,-Gc.y,-Gc.z),PM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(PM,i.coordinateSystem,i.reversedDepth)}},ia=class extends Ir{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new k0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cu=class extends tu{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},X0=class extends ad{constructor(){super(new cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uu=class extends Ir{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new X0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},hu=class extends Ir{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var rd=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var fv="\\[\\]\\.:\\/",J2=new RegExp("["+fv+"]","g"),dv="[^"+fv+"]",K2="[^"+fv.replace("\\.","")+"]",Q2=/((?:WC+[\/:])*)/.source.replace("WC",dv),j2=/(WCOD+)?/.source.replace("WCOD",K2),$2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dv),tR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dv),eR=new RegExp("^"+Q2+j2+$2+tR+"$"),nR=["material","materials","bones","map"],W0=class{constructor(t,n,i){let s=i||Oe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Oe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J2,"")}static parseTrackName(t){let n=eR.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);nR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=W0;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lU=new Float32Array(1);function pv(e,t,n,i){let s=iR(i);switch(n){case nv:return e*t;case sv:return e*t/s.components*s.byteLength;case Sd:return e*t/s.components*s.byteLength;case av:return e*t*2/s.components*s.byteLength;case Md:return e*t*2/s.components*s.byteLength;case iv:return e*t*3/s.components*s.byteLength;case ki:return e*t*4/s.components*s.byteLength;case bd:return e*t*4/s.components*s.byteLength;case pu:case mu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gu:case vu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Td:case wd:return Math.max(e,16)*Math.max(t,8)/4;case Ed:case Ad:return Math.max(e,8)*Math.max(t,8)/2;case Rd:case Cd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Dd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Od:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Id:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case zd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Gd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case kd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Wd:case qd:case Yd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Zd:case Jd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Kd:case Qd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iR(e){switch(e){case is:case j0:return{byteLength:1,components:1};case yl:case $0:case xl:return{byteLength:2,components:1};case yd:case xd:return{byteLength:2,components:4};case Qa:case _d:case As:return{byteLength:4,components:1};case tv:case ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function jb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function aR(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var rR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oR=`#ifdef USE_ALPHAHASH
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
#endif`,lR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fR=`#ifdef USE_AOMAP
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
#endif`,dR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pR=`#ifdef USE_BATCHING
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
#endif`,mR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_R=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yR=`#ifdef USE_IRIDESCENCE
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
#endif`,xR=`#ifdef USE_BUMPMAP
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
#endif`,SR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CR=`#define PI 3.141592653589793
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
} // validated`,DR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NR=`vec3 transformedNormal = objectNormal;
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
#endif`,UR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PR="gl_FragColor = linearToOutputTexel( gl_FragColor );",zR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BR=`#ifdef USE_ENVMAP
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
#endif`,FR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,HR=`#ifdef USE_ENVMAP
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
#endif`,VR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GR=`#ifdef USE_ENVMAP
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
#endif`,kR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YR=`#ifdef USE_GRADIENTMAP
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
}`,ZR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QR=`uniform bool receiveShadow;
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
#endif`,jR=`#ifdef USE_ENVMAP
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
#endif`,$R=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iC=`PhysicalMaterial material;
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
#endif`,sC=`struct PhysicalMaterial {
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
}`,aC=`
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
#endif`,rC=`#if defined( RE_IndirectDiffuse )
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
#endif`,oC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mC=`#if defined( USE_POINTS_UV )
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
#endif`,gC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_C=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SC=`#ifdef USE_MORPHTARGETS
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
#endif`,MC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RC=`#ifdef USE_NORMALMAP
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
#endif`,CC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XC=`float getShadowMask() {
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
}`,WC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qC=`#ifdef USE_SKINNING
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
#endif`,YC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZC=`#ifdef USE_SKINNING
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
#endif`,JC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$C=`#ifdef USE_TRANSMISSION
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
#endif`,t3=`#ifdef USE_TRANSMISSION
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
#endif`,e3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r3=`uniform sampler2D t2D;
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
}`,o3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h3=`#include <common>
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
}`,f3=`#if DEPTH_PACKING == 3200
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
}`,d3=`#define DISTANCE
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
}`,p3=`#define DISTANCE
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
}`,m3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v3=`uniform float scale;
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
}`,_3=`uniform vec3 diffuse;
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
}`,y3=`#include <common>
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
}`,x3=`uniform vec3 diffuse;
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
}`,S3=`#define LAMBERT
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
}`,M3=`#define LAMBERT
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
}`,b3=`#define MATCAP
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
}`,E3=`#define MATCAP
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
}`,T3=`#define NORMAL
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
}`,A3=`#define NORMAL
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
}`,w3=`#define PHONG
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
}`,R3=`#define PHONG
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
}`,C3=`#define STANDARD
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
}`,D3=`#define STANDARD
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
}`,N3=`#define TOON
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
}`,U3=`#define TOON
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
}`,L3=`uniform float size;
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
}`,O3=`uniform vec3 diffuse;
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
}`,I3=`#include <common>
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
}`,P3=`uniform vec3 color;
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
}`,z3=`uniform float rotation;
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
}`,B3=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:rR,alphahash_pars_fragment:oR,alphamap_fragment:lR,alphamap_pars_fragment:cR,alphatest_fragment:uR,alphatest_pars_fragment:hR,aomap_fragment:fR,aomap_pars_fragment:dR,batching_pars_vertex:pR,batching_vertex:mR,begin_vertex:gR,beginnormal_vertex:vR,bsdfs:_R,iridescence_fragment:yR,bumpmap_pars_fragment:xR,clipping_planes_fragment:SR,clipping_planes_pars_fragment:MR,clipping_planes_pars_vertex:bR,clipping_planes_vertex:ER,color_fragment:TR,color_pars_fragment:AR,color_pars_vertex:wR,color_vertex:RR,common:CR,cube_uv_reflection_fragment:DR,defaultnormal_vertex:NR,displacementmap_pars_vertex:UR,displacementmap_vertex:LR,emissivemap_fragment:OR,emissivemap_pars_fragment:IR,colorspace_fragment:PR,colorspace_pars_fragment:zR,envmap_fragment:BR,envmap_common_pars_fragment:FR,envmap_pars_fragment:HR,envmap_pars_vertex:VR,envmap_physical_pars_fragment:jR,envmap_vertex:GR,fog_vertex:kR,fog_pars_vertex:XR,fog_fragment:WR,fog_pars_fragment:qR,gradientmap_pars_fragment:YR,lightmap_pars_fragment:ZR,lights_lambert_fragment:JR,lights_lambert_pars_fragment:KR,lights_pars_begin:QR,lights_toon_fragment:$R,lights_toon_pars_fragment:tC,lights_phong_fragment:eC,lights_phong_pars_fragment:nC,lights_physical_fragment:iC,lights_physical_pars_fragment:sC,lights_fragment_begin:aC,lights_fragment_maps:rC,lights_fragment_end:oC,logdepthbuf_fragment:lC,logdepthbuf_pars_fragment:cC,logdepthbuf_pars_vertex:uC,logdepthbuf_vertex:hC,map_fragment:fC,map_pars_fragment:dC,map_particle_fragment:pC,map_particle_pars_fragment:mC,metalnessmap_fragment:gC,metalnessmap_pars_fragment:vC,morphinstance_vertex:_C,morphcolor_vertex:yC,morphnormal_vertex:xC,morphtarget_pars_vertex:SC,morphtarget_vertex:MC,normal_fragment_begin:bC,normal_fragment_maps:EC,normal_pars_fragment:TC,normal_pars_vertex:AC,normal_vertex:wC,normalmap_pars_fragment:RC,clearcoat_normal_fragment_begin:CC,clearcoat_normal_fragment_maps:DC,clearcoat_pars_fragment:NC,iridescence_pars_fragment:UC,opaque_fragment:LC,packing:OC,premultiplied_alpha_fragment:IC,project_vertex:PC,dithering_fragment:zC,dithering_pars_fragment:BC,roughnessmap_fragment:FC,roughnessmap_pars_fragment:HC,shadowmap_pars_fragment:VC,shadowmap_pars_vertex:GC,shadowmap_vertex:kC,shadowmask_pars_fragment:XC,skinbase_vertex:WC,skinning_pars_vertex:qC,skinning_vertex:YC,skinnormal_vertex:ZC,specularmap_fragment:JC,specularmap_pars_fragment:KC,tonemapping_fragment:QC,tonemapping_pars_fragment:jC,transmission_fragment:$C,transmission_pars_fragment:t3,uv_pars_fragment:e3,uv_pars_vertex:n3,uv_vertex:i3,worldpos_vertex:s3,background_vert:a3,background_frag:r3,backgroundCube_vert:o3,backgroundCube_frag:l3,cube_vert:c3,cube_frag:u3,depth_vert:h3,depth_frag:f3,distanceRGBA_vert:d3,distanceRGBA_frag:p3,equirect_vert:m3,equirect_frag:g3,linedashed_vert:v3,linedashed_frag:_3,meshbasic_vert:y3,meshbasic_frag:x3,meshlambert_vert:S3,meshlambert_frag:M3,meshmatcap_vert:b3,meshmatcap_frag:E3,meshnormal_vert:T3,meshnormal_frag:A3,meshphong_vert:w3,meshphong_frag:R3,meshphysical_vert:C3,meshphysical_frag:D3,meshtoon_vert:N3,meshtoon_frag:U3,points_vert:L3,points_frag:O3,shadow_vert:I3,shadow_frag:P3,sprite_vert:z3,sprite_frag:B3},ft={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ws={basic:{uniforms:zn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:zn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Yt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:zn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:zn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:zn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Yt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:zn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:zn([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:zn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:zn([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:zn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:zn([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:zn([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:zn([ft.lights,ft.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ws.physical={uniforms:zn([ws.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var jd={r:0,b:0,g:0},Hr=new es,F3=new ze;function H3(e,t,n,i,s,a,r){let o=new Yt(0),l=a===!0?0:1,c,h,d=null,f=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:t).get(_)),_}function x(y){let _=!1,T=g(y);T===null?u(o,l):T&&T.isColor&&(u(T,1),_=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,_){let T=g(_);T&&(T.isCubeTexture||T.mapping===fu)?(h===void 0&&(h=new xe(new Za(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Fr(ws.backgroundCube.uniforms),vertexShader:ws.backgroundCube.vertexShader,fragmentShader:ws.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hr.copy(_.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F3.makeRotationFromEuler(Hr)),h.material.toneMapped=oe.getTransfer(T.colorSpace)!==ye,(d!==T||f!==T.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,p=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new xe(new Pn(2,2),new ri({name:"BackgroundMaterial",uniforms:Fr(ws.background.uniforms),vertexShader:ws.background.vertexShader,fragmentShader:ws.background.fragmentShader,side:ta,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=oe.getTransfer(T.colorSpace)!==ye,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,_){y.getRGB(jd,hv(e)),i.buffers.color.setClear(jd.r,jd.g,jd.b,_,r)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:x,addToRenderList:m,dispose:v}}function V3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(M,U,H,G,q){let J=!1,Y=d(G,H,U);a!==Y&&(a=Y,c(a.object)),J=p(M,G,H,q),J&&g(M,G,H,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,_(M,U,H,G),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function d(M,U,H){let G=H.wireframe===!0,q=i[M.id];q===void 0&&(q={},i[M.id]=q);let J=q[U.id];J===void 0&&(J={},q[U.id]=J);let Y=J[G];return Y===void 0&&(Y=f(l()),J[G]=Y),Y}function f(M){let U=[],H=[],G=[];for(let q=0;q<n;q++)U[q]=0,H[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:G,object:M,attributes:{},index:null}}function p(M,U,H,G){let q=a.attributes,J=U.attributes,Y=0,nt=H.getAttributes();for(let W in nt)if(nt[W].location>=0){let ut=q[W],Dt=J[W];if(Dt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Dt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Dt=M.instanceColor)),ut===void 0||ut.attribute!==Dt||Dt&&ut.data!==Dt.data)return!0;Y++}return a.attributesNum!==Y||a.index!==G}function g(M,U,H,G){let q={},J=U.attributes,Y=0,nt=H.getAttributes();for(let W in nt)if(nt[W].location>=0){let ut=J[W];ut===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));let Dt={};Dt.attribute=ut,ut&&ut.data&&(Dt.data=ut.data),q[W]=Dt,Y++}a.attributes=q,a.attributesNum=Y,a.index=G}function x(){let M=a.newAttributes;for(let U=0,H=M.length;U<H;U++)M[U]=0}function m(M){u(M,0)}function u(M,U){let H=a.newAttributes,G=a.enabledAttributes,q=a.attributeDivisors;H[M]=1,G[M]===0&&(e.enableVertexAttribArray(M),G[M]=1),q[M]!==U&&(e.vertexAttribDivisor(M,U),q[M]=U)}function v(){let M=a.newAttributes,U=a.enabledAttributes;for(let H=0,G=U.length;H<G;H++)U[H]!==M[H]&&(e.disableVertexAttribArray(H),U[H]=0)}function y(M,U,H,G,q,J,Y){Y===!0?e.vertexAttribIPointer(M,U,H,q,J):e.vertexAttribPointer(M,U,H,G,q,J)}function _(M,U,H,G){x();let q=G.attributes,J=H.getAttributes(),Y=U.defaultAttributeValues;for(let nt in J){let W=J[nt];if(W.location>=0){let lt=q[nt];if(lt===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){let ut=lt.normalized,Dt=lt.itemSize,Wt=t.get(lt);if(Wt===void 0)continue;let rt=Wt.buffer,Ht=Wt.type,qt=Wt.bytesPerElement,Q=Ht===e.INT||Ht===e.UNSIGNED_INT||lt.gpuType===_d;if(lt.isInterleavedBufferAttribute){let tt=lt.data,gt=tt.stride,Ut=lt.offset;if(tt.isInstancedInterleavedBuffer){for(let At=0;At<W.locationSize;At++)u(W.location+At,tt.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let At=0;At<W.locationSize;At++)m(W.location+At);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let At=0;At<W.locationSize;At++)y(W.location+At,Dt/W.locationSize,Ht,ut,gt*qt,(Ut+Dt/W.locationSize*At)*qt,Q)}else{if(lt.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)u(W.location+tt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let tt=0;tt<W.locationSize;tt++)m(W.location+tt);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let tt=0;tt<W.locationSize;tt++)y(W.location+tt,Dt/W.locationSize,Ht,ut,Dt*qt,Dt/W.locationSize*tt*qt,Q)}}else if(Y!==void 0){let ut=Y[nt];if(ut!==void 0)switch(ut.length){case 2:e.vertexAttrib2fv(W.location,ut);break;case 3:e.vertexAttrib3fv(W.location,ut);break;case 4:e.vertexAttrib4fv(W.location,ut);break;default:e.vertexAttrib1fv(W.location,ut)}}}}v()}function T(){N();for(let M in i){let U=i[M];for(let H in U){let G=U[H];for(let q in G)h(G[q].object),delete G[q];delete U[H]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let H in U){let G=U[H];for(let q in G)h(G[q].object),delete G[q];delete U[H]}delete i[M.id]}function w(M){for(let U in i){let H=i[U];if(H[M.id]===void 0)continue;let G=H[M.id];for(let q in G)h(G[q].object),delete G[q];delete H[M.id]}}function N(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function G3(e,t,n){let i;function s(c){i=c}function a(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function k3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==ki&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let N=w===xl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==is&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==As&&!N)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:T,maxSamples:R}}function X3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new bs,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let v=a?0:i,y=v*4,_=u.clippingState||null;l.value=_,_=h(g,f,y,p);for(let T=0;T!==y;++T)_[T]=n[T];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,_=p;y!==x;++y,_+=4)r.copy(d[y]).applyMatrix4(v,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function W3(e){let t=new WeakMap;function n(r,o){return o===md?r.mapping=zr:o===gd&&(r.mapping=Br),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===md||o===gd)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new qf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var El=4,Cb=[.125,.215,.35,.446,.526,.582],kr=20,mv=new cu,Db=new Yt,gv=null,vv=0,_v=0,yv=!1,Gr=(1+Math.sqrt(5))/2,bl=1/Gr,Nb=[new P(-Gr,bl,0),new P(Gr,bl,0),new P(-bl,0,Gr),new P(bl,0,Gr),new P(0,Gr,-bl),new P(0,Gr,bl),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],q3=new P,ep=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=q3}=a;gv=this._renderer.getRenderTarget(),vv=this._renderer.getActiveCubeFace(),_v=this._renderer.getActiveMipmapLevel(),yv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ob(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gv,vv,_v),this._renderer.xr.enabled=yv,t.scissorTest=!1,$d(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===zr||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gv=this._renderer.getRenderTarget(),vv=this._renderer.getActiveCubeFace(),_v=this._renderer.getActiveMipmapLevel(),yv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:xl,format:ki,colorSpace:Nr,depthBuffer:!1},s=Ub(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ub(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y3(a)),this._blurMaterial=Z3(a,t,n)}return s}_compileMaterial(t){let n=new xe(this._lodPlanes[0],t);this._renderer.compile(n,mv)}_sceneToCubeUV(t,n,i,s,a){let l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Db),d.toneMapping=aa,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new In({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),m=new xe(new Za,x),u=!1,v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,u=!0):(x.color.copy(Db),u=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[y],a.y,a.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[y]));let T=this._cubeSize;$d(s,_*T,y>2?T:0,T,T),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===zr||t.mapping===Br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ob()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new xe(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;$d(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,mv)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Nb[(s-a-1)%Nb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new xe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*kr-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):kr;m>kr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);let u=[],v=0;for(let w=0;w<kr;++w){let N=w/x,E=Math.exp(-N*N/2);u.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let _=this._sizeLods[s],T=3*_*(s>y-El?s-y+El:0),R=4*(this._cubeSize-_);$d(n,T,R,3*_,2*_),l.setRenderTarget(n),l.render(d,mv)}};function Y3(e){let t=[],n=[],i=[],s=e,a=e-El+1+Cb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-El?l=Cb[r-e+El-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,v=new Float32Array(x*g*p),y=new Float32Array(m*g*p),_=new Float32Array(u*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,N=R>2?0:-1,E=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];v.set(E,x*g*R),y.set(f,m*g*R);let M=[R,R,R,R,R,R];_.set(M,u*g*R)}let T=new Yn;T.setAttribute("position",new fn(v,x)),T.setAttribute("uv",new fn(y,m)),T.setAttribute("faceIndex",new fn(_,u)),t.push(T),s>El&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ub(e,t,n){let i=new Es(e,t,n);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $d(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function Z3(e,t,n){let i=new Float32Array(kr),s=new P(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cv(),fragmentShader:`

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
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Lb(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cv(),fragmentShader:`

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
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Ob(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Cv(){return`

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
	`}function J3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===md||l===gd,h=l===zr||l===Br;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new ep(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new ep(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function K3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&ul("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Q3(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let y=0,_=v.length;y<_;y+=3){let T=v[y+0],R=v[y+1],w=v[y+2];f.push(T,R,R,w,w,T)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let T=y+0,R=y+1,w=y+2;f.push(T,R,R,w,w,T)}}else return;let m=new(uv(f)?$c:jc)(f,1);m.version=x;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function h(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function j3(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,f*r,g),n.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v]*x[v];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function $3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function tD(e,t,n){let i=new WeakMap,s=new _e;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let R=new Float32Array(_*T*4*d),w=new Jc(R,_,T,d);w.type=As,w.needsUpdate=!0;let N=y*4;for(let M=0;M<d;M++){let U=m[M],H=u[M],G=v[M],q=_*T*4*M;for(let J=0;J<U.count;J++){let Y=J*N;p===!0&&(s.fromBufferAttribute(U,J),R[q+Y+0]=s.x,R[q+Y+1]=s.y,R[q+Y+2]=s.z,R[q+Y+3]=0),g===!0&&(s.fromBufferAttribute(H,J),R[q+Y+4]=s.x,R[q+Y+5]=s.y,R[q+Y+6]=s.z,R[q+Y+7]=0),x===!0&&(s.fromBufferAttribute(G,J),R[q+Y+8]=s.x,R[q+Y+9]=s.y,R[q+Y+10]=s.z,R[q+Y+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:w,size:new jt(_,T)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function eD(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var $b=new ai,Ib=new su(1,1),tE=new Jc,eE=new Xf,nE=new eu,Pb=[],zb=[],Bb=new Float32Array(16),Fb=new Float32Array(9),Hb=new Float32Array(4);function Al(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Pb[s];if(a===void 0&&(a=new Float32Array(s),Pb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function an(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function rn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function ip(e,t){let n=zb[t];n===void 0&&(n=new Int32Array(t),zb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function nD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function iD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(an(n,t))return;e.uniform2fv(this.addr,t),rn(n,t)}}function sD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(an(n,t))return;e.uniform3fv(this.addr,t),rn(n,t)}}function aD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(an(n,t))return;e.uniform4fv(this.addr,t),rn(n,t)}}function rD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(an(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),rn(n,t)}else{if(an(n,i))return;Hb.set(i),e.uniformMatrix2fv(this.addr,!1,Hb),rn(n,i)}}function oD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(an(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),rn(n,t)}else{if(an(n,i))return;Fb.set(i),e.uniformMatrix3fv(this.addr,!1,Fb),rn(n,i)}}function lD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(an(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),rn(n,t)}else{if(an(n,i))return;Bb.set(i),e.uniformMatrix4fv(this.addr,!1,Bb),rn(n,i)}}function cD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function uD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(an(n,t))return;e.uniform2iv(this.addr,t),rn(n,t)}}function hD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(an(n,t))return;e.uniform3iv(this.addr,t),rn(n,t)}}function fD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(an(n,t))return;e.uniform4iv(this.addr,t),rn(n,t)}}function dD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function pD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(an(n,t))return;e.uniform2uiv(this.addr,t),rn(n,t)}}function mD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(an(n,t))return;e.uniform3uiv(this.addr,t),rn(n,t)}}function gD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(an(n,t))return;e.uniform4uiv(this.addr,t),rn(n,t)}}function vD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Ib.compareFunction=ov,a=Ib):a=$b,n.setTexture2D(t||a,s)}function _D(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||eE,s)}function yD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||nE,s)}function xD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||tE,s)}function SD(e){switch(e){case 5126:return nD;case 35664:return iD;case 35665:return sD;case 35666:return aD;case 35674:return rD;case 35675:return oD;case 35676:return lD;case 5124:case 35670:return cD;case 35667:case 35671:return uD;case 35668:case 35672:return hD;case 35669:case 35673:return fD;case 5125:return dD;case 36294:return pD;case 36295:return mD;case 36296:return gD;case 35678:case 36198:case 36298:case 36306:case 35682:return vD;case 35679:case 36299:case 36307:return _D;case 35680:case 36300:case 36308:case 36293:return yD;case 36289:case 36303:case 36311:case 36292:return xD}}function MD(e,t){e.uniform1fv(this.addr,t)}function bD(e,t){let n=Al(t,this.size,2);e.uniform2fv(this.addr,n)}function ED(e,t){let n=Al(t,this.size,3);e.uniform3fv(this.addr,n)}function TD(e,t){let n=Al(t,this.size,4);e.uniform4fv(this.addr,n)}function AD(e,t){let n=Al(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function wD(e,t){let n=Al(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function RD(e,t){let n=Al(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function CD(e,t){e.uniform1iv(this.addr,t)}function DD(e,t){e.uniform2iv(this.addr,t)}function ND(e,t){e.uniform3iv(this.addr,t)}function UD(e,t){e.uniform4iv(this.addr,t)}function LD(e,t){e.uniform1uiv(this.addr,t)}function OD(e,t){e.uniform2uiv(this.addr,t)}function ID(e,t){e.uniform3uiv(this.addr,t)}function PD(e,t){e.uniform4uiv(this.addr,t)}function zD(e,t,n){let i=this.cache,s=t.length,a=ip(n,s);an(i,a)||(e.uniform1iv(this.addr,a),rn(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||$b,a[r])}function BD(e,t,n){let i=this.cache,s=t.length,a=ip(n,s);an(i,a)||(e.uniform1iv(this.addr,a),rn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||eE,a[r])}function FD(e,t,n){let i=this.cache,s=t.length,a=ip(n,s);an(i,a)||(e.uniform1iv(this.addr,a),rn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||nE,a[r])}function HD(e,t,n){let i=this.cache,s=t.length,a=ip(n,s);an(i,a)||(e.uniform1iv(this.addr,a),rn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||tE,a[r])}function VD(e){switch(e){case 5126:return MD;case 35664:return bD;case 35665:return ED;case 35666:return TD;case 35674:return AD;case 35675:return wD;case 35676:return RD;case 5124:case 35670:return CD;case 35667:case 35671:return DD;case 35668:case 35672:return ND;case 35669:case 35673:return UD;case 5125:return LD;case 36294:return OD;case 36295:return ID;case 36296:return PD;case 35678:case 36198:case 36298:case 36306:case 35682:return zD;case 35679:case 36299:case 36307:return BD;case 35680:case 36300:case 36308:case 36293:return FD;case 36289:case 36303:case 36311:case 36292:return HD}}var Sv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=SD(n.type)}},Mv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VD(n.type)}},bv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},xv=/(\w+)(\])?(\[|\.)?/g;function Vb(e,t){e.seq.push(t),e.map[t.id]=t}function GD(e,t,n){let i=e.name,s=i.length;for(xv.lastIndex=0;;){let a=xv.exec(i),r=xv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Vb(n,c===void 0?new Sv(o,e,t):new Mv(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new bv(o),Vb(n,d)),n=d}}}var Tl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);GD(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Gb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var kD=37297,XD=0;function WD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var kb=new Jt;function qD(e){oe._getMatrix(kb,oe.workingColorSpace,e);let t=`mat3( ${kb.elements.map(n=>n.toFixed(4))} )`;switch(oe.getTransfer(e)){case qc:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Xb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+WD(e.getShaderSource(t),o)}else return a}function YD(e,t){let n=qD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ZD(e,t){let n;switch(t){case rb:n="Linear";break;case ob:n="Reinhard";break;case lb:n="Cineon";break;case pd:n="ACESFilmic";break;case ub:n="AgX";break;case hb:n="Neutral";break;case cb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var tp=new P;function JD(){oe.getLuminanceCoefficients(tp);let e=tp.x.toFixed(4),t=tp.y.toFixed(4),n=tp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_u).join(`
`)}function QD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function jD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function _u(e){return e!==""}function Wb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $D=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ev(e){return e.replace($D,eN)}var tN=new Map;function eN(e,t){let n=$t[t];if(n===void 0){let i=tN.get(t);if(i!==void 0)n=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ev(n)}var nN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yb(e){return e.replace(nN,iN)}function iN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Zb(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function sN(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Y0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===FM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function aN(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case zr:case Br:t="ENVMAP_TYPE_CUBE";break;case fu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rN(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Br:t="ENVMAP_MODE_REFRACTION";break}return t}function oN(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case K0:t="ENVMAP_BLENDING_MULTIPLY";break;case sb:t="ENVMAP_BLENDING_MIX";break;case ab:t="ENVMAP_BLENDING_ADD";break}return t}function lN(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function cN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=sN(n),c=aN(n),h=rN(n),d=oN(n),f=lN(n),p=KD(n),g=QD(a),x=s.createProgram(),m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_u).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_u).join(`
`),u.length>0&&(u+=`
`)):(m=[Zb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_u).join(`
`),u=[Zb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?$t.tonemapping_pars_fragment:"",n.toneMapping!==aa?ZD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,YD("linearToOutputTexel",n.outputColorSpace),JD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_u).join(`
`)),r=Ev(r),r=Wb(r,n),r=qb(r,n),o=Ev(o),o=Wb(o,n),o=qb(o,n),r=Yb(r),o=Yb(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=v+m+r,_=v+u+o,T=Gb(s,s.VERTEX_SHADER,y),R=Gb(s,s.FRAGMENT_SHADER,_);s.attachShader(x,T),s.attachShader(x,R),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(U){if(e.debug.checkShaderErrors){let H=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(T)||"",q=s.getShaderInfoLog(R)||"",J=H.trim(),Y=G.trim(),nt=q.trim(),W=!0,lt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,T,R);else{let ut=Xb(s,T,"vertex"),Dt=Xb(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+ut+`
`+Dt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||nt==="")&&(lt=!1);lt&&(U.diagnostics={runnable:W,programLog:J,vertexShader:{log:Y,prefix:m},fragmentShader:{log:nt,prefix:u}})}s.deleteShader(T),s.deleteShader(R),N=new Tl(s,x),E=jD(s,x)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,kD)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=XD++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=R,this}var uN=0,Tv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Av(t),n.set(t,i)),i}},Av=class{constructor(t){this.id=uN++,this.code=t,this.usedTimes=0}};function hN(e,t,n,i,s,a,r){let o=new Qc,l=new Tv,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,U,H,G){let q=H.fog,J=G.geometry,Y=E.isMeshStandardMaterial?H.environment:null,nt=(E.isMeshStandardMaterial?n:t).get(E.envMap||Y),W=nt&&nt.mapping===fu?nt.image.height:null,lt=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Dt=ut!==void 0?ut.length:0,Wt=0;J.morphAttributes.position!==void 0&&(Wt=1),J.morphAttributes.normal!==void 0&&(Wt=2),J.morphAttributes.color!==void 0&&(Wt=3);let rt,Ht,qt,Q;if(lt){let vt=ws[lt];rt=vt.vertexShader,Ht=vt.fragmentShader}else rt=E.vertexShader,Ht=E.fragmentShader,l.update(E),qt=l.getVertexShaderID(E),Q=l.getFragmentShaderID(E);let tt=e.getRenderTarget(),gt=e.state.buffers.depth.getReversed(),Ut=G.isInstancedMesh===!0,At=G.isBatchedMesh===!0,Kt=!!E.map,Ge=!!E.matcap,D=!!nt,Se=!!E.aoMap,Nt=!!E.lightMap,St=!!E.bumpMap,_t=!!E.normalMap,fe=!!E.displacementMap,Mt=!!E.emissiveMap,kt=!!E.metalnessMap,Be=!!E.roughnessMap,Re=E.anisotropy>0,A=E.clearcoat>0,S=E.dispersion>0,F=E.iridescence>0,K=E.sheen>0,et=E.transmission>0,Z=Re&&!!E.anisotropyMap,wt=A&&!!E.clearcoatMap,ot=A&&!!E.clearcoatNormalMap,Et=A&&!!E.clearcoatRoughnessMap,Rt=F&&!!E.iridescenceMap,it=F&&!!E.iridescenceThicknessMap,dt=K&&!!E.sheenColorMap,bt=K&&!!E.sheenRoughnessMap,Ct=!!E.specularMap,ht=!!E.specularColorMap,zt=!!E.specularIntensityMap,L=et&&!!E.transmissionMap,st=et&&!!E.thicknessMap,ct=!!E.gradientMap,yt=!!E.alphaMap,O=E.alphaTest>0,z=!!E.alphaHash,$=!!E.extensions,mt=aa;E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(mt=e.toneMapping);let Qt={shaderID:lt,shaderType:E.type,shaderName:E.name,vertexShader:rt,fragmentShader:Ht,defines:E.defines,customVertexShaderID:qt,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:At,batchingColor:At&&G._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&G.instanceColor!==null,instancingMorph:Ut&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Nr,alphaToCoverage:!!E.alphaToCoverage,map:Kt,matcap:Ge,envMap:D,envMapMode:D&&nt.mapping,envMapCubeUVHeight:W,aoMap:Se,lightMap:Nt,bumpMap:St,normalMap:_t,displacementMap:f&&fe,emissiveMap:Mt,normalMapObjectSpace:_t&&E.normalMapType===mb,normalMapTangentSpace:_t&&E.normalMapType===rv,metalnessMap:kt,roughnessMap:Be,anisotropy:Re,anisotropyMap:Z,clearcoat:A,clearcoatMap:wt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Et,dispersion:S,iridescence:F,iridescenceMap:Rt,iridescenceThicknessMap:it,sheen:K,sheenColorMap:dt,sheenRoughnessMap:bt,specularMap:Ct,specularColorMap:ht,specularIntensityMap:zt,transmission:et,transmissionMap:L,thicknessMap:st,gradientMap:ct,opaque:E.transparent===!1&&E.blending===Cr&&E.alphaToCoverage===!1,alphaMap:yt,alphaTest:O,alphaHash:z,combine:E.combine,mapUv:Kt&&x(E.map.channel),aoMapUv:Se&&x(E.aoMap.channel),lightMapUv:Nt&&x(E.lightMap.channel),bumpMapUv:St&&x(E.bumpMap.channel),normalMapUv:_t&&x(E.normalMap.channel),displacementMapUv:fe&&x(E.displacementMap.channel),emissiveMapUv:Mt&&x(E.emissiveMap.channel),metalnessMapUv:kt&&x(E.metalnessMap.channel),roughnessMapUv:Be&&x(E.roughnessMap.channel),anisotropyMapUv:Z&&x(E.anisotropyMap.channel),clearcoatMapUv:wt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(E.sheenRoughnessMap.channel),specularMapUv:Ct&&x(E.specularMap.channel),specularColorMapUv:ht&&x(E.specularColorMap.channel),specularIntensityMapUv:zt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:st&&x(E.thicknessMap.channel),alphaMapUv:yt&&x(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(_t||Re),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(Kt||yt),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:mt,decodeVideoTexture:Kt&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===ye,decodeVideoTextureEmissive:Mt&&E.emissiveMap.isVideoTexture===!0&&oe.getTransfer(E.emissiveMap.colorSpace)===ye,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===An,flipSided:E.side===Tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&E.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function u(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(M,E),y(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){let M=g[E.type],U;if(M){let H=ws[M];U=Ab.clone(H.uniforms)}else U=E.uniforms;return U}function T(E,M){let U;for(let H=0,G=h.length;H<G;H++){let q=h[H];if(q.cacheKey===M){U=q,++U.usedTimes;break}}return U===void 0&&(U=new cN(e,M,E,a),h.push(U)),U}function R(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:T,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:N}}function fN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function dN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Jb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Kb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,g,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,g,x,m){let u=r(d,f,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,g,x,m){let u=r(d,f,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||dN),i.length>1&&i.sort(f||Jb),s.length>1&&s.sort(f||Jb)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function pN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Kb,e.set(i,[r])):s>=a.length?(r=new Kb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function mN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new Yt};break;case"SpotLight":n={position:new P,direction:new P,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":n={color:new Yt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function gN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var vN=0;function _N(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function yN(e){let t=new mN,n=gN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new ze,r=new ze;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,v=0,y=0,_=0,T=0,R=0,w=0;c.sort(_N);for(let E=0,M=c.length;E<M;E++){let U=c[E],H=U.color,G=U.intensity,q=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=H.r*G,d+=H.g*G,f+=H.b*G;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],G);w++}else if(U.isDirectionalLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,W=n.get(U);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=Y,p++}else if(U.isSpotLight){let Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(H).multiplyScalar(G),Y.distance=q,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[x]=Y;let nt=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,nt.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[x]=nt.matrix,U.castShadow){let W=n.get(U);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=J,_++}x++}else if(U.isRectAreaLight){let Y=t.get(U);Y.color.copy(H).multiplyScalar(G),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=Y,m++}else if(U.isPointLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let nt=U.shadow,W=n.get(U);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=U.shadow.matrix,y++}i.point[g]=Y,g++}else if(U.isHemisphereLight){let Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(G),Y.groundColor.copy(U.groundColor).multiplyScalar(G),i.hemi[u]=Y,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==v||N.numPointShadows!==y||N.numSpotShadows!==_||N.numSpotMaps!==T||N.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=v,N.numPointShadows=y,N.numSpotShadows=_,N.numSpotMaps=T,N.numLightProbes=w,i.version=vN++)}function l(c,h){let d=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){let y=c[u];if(y.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Qb(e){let t=new yN(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function xN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Qb(e),t.set(s,[o])):a>=r.length?(o=new Qb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var SN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MN=`uniform sampler2D shadow_pass;
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
}`;function bN(e,t,n){let i=new ml,s=new jt,a=new jt,r=new _e,o=new Zf({depthPacking:pb}),l=new Jf,c={},h=n.maxTextureSize,d={[ta]:Tn,[Tn]:ta,[An]:An},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:SN,fragmentShader:MN}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Yn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let u=this.type;this.render=function(R,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),H=e.state;H.setBlending(sa),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let G=u!==Gi&&this.type===Gi,q=u===Gi&&this.type!==Gi;for(let J=0,Y=R.length;J<Y;J++){let nt=R[J],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let lt=W.getFrameExtents();if(s.multiply(lt),a.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/lt.x),s.x=a.x*lt.x,W.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/lt.y),s.y=a.y*lt.y,W.mapSize.y=a.y)),W.map===null||G===!0||q===!0){let Dt=this.type!==Gi?{minFilter:dn,magFilter:dn}:{};W.map!==null&&W.map.dispose(),W.map=new Es(s.x,s.y,Dt),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}e.setRenderTarget(W.map),e.clear();let ut=W.getViewportCount();for(let Dt=0;Dt<ut;Dt++){let Wt=W.getViewport(Dt);r.set(a.x*Wt.x,a.y*Wt.y,a.x*Wt.z,a.y*Wt.w),H.viewport(r),W.updateMatrices(nt,Dt),i=W.getFrustum(),_(w,N,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===Gi&&v(W,N),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,U)};function v(R,w){let N=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Es(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,N,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,N,p,x,null)}function y(R,w,N,E){let M=null,U=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)M=U;else if(M=N.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=M.uuid,G=w.uuid,q=c[H];q===void 0&&(q={},c[H]=q);let J=q[G];J===void 0&&(J=M.clone(),q[G]=J,w.addEventListener("dispose",T)),M=J}if(M.visible=w.visible,M.wireframe=w.wireframe,E===Gi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=e.properties.get(M);H.light=N}return M}function _(R,w,N,E,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Gi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let G=t.update(R),q=R.material;if(Array.isArray(q)){let J=G.groups;for(let Y=0,nt=J.length;Y<nt;Y++){let W=J[Y],lt=q[W.materialIndex];if(lt&&lt.visible){let ut=y(R,lt,E,M);R.onBeforeShadow(e,R,w,N,G,ut,W),e.renderBufferDirect(N,null,G,ut,R,W),R.onAfterShadow(e,R,w,N,G,ut,W)}}}else if(q.visible){let J=y(R,q,E,M);R.onBeforeShadow(e,R,w,N,G,J,null),e.renderBufferDirect(N,null,G,J,R,null),R.onAfterShadow(e,R,w,N,G,J,null)}}let H=R.children;for(let G=0,q=H.length;G<q;G++)_(H[G],w,N,E,M)}function T(R){R.target.removeEventListener("dispose",T);for(let N in c){let E=c[N],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var EN={[od]:ld,[cd]:fd,[ud]:dd,[Dr]:hd,[ld]:od,[fd]:cd,[dd]:ud,[hd]:Dr};function TN(e,t){function n(){let L=!1,st=new _e,ct=null,yt=new _e(0,0,0,0);return{setMask:function(O){ct!==O&&!L&&(e.colorMask(O,O,O,O),ct=O)},setLocked:function(O){L=O},setClear:function(O,z,$,mt,Qt){Qt===!0&&(O*=mt,z*=mt,$*=mt),st.set(O,z,$,mt),yt.equals(st)===!1&&(e.clearColor(O,z,$,mt),yt.copy(st))},reset:function(){L=!1,ct=null,yt.set(-1,0,0,0)}}}function i(){let L=!1,st=!1,ct=null,yt=null,O=null;return{setReversed:function(z){if(st!==z){let $=t.get("EXT_clip_control");z?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT),st=z;let mt=O;O=null,this.setClear(mt)}},getReversed:function(){return st},setTest:function(z){z?tt(e.DEPTH_TEST):gt(e.DEPTH_TEST)},setMask:function(z){ct!==z&&!L&&(e.depthMask(z),ct=z)},setFunc:function(z){if(st&&(z=EN[z]),yt!==z){switch(z){case od:e.depthFunc(e.NEVER);break;case ld:e.depthFunc(e.ALWAYS);break;case cd:e.depthFunc(e.LESS);break;case Dr:e.depthFunc(e.LEQUAL);break;case ud:e.depthFunc(e.EQUAL);break;case hd:e.depthFunc(e.GEQUAL);break;case fd:e.depthFunc(e.GREATER);break;case dd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}yt=z}},setLocked:function(z){L=z},setClear:function(z){O!==z&&(st&&(z=1-z),e.clearDepth(z),O=z)},reset:function(){L=!1,ct=null,yt=null,O=null,st=!1}}}function s(){let L=!1,st=null,ct=null,yt=null,O=null,z=null,$=null,mt=null,Qt=null;return{setTest:function(vt){L||(vt?tt(e.STENCIL_TEST):gt(e.STENCIL_TEST))},setMask:function(vt){st!==vt&&!L&&(e.stencilMask(vt),st=vt)},setFunc:function(vt,Ye,Ze){(ct!==vt||yt!==Ye||O!==Ze)&&(e.stencilFunc(vt,Ye,Ze),ct=vt,yt=Ye,O=Ze)},setOp:function(vt,Ye,Ze){(z!==vt||$!==Ye||mt!==Ze)&&(e.stencilOp(vt,Ye,Ze),z=vt,$=Ye,mt=Ze)},setLocked:function(vt){L=vt},setClear:function(vt){Qt!==vt&&(e.clearStencil(vt),Qt=vt)},reset:function(){L=!1,st=null,ct=null,yt=null,O=null,z=null,$=null,mt=null,Qt=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,v=null,y=null,_=null,T=null,R=null,w=new Yt(0,0,0),N=0,E=!1,M=null,U=null,H=null,G=null,q=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,nt=0,W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=nt>=2);let lt=null,ut={},Dt=e.getParameter(e.SCISSOR_BOX),Wt=e.getParameter(e.VIEWPORT),rt=new _e().fromArray(Dt),Ht=new _e().fromArray(Wt);function qt(L,st,ct,yt){let O=new Uint8Array(4),z=e.createTexture();e.bindTexture(L,z),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let $=0;$<ct;$++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,yt,0,e.RGBA,e.UNSIGNED_BYTE,O):e.texImage2D(st+$,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,O);return z}let Q={};Q[e.TEXTURE_2D]=qt(e.TEXTURE_2D,e.TEXTURE_2D,1),Q[e.TEXTURE_CUBE_MAP]=qt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[e.TEXTURE_2D_ARRAY]=qt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Q[e.TEXTURE_3D]=qt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(Dr),St(!1),_t(q0),tt(e.CULL_FACE),Se(sa);function tt(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function gt(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function Ut(L,st){return d[L]!==st?(e.bindFramebuffer(L,st),d[L]=st,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=st),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=st),!0):!1}function At(L,st){let ct=p,yt=!1;if(L){ct=f.get(st),ct===void 0&&(ct=[],f.set(st,ct));let O=L.textures;if(ct.length!==O.length||ct[0]!==e.COLOR_ATTACHMENT0){for(let z=0,$=O.length;z<$;z++)ct[z]=e.COLOR_ATTACHMENT0+z;ct.length=O.length,yt=!0}}else ct[0]!==e.BACK&&(ct[0]=e.BACK,yt=!0);yt&&e.drawBuffers(ct)}function Kt(L){return g!==L?(e.useProgram(L),g=L,!0):!1}let Ge={[qa]:e.FUNC_ADD,[VM]:e.FUNC_SUBTRACT,[GM]:e.FUNC_REVERSE_SUBTRACT};Ge[kM]=e.MIN,Ge[XM]=e.MAX;let D={[WM]:e.ZERO,[qM]:e.ONE,[YM]:e.SRC_COLOR,[Pf]:e.SRC_ALPHA,[$M]:e.SRC_ALPHA_SATURATE,[QM]:e.DST_COLOR,[JM]:e.DST_ALPHA,[ZM]:e.ONE_MINUS_SRC_COLOR,[zf]:e.ONE_MINUS_SRC_ALPHA,[jM]:e.ONE_MINUS_DST_COLOR,[KM]:e.ONE_MINUS_DST_ALPHA,[tb]:e.CONSTANT_COLOR,[eb]:e.ONE_MINUS_CONSTANT_COLOR,[nb]:e.CONSTANT_ALPHA,[ib]:e.ONE_MINUS_CONSTANT_ALPHA};function Se(L,st,ct,yt,O,z,$,mt,Qt,vt){if(L===sa){x===!0&&(gt(e.BLEND),x=!1);return}if(x===!1&&(tt(e.BLEND),x=!0),L!==HM){if(L!==m||vt!==E){if((u!==qa||_!==qa)&&(e.blendEquation(e.FUNC_ADD),u=qa,_=qa),vt)switch(L){case Cr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Pr:e.blendFunc(e.ONE,e.ONE);break;case Z0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case J0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Pr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Z0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,T=null,R=null,w.set(0,0,0),N=0,m=L,E=vt}return}O=O||st,z=z||ct,$=$||yt,(st!==u||O!==_)&&(e.blendEquationSeparate(Ge[st],Ge[O]),u=st,_=O),(ct!==v||yt!==y||z!==T||$!==R)&&(e.blendFuncSeparate(D[ct],D[yt],D[z],D[$]),v=ct,y=yt,T=z,R=$),(mt.equals(w)===!1||Qt!==N)&&(e.blendColor(mt.r,mt.g,mt.b,Qt),w.copy(mt),N=Qt),m=L,E=!1}function Nt(L,st){L.side===An?gt(e.CULL_FACE):tt(e.CULL_FACE);let ct=L.side===Tn;st&&(ct=!ct),St(ct),L.blending===Cr&&L.transparent===!1?Se(sa):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let yt=L.stencilWrite;o.setTest(yt),yt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):gt(e.SAMPLE_ALPHA_TO_COVERAGE)}function St(L){M!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),M=L)}function _t(L){L!==zM?(tt(e.CULL_FACE),L!==U&&(L===q0?e.cullFace(e.BACK):L===BM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):gt(e.CULL_FACE),U=L}function fe(L){L!==H&&(Y&&e.lineWidth(L),H=L)}function Mt(L,st,ct){L?(tt(e.POLYGON_OFFSET_FILL),(G!==st||q!==ct)&&(e.polygonOffset(st,ct),G=st,q=ct)):gt(e.POLYGON_OFFSET_FILL)}function kt(L){L?tt(e.SCISSOR_TEST):gt(e.SCISSOR_TEST)}function Be(L){L===void 0&&(L=e.TEXTURE0+J-1),lt!==L&&(e.activeTexture(L),lt=L)}function Re(L,st,ct){ct===void 0&&(lt===null?ct=e.TEXTURE0+J-1:ct=lt);let yt=ut[ct];yt===void 0&&(yt={type:void 0,texture:void 0},ut[ct]=yt),(yt.type!==L||yt.texture!==st)&&(lt!==ct&&(e.activeTexture(ct),lt=ct),e.bindTexture(L,st||Q[L]),yt.type=L,yt.texture=st)}function A(){let L=ut[lt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(L){rt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),rt.copy(L))}function bt(L){Ht.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Ht.copy(L))}function Ct(L,st){let ct=c.get(st);ct===void 0&&(ct=new WeakMap,c.set(st,ct));let yt=ct.get(L);yt===void 0&&(yt=e.getUniformBlockIndex(st,L.name),ct.set(L,yt))}function ht(L,st){let yt=c.get(st).get(L);l.get(st)!==yt&&(e.uniformBlockBinding(st,yt,L.__bindingPointIndex),l.set(st,yt))}function zt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},lt=null,ut={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,v=null,y=null,_=null,T=null,R=null,w=new Yt(0,0,0),N=0,E=!1,M=null,U=null,H=null,G=null,q=null,rt.set(0,0,e.canvas.width,e.canvas.height),Ht.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:tt,disable:gt,bindFramebuffer:Ut,drawBuffers:At,useProgram:Kt,setBlending:Se,setMaterial:Nt,setFlipSided:St,setCullFace:_t,setLineWidth:fe,setPolygonOffset:Mt,setScissorTest:kt,activeTexture:Be,bindTexture:Re,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:Rt,texImage3D:it,updateUBOMapping:Ct,uniformBlockBinding:ht,texStorage2D:ot,texStorage3D:Et,texSubImage2D:K,texSubImage3D:et,compressedTexSubImage2D:Z,compressedTexSubImage3D:wt,scissor:dt,viewport:bt,reset:zt}}function AN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Zc("canvas")}function x(A,S,F){let K=1,et=Re(A);if((et.width>F||et.height>F)&&(K=F/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Z=Math.floor(K*et.width),wt=Math.floor(K*et.height);d===void 0&&(d=g(Z,wt));let ot=S?g(Z,wt):d;return ot.width=Z,ot.height=wt,ot.getContext("2d").drawImage(A,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+wt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(A,S,F,K,et=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===e.RED&&(F===e.FLOAT&&(Z=e.R32F),F===e.HALF_FLOAT&&(Z=e.R16F),F===e.UNSIGNED_BYTE&&(Z=e.R8)),S===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(Z=e.R8UI),F===e.UNSIGNED_SHORT&&(Z=e.R16UI),F===e.UNSIGNED_INT&&(Z=e.R32UI),F===e.BYTE&&(Z=e.R8I),F===e.SHORT&&(Z=e.R16I),F===e.INT&&(Z=e.R32I)),S===e.RG&&(F===e.FLOAT&&(Z=e.RG32F),F===e.HALF_FLOAT&&(Z=e.RG16F),F===e.UNSIGNED_BYTE&&(Z=e.RG8)),S===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(Z=e.RG8UI),F===e.UNSIGNED_SHORT&&(Z=e.RG16UI),F===e.UNSIGNED_INT&&(Z=e.RG32UI),F===e.BYTE&&(Z=e.RG8I),F===e.SHORT&&(Z=e.RG16I),F===e.INT&&(Z=e.RG32I)),S===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),F===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),F===e.UNSIGNED_INT&&(Z=e.RGB32UI),F===e.BYTE&&(Z=e.RGB8I),F===e.SHORT&&(Z=e.RGB16I),F===e.INT&&(Z=e.RGB32I)),S===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),F===e.UNSIGNED_INT&&(Z=e.RGBA32UI),F===e.BYTE&&(Z=e.RGBA8I),F===e.SHORT&&(Z=e.RGBA16I),F===e.INT&&(Z=e.RGBA32I)),S===e.RGB&&(F===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),S===e.RGBA){let wt=et?qc:oe.getTransfer(K);F===e.FLOAT&&(Z=e.RGBA32F),F===e.HALF_FLOAT&&(Z=e.RGBA16F),F===e.UNSIGNED_BYTE&&(Z=wt===ye?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(A,S){let F;return A?S===null||S===Qa||S===Sl?F=e.DEPTH24_STENCIL8:S===As?F=e.DEPTH32F_STENCIL8:S===yl&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qa||S===Sl?F=e.DEPTH_COMPONENT24:S===As?F=e.DEPTH_COMPONENT32F:S===yl&&(F=e.DEPTH_COMPONENT16),F}function T(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==dn&&A.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){let S=A.target;S.removeEventListener("dispose",R),N(S),S.isVideoTexture&&h.delete(S)}function w(A){let S=A.target;S.removeEventListener("dispose",w),M(S)}function N(A){let S=i.get(A);if(S.__webglInit===void 0)return;let F=A.source,K=f.get(F);if(K){let et=K[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(A),Object.keys(K).length===0&&f.delete(F)}i.remove(A)}function E(A){let S=i.get(A);e.deleteTexture(S.__webglTexture);let F=A.source,K=f.get(F);delete K[S.__cacheKey],r.memory.textures--}function M(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let et=0;et<S.__webglFramebuffer[K].length;et++)e.deleteFramebuffer(S.__webglFramebuffer[K][et]);else e.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)e.deleteFramebuffer(S.__webglFramebuffer[K]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=A.textures;for(let K=0,et=F.length;K<et;K++){let Z=i.get(F[K]);Z.__webglTexture&&(e.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(F[K])}i.remove(A)}let U=0;function H(){U=0}function G(){let A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function q(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function J(A,S){let F=i.get(A);if(A.isVideoTexture&&kt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,A,S);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+S)}function Y(A,S){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Q(F,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+S)}function nt(A,S){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Q(F,A,S);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+S)}function W(A,S){let F=i.get(A);if(A.version>0&&F.__version!==A.version){tt(F,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+S)}let lt={[Bf]:e.REPEAT,[Wa]:e.CLAMP_TO_EDGE,[Ff]:e.MIRRORED_REPEAT},ut={[dn]:e.NEAREST,[fb]:e.NEAREST_MIPMAP_NEAREST,[du]:e.NEAREST_MIPMAP_LINEAR,[En]:e.LINEAR,[vd]:e.LINEAR_MIPMAP_NEAREST,[ns]:e.LINEAR_MIPMAP_LINEAR},Dt={[gb]:e.NEVER,[Mb]:e.ALWAYS,[vb]:e.LESS,[ov]:e.LEQUAL,[_b]:e.EQUAL,[Sb]:e.GEQUAL,[yb]:e.GREATER,[xb]:e.NOTEQUAL};function Wt(A,S){if(S.type===As&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===En||S.magFilter===vd||S.magFilter===du||S.magFilter===ns||S.minFilter===En||S.minFilter===vd||S.minFilter===du||S.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,lt[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,lt[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,lt[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,ut[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===dn||S.minFilter!==du&&S.minFilter!==ns||S.type===As&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function rt(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let K=S.source,et=f.get(K);et===void 0&&(et={},f.set(K,et));let Z=q(S);if(Z!==A.__cacheKey){et[Z]===void 0&&(et[Z]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),et[Z].usedTimes++;let wt=et[A.__cacheKey];wt!==void 0&&(et[A.__cacheKey].usedTimes--,wt.usedTimes===0&&E(S)),A.__cacheKey=Z,A.__webglTexture=et[Z].texture}return F}function Ht(A,S,F){return Math.floor(Math.floor(A/F)/S)}function qt(A,S,F,K){let Z=A.updateRanges;if(Z.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,F,K,S.data);else{Z.sort((it,dt)=>it.start-dt.start);let wt=0;for(let it=1;it<Z.length;it++){let dt=Z[wt],bt=Z[it],Ct=dt.start+dt.count,ht=Ht(bt.start,S.width,4),zt=Ht(dt.start,S.width,4);bt.start<=Ct+1&&ht===zt&&Ht(bt.start+bt.count-1,S.width,4)===ht?dt.count=Math.max(dt.count,bt.start+bt.count-dt.start):(++wt,Z[wt]=bt)}Z.length=wt+1;let ot=e.getParameter(e.UNPACK_ROW_LENGTH),Et=e.getParameter(e.UNPACK_SKIP_PIXELS),Rt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let it=0,dt=Z.length;it<dt;it++){let bt=Z[it],Ct=Math.floor(bt.start/4),ht=Math.ceil(bt.count/4),zt=Ct%S.width,L=Math.floor(Ct/S.width),st=ht,ct=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,zt,L,st,ct,F,K,S.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(e.UNPACK_SKIP_ROWS,Rt)}}function Q(A,S,F){let K=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=e.TEXTURE_3D);let et=rt(A,S),Z=S.source;n.bindTexture(K,A.__webglTexture,e.TEXTURE0+F);let wt=i.get(Z);if(Z.version!==wt.__version||et===!0){n.activeTexture(e.TEXTURE0+F);let ot=oe.getPrimaries(oe.workingColorSpace),Et=S.colorSpace===ra?null:oe.getPrimaries(S.colorSpace),Rt=S.colorSpace===ra||ot===Et?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let it=x(S.image,!1,s.maxTextureSize);it=Be(S,it);let dt=a.convert(S.format,S.colorSpace),bt=a.convert(S.type),Ct=y(S.internalFormat,dt,bt,S.colorSpace,S.isVideoTexture);Wt(K,S);let ht,zt=S.mipmaps,L=S.isVideoTexture!==!0,st=wt.__version===void 0||et===!0,ct=Z.dataReady,yt=T(S,it);if(S.isDepthTexture)Ct=_(S.format===Ml,S.type),st&&(L?n.texStorage2D(e.TEXTURE_2D,1,Ct,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,Ct,it.width,it.height,0,dt,bt,null));else if(S.isDataTexture)if(zt.length>0){L&&st&&n.texStorage2D(e.TEXTURE_2D,yt,Ct,zt[0].width,zt[0].height);for(let O=0,z=zt.length;O<z;O++)ht=zt[O],L?ct&&n.texSubImage2D(e.TEXTURE_2D,O,0,0,ht.width,ht.height,dt,bt,ht.data):n.texImage2D(e.TEXTURE_2D,O,Ct,ht.width,ht.height,0,dt,bt,ht.data);S.generateMipmaps=!1}else L?(st&&n.texStorage2D(e.TEXTURE_2D,yt,Ct,it.width,it.height),ct&&qt(S,it,dt,bt)):n.texImage2D(e.TEXTURE_2D,0,Ct,it.width,it.height,0,dt,bt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&st&&n.texStorage3D(e.TEXTURE_2D_ARRAY,yt,Ct,zt[0].width,zt[0].height,it.depth);for(let O=0,z=zt.length;O<z;O++)if(ht=zt[O],S.format!==ki)if(dt!==null)if(L){if(ct)if(S.layerUpdates.size>0){let $=pv(ht.width,ht.height,S.format,S.type);for(let mt of S.layerUpdates){let Qt=ht.data.subarray(mt*$/ht.data.BYTES_PER_ELEMENT,(mt+1)*$/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,mt,ht.width,ht.height,1,dt,Qt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,ht.width,ht.height,it.depth,dt,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,O,Ct,ht.width,ht.height,it.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ct&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,ht.width,ht.height,it.depth,dt,bt,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,O,Ct,ht.width,ht.height,it.depth,0,dt,bt,ht.data)}else{L&&st&&n.texStorage2D(e.TEXTURE_2D,yt,Ct,zt[0].width,zt[0].height);for(let O=0,z=zt.length;O<z;O++)ht=zt[O],S.format!==ki?dt!==null?L?ct&&n.compressedTexSubImage2D(e.TEXTURE_2D,O,0,0,ht.width,ht.height,dt,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,O,Ct,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ct&&n.texSubImage2D(e.TEXTURE_2D,O,0,0,ht.width,ht.height,dt,bt,ht.data):n.texImage2D(e.TEXTURE_2D,O,Ct,ht.width,ht.height,0,dt,bt,ht.data)}else if(S.isDataArrayTexture)if(L){if(st&&n.texStorage3D(e.TEXTURE_2D_ARRAY,yt,Ct,it.width,it.height,it.depth),ct)if(S.layerUpdates.size>0){let O=pv(it.width,it.height,S.format,S.type);for(let z of S.layerUpdates){let $=it.data.subarray(z*O/it.data.BYTES_PER_ELEMENT,(z+1)*O/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,z,it.width,it.height,1,dt,bt,$)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,bt,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ct,it.width,it.height,it.depth,0,dt,bt,it.data);else if(S.isData3DTexture)L?(st&&n.texStorage3D(e.TEXTURE_3D,yt,Ct,it.width,it.height,it.depth),ct&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,bt,it.data)):n.texImage3D(e.TEXTURE_3D,0,Ct,it.width,it.height,it.depth,0,dt,bt,it.data);else if(S.isFramebufferTexture){if(st)if(L)n.texStorage2D(e.TEXTURE_2D,yt,Ct,it.width,it.height);else{let O=it.width,z=it.height;for(let $=0;$<yt;$++)n.texImage2D(e.TEXTURE_2D,$,Ct,O,z,0,dt,bt,null),O>>=1,z>>=1}}else if(zt.length>0){if(L&&st){let O=Re(zt[0]);n.texStorage2D(e.TEXTURE_2D,yt,Ct,O.width,O.height)}for(let O=0,z=zt.length;O<z;O++)ht=zt[O],L?ct&&n.texSubImage2D(e.TEXTURE_2D,O,0,0,dt,bt,ht):n.texImage2D(e.TEXTURE_2D,O,Ct,dt,bt,ht);S.generateMipmaps=!1}else if(L){if(st){let O=Re(it);n.texStorage2D(e.TEXTURE_2D,yt,Ct,O.width,O.height)}ct&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,bt,it)}else n.texImage2D(e.TEXTURE_2D,0,Ct,dt,bt,it);m(S)&&u(K),wt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function tt(A,S,F){if(S.image.length!==6)return;let K=rt(A,S),et=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);let Z=i.get(et);if(et.version!==Z.__version||K===!0){n.activeTexture(e.TEXTURE0+F);let wt=oe.getPrimaries(oe.workingColorSpace),ot=S.colorSpace===ra?null:oe.getPrimaries(S.colorSpace),Et=S.colorSpace===ra||wt===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let z=0;z<6;z++)!Rt&&!it?dt[z]=x(S.image[z],!0,s.maxCubemapSize):dt[z]=it?S.image[z].image:S.image[z],dt[z]=Be(S,dt[z]);let bt=dt[0],Ct=a.convert(S.format,S.colorSpace),ht=a.convert(S.type),zt=y(S.internalFormat,Ct,ht,S.colorSpace),L=S.isVideoTexture!==!0,st=Z.__version===void 0||K===!0,ct=et.dataReady,yt=T(S,bt);Wt(e.TEXTURE_CUBE_MAP,S);let O;if(Rt){L&&st&&n.texStorage2D(e.TEXTURE_CUBE_MAP,yt,zt,bt.width,bt.height);for(let z=0;z<6;z++){O=dt[z].mipmaps;for(let $=0;$<O.length;$++){let mt=O[$];S.format!==ki?Ct!==null?L?ct&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,$,0,0,mt.width,mt.height,Ct,mt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,$,zt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,$,0,0,mt.width,mt.height,Ct,ht,mt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,$,zt,mt.width,mt.height,0,Ct,ht,mt.data)}}}else{if(O=S.mipmaps,L&&st){O.length>0&&yt++;let z=Re(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,yt,zt,z.width,z.height)}for(let z=0;z<6;z++)if(it){L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,dt[z].width,dt[z].height,Ct,ht,dt[z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,zt,dt[z].width,dt[z].height,0,Ct,ht,dt[z].data);for(let $=0;$<O.length;$++){let Qt=O[$].image[z].image;L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,$+1,0,0,Qt.width,Qt.height,Ct,ht,Qt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,$+1,zt,Qt.width,Qt.height,0,Ct,ht,Qt.data)}}else{L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ct,ht,dt[z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,zt,Ct,ht,dt[z]);for(let $=0;$<O.length;$++){let mt=O[$];L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,$+1,0,0,Ct,ht,mt.image[z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,$+1,zt,Ct,ht,mt.image[z])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),Z.__version=et.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function gt(A,S,F,K,et,Z){let wt=a.convert(F.format,F.colorSpace),ot=a.convert(F.type),Et=y(F.internalFormat,wt,ot,F.colorSpace),Rt=i.get(S),it=i.get(F);if(it.__renderTarget=S,!Rt.__hasExternalTextures){let dt=Math.max(1,S.width>>Z),bt=Math.max(1,S.height>>Z);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,Z,Et,dt,bt,S.depth,0,wt,ot,null):n.texImage2D(et,Z,Et,dt,bt,0,wt,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Mt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,et,it.__webglTexture,0,fe(S)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,et,it.__webglTexture,Z),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(A,S,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){let K=S.depthTexture,et=K&&K.isDepthTexture?K.type:null,Z=_(S.stencilBuffer,et),wt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=fe(S);Mt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,Z,S.width,S.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,Z,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Z,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,wt,e.RENDERBUFFER,A)}else{let K=S.textures;for(let et=0;et<K.length;et++){let Z=K[et],wt=a.convert(Z.format,Z.colorSpace),ot=a.convert(Z.type),Et=y(Z.internalFormat,wt,ot,Z.colorSpace),Rt=fe(S);F&&Mt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,Et,S.width,S.height):Mt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Rt,Et,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Et,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function At(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);let et=K.__webglTexture,Z=fe(S);if(S.depthTexture.format===ll)Mt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0);else if(S.depthTexture.format===Ml)Mt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Kt(A){let S=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let K=A.texture.mipmaps;K&&K.length>0?At(S.__webglFramebuffer[0],A):At(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=e.createRenderbuffer(),Ut(S.__webglDepthbuffer[K],A,!1);else{let et=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,Z)}}else{let K=A.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Ut(S.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,Z)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ge(A,S,F){let K=i.get(A);S!==void 0&&gt(K.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Kt(A)}function D(A){let S=A.texture,F=i.get(A),K=i.get(S);A.addEventListener("dispose",w);let et=A.textures,Z=A.isWebGLCubeRenderTarget===!0,wt=et.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=S.version,r.memory.textures++),Z){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let Et=0;Et<S.mipmaps.length;Et++)F.__webglFramebuffer[ot][Et]=e.createFramebuffer()}else F.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)F.__webglFramebuffer[ot]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(wt)for(let ot=0,Et=et.length;ot<Et;ot++){let Rt=i.get(et[ot]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&Mt(A)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<et.length;ot++){let Et=et[ot];F.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);let Rt=a.convert(Et.format,Et.colorSpace),it=a.convert(Et.type),dt=y(Et.internalFormat,Rt,it,Et.colorSpace,A.isXRRenderTarget===!0),bt=fe(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,bt,dt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Ut(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Z){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Wt(e.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)gt(F.__webglFramebuffer[ot][Et],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et);else gt(F.__webglFramebuffer[ot],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(wt){for(let ot=0,Et=et.length;ot<Et;ot++){let Rt=et[ot],it=i.get(Rt),dt=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(dt,it.__webglTexture),Wt(dt,Rt),gt(F.__webglFramebuffer,A,Rt,e.COLOR_ATTACHMENT0+ot,dt,0),m(Rt)&&u(dt)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,K.__webglTexture),Wt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)gt(F.__webglFramebuffer[Et],A,S,e.COLOR_ATTACHMENT0,ot,Et);else gt(F.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,ot,0);m(S)&&u(ot),n.unbindTexture()}A.depthBuffer&&Kt(A)}function Se(A){let S=A.textures;for(let F=0,K=S.length;F<K;F++){let et=S[F];if(m(et)){let Z=v(A),wt=i.get(et).__webglTexture;n.bindTexture(Z,wt),u(Z),n.unbindTexture()}}}let Nt=[],St=[];function _t(A){if(A.samples>0){if(Mt(A)===!1){let S=A.textures,F=A.width,K=A.height,et=e.COLOR_BUFFER_BIT,Z=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,wt=i.get(A),ot=S.length>1;if(ot)for(let Rt=0;Rt<S.length;Rt++)n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let Et=A.texture.mipmaps;Et&&Et.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,wt.__webglColorRenderbuffer[Rt]);let it=i.get(S[Rt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,it,0)}e.blitFramebuffer(0,0,F,K,0,0,F,K,et,e.NEAREST),l===!0&&(Nt.length=0,St.length=0,Nt.push(e.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Nt.push(Z),St.push(Z),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,St)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let Rt=0;Rt<S.length;Rt++){n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,wt.__webglColorRenderbuffer[Rt]);let it=i.get(S[Rt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,it,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function fe(A){return Math.min(s.maxSamples,A.samples)}function Mt(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function kt(A){let S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Be(A,S){let F=A.colorSpace,K=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Nr&&F!==ra&&(oe.getTransfer(F)===ye?(K!==ki||et!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function Re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Mt}function wN(e,t){function n(i,s=ra){let a,r=oe.getTransfer(s);if(i===is)return e.UNSIGNED_BYTE;if(i===yd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===xd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===tv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ev)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===j0)return e.BYTE;if(i===$0)return e.SHORT;if(i===yl)return e.UNSIGNED_SHORT;if(i===_d)return e.INT;if(i===Qa)return e.UNSIGNED_INT;if(i===As)return e.FLOAT;if(i===xl)return e.HALF_FLOAT;if(i===nv)return e.ALPHA;if(i===iv)return e.RGB;if(i===ki)return e.RGBA;if(i===ll)return e.DEPTH_COMPONENT;if(i===Ml)return e.DEPTH_STENCIL;if(i===sv)return e.RED;if(i===Sd)return e.RED_INTEGER;if(i===av)return e.RG;if(i===Md)return e.RG_INTEGER;if(i===bd)return e.RGBA_INTEGER;if(i===pu||i===mu||i===gu||i===vu)if(r===ye)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ed||i===Td||i===Ad||i===wd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ed)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Td)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ad)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Cd||i===Dd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Rd||i===Cd)return r===ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Dd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nd||i===Ud||i===Ld||i===Od||i===Id||i===Pd||i===zd||i===Bd||i===Fd||i===Hd||i===Vd||i===Gd||i===kd||i===Xd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Nd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ld)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Od)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Id)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wd||i===qd||i===Yd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Wd)return r===ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zd||i===Jd||i===Kd||i===Qd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Zd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Jd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var RN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CN=`
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

}`,wv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new au(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ri({vertexShader:RN,fragmentShader:CN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xe(new Pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rv=class extends ea{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new wv,u={},v=n.getContextAttributes(),y=null,_=null,T=[],R=[],w=new jt,N=null,E=new bn;E.viewport=new _e;let M=new bn;M.viewport=new _e;let U=[E,M],H=new rd,G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let tt=T[Q];return tt===void 0&&(tt=new fl,T[Q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Q){let tt=T[Q];return tt===void 0&&(tt=new fl,T[Q]=tt),tt.getGripSpace()},this.getHand=function(Q){let tt=T[Q];return tt===void 0&&(tt=new fl,T[Q]=tt),tt.getHandSpace()};function J(Q){let tt=R.indexOf(Q.inputSource);if(tt===-1)return;let gt=T[tt];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,c||r),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<T.length;Q++){let tt=R[Q];tt!==null&&(R[Q]=null,T[Q].disconnect(tt))}G=null,q=null,m.reset();for(let Q in u)delete u[Q];t.setRenderTarget(y),p=null,f=null,d=null,s=null,_=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",nt),v.xrCompatible!==!0&&await n.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ut=null,At=null;v.depth&&(At=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,gt=v.stencil?Ml:ll,Ut=v.stencil?Sl:Qa);let Kt={colorFormat:n.RGBA8,depthFormat:At,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Es(f.textureWidth,f.textureHeight,{format:ki,type:is,depthTexture:new su(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let gt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,gt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Es(p.framebufferWidth,p.framebufferHeight,{format:ki,type:is,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Q){for(let tt=0;tt<Q.removed.length;tt++){let gt=Q.removed[tt],Ut=R.indexOf(gt);Ut>=0&&(R[Ut]=null,T[Ut].disconnect(gt))}for(let tt=0;tt<Q.added.length;tt++){let gt=Q.added[tt],Ut=R.indexOf(gt);if(Ut===-1){for(let Kt=0;Kt<T.length;Kt++)if(Kt>=R.length){R.push(gt),Ut=Kt;break}else if(R[Kt]===null){R[Kt]=gt,Ut=Kt;break}if(Ut===-1)break}let At=T[Ut];At&&At.connect(gt)}}let W=new P,lt=new P;function ut(Q,tt,gt){W.setFromMatrixPosition(tt.matrixWorld),lt.setFromMatrixPosition(gt.matrixWorld);let Ut=W.distanceTo(lt),At=tt.projectionMatrix.elements,Kt=gt.projectionMatrix.elements,Ge=At[14]/(At[10]-1),D=At[14]/(At[10]+1),Se=(At[9]+1)/At[5],Nt=(At[9]-1)/At[5],St=(At[8]-1)/At[0],_t=(Kt[8]+1)/Kt[0],fe=Ge*St,Mt=Ge*_t,kt=Ut/(-St+_t),Be=kt*-St;if(tt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Be),Q.translateZ(kt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),At[10]===-1)Q.projectionMatrix.copy(tt.projectionMatrix),Q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Re=Ge+kt,A=D+kt,S=fe-Be,F=Mt+(Ut-Be),K=Se*D/A*Re,et=Nt*D/A*Re;Q.projectionMatrix.makePerspective(S,F,K,et,Re,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Dt(Q,tt){tt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(tt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let tt=Q.near,gt=Q.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),H.near=M.near=E.near=tt,H.far=M.far=E.far=gt,(G!==H.near||q!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),G=H.near,q=H.far),H.layers.mask=Q.layers.mask|6,E.layers.mask=H.layers.mask&3,M.layers.mask=H.layers.mask&5;let Ut=Q.parent,At=H.cameras;Dt(H,Ut);for(let Kt=0;Kt<At.length;Kt++)Dt(At[Kt],Ut);At.length===2?ut(H,E,M):H.projectionMatrix.copy(E.projectionMatrix),Wt(Q,H,Ut)};function Wt(Q,tt,gt){gt===null?Q.matrix.copy(tt.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(tt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(tt.projectionMatrix),Q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=cl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Q){return u[Q]};let rt=null;function Ht(Q,tt){if(h=tt.getViewerPose(c||r),g=tt,h!==null){let gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Ut=!1;gt.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let D=0;D<gt.length;D++){let Se=gt[D],Nt=null;if(p!==null)Nt=p.getViewport(Se);else{let _t=d.getViewSubImage(f,Se);Nt=_t.viewport,D===0&&(t.setRenderTargetTextures(_,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(_))}let St=U[D];St===void 0&&(St=new bn,St.layers.enable(D),St.viewport=new _e,U[D]=St),St.matrix.fromArray(Se.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Se.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),D===0&&(H.matrix.copy(St.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(St)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let D=d.getDepthInformation(gt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<gt.length;D++){let Se=gt[D].camera;if(Se){let Nt=u[Se];Nt||(Nt=new au,u[Se]=Nt);let St=d.getCameraImage(Se);Nt.sourceTexture=St}}}}for(let gt=0;gt<T.length;gt++){let Ut=R[gt],At=T[gt];Ut!==null&&At!==void 0&&At.update(Ut,tt,c||r)}rt&&rt(Q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let qt=new jb;qt.setAnimationLoop(Ht),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}},Vr=new es,DN=new ze;function NN(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,hv(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,v,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(a(m,u),g(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Tn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Tn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let v=t.get(u),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Vr.copy(_),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),m.envMapRotation.value.setFromMatrix4(DN.makeRotationFromEuler(Vr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let v=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function UN(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;i.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));let T=y.program;i.updateUBOMapping(v,T);let R=t.render.frame;a[v.id]!==R&&(f(v),a[v.id]=R)}function h(v){let y=d();v.__bindingPointIndex=y;let _=e.createBuffer(),T=v.__size,R=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,T,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,_),_}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],_=v.uniforms,T=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let R=0,w=_.length;R<w;R++){let N=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,M=N.length;E<M;E++){let U=N[E];if(p(U,R,E,T)===!0){let H=U.__offset,G=Array.isArray(U.value)?U.value:[U.value],q=0;for(let J=0;J<G.length;J++){let Y=G[J],nt=x(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,e.bufferSubData(e.UNIFORM_BUFFER,H+q,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,q),q+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,y,_,T){let R=v.value,w=y+"_"+_;if(T[w]===void 0)return typeof R=="number"||typeof R=="boolean"?T[w]=R:T[w]=R.clone(),!0;{let N=T[w];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return T[w]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(v){let y=v.uniforms,_=0,T=16;for(let w=0,N=y.length;w<N;w++){let E=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,U=E.length;M<U;M++){let H=E[M],G=Array.isArray(H.value)?H.value:[H.value];for(let q=0,J=G.length;q<J;q++){let Y=G[q],nt=x(Y),W=_%T,lt=W%nt.boundary,ut=W+lt;_+=lt,ut!==0&&T-ut<nt.storage&&(_+=T-ut),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=nt.storage}}}let R=_%T;return R>0&&(_+=T-R),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function u(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var np=class{constructor(t={}){let{canvas:n=bb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,T=!1;this._outputColorSpace=sn;let R=0,w=0,N=null,E=-1,M=null,U=new _e,H=new _e,G=null,q=new Yt(0),J=0,Y=n.width,nt=n.height,W=1,lt=null,ut=null,Dt=new _e(0,0,Y,nt),Wt=new _e(0,0,Y,nt),rt=!1,Ht=new ml,qt=!1,Q=!1,tt=new ze,gt=new P,Ut=new _e,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function Ge(){return N===null?W:1}let D=i;function Se(b,I){return n.getContext(b,I)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",yt,!1),n.addEventListener("webglcontextcreationerror",O,!1),D===null){let I="webgl2";if(D=Se(I,b),D===null)throw Se(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Nt,St,_t,fe,Mt,kt,Be,Re,A,S,F,K,et,Z,wt,ot,Et,Rt,it,dt,bt,Ct,ht,zt;function L(){Nt=new K3(D),Nt.init(),Ct=new wN(D,Nt),St=new k3(D,Nt,t,Ct),_t=new TN(D,Nt),St.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),fe=new $3(D),Mt=new fN,kt=new AN(D,Nt,_t,Mt,St,Ct,fe),Be=new W3(_),Re=new J3(_),A=new aR(D),ht=new V3(D,A),S=new Q3(D,A,fe,ht),F=new eD(D,S,A,fe),it=new tD(D,St,kt),ot=new X3(Mt),K=new hN(_,Be,Re,Nt,St,ht,ot),et=new NN(_,Mt),Z=new pN,wt=new xN(Nt),Rt=new H3(_,Be,Re,_t,F,p,l),Et=new bN(_,F,St),zt=new UN(D,fe,St,_t),dt=new G3(D,Nt,fe),bt=new j3(D,Nt,fe),fe.programs=K.programs,_.capabilities=St,_.extensions=Nt,_.properties=Mt,_.renderLists=Z,_.shadowMap=Et,_.state=_t,_.info=fe}L();let st=new Rv(_,D);this.xr=st,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=Nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(Y,nt,!1))},this.getSize=function(b){return b.set(Y,nt)},this.setSize=function(b,I,V=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,nt=I,n.width=Math.floor(b*W),n.height=Math.floor(I*W),V===!0&&(n.style.width=b+"px",n.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(Y*W,nt*W).floor()},this.setDrawingBufferSize=function(b,I,V){Y=b,nt=I,W=V,n.width=Math.floor(b*V),n.height=Math.floor(I*V),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Dt)},this.setViewport=function(b,I,V,k){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,I,V,k),_t.viewport(U.copy(Dt).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Wt)},this.setScissor=function(b,I,V,k){b.isVector4?Wt.set(b.x,b.y,b.z,b.w):Wt.set(b,I,V,k),_t.scissor(H.copy(Wt).multiplyScalar(W).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(b){_t.setScissorTest(rt=b)},this.setOpaqueSort=function(b){lt=b},this.setTransparentSort=function(b){ut=b},this.getClearColor=function(b){return b.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,V=!0){let k=0;if(b){let B=!1;if(N!==null){let at=N.texture.format;B=at===bd||at===Md||at===Sd}if(B){let at=N.texture.type,pt=at===is||at===Qa||at===yl||at===Sl||at===yd||at===xd,Tt=Rt.getClearColor(),xt=Rt.getClearAlpha(),Ft=Tt.r,Gt=Tt.g,Lt=Tt.b;pt?(g[0]=Ft,g[1]=Gt,g[2]=Lt,g[3]=xt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ft,x[1]=Gt,x[2]=Lt,x[3]=xt,D.clearBufferiv(D.COLOR,0,x))}else k|=D.COLOR_BUFFER_BIT}I&&(k|=D.DEPTH_BUFFER_BIT),V&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",O,!1),Rt.dispose(),Z.dispose(),wt.dispose(),Mt.dispose(),Be.dispose(),Re.dispose(),F.dispose(),ht.dispose(),zt.dispose(),K.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ze),st.removeEventListener("sessionend",li),Kn.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=fe.autoReset,I=Et.enabled,V=Et.autoUpdate,k=Et.needsUpdate,B=Et.type;L(),fe.autoReset=b,Et.enabled=I,Et.autoUpdate=V,Et.needsUpdate=k,Et.type=B}function O(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function z(b){let I=b.target;I.removeEventListener("dispose",z),$(I)}function $(b){mt(b),Mt.remove(b)}function mt(b){let I=Mt.get(b).programs;I!==void 0&&(I.forEach(function(V){K.releaseProgram(V)}),b.isShaderMaterial&&K.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,V,k,B,at){I===null&&(I=At);let pt=B.isMesh&&B.matrixWorld.determinant()<0,Tt=ci(b,I,V,k,B);_t.setMaterial(k,pt);let xt=V.index,Ft=1;if(k.wireframe===!0){if(xt=S.getWireframeAttribute(V),xt===void 0)return;Ft=2}let Gt=V.drawRange,Lt=V.attributes.position,se=Gt.start*Ft,be=(Gt.start+Gt.count)*Ft;at!==null&&(se=Math.max(se,at.start*Ft),be=Math.min(be,(at.start+at.count)*Ft)),xt!==null?(se=Math.max(se,0),be=Math.min(be,xt.count)):Lt!=null&&(se=Math.max(se,0),be=Math.min(be,Lt.count));let ke=be-se;if(ke<0||ke===1/0)return;ht.setup(B,k,Tt,V,xt);let Le,Te=dt;if(xt!==null&&(Le=A.get(xt),Te=bt,Te.setIndex(Le)),B.isMesh)k.wireframe===!0?(_t.setLineWidth(k.wireframeLinewidth*Ge()),Te.setMode(D.LINES)):Te.setMode(D.TRIANGLES);else if(B.isLine){let Pt=k.linewidth;Pt===void 0&&(Pt=1),_t.setLineWidth(Pt*Ge()),B.isLineSegments?Te.setMode(D.LINES):B.isLineLoop?Te.setMode(D.LINE_LOOP):Te.setMode(D.LINE_STRIP)}else B.isPoints?Te.setMode(D.POINTS):B.isSprite&&Te.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ul("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Pt=B._multiDrawStarts,Fe=B._multiDrawCounts,le=B._multiDrawCount,ui=xt?A.get(xt).bytesPerElement:1,Wr=Mt.get(k).currentProgram.getUniforms();for(let hi=0;hi<le;hi++)Wr.setValue(D,"_gl_DrawID",hi),Te.render(Pt[hi]/ui,Fe[hi])}else if(B.isInstancedMesh)Te.renderInstances(se,ke,B.count);else if(V.isInstancedBufferGeometry){let Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Fe=Math.min(V.instanceCount,Pt);Te.renderInstances(se,ke,Fe)}else Te.render(se,ke)};function Qt(b,I,V){b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,Me(b,I,V),b.side=ta,b.needsUpdate=!0,Me(b,I,V),b.side=An):Me(b,I,V)}this.compile=function(b,I,V=null){V===null&&(V=b),u=wt.get(V),u.init(I),y.push(u),V.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),b!==V&&b.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();let k=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let at=B.material;if(at)if(Array.isArray(at))for(let pt=0;pt<at.length;pt++){let Tt=at[pt];Qt(Tt,V,B),k.add(Tt)}else Qt(at,V,B),k.add(at)}),u=y.pop(),k},this.compileAsync=function(b,I,V=null){let k=this.compile(b,I,V);return new Promise(B=>{function at(){if(k.forEach(function(pt){Mt.get(pt).currentProgram.isReady()&&k.delete(pt)}),k.size===0){B(b);return}setTimeout(at,10)}Nt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let vt=null;function Ye(b){vt&&vt(b)}function Ze(){Kn.stop()}function li(){Kn.start()}let Kn=new jb;Kn.setAnimationLoop(Ye),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){vt=b,st.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},st.addEventListener("sessionstart",Ze),st.addEventListener("sessionend",li),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(I),I=st.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,I,N),u=wt.get(b,y.length),u.init(I),y.push(u),tt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ht.setFromProjectionMatrix(tt,ts,I.reversedDepth),Q=this.localClippingEnabled,qt=ot.init(this.clippingPlanes,Q),m=Z.get(b,v.length),m.init(),v.push(m),st.enabled===!0&&st.isPresenting===!0){let at=_.xr.getDepthSensingMesh();at!==null&&Rs(at,I,-1/0,_.sortObjects)}Rs(b,I,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(lt,ut),Kt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Kt&&Rt.addToRenderList(m,b),this.info.render.frame++,qt===!0&&ot.beginShadows();let V=u.state.shadowsArray;Et.render(V,b,I),qt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,B=m.transmissive;if(u.setupLights(),I.isArrayCamera){let at=I.cameras;if(B.length>0)for(let pt=0,Tt=at.length;pt<Tt;pt++){let xt=at[pt];Cl(k,B,b,xt)}Kt&&Rt.render(b);for(let pt=0,Tt=at.length;pt<Tt;pt++){let xt=at[pt];Rl(m,b,xt,xt.viewport)}}else B.length>0&&Cl(k,B,b,I),Kt&&Rt.render(b),Rl(m,b,I);N!==null&&w===0&&(kt.updateMultisampleRenderTarget(N),kt.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(_,b,I),ht.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],qt===!0&&ot.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Rs(b,I,V,k){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ht.intersectsSprite(b)){k&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);let pt=F.update(b),Tt=b.material;Tt.visible&&m.push(b,pt,Tt,V,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ht.intersectsObject(b))){let pt=F.update(b),Tt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ut.copy(pt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(Tt)){let xt=pt.groups;for(let Ft=0,Gt=xt.length;Ft<Gt;Ft++){let Lt=xt[Ft],se=Tt[Lt.materialIndex];se&&se.visible&&m.push(b,pt,se,V,Ut.z,Lt)}}else Tt.visible&&m.push(b,pt,Tt,V,Ut.z,null)}}let at=b.children;for(let pt=0,Tt=at.length;pt<Tt;pt++)Rs(at[pt],I,V,k)}function Rl(b,I,V,k){let B=b.opaque,at=b.transmissive,pt=b.transparent;u.setupLightsView(V),qt===!0&&ot.setGlobalState(_.clippingPlanes,V),k&&_t.viewport(U.copy(k)),B.length>0&&It(B,I,V),at.length>0&&It(at,I,V),pt.length>0&&It(pt,I,V),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Cl(b,I,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new Es(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?xl:is,minFilter:ns,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let at=u.state.transmissionRenderTarget[k.id],pt=k.viewport||U;at.setSize(pt.z*_.transmissionResolutionScale,pt.w*_.transmissionResolutionScale);let Tt=_.getRenderTarget(),xt=_.getActiveCubeFace(),Ft=_.getActiveMipmapLevel();_.setRenderTarget(at),_.getClearColor(q),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),Kt&&Rt.render(V);let Gt=_.toneMapping;_.toneMapping=aa;let Lt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),qt===!0&&ot.setGlobalState(_.clippingPlanes,k),It(b,V,k),kt.updateMultisampleRenderTarget(at),kt.updateRenderTargetMipmap(at),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let be=0,ke=I.length;be<ke;be++){let Le=I[be],Te=Le.object,Pt=Le.geometry,Fe=Le.material,le=Le.group;if(Fe.side===An&&Te.layers.test(k.layers)){let ui=Fe.side;Fe.side=Tn,Fe.needsUpdate=!0,ie(Te,V,k,Pt,Fe,le),Fe.side=ui,Fe.needsUpdate=!0,se=!0}}se===!0&&(kt.updateMultisampleRenderTarget(at),kt.updateRenderTargetMipmap(at))}_.setRenderTarget(Tt,xt,Ft),_.setClearColor(q,J),Lt!==void 0&&(k.viewport=Lt),_.toneMapping=Gt}function It(b,I,V){let k=I.isScene===!0?I.overrideMaterial:null;for(let B=0,at=b.length;B<at;B++){let pt=b[B],Tt=pt.object,xt=pt.geometry,Ft=pt.group,Gt=pt.material;Gt.allowOverride===!0&&k!==null&&(Gt=k),Tt.layers.test(V.layers)&&ie(Tt,I,V,xt,Gt,Ft)}}function ie(b,I,V,k,B,at){b.onBeforeRender(_,I,V,k,B,at),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(_,I,V,k,b,at),B.transparent===!0&&B.side===An&&B.forceSinglePass===!1?(B.side=Tn,B.needsUpdate=!0,_.renderBufferDirect(V,I,k,B,b,at),B.side=ta,B.needsUpdate=!0,_.renderBufferDirect(V,I,k,B,b,at),B.side=An):_.renderBufferDirect(V,I,k,B,b,at),b.onAfterRender(_,I,V,k,B,at)}function Me(b,I,V){I.isScene!==!0&&(I=At);let k=Mt.get(b),B=u.state.lights,at=u.state.shadowsArray,pt=B.state.version,Tt=K.getParameters(b,B.state,at,I,V),xt=K.getProgramCacheKey(Tt),Ft=k.programs;k.environment=b.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(b.isMeshStandardMaterial?Re:Be).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ft===void 0&&(b.addEventListener("dispose",z),Ft=new Map,k.programs=Ft);let Gt=Ft.get(xt);if(Gt!==void 0){if(k.currentProgram===Gt&&k.lightsStateVersion===pt)return Rn(b,Tt),Gt}else Tt.uniforms=K.getUniforms(b),b.onBeforeCompile(Tt,_),Gt=K.acquireProgram(Tt,xt),Ft.set(xt,Gt),k.uniforms=Tt.uniforms;let Lt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=ot.uniform),Rn(b,Tt),k.needsLights=Cs(b),k.lightsStateVersion=pt,k.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Gt,k.uniformsList=null,Gt}function mn(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Tl.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Rn(b,I){let V=Mt.get(b);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function ci(b,I,V,k,B){I.isScene!==!0&&(I=At),kt.resetTextureUnits();let at=I.fog,pt=k.isMeshStandardMaterial?I.environment:null,Tt=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Nr,xt=(k.isMeshStandardMaterial?Re:Be).get(k.envMap||pt),Ft=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Lt=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,be=!!V.morphAttributes.color,ke=aa;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ke=_.toneMapping);let Le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Te=Le!==void 0?Le.length:0,Pt=Mt.get(k),Fe=u.state.lights;if(qt===!0&&(Q===!0||b!==M)){let Hn=b===M&&k.id===E;ot.setState(k,b,Hn)}let le=!1;k.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Fe.state.version||Pt.outputColorSpace!==Tt||B.isBatchedMesh&&Pt.batching===!1||!B.isBatchedMesh&&Pt.batching===!0||B.isBatchedMesh&&Pt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pt.instancing===!1||!B.isInstancedMesh&&Pt.instancing===!0||B.isSkinnedMesh&&Pt.skinning===!1||!B.isSkinnedMesh&&Pt.skinning===!0||B.isInstancedMesh&&Pt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pt.instancingMorph===!1&&B.morphTexture!==null||Pt.envMap!==xt||k.fog===!0&&Pt.fog!==at||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ot.numPlanes||Pt.numIntersection!==ot.numIntersection)||Pt.vertexAlphas!==Ft||Pt.vertexTangents!==Gt||Pt.morphTargets!==Lt||Pt.morphNormals!==se||Pt.morphColors!==be||Pt.toneMapping!==ke||Pt.morphTargetsCount!==Te)&&(le=!0):(le=!0,Pt.__version=k.version);let ui=Pt.currentProgram;le===!0&&(ui=Me(k,I,B));let Wr=!1,hi=!1,Nl=!1,He=ui.getUniforms(),wi=Pt.uniforms;if(_t.useProgram(ui.program)&&(Wr=!0,hi=!0,Nl=!0),k.id!==E&&(E=k.id,hi=!0),Wr||M!==b){_t.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),He.setValue(D,"projectionMatrix",b.projectionMatrix),He.setValue(D,"viewMatrix",b.matrixWorldInverse);let Qn=He.map.cameraPosition;Qn!==void 0&&Qn.setValue(D,gt.setFromMatrixPosition(b.matrixWorld)),St.logarithmicDepthBuffer&&He.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&He.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,hi=!0,Nl=!0)}if(B.isSkinnedMesh){He.setOptional(D,B,"bindMatrix"),He.setOptional(D,B,"bindMatrixInverse");let Hn=B.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),He.setValue(D,"boneTexture",Hn.boneTexture,kt))}B.isBatchedMesh&&(He.setOptional(D,B,"batchingTexture"),He.setValue(D,"batchingTexture",B._matricesTexture,kt),He.setOptional(D,B,"batchingIdTexture"),He.setValue(D,"batchingIdTexture",B._indirectTexture,kt),He.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&He.setValue(D,"batchingColorTexture",B._colorsTexture,kt));let Ri=V.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&it.update(B,V,ui),(hi||Pt.receiveShadow!==B.receiveShadow)&&(Pt.receiveShadow=B.receiveShadow,He.setValue(D,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(wi.envMap.value=xt,wi.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(wi.envMapIntensity.value=I.environmentIntensity),hi&&(He.setValue(D,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&ss(wi,Nl),at&&k.fog===!0&&et.refreshFogUniforms(wi,at),et.refreshMaterialUniforms(wi,k,W,nt,u.state.transmissionRenderTarget[b.id]),Tl.upload(D,mn(Pt),wi,kt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Tl.upload(D,mn(Pt),wi,kt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&He.setValue(D,"center",B.center),He.setValue(D,"modelViewMatrix",B.modelViewMatrix),He.setValue(D,"normalMatrix",B.normalMatrix),He.setValue(D,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Hn=k.uniformsGroups;for(let Qn=0,ap=Hn.length;Qn<ap;Qn++){let ja=Hn[Qn];zt.update(ja,ui),zt.bind(ja,ui)}}return ui}function ss(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Cs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,I,V){let k=Mt.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Mt.get(b.texture).__webglTexture=I,Mt.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let V=Mt.get(b);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};let zv=D.createFramebuffer();this.setRenderTarget=function(b,I=0,V=0){N=b,R=I,w=V;let k=!0,B=null,at=!1,pt=!1;if(b){let xt=Mt.get(b);if(xt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(xt.__webglFramebuffer===void 0)kt.setupRenderTarget(b);else if(xt.__hasExternalTextures)kt.rebindTextures(b,Mt.get(b.texture).__webglTexture,Mt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Lt=b.depthTexture;if(xt.__boundDepthTexture!==Lt){if(Lt!==null&&Mt.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(b)}}let Ft=b.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(pt=!0);let Gt=Mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[I])?B=Gt[I][V]:B=Gt[I],at=!0):b.samples>0&&kt.useMultisampledRTT(b)===!1?B=Mt.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?B=Gt[V]:B=Gt,U.copy(b.viewport),H.copy(b.scissor),G=b.scissorTest}else U.copy(Dt).multiplyScalar(W).floor(),H.copy(Wt).multiplyScalar(W).floor(),G=rt;if(V!==0&&(B=zv),_t.bindFramebuffer(D.FRAMEBUFFER,B)&&k&&_t.drawBuffers(b,B),_t.viewport(U),_t.scissor(H),_t.setScissorTest(G),at){let xt=Mt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,xt.__webglTexture,V)}else if(pt){let xt=I;for(let Ft=0;Ft<b.textures.length;Ft++){let Gt=Mt.get(b.textures[Ft]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ft,Gt.__webglTexture,V,xt)}}else if(b!==null&&V!==0){let xt=Mt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(b,I,V,k,B,at,pt,Tt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){_t.bindFramebuffer(D.FRAMEBUFFER,xt);try{let Ft=b.textures[Tt],Gt=Ft.format,Lt=Ft.type;if(!St.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-k&&V>=0&&V<=b.height-B&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Tt),D.readPixels(I,V,k,B,Ct.convert(Gt),Ct.convert(Lt),at))}finally{let Ft=N!==null?Mt.get(N).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(b,I,V,k,B,at,pt,Tt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt)if(I>=0&&I<=b.width-k&&V>=0&&V<=b.height-B){_t.bindFramebuffer(D.FRAMEBUFFER,xt);let Ft=b.textures[Tt],Gt=Ft.format,Lt=Ft.type;if(!St.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Tt),D.readPixels(I,V,k,B,Ct.convert(Gt),Ct.convert(Lt),0);let be=N!==null?Mt.get(N).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,be);let ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Eb(D,ke,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(se),D.deleteSync(ke),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,V=0){let k=Math.pow(2,-V),B=Math.floor(b.image.width*k),at=Math.floor(b.image.height*k),pt=I!==null?I.x:0,Tt=I!==null?I.y:0;kt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,pt,Tt,B,at),_t.unbindTexture()};let Dl=D.createFramebuffer(),as=D.createFramebuffer();this.copyTextureToTexture=function(b,I,V=null,k=null,B=0,at=null){at===null&&(B!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=B,B=0):at=0);let pt,Tt,xt,Ft,Gt,Lt,se,be,ke,Le=b.isCompressedTexture?b.mipmaps[at]:b.image;if(V!==null)pt=V.max.x-V.min.x,Tt=V.max.y-V.min.y,xt=V.isBox3?V.max.z-V.min.z:1,Ft=V.min.x,Gt=V.min.y,Lt=V.isBox3?V.min.z:0;else{let Ri=Math.pow(2,-B);pt=Math.floor(Le.width*Ri),Tt=Math.floor(Le.height*Ri),b.isDataArrayTexture?xt=Le.depth:b.isData3DTexture?xt=Math.floor(Le.depth*Ri):xt=1,Ft=0,Gt=0,Lt=0}k!==null?(se=k.x,be=k.y,ke=k.z):(se=0,be=0,ke=0);let Te=Ct.convert(I.format),Pt=Ct.convert(I.type),Fe;I.isData3DTexture?(kt.setTexture3D(I,0),Fe=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(kt.setTexture2DArray(I,0),Fe=D.TEXTURE_2D_ARRAY):(kt.setTexture2D(I,0),Fe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let le=D.getParameter(D.UNPACK_ROW_LENGTH),ui=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Wr=D.getParameter(D.UNPACK_SKIP_PIXELS),hi=D.getParameter(D.UNPACK_SKIP_ROWS),Nl=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ft),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Lt);let He=b.isDataArrayTexture||b.isData3DTexture,wi=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let Ri=Mt.get(b),Hn=Mt.get(I),Qn=Mt.get(Ri.__renderTarget),ap=Mt.get(Hn.__renderTarget);_t.bindFramebuffer(D.READ_FRAMEBUFFER,Qn.__webglFramebuffer),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,ap.__webglFramebuffer);for(let ja=0;ja<xt;ja++)He&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(b).__webglTexture,B,Lt+ja),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(I).__webglTexture,at,ke+ja)),D.blitFramebuffer(Ft,Gt,pt,Tt,se,be,pt,Tt,D.DEPTH_BUFFER_BIT,D.NEAREST);_t.bindFramebuffer(D.READ_FRAMEBUFFER,null),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||Mt.has(b)){let Ri=Mt.get(b),Hn=Mt.get(I);_t.bindFramebuffer(D.READ_FRAMEBUFFER,Dl),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,as);for(let Qn=0;Qn<xt;Qn++)He?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ri.__webglTexture,B,Lt+Qn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ri.__webglTexture,B),wi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hn.__webglTexture,at,ke+Qn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hn.__webglTexture,at),B!==0?D.blitFramebuffer(Ft,Gt,pt,Tt,se,be,pt,Tt,D.COLOR_BUFFER_BIT,D.NEAREST):wi?D.copyTexSubImage3D(Fe,at,se,be,ke+Qn,Ft,Gt,pt,Tt):D.copyTexSubImage2D(Fe,at,se,be,Ft,Gt,pt,Tt);_t.bindFramebuffer(D.READ_FRAMEBUFFER,null),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else wi?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Fe,at,se,be,ke,pt,Tt,xt,Te,Pt,Le.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Fe,at,se,be,ke,pt,Tt,xt,Te,Le.data):D.texSubImage3D(Fe,at,se,be,ke,pt,Tt,xt,Te,Pt,Le):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,at,se,be,pt,Tt,Te,Pt,Le.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,at,se,be,Le.width,Le.height,Te,Le.data):D.texSubImage2D(D.TEXTURE_2D,at,se,be,pt,Tt,Te,Pt,Le);D.pixelStorei(D.UNPACK_ROW_LENGTH,le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ui),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Wr),D.pixelStorei(D.UNPACK_SKIP_ROWS,hi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nl),at===0&&I.generateMipmaps&&D.generateMipmap(Fe),_t.unbindTexture()},this.initRenderTarget=function(b){Mt.get(b).__webglFramebuffer===void 0&&kt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?kt.setTextureCube(b,0):b.isData3DTexture?kt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?kt.setTexture2DArray(b,0):kt.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){R=0,w=0,N=null,_t.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),n.unpackColorSpace=oe._getUnpackColorSpace()}};function sE(e,t,n){if(!e)return t;let i=Math.max(0,Math.min(1,n));return{x:e.x+(t.x-e.x)*i,z:e.z+(t.z-e.z)*i}}var aE=[{coat:"#79bda5",shade:"#568b8d",deep:"#426a7e",hair:"#49445e",hairLight:"#756480",skin:"#e7af8f",skinLight:"#ffd2a6",accent:"#f5e2a2"},{coat:"#b29acb",shade:"#80759f",deep:"#60577f",hair:"#65516a",hairLight:"#9e7887",skin:"#c99074",skinLight:"#eab997",accent:"#f5c39b"},{coat:"#d99683",shade:"#ab727d",deep:"#755d78",hair:"#34374f",hairLight:"#65647b",skin:"#aa745b",skinLight:"#d4a27d",accent:"#d5efbc"},{coat:"#d9bc78",shade:"#a78673",deep:"#786b78",hair:"#a87962",hairLight:"#d2a477",skin:"#ddab85",skinLight:"#f7caa3",accent:"#a7ddd1"}],Ot="#2d3049";function C(e,t,n,i,s,a){e.fillStyle=t,e.fillRect(n,i,s,a)}function Bn(e,t,n,i,s,a){for(let r=-a;r<=a;r++){let o=Math.floor(s*Math.sqrt(1-r*r/((a+.5)*(a+.5))));C(e,t,n-o,i+r,o*2+1,1)}}function oa(e,t,n){for(let[i,s]of n)C(e,t,i,s,1,1)}function Fn(e,t,n){let i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d");if(!s)throw new Error("Canvas 2D is required to draw the office sprites.");n(s);let a=new Vi(i);return a.colorSpace=sn,a.magFilter=dn,a.minFilter=dn,a.generateMipmaps=!1,a}function Dv(e,t,n,i){let{coat:s,shade:a,deep:r,hair:o,hairLight:l,skin:c,skinLight:h,accent:d}=aE[t%aE.length],f=n==="stepA"?-2:n==="stepB"?2:0,p=n==="working",g=i==="left",x=p?22:24;for(let[m,u]of[[11+f,8+f],[19-f,18-f]])C(e,Ot,m,30,4,7),C(e,r,m+1,31,2,5),C(e,Ot,u,36,7,3),C(e,a,u+1,36,4,1);for(let m of[6,23])C(e,Ot,m,x,4,7),C(e,a,m+1,x+1,2,5),C(e,s,m+1,x+1,2,3),C(e,c,m+1,x+6,3,2);if(Bn(e,Ot,16,25,9,7),Bn(e,r,18,26,6,5),Bn(e,s,14,24,6,5),C(e,d,12,20,7,2),C(e,h,15,22,2,2),C(e,a,11,28,3,2),C(e,Ot,16,24,1,7),i==="away"){Bn(e,s,16,25,7,6),C(e,a,10,24,3,6),C(e,d,15,24,2,5),Bn(e,Ot,16,13,10,10),Bn(e,o,16,12,9,8),Bn(e,l,13,9,5,3),C(e,c,6,16,2,3),C(e,c,24,16,2,3),t%4===1?(C(e,o,7,16,4,7),C(e,o,22,16,4,7)):t%4===2?(C(e,o,7,16,5,4),C(e,l,19,8,5,2)):t%4===3?(C(e,d,10,8,14,3),C(e,o,7,11,18,3)):(C(e,l,10,5,6,2),C(e,o,8,12,5,5)),n==="coffee"&&(C(e,Ot,23,24,6,7),C(e,"#fff2d3",24,25,4,5),C(e,a,25,26,2,2)),p&&C(e,d,12,29,8,1);return}switch(Bn(e,Ot,16,13,10,10),Bn(e,o,16,11,9,8),Bn(e,c,16,16,7,6),Bn(e,h,g?13:15,14,4,3),C(e,c,g?25:6,15,2,3),t%4){case 0:Bn(e,o,14,7,8,4),C(e,l,10,5,6,2),C(e,o,g?6:19,10,7,5);break;case 1:Bn(e,o,16,7,9,5),C(e,l,12,5,6,2),C(e,o,6,12,4,8),C(e,o,23,11,3,8),C(e,d,12,22,8,2);break;case 2:Bn(e,o,16,9,10,7),C(e,l,10,5,6,2),C(e,o,g?6:22,12,4,6),C(e,Ot,10,14,5,3),C(e,Ot,18,14,5,3),C(e,Ot,15,15,3,1),C(e,h,11,15,3,1),C(e,h,19,15,3,1);break;default:Bn(e,o,16,9,9,6),C(e,Ot,7,9,18,3),C(e,d,9,9,14,2),C(e,o,11,12,5,2),C(e,d,20,24,3,2);break}C(e,Ot,g?12:19,16,2,p?1:2),C(e,Ot,g?19:12,16,1,p?1:2),C(e,a,g?11:21,18,1,1),C(e,"#bd7979",g?14:16,20,3,1),n==="coffee"&&(C(e,Ot,g?1:25,23,6,7),C(e,"#fff2d3",g?2:26,24,4,5),C(e,a,g?3:27,26,3,1)),p&&C(e,d,12,29,8,1)}function rE(e){let t=n=>({left:Fn(32,40,i=>Dv(i,e,n,"left")),right:Fn(32,40,i=>Dv(i,e,n,"right")),away:Fn(32,40,i=>Dv(i,e,n,"away"))});return{idle:t("idle"),stepA:t("stepA"),stepB:t("stepB"),working:t("working"),coffee:t("coffee")}}function oE(){return Fn(96,56,e=>{C(e,Ot,6,22,84,31),C(e,"#775d70",8,27,80,23),C(e,"#a17b80",10,30,75,13),C(e,"#d9ac8e",12,30,70,3),C(e,"#3c384e",30,34,36,9),C(e,"#5aa59a",33,36,30,3),C(e,"#e4c391",36,39,24,2),C(e,"#f0d3ae",9,20,79,9),C(e,"#fff0d1",13,21,69,2),C(e,Ot,35,3,27,18),C(e,"#777087",38,5,21,14),C(e,"#b9a2aa",39,5,14,3),C(e,"#3b5260",42,9,13,8),C(e,"#8be0bd",44,11,9,3),C(e,Ot,41,18,16,3);for(let t of[17,70])C(e,Ot,t,14,9,8),C(e,"#f8e6cd",t+1,15,6,5),C(e,"#82bbad",t+2,16,3,2),C(e,"#f4d5af",t+2,11,2,3);C(e,Ot,10,50,14,4),C(e,Ot,73,50,14,4)})}function lE(e="CHAT ROOM"){return Fn(256,64,t=>{C(t,"#3b344d",5,8,246,49),C(t,"#d5a989",8,11,240,43),C(t,"#51445c",13,15,230,35),C(t,"#bce7cd",18,20,6,25),C(t,"#bce7cd",232,20,6,25),t.fillStyle="#fff0ce",t.font="bold 31px monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(e,128,34)})}function wl(e,t=0){return Fn(48,48,n=>{C(n,"#31334c",5,5,38,38),C(n,"#f7e9cc",8,8,32,32),C(n,e==="failed"?"#d2828c":"#8bbda9",10,10,28,3),C(n,"#4a465d",14,18,21,13),C(n,"#fff2d7",17,20,15,8),C(n,e==="failed"?"#d2828c":"#72b4a5",20,22,9,2),C(n,"#4a465d",18,30,5,4),C(n,"#fff0d1",25,31,5,2);let i=e==="working"?t:e==="complete"||e==="failed"?16:0;for(let s=0;s<16;s++){let a=Math.floor(s/4),r=s%4,o=a===0?6+r*9:a===1?41:a===2?33-r*9:4,l=a===0?3:a===1?6+r*9:a===2?41:33-r*9;C(n,s<i?e==="failed"?"#f2a3a3":"#95f2cc":"#74617d",o,l,a%2===0?8:3,a%2===0?3:8)}(e==="queued"||e==="assigned")&&(C(n,"#f5b978",22,15,4,5),C(n,"#f5b978",22,33,4,3))})}function cE(e){return Fn(40,40,t=>{let n=e%2?"#d4b5ee":"#9ce4ce";C(t,Ot,7,3,25,28),C(t,Ot,5,6,30,21),C(t,"#806d91",8,5,24,23),C(t,"#c0a6bb",9,5,18,2),C(t,"#39394e",11,8,20,17),C(t,"#30485c",12,9,17,14),C(t,"#568f9c",13,10,11,1),C(t,n,14,12,10,2),C(t,"#ffdfaa",14,16,7,1),C(t,n,14,19,12,2),C(t,"#6f9eaa",14,22,5,1),C(t,"#f6d7aa",14,27,11,2),C(t,Ot,18,31,5,5),C(t,"#aa8da5",19,31,2,4),C(t,Ot,12,36,17,3),C(t,"#ffedcc",14,36,12,1),oa(t,"#e9e1db",[[10,8],[10,9],[31,26],[30,27]])})}function uE(){return Fn(42,50,e=>{C(e,"#293f50",18,15,5,23),C(e,"#456b65",20,18,2,16),C(e,"#293f50",9,13,9,19),C(e,"#293f50",6,18,16,11),C(e,"#293f50",4,15,5,8),C(e,"#293f50",11,7,6,9),C(e,"#293f50",14,4,5,6),C(e,"#4f897a",8,16,12,12),C(e,"#5a9a83",10,12,7,13),C(e,"#82bb91",12,9,4,9),C(e,"#91c8a0",6,20,5,4),C(e,"#74ad8e",10,23,8,3),C(e,"#b0d5a4",12,14,2,4),C(e,"#293f50",25,10,7,22),C(e,"#293f50",22,17,15,11),C(e,"#293f50",31,13,6,9),C(e,"#293f50",27,5,5,8),C(e,"#4f897a",24,15,11,13),C(e,"#5a9a83",27,11,7,13),C(e,"#82bb91",28,8,4,9),C(e,"#a9d6a2",33,17,4,4),C(e,"#74ad8e",28,23,6,3),C(e,"#b0d5a4",28,13,2,4),C(e,"#293f50",17,21,8,12),C(e,"#599784",17,20,7,11),C(e,"#9ac69a",18,19,4,7),oa(e,"#b6d9a5",[[9,15],[13,12],[15,7],[27,13],[31,9],[29,21]]),oa(e,"#294c58",[[8,26],[17,18],[34,24],[23,28]]),C(e,Ot,13,35,17,4),C(e,"#e8bb96",15,38,14,8),C(e,"#c78980",20,40,9,6),C(e,"#f6d7aa",16,39,6,2),C(e,Ot,15,46,15,2)})}function hE(){return Fn(28,24,e=>{C(e,Ot,3,10,23,11),C(e,"#72617c",4,11,20,8),C(e,"#9c83a1",5,11,15,3),C(e,"#d1a58c",7,6,13,6),C(e,"#f2d5a1",8,7,10,3),C(e,"#eff5d3",11,3,11,7),C(e,"#77b9a4",12,4,7,2),C(e,"#f7deaa",13,7,6,1),C(e,"#aad4b0",6,16,14,2),C(e,Ot,4,21,21,2)})}function fE(e){return Fn(80,70,t=>{let n=e%2?"#ead4bb":"#f3ddba";C(t,Ot,13,21,57,20),C(t,Ot,9,25,58,17),C(t,"#785e78",11,30,57,16),C(t,"#a97e7f",10,26,56,15),C(t,"#f8e8c7",17,19,49,8),C(t,n,13,24,52,10),C(t,"#fff4d6",20,19,39,2),C(t,"#d4af9b",13,32,52,3),C(t,"#9a6d79",14,37,52,4),C(t,"#efbda2",19,32,26,2),C(t,"#564664",14,42,10,22),C(t,"#8c687e",15,43,6,18),C(t,"#d8a69c",16,45,2,5),C(t,"#564664",58,41,10,22),C(t,"#8c687e",60,42,6,17),C(t,"#d8a69c",60,45,2,5),C(t,Ot,12,62,13,5),C(t,Ot,56,61,14,5),C(t,"#382d4b",28,37,4,2),C(t,"#382d4b",46,37,4,2),oa(t,"#fff7de",[[21,22],[23,22],[59,23],[61,23]])})}function dE(){return Fn(40,54,e=>{C(e,Ot,8,6,26,30),C(e,Ot,6,9,30,24),C(e,"#6c608a",9,8,24,25),C(e,"#9b83ab",11,8,20,19),C(e,"#c9aecc",14,10,14,13),C(e,"#f1d9d0",15,10,9,2),C(e,Ot,7,33,28,8),C(e,"#8b77a1",10,33,23,5),C(e,"#c7acc3",12,33,14,2),C(e,Ot,19,41,5,8),C(e,"#6a5f80",20,41,2,6),C(e,Ot,10,48,24,4),C(e,"#b2a2b8",14,48,14,1),oa(e,"#f8e4d7",[[14,15],[17,14],[28,23]])})}function pE(){return Fn(48,64,e=>{C(e,Ot,7,46,36,14),C(e,"#765b68",9,47,31,11),C(e,"#b18683",10,48,24,5),C(e,"#e2b698",11,48,19,2),C(e,"#533f53",11,55,28,2),C(e,"#e6c4a4",13,55,6,1),C(e,"#e6c4a4",28,55,6,1),C(e,Ot,10,59,8,3),C(e,Ot,32,59,8,3),C(e,Ot,9,11,32,36),C(e,"#775c73",11,13,27,32),C(e,"#a8838d",12,14,22,3),C(e,"#d9b49f",12,18,2,23),C(e,"#4c465d",15,18,20,23),C(e,"#356a74",17,20,16,17),C(e,"#579e96",18,21,13,11),C(e,"#9bd4ae",19,22,9,6),C(e,"#e8e6af",21,24,4,4),C(e,"#fff1ba",22,24,2,2),C(e,"#377778",20,30,10,2),C(e,"#f7d9a5",19,39,3,2),C(e,"#8dd2aa",24,39,3,2),C(e,"#f7d9a5",29,39,3,2),C(e,Ot,7,8,36,5),C(e,"#9c7882",9,8,32,3),C(e,"#f2c9a5",11,8,24,1),C(e,"#533f53",6,42,36,5),C(e,"#d4a48e",9,42,27,2),C(e,"#f8e3b9",10,43,15,1),oa(e,"#fce6bd",[[12,15],[36,15],[12,48],[39,48]])})}function mE(){return Fn(64,63,e=>{C(e,Ot,13,8,41,36),C(e,"#706493",16,6,34,35),C(e,"#ad9cc6",18,7,26,30),C(e,"#eddaee",20,9,23,25),C(e,"#34485c",22,13,20,19),C(e,"#517883",23,14,15,3),C(e,"#a5f0cc",25,19,13,2),C(e,"#b9d5e2",25,24,8,2),C(e,"#f8e4aa",25,29,12,1),C(e,Ot,7,39,50,17),C(e,"#866f9c",9,40,46,13),C(e,"#c6b3d0",12,40,38,8),C(e,"#f9ebd8",14,41,31,2),C(e,Ot,10,51,10,11),C(e,"#706184",12,52,7,8),C(e,Ot,44,51,10,11),C(e,"#706184",46,52,6,8),oa(e,"#fff9e5",[[19,11],[20,11],[50,43],[51,43]])})}function Nv(e){return Fn(40,52,t=>{C(t,Ot,6,36,29,11),C(t,"#ab829e",9,36,23,8),C(t,"#f7e7c7",11,36,17,2),C(t,Ot,9,25,25,10),C(t,e%2?"#91ceb0":"#e3b695",12,26,19,5),C(t,"#fff0d1",13,26,10,1),C(t,Ot,4,15,25,9),C(t,"#9d90bb",7,16,19,5),C(t,"#e6d5ef",8,16,9,1),C(t,Ot,14,6,22,9),C(t,"#e5bd91",17,7,16,6),C(t,"#f9e8b7",18,7,11,1),C(t,Ot,12,47,22,3),oa(t,"#ebdcce",[[8,19],[10,20],[20,29],[14,40]])})}function gE(e){return Fn(36,44,t=>{C(t,Ot,2,3,32,38),C(t,"#ab8ea7",4,4,28,35),C(t,"#eedadd",6,6,24,32),C(t,e%2?"#d99b97":"#83b9ae",8,8,20,27),Bn(t,"#fff2d4",e%2?20:16,19,5,7),C(t,"#474964",15,22,11,3),C(t,"#f4ddac",10,29,12,2),oa(t,"#fff9e5",[[8,7],[9,7],[27,34]])})}function vE(){return Fn(20,26,e=>{C(e,"#302d4a",3,4,14,19),C(e,"#726b92",5,5,10,14),C(e,"#a0f3d2",6,7,8,8),C(e,"#fff4d4",8,8,3,3),C(e,"#302d4a",6,22,9,3)})}var Ai={edge:6181475,wall:9533568,wallTop:15910293,cream:16769709,lavender:12297963},Bt={halfWidth:7.7,back:-5.2,front:5.8,windowY:1.72},Uv=[-4.8,0,4.8],_E=0,yu=new P(0,15,20),oi={x:-3.8,z:-2.2},Ov=-3.55,LN=new Yt(11127295),ON=new Yt(12110826),IN=new Yt(11848948),PN=new Yt(16767681),zN=new Yt(7506858);function yE(e,t=0,n=0){return new Lr({color:e,roughness:.88,flatShading:!0,emissive:t,emissiveIntensity:n})}function BN(){let e=document.createElement("canvas");e.width=1024,e.height=768;let t=e.getContext("2d");if(!t)throw new Error("Canvas 2D is required for the office floor.");t.fillStyle="#785a51",t.fillRect(0,0,e.width,e.height);let n=["#d8af83","#cba076","#dfb78c","#d2a77b","#c59a72","#dbb287"],i=(a,r)=>(Math.imul(a,73856093)^Math.imul(r,19349663))>>>0;for(let a=0;a<12;a++){let r=a*64,o=a%2?-116:-20,l=0;for(;o<e.width;){let c=i(l,a),h=188+c%53;t.fillStyle=n[c%n.length],t.fillRect(o+2,r+2,h-3,61),t.fillStyle="#fff0cb20",t.fillRect(o+5,r+4,h-9,2),t.fillStyle="#573e4a18",t.fillRect(o+3,r+58,h-5,3);for(let d=0;d<7;d++){let f=r+9+i(l*7+d,a)%46;t.fillStyle=d%2?"#633f3920":"#ffe2ac32",t.fillRect(o+12+d%3*8,f,h-36-d%3*15,1)}o+=h,l++}}let s=new Vi(e);return s.colorSpace=sn,s.minFilter=ns,s.magFilter=En,s}function FN(){let e=document.createElement("canvas");e.width=128,e.height=96;let t=e.getContext("2d");if(!t)throw new Error("Canvas 2D is required for the window garden.");for(let[i,s,a]of[["#426e6b",83,23],["#5c8971",89,21],["#83a77a",96,17]]){t.fillStyle=i;for(let r=-15;r<150;r+=21)t.beginPath(),t.ellipse(r+r%3*3,s-r%4*4,a,18,0,0,Math.PI*2),t.fill()}for(let i=0;i<42;i++){let s=(Math.imul(i+11,47)%128+128)%128,a=67+Math.imul(i+3,31)%29;t.fillStyle=i%3?"#b6c490":"#365e63",t.fillRect(s,a,2+i%3,1)}let n=new Vi(e);return n.colorSpace=sn,n.minFilter=ns,n.magFilter=En,n}function Jn(e,t,n,i,s,a,r,o,l=0,c=0){let h=new xe(new Za(s,a,r),yE(o,l,c));return h.position.set(t,n,i),h.castShadow=a>.17,h.receiveShadow=!0,e.add(h),h}function wn(e,t,n,i,s,a,r){let o=new xe(new Pn(a,r),new Lr({map:t,alphaTest:.38,side:An,roughness:1,emissiveMap:t,emissive:16777215,emissiveIntensity:.24}));return o.position.set(n,i,s),o.rotation.y=_E,o.castShadow=!1,o.receiveShadow=!0,e.add(o),o}function xE(e,t){let n=new xe(new _l(1,10,6),new In({colorWrite:!1,depthWrite:!1}));return n.scale.set(e*.38,.12,t*.3),n.castShadow=!0,n}function Lv(e,t="#4e4762"){let n=document.createElement("canvas");n.width=256,n.height=64;let i=n.getContext("2d");if(!i)throw new Error("Canvas 2D context is required for office signs.");i.fillStyle="#574c5a",i.fillRect(4,4,248,56),i.strokeStyle="#d4a986",i.lineWidth=5,i.strokeRect(4,4,248,56),i.fillStyle=t==="#4e4762"?"#f9e5bb":t,i.font="bold 25px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,34);let s=new Vi(n);s.magFilter=dn,s.minFilter=dn;let a=new pl(new dl({map:s,transparent:!0,depthTest:!1}));return a.scale.set(1.65,.42,1),a}function HN(e,t,n,i,s){wn(e,s(fE(i)),t,.58,n-.56,1.55,1.23);let a=wn(e,s(cE(i)),t-.1,1.08,n-.67,.77,.77);return wn(e,s(dE()),t+.35,.49,n+.37,.66,.94),a}function VN(e,t,n){let i=new Hi,s=wn(i,n.idle.away,.035,.68,-.065,.99,1.35);s.material.color.setHex(7759223),s.material.emissiveIntensity=0,s.castShadow=!1,s.receiveShadow=!1;let a=wn(i,n.idle.away,0,.67,0,.95,1.32);a.material.emissiveIntensity=.44,s.rotation.y=0,a.rotation.y=0,i.rotation.y=_E;let r=new xe(new Pn(.68,.52),new In({map:t,transparent:!0,depthWrite:!1,opacity:.66,toneMapped:!1}));r.rotation.x=-Math.PI/2,r.renderOrder=3;let o=xE(.68,.52);return{group:i,backing:s,figure:a,frames:n,facing:"away",shadow:r,caster:o}}function SE(e,t,n="game"){let i=n==="live",s=i?Ov:3.55,a=new nu,r=[],o=O=>(r.push(O),O),l=new bn(28,1,.1,100);l.position.copy(yu),l.lookAt(0,.4,0);let c=new np({antialias:!1,alpha:!0,powerPreference:"low-power"});c.outputColorSpace=sn,c.toneMapping=pd,c.toneMappingExposure=1.35,c.setClearColor(0,0),c.shadowMap.enabled=!0,c.shadowMap.type=Gi,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0,c.domElement.className="world-canvas",c.domElement.setAttribute("aria-label","Perspective view of the little AI office"),c.domElement.setAttribute("role","img"),e.appendChild(c.domElement);let h=!1,d=O=>{O.preventDefault(),h=!0,e.classList.add("context-lost")},f=()=>{h=!1,c.shadowMap.needsUpdate=!0,e.classList.remove("context-lost")};c.domElement.addEventListener("webglcontextlost",d),c.domElement.addEventListener("webglcontextrestored",f);let p=new ri({depthWrite:!1,side:Tn,toneMapped:!1,uniforms:{uDay:{value:.7},uWarm:{value:.8},uTime:{value:0},uSun:{value:new P(1,1,-1)},uSkyTint:{value:new Yt(9034192)}},vertexShader:`
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
    `}),g=new xe(new _l(45,24,14),p);g.renderOrder=-1,a.add(g);let x=new hu(15193564,.75),m=new lu(11979214,9858176,.9);a.add(x,m);let u=new uu(16767394,2.4);u.position.set(2,9,-24),u.castShadow=!0;let v=e.clientWidth<980||matchMedia("(pointer: coarse)").matches?512:1024;u.shadow.mapSize.set(v,v),u.shadow.radius=8,u.shadow.blurSamples=8,u.shadow.camera.left=-11,u.shadow.camera.right=11,u.shadow.camera.top=11,u.shadow.camera.bottom=-11,u.shadow.bias=-5e-4,u.shadow.normalBias=.012,a.add(u);let y=new ia(9107160,1.5,5,2);y.position.set(oi.x,1.55,oi.z);let _=new ia(16756347,.9,4,2);_.position.set(0,1.35,s+.1);let T=new ia(16758135,1.1,8,2);T.position.set(.3,2.4,.55),a.add(_,T),i||a.add(y),Jn(a,0,-.3,0,Bt.halfWidth*2,.55,Bt.front-Bt.back,Ai.edge);let R=o(BN());R.anisotropy=Math.min(4,c.capabilities.getMaxAnisotropy());let w=new xe(new Pn(Bt.halfWidth*2-.18,Bt.front-Bt.back-.18),new Lr({map:R,roughness:.86}));w.rotation.x=-Math.PI/2,w.position.y=.028,w.receiveShadow=!0,a.add(w);let N=new xe(new Pn(Bt.halfWidth*2-.18,Bt.front-Bt.back-.18),new ri({transparent:!0,depthWrite:!1,uniforms:{uSunSide:{value:0},uNight:{value:0}},vertexShader:`
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
      `}));N.rotation.x=-Math.PI/2,N.position.y=.047,a.add(N),Jn(a,0,.575,Bt.back,Bt.halfWidth*2,1.15,.2,Ai.wall),Jn(a,0,2.52,Bt.back,Bt.halfWidth*2,.46,.2,Ai.wall);let E=-Bt.halfWidth;for(let O of Uv){let z=O-.9;Jn(a,(E+z)/2,Bt.windowY,Bt.back,z-E,1.14,.2,Ai.wall),E=O+.9}Jn(a,(E+Bt.halfWidth)/2,Bt.windowY,Bt.back,Bt.halfWidth-E,1.14,.2,Ai.wall),Jn(a,0,2.75,Bt.back,Bt.halfWidth*2,.17,.3,Ai.wallTop);let M=o(lE(i?"LIVE OFFICE":"CHAT ROOM")),U=new xe(new Pn(3.35,.82),new In({map:M,transparent:!0,alphaTest:.2,side:An}));U.position.set(0,3.22,Bt.back+.2),a.add(U),Jn(a,0,.38,Bt.back+.12,Bt.halfWidth*2-.2,.55,.06,7822694),Jn(a,0,.74,Bt.back+.16,Bt.halfWidth*2-.1,.08,.1,13803644);let H=new In({map:o(FN()),transparent:!0,alphaTest:.03,side:An,depthWrite:!1});for(let O of Uv){let z=new xe(new Pn(1.72,1.08),H);z.position.set(O,Bt.windowY,Bt.back-.14),a.add(z);let $=new xe(new Pn(1.65,1.08),new In({color:16173467,transparent:!0,opacity:.1,side:An,depthWrite:!1}));$.position.set(O,Bt.windowY,Bt.back+.02),a.add($),Jn(a,O,1.14,Bt.back+.2,1.98,.11,.36,Ai.cream),Jn(a,O,2.3,Bt.back+.12,1.92,.11,.22,Ai.cream);for(let mt of[-.88,0,.88])Jn(a,O+mt,Bt.windowY,Bt.back+.12,.09,1.13,.15,Ai.cream)}for(let[O,z]of[-6.4,-2.5,2.5].entries())wn(a,o(gE(O)),z,1.65,Bt.back+.17,.66,.81);let G=[-2.4,2.4].map(O=>{Jn(a,O,2.22,Bt.back+.3,.31,.15,.2,7230304);let z=Jn(a,O,2.13,Bt.back+.42,.15,.12,.14,16766368,16762250,.5),$=new ia(16758651,0,4.5,2);return $.position.set(O,2.08,Bt.back+.6),a.add($),{bulb:z,glow:$}}),q;if(!i){let O=new xe(new ru(.92,.92,.04,12),yE(11439750));O.position.set(oi.x,.05,oi.z),O.receiveShadow=!0,a.add(O);let z=o(pE()),$=wn(a,z,oi.x+.1,.96,oi.z-.14,1.39,1.9);$.material.color.setHex(7960718),$.material.emissiveIntensity=0,$.castShadow=!1,q=wn(a,z,oi.x,.95,oi.z,1.35,1.86);let mt=Lv("AI CORE");mt.position.set(oi.x,2.38,oi.z),a.add(mt)}wn(a,o(oE()),0,.68,s,4.6,1.25);let J=document.createElement("canvas");J.width=64,J.height=64;let Y=J.getContext("2d");if(!Y)throw new Error("Canvas 2D is required for contact shadows.");let nt=Y.createRadialGradient(32,32,3,32,32,31);nt.addColorStop(0,"#241f38e8"),nt.addColorStop(.3,"#292335a8"),nt.addColorStop(.7,"#29233540"),nt.addColorStop(1,"#29233500"),Y.fillStyle=nt,Y.fillRect(0,0,64,64);let W=new Vi(J);W.magFilter=En;let lt=[],ut=(O,z,$,mt,Qt,vt=.065,Ye=.68)=>{let Ze=new xe(new Pn(mt,Qt),new In({map:W,transparent:!0,depthWrite:!1,opacity:Ye,toneMapped:!1}));Ze.rotation.x=-Math.PI/2,Ze.position.set(z,vt,$),Ze.renderOrder=3,O.add(Ze);let li=xE(mt,Qt);li.position.set(z,vt+.12,$),O.add(li),lt.push({mesh:Ze,opacity:Ye})};i||ut(a,oi.x,oi.z,1.05,.85,.076),ut(a,0,s,4.1,.82);let Dt=O=>{let z=rE(O);Object.values(z).flatMap(mt=>Object.values(mt)).forEach(o);let $=VN(O,W,z);return a.add($.group,$.shadow,$.caster),$},Wt=t.agents.map(O=>Dt(O.id)),rt=t.agents.map(({x:O,z})=>({x:O,z})),Ht=new Hi;Ht.visible=!i&&t.progress.context;let qt=new Hi;if(qt.visible=!i&&!t.progress.context,!i){Jn(Ht,3,.08,-1.8,3.05,.12,2.85,Ai.lavender),wn(Ht,o(mE()),3,.76,-2.5,1.45,1.42),ut(Ht,3,-2.5,1.25,.65,.153);for(let $=0;$<3;$++)wn(Ht,o(Nv($)),2.1+$*.78,.48,-1.18,.66,.87),ut(Ht,2.1+$*.78,-1.18,.54,.42,.153,.55);let O=Lv("CONTEXT");O.position.set(3,2.28,-2.1),Ht.add(O),a.add(Ht);let z=Lv("CONTEXT  ?");z.position.set(3,1.34,-1.8),qt.add(z),a.add(qt)}let Q=new Hi;a.add(Q);let tt=Ms.map(({x:O,z},$)=>{let mt=HN(Q,O,z,$,o);return ut(Q,O,z-.56,1.3,.65),ut(Q,O+.35,z+.37,.55,.45,.065,.5),mt}),gt=Ms.map(({x:O,z},$)=>{let mt=new ia($%2?12755181:7726029,0,3.1,2);return mt.position.set(O,1.35,z-.54),a.add(mt),mt}),Ut=Ms.map(({x:O,z})=>wn(Q,o(vE()),O+.43,.82,z-.55,.18,.27)),At=Ms.map(({x:O,z})=>wn(Q,o(hE()),O-.58,.79,z-.49,.36,.34)),Kt={queued:[o(wl("queued"))],assigned:[o(wl("assigned"))],working:Array.from({length:17},(O,z)=>o(wl("working",z))),complete:[o(wl("complete"))],failed:[o(wl("failed"))]},Ge=Ms.map(({x:O,z})=>{let $=new xe(new Pn(.58,.58),new In({map:Kt.queued[0],transparent:!0,alphaTest:.25,depthWrite:!1,side:An}));return $.position.set(O,2.06,z-.57),a.add($),$});for(let O=0;O<2;O++)wn(a,o(Nv(O)),-4.6+O*.35,.43,2.2,.65,.81),ut(a,-4.6+O*.35,2.2,.55,.4,.065,.52);let D=o(uE());wn(a,D,-4.42,.84,2.83,.94,1.14).material.color.setHex(9084052),wn(a,D,-4.37,.84,2.99,.98,1.16),ut(a,-4.37,2.99,.63,.55),wn(a,D,5.8,.67,3.35,.78,.94),ut(a,5.8,3.35,.55,.42);let Nt=[];for(let O=0;O<(i?0:9);O++){let z=Jn(a,oi.x-.32+O%3*.32,2.2+O%2*.2,oi.z-.33+Math.floor(O/3)*.31,.08,.08,.08,Ai.cream,Ai.cream,.8);Nt.push(z)}let St=document.createElement("canvas");St.width=128,St.height=128;let _t=St.getContext("2d");if(!_t)throw new Error("Canvas 2D is required for sunlight pools.");let fe=_t.createImageData(128,128);for(let O=0;O<128;O++)for(let z=0;z<128;z++){let $=Math.max(0,1-Math.abs((z+.5)/64-1)),mt=(O+.5)/128,Qt=Math.min(1,mt*9,(1-mt)*5),vt=(O*128+z)*4;fe.data[vt]=fe.data[vt+1]=fe.data[vt+2]=255,fe.data[vt+3]=Math.round(220*$**1.4*Qt)}_t.putImageData(fe,0,0);let Mt=new Vi(St);Mt.minFilter=En;let kt=document.createElement("canvas");kt.width=kt.height=64;let Be=kt.getContext("2d");if(!Be)throw new Error("Canvas 2D is required for sunlight pools.");let Re=Be.createRadialGradient(32,32,3,32,32,32);Re.addColorStop(0,"#ffffffcc"),Re.addColorStop(.65,"#ffffff80"),Re.addColorStop(1,"#ffffff00"),Be.fillStyle=Re,Be.fillRect(0,0,64,64);let A=new Vi(kt);A.minFilter=En;let S=Uv.map(O=>{let z=new Yn;z.setAttribute("position",new fn(new Float32Array(12),3)),z.setAttribute("uv",new fn(new Float32Array([0,1,1,1,0,0,1,0]),2)),z.setIndex([0,1,2,1,3,2]);let $=new In({map:Mt,color:16763280,transparent:!0,opacity:0,depthWrite:!1,side:An,blending:Pr}),mt=new xe(z,$);mt.renderOrder=2,a.add(mt);let Qt=new xe(new Pn(2.05,2.2),new In({map:A,transparent:!0,opacity:0,depthWrite:!1,color:16766637,blending:Pr}));Qt.rotation.x=-Math.PI/2,Qt.renderOrder=2,a.add(Qt);let vt=new Yn;vt.setAttribute("position",new fn(new Float32Array(36),3));let Ye=new vl(vt,new gl({map:A,color:16766637,size:3,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,blending:Pr}));return Ye.renderOrder=2,a.add(Ye),{x:O,shaft:mt,pool:Qt,dust:Ye}}),F=1,K=0,et=0,Z=!1,wt=0,ot=0,Et=O=>{Z=!0,wt=O.clientX,ot=O.clientY,c.domElement.setPointerCapture(O.pointerId)},Rt=O=>{if(!Z)return;let z=O.clientX-wt,$=O.clientY-ot;K=Zn.clamp(K-z*.012/F,-2.5,2.5),et=Zn.clamp(et-$*.014/F,-2,2),wt=O.clientX,ot=O.clientY},it=()=>{Z=!1},dt=O=>{O.preventDefault(),F=Zn.clamp(F*(O.deltaY>0?.9:1.1),.74,1.65)},bt=c.domElement;bt.addEventListener("pointerdown",Et),bt.addEventListener("pointermove",Rt),bt.addEventListener("pointerup",it),bt.addEventListener("pointercancel",it),bt.addEventListener("wheel",dt,{passive:!1});let Ct=()=>{let O=Math.max(1,e.clientWidth),z=Math.max(1,e.clientHeight),$=O<700?.8:1;c.setSize(Math.ceil(O*$),Math.ceil(z*$),!1);let mt=O/z,Qt=4.7,vt=yu.distanceTo(new P(0,.4,0));l.aspect=mt,l.fov=Zn.radToDeg(2*Math.atan(Math.max(Math.tan(Zn.degToRad(28/2)),Qt/(vt*mt)))),l.updateProjectionMatrix()},ht=new ResizeObserver(Ct);ht.observe(e),Ct();let zt=matchMedia("(prefers-reduced-motion: reduce)").matches,L=performance.now()/1e3,st=L,ct=0,yt="";return{capturePositions(){rt=t.agents.map(({x:O,z})=>({x:O,z}))},render(O,z,$,mt){L+=Math.max(0,Math.min(.05,O-st)),st=O;let Qt=`${t.progress.capacity}/${t.progress.context}/${t.progress.workflow}`;(mt||z!==ct||Qt!==yt)&&(c.shadowMap.needsUpdate=!0),ct=z,yt=Qt;let vt=hf(t.time,z),Ye=vt.sun+vt.moon,Ze=Ye>0?vt.moon/Ye:0,li=vt.moon/.45,Kn=Zn.clamp(1-vt.sun/2,0,1);H.color.setHex(16777215).lerp(zN,li*.7),u.color.setHex(vt.sunColor).lerp(LN,Ze),u.intensity=Ye,u.position.set(Zn.lerp(vt.sunX,-3.4,Ze),Zn.lerp(vt.sunY,6.6,Ze),-24),x.color.setHex(vt.skyColor).lerp(ON,li*.32).lerp(PN,vt.lamp*(.28-li*.1)),x.intensity=vt.ambient,m.color.setHex(vt.bounceColor).lerp(IN,li*.32),m.groundColor.setHex(11827574),m.intensity=vt.ambient*.95;let Rs=Math.min(1,vt.sun/3.2),Rl=N.material;Rl.uniforms.uSunSide.value=Zn.clamp(vt.sunX/6,-1,1)*Rs,Rl.uniforms.uNight.value=Kn,lt.forEach(({mesh:It,opacity:ie})=>{It.material.opacity=ie*(.72+Rs*.28)}),y.intensity=.9+Kn*1.35+vt.lamp*.35,_.intensity=.25+Kn*1.4,T.intensity=.25+vt.lamp*1.1,G.forEach(({bulb:It,glow:ie})=>{It.material.emissiveIntensity=vt.lamp*.75,ie.intensity=vt.lamp*1.25}),c.toneMappingExposure=1.34-Kn*.16,p.uniforms.uDay.value=Math.min(1,vt.sun/3.2),p.uniforms.uWarm.value=vt.warmth,p.uniforms.uSkyTint.value.setHex(vt.skyColor),p.uniforms.uTime.value=zt?0:t.time,p.uniforms.uSun.value.copy(u.position).normalize();for(let{x:It,shaft:ie,pool:Me,dust:mn}of S){let Rn=(Bt.windowY-.08)/(u.position.y-Bt.windowY),ci=It+(It-u.position.x)*Rn,ss=Bt.back+(Bt.back-u.position.z)*Rn,Cs=Zn.clamp((Bt.halfWidth-.9-Math.abs(ci))/.7,0,1);ie.geometry.attributes.position.array.set([It-.82,Bt.windowY+.06,Bt.back+.2,It+.82,Bt.windowY+.06,Bt.back+.2,ci-1.15,.08,ss,ci+1.15,.08,ss]),ie.geometry.attributes.position.needsUpdate=!0,ie.geometry.computeBoundingSphere(),ie.material.color.copy(u.color),ie.material.opacity=(Rs*.4+li*.04)*Cs,Me.material.color.copy(u.color),Me.material.opacity=(vt.sun/3.2*.22+li*.12)*Cs,Me.position.set(ci,.067,ss);let Dl=mn.geometry.attributes.position.array;for(let as=0;as<12;as++){let b=.14+(as*.31+It*.13+1)%1*.7,I=zt?0:Math.sin(L*.38+as*2.3+It),V=b+I*.025,k=Math.sin(as*15.73+It*7.19)*.68;Dl[as*3]=Zn.lerp(It,ci,V)+k*(.6+V*.3),Dl[as*3+1]=Zn.lerp(Bt.windowY,.12,V),Dl[as*3+2]=Zn.lerp(Bt.back+.22,ss,V)}mn.geometry.attributes.position.needsUpdate=!0,mn.geometry.computeBoundingSphere(),mn.material.color.copy(u.color),mn.material.opacity=(Rs*.42+li*.09)*Cs}for(;Wt.length<t.agents.length;)Wt.push(Dt(Wt.length));let Cl=t.agents.some(It=>It.taskId!==void 0);q&&(q.material.emissiveIntensity=(Cl?.65:.37)+(zt?0:Math.sin(L*2.2)*.1),q.position.y=.95+(zt?0:Math.sin(L*1.9)*.035)),Ht.visible=!i&&t.progress.context,qt.visible=!i&&!t.progress.context,Ut.forEach((It,ie)=>{let Me=t.agents[ie]?.state==="working";It.material.emissiveIntensity=ie<t.progress.capacity?Me?1.1:.45:0,It.material.color.setHex(ie<t.progress.capacity?Me?16777215:10930622:Ai.edge)}),tt.forEach((It,ie)=>{It.material.emissiveIntensity=.24+Kn*.58,gt[ie].intensity=ie<t.progress.capacity?.12+Kn*1.45+(t.agents[ie]?.state==="working"?.3:0):0}),At.forEach((It,ie)=>{It.visible=ie<t.progress.capacity&&t.progress.workflow>0,It.material.emissiveIntensity=.18+t.progress.workflow*.1}),Ge.forEach((It,ie)=>{let Me=t.requests.find(Rn=>Rn.stationId===ie&&(Rn.status==="queued"||Rn.status==="assigned"||Rn.status==="working"))??t.requests.find(Rn=>Rn.stationId===ie&&Rn.resolvedAt!==void 0&&t.time-Rn.resolvedAt<2.5);if(It.visible=!!Me&&ie<t.progress.capacity,!Me)return;let mn=Me.status==="working"?Math.min(16,Math.floor(Me.progress*16)):0;It.material.map=Kt[Me.status][mn],It.position.y=2.06+(zt?0:Math.sin(L*1.8+ie)*.045)}),Wt.forEach((It,ie)=>{let Me=t.agents[ie],mn=sE(rt[ie],Me,$);if(It.group.position.set(mn.x,Me.state==="idle"&&!zt?Math.sin(L*1.65+ie)*.038:0,mn.z),It.shadow.position.set(mn.x,.095,mn.z),It.caster.position.set(mn.x,.18,mn.z),It.shadow.material.opacity=.68*(.72+Rs*.28),Me.state==="idle")It.facing=ie<2?"right":"left";else if(Me.state==="working")It.facing="away";else{let ss=Me.target.x-Me.x,Cs=Me.target.z-Me.z;Cs<-Math.abs(ss)*.85&&Math.abs(Cs)>.2?It.facing="away":Math.abs(ss)>.2?It.facing=ss<0?"left":"right":Cs>.2&&(It.facing="left")}let Rn=Me.state==="working"?"working":Me.state==="idle"?"coffee":!zt&&Math.sin(L*8+ie)>0?"stepA":"stepB",ci=It.frames[Rn][It.facing];ci!==It.figure.material.map&&(It.figure.material.map=ci,It.figure.material.emissiveMap=ci,It.backing.material.map=ci,It.backing.material.emissiveMap=ci)}),Nt.forEach((It,ie)=>{It.position.y=2.2+(zt?0:Math.sin(L*1.2+ie*2.1)*.15),It.visible=Cl||ie%3===0}),l.zoom=F,l.position.set(yu.x+K,yu.y,yu.z+et),l.lookAt(K,.4,et),l.updateProjectionMatrix(),g.position.copy(l.position),h||c.render(a,l)},dispose(){ht.disconnect(),bt.removeEventListener("pointerdown",Et),bt.removeEventListener("pointermove",Rt),bt.removeEventListener("pointerup",it),bt.removeEventListener("pointercancel",it),bt.removeEventListener("wheel",dt),bt.removeEventListener("webglcontextlost",d),bt.removeEventListener("webglcontextrestored",f),e.classList.remove("context-lost"),a.traverse(O=>{O instanceof xe&&(O.geometry.dispose(),O.material instanceof In&&O.material.map===Mt&&(O.material.map=null),(Array.isArray(O.material)?O.material:[O.material]).forEach($=>$.dispose())),O instanceof pl&&(O.material.map?.dispose(),O.material.dispose()),O instanceof vl&&(O.geometry.dispose(),O.material.dispose())}),Mt.dispose(),A.dispose(),W.dispose(),r.forEach(O=>O.dispose()),c.dispose(),bt.remove()}}}var X=Su(Iv(),1),Xr=Ms.length,XN=Oc.map(({x:e})=>({x:e,z:Ov+.75})),xu=1/30,WN={currentSessionId:"",sessions:[]};function Pv(e,t){return e===t?"Your session":`Session ${e.slice(0,8)}`}function TE(e){let t=e.sessions.map(i=>({key:i.sessionId,title:Pv(i.sessionId,e.currentSessionId),status:i.status,activity:i.activity,helper:!1})),n=e.sessions.flatMap(i=>i.subagents.map((s,a)=>({key:`${i.sessionId}:helper:${a}`,title:`${Pv(i.sessionId,e.currentSessionId)} \xB7 helper ${a+1}`,status:s.status,activity:s.activity,helper:!0})));return[...t,...n]}function qN(e){return{id:e,state:"idle",x:100,z:100,target:{x:100,z:100},route:[],workLeft:0,workTotal:0,visitedContext:!1}}function YN(){let e=new uf(h0());return e.agents=Array.from({length:Xr},(t,n)=>qN(n)),e.requests=[],e.progress.capacity=0,e.progress.context=!1,e.progress.workflow=1,e}function ZN(e,t,n){let i=t.slice(0,Xr);e.progress.capacity=i.length,e.requests=[],i.forEach((s,a)=>{let r=e.agents[a],o=s.status!=="idle"&&s.status!=="offline",l=o?Ms[a]:XN[a];if(n[a]||(r.x=l.x,r.z=l.z),n[a]=!0,r.target={...l},o){r.taskId=a+1;let c=s.status==="blocked"?"failed":s.status==="thinking"?"assigned":"working";e.requests.push({id:a+1,stationId:a,title:s.activity,kind:"chat",status:c,progress:0,reward:0,...c==="failed"?{resolvedAt:e.time}:{}})}else r.taskId=void 0});for(let s=i.length;s<Xr;s++){n[s]=!1;let a=e.agents[s];a.x=a.z=100,a.target={x:100,z:100},a.taskId=void 0,a.state="idle"}}function JN(e,t){for(let n=0;n<e.progress.capacity;n++){let i=e.agents[n],s=i.target.x-i.x,a=i.target.z-i.z,r=Math.hypot(s,a),o=i.taskId!==void 0;if(r>.02){let l=Math.min(r,2.05*t);i.x+=s/r*l,i.z+=a/r*l,i.state=o?"walking":"returning"}else i.x=i.target.x,i.z=i.target.z,i.state=o?"working":"idle"}}function KN(){let[e,t]=(0,$e.useState)(WN),[n,i]=(0,$e.useState)("Connecting to local Copilot sessions\u2026"),[s,a]=(0,$e.useState)(!1),[r,o]=(0,$e.useState)("office"),[l,c]=(0,$e.useState)(!1),[h,d]=(0,$e.useState)(!1),[f,p]=(0,$e.useState)(0),[g,x]=(0,$e.useState)(0),[m,u]=(0,$e.useState)(!1),[v,y]=(0,$e.useState)(1),[_,T]=(0,$e.useState)(""),R=(0,$e.useRef)(null),w=(0,$e.useRef)(null),N=(0,$e.useRef)(0),E=(0,$e.useRef)(!1),M=(0,$e.useRef)(1);(0,$e.useEffect)(()=>{if(!R.current)return;let rt=YN();w.current=rt;let Ht=Array(Xr).fill(!1),qt;try{qt=SE(R.current,rt,"live")}catch(Nt){R.current.classList.add("static-fallback"),i(`3D office unavailable; live status remains visible. ${Nt instanceof Error?Nt.message:String(Nt)}`)}let Q=new EventSource("/events");Q.onmessage=Nt=>{try{let St=JSON.parse(Nt.data);if(!Array.isArray(St.sessions)||typeof St.currentSessionId!="string")throw new Error("Invalid office status");qt?.capturePositions(),ZN(rt,TE(St),Ht),t(St),i("Live read-only view \xB7 local sessions running Agent Inc Live")}catch(St){i(`Office update failed: ${St instanceof Error?St.message:String(St)}`)}},Q.addEventListener("error",()=>{i("Connection interrupted; reconnecting to the local office\u2026")});let tt=0,gt=performance.now(),Ut=0,At=gt/1e3,Kt=0,Ge=gt,D=()=>{gt=performance.now(),Ut=0,qt?.capturePositions()},Se=Nt=>{let St=Math.min((Nt-gt)/1e3,.2);if(gt=Nt,!document.hidden){Ut+=St;let _t=!1;for(;Ut>=xu;)qt?.capturePositions(),JN(rt,xu),E.current||(rt.time+=xu*M.current),Ut-=xu,_t=!0;E.current||(At+=St*M.current),qt?.render(At,N.current,Ut/xu,_t),Kt++,Nt-Ge>=1e3&&(p(Math.round(Kt*1e3/(Nt-Ge))),Kt=0,Ge=Nt)}tt=requestAnimationFrame(Se)};return document.addEventListener("visibilitychange",D),tt=requestAnimationFrame(Se),()=>{cancelAnimationFrame(tt),document.removeEventListener("visibilitychange",D),Q.close(),qt?.dispose(),w.current=null}},[]);let U=TE(e),H=U.slice(0,Xr),G=U.filter(rt=>rt.status==="thinking"||rt.status==="tool").length,q=U.filter(rt=>rt.status==="idle").length,J=U.filter(rt=>rt.status==="blocked").length,Y=e.sessions.reduce((rt,Ht)=>rt+Ht.subagents.length,0),nt=e.sessions.reduce((rt,Ht)=>rt+(Ht.messages??0),0),W=e.sessions.flatMap(rt=>(rt.events??[]).map((Ht,qt)=>({...Ht,owner:Pv(rt.sessionId,e.currentSessionId),key:`${rt.sessionId}:${Ht.at}:${qt}`}))).sort((rt,Ht)=>Ht.at-rt.at).slice(0,8),lt=hf(w.current?.time??0,g),ut=()=>{N.current=(N.current+.25)%1,x(N.current)},Dt=()=>{E.current=!E.current,u(E.current)},Wt=()=>{M.current=M.current===1?2:1,y(M.current)};return(0,X.jsxs)("main",{className:"shell",children:[(0,X.jsxs)("header",{className:"topbar",children:[(0,X.jsxs)("div",{className:"identity","aria-label":"Agent Inc Live Office",children:[(0,X.jsx)("span",{className:"brand-icon","aria-hidden":"true",children:"\u2726"}),(0,X.jsxs)("div",{className:"brand",children:["agent",(0,X.jsx)("span",{children:"inc."})]})]}),(0,X.jsxs)("div",{className:"top-stats",children:[(0,X.jsxs)("div",{className:"stat",children:[(0,X.jsx)("span",{className:"stat-label",children:"\u2727 \xA0SESSIONS"}),(0,X.jsx)("strong",{children:e.sessions.length})]}),(0,X.jsxs)("div",{className:"stat",children:[(0,X.jsx)("span",{className:"stat-label",children:"\u25C8 \xA0WORKING"}),(0,X.jsx)("strong",{children:G})]}),(0,X.jsxs)("div",{className:"stat desktop-stat",children:[(0,X.jsx)("span",{className:"stat-label",children:"\u25CC \xA0MESSAGES"}),(0,X.jsx)("strong",{children:nt})]}),(0,X.jsxs)("button",{type:"button",className:"system-toggle","aria-expanded":s,"aria-controls":"system-panel",onClick:()=>a(rt=>!rt),children:[s?"CLOSE":"ACTIVITY"," ",(0,X.jsx)("span",{"aria-hidden":"true",children:"\u2733"})]})]})]}),(0,X.jsxs)("div",{className:"layout",children:[(0,X.jsxs)("section",{className:"world-panel","aria-label":"Live Copilot office",children:[(0,X.jsxs)("div",{className:"scene-header",children:[(0,X.jsxs)("div",{children:[(0,X.jsx)("span",{className:"online-dot"})," LIVE OFFICE"]}),(0,X.jsx)("div",{className:"scene-tools",children:(0,X.jsxs)("button",{type:"button",className:"time-preview",onClick:ut,title:"Preview the next six hours of decorative office lighting","aria-label":`Office lighting ${lt.label}; preview next six hours`,children:[(0,X.jsx)("span",{"aria-hidden":"true",children:lt.sun>1?"\u263C":lt.moon>.2?"\u263E":"\u25D1"})," ",lt.label," ",(0,X.jsx)("span",{className:"time-arrow",children:"\u21BB"})]})})]}),(0,X.jsx)("div",{ref:R,className:"world-host",children:(0,X.jsxs)("div",{className:"world-callout live-callout",children:[(0,X.jsx)("span",{className:"callout-star",children:"\u2726"}),(0,X.jsx)("span",{children:J?`${J} worker${J===1?"":"s"} need attention.`:G?`${G} worker${G===1?" is":"s are"} active.`:"The office is listening for Copilot activity."})]})}),(0,X.jsxs)("div",{className:"scene-footer",children:[(0,X.jsxs)("div",{className:"scene-live",children:[(0,X.jsx)("span",{className:"tiny-pulse"}),(0,X.jsx)("span",{className:"live-label",children:"OBSERVING"}),(0,X.jsxs)("span",{className:"live-count",children:[" ",(0,X.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",G," working",(0,X.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",q," on break",(0,X.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",J," needing attention"]})]}),(0,X.jsxs)("div",{className:"scene-controls",children:[(0,X.jsx)("button",{type:"button",onClick:Dt,title:"Pause only decorative light and idle motion, not live sessions","aria-label":m?"Resume office ambience":"Pause office ambience",children:m?"\u25B6":"\u2161"}),(0,X.jsxs)("button",{type:"button",onClick:Wt,title:"Change cosmetic lighting speed only","aria-label":`Set office ambience to ${v===1?"double":"normal"} speed`,children:[v,"\xD7"]}),(0,X.jsx)("button",{type:"button",onClick:()=>d(!h),title:"Toggle view diagnostics","aria-label":h?"Hide diagnostics":"Show diagnostics","aria-expanded":h,children:"\u22EF"})]})]})]}),(0,X.jsxs)("aside",{id:"system-panel",className:`sidebar ${s?"sidebar-open":""}`,children:[(0,X.jsxs)("div",{className:"sidebar-heading",children:[(0,X.jsx)("span",{children:"LIVE OFFICE / ACTIVITY"}),(0,X.jsx)("button",{type:"button",className:"sidebar-close",onClick:()=>a(!1),"aria-label":"Close activity",children:"\xD7"})]}),(0,X.jsx)("div",{className:"sidebar-tabs",role:"tablist","aria-label":"Activity categories",children:["office","stations","agents"].map(rt=>(0,X.jsx)("button",{type:"button",id:`tab-${rt}`,role:"tab","aria-selected":r===rt,"aria-controls":`panel-${rt}`,onClick:()=>o(rt),children:rt},rt))}),r==="office"&&(0,X.jsxs)("div",{id:"panel-office",role:"tabpanel","aria-labelledby":"tab-office",className:"upgrade-pane",children:[(0,X.jsxs)("div",{className:"system-card",children:[(0,X.jsx)("div",{className:"system-emblem",children:"\u2726"}),(0,X.jsxs)("div",{children:[(0,X.jsx)("div",{className:"system-name",children:"The Living Office"}),(0,X.jsx)("div",{className:"system-desc",children:"Real sessions, displayed without prompts, code or tool output."})]})]}),(0,X.jsxs)("div",{className:"mini-metrics",children:[(0,X.jsxs)("div",{children:[(0,X.jsx)("span",{children:"LOCAL SESSIONS"}),(0,X.jsx)("strong",{children:e.sessions.length})]}),(0,X.jsxs)("div",{children:[(0,X.jsx)("span",{children:"MESSAGES SEEN"}),(0,X.jsx)("strong",{children:nt})]})]}),(0,X.jsxs)("div",{className:"live-detail",children:[(0,X.jsxs)("span",{children:[Y," subagents"]}),(0,X.jsxs)("span",{children:[W.length," recent events"]})]}),(0,X.jsxs)("div",{className:"section-title",children:[(0,X.jsx)("span",{children:"\u2726 \xA0OFFICE SYSTEMS"}),(0,X.jsx)("span",{children:"READ ONLY"})]}),(0,X.jsxs)("div",{className:"upgrade-list",children:[(0,X.jsxs)("div",{className:"upgrade",children:[(0,X.jsx)("div",{className:"upgrade-symbol",children:"\u25C8"}),(0,X.jsxs)("div",{className:"upgrade-info",children:[(0,X.jsxs)("div",{className:"upgrade-name",children:["Live status ",(0,X.jsx)("span",{children:"CONNECTED"})]}),(0,X.jsx)("p",{children:n}),(0,X.jsxs)("div",{className:"live-detail",children:[(0,X.jsxs)("span",{children:[G," active"]}),(0,X.jsxs)("span",{children:[q," idle"]}),(0,X.jsxs)("span",{className:J?"attention":"",children:[J," need attention"]})]})]})]}),(0,X.jsxs)("div",{className:"upgrade",children:[(0,X.jsx)("div",{className:"upgrade-symbol context-symbol",children:"\u25A3"}),(0,X.jsxs)("div",{className:"upgrade-info",children:[(0,X.jsxs)("div",{className:"upgrade-name",children:["Project room ",(0,X.jsxs)("span",{children:[H.length," / ",Xr," DESKS"]})]}),(0,X.jsx)("p",{children:"Additional sessions and helpers stay visible in the lists below. Only sessions running this extension can join."})]})]})]})]}),r==="stations"&&(0,X.jsxs)("div",{id:"panel-stations",role:"tabpanel","aria-labelledby":"tab-stations",className:"upgrade-pane",children:[(0,X.jsxs)("div",{className:"pane-intro",children:[(0,X.jsx)("strong",{children:"Session desks"}),(0,X.jsx)("span",{children:"Each desk represents actual local Copilot activity. Selection highlights its status here; the canvas cannot navigate App sessions."})]}),H.map((rt,Ht)=>(0,X.jsxs)("div",{className:"upgrade station-card live-card",children:[(0,X.jsx)("div",{className:"station-number",children:String(Ht+1).padStart(2,"0")}),(0,X.jsxs)("div",{className:"upgrade-info",children:[(0,X.jsxs)("div",{className:"upgrade-name",children:[rt.title," ",(0,X.jsx)("span",{children:rt.status.toUpperCase()})]}),(0,X.jsx)("p",{children:rt.activity}),(0,X.jsxs)("button",{type:"button",className:"buy-button","aria-pressed":_===rt.key,onClick:()=>T(rt.key),children:[_===rt.key?"SELECTED":"SELECT DESK"," ",(0,X.jsxs)("span",{children:["\u25C8 ",Ht+1]})]})]})]},rt.key)),!H.length&&(0,X.jsx)("div",{className:"pane-intro",children:"Waiting for the first participating session."})]}),r==="agents"&&(0,X.jsxs)("div",{id:"panel-agents",role:"tabpanel","aria-labelledby":"tab-agents",className:"upgrade-pane",children:[(0,X.jsxs)("div",{className:"pane-intro",children:[(0,X.jsx)("strong",{children:"The workers"}),(0,X.jsx)("span",{children:"Subagents appear as additional workers when a desk is free. No training or upgrades alter real Copilot sessions."})]}),U.map(rt=>(0,X.jsxs)("div",{className:"persona-card",children:[(0,X.jsxs)("div",{className:"persona-heading",children:[(0,X.jsx)("span",{className:"persona-avatar",style:{backgroundColor:rt.helper?"#b49ccc":"#78bea6"},children:rt.helper?"\u2733":"\u2726"}),(0,X.jsxs)("span",{children:[(0,X.jsx)("strong",{children:rt.title}),(0,X.jsxs)("small",{children:[rt.helper?"Subagent":"Session"," \xB7 ",rt.status]})]})]}),(0,X.jsx)("div",{className:"live-descriptor",children:rt.activity})]},rt.key)),!U.length&&(0,X.jsx)("div",{className:"pane-intro",children:"No workers are connected yet."})]}),(0,X.jsx)("div",{className:"side-hint",children:"\u2727 \xA0Only sanitized local activity is shown. All controls here affect this view, not the underlying agents."})]})]}),(0,X.jsxs)("section",{className:`feed-panel ${l?"feed-open":""}`,"aria-label":"Live activity feed",children:[(0,X.jsxs)("button",{type:"button",className:"feed-top",onClick:()=>c(rt=>!rt),"aria-expanded":l,"aria-controls":"signal-list",children:[(0,X.jsxs)("span",{children:[(0,X.jsx)("span",{className:"feed-glyph",children:"\u25C8"})," SIGNALS ",(0,X.jsxs)("span",{className:"feed-count",children:[G," LIVE"]})]}),(0,X.jsx)("span",{className:"feed-chevron","aria-hidden":"true",children:l?"\u2304":"\u2303"})]}),(0,X.jsxs)("div",{id:"signal-list",className:"feed-list","aria-live":"off",children:[!W.length&&(0,X.jsxs)("div",{className:"feed-empty",children:[(0,X.jsx)("span",{children:"\u25CC"})," Listening for the first activity\u2026"]}),W.map(rt=>(0,X.jsxs)("div",{className:`feed-item feed-${rt.kind==="error"?"failed":rt.kind==="message"?"complete":"working"}`,children:[(0,X.jsx)("span",{className:"feed-icon",children:rt.kind==="error"?"!":rt.kind==="message"?"\u2713":"\u25C9"}),(0,X.jsxs)("span",{className:"feed-task",children:[rt.owner," \xB7 ",rt.label]}),(0,X.jsx)("span",{className:"feed-status",children:rt.kind.toUpperCase()})]},rt.key))]})]}),n!=="Live read-only view \xB7 local sessions running Agent Inc Live"&&(0,X.jsx)("div",{className:"storage-error",role:"status",children:n}),h&&(0,X.jsxs)("div",{className:"debug-panel",children:[(0,X.jsxs)("span",{children:["LIGHT ",w.current?.time.toFixed(1)??0,"s"]}),(0,X.jsxs)("span",{children:["FPS ",f]}),(0,X.jsxs)("span",{children:["DESKS ",H.length,"/",Xr]}),(0,X.jsxs)("span",{children:["WORKERS ",U.length]}),(0,X.jsxs)("span",{children:["SESSIONS ",e.sessions.length]}),(0,X.jsxs)("span",{children:["HELPERS ",Y]}),(0,X.jsxs)("span",{children:["VISUAL SPEED ",v,"\xD7"]})]})]})}var wE=document.getElementById("root");if(!wE)throw new Error("Agent Inc Live office root is missing");(0,AE.createRoot)(wE).render((0,X.jsx)(KN,{}));
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
