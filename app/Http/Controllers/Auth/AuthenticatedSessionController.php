<?php
  
  namespace App\Http\Controllers\Auth;
  
  use App\Http\Controllers\Controller;
  use App\Http\Requests\Auth\LoginRequest;
  use Exception;
  use Illuminate\Http\RedirectResponse;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;
  use Inertia\Response;
  
  class AuthenticatedSessionController extends Controller
  {
    /**
     * Display the login view.
     */
    public function create(): Response
    {
      return Inertia::render('Auth/Login', [
        'canResetPassword' => Route::has('password.request'),
        'meta' => session('meta'),
      ]);
    }
    
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
      try {
        $request->authenticate();
        $request->session()->regenerate();
        
        return redirect()->route('dashboard')->with('meta', [
          'status' => true,
          'title' => 'Berhasil masuk akun',
          'message' => 'Selamat datang kembali, ' . Auth::user()->nama . '!'
        ]);
      } catch (Exception $e) {
        // Handle the exception
        // You can return a redirect with an error message, log the error, etc.
        return redirect()->back()->with('meta', [
          'status' => false,
          'title' => 'Gagal masuk akun',
          'message' => 'Surel atau kata sandi salah!'
        ]);
      }
    }
    
    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
      Auth::guard('web')->logout();
      
      $request->session()->invalidate();
      
      $request->session()->regenerateToken();
      
      return redirect('/');
    }
  }
