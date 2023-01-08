/* Partytown 0.6.2 - MIT builder.io */
const e=new Map,t=(e,t)=>({F:e.F,p:t}),r=(e,t)=>new Response(e,{headers:{"content-type":t||"text/html","Cache-Control":"no-store"}});self.oninstall=()=>self.skipWaiting(),self.onactivate=()=>self.clients.claim(),self.onmessage=t=>{const r=t.data,n=e.get(r.F);n&&(e.delete(r.F),clearTimeout(n[1]),n[0](r))},self.onfetch=n=>{const s=n.request,i=new URL(s.url).pathname;i.endsWith("sw.html")?n.respondWith(r('<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module">/* Partytown 0.6.2 - MIT builder.io */\n(e=>{const t=()=>{},r=e=>e.length,n=e=>{var t,r,n;try{const r=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(r)return r}catch(e){}try{const t=null===(n=null===(r=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;if(t)return t}catch(e){}return""},s=(e,t)=>e.startsWith(t),i=e=>!(s(e,"webkit")||s(e,"toJSON")||s(e,"constructor")||s(e,"toString")||s(e,"_")),o=e=>11===e.nodeType&&e.host?"#s":e.nodeName,a=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),l={Anchor:"a",DList:"dl",Image:"img",OList:"ol",Paragraph:"p",Quote:"q",TableCaption:"caption",TableCell:"td",TableCol:"colgroup",TableRow:"tr",TableSection:"tbody",UList:"ul"},c={Graphics:"g",SVG:"svg"},u=Symbol(),h=Symbol(),d=new Map,p=new Map,m={},g=new WeakMap,f=(e,t)=>{if(e)return(t=g.get(e))||(t=e[u])||$(e,t=a()),t},y=(e,t,r,n,s)=>{if((r=m[e])&&r.U){if(e===t)return r.U;if(n=r.U.document,"d"===(s=t.split(".").pop()))return n;if("e"===s)return n.documentElement;if("h"===s)return n.head;if("b"===s)return n.body}return d.get(t)},$=(e,t,r)=>{e&&(d.set(t,e),e[u]=t,e[h]=r=Date.now(),r>w+5e3&&(d.forEach(((e,t)=>{e[h]<w&&e.nodeType&&!e.isConnected&&d.delete(t)})),w=r))};let w=0;const v=e.parent,b=document.implementation.createHTMLDocument(),S=v.partytown||{},E=(S.lib||"/~partytown/")+"",T=(e,t,r)=>{const n=((e,t)=>{return r=e,n={value:t},Object.defineProperty(r,"name",{...n,configurable:!0});var r,n})(class extends m[e].U.HTMLElement{},r[0]);return"connectedCallback,disconnectedCallback,attributeChangedCallback,adoptedCallback".split(",").map((r=>n.prototype[r]=function(...n){t.postMessage([15,e,f(this),r,n])})),n.observedAttributes=r[1],n},C=(e,t,r,i,a)=>void 0!==t&&(i=typeof t)?"string"===i||"number"===i||"boolean"===i||null==t?[0,t]:"function"===i?[6]:(r=r||new Set)&&Array.isArray(t)?r.has(t)?[1,[]]:r.add(t)&&[1,t.map((t=>C(e,t,r)))]:"object"===i?I(t)?[14,{name:t.name,message:t.message,stack:t.stack}]:""===(a=n(t))?[2,{}]:"Window"===a?[3,[e,e]]:"HTMLCollection"===a||"NodeList"===a?[7,Array.from(t).map((t=>C(e,t,r)[1]))]:a.endsWith("Event")?[5,M(e,t,r)]:"CSSRuleList"===a?[12,Array.from(t).map(L)]:s(a,"CSS")&&a.endsWith("Rule")?[11,L(t)]:"CSSStyleDeclaration"===a?[13,M(e,t,r)]:"Attr"===a?[10,[t.name,t.value]]:t.nodeType?[3,[e,f(t),o(t)]]:[2,M(e,t,r,!0,!0)]:void 0:t,M=(e,t,r,n,s,o,a,l)=>{if(o={},!r.has(t))for(a in r.add(t),t)i(a)&&(l=t[a],(n||"function"!=typeof l)&&(s||""!==l)&&(o[a]=C(e,l,r)));return o},L=e=>{let t,r={};for(t in e)R.includes(t)&&(r[t]=String(e[t]));return r},I=t=>t instanceof e.top.Error,N=(t,r,n,s)=>r?(n=r[0],s=r[1],0===n?s:4===n?x(t,s):1===n?s.map((e=>N(t,e))):3===n?y(s[0],s[1]):5===n?A(U(t,s)):2===n?U(t,s):8===n?s:9===n?new e[r[2]](s):void 0):void 0,x=(e,{V:t,w:r,L:n},s)=>((s=p.get(n))||(s=function(...s){e.postMessage([9,{V:t,w:r,L:n,R:C(t,this),b:C(t,s)}])},p.set(n,s)),s),A=e=>new("detail"in e?CustomEvent:Event)(e.type,e),U=(e,t,r,n)=>{for(n in r={},t)r[n]=N(e,t[n]);return r},R="cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText".split(","),H=async(e,t)=>{let n,s,i,o,a,l,c={F:t.F},u=r(t.Q),h=0;for(;h<u;h++)try{l=h===u-1,n=t.Q[h],s=n.V,i=n.a,!m[s]&&s.startsWith("f_")&&await new Promise((e=>{let t=0,r=()=>{m[s]||t++>1e3?e():requestAnimationFrame(r)};r()})),1===i[0]&&i[1]in m[s].U?$(new m[s].U[i[1]](...N(e,i[2])),n.w):(o=y(s,n.w),o?(a=P(e,s,o,i,l,n.r),n.d&&("string"==typeof n.d?$(a,n.d):m[n.d.V]={V:n.d.V,U:{document:a}}),"object"==typeof(d=a)&&d&&d.then&&(a=await a,l&&(c.z=!0)),l&&(c.M=C(s,a))):c.p=n.w+" not found")}catch(e){l?c.p=String(e.stack||e):console.error(e)}var d;return c},P=(e,t,s,i,o,a)=>{let l,c,u,h,d,p=0,m=r(i);for(;p<m;p++){c=i[p],l=i[p+1],u=i[p-1];try{if(!Array.isArray(l))if("string"==typeof c||"number"==typeof c){if(p+1===m&&a)return d={},a.map((e=>d[e]=s[e])),d;s=s[c]}else{if(0===l)return void(s[u]=N(e,c));if("function"==typeof s[u]&&(h=N(e,c),"define"===u&&"CustomElementRegistry"===n(s)&&(h[1]=T(t,e,h[1])),"insertRule"===u&&h[1]>r(s.cssRules)&&(h[1]=r(s.cssRules)),s=s[u].apply(s,h),"play"===u))return Promise.resolve()}}catch(e){if(o)throw e;console.debug(e)}}return s},O=(e,t,r)=>{if(!g.has(r)){g.set(r,t);const n=r.document,s=r.history,i=g.get(r.parent),o=()=>e.postMessage([5,{V:t,J:i,S:n.baseURI,T:n.visibilityState}]),a=s.pushState.bind(s),l=s.replaceState.bind(s),c=(r,s,i,o)=>{setTimeout((()=>{e.postMessage([13,{V:t,type:r,state:s,url:n.baseURI,newUrl:i,oldUrl:o}])}))};s.pushState=(e,t,r)=>{a(e,t,r),c(0,e,null==r?void 0:r.toString())},s.replaceState=(e,t,r)=>{l(e,t,r),c(1,e,null==r?void 0:r.toString())},r.addEventListener("popstate",(e=>{c(2,e.state)})),r.addEventListener("hashchange",(e=>{c(3,{},e.newURL,e.oldURL)})),n.addEventListener("visibilitychange",(()=>e.postMessage([14,t,n.visibilityState]))),m[t]={V:t,U:r},"complete"===n.readyState?o():r.addEventListener("load",o)}},k=(e,t)=>{let n,s,i,o=t.V,a=t.U,l=a.document;l&&l.body?(n=l.querySelector(\'script[type="text/partytown"]:not([data-ptid]):not([data-pterror]):not([async]):not([defer])\'),n||(n=l.querySelector(\'script[type="text/partytown"]:not([data-ptid]):not([data-pterror])\')),n?(n.dataset.ptid=s=f(n,o),i={V:o,w:s},n.src?(i.S=n.src,i.H=n.dataset.ptsrc||n.src):i.j=n.innerHTML,e.postMessage([7,i])):(t.x||(t.x=1,((e,t,n)=>{let s,i,o=n._ptf,a=(n.partytown||{}).forward||[],l=(r,n)=>e.postMessage([10,{V:t,q:r,b:C(t,Array.from(n))}]);if(n._ptf=void 0,a.map((e=>{i=n,e.split(".").map(((e,t,n)=>{i=i[n[t]]=t+1<r(n)?i[n[t]]||("push"===n[t+1]?[]:{}):(...e)=>l(n,e)}))})),o)for(s=0;s<r(o);s+=2)l(o[s],o[s+1])})(e,o,a),l.dispatchEvent(new CustomEvent("pt0"))),e.postMessage([8,o]))):requestAnimationFrame((()=>k(e,t)))},V=()=>{const e=b.createElement("i"),t=b.createTextNode(""),r=b.createComment(""),n=b.createDocumentFragment(),s=b.createElement("p").attachShadow({mode:"open"}),i=J(v,"IntersectionObserver"),o=J(v,"MutationObserver"),a=J(v,"ResizeObserver"),l=v.performance,c=v.screen,u=[[v.history],[l],[l.navigation],[l.timing],[c],[c.orientation],[v.visualViewport],[i,12],[o,12],[a,12],[t],[r],[n],[s],[e],[e.attributes],[e.classList],[e.dataset],[e.style],[b],[b.doctype]],h=[D("Window",v),D("Node",t)],d={i:JSON.stringify(S,((e,t)=>("function"==typeof t&&(t=String(t)).startsWith(e+"(")&&(t="function "+t),t))),v:F(u,h),C:new URL(E,v.location)+"",I:origin,D:q("localStorage"),O:q("sessionStorage")};return G(d.v,v,"IntersectionObserverEntry"),d},j=()=>{const e=Object.getOwnPropertyNames(v).map((e=>((e,t,r,n)=>{if(r=t.match(/^(HTML|SVG)(.+)Element$/))return n=r[2],"S"==t[0]?e.createElementNS("http://www.w3.org/2000/svg",c[n]||n.slice(0,2).toLowerCase()+n.slice(2)):e.createElement(l[n]||n)})(b,e))).filter((e=>e)).map((e=>[e]));return F(e,[])},B=new Set(["Object"]),F=(e,t)=>(e.filter((e=>e[0])).map((e=>{const t=e[0],r=e[1],s=n(t);return[s,v[s].prototype,t,r]})).map((([e,r,n,s])=>W(B,t,e,r,n,s))),t),D=(e,t,r)=>{let n=[],s=[e,"Object",n];for(r in t)_(n,t,r);return s},W=(e,t,r,s,i,a)=>{if(!e.has(r)){e.add(r);const l=Object.getPrototypeOf(s),c=n(l),u=[],h=Object.getOwnPropertyDescriptors(s);W(e,t,c,l,i,a);for(const e in h)_(u,i,e);t.push([r,c,u,a,o(i)])}},_=(e,t,r,s,o,a)=>{try{i(r)&&isNaN(r[0])&&"all-products"!==r&&("function"==(o=typeof(s=t[r]))?(String(s).includes("[native")||Object.getPrototypeOf(t)[r])&&e.push([r,5]):"object"===o&&null!=s?"Object"!==(a=n(s))&&self[a]&&e.push([r,s.nodeType||a]):"symbol"!==o&&(r.toUpperCase()===r?e.push([r,6,s]):e.push([r,6])))}catch(e){console.warn(e)}},q=e=>{let t,n=[],s=0,i=r(v[e]);for(;s<i;s++)t=v[e].key(s),n.push([t,v[e].getItem(t)]);return n},J=(e,r)=>void 0!==e[r]?new e[r](t):0,G=(e,t,r)=>{void 0!==t[r]&&e.push([r,"Object",Object.keys(t[r].prototype).map((e=>[e,6])),12])};let z;(t=>{const r=e.navigator.serviceWorker;return r.getRegistration().then((e=>(r.addEventListener("message",(t=>{return r=t.data,n=t=>e.active&&e.active.postMessage(t),H(z,r).then(n);var r,n})),(e,t)=>{0===t[0]?e.postMessage([1,V()]):2===t[0]?e.postMessage([3,j()]):((e,t,r)=>{4===t[0]?O(e,a(),v):(r=m[t[1]])&&(7===t[0]?requestAnimationFrame((()=>k(e,r))):6===t[0]&&((e,t,r,n,s)=>{(s=t.U.document.querySelector(`[data-ptid="${r}"]`))&&(n?s.dataset.pterror=n:s.type+="-x",delete s.dataset.ptid),k(e,t)})(e,r,t[2],t[3]))})(e,t)})))})().then((e=>{e&&(z=new Worker(URL.createObjectURL(new Blob([\'/* Partytown 0.6.2 - MIT builder.io */\\n(e=>{const t=Symbol(),r=Symbol(),n=Symbol(),i=Symbol(),s=Symbol(),o=Symbol(),a=Symbol(),l=Symbol(),$=new Map,c={},u=new WeakMap,d=[],h={},p=new Map,g=new Map,m={},f=new Map,w=new Map,y="about:blank",v=e=>e.split(","),S=e=>{if(e=h.C+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},b=v("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),I=v("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),T=v("insertBefore,remove,removeChild,replaceChild"),M=v("className,width,height,hidden,innerHTML,innerText,textContent"),E=v("setAttribute,setAttributeNS,setProperty"),N=v("addEventListener,dispatchEvent,removeEventListener"),L=N.concat(E,v("add,observe,remove,unobserve")),x=/^[A-Z_]([A-Z0-9-]*[A-Z0-9])?$/,C=()=>{},H=e=>e.length,W=e=>{var t,r,n;try{const r=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(r)return r}catch(e){}try{const t=null===(n=null===(r=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;if(t)return t}catch(e){}return""},R=[],A=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),P="text/partytown",O=(e,t,r)=>Object.defineProperty(e,t,{...r,configurable:!0}),k=(e,t)=>O(e,"name",{value:t}),D=(e,t,r)=>O(e.prototype,t,r),U=(e,t)=>Object.defineProperties(e.prototype,t),j=(e,t,r)=>D(e,t,{value:r,writable:!0}),_=(e,t)=>t in e[o],B=(e,t)=>e[o][t],F=(e,t,r)=>e[o][t]=r,V=(e,t,r,n,i)=>(!(i=$.get(t))&&r&&m[e]&&(i=m[e].k(r,t,n),$.set(t,i)),i),z=(e,t)=>j(e,"nodeType",t),X=(e,t)=>t.map((t=>D(e,t,{get(){let e=q(this,t),r=w.get(e);return r||(r=ue(this,[t]),w.set(e,r)),r}}))),q=(e,n,i)=>[e[t],e[r],n,...(i||R).map((e=>String(e&&e[t]?e[r]:e)))].join("."),G=(e,t)=>v(t).map((t=>D(e,t,{get(){return _(this,t)||F(this,t,ue(this,[t])),B(this,t)},set(e){B(this,t)!==e&&de(this,[t],e),F(this,t,e)}}))),J=e=>b.map((t=>D(e,t,{get(){const e=f.get(q(this,t));if("number"==typeof e)return e;const r=ue(this,[t],b);return r&&"object"==typeof r?(Object.entries(r).map((([e,t])=>f.set(q(this,e),t))),r[t]):r}}))),Z=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let r=q(this,t,e),n=f.get(r);return n||(n=he(this,[t],e),f.set(r,n)),n}})),Y=(e,n,i,s,o)=>{return void 0!==i&&(o=typeof i)?"string"===o||"boolean"===o||"number"===o||null==i?[0,i]:"function"===o?[4,{V:e,w:n,L:(a=i,(l=u.get(a))||(u.set(a,l=A()),c[l]=a),l)}]:(s=s||new Set)&&Array.isArray(i)?s.has(i)?[1,[]]:s.add(i)&&[1,i.map((t=>Y(e,n,t,s)))]:"object"===o?i[r]?[3,[i[t],i[r]]]:i instanceof Event?[5,Q(e,n,i,!1,s)]:K&&i instanceof TrustedHTML?[0,i.toString()]:i instanceof ArrayBuffer?[8,i]:ArrayBuffer.isView(i)?[9,i.buffer,W(i)]:[2,Q(e,n,i,!0,s)]:void 0:i;var a,l},K="undefined"!=typeof TrustedHTML,Q=(e,t,r,n,i,s,o,a)=>{if(s={},!i.has(r))for(o in i.add(r),r)a=r[o],(n||"function"!=typeof a)&&(s[o]=Y(e,t,a,i));return s},ee=(e,n)=>e?Y(e[t],e[r],n):[0,n],te=(e,t,r,n,i,s,o,a)=>{if(n){if(i=n[0],s=n[1],0===i||11===i||12===i)return s;if(4===i)return ne(r,s);if(6===i)return e&&r.length>0?(...t)=>he(m[e].U,r,t,1):C;if(3===i)return re(s);if(7===i)return new se(s.map(re));if(10===i)return new oe(s);if(1===i)return s.map((n=>te(e,t,r,n)));if(14===i)return new ie(s);for(a in o={},s)o[a]=te(e,t,[...r,a],s[a]);if(13===i)return new m[e].U.CSSStyleDeclaration(e,t,r,o);if(5===i){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),r=d.find((e=>e.m===t));r&&(e=m[r.V],e&&(o.source=e.U,o.origin=e.E.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?C:e[String(t)]})}if(2===i)return o}},re=([e,t,r])=>t===e&&m[e]?m[e].U:V(e,t,r),ne=(e,{V:t,w:r,G:n,L:i})=>(c[i]||u.set(c[i]=function(...i){const s=V(t,r,n);return he(s,e,i)},i),c[i]);class ie extends Error{constructor(e){super(e.message),this.name=e.name,this.message=e.message,this.stack=e.stack}}const se=class{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return H(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}},oe=class{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}},ae=(e,t,r)=>console.warn(`Partytown unable to ${e} cross-origin ${t}: `+r.E),le=[],$e=(e,n,i,o,a,l)=>{if(e[s]){if(le.push({V:e[t],w:e[r],a:[...e[s],...n],d:o,r:a}),3===i)h.K([12,{F:A(),Q:[...le]}],l?[l instanceof ArrayBuffer?l:l.buffer]:void 0),le.length=0;else if(1===i)return ce(!0);h.c=setTimeout(ce,20)}},ce=e=>{if(clearTimeout(h.c),H(le)){const t=le[H(le)-1],r={F:A(),Q:[...le]};if(le.length=0,e){const e=((e,t)=>{const r=new XMLHttpRequest;return r.open("POST",S("proxytown"),!1),r.send(JSON.stringify(t)),JSON.parse(r.responseText)})(0,r),n=e.z,i=te(t.V,t.w,t.a,e.M);if(e.p){if(n)return Promise.reject(e.p);throw new Error(e.p)}return n?Promise.resolve(i):i}h.K([12,r])}},ue=(e,t,r,n)=>h.i.get&&(n=h.i.get(ge(e,t)))!==a?n:n=$e(e,t,1,void 0,r),de=(e,t,r,n)=>{if(h.i.set){if((n=h.i.set({value:r,prevent:l,...ge(e,t)}))===l)return;n!==a&&(r=n)}M.some((e=>t.includes(e)))&&(f.clear(),t[t.length-1]),t=[...t,ee(e,r),0],$e(e,t,2)},he=(e,t,r,n,i,s,o,l)=>h.i.apply&&(o=h.i.apply({args:r,...ge(e,t)}))!==a?o:(l=t[H(t)-1],t=[...t,ee(e,r)],n=n||(L.includes(l)?2:1),"setAttribute"===l&&_(e,r[0])?F(e,r[0],r[1]):T.includes(l)?(f.clear(),w.clear()):E.includes(l)&&(n=2,f.clear()),o=$e(e,t,n,i,void 0,s)),pe=(e,t,r)=>{$e(e,[1,t,ee(e,r)],1)},ge=(e,t)=>({name:t.join("."),continue:a,nodeName:e[n],constructor:W(e)}),me=(e,t,r,n,i)=>{let s,o,a=t=>((t=r.get(e.origin))||r.set(e.origin,t=[]),t),l=e=>a().findIndex((t=>t[fe]===e)),$={getItem:e=>(s=l(e),s>-1?a()[s][we]:null),setItem(r,o){s=l(r),s>-1?a()[s][we]=o:a().push([r,o]),n?he(e,[t,"setItem"],[r,o],2):ae("set",t,i)},removeItem(r){s=l(r),s>-1&&a().splice(s,1),n?he(e,[t,"removeItem"],[r],2):ae("remove",t,i)},key:e=>(o=a()[e],o?o[fe]:null),clear(){a().length=0,n?he(e,[t,"clear"],R,2):ae("clear",t,i)},get length(){return a().length}};e[t]=$},fe=0,we=1,ye=(e,t,r)=>{e[r]=k(class extends t{constructor(e,t,r,i){return super(e,t,r,i||{}),new Proxy(this,{get:(e,t)=>e[t]?e[t]:(e[t]||"string"!=typeof t||e[n][t]||(e[n][t]=ue(e,[t])),e[n][t]),set:(e,t,r)=>(e[n][t]=r,de(e,[t],r),f.clear(),!0)})}setProperty(...e){this[n][e[0]]=e[1],he(this,["setProperty"],e,2),e[0],f.clear()}getPropertyValue(e){return this[e]}removeProperty(e){let t=this[n][e];return he(this,["removeProperty"],[e],2),f.clear(),this[n][e]=void 0,t}},r)},ve=(e,t)=>{e[t]=k(class{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,r){const n=String(r);return"item"===n?t=>be(e,t):"length"===n?Se(e).length:isNaN(n)?t[r]:be(e,n)}})}insertRule(e,t){const r=Se(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=r.length&&(he(this.ownerNode,["sheet","insertRule"],[e,t],2),r.splice(t,0,0)),this.ownerNode,f.clear(),t}deleteRule(e){he(this.ownerNode,["sheet","deleteRule"],[e],2),Se(this.ownerNode).splice(e,1),this.ownerNode,f.clear()}get type(){return"text/css"}},t);const r={sheet:{get(){return new e[t](this)}}};U(e.HTMLStyleElement,r)},Se=(e,t)=>((t=B(e,2))||(t=ue(e,["sheet","cssRules"]),F(e,2,t)),t),be=(e,t,r)=>(0===(r=Se(e))[t]&&(r[t]=ue(e,["sheet","cssRules",parseInt(t,10)])),r[t]),Ie="0.6.2",Te=(e,t,r,n,i)=>{try{e.l=t,Me(e,r)}catch(e){console.error(r,e),i=String(e.stack||e)}return e.l="",i},Me=(e,t,r)=>{e.N=1,t=`with(this){${(h.i.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}==\\\'function\\\'&&(window.${e}=${e}))`)).join(";")+t.replace(/\\\\bthis\\\\b/g,"(thi$(this)?window:this)").replace(/\\\\/\\\\/# so/g,"//Xso")}\\\\n;function thi$(t){return t===this}}`+(r?"\\\\n//# sourceURL="+r:""),e.A||(t=t.replace(/.postMessage\\\\(/g,`.postMessage(\\\'${e.V}\\\',`)),new Function(t).call(e.U),e.N=0},Ee=(e,t,r)=>{(r=B(e,t))&&setTimeout((()=>r.map((e=>e({type:t})))))},Ne=(e,t,r,n,i,s)=>{for(n=e.E;!n.host&&(n=(e=m[e.J]).E,e.V!==e.J););return i=new URL(t||"",n),r&&h.i.resolveUrl&&(s=h.i.resolveUrl(i,n,r))?s:i},Le=(e,t,r)=>Ne(e,t,r)+"",xe=()=>`<script src="${S("partytown.js?v="+Ie)}"><\\\\/script>`,Ce=e=>class{constructor(){this.s="",this.l=[],this.e=[]}get src(){return this.s}set src(t){this.s=t,fetch(Le(e,t,null),{mode:"no-cors",credentials:"include",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}},He={addEventListener:{value(...e){const t=e[0],r=B(this,t)||[];r.push(e[1]),F(this,t,r)}},async:{get:C,set:C},defer:{get:C,set:C},onload:{get(){let e=B(this,"load");return e&&e[0]||null},set(e){F(this,"load",e?[e]:null)}},onerror:{get(){let e=B(this,"error");return e&&e[0]||null},set(e){F(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:he(this,["getAttribute"],[e])}},setAttribute:{value(e,t){We.includes(e)?this[e]=t:he(this,["setAttribute"],[e,t])}}},We=v("src,type"),Re=(e,t)=>{const r={innerHTML:Ae,innerText:Ae,src:{get(){return B(this,4)||""},set(e){const r=Le(t,e,null);e=Le(t,e,"script"),F(this,4,e),de(this,["src"],e),r!==e&&de(this,["dataset","ptsrc"],r)}},textContent:Ae,type:{get(){return ue(this,["type"])},set(e){Pe(e)||(F(this,5,e),de(this,["type"],e))}},...He};U(e,r)},Ae={get(){return B(this,3)||""},set(e){F(this,3,e)}},Pe=e=>!e||"text/javascript"===e,Oe=(e,i,s)=>{const o=k(class extends s{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){const o=e[t]=this[t],a=e[r],l=e[n],$="SCRIPT"===l,c="IFRAME"===l;if($){const t=B(e,3),r=B(e,5);if(t){if(Pe(r)){const r=Te(i,a,t,0,""),n=r?"pterror":"ptid",s=r||a;de(e,["type"],P+"-x"),de(e,["dataset",n],s)}de(e,["innerHTML"],t)}}if(he(this,["insertBefore"],[e,s],2),c){const t=B(e,0);if(t&&t.startsWith("javascript:")){const e=t.split("javascript:")[1];Te(i,a,e,0,"")}((e,t)=>{let r,n,i=0,s=()=>{m[e]&&m[e].x&&!m[e].y?(r=B(t,1)?"error":"load",n=B(t,r),n&&n.map((e=>e({type:r})))):i++>2e3?(n=B(t,"error"),n&&n.map((e=>e({type:"error"})))):setTimeout(s,9)};s()})(a,e)}return $&&(ce(!0),h.K([7,o])),e}get nodeName(){return"#s"===this[n]?"#document-fragment":this[n]}get nodeType(){return 3}get ownerDocument(){return i.n}},"Node");X(o,v("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling")),e.Node=o},ke=v("AUDIO,CANVAS,VIDEO"),De=v("Audio,MediaSource"),Ue=(e,r,n)=>{U(e,{body:{get:()=>r.e},cookie:{get(){return r.A?ue(this,["cookie"]):(ae("get","cookie",r),"")},set(e){r.A&&de(this,["cookie"],e)}},createElement:{value(e){if(e=e.toUpperCase(),!x.test(e))throw e+" not valid";const r="IFRAME"===e,n=this[t],i=(r?"f_":"")+A();he(this,["createElement"],[e],2,i);const s=V(n,i,e);if(r)Ge({V:i,J:n,S:y},!0).U.fetch=fetch,de(s,["srcdoc"],xe());else if("SCRIPT"===e){const e=B(s,5);Pe(e)&&de(s,["type"],P)}return s}},createElementNS:{value(e,r){const n=A(),i=V(this[t],n,r,e);return he(this,["createElementNS"],[e,r],2,n),i}},createTextNode:{value(e){const r=this[t],n=A(),i=V(r,n,"#text");return he(this,["createTextNode"],[e],2,n),i}},createEvent:{value:e=>new Event(e)},currentScript:{get(){return r.l?V(this[t],r.l,"SCRIPT"):null}},defaultView:{get:()=>n?null:r.U},documentElement:{get:()=>r.o},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[r.e]:"HEAD"===e?[r.s]:he(this,["getElementsByTagName"],[e])}},head:{get:()=>r.s},implementation:{get(){return{hasFeature:()=>!0,createHTMLDocument:e=>{const t=A();return he(this,["implementation","createHTMLDocument"],[e],1,{V:t}),Ge({V:t,J:t,S:r.E+"",T:"hidden"},!0,!0).n}}}},location:{get:()=>r.E,set(e){r.E.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"},visibilityState:{get:()=>r.T||"visible"}}),G(e,"compatMode,referrer,forms")},je=(e,t)=>{U(e,{parentElement:{get(){return this.parentNode}},parentNode:{get:()=>t.o}})},_e=(e,t)=>{U(e,{localName:{get(){return this[n].toLowerCase()}},namespaceURI:{get(){return this[i]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[n]}}}),X(e,I),G(e,"id"),J(t),Z(t,v("getClientRects,getBoundingClientRect"))},Be=(e,t)=>{const r={};v("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{r[e]={get(){let r,n=B(this,4);return"string"!=typeof n&&(r=ue(this,["href"]),F(this,4,r),n=new URL(r)[e]),Ne(t,n,null)[e]},set(r){let n;if("href"===e)if((e=>{try{return new URL(e),!0}catch(e){return!1}})(r))n=new URL(r);else{const e=t.E.href;n=Ne(t,e,null),n.href=new URL(r+"",n.href)}else n=Ne(t,this.href,null),n[e]=r;F(this,4,n.href),de(this,["href"],n.href)}}})),U(e,r)},Fe=(e,t)=>{const r={contentDocument:{get(){return Ve(this).n}},contentWindow:{get(){return Ve(this).U}},src:{get(){let e=B(this,0);return e&&e.startsWith("javascript:")?e:(e=Ve(this).E.href,e.startsWith("about:")?"":e)},set(e){if(e)if(e.startsWith("javascript:"))F(this,0,e);else if(!e.startsWith("about:")){let t,r=new XMLHttpRequest,n=Ve(this);n.E.href=e=Le(n,e,"iframe"),n.y=1,F(this,1,void 0),r.open("GET",e,!1),r.send(),t=r.status,t>199&&t<300?(de(this,["srcdoc"],`<base href="${e}">`+r.responseText.replace(/<script>/g,\\\'<script type="text/partytown">\\\').replace(/<script /g,\\\'<script type="text/partytown" \\\').replace(/text\\\\/javascript/g,P)+xe()),ce(!0),h.K([7,n.V])):(F(this,1,t),n.y=0)}}},...He};U(e,r)},Ve=e=>{const n=e[r];return m[n]||Ge({V:n,J:e[t],S:ue(e,["src"])||y},!0),m[n]},ze=e=>{const t=(e,t)=>{const{a:r,b:n,c:i,d:s,e:o,f:a}=he(e,[t],R);return new DOMMatrixReadOnly([r,n,i,s,o,a])},r={...e,getCTM:{value:function(){return t(this,"getCTM")}},getScreenCTM:{value:function(){return t(this,"getScreenCTM")}}};U(e,r)},Xe=(a,l,$,c,u,f)=>{let w,b,T;const M=class{constructor(e,l,$,c,u){this[t]=e||a,this[r]=l||w||A(),this[s]=$||[],this[n]=c||b,this[i]=u||T,this[o]={},w=b=T=void 0}},E=new(k(class extends URL{assign(){}reload(){}replace(){}},"Location"))($),L=E.origin===h.I||E.origin===y,x=l===a,C={},R=()=>{let e,t,r=[];for(e in m)t=m[e],t.J!==a||t.B||r.push(t);return r},P=k(class extends M{constructor(){super(a,a);let n,i,o=this,$=0,d=()=>{$||((h.u||(e.g=[ue,de,he,pe,U,A,t,r,s],h.t(S("partytown-media.js?v="+Ie)),h.u=e.f,delete e.f),h.u)(M,Y,C,o,De),$=1)},m={},y=(e,t,r)=>{ke.includes(e)&&d();const n=m[e]?m[e]:e.includes("-")?m.UNKNOWN:m.I;return w=t,b=e,T=r,new n};var N,H;if(o.Window=P,o.name=name+a,Oe(o,C,M),ye(o,M,"CSSStyleDeclaration"),((e,t,r)=>{e[r]=k(class extends t{now(){return performance.now()}},r)})(o,M,"Performance"),((e,t)=>{const r="customElements",n=new Map;e.customElements={define(i,s,o){n.set(i,s),t[i.toUpperCase()]=s;const a=[s.name,s.observedAttributes];he(e,[r,"define"],[i,a,o])},get:t=>n.get(t)||he(e,[r,"get"],[t]),whenDefined:t=>n.has(t)?Promise.resolve():he(e,[r,"whenDefined"],[t]),upgrade:t=>he(e,[r,"upgrade"],[t])}})(o,m),h.v.map((([e,t,n,i,l])=>{const $=qe[e]?q:"EventTarget"===t?Y:"Object"===t?M:o[t],c=o[e]=k(12===i?class extends M{constructor(...t){super(),pe(this,e,t)}}:o[e]||class extends ${},e);l&&(m[l]=c),n.map((([e,t,n])=>{e in c.prototype||e in $.prototype||("string"==typeof t?D(c,e,{get(){if(!_(this,e)){const n=this[r],i=[...this[s],e],l=o[t];l&&F(this,e,new l(a,n,i))}return B(this,e)},set(t){F(this,e,t)}}):5===t?j(c,e,(function(...t){return he(this,[e],t)})):t>0&&(void 0!==n?j(c,e,n):D(c,e,{get(){return ue(this,[e])},set(t){return de(this,[e],t)}})))}))})),v("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((t=>{delete P.prototype[t],t in o||(n=e[t],null!=n&&(o[t]="function"!=typeof n||n.toString().startsWith("class")?n:n.bind(e)))})),Object.getOwnPropertyNames(e).map((t=>{t in o||(o[t]=e[t])})),De.map((e=>O(o,e,{get:()=>(d(),o[e])}))),"trustedTypes"in e&&(o.trustedTypes=e.trustedTypes),_e(o.Element,o.HTMLElement),Ue(o.Document,C,f),N=o.DocumentFragment,z(N,11),X(N,I),Be(o.HTMLAnchorElement,C),H=o.HTMLFormElement,U(H,{}),G(H,"elements"),Fe(o.HTMLIFrameElement),Re(o.HTMLScriptElement,C),ze(o.SVGGraphicsElement),je(o.HTMLHeadElement,C),je(o.HTMLBodyElement,C),((e,t)=>{U(e,{parentElement:{value:null},parentNode:{get:()=>t.n}})})(o.HTMLHtmlElement,C),ve(o,"CSSStyleSheet"),z(o.Comment,8),z(o.DocumentType,10),Object.assign(C,{V:a,J:l,U:new Proxy(o,{get:(e,t)=>{var r;if("string"!=typeof t||isNaN(t))return(null===(r=h.i.mainWindowAccessors)||void 0===r?void 0:r.includes(t))?ue(this,[t]):e[t];{let e=R()[t];return e?e.U:void 0}},has:()=>!0}),n:y("#document",a+".d"),o:y("HTML",a+".e"),s:y("HEAD",a+".h"),e:y("BODY",a+".b"),E:E,T:c,A:L,B:x,k:y}),o.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),o.cancelAnimationFrame=e=>clearTimeout(e),o.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),o.cancelIdleCallback=e=>clearTimeout(e),me(o,"localStorage",p,L,C),me(o,"sessionStorage",g,L,C),L||(o.indexeddb=void 0),u)i={},o.history={pushState(e){i=e},replaceState(e){i=e},get state(){return i},length:0},o.indexeddb=void 0;else{const e=o.history.pushState.bind(o.history),t=o.history.replaceState.bind(o.history);o.history.pushState=(t,r,n)=>{!1!==C.$propagateHistoryChange$&&e(t,r,n)},o.history.replaceState=(e,r,n)=>{!1!==C.$propagateHistoryChange$&&t(e,r,n)}}o.Worker=void 0}addEventListener(...e){"load"===e[0]?C.N&&setTimeout((()=>e[1]({type:"load"}))):he(this,["addEventListener"],e,2)}get body(){return C.e}get document(){return C.n}get documentElement(){return C.o}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(Le(C,e,"fetch"),t)}get frames(){return C.U}get frameElement(){return x?null:V(l,a,"IFRAME")}get globalThis(){return C.U}get head(){return C.s}get length(){return R().length}get location(){return E}set location(e){E.href=e+""}get Image(){return Ce(C)}get navigator(){return(e=>{let t,r={sendBeacon:(t,r)=>{try{return fetch(Le(e,t,null),{method:"POST",body:r,mode:"no-cors",keepalive:!0}),!0}catch(e){return console.error(e),!1}}};for(t in navigator)r[t]=navigator[t];return r})(C)}get origin(){return E.origin}set origin(e){}get parent(){for(let e in m)if(m[e].V===l)return m[e].U;return C.U}postMessage(...e){m[e[0]]&&(H(d)>50&&d.splice(0,5),d.push({V:e[0],m:JSON.stringify(e[1])}),e=e.slice(1)),he(this,["postMessage"],e,3)}get self(){return C.U}get top(){for(let e in m)if(m[e].B)return m[e].U;return C.U}get window(){return C.U}get XMLHttpRequest(){const e=XMLHttpRequest,t=String(e),r=k(class extends e{open(...e){e[1]=Le(C,e[1],"xhr"),super.open(...e)}set withCredentials(e){}toString(){return t}},W(e));return r.prototype.constructor.toString=()=>t,r}},"Window"),q=class extends M{constructor(e,t,r,n){return super(e,t,r,n),new Proxy(this,{get:(e,t)=>ue(e,[t]),set:(e,t,r)=>(de(e,[t],r),!0)})}},Y=class extends M{};return N.map((e=>Y.prototype[e]=function(...t){return he(this,[e],t,2)})),G(P,"devicePixelRatio"),J(P),Z(P,["getComputedStyle"]),new P,C},qe={DOMStringMap:1,NamedNodeMap:1},Ge=({V:e,J:t,S:r,T:n},i,s)=>(m[e]||(m[e]=Xe(e,t,r,n,i,s)),h.K([7,e]),m[e]),Je=[],Ze=t=>{const r=t.data,n=r[0],i=r[1];if(h.x)if(7===n)(async e=>{let t,r=e.V,n=e.w,i=V(r,n,"SCRIPT"),s=e.j,o=e.S,a=e.H,l="",$=m[r];if(o)try{o=Ne($,o,"script")+"",F(i,4,o),t=await fetch(o),t.ok?(s=await t.text(),$.l=n,Me($,s,a||o),Ee(i,"load")):(l=t.statusText,Ee(i,"error"))}catch(e){console.error(e),l=String(e.stack||e),Ee(i,"error")}else s&&(l=Te($,n,s,0,l));$.l="",h.K([6,r,n,l])})(i);else if(9===n)(({V:e,w:t,L:r,R:n,b:i})=>{if(c[r])try{c[r].apply(te(e,t,[],n),te(e,t,[],i))}catch(e){console.error(e)}})(i);else if(10===n)(({V:e,q:t,b:r})=>{try{let n=m[e].U,i=0,s=H(t);for(;i<s;i++)i+1<s?n=n[t[i]]:n[t[i]].apply(n,te(null,e,[],r))}catch(e){console.error(e)}})(i);else if(5===n)Ge(i);else if(8===n)m[i].x=1,m[i].y=0;else if(14===n)m[i].T=r[2];else if(13===n){const e=i.V,t=m[e];t.E.href=i.url,function(e,t,r){const n=t.U.history;switch(r.type){case 0:t.$propagateHistoryChange$=!1;try{n.pushState(r.state,"",r.newUrl)}catch(e){}t.$propagateHistoryChange$=!0;break;case 1:t.$propagateHistoryChange$=!1;try{n.replaceState(r.state,"",r.newUrl)}catch(e){}t.$propagateHistoryChange$=!0}}(i.V,t,i)}else 15===n&&((e,t,r,n,i)=>{const s=V(t,r);s&&"function"==typeof s[n]&&s[n].apply(s,i)})(...r);else 1===n?((t=>{const r=h.i=JSON.parse(t.i),n=t.I;h.t=importScripts.bind(e),h.v=t.v,h.C=t.C,h.I=n,h.K=postMessage.bind(e),h.P=t.P,p.set(n,t.D),g.set(n,t.O),e.importScripts=void 0,delete e.postMessage,delete e.WorkerGlobalScope,v("resolveUrl,get,set,apply").map((e=>{r[e]&&(r[e]=new Function("return "+r[e])())}))})(i),h.K([2])):3===n?(h.v=[...h.v,...i],h.x=1,h.K([4]),[...Je].map(Ze),Je.length=0):Je.push(t)};e.onmessage=Ze,postMessage([0])})(self);\\n\'],{type:"text/javascript"})),{name:"Partytown 🎉"}),z.onmessage=t=>{const r=t.data;12===r[0]?H(z,r[1]):e(z,r)},v.addEventListener("pt1",(e=>O(z,f(e.detail.frameElement),e.detail))))}))})(window);\n<\/script></head></html>')):i.endsWith("proxytown")&&n.respondWith((n=>new Promise((async s=>{const i=await n.clone().json(),o=await(r=>new Promise((async n=>{const s=[...await self.clients.matchAll()].sort(((e,t)=>e.url>t.url?-1:e.url<t.url?1:0))[0];if(s){const i=[n,setTimeout((()=>{e.delete(r.F),n(t(r,"Timeout"))}),1e4)];e.set(r.F,i),s.postMessage(r)}else n(t(r,"NoParty"))})))(i);s(r(JSON.stringify(o),"application/json"))})))(s))};
