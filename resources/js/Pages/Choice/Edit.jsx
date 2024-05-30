import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Center, NumberInput, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Edit = (props) => {
  const form = useForm({
    name: props.choice.name,
    value: props.choice.value
  })
  console.log(props)
  return (
    <AppLayout title="Tambah Jawaban" activeNav="Jawaban"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.put(route('choices.update', props.choice.id))
        }}>
          <Title align="center" mb={32}>Tambah Jawaban</Title>
          
          <TextInput
            withAsterisk
            label="Nama Jawaban"
            placeholder="Masukkan nama jawaban..."
            mb={16}
            onChange={(e) => form.setData('name', e.target.value)}
            value={form.data.name}
          />
          
          <NumberInput
            withAsterisk
            hideControls
            label="Bobot Penilaian"
            placeholder="Masukkan bobot penilaian..."
            onChange={(value) => form.setData('value', value.toString())}
            value={form.data.value}
          />
          
          <Button.Group mt={32}>
            <Button
              variant="outline"
              color="red"
              disabled={form.processing}
              fullWidth
              onClick={() => router.get(route('choices.index'))}
            >
              Batal
            </Button>
            <Button
              fullWidth
              disabled={
                form.data.name === '' ||
                form.data.value === ''
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
