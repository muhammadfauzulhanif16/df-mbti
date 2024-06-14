import { Head } from '@inertiajs/react'
import React, { useEffect } from 'react'
import { NavBar } from '@/Components/NavBar.jsx'
import { notifications } from '@mantine/notifications'
import {
  ActionIcon,
  Affix,
  Box,
  Flex,
  Text,
  Tooltip,
  Transition
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowNarrowUp } from '@tabler/icons-react'

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
  const [scroll, scrollTo] = useWindowScroll()
  
  return (
    <Flex
      mih="100vh"
      direction="column"
    >
      <Head title={props.title} />
      
      {props.authed &&
        <NavBar activeNav={props.activeNav} authed={props.authed} />}
      
      <Box
        mih="100vh"
        style={{
          zIndex: 1
        }}
        px={props.authed && {
          base: 16,
          sm: 32,
          md: 48,
          lg: 64
        }}
        py={props.authed && 32}
      >
        {props.children}
      </Box>
      
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="fade" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Tooltip label="Gulir ke atas" style={{
              borderRadius: 32,
              padding: '.5rem 1rem'
            }}>
              <ActionIcon onClick={() => scrollTo({ y: 0 })} pos="fixed" h={48}
                          w={48} radius={32} m={16} bottom={0}
                          right={0} variant="filled"
                          style={transitionStyles} aria-label="Scroll to top">
                <IconArrowNarrowUp />
              </ActionIcon>
            </Tooltip>
          )}
        </Transition>
      </Affix>
      
      
      <Flex fz={14} h={80} px={{ base: 16, sm: 32, md: 48, lg: 64 }}
            align="center" justify="center" c="gray.7">
        <Text align="center">© {new Date().getFullYear()}, Sistem Informasi
                             Manajemen Tes Kepribadian. Hak cipta dilindungi
                             undang-undang.</Text></Flex>
    </Flex>
  )
}
