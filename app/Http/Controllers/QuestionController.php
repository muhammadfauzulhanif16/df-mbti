<?php
  
  namespace App\Http\Controllers;
  
  use App\Http\Requests\StoreQuestionRequest;
  use App\Http\Requests\UpdateQuestionRequest;
  use App\Models\Question;
  use Inertia\Inertia;
  
  class QuestionController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia::render('Question/Index', [
        'meta' => session('meta'),
        'questions' => Question::all()
      ]);
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render('Question/Create');
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreQuestionRequest $request)
    {
      //
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
      return Inertia::render('Question/Show', [
        'question' => $question
      ]);
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
      return Inertia::render('Question/Edit', [
        'question' => $question
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQuestionRequest $request, Question $question)
    {
      //
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
      $question->delete();
      
      return redirect()->route('questions.index')->with('meta', [
        'status' => true,
        'title' => 'Berhasil menghapus soal',
        'message' => "Soal '{$question->pertanyaan}' berhasil dihapus!"
      ]);
    }
  }
