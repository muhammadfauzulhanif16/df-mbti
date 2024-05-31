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
      User::create([
        'full_name' => 'Admin',
        'role' => 'Admin',
        'email' => 'admin@mbti.id',
        'password' => Hash::make('admin@mbti.id'),
      ]);
//      
//      $this->call([
//        LecturerSeeder::class,
//        StudentSeeder::class,
//      ]);
    }
  }
