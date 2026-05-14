<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class AppointmentController extends Controller
{
    public function index(Request $request): Response
    {
        $status = $request->string('status')->toString();

        $appointments = Appointment::query()
            ->when(in_array($status, Appointment::STATUSES, true), fn ($query) => $query->where('status', $status))
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('admin/appointments/index', [
            'appointments' => $appointments,
            'filters' => [
                'status' => $status ?: null,
            ],
            'statuses' => Appointment::STATUSES,
        ]);
    }

    public function show(Appointment $appointment): Response
    {
        return Inertia::render('admin/appointments/show', [
            'appointment' => $appointment,
            'statuses' => Appointment::STATUSES,
        ]);
    }

    public function update(Request $request, Appointment $appointment): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', Rule::in(Appointment::STATUSES)],
        ]);

        $appointment->update($validated);

        return back()->with('success', 'Appointment updated.');
    }

    public function destroy(Appointment $appointment): RedirectResponse
    {
        $appointment->delete();

        return redirect()
            ->route('admin.appointments.index')
            ->with('success', 'Appointment deleted.');
    }
}
