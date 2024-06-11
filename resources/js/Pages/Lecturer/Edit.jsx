import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  Center,
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

const Edit = (props) => {
  const form = useForm({
    role: props.user.role,
    full_name: props.user.full_name,
    national_lecturer_id_number: props.user.id_number,
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
            value={form.data.role}
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
          
          <Grid grow>
            <Grid.Col span={6}>
              <TextInput
                leftSection={<IconUser />}
                withAsterisk
                label="Nama Lengkap"
                value={form.data.full_name}
                placeholder="Masukkan nama lengkap..."
                onChange={(e) => {
                  const value = e.target.value.replace(/\b\w/g, char => char.toUpperCase()).replace(/\B\w/g, char => char.toLowerCase())
                  form.setData('full_name', value)
                }}
              />
            </Grid.Col>
            
            <Grid.Col span={6}>
              <NumberInput
                leftSection={<IconId />}
                withAsterisk
                label="NIDN"
                hideControls
                value={form.data.national_lecturer_id_number}
                placeholder="Masukkan NIDN..."
                onChange={(value) => form.setData('national_lecturer_id_number', value)}
              />
            </Grid.Col>
            
            <Grid.Col span={6}>
              <NumberInput
                leftSection={<IconPhone />}
                withAsterisk
                label="Nomor Telepon"
                hideControls
                value={form.data.phone_number}
                placeholder="Masukkan nomor telepon..."
                onChange={(value) => form.setData('phone_number', value)}
              />
            </Grid.Col>
            
            <Grid.Col span={6}>
              <TextInput
                leftSection={<IconMail />}
                withAsterisk
                type="email"
                value={form.data.email}
                label="Email"
                placeholder="Masukkan email..."
                onChange={(e) => form.setData('email', e.target.value.toLowerCase())}
              />
            </Grid.Col>
            
            <Grid.Col span={6}>
              <PasswordInput
                leftSection={<IconPassword />}
                value={form.data.password}
                label="Kata Sandi"
                placeholder="Masukkan kata sandi..."
                onChange={(e) => form.setData('password', e.target.value)}
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
              disabled={
                form.data.role === '' || form.data.full_name === '' || form.data.national_lecturer_id_number === '' ||
                form.data.phone_number === '' || form.data.academic_year === '' || form.data.email === ''
              }
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
