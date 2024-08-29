<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\MessageController;

/* Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum'); */

Route::get('/homePicture', [ProjectController::class, 'getHomePicture']);
Route::get('/allPictures', [ProjectController::class, 'getFirstPictureProject']);
Route::get('/specificData/{project_id}', [ProjectController::class, 'getFewDataProject']);

Route::post('/contact', [MessageController::class, 'setContact']);