import React, { createContext, useState } from 'react'

// import ReactDOM from 'react-dom'

// @ts-ignore
import * as ReactDOM from 'react-dom/client'

import { Window } from './App/timesale-compornents/@type/types'

// @ts-ignore
import { DisplayController } from './App/timesale-compornents/logic/TimesaleControler'

import TopBnr from './App/timesale-compornents/view/TopBnr'
import ImageBanner from './App/timesale-compornents/view/ImageBanner'
import FloatDisplay from './App/timesale-compornents/view/FloatDisplay'

declare let window: Window

export const TimerCount = createContext({})

/**
 * ----------------------------------------------------------------------------------------
 * 現在時刻の設定
 * ----------------------------------------------------------------------------------------
 */
const setNowDate = (): string => {
  const toDoubleDigits = (number: number):string => {
    let toStrNum = number.toString()
    if (toStrNum.length === 1) {
      toStrNum = '0' + toStrNum
    }
    return String(toStrNum)
  }

  const now: Date = new Date()
  const year: string = toDoubleDigits(now.getFullYear())
  const month: string = toDoubleDigits(now.getMonth() + 1)
  const date: string = toDoubleDigits(now.getDate())
  const hour: string = toDoubleDigits(now.getHours())
  const minuites: string = toDoubleDigits(now.getMinutes())
  const seconds: string = toDoubleDigits(now.getSeconds())
  const result: string = year + month + date + hour + minuites + seconds
  return result
}

/**
 * ----------------------------------------------------------------------------------------
 * カウントダウンの設定
 * ----------------------------------------------------------------------------------------
 */
window.nowDate = setNowDate()
const brain = new DisplayController()
const state = brain.reactCompornentData

/**
 * ----------------------------------------------------------------------------------------
 * ルートの設定
 * ----------------------------------------------------------------------------------------
 */
// @ts-ignore
const rootTopBanner = ReactDOM.createRoot(
  document.getElementById('timesale-top-area')
)

// @ts-ignore
const rootBanner1 = ReactDOM.createRoot(
  document.getElementById('timesale-image-banner')
)

// @ts-ignore
const rootFloatDisplay = ReactDOM.createRoot(
  document.getElementById('timesale-float-diplay')
)

/**
 * ----------------------------------------------------------------------------------------
 * レンダー
 * ----------------------------------------------------------------------------------------
 */
function setTopBnr () {
  const element = (
    <TimerCount.Provider value={state}>
      <TopBnr />
    </TimerCount.Provider>
  )
  rootTopBanner.render(element)
}

function setImageBanner1 () {
  const element = (
    <TimerCount.Provider value={state}>
      <ImageBanner />
    </TimerCount.Provider>
  )
  rootBanner1.render(element)
}

function setFloatDisplay () {
  const element = (
    <TimerCount.Provider value={state}>
      <FloatDisplay />
    </TimerCount.Provider>
  )
  rootFloatDisplay.render(element)
}

/**
 * ----------------------------------------------------------------------------------------
 * タイマー起動 タイムセール表示
 * ----------------------------------------------------------------------------------------
 */
const timer = setInterval(() => {
  brain.drawFullRemainingDateAndTime()
  setTopBnr()
  setImageBanner1()
  setFloatDisplay()
  // clearInterval(timer) // 表示テストする際はコメントアウト
}, 1000)
