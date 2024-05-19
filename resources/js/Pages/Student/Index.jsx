import React, { useState } from 'react'
import {
  Avatar,
  Button,
  Group,
  Stack,
  Table,
  TextInput,
  Tooltip
} from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  const students = props.students.filter(student =>
    student.user.full_name.toLowerCase().includes(search.toLowerCase())
  )
  
  const THList = ['#', 'Foto', 'NIM', 'Nama Lengkap', 'Tahun Akademik', 'Email', 'Nomor Telepon', 'DPA', 'Dibuat Pada', 'Diperbarui Pada', 'Aksi']
  
  return (
    <AppLayout title="Mahasiswa" activeNav="Mahasiswa" authed={props.auth.user}
               meta={props.meta}>
      <Stack p={16}>
        <Group justify="space-between">
          <Tooltip
            disabled={!!props.lecturers.length}
            label={!props.lecturers.length && 'Harap isi data dosen dahulu!'}>
            <Button
              disabled={!props.lecturers.length}
              leftSection={<IconPlus />}
              onClick={() => router.get(route('students.create'))}
            >
              Tambah Mahasiswa
            </Button>
          </Tooltip>
          
          
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
              {students.map((student, id) => (
                <Table.Tr key={id}>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td style={{
                    whiteSpace: 'nowrap'
                  }}>
                    <Avatar src={student.user.avatar}
                            alt={student.user.full_name} />
                  </Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{student.user.id_number}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{student.user.full_name}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{student.academic_year}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{student.user.email}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{student.user.phone_number
                  }</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{student.supervisor}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{student.user.created_at}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{student.user.updated_at}</Table.Td>
                  <Table.Td>
                    <Button.Group>
                      <Button variant="outline" color="yellow"
                              onClick={() => router.get(route('students.edit', student))}>Ubah</Button>
                      <Button variant="outline" color="red"
                              onClick={() => router.delete(route('students.destroy', student))}>Hapus</Button>
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
