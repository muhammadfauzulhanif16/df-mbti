import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Flex, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { IconCategory, IconTypography } from '@tabler/icons-react'

const Edit = (props) => {
  const form = useForm({
    code: props.basic_trait.code,
    name: props.basic_trait.name
  })
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.put(route('basic-traits.update', props.basic_trait))
    }}>
      <AppLayout title="Tambah Kategori Soal" activeNav="Kategori Soal"
                 authed={props.auth.user} meta={props.meta}>
        <Title align="center" mb={32}>Ubah Data Kategori Soal</Title>
        
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
        }} leftSection={<IconTypography />}
                   withAsterisk
                   mb={16}
                   value={form.data.code}
                   label="Kode Kategori Soal"
                   placeholder="Masukkan kode kategori soal..."
                   onChange={(e) => form.setData('code', e.target.value)}
        />
        
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
        }} leftSection={<IconCategory />}
                   withAsterisk
                   value={form.data.name}
                   label="Nama Kategori Soal"
                   placeholder="Masukkan nama kategori soal..."
                   onChange={(e) => form.setData('name', e.target.value)}
        />
        
        <Flex mt={24} gap={16}>
          <Button h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  variant="outline"
                  color="red"
                  disabled={form.processing}
                  fullWidth
                  onClick={() => router.get(route('basic-traits.index'))}
          >
            Batal
          </Button>
          <Button h={48}
                  disabled={form.hasErrors || Object.entries(form.data).some((value) => !value)}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  fullWidth
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
