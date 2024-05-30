<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\Lecturer;
  use App\Models\User;
  use Illuminate\Http\Request;
  use Inertia\Inertia;
  
  class ProfileController extends Controller
  {
    public function edit()
    {
      $user = auth()->user();
      
      if ($user->role === 'Mahasiswa') {
        $user->load('student');
      } else {
        $user->load('lecturer');
      }
      
      return Inertia::render('Profile', [
        'meta' => session('meta'),
        'user' => $user,
        'lecturers' => Lecturer::with('user')->get()
      ]);
    }
    
    public function update(Request $request, User $user)
    {
      if ($request->hasFile('avatar')) {
        $avatar = $request->file('avatar');
        
        $path = $avatar->store('avatars', 'public');
        $user->update([
          'avatar' => asset('storage/' . $path),
        ]);
      }
      
      $user->update([
        'full_name' => $request->full_name,
      ]);
      
      return to_route('profile')->with('meta', [
        'status' => true,
        'title' => 'Berhasil memperbarui profil',
        'message' => 'Profil Anda berhasil diperbarui!'
      ]);
    }
  }
