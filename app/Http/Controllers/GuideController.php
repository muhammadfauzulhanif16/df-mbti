<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\Guide;
  use Exception;
  use Illuminate\Http\Request;
  
  class GuideController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia('Guide/Index', [
        'meta' => session('meta'),
        'guides' => Guide::all(),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        Guide::create([
          'personality' => $request->personality,
          'development' => $request->development,
        ]);
        
        return redirect()->route('guides.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menambahkan panduan',
          'message' => "Panduan '{$request->title}' berhasil ditambahkan!"
        ]);
      } catch (Exception $e) {
        return redirect()->route('guides.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menambahkan panduan',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia('Guide/Create', [
        'meta' => session('meta'),
      ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Guide $guide)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Guide $guide)
    {
      return Inertia('Guide/Edit', [
        'meta' => session('meta'),
        'guide' => $guide,
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Guide $guide)
    {
      try {
        $guide->update([
          'personality' => $request->personality,
          'development' => $request->development,
        ]);
        
        return redirect()->route('guides.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah panduan',
          'message' => "Panduan '{$request->personality}' berhasil diubah!"
        ]);
      } catch (Exception $e) {
        return redirect()->route('guides.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal mengubah panduan',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Guide $guide)
    {
      try {
        $guide->delete();
        
        return redirect()->route('guides.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus panduan',
          'message' => "Panduan '{$guide->personality}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return redirect()->route('guides.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus panduan',
          'message' => $e->getMessage(),
        ]);
      }
    }
  }
