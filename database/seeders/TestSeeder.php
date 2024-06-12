<?php
  
  namespace Database\Seeders;
  
  use App\Models\Personality;
  use App\Models\Student;
  use App\Models\Test;
  use Illuminate\Database\Seeder;
  
  class TestSeeder extends Seeder
  {
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $personalityNames = Personality::all()->pluck('name');
      $studentIds = Student::all()->pluck('user_id');
      
      for ($i = 0; $i < 16; $i++) {
        Test::create([
          'user_id' => $studentIds->random(),
          'personality' => $personalityNames->random(),
          'time' => now(),
        ]);
      }
    }
  }
