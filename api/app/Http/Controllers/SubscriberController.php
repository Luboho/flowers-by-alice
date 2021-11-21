<?php

namespace App\Http\Controllers;

use App\Mail\NewSubscribe;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class SubscriberController extends Controller
{
    public function store(Request $request, Subscriber $subscriber)
    {
        $subscribersEmail = request()->validate(['email' => ['required', 'email', 'unique:subscribers']]);

        $newSubsriber = $subscriber->create($subscribersEmail);

        if($newSubsriber) {
            Mail::to(env('MAIL_FROM_ADDRESS'))->send(new NewSubscribe($subscribersEmail));

            return response()
                    ->json(['data' => $newSubsriber])
                    ->setStatusCode(Response::HTTP_CREATED);
        } else {
            return response()
                    ->json(['data' => ['error' => 'Something wrong, please try subscribe later.']])
                    ->setStatusCode(Response::HTTP_BAD_REQUEST);
        }

    }
}
