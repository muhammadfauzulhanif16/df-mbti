import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Grid,
  Select,
  Stack,
  Table,
  TextInput,
  Title,
} from '@mantine/core'
import { IconCategory, IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  const [basicTraitId, setBasicTraitId] = useState('')
  const statements = props.statements.filter(statement =>
    statement.name.toLowerCase().includes(search.toLowerCase()) &&
    (basicTraitId === '' || statement.basic_trait.id === basicTraitId),
  )
  
  const THList = ['#', 'Kategori Soal', 'Pertanyaan', 'Opsi']
  
  return (
    <AppLayout title="Pertanyaan" activeNav="Soal"
               authed={props.auth.user} meta={props.meta}>
      <Stack gap={32}>
        <Grid grow>
          <Grid.Col span={{
            base: 6,
            sm: 3,
          }}>
            <Button fullWidth px={16} styles={{ section: { marginRight: 16 } }}
                    h={48}
                    radius={32}
                    leftSection={<IconPlus />}
                    onClick={() => router.get(route('statements.create', {
                      indicator: props.indicator,
                    }))}
            >
              Tambah Pertanyaan
            </Button>
          </Grid.Col>
          
          <Grid.Col span={{
            base: 6,
            sm: 3,
          }}>
            <Select styles={{
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
                    leftSection={<IconCategory />}
                    clearable
                    searchable
              // value={supervisorId}
              //       disabled={props.auth.user.role === 'Dosen PA'}
                    nothingFoundMessage="Tidak ada kategori soal"
                    checkIconPosition="right"
                    placeholder="Kategori Soal"
                    data={Array.from(
                      new Set(
                        statements.map(statement => JSON.stringify({
                          label: statement.basic_trait.name,
                          value: statement.basic_trait.id,
                        })),
                      ),
                    ).map(item => JSON.parse(item))
                      .sort((a, b) => a.label.localeCompare(b.label))}
                    onChange={(value) => {
                      if (value) {
                        setBasicTraitId(value)
                      } else {
                        setBasicTraitId('')
                      }
                    }}
            />
          </Grid.Col>
          
          <Grid.Col span={{
            base: 6,
            sm: 3,
          }}>
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
            }}
                       leftSection={<IconSearch />}
                       placeholder="Cari pertanyaan..."
                       value={search}
                       onChange={(event) => setSearch(event.currentTarget.value)}
            />
          </Grid.Col>
        </Grid>
        
        <Title
          align="center">"{props.indicator.name}"</Title>
        
        <Box
          style={{
            borderRadius: 20,
            border: '1px solid #E9ECEF',
          }}>
          <Table.ScrollContainer>
            <Table highlightOnHover withColumnBorders
                   styles={{
                     table: {
                       borderRadius: 16,
                     },
                     thead: {
                       borderRadius: 16,
                     },
                   }}>
              <Table.Thead h={64}>
                <Table.Tr>
                  {THList.map((th, id) => (
                    <Table.Th key={id} px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>{th}</Table.Th>
                  ))}
                </Table.Tr>
              </Table.Thead>
              
              <Table.Tbody>
                {statements.map((statement, id) => (
                  <Table.Tr key={id} h={64}>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{statement.basic_trait.name}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{statement.name}</Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      <Flex gap={16}>
                        <Button variant="outline" color="yellow" px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                onClick={() => router.get(route('statements.edit', {
                                  statement: statement,
                                  indicator: props.indicator,
                                }))}>Ubah</Button>
                        <Button variant="outline" color="red" px={16} h={48}
                                radius={32}
                                styles={{ section: { marginRight: 16 } }}
                                onClick={() => router.delete(route('statements.destroy', {
                                  statement: statement,
                                  indicator: props.indicator,
                                }))}>Hapus</Button>
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
