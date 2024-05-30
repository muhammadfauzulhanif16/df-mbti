import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Center, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Create = (props) => {
  const form = useForm({
    name: ''
  })
  
  return (
    <AppLayout title="Tambah Soal" activeNav="Soal"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('indicators.store'))
        }}>
          <Title align="center" mb={32}>Tambah Data Soal</Title>
          
          <TextInput
            withAsterisk
            label="Nama Soal"
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
