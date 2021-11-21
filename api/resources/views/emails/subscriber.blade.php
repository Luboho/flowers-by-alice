@component('mail::message')
<h2>New Subscriber has asign</h2>

<br>
You have new Subscriber
<br>

<b>Email:</b> {{ $data['email']  }}
<br>

{{ config('app.name') }}
@endcomponent
