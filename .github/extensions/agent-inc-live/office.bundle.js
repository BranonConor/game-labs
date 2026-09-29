var HE=Object.create;var Xv=Object.defineProperty;var VE=Object.getOwnPropertyDescriptor;var GE=Object.getOwnPropertyNames;var kE=Object.getPrototypeOf,XE=Object.prototype.hasOwnProperty;var os=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var WE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of GE(t))!XE.call(e,s)&&s!==n&&Xv(e,s,{get:()=>t[s],enumerable:!(i=VE(t,s))||i.enumerable});return e};var Tu=(e,t,n)=>(n=e!=null?HE(kE(e)):{},WE(t||!e||!e.__esModule?Xv(n,"default",{value:e,enumerable:!0}):n,e));var i_=os(qt=>{"use strict";var mp=Symbol.for("react.transitional.element"),qE=Symbol.for("react.portal"),YE=Symbol.for("react.fragment"),ZE=Symbol.for("react.strict_mode"),KE=Symbol.for("react.profiler"),JE=Symbol.for("react.consumer"),QE=Symbol.for("react.context"),jE=Symbol.for("react.forward_ref"),$E=Symbol.for("react.suspense"),tT=Symbol.for("react.memo"),Kv=Symbol.for("react.lazy"),eT=Symbol.for("react.activity"),nT=Symbol.for("react.view_transition"),Wv=Symbol.iterator;function iT(e){return e===null||typeof e!="object"?null:(e=Wv&&e[Wv]||e["@@iterator"],typeof e=="function"?e:null)}var Jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qv=Object.assign,jv={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=jv,this.updater=n||Jv}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $v(){}$v.prototype=Kr.prototype;function gp(e,t,n){this.props=e,this.context=t,this.refs=jv,this.updater=n||Jv}var vp=gp.prototype=new $v;vp.constructor=gp;Qv(vp,Kr.prototype);vp.isPureReactComponent=!0;var qv=Array.isArray;function pp(){}var Ie={H:null,A:null,T:null,S:null},t_=Object.prototype.hasOwnProperty;function _p(e,t,n){var i=n.ref;return{$$typeof:mp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function sT(e,t){return _p(e.type,t,e.props)}function yp(e){return typeof e=="object"&&e!==null&&e.$$typeof===mp}function aT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yv=/\/+/g;function dp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?aT(""+e.key):t.toString(36)}function rT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(pp,pp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Zr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case mp:case qE:r=!0;break;case Kv:return r=e._init,Zr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+dp(e,0):i,qv(s)?(n="",r!=null&&(n=r.replace(Yv,"$&/")+"/"),Zr(s,t,n,"",function(c){return c})):s!=null&&(yp(s)&&(s=sT(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Yv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(qv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+dp(i,l),r+=Zr(i,t,n,a,s);else if(l=iT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+dp(i,l++),r+=Zr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Zr(rT(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Au(e,t,n){if(e==null)return e;var i=[],s=0;return Zr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function oT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Zv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function e_(e){var t=Ie.T,n={};n.types=t!==null?t.types:null,Ie.T=n;try{var i=e(),s=Ie.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(pp,Zv)}catch(a){Zv(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ie.T=t}}function n_(e){var t=Ie.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else e_(n_.bind(null,e))}var lT={map:Au,forEach:function(e,t,n){Au(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Au(e,function(){t++}),t},toArray:function(e){return Au(e,function(t){return t})||[]},only:function(e){if(!yp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};qt.Activity=eT;qt.Children=lT;qt.Component=Kr;qt.Fragment=YE;qt.Profiler=KE;qt.PureComponent=gp;qt.StrictMode=ZE;qt.Suspense=$E;qt.ViewTransition=nT;qt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ie;qt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ie.H.useMemoCache(e)}};qt.addTransitionType=n_;qt.cache=function(e){return function(){return e.apply(null,arguments)}};qt.cacheSignal=function(){return null};qt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Qv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!t_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return _p(e.type,s,i)};qt.createContext=function(e){return e={$$typeof:QE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:JE,_context:e},e};qt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)t_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return _p(e,a,s)};qt.createRef=function(){return{current:null}};qt.forwardRef=function(e){return{$$typeof:jE,render:e}};qt.isValidElement=yp;qt.lazy=function(e){return{$$typeof:Kv,_payload:{_status:-1,_result:e},_init:oT}};qt.memo=function(e,t){return{$$typeof:tT,type:e,compare:t===void 0?null:t}};qt.startTransition=e_;qt.unstable_useCacheRefresh=function(){return Ie.H.useCacheRefresh()};qt.use=function(e){return Ie.H.use(e)};qt.useActionState=function(e,t,n){return Ie.H.useActionState(e,t,n)};qt.useCallback=function(e,t){return Ie.H.useCallback(e,t)};qt.useContext=function(e){return Ie.H.useContext(e)};qt.useDebugValue=function(){};qt.useDeferredValue=function(e,t){return Ie.H.useDeferredValue(e,t)};qt.useEffect=function(e,t){return Ie.H.useEffect(e,t)};qt.useEffectEvent=function(e){return Ie.H.useEffectEvent(e)};qt.useId=function(){return Ie.H.useId()};qt.useImperativeHandle=function(e,t,n){return Ie.H.useImperativeHandle(e,t,n)};qt.useInsertionEffect=function(e,t){return Ie.H.useInsertionEffect(e,t)};qt.useLayoutEffect=function(e,t){return Ie.H.useLayoutEffect(e,t)};qt.useMemo=function(e,t){return Ie.H.useMemo(e,t)};qt.useOptimistic=function(e,t){return Ie.H.useOptimistic(e,t)};qt.useReducer=function(e,t,n){return Ie.H.useReducer(e,t,n)};qt.useRef=function(e){return Ie.H.useRef(e)};qt.useState=function(e){return Ie.H.useState(e)};qt.useSyncExternalStore=function(e,t,n){return Ie.H.useSyncExternalStore(e,t,n)};qt.useTransition=function(){return Ie.H.useTransition()};qt.version="19.3.0"});var wu=os((fU,s_)=>{"use strict";s_.exports=i_()});var p_=os(Ge=>{"use strict";function bp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Ru(s,t))e[i]=t,e[n]=s,n=i;else break t}}function ls(e){return e.length===0?null:e[0]}function Du(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Ru(o,n))l<s&&0>Ru(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Ru(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Ru(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ge.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(a_=performance,Ge.unstable_now=function(){return a_.now()}):(xp=Date,r_=xp.now(),Ge.unstable_now=function(){return xp.now()-r_});var a_,xp,r_,Cs=[],la=[],cT=1,Ci=null,Un=3,Ep=!1,zl=!1,Bl=!1,Tp=!1,c_=typeof setTimeout=="function"?setTimeout:null,u_=typeof clearTimeout=="function"?clearTimeout:null,o_=typeof setImmediate<"u"?setImmediate:null;function Cu(e){for(var t=ls(la);t!==null;){if(t.callback===null)Du(la);else if(t.startTime<=e)Du(la),t.sortIndex=t.expirationTime,bp(Cs,t);else break;t=ls(la)}}function Ap(e){if(Bl=!1,Cu(e),!zl)if(ls(Cs)!==null)zl=!0,Qr||(Qr=!0,Jr());else{var t=ls(la);t!==null&&wp(Ap,t.startTime-e)}}var Qr=!1,Fl=-1,h_=5,f_=-1;function d_(){return Tp?!0:!(Ge.unstable_now()-f_<h_)}function Sp(){if(Tp=!1,Qr){var e=Ge.unstable_now();f_=e;var t=!0;try{t:{zl=!1,Bl&&(Bl=!1,u_(Fl),Fl=-1),Ep=!0;var n=Un;try{e:{for(Cu(e),Ci=ls(Cs);Ci!==null&&!(Ci.expirationTime>e&&d_());){var i=Ci.callback;if(typeof i=="function"){Ci.callback=null,Un=Ci.priorityLevel;var s=i(Ci.expirationTime<=e);if(e=Ge.unstable_now(),typeof s=="function"){Ci.callback=s,Cu(e),t=!0;break e}Ci===ls(Cs)&&Du(Cs),Cu(e)}else Du(Cs);Ci=ls(Cs)}if(Ci!==null)t=!0;else{var a=ls(la);a!==null&&wp(Ap,a.startTime-e),t=!1}}break t}finally{Ci=null,Un=n,Ep=!1}t=void 0}}finally{t?Jr():Qr=!1}}}var Jr;typeof o_=="function"?Jr=function(){o_(Sp)}:typeof MessageChannel<"u"?(Mp=new MessageChannel,l_=Mp.port2,Mp.port1.onmessage=Sp,Jr=function(){l_.postMessage(null)}):Jr=function(){c_(Sp,0)};var Mp,l_;function wp(e,t){Fl=c_(function(){e(Ge.unstable_now())},t)}Ge.unstable_IdlePriority=5;Ge.unstable_ImmediatePriority=1;Ge.unstable_LowPriority=4;Ge.unstable_NormalPriority=3;Ge.unstable_Profiling=null;Ge.unstable_UserBlockingPriority=2;Ge.unstable_cancelCallback=function(e){e.callback=null};Ge.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):h_=0<e?Math.floor(1e3/e):5};Ge.unstable_getCurrentPriorityLevel=function(){return Un};Ge.unstable_next=function(e){switch(Un){case 1:case 2:case 3:var t=3;break;default:t=Un}var n=Un;Un=t;try{return e()}finally{Un=n}};Ge.unstable_requestPaint=function(){Tp=!0};Ge.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Un;Un=e;try{return t()}finally{Un=n}};Ge.unstable_scheduleCallback=function(e,t,n){var i=Ge.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:cT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,bp(la,e),ls(Cs)===null&&e===ls(la)&&(Bl?(u_(Fl),Fl=-1):Bl=!0,wp(Ap,n-i))):(e.sortIndex=s,bp(Cs,e),zl||Ep||(zl=!0,Qr||(Qr=!0,Jr()))),e};Ge.unstable_shouldYield=d_;Ge.unstable_wrapCallback=function(e){var t=Un;return function(){var n=Un;Un=t;try{return e.apply(this,arguments)}finally{Un=n}}}});var g_=os((pU,m_)=>{"use strict";m_.exports=p_()});var y_=os(Ln=>{"use strict";var uT=wu();function __(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ca(){}var Xn={d:{f:ca,r:function(){throw Error(__(522))},D:ca,C:ca,L:ca,m:ca,X:ca,S:ca,M:ca},p:0,findDOMNode:null},hT=Symbol.for("react.portal"),fT=Symbol.for("react.recoverable"),v_=Symbol.for("react.optimistic_key");function dT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hT,key:i==null?null:i===v_?v_:""+i,children:e,containerInfo:t,implementation:n}}var Hl=uT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Nu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Xn;Ln.browser=function(e){return{$$typeof:fT,_reason:e}};Ln.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(__(299));return dT(e,t,null,n)};Ln.flushSync=function(e){var t=Hl.T,n=Xn.p;try{if(Hl.T=null,Xn.p=2,e)return e()}finally{Hl.T=t,Xn.p=n,Xn.d.f()}};Ln.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Xn.d.C(e,t))};Ln.prefetchDNS=function(e){typeof e=="string"&&Xn.d.D(e)};Ln.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Nu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Xn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Xn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ln.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Nu(t.as,t.crossOrigin);Xn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Xn.d.M(e)};Ln.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Nu(n,t.crossOrigin);Xn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ln.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Nu(t.as,t.crossOrigin);Xn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Xn.d.m(e)};Ln.requestFormReset=function(e){Xn.d.r(e)};Ln.unstable_batchedUpdates=function(e,t){return e(t)};Ln.useFormState=function(e,t,n){return Hl.H.useFormState(e,t,n)};Ln.useFormStatus=function(){return Hl.H.useHostTransitionStatus()};Ln.version="19.3.0"});var M_=os((gU,S_)=>{"use strict";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(e){console.error(e)}}x_(),S_.exports=y_()});var lM=os(df=>{"use strict";var on=g_(),ox=wu(),pT=M_();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function lx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function cx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ux(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b_(e){if(wc(e)!==e)throw Error(Q(188))}function mT(e){var t=e.alternate;if(!t){if(t=wc(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return b_(s),e;if(a===i)return b_(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function hx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=hx(e),t!==null)return t;e=e.sibling}return null}function si(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&si(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function xr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function E_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function fx(e){var t=[null,null],n=xr(e);return n===null||dx(t,e,n.child,{foundSelf:!1}),t}function dx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&dx(e,t,n.child,i))return!0;n=n.sibling}return!1}function rn(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Q(559))}}var so=null,am=null;function gT(e,t,n){return e===n?!0:e===t?(so=e,!0):!1}function vT(e,t,n){return e===n?(am=e,!1):e===t?(am!==null&&(so=e),!0):!1}function T_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function rm(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Ue=Object.assign,_T=Symbol.for("react.element"),Uu=Symbol.for("react.transitional.element"),Yl=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),px=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),mx=Symbol.for("react.consumer"),ps=Symbol.for("react.context"),gg=Symbol.for("react.forward_ref"),lm=Symbol.for("react.suspense"),cm=Symbol.for("react.suspense_list"),vg=Symbol.for("react.memo"),da=Symbol.for("react.lazy");Symbol.for("react.scope");var um=Symbol.for("react.activity"),yT=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var xT=Symbol.for("react.memo_cache_sentinel"),hm=Symbol.for("react.view_transition"),ST=Symbol.for("react.recoverable"),A_=Symbol.iterator;function Vl(e){return e===null||typeof e!="object"?null:(e=A_&&e[A_]||e["@@iterator"],typeof e=="function"?e:null)}var MT=Symbol.for("react.client.reference");function fm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===MT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ao:return"Fragment";case om:return"Profiler";case px:return"StrictMode";case lm:return"Suspense";case cm:return"SuspenseList";case um:return"Activity";case hm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Yl:return"Portal";case ps:return e.displayName||"Context";case mx:return(e._context.displayName||"Context")+".Consumer";case gg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vg:return t=e.displayName||null,t!==null?t:fm(e.type)||"Memo";case da:t=e._payload,e=e._init;try{return fm(e(t))}catch{}}return null}var Zl=Array.isArray,Xt=ox.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me=pT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,or={pending:!1,data:null,method:null,action:null},dm=[],ro=-1;function Ss(e){return{current:e}}function bn(e){0>ro||(e.current=dm[ro],dm[ro]=null,ro--)}function ze(e,t){ro++,dm[ro]=e.current,e.current=t}var _s=Ss(null),hc=Ss(null),Ma=Ss(null),_h=Ss(null);function yh(e,t){switch(ze(Ma,t),ze(hc,e),ze(_s,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hy(t),e=zS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}bn(_s),ze(_s,e)}function wo(){bn(_s),bn(hc),bn(Ma)}function pm(e){var t=e.memoizedState;t!==null&&(zo._currentValue=t.memoizedState,ze(_h,e)),t=_s.current;var n=zS(t,e.type);t!==n&&(ze(hc,e),ze(_s,n))}function xh(e){hc.current===e&&(bn(_s),bn(hc)),_h.current===e&&(bn(_h),zo._currentValue=or)}var Rp,w_;function ha(e){if(Rp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rp=t&&t[1]||"",w_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rp+e+w_}var Cp=!1;function Dp(e,t){if(!e||Cp)return"";Cp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var f=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){f=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){f=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&f&&typeof g.stack=="string")return[g.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{Cp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ha(n):""}function bT(e,t){switch(e.tag){case 26:case 27:case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return e.child!==t&&t!==null?ha("Suspense Fallback"):ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return Dp(e.type,!1);case 11:return Dp(e.type.render,!1);case 1:return Dp(e.type,!0);case 31:return ha("Activity");case 30:return ha("ViewTransition");default:return""}}function R_(e){try{var t="",n=null;do t+=bT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var mm=Object.prototype.hasOwnProperty,_g=on.unstable_scheduleCallback,Np=on.unstable_cancelCallback,ET=on.unstable_shouldYield,TT=on.unstable_requestPaint,vi=on.unstable_now,AT=on.unstable_getCurrentPriorityLevel,gx=on.unstable_ImmediatePriority,vx=on.unstable_UserBlockingPriority,Sh=on.unstable_NormalPriority,wT=on.unstable_LowPriority,_x=on.unstable_IdlePriority,RT=on.log,CT=on.unstable_setDisableYieldValue,Rc=null,_i=null;function ga(e){if(typeof RT=="function"&&CT(e),_i&&typeof _i.setStrictMode=="function")try{_i.setStrictMode(Rc,e)}catch{}}var yi=Math.clz32?Math.clz32:UT,DT=Math.log,NT=Math.LN2;function UT(e){return e>>>=0,e===0?32:31-(DT(e)/NT|0)|0}var Lu=256,Iu=262144,Ou=4194304;function nr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=nr(i):(r&=o,r!==0?s=nr(r):n||(n=o&~e,n!==0&&(s=nr(n))))):(o=i&~a,o!==0?s=nr(o):r!==0?s=nr(r):n||(n=i&~e,n!==0&&(s=nr(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Cc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-yi(n),s=1<<i;t|=e[i],n&=~s}return t}function LT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xx(){var e=Ou;return Ou<<=1,(Ou&62914560)===0&&(Ou=4194304),e}function Up(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function IT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-yi(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Sx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Sx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-yi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Mx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-yi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function bx(e,t){var n=t&-t;return n=(n&42)!==0?1:yg(n),(n&(e.suspendedLanes|t))!==0?0:n}function yg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ex(){var e=me.p;return e!==0?e:(e=window.event,e===void 0?32:aM(e.type))}function C_(e,t){var n=me.p;try{return me.p=e,t()}finally{me.p=n}}var Gs=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Gs,ai="__reactProps$"+Gs,Ho="__reactContainer$"+Gs,D_="__reactEvents$"+Gs,OT="__reactListeners$"+Gs,PT="__reactHandles$"+Gs,N_="__reactResources$"+Gs,Nc="__reactMarker$"+Gs,Mh="__reactLoad$"+Gs;function Zh(e){delete e[Sn],delete e[ai],delete e[OT],delete e[PT]}function ar(e){var t;if(t=e[Sn])return t;for(var n=e.parentNode;n;){if(t=n[Ho]||n[Sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zy(e);e!==null;){if(n=e[Sn])return n;e=Zy(e)}return t}e=n,n=e.parentNode}return null}function Vo(e){if(e=e[Sn]||e[Ho]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Kl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function vo(e){var t=e[N_];return t||(t=e[N_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pn(e){e[Nc]=!0}function Tx(e){e[Mh]=void 0}var Ax=new Set,wx={};function Sr(e,t){Ro(e,t),Ro(e+"Capture",t)}function Ro(e,t){for(wx[e]=t,e=0;e<t.length;e++)Ax.add(t[e])}var zT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),U_={},L_={};function BT(e){return mm.call(L_,e)?!0:mm.call(U_,e)?!1:zT.test(e)?L_[e]=!0:(U_[e]=!0,!1)}var de=!1;function I_(){var e=de;return de=!1,e}function $u(e,t,n){if(BT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Pu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ds(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function di(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function FT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gm(e){if(!e._valueTracker){var t=Rx(e)?"checked":"value";e._valueTracker=FT(e,t,""+e[t])}}function Cx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Rx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var HT=/[\n"\\]/g;function Ii(e){return e.replace(HT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+di(t)):e.value!==""+di(t)&&(e.value=""+di(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Lp(e,di(e.value)):Lp(e,di(t)):n!=null?Lp(e,di(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+di(o):e.removeAttribute("name")}function Dx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){gm(e);return}n=n!=null?""+di(n):"",t=t!=null?""+di(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),gm(e)}function Lp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function _o(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+di(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Nx(e,t,n){if(t!=null&&(t=""+di(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+di(n):""}function Ux(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(Zl(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=di(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),gm(e)}function Co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var VT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function O_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||VT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Lx(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",de=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(O_(e,s,i),de=!0)}else for(var a in t)t.hasOwnProperty(a)&&O_(e,a,t[a])}function Sg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var GT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function th(e){return kT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ms(){}var _m=null;function Mg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,yo=null;function P_(e){var t=Vo(e);if(t&&(e=t.stateNode)){var n=e[ai]||null;t:switch(e=t.stateNode,t.type){case"input":if(vm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ii(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ai]||null;if(!s)throw Error(Q(90));vm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Cx(i)}break t;case"textarea":Nx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&_o(e,!!n.multiple,t,!1)}}}var Ip=!1;function Ix(e,t,n){if(Ip)return e(t,n);Ip=!0;try{var i=e(t);return i}finally{if(Ip=!1,(oo!==null||yo!==null)&&(cf(),oo&&(t=oo,e=yo,yo=oo=null,P_(t),e)))for(t=0;t<e.length;t++)P_(e[t])}}function fc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ai]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var Ps=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ym=!1;if(Ps)try{jr={},Object.defineProperty(jr,"passive",{get:function(){ym=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{ym=!1}var jr,va=null,bg=null,eh=null;function Ox(){if(eh)return eh;var e,t=bg,n=t.length,i,s="value"in va?va.value:va.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return eh=s.slice(e,1<i?1-i:void 0)}function nh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zu(){return!0}function z_(){return!1}function Zn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?zu:z_,this.isPropagationStopped=z_,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zu)},persist:function(){},isPersistent:zu}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kh=Zn(za),Uc=Ue({},za,{view:0,detail:0}),XT=Zn(Uc),Op,Pp,Gl,Jh=Ue({},Uc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gl&&(Gl&&e.type==="mousemove"?(Op=e.screenX-Gl.screenX,Pp=e.screenY-Gl.screenY):Pp=Op=0,Gl=e),Op)},movementY:function(e){return"movementY"in e?e.movementY:Pp}}),B_=Zn(Jh),WT=Ue({},Jh,{dataTransfer:0}),qT=Zn(WT),YT=Ue({},Uc,{relatedTarget:0}),zp=Zn(YT),ZT=Ue({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),KT=Zn(ZT),JT=Ue({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),QT=Zn(JT),jT=Ue({},za,{data:0}),F_=Zn(jT),$T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eA[e])?!!t[e]:!1}function Eg(){return nA}var iA=Ue({},Uc,{key:function(e){if(e.key){var t=$T[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eg,charCode:function(e){return e.type==="keypress"?nh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sA=Zn(iA),aA=Ue({},Jh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),H_=Zn(aA),rA=Ue({},za,{submitter:0}),oA=Zn(rA),lA=Ue({},Uc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eg}),cA=Zn(lA),uA=Ue({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),hA=Zn(uA),fA=Ue({},Jh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dA=Zn(fA),pA=Ue({},za,{newState:0,oldState:0,source:0}),mA=Zn(pA),gA=[9,13,27,32],Tg=Ps&&"CompositionEvent"in window,jl=null;Ps&&"documentMode"in document&&(jl=document.documentMode);var vA=Ps&&"TextEvent"in window&&!jl,Px=Ps&&(!Tg||jl&&8<jl&&11>=jl),V_=" ",G_=!1;function zx(e,t){switch(e){case"keyup":return gA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lo=!1;function _A(e,t){switch(e){case"compositionend":return Bx(t);case"keypress":return t.which!==32?null:(G_=!0,V_);case"textInput":return e=t.data,e===V_&&G_?null:e;default:return null}}function yA(e,t){if(lo)return e==="compositionend"||!Tg&&zx(e,t)?(e=Ox(),eh=bg=va=null,lo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Px&&t.locale!=="ko"?null:t.data;default:return null}}var xA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function k_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xA[e.type]:t==="textarea"}function Fx(e,t,n,i){oo?yo?yo.push(i):yo=[i]:oo=i,t=Xh(t,"onChange"),0<t.length&&(n=new Kh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var $l=null,dc=null;function SA(e){IS(e,0)}function Qh(e){var t=Kl(e);if(Cx(t))return e}function X_(e,t){if(e==="change")return t}var Hx=!1;Ps&&(Ps?(Fu="oninput"in document,Fu||(Bp=document.createElement("div"),Bp.setAttribute("oninput","return;"),Fu=typeof Bp.oninput=="function"),Bu=Fu):Bu=!1,Hx=Bu&&(!document.documentMode||9<document.documentMode));var Bu,Fu,Bp;function W_(){$l&&($l.detachEvent("onpropertychange",Vx),dc=$l=null)}function Vx(e){if(e.propertyName==="value"&&Qh(dc)){var t=[];Fx(t,dc,e,Mg(e)),Ix(SA,t)}}function MA(e,t,n){e==="focusin"?(W_(),$l=t,dc=n,$l.attachEvent("onpropertychange",Vx)):e==="focusout"&&W_()}function bA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qh(dc)}function EA(e,t){if(e==="click")return Qh(t)}function TA(e,t){if(e==="input"||e==="change")return Qh(t)}function AA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Si=typeof Object.is=="function"?Object.is:AA;function pc(e,t){if(Si(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!mm.call(t,s)||!Si(e[s],t[s]))return!1}return!0}function xm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function q_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Y_(e,t){var n=q_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=q_(n)}}function Gx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xm(e.document)}return t}function Ag(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wA=Ps&&"documentMode"in document&&11>=document.documentMode,co=null,Sm=null,tc=null,Mm=!1;function Z_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mm||co==null||co!==xm(i)||(i=co,"selectionStart"in i&&Ag(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),tc&&pc(tc,i)||(tc=i,i=Xh(Sm,"onSelect"),0<i.length&&(t=new Kh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=co)))}function tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var uo={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},Fp={},Xx={};Ps&&(Xx=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function Mr(e){if(Fp[e])return Fp[e];if(!uo[e])return e;var t=uo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xx)return Fp[e]=t[n];return e}var Wx=Mr("animationend"),qx=Mr("animationiteration"),Yx=Mr("animationstart"),RA=Mr("transitionrun"),CA=Mr("transitionstart"),DA=Mr("transitioncancel"),Zx=Mr("transitionend"),Kx=new Map,bm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bm.push("scrollEnd");function Ji(e,t){Kx.set(e,t),Sr(t,[e])}var NA=0;function zs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ki.identifierPrefix;var n=NA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function K_(e){if(e==null||typeof e=="string")return e;var t=null,n=Ao;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function ks(e,t){return e=K_(e),t=K_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var bh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ni=[],ho=0,wg=0;function jh(){for(var e=ho,t=wg=ho=0;t<e;){var n=Ni[t];Ni[t++]=null;var i=Ni[t];Ni[t++]=null;var s=Ni[t];Ni[t++]=null;var a=Ni[t];if(Ni[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Jx(n,s,a)}}function $h(e,t,n,i){Ni[ho++]=e,Ni[ho++]=t,Ni[ho++]=n,Ni[ho++]=i,wg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Rg(e,t,n,i){return $h(e,t,n,i),Eh(e)}function br(e,t){return $h(e,null,null,t),Eh(e)}function Jx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-yi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Eh(e){if(50<uc)throw uc=0,fh=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fo={};function UA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,t,n,i){return new UA(e,t,n,i)}function Cg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Is(e,t){var n=e.alternate;return n===null?(n=ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Qx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ih(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Cg(i)&&(r=1);else if(typeof i=="string")r=s2(e,n,_s.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case um:return e=ni(31,n,t,s),e.elementType=um,e.lanes=a,e;case ao:return lr(n.children,s,a,t);case px:r=8,s|=24;break;case om:return e=ni(12,n,t,s|2),e.elementType=om,e.lanes=a,e;case lm:return e=ni(13,n,t,s),e.elementType=lm,e.lanes=a,e;case cm:return e=ni(19,n,t,s),e.elementType=cm,e.lanes=a,e;case yT:case hm:return e=s|32,e=ni(30,n,t,e),e.elementType=hm,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ps:r=10;break t;case mx:r=9;break t;case gg:r=11;break t;case vg:r=14;break t;case da:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=ni(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function lr(e,t,n,i){return e=ni(7,e,i,t),e.lanes=n,e}function Hp(e,t,n){return e=ni(6,e,null,t),e.lanes=n,e}function jx(e){var t=ni(18,null,null,0);return t.stateNode=e,t}function Vp(e,t,n){return t=ni(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var J_=new WeakMap;function Oi(e,t){if(typeof e=="object"&&e!==null){var n=J_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:R_(t)},J_.set(e,t),t)}return{value:e,source:t,stack:R_(t)}}var po=[],mo=0,Th=null,mc=0,Ui=[],Li=0,Ua=null,gs=1,vs="";function Us(e,t){po[mo++]=mc,po[mo++]=Th,Th=e,mc=t}function $x(e,t,n){Ui[Li++]=gs,Ui[Li++]=vs,Ui[Li++]=Ua,Ua=e;var i=gs;e=vs;var s=32-yi(i)-1;i&=~(1<<s),n+=1;var a=32-yi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,gs=1<<32-yi(t)+s|n<<s|i,vs=a+e}else gs=1<<a|n<<s|i,vs=e}function tf(e){e.return!==null&&(Us(e,1),$x(e,1,0))}function Dg(e){for(;e===Th;)Th=po[--mo],po[mo]=null,mc=po[--mo],po[mo]=null;for(;e===Ua;)Ua=Ui[--Li],Ui[Li]=null,vs=Ui[--Li],Ui[Li]=null,gs=Ui[--Li],Ui[Li]=null}function t1(e,t){Ui[Li++]=gs,Ui[Li++]=vs,Ui[Li++]=Ua,gs=t.id,vs=t.overflow,Ua=e}var mn=null,Pe=null,te=!1,ba=null,Pi=!1,Em=Error(Q(519));function La(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw gc(Oi(t,e)),Em}function Q_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Sn]=e,t[ai]=i,n){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(n=0;n<xc.length;n++)ne(xc[n],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Dx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Ux(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||PS(t.textContent,n)?(i.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),i.onScroll!=null&&ne("scroll",t),i.onScrollEnd!=null&&ne("scrollend",t),i.onClick!=null&&(t.onclick=ms),t=!0):t=!1,t||La(e,!0)}function Ah(e){for(mn=e.return;mn;)switch(mn.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:mn=mn.return}}function $r(e){if(e!==mn)return!1;if(!te)return Ah(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lg(e.type,e.memoizedProps)),n=!n),n&&Pe&&La(e),Ah(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));Pe=Yy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));Pe=Yy(e)}else t===27?(t=Pe,Ba(e.type)?(e=fg,fg=null,Pe=e):Pe=t):Pe=mn?zi(e.stateNode.nextSibling):null;return!0}function fr(){Pe=mn=null,te=!1}function Gp(){var e=ba;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),ba=null),e}function gc(e){ba===null?ba=[e]:ba.push(e)}var Tm=Ss(null),Er=null,Ls=null;function _a(e,t,n){ze(Tm,t._currentValue),t._currentValue=n}function Os(e){e._currentValue=Tm.current,bn(Tm)}function sh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Am(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),sh(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),sh(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),sh(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function dr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;Si(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===_h.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}s=s.return}return e!==null&&Am(t,e,n,i),t.flags|=262144,e!==null}function wh(e){for(e=e.firstContext;e!==null;){if(!Si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pr(e){Er=e,Ls=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return e1(Er,e)}function Hu(e,t){return Er===null&&pr(e),e1(e,t)}function e1(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ls===null){if(e===null)throw Error(Q(308));Ls=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ls=Ls.next=t;return n}var LA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},IA=on.unstable_scheduleCallback,OA=on.unstable_NormalPriority,tn={$$typeof:ps,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ng(){return{controller:new LA,data:new Map,refCount:0}}function Lc(e){e.refCount--,e.refCount===0&&IA(OA,function(){e.controller.abort()})}function j_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Jl=null;function PA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ec=null,wm=0,mr=0,xo=null;function zA(e,t){if(ec===null){var n=ec=[];wm=0,mr=a0(),xo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return wm++,t.then($_,$_),t}function $_(){if(--wm===0&&(Jl=null,ec!==null)){xo!==null&&(xo.status="fulfilled");var e=ec;ec=null,mr=0,xo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function BA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var ty=Xt.S;Xt.S=function(e,t){if(yS=vi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&zA(e,t),Jl!==null)for(var n=Io;n!==null;)j_(n,Jl),n=n.next;if(n=e.types,n!==null){for(var i=Io;i!==null;)j_(i,n),i=i.next;if(mr!==0){i=Jl,i===null&&(i=Jl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}ty!==null&&ty(e,t)};var cr=Ss(null);function Ug(){var e=cr.current;return e!==null?e:Ne.pooledCache}function ah(e,t){t===null?ze(cr,cr.current):ze(cr,t.pool)}function n1(){var e=Ug();return e===null?null:{parent:tn._currentValue,pool:e}}var Go=Error(Q(460)),Lg=Error(Q(474)),ef=Error(Q(542)),Rh={then:function(){}};function ey(e){return e=e.status,e==="fulfilled"||e==="rejected"}function i1(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ms,ms),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,iy(e),e===void 0&&!("reason"in t)?Error(Q(600)):e;default:if(typeof t.status=="string")t.then(ms,ms);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,iy(e),e}throw ur=t,Go}}function ir(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ur=n,Go):n}}var ur=null;function ny(){if(ur===null)throw Error(Q(459));var e=ur;return ur=null,e}function iy(e){if(e===Go||e===ef)throw Error(Q(483))}var So=null,vc=0;function Vu(e){var t=vc;return vc+=1,So===null&&(So=[]),i1(So,e,t)}function ua(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gu(e,t){throw t.$$typeof===_T?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function s1(e){function t(u,v){if(e){var _=u.deletions;_===null?(u.deletions=[v],u.flags|=16):_.push(v)}}function n(u,v){if(!e)return null;for(;v!==null;)t(u,v),v=v.sibling;return null}function i(u){for(var v=new Map;u!==null;)u.key===null?v.set(u.index,u):v.set(u.key,u),u=u.sibling;return v}function s(u,v){return u=Is(u,v),u.index=0,u.sibling=null,u}function a(u,v,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<v?(u.flags|=2,v):_):(u.flags|=134217730,v)):(u.flags|=1048576,v)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,v,_,y){return v===null||v.tag!==6?(v=Hp(_,u.mode,y),v.return=u,v):(v=s(v,_),v.return=u,v)}function l(u,v,_,y){var A=_.type;return A===ao?(u=h(u,v,_.props.children,y,_.key),ua(u,_),u):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===da&&ir(A)===v.type)?(v=s(v,_.props),ua(v,_),v.return=u,v):(v=ih(_.type,_.key,_.props,null,u.mode,y),ua(v,_),v.return=u,v)}function c(u,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Vp(_,u.mode,y),v.return=u,v):(v=s(v,_.children||[]),v.return=u,v)}function h(u,v,_,y,A){return v===null||v.tag!==7?(v=lr(_,u.mode,y,A),v.return=u,v):(v=s(v,_),v.return=u,v)}function d(u,v,_){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Hp(""+v,u.mode,_),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Uu:return _=ih(v.type,v.key,v.props,null,u.mode,_),ua(_,v),_.return=u,_;case Yl:return v=Vp(v,u.mode,_),v.return=u,v;case da:return v=ir(v),d(u,v,_)}if(Zl(v)||Vl(v))return v=lr(v,u.mode,_,null),v.return=u,v;if(typeof v.then=="function")return d(u,Vu(v),_);if(v.$$typeof===ps)return d(u,Hu(u,v),_);Gu(u,v)}return null}function f(u,v,_,y){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A!==null?null:o(u,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Uu:return _.key===A?l(u,v,_,y):null;case Yl:return _.key===A?c(u,v,_,y):null;case da:return _=ir(_),f(u,v,_,y)}if(Zl(_)||Vl(_))return A!==null?null:h(u,v,_,y,null);if(typeof _.then=="function")return f(u,v,Vu(_),y);if(_.$$typeof===ps)return f(u,v,Hu(u,_),y);Gu(u,_)}return null}function p(u,v,_,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(_)||null,o(v,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Uu:return u=u.get(y.key===null?_:y.key)||null,l(v,u,y,A);case Yl:return u=u.get(y.key===null?_:y.key)||null,c(v,u,y,A);case da:return y=ir(y),p(u,v,_,y,A)}if(Zl(y)||Vl(y))return u=u.get(_)||null,h(v,u,y,A,null);if(typeof y.then=="function")return p(u,v,_,Vu(y),A);if(y.$$typeof===ps)return p(u,v,_,Hu(v,y),A);Gu(v,y)}return null}function g(u,v,_,y){for(var A=null,w=null,C=v,N=v=0,E=null;C!==null&&N<_.length;N++){C.index>N?(E=C,C=null):E=C.sibling;var M=f(u,C,_[N],y);if(M===null){C===null&&(C=E);break}e&&C&&M.alternate===null&&t(u,C),v=a(M,v,N),w===null?A=M:w.sibling=M,w=M,C=E}if(N===_.length)return n(u,C),te&&Us(u,N),A;if(C===null){for(;N<_.length;N++)C=d(u,_[N],y),C!==null&&(v=a(C,v,N),w===null?A=C:w.sibling=C,w=C);return te&&Us(u,N),A}for(C=i(C);N<_.length;N++)E=p(C,u,N,_[N],y),E!==null&&(e&&(M=E.alternate,M!==null&&C.delete(M.key===null?N:M.key)),v=a(E,v,N),w===null?A=E:w.sibling=E,w=E);return e&&C.forEach(function(U){return t(u,U)}),te&&Us(u,N),A}function S(u,v,_,y){if(_==null)throw Error(Q(151));for(var A=null,w=null,C=v,N=v=0,E=null,M=_.next();C!==null&&!M.done;N++,M=_.next()){C.index>N?(E=C,C=null):E=C.sibling;var U=f(u,C,M.value,y);if(U===null){C===null&&(C=E);break}e&&C&&U.alternate===null&&t(u,C),v=a(U,v,N),w===null?A=U:w.sibling=U,w=U,C=E}if(M.done)return n(u,C),te&&Us(u,N),A;if(C===null){for(;!M.done;N++,M=_.next())M=d(u,M.value,y),M!==null&&(v=a(M,v,N),w===null?A=M:w.sibling=M,w=M);return te&&Us(u,N),A}for(C=i(C);!M.done;N++,M=_.next())M=p(C,u,N,M.value,y),M!==null&&(e&&(E=M.alternate,E!==null&&C.delete(E.key===null?N:E.key)),v=a(M,v,N),w===null?A=M:w.sibling=M,w=M);return e&&C.forEach(function(H){return t(u,H)}),te&&Us(u,N),A}function m(u,v,_,y){if(typeof _=="object"&&_!==null&&_.type===ao&&_.key===null&&_.props.ref===void 0&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Uu:t:{for(var A=_.key;v!==null;){if(v.key===A){if(A=_.type,A===ao){if(v.tag===7){n(u,v.sibling),y=s(v,_.props.children),ua(y,_),y.return=u,u=y;break t}}else if(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===da&&ir(A)===v.type){n(u,v.sibling),y=s(v,_.props),ua(y,_),y.return=u,u=y;break t}n(u,v);break}else t(u,v);v=v.sibling}_.type===ao?(y=lr(_.props.children,u.mode,y,_.key),ua(y,_),y.return=u,u=y):(y=ih(_.type,_.key,_.props,null,u.mode,y),ua(y,_),y.return=u,u=y)}return r(u);case Yl:t:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(u,v.sibling),y=s(v,_.children||[]),y.return=u,u=y;break t}else{n(u,v);break}else t(u,v);v=v.sibling}y=Vp(_,u.mode,y),y.return=u,u=y}return r(u);case da:return _=ir(_),m(u,v,_,y)}if(Zl(_))return g(u,v,_,y);if(Vl(_)){if(A=Vl(_),typeof A!="function")throw Error(Q(150));return _=A.call(_),S(u,v,_,y)}if(typeof _.then=="function")return m(u,v,Vu(_),y);if(_.$$typeof===ps)return m(u,v,Hu(u,_),y);Gu(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,v!==null&&v.tag===6?(n(u,v.sibling),y=s(v,_),y.return=u,u=y):(n(u,v),y=Hp(_,u.mode,y),y.return=u,u=y),r(u)):n(u,v)}return function(u,v,_,y){try{vc=0;var A=m(u,v,_,y);return So=null,A}catch(C){if(C===Go||C===ef)throw C;var w=ni(29,C,null,u.mode);return w.lanes=y,w.return=u,w}finally{}}}var gr=s1(!0),a1=s1(!1),pa=!1;function Ig(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Eh(e),Jx(e,null,n),t}return $h(e,i,t,n),Eh(e)}function nc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Mx(e,n)}}function kp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Cm=!1;function ic(){if(Cm){var e=xo;if(e!==null)throw e}}function sc(e,t,n,i){Cm=!1;var s=e.updateQueue;pa=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(re&f)===f:(i&f)===f){f!==0&&f===mr&&(Cm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,S=o;f=t;var m=n;switch(S.tag){case 1:if(g=S.payload,typeof g=="function"){d=g.call(m,d,f);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break t;d=Ue({},d,f);break t;case 2:pa=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Pa|=r,e.lanes=r,e.memoizedState=d}}function r1(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function o1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)r1(n[e],t)}var Ia=Ss(null),Ch=Ss(0);function sy(e,t){e=Vs,ze(Ch,e),ze(Ia,t),Vs=e|t.baseLanes}function Dm(){ze(Ch,Vs),ze(Ia,Ia.current)}function Og(){Vs=Ch.current,bn(Ia),bn(Ch)}var An=Ss(null),In=null;function Aa(e){var t=e.alternate;ze(En,En.current&1),ze(An,e),In===null&&(t===null||Ia.current!==null||t.memoizedState!==null)&&(In=e)}function Nm(e){ze(En,En.current),ze(An,e),In===null&&(In=e)}function l1(e){e.tag===22?(ze(En,En.current),ze(An,e),In===null&&(In=e)):wa()}function wa(){ze(En,En.current),ze(An,An.current)}function pi(e){bn(An),In===e&&(In=null),bn(En)}var En=Ss(0);function _c(e,t){ze(An,An.current),ze(En,t)}function Pg(e){bn(En),bn(An),In===e&&(In=null)}function Dh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hg(n)||c0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bs=0,Jt=null,De=null,$e=null,Nh=!1,Mo=!1,vr=!1,Uh=0,yc=0,bo=null,FA=0;function Ke(){throw Error(Q(321))}function zg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Si(e[n],t[n]))return!1;return!0}function Bg(e,t,n,i,s,a){return Bs=a,Jt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xt.H=e===null||e.memoizedState===null?F1:H1,vr=!1,a=n(i,s),vr=!1,Mo&&(a=u1(t,n,i,s)),c1(e),a}function c1(e){Xt.H=Lh;var t=De!==null&&De.next!==null;if(Bs=0,$e=De=Jt=null,Nh=!1,yc=0,bo=null,t)throw Error(Q(300));e===null||en||(e=e.dependencies,e!==null&&wh(e)&&(en=!0))}function u1(e,t,n,i){Jt=e;var s=0;do{if(Mo&&(bo=null),yc=0,Mo=!1,25<=s)throw Error(Q(301));if(s+=1,$e=De=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Xt.H=YA,a=t(n,i)}while(Mo);return a}function HA(){var e=Xt.H,t=e.useState()[0];return t=typeof t.then=="function"?Ic(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(Jt.flags|=1024),t}function Fg(){var e=Uh!==0;return Uh=0,e}function Hg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vg(e){if(Nh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nh=!1}Bs=0,$e=De=Jt=null,Mo=!1,yc=Uh=0,bo=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Jt.memoizedState=$e=e:$e=$e.next=e,$e}function Qe(){if(De===null){var e=Jt.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=$e===null?Jt.memoizedState:$e.next;if(t!==null)$e=t,De=e;else{if(e===null)throw Jt.alternate===null?Error(Q(467)):Error(Q(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},$e===null?Jt.memoizedState=$e=e:$e=$e.next=e}return $e}function nf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ic(e){var t=yc;return yc+=1,bo===null&&(bo=[]),e=i1(bo,e,t),t=Jt,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,Xt.H=t===null||t.memoizedState===null?F1:H1),e}function sf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ic(e);if(e.$$typeof===ST)return;if(e.$$typeof===ps)return Mn(e)}throw Error(Q(438,String(e)))}function Gg(e){var t=null,n=Jt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Jt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=nf(),Jt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=xT;return t.index++,n}function Fs(e,t){return typeof t=="function"?t(e):t}function rh(e){var t=Qe();return kg(t,De,e)}function kg(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(re&d)===d:(Bs&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===mr&&(h=!0);else if((Bs&f)===f){c=c.next,f===mr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Jt.lanes|=f,Pa|=f;d=c.action,vr&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Jt.lanes|=d,Pa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Si(a,e.memoizedState)&&(en=!0,h&&(n=xo,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Xp(e){var t=Qe(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Si(a,t.memoizedState)||(en=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function h1(e,t,n){var i=Jt,s=Qe(),a=te;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!Si((De||s).memoizedState,n);if(r&&(s.memoizedState=n,en=!0),s=s.queue,Xg(p1.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||$e!==null&&($e.memoizedState.tag&1)!==0,Do(e?9:8,{destroy:void 0},d1.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ne===null)throw Error(Q(349));a||(Bs&127)!==0||f1(i,t,n)}return n}function f1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Jt.updateQueue,t===null?(t=nf(),Jt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function d1(e,t,n,i){t.value=n,t.getSnapshot=i,m1(t)&&g1(e)}function p1(e,t,n){return n(function(){m1(t)&&g1(e)})}function m1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Si(e,n)}catch{return!0}}function g1(e){var t=br(e,2);t!==null&&ii(t,e,2)}function Um(e){var t=Yn();if(typeof e=="function"){var n=e;if(e=n(),vr){ga(!0);try{n()}finally{ga(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:e},t}function v1(e,t,n,i){return e.baseState=n,kg(e,De,typeof i=="function"?i:Fs)}function VA(e,t,n,i,s){if(rf(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Xt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,_1(t,a)):(a.next=n.next,t.pending=n.next=a)}}function _1(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Xt.T,r={};r.types=a!==null?a.types:null,Xt.T=r;try{var o=n(s,i),l=Xt.S;l!==null&&l(r,o),ay(e,t,o)}catch(c){Lm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Xt.T=a}}else try{a=n(s,i),ay(e,t,a)}catch(c){Lm(e,t,c)}}function ay(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ry(e,t,i)},function(i){return Lm(e,t,i)}):ry(e,t,n)}function ry(e,t,n){t.status="fulfilled",t.value=n,y1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_1(e,n)))}function Lm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,y1(t),t=t.next;while(t!==i)}e.action=null}function y1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function x1(e,t){return t}function oy(e,t){if(te){var n=Ne.formState;if(n!==null){t:{var i=Jt;if(te){if(Pe){e:{for(var s=Pe,a=Pi;s.nodeType!==8;){if(!a){s=null;break e}if(s=zi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Pe=zi(s.nextSibling),i=s.data==="F!";break t}}La(i)}i=!1}i&&(t=n[0])}}return n=Yn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:x1,lastRenderedState:t},n.queue=i,n=P1.bind(null,Jt,i),i.dispatch=n,i=Um(!1),a=Zg.bind(null,Jt,!1,i.queue),i=Yn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=VA.bind(null,Jt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function ly(e){var t=Qe();return S1(t,De,e)}function S1(e,t,n){if(t=kg(e,t,x1)[0],e=rh(Fs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ic(t)}catch(r){throw r===Go?ef:r}else i=t;t=Qe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Jt.flags|=2048,Do(9,{destroy:void 0},GA.bind(null,s,n),null)),[i,a,e]}function GA(e,t){e.action=t}function cy(e){var t=Qe(),n=De;if(n!==null)return S1(t,n,e);Qe(),t=t.memoizedState,n=Qe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Do(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Jt.updateQueue,t===null&&(t=nf(),Jt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function M1(){return Qe().memoizedState}function oh(e,t,n,i){var s=Yn();Jt.flags|=e,s.memoizedState=Do(1|t,{destroy:void 0},n,i===void 0?null:i)}function af(e,t,n,i){var s=Qe();i=i===void 0?null:i;var a=s.memoizedState.inst;De!==null&&i!==null&&zg(i,De.memoizedState.deps)?s.memoizedState=Do(t,a,n,i):(Jt.flags|=e,s.memoizedState=Do(1|t,a,n,i))}function uy(e,t){oh(8390656,8,e,t)}function Xg(e,t){af(2048,8,e,t)}function kA(e){Jt.flags|=4;var t=Jt.updateQueue;if(t===null)t=nf(),Jt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function b1(e){var t=Qe().memoizedState;return kA({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function E1(e,t){return af(4,2,e,t)}function T1(e,t){return af(4,4,e,t)}function A1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function w1(e,t,n){n=n!=null?n.concat([e]):null,af(4,4,A1.bind(null,t,e),n)}function Wg(){}function R1(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&zg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function C1(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&zg(t,i[1]))return i[0];if(i=e(),vr){ga(!0);try{e()}finally{ga(!1)}}return n.memoizedState=[i,t],i}function qg(e,t,n){return n===void 0||(Bs&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=SS(),Jt.lanes|=e,Pa|=e,n)}function D1(e,t,n,i){return Si(n,t)?n:Ia.current!==null?(e=qg(e,n,i),Si(e,t)||(en=!0),e):(Bs&106)===0||(Bs&1073741824)!==0&&(re&261930)===0?(en=!0,e.memoizedState=n):(e=SS(),Jt.lanes|=e,Pa|=e,t)}function N1(e,t,n,i,s){var a=me.p;me.p=a!==0&&8>a?a:8;var r=Xt.T,o={};o.types=r!==null?r.types:null,Xt.T=o,Zg(e,!1,t,n);try{var l=s(),c=Xt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=BA(l,i);ac(e,t,h,xi(e))}else ac(e,t,i,xi(e))}catch(d){ac(e,t,{then:function(){},status:"rejected",reason:d},xi())}finally{me.p=a,r!==null&&o.types!==null&&(r.types=o.types),Xt.T=r}}function XA(){}function Im(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=U1(e).queue;N1(e,s,t,or,n===null?XA:function(){return L1(e),n(i)})}function U1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:or,baseState:or,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:or},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function L1(e){var t=U1(e);t.next===null&&(t=e.alternate.memoizedState),ac(e,t.next.queue,{},xi())}function Yg(){return Mn(zo)}function I1(){return Qe().memoizedState}function O1(){return Qe().memoizedState}function WA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=xi();e=Ea(n);var i=Ta(t,e,n);i!==null&&(ii(i,t,n),nc(i,t,n)),t={cache:Ng()},e.payload=t;return}t=t.return}}function qA(e,t,n){var i=xi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},rf(e)?z1(t,n):(n=Rg(e,t,n,i),n!==null&&(ii(n,e,i),B1(n,t,i)))}function P1(e,t,n){var i=xi();ac(e,t,n,i)}function ac(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(rf(e))z1(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Si(o,r))return $h(e,t,s,0),Ne===null&&jh(),!1}catch{}finally{}if(n=Rg(e,t,s,i),n!==null)return ii(n,e,i),B1(n,t,i),!0}return!1}function Zg(e,t,n,i){if(i={lane:2,revertLane:a0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},rf(e)){if(t)throw Error(Q(479))}else t=Rg(e,n,i,2),t!==null&&ii(t,e,2)}function rf(e){var t=e.alternate;return e===Jt||t!==null&&t===Jt}function z1(e,t){Mo=Nh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function B1(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Mx(e,n)}}var Lh={readContext:Mn,use:sf,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke,useEffectEvent:Ke},F1={readContext:Mn,use:sf,useCallback:function(e,t){return Yn().memoizedState=[e,t===void 0?null:t],e},useContext:Mn,useEffect:uy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,oh(4194308,4,A1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oh(4194308,4,e,t)},useInsertionEffect:function(e,t){oh(4,2,e,t)},useMemo:function(e,t){var n=Yn();t=t===void 0?null:t;var i=e();if(vr){ga(!0);try{e()}finally{ga(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Yn();if(n!==void 0){var s=n(t);if(vr){ga(!0);try{n(t)}finally{ga(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=qA.bind(null,Jt,e),[i.memoizedState,e]},useRef:function(e){var t=Yn();return e={current:e},t.memoizedState=e},useState:function(e){e=Um(e);var t=e.queue,n=P1.bind(null,Jt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Wg,useDeferredValue:function(e,t){var n=Yn();return qg(n,e,t)},useTransition:function(){var e=Um(!1);return e=N1.bind(null,Jt,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Jt,s=Yn();if(te){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),Ne===null)throw Error(Q(349));(re&127)!==0||f1(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,uy(p1.bind(null,i,a,e),[e]),i.flags|=2048,Do(9,{destroy:void 0},d1.bind(null,i,a,n,t),null),n},useId:function(){var e=Yn(),t=Ne.identifierPrefix;if(te){var n=vs,i=gs;n=(i&~(1<<32-yi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Uh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=FA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Yg,useFormState:oy,useActionState:oy,useOptimistic:function(e){var t=Yn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Zg.bind(null,Jt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Gg,useCacheRefresh:function(){return Yn().memoizedState=WA.bind(null,Jt)},useEffectEvent:function(e){var t=Yn(),n={impl:e};return t.memoizedState=n,function(){if((pe&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},H1={readContext:Mn,use:sf,useCallback:R1,useContext:Mn,useEffect:Xg,useImperativeHandle:w1,useInsertionEffect:E1,useLayoutEffect:T1,useMemo:C1,useReducer:rh,useRef:M1,useState:function(){return rh(Fs)},useDebugValue:Wg,useDeferredValue:function(e,t){var n=Qe();return D1(n,De.memoizedState,e,t)},useTransition:function(){var e=rh(Fs)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Ic(e),t]},useSyncExternalStore:h1,useId:I1,useHostTransitionStatus:Yg,useFormState:ly,useActionState:ly,useOptimistic:function(e,t){var n=Qe();return v1(n,De,e,t)},useMemoCache:Gg,useCacheRefresh:O1,useEffectEvent:b1},YA={readContext:Mn,use:sf,useCallback:R1,useContext:Mn,useEffect:Xg,useImperativeHandle:w1,useInsertionEffect:E1,useLayoutEffect:T1,useMemo:C1,useReducer:Xp,useRef:M1,useState:function(){return Xp(Fs)},useDebugValue:Wg,useDeferredValue:function(e,t){var n=Qe();return De===null?qg(n,e,t):D1(n,De.memoizedState,e,t)},useTransition:function(){var e=Xp(Fs)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Ic(e),t]},useSyncExternalStore:h1,useId:I1,useHostTransitionStatus:Yg,useFormState:cy,useActionState:cy,useOptimistic:function(e,t){var n=Qe();return De!==null?v1(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gg,useCacheRefresh:O1,useEffectEvent:b1};function Wp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Om={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=xi(),s=Ea(i);s.payload=t,n!=null&&(s.callback=n),t=Ta(e,s,i),t!==null&&(ii(t,e,i),nc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=xi(),s=Ea(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ta(e,s,i),t!==null&&(ii(t,e,i),nc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xi(),i=Ea(n);i.tag=2,t!=null&&(i.callback=t),t=Ta(e,i,n),t!==null&&(ii(t,e,n),nc(t,e,n))}};function hy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!pc(n,i)||!pc(s,a):!0}function fy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Om.enqueueReplaceState(t,t.state,null)}function _r(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ue({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function V1(e){bh(e)}function G1(e){console.error(e)}function k1(e){bh(e)}function Ih(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function dy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Pm(e,t,n){return n=Ea(n),n.tag=3,n.payload={element:null},n.callback=function(){Ih(e,t)},n}function X1(e){return e=Ea(e),e.tag=3,e}function W1(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){dy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){dy(t,n,i),typeof s!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function ZA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&dr(t,n,s,!0),n=An.current,n!==null){switch(n.tag){case 31:case 13:case 19:return In===null?Gh():n.alternate===null&&Je===0&&(Je=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Rh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),jp(e,i,s)),!1;case 22:return n.flags|=65536,i===Rh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),jp(e,i,s)),!1}throw Error(Q(435,n.tag))}return jp(e,i,s),Gh(),!1}if(te)return t=An.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Em&&(e=Error(Q(422),{cause:i}),gc(Oi(e,n)))):(i!==Em&&(t=Error(Q(423),{cause:i}),gc(Oi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Oi(i,n),s=Pm(e.stateNode,i,s),kp(e,s),Je!==4&&(Je=2)),!1;var a=Error(Q(520),{cause:i});if(a=Oi(a,n),cc===null?cc=[a]:cc.push(a),Je!==4&&(Je=2),t===null)return!0;i=Oi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Pm(n.stateNode,i,e),kp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ra===null||!Ra.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=X1(s),W1(s,e,n,i),kp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Kg=Error(Q(461)),en=!1;function an(e,t,n,i){t.child=e===null?a1(t,null,n,i):gr(t,e.child,n,i)}function py(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return pr(t),i=Bg(e,t,n,r,a,s),o=Fg(),e!==null&&!en?(Hg(e,t,s),Hs(e,t,s)):(te&&o&&tf(t),t.flags|=1,an(e,t,i,s),t.child)}function my(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Cg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,q1(e,t,a,i,s)):(e=ih(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Qg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:pc,n(r,i)&&e.ref===t.ref)return Hs(e,t,s)}return t.flags|=1,e=Is(a,i),e.ref=t.ref,e.return=t,t.child=e}function q1(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(pc(a,i)&&e.ref===t.ref)if(en=!1,t.pendingProps=i=a,Qg(e,s))(e.flags&131072)!==0&&(en=!0);else return t.lanes=e.lanes,Hs(e,t,s)}return zm(e,t,n,i,s)}function Y1(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return gy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ah(t,a!==null?a.cachePool:null),a!==null?sy(t,a):Dm(),l1(t);else return i=t.lanes=536870912,gy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(ah(t,a.cachePool),sy(t,a),wa(),t.memoizedState=null):(e!==null&&ah(t,null),Dm(),wa());return an(e,t,s,n),t.child}function rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gy(e,t,n,i,s){var a=Ug();return a=a===null?null:{parent:tn._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ah(t,null),Dm(),l1(t),e!==null&&dr(e,t,i,!0),t.childLanes=s,null}function lh(e,t){return t=of({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vy(e,t,n){return gr(t,e.child,null,n),e=lh(t,t.pendingProps),e.flags|=2,pi(t),t.memoizedState=null,e}function KA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(i.mode==="hidden")return e=lh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},rc(null,e);if(Nm(t),(e=Pe)?(e=YS(e,Pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:gs,overflow:vs}:null,retryLane:536870912,hydrationErrors:null},n=jx(e),n.return=t,t.child=n,mn=t,Pe=null)):e=null,e===null)throw La(t);return t.lanes=536870912,null}return lh(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Nm(t),s)if(t.flags&256)t.flags&=-257,t=vy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(en||dr(e,t,n,!1),s=(n&e.childLanes)!==0,en||s){if(Ia.current===null){if(i=Ne,i!==null&&(r=bx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,br(e,r),ii(i,e,r),Kg;Gh()}t=vy(e,t,n)}else e=a.treeContext,Pe=zi(r.nextSibling),mn=t,te=!0,ba=null,Pi=!1,e!==null&&t1(t,e),t=lh(t,i),t.flags|=134221824;return t}return e=Is(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function eo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zm(e,t,n,i,s){return pr(t),n=Bg(e,t,n,i,void 0,s),i=Fg(),e!==null&&!en?(Hg(e,t,s),Hs(e,t,s)):(te&&i&&tf(t),t.flags|=1,an(e,t,n,s),t.child)}function _y(e,t,n,i,s,a){return pr(t),t.updateQueue=null,n=u1(t,i,n,s),c1(e),i=Fg(),e!==null&&!en?(Hg(e,t,a),Hs(e,t,a)):(te&&i&&tf(t),t.flags|=1,an(e,t,n,a),t.child)}function yy(e,t,n,i,s){if(pr(t),t.stateNode===null){var a=fo,r=n.contextType;typeof r=="object"&&r!==null&&(a=Mn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Om,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Ig(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?Mn(r):fo,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Wp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Om.enqueueReplaceState(a,a.state,null),sc(t,i,a,s),ic(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=_r(n,o);a.props=l;var c=a.context,h=n.contextType;r=fo,typeof h=="object"&&h!==null&&(r=Mn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&fy(t,a,i,r),pa=!1;var f=t.memoizedState;a.state=f,sc(t,i,a,s),ic(),c=t.memoizedState,o||f!==c||pa?(typeof d=="function"&&(Wp(t,n,d,i),c=t.memoizedState),(l=pa||hy(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Rm(e,t),r=t.memoizedProps,h=_r(n,r),a.props=h,d=t.pendingProps,f=a.context,c=n.contextType,l=fo,typeof c=="object"&&c!==null&&(l=Mn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&fy(t,a,i,l),pa=!1,f=t.memoizedState,a.state=f,sc(t,i,a,s),ic();var p=t.memoizedState;r!==d||f!==p||pa||e!==null&&e.dependencies!==null&&wh(e.dependencies)?(typeof o=="function"&&(Wp(t,n,o,i),p=t.memoizedState),(h=pa||hy(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&wh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,eo(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=gr(t,e.child,null,s),t.child=gr(t,null,n,s)):an(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Hs(e,t,s),e}function xy(e,t,n,i){return fr(),t.flags|=256,an(e,t,n,i),t.child}var Bm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fm(e){return{baseLanes:e,cachePool:n1()}}function Hm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gi),e}function Z1(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(En.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(s?Aa(t):wa(),(e=Pe)?(e=YS(e,Pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:gs,overflow:vs}:null,retryLane:536870912,hydrationErrors:null},n=jx(e),n.return=t,t.child=n,mn=t,Pe=null)):e=null,e===null)throw La(t);return c0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(wa(),s=t.mode,a=of({mode:"hidden",children:a},s),i=lr(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Fm(n),i.childLanes=Hm(e,r,n),t.memoizedState=Bm,rc(null,i)):(Aa(t),Jg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return JA(e,t,a,r,i,l,o,n)}return s?(wa(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Is(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Is(l,s):(s=lr(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,rc(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Fm(n):(a=s.cachePool,a!==null?(o=tn._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=n1(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Hm(e,r,n),t.memoizedState=Bm,rc(e.child,i)):(Aa(t),n=e.child,e=n.sibling,n=Is(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Jg(e,t){return t=of({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function of(e,t){return e=ni(22,e,null,t),e.lanes=0,e}function ku(e,t,n){return gr(t,e.child,null,n),e=Jg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function JA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Aa(t),t.flags&=-257,ku(e,t,o)):t.memoizedState!==null?(wa(),t.child=e.child,t.flags|=128,null):(wa(),a=s.fallback,r=t.mode,s=of({mode:"visible",children:s.children},r),a=lr(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,gr(t,e.child,null,o),s=t.child,s.memoizedState=Fm(o),s.childLanes=Hm(e,i,o),t.memoizedState=Bm,rc(null,s));if(Aa(t),c0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Q(419)),s.stack="",s.digest=i,gc({value:s,source:null,stack:null})),ku(e,t,o)}if(en||dr(e,t,o,!1),i=(o&e.childLanes)!==0,en||i){if(Ia.current!==null)return ku(e,t,o);if(i=Ne,i!==null&&(s=bx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,br(e,s),ii(i,e,s),Kg;return hg(a)||Gh(),ku(e,t,o)}return hg(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Pe=zi(a.nextSibling),mn=t,te=!0,ba=null,Pi=!1,e!==null&&t1(t,e),t=Jg(t,s.children),t.flags|=134221824,t)}function Sy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),sh(e.return,t,n)}function My(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Dh(n)===null&&(t=e),e=e.sibling}return t}function Xu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function qp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Vm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=En.current;if(t.flags&128)return _c(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,_c(t,r),s==="backwards"&&e!==null?(qp(e),an(e,t,i,n),qp(e)):an(e,t,i,n),i=te?mc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sy(e,n,t);else if(e.tag===19)Sy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=My(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,qp(t)),Xu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Dh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Xu(t,!0,n,null,a,i);break;case"together":Xu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=My(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Xu(t,!1,s,n,a,i)}return t.child}function by(e,t,n){var i=t.pendingProps;return _a(t,t.type,i.value),an(e,t,i.children,n),t.child}function Hs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(dr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=Is(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Is(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wh(e)))}function QA(e,t,n){switch(t.tag){case 3:yh(t,t.stateNode.containerInfo),_a(t,tn,e.memoizedState.cache),fr();break;case 27:case 5:pm(t);break;case 4:yh(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Nm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Aa(t),t.flags|=128,null;i=dr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?Z1(e,t,n):(Aa(t),e=Hs(e,t,n),e!==null?e.sibling:null)}Aa(t);break;case 19:if(t.flags&128)return Vm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(dr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Vm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_c(t,En.current),i)break;return null;case 22:return t.lanes=0,Y1(e,t,n,t.pendingProps);case 24:_a(t,tn,e.memoizedState.cache)}return Hs(e,t,n)}function K1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)en=!0;else{if(!Qg(e,n)&&(t.flags&128)===0)return en=!1,QA(e,t,n);en=(e.flags&131072)!==0}else en=!1,te&&(t.flags&1048576)!==0&&$x(t,mc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ir(t.elementType),t.type=e,typeof e=="function")Cg(e)?(i=_r(e,i),t.tag=1,t=yy(null,t,e,i,n)):(t.tag=0,t=zm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===gg){t.tag=11,t=py(null,t,e,i,n);break t}else if(s===vg){t.tag=14,t=my(null,t,e,i,n);break t}else if(s===ps){t.tag=10,t.type=e,t=by(null,t,n);break t}}throw t=fm(e)||e,Error(Q(306,t,""))}}return t;case 0:return zm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=_r(i,t.pendingProps),yy(e,t,i,s,n);case 3:t:{if(yh(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Rm(e,t),sc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,_a(t,tn,i),i!==a.cache&&Am(t,[tn],n,!0),ic(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xy(e,t,i,n);break t}else if(i!==s){s=Oi(Error(Q(424)),t),gc(s),t=xy(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Pe=zi(e.firstChild),mn=t,te=!0,ba=null,Pi=!0,n=a1(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(fr(),i===s){t=Hs(e,t,n);break t}an(e,t,i,n)}t=t.child}return t;case 26:return eo(e,t),e===null?(n=Jy(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(t.stateNode=BS(t.type,t.pendingProps,Ma.current,t)):t.memoizedState=Jy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pm(t),e===null&&te&&(i=t.stateNode=ZS(t.type,t.pendingProps,Ma.current),mn=t,Pi=!0,s=Pe,Ba(t.type)?(fg=s,Pe=zi(i.firstChild)):Pe=s),an(e,t,t.pendingProps.children,n),eo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((s=i=Pe)&&(i=kw(i,t.type,t.pendingProps,Pi),i!==null?(t.stateNode=i,mn=t,Pe=zi(i.firstChild),Pi=!1,s=!0):s=!1),s||La(t)),pm(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,lg(s,a)?i=null:r!==null&&lg(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Bg(e,t,HA,null,null,n),zo._currentValue=s),eo(e,t),an(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Pe)&&(n=Xw(n,t.pendingProps,Pi),n!==null?(t.stateNode=n,mn=t,Pe=null,e=!0):e=!1),e||La(t)),null;case 13:return Z1(e,t,n);case 4:return yh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=gr(t,null,i,n):an(e,t,i,n),t.child;case 11:return py(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,eo(e,t),an(e,t,i,n),t.child;case 8:return an(e,t,t.pendingProps.children,n),t.child;case 12:return an(e,t,t.pendingProps.children,n),t.child;case 10:return by(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,pr(t),s=Mn(s),i=i(s),t.flags|=1,an(e,t,i,n),t.child;case 14:return my(e,t,t.type,t.pendingProps,n);case 15:return q1(e,t,t.type,t.pendingProps,n);case 19:return Vm(e,t,n);case 31:return KA(e,t,n);case 22:return Y1(e,t,n,t.pendingProps);case 24:return pr(t),i=Mn(tn),e===null?(s=Ug(),s===null&&(s=Ne,a=Ng(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Ig(t),_a(t,tn,s)):((e.lanes&n)!==0&&(Rm(e,t),sc(t,null,null,n),ic()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),_a(t,tn,i)):(i=a.cache,_a(t,tn,i),i!==s.cache&&Am(t,[tn],n,!0))),an(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:te&&tf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:eo(e,t),an(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function Ns(e){e.flags|=4}function Yp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?$y(t,i):$y(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(ES())e.flags|=8192;else throw ur=Rh,Lg}else e.flags&=-16777217}function Ey(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jS(t))if(ES())e.flags|=8192;else throw ur=Rh,Lg}function Wu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xx():536870912,e.lanes|=t,No|=t)}function kl(e,t){if(!te)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function jA(e,t,n){var i=t.pendingProps;switch(Dg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Os(tn),wo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($r(t)?Ns(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gp())),Oe(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Ns(t),a!==null?(Oe(t),Ey(t,a)):(Oe(t),Yp(t,s,null,i,n))):a?a!==e.memoizedState?(Ns(t),Oe(t),Ey(t,a)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ns(t),Oe(t),Yp(t,s,e,i,n)),null;case 27:if(xh(t),n=Ma.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ns(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Oe(t),t.subtreeFlags&=-33554433,null}e=_s.current,$r(t)?Q_(t,e):(e=ZS(s,i,n),t.stateNode=e,Ns(t))}return Oe(t),t.subtreeFlags&=-33554433,null;case 5:if(xh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ns(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Oe(t),t.subtreeFlags&=-33554433,null}if(a=_s.current,$r(t))Q_(t,a);else{var r=Mc(Ma.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[Sn]=t,a[ai]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Tn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ns(t)}}return Oe(t),t.subtreeFlags&=-33554433,Yp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ns(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=Ma.current,$r(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=mn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Sn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||PS(e.nodeValue,n)),e||La(t,!0)}else e=Mc(e).createTextNode(i),e[Sn]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=$r(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[Sn]=t}else fr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=Gp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(pi(t),t):(pi(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return Oe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=$r(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[Sn]=t}else fr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else s=Gp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(pi(t),t):(pi(t),null)}return pi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Wu(t,t.updateQueue),Oe(t),null);case 4:return wo(),e===null&&r0(t.stateNode.containerInfo),t.flags|=67108864,Oe(t),null;case 10:return Os(t.type),Oe(t),null;case 19:if(Pg(t),i=t.memoizedState,i===null)return Oe(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)kl(i,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Dh(e),a!==null){for(t.flags|=128,kl(i,!1),e=a.updateQueue,t.updateQueue=e,Wu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Qx(n,e),n=n.sibling;return _c(t,En.current&1|2),te&&Us(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&vi()>Hh&&(t.flags|=128,s=!0,kl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Dh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Wu(t,e),kl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!te)return Oe(t),null}else 2*vi()-i.renderingStartTime>Hh&&n!==536870912&&(t.flags|=128,s=!0,kl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=vi(),e.sibling=null,a=En.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||te?_c(t,a):(n=a,ze(An,t),ze(En,n),In===null&&(In=t)),te&&Us(t,i.treeForkCount),e}return Oe(t),null;case 22:case 23:return pi(t),Og(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&Wu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&bn(cr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Os(tn),Oe(t),null;case 25:return null;case 30:return t.flags|=33554432,Oe(t),null}throw Error(Q(156,t.tag))}function $A(e,t){switch(Dg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Os(tn),wo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xh(t),null;case 31:if(t.memoizedState!==null){if(pi(t),t.alternate===null)throw Error(Q(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return wo(),null;case 10:return Os(t.type),null;case 22:case 23:return pi(t),Og(),e!==null&&bn(cr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Os(tn),null;case 25:return null;default:return null}}function J1(e,t){switch(Dg(t),t.tag){case 3:Os(tn),wo();break;case 26:case 27:case 5:xh(t);break;case 4:wo();break;case 31:t.memoizedState!==null&&pi(t);break;case 13:pi(t);break;case 19:Pg(t);break;case 10:Os(t.type);break;case 22:case 23:pi(t),Og(),e!==null&&bn(cr);break;case 24:Os(tn)}}function Oc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){Ee(t,t.return,o)}}function Oa(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){Ee(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){Ee(t,t.return,h)}}function Q1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{o1(t,n)}catch(i){Ee(e,e.return,i)}}}function j1(e,t,n){n.props=_r(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ee(e,t,i)}}function fs(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=zs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=GS(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new Mi(e);si(e.child,!1,Vw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ee(e,t,o)}}function xn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Ee(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ee(e,t,s)}else n.current=null}function Oh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)qS(e.stateNode,t[n])}function Ty(e){for(var t=e.return;t!==null&&($g(t)&&qS(e.stateNode,t.stateNode),!jg(t));)t=t.return}function oc(e){for(var t=e.return;t!==null&&($g(t)&&Gw(e.stateNode,t.stateNode),!jg(t));)t=t.return}function jg(e){return e.tag===5||e.tag===3||e.tag===27}function $g(e){return e&&e.tag===7&&e.stateNode!==null}function Gm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Ee(e,e.return,s)}}function Zp(e,t,n){try{var i=e.stateNode;bw(i,e.type,n,t),i[ai]=t}catch(s){Ee(e,e.return,s)}}function $1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function Kp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function km(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ms)),Oh(e,i),de=!0;else if(s!==4&&(s===27&&(Oh(e,i),i=null,Ba(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(km(e,t,n,i),e=e.sibling;e!==null;)km(e,t,n,i),e=e.sibling}function Ph(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Oh(e,i),de=!0;else if(s!==4&&(s===27&&(Oh(e,i),i=null,Ba(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ph(e,t,n,i),e=e.sibling;e!==null;)Ph(e,t,n,i),e=e.sibling}function tS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Tn(t,i,n),t[Sn]=e,t[ai]=n}catch(a){Ee(e,e.return,a)}}var zh=!1,mi=null;function Ay(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(zh=!0)}var ds=null;function wy(){var e=ds;return ds=null,e}var ei=0;function ko(e,t,n,i,s){return ei=0,eS(e.child,t,n,i,s)}function eS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=cg(r);i.push(o),o.view&&(a=!0)}else a||cg(r).view&&(a=!0);zh=!0,FS(r,ei===0?t:t+"_"+ei,n),ei++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||eS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function xs(e,t){for(;e!==null;)e.tag===5?HS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||xs(e.child,t)),e=e.sibling}function ch(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ch(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Q(544));var n=t.name;t=ks(t.default,t.share),t!=="none"&&(ko(e,n,t,null,!1)||xs(e.child,!1))}e=e.sibling}}function Xm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=zs(i,n),a=ks(i.default,n.paired?i.share:i.enter);a!=="none"?ko(e,s,a,null,!1)?(ch(e),n.paired||t||Uo(e,i.onEnter)):xs(e.child,!1):ch(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Xm(e,t),e=e.sibling;else ch(e)}function Wm(e){if(mi!==null&&mi.size!==0){var t=mi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=ks(n.default,n.share);if(a!=="none"&&(ko(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Uo(e,n.onShare)):xs(e.child,!1)),t.delete(i),t.size===0)break}}}Wm(e)}e=e.sibling}}}function qm(e){if(e.tag===30){var t=e.memoizedProps,n=zs(t,e.stateNode),i=mi!==null?mi.get(n):void 0,s=ks(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(ko(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,mi.delete(n),Uo(e,t.onShare)):Uo(e,t.onExit):xs(e.child,!1)),mi!==null&&Wm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qm(e),e=e.sibling;else mi!==null&&Wm(e)}function nS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=zs(t,e.stateNode);t=ks(t.default,t.update),e.flags&=-5,t!=="none"&&ko(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&nS(e);e=e.sibling}}function Ym(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,xs(e.child,!1))}Ym(e)}e=e.sibling}}function uh(e){if(e.tag===30)e.stateNode.paired=null,xs(e.child,!1),Ym(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)uh(e),e=e.sibling;else Ym(e)}function iS(e){for(e=e.child;e!==null;)e.tag===30?xs(e.child,!1):(e.subtreeFlags&33554432)!==0&&iS(e),e=e.sibling}function t0(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&ei<a.length){var c=a[ei],h=cg(l);(c.view||h.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(h.clip)d=!0;else{d=c.rect;var f=h.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}d&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&FS(l,ei===0?n:n+"_"+ei,s),o&&(e.flags&4)!==0||(ds===null&&(ds=[]),ds.push(l,ei===0?i:i+"_"+ei,t.memoizedProps)),ei++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:t0(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function sS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=zs(n,i),a=ks(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(Cw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;ei=0,s=t0(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Uo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&sS(e,t);e=e.sibling}}var fn=!1,ye=!1,cs=!1,Jp=!1,Ry=typeof WeakSet=="function"?WeakSet:Set,dn=null,us=!1,Ql=!1,Bh=!1,Zm=!1;function tw(e,t,n){if(e=e.containerInfo,rg=Bo,e=kx(e),Ag(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,d=0,f=e,p=null;e:for(;;){for(var g;f!==i||a!==0&&f.nodeType!==3||(l=o+a),f!==r||s!==0&&f.nodeType!==3||(c=o+s),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break e;if(p===i&&++h===a&&(l=o),p===r&&++d===s&&(c=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(og={focusedElem:e,selectionRange:i},Bo=!1,n=(n&335544064)===n,dn=t,t=n?9270:1024;dn!==null;){if(e=dn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&qm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Ay(e),qu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&qm(i),qu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Ay(e),qu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,dn=i):(n&&nS(e),qu(n))}}mi=null}function qu(e){for(;dn!==null;){var t=dn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=_r(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){Ee(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)ug(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":ug(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=zs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=ks(s.default,s.update),s!=="none"&&ko(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Q(163))}if(i=t.sibling,i!==null){i.return=t.return,dn=i;break}dn=t.return}}function aS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:hs(e,n),i&4&&Oc(5,n);break;case 1:if(hs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ee(n,n.return,r)}else{var s=_r(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ee(n,n.return,r)}}i&64&&Q1(n),i&512&&fs(n,n.return);break;case 3:if(hs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{o1(e,t)}catch(r){Ee(n,n.return,r)}}break;case 27:t===null&&i&4&&tS(n);case 26:case 5:hs(e,n),t===null&&i&4&&Gm(n),i&512&&fs(n,n.return);break;case 12:hs(e,n);break;case 31:hs(e,n),i&4&&cS(e,n);break;case 13:hs(e,n),i&4&&uS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=fw.bind(null,n),Ww(e,n))));break;case 22:if(i=n.memoizedState!==null||fn,!i){var a=t!==null&&t.memoizedState!==null||ye;t=fn,s=ye,fn=i,(ye=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),qi(e,n,i)):hs(e,n),fn=t,ye=s}break;case 30:hs(e,n),i&512&&fs(n,n.return);break;case 7:i&512&&fs(n,n.return);default:hs(e,n)}}function Km(e,t){for(e=e.child;e!==null;)rS(e,t),e=e.sibling}function rS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Ee(e,e.return,l)}Jm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,de=!0}catch(l){Ee(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Xy(o,!0):Xy(e.stateNode,!1)}catch(l){Ee(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Km(e,t);break;default:Km(e,t)}}function Jm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:rS(n,i);break t;case 22:n.memoizedState===null&&Jm(n,i);break t;default:Jm(n,i)}}e=e.sibling}}function oS(e){var t=e.alternate;t!==null&&(e.alternate=null,oS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,$n=!1;function Wi(e,t,n){for(n=n.child;n!==null;)lS(e,t,n),n=n.sibling}function lS(e,t,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(Rc,n)}catch{}switch(n.tag){case 26:ye||xn(n,t),Wi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ye&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ye||xn(n,t),oc(n);var i=ke,s=$n;Ba(n.type)&&(ke=n.stateNode,$n=!1),Wi(e,t,n),KS(n.stateNode,n.type,n.memoizedProps),ke=i,$n=s;break;case 5:ye||xn(n,t),oc(n);case 6:if(n.tag===6&&oc(n),i=ke,s=$n,ke=null,Wi(e,t,n),ke=i,$n=s,ke!==null)if($n)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode),de=!0}catch(a){Ee(n,t,a)}else try{ke.removeChild(n.stateNode),de=!0}catch(a){Ee(n,t,a)}break;case 18:ke!==null&&($n?(e=ke,ky(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fo(e)):ky(ke,n.stateNode));break;case 4:i=ke,s=$n,ke=n.stateNode.containerInfo,$n=!0,Wi(e,t,n),ke=i,$n=s;break;case 0:case 11:case 14:case 15:Oa(2,n,t),ye||Oa(4,n,t),Wi(e,t,n);break;case 1:ye||(xn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&j1(n,t,i)),Wi(e,t,n);break;case 21:Wi(e,t,n);break;case 22:ye=(i=ye)||n.memoizedState!==null,Wi(e,t,n),ye=i;break;case 30:xn(n,t),Wi(e,t,n);break;case 7:ye||xn(n,t),Wi(e,t,n);break;default:Wi(e,t,n)}}function cS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fo(e)}catch(n){Ee(t,t.return,n)}}}function uS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fo(e)}catch(n){Ee(t,t.return,n)}}function ew(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ry),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ry),t;default:throw Error(Q(435,e.tag))}}function Yu(e,t){var n=ew(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=dw.bind(null,e,i);i.then(s,s)}})}function Wn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ba(l.type)){ke=l.stateNode,$n=!1;break t}break;case 5:ke=l.stateNode,$n=!1;break t;case 3:case 4:ke=l.stateNode.containerInfo,$n=!0;break t}l=l.return}if(ke===null)throw Error(Q(160));lS(r,o,a),ke=null,$n=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hS(t,e,n),t=t.sibling}var Yi=null;function hS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Wn(t,e,n),qn(e),s&4&&(Oa(3,e,e.return),Oc(3,e),Oa(5,e,e.return));break;case 1:Wn(t,e,n),qn(e),s&512&&(ye||i===null||xn(i,i.return)),s&64&&fn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Yi,Wn(t,e,n),qn(e),s&512&&(ye||i===null||xn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(fn)e.stateNode=BS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Nc]||i[Sn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),Tn(i,t,n),i[Sn]=e,pn(i),t=i;break t;case"link":if(a=jy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),Tn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=jy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),Tn(i,t,n),s.head.appendChild(i);break;default:throw Error(Q(468,t))}i[Sn]=e,pn(i),t=i}e.stateNode=t}else fn||dg(a,e.type,e.stateNode);else e.stateNode=Qy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||ye||t.parentNode.removeChild(t)):s.count--,n===null?fn||dg(a,e.type,e.stateNode):Qy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Zp(e,e.memoizedProps,i.memoizedProps);break;case 27:Wn(t,e,n),qn(e),s&512&&(ye||i===null||xn(i,i.return)),i!==null&&s&4&&Zp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=cs,cs=!1,Wn(t,e,n),cs=a,qn(e),s&512&&(ye||i===null||xn(i,i.return)),e.flags&32){t=e.stateNode;try{Co(t,""),de=!0}catch(h){Ee(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Zp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Jp=!0);break;case 6:if(Wn(t,e,n),qn(e),s&4){if(e.stateNode===null)throw Error(Q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,de=!0}catch(h){Ee(e,e.return,h)}}break;case 3:if(de=!1,ph=null,a=Yi,Yi=bc(t.containerInfo),Wn(t,e,n),Yi=a,qn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Fo(t.containerInfo)}catch(h){Ee(e,e.return,h)}Jp&&(Jp=!1,fS(e)),de=!1;break;case 4:s=cs,cs=fn,i=I_(),a=Yi,Yi=bc(e.stateNode.containerInfo),Wn(t,e,n),qn(e),Yi=a,de&&Ql&&(Bh=!0),de=i,cs=s;break;case 12:Wn(t,e,n),qn(e);break;case 31:Wn(t,e,n),qn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Yu(e,t)));break;case 13:Wn(t,e,n),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(lf=vi()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Yu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=fn,l=ye,c=cs;fn=o||a,cs=c||a,ye=l||r,Wn(t,e,n),ye=l,cs=c,fn=o,qn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||fn||ye||(t=r||ye,n=fn,i=ye,fn=a||fn,ye=t,fa(e,2),fn=n,ye=i),!a&&cs||Km(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Yu(e,n))));break;case 19:Wn(t,e,n),qn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Yu(e,t)));break;case 30:s&512&&(ye||i===null||xn(i,i.return)),s=I_(),a=Ql,r=(n&335544064)===n,o=e.memoizedProps,Ql=r&&ks(o.default,o.update)!=="none",Wn(t,e,n),qn(e),r&&i!==null&&de&&(e.flags|=4),Ql=a,de=s;break;case 21:break;case 7:s&512&&(ye||i===null||xn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Wn(t,e,n),qn(e)}}function qn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if($1(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if($g(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(jg(s))break;s=s.return}var r=i;if(n==null)throw Error(Q(160));switch(n.tag){case 27:var o=n.stateNode,l=Kp(e);Ph(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Co(c,""),n.flags&=-33);var h=Kp(e);Ph(e,h,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,f=Kp(e);km(e,f,d,r);break;default:throw Error(Q(161))}}catch(p){Ee(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Bo=!0,t.reset(),Bo=!1),e=e.sibling}}function to(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)dS(t,e),t=t.sibling;else sS(t,!1)}function dS(e,t){var n=e.alternate;if(n===null)Xm(e,!1);else switch(e.tag){case 3:if(Zm=us=!1,wy(),to(t,e),!us&&!Bh){if(e=ds,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];HS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Zm=!0}ds=null;break;case 5:to(t,e);break;case 4:i=us,us=!1,to(t,e),us&&(Bh=!0),us=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Xm(e,!1):to(t,e));break;case 30:i=us,s=wy(),us=!1,to(t,e),us&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=zs(a,r),r=zs(n.memoizedProps,r);var o=ks(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ei=0,t=t0(e,n,t,r,o,a,!0),ei!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Uo(e,e.memoizedProps.onUpdate),ds=s):s!==null&&(s.push.apply(s,ds),ds=s),us=(e.flags&32)!==0?!0:i;break;default:to(t,e)}}function hs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)aS(e,t.alternate,t),t=t.sibling}function fa(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),fa(n,i);break;case 1:xn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&j1(n,n.return,s),fa(n,i);break;case 27:(i&2)!==0&&KS(n.stateNode,n.type,n.memoizedProps);case 5:xn(n,n.return),n.tag!==5&&n.tag!==27||oc(n),fa(n,i);break;case 6:oc(n);break;case 26:xn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||ye||s.parentNode.removeChild(s),fa(n,i);break;case 22:n.memoizedState===null&&fa(n,i);break;case 30:xn(n,n.return),fa(n,i);break;case 7:xn(n,n.return);default:fa(n,i)}e=e.sibling}}function qi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:qi(s,a,n),Oc(4,a);break;case 1:if(qi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){Ee(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)r1(c[s],l)}catch(h){Ee(i,i.return,h)}}o&&r&64&&Q1(a),fs(a,a.return);break;case 27:(n&2)!==0&&tS(a);case 5:a.tag!==5&&a.tag!==27||Ty(a),qi(s,a,n),o&&i===null&&r&4&&Gm(a),fs(a,a.return);break;case 6:Ty(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||fn||dg(bc(l.ownerDocument),a.type,l),qi(s,a,n),o&&i===null&&r&4&&Gm(a),fs(a,a.return);break;case 12:qi(s,a,n);break;case 31:qi(s,a,n),o&&r&4&&cS(s,a);break;case 13:qi(s,a,n),o&&r&4&&uS(s,a);break;case 22:a.memoizedState===null&&qi(s,a,n),fs(a,a.return);break;case 30:qi(s,a,n),fs(a,a.return);break;case 7:fs(a,a.return);default:qi(s,a,n)}t=t.sibling}}function e0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Lc(n))}function n0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lc(e))}function Di(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)pS(e,t,n,i),t=t.sibling;else s&&iS(t)}function pS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&uh(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Di(e,t,n,i),a&2048&&Oc(9,t);break;case 1:Di(e,t,n,i);break;case 3:Di(e,t,n,i),s&&Zm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Lc(a)));break;case 12:if(a&2048){Di(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){Ee(t,t.return,c)}}else Di(e,t,n,i);break;case 31:Di(e,t,n,i);break;case 13:Di(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&uh(o),r._visibility&2?Di(e,t,n,i):lc(e,t)):(s&&o!==null&&o.memoizedState!==null&&uh(t),r._visibility&2?Di(e,t,n,i):(r._visibility|=2,no(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&e0(o,t);break;case 24:Di(e,t,n,i),a&2048&&n0(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(xs(a.child,!0),xs(t.child,!0))),Di(e,t,n,i);break;default:Di(e,t,n,i)}}function no(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:no(a,r,o,l,s),Oc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?no(a,r,o,l,s):lc(a,r):(h._visibility|=2,no(a,r,o,l,s)),s&&c&2048&&e0(r.alternate,r);break;case 24:no(a,r,o,l,s),s&&c&2048&&n0(r.alternate,r);break;default:no(a,r,o,l,s)}t=t.sibling}}function lc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:lc(n,i),s&2048&&e0(i.alternate,i);break;case 24:lc(n,i),s&2048&&n0(i.alternate,i);break;default:lc(n,i)}t=t.sibling}}var sr=8192;function er(e,t,n){if(e.subtreeFlags&sr)for(e=e.child;e!==null;)mS(e,t,n),e=e.sibling}function mS(e,t,n){switch(e.tag){case 26:er(e,t,n),e.flags&sr&&(e.memoizedState!==null?a2(n,Yi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&tx(n,e)));break;case 5:er(e,t,n),e.flags&sr&&(e=e.stateNode,(t&335544128)===t&&tx(n,e));break;case 3:case 4:var i=Yi;Yi=bc(e.stateNode.containerInfo),er(e,t,n),Yi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=sr,sr=16777216,er(e,t,n),sr=i):er(e,t,n));break;case 30:if((e.flags&sr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,mi===null&&(mi=new Map),mi.set(i,s)}er(e,t,n);break;default:er(e,t,n)}}function gS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,_S(i,e)}gS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vS(e),e=e.sibling}function vS(e){switch(e.tag){case 0:case 11:case 15:Xl(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Xl(e);break;case 12:Xl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hh(e)):Xl(e);break;default:Xl(e)}}function hh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,_S(i,e)}gS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Oa(8,t,t.return),hh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,hh(t));break;default:hh(t)}e=e.sibling}}function _S(e,t){for(;dn!==null;){var n=dn;switch(n.tag){case 0:case 11:case 15:Oa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Lc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,dn=i;else t:for(n=e;dn!==null;){i=dn;var s=i.sibling,a=i.return;if(oS(i),i===n){dn=null;break t}if(s!==null){s.return=a,dn=s;break t}dn=a}}}var nw={getCacheForType:function(e){var t=Mn(tn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Mn(tn).controller.signal}},iw=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ne=null,ie=null,re=0,Me=0,fi=null,ya=!1,Xo=!1,i0=!1,Vs=0,Je=0,Pa=0,hr=0,Fh=0,gi=0,No=0,cc=null,ti=null,Qm=!1,lf=0,yS=0,Hh=1/0,Vh=null,Ra=null,qe=0,Ki=null,yr=null,ys=0,jm=0,$m=null,xS=null,Eo=null,To=null,Ao=null,uc=0,fh=null;function xi(){return(pe&2)!==0&&re!==0?re&-re:Xt.T!==null?a0():Ex()}function SS(){if(gi===0)if((re&536870912)===0||te){var e=Iu;Iu<<=1,(Iu&3932160)===0&&(Iu=262144),gi=e}else gi=536870912;return e=An.current,e!==null&&(e.flags|=32),gi}function Uo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=GS(zs(e.memoizedProps,n))),To===null&&(To=[]),To.push(t.bind(null,i))}}function ii(e,t,n){(e===Ne&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(Lo(e,0),xa(e,re,gi,!1)),Dc(e,n),((pe&2)===0||e!==Ne)&&(e===Ne&&((pe&2)===0&&(hr|=n),Je===4&&xa(e,re,gi,!1)),Ms(e))}function MS(e,t,n){if((pe&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Cc(e,t),s=i?rw(e,t):Qp(e,t,!0),a=i;do{if(s===0){Xo&&!i&&xa(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!sw(n)){s=Qp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=cc;var l=o.current.memoizedState.isDehydrated;if(l&&(Lo(o,r).flags|=256),r=Qp(o,r,!1),r!==2&&r!==6){if(i0&&!l){o.errorRecoveryDisabledLanes|=a,hr|=a,s=4;break t}a=ti,ti=s,a!==null&&(ti===null?ti=a:ti.push.apply(ti,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Lo(e,0),xa(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:xa(i,t,gi,!ya);break t;case 2:ti=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=lf+300-vi(),10<s)){if(xa(i,t,gi,!ya),Yh(i,0,!0)!==0)break t;ys=t,i.timeoutHandle=o0(Cy.bind(null,i,n,ti,Vh,Qm,t,gi,hr,No,ya,a,"Throttled",-0,0),s);break t}Cy(i,n,ti,Vh,Qm,t,gi,hr,No,ya,a,null,-0,0)}}break}while(!0);Ms(e)}function Cy(e,t,n,i,s,a,r,o,l,c,h,d,f,p){e.timeoutHandle=-1;var g=t.subtreeFlags,S=(a&335544064)===a;if(d=null,(S||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ms},mi=null,mS(t,a,d),S&&(g=d,S=e.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(g.count++,g.waitingForViewTransition=!0,g=Ec.bind(g),S.finished.then(g,g))),g=(a&62914560)===a?lf-vi():(a&4194048)===a?yS-vi():0,g=r2(d,g),g!==null)){ys=a,e.cancelPendingCommit=g(Ny.bind(null,e,t,a,n,i,s,r,o,l,c,h,d,null,f,p)),xa(e,a,r,!c);return}Ny(e,t,a,n,i,s,r,o,l,c,h,d)}function sw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Si(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xa(e,t,n,i){t=yx(e,t),t&=~Fh,t&=~hr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-yi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Sx(e,n,t)}function cf(){return(pe&6)===0?(Pc(0,!1),!1):!0}function s0(){if(ie!==null){if(Me===0)var e=ie.return;else e=ie,Ls=Er=null,Vg(e),So=null,vc=0,e=ie;for(;e!==null;)J1(e.alternate,e),e=e.return;ie=null}}function Lo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Aw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ys=0,s0(),Ne=e,ie=n=Is(e.current,null),re=t,Me=0,fi=null,ya=!1,Xo=Cc(e,t),i0=!1,No=gi=Fh=hr=Pa=Je=0,ti=cc=null,Qm=!1,Vs=yx(e,t),jh(),n}function bS(e,t){Jt=null,Xt.H=Lh,t===Go||t===ef?(t=ny(),Me=3):t===Lg?(t=ny(),Me=4):Me=t===Kg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,fi=t,ie===null&&(Je=1,Ih(e,Oi(t,e.current)))}function ES(){var e=An.current;return e===null?!0:(re&4194048)===re?In===null:(re&62914560)===re||(re&536870912)!==0?e===In:!1}function TS(){var e=Xt.H;return Xt.H=Lh,e===null?Lh:e}function AS(){var e=Xt.A;return Xt.A=nw,e}function Gh(){Je=4,ya||(re&4194048)!==re&&An.current!==null||(Xo=!0),(Pa&134217727)===0&&(hr&134217727)===0||Ne===null||xa(Ne,re,gi,!1)}function Qp(e,t,n){var i=pe;pe|=2;var s=TS(),a=AS();(Ne!==e||re!==t)&&(Vh=null,Lo(e,t)),t=!1;var r=Je;t:do try{if(Me!==0&&ie!==null){var o=ie,l=fi;switch(Me){case 8:s0(),r=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(t=!0);var c=Me;if(Me=0,fi=null,go(e,o,l,c),n&&Xo){r=0;break t}break;default:c=Me,Me=0,fi=null,go(e,o,l,c)}}aw(),r=Je;break}catch(h){bS(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ls=Er=null,pe=i,Xt.H=s,Xt.A=a,ie===null&&(Ne=null,re=0,jh()),r}function aw(){for(;ie!==null;)wS(ie)}function rw(e,t){var n=pe;pe|=2;var i=TS(),s=AS();Ne!==e||re!==t?(Vh=null,Hh=vi()+500,Lo(e,t)):Xo=Cc(e,t);t:do try{if(Me!==0&&ie!==null){t=ie;var a=fi;e:switch(Me){case 1:Me=0,fi=null,go(e,t,a,1);break;case 2:case 9:if(ey(a)){Me=0,fi=null,Dy(t);break}t=function(){Me!==2&&Me!==9||Ne!==e||(Me=7),Ms(e)},a.then(t,t);break t;case 3:Me=7;break t;case 4:Me=5;break t;case 7:ey(a)?(Me=0,fi=null,Dy(t)):(Me=0,fi=null,go(e,t,a,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var o=ie;if(r?jS(r):o.stateNode.complete){Me=0,fi=null;var l=o.sibling;if(l!==null)ie=l;else{var c=o.return;c!==null?(ie=c,uf(c)):ie=null}break e}}Me=0,fi=null,go(e,t,a,5);break;case 6:Me=0,fi=null,go(e,t,a,6);break;case 8:s0(),Je=6;break t;default:throw Error(Q(462))}}ow();break}catch(h){bS(e,h)}while(!0);return Ls=Er=null,Xt.H=i,Xt.A=s,pe=n,ie!==null?0:(Ne=null,re=0,jh(),Je)}function ow(){for(;ie!==null&&!ET();)wS(ie)}function wS(e){var t=K1(e.alternate,e,Vs);e.memoizedProps=e.pendingProps,t===null?uf(e):ie=t}function Dy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_y(n,t,t.pendingProps,t.type,void 0,re);break;case 11:t=_y(n,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Vg(t);var i=t;i===mn&&(te?(Ah(i),i.tag===5&&i.stateNode!=null&&(Pe=i.stateNode)):(Ah(i),te=!0));default:J1(n,t),t=ie=Qx(t,Vs),t=K1(n,t,Vs)}e.memoizedProps=e.pendingProps,t===null?uf(e):ie=t}function go(e,t,n,i){Ls=Er=null,Vg(t),So=null,vc=0;var s=t.return;try{if(ZA(e,s,t,n,re)){Je=1,Ih(e,Oi(n,e.current)),ie=null;return}}catch(a){if(s!==null)throw ie=s,a;Je=1,Ih(e,Oi(n,e.current)),ie=null;return}t.flags&32768?(te||i===1?e=!0:Xo||(re&536870912)!==0?e=!1:(ya=e=!0,(i===2||i===9||i===3||i===6)&&(i=An.current,i!==null&&i.tag===13&&(i.flags|=16384))),RS(t,e)):uf(t)}function uf(e){var t=e;do{if((t.flags&32768)!==0){RS(t,ya);return}e=t.return;var n=jA(t.alternate,t,Vs);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Je===0&&(Je=5)}function RS(e,t){do{var n=$A(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);Je=6,ie=null}function Ny(e,t,n,i,s,a,r,o,l,c,h,d){e.cancelPendingCommit=null;do hf();while(qe!==0);if((pe&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));e===Ne&&(ie=Ne=null,re=0),yr=t,Ki=e,ys=n,$m=s,xS=i,lw(e,t,n,r,o,l,d)}}function lw(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(jm=o,o|=wg,IT(e,n,o,i,s,a),To=null,(n&335544064)===n?(Ao=PA(e),i=10262):(Ao=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,pw(Sh,function(){return ig(),null})):(e.callbackNode=null,e.callbackPriority=0),zh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Xt.T,Xt.T=null,s=me.p,me.p=2,a=pe,pe|=4;try{tw(e,t,n)}finally{pe=a,me.p=s,Xt.T=i}}qe=1,zh?Eo=Uw(r,e.containerInfo,Ao,tg,eg,uw,ng,ig,cw,null,null):(tg(),eg(),ng())}function cw(e){if(qe!==0){var t=Ki.onRecoverableError;t(e,{componentStack:null})}}function uw(){qe===3&&(qe=0,dS(yr,Ki),qe=4)}function tg(){if(qe===1){qe=0;var e=Ki,t=yr,n=ys,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Xt.T,Xt.T=null;var s=me.p;me.p=2;var a=pe;pe|=4;try{Ql=Bh=!1,hS(t,e,n),n=og;var r=kx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Gx(o.ownerDocument.documentElement,o)){if(l!==null&&Ag(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),g=o.textContent.length,S=Math.min(l.start,g),m=l.end===void 0?S:Math.min(l.end,g);!p.extend&&S>m&&(r=m,m=S,S=r);var u=Y_(o,S),v=Y_(o,m);if(u&&v&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),S>m?(p.addRange(_),p.extend(v.node,v.offset)):(_.setEnd(v.node,v.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Bo=!!rg,og=rg=null}finally{pe=a,me.p=s,Xt.T=i}}e.current=t,qe=2}}function eg(){if(qe===2){qe=0;var e=Ki,t=yr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Xt.T,Xt.T=null;var i=me.p;me.p=2;var s=pe;pe|=4;try{aS(e,t.alternate,t)}finally{pe=s,me.p=i,Xt.T=n}}qe=3}}function ng(){if(qe===4||qe===3){qe=0;var e=Eo;Eo=null,TT();var t=Ki,n=yr,i=ys,s=xS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?qe=5:(qe=0,yr=Ki=null,CS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Ra=null),xg(i),n=n.stateNode,_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(Rc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Xt.T,a=me.p,me.p=2,Xt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Xt.T=n,me.p=a}}if(s=To,r=Ao,Ao=null,s!==null&&(To=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(ys&3)!==0&&hf(),Ms(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===fh?uc++:(uc=0,fh=t):(uc=0,fh=null),Pc(0,!1)}}function CS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lc(t)))}function hf(){return Eo!==null&&(Eo.skipTransition(),Eo=null),tg(),eg(),ng(),ig()}function ig(){if(qe!==5)return!1;var e=Ki,t=jm;jm=0;var n=xg(ys),i=Xt.T,s=me.p;try{me.p=32>n?32:n,Xt.T=null,n=$m,$m=null;var a=Ki,r=ys;if(qe=0,yr=Ki=null,ys=0,(pe&6)!==0)throw Error(Q(331));var o=pe;if(pe|=4,vS(a.current),pS(a,a.current,r,n),pe=o,Pc(0,!1),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(Rc,a)}catch{}return!0}finally{me.p=s,Xt.T=i,CS(e,t)}}function Uy(e,t,n){t=Oi(n,t),t=Pm(e.stateNode,t,2),e=Ta(e,t,2),e!==null&&(Dc(e,2),Ms(e))}function Ee(e,t,n){if(e.tag===3)Uy(e,e,n);else for(;t!==null;){if(t.tag===3){Uy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))){e=Oi(n,e),n=X1(2),i=Ta(t,n,2),i!==null&&(W1(n,i,t,e),Dc(i,2),Ms(i));break}}t=t.return}}function jp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new iw;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(i0=!0,s.add(n),e=hw.bind(null,e,t,n),t.then(e,e))}function hw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ne===e&&(re&n)===n&&((Je===4||Je===3&&(re&62914560)===re&&300>vi()-lf)&&(pe&2)===0?Lo(e,0):Fh|=n,No===re&&(No=0)),Ms(e)}function DS(e,t){t===0&&(t=xx()),e=br(e,t),e!==null&&(Dc(e,t),Ms(e))}function fw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),DS(e,n)}function dw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),DS(e,n)}function pw(e,t){return _g(e,t)}var Io=null,io=null,sg=!1,kh=!1,$p=!1,Sa=0;function Ms(e){e!==io&&e.next===null&&(io===null?Io=io=e:io=io.next=e),kh=!0,sg||(sg=!0,gw())}function Pc(e,t){if(!$p&&kh){$p=!0;do for(var n=!1,i=Io;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-yi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Ly(i,a))}else a=re,a=Yh(i,i===Ne?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Cc(i,a)||(n=!0,Ly(i,a));i=i.next}while(n);$p=!1}}function mw(){NS()}function NS(){kh=sg=!1;var e=0;Sa!==0&&Tw()&&(e=Sa);for(var t=vi(),n=null,i=Io;i!==null;){var s=i.next,a=US(i,t);a===0?(i.next=null,n===null?Io=s:n.next=s,s===null&&(io=n)):(n=i,(e!==0||(a&3)!==0)&&(kh=!0)),i=s}qe!==0&&qe!==5||Pc(e,!1),Sa!==0&&(Sa=0)}function US(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-yi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=LT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ne,n=re,n=Yh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Np(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Cc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Np(i),xg(n)){case 2:case 8:n=vx;break;case 32:n=Sh;break;case 268435456:n=_x;break;default:n=Sh}return i=LS.bind(null,e),n=_g(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Np(i),e.callbackPriority=2,e.callbackNode=null,2}function LS(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(hf()&&e.callbackNode!==n)return null;var i=re;return i=Yh(e,e===Ne?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(MS(e,i,t),US(e,vi()),e.callbackNode!=null&&e.callbackNode===n?LS.bind(null,e):null)}function Ly(e,t){if(hf())return null;MS(e,t,!0)}function gw(){ww(function(){(pe&6)!==0?_g(gx,mw):NS()})}function a0(){if(Sa===0){var e=mr;e===0&&(e=Lu,Lu<<=1,(Lu&261888)===0&&(Lu=256)),Sa=e}return Sa}function Iy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:th(e)}function vw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Iy((s[ai]||null).action),r=i.submitter;r&&(t=(t=r[ai]||null)?Iy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Kh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Sa!==0){var l=new FormData(s,r);Im(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Im(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Zu=0;Zu<bm.length;Zu++)Ku=bm[Zu],Oy=Ku.toLowerCase(),Py=Ku[0].toUpperCase()+Ku.slice(1),Ji(Oy,"on"+Py);var Ku,Oy,Py,Zu;Ji(Wx,"onAnimationEnd");Ji(qx,"onAnimationIteration");Ji(Yx,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(RA,"onTransitionRun");Ji(CA,"onTransitionStart");Ji(DA,"onTransitionCancel");Ji(Zx,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_w=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xc));function IS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){bh(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){bh(h)}s.currentTarget=null,a=l}}}}function ne(e,t){var n=t[D_];n===void 0&&(n=t[D_]=new Set);var i=e+"__bubble";n.has(i)||(OS(t,e,2,!1),n.add(i))}function tm(e,t,n){var i=0;t&&(i|=4),OS(n,e,i,t)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function r0(e){if(!e[Ju]){e[Ju]=!0,Ax.forEach(function(n){n!=="selectionchange"&&(_w.has(n)||tm(n,!1,e),tm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ju]||(t[Ju]=!0,tm("selectionchange",!1,t))}}function OS(e,t,n,i){switch(aM(t)){case 2:var s=u2;break;case 8:s=h2;break;default:s=d0}n=s.bind(null,t,n,e),s=void 0,!ym||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function em(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=ar(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Ix(function(){var c=a,h=Mg(n),d=[];t:{var f=Kx.get(e);if(f!==void 0){var p=Kh,g=e;switch(e){case"keypress":if(nh(n)===0)break t;case"keydown":case"keyup":p=sA;break;case"focusin":g="focus",p=zp;break;case"focusout":g="blur",p=zp;break;case"beforeblur":case"afterblur":p=zp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=B_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cA;break;case Wx:case qx:case Yx:p=KT;break;case Zx:p=hA;break;case"scroll":case"scrollend":p=XT;break;case"wheel":p=dA;break;case"copy":case"cut":case"paste":p=QT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=H_;break;case"submit":p=oA;break;case"toggle":case"beforetoggle":p=mA}var S=(t&4)!==0,m=!S&&(e==="scroll"||e==="scrollend"),u=S?f!==null?f+"Capture":null:f;S=[];for(var v=c,_;v!==null;){var y=v;if(_=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||_===null||u===null||(y=fc(v,u),y!=null&&S.push(Sc(v,y,_))),m)break;v=v.return}0<S.length&&(f=new p(f,g,null,n,h),d.push({event:f,listeners:S}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==_m&&(g=n.relatedTarget||n.fromElement)&&(ar(g)||g[Ho]))break t;(f||p)&&(g=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=c,p=p?ar(p):null,p!==null&&(m=wc(p),S=p.tag,p!==m||S!==5&&S!==27&&S!==6)&&(p=null)):(f=null,p=c),f!==p&&(S=B_,y="onMouseLeave",u="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(S=H_,y="onPointerLeave",u="onPointerEnter",v="pointer"),m=f==null?g:Kl(f),_=p==null?g:Kl(p),g=new S(y,v+"leave",f,n,h),g.target=m,g.relatedTarget=_,y=null,ar(h)===c&&(S=new S(u,v+"enter",p,n,h),S.target=_,S.relatedTarget=m,y=S),m=y,S=f&&p?rm(f,p,yw):null,f!==null&&zy(d,g,f,S,!1),p!==null&&m!==null&&zy(d,m,p,S,!0)))}t:{if(f=c?Kl(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=X_;else if(k_(f))if(Hx)A=TA;else{A=bA;var w=MA}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Sg(c.elementType)&&(A=X_):A=EA;if(A&&(A=A(e,c))){Fx(d,A,n,h);break t}w&&w(e,f,c)}switch(w=c?Kl(c):window,e){case"focusin":(k_(w)||w.contentEditable==="true")&&(co=w,Sm=c,tc=null);break;case"focusout":tc=Sm=co=null;break;case"mousedown":Mm=!0;break;case"contextmenu":case"mouseup":case"dragend":Mm=!1,Z_(d,n,h);break;case"selectionchange":if(wA)break;case"keydown":case"keyup":Z_(d,n,h)}var C;if(Tg)t:{switch(e){case"compositionstart":var N="onCompositionStart";break t;case"compositionend":N="onCompositionEnd";break t;case"compositionupdate":N="onCompositionUpdate";break t}N=void 0}else lo?zx(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Px&&n.locale!=="ko"&&(lo||N!=="onCompositionStart"?N==="onCompositionEnd"&&lo&&(C=Ox()):(va=h,bg="value"in va?va.value:va.textContent,lo=!0)),w=Xh(c,N),0<w.length&&(N=new F_(N,e,null,n,h),d.push({event:N,listeners:w}),C?N.data=C:(C=Bx(n),C!==null&&(N.data=C)))),(C=vA?_A(e,n):yA(e,n))&&(N=Xh(c,"onBeforeInput"),0<N.length&&(w=new F_("onBeforeInput","beforeinput",null,n,h),d.push({event:w,listeners:N}),w.data=C)),vw(d,e,c,n,h)}IS(d,t)})}function Sc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=fc(e,n),s!=null&&i.unshift(Sc(e,s,a)),s=fc(e,t),s!=null&&i.push(Sc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function yw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=fc(n,a),c!=null&&r.unshift(Sc(n,c,l))):s||(c=fc(n,a),c!=null&&r.push(Sc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var xw=/\r\n?/g,Sw=/\u0000|\uFFFD/g;function By(e){return(typeof e=="string"?e:""+e).replace(xw,`
`).replace(Sw,"")}function PS(e,t){return t=By(t),By(e)===t}function be(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Co(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Co(e,""+i);else return;break;case"className":Pu(e,"class",i);break;case"tabIndex":Pu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Pu(e,n,i);break;case"style":Lx(e,i,a);return;case"data":if(t!=="object"){Pu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=th(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",s.name,s,null),be(e,t,"formEncType",s.formEncType,s,null),be(e,t,"formMethod",s.formMethod,s,null),be(e,t,"formTarget",s.formTarget,s,null)):(be(e,t,"encType",s.encType,s,null),be(e,t,"method",s.method,s,null),be(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=th(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ms);return;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=th(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),$u(e,"popover",i);break;case"xlinkActuate":Ds(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ds(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ds(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ds(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ds(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ds(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ds(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ds(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ds(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":$u(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=GT.get(n)||n,$u(e,n,i);else return}de=!0}function ag(e,t,n,i,s,a){switch(n){case"style":Lx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Co(e,i);else if(typeof i=="number"||typeof i=="bigint")Co(e,""+i);else return;break;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ms);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!wx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[ai]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}de=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):$u(e,n,i)}return}de=!0}function Tn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:be(e,t,a,r,n,null)}}s&&be(e,t,"srcSet",n.srcSet,n,null),i&&be(e,t,"src",n.src,n,null);return;case"input":ne("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Q(137,t));break;default:be(e,t,i,h,n,null)}}Dx(e,a,o,l,c,r,s,!1);return;case"select":ne("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:be(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?_o(e,!!i,t,!1):n!=null&&_o(e,!!i,n,!0);return;case"textarea":ne("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:be(e,t,r,o,n,null)}Ux(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:be(e,t,l,i,n,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<xc.length;i++)ne(xc[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:be(e,t,c,i,n,null)}return;default:if(Sg(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&ag(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&be(e,t,o,i,n,null))}var Mw={};function bw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||be(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":p!==d&&(de=!0),a=p;break;case"name":p!==d&&(de=!0),s=p;break;case"checked":p!==d&&(de=!0),c=p;break;case"defaultChecked":p!==d&&(de=!0),h=p;break;case"value":p!==d&&(de=!0),r=p;break;case"defaultValue":p!==d&&(de=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Q(137,t));break;default:p!==d&&be(e,t,f,p,i,d)}}vm(e,r,o,l,c,h,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||be(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(de=!0),f=a;break;case"defaultValue":a!==l&&(de=!0),o=a;break;case"multiple":a!==l&&(de=!0),r=a;default:a!==l&&be(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?_o(e,!!n,f,!1):!!i!=!!n&&(t!=null?_o(e,!!n,t,!0):_o(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:be(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(de=!0),f=s;break;case"defaultValue":s!==a&&(de=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&be(e,t,r,s,i,a)}Nx(e,f,p);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:be(e,t,g,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":f!==p&&(de=!0),e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:be(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)f=n[S],n.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S)&&be(e,t,S,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Q(137,t));break;default:be(e,t,c,f,i,p)}return;default:if(Sg(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&ag(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||ag(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&be(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||be(e,t,d,f,i,p)}function Fy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ew(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Fy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&Fy(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rg=null,og=null;function Mc(e){return e.nodeType===9?e:e.ownerDocument}function Hy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function BS(e,t,n,i){return n=Mc(n).createElement(e),n[Sn]=i,n[ai]=t,Tn(n,e,t),pn(n),n}function lg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nm=null;function Tw(){var e=window.event;return e&&e.type==="popstate"?e===nm?!1:(nm=e,!0):(nm=null,!1)}var o0=typeof setTimeout=="function"?setTimeout:void 0,Aw=typeof clearTimeout=="function"?clearTimeout:void 0,Vy=typeof Promise=="function"?Promise:void 0,Gy=typeof requestAnimationFrame=="function"?requestAnimationFrame:o0,ww=typeof queueMicrotask=="function"?queueMicrotask:typeof Vy<"u"?function(e){return Vy.resolve(null).then(e).catch(Rw)}:o0;function Rw(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function ky(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Fo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")sm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,sm(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Nc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&sm(e.ownerDocument.body);n=s}while(n);Fo(t)}function Xy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function FS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function HS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function VS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function cg(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return VS(t,n,e)}function Cw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return VS(t,n,e)}function Dw(e){return e.documentElement.clientHeight}function Nw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Uw(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var f=c.defaultView,p=f.navigation&&f.navigation.transition,g=c.fonts.status;i();var S=[];if(g==="loaded"&&(Dw(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),g=S.length,e!==null)for(var m=e.suspenseyImages,u=0,v=0;v<m.length;v++){var _=m[v];if(!_.complete){var y=_.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<f.innerHeight&&y.left<f.innerWidth){if(u+=$S(_),u>mh){S.length=g;break}_=new Promise(Nw.bind(_)),S.push(_)}}}if(0<S.length)return f=Promise.race([Promise.all(S),new Promise(function(A){return setTimeout(A,500)})]).then(s,s),(p?Promise.allSettled([p.finished,f]):f).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var d=[];return h.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),p=0;p<f.length;p++){var g=f[p],S=g.effect,m=S.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=S.getKeyframes();for(var u=m=void 0,v=!0,_=0;_<g.length;_++){var y=g[_],A=y.width;if(m===void 0)m=A;else if(m!==A){v=!1;break}if(A=y.height,u===void 0)u=A;else if(u!==A){v=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}v&&m!==void 0&&u!==void 0&&(S.setKeyframes(g),v=getComputedStyle(S.target,S.pseudoElement),v.width!==m||v.height!==u)&&(v=g[0],v.width=m,v.height=u,v=g[g.length-1],v.width=m,v.height=u,S.setKeyframes(g))}}r()},function(f){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var f=0;f<d.length;f++)d[f].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function rr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}rr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Ue({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};rr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};rr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function GS(e){return{name:e,group:new rr("group",e),imagePair:new rr("image-pair",e),old:new rr("old",e),new:new rr("new",e)}}function Mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Mi.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(kS(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Oo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),si(this._fragmentFiber.child,!1,Lw,e,o,i)}this._eventListeners=a}};function Lw(e,t,n,i){return rn(e).addEventListener(t,n,i),!1}Mi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=kS(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Oo(s.optionsOrUseCapture),si(this._fragmentFiber.child,!1,Iw,e,n,s),i.splice(t,1),a!==null&&a()}};function Iw(e,t,n,i){return rn(e).removeEventListener(t,n,i),!1}function Oo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Wy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function kS(e,t,n,i){if(e.length===0)return-1;i=Wy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Wy(a.optionsOrUseCapture)===i)return s}return-1}Mi.prototype.dispatchEvent=function(e){var t=xr(this._fragmentFiber);if(t===null)return!0;t=rn(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Oo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Oo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};Mi.prototype.focus=function(e){si(this._fragmentFiber.child,!0,XS,e,void 0,void 0)};function XS(e,t){return e.tag===6?!1:(e=rn(e),qw(e,t))}Mi.prototype.focusLast=function(e){var t=[];si(this._fragmentFiber.child,!0,l0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!XS(t[n],e);n--);};function l0(e,t){return t.push(e),!1}Mi.prototype.blur=function(){var e=xr(this._fragmentFiber);e!==null&&(e=rn(e),e=Mc(e).activeElement,e!==null&&si(this._fragmentFiber.child,!1,Ow,e,void 0,void 0))};function Ow(e,t){return e.tag===6?!1:(e=rn(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),si(this._fragmentFiber.child,!1,Pw,e,void 0,void 0)};function Pw(e,t){return e.tag===6||(e=rn(e),t.observe(e)),!1}Mi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),si(this._fragmentFiber.child,!1,zw,e,void 0,void 0);for(var n=t=0;n<Zi.length;n++){var i=Zi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Zi[t++]=i}Zi.length=t}};function zw(e,t){return e.tag===6||(e=rn(e),t.unobserve(e)),!1}var Zi=[],im=!1;function Bw(e,t,n){Zi.push({fragmentInstance:e,observer:t,instance:n}),im||(im=!0,Yw(function(){im=!1;var i=Zi;Zi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}Mi.prototype.getClientRects=function(){var e=[];return si(this._fragmentFiber.child,!1,Fw,e,void 0,void 0),e};function Fw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=rn(e),t.push.apply(t,e.getClientRects());return!1}Mi.prototype.getRootNode=function(e){var t=xr(this._fragmentFiber);return t===null?this:rn(t).getRootNode(e)};Mi.prototype.compareDocumentPosition=function(e){var t=xr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];si(this._fragmentFiber.child,!1,l0,n,void 0,void 0);var i=rn(t);if(n.length===0){if(n=i,E_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=fx(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=rn(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=rn(n[0]),s=rn(n[n.length-1]);var a=E_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Hw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Hw(e,t,n,i,s){var a=ar(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=xr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=rm(n,a,T_),t===null?t=!1:(si(t,!0,gT,a,n),a=so,so=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=rm(i,a,T_),t===null?t=!1:(si(t,!0,vT,a,i),a=so,am=so=null,t=a!==null)),t):!1}function qy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Q(566));var t=[];si(this._fragmentFiber.child,!1,l0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=fx(this._fragmentFiber);if(i=n?i[1]||i[0]||xr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=rn(i),qy(e,n);return}if(i=rn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=rn(s),qy(s,n)):rn(s).scrollIntoView(e),i+=n?-1:1}};function Vw(e,t){return e=rn(e),WS(e,t),!1}function WS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function qS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Oo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Zi.length;o++){var l=Zi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Zi[r++]=l)}Zi.length=r,a.observe(e)}),WS(e,t))}function Gw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Oo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?Bw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function ug(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ug(n),Zh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function kw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Nc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=zi(e.nextSibling),e===null)break}return null}function Xw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zi(e.nextSibling),e===null))return null;return e}function YS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zi(e.nextSibling),e===null))return null;return e}function hg(e){return e.data==="$?"||e.data==="$~"}function c0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ww(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function zi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var fg=null;function Yy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return zi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Zy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function qw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Yw(e){Gy(function(){Gy(function(t){return e(t)})})}function ZS(e,t,n){switch(t=Mc(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function KS(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&be(e,t,i,null,Mw,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ms&&(e.onclick=null),Zh(e)}function sm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zh(e)}var Bi=new Map,Ky=new Set;function bc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Xs=me.d;me.d={f:Zw,r:Kw,D:Jw,C:Qw,L:jw,m:$w,X:e2,S:t2,M:n2};function Zw(){var e=Xs.f(),t=cf();return e||t}function Kw(e){var t=Vo(e);t!==null&&t.tag===5&&t.type==="form"?L1(t):Xs.r(e)}var Wo=typeof document>"u"?null:document;function JS(e,t,n){var i=Wo;if(i&&typeof t=="string"&&t){var s=Ii(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Ky.has(s)||(Ky.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Tn(t,"link",e),pn(t),i.head.appendChild(t)))}}function Jw(e){Xs.D(e),JS("dns-prefetch",e,null)}function Qw(e,t){Xs.C(e,t),JS("preconnect",e,t)}function jw(e,t,n){Xs.L(e,t,n);var i=Wo;if(i&&e&&t){var s='link[rel="preload"][as="'+Ii(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Ii(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Ii(n.imageSizes)+'"]')):s+='[href="'+Ii(e)+'"]';var a=s;switch(t){case"style":a=Po(e);break;case"script":a=qo(e)}if(!(Bi.has(a)||(e=Ue({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Bi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(zc(a))||t==="script"&&i.querySelector(Bc(a))))){var r=i.createElement("link");Tn(r,"link",e),t==="style"&&(r[Mh]=!0,r.onload=r.onerror=function(){Tx(r)}),pn(r),i.head.appendChild(r)}}}function $w(e,t){Xs.m(e,t);var n=Wo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Ii(i)+'"][href="'+Ii(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=qo(e)}if(!Bi.has(a)&&(e=Ue({rel:"modulepreload",href:e},t),Bi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bc(a)))return}i=n.createElement("link"),Tn(i,"link",e),pn(i),n.head.appendChild(i)}}}function t2(e,t,n){Xs.S(e,t,n);var i=Wo;if(i&&e){var s=vo(i).hoistableStyles,a=Po(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(zc(a)))o.loading=5;else{e=Ue({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bi.get(a))&&u0(e,n);var l=r=i.createElement("link");pn(l),Tn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,dh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function e2(e,t){Xs.X(e,t);var n=Wo;if(n&&e){var i=vo(n).hoistableScripts,s=qo(e),a=i.get(s);a||(a=n.querySelector(Bc(s)),a||(e=Ue({src:e,async:!0},t),(t=Bi.get(s))&&h0(e,t),a=n.createElement("script"),pn(a),Tn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function n2(e,t){Xs.M(e,t);var n=Wo;if(n&&e){var i=vo(n).hoistableScripts,s=qo(e),a=i.get(s);a||(a=n.querySelector(Bc(s)),a||(e=Ue({src:e,async:!0,type:"module"},t),(t=Bi.get(s))&&h0(e,t),a=n.createElement("script"),pn(a),Tn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Jy(e,t,n,i){var s=(s=Ma.current)?bc(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Po(n.href),t=vo(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Po(n.href);var a=vo(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(zc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Bi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bi.set(e,a)),i2(s,e,a,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=qo(n),t=vo(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function Po(e){return'href="'+Ii(e)+'"'}function zc(e){return'link[rel="stylesheet"]['+e+"]"}function QS(e){return Ue({},e,{"data-precedence":e.precedence,precedence:null})}function i2(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Mh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Mh]=!0,t.onload=t.onerror=Tx.bind(null,t),Tn(t,"link",n),pn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function qo(e){return'[src="'+Ii(e)+'"]'}function Bc(e){return"script[async]"+e}function Qy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ii(n.href)+'"]');if(i)return t.instance=i,pn(i),i;var s=Ue({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),pn(i),Tn(i,"style",s),dh(i,n.precedence,e),t.instance=i;case"stylesheet":s=Po(n.href);var a=e.querySelector(zc(s));if(a)return t.state.loading|=4,t.instance=a,pn(a),a;i=QS(n),(s=Bi.get(s))&&u0(i,s),a=(e.ownerDocument||e).createElement("link"),pn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Tn(a,"link",i),t.state.loading|=4,dh(a,n.precedence,e),t.instance=a;case"script":return a=qo(n.src),(s=e.querySelector(Bc(a)))?(t.instance=s,pn(s),s):(i=n,(s=Bi.get(a))&&(i=Ue({},n),h0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),pn(s),Tn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,dh(i,n.precedence,e));return t.instance}function dh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function u0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function h0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ph=null;function jy(e,t,n){if(ph===null){var i=new Map,s=ph=new Map;s.set(n,i)}else s=ph,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Nc]||a[Sn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function dg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function s2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $y(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function jS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $S(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function tx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=$S(t),e.suspenseyImages.push(t)),e=o2.bind(e),t.decode().then(e,e))}function a2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Po(i.href),a=t.querySelector(zc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ec.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,pn(a);return}a=t.ownerDocument||t,i=QS(i),(s=Bi.get(s))&&u0(i,s),a=a.createElement("link"),pn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Tn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ec.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var mh=0;function r2(e,t){return e.stylesheets&&e.count===0&&gh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&gh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&mh===0&&(mh=62500*Ew());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>mh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function tM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)gh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Ec(){this.count--,tM(this)}function o2(){this.imgCount--,tM(this)}var Wh=null;function gh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wh=new Map,t.forEach(l2,e),Wh=null,Ec.call(e))}function l2(e,t){if(!(t.state.loading&4)){var n=Wh.get(e);if(n)var i=n.get(null);else{n=new Map,Wh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Ec.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var zo={$$typeof:ps,Provider:null,Consumer:null,_currentValue:or,_currentValue2:or,_threadCount:0};function c2(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Up(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Up(0),this.hiddenUpdates=Up(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function eM(e,t,n,i,s,a,r,o,l,c,h,d){return e=new c2(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=ni(3,null,null,t),e.current=a,a.stateNode=e,t=Ng(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Ig(a),e}function nM(e){return e?(e=fo,e):fo}function iM(e,t,n,i,s,a){s=nM(s),i.context===null?i.context=s:i.pendingContext=s,i=Ea(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ta(e,i,t),n!==null&&(ii(n,e,t),nc(n,e,t))}function ex(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function f0(e,t){ex(e,t),(e=e.alternate)&&ex(e,t)}function sM(e){if(e.tag===13||e.tag===31){var t=br(e,67108864);t!==null&&ii(t,e,67108864),f0(e,67108864)}}function nx(e){if(e.tag===13||e.tag===31){var t=xi();t=yg(t);var n=br(e,t);n!==null&&ii(n,e,t),f0(e,t)}}var Bo=!0;function u2(e,t,n,i){var s=Xt.T;Xt.T=null;var a=me.p;try{me.p=2,d0(e,t,n,i)}finally{me.p=a,Xt.T=s}}function h2(e,t,n,i){var s=Xt.T;Xt.T=null;var a=me.p;try{me.p=8,d0(e,t,n,i)}finally{me.p=a,Xt.T=s}}function d0(e,t,n,i){if(Bo){var s=pg(i);if(s===null)em(e,t,i,qh,n),ix(e,i);else if(d2(s,e,t,n,i))i.stopPropagation();else if(ix(e,i),t&4&&-1<f2.indexOf(e)){for(;s!==null;){var a=Vo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=nr(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-yi(r);o.entanglements[1]|=l,r&=~l}Ms(a),(pe&6)===0&&(Hh=vi()+500,Pc(0,!1))}}break;case 31:case 13:o=br(a,2),o!==null&&ii(o,a,2),cf(),f0(a,2)}if(a=pg(i),a===null&&em(e,t,i,qh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else em(e,t,i,null,n)}}function pg(e){return e=Mg(e),p0(e)}var qh=null;function p0(e){if(qh=null,e=ar(e),e!==null){var t=wc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=cx(t),e!==null)return e;e=null}else if(n===31){if(e=ux(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qh=e,null}function aM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(AT()){case gx:return 2;case vx:return 8;case Sh:case wT:return 32;case _x:return 268435456;default:return 32}default:return 32}}var mg=!1,Ca=null,Da=null,Na=null,Tc=new Map,Ac=new Map,ma=[],f2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ix(e,t){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Tc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ac.delete(t.pointerId)}}function Wl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Vo(t),t!==null&&sM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function d2(e,t,n,i,s){switch(t){case"focusin":return Ca=Wl(Ca,e,t,n,i,s),!0;case"dragenter":return Da=Wl(Da,e,t,n,i,s),!0;case"mouseover":return Na=Wl(Na,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Tc.set(a,Wl(Tc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Ac.set(a,Wl(Ac.get(a)||null,e,t,n,i,s)),!0}return!1}function rM(e){var t=ar(e.target);if(t!==null){var n=wc(t);if(n!==null){if(t=n.tag,t===13){if(t=cx(n),t!==null){e.blockedOn=t,C_(e.priority,function(){nx(n)});return}}else if(t===31){if(t=ux(n),t!==null){e.blockedOn=t,C_(e.priority,function(){nx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);_m=i,n.target.dispatchEvent(i),_m=null}else return t=Vo(n),t!==null&&sM(t),e.blockedOn=n,!1;t.shift()}return!0}function sx(e,t,n){vh(e)&&n.delete(t)}function p2(){mg=!1,Ca!==null&&vh(Ca)&&(Ca=null),Da!==null&&vh(Da)&&(Da=null),Na!==null&&vh(Na)&&(Na=null),Tc.forEach(sx),Ac.forEach(sx)}function Qu(e,t){e.blockedOn===t&&(e.blockedOn=null,mg||(mg=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,p2)))}var ju=null;function ax(e){ju!==e&&(ju=e,on.unstable_scheduleCallback(on.unstable_NormalPriority,function(){ju===e&&(ju=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(p0(i||n)===null)continue;break}var a=Vo(n);a!==null&&(e.splice(t,3),t-=3,Im(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Fo(e){function t(l){return Qu(l,e)}Ca!==null&&Qu(Ca,e),Da!==null&&Qu(Da,e),Na!==null&&Qu(Na,e),Tc.forEach(t),Ac.forEach(t);for(var n=0;n<ma.length;n++){var i=ma[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ma.length&&(n=ma[0],n.blockedOn===null);)rM(n),n.blockedOn===null&&ma.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[ai]||null;if(typeof a=="function")r||ax(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[ai]||null)o=r.formAction;else if(p0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ax(n)}}}function oM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function m0(e){this._internalRoot=e}ff.prototype.render=m0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=xi();iM(n,i,e,t,null,null)};ff.prototype.unmount=m0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;iM(e.current,2,null,e,null,null),cf(),t[Ho]=null}};function ff(e){this._internalRoot=e}ff.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ex();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ma.length&&t!==0&&t<ma[n].priority;n++);ma.splice(n,0,e),n===0&&rM(e)}};var rx=ox.version;if(rx!=="19.3.0")throw Error(Q(527,rx,"19.3.0"));me.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=mT(t),e=e!==null?hx(e):null,e=e===null?null:e.stateNode,e};var m2={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Xt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ql=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ql.isDisabled&&ql.supportsFiber))try{Rc=ql.inject(m2),_i=ql}catch{}var ql;df.createRoot=function(e,t){if(!lx(e))throw Error(Q(299));var n=!1,i="",s=V1,a=G1,r=k1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=eM(e,1,!1,null,null,n,i,null,s,a,r,oM),e[Ho]=t.current,r0(e),new m0(t)};df.hydrateRoot=function(e,t,n){if(!lx(e))throw Error(Q(299));var i=!1,s="",a=V1,r=G1,o=k1,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=eM(e,1,!0,t,n??null,i,s,l,a,r,o,oM),t.context=nM(null),n=t.current,i=xi(),i=yg(i),s=Ea(i),s.callback=null,Ta(n,s,i),n=i,t.current.lanes=n,Dc(t,n),Ms(t),e[Ho]=t.current,r0(e),new ff(t)};df.version="19.3.0"});var hM=os((_U,uM)=>{"use strict";function cM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cM)}catch(e){console.error(e)}}cM(),uM.exports=lM()});var OE=os(hp=>{"use strict";var eU=Symbol.for("react.transitional.element"),nU=Symbol.for("react.fragment");function IE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:eU,type:e,key:i,ref:t!==void 0?t:null,props:n}}hp.Fragment=nU;hp.jsx=IE;hp.jsxs=IE});var kv=os((QO,PE)=>{"use strict";PE.exports=OE()});var Le=Tu(wu(),1),zE=Tu(hM(),1);var g0={x:3,z:-1.8},Fc=[{x:-1.55,z:4.3},{x:-.52,z:4.3},{x:.52,z:4.3},{x:1.55,z:4.3}],Tr=[{x:-1,z:.15},{x:.85,z:.15},{x:-2.35,z:1.75},{x:2.25,z:1.75}],g2=["Why does the moon glow?","Tell me a little story","What makes rain fall?","Explain how bees dance","How do seeds grow?","Describe a perfect afternoon"],v2=["Compare these two ideas","Remember the earlier details","Summarize a long conversation","Connect the clues together"],fM=28,dM=64,v0=4,_2=3,y2=3,x2=3;var pM=e=>46*(e+1),mM=e=>42+e*36,gM=(e,t)=>(e==="speed"?34:42)+t*(e==="speed"?26:32),vM=e=>16/(1+e*.35),S2=e=>.82+e*.055;var M2=()=>Array.from({length:v0},()=>({speed:0,accuracy:0}));function _0(e=Date.now()){return{version:1,tokens:0,capacity:1,context:!1,workflow:0,stationLevels:Array(v0).fill(0),agentLevels:M2(),completed:0,errors:0,earned:0,seed:41729,nextId:1,savedAt:e}}var pf=class{constructor(t=_0()){this.agents=[];this.requests=[];this.time=0;this.paused=!1;this.speed=1;this.nextArrival=Fc.map((t,n)=>1.8+n*3.7);this.lastResult=null;this.progress={...t,stationLevels:[...t.stationLevels],agentLevels:t.agentLevels.map(n=>({...n}))};for(let n=0;n<this.progress.capacity;n++)this.addAgent()}addAgent(){let t=this.agents.length,{x:n,z:i}=Fc[t];this.agents.push({id:t,state:"idle",x:n,z:i,target:{x:n,z:i},route:[],workLeft:0,workTotal:0,visitedContext:!1})}random(){return this.progress.seed=Math.imul(1664525,this.progress.seed)+1013904223>>>0,this.progress.seed/4294967296}spawnRequest(t){let n=this.progress.context&&this.random()<.38?"context":"chat",i=n==="context"?v2:g2,s=i[Math.floor(this.random()*i.length)],a=(n==="context"?14:9)+Math.floor(this.random()*4)+this.progress.workflow;this.requests.unshift({id:this.progress.nextId++,stationId:t,title:s,kind:n,status:"queued",reward:a,progress:0});let r=this.requests.filter(o=>o.status==="complete"||o.status==="failed").slice(0,12);this.requests=[...this.requests.filter(o=>o.status!=="complete"&&o.status!=="failed"),...r]}assign(){for(let t of this.agents){if(t.taskId!==void 0||t.state==="working")continue;let n=this.requests.find(i=>i.status==="queued"&&i.stationId===t.id);n&&(n.status="assigned",n.agentId=t.id,t.taskId=n.id,t.state="walking",t.visitedContext=!1,t.route=[...n.kind==="context"?[{...g0}]:[],{...Tr[t.id]}],t.target=t.route.shift(),t.workTotal=(n.kind==="context"?7.2:5.4+this.random()*1.4)*(1-this.progress.workflow*.1)*(1-this.progress.agentLevels[t.id].speed*.12),t.workLeft=t.workTotal)}}resolve(t){let n=this.requests.find(s=>s.id===t.taskId);if(!n)throw new Error(`Missing request for agent ${t.id}`);let i=this.random()<S2(this.progress.agentLevels[t.id].accuracy);n.progress=1,n.resolvedAt=this.time,this.progress.completed++,i?(n.status="complete",this.progress.tokens+=n.reward,this.progress.earned+=n.reward,this.lastResult={success:i,amount:n.reward,agentId:t.id}):(n.status="failed",n.loss=Math.min(this.progress.tokens,n.kind==="context"?5:3),this.progress.tokens-=n.loss,this.progress.errors++,this.lastResult={success:i,amount:n.loss,agentId:t.id}),this.nextArrival[n.stationId]=Math.max(this.nextArrival[n.stationId],3.5),t.taskId=void 0,t.state="returning",t.target={...Fc[t.id]}}move(t,n){let i=t.target.x-t.x,s=t.target.z-t.z,a=Math.hypot(i,s),r=2.05*n;if(a>r){t.x+=i/a*r,t.z+=s/a*r;return}if(t.x=t.target.x,t.z=t.target.z,t.state==="returning"){t.state="idle";return}t.target.x===g0.x&&t.target.z===g0.z&&(t.visitedContext=!0);let o=t.route.shift();if(o)t.target=o;else{t.state="working";let l=this.requests.find(c=>c.id===t.taskId);l&&(l.status="working")}}update(t){if(this.paused||t<=0)return;let n=Math.min(t*this.speed,5);for(;n>0;){let i=Math.min(n,.03333333333333333);n-=i,this.time+=i;for(let s=0;s<this.progress.capacity;s++){this.nextArrival[s]-=i;let a=this.requests.some(r=>r.stationId===s&&(r.status==="queued"||r.status==="assigned"||r.status==="working"));this.nextArrival[s]<=0&&!a&&(this.spawnRequest(s),this.nextArrival[s]=vM(this.progress.stationLevels[s]))}this.assign();for(let s of this.agents)if(s.state==="walking"||s.state==="returning")this.move(s,i);else if(s.state==="working"){s.workLeft=Math.max(0,s.workLeft-i);let a=this.requests.find(r=>r.id===s.taskId);if(!a)throw new Error(`Missing request for agent ${s.id}`);a.progress=1-s.workLeft/s.workTotal,s.workLeft===0&&this.resolve(s)}}}buyCapacity(){return this.progress.tokens<fM||this.progress.capacity>=v0?!1:(this.progress.tokens-=fM,this.progress.capacity++,this.addAgent(),this.nextArrival[this.progress.capacity-1]=1.8,!0)}buyWorkflow(){return this.progress.capacity<2||this.progress.workflow>=_2||this.progress.tokens<pM(this.progress.workflow)?!1:(this.progress.tokens-=pM(this.progress.workflow),this.progress.workflow++,!0)}buyStation(t){if(!Number.isInteger(t)||t<0||t>=this.progress.capacity)return!1;let n=this.progress.stationLevels[t];return n>=y2||this.progress.tokens<mM(n)?!1:(this.progress.tokens-=mM(n),this.progress.stationLevels[t]++,this.nextArrival[t]=Math.min(this.nextArrival[t],vM(this.progress.stationLevels[t])),!0)}trainAgent(t,n){if(!Number.isInteger(t)||t<0||t>=this.progress.capacity||n!=="speed"&&n!=="accuracy")return!1;let i=this.progress.agentLevels[t][n];return i>=x2||this.progress.tokens<gM(n,i)?!1:(this.progress.tokens-=gM(n,i),this.progress.agentLevels[t][n]++,!0)}unlockContext(){return this.progress.tokens<dM||this.progress.context||this.progress.capacity<2?!1:(this.progress.tokens-=dM,this.progress.context=!0,!0)}save(t=Date.now()){return{...this.progress,savedAt:t,stationLevels:[...this.progress.stationLevels],agentLevels:this.progress.agentLevels.map(n=>({...n}))}}};var y0=[{time:0,sun:0,ambient:.54,lamp:1.5,warmth:.35,sunColor:10200532,skyColor:4337747,bounceColor:10516621},{time:.19,sun:.08,ambient:.82,lamp:1.2,warmth:.7,sunColor:16746085,skyColor:14448789,bounceColor:15049099},{time:.32,sun:2.75,ambient:1.08,lamp:.55,warmth:.95,sunColor:16756328,skyColor:8639179,bounceColor:15120529},{time:.5,sun:3.25,ambient:1.18,lamp:.32,warmth:.76,sunColor:16765066,skyColor:9034192,bounceColor:15451552},{time:.67,sun:2.65,ambient:1.02,lamp:.72,warmth:1,sunColor:16749414,skyColor:14785442,bounceColor:15575694},{time:.79,sun:.09,ambient:.8,lamp:1.4,warmth:.8,sunColor:16022403,skyColor:6701415,bounceColor:10778760},{time:1,sun:0,ambient:.54,lamp:1.5,warmth:.35,sunColor:10200532,skyColor:4337747,bounceColor:10516621}];function x0(e,t,n){let i=s=>Math.round((e>>s&255)*(1-n)+(t>>s&255)*n);return i(16)<<16|i(8)<<8|i(0)}function mf(e,t=0){let n=((e/240+.35+t)%1+1)%1,i=Math.max(0,y0.findIndex(p=>p.time>=n)),s=y0[Math.max(i,1)],a=y0[Math.max(i-1,0)],r=(n-a.time)/(s.time-a.time||1),o=r*r*(3-2*r),l=p=>a[p]+(s[p]-a[p])*o,c=Math.floor(n*1440+1e-7),h=Math.floor(c/60),d=c%60,f=Math.max(Math.min(1,Math.max(0,(.19-n)/.12)),Math.min(1,Math.max(0,(n-.79)/.12)));return{time:n,hour:h,label:`${h.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`,sun:l("sun"),moon:f*.45,ambient:l("ambient"),lamp:l("lamp"),warmth:l("warmth"),sunColor:x0(a.sunColor,s.sunColor,o),skyColor:x0(a.skyColor,s.skyColor,o),bounceColor:x0(a.bounceColor,s.bounceColor,o),sunX:Math.cos((n-.47)*Math.PI*2)*6,sunY:4.2+Math.max(0,Math.sin((n-.19)/.6*Math.PI))*5.2}}var Yo=[{x:-4.2,z:-.35},{x:4.2,z:-.35},{x:-6,z:-.35},{x:6,z:-.35},{x:-4.2,z:1.65},{x:4.2,z:1.65},{x:-6,z:1.65},{x:6,z:1.65},{x:-4.2,z:3.65},{x:4.2,z:3.65},{x:-6,z:3.65},{x:6,z:3.65}],Zo=4,bs=Zo+Yo.length;function gf(e){return Math.max(Zo,Math.min(bs,e))}function _M(e,t){let n=[-2.55,2.55,-3.5,3.5];return e<n.length?{x:n[e],z:t+.75}:{x:-3.15+(e-n.length)*.9,z:t+1.8}}var qM=0,tv=1,YM=2;var ev=1,ZM=2,Gi=3,$s=0,Cn=1,Dn=2,ia=0,Nr=1,Br=2,nv=3,iv=4,KM=5,qa=100,JM=101,QM=102,jM=103,$M=104,tb=200,eb=201,nb=202,ib=203,Vf=204,Gf=205,sb=206,ab=207,rb=208,ob=209,lb=210,cb=211,ub=212,hb=213,fb=214,fd=0,dd=1,pd=2,Ur=3,md=4,gd=5,vd=6,_d=7,sv=0,db=1,pb=2,sa=0,mb=1,gb=2,vb=3,yd=4,_b=5,yb=6,xb=7;var av=300,Fr=301,Hr=302,xd=303,Sd=304,gu=306,kf=1e3,Wa=1001,Xf=1002,_n=1003,Sb=1004;var vu=1005;var Rn=1006,Md=1007;var is=1008;var ss=1009,rv=1010,ov=1011,Tl=1012,bd=1013,Qa=1014,ws=1015,Al=1016,Ed=1017,Td=1018,wl=1020,lv=35902,cv=35899,uv=1021,hv=1022,ki=1023,fl=1026,Rl=1027,fv=1028,Ad=1029,dv=1030,wd=1031;var Rd=1033,_u=33776,yu=33777,xu=33778,Su=33779,Cd=35840,Dd=35841,Nd=35842,Ud=35843,Ld=36196,Id=37492,Od=37496,Pd=37808,zd=37809,Bd=37810,Fd=37811,Hd=37812,Vd=37813,Gd=37814,kd=37815,Xd=37816,Wd=37817,qd=37818,Yd=37819,Zd=37820,Kd=37821,Jd=36492,Qd=36494,jd=36495,$d=36283,tp=36284,ep=36285,np=36286;var Jc=2300,Wf=2301,Hf=2302,W0=2400,q0=2401,Y0=2402;var Mb=3200,bb=3201;var pv=0,Eb=1,aa="",ln="srgb",Lr="srgb-linear",Qc="linear",we="srgb";var Dr=7680;var Z0=519,Tb=512,Ab=513,wb=514,mv=515,Rb=516,Cb=517,Db=518,Nb=519,qf=35044;var gv="300 es",es=2e3,jc=2001;var ta=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yM=1234567,Zc=Math.PI/180,dl=180/Math.PI;function Qs(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[e&255]+On[e>>8&255]+On[e>>16&255]+On[e>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function oe(e,t,n){return Math.max(t,Math.min(n,e))}function vv(e,t){return(e%t+t)%t}function b2(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function E2(e,t,n){return e!==t?(n-e)/(t-e):0}function Kc(e,t,n){return(1-n)*e+n*t}function T2(e,t,n,i){return Kc(e,t,1-Math.exp(-n*i))}function A2(e,t=1){return t-Math.abs(vv(e,t*2)-t)}function w2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function R2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function C2(e,t){return e+Math.floor(Math.random()*(t-e+1))}function D2(e,t){return e+Math.random()*(t-e)}function N2(e){return e*(.5-Math.random())}function U2(e){e!==void 0&&(yM=e);let t=yM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function L2(e){return e*Zc}function I2(e){return e*dl}function O2(e){return(e&e-1)===0&&e!==0}function P2(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function z2(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function B2(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ts(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Te(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var sn={DEG2RAD:Zc,RAD2DEG:dl,generateUUID:Qs,clamp:oe,euclideanModulo:vv,mapLinear:b2,inverseLerp:E2,lerp:Kc,damp:T2,pingpong:A2,smoothstep:w2,smootherstep:R2,randInt:C2,randFloat:D2,randFloatSpread:N2,seededRandom:U2,degToRad:L2,radToDeg:I2,isPowerOfTwo:O2,ceilPowerOfTwo:P2,floorPowerOfTwo:z2,setQuaternionFromProperEuler:B2,normalize:Te,denormalize:ts},Kt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ea=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],g=a[r+2],S=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=g,t[n+3]=S;return}if(d!==S||l!==f||c!==p||h!==g){let m=1-o,u=l*f+c*p+h*g+d*S,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let A=Math.sqrt(_),w=Math.atan2(A,u*v);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let y=o*v;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,d=d*m+S*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+h*d+l*p-c*f,t[n+1]=l*g+h*f+c*d-o*p,t[n+2]=c*g+h*p+o*f-l*d,t[n+3]=h*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(xM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(xM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return S0.copy(this).projectOnVector(t),this.sub(S0)}reflect(t){return this.sub(S0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},S0=new B,xM=new ea,Qt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],S=s[0],m=s[3],u=s[6],v=s[1],_=s[4],y=s[7],A=s[2],w=s[5],C=s[8];return a[0]=r*S+o*v+l*A,a[3]=r*m+o*_+l*w,a[6]=r*u+o*y+l*C,a[1]=c*S+h*v+d*A,a[4]=c*m+h*_+d*w,a[7]=c*u+h*y+d*C,a[2]=f*S+p*v+g*A,a[5]=f*m+p*_+g*w,a[8]=f*u+p*y+g*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*a,p=c*a-r*l,g=n*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return t[0]=d*S,t[1]=(s*c-h*i)*S,t[2]=(o*i-s*r)*S,t[3]=f*S,t[4]=(h*n-s*l)*S,t[5]=(s*a-o*n)*S,t[6]=p*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*a)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(M0.makeScale(t,n)),this}rotate(t){return this.premultiply(M0.makeRotation(-t)),this}translate(t,n){return this.premultiply(M0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},M0=new Qt;function _v(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function $c(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ub(){let e=$c("canvas");return e.style.display="block",e}var SM={};function pl(e){e in SM||(SM[e]=!0,console.warn(e))}function Lb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var MM=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bM=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F2(){let e={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===we&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===we&&(s.r=hl(s.r),s.g=hl(s.g),s.b=hl(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===aa?Qc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return pl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return pl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Lr]:{primaries:t,whitePoint:i,transfer:Qc,toXYZ:MM,fromXYZ:bM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:i,transfer:we,toXYZ:MM,fromXYZ:bM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),e}var ue=F2();function js(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function hl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ko,Yf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ko===void 0&&(Ko=$c("canvas")),Ko.width=t.width,Ko.height=t.height;let s=Ko.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ko}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=$c("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=js(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},H2=0,ml=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(b0(s[r].image)):a.push(b0(s[r]))}else a=b0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function b0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Yf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var V2=0,E0=new B,ri=class e extends ta{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Wa,s=Wa,a=Rn,r=is,o=ki,l=ss,c=e.DEFAULT_ANISOTROPY,h=aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V2++}),this.uuid=Qs(),this.name="",this.source=new ml(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(E0).x}get height(){return this.source.getSize(E0).y}get depth(){return this.source.getSize(E0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==av)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kf:t.x=t.x-Math.floor(t.x);break;case Wa:t.x=t.x<0?0:1;break;case Xf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kf:t.y=t.y-Math.floor(t.y);break;case Wa:t.y=t.y<0?0:1;break;case Xf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=av;ri.DEFAULT_ANISOTROPY=1;var Ae=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,y=(p+1)/2,A=(u+1)/2,w=(h+f)/4,C=(d+S)/4,N=(g+m)/4;return _>y&&_>A?_<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(_),s=w/i,a=C/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=w/s,a=N/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=C/a,s=N/a),this.set(i,s,a,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-S)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this.w=oe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this.w=oe(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zf=class extends ta{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ae(0,0,t,n),this.scissorTest=!1,this.viewport=new Ae(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new ri(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new ml(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ts=class extends Zf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},tu=class extends ri{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kf=class extends ri{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ya=class{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Qi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Qi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Qi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Qi):Qi.fromBufferAttribute(a,r),Qi.applyMatrix4(t.matrixWorld),this.expandByPoint(Qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vf.copy(i.boundingBox)),vf.applyMatrix4(t.matrixWorld),this.union(vf)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hc),_f.subVectors(this.max,Hc),Jo.subVectors(t.a,Hc),Qo.subVectors(t.b,Hc),jo.subVectors(t.c,Hc),Fa.subVectors(Qo,Jo),Ha.subVectors(jo,Qo),Ar.subVectors(Jo,jo);let n=[0,-Fa.z,Fa.y,0,-Ha.z,Ha.y,0,-Ar.z,Ar.y,Fa.z,0,-Fa.x,Ha.z,0,-Ha.x,Ar.z,0,-Ar.x,-Fa.y,Fa.x,0,-Ha.y,Ha.x,0,-Ar.y,Ar.x,0];return!T0(n,Jo,Qo,jo,_f)||(n=[1,0,0,0,1,0,0,0,1],!T0(n,Jo,Qo,jo,_f))?!1:(yf.crossVectors(Fa,Ha),n=[yf.x,yf.y,yf.z],T0(n,Jo,Qo,jo,_f))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ws=[new B,new B,new B,new B,new B,new B,new B,new B],Qi=new B,vf=new Ya,Jo=new B,Qo=new B,jo=new B,Fa=new B,Ha=new B,Ar=new B,Hc=new B,_f=new B,yf=new B,wr=new B;function T0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){wr.fromArray(e,a);let o=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),l=t.dot(wr),c=n.dot(wr),h=i.dot(wr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var G2=new Ya,Vc=new B,A0=new B,Ir=class{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):G2.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vc.subVectors(t,this.center);let n=Vc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Vc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(A0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vc.copy(t.center).add(A0)),this.expandByPoint(Vc.copy(t.center).sub(A0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qs=new B,w0=new B,xf=new B,Va=new B,R0=new B,Sf=new B,C0=new B,gl=class{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=qs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(qs.copy(this.origin).addScaledVector(this.direction,n),qs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){w0.copy(t).add(n).multiplyScalar(.5),xf.copy(n).sub(t).normalize(),Va.copy(this.origin).sub(w0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(xf),o=Va.dot(this.direction),l=-Va.dot(xf),c=Va.lengthSq(),h=Math.abs(1-r*r),d,f,p,g;if(h>0)if(d=r*l-o,f=r*o-l,g=a*h,d>=0)if(f>=-g)if(f<=g){let S=1/h;d*=S,f*=S,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(w0).addScaledVector(xf,f),p}intersectSphere(t,n){qs.subVectors(t.center,this.origin);let i=qs.dot(this.direction),s=qs.dot(qs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,qs)!==null}intersectTriangle(t,n,i,s,a){R0.subVectors(n,t),Sf.subVectors(i,t),C0.crossVectors(R0,Sf);let r=this.direction.dot(C0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Va.subVectors(this.origin,t);let l=o*this.direction.dot(Sf.crossVectors(Va,Sf));if(l<0)return null;let c=o*this.direction.dot(R0.cross(Va));if(c<0||l+c>r)return null;let h=-o*Va.dot(C0);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class e{constructor(t,n,i,s,a,r,o,l,c,h,d,f,p,g,S,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,f,p,g,S,m)}set(t,n,i,s,a,r,o,l,c,h,d,f,p,g,S,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/$o.setFromMatrixColumn(t,0).length(),a=1/$o.setFromMatrixColumn(t,1).length(),r=1/$o.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*h,p=r*d,g=o*h,S=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,g=c*h,S=c*d;n[0]=f+S*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-g,n[6]=S+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,g=c*h,S=c*d;n[0]=f-S*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*h,n[9]=S-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,p=r*d,g=o*h,S=o*d;n[0]=l*h,n[4]=g*c-p,n[8]=f*c+S,n[1]=l*d,n[5]=S*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,g=o*l,S=o*c;n[0]=l*h,n[4]=S-f*d,n[8]=g*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+g,n[10]=f-S*d}else if(t.order==="XZY"){let f=r*l,p=r*c,g=o*l,S=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+S,n[5]=r*h,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*h,n[10]=S*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k2,t,X2)}lookAt(t,n,i){let s=this.elements;return bi.subVectors(t,n),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Ga.crossVectors(i,bi),Ga.lengthSq()===0&&(Math.abs(i.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Ga.crossVectors(i,bi)),Ga.normalize(),Mf.crossVectors(bi,Ga),s[0]=Ga.x,s[4]=Mf.x,s[8]=bi.x,s[1]=Ga.y,s[5]=Mf.y,s[9]=bi.y,s[2]=Ga.z,s[6]=Mf.z,s[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],S=i[6],m=i[10],u=i[14],v=i[3],_=i[7],y=i[11],A=i[15],w=s[0],C=s[4],N=s[8],E=s[12],M=s[1],U=s[5],H=s[9],k=s[13],W=s[2],J=s[6],X=s[10],st=s[14],V=s[3],ct=s[7],mt=s[11],Mt=s[15];return a[0]=r*w+o*M+l*W+c*V,a[4]=r*C+o*U+l*J+c*ct,a[8]=r*N+o*H+l*X+c*mt,a[12]=r*E+o*k+l*st+c*Mt,a[1]=h*w+d*M+f*W+p*V,a[5]=h*C+d*U+f*J+p*ct,a[9]=h*N+d*H+f*X+p*mt,a[13]=h*E+d*k+f*st+p*Mt,a[2]=g*w+S*M+m*W+u*V,a[6]=g*C+S*U+m*J+u*ct,a[10]=g*N+S*H+m*X+u*mt,a[14]=g*E+S*k+m*st+u*Mt,a[3]=v*w+_*M+y*W+A*V,a[7]=v*C+_*U+y*J+A*ct,a[11]=v*N+_*H+y*X+A*mt,a[15]=v*E+_*k+y*st+A*Mt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],S=t[7],m=t[11],u=t[15];return g*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+S*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*r*d-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],S=t[13],m=t[14],u=t[15],v=d*m*c-S*f*c+S*l*p-o*m*p-d*l*u+o*f*u,_=g*f*c-h*m*c-g*l*p+r*m*p+h*l*u-r*f*u,y=h*S*c-g*d*c+g*o*p-r*S*p-h*o*u+r*d*u,A=g*d*l-h*S*l-g*o*f+r*S*f+h*o*m-r*d*m,w=n*v+i*_+s*y+a*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=v*C,t[1]=(S*f*a-d*m*a-S*s*p+i*m*p+d*s*u-i*f*u)*C,t[2]=(o*m*a-S*l*a+S*s*c-i*m*c-o*s*u+i*l*u)*C,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*C,t[4]=_*C,t[5]=(h*m*a-g*f*a+g*s*p-n*m*p-h*s*u+n*f*u)*C,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*u-n*l*u)*C,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*p+n*l*p)*C,t[8]=y*C,t[9]=(g*d*a-h*S*a-g*i*p+n*S*p+h*i*u-n*d*u)*C,t[10]=(r*S*a-g*o*a+g*i*c-n*S*c-r*i*u+n*o*u)*C,t[11]=(h*o*a-r*d*a-h*i*c+n*d*c+r*i*p-n*o*p)*C,t[12]=A*C,t[13]=(h*S*s-g*d*s+g*i*f-n*S*f-h*i*m+n*d*m)*C,t[14]=(g*o*s-r*S*s-g*i*l+n*S*l+r*i*m-n*o*m)*C,t[15]=(r*d*s-h*o*s+h*i*l-n*d*l-r*i*f+n*o*f)*C,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,f=a*c,p=a*h,g=a*d,S=r*h,m=r*d,u=o*d,v=l*c,_=l*h,y=l*d,A=i.x,w=i.y,C=i.z;return s[0]=(1-(S+u))*A,s[1]=(p+y)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(f+u))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+_)*C,s[9]=(m-v)*C,s[10]=(1-(f+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=$o.set(s[0],s[1],s[2]).length(),r=$o.set(s[4],s[5],s[6]).length(),o=$o.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],ji.copy(this);let c=1/a,h=1/r,d=1/o;return ji.elements[0]*=c,ji.elements[1]*=c,ji.elements[2]*=c,ji.elements[4]*=h,ji.elements[5]*=h,ji.elements[6]*=h,ji.elements[8]*=d,ji.elements[9]*=d,ji.elements[10]*=d,n.setFromRotationMatrix(ji),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=es,l=!1){let c=this.elements,h=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),g,S;if(l)g=a/(r-a),S=r*a/(r-a);else if(o===es)g=-(r+a)/(r-a),S=-2*r*a/(r-a);else if(o===jc)g=-r/(r-a),S=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=es,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),g,S;if(l)g=1/(r-a),S=r/(r-a);else if(o===es)g=-2/(r-a),S=-(r+a)/(r-a);else if(o===jc)g=-1/(r-a),S=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},$o=new B,ji=new He,k2=new B(0,0,0),X2=new B(1,1,1),Ga=new B,Mf=new B,bi=new B,EM=new He,TM=new ea,ns=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-oe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return EM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(EM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return TM.setFromEuler(this),this.setFromQuaternion(TM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ns.DEFAULT_ORDER="XYZ";var vl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},W2=0,AM=new B,tl=new ea,Ys=new He,bf=new B,Gc=new B,q2=new B,Y2=new ea,wM=new B(1,0,0),RM=new B(0,1,0),CM=new B(0,0,1),DM={type:"added"},Z2={type:"removed"},el={type:"childadded",child:null},D0={type:"childremoved",child:null},yn=class e extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W2++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new ns,i=new ea,s=new B(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Qt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return tl.setFromAxisAngle(t,n),this.quaternion.multiply(tl),this}rotateOnWorldAxis(t,n){return tl.setFromAxisAngle(t,n),this.quaternion.premultiply(tl),this}rotateX(t){return this.rotateOnAxis(wM,t)}rotateY(t){return this.rotateOnAxis(RM,t)}rotateZ(t){return this.rotateOnAxis(CM,t)}translateOnAxis(t,n){return AM.copy(t).applyQuaternion(this.quaternion),this.position.add(AM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(wM,t)}translateY(t){return this.translateOnAxis(RM,t)}translateZ(t){return this.translateOnAxis(CM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ys.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?bf.copy(t):bf.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Gc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ys.lookAt(Gc,bf,this.up):Ys.lookAt(bf,Gc,this.up),this.quaternion.setFromRotationMatrix(Ys),s&&(Ys.extractRotation(s.matrixWorld),tl.setFromRotationMatrix(Ys),this.quaternion.premultiply(tl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(DM),el.child=t,this.dispatchEvent(el),el.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Z2),D0.child=t,this.dispatchEvent(D0),D0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ys.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ys.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ys),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(DM),el.child=t,this.dispatchEvent(el),el.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gc,t,q2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gc,Y2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};yn.DEFAULT_UP=new B(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=new B,Zs=new B,N0=new B,Ks=new B,nl=new B,il=new B,NM=new B,U0=new B,L0=new B,I0=new B,O0=new Ae,P0=new Ae,z0=new Ae,Js=class e{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),$i.subVectors(t,n),s.cross($i);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){$i.subVectors(s,n),Zs.subVectors(i,n),N0.subVectors(t,n);let r=$i.dot($i),o=$i.dot(Zs),l=$i.dot(N0),c=Zs.dot(Zs),h=Zs.dot(N0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ks)===null?!1:Ks.x>=0&&Ks.y>=0&&Ks.x+Ks.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ks)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ks.x),l.addScaledVector(r,Ks.y),l.addScaledVector(o,Ks.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return O0.setScalar(0),P0.setScalar(0),z0.setScalar(0),O0.fromBufferAttribute(t,n),P0.fromBufferAttribute(t,i),z0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(O0,a.x),r.addScaledVector(P0,a.y),r.addScaledVector(z0,a.z),r}static isFrontFacing(t,n,i,s){return $i.subVectors(i,n),Zs.subVectors(t,n),$i.cross(Zs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $i.subVectors(this.c,this.b),Zs.subVectors(this.a,this.b),$i.cross(Zs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;nl.subVectors(s,i),il.subVectors(a,i),U0.subVectors(t,i);let l=nl.dot(U0),c=il.dot(U0);if(l<=0&&c<=0)return n.copy(i);L0.subVectors(t,s);let h=nl.dot(L0),d=il.dot(L0);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(nl,r);I0.subVectors(t,a);let p=nl.dot(I0),g=il.dot(I0);if(g>=0&&p<=g)return n.copy(a);let S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(il,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return NM.subVectors(a,s),o=(d-h)/(d-h+(p-g)),n.copy(s).addScaledVector(NM,o);let u=1/(m+S+f);return r=S*u,o=f*u,n.copy(i).addScaledVector(nl,r).addScaledVector(il,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ib={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},Ef={h:0,s:0,l:0};function B0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ue.workingColorSpace){return this.r=t,this.g=n,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ue.workingColorSpace){if(t=vv(t,1),n=oe(n,0,1),i=oe(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=B0(r,a,t+1/3),this.g=B0(r,a,t),this.b=B0(r,a,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,n=ln){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ln){let i=Ib[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}copyLinearToSRGB(t){return this.r=hl(t.r),this.g=hl(t.g),this.b=hl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ue.workingToColorSpace(Pn.copy(this),t),Math.round(oe(Pn.r*255,0,255))*65536+Math.round(oe(Pn.g*255,0,255))*256+Math.round(oe(Pn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ue.workingColorSpace){ue.workingToColorSpace(Pn.copy(this),n);let i=Pn.r,s=Pn.g,a=Pn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ue.workingColorSpace){return ue.workingToColorSpace(Pn.copy(this),n),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=ln){ue.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,i=Pn.g,s=Pn.b;return t!==ln?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+n,ka.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ka),t.getHSL(Ef);let i=Kc(ka.h,Ef.h,n),s=Kc(ka.s,Ef.s,n),a=Kc(ka.l,Ef.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Zt;Zt.NAMES=Ib;var K2=0,As=class extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K2++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Nr,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=Gf,this.blendEquation=qa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(i.blending=this.blending),this.side!==$s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vf&&(i.blendSrc=this.blendSrc),this.blendDst!==Gf&&(i.blendDst=this.blendDst),this.blendEquation!==qa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Bn=class extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var nn=new B,Tf=new Kt,J2=0,vn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=qf,this.updateRanges=[],this.gpuType=ws,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tf.fromBufferAttribute(this,n),Tf.applyMatrix3(t),this.setXY(n,Tf.x,Tf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ts(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ts(n,this.array)),n}setX(t,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ts(n,this.array)),n}setY(t,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ts(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ts(n,this.array)),n}setW(t,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array),a=Te(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qf&&(t.usage=this.usage),t}};var eu=class extends vn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var nu=class extends vn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var zn=class extends vn{constructor(t,n,i){super(new Float32Array(t),n,i)}},Q2=0,Fi=new He,F0=new yn,sl=new B,Ei=new Ya,kc=new Ya,gn=new B,Jn=class e extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q2++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_v(t)?nu:eu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Qt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,n,i){return Fi.makeTranslation(t,n,i),this.applyMatrix4(Fi),this}scale(t,n,i){return Fi.makeScale(t,n,i),this.applyMatrix4(Fi),this}lookAt(t){return F0.lookAt(t),F0.updateMatrix(),this.applyMatrix4(F0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sl).negate(),this.translate(sl.x,sl.y,sl.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new zn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];kc.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Ei.min,kc.min),Ei.expandByPoint(gn),gn.addVectors(Ei.max,kc.max),Ei.expandByPoint(gn)):(Ei.expandByPoint(kc.min),Ei.expandByPoint(kc.max))}Ei.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)gn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(gn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gn.fromBufferAttribute(o,c),l&&(sl.fromBufferAttribute(t,c),gn.add(sl)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new B,l[N]=new B;let c=new B,h=new B,d=new B,f=new Kt,p=new Kt,g=new Kt,S=new B,m=new B;function u(N,E,M){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(a,N),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),o[N].add(S),o[E].add(S),o[M].add(S),l[N].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let N=0,E=v.length;N<E;++N){let M=v[N],U=M.start,H=M.count;for(let k=U,W=U+H;k<W;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let _=new B,y=new B,A=new B,w=new B;function C(N){A.fromBufferAttribute(s,N),w.copy(A);let E=o[N];_.copy(E),_.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(w,E);let U=y.dot(l[N])<0?-1:1;r.setXYZW(N,_.x,_.y,_.z,U)}for(let N=0,E=v.length;N<E;++N){let M=v[N],U=M.start,H=M.count;for(let k=U,W=U+H;k<W;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new B,a=new B,r=new B,o=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)gn.fromBufferAttribute(t,n),gn.normalize(),t.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new vn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},UM=new He,Rr=new gl,Af=new Ir,LM=new B,wf=new B,Rf=new B,Cf=new B,H0=new B,Df=new B,IM=new B,Nf=new B,Re=class extends yn{constructor(t=new Jn,n=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Df.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(H0.fromBufferAttribute(d,t),r?Df.addScaledVector(H0,h):Df.addScaledVector(H0.sub(n),h))}n.add(Df)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Af.copy(i.boundingSphere),Af.applyMatrix4(a),Rr.copy(t.ray).recast(t.near),!(Af.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Af,LM)===null||Rr.origin.distanceToSquared(LM)>(t.far-t.near)**2))&&(UM.copy(a).invert(),Rr.copy(t.ray).applyMatrix4(UM),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Rr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,S=f.length;g<S;g++){let m=f[g],u=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){let w=o.getX(y),C=o.getX(y+1),N=o.getX(y+2);s=Uf(this,u,t,i,c,h,d,w,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=g,u=S;m<u;m+=3){let v=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=Uf(this,r,t,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,S=f.length;g<S;g++){let m=f[g],u=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){let w=y,C=y+1,N=y+2;s=Uf(this,u,t,i,c,h,d,w,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,u=S;m<u;m+=3){let v=m,_=m+1,y=m+2;s=Uf(this,r,t,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function j2(e,t,n,i,s,a,r,o){let l;if(t.side===Cn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===$s,o),l===null)return null;Nf.copy(o),Nf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Nf);return c<n.near||c>n.far?null:{distance:c,point:Nf.clone(),object:e}}function Uf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,wf),e.getVertexPosition(l,Rf),e.getVertexPosition(c,Cf);let h=j2(e,t,n,i,wf,Rf,Cf,IM);if(h){let d=new B;Js.getBarycoord(IM,wf,Rf,Cf,d),s&&(h.uv=Js.getInterpolatedAttribute(s,o,l,c,d,new Kt)),a&&(h.uv1=Js.getInterpolatedAttribute(a,o,l,c,d,new Kt)),r&&(h.normal=Js.getInterpolatedAttribute(r,o,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};Js.getNormal(wf,Rf,Cf,f.normal),h.face=f,h.barycoord=d}return h}var Za=class e extends Jn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(h,3)),this.setAttribute("uv",new zn(d,2));function g(S,m,u,v,_,y,A,w,C,N,E){let M=y/C,U=A/N,H=y/2,k=A/2,W=w/2,J=C+1,X=N+1,st=0,V=0,ct=new B;for(let mt=0;mt<X;mt++){let Mt=mt*U-k;for(let zt=0;zt<J;zt++){let se=zt*M-H;ct[S]=se*v,ct[m]=Mt*_,ct[u]=W,c.push(ct.x,ct.y,ct.z),ct[S]=0,ct[m]=0,ct[u]=w>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(zt/C),d.push(1-mt/N),st+=1}}for(let mt=0;mt<N;mt++)for(let Mt=0;Mt<C;Mt++){let zt=f+Mt+J*mt,se=f+Mt+J*(mt+1),le=f+(Mt+1)+J*(mt+1),ae=f+(Mt+1)+J*mt;l.push(zt,se,ae),l.push(se,le,ae),V+=6}o.addGroup(p,V,E),p+=V,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Hn(e){let t={};for(let n=0;n<e.length;n++){let i=Vr(e[n]);for(let s in i)t[s]=i[s]}return t}function $2(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function yv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Ob={clone:Vr,merge:Hn},tR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tR,this.fragmentShader=eR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=$2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},iu=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=es,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xa=new B,OM=new Kt,PM=new Kt,wn=class extends iu{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=dl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,n){return this.getViewBounds(t,OM,PM),n.subVectors(PM,OM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Zc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},al=-90,rl=1,Jf=class extends yn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wn(al,rl,t,n);s.layers=this.layers,this.add(s);let a=new wn(al,rl,t,n);a.layers=this.layers,this.add(a);let r=new wn(al,rl,t,n);r.layers=this.layers,this.add(r);let o=new wn(al,rl,t,n);o.layers=this.layers,this.add(o);let l=new wn(al,rl,t,n);l.layers=this.layers,this.add(l);let c=new wn(al,rl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===es)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},su=class extends ri{constructor(t=[],n=Fr,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qf=class extends Ts{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new su(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Za(5,5,5),a=new oi({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:ia});a.uniforms.tEquirect.value=n;let r=new Re(s,a),o=n.minFilter;return n.minFilter===is&&(n.minFilter=Rn),new Jf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Hi=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},nR={type:"move"},_l=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let S of t.hand.values()){let m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var au=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},jf=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=qf,this.updateRanges=[],this.version=0,this.uuid=Qs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Kn=new B,ru=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Kn.fromBufferAttribute(this,n),Kn.applyMatrix4(t),this.setXYZ(n,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Kn.fromBufferAttribute(this,n),Kn.applyNormalMatrix(t),this.setXYZ(n,Kn.x,Kn.y,Kn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Kn.fromBufferAttribute(this,n),Kn.transformDirection(t),this.setXYZ(n,Kn.x,Kn.y,Kn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=ts(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Te(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=ts(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=ts(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=ts(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=ts(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array),a=Te(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return new vn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yl=class extends As{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ol,Xc=new B,ll=new B,cl=new B,ul=new Kt,Wc=new Kt,Pb=new He,Lf=new B,qc=new B,If=new B,zM=new Kt,V0=new Kt,BM=new Kt,xl=class extends yn{constructor(t=new yl){if(super(),this.isSprite=!0,this.type="Sprite",ol===void 0){ol=new Jn;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jf(n,5);ol.setIndex([0,1,2,0,2,3]),ol.setAttribute("position",new ru(i,3,0,!1)),ol.setAttribute("uv",new ru(i,2,3,!1))}this.geometry=ol,this.material=t,this.center=new Kt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ll.setFromMatrixScale(this.matrixWorld),Pb.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cl.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ll.multiplyScalar(-cl.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let r=this.center;Of(Lf.set(-.5,-.5,0),cl,r,ll,s,a),Of(qc.set(.5,-.5,0),cl,r,ll,s,a),Of(If.set(.5,.5,0),cl,r,ll,s,a),zM.set(0,0),V0.set(1,0),BM.set(1,1);let o=t.ray.intersectTriangle(Lf,qc,If,!1,Xc);if(o===null&&(Of(qc.set(-.5,.5,0),cl,r,ll,s,a),V0.set(0,1),o=t.ray.intersectTriangle(Lf,If,qc,!1,Xc),o===null))return;let l=t.ray.origin.distanceTo(Xc);l<t.near||l>t.far||n.push({distance:l,point:Xc.clone(),uv:Js.getInterpolation(Xc,Lf,qc,If,zM,V0,BM,new Kt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Of(e,t,n,i,s,a){ul.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Wc.x=a*ul.x-s*ul.y,Wc.y=s*ul.x+a*ul.y):Wc.copy(ul),e.copy(t),e.x+=Wc.x,e.y+=Wc.y,e.applyMatrix4(Pb)}var G0=new B,iR=new B,sR=new Qt,Es=class{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=G0.subVectors(i,n).cross(iR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(G0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||sR.getNormalMatrix(t),s=this.coplanarPoint(G0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cr=new Ir,aR=new Kt(.5,.5),Pf=new B,Sl=class{constructor(t=new Es,n=new Es,i=new Es,s=new Es,a=new Es,r=new Es){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=es,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],p=a[7],g=a[8],S=a[9],m=a[10],u=a[11],v=a[12],_=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-h,u-g,A-v).normalize(),s[1].setComponents(c+r,p+h,u+g,A+v).normalize(),s[2].setComponents(c+o,p+d,u+S,A+_).normalize(),s[3].setComponents(c-o,p-d,u-S,A-_).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,p-f,u-m,A-y).normalize();else if(s[4].setComponents(c-l,p-f,u-m,A-y).normalize(),n===es)s[5].setComponents(c+l,p+f,u+m,A+y).normalize();else if(n===jc)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){Cr.center.set(0,0,0);let n=aR.distanceTo(t.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Pf.x=s.normal.x>0?t.max.x:t.min.x,Pf.y=s.normal.y>0?t.max.y:t.min.y,Pf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ml=class extends As{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},FM=new He,K0=new gl,zf=new Ir,Bf=new B,bl=class extends yn{constructor(t=new Jn,n=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zf.copy(i.boundingSphere),zf.applyMatrix4(s),zf.radius+=a,t.ray.intersectsSphere(zf)===!1)return;FM.copy(s).invert(),K0.copy(t.ray).applyMatrix4(FM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=f,S=p;g<S;g++){let m=c.getX(g);Bf.fromBufferAttribute(d,m),HM(Bf,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=f,S=p;g<S;g++)Bf.fromBufferAttribute(d,g),HM(Bf,g,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function HM(e,t,n,i,s,a,r){let o=K0.distanceSqToPoint(e);if(o<n){let l=new B;K0.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Vi=class extends ri{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ou=class extends ri{constructor(t,n,i=Qa,s,a,r,o=_n,l=_n,c,h=fl,d=1){if(h!==fl&&h!==Rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},lu=class extends ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var cu=class e extends Jn{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],d=[],f=[],p=[],g=0,S=[],m=i/2,u=0;v(),r===!1&&(t>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new zn(d,3)),this.setAttribute("normal",new zn(f,3)),this.setAttribute("uv",new zn(p,2));function v(){let y=new B,A=new B,w=0,C=(n-t)/i;for(let N=0;N<=a;N++){let E=[],M=N/a,U=M*(n-t)+t;for(let H=0;H<=s;H++){let k=H/s,W=k*l+o,J=Math.sin(W),X=Math.cos(W);A.x=U*J,A.y=-M*i+m,A.z=U*X,d.push(A.x,A.y,A.z),y.set(J,C,X).normalize(),f.push(y.x,y.y,y.z),p.push(k,1-M),E.push(g++)}S.push(E)}for(let N=0;N<s;N++)for(let E=0;E<a;E++){let M=S[E][N],U=S[E+1][N],H=S[E+1][N+1],k=S[E][N+1];(t>0||E!==0)&&(h.push(M,U,k),w+=3),(n>0||E!==a-1)&&(h.push(U,H,k),w+=3)}c.addGroup(u,w,0),u+=w}function _(y){let A=g,w=new Kt,C=new B,N=0,E=y===!0?t:n,M=y===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let U=g;for(let H=0;H<=s;H++){let W=H/s*l+o,J=Math.cos(W),X=Math.sin(W);C.x=E*X,C.y=m*M,C.z=E*J,d.push(C.x,C.y,C.z),f.push(0,M,0),w.x=J*.5+.5,w.y=X*.5*M+.5,p.push(w.x,w.y),g++}for(let H=0;H<s;H++){let k=A+H,W=U+H;y===!0?h.push(W,W+1,k):h.push(W+1,W,k),N+=3}c.addGroup(u,N,y===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Fn=class e extends Jn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=n/l,p=[],g=[],S=[],m=[];for(let u=0;u<h;u++){let v=u*f-r;for(let _=0;_<c;_++){let y=_*d-a;g.push(y,-v,0),S.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){let _=v+c*u,y=v+c*(u+1),A=v+1+c*(u+1),w=v+1+c*u;p.push(_,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new zn(g,3)),this.setAttribute("normal",new zn(S,3)),this.setAttribute("uv",new zn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var El=class e extends Jn{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],d=new B,f=new B,p=[],g=[],S=[],m=[];for(let u=0;u<=i;u++){let v=[],_=u/i,y=0;u===0&&r===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let A=0;A<=n;A++){let w=A/n;d.x=-t*Math.cos(s+w*a)*Math.sin(r+_*o),d.y=t*Math.cos(r+_*o),d.z=t*Math.sin(s+w*a)*Math.sin(r+_*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),m.push(w+y,1-_),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){let _=h[u][v+1],y=h[u][v],A=h[u+1][v],w=h[u+1][v+1];(u!==0||r>0)&&p.push(_,y,w),(u!==i-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new zn(g,3)),this.setAttribute("normal",new zn(S,3)),this.setAttribute("uv",new zn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Or=class extends As{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pv,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $f=class extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},td=class extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ff(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function rR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Pr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ed=class extends Pr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:W0,endingEnd:W0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case q0:a=t,o=2*n-i;break;case Y0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case q0:r=t,l=2*i-n;break;case Y0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),S=g*g,m=S*g,u=-f*m+2*f*S-f*g,v=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*g+1,_=(-1-p)*m+(1.5+p)*S+.5*g,y=p*m-p*S;for(let A=0;A!==o;++A)a[A]=u*r[h+A]+v*r[c+A]+_*r[l+A]+y*r[d+A];return a}},nd=class extends Pr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*h;return a}},id=class extends Pr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ti=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ff(n,this.TimeBufferType),this.values=Ff(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Ff(t.times,Array),values:Ff(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new id(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ed(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Jc:n=this.InterpolantFactoryMethodDiscrete;break;case Wf:n=this.InterpolantFactoryMethodLinear;break;case Hf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jc;case this.InterpolantFactoryMethodLinear:return Wf;case this.InterpolantFactoryMethodSmooth:return Hf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&rR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Hf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let S=n[d+g];if(S!==n[f+g]||S!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Wf;var Ka=class extends Ti{constructor(t,n,i){super(t,n,i)}};Ka.prototype.ValueTypeName="bool";Ka.prototype.ValueBufferType=Array;Ka.prototype.DefaultInterpolation=Jc;Ka.prototype.InterpolantFactoryMethodLinear=void 0;Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var sd=class extends Ti{constructor(t,n,i,s){super(t,n,i,s)}};sd.prototype.ValueTypeName="color";var ad=class extends Ti{constructor(t,n,i,s){super(t,n,i,s)}};ad.prototype.ValueTypeName="number";var rd=class extends Pr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)ea.slerpFlat(a,0,r,c-o,r,c,l);return a}},uu=class extends Ti{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new rd(this.times,this.values,this.getValueSize(),t)}};uu.prototype.ValueTypeName="quaternion";uu.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Ti{constructor(t,n,i){super(t,n,i)}};Ja.prototype.ValueTypeName="string";Ja.prototype.ValueBufferType=Array;Ja.prototype.DefaultInterpolation=Jc;Ja.prototype.InterpolantFactoryMethodLinear=void 0;Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var od=class extends Ti{constructor(t,n,i,s){super(t,n,i,s)}};od.prototype.ValueTypeName="vector";var ld=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},zb=new ld,cd=class{constructor(t){this.manager=t!==void 0?t:zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cd.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends yn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},hu=class extends zr{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},k0=new He,VM=new B,GM=new B,ud=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=ss,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;VM.setFromMatrixPosition(t.matrixWorld),n.position.copy(VM),GM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(GM),n.updateMatrixWorld(),k0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(k0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(k0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var kM=new He,Yc=new B,X0=new B,J0=class extends ud{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Yc.setFromMatrixPosition(t.matrixWorld),i.position.copy(Yc),X0.copy(i.position),X0.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(X0),i.updateMatrixWorld(),s.makeTranslation(-Yc.x,-Yc.y,-Yc.z),kM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kM,i.coordinateSystem,i.reversedDepth)}},na=class extends zr{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new J0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},fu=class extends iu{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Q0=class extends ud{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},du=class extends zr{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Q0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},pu=class extends zr{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var hd=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xv="\\[\\]\\.:\\/",oR=new RegExp("["+xv+"]","g"),Sv="[^"+xv+"]",lR="[^"+xv.replace("\\.","")+"]",cR=/((?:WC+[\/:])*)/.source.replace("WC",Sv),uR=/(WCOD+)?/.source.replace("WCOD",lR),hR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sv),fR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sv),dR=new RegExp("^"+cR+uR+hR+fR+"$"),pR=["material","materials","bones","map"],j0=class{constructor(t,n,i){let s=i||Fe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Fe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(oR,"")}static parseTrackName(t){let n=dR.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);pR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=j0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MU=new Float32Array(1);var XM=new He,mu=class{constructor(t,n,i=0,s=1/0){this.ray=new gl(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return XM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(XM),this}intersectObject(t,n=!0,i=[]){return $0(t,this,i,n),i.sort(WM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)$0(t[s],this,i,n);return i.sort(WM),i}};function WM(e,t){return e.distance-t.distance}function $0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)$0(a[r],t,n,!0)}}function Mv(e,t,n,i){let s=mR(i);switch(n){case uv:return e*t;case fv:return e*t/s.components*s.byteLength;case Ad:return e*t/s.components*s.byteLength;case dv:return e*t*2/s.components*s.byteLength;case wd:return e*t*2/s.components*s.byteLength;case hv:return e*t*3/s.components*s.byteLength;case ki:return e*t*4/s.components*s.byteLength;case Rd:return e*t*4/s.components*s.byteLength;case _u:case yu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xu:case Su:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Dd:case Ud:return Math.max(e,16)*Math.max(t,8)/4;case Cd:case Nd:return Math.max(e,8)*Math.max(t,8)/2;case Ld:case Id:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Od:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Bd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case kd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Xd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case qd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Yd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Zd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Kd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Jd:case Qd:case jd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case $d:case tp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ep:case np:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mR(e){switch(e){case ss:case rv:return{byteLength:1,components:1};case Tl:case ov:case Al:return{byteLength:2,components:1};case Ed:case Td:return{byteLength:2,components:4};case Qa:case bd:case ws:return{byteLength:4,components:1};case lv:case cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function oE(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function vR(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],S=d[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++f,d[f]=S)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let S=d[p];e.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var _R=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yR=`#ifdef USE_ALPHAHASH
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
#endif`,xR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ER=`#ifdef USE_AOMAP
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
#endif`,TR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AR=`#ifdef USE_BATCHING
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
#endif`,wR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NR=`#ifdef USE_IRIDESCENCE
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
#endif`,UR=`#ifdef USE_BUMPMAP
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
#endif`,LR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VR=`#define PI 3.141592653589793
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
} // validated`,GR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kR=`vec3 transformedNormal = objectNormal;
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
#endif`,XR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZR="gl_FragColor = linearToOutputTexel( gl_FragColor );",KR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JR=`#ifdef USE_ENVMAP
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
#endif`,QR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,jR=`#ifdef USE_ENVMAP
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
#endif`,$R=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tC=`#ifdef USE_ENVMAP
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
#endif`,eC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aC=`#ifdef USE_GRADIENTMAP
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
}`,rC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cC=`uniform bool receiveShadow;
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
#endif`,uC=`#ifdef USE_ENVMAP
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
#endif`,hC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mC=`PhysicalMaterial material;
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
#endif`,gC=`struct PhysicalMaterial {
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
}`,vC=`
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
#endif`,_C=`#if defined( RE_IndirectDiffuse )
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
#endif`,yC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wC=`#if defined( USE_POINTS_UV )
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
#endif`,RC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LC=`#ifdef USE_MORPHTARGETS
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
#endif`,IC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HC=`#ifdef USE_NORMALMAP
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
#endif`,VC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$C=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n3=`float getShadowMask() {
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
}`,i3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s3=`#ifdef USE_SKINNING
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
#endif`,a3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r3=`#ifdef USE_SKINNING
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
#endif`,o3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h3=`#ifdef USE_TRANSMISSION
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
#endif`,f3=`#ifdef USE_TRANSMISSION
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
#endif`,d3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,v3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_3=`uniform sampler2D t2D;
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
}`,y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b3=`#include <common>
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
}`,E3=`#if DEPTH_PACKING == 3200
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
}`,T3=`#define DISTANCE
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
}`,A3=`#define DISTANCE
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
}`,w3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C3=`uniform float scale;
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
}`,D3=`uniform vec3 diffuse;
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
}`,N3=`#include <common>
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
}`,U3=`uniform vec3 diffuse;
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
}`,L3=`#define LAMBERT
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
}`,I3=`#define LAMBERT
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
}`,O3=`#define MATCAP
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
}`,P3=`#define MATCAP
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
}`,z3=`#define NORMAL
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
}`,B3=`#define NORMAL
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
}`,F3=`#define PHONG
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
}`,H3=`#define PHONG
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
}`,V3=`#define STANDARD
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
}`,G3=`#define STANDARD
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
}`,k3=`#define TOON
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
}`,X3=`#define TOON
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
}`,W3=`uniform float size;
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
}`,q3=`uniform vec3 diffuse;
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
}`,Y3=`#include <common>
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
}`,Z3=`uniform vec3 color;
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
}`,K3=`uniform float rotation;
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
}`,J3=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:_R,alphahash_pars_fragment:yR,alphamap_fragment:xR,alphamap_pars_fragment:SR,alphatest_fragment:MR,alphatest_pars_fragment:bR,aomap_fragment:ER,aomap_pars_fragment:TR,batching_pars_vertex:AR,batching_vertex:wR,begin_vertex:RR,beginnormal_vertex:CR,bsdfs:DR,iridescence_fragment:NR,bumpmap_pars_fragment:UR,clipping_planes_fragment:LR,clipping_planes_pars_fragment:IR,clipping_planes_pars_vertex:OR,clipping_planes_vertex:PR,color_fragment:zR,color_pars_fragment:BR,color_pars_vertex:FR,color_vertex:HR,common:VR,cube_uv_reflection_fragment:GR,defaultnormal_vertex:kR,displacementmap_pars_vertex:XR,displacementmap_vertex:WR,emissivemap_fragment:qR,emissivemap_pars_fragment:YR,colorspace_fragment:ZR,colorspace_pars_fragment:KR,envmap_fragment:JR,envmap_common_pars_fragment:QR,envmap_pars_fragment:jR,envmap_pars_vertex:$R,envmap_physical_pars_fragment:uC,envmap_vertex:tC,fog_vertex:eC,fog_pars_vertex:nC,fog_fragment:iC,fog_pars_fragment:sC,gradientmap_pars_fragment:aC,lightmap_pars_fragment:rC,lights_lambert_fragment:oC,lights_lambert_pars_fragment:lC,lights_pars_begin:cC,lights_toon_fragment:hC,lights_toon_pars_fragment:fC,lights_phong_fragment:dC,lights_phong_pars_fragment:pC,lights_physical_fragment:mC,lights_physical_pars_fragment:gC,lights_fragment_begin:vC,lights_fragment_maps:_C,lights_fragment_end:yC,logdepthbuf_fragment:xC,logdepthbuf_pars_fragment:SC,logdepthbuf_pars_vertex:MC,logdepthbuf_vertex:bC,map_fragment:EC,map_pars_fragment:TC,map_particle_fragment:AC,map_particle_pars_fragment:wC,metalnessmap_fragment:RC,metalnessmap_pars_fragment:CC,morphinstance_vertex:DC,morphcolor_vertex:NC,morphnormal_vertex:UC,morphtarget_pars_vertex:LC,morphtarget_vertex:IC,normal_fragment_begin:OC,normal_fragment_maps:PC,normal_pars_fragment:zC,normal_pars_vertex:BC,normal_vertex:FC,normalmap_pars_fragment:HC,clearcoat_normal_fragment_begin:VC,clearcoat_normal_fragment_maps:GC,clearcoat_pars_fragment:kC,iridescence_pars_fragment:XC,opaque_fragment:WC,packing:qC,premultiplied_alpha_fragment:YC,project_vertex:ZC,dithering_fragment:KC,dithering_pars_fragment:JC,roughnessmap_fragment:QC,roughnessmap_pars_fragment:jC,shadowmap_pars_fragment:$C,shadowmap_pars_vertex:t3,shadowmap_vertex:e3,shadowmask_pars_fragment:n3,skinbase_vertex:i3,skinning_pars_vertex:s3,skinning_vertex:a3,skinnormal_vertex:r3,specularmap_fragment:o3,specularmap_pars_fragment:l3,tonemapping_fragment:c3,tonemapping_pars_fragment:u3,transmission_fragment:h3,transmission_pars_fragment:f3,uv_pars_fragment:d3,uv_pars_vertex:p3,uv_vertex:m3,worldpos_vertex:g3,background_vert:v3,background_frag:_3,backgroundCube_vert:y3,backgroundCube_frag:x3,cube_vert:S3,cube_frag:M3,depth_vert:b3,depth_frag:E3,distanceRGBA_vert:T3,distanceRGBA_frag:A3,equirect_vert:w3,equirect_frag:R3,linedashed_vert:C3,linedashed_frag:D3,meshbasic_vert:N3,meshbasic_frag:U3,meshlambert_vert:L3,meshlambert_frag:I3,meshmatcap_vert:O3,meshmatcap_frag:P3,meshnormal_vert:z3,meshnormal_frag:B3,meshphong_vert:F3,meshphong_frag:H3,meshphysical_vert:V3,meshphysical_frag:G3,meshtoon_vert:k3,meshtoon_frag:X3,points_vert:W3,points_frag:q3,shadow_vert:Y3,shadow_frag:Z3,sprite_vert:K3,sprite_frag:J3},pt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Rs={basic:{uniforms:Hn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Hn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Hn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Hn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Hn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Hn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Hn([pt.points,pt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Hn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Hn([pt.common,pt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Hn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Hn([pt.sprite,pt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Hn([pt.common,pt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Hn([pt.lights,pt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Rs.physical={uniforms:Hn([Rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var ip={r:0,b:0,g:0},Gr=new ns,Q3=new He;function j3(e,t,n,i,s,a,r){let o=new Zt(0),l=a===!0?0:1,c,h,d=null,f=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:t).get(y)),y}function S(_){let y=!1,A=g(_);A===null?u(o,l):A&&A.isColor&&(u(A,1),y=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===gu)?(h===void 0&&(h=new Re(new Za(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Vr(Rs.backgroundCube.uniforms),vertexShader:Rs.backgroundCube.vertexShader,fragmentShader:Rs.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gr.copy(y.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Q3.makeRotationFromEuler(Gr)),h.material.toneMapped=ue.getTransfer(A.colorSpace)!==we,(d!==A||f!==A.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,p=e.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Re(new Fn(2,2),new oi({name:"BackgroundMaterial",uniforms:Vr(Rs.background.uniforms),vertexShader:Rs.background.vertexShader,fragmentShader:Rs.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ue.getTransfer(A.colorSpace)!==we,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,y){_.getRGB(ip,yv(e)),i.buffers.color.setClear(ip.r,ip.g,ip.b,y,r)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:S,addToRenderList:m,dispose:v}}function $3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(M,U,H,k,W){let J=!1,X=d(k,H,U);a!==X&&(a=X,c(a.object)),J=p(M,k,H,W),J&&g(M,k,H,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,y(M,U,H,k),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function d(M,U,H){let k=H.wireframe===!0,W=i[M.id];W===void 0&&(W={},i[M.id]=W);let J=W[U.id];J===void 0&&(J={},W[U.id]=J);let X=J[k];return X===void 0&&(X=f(l()),J[k]=X),X}function f(M){let U=[],H=[],k=[];for(let W=0;W<n;W++)U[W]=0,H[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,U,H,k){let W=a.attributes,J=U.attributes,X=0,st=H.getAttributes();for(let V in st)if(st[V].location>=0){let mt=W[V],Mt=J[V];if(Mt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),mt===void 0||mt.attribute!==Mt||Mt&&mt.data!==Mt.data)return!0;X++}return a.attributesNum!==X||a.index!==k}function g(M,U,H,k){let W={},J=U.attributes,X=0,st=H.getAttributes();for(let V in st)if(st[V].location>=0){let mt=J[V];mt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor));let Mt={};Mt.attribute=mt,mt&&mt.data&&(Mt.data=mt.data),W[V]=Mt,X++}a.attributes=W,a.attributesNum=X,a.index=k}function S(){let M=a.newAttributes;for(let U=0,H=M.length;U<H;U++)M[U]=0}function m(M){u(M,0)}function u(M,U){let H=a.newAttributes,k=a.enabledAttributes,W=a.attributeDivisors;H[M]=1,k[M]===0&&(e.enableVertexAttribArray(M),k[M]=1),W[M]!==U&&(e.vertexAttribDivisor(M,U),W[M]=U)}function v(){let M=a.newAttributes,U=a.enabledAttributes;for(let H=0,k=U.length;H<k;H++)U[H]!==M[H]&&(e.disableVertexAttribArray(H),U[H]=0)}function _(M,U,H,k,W,J,X){X===!0?e.vertexAttribIPointer(M,U,H,W,J):e.vertexAttribPointer(M,U,H,k,W,J)}function y(M,U,H,k){S();let W=k.attributes,J=H.getAttributes(),X=U.defaultAttributeValues;for(let st in J){let V=J[st];if(V.location>=0){let ct=W[st];if(ct===void 0&&(st==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),st==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){let mt=ct.normalized,Mt=ct.itemSize,zt=t.get(ct);if(zt===void 0)continue;let se=zt.buffer,le=zt.type,ae=zt.bytesPerElement,Z=le===e.INT||le===e.UNSIGNED_INT||ct.gpuType===bd;if(ct.isInterleavedBufferAttribute){let tt=ct.data,_t=tt.stride,Vt=ct.offset;if(tt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<V.locationSize;Ct++)u(V.location+Ct,tt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ct=0;Ct<V.locationSize;Ct++)m(V.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,se);for(let Ct=0;Ct<V.locationSize;Ct++)_(V.location+Ct,Mt/V.locationSize,le,mt,_t*ae,(Vt+Mt/V.locationSize*Ct)*ae,Z)}else{if(ct.isInstancedBufferAttribute){for(let tt=0;tt<V.locationSize;tt++)u(V.location+tt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let tt=0;tt<V.locationSize;tt++)m(V.location+tt);e.bindBuffer(e.ARRAY_BUFFER,se);for(let tt=0;tt<V.locationSize;tt++)_(V.location+tt,Mt/V.locationSize,le,mt,Mt*ae,Mt/V.locationSize*tt*ae,Z)}}else if(X!==void 0){let mt=X[st];if(mt!==void 0)switch(mt.length){case 2:e.vertexAttrib2fv(V.location,mt);break;case 3:e.vertexAttrib3fv(V.location,mt);break;case 4:e.vertexAttrib4fv(V.location,mt);break;default:e.vertexAttrib1fv(V.location,mt)}}}}v()}function A(){N();for(let M in i){let U=i[M];for(let H in U){let k=U[H];for(let W in k)h(k[W].object),delete k[W];delete U[H]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let H in U){let k=U[H];for(let W in k)h(k[W].object),delete k[W];delete U[H]}delete i[M.id]}function C(M){for(let U in i){let H=i[U];if(H[M.id]===void 0)continue;let k=H[M.id];for(let W in k)h(k[W].object),delete k[W];delete H[M.id]}}function N(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function tD(e,t,n){let i;function s(c){i=c}function a(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let S=0;S<d;S++)g+=h[S]*f[S];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function eD(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==ki&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let N=C===Al&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ss&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ws&&!N)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:w}}function nD(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Es,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let v=a?0:i,_=v*4,y=u.clippingState||null;l.value=y,y=h(g,f,_,p);for(let A=0;A!==_;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,g!==!0||m===null){let u=p+S*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,y=p;_!==S;++_,y+=4)r.copy(d[_]).applyMatrix4(v,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function iD(e){let t=new WeakMap;function n(r,o){return o===xd?r.mapping=Fr:o===Sd&&(r.mapping=Hr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===xd||o===Sd)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Qf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Dl=4,Bb=[.125,.215,.35,.446,.526,.582],Wr=20,bv=new fu,Fb=new Zt,Ev=null,Tv=0,Av=0,wv=!1,Xr=(1+Math.sqrt(5))/2,Cl=1/Xr,Hb=[new B(-Xr,Cl,0),new B(Xr,Cl,0),new B(-Cl,0,Xr),new B(Cl,0,Xr),new B(0,Xr,-Cl),new B(0,Xr,Cl),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],sD=new B,rp=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=sD}=a;Ev=this._renderer.getRenderTarget(),Tv=this._renderer.getActiveCubeFace(),Av=this._renderer.getActiveMipmapLevel(),wv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ev,Tv,Av),this._renderer.xr.enabled=wv,t.scissorTest=!1,sp(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Fr||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ev=this._renderer.getRenderTarget(),Tv=this._renderer.getActiveCubeFace(),Av=this._renderer.getActiveMipmapLevel(),wv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Al,format:ki,colorSpace:Lr,depthBuffer:!1},s=Vb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aD(a)),this._blurMaterial=rD(a,t,n)}return s}_compileMaterial(t){let n=new Re(this._lodPlanes[0],t);this._renderer.compile(n,bv)}_sceneToCubeUV(t,n,i,s,a){let l=new wn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Fb),d.toneMapping=sa,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let S=new Bn({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),m=new Re(new Za,S),u=!1,v=t.background;v?v.isColor&&(S.color.copy(v),t.background=null,u=!0):(S.color.copy(Fb),u=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[_],a.y,a.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[_],a.z)):(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[_]));let A=this._cubeSize;sp(s,y*A,_>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Fr||t.mapping===Hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Re(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;sp(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,bv)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Hb[(s-a-1)%Hb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Re(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),S=a/g,m=isFinite(a)?1+Math.floor(h*S):Wr;m>Wr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);let u=[],v=0;for(let C=0;C<Wr;++C){let N=C/S,E=Math.exp(-N*N/2);u.push(E),C===0?v+=E:C<m&&(v+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;let y=this._sizeLods[s],A=3*y*(s>_-Dl?s-_+Dl:0),w=4*(this._cubeSize-y);sp(n,A,w,3*y,2*y),l.setRenderTarget(n),l.render(d,bv)}};function aD(e){let t=[],n=[],i=[],s=e,a=e-Dl+1+Bb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Dl?l=Bb[r-e+Dl-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,S=3,m=2,u=1,v=new Float32Array(S*g*p),_=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,N=w>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];v.set(E,S*g*w),_.set(f,m*g*w);let M=[w,w,w,w,w,w];y.set(M,u*g*w)}let A=new Jn;A.setAttribute("position",new vn(v,S)),A.setAttribute("uv",new vn(_,m)),A.setAttribute("faceIndex",new vn(y,u)),t.push(A),s>Dl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Vb(e,t,n){let i=new Ts(e,t,n);return i.texture.mapping=gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sp(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function rD(e,t,n){let i=new Float32Array(Wr),s=new B(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zv(),fragmentShader:`

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
		`,blending:ia,depthTest:!1,depthWrite:!1})}function Gb(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zv(),fragmentShader:`

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
		`,blending:ia,depthTest:!1,depthWrite:!1})}function kb(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ia,depthTest:!1,depthWrite:!1})}function zv(){return`

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
	`}function oD(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===xd||l===Sd,h=l===Fr||l===Hr;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new rp(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new rp(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function lD(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&pl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cD(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,g=d.attributes.position,S=0;if(p!==null){let v=p.array;S=p.version;for(let _=0,y=v.length;_<y;_+=3){let A=v[_+0],w=v[_+1],C=v[_+2];f.push(A,w,w,C,C,A)}}else if(g!==void 0){let v=g.array;S=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let A=_+0,w=_+1,C=_+2;f.push(A,w,w,C,C,A)}}else return;let m=new(_v(f)?nu:eu)(f,1);m.version=S;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function h(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function uD(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,f*r,g),n.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(f,p,g,S){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,S,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v]*S[v];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function hD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function fD(e,t,n){let i=new WeakMap,s=new Ae;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),S===!0&&(_=3);let y=o.attributes.position.count*_,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*A*4*d),C=new tu(w,y,A,d);C.type=ws,C.needsUpdate=!0;let N=_*4;for(let M=0;M<d;M++){let U=m[M],H=u[M],k=v[M],W=y*A*4*M;for(let J=0;J<U.count;J++){let X=J*N;p===!0&&(s.fromBufferAttribute(U,J),w[W+X+0]=s.x,w[W+X+1]=s.y,w[W+X+2]=s.z,w[W+X+3]=0),g===!0&&(s.fromBufferAttribute(H,J),w[W+X+4]=s.x,w[W+X+5]=s.y,w[W+X+6]=s.z,w[W+X+7]=0),S===!0&&(s.fromBufferAttribute(k,J),w[W+X+8]=s.x,w[W+X+9]=s.y,w[W+X+10]=s.z,w[W+X+11]=k.itemSize===4?s.w:1)}}f={count:d,texture:C,size:new Kt(y,A)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function dD(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var lE=new ri,Xb=new ou(1,1),cE=new tu,uE=new Kf,hE=new su,Wb=[],qb=[],Yb=new Float32Array(16),Zb=new Float32Array(9),Kb=new Float32Array(4);function Ul(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Wb[s];if(a===void 0&&(a=new Float32Array(s),Wb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function cn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function un(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function lp(e,t){let n=qb[t];n===void 0&&(n=new Int32Array(t),qb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function pD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function mD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2fv(this.addr,t),un(n,t)}}function gD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(cn(n,t))return;e.uniform3fv(this.addr,t),un(n,t)}}function vD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4fv(this.addr,t),un(n,t)}}function _D(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;Kb.set(i),e.uniformMatrix2fv(this.addr,!1,Kb),un(n,i)}}function yD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;Zb.set(i),e.uniformMatrix3fv(this.addr,!1,Zb),un(n,i)}}function xD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),un(n,t)}else{if(cn(n,i))return;Yb.set(i),e.uniformMatrix4fv(this.addr,!1,Yb),un(n,i)}}function SD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function MD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2iv(this.addr,t),un(n,t)}}function bD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3iv(this.addr,t),un(n,t)}}function ED(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4iv(this.addr,t),un(n,t)}}function TD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function AD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2uiv(this.addr,t),un(n,t)}}function wD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3uiv(this.addr,t),un(n,t)}}function RD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4uiv(this.addr,t),un(n,t)}}function CD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Xb.compareFunction=mv,a=Xb):a=lE,n.setTexture2D(t||a,s)}function DD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||uE,s)}function ND(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||hE,s)}function UD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||cE,s)}function LD(e){switch(e){case 5126:return pD;case 35664:return mD;case 35665:return gD;case 35666:return vD;case 35674:return _D;case 35675:return yD;case 35676:return xD;case 5124:case 35670:return SD;case 35667:case 35671:return MD;case 35668:case 35672:return bD;case 35669:case 35673:return ED;case 5125:return TD;case 36294:return AD;case 36295:return wD;case 36296:return RD;case 35678:case 36198:case 36298:case 36306:case 35682:return CD;case 35679:case 36299:case 36307:return DD;case 35680:case 36300:case 36308:case 36293:return ND;case 36289:case 36303:case 36311:case 36292:return UD}}function ID(e,t){e.uniform1fv(this.addr,t)}function OD(e,t){let n=Ul(t,this.size,2);e.uniform2fv(this.addr,n)}function PD(e,t){let n=Ul(t,this.size,3);e.uniform3fv(this.addr,n)}function zD(e,t){let n=Ul(t,this.size,4);e.uniform4fv(this.addr,n)}function BD(e,t){let n=Ul(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function FD(e,t){let n=Ul(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function HD(e,t){let n=Ul(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function VD(e,t){e.uniform1iv(this.addr,t)}function GD(e,t){e.uniform2iv(this.addr,t)}function kD(e,t){e.uniform3iv(this.addr,t)}function XD(e,t){e.uniform4iv(this.addr,t)}function WD(e,t){e.uniform1uiv(this.addr,t)}function qD(e,t){e.uniform2uiv(this.addr,t)}function YD(e,t){e.uniform3uiv(this.addr,t)}function ZD(e,t){e.uniform4uiv(this.addr,t)}function KD(e,t,n){let i=this.cache,s=t.length,a=lp(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||lE,a[r])}function JD(e,t,n){let i=this.cache,s=t.length,a=lp(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||uE,a[r])}function QD(e,t,n){let i=this.cache,s=t.length,a=lp(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||hE,a[r])}function jD(e,t,n){let i=this.cache,s=t.length,a=lp(n,s);cn(i,a)||(e.uniform1iv(this.addr,a),un(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||cE,a[r])}function $D(e){switch(e){case 5126:return ID;case 35664:return OD;case 35665:return PD;case 35666:return zD;case 35674:return BD;case 35675:return FD;case 35676:return HD;case 5124:case 35670:return VD;case 35667:case 35671:return GD;case 35668:case 35672:return kD;case 35669:case 35673:return XD;case 5125:return WD;case 36294:return qD;case 36295:return YD;case 36296:return ZD;case 35678:case 36198:case 36298:case 36306:case 35682:return KD;case 35679:case 36299:case 36307:return JD;case 35680:case 36300:case 36308:case 36293:return QD;case 36289:case 36303:case 36311:case 36292:return jD}}var Cv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LD(n.type)}},Dv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$D(n.type)}},Nv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Rv=/(\w+)(\])?(\[|\.)?/g;function Jb(e,t){e.seq.push(t),e.map[t.id]=t}function tN(e,t,n){let i=e.name,s=i.length;for(Rv.lastIndex=0;;){let a=Rv.exec(i),r=Rv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Jb(n,c===void 0?new Cv(o,e,t):new Dv(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Nv(o),Jb(n,d)),n=d}}}var Nl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);tN(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Qb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var eN=37297,nN=0;function iN(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var jb=new Qt;function sN(e){ue._getMatrix(jb,ue.workingColorSpace,e);let t=`mat3( ${jb.elements.map(n=>n.toFixed(4))} )`;switch(ue.getTransfer(e)){case Qc:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function $b(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+iN(e.getShaderSource(t),o)}else return a}function aN(e,t){let n=sN(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function rN(e,t){let n;switch(t){case mb:n="Linear";break;case gb:n="Reinhard";break;case vb:n="Cineon";break;case yd:n="ACESFilmic";break;case yb:n="AgX";break;case xb:n="Neutral";break;case _b:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ap=new B;function oN(){ue.getLuminanceCoefficients(ap);let e=ap.x.toFixed(4),t=ap.y.toFixed(4),n=ap.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mu).join(`
`)}function cN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function uN(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Mu(e){return e!==""}function tE(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eE(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uv(e){return e.replace(hN,dN)}var fN=new Map;function dN(e,t){let n=jt[t];if(n===void 0){let i=fN.get(t);if(i!==void 0)n=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Uv(n)}var pN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nE(e){return e.replace(pN,mN)}function mN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function iE(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function gN(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ev?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===ZM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function vN(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Fr:case Hr:t="ENVMAP_TYPE_CUBE";break;case gu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _N(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Hr:t="ENVMAP_MODE_REFRACTION";break}return t}function yN(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case sv:t="ENVMAP_BLENDING_MULTIPLY";break;case db:t="ENVMAP_BLENDING_MIX";break;case pb:t="ENVMAP_BLENDING_ADD";break}return t}function xN(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function SN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=gN(n),c=vN(n),h=_N(n),d=yN(n),f=xN(n),p=lN(n),g=cN(a),S=s.createProgram(),m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Mu).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Mu).join(`
`),u.length>0&&(u+=`
`)):(m=[iE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mu).join(`
`),u=[iE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sa?"#define TONE_MAPPING":"",n.toneMapping!==sa?jt.tonemapping_pars_fragment:"",n.toneMapping!==sa?rN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,aN("linearToOutputTexel",n.outputColorSpace),oN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Mu).join(`
`)),r=Uv(r),r=tE(r,n),r=eE(r,n),o=Uv(o),o=tE(o,n),o=eE(o,n),r=nE(r),o=nE(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=v+m+r,y=v+u+o,A=Qb(s,s.VERTEX_SHADER,_),w=Qb(s,s.FRAGMENT_SHADER,y);s.attachShader(S,A),s.attachShader(S,w),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(U){if(e.debug.checkShaderErrors){let H=s.getProgramInfoLog(S)||"",k=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(w)||"",J=H.trim(),X=k.trim(),st=W.trim(),V=!0,ct=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,S,A,w);else{let mt=$b(s,A,"vertex"),Mt=$b(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+mt+`
`+Mt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(X===""||st==="")&&(ct=!1);ct&&(U.diagnostics={runnable:V,programLog:J,vertexShader:{log:X,prefix:m},fragmentShader:{log:st,prefix:u}})}s.deleteShader(A),s.deleteShader(w),N=new Nl(s,S),E=uN(s,S)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(S,eN)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nN++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=w,this}var MN=0,Lv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Iv(t),n.set(t,i)),i}},Iv=class{constructor(t){this.id=MN++,this.code=t,this.usedTimes=0}};function bN(e,t,n,i,s,a,r){let o=new vl,l=new Lv,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,U,H,k){let W=H.fog,J=k.geometry,X=E.isMeshStandardMaterial?H.environment:null,st=(E.isMeshStandardMaterial?n:t).get(E.envMap||X),V=st&&st.mapping===gu?st.image.height:null,ct=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=mt!==void 0?mt.length:0,zt=0;J.morphAttributes.position!==void 0&&(zt=1),J.morphAttributes.normal!==void 0&&(zt=2),J.morphAttributes.color!==void 0&&(zt=3);let se,le,ae,Z;if(ct){let ce=Rs[ct];se=ce.vertexShader,le=ce.fragmentShader}else se=E.vertexShader,le=E.fragmentShader,l.update(E),ae=l.getVertexShaderID(E),Z=l.getFragmentShaderID(E);let tt=e.getRenderTarget(),_t=e.state.buffers.depth.getReversed(),Vt=k.isInstancedMesh===!0,Ct=k.isBatchedMesh===!0,j=!!E.map,$t=!!E.matcap,D=!!st,he=!!E.aoMap,Bt=!!E.lightMap,Rt=!!E.bumpMap,yt=!!E.normalMap,Ce=!!E.displacementMap,xt=!!E.emissiveMap,Gt=!!E.metalnessMap,Be=!!E.roughnessMap,ge=E.anisotropy>0,T=E.clearcoat>0,x=E.dispersion>0,F=E.iridescence>0,Y=E.sheen>0,et=E.transmission>0,K=ge&&!!E.anisotropyMap,Et=T&&!!E.clearcoatMap,ot=T&&!!E.clearcoatNormalMap,bt=T&&!!E.clearcoatRoughnessMap,Tt=F&&!!E.iridescenceMap,at=F&&!!E.iridescenceThicknessMap,dt=Y&&!!E.sheenColorMap,It=Y&&!!E.sheenRoughnessMap,wt=!!E.specularMap,ht=!!E.specularColorMap,Yt=!!E.specularIntensityMap,O=et&&!!E.transmissionMap,rt=et&&!!E.thicknessMap,ut=!!E.gradientMap,St=!!E.alphaMap,it=E.alphaTest>0,$=!!E.alphaHash,At=!!E.extensions,Dt=sa;E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Dt=e.toneMapping);let xe={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:le,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&k._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&k.instanceColor!==null,instancingMorph:Vt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Lr,alphaToCoverage:!!E.alphaToCoverage,map:j,matcap:$t,envMap:D,envMapMode:D&&st.mapping,envMapCubeUVHeight:V,aoMap:he,lightMap:Bt,bumpMap:Rt,normalMap:yt,displacementMap:f&&Ce,emissiveMap:xt,normalMapObjectSpace:yt&&E.normalMapType===Eb,normalMapTangentSpace:yt&&E.normalMapType===pv,metalnessMap:Gt,roughnessMap:Be,anisotropy:ge,anisotropyMap:K,clearcoat:T,clearcoatMap:Et,clearcoatNormalMap:ot,clearcoatRoughnessMap:bt,dispersion:x,iridescence:F,iridescenceMap:Tt,iridescenceThicknessMap:at,sheen:Y,sheenColorMap:dt,sheenRoughnessMap:It,specularMap:wt,specularColorMap:ht,specularIntensityMap:Yt,transmission:et,transmissionMap:O,thicknessMap:rt,gradientMap:ut,opaque:E.transparent===!1&&E.blending===Nr&&E.alphaToCoverage===!1,alphaMap:St,alphaTest:it,alphaHash:$,combine:E.combine,mapUv:j&&S(E.map.channel),aoMapUv:he&&S(E.aoMap.channel),lightMapUv:Bt&&S(E.lightMap.channel),bumpMapUv:Rt&&S(E.bumpMap.channel),normalMapUv:yt&&S(E.normalMap.channel),displacementMapUv:Ce&&S(E.displacementMap.channel),emissiveMapUv:xt&&S(E.emissiveMap.channel),metalnessMapUv:Gt&&S(E.metalnessMap.channel),roughnessMapUv:Be&&S(E.roughnessMap.channel),anisotropyMapUv:K&&S(E.anisotropyMap.channel),clearcoatMapUv:Et&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:ot&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:at&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&S(E.sheenRoughnessMap.channel),specularMapUv:wt&&S(E.specularMap.channel),specularColorMapUv:ht&&S(E.specularColorMap.channel),specularIntensityMapUv:Yt&&S(E.specularIntensityMap.channel),transmissionMapUv:O&&S(E.transmissionMap.channel),thicknessMapUv:rt&&S(E.thicknessMap.channel),alphaMapUv:St&&S(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(yt||ge),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(j||St),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Dt,decodeVideoTexture:j&&E.map.isVideoTexture===!0&&ue.getTransfer(E.map.colorSpace)===we,decodeVideoTextureEmissive:xt&&E.emissiveMap.isVideoTexture===!0&&ue.getTransfer(E.emissiveMap.colorSpace)===we,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Dn,flipSided:E.side===Cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:At&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&E.extensions.multiDraw===!0||Ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function u(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(M,E),_(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let M=g[E.type],U;if(M){let H=Rs[M];U=Ob.clone(H.uniforms)}else U=E.uniforms;return U}function A(E,M){let U;for(let H=0,k=h.length;H<k;H++){let W=h[H];if(W.cacheKey===M){U=W,++U.usedTimes;break}}return U===void 0&&(U=new SN(e,M,E,a),h.push(U)),U}function w(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:N}}function EN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function TN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function sE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function aE(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,g,S,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:S,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=S,u.group=m),t++,u}function o(d,f,p,g,S,m){let u=r(d,f,p,g,S,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,g,S,m){let u=r(d,f,p,g,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||TN),i.length>1&&i.sort(f||sE),s.length>1&&s.sort(f||sE)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function AN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new aE,e.set(i,[r])):s>=a.length?(r=new aE,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function wN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new Zt};break;case"SpotLight":n={position:new B,direction:new B,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function RN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var CN=0;function DN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function NN(e){let t=new wN,n=RN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,a=new He,r=new He;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,S=0,m=0,u=0,v=0,_=0,y=0,A=0,w=0,C=0;c.sort(DN);for(let E=0,M=c.length;E<M;E++){let U=c[E],H=U.color,k=U.intensity,W=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=H.r*k,d+=H.g*k,f+=H.b*k;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],k);C++}else if(U.isDirectionalLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let st=U.shadow,V=n.get(U);V.shadowIntensity=st.intensity,V.shadowBias=st.bias,V.shadowNormalBias=st.normalBias,V.shadowRadius=st.radius,V.shadowMapSize=st.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=X,p++}else if(U.isSpotLight){let X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(H).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[S]=X;let st=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,st.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[S]=st.matrix,U.castShadow){let V=n.get(U);V.shadowIntensity=st.intensity,V.shadowBias=st.bias,V.shadowNormalBias=st.normalBias,V.shadowRadius=st.radius,V.shadowMapSize=st.mapSize,i.spotShadow[S]=V,i.spotShadowMap[S]=J,y++}S++}else if(U.isRectAreaLight){let X=t.get(U);X.color.copy(H).multiplyScalar(k),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=X,m++}else if(U.isPointLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){let st=U.shadow,V=n.get(U);V.shadowIntensity=st.intensity,V.shadowBias=st.bias,V.shadowNormalBias=st.normalBias,V.shadowRadius=st.radius,V.shadowMapSize=st.mapSize,V.shadowCameraNear=st.camera.near,V.shadowCameraFar=st.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=U.shadow.matrix,_++}i.point[g]=X,g++}else if(U.isHemisphereLight){let X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(k),X.groundColor.copy(U.groundColor).multiplyScalar(k),i.hemi[u]=X,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==S||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==v||N.numPointShadows!==_||N.numSpotShadows!==y||N.numSpotMaps!==A||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.directionalLength=p,N.pointLength=g,N.spotLength=S,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=v,N.numPointShadows=_,N.numSpotShadows=y,N.numSpotMaps=A,N.numLightProbes=C,i.version=CN++)}function l(c,h){let d=0,f=0,p=0,g=0,S=0,m=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){let _=c[u];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(_.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let y=i.hemi[S];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function rE(e){let t=new NN(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function UN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new rE(e),t.set(s,[o])):a>=r.length?(o=new rE(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var LN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IN=`uniform sampler2D shadow_pass;
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
}`;function ON(e,t,n){let i=new Sl,s=new Kt,a=new Kt,r=new Ae,o=new $f({depthPacking:bb}),l=new td,c={},h=n.maxTextureSize,d={[$s]:Cn,[Cn]:$s,[Dn]:Dn},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:LN,fragmentShader:IN}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Jn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ev;let u=this.type;this.render=function(w,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),H=e.state;H.setBlending(ia),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=u!==Gi&&this.type===Gi,W=u===Gi&&this.type!==Gi;for(let J=0,X=w.length;J<X;J++){let st=w[J],V=st.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ct=V.getFrameExtents();if(s.multiply(ct),a.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ct.x),s.x=a.x*ct.x,V.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ct.y),s.y=a.y*ct.y,V.mapSize.y=a.y)),V.map===null||k===!0||W===!0){let Mt=this.type!==Gi?{minFilter:_n,magFilter:_n}:{};V.map!==null&&V.map.dispose(),V.map=new Ts(s.x,s.y,Mt),V.map.texture.name=st.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();let mt=V.getViewportCount();for(let Mt=0;Mt<mt;Mt++){let zt=V.getViewport(Mt);r.set(a.x*zt.x,a.y*zt.y,a.x*zt.z,a.y*zt.w),H.viewport(r),V.updateMatrices(st,Mt),i=V.getFrustum(),y(C,N,V.camera,st,this.type)}V.isPointLightShadow!==!0&&this.type===Gi&&v(V,N),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,U)};function v(w,C){let N=t.update(S);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ts(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(C,null,N,f,S,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(C,null,N,p,S,null)}function _(w,C,N,E){let M=null,U=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)M=U;else if(M=N.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=M.uuid,k=C.uuid,W=c[H];W===void 0&&(W={},c[H]=W);let J=W[k];J===void 0&&(J=M.clone(),W[k]=J,C.addEventListener("dispose",A)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,E===Gi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=e.properties.get(M);H.light=N}return M}function y(w,C,N,E,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Gi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);let k=t.update(w),W=w.material;if(Array.isArray(W)){let J=k.groups;for(let X=0,st=J.length;X<st;X++){let V=J[X],ct=W[V.materialIndex];if(ct&&ct.visible){let mt=_(w,ct,E,M);w.onBeforeShadow(e,w,C,N,k,mt,V),e.renderBufferDirect(N,null,k,mt,w,V),w.onAfterShadow(e,w,C,N,k,mt,V)}}}else if(W.visible){let J=_(w,W,E,M);w.onBeforeShadow(e,w,C,N,k,J,null),e.renderBufferDirect(N,null,k,J,w,null),w.onAfterShadow(e,w,C,N,k,J,null)}}let H=w.children;for(let k=0,W=H.length;k<W;k++)y(H[k],C,N,E,M)}function A(w){w.target.removeEventListener("dispose",A);for(let N in c){let E=c[N],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var PN={[fd]:dd,[pd]:vd,[md]:_d,[Ur]:gd,[dd]:fd,[vd]:pd,[_d]:md,[gd]:Ur};function zN(e,t){function n(){let O=!1,rt=new Ae,ut=null,St=new Ae(0,0,0,0);return{setMask:function(it){ut!==it&&!O&&(e.colorMask(it,it,it,it),ut=it)},setLocked:function(it){O=it},setClear:function(it,$,At,Dt,xe){xe===!0&&(it*=Dt,$*=Dt,At*=Dt),rt.set(it,$,At,Dt),St.equals(rt)===!1&&(e.clearColor(it,$,At,Dt),St.copy(rt))},reset:function(){O=!1,ut=null,St.set(-1,0,0,0)}}}function i(){let O=!1,rt=!1,ut=null,St=null,it=null;return{setReversed:function($){if(rt!==$){let At=t.get("EXT_clip_control");$?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),rt=$;let Dt=it;it=null,this.setClear(Dt)}},getReversed:function(){return rt},setTest:function($){$?tt(e.DEPTH_TEST):_t(e.DEPTH_TEST)},setMask:function($){ut!==$&&!O&&(e.depthMask($),ut=$)},setFunc:function($){if(rt&&($=PN[$]),St!==$){switch($){case fd:e.depthFunc(e.NEVER);break;case dd:e.depthFunc(e.ALWAYS);break;case pd:e.depthFunc(e.LESS);break;case Ur:e.depthFunc(e.LEQUAL);break;case md:e.depthFunc(e.EQUAL);break;case gd:e.depthFunc(e.GEQUAL);break;case vd:e.depthFunc(e.GREATER);break;case _d:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}St=$}},setLocked:function($){O=$},setClear:function($){it!==$&&(rt&&($=1-$),e.clearDepth($),it=$)},reset:function(){O=!1,ut=null,St=null,it=null,rt=!1}}}function s(){let O=!1,rt=null,ut=null,St=null,it=null,$=null,At=null,Dt=null,xe=null;return{setTest:function(ce){O||(ce?tt(e.STENCIL_TEST):_t(e.STENCIL_TEST))},setMask:function(ce){rt!==ce&&!O&&(e.stencilMask(ce),rt=ce)},setFunc:function(ce,hn,je){(ut!==ce||St!==hn||it!==je)&&(e.stencilFunc(ce,hn,je),ut=ce,St=hn,it=je)},setOp:function(ce,hn,je){($!==ce||At!==hn||Dt!==je)&&(e.stencilOp(ce,hn,je),$=ce,At=hn,Dt=je)},setLocked:function(ce){O=ce},setClear:function(ce){xe!==ce&&(e.clearStencil(ce),xe=ce)},reset:function(){O=!1,rt=null,ut=null,St=null,it=null,$=null,At=null,Dt=null,xe=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,S=!1,m=null,u=null,v=null,_=null,y=null,A=null,w=null,C=new Zt(0,0,0),N=0,E=!1,M=null,U=null,H=null,k=null,W=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,st=0,V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=st>=1):V.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=st>=2);let ct=null,mt={},Mt=e.getParameter(e.SCISSOR_BOX),zt=e.getParameter(e.VIEWPORT),se=new Ae().fromArray(Mt),le=new Ae().fromArray(zt);function ae(O,rt,ut,St){let it=new Uint8Array(4),$=e.createTexture();e.bindTexture(O,$),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let At=0;At<ut;At++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(rt,0,e.RGBA,1,1,St,0,e.RGBA,e.UNSIGNED_BYTE,it):e.texImage2D(rt+At,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,it);return $}let Z={};Z[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(Ur),Rt(!1),yt(tv),tt(e.CULL_FACE),he(ia);function tt(O){h[O]!==!0&&(e.enable(O),h[O]=!0)}function _t(O){h[O]!==!1&&(e.disable(O),h[O]=!1)}function Vt(O,rt){return d[O]!==rt?(e.bindFramebuffer(O,rt),d[O]=rt,O===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=rt),O===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ct(O,rt){let ut=p,St=!1;if(O){ut=f.get(rt),ut===void 0&&(ut=[],f.set(rt,ut));let it=O.textures;if(ut.length!==it.length||ut[0]!==e.COLOR_ATTACHMENT0){for(let $=0,At=it.length;$<At;$++)ut[$]=e.COLOR_ATTACHMENT0+$;ut.length=it.length,St=!0}}else ut[0]!==e.BACK&&(ut[0]=e.BACK,St=!0);St&&e.drawBuffers(ut)}function j(O){return g!==O?(e.useProgram(O),g=O,!0):!1}let $t={[qa]:e.FUNC_ADD,[JM]:e.FUNC_SUBTRACT,[QM]:e.FUNC_REVERSE_SUBTRACT};$t[jM]=e.MIN,$t[$M]=e.MAX;let D={[tb]:e.ZERO,[eb]:e.ONE,[nb]:e.SRC_COLOR,[Vf]:e.SRC_ALPHA,[lb]:e.SRC_ALPHA_SATURATE,[rb]:e.DST_COLOR,[sb]:e.DST_ALPHA,[ib]:e.ONE_MINUS_SRC_COLOR,[Gf]:e.ONE_MINUS_SRC_ALPHA,[ob]:e.ONE_MINUS_DST_COLOR,[ab]:e.ONE_MINUS_DST_ALPHA,[cb]:e.CONSTANT_COLOR,[ub]:e.ONE_MINUS_CONSTANT_COLOR,[hb]:e.CONSTANT_ALPHA,[fb]:e.ONE_MINUS_CONSTANT_ALPHA};function he(O,rt,ut,St,it,$,At,Dt,xe,ce){if(O===ia){S===!0&&(_t(e.BLEND),S=!1);return}if(S===!1&&(tt(e.BLEND),S=!0),O!==KM){if(O!==m||ce!==E){if((u!==qa||y!==qa)&&(e.blendEquation(e.FUNC_ADD),u=qa,y=qa),ce)switch(O){case Nr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Br:e.blendFunc(e.ONE,e.ONE);break;case nv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case iv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Nr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Br:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case nv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,_=null,A=null,w=null,C.set(0,0,0),N=0,m=O,E=ce}return}it=it||rt,$=$||ut,At=At||St,(rt!==u||it!==y)&&(e.blendEquationSeparate($t[rt],$t[it]),u=rt,y=it),(ut!==v||St!==_||$!==A||At!==w)&&(e.blendFuncSeparate(D[ut],D[St],D[$],D[At]),v=ut,_=St,A=$,w=At),(Dt.equals(C)===!1||xe!==N)&&(e.blendColor(Dt.r,Dt.g,Dt.b,xe),C.copy(Dt),N=xe),m=O,E=!1}function Bt(O,rt){O.side===Dn?_t(e.CULL_FACE):tt(e.CULL_FACE);let ut=O.side===Cn;rt&&(ut=!ut),Rt(ut),O.blending===Nr&&O.transparent===!1?he(ia):he(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),a.setMask(O.colorWrite);let St=O.stencilWrite;o.setTest(St),St&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),xt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):_t(e.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(O){M!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),M=O)}function yt(O){O!==qM?(tt(e.CULL_FACE),O!==U&&(O===tv?e.cullFace(e.BACK):O===YM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):_t(e.CULL_FACE),U=O}function Ce(O){O!==H&&(X&&e.lineWidth(O),H=O)}function xt(O,rt,ut){O?(tt(e.POLYGON_OFFSET_FILL),(k!==rt||W!==ut)&&(e.polygonOffset(rt,ut),k=rt,W=ut)):_t(e.POLYGON_OFFSET_FILL)}function Gt(O){O?tt(e.SCISSOR_TEST):_t(e.SCISSOR_TEST)}function Be(O){O===void 0&&(O=e.TEXTURE0+J-1),ct!==O&&(e.activeTexture(O),ct=O)}function ge(O,rt,ut){ut===void 0&&(ct===null?ut=e.TEXTURE0+J-1:ut=ct);let St=mt[ut];St===void 0&&(St={type:void 0,texture:void 0},mt[ut]=St),(St.type!==O||St.texture!==rt)&&(ct!==ut&&(e.activeTexture(ut),ct=ut),e.bindTexture(O,rt||Z[O]),St.type=O,St.texture=rt)}function T(){let O=mt[ct];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{e.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{e.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{e.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{e.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{e.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{e.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{e.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{e.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(O){se.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function It(O){le.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),le.copy(O))}function wt(O,rt){let ut=c.get(rt);ut===void 0&&(ut=new WeakMap,c.set(rt,ut));let St=ut.get(O);St===void 0&&(St=e.getUniformBlockIndex(rt,O.name),ut.set(O,St))}function ht(O,rt){let St=c.get(rt).get(O);l.get(rt)!==St&&(e.uniformBlockBinding(rt,St,O.__bindingPointIndex),l.set(rt,St))}function Yt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},ct=null,mt={},d={},f=new WeakMap,p=[],g=null,S=!1,m=null,u=null,v=null,_=null,y=null,A=null,w=null,C=new Zt(0,0,0),N=0,E=!1,M=null,U=null,H=null,k=null,W=null,se.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:tt,disable:_t,bindFramebuffer:Vt,drawBuffers:Ct,useProgram:j,setBlending:he,setMaterial:Bt,setFlipSided:Rt,setCullFace:yt,setLineWidth:Ce,setPolygonOffset:xt,setScissorTest:Gt,activeTexture:Be,bindTexture:ge,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Tt,texImage3D:at,updateUBOMapping:wt,uniformBlockBinding:ht,texStorage2D:ot,texStorage3D:bt,texSubImage2D:Y,texSubImage3D:et,compressedTexSubImage2D:K,compressedTexSubImage3D:Et,scissor:dt,viewport:It,reset:Yt}}function BN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):$c("canvas")}function S(T,x,F){let Y=1,et=ge(T);if((et.width>F||et.height>F)&&(Y=F/Math.max(et.width,et.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let K=Math.floor(Y*et.width),Et=Math.floor(Y*et.height);d===void 0&&(d=g(K,Et));let ot=x?g(K,Et):d;return ot.width=K,ot.height=Et,ot.getContext("2d").drawImage(T,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+Et+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){e.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(T,x,F,Y,et=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=x;if(x===e.RED&&(F===e.FLOAT&&(K=e.R32F),F===e.HALF_FLOAT&&(K=e.R16F),F===e.UNSIGNED_BYTE&&(K=e.R8)),x===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.R8UI),F===e.UNSIGNED_SHORT&&(K=e.R16UI),F===e.UNSIGNED_INT&&(K=e.R32UI),F===e.BYTE&&(K=e.R8I),F===e.SHORT&&(K=e.R16I),F===e.INT&&(K=e.R32I)),x===e.RG&&(F===e.FLOAT&&(K=e.RG32F),F===e.HALF_FLOAT&&(K=e.RG16F),F===e.UNSIGNED_BYTE&&(K=e.RG8)),x===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RG8UI),F===e.UNSIGNED_SHORT&&(K=e.RG16UI),F===e.UNSIGNED_INT&&(K=e.RG32UI),F===e.BYTE&&(K=e.RG8I),F===e.SHORT&&(K=e.RG16I),F===e.INT&&(K=e.RG32I)),x===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGB8UI),F===e.UNSIGNED_SHORT&&(K=e.RGB16UI),F===e.UNSIGNED_INT&&(K=e.RGB32UI),F===e.BYTE&&(K=e.RGB8I),F===e.SHORT&&(K=e.RGB16I),F===e.INT&&(K=e.RGB32I)),x===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),F===e.UNSIGNED_INT&&(K=e.RGBA32UI),F===e.BYTE&&(K=e.RGBA8I),F===e.SHORT&&(K=e.RGBA16I),F===e.INT&&(K=e.RGBA32I)),x===e.RGB&&(F===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),x===e.RGBA){let Et=et?Qc:ue.getTransfer(Y);F===e.FLOAT&&(K=e.RGBA32F),F===e.HALF_FLOAT&&(K=e.RGBA16F),F===e.UNSIGNED_BYTE&&(K=Et===we?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(T,x){let F;return T?x===null||x===Qa||x===wl?F=e.DEPTH24_STENCIL8:x===ws?F=e.DEPTH32F_STENCIL8:x===Tl&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Qa||x===wl?F=e.DEPTH_COMPONENT24:x===ws?F=e.DEPTH_COMPONENT32F:x===Tl&&(F=e.DEPTH_COMPONENT16),F}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==Rn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){let x=T.target;x.removeEventListener("dispose",w),N(x),x.isVideoTexture&&h.delete(x)}function C(T){let x=T.target;x.removeEventListener("dispose",C),M(x)}function N(T){let x=i.get(T);if(x.__webglInit===void 0)return;let F=T.source,Y=f.get(F);if(Y){let et=Y[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(T),Object.keys(Y).length===0&&f.delete(F)}i.remove(T)}function E(T){let x=i.get(T);e.deleteTexture(x.__webglTexture);let F=T.source,Y=f.get(F);delete Y[x.__cacheKey],r.memory.textures--}function M(T){let x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let et=0;et<x.__webglFramebuffer[Y].length;et++)e.deleteFramebuffer(x.__webglFramebuffer[Y][et]);else e.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)e.deleteFramebuffer(x.__webglFramebuffer[Y]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=T.textures;for(let Y=0,et=F.length;Y<et;Y++){let K=i.get(F[Y]);K.__webglTexture&&(e.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(F[Y])}i.remove(T)}let U=0;function H(){U=0}function k(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function W(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function J(T,x){let F=i.get(T);if(T.isVideoTexture&&Gt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,T,x);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+x)}function X(T,x){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Z(F,T,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+x)}function st(T,x){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Z(F,T,x);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+x)}function V(T,x){let F=i.get(T);if(T.version>0&&F.__version!==T.version){tt(F,T,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+x)}let ct={[kf]:e.REPEAT,[Wa]:e.CLAMP_TO_EDGE,[Xf]:e.MIRRORED_REPEAT},mt={[_n]:e.NEAREST,[Sb]:e.NEAREST_MIPMAP_NEAREST,[vu]:e.NEAREST_MIPMAP_LINEAR,[Rn]:e.LINEAR,[Md]:e.LINEAR_MIPMAP_NEAREST,[is]:e.LINEAR_MIPMAP_LINEAR},Mt={[Tb]:e.NEVER,[Nb]:e.ALWAYS,[Ab]:e.LESS,[mv]:e.LEQUAL,[wb]:e.EQUAL,[Db]:e.GEQUAL,[Rb]:e.GREATER,[Cb]:e.NOTEQUAL};function zt(T,x){if(x.type===ws&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Rn||x.magFilter===Md||x.magFilter===vu||x.magFilter===is||x.minFilter===Rn||x.minFilter===Md||x.minFilter===vu||x.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,ct[x.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,ct[x.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,ct[x.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,mt[x.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_n||x.minFilter!==vu&&x.minFilter!==is||x.type===ws&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function se(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));let Y=x.source,et=f.get(Y);et===void 0&&(et={},f.set(Y,et));let K=W(x);if(K!==T.__cacheKey){et[K]===void 0&&(et[K]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),et[K].usedTimes++;let Et=et[T.__cacheKey];Et!==void 0&&(et[T.__cacheKey].usedTimes--,Et.usedTimes===0&&E(x)),T.__cacheKey=K,T.__webglTexture=et[K].texture}return F}function le(T,x,F){return Math.floor(Math.floor(T/F)/x)}function ae(T,x,F,Y){let K=T.updateRanges;if(K.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,F,Y,x.data);else{K.sort((at,dt)=>at.start-dt.start);let Et=0;for(let at=1;at<K.length;at++){let dt=K[Et],It=K[at],wt=dt.start+dt.count,ht=le(It.start,x.width,4),Yt=le(dt.start,x.width,4);It.start<=wt+1&&ht===Yt&&le(It.start+It.count-1,x.width,4)===ht?dt.count=Math.max(dt.count,It.start+It.count-dt.start):(++Et,K[Et]=It)}K.length=Et+1;let ot=e.getParameter(e.UNPACK_ROW_LENGTH),bt=e.getParameter(e.UNPACK_SKIP_PIXELS),Tt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let at=0,dt=K.length;at<dt;at++){let It=K[at],wt=Math.floor(It.start/4),ht=Math.ceil(It.count/4),Yt=wt%x.width,O=Math.floor(wt/x.width),rt=ht,ut=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,Yt,O,rt,ut,F,Y,x.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Tt)}}function Z(T,x,F){let Y=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=e.TEXTURE_3D);let et=se(T,x),K=x.source;n.bindTexture(Y,T.__webglTexture,e.TEXTURE0+F);let Et=i.get(K);if(K.version!==Et.__version||et===!0){n.activeTexture(e.TEXTURE0+F);let ot=ue.getPrimaries(ue.workingColorSpace),bt=x.colorSpace===aa?null:ue.getPrimaries(x.colorSpace),Tt=x.colorSpace===aa||ot===bt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let at=S(x.image,!1,s.maxTextureSize);at=Be(x,at);let dt=a.convert(x.format,x.colorSpace),It=a.convert(x.type),wt=_(x.internalFormat,dt,It,x.colorSpace,x.isVideoTexture);zt(Y,x);let ht,Yt=x.mipmaps,O=x.isVideoTexture!==!0,rt=Et.__version===void 0||et===!0,ut=K.dataReady,St=A(x,at);if(x.isDepthTexture)wt=y(x.format===Rl,x.type),rt&&(O?n.texStorage2D(e.TEXTURE_2D,1,wt,at.width,at.height):n.texImage2D(e.TEXTURE_2D,0,wt,at.width,at.height,0,dt,It,null));else if(x.isDataTexture)if(Yt.length>0){O&&rt&&n.texStorage2D(e.TEXTURE_2D,St,wt,Yt[0].width,Yt[0].height);for(let it=0,$=Yt.length;it<$;it++)ht=Yt[it],O?ut&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ht.width,ht.height,dt,It,ht.data):n.texImage2D(e.TEXTURE_2D,it,wt,ht.width,ht.height,0,dt,It,ht.data);x.generateMipmaps=!1}else O?(rt&&n.texStorage2D(e.TEXTURE_2D,St,wt,at.width,at.height),ut&&ae(x,at,dt,It)):n.texImage2D(e.TEXTURE_2D,0,wt,at.width,at.height,0,dt,It,at.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,wt,Yt[0].width,Yt[0].height,at.depth);for(let it=0,$=Yt.length;it<$;it++)if(ht=Yt[it],x.format!==ki)if(dt!==null)if(O){if(ut)if(x.layerUpdates.size>0){let At=Mv(ht.width,ht.height,x.format,x.type);for(let Dt of x.layerUpdates){let xe=ht.data.subarray(Dt*At/ht.data.BYTES_PER_ELEMENT,(Dt+1)*At/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,Dt,ht.width,ht.height,1,dt,xe)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,at.depth,dt,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,wt,ht.width,ht.height,at.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ut&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,at.depth,dt,It,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,it,wt,ht.width,ht.height,at.depth,0,dt,It,ht.data)}else{O&&rt&&n.texStorage2D(e.TEXTURE_2D,St,wt,Yt[0].width,Yt[0].height);for(let it=0,$=Yt.length;it<$;it++)ht=Yt[it],x.format!==ki?dt!==null?O?ut&&n.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,ht.width,ht.height,dt,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,it,wt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ut&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ht.width,ht.height,dt,It,ht.data):n.texImage2D(e.TEXTURE_2D,it,wt,ht.width,ht.height,0,dt,It,ht.data)}else if(x.isDataArrayTexture)if(O){if(rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,wt,at.width,at.height,at.depth),ut)if(x.layerUpdates.size>0){let it=Mv(at.width,at.height,x.format,x.type);for(let $ of x.layerUpdates){let At=at.data.subarray($*it/at.data.BYTES_PER_ELEMENT,($+1)*it/at.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,at.width,at.height,1,dt,It,At)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,dt,It,at.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,wt,at.width,at.height,at.depth,0,dt,It,at.data);else if(x.isData3DTexture)O?(rt&&n.texStorage3D(e.TEXTURE_3D,St,wt,at.width,at.height,at.depth),ut&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,dt,It,at.data)):n.texImage3D(e.TEXTURE_3D,0,wt,at.width,at.height,at.depth,0,dt,It,at.data);else if(x.isFramebufferTexture){if(rt)if(O)n.texStorage2D(e.TEXTURE_2D,St,wt,at.width,at.height);else{let it=at.width,$=at.height;for(let At=0;At<St;At++)n.texImage2D(e.TEXTURE_2D,At,wt,it,$,0,dt,It,null),it>>=1,$>>=1}}else if(Yt.length>0){if(O&&rt){let it=ge(Yt[0]);n.texStorage2D(e.TEXTURE_2D,St,wt,it.width,it.height)}for(let it=0,$=Yt.length;it<$;it++)ht=Yt[it],O?ut&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,dt,It,ht):n.texImage2D(e.TEXTURE_2D,it,wt,dt,It,ht);x.generateMipmaps=!1}else if(O){if(rt){let it=ge(at);n.texStorage2D(e.TEXTURE_2D,St,wt,it.width,it.height)}ut&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,It,at)}else n.texImage2D(e.TEXTURE_2D,0,wt,dt,It,at);m(x)&&u(Y),Et.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function tt(T,x,F){if(x.image.length!==6)return;let Y=se(T,x),et=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+F);let K=i.get(et);if(et.version!==K.__version||Y===!0){n.activeTexture(e.TEXTURE0+F);let Et=ue.getPrimaries(ue.workingColorSpace),ot=x.colorSpace===aa?null:ue.getPrimaries(x.colorSpace),bt=x.colorSpace===aa||Et===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,at=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!Tt&&!at?dt[$]=S(x.image[$],!0,s.maxCubemapSize):dt[$]=at?x.image[$].image:x.image[$],dt[$]=Be(x,dt[$]);let It=dt[0],wt=a.convert(x.format,x.colorSpace),ht=a.convert(x.type),Yt=_(x.internalFormat,wt,ht,x.colorSpace),O=x.isVideoTexture!==!0,rt=K.__version===void 0||Y===!0,ut=et.dataReady,St=A(x,It);zt(e.TEXTURE_CUBE_MAP,x);let it;if(Tt){O&&rt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,St,Yt,It.width,It.height);for(let $=0;$<6;$++){it=dt[$].mipmaps;for(let At=0;At<it.length;At++){let Dt=it[At];x.format!==ki?wt!==null?O?ut&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,At,0,0,Dt.width,Dt.height,wt,Dt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,At,Yt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,At,0,0,Dt.width,Dt.height,wt,ht,Dt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,At,Yt,Dt.width,Dt.height,0,wt,ht,Dt.data)}}}else{if(it=x.mipmaps,O&&rt){it.length>0&&St++;let $=ge(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,St,Yt,$.width,$.height)}for(let $=0;$<6;$++)if(at){O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,wt,ht,dt[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,dt[$].width,dt[$].height,0,wt,ht,dt[$].data);for(let At=0;At<it.length;At++){let xe=it[At].image[$].image;O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,At+1,0,0,xe.width,xe.height,wt,ht,xe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,At+1,Yt,xe.width,xe.height,0,wt,ht,xe.data)}}else{O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,wt,ht,dt[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,wt,ht,dt[$]);for(let At=0;At<it.length;At++){let Dt=it[At];O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,At+1,0,0,wt,ht,Dt.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,At+1,Yt,wt,ht,Dt.image[$])}}}m(x)&&u(e.TEXTURE_CUBE_MAP),K.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _t(T,x,F,Y,et,K){let Et=a.convert(F.format,F.colorSpace),ot=a.convert(F.type),bt=_(F.internalFormat,Et,ot,F.colorSpace),Tt=i.get(x),at=i.get(F);if(at.__renderTarget=x,!Tt.__hasExternalTextures){let dt=Math.max(1,x.width>>K),It=Math.max(1,x.height>>K);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,K,bt,dt,It,x.depth,0,Et,ot,null):n.texImage2D(et,K,bt,dt,It,0,Et,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),xt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,et,at.__webglTexture,0,Ce(x)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,et,at.__webglTexture,K),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Vt(T,x,F){if(e.bindRenderbuffer(e.RENDERBUFFER,T),x.depthBuffer){let Y=x.depthTexture,et=Y&&Y.isDepthTexture?Y.type:null,K=y(x.stencilBuffer,et),Et=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=Ce(x);xt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,K,x.width,x.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,K,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,K,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Et,e.RENDERBUFFER,T)}else{let Y=x.textures;for(let et=0;et<Y.length;et++){let K=Y[et],Et=a.convert(K.format,K.colorSpace),ot=a.convert(K.type),bt=_(K.internalFormat,Et,ot,K.colorSpace),Tt=Ce(x);F&&xt(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Tt,bt,x.width,x.height):xt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Tt,bt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,bt,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ct(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);let et=Y.__webglTexture,K=Ce(x);if(x.depthTexture.format===fl)xt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0);else if(x.depthTexture.format===Rl)xt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function j(T){let x=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",et)};Y.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=Y}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let Y=T.texture.mipmaps;Y&&Y.length>0?Ct(x.__webglFramebuffer[0],T):Ct(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=e.createRenderbuffer(),Vt(x.__webglDepthbuffer[Y],T,!1);else{let et=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,K)}}else{let Y=T.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Vt(x.__webglDepthbuffer,T,!1);else{let et=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,K)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function $t(T,x,F){let Y=i.get(T);x!==void 0&&_t(Y.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&j(T)}function D(T){let x=T.texture,F=i.get(T),Y=i.get(x);T.addEventListener("dispose",C);let et=T.textures,K=T.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=x.version,r.memory.textures++),K){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let bt=0;bt<x.mipmaps.length;bt++)F.__webglFramebuffer[ot][bt]=e.createFramebuffer()}else F.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(Et)for(let ot=0,bt=et.length;ot<bt;ot++){let Tt=i.get(et[ot]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&xt(T)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<et.length;ot++){let bt=et[ot];F.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);let Tt=a.convert(bt.format,bt.colorSpace),at=a.convert(bt.type),dt=_(bt.internalFormat,Tt,at,bt.colorSpace,T.isXRRenderTarget===!0),It=Ce(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,It,dt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Vt(F.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(K){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(e.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)_t(F.__webglFramebuffer[ot][bt],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt);else _t(F.__webglFramebuffer[ot],T,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Et){for(let ot=0,bt=et.length;ot<bt;ot++){let Tt=et[ot],at=i.get(Tt),dt=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(dt,at.__webglTexture),zt(dt,Tt),_t(F.__webglFramebuffer,T,Tt,e.COLOR_ATTACHMENT0+ot,dt,0),m(Tt)&&u(dt)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,Y.__webglTexture),zt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)_t(F.__webglFramebuffer[bt],T,x,e.COLOR_ATTACHMENT0,ot,bt);else _t(F.__webglFramebuffer,T,x,e.COLOR_ATTACHMENT0,ot,0);m(x)&&u(ot),n.unbindTexture()}T.depthBuffer&&j(T)}function he(T){let x=T.textures;for(let F=0,Y=x.length;F<Y;F++){let et=x[F];if(m(et)){let K=v(T),Et=i.get(et).__webglTexture;n.bindTexture(K,Et),u(K),n.unbindTexture()}}}let Bt=[],Rt=[];function yt(T){if(T.samples>0){if(xt(T)===!1){let x=T.textures,F=T.width,Y=T.height,et=e.COLOR_BUFFER_BIT,K=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Et=i.get(T),ot=x.length>1;if(ot)for(let Tt=0;Tt<x.length;Tt++)n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let bt=T.texture.mipmaps;bt&&bt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Tt=0;Tt<x.length;Tt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);let at=i.get(x[Tt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,at,0)}e.blitFramebuffer(0,0,F,Y,0,0,F,Y,et,e.NEAREST),l===!0&&(Bt.length=0,Rt.length=0,Bt.push(e.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Bt.push(K),Rt.push(K),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Rt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Bt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let Tt=0;Tt<x.length;Tt++){n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);let at=i.get(x[Tt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,at,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Ce(T){return Math.min(s.maxSamples,T.samples)}function xt(T){let x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Gt(T){let x=r.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Be(T,x){let F=T.colorSpace,Y=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Lr&&F!==aa&&(ue.getTransfer(F)===we?(Y!==ki||et!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=st,this.setTextureCube=V,this.rebindTextures=$t,this.setupRenderTarget=D,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=xt}function FN(e,t){function n(i,s=aa){let a,r=ue.getTransfer(s);if(i===ss)return e.UNSIGNED_BYTE;if(i===Ed)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Td)return e.UNSIGNED_SHORT_5_5_5_1;if(i===lv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===cv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===rv)return e.BYTE;if(i===ov)return e.SHORT;if(i===Tl)return e.UNSIGNED_SHORT;if(i===bd)return e.INT;if(i===Qa)return e.UNSIGNED_INT;if(i===ws)return e.FLOAT;if(i===Al)return e.HALF_FLOAT;if(i===uv)return e.ALPHA;if(i===hv)return e.RGB;if(i===ki)return e.RGBA;if(i===fl)return e.DEPTH_COMPONENT;if(i===Rl)return e.DEPTH_STENCIL;if(i===fv)return e.RED;if(i===Ad)return e.RED_INTEGER;if(i===dv)return e.RG;if(i===wd)return e.RG_INTEGER;if(i===Rd)return e.RGBA_INTEGER;if(i===_u||i===yu||i===xu||i===Su)if(r===we)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===_u)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===_u)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Su)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cd||i===Dd||i===Nd||i===Ud)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Cd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ud)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld||i===Id||i===Od)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ld||i===Id)return r===we?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Od)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pd||i===zd||i===Bd||i===Fd||i===Hd||i===Vd||i===Gd||i===kd||i===Xd||i===Wd||i===qd||i===Yd||i===Zd||i===Kd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Pd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jd||i===Qd||i===jd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Jd)return r===we?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$d||i===tp||i===ep||i===np)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===$d)return a.COMPRESSED_RED_RGTC1_EXT;if(i===tp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ep)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===np)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var HN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VN=`
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

}`,Ov=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new lu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new oi({vertexShader:HN,fragmentShader:VN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Re(new Fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pv=class extends ta{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,S=typeof XRWebGLBinding<"u",m=new Ov,u={},v=n.getContextAttributes(),_=null,y=null,A=[],w=[],C=new Kt,N=null,E=new wn;E.viewport=new Ae;let M=new wn;M.viewport=new Ae;let U=[E,M],H=new hd,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=A[Z];return tt===void 0&&(tt=new _l,A[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=A[Z];return tt===void 0&&(tt=new _l,A[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=A[Z];return tt===void 0&&(tt=new _l,A[Z]=tt),tt.getHandSpace()};function J(Z){let tt=w.indexOf(Z.inputSource);if(tt===-1)return;let _t=A[tt];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||r),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",st);for(let Z=0;Z<A.length;Z++){let tt=w[Z];tt!==null&&(w[Z]=null,A[Z].disconnect(tt))}k=null,W=null,m.reset();for(let Z in u)delete u[Z];t.setRenderTarget(_),p=null,f=null,d=null,s=null,y=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await n.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Vt=null,Ct=null;v.depth&&(Ct=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_t=v.stencil?Rl:fl,Vt=v.stencil?wl:Qa);let j={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(j),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ts(f.textureWidth,f.textureHeight,{format:ki,type:ss,depthTexture:new ou(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,_t),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ts(p.framebufferWidth,p.framebufferHeight,{format:ki,type:ss,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Z){for(let tt=0;tt<Z.removed.length;tt++){let _t=Z.removed[tt],Vt=w.indexOf(_t);Vt>=0&&(w[Vt]=null,A[Vt].disconnect(_t))}for(let tt=0;tt<Z.added.length;tt++){let _t=Z.added[tt],Vt=w.indexOf(_t);if(Vt===-1){for(let j=0;j<A.length;j++)if(j>=w.length){w.push(_t),Vt=j;break}else if(w[j]===null){w[j]=_t,Vt=j;break}if(Vt===-1)break}let Ct=A[Vt];Ct&&Ct.connect(_t)}}let V=new B,ct=new B;function mt(Z,tt,_t){V.setFromMatrixPosition(tt.matrixWorld),ct.setFromMatrixPosition(_t.matrixWorld);let Vt=V.distanceTo(ct),Ct=tt.projectionMatrix.elements,j=_t.projectionMatrix.elements,$t=Ct[14]/(Ct[10]-1),D=Ct[14]/(Ct[10]+1),he=(Ct[9]+1)/Ct[5],Bt=(Ct[9]-1)/Ct[5],Rt=(Ct[8]-1)/Ct[0],yt=(j[8]+1)/j[0],Ce=$t*Rt,xt=$t*yt,Gt=Vt/(-Rt+yt),Be=Gt*-Rt;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Be),Z.translateZ(Gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ct[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let ge=$t+Gt,T=D+Gt,x=Ce-Be,F=xt+(Vt-Be),Y=he*D/T*ge,et=Bt*D/T*ge;Z.projectionMatrix.makePerspective(x,F,Y,et,ge,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Mt(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let tt=Z.near,_t=Z.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),H.near=M.near=E.near=tt,H.far=M.far=E.far=_t,(k!==H.near||W!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),k=H.near,W=H.far),H.layers.mask=Z.layers.mask|6,E.layers.mask=H.layers.mask&3,M.layers.mask=H.layers.mask&5;let Vt=Z.parent,Ct=H.cameras;Mt(H,Vt);for(let j=0;j<Ct.length;j++)Mt(Ct[j],Vt);Ct.length===2?mt(H,E,M):H.projectionMatrix.copy(E.projectionMatrix),zt(Z,H,Vt)};function zt(Z,tt,_t){_t===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=dl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return u[Z]};let se=null;function le(Z,tt){if(h=tt.getViewerPose(c||r),g=tt,h!==null){let _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Vt=!1;_t.length!==H.cameras.length&&(H.cameras.length=0,Vt=!0);for(let D=0;D<_t.length;D++){let he=_t[D],Bt=null;if(p!==null)Bt=p.getViewport(he);else{let yt=d.getViewSubImage(f,he);Bt=yt.viewport,D===0&&(t.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(y))}let Rt=U[D];Rt===void 0&&(Rt=new wn,Rt.layers.enable(D),Rt.viewport=new Ae,U[D]=Rt),Rt.matrix.fromArray(he.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(he.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),D===0&&(H.matrix.copy(Rt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Vt===!0&&H.cameras.push(Rt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let D=d.getDepthInformation(_t[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Ct&&Ct.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<_t.length;D++){let he=_t[D].camera;if(he){let Bt=u[he];Bt||(Bt=new lu,u[he]=Bt);let Rt=d.getCameraImage(he);Bt.sourceTexture=Rt}}}}for(let _t=0;_t<A.length;_t++){let Vt=w[_t],Ct=A[_t];Vt!==null&&Ct!==void 0&&Ct.update(Vt,tt,c||r)}se&&se(Z,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ae=new oE;ae.setAnimationLoop(le),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}},kr=new ns,GN=new He;function kN(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,yv(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,v,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(a(m,u),g(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),S(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Cn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Cn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let v=t.get(u),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,kr.copy(y),kr.x*=-1,kr.y*=-1,kr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),m.envMapRotation.value.setFromMatrix4(GN.makeRotationFromEuler(kr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Cn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let v=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function XN(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let A=_.program;i.updateUBOMapping(v,A);let w=t.render.frame;a[v.id]!==w&&(f(v),a[v.id]=w)}function h(v){let _=d();v.__bindingPointIndex=_;let y=e.createBuffer(),A=v.__size,w=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,A,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=s[v.id],y=v.uniforms,A=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let w=0,C=y.length;w<C;w++){let N=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,M=N.length;E<M;E++){let U=N[E];if(p(U,w,E,A)===!0){let H=U.__offset,k=Array.isArray(U.value)?U.value:[U.value],W=0;for(let J=0;J<k.length;J++){let X=k[J],st=S(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,H+W,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,W),W+=st.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,_,y,A){let w=v.value,C=_+"_"+y;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{let N=A[C];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return A[C]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(v){let _=v.uniforms,y=0,A=16;for(let C=0,N=_.length;C<N;C++){let E=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,U=E.length;M<U;M++){let H=E[M],k=Array.isArray(H.value)?H.value:[H.value];for(let W=0,J=k.length;W<J;W++){let X=k[W],st=S(X),V=y%A,ct=V%st.boundary,mt=V+ct;y+=ct,mt!==0&&A-mt<st.storage&&(y+=A-mt),H.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=st.storage}}}let w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function S(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function u(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var op=class{constructor(t={}){let{canvas:n=Ub(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),S=new Int32Array(4),m=null,u=null,v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=ln;let w=0,C=0,N=null,E=-1,M=null,U=new Ae,H=new Ae,k=null,W=new Zt(0),J=0,X=n.width,st=n.height,V=1,ct=null,mt=null,Mt=new Ae(0,0,X,st),zt=new Ae(0,0,X,st),se=!1,le=new Sl,ae=!1,Z=!1,tt=new He,_t=new B,Vt=new Ae,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function $t(){return N===null?V:1}let D=i;function he(b,z){return n.getContext(b,z)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ut,!1),n.addEventListener("webglcontextrestored",St,!1),n.addEventListener("webglcontextcreationerror",it,!1),D===null){let z="webgl2";if(D=he(z,b),D===null)throw he(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,Rt,yt,Ce,xt,Gt,Be,ge,T,x,F,Y,et,K,Et,ot,bt,Tt,at,dt,It,wt,ht,Yt;function O(){Bt=new lD(D),Bt.init(),wt=new FN(D,Bt),Rt=new eD(D,Bt,t,wt),yt=new zN(D,Bt),Rt.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),Ce=new hD(D),xt=new EN,Gt=new BN(D,Bt,yt,xt,Rt,wt,Ce),Be=new iD(y),ge=new oD(y),T=new vR(D),ht=new $3(D,T),x=new cD(D,T,Ce,ht),F=new dD(D,x,T,Ce),at=new fD(D,Rt,Gt),ot=new nD(xt),Y=new bN(y,Be,ge,Bt,Rt,ht,ot),et=new kN(y,xt),K=new AN,Et=new UN(Bt),Tt=new j3(y,Be,ge,yt,F,p,l),bt=new ON(y,F,Rt),Yt=new XN(D,Ce,Rt,yt),dt=new tD(D,Bt,Ce),It=new uD(D,Bt,Ce),Ce.programs=Y.programs,y.capabilities=Rt,y.extensions=Bt,y.properties=xt,y.renderLists=K,y.shadowMap=bt,y.state=yt,y.info=Ce}O();let rt=new Pv(y,D);this.xr=rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(X,st,!1))},this.getSize=function(b){return b.set(X,st)},this.setSize=function(b,z,L=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,st=z,n.width=Math.floor(b*V),n.height=Math.floor(z*V),L===!0&&(n.style.width=b+"px",n.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(X*V,st*V).floor()},this.setDrawingBufferSize=function(b,z,L){X=b,st=z,V=L,n.width=Math.floor(b*L),n.height=Math.floor(z*L),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,z,L,P){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,z,L,P),yt.viewport(U.copy(Mt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,z,L,P){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,z,L,P),yt.scissor(H.copy(zt).multiplyScalar(V).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){yt.setScissorTest(se=b)},this.setOpaqueSort=function(b){ct=b},this.setTransparentSort=function(b){mt=b},this.getClearColor=function(b){return b.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,L=!0){let P=0;if(b){let I=!1;if(N!==null){let nt=N.texture.format;I=nt===Rd||nt===wd||nt===Ad}if(I){let nt=N.texture.type,lt=nt===ss||nt===Qa||nt===Tl||nt===wl||nt===Ed||nt===Td,vt=Tt.getClearColor(),gt=Tt.getClearAlpha(),Ut=vt.r,kt=vt.g,Lt=vt.b;lt?(g[0]=Ut,g[1]=kt,g[2]=Lt,g[3]=gt,D.clearBufferuiv(D.COLOR,0,g)):(S[0]=Ut,S[1]=kt,S[2]=Lt,S[3]=gt,D.clearBufferiv(D.COLOR,0,S))}else P|=D.COLOR_BUFFER_BIT}z&&(P|=D.DEPTH_BUFFER_BIT),L&&(P|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",St,!1),n.removeEventListener("webglcontextcreationerror",it,!1),Tt.dispose(),K.dispose(),Et.dispose(),xt.dispose(),Be.dispose(),ge.dispose(),F.dispose(),ht.dispose(),Yt.dispose(),Y.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",je),rt.removeEventListener("sessionend",Il),as.stop()};function ut(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=Ce.autoReset,z=bt.enabled,L=bt.autoUpdate,P=bt.needsUpdate,I=bt.type;O(),Ce.autoReset=b,bt.enabled=z,bt.autoUpdate=L,bt.needsUpdate=P,bt.type=I}function it(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $(b){let z=b.target;z.removeEventListener("dispose",$),At(z)}function At(b){Dt(b),xt.remove(b)}function Dt(b){let z=xt.get(b).programs;z!==void 0&&(z.forEach(function(L){Y.releaseProgram(L)}),b.isShaderMaterial&&Y.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,L,P,I,nt){z===null&&(z=Ct);let lt=I.isMesh&&I.matrixWorld.determinant()<0,vt=ee(b,z,L,P,I);yt.setMaterial(P,lt);let gt=L.index,Ut=1;if(P.wireframe===!0){if(gt=x.getWireframeAttribute(L),gt===void 0)return;Ut=2}let kt=L.drawRange,Lt=L.attributes.position,Wt=kt.start*Ut,ve=(kt.start+kt.count)*Ut;nt!==null&&(Wt=Math.max(Wt,nt.start*Ut),ve=Math.min(ve,(nt.start+nt.count)*Ut)),gt!==null?(Wt=Math.max(Wt,0),ve=Math.min(ve,gt.count)):Lt!=null&&(Wt=Math.max(Wt,0),ve=Math.min(ve,Lt.count));let Ve=ve-Wt;if(Ve<0||Ve===1/0)return;ht.setup(I,P,vt,L,gt);let _e,Se=dt;if(gt!==null&&(_e=T.get(gt),Se=It,Se.setIndex(_e)),I.isMesh)P.wireframe===!0?(yt.setLineWidth(P.wireframeLinewidth*$t()),Se.setMode(D.LINES)):Se.setMode(D.TRIANGLES);else if(I.isLine){let Pt=P.linewidth;Pt===void 0&&(Pt=1),yt.setLineWidth(Pt*$t()),I.isLineSegments?Se.setMode(D.LINES):I.isLineLoop?Se.setMode(D.LINE_LOOP):Se.setMode(D.LINE_STRIP)}else I.isPoints?Se.setMode(D.POINTS):I.isSprite&&Se.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)pl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Se.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Pt=I._multiDrawStarts,Xe=I._multiDrawCounts,fe=I._multiDrawCount,ui=gt?T.get(gt).bytesPerElement:1,Yr=xt.get(P).currentProgram.getUniforms();for(let hi=0;hi<fe;hi++)Yr.setValue(D,"_gl_DrawID",hi),Se.render(Pt[hi]/ui,Xe[hi])}else if(I.isInstancedMesh)Se.renderInstances(Wt,Ve,I.count);else if(L.isInstancedBufferGeometry){let Pt=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,Xe=Math.min(L.instanceCount,Pt);Se.renderInstances(Wt,Ve,Xe)}else Se.render(Wt,Ve)};function xe(b,z,L){b.transparent===!0&&b.side===Dn&&b.forceSinglePass===!1?(b.side=Cn,b.needsUpdate=!0,Ft(b,z,L),b.side=$s,b.needsUpdate=!0,Ft(b,z,L),b.side=Dn):Ft(b,z,L)}this.compile=function(b,z,L=null){L===null&&(L=b),u=Et.get(L),u.init(z),_.push(u),L.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),b!==L&&b.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();let P=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let nt=I.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){let vt=nt[lt];xe(vt,L,I),P.add(vt)}else xe(nt,L,I),P.add(nt)}),u=_.pop(),P},this.compileAsync=function(b,z,L=null){let P=this.compile(b,z,L);return new Promise(I=>{function nt(){if(P.forEach(function(lt){xt.get(lt).currentProgram.isReady()&&P.delete(lt)}),P.size===0){I(b);return}setTimeout(nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ce=null;function hn(b){ce&&ce(b)}function je(){as.stop()}function Il(){as.start()}let as=new oE;as.setAnimationLoop(hn),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(b){ce=b,rt.setAnimationLoop(b),b===null?as.stop():as.start()},rt.addEventListener("sessionstart",je),rt.addEventListener("sessionend",Il),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(z),z=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,z,N),u=Et.get(b,_.length),u.init(z),_.push(u),tt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),le.setFromProjectionMatrix(tt,es,z.reversedDepth),Z=this.localClippingEnabled,ae=ot.init(this.clippingPlanes,Z),m=K.get(b,v.length),m.init(),v.push(m),rt.enabled===!0&&rt.isPresenting===!0){let nt=y.xr.getDepthSensingMesh();nt!==null&&qr(nt,z,-1/0,y.sortObjects)}qr(b,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ct,mt),j=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,j&&Tt.addToRenderList(m,b),this.info.render.frame++,ae===!0&&ot.beginShadows();let L=u.state.shadowsArray;bt.render(L,b,z),ae===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let P=m.opaque,I=m.transmissive;if(u.setupLights(),z.isArrayCamera){let nt=z.cameras;if(I.length>0)for(let lt=0,vt=nt.length;lt<vt;lt++){let gt=nt[lt];q(P,I,b,gt)}j&&Tt.render(b);for(let lt=0,vt=nt.length;lt<vt;lt++){let gt=nt[lt];Ol(m,b,gt,gt.viewport)}}else I.length>0&&q(P,I,b,z),j&&Tt.render(b),Ol(m,b,z);N!==null&&C===0&&(Gt.updateMultisampleRenderTarget(N),Gt.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(y,b,z),ht.resetDefaultState(),E=-1,M=null,_.pop(),_.length>0?(u=_[_.length-1],ae===!0&&ot.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function qr(b,z,L,P){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)L=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||le.intersectsSprite(b)){P&&Vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);let lt=F.update(b),vt=b.material;vt.visible&&m.push(b,lt,vt,L,Vt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||le.intersectsObject(b))){let lt=F.update(b),vt=b.material;if(P&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Vt.copy(b.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Vt.copy(lt.boundingSphere.center)),Vt.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(vt)){let gt=lt.groups;for(let Ut=0,kt=gt.length;Ut<kt;Ut++){let Lt=gt[Ut],Wt=vt[Lt.materialIndex];Wt&&Wt.visible&&m.push(b,lt,Wt,L,Vt.z,Lt)}}else vt.visible&&m.push(b,lt,vt,L,Vt.z,null)}}let nt=b.children;for(let lt=0,vt=nt.length;lt<vt;lt++)qr(nt[lt],z,L,P)}function Ol(b,z,L,P){let I=b.opaque,nt=b.transmissive,lt=b.transparent;u.setupLightsView(L),ae===!0&&ot.setGlobalState(y.clippingPlanes,L),P&&yt.viewport(U.copy(P)),I.length>0&&ft(I,z,L),nt.length>0&&ft(nt,z,L),lt.length>0&&ft(lt,z,L),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function q(b,z,L,P){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[P.id]===void 0&&(u.state.transmissionRenderTarget[P.id]=new Ts(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Al:ss,minFilter:is,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));let nt=u.state.transmissionRenderTarget[P.id],lt=P.viewport||U;nt.setSize(lt.z*y.transmissionResolutionScale,lt.w*y.transmissionResolutionScale);let vt=y.getRenderTarget(),gt=y.getActiveCubeFace(),Ut=y.getActiveMipmapLevel();y.setRenderTarget(nt),y.getClearColor(W),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),j&&Tt.render(L);let kt=y.toneMapping;y.toneMapping=sa;let Lt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),u.setupLightsView(P),ae===!0&&ot.setGlobalState(y.clippingPlanes,P),ft(b,L,P),Gt.updateMultisampleRenderTarget(nt),Gt.updateRenderTargetMipmap(nt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ve=0,Ve=z.length;ve<Ve;ve++){let _e=z[ve],Se=_e.object,Pt=_e.geometry,Xe=_e.material,fe=_e.group;if(Xe.side===Dn&&Se.layers.test(P.layers)){let ui=Xe.side;Xe.side=Cn,Xe.needsUpdate=!0,Nt(Se,L,P,Pt,Xe,fe),Xe.side=ui,Xe.needsUpdate=!0,Wt=!0}}Wt===!0&&(Gt.updateMultisampleRenderTarget(nt),Gt.updateRenderTargetMipmap(nt))}y.setRenderTarget(vt,gt,Ut),y.setClearColor(W,J),Lt!==void 0&&(P.viewport=Lt),y.toneMapping=kt}function ft(b,z,L){let P=z.isScene===!0?z.overrideMaterial:null;for(let I=0,nt=b.length;I<nt;I++){let lt=b[I],vt=lt.object,gt=lt.geometry,Ut=lt.group,kt=lt.material;kt.allowOverride===!0&&P!==null&&(kt=P),vt.layers.test(L.layers)&&Nt(vt,z,L,gt,kt,Ut)}}function Nt(b,z,L,P,I,nt){b.onBeforeRender(y,z,L,P,I,nt),b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(y,z,L,P,b,nt),I.transparent===!0&&I.side===Dn&&I.forceSinglePass===!1?(I.side=Cn,I.needsUpdate=!0,y.renderBufferDirect(L,z,P,I,b,nt),I.side=$s,I.needsUpdate=!0,y.renderBufferDirect(L,z,P,I,b,nt),I.side=Dn):y.renderBufferDirect(L,z,P,I,b,nt),b.onAfterRender(y,z,L,P,I,nt)}function Ft(b,z,L){z.isScene!==!0&&(z=Ct);let P=xt.get(b),I=u.state.lights,nt=u.state.shadowsArray,lt=I.state.version,vt=Y.getParameters(b,I.state,nt,z,L),gt=Y.getProgramCacheKey(vt),Ut=P.programs;P.environment=b.isMeshStandardMaterial?z.environment:null,P.fog=z.fog,P.envMap=(b.isMeshStandardMaterial?ge:Be).get(b.envMap||P.environment),P.envMapRotation=P.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",$),Ut=new Map,P.programs=Ut);let kt=Ut.get(gt);if(kt!==void 0){if(P.currentProgram===kt&&P.lightsStateVersion===lt)return Ze(b,vt),kt}else vt.uniforms=Y.getUniforms(b),b.onBeforeCompile(vt,y),kt=Y.acquireProgram(vt,gt),Ut.set(gt,kt),P.uniforms=vt.uniforms;let Lt=P.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=ot.uniform),Ze(b,vt),P.needsLights=rs(b),P.lightsStateVersion=lt,P.needsLights&&(Lt.ambientLightColor.value=I.state.ambient,Lt.lightProbe.value=I.state.probe,Lt.directionalLights.value=I.state.directional,Lt.directionalLightShadows.value=I.state.directionalShadow,Lt.spotLights.value=I.state.spot,Lt.spotLightShadows.value=I.state.spotShadow,Lt.rectAreaLights.value=I.state.rectArea,Lt.ltc_1.value=I.state.rectAreaLTC1,Lt.ltc_2.value=I.state.rectAreaLTC2,Lt.pointLights.value=I.state.point,Lt.pointLightShadows.value=I.state.pointShadow,Lt.hemisphereLights.value=I.state.hemi,Lt.directionalShadowMap.value=I.state.directionalShadowMap,Lt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Lt.spotShadowMap.value=I.state.spotShadowMap,Lt.spotLightMatrix.value=I.state.spotLightMatrix,Lt.spotLightMap.value=I.state.spotLightMap,Lt.pointShadowMap.value=I.state.pointShadowMap,Lt.pointShadowMatrix.value=I.state.pointShadowMatrix),P.currentProgram=kt,P.uniformsList=null,kt}function Ye(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=Nl.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Ze(b,z){let L=xt.get(b);L.outputColorSpace=z.outputColorSpace,L.batching=z.batching,L.batchingColor=z.batchingColor,L.instancing=z.instancing,L.instancingColor=z.instancingColor,L.instancingMorph=z.instancingMorph,L.skinning=z.skinning,L.morphTargets=z.morphTargets,L.morphNormals=z.morphNormals,L.morphColors=z.morphColors,L.morphTargetsCount=z.morphTargetsCount,L.numClippingPlanes=z.numClippingPlanes,L.numIntersection=z.numClipIntersection,L.vertexAlphas=z.vertexAlphas,L.vertexTangents=z.vertexTangents,L.toneMapping=z.toneMapping}function ee(b,z,L,P,I){z.isScene!==!0&&(z=Ct),Gt.resetTextureUnits();let nt=z.fog,lt=P.isMeshStandardMaterial?z.environment:null,vt=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Lr,gt=(P.isMeshStandardMaterial?ge:Be).get(P.envMap||lt),Ut=P.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,kt=!!L.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),Lt=!!L.morphAttributes.position,Wt=!!L.morphAttributes.normal,ve=!!L.morphAttributes.color,Ve=sa;P.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ve=y.toneMapping);let _e=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Se=_e!==void 0?_e.length:0,Pt=xt.get(P),Xe=u.state.lights;if(ae===!0&&(Z===!0||b!==M)){let kn=b===M&&P.id===E;ot.setState(P,b,kn)}let fe=!1;P.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Xe.state.version||Pt.outputColorSpace!==vt||I.isBatchedMesh&&Pt.batching===!1||!I.isBatchedMesh&&Pt.batching===!0||I.isBatchedMesh&&Pt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Pt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Pt.instancing===!1||!I.isInstancedMesh&&Pt.instancing===!0||I.isSkinnedMesh&&Pt.skinning===!1||!I.isSkinnedMesh&&Pt.skinning===!0||I.isInstancedMesh&&Pt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Pt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Pt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Pt.instancingMorph===!1&&I.morphTexture!==null||Pt.envMap!==gt||P.fog===!0&&Pt.fog!==nt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ot.numPlanes||Pt.numIntersection!==ot.numIntersection)||Pt.vertexAlphas!==Ut||Pt.vertexTangents!==kt||Pt.morphTargets!==Lt||Pt.morphNormals!==Wt||Pt.morphColors!==ve||Pt.toneMapping!==Ve||Pt.morphTargetsCount!==Se)&&(fe=!0):(fe=!0,Pt.__version=P.version);let ui=Pt.currentProgram;fe===!0&&(ui=Ft(P,z,I));let Yr=!1,hi=!1,Pl=!1,We=ui.getUniforms(),wi=Pt.uniforms;if(yt.useProgram(ui.program)&&(Yr=!0,hi=!0,Pl=!0),P.id!==E&&(E=P.id,hi=!0),Yr||M!==b){yt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),We.setValue(D,"projectionMatrix",b.projectionMatrix),We.setValue(D,"viewMatrix",b.matrixWorldInverse);let jn=We.map.cameraPosition;jn!==void 0&&jn.setValue(D,_t.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&We.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&We.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,hi=!0,Pl=!0)}if(I.isSkinnedMesh){We.setOptional(D,I,"bindMatrix"),We.setOptional(D,I,"bindMatrixInverse");let kn=I.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),We.setValue(D,"boneTexture",kn.boneTexture,Gt))}I.isBatchedMesh&&(We.setOptional(D,I,"batchingTexture"),We.setValue(D,"batchingTexture",I._matricesTexture,Gt),We.setOptional(D,I,"batchingIdTexture"),We.setValue(D,"batchingIdTexture",I._indirectTexture,Gt),We.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&We.setValue(D,"batchingColorTexture",I._colorsTexture,Gt));let Ri=L.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&at.update(I,L,ui),(hi||Pt.receiveShadow!==I.receiveShadow)&&(Pt.receiveShadow=I.receiveShadow,We.setValue(D,"receiveShadow",I.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(wi.envMap.value=gt,wi.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),P.isMeshStandardMaterial&&P.envMap===null&&z.environment!==null&&(wi.envMapIntensity.value=z.environmentIntensity),hi&&(We.setValue(D,"toneMappingExposure",y.toneMappingExposure),Pt.needsLights&&ci(wi,Pl),nt&&P.fog===!0&&et.refreshFogUniforms(wi,nt),et.refreshMaterialUniforms(wi,P,V,st,u.state.transmissionRenderTarget[b.id]),Nl.upload(D,Ye(Pt),wi,Gt)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Nl.upload(D,Ye(Pt),wi,Gt),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&We.setValue(D,"center",I.center),We.setValue(D,"modelViewMatrix",I.modelViewMatrix),We.setValue(D,"normalMatrix",I.normalMatrix),We.setValue(D,"modelMatrix",I.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){let kn=P.uniformsGroups;for(let jn=0,fp=kn.length;jn<fp;jn++){let $a=kn[jn];Yt.update($a,ui),Yt.bind($a,ui)}}return ui}function ci(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function rs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,z,L){let P=xt.get(b);P.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),xt.get(b.texture).__webglTexture=z,xt.get(b.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:L,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){let L=xt.get(b);L.__webglFramebuffer=z,L.__useDefaultFramebuffer=z===void 0};let Xi=D.createFramebuffer();this.setRenderTarget=function(b,z=0,L=0){N=b,w=z,C=L;let P=!0,I=null,nt=!1,lt=!1;if(b){let gt=xt.get(b);if(gt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(D.FRAMEBUFFER,null),P=!1;else if(gt.__webglFramebuffer===void 0)Gt.setupRenderTarget(b);else if(gt.__hasExternalTextures)Gt.rebindTextures(b,xt.get(b.texture).__webglTexture,xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Lt=b.depthTexture;if(gt.__boundDepthTexture!==Lt){if(Lt!==null&&xt.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(b)}}let Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(lt=!0);let kt=xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[z])?I=kt[z][L]:I=kt[z],nt=!0):b.samples>0&&Gt.useMultisampledRTT(b)===!1?I=xt.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?I=kt[L]:I=kt,U.copy(b.viewport),H.copy(b.scissor),k=b.scissorTest}else U.copy(Mt).multiplyScalar(V).floor(),H.copy(zt).multiplyScalar(V).floor(),k=se;if(L!==0&&(I=Xi),yt.bindFramebuffer(D.FRAMEBUFFER,I)&&P&&yt.drawBuffers(b,I),yt.viewport(U),yt.scissor(H),yt.setScissorTest(k),nt){let gt=xt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,gt.__webglTexture,L)}else if(lt){let gt=z;for(let Ut=0;Ut<b.textures.length;Ut++){let kt=xt.get(b.textures[Ut]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ut,kt.__webglTexture,L,gt)}}else if(b!==null&&L!==0){let gt=xt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,L)}E=-1},this.readRenderTargetPixels=function(b,z,L,P,I,nt,lt,vt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){yt.bindFramebuffer(D.FRAMEBUFFER,gt);try{let Ut=b.textures[vt],kt=Ut.format,Lt=Ut.type;if(!Rt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-P&&L>=0&&L<=b.height-I&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),D.readPixels(z,L,P,I,wt.convert(kt),wt.convert(Lt),nt))}finally{let Ut=N!==null?xt.get(N).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,z,L,P,I,nt,lt,vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt)if(z>=0&&z<=b.width-P&&L>=0&&L<=b.height-I){yt.bindFramebuffer(D.FRAMEBUFFER,gt);let Ut=b.textures[vt],kt=Ut.format,Lt=Ut.type;if(!Rt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Wt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),D.readPixels(z,L,P,I,wt.convert(kt),wt.convert(Lt),0);let ve=N!==null?xt.get(N).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,ve);let Ve=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Lb(D,Ve,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Wt),D.deleteSync(Ve),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,L=0){let P=Math.pow(2,-L),I=Math.floor(b.image.width*P),nt=Math.floor(b.image.height*P),lt=z!==null?z.x:0,vt=z!==null?z.y:0;Gt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,L,0,0,lt,vt,I,nt),yt.unbindTexture()};let oa=D.createFramebuffer(),ja=D.createFramebuffer();this.copyTextureToTexture=function(b,z,L=null,P=null,I=0,nt=null){nt===null&&(I!==0?(pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=I,I=0):nt=0);let lt,vt,gt,Ut,kt,Lt,Wt,ve,Ve,_e=b.isCompressedTexture?b.mipmaps[nt]:b.image;if(L!==null)lt=L.max.x-L.min.x,vt=L.max.y-L.min.y,gt=L.isBox3?L.max.z-L.min.z:1,Ut=L.min.x,kt=L.min.y,Lt=L.isBox3?L.min.z:0;else{let Ri=Math.pow(2,-I);lt=Math.floor(_e.width*Ri),vt=Math.floor(_e.height*Ri),b.isDataArrayTexture?gt=_e.depth:b.isData3DTexture?gt=Math.floor(_e.depth*Ri):gt=1,Ut=0,kt=0,Lt=0}P!==null?(Wt=P.x,ve=P.y,Ve=P.z):(Wt=0,ve=0,Ve=0);let Se=wt.convert(z.format),Pt=wt.convert(z.type),Xe;z.isData3DTexture?(Gt.setTexture3D(z,0),Xe=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Gt.setTexture2DArray(z,0),Xe=D.TEXTURE_2D_ARRAY):(Gt.setTexture2D(z,0),Xe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let fe=D.getParameter(D.UNPACK_ROW_LENGTH),ui=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yr=D.getParameter(D.UNPACK_SKIP_PIXELS),hi=D.getParameter(D.UNPACK_SKIP_ROWS),Pl=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_e.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Lt);let We=b.isDataArrayTexture||b.isData3DTexture,wi=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){let Ri=xt.get(b),kn=xt.get(z),jn=xt.get(Ri.__renderTarget),fp=xt.get(kn.__renderTarget);yt.bindFramebuffer(D.READ_FRAMEBUFFER,jn.__webglFramebuffer),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,fp.__webglFramebuffer);for(let $a=0;$a<gt;$a++)We&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.get(b).__webglTexture,I,Lt+$a),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.get(z).__webglTexture,nt,Ve+$a)),D.blitFramebuffer(Ut,kt,lt,vt,Wt,ve,lt,vt,D.DEPTH_BUFFER_BIT,D.NEAREST);yt.bindFramebuffer(D.READ_FRAMEBUFFER,null),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(I!==0||b.isRenderTargetTexture||xt.has(b)){let Ri=xt.get(b),kn=xt.get(z);yt.bindFramebuffer(D.READ_FRAMEBUFFER,oa),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ja);for(let jn=0;jn<gt;jn++)We?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ri.__webglTexture,I,Lt+jn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ri.__webglTexture,I),wi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kn.__webglTexture,nt,Ve+jn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kn.__webglTexture,nt),I!==0?D.blitFramebuffer(Ut,kt,lt,vt,Wt,ve,lt,vt,D.COLOR_BUFFER_BIT,D.NEAREST):wi?D.copyTexSubImage3D(Xe,nt,Wt,ve,Ve+jn,Ut,kt,lt,vt):D.copyTexSubImage2D(Xe,nt,Wt,ve,Ut,kt,lt,vt);yt.bindFramebuffer(D.READ_FRAMEBUFFER,null),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else wi?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Xe,nt,Wt,ve,Ve,lt,vt,gt,Se,Pt,_e.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Xe,nt,Wt,ve,Ve,lt,vt,gt,Se,_e.data):D.texSubImage3D(Xe,nt,Wt,ve,Ve,lt,vt,gt,Se,Pt,_e):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,nt,Wt,ve,lt,vt,Se,Pt,_e.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,nt,Wt,ve,_e.width,_e.height,Se,_e.data):D.texSubImage2D(D.TEXTURE_2D,nt,Wt,ve,lt,vt,Se,Pt,_e);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ui),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yr),D.pixelStorei(D.UNPACK_SKIP_ROWS,hi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pl),nt===0&&z.generateMipmaps&&D.generateMipmap(Xe),yt.unbindTexture()},this.initRenderTarget=function(b){xt.get(b).__webglFramebuffer===void 0&&Gt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Gt.setTextureCube(b,0):b.isData3DTexture?Gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Gt.setTexture2DArray(b,0):Gt.setTexture2D(b,0),yt.unbindTexture()},this.resetState=function(){w=0,C=0,N=null,yt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=ue._getUnpackColorSpace()}};function dE(e,t,n){if(!e)return t;let i=Math.max(0,Math.min(1,n));return{x:e.x+(t.x-e.x)*i,z:e.z+(t.z-e.z)*i}}var pE=[{coat:"#79bda5",shade:"#568b8d",deep:"#426a7e",hair:"#49445e",hairLight:"#756480",skin:"#e7af8f",skinLight:"#ffd2a6",accent:"#f5e2a2"},{coat:"#b29acb",shade:"#80759f",deep:"#60577f",hair:"#65516a",hairLight:"#9e7887",skin:"#c99074",skinLight:"#eab997",accent:"#f5c39b"},{coat:"#d99683",shade:"#ab727d",deep:"#755d78",hair:"#34374f",hairLight:"#65647b",skin:"#aa745b",skinLight:"#d4a27d",accent:"#d5efbc"},{coat:"#d9bc78",shade:"#a78673",deep:"#786b78",hair:"#a87962",hairLight:"#d2a477",skin:"#ddab85",skinLight:"#f7caa3",accent:"#a7ddd1"}],Ot="#2d3049";function R(e,t,n,i,s,a){e.fillStyle=t,e.fillRect(n,i,s,a)}function Vn(e,t,n,i,s,a){for(let r=-a;r<=a;r++){let o=Math.floor(s*Math.sqrt(1-r*r/((a+.5)*(a+.5))));R(e,t,n-o,i+r,o*2+1,1)}}function ra(e,t,n){for(let[i,s]of n)R(e,t,i,s,1,1)}function Gn(e,t,n){let i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d");if(!s)throw new Error("Canvas 2D is required to draw the office sprites.");n(s);let a=new Vi(i);return a.colorSpace=ln,a.magFilter=_n,a.minFilter=_n,a.generateMipmaps=!1,a}function Bv(e,t,n,i){let{coat:s,shade:a,deep:r,hair:o,hairLight:l,skin:c,skinLight:h,accent:d}=pE[t%pE.length],f=n==="stepA"?-2:n==="stepB"?2:0,p=n==="working",g=i==="left",S=p?22:24;for(let[m,u]of[[11+f,8+f],[19-f,18-f]])R(e,Ot,m,30,4,7),R(e,r,m+1,31,2,5),R(e,Ot,u,36,7,3),R(e,a,u+1,36,4,1);for(let m of[6,23])R(e,Ot,m,S,4,7),R(e,a,m+1,S+1,2,5),R(e,s,m+1,S+1,2,3),R(e,c,m+1,S+6,3,2);if(Vn(e,Ot,16,25,9,7),Vn(e,r,18,26,6,5),Vn(e,s,14,24,6,5),R(e,d,12,20,7,2),R(e,h,15,22,2,2),R(e,a,11,28,3,2),R(e,Ot,16,24,1,7),i==="away"){Vn(e,s,16,25,7,6),R(e,a,10,24,3,6),R(e,d,15,24,2,5),Vn(e,Ot,16,13,10,10),Vn(e,o,16,12,9,8),Vn(e,l,13,9,5,3),R(e,c,6,16,2,3),R(e,c,24,16,2,3),t%4===1?(R(e,o,7,16,4,7),R(e,o,22,16,4,7)):t%4===2?(R(e,o,7,16,5,4),R(e,l,19,8,5,2)):t%4===3?(R(e,d,10,8,14,3),R(e,o,7,11,18,3)):(R(e,l,10,5,6,2),R(e,o,8,12,5,5)),n==="coffee"&&(R(e,Ot,23,24,6,7),R(e,"#fff2d3",24,25,4,5),R(e,a,25,26,2,2)),p&&R(e,d,12,29,8,1);return}switch(Vn(e,Ot,16,13,10,10),Vn(e,o,16,11,9,8),Vn(e,c,16,16,7,6),Vn(e,h,g?13:15,14,4,3),R(e,c,g?25:6,15,2,3),t%4){case 0:Vn(e,o,14,7,8,4),R(e,l,10,5,6,2),R(e,o,g?6:19,10,7,5);break;case 1:Vn(e,o,16,7,9,5),R(e,l,12,5,6,2),R(e,o,6,12,4,8),R(e,o,23,11,3,8),R(e,d,12,22,8,2);break;case 2:Vn(e,o,16,9,10,7),R(e,l,10,5,6,2),R(e,o,g?6:22,12,4,6),R(e,Ot,10,14,5,3),R(e,Ot,18,14,5,3),R(e,Ot,15,15,3,1),R(e,h,11,15,3,1),R(e,h,19,15,3,1);break;default:Vn(e,o,16,9,9,6),R(e,Ot,7,9,18,3),R(e,d,9,9,14,2),R(e,o,11,12,5,2),R(e,d,20,24,3,2);break}R(e,Ot,g?12:19,16,2,p?1:2),R(e,Ot,g?19:12,16,1,p?1:2),R(e,a,g?11:21,18,1,1),R(e,"#bd7979",g?14:16,20,3,1),n==="coffee"&&(R(e,Ot,g?1:25,23,6,7),R(e,"#fff2d3",g?2:26,24,4,5),R(e,a,g?3:27,26,3,1)),p&&R(e,d,12,29,8,1)}function mE(e){let t=n=>({left:Gn(32,40,i=>Bv(i,e,n,"left")),right:Gn(32,40,i=>Bv(i,e,n,"right")),away:Gn(32,40,i=>Bv(i,e,n,"away"))});return{idle:t("idle"),stepA:t("stepA"),stepB:t("stepB"),working:t("working"),coffee:t("coffee")}}function gE(){return Gn(96,56,e=>{R(e,Ot,6,22,84,31),R(e,"#775d70",8,27,80,23),R(e,"#a17b80",10,30,75,13),R(e,"#d9ac8e",12,30,70,3),R(e,"#3c384e",30,34,36,9),R(e,"#5aa59a",33,36,30,3),R(e,"#e4c391",36,39,24,2),R(e,"#f0d3ae",9,20,79,9),R(e,"#fff0d1",13,21,69,2),R(e,Ot,35,3,27,18),R(e,"#777087",38,5,21,14),R(e,"#b9a2aa",39,5,14,3),R(e,"#3b5260",42,9,13,8),R(e,"#8be0bd",44,11,9,3),R(e,Ot,41,18,16,3);for(let t of[17,70])R(e,Ot,t,14,9,8),R(e,"#f8e6cd",t+1,15,6,5),R(e,"#82bbad",t+2,16,3,2),R(e,"#f4d5af",t+2,11,2,3);R(e,Ot,10,50,14,4),R(e,Ot,73,50,14,4)})}function vE(e="CHAT ROOM"){return Gn(256,64,t=>{R(t,"#3b344d",5,8,246,49),R(t,"#d5a989",8,11,240,43),R(t,"#51445c",13,15,230,35),R(t,"#bce7cd",18,20,6,25),R(t,"#bce7cd",232,20,6,25),t.fillStyle="#fff0ce",t.font="bold 31px monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(e,128,34)})}function Ll(e,t=0){return Gn(48,48,n=>{R(n,"#31334c",5,5,38,38),R(n,"#f7e9cc",8,8,32,32),R(n,e==="failed"?"#d2828c":"#8bbda9",10,10,28,3),R(n,"#4a465d",14,18,21,13),R(n,"#fff2d7",17,20,15,8),R(n,e==="failed"?"#d2828c":"#72b4a5",20,22,9,2),R(n,"#4a465d",18,30,5,4),R(n,"#fff0d1",25,31,5,2);let i=e==="working"?t:e==="complete"||e==="failed"?16:0;for(let s=0;s<16;s++){let a=Math.floor(s/4),r=s%4,o=a===0?6+r*9:a===1?41:a===2?33-r*9:4,l=a===0?3:a===1?6+r*9:a===2?41:33-r*9;R(n,s<i?e==="failed"?"#f2a3a3":"#95f2cc":"#74617d",o,l,a%2===0?8:3,a%2===0?3:8)}(e==="queued"||e==="assigned")&&(R(n,"#f5b978",22,15,4,5),R(n,"#f5b978",22,33,4,3))})}function _E(e){return Gn(40,40,t=>{let n=e%2?"#d4b5ee":"#9ce4ce";R(t,Ot,7,3,25,28),R(t,Ot,5,6,30,21),R(t,"#806d91",8,5,24,23),R(t,"#c0a6bb",9,5,18,2),R(t,"#39394e",11,8,20,17),R(t,"#30485c",12,9,17,14),R(t,"#568f9c",13,10,11,1),R(t,n,14,12,10,2),R(t,"#ffdfaa",14,16,7,1),R(t,n,14,19,12,2),R(t,"#6f9eaa",14,22,5,1),R(t,"#f6d7aa",14,27,11,2),R(t,Ot,18,31,5,5),R(t,"#aa8da5",19,31,2,4),R(t,Ot,12,36,17,3),R(t,"#ffedcc",14,36,12,1),ra(t,"#e9e1db",[[10,8],[10,9],[31,26],[30,27]])})}function yE(){return Gn(42,50,e=>{R(e,"#293f50",18,15,5,23),R(e,"#456b65",20,18,2,16),R(e,"#293f50",9,13,9,19),R(e,"#293f50",6,18,16,11),R(e,"#293f50",4,15,5,8),R(e,"#293f50",11,7,6,9),R(e,"#293f50",14,4,5,6),R(e,"#4f897a",8,16,12,12),R(e,"#5a9a83",10,12,7,13),R(e,"#82bb91",12,9,4,9),R(e,"#91c8a0",6,20,5,4),R(e,"#74ad8e",10,23,8,3),R(e,"#b0d5a4",12,14,2,4),R(e,"#293f50",25,10,7,22),R(e,"#293f50",22,17,15,11),R(e,"#293f50",31,13,6,9),R(e,"#293f50",27,5,5,8),R(e,"#4f897a",24,15,11,13),R(e,"#5a9a83",27,11,7,13),R(e,"#82bb91",28,8,4,9),R(e,"#a9d6a2",33,17,4,4),R(e,"#74ad8e",28,23,6,3),R(e,"#b0d5a4",28,13,2,4),R(e,"#293f50",17,21,8,12),R(e,"#599784",17,20,7,11),R(e,"#9ac69a",18,19,4,7),ra(e,"#b6d9a5",[[9,15],[13,12],[15,7],[27,13],[31,9],[29,21]]),ra(e,"#294c58",[[8,26],[17,18],[34,24],[23,28]]),R(e,Ot,13,35,17,4),R(e,"#e8bb96",15,38,14,8),R(e,"#c78980",20,40,9,6),R(e,"#f6d7aa",16,39,6,2),R(e,Ot,15,46,15,2)})}function xE(){return Gn(28,24,e=>{R(e,Ot,3,10,23,11),R(e,"#72617c",4,11,20,8),R(e,"#9c83a1",5,11,15,3),R(e,"#d1a58c",7,6,13,6),R(e,"#f2d5a1",8,7,10,3),R(e,"#eff5d3",11,3,11,7),R(e,"#77b9a4",12,4,7,2),R(e,"#f7deaa",13,7,6,1),R(e,"#aad4b0",6,16,14,2),R(e,Ot,4,21,21,2)})}function SE(e){return Gn(80,70,t=>{let n=e%2?"#ead4bb":"#f3ddba";R(t,Ot,13,21,57,20),R(t,Ot,9,25,58,17),R(t,"#785e78",11,30,57,16),R(t,"#a97e7f",10,26,56,15),R(t,"#f8e8c7",17,19,49,8),R(t,n,13,24,52,10),R(t,"#fff4d6",20,19,39,2),R(t,"#d4af9b",13,32,52,3),R(t,"#9a6d79",14,37,52,4),R(t,"#efbda2",19,32,26,2),R(t,"#564664",14,42,10,22),R(t,"#8c687e",15,43,6,18),R(t,"#d8a69c",16,45,2,5),R(t,"#564664",58,41,10,22),R(t,"#8c687e",60,42,6,17),R(t,"#d8a69c",60,45,2,5),R(t,Ot,12,62,13,5),R(t,Ot,56,61,14,5),R(t,"#382d4b",28,37,4,2),R(t,"#382d4b",46,37,4,2),ra(t,"#fff7de",[[21,22],[23,22],[59,23],[61,23]])})}function ME(){return Gn(40,54,e=>{R(e,Ot,8,6,26,30),R(e,Ot,6,9,30,24),R(e,"#6c608a",9,8,24,25),R(e,"#9b83ab",11,8,20,19),R(e,"#c9aecc",14,10,14,13),R(e,"#f1d9d0",15,10,9,2),R(e,Ot,7,33,28,8),R(e,"#8b77a1",10,33,23,5),R(e,"#c7acc3",12,33,14,2),R(e,Ot,19,41,5,8),R(e,"#6a5f80",20,41,2,6),R(e,Ot,10,48,24,4),R(e,"#b2a2b8",14,48,14,1),ra(e,"#f8e4d7",[[14,15],[17,14],[28,23]])})}function bE(){return Gn(48,64,e=>{R(e,Ot,7,46,36,14),R(e,"#765b68",9,47,31,11),R(e,"#b18683",10,48,24,5),R(e,"#e2b698",11,48,19,2),R(e,"#533f53",11,55,28,2),R(e,"#e6c4a4",13,55,6,1),R(e,"#e6c4a4",28,55,6,1),R(e,Ot,10,59,8,3),R(e,Ot,32,59,8,3),R(e,Ot,9,11,32,36),R(e,"#775c73",11,13,27,32),R(e,"#a8838d",12,14,22,3),R(e,"#d9b49f",12,18,2,23),R(e,"#4c465d",15,18,20,23),R(e,"#356a74",17,20,16,17),R(e,"#579e96",18,21,13,11),R(e,"#9bd4ae",19,22,9,6),R(e,"#e8e6af",21,24,4,4),R(e,"#fff1ba",22,24,2,2),R(e,"#377778",20,30,10,2),R(e,"#f7d9a5",19,39,3,2),R(e,"#8dd2aa",24,39,3,2),R(e,"#f7d9a5",29,39,3,2),R(e,Ot,7,8,36,5),R(e,"#9c7882",9,8,32,3),R(e,"#f2c9a5",11,8,24,1),R(e,"#533f53",6,42,36,5),R(e,"#d4a48e",9,42,27,2),R(e,"#f8e3b9",10,43,15,1),ra(e,"#fce6bd",[[12,15],[36,15],[12,48],[39,48]])})}function EE(){return Gn(64,63,e=>{R(e,Ot,13,8,41,36),R(e,"#706493",16,6,34,35),R(e,"#ad9cc6",18,7,26,30),R(e,"#eddaee",20,9,23,25),R(e,"#34485c",22,13,20,19),R(e,"#517883",23,14,15,3),R(e,"#a5f0cc",25,19,13,2),R(e,"#b9d5e2",25,24,8,2),R(e,"#f8e4aa",25,29,12,1),R(e,Ot,7,39,50,17),R(e,"#866f9c",9,40,46,13),R(e,"#c6b3d0",12,40,38,8),R(e,"#f9ebd8",14,41,31,2),R(e,Ot,10,51,10,11),R(e,"#706184",12,52,7,8),R(e,Ot,44,51,10,11),R(e,"#706184",46,52,6,8),ra(e,"#fff9e5",[[19,11],[20,11],[50,43],[51,43]])})}function Fv(e){return Gn(40,52,t=>{R(t,Ot,6,36,29,11),R(t,"#ab829e",9,36,23,8),R(t,"#f7e7c7",11,36,17,2),R(t,Ot,9,25,25,10),R(t,e%2?"#91ceb0":"#e3b695",12,26,19,5),R(t,"#fff0d1",13,26,10,1),R(t,Ot,4,15,25,9),R(t,"#9d90bb",7,16,19,5),R(t,"#e6d5ef",8,16,9,1),R(t,Ot,14,6,22,9),R(t,"#e5bd91",17,7,16,6),R(t,"#f9e8b7",18,7,11,1),R(t,Ot,12,47,22,3),ra(t,"#ebdcce",[[8,19],[10,20],[20,29],[14,40]])})}function TE(e){return Gn(36,44,t=>{R(t,Ot,2,3,32,38),R(t,"#ab8ea7",4,4,28,35),R(t,"#eedadd",6,6,24,32),R(t,e%2?"#d99b97":"#83b9ae",8,8,20,27),Vn(t,"#fff2d4",e%2?20:16,19,5,7),R(t,"#474964",15,22,11,3),R(t,"#f4ddac",10,29,12,2),ra(t,"#fff9e5",[[8,7],[9,7],[27,34]])})}function AE(){return Gn(20,26,e=>{R(e,"#302d4a",3,4,14,19),R(e,"#726b92",5,5,10,14),R(e,"#a0f3d2",6,7,8,8),R(e,"#fff4d4",8,8,3,3),R(e,"#302d4a",6,22,9,3)})}var Ai={edge:6181475,wall:9533568,wallTop:15910293,cream:16769709,lavender:12297963},Ht={halfWidth:7.7,back:-5.2,front:5.8,windowY:1.72},Hv=[-4.8,0,4.8],wE=0,bu=new B(0,15,20),li={x:-3.8,z:-2.2},cp=-3.55,WN=new Zt(11127295),qN=new Zt(12110826),YN=new Zt(11848948),ZN=new Zt(16767681),KN=new Zt(7506858);function RE(e,t=0,n=0){return new Or({color:e,roughness:.88,flatShading:!0,emissive:t,emissiveIntensity:n})}function JN(){let e=document.createElement("canvas");e.width=1024,e.height=768;let t=e.getContext("2d");if(!t)throw new Error("Canvas 2D is required for the office floor.");t.fillStyle="#785a51",t.fillRect(0,0,e.width,e.height);let n=["#d8af83","#cba076","#dfb78c","#d2a77b","#c59a72","#dbb287"],i=(a,r)=>(Math.imul(a,73856093)^Math.imul(r,19349663))>>>0;for(let a=0;a<12;a++){let r=a*64,o=a%2?-116:-20,l=0;for(;o<e.width;){let c=i(l,a),h=188+c%53;t.fillStyle=n[c%n.length],t.fillRect(o+2,r+2,h-3,61),t.fillStyle="#fff0cb20",t.fillRect(o+5,r+4,h-9,2),t.fillStyle="#573e4a18",t.fillRect(o+3,r+58,h-5,3);for(let d=0;d<7;d++){let f=r+9+i(l*7+d,a)%46;t.fillStyle=d%2?"#633f3920":"#ffe2ac32",t.fillRect(o+12+d%3*8,f,h-36-d%3*15,1)}o+=h,l++}}let s=new Vi(e);return s.colorSpace=ln,s.minFilter=is,s.magFilter=Rn,s}function QN(){let e=document.createElement("canvas");e.width=128,e.height=96;let t=e.getContext("2d");if(!t)throw new Error("Canvas 2D is required for the window garden.");for(let[i,s,a]of[["#426e6b",83,23],["#5c8971",89,21],["#83a77a",96,17]]){t.fillStyle=i;for(let r=-15;r<150;r+=21)t.beginPath(),t.ellipse(r+r%3*3,s-r%4*4,a,18,0,0,Math.PI*2),t.fill()}for(let i=0;i<42;i++){let s=(Math.imul(i+11,47)%128+128)%128,a=67+Math.imul(i+3,31)%29;t.fillStyle=i%3?"#b6c490":"#365e63",t.fillRect(s,a,2+i%3,1)}let n=new Vi(e);return n.colorSpace=ln,n.minFilter=is,n.magFilter=Rn,n}function Qn(e,t,n,i,s,a,r,o,l=0,c=0){let h=new Re(new Za(s,a,r),RE(o,l,c));return h.position.set(t,n,i),h.castShadow=a>.17,h.receiveShadow=!0,e.add(h),h}function Nn(e,t,n,i,s,a,r){let o=new Re(new Fn(a,r),new Or({map:t,alphaTest:.38,side:Dn,roughness:1,emissiveMap:t,emissive:16777215,emissiveIntensity:.24}));return o.position.set(n,i,s),o.rotation.y=wE,o.castShadow=!1,o.receiveShadow=!0,e.add(o),o}function CE(e,t){let n=new Re(new El(1,10,6),new Bn({colorWrite:!1,depthWrite:!1}));return n.scale.set(e*.38,.12,t*.3),n.castShadow=!0,n}function Vv(e,t="#4e4762"){let n=document.createElement("canvas");n.width=256,n.height=64;let i=n.getContext("2d");if(!i)throw new Error("Canvas 2D context is required for office signs.");i.fillStyle="#574c5a",i.fillRect(4,4,248,56),i.strokeStyle="#d4a986",i.lineWidth=5,i.strokeRect(4,4,248,56),i.fillStyle=t==="#4e4762"?"#f9e5bb":t,i.font="bold 25px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,34);let s=new Vi(n);s.magFilter=_n,s.minFilter=_n;let a=new xl(new yl({map:s,transparent:!0,depthTest:!1}));return a.scale.set(1.65,.42,1),a}function jN(e,t,n,i,s){Nn(e,s(SE(i)),t,.58,n-.56,1.55,1.23);let a=Nn(e,s(_E(i)),t-.1,1.08,n-.67,.77,.77);return Nn(e,s(ME()),t+.35,.49,n+.37,.66,.94),a}function $N(e,t,n){let i=new Hi,s=Nn(i,n.idle.away,.035,.68,-.065,.99,1.35);s.material.color.setHex(7759223),s.material.emissiveIntensity=0,s.castShadow=!1,s.receiveShadow=!1;let a=Nn(i,n.idle.away,0,.67,0,.95,1.32);a.material.emissiveIntensity=.44,s.rotation.y=0,a.rotation.y=0,i.rotation.y=wE;let r=new Re(new Fn(.68,.52),new Bn({map:t,transparent:!0,depthWrite:!1,opacity:.66,toneMapped:!1}));r.rotation.x=-Math.PI/2,r.renderOrder=3;let o=CE(.68,.52);return{group:i,backing:s,figure:a,frames:n,facing:"away",shadow:r,caster:o}}function DE(e,t,n="game",i){let s=n==="live",a=s?cp:3.55,r=s?[...Tr,...Yo]:Tr,o=new au,l=[],c=q=>(l.push(q),q),h=new wn(28,1,.1,100);h.position.copy(bu),h.lookAt(0,.4,0);let d=new op({antialias:!1,alpha:!0,powerPreference:"low-power"});d.outputColorSpace=ln,d.toneMapping=yd,d.toneMappingExposure=1.35,d.setClearColor(0,0),d.shadowMap.enabled=!0,d.shadowMap.type=Gi,d.shadowMap.autoUpdate=!1,d.shadowMap.needsUpdate=!0,d.domElement.className="world-canvas",d.domElement.setAttribute("aria-label","Perspective view of the little AI office"),d.domElement.setAttribute("role","img"),e.appendChild(d.domElement);let f=!1,p=q=>{q.preventDefault(),f=!0,e.classList.add("context-lost")},g=()=>{f=!1,d.shadowMap.needsUpdate=!0,e.classList.remove("context-lost")};d.domElement.addEventListener("webglcontextlost",p),d.domElement.addEventListener("webglcontextrestored",g);let S=new oi({depthWrite:!1,side:Cn,toneMapped:!1,uniforms:{uDay:{value:.7},uWarm:{value:.8},uTime:{value:0},uSun:{value:new B(1,1,-1)},uSkyTint:{value:new Zt(9034192)}},vertexShader:`
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
    `}),m=new Re(new El(45,24,14),S);m.renderOrder=-1,o.add(m);let u=new pu(15193564,.75),v=new hu(11979214,9858176,.9);o.add(u,v);let _=new du(16767394,2.4);_.position.set(2,9,-24),_.castShadow=!0;let y=e.clientWidth<980||matchMedia("(pointer: coarse)").matches?512:1024;_.shadow.mapSize.set(y,y),_.shadow.radius=8,_.shadow.blurSamples=8,_.shadow.camera.left=-11,_.shadow.camera.right=11,_.shadow.camera.top=11,_.shadow.camera.bottom=-11,_.shadow.bias=-5e-4,_.shadow.normalBias=.012,o.add(_);let A=new na(9107160,1.5,5,2);A.position.set(li.x,1.55,li.z);let w=new na(16756347,.9,4,2);w.position.set(0,1.35,a+.1);let C=new na(16758135,1.1,8,2);C.position.set(.3,2.4,.55),o.add(w,C),s||o.add(A),Qn(o,0,-.3,0,Ht.halfWidth*2,.55,Ht.front-Ht.back,Ai.edge);let N=c(JN());N.anisotropy=Math.min(4,d.capabilities.getMaxAnisotropy());let E=new Re(new Fn(Ht.halfWidth*2-.18,Ht.front-Ht.back-.18),new Or({map:N,roughness:.86}));E.rotation.x=-Math.PI/2,E.position.y=.028,E.receiveShadow=!0,o.add(E);let M=new Re(new Fn(Ht.halfWidth*2-.18,Ht.front-Ht.back-.18),new oi({transparent:!0,depthWrite:!1,uniforms:{uSunSide:{value:0},uNight:{value:0}},vertexShader:`
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
      `}));M.rotation.x=-Math.PI/2,M.position.y=.047,o.add(M),Qn(o,0,.575,Ht.back,Ht.halfWidth*2,1.15,.2,Ai.wall),Qn(o,0,2.52,Ht.back,Ht.halfWidth*2,.46,.2,Ai.wall);let U=-Ht.halfWidth;for(let q of Hv){let ft=q-.9;Qn(o,(U+ft)/2,Ht.windowY,Ht.back,ft-U,1.14,.2,Ai.wall),U=q+.9}Qn(o,(U+Ht.halfWidth)/2,Ht.windowY,Ht.back,Ht.halfWidth-U,1.14,.2,Ai.wall),Qn(o,0,2.75,Ht.back,Ht.halfWidth*2,.17,.3,Ai.wallTop);let H=c(vE(s?"LIVE OFFICE":"CHAT ROOM")),k=new Re(new Fn(3.35,.82),new Bn({map:H,transparent:!0,alphaTest:.2,side:Dn}));k.position.set(0,3.22,Ht.back+.2),o.add(k),Qn(o,0,.38,Ht.back+.12,Ht.halfWidth*2-.2,.55,.06,7822694),Qn(o,0,.74,Ht.back+.16,Ht.halfWidth*2-.1,.08,.1,13803644);let W=new Bn({map:c(QN()),transparent:!0,alphaTest:.03,side:Dn,depthWrite:!1});for(let q of Hv){let ft=new Re(new Fn(1.72,1.08),W);ft.position.set(q,Ht.windowY,Ht.back-.14),o.add(ft);let Nt=new Re(new Fn(1.65,1.08),new Bn({color:16173467,transparent:!0,opacity:.1,side:Dn,depthWrite:!1}));Nt.position.set(q,Ht.windowY,Ht.back+.02),o.add(Nt),Qn(o,q,1.14,Ht.back+.2,1.98,.11,.36,Ai.cream),Qn(o,q,2.3,Ht.back+.12,1.92,.11,.22,Ai.cream);for(let Ft of[-.88,0,.88])Qn(o,q+Ft,Ht.windowY,Ht.back+.12,.09,1.13,.15,Ai.cream)}for(let[q,ft]of[-6.4,-2.5,2.5].entries())Nn(o,c(TE(q)),ft,1.65,Ht.back+.17,.66,.81);let J=[-2.4,2.4].map(q=>{Qn(o,q,2.22,Ht.back+.3,.31,.15,.2,7230304);let ft=Qn(o,q,2.13,Ht.back+.42,.15,.12,.14,16766368,16762250,.5),Nt=new na(16758651,0,4.5,2);return Nt.position.set(q,2.08,Ht.back+.6),o.add(Nt),{bulb:ft,glow:Nt}}),X;if(!s){let q=new Re(new cu(.92,.92,.04,12),RE(11439750));q.position.set(li.x,.05,li.z),q.receiveShadow=!0,o.add(q);let ft=c(bE()),Nt=Nn(o,ft,li.x+.1,.96,li.z-.14,1.39,1.9);Nt.material.color.setHex(7960718),Nt.material.emissiveIntensity=0,Nt.castShadow=!1,X=Nn(o,ft,li.x,.95,li.z,1.35,1.86);let Ft=Vv("AI CORE");Ft.position.set(li.x,2.38,li.z),o.add(Ft)}Nn(o,c(gE()),0,.68,a,4.6,1.25);let st=document.createElement("canvas");st.width=64,st.height=64;let V=st.getContext("2d");if(!V)throw new Error("Canvas 2D is required for contact shadows.");let ct=V.createRadialGradient(32,32,3,32,32,31);ct.addColorStop(0,"#241f38e8"),ct.addColorStop(.3,"#292335a8"),ct.addColorStop(.7,"#29233540"),ct.addColorStop(1,"#29233500"),V.fillStyle=ct,V.fillRect(0,0,64,64);let mt=new Vi(st);mt.magFilter=Rn;let Mt=[],zt=(q,ft,Nt,Ft,Ye,Ze=.065,ee=.68)=>{let ci=new Re(new Fn(Ft,Ye),new Bn({map:mt,transparent:!0,depthWrite:!1,opacity:ee,toneMapped:!1}));ci.rotation.x=-Math.PI/2,ci.position.set(ft,Ze,Nt),ci.renderOrder=3,q.add(ci);let rs=CE(Ft,Ye);rs.position.set(ft,Ze+.12,Nt),q.add(rs),Mt.push({mesh:ci,opacity:ee})};s||zt(o,li.x,li.z,1.05,.85,.076),zt(o,0,a,4.1,.82);let se=q=>{let ft=mE(q);Object.values(ft).flatMap(Ft=>Object.values(Ft)).forEach(c);let Nt=$N(q,mt,ft);return o.add(Nt.group,Nt.shadow,Nt.caster),Nt},le=t.agents.map(q=>se(q.id)),ae=t.agents.map(({x:q,z:ft})=>({x:q,z:ft})),Z=new Hi;Z.visible=!s&&t.progress.context;let tt=new Hi;if(tt.visible=!s&&!t.progress.context,!s){Qn(Z,3,.08,-1.8,3.05,.12,2.85,Ai.lavender),Nn(Z,c(EE()),3,.76,-2.5,1.45,1.42),zt(Z,3,-2.5,1.25,.65,.153);for(let Nt=0;Nt<3;Nt++)Nn(Z,c(Fv(Nt)),2.1+Nt*.78,.48,-1.18,.66,.87),zt(Z,2.1+Nt*.78,-1.18,.54,.42,.153,.55);let q=Vv("CONTEXT");q.position.set(3,2.28,-2.1),Z.add(q),o.add(Z);let ft=Vv("CONTEXT  ?");ft.position.set(3,1.34,-1.8),tt.add(ft),o.add(tt)}let _t=r.map(()=>{let q=new Hi;return o.add(q),q}),Vt=r.map(({x:q,z:ft},Nt)=>{let Ft=_t[Nt],Ye=jN(Ft,q,ft,Nt,c);return zt(Ft,q,ft-.56,1.3,.65),zt(Ft,q+.35,ft+.37,.55,.45,.065,.5),Ye}),Ct=r.map(({x:q,z:ft},Nt)=>{let Ft=new na(Nt%2?12755181:7726029,0,3.1,2);return Ft.position.set(q,1.35,ft-.54),Nt<Tr.length&&_t[Nt].add(Ft),Ft}),j=r.map(({x:q,z:ft},Nt)=>Nn(_t[Nt],c(AE()),q+.43,.82,ft-.55,.18,.27)),$t=r.map(({x:q,z:ft},Nt)=>Nn(_t[Nt],c(xE()),q-.58,.79,ft-.49,.36,.34)),D={queued:[c(Ll("queued"))],assigned:[c(Ll("assigned"))],working:Array.from({length:17},(q,ft)=>c(Ll("working",ft))),complete:[c(Ll("complete"))],failed:[c(Ll("failed"))]},he=r.map(({x:q,z:ft},Nt)=>{let Ft=new Re(new Fn(.58,.58),new Bn({map:D.queued[0],transparent:!0,alphaTest:.25,depthWrite:!1,side:Dn}));return Ft.position.set(q,2.06,ft-.57),_t[Nt].add(Ft),Ft});for(let q=0;q<2;q++){let ft=(s?-6.9:-4.6)+q*.35,Nt=s?-3.5:2.2;Nn(o,c(Fv(q)),ft,.43,Nt,.65,.81),zt(o,ft,Nt,.55,.4,.065,.52)}let Bt=c(yE()),Rt=s?{x:-6.8,z:-2.5}:{x:-4.37,z:2.99},yt=s?{x:6.8,z:-3.45}:{x:5.8,z:3.35};Nn(o,Bt,Rt.x-.05,.84,Rt.z-.16,.94,1.14).material.color.setHex(9084052),Nn(o,Bt,Rt.x,.84,Rt.z,.98,1.16),zt(o,Rt.x,Rt.z,.63,.55),Nn(o,Bt,yt.x,.67,yt.z,.78,.94),zt(o,yt.x,yt.z,.55,.42);let xt=[];for(let q=0;q<(s?0:9);q++){let ft=Qn(o,li.x-.32+q%3*.32,2.2+q%2*.2,li.z-.33+Math.floor(q/3)*.31,.08,.08,.08,Ai.cream,Ai.cream,.8);xt.push(ft)}let Gt=document.createElement("canvas");Gt.width=128,Gt.height=128;let Be=Gt.getContext("2d");if(!Be)throw new Error("Canvas 2D is required for sunlight pools.");let ge=Be.createImageData(128,128);for(let q=0;q<128;q++)for(let ft=0;ft<128;ft++){let Nt=Math.max(0,1-Math.abs((ft+.5)/64-1)),Ft=(q+.5)/128,Ye=Math.min(1,Ft*9,(1-Ft)*5),Ze=(q*128+ft)*4;ge.data[Ze]=ge.data[Ze+1]=ge.data[Ze+2]=255,ge.data[Ze+3]=Math.round(220*Nt**1.4*Ye)}Be.putImageData(ge,0,0);let T=new Vi(Gt);T.minFilter=Rn;let x=document.createElement("canvas");x.width=x.height=64;let F=x.getContext("2d");if(!F)throw new Error("Canvas 2D is required for sunlight pools.");let Y=F.createRadialGradient(32,32,3,32,32,32);Y.addColorStop(0,"#ffffffcc"),Y.addColorStop(.65,"#ffffff80"),Y.addColorStop(1,"#ffffff00"),F.fillStyle=Y,F.fillRect(0,0,64,64);let et=new Vi(x);et.minFilter=Rn;let K=Hv.map(q=>{let ft=new Jn;ft.setAttribute("position",new vn(new Float32Array(12),3)),ft.setAttribute("uv",new vn(new Float32Array([0,1,1,1,0,0,1,0]),2)),ft.setIndex([0,1,2,1,3,2]);let Nt=new Bn({map:T,color:16763280,transparent:!0,opacity:0,depthWrite:!1,side:Dn,blending:Br}),Ft=new Re(ft,Nt);Ft.renderOrder=2,o.add(Ft);let Ye=new Re(new Fn(2.05,2.2),new Bn({map:et,transparent:!0,opacity:0,depthWrite:!1,color:16766637,blending:Br}));Ye.rotation.x=-Math.PI/2,Ye.renderOrder=2,o.add(Ye);let Ze=new Jn;Ze.setAttribute("position",new vn(new Float32Array(36),3));let ee=new bl(Ze,new Ml({map:et,color:16766637,size:3,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,blending:Br}));return ee.renderOrder=2,o.add(ee),{x:q,shaft:Ft,pool:Ye,dust:ee}}),Et=1,ot=0,bt=0,Tt=!1,at=0,dt=0,It=0,wt=null,ht=null,Yt=new mu,O=new Kt,rt=q=>{let ft=d.domElement.getBoundingClientRect();O.set((q.clientX-ft.left)/ft.width*2-1,-(q.clientY-ft.top)/ft.height*2+1),Yt.setFromCamera(O,h);let Nt=le.slice(0,t.progress.capacity).map(Ft=>Ft.figure);for(let Ft of Yt.intersectObjects(Nt)){let Ye=le.findIndex(Xi=>Xi.figure===Ft.object),Ze=Ft.object.material.map;if(Ye<0||!Ft.uv||!Ze||!(Ze.image instanceof HTMLCanvasElement))continue;let ee=Ze.image,ci=Math.min(ee.width-1,Math.floor(Ft.uv.x*ee.width)),rs=Math.min(ee.height-1,Math.floor((1-Ft.uv.y)*ee.height));if((ee.getContext("2d")?.getImageData(ci,rs,1,1).data[3]??0)>48)return Ye}return null},ut=q=>{Tt=!0,It=0,at=q.clientX,dt=q.clientY,d.domElement.setPointerCapture(q.pointerId)},St=q=>{if(i&&!Tt){let Ft=rt(q);d.domElement.style.cursor=Ft===null?"grab":"pointer",i.onAgentHover(Ft,q.clientX,q.clientY)}if(!Tt)return;let ft=q.clientX-at,Nt=q.clientY-dt;It+=Math.hypot(ft,Nt),!(i&&It<=5)&&(ht=null,i?.onAgentHover(null,q.clientX,q.clientY),ot=sn.clamp(ot-ft*.012/Et,s?-5.5:-2.5,s?5.5:2.5),bt=sn.clamp(bt-Nt*.014/Et,s?-3.5:-2,s?3.5:2),at=q.clientX,dt=q.clientY)},it=q=>{if(i&&Tt&&It<=5&&q.type==="pointerup"){let ft=rt(q);ft!==null&&i.onAgentSelect(ft)}Tt=!1},$=()=>i?.onAgentHover(null,0,0),At=q=>{q.preventDefault(),ht=null,Et=sn.clamp(Et*(q.deltaY>0?.9:1.1),.74,1.65)},Dt=d.domElement;Dt.addEventListener("pointerdown",ut),Dt.addEventListener("pointermove",St),Dt.addEventListener("pointerup",it),Dt.addEventListener("pointercancel",it),i&&Dt.addEventListener("pointerleave",$),Dt.addEventListener("wheel",At,{passive:!1});let xe=()=>{let q=Math.max(1,e.clientWidth),ft=Math.max(1,e.clientHeight),Nt=q<700?.8:1;d.setSize(Math.ceil(q*Nt),Math.ceil(ft*Nt),!1);let Ft=q/ft,Ye=4.7,Ze=bu.distanceTo(new B(0,.4,0));h.aspect=Ft,h.fov=sn.radToDeg(2*Math.atan(Math.max(Math.tan(sn.degToRad(28/2)),Ye/(Ze*Ft)))),h.updateProjectionMatrix()},ce=new ResizeObserver(xe);ce.observe(e),xe();let hn=matchMedia("(prefers-reduced-motion: reduce)").matches,je=performance.now()/1e3,Il=je,as=0,qr="",Ol=-1;return{capturePositions(){ae=t.agents.map(({x:q,z:ft})=>({x:q,z:ft}))},focusAgent(q){wt=q!==null&&q>=0&&q<t.progress.capacity?q:null,ht=wt},render(q,ft,Nt,Ft){let Ye=Math.max(0,Math.min(.05,q-Il));je+=Ye,Il=q;let Ze=`${t.progress.capacity}/${t.progress.context}/${t.progress.workflow}`;(Ft||ft!==as||Ze!==qr)&&(d.shadowMap.needsUpdate=!0),as=ft,qr=Ze;let ee=mf(t.time,ft),ci=ee.sun+ee.moon,rs=ci>0?ee.moon/ci:0,Xi=ee.moon/.45,oa=sn.clamp(1-ee.sun/2,0,1);W.color.setHex(16777215).lerp(KN,Xi*.7),_.color.setHex(ee.sunColor).lerp(WN,rs),_.intensity=ci,_.position.set(sn.lerp(ee.sunX,-3.4,rs),sn.lerp(ee.sunY,6.6,rs),-24),u.color.setHex(ee.skyColor).lerp(qN,Xi*.32).lerp(ZN,ee.lamp*(.28-Xi*.1)),u.intensity=ee.ambient,v.color.setHex(ee.bounceColor).lerp(YN,Xi*.32),v.groundColor.setHex(11827574),v.intensity=ee.ambient*.95;let ja=Math.min(1,ee.sun/3.2),b=M.material;b.uniforms.uSunSide.value=sn.clamp(ee.sunX/6,-1,1)*ja,b.uniforms.uNight.value=oa,Mt.forEach(({mesh:L,opacity:P})=>{L.material.opacity=P*(.72+ja*.28)}),A.intensity=.9+oa*1.35+ee.lamp*.35,w.intensity=.25+oa*1.4,C.intensity=.25+ee.lamp*1.1,J.forEach(({bulb:L,glow:P})=>{L.material.emissiveIntensity=ee.lamp*.75,P.intensity=ee.lamp*1.25}),d.toneMappingExposure=1.34-oa*.16,S.uniforms.uDay.value=Math.min(1,ee.sun/3.2),S.uniforms.uWarm.value=ee.warmth,S.uniforms.uSkyTint.value.setHex(ee.skyColor),S.uniforms.uTime.value=hn?0:t.time,S.uniforms.uSun.value.copy(_.position).normalize();for(let{x:L,shaft:P,pool:I,dust:nt}of K){let lt=(Ht.windowY-.08)/(_.position.y-Ht.windowY),vt=L+(L-_.position.x)*lt,gt=Ht.back+(Ht.back-_.position.z)*lt,Ut=sn.clamp((Ht.halfWidth-.9-Math.abs(vt))/.7,0,1);P.geometry.attributes.position.array.set([L-.82,Ht.windowY+.06,Ht.back+.2,L+.82,Ht.windowY+.06,Ht.back+.2,vt-1.15,.08,gt,vt+1.15,.08,gt]),P.geometry.attributes.position.needsUpdate=!0,P.geometry.computeBoundingSphere(),P.material.color.copy(_.color),P.material.opacity=(ja*.4+Xi*.04)*Ut,I.material.color.copy(_.color),I.material.opacity=(ee.sun/3.2*.22+Xi*.12)*Ut,I.position.set(vt,.067,gt);let Lt=nt.geometry.attributes.position.array;for(let Wt=0;Wt<12;Wt++){let ve=.14+(Wt*.31+L*.13+1)%1*.7,Ve=hn?0:Math.sin(je*.38+Wt*2.3+L),_e=ve+Ve*.025,Se=Math.sin(Wt*15.73+L*7.19)*.68;Lt[Wt*3]=sn.lerp(L,vt,_e)+Se*(.6+_e*.3),Lt[Wt*3+1]=sn.lerp(Ht.windowY,.12,_e),Lt[Wt*3+2]=sn.lerp(Ht.back+.22,gt,_e)}nt.geometry.attributes.position.needsUpdate=!0,nt.geometry.computeBoundingSphere(),nt.material.color.copy(_.color),nt.material.opacity=(ja*.42+Xi*.09)*Ut}for(;le.length<t.agents.length;)le.push(se(le.length));let z=t.agents.some(L=>L.taskId!==void 0);if(X&&(X.material.emissiveIntensity=(z?.65:.37)+(hn?0:Math.sin(je*2.2)*.1),X.position.y=.95+(hn?0:Math.sin(je*1.9)*.035)),Z.visible=!s&&t.progress.context,tt.visible=!s&&!t.progress.context,s){let L=gf(t.progress.capacity);L!==Ol&&(_t.forEach((P,I)=>{P.visible=I<L}),e.dataset.visibleDesks=String(L),Ol=L)}if(j.forEach((L,P)=>{let I=t.agents[P]?.state==="working";L.material.emissiveIntensity=P<t.progress.capacity?I?1.1:.45:0,L.material.color.setHex(P<t.progress.capacity?I?16777215:10930622:Ai.edge)}),Vt.forEach((L,P)=>{L.material.emissiveIntensity=.24+oa*.58,Ct[P].intensity=P<t.progress.capacity?.12+oa*1.45+(t.agents[P]?.state==="working"?.3:0):0}),$t.forEach((L,P)=>{L.visible=P<t.progress.capacity&&t.progress.workflow>0,L.material.emissiveIntensity=.18+t.progress.workflow*.1}),he.forEach((L,P)=>{let I=t.requests.find(lt=>lt.stationId===P&&(lt.status==="queued"||lt.status==="assigned"||lt.status==="working"))??t.requests.find(lt=>lt.stationId===P&&lt.resolvedAt!==void 0&&t.time-lt.resolvedAt<2.5);if(L.visible=!!I&&P<t.progress.capacity,!I)return;let nt=I.status==="working"?Math.min(16,Math.floor(I.progress*16)):0;L.material.map=D[I.status][nt],L.position.y=2.06+(hn?0:Math.sin(je*1.8+P)*.045)}),le.forEach((L,P)=>{let I=t.agents[P];if(L.group.visible=L.shadow.visible=L.caster.visible=!!I,!I)return;let nt=dE(ae[P],I,Nt);if(L.group.position.set(nt.x,I.state==="idle"&&!hn?Math.sin(je*1.65+P)*.038:0,nt.z),L.shadow.position.set(nt.x,.095,nt.z),L.caster.position.set(nt.x,.18,nt.z),L.shadow.scale.setScalar(P===wt&&s?1.22:1),L.shadow.material.opacity=(P===wt&&s?.86:.68)*(.72+ja*.28),I.state==="idle")L.facing=P<2?"right":"left";else if(I.state==="working")L.facing="away";else{let gt=I.target.x-I.x,Ut=I.target.z-I.z;Ut<-Math.abs(gt)*.85&&Math.abs(Ut)>.2?L.facing="away":Math.abs(gt)>.2?L.facing=gt<0?"left":"right":Ut>.2&&(L.facing="left")}let lt=I.state==="working"?"working":I.state==="idle"?"coffee":!hn&&Math.sin(je*8+P)>0?"stepA":"stepB",vt=L.frames[lt][L.facing];vt!==L.figure.material.map&&(L.figure.material.map=vt,L.figure.material.emissiveMap=vt,L.backing.material.map=vt,L.backing.material.emissiveMap=vt)}),xt.forEach((L,P)=>{L.position.y=2.2+(hn?0:Math.sin(je*1.2+P*2.1)*.15),L.visible=z||P%3===0}),ht!==null&&ht<t.progress.capacity){let L=t.agents[ht],P=1-Math.exp(-Ye*7);ot=sn.lerp(ot,sn.clamp(L.x+1.15,-5.5,5.5),P),bt=sn.lerp(bt,sn.clamp(L.z,-3.5,3.5),P),Et=sn.lerp(Et,1.3,P)}h.zoom=Et,h.position.set(bu.x+ot,bu.y,bu.z+bt),h.lookAt(ot,.4,bt),h.updateProjectionMatrix(),m.position.copy(h.position),f||d.render(o,h)},dispose(){ce.disconnect(),Dt.removeEventListener("pointerdown",ut),Dt.removeEventListener("pointermove",St),Dt.removeEventListener("pointerup",it),Dt.removeEventListener("pointercancel",it),i&&Dt.removeEventListener("pointerleave",$),Dt.removeEventListener("wheel",At),Dt.removeEventListener("webglcontextlost",p),Dt.removeEventListener("webglcontextrestored",g),e.classList.remove("context-lost"),o.traverse(q=>{q instanceof Re&&(q.geometry.dispose(),q.material instanceof Bn&&q.material.map===T&&(q.material.map=null),(Array.isArray(q.material)?q.material:[q.material]).forEach(Nt=>Nt.dispose())),q instanceof xl&&(q.material.map?.dispose(),q.material.dispose()),q instanceof bl&&(q.geometry.dispose(),q.material.dispose())}),T.dispose(),et.dispose(),mt.dispose(),l.forEach(q=>q.dispose()),d.dispose(),s&&delete e.dataset.visibleDesks,Dt.remove()}}}var NE=["Ada","Aiko","Alma","Amari","Anika","Arden","Ari","Basil","Bea","Cleo","Dara","Demi","Eli","Emery","Esme","Finn","Inez","Ira","Jules","Kaia","Kit","Lena","Lio","Luca","Mara","Mica","Milo","Mira","Nell","Nico","Noor","Oli","Orla","Pax","Remy","Rhea","Rio","Sage","Soli","Tavi"],UE=["Alder","Arbor","Ash","Bell","Birch","Bloom","Brooks","Cedar","Cloud","Dale","Dawn","Dove","Dusk","Elm","Fern","Finch","Frost","Grove","Hart","Haven","Hollow","Ivy","Lake","Lark","Linden","Marsh","Meadow","Moss","Oak","Orchard","Pearl","Pine","Reed","Ridge","River","Rowan","Shore","Silver","Stone","Vale"];function LE(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t=Math.imul(t^t>>>16,2146121005),t=Math.imul(t^t>>>15,2221713035),t^=t>>>16,t>>>0}function tU(e){return`${NE[LE(`given:${e}`)%NE.length]} ${UE[LE(`family:${e}`)%UE.length]}`}function up(e,t){return e.title||(e.sessionId===t?`Your session \xB7 ${e.sessionId.slice(0,8)}`:`Session ${e.sessionId.slice(0,8)}`)}function Gv(e){let t=[...e.sessions].sort((s,a)=>+(a.sessionId===e.currentSessionId)-+(s.sessionId===e.currentSessionId)||s.sessionId.localeCompare(a.sessionId)),n=[...t.map(s=>({key:s.sessionId,sessionTitle:up(s,e.currentSessionId),status:s.status,activity:s.activity,helper:!1})),...t.flatMap(s=>s.subagents.map((a,r)=>({key:`${s.sessionId}:helper:${a.id??r}`,sessionTitle:up(s,e.currentSessionId),status:a.status,activity:a.activity,helper:!0})))],i=new Set;return n.map(s=>{let a=tU(s.key),r=a;for(let o=2;i.has(r);o++)r=`${a} ${o}`;return i.add(r),{...s,name:r}})}var G=Tu(kv(),1),iU=[...Tr,...Yo],sU=[...Fc.map(({x:e})=>({x:e,z:cp+.75})),...Yo.map((e,t)=>_M(t,cp))],Eu=1/30,aU={currentSessionId:"",sessions:[]};function BE(e){return{id:e,state:"idle",x:100,z:100,target:{x:100,z:100},route:[],workLeft:0,workTotal:0,visitedContext:!1}}function rU(){let e=new pf(_0());return e.agents=Array.from({length:Zo},(t,n)=>BE(n)),e.requests=[],e.progress.capacity=0,e.progress.context=!1,e.progress.workflow=1,e}function oU(e,t,n){let i=t.slice(0,bs);for(;e.agents.length<i.length;)e.agents.push(BE(e.agents.length));e.agents.length=Math.max(Zo,i.length),e.progress.capacity=i.length,e.requests=[],i.forEach((s,a)=>{let r=e.agents[a],o=s.status!=="idle"&&s.status!=="offline",l=o?iU[a]:sU[a];if(n[a]||(r.x=l.x,r.z=l.z),n[a]=!0,r.target={...l},o){r.taskId=a+1;let c=s.status==="blocked"?"failed":s.status==="thinking"?"assigned":"working";e.requests.push({id:a+1,stationId:a,title:s.activity,kind:"chat",status:c,progress:0,reward:0,...c==="failed"?{resolvedAt:e.time}:{}})}else r.taskId=void 0});for(let s=i.length;s<e.agents.length;s++){n[s]=!1;let a=e.agents[s];a.x=a.z=100,a.target={x:100,z:100},a.taskId=void 0,a.state="idle"}n.length=e.agents.length}function lU(e,t){for(let n=0;n<e.progress.capacity;n++){let i=e.agents[n],s=i.target.x-i.x,a=i.target.z-i.z,r=Math.hypot(s,a),o=i.taskId!==void 0;if(r>.02){let l=Math.min(r,2.05*t);i.x+=s/r*l,i.z+=a/r*l,i.state=o?"walking":"returning"}else i.x=i.target.x,i.z=i.target.z,i.state=o?"working":"idle"}}function cU(){let[e,t]=(0,Le.useState)(aU),[n,i]=(0,Le.useState)("Connecting to local Copilot sessions\u2026"),[s,a]=(0,Le.useState)(!1),[r,o]=(0,Le.useState)("office"),[l,c]=(0,Le.useState)(!1),[h,d]=(0,Le.useState)(!1),[f,p]=(0,Le.useState)(0),[g,S]=(0,Le.useState)(0),[m,u]=(0,Le.useState)(!1),[v,_]=(0,Le.useState)(1),[y,A]=(0,Le.useState)(""),[w,C]=(0,Le.useState)(null),N=(0,Le.useRef)(null),E=(0,Le.useRef)(null),M=(0,Le.useRef)(null),U=(0,Le.useRef)([]),H=(0,Le.useRef)(null),k=(0,Le.useRef)(""),W=(0,Le.useRef)(0),J=(0,Le.useRef)(!1),X=(0,Le.useRef)(1),st=(j,$t=!0)=>{let D=U.current.findIndex(he=>he.key===j);M.current?.focusAgent(D>=0&&D<bs?D:null),k.current=`${j}:${D}`,A(j),a(!0),$t&&o("agents")};(0,Le.useEffect)(()=>{s&&r==="agents"&&H.current?.scrollIntoView({block:"nearest",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},[y,s,r]),(0,Le.useEffect)(()=>{if(!N.current)return;let j=rU();E.current=j;let $t=Array(Zo).fill(!1),D;try{D=DE(N.current,j,"live",{onAgentHover(T,x,F){let Y=T===null?void 0:U.current[T],et=N.current?.getBoundingClientRect();C(Y&&et?{name:Y.name,x:x-et.left,y:F-et.top}:null)},onAgentSelect(T){let x=U.current[T];x&&st(x.key)}}),M.current=D}catch(T){N.current.classList.add("static-fallback"),i(`3D office unavailable; live status remains visible. ${T instanceof Error?T.message:String(T)}`)}let he=new EventSource("/events");he.onmessage=T=>{try{let x=JSON.parse(T.data);if(!Array.isArray(x.sessions)||typeof x.currentSessionId!="string")throw new Error("Invalid office status");let F=Gv(x);U.current=F,D?.capturePositions(),oU(j,F,$t),t(x),i("Live read-only view \xB7 local sessions running Agent Inc Live")}catch(x){i(`Office update failed: ${x instanceof Error?x.message:String(x)}`)}},he.addEventListener("error",()=>{i("Connection interrupted; reconnecting to the local office\u2026")});let Bt=0,Rt=performance.now(),yt=0,Ce=Rt/1e3,xt=0,Gt=Rt,Be=()=>{Rt=performance.now(),yt=0,D?.capturePositions()},ge=T=>{let x=Math.min((T-Rt)/1e3,.2);if(Rt=T,!document.hidden){yt+=x;let F=!1;for(;yt>=Eu;)D?.capturePositions(),lU(j,Eu),J.current||(j.time+=Eu*X.current),yt-=Eu,F=!0;J.current||(Ce+=x*X.current),D?.render(Ce,W.current,yt/Eu,F),xt++,T-Gt>=1e3&&(p(Math.round(xt*1e3/(T-Gt))),xt=0,Gt=T)}Bt=requestAnimationFrame(ge)};return document.addEventListener("visibilitychange",Be),Bt=requestAnimationFrame(ge),()=>{cancelAnimationFrame(Bt),document.removeEventListener("visibilitychange",Be),he.close(),D?.dispose(),M.current=null,E.current=null}},[]);let V=Gv(e),ct=V.slice(0,bs),mt=gf(V.length),Mt=V.filter(j=>j.status==="thinking"||j.status==="tool").length,zt=V.filter(j=>j.status==="idle").length,se=V.filter(j=>j.status==="blocked").length,le=e.sessions.reduce((j,$t)=>j+$t.subagents.length,0),ae=e.sessions.reduce((j,$t)=>j+($t.messages??0),0),Z=e.sessions.flatMap(j=>(j.events??[]).map(($t,D)=>({...$t,owner:up(j,e.currentSessionId),key:`${j.sessionId}:${$t.at}:${D}`}))).sort((j,$t)=>$t.at-j.at).slice(0,8);(0,Le.useEffect)(()=>{let j=V.findIndex(D=>D.key===y),$t=`${y}:${j}`;k.current!==$t&&(M.current?.focusAgent(j>=0&&j<bs?j:null),k.current=$t),y&&j<0&&(A(""),C(null))},[e,y]);let tt=mf(E.current?.time??0,g),_t=()=>{W.current=(W.current+.25)%1,S(W.current)},Vt=()=>{J.current=!J.current,u(J.current)},Ct=()=>{X.current=X.current===1?2:1,_(X.current)};return(0,G.jsxs)("main",{className:"shell",children:[(0,G.jsxs)("header",{className:"topbar",children:[(0,G.jsxs)("div",{className:"identity","aria-label":"Agent Inc Live Office",children:[(0,G.jsx)("span",{className:"brand-icon","aria-hidden":"true",children:"\u2726"}),(0,G.jsxs)("div",{className:"brand",children:["agent",(0,G.jsx)("span",{children:"inc."})]})]}),(0,G.jsxs)("div",{className:"top-stats",children:[(0,G.jsxs)("div",{className:"stat",children:[(0,G.jsx)("span",{className:"stat-label",children:"\u2727 \xA0SESSIONS"}),(0,G.jsx)("strong",{children:e.sessions.length})]}),(0,G.jsxs)("div",{className:"stat",children:[(0,G.jsx)("span",{className:"stat-label",children:"\u25C8 \xA0WORKING"}),(0,G.jsx)("strong",{children:Mt})]}),(0,G.jsxs)("div",{className:"stat desktop-stat",children:[(0,G.jsx)("span",{className:"stat-label",children:"\u25CC \xA0MESSAGES"}),(0,G.jsx)("strong",{children:ae})]}),(0,G.jsxs)("button",{type:"button",className:"system-toggle","aria-expanded":s,"aria-controls":"system-panel",onClick:()=>a(j=>!j),children:[s?"CLOSE":"ACTIVITY"," ",(0,G.jsx)("span",{"aria-hidden":"true",children:"\u2733"})]})]})]}),(0,G.jsxs)("div",{className:"layout",children:[(0,G.jsxs)("section",{className:"world-panel","aria-label":"Live Copilot office",children:[(0,G.jsxs)("div",{className:"scene-header",children:[(0,G.jsxs)("div",{children:[(0,G.jsx)("span",{className:"online-dot"})," LIVE OFFICE"]}),(0,G.jsx)("div",{className:"scene-tools",children:(0,G.jsxs)("button",{type:"button",className:"time-preview",onClick:_t,title:"Preview the next six hours of decorative office lighting","aria-label":`Office lighting ${tt.label}; preview next six hours`,children:[(0,G.jsx)("span",{"aria-hidden":"true",children:tt.sun>1?"\u263C":tt.moon>.2?"\u263E":"\u25D1"})," ",tt.label," ",(0,G.jsx)("span",{className:"time-arrow",children:"\u21BB"})]})})]}),(0,G.jsxs)("div",{ref:N,className:"world-host",children:[w&&(0,G.jsx)("div",{className:"agent-hover",style:{left:w.x,top:w.y},children:w.name}),(0,G.jsxs)("div",{className:"world-callout live-callout",children:[(0,G.jsx)("span",{className:"callout-star",children:"\u2726"}),(0,G.jsx)("span",{children:se?`${se} worker${se===1?"":"s"} need attention.`:Mt?`${Mt} worker${Mt===1?" is":"s are"} active.`:"The office is listening for Copilot activity."})]})]}),(0,G.jsxs)("div",{className:"scene-footer",children:[(0,G.jsxs)("div",{className:"scene-live",children:[(0,G.jsx)("span",{className:"tiny-pulse"}),(0,G.jsx)("span",{className:"live-label",children:"OBSERVING"}),(0,G.jsxs)("span",{className:"live-count",children:[" ",(0,G.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",Mt," working",(0,G.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",zt," on break",(0,G.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",se," needing attention"]})]}),(0,G.jsxs)("div",{className:"scene-controls",children:[(0,G.jsx)("button",{type:"button",onClick:Vt,title:"Pause only decorative light and idle motion, not live sessions","aria-label":m?"Resume office ambience":"Pause office ambience",children:m?"\u25B6":"\u2161"}),(0,G.jsxs)("button",{type:"button",onClick:Ct,title:"Change cosmetic lighting speed only","aria-label":`Set office ambience to ${v===1?"double":"normal"} speed`,children:[v,"\xD7"]}),(0,G.jsx)("button",{type:"button",onClick:()=>d(!h),title:"Toggle view diagnostics","aria-label":h?"Hide diagnostics":"Show diagnostics","aria-expanded":h,children:"\u22EF"})]})]})]}),(0,G.jsxs)("aside",{id:"system-panel",className:`sidebar ${s?"sidebar-open":""}`,children:[(0,G.jsxs)("div",{className:"sidebar-heading",children:[(0,G.jsx)("span",{children:"LIVE OFFICE / ACTIVITY"}),(0,G.jsx)("button",{type:"button",className:"sidebar-close",onClick:()=>a(!1),"aria-label":"Close activity",children:"\xD7"})]}),(0,G.jsx)("div",{className:"sidebar-tabs",role:"tablist","aria-label":"Activity categories",children:["office","stations","agents"].map(j=>(0,G.jsx)("button",{type:"button",id:`tab-${j}`,role:"tab","aria-selected":r===j,"aria-controls":`panel-${j}`,onClick:()=>o(j),children:j},j))}),r==="office"&&(0,G.jsxs)("div",{id:"panel-office",role:"tabpanel","aria-labelledby":"tab-office",className:"upgrade-pane",children:[(0,G.jsxs)("div",{className:"system-card",children:[(0,G.jsx)("div",{className:"system-emblem",children:"\u2726"}),(0,G.jsxs)("div",{children:[(0,G.jsx)("div",{className:"system-name",children:"The Living Office"}),(0,G.jsx)("div",{className:"system-desc",children:"Real sessions, displayed without prompts, code or tool output."})]})]}),(0,G.jsxs)("div",{className:"mini-metrics",children:[(0,G.jsxs)("div",{children:[(0,G.jsx)("span",{children:"LOCAL SESSIONS"}),(0,G.jsx)("strong",{children:e.sessions.length})]}),(0,G.jsxs)("div",{children:[(0,G.jsx)("span",{children:"MESSAGES SEEN"}),(0,G.jsx)("strong",{children:ae})]})]}),(0,G.jsxs)("div",{className:"live-detail",children:[(0,G.jsxs)("span",{children:[le," subagents"]}),(0,G.jsxs)("span",{children:[Z.length," recent events"]})]}),(0,G.jsxs)("div",{className:"section-title",children:[(0,G.jsx)("span",{children:"\u2726 \xA0OFFICE SYSTEMS"}),(0,G.jsx)("span",{children:"READ ONLY"})]}),(0,G.jsxs)("div",{className:"upgrade-list",children:[(0,G.jsxs)("div",{className:"upgrade",children:[(0,G.jsx)("div",{className:"upgrade-symbol",children:"\u25C8"}),(0,G.jsxs)("div",{className:"upgrade-info",children:[(0,G.jsxs)("div",{className:"upgrade-name",children:["Live status ",(0,G.jsx)("span",{children:"CONNECTED"})]}),(0,G.jsx)("p",{children:n}),(0,G.jsxs)("div",{className:"live-detail",children:[(0,G.jsxs)("span",{children:[Mt," active"]}),(0,G.jsxs)("span",{children:[zt," idle"]}),(0,G.jsxs)("span",{className:se?"attention":"",children:[se," need attention"]})]})]})]}),(0,G.jsxs)("div",{className:"upgrade",children:[(0,G.jsx)("div",{className:"upgrade-symbol context-symbol",children:"\u25A3"}),(0,G.jsxs)("div",{className:"upgrade-info",children:[(0,G.jsxs)("div",{className:"upgrade-name",children:["Project room ",(0,G.jsxs)("span",{children:[mt," DESKS"]})]}),(0,G.jsx)("p",{children:"Desks grow with participating workers and return to four when they leave. Only sessions running this extension can join."}),V.length>bs&&(0,G.jsxs)("p",{children:[V.length-bs," workers are waiting for space in the 16-desk room."]})]})]})]})]}),r==="stations"&&(0,G.jsxs)("div",{id:"panel-stations",role:"tabpanel","aria-labelledby":"tab-stations",className:"upgrade-pane",children:[(0,G.jsxs)("div",{className:"pane-intro",children:[(0,G.jsx)("strong",{children:"Session desks"}),(0,G.jsx)("span",{children:"Each desk represents actual local Copilot activity. Selection highlights its status here; the canvas cannot navigate App sessions."})]}),ct.map((j,$t)=>(0,G.jsxs)("div",{className:"upgrade station-card live-card",children:[(0,G.jsx)("div",{className:"station-number",children:String($t+1).padStart(2,"0")}),(0,G.jsxs)("div",{className:"upgrade-info",children:[(0,G.jsxs)("div",{className:"upgrade-name",children:[j.name," ",(0,G.jsx)("span",{children:j.status.toUpperCase()})]}),(0,G.jsx)("p",{children:j.sessionTitle}),(0,G.jsx)("p",{children:j.activity}),(0,G.jsxs)("button",{type:"button",className:"buy-button","aria-pressed":y===j.key,onClick:()=>st(j.key,!1),children:[y===j.key?"SELECTED":"FIND AGENT"," ",(0,G.jsxs)("span",{children:["\u25C8 ",$t+1]})]})]})]},j.key)),!ct.length&&(0,G.jsx)("div",{className:"pane-intro",children:"Waiting for the first participating session."})]}),r==="agents"&&(0,G.jsxs)("div",{id:"panel-agents",role:"tabpanel","aria-labelledby":"tab-agents",className:"upgrade-pane",children:[(0,G.jsxs)("div",{className:"pane-intro",children:[(0,G.jsx)("strong",{children:"The workers"}),(0,G.jsx)("span",{children:"Subagents appear as additional workers when a desk is free. No training or upgrades alter real Copilot sessions."})]}),V.map((j,$t)=>(0,G.jsxs)("div",{className:`persona-card ${y===j.key?"persona-selected":""}`,ref:y===j.key?H:void 0,children:[(0,G.jsxs)("div",{className:"persona-heading",children:[(0,G.jsx)("span",{className:"persona-avatar",style:{backgroundColor:j.helper?"#b49ccc":"#78bea6"},children:j.helper?"\u2733":"\u2726"}),(0,G.jsxs)("span",{children:[(0,G.jsx)("button",{type:"button",className:"agent-name",onClick:()=>st(j.key),"aria-label":`Find ${j.name} in the office`,children:j.name}),(0,G.jsxs)("small",{children:[j.helper?"Subagent":"Agent"," \xB7 ",j.status,$t>=bs?" \xB7 waiting for a desk":""]})]})]}),(0,G.jsxs)("div",{className:"agent-assignment",children:["SESSION ",(0,G.jsx)("strong",{title:j.sessionTitle,children:j.sessionTitle})]}),(0,G.jsx)("div",{className:"live-descriptor",children:j.activity})]},j.key)),!V.length&&(0,G.jsx)("div",{className:"pane-intro",children:"No workers are connected yet."})]}),(0,G.jsx)("div",{className:"side-hint",children:"\u2727 \xA0Only sanitized local activity is shown. All controls here affect this view, not the underlying agents."})]})]}),(0,G.jsxs)("section",{className:`feed-panel ${l?"feed-open":""}`,"aria-label":"Live activity feed",children:[(0,G.jsxs)("button",{type:"button",className:"feed-top",onClick:()=>c(j=>!j),"aria-expanded":l,"aria-controls":"signal-list",children:[(0,G.jsxs)("span",{children:[(0,G.jsx)("span",{className:"feed-glyph",children:"\u25C8"})," SIGNALS ",(0,G.jsxs)("span",{className:"feed-count",children:[Mt," LIVE"]})]}),(0,G.jsx)("span",{className:"feed-chevron","aria-hidden":"true",children:l?"\u2304":"\u2303"})]}),(0,G.jsxs)("div",{id:"signal-list",className:"feed-list","aria-live":"off",children:[!Z.length&&(0,G.jsxs)("div",{className:"feed-empty",children:[(0,G.jsx)("span",{children:"\u25CC"})," Listening for the first activity\u2026"]}),Z.map(j=>(0,G.jsxs)("div",{className:`feed-item feed-${j.kind==="error"?"failed":j.kind==="message"?"complete":"working"}`,children:[(0,G.jsx)("span",{className:"feed-icon",children:j.kind==="error"?"!":j.kind==="message"?"\u2713":"\u25C9"}),(0,G.jsxs)("span",{className:"feed-task",children:[j.owner," \xB7 ",j.label]}),(0,G.jsx)("span",{className:"feed-status",children:j.kind.toUpperCase()})]},j.key))]})]}),n!=="Live read-only view \xB7 local sessions running Agent Inc Live"&&(0,G.jsx)("div",{className:"storage-error",role:"status",children:n}),h&&(0,G.jsxs)("div",{className:"debug-panel",children:[(0,G.jsxs)("span",{children:["LIGHT ",E.current?.time.toFixed(1)??0,"s"]}),(0,G.jsxs)("span",{children:["FPS ",f]}),(0,G.jsxs)("span",{children:["DESKS ",mt,"/",bs]}),(0,G.jsxs)("span",{children:["WORKERS ",V.length]}),(0,G.jsxs)("span",{children:["SESSIONS ",e.sessions.length]}),(0,G.jsxs)("span",{children:["HELPERS ",le]}),(0,G.jsxs)("span",{children:["VISUAL SPEED ",v,"\xD7"]})]})]})}var FE=document.getElementById("root");if(!FE)throw new Error("Agent Inc Live office root is missing");(0,zE.createRoot)(FE).render((0,G.jsx)(cU,{}));
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
