<?php
  
  namespace App\Http\Controllers;
  
  use App\Imports\LecturersImport;
  use App\Models\Lecturer;
  use App\Models\Student;
  use App\Models\User;
  use Exception;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Hash;
  use Inertia\Inertia;
  
  class LecturerController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Lecturer/Index', [
        'auth' => ['user' => $authedUser],
        'meta' => session('meta'),
        'lecturers' => Lecturer::with('user')->get()->map(function ($lecturer) {
          $lecturer->user->avatar = str_contains($lecturer->user->avatar, 'https') ? $lecturer->user->avatar : ($lecturer->user->avatar ? asset('storage/' . $lecturer->user->avatar) : null);
          
          $lecturer['students'] = Student::with('user')->where('supervisor_id', $lecturer->user_id)->get();
          return $lecturer;
        })->sortBy('user.full_name')->values(),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        if ($request->hasFile('file')) {
//          dd($request->file('file')->getClientOriginalName());
          (new LecturersImport)->import($request->file('file'));
          
          return to_route('lecturers.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan dosen',
            'message' => "Dosen berhasil ditambahkan!"
          ]);
        } else {
          $user = User::create([
            'full_name' => $request->full_name,
            'id_number' => $request->national_lecturer_id_number,
            'phone_number' => "0$request->phone_number",
            'role' => $request->role,
            'email' => $request->email,
            'password' => Hash::make($request->password),
          ]);
          
          $user->lecturer()->create([
            'user_id' => $user->id,
          ]);
          
          return to_route('lecturers.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan dosen',
            'message' => "Dosen '{$request->full_name}' berhasil ditambahkan!"
          ]);
        }
      } catch (Exception $e) {
        return to_route('lecturers.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menambahkan dosen',
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
      
      return Inertia::render('Lecturer/Create', [
        'auth' => ['user' => $authedUser],
      ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Lecturer $lecturer)
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
      
      return Inertia::render('Lecturer/Edit', [
        'user' => $user->load('lecturer'),
        'auth' => ['user' => $authedUser],
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
          'id_number' => $request->national_lecturer_id_number,
          'phone_number' => "0$request->phone_number",
          'role' => $request->role,
          'email' => $request->email,
          'password' => $request->password ? Hash::make($request->password) : $user->password,
        ]);
        
        return to_route('lecturers.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah dosen',
          'message' => "Dosen '{$request->full_name}' berhasil diubah!"
        ]);
      } catch (Exception $e) {
        return to_route('lecturers.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal mengubah dosen',
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
        
        return to_route('lecturers.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus dosen',
          'message' => "Dosen '{$user->full_name}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return to_route('lecturers.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus dosen',
          'message' => $e->getMessage()
        ]);
      }
    }
  }
