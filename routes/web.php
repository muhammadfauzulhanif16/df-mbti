<?php
  
  use App\Http\Controllers\BasicTraitController;
  use App\Http\Controllers\LecturerController;
  use App\Http\Controllers\QuestionController;
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
    
    Route::group(['prefix' => 'questions'], function () {
      Route::get('', [QuestionController::class, 'index'])->name('questions.index');
      Route::get('create', [QuestionController::class, 'create'])->name('questions.create');
      Route::post('', [QuestionController::class, 'store'])->name('questions.store');
      Route::get('{question}', [QuestionController::class, 'show'])->name('questions.show');
      Route::get('{question}/edit', [QuestionController::class, 'edit'])->name('questions.edit');
      Route::put('{question}', [QuestionController::class, 'update'])->name('questions.update');
      Route::delete('{question}', [QuestionController::class, 'destroy'])->name('questions.destroy');

//      Route::group(['prefix' => 'choices'], function () {
//        Route::get('', [ChoiceController::class, 'index'])->name('questions.choices.index');
//        Route::get('create', [ChoiceController::class, 'create'])->name('questions.choices.create');
//        Route::post('', [ChoiceController::class, 'store'])->name('questions.choices.store');
//        Route::get('{id}/edit', [ChoiceController::class, 'edit'])->name('questions.choices.edit');
//        Route::put('{id}', [ChoiceController::class, 'update'])->name('questions.choices.update');
//        Route::delete('{id}', [ChoiceController::class, 'destroy'])->name('questions.choices.destroy');
//      });
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
