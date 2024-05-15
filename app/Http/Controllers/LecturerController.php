<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\Lecturer;
  use App\Models\User;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Hash;
  use Inertia\Inertia;
  
  class LecturerController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia::render('Lecturer/Index', [
        'meta' => session('meta'),
        'lecturers' => Lecturer::with('user')->get(),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      $dosen = User::create([
        'nama' => $request->nama,
        'no_hp' => '0' + $request->no_hp,
        'peran' => $request->status,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]);
      
      $dosen->lecturer()->create([
        'user_id' => $dosen->id,
        'nidn' => $request->nidn,
        'tahun_ajaran' => $request->tahun_ajaran,
      ]);
      
      return to_route('lecturers.index')->with('meta', [
        'status' => true,
        'title' => 'Berhasil menambahkan dosen',
        'message' => 'Dosen ' . $request->nama . ' berhasil ditambahkan!'
      ]);
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render('Lecturer/Create');
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
    public function edit(Request $lecturer)
    {
      return Inertia::render('Lecturer/Edit', [
        'lecturer' => Lecturer::with('user')->where('user_id', $lecturer->id)->first(),
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
      $user = User::find($request->id);
      
      $user->update([
        'nama' => $request->nama,
        'no_hp' => '0' + $request->no_hp,
        'peran' => $request->status,
        'email' => $request->email,
        'password' => $request->password ? Hash::make($request->password) : $user->password,
      ]);
      
      $user->lecturer()->update([
        'nidn' => $request->nidn,
        'tahun_ajaran' => $request->tahun_ajaran,
      ]);
      
      return to_route('lecturers.index')->with('meta', [
        'status' => true,
        'title' => 'Berhasil mengubah dosen',
        'message' => 'Dosen ' . $request->nama . ' berhasil diubah!'
      ]);
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $lecturer)
    {
      $user = User::find($lecturer->id);
      $user->delete();
      
      return to_route('lecturers.index')->with('meta', [
        'status' => true,
        'title' => 'Berhasil menghapus dosen',
        'message' => 'Dosen ' . $user->nama . ' berhasil dihapus!'
      ]);
    }
  }
