<?php
  
  namespace App\Http\Controllers;
  
  use App\Http\Requests\UpdateTestRequest;
  use App\Models\Choice;
  use App\Models\Indicator;
  use App\Models\Statement;
  use App\Models\Test;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  
  class TestController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia('Test/Index', [
        'indicators' => Indicator::all()->map(function ($indicator) {
          $indicator->sessions = $indicator->statements
            ->chunk(2)
            ->map(function ($chunk) {
              return $chunk->values();
            })
            ->toArray();
          
          return $indicator;
        }),
        'statements' => Statement::all(),
        'totalSessions' => Indicator::all()->map(function ($indicator) {
          $indicator->sessions = $indicator->statements->chunk(2)->map(function ($chunk) {
            return $chunk->values();
          })->toArray();
          return $indicator;
        })->reduce(function ($carry, $indicator) {
          return $carry + count($indicator->sessions);
        }, 0),
        'choices' => Choice::all(),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      dd($request->all());
      foreach ($request->choices as $choice) {
        Test::create([
          'user_id' => Auth::user()->id,
          'statement_id' => $choice['statement_id'],
          'choice_id' => $choice['choice_id'],
        ]);
      }
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      //
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Test $test)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Test $test)
    {
      //
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTestRequest $request, Test $test)
    {
      //
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Test $test)
    {
      //
    }
  }
