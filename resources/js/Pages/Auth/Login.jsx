import React from 'react'
import {
  Button,
  Center,
  Group,
  Image,
  PasswordInput,
  Stack,
  TextInput,
  Title
} from '@mantine/core'
import { useForm } from '@inertiajs/react'
import { IconMail, IconPassword } from '@tabler/icons-react'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Epersona = '/epersona.jpg'
const Unsada = '/unsada.png'

const Login = (props) => {
  const form = useForm({
    login: '',
    password: ''
  })
  
  return (
    <AppLayout title="Masuk Akun" authed={props.auth.user} meta={props.meta}>
      <Stack h="100vh" gap={0}>
        <Group h={80} px={16}>
          <Image h={48} w={48} src={Epersona} />
          <Title>E-Persona</Title>
        </Group>
        <Center h="100%">
          <form onSubmit={(e) => {
            e.preventDefault()
            form.post(route('login'))
          }}>
            <Image
              src={Unsada}
              w={80}
              mx="auto"
              mb={32}
            />
            
            <Title mb={32} align="center">Masuk Akun</Title>
            
            <TextInput
              autoFocus
              leftSection={<IconMail />}
              label="Email/NIDN/NIM"
              placeholder="Masukkan email/NIDM/NIM..."
              mb={16}
              withAsterisk
              onChange={(e) => {
                form.setData('login', e.target.value.toLowerCase())
                
                if (!e.target.value) {
                  form.setError({
                    login:
                      'Email/NIDN/NIM tidak boleh kosong.'
                  })
                } else {
                  form.clearErrors('login')
                }
              }}
              error={form.errors.login}
            />
            
            <PasswordInput
              leftSection={<IconPassword />}
              label="Kata Sandi"
              placeholder="Masukkan kata sandi..."
              mb={16}
              withAsterisk
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
              error={form.errors.password}
            />
            
            <Button
              disabled={form.data.email_or_id_number === '' || form.data.password === '' || form.hasErrors}
              loading={form.processing}
              type="submit"
              fullWidth
            >
              Masuk
            </Button>
          </form>
        </Center>
      </Stack>
    </AppLayout>
  )
}

export default Login
