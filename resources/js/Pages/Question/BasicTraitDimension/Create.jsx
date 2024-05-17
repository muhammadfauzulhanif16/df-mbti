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
    <AppLayout title="Tambah Kategori Soal" activeNav="Kategori Soal"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('basic-trait-dimensions.store'))
        }}>
          <Title align="center" mb={32}>Tambah Data Kategori Soal</Title>
          
          <TextInput
            withAsterisk
            label="Nama Kategori Soal"
            placeholder="Masukkan nama kategori soal..."
            onChange={(e) => form.setData('name', e.target.value)}
          />
          
          <Button.Group mt={32}>
            <Button
              variant="outline"
              color="red"
              disabled={form.processing}
              fullWidth
              onClick={() => router.get(route('categories.index'))}
            >
              Batal
            </Button>
            <Button
              fullWidth
              loading={form.processing}
              type="submit"
            >
              Tambah
            </Button>
          </Button.Group>
        </form>
      </Center>
    </AppLayout>
  )
}

export default Create
