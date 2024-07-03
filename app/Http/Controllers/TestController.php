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
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia('Test/Index', [
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
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
        
        // Update the Test model
        $test->update([
          'personality' => $allMaxBasicTraitCodesString
        ]);
        
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
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      $indicators = Indicator::with('statements')->get();
      
      return Inertia('Test/Create', [
        'indicators' => $indicators,
        'statements' => Statement::all(),
        'auth' => ['user' => $authedUser],
//        'totalSessions' => Indicator::all()->map(function ($indicator) {
//          $indicator->sessions = $indicator->statements->chunk(2)->map(function ($chunk) {
//            return $chunk->values();
//          })->toArray();
//          return $indicator;
//        })->reduce(function ($carry, $indicator) {
//          return $carry + count($indicator->sessions);
//        }, 0),
        'choices' => Choice::all(),
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTestRequest $request, Test $test)
    {
      //
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Test $test)
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      
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
        'test' => $test->load('student.user'),
        'indicators' => $test->load('answers.statement.basicTrait', 'answers.statement.indicator', 'answers.choice')
          ->answers
          ->groupBy('statement.indicator.name')
          ->map(function ($answers, $indicatorName) {
            return [
              'name' => $indicatorName,
              'basic_traits' => $answers->groupBy('statement.basicTrait.name')
                ->map(function ($answers, $basicTraitName) {
                  return [
                    'name' => $basicTraitName,
                    'totalValue' => $answers->sum('choice.value'),
                    'statements' => $answers->map(function ($answer) {
                      return [
                        'statement' => $answer->statement,
                        'choice' => $answer->choice,
                      ];
                    })->unique('statement.id')->values(),
                  ];
                })
                ->values()
                ->toArray(),
              'totalValue' => $answers->sum('choice.value'),
            ];
          })
          ->values()
          ->toArray(),
        'personality' => Personality::where('name', $test->personality)->first(),
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
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
     * Remove the specified resource from storage.
     */
    public function destroy(Test $test)
    {
      //
    }
  }
