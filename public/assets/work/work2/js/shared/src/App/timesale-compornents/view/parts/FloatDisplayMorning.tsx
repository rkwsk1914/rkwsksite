/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { RESPONSIVE_BASE_WIDTH } from './../../common/constant'
import { ResponsivePx } from './../../logic/ResponsivePx'

export default function FloatDisplayMorning (props: any) {
  return (
    <div className="js-time-sale-morning">
      <p className="u-s-d-n">
        <img
          className="float-banner-text"
          src="./assets/img/p/fig_floating_timesale.png"
          alt="タイムセール実施中"
          css={styles.img}
        />
        </p>
      <p className="u-p-d-n u-m-d-n">
        <img
          className="float-banner-text"
          src="./assets/img/s/fig_floating_timesale.png"
          alt="タイムセール実施中"
          css={styles.img}
        />
      </p>
    </div>
  )
}

const re = new ResponsivePx(RESPONSIVE_BASE_WIDTH)
const styles = {
  img: css`
    @media(max-width: 576px) {
      display: block!important;
      width: ${re.responsivePx(320)}!important;
      margin: 0 auto ${re.responsivePx(14)} auto!important;
    }
  `
}
