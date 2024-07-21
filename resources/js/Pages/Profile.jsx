import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Avatar,
  Button,
  FileButton,
  Flex,
  Grid,
  Select,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  IconCalendar,
  IconId,
  IconMail,
  IconPassword,
  IconPhone,
  IconPhotoUp,
  IconUser,
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
    supervisor_id: props.auth.user.student?.supervisor_id,
  })
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('profile.update', props.auth.user))
    }}>
      <AppLayout title="Profil" activeNav="Profil"
                 authed={props.auth.user} meta={props.meta}>
        <Title align="center" order={3}
               mb={32}>Profil
          {' '} {props.auth.user.role === 'Admin' ? 'Kaprodi' : props.auth.user.role}</Title>
        
        <Grid grow mx={160}>
          <Grid.Col span={6}>
            <Stack>
              <Avatar mx="auto"
                      src={form.data.avatar instanceof File ? URL.createObjectURL(form.data.avatar) : form.data.avatar}
                      alt={form.data.full_name} size={160} />
              
              <FileButton onChange={(file) => form.setData('avatar', file)}
                          accept="image/png,image/jpeg,image/jpg">
                {(props) => (
                  <Button px={16} styles={{ section: { marginRight: 12 } }}
                          variant="subtle" {...props} color="gold.2" h={48}
                          radius={32} fullWidth
                          leftSection={<IconPhotoUp />}>
                    Unggah Foto
                  </Button>
                )}
              </FileButton>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={6}>
            <Stack>
              <TextInput styles={{
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
                         mb={16}
                         value={form.data.full_name}
                         onChange={(e) => form.setData('full_name', e.target.value)}
              />
              
              <TextInput type="number" styles={{
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
                         leftSection={<IconId />}
                         withAsterisk
                         label={props.auth.user.role === 'Mahasiswa' ? 'NIM' : 'NIDN'}
                         disabled
                         value={form.data.id_number}
                         hideControls
                         placeholder={`Masukkan ${props.auth.user.role === 'Mahasiswa' ? 'NIM' : 'NIDN'}`}
                         onChange={(e) => {
                           form.setData('id_number', e.target.value.toString())
                           
                           if (!e.target.value) {
                             form.setError({
                               id_number:
                                 `${props.auth.user.role === 'Mahasiswa' ? 'NIM' : 'NIDN'} tidak boleh kosong.`,
                             })
                           } else {
                             form.clearErrors('id_number')
                           }
                           
                           if (e.target.value.toString().length < 10 || e.target.value.toString().length > 10) {
                             form.setError({
                               id_number:
                                 `${props.auth.user.role === 'Mahasiswa' ? 'NIM' : 'NIDN'} harus 10 digit.`,
                             })
                           } else {
                             form.clearErrors('id_number')
                           }
                         }}
              />
              
              
              {props.auth.user.role === 'Mahasiswa' && (
                <YearPickerInput styles={{
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
                                 leftSection={<IconCalendar />}
                                 withAsterisk
                                 disabled
                                 value={new Date(form.data.academic_year)}
                                 label="Tahun Angkatan"
                                 placeholder="Masukkan tahun angkatan..."
                                 onChange={(value) => form.setData('academic_year', value.getFullYear().toString())}
                />
              )}
              
              <TextInput styles={{
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
                         value={form.data.email}
                         label="Email"
                         placeholder="Masukkan email..."
                         onChange={(e) => form.setData('email', e.target.value.toLowerCase())}
              />
              
              <TextInput type="number" styles={{
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
                         value={form.data.phone_number}
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
              />
              
              <TextInput type="password" styles={{
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
                // value={form.data.national_lecturer_id_number}
                         label="Kata Sandi"
                         placeholder="Masukkan kata sandi..."
                         onChange={(e) => form.setData('password', e.target.value)}
              />
              
              {form.data.supervisor_id && (
                <Select styles={{
                  label: { marginBottom: 8 },
                  input: {
                    height: 48,
                    borderRadius: 32,
                    paddingLeft: 50,
                    paddingRight: 16,
                  },
                  section: { marginLeft: 0, width: 48, height: 48 },
                  error: { marginTop: 8 },
                }} leftSection={<IconUser />}
                        disabled
                        label="Dosen Pembimbing Akademik"
                        value={form.data.supervisor_id}
                        searchable
                        checkIconPosition="right"
                        data={props.lecturers.map((lecturer) => ({
                          label: lecturer.user.full_name,
                          value: lecturer.user.id,
                        }))}
                />
              )}
            </Stack>
          </Grid.Col>
        </Grid>
        
        <Flex mt={32} gap={16}>
          <Button px={16} h={48}
                  color="red"
                  variant="outline"
                  radius={32}
                  styles={{ section: { marginRight: 16 } }}
                  fullWidth
                  loading={form.processing}
                  onClick={() => history.back()}
          >
            Batal
          </Button>
          
          <Button px={16} h={48}
                  radius={32}
                  variant="outline"
                  styles={{ section: { marginRight: 16 } }}
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

export default Profile
