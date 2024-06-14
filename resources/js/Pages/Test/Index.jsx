import React from 'react'
import { Box, Button, Center, List, Progress } from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { router } from '@inertiajs/core'

const Index = (props) => {
  console.log(props)
  
  return (
    <AppLayout title="Tes MBTI" activeNav="Tes MBTI" authed={props.auth.user}
               meta={props.meta}>
      
      <Box px={16}>
        <h2 align="center">Aturan Pengerjaan Test MBTI Persona</h2>
        
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
        </List>
        
        <Progress my={32} radius="xl" size="xl" value={100} striped
                  animated />
        
        <Center>
          <Button mx="auto" onClick={() => router.get(route('tests.create'))}>Mulai
                                                                              Test</Button>
        </Center>
      </Box>
    </AppLayout>
  )
}

export default Index
