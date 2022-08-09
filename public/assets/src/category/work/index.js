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
import './../../style/category/work/index.scss'
import 'animate.css'
import '@fortawesome/fontawesome-free/css/all.css'

/* ---------------------------------------------------------------------------------
  コンポーネント
--------------------------------------------------------------------------------- */
// import { awatiFunction } from './../../common/compornent/AwatiFunction'
import { ContollerAnimateCss } from './../../common/compornent/ContollerAnimateCss'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
const main = async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
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
