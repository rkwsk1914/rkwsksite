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
  青ボタン コンポーネント
--------------------------------------------------------------------------------- */
export class ButtonBanner extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {}
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  doClick (e) {
    const ctrData = this.props.ctrData
    gaClick(e, ctrData)
    this.props.onClick({})
  }

  /**
   * ページ描写
   */
  render () {
    const doClick = (e) => this.doClick(e)
    const ctrData = this.props.ctrData

    return (
      <button
      className="simulator-button--banner"
      data-onclick={setDataOnclick(ctrData)}
      data-arrow={this.props.arrow}
      disabled={this.props.isDisabled}
      onClick={doClick}
      >
        {this.props.dom}
      </button>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
ButtonBanner.propTypes = {
  text: PropTypes.string,
  arrow: PropTypes.string,
  isDisabled: PropTypes.bool,
  ctrData: PropTypes.object,
  onClick: PropTypes.func,
  dom: PropTypes.object
}
