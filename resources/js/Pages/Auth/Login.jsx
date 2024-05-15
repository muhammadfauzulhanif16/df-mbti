import React, { useEffect } from 'react'
import {
  Box,
  Button,
  Center,
  Image,
  PasswordInput,
  TextInput,
  Title
} from '@mantine/core'
import { Head, useForm } from '@inertiajs/react'
import { notifications } from '@mantine/notifications'
import { IconMail, IconPassword } from '@tabler/icons-react'

const Login = (props) => {
  const form = useForm({
    email: '',
    password: ''
  })
  
  useEffect(() => {
    if (props.meta) {
      notifications.show({
        title: props.meta.title,
        message: props.meta.message,
        color: props.meta.status ? 'green' : 'red',
        autoClose: 2000,
        withBorder: true
      })
    }
    
  }, [props.meta])
  
  return (
    <Box h="100vh" gap={0}>
      <Head title="Masuk Akun" />
      
      <Center h="100vh">
        <form onSubmit={(e) => {
          e.preventDefault()
          form.post(route('login'))
        }}>
          <Image
            src="https://i.imgur.com/3eTKJe2.png"
            w={48}
            mx="auto"
            mb={32}
          />
          
          <Title mb={32} align="center">Masuk Akun</Title>
          
          <TextInput
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
    </Box>
  )
}

export default Login
