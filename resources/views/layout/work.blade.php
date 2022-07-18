<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    @component('components.meta')
        @slot('title')
        {{ $title }}
        @endslot

        @slot('description')
        {{ $description }}
        @endslot
    @endcomponent

    <link rel="stylesheet" href={{ asset('assets/common/css/common.css') }}>
    {{$orign_stylesheet}}
</head>

<body>

    @component('components.header')
    @endcomponent

    <article class="py-5">
        <h1 class="text-center h1">
            {{ $page_title }}
        </h1>

        <section class="container">
            {{$content}}
        </section>

    {{$orign_script}}

    @component('components.footer')
    @endcomponent
</body>

</html>
