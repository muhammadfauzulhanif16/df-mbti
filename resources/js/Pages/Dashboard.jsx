import React from 'react'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Box, Center, List } from '@mantine/core'

const Dashboard = (props) => {
  return (
    <AppLayout title="Beranda" activeNav="Beranda" authed={props.auth.user}
               meta={props.meta}>
      <Box>
        <Center bg="blue.1" mb={32} w="100%" style={{
          borderRadius: 32
        }}>
          <h1>Selamat Datang di Beranda {props.auth.user.full_name}</h1>
        </Center>
        
        {props.auth.user.role === 'Mahasiswa' && (
          <>
            <h2>Aturan Pengerjaan Test MBTI Persona</h2>
            
            <List type="ordered">
              <List.Item>Hasil Test MBTI merupakan cerminan dari kepribadian
                         anda</List.Item>
              <List.Item>Jawablah setiap item pertanyaan dengan jujur sesuai
                         dengan diri anda masing-masing</List.Item>
              <List.Item>Setiap item pertanyaan wajib dijawab, sekalipun anda
                         tidak
                         menyukainya</List.Item>
              <List.Item>Apabila telah selesai mengerjakan soal dan ingin
                         melihat ke soal berikutnya, maka bisa dipilih button
                         'selanjutnya'</List.Item>
              <List.Item>Button 'sebelumnya' digunakan apabila ingin
                         melihat jawaban sebelumnya</List.Item>
              <List.Item>Button 'selanjutnya' hanya bisa dipilih apabila semua
                         item
                         pertanyaan telah dijawab seluruhnya</List.Item>
            </List></>
        )}
      </Box>
    </AppLayout>
  )
}

export default Dashboard
