<?php
  
  namespace App\Imports;
  
  use App\Models\Lecturer;
  use App\Models\User;
  use Illuminate\Database\Eloquent\Model;
  use Maatwebsite\Excel\Concerns\ToModel;
  use Maatwebsite\Excel\Concerns\WithHeadingRow;
  
  class LecturersImport implements ToModel, WithHeadingRow
  {
    /**
     * @param array $row
     *
     * @return Model|null
     */
    public function model(array $row)
    {
      // Create a new User instance and save it
      $user = User::create([
        'full_name' => $row['nama_lengkap'],
        'id_number' => $row['nidn'],
        'phone_number' => $row['nomor_telepon'],
        'role' => $row['status'],
        'email' => $row['email'],
        'password' => $row['email'],
      ]);
      
      // Create a new Lecturer instance with the id of the newly created User
      Lecturer::create([
        'user_id' => $user->id,
        'academic_year' => $row['tahun_akademik'],
        // Add other necessary fields here
      ]);
      
      return $user;
    }
  }
