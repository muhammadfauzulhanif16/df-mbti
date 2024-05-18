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
  
  console.log(form.data)
  
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
            onChange={(value) => form.setData('role', value)}
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
              }}
            />
            
            <NumberInput
              leftSection={<IconId />}
              withAsterisk
              label="NIDN"
              hideControls
              placeholder="Masukkan NIDN..."
              onChange={(value) => form.setData('national_lecturer_id_number', value)}
            />
            
            <NumberInput
              leftSection={<IconPhone />}
              withAsterisk
              label="Nomor Telepon"
              hideControls
              placeholder="Masukkan nomor telepon..."
              onChange={(value) => form.setData('phone_number', value.toString())}
            />
            
            <YearPickerInput
              leftSection={<IconCalendar />}
              withAsterisk
              label="Tahun Akademik"
              placeholder="Masukkan tahun akademik..."
              onChange={(value) => form.setData('academic_year', value.getFullYear().toString())}
            />
            
            <TextInput
              leftSection={<IconMail />}
              withAsterisk
              type="email"
              label="Email"
              placeholder="Masukkan email..."
              onChange={(e) => form.setData('email', e.target.value.toLowerCase())}
            />
            
            <PasswordInput
              leftSection={<IconPassword />}
              withAsterisk
              value={form.data.national_lecturer_id_number}
              label="Kata Sandi"
              placeholder="Masukkan kata sandi..."
              onChange={(e) => form.setData('password', e.target.value)}
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
