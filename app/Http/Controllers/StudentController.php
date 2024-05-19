<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\Lecturer;
  use App\Models\Student;
  use App\Models\User;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Hash;
  use Inertia\Inertia;
  
  class StudentController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia::render('Student/Index', [
        'meta' => session('meta'),
        'students' => Student::with('user')->get()->map(function ($student) {
          $student['supervisor'] = User::find($student->supervisor_id);
          return $student;
        }),
        'lecturers' => Lecturer::with('user')->get(),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        $user = User::create([
          'full_name' => $request->full_name,
          'id_number' => $request->student_id_number,
          'phone_number' => "0$request->phone_number",
          'role' => 'Mahasiswa',
          'email' => $request->email,
          'password' => Hash::make($request->password),
        ]);
        
        $user->student()->create([
          'user_id' => $user->id,
          'academic_year' => $request->academic_year,
          'supervisor_id' => $request->supervisor_id,
        ]);
        
        return to_route('students.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menambahkan mahasiswa',
          'message' => "Mahasiswa '{$request->full_name}' berhasil ditambahkan!"
        ]);
      } catch (Exception $e) {
        return to_route('students.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menambahkan mahasiswa',
          'message' => $e->getMessage()
        ]);
      }
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render('Student/Create', [
        'lecturers' => Lecturer::with('user')->get(),
      ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
      return Inertia::render('Student/Edit', [
        'user' => $user->load('student'),
        'lecturers' => Lecturer::with('user')->get(),
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
      try {
        $user->update([
          'full_name' => $request->full_name,
          'id_number' => $request->student_id_number,
          'phone_number' => "0$request->phone_number",
          'role' => 'Mahasiswa',
          'email' => $request->email,
          'password' => $request->password ? Hash::make($request->password) : $user->password,
        ]);
        
        $user->student()->update([
          'academic_year' => $request->academic_year,
          'supervisor' => $request->supervisor,
        ]);
        
        return to_route('students.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah mahasiswa',
          'message' => "Mahasiswa '{$request->full_name}' berhasil diubah!"
        ]);
      } catch (Exception $e) {
        return to_route('students.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal mengubah mahasiswa',
          'message' => $e->getMessage()
        ]);
      }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
      try {
        $user->delete();
        
        return to_route('students.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus mahasiswa',
          'message' => "Mahasiswa '{$user->full_name}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return to_route('students.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus mahasiswa',
          'message' => $e->getMessage()
        ]);
      }
    }
  }
