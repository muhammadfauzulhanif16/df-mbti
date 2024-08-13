<?php
  
  namespace App\Imports;
  
  use App\Models\Lecturer;
  use App\Models\User;
  use Illuminate\Database\Eloquent\Model;
  use Maatwebsite\Excel\Concerns\Importable;
  use Maatwebsite\Excel\Concerns\ToModel;
  use Maatwebsite\Excel\Concerns\WithHeadingRow;
  use Maatwebsite\Excel\Concerns\WithProgressBar;
  
  class LecturersImport implements ToModel, WithHeadingRow, WithProgressBar
  {
    use Importable;
    
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
        'role' => 'Dosen PA',
        'email' => $row['email'],
        'password' => $row['nidn'],
        'is_actived' => true,
      ]);
      
      Lecturer::create([
        'user_id' => $user->id,
      ]);
      
      return $user;
    }
  }
