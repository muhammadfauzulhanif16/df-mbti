<?php
  
  namespace App\Imports;
  
  use App\Models\BasicTrait;
  use App\Models\Indicator;
  use App\Models\Statement;
  use Illuminate\Database\Eloquent\Model;
  use Maatwebsite\Excel\Concerns\Importable;
  use Maatwebsite\Excel\Concerns\ToModel;
  use Maatwebsite\Excel\Concerns\WithHeadingRow;
  use Maatwebsite\Excel\Concerns\WithProgressBar;
  
  class IndicatorsImport implements ToModel, WithHeadingRow, WithProgressBar
  {
    use Importable;
    
    /**
     * @param array $row
     *
     * @return Model|null
     */
    public function model(array $row)
    {
      // Query the database once and store the results in arrays
      $traits = BasicTrait::pluck('name')->toArray();
      $indicators = Indicator::pluck('name')->toArray();
      
      if (!in_array($row['kategori_soal'], $traits)) {
        BasicTrait::create([
          'name' => $row['kategori_soal'],
          'code' => substr($row['kategori_soal'], 0, 3),
        ]);
      }
      
      if (!in_array($row['nama_soal'], $indicators)) {
        Indicator::create([
          'name' => $row['nama_soal'],
        ]);
      }
      
      return Statement::create([
        'basic_trait_id' => BasicTrait::where('name', $row['kategori_soal'])->first()->id,
        'indicator_id' => Indicator::where('name', $row['nama_soal'])->first()->id,
        'name' => $row['pertanyaan'],
      ]);
    }
  }
