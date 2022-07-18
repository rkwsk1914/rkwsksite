/** @jsx jsx */
// import PropTypes from 'prop-types'
import { useContext } from 'react'
import { jsx } from '@emotion/react'

import { TimeSaleData } from './../@type/types'

import { TimerCount } from './../../../timesale'

import FloatDisplayMorning from './parts/FloatDisplayMorning'
import FloatDisplayNight from './parts/FloatDisplayNight'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

export default function FloatDisplay (props: any): ReactJSXElement {
  const timesaleData: TimeSaleData = useContext(TimerCount)

  switch (timesaleData.morningAndNight) {
    case 'morning':
      return (<FloatDisplayMorning />)
    case 'night':
      return (<FloatDisplayNight />)
    case 'off':
    default:
      return (<div></div>)
  }
}
