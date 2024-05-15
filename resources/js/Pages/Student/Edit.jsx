import React, { useEffect } from 'react'
import { notifications } from '@mantine/notifications'
import { Head, useForm } from '@inertiajs/react'
import { NavBar } from '@/Components/NavBar.jsx'
import {
  Button,
  Center,
  NumberInput,
  PasswordInput,
  Select,
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
    nama: props.student.user.nama,
    nim: props.student.nim,
    email: props.student.user.email,
    tahun_ajaran: props.student.tahun_ajaran,
    no_hp: props.student.user.no_hp,
    password: '',
    dpa: props.student.dpa
  })
  
  console.log(form.data)
  return (
    <>
      <Head title="Ubah Mahasiswa" />
      
      <NavBar title="Mahasiswa" authed={props.auth.user} />
      
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.put(route('students.update', props.student.user.id))
        }}>
          <Title align="center" mb={32}>Ubah Data Mahasiswa</Title>
          
          <SimpleGrid cols={2} my={16}>
            <TextInput
              withAsterisk
              label="Nama"
              value={form.data.nama}
              placeholder="Masukkan nama..."
              onChange={(e) => form.setData('nama', e.target.value)}
            />
            
            <NumberInput
              withAsterisk
              label="NIM"
              hideControls
              value={form.data.nim}
              placeholder="Masukkan NIM..."
              onChange={(value) => form.setData('nim', value)}
            />
            
            <TextInput
              withAsterisk
              type="email"
              label="Surel"
              value={form.data.email}
              placeholder="Masukkan Surel..."
              onChange={(e) => form.setData('email', e.target.value)}
            />
            
            <NumberInput
              withAsterisk
              label="Tahun Ajaran"
              value={form.data.tahun_ajaran}
              placeholder="Masukkan Tahun Ajaran..."
              onChange={(value) => form.setData('tahun_ajaran', value.toString())}
            />
            
            <NumberInput
              withAsterisk
              label="No HP"
              hideControls
              value={form.data.no_hp}
              placeholder="Masukkan No HP..."
              onChange={(value) => form.setData('no_hp', value.toString())}
            />
            
            <PasswordInput
              label="Kata Sandi"
              placeholder="Masukkan Kata Sandi..."
              onChange={(e) => form.setData('password', e.target.value)}
            />
          </SimpleGrid>
          
          <Select
            label="Dosen Pembimbing Akademik"
            placeholder="Masukkan Dosen Pembimbing Akademik..."
            clearable
            value={form.data.dpa}
            searchable
            nothingFoundMessage="Tidak ada dosen pembimbing akademik"
            checkIconPosition="right"
            data={props.lecturers.map((lecturer) => lecturer.user.nama)}
            onChange={(value) => form.setData('dpa', value)}
          />
          
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
