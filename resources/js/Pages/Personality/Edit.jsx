import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Center, Textarea, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Edit = (props) => {
  const form = useForm({
    name: props.personality.name,
    description: props.personality.description,
    job: props.personality.job,
    detail: props.personality.detail
  })
  
  return (
    <AppLayout title="Tambah Tipe Kepribadian" activeNav="Kepribadian"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.put(route('personalities.update', props.personality.id))
        }}>
          <Title align="center" mb={32}>Tambah Data Tipe Kepribadian</Title>
          
          <TextInput
            value={form.data.name}
            withAsterisk
            label="Nama Tipe Kepribadian"
            placeholder="Masukkan nama tipe kepribadian..."
            onChange={(e) => form.setData('name', e.target.value)}
          />
          
          <TextInput
            value={form.data.description}
            withAsterisk
            label="Deskripsi"
            placeholder="Masukkan Deskripsi..."
            onChange={(e) => form.setData('description', e.target.value)}
          />
          
          <TextInput
            value={form.data.job}
            withAsterisk
            label="Saran Pekerjaan"
            placeholder="Masukkan saran pekerjaan..."
            onChange={(e) => form.setData('job', e.target.value)}
          />
          
          <Textarea
            value={form.data.detail}
            withAsterisk
            label="Detail Pekerjaan"
            placeholder="Masukkan detail pekerjaan..."
            onChange={(e) => form.setData('detail', e.target.value)}
          />
          
          <Button.Group mt={32}>
            <Button
              variant="outline"
              color="red"
              disabled={form.processing}
              fullWidth
              onClick={() => router.get(route('perosnalities.index'))}
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
