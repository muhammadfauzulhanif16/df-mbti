import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Center, List, Text, TextInput, Title } from '@mantine/core'
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
  console.log(props)
  return (
    <AppLayout title="Tambah Tipe Kepribadian" activeNav="Kepribadian"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('personalities.store'))
        }}>
          <Title order={6}>Keterangan Nama Tipe Kepribadian:</Title>
          <List mb={16} style={{
            display: 'flex',
            gap: 32
          }}>
            {props.basic_traits.map((basic_trait) => (
              <List.Item
                key={basic_trait.id}>{`${basic_trait.name} (${basic_trait.code})`}</List.Item>))}
          </List>
          
          <Title align="center" mb={32}>Tambah Data Tipe Kepribadian</Title>
          
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
