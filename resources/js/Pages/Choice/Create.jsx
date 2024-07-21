import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  FileButton,
  Flex,
  NumberInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { IconCheck, IconFileSpreadsheet, IconWeight } from '@tabler/icons-react'

const Create = (props) => {
  const form = useForm({
    file: null,
    name: '',
    value: '',
  })
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('choices.store'))
    }}>
      <AppLayout title="Tambah Jawaban" activeNav="Jawaban"
                 authed={props.auth.user} meta={props.meta}>
        
        <Title align="center" mb={32}>Masukkan Data Jawaban</Title>
        
        
        {/*<Divider my={24} label="Atau" labelPosition="center"*/}
        {/*         styles={{ label: { fontSize: 14 } }} />*/}
        
        <Stack px={160}>
          <FileButton variant="light" color="green" w={320}
                      onChange={(file) => form.setData('file', file)}
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
            {(props) =>
              <Button px={16} styles={{ section: { marginRight: 16 } }} h={48}
                      radius={32} leftSection={
                <IconFileSpreadsheet />} {...props}>{form.data.file ? form.data.file.name : 'Pilih Berkas Excel'}</Button>}
          </FileButton>
          
          <NumberInput styles={{
            label: { marginBottom: 8 },
            input: {
              height: 48,
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16,
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 },
          }} leftSection={<IconWeight />}
                       withAsterisk
                       hideControls
                       label="Bobot Penilaian"
                       placeholder="Masukkan bobot penilaian..."
                       onChange={(value) => form.setData('value', value.toString())}
          />
          
          <TextInput styles={{
            label: { marginBottom: 8 },
            input: {
              height: 48,
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16,
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 },
          }} leftSection={<IconCheck />}
                     withAsterisk
                     label="Nama Jawaban"
                     placeholder="Masukkan nama jawaban..."
                     mb={16}
                     onChange={(e) => form.setData('name', e.target.value)}
          />
          
          <Flex mt={24} gap={16}>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
                    variant="outline"
                    color="red"
                    disabled={form.processing}
                    fullWidth
                    onClick={() => router.get(route('choices.index'))}
            >
              Batal
            </Button>
            <Button
              disabled={form.data.file ? false : form.hasErrors || Object.entries(form.data).some(([key, value]) => key !== 'file' && !value)}
              fullWidth
              h={48}
              px={16} styles={{ section: { marginRight: 12 } }} radius={32}
              loading={form.processing}
              type="submit"
            >
              Tambah
            </Button>
          </Flex>
        </Stack>
      
      
      </AppLayout>
    </form>
  )
}

export default Create
