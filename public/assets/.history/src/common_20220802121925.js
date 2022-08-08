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
import { ControllerWallPointAnimate } from './compornent/ControllerWallPointAnimate'
import { awatiFunction } from './compornent/AwatiFunction'
import { ControllerScroll } from './compornent/ControllerScroll'
// import './test'

const aaa = (target, trigger = 'body', speed = 300) => {
  console.log('in')
  $('.main-container').scroll((e) => {
    console.log('IN')
    e.preventDefault()
    const position = $(target).offset().top
    $(trigger).animate({ scrollTop: position }, speed, 'swing')
    return false
  })
}

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
$(window).on('load', async () => {
  $.scrollify({
    section: '.scrollify', // 対象要素を指定
    easing: 'swing', // イージングを指定
    scrollSpeed: 2000, // スクロール時の速度
    updateHash: false, // スクロール時アドレスバーのURLを更新
    after: console.log('move')
  })

  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerGSAPandLocomotive = new ControllerGSAPandLocomotive()
  aaa('#sub-visual')

  await contollerAnimateCss.doAnimate('body', 'animate__fadeIn', 500)
  await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 500)

  await awatiFunction(controllerGSAPandLocomotive.init.bind(controllerGSAPandLocomotive), 500)

  await awatiFunction(controllerGSAPandLocomotive.doMvAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doMvTextAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doShowSectionWorkText.bind(controllerGSAPandLocomotive), 0)
})
