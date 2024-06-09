import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  Box,
  Button,
  Flex,
  Group,
  Progress,
  Stack,
  Text,
  Title
} from '@mantine/core'
import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'
import { IconPrinter } from '@tabler/icons-react'

const Show = (props) => {
  console.log(props)
  const form = useForm({
    full_name: props.user.full_name,
    id_number: props.user.id_number,
    created_at: props.test.created_at,
    time: props.test.time,
    personality: props.personality.name,
    description: props.personality.description,
    job: props.personality.job,
    detail: props.personality.detail
  })
  const [isDetail, setIsDetail] = useState(false)
  const [isPrint, setIsPrint] = useState(false)
  
  return (
    <AppLayout
      title="Tes MBTI"
      activeNav={!isPrint && 'Tes MBTI'}
      authed={!isPrint && props.auth.user}
      isPrint>
      {isDetail ? (
        <Box p={16}>
          {!isPrint && (
            <Button leftSection={<IconPrinter />} mb={16} variant="subtle"
                    onClick={() => {
                      setIsPrint(true)
                      
                      setTimeout(() => {
                        window.print()
                        setIsPrint(false)
                      }, 1000)
                    }}>CETAK</Button>
          )}
          
          <Title size={30} align="center" mb={16}>Hasil Tipe Kepribadian</Title>
          
          <Flex gap={16}>
            <Stack w="50%">
              <div>
                <Text fz={14}>Nama Mahasiswa</Text>
                <div
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #dcdcdc',
                    fontSize: 14
                  }}
                  dangerouslySetInnerHTML={{ __html: form.data.full_name }}
                />
              </div>
              
              <div>
                <Text fz={14}>NIM</Text>
                <div
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #dcdcdc',
                    fontSize: 14
                  }}
                  dangerouslySetInnerHTML={{ __html: form.data.id_number }}
                />
              </div>
              
              <div>
                <Text fz={14}>Tanggal Pengerjaan</Text>
                <div
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #dcdcdc',
                    fontSize: 14
                  }}
                  dangerouslySetInnerHTML={{ __html: form.data.created_at }}
                />
              </div>
              
              <div>
                <Text fz={14}>Waktu Pengerjaan</Text>
                <div
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #dcdcdc',
                    fontSize: 14
                  }}
                  dangerouslySetInnerHTML={{ __html: form.data.time }}
                />
              </div>
            </Stack>
            
            <Stack w="50%">
              <div>
                <Text fz={14}>Tipe Kepribadian</Text>
                <div
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #dcdcdc',
                    fontSize: 14
                  }}
                  dangerouslySetInnerHTML={{ __html: form.data.personality }}
                />
              </div>
              
              <div>
                <Text fz={14}>Deskripsi</Text>
                <div
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #dcdcdc',
                    fontSize: 14
                  }}
                  dangerouslySetInnerHTML={{ __html: form.data.description }}
                />
              </div>
              
              <div>
                <Text fz={14}>Saran Pekerjaan</Text>
                <div
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #dcdcdc',
                    fontSize: 14
                  }}
                  dangerouslySetInnerHTML={{ __html: form.data.detail }}
                />
              </div>
            </Stack>
          </Flex>
          
          <div style={{ marginTop: 16 }}>
            <Text fz={14}>Detail Pekerjaan</Text>
            <div
              style={{
                padding: '8px 16px',
                border: '1px solid #dcdcdc',
                fontSize: 14
              }}
              dangerouslySetInnerHTML={{ __html: form.data.detail }}
            />
          </div>
        </Box>
      ) : (
        <Box p={16}>
          <Title align="center"
                 mb={16}>{props.test.allMaxBasicTraitCodes}</Title>
          
          <Stack>
            {props.test.indicators.map((indicator, id) => (
              <Stack align="center" gap={8} key={id}>
                <Text fz={20}>{indicator.name}</Text>
                <Flex w="100%" justify="center" align="center"
                      gap={16}>
                  <Text>{
                    (indicator.basic_traits[0].totalValue / indicator.totalValue * 100).toFixed(1)
                  }%</Text>
                  
                  <Progress.Root size={32} radius="xl" w="100%">
                    {indicator.basic_traits.map((basic_trait, id) => (
                      <Progress.Section
                        key={id}
                        value={basic_trait.totalValue / indicator.totalValue * 100}
                        color={
                          id % 2 === 0 ? 'cyan' : 'pink'
                        }
                      >
                        <Progress.Label
                          style={{
                            lineHeight: '32px'
                          }}
                          fz={16}>{basic_trait.name}</Progress.Label>
                      </Progress.Section>
                    ))}
                  </Progress.Root>
                  
                  <Text>
                    {
                      (indicator.basic_traits[1].totalValue / indicator.totalValue * 100).toFixed(1)
                    }%
                  </Text>
                </Flex>
              </Stack>
            ))}
          
          </Stack>
        </Box>
      )}
      
      
      {!isPrint && (
        <Group justify="center" p={16}>
          {isDetail ? (
            <Button onClick={() => setIsDetail(false)}>Kembali</Button>
          ) : (
            <Button onClick={() => setIsDetail(true)}>Selanjutnya</Button>
          )}
        </Group>
      )}
    </AppLayout>
  )
}

export default Show
