import React from 'react'
import { Center } from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Dashboard = (props) => {
  return (
    <AppLayout title="Beranda" activeNav="Beranda" authed={props.auth.user}
               meta={props.meta}>
      <Center h="100vh" p={16}>
        <Center bg="blue.1" w="100vw" style={{
          borderRadius: 16
        }}>
          <h1>🎉 Selamat Datang, {props.auth.user.full_name}! 🎉</h1>
        </Center>
      </Center>
    </AppLayout>
  )
}

export default Dashboard
