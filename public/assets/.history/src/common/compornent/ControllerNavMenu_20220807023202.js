/* ---------------------------------------------------------------------------------
  ライブラリ
--------------------------------------------------------------------------------- */
import $ from 'jquery'

export class ControllerNavMenu {
  constructor () {
    this.$button = '.nav-menu__button'
    this.$button2 = '.nav-menu__button-in-contents'
  }

  doOpenOrClose (target) {
    const check = $(target).hasClass('close')
    if (check) {
      $(target).removeClass('close')
    } else {
      $(target).addClass('close')
    }
  }

  setEvent () {
    $(this.$button).on('click', (e) => {
      $(e.tar)
    })
  
    $(this.$button2).on('click', (e) => {
    })
  }
}