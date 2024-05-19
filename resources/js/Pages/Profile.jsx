import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Avatar,
  Button,
  Center,
  Grid,
  NumberInput,
  PasswordInput,
  TextInput,
  Title
} from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import {
  IconCalendar,
  IconId,
  IconMail,
  IconPassword,
  IconPhone,
  IconUser
} from '@tabler/icons-react'
import { YearPickerInput } from '@mantine/dates'

const Profile = (props) => {
  console.log(props.user)
  const form = useForm({
    _method: 'put',
    avatar: props.auth.user.avatar || null,
    full_name: props.auth.user.full_name,
    id_number: props.auth.user.id_number,
    phone_number: props.auth.user.phone_number,
    academic_year: props.auth.user.role === 'Mahasiswa' ? props.auth.user.student.academic_year : props.auth.user.lecturer.academic_year,
    email: props.auth.user.email,
    password: ''
  })
  
  return (
    <AppLayout title="Profil" activeNav="Profil"
               authed={props.auth.user} meta={props.meta}>
      <Center h="100vh" p={16}>
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('profile.update', props.auth.user))
        }}>
          <Title align="center"
                 mb={32}>Profil</Title>
          
          <Dropzone
            p={0}
            mx="auto"
            accept={IMAGE_MIME_TYPE}
            radius="100%"
            w="fit-content"
            onDrop={(acceptedFile) => form.setData('avatar', acceptedFile[0])}>
            <Avatar
              alt="it's me"
              size={160}
              src={form.data.avatar instanceof File ? URL.createObjectURL(form.data.avatar) : form.data.avatar}
            />
          </Dropzone>
          
          <Grid grow my={32}>
            <Grid.Col span={6}>
              <TextInput
                leftSection={<IconUser />}
                withAsterisk
                label="Nama Lengkap"
                placeholder="Masukkan nama lengkap..."
                mb={16}
                value={form.data.full_name}
                onChange={(e) => form.setData('full_name', e.target.value)}
              />
            </Grid.Col>
            
            {props.auth.user.role !== 'Admin' && (
              <Grid.Col span={6}>
                <NumberInput
                  leftSection={<IconId />}
                  withAsterisk
                  label="NIDN"
                  disabled
                  value={form.data.id_number}
                  hideControls
                  placeholder={`Masukkan ${props.auth.user.role === 'Mahasiswa' ? 'NIM' : 'NIDN'}`}
                  onChange={(value) => form.setData('id_number', value)}
                />
              </Grid.Col>
            )}
            
            <Grid.Col span={6}>
              <NumberInput
                leftSection={<IconPhone />}
                withAsterisk
                label="Nomor Telepon"
                value={form.data.phone_number}
                hideControls
                placeholder="Masukkan nomor telepon..."
                onChange={(value) => form.setData('phone_number', value.toString())}
              />
            </Grid.Col>
            
            <Grid.Col span={6}>
              <YearPickerInput
                leftSection={<IconCalendar />}
                withAsterisk
                disabled
                value={new Date(form.data.academic_year)}
                label="Tahun Akademik"
                placeholder="Masukkan tahun akademik..."
                onChange={(value) => form.setData('academic_year', value.getFullYear().toString())}
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
                // value={form.data.national_lecturer_id_number}
                label="Kata Sandi"
                placeholder="Masukkan kata sandi..."
                onChange={(e) => form.setData('password', e.target.value)}
              />
            </Grid.Col>
          </Grid>
          
          <Button
            fullWidth
            loading={form.processing}
            type="submit"
          >
            Simpan
          </Button>
        </form>
      </Center>
    </AppLayout>
  )
}

export default Profile
