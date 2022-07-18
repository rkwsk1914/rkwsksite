<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $is_production = env('APP_ENV') === 'production' ? true : false;
        if (request()->isSecure()) {
            \URL::forceScheme('https');
        }
    }
}
