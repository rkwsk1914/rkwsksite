/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
import { NoteOlItem } from './../atoms/note-ol-item.jsx'

/* ---------------------------------------------------------------------------------
  順序なし注記。ビュレット コンポーネント
--------------------------------------------------------------------------------- */
export class NoteOl extends Component {
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
      const number = listKeys[index]
      const liDom = (
        <NoteOlItem number={number} content={content} key={index} />
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
      <ol className="simulator-note">
        {liDOms}
      </ol>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
NoteOl.propTypes = {
  listData: PropTypes.object
}
