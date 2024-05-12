<?php
  
  namespace App\Http\Middleware;
  
  use Closure;
  use Illuminate\Http\Request;
  use Symfony\Component\HttpFoundation\Response;
  
  class UpdateLastSeenAtMiddleware
  {
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
      $response = $next($request);
      
      if ($request->user()) {
        $request->user()->update(['last_seen_at' => now()]);
      }
      
      return $response;
    }
  }
