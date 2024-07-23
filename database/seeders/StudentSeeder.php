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
//        dd(substr($user->id_number, 0, 4));
        $user->role = $role;
        $user->save();
        Student::factory()->create([
          'user_id' => $user->id,
          'academic_year' => substr($user->id_number, 0, 4),
          'supervisor_id' => Lecturer::with('user')->inRandomOrder()->first()->user->id
        ]);
      });
    }
  }
