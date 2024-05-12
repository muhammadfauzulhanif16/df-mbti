<?php
  
  namespace App\Listeners;
  
  class UpdateUserOnlineStatus
  {
    /**
     * Create the event listener.
     */
    public function __construct()
    {
      //
    }
    
    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
      $event->user->update(['last_seen_at' => now()]);
    }
  }
