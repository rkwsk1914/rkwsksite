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
  main
--------------------------------------------------------------------------------- */
/*
gsap.to('.main_visual', { // アニメーションしたい要素を指定
  x: 800, // 横に800px動かす
  scrollTrigger: {
    trigger: '[data-scroll-section-id="section1"]', // アニメーションが始まるトリガーとなる要素
    start: 'top center', // アニメーションが始まる位置を指定
    scroller: $ANIMATION_MAIN_CONTAINER
    // onEnter: () => jsFadeUpTitle.classList.add('js-fadeUp-ttl')
  }
})
*/

gsap.to('.main_visual', {
  x: '70vw',
  rotation: 360,
  duration: 3,

  scrollTrigger: {
    trigger: '.main_visual',
    start: 'top bottom',
    end: 'bottom top',
    toggleActions: 'play none none reset',
    markers: true,
    id: 'box',
    // scrub: true,
    scrub: 0.5 // smoothing
  }
})
