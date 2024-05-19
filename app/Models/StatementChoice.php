<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class StatementChoice extends Model
  {
    use HasFactory;
    
    public $incrementing = false;
    
    public $timestamps = false;
    
    protected $fillable = [
      'statement_id',
      'choice_id',
    ];
  }
