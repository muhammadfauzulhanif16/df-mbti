<?php
  
  namespace App\Http\Controllers;
  
  use App\Imports\IndicatorsImport;
  use App\Models\BasicTrait;
  use App\Models\Indicator;
  use Exception;
  use Illuminate\Http\Request;
  use Inertia\Inertia;
  
  class IndicatorController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia::render('Indicator/Index', [
        'meta' => session('meta'),
        'indicators' => Indicator::with('basicTrait')->get(),
        'basic_traits' => BasicTrait::all()
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        if ($request->hasFile('file')) {
          (new IndicatorsImport)->import($request->file('file'));
          
          return to_route('indicators.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan soal',
            'message' => "Soal berhasil ditambahkan!"
          ]);
        } else {
          Indicator::create([
            'name' => $request->name
          ]);
          
          return to_route('indicators.index')->with('meta', [
            'status' => true,
            'title' => 'Berhasil menambahkan soal',
            'message' => "Soal '{$request->name}' berhasil ditambahkan!"
          ]);
        }
      } catch (Exception $e) {
        return to_route('indicators.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menambahkan soal',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render('Indicator/Create', [
        'basic_traits' => BasicTrait::all()
      ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Indicator $indicator)
    {
      return Inertia::render('Indicator/Show', [
        'indicator' => $indicator
      ]);
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Indicator $indicator)
    {
      return Inertia::render('Indicator/Edit', [
        'basic_traits' => BasicTrait::all(),
        'indicator' => $indicator
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Indicator $indicator)
    {
      try {
        $indicator->update([
          'basic_trait_id' => $request->basic_trait_id,
          'name' => $request->name
        ]);
        
        return to_route('indicators.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil memperbarui soal',
          'message' => "Soal '{$request->name}' berhasil diperbarui!"
        ]);
      } catch (Exception $e) {
        return to_route('indicators.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal memperbarui soal',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Indicator $indicator)
    {
      try {
        $indicator->delete();
        
        return to_route('indicators.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus indikator',
          'message' => "Indikator '{$indicator->name}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return to_route('indicators.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus indikator',
          'message' => $e->getMessage(),
        ]);
      }
    }
  }
