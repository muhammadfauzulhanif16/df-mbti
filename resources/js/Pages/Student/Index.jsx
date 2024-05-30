import React, { useState } from 'react'
import {
  Avatar,
  Button,
  Grid,
  Select,
  Stack,
  Table,
  TextInput,
  Tooltip
} from '@mantine/core'
import { IconCalendar, IconPlus, IconUser } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  const [academicYear, setAcademicYear] = useState('')
  const [supervisor, setSupervisor] = useState(props.auth.user.role === 'Dosen Pembimbing Akademik' ? props.auth.user.full_name : '')
  
  const students = props.students.filter(student => (
    (!search || student.user.full_name.toLowerCase().includes(search.toLowerCase())) &&
    (!academicYear || student.academic_year === academicYear) &&
    (!supervisor || student.supervisor.full_name === supervisor)
  ))
  
  const THList = ['#', 'Foto', 'NIM', 'Nama Lengkap', 'Tahun Akademik', 'Email', 'Nomor Telepon', 'DPA', 'Aksi']
  
  return (
    <AppLayout title="Mahasiswa" activeNav="Mahasiswa" authed={props.auth.user}
               meta={props.meta}>
      <Stack p={16}>
        <Grid grow>
          <Grid.Col span={{
            base: 6,
            sm: 3
          }}>
            <Select
              leftSection={<IconCalendar />}
              clearable
              searchable
              placeholder="Tahun Ajaran"
              checkIconPosition="right"
              nothingFoundMessage="Tidak ada tahun ajaran"
              data={[...new Set(props.students.map(student => student.academic_year))].sort()}
              onChange={(value) => setAcademicYear(value)}
            />
          </Grid.Col>
          
          <Grid.Col span={{
            base: 6,
            sm: 3
          }}>
            <Select
              leftSection={<IconUser />}
              clearable
              searchable
              value={supervisor}
              disabled={props.auth.user.role === 'Dosen Pembimbing Akademik'}
              nothingFoundMessage="Tidak ada dosen pembimbing"
              checkIconPosition="right"
              placeholder="Dosen Pembimbing"
              data={props.lecturers.map(lecturer => lecturer.user.full_name)}
              onChange={(value) => setSupervisor(value)}
            />
          </Grid.Col>
          
          <Grid.Col span={{
            base: 6,
            sm: 3
          }}>
            <TextInput
              leftSection={<IconUser />}
              placeholder="Cari mahasiswa..."
              value={search}
              onChange={(event) => setSearch(event.currentTarget.value)}
            />
          </Grid.Col>
          
          {props.auth.user.role === 'Admin' && (
            <Grid.Col span={{
              base: 6,
              sm: 3
            }}>
              <Tooltip
                disabled={!!props.lecturers.length}
                label={!props.lecturers.length && 'Harap isi data dosen dahulu!'}>
                <Button
                  fullWidth
                  disabled={!props.lecturers.length}
                  leftSection={<IconPlus />}
                  onClick={() => router.get(route('students.create'))}
                >
                  Tambah Mahasiswa
                </Button>
              </Tooltip>
            </Grid.Col>
          )}
        
        </Grid>
        
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
                    style={{ whiteSpace: 'nowrap' }}>{student.supervisor.full_name}</Table.Td>
                  <Table.Td>
                    {props.auth.userle === 'Admin' ? (
                      <Button.Group>
                        <Button variant="outline" color="yellow"
                                onClick={() => router.get(route('students.edit', student))}>Ubah</Button>
                        <Button variant="outline" color="red"
                                onClick={() => router.delete(route('students.destroy', student))}>Hapus</Button>
                      </Button.Group>
                    ) : (
                      <Button variant="outline" color="yellow"
                              onClick={() => router.delete(route(''))}>Detail</Button>
                    )}
                  
                  
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
