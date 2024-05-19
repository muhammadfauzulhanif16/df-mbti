import React, { useState } from 'react'
import { Button, Group, Stack, Table, TextInput } from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  
  const basicTraits = props.basic_traits.filter(basic_trait =>
    basic_trait.name.toLowerCase().includes(search.toLowerCase())
  )
  
  const THList = ['#', 'Kode Kategori Soal', 'Nama Kategori Soal', 'Aksi']
  
  return (
    <AppLayout title="Kategori Soal" activeNav="Kategori Soal"
               authed={props.auth.user} meta={props.meta}>
      <Stack p={16}>
        <Group justify="space-between">
          <Button
            leftSection={<IconPlus />}
            onClick={() => router.get(route('basic-traits.create'))}
          >
            Tambah Kategori Soal
          </Button>
          
          <TextInput
            leftSection={<IconSearch />}
            placeholder="Cari kategori soal..."
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
              {basicTraits.map((basicTrait, id) => (
                <Table.Tr key={id}>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{basicTrait.code}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{basicTrait.name}</Table.Td>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>
                    <Button.Group>
                      <Button variant="outline" color="yellow"
                              onClick={() => router.get(route('basic-traits.edit', basicTrait))}>Ubah</Button>
                      <Button variant="outline" color="red"
                              onClick={() => router.delete(route('basic-traits.destroy', basicTrait))}>Hapus</Button>
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
