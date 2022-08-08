import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

export class ContollerAnimateCss {
  constructor () {
    this.body = $('body')
  }

  doAnimate ($dom, animateClassName, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('do animate')
        $($dom).addClass(animateClassName)
      }, delay)
      resolve('')
    })
  }
}
