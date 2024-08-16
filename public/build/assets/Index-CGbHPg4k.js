import{r as p,j as e,F as o,B as g}from"./app-CCboV3SP.js";import{A as u,S as j,B as n,I as y,F as b}from"./AppLayout-cfYDttSl.js";import{G as s}from"./Grid-BUoyOZe3.js";import{I as S}from"./IconPlus-C3uI0nOB.js";import{S as T}from"./Select-CevkZdF3.js";import{T as f}from"./TextInput-ay67kmjZ.js";import{I as w}from"./IconSearch-DHWxYALG.js";import{T as C}from"./Title-DE08w-Iq.js";import{T as t}from"./Table-BfxcRzZ8.js";import"./get-base-value-CnLxV4bD.js";import"./Input-pW-xxAEB.js";import"./CheckIcon-Czz48l7q.js";import"./ScrollArea-OpRNetTp.js";import"./InputBase-_-QgWSU9.js";const G=r=>{const[l,m]=p.useState(""),[c,d]=p.useState(""),h=r.statements.filter(a=>a.name.toLowerCase().includes(l.toLowerCase())&&(c===""||a.basic_trait.id===c)),x=["#","Kategori Soal","Pertanyaan","Opsi"];return e.jsx(u,{title:"Pertanyaan",activeNav:"Soal",authed:r.auth.user,meta:r.meta,children:e.jsxs(j,{gap:32,children:[e.jsxs(s,{grow:!0,children:[e.jsx(s.Col,{span:{base:6,sm:3},children:e.jsx(n,{fullWidth:!0,px:16,styles:{section:{marginRight:16}},h:48,radius:32,leftSection:e.jsx(S,{}),onClick:()=>o.get(route("statements.create",{indicator:r.indicator})),children:"Tambah Pertanyaan"})}),e.jsx(s.Col,{span:{base:6,sm:3},children:e.jsx(T,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(y,{}),clearable:!0,searchable:!0,nothingFoundMessage:"Tidak ada kategori soal",checkIconPosition:"right",placeholder:"Kategori Soal",data:Array.from(new Set(h.map(a=>JSON.stringify({label:a.basic_trait.name,value:a.basic_trait.id})))).map(a=>JSON.parse(a)).sort((a,i)=>a.label.localeCompare(i.label)),onChange:a=>{d(a||"")}})}),e.jsx(s.Col,{span:{base:6,sm:3},children:e.jsx(f,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(w,{}),placeholder:"Cari pertanyaan...",value:l,onChange:a=>m(a.currentTarget.value)})})]}),e.jsxs(C,{align:"center",children:['"',r.indicator.name,'"']}),e.jsx(g,{style:{borderRadius:20,border:"1px solid #E9ECEF"},children:e.jsx(t.ScrollContainer,{children:e.jsxs(t,{highlightOnHover:!0,withColumnBorders:!0,styles:{table:{borderRadius:16},thead:{borderRadius:16}},children:[e.jsx(t.Thead,{h:64,children:e.jsx(t.Tr,{children:x.map((a,i)=>e.jsx(t.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:a},i))})}),e.jsx(t.Tbody,{children:h.map((a,i)=>e.jsxs(t.Tr,{h:64,children:[e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:i+1}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:a.basic_trait.name}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:a.name}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsxs(b,{gap:16,children:[e.jsx(n,{variant:"outline",color:"yellow",px:16,h:48,radius:32,styles:{section:{marginRight:16}},onClick:()=>o.get(route("statements.edit",{statement:a,indicator:r.indicator})),children:"Ubah"}),e.jsx(n,{variant:"outline",color:"red",px:16,h:48,radius:32,styles:{section:{marginRight:16}},onClick:()=>o.delete(route("statements.destroy",{statement:a,indicator:r.indicator})),children:"Hapus"})]})})]},i))})]})})})]})})};export{G as default};
