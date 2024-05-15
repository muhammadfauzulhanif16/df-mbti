import React, { useEffect } from 'react'
import {
  Box,
  Button,
  Center,
  Group,
  Image,
  PasswordInput,
  TextInput,
  Title
} from '@mantine/core'
import { Head, useForm } from '@inertiajs/react'
import { notifications } from '@mantine/notifications'

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
      
      <Group
        p={16}
        style={{
          borderBottom: '1px solid var(--mantine-color-gray-3)'
        }}
      >
        <Image src="https://i.imgur.com/3eTKJe2.png" w={48} />
        
        <Title>Universitas Darma Persada</Title>
      </Group>
      
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
          
          <TextInput
            type="email"
            label="Surel"
            placeholder="Masukkan Surel..."
            mb={16}
            onChange={(e) => form.setData('email', e.target.value)}
          />
          
          
          <PasswordInput
            label="Kata Sandi"
            placeholder="Masukkan Kata Sandi..."
            mb={16}
            onChange={(e) => form.setData('password', e.target.value)}
          />
          
          <Button
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
