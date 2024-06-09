import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Center, Text, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

const Edit = (props) => {
  const form = useForm({
    personality: props.guide.personality,
    development: props.guide.development,
    job: props.guide.job
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
          
          <Text fz={14}>Saran Pekerjaan</Text>
          <RichTextEditor
            styles={{
              content: {
                border: '1px solid #dcdcdc'
              }
            }}
            editor={useEditor({
              extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
              content: form.data.job,
              onUpdate: ({ editor }) => {
                form.setData('development', editor.getHTML())
              }
            })}>
            <RichTextEditor.Content
            />
          </RichTextEditor>
          
          <Text fz={14} mt={16}>Saran Pengembangan</Text>
          <RichTextEditor
            styles={{
              content: {
                border: '1px solid #dcdcdc'
              }
            }}
            editor={useEditor({
              extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
              content: form.data.development,
              onUpdate: ({ editor }) => {
                form.setData('development', editor.getHTML())
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
