/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
// @ts-ignore
import { Link } from 'react-scroll'

import { RESPONSIVE_BASE_WIDTH } from '../../common/constant'
import { CommonStyle, COMMON_STYLE } from './../../common/style'

import { TimeSaleData } from './../../@type/types'
import { ResponsivePx } from './../../logic/ResponsivePx'

export default function TopBnrOverTime (props: any) {
  const cmStyle: CommonStyle = COMMON_STYLE
  const timeSaleData: TimeSaleData = props.timeSaleData

  const createTimeString = (timezone: any): string => {
    return timezone.startHour + ':' + timezone.startMinuties + '～' + timezone.endHour + ':' + timezone.endMinuties
  }

  const morningTime: string = createTimeString(timeSaleData.morning)
  const nightTime: string = createTimeString(timeSaleData.night)
  const countHour: string = timeSaleData.hours
  const countMinuites: string = timeSaleData.minuties
  const countSeconds: string = timeSaleData.seconds

  const nextMonth: string = timeSaleData.nextMonth
  const nextWeekStr: string = timeSaleData.nextWeekStr
  const nextDate: string = timeSaleData.nextDate
  const nextHour: string = timeSaleData.nextHour
  const nextMinuites: string = timeSaleData.nextMinuites

  return (
    <div className="timesale-top-aera" css={styles.timeSaleTopArea}>
      <div css={styles.spFlex}>
        <div className="timesale-top-aera__main-text" css={styles.mainText}>
          <div className="timesale-top-aera__label" css={styles.label}></div>
          <div className="timesale-top-aera__label-logo" css={styles.mainTextLogo}></div>
          <p className="timesale-top-aera__main-text-content" css={styles.mainTextContent}>
            <span>{morningTime}／{nightTime}</span>
          </p>
        </div>
        <div className="timesale-top-aera__next-time-area__content" css={[styles.nextTimeAreaContent, styles.nextTimeAreaContentLeft, cmStyle.pcDisplayNone]}>
          <span className="timesale-top-aera__next-time-area__content__title" css={styles.nextTimeAreaTitle}>次回は</span>
          <span className="timesale-top-aera__next-time-area__content__text"css={styles.nextTimeAreaContentText}>
            <strong css={styles.nextTimeAreaContentNubmer}>{nextMonth}/{nextDate}</strong>（{nextWeekStr}）<br />
            <strong css={[styles.nextTimeAreaContentNubmer, styles.nextTimeAreaContentNubmerSmall]}>{nextHour}:{nextMinuites}<span css={styles.nextTimeAreaContentTextSub}>スタート!</span></strong>
          </span>
        </div>
      </div>
      <div className="timesale-top-aera__next-time-area" css={styles.nextTimeArea}>
        <div className="timesale-top-aera__next-time-area__content" css={[styles.nextTimeAreaContent, styles.nextTimeAreaContentLeft, cmStyle.spDisplayNone]}>
          <span className="timesale-top-aera__next-time-area__content__title" css={styles.nextTimeAreaTitle}>次回は</span>
          <span className="timesale-top-aera__next-time-area__content__text"css={styles.nextTimeAreaContentText}>
            <strong css={styles.nextTimeAreaContentNubmer}>{nextMonth}/{nextDate}</strong>（{nextWeekStr}）<br />
            <strong css={[styles.nextTimeAreaContentNubmer, styles.nextTimeAreaContentNubmerSmall]}>{nextHour}:{nextMinuites}</strong>スタート!
          </span>
        </div>
        <div className="timesale-top-aera__next-time-area__content" css={styles.nextTimeAreaContent}>
          <span className="timesale-top-aera__time-area__title" css={styles.timeAreaTitle}>開始まで<br css={cmStyle.pcDisplayNone} />あと</span>
          <span className="timesale-top-aera__time-area__content" css={styles.timeAreaContent}>
            <strong css={styles.timeAreaContentNubmer}>{countHour}</strong>時間
            <strong css={styles.timeAreaContentNubmer}>{countMinuites}</strong>分
            <strong css={styles.timeAreaContentNubmer}>{countSeconds}</strong>秒
          </span>
          <Link
            className="timesale-top-aera__time-area__button"
            to="sec_maincampaign"
            href="#"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {800}
            css={styles.button}
            >詳細をみる</Link>
        </div>
      </div>
    </div>
  )
}

const re = new ResponsivePx(RESPONSIVE_BASE_WIDTH)
const styles = {
  spFlex: css`
    margin: -10px 0 0;

    @media(max-width: 576px) {
      margin: 0 0 0 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 0 ${re.responsivePx(20)};
    }
  `,
  timeSaleTopArea: css`
    font-family: 'NotoSansJP', sans-serif;
    width: 100%;
    background-color: #ff6767;
    display: block;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0;
    box-sizing: border-box;

    @media(max-width: 576px) {
      height: atuo;
      padding: ${re.responsivePx(18)} 0 0;
      display: block;
      height: auto;
    }
  `,
  mainText: css`
    margin: 0 23px;
    align-self: center;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;

    @media(max-width: 576px) {
      margin: 0 0 0 0;
      border-right: 1px solid #ff9595;
    }
  `,
  label: css`
    background-image: url(./assets/img/p/timesale-next-official-label.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 110px;
    height: 20px;
    align-self: center;
    margin: 13px auto 0;

    @media(max-width: 576px) {
      background-image: url(./assets/img/s/timesale-official-label.png);
      width: ${re.responsivePx(210)};
      height: ${re.responsivePx(34)};
      display: block;
      margin: ${re.responsivePx(16)} auto 0;
    }
  `,
  mainTextLogo: css`
    background-image: url(./assets/img/p/timesale-next-logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 360px;
    height: 65px;
    margin: 5px auto 0;

    @media(max-width: 576px) {
      background-image: url(./assets/img/s/timesale-next-official-logo.png);
      width: ${re.responsivePx(420)};
      height: ${re.responsivePx(77)};
      margin: ${re.responsivePx(20)} ${re.responsivePx(20)} 0;
    }
  `,
  mainTextContent: css`
    color: #fff;
    font-weight: bold;
    font-size: 14.5px;
    margin: 4px 0 6px 0;

    @media(max-width: 576px) {
      text-align: center;
      font-size: ${re.responsivePx(24)};
    }
  `,
  nextTimeArea: css`
    background-image: url(./assets/img/p/bg-timesale-next-timezone.png);
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 544px;
    height: 120px;
    box-sizing: border-box;
    padding: 10px 10px 10px 42px;

    @media(max-width: 576px) {
      background: none;
      display: block;
      width: 100%;
      height: auto;
      padding: 0 0;
      margin: ${re.responsivePx(17.6)} 0 0 0;
    }
  `,
  nextTimeAreaContent: css`
    padding: 0 15px 0 15px;
    align-self: center;

    @media(max-width: 576px) {
      background-color: #ffe9e9;
      width: 100%;
      height: auto;
      padding: ${re.responsivePx(7)} 0;
      margin: ${re.responsivePx(17)} 0 0 0;
      margin: 0 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  nextTimeAreaContentLeft: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ffb5b5;
    padding: 0 15px 0 0;
    margin: 0 20px 0 0;

    @media(max-width: 576px) {
      display: block;
      background: none!important;
      border: none;
      margin: 0 ${re.responsivePx(-8)} 0 ${re.responsivePx(8)};!important
    }
  `,
  nextTimeAreaTitle: css`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: block;
    min-width: max-content;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(28)};
      color: #fff;
    }
  `,
  nextTimeAreaContentText: css`
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: block;
    margin: 0 0 0 13px;
    letter-spacing: 1px;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(26)};
      color: #fff;
      line-height: 1.2;
      margin: 0 0 0 0;
      padding: 0 0 0 ${re.responsivePx(24)};
    }
  `,
  nextTimeAreaContentTextSub: css`
    font-family: 'NotoSansJP', sans-serif;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(26)};
    }
  `,
  nextTimeAreaContentNubmer: css`
    font-size: 36px;
    font-weight: bold;
    color: #ff6767;
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    margin: 0 4px 0 0;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(48)};
      color: #fff;
      margin: ${re.responsivePx(10)} 0 0 0;
    }
  `,
  nextTimeAreaContentNubmerSmall: css`
    font-size: 25px;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(32)};
      margin: 0px ${re.responsivePx(-32)} 0 ${re.responsivePx(-42)};
    }
  `,
  timeAreaTitle: css`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: block;
    line-height: 1;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(22)};
      line-height: normal;
      height: ${re.responsivePx(68)};
    }
  `,
  timeAreaContent: css`
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: block;
    margin: 7px 0 4px 0;
    letter-spacing: 1px;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(24)};
      margin: 0 ${re.responsivePx(40)} 0 ${re.responsivePx(20)};
    }
  `,
  timeAreaContentNubmer: css`
    font-size: 36px;
    font-weight: bold;
    color: #ff6767;
    line-height: 1;
    font-family: 'Roboto', sans-serif;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(58)};
    }
  `,
  button: css`
    width: 180px;
    height: 30px;
    box-sizing: border-box;
    display: block;
    background-color: #ff6767;
    border-radius: 50px;
    margin: 0 auto 0;
    text-align: center;
    font-weight: bold;
    line-height: 30px;
    position: relative;
    font-size: 16px;

    &,
    &:hover,
    &:active,
    &:visited,
    &:focus {
      color: #fff!important;
      text-decoration: none;
    }

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(28)};
      width: ${re.responsivePx(240)};
      height: ${re.responsivePx(50)};
      line-height: ${re.responsivePx(50)};
      text-indent: ${re.responsivePx(-18)};
      margin: 0;
    }

    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      display: block;
      border-bottom: 3px solid #fff;
      border-right: 3px solid #fff;
      transform: rotate(45deg) translateY(-60%);
      top: 40%;
      right: 18px;

      @media(max-width: 576px) {
        width: ${re.responsivePx(13.5)};
        height: ${re.responsivePx(13.5)};
        display: block;
        border-bottom: ${re.responsivePx(6)} solid #fff;
        border-right: ${re.responsivePx(6)} solid #fff;
        right: ${re.responsivePx(32)};
      }
    }
  `
}
