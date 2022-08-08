/* ---------------------------------------------------------------------------------
  ライブラリ
--------------------------------------------------------------------------------- */
import $ from 'jquery'
import { awatiFunction } from './AwatiFunction'

export class ControllerNavMenu {
  constructor () {
    this.$button = '.nav-menu-button'
    this.$button2 = '.nav-menu-button--in-contents'
    this.$menu = '.nav-menu'
    this._setEvent()
  }

  async __doOpenOrClose (target) {
    const check = $(target).hasClass('close')
    if (check) {
      $(target).removeClass('close')
      $(this.$menu).removeClass('show')
      $(this.$menu).removeClass('animate__fadeInLeft')
      $(this.$menu).addClass('animate__fadeOutLeft')
    } else {
      $(target).addClass('close')
      $(this.$menu).addClass('show')
      $(this.$menu).removeClass('animate__fadeOutLeft')
      $(this.$menu).addClass('animate__fadeInLeft')
    }
  }

  _setEvent () {
    $(this.$button).bind('click', (e) => {
      this.__doOpenOrClose(e.target)
    })

    $(this.$button2).bind('click', (e) => {
      this.__doOpenOrClose(e.target)
    })
  }
}
