<?php
  
  namespace Database\Seeders;
  
  use App\Models\Choice;
  use Illuminate\Database\Seeder;
  
  class ChoiceSeeder extends Seeder
  {
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $choices = [
        'Tidak Sesuai' => 1,
        'Cukup Sesuai' => 2,
        'Sangat Sesuai' => 3,
      ];
      
      foreach ($choices as $choice => $value) {
        Choice::create([
          'name' => $choice,
          'value' => $value,
        ]);
      }
    }
  }
