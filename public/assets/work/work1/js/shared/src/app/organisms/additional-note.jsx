/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
// import { AddtionalBubble } from './../atoms/addtional-bubble.jsx'
import { AddtionalBubbleBox } from './../atoms/addtional-bubble-box.jsx'
import { FadeToggle } from './../organisms/fade-toggle.jsx'
import { NoteUl } from './../molecules/note-ul.jsx'
import { NoteOl } from './../molecules/note-ol.jsx'

/* ---------------------------------------------------------------------------------
  シュミレータ設問カード チェックボックス コンポーネント
--------------------------------------------------------------------------------- */
export class AdditionalNote extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      className: 'simulator-modal__additional-note',
      questionId: this.props.questionId
    }
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */

  validatioinProps () {
    const props = this.props
    const cleanProps = {
      ulData: null,
      ulData2: null,
      ulAddTitle: null,
      olData: null,
      addtionalBubbleData: {
        content: null,
        notetData: null
      }
    }

    const addtionalData = props.addtionalData
    const addtionalDataKeys = Object.keys(addtionalData)
    if (addtionalDataKeys.length === 0) {
      return cleanProps
    }

    cleanProps.ulData = addtionalData.ulData ? addtionalData.ulData : null
    cleanProps.ulData2 = addtionalData.ulData2 ? addtionalData.ulData2 : null
    cleanProps.ulAddTitle = addtionalData.ulAddTitle ? addtionalData.ulAddTitle : null
    cleanProps.olData = addtionalData.olData ? addtionalData.olData : null

    const addtionalBubbleData = addtionalData.addtionalBubbleData
    const addtionalBubbleDataKeys = Object.keys(addtionalBubbleData)
    if (addtionalBubbleDataKeys.length === 0) {
      return cleanProps
    }

    cleanProps.addtionalBubbleData.content = addtionalBubbleData.content ? addtionalBubbleData.content : null
    cleanProps.addtionalBubbleData.notetData = addtionalBubbleData.notetData ? addtionalBubbleData.notetData : null

    return cleanProps
  }

  isAddTitle (cleanProps) {
    const ulAddTitle = cleanProps.ulAddTitle
    const ulData2 = cleanProps.ulData2
    if (ulAddTitle && ulData2) {
      return (<p className='simulator-modal__additional-note__subTitle'>{ulAddTitle}</p>)
    }

    return null
  }

  createContent () {
    const cleanProps = this.validatioinProps()
    const addTitle = this.isAddTitle(cleanProps)

    const addtionalBubbleBox = cleanProps.addtionalBubbleData.content ? <AddtionalBubbleBox contentText={cleanProps.addtionalBubbleData.content} listData={cleanProps.addtionalBubbleData.notetData} /> : null
    const noteUl = cleanProps.ulData ? <NoteUl listData={cleanProps.ulData} /> : null
    const noteUl2 = cleanProps.ulData2 ? <NoteUl listData={cleanProps.ulData2} /> : null
    const noteOl = cleanProps.olData ? <NoteOl listData={cleanProps.olData} /> : null

    return (
      <div>
        {addtionalBubbleBox}
        {noteUl}
        {addTitle}
        {noteUl2}
        {noteOl}
      </div>
    )
  }

  /**
   * ページ描写
   */
  render () {
    const content = this.createContent()

    return (
      <FadeToggle
        isOpen={this.props.isOpen}
        content={content}
        contentClassName={this.state.className}
        uniquenessClassName={this.state.questionId}
      />
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
AdditionalNote.propTypes = {
  questionId: PropTypes.string,
  addtionalData: PropTypes.object,
  isOpen: PropTypes.bool
}
