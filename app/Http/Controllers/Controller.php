<?php
  
  namespace App\Http\Controllers;
  
  use Illuminate\Database\Eloquent\Concerns\HasUuids;
  
  abstract class Controller
  {
    use HasUuids;
  }
