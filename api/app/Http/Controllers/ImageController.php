<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\Http\Resources\ImageResource;

class ImageController extends Controller
{
    public function index(Image $image, Request $request) {
        $category = request('category');
        $page = intval($request->input('page'));

        // Get All Items | Paginated
        if($request->input('category') == 'all') {
            $images = Image::select('*')->paginate(12, ['*'], 'page', $page);
        } else {
        // Get Items by Category | Paginated
            $images = Image::select('*')->where('category', $category)->paginate(12, ['*'], 'page', $page);
        }

        if($images) {
            return ImageResource::collection($images)->response();
        } else {
            return response()->json(['data' => [
                'error' => 'Žiadne obrázky'
            ]]);
        }
    }

    public function getNotPaginatedList(Image $image, Request $request) {
        $notPaginatedList = Image::get()->collect();

        if($notPaginatedList) {
            return ImageResource::collection($notPaginatedList)->response();
        } else {
            return response()->json(['data' => [
                'error' => 'Žiadne obrázky'
            ]]);
        }

    }
}
