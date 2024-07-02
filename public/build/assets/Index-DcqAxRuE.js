import{r as c,j as a,F as n,B as w}from"./app-CJZtBH82.js";import{A as T,b as m,T as p,B as o,j as f,F as S}from"./AppLayout-D9-29hHX.js";import{S as C}from"./Stack-BYbflGZs.js";import{G as l}from"./Grid-CR8Byr77.js";import{S as u}from"./Select-Dug6bf4k.js";import{I as k}from"./IconCalendar-DDfhRy1j.js";import{T as v}from"./TextInput-Ck-y8Io8.js";import{I as A}from"./IconPlus-PiToZjOP.js";import{T as i}from"./Table-wLgEtfHV.js";import"./get-base-value-C5hP2jTK.js";import"./Input-4OZHKVck.js";import"./ScrollArea-L0_Y3rbC.js";import"./InputBase-XWcZXW4_.js";const U=r=>{const[h,g]=c.useState(""),[d,x]=c.useState(""),[t,j]=c.useState(r.auth.user.role==="Dosen PA"?r.auth.user.id:"");console.log(t);const b=r.students.filter(e=>(!h||e.user.full_name.toLowerCase().includes(h.toLowerCase()))&&(!d||e.academic_year===d)&&(!t||e.supervisor_id===t)),y=r.auth.user.role==="Admin"?["#","Foto","NIM","Nama Lengkap","Tahun Angkatan","Email","Nomor Telepon","DPA","Aksi"]:["#","Foto","NIM","Nama Lengkap","Email","Tipe Kepribadian","Aksi"];return console.log(r),a.jsx(T,{title:"Mahasiswa",activeNav:"Mahasiswa",authed:r.auth.user,meta:r.meta,children:a.jsxs(C,{gap:32,children:[a.jsxs(l,{grow:!0,children:[a.jsx(l.Col,{span:{base:6,sm:3},children:a.jsx(u,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:a.jsx(k,{}),clearable:!0,searchable:!0,placeholder:"Tahun Angkatan",checkIconPosition:"right",nothingFoundMessage:"Tidak ada tahun ajaran",data:[...new Set(r.students.map(e=>e.academic_year))].sort((e,s)=>s-e),onChange:e=>x(e)})}),a.jsx(l.Col,{span:{base:6,sm:3},children:a.jsx(u,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:a.jsx(m,{}),clearable:!0,searchable:!0,value:t,disabled:r.auth.user.role==="Dosen PA",nothingFoundMessage:"Tidak ada dosen pembimbing",checkIconPosition:"right",placeholder:"Dosen Pembimbing",data:r.lecturers.map(e=>({label:e.user.full_name,value:e.user.id})).sort((e,s)=>e.label.localeCompare(s.label)),onChange:e=>j(e)})}),a.jsx(l.Col,{span:{base:6,sm:3},children:a.jsx(v,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:a.jsx(m,{}),placeholder:"Cari mahasiswa...",value:h,onChange:e=>g(e.currentTarget.value)})}),r.auth.user.role==="Admin"&&a.jsx(l.Col,{span:{base:6,sm:3},children:a.jsx(p,{disabled:!!r.lecturers.length,label:!r.lecturers.length&&"Harap isi data dosen dahulu!",children:a.jsx(o,{px:16,styles:{section:{marginRight:12}},radius:32,h:48,fullWidth:!0,disabled:!r.lecturers.length,leftSection:a.jsx(A,{}),onClick:()=>n.get(route("students.create")),children:"Tambah Mahasiswa"})})})]}),a.jsx(w,{style:{borderRadius:32,border:"1px solid #E9ECEF"},children:a.jsx(i.ScrollContainer,{children:a.jsxs(i,{highlightOnHover:!0,withColumnBorders:!0,children:[a.jsx(i.Thead,{h:64,children:a.jsx(i.Tr,{children:y.map((e,s)=>a.jsx(i.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e},s))})}),a.jsx(i.Tbody,{children:b.map((e,s)=>a.jsxs(i.Tr,{h:64,children:[a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s+1}),a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:a.jsx(f,{src:e.user.avatar,alt:e.user.full_name})}),a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.user.id_number}),a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.user.full_name}),r.auth.user.role==="Admin"&&a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.user.id_number.substring(0,4)}),a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.user.email}),r.auth.user.role==="Admin"?a.jsxs(a.Fragment,{children:[a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.user.phone_number}),a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.supervisor.user.full_name})]}):a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e!=null&&e.tests.length?e==null?void 0:e.tests[0].personality:"-"}),a.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:r.auth.user.role==="Admin"?a.jsxs(S,{gap:16,children:[a.jsx(o,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",color:"yellow",onClick:()=>n.get(route("students.edit",e)),children:"Ubah"}),a.jsx(o,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",color:"red",onClick:()=>n.delete(route("students.destroy",e)),children:"Hapus"})]}):a.jsx(p,{label:!(e!=null&&e.tests.length)&&"Mahasiswa belum melakukan tes kepribadian!",children:a.jsx(o,{disabled:!(e!=null&&e.tests.length),px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",color:"yellow",onClick:()=>n.get(route("students.tests.index",e.user_id)),children:"Detail"})})})]},s))})]})})})]})})};export{U as default};
