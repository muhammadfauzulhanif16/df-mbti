import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  FileButton,
  Flex,
  Select,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  IconFileSpreadsheet,
  IconId,
  IconMail,
  IconPassword,
  IconPhone,
  IconUser,
} from '@tabler/icons-react'

const Create = (props) => {
  const form = useForm({
    file: null,
    full_name: '',
    student_id_number: '',
    phone_number: '',
    academic_year: '',
    email: '',
    password: '',
    supervisor_id: '',
  })
  console.log(form.data)
  useEffect(() => {
    if (form.data.student_id_number) {
      form.setData('password', form.data.student_id_number)
    }
  }, [form.data.student_id_number])
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('students.store'))
    }}>
      <AppLayout title="Tambah Mahasiswa" activeNav="Mahasiswa"
                 authed={props.auth.user}
                 meta={props.meta}>
        
        
        {/*<Divider my={24} label="Atau" labelPosition="center"*/}
        {/*         styles={{ label: { fontSize: 14 } }} />*/}
        
        <Stack px={160}>
          <Title align="center" mb={32}>Masukkan Data Mahasiswa</Title>
          
          <FileButton variant="light" color="green" w={320} mb={32}
                      onChange={(file) => form.setData('file', file)}
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
            {(props) =>
              <Button px={16} styles={{ section: { marginRight: 16 } }} h={48}
                      radius={32} leftSection={
                <IconFileSpreadsheet />} {...props}>{form.data.file ? form.data.file.name : 'Pilih Berkas Excel'}</Button>}
          </FileButton>
          
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
          />
          
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
                    disabled={form.data.file ? false : form.hasErrors || Object.entries(form.data).some(([key, value]) => key !== 'file' && !value)}
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

export default Create
