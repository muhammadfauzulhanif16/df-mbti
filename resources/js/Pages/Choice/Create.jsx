import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  Center,
  Divider,
  FileButton,
  NumberInput,
  TextInput,
  Title
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Create = (props) => {
  const form = useForm({
    file: null,
    name: '',
    value: ''
  })
  
  return (
    <AppLayout title="Tambah Jawaban" activeNav="Jawaban"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('choices.store'))
        }}>
          <Title align="center" mb={32}>Tambah Jawaban</Title>
          
          <FileButton variant="light" color="green" w="100%"
                      onChange={(file) => form.setData('file', file)}
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
            {(props) =>
              <Button {...props}>{form.data.file ? form.data.file.name : 'Pilih file excel'}</Button>}
          </FileButton>
          
          <Divider my={16} label="Atau" labelPosition="center" />
          
          <TextInput
            withAsterisk
            label="Nama Jawaban"
            placeholder="Masukkan nama jawaban..."
            mb={16}
            onChange={(e) => form.setData('name', e.target.value)}
          />
          
          <NumberInput
            withAsterisk
            hideControls
            label="Bobot Penilaian"
            placeholder="Masukkan bobot penilaian..."
            onChange={(value) => form.setData('value', value.toString())}
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
