<?php
  
  namespace Database\Seeders;
  
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
      $mahasiswa = User::create([
        'nama' => 'Mahasiswa',
        'peran' => 'Mahasiswa',
        'email' => 'mahasiswa@mbti.id',
        'password' => bcrypt('mahasiswa'),
      ]);
      
      Student::create([
        'user_id' => $mahasiswa->id,
        'nim' => '0123456789',
        'tahun_ajaran' => '2020',
//        'dpa_id' => '-',
      ]);
    }
  }
