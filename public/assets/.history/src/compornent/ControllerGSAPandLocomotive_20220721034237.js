import $ from 'jquery'
// import 'bootstrap'
import LocomotiveScroll from 'locomotive-scroll'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PixiPlugin } from 'gsap/PixiPlugin.js'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

export class ControllerGSAPandLocomotive {
  constructor () {
    this.$ANIMATION_MAIN_CONTAINER = '[data-scroll-container]'
    this.$ANIMATION_MAIN_CONTAINER_CLASSNAME = '.article'
    this.gsap = gsap
    this.locoScroll
  }

  /* ---------------------------------------------------------------------------------
    GSAP LocomotiveScroll 初期化
  --------------------------------------------------------------------------------- */
  init () {
    /**
     * GSAPでScrollTriggerを扱えるようにpluginを登録
     */
    this.gsap.registerPlugin(ScrollTrigger)

    /**
     * LocomotiveScrollの初期化
     */
    this.locoScroll = new LocomotiveScroll({
      el: document.querySelector(this.$ANIMATION_MAIN_CONTAINER),
      smooth: true
    })
    // LocomotiveScroll内でscrollイベントが走る度に、ScrollTriggerも更新
    this.locoScroll.on('scroll', ScrollTrigger.update)

    /**
     * SmoothScrollがonになるとLocomotiveScrollがスクロールを制御するようになるため、
     * elで指定した部分で色々な高さの調整が行われる。
     * ScrollTriggerでもそのproxyを使用するようにする。
     */
    /*
    ScrollTrigger.scrollerProxy(this.$ANIMATION_MAIN_CONTAINER, {
      scrollTop (value) {
        return arguments.length ? this.locoScroll.scrollTo(value, 0, 0) : this.locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect () {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: document.querySelector(this.$ANIMATION_MAIN_CONTAINER).style.transform ? 'transform' : 'fixed'
    })
    */

    /**
     * windowが更新される度にScrollTrigger、LocomotiveScrollの両方を更新する
     */
    ScrollTrigger.addEventListener('refresh', () => this.locoScroll.update())
    // 全ての更新が終わりLocomotiveScrollで高さの調整が終わった後、最後にScrollTriggerをrefresh
    ScrollTrigger.refresh()
  }

  initGSAP () {
    /**
     * GSAPでScrollTriggerを扱えるようにpluginを登録
     */
    this.gsap.registerPlugin(ScrollTrigger)
  }

  doMvAnimate () {
    console.log($('.sub-visual').attr('class'))
    this.gsap.to('.main-visual__image', {
      width: '600px',
      height: '50px',
      duration: 3,
      marginTop: '300px',

      // onComplete: () => { console.log('onComplete') }, // アニメーションが完了したとき
      onStart: () => { console.log('onStart') }, // アニメーションが開始したときです。
      onUpdate: () => { console.log('onUpdate') }, // 1ティック進むごとにイベントが発火します。
      // onRepeat: () => { console.log('onRepeat') }, // リピートになるときです。

      scrollTrigger: {
        trigger: '.sub-visual',
        start: 'top bottom', // 左側が対象(trigger)の設定、 右側が画面(ブラウザ)の設定
        end: 'top 80%',
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
  }

  doMvTextAnimate () {
    this.gsap.to('.main-visual__text', {
      height: '0',
      duration: 3,

      // onComplete: () => { console.log('onComplete') }, // アニメーションが完了したとき
      // onStart: () => { console.log('onStart') }, // アニメーションが開始したときです。
      // onUpdate: () => { console.log('onUpdate') }, // 1ティック進むごとにイベントが発火します。
      // onRepeat: () => { console.log('onRepeat') }, // リピートになるときです。

      scrollTrigger: {
        trigger: '.sub-visual',
        start: 'top bottom', // 左側が対象(trigger)の設定、 右側が画面(ブラウザ)の設定
        end: 'top 80%',
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
        markers: false,
        id: 'main-visual__text',
        scrub: 0.5 // smoothing
      }
    })
  }
}
