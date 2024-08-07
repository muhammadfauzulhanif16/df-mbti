<?php
  
  namespace App\Imports;
  
  use App\Models\Student;
  use App\Models\User;
  use Illuminate\Database\Eloquent\Model;
  use Maatwebsite\Excel\Concerns\Importable;
  use Maatwebsite\Excel\Concerns\ToModel;
  use Maatwebsite\Excel\Concerns\WithHeadingRow;
  use Maatwebsite\Excel\Concerns\WithProgressBar;
  
  class StudentsImport implements ToModel, WithHeadingRow, WithProgressBar
  {
    use Importable;
    
    /**
     * @param array $row
     *
     * @return Model|null
     */
    public function model(array $row)
    {
      $user = User::create([
        'full_name' => $row['nama_lengkap'],
        'id_number' => $row['nim'],
        'phone_number' => $row['nomor_telepon'],
        'role' => 'Mahasiswa',
        'email' => $row['email'],
        'password' => $row['nim'],
      ]);
      
      Student::create([
        'user_id' => $user->id,
        'academic_year' => $row['tahun_angkatan'],
        'supervisor_id' => User::where('full_name', 'like', '%' . $row['dosen_pembimbing_akademik'] . '%')->first()->id ?? null,
      ]);
      
      return $user;
    }
  }
