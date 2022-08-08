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
import './../../style/category/profile/index.scss'
import 'animate.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@fortawesome/fontawesome-free/css/all.css'

/* ---------------------------------------------------------------------------------
  コンポーネント
--------------------------------------------------------------------------------- */
import { awatiFunction } from './../../common/compornent/AwatiFunction'
import { ContollerAnimateCss } from './../../common/compornent/ContollerAnimateCss'
import { ControllerWallPointAnimate } from './../../common/compornent/ControllerWallPointAnimate'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
const main = async () => {
  const controllerWallPointAnimate = new ControllerWallPointAnimate()
  const contollerAnimateCss = new ContollerAnimateCss()

  await contollerAnimateCss.doAnimate('.first-message', 'animate__fadeIn', 3000)
  await awatiFunction(controllerWallPointAnimate.setProfile.bind(controllerWallPointAnimate), 0)
  await awatiFunction(controllerWallPointAnimate.setUpDown.bind(controllerWallPointAnimate), 0, '#career', '.career-title')
  await awatiFunction(controllerWallPointAnimate.setUpDown.bind(controllerWallPointAnimate), 0, '#career', '.career-section')
  await awatiFunction(controllerWallPointAnimate.setUpDown.bind(controllerWallPointAnimate), 0, '#skill-set', '.skill-set-title')
  await awatiFunction(controllerWallPointAnimate.setUpDown.bind(controllerWallPointAnimate), 0, '#skill-set', '.skill-set-section')
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