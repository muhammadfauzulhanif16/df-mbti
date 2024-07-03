import{R as fe,r as j,j as te,f as Ue,u as We,b as $e,i as Ze,U as Ie,e as ze,k as Ge,h as He,l as qe}from"./app-Bi4iRz3i.js";import{u as Xe,e as Je,c as Qe}from"./AppLayout-DvVrcIVI.js";import{I as _e}from"./InputBase-BjiFYmuE.js";import{c as xe}from"./clamp-DTmYCdls.js";function Fe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var he;(function(e){e.event="event",e.props="prop"})(he||(he={}));function re(){}function Ye(e){var t,r=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t&&n.length===t.length&&n.every(function(u,s){return u===t[s]})||(t=n,r=e.apply(void 0,n)),r}}function pe(e){return!!(e||"").match(/\d/)}function ce(e){return e==null}function et(e){return typeof e=="number"&&isNaN(e)}function Me(e){return ce(e)||et(e)||typeof e=="number"&&!isFinite(e)}function Oe(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function tt(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function rt(e,t,r){var n=tt(r),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}function at(e){var t=j.useRef(e);t.current=e;var r=j.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t.current.apply(t,n)});return r.current}function De(e,t){t===void 0&&(t=!0);var r=e[0]==="-",n=r&&t;e=e.replace("-","");var a=e.split("."),u=a[0],s=a[1]||"";return{beforeDecimal:u,afterDecimal:s,hasNegation:r,addNegation:n}}function nt(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}function Pe(e,t,r){for(var n="",a=r?"0":"",u=0;u<=t-1;u++)n+=e[u]||a;return n}function Ce(e,t){return Array(t+1).join(e)}function je(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],u=n[1];if(u=Number(u),!u)return r+a;a=a.replace(".","");var s=1+u,w=a.length;return s<0?a="0."+Ce("0",Math.abs(s))+a:s>=w?a=a+Ce("0",s-w):a=(a.substring(0,s)||"0")+"."+a.substring(s),r+a}function Re(e,t,r){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||r)&&t,a=De(e),u=a.beforeDecimal,s=a.afterDecimal,w=a.hasNegation,N=parseFloat("0."+(s||"0")),S=s.length<=t?"0."+s:N.toFixed(t),b=S.split("."),x=u;u&&Number(b[0])&&(x=u.split("").reverse().reduce(function(R,E,g){return R.length>g?(Number(R[0])+Number(E)).toString()+R.substring(1,R.length):E+R},b[0]));var m=Pe(b[1]||"",t,r),p=w?"-":"",f=n?".":"";return""+p+x+f+m}function ue(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var Le=Ye(function(e,t){for(var r=0,n=0,a=e.length,u=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[u-1-n]&&u-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:u-n}}}),it=function(e,t){var r=Math.min(e.selectionStart,t);return{from:{start:r,end:e.selectionEnd},to:{start:r,end:t}}};function ot(e,t,r){return Math.min(Math.max(e,t),r)}function ye(e){return Math.max(e.selectionStart,e.selectionEnd)}function ut(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function lt(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function st(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function ft(e,t,r,n,a,u,s){s===void 0&&(s=st);var w=a.findIndex(function(G){return G}),N=e.slice(0,w);!t&&!r.startsWith(N)&&(t=N,r=N+r,n=n+N.length);for(var S=r.length,b=e.length,x={},m=new Array(S),p=0;p<S;p++){m[p]=-1;for(var f=0,R=b;f<R;f++){var E=s({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:p,formattedValueIndex:f});if(E&&x[f]!==!0){m[p]=f,x[f]=!0;break}}}for(var g=n;g<S&&(m[g]===-1||!u(r[g]));)g++;var M=g===S||m[g]===-1?b:m[g];for(g=n-1;g>0&&m[g]===-1;)g--;var O=g===-1||m[g]===-1?0:m[g]+1;return O>M?M:n-O<M-n?O:M}function Ee(e,t,r,n){var a=e.length;if(t=ot(t,0,a),n==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return t===-1&&(t=a),t}function ct(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=!!(pe(e[r])||pe(e[r-1]));return t}function ke(e,t,r,n,a,u){u===void 0&&(u=re);var s=at(function(f,R){var E,g;return Me(f)?(g="",E=""):typeof f=="number"||R?(g=typeof f=="number"?je(f):f,E=n(g)):(g=a(f,void 0),E=n(g)),{formattedValue:E,numAsString:g}}),w=j.useState(function(){return s(ce(e)?t:e,r)}),N=w[0],S=w[1],b=function(f,R){f.formattedValue!==N.formattedValue&&S({formattedValue:f.formattedValue,numAsString:f.value}),u(f,R)},x=e,m=r;ce(e)&&(x=N.numAsString,m=!0);var p=s(x,m);return j.useMemo(function(){S(p)},[p.formattedValue]),[N,b]}function dt(e){return e.replace(/[^0-9]/g,"")}function vt(e){return e}function mt(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var n=e.customInput,a=e.renderText,u=e.getInputRef,s=e.format;s===void 0&&(s=vt);var w=e.removeFormatting;w===void 0&&(w=dt);var N=e.defaultValue,S=e.valueIsNumericString,b=e.onValueChange,x=e.isAllowed,m=e.onChange;m===void 0&&(m=re);var p=e.onKeyDown;p===void 0&&(p=re);var f=e.onMouseUp;f===void 0&&(f=re);var R=e.onFocus;R===void 0&&(R=re);var E=e.onBlur;E===void 0&&(E=re);var g=e.value,M=e.getCaretBoundary;M===void 0&&(M=ct);var O=e.isValidInputCharacter;O===void 0&&(O=pe);var G=e.isCharacterSame,k=Fe(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),H=ke(g,N,!!S,s,w,b),K=H[0],y=K.formattedValue,L=K.numAsString,U=H[1],Z=j.useRef(),q=j.useRef({formattedValue:y,numAsString:L}),z=function(o,l){q.current={formattedValue:o.formattedValue,numAsString:o.value},U(o,l)},Q=j.useState(!1),ae=Q[0],c=Q[1],d=j.useRef(null),V=j.useRef({setCaretTimeout:null,focusTimeout:null});j.useEffect(function(){return c(!0),function(){clearTimeout(V.current.setCaretTimeout),clearTimeout(V.current.focusTimeout)}},[]);var T=s,_=function(o,l){var v=parseFloat(l);return{formattedValue:o,value:l,floatValue:isNaN(v)?void 0:v}},A=function(o,l,v){o.selectionStart===0&&o.selectionEnd===o.value.length||(ue(o,l),V.current.setCaretTimeout=setTimeout(function(){o.value===v&&o.selectionStart!==l&&ue(o,l)},0))},B=function(o,l,v){return Ee(o,l,M(o),v)},Y=function(o,l,v){var D=M(l),F=ft(l,y,o,v,D,O,G);return F=Ee(l,F,D),F},de=function(o){var l=o.formattedValue;l===void 0&&(l="");var v=o.input,D=o.source,F=o.event,I=o.numAsString,i;if(v){var h=o.inputValue||v.value,P=ye(v);v.value=l,i=Y(h,l,P),i!==void 0&&A(v,i,l)}l!==y&&z(_(l,I),{event:F,source:D})};j.useEffect(function(){var o=q.current,l=o.formattedValue,v=o.numAsString;(y!==l||L!==v)&&z(_(y,L),{event:void 0,source:he.props})},[y,L]);var C=d.current?ye(d.current):void 0,ne=typeof window<"u"?j.useLayoutEffect:j.useEffect;ne(function(){var o=d.current;if(y!==q.current.formattedValue&&o){var l=Y(q.current.formattedValue,y,C);o.value=y,A(o,l,y)}},[y]);var Se=function(o,l,v){var D=l.target,F=Z.current?it(Z.current,D.selectionEnd):Le(y,o),I=Object.assign(Object.assign({},F),{lastValue:y}),i=w(o,I),h=T(i);if(i=w(h,void 0),x&&!x(_(h,i))){var P=l.target,W=ye(P),$=Y(o,y,W);return P.value=y,A(P,$,y),!1}return de({formattedValue:h,numAsString:i,inputValue:o,event:l,source:v,input:l.target}),!0},X=function(o,l){l===void 0&&(l=0);var v=o.selectionStart,D=o.selectionEnd;Z.current={selectionStart:v,selectionEnd:D+l}},ie=function(o){var l=o.target,v=l.value,D=Se(v,o,he.event);D&&m(o),Z.current=void 0},ve=function(o){var l=o.target,v=o.key,D=l.selectionStart,F=l.selectionEnd,I=l.value;I===void 0&&(I="");var i;v==="ArrowLeft"||v==="Backspace"?i=Math.max(D-1,0):v==="ArrowRight"?i=Math.min(D+1,I.length):v==="Delete"&&(i=D);var h=0;v==="Delete"&&D===F&&(h=1);var P=v==="ArrowLeft"||v==="ArrowRight";if(i===void 0||D!==F&&!P){p(o),X(l,h);return}var W=i;if(P){var $=v==="ArrowLeft"?"left":"right";W=B(I,i,$),W!==i&&o.preventDefault()}else v==="Delete"&&!O(I[i])?W=B(I,i,"right"):v==="Backspace"&&!O(I[i])&&(W=B(I,i,"left"));W!==i&&A(l,W,I),p(o),X(l,h)},be=function(o){var l=o.target,v=function(){var D=l.selectionStart,F=l.selectionEnd,I=l.value;if(I===void 0&&(I=""),D===F){var i=B(I,D);i!==D&&A(l,i,I)}};v(),requestAnimationFrame(function(){v()}),f(o),X(l)},le=function(o){o.persist&&o.persist();var l=o.target,v=o.currentTarget;d.current=l,V.current.focusTimeout=setTimeout(function(){var D=l.selectionStart,F=l.selectionEnd,I=l.value;I===void 0&&(I="");var i=B(I,D);i!==D&&!(D===0&&F===I.length)&&A(l,i,I),R(Object.assign(Object.assign({},o),{currentTarget:v}))},0)},me=function(o){d.current=null,clearTimeout(V.current.focusTimeout),clearTimeout(V.current.setCaretTimeout),E(o)},se=ae&&ut()?"numeric":void 0,oe=Object.assign({inputMode:se},k,{type:t,value:y,onChange:ie,onKeyDown:ve,onMouseUp:be,onFocus:le,onBlur:me});if(r==="text")return a?fe.createElement(fe.Fragment,null,a(y,k)||null):fe.createElement("span",Object.assign({},k,{ref:u}),y);if(n){var Ne=n;return fe.createElement(Ne,Object.assign({},oe,{ref:u}))}return fe.createElement("input",Object.assign({},oe,{ref:u}))}function Ae(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;a===void 0&&(a="");var u=t.suffix;u===void 0&&(u="");var s=t.allowNegative,w=t.thousandsGroupStyle;if(w===void 0&&(w="thousand"),e===""||e==="-")return e;var N=we(t),S=N.thousandSeparator,b=N.decimalSeparator,x=r!==0&&e.indexOf(".")!==-1||r&&n,m=De(e,s),p=m.beforeDecimal,f=m.afterDecimal,R=m.addNegation;return r!==void 0&&(f=Pe(f,r,!!n)),S&&(p=rt(p,S,w)),a&&(p=a+p),u&&(f=f+u),R&&(p="-"+p),e=p+(x&&b||"")+f,e}function we(e){var t=e.decimalSeparator;t===void 0&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return r===!0&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function gt(e,t){e===void 0&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),u=n.test(e);return e=e.replace(/-/g,""),a&&!u&&t&&(e="-"+e),e}function ht(e,t){return new RegExp("(^-)|[0-9]|"+Oe(e),"g")}function pt(e,t,r){return e===""?!0:!(t!=null&&t.match(/\d/))&&!(r!=null&&r.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function St(e,t,r){var n;t===void 0&&(t=lt(e));var a=r.allowNegative,u=r.prefix;u===void 0&&(u="");var s=r.suffix;s===void 0&&(s="");var w=r.decimalScale,N=t.from,S=t.to,b=S.start,x=S.end,m=we(r),p=m.allowedDecimalSeparators,f=m.decimalSeparator,R=e[x]===f;if(pe(e)&&(e===u||e===s)&&t.lastValue==="")return e;if(x-b===1&&p.indexOf(e[b])!==-1){var E=w===0?"":f;e=e.substring(0,b)+E+e.substring(b+1,e.length)}var g=function(d,V,T){var _=!1,A=!1;u.startsWith("-")?_=!1:d.startsWith("--")?(_=!1,A=!0):s.startsWith("-")&&d.length===s.length?_=!1:d[0]==="-"&&(_=!0);var B=_?1:0;return A&&(B=2),B&&(d=d.substring(B),V-=B,T-=B),{value:d,start:V,end:T,hasNegation:_}},M=g(e,b,x),O=M.hasNegation;n=M,e=n.value,b=n.start,x=n.end;var G=g(t.lastValue,N.start,N.end),k=G.start,H=G.end,K=G.value,y=e.substring(b,x);e.length&&K.length&&(k>K.length-s.length||H<u.length)&&!(y&&s.startsWith(y))&&(e=K);var L=0;e.startsWith(u)?L+=u.length:b<u.length&&(L=b),e=e.substring(L),x-=L;var U=e.length,Z=e.length-s.length;e.endsWith(s)?U=Z:(x>Z||x>e.length-s.length)&&(U=x),e=e.substring(0,U),e=gt(O?"-"+e:e,a),e=(e.match(ht(f))||[]).join("");var q=e.indexOf(f);e=e.replace(new RegExp(Oe(f),"g"),function(d,V){return V===q?".":""});var z=De(e,a),Q=z.beforeDecimal,ae=z.afterDecimal,c=z.addNegation;return S.end-S.start<N.end-N.start&&Q===""&&R&&!parseFloat(ae)&&(e=c?"-":""),e}function xt(e,t){var r=t.prefix;r===void 0&&(r="");var n=t.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),u=e[0]==="-";a.fill(!1,0,r.length+(u?1:0));var s=e.length;return a.fill(!1,s-n.length+1,s+1),a}function wt(e){var t=we(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;a===void 0&&(a="");var u=e.allowNegative;if(u===void 0&&(u=!0),r===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+r+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&u&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+u+`
    `),u=!1),Object.assign(Object.assign({},e),{allowNegative:u})}function bt(e){e=wt(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,r=e.allowNegative,n=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=re);var u=e.onBlur;u===void 0&&(u=re);var s=e.thousandSeparator,w=e.decimalScale,N=e.fixedDecimalScale,S=e.prefix;S===void 0&&(S="");var b=e.defaultValue,x=e.value,m=e.valueIsNumericString,p=e.onValueChange,f=Fe(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),R=we(e),E=R.decimalSeparator,g=R.allowedDecimalSeparators,M=function(c){return Ae(c,e)},O=function(c,d){return St(c,d,e)},G=ce(x)?b:x,k=m??pt(G,S,t);ce(x)?ce(b)||(k=k||typeof b=="number"):k=k||typeof x=="number";var H=function(c){return Me(c)?c:(typeof c=="number"&&(c=je(c)),k&&typeof w=="number"?Re(c,w,!!N):c)},K=ke(H(x),H(b),!!k,M,O,p),y=K[0],L=y.numAsString,U=y.formattedValue,Z=K[1],q=function(c){var d=c.target,V=c.key,T=d.selectionStart,_=d.selectionEnd,A=d.value;if(A===void 0&&(A=""),(V==="Backspace"||V==="Delete")&&_<S.length){c.preventDefault();return}if(T!==_){a(c);return}V==="Backspace"&&A[0]==="-"&&T===S.length+1&&r&&ue(d,1),w&&N&&(V==="Backspace"&&A[T-1]===E?(ue(d,T-1),c.preventDefault()):V==="Delete"&&A[T]===E&&c.preventDefault()),g!=null&&g.includes(V)&&A[T]===E&&ue(d,T+1);var B=s===!0?",":s;V==="Backspace"&&A[T-1]===B&&ue(d,T-1),V==="Delete"&&A[T]===B&&ue(d,T+1),a(c)},z=function(c){var d=L;if(d.match(/\d/g)||(d=""),n||(d=nt(d)),N&&w&&(d=Re(d,w,N)),d!==L){var V=Ae(d,e);Z({formattedValue:V,value:d,floatValue:parseFloat(d)},{event:c,source:he.event})}u(c)},Q=function(c){return c===E?!0:pe(c)},ae=function(c){var d=c.currentValue,V=c.lastValue,T=c.formattedValue,_=c.currentValueIndex,A=c.formattedValueIndex,B=d[_],Y=T[A],de=Le(V,d),C=de.to;return _>=C.start&&_<C.end&&g&&g.includes(B)&&Y===E?!0:B===Y};return Object.assign(Object.assign({},f),{value:U,valueIsNumericString:!1,isValidInputCharacter:Q,isCharacterSame:ae,onValueChange:Z,format:M,removeFormatting:O,getCaretBoundary:function(c){return xt(c,e)},onKeyDown:q,onBlur:z})}function Nt(e){var t=bt(e);return fe.createElement(mt,Object.assign({},t))}function Be({direction:e,style:t,...r}){return te.jsx("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:e==="up"?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:te.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var Ve={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};const yt=/^(0\.0*|-0(\.0*)?)$/,Vt=/^-?0\d+(\.\d+)?\.?$/;function Dt(e){return(typeof e=="number"?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)}function Te(e,t,r){if(e===void 0)return!0;const n=t===void 0||e>=t,a=r===void 0||e<=r;return n&&a}const It={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},Ct=He((e,{size:t})=>({controls:{"--ni-chevron-size":qe(t,"ni-chevron-size")}})),Ke=Ue((e,t)=>{const r=We("NumberInput",It,e),{className:n,classNames:a,styles:u,unstyled:s,vars:w,onChange:N,onValueChange:S,value:b,defaultValue:x,max:m,min:p,step:f,hideControls:R,rightSection:E,isAllowed:g,clampBehavior:M,onBlur:O,allowDecimal:G,decimalScale:k,onKeyDown:H,onKeyDownCapture:K,handlersRef:y,startValue:L,disabled:U,rightSectionPointerEvents:Z,allowNegative:q,readOnly:z,size:Q,rightSectionWidth:ae,stepHoldInterval:c,stepHoldDelay:d,allowLeadingZeros:V,withKeyboardEvents:T,trimLeadingZeroesOnBlur:_,...A}=r,B=$e({name:"NumberInput",classes:Ve,props:r,classNames:a,styles:u,unstyled:s,vars:w,varsResolver:Ct}),{resolvedClassNames:Y,resolvedStyles:de}=Xe({classNames:a,styles:u,props:r}),[C,ne]=Je({value:b,defaultValue:x,onChange:N}),Se=d!==void 0&&c!==void 0,X=j.useRef(null),ie=j.useRef(null),ve=j.useRef(0),be=(i,h)=>{h.source==="event"&&ne(Dt(i.floatValue)&&!yt.test(i.value)&&!(V&&Vt.test(i.value))?i.floatValue:i.value),S==null||S(i,h)},le=i=>{const h=String(i).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return h?Math.max(0,(h[1]?h[1].length:0)-(h[2]?+h[2]:0)):0},me=i=>{X.current&&typeof i<"u"&&X.current.setSelectionRange(i,i)},se=j.useRef();se.current=()=>{let i;const h=le(C),P=le(f),W=Math.max(h,P),$=10**W;if(typeof C!="number"||Number.isNaN(C))i=xe(L,p,m);else if(m!==void 0){const J=(Math.round(C*$)+Math.round(f*$))/$;i=J<=m?J:m}else i=(Math.round(C*$)+Math.round(f*$))/$;const ee=i.toFixed(W);ne(parseFloat(ee)),S==null||S({floatValue:parseFloat(ee),formattedValue:ee,value:ee},{source:"increment"}),setTimeout(()=>{var J;return me((J=X.current)==null?void 0:J.value.length)},0)};const oe=j.useRef();oe.current=()=>{let i;const h=p!==void 0?p:q?Number.MIN_SAFE_INTEGER:0,P=le(C),W=le(f),$=Math.max(P,W),ee=10**$;if(typeof C!="number"||Number.isNaN(C))i=xe(L,h,m);else{const ge=(Math.round(C*ee)-Math.round(f*ee))/ee;i=h!==void 0&&ge<h?h:ge}const J=i.toFixed($);ne(parseFloat(J)),S==null||S({floatValue:parseFloat(J),formattedValue:J,value:J},{source:"decrement"}),setTimeout(()=>{var ge;return me((ge=X.current)==null?void 0:ge.value.length)},0)};const Ne=i=>{H==null||H(i),!(z||!T)&&(i.key==="ArrowUp"&&(i.preventDefault(),se.current()),i.key==="ArrowDown"&&(i.preventDefault(),oe.current()))},o=i=>{if(K==null||K(i),i.key==="Backspace"){const h=X.current;h.selectionStart===0&&h.selectionStart===h.selectionEnd&&(i.preventDefault(),window.setTimeout(()=>me(0),0))}};Ze(y,{increment:se.current,decrement:oe.current});const l=i=>{i?se.current():oe.current(),ve.current+=1},v=i=>{if(l(i),Se){const h=typeof c=="number"?c:c(ve.current);ie.current=window.setTimeout(()=>v(i),h)}},D=(i,h)=>{var P;i.preventDefault(),(P=X.current)==null||P.focus(),l(h),Se&&(ie.current=window.setTimeout(()=>v(h),d))},F=()=>{ie.current&&window.clearTimeout(ie.current),ie.current=null,ve.current=0},I=te.jsxs("div",{...B("controls"),children:[te.jsx(Ie,{...B("control"),tabIndex:-1,"aria-hidden":!0,disabled:U||typeof C=="number"&&m!==void 0&&C>=m,mod:{direction:"up"},onMouseDown:i=>i.preventDefault(),onPointerDown:i=>{D(i,!0)},onPointerUp:F,onPointerLeave:F,children:te.jsx(Be,{direction:"up"})}),te.jsx(Ie,{...B("control"),tabIndex:-1,"aria-hidden":!0,disabled:U||typeof C=="number"&&p!==void 0&&C<=p,mod:{direction:"down"},onMouseDown:i=>i.preventDefault(),onPointerDown:i=>{D(i,!1)},onPointerUp:F,onPointerLeave:F,children:te.jsx(Be,{direction:"down"})})]});return te.jsx(_e,{component:Nt,allowNegative:q,className:ze(Ve.root,n),size:Q,...A,readOnly:z,disabled:U,value:C,getInputRef:Ge(t,X),onValueChange:be,rightSection:R||z?E:E||I,classNames:Y,styles:de,unstyled:s,__staticSelector:"NumberInput",decimalScale:G?k:0,onKeyDown:Ne,onKeyDownCapture:o,rightSectionPointerEvents:Z??(U?"none":void 0),rightSectionWidth:ae??`var(--ni-right-section-width-${Q||"sm"})`,allowLeadingZeros:V,onBlur:i=>{if(O==null||O(i),M==="blur"&&typeof C=="number"&&xe(C,p,m)!==C&&ne(xe(C,p,m)),_&&typeof C=="string"){const h=C.replace(/^0+/,""),P=parseFloat(h);ne(Number.isNaN(P)?h:P)}},isAllowed:i=>M==="strict"?g?g(i)&&Te(i.floatValue,p,m):Te(i.floatValue,p,m):g?g(i):!0})});Ke.classes={..._e.classes,...Ve};Ke.displayName="@mantine/core/NumberInput";/**
 * @license @tabler/icons-react v3.6.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tt=Qe("outline","weight","IconWeight",[["path",{d:"M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z",key:"svg-1"}]]);export{Tt as I,Ke as N};