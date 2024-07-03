import{W as d,r as u,j as r,F as m}from"./app-Bi4iRz3i.js";import{A as h,B as o,G as g,b as p,F as c}from"./AppLayout-DvVrcIVI.js";import{T as b}from"./Title-Cnohtl0s.js";import{F as f,I as _}from"./IconFileSpreadsheet-CGmY5yso.js";import{D as x}from"./Divider-D1RLm0MB.js";import{R as l}from"./Radio-BgxeNyfA.js";import{G as a}from"./Grid-Cvj4LGHj.js";import{T as i}from"./TextInput-CbTzzo6s.js";import{I as j,a as k}from"./IconPhone-BpjykP3O.js";import{I as v,a as D}from"./IconPassword-CZvr4V63.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./Input-WWNvzk7o.js";import"./get-base-value-B1n_MCO3.js";import"./InputBase-BjiFYmuE.js";const M=n=>{const e=d({file:"",role:"",full_name:"",national_lecturer_id_number:"",phone_number:"",email:"",password:""});return u.useEffect(()=>{e.data.national_lecturer_id_number&&e.setData("password",e.data.national_lecturer_id_number)},[e.data.national_lecturer_id_number]),console.log(e.data),r.jsx("form",{onSubmit:t=>{t.preventDefault(),e.post(route("lecturers.store"))},children:r.jsxs(h,{title:"Tambah Dosen",activeNav:"Dosen",authed:n.auth.user,meta:n.meta,children:[r.jsx(b,{align:"center",mb:32,children:"Tambah Data Dosen"}),r.jsx(f,{variant:"light",color:"green",w:"100%",onChange:t=>e.setData("file",t),accept:"text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",children:t=>r.jsx(o,{px:16,styles:{section:{marginRight:16}},h:48,radius:32,leftSection:r.jsx(_,{}),...t,children:e.data.file?e.data.file.name:"Pilih Berkas Excel"})}),r.jsx(x,{my:24,label:"Atau",labelPosition:"center",styles:{label:{fontSize:14}}}),r.jsx(l.Group,{styles:{label:{marginBottom:8},error:{marginTop:8}},mb:16,label:"Status",withAsterisk:!0,onChange:t=>{e.setData("role",t),t?e.clearErrors("role"):e.setError({role:"Status tidak boleh kosong."})},error:e.errors.role,children:r.jsxs(g,{children:[r.jsx(l,{value:"Kepala Program Studi",label:"Kepala Program Studi"}),r.jsx(l,{value:"Dosen PA",label:"Dosen PA"})]})}),r.jsxs(a,{grow:!0,children:[r.jsx(a.Col,{span:6,children:r.jsx(i,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:r.jsx(p,{}),withAsterisk:!0,label:"Nama Lengkap",placeholder:"Masukkan nama lengkap...",onChange:t=>{e.setData("full_name",t.target.value),t.target.value?e.clearErrors("full_name"):e.setError({full_name:"Nama lengkap tidak boleh kosong."})},value:e.data.full_name,error:e.errors.full_name})}),r.jsx(a.Col,{span:6,children:r.jsx(i,{type:"number",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:r.jsx(j,{}),withAsterisk:!0,value:e.data.national_lecturer_id_number,label:"NIDN",hideControls:!0,placeholder:"Masukkan NIDN...",onChange:t=>{e.setData("national_lecturer_id_number",t.target.value.toString()),t.target.value?e.clearErrors("national_lecturer_id_number"):e.setError({national_lecturer_id_number:"NIDN tidak boleh kosong."}),t.target.value.toString().length<10||t.target.value.toString().length>10?e.setError({national_lecturer_id_number:"NIDN harus 10 digit."}):e.clearErrors("national_lecturer_id_number")},error:e.errors.national_lecturer_id_number})}),r.jsx(a.Col,{span:6,children:r.jsx(i,{type:"number",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:r.jsx(k,{}),withAsterisk:!0,label:"Nomor Telepon",hideControls:!0,placeholder:"Masukkan nomor telepon...",onChange:t=>{e.setData("phone_number",t.target.value.toString()),t.target.value?e.clearErrors("phone_number"):e.setError({phone_number:"Nomor telepon tidak boleh kosong."}),t.target.value.toString().length<10||t.target.value.toString().length>13?e.setError({phone_number:"Nomor telepon harus 10-13 digit."}):e.clearErrors("phone_number")},error:e.errors.phone_number,value:e.data.phone_number})}),r.jsx(a.Col,{span:6,children:r.jsx(i,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},value:e.data.email,leftSection:r.jsx(v,{}),withAsterisk:!0,type:"email",label:"Email",placeholder:"Masukkan email...",onChange:t=>{e.setData("email",t.target.value.toLowerCase()),t.target.value?e.clearErrors("email"):e.setError({email:"Email tidak boleh kosong."})},error:e.errors.email})}),r.jsx(a.Col,{span:6,children:r.jsx(i,{type:"password",styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:r.jsx(D,{}),withAsterisk:!0,disabled:!0,value:e.data.national_lecturer_id_number,label:"Kata Sandi (Bawaan: NIDN)",placeholder:"Masukkan kata sandi..."})})]}),r.jsxs(c,{mt:24,gap:16,children:[r.jsx(o,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,variant:"outline",color:"red",disabled:e.processing,fullWidth:!0,onClick:()=>m.get(route("lecturers.index")),children:"Batal"}),r.jsx(o,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,disabled:e.data.file?!1:e.hasErrors||Object.entries(e.data).some(([t,s])=>t!=="file"&&!s),fullWidth:!0,loading:e.processing,type:"submit",children:"Simpan"})]})]})})};export{M as default};