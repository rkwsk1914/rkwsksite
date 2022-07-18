/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

/* ---------------------------------------------------------------------------------
  金額表示 コンポーネント
--------------------------------------------------------------------------------- */
export class ValueOfMoney extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      textClassName: 'softbank-user-amount',
      speed: 5
    }
    this.timer = null
    this.stockSoftbankValue = 0
  }

  /**
   * コンポーネントが再レンダーされされた直後
   */
  componentDidUpdate () {
    this.checkDefault()
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  checkDefault () {
    const result = this.props.result
    const isStart = result.isStart

    if (isStart === false) {
      const $softbankAmount = `.${this.state.textClassName}`
      $($softbankAmount).addClass('default')
      $($softbankAmount).text('---')
      return
    }

    this.displayAmoutValue()
  }

  /* ---------------------------------------------------------------------------------
   * シュミレーター計算結果表示処理 サブ関数
  --------------------------------------------------------------------------------- */
  doGetSoftbankValue () {
    const result = this.props.result
    const softbankValue = {
      old: result.oldValue.softbankValue,
      new: result.value.softbankValue
    }
    return softbankValue
  }

  doGetPaymentValue () {
    const result = this.props.result

    const paymentValue = {
      old: result.oldValue.paymentValue,
      new: result.value.paymentValue
    }
    return paymentValue
  }

  /* ---------------------------------------------------------------------------------
   * シュミレーター計算結果カウントアップ・ダウン表示処理
  --------------------------------------------------------------------------------- */
  displayAmoutValue () {
    const speed = this.state.speed

    /* 金額結果のデータ取得 */
    // const paymentValue = this.doGetPaymentValue()
    const softbankValue = this.doGetSoftbankValue()

    // 余計なカウントダウンを回避
    if (this.stockSoftbankValue === softbankValue.new) {
      return
    }

    /* 金額結果を出力する要素の取得・初期化解除 */
    const $softbankAmount = `.${this.state.textClassName}`
    $($softbankAmount).removeClass('default')

    // let nowPaymentValue = paymentValue.old
    let nowSoftbankValue = softbankValue.old

    this.stockSoftbankValue = softbankValue.new

    /* カウントアップ初期化 */
    if (this.timer) {
      clearInterval(this.timer)
    }

    /* カウントアップ開始 */
    this.timer = setInterval(() => {
      // nowPaymentValue = this.checkIncreaseOrDecrease(nowPaymentValue, paymentValue.new ,$paymentAmount)
      nowSoftbankValue = this.checkIncreaseOrDecrease(nowSoftbankValue, softbankValue.new, $softbankAmount)

      if (nowSoftbankValue === softbankValue.new) {
        clearInterval(this.timer)
        this.timer = null
      }
    }, speed)
  }

  checkIncreaseOrDecrease (oldValue, newValue, $target) {
    let displayText
    if (oldValue === newValue) {
      displayText = newValue.toLocaleString()
      $($target).text(displayText)
      return newValue
    }

    if (oldValue < newValue) {
      const displayValue = this.increase(oldValue, newValue)
      displayText = displayValue.toLocaleString()
      $($target).text(displayText)
      return displayValue
    }

    if (oldValue > newValue) {
      const displayValue = this.decrease(oldValue, newValue)
      displayText = displayValue.toLocaleString()
      $($target).text(displayText)
      return displayValue
    }
  }

  increase (statNum, goalNum) {
    const diff = goalNum - statNum
    if (diff < 10) {
      statNum++
      return statNum
    }

    if (diff < 100) {
      statNum = statNum + 10
      return statNum
    }

    statNum = statNum + 100
    return statNum
  }

  decrease (statNum, goalNum) {
    const diff = statNum - goalNum
    if (diff < 10) {
      statNum--
      return statNum
    }

    if (diff < 100) {
      statNum = statNum - 10
      return statNum
    }

    statNum = statNum - 100
    return statNum
  }

  /**
   * ページ描写
   */
  render () {
    return (
      <p className="simulator-modal-value">
        <span className="simulator-modal-value__preText u-font-murecho">
        <span className="simulator-modal-value__preText__smallText">ざっくり</span>
          <span className="simulator-modal-value__preText__mainText">最大</span>
        </span>
        <span
          className={`simulator-modal-value__amountText default ${this.state.textClassName}`}
          id={this.state.textClassName}
        >---</span>
        <span className="simulator-modal-value__unit u-font-murecho">
          <span className="simulator-modal-value__unit__yen">円</span>
          <span className="simulator-modal-value__unit__month">相当/月</span>
        </span>
        <span className="simulator-modal-value__endText u-font-murecho">おトク!</span>
      </p>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
ValueOfMoney.propTypes = {
  result: PropTypes.object
}
