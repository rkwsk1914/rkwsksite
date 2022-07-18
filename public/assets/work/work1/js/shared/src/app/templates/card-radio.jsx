/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
import { ModalCloseButton } from './../atoms/modal-close-button.jsx'
import { StepLabel } from './../atoms/step-label.jsx'
import { AdditionalNote } from './../organisms/additional-note.jsx'
import { Radio } from './../atoms/radio.jsx'
import { ButtonBlue } from './../atoms/button-blue.jsx'
import { ButtonWhite } from './../atoms/button-white.jsx'

/* ---------------------------------------------------------------------------------
  シュミレータ設問カード ラジオボタン コンポーネント
--------------------------------------------------------------------------------- */
export class CardRadio extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      stepNumber: this.props.stepData.stepNumber,
      totalStepNumber: this.props.totalStepNumber,
      title: this.props.data.statement,
      questionId: this.props.stepData.questionId,
      nextCardId: this.props.stepData.nextCardId,
      previousCardId: this.props.stepData.previousCardId,
      ctrData: {
        category: '[MOBILE]_モバイル',
        action: 'シミュレーター_チェック'
      },
      latestSelectionId: ''
    }
    this.additionalNoteStock = {}
  }

  /* ---------------------------------------------------------------------------------
   * イベント関数リスト
  --------------------------------------------------------------------------------- */
  doGetInputValue (e) {
    this.setState({
      latestSelectionId: e.value
    })

    this.props.onChange({
      event: e,
      questionId: this.state.questionId
    })
  }

  doClickModalCloseButton () {
    this.props.onClick({
      type: 'modal'
    })
  }

  doClickNextCardButton () {
    this.props.onClick({
      type: 'card',
      nowCardId: this.state.questionId,
      changeCardId: this.state.nextCardId
    })
  }

  doClickPreviousCardButton () {
    this.props.onClick({
      type: 'card',
      nowCardId: this.state.questionId,
      changeCardId: this.state.previousCardId
    })
  }

  doClickResultButton () {
    this.props.onClick({
      type: 'result',
      nowCardId: this.state.questionId,
      changeCardId: this.state.nextCardId
    })
  }

  setInputAreaColumnPC () {
    const inputBoxColumn = this.props.stepData.layout.inputBoxColumn

    let setClassName = ''

    if (!inputBoxColumn) {
      return setClassName
    }

    switch (inputBoxColumn.pc) {
      case 1:
        break
      case 2:
        setClassName = 'u-pc-column-2'
        break
      case 3:
        setClassName = 'u-pc-column-3'
        break
      default:
        break
    }

    return setClassName
  }

  setInputAreaColumnSP () {
    const inputBoxColumn = this.props.stepData.layout.inputBoxColumn

    let setClassName = ''

    if (!inputBoxColumn) {
      return setClassName
    }

    switch (inputBoxColumn.sp) {
      case 1:
        break
      case 2:
        setClassName = 'u-sp-column-2'
        break
      case 3:
        setClassName = 'u-sp-column-3'
        break
      default:
        break
    }

    return setClassName
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  createInput () {
    const selections = this.props.data.selections
    const selectionNumber = Object.keys(selections)
    const questionId = this.state.questionId

    const doGetInputValue = (e) => this.doGetInputValue(e)

    const selectionDoms = []
    for (let index = 0; index < selectionNumber.length; index++) {
      const selectionId = selectionNumber[index]
      const selectionItem = selections[selectionId]

      const radiodata = {
        text: selectionItem.label,
        status: selectionItem.status,
        id: `question-${questionId}-${selectionId}`,
        name: questionId,
        value: selectionId
      }

      const ctrData = selectionItem.status ? selectionItem.ctr.on : selectionItem.ctr.off

      const selectionDom = (
        <Radio
          data={radiodata}
          id={questionId}
          ctrData={ctrData}
          key={index}
          onChange={doGetInputValue}
        />
      )
      selectionDoms.push(selectionDom)
    }
    return selectionDoms
  }

  switchButton () {
    const doClickNextCardButton = () => this.doClickNextCardButton()
    const doClickPreviousCardButton = () => this.doClickPreviousCardButton()
    const doClickResultButton = () => this.doClickResultButton()

    const nextCardId = this.state.nextCardId
    const isSelected = this.props.stepData.isSelected
    const ctrData = this.props.stepData.layout.ctr

    switch (isSelected) {
      case true:
        if (nextCardId === 'Result') {
          ctrData.blueButton.label = this.props.resultCtrLabel
          return (
            <ButtonBlue
              text={'結果を見る'}
              arrow={''}
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
        if (!this.state.previousCardId) {
          return null
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

  switchAdditionalNote () {
    const latestSelectionId = this.state.latestSelectionId
    if (latestSelectionId === '') {
      return null
    }

    /* 追加表示するコンポーネントに渡すデータ */
    let isOpen = false
    let additionalNoteRelayData = {}

    const selections = this.props.data.selections
    const inputData = selections[latestSelectionId]

    if (inputData.additionalNote && inputData.status === true) {
      const additionalNote = inputData.additionalNote
      additionalNoteRelayData = additionalNote
      this.additionalNoteStock = additionalNote
      isOpen = true
    }

    if (!inputData.additionalNote || inputData.status === false) {
      additionalNoteRelayData = this.additionalNoteStock
    }

    return (
      <AdditionalNote
        addtionalData={additionalNoteRelayData}
        isOpen={isOpen}
        questionId={this.state.questionId}
      />
    )
  }

  /**
   * ページ描写
   */
  render () {
    /* <AdditionalNote ulData={} olData={} addtionalBubble={addtionalBubbleTestData} /> */
    const selectionDoms = this.createInput()
    // const button = this.switchButton()
    const note = this.switchAdditionalNote()
    const inputAreaColumnPC = this.setInputAreaColumnPC()
    const inputAreaColumnSP = this.setInputAreaColumnSP()
    const quizBoyImg = this.props.stepData.layout.quizBoyImg
    const ctrData = this.props.stepData.layout.ctr

    const doClickModalCloseButton = () => this.doClickModalCloseButton()

    return (
      <div className="simulator-modal__card" id={this.state.questionId}>
        <ModalCloseButton onClick={doClickModalCloseButton} ctrData={ctrData.closeButton} />
        <div className="simulator-modal__card__head">
          <StepLabel number={this.state.stepNumber} totalNumber={this.state.totalStepNumber} />
          <h3 className="simulator-modal__card__head__title u-font-murecho">{this.state.title}</h3>
        </div>
        <div className="simulator-modal__card__body">
          <div className="simulator-modal__card__body__content">
            <div className={`simulator-modal__card__body__content__inpu-area ${inputAreaColumnPC} ${inputAreaColumnSP}`}>
              {selectionDoms}
            </div>
            {quizBoyImg}
          </div>
          {note}
        </div>
      </div>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
CardRadio.propTypes = {
  resultCtrLabel: PropTypes.string,
  totalStepNumber: PropTypes.number,
  data: PropTypes.object,
  stepData: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}
