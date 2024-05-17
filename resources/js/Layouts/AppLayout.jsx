import { Head } from '@inertiajs/react'
import React, { useEffect } from 'react'
import { NavBar } from '@/Components/NavBar.jsx'
import { ScrollToTop } from '@/Components/ScrollToTop.jsx'
import { notifications } from '@mantine/notifications'

export const AppLayout = (props) => {
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
      <Head title={props.title} />
      
      {props.authed &&
        <NavBar activeNav={props.activeNav} authed={props.authed} />}
      
      {props.children}
      
      <ScrollToTop />
    </>
  )
}
