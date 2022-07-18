/** @jsx jsx */
// import PropTypes from 'prop-types'
import { useContext } from 'react'
import { jsx } from '@emotion/react'

import { TimeSaleData } from './../@type/types'

import { TimerCount } from './../../../timesale'

import TopBnrOnTime from './parts/TopBnrOnTime'
import TopBnrOverTime from './parts/TopBnrOverTime'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

export default function TopBnr (props: any): ReactJSXElement {
  const timesaleData: TimeSaleData = useContext(TimerCount)

  switch (timesaleData.morningAndNight) {
    case 'morning':
    case 'night':
      return (<TopBnrOnTime timeSaleData={timesaleData}/>)
    case 'off':
      return (<TopBnrOverTime timeSaleData={timesaleData} />)
    default:
      return (<div></div>)
  }
}

TopBnr.propTypes = {}
