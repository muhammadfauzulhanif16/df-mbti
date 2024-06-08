import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Box, Flex, Progress, Stack, Text, Title } from '@mantine/core'

const Show = (props) => {
  console.log(props)
  
  return (
    <AppLayout
      title="Tes MBTI"
      activeNav="Tes MBTI"
      authed={props.auth.user}
      meta={props.meta}
    >
      <Box p={16}>
        <Title align="center" mb={16}>{props.test.allMaxBasicTraitCodes}</Title>
        
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
      
      {/*<Button*/}
      {/*  onClick={() => router.get('/tests/export')}>download</Button>*/}
    </AppLayout>
  )
}

export default Show
