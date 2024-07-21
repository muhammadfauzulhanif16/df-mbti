import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Flex, Select, Stack, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { IconCategory, IconQuote } from '@tabler/icons-react'

const Create = (props) => {
  const form = useForm({
    name: '',
    basic_trait_id: '',
    indicator_id: props.indicator.id,
  })
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('statements.store', { indicator: props.indicator.id }))
    }}>
      <AppLayout title="Tambah Pertanyaan" activeNav="Soal"
                 authed={props.auth.user} meta={props.meta}>
        <Stack px={160}>
          <Title align="center" mb={32}>Masukkan Data Pertanyaan</Title>
          
          <Select styles={{
            label: { marginBottom: 8 },
            input: {
              height: 48,
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16,
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 },
          }}
                  mb={16}
                  leftSection={<IconCategory />}
                  label="Kategori Soal"
                  placeholder="Masukkan kategori soal..."
                  clearable
                  searchable
                  withAsterisk
                  nothingFoundMessage="Tidak ada kategori soal"
                  checkIconPosition="right"
                  data={props.basic_traits.map((basic_trais) => ({
                    label: `${basic_trais.name} (${basic_trais.code})`,
                    value: basic_trais.id,
                  }))}
                  onChange={(value) => {
                    form.setData('basic_trait_id', value)
                    
                    if (!value) {
                      form.setError({
                        basic_trait_id:
                          'Dosen pembimbing akademik tidak boleh kosong.',
                      })
                    } else {
                      form.clearErrors('basic_trait_id')
                    }
                  }}
                  error={form.errors.basic_trait_id}
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
          }} leftSection={<IconQuote />}
                     withAsterisk
                     label="Pertanyaan"
                     placeholder="Masukkan pertanyaan..."
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
                    onClick={() => router.get(route('statements.index', props.indicator))}
            >
              Batal
            </Button>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
                    fullWidth
                    disabled={form.data.file ? false : form.hasErrors || Object.entries(form.data).some(([key, value]) => key !== 'indicator_id' && !value)}
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
