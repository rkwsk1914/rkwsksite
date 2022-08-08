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

  await awatiFunction(contollerAnimateCss.showTitle.bind(contollerAnimateCss), 0, 'site-container__box__title')


  await awatiFunction(function () {
    $('.site-container__box__title').removeClass('animate__fadeOut')
    $('.site-container__box__title').addClass('animate__fadeIn')
  }, 0)

  await contollerAnimateCss.doAnimate('.nav-menu', 'animate__fadeInDown', 500)
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
