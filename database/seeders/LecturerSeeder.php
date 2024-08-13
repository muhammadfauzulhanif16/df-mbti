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
      
      // Create one user with the role 'Kepala Program Studi'
      $user = User::factory()->create(['role' => $roles[0], 'is_actived' => true,]);
      Lecturer::factory()->create(['user_id' => $user->id]);
      
      // Create the rest of the users with the role 'Dosen PA'
      User::factory(random_int(1, 159))->create(['role' => $roles[1]])->each(function ($user) {
        Lecturer::factory()->create(['user_id' => $user->id]);
      });
    }
  }
