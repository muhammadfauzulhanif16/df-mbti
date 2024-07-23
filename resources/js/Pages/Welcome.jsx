import {
  Anchor,
  Center,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import React from 'react'
import { router } from '@inertiajs/core'
import { IconMail, IconMapPin, IconPhoneCall } from '@tabler/icons-react'

const Epersona = '/epersona.jpg'
const Unsada = '/unsada.png'
const MBTI = 'tipe_kepribadian_tes_mbti.jpg'

const Welcome = () => {
  return (
    <AppLayout title="Halaman Utama">
      <SimpleGrid cols={3} spacing={0} pos="sticky" top={0} bg="white" h={80}
                  px={16}
                  align="center"
                  justify="center" style={{
        borderBottom: '1px solid #e1e1e1',
      }}>
        <Group>
          <Image h={48} w={48} src={Epersona} />
        </Group>
        
        <Center>
          <Title>E-Persona</Title>
        </Center>
        
        <Group justify="end" h="100%">
          <Anchor fz={14} fw={500} href="#dimensi">
            Dimensi Kepribadian
          </Anchor>
          
          <Anchor fz={14} fw={500} href="#tipe">
            Tipe Kepribadian
          </Anchor>
          
          <Anchor fz={14} fw={500} onClick={() => router.get(route('login'))}>
            Masuk Akun
          </Anchor>
        </Group>
      </SimpleGrid>
      
      <Stack align="center" gap={8} py={32} mx={64} style={{
        borderBottom: '1px solid #e1e1e1',
      }}>
        <Title fz={26}>Selamat Datang di</Title>
        <Title fz={26}>Tes Krepribadian Myers Briggs Type Indicator</Title>
        <Title fz={26}>Program Studi Sistem Informasi</Title>
        <Title fz={26}>Universitas Darma Persada</Title>
      </Stack>
      
      <Stack align="center" py={32} mx={64} style={{
        borderBottom: '1px solid #e1e1e1',
      }}>
        <Title fz={26}>Tes Kepribadian MBTI : Kenali Dirimu!</Title>
        <Text>Tes Kepribadian MBTI ini bertujuan untuk menemukan diri anda dalam
              16 tipe kepribadian MBTI serta saran pekerjaan lulusan prodi
              sistem
              informasi yang sesuai dari masing-masing tipe kepribadian MBTI.
        </Text>
      </Stack>
      
      <Stack py={32} align="center" id="dimensi">
        <Image src={MBTI} w={320} />
        
        <Title fz={26}>Dalam Tes Kepribadian MBTI ini, Ada 4 Dimensi
                       Kecenderungan
                       Kepribadian</Title>
        <Text>Pahami tentang kecenderungan kepribadian anda</Text>
      </Stack>
      
      <Stack p={32} mx={64} style={{
        borderBottom: '1px solid #e1e1e1',
      }}>
        <List type="ordered">
          <List.Item>
            <Title fz={20}>Dimensi Pemusatan Perhatian : Extrovert (I) Vs.
                           Introvert
                           (E)
            </Title>
            
            <Text>Dimensi ini mengukur bagaimana kita berinteraksi dengan dunia
                  dan dimana kita menyalurkan energi kita.</Text>
            
            <List type="unordered">
              <List.Item>
                <Title fz={16}>Extrovert</Title>
                <Text>adalah suatu pola kecenderungan yang mengambil energi dari
                      lingkungan luar (orang lain) atau mengarahkan
                      kepribadiannya keluar daripada
                      ke dalam dirinya. Seorang dengan dimensi extrovert
                      merupakan orang menyenangi dunia luar, mereka memiliki
                      sifat sosial yang tinggi, suka berinteraksi dan berfokus
                      pada action oriented atau lebih banyak berbuat daripada
                      berkontemplasi (merenung dan berpikir) dengan begitu
                      .</Text>
              </List.Item>
              
              <List.Item>
                <Title fz={16}>Introvert</Title>
                <Text>adalah suatu orientasi ke dalam dirinya sendiri (menyukai
                      dunia dalam), minat dan perhatiannya lebih terfokus pada
                      pikiran dan pengalaman dirinya.
                      Secara singkat tipe
                      introvert adalah seseorang yang cenderung tertutup dan
                      menarik dirinya dari interaksi sosial, mereka senang
                      menyendiri, merenung, membaca dan menulis. Umumnya mereka
                      adalah pencetus gagasan yang baik, fokus, penuh
                      konsentrasi dan mampu bekerja sendiri.
                </Text>
              </List.Item>
            </List>
          </List.Item>
          
          <List.Item>
            <Title fz={20}>Dimensi Memahami Informasi Dari Luar : Sensing (S)
                           Vs. Intuitive (N)</Title>
            
            <Text>Dimensi ini membahas tentang jenis informasi yang kita
                  tangkap.</Text>
            
            <List type="unordered">
              <List.Item>
                <Title fz={16}>Sensing</Title>
                <Text>adalah suatu pola kecenderungan yang memperoses data dan
                      menilai sesuatu berdasarkan fakta yang jelas, praktis,
                      realistis dan memandang
                      serta menilai data dengan apa adanya. Seorang yang
                      memiliki fungsi sensing atau pengindera ini umumnya
                      berpedoman pada pengalaman serta menggunakan data - data
                      yang telah terbukti kebenarannya. Mereka percaya,
                      menghargai dan fokus pada masa sekarang yaitu konsen pada
                      apa
                      yang bisa diperbaiki sekarang juga.</Text>
              </List.Item>
              
              <List.Item>
                <Title fz={16}>Intuitive</Title>
                <Text>adalah fungsi yang memproses data dengan menggunakan sudut
                      pandang pola dan hubungan, umumnya mempunyai suatu
                      pemikiran yang abstrak, terkonsep, serta melihat berbagai
                      kemungkinan dan peluang yang nantinya terjadi. Kebalikan
                      dari fungsi sensing yang berfokus pada masa sekarang,
                      orang dengan fungsi intuitive justru berfokus pada masa
                      depan (future oriented) yang artinya apa yang dapat
                      dicapai di masa mendatang, mereka berimajinasi dan memilih
                      menggunakan cara mereka sendiri. Orang dengan dimensi
                      intuitif cenderung membicarakan
                </Text>
              </List.Item>
            </List>
          </List.Item>
          
          <List.Item>
            <Title fz={20}>Dimensi Memahami Informasi Dari Luar : Sensing (S)
                           Vs. Intuitive (N)</Title>
            
            <Text>Dimensi ini membahas tentang jenis informasi yang kita
                  tangkap.</Text>
            
            <List type="unordered">
              <List.Item>
                <Title fz={16}>Sensing</Title>
                <Text>adalah suatu pola kecenderungan yang memperoses data dan
                      menilai sesuatu berdasarkan fakta yang jelas, praktis,
                      realistis dan memandang
                      serta menilai data dengan apa adanya. Seorang yang
                      memiliki fungsi sensing atau pengindera ini umumnya
                      berpedoman pada pengalaman serta menggunakan data - data
                      yang telah terbukti kebenarannya. Mereka percaya,
                      menghargai dan fokus pada masa sekarang yaitu konsen pada
                      apa
                      yang bisa diperbaiki sekarang juga.</Text>
              </List.Item>
              
              <List.Item>
                <Title fz={16}>Intuitive</Title>
                <Text>adalah fungsi yang memproses data dengan menggunakan sudut
                      pandang pola dan hubungan, umumnya mempunyai suatu
                      pemikiran yang abstrak, terkonsep, serta melihat berbagai
                      kemungkinan dan peluang yang nantinya terjadi. Kebalikan
                      dari fungsi sensing yang berfokus pada masa sekarang,
                      orang dengan fungsi intuitive justru berfokus pada masa
                      depan (future oriented) yang artinya apa yang dapat
                      dicapai di masa mendatang, mereka berimajinasi dan memilih
                      menggunakan cara mereka sendiri. Orang dengan dimensi
                      intuitif cenderung membicarakan
                </Text>
              </List.Item>
            </List>
          </List.Item>
          
          <List.Item>
            <Title fz={20}>Dimensi Pola Hidup : Judging (J) Vs. Perceiving
                           (P)</Title>
            
            <Text>Dimensi ini menjelaskan tentang bagaimana pola hidup
                  seseorang, entah hidup yang terstruktur atau spontan.</Text>
            
            <List type="unordered">
              <List.Item>
                <Title fz={16}>Judging</Title>
                <Text>adalah fungsi kepribadian seseorang yang bersandar pada
                      perencanaan yang terstruktur atau sistematis, rapi, tegas
                      dan bertanggung jawab
                      tinggi. Mereka menjalani kehidupan dan bertindak sesuai
                      dengan rencana yang telah dibuatnya. Mempunyai rencana
                      jelas dan pendirian yang
                      kuat, mereka fokus pada sasaran dan senang apabila segala
                      sesuatunya berjalan lancar dan selesai tepat waktu sesuai
                      dengan rencana yang
                      telah dibuatnya</Text>
              </List.Item>
              
              <List.Item>
                <Title fz={16}>Perceiving</Title>
                <Text>adalah seseorang yang bersifat terbuka dan mudah
                      menyesuaikan diri, mereka sangat mengerti akan orang lain
                      dan mempunyai semangat ingin
                      tahu yang tinggi. Seorang dengan fungsi perceiving ini
                      memiliki spontanitas yang tidak terduga, sangat toleran
                      dan selalu optimis, mereka selalu berusaha untuk menemukan
                      keinginannya dalam berbagai situasi sehingga menjadikan
                      prestasi sebagai prioritas dalam hidupnya.
                
                </Text>
              </List.Item>
            </List>
          </List.Item>
        </List>
      </Stack>
      
      <Stack p={32} align="center" id="tipe">
        <Title fz={26}>Tipe Kepribadian MBTI</Title>
        
        <Text>Berdasarkan keempat dimensi kecenderungan kepribadian tersebut,
              oleh Myers Briggs Type Indicator dilakukan pengkombinasian dan
              pengklasifkasian sehingga menghasilkan 16 kelompok tipe
              kepribadian manusia.
        </Text>
        
        <List type="ordered">
          <List.Item>ESTJ: Extrovert, Sensing, Thinking, Judging</List.Item>
          <List.Item>ESTP: Extrovert, Sensing, Thinking, Perceiving</List.Item>
          <List.Item>ESFJ: Extrovert, Sensing, Feeling, Judging</List.Item>
          <List.Item>ESFP: Extrovert, Sensing, Feeling, Perceiving</List.Item>
          <List.Item>ENTJ: Extrovert, Intuitive, Thinking, Judging</List.Item>
          <List.Item>ENTP: Extrovert, Intuitive, Thinking,
                     Perceiving</List.Item>
          <List.Item>ENFJ: Extrovert, Intuitive, Feeling, Judging</List.Item>
          <List.Item>ENFP: Extrovert, Intuitive, Feeling, Perceiving</List.Item>
          <List.Item>ISTJ: Introvert, Sensing, Thinking, Judging</List.Item>
          <List.Item>ISTP: Introvert, Sensing, Thinking, Perceiving</List.Item>
          <List.Item>ISFJ: Introvert, Sensing, Feeling, Judging</List.Item>
          <List.Item>ISFP: Introvert, Sensing, Feeling, Perceiving</List.Item>
          <List.Item>INTJ: Introvert, Intuitive, Thinking, Judging</List.Item>
          <List.Item>INTP: Introvert, Intuitive, Thinking,
                     Perceiving</List.Item>
          <List.Item>INFJ: Introvert, Intuitive, Feeling, Judging</List.Item>
          <List.Item>INFP: Introvert, Intuitive, Feeling, Perceiving</List.Item>
        </List>
      </Stack>
      
      <Group p={32} bg="blue.1">
        <Image src={Unsada} w={160} />
        
        <Stack>
          <Group>
            <IconPhoneCall />
            
            <Text>021 8649058</Text>
          </Group>
          
          <Group>
            <IconMail />
            
            <Text>humas@unsada.ac.id</Text>
          </Group>
          
          <Group>
            <IconMapPin />
            
            <Text>Jl. Taman Malaka Selatan Pondok Kelapa - Jakarta Timur
                  13450</Text>
          </Group>
        </Stack>
      </Group>
    </AppLayout>
  )
}

export default Welcome
