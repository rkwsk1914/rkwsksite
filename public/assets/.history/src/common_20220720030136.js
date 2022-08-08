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
gsap.to('.main-visual__image', {
  x: '70vw',
  y: '70vh',
  width: '300px',
  height: '100px',
  duration: 3,

  onComplete: () => { console.log('onComplete') }, // アニメーションが完了したとき
  // onStart: () => { console.log('onStart'); }, // アニメーションが開始したときです。
  // onUpdate: () => { console.log('onUpdate'); }, // 1ティック進むごとにイベントが発火します。
  // onRepeat:() => { console.log('onRepeat'); },// リピートになるときです。

  scrollTrigger: {
    trigger: '.main-visual__image',
    start: 'bottom+=250 bottom', // 左側が対象(trigger)の設定、 右側が画面(ブラウザ)の設定
    end: 'bottom top',
    /**
     * onEnter：start が scroller-start を超えた
     * onLeave：end が scroller-end を超えた
     * onEnterBack：start が scroller-start を超えて戻った
     * onLeaveBack：end が scroller-end を超えて戻った
     *
     * play：再生
     * pause：停止
     * reset：初期化して停止
     * restart：初期化して再生
     * complete：最後に移動して停止
     * reverse：逆再生
     * none：なにもしない
     */
    toggleActions: 'play none none reset',
    markers: true,
    id: 'main-visual__image',
    scrub: 0.5 // smoothing
  }
})

/*
const waypoint = new window.Waypoint({
  element: document.getElementById('section2'),
  handler: function (direction) {
    alert('You have scrolled to a thing')
  }
})
*/

gsap.to('.main-visual__text', {
  scale: 1,
  duration: 3,

  scrollTrigger: {
    trigger: '.main-visual__image',
    start: 'bottom+=250 bottom',
    end: 'bottom top',
    toggleActions: 'play none none reset',
    markers: true,
    id: 'main-visual__text',
    scrub: 0.5 // smoothing
  }
})
