import $ from 'jquery'
import { async } from 'regenerator-runtime'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { awatiFunction } from './../../../common/compornent/AwatiFunction'
import { ContollerAnimateCss } from './../../../common/compornent/ContollerAnimateCss'

export class ControllerGSAPandLocomotive extends ContollerAnimateCss {
  constructor () {
    super()
    this.$ANIMATION_MAIN_CONTAINER = '[data-scroll-container]'
    this.$ANIMATION_MAIN_CONTAINER_CLASSNAME = '.main-container'
    this.gsap = gsap
    this.welcome = true
    this.intoWorks = true
    this.intoProfile = true
  }

  /* ---------------------------------------------------------------------------------
    GSAP LocomotiveScroll 初期化
  --------------------------------------------------------------------------------- */
  init () {
    // console.log('init', this)

    // GSAPでScrollTriggerを扱えるようにpluginを登録
    this.gsap.registerPlugin(ScrollTrigger)

    // LocomotiveScrollの初期化
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(this.$ANIMATION_MAIN_CONTAINER),
      smooth: true
    })
    // LocomotiveScroll内でscrollイベントが走る度に、ScrollTriggerも更新
    locoScroll.on('scroll', ScrollTrigger.update)

    /*
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

    // windowが更新される度にScrollTrigger、LocomotiveScrollの両方を更新する
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
    // 全ての更新が終わりLocomotiveScrollで高さの調整が終わった後、最後にScrollTriggerをrefresh
    ScrollTrigger.refresh()

    function cotrolleMvScroll () {
      locoScroll.stop()
      setTimeout(function () {
        locoScroll.scrollTo(document.querySelector('#sub-visual'), {
          offset: -200,
          duration: 1500
        })
      }, 50)
      setTimeout(function () {
        locoScroll.start()
      }, 3000)
    }

    function cotrolleWorkScroll () {
      locoScroll.stop()
      setTimeout(function () {
        locoScroll.scrollTo(document.querySelector('#section-works'), {
          offset: -180,
          duration: 1500
        })
      }, 50)
      setTimeout(function () {
        locoScroll.start()
      }, 3000)
    }

    function cotrolleProfileScroll () {
      locoScroll.stop()
      setTimeout(function () {
        locoScroll.scrollTo(document.querySelector('#section-profile'), {
          offset: -180,
          duration: 1500
        })
      }, 50)
      setTimeout(function () {
        locoScroll.start()
      }, 3000)
    }

    function cotrolleMvScrollBack () {
      locoScroll.stop()
      setTimeout(function () {
        locoScroll.scrollTo(0, {
          duration: 1500
        })
      }, 50)
      setTimeout(function () {
        locoScroll.start()
      }, 3000)
    }

    locoScroll.on('call', (func) => {
      console.log(func)
      switch (func) {
        case 'welcome':
          if (this.welcome === false) {
            return
          }
          cotrolleMvScroll()
          this.welcome = false
          return
        case 'works':
          if (this.intoWorks === false) {
            return
          }
          cotrolleWorkScroll()
          this.intoWorks = false
          return
        case 'profile':
          if (this.intoProfile === false) {
            return
          }
          cotrolleProfileScroll()
          this.intoProfile = false
          break
        default:
      }
    })

    $('.nav-top').bind('click', async (e) => {
      e.preventDefault()
      await awatiFunction(cotrolleMvScrollBack, 0)
    })

    $('.nav-menu__content__item__link-logo').bind('click', async (e) => {
      e.preventDefault()
      await awatiFunction(cotrolleMvScrollBack, 0)
    })

    $('.nav-menu__content__item__link').bind('click', async (e) => {
      e.preventDefault()
      console.log(this)
      const href = $(e.target).attr('href')
      const found = href.match(/#/)
      if (found) {
        const backupWelcome = this.welcome
        const backupIntoWorks = this.intoWorks
        const backupIntoProfile = this.intoProfile
        this.welcome = false
        this.intoWorks = false
        this.intoProfile = false

        switch (found.input) {
          case '#':
            await awatiFunction(cotrolleMvScrollBack, 0)
            return
          case '#section-works':
            await awatiFunction(cotrolleWorkScroll, 0)
            return
          case '#section-profile':
            await awatiFunction(cotrolleProfileScroll, 0)
            break
          default:
        }

        await awatiFunction(function () {
          this.welcome = backupWelcome
          this.intoWorks = backupIntoWorks
          this.intoProfile = backupIntoProfile
        }.bind(this), 500)
      }
    })
  }

  doMvAnimate () {
    // console.log('doMvAnimate')
    this.gsap.to('.main-visual__image', {
      width: '600px',
      height: '50px',
      duration: 3,
      // marginTop: '300px',

      onStart: async () => {
        await awatiFunction(this.doFadeInUp.bind(this), 50, 'nav-top')
      },
      onComplete: async () => {
        await awatiFunction(function () {
          $('.nav-menu').addClass('show')
        }, 0)
        await awatiFunction(this.doFadeInDown.bind(this), 0, 'nav-menu')
        await awatiFunction(this.showTitle.bind(this), 0, 'sub-visual__title__strong')
        await awatiFunction(this.doFadeInUp.bind(this), 50, 'sub-visual__my-skils-icons')
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
        onLeaveBack: () => {
          this.welcome = true
          this.intoWorks = true
          this.intoProfile = true
        },
        onEnterBack: async (self) => {
          await awatiFunction(this.doFadeInUp.bind(this), 50, 'sub-visual__my-skils-icons', true)
          await awatiFunction(this.showTitle.bind(this), 0, 'sub-visual__title__strong', true)
          await awatiFunction(this.doFadeInDown.bind(this), 0, 'nav-menu', true)
          await awatiFunction(function () {
            $('.nav-menu').removeClass('show')
          }, 0)
          await awatiFunction(this.doFadeInUp.bind(this), 50, 'nav-top', true)
        },
        scroller: this.$ANIMATION_MAIN_CONTAINER_CLASSNAME,
        markers: false,
        id: 'main-visual__image',
        scrub: 0.5 // smoothing
      }
    })
    ScrollTrigger.refresh()
  }

  doSubMvAnimate () {
    // console.log('doMvAnimate')
    this.gsap.to('.sub-visual__image', {
      width: '700px',
      height: '50px',
      duration: 3,

      scrollTrigger: {
        trigger: '.sub-visual',
        start: 'top bottom=-25%', // 左側が対象(trigger)の設定、 右側が画面(ブラウザ)の設定
        end: 'bototm 25%',
        toggleActions: 'play none none reset',
        scroller: this.$ANIMATION_MAIN_CONTAINER_CLASSNAME,
        markers: false,
        id: 'sub-visual__image',
        scrub: 0.5 // smoothing
      }
    })
    ScrollTrigger.refresh()
  }

  doMvTextAnimate () {
    this.gsap.to('.main-visual__text', {
      height: '0',
      duration: 3,

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
    this.gsap.to('#section-works', {
      duration: 3,

      // onComplete: () => { console.log('onComplete') },
      onStart: async () => {
        await awatiFunction(this.showTitle.bind(this), 0, 'index-section-works__title')
        await awatiFunction(this.doFadeIn.bind(this), 0, 'works-list')
        await awatiFunction(this.doFadeIn.bind(this), 0, 'index-section-works__button')
      },

      scrollTrigger: {
        trigger: '#section-works',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play none none reset',
        onLeaveBack: async (self) => {
          await awatiFunction(this.doFadeIn.bind(this), 0, 'index-section-works__button', true)
          await awatiFunction(this.doFadeIn.bind(this), 0, 'works-list', true)
          await awatiFunction(this.showTitle.bind(this), 0, 'index-section-works__title', true)
        },
        scroller: this.$ANIMATION_MAIN_CONTAINER_CLASSNAME,
        markers: false,
        id: 'section-work',
        scrub: 0.5
      }
    })
  }

  doShowSectionProfileText () {
    this.gsap.to('#section-profile', {
      duration: 3,

      onStart: async () => {
        await awatiFunction(this.showTitle.bind(this), 0, 'index-section-profile__title')
        await awatiFunction(this.doFadeIn.bind(this), 0, 'profile-section__image-box')
        await awatiFunction(this.doFadeIn.bind(this), 0, 'profile-section__link-box')
      },

      scrollTrigger: {
        trigger: '#section-profile',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play none none reset',
        onLeaveBack: async (self) => {
          await awatiFunction(this.doFadeIn.bind(this), 0, 'profile-section__link-box', true)
          await awatiFunction(this.doFadeIn.bind(this), 0, 'profile-section__image-box', true)
          await awatiFunction(this.showTitle.bind(this), 0, 'index-section-profile__title', true)
        },
        scroller: this.$ANIMATION_MAIN_CONTAINER_CLASSNAME,
        markers: false,
        id: 'section-profile',
        scrub: 0.5
      }
    })
  }
}
