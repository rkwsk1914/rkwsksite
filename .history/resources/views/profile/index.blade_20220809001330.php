@component('layout.category')

@slot('title')
Profile
@endslot

@slot('description')
Profile
@endslot

@slot('orign_stylesheet')
<link rel="stylesheet" href={{ asset('assets/category/profile/css/shared/substyle.min.css', $is_production) }}>
@endslot

@slot('page_title')
Profile
@endslot

@slot('content')
<div class="first-message animate__animated js-animate-fade">
  <p>
  どんなことを実現したいのか、常に<span>ゴール</span>を大切にして、日々Web制作に取り組んでいます。
  </p>
  <p>
  どんなスキルも<span>達成</span>あってこそ意味があると考えております。
  </p>
  <p>
  「欲しい」「実現したい」そんな<span>想い</span>に最適解を出せるエンジニアとして<br>
  みなさまのお力になれれば幸いです。
  </p>
</div>

<section id="first-view" class="first-view">
  <div class="first-view__left animate__animated js-animate-fade">
    <img src={{ asset('assets/top/img/shared/pic-me.webp', $is_production) }} alt="">
  </div>
  <div class="first-view__right animate__animated js-animate-fade">
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
    <p>
      その他、<br>
      Electron + Reactでデスクトップアプリの開発。<br>
      Pyhtonによる業務自動化ツールの作成。<br>
      ruby on Railsによるアプリケーション開発。<br>
      rails APIの開発。<br>
      Docker + Laravelでブログサイトの開発。<br>
      WordPressで独自デザインの実装。
    </p>
  </div>
</section>

<h2 id="career" class="career-title animate__animated js-animate-fade">Career</h2>
<section class="career-section animate__animated js-animate-fade">
  <table>
    <colgroup class="background-table-col">
      <col>
      <col>
    </colgroup>
    <tbody>
      <tr>
        <td>2019年3月</td>
        <td>中央大学 経済学部経済学科 卒業</td>
      </tr>
      <tr>
        <td>2019年4月</td>
        <td>
          株式会社富士ソフト 入社<br>
          システム事業本部・本社配属。<br>
        </td>
      </tr>
      <tr>
        <td>2020年9月〜2022年現在</td>
        <td>株式会社モードツー 入社</td>
      </tr>
    </tbody>
  </table>
</section>

<h2 id="skill-set" class="skill-set-title animate__animated js-animate-fade">Skill Sets</h2>
<section class="skill-set-section animate__animated js-animate-fade">
  <p>使用可能なツールおよび修得スキル</p>
  <table>
    <colgroup class="skill-table-col">
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th>カテゴリー</th>
        <th>言語、ツール、概要</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>フロントエンド</th>
        <td>HTML5, CSS3, Sass, SCSS, JavaScript, jQuery, Vue, React, TypeScript, Google Apps Script</td>
      </tr>
      <tr>
        <th>バックエンド</th>
        <td>Ruby, Ruby on Rails, PHP, Laravel, Pyhon3, MySQL</td>
      </tr>
      <tr>
        <th>Develop</th>
        <td>Docker, webpack, gulp, virtualbox</td>
      </tr>
      <tr>
        <th>バージョン管理ツール</th>
        <td>Git, npm, Subversion, pip, RubyGems</td>
      </tr>
      <tr>
        <th>業務ツール</th>
        <td>Windows PowerShell, Macターミナル, Excel, Google スプレッドシート, Google Meets, Zoom, Chatwork, Backlog, Slack</td>
      </tr>
      <tr>
        <th>WEB制作ツール</th>
        <td>Photoshop, Illustrator, Adobe XD, Visual Studio Code</td>
      </tr>
      <tr>
        <th>OS</th>
        <td>Winodws, MacOS, Linux</td>
      </tr>
    </tbody>
  </table>
</section>
@endslot

@slot('orign_script')
<script src={{ asset('assets/category/profile/js/shared/index.min.js', $is_production) }}></script>
@endslot

@endcomponent