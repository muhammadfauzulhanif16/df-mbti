import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { AppLayout } from '../../Layouts/AppLayout'
import {
  Button,
  Card,
  Image,
  PasswordInput,
  TextInput,
  Title
} from '@mantine/core'

export default function Login(props) {
  console.log(props)
  const {
    data,
    setData,
    post,
    processing,
    errors,
    reset,
    hasErrors
  } = useForm({
    email: '',
    password: ''
  })
  
  console.log(data)
  
  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])
  
  const submit = (e) => {
    e.preventDefault()
    post(route('login'))
  }
  
  return (
    <AppLayout title="Masuk Akun" meta={props.meta} isAuth>
      <Card w={{
        base: '100%',
        sm: '75%',
        md: '50%',
        lg: '25%'
      }}>
        <Image
          src="https://i.imgur.com/3eTKJe2.png"
          mb={16}
          w={80}
        />
        
        <Title mb={32}>Masuk ke akun</Title>
        
        <form onSubmit={submit}>
          <TextInput
            type="email"
            withAsterisk
            label="Surel"
            placeholder="Masukkan surel Anda..."
            mb={16}
            styles={{
              label: {
                marginBottom: 8
              }
            }}
            value={data.email}
            onChange={e => setData('email', e.target.value)}
            error={errors.email}
          />
          
          <PasswordInput
            withAsterisk
            label="Kata Sandi"
            placeholder="Masukkan kata sandi Anda..."
            mb={32}
            styles={{
              label: {
                marginBottom: 8
              }
            }}
            value={data.password}
            onChange={e => setData('password', e.target.value)}
            error={errors.password}
          />
          
          <Button
            variant="filled"
            type="submit"
            fullWidth
            loading={processing}
            disabled={
              hasErrors ||
              data.username === '' ||
              data.password === ''
            }
          >
            Masuk
          </Button>
        </form>
      </Card>
    
    </AppLayout>
    // <GuestLayout>
    //   <Head title="Log in" />
    //
    //   {status &&
    //     <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
    //
    //   <form onSubmit={submit}>
    //     <div>
    //       <InputLabel htmlFor="email" value="Email" />
    //
    //       <TextInput
    //         id="email"
    //         type="email"
    //         name="email"
    //         value={data.email}
    //         className="mt-1 block w-full"
    //         autoComplete="username"
    //         isFocused={true}
    //         onChange={(e) => setData('email', e.target.value)}
    //       />
    //
    //       <InputError message={errors.email} className="mt-2" />
    //     </div>
    //
    //     <div className="mt-4">
    //       <InputLabel htmlFor="password" value="Password" />
    //
    //       <TextInput
    //         id="password"
    //         type="password"
    //         name="password"
    //         value={data.password}
    //         className="mt-1 block w-full"
    //         autoComplete="current-password"
    //         onChange={(e) => setData('password', e.target.value)}
    //       />
    //
    //       <InputError message={errors.password} className="mt-2" />
    //     </div>
    //
    //     <div className="block mt-4">
    //       <label className="flex items-center">
    //         <Checkbox
    //           name="remember"
    //           checked={data.remember}
    //           onChange={(e) => setData('remember', e.target.checked)}
    //         />
    //         <span className="ms-2 text-sm text-gray-600">Remember me</span>
    //       </label>
    //     </div>
    //
    //     <div className="flex items-center justify-end mt-4">
    //       {canResetPassword && (
    //         <Link
    //           href={route('password.request')}
    //           className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //         >
    //           Forgot your password?
    //         </Link>
    //       )}
    //
    //       <PrimaryButton className="ms-4" disabled={processing}>
    //         Log in
    //       </PrimaryButton>
    //     </div>
    //   </form>
    // </GuestLayout>
  )
}
