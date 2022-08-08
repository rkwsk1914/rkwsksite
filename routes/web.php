<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('work', 'App\Http\Controllers\WorkController@index');
Route::get('work', function () { return view('work/index'); });
Route::get('profile', function () { return view('profile/index'); });
Route::get('test', function () { return view('/test/index'); });

Route::get('work/test', function () { return view('work/test/index'); });
Route::get('work/work1', function () { return view('work/work1/index'); });
Route::get('work/work2', function () { return view('work/work2/index'); });


Route::get('/', function () { return view('index'); });
