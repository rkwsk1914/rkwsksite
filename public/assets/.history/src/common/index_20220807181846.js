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
import { ControllerNavMenu } from './compornent/ControllerNavMenu'
import { ContollerAnimateCss } from './compornent/ContollerAnimateCss'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
const main = async () => {
  const contollerAnimateCss = new ContollerAnimateCss()

  await awatiFunction(contollerAnimateCss.showTitle.bind(contollerAnimateCss), 0, 'site-container__box__title')
  await contollerAnimateCss.doAnimate('.nav-menu', 'animate__fadeInDown', 500)
}

window.addEventListener('DOMContentLoaded', function () {
  main()
  if (window.matchMedia('(min-width: 576px)').matches) {
    await awatiFunction(function () {
      $('.nav-menu').addClass('show')
    }, 0)
    await awatiFunction(this.doFadeInDown.bind(this), 0, 'nav-menu')
  } else {
    MainSP()
  }
  
})
