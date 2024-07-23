import React from 'react'
import { useForm } from '@inertiajs/react'
import { Button, Flex, Select, Stack, TextInput, Title } from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  IconId,
  IconMail,
  IconPassword,
  IconPhone,
  IconUser,
} from '@tabler/icons-react'

const Edit = (props) => {
  console.log(props)
  const form = useForm({
    full_name: props.user.full_name,
    student_id_number: props.user.id_number,
    phone_number: props.user.phone_number,
    academic_year: props.user.student.academic_year,
    email: props.user.email,
    password: '',
    supervisor_id: props.user.student.supervisor_id,
  })
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.put(route('students.update', props.user))
    }}>
      <AppLayout title="Ubah Mahasiswa" activeNav="Mahasiswa"
                 authed={props.auth.user}
                 meta={props.meta}>
        <Stack px={160}>
          <Title align="center" mb={32}>Ubah Data Mahasiswa</Title>
          
          <TextInput
            type="number"
            leftSection={<IconId />}
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
            withAsterisk
            label="NIM"
            hideControls
            placeholder="Masukkan NIM..."
            onChange={(e) => {
              form.setData({
                ...form.data,
                student_id_number: e.target.value.toString(),
                academic_year: e.target.value.substring(0, 4),
              })
              
              if (!e.target.value) {
                form.setError({
                  student_id_number:
                    'NIM tidak boleh kosong.',
                })
              } else {
                form.clearErrors('student_id_number')
              }
              
              if (e.target.value.toString().length < 10 || e.target.value.toString().length > 10) {
                form.setError({
                  student_id_number:
                    'NIM harus 10 digit.',
                })
              } else {
                form.clearErrors('student_id_number')
              }
            }}
            error={form.errors.student_id_number}
            value={form.data.student_id_number}
          />
          
          <TextInput
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
            leftSection={<IconUser />}
            withAsterisk
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap..."
            onChange={(e) => {
              form.setData('full_name', e.target.value)
              
              if (!e.target.value) {
                form.setError({
                  full_name:
                    'Nama lengkap tidak boleh kosong.',
                })
              } else {
                form.clearErrors('full_name')
              }
            }}
            error={form.errors.full_name}
            value={form.data.full_name}
          />
          
          {/*<YearPickerInput*/}
          {/*  styles={{*/}
          {/*    label: { marginBottom: 8 },*/}
          {/*    input: {*/}
          {/*      height: 48,*/}
          {/*      borderRadius: 32,*/}
          {/*      paddingLeft: 50,*/}
          {/*      paddingRight: 16,*/}
          {/*    },*/}
          {/*    section: { marginLeft: 0, width: 48, height: 48 },*/}
          {/*    error: { marginTop: 8 },*/}
          {/*  }}*/}
          {/*  leftSection={<IconCalendar />}*/}
          {/*  withAsterisk*/}
          {/*  label="Tahun Angkatan"*/}
          {/*  placeholder="Masukkan tahun angkatan..."*/}
          {/*  onChange={(value) => {*/}
          {/*    if (!value) {*/}
          {/*      form.setError({*/}
          {/*        academic_year:*/}
          {/*          'Tahun akademik tidak boleh kosong.',*/}
          {/*      })*/}
          {/*    } else {*/}
          {/*      form.clearErrors('academic_year')*/}
          {/*      form.setData('academic_year', value.getFullYear().toString())*/}
          {/*    }*/}
          {/*  }}*/}
          {/*  error={form.errors.academic_year}*/}
          {/*  value={new Date(form.data.academic_year)}*/}
          {/*/>*/}
          
          <TextInput
            type="number"
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
            leftSection={<IconPhone />}
            withAsterisk
            label="Nomor Telepon"
            hideControls
            placeholder="Masukkan nomor telepon..."
            onChange={(e) => {
              form.setData('phone_number', e.target.value.toString())
              
              if (!e.target.value) {
                form.setError({
                  phone_number:
                    'Nomor telepon tidak boleh kosong.',
                })
              } else {
                form.clearErrors('phone_number')
              }
              
              if (e.target.value.toString().length < 10 || e.target.value.toString().length > 13) {
                form.setError({
                  phone_number:
                    'Nomor telepon harus 10-13 digit.',
                })
              } else {
                form.clearErrors('phone_number')
              }
            }}
            error={form.errors.phone_number}
            value={form.data.phone_number}
          />
          
          <TextInput
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
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
                    'Email tidak boleh kosong.',
                })
              } else {
                form.clearErrors('email')
              }
            }}
            error={form.errors.email}
            value={form.data.email}
          />
          
          <TextInput
            type="password"
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
            leftSection={<IconPassword />}
            withAsterisk
            disabled
            value={form.data.student_id_number}
            label="Kata Sandi (Bawaan: NIM)"
            placeholder="Masukkan kata sandi..."
          />
          
          <Select
            styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
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
              value: lecturer.user.id,
            }))}
            onChange={(value) => {
              form.setData('supervisor_id', value)
              
              if (!value) {
                form.setError({
                  supervisor_id:
                    'Dosen pembimbing akademik tidak boleh kosong.',
                })
              } else {
                form.clearErrors('supervisor_id')
              }
            }}
            error={form.errors.supervisor_id}
            value={form.data.supervisor_id}
          />
          
          <Flex mt={24} gap={16}>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
                    variant="outline"
                    color="red"
                    disabled={form.processing}
                    fullWidth
                    onClick={() => router.get(route('students.index'))}
            >
              Batal
            </Button>
            <Button h={48}
                    px={16} styles={{ section: { marginRight: 12 } }}
                    radius={32}
                    disabled={form.data.file ? false : form.hasErrors || Object.entries(form.data).some(([key, value]) => key !== 'password' && !value)}
                    fullWidth
                    loading={form.processing}
                    type="submit"
            >
              Simpan
            </Button>
          </Flex>
        </Stack>
      </AppLayout>
    </form>
  )
}

export default Edit
