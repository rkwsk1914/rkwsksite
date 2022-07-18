/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

export default function ImageBannerMorning (props: any) {
  return (
    <div className="js-time-sale-morning">
      <img
        className="u-s-d-n"
        src="./assets/img/p/bnr_campaign-timesale-20220.png"
        width="950"
        height="256"
        alt="タイムセール 10:00～12:00/17:00～24:00だけ！ SoftBank Air/SoftBank 光をはじめてご契約で 5,000円キャッシュバック"
      />
      <img
        className="u-p-d-n u-m-d-n w100"
        src="./assets/img/s/bnr_campaign-timesale-20220.png"
        width="750"
        height="210"
        alt="タイムセール 10:00～12:00/17:00～24:00だけ！ SoftBank Air/SoftBank 光をはじめてご契約で 5,000円キャッシュバック"
      />
    </div>
  )
}
