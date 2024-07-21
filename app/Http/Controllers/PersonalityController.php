<?php
  
  namespace App\Http\Controllers;
  
  use App\Imports\StudentsImport;
  use App\Models\BasicTrait;
  use App\Models\Personality;
  use Exception;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Maatwebsite\Excel\Facades\Excel;
  
  class PersonalityController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia('Personality/Index', [
        'meta' => session('meta'),
        'personalities' => Personality::all(),
        'auth' => ['user' => $authedUser],
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        if ($request->hasFile('file')) {
          Excel::import(new StudentsImport, $request->file('file'));
          
          return to_route('personalities.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan tipe kepribadian',
            'message' => 'Tipe kepribadian berhasil ditambahkan!'
          ]);
        } else {
          Personality::create([
            'name' => $request->name,
            'description' => $request->description,
            'job' => $request->job,
            'detail' => $request->detail,
          ]);
          
          return redirect()->route('personalities.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan tipe kepribadian',
            'message' => "Kepribadian '{$request->name}' berhasil ditambahkan!"
          ]);
        }
      } catch (Exception $e) {
        return redirect()->route('personalities.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menambahkan kerpribadian',
          'message' => $e->getMessage(),
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
      
      return Inertia('Personality/Create', [
        'meta' => session('meta'),
        'basic_traits' => BasicTrait::all(),
        'auth' => ['user' => $authedUser],
      ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Personality $personality)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Personality $personality)
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia('Personality/Edit', [
        'meta' => session('meta'),
        'personality' => $personality,
        'basic_traits' => BasicTrait::all(),
        'auth' => ['user' => $authedUser],
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Personality $personality)
    {
      try {
        $personality->update([
          'name' => $request->name,
          'description' => $request->description,
          'job' => $request->job,
          'detail' => $request->detail,
        ]);
        
        return redirect()->route('personalities.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah tipe kepribadian',
          'message' => "Kepribadian '{$request->name}' berhasil diubah!"
        ]);
      } catch (Exception $e) {
        return redirect()->route('personalities.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal mengubah tipe kepribadian',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Personality $personality)
    {
      try {
        $personality->delete();
        
        return redirect()->route('personalities.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus tipe kepribadian',
          'message' => "Kepribadian '{$personality->name}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return redirect()->route('personalities.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus tipe kepribadian',
          'message' => $e->getMessage(),
        ]);
      }
    }
  }
