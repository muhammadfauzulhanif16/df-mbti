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
    nama: '',
    nim: '',
    email: '',
    tahun_ajaran: '',
    no_hp: '',
    password: '',
    dpa: ''
  })
  
  return (
    <>
      <Head title="Tambah Mahasiswa" />
      
      <NavBar title="Mahasiswa" authed={props.auth.user} />
      
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('students.store'))
        }}>
          <Title align="center" mb={32}>Masukkan Data Mahasiswa</Title>
          
          <SimpleGrid cols={2} my={16}>
            <TextInput
              withAsterisk
              label="Nama"
              placeholder="Masukkan nama..."
              onChange={(e) => form.setData('nama', e.target.value)}
            />
            
            <NumberInput
              withAsterisk
              label="NIM"
              hideControls
              placeholder="Masukkan NIM..."
              onChange={(value) => form.setData('nim', value)}
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
              onChange={(value) => form.setData('no_hp', '0' + value.toString())}
            />
            
            <PasswordInput
              withAsterisk
              value={form.data.nim}
              label="Kata Sandi"
              placeholder="Masukkan Kata Sandi..."
              onChange={(e) => form.setData('password', e.target.value)}
            />
          </SimpleGrid>
          
          <Select
            label="Dosen Pembimbing Akademik"
            placeholder="Masukkan Dosen Pembimbing Akademik..."
            clearable
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
              Simpan
            </Button>
          </Button.Group>
        </form>
      </Center>
    </>
  )
}

export default Create
