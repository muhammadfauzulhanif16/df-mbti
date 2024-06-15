<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\BasicTrait;
  use App\Models\Indicator;
  use App\Models\Statement;
  use Exception;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Inertia\Inertia;
  
  class StatementController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index(Indicator $indicator)
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Statement/Index', [
        'indicator' => $indicator,
        'statements' => Statement::with('basicTrait')->where('indicator_id', $indicator->id)->get(),
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
      ]);
    }
    
    public function store(Request $request)
    {
      try {
        Statement::create([
          'name' => $request->name,
          'basic_trait_id' => $request->basic_trait_id,
          'indicator_id' => $request->indicator_id,
        ]);
        
        return to_route('statements.index',
          ['indicator' => $request->indicator_id]
        )->with('meta', [
          'status' => true,
          'title' => 'Berhasil menambahkan pertanyaan',
          'message' => "Pertanyaan '{$request->name}' berhasil ditambahkan!"
        ]);
      } catch (Exception $e) {
        return to_route('statements.index', ['indicator' => $request->indicator_id])->with('meta', [
          'status' => false,
          'title' => 'Gagal menambahkan pertanyaan',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create(Indicator $indicator)
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Statement/Create', [
        'basic_traits' => BasicTrait::all(),
        'indicator' => $indicator,
        'auth' => ['user' => $authedUser],
      ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Statement $statement)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Indicator $indicator, Statement $statement,)
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Statement/Edit', [
        'basic_traits' => BasicTrait::all(),
        'statement' => $statement,
        'indicator' => $indicator,
        'auth' => ['user' => $authedUser],
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Indicator $indicator, Statement $statement)
    {
      try {
        $statement->update([
          'name' => $request->name,
          'basic_trait_id' => $request->basic_trait_id,
        ]);
        
        return to_route('statements.index',
          ['indicator' => $indicator->id]
        )->with('meta', [
          'status' => true,
          'title' => 'Berhasil mengubah pertanyaan',
          'message' => "Pertanyaan '{$request->name}' berhasil diubah!"
        ]);
      } catch (Exception $e) {
        return to_route('statements.index', ['indicator' => $indicator->id])->with('meta', [
          'status' => false,
          'title' => 'Gagal mengubah pertanyaan',
          'message' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Indicator $indicator, Statement $statement)
    {
      try {
        $statement->delete();
        
        return to_route('statements.index',
          ['indicator' => $indicator])->with('meta', [
          'status' => true,
          'title' => 'Berhasil menghapus pertanyaan',
          'message' => "Pertanyaan '{$statement->name}' berhasil dihapus!"
        ]);
      } catch (Exception $e) {
        return to_route('statements.index', ['indicator' => $indicator])->with('meta', [
          'status' => false,
          'title' => 'Gagal menghapus pertanyaan',
          'message' => $e->getMessage(),
        ]);
      }
    }
  }
