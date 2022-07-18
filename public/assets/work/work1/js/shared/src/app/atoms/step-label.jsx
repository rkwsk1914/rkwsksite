/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  STEP表示の赤いラベル コンポーネント
--------------------------------------------------------------------------------- */
export class StepLabel extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      number: this.props.number,
      totalNumber: this.props.totalNumber
    }
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  /**
   * ページ描写
   */
  render () {
    return (
      <div className="simulator-modal__step-label">
        <div className="simulator-modal__step-label__content">
          <span className="simulator-modal__step-label__content__step-text">STEP</span>
          <span className="simulator-modal__step-label__content__text">
            <strong>{this.state.number}</strong>&#047;{this.state.totalNumber}
          </span>
        </div>
      </div>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
StepLabel.propTypes = {
  number: PropTypes.number,
  totalNumber: PropTypes.number
}
