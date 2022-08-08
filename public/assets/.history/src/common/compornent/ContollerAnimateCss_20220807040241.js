import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { awatiFunction } from './AwatiFunction'

export class ContollerAnimateCss {
  constructor () {
    this.body = $('body')
  }

  _doInOrOut (elem, inClassName, outClassName, isOut) {
    if (isOut === true) {
      $(elem).removeClass(inClassName)
      $(elem).addClass(outClassName)
      return
    }

    $(elem).removeClass(outClassName)
    $(elem).addClass(inClassName)
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

    if (isOut !== true) {
      $(`.${elemClassName}`).removeClass('animate__fadeOut')
      $(`.${elemClassName}`).addClass('animate__fadeIn')
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

    if (isOut === true) {
      $(`.${elemClassName}`).removeClass('animate__fadeIn')
      $(`.${elemClassName}`).addClass('animate__fadeOut')
    }
  }

  doFadeInDown (elemClassName, isOut) {
    const elem = $(`.${elemClassName}`)
    this._doInOrOut(elem, 'animate__fadeInDown', 'animate__fadeOutUp', isOut)
  }

  doFadeInUp (elemClassName, isOut) {
    const elem = $(`.${elemClassName}`)
    this._doInOrOut(elem, 'animate__fadeInUp', 'animate__fadeOutDown', isOut)
  }

  doFadeIn (elemClassName, isOut) {
    const elem = $(`.${elemClassName}`)
    this._doInOrOut(elem, 'animate__fadeIn', 'animate__fadeOut', isOut)
}
