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
  モーダル黒丸（●）閉じるボタン コンポーネント
--------------------------------------------------------------------------------- */
export class ModalCloseButton extends Component {
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
        className="simulator-modal__close-btn"
        onClick={doClick}
        data-onclick={setDataOnclick(ctrData)}
      ></button>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
ModalCloseButton.propTypes = {
  ctrData: PropTypes.object,
  onClick: PropTypes.func
}
