<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json($users, 200);
    }
    public function userProfile() {
        dd(auth()->user());
        return response()->json(auth()->user());
    }
    public function userUpdate($id, Request $request) {
        $user = User::find($id);
        dd($request);
        $user->update($request->all());
        return response()->json('User updated!');
    }
}
