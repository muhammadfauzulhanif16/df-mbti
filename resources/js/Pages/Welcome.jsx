import {
  BackgroundImage,
  Button,
  Center,
  Grid,
  Group,
  Image,
  Stack,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import React from 'react'
import { IconMapPin } from '@tabler/icons-react'
import { router } from '@inertiajs/core'

const Epersona = '/epersona.jpg'
const Unsada = '/unsada.png'

const Welcome = () => {
  return (
    <AppLayout title="Halaman Utama">
      <Group h={80} px={16} justify="space-between">
        <Group>
          <Image h={48} w={48} src={Epersona} />
          <Title>E-Persona</Title>
        </Group>
        
        <Button
          variant="subtle"
          onClick={() => router.get(route('login'))}
          px={16}
          type="submit"
          h={48}
          radius={32}
        >
          Masuk Akun
        </Button>
      </Group>
      
      <BackgroundImage
        mih="100vh"
        src="https://tif.unsada.ac.id/wp-content/uploads/2023/06/bggedungbaru1.jpg.webp"
      >
        <Center mih="100vh" p={16} style={{
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
        }}>
          <Stack align="center">
            <Title fz={44} c="white" align="center">Selamat Datang di</Title>
            
            <Title fz={44} c="white" align="center">Tes Kepribadian Myers-Briggs
                                                    Type
                                                    Indicator</Title>
            
            <Title fz={44} c="white" align="center">Program Studi Sistem
                                                    Informasi</Title>
          </Stack>
        </Center>
      </BackgroundImage>
      
      <Grid p={16} grow>
        <Grid.Col span={{
          base: 12,
          md: 6,
        }}>
          <Group>
            <Image h={24} w={24} src={Unsada} />
            <Title fz={20}>Universitas Darma Persada</Title>
          </Group>
        </Grid.Col>
        
        <Grid.Col span={{
          base: 12,
          md: 6,
        }}>
          <Group>
            <ThemeIcon variant="transparent" size={24}>
              <IconMapPin />
            </ThemeIcon>
            
            <Title fz={20}>Jl. Taman Malaka Selatan Pondok Kelapa - Jakarta
                           Timur
                           1350</Title>
          </Group>
        </Grid.Col>
      </Grid>
    </AppLayout>
  )
}

export default Welcome
