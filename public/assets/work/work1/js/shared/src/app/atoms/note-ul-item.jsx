/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  順序なし注記。ビュレット コンポーネント
--------------------------------------------------------------------------------- */
export class NoteUlItem extends Component {
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
  /**
   * ページ描写
   */
  render () {
    return (
      <li className="simulator-note__item">
        <span className="simulator-note__item__dot">・</span>
        <div className="simulator-note__item__content">{this.props.content}</div>
      </li>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
NoteUlItem.propTypes = {
  content: PropTypes.any
}
