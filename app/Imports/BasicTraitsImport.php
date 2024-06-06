<?php

namespace App\Imports;

use App\Models\BasicTrait;
use Maatwebsite\Excel\Concerns\ToModel;

class BasicTraitsImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new BasicTrait([
            //
        ]);
    }
}
