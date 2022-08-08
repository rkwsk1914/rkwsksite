import $ from 'jquery'
// import 'bootstrap'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin.js'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
import './style/common.scss'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
// GSAPでScrollTriggerを扱えるようにpluginを登録します。
gsap.registerPlugin(ScrollTrigger)

/**
 * LocomotiveScrollの初期化をおこないます。
 */
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
})

locoScroll.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy('.smooth-scroll', {
  scrollTop (value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
  },
  getBoundingClientRect () {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
  },
  pinType: document.querySelector('.smooth-scroll').style.transform ? 'transform' : 'fixed'
})

ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
ScrollTrigger.refresh()
