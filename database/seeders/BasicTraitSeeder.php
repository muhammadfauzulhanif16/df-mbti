<?php
  
  namespace Database\Seeders;
  
  use App\Models\BasicTrait;
  use Illuminate\Database\Seeder;
  
  class BasicTraitSeeder extends Seeder
  {
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $basicTraits = [
        'Introvert' => 'I',
        'Extrovert' => 'E',
        'Sensing' => 'S',
        'Intuition' => 'N',
        'Thinking' => 'T',
        'Feeling' => 'F',
        'Judging' => 'J',
        'Perceiving' => 'P'
      ];
      
      foreach ($basicTraits as $basicTrait => $code) {
        BasicTrait::create([
          'name' => $basicTrait,
          'code' => $code,
        ]);
      }
    }
  }
