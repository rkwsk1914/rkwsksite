/* ---------------------------------------------------------------------------------
  ライブラリ
--------------------------------------------------------------------------------- */
import $ from 'jquery'

export class ControllerNavMenu {
  constructor () {
    this.$button = '.nav-menu-button'
    this.$button2 = '.nav-menu-button--in-contents'
    this._setEvent()
  }

  __doOpenOrClose (target) {
    const check = $(target).hasClass('close')
    if (check) {
      $(target).removeClass('close')
      $(target).removeClass('')
      $(target).addClass('animate__fadeInLeft')
    } else {
      $(target).addClass('close')
      $(target).removeClass('close')
      $(target).addClass('animate__fadeInLeft')
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
