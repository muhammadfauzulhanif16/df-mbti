<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Concerns\HasUuids;
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class Work extends Model
  {
    use HasFactory, HasUuids;
    
    protected $fillable = [
      'name',
      'detail',
      'personality',
      'course',
    ];
    
    public function basicTraits()
    {
      return $this->hasMany(WorkBasicTrait::class);
    }
  }
