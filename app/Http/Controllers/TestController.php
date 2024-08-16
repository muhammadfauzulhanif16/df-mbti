<?php
  
  namespace App\Http\Controllers;
  
  use App\Http\Requests\UpdateTestRequest;
  use App\Models\Answer;
  use App\Models\BasicTrait;
  use App\Models\Choice;
  use App\Models\Guide;
  use App\Models\Indicator;
  use App\Models\Personality;
  use App\Models\Statement;
  use App\Models\Test;
  use App\Models\Work;
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
          'work_id' => Work::inRandomOrder()->first()->id,
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
        
        
        $highestPercentageBasicTraits = $groupedIndicators->map(function ($indicator) use ($groupedIndicators) {
          $highestTotalValueSum = $groupedIndicators->map(function ($indicator) {
            // Extract total values from basic_traits
            $totalValues = array_column($indicator['basic_traits'], 'totalValue');
            
            // Find the maximum totalValue in basic_traits
            $maxTotalValue = max($totalValues);
            
            return $maxTotalValue;
          })->sum();
          
          $percentage = ($indicator['maxBasicTrait']['totalValue'] / $highestTotalValueSum) * 100;
          
          return [
            'indicatorName' => $indicator['name'],
            'basicTraitName' => $indicator['maxBasicTrait']['name'],
            'percentage' => $percentage,
          ];
        });
        
        $work = Work::with(['basicTraits.basicTrait'])->get()->filter(function ($work) use ($highestPercentageBasicTraits) {
          foreach ($highestPercentageBasicTraits as $highestBasicTrait) {
            $basicTraitInWork = $work->basicTraits->firstWhere('basicTrait.name', $highestBasicTrait['basicTraitName']);
            if (!$basicTraitInWork || $highestBasicTrait['percentage'] < $basicTraitInWork->min_value || $highestBasicTrait['percentage'] > $basicTraitInWork->max_value) {
              // Check if indicatorName matches personality and percentage is between 10 and 50
              if ($highestBasicTrait['indicatorName'] !== $work->personality || $highestBasicTrait['percentage'] < 10 || $highestBasicTrait['percentage'] > 50) {
                return false;
              }
            }
          }
          return true;
        })->first();
        
        $test->update([
          'personality' => $allMaxBasicTraitCodesString,
          'work_id' => $work->id,
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
      
      return Inertia::render('Test/Show', [
        'test' => $test->load('student.user', 'work'),
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
                    'description' => BasicTrait::where('name', $basicTraitName)->first()->description,
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
        'guide' => Guide::where('personality', $test->personality)
          ->where('job', Work::find($test->work_id)->name)
          ->first(),
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
