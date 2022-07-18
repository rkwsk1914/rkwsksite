/**
 * 計測タグクリックイベント
 * @param {*} e イベントオブジェクト
 * @param {*} category category
 * @param {*} action action
 * @param {*} label label
 * @returns
 */
export const gaClick = (e, ctr) => {
  if (!ctr) {
    return
  }

  let target
  let tagName

  if (e) {
    target = e.target
    tagName = target.tagName
  }

  if (tagName === 'INPUT') {
    return
  }
  console.log('gaclick', `_ga.spotEvent('${ctr.category}','${ctr.action}','${ctr.label}')`)
  // e.preventDefault()
  // window._ga.spotEvent(ctr.category, ctr.action, ctr.label)
}

/**
 * 計測タグ確認用data属性値設定
 * @param {*} ctr
 * @returns
 */
export const setDataOnclick = (ctr) => {
  if (!ctr) {
    return ''
  }

  const value = `_ga.spotEvent('${ctr.category}','${ctr.action}','${ctr.label}')`
  return value
}

/**
 * 結果を見るボタンの計測タグlabelの値を生成
 * @param {*} questionData
 * @returns result
 */
export const setResultCtrLabel = (questionData) => {
  const lableData = {
    Q1_SELECT1: questionData.Q1.selections.select1.status ? '10,000円/週 程度' : 'null',
    Q1_SELECT2: questionData.Q1.selections.select2.status ? '5,000円/週 程度' : 'null',
    Q1_SELECT3: questionData.Q1.selections.select3.status ? '3,000円/週 程度' : 'null',
    Q1_SELECT4: questionData.Q1.selections.select4.status ? '1,000円/週 程度' : 'null',
    Q1_SELECT5: questionData.Q1.selections.select5.status ? 'まったく使わない' : 'null',
    Q2_SELECT1: questionData.Q2.selections.select1.status ? '映画やアニメ' : 'null',
    Q2_SELECT2: questionData.Q2.selections.select2.status ? '音楽' : 'null',
    Q2_SELECT3: questionData.Q2.selections.select3.status ? 'マンガ' : 'null',
    Q2_SELECT4: questionData.Q2.selections.select4.status ? 'ゲーム' : 'null',
    Q2_SELECT5: questionData.Q2.selections.select5.status ? 'スポーツ' : 'null',
    Q2_SELECT6: questionData.Q2.selections.select6.status ? '特になし' : 'null',
    Q3_SELECT1: questionData.Q3.selections.select1.status ? 'はい' : 'null',
    Q3_SELECT2: questionData.Q3.selections.select2.status ? 'いいえ' : 'null'
  }

  const q1Label = [lableData.Q1_SELECT1, lableData.Q1_SELECT2, lableData.Q1_SELECT3, lableData.Q1_SELECT4, lableData.Q1_SELECT5].find(el => el !== 'null')
  const q3Label = [lableData.Q3_SELECT1, lableData.Q3_SELECT2, lableData.Q3_SELECT3].find(el => el !== 'null')

  const result = `結果を見る_${q1Label || 'null'}_${lableData.Q2_SELECT1}_${lableData.Q2_SELECT2}_${lableData.Q2_SELECT3}_${lableData.Q2_SELECT4}_${lableData.Q2_SELECT5}_${lableData.Q2_SELECT6}_${q3Label || 'null'}`
  console.log(result)
  return 'Q3_結果を見る'
}
