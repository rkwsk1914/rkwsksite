/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  順序有り注記。※印＋番号 コンポーネント
--------------------------------------------------------------------------------- */
export class NoteOlItem extends Component {
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
        <span className="simulator-note__item__number">※{this.props.number}</span>
        <div className="simulator-note__item__content">{this.props.content}</div>
      </li>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
NoteOlItem.propTypes = {
  number: PropTypes.string,
  content: PropTypes.any
}
