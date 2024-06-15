<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\Lecturer;
  use App\Models\User;
  use Exception;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Redirect;
  use Inertia\Inertia;
  
  class ProfileController extends Controller
  {
    public function edit()
    {
      $authedUser = Auth::user();
      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      if ($authedUser->role === 'Mahasiswa') {
        $authedUser->load('student');
      } else {
        $authedUser->load('lecturer');
      }
      
      return Inertia::render('Profile', [
        'meta' => session('meta'),
        'auth' => ['user' => $authedUser],
        'lecturers' => Lecturer::with('user')->get()
      ]);
    }
    
    public function update(Request $request, User $user)
    {
      try {
        $user = $request->user();
        
        if ($request->hasFile('avatar')) {
          $avatar = $request->file('avatar');
          
          $user->update([
            'avatar' => $avatar->store('avatars', 'public'),
          ]);
        }
        
        $user->update([
          'full_name' => $request->full_name,
          'email' => $request->email,
          'id_number' => $request->id_number,
          'phone_number' => $request->phone_number,
        ]);
        
        if ($user->role === 'Mahasiswa') {
          $user->student()->update([
            'academic_year' => $request->academic_year,
            'supervisor_id' => $request->supervisor_id,
          ]);
        }
        
        return Redirect::to('/profile')->with('meta', [
          'status' => true,
          'title' => 'Berhasil memperbarui profil',
          'message' => 'Profil Anda berhasil diperbarui!'
        ]);
      } catch (Exception $e) {
        return Redirect::back()->with('meta', [
          'status' => false,
          'title' => 'Gagal memperbarui profil',
          'message' => $e->getMessage()
        ]);
      }
    }
  }
