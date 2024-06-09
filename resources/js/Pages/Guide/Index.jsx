import React, { useState } from 'react'
import { Button, SimpleGrid, Stack, Table, TextInput } from '@mantine/core'
import { IconPlus, IconUser } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  const [search, setSearch] = useState('')
  const guides = props.guides.filter(guide =>
    guide.personality.toLowerCase().includes(search.toLowerCase())
  )
  console.log(props)
  const THList = ['#', 'Tipe Kepribadian', 'Saran Pekerjaan', 'Saran Pengembangan', 'Opsi']
  
  return (
    <AppLayout title="Panduan" activeNav="Panduan"
               authed={props.auth.user} meta={props.meta}>
      <Stack p={16}>
        <SimpleGrid cols={{
          base: 1,
          xs: 2
        }} justify="space-between">
          <TextInput
            leftSection={<IconUser />}
            placeholder="Cari panduan..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
          
          <Button
            leftSection={<IconPlus />}
            onClick={() => router.get(route('guides.create'))}
          >
            Tambah Panduan
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
              {guides.map((guide, id) => (
                <Table.Tr key={id}>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{guide.personality}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: guide.job }}
                    />
                  </Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: guide.development }}
                    />
                  </Table.Td>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>
                    <Button.Group>
                      <Button variant="outline" color="yellow"
                              onClick={() => router.get(route('guides.edit', guide))}>Ubah</Button>
                      <Button variant="outline" color="red"
                              onClick={() => router.delete(route('guides.destroy', guide))}>Hapus</Button>
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
