import { Avatar, Center, Flex, Image, Menu, Stack, Text } from '@mantine/core'
import React from 'react'
import {
  IconArticle,
  IconArticleFilled,
  IconHome,
  IconHomeFilled,
  IconInfoCircle,
  IconInfoCircleFilled,
  IconUser,
  IconUserFilled
} from '@tabler/icons-react'
import { router } from '@inertiajs/core'

export const NavBar = (props) => {
  const NavList = [
    {
      icon: props.title === 'Beranda' ? <IconHomeFilled size={24} /> :
        <IconHome size={24} />,
      label: 'Beranda',
      route: 'dashboard'
    },
    {
      icon: props.title === 'Pengguna' ? <IconUserFilled size={24} /> :
        <IconUser size={24} />,
      label: 'Pengguna',
      route: 'user'
    },
    {
      icon: props.title === 'MBTI' ? <IconArticleFilled size={24} /> :
        <IconArticle size={24} />,
      label: 'MBTI',
      route: 'personality'
    },
    {
      icon: props.title === 'Panduan' ? <IconInfoCircleFilled size={24} /> :
        <IconInfoCircle size={24} />,
      label: 'Panduan',
      route: 'guide'
    }
  ]
  
  return (
    <Flex
      direction="column"
      h="100vh"
      p={16}
      justify="space-between"
      align="center"
      pos="sticky"
      top={0}
      style={{
        borderRight: '1px solid #c5c5c5'
      }}
    >
      <Image
        src="https://i.imgur.com/3eTKJe2.png"
        w={48}
      />
      
      <Stack gap={24}>
        {NavList.map((item, id) => (
          <Stack
            key={id}
            align="center"
            gap={4}
            style={{
              cursor: 'pointer'
            }}
            onClick={() =>
              router.get(route(item.route))
            }
          >
            <Center
              bg={props.title === item.label ? 'blue.1' : 'transparent'}
              c={props.title === item.label ? 'blue.8' : 'gray.8'}
              w="100%" py={4}
              style={{ borderRadius: 32 }}
            >
              {item.icon}
            </Center>
            
            <Text
              fz={14}
              fw={600}
              c={props.title === item.label ? 'black' : 'gray.8'}
            >
              {item.label}
            </Text>
          </Stack>
        ))}
      </Stack>
      
      <Menu position="right-end" offset={16} width={240}
      >
        <Menu.Target>
          <Avatar
            style={{
              cursor: 'pointer'
            }}
            color="blue"
            size={48}
            radius="xl"
            variant="filled"
          >
            {props.authed.name.split(' ').length > 1 ? props.authed.name.split(' ')[0][0] + props.authed.name.split(' ')[props.authed.name.split(' ').length - 1][0] : props.authed.name.split(' ')[0][0]}
          </Avatar>
        </Menu.Target>
        
        <Menu.Dropdown p={16} style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #c5c5c5',
          borderRadius: 16
        }}>
          <Menu.Item onClick={() => router.post(route('logout'))}>
            Keluar Akun
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    
    </Flex>
  )
}
