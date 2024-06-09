<?php
  
  namespace App\Http\Controllers;
  
  use App\Http\Requests\UpdateTestRequest;
  use App\Models\Answer;
  use App\Models\BasicTrait;
  use App\Models\Choice;
  use App\Models\Indicator;
  use App\Models\Personality;
  use App\Models\Statement;
  use App\Models\Test;
  use Exception;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Inertia\Inertia;
  
  class TestController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia('Test/Index', [
        'meta' => session('meta'),
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      try {
        $test = Test::create([
          'user_id' => Auth::id(),
          'time' => gmdate('H:i:s', $request->time),
        ]);
        
        foreach ($request->answers as $answer) {
          Answer::create([
            'test_id' => $test->id,
            'statement_id' => $answer['statement_id'],
            'choice_id' => $answer['choice_id'],
          ]);
        }
        
        return to_route('tests.show', $test->id)->with('meta', [
          'status' => true,
          'title' => 'Tes telah selesai',
        ]);
      } catch (Exception $e) {
        return to_route('tests.index')->with('meta', [
          'status' => true,
          'title' => $e->getMessage(),
        ]);
      }
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia('Test/Create', [
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
     * Display the specified resource.
     */
    public function show(Test $test)
    {
      $groupedIndicators = $test->load('answers.statement.basicTrait', 'answers.statement.indicator', 'answers.choice')
        ->answers->groupBy('statement.indicator.name');
      
      $allMaxBasicTraitCodes = [];
      
      $groupedIndicators->transform(function ($indicatorGroup, $indicatorName) use (&$allMaxBasicTraitCodes) {
        $groupedBasicTraits = $indicatorGroup->groupBy('statement.basicTrait.name');
        
        $totalIndicatorValue = 0;
        
        $groupedBasicTraits->transform(function ($basicTraitGroup, $basicTraitName) use (&$totalIndicatorValue) {
          $totalBasicTraitValue = $basicTraitGroup->sum('choice.value');
          $totalIndicatorValue += $totalBasicTraitValue;
          
          return [
            'name' => $basicTraitName,
            'totalValue' => $totalBasicTraitValue,
          ];
        });
        
        $maxBasicTrait = $groupedBasicTraits->sortByDesc('totalValue')->first();
        $maxBasicTraitCode = BasicTrait::where('name', $maxBasicTrait['name'])->first()->code;

//        $maxTotalValue = $groupedBasicTraits->max('totalValue');
//        $maxBasicTraits = $groupedBasicTraits->filter(function ($basicTrait) use ($maxTotalValue) {
//          return $basicTrait['totalValue'] == $maxTotalValue;
//        });
//
//        $maxBasicTrait = $maxBasicTraits->random();
//        $maxBasicTraitCode = BasicTrait::where('name', $maxBasicTrait['name'])->first()->code;
        
        $allMaxBasicTraitCodes[] = $maxBasicTraitCode;
        
        return [
          'name' => $indicatorName,
          'totalValue' => $totalIndicatorValue,
          'maxBasicTrait' => $maxBasicTrait,
          'maxBasicTraitCode' => $maxBasicTraitCode,
          'basic_traits' => $groupedBasicTraits->values()->all(),
        ];
      });
      
      $allMaxBasicTraitCodesString = implode('', $allMaxBasicTraitCodes);
      
      $groupedResult = [
        'id' => $test->id,
        'test' => $test,
        'indicators' => $groupedIndicators->values()->all(),
        'allMaxBasicTraitCodes' => $allMaxBasicTraitCodesString,
        'time' => $test->time,
        'created_at' => $test->created_at->format('d/m/Y'),
      ];
      
      return Inertia::render('Test/Show', [
        'test' => $groupedResult,
        'user' => $test->where('id', $test->id)->first()->user,
        'personality' => Personality::where('name', $allMaxBasicTraitCodesString)->first(),
        'meta' => session('meta'),
      ]);
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
    
    public function export_pdf()
    {
      return 'export pdf';
//      $html = view('app.blade')->render();
//
//      $pdfPath = storage_path('app/public/invoice.pdf');
//
//      Browsershot::html($html)
//        ->save($pdfPath);
//
//      return response()->download($pdfPath);
    }
  }
