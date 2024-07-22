import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Table,
  TextInput,
} from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  console.log(props)
  const [search, setSearch] = useState('')
  const works = props.works.filter(work =>
    work.name.toLowerCase().includes(search.toLowerCase()),
  )
  
  const THList = ['#', 'Pekerjaan', 'Tipe Kepribadian', 'Opsi']
  
  return (
    <AppLayout title="Pekerjaan" activeNav="Pekerjaan" authed={props.auth.user}
               meta={props.meta}>
      <Stack gap={32}>
        <SimpleGrid cols={{
          base: 1,
          xs: 2,
        }} justify="space-between">
          <Button w={320} px={16} styles={{ section: { marginRight: 16 } }}
                  leftSection={<IconPlus />} h={48} radius={32}
                  onClick={() => router.get(route('works.create'))}
          >
            Tambah Pekerjaan
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
            placeholder="Cari pekerjaan..."
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
                {works.map((work, id) => (
                  <Table.Tr key={id} h={64}>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{work.name}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{work.personality}</Table.Td>
                    <Table.Td px={16} py={0} style={{ whiteSpace: 'nowrap' }}>
                      <Flex gap={16}>
                        <Button px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                variant="outline" color="yellow"
                                onClick={() => router.get(route('works.edit', work))}>Ubah</Button>
                        
                        <Button px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                variant="outline" color="red"
                                onClick={() => router.delete(route('works.destroy', work))}>Hapus</Button>
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
