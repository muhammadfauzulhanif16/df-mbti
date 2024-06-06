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
      $roles = ['Kepala Program Studi', 'Dosen PA'];
      
      User::factory(16)->create()->each(function ($user) use ($roles) {
        $user->role = fake()->randomElement($roles);
        $user->save();
        Lecturer::factory()->create(['user_id' => $user->id]);
      });
    }
  }
