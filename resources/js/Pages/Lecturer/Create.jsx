import React from 'react'
import { useForm } from '@inertiajs/react'
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
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  IconCalendar,
  IconId,
  IconMail,
  IconPassword,
  IconPhone,
  IconUser
} from '@tabler/icons-react'
import { YearPickerInput } from '@mantine/dates'

const Create = (props) => {
  const form = useForm({
    role: '',
    full_name: '',
    national_lecturer_id_number: '',
    phone_number: '',
    academic_year: '',
    email: '',
    password: ''
  })
  
  console.log(form)
  
  return (
    <AppLayout title="Tambah Dosen" activeNav="Dosen" authed={props.auth.user}
               meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('lecturers.store'))
        }}>
          <Title align="center" mb={32}>Tambah Data Dosen</Title>
          
          <Radio.Group
            mb={16}
            label="Status"
            withAsterisk
            onChange={(value) => {
              form.setData('role', value)
              
              if (!value) {
                form.setError({
                  role:
                    'Status tidak boleh kosong.'
                })
              } else {
                form.clearErrors('role')
              }
            }}
            error={form.errors.role}
          >
            <Group mt="xs">
              <Radio value="Ketua Program Studi" label="Ketua Program Studi" />
              <Radio value="Dosen Pembimbing Akademik"
                     label="Dosen Pembimbing Akademik" />
            </Group>
          </Radio.Group>
          
          <SimpleGrid cols={2}>
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
              leftSection={<IconId />}
              withAsterisk
              label="NIDN"
              hideControls
              placeholder="Masukkan NIDN..."
              onChange={(value) => {
                form.setData('national_lecturer_id_number', value)
                
                if (!value) {
                  form.setError({
                    national_lecturer_id_number:
                      'NIDN tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('national_lecturer_id_number')
                }
                
                if (value.toString().length < 10 || value.toString().length > 10) {
                  form.setError({
                    national_lecturer_id_number:
                      'NIDN harus 10 digit.'
                  })
                } else {
                  form.clearErrors('national_lecturer_id_number')
                }
              }}
              error={form.errors.national_lecturer_id_number}
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
              clearable
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
              value={form.data.national_lecturer_id_number}
              label="Kata Sandi"
              placeholder="Masukkan kata sandi..."
              onChange={(e) => {
                form.setData('password', e.target.value)
                
                if (!e.target.value) {
                  form.setError({
                    password:
                      'Kata sandi tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('password')
                }
              }}
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
              disabled={
                form.data.role === '' || form.data.full_name === '' || form.data.national_lecturer_id_number === '' ||
                form.data.phone_number === '' || form.data.academic_year === '' || form.data.email === ''
              }
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
