<?php
  
  use App\Http\Controllers\LecturerController;
  use App\Http\Controllers\ProfileController;
  use App\Models\Lecturer;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;
  
  
  Route::fallback(fn() => to_route(auth()->check() ? 'dashboard' : 'login'));
  
  Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
      return Inertia::render('Dashboard', [
        'meta' => session('meta'),
      ]);
    })->name('dashboard');
    
    Route::group(['prefix' => 'lecturers'], function () {
      Route::get('', [LecturerController::class, 'index'])->name('lecturers.index');
      
      Route::get('create', [LecturerController::class, 'create'])->name('lecturers.create');
      
      Route::post('', [LecturerController::class, 'store'])->name('lecturers.store');
      
      Route::get('{lecturer}/edit', function (Lecturer $lecturer) {
        return Inertia::render('Lecturer/Edit', [
          'lecturer' => $lecturer,
        ]);
      })->name('lecturers.edit');
    });
    
    
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
