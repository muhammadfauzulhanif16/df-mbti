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
  const [search, setSearch] = useState('')
  console.log(props)
  const indicators = props.indicators.filter(indicator =>
    indicator.name.toLowerCase().includes(search.toLowerCase()),
  )
  
  const THList = ['#', 'Soal', 'Opsi']
  
  return (
    <AppLayout title="Soal" activeNav="Soal"
               authed={props.auth.user} meta={props.meta}>
      <Stack gap={32}>
        <SimpleGrid cols={{
          base: 1,
          xs: 2,
        }} justify="space-between">
          <Button px={16} styles={{ section: { marginRight: 16 } }} h={48}
                  w={320}
                  radius={32}
                  leftSection={<IconPlus />}
                  onClick={() => router.get(route('indicators.create'))}
          >
            Tambah Soal
          </Button>
          
          <TextInput styles={{
            label: { marginBottom: 8 },
            input: {
              height: 48,
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16,
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 },
          }} ml="auto" w={320}
                     leftSection={<IconSearch />}
                     placeholder="Cari soal..."
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
                {indicators.map((indicator, id) => (
                  <Table.Tr key={id} h={64}>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{indicator.name}</Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      <Flex gap={16}>
                        <Button variant="outline" color="green" px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                onClick={() => router.get(route('statements.index', indicator))}>
                          Tambah Konten Pertanyaan</Button>
                        <Button variant="outline" color="yellow" px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                onClick={() => router.get(route('indicators.edit', indicator))}>Ubah</Button>
                        <Button variant="outline" color="red" px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                onClick={() => router.delete(route('indicators.destroy', indicator))}>Hapus</Button>
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
