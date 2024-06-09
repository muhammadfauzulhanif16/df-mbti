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
      $students = Student::with('user')->get()->map(function ($student) {
        $student->test = Test::where('user_id', $student->user->id)->first();
        return $student;
      })->filter(function ($student) {
        return $student->test !== null;
      });
      
      return Inertia::render('Chart/Index', [
        'meta' => session('meta'),
        'students' => $students,
        'totalStudents' => Student::count(),
        'lecturers' => Lecturer::with(['user', 'students'])->get()
      ]);
    }
  }
