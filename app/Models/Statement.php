<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Concerns\HasUuids;
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class Statement extends Model
  {
    use HasFactory, HasUuids;
    
    protected $fillable = ['name',
      'indicator_id', 'basic_trait_id'];
    
    public function basicTrait()
    {
      return $this->belongsTo(BasicTrait::class);
    }
    
    public function indicator()
    {
      return $this->belongsTo(Indicator::class);
    }
  }
