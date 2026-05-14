<?php

use App\Http\Controllers\Admin\AppointmentController as AdminAppointmentController;
use App\Http\Controllers\AppointmentController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::inertia('/about-us', 'about-us')->name('about-us');
Route::inertia('/our-team', 'our-team')->name('our-team');
Route::inertia('/services', 'services')->name('services');
Route::inertia('/indigenous-population', 'indigenous-population')->name('indigenous-population');
Route::inertia('/general-population', 'general-population')->name('general-population');
Route::inertia('/contact', 'contact')->name('contact');

Route::get('/book-appointment', [AppointmentController::class, 'create'])->name('book-appointment.create');
Route::post('/book-appointment', [AppointmentController::class, 'store'])->name('book-appointment.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->as('admin.')->group(function () {
    Route::inertia('/', 'admin')->name('home');

    Route::get('appointments', [AdminAppointmentController::class, 'index'])->name('appointments.index');
    Route::get('appointments/{appointment}', [AdminAppointmentController::class, 'show'])->name('appointments.show');
    Route::patch('appointments/{appointment}', [AdminAppointmentController::class, 'update'])->name('appointments.update');
    Route::delete('appointments/{appointment}', [AdminAppointmentController::class, 'destroy'])->name('appointments.destroy');
});

require __DIR__.'/settings.php';
