import{r as p,j as e,F as i,B as u}from"./app-CJZtBH82.js";import{A as x,h as m,B as n,F as j}from"./AppLayout-D9-29hHX.js";import{S as g}from"./Stack-BYbflGZs.js";import{S as y}from"./SimpleGrid-CqpyIJFX.js";import{T}from"./TextInput-Ck-y8Io8.js";import{I as w}from"./IconPlus-PiToZjOP.js";import{T as r}from"./Table-wLgEtfHV.js";import"./get-base-value-C5hP2jTK.js";import"./InputBase-XWcZXW4_.js";import"./Input-4OZHKVck.js";import"./ScrollArea-L0_Y3rbC.js";const k=a=>{const[o,d]=p.useState(""),h=a.guides.filter(t=>t.personality.toLowerCase().includes(o.toLowerCase())),c=a.auth.user.role==="Admin",l=["#","Tipe Kepribadian","Saran Pekerjaan","Saran Pengembangan"];return c&&l.push("Opsi"),e.jsx(x,{title:"Panduan",activeNav:"Panduan",authed:a.auth.user,meta:a.meta,children:e.jsxs(g,{gap:32,children:[e.jsxs(y,{cols:a.auth.user.role==="Admin"&&{base:1,xs:2},grow:!0,justify:"space-between",children:[e.jsx(T,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(m,{}),placeholder:"Cari panduan...",value:o,onChange:t=>d(t.currentTarget.value)}),a.auth.user.role==="Admin"&&e.jsx(n,{px:16,styles:{section:{marginRight:16}},h:48,radius:32,leftSection:e.jsx(w,{}),onClick:()=>i.get(route("guides.create")),children:"Tambah Panduan"})]}),e.jsx(u,{style:{borderRadius:32,border:"1px solid #E9ECEF"},children:e.jsx(r.ScrollContainer,{children:e.jsxs(r,{highlightOnHover:!0,withColumnBorders:!0,children:[e.jsx(r.Thead,{h:64,children:e.jsx(r.Tr,{children:l.map((t,s)=>e.jsx(r.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:t},s))})}),e.jsx(r.Tbody,{children:h.map((t,s)=>e.jsxs(r.Tr,{h:64,children:[e.jsx(r.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s+1}),e.jsx(r.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:t.personality}),e.jsx(r.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t.job}})}),e.jsx(r.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t.development}})}),a.auth.user.role==="Admin"&&e.jsx(r.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsxs(j,{gap:16,children:[e.jsx(n,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",color:"yellow",onClick:()=>i.get(route("guides.edit",t)),children:"Ubah"}),e.jsx(n,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",color:"red",onClick:()=>i.delete(route("guides.destroy",t)),children:"Hapus"})]})})]},s))})]})})})]})})};export{k as default};
