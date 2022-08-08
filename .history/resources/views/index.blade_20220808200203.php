<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <title>Ryo Kawasaki</title>
    <meta name="description" content="Ryo Kawasaki portfolio site">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href={{ asset('assets/top/css/shared/substyle.min.css', $is_production) }}>
</head>

<body class="index-container animate__animated js-animate-fade">
    <header>
        <button class="nav-menu-button">menu</button>
        <nav class="nav-menu animate__animated js-animate-fade">
            <ul class="nav-menu__content">
                <li class="nav-menu__content__item">
                    <a class="nav-menu__content__item__link-logo" href="#">
                        <span class="nav-menu__logo">
                            <strong>Ryo Kawasaki</strong>
                            <small>portfolio site</small>
                        </span>
                    </a>
                </li>
                <li class="nav-menu__content__item">
                    <a class="nav-menu__content__item__link" href="#">Top</a>
                </li>
                <li class="nav-menu__content__item">
                    <a class="nav-menu__content__item__link u-s-d-n" href="#section-works">Works</a>
                    <a class="nav-menu__content__item__link u-p-d-n" data-href="/work" href="/work">Works</a>
                </li>
                <li class="nav-menu__content__item">
                    <a class="nav-menu__content__item__link u-s-d-n" href="#section-profile">Profile</a>
                    <a class="nav-menu__content__item__link u-p-d-n" data-href="/profile" href="/profile">Profile</a>
                </li>
            </ul>
        </nav>
        <button class="nav-top animate__animated js-animate-fade">
            <span>
                <i class="fa-solid fa-arrow-up"></i><br>
                TOP
            </span>
        </button>
    </header>

    <div class="main-container" data-scroll-container>
        <article>
            <h1 class="main-visual" data-scroll-section>
                <span class="main-visual__text animate__animated js-animate-fade">
                    <strong>Ryo Kawasaki</strong>
                    <small>portfolio site</small>
                </span>
                <div class="main-visual__image"></div>
            </h1>

            <section class="sub-visual" id="sub-visual" data-scroll-section>
                <p class="sub-visual__title" data-scroll data-scroll-repeat data-scroll-call="welcome">
                    <strong class="sub-visual__title__strong">
                        <span class="sub-visual__title__strong__span delay1 animate__animated js-animate-fade">W</span>
                        <span class="sub-visual__title__strong__span delay2 animate__animated js-animate-fade">e</span>
                        <span class="sub-visual__title__strong__span delay3 animate__animated js-animate-fade">l</span>
                        <span class="sub-visual__title__strong__span delay4 animate__animated js-animate-fade">c</span>
                        <span class="sub-visual__title__strong__span delay5 animate__animated js-animate-fade">o</span>
                        <span class="sub-visual__title__strong__span delay6 animate__animated js-animate-fade">m</span>
                        <span class="sub-visual__title__strong__span delay7 animate__animated js-animate-fade">e</span>
                    </strong><br>
                    my portfolio site
                </p>
                <div class="sub-visual__image">
                    <img src={{ asset('assets/top/img/shared/sub-visual.jpg', $is_production) }} alt="">
                </div>
                <ul class="sub-visual__my-skils-icons animate__animated js-animate-fade">
                    <li><i class="fa-solid fa-code"></i></li>
                    <li><i class="fa-brands fa-html5"></i></li>
                    <li><i class="fa-brands fa-css3"></i></li>
                    <li><i class="fa-brands fa-js"></i></li>
                    <li><i class="fa-brands fa-node"></i></li>
                    <li><i class="fa-brands fa-sass"></i></li>
                    <li><i class="fa-brands fa-react"></i></li>
                    <li><i class="fa-brands fa-php"></i></li>
                    <li><i class="fa-brands fa-laravel"></i></li>
                    <li><i class="fa-brands fa-docker"></i></li>
                    <li><i class="fa-brands fa-python"></i></li>
                    <li><i class="fa-brands fa-apple"></i></li>
                    <li><i class="fa-brands fa-windows"></i></li>
                    <li><i class="fa-brands fa-chrome"></i></li>
                    <li><i class="fa-brands fa-safari"></i></li>
                    <li><i class="fa-brands fa-edge"></i></li>
                </ul>
            </section>

            <section class="index-section-works" id="section-works" data-scroll-section
                data-scroll-section-id="section-works">
                <h2 class="index-section-works__title animate__animated js-animate-fade" data-inverted="Works">
                    <span class="index-section-works__title__span delay1 animate__animated js-animate-fade">W</span>
                    <span class="index-section-works__title__span delay2 animate__animated js-animate-fade">o</span>
                    <span class="index-section-works__title__span delay3 animate__animated js-animate-fade">r</span>
                    <span class="index-section-works__title__span delay4 animate__animated js-animate-fade">k</span>
                    <span class="index-section-works__title__span delay5 animate__animated js-animate-fade">s</span>
                </h2>
                <section class="container" data-scroll data-scroll-repeat data-scroll-call="works">
                    <a class="index-section-works__button animate__animated js-animate-fade" href="/work">Detail</a>
                    <ul class="works-list animate__animated js-animate-fade">
                        @component('components.worklist')
                        @endcomponent
                    </ul>
                </section>
            </section>

            <section class="index-section-profile" id="section-profile" data-scroll-section
                data-scroll-section-id="section-profile">
                <h2 class="index-section-profile__title animate__animated js-animate-fade" data-inverted="Profile">
                    <span class="index-section-profile__title__span delay1 animate__animated js-animate-fade">P</span>
                    <span class="index-section-profile__title__span delay2 animate__animated js-animate-fade">r</span>
                    <span class="index-section-profile__title__span delay3 animate__animated js-animate-fade">o</span>
                    <span class="index-section-profile__title__span delay4 animate__animated js-animate-fade">f</span>
                    <span class="index-section-profile__title__span delay5 animate__animated js-animate-fade">i</span>
                    <span class="index-section-profile__title__span delay6 animate__animated js-animate-fade">l</span>
                    <span class="index-section-profile__title__span delay7 animate__animated js-animate-fade">e</span>
                </h2>
                <section class="container profile-section" data-scroll data-scroll-repeat data-scroll-call="profile">
                    <div class="profile-section__image-box animate__animated js-animate-fade">
                        <img src={{ asset('assets/top/img/shared/pic-me.jpg', $is_production) }} alt="">
                    </div>
                    <div class="profile-section__link-box animate__animated js-animate-fade ">
                        <a class="profile-section__link-box__button" href="/profile">Detail</a>
                        <h3>川﨑 亮 <small>Kawasaki Ryo</small></h3>
                        <p>
                            2022年現在 Web制作会社にて、フロントエンドエンジニアとして活動中。
                        </p>
                        <p>
                            10名規模のコーディングチームのサブリーダーを担当。<br>
                            工数見積・要件定義・詳細設計・スタッフアサイン調整などのマネジメント業務に加え、<br>
                            マークアップやフロントエンドの動的コンテンツなどのコーディング業務も遂行。
                        </p>
                        <p>
                            主な実装経験は、<br>
                            Ajax+JSONを用いた非同期処理による店舗一覧の検索と表示。<br>
                            JavaScript・React・TypeScriptを用いて、シュミレータやタイムセールバナーの実装。<br>
                            新規顧客のECサイト立ち上げで、Shopifyにおける独自デザインの実装。<br>
                        </p>
                        <a class="profile-section__link-box__button"
                            href="https://github.com/rkwsk1914?tab=repositories" target="_blank"
                            rel="noopener noreferrer">GitHub <i class="fa-brands fa-github"></i></a>
                    </div>
                </section>
            </section>
        </article>


        <footer id="footer" data-scroll-section data-scroll-section-id="footer">
            <h2>
                <strong>Ryo Kawasaki</strong>
                <small>portfolio site</small>
            </h2>
        </footer>
    </div>

    <script src={{ asset('assets/top/js/shared/index.min.js', $is_production) }}></script>
</body>

</html>
