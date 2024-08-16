import{r as p,j as e,F as i,B as c}from"./app-CCboV3SP.js";import{A as x,S as m,B as n,i as u,F as j,T as g}from"./AppLayout-cfYDttSl.js";import{S as y}from"./SimpleGrid-UaDKs_xB.js";import{I as w}from"./IconPlus-C3uI0nOB.js";import{T}from"./TextInput-ay67kmjZ.js";import{I as b}from"./IconSearch-DHWxYALG.js";import{T as a}from"./Table-BfxcRzZ8.js";import"./get-base-value-CnLxV4bD.js";import"./InputBase-_-QgWSU9.js";import"./Input-pW-xxAEB.js";import"./ScrollArea-OpRNetTp.js";const N=t=>{console.log(t);const[o,l]=p.useState(""),d=t.lecturers.filter(s=>s.user.full_name.toLowerCase().includes(o.toLowerCase())),h=["#","Foto","NIDN","Nama Lengkap","Email","Nomor Telepon","Opsi"];return e.jsx(x,{title:"Dosen",activeNav:"Dosen",authed:t.auth.user,meta:t.meta,children:e.jsxs(m,{gap:32,children:[e.jsxs(y,{cols:{base:1,xs:2},justify:"space-between",children:[e.jsx(n,{w:320,px:16,styles:{section:{marginRight:16}},leftSection:e.jsx(w,{}),h:48,radius:32,onClick:()=>i.get(route("lecturers.create")),children:"Tambah Dosen"}),e.jsx(T,{w:320,ml:"auto",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(b,{}),placeholder:"Cari dosen...",value:o,onChange:s=>l(s.currentTarget.value)})]}),e.jsx(c,{style:{borderRadius:32,border:"1px solid #E9ECEF"},children:e.jsx(a.ScrollContainer,{children:e.jsxs(a,{highlightOnHover:!0,withColumnBorders:!0,children:[e.jsx(a.Thead,{h:64,children:e.jsx(a.Tr,{children:h.map((s,r)=>e.jsx(a.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s},r))})}),e.jsx(a.Tbody,{children:d.map((s,r)=>e.jsxs(a.Tr,{h:64,children:[e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:r+1}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsx(u,{src:s.user.avatar,alt:s.user.full_name})}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s.user.id_number}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s.user.full_name}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s.user.email}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s.user.phone_number}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsxs(j,{gap:16,children:[e.jsx(n,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",color:"yellow",onClick:()=>i.get(route("lecturers.edit",s)),children:"Ubah"}),e.jsx(g,{label:"Tidak bisa dihapus, karena memiliki mahasiswa bimbingan!",disabled:!s.students.length,children:e.jsx(n,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",color:"red",disabled:s.students.length,onClick:()=>i.delete(route("lecturers.destroy",s)),children:"Hapus"})})]})})]},r))})]})})})]})})};export{N as default};
