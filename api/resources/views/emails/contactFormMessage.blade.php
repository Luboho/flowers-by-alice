@component('mail::message')
<h2> Message from website visitor.</h2>

<b>Contact details: </b>
<br>
<b>Name: </b> {{ $data['name'] }}
<br>
<b>Surname: </b> {{ $data['surname'] }}
<br>
<b>Email: </b> {{ $data['email'] }}
<br>
<b>Phone: </b> {{ $data['phone'] }}
<br>


<b>Message: </b>
<br>
{{ $data['message'] }}

<hr>

<br>
{{ config('app.name') }}
@endcomponent
