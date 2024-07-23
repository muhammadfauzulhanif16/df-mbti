import React, { useState } from 'react'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  Box,
  Center,
  Divider,
  List,
  SegmentedControl,
  Stack,
  Text,
  Title,
} from '@mantine/core'

const Dashboard = (props) => {
  const [activeTab, setActiveTab] = useState('System Analyst')
  console.log(activeTab)
  return (
    <AppLayout title="Beranda" activeNav="Beranda" authed={props.auth.user}
               meta={props.meta}>
      <Box>
        <Center bg="blue.1" mb={32} w="100%" style={{
          borderRadius: 32,
        }}>
          <h1>Selamat Datang di Beranda {props.auth.user.full_name}</h1>
        </Center>
        
        <Text
          align="center">{props.auth.user.role === 'Mahasiswa' ? 'Informasi pekerjaan lulusan prodi Sistem Informasi kurikulum 2022 beserta tipe kepribadian yang sesuai' : 'Informasi mata kuliah dari masing - masing pekerjaan lulusan prodi Sistem Informasi kurikulum 2022'}</Text>
        
        <Divider mt={16} mb={64} />
        
        <SegmentedControl fullWidth
                          onChange={(value) => setActiveTab(value)}
                          data={['System Analyst', 'IS Project Manager', 'Consultant IT', 'Software Engineer', 'Data & Business Analyst']}
                          color="blue" radius={32} />
        
        <Stack p={32} gap={32} style={{
          borderRadius: 32,
          border: '1px solid #e1e1e1',
          marginTop: 32,
        }}>{props.auth.user.role === 'Mahasiswa' ? <>
          {activeTab === 'System Analyst' ? <List type="ordered">
            <List.Item>
              <Title fz={20}>ESTJ</Title>
              <List type="unordered">
                <List.Item>Praktis, realistis, berpegang pada fakta, dengan
                           dorongan alamiah untuk bisnis dan
                           mekanistis.</List.Item>
                <List.Item>Sangat sistematis, procedural dan
                           terencana.</List.Item>
                <List.Item>Disiplin, on time dan pekerja keras.</List.Item>
                <List.Item>Konservatif dan cenderung kaku.</List.Item>
                <List.Item>Tidak tertarik pada subject yang tidak berguna
                           baginya, tapi dapat menyesuaikan diri jika
                           diperlukan.</List.Item>
                <List.Item>Senang mengorganisir sesuatu. Bisa menjadi
                           administrator yang baik jika mereka ingat untuk
                           memperhatikan perasaan dan perspektif orang
                           lain.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>INTP</Title>
              <List type="unordered">
                <List.Item>Sangat menghargai intelektualitas dan pengetahuan.
                           Menikmati hal-hal teoritis dan ilmiah. Senang
                           memecahkan masalah dengan logika dan
                           analisa.</List.Item>
                <List.Item>Diam dan menahan diri. Lebih suka bekerja
                           sendiri.</List.Item>
                <List.Item>Cenderung kritis, skeptis, mudah curiga dan
                           pesimis.</List.Item>
                <List.Item>Tidak suka memimpin dan bisa menjadi pengikut yang
                           tidak banyak menuntut.</List.Item>
                <List.Item>Cenderung memiliki minat yang jelas. Membutuhkan
                           karir dimana minatnya bisa berkembang dan bermanfaat.
                           Jika menemukan sesuatu yang menarik minatnya, ia akan
                           sangat serius dan antusias menekuninya.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>ISTP</Title>
              <List type="unordered">
                <List.Item>Tenang, pendiam, cenderung kaku, dingin, hati-hati,
                           penuh pertimbangan.</List.Item>
                <List.Item>Logis, rasional, kritis, obyektif, mampu
                           mengesampingkan perasaan.</List.Item>
                <List.Item>Mampu menghadapi perubahan mendadak dengan cepat dan
                           tenang.</List.Item>
                <List.Item>Percaya diri, tegas dan mampu menghadapi perbedaan
                           maupun kritik.</List.Item>
                <List.Item>Mampu menganalisa, mengorganisir, &
                           mendelegasikan.</List.Item>
                <List.Item>Problem solver yang baik terutama untuk masalah
                           teknis & keadaan mendadak.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>INTJ</Title>
              <List type="unordered">
                <List.Item>Visioner, punya perencanaan praktis, & biasanya
                           memiliki ide-ide original serta dorongan kuat untuk
                           mencapainya</List.Item>
                <List.Item>Mandiri dan percaya diri.</List.Item>
                <List.Item>Punya kemampuan analisa yang bagus serta
                           menyederhanakan sesuatu yang rumit dan abstrak
                           menjadi sesuatu yang praktis, mudah difahami &
                           dipraktekkan.</List.Item>
                <List.Item>Skeptis, kritis, logis, menentukan (determinatif) dan
                           kadang keras kepala.</List.Item>
                <List.Item>Punya keinginan untuk berkembang serta selalu ingin
                           lebih maju dari orang lain.</List.Item>
                <List.Item>Kritik & konflik tidak menjadi masalah
                           berarti.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>ISTJ</Title>
              <List type="unordered">
                <List.Item>Serius, tenang, stabil & damai.</List.Item>
                <List.Item>Senang pada fakta, logis, obyektif, praktis &
                           realistis.</List.Item>
                <List.Item>Task oriented, tekun, teratur, menepati janji, dapat
                           diandalkan & bertanggung jawab.</List.Item>
                <List.Item>Pendengar yang baik, setia, hanya mau berbagi dengan
                           orang dekat.</List.Item>
                <List.Item>Memegang aturan, standar & prosedur dengan
                           teguh.</List.Item>
              </List>
            </List.Item>
          </List> : activeTab === 'IS Project Manager' ? <List type="ordered">
            <List.Item>
              <Title fz={20}>ISFP</Title>
              <List type="unordered">
                <List.Item>Berpikiran simpel & praktis, fleksibel, sensitif,
                           ramah, tidak menonjolkan diri, rendah hati pada
                           kemampuannya.</List.Item>
                <List.Item>Menghindari konflik, tidak memaksakan pendapat atau
                           nilai-nilainya pada orang lain.</List.Item>
                <List.Item>Biasanya tidak mau memimpin tetapi menjadi pengikut
                           dan pelaksana yang setia.</List.Item>
                <List.Item>Seringkali santai menyelesaikan sesuatu, karena
                           sangat menikmati apa yang terjadi saat
                           ini.</List.Item>
                <List.Item>Menunjukkan perhatian lebih banyak melalui tindakan
                           dibandingkan kata-kata.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>INFJ</Title>
              <List type="unordered">
                <List.Item>Perhatian, empati, sensitif & berkomitmen terhadap
                           sebuah hubungan.</List.Item>
                <List.Item>Sukses karena ketekunan, originalitas dan keinginan
                           kuat untuk melakukan apa saja yang diperlukan
                           termasuk memberikan yg terbaik dalam
                           pekerjaan.</List.Item>
                <List.Item>Idealis, perfeksionis, memegang teguh
                           prinsip.</List.Item>
                <List.Item>Visioner, penuh ide, kreatif, suka merenung dan
                           inspiring.</List.Item>
                <List.Item>Biasanya diikuti dan dihormati karena kejelasan visi
                           serta dedikasi pada hal-hal baik.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>ISFJ</Title>
              <List type="unordered">
                <List.Item>Penuh pertimbangan, hati-hati, teliti dan
                           akurat.</List.Item>
                <List.Item>Serius, tenang, stabil namun sensitif.</List.Item>
                <List.Item>Ramah, perhatian pada perasaan & kebutuhan orang
                           lain, setia, kooperatif, pendengar yang
                           baik.</List.Item>
                <List.Item>Punya kemampuan mengorganisasi, detail, teliti,
                           sangat bertanggung jawab dan bisa
                           diandalkan.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>INTJ</Title>
              <List type="unordered">
                <List.Item>Visioner, punya perencanaan praktis, & biasanya
                           memiliki ide-ide original serta dorongan kuat untuk
                           mencapainya</List.Item>
                <List.Item>Mandiri dan percaya diri.</List.Item>
                <List.Item>Punya kemampuan analisa yang bagus serta
                           menyederhanakan sesuatu yang rumit dan abstrak
                           menjadi sesuatu yang praktis, mudah difahami &
                           dipraktekkan.</List.Item>
                <List.Item>Skeptis, kritis, logis, menentukan (determinatif) dan
                           kadang keras kepala.</List.Item>
                <List.Item>Punya keinginan untuk berkembang serta selalu ingin
                           lebih maju dari orang lain.</List.Item>
                <List.Item>Kritik & konflik tidak menjadi masalah
                           berarti.</List.Item>
              </List>
            </List.Item>
          </List> : activeTab === 'Consultant IT' ? <List type="ordered">
            <List.Item>
              <Title fz={20}>ENTJ</Title>
              <List type="unordered">
                <List.Item>Tegas, asertif, to the point, jujur terus terang,
                           obyektif, kritis, & punya standard
                           tinggi.</List.Item>
                <List.Item>Dominan, kuat kemauannya, perfeksionis dan
                           kompetitif.</List.Item>
                <List.Item>Tangguh, disiplin, dan sangat menghargai
                           komitmen.</List.Item>
                <List.Item>Cenderung menutupi perasaan dan menyembunyikan
                           kelemahan.</List.Item>
                <List.Item>Berkarisma, komunikasi baik, mampu menggerakkan
                           orang.</List.Item>
                <List.Item>Berbakat pemimpin.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>ENFJ</Title>
              <List type="unordered">
                <List.Item>Kreatif, imajinatif, peka, sensitive,
                           loyal.</List.Item>
                <List.Item>Pada umumnya peduli pada apa kata orang atau apa yang
                           orang lain inginkan dan cenderung melakukan sesuatu
                           dengan memperhatikan perasaan orang lain.</List.Item>
                <List.Item>Pandai bergaul, meyakinkan, ramah, fun, populer,
                           simpatik. Responsif pada kritik dan
                           pujian.</List.Item>
                <List.Item>Menyukai variasi dan tantangan baru.</List.Item>
                <List.Item>Butuh apresiasi dan penerimaan.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>ESTP</Title>
              <List type="unordered">
                <List.Item>Spontan, Aktif, Enerjik, Cekatan, Cepat, Sigap,
                           Antusias, Fun dan penuh variasi.</List.Item>
                <List.Item>Komunikator, asertif, to the point, ceplas-ceplos,
                           berkarisma, punya interpersonal skill yang
                           baik.</List.Item>
                <List.Item>Baik dalam pemecahan masalah langsung di tempat.
                           Mampu menghadapi masalah, konflik dan kritik. Tidak
                           khawatir, menikmati apapun yang terjadi.</List.Item>
                <List.Item>Cenderung untuk menyukai sesuatu yang mekanistis,
                           kegiatan bersama dan olahraga.</List.Item>
                <List.Item>Mudah beradaptasi, toleran, pada umumnya konservatif
                           tentang nilai-nilai. Tidak suka penjelasan terlalu
                           panjang. Paling baik dalam hal-hal nyata yang dapat
                           dilakukan.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>ENTP</Title>
              <List type="unordered">
                <List.Item>Gesit, kreatif, inovatif, cerdik, logis, baik dalam
                           banyak hal.</List.Item>
                <List.Item>Banyak bicara dan punya kemampuan debat yang baik.
                           Bisa berargumentasi untuk senang-senang saja tanpa
                           merasa bersalah.</List.Item>
                <List.Item>Fleksibel. Punya banyak cara untuk memecahkan masalah
                           dan tantangan.</List.Item>
                <List.Item>Kurang konsisten. Cenderung untuk melakukan hal baru
                           yang menarik hati setelah melakukan sesuatu yang
                           lain.</List.Item>
                <List.Item>Punya keinginan kuat untuk mengembangkan
                           diri.</List.Item>
              </List>
            </List.Item>
          </List> : activeTab === 'Software Engineer' ? <List type="ordered">
            <List.Item>
              <Title fz={20}>ENTP</Title>
              <List type="unordered">
                <List.Item>Gesit, kreatif, inovatif, cerdik, logis, baik dalam
                           banyak hal.</List.Item>
                <List.Item>Banyak bicara dan punya kemampuan debat yang baik.
                           Bisa berargumentasi untuk senang-senang saja tanpa
                           merasa bersalah.</List.Item>
                <List.Item>Fleksibel. Punya banyak cara untuk memecahkan masalah
                           dan tantangan.</List.Item>
                <List.Item>Kurang konsisten. Cenderung untuk melakukan hal baru
                           yang menarik hati setelah melakukan sesuatu yang
                           lain.</List.Item>
                <List.Item>Punya keinginan kuat untuk mengembangkan
                           diri.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>INFP</Title>
              <List type="unordered">
                <List.Item>Sangat perhatian dan peka dengan perasaan orang
                           lain.</List.Item>
                <List.Item>Penuh dengan antusiasme dan kesetiaan, tapi biasanya
                           hanya untuk orang dekat.</List.Item>
                <List.Item>Peduli pada banyak hal. Cenderung mengambil terlalu
                           banyak dan menyelesaikan sebagian.</List.Item>
                <List.Item>Cenderung idealis dan perfeksionis.</List.Item>
                <List.Item>Berpikir win-win solution, mempercayai dan
                           mengoptimalkan orang lain.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>ISTP</Title>
              <List type="unordered">
                <List.Item>Tenang, pendiam, cenderung kaku, dingin, hati-hati,
                           penuh pertimbangan.</List.Item>
                <List.Item>Logis, rasional, kritis, obyektif, mampu
                           mengesampingkan perasaan.</List.Item>
                <List.Item>Mampu menghadapi perubahan mendadak dengan cepat dan
                           tenang.</List.Item>
                <List.Item>Percaya diri, tegas dan mampu menghadapi perbedaan
                           maupun kritik.</List.Item>
                <List.Item>Mampu menganalisa, mengorganisir, &
                           mendelegasikan.</List.Item>
                <List.Item>Problem solver yang baik terutama untuk masalah
                           teknis & keadaan mendadak.</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title fz={20}>INTJ</Title>
              <List type="unordered">
                <List.Item>Visioner, punya perencanaan praktis, & biasanya
                           memiliki ide-ide original serta dorongan kuat untuk
                           mencapainya</List.Item>
                <List.Item>Mandiri dan percaya diri.</List.Item>
                <List.Item>Punya kemampuan analisa yang bagus serta
                           menyederhanakan sesuatu yang rumit dan abstrak
                           menjadi sesuatu yang praktis, mudah difahami &
                           dipraktekkan.</List.Item>
                <List.Item>Skeptis, kritis, logis, menentukan (determinatif) dan
                           kadang keras kepala.</List.Item>
                <List.Item>Punya keinginan untuk berkembang serta selalu ingin
                           lebih maju dari orang lain.</List.Item>
                <List.Item>Kritik & konflik tidak menjadi masalah
                           berarti.</List.Item>
              </List>
            </List.Item>
          </List> : activeTab === 'Data & Business Analyst' ?
            <List type="ordered">
              <List.Item>
                <Title fz={20}>ESFP</Title>
                <List type="unordered">
                  <List.Item>Outgoing, easygoing, mudah berteman, bersahabat,
                             sangat sosial, ramah, hangat, &
                             menyenangkan.</List.Item>
                  <List.Item>Optimis, ceria, antusias, fun, menghibur, suka
                             menjadi perhatian.</List.Item>
                  <List.Item>Punya interpersonal skill yang baik, murah hati,
                             mudah simpatik dan mengenali perasaan orang lain.
                             Menghindari konflik dan menjaga keharmonisan suatu
                             hubungan.</List.Item>
                  <List.Item>Mengetahui apa yang terjadi di sekelilingnya dan
                             ikut serta dalam kegiatan tersebut.</List.Item>
                  <List.Item>Sangat baik dalam keadaan yang membutuhkan common
                             sense, tindakan cepat dan ketrampilan
                             praktis.</List.Item>
                </List>
              </List.Item>
              <List.Item>
                <Title fz={20}>ENFP</Title>
                <List type="unordered">
                  <List.Item>Ramah, hangat, enerjik, optimis, antusias, semangat
                             tinggi, fun.</List.Item>
                  <List.Item>Imaginatif, penuh ide, kreatif,
                             inovatif.</List.Item>
                  <List.Item>Mampu beradaptasi dengan beragam situasi dan
                             perubahan.</List.Item>
                  <List.Item>Pandai berkomunikasi, senang bersosialisasi &
                             membawa suasana positif.</List.Item>
                  <List.Item>Mudah membaca perasaan dan kebutuhan orang
                             lain.</List.Item>
                </List>
              </List.Item>
              <List.Item>
                <Title fz={20}>ENTJ</Title>
                <List type="unordered">
                  <List.Item>Tegas, asertif, to the point, jujur terus terang,
                             obyektif, kritis, & punya standard
                             tinggi.</List.Item>
                  <List.Item>Dominan, kuat kemauannya, perfeksionis dan
                             kompetitif.</List.Item>
                  <List.Item>Tangguh, disiplin, dan sangat menghargai
                             komitmen.</List.Item>
                  <List.Item>Cenderung menutupi perasaan dan menyembunyikan
                             kelemahan.</List.Item>
                  <List.Item>Berkarisma, komunikasi baik, mampu menggerakkan
                             orang.</List.Item>
                  <List.Item>Berbakat pemimpin.</List.Item>
                </List>
              </List.Item>
              <List.Item>
                <Title fz={20}>ESFJ</Title>
                <List type="unordered">
                  <List.Item>Hangat, banyak bicara, populer, dilahirkan untuk
                             bekerjasama, suportif dan anggota kelompok yang
                             aktif.</List.Item>
                  <List.Item>Membutuhkan keseimbangan dan baik dalam menciptakan
                             harmoni.</List.Item>
                  <List.Item>Selalu melakukan sesuatu yang manis bagi orang
                             lain. Kerja dengan baik dalam situasi yang
                             mendukung dan memujinya.</List.Item>
                  <List.Item>Santai, easy going, sederhana, tidak berfikir
                             panjang.</List.Item>
                  <List.Item>Teliti dan rajin merawat apa yang ia
                             miliki.</List.Item>
                </List>
              </List.Item>
            </List> : ''}
        </> : <>
          <Stack>
            <Title fz={20}>Tipe Kepribadian</Title>
            
            <Box>
              {activeTab === 'System Analyst' ?
                <>
                  <Text>ESTJ ( Extrovert, Sensing, Thinking, Judging)</Text>
                  <Text>INTP ( Introvert, Intuitive, Thinking,
                        Perceiving)</Text>
                  <Text>ISTP ( Introvert, Sensing, Thinking, Perceiving)</Text>
                  <Text>INTJ ( Introvert, Intuitive, Thinking,
                        Judging)</Text>
                </> : activeTab === 'IS Project Manager' ? <>
                  <Text>ISFP ( Introvert, Sensing, Feeling, Perceiving)</Text>
                  <Text>INFJ ( Introvert, Intuitive, Feeling, Judging)</Text>
                  <Text>ISFJ ( Introvert, Sensing, Feeling, Judging)</Text>
                  <Text>INTJ (Introvert, Intuitive, Thinking, Judging)</Text>
                </> : activeTab === 'Consultant IT' ? <>
                  <Text>ENFJ (Extrovert, Intuitive, Feeling, Judging)</Text>
                  <Text>ESTP (Extrovert, Sensing, Thinking, Perceiving)</Text>
                  <Text>ENTP ( Extrovert, Intuitive, Thinking,
                        Perceiving)</Text>
                </> : activeTab === 'Software Engineer' ? <>
                  <Text>ENTP ( Extrovert, Intuitive, Thinking,
                        Perceiving)</Text>
                  <Text>INFP (Introvert, Intuitive, Feeling, Perceiving)</Text>
                  <Text>ISTP ( Introvert, Sensing, Thinking, Perceiving)</Text>
                  <Text>INTJ ( Introvert, Intuitive, Thinking, Judging)</Text>
                </> : activeTab === 'Data & Business Analyst' ? <>
                  <Text>ESFP (Extrovert, Sensing, Feeling, Perceiving)</Text>
                  <Text>ENFP ( Extrovert, Intuitive, Feeling, Perceiving)</Text>
                  <Text>ENTJ ( Extrovert, Intuitive,Thinking, Judging)</Text>
                  <Text>ESFJ (Extrovert, Sensing, Feeling, Judging)</Text>
                </> : ''}
            </Box>
          </Stack>
          
          <Stack>
            <Title fz={20}>Mata Kuliah Relevan</Title>
            
            <Box>
              {activeTab === 'System Analyst' ?
                <Stack>
                  <Box>
                    <Text>Mata Kuliah Wajib</Text>
                    <List type="ordered">
                      <List.Item>Konsep Sistem Informasi</List.Item>
                      <List.Item>Perancangan Sistem Informasi</List.Item>
                      <List.Item>Manajemen Proses Bisnis</List.Item>
                      <List.Item>Rekayasa Perangkat Lunak</List.Item>
                      <List.Item>Sistem Infomasi Manajemen</List.Item>
                      <List.Item>Jaringan Komputer</List.Item>
                      <List.Item>Prak. Jaringan Komputer</List.Item>
                      <List.Item>Manajemen Proyek SI</List.Item>
                      <List.Item>Bisnis dan Manajemen</List.Item>
                      <List.Item>Analisa Sistem Informasi</List.Item>
                      <List.Item>Dasar Akuntansi & Aplikasi</List.Item>
                      <List.Item>Prak. Aplikasi Akuntansi</List.Item>
                      <List.Item>Interaksi Manusia dan komputer</List.Item>
                      <List.Item>Manajemen Sains</List.Item>
                      <List.Item>Etika Profesi TI</List.Item>
                      <List.Item>Enterprise Resources Planning</List.Item>
                      <List.Item>Audit Sistem Informasi</List.Item>
                      <List.Item>Capstone</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text>Mata Kuliah Pilihan</Text>
                    <List type="ordered">
                      <List.Item>Enterprise Architecture</List.Item>
                      <List.Item>Human Resource Management System</List.Item>
                      <List.Item>Applied ERP: Integrated business
                                 process</List.Item>
                      <List.Item>Integrasi Aplikasi perusahaan</List.Item>
                    </List>
                  </Box>
                </Stack> : activeTab === 'IS Project Manager' ? <Stack>
                  <Box>
                    <Text>Mata Kuliah Wajib</Text>
                    <List type="ordered">
                      <List.Item>Sistem Basis Data</List.Item>
                      <List.Item>Konsep Sistem Informasi</List.Item>
                      <List.Item>Sistem Operasi</List.Item>
                      <List.Item>Manajemen Proses Bisnis</List.Item>
                      <List.Item>Sistem Infomasi Manajemen</List.Item>
                      <List.Item>Manajemen Proyek SI</List.Item>
                      <List.Item>Rekayasa Kebutuhan SI</List.Item>
                      <List.Item>Testing dan Implementasi Sistem</List.Item>
                      <List.Item>Interpersonal skill</List.Item>
                      <List.Item>Tata Kelola SI</List.Item>
                      <List.Item>Audit Sistem Informasi</List.Item>
                      <List.Item>Dasar Akuntansi & Aplikasi</List.Item>
                      <List.Item>Prak. Aplikasi Akuntansi</List.Item>
                      <List.Item>Data Mining</List.Item>
                      <List.Item>Sistem Informasi Manufaktur</List.Item>
                      <List.Item>Matematika Sistem Informasi</List.Item>
                      <List.Item>Algoritma & Struktur Data</List.Item>
                      <List.Item>Prak. Algoritma & Struktur Data</List.Item>
                      <List.Item>Pengantar Teknologi Informasi</List.Item>
                      <List.Item>Logika dan Struktur Diskrit</List.Item>
                      <List.Item>Rekayasa Perangkat Lunak</List.Item>
                      <List.Item>Bisnis dan Manajemen</List.Item>
                      <List.Item>Analisa Sistem Informasi</List.Item>
                      <List.Item>Interaksi Manusia dan komputer</List.Item>
                      <List.Item>Jaringan Komputer</List.Item>
                      <List.Item>Prak. Jaringan Komputer</List.Item>
                      <List.Item>Manajemen Sains</List.Item>
                      <List.Item>Etika Profesi TI</List.Item>
                      <List.Item>Statistik (Probabilitas)</List.Item>
                      <List.Item>Prak. Statistik (Probabilitas)</List.Item>
                      <List.Item>Enterprise Resources Planning</List.Item>
                      <List.Item>Perancangan Sistem Informasi</List.Item>
                      <List.Item>Kewirausahaan</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text>Mata Kuliah Pilihan</Text>
                    <List type="ordered">
                      <List.Item>Manajemen kelangsungan bisnis</List.Item>
                      <List.Item>Human Resource Management System</List.Item>
                      <List.Item>Pengendalian Audit SI</List.Item>
                      <List.Item>Manajemen Kualitas Perangkat lunak</List.Item>
                      <List.Item>Manajemen Perubahan</List.Item>
                      <List.Item>Manajemen resiko dan kualitas TI</List.Item>
                      <List.Item>Evaluasi Audit SI</List.Item>
                      <List.Item>E-Business</List.Item>
                    </List>
                  </Box>
                </Stack> : activeTab === 'Consultant IT' ? <Stack>
                  <Box>
                    <Text>Mata Kuliah Wajib</Text>
                    <List type="ordered">
                      <List.Item>Sistem Basis Data</List.Item>
                      <List.Item>Algoritma & Struktur Data</List.Item>
                      <List.Item>Prak. Algoritma & Struktur Data</List.Item>
                      <List.Item>Perancangan Basis Data</List.Item>
                      <List.Item>Prak. Perancangan Basis Data</List.Item>
                      <List.Item>Statistik (Probabilitas)</List.Item>
                      <List.Item>Prak. Statistik (Probabilitas)</List.Item>
                      <List.Item>Data Mining</List.Item>
                      <List.Item>Prak. Data Mining</List.Item>
                      <List.Item>Konsep Sistem Informasi</List.Item>
                      <List.Item>Sistem Infomasi Manajemen</List.Item>
                      <List.Item>Dasar Akuntansi & Aplikasi</List.Item>
                      <List.Item>Prak. Aplikasi Akuntansi</List.Item>
                      <List.Item>Audit Sistem Informasi</List.Item>
                      <List.Item>Analisa Sistem Informasi</List.Item>
                      <List.Item>Perancangan Sistem Informasi</List.Item>
                      <List.Item>Manajemen Proses Bisnis</List.Item>
                      <List.Item>Enterprise Resources Planning</List.Item>
                      <List.Item>Pemrograman Berbasis Web</List.Item>
                      <List.Item>Prak. Pemrograman Berbasis Web</List.Item>
                      <List.Item>Rekayasa Perangkat Lunak</List.Item>
                      <List.Item>Pemrograman Berbasis Mobile</List.Item>
                      <List.Item>Prak. Pemograman Berbasis Mobile</List.Item>
                      <List.Item>Rekayasa Kebutuhan SI</List.Item>
                      <List.Item>Bisnis dan Manajemen</List.Item>
                      <List.Item>Manajemen Sains</List.Item>
                      <List.Item>Sistem Informasi Manufaktur</List.Item>
                      <List.Item>Tata Kelola SI</List.Item>
                      <List.Item>Manajemen Proyek SI</List.Item>
                      <List.Item>Etika Profesi TI</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text>Mata Kuliah Pilihan</Text>
                    <List type="ordered">
                      <List.Item>Database Spatial</List.Item>
                      <List.Item>Analisis spatial</List.Item>
                      <List.Item>Sistem Informasi Perbankan</List.Item>
                      <List.Item>Perencanaan Strategis TI</List.Item>
                      <List.Item>Sistem Informasi Geografis</List.Item>
                      <List.Item>E-Learning</List.Item>
                      <List.Item>Supply Chain Management</List.Item>
                      <List.Item>Sistem Informasi Akuntansi</List.Item>
                      <List.Item>Customer Relationship Management</List.Item>
                    </List>
                  </Box>
                </Stack> : activeTab === 'Software Engineer' ? <Stack>
                  <Box>
                    <Text>Mata Kuliah Wajib</Text>
                    <List type="ordered">
                      <List.Item>Algoritma & Struktur Data</List.Item>
                      <List.Item>Prak. Algoritma & Struktur Data</List.Item>
                      <List.Item>Rekayasa Perangkat Lunak</List.Item>
                      <List.Item>Data Mining</List.Item>
                      <List.Item>Prak. Data Mining</List.Item>
                      <List.Item>Sistem Basis Data</List.Item>
                      <List.Item>Pemrograman Berbasis Mobile</List.Item>
                      <List.Item>Prak. Pemograman Berbasis Mobile</List.Item>
                      <List.Item>Pemrograman Berbasis Web</List.Item>
                      <List.Item>Prak. Pemrograman Berbasis Web</List.Item>
                      <List.Item>Perancangan Basis Data</List.Item>
                      <List.Item>Prak. Perancangan Basis Data</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text>Mata Kuliah Pilihan</Text>
                    <List type="ordered">
                      <List.Item>Pemrograman Cerdas</List.Item>
                      <List.Item>Teknologi Basis Data</List.Item>
                      <List.Item>Teknologi Berbasis Mobile</List.Item>
                      <List.Item>Teknologi Web</List.Item>
                    </List>
                  </Box>
                </Stack> : activeTab === 'Data & Business Analyst' ? <Stack>
                  <Box>
                    <Text>Mata Kuliah Wajib</Text>
                    <List type="ordered">
                      <List.Item>Statistik (Probabilitas)</List.Item>
                      <List.Item>Prak. Statistik (Probabilitas)</List.Item>
                      <List.Item>Data Mining</List.Item>
                      <List.Item>Prak. Data Mining</List.Item>
                      <List.Item>Bisnis dan Manajemen</List.Item>
                      <List.Item>Konsep Sistem Informasi</List.Item>
                      <List.Item>Analisa Sistem Informasi</List.Item>
                      <List.Item>Manajemen Proses Bisnis</List.Item>
                      <List.Item>Manajemen Proyek SI</List.Item>
                      <List.Item>Interaksi Manusia dan komputer</List.Item>
                      <List.Item>Kewirausahaan</List.Item>
                      <List.Item>Logika dan Struktur Diskrit</List.Item>
                      <List.Item>Sistem Pendukung Keputusan</List.Item>
                      <List.Item>Matematika Sistem Informasi</List.Item>
                      <List.Item>Algoritma & Struktur Data</List.Item>
                      <List.Item>Pemrograman Berbasis Web</List.Item>
                      <List.Item>Prak. Pemrograman Berbasis Web</List.Item>
                      <List.Item>Prak. Algoritma & Struktur Data</List.Item>
                      <List.Item>Prak. Pemrograman Berbasis Objek</List.Item>
                      <List.Item>Pengantar Teknologi Informasi</List.Item>
                      <List.Item>Prak. Pengantar Teknologi Informasi</List.Item>
                      <List.Item>Pemograman berbasis visual (dotnet)</List.Item>
                      <List.Item>Prak. Pemograman Berbasis visual
                                 (dotnet)</List.Item>
                      <List.Item>Perancangan Sistem Informasi</List.Item>
                      <List.Item>Etika Profesi TI</List.Item>
                    </List>
                  </Box>
                  
                  <Box>
                    <Text>Mata Kuliah Pilihan</Text>
                    <List type="ordered">
                      <List.Item>Statistik Lanjut</List.Item>
                      <List.Item>Big Data</List.Item>
                      <List.Item>Bisnis Digital</List.Item>
                      <List.Item>Sistem Keputusan Berbasis Model</List.Item>
                      <List.Item>Machine Learning</List.Item>
                      <List.Item>Visualisasi Data</List.Item>
                      <List.Item>E-Commerce</List.Item>
                      <List.Item>E-Business</List.Item>
                    </List>
                  </Box>
                </Stack> : ''}
            </Box>
          </Stack>
        </>}
        </Stack>
      </Box>
    </AppLayout>
  )
}

export default Dashboard
