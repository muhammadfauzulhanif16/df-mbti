import React, { useState } from 'react'
import {
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
  const [search, setSearch] = useState('')
  
  const basicTraits = props.basic_traits.filter((basic_trait) =>
    basic_trait.name.toLowerCase().includes(search.toLowerCase()),
  )
  
  const THList = ['#', 'Kode Kategori', 'Nama Kategori', 'Deskripsi', 'Opsi']
  
  return (
    <AppLayout
      title="Kategori Soal"
      activeNav="Kategori Soal"
      authed={props.auth.user}
      meta={props.meta}
    >
      <Stack gap={32}>
        <SimpleGrid
          cols={{
            base: 1,
            xs: 2,
          }}
          justify="space-between"
        >
          <Button px={16} styles={{ section: { marginRight: 16 } }} h={48}
                  w={320}
                  radius={32}
                  leftSection={<IconPlus />}
                  onClick={() => router.get(route('basic-traits.create'))}
          >
            Tambah Kategori
          </Button>
          
          <TextInput ml="auto" styles={{
            label: { marginBottom: 8 },
            input: {
              height: 48,
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16,
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 },
          }} w={320}
                     leftSection={<IconSearch />}
                     placeholder="Cari kategori..."
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
            <Table
              highlightOnHover withColumnBorders>
              <Table.Thead h={64}>
                <Table.Tr>
                  {THList.map((th, id) => (
                    <Table.Th key={id} px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>{th}</Table.Th>
                  ))}
                </Table.Tr>
              </Table.Thead>
              
              <Table.Tbody>
                {basicTraits.map((basicTrait, id) => (
                  <Table.Tr key={id} h={64}>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      {basicTrait.code}
                    </Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      {basicTrait.name}
                    </Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      {basicTrait.description}
                    </Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      <Flex gap={16}>
                        <Button px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                variant="outline"
                                color="yellow"
                                onClick={() =>
                                  router.get(route('basic-traits.edit', basicTrait))
                                }
                        >
                          Ubah
                        </Button>
                        
                        <Tooltip
                          disabled={!basicTrait.statements.length}
                          label="Tidak bisa dihapus, karena memiliki pertanyaan!"
                        >
                          <Button px={16} h={48}
                                  radius={32}
                                  styles={{ section: { marginRight: 16 } }}
                                  variant="outline"
                                  color="red"
                                  disabled={basicTrait.statements.length}
                                  onClick={() =>
                                    router.delete(
                                      route('basic-traits.destroy', basicTrait),
                                    )
                                  }
                          >
                            Hapus
                          </Button>
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
