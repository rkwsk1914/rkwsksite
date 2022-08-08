/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
import * as React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

/* ---------------------------------------------------------------------------------
  ロジックコンポーネント
--------------------------------------------------------------------------------- */
// import { gaClick, setDataOnclick } from './../logical/control-ctr.js'

/* ---------------------------------------------------------------------------------
  サブコンポーネント
--------------------------------------------------------------------------------- */
import { ModalCloseButton } from './../atoms/modal-close-button.jsx'
import { ButtonWhite } from './../atoms/button-white.jsx'

/* ---------------------------------------------------------------------------------
  結果 コンポーネント
--------------------------------------------------------------------------------- */
export class CardHowTo extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      stepNumber: this.props.stepData.stepNumber,
      // totalStepNumber: this.props.totalStepNumber,
      // title: this.props.data.statement,
      questionId: this.props.stepData.questionId,
      nextCardId: this.props.stepData.nextCardId,
      // previousCardId: this.props.stepData.previousCardId,
      ctrData: {
        category: '[MOBILE]_モバイル',
        action: 'シミュレーター_チェック'
      },
      latestSelectionId: ''
    }
    this.additionalNoteStock = {}
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
   * イベント関数リスト
  --------------------------------------------------------------------------------- */
  doGetDetailAreaData (e) {
    this.props.onChange({
      event: e
    })
  }

  /* ---------------------------------------------------------------------------------
   * コンポーネント内でのみ使用する関数リスト
  --------------------------------------------------------------------------------- */
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

  /**
   * ページ描写
   */
  render () {
    const doClickModalCloseButton = () => this.doClickModalCloseButton()
    const doClickNextCardButton = () => this.doClickNextCardButton()

    const ctrData = this.props.stepData.layout.ctr

    return (
      <div className="simulator-modal__card" id="HowTo">
        <ModalCloseButton onClick={doClickModalCloseButton} ctrData={ctrData.closeButton} />
        <div className="simulator-modal__card__body">
          <h3>
            <small>貯まった<span>PayPayポイント</span>は</small><br />
            毎月の料金のお支払いに使えます
          </h3>

          <div className="simulator-modal__card__body__sub-text">
            <img className="simulator-modal__card__body__sub-text__img" src="./assets/img/shared/img-paypay-lady.png" alt="lady" width="259" height="240" />
            <p className="simulator-modal__card__body__sub-text__content">
              お手続きは<br />
              かんたん<br />
              3ステップ♪
            </p>
          </div>

          <section className="simulator-modal__card__body__step-section">
            <h4 className="simulator-modal__card__body__step-section__title">STEP1</h4>
            <p>My SoftBankアプリを開き、PayPayカードの右上にある「詳細を見る」をタップする</p>
            <img className="simulator-modal__card__body__step-section__img" src="./assets/img/shared/pic-paypay-step-1.png" alt="STEP1" width="510" height="810" />
          </section>

          <section className="simulator-modal__card__body__step-section">
            <h4 className="simulator-modal__card__body__step-section__title">STEP2</h4>
            <p>PayPay画面の「ご利用料金に利用する」をタップ</p>
            <img className="simulator-modal__card__body__step-section__img" src="./assets/img/shared/pic-paypay-step-2.png" alt="STEP2" width="510" height="810" />
          </section>

          <section className="simulator-modal__card__body__step-section">
            <h4 className="simulator-modal__card__body__step-section__title">STEP3</h4>
            <p>利用額を入力し「支払う」をタップ</p>
            <img className="simulator-modal__card__body__step-section__img" src="./assets/img/shared/pic-paypay-step-3.png" alt="STEP3" width="510" height="810" />
          </section>

          <ButtonWhite
            text={'結果へ戻る'}
            arrow={'left'}
            isDisabled={false}
            ctrData={ctrData.whiteButton}
            onClick={doClickNextCardButton}
          />
        </div>
      </div>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
CardHowTo.propTypes = {
  resultCtrLabel: PropTypes.string,
  // totalStepNumber: PropTypes.number,
  data: PropTypes.object,
  stepData: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}
