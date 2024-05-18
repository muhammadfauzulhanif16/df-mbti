import {
  ActionIcon,
  Avatar,
  Button,
  Drawer,
  Group,
  Image,
  Text
} from '@mantine/core'
import React from 'react'
import { router } from '@inertiajs/core'
import {
  IconArticle,
  IconCategory,
  IconCheck,
  IconHome,
  IconInfoCircle,
  IconLogout,
  IconMenu,
  IconQuestionMark,
  IconUsers
} from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

export const NavBar = (props) => {
  const [opened, { open, close }] = useDisclosure(false)
  
  let NavList = [
    {
      icon: <IconHome />,
      label: 'Beranda',
      route: 'dashboard'
    },
    {
      icon: <IconUsers />,
      label: 'Dosen',
      route: 'lecturers.index'
    },
    {
      icon: <IconUsers />,
      label: 'Mahasiswa',
      route: 'students.index'
    },
    {
      icon: <IconCategory />,
      label: 'Kategori Soal',
      route: 'basic-traits.index'
    },
    {
      icon: <IconQuestionMark />,
      label: 'Soal',
      route: 'indicators.index'
    },
    {
      icon: <IconCheck />,
      label: 'Jawaban',
      route: 'questions.choices.index'
    },
    {
      icon: <IconArticle />,
      label: 'Kepribadian',
      route: 'personality.index'
    },
    {
      icon: <IconInfoCircle />,
      label: 'Panduan',
      route: 'guide.index'
    },
    {
      icon: <IconLogout />,
      label: 'Keluar',
      route: 'logout'
    }
  ]
  
  
  // if (props.authed.role === 'Mahasiswa') {
  //   NavList = NavList.filter(item => item.label !== 'Pengguna')
  // }
  
  return (
    <Group
      p={16}
      justify="space-between"
      bg="white"
      pos="sticky"
      top={0}
      style={{
        zIndex: 2,
        borderBottom: '1px solid #DEE2E6'
      }}>
      <Image src="https://i.imgur.com/3eTKJe2.png" w={48} />
      
      <ActionIcon
        variant="filled"
        size={48}
        color="gray"
        aria-label="Menu"
        display={{
          base: 'block',
          lg: 'none'
        }}
        onClick={open}
      >
        <IconMenu />
      </ActionIcon>
      
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="right"
        title="Menu"
        size="xs"
      >
        <Group mb={16}>
          <Avatar
            alt={props.authed.full_name}
            style={{
              cursor: 'pointer'
            }}
          />
          <Text>{props.authed.full_name}</Text>
        </Group>
        
        <Button.Group
          bg="white"
          orientation="vertical"
        >
          {NavList.map((nav, id) => (
            <Button
              color="gray"
              justify="start"
              leftSection={nav.icon}
              onClick={() => nav.route === 'logout' ? router.post(route('logout')) : router.get(route(nav.route))}
              variant={nav.label === props.activeNav ? 'filled' : 'subtle'}
              key={id}
            >
              {nav.label}
            </Button>
          ))}
        </Button.Group>
      </Drawer>
      
      <Button.Group
        style={{ zIndex: 2 }}
        bg="white"
        pos="sticky"
        top={0}
        display={{
          base: 'none',
          lg: 'flex'
        }}
      >
        {NavList.map((nav, id) => (
          <Button
            color="gray"
            leftSection={nav.icon}
            onClick={() => nav.route === 'logout' ? router.post(route('logout')) : router.get(route(nav.route))}
            variant={nav.label === props.activeNav ? 'filled' : 'subtle'}
            key={id}
          >
            {nav.label}
          </Button>
        ))}
      </Button.Group>
      
      <Avatar
        alt={props.authed.full_name}
        display={{
          base: 'none',
          lg: 'block'
        }}
        style={{
          cursor: 'pointer'
        }} />
    </Group>
  )
}
