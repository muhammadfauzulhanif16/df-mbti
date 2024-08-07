import { AppLayout } from '@/Layouts/AppLayout'
import { Box, Button, Table, Title } from '@mantine/core'
import { router } from '@inertiajs/core'

export const Index = (props) => {
  console.log(props)
  return (
    <AppLayout
      title="Hasil"
      activeNav="Hasil"
      authed={props.auth.user}
      meta={props.meta}
    >
      <Title mb={32} align="center">Hasil Test Sebelumnya</Title>
      
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
                <Table.Th px={16} py={0}
                          style={{ whiteSpace: 'nowrap' }}>No</Table.Th>
                <Table.Th px={16} py={0}
                          style={{ whiteSpace: 'nowrap' }}>Tipe
                                                           Kepribadian</Table.Th>
                <Table.Th px={16} py={0}
                          style={{ whiteSpace: 'nowrap' }}>Saran
                                                           Pekerjaan</Table.Th>
                <Table.Th px={16} py={0}
                          style={{ whiteSpace: 'nowrap' }}>Tanggal
                                                           Pengerjaan</Table.Th>
                <Table.Th px={16} py={0}
                          style={{ whiteSpace: 'nowrap' }}>Waktu
                                                           Selesai</Table.Th>
                <Table.Th px={16} py={0}
                          style={{ whiteSpace: 'nowrap' }}>Opsi</Table.Th>
              </Table.Tr>
            </Table.Thead>
            
            <Table.Tbody>
              {props.tests.map((test, id) => (
                <Table.Tr key={id} h={64}>
                  <Table.Td px={16} py={0}
                            style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td px={16} py={0}
                            style={{ whiteSpace: 'nowrap' }}>{test.personality}</Table.Td>
                  <Table.Td px={16} py={0}
                            style={{ whiteSpace: 'nowrap' }}>{test.work.name}</Table.Td>
                  <Table.Td px={16} py={0} style={{ whiteSpace: 'nowrap' }}>
                    {new Date(test.created_at).toLocaleDateString('id-ID')}
                  </Table.Td>
                  <Table.Td px={16} py={0}
                            style={{ whiteSpace: 'nowrap' }}>
                    {test.time}
                  </Table.Td>
                  <Table.Td px={16} py={0}
                            style={{ whiteSpace: 'nowrap' }}>
                    <Button px={16} h={48}
                            radius={32}
                            styles={{ section: { marginRight: 16 } }}
                            variant="outline"
                            onClick={() => router.get(route('tests.show', test.id))}>Detail</Button>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Box>
    </AppLayout>
  )
}

export default Index
