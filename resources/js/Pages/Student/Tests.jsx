import { AppLayout } from '@/Layouts/AppLayout'
import { Button, Flex, Table, Title } from '@mantine/core'
import { router } from '@inertiajs/core'

export const Index = (props) => {
  console.log(props)
  return (
    <AppLayout
      title="Hasil"
      activeNav="Mahasiswa"
      authed={props.auth.user}
      meta={props.meta}
    >
      <Flex p={32} justify="center" align="center" direction="column">
        <Title mb={32}>Hasil Test Mahasiswa</Title>
        
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>No</Table.Th>
              <Table.Th>Tipe Kepribadian</Table.Th>
              <Table.Th>Tanggal</Table.Th>
              <Table.Th>Waktu Selesai</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          
          <Table.Tbody>
            {props.tests.map((test, id) => (
              <Table.Tr key={id}>
                <Table.Td>{id + 1}</Table.Td>
                <Table.Td>{test.allMaxBasicTraitCodes}</Table.Td>
                <Table.Td>{test.created_at}</Table.Td>
                <Table.Td>{test.time}</Table.Td>
                <Table.Td>
                  <Button
                    onClick={() => router.get(route('results.show', test.id))}>Detail</Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Flex>
    </AppLayout>
  )
}

export default Index
