<?php

namespace App\Http\Controllers;

use App\Models\Message;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
    //
    public function setContact(Request $request){

        $validator = validator::make($request->all(), [
            "lastname" => 'required|alpha:ascii',
            "firstname" => 'required|alpha:ascii',
            "phone" => 'required', 
            "email" => 'required|email:rfc,dns',
            "message" => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 500,
                'errors' => $validator -> Errors($validator),
                'message' => 'missing or incorrect value'
            ]);
        } else {
            try {

                $message = Message::create([
                    'lastname' => $validator->valid()["lastname"],
                    'firstname' => $validator->valid()["firstname"],
                    'phone' => $validator->valid()["phone"],
                    'email' => $validator->valid()["email"],
                    'text' => $validator->valid()["message"]
                ]);

                return response()->json([
                    'status' => 200,
                    'message' => "recorded message"
                ]);
                
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => 500,
                    'errors' => $th
                ]);
            }
        }

    }
}
