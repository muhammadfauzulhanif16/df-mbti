import{f as P,u as y,j as u,B as S,c as _,e as $,l as w,k as A,b as L,g as z,i as B}from"./app-CwtDxK3m.js";import{j as T,u as V}from"./AppLayout-_Gsx7xWj.js";import{g as k}from"./get-auto-contrast-value-Da6zqqWm.js";const[E,R]=T("Progress.Root component was not found in tree");var d={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};const M={},C=P((t,o)=>{const{classNames:s,className:e,style:a,styles:l,vars:g,...r}=y("ProgressLabel",M,t),n=R();return u.jsx(S,{ref:o,...n.getStyles("label",{className:e,style:a,classNames:s,styles:l}),...r})});C.classes=d;C.displayName="@mantine/core/ProgressLabel";const q={},D=$((t,{size:o,radius:s,transitionDuration:e})=>({root:{"--progress-size":w(o,"progress-size"),"--progress-radius":s===void 0?void 0:A(s),"--progress-transition-duration":typeof e=="number"?`${e}ms`:void 0}})),b=P((t,o)=>{const s=y("ProgressRoot",q,t),{classNames:e,className:a,style:l,styles:g,unstyled:r,vars:n,autoContrast:c,transitionDuration:v,...i}=s,m=_({name:"Progress",classes:d,props:s,className:a,style:l,classNames:e,styles:g,unstyled:r,vars:n,varsResolver:D});return u.jsx(E,{value:{getStyles:m,autoContrast:c},children:u.jsx(S,{ref:o,...m("root"),...i})})});b.classes=d;b.displayName="@mantine/core/ProgressRoot";const F={withAria:!0},x=P((t,o)=>{const{classNames:s,className:e,style:a,styles:l,vars:g,value:r,withAria:n,color:c,striped:v,animated:i,mod:m,...N}=y("ProgressSection",F,t),f=R(),h=L(),j=n?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":r,"aria-valuetext":`${r}%`}:{};return u.jsx(S,{ref:o,...f.getStyles("section",{className:e,classNames:s,styles:l,style:a}),...N,...j,mod:[{striped:v||i,animated:i},m],__vars:{"--progress-section-width":`${r}%`,"--progress-section-color":z(c,h),"--progress-label-color":k(f.autoContrast,h)?B({color:c,theme:h,autoContrast:f.autoContrast}):void 0}})});x.classes=d;x.displayName="@mantine/core/ProgressSection";const G={},p=P((t,o)=>{const s=y("Progress",G,t),{value:e,classNames:a,styles:l,vars:g,color:r,striped:n,animated:c,"aria-label":v,...i}=s,{resolvedClassNames:m,resolvedStyles:N}=V({classNames:a,styles:l,props:s});return u.jsx(b,{ref:o,classNames:m,styles:N,vars:g,...i,children:u.jsx(x,{value:e,color:r,striped:n,animated:c,"aria-label":v})})});p.classes=d;p.displayName="@mantine/core/Progress";p.Section=x;p.Root=b;p.Label=C;export{p as P};