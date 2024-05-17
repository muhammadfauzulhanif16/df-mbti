import React from 'react'
import {
  Button,
  Center,
  Image,
  PasswordInput,
  TextInput,
  Title
} from '@mantine/core'
import { useForm } from '@inertiajs/react'
import { IconMail, IconPassword } from '@tabler/icons-react'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Login = (props) => {
  const form = useForm({
    email: '',
    password: ''
  })
  
  return (
    <AppLayout title="Masuk Akun" authed={props.auth.user} meta={props.meta}>
      <Center h="100vh">
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('login'))
        }}>
          <Image
            src="https://i.imgur.com/3eTKJe2.png"
            w={80}
            mx="auto"
            mb={32}
          />
          
          <Title mb={32} align="center">Masuk Akun</Title>
          
          <TextInput
            autoFocus
            leftSection={<IconMail />}
            type="email"
            label="Surel"
            placeholder="Masukkan Surel..."
            mb={16}
            withAsterisk
            onChange={(e) => form.setData('email', e.target.value)}
          />
          
          
          <PasswordInput
            leftSection={<IconPassword />}
            label="Kata Sandi"
            placeholder="Masukkan Kata Sandi..."
            mb={16}
            withAsterisk
            onChange={(e) => form.setData('password', e.target.value)}
          />
          
          <Button
            disabled={form.data.email === '' || form.data.password === ''}
            loading={form.processing}
            type="submit"
            fullWidth
          >
            Masuk
          </Button>
        </form>
      </Center>
    </AppLayout>
  )
}

export default Login
