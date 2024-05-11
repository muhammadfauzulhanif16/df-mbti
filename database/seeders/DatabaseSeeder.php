<?php
  
  namespace Database\Seeders;
  
  use App\Models\User;
  use Illuminate\Database\Seeder;
  use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
  
  class DatabaseSeeder extends Seeder
  {
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
      foreach (['Admin', 'Dosen', 'Mahasiswa'] as $role) {
        User::create([
          'name' => $role,
          'email' => strtolower($role) . '@mbti.id',
          'password' => Hash::make(strtolower($role)),
        ]);
      }
    }
  }
