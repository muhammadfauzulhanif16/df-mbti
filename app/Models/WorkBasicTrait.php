<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class WorkBasicTrait extends Model
  {
    use HasFactory;
    
    public $timestamps = false;
    
    protected $fillable = [
      'work_id',
      'basic_trait_id',
      'order',
      'min_value',
      'max_value',
    ];
    
    public function work()
    {
      return $this->belongsTo(Work::class);
    }
    
    public function basicTrait()
    {
      return $this->belongsTo(BasicTrait::class);
    }
  }
