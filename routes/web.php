<?php
  
  use App\Http\Controllers\BasicTraitController;
  use App\Http\Controllers\ChartController;
  use App\Http\Controllers\ChoiceController;
  use App\Http\Controllers\GuideController;
  use App\Http\Controllers\IndicatorController;
  use App\Http\Controllers\LecturerController;
  use App\Http\Controllers\PDFController;
  use App\Http\Controllers\PersonalityController;
  use App\Http\Controllers\ProfileController;
  use App\Http\Controllers\ResultController;
  use App\Http\Controllers\StatementController;
  use App\Http\Controllers\StudentController;
  use App\Http\Controllers\TestController;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;
  
  Route::get('/', function () {
    return Inertia::render('Home');
  })->name('home');
  
  Route::fallback(fn() => to_route(auth()->check() ? 'dashboard' : 'login'));
  
  Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Dashboard', [
        'auth' => ['user' => $authedUser],
        'meta' => session('meta'),
      ]);
    })->name('dashboard');
    
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');
    
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
      Route::get('{user}/tests', [StudentController::class, 'tests_index'])->name('students.tests.index');
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
      Route::post('{indicator}/statements', [StatementController::class, 'store'])->name('statements.store');
      Route::get('{indicator}/statements/{statement}/edit', [StatementController::class, 'edit'])->name('statements.edit');
      Route::put('{indicator}/statements/{statement}', [StatementController::class, 'update'])->name('statements.update');
      Route::delete('{indicator}/statements/{statement}', [StatementController::class, 'destroy'])->name('statements.destroy');
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
    
    Route::group(['prefix' => 'personalities'], function () {
      Route::get('', [PersonalityController::class, 'index'])->name('personalities.index');
      Route::get('create', [PersonalityController::class, 'create'])->name('personalities.create');
      Route::post('', [PersonalityController::class, 'store'])->name('personalities.store');
      Route::get('{personality}/edit', [PersonalityController::class, 'edit'])->name('personalities.edit');
      Route::put('{personality}', [PersonalityController::class, 'update'])->name('personalities.update');
      Route::delete('{personality}', [PersonalityController::class, 'destroy'])->name('personalities.destroy');
    });
    
    Route::group(['prefix' => 'guides'], function () {
      Route::get('', [GuideController::class, 'index'])->name('guides.index');
      Route::get('create', [GuideController::class, 'create'])->name('guides.create');
      Route::post('', [GuideController::class, 'store'])->name('guides.store');
      Route::get('{guide}/edit', [GuideController::class, 'edit'])->name('guides.edit');
      Route::put('{guide}', [GuideController::class, 'update'])->name('guides.update');
      Route::delete('{guide}', [GuideController::class, 'destroy'])->name('guides.destroy');
    });
    
    Route::group(['prefix' => 'tests'], function () {
      Route::get('', [TestController::class, 'index'])->name('tests.index');
      Route::get('create', [TestController::class, 'create'])->name('tests.create');
      Route::post('', [TestController::class, 'store'])->name('tests.store');
      Route::get('{test}', [TestController::class, 'show'])->name('tests.show');
      Route::get('{test}/edit', [TestController::class, 'edit'])->name('tests.edit');
      Route::put('{test}', [TestController::class, 'update'])->name('tests.update');
      Route::delete('{test}', [TestController::class, 'destroy'])->name('tests.destroy');
      
    });
    
    Route::group(['prefix' => 'results'], function () {
      Route::get('', [ResultController::class, 'index'])->name('results.index');
      Route::get('{test}', [ResultController::class, 'show'])->name('results.show');
    });
    
    Route::group(['prefix' => 'chart'], function () {
      Route::get('', [ChartController::class, 'index'])->name('chart.index');
    });
    
    Route::get('/guide', function () {
      return Inertia::render('Guide/index');
    })->name('guide');
  });
  
  require __DIR__ . '/auth.php';
