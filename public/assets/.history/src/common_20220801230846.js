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
import { ControllerWallPointAnimate } from './compornent/ControllerWallPointAnimate'
// import './test'

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
const awatiFunction = (func, delay) => new Promise((resolve, reject) => {
  setTimeout(() => {
    func()
    resolve()
  }, delay)
})

$(window).on('load', async () => {
  document.addEventListener('touchmove', (event) => {
    console.log('IN')
    event.preventDefault()
  }, { passive: false })
  document.addEventListener('mousewheel', (event) => {
    event.preventDefault()
  }, { passive: false })

  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerGSAPandLocomotive = new ControllerGSAPandLocomotive()
  const controllerWallPointAnimate = new ControllerWallPointAnimate()

  await contollerAnimateCss.doAnimate('body', 'animate__fadeIn', 1000)
  await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 1000)

  // await awatiFunction(controllerWallPointAnimate.setSubTitle.bind(controllerWallPointAnimate), 0)

  await awatiFunction(controllerGSAPandLocomotive.init.bind(controllerGSAPandLocomotive), 1000)
  await awatiFunction(controllerGSAPandLocomotive.doMvAutoScroll.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doMvAnimate.bind(controllerGSAPandLocomotive), 1000)
  // await awatiFunction(controllerGSAPandLocomotive.doMvTextAnimate.bind(controllerGSAPandLocomotive), 0)
})
