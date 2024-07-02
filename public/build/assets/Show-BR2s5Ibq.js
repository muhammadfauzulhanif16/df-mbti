import{W as b,r as w,j as e,B as n}from"./app-CJZtBH82.js";import{A as S,g as s,F as o,B as m,G as y,I as _}from"./AppLayout-D9-29hHX.js";import{T as u}from"./Title-C1HquksU.js";import{S as r}from"./Stack-BYbflGZs.js";import{P as g}from"./Progress-ByPJRkfb.js";import{S as k}from"./SimpleGrid-CqpyIJFX.js";import{D as v}from"./Divider-BexveaR_.js";import{I as T}from"./IconPrinter-D-EIZ_yz.js";import{I as M,a as P}from"./IconArrowNarrowRight-DGNZBsw9.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./get-base-value-C5hP2jTK.js";const I="/unsada.png",A=a=>{console.log(a);const l=b({full_name:a.auth.user.full_name,id_number:a.auth.user.id_number,created_at:new Date(a.test.created_at).toLocaleString("id",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),time:a.test.time,personality:a.test.personality,description:a.personality.description,job:a.personality.job,detail:a.personality.detail}),[d,f]=w.useState(0),[x,p]=w.useState(!1);return e.jsxs(S,{title:"Tes MBTI",activeNav:"Tes MBTI",authed:a.auth.user,isPrint:x,children:[d===0?e.jsxs(n,{children:[e.jsx(u,{align:"center",mb:32,children:a.test.personality}),e.jsx(r,{gap:24,children:a.indicators.map((i,c)=>e.jsxs(r,{align:"center",gap:16,children:[e.jsxs(s,{fz:20,children:['"',i.name,'"']}),e.jsxs(o,{w:"100%",justify:"center",align:"center",gap:16,children:[e.jsxs(s,{fw:600,children:[(i.basic_traits[0].totalValue/i.totalValue*100).toFixed(1),"%"]}),e.jsx(g.Root,{size:32,radius:"xl",w:"100%",children:i.basic_traits.map((t,h)=>e.jsx(g.Section,{value:t.totalValue/i.totalValue*100,color:h%2===0?"cyan":"pink",children:e.jsx(g.Label,{style:{lineHeight:"32px"},fz:16,children:t.name})},h))}),e.jsxs(s,{fw:600,children:[(i.basic_traits[1].totalValue/i.totalValue*100).toFixed(1),"%"]})]})]},c))})]}):a.auth.user.role!=="Mahasiswa"&&d===1?e.jsxs(n,{children:[e.jsx(u,{size:30,align:"center",mb:32,children:"Hasil Tipe Kepribadian"}),e.jsx(r,{children:a.indicators.map(i=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsxs(s,{align:"center",fz:20,children:['"',i.name,'"']}),e.jsx(k,{cols:2,gap:16,children:i.basic_traits.map((c,t)=>e.jsxs(r,{align:t===1?"end":"start",children:[e.jsxs(s,{p:8,children:["Hasil ",c.name]}),c.statements.map((h,j)=>e.jsxs(o,{gap:16,children:[t===0&&e.jsxs(s,{children:[j+1,"."]}),e.jsxs(r,{align:t===1&&"end",children:[e.jsx(s,{align:t===1&&"end",children:h.statement.name}),e.jsx(s,{fw:"bold",children:h.choice.name})]}),t===1&&e.jsxs(s,{children:[j+1,"."]})]},j)),e.jsxs(s,{fw:600,p:8,children:["Skor : ",(c.totalValue/i.totalValue*100).toFixed(1),"%"]})]},t))})]},i.id),e.jsx(v,{my:32})]}))})]}):e.jsxs(n,{children:[!x&&a.auth.user.role==="Mahasiswa"&&e.jsx(m,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},leftSection:e.jsx(T,{}),variant:"subtle",onClick:()=>{p(!0),setTimeout(()=>{window.print(),p(!1)},1e3)},children:"Cetak"}),e.jsxs(y,{justify:"space-between",children:[e.jsx(_,{src:I,w:48}),e.jsx(u,{size:30,my:32,children:"Hasil Tipe Kepribadian"}),e.jsx("span",{})]}),e.jsxs(o,{gap:16,children:[e.jsxs(r,{w:"50%",children:[e.jsxs(n,{children:[e.jsx(s,{mb:4,children:"Nama Lengkap : "}),e.jsx(s,{fw:600,children:l.data.full_name})]}),e.jsxs(n,{children:[e.jsx(s,{mb:4,children:"NIM : "}),e.jsx(s,{fw:600,children:l.data.id_number})]}),e.jsxs(n,{children:[e.jsx(s,{mb:4,children:"Tanggal Pengerjaan : "}),e.jsx(s,{fw:600,children:l.data.created_at})]}),e.jsxs(n,{children:[e.jsx(s,{mb:4,children:"Waktu Pengerjaan : "}),e.jsx(s,{fw:600,children:l.data.time})]})]}),e.jsxs(r,{w:"50%",children:[e.jsxs(n,{children:[e.jsx(s,{mb:4,children:"Tipe Kepribadian : "}),e.jsx(s,{fw:600,children:l.data.personality})]}),e.jsxs(n,{children:[e.jsx(s,{mb:4,children:"Deskripsi Kepribadian : "}),e.jsx("div",{style:{fontWeight:600},dangerouslySetInnerHTML:{__html:l.data.description}})]}),e.jsxs(n,{children:[e.jsx(s,{mb:4,children:"Saran Pekerjaan : "}),e.jsx("div",{style:{fontWeight:600},dangerouslySetInnerHTML:{__html:l.data.job}})]})]})]}),e.jsxs(n,{mt:16,children:[e.jsx(s,{mb:4,children:"Rincian Pekerjaan : "}),e.jsx("div",{style:{fontWeight:600},dangerouslySetInnerHTML:{__html:l.data.detail}})]})]}),!x&&e.jsxs(y,{justify:"center",mt:32,children:[d>0&&e.jsx(m,{px:16,h:48,leftSection:e.jsx(M,{}),radius:32,variant:"subtle",onClick:()=>f(d-1),children:"Kembali"}),(a.auth.user.role!=="Mahasiswa"?d<2:d<1)&&e.jsx(m,{px:16,h:48,rightSection:e.jsx(P,{}),radius:32,variant:"subtle",onClick:()=>f(d+1),children:"Selanjutnya"})]})]})};export{A as default};
