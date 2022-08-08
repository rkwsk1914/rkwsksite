/* ---------------------------------------------------------------------------------
  ライブラリ
--------------------------------------------------------------------------------- */
import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// import 'bootstrap'
import LocomotiveScroll from 'locomotive-scroll'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PixiPlugin } from 'gsap/PixiPlugin.js'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

import 'animate.css'

import 'waypoints/lib/noframework.waypoints'

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
import './style/common.scss'

/* ---------------------------------------------------------------------------------
  コンポーネント
--------------------------------------------------------------------------------- */
import { ContollerAnimateCss } from './compornent/ContollerAnimateCss'
import { ControllerGSAPandLocomotive } from './compornent/ControllerGSAPandLocomotive'
// import './test'

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
const awatiFunction = (func, delay) => {
  return new Promise(resolve => {
    setTimeout(() => func, delay)
    resolve()
  })
}

$(window).on('load', async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerGSAPandLocomotive = new ControllerGSAPandLocomotive()
  let phase = null
  phase = await contollerAnimateCss.doAnimate('body', 'animate__fadeIn', 0)
  phase = await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 1000)

  phase = await awatiFunction(controllerGSAPandLocomotive.init(), 0)
  phase = await awatiFunction(controllerGSAPandLocomotive.doMvAnimate(), 0)
  phase = await awatiFunction(controllerGSAPandLocomotive.doMvTextAnimate(), 0)
})
