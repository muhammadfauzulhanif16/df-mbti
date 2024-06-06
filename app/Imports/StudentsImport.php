<?php
  
  namespace App\Imports;
  
  use App\Models\Student;
  use App\Models\User;
  use Illuminate\Database\Eloquent\Model;
  use Maatwebsite\Excel\Concerns\ToModel;
  use Maatwebsite\Excel\Concerns\WithHeadingRow;
  
  class StudentsImport implements ToModel, WithHeadingRow
  {
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
        'academic_year' => $row['tahun_ajaran'],
        'supervisor_id' => User::where('full_name', $row['dosen_pembimbing_akademik'])->first()->id,
      ]);
      
      return $user;
    }
  }
