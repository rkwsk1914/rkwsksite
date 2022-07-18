/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonBlue } from './../atoms/button-blue.jsx'
import { ButtonWhite } from './../atoms/button-white.jsx'
/* ---------------------------------------------------------------------------------
  金額表示 コンポーネント
--------------------------------------------------------------------------------- */
export class ProgressButton extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {}
  }

  /**
   * コンポーネントが再レンダーされされた直後
   */
  componentDidUpdate () {}

  doClickNextCardButton () {
    this.props.onClick({
      type: 'card',
      nowCardId: this.props.stepdata.questionId,
      changeCardId: this.props.stepdata.nextCardId
    })
  }

  doClickPreviousCardButton () {
    this.props.onClick({
      type: 'card',
      nowCardId: this.props.stepdata.questionId,
      changeCardId: this.props.stepdata.previousCardId
    })
  }

  doClickResultButton () {
    this.props.onClick({
      type: 'result',
      nowCardId: this.props.stepdata.questionId,
      changeCardId: this.props.stepdata.nextCardId
    })
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  switchButton () {
    const doClickNextCardButton = () => this.doClickNextCardButton()
    const doClickPreviousCardButton = () => this.doClickPreviousCardButton()
    const doClickResultButton = () => this.doClickResultButton()

    // const questionId = this.props.stepdata.questionId
    const nextCardId = this.props.stepdata.nextCardId
    const previousCardId = this.props.stepdata.previousCardId
    const ctrData = this.props.stepdata.layout.ctr

    const isSelected = this.props.isSelected

    switch (isSelected) {
      case true:
        if (nextCardId === 'Result') {
          ctrData.blueButton.label = this.props.resultCtrLabel
          return (
            <ButtonBlue
              text={'結果を見る'}
              arrow={'right'}
              isDisabled={false}
              ctrData={ctrData.blueButton}
              onClick={doClickResultButton}
            />
          )
        }
        return (
          <ButtonBlue
            text={'次に進む'}
            arrow={'right'}
            isDisabled={false}
            ctrData={ctrData.blueButton}
            onClick={doClickNextCardButton}
          />
        )
      case false:
        if (!previousCardId) {
          return (
            <ButtonBlue
              text={'次に進む'}
              arrow={'right'}
              isDisabled={true}
              ctrData={ctrData.blueButton}
              onClick={doClickNextCardButton}
            />
          )
        }

        return (
          <ButtonWhite
            text={'前へ戻る'}
            arrow={'left'}
            isDisabled={false}
            ctrData={ctrData.whiteButton}
            onClick={doClickPreviousCardButton}
          />
        )
      default:
        return null
    }
  }

  /* ---------------------------------------------------------------------------------
   * シュミレーター計算結果表示処理 サブ関数
  --------------------------------------------------------------------------------- */

  /* ---------------------------------------------------------------------------------
   * シュミレーター計算結果カウントアップ・ダウン表示処理
  --------------------------------------------------------------------------------- */

  /**
   * ページ描写
   */
  render () {
    const button = this.switchButton()
    return (button)
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
ProgressButton.propTypes = {
  resultCtrLabel: PropTypes.string,
  stepdata: PropTypes.object,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
