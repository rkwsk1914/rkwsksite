/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/react'
// @ts-ignore
import { Link } from 'react-scroll'

import { RESPONSIVE_BASE_WIDTH } from './../../common/constant'
import { CommonStyle, COMMON_STYLE } from './../../common/style'

import { TimeSaleData } from './../../@type/types'
import { ResponsivePx } from './../../logic/ResponsivePx'

export default function TopBnrOnTime (props: any) {
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

  return (
    <div className="timesale-top-aera" css={styles.timeSaleTopArea}>
      <div className="timesale-top-aera__label" css={styles.label}></div>
      <div className="timesale-top-aera__main-text" css={styles.mainText}>
        <div className="timesale-top-aera__logo" css={styles.mainTextLogo}></div>
        <p className="timesale-top-aera__main-text-content" css={styles.mainTextContent}>
          <span>{morningTime}／{nightTime}</span>
        </p>
      </div>
      <div className="timesale-top-aera__time-area" css={styles.timeArea}>
        <span className="timesale-top-aera__time-area__title" css={styles.timeAreaTitle}>終了まで<br css={cmStyle.pcDisplayNone} />残り</span>
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
  )
}

TopBnrOnTime.propTypes = {
  timeSaleData: PropTypes.object
}

const re = new ResponsivePx(RESPONSIVE_BASE_WIDTH)
const styles = {
  timeSaleTopArea: css`
    width: 100%;
    background-color: #ff6767;
    display: block;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0;
    box-sizing: border-box;
    font-family: 'NotoSansJP', sans-serif;

    @media(max-width: 576px) {
      height: atuo;
      padding: ${re.responsivePx(20)} 0 0;
      display: block;
      height: auto;
    }
  `,
  label: css`
    background-image: url(/assets/work/work2/img/p/timesale-official-label.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 160px;
    height: 40px;
    align-self: center;

    @media(max-width: 576px) {
      background-image: url(/assets/work/work2/img/s/timesale-official-label.png);
      width: ${re.responsivePx(190)};
      height: ${re.responsivePx(33)};
      display: block;
      margin: 0 auto;
    }
  `,
  mainText: css`
    margin: 0 28px;
    align-self: center;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;

    @media(max-width: 576px) {
      margin: 0 0 0 0;
    }
  `,
  mainTextLogo: css`
    background-image: url(/assets/work/work2/img/p/timesale-logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 400px;
    height: 73px;
    margin: 0 auto;

    @media(max-width: 576px) {
      background-image: url(/assets/work/work2/img/s/timesale-official-logo.png);
      width: ${re.responsivePx(610)};
      height: ${re.responsivePx(111)};
      margin: 12px auto 0;
    }
  `,
  mainTextContent: css`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin: 9px 0 -8px 0;
    text-align: center;
    display: block;
    line-height: 1;
    letter-spacing: 1px;

    @media(max-width: 576px) {
      text-align: center;
      font-size: ${re.responsivePx(24)};
      margin: ${re.responsivePx(10)} 0 0 0;
    }
  `,
  timeArea: css`
    background-image: url(/assets/work/work2/img/p/bg-timesale-timezone.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 274px;
    height: 120px;
    box-sizing: border-box;
    padding: 10px 10px 10px 23px;

    @media(max-width: 576px) {
      background-color: #ffe9e9;
      width: 100%;
      height: ${re.responsivePx(68)};
      padding: ${re.responsivePx(7)} 0;
      margin: ${re.responsivePx(17)} 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: content-box;
    }
  `,
  timeAreaTitle: css`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: block;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(22)};
    }
  `,
  timeAreaContent: css`
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: block;
    margin: 5px 0 0 0;
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
    margin: 4px auto 0;
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
