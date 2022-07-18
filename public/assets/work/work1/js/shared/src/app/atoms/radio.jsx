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
  ラジオ ボタン コンポーネント
--------------------------------------------------------------------------------- */
export class Radio extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {}
  }

  /**
   * コンポーネントがDOMにマウント（追加）された直後
   */
  componentDidMount () {}

  /**
   * コンポーネントが再レンダーされされた直後
   */
  componentDidUpdate () {}

  /**
   * コンポーネントがDOMにアンマウント（削除）された直後
   */
  componentWillUnmount () {}

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  doChange (e) {
    const target = e.target
    const chekced = target.checked
    const value = this.props.data.value
    const id = this.props.id

    this.props.onChange({
      target: this,
      value: value,
      isChekced: chekced,
      id: id
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
        className="simulator-input--radio"
        htmlFor={id}
        onClick={(e) => gaClick(e, ctrData)}
      >
        <input
          className="simulator-input--radio__hidden"
          id={id}
          type="radio"
          name={name}
          value={value}
          data-onclick={setDataOnclick(ctrData)}
          checked={isChecked}
          onChange={doChange}
        />
        <span className="simulator-input--radio__radio"></span>
        <span className="simulator-input--radio__text">{text}</span>
      </label>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
Radio.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
  ctrData: PropTypes.object,
  onChange: PropTypes.func
}
