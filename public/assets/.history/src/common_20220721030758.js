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

import { ContollerAnimateCss } from './compornent/ContollerAnimateCss'
import { ControllerGSAPandLocomotive } from './compornent/ControllerGSAPandLocomotive'
// import "./test"

const awatiFunction = (func, delay) => {
  return new Promise(resolve => {
    setTimeout(() => func, delay)
    resolve()
  })
}

$(window).on('load', async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerGSAPandLocomotive = new ControllerGSAPandLocomotive()
  await contollerAnimateCss.doAnimate('body', 'animate__fadeIn', 0)
  await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 1000)
  await awatiFunction(controllerGSAPandLocomotive.init(), 0)
  await awatiFunction(controllerGSAPandLocomotive.doMvAnimate(), 0)
  await awatiFunction(controllerGSAPandLocomotive.doMvTextAnimate(), 0)
})
