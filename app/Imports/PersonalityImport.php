<?php
  
  namespace App\Imports;
  
  use App\Models\Personality;
  use Illuminate\Database\Eloquent\Model;
  use Maatwebsite\Excel\Concerns\Importable;
  use Maatwebsite\Excel\Concerns\ToModel;
  use Maatwebsite\Excel\Concerns\WithHeadingRow;
  use Maatwebsite\Excel\Concerns\WithProgressBar;
  
  class PersonalityImport implements ToModel, WithHeadingRow, WithProgressBar
  {
    use Importable;
    
    /**
     * @param array $row
     *
     * @return Model|null
     */
    public function model(array $row)
    {
      return new Personality([
        'name' => $row['nama_kepribadian'],
        'description' => $row['deskripsi_kepribadian'],
        'job' => $row['saran_pekerjaan'],
        'detail' => $row['rincian_pekerjaan'],
      ]);
    }
  }
