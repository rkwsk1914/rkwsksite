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
/**
 * GSAPでScrollTriggerを扱えるようにpluginを登録
 */
gsap.registerPlugin(ScrollTrigger)

/**
 * LocomotiveScrollの初期化
 */
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
})
// LocomotiveScroll内でscrollイベントが走る度に、ScrollTriggerも更新
locoScroll.on('scroll', ScrollTrigger.update)

/**
 * SmoothScrollがonになるとLocomotiveScrollがスクロールを制御するようになるため、
 * elで指定した部分で色々な高さの調整が行われる。
 * ScrollTriggerでもそのproxyを使用するようにする。
 */
ScrollTrigger.scrollerProxy('.smooth-scroll', {
  scrollTop (value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
  },
  getBoundingClientRect () {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
  },
  pinType: document.querySelector('.smooth-scroll').style.transform ? 'transform' : 'fixed'
})

/**
 * indowが更新される度にScrollTrigger、LocomotiveScrollの両方を更新する
 */
ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
// 全ての更新が終わりLocomotiveScrollで高さの調整が終わった後、最後にScrollTriggerをrefresh
ScrollTrigger.refresh()