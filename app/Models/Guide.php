<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Concerns\HasUuids;
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class Guide extends Model
  {
    use HasFactory, HasUuids;
    
    protected $fillable = [
      'personality',
      'development',
      'job',
      'course'
    ];
  }
