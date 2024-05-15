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
import { router } from '@inertiajs/core'

const Edit = (props) => {
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
    status: props.lecturer.user.peran,
    nama: props.lecturer.user.nama,
    nidn: props.lecturer.nidn,
    email: props.lecturer.user.email,
    tahun_ajaran: props.lecturer.tahun_ajaran,
    no_hp: props.lecturer.user.no_hp,
    password: ''
  })
  
  return (
    <>
      <Head title="Ubah Dosen" />
      
      <NavBar title="Dosen" authed={props.auth.user} />
      
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.put(route('lecturers.update', props.lecturer.user.id))
        }}>
          <Title align="center" mb={32}>Ubah Data Dosen</Title>
          
          <Radio.Group
            mb={16}
            value={form.data.status}
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
          
          <SimpleGrid cols={2}>
            < TextInput
              withAsterisk
              label="Nama"
              value={form.data.nama}
              placeholder="Masukkan nama..."
              onChange={(e) => form.setData('nama', e.target.value)}
            />
            
            <NumberInput
              withAsterisk
              label="NIDN"
              hideControls
              value={form.data.nidn}
              placeholder="Masukkan NIDN..."
              onChange={(value) => form.setData('nidn', value)}
            />
            
            <TextInput
              withAsterisk
              type="email"
              value={form.data.email}
              label="Surel"
              placeholder="Masukkan Surel..."
              onChange={(e) => form.setData('email', e.target.value)}
            />
            
            <NumberInput
              withAsterisk
              value={form.data.tahun_ajaran}
              label="Tahun Ajaran"
              placeholder="Masukkan Tahun Ajaran..."
              onChange={(value) => form.setData('tahun_ajaran', value.toString())}
            />
            
            <NumberInput
              withAsterisk
              label="No HP"
              value={form.data.no_hp}
              hideControls
              placeholder="Masukkan No HP..."
              onChange={(value) => form.setData('no_hp', value.toString())}
            />
            
            <PasswordInput
              value={form.data.password}
              label="Kata Sandi"
              placeholder="Masukkan Kata Sandi..."
              onChange={(e) => form.setData('password', e.target.value)}
            />
          </SimpleGrid>
          
          <Button.Group mt={32}>
            <Button
              variant="outline"
              color="red"
              disabled={form.processing}
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
              Ubah
            </Button>
          </Button.Group>
        </form>
      </Center>
    </>
  )
}

export default Edit
