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
          return [
            'id' => $student->user->id,
            'nama' => $student->user->nama,
            'nim' => $student->nim,
            'tahun_ajaran' => $student->tahun_ajaran,
            'foto' => $student->user->foto,
            'no_hp' => $student->user->no_hp,
            'peran' => $student->user->peran,
            'email' => $student->user->email,
            'dpa' => $student->dpa,
          ];
        })
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      $mahasiswa = User::create([
        'nama' => $request->nama,
        'no_hp' => $request->no_hp,
        'peran' => 'Mahasiswa',
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]);
      
      $mahasiswa->student()->create([
        'user_id' => $mahasiswa->id,
        'nim' => $request->nim,
        'tahun_ajaran' => $request->tahun_ajaran,
        'dpa' => $request->dpa,
      ]);
      
      return to_route('students.index')->with('meta', [
        'status' => true,
        'title' => 'Berhasil menambahkan mahasiswa',
        'message' => 'Mahasiswa ' . $request->nama . ' berhasil ditambahkan!'
      ]);
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
    public function edit(Request $student)
    {
      return Inertia::render('Student/Edit', [
        'student' => User::where('id', $student->id)->with('student')->first(),
        'lecturers' => Lecturer::with('user')->get(),
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
      $student->user->update([
        'nama' => $request->nama,
        'no_hp' => $request->no_hp,
        'peran' => $request->status,
        'email' => $request->email,
      ]);
      
      $student->update([
        'nim' => $request->nim,
        'tahun_ajaran' => $request->tahun_ajaran,
        'dpa' => $request->dpa,
      ]);
      
      return to_route('students.index')->with('meta', [
        'status' => true,
        'title' => 'Berhasil mengubah mahasiswa',
        'message' => 'Mahasiswa ' . $request->nama . ' berhasil diubah!'
      ]);
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $student)
    {
      $user = User::find($student->id);
      $user->delete();
      
      return to_route('students.index')->with('meta', [
        'status' => true,
        'title' => 'Berhasil menghapus mahasiswa',
        'message' => 'Mahasiswa ' . $user->nama . ' berhasil dihapus!'
      ]);
    }
  }
