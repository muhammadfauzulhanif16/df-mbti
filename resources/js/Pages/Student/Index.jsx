import React, { useState } from 'react'
import { Avatar, Button, Group, Stack, Table, TextInput } from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  const users = props.users.filter(user =>
    user.full_name.toLowerCase().includes(search.toLowerCase())
  )
  
  const THList = ['#', 'Foto', 'NIM', 'Nama Lengkap', 'Tahun Akademik', 'Alamat Surel', 'Nomor Telepon', 'DPA', 'Dibuat Pada', 'Diperbarui Pada', 'Aksi']
  
  return (
    <AppLayout title="Mahasiswa" activeNav="Mahasiswa" authed={props.auth.user}
               meta={props.meta}>
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
        
        <Table.ScrollContainer>
          <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover
                 withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                {THList.map((th, id) => (
                  <Table.Th style={{ whiteSpace: 'nowrap' }}
                            key={id}>{th}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            
            <Table.Tbody>
              {users.map((user, id) => (
                <Table.Tr key={id}>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td style={{
                    whiteSpace: 'nowrap'
                  }}>
                    <Avatar src={user.profile_photo_url} alt={user.full_name} />
                  </Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{user.student.id_number}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{user.full_name}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{user.student.academic_year}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{user.email}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{user.phone_number
                  }</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{user.student.supervisor}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{user.created_at}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{user.updated_at}</Table.Td>
                  <Table.Td>
                    <Button.Group>
                      <Button variant="outline" color="yellow"
                              onClick={() => router.get(route('students.edit', user))}>Ubah</Button>
                      <Button variant="outline" color="red"
                              onClick={() => router.delete(route('students.destroy', user))}>Hapus</Button>
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
