import{W as s,j as t,F as n}from"./app-CJZtBH82.js";import{A as l,a as d,F as m,B as r}from"./AppLayout-D9-29hHX.js";import{T as g}from"./Title-C1HquksU.js";import{T as o}from"./TextInput-Ck-y8Io8.js";import{I as h}from"./IconTypography-DKJQUnQ6.js";import"./InputBase-XWcZXW4_.js";import"./Input-4OZHKVck.js";const k=i=>{const a=s({code:i.basic_trait.code,name:i.basic_trait.name});return t.jsx("form",{onSubmit:e=>{e.preventDefault(),a.put(route("basic-traits.update",i.basic_trait))},children:t.jsxs(l,{title:"Tambah Kategori Soal",activeNav:"Kategori Soal",authed:i.auth.user,meta:i.meta,children:[t.jsx(g,{align:"center",mb:32,children:"Ubah Data Kategori Soal"}),t.jsx(o,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:t.jsx(h,{}),withAsterisk:!0,mb:16,value:a.data.code,label:"Kode Kategori Soal",placeholder:"Masukkan kode kategori soal...",onChange:e=>a.setData("code",e.target.value)}),t.jsx(o,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:t.jsx(d,{}),withAsterisk:!0,value:a.data.name,label:"Nama Kategori Soal",placeholder:"Masukkan nama kategori soal...",onChange:e=>a.setData("name",e.target.value)}),t.jsxs(m,{mt:24,gap:16,children:[t.jsx(r,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,variant:"outline",color:"red",disabled:a.processing,fullWidth:!0,onClick:()=>n.get(route("basic-traits.index")),children:"Batal"}),t.jsx(r,{h:48,disabled:a.hasErrors||Object.entries(a.data).some(e=>!e),px:16,styles:{section:{marginRight:12}},radius:32,fullWidth:!0,loading:a.processing,type:"submit",children:"Simpan"})]})]})})};export{k as default};
