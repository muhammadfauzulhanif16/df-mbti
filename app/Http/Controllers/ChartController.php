<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\Lecturer;
  use App\Models\Student;
  use App\Models\Test;
  use Illuminate\Support\Facades\Auth;
  use Inertia\Inertia;
  
  class ChartController extends Controller
  {
    public function index()
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      $tests = Test::with([
        'student.supervisor',
      ])->get();
      
      return Inertia::render('Chart/Index', [
        'meta' => session('meta'),
        'tests' => $tests,
        'auth' => ['user' => $authedUser],
        'students' => Student::with(['user', 'supervisor'])->get(),
        'lecturers' => Lecturer::with(['user', 'students'])->get()
      ]);
    }
  }
