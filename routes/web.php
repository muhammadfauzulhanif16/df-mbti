<?php
  
  use App\Http\Controllers\BasicTraitController;
  use App\Http\Controllers\ChoiceController;
  use App\Http\Controllers\IndicatorController;
  use App\Http\Controllers\LecturerController;
  use App\Http\Controllers\ProfileController;
  use App\Http\Controllers\StatementController;
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
    
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile');
    Route::put('profile/{user}', [ProfileController::class, 'update'])->name('profile.update');
    
    Route::group(['prefix' => 'lecturers'], function () {
      Route::get('', [LecturerController::class, 'index'])->name('lecturers.index');
      Route::get('create', [LecturerController::class, 'create'])->name('lecturers.create');
      Route::post('', [LecturerController::class, 'store'])->name('lecturers.store');
      Route::get('{user}/edit', [LecturerController::class, 'edit'])->name('lecturers.edit');
      Route::put('{user}', [LecturerController::class, 'update'])->name('lecturers.update');
      Route::delete('{user}', [LecturerController::class, 'destroy'])->name('lecturers.destroy');
    });
    
    Route::group(['prefix' => 'students'], function () {
      Route::get('', [StudentController::class, 'index'])->name('students.index');
      Route::get('create', [StudentController::class, 'create'])->name('students.create');
      Route::post('', [StudentController::class, 'store'])->name('students.store');
      Route::get('{user}/edit', [StudentController::class, 'edit'])->name('students.edit');
      Route::put('{user}', [StudentController::class, 'update'])->name('students.update');
      Route::delete('{user}', [StudentController::class, 'destroy'])->name('students.destroy');
    });
    
    Route::group(['prefix' => 'indicators'], function () {
      Route::get('', [IndicatorController::class, 'index'])->name('indicators.index');
      Route::get('create', [IndicatorController::class, 'create'])->name('indicators.create');
      Route::post('', [IndicatorController::class, 'store'])->name('indicators.store');
//      Route::get('{indicator}', [IndicatorController::class, 'show'])->name('indicators.show');
      Route::get('{indicator}/edit', [IndicatorController::class, 'edit'])->name('indicators.edit');
      Route::put('{indicator}', [IndicatorController::class, 'update'])->name('indicators.update');
      Route::delete('{indicator}', [IndicatorController::class, 'destroy'])->name('indicators.destroy');
      
      Route::get('{indicator}/statements', [StatementController::class, 'index'])->name('statements.index');
      Route::get('{indicator}/statements/create', [StatementController::class, 'create'])->name('statements.create');
    });
    
    Route::group(['prefix' => 'choices'], function () {
      Route::get('', [ChoiceController::class, 'index'])->name('choices.index');
      Route::get('create', [ChoiceController::class, 'create'])->name('choices.create');
      Route::post('', [ChoiceController::class, 'store'])->name('choices.store');
      Route::get('{choice}/edit', [ChoiceController::class, 'edit'])->name('choices.edit');
      Route::put('{choice}', [ChoiceController::class, 'update'])->name('choices.update');
      Route::delete('{choice}', [ChoiceController::class, 'destroy'])->name('choices.destroy');
    });
    
    Route::group(['prefix' => 'basic-traits'], function () {
      Route::get('', [BasicTraitController::class, 'index'])->name('basic-traits.index');
      Route::get('create', [BasicTraitController::class, 'create'])->name('basic-traits.create');
      Route::post('', [BasicTraitController::class, 'store'])->name('basic-traits.store');
      Route::get('{basicTrait}/edit', [BasicTraitController::class, 'edit'])->name('basic-traits.edit');
      Route::put('{basicTrait}', [BasicTraitController::class, 'update'])->name('basic-traits.update');
      Route::delete('{basicTrait}', [BasicTraitController::class, 'destroy'])->name('basic-traits.destroy');
    });
    
    Route::get('/personality', function () {
      return Inertia::render('Personality/index');
    })->name('personality');
    
    Route::get('/guide', function () {
      return Inertia::render('Guide/index');
    })->name('guide');
  });
  
  
  require __DIR__ . '/auth.php';
