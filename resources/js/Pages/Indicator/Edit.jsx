import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Center, Select, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Create = (props) => {
  const form = useForm({
    basic_trait_id: props.indicator.basic_trait_id,
    name: props.indicator.name
  })
  
  return (
    <AppLayout title="Ubah Soal" activeNav="Soal"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.put(route('indicators.update', props.indicator))
        }}>
          <Title align="center" mb={32}>Ubah Data Soal</Title>
          
          <TextInput
            withAsterisk
            label="Nama Soal"
            value={form.data.name}
            placeholder="Masukkan nama soal..."
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

export default Create
