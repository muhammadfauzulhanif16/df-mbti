import { Head } from '@inertiajs/react'
import { Flex, ScrollArea } from '@mantine/core'
import { useEffect } from 'react'
import { notifications } from '@mantine/notifications'
import { NavBar } from '@/Components/NavBar.jsx'

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
      
      <Flex
        mih="100vh"
        justify={props.isAuth ? 'center' : 'start'}
        align={props.isAuth ? 'center' : 'start'}
      >
        {!props.isAuth &&
          <NavBar title={props.title} authed={props.authed} />}
        
        {props.isAuth ? props.children :
          <ScrollArea mih="100vh" p={16} w="100vw">
            {props.children}
          </ScrollArea>
        }
      </Flex>
    </>
  )
}
