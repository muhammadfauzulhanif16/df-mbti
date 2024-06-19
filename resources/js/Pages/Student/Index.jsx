import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Flex,
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
  const [supervisorId, setSupervisorId] = useState(props.auth.user.role === 'Dosen PA' ? props.auth.user.id : '')
  console.log(supervisorId)
  const students = props.students.filter(student => (
    (!search || student.user.full_name.toLowerCase().includes(search.toLowerCase())) &&
    (!academicYear || student.academic_year === academicYear) &&
    (!supervisorId || student.supervisor_id === supervisorId)
  ))
  
  const THList = props.auth.user.role === 'Admin'
    ? ['#', 'Foto', 'NIM', 'Nama Lengkap', 'Tahun Angkatan', 'Email', 'Nomor Telepon', 'DPA', 'Aksi']
    : ['#', 'Foto', 'NIM', 'Nama Lengkap', 'Email', 'Tipe Kepribadian', 'Aksi']
  console.log(props)
  return (
    <AppLayout title="Mahasiswa" activeNav="Mahasiswa" authed={props.auth.user}
               meta={props.meta}>
      <Stack gap={32}>
        <Grid grow>
          <Grid.Col span={{
            base: 6,
            sm: 3
          }}>
            <Select styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 }
            }}
                    leftSection={<IconCalendar />}
                    clearable
                    searchable
                    placeholder="Tahun Angkatan"
                    checkIconPosition="right"
                    nothingFoundMessage="Tidak ada tahun ajaran"
                    data={[...new Set(props.students.map(student => student.academic_year))].sort((a, b) => b - a)}
                    onChange={(value) => setAcademicYear(value)}
            />
          </Grid.Col>
          
          <Grid.Col span={{
            base: 6,
            sm: 3
          }}>
            <Select styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 }
            }}
                    leftSection={<IconUser />}
                    clearable
                    searchable
                    value={supervisorId}
                    disabled={props.auth.user.role === 'Dosen PA'}
                    nothingFoundMessage="Tidak ada dosen pembimbing"
                    checkIconPosition="right"
                    placeholder="Dosen Pembimbing"
                    data={props.lecturers
                      .map(lecturer => ({
                        label: lecturer.user.full_name,
                        value: lecturer.user.id
                      }))
                      .sort((a, b) => a.label.localeCompare(b.label))}
                    onChange={(value) => setSupervisorId(value)}
            />
          </Grid.Col>
          
          <Grid.Col span={{
            base: 6,
            sm: 3
          }}>
            <TextInput
              styles={{
                label: { marginBottom: 8 },
                input: {
                  height: 48,
                  borderRadius: 32,
                  paddingLeft: 50,
                  paddingRight: 16
                },
                section: { marginLeft: 0, width: 48, height: 48 },
                error: { marginTop: 8 }
              }}
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
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  h={48}
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
        
        <Box
          style={{
            borderRadius: 32,
            border: '1px solid #E9ECEF'
          }}>
          <Table.ScrollContainer>
            <Table highlightOnHover withColumnBorders>
              <Table.Thead h={64}>
                <Table.Tr>
                  {THList.map((th, id) => (
                    <Table.Th key={id} px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>{th}</Table.Th>
                  ))}
                </Table.Tr>
              </Table.Thead>
              
              <Table.Tbody>
                {students.map((student, id) => (
                  <Table.Tr key={id} h={64}>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      <Avatar src={student.user.avatar}
                              alt={student.user.full_name} />
                    </Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student.user.id_number}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student.user.full_name}</Table.Td>
                    {props.auth.user.role === 'Admin' && (<Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student.user.id_number.substring(0, 4)}</Table.Td>)}
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student.user.email}</Table.Td>
                    {props.auth.user.role === 'Admin' ? (<>
                      <Table.Td
                        px={16} py={0}
                        style={{ whiteSpace: 'nowrap' }}>{student.user.phone_number
                      }</Table.Td>
                      <Table.Td
                        px={16} py={0}
                        style={{ whiteSpace: 'nowrap' }}>{student.supervisor.user.full_name}</Table.Td></>) : (
                      <Table.Td
                        px={16} py={0}
                        style={{ whiteSpace: 'nowrap' }}>{student?.tests.length ? student?.tests[0].personality : '-'}</Table.Td>
                    )}
                    
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      {props.auth.user.role === 'Admin' ? (
                        <Flex gap={16}>
                          <Button px={16} h={48}
                                  radius={32}
                                  styles={{ section: { marginRight: 16 } }}
                                  variant="outline" color="yellow"
                                  onClick={() => router.get(route('students.edit', student))}>Ubah</Button>
                          <Button px={16} h={48}
                                  radius={32}
                                  styles={{ section: { marginRight: 16 } }}
                                  variant="outline" color="red"
                                  onClick={() => router.delete(route('students.destroy', student))}>Hapus</Button>
                        </Flex>
                      ) : (
                        <Tooltip label={
                          !student?.tests.length && 'Mahasiswa belum melakukan tes kepribadian!'
                        }>
                          <Button
                            disabled={!student?.tests.length}
                            px={16} h={48}
                            radius={32}
                            styles={{ section: { marginRight: 16 } }}
                            variant="outline" color="yellow"
                            onClick={() => router.get(route('students.tests.index', student.user_id))}>Detail</Button>
                        </Tooltip>
                      )}
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Box>
      </Stack>
    </AppLayout>
  )
}

export default Index
