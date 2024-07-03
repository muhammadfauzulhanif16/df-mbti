import{r as h,j as e,F as i,B as c}from"./app-Bi4iRz3i.js";import{A as x,b as m,B as n,j as u,F as j,T as y}from"./AppLayout-DvVrcIVI.js";import{S as g}from"./Stack-tdjy2H8Z.js";import{S as w}from"./SimpleGrid-BSbiafp6.js";import{T}from"./TextInput-CbTzzo6s.js";import{I as b}from"./IconPlus-BHM_ey5K.js";import{T as t}from"./Table-D0CQBNYD.js";import"./get-base-value-B1n_MCO3.js";import"./InputBase-BjiFYmuE.js";import"./Input-WWNvzk7o.js";import"./ScrollArea-DI45qYGJ.js";const N=a=>{console.log(a);const[o,l]=h.useState(""),d=a.lecturers.filter(s=>s.user.full_name.toLowerCase().includes(o.toLowerCase())),p=["#","Foto","NIDN","Nama Lengkap","Status","Email","Nomor Telepon","Aksi"];return e.jsx(x,{title:"Dosen",activeNav:"Dosen",authed:a.auth.user,meta:a.meta,children:e.jsxs(g,{gap:32,children:[e.jsxs(w,{cols:{base:1,xs:2},justify:"space-between",children:[e.jsx(T,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(m,{}),placeholder:"Cari dosen...",value:o,onChange:s=>l(s.currentTarget.value)}),e.jsx(n,{px:16,styles:{section:{marginRight:16}},leftSection:e.jsx(b,{}),h:48,radius:32,onClick:()=>i.get(route("lecturers.create")),children:"Tambah Dosen"})]}),e.jsx(c,{style:{borderRadius:32,border:"1px solid #E9ECEF"},children:e.jsx(t.ScrollContainer,{children:e.jsxs(t,{highlightOnHover:!0,withColumnBorders:!0,children:[e.jsx(t.Thead,{h:64,children:e.jsx(t.Tr,{children:p.map((s,r)=>e.jsx(t.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s},r))})}),e.jsx(t.Tbody,{children:d.map((s,r)=>e.jsxs(t.Tr,{h:64,children:[e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:r+1}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsx(u,{src:s.user.avatar,alt:s.user.full_name})}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s.user.id_number}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s.user.full_name}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s.user.role}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s.user.email}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s.user.phone_number}),e.jsx(t.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsxs(j,{gap:16,children:[e.jsx(n,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",color:"yellow",onClick:()=>i.get(route("lecturers.edit",s)),children:"Ubah"}),e.jsx(y,{label:"Tidak bisa dihapus, karena memiliki mahasiswa bimbingan!",disabled:!s.students.length,children:e.jsx(n,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",color:"red",disabled:s.students.length,onClick:()=>i.delete(route("lecturers.destroy",s)),children:"Hapus"})})]})})]},r))})]})})})]})})};export{N as default};