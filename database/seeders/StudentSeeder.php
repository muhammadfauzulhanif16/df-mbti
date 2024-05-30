<?php
  
  namespace Database\Seeders;
  
  use App\Models\Lecturer;
  use App\Models\Student;
  use App\Models\User;
  use Illuminate\Database\Seeder;
  
  class StudentSeeder extends Seeder
  {
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $role = 'Mahasiswa';
      
      User::factory(16)->create()->each(function ($user) use ($role) {
        $user->role = $role;
        $user->save();
        Student::factory()->create([
          'user_id' => $user->id,
          'supervisor_id' => Lecturer::with('user')->inRandomOrder()->first()->user->id
        ]);
      });
    }
  }
