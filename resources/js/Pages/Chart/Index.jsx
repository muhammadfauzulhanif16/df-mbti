import React from 'react'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { BarChart } from '@mantine/charts'
import { Select, Stack } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'

const Index = (props) => {
  console.log(props)
  const [supervisorId, setSupervisorId] = React.useState(props.auth.user.id)
  
  const personalities = props.students?.reduce((acc, student) => {
    const personality = student.test.personality
    if (personality) {
      const existingPersonality = acc.find(item => item.personalityName === personality)
      if (existingPersonality) {
        existingPersonality.["Mahasiswa"] += 1
      } else {
        acc.push({ personalityName: personality, "Mahasiswa": 1 })
      }
    }
    return acc
  }, [])
  
  return (
    <AppLayout
      title="Grafik"
      activeNav="Grafik"
      authed={props.auth.user}
      meta={props.meta}
    >
      <Stack p={16}>
        <Select
          leftSection={<IconUser />}
          clearable
          searchable
          value={supervisorId}
          disabled={props.auth.user.role === 'Dosen PA'}
          nothingFoundMessage="Tidak ada dosen pembimbing"
          checkIconPosition="right"
          placeholder="Dosen Pembimbing"
          data={props.lecturers.map(lecturer => ({
            value: lecturer.user.id,
            label: lecturer.user.full_name
          }))}
          onChange={(value) => setSupervisorId(value)}
        />
        
        <BarChart
          h="100vh"
          tickLine="xy"
          gridAxis="xy"
          data={personalities}
          dataKey="personalityName"
          withLegend
          xAxisLabel="Kepribadian"
          yAxisLabel={`${
            supervisorId ? props.students.filter((student) => student.supervisor_id === supervisorId).length : props.students.length
          } dari ${props.totalStudents} Mahasiswa`}
          series={[{ name: 'Mahasiswa', color: 'blue' }]}
          withBarValueLabel
        />
      </Stack>
    </AppLayout>
  )
}

export default Index
