<?php
  
  namespace Database\Seeders;
  
  use App\Models\BasicTrait;
  use App\Models\Indicator;
  use App\Models\Statement;
  use Illuminate\Database\Seeder;
  
  class IndicatorSeeder extends Seeder
  {
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
//      $indicators = ['Pemusatan perhatian', 'Memahami informasi dari luar', 'Menarik kesimpulan & keputusan', 'Pola hidup'];
      
      $indicators = [
        [
          'name' => 'Pemusatan perhatian',
          'basic_traits' => [
            [
              'name' => 'Introvert',
              'statements' => [
                'Saya merasa lebih energik setelah menghabiskan waktu sendirian atau dengan sedikit orang yang saya kenal baik.', 'Saya lebih suka berpikir sebelum berbicara dalam diskusi kelompok.', 'Saya cenderung menghindari situasi sosial yang ramai atau bising.', 'Saya sering merenung atau memikirkan hal-hal yang telah terjadi di masa lalu.', 'Saya lebih suka bekerja sendiri daripada bekerja dalam tim.'
              ],
            ],
            [
              'name' => 'Extrovert',
              'statements' => [
                'Saya merasa lebih energik setelah berinteraksi dengan banyak orang.', 'Saya suka memulai percakapan dengan orang baru.', 'Saya lebih suka bekerja dalam tim daripada bekerja sendirian.', 'Saya menikmati menjadi pusat perhatian dalam suatu acara sosial.', 'Saya merasa nyaman dan senang berada di lingkungan yang ramai dan bising.'
              ]
            ]
          ],
        ],
        [
          'name' => 'Memahami informasi dari luar',
          'basic_traits' => [
            [
              'name' => 'Sensing',
              'statements' => [
                'Saya lebih suka informasi yang konkret dan terperinci daripada ide-ide abstrak.', 'Saya cenderung fokus pada apa yang terjadi saat ini daripada memikirkan masa depan.', 'Saya lebih suka mempelajari hal-hal melalui pengalaman langsung daripada teori.', 'Saya merasa nyaman dengan rutinitas dan prosedur yang sudah teruji.', 'Saya lebih tertarik pada fakta dan detail daripada konsep dan kemungkinan.'
              ],
            ],
            [
              'name' => 'Intuition',
              'statements' => [
                'Saya sering memikirkan kemungkinan dan skenario masa depan.', 'Saya lebih tertarik pada ide-ide besar dan pola daripada detail spesifik.', 'Saya sering menggunakan imajinasi saya untuk memikirkan solusi kreatif.', 'Saya cenderung fokus pada gambaran besar daripada hal-hal kecil dan rinci.', 'Saya sering merasa bosan dengan rutinitas dan mencari cara-cara baru untuk melakukan sesuatu.'
              ]
            ]
          ],
        ],
        [
          'name' => 'Menarik kesimpulan & keputusan',
          'basic_traits' => [
            [
              'name' => 'Thinking',
              'statements' => [
                'Saya cenderung membuat keputusan berdasarkan logika dan analisis objektif.', 'Saya lebih memperhatikan keadilan dan kejujuran dalam menilai situasi.', 'Saya merasa nyaman memberikan kritik konstruktif kepada orang lain.', 'Saya lebih fokus pada tugas dan tujuan daripada hubungan interpersonal.', 'Saya lebih menghargai efisiensi dan efektivitas dalam menyelesaikan pekerjaan.'
              ],
            ],
            [
              'name' => 'Feeling',
              'statements' => [
                'Saya cenderung membuat keputusan berdasarkan perasaan dan nilai-nilai pribadi.', 'Saya lebih memperhatikan dampak emosional dari keputusan saya terhadap orang lain.', 'Saya cenderung menghindari konflik dan mencari harmoni dalam hubungan interpersonal.', 'Saya merasa senang membantu dan mendukung orang lain dalam kehidupan sehari-hari.', 'Saya lebih menghargai kerjasama dan empati dalam bekerja dengan orang lain.'
              ]
            ]
          ],
        ],
        [
          'name' => 'Pola hidup',
          'basic_traits' => [
            [
              'name' => 'Judging',
              'statements' => [
                'Saya lebih suka memiliki rencana dan jadwal yang jelas dalam menjalani aktivitas sehari-hari.', 'Saya merasa nyaman dengan membuat keputusan dan mengikuti mereka sampai selesai.', 'Saya cenderung menyelesaikan tugas-tugas lebih awal daripada menunda-nunda.', 'Saya lebih suka lingkungan yang teratur dan terstruktur.', 'Saya merasa cemas jika sesuatu terjadi di luar rencana saya.'
              ],
            ],
            [
              'name' => 'Perceiving',
              'statements' => [
                'Saya lebih suka fleksibilitas dan spontanitas dalam menjalani aktivitas sehari-hari.', 'Saya merasa nyaman dengan menunda keputusan sampai semua informasi tersedia.', 'Saya cenderung menunda-nunda tugas sampai mendekati tenggat waktu.', 'Saya lebih suka lingkungan yang dinamis dan berubah-ubah.', 'Saya merasa senang mengeksplorasi opsi dan kemungkinan sebelum membuat keputusan final.'
              ]
            ]
          ],
        ],
      ];
      
      foreach ($indicators as $indicator) {
        $indicatorModel = Indicator::create([
          'name' => $indicator['name'],
        ]);
        
        foreach ($indicator['basic_traits'] as $basicTrait) {
          foreach ($basicTrait['statements'] as $statement) {
            Statement::create([
              'name' => $statement,
              'basic_trait_id' => BasicTrait::where('name', $basicTrait['name'])->first()->id,
              'indicator_id' => $indicatorModel->id,
            ]);
          }
        }
      }
    }
  }
