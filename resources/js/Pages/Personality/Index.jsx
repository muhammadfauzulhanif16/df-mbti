import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Table,
  TextInput
} from '@mantine/core'
import { IconArticle, IconPlus } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  const personalities = props.personalities.filter(personality =>
    personality.name.toLowerCase().includes(search.toLowerCase())
  )
  const THList = ['#', 'Nama Tipe Kepribadian', 'Deskripsi', 'Saran Pekerjaan', 'Aksi']
  
  return (
    <AppLayout title="Kepribadian" activeNav="Kepribadian"
               authed={props.auth.user} meta={props.meta}>
      <Stack gap={32}>
        <SimpleGrid cols={{
          base: 1,
          xs: 2
        }} justify="space-between">
          <TextInput styles={{
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
                     leftSection={<IconArticle />}
                     placeholder="Cari tipe kepribadian..."
                     value={search}
                     onChange={(event) => setSearch(event.currentTarget.value)}
          />
          
          <Button px={16} styles={{ section: { marginRight: 16 } }} h={48}
                  radius={32}
                  leftSection={<IconPlus />}
                  onClick={() => router.get(route('personalities.create'))}
          >
            Tambah Tipe Kepribadian
          </Button>
        </SimpleGrid>
        
        <Box
          style={{
            borderRadius: 32,
            border: '1px solid #E9ECEF'
          }}>
          <Table.ScrollContainer>
            <Table highlightOnHover withColumnBorders
            >
              <Table.Thead h={64}>
                <Table.Tr>
                  {THList.map((th, id) => (
                    <Table.Th key={id} px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>{th}</Table.Th>
                  ))}
                </Table.Tr>
              </Table.Thead>
              
              <Table.Tbody>
                {personalities.map((personality, id) => (
                  <Table.Tr key={id} h={64}>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{personality.name}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>
                      <div
                        dangerouslySetInnerHTML={{ __html: personality.description }}
                      />
                    </Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>
                      <div
                        dangerouslySetInnerHTML={{ __html: personality.job }}
                      />
                    </Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      <Flex gap={16}>
                        <Button px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                variant="outline" color="yellow"
                                onClick={() => router.get(route('personalities.edit', personality))}>Ubah</Button>
                        <Button px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                variant="outline" color="red"
                                onClick={() => router.delete(route('personalities.destroy', personality))}>Hapus</Button>
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
