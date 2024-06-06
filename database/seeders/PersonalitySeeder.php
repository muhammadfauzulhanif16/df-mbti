<?php
  
  namespace Database\Seeders;
  
  use App\Models\BasicTrait;
  use App\Models\Personality;
  use Illuminate\Database\Seeder;
  
  class PersonalitySeeder extends Seeder
  {
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $basicTraits = BasicTrait::all()->pluck('code')->toArray();
      
      $traitsArray = array_chunk($basicTraits, 2);
      
      $combinations = [];
      
      foreach ($traitsArray[0] as $trait1) {
        foreach ($traitsArray[1] as $trait2) {
          foreach ($traitsArray[2] as $trait3) {
            foreach ($traitsArray[3] as $trait4) {
              $combinations[] = $trait1 . $trait2 . $trait3 . $trait4;
            }
          }
        }
      }
      
      foreach ($combinations as $combination) {
        Personality::create([
          'name' => $combination,
          'description' => 'Deskripsi ' . $combination,
          'job' => 'Pekerjaan ' . $combination,
          'detail' => 'Detail ' . $combination,
        ]);
      }
    }
  }
