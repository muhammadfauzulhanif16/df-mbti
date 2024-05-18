import React, { useState } from 'react'
import { Button, Group, Stack, Table, TextInput } from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  console.log(props)
  const indicators = props.indicators.filter(indicator =>
    indicator.name.toLowerCase().includes(search.toLowerCase())
  )
  
  const THList = ['#', 'Soal', 'Kategori Soal', 'Dibuat Pada', 'Diperbarui Pada', 'Aksi']
  
  return (
    <AppLayout title="Soal" activeNav="Soal"
               authed={props.auth.user} meta={props.meta}>
      <Stack p={16}>
        <Group justify="space-between">
          <Button
            leftSection={<IconPlus />}
            onClick={() => router.get(route('indicators.create'))}
          >
            Tambah Soal
          </Button>
          
          <TextInput
            leftSection={<IconSearch />}
            placeholder="Cari soal..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
        </Group>
        
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
              {indicators.map((indicator, id) => (
                <Table.Tr key={id}>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{indicator.name}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{indicator.basic_trait.name}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{indicator.created_at}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{indicator.updated_at}</Table.Td>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>
                    <Button.Group>
                      <Button variant="outline" color="green"
                              onClick={() => router.delete(route('indicators.show', indicator))}>
                        Lihat Konten Pertanyaan</Button>
                      <Button variant="outline" color="yellow"
                              onClick={() => router.get(route('indicators.edit', indicator))}>Ubah</Button>
                      <Button variant="outline" color="red"
                              onClick={() => router.delete(route('indicators.destroy', indicator))}>Hapus</Button>
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
