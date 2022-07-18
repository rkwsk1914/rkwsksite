/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
// import $ from 'jquery'

/* ---------------------------------------------------------------------------------
  シュミレーターコンポーネントのステータスデータ
--------------------------------------------------------------------------------- */
import { CONFIG_QUESTION_DATA } from '../config/questions-data.jsx'
import { CONFIG_AMOUNT_DATA } from '../config/amount-data.jsx'
import { CONFIG_RESULT_DATA } from '../config/result-data'
import { CONFIG_STEP_DATA } from '../config/step-data.jsx'
import { CONFIG_CTR_DATA } from '../config/ctr-data.js'

/* ---------------------------------------------------------------------------------
  ロジックコンポーネント
--------------------------------------------------------------------------------- */
import { ControlModal } from '../logical/control-modal.js'
import { ControlSimulator } from '../logical/control-simulator.js'
import { setResultCtrLabel } from '../logical/control-ctr.js'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
import { SimulatorStartButton } from '../atoms/simulator-start-button.jsx'

import { CardRadio } from '../templates/card-radio.jsx'
import { CardCheckBox } from '../templates/card-checkbox.jsx'
import { CardResult } from '../templates/card-result.jsx'
import { CardHowTo } from '../templates/card-how-to.jsx'
import { UnderResultBox } from '../templates/under-result-box.jsx'

/* ---------------------------------------------------------------------------------
  ざっくりシュミレーターメインコンポーネント
--------------------------------------------------------------------------------- */
export class Simulator extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      modalClassName: 'simulator-modal',
      modalDefaultStatus: 'close',
      amountCardClassName: 'simulator-modal__under-result-box',
      nowCardId: 'Q1',
      defaultCardId: 'Q1',
      questionsData: CONFIG_QUESTION_DATA,
      amountData: CONFIG_AMOUNT_DATA,
      result: CONFIG_RESULT_DATA,
      stepData: CONFIG_STEP_DATA,
      isReset: false
    }
    this.controlModal = new ControlModal(this.state.modalClassName, this.state.defaultCardId, this.state.amountCardClassName)
    this.controlSimulator = new ControlSimulator()
  }

  /**
   * コンポーネントがDOMにマウント（追加）された直後
   */
  componentDidMount () {}

  /**
   * コンポーネントが再レンダーされされた直後
   */
  componentDidUpdate () {}

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用するサブ関数リスト
  --------------------------------------------------------------------------------- */

  /**
   * チェックボックスが選択済みか確認
   * @param {*} newQuestionsData 最新の設問データ
   * @param {*} questionId 対象の設問カードid
   * @returns
   */
  checkCheckBoxHasSelected (newQuestionsData, questionId) {
    const questionsItem = newQuestionsData[questionId]
    const selections = questionsItem.selections
    const selectionNumber = Object.keys(selections)
    for (let index = 0; index < selectionNumber.length; index++) {
      const selectionId = selectionNumber[index]
      const selectionItem = selections[selectionId]
      const isChecked = selectionItem.status

      if (isChecked === true) {
        return true
      }
    }

    return false
  }

  /**
   * 対象の設問カードで選択肢が選択済みか確認し、ステータス更新
   * @param {*} questionId 設問id
   * @param {*} hasChecked チェックボックスが選択済みか
   * @returns stepData
   */
  changeCardStatus (questionId, hasChecked) {
    const stepData = this.state.stepData

    switch (hasChecked) {
      case true:
        stepData[questionId].isSelected = true
        break
      case false:
        stepData[questionId].isSelected = false
        break
      default:
        stepData[questionId].isSelected = true
        break
    }

    return stepData
  }

  /* ---------------------------------------------------------------------------------
   * リセット関数リスト
  --------------------------------------------------------------------------------- */
  upDataResult () {
    const newResult = this.controlSimulator.main()
    const result = this.state.result
    result.isStart = true
    result.oldValue.softbankValue = newResult.oldValue.softbankValue
    result.oldValue.paymentValue = newResult.oldValue.paymentValue
    result.value.softbankValue = newResult.value.softbankValue
    result.value.paymentValue = newResult.value.paymentValue

    return result
  }

  resetStepData () {
    const stepData = this.state.stepData

    const stepKey = Object.keys(stepData)
    for (let index = 0; index < stepKey.length; index++) {
      const step = stepKey[index]
      stepData[step].isSelected = false
    }

    return stepData
  }

  resetDataResult (newSimulatorData) {
    const result = this.state.result
    const newResult = newSimulatorData.result

    result.isStart = false
    result.oldValue.softbankValue = newResult.oldValue.softbankValue
    result.oldValue.paymentValue = newResult.oldValue.paymentValue
    result.value.softbankValue = newResult.value.softbankValue
    result.value.paymentValue = newResult.value.paymentValue
    return result
  }

  /* ---------------------------------------------------------------------------------
   * モーダル関数リスト
  --------------------------------------------------------------------------------- */
  openModal () {
    this.controlModal.open()
  }

  closeModal () {
    this.controlModal.close()
    const newSimulatorData = this.controlSimulator.reset()
    const result = this.resetDataResult(newSimulatorData)
    const stepData = this.resetStepData()

    this.setState({
      questionsData: newSimulatorData.questionsData,
      amountData: newSimulatorData.amountData,
      result: result,
      stepData: stepData
    })
  }

  restartModal (e) {
    this.controlModal.reStartCard(e.changeCardId)
    const newSimulatorData = this.controlSimulator.reset()
    const result = this.resetDataResult(newSimulatorData)
    const stepData = this.resetStepData()

    this.setState({
      questionsData: newSimulatorData.questionsData,
      amountData: newSimulatorData.amountData,
      result: result,
      stepData: stepData,
      isReset: true
    })
  }

  /* ---------------------------------------------------------------------------------
   * イベント関数リスト
  --------------------------------------------------------------------------------- */
  doClickCardButton (e) {
    switch (e.type) {
      case 'modal':
        this.closeModal()
        this.setState({
          nowCardId: this.state.defaultCardId
        })
        break
      case 'card':
        this.controlModal.changeCard(e.changeCardId)
        this.setState({
          nowCardId: e.changeCardId
        })
        break
      case 'result':
        this.controlModal.showResultCard(e.changeCardId)
        this.setState({
          nowCardId: e.changeCardId
        })
        break
      case 'restart':
        this.restartModal(e)
        this.setState({
          nowCardId: this.state.defaultCardId
        })
        break
      case 'release reset':
        this.setState({
          isReset: false
        })
        break
      default:
        break
    }
  }

  doGetRadioData (e) {
    const newQuestionsData = this.controlSimulator.updateOfRadioStatus(e.event)
    const result = this.upDataResult()

    const stepData = this.changeCardStatus(e.questionId)

    this.setState({
      questionsData: newQuestionsData,
      stepData: stepData,
      result: result
    })
  }

  doGetCheckBoxData (e) {
    const newQuestionsData = this.controlSimulator.updateOfCheckBoxStatus(e.event)
    const result = this.upDataResult()

    const hasChecked = this.checkCheckBoxHasSelected(newQuestionsData, e.questionId)
    const stepData = this.changeCardStatus(e.questionId, hasChecked)

    this.setState({
      questionsData: newQuestionsData,
      stepData: stepData,
      result: result
    })
  }

  doGetDetailArea (e) {
    const newAmountData = this.controlSimulator.updateOfDetailAreaStatus(e.event)
    const result = this.controlSimulator.doChangeNewestResult(newAmountData)

    this.setState({
      amountData: newAmountData,
      result: result
    })
  }

  /**
   * ページ描写
   */
  render () {
    const openModal = () => this.openModal()
    const doClickCardButton = (e) => this.doClickCardButton(e)
    const doGetRadioData = (e) => this.doGetRadioData(e)
    const doGetCheckBoxData = (e) => this.doGetCheckBoxData(e)
    const doGetDetailArea = (e) => this.doGetDetailArea(e)

    const modalClassName = `${this.state.modalClassName} ${this.state.modalDefaultStatus}`
    const stepData = this.state.stepData
    const resultCtrLabel = setResultCtrLabel(this.state.questionsData)

    const totalStepNumberProperty = Object.keys(this.state.questionsData)
    const totalStepNumber = totalStepNumberProperty.length

    return (
      <div className="simulator__content">
        <SimulatorStartButton
          ctrData={CONFIG_CTR_DATA.SIMULATOR_DONE}
          onClick={openModal} />

        <div className={modalClassName}>
          <div className={`${this.state.modalClassName}__wallpaper`}>
            <CardRadio
              data={this.state.questionsData.Q1}
              stepData={stepData.Q1}
              totalStepNumber={totalStepNumber}
              resultCtrLabel={resultCtrLabel}
              onClick={doClickCardButton}
              onChange={doGetRadioData} />
            <CardCheckBox
              data={this.state.questionsData.Q2}
              stepData={stepData.Q2}
              totalStepNumber={totalStepNumber}
              resultCtrLabel={resultCtrLabel}
              onClick={doClickCardButton}
              onChange={doGetCheckBoxData} />
            <CardRadio
              data={this.state.questionsData.Q3}
              stepData={stepData.Q3}
              totalStepNumber={totalStepNumber}
              resultCtrLabel={resultCtrLabel}
              onClick={doClickCardButton}
              onChange={doGetRadioData} />
            <CardResult
              data={this.state.amountData}
              stepData={stepData.Result}
              result={this.state.result}
              isReset={this.state.isReset}
              onClick={doClickCardButton}
              onChange={doGetDetailArea} />
            <CardHowTo
              data={this.state.questionsData.Q3}
              stepData={stepData.HowTo}
              totalStepNumber={totalStepNumber}
              resultCtrLabel={resultCtrLabel}
              onClick={doClickCardButton}
              onChange={doGetRadioData} />
            <UnderResultBox
              classData ={this.state.amountCardClassName}
              nowCardId={this.state.nowCardId}
              resultCtrLabel={resultCtrLabel}
              result={this.state.result}
              isSelected={this.state.stepData[this.state.nowCardId].isSelected}
              onClick={doClickCardButton}
            />
          </div>
        </div>

      </div>
    )
  }
}
