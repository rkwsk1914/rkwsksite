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
const awatiFunction = (test) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //test('in')
      console.log(test)
      resolve('done!')
    }, 3000)
  })
}

$(window).on('load', async () => {
  const func = () => {
    console.log('func')
  }

  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerGSAPandLocomotive = new ControllerGSAPandLocomotive()
  const phase = null

  console.log('start')
  // phase = await contollerAnimateCss.doAnimate('body', 'animate__fadeIn', 1000)
  console.log('OK')
  // phase = await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 1000)

  // await awatiFunction('OK1', 1000)
  // await awatiFunction('OK2', 1000)
  // await awatiFunction('OK3', 1000)
  // await awatiFunction('OK4', 1000)

  await awatiFunction(func('OK1'), 1000)
  await awatiFunction(func('OK2'), 1000)

  // await awatiFunction(controllerGSAPandLocomotive.init(), 1000)
  // await awatiFunction(controllerGSAPandLocomotive.doMvAnimate(), 1000)
  // await awatiFunction(controllerGSAPandLocomotive.doMvTextAnimate(), 0)
})

/*
async function f () {
  const promise = (test) => new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(test)
      resolve('done!')
    }, 3000)
  })

  const result = await promise('OK1') // promise が解決するまで待ちます (*)

  console.log(result) // "done!"

  const result2 = await promise('OK2') // promise が解決するまで待ちます (*)

  console.log(result2) // "done!"
}

f()
*/
