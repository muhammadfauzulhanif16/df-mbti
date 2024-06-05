<?php
  
  namespace App\Http\Controllers;
  
  use App\Http\Requests\StoreTestRequest;
  use App\Http\Requests\UpdateTestRequest;
  use App\Models\Choice;
  use App\Models\Indicator;
  use App\Models\Statement;
  use App\Models\Test;
  
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
     * Show the form for creating a new resource.
     */
    public function create()
    {
      //
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestRequest $request)
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
