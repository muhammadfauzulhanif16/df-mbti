<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\BasicTraitDimension;
  use Exception;
  use Illuminate\Http\Request;
  use Inertia\Inertia;
  
  class BasicTraitDimensionController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia::render('Question/BasicTraitDimension/Index', [
        'meta' => session('meta'),
        'basic_trait_dimensions' => BasicTraitDimension::all()
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        BasicTraitDimension::create([
          'name' => $request->name
        ]);
        
        return to_route('basic-trait-dimensions.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menambahkan kategori soal',
          'message' => "Kategori soal '{$request->name}' berhasil ditambahkan!"
        ]);
      } catch (Exception $e) {
        return to_route('basic-trait-dimensions.index')->with('meta', [
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
      return Inertia::render('Question/BasicTraitDimension/Create');
    }
    
    /**
     * Display the specified resource.
     */
    public function show(BasicTraitDimension $basicTraitDimension)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BasicTraitDimension $basicTraitDimension)
    {
      return Inertia::render('Question/BasicTraitDimension/Edit', [
        'basic_trait_dimension' => $basicTraitDimension
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BasicTraitDimension $basicTraitDimension)
    {
      try {
        $basicTraitDimension->update([
          'name' => $request->name
        ]);
        
        return to_route('basic-trait-dimensions.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah kategori soal',
          'message' => "Kategori soal '{$request->name}' berhasil diubah!"
        ]);
      } catch (Exception $e) {
        return to_route('basic-trait-dimensions.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal mengubah kategori soal',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BasicTraitDimension $basicTraitDimension)
    {
      try {
        $basicTraitDimension->delete();
        
        return to_route('basic-trait-dimensions.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus kategori soal',
          'message' => "Kategori soal '{$basicTraitDimension->name}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return to_route('basic-trait-dimensions.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus kategori soal',
          'message' => $e->getMessage(),
        ]);
      }
    }
  }
