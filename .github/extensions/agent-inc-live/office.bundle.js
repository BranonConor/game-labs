var OE=Object.create;var Vv=Object.defineProperty;var PE=Object.getOwnPropertyDescriptor;var zE=Object.getOwnPropertyNames;var BE=Object.getPrototypeOf,FE=Object.prototype.hasOwnProperty;var ls=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var HE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of zE(t))!FE.call(e,s)&&s!==n&&Vv(e,s,{get:()=>t[s],enumerable:!(i=PE(t,s))||i.enumerable});return e};var bu=(e,t,n)=>(n=e!=null?OE(BE(e)):{},HE(t||!e||!e.__esModule?Vv(n,"default",{value:e,enumerable:!0}):n,e));var t_=ls(Wt=>{"use strict";var hp=Symbol.for("react.transitional.element"),VE=Symbol.for("react.portal"),GE=Symbol.for("react.fragment"),kE=Symbol.for("react.strict_mode"),XE=Symbol.for("react.profiler"),WE=Symbol.for("react.consumer"),qE=Symbol.for("react.context"),YE=Symbol.for("react.forward_ref"),ZE=Symbol.for("react.suspense"),JE=Symbol.for("react.memo"),qv=Symbol.for("react.lazy"),KE=Symbol.for("react.activity"),QE=Symbol.for("react.view_transition"),Gv=Symbol.iterator;function jE(e){return e===null||typeof e!="object"?null:(e=Gv&&e[Gv]||e["@@iterator"],typeof e=="function"?e:null)}var Yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zv=Object.assign,Jv={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=Jv,this.updater=n||Yv}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kv(){}Kv.prototype=Jr.prototype;function fp(e,t,n){this.props=e,this.context=t,this.refs=Jv,this.updater=n||Yv}var dp=fp.prototype=new Kv;dp.constructor=fp;Zv(dp,Jr.prototype);dp.isPureReactComponent=!0;var kv=Array.isArray;function up(){}var Pe={H:null,A:null,T:null,S:null},Qv=Object.prototype.hasOwnProperty;function pp(e,t,n){var i=n.ref;return{$$typeof:hp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function $E(e,t){return pp(e.type,t,e.props)}function mp(e){return typeof e=="object"&&e!==null&&e.$$typeof===hp}function tT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xv=/\/+/g;function cp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tT(""+e.key):t.toString(36)}function eT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(up,up):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Zr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case hp:case VE:r=!0;break;case qv:return r=e._init,Zr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+cp(e,0):i,kv(s)?(n="",r!=null&&(n=r.replace(Xv,"$&/")+"/"),Zr(s,t,n,"",function(c){return c})):s!=null&&(mp(s)&&(s=$E(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Xv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(kv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+cp(i,l),r+=Zr(i,t,n,a,s);else if(l=jE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+cp(i,l++),r+=Zr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Zr(eT(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Eu(e,t,n){if(e==null)return e;var i=[],s=0;return Zr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function nT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Wv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jv(e){var t=Pe.T,n={};n.types=t!==null?t.types:null,Pe.T=n;try{var i=e(),s=Pe.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(up,Wv)}catch(a){Wv(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Pe.T=t}}function $v(e){var t=Pe.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else jv($v.bind(null,e))}var iT={map:Eu,forEach:function(e,t,n){Eu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Eu(e,function(){t++}),t},toArray:function(e){return Eu(e,function(t){return t})||[]},only:function(e){if(!mp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Wt.Activity=KE;Wt.Children=iT;Wt.Component=Jr;Wt.Fragment=GE;Wt.Profiler=XE;Wt.PureComponent=fp;Wt.StrictMode=kE;Wt.Suspense=ZE;Wt.ViewTransition=QE;Wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Pe;Wt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Pe.H.useMemoCache(e)}};Wt.addTransitionType=$v;Wt.cache=function(e){return function(){return e.apply(null,arguments)}};Wt.cacheSignal=function(){return null};Wt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Zv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Qv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return pp(e.type,s,i)};Wt.createContext=function(e){return e={$$typeof:qE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:WE,_context:e},e};Wt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Qv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return pp(e,a,s)};Wt.createRef=function(){return{current:null}};Wt.forwardRef=function(e){return{$$typeof:YE,render:e}};Wt.isValidElement=mp;Wt.lazy=function(e){return{$$typeof:qv,_payload:{_status:-1,_result:e},_init:nT}};Wt.memo=function(e,t){return{$$typeof:JE,type:e,compare:t===void 0?null:t}};Wt.startTransition=jv;Wt.unstable_useCacheRefresh=function(){return Pe.H.useCacheRefresh()};Wt.use=function(e){return Pe.H.use(e)};Wt.useActionState=function(e,t,n){return Pe.H.useActionState(e,t,n)};Wt.useCallback=function(e,t){return Pe.H.useCallback(e,t)};Wt.useContext=function(e){return Pe.H.useContext(e)};Wt.useDebugValue=function(){};Wt.useDeferredValue=function(e,t){return Pe.H.useDeferredValue(e,t)};Wt.useEffect=function(e,t){return Pe.H.useEffect(e,t)};Wt.useEffectEvent=function(e){return Pe.H.useEffectEvent(e)};Wt.useId=function(){return Pe.H.useId()};Wt.useImperativeHandle=function(e,t,n){return Pe.H.useImperativeHandle(e,t,n)};Wt.useInsertionEffect=function(e,t){return Pe.H.useInsertionEffect(e,t)};Wt.useLayoutEffect=function(e,t){return Pe.H.useLayoutEffect(e,t)};Wt.useMemo=function(e,t){return Pe.H.useMemo(e,t)};Wt.useOptimistic=function(e,t){return Pe.H.useOptimistic(e,t)};Wt.useReducer=function(e,t,n){return Pe.H.useReducer(e,t,n)};Wt.useRef=function(e){return Pe.H.useRef(e)};Wt.useState=function(e){return Pe.H.useState(e)};Wt.useSyncExternalStore=function(e,t,n){return Pe.H.useSyncExternalStore(e,t,n)};Wt.useTransition=function(){return Pe.H.useTransition()};Wt.version="19.3.0"});var Tu=ls((oU,e_)=>{"use strict";e_.exports=t_()});var h_=ls(Xe=>{"use strict";function yp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Au(s,t))e[i]=t,e[n]=s,n=i;else break t}}function cs(e){return e.length===0?null:e[0]}function Ru(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Au(o,n))l<s&&0>Au(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Au(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Au(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Xe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(n_=performance,Xe.unstable_now=function(){return n_.now()}):(gp=Date,i_=gp.now(),Xe.unstable_now=function(){return gp.now()-i_});var n_,gp,i_,Ns=[],ua=[],sT=1,Ui=null,Ln=3,xp=!1,Ll=!1,Il=!1,Sp=!1,r_=typeof setTimeout=="function"?setTimeout:null,o_=typeof clearTimeout=="function"?clearTimeout:null,s_=typeof setImmediate<"u"?setImmediate:null;function wu(e){for(var t=cs(ua);t!==null;){if(t.callback===null)Ru(ua);else if(t.startTime<=e)Ru(ua),t.sortIndex=t.expirationTime,yp(Ns,t);else break;t=cs(ua)}}function Mp(e){if(Il=!1,wu(e),!Ll)if(cs(Ns)!==null)Ll=!0,Qr||(Qr=!0,Kr());else{var t=cs(ua);t!==null&&bp(Mp,t.startTime-e)}}var Qr=!1,Ol=-1,l_=5,c_=-1;function u_(){return Sp?!0:!(Xe.unstable_now()-c_<l_)}function vp(){if(Sp=!1,Qr){var e=Xe.unstable_now();c_=e;var t=!0;try{t:{Ll=!1,Il&&(Il=!1,o_(Ol),Ol=-1),xp=!0;var n=Ln;try{e:{for(wu(e),Ui=cs(Ns);Ui!==null&&!(Ui.expirationTime>e&&u_());){var i=Ui.callback;if(typeof i=="function"){Ui.callback=null,Ln=Ui.priorityLevel;var s=i(Ui.expirationTime<=e);if(e=Xe.unstable_now(),typeof s=="function"){Ui.callback=s,wu(e),t=!0;break e}Ui===cs(Ns)&&Ru(Ns),wu(e)}else Ru(Ns);Ui=cs(Ns)}if(Ui!==null)t=!0;else{var a=cs(ua);a!==null&&bp(Mp,a.startTime-e),t=!1}}break t}finally{Ui=null,Ln=n,xp=!1}t=void 0}}finally{t?Kr():Qr=!1}}}var Kr;typeof s_=="function"?Kr=function(){s_(vp)}:typeof MessageChannel<"u"?(_p=new MessageChannel,a_=_p.port2,_p.port1.onmessage=vp,Kr=function(){a_.postMessage(null)}):Kr=function(){r_(vp,0)};var _p,a_;function bp(e,t){Ol=r_(function(){e(Xe.unstable_now())},t)}Xe.unstable_IdlePriority=5;Xe.unstable_ImmediatePriority=1;Xe.unstable_LowPriority=4;Xe.unstable_NormalPriority=3;Xe.unstable_Profiling=null;Xe.unstable_UserBlockingPriority=2;Xe.unstable_cancelCallback=function(e){e.callback=null};Xe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):l_=0<e?Math.floor(1e3/e):5};Xe.unstable_getCurrentPriorityLevel=function(){return Ln};Xe.unstable_next=function(e){switch(Ln){case 1:case 2:case 3:var t=3;break;default:t=Ln}var n=Ln;Ln=t;try{return e()}finally{Ln=n}};Xe.unstable_requestPaint=function(){Sp=!0};Xe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Ln;Ln=e;try{return t()}finally{Ln=n}};Xe.unstable_scheduleCallback=function(e,t,n){var i=Xe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:sT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,yp(ua,e),cs(Ns)===null&&e===cs(ua)&&(Il?(o_(Ol),Ol=-1):Il=!0,bp(Mp,n-i))):(e.sortIndex=s,yp(Ns,e),Ll||xp||(Ll=!0,Qr||(Qr=!0,Kr()))),e};Xe.unstable_shouldYield=u_;Xe.unstable_wrapCallback=function(e){var t=Ln;return function(){var n=Ln;Ln=t;try{return e.apply(this,arguments)}finally{Ln=n}}}});var d_=ls((cU,f_)=>{"use strict";f_.exports=h_()});var g_=ls(In=>{"use strict";var aT=Tu();function m_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ha(){}var Wn={d:{f:ha,r:function(){throw Error(m_(522))},D:ha,C:ha,L:ha,m:ha,X:ha,S:ha,M:ha},p:0,findDOMNode:null},rT=Symbol.for("react.portal"),oT=Symbol.for("react.recoverable"),p_=Symbol.for("react.optimistic_key");function lT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rT,key:i==null?null:i===p_?p_:""+i,children:e,containerInfo:t,implementation:n}}var Pl=aT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Cu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Wn;In.browser=function(e){return{$$typeof:oT,_reason:e}};In.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(m_(299));return lT(e,t,null,n)};In.flushSync=function(e){var t=Pl.T,n=Wn.p;try{if(Pl.T=null,Wn.p=2,e)return e()}finally{Pl.T=t,Wn.p=n,Wn.d.f()}};In.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Wn.d.C(e,t))};In.prefetchDNS=function(e){typeof e=="string"&&Wn.d.D(e)};In.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Cu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Wn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Wn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};In.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Cu(t.as,t.crossOrigin);Wn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Wn.d.M(e)};In.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Cu(n,t.crossOrigin);Wn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};In.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Cu(t.as,t.crossOrigin);Wn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Wn.d.m(e)};In.requestFormReset=function(e){Wn.d.r(e)};In.unstable_batchedUpdates=function(e,t){return e(t)};In.useFormState=function(e,t,n){return Pl.H.useFormState(e,t,n)};In.useFormStatus=function(){return Pl.H.useHostTransitionStatus()};In.version="19.3.0"});var y_=ls((hU,__)=>{"use strict";function v_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v_)}catch(e){console.error(e)}}v_(),__.exports=g_()});var aM=ls(hf=>{"use strict";var ln=d_(),sx=Tu(),cT=y_();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ax(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function rx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ox(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x_(e){if(bc(e)!==e)throw Error(j(188))}function uT(e){var t=e.alternate;if(!t){if(t=bc(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return x_(s),e;if(a===i)return x_(s),t;a=a.sibling}throw Error(j(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function lx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=lx(e),t!==null)return t;e=e.sibling}return null}function ai(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&ai(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Mr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function cx(e){var t=[null,null],n=Mr(e);return n===null||ux(t,e,n.child,{foundSelf:!1}),t}function ux(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ux(e,t,n.child,i))return!0;n=n.sibling}return!1}function on(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(j(559))}}var so=null,em=null;function hT(e,t,n){return e===n?!0:e===t?(so=e,!0):!1}function fT(e,t,n){return e===n?(em=e,!1):e===t?(em!==null&&(so=e),!0):!1}function M_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function nm(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Le=Object.assign,dT=Symbol.for("react.element"),Du=Symbol.for("react.transitional.element"),kl=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),hx=Symbol.for("react.strict_mode"),im=Symbol.for("react.profiler"),fx=Symbol.for("react.consumer"),ms=Symbol.for("react.context"),fg=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),am=Symbol.for("react.suspense_list"),dg=Symbol.for("react.memo"),ma=Symbol.for("react.lazy");Symbol.for("react.scope");var rm=Symbol.for("react.activity"),pT=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var mT=Symbol.for("react.memo_cache_sentinel"),om=Symbol.for("react.view_transition"),gT=Symbol.for("react.recoverable"),b_=Symbol.iterator;function zl(e){return e===null||typeof e!="object"?null:(e=b_&&e[b_]||e["@@iterator"],typeof e=="function"?e:null)}var vT=Symbol.for("react.client.reference");function lm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===vT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ao:return"Fragment";case im:return"Profiler";case hx:return"StrictMode";case sm:return"Suspense";case am:return"SuspenseList";case rm:return"Activity";case om:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case kl:return"Portal";case ms:return e.displayName||"Context";case fx:return(e._context.displayName||"Context")+".Consumer";case fg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dg:return t=e.displayName||null,t!==null?t:lm(e.type)||"Memo";case ma:t=e._payload,e=e._init;try{return lm(e(t))}catch{}}return null}var Xl=Array.isArray,kt=sx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye=cT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cr={pending:!1,data:null,method:null,action:null},cm=[],ro=-1;function Ms(e){return{current:e}}function bn(e){0>ro||(e.current=cm[ro],cm[ro]=null,ro--)}function Fe(e,t){ro++,cm[ro]=e.current,e.current=t}var ys=Ms(null),oc=Ms(null),Ea=Ms(null),gh=Ms(null);function vh(e,t){switch(Fe(Ea,t),Fe(oc,e),Fe(ys,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zy(t),e=IS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}bn(ys),Fe(ys,e)}function wo(){bn(ys),bn(oc),bn(Ea)}function um(e){var t=e.memoizedState;t!==null&&(zo._currentValue=t.memoizedState,Fe(gh,e)),t=ys.current;var n=IS(t,e.type);t!==n&&(Fe(oc,e),Fe(ys,n))}function _h(e){oc.current===e&&(bn(ys),bn(oc)),gh.current===e&&(bn(gh),zo._currentValue=cr)}var Ep,E_;function da(e){if(Ep===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ep=t&&t[1]||"",E_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ep+e+E_}var Tp=!1;function Ap(e,t){if(!e||Tp)return"";Tp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(v){var f=v}Reflect.construct(e,[],d)}else{try{d.call()}catch(v){f=v}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(v){f=v}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(v){if(v&&f&&typeof v.stack=="string")return[v.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Tp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?da(n):""}function _T(e,t){switch(e.tag){case 26:case 27:case 5:return da(e.type);case 16:return da("Lazy");case 13:return e.child!==t&&t!==null?da("Suspense Fallback"):da("Suspense");case 19:return da("SuspenseList");case 0:case 15:return Ap(e.type,!1);case 11:return Ap(e.type.render,!1);case 1:return Ap(e.type,!0);case 31:return da("Activity");case 30:return da("ViewTransition");default:return""}}function T_(e){try{var t="",n=null;do t+=_T(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var hm=Object.prototype.hasOwnProperty,pg=ln.unstable_scheduleCallback,wp=ln.unstable_cancelCallback,yT=ln.unstable_shouldYield,xT=ln.unstable_requestPaint,_i=ln.unstable_now,ST=ln.unstable_getCurrentPriorityLevel,dx=ln.unstable_ImmediatePriority,px=ln.unstable_UserBlockingPriority,yh=ln.unstable_NormalPriority,MT=ln.unstable_LowPriority,mx=ln.unstable_IdlePriority,bT=ln.log,ET=ln.unstable_setDisableYieldValue,Ec=null,yi=null;function _a(e){if(typeof bT=="function"&&ET(e),yi&&typeof yi.setStrictMode=="function")try{yi.setStrictMode(Ec,e)}catch{}}var xi=Math.clz32?Math.clz32:wT,TT=Math.log,AT=Math.LN2;function wT(e){return e>>>=0,e===0?32:31-(TT(e)/AT|0)|0}var Nu=256,Uu=262144,Lu=4194304;function sr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=sr(i):(r&=o,r!==0?s=sr(r):n||(n=o&~e,n!==0&&(s=sr(n))))):(o=i&~a,o!==0?s=sr(o):r!==0?s=sr(r):n||(n=i&~e,n!==0&&(s=sr(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Tc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-xi(n),s=1<<i;t|=e[i],n&=~s}return t}function RT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vx(){var e=Lu;return Lu<<=1,(Lu&62914560)===0&&(Lu=4194304),e}function Rp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ac(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function CT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-xi(n),d=1<<u;o[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&_x(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function _x(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-xi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function yx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-xi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function xx(e,t){var n=t&-t;return n=(n&42)!==0?1:mg(n),(n&(e.suspendedLanes|t))!==0?0:n}function mg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sx(){var e=ye.p;return e!==0?e:(e=window.event,e===void 0?32:nM(e.type))}function A_(e,t){var n=ye.p;try{return ye.p=e,t()}finally{ye.p=n}}var Xs=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Xs,ri="__reactProps$"+Xs,Ho="__reactContainer$"+Xs,w_="__reactEvents$"+Xs,DT="__reactListeners$"+Xs,NT="__reactHandles$"+Xs,R_="__reactResources$"+Xs,wc="__reactMarker$"+Xs,xh="__reactLoad$"+Xs;function qh(e){delete e[Sn],delete e[ri],delete e[DT],delete e[NT]}function or(e){var t;if(t=e[Sn])return t;for(var n=e.parentNode;n;){if(t=n[Ho]||n[Sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wy(e);e!==null;){if(n=e[Sn])return n;e=Wy(e)}return t}e=n,n=e.parentNode}return null}function Vo(e){if(e=e[Sn]||e[Ho]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function vo(e){var t=e[R_];return t||(t=e[R_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pn(e){e[wc]=!0}function Mx(e){e[xh]=void 0}var bx=new Set,Ex={};function br(e,t){Ro(e,t),Ro(e+"Capture",t)}function Ro(e,t){for(Ex[e]=t,e=0;e<t.length;e++)bx.add(t[e])}var UT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),C_={},D_={};function LT(e){return hm.call(D_,e)?!0:hm.call(C_,e)?!1:UT.test(e)?D_[e]=!0:(C_[e]=!0,!1)}var ve=!1;function N_(){var e=ve;return ve=!1,e}function Qu(e,t,n){if(LT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Iu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Us(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function pi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function IT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fm(e){if(!e._valueTracker){var t=Tx(e)?"checked":"value";e._valueTracker=IT(e,t,""+e[t])}}function Ax(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Tx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var OT=/[\n"\\]/g;function zi(e){return e.replace(OT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function dm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+pi(t)):e.value!==""+pi(t)&&(e.value=""+pi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Cp(e,pi(e.value)):Cp(e,pi(t)):n!=null?Cp(e,pi(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+pi(o):e.removeAttribute("name")}function wx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){fm(e);return}n=n!=null?""+pi(n):"",t=t!=null?""+pi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),fm(e)}function Cp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function _o(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+pi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Rx(e,t,n){if(t!=null&&(t=""+pi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+pi(n):""}function Cx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(Xl(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=pi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),fm(e)}function Co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var PT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function U_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||PT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dx(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ve=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(U_(e,s,i),ve=!0)}else for(var a in t)t.hasOwnProperty(a)&&U_(e,a,t[a])}function vg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),BT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ju(e){return BT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gs(){}var pm=null;function _g(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,yo=null;function L_(e){var t=Vo(e);if(t&&(e=t.stateNode)){var n=e[ri]||null;t:switch(e=t.stateNode,t.type){case"input":if(dm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+zi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ri]||null;if(!s)throw Error(j(90));dm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ax(i)}break t;case"textarea":Rx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&_o(e,!!n.multiple,t,!1)}}}var Dp=!1;function Nx(e,t,n){if(Dp)return e(t,n);Dp=!0;try{var i=e(t);return i}finally{if(Dp=!1,(oo!==null||yo!==null)&&(of(),oo&&(t=oo,e=yo,yo=oo=null,L_(t),e)))for(t=0;t<e.length;t++)L_(e[t])}}function lc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ri]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Bs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mm=!1;if(Bs)try{jr={},Object.defineProperty(jr,"passive",{get:function(){mm=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{mm=!1}var jr,ya=null,yg=null,$u=null;function Ux(){if($u)return $u;var e,t=yg,n=t.length,i,s="value"in ya?ya.value:ya.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return $u=s.slice(e,1<i?1-i:void 0)}function th(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ou(){return!0}function I_(){return!1}function Jn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ou:I_,this.isPropagationStopped=I_,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ou)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ou)},persist:function(){},isPersistent:Ou}),t}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=Jn(Fa),Rc=Le({},Fa,{view:0,detail:0}),FT=Jn(Rc),Np,Up,Bl,Zh=Le({},Rc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(Np=e.screenX-Bl.screenX,Up=e.screenY-Bl.screenY):Up=Np=0,Bl=e),Np)},movementY:function(e){return"movementY"in e?e.movementY:Up}}),O_=Jn(Zh),HT=Le({},Zh,{dataTransfer:0}),VT=Jn(HT),GT=Le({},Rc,{relatedTarget:0}),Lp=Jn(GT),kT=Le({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),XT=Jn(kT),WT=Le({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qT=Jn(WT),YT=Le({},Fa,{data:0}),P_=Jn(YT),ZT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=KT[e])?!!t[e]:!1}function xg(){return QT}var jT=Le({},Rc,{key:function(e){if(e.key){var t=ZT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=th(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?JT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xg,charCode:function(e){return e.type==="keypress"?th(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?th(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$T=Jn(jT),tA=Le({},Zh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),z_=Jn(tA),eA=Le({},Fa,{submitter:0}),nA=Jn(eA),iA=Le({},Rc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xg}),sA=Jn(iA),aA=Le({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),rA=Jn(aA),oA=Le({},Zh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lA=Jn(oA),cA=Le({},Fa,{newState:0,oldState:0,source:0}),uA=Jn(cA),hA=[9,13,27,32],Sg=Bs&&"CompositionEvent"in window,Zl=null;Bs&&"documentMode"in document&&(Zl=document.documentMode);var fA=Bs&&"TextEvent"in window&&!Zl,Lx=Bs&&(!Sg||Zl&&8<Zl&&11>=Zl),B_=" ",F_=!1;function Ix(e,t){switch(e){case"keyup":return hA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ox(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lo=!1;function dA(e,t){switch(e){case"compositionend":return Ox(t);case"keypress":return t.which!==32?null:(F_=!0,B_);case"textInput":return e=t.data,e===B_&&F_?null:e;default:return null}}function pA(e,t){if(lo)return e==="compositionend"||!Sg&&Ix(e,t)?(e=Ux(),$u=yg=ya=null,lo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lx&&t.locale!=="ko"?null:t.data;default:return null}}var mA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mA[e.type]:t==="textarea"}function Px(e,t,n,i){oo?yo?yo.push(i):yo=[i]:oo=i,t=Gh(t,"onChange"),0<t.length&&(n=new Yh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Jl=null,cc=null;function gA(e){NS(e,0)}function Jh(e){var t=Wl(e);if(Ax(t))return e}function V_(e,t){if(e==="change")return t}var zx=!1;Bs&&(Bs?(zu="oninput"in document,zu||(Ip=document.createElement("div"),Ip.setAttribute("oninput","return;"),zu=typeof Ip.oninput=="function"),Pu=zu):Pu=!1,zx=Pu&&(!document.documentMode||9<document.documentMode));var Pu,zu,Ip;function G_(){Jl&&(Jl.detachEvent("onpropertychange",Bx),cc=Jl=null)}function Bx(e){if(e.propertyName==="value"&&Jh(cc)){var t=[];Px(t,cc,e,_g(e)),Nx(gA,t)}}function vA(e,t,n){e==="focusin"?(G_(),Jl=t,cc=n,Jl.attachEvent("onpropertychange",Bx)):e==="focusout"&&G_()}function _A(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jh(cc)}function yA(e,t){if(e==="click")return Jh(t)}function xA(e,t){if(e==="input"||e==="change")return Jh(t)}function SA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mi=typeof Object.is=="function"?Object.is:SA;function uc(e,t){if(Mi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!hm.call(t,s)||!Mi(e[s],t[s]))return!1}return!0}function gm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function k_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function X_(e,t){var n=k_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=k_(n)}}function Fx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gm(e.document)}return t}function Mg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var MA=Bs&&"documentMode"in document&&11>=document.documentMode,co=null,vm=null,Kl=null,_m=!1;function W_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_m||co==null||co!==gm(i)||(i=co,"selectionStart"in i&&Mg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Kl&&uc(Kl,i)||(Kl=i,i=Gh(vm,"onSelect"),0<i.length&&(t=new Yh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=co)))}function nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var uo={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Op={},Vx={};Bs&&(Vx=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function Er(e){if(Op[e])return Op[e];if(!uo[e])return e;var t=uo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vx)return Op[e]=t[n];return e}var Gx=Er("animationend"),kx=Er("animationiteration"),Xx=Er("animationstart"),bA=Er("transitionrun"),EA=Er("transitionstart"),TA=Er("transitioncancel"),Wx=Er("transitionend"),qx=new Map,ym="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ym.push("scrollEnd");function $i(e,t){qx.set(e,t),br(t,[e])}var AA=0;function Fs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=ji.identifierPrefix;var n=AA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function q_(e){if(e==null||typeof e=="string")return e;var t=null,n=Ao;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Ws(e,t){return e=q_(e),t=q_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Sh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ii=[],ho=0,bg=0;function Kh(){for(var e=ho,t=bg=ho=0;t<e;){var n=Ii[t];Ii[t++]=null;var i=Ii[t];Ii[t++]=null;var s=Ii[t];Ii[t++]=null;var a=Ii[t];if(Ii[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Yx(n,s,a)}}function Qh(e,t,n,i){Ii[ho++]=e,Ii[ho++]=t,Ii[ho++]=n,Ii[ho++]=i,bg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Eg(e,t,n,i){return Qh(e,t,n,i),Mh(e)}function Tr(e,t){return Qh(e,null,null,t),Mh(e)}function Yx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-xi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Mh(e){if(50<rc)throw rc=0,uh=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fo={};function wA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,i){return new wA(e,t,n,i)}function Tg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ps(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Zx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function eh(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Tg(i)&&(r=1);else if(typeof i=="string")r=$w(e,n,ys.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case rm:return e=ii(31,n,t,s),e.elementType=rm,e.lanes=a,e;case ao:return ur(n.children,s,a,t);case hx:r=8,s|=24;break;case im:return e=ii(12,n,t,s|2),e.elementType=im,e.lanes=a,e;case sm:return e=ii(13,n,t,s),e.elementType=sm,e.lanes=a,e;case am:return e=ii(19,n,t,s),e.elementType=am,e.lanes=a,e;case pT:case om:return e=s|32,e=ii(30,n,t,e),e.elementType=om,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ms:r=10;break t;case fx:r=9;break t;case fg:r=11;break t;case dg:r=14;break t;case ma:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=ii(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function ur(e,t,n,i){return e=ii(7,e,i,t),e.lanes=n,e}function Pp(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function Jx(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function zp(e,t,n){return t=ii(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Y_=new WeakMap;function Bi(e,t){if(typeof e=="object"&&e!==null){var n=Y_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:T_(t)},Y_.set(e,t),t)}return{value:e,source:t,stack:T_(t)}}var po=[],mo=0,bh=null,hc=0,Oi=[],Pi=0,Ia=null,vs=1,_s="";function Is(e,t){po[mo++]=hc,po[mo++]=bh,bh=e,hc=t}function Kx(e,t,n){Oi[Pi++]=vs,Oi[Pi++]=_s,Oi[Pi++]=Ia,Ia=e;var i=vs;e=_s;var s=32-xi(i)-1;i&=~(1<<s),n+=1;var a=32-xi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,vs=1<<32-xi(t)+s|n<<s|i,_s=a+e}else vs=1<<a|n<<s|i,_s=e}function jh(e){e.return!==null&&(Is(e,1),Kx(e,1,0))}function Ag(e){for(;e===bh;)bh=po[--mo],po[mo]=null,hc=po[--mo],po[mo]=null;for(;e===Ia;)Ia=Oi[--Pi],Oi[Pi]=null,_s=Oi[--Pi],Oi[Pi]=null,vs=Oi[--Pi],Oi[Pi]=null}function Qx(e,t){Oi[Pi++]=vs,Oi[Pi++]=_s,Oi[Pi++]=Ia,vs=t.id,_s=t.overflow,Ia=e}var mn=null,Be=null,ie=!1,Ta=null,Fi=!1,xm=Error(j(519));function Oa(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fc(Bi(t,e)),xm}function Z_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Sn]=e,t[ri]=i,n){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(n=0;n<gc.length;n++)ae(gc[n],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),wx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),Cx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||LS(t.textContent,n)?(i.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),i.onScroll!=null&&ae("scroll",t),i.onScrollEnd!=null&&ae("scrollend",t),i.onClick!=null&&(t.onclick=gs),t=!0):t=!1,t||Oa(e,!0)}function Eh(e){for(mn=e.return;mn;)switch(mn.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:mn=mn.return}}function $r(e){if(e!==mn)return!1;if(!ie)return Eh(e),ie=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||sg(e.type,e.memoizedProps)),n=!n),n&&Be&&Oa(e),Eh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Be=Xy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Be=Xy(e)}else t===27?(t=Be,Ha(e.type)?(e=lg,lg=null,Be=e):Be=t):Be=mn?Hi(e.stateNode.nextSibling):null;return!0}function pr(){Be=mn=null,ie=!1}function Bp(){var e=Ta;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),Ta=null),e}function fc(e){Ta===null?Ta=[e]:Ta.push(e)}var Sm=Ms(null),Ar=null,Os=null;function xa(e,t,n){Fe(Sm,t._currentValue),t._currentValue=n}function zs(e){e._currentValue=Sm.current,bn(Sm)}function nh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Mm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),nh(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(j(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),nh(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),nh(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function mr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=s.type;Mi(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===gh.current){if(r=s.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}s=s.return}return e!==null&&Mm(t,e,n,i),t.flags|=262144,e!==null}function Th(e){for(e=e.firstContext;e!==null;){if(!Mi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gr(e){Ar=e,Os=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return jx(Ar,e)}function Bu(e,t){return Ar===null&&gr(e),jx(e,t)}function jx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Os===null){if(e===null)throw Error(j(308));Os=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Os=Os.next=t;return n}var RA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},CA=ln.unstable_scheduleCallback,DA=ln.unstable_NormalPriority,en={$$typeof:ms,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wg(){return{controller:new RA,data:new Map,refCount:0}}function Cc(e){e.refCount--,e.refCount===0&&CA(DA,function(){e.controller.abort()})}function J_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var ql=null;function NA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ql=null,bm=0,vr=0,xo=null;function UA(e,t){if(Ql===null){var n=Ql=[];bm=0,vr=e0(),xo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return bm++,t.then(K_,K_),t}function K_(){if(--bm===0&&(ql=null,Ql!==null)){xo!==null&&(xo.status="fulfilled");var e=Ql;Ql=null,vr=0,xo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function LA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Q_=kt.S;kt.S=function(e,t){if(gS=_i(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&UA(e,t),ql!==null)for(var n=Io;n!==null;)J_(n,ql),n=n.next;if(n=e.types,n!==null){for(var i=Io;i!==null;)J_(i,n),i=i.next;if(vr!==0){i=ql,i===null&&(i=ql=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Q_!==null&&Q_(e,t)};var hr=Ms(null);function Rg(){var e=hr.current;return e!==null?e:Ue.pooledCache}function ih(e,t){t===null?Fe(hr,hr.current):Fe(hr,t.pool)}function $x(){var e=Rg();return e===null?null:{parent:en._currentValue,pool:e}}var Go=Error(j(460)),Cg=Error(j(474)),$h=Error(j(542)),Ah={then:function(){}};function j_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function t1(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gs,gs),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ty(e),e===void 0&&!("reason"in t)?Error(j(600)):e;default:if(typeof t.status=="string")t.then(gs,gs);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ty(e),e}throw fr=t,Go}}function ar(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fr=n,Go):n}}var fr=null;function $_(){if(fr===null)throw Error(j(459));var e=fr;return fr=null,e}function ty(e){if(e===Go||e===$h)throw Error(j(483))}var So=null,dc=0;function Fu(e){var t=dc;return dc+=1,So===null&&(So=[]),t1(So,e,t)}function fa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Hu(e,t){throw t.$$typeof===dT?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function e1(e){function t(h,g){if(e){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function i(h){for(var g=new Map;h!==null;)h.key===null?g.set(h.index,h):g.set(h.key,h),h=h.sibling;return g}function s(h,g){return h=Ps(h,g),h.index=0,h.sibling=null,h}function a(h,g,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=134217730,g)):(h.flags|=1048576,g)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,g,y,_){return g===null||g.tag!==6?(g=Pp(y,h.mode,_),g.return=h,g):(g=s(g,y),g.return=h,g)}function l(h,g,y,_){var A=y.type;return A===ao?(h=u(h,g,y.props.children,_,y.key),fa(h,y),h):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ma&&ar(A)===g.type)?(g=s(g,y.props),fa(g,y),g.return=h,g):(g=eh(y.type,y.key,y.props,null,h.mode,_),fa(g,y),g.return=h,g)}function c(h,g,y,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=zp(y,h.mode,_),g.return=h,g):(g=s(g,y.children||[]),g.return=h,g)}function u(h,g,y,_,A){return g===null||g.tag!==7?(g=ur(y,h.mode,_,A),g.return=h,g):(g=s(g,y),g.return=h,g)}function d(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Pp(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Du:return y=eh(g.type,g.key,g.props,null,h.mode,y),fa(y,g),y.return=h,y;case kl:return g=zp(g,h.mode,y),g.return=h,g;case ma:return g=ar(g),d(h,g,y)}if(Xl(g)||zl(g))return g=ur(g,h.mode,y,null),g.return=h,g;if(typeof g.then=="function")return d(h,Fu(g),y);if(g.$$typeof===ms)return d(h,Bu(h,g),y);Hu(h,g)}return null}function f(h,g,y,_){var A=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return A!==null?null:o(h,g,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Du:return y.key===A?l(h,g,y,_):null;case kl:return y.key===A?c(h,g,y,_):null;case ma:return y=ar(y),f(h,g,y,_)}if(Xl(y)||zl(y))return A!==null?null:u(h,g,y,_,null);if(typeof y.then=="function")return f(h,g,Fu(y),_);if(y.$$typeof===ms)return f(h,g,Bu(h,y),_);Hu(h,y)}return null}function p(h,g,y,_,A){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return h=h.get(y)||null,o(g,h,""+_,A);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Du:return h=h.get(_.key===null?y:_.key)||null,l(g,h,_,A);case kl:return h=h.get(_.key===null?y:_.key)||null,c(g,h,_,A);case ma:return _=ar(_),p(h,g,y,_,A)}if(Xl(_)||zl(_))return h=h.get(y)||null,u(g,h,_,A,null);if(typeof _.then=="function")return p(h,g,y,Fu(_),A);if(_.$$typeof===ms)return p(h,g,y,Bu(g,_),A);Hu(g,_)}return null}function v(h,g,y,_){for(var A=null,w=null,C=g,N=g=0,E=null;C!==null&&N<y.length;N++){C.index>N?(E=C,C=null):E=C.sibling;var b=f(h,C,y[N],_);if(b===null){C===null&&(C=E);break}e&&C&&b.alternate===null&&t(h,C),g=a(b,g,N),w===null?A=b:w.sibling=b,w=b,C=E}if(N===y.length)return n(h,C),ie&&Is(h,N),A;if(C===null){for(;N<y.length;N++)C=d(h,y[N],_),C!==null&&(g=a(C,g,N),w===null?A=C:w.sibling=C,w=C);return ie&&Is(h,N),A}for(C=i(C);N<y.length;N++)E=p(C,h,N,y[N],_),E!==null&&(e&&(b=E.alternate,b!==null&&C.delete(b.key===null?N:b.key)),g=a(E,g,N),w===null?A=E:w.sibling=E,w=E);return e&&C.forEach(function(U){return t(h,U)}),ie&&Is(h,N),A}function x(h,g,y,_){if(y==null)throw Error(j(151));for(var A=null,w=null,C=g,N=g=0,E=null,b=y.next();C!==null&&!b.done;N++,b=y.next()){C.index>N?(E=C,C=null):E=C.sibling;var U=f(h,C,b.value,_);if(U===null){C===null&&(C=E);break}e&&C&&U.alternate===null&&t(h,C),g=a(U,g,N),w===null?A=U:w.sibling=U,w=U,C=E}if(b.done)return n(h,C),ie&&Is(h,N),A;if(C===null){for(;!b.done;N++,b=y.next())b=d(h,b.value,_),b!==null&&(g=a(b,g,N),w===null?A=b:w.sibling=b,w=b);return ie&&Is(h,N),A}for(C=i(C);!b.done;N++,b=y.next())b=p(C,h,N,b.value,_),b!==null&&(e&&(E=b.alternate,E!==null&&C.delete(E.key===null?N:E.key)),g=a(b,g,N),w===null?A=b:w.sibling=b,w=b);return e&&C.forEach(function(B){return t(h,B)}),ie&&Is(h,N),A}function m(h,g,y,_){if(typeof y=="object"&&y!==null&&y.type===ao&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Du:t:{for(var A=y.key;g!==null;){if(g.key===A){if(A=y.type,A===ao){if(g.tag===7){n(h,g.sibling),_=s(g,y.props.children),fa(_,y),_.return=h,h=_;break t}}else if(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ma&&ar(A)===g.type){n(h,g.sibling),_=s(g,y.props),fa(_,y),_.return=h,h=_;break t}n(h,g);break}else t(h,g);g=g.sibling}y.type===ao?(_=ur(y.props.children,h.mode,_,y.key),fa(_,y),_.return=h,h=_):(_=eh(y.type,y.key,y.props,null,h.mode,_),fa(_,y),_.return=h,h=_)}return r(h);case kl:t:{for(A=y.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),_=s(g,y.children||[]),_.return=h,h=_;break t}else{n(h,g);break}else t(h,g);g=g.sibling}_=zp(y,h.mode,_),_.return=h,h=_}return r(h);case ma:return y=ar(y),m(h,g,y,_)}if(Xl(y))return v(h,g,y,_);if(zl(y)){if(A=zl(y),typeof A!="function")throw Error(j(150));return y=A.call(y),x(h,g,y,_)}if(typeof y.then=="function")return m(h,g,Fu(y),_);if(y.$$typeof===ms)return m(h,g,Bu(h,y),_);Hu(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),_=s(g,y),_.return=h,h=_):(n(h,g),_=Pp(y,h.mode,_),_.return=h,h=_),r(h)):n(h,g)}return function(h,g,y,_){try{dc=0;var A=m(h,g,y,_);return So=null,A}catch(C){if(C===Go||C===$h)throw C;var w=ii(29,C,null,h.mode);return w.lanes=_,w.return=h,w}finally{}}}var _r=e1(!0),n1=e1(!1),ga=!1;function Dg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Em(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(_e&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Mh(e),Yx(e,null,n),t}return Qh(e,i,t,n),Mh(e)}function jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,yx(e,n)}}function Fp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Tm=!1;function $l(){if(Tm){var e=xo;if(e!==null)throw e}}function tc(e,t,n,i){Tm=!1;var s=e.updateQueue;ga=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,u=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(ue&f)===f:(i&f)===f){f!==0&&f===vr&&(Tm=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,f);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break t;d=Le({},d,f);break t;case 2:ga=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),Ba|=r,e.lanes=r,e.memoizedState=d}}function i1(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function s1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)i1(n[e],t)}var Pa=Ms(null),wh=Ms(0);function ey(e,t){e=ks,Fe(wh,e),Fe(Pa,t),ks=e|t.baseLanes}function Am(){Fe(wh,ks),Fe(Pa,Pa.current)}function Ng(){ks=wh.current,bn(Pa),bn(wh)}var An=Ms(null),On=null;function Ra(e){var t=e.alternate;Fe(En,En.current&1),Fe(An,e),On===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(On=e)}function wm(e){Fe(En,En.current),Fe(An,e),On===null&&(On=e)}function a1(e){e.tag===22?(Fe(En,En.current),Fe(An,e),On===null&&(On=e)):Ca()}function Ca(){Fe(En,En.current),Fe(An,An.current)}function mi(e){bn(An),On===e&&(On=null),bn(En)}var En=Ms(0);function pc(e,t){Fe(An,An.current),Fe(En,t)}function Ug(e){bn(En),bn(An),On===e&&(On=null)}function Rh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||og(n)||a0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hs=0,Qt=null,De=null,tn=null,Ch=!1,Mo=!1,yr=!1,Dh=0,mc=0,bo=null,IA=0;function Ke(){throw Error(j(321))}function Lg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mi(e[n],t[n]))return!1;return!0}function Ig(e,t,n,i,s,a){return Hs=a,Qt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kt.H=e===null||e.memoizedState===null?P1:z1,yr=!1,a=n(i,s),yr=!1,Mo&&(a=o1(t,n,i,s)),r1(e),a}function r1(e){kt.H=Nh;var t=De!==null&&De.next!==null;if(Hs=0,tn=De=Qt=null,Ch=!1,mc=0,bo=null,t)throw Error(j(300));e===null||nn||(e=e.dependencies,e!==null&&Th(e)&&(nn=!0))}function o1(e,t,n,i){Qt=e;var s=0;do{if(Mo&&(bo=null),mc=0,Mo=!1,25<=s)throw Error(j(301));if(s+=1,tn=De=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}kt.H=GA,a=t(n,i)}while(Mo);return a}function OA(){var e=kt.H,t=e.useState()[0];return t=typeof t.then=="function"?Dc(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(Qt.flags|=1024),t}function Og(){var e=Dh!==0;return Dh=0,e}function Pg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zg(e){if(Ch){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ch=!1}Hs=0,tn=De=Qt=null,Mo=!1,mc=Dh=0,bo=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Qt.memoizedState=tn=e:tn=tn.next=e,tn}function je(){if(De===null){var e=Qt.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=tn===null?Qt.memoizedState:tn.next;if(t!==null)tn=t,De=e;else{if(e===null)throw Qt.alternate===null?Error(j(467)):Error(j(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},tn===null?Qt.memoizedState=tn=e:tn=tn.next=e}return tn}function tf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dc(e){var t=mc;return mc+=1,bo===null&&(bo=[]),e=t1(bo,e,t),t=Qt,(tn===null?t.memoizedState:tn.next)===null&&(t=t.alternate,kt.H=t===null||t.memoizedState===null?P1:z1),e}function ef(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dc(e);if(e.$$typeof===gT)return;if(e.$$typeof===ms)return Mn(e)}throw Error(j(438,String(e)))}function Bg(e){var t=null,n=Qt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Qt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=tf(),Qt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=mT;return t.index++,n}function Vs(e,t){return typeof t=="function"?t(e):t}function sh(e){var t=je();return Fg(t,De,e)}function Fg(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ue&d)===d:(Hs&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===vr&&(u=!0);else if((Hs&f)===f){c=c.next,f===vr&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Qt.lanes|=f,Ba|=f;d=c.action,yr&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Qt.lanes|=d,Ba|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Mi(a,e.memoizedState)&&(nn=!0,u&&(n=xo,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Hp(e){var t=je(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Mi(a,t.memoizedState)||(nn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function l1(e,t,n){var i=Qt,s=je(),a=ie;if(a){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!Mi((De||s).memoizedState,n);if(r&&(s.memoizedState=n,nn=!0),s=s.queue,Hg(h1.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||tn!==null&&(tn.memoizedState.tag&1)!==0,Do(e?9:8,{destroy:void 0},u1.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ue===null)throw Error(j(349));a||(Hs&127)!==0||c1(i,t,n)}return n}function c1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Qt.updateQueue,t===null?(t=tf(),Qt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function u1(e,t,n,i){t.value=n,t.getSnapshot=i,f1(t)&&d1(e)}function h1(e,t,n){return n(function(){f1(t)&&d1(e)})}function f1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mi(e,n)}catch{return!0}}function d1(e){var t=Tr(e,2);t!==null&&si(t,e,2)}function Rm(e){var t=Zn();if(typeof e=="function"){var n=e;if(e=n(),yr){_a(!0);try{n()}finally{_a(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e},t}function p1(e,t,n,i){return e.baseState=n,Fg(e,De,typeof i=="function"?i:Vs)}function PA(e,t,n,i,s){if(sf(e))throw Error(j(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};kt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,m1(t,a)):(a.next=n.next,t.pending=n.next=a)}}function m1(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=kt.T,r={};r.types=a!==null?a.types:null,kt.T=r;try{var o=n(s,i),l=kt.S;l!==null&&l(r,o),ny(e,t,o)}catch(c){Cm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),kt.T=a}}else try{a=n(s,i),ny(e,t,a)}catch(c){Cm(e,t,c)}}function ny(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){iy(e,t,i)},function(i){return Cm(e,t,i)}):iy(e,t,n)}function iy(e,t,n){t.status="fulfilled",t.value=n,g1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,m1(e,n)))}function Cm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,g1(t),t=t.next;while(t!==i)}e.action=null}function g1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function v1(e,t){return t}function sy(e,t){if(ie){var n=Ue.formState;if(n!==null){t:{var i=Qt;if(ie){if(Be){e:{for(var s=Be,a=Fi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Hi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Be=Hi(s.nextSibling),i=s.data==="F!";break t}}Oa(i)}i=!1}i&&(t=n[0])}}return n=Zn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v1,lastRenderedState:t},n.queue=i,n=L1.bind(null,Qt,i),i.dispatch=n,i=Rm(!1),a=Xg.bind(null,Qt,!1,i.queue),i=Zn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=PA.bind(null,Qt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function ay(e){var t=je();return _1(t,De,e)}function _1(e,t,n){if(t=Fg(e,t,v1)[0],e=sh(Vs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Dc(t)}catch(r){throw r===Go?$h:r}else i=t;t=je();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Qt.flags|=2048,Do(9,{destroy:void 0},zA.bind(null,s,n),null)),[i,a,e]}function zA(e,t){e.action=t}function ry(e){var t=je(),n=De;if(n!==null)return _1(t,n,e);je(),t=t.memoizedState,n=je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Do(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Qt.updateQueue,t===null&&(t=tf(),Qt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function y1(){return je().memoizedState}function ah(e,t,n,i){var s=Zn();Qt.flags|=e,s.memoizedState=Do(1|t,{destroy:void 0},n,i===void 0?null:i)}function nf(e,t,n,i){var s=je();i=i===void 0?null:i;var a=s.memoizedState.inst;De!==null&&i!==null&&Lg(i,De.memoizedState.deps)?s.memoizedState=Do(t,a,n,i):(Qt.flags|=e,s.memoizedState=Do(1|t,a,n,i))}function oy(e,t){ah(8390656,8,e,t)}function Hg(e,t){nf(2048,8,e,t)}function BA(e){Qt.flags|=4;var t=Qt.updateQueue;if(t===null)t=tf(),Qt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function x1(e){var t=je().memoizedState;return BA({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function S1(e,t){return nf(4,2,e,t)}function M1(e,t){return nf(4,4,e,t)}function b1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function E1(e,t,n){n=n!=null?n.concat([e]):null,nf(4,4,b1.bind(null,t,e),n)}function Vg(){}function T1(e,t){var n=je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Lg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function A1(e,t){var n=je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Lg(t,i[1]))return i[0];if(i=e(),yr){_a(!0);try{e()}finally{_a(!1)}}return n.memoizedState=[i,t],i}function Gg(e,t,n){return n===void 0||(Hs&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=_S(),Qt.lanes|=e,Ba|=e,n)}function w1(e,t,n,i){return Mi(n,t)?n:Pa.current!==null?(e=Gg(e,n,i),Mi(e,t)||(nn=!0),e):(Hs&106)===0||(Hs&1073741824)!==0&&(ue&261930)===0?(nn=!0,e.memoizedState=n):(e=_S(),Qt.lanes|=e,Ba|=e,t)}function R1(e,t,n,i,s){var a=ye.p;ye.p=a!==0&&8>a?a:8;var r=kt.T,o={};o.types=r!==null?r.types:null,kt.T=o,Xg(e,!1,t,n);try{var l=s(),c=kt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=LA(l,i);ec(e,t,u,Si(e))}else ec(e,t,i,Si(e))}catch(d){ec(e,t,{then:function(){},status:"rejected",reason:d},Si())}finally{ye.p=a,r!==null&&o.types!==null&&(r.types=o.types),kt.T=r}}function FA(){}function Dm(e,t,n,i){if(e.tag!==5)throw Error(j(476));var s=C1(e).queue;R1(e,s,t,cr,n===null?FA:function(){return D1(e),n(i)})}function C1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:cr,baseState:cr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:cr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function D1(e){var t=C1(e);t.next===null&&(t=e.alternate.memoizedState),ec(e,t.next.queue,{},Si())}function kg(){return Mn(zo)}function N1(){return je().memoizedState}function U1(){return je().memoizedState}function HA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Si();e=Aa(n);var i=wa(t,e,n);i!==null&&(si(i,t,n),jl(i,t,n)),t={cache:wg()},e.payload=t;return}t=t.return}}function VA(e,t,n){var i=Si();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},sf(e)?I1(t,n):(n=Eg(e,t,n,i),n!==null&&(si(n,e,i),O1(n,t,i)))}function L1(e,t,n){var i=Si();ec(e,t,n,i)}function ec(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(sf(e))I1(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Mi(o,r))return Qh(e,t,s,0),Ue===null&&Kh(),!1}catch{}finally{}if(n=Eg(e,t,s,i),n!==null)return si(n,e,i),O1(n,t,i),!0}return!1}function Xg(e,t,n,i){if(i={lane:2,revertLane:e0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},sf(e)){if(t)throw Error(j(479))}else t=Eg(e,n,i,2),t!==null&&si(t,e,2)}function sf(e){var t=e.alternate;return e===Qt||t!==null&&t===Qt}function I1(e,t){Mo=Ch=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function O1(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,yx(e,n)}}var Nh={readContext:Mn,use:ef,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke,useEffectEvent:Ke},P1={readContext:Mn,use:ef,useCallback:function(e,t){return Zn().memoizedState=[e,t===void 0?null:t],e},useContext:Mn,useEffect:oy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ah(4194308,4,b1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ah(4194308,4,e,t)},useInsertionEffect:function(e,t){ah(4,2,e,t)},useMemo:function(e,t){var n=Zn();t=t===void 0?null:t;var i=e();if(yr){_a(!0);try{e()}finally{_a(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Zn();if(n!==void 0){var s=n(t);if(yr){_a(!0);try{n(t)}finally{_a(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=VA.bind(null,Qt,e),[i.memoizedState,e]},useRef:function(e){var t=Zn();return e={current:e},t.memoizedState=e},useState:function(e){e=Rm(e);var t=e.queue,n=L1.bind(null,Qt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Vg,useDeferredValue:function(e,t){var n=Zn();return Gg(n,e,t)},useTransition:function(){var e=Rm(!1);return e=R1.bind(null,Qt,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Qt,s=Zn();if(ie){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Ue===null)throw Error(j(349));(ue&127)!==0||c1(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,oy(h1.bind(null,i,a,e),[e]),i.flags|=2048,Do(9,{destroy:void 0},u1.bind(null,i,a,n,t),null),n},useId:function(){var e=Zn(),t=Ue.identifierPrefix;if(ie){var n=_s,i=vs;n=(i&~(1<<32-xi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Dh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=IA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:kg,useFormState:sy,useActionState:sy,useOptimistic:function(e){var t=Zn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Xg.bind(null,Qt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bg,useCacheRefresh:function(){return Zn().memoizedState=HA.bind(null,Qt)},useEffectEvent:function(e){var t=Zn(),n={impl:e};return t.memoizedState=n,function(){if((_e&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},z1={readContext:Mn,use:ef,useCallback:T1,useContext:Mn,useEffect:Hg,useImperativeHandle:E1,useInsertionEffect:S1,useLayoutEffect:M1,useMemo:A1,useReducer:sh,useRef:y1,useState:function(){return sh(Vs)},useDebugValue:Vg,useDeferredValue:function(e,t){var n=je();return w1(n,De.memoizedState,e,t)},useTransition:function(){var e=sh(Vs)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Dc(e),t]},useSyncExternalStore:l1,useId:N1,useHostTransitionStatus:kg,useFormState:ay,useActionState:ay,useOptimistic:function(e,t){var n=je();return p1(n,De,e,t)},useMemoCache:Bg,useCacheRefresh:U1,useEffectEvent:x1},GA={readContext:Mn,use:ef,useCallback:T1,useContext:Mn,useEffect:Hg,useImperativeHandle:E1,useInsertionEffect:S1,useLayoutEffect:M1,useMemo:A1,useReducer:Hp,useRef:y1,useState:function(){return Hp(Vs)},useDebugValue:Vg,useDeferredValue:function(e,t){var n=je();return De===null?Gg(n,e,t):w1(n,De.memoizedState,e,t)},useTransition:function(){var e=Hp(Vs)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Dc(e),t]},useSyncExternalStore:l1,useId:N1,useHostTransitionStatus:kg,useFormState:ry,useActionState:ry,useOptimistic:function(e,t){var n=je();return De!==null?p1(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bg,useCacheRefresh:U1,useEffectEvent:x1};function Vp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Si(),s=Aa(i);s.payload=t,n!=null&&(s.callback=n),t=wa(e,s,i),t!==null&&(si(t,e,i),jl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Si(),s=Aa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=wa(e,s,i),t!==null&&(si(t,e,i),jl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Si(),i=Aa(n);i.tag=2,t!=null&&(i.callback=t),t=wa(e,i,n),t!==null&&(si(t,e,n),jl(t,e,n))}};function ly(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!uc(n,i)||!uc(s,a):!0}function cy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Nm.enqueueReplaceState(t,t.state,null)}function xr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Le({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function B1(e){Sh(e)}function F1(e){console.error(e)}function H1(e){Sh(e)}function Uh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function uy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Um(e,t,n){return n=Aa(n),n.tag=3,n.payload={element:null},n.callback=function(){Uh(e,t)},n}function V1(e){return e=Aa(e),e.tag=3,e}function G1(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){uy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){uy(t,n,i),typeof s!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function kA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&mr(t,n,s,!0),n=An.current,n!==null){switch(n.tag){case 31:case 13:case 19:return On===null?Hh():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Ah?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Zp(e,i,s)),!1;case 22:return n.flags|=65536,i===Ah?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Zp(e,i,s)),!1}throw Error(j(435,n.tag))}return Zp(e,i,s),Hh(),!1}if(ie)return t=An.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==xm&&(e=Error(j(422),{cause:i}),fc(Bi(e,n)))):(i!==xm&&(t=Error(j(423),{cause:i}),fc(Bi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Bi(i,n),s=Um(e.stateNode,i,s),Fp(e,s),Qe!==4&&(Qe=2)),!1;var a=Error(j(520),{cause:i});if(a=Bi(a,n),ac===null?ac=[a]:ac.push(a),Qe!==4&&(Qe=2),t===null)return!0;i=Bi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Um(n.stateNode,i,e),Fp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Da===null||!Da.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=V1(s),G1(s,e,n,i),Fp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Wg=Error(j(461)),nn=!1;function rn(e,t,n,i){t.child=e===null?n1(t,null,n,i):_r(t,e.child,n,i)}function hy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return gr(t),i=Ig(e,t,n,r,a,s),o=Og(),e!==null&&!nn?(Pg(e,t,s),Gs(e,t,s)):(ie&&o&&jh(t),t.flags|=1,rn(e,t,i,s),t.child)}function fy(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Tg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,k1(e,t,a,i,s)):(e=eh(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Yg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:uc,n(r,i)&&e.ref===t.ref)return Gs(e,t,s)}return t.flags|=1,e=Ps(a,i),e.ref=t.ref,e.return=t,t.child=e}function k1(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(uc(a,i)&&e.ref===t.ref)if(nn=!1,t.pendingProps=i=a,Yg(e,s))(e.flags&131072)!==0&&(nn=!0);else return t.lanes=e.lanes,Gs(e,t,s)}return Lm(e,t,n,i,s)}function X1(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return dy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ih(t,a!==null?a.cachePool:null),a!==null?ey(t,a):Am(),a1(t);else return i=t.lanes=536870912,dy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(ih(t,a.cachePool),ey(t,a),Ca(),t.memoizedState=null):(e!==null&&ih(t,null),Am(),Ca());return rn(e,t,s,n),t.child}function nc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dy(e,t,n,i,s){var a=Rg();return a=a===null?null:{parent:en._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ih(t,null),Am(),a1(t),e!==null&&mr(e,t,i,!0),t.childLanes=s,null}function rh(e,t){return t=af({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function py(e,t,n){return _r(t,e.child,null,n),e=rh(t,t.pendingProps),e.flags|=2,mi(t),t.memoizedState=null,e}function XA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ie){if(i.mode==="hidden")return e=rh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},nc(null,e);if(wm(t),(e=Be)?(e=XS(e,Fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:vs,overflow:_s}:null,retryLane:536870912,hydrationErrors:null},n=Jx(e),n.return=t,t.child=n,mn=t,Be=null)):e=null,e===null)throw Oa(t);return t.lanes=536870912,null}return rh(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(wm(t),s)if(t.flags&256)t.flags&=-257,t=py(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(nn||mr(e,t,n,!1),s=(n&e.childLanes)!==0,nn||s){if(Pa.current===null){if(i=Ue,i!==null&&(r=xx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Tr(e,r),si(i,e,r),Wg;Hh()}t=py(e,t,n)}else e=a.treeContext,Be=Hi(r.nextSibling),mn=t,ie=!0,Ta=null,Fi=!1,e!==null&&Qx(t,e),t=rh(t,i),t.flags|=134221824;return t}return e=Ps(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function eo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Lm(e,t,n,i,s){return gr(t),n=Ig(e,t,n,i,void 0,s),i=Og(),e!==null&&!nn?(Pg(e,t,s),Gs(e,t,s)):(ie&&i&&jh(t),t.flags|=1,rn(e,t,n,s),t.child)}function my(e,t,n,i,s,a){return gr(t),t.updateQueue=null,n=o1(t,i,n,s),r1(e),i=Og(),e!==null&&!nn?(Pg(e,t,a),Gs(e,t,a)):(ie&&i&&jh(t),t.flags|=1,rn(e,t,n,a),t.child)}function gy(e,t,n,i,s){if(gr(t),t.stateNode===null){var a=fo,r=n.contextType;typeof r=="object"&&r!==null&&(a=Mn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Nm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Dg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?Mn(r):fo,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Vp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Nm.enqueueReplaceState(a,a.state,null),tc(t,i,a,s),$l(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=xr(n,o);a.props=l;var c=a.context,u=n.contextType;r=fo,typeof u=="object"&&u!==null&&(r=Mn(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&cy(t,a,i,r),ga=!1;var f=t.memoizedState;a.state=f,tc(t,i,a,s),$l(),c=t.memoizedState,o||f!==c||ga?(typeof d=="function"&&(Vp(t,n,d,i),c=t.memoizedState),(l=ga||ly(t,n,l,i,f,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Em(e,t),r=t.memoizedProps,u=xr(n,r),a.props=u,d=t.pendingProps,f=a.context,c=n.contextType,l=fo,typeof c=="object"&&c!==null&&(l=Mn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&cy(t,a,i,l),ga=!1,f=t.memoizedState,a.state=f,tc(t,i,a,s),$l();var p=t.memoizedState;r!==d||f!==p||ga||e!==null&&e.dependencies!==null&&Th(e.dependencies)?(typeof o=="function"&&(Vp(t,n,o,i),p=t.memoizedState),(u=ga||ly(t,n,u,i,f,p,l)||e!==null&&e.dependencies!==null&&Th(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,eo(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=_r(t,e.child,null,s),t.child=_r(t,null,n,s)):rn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Gs(e,t,s),e}function vy(e,t,n,i){return pr(),t.flags|=256,rn(e,t,n,i),t.child}var Im={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Om(e){return{baseLanes:e,cachePool:$x()}}function Pm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=vi),e}function W1(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(En.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ie){if(s?Ra(t):Ca(),(e=Be)?(e=XS(e,Fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:vs,overflow:_s}:null,retryLane:536870912,hydrationErrors:null},n=Jx(e),n.return=t,t.child=n,mn=t,Be=null)):e=null,e===null)throw Oa(t);return a0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(Ca(),s=t.mode,a=af({mode:"hidden",children:a},s),i=ur(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Om(n),i.childLanes=Pm(e,r,n),t.memoizedState=Im,nc(null,i)):(Ra(t),qg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return WA(e,t,a,r,i,l,o,n)}return s?(Ca(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Ps(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Ps(l,s):(s=ur(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,nc(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Om(n):(a=s.cachePool,a!==null?(o=en._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=$x(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Pm(e,r,n),t.memoizedState=Im,nc(e.child,i)):(Ra(t),n=e.child,e=n.sibling,n=Ps(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function qg(e,t){return t=af({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function af(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function Vu(e,t,n){return _r(t,e.child,null,n),e=qg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function WA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Ra(t),t.flags&=-257,Vu(e,t,o)):t.memoizedState!==null?(Ca(),t.child=e.child,t.flags|=128,null):(Ca(),a=s.fallback,r=t.mode,s=af({mode:"visible",children:s.children},r),a=ur(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,_r(t,e.child,null,o),s=t.child,s.memoizedState=Om(o),s.childLanes=Pm(e,i,o),t.memoizedState=Im,nc(null,s));if(Ra(t),a0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(j(419)),s.stack="",s.digest=i,fc({value:s,source:null,stack:null})),Vu(e,t,o)}if(nn||mr(e,t,o,!1),i=(o&e.childLanes)!==0,nn||i){if(Pa.current!==null)return Vu(e,t,o);if(i=Ue,i!==null&&(s=xx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Tr(e,s),si(i,e,s),Wg;return og(a)||Hh(),Vu(e,t,o)}return og(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Be=Hi(a.nextSibling),mn=t,ie=!0,Ta=null,Fi=!1,e!==null&&Qx(t,e),t=qg(t,s.children),t.flags|=134221824,t)}function _y(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),nh(e.return,t,n)}function yy(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Rh(n)===null&&(t=e),e=e.sibling}return t}function Gu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Gp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function zm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=En.current;if(t.flags&128)return pc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,pc(t,r),s==="backwards"&&e!==null?(Gp(e),rn(e,t,i,n),Gp(e)):rn(e,t,i,n),i=ie?hc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_y(e,n,t);else if(e.tag===19)_y(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=yy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Gp(t)),Gu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Rh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Gu(t,!0,n,null,a,i);break;case"together":Gu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=yy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Gu(t,!1,s,n,a,i)}return t.child}function xy(e,t,n){var i=t.pendingProps;return xa(t,t.type,i.value),rn(e,t,i.children,n),t.child}function Gs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ba|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(mr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Ps(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ps(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Th(e)))}function qA(e,t,n){switch(t.tag){case 3:vh(t,t.stateNode.containerInfo),xa(t,en,e.memoizedState.cache),pr();break;case 27:case 5:um(t);break;case 4:vh(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ra(t),t.flags|=128,null;i=mr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?W1(e,t,n):(Ra(t),e=Gs(e,t,n),e!==null?e.sibling:null)}Ra(t);break;case 19:if(t.flags&128)return zm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(mr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return zm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),pc(t,En.current),i)break;return null;case 22:return t.lanes=0,X1(e,t,n,t.pendingProps);case 24:xa(t,en,e.memoizedState.cache)}return Gs(e,t,n)}function q1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nn=!0;else{if(!Yg(e,n)&&(t.flags&128)===0)return nn=!1,qA(e,t,n);nn=(e.flags&131072)!==0}else nn=!1,ie&&(t.flags&1048576)!==0&&Kx(t,hc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ar(t.elementType),t.type=e,typeof e=="function")Tg(e)?(i=xr(e,i),t.tag=1,t=gy(null,t,e,i,n)):(t.tag=0,t=Lm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===fg){t.tag=11,t=hy(null,t,e,i,n);break t}else if(s===dg){t.tag=14,t=fy(null,t,e,i,n);break t}else if(s===ms){t.tag=10,t.type=e,t=xy(null,t,n);break t}}throw t=lm(e)||e,Error(j(306,t,""))}}return t;case 0:return Lm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=xr(i,t.pendingProps),gy(e,t,i,s,n);case 3:t:{if(vh(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Em(e,t),tc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,xa(t,en,i),i!==a.cache&&Mm(t,[en],n,!0),$l(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=vy(e,t,i,n);break t}else if(i!==s){s=Bi(Error(j(424)),t),fc(s),t=vy(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Hi(e.firstChild),mn=t,ie=!0,Ta=null,Fi=!0,n=n1(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(pr(),i===s){t=Gs(e,t,n);break t}rn(e,t,i,n)}t=t.child}return t;case 26:return eo(e,t),e===null?(n=Yy(t.type,null,t.pendingProps,null))?t.memoizedState=n:ie||(t.stateNode=OS(t.type,t.pendingProps,Ea.current,t)):t.memoizedState=Yy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return um(t),e===null&&ie&&(i=t.stateNode=WS(t.type,t.pendingProps,Ea.current),mn=t,Fi=!0,s=Be,Ha(t.type)?(lg=s,Be=Hi(i.firstChild)):Be=s),rn(e,t,t.pendingProps.children,n),eo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ie&&((s=i=Be)&&(i=Bw(i,t.type,t.pendingProps,Fi),i!==null?(t.stateNode=i,mn=t,Be=Hi(i.firstChild),Fi=!1,s=!0):s=!1),s||Oa(t)),um(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,sg(s,a)?i=null:r!==null&&sg(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Ig(e,t,OA,null,null,n),zo._currentValue=s),eo(e,t),rn(e,t,i,n),t.child;case 6:return e===null&&ie&&((e=n=Be)&&(n=Fw(n,t.pendingProps,Fi),n!==null?(t.stateNode=n,mn=t,Be=null,e=!0):e=!1),e||Oa(t)),null;case 13:return W1(e,t,n);case 4:return vh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_r(t,null,i,n):rn(e,t,i,n),t.child;case 11:return hy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,eo(e,t),rn(e,t,i,n),t.child;case 8:return rn(e,t,t.pendingProps.children,n),t.child;case 12:return rn(e,t,t.pendingProps.children,n),t.child;case 10:return xy(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,gr(t),s=Mn(s),i=i(s),t.flags|=1,rn(e,t,i,n),t.child;case 14:return fy(e,t,t.type,t.pendingProps,n);case 15:return k1(e,t,t.type,t.pendingProps,n);case 19:return zm(e,t,n);case 31:return XA(e,t,n);case 22:return X1(e,t,n,t.pendingProps);case 24:return gr(t),i=Mn(en),e===null?(s=Rg(),s===null&&(s=Ue,a=wg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Dg(t),xa(t,en,s)):((e.lanes&n)!==0&&(Em(e,t),tc(t,null,null,n),$l()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),xa(t,en,i)):(i=a.cache,xa(t,en,i),i!==s.cache&&Mm(t,[en],n,!0))),rn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:ie&&jh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:eo(e,t),rn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function Ls(e){e.flags|=4}function kp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Ky(t,i):Ky(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(SS())e.flags|=8192;else throw fr=Ah,Cg}else e.flags&=-16777217}function Sy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!JS(t))if(SS())e.flags|=8192;else throw fr=Ah,Cg}function ku(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vx():536870912,e.lanes|=t,No|=t)}function Fl(e,t){if(!ie)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function YA(e,t,n){var i=t.pendingProps;switch(Ag(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),zs(en),wo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($r(t)?Ls(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bp())),ze(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Ls(t),a!==null?(ze(t),Sy(t,a)):(ze(t),kp(t,s,null,i,n))):a?a!==e.memoizedState?(Ls(t),ze(t),Sy(t,a)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ls(t),ze(t),kp(t,s,e,i,n)),null;case 27:if(_h(t),n=Ea.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ls(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return ze(t),t.subtreeFlags&=-33554433,null}e=ys.current,$r(t)?Z_(t,e):(e=WS(s,i,n),t.stateNode=e,Ls(t))}return ze(t),t.subtreeFlags&=-33554433,null;case 5:if(_h(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ls(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return ze(t),t.subtreeFlags&=-33554433,null}if(a=ys.current,$r(t))Z_(t,a);else{var r=_c(Ea.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[Sn]=t,a[ri]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Tn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ls(t)}}return ze(t),t.subtreeFlags&=-33554433,kp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ls(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=Ea.current,$r(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=mn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Sn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||LS(e.nodeValue,n)),e||Oa(t,!0)}else e=_c(e).createTextNode(i),e[Sn]=t,t.stateNode=e}return ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=$r(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[Sn]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else n=Bp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mi(t),t):(mi(t),null);if((t.flags&128)!==0)throw Error(j(558))}return ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=$r(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Sn]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else s=Bp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(mi(t),t):(mi(t),null)}return mi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ku(t,t.updateQueue),ze(t),null);case 4:return wo(),e===null&&n0(t.stateNode.containerInfo),t.flags|=67108864,ze(t),null;case 10:return zs(t.type),ze(t),null;case 19:if(Ug(t),i=t.memoizedState,i===null)return ze(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Fl(i,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Rh(e),a!==null){for(t.flags|=128,Fl(i,!1),e=a.updateQueue,t.updateQueue=e,ku(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Zx(n,e),n=n.sibling;return pc(t,En.current&1|2),ie&&Is(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&_i()>Bh&&(t.flags|=128,s=!0,Fl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Rh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,ku(t,e),Fl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!ie)return ze(t),null}else 2*_i()-i.renderingStartTime>Bh&&n!==536870912&&(t.flags|=128,s=!0,Fl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=_i(),e.sibling=null,a=En.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||ie?pc(t,a):(n=a,Fe(An,t),Fe(En,n),On===null&&(On=t)),ie&&Is(t,i.treeForkCount),e}return ze(t),null;case 22:case 23:return mi(t),Ng(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&ku(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&bn(hr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zs(en),ze(t),null;case 25:return null;case 30:return t.flags|=33554432,ze(t),null}throw Error(j(156,t.tag))}function ZA(e,t){switch(Ag(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zs(en),wo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _h(t),null;case 31:if(t.memoizedState!==null){if(mi(t),t.alternate===null)throw Error(j(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ug(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return wo(),null;case 10:return zs(t.type),null;case 22:case 23:return mi(t),Ng(),e!==null&&bn(hr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zs(en),null;case 25:return null;default:return null}}function Y1(e,t){switch(Ag(t),t.tag){case 3:zs(en),wo();break;case 26:case 27:case 5:_h(t);break;case 4:wo();break;case 31:t.memoizedState!==null&&mi(t);break;case 13:mi(t);break;case 19:Ug(t);break;case 10:zs(t.type);break;case 22:case 23:mi(t),Ng(),e!==null&&bn(hr);break;case 24:zs(en)}}function Nc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){Ee(t,t.return,o)}}function za(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){Ee(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){Ee(t,t.return,u)}}function Z1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{s1(t,n)}catch(i){Ee(e,e.return,i)}}}function J1(e,t,n){n.props=xr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ee(e,t,i)}}function ds(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Fs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=FS(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new bi(e);ai(e.child,!1,Pw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ee(e,t,o)}}function xn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Ee(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ee(e,t,s)}else n.current=null}function Lh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)kS(e.stateNode,t[n])}function My(e){for(var t=e.return;t!==null&&(Jg(t)&&kS(e.stateNode,t.stateNode),!Zg(t));)t=t.return}function ic(e){for(var t=e.return;t!==null&&(Jg(t)&&zw(e.stateNode,t.stateNode),!Zg(t));)t=t.return}function Zg(e){return e.tag===5||e.tag===3||e.tag===27}function Jg(e){return e&&e.tag===7&&e.stateNode!==null}function Bm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Ee(e,e.return,s)}}function Xp(e,t,n){try{var i=e.stateNode;_w(i,e.type,n,t),i[ri]=t}catch(s){Ee(e,e.return,s)}}function K1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Wp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||K1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gs)),Lh(e,i),ve=!0;else if(s!==4&&(s===27&&(Lh(e,i),i=null,Ha(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Fm(e,t,n,i),e=e.sibling;e!==null;)Fm(e,t,n,i),e=e.sibling}function Ih(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Lh(e,i),ve=!0;else if(s!==4&&(s===27&&(Lh(e,i),i=null,Ha(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ih(e,t,n,i),e=e.sibling;e!==null;)Ih(e,t,n,i),e=e.sibling}function Q1(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Tn(t,i,n),t[Sn]=e,t[ri]=n}catch(a){Ee(e,e.return,a)}}var Oh=!1,gi=null;function by(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Oh=!0)}var ps=null;function Ey(){var e=ps;return ps=null,e}var ni=0;function ko(e,t,n,i,s){return ni=0,j1(e.child,t,n,i,s)}function j1(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=ag(r);i.push(o),o.view&&(a=!0)}else a||ag(r).view&&(a=!0);Oh=!0,PS(r,ni===0?t:t+"_"+ni,n),ni++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||j1(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function Ss(e,t){for(;e!==null;)e.tag===5?zS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ss(e.child,t)),e=e.sibling}function oh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(oh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(j(544));var n=t.name;t=Ws(t.default,t.share),t!=="none"&&(ko(e,n,t,null,!1)||Ss(e.child,!1))}e=e.sibling}}function Hm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Fs(i,n),a=Ws(i.default,n.paired?i.share:i.enter);a!=="none"?ko(e,s,a,null,!1)?(oh(e),n.paired||t||Uo(e,i.onEnter)):Ss(e.child,!1):oh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hm(e,t),e=e.sibling;else oh(e)}function Vm(e){if(gi!==null&&gi.size!==0){var t=gi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Ws(n.default,n.share);if(a!=="none"&&(ko(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Uo(e,n.onShare)):Ss(e.child,!1)),t.delete(i),t.size===0)break}}}Vm(e)}e=e.sibling}}}function Gm(e){if(e.tag===30){var t=e.memoizedProps,n=Fs(t,e.stateNode),i=gi!==null?gi.get(n):void 0,s=Ws(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(ko(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,gi.delete(n),Uo(e,t.onShare)):Uo(e,t.onExit):Ss(e.child,!1)),gi!==null&&Vm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Gm(e),e=e.sibling;else gi!==null&&Vm(e)}function $1(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Fs(t,e.stateNode);t=Ws(t.default,t.update),e.flags&=-5,t!=="none"&&ko(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&$1(e);e=e.sibling}}function km(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ss(e.child,!1))}km(e)}e=e.sibling}}function lh(e){if(e.tag===30)e.stateNode.paired=null,Ss(e.child,!1),km(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)lh(e),e=e.sibling;else km(e)}function tS(e){for(e=e.child;e!==null;)e.tag===30?Ss(e.child,!1):(e.subtreeFlags&33554432)!==0&&tS(e),e=e.sibling}function Kg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&ni<a.length){var c=a[ni],u=ag(l);(c.view||u.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(u.clip)d=!0;else{d=c.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}d&&(e.flags|=4),u.abs?u=!c.abs:(c=c.rect,u=u.rect,u=c.height!==u.height||c.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&PS(l,ni===0?n:n+"_"+ni,s),o&&(e.flags&4)!==0||(ps===null&&(ps=[]),ps.push(l,ni===0?i:i+"_"+ni,t.memoizedProps)),ni++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Kg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function eS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Fs(n,i),a=Ws(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(Ew)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;ni=0,s=Kg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Uo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&eS(e,t);e=e.sibling}}var fn=!1,Se=!1,us=!1,qp=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,dn=null,hs=!1,Yl=!1,Ph=!1,Xm=!1;function JA(e,t,n){if(e=e.containerInfo,ng=Bo,e=Hx(e),Mg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,u=0,d=0,f=e,p=null;e:for(;;){for(var v;f!==i||a!==0&&f.nodeType!==3||(l=o+a),f!==r||s!==0&&f.nodeType!==3||(c=o+s),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break e;if(p===i&&++u===a&&(l=o),p===r&&++d===s&&(c=o),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(ig={focusedElem:e,selectionRange:i},Bo=!1,n=(n&335544064)===n,dn=t,t=n?9270:1024;dn!==null;){if(e=dn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Gm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&by(e),Xu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Gm(i),Xu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&by(e),Xu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,dn=i):(n&&$1(e),Xu(n))}}gi=null}function Xu(e){for(;dn!==null;){var t=dn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=xr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){Ee(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)rg(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":rg(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Fs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Ws(s.default,s.update),s!=="none"&&ko(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(j(163))}if(i=t.sibling,i!==null){i.return=t.return,dn=i;break}dn=t.return}}function nS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fs(e,n),i&4&&Nc(5,n);break;case 1:if(fs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ee(n,n.return,r)}else{var s=xr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ee(n,n.return,r)}}i&64&&Z1(n),i&512&&ds(n,n.return);break;case 3:if(fs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{s1(e,t)}catch(r){Ee(n,n.return,r)}}break;case 27:t===null&&i&4&&Q1(n);case 26:case 5:fs(e,n),t===null&&i&4&&Bm(n),i&512&&ds(n,n.return);break;case 12:fs(e,n);break;case 31:fs(e,n),i&4&&rS(e,n);break;case 13:fs(e,n),i&4&&oS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ow.bind(null,n),Hw(e,n))));break;case 22:if(i=n.memoizedState!==null||fn,!i){var a=t!==null&&t.memoizedState!==null||Se;t=fn,s=Se,fn=i,(Se=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ji(e,n,i)):fs(e,n),fn=t,Se=s}break;case 30:fs(e,n),i&512&&ds(n,n.return);break;case 7:i&512&&ds(n,n.return);default:fs(e,n)}}function Wm(e,t){for(e=e.child;e!==null;)iS(e,t),e=e.sibling}function iS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Ee(e,e.return,l)}qm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ve=!0}catch(l){Ee(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Vy(o,!0):Vy(e.stateNode,!1)}catch(l){Ee(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Wm(e,t);break;default:Wm(e,t)}}function qm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:iS(n,i);break t;case 22:n.memoizedState===null&&qm(n,i);break t;default:qm(n,i)}}e=e.sibling}}function sS(e){var t=e.alternate;t!==null&&(e.alternate=null,sS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,ti=!1;function Zi(e,t,n){for(n=n.child;n!==null;)aS(e,t,n),n=n.sibling}function aS(e,t,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 26:Se||xn(n,t),Zi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Se&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Se||xn(n,t),ic(n);var i=We,s=ti;Ha(n.type)&&(We=n.stateNode,ti=!1),Zi(e,t,n),qS(n.stateNode,n.type,n.memoizedProps),We=i,ti=s;break;case 5:Se||xn(n,t),ic(n);case 6:if(n.tag===6&&ic(n),i=We,s=ti,We=null,Zi(e,t,n),We=i,ti=s,We!==null)if(ti)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode),ve=!0}catch(a){Ee(n,t,a)}else try{We.removeChild(n.stateNode),ve=!0}catch(a){Ee(n,t,a)}break;case 18:We!==null&&(ti?(e=We,Hy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fo(e)):Hy(We,n.stateNode));break;case 4:i=We,s=ti,We=n.stateNode.containerInfo,ti=!0,Zi(e,t,n),We=i,ti=s;break;case 0:case 11:case 14:case 15:za(2,n,t),Se||za(4,n,t),Zi(e,t,n);break;case 1:Se||(xn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&J1(n,t,i)),Zi(e,t,n);break;case 21:Zi(e,t,n);break;case 22:Se=(i=Se)||n.memoizedState!==null,Zi(e,t,n),Se=i;break;case 30:xn(n,t),Zi(e,t,n);break;case 7:Se||xn(n,t),Zi(e,t,n);break;default:Zi(e,t,n)}}function rS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fo(e)}catch(n){Ee(t,t.return,n)}}}function oS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fo(e)}catch(n){Ee(t,t.return,n)}}function KA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ty),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ty),t;default:throw Error(j(435,e.tag))}}function Wu(e,t){var n=KA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=lw.bind(null,e,i);i.then(s,s)}})}function qn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ha(l.type)){We=l.stateNode,ti=!1;break t}break;case 5:We=l.stateNode,ti=!1;break t;case 3:case 4:We=l.stateNode.containerInfo,ti=!0;break t}l=l.return}if(We===null)throw Error(j(160));aS(r,o,a),We=null,ti=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lS(t,e,n),t=t.sibling}var Ki=null;function lS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}qn(t,e,n),Yn(e),s&4&&(za(3,e,e.return),Nc(3,e),za(5,e,e.return));break;case 1:qn(t,e,n),Yn(e),s&512&&(Se||i===null||xn(i,i.return)),s&64&&fn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Ki,qn(t,e,n),Yn(e),s&512&&(Se||i===null||xn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(fn)e.stateNode=OS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[wc]||i[Sn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),Tn(i,t,n),i[Sn]=e,pn(i),t=i;break t;case"link":if(a=Jy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),Tn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Jy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),Tn(i,t,n),s.head.appendChild(i);break;default:throw Error(j(468,t))}i[Sn]=e,pn(i),t=i}e.stateNode=t}else fn||cg(a,e.type,e.stateNode);else e.stateNode=Zy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||Se||t.parentNode.removeChild(t)):s.count--,n===null?fn||cg(a,e.type,e.stateNode):Zy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Xp(e,e.memoizedProps,i.memoizedProps);break;case 27:qn(t,e,n),Yn(e),s&512&&(Se||i===null||xn(i,i.return)),i!==null&&s&4&&Xp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=us,us=!1,qn(t,e,n),us=a,Yn(e),s&512&&(Se||i===null||xn(i,i.return)),e.flags&32){t=e.stateNode;try{Co(t,""),ve=!0}catch(u){Ee(e,e.return,u)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Xp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(qp=!0);break;case 6:if(qn(t,e,n),Yn(e),s&4){if(e.stateNode===null)throw Error(j(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ve=!0}catch(u){Ee(e,e.return,u)}}break;case 3:if(ve=!1,fh=null,a=Ki,Ki=yc(t.containerInfo),qn(t,e,n),Ki=a,Yn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Fo(t.containerInfo)}catch(u){Ee(e,e.return,u)}qp&&(qp=!1,cS(e)),ve=!1;break;case 4:s=us,us=fn,i=N_(),a=Ki,Ki=yc(e.stateNode.containerInfo),qn(t,e,n),Yn(e),Ki=a,ve&&Yl&&(Ph=!0),ve=i,us=s;break;case 12:qn(t,e,n),Yn(e);break;case 31:qn(t,e,n),Yn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Wu(e,t)));break;case 13:qn(t,e,n),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(rf=_i()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Wu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=fn,l=Se,c=us;fn=o||a,us=c||a,Se=l||r,qn(t,e,n),Se=l,us=c,fn=o,Yn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||fn||Se||(t=r||Se,n=fn,i=Se,fn=a||fn,Se=t,pa(e,2),fn=n,Se=i),!a&&us||Wm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Wu(e,n))));break;case 19:qn(t,e,n),Yn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Wu(e,t)));break;case 30:s&512&&(Se||i===null||xn(i,i.return)),s=N_(),a=Yl,r=(n&335544064)===n,o=e.memoizedProps,Yl=r&&Ws(o.default,o.update)!=="none",qn(t,e,n),Yn(e),r&&i!==null&&ve&&(e.flags|=4),Yl=a,ve=s;break;case 21:break;case 7:s&512&&(Se||i===null||xn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:qn(t,e,n),Yn(e)}}function Yn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(K1(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Jg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Zg(s))break;s=s.return}var r=i;if(n==null)throw Error(j(160));switch(n.tag){case 27:var o=n.stateNode,l=Wp(e);Ih(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Co(c,""),n.flags&=-33);var u=Wp(e);Ih(e,u,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,f=Wp(e);Fm(e,f,d,r);break;default:throw Error(j(161))}}catch(p){Ee(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;cS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Bo=!0,t.reset(),Bo=!1),e=e.sibling}}function to(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)uS(t,e),t=t.sibling;else eS(t,!1)}function uS(e,t){var n=e.alternate;if(n===null)Hm(e,!1);else switch(e.tag){case 3:if(Xm=hs=!1,Ey(),to(t,e),!hs&&!Ph){if(e=ps,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];zS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Xm=!0}ps=null;break;case 5:to(t,e);break;case 4:i=hs,hs=!1,to(t,e),hs&&(Ph=!0),hs=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Hm(e,!1):to(t,e));break;case 30:i=hs,s=Ey(),hs=!1,to(t,e),hs&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Fs(a,r),r=Fs(n.memoizedProps,r);var o=Ws(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ni=0,t=Kg(e,n,t,r,o,a,!0),ni!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Uo(e,e.memoizedProps.onUpdate),ps=s):s!==null&&(s.push.apply(s,ps),ps=s),hs=(e.flags&32)!==0?!0:i;break;default:to(t,e)}}function fs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)nS(e,t.alternate,t),t=t.sibling}function pa(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),pa(n,i);break;case 1:xn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&J1(n,n.return,s),pa(n,i);break;case 27:(i&2)!==0&&qS(n.stateNode,n.type,n.memoizedProps);case 5:xn(n,n.return),n.tag!==5&&n.tag!==27||ic(n),pa(n,i);break;case 6:ic(n);break;case 26:xn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||Se||s.parentNode.removeChild(s),pa(n,i);break;case 22:n.memoizedState===null&&pa(n,i);break;case 30:xn(n,n.return),pa(n,i);break;case 7:xn(n,n.return);default:pa(n,i)}e=e.sibling}}function Ji(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ji(s,a,n),Nc(4,a);break;case 1:if(Ji(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(u){Ee(i,i.return,u)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)i1(c[s],l)}catch(u){Ee(i,i.return,u)}}o&&r&64&&Z1(a),ds(a,a.return);break;case 27:(n&2)!==0&&Q1(a);case 5:a.tag!==5&&a.tag!==27||My(a),Ji(s,a,n),o&&i===null&&r&4&&Bm(a),ds(a,a.return);break;case 6:My(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||fn||cg(yc(l.ownerDocument),a.type,l),Ji(s,a,n),o&&i===null&&r&4&&Bm(a),ds(a,a.return);break;case 12:Ji(s,a,n);break;case 31:Ji(s,a,n),o&&r&4&&rS(s,a);break;case 13:Ji(s,a,n),o&&r&4&&oS(s,a);break;case 22:a.memoizedState===null&&Ji(s,a,n),ds(a,a.return);break;case 30:Ji(s,a,n),ds(a,a.return);break;case 7:ds(a,a.return);default:Ji(s,a,n)}t=t.sibling}}function Qg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cc(n))}function jg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cc(e))}function Li(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)hS(e,t,n,i),t=t.sibling;else s&&tS(t)}function hS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&lh(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Li(e,t,n,i),a&2048&&Nc(9,t);break;case 1:Li(e,t,n,i);break;case 3:Li(e,t,n,i),s&&Xm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Cc(a)));break;case 12:if(a&2048){Li(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){Ee(t,t.return,c)}}else Li(e,t,n,i);break;case 31:Li(e,t,n,i);break;case 13:Li(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&lh(o),r._visibility&2?Li(e,t,n,i):sc(e,t)):(s&&o!==null&&o.memoizedState!==null&&lh(t),r._visibility&2?Li(e,t,n,i):(r._visibility|=2,no(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Qg(o,t);break;case 24:Li(e,t,n,i),a&2048&&jg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(Ss(a.child,!0),Ss(t.child,!0))),Li(e,t,n,i);break;default:Li(e,t,n,i)}}function no(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:no(a,r,o,l,s),Nc(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?no(a,r,o,l,s):sc(a,r):(u._visibility|=2,no(a,r,o,l,s)),s&&c&2048&&Qg(r.alternate,r);break;case 24:no(a,r,o,l,s),s&&c&2048&&jg(r.alternate,r);break;default:no(a,r,o,l,s)}t=t.sibling}}function sc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:sc(n,i),s&2048&&Qg(i.alternate,i);break;case 24:sc(n,i),s&2048&&jg(i.alternate,i);break;default:sc(n,i)}t=t.sibling}}var rr=8192;function ir(e,t,n){if(e.subtreeFlags&rr)for(e=e.child;e!==null;)fS(e,t,n),e=e.sibling}function fS(e,t,n){switch(e.tag){case 26:ir(e,t,n),e.flags&rr&&(e.memoizedState!==null?t2(n,Ki,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Qy(n,e)));break;case 5:ir(e,t,n),e.flags&rr&&(e=e.stateNode,(t&335544128)===t&&Qy(n,e));break;case 3:case 4:var i=Ki;Ki=yc(e.stateNode.containerInfo),ir(e,t,n),Ki=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=rr,rr=16777216,ir(e,t,n),rr=i):ir(e,t,n));break;case 30:if((e.flags&rr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,gi===null&&(gi=new Map),gi.set(i,s)}ir(e,t,n);break;default:ir(e,t,n)}}function dS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,mS(i,e)}dS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pS(e),e=e.sibling}function pS(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&za(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ch(e)):Hl(e);break;default:Hl(e)}}function ch(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,mS(i,e)}dS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:za(8,t,t.return),ch(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ch(t));break;default:ch(t)}e=e.sibling}}function mS(e,t){for(;dn!==null;){var n=dn;switch(n.tag){case 0:case 11:case 15:za(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Cc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,dn=i;else t:for(n=e;dn!==null;){i=dn;var s=i.sibling,a=i.return;if(sS(i),i===n){dn=null;break t}if(s!==null){s.return=a,dn=s;break t}dn=a}}}var QA={getCacheForType:function(e){var t=Mn(en),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Mn(en).controller.signal}},jA=typeof WeakMap=="function"?WeakMap:Map,_e=0,Ue=null,re=null,ue=0,Me=0,di=null,Sa=!1,Xo=!1,$g=!1,ks=0,Qe=0,Ba=0,dr=0,zh=0,vi=0,No=0,ac=null,ei=null,Ym=!1,rf=0,gS=0,Bh=1/0,Fh=null,Da=null,Ze=0,ji=null,Sr=null,xs=0,Zm=0,Jm=null,vS=null,Eo=null,To=null,Ao=null,rc=0,uh=null;function Si(){return(_e&2)!==0&&ue!==0?ue&-ue:kt.T!==null?e0():Sx()}function _S(){if(vi===0)if((ue&536870912)===0||ie){var e=Uu;Uu<<=1,(Uu&3932160)===0&&(Uu=262144),vi=e}else vi=536870912;return e=An.current,e!==null&&(e.flags|=32),vi}function Uo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=FS(Fs(e.memoizedProps,n))),To===null&&(To=[]),To.push(t.bind(null,i))}}function si(e,t,n){(e===Ue&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(Lo(e,0),Ma(e,ue,vi,!1)),Ac(e,n),((_e&2)===0||e!==Ue)&&(e===Ue&&((_e&2)===0&&(dr|=n),Qe===4&&Ma(e,ue,vi,!1)),bs(e))}function yS(e,t,n){if((_e&6)!==0)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Tc(e,t),s=i?ew(e,t):Yp(e,t,!0),a=i;do{if(s===0){Xo&&!i&&Ma(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!$A(n)){s=Yp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=ac;var l=o.current.memoizedState.isDehydrated;if(l&&(Lo(o,r).flags|=256),r=Yp(o,r,!1),r!==2&&r!==6){if($g&&!l){o.errorRecoveryDisabledLanes|=a,dr|=a,s=4;break t}a=ei,ei=s,a!==null&&(ei===null?ei=a:ei.push.apply(ei,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Lo(e,0),Ma(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ma(i,t,vi,!Sa);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(s=rf+300-_i(),10<s)){if(Ma(i,t,vi,!Sa),Wh(i,0,!0)!==0)break t;xs=t,i.timeoutHandle=i0(Ay.bind(null,i,n,ei,Fh,Ym,t,vi,dr,No,Sa,a,"Throttled",-0,0),s);break t}Ay(i,n,ei,Fh,Ym,t,vi,dr,No,Sa,a,null,-0,0)}}break}while(!0);bs(e)}function Ay(e,t,n,i,s,a,r,o,l,c,u,d,f,p){e.timeoutHandle=-1;var v=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||v&8192||(v&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gs},gi=null,fS(t,a,d),x&&(v=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(v.count++,v.waitingForViewTransition=!0,v=xc.bind(v),x.finished.then(v,v))),v=(a&62914560)===a?rf-_i():(a&4194048)===a?gS-_i():0,v=e2(d,v),v!==null)){xs=a,e.cancelPendingCommit=v(Ry.bind(null,e,t,a,n,i,s,r,o,l,c,u,d,null,f,p)),Ma(e,a,r,!c);return}Ry(e,t,a,n,i,s,r,o,l,c,u,d)}function $A(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Mi(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ma(e,t,n,i){t=gx(e,t),t&=~zh,t&=~dr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-xi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&_x(e,n,t)}function of(){return(_e&6)===0?(Uc(0,!1),!1):!0}function t0(){if(re!==null){if(Me===0)var e=re.return;else e=re,Os=Ar=null,zg(e),So=null,dc=0,e=re;for(;e!==null;)Y1(e.alternate,e),e=e.return;re=null}}function Lo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Sw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xs=0,t0(),Ue=e,re=n=Ps(e.current,null),ue=t,Me=0,di=null,Sa=!1,Xo=Tc(e,t),$g=!1,No=vi=zh=dr=Ba=Qe=0,ei=ac=null,Ym=!1,ks=gx(e,t),Kh(),n}function xS(e,t){Qt=null,kt.H=Nh,t===Go||t===$h?(t=$_(),Me=3):t===Cg?(t=$_(),Me=4):Me=t===Wg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,di=t,re===null&&(Qe=1,Uh(e,Bi(t,e.current)))}function SS(){var e=An.current;return e===null?!0:(ue&4194048)===ue?On===null:(ue&62914560)===ue||(ue&536870912)!==0?e===On:!1}function MS(){var e=kt.H;return kt.H=Nh,e===null?Nh:e}function bS(){var e=kt.A;return kt.A=QA,e}function Hh(){Qe=4,Sa||(ue&4194048)!==ue&&An.current!==null||(Xo=!0),(Ba&134217727)===0&&(dr&134217727)===0||Ue===null||Ma(Ue,ue,vi,!1)}function Yp(e,t,n){var i=_e;_e|=2;var s=MS(),a=bS();(Ue!==e||ue!==t)&&(Fh=null,Lo(e,t)),t=!1;var r=Qe;t:do try{if(Me!==0&&re!==null){var o=re,l=di;switch(Me){case 8:t0(),r=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(t=!0);var c=Me;if(Me=0,di=null,go(e,o,l,c),n&&Xo){r=0;break t}break;default:c=Me,Me=0,di=null,go(e,o,l,c)}}tw(),r=Qe;break}catch(u){xS(e,u)}while(!0);return t&&e.shellSuspendCounter++,Os=Ar=null,_e=i,kt.H=s,kt.A=a,re===null&&(Ue=null,ue=0,Kh()),r}function tw(){for(;re!==null;)ES(re)}function ew(e,t){var n=_e;_e|=2;var i=MS(),s=bS();Ue!==e||ue!==t?(Fh=null,Bh=_i()+500,Lo(e,t)):Xo=Tc(e,t);t:do try{if(Me!==0&&re!==null){t=re;var a=di;e:switch(Me){case 1:Me=0,di=null,go(e,t,a,1);break;case 2:case 9:if(j_(a)){Me=0,di=null,wy(t);break}t=function(){Me!==2&&Me!==9||Ue!==e||(Me=7),bs(e)},a.then(t,t);break t;case 3:Me=7;break t;case 4:Me=5;break t;case 7:j_(a)?(Me=0,di=null,wy(t)):(Me=0,di=null,go(e,t,a,7));break;case 5:var r=null;switch(re.tag){case 26:r=re.memoizedState;case 5:case 27:var o=re;if(r?JS(r):o.stateNode.complete){Me=0,di=null;var l=o.sibling;if(l!==null)re=l;else{var c=o.return;c!==null?(re=c,lf(c)):re=null}break e}}Me=0,di=null,go(e,t,a,5);break;case 6:Me=0,di=null,go(e,t,a,6);break;case 8:t0(),Qe=6;break t;default:throw Error(j(462))}}nw();break}catch(u){xS(e,u)}while(!0);return Os=Ar=null,kt.H=i,kt.A=s,_e=n,re!==null?0:(Ue=null,ue=0,Kh(),Qe)}function nw(){for(;re!==null&&!yT();)ES(re)}function ES(e){var t=q1(e.alternate,e,ks);e.memoizedProps=e.pendingProps,t===null?lf(e):re=t}function wy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=my(n,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=my(n,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:zg(t);var i=t;i===mn&&(ie?(Eh(i),i.tag===5&&i.stateNode!=null&&(Be=i.stateNode)):(Eh(i),ie=!0));default:Y1(n,t),t=re=Zx(t,ks),t=q1(n,t,ks)}e.memoizedProps=e.pendingProps,t===null?lf(e):re=t}function go(e,t,n,i){Os=Ar=null,zg(t),So=null,dc=0;var s=t.return;try{if(kA(e,s,t,n,ue)){Qe=1,Uh(e,Bi(n,e.current)),re=null;return}}catch(a){if(s!==null)throw re=s,a;Qe=1,Uh(e,Bi(n,e.current)),re=null;return}t.flags&32768?(ie||i===1?e=!0:Xo||(ue&536870912)!==0?e=!1:(Sa=e=!0,(i===2||i===9||i===3||i===6)&&(i=An.current,i!==null&&i.tag===13&&(i.flags|=16384))),TS(t,e)):lf(t)}function lf(e){var t=e;do{if((t.flags&32768)!==0){TS(t,Sa);return}e=t.return;var n=YA(t.alternate,t,ks);if(n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Qe===0&&(Qe=5)}function TS(e,t){do{var n=ZA(e.alternate,e);if(n!==null){n.flags&=32767,re=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=n}while(e!==null);Qe=6,re=null}function Ry(e,t,n,i,s,a,r,o,l,c,u,d){e.cancelPendingCommit=null;do cf();while(Ze!==0);if((_e&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));e===Ue&&(re=Ue=null,ue=0),Sr=t,ji=e,xs=n,Jm=s,vS=i,iw(e,t,n,r,o,l,d)}}function iw(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Zm=o,o|=bg,CT(e,n,o,i,s,a),To=null,(n&335544064)===n?(Ao=NA(e),i=10262):(Ao=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,cw(yh,function(){return $m(),null})):(e.callbackNode=null,e.callbackPriority=0),Oh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=kt.T,kt.T=null,s=ye.p,ye.p=2,a=_e,_e|=4;try{JA(e,t,n)}finally{_e=a,ye.p=s,kt.T=i}}Ze=1,Oh?Eo=ww(r,e.containerInfo,Ao,Km,Qm,aw,jm,$m,sw,null,null):(Km(),Qm(),jm())}function sw(e){if(Ze!==0){var t=ji.onRecoverableError;t(e,{componentStack:null})}}function aw(){Ze===3&&(Ze=0,uS(Sr,ji),Ze=4)}function Km(){if(Ze===1){Ze=0;var e=ji,t=Sr,n=xs,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=kt.T,kt.T=null;var s=ye.p;ye.p=2;var a=_e;_e|=4;try{Yl=Ph=!1,lS(t,e,n),n=ig;var r=Hx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Fx(o.ownerDocument.documentElement,o)){if(l!==null&&Mg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),v=o.textContent.length,x=Math.min(l.start,v),m=l.end===void 0?x:Math.min(l.end,v);!p.extend&&x>m&&(r=m,m=x,x=r);var h=X_(o,x),g=X_(o,m);if(h&&g&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var y=d.createRange();y.setStart(h.node,h.offset),p.removeAllRanges(),x>m?(p.addRange(y),p.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var _=d[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Bo=!!ng,ig=ng=null}finally{_e=a,ye.p=s,kt.T=i}}e.current=t,Ze=2}}function Qm(){if(Ze===2){Ze=0;var e=ji,t=Sr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=kt.T,kt.T=null;var i=ye.p;ye.p=2;var s=_e;_e|=4;try{nS(e,t.alternate,t)}finally{_e=s,ye.p=i,kt.T=n}}Ze=3}}function jm(){if(Ze===4||Ze===3){Ze=0;var e=Eo;Eo=null,xT();var t=ji,n=Sr,i=xs,s=vS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ze=5:(Ze=0,Sr=ji=null,AS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Da=null),gg(i),n=n.stateNode,yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(Ec,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=kt.T,a=ye.p,ye.p=2,kt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{kt.T=n,ye.p=a}}if(s=To,r=Ao,Ao=null,s!==null&&(To=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(xs&3)!==0&&cf(),bs(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===uh?rc++:(rc=0,uh=t):(rc=0,uh=null),Uc(0,!1)}}function AS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cc(t)))}function cf(){return Eo!==null&&(Eo.skipTransition(),Eo=null),Km(),Qm(),jm(),$m()}function $m(){if(Ze!==5)return!1;var e=ji,t=Zm;Zm=0;var n=gg(xs),i=kt.T,s=ye.p;try{ye.p=32>n?32:n,kt.T=null,n=Jm,Jm=null;var a=ji,r=xs;if(Ze=0,Sr=ji=null,xs=0,(_e&6)!==0)throw Error(j(331));var o=_e;if(_e|=4,pS(a.current),hS(a,a.current,r,n),_e=o,Uc(0,!1),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(Ec,a)}catch{}return!0}finally{ye.p=s,kt.T=i,AS(e,t)}}function Cy(e,t,n){t=Bi(n,t),t=Um(e.stateNode,t,2),e=wa(e,t,2),e!==null&&(Ac(e,2),bs(e))}function Ee(e,t,n){if(e.tag===3)Cy(e,e,n);else for(;t!==null;){if(t.tag===3){Cy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Da===null||!Da.has(i))){e=Bi(n,e),n=V1(2),i=wa(t,n,2),i!==null&&(G1(n,i,t,e),Ac(i,2),bs(i));break}}t=t.return}}function Zp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new jA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||($g=!0,s.add(n),e=rw.bind(null,e,t,n),t.then(e,e))}function rw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ue===e&&(ue&n)===n&&((Qe===4||Qe===3&&(ue&62914560)===ue&&300>_i()-rf)&&(_e&2)===0?Lo(e,0):zh|=n,No===ue&&(No=0)),bs(e)}function wS(e,t){t===0&&(t=vx()),e=Tr(e,t),e!==null&&(Ac(e,t),bs(e))}function ow(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wS(e,n)}function lw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),wS(e,n)}function cw(e,t){return pg(e,t)}var Io=null,io=null,tg=!1,Vh=!1,Jp=!1,ba=0;function bs(e){e!==io&&e.next===null&&(io===null?Io=io=e:io=io.next=e),Vh=!0,tg||(tg=!0,hw())}function Uc(e,t){if(!Jp&&Vh){Jp=!0;do for(var n=!1,i=Io;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-xi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Dy(i,a))}else a=ue,a=Wh(i,i===Ue?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Tc(i,a)||(n=!0,Dy(i,a));i=i.next}while(n);Jp=!1}}function uw(){RS()}function RS(){Vh=tg=!1;var e=0;ba!==0&&xw()&&(e=ba);for(var t=_i(),n=null,i=Io;i!==null;){var s=i.next,a=CS(i,t);a===0?(i.next=null,n===null?Io=s:n.next=s,s===null&&(io=n)):(n=i,(e!==0||(a&3)!==0)&&(Vh=!0)),i=s}Ze!==0&&Ze!==5||Uc(e,!1),ba!==0&&(ba=0)}function CS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-xi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=RT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ue,n=ue,n=Wh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&wp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Tc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&wp(i),gg(n)){case 2:case 8:n=px;break;case 32:n=yh;break;case 268435456:n=mx;break;default:n=yh}return i=DS.bind(null,e),n=pg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&wp(i),e.callbackPriority=2,e.callbackNode=null,2}function DS(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(cf()&&e.callbackNode!==n)return null;var i=ue;return i=Wh(e,e===Ue?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(yS(e,i,t),CS(e,_i()),e.callbackNode!=null&&e.callbackNode===n?DS.bind(null,e):null)}function Dy(e,t){if(cf())return null;yS(e,t,!0)}function hw(){Mw(function(){(_e&6)!==0?pg(dx,uw):RS()})}function e0(){if(ba===0){var e=vr;e===0&&(e=Nu,Nu<<=1,(Nu&261888)===0&&(Nu=256)),ba=e}return ba}function Ny(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ju(e)}function fw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Ny((s[ri]||null).action),r=i.submitter;r&&(t=(t=r[ri]||null)?Ny(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Yh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ba!==0){var l=new FormData(s,r);Dm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Dm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(qu=0;qu<ym.length;qu++)Yu=ym[qu],Uy=Yu.toLowerCase(),Ly=Yu[0].toUpperCase()+Yu.slice(1),$i(Uy,"on"+Ly);var Yu,Uy,Ly,qu;$i(Gx,"onAnimationEnd");$i(kx,"onAnimationIteration");$i(Xx,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(bA,"onTransitionRun");$i(EA,"onTransitionStart");$i(TA,"onTransitionCancel");$i(Wx,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gc));function NS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Sh(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Sh(u)}s.currentTarget=null,a=l}}}}function ae(e,t){var n=t[w_];n===void 0&&(n=t[w_]=new Set);var i=e+"__bubble";n.has(i)||(US(t,e,2,!1),n.add(i))}function Kp(e,t,n){var i=0;t&&(i|=4),US(n,e,i,t)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function n0(e){if(!e[Zu]){e[Zu]=!0,bx.forEach(function(n){n!=="selectionchange"&&(dw.has(n)||Kp(n,!1,e),Kp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zu]||(t[Zu]=!0,Kp("selectionchange",!1,t))}}function US(e,t,n,i){switch(nM(t)){case 2:var s=a2;break;case 8:s=r2;break;default:s=c0}n=s.bind(null,t,n,e),s=void 0,!mm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Qp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=or(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Nx(function(){var c=a,u=_g(n),d=[];t:{var f=qx.get(e);if(f!==void 0){var p=Yh,v=e;switch(e){case"keypress":if(th(n)===0)break t;case"keydown":case"keyup":p=$T;break;case"focusin":v="focus",p=Lp;break;case"focusout":v="blur",p=Lp;break;case"beforeblur":case"afterblur":p=Lp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=O_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=VT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sA;break;case Gx:case kx:case Xx:p=XT;break;case Wx:p=rA;break;case"scroll":case"scrollend":p=FT;break;case"wheel":p=lA;break;case"copy":case"cut":case"paste":p=qT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=z_;break;case"submit":p=nA;break;case"toggle":case"beforetoggle":p=uA}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),h=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,y;g!==null;){var _=g;if(y=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||y===null||h===null||(_=lc(g,h),_!=null&&x.push(vc(g,_,y))),m)break;g=g.return}0<x.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==pm&&(v=n.relatedTarget||n.fromElement)&&(or(v)||v[Ho]))break t;(f||p)&&(v=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=c,p=p?or(p):null,p!==null&&(m=bc(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(f=null,p=c),f!==p&&(x=O_,_="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=z_,_="onPointerLeave",h="onPointerEnter",g="pointer"),m=f==null?v:Wl(f),y=p==null?v:Wl(p),v=new x(_,g+"leave",f,n,u),v.target=m,v.relatedTarget=y,_=null,or(u)===c&&(x=new x(h,g+"enter",p,n,u),x.target=y,x.relatedTarget=m,_=x),m=_,x=f&&p?nm(f,p,pw):null,f!==null&&Iy(d,v,f,x,!1),p!==null&&m!==null&&Iy(d,m,p,x,!0)))}t:{if(f=c?Wl(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=V_;else if(H_(f))if(zx)A=xA;else{A=_A;var w=vA}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&vg(c.elementType)&&(A=V_):A=yA;if(A&&(A=A(e,c))){Px(d,A,n,u);break t}w&&w(e,f,c)}switch(w=c?Wl(c):window,e){case"focusin":(H_(w)||w.contentEditable==="true")&&(co=w,vm=c,Kl=null);break;case"focusout":Kl=vm=co=null;break;case"mousedown":_m=!0;break;case"contextmenu":case"mouseup":case"dragend":_m=!1,W_(d,n,u);break;case"selectionchange":if(MA)break;case"keydown":case"keyup":W_(d,n,u)}var C;if(Sg)t:{switch(e){case"compositionstart":var N="onCompositionStart";break t;case"compositionend":N="onCompositionEnd";break t;case"compositionupdate":N="onCompositionUpdate";break t}N=void 0}else lo?Ix(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Lx&&n.locale!=="ko"&&(lo||N!=="onCompositionStart"?N==="onCompositionEnd"&&lo&&(C=Ux()):(ya=u,yg="value"in ya?ya.value:ya.textContent,lo=!0)),w=Gh(c,N),0<w.length&&(N=new P_(N,e,null,n,u),d.push({event:N,listeners:w}),C?N.data=C:(C=Ox(n),C!==null&&(N.data=C)))),(C=fA?dA(e,n):pA(e,n))&&(N=Gh(c,"onBeforeInput"),0<N.length&&(w=new P_("onBeforeInput","beforeinput",null,n,u),d.push({event:w,listeners:N}),w.data=C)),fw(d,e,c,n,u)}NS(d,t)})}function vc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=lc(e,n),s!=null&&i.unshift(vc(e,s,a)),s=lc(e,t),s!=null&&i.push(vc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function pw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Iy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=lc(n,a),c!=null&&r.unshift(vc(n,c,l))):s||(c=lc(n,a),c!=null&&r.push(vc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var mw=/\r\n?/g,gw=/\u0000|\uFFFD/g;function Oy(e){return(typeof e=="string"?e:""+e).replace(mw,`
`).replace(gw,"")}function LS(e,t){return t=Oy(t),Oy(e)===t}function be(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Co(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Co(e,""+i);else return;break;case"className":Iu(e,"class",i);break;case"tabIndex":Iu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Iu(e,n,i);break;case"style":Dx(e,i,a);return;case"data":if(t!=="object"){Iu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ju(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",s.name,s,null),be(e,t,"formEncType",s.formEncType,s,null),be(e,t,"formMethod",s.formMethod,s,null),be(e,t,"formTarget",s.formTarget,s,null)):(be(e,t,"encType",s.encType,s,null),be(e,t,"method",s.method,s,null),be(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ju(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=gs);return;case"onScroll":i!=null&&ae("scroll",e);return;case"onScrollEnd":i!=null&&ae("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ju(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Qu(e,"popover",i);break;case"xlinkActuate":Us(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Us(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Us(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Us(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Us(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Us(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Us(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Us(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Us(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Qu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=zT.get(n)||n,Qu(e,n,i);else return}ve=!0}function eg(e,t,n,i,s,a){switch(n){case"style":Dx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Co(e,i);else if(typeof i=="number"||typeof i=="bigint")Co(e,""+i);else return;break;case"onScroll":i!=null&&ae("scroll",e);return;case"onScrollEnd":i!=null&&ae("scrollend",e);return;case"onClick":i!=null&&(e.onclick=gs);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ex.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[ri]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ve=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Qu(e,n,i)}return}ve=!0}function Tn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:be(e,t,a,r,n,null)}}s&&be(e,t,"srcSet",n.srcSet,n,null),i&&be(e,t,"src",n.src,n,null);return;case"input":ae("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,t));break;default:be(e,t,i,u,n,null)}}wx(e,a,o,l,c,r,s,!1);return;case"select":ae("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:be(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?_o(e,!!i,t,!1):n!=null&&_o(e,!!i,n,!0);return;case"textarea":ae("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:be(e,t,r,o,n,null)}Cx(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:be(e,t,l,i,n,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(i=0;i<gc.length;i++)ae(gc[i],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:be(e,t,c,i,n,null)}return;default:if(vg(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&eg(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&be(e,t,o,i,n,null))}var vw={};function _w(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||be(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":p!==d&&(ve=!0),a=p;break;case"name":p!==d&&(ve=!0),s=p;break;case"checked":p!==d&&(ve=!0),c=p;break;case"defaultChecked":p!==d&&(ve=!0),u=p;break;case"value":p!==d&&(ve=!0),r=p;break;case"defaultValue":p!==d&&(ve=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:p!==d&&be(e,t,f,p,i,d)}}dm(e,r,o,l,c,u,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||be(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ve=!0),f=a;break;case"defaultValue":a!==l&&(ve=!0),o=a;break;case"multiple":a!==l&&(ve=!0),r=a;default:a!==l&&be(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?_o(e,!!n,f,!1):!!i!=!!n&&(t!=null?_o(e,!!n,t,!0):_o(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:be(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ve=!0),f=s;break;case"defaultValue":s!==a&&(ve=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:s!==a&&be(e,t,r,s,i,a)}Rx(e,f,p);return;case"option":for(var v in n)if(f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:be(e,t,v,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":f!==p&&(ve=!0),e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:be(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&be(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:be(e,t,c,f,i,p)}return;default:if(vg(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&eg(e,t,m,void 0,i,f);for(u in i)f=i[u],p=n[u],!i.hasOwnProperty(u)||f===p||f===void 0&&p===void 0||eg(e,t,u,f,i,p);return}}for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!i.hasOwnProperty(h)&&be(e,t,h,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||be(e,t,d,f,i,p)}function Py(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Py(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&Py(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ng=null,ig=null;function _c(e){return e.nodeType===9?e:e.ownerDocument}function zy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function IS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function OS(e,t,n,i){return n=_c(n).createElement(e),n[Sn]=i,n[ri]=t,Tn(n,e,t),pn(n),n}function sg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jp=null;function xw(){var e=window.event;return e&&e.type==="popstate"?e===jp?!1:(jp=e,!0):(jp=null,!1)}var i0=typeof setTimeout=="function"?setTimeout:void 0,Sw=typeof clearTimeout=="function"?clearTimeout:void 0,By=typeof Promise=="function"?Promise:void 0,Fy=typeof requestAnimationFrame=="function"?requestAnimationFrame:i0,Mw=typeof queueMicrotask=="function"?queueMicrotask:typeof By<"u"?function(e){return By.resolve(null).then(e).catch(bw)}:i0;function bw(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function Hy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Fo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")tm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,tm(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[wc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&tm(e.ownerDocument.body);n=s}while(n);Fo(t)}function Vy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function PS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function zS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function BS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function ag(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return BS(t,n,e)}function Ew(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return BS(t,n,e)}function Tw(e){return e.documentElement.clientHeight}function Aw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function ww(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var u=c.startViewTransition({update:function(){var f=c.defaultView,p=f.navigation&&f.navigation.transition,v=c.fonts.status;i();var x=[];if(v==="loaded"&&(Tw(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),v=x.length,e!==null)for(var m=e.suspenseyImages,h=0,g=0;g<m.length;g++){var y=m[g];if(!y.complete){var _=y.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<f.innerHeight&&_.left<f.innerWidth){if(h+=KS(y),h>dh){x.length=v;break}y=new Promise(Aw.bind(y)),x.push(y)}}}if(0<x.length)return f=Promise.race([Promise.all(x),new Promise(function(A){return setTimeout(A,500)})]).then(s,s),(p?Promise.allSettled([p.finished,f]):f).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),p=0;p<f.length;p++){var v=f[p],x=v.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(v),v=x.getKeyframes();for(var h=m=void 0,g=!0,y=0;y<v.length;y++){var _=v[y],A=_.width;if(m===void 0)m=A;else if(m!==A){g=!1;break}if(A=_.height,h===void 0)h=A;else if(h!==A){g=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}g&&m!==void 0&&h!==void 0&&(x.setKeyframes(v),g=getComputedStyle(x.target,x.pseudoElement),g.width!==m||g.height!==h)&&(g=v[0],g.width=m,g.height=h,g=v[v.length-1],g.width=m,g.height=h,x.setKeyframes(v))}}r()},function(f){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{i(),s(),r()}}),u.finished.finally(function(){for(var f=0;f<d.length;f++)d[f].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),o()}),u}catch{return i(),s(),r(),null}}function lr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}lr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Le({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};lr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function FS(e){return{name:e,group:new lr("group",e),imagePair:new lr("image-pair",e),old:new lr("old",e),new:new lr("new",e)}}function bi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}bi.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(HS(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Oo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),ai(this._fragmentFiber.child,!1,Rw,e,o,i)}this._eventListeners=a}};function Rw(e,t,n,i){return on(e).addEventListener(t,n,i),!1}bi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=HS(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Oo(s.optionsOrUseCapture),ai(this._fragmentFiber.child,!1,Cw,e,n,s),i.splice(t,1),a!==null&&a()}};function Cw(e,t,n,i){return on(e).removeEventListener(t,n,i),!1}function Oo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Gy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function HS(e,t,n,i){if(e.length===0)return-1;i=Gy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Gy(a.optionsOrUseCapture)===i)return s}return-1}bi.prototype.dispatchEvent=function(e){var t=Mr(this._fragmentFiber);if(t===null)return!0;t=on(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Oo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Oo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};bi.prototype.focus=function(e){ai(this._fragmentFiber.child,!0,VS,e,void 0,void 0)};function VS(e,t){return e.tag===6?!1:(e=on(e),Vw(e,t))}bi.prototype.focusLast=function(e){var t=[];ai(this._fragmentFiber.child,!0,s0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!VS(t[n],e);n--);};function s0(e,t){return t.push(e),!1}bi.prototype.blur=function(){var e=Mr(this._fragmentFiber);e!==null&&(e=on(e),e=_c(e).activeElement,e!==null&&ai(this._fragmentFiber.child,!1,Dw,e,void 0,void 0))};function Dw(e,t){return e.tag===6?!1:(e=on(e),e===t||e.contains(t)?(t.blur(),!0):!1)}bi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),ai(this._fragmentFiber.child,!1,Nw,e,void 0,void 0)};function Nw(e,t){return e.tag===6||(e=on(e),t.observe(e)),!1}bi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ai(this._fragmentFiber.child,!1,Uw,e,void 0,void 0);for(var n=t=0;n<Qi.length;n++){var i=Qi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Qi[t++]=i}Qi.length=t}};function Uw(e,t){return e.tag===6||(e=on(e),t.unobserve(e)),!1}var Qi=[],$p=!1;function Lw(e,t,n){Qi.push({fragmentInstance:e,observer:t,instance:n}),$p||($p=!0,Gw(function(){$p=!1;var i=Qi;Qi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}bi.prototype.getClientRects=function(){var e=[];return ai(this._fragmentFiber.child,!1,Iw,e,void 0,void 0),e};function Iw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=on(e),t.push.apply(t,e.getClientRects());return!1}bi.prototype.getRootNode=function(e){var t=Mr(this._fragmentFiber);return t===null?this:on(t).getRootNode(e)};bi.prototype.compareDocumentPosition=function(e){var t=Mr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ai(this._fragmentFiber.child,!1,s0,n,void 0,void 0);var i=on(t);if(n.length===0){if(n=i,S_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=cx(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=on(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=on(n[0]),s=on(n[n.length-1]);var a=S_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ow(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ow(e,t,n,i,s){var a=or(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Mr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=nm(n,a,M_),t===null?t=!1:(ai(t,!0,hT,a,n),a=so,so=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=nm(i,a,M_),t===null?t=!1:(ai(t,!0,fT,a,i),a=so,em=so=null,t=a!==null)),t):!1}function ky(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}bi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(j(566));var t=[];ai(this._fragmentFiber.child,!1,s0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=cx(this._fragmentFiber);if(i=n?i[1]||i[0]||Mr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=on(i),ky(e,n);return}if(i=on(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=on(s),ky(s,n)):on(s).scrollIntoView(e),i+=n?-1:1}};function Pw(e,t){return e=on(e),GS(e,t),!1}function GS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function kS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Oo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Qi.length;o++){var l=Qi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Qi[r++]=l)}Qi.length=r,a.observe(e)}),GS(e,t))}function zw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Oo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?Lw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function rg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":rg(n),qh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Bw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[wc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Hi(e.nextSibling),e===null)break}return null}function Fw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Hi(e.nextSibling),e===null))return null;return e}function XS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Hi(e.nextSibling),e===null))return null;return e}function og(e){return e.data==="$?"||e.data==="$~"}function a0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Hi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var lg=null;function Xy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Hi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Wy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Vw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Gw(e){Fy(function(){Fy(function(t){return e(t)})})}function WS(e,t,n){switch(t=_c(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function qS(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&be(e,t,i,null,vw,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===gs&&(e.onclick=null),qh(e)}function tm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qh(e)}var Vi=new Map,qy=new Set;function yc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var qs=ye.d;ye.d={f:kw,r:Xw,D:Ww,C:qw,L:Yw,m:Zw,X:Kw,S:Jw,M:Qw};function kw(){var e=qs.f(),t=of();return e||t}function Xw(e){var t=Vo(e);t!==null&&t.tag===5&&t.type==="form"?D1(t):qs.r(e)}var Wo=typeof document>"u"?null:document;function YS(e,t,n){var i=Wo;if(i&&typeof t=="string"&&t){var s=zi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),qy.has(s)||(qy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Tn(t,"link",e),pn(t),i.head.appendChild(t)))}}function Ww(e){qs.D(e),YS("dns-prefetch",e,null)}function qw(e,t){qs.C(e,t),YS("preconnect",e,t)}function Yw(e,t,n){qs.L(e,t,n);var i=Wo;if(i&&e&&t){var s='link[rel="preload"][as="'+zi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+zi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+zi(n.imageSizes)+'"]')):s+='[href="'+zi(e)+'"]';var a=s;switch(t){case"style":a=Po(e);break;case"script":a=qo(e)}if(!(Vi.has(a)||(e=Le({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Vi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Lc(a))||t==="script"&&i.querySelector(Ic(a))))){var r=i.createElement("link");Tn(r,"link",e),t==="style"&&(r[xh]=!0,r.onload=r.onerror=function(){Mx(r)}),pn(r),i.head.appendChild(r)}}}function Zw(e,t){qs.m(e,t);var n=Wo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+zi(i)+'"][href="'+zi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=qo(e)}if(!Vi.has(a)&&(e=Le({rel:"modulepreload",href:e},t),Vi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ic(a)))return}i=n.createElement("link"),Tn(i,"link",e),pn(i),n.head.appendChild(i)}}}function Jw(e,t,n){qs.S(e,t,n);var i=Wo;if(i&&e){var s=vo(i).hoistableStyles,a=Po(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Lc(a)))o.loading=5;else{e=Le({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Vi.get(a))&&r0(e,n);var l=r=i.createElement("link");pn(l),Tn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,hh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function Kw(e,t){qs.X(e,t);var n=Wo;if(n&&e){var i=vo(n).hoistableScripts,s=qo(e),a=i.get(s);a||(a=n.querySelector(Ic(s)),a||(e=Le({src:e,async:!0},t),(t=Vi.get(s))&&o0(e,t),a=n.createElement("script"),pn(a),Tn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Qw(e,t){qs.M(e,t);var n=Wo;if(n&&e){var i=vo(n).hoistableScripts,s=qo(e),a=i.get(s);a||(a=n.querySelector(Ic(s)),a||(e=Le({src:e,async:!0,type:"module"},t),(t=Vi.get(s))&&o0(e,t),a=n.createElement("script"),pn(a),Tn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Yy(e,t,n,i){var s=(s=Ea.current)?yc(s):null;if(!s)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Po(n.href),t=vo(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Po(n.href);var a=vo(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Lc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Vi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Vi.set(e,a)),jw(s,e,a,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=qo(n),t=vo(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function Po(e){return'href="'+zi(e)+'"'}function Lc(e){return'link[rel="stylesheet"]['+e+"]"}function ZS(e){return Le({},e,{"data-precedence":e.precedence,precedence:null})}function jw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[xh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[xh]=!0,t.onload=t.onerror=Mx.bind(null,t),Tn(t,"link",n),pn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function qo(e){return'[src="'+zi(e)+'"]'}function Ic(e){return"script[async]"+e}function Zy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+zi(n.href)+'"]');if(i)return t.instance=i,pn(i),i;var s=Le({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),pn(i),Tn(i,"style",s),hh(i,n.precedence,e),t.instance=i;case"stylesheet":s=Po(n.href);var a=e.querySelector(Lc(s));if(a)return t.state.loading|=4,t.instance=a,pn(a),a;i=ZS(n),(s=Vi.get(s))&&r0(i,s),a=(e.ownerDocument||e).createElement("link"),pn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Tn(a,"link",i),t.state.loading|=4,hh(a,n.precedence,e),t.instance=a;case"script":return a=qo(n.src),(s=e.querySelector(Ic(a)))?(t.instance=s,pn(s),s):(i=n,(s=Vi.get(a))&&(i=Le({},n),o0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),pn(s),Tn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,hh(i,n.precedence,e));return t.instance}function hh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function r0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function o0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fh=null;function Jy(e,t,n){if(fh===null){var i=new Map,s=fh=new Map;s.set(n,i)}else s=fh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[wc]||a[Sn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function cg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function $w(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ky(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function JS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function KS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Qy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=KS(t),e.suspenseyImages.push(t)),e=n2.bind(e),t.decode().then(e,e))}function t2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Po(i.href),a=t.querySelector(Lc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,pn(a);return}a=t.ownerDocument||t,i=ZS(i),(s=Vi.get(s))&&r0(i,s),a=a.createElement("link"),pn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Tn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=xc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var dh=0;function e2(e,t){return e.stylesheets&&e.count===0&&ph(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&ph(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&dh===0&&(dh=62500*yw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ph(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>dh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function QS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ph(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function xc(){this.count--,QS(this)}function n2(){this.imgCount--,QS(this)}var kh=null;function ph(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kh=new Map,t.forEach(i2,e),kh=null,xc.call(e))}function i2(e,t){if(!(t.state.loading&4)){var n=kh.get(e);if(n)var i=n.get(null);else{n=new Map,kh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=xc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var zo={$$typeof:ms,Provider:null,Consumer:null,_currentValue:cr,_currentValue2:cr,_threadCount:0};function s2(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rp(0),this.hiddenUpdates=Rp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function jS(e,t,n,i,s,a,r,o,l,c,u,d){return e=new s2(e,t,n,r,l,c,u,d,o),t=1,a===!0&&(t|=24),a=ii(3,null,null,t),e.current=a,a.stateNode=e,t=wg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Dg(a),e}function $S(e){return e?(e=fo,e):fo}function tM(e,t,n,i,s,a){s=$S(s),i.context===null?i.context=s:i.pendingContext=s,i=Aa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=wa(e,i,t),n!==null&&(si(n,e,t),jl(n,e,t))}function jy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function l0(e,t){jy(e,t),(e=e.alternate)&&jy(e,t)}function eM(e){if(e.tag===13||e.tag===31){var t=Tr(e,67108864);t!==null&&si(t,e,67108864),l0(e,67108864)}}function $y(e){if(e.tag===13||e.tag===31){var t=Si();t=mg(t);var n=Tr(e,t);n!==null&&si(n,e,t),l0(e,t)}}var Bo=!0;function a2(e,t,n,i){var s=kt.T;kt.T=null;var a=ye.p;try{ye.p=2,c0(e,t,n,i)}finally{ye.p=a,kt.T=s}}function r2(e,t,n,i){var s=kt.T;kt.T=null;var a=ye.p;try{ye.p=8,c0(e,t,n,i)}finally{ye.p=a,kt.T=s}}function c0(e,t,n,i){if(Bo){var s=ug(i);if(s===null)Qp(e,t,i,Xh,n),tx(e,i);else if(l2(s,e,t,n,i))i.stopPropagation();else if(tx(e,i),t&4&&-1<o2.indexOf(e)){for(;s!==null;){var a=Vo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=sr(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-xi(r);o.entanglements[1]|=l,r&=~l}bs(a),(_e&6)===0&&(Bh=_i()+500,Uc(0,!1))}}break;case 31:case 13:o=Tr(a,2),o!==null&&si(o,a,2),of(),l0(a,2)}if(a=ug(i),a===null&&Qp(e,t,i,Xh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Qp(e,t,i,null,n)}}function ug(e){return e=_g(e),u0(e)}var Xh=null;function u0(e){if(Xh=null,e=or(e),e!==null){var t=bc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=rx(t),e!==null)return e;e=null}else if(n===31){if(e=ox(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xh=e,null}function nM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ST()){case dx:return 2;case px:return 8;case yh:case MT:return 32;case mx:return 268435456;default:return 32}default:return 32}}var hg=!1,Na=null,Ua=null,La=null,Sc=new Map,Mc=new Map,va=[],o2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tx(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Sc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mc.delete(t.pointerId)}}function Vl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Vo(t),t!==null&&eM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function l2(e,t,n,i,s){switch(t){case"focusin":return Na=Vl(Na,e,t,n,i,s),!0;case"dragenter":return Ua=Vl(Ua,e,t,n,i,s),!0;case"mouseover":return La=Vl(La,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Sc.set(a,Vl(Sc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Mc.set(a,Vl(Mc.get(a)||null,e,t,n,i,s)),!0}return!1}function iM(e){var t=or(e.target);if(t!==null){var n=bc(t);if(n!==null){if(t=n.tag,t===13){if(t=rx(n),t!==null){e.blockedOn=t,A_(e.priority,function(){$y(n)});return}}else if(t===31){if(t=ox(n),t!==null){e.blockedOn=t,A_(e.priority,function(){$y(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ug(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);pm=i,n.target.dispatchEvent(i),pm=null}else return t=Vo(n),t!==null&&eM(t),e.blockedOn=n,!1;t.shift()}return!0}function ex(e,t,n){mh(e)&&n.delete(t)}function c2(){hg=!1,Na!==null&&mh(Na)&&(Na=null),Ua!==null&&mh(Ua)&&(Ua=null),La!==null&&mh(La)&&(La=null),Sc.forEach(ex),Mc.forEach(ex)}function Ju(e,t){e.blockedOn===t&&(e.blockedOn=null,hg||(hg=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,c2)))}var Ku=null;function nx(e){Ku!==e&&(Ku=e,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,function(){Ku===e&&(Ku=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(u0(i||n)===null)continue;break}var a=Vo(n);a!==null&&(e.splice(t,3),t-=3,Dm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Fo(e){function t(l){return Ju(l,e)}Na!==null&&Ju(Na,e),Ua!==null&&Ju(Ua,e),La!==null&&Ju(La,e),Sc.forEach(t),Mc.forEach(t);for(var n=0;n<va.length;n++){var i=va[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<va.length&&(n=va[0],n.blockedOn===null);)iM(n),n.blockedOn===null&&va.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[ri]||null;if(typeof a=="function")r||nx(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[ri]||null)o=r.formAction;else if(u0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),nx(n)}}}function sM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function h0(e){this._internalRoot=e}uf.prototype.render=h0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=Si();tM(n,i,e,t,null,null)};uf.prototype.unmount=h0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tM(e.current,2,null,e,null,null),of(),t[Ho]=null}};function uf(e){this._internalRoot=e}uf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<va.length&&t!==0&&t<va[n].priority;n++);va.splice(n,0,e),n===0&&iM(e)}};var ix=sx.version;if(ix!=="19.3.0")throw Error(j(527,ix,"19.3.0"));ye.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=uT(t),e=e!==null?lx(e):null,e=e===null?null:e.stateNode,e};var u2={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:kt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Gl.isDisabled&&Gl.supportsFiber))try{Ec=Gl.inject(u2),yi=Gl}catch{}var Gl;hf.createRoot=function(e,t){if(!ax(e))throw Error(j(299));var n=!1,i="",s=B1,a=F1,r=H1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=jS(e,1,!1,null,null,n,i,null,s,a,r,sM),e[Ho]=t.current,n0(e),new h0(t)};hf.hydrateRoot=function(e,t,n){if(!ax(e))throw Error(j(299));var i=!1,s="",a=B1,r=F1,o=H1,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=jS(e,1,!0,t,n??null,i,s,l,a,r,o,sM),t.context=$S(null),n=t.current,i=Si(),i=mg(i),s=Aa(i),s.callback=null,wa(n,s,i),n=i,t.current.lanes=n,Ac(t,n),bs(t),e[Ho]=t.current,n0(e),new uf(t)};hf.version="19.3.0"});var lM=ls((dU,oM)=>{"use strict";function rM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rM)}catch(e){console.error(e)}}rM(),oM.exports=aM()});var NE=ls(op=>{"use strict";var KN=Symbol.for("react.transitional.element"),QN=Symbol.for("react.fragment");function DE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:KN,type:e,key:i,ref:t!==void 0?t:null,props:n}}op.Fragment=QN;op.jsx=DE;op.jsxs=DE});var Hv=ls((XO,UE)=>{"use strict";UE.exports=NE()});var Ie=bu(Tu(),1),LE=bu(lM(),1);var f0={x:3,z:-1.8},Oc=[{x:-1.55,z:4.3},{x:-.52,z:4.3},{x:.52,z:4.3},{x:1.55,z:4.3}],Es=[{x:-1,z:.15},{x:.85,z:.15},{x:-2.35,z:1.75},{x:2.25,z:1.75}],h2=["Why does the moon glow?","Tell me a little story","What makes rain fall?","Explain how bees dance","How do seeds grow?","Describe a perfect afternoon"],f2=["Compare these two ideas","Remember the earlier details","Summarize a long conversation","Connect the clues together"],cM=28,uM=64,d0=4,d2=3,p2=3,m2=3;var hM=e=>46*(e+1),fM=e=>42+e*36,dM=(e,t)=>(e==="speed"?34:42)+t*(e==="speed"?26:32),pM=e=>16/(1+e*.35),g2=e=>.82+e*.055;var v2=()=>Array.from({length:d0},()=>({speed:0,accuracy:0}));function p0(e=Date.now()){return{version:1,tokens:0,capacity:1,context:!1,workflow:0,stationLevels:Array(d0).fill(0),agentLevels:v2(),completed:0,errors:0,earned:0,seed:41729,nextId:1,savedAt:e}}var ff=class{constructor(t=p0()){this.agents=[];this.requests=[];this.time=0;this.paused=!1;this.speed=1;this.nextArrival=Oc.map((t,n)=>1.8+n*3.7);this.lastResult=null;this.progress={...t,stationLevels:[...t.stationLevels],agentLevels:t.agentLevels.map(n=>({...n}))};for(let n=0;n<this.progress.capacity;n++)this.addAgent()}addAgent(){let t=this.agents.length,{x:n,z:i}=Oc[t];this.agents.push({id:t,state:"idle",x:n,z:i,target:{x:n,z:i},route:[],workLeft:0,workTotal:0,visitedContext:!1})}random(){return this.progress.seed=Math.imul(1664525,this.progress.seed)+1013904223>>>0,this.progress.seed/4294967296}spawnRequest(t){let n=this.progress.context&&this.random()<.38?"context":"chat",i=n==="context"?f2:h2,s=i[Math.floor(this.random()*i.length)],a=(n==="context"?14:9)+Math.floor(this.random()*4)+this.progress.workflow;this.requests.unshift({id:this.progress.nextId++,stationId:t,title:s,kind:n,status:"queued",reward:a,progress:0});let r=this.requests.filter(o=>o.status==="complete"||o.status==="failed").slice(0,12);this.requests=[...this.requests.filter(o=>o.status!=="complete"&&o.status!=="failed"),...r]}assign(){for(let t of this.agents){if(t.taskId!==void 0||t.state==="working")continue;let n=this.requests.find(i=>i.status==="queued"&&i.stationId===t.id);n&&(n.status="assigned",n.agentId=t.id,t.taskId=n.id,t.state="walking",t.visitedContext=!1,t.route=[...n.kind==="context"?[{...f0}]:[],{...Es[t.id]}],t.target=t.route.shift(),t.workTotal=(n.kind==="context"?7.2:5.4+this.random()*1.4)*(1-this.progress.workflow*.1)*(1-this.progress.agentLevels[t.id].speed*.12),t.workLeft=t.workTotal)}}resolve(t){let n=this.requests.find(s=>s.id===t.taskId);if(!n)throw new Error(`Missing request for agent ${t.id}`);let i=this.random()<g2(this.progress.agentLevels[t.id].accuracy);n.progress=1,n.resolvedAt=this.time,this.progress.completed++,i?(n.status="complete",this.progress.tokens+=n.reward,this.progress.earned+=n.reward,this.lastResult={success:i,amount:n.reward,agentId:t.id}):(n.status="failed",n.loss=Math.min(this.progress.tokens,n.kind==="context"?5:3),this.progress.tokens-=n.loss,this.progress.errors++,this.lastResult={success:i,amount:n.loss,agentId:t.id}),this.nextArrival[n.stationId]=Math.max(this.nextArrival[n.stationId],3.5),t.taskId=void 0,t.state="returning",t.target={...Oc[t.id]}}move(t,n){let i=t.target.x-t.x,s=t.target.z-t.z,a=Math.hypot(i,s),r=2.05*n;if(a>r){t.x+=i/a*r,t.z+=s/a*r;return}if(t.x=t.target.x,t.z=t.target.z,t.state==="returning"){t.state="idle";return}t.target.x===f0.x&&t.target.z===f0.z&&(t.visitedContext=!0);let o=t.route.shift();if(o)t.target=o;else{t.state="working";let l=this.requests.find(c=>c.id===t.taskId);l&&(l.status="working")}}update(t){if(this.paused||t<=0)return;let n=Math.min(t*this.speed,5);for(;n>0;){let i=Math.min(n,.03333333333333333);n-=i,this.time+=i;for(let s=0;s<this.progress.capacity;s++){this.nextArrival[s]-=i;let a=this.requests.some(r=>r.stationId===s&&(r.status==="queued"||r.status==="assigned"||r.status==="working"));this.nextArrival[s]<=0&&!a&&(this.spawnRequest(s),this.nextArrival[s]=pM(this.progress.stationLevels[s]))}this.assign();for(let s of this.agents)if(s.state==="walking"||s.state==="returning")this.move(s,i);else if(s.state==="working"){s.workLeft=Math.max(0,s.workLeft-i);let a=this.requests.find(r=>r.id===s.taskId);if(!a)throw new Error(`Missing request for agent ${s.id}`);a.progress=1-s.workLeft/s.workTotal,s.workLeft===0&&this.resolve(s)}}}buyCapacity(){return this.progress.tokens<cM||this.progress.capacity>=d0?!1:(this.progress.tokens-=cM,this.progress.capacity++,this.addAgent(),this.nextArrival[this.progress.capacity-1]=1.8,!0)}buyWorkflow(){return this.progress.capacity<2||this.progress.workflow>=d2||this.progress.tokens<hM(this.progress.workflow)?!1:(this.progress.tokens-=hM(this.progress.workflow),this.progress.workflow++,!0)}buyStation(t){if(!Number.isInteger(t)||t<0||t>=this.progress.capacity)return!1;let n=this.progress.stationLevels[t];return n>=p2||this.progress.tokens<fM(n)?!1:(this.progress.tokens-=fM(n),this.progress.stationLevels[t]++,this.nextArrival[t]=Math.min(this.nextArrival[t],pM(this.progress.stationLevels[t])),!0)}trainAgent(t,n){if(!Number.isInteger(t)||t<0||t>=this.progress.capacity||n!=="speed"&&n!=="accuracy")return!1;let i=this.progress.agentLevels[t][n];return i>=m2||this.progress.tokens<dM(n,i)?!1:(this.progress.tokens-=dM(n,i),this.progress.agentLevels[t][n]++,!0)}unlockContext(){return this.progress.tokens<uM||this.progress.context||this.progress.capacity<2?!1:(this.progress.tokens-=uM,this.progress.context=!0,!0)}save(t=Date.now()){return{...this.progress,savedAt:t,stationLevels:[...this.progress.stationLevels],agentLevels:this.progress.agentLevels.map(n=>({...n}))}}};var m0=[{time:0,sun:0,ambient:.54,lamp:1.5,warmth:.35,sunColor:10200532,skyColor:4337747,bounceColor:10516621},{time:.19,sun:.08,ambient:.82,lamp:1.2,warmth:.7,sunColor:16746085,skyColor:14448789,bounceColor:15049099},{time:.32,sun:2.75,ambient:1.08,lamp:.55,warmth:.95,sunColor:16756328,skyColor:8639179,bounceColor:15120529},{time:.5,sun:3.25,ambient:1.18,lamp:.32,warmth:.76,sunColor:16765066,skyColor:9034192,bounceColor:15451552},{time:.67,sun:2.65,ambient:1.02,lamp:.72,warmth:1,sunColor:16749414,skyColor:14785442,bounceColor:15575694},{time:.79,sun:.09,ambient:.8,lamp:1.4,warmth:.8,sunColor:16022403,skyColor:6701415,bounceColor:10778760},{time:1,sun:0,ambient:.54,lamp:1.5,warmth:.35,sunColor:10200532,skyColor:4337747,bounceColor:10516621}];function g0(e,t,n){let i=s=>Math.round((e>>s&255)*(1-n)+(t>>s&255)*n);return i(16)<<16|i(8)<<8|i(0)}function df(e,t=0){let n=((e/240+.35+t)%1+1)%1,i=Math.max(0,m0.findIndex(p=>p.time>=n)),s=m0[Math.max(i,1)],a=m0[Math.max(i-1,0)],r=(n-a.time)/(s.time-a.time||1),o=r*r*(3-2*r),l=p=>a[p]+(s[p]-a[p])*o,c=Math.floor(n*1440+1e-7),u=Math.floor(c/60),d=c%60,f=Math.max(Math.min(1,Math.max(0,(.19-n)/.12)),Math.min(1,Math.max(0,(n-.79)/.12)));return{time:n,hour:u,label:`${u.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`,sun:l("sun"),moon:f*.45,ambient:l("ambient"),lamp:l("lamp"),warmth:l("warmth"),sunColor:g0(a.sunColor,s.sunColor,o),skyColor:g0(a.skyColor,s.skyColor,o),bounceColor:g0(a.bounceColor,s.bounceColor,o),sunX:Math.cos((n-.47)*Math.PI*2)*6,sunY:4.2+Math.max(0,Math.sin((n-.19)/.6*Math.PI))*5.2}}var GM=0,K0=1,kM=2;var Q0=1,XM=2,Wi=3,ea=0,Cn=1,Dn=2,aa=0,Ur=1,Fr=2,j0=3,$0=4,WM=5,Za=100,qM=101,YM=102,ZM=103,JM=104,KM=200,QM=201,jM=202,$M=203,Bf=204,Ff=205,tb=206,eb=207,nb=208,ib=209,sb=210,ab=211,rb=212,ob=213,lb=214,cd=0,ud=1,hd=2,Lr=3,fd=4,dd=5,pd=6,md=7,tv=0,cb=1,ub=2,ra=0,hb=1,fb=2,db=3,gd=4,pb=5,mb=6,gb=7;var ev=300,Hr=301,Vr=302,vd=303,_d=304,fu=306,Hf=1e3,Ya=1001,Vf=1002,_n=1003,vb=1004;var du=1005;var Rn=1006,yd=1007;var rs=1008;var os=1009,nv=1010,iv=1011,bl=1012,xd=1013,$a=1014,Rs=1015,El=1016,Sd=1017,Md=1018,Tl=1020,sv=35902,av=35899,rv=1021,ov=1022,qi=1023,ul=1026,Al=1027,lv=1028,bd=1029,cv=1030,Ed=1031;var Td=1033,pu=33776,mu=33777,gu=33778,vu=33779,Ad=35840,wd=35841,Rd=35842,Cd=35843,Dd=36196,Nd=37492,Ud=37496,Ld=37808,Id=37809,Od=37810,Pd=37811,zd=37812,Bd=37813,Fd=37814,Hd=37815,Vd=37816,Gd=37817,kd=37818,Xd=37819,Wd=37820,qd=37821,Yd=36492,Zd=36494,Jd=36495,Kd=36283,Qd=36284,jd=36285,$d=36286;var qc=2300,Gf=2301,zf=2302,V0=2400,G0=2401,k0=2402;var _b=3200,yb=3201;var uv=0,xb=1,oa="",cn="srgb",Ir="srgb-linear",Yc="linear",we="srgb";var Nr=7680;var X0=519,Sb=512,Mb=513,bb=514,hv=515,Eb=516,Tb=517,Ab=518,wb=519,kf=35044;var fv="300 es",ss=2e3,Zc=2001;var na=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mM=1234567,Xc=Math.PI/180,hl=180/Math.PI;function $s(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[e&255]+Pn[e>>8&255]+Pn[e>>16&255]+Pn[e>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function he(e,t,n){return Math.max(t,Math.min(n,e))}function dv(e,t){return(e%t+t)%t}function _2(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function y2(e,t,n){return e!==t?(n-e)/(t-e):0}function Wc(e,t,n){return(1-n)*e+n*t}function x2(e,t,n,i){return Wc(e,t,1-Math.exp(-n*i))}function S2(e,t=1){return t-Math.abs(dv(e,t*2)-t)}function M2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function b2(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function E2(e,t){return e+Math.floor(Math.random()*(t-e+1))}function T2(e,t){return e+Math.random()*(t-e)}function A2(e){return e*(.5-Math.random())}function w2(e){e!==void 0&&(mM=e);let t=mM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function R2(e){return e*Xc}function C2(e){return e*hl}function D2(e){return(e&e-1)===0&&e!==0}function N2(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function U2(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function L2(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),u=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),v=r((i-t)/2);switch(s){case"XYX":e.set(o*u,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*u,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*u,o*c);break;case"XZX":e.set(o*u,l*v,l*p,o*c);break;case"YXY":e.set(l*p,o*u,l*v,o*c);break;case"ZYZ":e.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Te(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var an={DEG2RAD:Xc,RAD2DEG:hl,generateUUID:$s,clamp:he,euclideanModulo:dv,mapLinear:_2,inverseLerp:y2,lerp:Wc,damp:x2,pingpong:S2,smoothstep:M2,smootherstep:b2,randInt:E2,randFloat:T2,randFloatSpread:A2,seededRandom:w2,degToRad:R2,radToDeg:C2,isPowerOfTwo:D2,ceilPowerOfTwo:N2,floorPowerOfTwo:U2,setQuaternionFromProperEuler:L2,normalize:Te,denormalize:is},Kt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ia=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],v=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=v,t[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==v){let m=1-o,h=l*f+c*p+u*v+d*x,g=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){let A=Math.sqrt(y),w=Math.atan2(A,h*g);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let _=o*g;if(l=l*m+f*_,c=c*m+p*_,u=u*m+v*_,d=d*m+x*_,m===1-o){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],f=a[r+1],p=a[r+2],v=a[r+3];return t[n]=o*v+u*d+l*p-c*f,t[n+1]=l*v+u*f+c*d-o*p,t[n+2]=c*v+u*p+o*f-l*d,t[n+3]=u*v-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(gM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(gM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return v0.copy(this).projectOnVector(t),this.sub(v0)}reflect(t){return this.sub(v0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},v0=new P,gM=new ia,jt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],x=s[0],m=s[3],h=s[6],g=s[1],y=s[4],_=s[7],A=s[2],w=s[5],C=s[8];return a[0]=r*x+o*g+l*A,a[3]=r*m+o*y+l*w,a[6]=r*h+o*_+l*C,a[1]=c*x+u*g+d*A,a[4]=c*m+u*y+d*w,a[7]=c*h+u*_+d*C,a[2]=f*x+p*g+v*A,a[5]=f*m+p*y+v*w,a[8]=f*h+p*_+v*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,f=o*l-u*a,p=c*a-r*l,v=n*d+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return t[0]=d*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*r)*x,t[3]=f*x,t[4]=(u*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(_0.makeScale(t,n)),this}rotate(t){return this.premultiply(_0.makeRotation(-t)),this}translate(t,n){return this.premultiply(_0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_0=new jt;function pv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Jc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Rb(){let e=Jc("canvas");return e.style.display="block",e}var vM={};function fl(e){e in vM||(vM[e]=!0,console.warn(e))}function Cb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var _M=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yM=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I2(){let e={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===we&&(s.r=ta(s.r),s.g=ta(s.g),s.b=ta(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===we&&(s.r=cl(s.r),s.g=cl(s.g),s.b=cl(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oa?Yc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return fl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return fl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ir]:{primaries:t,whitePoint:i,transfer:Yc,toXYZ:_M,fromXYZ:yM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:i,transfer:we,toXYZ:_M,fromXYZ:yM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),e}var de=I2();function ta(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function cl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Yo,Xf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Yo===void 0&&(Yo=Jc("canvas")),Yo.width=t.width,Yo.height=t.height;let s=Yo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Yo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Jc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ta(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ta(n[i]/255)*255):n[i]=ta(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},O2=0,dl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=$s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(y0(s[r].image)):a.push(y0(s[r]))}else a=y0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function y0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Xf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var P2=0,x0=new P,oi=class e extends na{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ya,s=Ya,a=Rn,r=rs,o=qi,l=os,c=e.DEFAULT_ANISOTROPY,u=oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=$s(),this.name="",this.source=new dl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(x0).x}get height(){return this.source.getSize(x0).y}get depth(){return this.source.getSize(x0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ev)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hf:t.x=t.x-Math.floor(t.x);break;case Ya:t.x=t.x<0?0:1;break;case Vf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hf:t.y=t.y-Math.floor(t.y);break;case Ya:t.y=t.y<0?0:1;break;case Vf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=ev;oi.DEFAULT_ANISOTROPY=1;var Ae=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,_=(p+1)/2,A=(h+1)/2,w=(u+f)/4,C=(d+x)/4,N=(v+m)/4;return y>_&&y>A?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=w/i,a=C/i):_>A?_<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(_),i=w/s,a=N/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=C/a,s=N/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-x)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this.w=he(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this.w=he(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wf=class extends na{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ae(0,0,t,n),this.scissorTest=!1,this.viewport=new Ae(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new oi(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new dl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=class extends Wf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Kc=class extends oi{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qf=class extends oi{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ja=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ts.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ts.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=ts.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ts):ts.fromBufferAttribute(a,r),ts.applyMatrix4(t.matrixWorld),this.expandByPoint(ts);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pf.copy(i.boundingBox)),pf.applyMatrix4(t.matrixWorld),this.union(pf)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ts),ts.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pc),mf.subVectors(this.max,Pc),Zo.subVectors(t.a,Pc),Jo.subVectors(t.b,Pc),Ko.subVectors(t.c,Pc),Va.subVectors(Jo,Zo),Ga.subVectors(Ko,Jo),wr.subVectors(Zo,Ko);let n=[0,-Va.z,Va.y,0,-Ga.z,Ga.y,0,-wr.z,wr.y,Va.z,0,-Va.x,Ga.z,0,-Ga.x,wr.z,0,-wr.x,-Va.y,Va.x,0,-Ga.y,Ga.x,0,-wr.y,wr.x,0];return!S0(n,Zo,Jo,Ko,mf)||(n=[1,0,0,0,1,0,0,0,1],!S0(n,Zo,Jo,Ko,mf))?!1:(gf.crossVectors(Va,Ga),n=[gf.x,gf.y,gf.z],S0(n,Zo,Jo,Ko,mf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ts).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ts).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ys),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ys=[new P,new P,new P,new P,new P,new P,new P,new P],ts=new P,pf=new Ja,Zo=new P,Jo=new P,Ko=new P,Va=new P,Ga=new P,wr=new P,Pc=new P,mf=new P,gf=new P,Rr=new P;function S0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Rr.fromArray(e,a);let o=s.x*Math.abs(Rr.x)+s.y*Math.abs(Rr.y)+s.z*Math.abs(Rr.z),l=t.dot(Rr),c=n.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var z2=new Ja,zc=new P,M0=new P,Or=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):z2.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zc.subVectors(t,this.center);let n=zc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(zc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(M0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zc.copy(t.center).add(M0)),this.expandByPoint(zc.copy(t.center).sub(M0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zs=new P,b0=new P,vf=new P,ka=new P,E0=new P,_f=new P,T0=new P,pl=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Zs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Zs.copy(this.origin).addScaledVector(this.direction,n),Zs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){b0.copy(t).add(n).multiplyScalar(.5),vf.copy(n).sub(t).normalize(),ka.copy(this.origin).sub(b0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(vf),o=ka.dot(this.direction),l=-ka.dot(vf),c=ka.lengthSq(),u=Math.abs(1-r*r),d,f,p,v;if(u>0)if(d=r*l-o,f=r*o-l,v=a*u,d>=0)if(f>=-v)if(f<=v){let x=1/u;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(b0).addScaledVector(vf,f),p}intersectSphere(t,n){Zs.subVectors(t.center,this.origin);let i=Zs.dot(this.direction),s=Zs.dot(Zs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(a=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Zs)!==null}intersectTriangle(t,n,i,s,a){E0.subVectors(n,t),_f.subVectors(i,t),T0.crossVectors(E0,_f);let r=this.direction.dot(T0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ka.subVectors(this.origin,t);let l=o*this.direction.dot(_f.crossVectors(ka,_f));if(l<0)return null;let c=o*this.direction.dot(E0.cross(ka));if(c<0||l+c>r)return null;let u=-o*ka.dot(T0);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class e{constructor(t,n,i,s,a,r,o,l,c,u,d,f,p,v,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,d,f,p,v,x,m)}set(t,n,i,s,a,r,o,l,c,u,d,f,p,v,x,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Qo.setFromMatrixColumn(t,0).length(),a=1/Qo.setFromMatrixColumn(t,1).length(),r=1/Qo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*u,p=r*d,v=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,v=c*u,x=c*d;n[0]=f+x*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=p*o-v,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,v=c*u,x=c*d;n[0]=f-x*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*u,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*u,p=r*d,v=o*u,x=o*d;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*u,n[4]=x-f*d,n[8]=v*d+p,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+v,n[10]=f-x*d}else if(t.order==="XZY"){let f=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=r*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(B2,t,F2)}lookAt(t,n,i){let s=this.elements;return Ei.subVectors(t,n),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Xa.crossVectors(i,Ei),Xa.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Xa.crossVectors(i,Ei)),Xa.normalize(),yf.crossVectors(Ei,Xa),s[0]=Xa.x,s[4]=yf.x,s[8]=Ei.x,s[1]=Xa.y,s[5]=yf.y,s[9]=Ei.y,s[2]=Xa.z,s[6]=yf.z,s[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],h=i[14],g=i[3],y=i[7],_=i[11],A=i[15],w=s[0],C=s[4],N=s[8],E=s[12],b=s[1],U=s[5],B=s[9],k=s[13],Z=s[2],K=s[6],W=s[10],st=s[14],V=s[3],lt=s[7],ft=s[11],_t=s[15];return a[0]=r*w+o*b+l*Z+c*V,a[4]=r*C+o*U+l*K+c*lt,a[8]=r*N+o*B+l*W+c*ft,a[12]=r*E+o*k+l*st+c*_t,a[1]=u*w+d*b+f*Z+p*V,a[5]=u*C+d*U+f*K+p*lt,a[9]=u*N+d*B+f*W+p*ft,a[13]=u*E+d*k+f*st+p*_t,a[2]=v*w+x*b+m*Z+h*V,a[6]=v*C+x*U+m*K+h*lt,a[10]=v*N+x*B+m*W+h*ft,a[14]=v*E+x*k+m*st+h*_t,a[3]=g*w+y*b+_*Z+A*V,a[7]=g*C+y*U+_*K+A*lt,a[11]=g*N+y*B+_*W+A*ft,a[15]=g*E+y*k+_*st+A*_t,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],v=t[3],x=t[7],m=t[11],h=t[15];return v*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+x*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*u-a*l*u)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*u-i*c*u)+h*(-s*o*u-n*l*d+n*o*f+s*r*d-i*r*f+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],v=t[12],x=t[13],m=t[14],h=t[15],g=d*m*c-x*f*c+x*l*p-o*m*p-d*l*h+o*f*h,y=v*f*c-u*m*c-v*l*p+r*m*p+u*l*h-r*f*h,_=u*x*c-v*d*c+v*o*p-r*x*p-u*o*h+r*d*h,A=v*d*l-u*x*l-v*o*f+r*x*f+u*o*m-r*d*m,w=n*g+i*y+s*_+a*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=g*C,t[1]=(x*f*a-d*m*a-x*s*p+i*m*p+d*s*h-i*f*h)*C,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*h+i*l*h)*C,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*C,t[4]=y*C,t[5]=(u*m*a-v*f*a+v*s*p-n*m*p-u*s*h+n*f*h)*C,t[6]=(v*l*a-r*m*a-v*s*c+n*m*c+r*s*h-n*l*h)*C,t[7]=(r*f*a-u*l*a+u*s*c-n*f*c-r*s*p+n*l*p)*C,t[8]=_*C,t[9]=(v*d*a-u*x*a-v*i*p+n*x*p+u*i*h-n*d*h)*C,t[10]=(r*x*a-v*o*a+v*i*c-n*x*c-r*i*h+n*o*h)*C,t[11]=(u*o*a-r*d*a-u*i*c+n*d*c+r*i*p-n*o*p)*C,t[12]=A*C,t[13]=(u*x*s-v*d*s+v*i*f-n*x*f-u*i*m+n*d*m)*C,t[14]=(v*o*s-r*x*s-v*i*l+n*x*l+r*i*m-n*o*m)*C,t[15]=(r*d*s-u*o*s+u*i*l-n*d*l-r*i*f+n*o*f)*C,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,d=o+o,f=a*c,p=a*u,v=a*d,x=r*u,m=r*d,h=o*d,g=l*c,y=l*u,_=l*d,A=i.x,w=i.y,C=i.z;return s[0]=(1-(x+h))*A,s[1]=(p+_)*A,s[2]=(v-y)*A,s[3]=0,s[4]=(p-_)*w,s[5]=(1-(f+h))*w,s[6]=(m+g)*w,s[7]=0,s[8]=(v+y)*C,s[9]=(m-g)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Qo.set(s[0],s[1],s[2]).length(),r=Qo.set(s[4],s[5],s[6]).length(),o=Qo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],es.copy(this);let c=1/a,u=1/r,d=1/o;return es.elements[0]*=c,es.elements[1]*=c,es.elements[2]*=c,es.elements[4]*=u,es.elements[5]*=u,es.elements[6]*=u,es.elements[8]*=d,es.elements[9]*=d,es.elements[10]*=d,n.setFromRotationMatrix(es),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=ss,l=!1){let c=this.elements,u=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),v,x;if(l)v=a/(r-a),x=r*a/(r-a);else if(o===ss)v=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Zc)v=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=ss,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),v,x;if(l)v=1/(r-a),x=r/(r-a);else if(o===ss)v=-2/(r-a),x=-(r+a)/(r-a);else if(o===Zc)v=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Qo=new P,es=new Ge,B2=new P(0,0,0),F2=new P(1,1,1),Xa=new P,yf=new P,Ei=new P,xM=new Ge,SM=new ia,as=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-he(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return xM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return SM.setFromEuler(this),this.setFromQuaternion(SM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};as.DEFAULT_ORDER="XYZ";var ml=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},H2=0,MM=new P,jo=new ia,Js=new Ge,xf=new P,Bc=new P,V2=new P,G2=new ia,bM=new P(1,0,0),EM=new P(0,1,0),TM=new P(0,0,1),AM={type:"added"},k2={type:"removed"},$o={type:"childadded",child:null},A0={type:"childremoved",child:null},yn=class e extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new as,i=new ia,s=new P(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new jt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return jo.setFromAxisAngle(t,n),this.quaternion.multiply(jo),this}rotateOnWorldAxis(t,n){return jo.setFromAxisAngle(t,n),this.quaternion.premultiply(jo),this}rotateX(t){return this.rotateOnAxis(bM,t)}rotateY(t){return this.rotateOnAxis(EM,t)}rotateZ(t){return this.rotateOnAxis(TM,t)}translateOnAxis(t,n){return MM.copy(t).applyQuaternion(this.quaternion),this.position.add(MM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(bM,t)}translateY(t){return this.translateOnAxis(EM,t)}translateZ(t){return this.translateOnAxis(TM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Js.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?xf.copy(t):xf.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Bc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Js.lookAt(Bc,xf,this.up):Js.lookAt(xf,Bc,this.up),this.quaternion.setFromRotationMatrix(Js),s&&(Js.extractRotation(s.matrixWorld),jo.setFromRotationMatrix(Js),this.quaternion.premultiply(jo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(AM),$o.child=t,this.dispatchEvent($o),$o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(k2),A0.child=t,this.dispatchEvent(A0),A0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Js.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Js.multiply(t.parent.matrixWorld)),t.applyMatrix4(Js),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(AM),$o.child=t,this.dispatchEvent($o),$o.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bc,t,V2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bc,G2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};yn.DEFAULT_UP=new P(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ns=new P,Ks=new P,w0=new P,Qs=new P,tl=new P,el=new P,wM=new P,R0=new P,C0=new P,D0=new P,N0=new Ae,U0=new Ae,L0=new Ae,js=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),ns.subVectors(t,n),s.cross(ns);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){ns.subVectors(s,n),Ks.subVectors(i,n),w0.subVectors(t,n);let r=ns.dot(ns),o=ns.dot(Ks),l=ns.dot(w0),c=Ks.dot(Ks),u=Ks.dot(w0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,v=(r*u-o*l)*f;return a.set(1-p-v,v,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Qs)===null?!1:Qs.x>=0&&Qs.y>=0&&Qs.x+Qs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Qs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Qs.x),l.addScaledVector(r,Qs.y),l.addScaledVector(o,Qs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return N0.setScalar(0),U0.setScalar(0),L0.setScalar(0),N0.fromBufferAttribute(t,n),U0.fromBufferAttribute(t,i),L0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(N0,a.x),r.addScaledVector(U0,a.y),r.addScaledVector(L0,a.z),r}static isFrontFacing(t,n,i,s){return ns.subVectors(i,n),Ks.subVectors(t,n),ns.cross(Ks).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ns.subVectors(this.c,this.b),Ks.subVectors(this.a,this.b),ns.cross(Ks).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;tl.subVectors(s,i),el.subVectors(a,i),R0.subVectors(t,i);let l=tl.dot(R0),c=el.dot(R0);if(l<=0&&c<=0)return n.copy(i);C0.subVectors(t,s);let u=tl.dot(C0),d=el.dot(C0);if(u>=0&&d<=u)return n.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(tl,r);D0.subVectors(t,a);let p=tl.dot(D0),v=el.dot(D0);if(v>=0&&p<=v)return n.copy(a);let x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(el,o);let m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return wM.subVectors(a,s),o=(d-u)/(d-u+(p-v)),n.copy(s).addScaledVector(wM,o);let h=1/(m+x+f);return r=x*h,o=f*h,n.copy(i).addScaledVector(tl,r).addScaledVector(el,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Db={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},Sf={h:0,s:0,l:0};function I0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=de.workingColorSpace){return this.r=t,this.g=n,this.b=i,de.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=de.workingColorSpace){if(t=dv(t,1),n=he(n,0,1),i=he(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=I0(r,a,t+1/3),this.g=I0(r,a,t),this.b=I0(r,a,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,n=cn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=cn){let i=Db[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ta(t.r),this.g=ta(t.g),this.b=ta(t.b),this}copyLinearToSRGB(t){return this.r=cl(t.r),this.g=cl(t.g),this.b=cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return de.workingToColorSpace(zn.copy(this),t),Math.round(he(zn.r*255,0,255))*65536+Math.round(he(zn.g*255,0,255))*256+Math.round(he(zn.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=de.workingColorSpace){de.workingToColorSpace(zn.copy(this),n);let i=zn.r,s=zn.g,a=zn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=de.workingColorSpace){return de.workingToColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=cn){de.workingToColorSpace(zn.copy(this),t);let n=zn.r,i=zn.g,s=zn.b;return t!==cn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Wa),this.setHSL(Wa.h+t,Wa.s+n,Wa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Wa),t.getHSL(Sf);let i=Wc(Wa.h,Sf.h,n),s=Wc(Wa.s,Sf.s,n),a=Wc(Wa.l,Sf.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new Zt;Zt.NAMES=Db;var X2=0,ws=class extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X2++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Ur,this.side=ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bf,this.blendDst=Ff,this.blendEquation=Za,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(i.blending=this.blending),this.side!==ea&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bf&&(i.blendSrc=this.blendSrc),this.blendDst!==Ff&&(i.blendDst=this.blendDst),this.blendEquation!==Za&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Fn=class extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var sn=new P,Mf=new Kt,W2=0,vn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=kf,this.updateRanges=[],this.gpuType=Rs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mf.fromBufferAttribute(this,n),Mf.applyMatrix3(t),this.setXY(n,Mf.x,Mf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=is(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=is(n,this.array)),n}setX(t,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=is(n,this.array)),n}setY(t,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=is(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=is(n,this.array)),n}setW(t,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array),a=Te(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kf&&(t.usage=this.usage),t}};var Qc=class extends vn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var jc=class extends vn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Bn=class extends vn{constructor(t,n,i){super(new Float32Array(t),n,i)}},q2=0,Gi=new Ge,O0=new yn,nl=new P,Ti=new Ja,Fc=new Ja,gn=new P,Qn=class e extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pv(t)?jc:Qc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new jt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gi.makeRotationFromQuaternion(t),this.applyMatrix4(Gi),this}rotateX(t){return Gi.makeRotationX(t),this.applyMatrix4(Gi),this}rotateY(t){return Gi.makeRotationY(t),this.applyMatrix4(Gi),this}rotateZ(t){return Gi.makeRotationZ(t),this.applyMatrix4(Gi),this}translate(t,n,i){return Gi.makeTranslation(t,n,i),this.applyMatrix4(Gi),this}scale(t,n,i){return Gi.makeScale(t,n,i),this.applyMatrix4(Gi),this}lookAt(t){return O0.lookAt(t),O0.updateMatrix(),this.applyMatrix4(O0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nl).negate(),this.translate(nl.x,nl.y,nl.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Bn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Fc.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Ti.min,Fc.min),Ti.expandByPoint(gn),gn.addVectors(Ti.max,Fc.max),Ti.expandByPoint(gn)):(Ti.expandByPoint(Fc.min),Ti.expandByPoint(Fc.max))}Ti.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)gn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(gn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gn.fromBufferAttribute(o,c),l&&(nl.fromBufferAttribute(t,c),gn.add(nl)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new P,l[N]=new P;let c=new P,u=new P,d=new P,f=new Kt,p=new Kt,v=new Kt,x=new P,m=new P;function h(N,E,b){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),f.fromBufferAttribute(a,N),p.fromBufferAttribute(a,E),v.fromBufferAttribute(a,b),u.sub(c),d.sub(c),p.sub(f),v.sub(f);let U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(U),o[N].add(x),o[E].add(x),o[b].add(x),l[N].add(m),l[E].add(m),l[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let N=0,E=g.length;N<E;++N){let b=g[N],U=b.start,B=b.count;for(let k=U,Z=U+B;k<Z;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new P,_=new P,A=new P,w=new P;function C(N){A.fromBufferAttribute(s,N),w.copy(A);let E=o[N];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),_.crossVectors(w,E);let U=_.dot(l[N])<0?-1:1;r.setXYZW(N,y.x,y.y,y.z,U)}for(let N=0,E=g.length;N<E;++N){let b=g[N],U=b.start,B=b.count;for(let k=U,Z=U+B;k<Z;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){let v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)gn.fromBufferAttribute(t,n),gn.normalize(),t.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new vn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],d=a[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},RM=new Ge,Cr=new pl,bf=new Or,CM=new P,Ef=new P,Tf=new P,Af=new P,P0=new P,wf=new P,DM=new P,Rf=new P,Re=class extends yn{constructor(t=new Qn,n=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){wf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(P0.fromBufferAttribute(d,t),r?wf.addScaledVector(P0,u):wf.addScaledVector(P0.sub(n),u))}n.add(wf)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bf.copy(i.boundingSphere),bf.applyMatrix4(a),Cr.copy(t.ray).recast(t.near),!(bf.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(bf,CM)===null||Cr.origin.distanceToSquared(CM)>(t.far-t.near)**2))&&(RM.copy(a).invert(),Cr.copy(t.ray).applyMatrix4(RM),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Cr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=f.length;v<x;v++){let m=f[v],h=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=g,A=y;_<A;_+=3){let w=o.getX(_),C=o.getX(_+1),N=o.getX(_+2);s=Cf(this,h,t,i,c,u,d,w,C,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){let g=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=Cf(this,r,t,i,c,u,d,g,y,_),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=f.length;v<x;v++){let m=f[v],h=r[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=g,A=y;_<A;_+=3){let w=_,C=_+1,N=_+2;s=Cf(this,h,t,i,c,u,d,w,C,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){let g=m,y=m+1,_=m+2;s=Cf(this,r,t,i,c,u,d,g,y,_),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Y2(e,t,n,i,s,a,r,o){let l;if(t.side===Cn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ea,o),l===null)return null;Rf.copy(o),Rf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Rf);return c<n.near||c>n.far?null:{distance:c,point:Rf.clone(),object:e}}function Cf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Ef),e.getVertexPosition(l,Tf),e.getVertexPosition(c,Af);let u=Y2(e,t,n,i,Ef,Tf,Af,DM);if(u){let d=new P;js.getBarycoord(DM,Ef,Tf,Af,d),s&&(u.uv=js.getInterpolatedAttribute(s,o,l,c,d,new Kt)),a&&(u.uv1=js.getInterpolatedAttribute(a,o,l,c,d,new Kt)),r&&(u.normal=js.getInterpolatedAttribute(r,o,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};js.getNormal(Ef,Tf,Af,f.normal),u.face=f,u.barycoord=d}return u}var Ka=class e extends Qn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],f=0,p=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(u,3)),this.setAttribute("uv",new Bn(d,2));function v(x,m,h,g,y,_,A,w,C,N,E){let b=_/C,U=A/N,B=_/2,k=A/2,Z=w/2,K=C+1,W=N+1,st=0,V=0,lt=new P;for(let ft=0;ft<W;ft++){let _t=ft*U-k;for(let Xt=0;Xt<K;Xt++){let oe=Xt*b-B;lt[x]=oe*g,lt[m]=_t*y,lt[h]=Z,c.push(lt.x,lt.y,lt.z),lt[x]=0,lt[m]=0,lt[h]=w>0?1:-1,u.push(lt.x,lt.y,lt.z),d.push(Xt/C),d.push(1-ft/N),st+=1}}for(let ft=0;ft<N;ft++)for(let _t=0;_t<C;_t++){let Xt=f+_t+K*ft,oe=f+_t+K*(ft+1),xe=f+(_t+1)+K*(ft+1),qt=f+(_t+1)+K*ft;l.push(Xt,oe,qt),l.push(oe,xe,qt),V+=6}o.addGroup(p,V,E),p+=V,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Vn(e){let t={};for(let n=0;n<e.length;n++){let i=Gr(e[n]);for(let s in i)t[s]=i[s]}return t}function Z2(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function mv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Nb={clone:Gr,merge:Vn},J2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J2,this.fragmentShader=K2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=Z2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},$c=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=ss,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qa=new P,NM=new Kt,UM=new Kt,wn=class extends $c{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,n){return this.getViewBounds(t,NM,UM),n.subVectors(UM,NM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},il=-90,sl=1,Yf=class extends yn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wn(il,sl,t,n);s.layers=this.layers,this.add(s);let a=new wn(il,sl,t,n);a.layers=this.layers,this.add(a);let r=new wn(il,sl,t,n);r.layers=this.layers,this.add(r);let o=new wn(il,sl,t,n);o.layers=this.layers,this.add(o);let l=new wn(il,sl,t,n);l.layers=this.layers,this.add(l);let c=new wn(il,sl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===ss)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(d,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},tu=class extends oi{constructor(t=[],n=Hr,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zf=class extends As{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new tu(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ka(5,5,5),a=new li({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:aa});a.uniforms.tEquirect.value=n;let r=new Re(s,a),o=n.minFilter;return n.minFilter===rs&&(n.minFilter=Rn),new Yf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},ki=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q2={type:"move"},gl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ki;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var eu=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Jf=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=kf,this.updateRanges=[],this.version=0,this.uuid=$s()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$s()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$s()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Kn=new P,nu=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Kn.fromBufferAttribute(this,n),Kn.applyMatrix4(t),this.setXYZ(n,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Kn.fromBufferAttribute(this,n),Kn.applyNormalMatrix(t),this.setXYZ(n,Kn.x,Kn.y,Kn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Kn.fromBufferAttribute(this,n),Kn.transformDirection(t),this.setXYZ(n,Kn.x,Kn.y,Kn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=is(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Te(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=is(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=is(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=is(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=is(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array),a=Te(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return new vn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vl=class extends ws{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},al,Hc=new P,rl=new P,ol=new P,ll=new Kt,Vc=new Kt,Ub=new Ge,Df=new P,Gc=new P,Nf=new P,LM=new Kt,z0=new Kt,IM=new Kt,_l=class extends yn{constructor(t=new vl){if(super(),this.isSprite=!0,this.type="Sprite",al===void 0){al=new Qn;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jf(n,5);al.setIndex([0,1,2,0,2,3]),al.setAttribute("position",new nu(i,3,0,!1)),al.setAttribute("uv",new nu(i,2,3,!1))}this.geometry=al,this.material=t,this.center=new Kt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rl.setFromMatrixScale(this.matrixWorld),Ub.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ol.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rl.multiplyScalar(-ol.z);let i=this.material.rotation,s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));let r=this.center;Uf(Df.set(-.5,-.5,0),ol,r,rl,s,a),Uf(Gc.set(.5,-.5,0),ol,r,rl,s,a),Uf(Nf.set(.5,.5,0),ol,r,rl,s,a),LM.set(0,0),z0.set(1,0),IM.set(1,1);let o=t.ray.intersectTriangle(Df,Gc,Nf,!1,Hc);if(o===null&&(Uf(Gc.set(-.5,.5,0),ol,r,rl,s,a),z0.set(0,1),o=t.ray.intersectTriangle(Df,Nf,Gc,!1,Hc),o===null))return;let l=t.ray.origin.distanceTo(Hc);l<t.near||l>t.far||n.push({distance:l,point:Hc.clone(),uv:js.getInterpolation(Hc,Df,Gc,Nf,LM,z0,IM,new Kt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Uf(e,t,n,i,s,a){ll.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Vc.x=a*ll.x-s*ll.y,Vc.y=s*ll.x+a*ll.y):Vc.copy(ll),e.copy(t),e.x+=Vc.x,e.y+=Vc.y,e.applyMatrix4(Ub)}var B0=new P,j2=new P,$2=new jt,Ts=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=B0.subVectors(i,n).cross(j2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(B0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||$2.getNormalMatrix(t),s=this.coplanarPoint(B0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dr=new Or,tR=new Kt(.5,.5),Lf=new P,yl=class{constructor(t=new Ts,n=new Ts,i=new Ts,s=new Ts,a=new Ts,r=new Ts){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ss,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],f=a[6],p=a[7],v=a[8],x=a[9],m=a[10],h=a[11],g=a[12],y=a[13],_=a[14],A=a[15];if(s[0].setComponents(c-r,p-u,h-v,A-g).normalize(),s[1].setComponents(c+r,p+u,h+v,A+g).normalize(),s[2].setComponents(c+o,p+d,h+x,A+y).normalize(),s[3].setComponents(c-o,p-d,h-x,A-y).normalize(),i)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,p-f,h-m,A-_).normalize();else if(s[4].setComponents(c-l,p-f,h-m,A-_).normalize(),n===ss)s[5].setComponents(c+l,p+f,h+m,A+_).normalize();else if(n===Zc)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);let n=tR.distanceTo(t.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Lf.x=s.normal.x>0?t.max.x:t.min.x,Lf.y=s.normal.y>0?t.max.y:t.min.y,Lf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xl=class extends ws{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},OM=new Ge,W0=new pl,If=new Or,Of=new P,Sl=class extends yn{constructor(t=new Qn,n=new xl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),If.copy(i.boundingSphere),If.applyMatrix4(s),If.radius+=a,t.ray.intersectsSphere(If)===!1)return;OM.copy(s).invert(),W0.copy(t.ray).applyMatrix4(OM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let v=f,x=p;v<x;v++){let m=c.getX(v);Of.fromBufferAttribute(d,m),PM(Of,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let v=f,x=p;v<x;v++)Of.fromBufferAttribute(d,v),PM(Of,v,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function PM(e,t,n,i,s,a,r){let o=W0.distanceSqToPoint(e);if(o<n){let l=new P;W0.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Xi=class extends oi{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},iu=class extends oi{constructor(t,n,i=$a,s,a,r,o=_n,l=_n,c,u=ul,d=1){if(u!==ul&&u!==Al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},su=class extends oi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var au=class e extends Qn{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let u=[],d=[],f=[],p=[],v=0,x=[],m=i/2,h=0;g(),r===!1&&(t>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Bn(d,3)),this.setAttribute("normal",new Bn(f,3)),this.setAttribute("uv",new Bn(p,2));function g(){let _=new P,A=new P,w=0,C=(n-t)/i;for(let N=0;N<=a;N++){let E=[],b=N/a,U=b*(n-t)+t;for(let B=0;B<=s;B++){let k=B/s,Z=k*l+o,K=Math.sin(Z),W=Math.cos(Z);A.x=U*K,A.y=-b*i+m,A.z=U*W,d.push(A.x,A.y,A.z),_.set(K,C,W).normalize(),f.push(_.x,_.y,_.z),p.push(k,1-b),E.push(v++)}x.push(E)}for(let N=0;N<s;N++)for(let E=0;E<a;E++){let b=x[E][N],U=x[E+1][N],B=x[E+1][N+1],k=x[E][N+1];(t>0||E!==0)&&(u.push(b,U,k),w+=3),(n>0||E!==a-1)&&(u.push(U,B,k),w+=3)}c.addGroup(h,w,0),h+=w}function y(_){let A=v,w=new Kt,C=new P,N=0,E=_===!0?t:n,b=_===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),v++;let U=v;for(let B=0;B<=s;B++){let Z=B/s*l+o,K=Math.cos(Z),W=Math.sin(Z);C.x=E*W,C.y=m*b,C.z=E*K,d.push(C.x,C.y,C.z),f.push(0,b,0),w.x=K*.5+.5,w.y=W*.5*b+.5,p.push(w.x,w.y),v++}for(let B=0;B<s;B++){let k=A+B,Z=U+B;_===!0?u.push(Z,Z+1,k):u.push(Z+1,Z,k),N+=3}c.addGroup(h,N,_===!0?1:2),h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Hn=class e extends Qn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=n/l,p=[],v=[],x=[],m=[];for(let h=0;h<u;h++){let g=h*f-r;for(let y=0;y<c;y++){let _=y*d-a;v.push(_,-g,0),x.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){let y=g+c*h,_=g+c*(h+1),A=g+1+c*(h+1),w=g+1+c*h;p.push(y,_,w),p.push(_,A,w)}this.setIndex(p),this.setAttribute("position",new Bn(v,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ml=class e extends Qn{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,u=[],d=new P,f=new P,p=[],v=[],x=[],m=[];for(let h=0;h<=i;h++){let g=[],y=h/i,_=0;h===0&&r===0?_=.5/n:h===i&&l===Math.PI&&(_=-.5/n);for(let A=0;A<=n;A++){let w=A/n;d.x=-t*Math.cos(s+w*a)*Math.sin(r+y*o),d.y=t*Math.cos(r+y*o),d.z=t*Math.sin(s+w*a)*Math.sin(r+y*o),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(w+_,1-y),g.push(c++)}u.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){let y=u[h][g+1],_=u[h][g],A=u[h+1][g],w=u[h+1][g+1];(h!==0||r>0)&&p.push(y,_,w),(h!==i-1||l<Math.PI)&&p.push(_,A,w)}this.setIndex(p),this.setAttribute("position",new Bn(v,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pr=class extends ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uv,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Kf=class extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qf=class extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pf(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function eR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var zr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jf=class extends zr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:V0,endingEnd:V0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case G0:a=t,o=2*n-i;break;case k0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case G0:r=t,l=2*i-n;break;case k0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(i-n)/(s-n),x=v*v,m=x*v,h=-f*m+2*f*x-f*v,g=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*v+1,y=(-1-p)*m+(1.5+p)*x+.5*v,_=p*m-p*x;for(let A=0;A!==o;++A)a[A]=h*r[u+A]+g*r[c+A]+y*r[l+A]+_*r[d+A];return a}},$f=class extends zr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*u;return a}},td=class extends zr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ai=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pf(n,this.TimeBufferType),this.values=Pf(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Pf(t.times,Array),values:Pf(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new td(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $f(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case qc:n=this.InterpolantFactoryMethodDiscrete;break;case Gf:n=this.InterpolantFactoryMethodLinear;break;case zf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qc;case this.InterpolantFactoryMethodLinear:return Gf;case this.InterpolantFactoryMethodSmooth:return zf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&eR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let v=0;v!==i;++v){let x=n[d+v];if(x!==n[f+v]||x!==n[p+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Gf;var Qa=class extends Ai{constructor(t,n,i){super(t,n,i)}};Qa.prototype.ValueTypeName="bool";Qa.prototype.ValueBufferType=Array;Qa.prototype.DefaultInterpolation=qc;Qa.prototype.InterpolantFactoryMethodLinear=void 0;Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var ed=class extends Ai{constructor(t,n,i,s){super(t,n,i,s)}};ed.prototype.ValueTypeName="color";var nd=class extends Ai{constructor(t,n,i,s){super(t,n,i,s)}};nd.prototype.ValueTypeName="number";var id=class extends zr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)ia.slerpFlat(a,0,r,c-o,r,c,l);return a}},ru=class extends Ai{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new id(this.times,this.values,this.getValueSize(),t)}};ru.prototype.ValueTypeName="quaternion";ru.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Ai{constructor(t,n,i){super(t,n,i)}};ja.prototype.ValueTypeName="string";ja.prototype.ValueBufferType=Array;ja.prototype.DefaultInterpolation=qc;ja.prototype.InterpolantFactoryMethodLinear=void 0;ja.prototype.InterpolantFactoryMethodSmooth=void 0;var sd=class extends Ai{constructor(t,n,i,s){super(t,n,i,s)}};sd.prototype.ValueTypeName="vector";var ad=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Lb=new ad,rd=class{constructor(t){this.manager=t!==void 0?t:Lb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};rd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends yn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},ou=class extends Br{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},F0=new Ge,zM=new P,BM=new P,od=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=os,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;zM.setFromMatrixPosition(t.matrixWorld),n.position.copy(zM),BM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(BM),n.updateMatrixWorld(),F0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(F0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(F0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var FM=new Ge,kc=new P,H0=new P,q0=class extends od{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),kc.setFromMatrixPosition(t.matrixWorld),i.position.copy(kc),H0.copy(i.position),H0.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(H0),i.updateMatrixWorld(),s.makeTranslation(-kc.x,-kc.y,-kc.z),FM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(FM,i.coordinateSystem,i.reversedDepth)}},sa=class extends Br{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new q0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},lu=class extends $c{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Y0=class extends od{constructor(){super(new lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cu=class extends Br{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},uu=class extends Br{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var ld=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gv="\\[\\]\\.:\\/",nR=new RegExp("["+gv+"]","g"),vv="[^"+gv+"]",iR="[^"+gv.replace("\\.","")+"]",sR=/((?:WC+[\/:])*)/.source.replace("WC",vv),aR=/(WCOD+)?/.source.replace("WCOD",iR),rR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vv),oR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vv),lR=new RegExp("^"+sR+aR+rR+oR+"$"),cR=["material","materials","bones","map"],Z0=class{constructor(t,n,i){let s=i||Ve.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ve=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nR,"")}static parseTrackName(t){let n=lR.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);cR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=Z0;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gU=new Float32Array(1);var HM=new Ge,hu=class{constructor(t,n,i=0,s=1/0){this.ray=new pl(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return HM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(HM),this}intersectObject(t,n=!0,i=[]){return J0(t,this,i,n),i.sort(VM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)J0(t[s],this,i,n);return i.sort(VM),i}};function VM(e,t){return e.distance-t.distance}function J0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)J0(a[r],t,n,!0)}}function _v(e,t,n,i){let s=uR(i);switch(n){case rv:return e*t;case lv:return e*t/s.components*s.byteLength;case bd:return e*t/s.components*s.byteLength;case cv:return e*t*2/s.components*s.byteLength;case Ed:return e*t*2/s.components*s.byteLength;case ov:return e*t*3/s.components*s.byteLength;case qi:return e*t*4/s.components*s.byteLength;case Td:return e*t*4/s.components*s.byteLength;case pu:case mu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gu:case vu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wd:case Cd:return Math.max(e,16)*Math.max(t,8)/4;case Ad:case Rd:return Math.max(e,8)*Math.max(t,8)/2;case Dd:case Nd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ud:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Id:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Od:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case zd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case kd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Xd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case qd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Yd:case Zd:case Jd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Kd:case Qd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case jd:case $d:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uR(e){switch(e){case os:case nv:return{byteLength:1,components:1};case bl:case iv:case El:return{byteLength:2,components:1};case Sd:case Md:return{byteLength:2,components:4};case $a:case xd:case Rs:return{byteLength:4,components:1};case sv:case av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function iE(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function fR(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){let v=d[f],x=d[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){let x=d[p];e.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var dR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pR=`#ifdef USE_ALPHAHASH
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
#endif`,mR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_R=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yR=`#ifdef USE_AOMAP
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
#endif`,xR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SR=`#ifdef USE_BATCHING
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
#endif`,MR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ER=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AR=`#ifdef USE_IRIDESCENCE
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
#endif`,wR=`#ifdef USE_BUMPMAP
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
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PR=`#define PI 3.141592653589793
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
} // validated`,zR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BR=`vec3 transformedNormal = objectNormal;
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
#endif`,FR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kR="gl_FragColor = linearToOutputTexel( gl_FragColor );",XR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WR=`#ifdef USE_ENVMAP
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
#endif`,qR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,YR=`#ifdef USE_ENVMAP
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
#endif`,ZR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JR=`#ifdef USE_ENVMAP
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
#endif`,KR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$R=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tC=`#ifdef USE_GRADIENTMAP
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
}`,eC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sC=`uniform bool receiveShadow;
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
#endif`,aC=`#ifdef USE_ENVMAP
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
#endif`,rC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uC=`PhysicalMaterial material;
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
#endif`,hC=`struct PhysicalMaterial {
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
}`,fC=`
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
#endif`,dC=`#if defined( RE_IndirectDiffuse )
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
#endif`,pC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_C=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MC=`#if defined( USE_POINTS_UV )
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
#endif`,bC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RC=`#ifdef USE_MORPHTARGETS
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
#endif`,CC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OC=`#ifdef USE_NORMALMAP
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
#endif`,PC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QC=`float getShadowMask() {
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
}`,jC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$C=`#ifdef USE_SKINNING
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
#endif`,t3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e3=`#ifdef USE_SKINNING
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
#endif`,n3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r3=`#ifdef USE_TRANSMISSION
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
#endif`,o3=`#ifdef USE_TRANSMISSION
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
#endif`,l3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d3=`uniform sampler2D t2D;
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
}`,p3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`#include <common>
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
}`,y3=`#if DEPTH_PACKING == 3200
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
}`,x3=`#define DISTANCE
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
}`,S3=`#define DISTANCE
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
}`,M3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`uniform float scale;
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
}`,T3=`uniform vec3 diffuse;
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
}`,A3=`#include <common>
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
}`,w3=`uniform vec3 diffuse;
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
}`,R3=`#define LAMBERT
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
}`,C3=`#define LAMBERT
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
}`,D3=`#define MATCAP
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
}`,N3=`#define MATCAP
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
}`,U3=`#define NORMAL
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
}`,L3=`#define NORMAL
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
}`,I3=`#define PHONG
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
}`,O3=`#define PHONG
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
}`,P3=`#define STANDARD
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
}`,z3=`#define STANDARD
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
}`,B3=`#define TOON
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
}`,F3=`#define TOON
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
}`,H3=`uniform float size;
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
}`,V3=`uniform vec3 diffuse;
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
}`,G3=`#include <common>
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
}`,k3=`uniform vec3 color;
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
}`,X3=`uniform float rotation;
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
}`,W3=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:dR,alphahash_pars_fragment:pR,alphamap_fragment:mR,alphamap_pars_fragment:gR,alphatest_fragment:vR,alphatest_pars_fragment:_R,aomap_fragment:yR,aomap_pars_fragment:xR,batching_pars_vertex:SR,batching_vertex:MR,begin_vertex:bR,beginnormal_vertex:ER,bsdfs:TR,iridescence_fragment:AR,bumpmap_pars_fragment:wR,clipping_planes_fragment:RR,clipping_planes_pars_fragment:CR,clipping_planes_pars_vertex:DR,clipping_planes_vertex:NR,color_fragment:UR,color_pars_fragment:LR,color_pars_vertex:IR,color_vertex:OR,common:PR,cube_uv_reflection_fragment:zR,defaultnormal_vertex:BR,displacementmap_pars_vertex:FR,displacementmap_vertex:HR,emissivemap_fragment:VR,emissivemap_pars_fragment:GR,colorspace_fragment:kR,colorspace_pars_fragment:XR,envmap_fragment:WR,envmap_common_pars_fragment:qR,envmap_pars_fragment:YR,envmap_pars_vertex:ZR,envmap_physical_pars_fragment:aC,envmap_vertex:JR,fog_vertex:KR,fog_pars_vertex:QR,fog_fragment:jR,fog_pars_fragment:$R,gradientmap_pars_fragment:tC,lightmap_pars_fragment:eC,lights_lambert_fragment:nC,lights_lambert_pars_fragment:iC,lights_pars_begin:sC,lights_toon_fragment:rC,lights_toon_pars_fragment:oC,lights_phong_fragment:lC,lights_phong_pars_fragment:cC,lights_physical_fragment:uC,lights_physical_pars_fragment:hC,lights_fragment_begin:fC,lights_fragment_maps:dC,lights_fragment_end:pC,logdepthbuf_fragment:mC,logdepthbuf_pars_fragment:gC,logdepthbuf_pars_vertex:vC,logdepthbuf_vertex:_C,map_fragment:yC,map_pars_fragment:xC,map_particle_fragment:SC,map_particle_pars_fragment:MC,metalnessmap_fragment:bC,metalnessmap_pars_fragment:EC,morphinstance_vertex:TC,morphcolor_vertex:AC,morphnormal_vertex:wC,morphtarget_pars_vertex:RC,morphtarget_vertex:CC,normal_fragment_begin:DC,normal_fragment_maps:NC,normal_pars_fragment:UC,normal_pars_vertex:LC,normal_vertex:IC,normalmap_pars_fragment:OC,clearcoat_normal_fragment_begin:PC,clearcoat_normal_fragment_maps:zC,clearcoat_pars_fragment:BC,iridescence_pars_fragment:FC,opaque_fragment:HC,packing:VC,premultiplied_alpha_fragment:GC,project_vertex:kC,dithering_fragment:XC,dithering_pars_fragment:WC,roughnessmap_fragment:qC,roughnessmap_pars_fragment:YC,shadowmap_pars_fragment:ZC,shadowmap_pars_vertex:JC,shadowmap_vertex:KC,shadowmask_pars_fragment:QC,skinbase_vertex:jC,skinning_pars_vertex:$C,skinning_vertex:t3,skinnormal_vertex:e3,specularmap_fragment:n3,specularmap_pars_fragment:i3,tonemapping_fragment:s3,tonemapping_pars_fragment:a3,transmission_fragment:r3,transmission_pars_fragment:o3,uv_pars_fragment:l3,uv_pars_vertex:c3,uv_vertex:u3,worldpos_vertex:h3,background_vert:f3,background_frag:d3,backgroundCube_vert:p3,backgroundCube_frag:m3,cube_vert:g3,cube_frag:v3,depth_vert:_3,depth_frag:y3,distanceRGBA_vert:x3,distanceRGBA_frag:S3,equirect_vert:M3,equirect_frag:b3,linedashed_vert:E3,linedashed_frag:T3,meshbasic_vert:A3,meshbasic_frag:w3,meshlambert_vert:R3,meshlambert_frag:C3,meshmatcap_vert:D3,meshmatcap_frag:N3,meshnormal_vert:U3,meshnormal_frag:L3,meshphong_vert:I3,meshphong_frag:O3,meshphysical_vert:P3,meshphysical_frag:z3,meshtoon_vert:B3,meshtoon_frag:F3,points_vert:H3,points_frag:V3,shadow_vert:G3,shadow_frag:k3,sprite_vert:X3,sprite_frag:W3},pt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Cs={basic:{uniforms:Vn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Vn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Vn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Vn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Vn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Vn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Vn([pt.points,pt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Vn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Vn([pt.common,pt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Vn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Vn([pt.sprite,pt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Vn([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Vn([pt.lights,pt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Cs.physical={uniforms:Vn([Cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var tp={r:0,b:0,g:0},kr=new as,q3=new Ge;function Y3(e,t,n,i,s,a,r){let o=new Zt(0),l=a===!0?0:1,c,u,d=null,f=0,p=null;function v(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:t).get(_)),_}function x(y){let _=!1,A=v(y);A===null?h(o,l):A&&A.isColor&&(h(A,1),_=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,_){let A=v(_);A&&(A.isCubeTexture||A.mapping===fu)?(u===void 0&&(u=new Re(new Ka(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Gr(Cs.backgroundCube.uniforms),vertexShader:Cs.backgroundCube.vertexShader,fragmentShader:Cs.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),kr.copy(_.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(q3.makeRotationFromEuler(kr)),u.material.toneMapped=de.getTransfer(A.colorSpace)!==we,(d!==A||f!==A.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,p=e.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Re(new Hn(2,2),new li({name:"BackgroundMaterial",uniforms:Gr(Cs.background.uniforms),vertexShader:Cs.background.vertexShader,fragmentShader:Cs.background.fragmentShader,side:ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=de.getTransfer(A.colorSpace)!==we,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,_){y.getRGB(tp,mv(e)),i.buffers.color.setClear(tp.r,tp.g,tp.b,_,r)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:x,addToRenderList:m,dispose:g}}function Z3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(b,U,B,k,Z){let K=!1,W=d(k,B,U);a!==W&&(a=W,c(a.object)),K=p(b,k,B,Z),K&&v(b,k,B,Z),Z!==null&&t.update(Z,e.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,_(b,U,B,k),Z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function u(b){return e.deleteVertexArray(b)}function d(b,U,B){let k=B.wireframe===!0,Z=i[b.id];Z===void 0&&(Z={},i[b.id]=Z);let K=Z[U.id];K===void 0&&(K={},Z[U.id]=K);let W=K[k];return W===void 0&&(W=f(l()),K[k]=W),W}function f(b){let U=[],B=[],k=[];for(let Z=0;Z<n;Z++)U[Z]=0,B[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:k,object:b,attributes:{},index:null}}function p(b,U,B,k){let Z=a.attributes,K=U.attributes,W=0,st=B.getAttributes();for(let V in st)if(st[V].location>=0){let ft=Z[V],_t=K[V];if(_t===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor)),ft===void 0||ft.attribute!==_t||_t&&ft.data!==_t.data)return!0;W++}return a.attributesNum!==W||a.index!==k}function v(b,U,B,k){let Z={},K=U.attributes,W=0,st=B.getAttributes();for(let V in st)if(st[V].location>=0){let ft=K[V];ft===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor));let _t={};_t.attribute=ft,ft&&ft.data&&(_t.data=ft.data),Z[V]=_t,W++}a.attributes=Z,a.attributesNum=W,a.index=k}function x(){let b=a.newAttributes;for(let U=0,B=b.length;U<B;U++)b[U]=0}function m(b){h(b,0)}function h(b,U){let B=a.newAttributes,k=a.enabledAttributes,Z=a.attributeDivisors;B[b]=1,k[b]===0&&(e.enableVertexAttribArray(b),k[b]=1),Z[b]!==U&&(e.vertexAttribDivisor(b,U),Z[b]=U)}function g(){let b=a.newAttributes,U=a.enabledAttributes;for(let B=0,k=U.length;B<k;B++)U[B]!==b[B]&&(e.disableVertexAttribArray(B),U[B]=0)}function y(b,U,B,k,Z,K,W){W===!0?e.vertexAttribIPointer(b,U,B,Z,K):e.vertexAttribPointer(b,U,B,k,Z,K)}function _(b,U,B,k){x();let Z=k.attributes,K=B.getAttributes(),W=U.defaultAttributeValues;for(let st in K){let V=K[st];if(V.location>=0){let lt=Z[st];if(lt===void 0&&(st==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),st==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),lt!==void 0){let ft=lt.normalized,_t=lt.itemSize,Xt=t.get(lt);if(Xt===void 0)continue;let oe=Xt.buffer,xe=Xt.type,qt=Xt.bytesPerElement,Q=xe===e.INT||xe===e.UNSIGNED_INT||lt.gpuType===xd;if(lt.isInterleavedBufferAttribute){let et=lt.data,St=et.stride,Ft=lt.offset;if(et.isInstancedInterleavedBuffer){for(let X=0;X<V.locationSize;X++)h(V.location+X,et.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let X=0;X<V.locationSize;X++)m(V.location+X);e.bindBuffer(e.ARRAY_BUFFER,oe);for(let X=0;X<V.locationSize;X++)y(V.location+X,_t/V.locationSize,xe,ft,St*qt,(Ft+_t/V.locationSize*X)*qt,Q)}else{if(lt.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)h(V.location+et,lt.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let et=0;et<V.locationSize;et++)m(V.location+et);e.bindBuffer(e.ARRAY_BUFFER,oe);for(let et=0;et<V.locationSize;et++)y(V.location+et,_t/V.locationSize,xe,ft,_t*qt,_t/V.locationSize*et*qt,Q)}}else if(W!==void 0){let ft=W[st];if(ft!==void 0)switch(ft.length){case 2:e.vertexAttrib2fv(V.location,ft);break;case 3:e.vertexAttrib3fv(V.location,ft);break;case 4:e.vertexAttrib4fv(V.location,ft);break;default:e.vertexAttrib1fv(V.location,ft)}}}}g()}function A(){N();for(let b in i){let U=i[b];for(let B in U){let k=U[B];for(let Z in k)u(k[Z].object),delete k[Z];delete U[B]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let B in U){let k=U[B];for(let Z in k)u(k[Z].object),delete k[Z];delete U[B]}delete i[b.id]}function C(b){for(let U in i){let B=i[U];if(B[b.id]===void 0)continue;let k=B[b.id];for(let Z in k)u(k[Z].object),delete k[Z];delete B[b.id]}}function N(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function J3(e,t,n){let i;function s(c){i=c}function a(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,d){d!==0&&(e.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)r(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x]*f[x];n.update(v,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function K3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==qi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let N=C===El&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==os&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rs&&!N)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:w}}function Q3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ts,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){let v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=e.get(d);if(!s||v===null||v.length===0||a&&!m)a?u(null):c();else{let g=a?0:i,y=g*4,_=h.clippingState||null;l.value=_,_=u(v,f,y,p);for(let A=0;A!==y;++A)_[A]=n[A];h.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,v){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,v!==!0||m===null){let h=p+x*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,_=p;y!==x;++y,_+=4)r.copy(d[y]).applyMatrix4(g,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function j3(e){let t=new WeakMap;function n(r,o){return o===vd?r.mapping=Hr:o===_d&&(r.mapping=Vr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===vd||o===_d)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Zf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Rl=4,Ib=[.125,.215,.35,.446,.526,.582],qr=20,yv=new lu,Ob=new Zt,xv=null,Sv=0,Mv=0,bv=!1,Wr=(1+Math.sqrt(5))/2,wl=1/Wr,Pb=[new P(-Wr,wl,0),new P(Wr,wl,0),new P(-wl,0,Wr),new P(wl,0,Wr),new P(0,Wr,-wl),new P(0,Wr,wl),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],$3=new P,ip=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=$3}=a;xv=this._renderer.getRenderTarget(),Sv=this._renderer.getActiveCubeFace(),Mv=this._renderer.getActiveMipmapLevel(),bv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xv,Sv,Mv),this._renderer.xr.enabled=bv,t.scissorTest=!1,ep(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Hr||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xv=this._renderer.getRenderTarget(),Sv=this._renderer.getActiveCubeFace(),Mv=this._renderer.getActiveMipmapLevel(),bv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:El,format:qi,colorSpace:Ir,depthBuffer:!1},s=zb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tD(a)),this._blurMaterial=eD(a,t,n)}return s}_compileMaterial(t){let n=new Re(this._lodPlanes[0],t);this._renderer.compile(n,yv)}_sceneToCubeUV(t,n,i,s,a){let l=new wn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Ob),d.toneMapping=ra,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new Fn({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),m=new Re(new Ka,x),h=!1,g=t.background;g?g.isColor&&(x.color.copy(g),t.background=null,h=!0):(x.color.copy(Ob),h=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[y],a.y,a.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[y]));let A=this._cubeSize;ep(s,_*A,y>2?A:0,A,A),d.setRenderTarget(s),h&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Hr||t.mapping===Vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Re(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;ep(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,yv)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Pb[(s-a-1)%Pb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Re(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*qr-1),x=a/v,m=isFinite(a)?1+Math.floor(u*x):qr;m>qr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);let h=[],g=0;for(let C=0;C<qr;++C){let N=C/x,E=Math.exp(-N*N/2);h.push(E),C===0?g+=E:C<m&&(g+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;let _=this._sizeLods[s],A=3*_*(s>y-Rl?s-y+Rl:0),w=4*(this._cubeSize-_);ep(n,A,w,3*_,2*_),l.setRenderTarget(n),l.render(d,yv)}};function tD(e){let t=[],n=[],i=[],s=e,a=e-Rl+1+Ib.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Rl?l=Ib[r-e+Rl-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,x=3,m=2,h=1,g=new Float32Array(x*v*p),y=new Float32Array(m*v*p),_=new Float32Array(h*v*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,N=w>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];g.set(E,x*v*w),y.set(f,m*v*w);let b=[w,w,w,w,w,w];_.set(b,h*v*w)}let A=new Qn;A.setAttribute("position",new vn(g,x)),A.setAttribute("uv",new vn(y,m)),A.setAttribute("faceIndex",new vn(_,h)),t.push(A),s>Rl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function zb(e,t,n){let i=new As(e,t,n);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ep(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function eD(e,t,n){let i=new Float32Array(qr),s=new P(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lv(),fragmentShader:`

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
		`,blending:aa,depthTest:!1,depthWrite:!1})}function Bb(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lv(),fragmentShader:`

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
		`,blending:aa,depthTest:!1,depthWrite:!1})}function Fb(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:aa,depthTest:!1,depthWrite:!1})}function Lv(){return`

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
	`}function nD(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===vd||l===_d,u=l===Hr||l===Vr;if(c||u){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new ip(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new ip(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function iD(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&fl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sD(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,v=d.attributes.position,x=0;if(p!==null){let g=p.array;x=p.version;for(let y=0,_=g.length;y<_;y+=3){let A=g[y+0],w=g[y+1],C=g[y+2];f.push(A,w,w,C,C,A)}}else if(v!==void 0){let g=v.array;x=v.version;for(let y=0,_=g.length/3-1;y<_;y+=3){let A=y+0,w=y+1,C=y+2;f.push(A,w,w,C,C,A)}}else return;let m=new(pv(f)?jc:Qc)(f,1);m.version=x;let h=a.get(d);h&&t.remove(h),a.set(d,m)}function u(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function aD(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){e.drawElements(i,p,a,f*r),n.update(p,i,1)}function c(f,p,v){v!==0&&(e.drawElementsInstanced(i,p,a,f*r,v),n.update(p,i,v))}function u(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}function d(f,p,v,x){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/r,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,v);let h=0;for(let g=0;g<v;g++)h+=p[g]*x[g];n.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function rD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function oD(e,t,n){let i=new WeakMap,s=new Ae;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],y=0;p===!0&&(y=1),v===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*A*4*d),C=new Kc(w,_,A,d);C.type=Rs,C.needsUpdate=!0;let N=y*4;for(let b=0;b<d;b++){let U=m[b],B=h[b],k=g[b],Z=_*A*4*b;for(let K=0;K<U.count;K++){let W=K*N;p===!0&&(s.fromBufferAttribute(U,K),w[Z+W+0]=s.x,w[Z+W+1]=s.y,w[Z+W+2]=s.z,w[Z+W+3]=0),v===!0&&(s.fromBufferAttribute(B,K),w[Z+W+4]=s.x,w[Z+W+5]=s.y,w[Z+W+6]=s.z,w[Z+W+7]=0),x===!0&&(s.fromBufferAttribute(k,K),w[Z+W+8]=s.x,w[Z+W+9]=s.y,w[Z+W+10]=s.z,w[Z+W+11]=k.itemSize===4?s.w:1)}}f={count:d,texture:C,size:new Kt(_,A)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function lD(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var sE=new oi,Hb=new iu(1,1),aE=new Kc,rE=new qf,oE=new tu,Vb=[],Gb=[],kb=new Float32Array(16),Xb=new Float32Array(9),Wb=new Float32Array(4);function Dl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Vb[s];if(a===void 0&&(a=new Float32Array(s),Vb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function un(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function hn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function ap(e,t){let n=Gb[t];n===void 0&&(n=new Int32Array(t),Gb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function cD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function uD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2fv(this.addr,t),hn(n,t)}}function hD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(un(n,t))return;e.uniform3fv(this.addr,t),hn(n,t)}}function fD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4fv(this.addr,t),hn(n,t)}}function dD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;Wb.set(i),e.uniformMatrix2fv(this.addr,!1,Wb),hn(n,i)}}function pD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;Xb.set(i),e.uniformMatrix3fv(this.addr,!1,Xb),hn(n,i)}}function mD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;kb.set(i),e.uniformMatrix4fv(this.addr,!1,kb),hn(n,i)}}function gD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function vD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2iv(this.addr,t),hn(n,t)}}function _D(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3iv(this.addr,t),hn(n,t)}}function yD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4iv(this.addr,t),hn(n,t)}}function xD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function SD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2uiv(this.addr,t),hn(n,t)}}function MD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3uiv(this.addr,t),hn(n,t)}}function bD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4uiv(this.addr,t),hn(n,t)}}function ED(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Hb.compareFunction=hv,a=Hb):a=sE,n.setTexture2D(t||a,s)}function TD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||rE,s)}function AD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||oE,s)}function wD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||aE,s)}function RD(e){switch(e){case 5126:return cD;case 35664:return uD;case 35665:return hD;case 35666:return fD;case 35674:return dD;case 35675:return pD;case 35676:return mD;case 5124:case 35670:return gD;case 35667:case 35671:return vD;case 35668:case 35672:return _D;case 35669:case 35673:return yD;case 5125:return xD;case 36294:return SD;case 36295:return MD;case 36296:return bD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return AD;case 36289:case 36303:case 36311:case 36292:return wD}}function CD(e,t){e.uniform1fv(this.addr,t)}function DD(e,t){let n=Dl(t,this.size,2);e.uniform2fv(this.addr,n)}function ND(e,t){let n=Dl(t,this.size,3);e.uniform3fv(this.addr,n)}function UD(e,t){let n=Dl(t,this.size,4);e.uniform4fv(this.addr,n)}function LD(e,t){let n=Dl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ID(e,t){let n=Dl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function OD(e,t){let n=Dl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function PD(e,t){e.uniform1iv(this.addr,t)}function zD(e,t){e.uniform2iv(this.addr,t)}function BD(e,t){e.uniform3iv(this.addr,t)}function FD(e,t){e.uniform4iv(this.addr,t)}function HD(e,t){e.uniform1uiv(this.addr,t)}function VD(e,t){e.uniform2uiv(this.addr,t)}function GD(e,t){e.uniform3uiv(this.addr,t)}function kD(e,t){e.uniform4uiv(this.addr,t)}function XD(e,t,n){let i=this.cache,s=t.length,a=ap(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||sE,a[r])}function WD(e,t,n){let i=this.cache,s=t.length,a=ap(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||rE,a[r])}function qD(e,t,n){let i=this.cache,s=t.length,a=ap(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||oE,a[r])}function YD(e,t,n){let i=this.cache,s=t.length,a=ap(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||aE,a[r])}function ZD(e){switch(e){case 5126:return CD;case 35664:return DD;case 35665:return ND;case 35666:return UD;case 35674:return LD;case 35675:return ID;case 35676:return OD;case 5124:case 35670:return PD;case 35667:case 35671:return zD;case 35668:case 35672:return BD;case 35669:case 35673:return FD;case 5125:return HD;case 36294:return VD;case 36295:return GD;case 36296:return kD;case 35678:case 36198:case 36298:case 36306:case 35682:return XD;case 35679:case 36299:case 36307:return WD;case 35680:case 36300:case 36308:case 36293:return qD;case 36289:case 36303:case 36311:case 36292:return YD}}var Tv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RD(n.type)}},Av=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZD(n.type)}},wv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Ev=/(\w+)(\])?(\[|\.)?/g;function qb(e,t){e.seq.push(t),e.map[t.id]=t}function JD(e,t,n){let i=e.name,s=i.length;for(Ev.lastIndex=0;;){let a=Ev.exec(i),r=Ev.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){qb(n,c===void 0?new Tv(o,e,t):new Av(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new wv(o),qb(n,d)),n=d}}}var Cl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);JD(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Yb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var KD=37297,QD=0;function jD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Zb=new jt;function $D(e){de._getMatrix(Zb,de.workingColorSpace,e);let t=`mat3( ${Zb.elements.map(n=>n.toFixed(4))} )`;switch(de.getTransfer(e)){case Yc:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Jb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+jD(e.getShaderSource(t),o)}else return a}function tN(e,t){let n=$D(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function eN(e,t){let n;switch(t){case hb:n="Linear";break;case fb:n="Reinhard";break;case db:n="Cineon";break;case gd:n="ACESFilmic";break;case mb:n="AgX";break;case gb:n="Neutral";break;case pb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var np=new P;function nN(){de.getLuminanceCoefficients(np);let e=np.x.toFixed(4),t=np.y.toFixed(4),n=np.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_u).join(`
`)}function sN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function aN(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function _u(e){return e!==""}function Kb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rv(e){return e.replace(rN,lN)}var oN=new Map;function lN(e,t){let n=ee[t];if(n===void 0){let i=oN.get(t);if(i!==void 0)n=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rv(n)}var cN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jb(e){return e.replace(cN,uN)}function uN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function $b(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function hN(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Q0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===XM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function fN(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Hr:case Vr:t="ENVMAP_TYPE_CUBE";break;case fu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dN(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Vr:t="ENVMAP_MODE_REFRACTION";break}return t}function pN(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case tv:t="ENVMAP_BLENDING_MULTIPLY";break;case cb:t="ENVMAP_BLENDING_MIX";break;case ub:t="ENVMAP_BLENDING_ADD";break}return t}function mN(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function gN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=hN(n),c=fN(n),u=dN(n),d=pN(n),f=mN(n),p=iN(n),v=sN(a),x=s.createProgram(),m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_u).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_u).join(`
`),h.length>0&&(h+=`
`)):(m=[$b(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_u).join(`
`),h=[$b(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ra?"#define TONE_MAPPING":"",n.toneMapping!==ra?ee.tonemapping_pars_fragment:"",n.toneMapping!==ra?eN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,tN("linearToOutputTexel",n.outputColorSpace),nN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_u).join(`
`)),r=Rv(r),r=Kb(r,n),r=Qb(r,n),o=Rv(o),o=Kb(o,n),o=Qb(o,n),r=jb(r),o=jb(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let y=g+m+r,_=g+h+o,A=Yb(s,s.VERTEX_SHADER,y),w=Yb(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,w),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(U){if(e.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(A)||"",Z=s.getShaderInfoLog(w)||"",K=B.trim(),W=k.trim(),st=Z.trim(),V=!0,lt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,A,w);else{let ft=Jb(s,A,"vertex"),_t=Jb(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+ft+`
`+_t)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(W===""||st==="")&&(lt=!1);lt&&(U.diagnostics={runnable:V,programLog:K,vertexShader:{log:W,prefix:m},fragmentShader:{log:st,prefix:h}})}s.deleteShader(A),s.deleteShader(w),N=new Cl(s,x),E=aN(s,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,KD)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QD++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}var vN=0,Cv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Dv(t),n.set(t,i)),i}},Dv=class{constructor(t){this.id=vN++,this.code=t,this.usedTimes=0}};function _N(e,t,n,i,s,a,r){let o=new ml,l=new Cv,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,U,B,k){let Z=B.fog,K=k.geometry,W=E.isMeshStandardMaterial?B.environment:null,st=(E.isMeshStandardMaterial?n:t).get(E.envMap||W),V=st&&st.mapping===fu?st.image.height:null,lt=v[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=ft!==void 0?ft.length:0,Xt=0;K.morphAttributes.position!==void 0&&(Xt=1),K.morphAttributes.normal!==void 0&&(Xt=2),K.morphAttributes.color!==void 0&&(Xt=3);let oe,xe,qt,Q;if(lt){let fe=Cs[lt];oe=fe.vertexShader,xe=fe.fragmentShader}else oe=E.vertexShader,xe=E.fragmentShader,l.update(E),qt=l.getVertexShaderID(E),Q=l.getFragmentShaderID(E);let et=e.getRenderTarget(),St=e.state.buffers.depth.getReversed(),Ft=k.isInstancedMesh===!0,X=k.isBatchedMesh===!0,Ct=!!E.map,le=!!E.matcap,D=!!st,pe=!!E.aoMap,Ht=!!E.lightMap,Dt=!!E.bumpMap,yt=!!E.normalMap,me=!!E.displacementMap,vt=!!E.emissiveMap,Gt=!!E.metalnessMap,Oe=!!E.roughnessMap,Jt=E.anisotropy>0,T=E.clearcoat>0,S=E.dispersion>0,z=E.iridescence>0,q=E.sheen>0,nt=E.transmission>0,Y=Jt&&!!E.anisotropyMap,Et=T&&!!E.clearcoatMap,ot=T&&!!E.clearcoatNormalMap,Tt=T&&!!E.clearcoatRoughnessMap,At=z&&!!E.iridescenceMap,at=z&&!!E.iridescenceThicknessMap,ut=q&&!!E.sheenColorMap,Ot=q&&!!E.sheenRoughnessMap,wt=!!E.specularMap,dt=!!E.specularColorMap,Yt=!!E.specularIntensityMap,L=nt&&!!E.transmissionMap,rt=nt&&!!E.thicknessMap,ct=!!E.gradientMap,xt=!!E.alphaMap,tt=E.alphaTest>0,$=!!E.alphaHash,bt=!!E.extensions,Lt=ra;E.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Lt=e.toneMapping);let ce={shaderID:lt,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:xe,defines:E.defines,customVertexShaderID:qt,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:X,batchingColor:X&&k._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&k.instanceColor!==null,instancingMorph:Ft&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ir,alphaToCoverage:!!E.alphaToCoverage,map:Ct,matcap:le,envMap:D,envMapMode:D&&st.mapping,envMapCubeUVHeight:V,aoMap:pe,lightMap:Ht,bumpMap:Dt,normalMap:yt,displacementMap:f&&me,emissiveMap:vt,normalMapObjectSpace:yt&&E.normalMapType===xb,normalMapTangentSpace:yt&&E.normalMapType===uv,metalnessMap:Gt,roughnessMap:Oe,anisotropy:Jt,anisotropyMap:Y,clearcoat:T,clearcoatMap:Et,clearcoatNormalMap:ot,clearcoatRoughnessMap:Tt,dispersion:S,iridescence:z,iridescenceMap:At,iridescenceThicknessMap:at,sheen:q,sheenColorMap:ut,sheenRoughnessMap:Ot,specularMap:wt,specularColorMap:dt,specularIntensityMap:Yt,transmission:nt,transmissionMap:L,thicknessMap:rt,gradientMap:ct,opaque:E.transparent===!1&&E.blending===Ur&&E.alphaToCoverage===!1,alphaMap:xt,alphaTest:tt,alphaHash:$,combine:E.combine,mapUv:Ct&&x(E.map.channel),aoMapUv:pe&&x(E.aoMap.channel),lightMapUv:Ht&&x(E.lightMap.channel),bumpMapUv:Dt&&x(E.bumpMap.channel),normalMapUv:yt&&x(E.normalMap.channel),displacementMapUv:me&&x(E.displacementMap.channel),emissiveMapUv:vt&&x(E.emissiveMap.channel),metalnessMapUv:Gt&&x(E.metalnessMap.channel),roughnessMapUv:Oe&&x(E.roughnessMap.channel),anisotropyMapUv:Y&&x(E.anisotropyMap.channel),clearcoatMapUv:Et&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(E.sheenRoughnessMap.channel),specularMapUv:wt&&x(E.specularMap.channel),specularColorMapUv:dt&&x(E.specularColorMap.channel),specularIntensityMapUv:Yt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:rt&&x(E.thicknessMap.channel),alphaMapUv:xt&&x(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(yt||Jt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(Ct||xt),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ct&&E.map.isVideoTexture===!0&&de.getTransfer(E.map.colorSpace)===we,decodeVideoTextureEmissive:vt&&E.emissiveMap.isVideoTexture===!0&&de.getTransfer(E.emissiveMap.colorSpace)===we,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Dn,flipSided:E.side===Cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:bt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&E.extensions.multiDraw===!0||X)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function h(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)b.push(U),b.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(g(b,E),y(b,E),b.push(e.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function g(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){let b=v[E.type],U;if(b){let B=Cs[b];U=Nb.clone(B.uniforms)}else U=E.uniforms;return U}function A(E,b){let U;for(let B=0,k=u.length;B<k;B++){let Z=u[B];if(Z.cacheKey===b){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new gN(e,b,E,a),u.push(U)),U}function w(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:_,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:N}}function yN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function xN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function tE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function eE(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,v,x,m){let h=e[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},e[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=x,h.group=m),t++,h}function o(d,f,p,v,x,m){let h=r(d,f,p,v,x,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function l(d,f,p,v,x,m){let h=r(d,f,p,v,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||xN),i.length>1&&i.sort(f||tE),s.length>1&&s.sort(f||tE)}function u(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function SN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new eE,e.set(i,[r])):s>=a.length?(r=new eE,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function MN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new Zt};break;case"SpotLight":n={position:new P,direction:new P,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function bN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var EN=0;function TN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function AN(e){let t=new MN,n=bN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new Ge,r=new Ge;function o(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,x=0,m=0,h=0,g=0,y=0,_=0,A=0,w=0,C=0;c.sort(TN);for(let E=0,b=c.length;E<b;E++){let U=c[E],B=U.color,k=U.intensity,Z=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=B.r*k,d+=B.g*k,f+=B.b*k;else if(U.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],k);C++}else if(U.isDirectionalLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let st=U.shadow,V=n.get(U);V.shadowIntensity=st.intensity,V.shadowBias=st.bias,V.shadowNormalBias=st.normalBias,V.shadowRadius=st.radius,V.shadowMapSize=st.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=W,p++}else if(U.isSpotLight){let W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(B).multiplyScalar(k),W.distance=Z,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[x]=W;let st=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,st.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[x]=st.matrix,U.castShadow){let V=n.get(U);V.shadowIntensity=st.intensity,V.shadowBias=st.bias,V.shadowNormalBias=st.normalBias,V.shadowRadius=st.radius,V.shadowMapSize=st.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=K,_++}x++}else if(U.isRectAreaLight){let W=t.get(U);W.color.copy(B).multiplyScalar(k),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=W,m++}else if(U.isPointLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){let st=U.shadow,V=n.get(U);V.shadowIntensity=st.intensity,V.shadowBias=st.bias,V.shadowNormalBias=st.normalBias,V.shadowRadius=st.radius,V.shadowMapSize=st.mapSize,V.shadowCameraNear=st.camera.near,V.shadowCameraFar=st.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=U.shadow.matrix,y++}i.point[v]=W,v++}else if(U.isHemisphereLight){let W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(k),W.groundColor.copy(U.groundColor).multiplyScalar(k),i.hemi[h]=W,h++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==p||N.pointLength!==v||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==g||N.numPointShadows!==y||N.numSpotShadows!==_||N.numSpotMaps!==A||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.directionalLength=p,N.pointLength=v,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=g,N.numPointShadows=y,N.numSpotShadows=_,N.numSpotMaps=A,N.numLightProbes=C,i.version=EN++)}function l(c,u){let d=0,f=0,p=0,v=0,x=0,m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){let y=c[h];if(y.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let _=i.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),v++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function nE(e){let t=new AN(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function wN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new nE(e),t.set(s,[o])):a>=r.length?(o=new nE(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var RN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CN=`uniform sampler2D shadow_pass;
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
}`;function DN(e,t,n){let i=new yl,s=new Kt,a=new Kt,r=new Ae,o=new Kf({depthPacking:yb}),l=new Qf,c={},u=n.maxTextureSize,d={[ea]:Cn,[Cn]:ea,[Dn]:Dn},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:RN,fragmentShader:CN}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new Qn;v.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q0;let h=this.type;this.render=function(w,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=e.getRenderTarget(),b=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),B=e.state;B.setBlending(aa),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=h!==Wi&&this.type===Wi,Z=h===Wi&&this.type!==Wi;for(let K=0,W=w.length;K<W;K++){let st=w[K],V=st.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let lt=V.getFrameExtents();if(s.multiply(lt),a.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/lt.x),s.x=a.x*lt.x,V.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/lt.y),s.y=a.y*lt.y,V.mapSize.y=a.y)),V.map===null||k===!0||Z===!0){let _t=this.type!==Wi?{minFilter:_n,magFilter:_n}:{};V.map!==null&&V.map.dispose(),V.map=new As(s.x,s.y,_t),V.map.texture.name=st.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();let ft=V.getViewportCount();for(let _t=0;_t<ft;_t++){let Xt=V.getViewport(_t);r.set(a.x*Xt.x,a.y*Xt.y,a.x*Xt.z,a.y*Xt.w),B.viewport(r),V.updateMatrices(st,_t),i=V.getFrustum(),_(C,N,V.camera,st,this.type)}V.isPointLightShadow!==!0&&this.type===Wi&&g(V,N),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(E,b,U)};function g(w,C){let N=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new As(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(C,null,N,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(C,null,N,p,x,null)}function y(w,C,N,E){let b=null,U=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)b=U;else if(b=N.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=b.uuid,k=C.uuid,Z=c[B];Z===void 0&&(Z={},c[B]=Z);let K=Z[k];K===void 0&&(K=b.clone(),Z[k]=K,C.addEventListener("dispose",A)),b=K}if(b.visible=C.visible,b.wireframe=C.wireframe,E===Wi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=e.properties.get(b);B.light=N}return b}function _(w,C,N,E,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Wi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);let k=t.update(w),Z=w.material;if(Array.isArray(Z)){let K=k.groups;for(let W=0,st=K.length;W<st;W++){let V=K[W],lt=Z[V.materialIndex];if(lt&&lt.visible){let ft=y(w,lt,E,b);w.onBeforeShadow(e,w,C,N,k,ft,V),e.renderBufferDirect(N,null,k,ft,w,V),w.onAfterShadow(e,w,C,N,k,ft,V)}}}else if(Z.visible){let K=y(w,Z,E,b);w.onBeforeShadow(e,w,C,N,k,K,null),e.renderBufferDirect(N,null,k,K,w,null),w.onAfterShadow(e,w,C,N,k,K,null)}}let B=w.children;for(let k=0,Z=B.length;k<Z;k++)_(B[k],C,N,E,b)}function A(w){w.target.removeEventListener("dispose",A);for(let N in c){let E=c[N],b=w.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var NN={[cd]:ud,[hd]:pd,[fd]:md,[Lr]:dd,[ud]:cd,[pd]:hd,[md]:fd,[dd]:Lr};function UN(e,t){function n(){let L=!1,rt=new Ae,ct=null,xt=new Ae(0,0,0,0);return{setMask:function(tt){ct!==tt&&!L&&(e.colorMask(tt,tt,tt,tt),ct=tt)},setLocked:function(tt){L=tt},setClear:function(tt,$,bt,Lt,ce){ce===!0&&(tt*=Lt,$*=Lt,bt*=Lt),rt.set(tt,$,bt,Lt),xt.equals(rt)===!1&&(e.clearColor(tt,$,bt,Lt),xt.copy(rt))},reset:function(){L=!1,ct=null,xt.set(-1,0,0,0)}}}function i(){let L=!1,rt=!1,ct=null,xt=null,tt=null;return{setReversed:function($){if(rt!==$){let bt=t.get("EXT_clip_control");$?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),rt=$;let Lt=tt;tt=null,this.setClear(Lt)}},getReversed:function(){return rt},setTest:function($){$?et(e.DEPTH_TEST):St(e.DEPTH_TEST)},setMask:function($){ct!==$&&!L&&(e.depthMask($),ct=$)},setFunc:function($){if(rt&&($=NN[$]),xt!==$){switch($){case cd:e.depthFunc(e.NEVER);break;case ud:e.depthFunc(e.ALWAYS);break;case hd:e.depthFunc(e.LESS);break;case Lr:e.depthFunc(e.LEQUAL);break;case fd:e.depthFunc(e.EQUAL);break;case dd:e.depthFunc(e.GEQUAL);break;case pd:e.depthFunc(e.GREATER);break;case md:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}xt=$}},setLocked:function($){L=$},setClear:function($){tt!==$&&(rt&&($=1-$),e.clearDepth($),tt=$)},reset:function(){L=!1,ct=null,xt=null,tt=null,rt=!1}}}function s(){let L=!1,rt=null,ct=null,xt=null,tt=null,$=null,bt=null,Lt=null,ce=null;return{setTest:function(fe){L||(fe?et(e.STENCIL_TEST):St(e.STENCIL_TEST))},setMask:function(fe){rt!==fe&&!L&&(e.stencilMask(fe),rt=fe)},setFunc:function(fe,Ri,ui){(ct!==fe||xt!==Ri||tt!==ui)&&(e.stencilFunc(fe,Ri,ui),ct=fe,xt=Ri,tt=ui)},setOp:function(fe,Ri,ui){($!==fe||bt!==Ri||Lt!==ui)&&(e.stencilOp(fe,Ri,ui),$=fe,bt=Ri,Lt=ui)},setLocked:function(fe){L=fe},setClear:function(fe){ce!==fe&&(e.clearStencil(fe),ce=fe)},reset:function(){L=!1,rt=null,ct=null,xt=null,tt=null,$=null,bt=null,Lt=null,ce=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],v=null,x=!1,m=null,h=null,g=null,y=null,_=null,A=null,w=null,C=new Zt(0,0,0),N=0,E=!1,b=null,U=null,B=null,k=null,Z=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,st=0,V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=st>=1):V.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=st>=2);let lt=null,ft={},_t=e.getParameter(e.SCISSOR_BOX),Xt=e.getParameter(e.VIEWPORT),oe=new Ae().fromArray(_t),xe=new Ae().fromArray(Xt);function qt(L,rt,ct,xt){let tt=new Uint8Array(4),$=e.createTexture();e.bindTexture(L,$),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let bt=0;bt<ct;bt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(rt,0,e.RGBA,1,1,xt,0,e.RGBA,e.UNSIGNED_BYTE,tt):e.texImage2D(rt+bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,tt);return $}let Q={};Q[e.TEXTURE_2D]=qt(e.TEXTURE_2D,e.TEXTURE_2D,1),Q[e.TEXTURE_CUBE_MAP]=qt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[e.TEXTURE_2D_ARRAY]=qt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Q[e.TEXTURE_3D]=qt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(Lr),Dt(!1),yt(K0),et(e.CULL_FACE),pe(aa);function et(L){u[L]!==!0&&(e.enable(L),u[L]=!0)}function St(L){u[L]!==!1&&(e.disable(L),u[L]=!1)}function Ft(L,rt){return d[L]!==rt?(e.bindFramebuffer(L,rt),d[L]=rt,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=rt),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=rt),!0):!1}function X(L,rt){let ct=p,xt=!1;if(L){ct=f.get(rt),ct===void 0&&(ct=[],f.set(rt,ct));let tt=L.textures;if(ct.length!==tt.length||ct[0]!==e.COLOR_ATTACHMENT0){for(let $=0,bt=tt.length;$<bt;$++)ct[$]=e.COLOR_ATTACHMENT0+$;ct.length=tt.length,xt=!0}}else ct[0]!==e.BACK&&(ct[0]=e.BACK,xt=!0);xt&&e.drawBuffers(ct)}function Ct(L){return v!==L?(e.useProgram(L),v=L,!0):!1}let le={[Za]:e.FUNC_ADD,[qM]:e.FUNC_SUBTRACT,[YM]:e.FUNC_REVERSE_SUBTRACT};le[ZM]=e.MIN,le[JM]=e.MAX;let D={[KM]:e.ZERO,[QM]:e.ONE,[jM]:e.SRC_COLOR,[Bf]:e.SRC_ALPHA,[sb]:e.SRC_ALPHA_SATURATE,[nb]:e.DST_COLOR,[tb]:e.DST_ALPHA,[$M]:e.ONE_MINUS_SRC_COLOR,[Ff]:e.ONE_MINUS_SRC_ALPHA,[ib]:e.ONE_MINUS_DST_COLOR,[eb]:e.ONE_MINUS_DST_ALPHA,[ab]:e.CONSTANT_COLOR,[rb]:e.ONE_MINUS_CONSTANT_COLOR,[ob]:e.CONSTANT_ALPHA,[lb]:e.ONE_MINUS_CONSTANT_ALPHA};function pe(L,rt,ct,xt,tt,$,bt,Lt,ce,fe){if(L===aa){x===!0&&(St(e.BLEND),x=!1);return}if(x===!1&&(et(e.BLEND),x=!0),L!==WM){if(L!==m||fe!==E){if((h!==Za||_!==Za)&&(e.blendEquation(e.FUNC_ADD),h=Za,_=Za),fe)switch(L){case Ur:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fr:e.blendFunc(e.ONE,e.ONE);break;case j0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case $0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ur:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case j0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,y=null,A=null,w=null,C.set(0,0,0),N=0,m=L,E=fe}return}tt=tt||rt,$=$||ct,bt=bt||xt,(rt!==h||tt!==_)&&(e.blendEquationSeparate(le[rt],le[tt]),h=rt,_=tt),(ct!==g||xt!==y||$!==A||bt!==w)&&(e.blendFuncSeparate(D[ct],D[xt],D[$],D[bt]),g=ct,y=xt,A=$,w=bt),(Lt.equals(C)===!1||ce!==N)&&(e.blendColor(Lt.r,Lt.g,Lt.b,ce),C.copy(Lt),N=ce),m=L,E=!1}function Ht(L,rt){L.side===Dn?St(e.CULL_FACE):et(e.CULL_FACE);let ct=L.side===Cn;rt&&(ct=!ct),Dt(ct),L.blending===Ur&&L.transparent===!1?pe(aa):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let xt=L.stencilWrite;o.setTest(xt),xt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):St(e.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(L){b!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),b=L)}function yt(L){L!==GM?(et(e.CULL_FACE),L!==U&&(L===K0?e.cullFace(e.BACK):L===kM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):St(e.CULL_FACE),U=L}function me(L){L!==B&&(W&&e.lineWidth(L),B=L)}function vt(L,rt,ct){L?(et(e.POLYGON_OFFSET_FILL),(k!==rt||Z!==ct)&&(e.polygonOffset(rt,ct),k=rt,Z=ct)):St(e.POLYGON_OFFSET_FILL)}function Gt(L){L?et(e.SCISSOR_TEST):St(e.SCISSOR_TEST)}function Oe(L){L===void 0&&(L=e.TEXTURE0+K-1),lt!==L&&(e.activeTexture(L),lt=L)}function Jt(L,rt,ct){ct===void 0&&(lt===null?ct=e.TEXTURE0+K-1:ct=lt);let xt=ft[ct];xt===void 0&&(xt={type:void 0,texture:void 0},ft[ct]=xt),(xt.type!==L||xt.texture!==rt)&&(lt!==ct&&(e.activeTexture(ct),lt=ct),e.bindTexture(L,rt||Q[L]),xt.type=L,xt.texture=rt)}function T(){let L=ft[lt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(L){oe.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Ot(L){xe.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),xe.copy(L))}function wt(L,rt){let ct=c.get(rt);ct===void 0&&(ct=new WeakMap,c.set(rt,ct));let xt=ct.get(L);xt===void 0&&(xt=e.getUniformBlockIndex(rt,L.name),ct.set(L,xt))}function dt(L,rt){let xt=c.get(rt).get(L);l.get(rt)!==xt&&(e.uniformBlockBinding(rt,xt,L.__bindingPointIndex),l.set(rt,xt))}function Yt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},lt=null,ft={},d={},f=new WeakMap,p=[],v=null,x=!1,m=null,h=null,g=null,y=null,_=null,A=null,w=null,C=new Zt(0,0,0),N=0,E=!1,b=null,U=null,B=null,k=null,Z=null,oe.set(0,0,e.canvas.width,e.canvas.height),xe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:St,bindFramebuffer:Ft,drawBuffers:X,useProgram:Ct,setBlending:pe,setMaterial:Ht,setFlipSided:Dt,setCullFace:yt,setLineWidth:me,setPolygonOffset:vt,setScissorTest:Gt,activeTexture:Oe,bindTexture:Jt,unbindTexture:T,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:At,texImage3D:at,updateUBOMapping:wt,uniformBlockBinding:dt,texStorage2D:ot,texStorage3D:Tt,texSubImage2D:q,texSubImage3D:nt,compressedTexSubImage2D:Y,compressedTexSubImage3D:Et,scissor:ut,viewport:Ot,reset:Yt}}function LN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return p?new OffscreenCanvas(T,S):Jc("canvas")}function x(T,S,z){let q=1,nt=Jt(T);if((nt.width>z||nt.height>z)&&(q=z/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor(q*nt.width),Et=Math.floor(q*nt.height);d===void 0&&(d=v(Y,Et));let ot=S?v(Y,Et):d;return ot.width=Y,ot.height=Et,ot.getContext("2d").drawImage(T,0,0,Y,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Y+"x"+Et+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){e.generateMipmap(T)}function g(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(T,S,z,q,nt=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=S;if(S===e.RED&&(z===e.FLOAT&&(Y=e.R32F),z===e.HALF_FLOAT&&(Y=e.R16F),z===e.UNSIGNED_BYTE&&(Y=e.R8)),S===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.R8UI),z===e.UNSIGNED_SHORT&&(Y=e.R16UI),z===e.UNSIGNED_INT&&(Y=e.R32UI),z===e.BYTE&&(Y=e.R8I),z===e.SHORT&&(Y=e.R16I),z===e.INT&&(Y=e.R32I)),S===e.RG&&(z===e.FLOAT&&(Y=e.RG32F),z===e.HALF_FLOAT&&(Y=e.RG16F),z===e.UNSIGNED_BYTE&&(Y=e.RG8)),S===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RG8UI),z===e.UNSIGNED_SHORT&&(Y=e.RG16UI),z===e.UNSIGNED_INT&&(Y=e.RG32UI),z===e.BYTE&&(Y=e.RG8I),z===e.SHORT&&(Y=e.RG16I),z===e.INT&&(Y=e.RG32I)),S===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),z===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),z===e.UNSIGNED_INT&&(Y=e.RGB32UI),z===e.BYTE&&(Y=e.RGB8I),z===e.SHORT&&(Y=e.RGB16I),z===e.INT&&(Y=e.RGB32I)),S===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),z===e.UNSIGNED_INT&&(Y=e.RGBA32UI),z===e.BYTE&&(Y=e.RGBA8I),z===e.SHORT&&(Y=e.RGBA16I),z===e.INT&&(Y=e.RGBA32I)),S===e.RGB&&(z===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),S===e.RGBA){let Et=nt?Yc:de.getTransfer(q);z===e.FLOAT&&(Y=e.RGBA32F),z===e.HALF_FLOAT&&(Y=e.RGBA16F),z===e.UNSIGNED_BYTE&&(Y=Et===we?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(T,S){let z;return T?S===null||S===$a||S===Tl?z=e.DEPTH24_STENCIL8:S===Rs?z=e.DEPTH32F_STENCIL8:S===bl&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$a||S===Tl?z=e.DEPTH_COMPONENT24:S===Rs?z=e.DEPTH_COMPONENT32F:S===bl&&(z=e.DEPTH_COMPONENT16),z}function A(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==Rn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){let S=T.target;S.removeEventListener("dispose",w),N(S),S.isVideoTexture&&u.delete(S)}function C(T){let S=T.target;S.removeEventListener("dispose",C),b(S)}function N(T){let S=i.get(T);if(S.__webglInit===void 0)return;let z=T.source,q=f.get(z);if(q){let nt=q[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(T),Object.keys(q).length===0&&f.delete(z)}i.remove(T)}function E(T){let S=i.get(T);e.deleteTexture(S.__webglTexture);let z=T.source,q=f.get(z);delete q[S.__cacheKey],r.memory.textures--}function b(T){let S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let nt=0;nt<S.__webglFramebuffer[q].length;nt++)e.deleteFramebuffer(S.__webglFramebuffer[q][nt]);else e.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)e.deleteFramebuffer(S.__webglFramebuffer[q]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=T.textures;for(let q=0,nt=z.length;q<nt;q++){let Y=i.get(z[q]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),r.memory.textures--),i.remove(z[q])}i.remove(T)}let U=0;function B(){U=0}function k(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function Z(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function K(T,S){let z=i.get(T);if(T.isVideoTexture&&Gt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(z,T,S);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+S)}function W(T,S){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Q(z,T,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+S)}function st(T,S){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Q(z,T,S);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+S)}function V(T,S){let z=i.get(T);if(T.version>0&&z.__version!==T.version){et(z,T,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+S)}let lt={[Hf]:e.REPEAT,[Ya]:e.CLAMP_TO_EDGE,[Vf]:e.MIRRORED_REPEAT},ft={[_n]:e.NEAREST,[vb]:e.NEAREST_MIPMAP_NEAREST,[du]:e.NEAREST_MIPMAP_LINEAR,[Rn]:e.LINEAR,[yd]:e.LINEAR_MIPMAP_NEAREST,[rs]:e.LINEAR_MIPMAP_LINEAR},_t={[Sb]:e.NEVER,[wb]:e.ALWAYS,[Mb]:e.LESS,[hv]:e.LEQUAL,[bb]:e.EQUAL,[Ab]:e.GEQUAL,[Eb]:e.GREATER,[Tb]:e.NOTEQUAL};function Xt(T,S){if(S.type===Rs&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Rn||S.magFilter===yd||S.magFilter===du||S.magFilter===rs||S.minFilter===Rn||S.minFilter===yd||S.minFilter===du||S.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,lt[S.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,lt[S.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,lt[S.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,ft[S.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_n||S.minFilter!==du&&S.minFilter!==rs||S.type===Rs&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function oe(T,S){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));let q=S.source,nt=f.get(q);nt===void 0&&(nt={},f.set(q,nt));let Y=Z(S);if(Y!==T.__cacheKey){nt[Y]===void 0&&(nt[Y]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),nt[Y].usedTimes++;let Et=nt[T.__cacheKey];Et!==void 0&&(nt[T.__cacheKey].usedTimes--,Et.usedTimes===0&&E(S)),T.__cacheKey=Y,T.__webglTexture=nt[Y].texture}return z}function xe(T,S,z){return Math.floor(Math.floor(T/z)/S)}function qt(T,S,z,q){let Y=T.updateRanges;if(Y.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,z,q,S.data);else{Y.sort((at,ut)=>at.start-ut.start);let Et=0;for(let at=1;at<Y.length;at++){let ut=Y[Et],Ot=Y[at],wt=ut.start+ut.count,dt=xe(Ot.start,S.width,4),Yt=xe(ut.start,S.width,4);Ot.start<=wt+1&&dt===Yt&&xe(Ot.start+Ot.count-1,S.width,4)===dt?ut.count=Math.max(ut.count,Ot.start+Ot.count-ut.start):(++Et,Y[Et]=Ot)}Y.length=Et+1;let ot=e.getParameter(e.UNPACK_ROW_LENGTH),Tt=e.getParameter(e.UNPACK_SKIP_PIXELS),At=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let at=0,ut=Y.length;at<ut;at++){let Ot=Y[at],wt=Math.floor(Ot.start/4),dt=Math.ceil(Ot.count/4),Yt=wt%S.width,L=Math.floor(wt/S.width),rt=dt,ct=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Yt,L,rt,ct,z,q,S.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(e.UNPACK_SKIP_ROWS,At)}}function Q(T,S,z){let q=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=e.TEXTURE_3D);let nt=oe(T,S),Y=S.source;n.bindTexture(q,T.__webglTexture,e.TEXTURE0+z);let Et=i.get(Y);if(Y.version!==Et.__version||nt===!0){n.activeTexture(e.TEXTURE0+z);let ot=de.getPrimaries(de.workingColorSpace),Tt=S.colorSpace===oa?null:de.getPrimaries(S.colorSpace),At=S.colorSpace===oa||ot===Tt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let at=x(S.image,!1,s.maxTextureSize);at=Oe(S,at);let ut=a.convert(S.format,S.colorSpace),Ot=a.convert(S.type),wt=y(S.internalFormat,ut,Ot,S.colorSpace,S.isVideoTexture);Xt(q,S);let dt,Yt=S.mipmaps,L=S.isVideoTexture!==!0,rt=Et.__version===void 0||nt===!0,ct=Y.dataReady,xt=A(S,at);if(S.isDepthTexture)wt=_(S.format===Al,S.type),rt&&(L?n.texStorage2D(e.TEXTURE_2D,1,wt,at.width,at.height):n.texImage2D(e.TEXTURE_2D,0,wt,at.width,at.height,0,ut,Ot,null));else if(S.isDataTexture)if(Yt.length>0){L&&rt&&n.texStorage2D(e.TEXTURE_2D,xt,wt,Yt[0].width,Yt[0].height);for(let tt=0,$=Yt.length;tt<$;tt++)dt=Yt[tt],L?ct&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,dt.width,dt.height,ut,Ot,dt.data):n.texImage2D(e.TEXTURE_2D,tt,wt,dt.width,dt.height,0,ut,Ot,dt.data);S.generateMipmaps=!1}else L?(rt&&n.texStorage2D(e.TEXTURE_2D,xt,wt,at.width,at.height),ct&&qt(S,at,ut,Ot)):n.texImage2D(e.TEXTURE_2D,0,wt,at.width,at.height,0,ut,Ot,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,xt,wt,Yt[0].width,Yt[0].height,at.depth);for(let tt=0,$=Yt.length;tt<$;tt++)if(dt=Yt[tt],S.format!==qi)if(ut!==null)if(L){if(ct)if(S.layerUpdates.size>0){let bt=_v(dt.width,dt.height,S.format,S.type);for(let Lt of S.layerUpdates){let ce=dt.data.subarray(Lt*bt/dt.data.BYTES_PER_ELEMENT,(Lt+1)*bt/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,Lt,dt.width,dt.height,1,ut,ce)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,at.depth,ut,dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,tt,wt,dt.width,dt.height,at.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ct&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,at.depth,ut,Ot,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,tt,wt,dt.width,dt.height,at.depth,0,ut,Ot,dt.data)}else{L&&rt&&n.texStorage2D(e.TEXTURE_2D,xt,wt,Yt[0].width,Yt[0].height);for(let tt=0,$=Yt.length;tt<$;tt++)dt=Yt[tt],S.format!==qi?ut!==null?L?ct&&n.compressedTexSubImage2D(e.TEXTURE_2D,tt,0,0,dt.width,dt.height,ut,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,tt,wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ct&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,dt.width,dt.height,ut,Ot,dt.data):n.texImage2D(e.TEXTURE_2D,tt,wt,dt.width,dt.height,0,ut,Ot,dt.data)}else if(S.isDataArrayTexture)if(L){if(rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,xt,wt,at.width,at.height,at.depth),ct)if(S.layerUpdates.size>0){let tt=_v(at.width,at.height,S.format,S.type);for(let $ of S.layerUpdates){let bt=at.data.subarray($*tt/at.data.BYTES_PER_ELEMENT,($+1)*tt/at.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,at.width,at.height,1,ut,Ot,bt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,ut,Ot,at.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,wt,at.width,at.height,at.depth,0,ut,Ot,at.data);else if(S.isData3DTexture)L?(rt&&n.texStorage3D(e.TEXTURE_3D,xt,wt,at.width,at.height,at.depth),ct&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,ut,Ot,at.data)):n.texImage3D(e.TEXTURE_3D,0,wt,at.width,at.height,at.depth,0,ut,Ot,at.data);else if(S.isFramebufferTexture){if(rt)if(L)n.texStorage2D(e.TEXTURE_2D,xt,wt,at.width,at.height);else{let tt=at.width,$=at.height;for(let bt=0;bt<xt;bt++)n.texImage2D(e.TEXTURE_2D,bt,wt,tt,$,0,ut,Ot,null),tt>>=1,$>>=1}}else if(Yt.length>0){if(L&&rt){let tt=Jt(Yt[0]);n.texStorage2D(e.TEXTURE_2D,xt,wt,tt.width,tt.height)}for(let tt=0,$=Yt.length;tt<$;tt++)dt=Yt[tt],L?ct&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ut,Ot,dt):n.texImage2D(e.TEXTURE_2D,tt,wt,ut,Ot,dt);S.generateMipmaps=!1}else if(L){if(rt){let tt=Jt(at);n.texStorage2D(e.TEXTURE_2D,xt,wt,tt.width,tt.height)}ct&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,Ot,at)}else n.texImage2D(e.TEXTURE_2D,0,wt,ut,Ot,at);m(S)&&h(q),Et.__version=Y.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function et(T,S,z){if(S.image.length!==6)return;let q=oe(T,S),nt=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+z);let Y=i.get(nt);if(nt.version!==Y.__version||q===!0){n.activeTexture(e.TEXTURE0+z);let Et=de.getPrimaries(de.workingColorSpace),ot=S.colorSpace===oa?null:de.getPrimaries(S.colorSpace),Tt=S.colorSpace===oa||Et===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let At=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let $=0;$<6;$++)!At&&!at?ut[$]=x(S.image[$],!0,s.maxCubemapSize):ut[$]=at?S.image[$].image:S.image[$],ut[$]=Oe(S,ut[$]);let Ot=ut[0],wt=a.convert(S.format,S.colorSpace),dt=a.convert(S.type),Yt=y(S.internalFormat,wt,dt,S.colorSpace),L=S.isVideoTexture!==!0,rt=Y.__version===void 0||q===!0,ct=nt.dataReady,xt=A(S,Ot);Xt(e.TEXTURE_CUBE_MAP,S);let tt;if(At){L&&rt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,Yt,Ot.width,Ot.height);for(let $=0;$<6;$++){tt=ut[$].mipmaps;for(let bt=0;bt<tt.length;bt++){let Lt=tt[bt];S.format!==qi?wt!==null?L?ct&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,0,0,Lt.width,Lt.height,wt,Lt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,Yt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,0,0,Lt.width,Lt.height,wt,dt,Lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,Yt,Lt.width,Lt.height,0,wt,dt,Lt.data)}}}else{if(tt=S.mipmaps,L&&rt){tt.length>0&&xt++;let $=Jt(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,Yt,$.width,$.height)}for(let $=0;$<6;$++)if(at){L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ut[$].width,ut[$].height,wt,dt,ut[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,ut[$].width,ut[$].height,0,wt,dt,ut[$].data);for(let bt=0;bt<tt.length;bt++){let ce=tt[bt].image[$].image;L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,0,0,ce.width,ce.height,wt,dt,ce.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,Yt,ce.width,ce.height,0,wt,dt,ce.data)}}else{L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,wt,dt,ut[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,wt,dt,ut[$]);for(let bt=0;bt<tt.length;bt++){let Lt=tt[bt];L?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,0,0,wt,dt,Lt.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,Yt,wt,dt,Lt.image[$])}}}m(S)&&h(e.TEXTURE_CUBE_MAP),Y.__version=nt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function St(T,S,z,q,nt,Y){let Et=a.convert(z.format,z.colorSpace),ot=a.convert(z.type),Tt=y(z.internalFormat,Et,ot,z.colorSpace),At=i.get(S),at=i.get(z);if(at.__renderTarget=S,!At.__hasExternalTextures){let ut=Math.max(1,S.width>>Y),Ot=Math.max(1,S.height>>Y);nt===e.TEXTURE_3D||nt===e.TEXTURE_2D_ARRAY?n.texImage3D(nt,Y,Tt,ut,Ot,S.depth,0,Et,ot,null):n.texImage2D(nt,Y,Tt,ut,Ot,0,Et,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,nt,at.__webglTexture,0,me(S)):(nt===e.TEXTURE_2D||nt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,nt,at.__webglTexture,Y),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ft(T,S,z){if(e.bindRenderbuffer(e.RENDERBUFFER,T),S.depthBuffer){let q=S.depthTexture,nt=q&&q.isDepthTexture?q.type:null,Y=_(S.stencilBuffer,nt),Et=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=me(S);vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,Y,S.width,S.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Et,e.RENDERBUFFER,T)}else{let q=S.textures;for(let nt=0;nt<q.length;nt++){let Y=q[nt],Et=a.convert(Y.format,Y.colorSpace),ot=a.convert(Y.type),Tt=y(Y.internalFormat,Et,ot,Y.colorSpace),At=me(S);z&&vt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,At,Tt,S.width,S.height):vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,At,Tt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Tt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function X(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);let nt=q.__webglTexture,Y=me(S);if(S.depthTexture.format===ul)vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0);else if(S.depthTexture.format===Al)vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ct(T){let S=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=q}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?X(S.__webglFramebuffer[0],T):X(S.__webglFramebuffer,T)}else if(z){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=e.createRenderbuffer(),Ft(S.__webglDepthbuffer[q],T,!1);else{let nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,Y)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Ft(S.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,Y)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(T,S,z){let q=i.get(T);S!==void 0&&St(q.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&Ct(T)}function D(T){let S=T.texture,z=i.get(T),q=i.get(S);T.addEventListener("dispose",C);let nt=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=S.version,r.memory.textures++),Y){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)z.__webglFramebuffer[ot][Tt]=e.createFramebuffer()}else z.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)z.__webglFramebuffer[ot]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Et)for(let ot=0,Tt=nt.length;ot<Tt;ot++){let At=i.get(nt[ot]);At.__webglTexture===void 0&&(At.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&vt(T)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<nt.length;ot++){let Tt=nt[ot];z.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);let At=a.convert(Tt.format,Tt.colorSpace),at=a.convert(Tt.type),ut=y(Tt.internalFormat,At,at,Tt.colorSpace,T.isXRRenderTarget===!0),Ot=me(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ot,ut,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Ft(z.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Xt(e.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)St(z.__webglFramebuffer[ot][Tt],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt);else St(z.__webglFramebuffer[ot],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&h(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Et){for(let ot=0,Tt=nt.length;ot<Tt;ot++){let At=nt[ot],at=i.get(At),ut=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,at.__webglTexture),Xt(ut,At),St(z.__webglFramebuffer,T,At,e.COLOR_ATTACHMENT0+ot,ut,0),m(At)&&h(ut)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,q.__webglTexture),Xt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)St(z.__webglFramebuffer[Tt],T,S,e.COLOR_ATTACHMENT0,ot,Tt);else St(z.__webglFramebuffer,T,S,e.COLOR_ATTACHMENT0,ot,0);m(S)&&h(ot),n.unbindTexture()}T.depthBuffer&&Ct(T)}function pe(T){let S=T.textures;for(let z=0,q=S.length;z<q;z++){let nt=S[z];if(m(nt)){let Y=g(T),Et=i.get(nt).__webglTexture;n.bindTexture(Y,Et),h(Y),n.unbindTexture()}}}let Ht=[],Dt=[];function yt(T){if(T.samples>0){if(vt(T)===!1){let S=T.textures,z=T.width,q=T.height,nt=e.COLOR_BUFFER_BIT,Y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Et=i.get(T),ot=S.length>1;if(ot)for(let At=0;At<S.length;At++)n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+At,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+At,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let Tt=T.texture.mipmaps;Tt&&Tt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let At=0;At<S.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Et.__webglColorRenderbuffer[At]);let at=i.get(S[At]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,at,0)}e.blitFramebuffer(0,0,z,q,0,0,z,q,nt,e.NEAREST),l===!0&&(Ht.length=0,Dt.length=0,Ht.push(e.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ht.push(Y),Dt.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Dt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let At=0;At<S.length;At++){n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+At,e.RENDERBUFFER,Et.__webglColorRenderbuffer[At]);let at=i.get(S[At]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+At,e.TEXTURE_2D,at,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let S=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function me(T){return Math.min(s.maxSamples,T.samples)}function vt(T){let S=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Gt(T){let S=r.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function Oe(T,S){let z=T.colorSpace,q=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Ir&&z!==oa&&(de.getTransfer(z)===we?(q!==qi||nt!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Jt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=st,this.setTextureCube=V,this.rebindTextures=le,this.setupRenderTarget=D,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=St,this.useMultisampledRTT=vt}function IN(e,t){function n(i,s=oa){let a,r=de.getTransfer(s);if(i===os)return e.UNSIGNED_BYTE;if(i===Sd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Md)return e.UNSIGNED_SHORT_5_5_5_1;if(i===sv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===av)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===nv)return e.BYTE;if(i===iv)return e.SHORT;if(i===bl)return e.UNSIGNED_SHORT;if(i===xd)return e.INT;if(i===$a)return e.UNSIGNED_INT;if(i===Rs)return e.FLOAT;if(i===El)return e.HALF_FLOAT;if(i===rv)return e.ALPHA;if(i===ov)return e.RGB;if(i===qi)return e.RGBA;if(i===ul)return e.DEPTH_COMPONENT;if(i===Al)return e.DEPTH_STENCIL;if(i===lv)return e.RED;if(i===bd)return e.RED_INTEGER;if(i===cv)return e.RG;if(i===Ed)return e.RG_INTEGER;if(i===Td)return e.RGBA_INTEGER;if(i===pu||i===mu||i===gu||i===vu)if(r===we)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ad||i===wd||i===Rd||i===Cd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ad)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dd||i===Nd||i===Ud)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Dd||i===Nd)return r===we?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ud)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ld||i===Id||i===Od||i===Pd||i===zd||i===Bd||i===Fd||i===Hd||i===Vd||i===Gd||i===kd||i===Xd||i===Wd||i===qd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ld)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Id)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Od)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qd)return r===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yd||i===Zd||i===Jd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Yd)return r===we?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kd||i===Qd||i===jd||i===$d)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Kd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Qd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$d)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var ON=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PN=`
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

}`,Nv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new su(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new li({vertexShader:ON,fragmentShader:PN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Re(new Hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uv=class extends na{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null,x=typeof XRWebGLBinding<"u",m=new Nv,h={},g=n.getContextAttributes(),y=null,_=null,A=[],w=[],C=new Kt,N=null,E=new wn;E.viewport=new Ae;let b=new wn;b.viewport=new Ae;let U=[E,b],B=new ld,k=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let et=A[Q];return et===void 0&&(et=new gl,A[Q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Q){let et=A[Q];return et===void 0&&(et=new gl,A[Q]=et),et.getGripSpace()},this.getHand=function(Q){let et=A[Q];return et===void 0&&(et=new gl,A[Q]=et),et.getHandSpace()};function K(Q){let et=w.indexOf(Q.inputSource);if(et===-1)return;let St=A[et];St!==void 0&&(St.update(Q.inputSource,Q.frame,c||r),St.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",st);for(let Q=0;Q<A.length;Q++){let et=w[Q];et!==null&&(w[Q]=null,A[Q].disconnect(et))}k=null,Z=null,m.reset();for(let Q in h)delete h[Q];t.setRenderTarget(y),p=null,f=null,d=null,s=null,_=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",W),s.addEventListener("inputsourceschange",st),g.xrCompatible!==!0&&await n.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ft=null,X=null;g.depth&&(X=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=g.stencil?Al:ul,Ft=g.stencil?Tl:$a);let Ct={colorFormat:n.RGBA8,depthFormat:X,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new As(f.textureWidth,f.textureHeight,{format:qi,type:os,depthTexture:new iu(f.textureWidth,f.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let St={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,St),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new As(p.framebufferWidth,p.framebufferHeight,{format:qi,type:os,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Q){for(let et=0;et<Q.removed.length;et++){let St=Q.removed[et],Ft=w.indexOf(St);Ft>=0&&(w[Ft]=null,A[Ft].disconnect(St))}for(let et=0;et<Q.added.length;et++){let St=Q.added[et],Ft=w.indexOf(St);if(Ft===-1){for(let Ct=0;Ct<A.length;Ct++)if(Ct>=w.length){w.push(St),Ft=Ct;break}else if(w[Ct]===null){w[Ct]=St,Ft=Ct;break}if(Ft===-1)break}let X=A[Ft];X&&X.connect(St)}}let V=new P,lt=new P;function ft(Q,et,St){V.setFromMatrixPosition(et.matrixWorld),lt.setFromMatrixPosition(St.matrixWorld);let Ft=V.distanceTo(lt),X=et.projectionMatrix.elements,Ct=St.projectionMatrix.elements,le=X[14]/(X[10]-1),D=X[14]/(X[10]+1),pe=(X[9]+1)/X[5],Ht=(X[9]-1)/X[5],Dt=(X[8]-1)/X[0],yt=(Ct[8]+1)/Ct[0],me=le*Dt,vt=le*yt,Gt=Ft/(-Dt+yt),Oe=Gt*-Dt;if(et.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Oe),Q.translateZ(Gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),X[10]===-1)Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Jt=le+Gt,T=D+Gt,S=me-Oe,z=vt+(Ft-Oe),q=pe*D/T*Jt,nt=Ht*D/T*Jt;Q.projectionMatrix.makePerspective(S,z,q,nt,Jt,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function _t(Q,et){et===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(et.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let et=Q.near,St=Q.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(St=m.depthFar)),B.near=b.near=E.near=et,B.far=b.far=E.far=St,(k!==B.near||Z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,Z=B.far),B.layers.mask=Q.layers.mask|6,E.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;let Ft=Q.parent,X=B.cameras;_t(B,Ft);for(let Ct=0;Ct<X.length;Ct++)_t(X[Ct],Ft);X.length===2?ft(B,E,b):B.projectionMatrix.copy(E.projectionMatrix),Xt(Q,B,Ft)};function Xt(Q,et,St){St===null?Q.matrix.copy(et.matrixWorld):(Q.matrix.copy(St.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(et.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Q){return h[Q]};let oe=null;function xe(Q,et){if(u=et.getViewerPose(c||r),v=et,u!==null){let St=u.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Ft=!1;St.length!==B.cameras.length&&(B.cameras.length=0,Ft=!0);for(let D=0;D<St.length;D++){let pe=St[D],Ht=null;if(p!==null)Ht=p.getViewport(pe);else{let yt=d.getViewSubImage(f,pe);Ht=yt.viewport,D===0&&(t.setRenderTargetTextures(_,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(_))}let Dt=U[D];Dt===void 0&&(Dt=new wn,Dt.layers.enable(D),Dt.viewport=new Ae,U[D]=Dt),Dt.matrix.fromArray(pe.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(pe.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),D===0&&(B.matrix.copy(Dt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ft===!0&&B.cameras.push(Dt)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let D=d.getDepthInformation(St[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(X&&X.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<St.length;D++){let pe=St[D].camera;if(pe){let Ht=h[pe];Ht||(Ht=new su,h[pe]=Ht);let Dt=d.getCameraImage(pe);Ht.sourceTexture=Dt}}}}for(let St=0;St<A.length;St++){let Ft=w[St],X=A[St];Ft!==null&&X!==void 0&&X.update(Ft,et,c||r)}oe&&oe(Q,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),v=null}let qt=new iE;qt.setAnimationLoop(xe),this.setAnimationLoop=function(Q){oe=Q},this.dispose=function(){}}},Xr=new as,zN=new Ge;function BN(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,mv(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,g,y,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),d(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,_)):h.isMeshMatcapMaterial?(a(m,h),v(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Cn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Cn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let g=t.get(h),y=g.envMap,_=g.envMapRotation;y&&(m.envMap.value=y,Xr.copy(_),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(zN.makeRotationFromEuler(Xr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Cn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){let g=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FN(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){let _=y.program;i.uniformBlockBinding(g,_)}function c(g,y){let _=s[g.id];_===void 0&&(v(g),_=u(g),s[g.id]=_,g.addEventListener("dispose",m));let A=y.program;i.updateUBOMapping(g,A);let w=t.render.frame;a[g.id]!==w&&(f(g),a[g.id]=w)}function u(g){let y=d();g.__bindingPointIndex=y;let _=e.createBuffer(),A=g.__size,w=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,A,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,_),_}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let y=s[g.id],_=g.uniforms,A=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let w=0,C=_.length;w<C;w++){let N=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,b=N.length;E<b;E++){let U=N[E];if(p(U,w,E,A)===!0){let B=U.__offset,k=Array.isArray(U.value)?U.value:[U.value],Z=0;for(let K=0;K<k.length;K++){let W=k[K],st=x(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+Z,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,Z),Z+=st.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,y,_,A){let w=g.value,C=y+"_"+_;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{let N=A[C];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return A[C]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function v(g){let y=g.uniforms,_=0,A=16;for(let C=0,N=y.length;C<N;C++){let E=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,U=E.length;b<U;b++){let B=E[b],k=Array.isArray(B.value)?B.value:[B.value];for(let Z=0,K=k.length;Z<K;Z++){let W=k[Z],st=x(W),V=_%A,lt=V%st.boundary,ft=V+lt;_+=lt,ft!==0&&A-ft<st.storage&&(_+=A-ft),B.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=st.storage}}}let w=_%A;return w>0&&(_+=A-w),g.__size=_,g.__cache={},this}function x(g){let y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){let y=g.target;y.removeEventListener("dispose",m);let _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function h(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}var sp=class{constructor(t={}){let{canvas:n=Rb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let v=new Uint32Array(4),x=new Int32Array(4),m=null,h=null,g=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,A=!1;this._outputColorSpace=cn;let w=0,C=0,N=null,E=-1,b=null,U=new Ae,B=new Ae,k=null,Z=new Zt(0),K=0,W=n.width,st=n.height,V=1,lt=null,ft=null,_t=new Ae(0,0,W,st),Xt=new Ae(0,0,W,st),oe=!1,xe=new yl,qt=!1,Q=!1,et=new Ge,St=new P,Ft=new Ae,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function le(){return N===null?V:1}let D=i;function pe(M,I){return n.getContext(M,I)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",xt,!1),n.addEventListener("webglcontextcreationerror",tt,!1),D===null){let I="webgl2";if(D=pe(I,M),D===null)throw pe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ht,Dt,yt,me,vt,Gt,Oe,Jt,T,S,z,q,nt,Y,Et,ot,Tt,At,at,ut,Ot,wt,dt,Yt;function L(){Ht=new iD(D),Ht.init(),wt=new IN(D,Ht),Dt=new K3(D,Ht,t,wt),yt=new UN(D,Ht),Dt.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),me=new rD(D),vt=new yN,Gt=new LN(D,Ht,yt,vt,Dt,wt,me),Oe=new j3(_),Jt=new nD(_),T=new fR(D),dt=new Z3(D,T),S=new sD(D,T,me,dt),z=new lD(D,S,T,me),at=new oD(D,Dt,Gt),ot=new Q3(vt),q=new _N(_,Oe,Jt,Ht,Dt,dt,ot),nt=new BN(_,vt),Y=new SN,Et=new wN(Ht),At=new Y3(_,Oe,Jt,yt,z,p,l),Tt=new DN(_,z,Dt),Yt=new FN(D,me,Dt,yt),ut=new J3(D,Ht,me),Ot=new aD(D,Ht,me),me.programs=q.programs,_.capabilities=Dt,_.extensions=Ht,_.properties=vt,_.renderLists=Y,_.shadowMap=Tt,_.state=yt,_.info=me}L();let rt=new Uv(_,D);this.xr=rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=Ht.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ht.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(W,st,!1))},this.getSize=function(M){return M.set(W,st)},this.setSize=function(M,I,F=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,st=I,n.width=Math.floor(M*V),n.height=Math.floor(I*V),F===!0&&(n.style.width=M+"px",n.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(W*V,st*V).floor()},this.setDrawingBufferSize=function(M,I,F){W=M,st=I,V=F,n.width=Math.floor(M*F),n.height=Math.floor(I*F),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(_t)},this.setViewport=function(M,I,F,H){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,I,F,H),yt.viewport(U.copy(_t).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Xt)},this.setScissor=function(M,I,F,H){M.isVector4?Xt.set(M.x,M.y,M.z,M.w):Xt.set(M,I,F,H),yt.scissor(B.copy(Xt).multiplyScalar(V).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(M){yt.setScissorTest(oe=M)},this.setOpaqueSort=function(M){lt=M},this.setTransparentSort=function(M){ft=M},this.getClearColor=function(M){return M.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,F=!0){let H=0;if(M){let O=!1;if(N!==null){let it=N.texture.format;O=it===Td||it===Ed||it===bd}if(O){let it=N.texture.type,gt=it===os||it===$a||it===bl||it===Tl||it===Sd||it===Md,Mt=At.getClearColor(),mt=At.getClearAlpha(),Pt=Mt.r,Vt=Mt.g,Rt=Mt.b;gt?(v[0]=Pt,v[1]=Vt,v[2]=Rt,v[3]=mt,D.clearBufferuiv(D.COLOR,0,v)):(x[0]=Pt,x[1]=Vt,x[2]=Rt,x[3]=mt,D.clearBufferiv(D.COLOR,0,x))}else H|=D.COLOR_BUFFER_BIT}I&&(H|=D.DEPTH_BUFFER_BIT),F&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",xt,!1),n.removeEventListener("webglcontextcreationerror",tt,!1),At.dispose(),Y.dispose(),Et.dispose(),vt.dispose(),Oe.dispose(),Jt.dispose(),z.dispose(),dt.dispose(),Yt.dispose(),q.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ui),rt.removeEventListener("sessionend",J),ht.stop()};function ct(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let M=me.autoReset,I=Tt.enabled,F=Tt.autoUpdate,H=Tt.needsUpdate,O=Tt.type;L(),me.autoReset=M,Tt.enabled=I,Tt.autoUpdate=F,Tt.needsUpdate=H,Tt.type=O}function tt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $(M){let I=M.target;I.removeEventListener("dispose",$),bt(I)}function bt(M){Lt(M),vt.remove(M)}function Lt(M){let I=vt.get(M).programs;I!==void 0&&(I.forEach(function(F){q.releaseProgram(F)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,F,H,O,it){I===null&&(I=X);let gt=O.isMesh&&O.matrixWorld.determinant()<0,Mt=ca(M,I,F,H,O);yt.setMaterial(H,gt);let mt=F.index,Pt=1;if(H.wireframe===!0){if(mt=S.getWireframeAttribute(F),mt===void 0)return;Pt=2}let Vt=F.drawRange,Rt=F.attributes.position,se=Vt.start*Pt,Ce=(Vt.start+Vt.count)*Pt;it!==null&&(se=Math.max(se,it.start*Pt),Ce=Math.min(Ce,(it.start+it.count)*Pt)),mt!==null?(se=Math.max(se,0),Ce=Math.min(Ce,mt.count)):Rt!=null&&(se=Math.max(se,0),Ce=Math.min(Ce,Rt.count));let Je=Ce-se;if(Je<0||Je===1/0)return;dt.setup(O,H,Mt,F,mt);let He,Ne=ut;if(mt!==null&&(He=T.get(mt),Ne=Ot,Ne.setIndex(He)),O.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*le()),Ne.setMode(D.LINES)):Ne.setMode(D.TRIANGLES);else if(O.isLine){let zt=H.linewidth;zt===void 0&&(zt=1),yt.setLineWidth(zt*le()),O.isLineSegments?Ne.setMode(D.LINES):O.isLineLoop?Ne.setMode(D.LINE_LOOP):Ne.setMode(D.LINE_STRIP)}else O.isPoints?Ne.setMode(D.POINTS):O.isSprite&&Ne.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Ne.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let zt=O._multiDrawStarts,qe=O._multiDrawCounts,ge=O._multiDrawCount,hi=mt?T.get(mt).bytesPerElement:1,Yr=vt.get(H).currentProgram.getUniforms();for(let fi=0;fi<ge;fi++)Yr.setValue(D,"_gl_DrawID",fi),Ne.render(zt[fi]/hi,qe[fi])}else if(O.isInstancedMesh)Ne.renderInstances(se,Je,O.count);else if(F.isInstancedBufferGeometry){let zt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,qe=Math.min(F.instanceCount,zt);Ne.renderInstances(se,Je,qe)}else Ne.render(se,Je)};function ce(M,I,F){M.transparent===!0&&M.side===Dn&&M.forceSinglePass===!1?(M.side=Cn,M.needsUpdate=!0,Un(M,I,F),M.side=ea,M.needsUpdate=!0,Un(M,I,F),M.side=Dn):Un(M,I,F)}this.compile=function(M,I,F=null){F===null&&(F=M),h=Et.get(F),h.init(I),y.push(h),F.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),M!==F&&M.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();let H=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let it=O.material;if(it)if(Array.isArray(it))for(let gt=0;gt<it.length;gt++){let Mt=it[gt];ce(Mt,F,O),H.add(Mt)}else ce(it,F,O),H.add(it)}),h=y.pop(),H},this.compileAsync=function(M,I,F=null){let H=this.compile(M,I,F);return new Promise(O=>{function it(){if(H.forEach(function(gt){vt.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){O(M);return}setTimeout(it,10)}Ht.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let fe=null;function Ri(M){fe&&fe(M)}function ui(){ht.stop()}function J(){ht.start()}let ht=new iE;ht.setAnimationLoop(Ri),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(M){fe=M,rt.setAnimationLoop(M),M===null?ht.stop():ht.start()},rt.addEventListener("sessionstart",ui),rt.addEventListener("sessionend",J),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(I),I=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,I,N),h=Et.get(M,y.length),h.init(I),y.push(h),et.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),xe.setFromProjectionMatrix(et,ss,I.reversedDepth),Q=this.localClippingEnabled,qt=ot.init(this.clippingPlanes,Q),m=Y.get(M,g.length),m.init(),g.push(m),rt.enabled===!0&&rt.isPresenting===!0){let it=_.xr.getDepthSensingMesh();it!==null&&Nt(it,I,-1/0,_.sortObjects)}Nt(M,I,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(lt,ft),Ct=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ct&&At.addToRenderList(m,M),this.info.render.frame++,qt===!0&&ot.beginShadows();let F=h.state.shadowsArray;Tt.render(F,M,I),qt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,O=m.transmissive;if(h.setupLights(),I.isArrayCamera){let it=I.cameras;if(O.length>0)for(let gt=0,Mt=it.length;gt<Mt;gt++){let mt=it[gt];$e(H,O,M,mt)}Ct&&At.render(M);for(let gt=0,Mt=it.length;gt<Mt;gt++){let mt=it[gt];$t(m,M,mt,mt.viewport)}}else O.length>0&&$e(H,O,M,I),Ct&&At.render(M),$t(m,M,I);N!==null&&C===0&&(Gt.updateMultisampleRenderTarget(N),Gt.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(_,M,I),dt.resetDefaultState(),E=-1,b=null,y.pop(),y.length>0?(h=y[y.length-1],qt===!0&&ot.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Nt(M,I,F,H){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||xe.intersectsSprite(M)){H&&Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);let gt=z.update(M),Mt=M.material;Mt.visible&&m.push(M,gt,Mt,F,Ft.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||xe.intersectsObject(M))){let gt=z.update(M),Mt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ft.copy(M.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ft.copy(gt.boundingSphere.center)),Ft.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(Mt)){let mt=gt.groups;for(let Pt=0,Vt=mt.length;Pt<Vt;Pt++){let Rt=mt[Pt],se=Mt[Rt.materialIndex];se&&se.visible&&m.push(M,gt,se,F,Ft.z,Rt)}}else Mt.visible&&m.push(M,gt,Mt,F,Ft.z,null)}}let it=M.children;for(let gt=0,Mt=it.length;gt<Mt;gt++)Nt(it[gt],I,F,H)}function $t(M,I,F,H){let O=M.opaque,it=M.transmissive,gt=M.transparent;h.setupLightsView(F),qt===!0&&ot.setGlobalState(_.clippingPlanes,F),H&&yt.viewport(U.copy(H)),O.length>0&&ke(O,I,F),it.length>0&&ke(it,I,F),gt.length>0&&ke(gt,I,F),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function $e(M,I,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new As(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?El:os,minFilter:rs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let it=h.state.transmissionRenderTarget[H.id],gt=H.viewport||U;it.setSize(gt.z*_.transmissionResolutionScale,gt.w*_.transmissionResolutionScale);let Mt=_.getRenderTarget(),mt=_.getActiveCubeFace(),Pt=_.getActiveMipmapLevel();_.setRenderTarget(it),_.getClearColor(Z),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Ct&&At.render(F);let Vt=_.toneMapping;_.toneMapping=ra;let Rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),qt===!0&&ot.setGlobalState(_.clippingPlanes,H),ke(M,F,H),Gt.updateMultisampleRenderTarget(it),Gt.updateRenderTargetMipmap(it),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Ce=0,Je=I.length;Ce<Je;Ce++){let He=I[Ce],Ne=He.object,zt=He.geometry,qe=He.material,ge=He.group;if(qe.side===Dn&&Ne.layers.test(H.layers)){let hi=qe.side;qe.side=Cn,qe.needsUpdate=!0,ne(Ne,F,H,zt,qe,ge),qe.side=hi,qe.needsUpdate=!0,se=!0}}se===!0&&(Gt.updateMultisampleRenderTarget(it),Gt.updateRenderTargetMipmap(it))}_.setRenderTarget(Mt,mt,Pt),_.setClearColor(Z,K),Rt!==void 0&&(H.viewport=Rt),_.toneMapping=Vt}function ke(M,I,F){let H=I.isScene===!0?I.overrideMaterial:null;for(let O=0,it=M.length;O<it;O++){let gt=M[O],Mt=gt.object,mt=gt.geometry,Pt=gt.group,Vt=gt.material;Vt.allowOverride===!0&&H!==null&&(Vt=H),Mt.layers.test(F.layers)&&ne(Mt,I,F,mt,Vt,Pt)}}function ne(M,I,F,H,O,it){M.onBeforeRender(_,I,F,H,O,it),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(_,I,F,H,M,it),O.transparent===!0&&O.side===Dn&&O.forceSinglePass===!1?(O.side=Cn,O.needsUpdate=!0,_.renderBufferDirect(F,I,H,O,M,it),O.side=ea,O.needsUpdate=!0,_.renderBufferDirect(F,I,H,O,M,it),O.side=Dn):_.renderBufferDirect(F,I,H,O,M,it),M.onAfterRender(_,I,F,H,O,it)}function Un(M,I,F){I.isScene!==!0&&(I=X);let H=vt.get(M),O=h.state.lights,it=h.state.shadowsArray,gt=O.state.version,Mt=q.getParameters(M,O.state,it,I,F),mt=q.getProgramCacheKey(Mt),Pt=H.programs;H.environment=M.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(M.isMeshStandardMaterial?Jt:Oe).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",$),Pt=new Map,H.programs=Pt);let Vt=Pt.get(mt);if(Vt!==void 0){if(H.currentProgram===Vt&&H.lightsStateVersion===gt)return Ci(M,Mt),Vt}else Mt.uniforms=q.getUniforms(M),M.onBeforeCompile(Mt,_),Vt=q.acquireProgram(Mt,mt),Pt.set(mt,Vt),H.uniforms=Mt.uniforms;let Rt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Rt.clippingPlanes=ot.uniform),Ci(M,Mt),H.needsLights=Su(M),H.lightsStateVersion=gt,H.needsLights&&(Rt.ambientLightColor.value=O.state.ambient,Rt.lightProbe.value=O.state.probe,Rt.directionalLights.value=O.state.directional,Rt.directionalLightShadows.value=O.state.directionalShadow,Rt.spotLights.value=O.state.spot,Rt.spotLightShadows.value=O.state.spotShadow,Rt.rectAreaLights.value=O.state.rectArea,Rt.ltc_1.value=O.state.rectAreaLTC1,Rt.ltc_2.value=O.state.rectAreaLTC2,Rt.pointLights.value=O.state.point,Rt.pointLightShadows.value=O.state.pointShadow,Rt.hemisphereLights.value=O.state.hemi,Rt.directionalShadowMap.value=O.state.directionalShadowMap,Rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Rt.spotShadowMap.value=O.state.spotShadowMap,Rt.spotLightMatrix.value=O.state.spotLightMatrix,Rt.spotLightMap.value=O.state.spotLightMap,Rt.pointShadowMap.value=O.state.pointShadowMap,Rt.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Vt,H.uniformsList=null,Vt}function Yi(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=Cl.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ci(M,I){let F=vt.get(M);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function ca(M,I,F,H,O){I.isScene!==!0&&(I=X),Gt.resetTextureUnits();let it=I.fog,gt=H.isMeshStandardMaterial?I.environment:null,Mt=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ir,mt=(H.isMeshStandardMaterial?Jt:Oe).get(H.envMap||gt),Pt=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Vt=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!F.morphAttributes.position,se=!!F.morphAttributes.normal,Ce=!!F.morphAttributes.color,Je=ra;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Je=_.toneMapping);let He=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ne=He!==void 0?He.length:0,zt=vt.get(H),qe=h.state.lights;if(qt===!0&&(Q===!0||M!==b)){let Xn=M===b&&H.id===E;ot.setState(H,M,Xn)}let ge=!1;H.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==qe.state.version||zt.outputColorSpace!==Mt||O.isBatchedMesh&&zt.batching===!1||!O.isBatchedMesh&&zt.batching===!0||O.isBatchedMesh&&zt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&zt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&zt.instancing===!1||!O.isInstancedMesh&&zt.instancing===!0||O.isSkinnedMesh&&zt.skinning===!1||!O.isSkinnedMesh&&zt.skinning===!0||O.isInstancedMesh&&zt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&zt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&zt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&zt.instancingMorph===!1&&O.morphTexture!==null||zt.envMap!==mt||H.fog===!0&&zt.fog!==it||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ot.numPlanes||zt.numIntersection!==ot.numIntersection)||zt.vertexAlphas!==Pt||zt.vertexTangents!==Vt||zt.morphTargets!==Rt||zt.morphNormals!==se||zt.morphColors!==Ce||zt.toneMapping!==Je||zt.morphTargetsCount!==Ne)&&(ge=!0):(ge=!0,zt.__version=H.version);let hi=zt.currentProgram;ge===!0&&(hi=Un(H,I,O));let Yr=!1,fi=!1,Ul=!1,Ye=hi.getUniforms(),Di=zt.uniforms;if(yt.useProgram(hi.program)&&(Yr=!0,fi=!0,Ul=!0),H.id!==E&&(E=H.id,fi=!0),Yr||b!==M){yt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ye.setValue(D,"projectionMatrix",M.projectionMatrix),Ye.setValue(D,"viewMatrix",M.matrixWorldInverse);let $n=Ye.map.cameraPosition;$n!==void 0&&$n.setValue(D,St.setFromMatrixPosition(M.matrixWorld)),Dt.logarithmicDepthBuffer&&Ye.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ye.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,fi=!0,Ul=!0)}if(O.isSkinnedMesh){Ye.setOptional(D,O,"bindMatrix"),Ye.setOptional(D,O,"bindMatrixInverse");let Xn=O.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Ye.setValue(D,"boneTexture",Xn.boneTexture,Gt))}O.isBatchedMesh&&(Ye.setOptional(D,O,"batchingTexture"),Ye.setValue(D,"batchingTexture",O._matricesTexture,Gt),Ye.setOptional(D,O,"batchingIdTexture"),Ye.setValue(D,"batchingIdTexture",O._indirectTexture,Gt),Ye.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Ye.setValue(D,"batchingColorTexture",O._colorsTexture,Gt));let Ni=F.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&at.update(O,F,hi),(fi||zt.receiveShadow!==O.receiveShadow)&&(zt.receiveShadow=O.receiveShadow,Ye.setValue(D,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Di.envMap.value=mt,Di.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Di.envMapIntensity.value=I.environmentIntensity),fi&&(Ye.setValue(D,"toneMappingExposure",_.toneMappingExposure),zt.needsLights&&tr(Di,Ul),it&&H.fog===!0&&nt.refreshFogUniforms(Di,it),nt.refreshMaterialUniforms(Di,H,V,st,h.state.transmissionRenderTarget[M.id]),Cl.upload(D,Yi(zt),Di,Gt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cl.upload(D,Yi(zt),Di,Gt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ye.setValue(D,"center",O.center),Ye.setValue(D,"modelViewMatrix",O.modelViewMatrix),Ye.setValue(D,"normalMatrix",O.normalMatrix),Ye.setValue(D,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Xn=H.uniformsGroups;for(let $n=0,lp=Xn.length;$n<lp;$n++){let er=Xn[$n];Yt.update(er,hi),Yt.bind(er,hi)}}return hi}function tr(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Su(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,I,F){let H=vt.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),vt.get(M.texture).__webglTexture=I,vt.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:F,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){let F=vt.get(M);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0};let Mu=D.createFramebuffer();this.setRenderTarget=function(M,I=0,F=0){N=M,w=I,C=F;let H=!0,O=null,it=!1,gt=!1;if(M){let mt=vt.get(M);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(mt.__webglFramebuffer===void 0)Gt.setupRenderTarget(M);else if(mt.__hasExternalTextures)Gt.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Rt=M.depthTexture;if(mt.__boundDepthTexture!==Rt){if(Rt!==null&&vt.has(Rt)&&(M.width!==Rt.image.width||M.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(M)}}let Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(gt=!0);let Vt=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Vt[I])?O=Vt[I][F]:O=Vt[I],it=!0):M.samples>0&&Gt.useMultisampledRTT(M)===!1?O=vt.get(M).__webglMultisampledFramebuffer:Array.isArray(Vt)?O=Vt[F]:O=Vt,U.copy(M.viewport),B.copy(M.scissor),k=M.scissorTest}else U.copy(_t).multiplyScalar(V).floor(),B.copy(Xt).multiplyScalar(V).floor(),k=oe;if(F!==0&&(O=Mu),yt.bindFramebuffer(D.FRAMEBUFFER,O)&&H&&yt.drawBuffers(M,O),yt.viewport(U),yt.scissor(B),yt.setScissorTest(k),it){let mt=vt.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,F)}else if(gt){let mt=I;for(let Pt=0;Pt<M.textures.length;Pt++){let Vt=vt.get(M.textures[Pt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pt,Vt.__webglTexture,F,mt)}}else if(M!==null&&F!==0){let mt=vt.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,F)}E=-1},this.readRenderTargetPixels=function(M,I,F,H,O,it,gt,Mt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(mt=mt[gt]),mt){yt.bindFramebuffer(D.FRAMEBUFFER,mt);try{let Pt=M.textures[Mt],Vt=Pt.format,Rt=Pt.type;if(!Dt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-H&&F>=0&&F<=M.height-O&&(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt),D.readPixels(I,F,H,O,wt.convert(Vt),wt.convert(Rt),it))}finally{let Pt=N!==null?vt.get(N).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(M,I,F,H,O,it,gt,Mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(mt=mt[gt]),mt)if(I>=0&&I<=M.width-H&&F>=0&&F<=M.height-O){yt.bindFramebuffer(D.FRAMEBUFFER,mt);let Pt=M.textures[Mt],Vt=Pt.format,Rt=Pt.type;if(!Dt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt),D.readPixels(I,F,H,O,wt.convert(Vt),wt.convert(Rt),0);let Ce=N!==null?vt.get(N).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,Ce);let Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cb(D,Je,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(se),D.deleteSync(Je),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,F=0){let H=Math.pow(2,-F),O=Math.floor(M.image.width*H),it=Math.floor(M.image.height*H),gt=I!==null?I.x:0,Mt=I!==null?I.y:0;Gt.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,gt,Mt,O,it),yt.unbindTexture()};let It=D.createFramebuffer(),te=D.createFramebuffer();this.copyTextureToTexture=function(M,I,F=null,H=null,O=0,it=null){it===null&&(O!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=O,O=0):it=0);let gt,Mt,mt,Pt,Vt,Rt,se,Ce,Je,He=M.isCompressedTexture?M.mipmaps[it]:M.image;if(F!==null)gt=F.max.x-F.min.x,Mt=F.max.y-F.min.y,mt=F.isBox3?F.max.z-F.min.z:1,Pt=F.min.x,Vt=F.min.y,Rt=F.isBox3?F.min.z:0;else{let Ni=Math.pow(2,-O);gt=Math.floor(He.width*Ni),Mt=Math.floor(He.height*Ni),M.isDataArrayTexture?mt=He.depth:M.isData3DTexture?mt=Math.floor(He.depth*Ni):mt=1,Pt=0,Vt=0,Rt=0}H!==null?(se=H.x,Ce=H.y,Je=H.z):(se=0,Ce=0,Je=0);let Ne=wt.convert(I.format),zt=wt.convert(I.type),qe;I.isData3DTexture?(Gt.setTexture3D(I,0),qe=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Gt.setTexture2DArray(I,0),qe=D.TEXTURE_2D_ARRAY):(Gt.setTexture2D(I,0),qe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let ge=D.getParameter(D.UNPACK_ROW_LENGTH),hi=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yr=D.getParameter(D.UNPACK_SKIP_PIXELS),fi=D.getParameter(D.UNPACK_SKIP_ROWS),Ul=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,He.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,He.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);let Ye=M.isDataArrayTexture||M.isData3DTexture,Di=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){let Ni=vt.get(M),Xn=vt.get(I),$n=vt.get(Ni.__renderTarget),lp=vt.get(Xn.__renderTarget);yt.bindFramebuffer(D.READ_FRAMEBUFFER,$n.__webglFramebuffer),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,lp.__webglFramebuffer);for(let er=0;er<mt;er++)Ye&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(M).__webglTexture,O,Rt+er),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(I).__webglTexture,it,Je+er)),D.blitFramebuffer(Pt,Vt,gt,Mt,se,Ce,gt,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);yt.bindFramebuffer(D.READ_FRAMEBUFFER,null),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||vt.has(M)){let Ni=vt.get(M),Xn=vt.get(I);yt.bindFramebuffer(D.READ_FRAMEBUFFER,It),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,te);for(let $n=0;$n<mt;$n++)Ye?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ni.__webglTexture,O,Rt+$n):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ni.__webglTexture,O),Di?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xn.__webglTexture,it,Je+$n):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xn.__webglTexture,it),O!==0?D.blitFramebuffer(Pt,Vt,gt,Mt,se,Ce,gt,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):Di?D.copyTexSubImage3D(qe,it,se,Ce,Je+$n,Pt,Vt,gt,Mt):D.copyTexSubImage2D(qe,it,se,Ce,Pt,Vt,gt,Mt);yt.bindFramebuffer(D.READ_FRAMEBUFFER,null),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Di?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(qe,it,se,Ce,Je,gt,Mt,mt,Ne,zt,He.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(qe,it,se,Ce,Je,gt,Mt,mt,Ne,He.data):D.texSubImage3D(qe,it,se,Ce,Je,gt,Mt,mt,Ne,zt,He):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,it,se,Ce,gt,Mt,Ne,zt,He.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,it,se,Ce,He.width,He.height,Ne,He.data):D.texSubImage2D(D.TEXTURE_2D,it,se,Ce,gt,Mt,Ne,zt,He);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hi),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yr),D.pixelStorei(D.UNPACK_SKIP_ROWS,fi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ul),it===0&&I.generateMipmaps&&D.generateMipmap(qe),yt.unbindTexture()},this.initRenderTarget=function(M){vt.get(M).__webglFramebuffer===void 0&&Gt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Gt.setTextureCube(M,0):M.isData3DTexture?Gt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Gt.setTexture2DArray(M,0):Gt.setTexture2D(M,0),yt.unbindTexture()},this.resetState=function(){w=0,C=0,N=null,yt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),n.unpackColorSpace=de._getUnpackColorSpace()}};function cE(e,t,n){if(!e)return t;let i=Math.max(0,Math.min(1,n));return{x:e.x+(t.x-e.x)*i,z:e.z+(t.z-e.z)*i}}var uE=[{coat:"#79bda5",shade:"#568b8d",deep:"#426a7e",hair:"#49445e",hairLight:"#756480",skin:"#e7af8f",skinLight:"#ffd2a6",accent:"#f5e2a2"},{coat:"#b29acb",shade:"#80759f",deep:"#60577f",hair:"#65516a",hairLight:"#9e7887",skin:"#c99074",skinLight:"#eab997",accent:"#f5c39b"},{coat:"#d99683",shade:"#ab727d",deep:"#755d78",hair:"#34374f",hairLight:"#65647b",skin:"#aa745b",skinLight:"#d4a27d",accent:"#d5efbc"},{coat:"#d9bc78",shade:"#a78673",deep:"#786b78",hair:"#a87962",hairLight:"#d2a477",skin:"#ddab85",skinLight:"#f7caa3",accent:"#a7ddd1"}],Ut="#2d3049";function R(e,t,n,i,s,a){e.fillStyle=t,e.fillRect(n,i,s,a)}function Gn(e,t,n,i,s,a){for(let r=-a;r<=a;r++){let o=Math.floor(s*Math.sqrt(1-r*r/((a+.5)*(a+.5))));R(e,t,n-o,i+r,o*2+1,1)}}function la(e,t,n){for(let[i,s]of n)R(e,t,i,s,1,1)}function kn(e,t,n){let i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d");if(!s)throw new Error("Canvas 2D is required to draw the office sprites.");n(s);let a=new Xi(i);return a.colorSpace=cn,a.magFilter=_n,a.minFilter=_n,a.generateMipmaps=!1,a}function Iv(e,t,n,i){let{coat:s,shade:a,deep:r,hair:o,hairLight:l,skin:c,skinLight:u,accent:d}=uE[t%uE.length],f=n==="stepA"?-2:n==="stepB"?2:0,p=n==="working",v=i==="left",x=p?22:24;for(let[m,h]of[[11+f,8+f],[19-f,18-f]])R(e,Ut,m,30,4,7),R(e,r,m+1,31,2,5),R(e,Ut,h,36,7,3),R(e,a,h+1,36,4,1);for(let m of[6,23])R(e,Ut,m,x,4,7),R(e,a,m+1,x+1,2,5),R(e,s,m+1,x+1,2,3),R(e,c,m+1,x+6,3,2);if(Gn(e,Ut,16,25,9,7),Gn(e,r,18,26,6,5),Gn(e,s,14,24,6,5),R(e,d,12,20,7,2),R(e,u,15,22,2,2),R(e,a,11,28,3,2),R(e,Ut,16,24,1,7),i==="away"){Gn(e,s,16,25,7,6),R(e,a,10,24,3,6),R(e,d,15,24,2,5),Gn(e,Ut,16,13,10,10),Gn(e,o,16,12,9,8),Gn(e,l,13,9,5,3),R(e,c,6,16,2,3),R(e,c,24,16,2,3),t%4===1?(R(e,o,7,16,4,7),R(e,o,22,16,4,7)):t%4===2?(R(e,o,7,16,5,4),R(e,l,19,8,5,2)):t%4===3?(R(e,d,10,8,14,3),R(e,o,7,11,18,3)):(R(e,l,10,5,6,2),R(e,o,8,12,5,5)),n==="coffee"&&(R(e,Ut,23,24,6,7),R(e,"#fff2d3",24,25,4,5),R(e,a,25,26,2,2)),p&&R(e,d,12,29,8,1);return}switch(Gn(e,Ut,16,13,10,10),Gn(e,o,16,11,9,8),Gn(e,c,16,16,7,6),Gn(e,u,v?13:15,14,4,3),R(e,c,v?25:6,15,2,3),t%4){case 0:Gn(e,o,14,7,8,4),R(e,l,10,5,6,2),R(e,o,v?6:19,10,7,5);break;case 1:Gn(e,o,16,7,9,5),R(e,l,12,5,6,2),R(e,o,6,12,4,8),R(e,o,23,11,3,8),R(e,d,12,22,8,2);break;case 2:Gn(e,o,16,9,10,7),R(e,l,10,5,6,2),R(e,o,v?6:22,12,4,6),R(e,Ut,10,14,5,3),R(e,Ut,18,14,5,3),R(e,Ut,15,15,3,1),R(e,u,11,15,3,1),R(e,u,19,15,3,1);break;default:Gn(e,o,16,9,9,6),R(e,Ut,7,9,18,3),R(e,d,9,9,14,2),R(e,o,11,12,5,2),R(e,d,20,24,3,2);break}R(e,Ut,v?12:19,16,2,p?1:2),R(e,Ut,v?19:12,16,1,p?1:2),R(e,a,v?11:21,18,1,1),R(e,"#bd7979",v?14:16,20,3,1),n==="coffee"&&(R(e,Ut,v?1:25,23,6,7),R(e,"#fff2d3",v?2:26,24,4,5),R(e,a,v?3:27,26,3,1)),p&&R(e,d,12,29,8,1)}function hE(e){let t=n=>({left:kn(32,40,i=>Iv(i,e,n,"left")),right:kn(32,40,i=>Iv(i,e,n,"right")),away:kn(32,40,i=>Iv(i,e,n,"away"))});return{idle:t("idle"),stepA:t("stepA"),stepB:t("stepB"),working:t("working"),coffee:t("coffee")}}function fE(){return kn(96,56,e=>{R(e,Ut,6,22,84,31),R(e,"#775d70",8,27,80,23),R(e,"#a17b80",10,30,75,13),R(e,"#d9ac8e",12,30,70,3),R(e,"#3c384e",30,34,36,9),R(e,"#5aa59a",33,36,30,3),R(e,"#e4c391",36,39,24,2),R(e,"#f0d3ae",9,20,79,9),R(e,"#fff0d1",13,21,69,2),R(e,Ut,35,3,27,18),R(e,"#777087",38,5,21,14),R(e,"#b9a2aa",39,5,14,3),R(e,"#3b5260",42,9,13,8),R(e,"#8be0bd",44,11,9,3),R(e,Ut,41,18,16,3);for(let t of[17,70])R(e,Ut,t,14,9,8),R(e,"#f8e6cd",t+1,15,6,5),R(e,"#82bbad",t+2,16,3,2),R(e,"#f4d5af",t+2,11,2,3);R(e,Ut,10,50,14,4),R(e,Ut,73,50,14,4)})}function dE(e="CHAT ROOM"){return kn(256,64,t=>{R(t,"#3b344d",5,8,246,49),R(t,"#d5a989",8,11,240,43),R(t,"#51445c",13,15,230,35),R(t,"#bce7cd",18,20,6,25),R(t,"#bce7cd",232,20,6,25),t.fillStyle="#fff0ce",t.font="bold 31px monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(e,128,34)})}function Nl(e,t=0){return kn(48,48,n=>{R(n,"#31334c",5,5,38,38),R(n,"#f7e9cc",8,8,32,32),R(n,e==="failed"?"#d2828c":"#8bbda9",10,10,28,3),R(n,"#4a465d",14,18,21,13),R(n,"#fff2d7",17,20,15,8),R(n,e==="failed"?"#d2828c":"#72b4a5",20,22,9,2),R(n,"#4a465d",18,30,5,4),R(n,"#fff0d1",25,31,5,2);let i=e==="working"?t:e==="complete"||e==="failed"?16:0;for(let s=0;s<16;s++){let a=Math.floor(s/4),r=s%4,o=a===0?6+r*9:a===1?41:a===2?33-r*9:4,l=a===0?3:a===1?6+r*9:a===2?41:33-r*9;R(n,s<i?e==="failed"?"#f2a3a3":"#95f2cc":"#74617d",o,l,a%2===0?8:3,a%2===0?3:8)}(e==="queued"||e==="assigned")&&(R(n,"#f5b978",22,15,4,5),R(n,"#f5b978",22,33,4,3))})}function pE(e){return kn(40,40,t=>{let n=e%2?"#d4b5ee":"#9ce4ce";R(t,Ut,7,3,25,28),R(t,Ut,5,6,30,21),R(t,"#806d91",8,5,24,23),R(t,"#c0a6bb",9,5,18,2),R(t,"#39394e",11,8,20,17),R(t,"#30485c",12,9,17,14),R(t,"#568f9c",13,10,11,1),R(t,n,14,12,10,2),R(t,"#ffdfaa",14,16,7,1),R(t,n,14,19,12,2),R(t,"#6f9eaa",14,22,5,1),R(t,"#f6d7aa",14,27,11,2),R(t,Ut,18,31,5,5),R(t,"#aa8da5",19,31,2,4),R(t,Ut,12,36,17,3),R(t,"#ffedcc",14,36,12,1),la(t,"#e9e1db",[[10,8],[10,9],[31,26],[30,27]])})}function mE(){return kn(42,50,e=>{R(e,"#293f50",18,15,5,23),R(e,"#456b65",20,18,2,16),R(e,"#293f50",9,13,9,19),R(e,"#293f50",6,18,16,11),R(e,"#293f50",4,15,5,8),R(e,"#293f50",11,7,6,9),R(e,"#293f50",14,4,5,6),R(e,"#4f897a",8,16,12,12),R(e,"#5a9a83",10,12,7,13),R(e,"#82bb91",12,9,4,9),R(e,"#91c8a0",6,20,5,4),R(e,"#74ad8e",10,23,8,3),R(e,"#b0d5a4",12,14,2,4),R(e,"#293f50",25,10,7,22),R(e,"#293f50",22,17,15,11),R(e,"#293f50",31,13,6,9),R(e,"#293f50",27,5,5,8),R(e,"#4f897a",24,15,11,13),R(e,"#5a9a83",27,11,7,13),R(e,"#82bb91",28,8,4,9),R(e,"#a9d6a2",33,17,4,4),R(e,"#74ad8e",28,23,6,3),R(e,"#b0d5a4",28,13,2,4),R(e,"#293f50",17,21,8,12),R(e,"#599784",17,20,7,11),R(e,"#9ac69a",18,19,4,7),la(e,"#b6d9a5",[[9,15],[13,12],[15,7],[27,13],[31,9],[29,21]]),la(e,"#294c58",[[8,26],[17,18],[34,24],[23,28]]),R(e,Ut,13,35,17,4),R(e,"#e8bb96",15,38,14,8),R(e,"#c78980",20,40,9,6),R(e,"#f6d7aa",16,39,6,2),R(e,Ut,15,46,15,2)})}function gE(){return kn(28,24,e=>{R(e,Ut,3,10,23,11),R(e,"#72617c",4,11,20,8),R(e,"#9c83a1",5,11,15,3),R(e,"#d1a58c",7,6,13,6),R(e,"#f2d5a1",8,7,10,3),R(e,"#eff5d3",11,3,11,7),R(e,"#77b9a4",12,4,7,2),R(e,"#f7deaa",13,7,6,1),R(e,"#aad4b0",6,16,14,2),R(e,Ut,4,21,21,2)})}function vE(e){return kn(80,70,t=>{let n=e%2?"#ead4bb":"#f3ddba";R(t,Ut,13,21,57,20),R(t,Ut,9,25,58,17),R(t,"#785e78",11,30,57,16),R(t,"#a97e7f",10,26,56,15),R(t,"#f8e8c7",17,19,49,8),R(t,n,13,24,52,10),R(t,"#fff4d6",20,19,39,2),R(t,"#d4af9b",13,32,52,3),R(t,"#9a6d79",14,37,52,4),R(t,"#efbda2",19,32,26,2),R(t,"#564664",14,42,10,22),R(t,"#8c687e",15,43,6,18),R(t,"#d8a69c",16,45,2,5),R(t,"#564664",58,41,10,22),R(t,"#8c687e",60,42,6,17),R(t,"#d8a69c",60,45,2,5),R(t,Ut,12,62,13,5),R(t,Ut,56,61,14,5),R(t,"#382d4b",28,37,4,2),R(t,"#382d4b",46,37,4,2),la(t,"#fff7de",[[21,22],[23,22],[59,23],[61,23]])})}function _E(){return kn(40,54,e=>{R(e,Ut,8,6,26,30),R(e,Ut,6,9,30,24),R(e,"#6c608a",9,8,24,25),R(e,"#9b83ab",11,8,20,19),R(e,"#c9aecc",14,10,14,13),R(e,"#f1d9d0",15,10,9,2),R(e,Ut,7,33,28,8),R(e,"#8b77a1",10,33,23,5),R(e,"#c7acc3",12,33,14,2),R(e,Ut,19,41,5,8),R(e,"#6a5f80",20,41,2,6),R(e,Ut,10,48,24,4),R(e,"#b2a2b8",14,48,14,1),la(e,"#f8e4d7",[[14,15],[17,14],[28,23]])})}function yE(){return kn(48,64,e=>{R(e,Ut,7,46,36,14),R(e,"#765b68",9,47,31,11),R(e,"#b18683",10,48,24,5),R(e,"#e2b698",11,48,19,2),R(e,"#533f53",11,55,28,2),R(e,"#e6c4a4",13,55,6,1),R(e,"#e6c4a4",28,55,6,1),R(e,Ut,10,59,8,3),R(e,Ut,32,59,8,3),R(e,Ut,9,11,32,36),R(e,"#775c73",11,13,27,32),R(e,"#a8838d",12,14,22,3),R(e,"#d9b49f",12,18,2,23),R(e,"#4c465d",15,18,20,23),R(e,"#356a74",17,20,16,17),R(e,"#579e96",18,21,13,11),R(e,"#9bd4ae",19,22,9,6),R(e,"#e8e6af",21,24,4,4),R(e,"#fff1ba",22,24,2,2),R(e,"#377778",20,30,10,2),R(e,"#f7d9a5",19,39,3,2),R(e,"#8dd2aa",24,39,3,2),R(e,"#f7d9a5",29,39,3,2),R(e,Ut,7,8,36,5),R(e,"#9c7882",9,8,32,3),R(e,"#f2c9a5",11,8,24,1),R(e,"#533f53",6,42,36,5),R(e,"#d4a48e",9,42,27,2),R(e,"#f8e3b9",10,43,15,1),la(e,"#fce6bd",[[12,15],[36,15],[12,48],[39,48]])})}function xE(){return kn(64,63,e=>{R(e,Ut,13,8,41,36),R(e,"#706493",16,6,34,35),R(e,"#ad9cc6",18,7,26,30),R(e,"#eddaee",20,9,23,25),R(e,"#34485c",22,13,20,19),R(e,"#517883",23,14,15,3),R(e,"#a5f0cc",25,19,13,2),R(e,"#b9d5e2",25,24,8,2),R(e,"#f8e4aa",25,29,12,1),R(e,Ut,7,39,50,17),R(e,"#866f9c",9,40,46,13),R(e,"#c6b3d0",12,40,38,8),R(e,"#f9ebd8",14,41,31,2),R(e,Ut,10,51,10,11),R(e,"#706184",12,52,7,8),R(e,Ut,44,51,10,11),R(e,"#706184",46,52,6,8),la(e,"#fff9e5",[[19,11],[20,11],[50,43],[51,43]])})}function Ov(e){return kn(40,52,t=>{R(t,Ut,6,36,29,11),R(t,"#ab829e",9,36,23,8),R(t,"#f7e7c7",11,36,17,2),R(t,Ut,9,25,25,10),R(t,e%2?"#91ceb0":"#e3b695",12,26,19,5),R(t,"#fff0d1",13,26,10,1),R(t,Ut,4,15,25,9),R(t,"#9d90bb",7,16,19,5),R(t,"#e6d5ef",8,16,9,1),R(t,Ut,14,6,22,9),R(t,"#e5bd91",17,7,16,6),R(t,"#f9e8b7",18,7,11,1),R(t,Ut,12,47,22,3),la(t,"#ebdcce",[[8,19],[10,20],[20,29],[14,40]])})}function SE(e){return kn(36,44,t=>{R(t,Ut,2,3,32,38),R(t,"#ab8ea7",4,4,28,35),R(t,"#eedadd",6,6,24,32),R(t,e%2?"#d99b97":"#83b9ae",8,8,20,27),Gn(t,"#fff2d4",e%2?20:16,19,5,7),R(t,"#474964",15,22,11,3),R(t,"#f4ddac",10,29,12,2),la(t,"#fff9e5",[[8,7],[9,7],[27,34]])})}function ME(){return kn(20,26,e=>{R(e,"#302d4a",3,4,14,19),R(e,"#726b92",5,5,10,14),R(e,"#a0f3d2",6,7,8,8),R(e,"#fff4d4",8,8,3,3),R(e,"#302d4a",6,22,9,3)})}var wi={edge:6181475,wall:9533568,wallTop:15910293,cream:16769709,lavender:12297963},Bt={halfWidth:7.7,back:-5.2,front:5.8,windowY:1.72},Pv=[-4.8,0,4.8],bE=0,yu=new P(0,15,20),ci={x:-3.8,z:-2.2},Bv=-3.55,HN=new Zt(11127295),VN=new Zt(12110826),GN=new Zt(11848948),kN=new Zt(16767681),XN=new Zt(7506858);function EE(e,t=0,n=0){return new Pr({color:e,roughness:.88,flatShading:!0,emissive:t,emissiveIntensity:n})}function WN(){let e=document.createElement("canvas");e.width=1024,e.height=768;let t=e.getContext("2d");if(!t)throw new Error("Canvas 2D is required for the office floor.");t.fillStyle="#785a51",t.fillRect(0,0,e.width,e.height);let n=["#d8af83","#cba076","#dfb78c","#d2a77b","#c59a72","#dbb287"],i=(a,r)=>(Math.imul(a,73856093)^Math.imul(r,19349663))>>>0;for(let a=0;a<12;a++){let r=a*64,o=a%2?-116:-20,l=0;for(;o<e.width;){let c=i(l,a),u=188+c%53;t.fillStyle=n[c%n.length],t.fillRect(o+2,r+2,u-3,61),t.fillStyle="#fff0cb20",t.fillRect(o+5,r+4,u-9,2),t.fillStyle="#573e4a18",t.fillRect(o+3,r+58,u-5,3);for(let d=0;d<7;d++){let f=r+9+i(l*7+d,a)%46;t.fillStyle=d%2?"#633f3920":"#ffe2ac32",t.fillRect(o+12+d%3*8,f,u-36-d%3*15,1)}o+=u,l++}}let s=new Xi(e);return s.colorSpace=cn,s.minFilter=rs,s.magFilter=Rn,s}function qN(){let e=document.createElement("canvas");e.width=128,e.height=96;let t=e.getContext("2d");if(!t)throw new Error("Canvas 2D is required for the window garden.");for(let[i,s,a]of[["#426e6b",83,23],["#5c8971",89,21],["#83a77a",96,17]]){t.fillStyle=i;for(let r=-15;r<150;r+=21)t.beginPath(),t.ellipse(r+r%3*3,s-r%4*4,a,18,0,0,Math.PI*2),t.fill()}for(let i=0;i<42;i++){let s=(Math.imul(i+11,47)%128+128)%128,a=67+Math.imul(i+3,31)%29;t.fillStyle=i%3?"#b6c490":"#365e63",t.fillRect(s,a,2+i%3,1)}let n=new Xi(e);return n.colorSpace=cn,n.minFilter=rs,n.magFilter=Rn,n}function jn(e,t,n,i,s,a,r,o,l=0,c=0){let u=new Re(new Ka(s,a,r),EE(o,l,c));return u.position.set(t,n,i),u.castShadow=a>.17,u.receiveShadow=!0,e.add(u),u}function Nn(e,t,n,i,s,a,r){let o=new Re(new Hn(a,r),new Pr({map:t,alphaTest:.38,side:Dn,roughness:1,emissiveMap:t,emissive:16777215,emissiveIntensity:.24}));return o.position.set(n,i,s),o.rotation.y=bE,o.castShadow=!1,o.receiveShadow=!0,e.add(o),o}function TE(e,t){let n=new Re(new Ml(1,10,6),new Fn({colorWrite:!1,depthWrite:!1}));return n.scale.set(e*.38,.12,t*.3),n.castShadow=!0,n}function zv(e,t="#4e4762"){let n=document.createElement("canvas");n.width=256,n.height=64;let i=n.getContext("2d");if(!i)throw new Error("Canvas 2D context is required for office signs.");i.fillStyle="#574c5a",i.fillRect(4,4,248,56),i.strokeStyle="#d4a986",i.lineWidth=5,i.strokeRect(4,4,248,56),i.fillStyle=t==="#4e4762"?"#f9e5bb":t,i.font="bold 25px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,34);let s=new Xi(n);s.magFilter=_n,s.minFilter=_n;let a=new _l(new vl({map:s,transparent:!0,depthTest:!1}));return a.scale.set(1.65,.42,1),a}function YN(e,t,n,i,s){Nn(e,s(vE(i)),t,.58,n-.56,1.55,1.23);let a=Nn(e,s(pE(i)),t-.1,1.08,n-.67,.77,.77);return Nn(e,s(_E()),t+.35,.49,n+.37,.66,.94),a}function ZN(e,t,n){let i=new ki,s=Nn(i,n.idle.away,.035,.68,-.065,.99,1.35);s.material.color.setHex(7759223),s.material.emissiveIntensity=0,s.castShadow=!1,s.receiveShadow=!1;let a=Nn(i,n.idle.away,0,.67,0,.95,1.32);a.material.emissiveIntensity=.44,s.rotation.y=0,a.rotation.y=0,i.rotation.y=bE;let r=new Re(new Hn(.68,.52),new Fn({map:t,transparent:!0,depthWrite:!1,opacity:.66,toneMapped:!1}));r.rotation.x=-Math.PI/2,r.renderOrder=3;let o=TE(.68,.52);return{group:i,backing:s,figure:a,frames:n,facing:"away",shadow:r,caster:o}}function AE(e,t,n="game",i){let s=n==="live",a=s?Bv:3.55,r=new eu,o=[],l=J=>(o.push(J),J),c=new wn(28,1,.1,100);c.position.copy(yu),c.lookAt(0,.4,0);let u=new sp({antialias:!1,alpha:!0,powerPreference:"low-power"});u.outputColorSpace=cn,u.toneMapping=gd,u.toneMappingExposure=1.35,u.setClearColor(0,0),u.shadowMap.enabled=!0,u.shadowMap.type=Wi,u.shadowMap.autoUpdate=!1,u.shadowMap.needsUpdate=!0,u.domElement.className="world-canvas",u.domElement.setAttribute("aria-label","Perspective view of the little AI office"),u.domElement.setAttribute("role","img"),e.appendChild(u.domElement);let d=!1,f=J=>{J.preventDefault(),d=!0,e.classList.add("context-lost")},p=()=>{d=!1,u.shadowMap.needsUpdate=!0,e.classList.remove("context-lost")};u.domElement.addEventListener("webglcontextlost",f),u.domElement.addEventListener("webglcontextrestored",p);let v=new li({depthWrite:!1,side:Cn,toneMapped:!1,uniforms:{uDay:{value:.7},uWarm:{value:.8},uTime:{value:0},uSun:{value:new P(1,1,-1)},uSkyTint:{value:new Zt(9034192)}},vertexShader:`
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
    `}),x=new Re(new Ml(45,24,14),v);x.renderOrder=-1,r.add(x);let m=new uu(15193564,.75),h=new ou(11979214,9858176,.9);r.add(m,h);let g=new cu(16767394,2.4);g.position.set(2,9,-24),g.castShadow=!0;let y=e.clientWidth<980||matchMedia("(pointer: coarse)").matches?512:1024;g.shadow.mapSize.set(y,y),g.shadow.radius=8,g.shadow.blurSamples=8,g.shadow.camera.left=-11,g.shadow.camera.right=11,g.shadow.camera.top=11,g.shadow.camera.bottom=-11,g.shadow.bias=-5e-4,g.shadow.normalBias=.012,r.add(g);let _=new sa(9107160,1.5,5,2);_.position.set(ci.x,1.55,ci.z);let A=new sa(16756347,.9,4,2);A.position.set(0,1.35,a+.1);let w=new sa(16758135,1.1,8,2);w.position.set(.3,2.4,.55),r.add(A,w),s||r.add(_),jn(r,0,-.3,0,Bt.halfWidth*2,.55,Bt.front-Bt.back,wi.edge);let C=l(WN());C.anisotropy=Math.min(4,u.capabilities.getMaxAnisotropy());let N=new Re(new Hn(Bt.halfWidth*2-.18,Bt.front-Bt.back-.18),new Pr({map:C,roughness:.86}));N.rotation.x=-Math.PI/2,N.position.y=.028,N.receiveShadow=!0,r.add(N);let E=new Re(new Hn(Bt.halfWidth*2-.18,Bt.front-Bt.back-.18),new li({transparent:!0,depthWrite:!1,uniforms:{uSunSide:{value:0},uNight:{value:0}},vertexShader:`
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
      `}));E.rotation.x=-Math.PI/2,E.position.y=.047,r.add(E),jn(r,0,.575,Bt.back,Bt.halfWidth*2,1.15,.2,wi.wall),jn(r,0,2.52,Bt.back,Bt.halfWidth*2,.46,.2,wi.wall);let b=-Bt.halfWidth;for(let J of Pv){let ht=J-.9;jn(r,(b+ht)/2,Bt.windowY,Bt.back,ht-b,1.14,.2,wi.wall),b=J+.9}jn(r,(b+Bt.halfWidth)/2,Bt.windowY,Bt.back,Bt.halfWidth-b,1.14,.2,wi.wall),jn(r,0,2.75,Bt.back,Bt.halfWidth*2,.17,.3,wi.wallTop);let U=l(dE(s?"LIVE OFFICE":"CHAT ROOM")),B=new Re(new Hn(3.35,.82),new Fn({map:U,transparent:!0,alphaTest:.2,side:Dn}));B.position.set(0,3.22,Bt.back+.2),r.add(B),jn(r,0,.38,Bt.back+.12,Bt.halfWidth*2-.2,.55,.06,7822694),jn(r,0,.74,Bt.back+.16,Bt.halfWidth*2-.1,.08,.1,13803644);let k=new Fn({map:l(qN()),transparent:!0,alphaTest:.03,side:Dn,depthWrite:!1});for(let J of Pv){let ht=new Re(new Hn(1.72,1.08),k);ht.position.set(J,Bt.windowY,Bt.back-.14),r.add(ht);let Nt=new Re(new Hn(1.65,1.08),new Fn({color:16173467,transparent:!0,opacity:.1,side:Dn,depthWrite:!1}));Nt.position.set(J,Bt.windowY,Bt.back+.02),r.add(Nt),jn(r,J,1.14,Bt.back+.2,1.98,.11,.36,wi.cream),jn(r,J,2.3,Bt.back+.12,1.92,.11,.22,wi.cream);for(let $t of[-.88,0,.88])jn(r,J+$t,Bt.windowY,Bt.back+.12,.09,1.13,.15,wi.cream)}for(let[J,ht]of[-6.4,-2.5,2.5].entries())Nn(r,l(SE(J)),ht,1.65,Bt.back+.17,.66,.81);let Z=[-2.4,2.4].map(J=>{jn(r,J,2.22,Bt.back+.3,.31,.15,.2,7230304);let ht=jn(r,J,2.13,Bt.back+.42,.15,.12,.14,16766368,16762250,.5),Nt=new sa(16758651,0,4.5,2);return Nt.position.set(J,2.08,Bt.back+.6),r.add(Nt),{bulb:ht,glow:Nt}}),K;if(!s){let J=new Re(new au(.92,.92,.04,12),EE(11439750));J.position.set(ci.x,.05,ci.z),J.receiveShadow=!0,r.add(J);let ht=l(yE()),Nt=Nn(r,ht,ci.x+.1,.96,ci.z-.14,1.39,1.9);Nt.material.color.setHex(7960718),Nt.material.emissiveIntensity=0,Nt.castShadow=!1,K=Nn(r,ht,ci.x,.95,ci.z,1.35,1.86);let $t=zv("AI CORE");$t.position.set(ci.x,2.38,ci.z),r.add($t)}Nn(r,l(fE()),0,.68,a,4.6,1.25);let W=document.createElement("canvas");W.width=64,W.height=64;let st=W.getContext("2d");if(!st)throw new Error("Canvas 2D is required for contact shadows.");let V=st.createRadialGradient(32,32,3,32,32,31);V.addColorStop(0,"#241f38e8"),V.addColorStop(.3,"#292335a8"),V.addColorStop(.7,"#29233540"),V.addColorStop(1,"#29233500"),st.fillStyle=V,st.fillRect(0,0,64,64);let lt=new Xi(W);lt.magFilter=Rn;let ft=[],_t=(J,ht,Nt,$t,$e,ke=.065,ne=.68)=>{let Un=new Re(new Hn($t,$e),new Fn({map:lt,transparent:!0,depthWrite:!1,opacity:ne,toneMapped:!1}));Un.rotation.x=-Math.PI/2,Un.position.set(ht,ke,Nt),Un.renderOrder=3,J.add(Un);let Yi=TE($t,$e);Yi.position.set(ht,ke+.12,Nt),J.add(Yi),ft.push({mesh:Un,opacity:ne})};s||_t(r,ci.x,ci.z,1.05,.85,.076),_t(r,0,a,4.1,.82);let Xt=J=>{let ht=hE(J);Object.values(ht).flatMap($t=>Object.values($t)).forEach(l);let Nt=ZN(J,lt,ht);return r.add(Nt.group,Nt.shadow,Nt.caster),Nt},oe=t.agents.map(J=>Xt(J.id)),xe=t.agents.map(({x:J,z:ht})=>({x:J,z:ht})),qt=new ki;qt.visible=!s&&t.progress.context;let Q=new ki;if(Q.visible=!s&&!t.progress.context,!s){jn(qt,3,.08,-1.8,3.05,.12,2.85,wi.lavender),Nn(qt,l(xE()),3,.76,-2.5,1.45,1.42),_t(qt,3,-2.5,1.25,.65,.153);for(let Nt=0;Nt<3;Nt++)Nn(qt,l(Ov(Nt)),2.1+Nt*.78,.48,-1.18,.66,.87),_t(qt,2.1+Nt*.78,-1.18,.54,.42,.153,.55);let J=zv("CONTEXT");J.position.set(3,2.28,-2.1),qt.add(J),r.add(qt);let ht=zv("CONTEXT  ?");ht.position.set(3,1.34,-1.8),Q.add(ht),r.add(Q)}let et=new ki;r.add(et);let St=Es.map(({x:J,z:ht},Nt)=>{let $t=YN(et,J,ht,Nt,l);return _t(et,J,ht-.56,1.3,.65),_t(et,J+.35,ht+.37,.55,.45,.065,.5),$t}),Ft=Es.map(({x:J,z:ht},Nt)=>{let $t=new sa(Nt%2?12755181:7726029,0,3.1,2);return $t.position.set(J,1.35,ht-.54),r.add($t),$t}),X=Es.map(({x:J,z:ht})=>Nn(et,l(ME()),J+.43,.82,ht-.55,.18,.27)),Ct=Es.map(({x:J,z:ht})=>Nn(et,l(gE()),J-.58,.79,ht-.49,.36,.34)),le={queued:[l(Nl("queued"))],assigned:[l(Nl("assigned"))],working:Array.from({length:17},(J,ht)=>l(Nl("working",ht))),complete:[l(Nl("complete"))],failed:[l(Nl("failed"))]},D=Es.map(({x:J,z:ht})=>{let Nt=new Re(new Hn(.58,.58),new Fn({map:le.queued[0],transparent:!0,alphaTest:.25,depthWrite:!1,side:Dn}));return Nt.position.set(J,2.06,ht-.57),r.add(Nt),Nt});for(let J=0;J<2;J++)Nn(r,l(Ov(J)),-4.6+J*.35,.43,2.2,.65,.81),_t(r,-4.6+J*.35,2.2,.55,.4,.065,.52);let pe=l(mE());Nn(r,pe,-4.42,.84,2.83,.94,1.14).material.color.setHex(9084052),Nn(r,pe,-4.37,.84,2.99,.98,1.16),_t(r,-4.37,2.99,.63,.55),Nn(r,pe,5.8,.67,3.35,.78,.94),_t(r,5.8,3.35,.55,.42);let Dt=[];for(let J=0;J<(s?0:9);J++){let ht=jn(r,ci.x-.32+J%3*.32,2.2+J%2*.2,ci.z-.33+Math.floor(J/3)*.31,.08,.08,.08,wi.cream,wi.cream,.8);Dt.push(ht)}let yt=document.createElement("canvas");yt.width=128,yt.height=128;let me=yt.getContext("2d");if(!me)throw new Error("Canvas 2D is required for sunlight pools.");let vt=me.createImageData(128,128);for(let J=0;J<128;J++)for(let ht=0;ht<128;ht++){let Nt=Math.max(0,1-Math.abs((ht+.5)/64-1)),$t=(J+.5)/128,$e=Math.min(1,$t*9,(1-$t)*5),ke=(J*128+ht)*4;vt.data[ke]=vt.data[ke+1]=vt.data[ke+2]=255,vt.data[ke+3]=Math.round(220*Nt**1.4*$e)}me.putImageData(vt,0,0);let Gt=new Xi(yt);Gt.minFilter=Rn;let Oe=document.createElement("canvas");Oe.width=Oe.height=64;let Jt=Oe.getContext("2d");if(!Jt)throw new Error("Canvas 2D is required for sunlight pools.");let T=Jt.createRadialGradient(32,32,3,32,32,32);T.addColorStop(0,"#ffffffcc"),T.addColorStop(.65,"#ffffff80"),T.addColorStop(1,"#ffffff00"),Jt.fillStyle=T,Jt.fillRect(0,0,64,64);let S=new Xi(Oe);S.minFilter=Rn;let z=Pv.map(J=>{let ht=new Qn;ht.setAttribute("position",new vn(new Float32Array(12),3)),ht.setAttribute("uv",new vn(new Float32Array([0,1,1,1,0,0,1,0]),2)),ht.setIndex([0,1,2,1,3,2]);let Nt=new Fn({map:Gt,color:16763280,transparent:!0,opacity:0,depthWrite:!1,side:Dn,blending:Fr}),$t=new Re(ht,Nt);$t.renderOrder=2,r.add($t);let $e=new Re(new Hn(2.05,2.2),new Fn({map:S,transparent:!0,opacity:0,depthWrite:!1,color:16766637,blending:Fr}));$e.rotation.x=-Math.PI/2,$e.renderOrder=2,r.add($e);let ke=new Qn;ke.setAttribute("position",new vn(new Float32Array(36),3));let ne=new Sl(ke,new xl({map:S,color:16766637,size:3,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,blending:Fr}));return ne.renderOrder=2,r.add(ne),{x:J,shaft:$t,pool:$e,dust:ne}}),q=1,nt=0,Y=0,Et=!1,ot=0,Tt=0,At=0,at=null,ut=null,Ot=new hu,wt=new Kt,dt=J=>{let ht=u.domElement.getBoundingClientRect();wt.set((J.clientX-ht.left)/ht.width*2-1,-(J.clientY-ht.top)/ht.height*2+1),Ot.setFromCamera(wt,c);let Nt=oe.slice(0,t.progress.capacity).map($t=>$t.figure);for(let $t of Ot.intersectObjects(Nt)){let $e=oe.findIndex(Ci=>Ci.figure===$t.object),ke=$t.object.material.map;if($e<0||!$t.uv||!ke||!(ke.image instanceof HTMLCanvasElement))continue;let ne=ke.image,Un=Math.min(ne.width-1,Math.floor($t.uv.x*ne.width)),Yi=Math.min(ne.height-1,Math.floor((1-$t.uv.y)*ne.height));if((ne.getContext("2d")?.getImageData(Un,Yi,1,1).data[3]??0)>48)return $e}return null},Yt=J=>{Et=!0,At=0,ot=J.clientX,Tt=J.clientY,u.domElement.setPointerCapture(J.pointerId)},L=J=>{if(i&&!Et){let $t=dt(J);u.domElement.style.cursor=$t===null?"grab":"pointer",i.onAgentHover($t,J.clientX,J.clientY)}if(!Et)return;let ht=J.clientX-ot,Nt=J.clientY-Tt;At+=Math.hypot(ht,Nt),!(i&&At<=5)&&(ut=null,i?.onAgentHover(null,J.clientX,J.clientY),nt=an.clamp(nt-ht*.012/q,-2.5,2.5),Y=an.clamp(Y-Nt*.014/q,-2,2),ot=J.clientX,Tt=J.clientY)},rt=J=>{if(i&&Et&&At<=5&&J.type==="pointerup"){let ht=dt(J);ht!==null&&i.onAgentSelect(ht)}Et=!1},ct=()=>i?.onAgentHover(null,0,0),xt=J=>{J.preventDefault(),ut=null,q=an.clamp(q*(J.deltaY>0?.9:1.1),.74,1.65)},tt=u.domElement;tt.addEventListener("pointerdown",Yt),tt.addEventListener("pointermove",L),tt.addEventListener("pointerup",rt),tt.addEventListener("pointercancel",rt),i&&tt.addEventListener("pointerleave",ct),tt.addEventListener("wheel",xt,{passive:!1});let $=()=>{let J=Math.max(1,e.clientWidth),ht=Math.max(1,e.clientHeight),Nt=J<700?.8:1;u.setSize(Math.ceil(J*Nt),Math.ceil(ht*Nt),!1);let $t=J/ht,$e=4.7,ke=yu.distanceTo(new P(0,.4,0));c.aspect=$t,c.fov=an.radToDeg(2*Math.atan(Math.max(Math.tan(an.degToRad(28/2)),$e/(ke*$t)))),c.updateProjectionMatrix()},bt=new ResizeObserver($);bt.observe(e),$();let Lt=matchMedia("(prefers-reduced-motion: reduce)").matches,ce=performance.now()/1e3,fe=ce,Ri=0,ui="";return{capturePositions(){xe=t.agents.map(({x:J,z:ht})=>({x:J,z:ht}))},focusAgent(J){at=J!==null&&J>=0&&J<t.progress.capacity?J:null,ut=at},render(J,ht,Nt,$t){let $e=Math.max(0,Math.min(.05,J-fe));ce+=$e,fe=J;let ke=`${t.progress.capacity}/${t.progress.context}/${t.progress.workflow}`;($t||ht!==Ri||ke!==ui)&&(u.shadowMap.needsUpdate=!0),Ri=ht,ui=ke;let ne=df(t.time,ht),Un=ne.sun+ne.moon,Yi=Un>0?ne.moon/Un:0,Ci=ne.moon/.45,ca=an.clamp(1-ne.sun/2,0,1);k.color.setHex(16777215).lerp(XN,Ci*.7),g.color.setHex(ne.sunColor).lerp(HN,Yi),g.intensity=Un,g.position.set(an.lerp(ne.sunX,-3.4,Yi),an.lerp(ne.sunY,6.6,Yi),-24),m.color.setHex(ne.skyColor).lerp(VN,Ci*.32).lerp(kN,ne.lamp*(.28-Ci*.1)),m.intensity=ne.ambient,h.color.setHex(ne.bounceColor).lerp(GN,Ci*.32),h.groundColor.setHex(11827574),h.intensity=ne.ambient*.95;let tr=Math.min(1,ne.sun/3.2),Su=E.material;Su.uniforms.uSunSide.value=an.clamp(ne.sunX/6,-1,1)*tr,Su.uniforms.uNight.value=ca,ft.forEach(({mesh:It,opacity:te})=>{It.material.opacity=te*(.72+tr*.28)}),_.intensity=.9+ca*1.35+ne.lamp*.35,A.intensity=.25+ca*1.4,w.intensity=.25+ne.lamp*1.1,Z.forEach(({bulb:It,glow:te})=>{It.material.emissiveIntensity=ne.lamp*.75,te.intensity=ne.lamp*1.25}),u.toneMappingExposure=1.34-ca*.16,v.uniforms.uDay.value=Math.min(1,ne.sun/3.2),v.uniforms.uWarm.value=ne.warmth,v.uniforms.uSkyTint.value.setHex(ne.skyColor),v.uniforms.uTime.value=Lt?0:t.time,v.uniforms.uSun.value.copy(g.position).normalize();for(let{x:It,shaft:te,pool:M,dust:I}of z){let F=(Bt.windowY-.08)/(g.position.y-Bt.windowY),H=It+(It-g.position.x)*F,O=Bt.back+(Bt.back-g.position.z)*F,it=an.clamp((Bt.halfWidth-.9-Math.abs(H))/.7,0,1);te.geometry.attributes.position.array.set([It-.82,Bt.windowY+.06,Bt.back+.2,It+.82,Bt.windowY+.06,Bt.back+.2,H-1.15,.08,O,H+1.15,.08,O]),te.geometry.attributes.position.needsUpdate=!0,te.geometry.computeBoundingSphere(),te.material.color.copy(g.color),te.material.opacity=(tr*.4+Ci*.04)*it,M.material.color.copy(g.color),M.material.opacity=(ne.sun/3.2*.22+Ci*.12)*it,M.position.set(H,.067,O);let Mt=I.geometry.attributes.position.array;for(let mt=0;mt<12;mt++){let Pt=.14+(mt*.31+It*.13+1)%1*.7,Vt=Lt?0:Math.sin(ce*.38+mt*2.3+It),Rt=Pt+Vt*.025,se=Math.sin(mt*15.73+It*7.19)*.68;Mt[mt*3]=an.lerp(It,H,Rt)+se*(.6+Rt*.3),Mt[mt*3+1]=an.lerp(Bt.windowY,.12,Rt),Mt[mt*3+2]=an.lerp(Bt.back+.22,O,Rt)}I.geometry.attributes.position.needsUpdate=!0,I.geometry.computeBoundingSphere(),I.material.color.copy(g.color),I.material.opacity=(tr*.42+Ci*.09)*it}for(;oe.length<t.agents.length;)oe.push(Xt(oe.length));let Mu=t.agents.some(It=>It.taskId!==void 0);if(K&&(K.material.emissiveIntensity=(Mu?.65:.37)+(Lt?0:Math.sin(ce*2.2)*.1),K.position.y=.95+(Lt?0:Math.sin(ce*1.9)*.035)),qt.visible=!s&&t.progress.context,Q.visible=!s&&!t.progress.context,X.forEach((It,te)=>{let M=t.agents[te]?.state==="working";It.material.emissiveIntensity=te<t.progress.capacity?M?1.1:.45:0,It.material.color.setHex(te<t.progress.capacity?M?16777215:10930622:wi.edge)}),St.forEach((It,te)=>{It.material.emissiveIntensity=.24+ca*.58,Ft[te].intensity=te<t.progress.capacity?.12+ca*1.45+(t.agents[te]?.state==="working"?.3:0):0}),Ct.forEach((It,te)=>{It.visible=te<t.progress.capacity&&t.progress.workflow>0,It.material.emissiveIntensity=.18+t.progress.workflow*.1}),D.forEach((It,te)=>{let M=t.requests.find(F=>F.stationId===te&&(F.status==="queued"||F.status==="assigned"||F.status==="working"))??t.requests.find(F=>F.stationId===te&&F.resolvedAt!==void 0&&t.time-F.resolvedAt<2.5);if(It.visible=!!M&&te<t.progress.capacity,!M)return;let I=M.status==="working"?Math.min(16,Math.floor(M.progress*16)):0;It.material.map=le[M.status][I],It.position.y=2.06+(Lt?0:Math.sin(ce*1.8+te)*.045)}),oe.forEach((It,te)=>{let M=t.agents[te],I=cE(xe[te],M,Nt);if(It.group.position.set(I.x,M.state==="idle"&&!Lt?Math.sin(ce*1.65+te)*.038:0,I.z),It.shadow.position.set(I.x,.095,I.z),It.caster.position.set(I.x,.18,I.z),It.shadow.scale.setScalar(te===at&&s?1.22:1),It.shadow.material.opacity=(te===at&&s?.86:.68)*(.72+tr*.28),M.state==="idle")It.facing=te<2?"right":"left";else if(M.state==="working")It.facing="away";else{let O=M.target.x-M.x,it=M.target.z-M.z;it<-Math.abs(O)*.85&&Math.abs(it)>.2?It.facing="away":Math.abs(O)>.2?It.facing=O<0?"left":"right":it>.2&&(It.facing="left")}let F=M.state==="working"?"working":M.state==="idle"?"coffee":!Lt&&Math.sin(ce*8+te)>0?"stepA":"stepB",H=It.frames[F][It.facing];H!==It.figure.material.map&&(It.figure.material.map=H,It.figure.material.emissiveMap=H,It.backing.material.map=H,It.backing.material.emissiveMap=H)}),Dt.forEach((It,te)=>{It.position.y=2.2+(Lt?0:Math.sin(ce*1.2+te*2.1)*.15),It.visible=Mu||te%3===0}),ut!==null&&ut<t.progress.capacity){let It=t.agents[ut],te=1-Math.exp(-$e*7);nt=an.lerp(nt,an.clamp(It.x+1.15,-2.5,2.5),te),Y=an.lerp(Y,an.clamp(It.z,-2,2),te),q=an.lerp(q,1.3,te)}c.zoom=q,c.position.set(yu.x+nt,yu.y,yu.z+Y),c.lookAt(nt,.4,Y),c.updateProjectionMatrix(),x.position.copy(c.position),d||u.render(r,c)},dispose(){bt.disconnect(),tt.removeEventListener("pointerdown",Yt),tt.removeEventListener("pointermove",L),tt.removeEventListener("pointerup",rt),tt.removeEventListener("pointercancel",rt),i&&tt.removeEventListener("pointerleave",ct),tt.removeEventListener("wheel",xt),tt.removeEventListener("webglcontextlost",f),tt.removeEventListener("webglcontextrestored",p),e.classList.remove("context-lost"),r.traverse(J=>{J instanceof Re&&(J.geometry.dispose(),J.material instanceof Fn&&J.material.map===Gt&&(J.material.map=null),(Array.isArray(J.material)?J.material:[J.material]).forEach(Nt=>Nt.dispose())),J instanceof _l&&(J.material.map?.dispose(),J.material.dispose()),J instanceof Sl&&(J.geometry.dispose(),J.material.dispose())}),Gt.dispose(),S.dispose(),lt.dispose(),o.forEach(J=>J.dispose()),u.dispose(),tt.remove()}}}var wE=["Ada","Aiko","Alma","Amari","Anika","Arden","Ari","Basil","Bea","Cleo","Dara","Demi","Eli","Emery","Esme","Finn","Inez","Ira","Jules","Kaia","Kit","Lena","Lio","Luca","Mara","Mica","Milo","Mira","Nell","Nico","Noor","Oli","Orla","Pax","Remy","Rhea","Rio","Sage","Soli","Tavi"],RE=["Alder","Arbor","Ash","Bell","Birch","Bloom","Brooks","Cedar","Cloud","Dale","Dawn","Dove","Dusk","Elm","Fern","Finch","Frost","Grove","Hart","Haven","Hollow","Ivy","Lake","Lark","Linden","Marsh","Meadow","Moss","Oak","Orchard","Pearl","Pine","Reed","Ridge","River","Rowan","Shore","Silver","Stone","Vale"];function CE(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t=Math.imul(t^t>>>16,2146121005),t=Math.imul(t^t>>>15,2221713035),t^=t>>>16,t>>>0}function JN(e){return`${wE[CE(`given:${e}`)%wE.length]} ${RE[CE(`family:${e}`)%RE.length]}`}function rp(e,t){return e.title||(e.sessionId===t?`Your session \xB7 ${e.sessionId.slice(0,8)}`:`Session ${e.sessionId.slice(0,8)}`)}function Fv(e){let t=[...e.sessions].sort((s,a)=>+(a.sessionId===e.currentSessionId)-+(s.sessionId===e.currentSessionId)||s.sessionId.localeCompare(a.sessionId)),n=[...t.map(s=>({key:s.sessionId,sessionTitle:rp(s,e.currentSessionId),status:s.status,activity:s.activity,helper:!1})),...t.flatMap(s=>s.subagents.map((a,r)=>({key:`${s.sessionId}:helper:${a.id??r}`,sessionTitle:rp(s,e.currentSessionId),status:a.status,activity:a.activity,helper:!0})))],i=new Set;return n.map(s=>{let a=JN(s.key),r=a;for(let o=2;i.has(r);o++)r=`${a} ${o}`;return i.add(r),{...s,name:r}})}var G=bu(Hv(),1),Ds=Es.length,jN=Oc.map(({x:e})=>({x:e,z:Bv+.75})),xu=1/30,$N={currentSessionId:"",sessions:[]};function tU(e){return{id:e,state:"idle",x:100,z:100,target:{x:100,z:100},route:[],workLeft:0,workTotal:0,visitedContext:!1}}function eU(){let e=new ff(p0());return e.agents=Array.from({length:Ds},(t,n)=>tU(n)),e.requests=[],e.progress.capacity=0,e.progress.context=!1,e.progress.workflow=1,e}function nU(e,t,n){let i=t.slice(0,Ds);e.progress.capacity=i.length,e.requests=[],i.forEach((s,a)=>{let r=e.agents[a],o=s.status!=="idle"&&s.status!=="offline",l=o?Es[a]:jN[a];if(n[a]||(r.x=l.x,r.z=l.z),n[a]=!0,r.target={...l},o){r.taskId=a+1;let c=s.status==="blocked"?"failed":s.status==="thinking"?"assigned":"working";e.requests.push({id:a+1,stationId:a,title:s.activity,kind:"chat",status:c,progress:0,reward:0,...c==="failed"?{resolvedAt:e.time}:{}})}else r.taskId=void 0});for(let s=i.length;s<Ds;s++){n[s]=!1;let a=e.agents[s];a.x=a.z=100,a.target={x:100,z:100},a.taskId=void 0,a.state="idle"}}function iU(e,t){for(let n=0;n<e.progress.capacity;n++){let i=e.agents[n],s=i.target.x-i.x,a=i.target.z-i.z,r=Math.hypot(s,a),o=i.taskId!==void 0;if(r>.02){let l=Math.min(r,2.05*t);i.x+=s/r*l,i.z+=a/r*l,i.state=o?"walking":"returning"}else i.x=i.target.x,i.z=i.target.z,i.state=o?"working":"idle"}}function sU(){let[e,t]=(0,Ie.useState)($N),[n,i]=(0,Ie.useState)("Connecting to local Copilot sessions\u2026"),[s,a]=(0,Ie.useState)(!1),[r,o]=(0,Ie.useState)("office"),[l,c]=(0,Ie.useState)(!1),[u,d]=(0,Ie.useState)(!1),[f,p]=(0,Ie.useState)(0),[v,x]=(0,Ie.useState)(0),[m,h]=(0,Ie.useState)(!1),[g,y]=(0,Ie.useState)(1),[_,A]=(0,Ie.useState)(""),[w,C]=(0,Ie.useState)(null),N=(0,Ie.useRef)(null),E=(0,Ie.useRef)(null),b=(0,Ie.useRef)(null),U=(0,Ie.useRef)([]),B=(0,Ie.useRef)(null),k=(0,Ie.useRef)(""),Z=(0,Ie.useRef)(0),K=(0,Ie.useRef)(!1),W=(0,Ie.useRef)(1),st=(X,Ct=!0)=>{let le=U.current.findIndex(D=>D.key===X);b.current?.focusAgent(le>=0&&le<Ds?le:null),k.current=`${X}:${le}`,A(X),a(!0),Ct&&o("agents")};(0,Ie.useEffect)(()=>{s&&r==="agents"&&B.current?.scrollIntoView({block:"nearest",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},[_,s,r]),(0,Ie.useEffect)(()=>{if(!N.current)return;let X=eU();E.current=X;let Ct=Array(Ds).fill(!1),le;try{le=AE(N.current,X,"live",{onAgentHover(Jt,T,S){let z=Jt===null?void 0:U.current[Jt],q=N.current?.getBoundingClientRect();C(z&&q?{name:z.name,x:T-q.left,y:S-q.top}:null)},onAgentSelect(Jt){let T=U.current[Jt];T&&st(T.key)}}),b.current=le}catch(Jt){N.current.classList.add("static-fallback"),i(`3D office unavailable; live status remains visible. ${Jt instanceof Error?Jt.message:String(Jt)}`)}let D=new EventSource("/events");D.onmessage=Jt=>{try{let T=JSON.parse(Jt.data);if(!Array.isArray(T.sessions)||typeof T.currentSessionId!="string")throw new Error("Invalid office status");let S=Fv(T);U.current=S,le?.capturePositions(),nU(X,S,Ct),t(T),i("Live read-only view \xB7 local sessions running Agent Inc Live")}catch(T){i(`Office update failed: ${T instanceof Error?T.message:String(T)}`)}},D.addEventListener("error",()=>{i("Connection interrupted; reconnecting to the local office\u2026")});let pe=0,Ht=performance.now(),Dt=0,yt=Ht/1e3,me=0,vt=Ht,Gt=()=>{Ht=performance.now(),Dt=0,le?.capturePositions()},Oe=Jt=>{let T=Math.min((Jt-Ht)/1e3,.2);if(Ht=Jt,!document.hidden){Dt+=T;let S=!1;for(;Dt>=xu;)le?.capturePositions(),iU(X,xu),K.current||(X.time+=xu*W.current),Dt-=xu,S=!0;K.current||(yt+=T*W.current),le?.render(yt,Z.current,Dt/xu,S),me++,Jt-vt>=1e3&&(p(Math.round(me*1e3/(Jt-vt))),me=0,vt=Jt)}pe=requestAnimationFrame(Oe)};return document.addEventListener("visibilitychange",Gt),pe=requestAnimationFrame(Oe),()=>{cancelAnimationFrame(pe),document.removeEventListener("visibilitychange",Gt),D.close(),le?.dispose(),b.current=null,E.current=null}},[]);let V=Fv(e),lt=V.slice(0,Ds),ft=V.filter(X=>X.status==="thinking"||X.status==="tool").length,_t=V.filter(X=>X.status==="idle").length,Xt=V.filter(X=>X.status==="blocked").length,oe=e.sessions.reduce((X,Ct)=>X+Ct.subagents.length,0),xe=e.sessions.reduce((X,Ct)=>X+(Ct.messages??0),0),qt=e.sessions.flatMap(X=>(X.events??[]).map((Ct,le)=>({...Ct,owner:rp(X,e.currentSessionId),key:`${X.sessionId}:${Ct.at}:${le}`}))).sort((X,Ct)=>Ct.at-X.at).slice(0,8);(0,Ie.useEffect)(()=>{let X=V.findIndex(le=>le.key===_),Ct=`${_}:${X}`;k.current!==Ct&&(b.current?.focusAgent(X>=0&&X<Ds?X:null),k.current=Ct),_&&X<0&&(A(""),C(null))},[e,_]);let Q=df(E.current?.time??0,v),et=()=>{Z.current=(Z.current+.25)%1,x(Z.current)},St=()=>{K.current=!K.current,h(K.current)},Ft=()=>{W.current=W.current===1?2:1,y(W.current)};return(0,G.jsxs)("main",{className:"shell",children:[(0,G.jsxs)("header",{className:"topbar",children:[(0,G.jsxs)("div",{className:"identity","aria-label":"Agent Inc Live Office",children:[(0,G.jsx)("span",{className:"brand-icon","aria-hidden":"true",children:"\u2726"}),(0,G.jsxs)("div",{className:"brand",children:["agent",(0,G.jsx)("span",{children:"inc."})]})]}),(0,G.jsxs)("div",{className:"top-stats",children:[(0,G.jsxs)("div",{className:"stat",children:[(0,G.jsx)("span",{className:"stat-label",children:"\u2727 \xA0SESSIONS"}),(0,G.jsx)("strong",{children:e.sessions.length})]}),(0,G.jsxs)("div",{className:"stat",children:[(0,G.jsx)("span",{className:"stat-label",children:"\u25C8 \xA0WORKING"}),(0,G.jsx)("strong",{children:ft})]}),(0,G.jsxs)("div",{className:"stat desktop-stat",children:[(0,G.jsx)("span",{className:"stat-label",children:"\u25CC \xA0MESSAGES"}),(0,G.jsx)("strong",{children:xe})]}),(0,G.jsxs)("button",{type:"button",className:"system-toggle","aria-expanded":s,"aria-controls":"system-panel",onClick:()=>a(X=>!X),children:[s?"CLOSE":"ACTIVITY"," ",(0,G.jsx)("span",{"aria-hidden":"true",children:"\u2733"})]})]})]}),(0,G.jsxs)("div",{className:"layout",children:[(0,G.jsxs)("section",{className:"world-panel","aria-label":"Live Copilot office",children:[(0,G.jsxs)("div",{className:"scene-header",children:[(0,G.jsxs)("div",{children:[(0,G.jsx)("span",{className:"online-dot"})," LIVE OFFICE"]}),(0,G.jsx)("div",{className:"scene-tools",children:(0,G.jsxs)("button",{type:"button",className:"time-preview",onClick:et,title:"Preview the next six hours of decorative office lighting","aria-label":`Office lighting ${Q.label}; preview next six hours`,children:[(0,G.jsx)("span",{"aria-hidden":"true",children:Q.sun>1?"\u263C":Q.moon>.2?"\u263E":"\u25D1"})," ",Q.label," ",(0,G.jsx)("span",{className:"time-arrow",children:"\u21BB"})]})})]}),(0,G.jsxs)("div",{ref:N,className:"world-host",children:[w&&(0,G.jsx)("div",{className:"agent-hover",style:{left:w.x,top:w.y},children:w.name}),(0,G.jsxs)("div",{className:"world-callout live-callout",children:[(0,G.jsx)("span",{className:"callout-star",children:"\u2726"}),(0,G.jsx)("span",{children:Xt?`${Xt} worker${Xt===1?"":"s"} need attention.`:ft?`${ft} worker${ft===1?" is":"s are"} active.`:"The office is listening for Copilot activity."})]})]}),(0,G.jsxs)("div",{className:"scene-footer",children:[(0,G.jsxs)("div",{className:"scene-live",children:[(0,G.jsx)("span",{className:"tiny-pulse"}),(0,G.jsx)("span",{className:"live-label",children:"OBSERVING"}),(0,G.jsxs)("span",{className:"live-count",children:[" ",(0,G.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",ft," working",(0,G.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",_t," on break",(0,G.jsx)("span",{className:"footer-sep",children:"\xB7"})," ",Xt," needing attention"]})]}),(0,G.jsxs)("div",{className:"scene-controls",children:[(0,G.jsx)("button",{type:"button",onClick:St,title:"Pause only decorative light and idle motion, not live sessions","aria-label":m?"Resume office ambience":"Pause office ambience",children:m?"\u25B6":"\u2161"}),(0,G.jsxs)("button",{type:"button",onClick:Ft,title:"Change cosmetic lighting speed only","aria-label":`Set office ambience to ${g===1?"double":"normal"} speed`,children:[g,"\xD7"]}),(0,G.jsx)("button",{type:"button",onClick:()=>d(!u),title:"Toggle view diagnostics","aria-label":u?"Hide diagnostics":"Show diagnostics","aria-expanded":u,children:"\u22EF"})]})]})]}),(0,G.jsxs)("aside",{id:"system-panel",className:`sidebar ${s?"sidebar-open":""}`,children:[(0,G.jsxs)("div",{className:"sidebar-heading",children:[(0,G.jsx)("span",{children:"LIVE OFFICE / ACTIVITY"}),(0,G.jsx)("button",{type:"button",className:"sidebar-close",onClick:()=>a(!1),"aria-label":"Close activity",children:"\xD7"})]}),(0,G.jsx)("div",{className:"sidebar-tabs",role:"tablist","aria-label":"Activity categories",children:["office","stations","agents"].map(X=>(0,G.jsx)("button",{type:"button",id:`tab-${X}`,role:"tab","aria-selected":r===X,"aria-controls":`panel-${X}`,onClick:()=>o(X),children:X},X))}),r==="office"&&(0,G.jsxs)("div",{id:"panel-office",role:"tabpanel","aria-labelledby":"tab-office",className:"upgrade-pane",children:[(0,G.jsxs)("div",{className:"system-card",children:[(0,G.jsx)("div",{className:"system-emblem",children:"\u2726"}),(0,G.jsxs)("div",{children:[(0,G.jsx)("div",{className:"system-name",children:"The Living Office"}),(0,G.jsx)("div",{className:"system-desc",children:"Real sessions, displayed without prompts, code or tool output."})]})]}),(0,G.jsxs)("div",{className:"mini-metrics",children:[(0,G.jsxs)("div",{children:[(0,G.jsx)("span",{children:"LOCAL SESSIONS"}),(0,G.jsx)("strong",{children:e.sessions.length})]}),(0,G.jsxs)("div",{children:[(0,G.jsx)("span",{children:"MESSAGES SEEN"}),(0,G.jsx)("strong",{children:xe})]})]}),(0,G.jsxs)("div",{className:"live-detail",children:[(0,G.jsxs)("span",{children:[oe," subagents"]}),(0,G.jsxs)("span",{children:[qt.length," recent events"]})]}),(0,G.jsxs)("div",{className:"section-title",children:[(0,G.jsx)("span",{children:"\u2726 \xA0OFFICE SYSTEMS"}),(0,G.jsx)("span",{children:"READ ONLY"})]}),(0,G.jsxs)("div",{className:"upgrade-list",children:[(0,G.jsxs)("div",{className:"upgrade",children:[(0,G.jsx)("div",{className:"upgrade-symbol",children:"\u25C8"}),(0,G.jsxs)("div",{className:"upgrade-info",children:[(0,G.jsxs)("div",{className:"upgrade-name",children:["Live status ",(0,G.jsx)("span",{children:"CONNECTED"})]}),(0,G.jsx)("p",{children:n}),(0,G.jsxs)("div",{className:"live-detail",children:[(0,G.jsxs)("span",{children:[ft," active"]}),(0,G.jsxs)("span",{children:[_t," idle"]}),(0,G.jsxs)("span",{className:Xt?"attention":"",children:[Xt," need attention"]})]})]})]}),(0,G.jsxs)("div",{className:"upgrade",children:[(0,G.jsx)("div",{className:"upgrade-symbol context-symbol",children:"\u25A3"}),(0,G.jsxs)("div",{className:"upgrade-info",children:[(0,G.jsxs)("div",{className:"upgrade-name",children:["Project room ",(0,G.jsxs)("span",{children:[lt.length," / ",Ds," DESKS"]})]}),(0,G.jsx)("p",{children:"Additional sessions and helpers stay visible in the lists below. Only sessions running this extension can join."})]})]})]})]}),r==="stations"&&(0,G.jsxs)("div",{id:"panel-stations",role:"tabpanel","aria-labelledby":"tab-stations",className:"upgrade-pane",children:[(0,G.jsxs)("div",{className:"pane-intro",children:[(0,G.jsx)("strong",{children:"Session desks"}),(0,G.jsx)("span",{children:"Each desk represents actual local Copilot activity. Selection highlights its status here; the canvas cannot navigate App sessions."})]}),lt.map((X,Ct)=>(0,G.jsxs)("div",{className:"upgrade station-card live-card",children:[(0,G.jsx)("div",{className:"station-number",children:String(Ct+1).padStart(2,"0")}),(0,G.jsxs)("div",{className:"upgrade-info",children:[(0,G.jsxs)("div",{className:"upgrade-name",children:[X.name," ",(0,G.jsx)("span",{children:X.status.toUpperCase()})]}),(0,G.jsx)("p",{children:X.sessionTitle}),(0,G.jsx)("p",{children:X.activity}),(0,G.jsxs)("button",{type:"button",className:"buy-button","aria-pressed":_===X.key,onClick:()=>st(X.key,!1),children:[_===X.key?"SELECTED":"FIND AGENT"," ",(0,G.jsxs)("span",{children:["\u25C8 ",Ct+1]})]})]})]},X.key)),!lt.length&&(0,G.jsx)("div",{className:"pane-intro",children:"Waiting for the first participating session."})]}),r==="agents"&&(0,G.jsxs)("div",{id:"panel-agents",role:"tabpanel","aria-labelledby":"tab-agents",className:"upgrade-pane",children:[(0,G.jsxs)("div",{className:"pane-intro",children:[(0,G.jsx)("strong",{children:"The workers"}),(0,G.jsx)("span",{children:"Subagents appear as additional workers when a desk is free. No training or upgrades alter real Copilot sessions."})]}),V.map((X,Ct)=>(0,G.jsxs)("div",{className:`persona-card ${_===X.key?"persona-selected":""}`,ref:_===X.key?B:void 0,children:[(0,G.jsxs)("div",{className:"persona-heading",children:[(0,G.jsx)("span",{className:"persona-avatar",style:{backgroundColor:X.helper?"#b49ccc":"#78bea6"},children:X.helper?"\u2733":"\u2726"}),(0,G.jsxs)("span",{children:[(0,G.jsx)("button",{type:"button",className:"agent-name",onClick:()=>st(X.key),"aria-label":`Find ${X.name} in the office`,children:X.name}),(0,G.jsxs)("small",{children:[X.helper?"Subagent":"Agent"," \xB7 ",X.status,Ct>=Ds?" \xB7 waiting for a desk":""]})]})]}),(0,G.jsxs)("div",{className:"agent-assignment",children:["SESSION ",(0,G.jsx)("strong",{title:X.sessionTitle,children:X.sessionTitle})]}),(0,G.jsx)("div",{className:"live-descriptor",children:X.activity})]},X.key)),!V.length&&(0,G.jsx)("div",{className:"pane-intro",children:"No workers are connected yet."})]}),(0,G.jsx)("div",{className:"side-hint",children:"\u2727 \xA0Only sanitized local activity is shown. All controls here affect this view, not the underlying agents."})]})]}),(0,G.jsxs)("section",{className:`feed-panel ${l?"feed-open":""}`,"aria-label":"Live activity feed",children:[(0,G.jsxs)("button",{type:"button",className:"feed-top",onClick:()=>c(X=>!X),"aria-expanded":l,"aria-controls":"signal-list",children:[(0,G.jsxs)("span",{children:[(0,G.jsx)("span",{className:"feed-glyph",children:"\u25C8"})," SIGNALS ",(0,G.jsxs)("span",{className:"feed-count",children:[ft," LIVE"]})]}),(0,G.jsx)("span",{className:"feed-chevron","aria-hidden":"true",children:l?"\u2304":"\u2303"})]}),(0,G.jsxs)("div",{id:"signal-list",className:"feed-list","aria-live":"off",children:[!qt.length&&(0,G.jsxs)("div",{className:"feed-empty",children:[(0,G.jsx)("span",{children:"\u25CC"})," Listening for the first activity\u2026"]}),qt.map(X=>(0,G.jsxs)("div",{className:`feed-item feed-${X.kind==="error"?"failed":X.kind==="message"?"complete":"working"}`,children:[(0,G.jsx)("span",{className:"feed-icon",children:X.kind==="error"?"!":X.kind==="message"?"\u2713":"\u25C9"}),(0,G.jsxs)("span",{className:"feed-task",children:[X.owner," \xB7 ",X.label]}),(0,G.jsx)("span",{className:"feed-status",children:X.kind.toUpperCase()})]},X.key))]})]}),n!=="Live read-only view \xB7 local sessions running Agent Inc Live"&&(0,G.jsx)("div",{className:"storage-error",role:"status",children:n}),u&&(0,G.jsxs)("div",{className:"debug-panel",children:[(0,G.jsxs)("span",{children:["LIGHT ",E.current?.time.toFixed(1)??0,"s"]}),(0,G.jsxs)("span",{children:["FPS ",f]}),(0,G.jsxs)("span",{children:["DESKS ",lt.length,"/",Ds]}),(0,G.jsxs)("span",{children:["WORKERS ",V.length]}),(0,G.jsxs)("span",{children:["SESSIONS ",e.sessions.length]}),(0,G.jsxs)("span",{children:["HELPERS ",oe]}),(0,G.jsxs)("span",{children:["VISUAL SPEED ",g,"\xD7"]})]})]})}var IE=document.getElementById("root");if(!IE)throw new Error("Agent Inc Live office root is missing");(0,LE.createRoot)(IE).render((0,G.jsx)(sU,{}));
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
