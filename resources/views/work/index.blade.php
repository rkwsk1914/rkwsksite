@component('layout.category')
    @slot('title')
        works
    @endslot

    @slot('description')
        works
    @endslot

    @slot('orign_stylesheet')
        <link rel="stylesheet" href={{ asset('assets/category/work/css/shared/substyle.min.css', $is_production) }}>
    @endslot

    @slot('page_title')
        works
    @endslot

    @slot('content')
        <ul class="work-card-list">
            @component('components.worklist')
            @endcomponent
        </ul>
    @endslot

    @slot('orign_script')
        <script src={{ asset('assets/category/work/js/shared/index.min.js', $is_production) }}></script>
    @endslot
@endcomponent
