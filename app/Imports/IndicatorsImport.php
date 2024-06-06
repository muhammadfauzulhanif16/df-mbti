<?php
  
  namespace App\Imports;
  
  use App\Models\Indicator;
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
      return new Indicator([
        'name' => $row['nama'],
      ]);
    }
  }
