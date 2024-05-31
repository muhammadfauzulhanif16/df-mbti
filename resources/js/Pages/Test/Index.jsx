import React from 'react'
import { Button, Center } from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  console.log(props)
  return (
    <AppLayout title="Tes MBTI" activeNav="Tes MBTI" authed={props.auth.user}
               meta={props.meta}>
      <Center p={16}>
        <Center w="100vw" h="100vh" style={{
          borderRadius: 16
        }}>
          <Button>Mulai Test</Button>
        </Center>
      </Center>
    </AppLayout>
  )
}

export default Index
