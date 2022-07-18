/* ----------------------------------------------------------------
  設定データ
----------------------------------------------------------------- */
import { CONFIG_QUESTION_DATA } from './../config/questions-data.jsx'
import { CONFIG_AMOUNT_DATA } from './../config/amount-data.jsx'
import { CONFIG_RESULT_DATA } from './../config/result-data'

/**
 * 金額計算のクラス
 */
export class CalculationValue {
  constructor () {
    this.questionsData = CONFIG_QUESTION_DATA
    this.amountData = CONFIG_AMOUNT_DATA
    this.result = CONFIG_RESULT_DATA
  }

  /**
   * 各設問の選択肢の選択状況から
   * 新しい明細エリアの選択状況を取得
   * @returns list
   */
  getRelatedAmountDataList () {
    const list = []
    const questionsData = this.questionsData
    const questionsIDs = Object.keys(questionsData)
    for (let index = 0; index < questionsIDs.length; index++) {
      const questionId = questionsIDs[index]
      const question = questionsData[questionId]
      const selections = question.selections

      const selectionsIDs = Object.keys(selections)
      for (let secIndex = 0; secIndex < selectionsIDs.length; secIndex++) {
        const selectionId = selectionsIDs[secIndex]
        const status = questionsData[questionId].selections[selectionId].status
        if (status === true) {
          const relatedAmountData = questionsData[questionId].selections[selectionId].relatedAmountData
          list.push(relatedAmountData)
        }
      }
    }
    return list
  }

  /**
   * 明細エリアの選択状況をリセット
   * @returns nowAmountData シュミレーターの最新の明細データ
   */
  resetAmountData () {
    const nowAmountData = this.amountData
    const categories = nowAmountData.categories
    const categoriesTitles = Object.keys(categories)

    for (let index = 0; index < categoriesTitles.length; index++) {
      const categoryTitle = categoriesTitles[index]
      const category = categories[categoryTitle]

      const categoryContens = category.contents
      const contentTitles = Object.keys(categoryContens)

      for (let contentIndex = 0; contentIndex < contentTitles.length; contentIndex++) {
        const contentTitle = contentTitles[contentIndex]
        nowAmountData.categories[categoryTitle].contents[contentTitle].status = false
      }
    }

    this.amountData = nowAmountData
    return nowAmountData
  }

  /**
   * シュミレータ計算用のデータを取得
   * @param {*} resetAmountData リセットした明細エリアの選択状況
   * @param {*} relatedAmountDataList 新しい明細エリアの選択状況
   * @returns resetAmountData
   */
  getNewAmountData (resetAmountData, relatedAmountDataList) {
    for (let listIndex = 0; listIndex < relatedAmountDataList.length; listIndex++) {
      const relatedAmountData = relatedAmountDataList[listIndex]
      const categories = relatedAmountData.categories
      const categoriesTitles = Object.keys(categories)

      for (let index = 0; index < categoriesTitles.length; index++) {
        const categoryTitle = categoriesTitles[index]
        const category = categories[categoryTitle]
        const categoryContens = category.contents

        for (let contentIndex = 0; contentIndex < categoryContens.length; contentIndex++) {
          const contentTitle = categoryContens[contentIndex]

          resetAmountData.categories[categoryTitle].contents[contentTitle].status = true
        }
      }
    }
    return resetAmountData
  }

  /**
   * 計算処理
   */

  /**
   * 明細データの計算
   * @param {*} newAmountData シュミレーターの最新の明細データ
   * @returns result おトク額の結果
   */
  calculationAmountData (newAmountData) {
    const result = {
      softbankValue: 0,
      paymentValue: 0
    }

    const categories = newAmountData.categories
    const categoriesTitles = Object.keys(categories)

    for (let index = 0; index < categoriesTitles.length; index++) {
      const categoryTitle = categoriesTitles[index]
      const category = categories[categoryTitle]

      const categoryContens = category.contents
      const contentTitles = Object.keys(categoryContens)

      for (let contentIndex = 0; contentIndex < contentTitles.length; contentIndex++) {
        const contentTitle = contentTitles[contentIndex]

        if (newAmountData.categories[categoryTitle].contents[contentTitle].status === true) {
          result.softbankValue = result.softbankValue + newAmountData.categories[categoryTitle].contents[contentTitle].softBank
          result.paymentValue = result.paymentValue + newAmountData.categories[categoryTitle].contents[contentTitle].payment
        }
      }
    }
    return result
  }

  /**
   * シュミレータ計算メイン処理
   */
  main () {
    const amountData = this.amountData

    /* 明細エリアの選択状況を自動更新 */
    const relatedAmountDataList = this.getRelatedAmountDataList()
    const resetAmountData = this.resetAmountData(amountData)
    const newAmountData = this.getNewAmountData(resetAmountData, relatedAmountDataList)

    /* 金額データ計算 */
    this.result.oldValue = this.result.value
    this.result.value = this.calculationAmountData(newAmountData)

    const resultData = {
      oldValue: this.result.oldValue,
      value: this.result.value
    }

    return resultData
  }

  /**
   * シュミレータ計算メイン処理
   * 明細エリア表示後の更新処理
   * @param {*} newAmountData シュミレーターの最新の明細データ
   * @returns resultData おトク額の結果
   */
  doChangeNewestResult (newAmountData) {
    /* 金額データ計算 */
    this.result.oldValue = this.result.value
    this.result.value = this.calculationAmountData(newAmountData)

    const resultData = {
      oldValue: this.result.oldValue,
      value: this.result.value
    }

    return resultData
  }
}
