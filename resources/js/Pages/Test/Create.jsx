import React, { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/react'
import {
  Box,
  Button,
  Group,
  List,
  Progress,
  Radio,
  Title,
  Tooltip
} from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'

export const Create = (props) => {
  const [timer, setTimer] = useState(0)
  const [activeIndicator, setActiveIndicator] = useState(0)
  const [sessionProgress, setSessionProgress] = useState(1)
  const [activeStatements, setActiveStatements] = useState(0)
  
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60)
    const seconds = timeInSeconds - (hours * 3600) - (minutes * 60)
    
    const formattedHours = hours.toString().padStart(2, '0')
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }
  
  const tests = props.statements.map((statement) => (
    {
      statement_id: statement.id,
      choice_id: ''
    }
  ))
  
  const form = useForm({
    time: timer,
    tests
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
    <AppLayout title="Tes MBTI" activeNav="Tes MBTI" authed={props.auth.user}
               meta={props.meta}>
      <form onSubmit={(e) => {
        e.preventDefault()
        // console.log('submit', form.data)
        form.post(route('tests.store'))
      }}>
        <Box px={16}>
          <Progress.Root radius="xl" size="xl">
            <Tooltip label={`${
              100 / props.totalSessions * sessionProgress
            }}%`}>
              <Progress.Section value={
                100 / props.totalSessions * sessionProgress
              }>
                <Progress.Label>{
                  100 / props.totalSessions * sessionProgress
                }%</Progress.Label>
              </Progress.Section>
            </Tooltip>
          </Progress.Root>
          
          <Group justify="space-between" my={32}>
            <p>Waktu: {formatTime(timer)}</p>
          </Group>
          
          
          <Title mt={16} align="center">
            {props.indicators[activeIndicator].name}
          </Title>
          
          <List type="ordered">
            {props.indicators[activeIndicator].sessions[activeStatements]?.map((statement) => (
              <List.Item key={statement.id}>
                <Radio.Group
                  label={statement.name}
                  withAsterisk
                  onChange={(value) => {
                    form.setData('tests', form.data.tests.map((test) => {
                      if (test.statement_id === statement.id) {
                        return {
                          statement_id: statement.id,
                          choice_id: value
                        }
                      }
                      return test
                    }))
                  }}
                  value={form.data.tests.find((test) => test.statement_id === statement.id).choice_id}
                >
                  <Group mt="xs" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 16
                  }}>
                    {props.choices.map((choice) => (
                      <Radio key={choice.id} value={choice.id}
                             label={choice.name} />
                    ))}
                  </Group>
                </Radio.Group>
              </List.Item>
            ))}
          </List>
          
          <Group mt={32} justify="flex-end">
            {sessionProgress !== 1 &&
              <Button onClick={
                () => {
                  if (activeStatements === 0) {
                    setActiveIndicator(activeIndicator - 1)
                    setSessionProgress(sessionProgress - 1)
                    setActiveStatements(props.indicators[activeIndicator - 1].sessions.length - 1)
                  } else {
                    setActiveStatements(activeStatements - 1)
                    setSessionProgress(sessionProgress - 1)
                  }
                }
              }
                      disabled={sessionProgress === 0}
              >Kembali</Button>}
            
            
            {
              sessionProgress !== props.totalSessions && (
                <Button onClick={
                  () => {
                    if (activeStatements === props.indicators[activeIndicator].sessions.length - 1) {
                      setActiveIndicator(activeIndicator + 1)
                      setSessionProgress(sessionProgress + 1)
                      setActiveStatements(0)
                    } else {
                      setActiveStatements(activeStatements + 1)
                      setSessionProgress(sessionProgress + 1)
                    }
                  }
                }
                        disabled={sessionProgress === props.totalSessions}
                >Selanjutnya</Button>
              )
            }
            
            {
              sessionProgress === props.totalSessions && (
                <Button type="submit">Selesai</Button>
              )
            }
          </Group>
        </Box>
      </form>
    
    </AppLayout>
  )
}

export default Create