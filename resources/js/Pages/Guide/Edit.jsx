import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Center, Textarea, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Edit = (props) => {
  const form = useForm({
    personality: props.guide.personality,
    development: props.guide.development
  })
  
  return (
    <AppLayout title="Ubah Panduan" activeNav="Panduan"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.put(route('guides.update', props.guide.id))
        }}>
          <Title align="center" mb={32}>Masukan Saran Pengembangan</Title>
          
          <TextInput
            value={form.data.personality}
            withAsterisk
            label="Tipe Kepribadian"
            placeholder="Masukkan tipe kepribadian..."
            onChange={(e) => form.setData('personality', e.target.value)}
          />
          
          <Textarea
            value={form.data.development}
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

export default Edit
