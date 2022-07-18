/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  設問の各選択肢に付随する注記ボックス コンポーネント
--------------------------------------------------------------------------------- */
export class AddtionalBubbleBox extends Component {
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
  createNoteListItemDom () {
    const listData = this.props.listData
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
        <li className="simulator-modal__addtional-bubble-box__note-list__item" key={index}>
          <span className="simulator-modal__addtional-bubble-box__note-list__item__burette">※</span>
          <div className="simulator-modal__addtional-bubble-box__note-list__item__content">
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
      <div className="simulator-modal__addtional-bubble-box">
        <div className="simulator-modal__addtional-bubble-box__content">{this.props.contentText}</div>
        <ul className="simulator-modal__addtional-bubble-box__note-list">
          {liDOms}
        </ul>
      </div>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
AddtionalBubbleBox.propTypes = {
  contentText: PropTypes.object,
  listData: PropTypes.object
}
