<?php
  
  use App\Http\Controllers\LecturerController;
  use App\Http\Controllers\StudentController;
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
      Route::get('{id}/edit', [LecturerController::class, 'edit'])->name('lecturers.edit');
      Route::put('{id}', [LecturerController::class, 'update'])->name('lecturers.update');
      Route::delete('{id}', [LecturerController::class, 'destroy'])->name('lecturers.destroy');
    });
    
    Route::group(['prefix' => 'students'], function () {
      Route::get('', [StudentController::class, 'index'])->name('students.index');
      Route::get('create', [StudentController::class, 'create'])->name('students.create');
      Route::post('', [StudentController::class, 'store'])->name('students.store');
      Route::get('{id}/edit', [StudentController::class, 'edit'])->name('students.edit');
      Route::put('{id}', [StudentController::class, 'update'])->name('students.update');
      Route::delete('{id}', [StudentController::class, 'destroy'])->name('students.destroy');
    });
    
    Route::get('/personality', function () {
      return Inertia::render('Personality/index');
    })->name('personality');
    
    Route::get('/guide', function () {
      return Inertia::render('Guide/index');
    })->name('guide');
  });
  
  
  require __DIR__ . '/auth.php';
