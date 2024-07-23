<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Concerns\HasUuids;
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class Test extends Model
  {
    use HasFactory, HasUuids;
    
    protected $fillable = ['user_id', 'time', 'work_id', 'personality'];
    
    public function answers()
    {
      return $this->hasMany(Answer::class);
    }
    
    public function student()
    {
      return $this->belongsTo(Student::class, 'user_id', 'user_id');
    }
    
    public function work()
    {
      return $this->belongsTo(Work::class);
    }
  }
 
