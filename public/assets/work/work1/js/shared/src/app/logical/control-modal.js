import $ from 'jquery'

/**
 * モーダル処理クラス
 * @param {*} contentClassName モーダル内コンテンツ要素のクラス名
 * @param {*} defaultCardId 初期表示するモーダル内のカード要素のid名
 * @param {*} amountCardClassName モーダル下部に表示する金額表示ボックス要素のクラス名
 */
export class ControlModal {
  constructor (contentClassName, defaultCardId, amountCardClassName) {
    this.amountCardClassName = amountCardClassName
    this.contentClassName = contentClassName
    this.changeCardSpees = 300
    this.defaultCardId = defaultCardId
    this.nowCardId = defaultCardId
  }

  open () {
    $('body').css({
      overflow: 'hidden'
    })
    $('html').css({
      overflow: 'hidden'
    })
    $(`.${this.contentClassName}`).removeClass('close')
    $(`.${this.contentClassName}`).addClass('open')
  }

  close () {
    $('body').css({
      overflow: 'auto'
    })
    $('html').css({
      overflow: 'auto'
    })
    $(`.${this.contentClassName}`).removeClass('open')
    $(`.${this.contentClassName}`).addClass('close')
    $(`#${this.nowCardId}`).css({
      display: 'none'
    })
    $(`#${this.defaultCardId}`).css({
      display: 'block'
    })
    $(`.${this.amountCardClassName}`).css({
      display: 'block'
    })
    this.nowCardId = this.defaultCardId
  }

  changeCard (changeCardId) {
    $(`#${this.nowCardId}`).fadeOut(this.changeCardSpees)
    this.nowCardId = changeCardId

    setTimeout(() => {
      $(`#${changeCardId}`).fadeIn(this.changeCardSpees)
    }, this.changeCardSpees)
  }

  reStartCard (changeCardId) {
    $(`#${this.nowCardId}`).fadeOut(this.changeCardSpees)
    this.nowCardId = changeCardId

    setTimeout(() => {
      $(`#${changeCardId}`).fadeIn(this.changeCardSpees)
      $(`.${this.amountCardClassName}`).fadeIn(this.changeCardSpees)
    }, this.changeCardSpees)
  }

  showResultCard (resultCardId) {
    $(`#${this.nowCardId}`).fadeOut(this.changeCardSpees)
    $(`.${this.amountCardClassName}`).fadeOut(this.changeCardSpees)
    this.nowCardId = resultCardId

    setTimeout(() => {
      $(`#${resultCardId}`).fadeIn(this.changeCardSpees)
    }, this.changeCardSpees)
  }
}
