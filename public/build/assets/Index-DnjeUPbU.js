import{j as e,B as s,F as l}from"./app-Bi4iRz3i.js";import{A as n,B as p}from"./AppLayout-DvVrcIVI.js";import{T as h}from"./Title-Cnohtl0s.js";import{T as i}from"./Table-D0CQBNYD.js";import"./ScrollArea-DI45qYGJ.js";const j=t=>(console.log(t),e.jsxs(n,{title:"Hasil",activeNav:"Hasil",authed:t.auth.user,meta:t.meta,children:[e.jsx(h,{mb:32,align:"center",children:"Hasil Test Sebelumnya"}),e.jsx(s,{style:{borderRadius:20,border:"1px solid #E9ECEF"},children:e.jsx(i.ScrollContainer,{children:e.jsxs(i,{highlightOnHover:!0,withColumnBorders:!0,styles:{table:{borderRadius:16},thead:{borderRadius:16}},children:[e.jsx(i.Thead,{h:64,children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"No"}),e.jsx(i.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"Tipe Kepribadian"}),e.jsx(i.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"Tanggal"}),e.jsx(i.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"Waktu Selesai"}),e.jsx(i.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"Opsi"})]})}),e.jsx(i.Tbody,{children:t.tests.map((a,r)=>e.jsxs(i.Tr,{h:64,children:[e.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:r+1}),e.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:a.personality}),e.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:new Date(a.created_at).toLocaleDateString("id-ID").split("/").join("-")}),e.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:a.time.split(":").join(".")}),e.jsx(i.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsx(p,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",onClick:()=>l.get(route("tests.show",a.id)),children:"Detail"})})]},r))})]})})})]}));export{j as Index,j as default};