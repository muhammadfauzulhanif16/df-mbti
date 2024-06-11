import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  Center,
  Divider,
  FileButton,
  Grid,
  Group,
  NumberInput,
  PasswordInput,
  Radio,
  TextInput,
  Title
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  IconId,
  IconMail,
  IconPassword,
  IconPhone,
  IconUser
} from '@tabler/icons-react'

const Create = (props) => {
  const form = useForm({
    file: null,
    role: '',
    full_name: '',
    national_lecturer_id_number: '',
    phone_number: '',
    academic_year: '',
    email: '',
    password: ''
  })
  console.log(form.data)
  useEffect(() => {
    if (form.data.national_lecturer_id_number) {
      form.setData('password', form.data.national_lecturer_id_number)
    }
  }, [form.data.national_lecturer_id_number])
  
  return (
    <AppLayout title="Tambah Dosen" activeNav="Dosen" authed={props.auth.user}
               meta={props.meta}>
      <Center h="100vh" p={16}>
        <form style={{
          width: '50%'
        }} onSubmit={(e) => {
          e.preventDefault()
          form.post(route('lecturers.store'))
        }}>
          <Title align="center" mb={32}>Tambah Data Dosen</Title>
          
          <FileButton variant="light" color="green" w="100%"
                      onChange={(file) => form.setData('file', file)}
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
            {(props) =>
              <Button {...props}>{form.data.file ? form.data.file.name : 'Pilih file excel'}</Button>}
          </FileButton>
          
          <Divider my={16} label="Atau" labelPosition="center" />
          
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
              <Radio value="Kepala Program Studi"
                     label="Kepala Program Studi" />
              <Radio value="Dosen PA"
                     label="Dosen PA" />
            </Group>
          </Radio.Group>
          
          <Grid grow>
            <Grid.Col span={6}>
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
            </Grid.Col>
            
            <Grid.Col span={6}>
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
            </Grid.Col>
            
            <Grid.Col span={6}>
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
            </Grid.Col>
            
            <Grid.Col span={6}>
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
            </Grid.Col>
            
            <Grid.Col span={6}>
              <PasswordInput
                leftSection={<IconPassword />}
                withAsterisk
                disabled
                value={form.data.national_lecturer_id_number}
                label="Kata Sandi (Default: NIDN)"
                placeholder="Masukkan kata sandi..."
              />
            </Grid.Col>
          </Grid>
          
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
