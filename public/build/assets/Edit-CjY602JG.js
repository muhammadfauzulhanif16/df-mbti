import{W as l,j as e,B as d,F as x}from"./app-CCboV3SP.js";import{A as u,S as j,g as r,f as g,F as h,B as n}from"./AppLayout-cfYDttSl.js";import{R as t,u as p,S as c,L as m,P as b}from"./index-BLvEtje4.js";import{T as f}from"./Title-DE08w-Iq.js";import{T as o}from"./TextInput-ay67kmjZ.js";import"./ColorSwatch-C0x6AcCf.js";import"./SimpleGrid-UaDKs_xB.js";import"./get-base-value-CnLxV4bD.js";import"./Input-pW-xxAEB.js";import"./clamp-DTmYCdls.js";import"./InputBase-_-QgWSU9.js";const P=a=>{const s=l({personality:a.guide.personality,development:a.guide.development,job:a.guide.job});return e.jsx("form",{onSubmit:i=>{i.preventDefault(),s.put(route("guides.update",a.guide.id))},children:e.jsx(u,{title:"Ubah Panduan",activeNav:"Panduan",authed:a.auth.user,meta:a.meta,children:e.jsxs(j,{px:160,children:[e.jsx(f,{align:"center",mb:32,children:"Ubah Saran Pengembangan"}),e.jsx(o,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(r,{}),withAsterisk:!0,label:"Tipe Kepribadian",placeholder:"Masukkan tipe kepribadian...",onChange:i=>s.setData("personality",i.target.value),value:s.data.personality}),e.jsxs(d,{children:[e.jsx(g,{fz:14,mb:8,children:"Saran Pengembangan"}),e.jsxs(t,{styles:{content:{border:"1px solid #dcdcdc"}},editor:p({extensions:[c,m,b.configure({placeholder:"Masukkan saran pengembangan..."})],content:s.data.development,onUpdate:({editor:i})=>{s.setData("development",i.getHTML())}}),children:[e.jsxs(t.Toolbar,{children:[e.jsxs(t.ControlsGroup,{children:[e.jsx(t.Bold,{}),e.jsx(t.Italic,{}),e.jsx(t.Underline,{}),e.jsx(t.Strikethrough,{}),e.jsx(t.ClearFormatting,{}),e.jsx(t.Highlight,{}),e.jsx(t.Code,{})]}),e.jsxs(t.ControlsGroup,{children:[e.jsx(t.H1,{}),e.jsx(t.H2,{}),e.jsx(t.H3,{}),e.jsx(t.H4,{})]}),e.jsxs(t.ControlsGroup,{children:[e.jsx(t.Blockquote,{}),e.jsx(t.Hr,{}),e.jsx(t.BulletList,{}),e.jsx(t.OrderedList,{}),e.jsx(t.Subscript,{}),e.jsx(t.Superscript,{})]}),e.jsxs(t.ControlsGroup,{children:[e.jsx(t.Link,{}),e.jsx(t.Unlink,{})]}),e.jsxs(t.ControlsGroup,{children:[e.jsx(t.AlignLeft,{}),e.jsx(t.AlignCenter,{}),e.jsx(t.AlignJustify,{}),e.jsx(t.AlignRight,{})]}),e.jsxs(t.ControlsGroup,{children:[e.jsx(t.Undo,{}),e.jsx(t.Redo,{})]})]}),e.jsx(t.Content,{})]})]}),e.jsx(o,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},leftSection:e.jsx(r,{}),withAsterisk:!0,label:"Saran Pekerjaan",placeholder:"Masukkan saran pekerjaan...",onChange:i=>s.setData("job",i.target.value),value:s.data.job}),e.jsxs(h,{mt:24,gap:16,children:[e.jsx(n,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,variant:"outline",color:"red",disabled:s.processing,fullWidth:!0,onClick:()=>x.get(route("guides.index")),children:"Batal"}),e.jsx(n,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,fullWidth:!0,loading:s.processing,type:"submit",children:"Simpan"})]})]})})})};export{P as default};
