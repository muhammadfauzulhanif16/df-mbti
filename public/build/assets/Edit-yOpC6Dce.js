import{W as l,j as r,F as d}from"./app-CCboV3SP.js";import{A as u,S as m,a as s,F as g,B as n}from"./AppLayout-cfYDttSl.js";import{T as h}from"./Title-DE08w-Iq.js";import{T as i}from"./TextInput-ay67kmjZ.js";import{I as p,a as b}from"./IconPhone-CVso7yap.js";import{I as c}from"./IconMail-CNBeGnRM.js";import{I as f}from"./IconPassword-BwAG1HB0.js";import{S as _}from"./Select-CevkZdF3.js";import"./InputBase-_-QgWSU9.js";import"./Input-pW-xxAEB.js";import"./CheckIcon-Czz48l7q.js";import"./ScrollArea-OpRNetTp.js";const T=a=>{console.log(a);const e=l({full_name:a.user.full_name,student_id_number:a.user.id_number,phone_number:a.user.phone_number,academic_year:a.user.student.academic_year,email:a.user.email,password:"",supervisor_id:a.user.student.supervisor_id});return r.jsx("form",{onSubmit:t=>{t.preventDefault(),e.put(route("students.update",a.user))},children:r.jsx(u,{title:"Ubah Mahasiswa",activeNav:"Mahasiswa",authed:a.auth.user,meta:a.meta,children:r.jsxs(m,{px:160,children:[r.jsx(h,{align:"center",mb:32,children:"Ubah Data Mahasiswa"}),r.jsx(i,{type:"number",leftSection:r.jsx(p,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},withAsterisk:!0,label:"NIM",hideControls:!0,placeholder:"Masukkan NIM...",onChange:t=>{e.setData({...e.data,student_id_number:t.target.value.toString(),academic_year:t.target.value.substring(0,4)}),t.target.value?e.clearErrors("student_id_number"):e.setError({student_id_number:"NIM tidak boleh kosong."}),t.target.value.toString().length<10||t.target.value.toString().length>10?e.setError({student_id_number:"NIM harus 10 digit."}):e.clearErrors("student_id_number")},error:e.errors.student_id_number,value:e.data.student_id_number}),r.jsx(i,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:r.jsx(s,{}),withAsterisk:!0,label:"Nama Lengkap",placeholder:"Masukkan nama lengkap...",onChange:t=>{e.setData("full_name",t.target.value),t.target.value?e.clearErrors("full_name"):e.setError({full_name:"Nama lengkap tidak boleh kosong."})},error:e.errors.full_name,value:e.data.full_name}),r.jsx(i,{type:"number",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:r.jsx(b,{}),withAsterisk:!0,label:"Nomor Telepon",hideControls:!0,placeholder:"Masukkan nomor telepon...",onChange:t=>{e.setData("phone_number",t.target.value.toString()),t.target.value?e.clearErrors("phone_number"):e.setError({phone_number:"Nomor telepon tidak boleh kosong."}),t.target.value.toString().length<10||t.target.value.toString().length>13?e.setError({phone_number:"Nomor telepon harus 10-13 digit."}):e.clearErrors("phone_number")},error:e.errors.phone_number,value:e.data.phone_number}),r.jsx(i,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:r.jsx(c,{}),withAsterisk:!0,type:"email",label:"Email",placeholder:"Masukkan email...",onChange:t=>{e.setData("email",t.target.value.toLowerCase()),t.target.value?e.clearErrors("email"):e.setError({email:"Email tidak boleh kosong."})},error:e.errors.email,value:e.data.email}),r.jsx(i,{type:"password",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:r.jsx(f,{}),withAsterisk:!0,disabled:!0,value:e.data.student_id_number,label:"Kata Sandi (Bawaan: NIM)",placeholder:"Masukkan kata sandi..."}),r.jsx(_,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:r.jsx(s,{}),label:"Dosen Pembimbing Akademik",placeholder:"Masukkan Dosen Pembimbing Akademik...",clearable:!0,searchable:!0,withAsterisk:!0,nothingFoundMessage:"Tidak ada dosen pembimbing akademik",checkIconPosition:"right",data:a.lecturers.map(t=>({label:t.user.full_name,value:t.user.id})),onChange:t=>{e.setData("supervisor_id",t),t?e.clearErrors("supervisor_id"):e.setError({supervisor_id:"Dosen pembimbing akademik tidak boleh kosong."})},error:e.errors.supervisor_id,value:e.data.supervisor_id}),r.jsxs(g,{mt:24,gap:16,children:[r.jsx(n,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,variant:"outline",color:"red",disabled:e.processing,fullWidth:!0,onClick:()=>d.get(route("students.index")),children:"Batal"}),r.jsx(n,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,disabled:e.data.file?!1:e.hasErrors||Object.entries(e.data).some(([t,o])=>t!=="password"&&!o),fullWidth:!0,loading:e.processing,type:"submit",children:"Simpan"})]})]})})})};export{T as default};
