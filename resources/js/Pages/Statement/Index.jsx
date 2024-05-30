import React, { useState } from 'react'
import {
  Button,
  SimpleGrid,
  Stack,
  Table,
  TextInput,
  Title
} from '@mantine/core'
import { IconPlus, IconUser } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  console.log(props)
  const statements = props.statements.filter(statement =>
    statement.name.toLowerCase().includes(search.toLowerCase())
  )
  
  const THList = ['#', 'Kategori Soal', 'Konten Pertanyaan', 'Aksi']
  
  return (
    <AppLayout title="Pertanyaan" activeNav="Soal"
               authed={props.auth.user} meta={props.meta}>
      <Stack p={16}>
        <SimpleGrid cols={{
          base: 1,
          xs: 2
        }} justify="space-between">
          <TextInput
            leftSection={<IconUser />}
            placeholder="Cari pertanyaan..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
          
          <Button
            leftSection={<IconPlus />}
            onClick={() => router.get(route('statements.create', {
              indicator: props.indicator
            }))}
          >
            Tambah Pertanyaan
          </Button>
        </SimpleGrid>
        
        <Title
          align="center">"{props.indicator.name}"</Title>
        
        <Table.ScrollContainer>
          <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover
                 withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                {THList.map((th, id) => (
                  <Table.Th key={id}
                            style={{ whiteSpace: 'nowrap' }}>{th}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            
            <Table.Tbody>
              {statements.map((statement, id) => (
                <Table.Tr key={id}>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{statement.basic_trait.name}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{statement.name}</Table.Td>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>
                    <Button.Group>
                      <Button variant="outline" color="yellow"
                              onClick={() => router.get(route('statements.edit', {
                                statement: statement,
                                indicator: props.indicator
                              }))}>Ubah</Button>
                      <Button variant="outline" color="red"
                              onClick={() => router.delete(route('statements.destroy', {
                                statement: statement,
                                indicator: props.indicator
                              }))}>Hapus</Button>
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
