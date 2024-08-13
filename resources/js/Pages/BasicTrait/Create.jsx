import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  FileButton,
  Flex,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  IconCategory,
  IconFileSpreadsheet,
  IconTypography,
} from '@tabler/icons-react'

const Create = (props) => {
  const form = useForm({
    file: null,
    code: '',
    name: '',
    description: '',
  })
  return (<form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('basic-traits.store'))
    }}>
      <AppLayout title="Tambah Kategori Soal" activeNav="Kategori Soal"
                 authed={props.auth.user} meta={props.meta}>
        
        
        {/*<Divider my={24} label="Atau" labelPosition="center"*/}
        {/*         styles={{ label: { fontSize: 14 } }} />*/}
        
        <Stack px={160}>
          <Title align="center" mb={32}>Masukkan Data Kategori Soal</Title>
          
          <FileButton variant="light" color="green" w={320}
                      onChange={(file) => form.setData('file', file)}
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
            {(props) =>
              <Button px={16} styles={{ section: { marginRight: 16 } }} h={48}
                      
                      radius={32} leftSection={
                <IconFileSpreadsheet />} {...props}>{form.data.file ? form.data.file.name : 'Pilih Berkas Excel'}</Button>}
          </FileButton>
          
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
          }} leftSection={<IconTypography />}
                     withAsterisk
                     mb={16}
                     label="Kode Kategori"
                     placeholder="Masukkan kode kategori..."
                     onChange={(e) => form.setData('code', e.target.value)}
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
          }} leftSection={<IconCategory />}
                     withAsterisk
                     label="Nama Kategori"
                     placeholder="Masukkan nama kategori..."
                     onChange={(e) => form.setData('name', e.target.value)}
          />
          
          <Textarea styles={{
            label: { marginBottom: 8 },
            input: {
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16,
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 },
          }} leftSection={<IconCategory />}
                    withAsterisk
                    label="Deskripsi Kategori"
                    placeholder="Masukkan deskripsi kategori..."
                    onChange={(e) => form.setData('description', e.target.value)}
          />
          
          <Flex mt={24} gap={16}>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
                    variant="outline"
                    color="red"
                    disabled={form.processing}
                    fullWidth
                    onClick={() => router.get(route('basic-traits.index'))}
            >
              Batal
            </Button>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
                    fullWidth
                    disabled={form.data.file ? false : form.hasErrors || Object.entries(form.data).some(([key, value]) => key !== 'file' && !value)}
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
