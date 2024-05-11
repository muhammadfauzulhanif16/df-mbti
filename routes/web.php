<?php
  
  use App\Http\Controllers\ProfileController;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;

//  Route::get('/', function () {
//    return Inertia::render('Welcome', [
//      'canLogin' => Route::has('login'),
//      'canRegister' => Route::has('register'),
//      'laravelVersion' => Application::VERSION,
//      'phpVersion' => PHP_VERSION,
//    ]);
//  });
  
  Route::fallback(fn() => to_route(auth()->check() ? 'dashboard' : 'login'));
  
  Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
      return Inertia::render('Dashboard', [
        'meta' => session('meta'),
      ]);
    })->name('dashboard');
    
    // Add your new routes here
    Route::get('/user', function () {
      return Inertia::render('User/index');
    })->name('user');
    
    Route::get('/personality', function () {
      return Inertia::render('Personality/index');
    })->name('personality');
    
    Route::get('/guide', function () {
      return Inertia::render('Guide/index');
    })->name('guide');
  });
  
  Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
  });
  
  require __DIR__ . '/auth.php';
