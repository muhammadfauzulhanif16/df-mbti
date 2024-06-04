import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  Center,
  Divider,
  FileButton,
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
  IconPhone,
  IconUser
} from '@tabler/icons-react'
import { YearPickerInput } from '@mantine/dates'

const Create = (props) => {
  const form = useForm({
    file: null,
    full_name: '',
    student_id_number: '',
    phone_number: '',
    academic_year: '',
    email: '',
    password: '',
    supervisor_id: ''
  })
  
  useEffect(() => {
    if (form.data.student_id_number) {
      form.setData('password', form.data.student_id_number)
    }
  }, [form.data.student_id_number])
  
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
          
          <FileButton variant="light" color="green" w="100%"
                      onChange={(file) => form.setData('file', file)}
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
            {(props) =>
              <Button {...props}>{form.data.file ? form.data.file.name : 'Pilih file excel'}</Button>}
          </FileButton>
          
          <Divider my={16} label="Atau" labelPosition="center" />
          
          <SimpleGrid cols={2} my={16}>
            <TextInput
              leftSection={<IconUser />}
              withAsterisk
              label="Nama Lengkap"
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
              label="Tahun Ajaran"
              placeholder="Masukkan tahun ajaran..."
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
              withAsterisk
              disabled
              value={form.data.student_id_number}
              label="Kata Sandi (Default: NIM)"
              placeholder="Masukkan kata sandi..."
            />
          </SimpleGrid>
          
          <Select
            leftSection={<IconUser />}
            label="Dosen Pembimbing Akademik"
            placeholder="Masukkan Dosen Pembimbing Akademik..."
            clearable
            searchable
            withAsterisk
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

export default Create
