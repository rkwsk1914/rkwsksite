/** @jsx jsx */
import { useContext } from 'react'
import { jsx } from '@emotion/react'

import { TimeSaleData } from './../@type/types'

import { TimerCount } from './../../../timesale'

import ImageBannerCounterOnTime from './parts/ImageBannerCounterOnTime'
import ImageBannerCounterOverTime from './parts/ImageBannerCounterOverTime'
import ImageBannerMorning from './parts/ImageBannerMorning'
import ImageBannerNight from './parts/ImageBannerNight'
import ImageBannerNote from './parts/ImageBannerNote'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

export default function ImageBanner (props: any): ReactJSXElement | null {
  const timesaleData: TimeSaleData = useContext(TimerCount)

  const switchImageBanner = (): ReactJSXElement | null => {
    switch (timesaleData.morningAndNight) {
      case 'morning':
        return (<ImageBannerMorning/>)
      case 'night':
        return (<ImageBannerNight/>)
      case 'off':
      default:
        switch (timesaleData.nextTimeSale) {
          case 'morning':
            return (<ImageBannerNight/>)
          case 'night':
            return (<ImageBannerMorning/>)
          case 'off':
          default:
            return (<div></div>)
        }
    }
  }

  const switchNote = (): ReactJSXElement | null => {
    switch (timesaleData.morningAndNight) {
      case 'morning':
      case 'night':
        return (<ImageBannerNote/>)
      case 'off':
      default:
        switch (timesaleData.nextTimeSale) {
          case 'morning':
          case 'night':
            return (<ImageBannerNote/>)
          case 'off':
          default:
            return null
        }
    }
  }

  const switchTimer = (): ReactJSXElement | null => {
    switch (timesaleData.morningAndNight) {
      case 'morning':
      case 'night':
        return (<ImageBannerCounterOnTime timeSaleData={timesaleData}/>)
      case 'off':
      default:
        return (<ImageBannerCounterOverTime timeSaleData={timesaleData}/>)
    }
  }

  const countUpTimer: ReactJSXElement | null = switchTimer()
  const imageBanner: ReactJSXElement | null = switchImageBanner()
  const imageBannerNote: ReactJSXElement | null = switchNote()

  if (!imageBanner) {
    return null
  }

  return (
    <div>
      {countUpTimer}
      {imageBanner}
      {imageBannerNote}
    </div>
  )
}
