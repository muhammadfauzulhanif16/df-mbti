<?php
  
  namespace Database\Seeders;
  
  use App\Models\Lecturer;
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
      $user = User::create([
        'full_name' => 'Eka Yuni Astuty, S.Kom.,M.MSI',
        'id_number' => '0301067502',
        'phone_number' => '087875484975',
        'role' => 'Admin',
        'email' => 'eka.y.astuty@gmail.com',
        'password' => Hash::make('0301067502'),
        'is_actived' => true,
      ]);
      
      Lecturer::create([
        'user_id' => $user->id,
      ]);
      
      if (env('WITH_FAKER')) {
        $this->call([
          LecturerSeeder::class,
          StudentSeeder::class,
          BasicTraitSeeder::class,
          PersonalitySeeder::class,
          IndicatorSeeder::class,
          ChoiceSeeder::class,
//          TestSeeder::class,
        ]);
      }
    }
  }
