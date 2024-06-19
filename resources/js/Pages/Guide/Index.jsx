import React, { useState } from 'react'
import { Box, Button, SimpleGrid, Stack, Table, TextInput } from '@mantine/core'
import { IconInfoCircle, IconPlus } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  const guides = props.guides.filter(guide =>
    guide.personality.toLowerCase().includes(search.toLowerCase())
  )
  const isAdmin = props.auth.user.role === 'Admin'
  const THList = ['#', 'Tipe Kepribadian', 'Saran Pekerjaan', 'Saran Pengembangan']
  if (isAdmin) {
    THList.push('Opsi')
  }
  
  return (
    <AppLayout title="Panduan" activeNav="Panduan"
               authed={props.auth.user} meta={props.meta}>
      <Stack gap={32}>
        <SimpleGrid cols={props.auth.user.role === 'Admin' && {
          base: 1,
          xs: 2
        }} grow justify="space-between">
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
                     leftSection={<IconInfoCircle />}
                     placeholder="Cari panduan..."
                     value={search}
                     onChange={(event) => setSearch(event.currentTarget.value)}
          />
          
          {props.auth.user.role === 'Admin' && (
            <Button px={16} styles={{ section: { marginRight: 16 } }} h={48}
                    radius={32}
                    leftSection={<IconPlus />}
                    onClick={() => router.get(route('guides.create'))}
            >
              Tambah Panduan
            </Button>)}
        
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
                {guides.map((guide, id) => (
                  <Table.Tr key={id} h={64}>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{guide.personality}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>
                      <div
                        dangerouslySetInnerHTML={{ __html: guide.job }}
                      />
                    </Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>
                      <div
                        dangerouslySetInnerHTML={{ __html: guide.development }}
                      />
                    </Table.Td>
                    {
                      props.auth.user.role === 'Admin' && (
                        <Table.Td px={16} py={0}
                                  style={{ whiteSpace: 'nowrap' }}>
                          <Flex gap={16}>
                            <Button px={16} h={48}
                                    radius={32}
                                    styles={{ section: { marginRight: 16 } }}
                                    variant="outline" color="yellow"
                                    onClick={() => router.get(route('guides.edit', guide))}>Ubah</Button>
                            <Button px={16} h={48}
                                    radius={32}
                                    styles={{ section: { marginRight: 16 } }}
                                    variant="outline" color="red"
                                    onClick={() => router.delete(route('guides.destroy', guide))}>Hapus</Button>
                          </Flex>
                        </Table.Td>
                      )
                    }
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
