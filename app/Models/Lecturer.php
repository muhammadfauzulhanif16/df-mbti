<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class Lecturer extends Model
  {
    use HasFactory;
    
    public $timestamps = false;
    
    protected $fillable = [
      'user_id',
      'nidn',
      'tahun_ajaran',
    ];
    
    public function user()
    {
      return $this->belongsTo(User::class);
    }
  }
