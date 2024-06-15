<?php
  
  namespace App\Http\Controllers;
  
  use App\Http\Requests\StoreResultRequest;
  use App\Http\Requests\UpdateResultRequest;
  use App\Models\BasicTrait;
  use App\Models\Personality;
  use App\Models\Result;
  use App\Models\Test;
  use Illuminate\Support\Facades\Auth;
  use Inertia\Inertia;
  
  class ResultController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      $userId = Auth::id();
      
      $results = Test::where('user_id', $userId)
        ->with('answers.statement.basicTrait', 'answers.statement.indicator', 'answers.choice')
        ->orderBy('created_at', 'desc')
        ->get();
      
      $groupedResults = $results->map(function ($test) {
        $groupedIndicators = $test->answers->groupBy('statement.indicator.name');
        
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
        
        return [
          'id' => $test->id,
          'test' => $test,
          'indicators' => $groupedIndicators->values()->all(),
          'allMaxBasicTraitCodes' => $allMaxBasicTraitCodesString,
          'time' => $test->time,
          'created_at' => $test->created_at->format('d/m/Y'),
        ];
      });
      
      return Inertia::render('Result/Index', [
        'tests' => $groupedResults,
        'auth' => ['user' => $authedUser],
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
    public function store(StoreResultRequest $request)
    {
      //
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
            'statements' => $basicTraitGroup,
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
      
      return Inertia::render('Result/Show', [
        'test' => $groupedResult,
        'user' => $test->where('id', $test->id)->first()->user,
        'personality' => Personality::where('name', $allMaxBasicTraitCodesString)->first(),
        'meta' => session('meta'),
      ]);
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Result $result)
    {
      //
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResultRequest $request, Result $result)
    {
      //
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Result $result)
    {
      //
    }
  }
