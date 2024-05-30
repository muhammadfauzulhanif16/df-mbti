import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Center, Select, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Edit = (props) => {
  const form = useForm({
    name: props.statement.name,
    basic_trait_id: props.statement.basic_trait_id,
    indicator_id: props.indicator.id
  })
  console.log(props)
  return (
    <AppLayout title="Tambah Pertanyaan" activeNav="Soal"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.put(route('statements.update', {
            indicator: props.indicator,
            statement: props.statement
          }))
        }}>
          <Title align="center" mb={32}>Tambah Data Pertanyaan</Title>
          
          <Select
            mb={16}
            value={form.data.basic_trait_id}
            label="Kategori Soal"
            placeholder="Masukkan kategori soal..."
            clearable
            searchable
            withAsterisk
            nothingFoundMessage="Tidak ada kategori soal"
            checkIconPosition="right"
            data={props.basic_traits.map((basic_trais) => ({
              label: `${basic_trais.name} (${basic_trais.code})`,
              value: basic_trais.id
            }))}
            onChange={(value) => {
              form.setData('basic_trait_id', value)
              
              if (!value) {
                form.setError({
                  basic_trait_id:
                    'Dosen pembimbing akademik tidak boleh kosong.'
                })
              } else {
                form.clearErrors('basic_trait_id')
              }
            }}
            error={form.errors.basic_trait_id}
          />
          
          <TextInput
            value={form.data.name}
            withAsterisk
            label="Pertanyaan"
            placeholder="Masukkan pertanyaan..."
            onChange={(e) => form.setData('name', e.target.value)}
          />
          
          <Button.Group mt={32}>
            <Button
              variant="outline"
              color="red"
              disabled={form.processing}
              fullWidth
              onClick={() => router.get(route('indicators.index'))}
            >
              Batal
            </Button>
            <Button
              fullWidth
              disabled={
                form.data.basic_trait_id === '' ||
                form.data.name === ''
              }
              loading={form.processing}
              type="submit"
            >
              Simpan
            </Button>
          </Button.Group>
        </form>
      </Center>
    </AppLayout>
  )
}

export default Edit
