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
  シュミレータスタートボタン コンポーネント
--------------------------------------------------------------------------------- */
export class SimulatorStartButton extends Component {
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

    this.props.onClick({
      target: this
    })
  }

  /**
   * ページ描写
   */
  render () {
    const doClick = (e) => this.doClick(e)
    const ctrData = this.props.ctrData

    return (
      <button
        className="simulator-start-button"
        data-ctr = {setDataOnclick(ctrData)}
        onClick={doClick}>
        <img src="./assets/img/shared/btn-simulator-modal-start-.png" alt="10秒で完了 START" />
      </button>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
SimulatorStartButton.propTypes = {
  onClick: PropTypes.func,
  ctrData: PropTypes.object
}
