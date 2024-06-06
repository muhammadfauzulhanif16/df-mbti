<?php
  
  namespace App\Http\Controllers;
  
  use App\Imports\ChoicesImport;
  use App\Models\Choice;
  use App\Models\Statement;
  use Exception;
  use Illuminate\Http\Request;
  use Inertia\Inertia;
  
  class ChoiceController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia::render('Choice/Index', [
        'meta' => session('meta'),
        'statements' => Statement::all(),
        'choices' => Choice::all(),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        if ($request->hasFile('file')) {
          (new ChoicesImport)->import($request->file('file'));
          
          return redirect()->route('choices.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan pilihan',
            'message' => "Pilihan berhasil ditambahkan!"
          ]);
        } else {
          Choice::create([
            'name' => $request->name,
            'value' => $request->value,
          ]);
          
          return redirect()->route('choices.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan pilihan',
            'message' => "Pilihan '{$request->name}' berhasil ditambahkan!"
          ]);
        }
      } catch (Exception $e) {
        return redirect()->route('choices.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menambahkan pilihan',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render('Choice/Create');
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Choice $choice)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Choice $choice)
    {
      return Inertia::render('Choice/Edit', [
        'choice' => $choice
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Choice $choice)
    {
      try {
        $choice->update([
          'name' => $request->name,
          'value' => $request->value,
        ]);
        
        return redirect()->route('choices.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah pilihan',
          'message' => "Pilihan '{$request->name}' berhasil diubah!"
        ]);
      } catch (Exception $e) {
        return redirect()->route('choices.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal mengubah pilihan',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Choice $choice)
    {
      try {
        $choice->delete();
        
        return redirect()->route('choices.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus pilihan',
          'message' => "Pilihan '{$choice->name}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return redirect()->route('choices.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus pilihan',
          'message' => $e->getMessage(),
        ]);
      }
    }
  }
