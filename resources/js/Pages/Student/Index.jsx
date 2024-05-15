import React, { useEffect, useState } from 'react'
import { notifications } from '@mantine/notifications'
import { Head } from '@inertiajs/react'
import { Avatar, Button, Group, Stack, Table, TextInput } from '@mantine/core'
import { NavBar } from '@/Components/NavBar.jsx'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'

const Index = (props) => {
  const [search, setSearch] = useState('')
  
  
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
  
  const filteredElements = props.students.filter(element =>
    element.nama?.toLowerCase().includes(search.toLowerCase())
  )
  
  const THList = ['Foto', 'NIM', 'Nama', 'Email', 'DPA', 'Opsi']
  
  return (
    <>
      <Head title="Mahasiswa" />
      
      <NavBar title="Mahasiswa" authed={props.auth.user} />
      
      <Stack p={16}>
        <Group justify="space-between">
          <Button
            leftSection={<IconPlus />}
            onClick={() => router.get(route('students.create'))}
          >
            Tambah Mahasiswa
          </Button>
          
          <TextInput
            leftSection={<IconSearch />}
            placeholder="Cari mahasiswa..."
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
            {filteredElements.map((student, id) => (
              <Table.Tr key={id}>
                <Table.Td>
                  <Avatar src={student.foto} alt={student.nama} />
                </Table.Td>
                <Table.Td>{student.nim}</Table.Td>
                <Table.Td>{student.nama}</Table.Td>
                <Table.Td>{student.email}</Table.Td>
                <Table.Td>{student.dpa}</Table.Td>
                <Table.Td>
                  <Button.Group>
                    <Button variant="outline" color="yellow"
                            onClick={() => router.get(route('students.edit', student.id))}>Ubah</Button>
                    <Button variant="outline" color="red"
                            onClick={() => router.delete(route('students.destroy', student.id))}>Hapus</Button>
                  </Button.Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Stack>
    </>
  )
}

export default Index
