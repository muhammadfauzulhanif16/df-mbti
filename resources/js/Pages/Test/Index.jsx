import React, { useEffect, useState } from 'react'
import { Button, Center, Group, Modal, SimpleGrid } from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { useDisclosure } from '@mantine/hooks'

const Index = (props) => {
  const [isTestStarted, setIsTestStarted] = useState(false)
  const [opened, { open, close }] = useDisclosure(false)
  const [timer, setTimer] = useState(0)
  const [finishModalOpened, {
    open: openFinishModal,
    close: closeFinishModal
  }] = useDisclosure(false)
  
  useEffect(() => {
    let interval = null
    if (isTestStarted) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    } else if (!isTestStarted && timer !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isTestStarted, timer])
  
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60)
    const seconds = timeInSeconds - (hours * 3600) - (minutes * 60)
    
    const formattedHours = hours.toString().padStart(2, '0')
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }
  
  console.log(formatTime(timer))
  
  return (
    <AppLayout title="Tes MBTI" activeNav="Tes MBTI" authed={props.auth.user}
               meta={props.meta}>
      <Modal opened={opened} onClose={close}
             title="Apakah anda yakin memulai tes?"
             centered
      >
        <SimpleGrid cols={2}>
          <Button variant="outline" color="red" onClick={
            () => {
              close()
              setIsTestStarted(false)
            }
          }>Tidak</Button>
          <Button variant="filled"
                  onClick={
                    () => {
                      close()
                      setIsTestStarted(true)
                    }
                  }>Ya</Button>
        </SimpleGrid>
      </Modal>
      
      <Modal opened={finishModalOpened} onClose={closeFinishModal}
             title="Apakah anda yakin selesai tes?"
             centered
      >
        <SimpleGrid cols={2}>
          <Button variant="outline" color="red"
                  onClick={closeFinishModal}>Tidak</Button>
          <Button variant="filled"
                  onClick={
                    () => {
                      closeFinishModal()
                      setIsTestStarted(false)
                      setTimer(0)
                    }
                  }>Ya</Button>
        </SimpleGrid>
      </Modal>
      
      {
        isTestStarted && (
          <Group justify="space-between" px={16}>
            <p>Waktu: {formatTime(timer)}</p>
            <Button onClick={openFinishModal}>Selesai</Button>
          </Group>
        )
      }
      
      {
        !isTestStarted && (
          <Center h="50vh">
            <Button onClick={open}>Mulai Test</Button>
          </Center>
        )
      }
    </AppLayout>
  )
}

export default Index
