/* ---------------------------------------------------------------------------------
  ライブラリ
--------------------------------------------------------------------------------- */
import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
import './../style/common/index.scss'
import 'animate.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@fortawesome/fontawesome-free/css/all.css'

/* ---------------------------------------------------------------------------------
  コンポーネント
--------------------------------------------------------------------------------- */
import { awatiFunction } from './../compornent/common/AwatiFunction'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
window.addEventListener('DOMContentLoaded', function () {
  await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 500)
  /* if (window.matchMedia('(min-width: 576px)').matches) {
    MainPC()
  } else {
    MainSP()
  }
  */
})
