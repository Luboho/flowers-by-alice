<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use App\Mail\ContactFormMessage;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class MessageController extends Controller
{
    public function store(Request $request, Message $message)
    {
        $data = request()->validate([
            'name' => ['nullable', 'string', 'max:30'],
            'surname' => ['nullable', 'string', 'max:30'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable', 'regex:/^[+]*[0-9]{9,13}/', 'min:9', 'max:13'],
            'message' => ['required', 'string', 'max:600']
        ]);

        $newMessage = Message::create($data);

        // Message to Email
        if($newMessage) {
            Mail::to(env('MAIL_FROM_ADDRESS'))->send(new ContactFormMessage($newMessage));
            return response()
                    ->json(['data' => ['success' => 'Thank you for your message.' ]])
                    ->setStatusCode(Response::HTTP_CREATED);
        } else {
            return response()
                ->json(['data' => ['error' => 'Správu sa nepodarilo odoslať. Prosím skúste to neskôr.']])
                ->setStatusCode(Response::HTTP_BAD_REQUEST);
        }
    }
}
