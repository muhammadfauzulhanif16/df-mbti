import React, { useEffect, useState } from 'react'
import { notifications } from '@mantine/notifications'
import { Head } from '@inertiajs/react'
import { Button, Group, Stack, Table, TextInput } from '@mantine/core'
import { NavBar } from '@/Components/NavBar.jsx'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'

const Index = (props) => {
  const [search, setSearch] = useState('')
  
  console.log(props)
  
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
  
  
  const filteredElements = props.lecturers.filter(element =>
    element.nama?.toLowerCase().includes(search.toLowerCase())
  )
  
  const THList = ['Foto', 'Nama', 'NIDN', 'Status', 'Tahun Ajaran', 'Email', 'Opsi']
  
  return (
    <>
      <Head title="Dosen" />
      
      <NavBar title="Beranda" authed={props.auth.user} />
      
      <Stack p={16}>
        <Group justify="space-between">
          <Button
            color="green"
            leftSection={<IconPlus />}
            onClick={() => router.get(route('lecturers.create'))}
          >
            Tambah Dosen
          </Button>
          
          <TextInput
            leftSection={<IconSearch />}
            placeholder="Cari dosen..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          
          />
        </Group>
        
        <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover
               withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              {THList.map((th, id) => (
                <Table.Th key={id}>{th}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          
          <Table.Tbody>
            {filteredElements.map((lecturer) => (
              <Table.Tr key={lecturer.id}>
                <Table.Td>{lecturer.foto}</Table.Td>
                <Table.Td>{lecturer.nama}</Table.Td>
                <Table.Td>{lecturer.nidn}</Table.Td>
                <Table.Td>{lecturer.peran}</Table.Td>
                <Table.Td>{lecturer.tahun_ajaran}</Table.Td>
                <Table.Td>{lecturer.email}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      
      </Stack>
    </>
  )
}

export default Index
