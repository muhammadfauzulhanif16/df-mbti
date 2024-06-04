import React, { useState } from 'react'
import { Button, Center, Modal } from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { useDisclosure } from '@mantine/hooks'

const Index = (props) => {
  console.log(props)
  const [isTestStarted, setIsTestStarted] = useState(false)
  const [opened, { open, close }] = useDisclosure(false)
  
  return (
    <AppLayout title="Tes MBTI" activeNav="Tes MBTI" authed={props.auth.user}
               meta={props.meta}>
      <Modal opened={opened} onClose={close}
             title="Apakah anda yakin memulai tes?"
             centered>
        asdads </Modal>
      
      <Center p={16}>
        <Center w="100vw" h="100vh" style={{
          borderRadius: 16
        }}>
          <Button onClick={open}>Mulai Test</Button>
        </Center>
      </Center>
    </AppLayout>
  )
}

export default Index
