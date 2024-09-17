<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // login
    public function login(Request $request) {
        
        // verifie les criteres des valeurs
        $validator = validator::make($request->all(), [
            "email" => 'required|email:rfc,dns',
            "password" => 'required'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'status' => 500,
                'errors' => $validator->Errors($validator),
                'message' => 'Missing or incorrect value'
            ]);

        } else {
            try {
                
                // cherche l'utilisateur
                $user = User::where('email', $validator->valid()['email'])
                    ->get();
                    
                if (count($user) != 0) {
                    
                    // verifie que le mot de passe correspond
                    if (Hash::check($validator->valid()['password'], $user[0]->password)) {
                        
                        $token = $user[0]->createToken('token name');
                        
                        return response()->json([
                            "status" => 200,
                            "message" => "connexion reussi !",
                            "token" => $token->plainTextToken,
                            "link" => "/connectedHome"
                        ]);

                    } else {
                        return response()->json([
                            "status" => 500,
                            "message" => "le mot de passe ne correspond pas",
                        ]);
                    }
                    
                } else {
                    return response()->json([
                        "status" => 404,
                        "message" => "aucun utilisateur trouvé selon email",
                    ]);
                }
                
                
            } catch (\Throwable $th) {
                return response()->json([
                    "status" => 500,
                    "message" => "Echec de connexion",
                    "errors" => $th
                ]);
            }
        }
        

    }
}
