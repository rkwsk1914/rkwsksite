import $ from 'jquery'
import { async } from 'regenerator-runtime'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { awatiFunction } from './../../../common/compornent/AwatiFunction'
import { ContollerAnimateCss } from './../../../common/compornent/ContollerAnimateCss'
import { ControllerNavMenu } from './../../../common/compornent/ControllerNavMenu'

export class ControllerGSAPandLocomotive extends ContollerAnimateCss {
  constructor () {
    super()
    this.$ANIMATION_MAIN_CONTAINER = '[data-scroll-container]'
    this.$ANIMATION_MAIN_CONTAINER_CLASSNAME = '.main-container'
    this.gsap = gsap
    this.welcome = true
    this.intoWorks = true
    this.intoProfile = true
    this.controllerNavMenu = new ControllerNavMenu()
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

    this.cotrolleMvScroll = async function cotrolleMvScroll (e) {
      console.log('cotrolleMvScroll', this.welcome)
      console.log('cotrolleMvScroll', locoScroll.scroll.instance.scroll.y)
      if (this.welcome === false) {
        return
      }

      if (e === 'exit') {
        return
      }

      if (locoScroll.scroll.instance.scroll.y < 50 & locoScroll.scroll.instance.scroll.y > 820) {
        return false
      }

      await awatiFunction(function () { locoScroll.stop() }, 0)
      await awatiFunction(function () {
        locoScroll.scrollTo(document.querySelector('#sub-visual'), {
          offset: -140,
          duration: 1500
        })
      }, 0)
      await awatiFunction(function () { locoScroll.start() }, 1500)
      this.welcome = false
    }

    this.cotrolleWorkScroll = async function cotrolleWorkScroll (e) {
      console.log('cotrolleWorkScroll', this.intoWorks)
      if (this.intoWorks === false) {
        return
      }

      if (e === 'exit') {
        return
      }

      if (locoScroll.scroll.instance.scroll.y < 1762) {
        return
      }

      await awatiFunction(function () { locoScroll.stop() }, 0)
      await awatiFunction(function () {
        locoScroll.scrollTo(document.querySelector('#section-works'), {
          offset: -150,
          duration: 1500
        })
      }, 0)
      await awatiFunction(function () { locoScroll.start() }, 0)
      this.intoWorks = false
    }

    this.cotrolleProfileScroll = async function cotrolleProfileScroll (e) {
      console.log('cotrolleProfileScroll', this.intoProfile)
      if (this.intoProfile === false) {
        return
      }

      if (e === 'exit') {
        return
      }

      await awatiFunction(function () { locoScroll.stop() }, 0)
      await awatiFunction(function () {
        locoScroll.scrollTo(document.querySelector('#section-profile'), {
          offset: -100,
          duration: 1500
        })
      }, 0)
      await awatiFunction(function () { locoScroll.start() }, 1500)
      this.intoProfile = false
    }

    this.cotrolleMvScrollBack = async function cotrolleMvScrollBack () {
      await awatiFunction(function () { locoScroll.stop() }, 0)
      await awatiFunction(function () {
        locoScroll.scrollTo(0, {
          duration: 1500
        })
      }, 0)
      await awatiFunction(function () { locoScroll.start() }, 1500)
    }

    locoScroll.stop()

    locoScroll.on('scroll', function (e) {
      //console.log(e)
      //console.log(this)

      console.log(locoScroll.scroll.instance.scroll.y)
      const y = locoScroll.scroll.instance.scroll.y
      if (y < 1200 || y > 820) {
        this.cotrolleWorkScroll()
      }
    }.bind(this))

    locoScroll.on('call', async function (func, e) {
      await awatiFunction(function () {
        console.log(func)
        console.log(e)

        switch (func) {
          case 'welcome':
            this.cotrolleMvScroll(e)
            break
          case 'works':
            // this.cotrolleWorkScroll()
            break
          case 'profile':
            this.cotrolleProfileScroll()
            break
          default:
        }
      }.bind(this), 0)
    }.bind(this))

    this.setEvent()
  }

  setEvent () {
    const navTop = document.querySelector('.nav-top')
    navTop.addEventListener('click', async function (e) {
      e.preventDefault()
      await awatiFunction(this.cotrolleMvScrollBack.bind(this), 0)
      await awatiFunction(this.controllerNavMenu._closeMenu.bind(this), 0)
    }.bind(this))

    const navLinkLogo = document.querySelector('.nav-menu__content__item__link-logo')
    navLinkLogo.addEventListener('click', async function (e) {
      e.preventDefault()
      await awatiFunction(this.cotrolleMvScrollBack.bind(this), 0)

      const navButton = document.querySelector('.nav-menu-button')
      if (navButton) {
        await awatiFunction(
          this.controllerNavMenu._closeMenu.bind(this.controllerNavMenu),
          0,
          navButton
        )
        return
      }

      const navButtonInContent = document.querySelector('.nav-menu-button--in-contents')
      if (navButtonInContent) {
        await awatiFunction(
          this.controllerNavMenu._closeMenu.bind(this.controllerNavMenu),
          0,
          navButtonInContent
        )
      }
    }.bind(this))

    const navLink = document.querySelector('.nav-menu__content__item__link')
    navLink.addEventListener('click', async function (e) {
      e.preventDefault()
      const dataHref = $(e.target).attr('data-href')
      if (dataHref) {
        location.href = dataHref
        return
      }

      const href = $(e.currentTarget).attr('href')
      const found = href.match(/#/)
      if (found) {
        const backupWelcome = this.welcome
        const backupIntoWorks = this.intoWorks
        const backupIntoProfile = this.intoProfile
        this.welcome = false
        this.intoWorks = false
        this.intoProfile = false

        switch (found.input) {
          case '#': {
            await awatiFunction(this.cotrolleMvScrollBack.bind(this), 0)

            const navButton = document.querySelector('.nav-menu-button')
            if (navButton) {
              await awatiFunction(
                this.controllerNavMenu._closeMenu.bind(this.controllerNavMenu),
                0,
                navButton
              )
              return
            }

            const navButtonInContent = document.querySelector('.nav-menu-button--in-contents')
            if (navButtonInContent) {
              await awatiFunction(
                this.controllerNavMenu._closeMenu.bind(this.controllerNavMenu),
                0,
                navButtonInContent
              )
            }
            return
          }
          case '#section-works': {
            await awatiFunction(this.cotrolleWorkScroll.bind(this), 0)
            return
          }
          case '#section-profile': {
            await awatiFunction(this.cotrolleProfileScroll.bind(this), 0)
            break
          }
          default:
        }

        await awatiFunction(function () {
          this.welcome = backupWelcome
          this.intoWorks = backupIntoWorks
          this.intoProfile = backupIntoProfile
        }.bind(this), 500)
      }
    }.bind(this))
  }

  doMvAnimate () {
    // console.log('doMvAnimate')
    this.gsap.to('.main-visual__image', {
      width: '70%',
      height: '30px',
      duration: 3,
      // marginTop: '300px',

      onStart: async () => {
        await awatiFunction(function () {
          const navMenu = $('.nav-menu-button')
          $(navMenu).removeClass('nav-menu-button')
          $(navMenu).addClass('nav-menu-button--in-contents')
        }, 0)
        await awatiFunction(this.doFadeInUp.bind(this), 50, 'nav-top')
      },
      onComplete: async () => {
        await awatiFunction(this.showTitle.bind(this), 0, 'sub-visual__title__strong')
        await awatiFunction(this.doFadeInUp.bind(this), 50, 'sub-visual__my-skils-icons')
      },

      scrollTrigger: {
        trigger: '.sub-visual',
        start: 'top bottom',
        end: 'bototm 50%',
        toggleActions: 'play none none reset',
        onLeaveBack: () => {
          this.welcome = true
          this.intoWorks = true
          this.intoProfile = true
        },
        onEnterBack: async (self) => {
          await awatiFunction(this.doFadeInUp.bind(this), 50, 'sub-visual__my-skils-icons', true)
          await awatiFunction(this.showTitle.bind(this), 0, 'sub-visual__title__strong', true)
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
      width: '70%',
      height: '30px',
      duration: 3,

      scrollTrigger: {
        trigger: '.sub-visual',
        start: 'top bottom', // 左側が対象(trigger)の設定、 右側が画面(ブラウザ)の設定
        end: 'bototm 50%',
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
        start: 'top 90%',
        end: 'bottom 90%',
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
