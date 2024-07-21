<?php
  
  namespace App\Http\Controllers;
  
  use App\Imports\StudentsImport;
  use App\Models\BasicTrait;
  use App\Models\Lecturer;
  use App\Models\Student;
  use App\Models\Test;
  use App\Models\User;
  use Exception;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Hash;
  use Inertia\Inertia;
  
  class StudentController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Student/Index', [
        'auth' => ['user' => $authedUser],
        'meta' => session('meta'),
        'students' => Student::with(['user', 'supervisor.user', 'tests' => function ($query) {
          $query->latest();
        }])->get()->map(function ($student) {
          $student->user->avatar = str_contains($student->user->avatar, 'https') ? $student->user->avatar : ($student->user->avatar ? asset('storage/' . $student->user->avatar) : null);
          return $student;
        })->sortBy('user.full_name')->values(),
        'lecturers' => Lecturer::with('user')->get(),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        if ($request->hasFile('file')) {
          (new StudentsImport)->import($request->file('file'));
          
          return to_route('students.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan mahasiswa',
            'message' => 'Mahasiswa berhasil ditambahkan!'
          ]);
        } else {
          $user = User::create([
            'full_name' => $request->full_name,
            'id_number' => $request->student_id_number,
            'phone_number' => $request->phone_number,
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
        }
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
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Student/Create', [
        'auth' => ['user' => $authedUser],
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
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Student/Edit', [
        'user' => $user->load('student'),
        'auth' => ['user' => $authedUser],
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
          'phone_number' => $request->phone_number,
          'role' => 'Mahasiswa',
          'email' => $request->email,
          'password' => $request->password ? Hash::make($request->password) : $user->password,
        ]);
        
        $user->student()->update([
          'academic_year' => $request->academic_year,
          'supervisor_id' => $request->supervisor_id,
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
    
    public function tests_index(User $user)
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      
      $results = Test::where('user_id', $user->id)
        ->with('answers.statement.basicTrait', 'answers.statement.indicator', 'answers.choice')
        ->orderBy('created_at', 'desc')
        ->get();
      
      $groupedResults = $results->map(function ($test) {
        $groupedIndicators = $test->answers->groupBy('statement.indicator.name');
        
        $allMaxBasicTraitCodes = [];
        
        $groupedIndicators->transform(function ($indicatorGroup, $indicatorName) use (&$allMaxBasicTraitCodes) {
          $groupedBasicTraits = $indicatorGroup->groupBy('statement.basicTrait.name');
          
          $totalIndicatorValue = 0;
          
          $groupedBasicTraits->transform(function ($basicTraitGroup, $basicTraitName) use (&$totalIndicatorValue) {
            $totalBasicTraitValue = $basicTraitGroup->sum('choice.value');
            $totalIndicatorValue += $totalBasicTraitValue;
            
            return [
              'name' => $basicTraitName,
              'totalValue' => $totalBasicTraitValue,
            ];
          });
          
          $maxBasicTrait = $groupedBasicTraits->sortByDesc('totalValue')->first();
          $maxBasicTraitCode = BasicTrait::where('name', $maxBasicTrait['name'])->first()->code;
          
          $allMaxBasicTraitCodes[] = $maxBasicTraitCode;
          
          return [
            'name' => $indicatorName,
            'totalValue' => $totalIndicatorValue,
            'maxBasicTrait' => $maxBasicTrait,
            'maxBasicTraitCode' => $maxBasicTraitCode,
            'basic_traits' => $groupedBasicTraits->values()->all(),
          ];
        });
        
        $allMaxBasicTraitCodesString = implode('', $allMaxBasicTraitCodes);
        
        return [
          'id' => $test->id,
          'test' => $test,
          'indicators' => $groupedIndicators->values()->all(),
          'allMaxBasicTraitCodes' => $allMaxBasicTraitCodesString,
          'time' => $test->time,
          'created_at' => $test->created_at->format('d/m/Y'),
        ];
      });
      
      return Inertia('Student/Tests', [
        'tests' => Test::where('user_id', $user->id)->latest()->get(),
        'auth' => ['user' => $authedUser],
      ]);
    }
  }
