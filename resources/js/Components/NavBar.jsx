import { Button } from '@mantine/core'
import React from 'react'
import { router } from '@inertiajs/core'

export const NavBar = (props) => {
  let NavList = [
    {
      label: 'Beranda',
      route: 'dashboard'
    },
    {
      label: 'Dosen',
      route: 'lecturers.index'
    },
    {
      label: 'Mahasiswa',
      route: 'students.index'
    },
    {
      label: 'Kategori Soal',
      route: 'questions.categories.index'
    },
    {
      label: 'Soal',
      route: 'questions.index'
    },
    {
      label: 'Jawaban',
      route: 'questions.categories.index'
    },
    {
      label: 'Kepribadian',
      route: 'personality.index'
    },
    ,
    {
      label: 'Panduan',
      route: 'guide.index'
    },
    {
      label: 'Keluar',
      route: 'logout'
    }
  ]
  
  
  // if (props.authed.role === 'Mahasiswa') {
  //   NavList = NavList.filter(item => item.label !== 'Pengguna')
  // }
  
  return (
    <Button.Group style={{ zIndex: 2 }} bg="white" p={16} pos="sticky" top={0}>
      {NavList.map((nav, id) => (
        <Button
          onClick={() => nav.route === 'logout' ? router.post('logout') : router.get(route(nav.route))}
          variant={nav.label === props.title ? 'filled' : 'subtle'}
          key={id}
        >
          {nav.label}
        </Button>
      ))}
    </Button.Group>
  )
}
