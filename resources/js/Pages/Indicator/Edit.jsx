import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Flex, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { IconQuestionMark } from '@tabler/icons-react'

const Create = (props) => {
  const form = useForm({
    basic_trait_id: props.indicator.basic_trait_id,
    name: props.indicator.name
  })
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.put(route('indicators.update', props.indicator))
    }}>
      <AppLayout title="Ubah Soal" activeNav="Soal"
                 authed={props.auth.user} meta={props.meta}>
        
        <Title align="center" mb={32}>Ubah Data Soal</Title>
        
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
        }} leftSection={<IconQuestionMark />}
                   withAsterisk
                   label="Nama Soal"
                   value={form.data.name}
                   placeholder="Masukkan nama soal..."
                   onChange={(e) => form.setData('name', e.target.value)}
        />
        
        <Flex mt={24} gap={16}>
          <Button h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  variant="outline"
                  color="red"
                  disabled={form.processing}
                  fullWidth
                  onClick={() => router.get(route('indicators.index'))}
          >
            Batal
          </Button>
          <Button
            disabled={form.hasErrors || Object.entries(form.data).some((value) => !value)}
            fullWidth
            h={48}
            px={16} styles={{ section: { marginRight: 12 } }} radius={32}
            loading={form.processing}
            type="submit"
          >
            Simpan
          </Button>
        </Flex>
      
      </AppLayout>
    </form>)
}

export default Create
