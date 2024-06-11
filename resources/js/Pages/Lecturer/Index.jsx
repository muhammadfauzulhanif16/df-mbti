import React, { useState } from 'react'
import {
  Avatar,
  Button,
  SimpleGrid,
  Stack,
  Table,
  TextInput,
  Tooltip
} from '@mantine/core'
import { IconPlus, IconUser } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  console.log(props)
  const [search, setSearch] = useState('')
  const lecturers = props.lecturers.filter(lecturer =>
    lecturer.user.full_name.toLowerCase().includes(search.toLowerCase())
  )
  
  const THList = ['#', 'Foto', 'NIDN', 'Nama Lengkap', 'Status', 'Email', 'Nomor Telepon', 'Aksi']
  
  return (
    <AppLayout title="Dosen" activeNav="Dosen" authed={props.auth.user}
               meta={props.meta}>
      <Stack p={16}>
        <SimpleGrid cols={{
          base: 1,
          xs: 2
        }} justify="space-between">
          <TextInput
            leftSection={<IconUser />}
            placeholder="Cari dosen..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
          
          <Button
            leftSection={<IconPlus />}
            onClick={() => router.get(route('lecturers.create'))}
          >
            Tambah Dosen
          </Button>
        </SimpleGrid>
        
        <Table.ScrollContainer>
          <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover
                 withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                {THList.map((th, id) => (
                  <Table.Th key={id} style={{
                    whiteSpace: 'nowrap'
                  }}>{th}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            
            <Table.Tbody>
              {lecturers.map((lecturer, id) => (
                <Table.Tr key={id}>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}><Avatar
                    src={lecturer.user.avatar}
                    alt={lecturer.user.full_name} /></Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{lecturer.user.id_number}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{lecturer.user.full_name}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{lecturer.user.role}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{lecturer.user.email}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{lecturer.user.phone_number}</Table.Td>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>
                    <Button.Group>
                      <Button variant="outline" color="yellow"
                              
                              onClick={() => router.get(route('lecturers.edit', lecturer))}>Ubah</Button>
                      <Tooltip
                        label="Tidak bisa dihapus, karena memiliki mahasiswa bimbingan!"
                        disabled={!lecturer.students.length}>
                        <Button variant="outline" color="red"
                                disabled={lecturer.students.length}
                                onClick={() => router.delete(route('lecturers.destroy', lecturer))}>Hapus</Button>
                      </Tooltip>
                    </Button.Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Stack>
    </AppLayout>
  )
}

export default Index
