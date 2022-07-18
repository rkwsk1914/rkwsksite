/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
import { Radio } from './../../atoms/radio.jsx'
import { NoteUl } from './../../molecules/note-ul.jsx'
import { NoteOl } from './../../molecules/note-ol.jsx'

/* ---------------------------------------------------------------------------------
  明細エリア ショッピングセクション
--------------------------------------------------------------------------------- */
export class SectionShopping extends Component {
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
      const name = `content-${this.props.categoryId}`

      const radioData = {
        text: selectionItem.tagText,
        status: selectionItem.status,
        id: contentId,
        name: name,
        value: selectionId,
        isResetCheckBox: false
      }

      const ctrData = selectionItem.status ? selectionItem.ctr.on : selectionItem.ctr.off

      const selectionDom = (
        <div className="simulator-modal__card__body__detail-section__radio column-2" key={index}>
          <Radio
            data={radioData}
            id={selectionId}
            ctrData={ctrData}
            onChange={doGetInputValue}
          />
          <p>
            <span>{selectionItem.softBank.toLocaleString()}円</span>相当/月<br />
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
        <NoteOl listData={this.props.categoriesData.annotationOl} />
      </section>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
SectionShopping.propTypes = {
  categoriesData: PropTypes.object,
  categoryId: PropTypes.string,
  onChange: PropTypes.func
}
