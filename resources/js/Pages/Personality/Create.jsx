import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  TextInput,
  Title
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Link, RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { IconArticle } from '@tabler/icons-react'

const Create = (props) => {
  const form = useForm({
    name: '',
    description: '',
    job: '',
    detail: ''
  })
  console.log(props)
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('personalities.store'))
    }}>
      <AppLayout title="Tambah Tipe Kepribadian" activeNav="Kepribadian"
                 authed={props.auth.user} meta={props.meta}>
        
        <Box mb={32}>
          <Title order={6} mb={8}>Keterangan Nama Tipe Kepribadian:</Title>
          <SimpleGrid cols={props.basic_traits.length}>
            {props.basic_traits.map((basic_trait) => (
              <Text>{`${basic_trait.name} (${basic_trait.code})`}</Text>
            ))}
          </SimpleGrid>
        </Box>
        
        <Title align="center" mb={32}>Tambah Data Tipe Kepribadian</Title>
        
        <TextInput
          mb={16}
          leftSection={<IconArticle />}
          styles={{
            label: { marginBottom: 8 },
            input: {
              height: 48,
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 }
          }}
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
            extensions: [StarterKit, Link, Placeholder.configure({ placeholder: 'Masukkan deskripsi...' })],
            content: form.data.development,
            onUpdate: ({ editor }) => {
              form.setData('description', editor.getHTML())
            }
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
        
        <Text fz={14}>Saran Pekerjaan</Text>
        <RichTextEditor
          mb={16}
          styles={{
            content: {
              border: '1px solid #dcdcdc'
            }
          }}
          editor={useEditor({
            extensions: [StarterKit, Link, Placeholder.configure({ placeholder: 'Masukkan saran pekerjaan...' })],
            content: form.data.development,
            onUpdate: ({ editor }) => {
              form.setData('job', editor.getHTML())
            }
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
        
        <Text fz={14}>Rincian Pekerjaan</Text>
        <RichTextEditor
          mb={16}
          styles={{
            content: {
              border: '1px solid #dcdcdc'
            }
          }}
          editor={useEditor({
            extensions: [StarterKit, Link, Placeholder.configure({ placeholder: 'Masukkan rincian pekerjaan...' })],
            content: form.data.development,
            onUpdate: ({ editor }) => {
              form.setData('detail', editor.getHTML())
            }
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
        
        <Flex mt={24} gap={16}>
          <Button h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  variant="outline"
                  color="red"
                  disabled={form.processing}
                  fullWidth
                  onClick={() => router.get(route('personalities.index'))}
          >
            Batal
          </Button>
          <Button
            fullWidth
            h={48}
            disabled={form.hasErrors || Object.values(form.data).some(field => !field)}
            px={16} styles={{ section: { marginRight: 12 } }} radius={32}
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

export default Create
