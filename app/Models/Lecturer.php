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
      'national_lecturer_id_number',
    ];
    
    public function user()
    {
      return $this->belongsTo(User::class);
    }
    
    public function students()
    {
      return $this->hasMany(Student::class, 'supervisor_id');
    }
  }
