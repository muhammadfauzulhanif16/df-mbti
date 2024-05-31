import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Center, Textarea, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Create = (props) => {
  const form = useForm({
    personality: '',
    development: ''
  })
  
  return (
    <AppLayout title="Tambah Panduan" activeNav="Panduan"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('guides.store'))
        }}>
          <Title align="center" mb={32}>Masukan Saran Pengembangan</Title>
          
          <TextInput
            withAsterisk
            label="Tipe Kepribadian"
            placeholder="Masukkan tipe kepribadian..."
            onChange={(e) => form.setData('personality', e.target.value)}
          />
          
          <Textarea
            withAsterisk
            label="Saran Pengembangan"
            placeholder="Masukkan saran pengembangan..."
            onChange={(e) => form.setData('development', e.target.value)}
          />
          
          <Button.Group mt={32}>
            <Button
              variant="outline"
              color="red"
              disabled={form.processing}
              fullWidth
              onClick={() => router.get(route('guides.index'))}
            >
              Batal
            </Button>
            <Button
              fullWidth
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
