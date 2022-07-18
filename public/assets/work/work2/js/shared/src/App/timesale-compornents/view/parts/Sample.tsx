/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { RESPONSIVE_BASE_WIDTH } from '../../common/constant'

import { ResponsivePx } from '../../logic/ResponsivePx'
// @ts-ignore
import { TimeCalculation } from '../../logic/TimeCalculation.js'

export default function Sample (props: any) {
  return (
    <div className="main-text" css={styles.mainText}>aaa</div>
  )
}

const re = new ResponsivePx(RESPONSIVE_BASE_WIDTH)
const styles = {
  mainText: css`
    text-align: left;
    margin: 30px 0 0 0;

    @media(max-width: 576px) {
      font-size: ${re.responsivePx(30)};
      margin: ${re.responsivePx(40)} 0 0 0;
    }
  `
}
