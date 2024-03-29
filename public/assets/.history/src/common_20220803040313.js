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

import 'slick-carousel'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
import './style/common.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@fortawesome/fontawesome-free/css/all.css'

/* ---------------------------------------------------------------------------------
  コンポーネント
--------------------------------------------------------------------------------- */
import { ContollerAnimateCss } from './compornent/ContollerAnimateCss'
import { ControllerGSAPandLocomotive } from './compornent/ControllerGSAPandLocomotive'
import { ControllerWallPointAnimate } from './compornent/ControllerWallPointAnimate'
import { awatiFunction } from './compornent/AwatiFunction'
import { ControllerScroll } from './compornent/ControllerScroll'
// import './test'

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
$(window).on('load', async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerGSAPandLocomotive = new ControllerGSAPandLocomotive()

  $('.sub-visual__my-skils-icons').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    cssEase: 'linear',
    slidesToShow: 10,
    swipe: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false
  })

  $('.works-list').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    slidesToShow: 4,
    swipe: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3 // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  })

  await contollerAnimateCss.doAnimate('body', 'animate__fadeIn', 500)
  await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 500)
  await awatiFunction(controllerGSAPandLocomotive.init.bind(controllerGSAPandLocomotive), 500)
  await awatiFunction(controllerGSAPandLocomotive.doMvAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doSubMvAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doMvTextAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doShowSectionWorkText.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doShowSectionProfileText.bind(controllerGSAPandLocomotive), 0)
})
