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
              <Radio value="Dosen" label="Dosen" />
            </Group>
          </Radio.Group>
          
          <SimpleGrid cols={2}>
            <TextInput
              leftSection={<IconUser />}
              withAsterisk
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap..."
              onChange={(e) => form.setData('full_name', e.target.value)}
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
