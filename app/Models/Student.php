<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class Student extends Model
  {
    use HasFactory;
    
    public $timestamps = false;
    
    protected $fillable = [
      'user_id',
      'student_id_number',
      'academic_year',
      'supervisor_id',
    ];
    
    public function user()
    {
      return $this->belongsTo(User::class);
    }
    
    public function tests()
    {
      return $this->hasMany(Test::class, 'user_id', 'user_id');
    }
    
    public function supervisor()
    {
      return $this->belongsTo(Lecturer::class, 'supervisor_id', 'user_id');
    }
  }
