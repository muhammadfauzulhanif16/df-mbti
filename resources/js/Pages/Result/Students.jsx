import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  List,
  Select,
  Stack,
  Table,
  Text,
  TextInput,
} from '@mantine/core'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { IconCalendar, IconSearch, IconUser } from '@tabler/icons-react'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

const Index = (props) => {
  console.log(props)
  const [search, setSearch] = useState('')
  const [academicYear, setAcademicYear] = useState('')
  const [supervisorId, setSupervisorId] = useState(props.auth.user.role === 'Dosen PA' ? props.auth.user.id : '')
  const students = props.students.filter(student => (
    (!search || student.user.full_name.toLowerCase().includes(search.toLowerCase())) &&
    (!academicYear || student.academic_year === academicYear) &&
    (!supervisorId || student.supervisor_id === supervisorId)
  ))
  
  const jobCounts = students.reduce((acc, student) => {
    const job = student?.tests.length ? student?.tests[0].work.name : '-'
    if (job !== '-') {
      acc[job] = (acc[job] || 0) + 1
    }
    return acc
  }, {})
  
  const personalityCounts = students.reduce((acc, student) => {
    const personality = student?.tests.length ? student?.tests[0].personality : '-'
    if (personality !== '-') {
      acc[personality] = (acc[personality] || 0) + 1
    }
    return acc
  }, {})
  
  const handleExportRows = (rows, columns) => {
    const doc = new jsPDF()
    
    // Add logo to the top-left corner
    const logo = '/unsada.png' // Adjust the path as needed
    doc.addImage(logo, 'PNG', 10, 10, 30, 30)
    
    // Add university header text next to the logo
    doc.setFontSize(12)
    doc.text('UNIVERSITAS DARMA PERSADA', 50, 15)
    doc.text('Jl. Taman Malaka Selatan, Pondok Kelapa, Jakarta Timur, Indonesia 13450', 50, 20)
    doc.text('Telp. (021) 8649051, 8649053, 8649057 Fax. (021) 8649052', 50, 25)
    doc.text('E-mail : humas@unsada.ac.id Home page : http//www.unsada.ac.id', 50, 30)
    
    // Add a divider line below the header
    doc.setLineWidth(0.5)
    doc.line(10, 40, 200, 40)
    
    // Add centered title and dynamic period below the divider
    const currentDate = new Date()
    const monthNames = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ]
    const period = `Periode: ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
    
    doc.setFontSize(18)
    const title = 'LAPORAN HASIL TES KEPRIBADIAN MAHASISWA'
    const titleWidth = doc.getTextWidth(title)
    doc.text(title, (doc.internal.pageSize.width - titleWidth) / 2, 50)
    
    doc.setFontSize(12)
    const periodWidth = doc.getTextWidth(period)
    doc.text(period, (doc.internal.pageSize.width - periodWidth) / 2, 60)
    
    // Filter rows to include only those with non-empty "Saran Pekerjaan" and "Tipe Kepribadian"
    const filteredRows = rows.filter(row => row['Tipe Kepribadian'] && row['Saran Pekerjaan'] && row['Tipe Kepribadian'] !== '-' && row['Saran Pekerjaan'] !== '-')
    
    const jobCounts = filteredRows.reduce((acc, row) => {
      acc[row['Saran Pekerjaan']] = (acc[row['Saran Pekerjaan']] || 0) + 1
      return acc
    }, {})
    
    const personalityCounts = filteredRows.reduce((acc, row) => {
      acc[row['Tipe Kepribadian']] = (acc[row['Tipe Kepribadian']] || 0) + 1
      return acc
    }, {})
    
    // Add job and personality type counts below the period dynamically
    let yPosition = 70
    if (supervisorId) {
      doc.text('Nama Dosen PA:', 10, yPosition)
      doc.text(
        props.lecturers.find(lecturer => lecturer.user.id === supervisorId)?.user.full_name || 'Nama tidak ditemukan',
        50,
        yPosition,
      )
    }
    
    doc.text('Saran Pekerjaan:', 10, yPosition + 10)
    Object.entries(jobCounts).forEach(([job, count], index) => {
      doc.text(`${job}: ${count} Mahasiswa`, 10, yPosition + 15 + (index * 5))
    })
    const totalJobStudents = Object.values(jobCounts).reduce((acc, count) => acc + count, 0)
    doc.text(`Total Mahasiswa: ${totalJobStudents}`, 10, yPosition + 15 + (Object.entries(jobCounts).length * 5))
    
    doc.text('Tipe Kepribadian:', 110, yPosition + 10)
    Object.entries(personalityCounts).forEach(([personality, count], index) => {
      doc.text(`${personality}: ${count} Mahasiswa`, 110, yPosition + 15 + (index * 5))
    })
    const totalPersonalityStudents = Object.values(personalityCounts).reduce((acc, count) => acc + count, 0)
    doc.text(`Total Mahasiswa: ${totalPersonalityStudents}`, 110, yPosition + 15 + (Object.entries(personalityCounts).length * 5))
    
    // Extract table data and headers
    const tableData = filteredRows.map((row) => Object.values(row))
    const tableHeaders = columns.map((c) => c.header)
    
    // Generate the table below the job and personality type counts
    autoTable(doc, {
      startY: yPosition + 50, // Start after the job and personality type counts
      head: [tableHeaders],
      body: tableData,
    })
    
    const supervisor = supervisorId
      ? props.lecturers.find(lecturer => lecturer.user.id === supervisorId)?.user
      : props.auth.user
    
    const role = supervisor.role
    const name = supervisor.full_name
    const nidn = supervisor.id_number
    const titleText = role === 'Admin' ? 'Kepala Prodi' : 'Dosen Pembimbing Akademik'
    
    doc.setFontSize(12)
    const pageWidth = doc.internal.pageSize.width
    const pageHeight = doc.internal.pageSize.height
    const marginRight = 10
    const marginBottom = 20
    const lineSpacing = 5
    
    doc.text(titleText, pageWidth - marginRight - doc.getTextWidth(titleText), pageHeight - marginBottom)
    doc.text(name, pageWidth - marginRight - doc.getTextWidth(name), pageHeight - marginBottom + lineSpacing)
    doc.text(`NIDN: ${nidn}`, pageWidth - marginRight - doc.getTextWidth(`NIDN: ${nidn}`), pageHeight - marginBottom + 2 * lineSpacing)
    
    // Save the PDF
    doc.save('mrt-pdf-example.pdf')
  }
  
  const THList = props.auth.user.role === 'Admin' &&
    ['#', 'Foto', 'NIM', 'Nama Lengkap', 'Tahun Angkatan', 'DPA', 'Tipe Kepribadian', 'Saran Pekerjaan', 'Opsi']
  
  const columns = [
    { header: 'NIM' },
    { header: 'Nama Lengkap' },
    { header: 'Tahun Angkatan' },
    { header: 'DPA' },
    { header: 'Tipe Kepribadian' },
    { header: 'Saran Pekerjaan' },
  ]
  
  return (
    <AppLayout title="Mahasiswa" activeNav="Mahasiswa" authed={props.auth.user}
               meta={props.meta}>
      <Stack gap={32}>
        <Grid grow>
          <Grid.Col span={{
            base: 6,
            sm: 3,
          }}>
            <Select styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
                    leftSection={<IconCalendar />}
                    clearable
                    searchable
                    placeholder="Tahun Angkatan"
                    checkIconPosition="right"
                    nothingFoundMessage="Tidak ada tahun ajaran"
                    data={[...new Set(props.students.map(student => student.academic_year))].sort((a, b) => b - a)}
                    onChange={(value) => setAcademicYear(value)}
            />
          </Grid.Col>
          
          <Grid.Col span={{
            base: 6,
            sm: 3,
          }}>
            <Select styles={{
              label: { marginBottom: 8 },
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 16,
              },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }}
                    leftSection={<IconUser />}
                    clearable
                    searchable
                    value={supervisorId}
                    disabled={props.auth.user.role === 'Dosen PA'}
                    nothingFoundMessage="Tidak ada dosen pembimbing"
                    checkIconPosition="right"
                    placeholder="Dosen Pembimbing"
                    data={props.lecturers
                      .map(lecturer => ({
                        label: lecturer.user.full_name,
                        value: lecturer.user.id,
                      }))
                      .sort((a, b) => a.label.localeCompare(b.label))}
                    onChange={(value) => setSupervisorId(value)}
            />
          </Grid.Col>
          
          <Grid.Col span={{
            base: 6,
            sm: 3,
          }}>
            <TextInput
              styles={{
                label: { marginBottom: 8 },
                input: {
                  height: 48,
                  borderRadius: 32,
                  paddingLeft: 50,
                  paddingRight: 16,
                },
                section: { marginLeft: 0, width: 48, height: 48 },
                error: { marginTop: 8 },
              }}
              leftSection={<IconSearch />}
              placeholder="Cari mahasiswa..."
              value={search}
              onChange={(event) => setSearch(event.currentTarget.value)}
            />
          </Grid.Col>
        </Grid>
        
        <Text c="blue" onClick={() => handleExportRows(
          students.map(student => ({
            'NIM': student.user.id_number,
            'Nama Lengkap': student.user.full_name,
            'Tahun Angkatan': student.academic_year,
            'DPA': student.supervisor.user.full_name,
            'Tipe Kepribadian': student?.tests.length ? student?.tests[0].personality : '-',
            'Saran Pekerjaan': student?.tests.length ? student?.tests[0].work.name : '-',
          })),
          columns,
        )}>Cetak Laporan</Text>
        
        <Grid>
          {supervisorId && (
            <Grid.Col span={4}>
              <Stack>
                <Text fw={600}>Nama Dosen PA :</Text>
                <Text>
                  {props.lecturers.find(lecturer => lecturer.user.id === supervisorId)?.user.full_name || 'Nama tidak ditemukan'}
                </Text>
              </Stack>
            </Grid.Col>
          )}
          
          <Grid.Col span={supervisorId ? 4 : 6}>
            <Center>
              <Stack>
                <Text fw={600}>Saran Pekerjaan :</Text>
                <List>
                  {Object.entries(jobCounts).map(([job, count]) => (
                    <List.Item key={job}>{job} : {count} Mahasiswa</List.Item>
                  ))}
                </List>
                <Text fw={600}>Total
                               Mahasiswa: {Object.values(jobCounts).reduce((acc, count) => acc + count, 0)}</Text>
              </Stack>
            </Center>
          </Grid.Col>
          
          <Grid.Col span={supervisorId ? 4 : 6}>
            <Center>
              <Stack>
                <Text fw={600}>Tipe Kepribadian :</Text>
                <List>
                  {Object.entries(personalityCounts).map(([personality, count]) => (
                    <List.Item
                      key={personality}>{personality} : {count} Mahasiswa</List.Item>
                  ))}
                </List>
                <Text fw={600}>Total
                               Mahasiswa: {Object.values(personalityCounts).reduce((acc, count) => acc + count, 0)}</Text>
              </Stack>
            </Center>
          </Grid.Col>
        </Grid>
        
        <Box
          style={{
            borderRadius: 32,
            border: '1px solid #E9ECEF',
          }}>
          <Table.ScrollContainer>
            <Table highlightOnHover withColumnBorders>
              <Table.Thead h={64}>
                <Table.Tr>
                  {THList.map((th, id) => (
                    <Table.Th key={id} px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>{th}</Table.Th>
                  ))}
                </Table.Tr>
              </Table.Thead>
              
              <Table.Tbody>
                {students.map((student, id) => (
                  <Table.Tr key={id} h={64}>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      <Avatar src={student.user.avatar}
                              alt={student.user.full_name} />
                    </Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student.user.id_number}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student.user.full_name}</Table.Td>
                    {props.auth.user.role === 'Admin' && (<Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student.user.id_number.substring(0, 4)}</Table.Td>)}
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student?.supervisor?.user.full_name}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student?.tests.length ? student?.tests[0].personality : '-'}</Table.Td>
                    <Table.Td
                      px={16} py={0}
                      style={{ whiteSpace: 'nowrap' }}>{student?.tests.length ? student?.tests[0].work.name : '-'}</Table.Td>
                    
                    <Table.Td px={16} py={0}
                              style={{ whiteSpace: 'nowrap' }}>
                      <Button
                        disabled={!student?.tests.length}
                        px={16} h={48}
                        radius={32}
                        styles={{ section: { marginRight: 16 } }}
                        variant="outline" color="yellow"
                        onClick={() => router.get(route('students.tests.index', student.user_id))}>Detail</Button>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Box>
      </Stack>
    </AppLayout>
  )
}

export default Index
