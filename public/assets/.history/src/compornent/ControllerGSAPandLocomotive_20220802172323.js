import $ from 'jquery'
// import 'bootstrap'
import LocomotiveScroll from 'locomotive-scroll'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Scroller } from './Scroller'
import { PixiPlugin } from 'gsap/PixiPlugin.js'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

import { awatiFunction } from './AwatiFunction'
import { async } from 'regenerator-runtime'

import 'jquery-scrollify'

export class ControllerGSAPandLocomotive {
  constructor () {
    this.$ANIMATION_MAIN_CONTAINER = '[data-scroll-container]'
    this.$ANIMATION_MAIN_CONTAINER_CLASSNAME = '.main-container'
    this.gsap = gsap
  }

  /* ---------------------------------------------------------------------------------
    GSAP LocomotiveScroll 初期化
  --------------------------------------------------------------------------------- */
  init () {
    // console.log('init', this)

    /**
     * GSAPでScrollTriggerを扱えるようにpluginを登録
     */
    this.gsap.registerPlugin(ScrollTrigger)

    /**
     * LocomotiveScrollの初期化
     */
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(this.$ANIMATION_MAIN_CONTAINER),
      smooth: true
    })
    // LocomotiveScroll内でscrollイベントが走る度に、ScrollTriggerも更新
    locoScroll.on('scroll', ScrollTrigger.update)

    /**
     * SmoothScrollがonになるとLocomotiveScrollがスクロールを制御するようになるため、
     * elで指定した部分で色々な高さの調整が行われる。
     * ScrollTriggerでもそのproxyを使用するようにする。
     */
    ScrollTrigger.scrollerProxy(this.$ANIMATION_MAIN_CONTAINER, {
      scrollTop (value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect () {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: document.querySelector(this.$ANIMATION_MAIN_CONTAINER).style.transform ? 'transform' : 'fixed'
    })

    /**
     * windowが更新される度にScrollTrigger、LocomotiveScrollの両方を更新する
     */
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
    // 全ての更新が終わりLocomotiveScrollで高さの調整が終わった後、最後にScrollTriggerをrefresh
    ScrollTrigger.refresh()

    locoScroll.on('scroll', (e) => {
      // console.log(e.scroll.y)

      // if (e.scroll.y > 500) {
      //  e.preve
      // }
    })
    locoScroll.on('call', (func) => {
      console.log('func', func)
      switch (func) {
        case 'main-test':
          const position = $('#sub-visual').offset().top
          // $('body,html').animate({ scrollTop: position }, 5000, 'swing')
          return false
        default:
          return
      }
      $(document).trigger(func)
    })
  }

  doMvAnimate () {
    // console.log('doMvAnimate')
    this.gsap.to('.main-visual__image', {
      width: '600px',
      height: '50px',
      duration: 3,
      // marginTop: '300px',

      onStart: () => {
        // const position = $('#sub-visual').offsetTop
        // const speed = 500
        // $('html, body').animate({ scrollTop: position }, speed, 'swing')
      },
      onComplete: async () => {
        const spans = document.getElementsByClassName('sub-visual__title__strong__span')
        const spansKey = Object.keys(spans)
        for (let index = 1; index <= spansKey.length; index++) {
          await awatiFunction(function () {
            const span = document.getElementsByClassName(`sub-visual__title__strong__span delay${index}`)
            $(span).removeClass('animate__fadeOutDown')
            $(span).addClass('animate__fadeInUp')
          }, 50)
        }
      },

      scrollTrigger: {
        trigger: '.sub-visual',
        start: 'top bottom', // 左側が対象(trigger)の設定、 右側が画面(ブラウザ)の設定
        end: 'bototm 50%',
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
        onEnterBack: async (self) => {
          const spans = document.getElementsByClassName('sub-visual__title__strong__span')
          const spansKey = Object.keys(spans)
          for (let index = spansKey.length; index >= 1; index--) {
            await awatiFunction(function () {
              const span = document.getElementsByClassName(`sub-visual__title__strong__span delay${index}`)
              $(span).removeClass('animate__fadeInUp')
              $(span).addClass('animate__fadeOutDown')
            }, 50)
          }
        },
        pin: true,
        scroller: this.$ANIMATION_MAIN_CONTAINER_CLASSNAME,
        markers: false,
        id: 'main-visual__image',
        scrub: 0.5 // smoothing
      }
    })
    ScrollTrigger.refresh()
  }

  doMvAnimate2 () {
    // console.log('doMvAnimate')
    this.gsap.to('.main-visual__image', {


      onStart: () => {
        // const position = $('#sub-visual').offsetTop
        // const speed = 500
        // $('html, body').animate({ scrollTop: position }, speed, 'swing')
      },
      onComplete: async () => {
        const spans = document.getElementsByClassName('sub-visual__title__strong__span')
        const spansKey = Object.keys(spans)
        for (let index = 1; index <= spansKey.length; index++) {
          await awatiFunction(function () {
            const span = document.getElementsByClassName(`sub-visual__title__strong__span delay${index}`)
            $(span).removeClass('animate__fadeOutDown')
            $(span).addClass('animate__fadeInUp')
          }, 50)
        }
      },

      scrollTrigger: {
        trigger: '.sub-visual',
        start: 'top bottom', // 左側が対象(trigger)の設定、 右側が画面(ブラウザ)の設定
        end: 'bototm 50%',
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
        onEnterBack: async (self) => {
          const spans = document.getElementsByClassName('sub-visual__title__strong__span')
          const spansKey = Object.keys(spans)
          for (let index = spansKey.length; index >= 1; index--) {
            await awatiFunction(function () {
              const span = document.getElementsByClassName(`sub-visual__title__strong__span delay${index}`)
              $(span).removeClass('animate__fadeInUp')
              $(span).addClass('animate__fadeOutDown')
            }, 50)
          }
        },
        pin: true,
        scroller: this.$ANIMATION_MAIN_CONTAINER_CLASSNAME,
        markers: false,
        id: 'main-visual__image',
        scrub: 0.5 // smoothing
      }
    })
    ScrollTrigger.refresh()
  }

  doMvTextAnimate () {
    this.gsap.to('.main-visual__text', {
      height: '0',
      duration: 3,

      // onComplete: () => { console.log('onComplete') },
      // onStart: () => { console.log('onStart') },
      // onUpdate: () => { console.log('onUpdate') },
      // onRepeat: () => { console.log('onRepeat') },

      scrollTrigger: {
        trigger: '.sub-visual',
        start: 'top bottom',
        end: 'bottom 50%',
        toggleActions: 'play none none reset',
        scroller: this.$ANIMATION_MAIN_CONTAINER_CLASSNAME,
        markers: false,
        id: 'main-visual__text',
        scrub: 0.5
      }
    })
  }

  doShowSectionWorkText () {
    this.gsap.to('#section-work', {
      duration: 3,

      // onComplete: () => { console.log('onComplete') },
      onStart: async () => {
        const spans = document.getElementsByClassName('index-section-works__title__span')
        const spansKey = Object.keys(spans)
        for (let index = 1; index <= spansKey.length; index++) {
          await awatiFunction(function () {
            const span = document.getElementsByClassName(`index-section-works__title__span delay${index}`)
            $(span).removeClass('animate__fadeOutDown')
            $(span).addClass('animate__fadeInUp')
          }, 50)
        }
        await awatiFunction(function () {
          $('.index-section-works__title').removeClass('animate__fadeOut')
          $('.index-section-works__title').addClass('animate__fadeIn')
        }, 0)
      },
      // onUpdate: () => { console.log('onUpdate') },
      // onRepeat: () => { console.log('onRepeat') },

      scrollTrigger: {
        trigger: '#section-work',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play none none reset',
        onLeaveBack: async (self) => {
          const spans = document.getElementsByClassName('index-section-works__title__span')
          const spansKey = Object.keys(spans)
          await awatiFunction(function () {
            $('.index-section-works__title').removeClass('animate__fadeIn')
            $('.index-section-works__title').addClass('animate__fadeOut')
          }, 0)
          for (let index = spansKey.length; index >= 1; index--) {
            await awatiFunction(function () {
              const span = document.getElementsByClassName(`index-section-works__title__span delay${index}`)
              $(span).removeClass('animate__fadeInUp')
              $(span).addClass('animate__fadeOutDown')
            }, 50)
          }
        },
        scroller: this.$ANIMATION_MAIN_CONTAINER_CLASSNAME,
        markers: true,
        id: 'section-work',
        scrub: 0.5
      }
    })
  }
}
