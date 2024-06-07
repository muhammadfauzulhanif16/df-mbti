<?php
  
  namespace Database\Seeders;
  
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
          'basic_trait' => 'Introvert',
          'statements' => [
            'Saya merasa lebih energik setelah menghabiskan waktu sendirian atau dengan sedikit orang yang saya kenal baik.', 'Saya lebih suka berpikir sebelum berbicara dalam diskusi kelompok.', 'Saya cenderung menghindari situasi sosial yang ramai atau bising.', 'Saya sering merenung atau memikirkan hal-hal yang telah terjadi di masa lalu.', 'Saya lebih suka bekerja sendiri daripada bekerja dalam tim.'
          ]
        ],
        'name' => 'Pemusatan perhatian',
        'basic_trait' => 'Introvert',
        'statements' => [
          'Saya merasa lebih energik setelah menghabiskan waktu sendirian atau dengan sedikit orang yang saya kenal baik.', 'Saya lebih suka berpikir sebelum berbicara dalam diskusi kelompok.', 'Saya cenderung menghindari situasi sosial yang ramai atau bising.', 'Saya sering merenung atau memikirkan hal-hal yang telah terjadi di masa lalu.', 'Saya lebih suka bekerja sendiri daripada bekerja dalam tim.'
        ]
      ];


//      foreach ($indicators as $indicator) {
//        Indicator::create([
//          'name' => $indicator,
//        ]);
//      }
    }
  }
