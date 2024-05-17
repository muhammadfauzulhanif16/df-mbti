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

const Edit = (props) => {
  console.log(props)
  const form = useForm({
    role: props.user.role,
    full_name: props.user.full_name,
    national_lecturer_id_number: props.user.lecturer.national_lecturer_id_number,
    phone_number: props.user.phone_number,
    academic_year: props.user.lecturer.academic_year,
    email: props.user.email,
    password: ''
  })
  
  return (
    <AppLayout title="Ubah Dosen" activeNav="Dosen" authed={props.auth.user}
               meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.put(route('lecturers.update', props.user))
        }}>
          <Title align="center" mb={32}>Ubah Data Dosen</Title>
          
          <Radio.Group
            mb={16}
            value={form.data.role
            }
            label="Status"
            withAsterisk
            onChange={(value) => form.setData('status', value)}
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
              value={form.data.full_name}
              placeholder="Masukkan nama lengkap..."
              onChange={(e) => form.setData('full_name', e.target.value)}
            />
            
            <NumberInput
              leftSection={<IconId />}
              withAsterisk
              label="NIDN"
              hideControls
              value={form.data.national_lecturer_id_number}
              placeholder="Masukkan NIDN..."
              onChange={(value) => form.setData('national_lecturer_id_number', value)}
            />
            
            <NumberInput
              leftSection={<IconPhone />}
              withAsterisk
              label="Nomor Telepon"
              hideControls
              value={form.data.phone_number}
              placeholder="Masukkan nomor telepon..."
              onChange={(value) => form.setData('phone_number', value)}
            />
            
            <NumberInput
              leftSection={<IconCalendar />}
              withAsterisk
              value={form.data.academic_year}
              label="Tahun Ajaran"
              hideControls
              placeholder="Masukkan tahun akademik..."
              onChange={(value) => form.setData('academic_year', value.toString())}
            />
            
            <TextInput
              leftSection={<IconMail />}
              withAsterisk
              type="email"
              value={form.data.email}
              label="Surel"
              placeholder="Masukkan aamat surel..."
              onChange={(e) => form.setData('email', e.target.value)}
            />
            
            <PasswordInput
              leftSection={<IconPassword />}
              value={form.data.password}
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
              Ubah
            </Button>
          </Button.Group>
        </form>
      </Center>
    </AppLayout>
  )
}

export default Edit
