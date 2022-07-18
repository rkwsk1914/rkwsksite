/** @jsx jsx */
import { css } from '@emotion/react'

export interface CommonStyle {
  pcDisplayNone: any,
  spDisplayNone: any,
}

export const COMMON_STYLE: CommonStyle = {
  pcDisplayNone: css`
    @media(min-width: 576px) {
      display: none;
    }
  `,
  spDisplayNone: css`
    @media(max-width: 576px) {
      display: none;
    }
  `
}
