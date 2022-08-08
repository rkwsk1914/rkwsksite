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

import { MainPC } from './p/index'
import { MainSP } from './s/index'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
const main = async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
}

window.addEventListener('DOMContentLoaded', function () {
  main()
  if (window.matchMedia('(min-width: 576px)').matches) {
    MainPC()
  } else {
    MainSP()
  }
})
