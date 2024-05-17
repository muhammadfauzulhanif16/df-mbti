<?php
  
  namespace App\Http\Controllers;
  
  use App\Http\Requests\StoreChoiceRequest;
  use App\Http\Requests\UpdateChoiceRequest;
  use App\Models\Choice;
  use Inertia\Inertia;
  
  class ChoiceController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia::render('Question/Choice/Index');
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render('Question/Choice/Create');
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChoiceRequest $request)
    {
      //
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
      return Inertia::render('Question/Choice/Edit');
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChoiceRequest $request, Choice $choice)
    {
      //
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Choice $choice)
    {
      //
    }
  }
