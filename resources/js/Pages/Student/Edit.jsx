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
import { YearPickerInput } from '@mantine/dates'

const Edit = (props) => {
  const form = useForm({
    full_name: props.user.full_name,
    student_id_number: props.user.id_number,
    phone_number: props.user.phone_number,
    academic_year: props.user.student.academic_year,
    email: props.user.email,
    password: '',
    supervisor: props.user.student.supervisor
  })
  
  return (
    <AppLayout title="Ubah Mahasiswa" activeNav="Mahasiswa"
               authed={props.auth.user}
               meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.put(route('students.update', props.user))
        }}>
          <Title align="center" mb={32}>Ubah Data Mahasiswa</Title>
          
          <SimpleGrid cols={2} my={16}>
            <TextInput
              withAsterisk
              label="Nama Lengkap"
              value={form.data.full_name}
              placeholder="Masukkan nama lengkap..."
              onChange={(e) => {
                const value = e.target.value.replace(/\b\w/g, char => char.toUpperCase()).replace(/\B\w/g, char => char.toLowerCase())
                form.setData('full_name', value)
              }}
            />
            
            <NumberInput
              withAsterisk
              value={form.data.student_id_number}
              label="NIM"
              hideControls
              placeholder="Masukkan NIM..."
              onChange={(value) => form.setData('student_id_number', value)}
            />
            
            <NumberInput
              leftSection={<IconPhone />}
              withAsterisk
              value={form.data.phone_number}
              label="Nomor Telepon"
              hideControls
              placeholder="Masukkan nomor telepon..."
              onChange={(value) => form.setData('phone_number', value.toString())}
            />
            
            <YearPickerInput
              leftSection={<IconCalendar />}
              withAsterisk
              value={new Date(form.data.academic_year)}
              label="Tahun Akademik"
              placeholder="Masukkan tahun akademik..."
              onChange={(value) => form.setData('academic_year', value.getFullYear().toString())}
            />
            
            <TextInput
              leftSection={<IconMail />}
              withAsterisk
              type="email"
              value={form.data.email}
              label="Email"
              placeholder="Masukkan email..."
              onChange={(e) => form.setData('email', e.target.value.toLowerCase())}
            />
            
            <PasswordInput
              leftSection={<IconPassword />}
              label="Kata Sandi"
              placeholder="Masukkan kata sandi..."
              onChange={(e) => form.setData('password', e.target.value)}
            />
          </SimpleGrid>
          
          <Select
            label="Dosen Pembimbing Akademik"
            placeholder="Masukkan Dosen Pembimbing Akademik..."
            clearable
            withAsterisk
            value={form.data.supervisor}
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
              disabled={
                form.data.full_name === '' ||
                form.data.student_id_number === '' ||
                form.data.phone_number === '' ||
                form.data.academic_year === '' ||
                form.data.email === '' ||
                form.data.supervisor === ''
              }
              fullWidth
              loading={form.processing}
              type="submit"
            >
              Ubah
            </Button>
          </Button.Group>
        </form>
      </Center>
    </AppLayout>
  )
}

export default Edit
