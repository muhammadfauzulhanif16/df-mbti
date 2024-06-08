<?php
  
  namespace App\Models;
  
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Model;
  
  class Answer extends Model
  {
    use HasFactory;
    
    public $incrementing = false;
    
    protected $fillable = ['test_id', 'statement_id', 'choice_id'];
    
    public function statement()
    {
      return $this->belongsTo(Statement::class);
    }
    
    public function choice()
    {
      return $this->belongsTo(Choice::class);
    }
  }
