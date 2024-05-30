import React, { useState } from 'react'
import { Button, SimpleGrid, Stack, Table, TextInput } from '@mantine/core'
import { IconPlus, IconUser } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  
  const choices = props.choices.filter(choice =>
    choice.name.toLowerCase().includes(search.toLowerCase())
  )
  
  const THList = ['#', 'Nama Jawaban', 'Bobot Penilaian', 'Aksi']
  
  return (
    <AppLayout title="Jawaban" activeNav="Jawaban"
               authed={props.auth.user} meta={props.meta}>
      <Stack p={16}>
        <SimpleGrid cols={{
          base: 1,
          xs: 2
        }} justify="space-between">
          <TextInput
            leftSection={<IconUser />}
            placeholder="Cari jawaban..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
          
          <Button
            leftSection={<IconPlus />}
            onClick={() => router.get(route('choices.create'))}
          >
            Tambah Jawaban
          </Button>
        </SimpleGrid>
        
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
              {choices.map((choice, id) => (
                <Table.Tr key={id}>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{choice.name}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{choice.value}</Table.Td>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>
                    <Button.Group>
                      <Button variant="outline" color="yellow"
                              onClick={() => router.get(route('choices.edit', choice))}>Ubah</Button>
                      <Button variant="outline" color="red"
                              onClick={() => router.delete(route('choices.destroy', choice))}>Hapus</Button>
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
