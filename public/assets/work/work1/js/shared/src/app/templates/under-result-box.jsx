/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  ロジックコンポーネント
--------------------------------------------------------------------------------- */
import { gaClick, setDataOnclick } from './../logical/control-ctr.js'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
import { CONFIG_CTR_DATA } from './../config/ctr-data.js'
import { CONFIG_STEP_DATA } from './../config/step-data'
import { ValueOfMoney } from './../organisms/value-of-money'
import { ProgressButton } from './../organisms/progress-button'

/* ---------------------------------------------------------------------------------
  シュミレーター下部に表示する金額結果ボックス コンポーネント
--------------------------------------------------------------------------------- */
export class UnderResultBox extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      ctr: {
        Q1: CONFIG_CTR_DATA.AMOUNT_BOX_LINK_MERIHARI_STEP1,
        Q2: CONFIG_CTR_DATA.AMOUNT_BOX_LINK_MERIHARI_STEP2,
        Q3: CONFIG_CTR_DATA.AMOUNT_BOX_LINK_MERIHARI_STEP3
      }
    }
  }

  /* ---------------------------------------------------------------------------------
   * イベント関数リスト
  --------------------------------------------------------------------------------- */
  doClickProgressButton (e) {
    this.props.onClick({
      type: e.type,
      nowCardId: e.nowCardId,
      changeCardId: e.changeCardId
    })
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  createButton () {
    const nowCardId = this.props.nowCardId
    const doClickProgressButton = (e) => this.doClickProgressButton(e)

    return (
      <ProgressButton
        stepdata={CONFIG_STEP_DATA[nowCardId]}
        resultCtrLabel={this.props.resultCtrLabel}
        isSelected={this.props.isSelected}
        onClick={doClickProgressButton} />
    )
  }

  /**
   * ページ描写
   */
  render () {
    const nowCardId = this.props.nowCardId
    const ctrMerihari = this.state.ctr[nowCardId] ? this.state.ctr[nowCardId] : this.state.ctr.Q1
    const button = this.createButton()
    return (
      <div className={this.props.classData}>
        <p className="simulator-modal__under-result-box__sub-text u-font-murecho">
          メリハリ無制限（詳細は<a className='' href="#" onClick={(e) => gaClick(e, ctrMerihari)} data-onclick={setDataOnclick(ctrMerihari)} >こちら</a>）に加入の場合
        </p>
        <ValueOfMoney result={this.props.result} />
        {button}
      </div>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
UnderResultBox.propTypes = {
  resultCtrLabel: PropTypes.string,
  nowCardId: PropTypes.string,
  classData: PropTypes.string,
  isSelected: PropTypes.bool,
  result: PropTypes.object,
  onClick: PropTypes.func
}
