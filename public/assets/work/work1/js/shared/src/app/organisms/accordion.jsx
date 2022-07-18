/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
import { AccordionButton } from './../atoms/accordion-button.jsx'
import { SlideToggle } from './../organisms/slide-toggle.jsx'
/* ---------------------------------------------------------------------------------
  アコーディオン コンポーネント
--------------------------------------------------------------------------------- */
export class Accordion extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      isOpen: this.props.isOpen
    }
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
  changeStatus () {
    const nowStatus = this.props.isReset ? false : this.state.isOpen
    let newStatus
    switch (nowStatus) {
      case true:
        newStatus = false
        break
      case false:
      default:
        newStatus = true
        break
    }

    this.setState({
      isOpen: newStatus
    })

    this.props.onClick({})
  }

  getStatusClass () {
    const isOpen = this.state.isOpen

    let statusClass
    statusClass = isOpen ? 'open' : 'close'
    if (this.props.isReset === true) {
      statusClass = 'close'
    }

    return statusClass
  }

  setContent () {
    const statusClass = this.getStatusClass()

    switch (this.props.type) {
      case 'hidden':
        return (
          <div className={`simulator-modal__accrodion__content ${statusClass}`}>
            {this.props.content}
          </div>
        )
      case 'slideToggle':
      default:
        return (
          <SlideToggle
            isOpen={this.state.isOpen}
            content={this.props.content}
            contentClassName="simulator-modal__accrodion__content"
            uniquenessClassName={null}
          />
        )
    }
  }

  /**
   * ページ描写
   */
  render () {
    const changeStatus = () => this.changeStatus()
    const content = this.setContent()
    const statusClass = this.getStatusClass()
    const openText = this.props.buttonData.openText
    const closeText = this.props.buttonData.closeText
    const isOpen = this.props.isReset ? false : this.state.isOpen
    const ctr = this.state.isOpen ? this.props.ctrButton.open : this.props.ctrButton.close

    return (
      <div className='simulator-modal__accrodion'>
        {content}
        < AccordionButton
          isOpen={isOpen}
          openText={openText}
          closeText={closeText}
          onClick={changeStatus}
          ctrData={ctr}
        />
        <p className={`simulator-modal__accrodion__sub-text ${statusClass}`}>あなたの使い方に合わせて変更できるよ</p>
      </div>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
Accordion.propTypes = {
  isReset: PropTypes.bool,
  isOpen: PropTypes.bool,
  content: PropTypes.any,
  type: PropTypes.string,
  ctrButton: PropTypes.object,
  buttonData: PropTypes.object,
  onClick: PropTypes.func
}
