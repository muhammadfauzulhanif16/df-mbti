import React, { useEffect } from 'react'
import { notifications } from '@mantine/notifications'
import { Head, useForm } from '@inertiajs/react'
import { NavBar } from '@/Components/NavBar.jsx'
import {
  Button,
  Center,
  Group,
  NumberInput,
  PasswordInput,
  Radio,
  SimpleGrid,
  TextInput,
  Title
} from '@mantine/core'
import { YearPickerInput } from '@mantine/dates'
import { router } from '@inertiajs/core'

const Create = (props) => {
  useEffect(() => {
    if (props.meta) {
      notifications.show({
        title: props.meta.title,
        message: props.meta.message,
        color: props.meta.status ? 'green' : 'red',
        autoClose: 2000,
        withBorder: true
      })
    }
    
  }, [props.meta])
  
  const form = useForm({
    status: '',
    nama: '',
    nidn: '',
    email: '',
    tahun_ajaran: '',
    no_hp: '',
    password: ''
  })
  
  return (
    <>
      <Head title="Tambah Dosen" />
      
      <NavBar title="Beranda" authed={props.auth.user} />
      
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('lecturers.store'))
        }}>
          <Title align="center" mb={32}>Masukkan Data Dosen</Title>
          
          <Radio.Group
            label="Status"
            withAsterisk
            onChange={(value) => form.setData('status', value)}
          >
            <Group mt="xs">
              <Radio value="Ketua Program Studi" label="Ketua Program Studi" />
              <Radio value="Dosen Pembimbing Akademik"
                     label="Dosen Pembimbing Akademik" />
            </Group>
          </Radio.Group>
          
          <SimpleGrid cols={2} my={16}>
            <TextInput
              withAsterisk
              label="Nama"
              placeholder="Masukkan nama..."
              onChange={(e) => form.setData('nama', e.target.value)}
            />
            
            <NumberInput
              withAsterisk
              label="NIDN"
              hideControls
              placeholder="Masukkan NIDN..."
              onChange={(value) => form.setData('nidn', value)}
            />
            
            <TextInput
              withAsterisk
              type="email"
              label="Surel"
              placeholder="Masukkan Surel..."
              onChange={(e) => form.setData('email', e.target.value)}
            />
            
            <YearPickerInput
              withAsterisk
              label="Tahun Ajaran"
              placeholder="Masukkan Tahun Ajaran..."
              onChange={(value) => form.setData('tahun_ajaran', value.getFullYear())}
            />
            
            <NumberInput
              withAsterisk
              label="No HP"
              hideControls
              placeholder="Masukkan No HP..."
              onChange={(value) => form.setData('no_hp', value)}
            />
            
            <PasswordInput
              withAsterisk
              value={form.data.nidn}
              label="Kata Sandi"
              placeholder="Masukkan Kata Sandi..."
              onChange={(e) => form.setData('password', e.target.value)}
            />
          </SimpleGrid>
          
          <Button.Group>
            <Button
              variant="outline"
              color="red"
              disabled={form.processing}
              type="submit"
              fullWidth
              onClick={() => router.get(route('lecturers.index'))}
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
    </>
  )
}

export default Create
