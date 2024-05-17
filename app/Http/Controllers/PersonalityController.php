<?php

namespace App\Http\Controllers;

use App\Models\Personality;
use App\Http\Requests\StorePersonalityRequest;
use App\Http\Requests\UpdatePersonalityRequest;

class PersonalityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StorePersonalityRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Personality $personality)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Personality $personality)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePersonalityRequest $request, Personality $personality)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Personality $personality)
    {
        //
    }
}
