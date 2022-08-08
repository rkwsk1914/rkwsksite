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
import { awatiFunction } from './compornent/AwatiFunction'
import { ContollerAnimateCss } from './compornent/ContollerAnimateCss'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
const main = async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
  await contollerAnimateCss.doAnimate('.nav-menu', 'animate__fadeInDown', 500)
  await awatiFunction(function () {
    const spans = document.getElementsByClassName('sub-visual__title__strong__span')
    const spansKey = Object.keys(spans)
    for (let index = 1; index <= spansKey.length; index++) {
      const span = document.getElementsByClassName(`site-container__article__title__span delay${index}`)
      $(span).removeClass('animate__fadeOutDown')
      $(span).addClass('animate__fadeInUp')
    }
  }, 50)
}

window.addEventListener('DOMContentLoaded', function () {
  main()
  /* if (window.matchMedia('(min-width: 576px)').matches) {
    MainPC()
  } else {
    MainSP()
  }
  */
})
