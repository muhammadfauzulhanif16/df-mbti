import React from 'react'
import { useForm } from '@inertiajs/react'
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
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  IconCalendar,
  IconMail,
  IconPassword,
  IconPhone
} from '@tabler/icons-react'

const Create = (props) => {
  const form = useForm({
    full_name: '',
    student_id_number: '',
    phone_number: '',
    academic_year: '',
    email: '',
    password: '',
    supervisor: ''
  })
  
  return (
    <AppLayout title="Tambah Mahasiswa" activeNav="Mahasiswa"
               authed={props.auth.user}
               meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('students.store'))
        }}>
          <Title align="center" mb={32}>Tambah Data Mahasiswa</Title>
          
          <SimpleGrid cols={2} my={16}>
            <TextInput
              withAsterisk
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap..."
              onChange={(e) => form.setData('full_name', e.target.value)}
            />
            
            <NumberInput
              withAsterisk
              label="NIM"
              hideControls
              placeholder="Masukkan NIM..."
              onChange={(value) => form.setData('student_id_number', value)}
            />
            
            <NumberInput
              leftSection={<IconPhone />}
              withAsterisk
              label="Nomor Telepon"
              hideControls
              placeholder="Masukkan nomor telepon..."
              onChange={(value) => form.setData('phone_number', value.toString())}
            />
            
            <NumberInput
              leftSection={<IconCalendar />}
              withAsterisk
              hideControls
              label="Tahun Akademik"
              placeholder="Masukkan tahun akademik..."
              onChange={(value) => form.setData('academic_year', value.toString())}
            />
            
            <TextInput
              leftSection={<IconMail />}
              withAsterisk
              type="email"
              label="Alamar Surel"
              placeholder="Masukkan alamat surel..."
              onChange={(e) => form.setData('email', e.target.value)}
            />
            
            <PasswordInput
              leftSection={<IconPassword />}
              withAsterisk
              label="Kata Sandi"
              placeholder="Masukkan kata sandi..."
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
            data={props.lecturers.map((lecturer) => lecturer.user.full_name)}
            onChange={(value) => form.setData('supervisor', value)}
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
              Tambah
            </Button>
          </Button.Group>
        </form>
      </Center>
    </AppLayout>
  )
}

export default Create
