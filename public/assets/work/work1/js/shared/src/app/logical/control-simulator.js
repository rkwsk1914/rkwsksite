/* ----------------------------------------------------------------
  サブコンポーネント
----------------------------------------------------------------- */
import { CalculationValue } from './calculation-value.js'

/**
 * シュミレータの各種処理クラス
 */
export class ControlSimulator extends CalculationValue {
  /**
   * ラジオボタンの選択情報を更新
   * @param {*} changeEvent ラジオボタンのチェンジイベントオブジェクト
   * @returns this.questionsData 全設問データ
   */
  updateOfRadioStatus (changeEvent) {
    /* 新たに選択されたラジオボタンの情報を取得 */
    const upDataQuestionId = changeEvent.id
    const upDataSelectionId = changeEvent.value
    const upDataStatus = changeEvent.isChekced

    /* 管理している設問データの分解 */
    const questionsData = this.questionsData
    const questionsItem = questionsData[upDataQuestionId]
    const selections = questionsItem.selections
    const selectionNumber = Object.keys(selections)

    /* 設問データループ */
    for (let index = 0; index < selectionNumber.length; index++) {
      const selectionId = selectionNumber[index]

      if (selectionId === upDataSelectionId) {
        this.questionsData[upDataQuestionId].selections[selectionId].status = upDataStatus
        continue
      }

      this.questionsData[upDataQuestionId].selections[selectionId].status = false
    }

    return this.questionsData
  }

  /**
   * チェックボックスの選択情報を更新
   * @param {*} changeEvent チェックボックスのチェンジイベントオブジェクト
   * @returns this.questionsData 全設問データ
   */
  updateOfCheckBoxStatus (changeEvent) {
    /* 新たに選択されたラジオボタンの情報を取得 */
    const upDataQuestionId = changeEvent.id
    const upDataSelectionId = changeEvent.value
    const upDataStatus = changeEvent.isChekced
    const isResetCheckBox = changeEvent.isResetCheckBox

    /* 管理している設問データの分解 */
    const questionsData = this.questionsData
    const questionsItem = questionsData[upDataQuestionId]
    const selections = questionsItem.selections
    const selectionNumber = Object.keys(selections)

    /* 設問データループ */
    for (let index = 0; index < selectionNumber.length; index++) {
      const selectionId = selectionNumber[index]
      const isResetCheckBoxItem = this.questionsData[upDataQuestionId].selections[selectionId].resetCheckBox

      /* 対象の選択情報を更新 */
      if (selectionId === upDataSelectionId) {
        this.questionsData[upDataQuestionId].selections[selectionId].status = upDataStatus
        continue
      }

      /* 「特になし」を選択した場合、その他の選択肢の選択を解除 */
      if (isResetCheckBox === true) {
        this.questionsData[upDataQuestionId].selections[selectionId].status = false
        continue
      }

      /* 「特になし」以外を選択した場合、「特になし」の選択を解除 */
      if (isResetCheckBox === false) {
        if (isResetCheckBoxItem === true) {
          this.questionsData[upDataQuestionId].selections[selectionId].status = false
          continue
        }
      }
    }

    return this.questionsData
  }

  /**
   * 明細エリアのチェックボックスの選択情報を更新
   * @param {*} changeEvent チェックボックスとラジオボタンのチェンジイベントオブジェクト
   * @returns amountData 全設問データ
   */
  updateOfDetailAreaStatus (changeEvent) {
    /* 更新箇所を取得 */
    const newStatus = changeEvent.status
    const newCategoryKey = changeEvent.categoryKey
    const newSelectionId = changeEvent.selectionId

    const amountData = this.amountData
    const categories = amountData.categories
    const categoryKeys = Object.keys(categories)

    /* リセット */
    for (let indexCategory = 0; indexCategory < categoryKeys.length; indexCategory++) {
      const categoryKey = categoryKeys[indexCategory]
      const category = categories[categoryKey]

      const inputType = category.inputType
      const selections = category.contents
      const selectionKeys = Object.keys(selections)

      for (let indexSelection = 0; indexSelection < selectionKeys.length; indexSelection++) {
        const selectionId = selectionKeys[indexSelection]
        const selectionItem = selections[selectionId]

        if (inputType === 'radio' && categoryKey === newCategoryKey) {
          selectionItem.status = false
        }
      }
    }

    categories[newCategoryKey].contents[newSelectionId].status = newStatus

    amountData.categories = categories
    this.amountData = amountData

    return amountData
  }

  /**
   * 設問データのリセット処理
   * @param {*} upDataQuestionId 対象の設問id
   *
   * reset()関数内の設問データのループ内で呼び出しされる
   * 各設問の選択情報を非選択に変更
   */
  resetQuestions (upDataQuestionId) {
    const questionsData = this.questionsData
    const questionsItem = questionsData[upDataQuestionId]
    const selections = questionsItem.selections
    const selectionNumber = Object.keys(selections)

    for (let index = 0; index < selectionNumber.length; index++) {
      const selectionId = selectionNumber[index]
      this.questionsData[upDataQuestionId].selections[selectionId].status = false
    }
  }

  /**
   * 設問の選択状況のリセット
   * 金額データのリセット
   * @returns this
   */
  reset () {
    const questionKey = Object.keys(this.questionsData)
    for (let index = 0; index < questionKey.length; index++) {
      const upDataQuestionId = questionKey[index]
      this.resetQuestions(upDataQuestionId)
    }

    this.result.oldValue.softbankValue = 0
    this.result.oldValue.paymentValue = 0
    this.result.value.softbankValue = 0
    this.result.value.paymentValue = 0

    return this
  }
}
