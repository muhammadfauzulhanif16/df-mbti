<?php
  
  namespace App\Http\Controllers;
  
  use App\Http\Requests\StoreStatementRequest;
  use App\Http\Requests\UpdateStatementRequest;
  use App\Models\Indicator;
  use App\Models\Statement;
  use Inertia\Inertia;
  
  class StatementController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index(Indicator $indicator)
    {
      return Inertia::render('Statement/Index', [
        'indicator' => $indicator::with('basicTrait')->first(),
        'statements' => Statement::all()
      ]);
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render('Statement/Create');
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStatementRequest $request)
    {
      //
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
    public function edit(Statement $statement)
    {
      //
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStatementRequest $request, Statement $statement)
    {
      //
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Statement $statement)
    {
      //
    }
  }
