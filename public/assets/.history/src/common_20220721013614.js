import $ from 'jquery'
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

// import "./test"

class ContollerAnimateCss {
  constructor () {}

  doAnimate ($dom, animateClassName) {
    return new Promise(resolve => {
      $($dom).addClass(animateClassName)
      resolve()
    })
  }
}

$(window).on('load', async () => {
  const ContollerAnimateCss = new ContollerAnimateCss()
  await ContollerAnimateCss.doAnimate('body', 'animate__fadeIn')
  await ContollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeUp')
})
