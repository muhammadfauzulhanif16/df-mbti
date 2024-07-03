import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  Box,
  Button,
  Divider,
  Flex,
  Group, Image,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconPrinter
} from '@tabler/icons-react'
const Unsada = '/unsada.png'

const Show = (props) => {
  console.log(props)
  
  const form = useForm({
    full_name: props.test.student.user.full_name,
    id_number: props.test.student.user.id_number,
    created_at: new Date(props.test.created_at).toLocaleString('id', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }),
    time: props.test.time,
    personality: props.test.personality,
    description: props.personality.description,
    job: props.personality.job,
    detail: props.personality.detail
  })
  const [isDetail, setIsDetail] = useState(0)
  const [isPrint, setIsPrint] = useState(false)
  
  return (
    <AppLayout
      title="Tes MBTI"
      activeNav="Tes MBTI"
      authed={props.auth.user}
      isPrint={isPrint}>
      {isDetail === 0 ? (
        <Box>
          <Title align="center"
                 mb={32}>{props.test.personality}</Title>
          
          <Stack gap={24}>
            {props.indicators.map((indicator, id) => (
              <Stack align="center" gap={16} key={id}>
                <Text fz={20}>"{indicator.name}"</Text>
                <Flex w="100%" justify="center" align="center"
                      gap={16}>
                  <Text fw={600}>{
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
                  
                  <Text fw={600}>
                    {
                      (indicator.basic_traits[1].totalValue / indicator.totalValue * 100).toFixed(1)
                    }%
                  </Text>
                </Flex>
              </Stack>
            ))}
          </Stack>
        </Box>
      
      
      ) : (props.auth.user.role !== 'Mahasiswa' && isDetail === 1) ? (
        <Box>
          <Title size={30} align="center" mb={32}>Hasil Tipe
                                                  Kepribadian</Title>
          
          <Stack>
            {props.indicators.map((indicator) => (<>
                <Stack key={indicator.id}>
                  <Text align="center" fz={20}>
                    "{indicator.name}"
                  </Text>
                  
                  <SimpleGrid cols={2} gap={16}>
                    {indicator.basic_traits.map((basic_trait, basicTraitId) => (
                      <Stack align={basicTraitId === 1 ? 'end' : 'start'}
                             key={basicTraitId}>
                        <Text p={8}>Hasil {basic_trait.name}</Text>
                        
                        {basic_trait.statements.map((statement, statementId) => (
                          <Flex key={statementId} gap={16}>
                            {basicTraitId === 0 &&
                              <Text>{statementId + 1}.</Text>}
                            
                            <Stack align={basicTraitId === 1 && 'end'}>
                              <Text
                                align={basicTraitId === 1 && 'end'}>{statement.statement.name}</Text>
                              <Text fw="bold">{statement.choice.name}</Text>
                            </Stack>
                            
                            {basicTraitId === 1 &&
                              <Text>{statementId + 1}.</Text>}
                          </Flex>
                        ))}
                        
                        <Text fw={600}
                              p={8}>Skor
                                    : {(basic_trait.totalValue / indicator.totalValue * 100).toFixed(1)}%</Text>
                      </Stack>
                    ))}
                  </SimpleGrid>
                </Stack>
                
                <Divider my={32} />
              </>
            ))}
          </Stack>
        </Box>
      ) : (
        <Box>
          {(!isPrint && props.auth.user.role === 'Mahasiswa') && (
            <Button px={16} h={48}
                    radius={32}
                    styles={{ section: { marginRight: 16 } }}
                    leftSection={<IconPrinter />} variant="subtle"
                    onClick={() => {
                      setIsPrint(true)
                      
                      setTimeout(() => {
                        window.print()
                        setIsPrint(false)
                      }, 1000)
                    }}>Cetak</Button>
          )}
          
          <Group justify='space-between'>
            <Image
              src={Unsada}
              w={48}
            />
            
            <Title size={30} my={32}>Hasil Tipe Kepribadian</Title>
            
            <span></span>
          </Group>
          
         
          
          <Flex gap={16}>
            <Stack w="50%">
              <Box>
                <Text mb={4}>Nama Lengkap : </Text>
                <Text
                  fw={600}>{form.data.full_name}</Text>
              </Box>
              
              <Box>
                <Text mb={4}>NIM : </Text>
                <Text
                  fw={600}>{form.data.id_number}</Text>
              </Box>
              
              <Box>
                <Text mb={4}>Tanggal Pengerjaan : </Text>
                <Text
                  fw={600}>{form.data.created_at}</Text>
              </Box>
              
              <Box>
                <Text mb={4}>Waktu Pengerjaan : </Text>
                <Text
                  fw={600}>{form.data.time}</Text>
              </Box>
            </Stack>
            
            <Stack w="50%">
              <Box>
                <Text mb={4}>Tipe Kepribadian : </Text>
                <Text
                  fw={600}>{form.data.personality}</Text>
              </Box>
              
              <Box>
                <Text mb={4}>Deskripsi Kepribadian : </Text>
                <div
                  style={{
                    fontWeight: 600
                  }}
                  dangerouslySetInnerHTML={{ __html: form.data.description }}
                />
              </Box>
              
              <Box>
                <Text mb={4}>Saran Pekerjaan : </Text>
                <div
                  style={{
                    fontWeight: 600
                  }}
                  dangerouslySetInnerHTML={{ __html: form.data.job }}
                />
              </Box>
            </Stack>
          </Flex>
          
          <Box mt={16}>
            <Text mb={4}>Rincian Pekerjaan : </Text>
            <div
              style={{
                fontWeight: 600
              }}
              dangerouslySetInnerHTML={{ __html: form.data.detail }}
            />
          </Box>
        </Box>
      )}
      
      
      {!isPrint && (
        <Group justify="center" mt={32}>
          {isDetail > 0 && (
            <Button px={16} h={48} leftSection={<IconArrowNarrowLeft />}
                    radius={32} variant="subtle"
                    onClick={() => setIsDetail(isDetail - 1)}>Kembali</Button>
          )}
          
          {(props.auth.user.role !== 'Mahasiswa' ? isDetail < 2 : isDetail < 1) &&
            (
              <Button px={16} h={48} rightSection={<IconArrowNarrowRight />}
                      radius={32} variant="subtle"
                      onClick={() => setIsDetail(isDetail + 1)}>Selanjutnya</Button>
            )}
        </Group>
      )}
    </AppLayout>
  )
}

export default Show
