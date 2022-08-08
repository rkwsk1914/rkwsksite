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
import './style/common.scss'
import 'animate.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@fortawesome/fontawesome-free/css/all.css'

/* ---------------------------------------------------------------------------------
  コンポーネント
--------------------------------------------------------------------------------- */
import { ContollerAnimateCss } from './compornent/ContollerAnimateCss'
import { ControllerGSAPandLocomotiveP } from './compornent/p/ControllerGSAPandLocomotive'
import { ControllerGSAPandLocomotiveS } from './compornent/s/ControllerGSAPandLocomotive'
import { awatiFunction } from './compornent/AwatiFunction'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
window.addEventListener('DOMContentLoaded', function () {
  if (window.matchMedia( '(min-width: 769px)' ).matches) {

  } else {

  }
}
