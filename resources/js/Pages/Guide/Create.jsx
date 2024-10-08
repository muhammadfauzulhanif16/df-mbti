import React from 'react'
import { useForm } from '@inertiajs/react'
import { Box, Button, Flex, Stack, Text, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Link, RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { IconArticle } from '@tabler/icons-react'

const Create = (props) => {
  const form = useForm({
    personality: '',
    development: '',
    job: '',
  })
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('guides.store'))
    }}>
      <AppLayout title="Tambah Panduan" activeNav="Panduan"
                 authed={props.auth.user} meta={props.meta}>
        <Stack px={160}>
          <Title align="center" mb={32}>Masukan Saran Pengembangan</Title>
          
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
          }} leftSection={<IconArticle />}
                     withAsterisk
                     label="Tipe Kepribadian"
                     placeholder="Masukkan tipe kepribadian..."
                     onChange={(e) => form.setData('personality', e.target.value)}
          />
          
          <Box>
            <Text fz={14} mb={8}>Saran Pengembangan</Text>
            <RichTextEditor
              styles={{
                content: {
                  border: '1px solid #dcdcdc',
                },
              }}
              editor={useEditor({
                extensions: [StarterKit, Link, Placeholder.configure({ placeholder: 'Masukkan saran pengembangan...' })],
                content: form.data.development,
                onUpdate: ({ editor }) => {
                  form.setData('development', editor.getHTML())
                },
              })}>
              <RichTextEditor.Toolbar>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                  <RichTextEditor.ClearFormatting />
                  <RichTextEditor.Highlight />
                  <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                  <RichTextEditor.Subscript />
                  <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.AlignLeft />
                  <RichTextEditor.AlignCenter />
                  <RichTextEditor.AlignJustify />
                  <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>
                
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Undo />
                  <RichTextEditor.Redo />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>
              
              <RichTextEditor.Content
              />
            </RichTextEditor>
          </Box>
          
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
          }} leftSection={<IconArticle />}
                     withAsterisk
                     label="Saran Pekerjaan"
                     placeholder="Masukkan saran pekerjaan..."
                     onChange={(e) => form.setData('job', e.target.value)}
          />
          
          <Flex mt={24} gap={16}>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
                    variant="outline"
                    color="red"
                    disabled={form.processing}
                    fullWidth
                    onClick={() => router.get(route('guides.index'))}
            >
              Batal
            </Button>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
                    fullWidth
                    loading={form.processing}
                    type="submit"
            >
              Simpan
            </Button>
          </Flex>
        </Stack>
      </AppLayout>
    </form>
  )
}

export default Create
