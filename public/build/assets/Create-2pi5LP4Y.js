import{f as $,u as N,c as M,j as o,U as ue,e as U,k as V,n as X,B as P,X as Y,l as T,g as z,i as Z,$ as me,r as D,W as pe}from"./app-CCboV3SP.js";import{r as he,e as ee,d as fe,A as ve,f as xe,G as J,B as L,w as ge}from"./AppLayout-cfYDttSl.js";import{P as E}from"./Progress-PTgt_1wP.js";import{C as ye}from"./Center-CC-xmtGY.js";import{T as we}from"./Title-DE08w-Iq.js";import{L as Q}from"./List-BG5N57_p.js";import{g as oe}from"./get-auto-contrast-value-Da6zqqWm.js";import{I as je,a as Re}from"./InputsGroupFieldset-D5RJPj_S.js";import{c as re,I as se}from"./Input-pW-xxAEB.js";import{I as be,a as Ce}from"./IconArrowNarrowRight-CkF-1L98.js";const[Ie,te]=re(),[_e,Se]=re();var ae={card:"m_9dc8ae12"};const ke={withBorder:!0},Ae=U((e,{radius:n})=>({card:{"--card-radius":V(n)}})),W=$((e,n)=>{const a=N("RadioCard",ke,e),{classNames:t,className:c,style:m,styles:d,unstyled:s,vars:r,checked:i,mod:l,withBorder:R,value:g,onClick:y,name:v,onKeyDown:w,...k}=a,_=M({name:"RadioCard",classes:ae,props:a,className:c,style:m,classNames:t,styles:d,unstyled:s,vars:r,varsResolver:Ae,rootSelector:"card"}),{dir:j}=he(),h=te(),b=typeof i=="boolean"?i:(h==null?void 0:h.value)===g||!1,C=v||(h==null?void 0:h.name),A=u=>{if(w==null||w(u),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(u.nativeEvent.code)){u.preventDefault();const f=Array.from(document.querySelectorAll(`[role="radio"][name="${C||"__mantine"}"]`)),S=f.findIndex(G=>G===u.target),x=S+1>=f.length?0:S+1,p=S-1<0?f.length-1:S-1;u.nativeEvent.code==="ArrowDown"&&(f[x].focus(),f[x].click()),u.nativeEvent.code==="ArrowUp"&&(f[p].focus(),f[p].click()),u.nativeEvent.code==="ArrowLeft"&&(f[j==="ltr"?p:x].focus(),f[j==="ltr"?p:x].click()),u.nativeEvent.code==="ArrowRight"&&(f[j==="ltr"?x:p].focus(),f[j==="ltr"?x:p].click())}};return o.jsx(_e,{value:{checked:b},children:o.jsx(ue,{ref:n,mod:[{"with-border":R,checked:b},l],..._("card"),...k,role:"radio","aria-checked":b,name:C,onClick:u=>{y==null||y(u),h==null||h.onChange(g||"")},onKeyDown:A})})});W.displayName="@mantine/core/RadioCard";W.classes=ae;const Pe={},O=$((e,n)=>{const{value:a,defaultValue:t,onChange:c,size:m,wrapperProps:d,children:s,name:r,readOnly:i,...l}=N("RadioGroup",Pe,e),R=ee(r),[g,y]=fe({value:a,defaultValue:t,finalValue:"",onChange:c}),v=w=>!i&&y(typeof w=="string"?w:w.currentTarget.value);return o.jsx(Ie,{value:{value:g,onChange:v,size:m,name:R},children:o.jsx(se.Wrapper,{size:m,ref:n,...d,...l,labelElement:"div",__staticSelector:"RadioGroup",children:o.jsx(je,{role:"radiogroup",children:s})})})});O.classes=se.Wrapper.classes;O.displayName="@mantine/core/RadioGroup";function ie({size:e,style:n,...a}){return o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:X(e),height:X(e),...n},"aria-hidden":!0,...a,children:o.jsx("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var ne={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};const Te={icon:ie},ze=U((e,{radius:n,color:a,size:t,iconColor:c,variant:m,autoContrast:d})=>{const s=Y({color:a||e.primaryColor,theme:e}),r=s.isThemeColor&&s.shade===void 0?`var(--mantine-color-${s.color}-outline)`:s.color;return{indicator:{"--radio-size":T(t,"radio-size"),"--radio-radius":n===void 0?void 0:V(n),"--radio-color":m==="outline"?r:z(a,e),"--radio-icon-size":T(t,"radio-icon-size"),"--radio-icon-color":c?z(c,e):oe(d,e)?Z({color:a,theme:e,autoContrast:d}):void 0}}}),q=$((e,n)=>{const a=N("RadioIndicator",Te,e),{classNames:t,className:c,style:m,styles:d,unstyled:s,vars:r,icon:i,radius:l,color:R,iconColor:g,autoContrast:y,checked:v,mod:w,variant:k,disabled:_,...j}=a,h=i,b=M({name:"RadioIndicator",classes:ne,props:a,className:c,style:m,classNames:t,styles:d,unstyled:s,vars:r,varsResolver:ze,rootSelector:"indicator"}),C=Se(),A=typeof v=="boolean"?v:(C==null?void 0:C.checked)||!1;return o.jsx(P,{ref:n,...b("indicator",{variant:k}),variant:k,mod:[{checked:A,disabled:_},w],...j,children:o.jsx(h,{...b("icon")})})});q.displayName="@mantine/core/RadioIndicator";q.classes=ne;var ce={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};const $e={labelPosition:"right"},Ne=U((e,{size:n,radius:a,color:t,iconColor:c,variant:m,autoContrast:d})=>{const s=Y({color:t||e.primaryColor,theme:e}),r=s.isThemeColor&&s.shade===void 0?`var(--mantine-color-${s.color}-outline)`:s.color;return{root:{"--radio-size":T(n,"radio-size"),"--radio-radius":a===void 0?void 0:V(a),"--radio-color":m==="outline"?r:z(t,e),"--radio-icon-color":c?z(c,e):oe(d,e)?Z({color:t,theme:e,autoContrast:d}):void 0,"--radio-icon-size":T(n,"radio-icon-size")}}}),I=$((e,n)=>{const a=N("Radio",$e,e),{classNames:t,className:c,style:m,styles:d,unstyled:s,vars:r,id:i,size:l,label:R,labelPosition:g,description:y,error:v,radius:w,color:k,variant:_,disabled:j,wrapperProps:h,icon:b=ie,rootRef:C,iconColor:A,onChange:u,mod:f,...S}=a,x=M({name:"Radio",classes:ce,props:a,className:c,style:m,classNames:t,styles:d,unstyled:s,vars:r,varsResolver:Ne}),p=te(),G=(p==null?void 0:p.size)??l,de=a.size?l:G,{styleProps:le,rest:B}=me(S),F=ee(i),H=p?{checked:p.value===B.value,name:B.name??p.name,onChange:K=>{p.onChange(K),u==null||u(K)}}:{};return o.jsx(Re,{...x("root"),__staticSelector:"Radio",__stylesApiProps:a,id:F,size:de,labelPosition:g,label:R,description:y,error:v,disabled:j,classNames:t,styles:d,unstyled:s,"data-checked":H.checked||void 0,variant:_,ref:C,mod:f,...le,...h,children:o.jsxs(P,{...x("inner"),mod:{"label-position":g},children:[o.jsx(P,{...x("radio",{focusable:!0,variant:_}),onChange:u,...B,...H,component:"input",mod:{error:!!v},ref:n,id:F,disabled:j,type:"radio"}),o.jsx(b,{...x("icon"),"aria-hidden":!0})]})})});I.classes=ce;I.displayName="@mantine/core/Radio";I.Group=O;I.Card=W;I.Indicator=q;const qe=e=>{console.log(e);const[n,a]=D.useState(0),[t,c]=D.useState(0),m=r=>{const i=Math.floor(r/3600),l=Math.floor((r-i*3600)/60),R=r-i*3600-l*60,g=i.toString().padStart(2,"0"),y=l.toString().padStart(2,"0"),v=R.toString().padStart(2,"0");return`${g}:${y}:${v}`},d=e.statements.map(r=>({statement_id:r.id,choice_id:""})),s=pe({time:n,answers:d});return D.useEffect(()=>{const r=setInterval(()=>{a(i=>{const l=i+1;return s.setData("time",l),l})},1e3);return()=>clearInterval(r)},[n,s]),o.jsx("form",{onSubmit:r=>{r.preventDefault(),s.post(route("tests.store"))},children:o.jsxs(ve,{title:"Tes MBTI",activeNav:"Tes MBTI",authed:e.auth.user,meta:e.meta,children:[o.jsxs(P,{pos:"sticky",top:80,py:16,bg:"white",style:{zIndex:2},children:[o.jsx(E.Root,{radius:"xl",size:32,mb:16,children:o.jsx(E.Section,{value:100/e.indicators.length*(t+1),children:o.jsxs(E.Label,{children:[100/e.indicators.length*(t+1),"%"]})})}),o.jsxs(xe,{bg:"white",style:{zIndex:2},mb:32,children:["Waktu: ",m(n)]})]}),o.jsx(ye,{bg:"blue.2",mb:32,py:16,style:{borderRadius:20},children:o.jsx(we,{align:"center",children:e.indicators[t].name})}),o.jsx(Q,{style:{display:"flex",flexDirection:"column",gap:32},type:"ordered",children:e.indicators[t].statements.map(r=>o.jsx(Q.Item,{style:{border:"1px solid #e1e1e1",borderRadius:20,padding:16},children:o.jsx(I.Group,{label:r.name,withAsterisk:!0,onChange:i=>{s.setData("answers",s.data.answers.map(l=>l.statement_id===r.id?{statement_id:r.id,choice_id:i}:l))},value:s.data.answers.find(i=>i.statement_id===r.id).choice_id,children:o.jsx(J,{mt:"xs",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:16},children:e.choices.map(i=>o.jsx(I,{value:i.id,label:i.name},i.id))})})},r.id))}),o.jsxs(J,{mt:32,justify:"center",children:[t>0&&o.jsx(L,{variant:"subtle",px:16,h:48,radius:32,styles:{section:{marginRight:16}},leftSection:o.jsx(be,{}),onClick:()=>{c(t-1),window.scrollTo(0,0)},children:"Sebelumnya"}),e.indicators.length-1===t?o.jsx(L,{px:16,h:48,radius:32,variant:"subtle",rightSection:o.jsx(ge,{}),styles:{section:{marginLeft:16}},color:"red",type:"submit",disabled:s.data.answers.some(r=>r.choice_id===""),children:"Selesai"}):o.jsx(L,{px:16,h:48,radius:32,variant:"subtle",rightSection:o.jsx(Ce,{}),styles:{section:{marginLeft:16}},onClick:()=>{c(t+1),window.scrollTo(0,0)},children:"Selanjutnya"})]})]})})};export{qe as Create,qe as default};
