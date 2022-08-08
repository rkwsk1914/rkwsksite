/* ---------------------------------------------------------------------------------
  ライブラリ
--------------------------------------------------------------------------------- */
import $ from 'jquery'

export class ControllerNavMenu {
  constructor () {
    this.$button = '.nav-menu__button'
    this.$button2 = '.nav-menu__button-in-contents'
  }

  _doOpenOrClose (target) {
    const check = $(target).hasClass('close')
    if (check) {
      $(target).removeClass('close')
    } else {
      $(target).addClass('close')
    }
  }

  _setEvent () {
    $(this.$button).bind('click', (e) => {
      this._doOpenOrClose(e.target)
    })

    $(this.$button2).bind('click', (e) => {
      this._doOpenOrClose(e.target)
    })
  }
}