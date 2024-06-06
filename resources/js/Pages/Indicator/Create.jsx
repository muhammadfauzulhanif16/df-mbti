import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  Center,
  Divider,
  FileButton,
  TextInput,
  Title
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Create = (props) => {
  const form = useForm({
    file: null,
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
          
          <FileButton variant="light" color="green" w="100%"
                      onChange={(file) => form.setData('file', file)}
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
            {(props) =>
              <Button {...props}>{form.data.file ? form.data.file.name : 'Pilih file excel'}</Button>}
          </FileButton>
          
          <Divider my={16} label="Atau" labelPosition="center" />
          
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
