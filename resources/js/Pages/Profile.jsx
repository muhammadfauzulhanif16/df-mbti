import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Avatar,
  Button,
  Grid,
  NumberInput,
  Select,
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
  const form = useForm({
    _method: 'put',
    avatar: props.auth.user.avatar || null,
    full_name: props.auth.user.full_name,
    id_number: props.auth.user.id_number,
    phone_number: props.auth.user.phone_number,
    academic_year: props.auth.user.role === 'Mahasiswa' ? props.auth.user.student.academic_year : null,
    email: props.auth.user.email,
    password: '',
    supervisor_id: props.auth.user.student?.supervisor_id
  })
  console.log(props)
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('profile.update', props.auth.user))
    }}>
      <AppLayout title="Profil" activeNav="Profil"
                 authed={props.auth.user} meta={props.meta}>
        <Title align="center"
               mb={8}>Profil</Title>
        <Title align="center" order={3}
               mb={32}>({props.auth.user.role})</Title>
        
        <Dropzone
          p={0}
          mx="auto"
          accept={IMAGE_MIME_TYPE}
          radius="100%"
          w="fit-content"
          onDrop={(acceptedFile) => form.setData('avatar', acceptedFile[0])}>
          <Avatar
            alt={form.data.full_name}
            size={160}
            src={form.data.avatar instanceof File ? URL.createObjectURL(form.data.avatar) : form.data.avatar}
          />
        </Dropzone>
        
        <Grid grow my={32}>
          <Grid.Col span={6}>
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
              <NumberInput styles={{
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
                           leftSection={<IconId />}
                           withAsterisk
                           label={props.auth.user.role === 'Mahasiswa' ? 'NIM' : 'NIDN'}
                           disabled
                           value={form.data.id_number}
                           hideControls
                           placeholder={`Masukkan ${props.auth.user.role === 'Mahasiswa' ? 'NIM' : 'NIDN'}`}
                           onChange={(value) => form.setData('id_number', value)}
              />
            </Grid.Col>
          )}
          
          
          {props.auth.user.role !== 'Admin' && (
            <Grid.Col span={6}>
              <NumberInput styles={{
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
                           label="Nomor Telepon"
                           value={form.data.phone_number}
                           hideControls
                           placeholder="Masukkan nomor telepon..."
                           onChange={(value) => form.setData('phone_number', value.toString())}
              />
            </Grid.Col>
          )}
          
          {props.auth.user.role === 'Mahasiswa' && (
            <Grid.Col span={6}>
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
                               disabled
                               value={new Date(form.data.academic_year)}
                               label="Tahun Angkatan"
                               placeholder="Masukkan tahun angkatan..."
                               onChange={(value) => form.setData('academic_year', value.getFullYear().toString())}
              />
            </Grid.Col>
          )}
          
          <Grid.Col span={6}>
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
                       onChange={(e) => form.setData('email', e.target.value.toLowerCase())}
            />
          </Grid.Col>
          
          <Grid.Col span={6}>
            <TextInput type="password" styles={{
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
              // value={form.data.national_lecturer_id_number}
                       label="Kata Sandi"
                       placeholder="Masukkan kata sandi..."
                       onChange={(e) => form.setData('password', e.target.value)}
            />
          </Grid.Col>
          
          {form.data.supervisor_id && (
            <Grid.Col>
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
              }} leftSection={<IconUser />}
                      disabled
                      label="Dosen Pembimbing Akademik"
                      value={form.data.supervisor_id}
                      searchable
                      checkIconPosition="right"
                      data={props.lecturers.map((lecturer) => ({
                        label: lecturer.user.full_name,
                        value: lecturer.user.id
                      }))}
              />
            </Grid.Col>
          )}
        
        </Grid>
        
        <Button px={16} h={48}
                radius={32}
                styles={{ section: { marginRight: 16 } }}
                fullWidth
                loading={form.processing}
                type="submit"
        >
          Simpan
        </Button>
      </AppLayout>
    </form>
  )
}

export default Profile
