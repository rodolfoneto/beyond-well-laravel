<?php

namespace App\Http\Controllers;

use App\Mail\AppointmentCreated;
use App\Models\Appointment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class AppointmentController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('book-appointment');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'service' => ['required', 'string', 'max:100'],
            'population' => ['nullable', 'string', 'max:50'],
            'preferred_date' => ['required', 'date', 'after_or_equal:today'],
            'preferred_time' => ['required', 'date_format:H:i'],
            'notes' => ['nullable', 'string', 'max:2000'],
        ]);

        $appointment = Appointment::create($validated);

        Mail::to('info@beyond-well.ca')->send(new AppointmentCreated($appointment));

        return redirect()
            ->route('book-appointment.create')
            ->with('success', 'Your appointment request has been received. We will contact you soon.');
    }
}
