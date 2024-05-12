<?php
  
  namespace App\Providers;
  
  use App\Listeners\UpdateUserOnlineStatus;
  use Illuminate\Auth\Events\Login;
  use Illuminate\Auth\Events\Logout;
  use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
  
  class EventServiceProvider extends ServiceProvider
  {
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
      Login::class => [
        UpdateUserOnlineStatus::class,
      ],
      Logout::class => [
        UpdateUserOnlineStatus::class,
      ],
    ];
    
    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot(): void
    {
      parent::boot();
    }
  }
