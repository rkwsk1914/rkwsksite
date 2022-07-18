@component('layout.work')

@slot('title')
test
@endslot

@slot('description')
test
@endslot

@slot('orign_stylesheet')
<link rel="stylesheet" href={{ asset('assets/work/work1/css/shared/cms-style.css', $is_production) }}>
<link rel="stylesheet" href={{ asset('assets/work/work1/css/shared/substyle.css', $is_production) }}>
@endslot

@slot('page_title')
テスト
@endslot

@slot('content')
<div class="row">
    <div class="box-bnr_contain box-simulator_contain">
        <div class="box-simulator_contain__first">
            <span class="box-simulator_contain__first__arrow-icon js-arrow-animation"></span>
            <p class="box-simulator_contain__first__main-title u-font-murecho">
                PayPayポイント<br>
                どれだけもらえる？
            </p>
            <span class="box-simulator_contain__first__arrow-icon js-arrow-animation"></span>
        </div>
        <div class="box-simulator_contain__second">
            <p class="parallelogram-title u-font-murecho"><span>10秒</span>でおトク額をチェック！</p>
            <h3 class="box-simulator_contain__second__title u-font-murecho">ざっくり<br class="u-pc-d-n">シミュレーター
            </h3>
            <div id="simulator"></div>
            <ul class="layout-bullet">
                <li class="layout-bullet-item">PayPayポイントを受け取るには、「PayPay」アプリケーション内でのアカウント連携が必要です。</li>
                <li class="layout-bullet-item">PayPayポイントは出⾦・譲渡不可。PayPay／PayPayカード公式ストアでもご利用いただけます。</li>
            </ul>
        </div>
    </div>
</div>
@endslot

@slot('orign_script')
<script src={{ asset('assets/common/js/common.js', $is_production) }}></script>
<script src={{ asset('assets/work/work1/js/shared/index.js', $is_production) }} defer></script>
<script src={{ asset('assets/work/work1/js/p/arrow-animation.js', $is_production) }} type="text/javascript" defer
    media="screen and (min-width: 576px)"></script>
<script src={{ asset('assets/work/work1/js/s/arrow-animation.js', $is_production) }} type="text/javascript" defer
    media="screen and (m-width: 576px)"></script>
@endslot

@endcomponent