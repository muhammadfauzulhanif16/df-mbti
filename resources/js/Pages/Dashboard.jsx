import React, { useEffect } from 'react'
import { notifications } from '@mantine/notifications'
import { NavBar } from '@/Components/NavBar.jsx'
import { Head } from '@inertiajs/react'
import { Center } from '@mantine/core'

const Dashboard = (props) => {
  useEffect(() => {
    if (props.meta) {
      notifications.show({
        title: props.meta.title,
        message: props.meta.message,
        color: props.meta.status ? 'green' : 'red',
        autoClose: 2000,
        withBorder: true
      })
    }
    
  }, [props.meta])
  
  return (
    <>
      <Head title="Beranda" />
      
      <NavBar title="Beranda" authed={props.auth.user} />
      
      <Center h="100vh" p={16}>
        <Center bg="blue.1" w="100vw" style={{
          borderRadius: 16
        }}>
          <h1>🎉 Selamat Datang, {props.auth.user.nama}! 🎉</h1>
        </Center>
      </Center>
    </>
    // <AppLayout
    //   meta={props.meta}
    //   title="Beranda"
    //   authed={props.auth.user}
    // >
    //   <Center.
    //     p={32}
    //     style={{
    //       borderRadius: 16
    //     }}
    //     bg="blue.1"
    //   >
    //     <h1
    //       style={{
    //         margin: 0
    //       }}
    //       align="center"
    //
    //     >
    //       🎉 Selamat Datang, {props.auth.user.name}! 🎉
    //     </h1>
    //   </Center.>
    //
    // </AppLayout>
  )
}

export default Dashboard
