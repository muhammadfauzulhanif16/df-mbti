<?php
  
  namespace Database\Seeders;
  
  use App\Models\Lecturer;
  use App\Models\User;
  use Illuminate\Database\Seeder;
  
  class LecturerSeeder extends Seeder
  {
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $dosen = User::create([
        'nama' => 'Dosen',
        'peran' => 'Dosen',
        'email' => 'dosen@mbti.id',
        'password' => bcrypt('dosen'),
      ]);
      
      Lecturer::create([
        'user_id' => $dosen->id,
        'nidn' => '1234567890',
        'tahun_ajaran' => '2020',
      ]);
    }
  }
