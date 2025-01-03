<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/', fn () => 'Alligator api');

Route::resource('files', App\Http\Controllers\FilesController::class);
