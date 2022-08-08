@component('layout.work')

@slot('title')
test
@endslot

@slot('description')
test
@endslot

@slot('orign_stylesheet')
<link rel="stylesheet" href={{ asset('assets/work/test/css/shared/substyle.css', $is_production) }}>
@endslot

@slot('page_title')
test
@endslot

@slot('content')
<section>

</section>
@endslot

@slot('commentary')
<div class="container">
    <div class="site-container__commentary__content">
        <h2>解説</h2>
        <p>
            解説
        </p>
    </div>
</div>
@endslot

@slot('link_button')
<a href="/" class="link-button">実際のページ</a>
@endslot

@slot('orign_script')
<script src={{ asset('assets/work/test/js/shared/index.js', $is_production) }} defer></script>
@endslot

@endcomponent