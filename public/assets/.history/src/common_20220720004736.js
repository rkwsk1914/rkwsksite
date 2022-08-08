import $ from 'jquery'
// import 'bootstrap'
import LocomotiveScroll from 'locomotive-scroll'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PixiPlugin } from 'gsap/PixiPlugin.js'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
import './style/common.scss'

/* ---------------------------------------------------------------------------------
  global
--------------------------------------------------------------------------------- */
const $ANIMATION_MAIN_CONTAINER = '[data-scroll-container]'

/* ---------------------------------------------------------------------------------
  GSAP LocomotiveScroll 初期化
--------------------------------------------------------------------------------- */
/**
 * GSAPでScrollTriggerを扱えるようにpluginを登録
 */
gsap.registerPlugin(ScrollTrigger)

/**
 * LocomotiveScrollの初期化
 */
const locoScroll = new LocomotiveScroll({
  el: document.querySelector($ANIMATION_MAIN_CONTAINER),
  smooth: true
})
// LocomotiveScroll内でscrollイベントが走る度に、ScrollTriggerも更新
locoScroll.on('scroll', ScrollTrigger.update)

/**
 * SmoothScrollがonになるとLocomotiveScrollがスクロールを制御するようになるため、
 * elで指定した部分で色々な高さの調整が行われる。
 * ScrollTriggerでもそのproxyを使用するようにする。
 */
ScrollTrigger.scrollerProxy($ANIMATION_MAIN_CONTAINER, {
  scrollTop (value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
  },
  getBoundingClientRect () {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
  },
  pinType: document.querySelector($ANIMATION_MAIN_CONTAINER).style.transform ? 'transform' : 'fixed'
})

/**
 * windowが更新される度にScrollTrigger、LocomotiveScrollの両方を更新する
 */
ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
// 全ての更新が終わりLocomotiveScrollで高さの調整が終わった後、最後にScrollTriggerをrefresh
ScrollTrigger.refresh()

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
gsap.to(
  '.',
  {
    scrollTrigger: {
      trigger: '.main_visual',
      start: 'top-=100 bottom',
      end: 'top top',
      once: true,
      // 下記のように追加
      scroller: $ANIMATION_MAIN_CONTAINER
      // onEnter: () => jsFadeUpTitle.classList.add('js-fadeUp-ttl')
    }
  })

  gsap.to('.main_visual', { //アニメーションしたい要素を指定
    x: 800, //横に800px動かす
    scrollTrigger: {
      trigger: '.js-trigger',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置を指定
      scroller: $ANIMATION_MAIN_CONTAINER
    }
  })
