/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  黒い吹き出し コンポーネント
--------------------------------------------------------------------------------- */
export class AddtionalBubble extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      contentText: this.props.contentText,
      listData: this.props.listData
    }
  }

  /**
   * コンポーネントがDOMにマウント（追加）された直後
   */
  componentDidMount () {
  }

  /**
   * コンポーネントが再レンダーされされた直後
   */
  componentDidUpdate () {
  }

  /**
   * コンポーネントがDOMにアンマウント（削除）された直後
   */
  componentWillUnmount () {}

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  createNoteListItemDom () {
    const listData = this.state.listData
    const liDoms = []

    if (!listData) {
      return null
    }

    const listKeys = Object.keys(listData)
    listKeys.sort()

    for (let index = 0; index < listKeys.length; index++) {
      const listKey = listKeys[index]
      const content = listData[listKey]
      /* const number = listKey */
      const liDom = (
        <li className="simulator-modal__addtional-bubble__note-list__item" key={index}>
          <span className="simulator-modal__addtional-bubble__note-list__item__burette">*</span>
          <div className="simulator-modal__addtional-bubble__note-list__item__content">
            {content}
          </div>
        </li>
      )
      liDoms.push(liDom)
    }
    return liDoms
  }

  /**
   * ページ描写
   */
  render () {
    const liDOms = this.createNoteListItemDom()

    return (
      <div className="simulator-modal__addtional-bubble">
        <div className="simulator-modal__addtional-bubble__content">{this.state.contentText}</div>
        <ul className="simulator-modal__addtional-bubble__note-list">
          {liDOms}
        </ul>
      </div>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
AddtionalBubble.propTypes = {
  contentText: PropTypes.object,
  listData: PropTypes.object
}
