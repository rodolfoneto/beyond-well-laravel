<?php

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

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::inertia('admin', 'admin')->name('admin');
});

require __DIR__.'/settings.php';
