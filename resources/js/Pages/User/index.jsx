import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { SegmentedControl, Table } from '@mantine/core'

const User = (props) => {
  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' }
  ]
  
  return (
    <AppLayout
      meta={props.meta}
      title="Pengguna"
      authed={props.auth.user}
    >
      <h1>Pengguna</h1>
      
      <SegmentedControl
        fullWidth size="lg" radius="xl" color="blue"
        data={['Dosen', 'Mahasiswa']} />
      
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{elements.map((element) => (
          <Table.Tr key={element.name}>
            <Table.Td>{element.position}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.symbol}</Table.Td>
            <Table.Td>{element.mass}</Table.Td>
          </Table.Tr>))}
        </Table.Tbody>
      </Table>
    </AppLayout>
  )
}

export default User
