<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\BasicTrait;
  use App\Models\Work;
  use App\Models\WorkBasicTrait;
  use Exception;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Inertia\Inertia;
  
  class WorkController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Work/Index', [
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
        'works' => Work::all(),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        $selectedCodes = array_map(function ($trait) {
          return $trait['selected'] ? $trait['code'] : null;
        }, $request->basic_traits);
        
        $selectedCodes = array_filter($selectedCodes, function ($code) {
          return !is_null($code);
        });
        
        $selectedTraitsCodesString = implode('', $selectedCodes);
        
        
        $work = Work::create([
          'name' => $request->name,
          'detail' => $request->detail,
          'personality' => $selectedTraitsCodesString,
        ]);
        
        foreach ($request->basic_traits as $trait) {
          WorkBasicTrait::create([
            'work_id' => $work->id,
            'basic_trait_id' => $trait['id'],
            'min_value' => $trait['min_value'],
            'max_value' => $trait['max_value'],
          ]);
        }
        
        return to_route('works.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menambahkan pekerjaan',
          'message' => "Pekerjaan '{$request->name}' berhasil ditambahkan!"
        ]);
      } catch (Exception $e) {
        return to_route('works.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menambahkan pekerjaan',
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
      
      return Inertia::render('Work/Create', [
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
        'basic_traits' => BasicTrait::all(),
      ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Work $work)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Work $work)
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Work/Edit', [
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
        'work' => $work,
        'basic_traits' => BasicTrait::all(),
        'work_basic_traits' => $work->basicTraits,
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Work $work)
    {
      try {
        $selectedCodes = array_map(function ($trait) {
          return $trait['selected'] ? $trait['code'] : null;
        }, $request->basic_traits);
        
        $selectedCodes = array_filter($selectedCodes, function ($code) {
          return !is_null($code);
        });
        
        $selectedTraitsCodesString = implode('', $selectedCodes);
        
        $work->update([
          'name' => $request->name,
          'detail' => $request->detail,
          'personality' => $selectedTraitsCodesString,
        ]);
        
        foreach ($request->basic_traits as $trait) {
          $workBasicTrait = WorkBasicTrait::where('work_id', $work->id)->where('basic_trait_id', $trait['id'])->first();
          
          if ($workBasicTrait) {
            $workBasicTrait->update([
              'min_value' => $trait['min_value'],
              'max_value' => $trait['max_value'],
            ]);
          } else {
            WorkBasicTrait::create([
              'work_id' => $work->id,
              'basic_trait_id' => $trait['id'],
              'min_value' => $trait['min_value'],
              'max_value' => $trait['max_value'],
            ]);
          }
        }
        
        return to_route('works.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah pekerjaan',
          'message' => "Pekerjaan '{$request->name}' berhasil diubah!"
        ]);
      } catch (Exception $e) {
        return to_route('works.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal mengubah pekerjaan',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Work $work)
    {
      try {
        $work->delete();
        
        return to_route('works.index')->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus pekerjaan',
          'message' => "Pekerjaan '{$work->name}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return to_route('works.index')->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus pekerjaan',
          'message' => $e->getMessage(),
        ]);
      }
    }
  }
