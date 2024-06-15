<?php
  
  namespace App\Http\Controllers;
  
  use App\Imports\BasicTraitsImport;
  use App\Models\BasicTrait;
  use Exception;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Inertia\Inertia;
  
  class BasicTraitController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('BasicTrait/Index', [
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
        'basic_traits' => BasicTrait::all()->load('statements')
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        if ($request->hasFile('file')) {
          (new BasicTraitsImport)->import($request->file('file'));
          
          return to_route('basic-traits.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan kategori soal',
            'message' => "Kategori soal berhasil ditambahkan!"
          ]);
        } else {
          BasicTrait::create([
            'code' => $request->code,
            'name' => $request->name
          ]);
          
          return to_route('basic-traits.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan kategori soal',
            'message' => "Kategori soal '{$request->name}' berhasil ditambahkan!"
          ]);
        }
      } catch (Exception $e) {
        return to_route('basic-traits.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menambahkan kategori soal',
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
      
      return Inertia::render('BasicTrait/Create', [
        'auth' => ['user' => $authedUser],
      ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(BasicTrait $basicTrait)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BasicTrait $basicTrait)
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('BasicTrait/Edit', [
        'basic_trait' => $basicTrait,
        'auth' => ['user' => $authedUser],
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BasicTrait $basicTrait)
    {
      try {
        $basicTrait->update([
          'code' => $request->code,
          'name' => $request->name
        ]);
        
        return to_route('basic-traits.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah kategori soal',
          'message' => "Kategori soal '{$request->name}' berhasil diubah!"
        ]);
      } catch (Exception $e) {
        return to_route('basic-traits.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal mengubah kategori soal',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BasicTrait $basicTrait)
    {
      try {
        $basicTrait->delete();
        
        return to_route('basic-traits.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus kategori soal',
          'message' => "Kategori soal '{$basicTrait->name}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return to_route('basic-traits.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus kategori soal',
          'message' => $e->getMessage(),
        ]);
      }
    }
  }
