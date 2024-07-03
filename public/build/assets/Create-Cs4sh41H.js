import{W as c,j as s,B as p,F as h}from"./app-Bi4iRz3i.js";import{A as u,g as n,f as g,F as m,B as d}from"./AppLayout-DvVrcIVI.js";import{R as e,u as o,S as l,L as a,P as x}from"./index-t7Fc0QtU.js";import{T as j}from"./Title-Cnohtl0s.js";import{S as b}from"./SimpleGrid-BSbiafp6.js";import{T as C}from"./TextInput-CbTzzo6s.js";import"./ColorSwatch-D3MQ3iDv.js";import"./Input-WWNvzk7o.js";import"./clamp-DTmYCdls.js";import"./get-base-value-B1n_MCO3.js";import"./InputBase-BjiFYmuE.js";const y=i=>{const r=c({name:"",description:"",job:"",detail:""});return console.log(i),s.jsx("form",{onSubmit:t=>{t.preventDefault(),r.post(route("personalities.store"))},children:s.jsxs(u,{title:"Tambah Tipe Kepribadian",activeNav:"Kepribadian",authed:i.auth.user,meta:i.meta,children:[s.jsxs(p,{mb:32,children:[s.jsx(j,{order:6,mb:8,children:"Keterangan Nama Tipe Kepribadian:"}),s.jsx(b,{cols:i.basic_traits.length,children:i.basic_traits.map(t=>s.jsx(n,{children:`${t.name} (${t.code})`}))})]}),s.jsx(j,{align:"center",mb:32,children:"Tambah Data Tipe Kepribadian"}),s.jsx(C,{mb:16,leftSection:s.jsx(g,{}),styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},withAsterisk:!0,label:"Nama Tipe Kepribadian",placeholder:"Masukkan nama tipe kepribadian...",onChange:t=>r.setData("name",t.target.value)}),s.jsx(n,{fz:14,children:"Deskripsi"}),s.jsxs(e,{mb:16,styles:{content:{border:"1px solid #dcdcdc"}},editor:o({extensions:[l,a,x.configure({placeholder:"Masukkan deskripsi..."})],content:r.data.development,onUpdate:({editor:t})=>{r.setData("description",t.getHTML())}}),children:[s.jsxs(e.Toolbar,{children:[s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Bold,{}),s.jsx(e.Italic,{}),s.jsx(e.Underline,{}),s.jsx(e.Strikethrough,{}),s.jsx(e.ClearFormatting,{}),s.jsx(e.Highlight,{}),s.jsx(e.Code,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.H1,{}),s.jsx(e.H2,{}),s.jsx(e.H3,{}),s.jsx(e.H4,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Blockquote,{}),s.jsx(e.Hr,{}),s.jsx(e.BulletList,{}),s.jsx(e.OrderedList,{}),s.jsx(e.Subscript,{}),s.jsx(e.Superscript,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Link,{}),s.jsx(e.Unlink,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.AlignLeft,{}),s.jsx(e.AlignCenter,{}),s.jsx(e.AlignJustify,{}),s.jsx(e.AlignRight,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Undo,{}),s.jsx(e.Redo,{})]})]}),s.jsx(e.Content,{})]}),s.jsx(n,{fz:14,children:"Saran Pekerjaan"}),s.jsxs(e,{mb:16,styles:{content:{border:"1px solid #dcdcdc"}},editor:o({extensions:[l,a,x.configure({placeholder:"Masukkan saran pekerjaan..."})],content:r.data.development,onUpdate:({editor:t})=>{r.setData("job",t.getHTML())}}),children:[s.jsxs(e.Toolbar,{children:[s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Bold,{}),s.jsx(e.Italic,{}),s.jsx(e.Underline,{}),s.jsx(e.Strikethrough,{}),s.jsx(e.ClearFormatting,{}),s.jsx(e.Highlight,{}),s.jsx(e.Code,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.H1,{}),s.jsx(e.H2,{}),s.jsx(e.H3,{}),s.jsx(e.H4,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Blockquote,{}),s.jsx(e.Hr,{}),s.jsx(e.BulletList,{}),s.jsx(e.OrderedList,{}),s.jsx(e.Subscript,{}),s.jsx(e.Superscript,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Link,{}),s.jsx(e.Unlink,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.AlignLeft,{}),s.jsx(e.AlignCenter,{}),s.jsx(e.AlignJustify,{}),s.jsx(e.AlignRight,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Undo,{}),s.jsx(e.Redo,{})]})]}),s.jsx(e.Content,{})]}),s.jsx(n,{fz:14,children:"Rincian Pekerjaan"}),s.jsxs(e,{mb:16,styles:{content:{border:"1px solid #dcdcdc"}},editor:o({extensions:[l,a,x.configure({placeholder:"Masukkan rincian pekerjaan..."})],content:r.data.development,onUpdate:({editor:t})=>{r.setData("detail",t.getHTML())}}),children:[s.jsxs(e.Toolbar,{children:[s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Bold,{}),s.jsx(e.Italic,{}),s.jsx(e.Underline,{}),s.jsx(e.Strikethrough,{}),s.jsx(e.ClearFormatting,{}),s.jsx(e.Highlight,{}),s.jsx(e.Code,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.H1,{}),s.jsx(e.H2,{}),s.jsx(e.H3,{}),s.jsx(e.H4,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Blockquote,{}),s.jsx(e.Hr,{}),s.jsx(e.BulletList,{}),s.jsx(e.OrderedList,{}),s.jsx(e.Subscript,{}),s.jsx(e.Superscript,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Link,{}),s.jsx(e.Unlink,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.AlignLeft,{}),s.jsx(e.AlignCenter,{}),s.jsx(e.AlignJustify,{}),s.jsx(e.AlignRight,{})]}),s.jsxs(e.ControlsGroup,{children:[s.jsx(e.Undo,{}),s.jsx(e.Redo,{})]})]}),s.jsx(e.Content,{})]}),s.jsxs(m,{mt:24,gap:16,children:[s.jsx(d,{h:48,px:16,styles:{section:{marginRight:12}},radius:32,variant:"outline",color:"red",disabled:r.processing,fullWidth:!0,onClick:()=>h.get(route("personalities.index")),children:"Batal"}),s.jsx(d,{fullWidth:!0,h:48,disabled:r.hasErrors||Object.values(r.data).some(t=>!t),px:16,styles:{section:{marginRight:12}},radius:32,loading:r.processing,type:"submit",children:"Simpan"})]})]})})};export{y as default};