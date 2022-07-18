/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
import { NoteUlItem } from './../atoms/note-ul-item.jsx'

/* ---------------------------------------------------------------------------------
  順序有り注記。※印＋番号 コンポーネント
--------------------------------------------------------------------------------- */
export class NoteUl extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {}
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
  createItemDom () {
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
      const liDom = (
        <NoteUlItem content={content} key={index} />
      )
      liDoms.push(liDom)
    }
    return liDoms
  }

  /**
   * ページ描写
   */
  render () {
    const liDOms = this.createItemDom()
    return (
      <ul className="simulator-note">
        {liDOms}
      </ul>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
NoteUl.propTypes = {
  listData: PropTypes.object
}
