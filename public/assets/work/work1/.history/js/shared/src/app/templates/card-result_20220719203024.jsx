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
import { ModalCloseButton } from './../atoms/modal-close-button.jsx'
import { ButtonBlue } from './../atoms/button-blue.jsx'
import { ButtonBanner } from './../atoms/button-banner'

import { NoteUl } from './../molecules/note-ul.jsx'

import { Accordion } from './../organisms/accordion.jsx'
import { ValueOfMoney } from './../organisms/value-of-money'

import { SectionMovieAndGame } from './result-sections/section-movie-and-game.jsx'
import { SectionMusic } from './result-sections/section-music.jsx'
import { SectionComic } from './result-sections/section-comic.jsx'
import { SectionShopping } from './result-sections/section-shopping.jsx'
import { SectionSuperPayPay } from './result-sections/section-super-paypay.jsx'
import { SectionLongTermContinuity } from './result-sections/section-long-term-continuity.jsx'
import { SectionChildcareSupport } from './result-sections/section-childcare-support.jsx'

/* ---------------------------------------------------------------------------------
  結果 コンポーネント
--------------------------------------------------------------------------------- */
export class CardResult extends Component {
  /**
   *オブジェクトの生成
   * @param {*メインコンポーネントから受け取ったデータ} props
   */
  constructor (props) {
    super(props)
    this.state = {
      questionId: this.props.stepData.questionId,
      nextCardId: this.props.stepData.nextCardId,
      previousCardId: this.props.stepData.previousCardId,
      noteData: {
        1: 'PayPayポイントを受け取るには、「PayPay」アプリケーション内でのアカウント連携が必要です。',
        2: 'PayPayポイントは出⾦・譲渡不可。PayPay／PayPayカード公式ストアでもご利用いただけます。'
      }
    }
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

  doClickRestartButton () {
    this.props.onClick({
      type: 'restart',
      nowCardId: this.state.questionId,
      changeCardId: this.state.nextCardId
    })
  }

  doClickNextCardButton () {
    this.props.onClick({
      type: 'card',
      nowCardId: this.state.questionId,
      changeCardId: 'HowTo'
    })
  }

  doClickReleaseReset () {
    this.props.onClick({
      type: 'release reset'
    })
  }

  /**
   * ページ描写
   */
  render () {
    const doClickModalCloseButton = () => this.doClickModalCloseButton()
    const doClickRestartButton = (e) => this.doClickRestartButton(e)
    const doClickNextCardButton = () => this.doClickNextCardButton()
    const doGetDetailAreaData = (e) => this.doGetDetailAreaData(e)
    const doClickReleaseReset = () => this.doClickReleaseReset()

    const ctr = this.props.stepData.layout.ctr
    const categories = this.props.data.categories
    const buttonData = {
      openText: '明細を閉じる',
      closeText: '明細を詳しく見る'
    }
    const ctrMerihari = ctr.merihari

    return (
      <div className="simulator-modal__card" id="Result">
        <ModalCloseButton onClick={doClickModalCloseButton} ctrData={ctr.closeButton} />
        <div className="simulator-modal__card__head">
          <p className='parallelogram-title u-font-murecho'>あなたの<span>おトク額</span>はこちら！</p>
          <p className="simulator-modal__card__head__sub-text u-font-murecho">
            メリハリ無制限（詳細は<a className='' href="#" onClick={(e) => gaClick(e, ctrMerihari)} data-onclick={setDataOnclick(ctrMerihari)}>こちら</a>）に加入の場合
          </p>
          <ValueOfMoney result={this.props.result} />
          <NoteUl listData={this.state.noteData} />
          <div className="simulator-modal__card__head__claim-area">
            <ButtonBanner
              text={'PayPayの詳細'}
              arrow={'right'}
              isDisabled={false}
              ctrData={ctr.claimBanner}
              dom={(
                <div>
                  <img className="u-sp-d-n" src="./assets/img/p/bnr-paypay-step.png" alt="お手続きはかんたん！詳細はこちら" width="500" height="110" />
                  <img className="u-pc-d-n" src="./assets/img/s/bnr-paypay-step.png" alt="お手続きはかんたん！詳細はこちら" width="630" height="190"/>
                </div>
              )}
              onClick={doClickNextCardButton}
            />
          </div>
        </div>
        <div className="simulator-modal__card__body">
          <Accordion
            isReset={this.props.isReset}
            isOpen={false}
            type={'hidden'}
            ctrButton={ctr.accordionButton}
            buttonData={buttonData}
            onClick={doClickReleaseReset}
            content={(
              <div>
                <SectionMovieAndGame
                categoriesData={categories['動画サービス / ゲーム']}
                categoryId={'動画サービス / ゲーム'}
                onChange={doGetDetailAreaData} />
              <SectionMusic
                categoriesData={categories['音楽']}
                categoryId={'音楽'}
                onChange={doGetDetailAreaData} />
              <SectionComic
                categoriesData={categories['マンガ（電子書籍）']}
                categoryId={'マンガ（電子書籍）'}
                onChange={doGetDetailAreaData} />
              <SectionShopping
                categoriesData={categories['ショッピング']}
                categoryId={'ショッピング'}
                onChange={doGetDetailAreaData} />

              <SectionSuperPayPay
                categoriesData={categories['スーパーPayPayクーポン']}
                categoryId={'スーパーPayPayクーポン'}
                onChange={doGetDetailAreaData} />

              <h3>1年に1回のボーナス特典!<br /><small>今月当てはまったら選択してね！</small></h3>

              <SectionLongTermContinuity
                categoriesData={categories['長期継続特典']}
                categoryId={'長期継続特典'}
                onChange={doGetDetailAreaData} />
              <SectionChildcareSupport
                categoriesData={categories['子育て応援クラブ']}
                categoryId={'子育て応援クラブ'}
                onChange={doGetDetailAreaData} />
              </div>
            )}
          />

          <ButtonBlue
            text={'もう一度やり直す'}
            arrow={''}
            isDisabled={false}
            ctrData={ctr.blueButton}
            onClick={doClickRestartButton}
          />
        </div>
      </div>
    )
  }
}

/**
 * コンポーネントが受け取るプロパティのバリデーション
 */
CardResult.propTypes = {
  isReset: PropTypes.bool,
  totalStepNumber: PropTypes.number,
  data: PropTypes.object,
  stepData: PropTypes.object,
  result: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}
