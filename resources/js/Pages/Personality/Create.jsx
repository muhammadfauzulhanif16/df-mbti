import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  Center,
  Divider,
  FileButton,
  Text,
  TextInput,
  Title
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

const Create = (props) => {
  const form = useForm({
    name: '',
    description: '',
    job: '',
    detail: ''
  })
  
  return (
    <AppLayout title="Tambah Tipe Kepribadian" activeNav="Kepribadian"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('personalities.store'))
        }}>
          <Title align="center" mb={32}>Tambah Data Tipe Kepribadian</Title>
          
          
          <FileButton variant="light" color="green" w="100%"
                      onChange={(file) => form.setData('file', file)}
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
            {(props) =>
              <Button {...props}>{form.data.file ? form.data.file.name : 'Pilih file excel'}</Button>}
          </FileButton>
          
          <Divider my={16} label="Atau" labelPosition="center" />
          
          <TextInput
            mb={16}
            withAsterisk
            label="Nama Tipe Kepribadian"
            placeholder="Masukkan nama tipe kepribadian..."
            onChange={(e) => form.setData('name', e.target.value)}
          />
          
          <Text fz={14}>Deskripsi</Text>
          <RichTextEditor
            mb={16}
            styles={{
              content: {
                border: '1px solid #dcdcdc'
              }
            }}
            editor={useEditor({
              extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
              content: form.data.development,
              onUpdate: ({ editor }) => {
                form.setData('description', editor.getHTML())
              }
            })}>
            <RichTextEditor.Content
            />
          </RichTextEditor>
          
          <Text fz={14}>Saran Pekerjaan</Text>
          <RichTextEditor
            mb={16}
            styles={{
              content: {
                border: '1px solid #dcdcdc'
              }
            }}
            editor={useEditor({
              extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
              content: form.data.development,
              onUpdate: ({ editor }) => {
                form.setData('job', editor.getHTML())
              }
            })}>
            <RichTextEditor.Content
            />
          </RichTextEditor>
          
          <Text fz={14}>Detail Pekerjaan</Text>
          <RichTextEditor
            mb={16}
            styles={{
              content: {
                border: '1px solid #dcdcdc'
              }
            }}
            editor={useEditor({
              extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
              content: form.data.development,
              onUpdate: ({ editor }) => {
                form.setData('detail', editor.getHTML())
              }
            })}>
            <RichTextEditor.Content
            />
          </RichTextEditor>
          
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
