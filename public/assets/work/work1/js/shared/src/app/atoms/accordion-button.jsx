/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  ロジックコンポーネント
--------------------------------------------------------------------------------- */
import { gaClick, setDataOnclick } from './../logical/control-ctr.js'

/* ---------------------------------------------------------------------------------
  アコーディオンボタン ボタン
--------------------------------------------------------------------------------- */
export class AccordionButton extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      openText: this.props.openText,
      closeText: this.props.closeText
    }
  }

  /* ---------------------------------------------------------------------------------
  * イベント関数リスト
  --------------------------------------------------------------------------------- */
  doClick (e) {
    const ctrData = this.props.ctrData
    gaClick(e, ctrData)
    this.props.onClick({})
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  changeButtonText () {
    const nowStatus = this.props.isOpen
    let text = ''
    switch (nowStatus) {
      case true:
        text = this.state.openText
        break
      case false:
      default:
        text = this.state.closeText
        break
    }
    return text
  }

  /**
   * ページ描写
   */
  render () {
    const buttonText = this.changeButtonText()
    const statusClass = this.props.isOpen ? 'open' : 'close'
    const ctrData = this.props.ctrData
    const doClick = (e) => this.doClick(e)

    return (
      <button className="simulator-modal__accrodion__button" data-onclick={setDataOnclick(ctrData)} onClick={doClick}>
        {buttonText}
        <span className={`simulator-modal__accrodion__button__icon ${statusClass}`}></span>
      </button>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
AccordionButton.propTypes = {
  isOpen: PropTypes.bool,
  openText: PropTypes.string,
  closeText: PropTypes.string,
  ctrData: PropTypes.object,
  onClick: PropTypes.func
}
