/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

/* ---------------------------------------------------------------------------------
  スライドトグル コンポーネント
--------------------------------------------------------------------------------- */
export class FadeToggle extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      contentClassName: this.props.contentClassName,
      uniquenessClassName: this.props.uniquenessClassName
    }
  }

  /**
   * コンポーネントがDOMにマウント（追加）された直後
   */
  componentDidMount () {
    this.checkProps()
  }

  /**
   * コンポーネントが再レンダーされされた直後
   */
  componentDidUpdate () {
    this.checkProps()
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  checkProps () {
    const isOpen = this.props.isOpen

    const classNameValue = this.state.uniquenessClassName ? `.${this.state.contentClassName}.${this.state.uniquenessClassName}` : `.${this.state.contentClassName}`

    switch (isOpen) {
      case false:
        $(classNameValue).fadeOut()
        break
      case true:
      default:
        $(classNameValue).fadeIn()
        break
    }
  }

  /**
   * ページ描写
   */
  render () {
    return (
      <div className={`${this.state.contentClassName} ${this.state.uniquenessClassName}`}>
        {this.props.content}
      </div>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
FadeToggle.propTypes = {
  isOpen: PropTypes.bool,
  content: PropTypes.any,
  contentClassName: PropTypes.string, // slide-toggle-content
  uniquenessClassName: PropTypes.string
}
