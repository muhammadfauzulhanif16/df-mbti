import{r as h,j as e,F as s,B as m}from"./app-Bi4iRz3i.js";import{A as p,B as n,F as x}from"./AppLayout-DvVrcIVI.js";import{S as u}from"./Stack-tdjy2H8Z.js";import{S as j}from"./SimpleGrid-BSbiafp6.js";import{T as g}from"./TextInput-CbTzzo6s.js";import{I as y}from"./IconQuote-B3gkp64V.js";import{I as T}from"./IconPlus-BHM_ey5K.js";import{T as f}from"./Title-Cnohtl0s.js";import{T as t}from"./Table-D0CQBNYD.js";import"./get-base-value-B1n_MCO3.js";import"./InputBase-BjiFYmuE.js";import"./Input-WWNvzk7o.js";import"./ScrollArea-DI45qYGJ.js";const A=a=>{const[o,l]=h.useState("");console.log(a);const c=a.statements.filter(r=>r.name.toLowerCase().includes(o.toLowerCase())),d=["#","Kategori Soal","Konten Pertanyaan","Aksi"];return e.jsx(p,{title:"Pertanyaan",activeNav:"Soal",authed:a.auth.user,meta:a.meta,children:e.jsxs(u,{gap:32,children:[e.jsxs(j,{cols:{base:1,xs:2},justify:"space-between",children:[e.jsx(g,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(y,{}),placeholder:"Cari pertanyaan...",value:o,onChange:r=>l(r.currentTarget.value)}),e.jsx(n,{px:16,styles:{section:{marginRight:16}},h:48,radius:32,leftSection:e.jsx(T,{}),onClick:()=>s.get(route("statements.create",{indicator:a.indicator})),children:"Tambah Pertanyaan"})]}),e.jsxs(f,{align:"center",children:['"',a.indicator.name,'"']}),e.jsx(m,{style:{borderRadius:20,border:"1px solid #E9ECEF"},children:e.jsx(t.ScrollContainer,{children:e.jsxs(t,{highlightOnHover:!0,withColumnBorders:!0,styles:{table:{borderRadius:16},thead:{borderRadius:16}},children:[e.jsx(t.Thead,{h:64,children:e.jsx(t.Tr,{children:d.map((r,i)=>e.jsx(t.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:r},i))})}),e.jsx(t.Tbody,{children:c.map((r,i)=>e.jsxs(t.Tr,{h:64,children:[e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:i+1}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:r.basic_trait.name}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:r.name}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsxs(x,{gap:16,children:[e.jsx(n,{variant:"outline",color:"yellow",px:16,h:48,radius:32,styles:{section:{marginRight:16}},onClick:()=>s.get(route("statements.edit",{statement:r,indicator:a.indicator})),children:"Ubah"}),e.jsx(n,{variant:"outline",color:"red",px:16,h:48,radius:32,styles:{section:{marginRight:16}},onClick:()=>s.delete(route("statements.destroy",{statement:r,indicator:a.indicator})),children:"Hapus"})]})})]},i))})]})})})]})})};export{A as default};