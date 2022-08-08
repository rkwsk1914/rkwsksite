/* ---------------------------------------------------------------------------------
  ライブラリ
--------------------------------------------------------------------------------- */
import $ from 'jquery'
import 'core-js'
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
    setTimeout(() => {
      console.log('do')
    }, delay)
    resolve()
  })
}

/*
$(window).on('load', async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerGSAPandLocomotive = new ControllerGSAPandLocomotive()
  let phase = null
  console.log('1')
  phase = await contollerAnimateCss.doAnimate('body', 'animate__fadeIn', 1000)
  console.log(phase)
  console.log('OK')
  // phase = await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 1000)
  // console.log(phase)

  // await awatiFunction(console.log('OK'), 1000)
  // await awatiFunction(console.log('OK'), 1000)
  // await awatiFunction(console.log('OK'), 1000)
  // await awatiFunction(console.log('OK'), 1000)

  // await awatiFunction(controllerGSAPandLocomotive.init(), 1000)
  // await awatiFunction(controllerGSAPandLocomotive.doMvAnimate(), 1000)
  // await awatiFunction(controllerGSAPandLocomotive.doMvTextAnimate(), 0)
})
*/

async function f () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 3000)
  })

  const result = await promise // promise が解決するまで待ちます (*)

  console.log(result) // "done!"

  const result2 = await promise // promise が解決するまで待ちます (*)

  console.log(result2) // "done!"
}

f()
