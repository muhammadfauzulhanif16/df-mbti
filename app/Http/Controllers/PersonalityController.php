<?php
  
  namespace App\Http\Controllers;
  
  use App\Imports\PersonalityImport;
  use App\Models\Personality;
  use Exception;
  use Illuminate\Http\Request;
  
  class PersonalityController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia('Personality/Index', [
        'meta' => session('meta'),
        'personalities' => Personality::all(),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        if ($request->hasFile('file')) {
          (new PersonalityImport)->import($request->file('file'));
          
          return redirect()->route('personalities.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan tipe kepribadian',
            'message' => "Tipe kepribadian berhasil ditambahkan!"
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
      return Inertia('Personality/Create', [
        'meta' => session('meta'),
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
      return Inertia('Personality/Edit', [
        'meta' => session('meta'),
        'personality' => $personality,
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
