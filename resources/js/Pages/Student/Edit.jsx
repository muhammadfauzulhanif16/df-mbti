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
  console.log(props)
  const form = useForm({
    full_name: props.user.full_name,
    student_id_number: props.user.id_number,
    phone_number: props.user.phone_number,
    academic_year: props.user.student.academic_year,
    email: props.user.email,
    password: '',
    supervisor_id: props.user.student.supervisor_id
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
                
                if (!value) {
                  form.setError({
                    full_name:
                      'Nama lengkap tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('full_name')
                }
              }}
              error={form.errors.full_name}
            />
            
            <NumberInput
              withAsterisk
              value={form.data.student_id_number}
              label="NIM"
              hideControls
              placeholder="Masukkan NIM..."
              onChange={(value) => {
                form.setData('student_id_number', value)
                
                if (!value) {
                  form.setError({
                    student_id_number:
                      'NIM tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('student_id_number')
                }
                
                if (value.toString().length < 10 || value.toString().length > 10) {
                  form.setError({
                    student_id_number:
                      'NIM harus 10 digit.'
                  })
                } else {
                  form.clearErrors('student_id_number')
                }
              }}
              error={form.errors.student_id_number}
            />
            
            <NumberInput
              leftSection={<IconPhone />}
              withAsterisk
              value={form.data.phone_number}
              label="Nomor Telepon"
              hideControls
              placeholder="Masukkan nomor telepon..."
              onChange={(value) => {
                form.setData('phone_number', value.toString())
                
                if (!value) {
                  form.setError({
                    phone_number:
                      'Nomor telepon tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('phone_number')
                }
                
                if (value.toString().length < 10 || value.toString().length > 13) {
                  form.setError({
                    phone_number:
                      'Nomor telepon harus 10-13 digit.'
                  })
                } else {
                  form.clearErrors('phone_number')
                }
              }}
              error={form.errors.phone_number}
            />
            
            <YearPickerInput
              leftSection={<IconCalendar />}
              withAsterisk
              value={new Date(form.data.academic_year)}
              label="Tahun Akademik"
              placeholder="Masukkan tahun akademik..."
              onChange={(value) => {
                if (!value) {
                  form.setError({
                    academic_year:
                      'Tahun akademik tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('academic_year')
                  form.setData('academic_year', value.getFullYear().toString())
                }
              }}
              error={form.errors.academic_year}
            />
            
            <TextInput
              leftSection={<IconMail />}
              withAsterisk
              type="email"
              value={form.data.email}
              label="Email"
              placeholder="Masukkan email..."
              onChange={(e) => {
                form.setData('email', e.target.value.toLowerCase())
                
                if (!e.target.value) {
                  form.setError({
                    email:
                      'Email tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('email')
                }
              }}
              error={form.errors.email}
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
            value={form.data.supervisor_id}
            searchable
            nothingFoundMessage="Tidak ada dosen pembimbing akademik"
            checkIconPosition="right"
            data={props.lecturers.map((lecturer) => ({
              label: lecturer.user.full_name,
              value: lecturer.user.id
            }))}
            onChange={(value) => {
              form.setData('supervisor_id', value)
              
              if (!value) {
                form.setError({
                  supervisor_id:
                    'Dosen pembimbing akademik tidak boleh kosong.'
                })
              } else {
                form.clearErrors('supervisor_id')
              }
            }}
            error={form.errors.supervisor_id}
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
                form.data.supervisor_id === ''
              }
              fullWidth
              loading={form.processing}
              type="submit"
            >
              Simpan
            </Button>
          </Button.Group>
        </form>
      </Center>
    </AppLayout>
  )
}

export default Edit
