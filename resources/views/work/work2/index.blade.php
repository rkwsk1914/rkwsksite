@component('layout.work')
    @slot('title')
        work2
    @endslot

    @slot('description')
        React+TypeScriptによるタイムセールバナー
    @endslot

    @slot('orign_stylesheet')
        <!--<link rel="stylesheet" href={{ asset('assets/work/work2/css/shared/substyle.css', $is_production) }}>-->
        <link rel="stylesheet" href={{ asset('assets/work/work2/css/shared/utility.css', $is_production) }}>
        <style>
            .w100 {
                width: 100%;
                height: auto;
            }
            .container {
                padding: 0!important;
                max-width: 100%!important;
            }
            .site-container__link-box,
            .site-container__commentary__content {
                max-width: 950px;
                margin: 0 auto;
                box-sizing: border-box;
            }
            @media(max-width: 992px) {
                .site-container__link-box,
                .site-container__commentary__content {
                    max-width: 780px;
                }
            }
            @media(max-width: 576px) {
                .site-container__commentary .container {
                    padding: 0 15px!important;
                }
            }
            .max950 {
                max-width: 950px;
                margin: 0 auto;
            }
            @media(max-width: 992px) {
                .max950 {
                    max-width: 780px;
                }
            }
        </style>
    @endslot

    @slot('page_title')
        work2
    @endslot

    @slot('content')
        <div id="timesale-top-area" class="u-mt-80"></div>
        <div id="timesale-image-banner" class="u-mt-80 max950"></div>
        <div id="timesale-float-diplay" class="u-mt-80 max950"></div>
    @endslot

    @slot('commentary')
        <div class="container">
            <div class="site-container__commentary__content">
                <h2>React+TypeScriptによるタイムセールバナー</h2>
                <p>
                    TypeScript + React + CSSコンポーネントを用いて実装。
                </p>
                <p>
                    複数の特設ページで、かつ時間設定は各々のページで設定できるようにと、<br>
                    タイムセール表示をコンポーネント化して実装。
                </p>
                <p>
                    現在時間から次のタイムセールの時間までカウントダウン表示する。<br>
                    また、タイムセール中の場合は終了時刻までカウントダウン表示するという仕様。
                </p>
            </div>
        </div>
    @endslot

    @slot('link_button')
        <a href="https://www.softbank.jp/internet/special/air/" class="link-button" target="_blank" rel="noopener noreferrer">実際のページ</a>
        <a href="/work" class="back-button">もどる</a>
    @endslot

    @slot('orign_script')
        <script src={{ asset('assets/work/work2/js/shared/timesale.js', $is_production) }} defer></script>
    @endslot
@endcomponent
