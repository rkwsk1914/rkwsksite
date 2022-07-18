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
  チェックボタン コンポーネント
--------------------------------------------------------------------------------- */
export class CheckBox extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  doChange (e) {
    const target = e.target
    const chekced = target.checked
    const value = this.props.data.value
    const id = this.props.id
    const isResetCheckBox = this.props.data.isResetCheckBox

    this.props.onChange({
      target: this,
      value: value,
      isChekced: chekced,
      id: id,
      isResetCheckBox: isResetCheckBox
    })
  }

  /**
   * ページ描写
   */
  render () {
    const doChange = (e) => this.doChange(e)

    const props = this.props
    const data = props.data
    const ctrData = props.ctrData

    const text = data.text
    const value = data.value
    const id = data.id
    const name = data.name
    const isChecked = data.status

    return (
      <label
        className="simulator-input--checkbox"
        htmlFor={id}
        onClick={(e) => gaClick(e, ctrData)}
      >
        <input
          className="simulator-input--checkbox__hidden"
          id={id}
          type="checkbox"
          name={name}
          value={value}
          data-onclick={setDataOnclick(ctrData)}
          checked={isChecked}
          onChange={doChange} />
        <span className="simulator-input--checkbox__checkbox"></span>
        <span className="simulator-input--checkbox__text">{text}</span>
      </label>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
CheckBox.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
  ctrData: PropTypes.object,
  onChange: PropTypes.func
}
