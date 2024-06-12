<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\Lecturer;
  use App\Models\Student;
  use App\Models\Test;
  use Inertia\Inertia;
  
  class ChartController extends Controller
  {
    public function index()
    {
      $tests = Test::with([
        'student.supervisor',
      ])->get();
      
      return Inertia::render('Chart/Index', [
        'meta' => session('meta'),
        'tests' => $tests,
        'students' => Student::with(['user', 'supervisor'])->get(),
        'lecturers' => Lecturer::with(['user', 'students'])->get()
      ]);
    }
  }
