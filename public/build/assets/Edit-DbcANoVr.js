import{W as s,j as t,F as n}from"./app-ujya-KCz.js";import{A as o,S as l,h as d,F as m,B as r}from"./AppLayout-uetAMH0A.js";import{T as c}from"./Title-ChwDd3Gz.js";import{T as u}from"./TextInput-RZZTAhZD.js";import"./InputBase-o0xNPV29.js";import"./Input-D_xKmpb8.js";const j=e=>{const a=s({basic_trait_id:e.indicator.basic_trait_id,name:e.indicator.name});return t.jsx("form",{onSubmit:i=>{i.preventDefault(),a.put(route("indicators.update",e.indicator))},children:t.jsx(o,{title:"Ubah Soal",activeNav:"Soal",authed:e.auth.user,meta:e.meta,children:t.jsxs(l,{px:160,children:[t.jsx(c,{align:"center",mb:32,children:"Ubah Data Soal"}),t.jsx(u,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:t.jsx(d,{}),withAsterisk:!0,label:"Nama Soal",value:a.data.name,placeholder:"Masukkan nama soal...",onChange:i=>a.setData("name",i.target.value)}),t.jsxs(m,{mt:24,gap:16,children:[t.jsx(r,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,variant:"outline",color:"red",disabled:a.processing,fullWidth:!0,onClick:()=>n.get(route("indicators.index")),children:"Batal"}),t.jsx(r,{disabled:a.hasErrors||Object.entries(a.data).some(i=>!i),fullWidth:!0,h:48,px:16,styles:{section:{marginRight:12}},radius:32,loading:a.processing,type:"submit",children:"Simpan"})]})]})})})};export{j as default};