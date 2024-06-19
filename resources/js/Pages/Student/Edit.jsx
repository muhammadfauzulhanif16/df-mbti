import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  Flex,
  Select,
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
    <form onSubmit={(e) => {
      e.preventDefault()
      form.put(route('students.update', props.user))
    }}>
      <AppLayout title="Ubah Mahasiswa" activeNav="Mahasiswa"
                 authed={props.auth.user}
                 meta={props.meta}>
        
        <Title align="center" mb={32}>Ubah Data Mahasiswa</Title>
        
        <SimpleGrid cols={2} my={16}>
          <TextInput
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 }
            }} leftSection={<IconUser />}
            withAsterisk
            label="Nama Lengkap"
            value={form.data.full_name}
            placeholder="Masukkan nama lengkap..."
            onChange={(e) => {
              form.setData('full_name', e.target.value)
              
              if (!e.target.value) {
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
          
          <TextInput
            type="number"
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 }
            }} leftSection={<IconId />}
            withAsterisk
            value={form.data.student_id_number}
            label="NIM"
            hideControls
            placeholder="Masukkan NIM..."
            onChange={(e) => {
              form.setData('student_id_number', e.target.value.toString())
              
              if (!e.target.value) {
                form.setError({
                  student_id_number:
                    'NIM tidak boleh kosong.'
                })
              } else {
                form.clearErrors('student_id_number')
              }
              
              if (e.target.value.toString().length < 10 || e.target.value.toString().length > 10) {
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
          
          <TextInput
            type="number" styles={{
            label: { marginBottom: 8 },
            input: {
              height: 48,
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 }
          }}
            leftSection={<IconPhone />}
            withAsterisk
            value={form.data.phone_number}
            label="Nomor Telepon"
            hideControls
            placeholder="Masukkan nomor telepon..."
            onChange={(e) => {
              form.setData('phone_number', e.target.value.toString())
              
              if (!e.target.value) {
                form.setError({
                  phone_number:
                    'Nomor telepon tidak boleh kosong.'
                })
              } else {
                form.clearErrors('phone_number')
              }
              
              if (e.target.value.toString().length < 10 || e.target.value.toString().length > 13) {
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
          
          <YearPickerInput styles={{
            label: { marginBottom: 8 },
            input: {
              height: 48,
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 }
          }}
                           leftSection={<IconCalendar />}
                           withAsterisk
                           value={new Date(form.data.academic_year)}
                           label="Tahun Angkatan"
                           placeholder="Masukkan tahun angkatan..."
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
          }}
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
          
          <TextInput
            type="password" styles={{
            label: { marginBottom: 8 },
            input: {
              height: 48,
              borderRadius: 32,
              paddingLeft: 50,
              paddingRight: 16
            },
            section: { marginLeft: 0, width: 48, height: 48 },
            error: { marginTop: 8 }
          }}
            leftSection={<IconPassword />}
            label="Kata Sandi"
            placeholder="Masukkan kata sandi..."
            onChange={(e) => form.setData('password', e.target.value)}
          />
        </SimpleGrid>
        
        <Select styles={{
          label: { marginBottom: 8 },
          input: {
            height: 48,
            borderRadius: 32,
            paddingLeft: 50,
            paddingRight: 16
          },
          section: { marginLeft: 0, width: 48, height: 48 },
          error: { marginTop: 8 }
        }}
                leftSection={<IconUser />}
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
        
        <Flex mt={24} gap={16}>
          <Button h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  variant="outline"
                  color="red"
                  disabled={form.processing}
                  fullWidth
                  onClick={() => router.get(route('students.index'))}
          >
            Batal
          </Button>
          <Button h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  disabled={form.hasErrors || Object.entries(form.data).some(([key, value]) => key !== 'password' && !value)}
                  fullWidth
                  loading={form.processing}
                  type="submit"
          >
            Simpan
          </Button>
        </Flex>
      </AppLayout>
    </form>
  )
}

export default Edit
