import React, { useState } from 'react'
import { Button, Group, Stack, Table, TextInput, Title } from '@mantine/core'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Show = (props) => {
  const [search, setSearch] = useState('')
  
  // const choices = props.choices.filter(choice =>
  //   choice.name.toLowerCase().includes(search.toLowerCase())
  // )
  
  const THList = ['#', 'Nama Jawaban', 'Bobot Penilaian', 'Dibuat Pada', 'Diperbarui Pada', 'Aksi']
  
  return (
    <AppLayout title="Pertanyaan" activeNav="Soal"
               authed={props.auth.user} meta={props.meta}>
      <Stack p={16}>
        <Group justify="space-between">
          <Button
            leftSection={<IconPlus />}
            onClick={() => router.get(route('statements.create', {
              indicator: props.indicator
            }))}
          >
            Tambah Pertanyaan
          </Button>
          
          <TextInput
            leftSection={<IconSearch />}
            placeholder="Cari pertanyaan..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
        </Group>
        
        <Title align="center">"{props.indicator.name}"</Title>
        
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
            
            {/*<Table.Tbody>*/}
            {/*  {choices.map((choice, id) => (*/}
            {/*    <Table.Tr key={id}>*/}
            {/*      <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>*/}
            {/*      <Table.Td*/}
            {/*        style={{ whiteSpace: 'nowrap' }}>{choice.name}</Table.Td>*/}
            {/*      <Table.Td*/}
            {/*        style={{ whiteSpace: 'nowrap' }}>{choice.value}</Table.Td>*/}
            {/*      <Table.Td*/}
            {/*        style={{ whiteSpace: 'nowrap' }}>{choice.created_at}</Table.Td>*/}
            {/*      <Table.Td*/}
            {/*        style={{ whiteSpace: 'nowrap' }}>{choice.updated_at}</Table.Td>*/}
            {/*      <Table.Td style={{ whiteSpace: 'nowrap' }}>*/}
            {/*        <Button.Group>*/}
            {/*          <Button variant="outline" color="yellow"*/}
            {/*                  onClick={() => router.get(route('choices.edit', choice))}>Ubah</Button>*/}
            {/*          <Button variant="outline" color="red"*/}
            {/*                  onClick={() => router.delete(route('choices.destroy', choice))}>Hapus</Button>*/}
            {/*        </Button.Group>*/}
            {/*      </Table.Td>*/}
            {/*    </Table.Tr>*/}
            {/*  ))}*/}
            {/*</Table.Tbody>*/}
          </Table>
        </Table.ScrollContainer>
      </Stack>
    </AppLayout>
  )
}

export default Show
