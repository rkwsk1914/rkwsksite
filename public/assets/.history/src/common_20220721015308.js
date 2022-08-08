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

// import "./test"

class ContollerAnimateCss {
  constructor () {
    this.body = $('body')
  }

  doAnimate ($dom, animateClassName) {
    return new Promise(resolve => {
      $($dom).addClass(animateClassName)
      setTimeout(()=> {console.log($dom)}, 5000)
      resolve()
    })
  }
}

$(window).on('load', async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
  const ph1 = await contollerAnimateCss.doAnimate('body', 'animate__fadeIn')
  const ph2 = await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeUp')
})
