import React, { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/react'
import {
  Box,
  Button,
  Center,
  Group,
  List,
  Progress,
  Radio,
  Text,
  Title,
} from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconLogout,
} from '@tabler/icons-react'

export const Create = (props) => {
  console.log(props)
  const [timer, setTimer] = useState(0)
  const [activeIndicator, setActiveIndicator] = useState(0)
  
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60)
    const seconds = timeInSeconds - (hours * 3600) - (minutes * 60)
    
    const formattedHours = hours.toString().padStart(2, '0')
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }
  
  const answers = props.statements.map((statement) => (
    {
      statement_id: statement.id,
      choice_id: '',
    }
  ))
  
  const form = useForm({
    time: timer,
    answers,
  })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newTime = prevTimer + 1
        form.setData('time', newTime)
        return newTime
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [timer, form])
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('tests.store'))
    }}>
      <AppLayout title="Tes MBTI" activeNav="Tes MBTI" authed={props.auth.user}
                 meta={props.meta}>
        <Box pos="sticky" top={80} py={16} bg="white" style={{ zIndex: 2 }}>
          <Progress.Root radius="xl" size={32} mb={16}>
            <Progress.Section value={
              100 / props.indicators.length * (activeIndicator + 1)
            }>
              <Progress.Label>{
                100 / props.indicators.length * (activeIndicator + 1)
              }%</Progress.Label>
            </Progress.Section>
          </Progress.Root>
          
          <Text bg="white" style={{ zIndex: 2 }}
                mb={32}>Waktu: {formatTime(timer)}</Text>
        </Box>
        
        <Center bg="blue.2" mb={32} py={16} style={{
          borderRadius: 20,
        }}>
          <Title align="center">
            {props.indicators[activeIndicator].name}
          </Title>
        </Center>
        
        <List style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
              type="ordered">
          {props.indicators[activeIndicator].statements.map((statement) => (
            <List.Item
              key={statement.id}
              style={{
                border: '1px solid #e1e1e1',
                borderRadius: 20,
                padding: 16,
              }}>
              <Radio.Group
                label={statement.name}
                withAsterisk
                onChange={(value) => {
                  form.setData('answers', form.data.answers.map((test) => {
                    if (test.statement_id === statement.id) {
                      return {
                        statement_id: statement.id,
                        choice_id: value,
                      }
                    }
                    return test
                  }))
                }}
                value={form.data.answers.find((test) => test.statement_id === statement.id).choice_id}
              >
                <Group mt="xs" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 16,
                }}>
                  {props.choices.map((choice) => (
                    <Radio key={choice.id} value={choice.id}
                           label={choice.name} />
                  ))}
                </Group>
              </Radio.Group>
            </List.Item>
          ))}
        < /List>
        
        <Group mt={32} justify="center">
          {activeIndicator > 0 && (
            <Button variant="subtle" px={16} h={48}
                    radius={32} styles={{ section: { marginRight: 16 } }}
                    leftSection={<IconArrowNarrowLeft />}
                    onClick={() => {
                      setActiveIndicator(activeIndicator - 1)
                      window.scrollTo(0, 0)
                    }}>Sebelumnya</Button>
          )}
          
          {props.indicators.length - 1 === activeIndicator ? (
            <Button px={16} h={48}
                    radius={32} variant="subtle"
                    rightSection={<IconLogout />}
                    styles={{ section: { marginLeft: 16 } }} color="red"
                    type="submit"
                    disabled={form.data.answers.some((test) => test.choice_id === '')}
            >Selesai</Button>
          ) : (
            <Button px={16} h={48}
                    radius={32} variant="subtle"
                    rightSection={<IconArrowNarrowRight />}
                    styles={{ section: { marginLeft: 16 } }}
                    onClick={() => {
                      setActiveIndicator(activeIndicator + 1)
                      window.scrollTo(0, 0)
                    }}
            >Selanjutnya</Button>
          )}
        </Group>
      </AppLayout>
    </form>
  )
}

export default Create
