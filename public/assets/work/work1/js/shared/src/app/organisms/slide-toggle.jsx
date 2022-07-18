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
export class SlideToggle extends Component {
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
        $(classNameValue).slideUp()
        break
      case true:
      default:
        $(classNameValue).slideDown()
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
SlideToggle.propTypes = {
  isOpen: PropTypes.bool,
  content: PropTypes.any,
  contentClassName: PropTypes.string, // slide-toggle-content
  uniquenessClassName: PropTypes.string
}
