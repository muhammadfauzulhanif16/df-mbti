import React from 'react'
import { useForm } from '@inertiajs/react'
import {
  Button,
  Flex,
  Grid,
  Group,
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
    email: props.user.email,
    password: ''
  })
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.put(route('lecturers.update', props.user))
    }}>
      <AppLayout title="Ubah Dosen" activeNav="Dosen" authed={props.auth.user}
                 meta={props.meta}>
        <Title align="center" mb={32}>Ubah Data Dosen</Title>
        
        <Radio.Group
          styles={{
            label: { marginBottom: 8 }, error: { marginTop: 8 }
          }}
          mb={16}
          value={form.data.role}
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
              styles={{
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
              onChange={(e) => {
                form.setData('full_name', e.target.value)
                
                if (!e.target.value) {
                  form.setError({
                    full_name:
                      'Nama lengkap tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('full_name')
                }
              }}
              value={form.data.full_name}
              error={form.errors.full_name}
            />
          </Grid.Col>
          
          <Grid.Col span={6}>
            <TextInput
              type="number"
              styles={{
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
              withAsterisk value={form.data.national_lecturer_id_number}
              label="NIDN"
              hideControls
              placeholder="Masukkan NIDN..."
              onChange={(e) => {
                form.setData('national_lecturer_id_number', e.target.value.toString())
                
                if (!e.target.value) {
                  form.setError({
                    national_lecturer_id_number:
                      'NIDN tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('national_lecturer_id_number')
                }
                
                if (e.target.value.toString().length < 10 || e.target.value.toString().length > 10) {
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
            <TextInput
              type="number"
              styles={{
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
              hideControls
              placeholder="Masukkan nomor telepon..."
              onChange={(e) => {
                form.setData('phone_number', e.target.value.toString())
                
                if (!e.target.value) {
                  form.setError({
                    phone_number:
                      'Nomor telepon tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('phone_number')
                }
                
                if (e.target.value.toString().length < 10 || e.target.value.toString().length > 13) {
                  form.setError({
                    phone_number:
                      'Nomor telepon harus 10-13 digit.'
                  })
                } else {
                  form.clearErrors('phone_number')
                }
              }}
              error={form.errors.phone_number}
              value={form.data.phone_number}
            />
          </Grid.Col>
          
          <Grid.Col span={6}>
            <TextInput
              styles={{
                label: { marginBottom: 8 },
                input: {
                  height: 48,
                  borderRadius: 32,
                  paddingLeft: 50,
                  paddingRight: 16
                },
                section: { marginLeft: 0, width: 48, height: 48 },
                error: { marginTop: 8 }
              }} value={form.data.email}
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
            <TextInput
              type="password"
              styles={{
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
              label="Kata Sandi (Bawaan: NIDN)"
              placeholder="Masukkan kata sandi..."
              onChange={(e) => {
                form.setData('password', e.target.value)
                
                if (!e.target.value) {
                  form.setError({
                    password:
                      'Kata sandi tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('password')
                }
              }}
            />
          </Grid.Col>
        </Grid>
        
        <Flex mt={24} gap={16}>
          <Button h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  variant="outline"
                  color="red"
                  disabled={form.processing}
                  fullWidth
                  onClick={() => router.get(route('lecturers.index'))}
          >
            Batal
          </Button>
          <Button h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32}
                  disabled={form.hasErrors || Object.entries(form.data).some(([key, value]) => key !== 'password' && !value)}
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

export default Edit
