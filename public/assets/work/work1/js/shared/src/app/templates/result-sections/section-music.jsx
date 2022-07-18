/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
import { CheckBox } from './../../atoms/check-box.jsx'
import { NoteUl } from './../../molecules/note-ul.jsx'
import { NoteOl } from './../../molecules/note-ol.jsx'

/* ---------------------------------------------------------------------------------
  明細エリア 音楽セクション
--------------------------------------------------------------------------------- */
export class SectionMusic extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      ctrData: {
        category: '[MOBILE]_モバイル',
        action: 'シミュレーター_チェック'
      }
    }
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  doGetInputValue (e) {
    this.props.onChange({
      status: e.isChekced,
      categoryKey: this.props.categoryId,
      selectionId: e.id
    })
  }

  createInput () {
    const selections = this.props.categoriesData.contents
    const selectionKeys = Object.keys(selections)

    const doGetInputValue = (e) => this.doGetInputValue(e)

    const selectionDoms = []
    for (let index = 0; index < selectionKeys.length; index++) {
      const selectionId = selectionKeys[index]
      const selectionItem = selections[selectionId]
      const contentId = `content-${this.props.categoryId}-${index}`

      const checkBoxData = {
        text: selectionItem.tagText,
        status: selectionItem.status,
        id: contentId,
        name: contentId,
        value: selectionId,
        isResetCheckBox: false
      }

      const ctrData = selectionItem.status ? selectionItem.ctr.on : selectionItem.ctr.off

      const selectionDom = (
        <div className="simulator-modal__card__body__detail-section__check-box" key={index}>
          <CheckBox
            data={checkBoxData}
            id={selectionId}
            ctrData={ctrData}
            onChange={doGetInputValue}
          />
          <p>
            7ヵ月目以降<span>{selectionItem.softBank.toLocaleString()}円</span>相当/月<br />
            PayPayポイント付与
          </p>
        </div>
      )
      selectionDoms.push(selectionDom)
    }
    return selectionDoms
  }

  /**
   * ページ描写
   */
  render () {
    const selectionDoms = this.createInput()

    return (
      <section className="simulator-modal__card__body__detail-section">
        <h4>{this.props.categoryId}</h4>
        {selectionDoms}
        <NoteUl listData={this.props.categoriesData.annotationUl} />
        <h5>【{this.props.categoriesData.noticeBadge}】</h5>
        <NoteUl listData={this.props.categoriesData.annotationUl2} />
        <NoteOl listData={this.props.categoriesData.annotationOl} />
      </section>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
SectionMusic.propTypes = {
  categoriesData: PropTypes.object,
  categoryId: PropTypes.string,
  onChange: PropTypes.func
}
