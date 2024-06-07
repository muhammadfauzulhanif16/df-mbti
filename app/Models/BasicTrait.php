<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Concerns\HasUuids;
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Support\Carbon;
  
  class BasicTrait extends Model
  {
    use HasFactory, HasUuids;
    
    protected $fillable = ['name', 'code'];
    
    public function getCreatedAtAttribute($value)
    {
      return Carbon::parse($value)->format('d-m-Y H:i:s');
    }
    
    public function getUpdatedAtAttribute($value)
    {
      return Carbon::parse($value)->format('d-m-Y H:i:s');
    }

    public function statements()
    {
      return $this->hasMany(Statement::class);
    }
  }
