/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { RESPONSIVE_BASE_WIDTH } from '../../common/constant'

import { TimeSaleData } from './../../@type/types'
import { ResponsivePx } from './../../logic/ResponsivePx'

export default function ImageBannerCounterOnTime (props: any) {
  const timeSaleData: TimeSaleData = props.timeSaleData

  const countHour: string = timeSaleData.hours
  const countMinuites: string = timeSaleData.minuties
  const countSeconds: string = timeSaleData.seconds

  return (
    <div className="image-banner-timer-count" css={styles.imageBannerTimerCount}>
      <p className="image-banner-timer-count__text" css={styles.imageBannerTimerCountext}>終了まで残り</p>
      <span className="image-banner-timer-count__content" css={styles.imageBannerTimerCountContent}>
          <strong css={styles.imageBannerTimerCountContentNubmer}>{countHour}</strong>時間
          <strong css={styles.imageBannerTimerCountContentNubmer}>{countMinuites}</strong>分
          <strong css={styles.imageBannerTimerCountContentNubmer}>{countSeconds}</strong>秒
        </span>
    </div>
  )
}

const re = new ResponsivePx(RESPONSIVE_BASE_WIDTH)
const styles = {
  imageBannerTimerCount: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 27px 0;
    font-family: 'NotoSansJP', sans-serif;

    @media(max-width: 576px) {
      display: block;
      margin: 0 0 ${re.responsivePx(24)} 0;
    }
  `,
  imageBannerTimerCountext: css`
    font-weight: bold;
    font-size: 24px;
    color: #000;
    margin: 13px 14px 0 0;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(24)};
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
    letter-spacing: 1px;

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
  `
}
