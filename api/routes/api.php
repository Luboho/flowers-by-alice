<?php

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\SubscriberController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/images', [ImageController::class, 'index']);
Route::get('/not-paginated-items', [ImageController::class, 'getNotPaginatedList']);

Route::post('/subscribe', [SubscriberController::class, 'store']);

Route::post('/contact-us', [MessageController::class, 'store']);

