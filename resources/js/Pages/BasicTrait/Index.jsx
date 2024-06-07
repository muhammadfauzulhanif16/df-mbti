import React, { useState } from 'react'
import {
	Button,
	SimpleGrid,
	Stack,
	Table,
	TextInput,
	Tooltip,
} from '@mantine/core'
import { IconPlus, IconUser } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
	console.log(props)
	const [search, setSearch] = useState('')

	const basicTraits = props.basic_traits.filter((basic_trait) =>
		basic_trait.name.toLowerCase().includes(search.toLowerCase()),
	)

	const THList = ['#', 'Kode Kategori Soal', 'Nama Kategori Soal', 'Aksi']

	return (
		<AppLayout
			title="Kategori Soal"
			activeNav="Kategori Soal"
			authed={props.auth.user}
			meta={props.meta}
		>
			<Stack p={16}>
				<SimpleGrid
					cols={{
						base: 1,
						xs: 2,
					}}
					justify="space-between"
				>
					<TextInput
						leftSection={<IconUser />}
						placeholder="Cari kategori soal..."
						value={search}
						onChange={(event) => setSearch(event.currentTarget.value)}
					/>

					<Button
						leftSection={<IconPlus />}
						onClick={() => router.get(route('basic-traits.create'))}
					>
						Tambah Kategori Soal
					</Button>
				</SimpleGrid>

				<Table.ScrollContainer>
					<Table
						horizontalSpacing="xl"
						verticalSpacing="sm"
						highlightOnHover
						withTableBorder
						withColumnBorders
					>
						<Table.Thead>
							<Table.Tr>
								{THList.map((th, id) => (
									<Table.Th
										key={id}
										style={{ whiteSpace: 'nowrap' }}
									>
										{th}
									</Table.Th>
								))}
							</Table.Tr>
						</Table.Thead>

						<Table.Tbody>
							{basicTraits.map((basicTrait, id) => (
								<Table.Tr key={id}>
									<Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
									<Table.Td style={{ whiteSpace: 'nowrap' }}>
										{basicTrait.code}
									</Table.Td>
									<Table.Td style={{ whiteSpace: 'nowrap' }}>
										{basicTrait.name}
									</Table.Td>
									<Table.Td style={{ whiteSpace: 'nowrap' }}>
										<Button.Group>
											<Button
												variant="outline"
												color="yellow"
												onClick={() =>
													router.get(route('basic-traits.edit', basicTrait))
												}
											>
												Ubah
											</Button>

											<Tooltip
												disabled={!basicTrait.statements.length}
												label="Tidak bisa dihapus, karena memiliki pertanyaan!"
											>
												<Button
													variant="outline"
													color="red"
													disabled={basicTrait.statements.length}
													onClick={() =>
														router.delete(
															route('basic-traits.destroy', basicTrait),
														)
													}
												>
													Hapus
												</Button>
											</Tooltip>
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
