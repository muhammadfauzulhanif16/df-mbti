import{W as d,j as e,B as x,F as c}from"./app-CCboV3SP.js";import{A as p,S as j,f as a,g as h,F as m,B as n}from"./AppLayout-cfYDttSl.js";import{R as i,u,S as g,L as b,P as f}from"./index-BLvEtje4.js";import{T as o}from"./Title-DE08w-Iq.js";import{G as l}from"./Grid-BUoyOZe3.js";import{T as k}from"./TextInput-ay67kmjZ.js";import"./ColorSwatch-C0x6AcCf.js";import"./SimpleGrid-UaDKs_xB.js";import"./get-base-value-CnLxV4bD.js";import"./Input-pW-xxAEB.js";import"./clamp-DTmYCdls.js";import"./InputBase-_-QgWSU9.js";const D=r=>{const s=d({name:r.personality.name,description:r.personality.description});return console.log(s.data),e.jsx("form",{onSubmit:t=>{t.preventDefault(),s.put(route("personalities.update",r.personality.id))},children:e.jsx(p,{title:"Tambah Tipe Kepribadian",activeNav:"Kepribadian",authed:r.auth.user,meta:r.meta,children:e.jsxs(j,{px:160,children:[e.jsx(o,{align:"center",mb:32,children:"Ubah Data Tipe Kepribadian"}),e.jsxs(x,{mb:32,children:[e.jsx(o,{order:6,mb:8,children:"Keterangan Nama Tipe Kepribadian:"}),e.jsx(l,{grow:!0,cols:r.basic_traits.length,children:r.basic_traits.map(t=>e.jsx(l.Col,{children:e.jsxs(a,{children:[t.code," - ",t.name]})}))})]}),e.jsx(k,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(h,{}),value:s.data.name,mb:16,withAsterisk:!0,label:"Nama Tipe Kepribadian",placeholder:"Masukkan nama tipe kepribadian...",onChange:t=>s.setData("name",t.target.value)}),e.jsx(a,{fz:14,children:"Deskripsi"}),e.jsxs(i,{mb:16,styles:{content:{border:"1px solid #dcdcdc"}},editor:u({extensions:[g,b,f.configure({placeholder:"Masukkan deskripsi..."})],content:s.data.description,onUpdate:({editor:t})=>{s.setData("description",t.getHTML())}}),children:[e.jsxs(i.Toolbar,{children:[e.jsxs(i.ControlsGroup,{children:[e.jsx(i.Bold,{}),e.jsx(i.Italic,{}),e.jsx(i.Underline,{}),e.jsx(i.Strikethrough,{}),e.jsx(i.ClearFormatting,{}),e.jsx(i.Highlight,{}),e.jsx(i.Code,{})]}),e.jsxs(i.ControlsGroup,{children:[e.jsx(i.H1,{}),e.jsx(i.H2,{}),e.jsx(i.H3,{}),e.jsx(i.H4,{})]}),e.jsxs(i.ControlsGroup,{children:[e.jsx(i.Blockquote,{}),e.jsx(i.Hr,{}),e.jsx(i.BulletList,{}),e.jsx(i.OrderedList,{}),e.jsx(i.Subscript,{}),e.jsx(i.Superscript,{})]}),e.jsxs(i.ControlsGroup,{children:[e.jsx(i.Link,{}),e.jsx(i.Unlink,{})]}),e.jsxs(i.ControlsGroup,{children:[e.jsx(i.AlignLeft,{}),e.jsx(i.AlignCenter,{}),e.jsx(i.AlignJustify,{}),e.jsx(i.AlignRight,{})]}),e.jsxs(i.ControlsGroup,{children:[e.jsx(i.Undo,{}),e.jsx(i.Redo,{})]})]}),e.jsx(i.Content,{})]}),e.jsxs(m,{mt:24,gap:16,children:[e.jsx(n,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,variant:"outline",color:"red",disabled:s.processing,fullWidth:!0,onClick:()=>c.get(route("personalities.index")),children:"Batal"}),e.jsx(n,{h:48,disabled:s.hasErrors||Object.values(s.data).some(t=>!t),px:16,styles:{section:{marginRight:12}},radius:32,fullWidth:!0,loading:s.processing,type:"submit",children:"Simpan"})]})]})})})};export{D as default};
