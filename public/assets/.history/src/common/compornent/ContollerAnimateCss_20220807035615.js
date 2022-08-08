import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { awatiFunction } from './AwatiFunction'

export class ContollerAnimateCss {
  constructor () {
    this.body = $('body')
  }

  doAnimate ($dom, animateClassName, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        // console.log('do animate', animateClassName)
        $($dom).addClass(animateClassName)
        resolve('')
      }, delay)
    })
  }

  async showTitle (elemClassName, isOut) {
    // console.log(elemClassName, isOut)
    const spans = document.getElementsByClassName(`${elemClassName}__span`)
    const spansKey = Object.keys(spans)

    if (isOut === true) {
      $(`.${elemClassName}`).removeClass('animate__fadeIn')
      $(`.${elemClassName}`).addClass('animate__fadeOut')
    }

    for (let index = 1; index <= spansKey.length; index++) {
      const span = document.getElementsByClassName(`${elemClassName}__span delay${index}`)
      await awatiFunction(function () {
        if (isOut === true) {
          $(span).removeClass('animate__fadeInUp')
          $(span).addClass('animate__fadeOutDown')
        } else {
          $(span).removeClass('animate__fadeOutDown')
          $(span).addClass('animate__fadeInUp')
        }
      }, 50)
    }

    if (isOut === false) {
      $(`.${elemClassName}`).removeClass('animate__fadeOut')
      $(`.${elemClassName}`).addClass('animate__fadeIn')
    }
  }

  doFadeInDown (elemClassName, isOut) {
    console.log(elemClassName, isOut)
    const elem = $(`.${elemClassName}`)

    if (isOut === true) {
      $(elem).removeClass('animate__fadeInDown')
      $(elem).addClass('animate__fadeOutUp')
      return
    }

    $(elem).removeClass('animate__fadeOutUp')
    $(elem).addClass('animate__fadeInDown')
  }

  doFadeInUp (elemClassName, isOut) {
    const elem = $(`.${elemClassName}`)

    if (isOut === true) {
      $(elem).removeClass('animate__fadeInUp')
      $(elem).addClass('animate__fadeOutDown')
      return
    }

    $(elem).removeClass('animate__fadeOutDown')
    $(elem).addClass('animate__fadeInUp')
  }

  doFadeIn (elemClassName, isOut) {
    const elem = $(`.${elemClassName}`)

    if (isOut === true) {
      $(elem).removeClass('animate__fadeIn')
      $(elem).addClass('animate__fadeOut')
      return
    }

    $(elem).removeClass('animate__fadeOut')
    $(elem).addClass('animate__fadeIn')
  }
}
