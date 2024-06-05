import { useEffect, useState } from 'react'

export const useTimer = () => {
  const [timer, setTimer] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)
    
    return () => clearInterval(interval)
  }, [timer])
  
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60)
    const seconds = timeInSeconds - (hours * 3600) - (minutes * 60)
    
    const formattedHours = hours.toString().padStart(2, '0')
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }
  
  return { timer: formatTime(timer), setTimer }
}

