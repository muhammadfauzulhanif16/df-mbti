<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Concerns\HasUuids;
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class Test extends Model
  {
    use HasFactory, HasUuids;
    
    protected $fillable = ['user_id', 'time'];
    
    public function answers()
    {
      return $this->hasMany(Answer::class);
    }
    
    public function user()
    {
      return $this->belongsTo(User::class);
    }
  }
 
