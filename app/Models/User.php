<?php
  
  namespace App\Models;
  
  // use Illuminate\Contracts\Auth\MustVerifyEmail;
  use Illuminate\Database\Eloquent\Concerns\HasUuids;
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Foundation\Auth\User as Authenticatable;
  use Illuminate\Notifications\Notifiable;
  use Illuminate\Support\Carbon;
  
  class User extends Authenticatable
  {
    use HasFactory, Notifiable, HasUuids;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
      'full_name',
      'id_number',
      'avatar',
      'phone_number',
      'role',
      'email',
      'password',
      'is_actived',
    ];
    
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
      'password',
      'remember_token',
    ];
    
    public function student()
    {
      return $this->hasOne(Student::class);
    }
    
    public function lecturer()
    {
      return $this->hasOne(Lecturer::class);
    }
    
    public function getCreatedAtAttribute($value)
    {
      return Carbon::parse($value)->format('d-m-Y H:i:s');
    }
    
    public function getUpdatedAtAttribute($value)
    {
      return Carbon::parse($value)->format('d-m-Y H:i:s');
    }
    
    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
      return [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
      ];
    }
  }
