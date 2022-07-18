/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { RESPONSIVE_BASE_WIDTH } from '../../common/constant'
import { CommonStyle, COMMON_STYLE } from './../../common/style'

import { TimeSaleData } from './../../@type/types'
import { ResponsivePx } from './../../logic/ResponsivePx'

export default function ImageBannerCounterOverTime (props: any) {
  const cmStyle: CommonStyle = COMMON_STYLE
  const timeSaleData: TimeSaleData = props.timeSaleData

  const countHour: string = timeSaleData.hours
  const countMinuites: string = timeSaleData.minuties
  const countSeconds: string = timeSaleData.seconds

  const nextMonth: string = timeSaleData.nextMonth
  const nextWeekStr: string = timeSaleData.nextWeekStr
  const nextDate: string = timeSaleData.nextDate
  const nextHour: string = timeSaleData.nextHour
  const nextMinuites: string = timeSaleData.nextMinuites

  return (
    <div className="image-banner-timer-count" css={styles.imageBannerTimerCount}>
      <p className="image-banner-timer-count__text" css={styles.imageBannerTimerCountext}>次回は</p>

      <div className="image-banner-timer-count__next-time-area" css={styles.nextTimeArea}>
        <div className="image-banner-timer-count__next-time-area__content" css={styles.nextTimeAreaContent}>
          <strong css={styles.nextTimeAreaContentNubmer}>{nextMonth}/{nextDate}</strong>（{nextWeekStr}）
          <strong
            css={[styles.nextTimeAreaContentNubmer, styles.imageBannerTimerCountContentNubmerUtility]}
          >{nextHour}:{nextMinuites}</strong>スタート!
        </div>
        <div className="image-banner-timer-count__next-time-area__content" css={[styles.nextTimeAreaContent, styles.nextTimeAreaContentRight]}>
          <span className="image-banner-timer-count__time-area__title" css={styles.timeAreaTitle}>開始まで<br css={cmStyle.spDisplayNone}/>あと</span>
          <span className="image-banner-timer-count__time-area__content" css={styles.timeAreaContent}>
            <strong css={styles.timeAreaContentNubmer}>{countHour}</strong>時間
            <strong css={styles.timeAreaContentNubmer}>{countMinuites}</strong>分
            <strong css={styles.timeAreaContentNubmer}>{countSeconds}</strong>秒
          </span>
        </div>
      </div>

    </div>
  )
}

const re = new ResponsivePx(RESPONSIVE_BASE_WIDTH)
const styles = {
  imageBannerTimerCount: css`
    display: block;
    margin: 0 auto 22px;
    max-width: 830px;
    font-family: 'NotoSansJP', sans-serif;

    @media(max-width: 576px) {
      max-width: none;
      margin: 0 0 ${re.responsivePx(24)} 0;
      padding: 0;
    }
  `,
  imageBannerTimerCountext: css`
    font-weight: bold;
    font-size: 18px;
    color: #000;
    margin: 13px 14px 0 0;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(28)};
      margin: 0 0 0 0;
      text-align: center;
    }
  `,
  imageBannerTimerCountContent: css`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: block;
    margin: 5px 0 0 0;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(28)};
      margin: 0 ${re.responsivePx(40)} 0 ${re.responsivePx(20)};
    }
  `,
  imageBannerTimerCountContentNubmer: css`
    font-size: 56px;
    font-weight: bold;
    color: #ff6767;
    line-height: 1;
    font-family: 'Roboto', sans-serif;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(80)};
    }
  `,
  imageBannerTimerCountContentNubmerUtility: css`
    margin: 0 3px 0 -10px;
    display: inline-block;

    @media(max-width: 576px) {
      margin: 0 0 0 0;
    }
  `,
  nextTimeArea: css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 0;

    @media(max-width: 576px) {
      background: none;
      display: block;
      width: 100%;
      height: auto;
      padding: 0 0;
      margin: 0 0 0 0;
    }
  `,
  nextTimeAreaContent: css`
    padding: 0 0;
    align-self: center;
    font-size: 28px;
    font-weight: bold;
    margin: 0 21px 0 0;
    font-family: 'NotoSansJP', sans-serif;
    letter-spacing: 1px;

    @media(max-width: 576px) {
      padding: ${re.responsivePx(6)} 0;
      font-size: ${re.responsivePx(26)};
      line-height: 1;
      text-align: center;
      margin: ${re.responsivePx(4)} 0 0 0;
    }
  `,
  nextTimeAreaContentRight: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 0;

    @media(max-width: 576px) {
      margin: 0 0 0 0;
    }
  `,
  nextTimeAreaContentNubmer: css`
    font-size: 52px;
    font-weight: bold;
    color: #ff6767;
    font-family: 'Roboto', sans-serif;
    line-height: 1;
    position: relative;
    bottom: -1px;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(60)};
      bottom: ${re.responsivePx(-4)};
    }
  `,
  timeAreaTitle: css`
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: block;
    border-right: 1px solid #ccc;
    padding: 0 10px 0 0;
    margin: 0 14px 0 0;

    @media(max-width: 576px) {
      padding: 0 0 0 0;
      margin: 0 ${re.responsivePx(12)} 0 0;
      border-right: none;
      font-size: ${re.responsivePx(24)};
    }
  `,
  timeAreaContent: css`
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: block;
    margin: 0 0 0 0;
    letter-spacing: 1px;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(24)};
      margin: 0;
    }
  `,
  timeAreaContentNubmer: css`
    font-size: 44px;
    font-weight: bold;
    color: #ff6767;
    line-height: 1;
    padding: 0 0 0 3px;
    display: inline-block;
    font-family: 'Roboto', sans-serif;

    @media(max-width: 576px) {
      padding: 0 0 0 ${re.responsivePx(6)};
      font-size: ${re.responsivePx(50)};
    }
  `
}
