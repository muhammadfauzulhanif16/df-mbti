import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Table,
  TextInput,
  Tooltip,
} from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  console.log(props)
  const [search, setSearch] = useState('')
  const lecturers = props.lecturers.filter(lecturer =>
    lecturer.user.full_name.toLowerCase().includes(search.toLowerCase()),
  )
  
  const THList = ['#', 'Foto', 'NIDN', 'Nama Lengkap', 'Email', 'Nomor Telepon', 'Opsi']
  
  return (
    <AppLayout title="Dosen" activeNav="Dosen" authed={props.auth.user}
               meta={props.meta}>
      <Stack gap={32}>
        <SimpleGrid cols={{
          base: 1,
          xs: 2,
        }} justify="space-between">
          <Button w={320} px={16} styles={{ section: { marginRight: 16 } }}
                  leftSection={<IconPlus />} h={48} radius={32}
                  onClick={() => router.get(route('lecturers.create'))}
          >
            Tambah Dosen
          </Button>
          
          <TextInput
            w={320}
            ml="auto"
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
            leftSection={<IconSearch />}
            placeholder="Cari dosen..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
        </SimpleGrid>
        
        <Box
          style={{
            borderRadius: 32,
            border: '1px solid #E9ECEF',
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
                {lecturers.map((lecturer, id) => (
                  <Table.Tr key={id} h={64}>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}><Avatar
                      src={lecturer.user.avatar}
                      alt={lecturer.user.full_name} /></Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{lecturer.user.id_number}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{lecturer.user.full_name}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{lecturer.user.email}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{lecturer.user.phone_number}</Table.Td>
                    <Table.Td px={16} py={0} style={{ whiteSpace: 'nowrap' }}>
                      <Flex gap={16}>
                        <Button px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                variant="outline" color="yellow"
                                onClick={() => router.get(route('lecturers.edit', lecturer))}>Ubah</Button>
                        
                        <Tooltip
                          label="Tidak bisa dihapus, karena memiliki mahasiswa bimbingan!"
                          disabled={!lecturer.students.length}>
                          <Button px={16} h={48}
                                  radius={32}
                                  styles={{ section: { marginRight: 16 } }}
                                  variant="outline" color="red"
                                  disabled={lecturer.students.length}
                                  onClick={() => router.delete(route('lecturers.destroy', lecturer))}>Hapus</Button>
                        </Tooltip>
                      </Flex>
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
