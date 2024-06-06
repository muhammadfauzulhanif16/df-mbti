<?php
  
  namespace Database\Seeders;
  
  use App\Models\Indicator;
  use Illuminate\Database\Seeder;
  
  class IndicatorSeeder extends Seeder
  {
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $indicators = ['Pemusatan perhatian', 'Memahami informasi dari luar', 'Menarik kesimpulan & keputusan', 'Pola hidup'];
      
      foreach ($indicators as $indicator) {
        Indicator::create([
          'name' => $indicator,
        ]);
      }
    }
  }
