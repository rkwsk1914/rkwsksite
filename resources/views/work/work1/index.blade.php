@component('layout.work')
    @slot('title')
        work1
    @endslot

    @slot('description')
        Atomicデザイン+React+Scssによる料金シュミレータ
    @endslot

    @slot('orign_stylesheet')
        <link rel="stylesheet" href={{ asset('assets/work/work1/css/shared/substyle.css', $is_production) }}>
    @endslot

    @slot('page_title')
        work1
    @endslot

    @slot('content')
        <section>
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
        </section>
    @endslot

    @slot('commentary')
        <div class="container">
            <div class="site-container__commentary__content">
                <h2>Atomicデザイン+React+Scssによる料金シュミレータ</h2>
                <p>
                    React + Scssを用いて実装。
                </p>
                <p>
                    ステップ画面のラジオボタンやチェックボックスを選択すると、<br>
                    最後の結果画面の関連するラジオボタンやチェックボックスが自動選択され、<br>
                    いくらおトクになるのか金額を表示するという仕様。
                </p>
                <P>
                    段階的に更新していく案件だったため、ATOMICデザイン設計を導入し、<br>
                    小さなコンポーネントを組み合わせていくように開発。<br>
                </P>
            </div>
        </div>
    @endslot

    @slot('link_button')
        <a href="https://www.softbank.jp/mobile/special/why-softbank/" class="link-button" target="_blank" rel="noopener noreferrer">実際のページ</a>
        <a href="/work" class="back-button">もどる</a>
    @endslot

    @slot('orign_script')
        <script src={{ asset('assets/work/work1/js/shared/index.js', $is_production) }} defer></script>
        <script src={{ asset('assets/work/work1/js/p/arrow-animation.js', $is_production) }} type="text/javascript" defer
            media="screen and (min-width: 576px)"></script>
        <script src={{ asset('assets/work/work1/js/s/arrow-animation.js', $is_production) }} type="text/javascript" defer
            media="screen and (m-width: 576px)"></script>
    @endslot
@endcomponent
