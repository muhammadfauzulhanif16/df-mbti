import React from 'react'
import {
  Box,
  Button,
  Center,
  Group,
  Image,
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
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('login'))
    }}>
      <AppLayout title="Masuk Akun" authed={props.auth.user} meta={props.meta}>
        <Stack h="100vh" gap={0}>
          <Group h={80} px={16} style={{
            borderBottom: '1px solid #e1e1e1',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <Image h={48} w={48} src={Epersona} />
            <Title>E-Persona</Title>
          </Group>
          
          <Center h="100vh" p={16}>
            <Box w={{
              base: '100%',
              sm: '75%',
              md: '50%',
              lg: '25%'
            }}>
              <Image
                src={Unsada}
                w={80}
                mx="auto"
                mb={32}
              />
              
              <Title mb={32} align="center">Masuk Akun</Title>
              
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
                type="password"
                leftSection={<IconPassword />}
                label="Kata Sandi"
                placeholder="Masukkan kata sandi..."
                mb={24}
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
                px={16}
                styles={{ section: { marginRight: 16 } }}
                disabled={form.hasErrors || Object.values(form.data).some(field => !field)}
                loading={form.processing}
                type="submit" fullWidth
                h={48}
                radius={32}
              >
                Masuk
              </Button>
            </Box>
          </Center>
        </Stack>
      </AppLayout>
    </form>
  )
}

export default Login
