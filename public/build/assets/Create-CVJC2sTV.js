import{W as n,j as e,F as o}from"./app-CwtDxK3m.js";import{A as l,S as m,B as i,h as d,F as c}from"./AppLayout-_Gsx7xWj.js";import{T as h}from"./Title-6gjBqTSm.js";import{F as p}from"./FileButton-Ry8_oQ9B.js";import{I as u}from"./IconFileSpreadsheet-BrWdK6o6.js";import{T as f}from"./TextInput-BmhchCCg.js";import"./InputBase-BKhPEznL.js";import"./Input-CtDrG7en.js";const y=s=>{const t=n({file:null,name:""});return e.jsx("form",{onSubmit:a=>{a.preventDefault(),t.post(route("indicators.store"))},children:e.jsx(l,{title:"Tambah Soal",activeNav:"Soal",authed:s.auth.user,meta:s.meta,children:e.jsxs(m,{px:160,children:[e.jsx(h,{align:"center",mb:32,children:"Masukkan Data Soal"}),e.jsx(p,{variant:"light",color:"green",w:320,onChange:a=>t.setData("file",a),accept:"text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",children:a=>e.jsx(i,{px:16,styles:{section:{marginRight:16}},h:48,radius:32,leftSection:e.jsx(u,{}),...a,children:t.data.file?t.data.file.name:"Pilih Berkas Excel"})}),e.jsx(f,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(d,{}),withAsterisk:!0,label:"Nama Soal",placeholder:"Masukkan nama soal...",onChange:a=>t.setData("name",a.target.value)}),e.jsxs(c,{mt:24,gap:16,children:[e.jsx(i,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,variant:"outline",color:"red",disabled:t.processing,fullWidth:!0,onClick:()=>o.get(route("indicators.index")),children:"Batal"}),e.jsx(i,{disabled:t.data.file?!1:t.hasErrors||Object.entries(t.data).some(([a,r])=>a!=="file"&&!r),fullWidth:!0,h:48,px:16,styles:{section:{marginRight:12}},radius:32,loading:t.processing,type:"submit",children:"Simpan"})]})]})})})};export{y as default};