var co=Object.defineProperty;var uo=(s,e,t)=>e in s?co(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ot=(s,e,t)=>(uo(s,typeof e!="symbol"?e+"":e,t),t);function ho(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const n=Object.getOwnPropertyDescriptor(r,o);n&&Object.defineProperty(s,o,n.get?n:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const go="modulepreload",fo=function(s){return"/"+s},pr={},q=function(e,t,r){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(n=>{if(n=fo(n),n in pr)return;pr[n]=!0;const a=n.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!r)for(let c=o.length-1;c>=0;c--){const u=o[c];if(u.href===n&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${i}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":go,a||(d.as="script",d.crossOrigin=""),d.href=n,document.head.appendChild(d),a)return new Promise((c,u)=>{d.addEventListener("load",c),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e()).catch(n=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n})};var Ft=function(s,e){return Ft=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},Ft(s,e)};function Jr(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ft(s,e);function t(){this.constructor=s}s.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var yt=function(){return yt=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},yt.apply(this,arguments)};function Ve(s,e){var t={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&e.indexOf(r)<0&&(t[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(t[r[o]]=s[r[o]]);return t}function Yr(s,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,r);else for(var i=s.length-1;i>=0;i--)(a=s[i])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n}function Qr(s,e){return function(t,r){e(t,r,s)}}function Xr(s,e,t,r,o,n){function a(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var i=r.kind,l=i==="getter"?"get":i==="setter"?"set":"value",d=!e&&s?r.static?s:s.prototype:null,c=e||(d?Object.getOwnPropertyDescriptor(d,r.name):{}),u,p=!1,g=t.length-1;g>=0;g--){var w={};for(var y in r)w[y]=y==="access"?{}:r[y];for(var y in r.access)w.access[y]=r.access[y];w.addInitializer=function(x){if(p)throw new TypeError("Cannot add initializers after decoration has completed");n.push(a(x||null))};var h=(0,t[g])(i==="accessor"?{get:c.get,set:c.set}:c[l],w);if(i==="accessor"){if(h===void 0)continue;if(h===null||typeof h!="object")throw new TypeError("Object expected");(u=a(h.get))&&(c.get=u),(u=a(h.set))&&(c.set=u),(u=a(h.init))&&o.unshift(u)}else(u=a(h))&&(i==="field"?o.unshift(u):c[l]=u)}d&&Object.defineProperty(d,r.name,c),p=!0}function Zr(s,e,t){for(var r=arguments.length>2,o=0;o<e.length;o++)t=r?e[o].call(s,t):e[o].call(s);return r?t:void 0}function es(s){return typeof s=="symbol"?s:"".concat(s)}function ts(s,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(s,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function rs(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)}function P(s,e,t,r){function o(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function i(c){try{d(r.next(c))}catch(u){a(u)}}function l(c){try{d(r.throw(c))}catch(u){a(u)}}function d(c){c.done?n(c.value):o(c.value).then(i,l)}d((r=r.apply(s,e||[])).next())})}function ss(s,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,o,n,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=i(0),a.throw=i(1),a.return=i(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(d){return function(c){return l([d,c])}}function l(d){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,d[0]&&(t=0)),t;)try{if(r=1,o&&(n=d[0]&2?o.return:d[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,d[1])).done)return n;switch(o=0,n&&(d=[d[0]&2,n.value]),d[0]){case 0:case 1:n=d;break;case 4:return t.label++,{value:d[1],done:!1};case 5:t.label++,o=d[1],d=[0];continue;case 7:d=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(d[0]===6||d[0]===2)){t=0;continue}if(d[0]===3&&(!n||d[1]>n[0]&&d[1]<n[3])){t.label=d[1];break}if(d[0]===6&&t.label<n[1]){t.label=n[1],n=d;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(d);break}n[2]&&t.ops.pop(),t.trys.pop();continue}d=e.call(s,t)}catch(c){d=[6,c],o=0}finally{r=n=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}var St=Object.create?function(s,e,t,r){r===void 0&&(r=t);var o=Object.getOwnPropertyDescriptor(e,t);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,r,o)}:function(s,e,t,r){r===void 0&&(r=t),s[r]=e[t]};function os(s,e){for(var t in s)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&St(e,s,t)}function vt(s){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&s[e],r=0;if(t)return t.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&r>=s.length&&(s=void 0),{value:s&&s[r++],done:!s}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function or(s,e){var t=typeof Symbol=="function"&&s[Symbol.iterator];if(!t)return s;var r=t.call(s),o,n=[],a;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)n.push(o.value)}catch(i){a={error:i}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(a)throw a.error}}return n}function ns(){for(var s=[],e=0;e<arguments.length;e++)s=s.concat(or(arguments[e]));return s}function as(){for(var s=0,e=0,t=arguments.length;e<t;e++)s+=arguments[e].length;for(var r=Array(s),o=0,e=0;e<t;e++)for(var n=arguments[e],a=0,i=n.length;a<i;a++,o++)r[o]=n[a];return r}function is(s,e,t){if(t||arguments.length===2)for(var r=0,o=e.length,n;r<o;r++)(n||!(r in e))&&(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return s.concat(n||Array.prototype.slice.call(e))}function ze(s){return this instanceof ze?(this.v=s,this):new ze(s)}function ls(s,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(s,e||[]),o,n=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),i("next"),i("throw"),i("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(g){return function(w){return Promise.resolve(w).then(g,u)}}function i(g,w){r[g]&&(o[g]=function(y){return new Promise(function(h,x){n.push([g,y,h,x])>1||l(g,y)})},w&&(o[g]=w(o[g])))}function l(g,w){try{d(r[g](w))}catch(y){p(n[0][3],y)}}function d(g){g.value instanceof ze?Promise.resolve(g.value.v).then(c,u):p(n[0][2],g)}function c(g){l("next",g)}function u(g){l("throw",g)}function p(g,w){g(w),n.shift(),n.length&&l(n[0][0],n[0][1])}}function ds(s){var e,t;return e={},r("next"),r("throw",function(o){throw o}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(o,n){e[o]=s[o]?function(a){return(t=!t)?{value:ze(s[o](a)),done:!1}:n?n(a):a}:n}}function cs(s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=s[Symbol.asyncIterator],t;return e?e.call(s):(s=typeof vt=="function"?vt(s):s[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=s[n]&&function(a){return new Promise(function(i,l){a=s[n](a),o(i,l,a.done,a.value)})}}function o(n,a,i,l){Promise.resolve(l).then(function(d){n({value:d,done:i})},a)}}function us(s,e){return Object.defineProperty?Object.defineProperty(s,"raw",{value:e}):s.raw=e,s}var po=Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e},zt=function(s){return zt=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t},zt(s)};function hs(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t=zt(s),r=0;r<t.length;r++)t[r]!=="default"&&St(e,s,t[r]);return po(e,s),e}function gs(s){return s&&s.__esModule?s:{default:s}}function fs(s,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!r:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(s):r?r.value:e.get(s)}function ps(s,e,t,r,o){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?s!==e||!o:!e.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?o.call(s,t):o?o.value=t:e.set(s,t),t}function ms(s,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof s=="function"?e===s:s.has(e)}function ys(s,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,o;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(o=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");o&&(r=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),s.stack.push({value:e,dispose:r,async:t})}else t&&s.stack.push({async:!0});return e}var mo=typeof SuppressedError=="function"?SuppressedError:function(s,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=s,r.suppressed=e,r};function vs(s){function e(n){s.error=s.hasError?new mo(n,s.error,"An error was suppressed during disposal."):n,s.hasError=!0}var t,r=0;function o(){for(;t=s.stack.pop();)try{if(!t.async&&r===1)return r=0,s.stack.push(t),Promise.resolve().then(o);if(t.dispose){var n=t.dispose.call(t.value);if(t.async)return r|=2,Promise.resolve(n).then(o,function(a){return e(a),o()})}else r|=1}catch(a){e(a)}if(r===1)return s.hasError?Promise.reject(s.error):Promise.resolve();if(s.hasError)throw s.error}return o()}function bs(s,e){return typeof s=="string"&&/^\.\.?\//.test(s)?s.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,r,o,n,a){return r?e?".jsx":".js":o&&(!n||!a)?t:o+n+"."+a.toLowerCase()+"js"}):s}const yo={__extends:Jr,__assign:yt,__rest:Ve,__decorate:Yr,__param:Qr,__esDecorate:Xr,__runInitializers:Zr,__propKey:es,__setFunctionName:ts,__metadata:rs,__awaiter:P,__generator:ss,__createBinding:St,__exportStar:os,__values:vt,__read:or,__spread:ns,__spreadArrays:as,__spreadArray:is,__await:ze,__asyncGenerator:ls,__asyncDelegator:ds,__asyncValues:cs,__makeTemplateObject:us,__importStar:hs,__importDefault:gs,__classPrivateFieldGet:fs,__classPrivateFieldSet:ps,__classPrivateFieldIn:ms,__addDisposableResource:ys,__disposeResources:vs,__rewriteRelativeImportExtension:bs},vo=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:ys,get __assign(){return yt},__asyncDelegator:ds,__asyncGenerator:ls,__asyncValues:cs,__await:ze,__awaiter:P,__classPrivateFieldGet:fs,__classPrivateFieldIn:ms,__classPrivateFieldSet:ps,__createBinding:St,__decorate:Yr,__disposeResources:vs,__esDecorate:Xr,__exportStar:os,__extends:Jr,__generator:ss,__importDefault:gs,__importStar:hs,__makeTemplateObject:us,__metadata:rs,__param:Qr,__propKey:es,__read:or,__rest:Ve,__rewriteRelativeImportExtension:bs,__runInitializers:Zr,__setFunctionName:ts,__spread:ns,__spreadArray:is,__spreadArrays:as,__values:vt,default:yo},Symbol.toStringTag,{value:"Module"})),bo=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>q(()=>Promise.resolve().then(()=>Te),void 0).then(({default:r})=>r(...t)):e=fetch,(...t)=>e(...t)};class nr extends Error{constructor(e,t="FunctionsError",r){super(e),this.name=t,this.context=r}}class mr extends nr{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class yr extends nr{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class vr extends nr{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Ht;(function(s){s.Any="any",s.ApNortheast1="ap-northeast-1",s.ApNortheast2="ap-northeast-2",s.ApSouth1="ap-south-1",s.ApSoutheast1="ap-southeast-1",s.ApSoutheast2="ap-southeast-2",s.CaCentral1="ca-central-1",s.EuCentral1="eu-central-1",s.EuWest1="eu-west-1",s.EuWest2="eu-west-2",s.EuWest3="eu-west-3",s.SaEast1="sa-east-1",s.UsEast1="us-east-1",s.UsWest1="us-west-1",s.UsWest2="us-west-2"})(Ht||(Ht={}));class wo{constructor(e,{headers:t={},customFetch:r,region:o=Ht.Any}={}){this.url=e,this.headers=t,this.region=o,this.fetch=bo(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return P(this,arguments,void 0,function*(t,r={}){var o;try{const{headers:n,method:a,body:i,signal:l}=r;let d={},{region:c}=r;c||(c=this.region);const u=new URL(`${this.url}/${t}`);c&&c!=="any"&&(d["x-region"]=c,u.searchParams.set("forceFunctionRegion",c));let p;i&&(n&&!Object.prototype.hasOwnProperty.call(n,"Content-Type")||!n)?typeof Blob<"u"&&i instanceof Blob||i instanceof ArrayBuffer?(d["Content-Type"]="application/octet-stream",p=i):typeof i=="string"?(d["Content-Type"]="text/plain",p=i):typeof FormData<"u"&&i instanceof FormData?p=i:(d["Content-Type"]="application/json",p=JSON.stringify(i)):p=i;const g=yield this.fetch(u.toString(),{method:a||"POST",headers:Object.assign(Object.assign(Object.assign({},d),this.headers),n),body:p,signal:l}).catch(x=>{throw x.name==="AbortError"?x:new mr(x)}),w=g.headers.get("x-relay-error");if(w&&w==="true")throw new yr(g);if(!g.ok)throw new vr(g);let y=((o=g.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),h;return y==="application/json"?h=yield g.json():y==="application/octet-stream"||y==="application/pdf"?h=yield g.blob():y==="text/event-stream"?h=g:y==="multipart/form-data"?h=yield g.formData():h=yield g.text(),{data:h,error:null,response:g}}catch(n){return n instanceof Error&&n.name==="AbortError"?{data:null,error:new mr(n)}:{data:null,error:n,response:n instanceof vr||n instanceof yr?n.context:void 0}}})}}function ws(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(r){var o=Object.getOwnPropertyDescriptor(s,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return s[r]}})}),t}var Q={};const We=ws(vo);var it={},lt={},dt={},ct={},ut={},xo=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},He=xo();const ko=He.fetch,xs=He.fetch.bind(He),ks=He.Headers,_o=He.Request,Eo=He.Response,Te=Object.freeze(Object.defineProperty({__proto__:null,Headers:ks,Request:_o,Response:Eo,default:xs,fetch:ko},Symbol.toStringTag,{value:"Module"})),Po=ws(Te);var ht={},br;function _s(){if(br)return ht;br=1,Object.defineProperty(ht,"__esModule",{value:!0});class s extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}}return ht.default=s,ht}var wr;function Es(){if(wr)return ut;wr=1,Object.defineProperty(ut,"__esModule",{value:!0});const s=We,e=s.__importDefault(Po),t=s.__importDefault(_s());class r{constructor(n){var a,i;this.shouldThrowOnError=!1,this.method=n.method,this.url=n.url,this.headers=new Headers(n.headers),this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=(a=n.shouldThrowOnError)!==null&&a!==void 0?a:!1,this.signal=n.signal,this.isMaybeSingle=(i=n.isMaybeSingle)!==null&&i!==void 0?i:!1,n.fetch?this.fetch=n.fetch:typeof fetch>"u"?this.fetch=e.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(n,a){return this.headers=new Headers(this.headers),this.headers.set(n,a),this}then(n,a){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const i=this.fetch;let l=i(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async d=>{var c,u,p,g;let w=null,y=null,h=null,x=d.status,_=d.statusText;if(d.ok){if(this.method!=="HEAD"){const m=await d.text();m===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((c=this.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text"))?y=m:y=JSON.parse(m))}const f=(u=this.headers.get("Prefer"))===null||u===void 0?void 0:u.match(/count=(exact|planned|estimated)/),v=(p=d.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");f&&v&&v.length>1&&(h=parseInt(v[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(y)&&(y.length>1?(w={code:"PGRST116",details:`Results contain ${y.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},y=null,h=null,x=406,_="Not Acceptable"):y.length===1?y=y[0]:y=null)}else{const f=await d.text();try{w=JSON.parse(f),Array.isArray(w)&&d.status===404&&(y=[],w=null,x=200,_="OK")}catch{d.status===404&&f===""?(x=204,_="No Content"):w={message:f}}if(w&&this.isMaybeSingle&&(!((g=w==null?void 0:w.details)===null||g===void 0)&&g.includes("0 rows"))&&(w=null,x=200,_="OK"),w&&this.shouldThrowOnError)throw new t.default(w)}return{error:w,data:y,count:h,status:x,statusText:_}});return this.shouldThrowOnError||(l=l.catch(d=>{var c,u,p;return{error:{message:`${(c=d==null?void 0:d.name)!==null&&c!==void 0?c:"FetchError"}: ${d==null?void 0:d.message}`,details:`${(u=d==null?void 0:d.stack)!==null&&u!==void 0?u:""}`,hint:"",code:`${(p=d==null?void 0:d.code)!==null&&p!==void 0?p:""}`},data:null,count:null,status:0,statusText:""}})),l.then(n,a)}returns(){return this}overrideTypes(){return this}}return ut.default=r,ut}var xr;function Ps(){if(xr)return ct;xr=1,Object.defineProperty(ct,"__esModule",{value:!0});const e=We.__importDefault(Es());class t extends e.default{select(o){let n=!1;const a=(o??"*").split("").map(i=>/\s/.test(i)&&!n?"":(i==='"'&&(n=!n),i)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(o,{ascending:n=!0,nullsFirst:a,foreignTable:i,referencedTable:l=i}={}){const d=l?`${l}.order`:"order",c=this.url.searchParams.get(d);return this.url.searchParams.set(d,`${c?`${c},`:""}${o}.${n?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(o,{foreignTable:n,referencedTable:a=n}={}){const i=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(i,`${o}`),this}range(o,n,{foreignTable:a,referencedTable:i=a}={}){const l=typeof i>"u"?"offset":`${i}.offset`,d=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(l,`${o}`),this.url.searchParams.set(d,`${n-o+1}`),this}abortSignal(o){return this.signal=o,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:o=!1,verbose:n=!1,settings:a=!1,buffers:i=!1,wal:l=!1,format:d="text"}={}){var c;const u=[o?"analyze":null,n?"verbose":null,a?"settings":null,i?"buffers":null,l?"wal":null].filter(Boolean).join("|"),p=(c=this.headers.get("Accept"))!==null&&c!==void 0?c:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${d}; for="${p}"; options=${u};`),d==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(o){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${o}`),this}}return ct.default=t,ct}var kr;function ar(){if(kr)return dt;kr=1,Object.defineProperty(dt,"__esModule",{value:!0});const e=We.__importDefault(Ps()),t=new RegExp("[,()]");class r extends e.default{eq(n,a){return this.url.searchParams.append(n,`eq.${a}`),this}neq(n,a){return this.url.searchParams.append(n,`neq.${a}`),this}gt(n,a){return this.url.searchParams.append(n,`gt.${a}`),this}gte(n,a){return this.url.searchParams.append(n,`gte.${a}`),this}lt(n,a){return this.url.searchParams.append(n,`lt.${a}`),this}lte(n,a){return this.url.searchParams.append(n,`lte.${a}`),this}like(n,a){return this.url.searchParams.append(n,`like.${a}`),this}likeAllOf(n,a){return this.url.searchParams.append(n,`like(all).{${a.join(",")}}`),this}likeAnyOf(n,a){return this.url.searchParams.append(n,`like(any).{${a.join(",")}}`),this}ilike(n,a){return this.url.searchParams.append(n,`ilike.${a}`),this}ilikeAllOf(n,a){return this.url.searchParams.append(n,`ilike(all).{${a.join(",")}}`),this}ilikeAnyOf(n,a){return this.url.searchParams.append(n,`ilike(any).{${a.join(",")}}`),this}is(n,a){return this.url.searchParams.append(n,`is.${a}`),this}in(n,a){const i=Array.from(new Set(a)).map(l=>typeof l=="string"&&t.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(n,`in.(${i})`),this}contains(n,a){return typeof a=="string"?this.url.searchParams.append(n,`cs.${a}`):Array.isArray(a)?this.url.searchParams.append(n,`cs.{${a.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(a)}`),this}containedBy(n,a){return typeof a=="string"?this.url.searchParams.append(n,`cd.${a}`):Array.isArray(a)?this.url.searchParams.append(n,`cd.{${a.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(a)}`),this}rangeGt(n,a){return this.url.searchParams.append(n,`sr.${a}`),this}rangeGte(n,a){return this.url.searchParams.append(n,`nxl.${a}`),this}rangeLt(n,a){return this.url.searchParams.append(n,`sl.${a}`),this}rangeLte(n,a){return this.url.searchParams.append(n,`nxr.${a}`),this}rangeAdjacent(n,a){return this.url.searchParams.append(n,`adj.${a}`),this}overlaps(n,a){return typeof a=="string"?this.url.searchParams.append(n,`ov.${a}`):this.url.searchParams.append(n,`ov.{${a.join(",")}}`),this}textSearch(n,a,{config:i,type:l}={}){let d="";l==="plain"?d="pl":l==="phrase"?d="ph":l==="websearch"&&(d="w");const c=i===void 0?"":`(${i})`;return this.url.searchParams.append(n,`${d}fts${c}.${a}`),this}match(n){return Object.entries(n).forEach(([a,i])=>{this.url.searchParams.append(a,`eq.${i}`)}),this}not(n,a,i){return this.url.searchParams.append(n,`not.${a}.${i}`),this}or(n,{foreignTable:a,referencedTable:i=a}={}){const l=i?`${i}.or`:"or";return this.url.searchParams.append(l,`(${n})`),this}filter(n,a,i){return this.url.searchParams.append(n,`${a}.${i}`),this}}return dt.default=r,dt}var _r;function Ss(){if(_r)return lt;_r=1,Object.defineProperty(lt,"__esModule",{value:!0});const e=We.__importDefault(ar());class t{constructor(o,{headers:n={},schema:a,fetch:i}){this.url=o,this.headers=new Headers(n),this.schema=a,this.fetch=i}select(o,n){const{head:a=!1,count:i}=n??{},l=a?"HEAD":"GET";let d=!1;const c=(o??"*").split("").map(u=>/\s/.test(u)&&!d?"":(u==='"'&&(d=!d),u)).join("");return this.url.searchParams.set("select",c),i&&this.headers.append("Prefer",`count=${i}`),new e.default({method:l,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(o,{count:n,defaultToNull:a=!0}={}){var i;const l="POST";if(n&&this.headers.append("Prefer",`count=${n}`),a||this.headers.append("Prefer","missing=default"),Array.isArray(o)){const d=o.reduce((c,u)=>c.concat(Object.keys(u)),[]);if(d.length>0){const c=[...new Set(d)].map(u=>`"${u}"`);this.url.searchParams.set("columns",c.join(","))}}return new e.default({method:l,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch})}upsert(o,{onConflict:n,ignoreDuplicates:a=!1,count:i,defaultToNull:l=!0}={}){var d;const c="POST";if(this.headers.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),n!==void 0&&this.url.searchParams.set("on_conflict",n),i&&this.headers.append("Prefer",`count=${i}`),l||this.headers.append("Prefer","missing=default"),Array.isArray(o)){const u=o.reduce((p,g)=>p.concat(Object.keys(g)),[]);if(u.length>0){const p=[...new Set(u)].map(g=>`"${g}"`);this.url.searchParams.set("columns",p.join(","))}}return new e.default({method:c,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch})}update(o,{count:n}={}){var a;const i="PATCH";return n&&this.headers.append("Prefer",`count=${n}`),new e.default({method:i,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch})}delete({count:o}={}){var n;const a="DELETE";return o&&this.headers.append("Prefer",`count=${o}`),new e.default({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch})}}return lt.default=t,lt}var Er;function So(){if(Er)return it;Er=1,Object.defineProperty(it,"__esModule",{value:!0});const s=We,e=s.__importDefault(Ss()),t=s.__importDefault(ar());class r{constructor(n,{headers:a={},schema:i,fetch:l}={}){this.url=n,this.headers=new Headers(a),this.schemaName=i,this.fetch=l}from(n){const a=new URL(`${this.url}/${n}`);return new e.default(a,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(n){return new r(this.url,{headers:this.headers,schema:n,fetch:this.fetch})}rpc(n,a={},{head:i=!1,get:l=!1,count:d}={}){var c;let u;const p=new URL(`${this.url}/rpc/${n}`);let g;i||l?(u=i?"HEAD":"GET",Object.entries(a).filter(([y,h])=>h!==void 0).map(([y,h])=>[y,Array.isArray(h)?`{${h.join(",")}}`:`${h}`]).forEach(([y,h])=>{p.searchParams.append(y,h)})):(u="POST",g=a);const w=new Headers(this.headers);return d&&w.set("Prefer",`count=${d}`),new t.default({method:u,url:p,headers:w,schema:this.schemaName,body:g,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch})}}return it.default=r,it}Object.defineProperty(Q,"__esModule",{value:!0});var Is=Q.PostgrestError=Ds=Q.PostgrestBuilder=Bs=Q.PostgrestTransformBuilder=Ls=Q.PostgrestFilterBuilder=As=Q.PostgrestQueryBuilder=Cs=Q.PostgrestClient=void 0;const Ge=We,Ts=Ge.__importDefault(So());var Cs=Q.PostgrestClient=Ts.default;const Os=Ge.__importDefault(Ss());var As=Q.PostgrestQueryBuilder=Os.default;const js=Ge.__importDefault(ar());var Ls=Q.PostgrestFilterBuilder=js.default;const Rs=Ge.__importDefault(Ps());var Bs=Q.PostgrestTransformBuilder=Rs.default;const $s=Ge.__importDefault(Es());var Ds=Q.PostgrestBuilder=$s.default;const Ms=Ge.__importDefault(_s());Is=Q.PostgrestError=Ms.default;var Ns=Q.default={PostgrestClient:Ts.default,PostgrestQueryBuilder:Os.default,PostgrestFilterBuilder:js.default,PostgrestTransformBuilder:Rs.default,PostgrestBuilder:$s.default,PostgrestError:Ms.default};const Io=ho({__proto__:null,get PostgrestBuilder(){return Ds},get PostgrestClient(){return Cs},get PostgrestError(){return Is},get PostgrestFilterBuilder(){return Ls},get PostgrestQueryBuilder(){return As},get PostgrestTransformBuilder(){return Bs},default:Ns},[Q]),{PostgrestClient:To,PostgrestQueryBuilder:ki,PostgrestFilterBuilder:_i,PostgrestTransformBuilder:Ei,PostgrestBuilder:Pi,PostgrestError:Si}=Ns||Io;class Co{static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const t=process.versions;if(t&&t.node){const r=t.node,o=parseInt(r.replace(/^v/,"").split(".")[0]);return o>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${o} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${o} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.constructor)return e.constructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static createWebSocket(e,t){const r=this.getWebSocketConstructor();return new r(e,t)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const Oo="2.77.0",Ao=`realtime-js/${Oo}`,jo="1.0.0",Vt=1e4,Lo=1e3,Ro=100;var Ze;(function(s){s[s.connecting=0]="connecting",s[s.open=1]="open",s[s.closing=2]="closing",s[s.closed=3]="closed"})(Ze||(Ze={}));var G;(function(s){s.closed="closed",s.errored="errored",s.joined="joined",s.joining="joining",s.leaving="leaving"})(G||(G={}));var de;(function(s){s.close="phx_close",s.error="phx_error",s.join="phx_join",s.reply="phx_reply",s.leave="phx_leave",s.access_token="access_token"})(de||(de={}));var Wt;(function(s){s.websocket="websocket"})(Wt||(Wt={}));var Ee;(function(s){s.Connecting="connecting",s.Open="open",s.Closing="closing",s.Closed="closed"})(Ee||(Ee={}));class Bo{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):t(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const t=new DataView(e),r=new TextDecoder;return this._decodeBroadcast(e,t,r)}_decodeBroadcast(e,t,r){const o=t.getUint8(1),n=t.getUint8(2);let a=this.HEADER_LENGTH+2;const i=r.decode(e.slice(a,a+o));a=a+o;const l=r.decode(e.slice(a,a+n));a=a+n;const d=JSON.parse(r.decode(e.slice(a,e.byteLength)));return{ref:null,topic:i,event:l,payload:d}}}class Us{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var D;(function(s){s.abstime="abstime",s.bool="bool",s.date="date",s.daterange="daterange",s.float4="float4",s.float8="float8",s.int2="int2",s.int4="int4",s.int4range="int4range",s.int8="int8",s.int8range="int8range",s.json="json",s.jsonb="jsonb",s.money="money",s.numeric="numeric",s.oid="oid",s.reltime="reltime",s.text="text",s.time="time",s.timestamp="timestamp",s.timestamptz="timestamptz",s.timetz="timetz",s.tsrange="tsrange",s.tstzrange="tstzrange"})(D||(D={}));const Pr=(s,e,t={})=>{var r;const o=(r=t.skipTypes)!==null&&r!==void 0?r:[];return e?Object.keys(e).reduce((n,a)=>(n[a]=$o(a,s,e,o),n),{}):{}},$o=(s,e,t,r)=>{const o=e.find(i=>i.name===s),n=o==null?void 0:o.type,a=t[s];return n&&!r.includes(n)?qs(n,a):Gt(a)},qs=(s,e)=>{if(s.charAt(0)==="_"){const t=s.slice(1,s.length);return Uo(e,t)}switch(s){case D.bool:return Do(e);case D.float4:case D.float8:case D.int2:case D.int4:case D.int8:case D.numeric:case D.oid:return Mo(e);case D.json:case D.jsonb:return No(e);case D.timestamp:return qo(e);case D.abstime:case D.date:case D.daterange:case D.int4range:case D.int8range:case D.money:case D.reltime:case D.text:case D.time:case D.timestamptz:case D.timetz:case D.tsrange:case D.tstzrange:return Gt(e);default:return Gt(e)}},Gt=s=>s,Do=s=>{switch(s){case"t":return!0;case"f":return!1;default:return s}},Mo=s=>{if(typeof s=="string"){const e=parseFloat(s);if(!Number.isNaN(e))return e}return s},No=s=>{if(typeof s=="string")try{return JSON.parse(s)}catch(e){return console.log(`JSON parse error: ${e}`),s}return s},Uo=(s,e)=>{if(typeof s!="string")return s;const t=s.length-1,r=s[t];if(s[0]==="{"&&r==="}"){let n;const a=s.slice(1,t);try{n=JSON.parse("["+a+"]")}catch{n=a?a.split(","):[]}return n.map(i=>qs(e,i))}return s},qo=s=>typeof s=="string"?s.replace(" ","T"):s,Fs=s=>{const e=new URL(s);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};class At{constructor(e,t,r={},o=Vt){this.channel=e,this.event=t,this.payload=r,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var r;return this._hasReceived(e)&&t((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=t=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=t,this._matchReceive(t)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(r=>r.status===e).forEach(r=>r.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var Sr;(function(s){s.SYNC="sync",s.JOIN="join",s.LEAVE="leave"})(Sr||(Sr={}));class et{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=(t==null?void 0:t.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},o=>{const{onJoin:n,onLeave:a,onSync:i}=this.caller;this.joinRef=this.channel._joinRef(),this.state=et.syncState(this.state,o,n,a),this.pendingDiffs.forEach(l=>{this.state=et.syncDiff(this.state,l,n,a)}),this.pendingDiffs=[],i()}),this.channel._on(r.diff,{},o=>{const{onJoin:n,onLeave:a,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=et.syncDiff(this.state,o,n,a),i())}),this.onJoin((o,n,a)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:n,newPresences:a})}),this.onLeave((o,n,a)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:n,leftPresences:a})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,r,o){const n=this.cloneDeep(e),a=this.transformState(t),i={},l={};return this.map(n,(d,c)=>{a[d]||(l[d]=c)}),this.map(a,(d,c)=>{const u=n[d];if(u){const p=c.map(h=>h.presence_ref),g=u.map(h=>h.presence_ref),w=c.filter(h=>g.indexOf(h.presence_ref)<0),y=u.filter(h=>p.indexOf(h.presence_ref)<0);w.length>0&&(i[d]=w),y.length>0&&(l[d]=y)}else i[d]=c}),this.syncDiff(n,{joins:i,leaves:l},r,o)}static syncDiff(e,t,r,o){const{joins:n,leaves:a}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return r||(r=()=>{}),o||(o=()=>{}),this.map(n,(i,l)=>{var d;const c=(d=e[i])!==null&&d!==void 0?d:[];if(e[i]=this.cloneDeep(l),c.length>0){const u=e[i].map(g=>g.presence_ref),p=c.filter(g=>u.indexOf(g.presence_ref)<0);e[i].unshift(...p)}r(i,c,l)}),this.map(a,(i,l)=>{let d=e[i];if(!d)return;const c=l.map(u=>u.presence_ref);d=d.filter(u=>c.indexOf(u.presence_ref)<0),e[i]=d,o(i,d,l),d.length===0&&delete e[i]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(r=>t(r,e[r]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,r)=>{const o=e[r];return"metas"in o?t[r]=o.metas.map(n=>(n.presence_ref=n.phx_ref,delete n.phx_ref,delete n.phx_ref_prev,n)):t[r]=o,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Ir;(function(s){s.ALL="*",s.INSERT="INSERT",s.UPDATE="UPDATE",s.DELETE="DELETE"})(Ir||(Ir={}));var tt;(function(s){s.BROADCAST="broadcast",s.PRESENCE="presence",s.POSTGRES_CHANGES="postgres_changes",s.SYSTEM="system"})(tt||(tt={}));var ge;(function(s){s.SUBSCRIBED="SUBSCRIBED",s.TIMED_OUT="TIMED_OUT",s.CLOSED="CLOSED",s.CHANNEL_ERROR="CHANNEL_ERROR"})(ge||(ge={}));class ir{constructor(e,t={config:{}},r){var o,n;if(this.topic=e,this.params=t,this.socket=r,this.bindings={},this.state=G.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new At(this,de.join,this.params,this.timeout),this.rejoinTimer=new Us(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=G.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(a=>a.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=G.closed,this.socket._remove(this)}),this._onError(a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=G.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=G.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=G.errored,this.rejoinTimer.scheduleTimeout())}),this._on(de.reply,{},(a,i)=>{this._trigger(this._replyEventName(i),a)}),this.presence=new et(this),this.broadcastEndpointURL=Fs(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((n=(o=this.params.config)===null||o===void 0?void 0:o.broadcast)===null||n===void 0)&&n.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(e,t=this.timeout){var r,o,n;if(this.socket.isConnected()||this.socket.connect(),this.state==G.closed){const{config:{broadcast:a,presence:i,private:l}}=this.params,d=(o=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(g=>g.filter))!==null&&o!==void 0?o:[],c=!!this.bindings[tt.PRESENCE]&&this.bindings[tt.PRESENCE].length>0||((n=this.params.config.presence)===null||n===void 0?void 0:n.enabled)===!0,u={},p={broadcast:a,presence:Object.assign(Object.assign({},i),{enabled:c}),postgres_changes:d,private:l};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(g=>e==null?void 0:e(ge.CHANNEL_ERROR,g)),this._onClose(()=>e==null?void 0:e(ge.CLOSED)),this.updateJoinPayload(Object.assign({config:p},u)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:g})=>{var w;if(this.socket.setAuth(),g===void 0){e==null||e(ge.SUBSCRIBED);return}else{const y=this.bindings.postgres_changes,h=(w=y==null?void 0:y.length)!==null&&w!==void 0?w:0,x=[];for(let _=0;_<h;_++){const k=y[_],{filter:{event:f,schema:v,table:m,filter:b}}=k,E=g&&g[_];if(E&&E.event===f&&E.schema===v&&E.table===m&&E.filter===b)x.push(Object.assign(Object.assign({},k),{id:E.id}));else{this.unsubscribe(),this.state=G.errored,e==null||e(ge.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=x,e&&e(ge.SUBSCRIBED);return}}).receive("error",g=>{this.state=G.errored,e==null||e(ge.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(g).join(", ")||"error")))}).receive("timeout",()=>{e==null||e(ge.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,r){return this.state===G.joined&&e===tt.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(e,t,r)}async httpSend(e,t,r={}){var o;const n=this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"";if(t==null)return Promise.reject("Payload is required for httpSend()");const a={method:"POST",headers:{Authorization:n,apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:t,private:this.private}]})},i=await this._fetchWithTimeout(this.broadcastEndpointURL,a,(o=r.timeout)!==null&&o!==void 0?o:this.timeout);if(i.status===202)return{success:!0};let l=i.statusText;try{const d=await i.json();l=d.error||d.message||l}catch{}return Promise.reject(new Error(l))}async send(e,t={}){var r,o;if(!this._canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:n,payload:a}=e,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:a,private:this.private}]})};try{const d=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(r=t.timeout)!==null&&r!==void 0?r:this.timeout);return await((o=d.body)===null||o===void 0?void 0:o.cancel()),d.ok?"ok":"error"}catch(d){return d.name==="AbortError"?"timed out":"error"}}else return new Promise(n=>{var a,i,l;const d=this._push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(i=(a=this.params)===null||a===void 0?void 0:a.config)===null||i===void 0?void 0:i.broadcast)===null||l===void 0)&&l.ack)&&n("ok"),d.receive("ok",()=>n("ok")),d.receive("error",()=>n("error")),d.receive("timeout",()=>n("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=G.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(de.close,"leave",this._joinRef())};this.joinPush.destroy();let r=null;return new Promise(o=>{r=new At(this,de.leave,{},e),r.receive("ok",()=>{t(),o("ok")}).receive("timeout",()=>{t(),o("timed out")}).receive("error",()=>{o("error")}),r.send(),this._canPush()||r.trigger("ok",{})}).finally(()=>{r==null||r.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=G.closed,this.bindings={}}async _fetchWithTimeout(e,t,r){const o=new AbortController,n=setTimeout(()=>o.abort(),r),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:o.signal}));return clearTimeout(n),a}_push(e,t,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new At(this,e,t,r);return this._canPush()?o.send():this._addToPushBuffer(o),o}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>Ro){const t=this.pushBuffer.shift();t&&(t.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${t.event}`,t.payload))}}_onMessage(e,t,r){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,r){var o,n;const a=e.toLocaleLowerCase(),{close:i,error:l,leave:d,join:c}=de;if(r&&[i,l,d,c].indexOf(a)>=0&&r!==this._joinRef())return;let p=this._onMessage(a,t,r);if(t&&!p)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(g=>{var w,y,h;return((w=g.filter)===null||w===void 0?void 0:w.event)==="*"||((h=(y=g.filter)===null||y===void 0?void 0:y.event)===null||h===void 0?void 0:h.toLocaleLowerCase())===a}).map(g=>g.callback(p,r)):(n=this.bindings[a])===null||n===void 0||n.filter(g=>{var w,y,h,x,_,k;if(["broadcast","presence","postgres_changes"].includes(a))if("id"in g){const f=g.id,v=(w=g.filter)===null||w===void 0?void 0:w.event;return f&&((y=t.ids)===null||y===void 0?void 0:y.includes(f))&&(v==="*"||(v==null?void 0:v.toLocaleLowerCase())===((h=t.data)===null||h===void 0?void 0:h.type.toLocaleLowerCase()))}else{const f=(_=(x=g==null?void 0:g.filter)===null||x===void 0?void 0:x.event)===null||_===void 0?void 0:_.toLocaleLowerCase();return f==="*"||f===((k=t==null?void 0:t.event)===null||k===void 0?void 0:k.toLocaleLowerCase())}else return g.type.toLocaleLowerCase()===a}).map(g=>{if(typeof p=="object"&&"ids"in p){const w=p.data,{schema:y,table:h,commit_timestamp:x,type:_,errors:k}=w;p=Object.assign(Object.assign({},{schema:y,table:h,commit_timestamp:x,eventType:_,new:{},old:{},errors:k}),this._getPayloadRecords(w))}g.callback(p,r)})}_isClosed(){return this.state===G.closed}_isJoined(){return this.state===G.joined}_isJoining(){return this.state===G.joining}_isLeaving(){return this.state===G.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,r){const o=e.toLocaleLowerCase(),n={type:o,filter:t,callback:r};return this.bindings[o]?this.bindings[o].push(n):this.bindings[o]=[n],this}_off(e,t){const r=e.toLocaleLowerCase();return this.bindings[r]&&(this.bindings[r]=this.bindings[r].filter(o=>{var n;return!(((n=o.type)===null||n===void 0?void 0:n.toLocaleLowerCase())===r&&ir.isEqual(o.filter,t))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(e[r]!==t[r])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(de.close,{},e)}_onError(e){this._on(de.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=G.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=Pr(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=Pr(e.columns,e.old_record)),t}}const jt=()=>{},gt={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Fo=[1e3,2e3,5e3,1e4],zo=1e4,Ho=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Vo{constructor(e,t){var r;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=Vt,this.transport=null,this.heartbeatIntervalMs=gt.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=jt,this.ref=0,this.reconnectTimer=null,this.logger=jt,this.conn=null,this.sendBuffer=[],this.serializer=new Bo,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=o=>{let n;return o?n=o:typeof fetch>"u"?n=(...a)=>q(()=>Promise.resolve().then(()=>Te),void 0).then(({default:i})=>i(...a)).catch(i=>{throw new Error(`Failed to load @supabase/node-fetch: ${i.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):n=fetch,(...a)=>n(...a)},!(!((r=t==null?void 0:t.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey,this.endPoint=`${e}/${Wt.websocket}`,this.httpEndpoint=Fs(e),this._initializeOptions(t),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(t==null?void 0:t.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=Co.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected");const t=e.message;throw t.includes("Node.js")?new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${t}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:jo}))}disconnect(e,t){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const r=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(r),this._setConnectionState("disconnected")},e?this.conn.close(e,t??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map(t=>t.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,t,r){this.logger(e,t,r)}connectionState(){switch(this.conn&&this.conn.readyState){case Ze.connecting:return Ee.Connecting;case Ze.open:return Ee.Open;case Ze.closing:return Ee.Closing;default:return Ee.Closed}}isConnected(){return this.connectionState()===Ee.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(e,t={config:{}}){const r=`realtime:${e}`,o=this.getChannels().find(n=>n.topic===r);if(o)return o;{const n=new ir(`realtime:${e}`,t,this);return this.channels.push(n),n}}push(e){const{topic:t,event:r,payload:o,ref:n}=e,a=()=>{this.encode(e,i=>{var l;(l=this.conn)===null||l===void 0||l.send(i)})};this.log("push",`${t} ${r} (${n})`,o),this.isConnected()?a():this.sendBuffer.push(a)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var e;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this._wasManualDisconnect=!1,(e=this.conn)===null||e===void 0||e.close(Lo,"heartbeat timeout"),setTimeout(()=>{var t;this.isConnected()||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout()},gt.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this._setAuthSafely("heartbeat")}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(r=>r.topic===e&&(r._isJoined()||r._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,t=>{if(t.topic==="phoenix"&&t.event==="phx_reply")try{this.heartbeatCallback(t.payload.status==="ok"?"ok":"error")}catch(d){this.log("error","error in heartbeat callback",d)}t.ref&&t.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:r,event:o,payload:n,ref:a}=t,i=a?`(${a})`:"",l=n.status||"";this.log("receive",`${l} ${r} ${o} ${i}`.trim(),n),this.channels.filter(d=>d._isMember(r)).forEach(d=>d._trigger(o,n,a)),this._triggerStateCallbacks("message",t)})}_clearTimer(e){var t;e==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):e==="reconnect"&&((t=this.reconnectTimer)===null||t===void 0||t.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this.workerRef.terminate()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var t;this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(de.error))}_appendParams(e,t){if(Object.keys(t).length===0)return e;const r=e.match(/\?/)?"&":"?",o=new URLSearchParams(t);return`${e}${r}${o}`}_workerObjectUrl(e){let t;if(e)t=e;else{const r=new Blob([Ho],{type:"application/javascript"});t=URL.createObjectURL(r)}return t}_setConnectionState(e,t=!1){this._connectionState=e,e==="connecting"?this._wasManualDisconnect=!1:e==="disconnecting"&&(this._wasManualDisconnect=t)}async _performAuth(e=null){let t;e?t=e:this.accessToken?t=await this.accessToken():t=this.accessTokenValue,this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(r=>{const o={access_token:t,version:Ao};t&&r.updateJoinPayload(o),r.joinedOnce&&r._isJoined()&&r._push(de.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this.setAuth().catch(t=>{this.log("error",`error setting auth in ${e}`,t)})}_triggerStateCallbacks(e,t){try{this.stateChangeCallbacks[e].forEach(r=>{try{r(t)}catch(o){this.log("error",`error in ${e} callback`,o)}})}catch(r){this.log("error",`error triggering ${e} callbacks`,r)}}_setupReconnectionTimer(){this.reconnectTimer=new Us(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},gt.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(e){var t,r,o,n,a,i,l,d,c;if(this.transport=(t=e==null?void 0:e.transport)!==null&&t!==void 0?t:null,this.timeout=(r=e==null?void 0:e.timeout)!==null&&r!==void 0?r:Vt,this.heartbeatIntervalMs=(o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:gt.HEARTBEAT_INTERVAL,this.worker=(n=e==null?void 0:e.worker)!==null&&n!==void 0?n:!1,this.accessToken=(a=e==null?void 0:e.accessToken)!==null&&a!==void 0?a:null,this.heartbeatCallback=(i=e==null?void 0:e.heartbeatCallback)!==null&&i!==void 0?i:jt,e!=null&&e.params&&(this.params=e.params),e!=null&&e.logger&&(this.logger=e.logger),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(l=e==null?void 0:e.reconnectAfterMs)!==null&&l!==void 0?l:u=>Fo[u-1]||zo,this.encode=(d=e==null?void 0:e.encode)!==null&&d!==void 0?d:(u,p)=>p(JSON.stringify(u)),this.decode=(c=e==null?void 0:e.decode)!==null&&c!==void 0?c:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl}}}class lr extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function U(s){return typeof s=="object"&&s!==null&&"__isStorageError"in s}class Wo extends lr{constructor(e,t,r){super(e),this.name="StorageApiError",this.status=t,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class Kt extends lr{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}const dr=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>q(()=>Promise.resolve().then(()=>Te),void 0).then(({default:r})=>r(...t)):e=fetch,(...t)=>e(...t)},Go=()=>P(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield q(()=>Promise.resolve().then(()=>Te),void 0)).Response:Response}),Jt=s=>{if(Array.isArray(s))return s.map(t=>Jt(t));if(typeof s=="function"||s!==Object(s))return s;const e={};return Object.entries(s).forEach(([t,r])=>{const o=t.replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace(/[-_]/g,""));e[o]=Jt(r)}),e},Ko=s=>{if(typeof s!="object"||s===null)return!1;const e=Object.getPrototypeOf(s);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},Lt=s=>s.msg||s.message||s.error_description||s.error||JSON.stringify(s),Jo=(s,e,t)=>P(void 0,void 0,void 0,function*(){const r=yield Go();s instanceof r&&!(t!=null&&t.noResolveJson)?s.json().then(o=>{const n=s.status||500,a=(o==null?void 0:o.statusCode)||n+"";e(new Wo(Lt(o),n,a))}).catch(o=>{e(new Kt(Lt(o),o))}):e(new Kt(Lt(s),s))}),Yo=(s,e,t,r)=>{const o={method:s,headers:(e==null?void 0:e.headers)||{}};return s==="GET"||!r?o:(Ko(r)?(o.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),o.body=JSON.stringify(r)):o.body=r,e!=null&&e.duplex&&(o.duplex=e.duplex),Object.assign(Object.assign({},o),t))};function nt(s,e,t,r,o,n){return P(this,void 0,void 0,function*(){return new Promise((a,i)=>{s(t,Yo(e,r,o,n)).then(l=>{if(!l.ok)throw l;return r!=null&&r.noResolveJson?l:l.json()}).then(l=>a(l)).catch(l=>Jo(l,i,r))})})}function rt(s,e,t,r){return P(this,void 0,void 0,function*(){return nt(s,"GET",e,t,r)})}function le(s,e,t,r,o){return P(this,void 0,void 0,function*(){return nt(s,"POST",e,r,o,t)})}function Yt(s,e,t,r,o){return P(this,void 0,void 0,function*(){return nt(s,"PUT",e,r,o,t)})}function Qo(s,e,t,r){return P(this,void 0,void 0,function*(){return nt(s,"HEAD",e,Object.assign(Object.assign({},t),{noResolveJson:!0}),r)})}function cr(s,e,t,r,o){return P(this,void 0,void 0,function*(){return nt(s,"DELETE",e,r,o,t)})}class Xo{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}execute(){return P(this,void 0,void 0,function*(){try{return{data:(yield this.downloadFn()).body,error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(U(e))return{data:null,error:e};throw e}})}}var zs;class Zo{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[zs]="BlobDownloadBuilder",this.promise=null}asStream(){return new Xo(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}execute(){return P(this,void 0,void 0,function*(){try{return{data:yield(yield this.downloadFn()).blob(),error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(U(e))return{data:null,error:e};throw e}})}}zs=Symbol.toStringTag;const en=Zo,tn={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Tr={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class rn{constructor(e,t={},r,o){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.bucketId=r,this.fetch=dr(o)}throwOnError(){return this.shouldThrowOnError=!0,this}uploadOrUpdate(e,t,r,o){return P(this,void 0,void 0,function*(){try{let n;const a=Object.assign(Object.assign({},Tr),o);let i=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;typeof Blob<"u"&&r instanceof Blob?(n=new FormData,n.append("cacheControl",a.cacheControl),l&&n.append("metadata",this.encodeMetadata(l)),n.append("",r)):typeof FormData<"u"&&r instanceof FormData?(n=r,n.append("cacheControl",a.cacheControl),l&&n.append("metadata",this.encodeMetadata(l))):(n=r,i["cache-control"]=`max-age=${a.cacheControl}`,i["content-type"]=a.contentType,l&&(i["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),o!=null&&o.headers&&(i=Object.assign(Object.assign({},i),o.headers));const d=this._removeEmptyFolders(t),c=this._getFinalPath(d),u=yield(e=="PUT"?Yt:le)(this.fetch,`${this.url}/object/${c}`,n,Object.assign({headers:i},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{data:{path:d,id:u.Id,fullPath:u.Key},error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(U(n))return{data:null,error:n};throw n}})}upload(e,t,r){return P(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,t,r)})}uploadToSignedUrl(e,t,r,o){return P(this,void 0,void 0,function*(){const n=this._removeEmptyFolders(e),a=this._getFinalPath(n),i=new URL(this.url+`/object/upload/sign/${a}`);i.searchParams.set("token",t);try{let l;const d=Object.assign({upsert:Tr.upsert},o),c=Object.assign(Object.assign({},this.headers),{"x-upsert":String(d.upsert)});typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",d.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",d.cacheControl)):(l=r,c["cache-control"]=`max-age=${d.cacheControl}`,c["content-type"]=d.contentType);const u=yield Yt(this.fetch,i.toString(),l,{headers:c});return{data:{path:n,fullPath:u.Key},error:null}}catch(l){if(this.shouldThrowOnError)throw l;if(U(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,t){return P(this,void 0,void 0,function*(){try{let r=this._getFinalPath(e);const o=Object.assign({},this.headers);t!=null&&t.upsert&&(o["x-upsert"]="true");const n=yield le(this.fetch,`${this.url}/object/upload/sign/${r}`,{},{headers:o}),a=new URL(this.url+n.url),i=a.searchParams.get("token");if(!i)throw new lr("No token returned by API");return{data:{signedUrl:a.toString(),path:e,token:i},error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(U(r))return{data:null,error:r};throw r}})}update(e,t,r){return P(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,t,r)})}move(e,t,r){return P(this,void 0,void 0,function*(){try{return{data:yield le(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(U(o))return{data:null,error:o};throw o}})}copy(e,t,r){return P(this,void 0,void 0,function*(){try{return{data:{path:(yield le(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(U(o))return{data:null,error:o};throw o}})}createSignedUrl(e,t,r){return P(this,void 0,void 0,function*(){try{let o=this._getFinalPath(e),n=yield le(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:t},r!=null&&r.transform?{transform:r.transform}:{}),{headers:this.headers});const a=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return n={signedUrl:encodeURI(`${this.url}${n.signedURL}${a}`)},{data:n,error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(U(o))return{data:null,error:o};throw o}})}createSignedUrls(e,t,r){return P(this,void 0,void 0,function*(){try{const o=yield le(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers}),n=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return{data:o.map(a=>Object.assign(Object.assign({},a),{signedUrl:a.signedURL?encodeURI(`${this.url}${a.signedURL}${n}`):null})),error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(U(o))return{data:null,error:o};throw o}})}download(e,t){const o=typeof(t==null?void 0:t.transform)<"u"?"render/image/authenticated":"object",n=this.transformOptsToQueryString((t==null?void 0:t.transform)||{}),a=n?`?${n}`:"",i=this._getFinalPath(e),l=()=>rt(this.fetch,`${this.url}/${o}/${i}${a}`,{headers:this.headers,noResolveJson:!0});return new en(l,this.shouldThrowOnError)}info(e){return P(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{const r=yield rt(this.fetch,`${this.url}/object/info/${t}`,{headers:this.headers});return{data:Jt(r),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(U(r))return{data:null,error:r};throw r}})}exists(e){return P(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{return yield Qo(this.fetch,`${this.url}/object/${t}`,{headers:this.headers}),{data:!0,error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(U(r)&&r instanceof Kt){const o=r.originalError;if([400,404].includes(o==null?void 0:o.status))return{data:!1,error:r}}throw r}})}getPublicUrl(e,t){const r=this._getFinalPath(e),o=[],n=t!=null&&t.download?`download=${t.download===!0?"":t.download}`:"";n!==""&&o.push(n);const i=typeof(t==null?void 0:t.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((t==null?void 0:t.transform)||{});l!==""&&o.push(l);let d=o.join("&");return d!==""&&(d=`?${d}`),{data:{publicUrl:encodeURI(`${this.url}/${i}/public/${r}${d}`)}}}remove(e){return P(this,void 0,void 0,function*(){try{return{data:yield cr(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(U(t))return{data:null,error:t};throw t}})}list(e,t,r){return P(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},tn),t),{prefix:e||""});return{data:yield le(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},r),error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(U(o))return{data:null,error:o};throw o}})}listV2(e,t){return P(this,void 0,void 0,function*(){try{const r=Object.assign({},e);return{data:yield le(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,r,{headers:this.headers},t),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(U(r))return{data:null,error:r};throw r}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}}const Hs="2.77.0",Vs={"X-Client-Info":`storage-js/${Hs}`};class sn{constructor(e,t={},r,o){this.shouldThrowOnError=!1;const n=new URL(e);o!=null&&o.useNewHostname&&/supabase\.(co|in|red)$/.test(n.hostname)&&!n.hostname.includes("storage.supabase.")&&(n.hostname=n.hostname.replace("supabase.","storage.supabase.")),this.url=n.href.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Vs),t),this.fetch=dr(r)}throwOnError(){return this.shouldThrowOnError=!0,this}listBuckets(e){return P(this,void 0,void 0,function*(){try{const t=this.listBucketOptionsToQueryString(e);return{data:yield rt(this.fetch,`${this.url}/bucket${t}`,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(U(t))return{data:null,error:t};throw t}})}getBucket(e){return P(this,void 0,void 0,function*(){try{return{data:yield rt(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(U(t))return{data:null,error:t};throw t}})}createBucket(e){return P(this,arguments,void 0,function*(t,r={public:!1}){try{return{data:yield le(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(U(o))return{data:null,error:o};throw o}})}updateBucket(e,t){return P(this,void 0,void 0,function*(){try{return{data:yield Yt(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(U(r))return{data:null,error:r};throw r}})}emptyBucket(e){return P(this,void 0,void 0,function*(){try{return{data:yield le(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(U(t))return{data:null,error:t};throw t}})}deleteBucket(e){return P(this,void 0,void 0,function*(){try{return{data:yield cr(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(U(t))return{data:null,error:t};throw t}})}listBucketOptionsToQueryString(e){const t={};return e&&("limit"in e&&(t.limit=String(e.limit)),"offset"in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?"?"+new URLSearchParams(t).toString():""}}class on{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Vs),t),this.fetch=dr(r)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return P(this,void 0,void 0,function*(){try{return{data:yield le(this.fetch,`${this.url}/bucket`,{name:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(U(t))return{data:null,error:t};throw t}})}listBuckets(e){return P(this,void 0,void 0,function*(){try{const t=new URLSearchParams;(e==null?void 0:e.limit)!==void 0&&t.set("limit",e.limit.toString()),(e==null?void 0:e.offset)!==void 0&&t.set("offset",e.offset.toString()),e!=null&&e.sortColumn&&t.set("sortColumn",e.sortColumn),e!=null&&e.sortOrder&&t.set("sortOrder",e.sortOrder),e!=null&&e.search&&t.set("search",e.search);const r=t.toString(),o=r?`${this.url}/bucket?${r}`:`${this.url}/bucket`;return{data:yield rt(this.fetch,o,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(U(t))return{data:null,error:t};throw t}})}deleteBucket(e){return P(this,void 0,void 0,function*(){try{return{data:yield cr(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(U(t))return{data:null,error:t};throw t}})}}const ur={"X-Client-Info":`storage-js/${Hs}`,"Content-Type":"application/json"};class Ws extends Error{constructor(e){super(e),this.__isStorageVectorsError=!0,this.name="StorageVectorsError"}}function ee(s){return typeof s=="object"&&s!==null&&"__isStorageVectorsError"in s}class Rt extends Ws{constructor(e,t,r){super(e),this.name="StorageVectorsApiError",this.status=t,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class nn extends Ws{constructor(e,t){super(e),this.name="StorageVectorsUnknownError",this.originalError=t}}var Cr;(function(s){s.InternalError="InternalError",s.S3VectorConflictException="S3VectorConflictException",s.S3VectorNotFoundException="S3VectorNotFoundException",s.S3VectorBucketNotEmpty="S3VectorBucketNotEmpty",s.S3VectorMaxBucketsExceeded="S3VectorMaxBucketsExceeded",s.S3VectorMaxIndexesExceeded="S3VectorMaxIndexesExceeded"})(Cr||(Cr={}));const hr=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>q(()=>Promise.resolve().then(()=>Te),void 0).then(({default:r})=>r(...t)):e=fetch,(...t)=>e(...t)},an=s=>{if(typeof s!="object"||s===null)return!1;const e=Object.getPrototypeOf(s);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},Or=s=>s.msg||s.message||s.error_description||s.error||JSON.stringify(s),ln=(s,e,t)=>P(void 0,void 0,void 0,function*(){if(s&&typeof s=="object"&&"status"in s&&"ok"in s&&typeof s.status=="number"&&!(t!=null&&t.noResolveJson)){const o=s.status||500,n=s;if(typeof n.json=="function")n.json().then(a=>{const i=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||o+"";e(new Rt(Or(a),o,i))}).catch(()=>{const a=o+"",i=n.statusText||`HTTP ${o} error`;e(new Rt(i,o,a))});else{const a=o+"",i=n.statusText||`HTTP ${o} error`;e(new Rt(i,o,a))}}else e(new nn(Or(s),s))}),dn=(s,e,t,r)=>{const o={method:s,headers:(e==null?void 0:e.headers)||{}};return s==="GET"||!r?o:(an(r)?(o.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),o.body=JSON.stringify(r)):o.body=r,Object.assign(Object.assign({},o),t))};function cn(s,e,t,r,o,n){return P(this,void 0,void 0,function*(){return new Promise((a,i)=>{s(t,dn(e,r,o,n)).then(l=>{if(!l.ok)throw l;if(r!=null&&r.noResolveJson)return l;const d=l.headers.get("content-type");return!d||!d.includes("application/json")?{}:l.json()}).then(l=>a(l)).catch(l=>ln(l,i,r))})})}function te(s,e,t,r,o){return P(this,void 0,void 0,function*(){return cn(s,"POST",e,r,o,t)})}class un{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},ur),t),this.fetch=hr(r)}throwOnError(){return this.shouldThrowOnError=!0,this}createIndex(e){return P(this,void 0,void 0,function*(){try{return{data:(yield te(this.fetch,`${this.url}/CreateIndex`,e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}getIndex(e,t){return P(this,void 0,void 0,function*(){try{return{data:yield te(this.fetch,`${this.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(ee(r))return{data:null,error:r};throw r}})}listIndexes(e){return P(this,void 0,void 0,function*(){try{return{data:yield te(this.fetch,`${this.url}/ListIndexes`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}deleteIndex(e,t){return P(this,void 0,void 0,function*(){try{return{data:(yield te(this.fetch,`${this.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:this.headers}))||{},error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(ee(r))return{data:null,error:r};throw r}})}}class hn{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},ur),t),this.fetch=hr(r)}throwOnError(){return this.shouldThrowOnError=!0,this}putVectors(e){return P(this,void 0,void 0,function*(){try{if(e.vectors.length<1||e.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return{data:(yield te(this.fetch,`${this.url}/PutVectors`,e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}getVectors(e){return P(this,void 0,void 0,function*(){try{return{data:yield te(this.fetch,`${this.url}/GetVectors`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}listVectors(e){return P(this,void 0,void 0,function*(){try{if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw new Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return{data:yield te(this.fetch,`${this.url}/ListVectors`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}queryVectors(e){return P(this,void 0,void 0,function*(){try{return{data:yield te(this.fetch,`${this.url}/QueryVectors`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}deleteVectors(e){return P(this,void 0,void 0,function*(){try{if(e.keys.length<1||e.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return{data:(yield te(this.fetch,`${this.url}/DeleteVectors`,e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}}class gn{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},ur),t),this.fetch=hr(r)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return P(this,void 0,void 0,function*(){try{return{data:(yield te(this.fetch,`${this.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}getBucket(e){return P(this,void 0,void 0,function*(){try{return{data:yield te(this.fetch,`${this.url}/GetVectorBucket`,{vectorBucketName:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}listBuckets(){return P(this,arguments,void 0,function*(e={}){try{return{data:yield te(this.fetch,`${this.url}/ListVectorBuckets`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}deleteBucket(e){return P(this,void 0,void 0,function*(){try{return{data:(yield te(this.fetch,`${this.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(ee(t))return{data:null,error:t};throw t}})}}class fn extends gn{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new pn(this.url,this.headers,e,this.fetch)}}class pn extends un{constructor(e,t,r,o){super(e,t,o),this.vectorBucketName=r}createIndex(e){const t=Object.create(null,{createIndex:{get:()=>super.createIndex}});return P(this,void 0,void 0,function*(){return t.createIndex.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName}))})}listIndexes(){const e=Object.create(null,{listIndexes:{get:()=>super.listIndexes}});return P(this,arguments,void 0,function*(t={}){return e.listIndexes.call(this,Object.assign(Object.assign({},t),{vectorBucketName:this.vectorBucketName}))})}getIndex(e){const t=Object.create(null,{getIndex:{get:()=>super.getIndex}});return P(this,void 0,void 0,function*(){return t.getIndex.call(this,this.vectorBucketName,e)})}deleteIndex(e){const t=Object.create(null,{deleteIndex:{get:()=>super.deleteIndex}});return P(this,void 0,void 0,function*(){return t.deleteIndex.call(this,this.vectorBucketName,e)})}index(e){return new mn(this.url,this.headers,this.vectorBucketName,e,this.fetch)}}class mn extends hn{constructor(e,t,r,o,n){super(e,t,n),this.vectorBucketName=r,this.indexName=o}putVectors(e){const t=Object.create(null,{putVectors:{get:()=>super.putVectors}});return P(this,void 0,void 0,function*(){return t.putVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}getVectors(e){const t=Object.create(null,{getVectors:{get:()=>super.getVectors}});return P(this,void 0,void 0,function*(){return t.getVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}listVectors(){const e=Object.create(null,{listVectors:{get:()=>super.listVectors}});return P(this,arguments,void 0,function*(t={}){return e.listVectors.call(this,Object.assign(Object.assign({},t),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}queryVectors(e){const t=Object.create(null,{queryVectors:{get:()=>super.queryVectors}});return P(this,void 0,void 0,function*(){return t.queryVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}deleteVectors(e){const t=Object.create(null,{deleteVectors:{get:()=>super.deleteVectors}});return P(this,void 0,void 0,function*(){return t.deleteVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}}class yn extends sn{constructor(e,t={},r,o){super(e,t,r,o)}from(e){return new rn(this.url,this.headers,e,this.fetch)}get vectors(){return new fn(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new on(this.url+"/iceberg",this.headers,this.fetch)}}const vn="2.77.0";let Qe="";typeof Deno<"u"?Qe="deno":typeof document<"u"?Qe="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Qe="react-native":Qe="node";const bn={"X-Client-Info":`supabase-js-${Qe}/${vn}`},wn={headers:bn},xn={schema:"public"},kn={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},_n={},En=s=>{let e;return s?e=s:typeof fetch>"u"?e=xs:e=fetch,(...t)=>e(...t)},Pn=()=>typeof Headers>"u"?ks:Headers,Sn=(s,e,t)=>{const r=En(t),o=Pn();return async(n,a)=>{var i;const l=(i=await e())!==null&&i!==void 0?i:s;let d=new o(a==null?void 0:a.headers);return d.has("apikey")||d.set("apikey",s),d.has("Authorization")||d.set("Authorization",`Bearer ${l}`),r(n,Object.assign(Object.assign({},a),{headers:d}))}};function In(s){return s.endsWith("/")?s:s+"/"}function Tn(s,e){var t,r;const{db:o,auth:n,realtime:a,global:i}=s,{db:l,auth:d,realtime:c,global:u}=e,p={db:Object.assign(Object.assign({},l),o),auth:Object.assign(Object.assign({},d),n),realtime:Object.assign(Object.assign({},c),a),storage:{},global:Object.assign(Object.assign(Object.assign({},u),i),{headers:Object.assign(Object.assign({},(t=u==null?void 0:u.headers)!==null&&t!==void 0?t:{}),(r=i==null?void 0:i.headers)!==null&&r!==void 0?r:{})}),accessToken:async()=>""};return s.accessToken?p.accessToken=s.accessToken:delete p.accessToken,p}function Cn(s){const e=s==null?void 0:s.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(In(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}const Gs="2.77.0",Ue=30*1e3,Qt=3,Bt=Qt*Ue,On="http://localhost:9999",An="supabase.auth.token",jn={"X-Client-Info":`gotrue-js/${Gs}`},Xt="X-Supabase-Api-Version",Ks={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Ln=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Rn=10*60*1e3;class st extends Error{constructor(e,t,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=r}}function S(s){return typeof s=="object"&&s!==null&&"__isAuthError"in s}class Bn extends st{constructor(e,t,r){super(e,t,r),this.name="AuthApiError",this.status=t,this.code=r}}function $n(s){return S(s)&&s.name==="AuthApiError"}class Pe extends st{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class ve extends st{constructor(e,t,r,o){super(e,r,o),this.name=t,this.status=r}}class me extends ve{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Dn(s){return S(s)&&s.name==="AuthSessionMissingError"}class Oe extends ve{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class ft extends ve{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class pt extends ve{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function Mn(s){return S(s)&&s.name==="AuthImplicitGrantRedirectError"}class Ar extends ve{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Zt extends ve{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function $t(s){return S(s)&&s.name==="AuthRetryableFetchError"}class jr extends ve{constructor(e,t,r){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=r}}class er extends ve{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const bt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Lr=` 	
\r=`.split(""),Nn=(()=>{const s=new Array(128);for(let e=0;e<s.length;e+=1)s[e]=-1;for(let e=0;e<Lr.length;e+=1)s[Lr[e].charCodeAt(0)]=-2;for(let e=0;e<bt.length;e+=1)s[bt[e].charCodeAt(0)]=e;return s})();function Rr(s,e,t){if(s!==null)for(e.queue=e.queue<<8|s,e.queuedBits+=8;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;t(bt[r]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;t(bt[r]),e.queuedBits-=6}}function Js(s,e,t){const r=Nn[s];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`)}}function Br(s){const e=[],t=a=>{e.push(String.fromCodePoint(a))},r={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},n=a=>{Fn(a,r,t)};for(let a=0;a<s.length;a+=1)Js(s.charCodeAt(a),o,n);return e.join("")}function Un(s,e){if(s<=127){e(s);return}else if(s<=2047){e(192|s>>6),e(128|s&63);return}else if(s<=65535){e(224|s>>12),e(128|s>>6&63),e(128|s&63);return}else if(s<=1114111){e(240|s>>18),e(128|s>>12&63),e(128|s>>6&63),e(128|s&63);return}throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`)}function qn(s,e){for(let t=0;t<s.length;t+=1){let r=s.charCodeAt(t);if(r>55295&&r<=56319){const o=(r-55296)*1024&65535;r=(s.charCodeAt(t+1)-56320&65535|o)+65536,t+=1}Un(r,e)}}function Fn(s,e,t){if(e.utf8seq===0){if(s<=127){t(s);return}for(let r=1;r<6;r+=1)if(!(s>>7-r&1)){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=s&31;else if(e.utf8seq===3)e.codepoint=s&15;else if(e.utf8seq===4)e.codepoint=s&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(s<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|s&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function Fe(s){const e=[],t={queue:0,queuedBits:0},r=o=>{e.push(o)};for(let o=0;o<s.length;o+=1)Js(s.charCodeAt(o),t,r);return new Uint8Array(e)}function zn(s){const e=[];return qn(s,t=>e.push(t)),new Uint8Array(e)}function Ie(s){const e=[],t={queue:0,queuedBits:0},r=o=>{e.push(o)};return s.forEach(o=>Rr(o,t,r)),Rr(null,t,r),e.join("")}function Hn(s){return Math.round(Date.now()/1e3)+s}function Vn(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const e=Math.random()*16|0;return(s=="x"?e:e&3|8).toString(16)})}const Z=()=>typeof window<"u"&&typeof document<"u",xe={tested:!1,writable:!1},Ys=()=>{if(!Z())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(xe.tested)return xe.writable;const s=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(s,s),globalThis.localStorage.removeItem(s),xe.tested=!0,xe.writable=!0}catch{xe.tested=!0,xe.writable=!1}return xe.writable};function Wn(s){const e={},t=new URL(s);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((o,n)=>{e[n]=o})}catch{}return t.searchParams.forEach((r,o)=>{e[o]=r}),e}const Qs=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>q(()=>Promise.resolve().then(()=>Te),void 0).then(({default:r})=>r(...t)):e=fetch,(...t)=>e(...t)},Gn=s=>typeof s=="object"&&s!==null&&"status"in s&&"ok"in s&&"json"in s&&typeof s.json=="function",qe=async(s,e,t)=>{await s.setItem(e,JSON.stringify(t))},ke=async(s,e)=>{const t=await s.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return t}},fe=async(s,e)=>{await s.removeItem(e)};class It{constructor(){this.promise=new It.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}It.promiseConstructor=Promise;function Dt(s){const e=s.split(".");if(e.length!==3)throw new er("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!Ln.test(e[r]))throw new er("JWT not in base64url format");return{header:JSON.parse(Br(e[0])),payload:JSON.parse(Br(e[1])),signature:Fe(e[2]),raw:{header:e[0],payload:e[1]}}}async function Kn(s){return await new Promise(e=>{setTimeout(()=>e(null),s)})}function Jn(s,e){return new Promise((r,o)=>{(async()=>{for(let n=0;n<1/0;n++)try{const a=await s(n);if(!e(n,null,a)){r(a);return}}catch(a){if(!e(n,a)){o(a);return}}})()})}function Yn(s){return("0"+s.toString(16)).substr(-2)}function Qn(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=t.length;let o="";for(let n=0;n<56;n++)o+=t.charAt(Math.floor(Math.random()*r));return o}return crypto.getRandomValues(e),Array.from(e,Yn).join("")}async function Xn(s){const t=new TextEncoder().encode(s),r=await crypto.subtle.digest("SHA-256",t),o=new Uint8Array(r);return Array.from(o).map(n=>String.fromCharCode(n)).join("")}async function Zn(s){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),s;const t=await Xn(s);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Ae(s,e,t=!1){const r=Qn();let o=r;t&&(o+="/PASSWORD_RECOVERY"),await qe(s,`${e}-code-verifier`,o);const n=await Zn(r);return[n,r===n?"plain":"s256"]}const ea=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function ta(s){const e=s.headers.get(Xt);if(!e||!e.match(ea))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function ra(s){if(!s)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(s<=e)throw new Error("JWT has expired")}function sa(s){switch(s){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const oa=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function je(s){if(!oa.test(s))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Mt(){const s={};return new Proxy(s,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const r=t.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function $r(s){return JSON.parse(JSON.stringify(s))}const _e=s=>s.msg||s.message||s.error_description||s.error||JSON.stringify(s),na=[502,503,504];async function Dr(s){var e;if(!Gn(s))throw new Zt(_e(s),0);if(na.includes(s.status))throw new Zt(_e(s),s.status);let t;try{t=await s.json()}catch(n){throw new Pe(_e(n),n)}let r;const o=ta(s);if(o&&o.getTime()>=Ks["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?r=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(r=t.error_code),r){if(r==="weak_password")throw new jr(_e(t),s.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new me}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((n,a)=>n&&typeof a=="string",!0))throw new jr(_e(t),s.status,t.weak_password.reasons);throw new Bn(_e(t),s.status||500,r)}const aa=(s,e,t,r)=>{const o={method:s,headers:(e==null?void 0:e.headers)||{}};return s==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),o.body=JSON.stringify(r),Object.assign(Object.assign({},o),t))};async function C(s,e,t,r){var o;const n=Object.assign({},r==null?void 0:r.headers);n[Xt]||(n[Xt]=Ks["2024-01-01"].name),r!=null&&r.jwt&&(n.Authorization=`Bearer ${r.jwt}`);const a=(o=r==null?void 0:r.query)!==null&&o!==void 0?o:{};r!=null&&r.redirectTo&&(a.redirect_to=r.redirectTo);const i=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await ia(s,e,t+i,{headers:n,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function ia(s,e,t,r,o,n){const a=aa(e,r,o,n);let i;try{i=await s(t,Object.assign({},a))}catch(l){throw console.error(l),new Zt(_e(l),0)}if(i.ok||await Dr(i),r!=null&&r.noResolveJson)return i;try{return await i.json()}catch(l){await Dr(l)}}function ie(s){var e;let t=null;ca(s)&&(t=Object.assign({},s),s.expires_at||(t.expires_at=Hn(s.expires_in)));const r=(e=s.user)!==null&&e!==void 0?e:s;return{data:{session:t,user:r},error:null}}function Mr(s){const e=ie(s);return!e.error&&s.weak_password&&typeof s.weak_password=="object"&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.message&&typeof s.weak_password.message=="string"&&s.weak_password.reasons.reduce((t,r)=>t&&typeof r=="string",!0)&&(e.data.weak_password=s.weak_password),e}function ye(s){var e;return{data:{user:(e=s.user)!==null&&e!==void 0?e:s},error:null}}function la(s){return{data:s,error:null}}function da(s){const{action_link:e,email_otp:t,hashed_token:r,redirect_to:o,verification_type:n}=s,a=Ve(s,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),i={action_link:e,email_otp:t,hashed_token:r,redirect_to:o,verification_type:n},l=Object.assign({},a);return{data:{properties:i,user:l},error:null}}function Nr(s){return s}function ca(s){return s.access_token&&s.refresh_token&&s.expires_in}const Nt=["global","local","others"];class ua{constructor({url:e="",headers:t={},fetch:r}){this.url=e,this.headers=t,this.fetch=Qs(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(e,t=Nt[0]){if(Nt.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Nt.join(", ")}`);try{return await C(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(S(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,t={}){try{return await C(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:ye})}catch(r){if(S(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:t}=e,r=Ve(e,["options"]),o=Object.assign(Object.assign({},r),t);return"newEmail"in r&&(o.new_email=r==null?void 0:r.newEmail,delete o.newEmail),await C(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:da,redirectTo:t==null?void 0:t.redirectTo})}catch(t){if(S(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await C(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:ye})}catch(t){if(S(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,r,o,n,a,i,l;try{const d={nextPage:null,lastPage:0,total:0},c=await C(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&r!==void 0?r:"",per_page:(n=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&n!==void 0?n:""},xform:Nr});if(c.error)throw c.error;const u=await c.json(),p=(a=c.headers.get("x-total-count"))!==null&&a!==void 0?a:0,g=(l=(i=c.headers.get("link"))===null||i===void 0?void 0:i.split(","))!==null&&l!==void 0?l:[];return g.length>0&&(g.forEach(w=>{const y=parseInt(w.split(";")[0].split("=")[1].substring(0,1)),h=JSON.parse(w.split(";")[1].split("=")[1]);d[`${h}Page`]=y}),d.total=parseInt(p)),{data:Object.assign(Object.assign({},u),d),error:null}}catch(d){if(S(d))return{data:{users:[]},error:d};throw d}}async getUserById(e){je(e);try{return await C(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:ye})}catch(t){if(S(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){je(e);try{return await C(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:ye})}catch(r){if(S(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,t=!1){je(e);try{return await C(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:ye})}catch(r){if(S(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){je(e.userId);try{const{data:t,error:r}=await C(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:t,error:r}}catch(t){if(S(t))return{data:null,error:t};throw t}}async _deleteFactor(e){je(e.userId),je(e.id);try{return{data:await C(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(S(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,r,o,n,a,i,l;try{const d={nextPage:null,lastPage:0,total:0},c=await C(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&r!==void 0?r:"",per_page:(n=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&n!==void 0?n:""},xform:Nr});if(c.error)throw c.error;const u=await c.json(),p=(a=c.headers.get("x-total-count"))!==null&&a!==void 0?a:0,g=(l=(i=c.headers.get("link"))===null||i===void 0?void 0:i.split(","))!==null&&l!==void 0?l:[];return g.length>0&&(g.forEach(w=>{const y=parseInt(w.split(";")[0].split("=")[1].substring(0,1)),h=JSON.parse(w.split(";")[1].split("=")[1]);d[`${h}Page`]=y}),d.total=parseInt(p)),{data:Object.assign(Object.assign({},u),d),error:null}}catch(d){if(S(d))return{data:{clients:[]},error:d};throw d}}async _createOAuthClient(e){try{return await C(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(S(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await C(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(S(t))return{data:null,error:t};throw t}}async _deleteOAuthClient(e){try{return await C(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(S(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await C(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(S(t))return{data:null,error:t};throw t}}}function Ur(s={}){return{getItem:e=>s[e]||null,setItem:(e,t)=>{s[e]=t},removeItem:e=>{delete s[e]}}}const Le={debug:!!(globalThis&&Ys()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Xs extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class ha extends Xs{}async function ga(s,e,t){Le.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",s,e);const r=new globalThis.AbortController;return e>0&&setTimeout(()=>{r.abort(),Le.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",s)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(s,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:r.signal},async o=>{if(o){Le.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",s,o.name);try{return await t()}finally{Le.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",s,o.name)}}else{if(e===0)throw Le.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",s),new ha(`Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`);if(Le.debug)try{const n=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(n,null,"  "))}catch(n){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",n)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await t()}}))}function fa(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Zs(s){if(!/^0x[a-fA-F0-9]{40}$/.test(s))throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);return s.toLowerCase()}function pa(s){return parseInt(s,16)}function ma(s){const e=new TextEncoder().encode(s);return"0x"+Array.from(e,r=>r.toString(16).padStart(2,"0")).join("")}function ya(s){var e;const{chainId:t,domain:r,expirationTime:o,issuedAt:n=new Date,nonce:a,notBefore:i,requestId:l,resources:d,scheme:c,uri:u,version:p}=s;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(p!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${p}`);if(!((e=s.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`)}const g=Zs(s.address),w=c?`${c}://${r}`:r,y=s.statement?`${s.statement}
`:"",h=`${w} wants you to sign in with your Ethereum account:
${g}

${y}`;let x=`URI: ${u}
Version: ${p}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${n.toISOString()}`;if(o&&(x+=`
Expiration Time: ${o.toISOString()}`),i&&(x+=`
Not Before: ${i.toISOString()}`),l&&(x+=`
Request ID: ${l}`),d){let _=`
Resources:`;for(const k of d){if(!k||typeof k!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${k}`);_+=`
- ${k}`}x+=_}return`${h}
${x}`}class z extends Error{constructor({message:e,code:t,cause:r,name:o}){var n;super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=(n=o??(r instanceof Error?r.name:void 0))!==null&&n!==void 0?n:"Unknown Error",this.code=t}}class wt extends z{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function va({error:s,options:e}){var t,r,o;const{publicKey:n}=e;if(!n)throw Error("options was missing required publicKey property");if(s.name==="AbortError"){if(e.signal instanceof AbortSignal)return new z({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:s})}else if(s.name==="ConstraintError"){if(((t=n.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new z({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:s});if(e.mediation==="conditional"&&((r=n.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new z({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:s});if(((o=n.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new z({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:s})}else{if(s.name==="InvalidStateError")return new z({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:s});if(s.name==="NotAllowedError")return new z({message:s.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s});if(s.name==="NotSupportedError")return n.pubKeyCredParams.filter(i=>i.type==="public-key").length===0?new z({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:s}):new z({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:s});if(s.name==="SecurityError"){const a=window.location.hostname;if(eo(a)){if(n.rp.id!==a)return new z({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:s})}else return new z({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:s})}else if(s.name==="TypeError"){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new z({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:s})}else if(s.name==="UnknownError")return new z({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:s})}return new z({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s})}function ba({error:s,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(s.name==="AbortError"){if(e.signal instanceof AbortSignal)return new z({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:s})}else{if(s.name==="NotAllowedError")return new z({message:s.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s});if(s.name==="SecurityError"){const r=window.location.hostname;if(eo(r)){if(t.rpId!==r)return new z({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:s})}else return new z({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:s})}else if(s.name==="UnknownError")return new z({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:s})}return new z({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s})}class wa{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const xa=new wa;function ka(s){if(!s)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(s);const{challenge:e,user:t,excludeCredentials:r}=s,o=Ve(s,["challenge","user","excludeCredentials"]),n=Fe(e).buffer,a=Object.assign(Object.assign({},t),{id:Fe(t.id).buffer}),i=Object.assign(Object.assign({},o),{challenge:n,user:a});if(r&&r.length>0){i.excludeCredentials=new Array(r.length);for(let l=0;l<r.length;l++){const d=r[l];i.excludeCredentials[l]=Object.assign(Object.assign({},d),{id:Fe(d.id).buffer,type:d.type||"public-key",transports:d.transports})}}return i}function _a(s){if(!s)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(s);const{challenge:e,allowCredentials:t}=s,r=Ve(s,["challenge","allowCredentials"]),o=Fe(e).buffer,n=Object.assign(Object.assign({},r),{challenge:o});if(t&&t.length>0){n.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const i=t[a];n.allowCredentials[a]=Object.assign(Object.assign({},i),{id:Fe(i.id).buffer,type:i.type||"public-key",transports:i.transports})}}return n}function Ea(s){var e;if("toJSON"in s&&typeof s.toJSON=="function")return s.toJSON();const t=s;return{id:s.id,rawId:s.id,response:{attestationObject:Ie(new Uint8Array(s.response.attestationObject)),clientDataJSON:Ie(new Uint8Array(s.response.clientDataJSON))},type:"public-key",clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Pa(s){var e;if("toJSON"in s&&typeof s.toJSON=="function")return s.toJSON();const t=s,r=s.getClientExtensionResults(),o=s.response;return{id:s.id,rawId:s.id,response:{authenticatorData:Ie(new Uint8Array(o.authenticatorData)),clientDataJSON:Ie(new Uint8Array(o.clientDataJSON)),signature:Ie(new Uint8Array(o.signature)),userHandle:o.userHandle?Ie(new Uint8Array(o.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function eo(s){return s==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s)}function qr(){var s,e;return!!(Z()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((s=navigator==null?void 0:navigator.credentials)===null||s===void 0?void 0:s.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function Sa(s){try{const e=await navigator.credentials.create(s);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new wt("Browser returned unexpected credential type",e)}:{data:null,error:new wt("Empty credential response",e)}}catch(e){return{data:null,error:va({error:e,options:s})}}}async function Ia(s){try{const e=await navigator.credentials.get(s);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new wt("Browser returned unexpected credential type",e)}:{data:null,error:new wt("Empty credential response",e)}}catch(e){return{data:null,error:ba({error:e,options:s})}}}const Ta={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"none"},Ca={userVerification:"preferred",hints:["security-key"]};function xt(...s){const e=o=>o!==null&&typeof o=="object"&&!Array.isArray(o),t=o=>o instanceof ArrayBuffer||ArrayBuffer.isView(o),r={};for(const o of s)if(o)for(const n in o){const a=o[n];if(a!==void 0)if(Array.isArray(a))r[n]=a;else if(t(a))r[n]=a;else if(e(a)){const i=r[n];e(i)?r[n]=xt(i,a):r[n]=xt(a)}else r[n]=a}return r}function Oa(s,e){return xt(Ta,s,e||{})}function Aa(s,e){return xt(Ca,s,e||{})}class ja{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:r,signal:o},n){try{const{data:a,error:i}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:i};const l=o??xa.createNewAbortSignal();if(a.webauthn.type==="create"){const{user:d}=a.webauthn.credential_options.publicKey;d.name||(d.name=`${d.id}:${r}`),d.displayName||(d.displayName=d.name)}switch(a.webauthn.type){case"create":{const d=Oa(a.webauthn.credential_options.publicKey,n==null?void 0:n.create),{data:c,error:u}=await Sa({publicKey:d,signal:l});return c?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:c}},error:null}:{data:null,error:u}}case"request":{const d=Aa(a.webauthn.credential_options.publicKey,n==null?void 0:n.request),{data:c,error:u}=await Ia(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:d,signal:l}));return c?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:c}},error:null}:{data:null,error:u}}}}catch(a){return S(a)?{data:null,error:a}:{data:null,error:new Pe("Unexpected error in challenge",a)}}}async _verify({challengeId:e,factorId:t,webauthn:r}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:r})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o}},n){if(!t)return{data:null,error:new st("rpId is required for WebAuthn authentication")};try{if(!qr())return{data:null,error:new Pe("Browser does not support WebAuthn",null)};const{data:a,error:i}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:r},signal:o},{request:n});if(!a)return{data:null,error:i};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:t,rpOrigins:r,credential_response:l.credential_response}})}catch(a){return S(a)?{data:null,error:a}:{data:null,error:new Pe("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o},n){if(!t)return{data:null,error:new st("rpId is required for WebAuthn registration")};try{if(!qr())return{data:null,error:new Pe("Browser does not support WebAuthn",null)};const{data:a,error:i}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(c=>{var u;return(u=c.data)===null||u===void 0?void 0:u.all.find(p=>p.factor_type==="webauthn"&&p.friendly_name===e&&p.status!=="unverified")}).then(c=>c?this.client.mfa.unenroll({factorId:c==null?void 0:c.id}):void 0),{data:null,error:i};const{data:l,error:d}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:r},signal:o},{create:n});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:t,rpOrigins:r,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:d}}catch(a){return S(a)?{data:null,error:a}:{data:null,error:new Pe("Unexpected error in register",a)}}}}fa();const La={url:On,storageKey:An,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:jn,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Fr(s,e,t){return await t()}const Re={};class ot{get jwks(){var e,t;return(t=(e=Re[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){Re[this.storageKey]=Object.assign(Object.assign({},Re[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=Re[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Re[this.storageKey]=Object.assign(Object.assign({},Re[this.storageKey]),{cachedAt:e})}constructor(e){var t,r;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=ot.nextInstanceID,ot.nextInstanceID+=1,this.instanceID>0&&Z()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},La),e);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new ua({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=Qs(o.fetch),this.lock=o.lock||Fr,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:Z()&&(!((t=globalThis==null?void 0:globalThis.navigator)===null||t===void 0)&&t.locks)?this.lock=ga:this.lock=Fr,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new ja(this)},this.persistSession?(o.storage?this.storage=o.storage:Ys()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Ur(this.memoryStorage)),o.userStorage&&(this.userStorage=o.userStorage)):(this.memoryStorage={},this.storage=Ur(this.memoryStorage)),Z()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(n){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",n)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async n=>{this._debug("received broadcast notification from other tab or client",n),await this._notifyAllSubscribers(n.data.event,n.data.session,!1)})}this.initialize()}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${Gs}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{const t=Wn(window.location.href);let r="none";if(this._isImplicitGrantCallback(t)?r="implicit":await this._isPKCECallback(t)&&(r="pkce"),Z()&&this.detectSessionInUrl&&r!=="none"){const{data:o,error:n}=await this._getSessionFromURL(t,r);if(n){if(this._debug("#_initialize()","error detecting session from URL",n),Mn(n)){const l=(e=n.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:n}}return await this._removeSession(),{error:n}}const{session:a,redirectType:i}=o;return this._debug("#_initialize()","detected session in URL",a,"redirect type",i),await this._saveSession(a),setTimeout(async()=>{i==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return S(t)?{error:t}:{error:new Pe("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,r,o;try{const n=await C(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(o=e==null?void 0:e.options)===null||o===void 0?void 0:o.captchaToken}},xform:ie}),{data:a,error:i}=n;if(i||!a)return{data:{user:null,session:null},error:i};const l=a.session,d=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:d,session:l},error:null}}catch(n){if(S(n))return{data:{user:null,session:null},error:n};throw n}}async signUp(e){var t,r,o;try{let n;if("email"in e){const{email:c,password:u,options:p}=e;let g=null,w=null;this.flowType==="pkce"&&([g,w]=await Ae(this.storage,this.storageKey)),n=await C(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:p==null?void 0:p.emailRedirectTo,body:{email:c,password:u,data:(t=p==null?void 0:p.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:w},xform:ie})}else if("phone"in e){const{phone:c,password:u,options:p}=e;n=await C(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:c,password:u,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},channel:(o=p==null?void 0:p.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:ie})}else throw new ft("You must provide either an email or phone number and a password");const{data:a,error:i}=n;if(i||!a)return{data:{user:null,session:null},error:i};const l=a.session,d=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:d,session:l},error:null}}catch(n){if(S(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithPassword(e){try{let t;if("email"in e){const{email:n,password:a,options:i}=e;t=await C(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:a,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},xform:Mr})}else if("phone"in e){const{phone:n,password:a,options:i}=e;t=await C(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:a,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},xform:Mr})}else throw new ft("You must provide either an email or phone number and a password");const{data:r,error:o}=t;return o?{data:{user:null,session:null},error:o}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new Oe}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:o})}catch(t){if(S(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOAuth(e){var t,r,o,n;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(o=e.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(n=e.options)===null||n===void 0?void 0:n.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,r,o,n,a,i,l,d,c,u,p;let g,w;if("message"in e)g=e.message,w=e.signature;else{const{chain:y,wallet:h,statement:x,options:_}=e;let k;if(Z())if(typeof h=="object")k=h;else{const I=window;if("ethereum"in I&&typeof I.ethereum=="object"&&"request"in I.ethereum&&typeof I.ethereum.request=="function")k=I.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof h!="object"||!(_!=null&&_.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");k=h}const f=new URL((t=_==null?void 0:_.url)!==null&&t!==void 0?t:window.location.href),v=await k.request({method:"eth_requestAccounts"}).then(I=>I).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!v||v.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const m=Zs(v[0]);let b=(r=_==null?void 0:_.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!b){const I=await k.request({method:"eth_chainId"});b=pa(I)}const E={domain:f.host,address:m,statement:x,uri:f.href,version:"1",chainId:b,nonce:(o=_==null?void 0:_.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(a=(n=_==null?void 0:_.signInWithEthereum)===null||n===void 0?void 0:n.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(i=_==null?void 0:_.signInWithEthereum)===null||i===void 0?void 0:i.expirationTime,notBefore:(l=_==null?void 0:_.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(d=_==null?void 0:_.signInWithEthereum)===null||d===void 0?void 0:d.requestId,resources:(c=_==null?void 0:_.signInWithEthereum)===null||c===void 0?void 0:c.resources};g=ya(E),w=await k.request({method:"personal_sign",params:[ma(g),m]})}try{const{data:y,error:h}=await C(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:g,signature:w},!((u=e.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:(p=e.options)===null||p===void 0?void 0:p.captchaToken}}:null),xform:ie});if(h)throw h;return!y||!y.session||!y.user?{data:{user:null,session:null},error:new Oe}:(y.session&&(await this._saveSession(y.session),await this._notifyAllSubscribers("SIGNED_IN",y.session)),{data:Object.assign({},y),error:h})}catch(y){if(S(y))return{data:{user:null,session:null},error:y};throw y}}async signInWithSolana(e){var t,r,o,n,a,i,l,d,c,u,p,g;let w,y;if("message"in e)w=e.message,y=e.signature;else{const{chain:h,wallet:x,statement:_,options:k}=e;let f;if(Z())if(typeof x=="object")f=x;else{const m=window;if("solana"in m&&typeof m.solana=="object"&&("signIn"in m.solana&&typeof m.solana.signIn=="function"||"signMessage"in m.solana&&typeof m.solana.signMessage=="function"))f=m.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof x!="object"||!(k!=null&&k.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");f=x}const v=new URL((t=k==null?void 0:k.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in f&&f.signIn){const m=await f.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},k==null?void 0:k.signInWithSolana),{version:"1",domain:v.host,uri:v.href}),_?{statement:_}:null));let b;if(Array.isArray(m)&&m[0]&&typeof m[0]=="object")b=m[0];else if(m&&typeof m=="object"&&"signedMessage"in m&&"signature"in m)b=m;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in b&&"signature"in b&&(typeof b.signedMessage=="string"||b.signedMessage instanceof Uint8Array)&&b.signature instanceof Uint8Array)w=typeof b.signedMessage=="string"?b.signedMessage:new TextDecoder().decode(b.signedMessage),y=b.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in f)||typeof f.signMessage!="function"||!("publicKey"in f)||typeof f!="object"||!f.publicKey||!("toBase58"in f.publicKey)||typeof f.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");w=[`${v.host} wants you to sign in with your Solana account:`,f.publicKey.toBase58(),..._?["",_,""]:[""],"Version: 1",`URI: ${v.href}`,`Issued At: ${(o=(r=k==null?void 0:k.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((n=k==null?void 0:k.signInWithSolana)===null||n===void 0)&&n.notBefore?[`Not Before: ${k.signInWithSolana.notBefore}`]:[],...!((a=k==null?void 0:k.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${k.signInWithSolana.expirationTime}`]:[],...!((i=k==null?void 0:k.signInWithSolana)===null||i===void 0)&&i.chainId?[`Chain ID: ${k.signInWithSolana.chainId}`]:[],...!((l=k==null?void 0:k.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${k.signInWithSolana.nonce}`]:[],...!((d=k==null?void 0:k.signInWithSolana)===null||d===void 0)&&d.requestId?[`Request ID: ${k.signInWithSolana.requestId}`]:[],...!((u=(c=k==null?void 0:k.signInWithSolana)===null||c===void 0?void 0:c.resources)===null||u===void 0)&&u.length?["Resources",...k.signInWithSolana.resources.map(b=>`- ${b}`)]:[]].join(`
`);const m=await f.signMessage(new TextEncoder().encode(w),"utf8");if(!m||!(m instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");y=m}}try{const{data:h,error:x}=await C(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:w,signature:Ie(y)},!((p=e.options)===null||p===void 0)&&p.captchaToken?{gotrue_meta_security:{captcha_token:(g=e.options)===null||g===void 0?void 0:g.captchaToken}}:null),xform:ie});if(x)throw x;return!h||!h.session||!h.user?{data:{user:null,session:null},error:new Oe}:(h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",h.session)),{data:Object.assign({},h),error:x})}catch(h){if(S(h))return{data:{user:null,session:null},error:h};throw h}}async _exchangeCodeForSession(e){const t=await ke(this.storage,`${this.storageKey}-code-verifier`),[r,o]=(t??"").split("/");try{const{data:n,error:a}=await C(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:ie});if(await fe(this.storage,`${this.storageKey}-code-verifier`),a)throw a;return!n||!n.session||!n.user?{data:{user:null,session:null,redirectType:null},error:new Oe}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign(Object.assign({},n),{redirectType:o??null}),error:a})}catch(n){if(S(n))return{data:{user:null,session:null,redirectType:null},error:n};throw n}}async signInWithIdToken(e){try{const{options:t,provider:r,token:o,access_token:n,nonce:a}=e,i=await C(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:o,access_token:n,nonce:a,gotrue_meta_security:{captcha_token:t==null?void 0:t.captchaToken}},xform:ie}),{data:l,error:d}=i;return d?{data:{user:null,session:null},error:d}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new Oe}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:d})}catch(t){if(S(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOtp(e){var t,r,o,n,a;try{if("email"in e){const{email:i,options:l}=e;let d=null,c=null;this.flowType==="pkce"&&([d,c]=await Ae(this.storage,this.storageKey));const{error:u}=await C(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:i,data:(t=l==null?void 0:l.data)!==null&&t!==void 0?t:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:d,code_challenge_method:c},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:u}}if("phone"in e){const{phone:i,options:l}=e,{data:d,error:c}=await C(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:i,data:(o=l==null?void 0:l.data)!==null&&o!==void 0?o:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(a=l==null?void 0:l.channel)!==null&&a!==void 0?a:"sms"}});return{data:{user:null,session:null,messageId:d==null?void 0:d.message_id},error:c}}throw new ft("You must provide either an email or phone number.")}catch(i){if(S(i))return{data:{user:null,session:null},error:i};throw i}}async verifyOtp(e){var t,r;try{let o,n;"options"in e&&(o=(t=e.options)===null||t===void 0?void 0:t.redirectTo,n=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:a,error:i}=await C(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:o,xform:ie});if(i)throw i;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,d=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:d,session:l},error:null}}catch(o){if(S(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(e){var t,r,o;try{let n=null,a=null;return this.flowType==="pkce"&&([n,a]=await Ae(this.storage,this.storageKey)),await C(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&r!==void 0?r:void 0}),!((o=e==null?void 0:e.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:n,code_challenge_method:a}),headers:this.headers,xform:la})}catch(n){if(S(n))return{data:null,error:n};throw n}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:r}=e;if(r)throw r;if(!t)throw new me;const{error:o}=await C(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return{data:{user:null,session:null},error:o}})}catch(e){if(S(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:r,type:o,options:n}=e,{error:a}=await C(this.fetch,"POST",t,{headers:this.headers,body:{email:r,type:o,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},redirectTo:n==null?void 0:n.emailRedirectTo});return{data:{user:null,session:null},error:a}}else if("phone"in e){const{phone:r,type:o,options:n}=e,{data:a,error:i}=await C(this.fetch,"POST",t,{headers:this.headers,body:{phone:r,type:o,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}}});return{data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:i}}throw new ft("You must provide either an email or phone number and a type")}catch(t){if(S(t))return{data:{user:null,session:null},error:t};throw t}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await r,await t()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=t();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await ke(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<Bt:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){const a=await ke(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=Mt()}if(this.storage.isServer&&e.user){let a=this.suppressGetSessionWarning;e=new Proxy(e,{get:(l,d,c)=>(!a&&d==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),a=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,d,c))})}return{data:{session:e},error:null}}const{data:o,error:n}=await this._callRefreshToken(e.refresh_token);return n?{data:{session:null},error:n}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await C(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:ye}):await this._useSession(async t=>{var r,o,n;const{data:a,error:i}=t;if(i)throw i;return!(!((r=a.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new me}:await C(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(n=(o=a.session)===null||o===void 0?void 0:o.access_token)!==null&&n!==void 0?n:void 0,xform:ye})})}catch(t){if(S(t))return Dn(t)&&(await this._removeSession(),await fe(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:t};throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async r=>{const{data:o,error:n}=r;if(n)throw n;if(!o.session)throw new me;const a=o.session;let i=null,l=null;this.flowType==="pkce"&&e.email!=null&&([i,l]=await Ae(this.storage,this.storageKey));const{data:d,error:c}=await C(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t==null?void 0:t.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:i,code_challenge_method:l}),jwt:a.access_token,xform:ye});if(c)throw c;return a.user=d.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),{data:{user:a.user},error:null}})}catch(r){if(S(r))return{data:{user:null},error:r};throw r}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new me;const t=Date.now()/1e3;let r=t,o=!0,n=null;const{payload:a}=Dt(e.access_token);if(a.exp&&(r=a.exp,o=r<=t),o){const{data:i,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!i)return{data:{user:null,session:null},error:null};n=i}else{const{data:i,error:l}=await this._getUser(e.access_token);if(l)throw l;n={access_token:e.access_token,refresh_token:e.refresh_token,user:i.user,token_type:"bearer",expires_in:r-t,expires_at:r},await this._saveSession(n),await this._notifyAllSubscribers("SIGNED_IN",n)}return{data:{user:n.user,session:n},error:null}}catch(t){if(S(t))return{data:{session:null,user:null},error:t};throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{var r;if(!e){const{data:a,error:i}=t;if(i)throw i;e=(r=a.session)!==null&&r!==void 0?r:void 0}if(!(e!=null&&e.refresh_token))throw new me;const{data:o,error:n}=await this._callRefreshToken(e.refresh_token);return n?{data:{user:null,session:null},error:n}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(t){if(S(t))return{data:{user:null,session:null},error:t};throw t}}async _getSessionFromURL(e,t){try{if(!Z())throw new pt("No browser detected.");if(e.error||e.error_description||e.error_code)throw new pt(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new Ar("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new pt("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Ar("No code detected.");const{data:_,error:k}=await this._exchangeCodeForSession(e.code);if(k)throw k;const f=new URL(window.location.href);return f.searchParams.delete("code"),window.history.replaceState(window.history.state,"",f.toString()),{data:{session:_.session,redirectType:null},error:null}}const{provider_token:r,provider_refresh_token:o,access_token:n,refresh_token:a,expires_in:i,expires_at:l,token_type:d}=e;if(!n||!i||!a||!d)throw new pt("No session defined in URL");const c=Math.round(Date.now()/1e3),u=parseInt(i);let p=c+u;l&&(p=parseInt(l));const g=p-c;g*1e3<=Ue&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${u}s`);const w=p-u;c-w>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",w,p,c):c-w<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",w,p,c);const{data:y,error:h}=await this._getUser(n);if(h)throw h;const x={provider_token:r,provider_refresh_token:o,access_token:n,expires_in:u,expires_at:p,refresh_token:a,token_type:d,user:y.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:x,redirectType:e.type},error:null}}catch(r){if(S(r))return{data:{session:null,redirectType:null},error:r};throw r}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const t=await ke(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var r;const{data:o,error:n}=t;if(n)return{error:n};const a=(r=o.session)===null||r===void 0?void 0:r.access_token;if(a){const{error:i}=await this.admin.signOut(a,e);if(i&&!($n(i)&&(i.status===404||i.status===401||i.status===403)))return{error:i}}return e!=="others"&&(await this._removeSession(),await fe(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const t=Vn(),r={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(t)})))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async t=>{var r,o;try{const{data:{session:n},error:a}=t;if(a)throw a;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",n)),this._debug("INITIAL_SESSION","callback id",e,"session",n)}catch(n){await((o=this.stateChangeEmitters.get(e))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",n),console.error(n)}})}async resetPasswordForEmail(e,t={}){let r=null,o=null;this.flowType==="pkce"&&([r,o]=await Ae(this.storage,this.storageKey,!0));try{return await C(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:o,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(n){if(S(n))return{data:null,error:n};throw n}}async getUserIdentities(){var e;try{const{data:t,error:r}=await this.getUser();if(r)throw r;return{data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(t){if(S(t))return{data:null,error:t};throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;try{const{data:r,error:o}=await this._useSession(async n=>{var a,i,l,d,c;const{data:u,error:p}=n;if(p)throw p;const g=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await C(this.fetch,"GET",g,{headers:this.headers,jwt:(c=(d=u.session)===null||d===void 0?void 0:d.access_token)!==null&&c!==void 0?c:void 0})});if(o)throw o;return Z()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),{data:{provider:e.provider,url:r==null?void 0:r.url},error:null}}catch(r){if(S(r))return{data:{provider:e.provider,url:null},error:r};throw r}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var r;try{const{error:o,data:{session:n}}=t;if(o)throw o;const{options:a,provider:i,token:l,access_token:d,nonce:c}=e,u=await C(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=n==null?void 0:n.access_token)!==null&&r!==void 0?r:void 0,body:{provider:i,id_token:l,access_token:d,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:ie}),{data:p,error:g}=u;return g?{data:{user:null,session:null},error:g}:!p||!p.session||!p.user?{data:{user:null,session:null},error:new Oe}:(p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("USER_UPDATED",p.session)),{data:p,error:g})}catch(o){if(S(o))return{data:{user:null,session:null},error:o};throw o}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var r,o;const{data:n,error:a}=t;if(a)throw a;return await C(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(o=(r=n.session)===null||r===void 0?void 0:r.access_token)!==null&&o!==void 0?o:void 0})})}catch(t){if(S(t))return{data:null,error:t};throw t}}async _refreshAccessToken(e){const t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,"begin");try{const r=Date.now();return await Jn(async o=>(o>0&&await Kn(200*Math.pow(2,o-1)),this._debug(t,"refreshing attempt",o),await C(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:ie})),(o,n)=>{const a=200*Math.pow(2,o);return n&&$t(n)&&Date.now()+a-r<Ue})}catch(r){if(this._debug(t,"error",r),S(r))return{data:{session:null,user:null},error:r};throw r}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",r),Z()&&!t.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,t;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const o=await ke(this.storage,this.storageKey);if(o&&this.userStorage){let a=await ke(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:o.user},await qe(this.userStorage,this.storageKey+"-user",a)),o.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:Mt()}else if(o&&!o.user&&!o.user){const a=await ke(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(o.user=a.user,await fe(this.storage,this.storageKey+"-user"),await qe(this.storage,this.storageKey,o)):o.user=Mt()}if(this._debug(r,"session from storage",o),!this._isValidSession(o)){this._debug(r,"session is not valid"),o!==null&&await this._removeSession();return}const n=((t=o.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<Bt;if(this._debug(r,`session has${n?"":" not"} expired with margin of ${Bt}s`),n){if(this.autoRefreshToken&&o.refresh_token){const{error:a}=await this._callRefreshToken(o.refresh_token);a&&(console.error(a),$t(a)||(this._debug(r,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:i}=await this._getUser(o.access_token);!i&&(a!=null&&a.user)?(o.user=a.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(r,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(r,"error",o),console.error(o);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var t,r;if(!e)throw new me;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new It;const{data:n,error:a}=await this._refreshAccessToken(e);if(a)throw a;if(!n.session)throw new me;await this._saveSession(n.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",n.session);const i={data:n.session,error:null};return this.refreshingDeferred.resolve(i),i}catch(n){if(this._debug(o,"error",n),S(n)){const a={data:null,error:n};return $t(n)||await this._removeSession(),(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(n),n}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(e,t,r=!0){const o=`#_notifyAllSubscribers(${e})`;this._debug(o,"begin",t,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:t});const n=[],a=Array.from(this.stateChangeEmitters.values()).map(async i=>{try{await i.callback(e,t)}catch(l){n.push(l)}});if(await Promise.all(a),n.length>0){for(let i=0;i<n.length;i+=1)console.error(n[i]);throw n[0]}}finally{this._debug(o,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const t=Object.assign({},e),r=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&t.user&&await qe(this.userStorage,this.storageKey+"-user",{user:t.user});const o=Object.assign({},t);delete o.user;const n=$r(o);await qe(this.storage,this.storageKey,n)}else{const o=$r(t);await qe(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),await fe(this.storage,this.storageKey),await fe(this.storage,this.storageKey+"-code-verifier"),await fe(this.storage,this.storageKey+"-user"),this.userStorage&&await fe(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Z()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Ue);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:r}}=t;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-e)/Ue);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Ue}ms, refresh threshold is ${Qt} ticks`),o<=Qt&&await this._callRefreshToken(r.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof Xs)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Z()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,r){const o=[`provider=${encodeURIComponent(t)}`];if(r!=null&&r.redirectTo&&o.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&o.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[n,a]=await Ae(this.storage,this.storageKey),i=new URLSearchParams({code_challenge:`${encodeURIComponent(n)}`,code_challenge_method:`${encodeURIComponent(a)}`});o.push(i.toString())}if(r!=null&&r.queryParams){const n=new URLSearchParams(r.queryParams);o.push(n.toString())}return r!=null&&r.skipBrowserRedirect&&o.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${o.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var r;const{data:o,error:n}=t;return n?{data:null,error:n}:await C(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token})})}catch(t){if(S(t))return{data:null,error:t};throw t}}async _enroll(e){try{return await this._useSession(async t=>{var r,o;const{data:n,error:a}=t;if(a)return{data:null,error:a};const i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:d}=await C(this.fetch,"POST",`${this.url}/factors`,{body:i,headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token});return d?{data:null,error:d}:(e.factorType==="totp"&&l.type==="totp"&&(!((o=l==null?void 0:l.totp)===null||o===void 0)&&o.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(t){if(S(t))return{data:null,error:t};throw t}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var r;const{data:o,error:n}=t;if(n)return{data:null,error:n};const a=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?Ea(e.webauthn.credential_response):Pa(e.webauthn.credential_response)})}:{code:e.code}),{data:i,error:l}=await C(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:a,headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token});return l?{data:null,error:l}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+i.expires_in},i)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",i),{data:i,error:l})})}catch(t){if(S(t))return{data:null,error:t};throw t}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var r;const{data:o,error:n}=t;if(n)return{data:null,error:n};const a=await C(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token});if(a.error)return a;const{data:i}=a;if(i.type!=="webauthn")return{data:i,error:null};switch(i.webauthn.type){case"create":return{data:Object.assign(Object.assign({},i),{webauthn:Object.assign(Object.assign({},i.webauthn),{credential_options:Object.assign(Object.assign({},i.webauthn.credential_options),{publicKey:ka(i.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},i),{webauthn:Object.assign(Object.assign({},i.webauthn),{credential_options:Object.assign(Object.assign({},i.webauthn.credential_options),{publicKey:_a(i.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(t){if(S(t))return{data:null,error:t};throw t}})}async _challengeAndVerify(e){const{data:t,error:r}=await this._challenge({factorId:e.factorId});return r?{data:null,error:r}:await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const o={all:[],phone:[],totp:[],webauthn:[]};for(const n of(e=t==null?void 0:t.factors)!==null&&e!==void 0?e:[])o.all.push(n),n.status==="verified"&&o[n.factor_type].push(n);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var t,r;const{data:{session:o},error:n}=e;if(n)return{data:null,error:n};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:a}=Dt(o.access_token);let i=null;a.aal&&(i=a.aal);let l=i;((r=(t=o.user.factors)===null||t===void 0?void 0:t.filter(u=>u.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(l="aal2");const c=a.amr||[];return{data:{currentLevel:i,nextLevel:l,currentAuthenticationMethods:c},error:null}}))}async fetchJwk(e,t={keys:[]}){let r=t.keys.find(i=>i.kid===e);if(r)return r;const o=Date.now();if(r=this.jwks.keys.find(i=>i.kid===e),r&&this.jwks_cached_at+Rn>o)return r;const{data:n,error:a}=await C(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!n.keys||n.keys.length===0||(this.jwks=n,this.jwks_cached_at=o,r=n.keys.find(i=>i.kid===e),!r)?null:r}async getClaims(e,t={}){try{let r=e;if(!r){const{data:g,error:w}=await this.getSession();if(w||!g.session)return{data:null,error:w};r=g.session.access_token}const{header:o,payload:n,signature:a,raw:{header:i,payload:l}}=Dt(r);t!=null&&t.allowExpired||ra(n.exp);const d=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,t!=null&&t.keys?{keys:t.keys}:t==null?void 0:t.jwks);if(!d){const{error:g}=await this.getUser(r);if(g)throw g;return{data:{claims:n,header:o,signature:a},error:null}}const c=sa(o.alg),u=await crypto.subtle.importKey("jwk",d,c,!0,["verify"]);if(!await crypto.subtle.verify(c,u,a,zn(`${i}.${l}`)))throw new er("Invalid JWT signature");return{data:{claims:n,header:o,signature:a},error:null}}catch(r){if(S(r))return{data:null,error:r};throw r}}}ot.nextInstanceID=0;const Ra=ot;class Ba extends Ra{constructor(e){super(e)}}class $a{constructor(e,t,r){var o,n,a;this.supabaseUrl=e,this.supabaseKey=t;const i=Cn(e);if(!t)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",i),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",i),this.storageUrl=new URL("storage/v1",i),this.functionsUrl=new URL("functions/v1",i);const l=`sb-${i.hostname.split(".")[0]}-auth-token`,d={db:xn,realtime:_n,auth:Object.assign(Object.assign({},kn),{storageKey:l}),global:wn},c=Tn(r??{},d);this.storageKey=(o=c.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(n=c.global.headers)!==null&&n!==void 0?n:{},c.accessToken?(this.accessToken=c.accessToken,this.auth=new Proxy({},{get:(u,p)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((a=c.auth)!==null&&a!==void 0?a:{},this.headers,c.global.fetch),this.fetch=Sn(t,this._getAccessToken.bind(this),c.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},c.realtime)),this.rest=new To(new URL("rest/v1",i).href,{headers:this.headers,schema:c.db.schema,fetch:this.fetch}),this.storage=new yn(this.storageUrl.href,this.headers,this.fetch,r==null?void 0:r.storage),c.accessToken||this._listenForAuthEvents()}get functions(){return new wo(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},r={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,r)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e,t;if(this.accessToken)return await this.accessToken();const{data:r}=await this.auth.getSession();return(t=(e=r.session)===null||e===void 0?void 0:e.access_token)!==null&&t!==void 0?t:this.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:o,userStorage:n,storageKey:a,flowType:i,lock:l,debug:d},c,u){const p={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Ba({url:this.authUrl.href,headers:Object.assign(Object.assign({},p),c),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:o,userStorage:n,flowType:i,lock:l,debug:d,fetch:u,hasCustomAuthorizationHeader:Object.keys(this.headers).some(g=>g.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new Vo(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,r)=>{this._handleTokenChanged(t,"CLIENT",r==null?void 0:r.access_token)})}_handleTokenChanged(e,t,r){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==r?(this.changedAccessToken=r,this.realtime.setAuth(r)):e==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const Da=(s,e,t)=>new $a(s,e,t);function Ma(){if(typeof window<"u"||typeof process>"u")return!1;const s=process.version;if(s==null)return!1;const e=s.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}Ma()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Na="https://oiqfkymlohsgaatrvzic.supabase.co",Ua="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pcWZreW1sb2hzZ2FhdHJ2emljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjI0MDYsImV4cCI6MjA3NzI5ODQwNn0.H7MCCblHQ5mGnv-bSFrTnWpvmiqyPXRweDEp98wvEno",T=Da(Na,Ua),zr=Object.freeze(Object.defineProperty({__proto__:null,supabase:T},Symbol.toStringTag,{value:"Module"})),Se=class Se{constructor(){Ot(this,"permission","default");"Notification"in window&&(this.permission=Notification.permission)}static getInstance(){return Se.instance||(Se.instance=new Se),Se.instance}isSupported(){return"Notification"in window}getPermission(){return this.permission}async requestPermission(){if(!this.isSupported())return console.warn("⚠️ Notificaciones no soportadas en este navegador"),!1;if(this.permission==="granted")return!0;try{const e=await Notification.requestPermission();return this.permission=e,e==="granted"?(console.log("✅ Permiso de notificaciones concedido"),this.send({title:"¡Gracias por suscribirte!",body:"Ahora recibirás notificaciones sobre ofertas y nuevos productos.",tag:"welcome"}),!0):(console.log("⚠️ Permiso de notificaciones denegado"),!1)}catch(e){return console.error("❌ Error solicitando permiso:",e),!1}}showToast(e,t,r="🔔"){let o=document.getElementById("toast-container");o||(o=document.createElement("div"),o.id="toast-container",o.style.cssText="position:fixed;top:20px;right:20px;z-index:99999;display:flex;flex-direction:column;gap:10px;",document.body.appendChild(o));const n=document.createElement("div");if(n.style.cssText=`
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      min-width: 300px;
      max-width: 400px;
      animation: slideIn 0.3s ease;
    `,n.innerHTML=`
      <div style="display:flex;align-items:start;gap:12px;">
        <div style="font-size:24px;">${r}</div>
        <div style="flex:1;">
          <div style="font-weight:bold;font-size:16px;margin-bottom:4px;">${e}</div>
          <div style="font-size:14px;opacity:0.95;">${t}</div>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:16px;">×</button>
      </div>
    `,!document.getElementById("toast-animations")){const a=document.createElement("style");a.id="toast-animations",a.textContent="@keyframes slideIn{from{transform:translateX(400px);opacity:0}to{transform:translateX(0);opacity:1}}",document.head.appendChild(a)}o.appendChild(n),setTimeout(()=>{n.style.animation="slideIn 0.3s ease reverse",setTimeout(()=>n.remove(),300)},5e3)}send(e){if(!this.isSupported())return console.warn("⚠️ Notificaciones no soportadas"),null;if(this.permission!=="granted")return console.warn("⚠️ Permiso de notificaciones no concedido"),null;const t=e.title.split(" ")[0]||"🔔";this.showToast(e.title,e.body,t);try{const r=new Notification(e.title,{body:e.body,icon:e.icon,badge:e.badge,tag:e.tag||"general",data:e.data,requireInteraction:!1});return setTimeout(()=>r.close(),5e3),r}catch{return console.warn("⚠️ Notificación del sistema falló, pero toast HTML sí funcionó"),null}}sendNewOfferNotification(e,t){return this.send({title:"🔥 ¡Nueva Oferta!",body:`${e} ahora con ${t}% de descuento`,tag:"new-offer",data:{type:"offer",discount:t}})}sendNewProductNotification(e){return this.send({title:"✨ Nuevo Producto",body:`${e} ya está disponible`,tag:"new-product",data:{type:"new-product"}})}sendFreshMeatNotification(){return this.send({title:"🥩 Carne Recién Surtida",body:"¡Acabamos de recibir carne fresca! Visita nuestra tienda.",tag:"fresh-meat",data:{type:"fresh-stock"}})}sendFlashPromoNotification(e){return this.send({title:"⚡ Promoción Flash",body:`Ofertas especiales por las próximas ${e}. ¡No te las pierdas!`,tag:"flash-promo",data:{type:"flash-promo"}})}sendCustomNotification(e,t){return this.send({title:e,body:t,tag:"custom"})}};Ot(Se,"instance");let tr=Se;const to=tr.getInstance();window.notificationService=to;function qa(){return`
    <header class="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 dark:from-primary-900 dark:via-primary-800 dark:to-primary-900 text-white shadow-lg sticky top-0 z-50">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between gap-3 sm:gap-4">
          <!-- Logo -->
          <div class="flex items-center space-x-3 min-w-0 flex-shrink">
            <a href="#" id="adminSecretAccess" class="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap truncate max-w-[180px] sm:max-w-none hover:text-primary-100 transition-colors duration-200" title="Doble click para acceso admin">
              Super Carnes García
            </a>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a href="#" class="nav-link px-4 py-2 rounded-lg font-medium text-sm lg:text-base hover:bg-white/10 transition-all duration-200 active:bg-white/20" data-page="home">Inicio</a>
            <a href="#" class="nav-link px-4 py-2 rounded-lg font-medium text-sm lg:text-base hover:bg-white/10 transition-all duration-200" data-page="meats">Carnes</a>
            <a href="#" class="nav-link px-4 py-2 rounded-lg font-medium text-sm lg:text-base hover:bg-white/10 transition-all duration-200" data-page="products">Productos</a>
            <a href="#" class="nav-link px-4 py-2 rounded-lg font-medium text-sm lg:text-base hover:bg-white/10 transition-all duration-200" data-page="offers">Ofertas</a>
          </div>

          <!-- Right Controls -->
          <div class="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <!-- Dark Mode Toggle -->
            <button id="darkModeToggle" class="p-2 sm:p-2.5 hover:bg-white/10 active:bg-white/20 rounded-lg transition-all duration-200 flex-shrink-0 group">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 dark:hidden group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg class="w-5 h-5 sm:w-6 sm:h-6 hidden dark:block group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            
            <!-- User Menu Desktop -->
            <div class="relative hidden md:block flex-shrink-0" id="userMenuContainer">
              <button id="userMenuButton" class="flex items-center space-x-2 px-3 lg:px-4 py-2 bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-lg transition-all duration-200 min-w-0 backdrop-blur-sm">
                <svg class="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <span id="userName" class="text-xs lg:text-sm font-medium max-w-[100px] lg:max-w-[150px] truncate"></span>
                <svg class="w-4 h-4 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div id="userDropdown" class="hidden absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl py-2 z-50 border border-gray-200 dark:border-gray-700 scale-in">
                <!-- No Auth Buttons -->
                <div id="dropdownAuthButtons" class="hidden">
                  <button id="dropdownLoginButton" class="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-3">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                    </svg>
                    <span>Iniciar Sesión</span>
                  </button>
                </div>
                
                <!-- User Info -->
                <div id="dropdownUserInfo" class="hidden">
                  <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p class="text-sm font-semibold text-gray-900 dark:text-white truncate" id="dropdownEmail"></p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 admin-only hidden font-medium">🔑 Administrador</p>
                  </div>
                  <button id="logoutButton" class="w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center space-x-3 mt-1">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Mobile Menu Button -->
            <button id="menuButton" class="md:hidden p-2 hover:bg-white/10 active:bg-white/20 rounded-lg transition-all duration-200 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden mt-4 pb-2 slide-down">
          <div class="flex flex-col space-y-2">
            <!-- Mobile Auth Buttons -->
            <div id="mobileAuthButtons" class="hidden border-t border-white/20 pt-3 space-y-2">
              <button id="mobileNavLoginButton" class="w-full px-4 py-2.5 text-sm font-semibold bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-lg transition-all backdrop-blur-sm">
                Iniciar Sesión
              </button>
              <button id="mobileNavRegisterButton" class="w-full px-4 py-2.5 text-sm font-semibold bg-white text-primary-600 hover:bg-primary-50 active:bg-primary-100 rounded-lg transition-all shadow-md">
                Crear Cuenta
              </button>
            </div>
            
            <!-- Mobile User Info -->
            <div id="mobileUserInfo" class="hidden border-t border-white/20 pt-3">
              <div class="flex items-center justify-between mb-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div class="flex items-center space-x-3 min-w-0 flex-1">
                  <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-semibold truncate" id="mobileUserName"></p>
                    <p class="text-xs text-primary-200 admin-only hidden font-medium">🔑 Administrador</p>
                  </div>
                </div>
                <button id="mobileLogoutButton" class="flex-shrink-0 px-4 py-2 text-sm font-semibold bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg transition-colors shadow-md">
                  Salir
                </button>
              </div>
            </div>
            
            <!-- Mobile Nav Links -->
            <a href="#" class="nav-link px-4 py-2.5 rounded-lg font-medium hover:bg-white/10 active:bg-white/20 transition-all" data-page="home">🏠 Inicio</a>
            <a href="#" class="nav-link px-4 py-2.5 rounded-lg font-medium hover:bg-white/10 active:bg-white/20 transition-all" data-page="meats">🥩 Carnes</a>
            <a href="#" class="nav-link px-4 py-2.5 rounded-lg font-medium hover:bg-white/10 active:bg-white/20 transition-all" data-page="products">🛒 Productos</a>
            <a href="#" class="nav-link px-4 py-2.5 rounded-lg font-medium hover:bg-white/10 active:bg-white/20 transition-all" data-page="offers">🔥 Ofertas</a>
          </div>
        </div>
      </nav>
    </header>
  `}function rr(){return`
    <!-- Banner Principal con Imagen de la Tienda -->
    <section class="relative bg-gradient-to-br from-primary-700 to-primary-900 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden mb-16 min-h-[450px] md:min-h-[500px] flex items-center shadow-2xl">
      <!-- Imagen de fondo de la tienda -->
      <div class="absolute inset-0">
        <img src="images/imagen de la tienda.jpg" alt="Super Carnes García" class="w-full h-full object-cover" loading="eager">
        <!-- Overlay con gradiente mejorado -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>
      
      <!-- Contenido del banner -->
      <div class="relative z-10 px-6 sm:px-8 md:px-12 py-20 text-white w-full">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl leading-tight slide-up">
            Bienvenidos a <span class="text-red-400">Super Carnes García</span>
          </h1>
          <p class="text-xl sm:text-2xl mb-10 drop-shadow-lg text-gray-100 leading-relaxed fade-in">
            La mejor calidad en carnes para su mesa
          </p>
          <a href="#" data-page="meats" class="nav-link inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105 active:scale-95">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
            Ver Cortes
          </a>
        </div>
      </div>
    </section>

    <!-- Sección Sobre Nosotros -->
    <section class="mb-16">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
        Sobre Nosotros
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Texto descriptivo -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Desde <strong class="text-primary-600 dark:text-primary-400">1988</strong>, Super Carnes García se ha convertido en 
            sinónimo de calidad y excelencia en el mercado de carnes. Nos especializamos 
            en ofrecer los mejores cortes, seleccionados cuidadosamente para garantizar 
            la mejor experiencia culinaria para nuestros clientes.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Carnes de primera calidad</span>
            </li>
            <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Cortes especializados</span>
            </li>
            <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Atención personalizada</span>
            </li>
            <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Higiene y seguridad garantizada</span>
            </li>
          </ul>
        </div>
        
        <!-- Stats Cards -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
            <div class="text-4xl sm:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-2">30+</div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">Años</h3>
            <p class="text-sm text-gray-500 dark:text-gray-500">De experiencia</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
            <div class="text-4xl sm:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-2">100%</div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">Calidad</h3>
            <p class="text-sm text-gray-500 dark:text-gray-500">Certificada</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
            <div class="text-4xl sm:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-2">24/7</div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">Servicio</h3>
            <p class="text-sm text-gray-500 dark:text-gray-500">Atención continua</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
            <div class="text-4xl sm:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-2">200+</div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">Variedad</h3>
            <p class="text-sm text-gray-500 dark:text-gray-500">De productos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categorías Destacadas -->
    <section class="mb-16">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
        Categorías Destacadas
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Tarjeta 1 - Carnes -->
        <a href="#" data-page="meats" class="nav-link group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
          <div class="relative overflow-hidden">
            <img src="images/carnes-frescas.jpeg" alt="Carnes Frescas" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold text-red-700 dark:text-red-400 mb-3 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors">🥩 Carnes Frescas</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">La mejor selección de cortes frescos para tu mesa.</p>
          </div>
        </a>

        <!-- Tarjeta 2 - Productos -->
        <a href="#" data-page="products" class="nav-link group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
          <div class="relative overflow-hidden">
            <img src="images/abarrotes.webp" alt="Abarrotes" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold text-red-700 dark:text-red-400 mb-3 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors">🛒 Productos Increíbles</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Todo tipo de abarrotes de primera calidad.</p>
          </div>
        </a>

        <!-- Tarjeta 3 - Ofertas -->
        <a href="#" data-page="offers" class="nav-link group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
          <div class="relative overflow-hidden">
            <img src="images/ofertas2.jpg" alt="Ofertas" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <!-- Badge de Oferta -->
            <div class="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
              ¡OFERTAS!
            </div>
          </div>
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold text-red-700 dark:text-red-400 mb-3 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors">🔥 Grandes Ofertas</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Descuentos especiales de la semana.</p>
          </div>
        </a>

      </div>
    </section>
  `}function at(s){const e=typeof s.discount<"u"&&s.discount>0,t=s.activo===!1,r=s.precio||0,o=e&&r>0?r-r*(s.discount||0)/100:r;return`
    <div class="product-card group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700 ${t?"opacity-60 order-last grayscale":""}" data-product-id="${s.id}" data-activo="${s.activo!==!1}">
      
      <!-- Badge de Descuento -->
      ${e?`
        <div class="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1.5 rounded-full shadow-lg z-10 font-bold text-sm animate-pulse">
          -${s.discount}%
        </div>
      `:""}
      
      <!-- Badge de Inactivo -->
      ${t?`
        <div class="absolute top-3 right-3 bg-gray-600 dark:bg-gray-500 text-white px-4 py-1.5 rounded-full shadow-lg z-10 font-semibold text-xs uppercase tracking-wide">
          Inactivo
        </div>
      `:""}
      
      <!-- Controles de Administrador -->
      ${t?`
        <div class="admin-only absolute inset-0 flex items-center justify-center transition-all duration-300 z-20">
          <button 
            onclick="window.activateProduct(${s.id})" 
            class="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-xl hover:from-green-600 hover:to-green-700 hover:scale-105 active:scale-95 transition-all font-bold text-base inline-flex items-center gap-2"
            title="Activar producto"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Activar Producto
          </button>
        </div>
      `:`
        <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 transform group-hover:scale-110">
          <button 
            onclick="window.openEditProductModal(${s.id})" 
            class="admin-only p-2.5 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-50 dark:hover:bg-gray-600 transition-all backdrop-blur-sm border border-gray-200 dark:border-gray-600"
            title="Editar producto"
          >
            <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>
      `}

      <!-- Imagen del Producto -->
      <div class="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src="${s.image}" 
          alt="${s.name}"
          class="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          onerror="this.src='/images/placeholder.jpg'; this.onerror=null;"
          loading="lazy"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <!-- Contenido de la Tarjeta -->
      <div class="p-5">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          ${s.name}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          ${s.description}
        </p>
        
        <!-- Precio -->
        ${s.showPrice&&r>0?`
          <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-2 flex-wrap">
              ${e?`
                <span class="text-gray-500 dark:text-gray-400 line-through text-base font-medium">
                  $${r.toFixed(2)}
                </span>
                <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                <span class="text-2xl font-bold text-green-600 dark:text-green-400">
                  $${o.toFixed(2)}
                </span>
              `:`
                <span class="text-2xl font-bold text-gray-900 dark:text-white">
                  $${r.toFixed(2)}
                </span>
              `}
            </div>
            ${e?`
              <div class="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-xs font-semibold text-green-700 dark:text-green-300">
                  Ahorras $${(r-o).toFixed(2)}
                </span>
              </div>
            `:""}
          </div>
        `:""}
      </div>
    </div>
  `}const Ii=Object.freeze(Object.defineProperty({__proto__:null,ProductCard:at},Symbol.toStringTag,{value:"Module"}));async function Fa(s,e=!1,t=!1,r="user"){try{let o=T.from("productos").select("*");r!=="admin"&&(o=o.eq("activo",!0)),o=o.order("orden",{ascending:!0}),s&&s!=="Todos"&&(o=o.eq("categoria",s)),e&&(o=o.neq("categoria","carnes")),t&&(o=o.gt("descuento",0));const{data:n,error:a}=await o;if(a)return console.error("❌ Error cargando productos:",a),[];const i=t?" (solo ofertas)":e?" (sin carnes)":s?` - categoría: ${s}`:"";return console.log(`✅ Productos cargados: ${(n==null?void 0:n.length)||0}${i}`),n||[]}catch(o){return console.error("❌ Error inesperado:",o),[]}}const Ut=16;async function Tt(s,e,t,r=!1,o=!1){let n=1;async function a(i){const l=document.getElementById(s),d=document.getElementById(e);if(!l||!d)return;const c=window.userRole||"user",u=await Fa(t,r,o,c),p=Math.ceil(u.length/Ut),g=(i-1)*Ut,w=u.slice(g,g+Ut);w.length>0?l.innerHTML=w.map(y=>at({id:y.id,name:y.nombre,description:y.descripcion||"",image:y.imagen_url||"/images/placeholder.jpg",category:y.categoria,discount:y.descuento,activo:y.activo,precio:y.precio,showPrice:!0})).join(""):l.innerHTML='<p class="col-span-full text-center text-gray-500 dark:text-gray-400 py-8">No hay productos disponibles</p>',za(d,i,p,a),setTimeout(()=>{typeof window.updateAdminButtons=="function"&&window.updateAdminButtons(),typeof window.setupDragAndDrop=="function"&&window.setupDragAndDrop()},100)}await a(n)}function za(s,e,t,r){if(t<=1){s.innerHTML="";return}let o="";o+=`
    <button 
      class="px-4 py-2 rounded-lg ${e===1?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-primary-600 text-white hover:bg-primary-700"} transition-colors"
      ${e===1?"disabled":""}
    >
      ← Anterior
    </button>
  `;for(let a=1;a<=t;a++)a===1||a===t||a>=e-1&&a<=e+1?o+=`
        <button 
          class="px-4 py-2 rounded-lg ${a===e?"bg-primary-600 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"} transition-colors font-medium"
        >
          ${a}
        </button>
      `:(a===e-2||a===e+2)&&(o+='<span class="px-2 text-gray-500">...</span>');o+=`
    <button 
      class="px-4 py-2 rounded-lg ${e===t?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-primary-600 text-white hover:bg-primary-700"} transition-colors"
      ${e===t?"disabled":""}
    >
      Siguiente →
    </button>
  `,s.innerHTML=o;const n=s.querySelectorAll("button");n.forEach((a,i)=>{a.addEventListener("click",()=>{if(a.disabled)return;let l=e;i===0?l=e-1:i===n.length-1?l=e+1:l=parseInt(a.textContent||"1"),window.scrollTo({top:0,behavior:"smooth"}),r(l)})})}const ce=Object.freeze(Object.defineProperty({__proto__:null,setupPagination:Tt},Symbol.toStringTag,{value:"Module"}));function Ha(){const s=document.querySelectorAll(".category-filter");s.forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-category");s.forEach(i=>{i.classList.remove("bg-primary-600","text-white"),i.classList.add("bg-gray-200","dark:bg-gray-700","text-gray-700","dark:text-gray-300")}),e.classList.remove("bg-gray-200","dark:bg-gray-700","text-gray-700","dark:text-gray-300"),e.classList.add("bg-primary-600","text-white");const r=window.userRole||"user";let o;t&&t!=="Todos"?o=T.from("productos").select(`
            *,
            producto_subcategorias!inner(subcategoria)
          `).eq("categoria","carnes").eq("producto_subcategorias.subcategoria",t).order("orden",{ascending:!0}):o=T.from("productos").select("*").eq("categoria","carnes").order("orden",{ascending:!0}),r!=="admin"&&(o=o.eq("activo",!0));const{data:n}=await o,a=document.getElementById("meatsGrid");a&&n&&(a.innerHTML=n.map(i=>at({id:i.id,name:i.nombre,description:i.descripcion||"",image:i.imagen_url||"/images/placeholder.jpg",category:i.categoria,discount:i.descuento,activo:i.activo,precio:i.precio,showPrice:!0})).join(""),typeof window.updateAdminButtons=="function"&&window.updateAdminButtons(),typeof window.setupDragAndDrop=="function"&&setTimeout(()=>{window.setupDragAndDrop()},100))})})}function kt(){return setTimeout(()=>{q(()=>import("./searchProducts-d0645cf9.js"),[]).then(s=>{s.setupSearch({inputId:"searchMeats",resultsId:"searchMeatsResults",gridId:"meatsGrid",categoria:"carnes"})}),Ha()},0),requestAnimationFrame(()=>{setTimeout(()=>{Tt("meatsGrid","meatsPagination","carnes",!1,!1)},100)}),`
    <div class="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">

      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Nuestros Cortes</h1>
        
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">

          <!-- Add Product Button -->
          <button 
            onclick="window.openAddProductModal()" 
            class="admin-only px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors hidden items-center justify-center space-x-2"
            title="Añadir producto"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            <span>Añadir</span>
          </button>

          <!-- Search Bar -->
          <div class="relative w-full sm:w-64">
            <input
              type="text"
              id="searchMeats"
              class="w-full px-4 py-2 pr-8 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Buscar cortes..."
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <!-- Search Results Dropdown -->
            <div id="searchMeatsResults" class="hidden absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>

      <!-- Filtros de Subcategoría -->
      <div class="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
        <button class="category-filter px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-primary-600 text-white transition-colors whitespace-nowrap flex-shrink-0" data-category="Todos">
          Todos
        </button>
        <button class="category-filter px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap flex-shrink-0" data-category="Premium">
          Premium
        </button>
        <button class="category-filter px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap flex-shrink-0" data-category="Res">
          Res
        </button>
        <button class="category-filter px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap flex-shrink-0" data-category="Cerdo">
          Cerdo
        </button>
        <button class="category-filter px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap flex-shrink-0" data-category="Pollo">
          Pollo
        </button>
        <button class="category-filter px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap flex-shrink-0" data-category="Cortes Especiales">
          Cortes Especiales
        </button>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="meatsGrid"></div>

      <!-- Pagination -->
      <div id="meatsPagination" class="flex justify-center space-x-2 mt-8"></div>

    </div>
  `}function Va(){const s=document.querySelectorAll(".category-filter");s.forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-category");s.forEach(i=>{i.classList.remove("bg-primary-600","text-white"),i.classList.add("bg-gray-200","dark:bg-gray-700","text-gray-700","dark:text-gray-300")}),e.classList.remove("bg-gray-200","dark:bg-gray-700","text-gray-700","dark:text-gray-300"),e.classList.add("bg-primary-600","text-white");const r=window.userRole||"user";let o;t&&t!=="Todos"?o=T.from("productos").select(`
            *,
            producto_subcategorias!inner(subcategoria)
          `).neq("categoria","carnes").eq("producto_subcategorias.subcategoria",t).order("orden",{ascending:!0}):o=T.from("productos").select("*").neq("categoria","carnes").order("orden",{ascending:!0}),r!=="admin"&&(o=o.eq("activo",!0));const{data:n}=await o,a=document.getElementById("productsGrid");a&&n&&(a.innerHTML=n.map(i=>at({id:i.id,name:i.nombre,description:i.descripcion||"",image:i.imagen_url||"/images/placeholder.jpg",category:i.categoria,discount:i.descuento,activo:i.activo,precio:i.precio,showPrice:!0})).join(""),typeof window.updateAdminButtons=="function"&&window.updateAdminButtons(),typeof window.setupDragAndDrop=="function"&&setTimeout(()=>{window.setupDragAndDrop()},100))})})}function _t(){return setTimeout(()=>{q(()=>import("./searchProducts-d0645cf9.js"),[]).then(s=>{s.setupSearch({inputId:"searchProducts",resultsId:"searchProductsResults",gridId:"productsGrid",categoria:"productos",excludeCarnes:!0})}),Va()},0),requestAnimationFrame(()=>{setTimeout(()=>{Tt("productsGrid","productsPagination","productos",!0,!1)},100)}),`
    <div class="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Nuestros Productos</h1>
        
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <!-- Add Product Button (admin only) -->
          <button 
            onclick="window.openAddProductModal()" 
            class="admin-only px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors hidden items-center justify-center space-x-2"
            title="Añadir producto"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            <span>Añadir</span>
          </button>

          <!-- Search Bar -->
          <div class="relative w-full sm:w-64">
            <input
              type="text"
              id="searchProducts"
              class="w-full px-4 py-2 pr-8 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Buscar productos..."
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <!-- Search Results Dropdown -->
            <div id="searchProductsResults" class="hidden absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>

      <!-- Filtros de Subcategoría -->
      <div class="mb-4 sm:mb-6 flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0">
        <button class="category-filter px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg bg-primary-600 text-white transition-colors whitespace-nowrap flex-shrink-0" data-category="Todos">
          Todos
        </button>
        <button class="category-filter px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap flex-shrink-0" data-category="Abarrotes">
          Abarrotes
        </button>
        <button class="category-filter px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap flex-shrink-0" data-category="Lácteos">
          Lácteos
        </button>
        <button class="category-filter px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap flex-shrink-0" data-category="Embutidos">
          Embutidos
        </button>
        <button class="category-filter px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors whitespace-nowrap flex-shrink-0" data-category="Condimentos">
          Condimentos
        </button>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6" id="productsGrid"></div>

      <!-- Pagination (ahora dinámica) -->
      <div id="productsPagination" class="flex justify-center space-x-2 mt-8"></div>

    </div>
  `}function Wa(){const s=document.querySelectorAll(".category-filter");s.forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-category");s.forEach(i=>{i.classList.remove("bg-primary-600","text-white"),i.classList.add("bg-gray-200","dark:bg-gray-700","text-gray-700","dark:text-gray-300")}),e.classList.remove("bg-gray-200","dark:bg-gray-700","text-gray-700","dark:text-gray-300"),e.classList.add("bg-primary-600","text-white");const r=window.userRole||"user";let o;t&&t!=="Todos"?o=T.from("productos").select(`
            *,
            producto_subcategorias!inner(subcategoria)
          `).gt("descuento",0).eq("producto_subcategorias.subcategoria",t).order("orden",{ascending:!0}):o=T.from("productos").select("*").gt("descuento",0).order("orden",{ascending:!0}),r!=="admin"&&(o=o.eq("activo",!0));const{data:n}=await o,a=document.getElementById("offersGrid");a&&n&&(a.innerHTML=n.map(i=>at({id:i.id,name:i.nombre,description:i.descripcion||"",image:i.imagen_url||"/images/placeholder.jpg",category:i.categoria,discount:i.descuento,activo:i.activo,precio:i.precio,showPrice:!0})).join(""),typeof window.updateAdminButtons=="function"&&window.updateAdminButtons(),typeof window.setupDragAndDrop=="function"&&setTimeout(()=>window.setupDragAndDrop(),100))})})}function Et(){return setTimeout(()=>{q(()=>import("./searchProducts-d0645cf9.js"),[]).then(s=>{s.setupSearch({inputId:"searchOffers",resultsId:"searchOffersResults",gridId:"offersGrid",onlyOffers:!0})}),Wa()},0),requestAnimationFrame(()=>{setTimeout(()=>{Tt("offersGrid","offersPagination",void 0,!1,!0)},100)}),`
    <div class="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
      
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Ofertas Especiales</h1>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <button 
            onclick="window.openAddProductModal()" 
            class="admin-only px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors hidden items-center justify-center space-x-2"
            title="Añadir producto"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            <span>Añadir</span>
          </button>

          <!-- Search bar -->
          <div class="relative w-full sm:w-64">
            <input
              type="text"
              id="searchOffers"
              class="w-full px-4 py-2 pr-8 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Buscar ofertas..."
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div id="searchOffersResults" class="hidden absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-96 overflow-y-auto"></div>
          </div>
        </div>
      </div>

      <!-- Banner -->
      <div class="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 rounded-lg p-6 mb-8 text-white">
        <h2 class="text-2xl font-bold mb-2">¡Grandes Descuentos!</h2>
        <p class="text-primary-100 dark:text-primary-200">
          Aprovecha nuestras ofertas especiales. Solo productos con descuento activo.
        </p>
      </div>

      <!-- Filtros -->
      <div class="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
        <button class="category-filter px-4 py-2 rounded-lg bg-primary-600 text-white" data-category="Todos">
          Todos
        </button>

        <!-- Carnes -->
        <button class="category-filter px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-category="Premium">Premium</button>
        <button class="category-filter px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-category="Res">Res</button>
        <button class="category-filter px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-category="Cerdo">Cerdo</button>
        <button class="category-filter px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-category="Pollo">Pollo</button>
        <button class="category-filter px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-category="Cortes Especiales">Cortes Especiales</button>

        <!-- Productos -->
        <button class="category-filter px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-category="Abarrotes">Abarrotes</button>
        <button class="category-filter px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-category="Lácteos">Lácteos</button>
        <button class="category-filter px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-category="Embutidos">Embutidos</button>
        <button class="category-filter px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-category="Condimentos">Condimentos</button>
      </div>

      <!-- Offers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="offersGrid"></div>

      <!-- Pagination -->
      <div id="offersPagination" class="flex justify-center space-x-2 mt-8"></div>

    </div>
  `}function Ga(){return`
    <div class="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 flex items-center justify-center p-4">
      <div class="max-w-md w-full">
        <!-- Logo y Título -->
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-white mb-2">Super Carnes García</h1>
          <p class="text-primary-100">La mejor calidad en carnes</p>
        </div>

        <!-- Tabs de Login/Register -->
        <div class="bg-white dark:bg-gray-800 rounded-t-lg shadow-xl">
          <div class="flex border-b border-gray-200 dark:border-gray-700">
            <button 
              id="loginTab" 
              class="flex-1 py-4 px-6 text-center font-semibold transition-colors border-b-2 border-primary-600 text-primary-600 dark:text-primary-400"
            >
              Iniciar Sesión
            </button>
            <button 
              id="registerTab" 
              class="flex-1 py-4 px-6 text-center font-semibold transition-colors border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              Crear Cuenta
            </button>
          </div>

          <!-- Login Form -->
          <div id="loginForm" class="p-8 bg-white dark:bg-gray-800">
            <form id="loginFormElement" class="space-y-6">
              <div>
                <label for="loginEmail" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  id="loginEmail" 
                  name="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="tu@email.com"
                >
              </div>

              <div>
                <label for="loginPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contraseña
                </label>
                <div class="relative">
                  <input 
                    type="password" 
                    id="loginPassword" 
                    name="password"
                    required
                    class="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="••••••••"
                  >
                  <button
                    type="button"
                    id="toggleLoginPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    <svg id="loginEyeOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <svg id="loginEyeClosed" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-primary-600 focus:ring-primary-500">
                  <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Recordarme</span>
                </label>
                <button 
                  type="button" 
                  id="forgotPasswordBtn"
                  class="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              <button 
                type="submit"
                class="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                </svg>
                <span>Iniciar Sesión</span>
              </button>

              <div id="loginError" class="hidden p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"></div>
            </form>

            <!-- Demo Credentials -->
            <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p class="text-xs font-semibold text-blue-900 mb-2">🔑 Credenciales de prueba:</p>
              <div class="text-xs text-blue-800 space-y-1">
                <p><strong>Admin:</strong> admin@supercarnes.com</p>
                <p><strong>Pass:</strong> Admin2025$uper</p>
              </div>
            </div>
          </div>

          <!-- Register Form -->
          <div id="registerForm" class="p-8 bg-white dark:bg-gray-800 hidden">
            <form id="registerFormElement" class="space-y-6">
              <div>
                <label for="registerName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <input 
                  type="text" 
                  id="registerName" 
                  name="fullName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Juan Pérez"
                >
              </div>

              <div>
                <label for="registerEmail" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  id="registerEmail" 
                  name="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="usuario@gmail.com"
                >
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Usa un email válido (ej: @gmail.com, @outlook.com)</p>
              </div>

              <div>
                <label for="registerPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contraseña
                </label>
                <div class="relative">
                  <input 
                    type="password" 
                    id="registerPassword" 
                    name="password"
                    required
                    minlength="6"
                    class="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Mínimo 6 caracteres"
                  >
                  <button
                    type="button"
                    id="toggleRegisterPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    <svg id="registerEyeOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <svg id="registerEyeClosed" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    </svg>
                  </button>
                </div>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Mínimo 6 caracteres</p>
              </div>

              <div>
                <label for="registerPasswordConfirm" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirmar Contraseña
                </label>
                <div class="relative">
                  <input 
                    type="password" 
                    id="registerPasswordConfirm" 
                    name="passwordConfirm"
                    required
                    minlength="6"
                    class="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Repite tu contraseña"
                  >
                  <button
                    type="button"
                    id="toggleRegisterPasswordConfirm"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    <svg id="registerConfirmEyeOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <svg id="registerConfirmEyeClosed" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    </svg>
                  </button>
                </div>
              </div>

              <label class="flex items-start">
                <input type="checkbox" required class="mt-1 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-primary-600 focus:ring-primary-500">
                <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  Acepto los términos y condiciones y la política de privacidad
                </span>
              </label>

              <button 
                type="submit"
                class="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                </svg>
                <span>Crear Cuenta</span>
              </button>

              <div id="registerError" class="hidden p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"></div>
              <div id="registerSuccess" class="hidden p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm"></div>
            </form>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8 text-primary-100 text-sm">
          <p>© 2025 Super Carnes García. Todos los derechos reservados.</p>
        </div>
      </div>

      <!-- Forgot Password Modal -->
      <div id="forgotPasswordModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center p-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Recuperar Contraseña</h3>
            <button id="closeForgotPassword" class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <form id="forgotPasswordForm" class="space-y-6">
            <div>
              <label for="forgotEmail" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input 
                type="email" 
                id="forgotEmail" 
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="tu@email.com"
              >
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Te enviaremos un enlace para restablecer tu contraseña
              </p>
            </div>

            <button 
              type="submit"
              class="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Enviar Enlace
            </button>

            <div id="forgotError" class="hidden p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"></div>
            <div id="forgotSuccess" class="hidden p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm"></div>
          </form>
        </div>
      </div>
    </div>
  `}function Ka(){const s=document.getElementById("loginTab"),e=document.getElementById("registerTab"),t=document.getElementById("loginForm"),r=document.getElementById("registerForm"),o=document.getElementById("loginFormElement"),n=document.getElementById("registerFormElement"),a=document.getElementById("forgotPasswordBtn"),i=document.getElementById("forgotPasswordModal"),l=document.getElementById("closeForgotPassword"),d=document.getElementById("forgotPasswordForm");if(!s||!e||!t||!r)return;const c=(u,p,g,w)=>{const y=document.getElementById(u),h=document.getElementById(p),x=document.getElementById(g),_=document.getElementById(w);y==null||y.addEventListener("click",()=>{const k=h.type==="password";h.type=k?"text":"password",x==null||x.classList.toggle("hidden"),_==null||_.classList.toggle("hidden")})};c("toggleLoginPassword","loginPassword","loginEyeOpen","loginEyeClosed"),c("toggleRegisterPassword","registerPassword","registerEyeOpen","registerEyeClosed"),c("toggleRegisterPasswordConfirm","registerPasswordConfirm","registerConfirmEyeOpen","registerConfirmEyeClosed"),s.addEventListener("click",()=>{s.classList.add("border-primary-600","text-primary-600"),s.classList.remove("border-transparent","text-gray-500"),e.classList.remove("border-primary-600","text-primary-600"),e.classList.add("border-transparent","text-gray-500"),t.classList.remove("hidden"),r.classList.add("hidden")}),e.addEventListener("click",()=>{e.classList.add("border-primary-600","text-primary-600"),e.classList.remove("border-transparent","text-gray-500"),s.classList.remove("border-primary-600","text-primary-600"),s.classList.add("border-transparent","text-gray-500"),r.classList.remove("hidden"),t.classList.add("hidden")}),o==null||o.addEventListener("submit",async u=>{u.preventDefault();const p=new FormData(o),g=p.get("email"),w=p.get("password"),y=document.getElementById("loginError");if(y){y.classList.add("hidden");try{const h=o.querySelector('button[type="submit"]');h.disabled=!0,h.innerHTML='<span class="animate-spin">⏳</span> Iniciando sesión...';const{data:x,error:_}=await T.auth.signInWithPassword({email:g,password:w});if(_)throw _;if(x.user){const{data:k}=await T.from("user_profiles").select("role").eq("id",x.user.id).single();console.log("✅ Login exitoso:",{email:g,role:k==null?void 0:k.role}),localStorage.setItem("force_role_refresh","true"),window.location.href=window.location.origin+window.location.pathname}}catch(h){console.error("❌ Error en login:",h),y.textContent=h.message==="Invalid login credentials"?"Email o contraseña incorrectos":h.message,y.classList.remove("hidden");const x=o.querySelector('button[type="submit"]');x.disabled=!1,x.innerHTML=`
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
        </svg>
        <span>Iniciar Sesión</span>
      `}}}),n==null||n.addEventListener("submit",async u=>{u.preventDefault();const p=new FormData(n),g=p.get("fullName"),w=p.get("email"),y=p.get("password"),h=p.get("passwordConfirm"),x=document.getElementById("registerError"),_=document.getElementById("registerSuccess");if(!(!x||!_)){if(x.classList.add("hidden"),_.classList.add("hidden"),y!==h){x.textContent="Las contraseñas no coinciden",x.classList.remove("hidden");return}try{const k=n.querySelector('button[type="submit"]');k.disabled=!0,k.innerHTML='<span class="animate-spin">⏳</span> Creando cuenta...';const{data:f,error:v}=await T.auth.signUp({email:w,password:y,options:{data:{full_name:g,role:"user"},emailRedirectTo:void 0}});if(v)throw v;f.user&&(console.log("✅ Usuario creado:",f.user.email),f.user.email_confirmed_at?_.textContent="✅ Cuenta creada exitosamente. Ya puedes iniciar sesión.":_.textContent="✅ Cuenta creada. Revisa tu email para confirmarla o contacta al administrador.",_.classList.remove("hidden"),n.reset(),setTimeout(()=>{s==null||s.click()},2e3)),k.disabled=!1,k.innerHTML=`
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
        </svg>
        <span>Crear Cuenta</span>
      `}catch(k){console.error("❌ Error en registro:",k),x.textContent=k.message==="User already registered"?"Este email ya está registrado":k.message,x.classList.remove("hidden");const f=n.querySelector('button[type="submit"]');f.disabled=!1,f.innerHTML=`
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
        </svg>
        <span>Crear Cuenta</span>
      `}}}),a==null||a.addEventListener("click",()=>{i==null||i.classList.remove("hidden")}),l==null||l.addEventListener("click",()=>{i==null||i.classList.add("hidden")}),i==null||i.addEventListener("click",u=>{u.target===i&&i.classList.add("hidden")}),d==null||d.addEventListener("submit",async u=>{u.preventDefault();const g=new FormData(d).get("email"),w=document.getElementById("forgotError"),y=document.getElementById("forgotSuccess");if(!(!w||!y)){w.classList.add("hidden"),y.classList.add("hidden");try{const h=d.querySelector('button[type="submit"]');h.disabled=!0,h.textContent="Enviando...";const{error:x}=await T.auth.resetPasswordForEmail(g);if(x)throw x;y.textContent="✅ Se ha enviado un enlace de recuperación a tu email",y.classList.remove("hidden"),d.reset(),h.disabled=!1,h.textContent="Enviar Enlace"}catch(h){console.error("❌ Error en recuperación:",h),w.textContent=h.message,w.classList.remove("hidden");const x=d.querySelector('button[type="submit"]');x.disabled=!1,x.textContent="Enviar Enlace"}}})}function Ja(){return`
    <!-- Login/Register Modal -->
    <div id="loginModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden items-center justify-center p-4">
      <div class="bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 scale-in">
        <!-- Header -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-50 to-white dark:from-gray-800 dark:to-gray-800">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white" id="loginModalTitle">
                Iniciar Sesión
              </h3>
            </div>
            <button id="closeLoginModal" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-all">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Alert Container -->
        <div id="authAlert" class="hidden mx-6 mt-4"></div>

        <!-- Body -->
        <div class="p-6">
          <!-- LOGIN FORM -->
          <form id="loginForm" class="space-y-5">
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                class="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 dark:bg-gray-700 dark:text-white transition-all"
                placeholder="tu@email.com"
                autocomplete="email"
              >
              <p id="emailError" class="mt-2 text-sm text-red-600 dark:text-red-400 font-medium hidden"></p>
            </div>

            <div>
              <label for="password" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Contraseña
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  class="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="••••••••"
                  autocomplete="current-password"
                >
                <button
                  type="button"
                  id="togglePassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <svg id="passwordIconShow" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg id="passwordIconHide" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
              <p id="passwordError" class="mt-2 text-sm text-red-600 dark:text-red-400 font-medium hidden"></p>
            </div>

            <div class="flex items-center justify-between pt-2">
              <div class="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 transition-colors cursor-pointer"
                >
                <label for="rememberMe" class="ml-2 block text-sm text-gray-700 dark:text-gray-300 cursor-pointer select-none">
                  Recordarme
                </label>
              </div>

              <button
                type="button"
                id="forgotPassword"
                class="text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              id="loginSubmit"
              class="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
            >
              <span id="loginBtnText">Iniciar Sesión</span>
            </button>

            <div class="text-center pt-2">
              <button
                type="button"
                id="switchToRegister"
                class="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                ¿No tienes cuenta? <span class="text-primary-600 dark:text-primary-400">Regístrate</span>
              </button>
            </div>
          </form>

          <!-- REGISTER FORM -->
          <form id="registerForm" class="space-y-4 hidden">
            <div>
              <label for="registerUsername" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="registerUsername"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                placeholder="juanperez"
                autocomplete="username"
              >
              <p id="usernameError" class="mt-1.5 text-sm text-red-600 dark:text-red-400 hidden"></p>
            </div>

            <div>
              <label for="registerEmail" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="registerEmail"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                placeholder="tu@email.com"
                autocomplete="email"
              >
              <p id="registerEmailError" class="mt-1.5 text-sm text-red-600 dark:text-red-400 hidden"></p>
            </div>

            <div>
              <label for="registerPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Contraseña
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="registerPassword"
                  class="w-full px-4 py-2.5 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="••••••••"
                  autocomplete="new-password"
                >
                <button
                  type="button"
                  id="toggleRegisterPassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg id="registerPasswordIconShow" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg id="registerPasswordIconHide" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
              <p id="registerPasswordError" class="mt-1.5 text-sm text-red-600 dark:text-red-400 hidden"></p>
            </div>

            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Confirmar Contraseña
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  class="w-full px-4 py-2.5 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="••••••••"
                  autocomplete="new-password"
                >
                <button
                  type="button"
                  id="toggleConfirmPassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg id="confirmPasswordIconShow" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg id="confirmPasswordIconHide" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
              <p id="confirmPasswordError" class="mt-1.5 text-sm text-red-600 dark:text-red-400 hidden"></p>
            </div>

            <button
              type="submit"
              id="registerSubmit"
              class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span id="registerBtnText">Crear Cuenta</span>
              <svg id="registerSpinner" class="hidden ml-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>

            <div class="text-center pt-2">
              <button
                type="button"
                id="switchToLogin"
                class="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                ¿Ya tienes cuenta? <span class="text-primary-600 dark:text-primary-400">Inicia sesión</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Forgot Password Modal -->
    <div id="forgotPasswordModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 items-center justify-center p-4">
      <div class="bg-white dark:bg-gray-800 w-full max-w-md rounded-lg shadow-xl overflow-hidden">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex justify-between items-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              Recuperar Contraseña
            </h3>
            <button id="closeForgotPasswordModal" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div id="forgotPasswordAlert" class="hidden mx-6 mt-4"></div>

        <div class="p-6">
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
          
          <form id="forgotPasswordForm" class="space-y-4">
            <div>
              <label for="forgotEmail" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="forgotEmail"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                placeholder="tu@email.com"
                autocomplete="email"
              >
              <p id="forgotEmailError" class="mt-1.5 text-sm text-red-600 dark:text-red-400 hidden"></p>
            </div>

            <button
              type="submit"
              id="forgotPasswordSubmit"
              class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span id="forgotBtnText">Enviar enlace</span>
              <svg id="forgotSpinner" class="hidden ml-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Reset Password Modal -->
    <div id="resetPasswordModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden items-center justify-center p-4">
      <div class="bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 scale-in">
        <!-- Header -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-50 to-white dark:from-gray-800 dark:to-gray-800">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                Nueva Contraseña
              </h3>
            </div>
            <button id="closeResetPasswordModal" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-all">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div id="resetPasswordAlert" class="hidden mx-6 mt-4"></div>

        <div class="p-6">
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            🔒 Ingresa tu nueva contraseña. Debe tener al menos 6 caracteres para mayor seguridad.
          </p>
          
          <form id="resetPasswordForm" class="space-y-5">
            <div>
              <label for="newPassword" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Nueva Contraseña
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="newPassword"
                  class="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="••••••••"
                  autocomplete="new-password"
                >
                <button
                  type="button"
                  id="toggleNewPassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <svg id="newPasswordIconShow" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg id="newPasswordIconHide" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
              <p id="newPasswordError" class="mt-2 text-sm text-red-600 dark:text-red-400 font-medium hidden"></p>
            </div>

            <div>
              <label for="confirmNewPassword" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Confirmar Nueva Contraseña
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="confirmNewPassword"
                  class="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="••••••••"
                  autocomplete="new-password"
                >
                <button
                  type="button"
                  id="toggleConfirmNewPassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <svg id="confirmNewPasswordIconShow" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg id="confirmNewPasswordIconHide" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
              <p id="confirmNewPasswordError" class="mt-2 text-sm text-red-600 dark:text-red-400 font-medium hidden"></p>
            </div>

            <button
              type="submit"
              id="resetPasswordSubmit"
              class="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            >
              <span id="resetBtnText">Cambiar Contraseña</span>
              <svg id="resetSpinner" class="hidden ml-2 h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>  `}function Ya(){return`
    <div id="addProductModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden items-center justify-center p-4 animate-fade-in">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700 scale-in">
        <!-- Header -->
        <div class="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-50 to-white dark:from-gray-800 dark:to-gray-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Añadir Producto</h3>
          </div>
          <button id="closeAddProduct" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Form -->
        <form id="addProductForm" class="p-6 space-y-6">
          <!-- Drag & Drop Image Area -->
          <div class="space-y-2">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              📸 Imagen del Producto
            </label>
            <div id="dropZone" class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/10 transition-all cursor-pointer bg-gray-50 dark:bg-gray-700/50 backdrop-blur-sm">
              <div id="dropZoneContent">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="mt-4">
                  <label for="imageInput" class="cursor-pointer">
                    <span class="text-primary-600 dark:text-primary-400 hover:text-primary-700">Selecciona un archivo</span>
                    <span class="text-gray-600 dark:text-gray-400"> o arrastra y suelta</span>
                  </label>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    PNG, JPG, WEBP hasta 5MB
                  </p>
                </div>
              </div>
              <!-- Preview Area (hidden by default) -->
              <div id="imagePreview" class="hidden">
                <img id="previewImage" src="" alt="Preview" class="mx-auto max-h-48 rounded-lg">
                <button type="button" id="removeImage" class="mt-2 text-sm text-red-600 hover:text-red-700">
                  Eliminar imagen
                </button>
              </div>
            </div>
            <input type="file" id="imageInput" name="image" accept="image/jpeg,image/jpg,image/png,image/webp" class="hidden">
          </div>

          <!-- Nombre -->
          <div>
            <label for="productName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nombre del Producto *
            </label>
            <input 
              type="text" 
              id="productName" 
              name="nombre"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Ej: Ribeye Premium"
            >
          </div>

          <!-- Descripción -->
          <div>
            <label for="productDescription" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Descripción
            </label>
            <textarea 
              id="productDescription" 
              name="descripcion"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Describe las características del producto..."
            ></textarea>
          </div>

          <!-- Categoría -->
          <div>
            <label for="productCategory" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Categoría *
            </label>
            <select 
              id="productCategory" 
              name="categoria"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Selecciona una categoría</option>
              <option value="carnes">Carnes</option>
              <option value="productos">Productos</option>
            </select>
          </div>

          <!-- Subcategoría -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subcategorías *
            </label>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">
              ✨ Puedes seleccionar múltiples subcategorías para este producto
            </p>
            
            <!-- Subcategorías de Carnes -->
            <div id="addSubcategoriaCarnes" class="space-y-2 mb-4 hidden">
              <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">🥩 Carnes</p>
              <div class="grid grid-cols-2 gap-2">
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Premium" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Premium</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Res" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Res</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Cerdo" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Cerdo</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Pollo" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Pollo</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Cortes Especiales" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Cortes Especiales</span>
                </label>
              </div>
            </div>

            <!-- Subcategorías de Productos -->
            <div id="addSubcategoriaProductos" class="space-y-2 hidden">
              <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">🛒 Productos</p>
              <div class="grid grid-cols-2 gap-2">
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Abarrotes" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Abarrotes</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Lácteos" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Lácteos</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Embutidos" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Embutidos</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Condimentos" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Condimentos</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Descuento -->
          <div>
            <label for="productDiscount" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Descuento (%)
            </label>
            <input 
              type="number" 
              id="productDiscount" 
              name="descuento"
              min="0"
              max="100"
              value="0"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            >
          </div>

          <!-- Precio -->
          <div>
            <label for="productPrice" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              💰 Precio ($)
            </label>
            <input
              type="number"
              id="productPrice"
              name="precio"
              min="0"
              step="0.01"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="0.00"
            >
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              💡 El precio se mostrará en la sección de Ofertas junto con el descuento
            </p>
            
            <!-- Vista previa de precio con descuento -->
            <div id="addPricePreview" class="hidden mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p class="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">📊 Vista previa:</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600 dark:text-gray-400">Precio original:</span>
                <span class="text-sm font-semibold text-gray-900 dark:text-white" id="addPreviewOriginalPrice">$0.00</span>
              </div>
              <div class="flex items-center justify-between mt-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">Con descuento (<span id="addPreviewDiscountPercent">0</span>%):</span>
                <span class="text-lg font-bold text-green-600 dark:text-green-400" id="addPreviewFinalPrice">$0.00</span>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button 
              type="button" 
              id="cancelAddProduct"
              class="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              class="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Guardar Producto</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `}function Qa(){return`
    <!-- Edit Product Modal -->
    <div id="editProductModal" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 items-center justify-center p-4 animate-fade-in">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700 scale-in">
        <!-- Header -->
        <div class="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Editar Producto</h2>
          </div>
          <button id="closeEditProduct" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form -->
        <form id="editProductForm" class="p-6 space-y-6">
          <!-- Hidden field for product ID -->
          <input type="hidden" id="editProductId" name="productId">

          <!-- ========== SECCIÓN DE IMÁGENES - HASTA ARRIBA ========== -->
          
          <!-- Cambiar Imagen - ICONO DE GALERÍA -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              📸 Cambiar Imagen
            </label>
            <div id="editDropZone" class="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
              <!-- Input file invisible pero funcional -->
              <input 
                type="file" 
                id="editImageInput" 
                accept="image/*" 
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              >
              
              <!-- Default Content - Icono de Galería -->
              <div id="editDropZoneContent" class="pointer-events-none">
                <svg class="mx-auto h-10 w-10 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Click aquí o arrastra una imagen
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  PNG, JPG, WEBP hasta 5MB
                </p>
              </div>

              <!-- Preview -->
              <div id="editImagePreview" class="hidden relative pointer-events-none">
                <img id="editPreviewImage" src="" alt="Preview" class="max-h-40 mx-auto rounded">
                <button type="button" id="editRemoveImage" class="pointer-events-auto absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Imagen Actual - JUSTO DEBAJO DEL ICONO -->
          <div id="editCurrentImageContainer" class="hidden">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              🖼️ Imagen Actual
            </label>
            <div class="relative w-40 h-40 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">
              <img id="editCurrentImage" src="" alt="Imagen actual" class="w-full h-full object-cover">
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
              💡 Si no seleccionas una nueva imagen, se mantendrá esta
            </p>
          </div>

          <!-- ========== FIN SECCIÓN DE IMÁGENES ========== -->

          <!-- Nombre -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nombre del Producto *
            </label>
            <input
              type="text"
              id="editNombre"
              name="nombre"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Ej: Corte Ribeye Premium"
            >
          </div>

          <!-- Descripción -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Descripción
            </label>
            <textarea
              id="editDescripcion"
              name="descripcion"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Describe el producto..."
            ></textarea>
          </div>

          <!-- Categoría -->
          <div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Categoría *
              </label>
              <select
                id="editCategoria"
                name="categoria"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Seleccionar...</option>
                <option value="carnes">Carnes</option>
                <option value="productos">Productos</option>
              </select>
            </div>
          </div>

          <!-- Subcategoría -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subcategorías *
            </label>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">
              ✨ Puedes seleccionar múltiples subcategorías para este producto
            </p>
            
            <!-- Subcategorías de Carnes -->
            <div id="editSubcategoriaCarnes" class="space-y-2 mb-4 hidden">
              <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">🥩 Carnes</p>
              <div class="grid grid-cols-2 gap-2">
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Premium" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Premium</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Res" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Res</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Cerdo" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Cerdo</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Pollo" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Pollo</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Cortes Especiales" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Cortes Especiales</span>
                </label>
              </div>
            </div>

            <!-- Subcategorías de Productos -->
            <div id="editSubcategoriaProductos" class="space-y-2 hidden">
              <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">🛒 Productos</p>
              <div class="grid grid-cols-2 gap-2">
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Abarrotes" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Abarrotes</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Lácteos" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Lácteos</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Embutidos" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Embutidos</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input type="checkbox" name="subcategorias" value="Condimentos" class="w-5 h-5 cursor-pointer accent-red-600">
                  <span class="text-sm text-gray-700 dark:text-gray-300">Condimentos</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Descuento % -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Descuento (%)
            </label>
            <input
              type="number"
              id="editDescuento"
              name="descuento"
              min="0"
              max="100"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="0"
            >
          </div>

          <!-- Precio -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              💰 Precio ($)
            </label>
            <input
              type="number"
              id="editPrecio"
              name="precio"
              min="0"
              step="0.01"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="0.00"
            >
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              💡 El precio se mostrará en la sección de Ofertas junto con el descuento
            </p>
            
            <!-- Vista previa de precio con descuento -->
            <div id="pricePreview" class="hidden mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p class="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">📊 Vista previa:</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600 dark:text-gray-400">Precio original:</span>
                <span class="text-sm font-semibold text-gray-900 dark:text-white" id="previewOriginalPrice">$0.00</span>
              </div>
              <div class="flex items-center justify-between mt-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">Con descuento (<span id="previewDiscountPercent">0</span>%):</span>
                <span class="text-lg font-bold text-green-600 dark:text-green-400" id="previewFinalPrice">$0.00</span>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="pt-6 border-t border-gray-200 dark:border-gray-700">
            <div class="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
              <!-- Botón Inactivar -->
              <button
                type="button"
                id="deleteProductBtn"
                class="w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 font-medium"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                <span>Inactivar</span>
              </button>

              <!-- Botones Cancelar y Guardar -->
              <div class="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  id="cancelEditProduct"
                  class="w-full sm:w-auto px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="w-full sm:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-md"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  `}async function Xa(s,e,t){const{data:r,error:o}=await T.auth.signUp({email:s,password:e,options:{data:{full_name:t||s.split("@")[0]}}});if(o)throw o;return r}async function Za(s,e){const{data:t,error:r}=await T.auth.signInWithPassword({email:s,password:e});if(r)throw r;return t}async function ei(s){const t=window.location.hostname.includes("github.io")?"https://202300015-coder.github.io/Super-Carnes-Garc-a/":`${window.location.origin}/Super-Carnes-Garc-a/`;console.log("📧 Enviando email de recuperación a:",s),console.log("🔗 Redirect URL:",t);const{error:r}=await T.auth.resetPasswordForEmail(s,{redirectTo:t});if(r)throw r}async function ti(s){const{data:e,error:t}=await T.auth.updateUser({password:s});if(t)throw t;return e}async function ri(){const{data:{user:s}}=await T.auth.getUser();return s}function Be(s){return s?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)?{valid:!0,error:""}:{valid:!1,error:"El correo no es válido"}:{valid:!1,error:"Este campo es obligatorio"}}function $e(s){return s?s.length<6?{valid:!1,error:"La contraseña es demasiado corta (mínimo 6 caracteres)"}:{valid:!0,error:""}:{valid:!1,error:"Este campo es obligatorio"}}function Hr(s){return s?s.length<3?{valid:!1,error:"El nombre de usuario es demasiado corto (mínimo 3 caracteres)"}:s.length>20?{valid:!1,error:"El nombre de usuario es demasiado largo (máximo 20 caracteres)"}:/^[a-zA-Z0-9_]+$/.test(s)?{valid:!0,error:""}:{valid:!1,error:"Solo se permiten letras, números y guiones bajos"}:{valid:!1,error:"Este campo es obligatorio"}}function mt(s,e){return e?s!==e?{valid:!1,error:"Las contraseñas no coinciden"}:{valid:!0,error:""}:{valid:!1,error:"Falta confirmar la contraseña"}}function J(s,e){const t=document.getElementById(`${s}Error`),r=document.getElementById(s);t&&r&&(t.textContent=e,t.classList.remove("hidden"),r.classList.add("border-red-500","focus:border-red-500","focus:ring-red-500"),r.classList.remove("border-gray-300","dark:border-gray-600"))}function X(s){const e=document.getElementById(`${s}Error`),t=document.getElementById(s);e&&t&&(e.classList.add("hidden"),e.textContent="",t.classList.remove("border-red-500","focus:border-red-500","focus:ring-red-500"),t.classList.add("border-gray-300","dark:border-gray-600"))}function Y(s,e,t){const r=document.getElementById(s);if(!r)return;const o={success:"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-500",error:"bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border-red-500",info:"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-500"},n={success:'<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>',error:'<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>',info:'<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>'};r.innerHTML=`
    <div class="flex items-center px-4 py-3 rounded-lg border-l-4 ${o[t]}">
      ${n[t]}
      <span class="text-sm font-medium">${e}</span>
    </div>
  `,r.classList.remove("hidden"),setTimeout(()=>{r.classList.add("hidden")},5e3)}function ne(){["authAlert","forgotPasswordAlert"].forEach(e=>{const t=document.getElementById(e);t&&(t.classList.add("hidden"),t.innerHTML="")})}const gr="loginAttempts",si=5,oi=3*60*1e3;function fr(){const s=localStorage.getItem(gr);return s?JSON.parse(s):{count:0,lockedUntil:null}}function ni(){const s=fr();s.count+=1,s.count>=si&&(s.lockedUntil=Date.now()+oi),localStorage.setItem(gr,JSON.stringify(s))}function ro(){localStorage.removeItem(gr)}function ai(){const s=fr();if(!s.lockedUntil)return{locked:!1};const e=Date.now();if(e<s.lockedUntil){const t=s.lockedUntil-e;return{locked:!0,remainingTime:Math.ceil(t/6e4)}}return ro(),{locked:!1}}const ii="rememberMe";function li(s){localStorage.setItem(ii,s.toString())}function Ye(s,e,t,r){const o=document.getElementById(s),n=document.getElementById(e),a=document.getElementById(t),i=document.getElementById(r);!o||!n||!a||!i||o.addEventListener("click",()=>{n.type==="password"?(n.type="text",a.classList.add("hidden"),i.classList.remove("hidden")):(n.type="password",a.classList.remove("hidden"),i.classList.add("hidden"))})}function ae(s,e,t,r){const o=document.getElementById(s),n=document.getElementById(e),a=document.getElementById(t);!o||!n||!a||(o.disabled=r,r?(n.classList.add("opacity-0"),a.classList.remove("hidden")):(n.classList.remove("opacity-0"),a.classList.add("hidden")))}function qt(s){const e=(s==null?void 0:s.code)||(s==null?void 0:s.message)||"";return e.includes("Invalid login credentials")||e.includes("invalid_credentials")?"Correo o contraseña incorrectos":e.includes("Email not confirmed")?"Tu cuenta no está verificada. Revisa tu correo.":e.includes("User already registered")?"El correo ya está registrado":e.includes("Email rate limit exceeded")?"Demasiados intentos. Intenta más tarde.":e.includes("User not found")?"El usuario no existe":e.includes("Password")?"La contraseña no cumple los requisitos":"Ocurrió un error. Intenta nuevamente."}function so(){var s,e,t,r,o,n,a,i,l,d,c,u,p,g,w,y,h,x,_,k;console.log("🔐 Configurando sistema de autenticación mejorado..."),(s=document.getElementById("loginButton"))==null||s.addEventListener("click",()=>{ne(),De();const f=document.getElementById("loginModal");f==null||f.classList.remove("hidden"),f==null||f.classList.add("flex")}),(e=document.getElementById("closeLoginModal"))==null||e.addEventListener("click",()=>{const f=document.getElementById("loginModal");f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex"),ne(),De()}),(t=document.getElementById("forgotPassword"))==null||t.addEventListener("click",()=>{const f=document.getElementById("loginModal"),v=document.getElementById("forgotPasswordModal");f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex"),ne(),v==null||v.classList.remove("hidden"),v==null||v.classList.add("flex");const m=document.getElementById("email"),b=document.getElementById("forgotEmail");m!=null&&m.value&&b&&(b.value=m.value)}),(r=document.getElementById("closeForgotPasswordModal"))==null||r.addEventListener("click",()=>{const f=document.getElementById("forgotPasswordModal");f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex"),ne()}),(o=document.getElementById("closeResetPasswordModal"))==null||o.addEventListener("click",()=>{const f=document.getElementById("resetPasswordModal");f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex"),ne()}),Ye("togglePassword","password","passwordIconShow","passwordIconHide"),Ye("toggleRegisterPassword","registerPassword","registerPasswordIconShow","registerPasswordIconHide"),Ye("toggleConfirmPassword","confirmPassword","confirmPasswordIconShow","confirmPasswordIconHide"),Ye("toggleNewPassword","newPassword","newPasswordIconShow","newPasswordIconHide"),Ye("toggleConfirmNewPassword","confirmNewPassword","confirmNewPasswordIconShow","confirmNewPasswordIconHide"),(n=document.getElementById("switchToRegister"))==null||n.addEventListener("click",()=>{var f,v;(f=document.getElementById("loginForm"))==null||f.classList.add("hidden"),(v=document.getElementById("registerForm"))==null||v.classList.remove("hidden"),document.getElementById("loginModalTitle").textContent="Crear Cuenta",ne(),De()}),(a=document.getElementById("switchToLogin"))==null||a.addEventListener("click",()=>{var f,v;(f=document.getElementById("registerForm"))==null||f.classList.add("hidden"),(v=document.getElementById("loginForm"))==null||v.classList.remove("hidden"),document.getElementById("loginModalTitle").textContent="Iniciar Sesión",ne(),De()}),(i=document.getElementById("email"))==null||i.addEventListener("blur",f=>{const v=f.target,m=Be(v.value);m.valid?X("email"):J("email",m.error)}),(l=document.getElementById("password"))==null||l.addEventListener("blur",f=>{const v=f.target,m=$e(v.value);m.valid?X("password"):J("password",m.error)}),(d=document.getElementById("registerUsername"))==null||d.addEventListener("blur",f=>{const v=f.target,m=Hr(v.value);m.valid?X("registerUsername"):J("registerUsername",m.error)}),(c=document.getElementById("registerEmail"))==null||c.addEventListener("blur",f=>{const v=f.target,m=Be(v.value);m.valid?X("registerEmail"):J("registerEmail",m.error)}),(u=document.getElementById("registerPassword"))==null||u.addEventListener("blur",f=>{const v=f.target,m=$e(v.value);m.valid?X("registerPassword"):J("registerPassword",m.error)}),(p=document.getElementById("confirmPassword"))==null||p.addEventListener("blur",f=>{const v=f.target,m=document.getElementById("registerPassword"),b=mt((m==null?void 0:m.value)||"",v.value);b.valid?X("confirmPassword"):J("confirmPassword",b.error)}),(g=document.getElementById("forgotEmail"))==null||g.addEventListener("blur",f=>{const v=f.target,m=Be(v.value);m.valid?X("forgotEmail"):J("forgotEmail",m.error)}),(w=document.getElementById("loginForm"))==null||w.addEventListener("submit",async f=>{f.preventDefault(),ne(),De();const v=ai();if(v.locked){Y("authAlert",`Demasiados intentos fallidos. Inténtalo de nuevo en ${v.remainingTime} minutos.`,"error");return}const m=document.getElementById("email"),b=document.getElementById("password"),E=document.getElementById("rememberMe"),I=m.value.trim(),B=b.value,$=E.checked,L=Be(I),R=$e(B);let V=!1;if(L.valid||(J("email",L.error),V=!0),R.valid||(J("password",R.error),V=!0),!V){ae("loginSubmit","loginBtnText","loginSpinner",!0);try{const M=await Za(I,B);console.log("✅ Usuario logueado:",M),ro(),li($),"Notification"in window&&Notification.permission==="default"&&await Vr();const F=document.getElementById("loginModal");F==null||F.classList.add("hidden"),F==null||F.classList.remove("flex"),Y("authAlert","¡Bienvenido! Iniciando sesión...","success"),setTimeout(()=>{window.location.reload()},500)}catch(M){console.error("❌ Error en login:",M),ni();const F=fr(),A=Math.max(0,5-F.count),N=qt(M);A>0&&A<3?Y("authAlert",`${N}. Te quedan ${A} intentos.`,"error"):Y("authAlert",N,"error"),ae("loginSubmit","loginBtnText","loginSpinner",!1)}}}),(y=document.getElementById("registerForm"))==null||y.addEventListener("submit",async f=>{f.preventDefault(),ne(),De();const v=document.getElementById("registerUsername"),m=document.getElementById("registerEmail"),b=document.getElementById("registerPassword"),E=document.getElementById("confirmPassword"),I=v.value.trim(),B=m.value.trim(),$=b.value,L=E.value,R=Hr(I),V=Be(B),M=$e($),F=mt($,L);let A=!1;if(R.valid||(J("registerUsername",R.error),A=!0),V.valid||(J("registerEmail",V.error),A=!0),M.valid||(J("registerPassword",M.error),A=!0),F.valid||(J("confirmPassword",F.error),A=!0),!A){ae("registerSubmit","registerBtnText","registerSpinner",!0);try{const N=await Xa(B,$,I);console.log("✅ Usuario registrado:",N),"Notification"in window&&Notification.permission==="default"&&await Vr(),Y("authAlert","¡Cuenta creada! Revisa tu correo para confirmar tu cuenta.","success"),v.value="",m.value="",b.value="",E.value="",ae("registerSubmit","registerBtnText","registerSpinner",!1),setTimeout(()=>{var W;(W=document.getElementById("switchToLogin"))==null||W.click()},3e3)}catch(N){console.error("❌ Error en registro:",N);const W=qt(N);Y("authAlert",W,"error"),ae("registerSubmit","registerBtnText","registerSpinner",!1)}}}),(h=document.getElementById("forgotPasswordForm"))==null||h.addEventListener("submit",async f=>{f.preventDefault(),ne(),X("forgotEmail");const v=document.getElementById("forgotEmail"),m=v.value.trim(),b=Be(m);if(!b.valid){J("forgotEmail",b.error);return}ae("forgotPasswordSubmit","forgotBtnText","forgotSpinner",!0);try{await ei(m),Y("forgotPasswordAlert","Si este correo existe, te enviamos un enlace para restablecer tu contraseña.","success"),v.value="",ae("forgotPasswordSubmit","forgotBtnText","forgotSpinner",!1),setTimeout(()=>{const E=document.getElementById("forgotPasswordModal"),I=document.getElementById("loginModal");E==null||E.classList.add("hidden"),E==null||E.classList.remove("flex"),I==null||I.classList.remove("hidden"),I==null||I.classList.add("flex")},4e3)}catch(E){console.error("❌ Error en recuperación:",E),Y("forgotPasswordAlert","Si este correo existe, te enviamos un enlace para restablecer tu contraseña.","info"),ae("forgotPasswordSubmit","forgotBtnText","forgotSpinner",!1)}}),ri().then(f=>{f&&console.log("👤 Usuario autenticado:",f.email)}),di(),(x=document.getElementById("resetPasswordForm"))==null||x.addEventListener("submit",async f=>{f.preventDefault(),ne(),X("newPassword"),X("confirmNewPassword");const v=document.getElementById("newPassword"),m=document.getElementById("confirmNewPassword"),b=v.value,E=m.value,I=$e(b),B=mt(b,E);let $=!1;if(I.valid||(J("newPassword",I.error),$=!0),B.valid||(J("confirmNewPassword",B.error),$=!0),!$){ae("resetPasswordSubmit","resetBtnText","resetSpinner",!0);try{console.log("🔐 Actualizando contraseña..."),await ti(b),console.log("✅ Contraseña actualizada exitosamente"),Y("resetPasswordAlert","¡Contraseña actualizada exitosamente!","success"),v.value="",m.value="",ae("resetPasswordSubmit","resetBtnText","resetSpinner",!1),setTimeout(()=>{const L=document.getElementById("resetPasswordModal");L==null||L.classList.add("hidden"),L==null||L.classList.remove("flex"),window.location.reload()},2e3)}catch(L){console.error("❌ Error actualizando contraseña:",L);let R=L.message||qt(L);(R.includes("session")||R.includes("Auth session missing"))&&(R="El enlace ha expirado o ya fue usado. Por favor, solicita un nuevo enlace de recuperación."),Y("resetPasswordAlert",R,"error"),ae("resetPasswordSubmit","resetBtnText","resetSpinner",!1)}}}),(_=document.getElementById("newPassword"))==null||_.addEventListener("blur",f=>{const v=f.target,m=$e(v.value);m.valid?X("newPassword"):J("newPassword",m.error)}),(k=document.getElementById("confirmNewPassword"))==null||k.addEventListener("blur",f=>{const v=f.target,m=document.getElementById("newPassword"),b=mt((m==null?void 0:m.value)||"",v.value);b.valid?X("confirmNewPassword"):J("confirmNewPassword",b.error)})}async function di(){var n,a;const s=window.location.hash,e=window.location.search,t=window.location.href;console.log("🔍 Verificando URL de recuperación..."),console.log("🔍 Hash:",s),console.log("🔍 Search:",e),console.log("🔍 Full URL:",t);let r=null;if(r=new URLSearchParams(e).get("code"),!r&&s){const i=s.startsWith("#")?s.substring(1):s,l=i.startsWith("?")?i.substring(1):i;r=new URLSearchParams(l).get("code")}if(console.log("🔍 Código detectado:",r?"SÍ ("+r.substring(0,10)+"...)":"NO"),r){console.log("🔑 Detectado código de recuperación de contraseña (PKCE)");try{console.log("🔄 Intercambiando código por sesión...");const{supabase:i}=await q(()=>Promise.resolve().then(()=>zr),void 0),{data:l,error:d}=await i.auth.exchangeCodeForSession(r);if(d){console.error("❌ Error intercambiando código:",d),Y("resetPasswordAlert","Error al validar el enlace. Por favor, solicita uno nuevo.","error"),window.history.replaceState({},document.title,window.location.pathname);return}if(!l.session){console.error("❌ No se obtuvo sesión del código"),Y("resetPasswordAlert","Error al validar el enlace. Por favor, solicita uno nuevo.","error"),window.history.replaceState({},document.title,window.location.pathname);return}console.log("✅ Sesión establecida correctamente:",l.session.user.email),console.log("✅ Sesión verificada y lista para cambiar contraseña");const c=document.getElementById("resetPasswordModal");c==null||c.classList.remove("hidden"),c==null||c.classList.add("flex"),window.history.replaceState({},document.title,window.location.pathname);return}catch(i){console.error("❌ Error procesando código de recuperación:",i),Y("resetPasswordAlert","Error al procesar el enlace. Por favor, inténtalo de nuevo.","error"),window.history.replaceState({},document.title,window.location.pathname);return}}if(s.includes("access_token")||s.includes("type=recovery")){console.log("🔑 Detectado enlace de recuperación de contraseña (método antiguo)");try{let l=s;s.includes("#access_token")?l=s.substring(s.indexOf("#access_token")+1):l=s.substring(1),console.log("🔍 Hash procesado:",l.substring(0,100)+"...");const d=new URLSearchParams(l),c=d.get("access_token"),u=d.get("refresh_token"),p=d.get("type");if(console.log("🔍 Type:",p),console.log("🔍 Access Token:",c?"SÍ (presente)":"NO"),p==="recovery"&&c){console.log("🔄 Estableciendo sesión de recuperación...");const{supabase:g}=await q(()=>Promise.resolve().then(()=>zr),void 0),{data:w,error:y}=await g.auth.setSession({access_token:c,refresh_token:u||""});if(y){console.error("❌ Error estableciendo sesión:",y),Y("resetPasswordAlert","Error al validar el enlace. Por favor, solicita uno nuevo.","error");return}console.log("✅ Sesión establecida correctamente:",(a=(n=w.session)==null?void 0:n.user)==null?void 0:a.email),await new Promise(x=>setTimeout(x,100));const{data:h}=await g.auth.getSession();if(!h.session){console.error("❌ No se pudo establecer la sesión"),Y("resetPasswordAlert","Error al validar el enlace. Por favor, solicita uno nuevo.","error");return}console.log("✅ Sesión verificada y lista para cambiar contraseña")}}catch(l){console.error("❌ Error procesando enlace de recuperación:",l),Y("resetPasswordAlert","Error al procesar el enlace. Por favor, inténtalo de nuevo.","error");return}const i=document.getElementById("resetPasswordModal");i==null||i.classList.remove("hidden"),i==null||i.classList.add("flex"),history.replaceState(null,"",window.location.pathname)}}function De(){["email","password","registerUsername","registerEmail","registerPassword","confirmPassword","forgotEmail","newPassword","confirmNewPassword"].forEach(e=>X(e))}async function Vr(){if(!("Notification"in window))return console.log("❌ Este navegador no soporta notificaciones"),!1;try{return await Notification.requestPermission()==="granted"?(console.log("✅ Permiso de notificaciones concedido"),new Notification("¡Bienvenido a Super Carnes García!",{body:"Ahora recibirás notificaciones sobre ofertas y nuevos productos.",icon:"/images/logo.png",badge:"/images/badge.png",tag:"welcome",requireInteraction:!1}),!0):(console.log("⚠️ Permiso de notificaciones denegado"),!1)}catch(s){return console.error("❌ Error solicitando permiso de notificaciones:",s),!1}}function ci(s,e,t){"Notification"in window&&Notification.permission==="granted"?new Notification(s,{body:e,icon:"/images/logo.png",badge:"/images/badge.png",tag:t||"promo",requireInteraction:!1}):console.log("⚠️ No se pueden enviar notificaciones (permiso no concedido)")}window.sendNotification=ci;let Me=null,Wr=!1;function oo(){if(Wr){console.log("⚠️ setupAddProductModal ya está inicializado, saltando...");return}const s=document.getElementById("addProductModal"),e=document.getElementById("addProductForm"),t=document.getElementById("closeAddProduct"),r=document.getElementById("cancelAddProduct"),o=document.getElementById("dropZone"),n=document.getElementById("imageInput"),a=document.getElementById("dropZoneContent"),i=document.getElementById("imagePreview"),l=document.getElementById("previewImage"),d=document.getElementById("removeImage");if(!s||!e||!o||!n)return;Wr=!0,console.log("✅ setupAddProductModal inicializado");const c=m=>{const b=document.getElementById("addSubcategoriaCarnes"),E=document.getElementById("addSubcategoriaProductos");m==="carnes"?(b==null||b.classList.remove("hidden"),E==null||E.classList.add("hidden"),E==null||E.querySelectorAll('input[type="checkbox"]').forEach(I=>I.checked=!1)):m==="productos"?(b==null||b.classList.add("hidden"),E==null||E.classList.remove("hidden"),b==null||b.querySelectorAll('input[type="checkbox"]').forEach(I=>I.checked=!1)):(b==null||b.classList.add("hidden"),E==null||E.classList.add("hidden"))},u=document.getElementById("productCategory");u==null||u.addEventListener("change",m=>{const b=m.target.value;c(b)}),window.openAddProductModal=()=>{s==null||s.classList.remove("hidden"),s==null||s.classList.add("flex")};const p=()=>{s==null||s.classList.add("hidden"),s==null||s.classList.remove("flex"),e==null||e.reset(),Me=null,a==null||a.classList.remove("hidden"),i==null||i.classList.add("hidden")};t==null||t.addEventListener("click",p),r==null||r.addEventListener("click",p),s==null||s.addEventListener("click",m=>{m.target===s&&p()}),o.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation();const b=m.target;b.closest("#removeImage")||b.closest("#imagePreview")||n.click()}),o.addEventListener("dragover",m=>{m.preventDefault(),m.stopPropagation(),o.classList.add("border-primary-500","bg-primary-50","dark:bg-primary-900")}),o.addEventListener("dragleave",m=>{m.preventDefault(),m.stopPropagation(),o.classList.remove("border-primary-500","bg-primary-50","dark:bg-primary-900")}),o.addEventListener("drop",m=>{var E;m.preventDefault(),m.stopPropagation(),o.classList.remove("border-primary-500","bg-primary-50","dark:bg-primary-900");const b=(E=m.dataTransfer)==null?void 0:E.files;b&&b[0]&&g(b[0])}),n.addEventListener("change",m=>{m.stopPropagation();const b=m.target.files;b&&b[0]&&g(b[0])});function g(m){if(!["image/jpeg","image/jpg","image/png","image/webp"].includes(m.type)){alert("Por favor selecciona una imagen válida (JPG, PNG o WEBP)");return}if(m.size>5*1024*1024){alert("La imagen no debe superar 5MB");return}Me=m;const E=new FileReader;E.onload=I=>{var B;l.src=(B=I.target)==null?void 0:B.result,a==null||a.classList.add("hidden"),i==null||i.classList.remove("hidden")},E.readAsDataURL(m)}d==null||d.addEventListener("click",m=>{m.stopPropagation(),Me=null,a==null||a.classList.remove("hidden"),i==null||i.classList.add("hidden"),n.value=""});const w=document.getElementById("productPrice"),y=document.getElementById("productDiscount"),h=document.getElementById("addPricePreview"),x=document.getElementById("addPreviewOriginalPrice"),_=document.getElementById("addPreviewDiscountPercent"),k=document.getElementById("addPreviewFinalPrice");function f(){const m=parseFloat((w==null?void 0:w.value)||"0"),b=parseFloat((y==null?void 0:y.value)||"0");if(m>0&&b>0){const E=m-m*b/100;x&&(x.textContent=`$${m.toFixed(2)}`),_&&(_.textContent=b.toString()),k&&(k.textContent=`$${E.toFixed(2)}`),h==null||h.classList.remove("hidden")}else h==null||h.classList.add("hidden")}w==null||w.addEventListener("input",f),y==null||y.addEventListener("input",f);let v=!1;e.addEventListener("submit",async m=>{var W;if(m.preventDefault(),v){console.log("⚠️ Ya hay un envío en proceso, ignorando...");return}const b=new FormData(e),E=b.get("nombre"),I=b.get("descripcion"),B=b.get("categoria"),$=parseInt(b.get("descuento"))||0,L=parseFloat(b.get("precio"))||null,R=[],V=document.getElementById("addSubcategoriaCarnes"),M=document.getElementById("addSubcategoriaProductos");let F=null;if(V&&!V.classList.contains("hidden")?F=V:M&&!M.classList.contains("hidden")&&(F=M),F&&F.querySelectorAll('input[name="subcategorias"]:checked').forEach(j=>{R.includes(j.value)||R.push(j.value)}),console.log("🎯 Subcategorías seleccionadas (sin duplicados):",R),!E||!B){alert("Por favor completa los campos obligatorios");return}if(R.length===0){alert("⚠️ Debes seleccionar al menos una subcategoría");return}const A=e.querySelector('button[type="submit"]'),N=A.innerHTML;try{v=!0,A.disabled=!0,A.innerHTML='<span class="animate-spin">⏳</span> Guardando...';let j="";if(Me){const oe=Me.name.split(".").pop(),we=`${Date.now()}-${Math.random().toString(36).substring(7)}.${oe}`,Je=`${B}/${we}`;console.log("📤 Subiendo imagen:",Je);const{error:Ct,data:io}=await T.storage.from("productos-imagenes").upload(Je,Me,{cacheControl:"3600",upsert:!1});if(Ct)throw console.error("❌ Error subiendo imagen:",Ct),Ct;console.log("✅ Imagen subida:",io);const{data:lo}=T.storage.from("productos-imagenes").getPublicUrl(Je);j=lo.publicUrl,console.log("🔗 URL pública:",j)}const{data:re}=await T.from("productos").select("orden").eq("categoria",B).order("orden",{ascending:!1}).limit(1),he=(re&&((W=re[0])==null?void 0:W.orden)||0)+1,{error:Ce,data:K}=await T.from("productos").insert({nombre:E,descripcion:I,imagen_url:j,categoria:B,descuento:$,precio:L,orden:he,activo:!0}).select().single();if(Ce)throw Ce;if(K&&R.length>0){const oe=R.map(Je=>({producto_id:K.id,subcategoria:Je})),{error:we}=await T.from("producto_subcategorias").insert(oe);if(we)throw console.error("❌ Error insertando subcategorías:",we),we;console.log("✅ Subcategorías insertadas:",R)}alert("✅ Producto añadido exitosamente"),A.disabled=!1,A.innerHTML=N,v=!1,p();const se=document.getElementById("meatsGrid"),be=document.getElementById("productsGrid"),Ke=document.getElementById("offersGrid");se&&q(()=>Promise.resolve().then(()=>ce),void 0).then(oe=>{oe.setupPagination("meatsGrid","meatsPagination","carnes",!1,!1)}),be&&q(()=>Promise.resolve().then(()=>ce),void 0).then(oe=>{oe.setupPagination("productsGrid","productsPagination","productos",!0,!1)}),Ke&&q(()=>Promise.resolve().then(()=>ce),void 0).then(oe=>{oe.setupPagination("offersGrid","offersPagination",void 0,!1,!0)})}catch(j){console.error("❌ Error adding product:",j),console.error("❌ Error details:",{message:j==null?void 0:j.message,code:j==null?void 0:j.code,details:j==null?void 0:j.details,hint:j==null?void 0:j.hint});let re="❌ Error al añadir el producto.";(j==null?void 0:j.code)==="PGRST301"?re+=`

No tienes permisos para crear productos.`:(j==null?void 0:j.code)==="23505"?re+=`

Este producto ya existe (duplicado).`:j!=null&&j.message&&(re+=`

`+j.message),alert(re),v=!1;const he=e.querySelector('button[type="submit"]');he.disabled=!1,he.innerHTML=N}})}let Ne=null,ue=null,Gr=!1;function no(){if(Gr){console.log("⚠️ setupEditProductModal ya está inicializado, saltando...");return}const s=document.getElementById("editProductModal"),e=document.getElementById("editProductForm"),t=document.getElementById("closeEditProduct"),r=document.getElementById("cancelEditProduct"),o=document.getElementById("deleteProductBtn"),n=document.getElementById("editDropZone"),a=document.getElementById("editImageInput"),i=document.getElementById("editDropZoneContent"),l=document.getElementById("editImagePreview"),d=document.getElementById("editPreviewImage"),c=document.getElementById("editRemoveImage");if(console.log("🔍 Elementos encontrados:",{modal:!!s,form:!!e,dropZone:!!n,imageInput:!!a,dropZoneContent:!!i}),!s||!e||!n||!a){console.error("❌ Elementos NO encontrados, abortando setup");return}Gr=!0,console.log("✅ setupEditProductModal inicializado");const u=f=>{const v=document.getElementById("editSubcategoriaCarnes"),m=document.getElementById("editSubcategoriaProductos");f==="carnes"?(v==null||v.classList.remove("hidden"),m==null||m.classList.add("hidden"),m==null||m.querySelectorAll('input[type="checkbox"]').forEach(b=>b.checked=!1)):f==="productos"?(v==null||v.classList.add("hidden"),m==null||m.classList.remove("hidden"),v==null||v.querySelectorAll('input[type="checkbox"]').forEach(b=>b.checked=!1)):(v==null||v.classList.add("hidden"),m==null||m.classList.add("hidden"))},p=document.getElementById("editCategoria");p==null||p.addEventListener("change",f=>{const v=f.target.value;u(v)});const g=()=>{const f=document.getElementById("editPrecio"),v=document.getElementById("editDescuento"),m=document.getElementById("pricePreview"),b=document.getElementById("previewOriginalPrice"),E=document.getElementById("previewFinalPrice"),I=document.getElementById("previewDiscountPercent");if(!f||!v||!m)return;const B=parseFloat(f.value)||0,$=parseFloat(v.value)||0;if(B>0&&$>0){const L=B*(1-$/100);b&&(b.textContent=`$${B.toFixed(2)}`),E&&(E.textContent=`$${L.toFixed(2)}`),I&&(I.textContent=$.toString()),m.classList.remove("hidden")}else m.classList.add("hidden")},w=document.getElementById("editPrecio"),y=document.getElementById("editDescuento");w==null||w.addEventListener("input",g),y==null||y.addEventListener("input",g),window.openEditProductModal=async f=>{ue=f,await h(f),s==null||s.classList.remove("hidden"),s==null||s.classList.add("flex")};async function h(f){var v,m;try{const{data:b,error:E}=await T.from("productos").select("*").eq("id",f).single();if(E)throw E;if(b){document.getElementById("editProductId").value=b.id.toString(),document.getElementById("editNombre").value=b.nombre||"",document.getElementById("editDescripcion").value=b.descripcion||"",document.getElementById("editCategoria").value=b.categoria||"",document.getElementById("editDescuento").value=((v=b.descuento)==null?void 0:v.toString())||"",document.getElementById("editPrecio").value=((m=b.precio)==null?void 0:m.toString())||"",console.log("🔍 Cargando subcategorías para producto ID:",f);const{data:I,error:B}=await T.from("producto_subcategorias").select("subcategoria").eq("producto_id",f);B&&(console.error("⚠️ Error cargando subcategorías:",B),console.error("⚠️ Error completo:",JSON.stringify(B,null,2))),console.log("📦 Respuesta cruda de Supabase:",I),console.log("📊 Cantidad de subcategorías recibidas:",(I==null?void 0:I.length)||0);const $=(I==null?void 0:I.map(A=>A.subcategoria))||[];console.log("📋 Subcategorías cargadas:",$);const L=document.getElementById("editSubcategoriaCarnes"),R=document.getElementById("editSubcategoriaProductos");let V="";b.categoria==="carnes"?(L==null||L.classList.remove("hidden"),R==null||R.classList.add("hidden"),V="editSubcategoriaCarnes"):b.categoria==="productos"?(L==null||L.classList.add("hidden"),R==null||R.classList.remove("hidden"),V="editSubcategoriaProductos"):(L==null||L.classList.add("hidden"),R==null||R.classList.add("hidden")),requestAnimationFrame(()=>{const A=document.getElementById(V);A&&(A.querySelectorAll('input[name="subcategorias"]').forEach(N=>{N.checked=!1,N.removeAttribute("checked")}),$.forEach(N=>{const W=A.querySelector(`input[name="subcategorias"][value="${N}"]`);W?(W.checked=!0,W.setAttribute("checked","checked"),W.dispatchEvent(new Event("change",{bubbles:!1})),console.log(`✅ Marcado checkbox: ${N}`)):console.warn(`⚠️ No se encontró checkbox para: ${N}`)}))}),g();const M=document.getElementById("editCurrentImageContainer"),F=document.getElementById("editCurrentImage");b.imagen_url?(F.src=b.imagen_url,M==null||M.classList.remove("hidden")):M==null||M.classList.add("hidden")}}catch(b){console.error("Error loading product:",b),alert("❌ Error al cargar los datos del producto")}}const x=()=>{var f,v,m;s==null||s.classList.add("hidden"),s==null||s.classList.remove("flex"),e==null||e.reset(),Ne=null,ue=null,i==null||i.classList.remove("hidden"),l==null||l.classList.add("hidden"),(f=document.getElementById("editCurrentImageContainer"))==null||f.classList.add("hidden"),document.querySelectorAll('input[name="subcategorias"]').forEach(b=>{b.checked=!1}),(v=document.getElementById("editSubcategoriaCarnes"))==null||v.classList.add("hidden"),(m=document.getElementById("editSubcategoriaProductos"))==null||m.classList.add("hidden")};t==null||t.addEventListener("click",x),r==null||r.addEventListener("click",x),s==null||s.addEventListener("click",f=>{f.target===s&&x()}),n.addEventListener("dragover",f=>{f.preventDefault(),f.stopPropagation(),n.classList.add("border-primary-500","bg-primary-50","dark:bg-primary-900")}),n.addEventListener("dragleave",f=>{f.preventDefault(),f.stopPropagation(),n.classList.remove("border-primary-500","bg-primary-50","dark:bg-primary-900")}),n.addEventListener("drop",f=>{var m;f.preventDefault(),f.stopPropagation(),n.classList.remove("border-primary-500","bg-primary-50","dark:bg-primary-900");const v=(m=f.dataTransfer)==null?void 0:m.files;v&&v[0]&&_(v[0])}),a.addEventListener("change",f=>{console.log("📁 Archivo seleccionado desde input"),f.stopPropagation();const v=f.target.files;v&&v[0]&&(console.log("📄 Archivo:",v[0].name,v[0].type,v[0].size),_(v[0]))});function _(f){if(console.log("🔍 Validando archivo:",f.name),!["image/jpeg","image/jpg","image/png","image/webp"].includes(f.type)){console.log("❌ Tipo de archivo inválido:",f.type),alert("Por favor selecciona una imagen válida (JPG, PNG o WEBP)");return}if(f.size>5*1024*1024){console.log("❌ Archivo muy grande:",f.size),alert("La imagen no debe superar 5MB");return}console.log("✅ Archivo válido, guardando..."),Ne=f;const m=new FileReader;m.onload=b=>{var E;console.log("🖼️ Mostrando preview de imagen"),d.src=(E=b.target)==null?void 0:E.result,i==null||i.classList.add("hidden"),l==null||l.classList.remove("hidden")},m.readAsDataURL(f)}c==null||c.addEventListener("click",f=>{f.stopPropagation(),Ne=null,i==null||i.classList.remove("hidden"),l==null||l.classList.add("hidden"),a.value=""}),o==null||o.addEventListener("click",async()=>{var v,m;if(!(!ue||!confirm(`¿Estás seguro de que deseas INACTIVAR este producto?

El producto quedará oculto para usuarios normales pero seguirá visible para administradores con efecto fantasma.`)))try{const{data:{session:b}}=await T.auth.getSession();if(console.log("🔑 Sesión activa al eliminar:",b?"✅ SÍ":"❌ NO"),console.log("📧 Usuario:",(v=b==null?void 0:b.user)==null?void 0:v.email),console.log("🆔 User ID:",(m=b==null?void 0:b.user)==null?void 0:m.id),!b){alert("❌ Error: No hay sesión activa. Por favor, vuelve a iniciar sesión.");return}const{error:E,data:I}=await T.from("productos").update({activo:!1}).eq("id",ue).select();if(console.log("📊 Respuesta UPDATE:",{data:I,error:E}),E)throw E;alert("✅ Producto inactivado correctamente"),x(),Kr()}catch(b){console.error("❌ Error deleting product:",b),alert("❌ Error al inactivar el producto")}});let k=!1;e.addEventListener("submit",async f=>{if(f.preventDefault(),k){console.log("⚠️ Ya hay un envío en proceso, ignorando...");return}if(!ue){alert("Error: No se encontró el ID del producto");return}const v=new FormData(e),m=v.get("nombre"),b=v.get("descripcion"),E=v.get("categoria"),I=parseInt(v.get("descuento"))||0,B=parseFloat(v.get("precio"))||0,$=[],L=document.getElementById("editSubcategoriaCarnes"),R=document.getElementById("editSubcategoriaProductos");let V=null;if(L&&!L.classList.contains("hidden")?V=L:R&&!R.classList.contains("hidden")&&(V=R),V&&V.querySelectorAll('input[name="subcategorias"]:checked').forEach(A=>{$.includes(A.value)||$.push(A.value)}),console.log("🎯 Subcategorías seleccionadas (sin duplicados):",$),!m||!E){alert("Por favor completa los campos obligatorios");return}if($.length===0){alert("⚠️ Debes seleccionar al menos una subcategoría");return}const M=e.querySelector('button[type="submit"]'),F=M.innerHTML;try{k=!0,M.disabled=!0,M.innerHTML='<span class="animate-spin">⏳</span> Guardando...';const A={nombre:m,descripcion:b,categoria:E,descuento:I,precio:B};if(Ne){const K=Ne.name.split(".").pop(),se=`${Date.now()}-${Math.random().toString(36).substring(7)}.${K}`,be=`${E}/${se}`;console.log("📤 Subiendo nueva imagen:",be);const{error:Ke,data:oe}=await T.storage.from("productos-imagenes").upload(be,Ne,{cacheControl:"3600",upsert:!1});if(Ke)throw console.error("❌ Error subiendo imagen:",Ke),Ke;console.log("✅ Nueva imagen subida:",oe);const{data:we}=T.storage.from("productos-imagenes").getPublicUrl(be);A.imagen_url=we.publicUrl,console.log("🔗 Nueva URL pública:",A.imagen_url)}console.log("📝 Datos a actualizar:",A);const{error:N}=await T.from("productos").update(A).eq("id",ue);if(N)throw N;console.log("🔄 Actualizando subcategorías..."),console.log("📝 Subcategorías seleccionadas:",$);const{data:W}=await T.from("producto_subcategorias").select("subcategoria").eq("producto_id",ue),j=(W==null?void 0:W.map(K=>K.subcategoria))||[];console.log("📋 Subcategorías actuales en BD:",j);const re=j.filter(K=>!$.includes(K)),he=$.filter(K=>!j.includes(K));if(console.log("🗑️ A eliminar:",re),console.log("➕ A agregar:",he),re.length>0)for(const K of re){const{error:se}=await T.from("producto_subcategorias").delete().eq("producto_id",ue).eq("subcategoria",K);if(se)throw console.error(`❌ Error eliminando ${K}:`,se),se;console.log(`✅ Eliminado: ${K}`)}if(he.length>0){const K=he.map(be=>({producto_id:ue,subcategoria:be})),{error:se}=await T.from("producto_subcategorias").insert(K);if(se)throw console.error("❌ Error insertando nuevas subcategorías:",se),se;console.log("✅ Agregadas:",he)}const{data:Ce}=await T.from("producto_subcategorias").select("subcategoria").eq("producto_id",ue);console.log("🔍 Verificación después de guardar:",Ce==null?void 0:Ce.map(K=>K.subcategoria)),console.log("✅ Subcategorías actualizadas correctamente"),alert("✅ Producto actualizado exitosamente"),M.disabled=!1,M.innerHTML=F,k=!1,x(),Kr()}catch(A){console.error("❌ Error updating product:",A),console.error("❌ Error details:",{message:A.message,code:A.code,details:A.details,hint:A.hint});let N="❌ Error al actualizar el producto.";A.code==="PGRST301"?N+=`

No tienes permisos para actualizar este producto.`:A.message&&(N+=`

`+A.message),alert(N),k=!1;const W=e.querySelector('button[type="submit"]');W.disabled=!1,W.innerHTML=F}})}function Kr(){const s=document.getElementById("meatsGrid"),e=document.getElementById("productsGrid"),t=document.getElementById("offersGrid");s&&q(()=>Promise.resolve().then(()=>ce),void 0).then(r=>{r.setupPagination("meatsGrid","meatsPagination","carnes",!1,!1)}),e&&q(()=>Promise.resolve().then(()=>ce),void 0).then(r=>{r.setupPagination("productsGrid","productsPagination","productos",!0,!1)}),t&&q(()=>Promise.resolve().then(()=>ce),void 0).then(r=>{r.setupPagination("offersGrid","offersPagination",void 0,!1,!0)})}function ui(){return`
    <footer class="mt-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 class="text-xl font-extrabold text-gray-900 dark:text-white">
              Super Carnes García
            </h3>
            <p class="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
              Calidad, frescura y atención todos los días.
            </p>
          </div>

          <div>
            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📍 Ubicación</h4>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Zaragoza 201<br>
              88440 Ciudad Camargo, Tamaulipas<br>
              México
            </p>
          </div>

          <div>
            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🕒 Horario</h4>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              7:00 a 22:00 horas<br>
              Todos los días
            </p>

            <a href="#" data-page="contact"
              class="nav-link inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 rounded-xl font-bold shadow hover:shadow-lg transition-all active:scale-95">
              Contacto
            </a>
          </div>
        </div>

        <div class="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-500 dark:text-gray-500">
            © 2025-2026 Super Carnes García. Todos los derechos reservados.
          </p>
          <div class="flex items-center gap-4 text-sm">
            <a href="#" data-page="meats" class="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Cortes</a>
            <a href="#" data-page="products" class="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Productos</a>
            <a href="#" data-page="offers" class="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Ofertas</a>
          </div>
        </div>
      </div>
    </footer>
  `}function hi(){return`
    <section class="mb-12">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
          Contáctanos
        </h1>
        <p class="text-gray-600 dark:text-gray-300 text-center mb-10">
          Envíanos un mensaje y con gusto te respondemos.
        </p>

        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <form id="contactForm" class="space-y-5">
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">Nombre</label>
              <input name="name" required
                class="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Tu nombre" />
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">Correo</label>
              <input name="email" type="email" required
                class="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="tu@email.com" />
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">Mensaje</label>
              <textarea name="message" rows="5" required
                class="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="¿En qué te ayudamos?"></textarea>
            </div>

            <!-- Correo destino (placeholder) -->
            <p class="text-xs text-gray-500 dark:text-gray-400">
              * El mensaje se enviará a: <span class="font-semibold">[correo por definir]</span>
            </p>

            <button type="submit"
              class="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95">
              Enviar mensaje
            </button>

            <p id="contactStatus" class="text-sm text-center"></p>
          </form>
        </div>

        <div class="mt-8 text-center text-gray-600 dark:text-gray-300">
          <p class="font-bold">📍 Zaragoza 201, 88440 Ciudad Camargo, Tamaulipas, México</p>
          <p class="mt-1">🕒 7:00 a 22:00 horas (Todos los días)</p>
        </div>
      </div>
      <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
  Al enviar el formulario se abrirá tu aplicación de correo para completar el envío.
</p>

    </section>
  `}const gi=localStorage.getItem("darkMode")==="true";gi&&document.documentElement.classList.add("dark");let H=null,pe=!1,O=localStorage.getItem("currentPage")||"home";function sr(){const s=document.querySelectorAll(".admin-only");console.log("🔍 updateAdminButtons - Elementos encontrados:",s.length,"Role:",H),H==="admin"?s.forEach(e=>{e.style.display="flex"}):s.forEach(e=>{e.style.display="none"})}async function Xe(s,e){try{console.log("🔍 Actualizando orden:",s,"?",e);const{data:t,error:r}=await T.from("productos").update({orden:e}).eq("id",s).select();if(r)throw console.error("? Error en UPDATE:",r),r;return console.log("✅ Orden actualizado exitosamente:",t),!0}catch(t){return console.error("? Error actualizando orden:",t),!1}}function fi(){if(H!=="admin"){console.log("🔍 Drag & drop solo disponible para admin");return}console.log("🔍 Configurando drag & drop para admin");const s=document.querySelectorAll(".product-card");let e=null,t=null;const r=[],o=()=>{if(n(),!document.querySelector(".container"))return;const u=document.createElement("div");u.id="leftPageStripe",u.className="fixed left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-red-600 to-transparent opacity-70 z-40 pointer-events-auto",u.style.transition="opacity 0.3s ease";const p=document.createElement("div");p.id="pageNavLeft",p.className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 text-white animate-pulse pointer-events-none drop-shadow-lg",p.innerHTML=`
      <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
      </svg>
    `;const g=document.createElement("div");g.id="rightPageStripe",g.className="fixed right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-red-600 to-transparent opacity-70 z-40 pointer-events-auto",g.style.transition="opacity 0.3s ease";const w=document.createElement("div");w.id="pageNavRight",w.className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 text-white animate-pulse pointer-events-none drop-shadow-lg",w.innerHTML=`
      <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/>
      </svg>
    `,u.addEventListener("dragenter",y=>{y.preventDefault(),u.style.opacity="1",p.classList.add("scale-110")}),u.addEventListener("dragover",y=>{y.preventDefault()}),u.addEventListener("dragleave",y=>{const h=u.getBoundingClientRect();y.clientX>h.right&&(u.style.opacity="0.7",p.classList.remove("scale-110"))}),u.addEventListener("drop",async y=>{y.preventDefault(),u.style.opacity="0.7",p.classList.remove("scale-110"),await a()}),g.addEventListener("dragenter",y=>{y.preventDefault(),g.style.opacity="1",w.classList.add("scale-110")}),g.addEventListener("dragover",y=>{y.preventDefault()}),g.addEventListener("dragleave",y=>{const h=g.getBoundingClientRect();y.clientX<h.left&&(g.style.opacity="0.7",w.classList.remove("scale-110"))}),g.addEventListener("drop",async y=>{y.preventDefault(),g.style.opacity="0.7",w.classList.remove("scale-110"),await i()}),document.body.appendChild(u),document.body.appendChild(p),document.body.appendChild(g),document.body.appendChild(w),r.push(u,p,g,w)},n=()=>{r.forEach(c=>{c&&c.parentNode&&c.parentNode.removeChild(c)}),r.length=0},a=async()=>{if(!t){console.error("? No hay producto arrastrado");return}if(console.log("🔍 Intentando mover producto",t,"a página anterior"),!confirm("¿Mover este producto a la página anterior?")){console.log("✅ Usuario canceló el movimiento"),n(),e&&(e.classList.remove("opacity-40","scale-95"),e.style.cursor="grab"),e=null,t=null;return}await l(t,"previous"),n(),e&&(e.classList.remove("opacity-40","scale-95"),e.style.cursor="grab"),e=null,t=null},i=async()=>{if(!t){console.error("? No hay producto arrastrado");return}if(console.log("🔍 Intentando mover producto",t,"a p�gina siguiente"),!confirm("�Mover este producto a la p�gina siguiente?")){console.log("✅ Usuario cancel� el movimiento"),n(),e&&(e.classList.remove("opacity-40","scale-95"),e.style.cursor="grab"),e=null,t=null;return}await l(t,"next"),n(),e&&(e.classList.remove("opacity-40","scale-95"),e.style.cursor="grab"),e=null,t=null},l=async(c,u)=>{console.log(`?? Moviendo producto ${c} a la p�gina ${u==="next"?"siguiente":"anterior"}`);const p=16;let g=[];if(O==="meats"){let v=T.from("productos").select("id, orden").eq("categoria","carnes");H!=="admin"&&(v=v.eq("activo",!0)),v=v.order("orden",{ascending:!0});const{data:m}=await v;g=m||[]}else if(O==="products"){let v=T.from("productos").select("id, orden").neq("categoria","carnes");H!=="admin"&&(v=v.eq("activo",!0)),v=v.order("orden",{ascending:!0});const{data:m}=await v;g=m||[]}else if(O==="offers"){let v=T.from("productos").select("id, orden").gt("descuento",0);H!=="admin"&&(v=v.eq("activo",!0)),v=v.order("orden",{ascending:!0});const{data:m}=await v;g=m||[]}else{console.error("? P�gina actual no soportada para mover productos:",O);return}if(!g||g.length===0){console.error("? No se obtuvieron productos");return}console.log("🔍 Productos obtenidos para movimiento:",{total:g.length,userRole:H,currentPage:O,productIds:g.map(v=>v.id)});const w=g.findIndex(v=>v.id===c);if(w===-1){console.error("? No se encontr� el producto en la lista"),alert("? Error: El producto no se encuentra en la lista actual");return}const y=Math.floor(w/p)+1,h=Math.ceil(g.length/p);let x,_;if(u==="next"){if(x=y+1,x>h){alert("No hay p�gina siguiente"),console.log("🔍 No existe p�gina siguiente. P�gina actual:",y,"Total p�ginas:",h);return}_=(x-1)*p}else{if(x=y-1,x<1){alert("No hay p�gina anterior"),console.log("🔍 No existe p�gina anterior. P�gina actual:",y);return}_=Math.min(x*p-1,g.length-1)}if(console.log("🔍 Debug movimiento:",{currentIndex:w,currentPageNum:y,targetPageNum:x,targetIndex:_,totalProducts:g.length,totalPages:h,direction:u,currentProductId:c}),_<0||_>=g.length){alert("No hay p�gina "+(u==="next"?"siguiente":"anterior")),console.log("🔍 �ndice objetivo fuera de rango:",_,"(total productos:",g.length,")");return}const k=g[w],f=g[_];console.log("🔍 Intercambiando orden:",{currentId:k.id,currentOrder:k.orden,targetId:f.id,targetOrder:f.orden,movingFrom:`P�gina ${y}, �ndice ${w}`,movingTo:`P�gina ${x}, �ndice ${_}`}),await Xe(k.id,f.orden),await Xe(f.id,k.orden),await d()},d=async()=>{if(pe){console.log("🔍 Ya hay una recarga en proceso, saltando...");return}pe=!0,console.log("🔍 Recargando p�gina actual:",O);const c=document.getElementById("pageContent");if(!c||!O){console.error("? No se puede recargar: pageContent o currentPage no disponible"),pe=!1;return}c.innerHTML="",O==="meats"?c.innerHTML=kt():O==="products"?c.innerHTML=_t():O==="offers"&&(c.innerHTML=Et()),await new Promise(p=>setTimeout(p,100)),Pt();const{setupPagination:u}=await q(()=>Promise.resolve().then(()=>ce),void 0);O==="meats"?await u("meatsGrid","meatsPagination","carnes"):O==="products"?await u("productsGrid","productsPagination","productos",!0):O==="offers"&&await u("offersGrid","offersPagination",void 0,!1,!0),console.log("✅ P�gina recargada exitosamente"),pe=!1,alert("? Producto movido correctamente")};s.forEach(c=>{const u=c;u.setAttribute("draggable","true"),u.style.cursor="grab",u.addEventListener("dragstart",p=>{e=u,t=parseInt(u.getAttribute("data-product-id")||"0"),u.style.cursor="grabbing",u.classList.add("opacity-40","scale-95"),u.style.transition="all 0.2s ease",console.log("🔍 Arrastrando producto:",t),o()}),u.addEventListener("dragend",()=>{u.classList.remove("opacity-40","scale-95"),u.style.cursor="grab",n()}),u.addEventListener("dragover",p=>{p.preventDefault(),e&&e!==u&&(u.classList.add("ring-4","ring-primary-500","ring-offset-2","scale-105"),u.style.transition="all 0.2s ease")}),u.addEventListener("dragleave",()=>{u.classList.remove("ring-4","ring-primary-500","ring-offset-2","scale-105")}),u.addEventListener("drop",async p=>{if(p.preventDefault(),u.classList.remove("ring-4","ring-primary-500","ring-offset-2","scale-105"),!e||e===u)return;const g=parseInt(u.getAttribute("data-product-id")||"0");if(!t||!g)return;if(!confirm("�Intercambiar el orden de estos productos?")){e&&e.classList.remove("opacity-40","scale-95");return}console.log("🔍 Intercambiando orden:",t,"?",g),console.log("🔍 P�gina actual:",O);const{data:y}=await T.from("productos").select("id, orden").in("id",[t,g]);if(console.log("🔍 Productos obtenidos:",y),!y||y.length!==2){console.error("? Error: No se obtuvieron 2 productos. Recibidos:",y==null?void 0:y.length);return}const h=y.find(b=>Number(b.id)===Number(t)),x=y.find(b=>Number(b.id)===Number(g));if(console.log("🔍 Productos encontrados:",{draggedProduct:h,targetProduct:x}),!h||!x){console.error("? Error: No se encontraron productos en la respuesta"),console.error("? Buscando IDs:",{draggedId:t,targetId:g}),console.error("? IDs en respuesta:",y.map(b=>({id:b.id,tipo:typeof b.id})));return}console.log("🔍 Actualizando �rdenes en BD...");let _=x.orden,k=h.orden;h.orden===x.orden&&(console.log("🔍 Advertencia: Ambos productos tienen el mismo orden, usando IDs como base"),_=g,k=t);const f=await Xe(t,_),v=await Xe(g,k);if(console.log("✅ Resultado actualizaciones:",{result1:f,result2:v}),!f||!v){console.error("? Error al actualizar �rdenes en BD"),alert("? Error al reordenar productos. Verifica la consola.");return}if(console.log("🔍 Recargando vista despu�s de intercambio..."),console.log("🔍 currentPage:",O),pe){console.log("🔍 Ya hay una recarga en proceso, saltando..."),e=null,t=null;return}pe=!0;const m=document.getElementById("pageContent");if(m&&O){m.innerHTML="",O==="meats"?m.innerHTML=kt():O==="products"?m.innerHTML=_t():O==="offers"&&(m.innerHTML=Et()),await new Promise(E=>setTimeout(E,100)),Pt();const{setupPagination:b}=await q(()=>Promise.resolve().then(()=>ce),void 0);O==="meats"?await b("meatsGrid","meatsPagination","carnes"):O==="products"?await b("productsGrid","productsPagination","productos",!0):O==="offers"&&await b("offersGrid","offersPagination",void 0,!1,!0),console.log("✅ Vista actualizada con nuevo orden"),pe=!1}else pe=!1;e=null,t=null})})}async function pi(s){try{console.log("🔍 Activando producto:",s);const{error:e}=await T.from("productos").update({activo:!0}).eq("id",s);if(e)throw e;console.log("✅ Producto activado exitosamente"),console.log("🔍 P�gina actual:",O);const t=document.getElementById("pageContent");if(!t){console.error("? No se encontr� pageContent"),alert("? Producto activado correctamente");return}console.log("🔍 Iniciando recarga de p�gina:",O),O==="home"?(console.log("🔍 Recargando Home..."),t.innerHTML=rr()):O==="meats"?(console.log("🔍 Recargando Carnes..."),t.innerHTML=kt()):O==="products"?(console.log("🔍 Recargando Productos..."),t.innerHTML=_t()):O==="offers"&&(console.log("🔍🔍 Recargando Ofertas..."),t.innerHTML=Et()),console.log("✅ HTML actualizado, re-adjuntando eventos..."),Pt();const{setupPagination:r}=await q(()=>Promise.resolve().then(()=>ce),void 0);O==="meats"?await r("meatsGrid","meatsPagination","carnes"):O==="products"?await r("productsGrid","productsPagination","productos",!0):O==="offers"&&await r("offersGrid","offersPagination",void 0,!1,!0),console.log("✅ Paginaci�n reinicializada"),console.log("✅ Eventos re-adjuntados"),setTimeout(()=>{alert("? Producto activado correctamente")},200)}catch(e){console.error("? Error activando producto:",e),alert("? Error al activar el producto")}}window.updateAdminButtons=sr;window.activateProduct=pi;window.setupDragAndDrop=fi;window.updateProductOrder=Xe;async function mi(){const{data:{session:s}}=await T.auth.getSession();if(s){console.log("🔍 Sesi�n encontrada, obteniendo rol desde BD...");const{data:e,error:t}=await T.from("user_profiles").select("role").eq("id",s.user.id).single();return t?(console.error("? Error obteniendo perfil:",t),console.error("? Detalles:",{userId:s.user.id,email:s.user.email}),H="user",window.userRole="user"):e?(H=e.role||"user",window.userRole=H,console.log("✅ Rol obtenido de BD:",H)):(console.error("? No se encontr� perfil para el usuario"),H="user",window.userRole="user"),console.log("🔍 Usuario autenticado:",{email:s.user.email,userId:s.user.id,roleBD:H,profileData:e}),!0}return H=null,window.userRole=null,console.log("⚠️ No hay sesión activa"),!1}function ao(s){switch(s){case"home":return rr();case"meats":return kt();case"products":return _t();case"offers":return Et();case"contact":return hi();default:return rr()}}function yi(){const s=document.querySelector("#app");s.innerHTML=`
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      ${qa()}
      <main id="pageContent">
        ${ao(O)}
      </main>
            ${ui()}
    </div>
  `,document.getElementById("loginModal")?console.log("🔍 loginModal ya existe, saltando..."):(console.log("🎨 Renderizando loginModal por primera vez"),document.body.insertAdjacentHTML("beforeend",Ja())),document.getElementById("addProductModal")?console.log("🔍 addProductModal ya existe, saltando..."):(console.log("🎨 Renderizando addProductModal por primera vez"),document.body.insertAdjacentHTML("beforeend",Ya())),document.getElementById("editProductModal")?console.log("🔍 editProductModal ya existe, saltando..."):(console.log("🎨 Renderizando editProductModal por primera vez"),document.body.insertAdjacentHTML("beforeend",Qa())),bi()}function vi(){const s=document.querySelector("#app");s.innerHTML=Ga(),Ka()}function Pt(){console.log("🔍 attachUIForContent - userRole:",H);try{so(),oo(),no();const s=document.querySelectorAll(".admin-only");if(console.log("🔍 Elementos admin encontrados:",s.length),H==="admin"?(console.log("✅ Usuario es ADMIN - mostrando botones"),s.forEach(e=>{e.style.display="flex"})):(console.log("✅ Usuario NO es admin - ocultando botones (role:",H,")"),s.forEach(e=>{e.style.display="none"})),O==="contact"){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",t=>{var c,u,p;t.preventDefault();const r=new FormData(e),o=((c=r.get("name"))==null?void 0:c.toString())||"",n=((u=r.get("email"))==null?void 0:u.toString())||"",a=((p=r.get("message"))==null?void 0:p.toString())||"";if(!o||!n||!a){alert("Por favor completa todos los campos.");return}const i="supercarnesgarcia@outlook.com",l=encodeURIComponent(`Contacto Web - ${o}`),d=encodeURIComponent(`Nombre: ${o}
Correo: ${n}

Mensaje:
${a}`);window.location.href=`mailto:${i}?subject=${l}&body=${d}`},{once:!0})}}catch(s){console.error("? Error en attachUIForContent:",s)}}function bi(){var n,a,i,l,d,c,u,p,g,w,y;(n=document.getElementById("menuButton"))==null||n.addEventListener("click",()=>{const h=document.getElementById("mobileMenu");h==null||h.classList.toggle("hidden")}),(a=document.getElementById("darkModeToggle"))==null||a.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");const h=document.documentElement.classList.contains("dark");localStorage.setItem("darkMode",h.toString())});const s=document.getElementById("userMenuButton"),e=document.getElementById("userDropdown");s==null||s.addEventListener("click",()=>{e==null||e.classList.toggle("hidden")}),document.addEventListener("click",h=>{e&&!(s!=null&&s.contains(h.target))&&!e.contains(h.target)&&e.classList.add("hidden")}),(i=document.getElementById("logoutButton"))==null||i.addEventListener("click",async()=>{const{error:h}=await T.auth.signOut();h?console.error("? Error al cerrar sesi�n:",h):(console.log("✅ Sesi�n cerrada"),window.location.reload())}),(l=document.getElementById("mobileLogoutButton"))==null||l.addEventListener("click",async()=>{const{error:h}=await T.auth.signOut();h?console.error("? Error al cerrar sesi�n:",h):(console.log("✅ Sesi�n cerrada"),window.location.reload())}),T.auth.getSession().then(({data:{session:h}})=>{var v,m;const x=document.getElementById("userMenuContainer"),_=document.getElementById("mobileUserInfo"),k=document.getElementById("dropdownAuthButtons"),f=document.getElementById("dropdownUserInfo");if(h){const b=document.getElementById("userName"),E=document.getElementById("dropdownEmail"),I=document.getElementById("mobileUserName"),B=((v=h.user.user_metadata)==null?void 0:v.full_name)||((m=h.user.email)==null?void 0:m.split("@")[0])||"Usuario",$=h.user.email||"";b&&(b.textContent=B,b.classList.remove("hidden")),E&&(E.textContent=$),I&&(I.textContent=B),x==null||x.classList.remove("hidden"),_==null||_.classList.remove("hidden"),f==null||f.classList.remove("hidden"),k==null||k.classList.add("hidden")}else{const b=document.getElementById("userName");b&&(b.textContent="",b.classList.add("hidden")),x==null||x.classList.remove("hidden"),k==null||k.classList.remove("hidden"),f==null||f.classList.add("hidden")}}),(d=document.getElementById("navLoginButton"))==null||d.addEventListener("click",()=>{var h;(h=document.getElementById("loginButton"))==null||h.click()}),(c=document.getElementById("navRegisterButton"))==null||c.addEventListener("click",()=>{var _,k;const h=document.getElementById("loginModal");h==null||h.classList.remove("hidden"),h==null||h.classList.add("flex"),(_=document.getElementById("loginForm"))==null||_.classList.add("hidden"),(k=document.getElementById("registerForm"))==null||k.classList.remove("hidden");const x=document.getElementById("loginModalTitle");x&&(x.textContent="Crear Cuenta")}),(u=document.getElementById("dropdownLoginButton"))==null||u.addEventListener("click",()=>{var _,k;const h=document.getElementById("loginModal");h==null||h.classList.remove("hidden"),h==null||h.classList.add("flex"),(_=document.getElementById("loginForm"))==null||_.classList.remove("hidden"),(k=document.getElementById("registerForm"))==null||k.classList.add("hidden");const x=document.getElementById("loginModalTitle");x&&(x.textContent="Iniciar Sesión")}),(p=document.getElementById("mobileNavLoginButton"))==null||p.addEventListener("click",()=>{var h,x;(h=document.getElementById("menuButton"))==null||h.click(),(x=document.getElementById("loginButton"))==null||x.click()}),(g=document.getElementById("mobileNavRegisterButton"))==null||g.addEventListener("click",()=>{var h,x;(h=document.getElementById("menuButton"))==null||h.click(),(x=document.getElementById("loginButton"))==null||x.click(),setTimeout(()=>{var _;(_=document.getElementById("switchToRegister"))==null||_.click()},100)}),(w=document.getElementById("searchButton"))==null||w.addEventListener("click",()=>{var h;(h=document.getElementById("searchModal"))==null||h.classList.remove("hidden")}),(y=document.getElementById("closeSearch"))==null||y.addEventListener("click",()=>{var h;(h=document.getElementById("searchModal"))==null||h.classList.add("hidden")}),document.addEventListener("keydown",h=>{var x;h.key==="Escape"&&((x=document.getElementById("searchModal"))==null||x.classList.add("hidden"))});function t(){document.querySelectorAll(".nav-link").forEach(h=>{h.addEventListener("click",async x=>{x.preventDefault();const _=h.dataset.page;if(_){O=_,localStorage.setItem("currentPage",_),window.scrollTo({top:0,behavior:"smooth"});const k=document.getElementById("pageContent");k&&(k.classList.add("page-exit"),setTimeout(()=>{k.innerHTML=ao(O),k.classList.remove("page-exit"),k.classList.add("page-enter"),setTimeout(()=>{k.classList.remove("page-enter")},200),Pt(),t(),q(()=>Promise.resolve().then(()=>ce),void 0).then(({setupPagination:f})=>{O==="meats"?f("meatsGrid","meatsPagination","carnes"):O==="products"?f("productsGrid","productsPagination","productos",!0):O==="offers"&&f("offersGrid","offersPagination",void 0,!1,!0)})},200))}})})}t();try{so(),setTimeout(()=>{oo(),no()},100);const h=document.querySelectorAll(".admin-only");console.log("🔍 [attachUI] Elementos admin encontrados:",h.length,"Role:",H),H==="admin"?(console.log("✅ [attachUI] Usuario es ADMIN - mostrando botones"),h.forEach(x=>{x.style.display="flex"})):(console.log("✅ [attachUI] Usuario NO es admin - ocultando botones"),h.forEach(x=>{x.style.display="none"}))}catch(h){console.error("? Error en attachUI:",h)}const r=document.getElementById("searchInput"),o=document.getElementById("searchResults");r==null||r.addEventListener("input",h=>{const x=h.target.value.toLowerCase();if(x.length<2){o&&(o.innerHTML="");return}const _=["Ribeye","T-Bone","Pica�a","Arrachera","Chorizo","Costillas"].filter(k=>k.toLowerCase().includes(x));o&&(o.innerHTML=_.map(k=>`
        <div class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">${k}</div>
      `).join(""))})}async function wi(){new URLSearchParams(window.location.hash.substring(1)).get("access_token"),yi(),await mi()?(console.log("✅ Admin autenticado"),sr()):console.log("👤 Visitante (sin login)"),setTimeout(()=>{const r=document.getElementById("adminSecretAccess");if(r){let o=0,n=null;r.addEventListener("click",a=>{if(a.preventDefault(),o++,o===1)n=setTimeout(()=>{o=0},500);else if(o===2){n&&clearTimeout(n),o=0;const i=document.getElementById("loginModal");i?(i.classList.remove("hidden"),i.classList.add("flex")):vi()}})}},500);const{setupPagination:t}=await q(()=>Promise.resolve().then(()=>ce),void 0);O==="meats"?await t("meatsGrid","meatsPagination","carnes"):O==="products"?await t("productsGrid","productsPagination","productos",!0):O==="offers"&&await t("offersGrid","offersPagination",void 0,!1,!0),T.auth.onAuthStateChange((r,o)=>{console.log("🔍 Auth state changed:",r),r==="SIGNED_IN"&&o?window.location.reload():r==="SIGNED_OUT"&&(H=null,sr())})}wi();window.notificationService=to;export{Ii as P,q as _,ce as p,T as s};
