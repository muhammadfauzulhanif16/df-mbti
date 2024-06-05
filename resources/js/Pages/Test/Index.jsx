import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Center,
  Group,
  List,
  Progress,
  Radio,
  Title,
  Tooltip
} from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { useForm } from '@inertiajs/react'

const Index = (props) => {
  console.log(props)
  
  const [isTestStarted, setIsTestStarted] = useState(false)
  const [timer, setTimer] = useState(0)
  const [activeIndicator, setActiveIndicator] = useState(0)
  const [sessionProgress, setSessionProgress] = useState(1)
  const [activeStatements, setActiveStatements] = useState(0)
  
  // console.log('activeIndicator', activeIndicator)
  // console.log('activeIndicator', props.indicators[activeIndicator])
  //
  // console.log('sessionProgress', sessionProgress)
  // console.log('activeStatements', activeStatements)
  // console.log('activeStatements', props.indicators[activeIndicator].sessions[activeStatements])
  // console.log('activeStatements', props.totalSessions)
  
  
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
    let interval = null
    
    if (isTestStarted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newTime = prevTimer + 1
          form.setData('time', newTime)
          return newTime
        })
      }, 1000)
    } else if (!isTestStarted && timer !== 0) {
      clearInterval(interval)
    }
    
    return () => clearInterval(interval)
  }, [isTestStarted, timer, form])
  
  console.log(form.data)
  console.log(timer)
  
  return (
    <AppLayout title="Tes MBTI" activeNav="Tes MBTI" authed={props.auth.user}
               meta={props.meta}>
      {
        isTestStarted && (
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
            
            
            <form onSubmit={(e) => {
              e.preventDefault()
              console.log(form.data)
            }}>
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
            </form>
            
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
                sessionProgress === props.totalSessions && (
                  <Button type="submit" onClick={() => {
                    setIsTestStarted(false)
                  }}>Selesai</Button>
                )
              }
              
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
            </Group>
          </Box>
        )
      }
      
      {
        !isTestStarted && (
          <Box px={16}>
            <h2 align="center">Aturan Pengerjaan Test MBTI Persona</h2>
            
            <List type="ordered">
              <List.Item>Hasil Test MBTIerupakan cerminan dari kepribadian
                         anda</List.Item>
              <List.Item>Jawablah setiap item pertanyaan dengan jujur sesuai
                         dengan diri anda masing-masing</List.Item>
              <List.Item>Setiap item pertanyaan wajib dijawab, sekalipun anda
                         tidak
                         menyukainya</List.Item>
              <List.Item>Apabila telah selesai mengerjakan soal dan ingin
                         melihat ke soal berikutnya, maka bisa dipilih button
                         'selanjutnya'</List.Item>
              <List.Item>Button 'sebelumnya' digunakan apabila ingin
                         melihat jawaban sebelumnya</List.Item>
              <List.Item>Button 'selanjutnya' hanya bisa dipilih apabila semua
                         item
                         pertanyaan telah dijawab seluruhnya</List.Item>
            </List>
            
            <Progress my={32} radius="xl" size="xl" value={100} striped
                      animated />
            
            <Center>
              <Button mx="auto" onClick={() => {
                setIsTestStarted(true)
              }}>Mulai Test</Button>
            </Center>
          </Box>
        )
      }
    </AppLayout>
  )
}

export default Index
