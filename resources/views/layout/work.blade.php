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

    <link rel="stylesheet" href={{ asset('assets/common/css/shared/substyle.min.css', $is_production) }}>
    {{$orign_stylesheet}}
</head>

<body class="site-container">

    @component('components.header')
    @endcomponent

    <article>
        <div class="site-container__box">
            <h1
                class="site-container__box__title animate__animated js-animate-fade"
                data-inverted="{{ $page_title }}">
                @php
                    $page_title_array = mb_str_split($page_title);
                @endphp
                @foreach ( $page_title_array as $word)
                    <span class="site-container__box__title__span delay{{ $loop->index + 1 }} animate__animated js-animate-fade">
                        {{ $word }}
                    </span>
                @endforeach
            </h1>

            <section>
                <div class="container">
                    {{$content}}
                </div>
            </section>

            <section class="site-container__commentary">
                {{$commentary}}
            </section>
            <section class="site-container__link-box">
                <div class="container">
                    {{$link_button}}
                    <ul class="site-container__link-box__note">
                        <li><span>※</span><div>更新・または削除されている可能性があります。</div></li>
                    </ul>
                </div>
            </section>
        </div>
    </article>

    @component('components.footer')
    @endcomponent

    <script src={{ asset('assets/common/js/shared/index.min.js', $is_production) }}></script>
    {{$orign_script}}
</body>

</html>
