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

/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
$(window).on('load', async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerGSAPandLocomotive = new ControllerGSAPandLocomotive()

  await contollerAnimateCss.doAnimate('body', 'animate__fadeIn', 500)
  await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 500)

  await awatiFunction(controllerGSAPandLocomotive.init.bind(controllerGSAPandLocomotive), 500)
  await awatiFunction(
    function() {
      $.scrollify({
        section : ".scrollify",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
      });
    }
  )

  /*
  await awatiFunction(controllerGSAPandLocomotive.doMvAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doMvTextAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doShowSectionWorkText.bind(controllerGSAPandLocomotive), 0)
  */
})
