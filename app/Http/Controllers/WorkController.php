<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Work;

class WorkController extends Controller
{
    public function index()
    {
        return view('work/index');
    }
}
