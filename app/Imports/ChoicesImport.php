<?php

namespace App\Imports;

use App\Models\Choice;
use Maatwebsite\Excel\Concerns\ToModel;

class ChoicesImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Choice([
            //
        ]);
    }
}
