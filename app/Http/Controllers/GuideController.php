<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\Guide;
  use App\Models\Work;
  use Exception;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  
  class GuideController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia('Guide/Index', [
        'meta' => session('meta'),
        'guides' => Guide::all()->map(function ($guide) {
          return [
            'id' => $guide->id,
            'personality' => $guide->personality,
            'development' => $guide->development,
            'job' => $guide->job,
            'course' => Work::where('personality', $guide->personality)->first()->course ?? null,
          ];
        }),
        'auth' => ['user' => $authedUser],
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
          'job' => $request->job,
        ]);
        
        return redirect()->route('guides.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menambahkan panduan',
          'message' => "Panduan berhasil ditambahkan!"
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
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia('Guide/Create', [
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
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
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia('Guide/Edit', [
        'meta' => session('meta'),
        'guide' => $guide,
        'auth' => ['user' => $authedUser],
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
          'job' => $request->job,
        ]);
        
        return redirect()->route('guides.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah panduan',
          'message' => "Panduan berhasil diubah!"
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
          'message' => "Panduan berhasil dihapus!"
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
