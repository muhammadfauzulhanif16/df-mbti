import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Flex, NumberInput, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { IconCheck, IconWeight } from '@tabler/icons-react'

const Edit = (props) => {
  const form = useForm({
    name: props.choice.name,
    value: props.choice.value
  })
  console.log(props)
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.put(route('choices.update', props.choice.id))
    }}>
      <AppLayout title="Tambah Jawaban" activeNav="Jawaban"
                 authed={props.auth.user} meta={props.meta}>
        
        <Title align="center" mb={32}>Ubah Jawaban</Title>
        
        <TextInput styles={{
          label: { marginBottom: 8 },
          input: {
            height: 48,
            borderRadius: 32,
            paddingLeft: 50,
            paddingRight: 16
          },
          section: { marginLeft: 0, width: 48, height: 48 },
          error: { marginTop: 8 }
        }} leftSection={<IconCheck />}
                   withAsterisk
                   label="Nama Jawaban"
                   placeholder="Masukkan nama jawaban..."
                   mb={16}
                   onChange={(e) => form.setData('name', e.target.value)}
                   value={form.data.name}
        />
        
        <NumberInput styles={{
          label: { marginBottom: 8 },
          input: {
            height: 48,
            borderRadius: 32,
            paddingLeft: 50,
            paddingRight: 16
          },
          section: { marginLeft: 0, width: 48, height: 48 },
          error: { marginTop: 8 }
        }} leftSection={<IconWeight />}
                     withAsterisk
                     hideControls
                     label="Bobot Penilaian"
                     placeholder="Masukkan bobot penilaian..."
                     onChange={(value) => form.setData('value', value.toString())}
                     value={form.data.value}
        />
        
        <Flex mt={24} gap={16}>
          <Button h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  variant="outline"
                  color="red"
                  disabled={form.processing}
                  fullWidth
                  onClick={() => router.get(route('choices.index'))}
          >
            Batal
          </Button>
          <Button h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
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
        </Flex>
      </AppLayout>
    </form>
  )
}

export default Edit
