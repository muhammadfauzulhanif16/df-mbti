import { ActionIcon, Avatar, Button, Drawer, Group, Image } from '@mantine/core'
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
      route: 'questions.categories.index'
    },
    {
      icon: <IconQuestionMark />,
      label: 'Soal',
      route: 'questions.index'
    },
    {
      icon: <IconCheck />,
      label: 'Jawaban',
      route: 'questions.categories.index'
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
    <Group p={16} justify="space-between" pos="sticky" top={0}>
      <Image src="https://i.imgur.com/3eTKJe2.png" w={48} />
      
      <ActionIcon
        variant="filled"
        size={48}
        aria-label="Menu"
        display={{
          base: 'block',
          md: 'none'
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
        <Button.Group
          style={{ zIndex: 2 }}
          bg="white"
          orientation="vertical"
        >
          {NavList.map((nav, id) => (
            <Button
              justify="start"
              leftSection={nav.icon}
              onClick={() => nav.route === 'logout' ? router.post('logout') : router.get(route(nav.route))}
              variant={nav.label === props.title ? 'filled' : 'subtle'}
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
          md: 'flex'
        }}
      >
        {NavList.map((nav, id) => (
          <Button
            leftSection={nav.icon}
            onClick={() => nav.route === 'logout' ? router.post('logout') : router.get(route(nav.route))}
            variant={nav.label === props.title ? 'filled' : 'subtle'}
            key={id}
          >
            {nav.label}
          </Button>
        ))}
      </Button.Group>
      
      <Avatar src="avatar.png" alt="it's me" style={{
        cursor: 'pointer'
      }} />
    </Group>
  )
}
