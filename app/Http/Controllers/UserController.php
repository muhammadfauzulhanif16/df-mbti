<?php
  
  namespace App\Http\Controllers;
  
  use Illuminate\Http\Request;
  use Inertia\Inertia;
  use Inertia\Response;
  
  class UserController extends Controller
  {
    public function index(): Response
    {
      return Inertia::render('User/Index');
    }
    
    public function store(Request $request)
    {
      dd($request->all());
    }
  }
