import { morningZone, nightZone, campaignCountZone } from './../config/timer-config'

export class DisplayController {
  constructor () {
    /**
     * ------------------------------------------------------------------------
     * タイムセール設定
     *
     * 残り〇時間〇分〇秒形式のカウントダウン機能の実装に活用
     * time: hhmmss形式(時,分,秒)に数値型で設定
     * ------------------------------------------------------------------------
     */
    this.morningZone = morningZone
    this.nightZone = nightZone
    this.campaignCountZone = campaignCountZone

    /**
     * ------------------------------------------------------------------------
     * 初期化
     * ------------------------------------------------------------------------
     */
    const testDay = this.checkCowntDownTestFlug()

    // サーバーサイドの時刻を取得し配列に分割
    this.tmpNowDate = (testDay.test && testDay.now)
      ? String(testDay.now).match(/^(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/)
      : String(window.nowDate).match(/^(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/)

    // ローカルストレージ名
    this.storageName = 'hikariPopup'

    // サーバーサイドの時刻を元にdate型で現在時刻を設定
    this.currentDate = new Date(
      this.tmpNowDate[1], // year
      this.tmpNowDate[2] - 1, // month
      this.tmpNowDate[3], // date
      this.tmpNowDate[4], // hour
      this.tmpNowDate[5], // minute
      this.tmpNowDate[6] // second
    )

    this.currentYear = this.currentDate.getFullYear()
    this.currentMonth = this.currentDate.getMonth()
    this.currentDay = this.currentDate.getDate()
    this.currentHour = this.currentDate.getHours()
    this.currentMinutes = this.currentDate.getMinutes()
    this.currentSeconds = this.currentDate.getSeconds()

    this.testFlg = this.checkParam()

    this.duplicationflug = false

    this.reactCompornentData = {
      morning: {
        startHour: this.setHourTime(this.morningZone.startTime.minute, this.morningZone.startTime.hour),
        startMinuties: this.setMinuitesTime(this.morningZone.startTime.minute),
        endHour: this.setHourTime(this.morningZone.endTime.minute, this.morningZone.endTime.hour),
        endMinuties: this.setMinuitesTime(this.morningZone.endTime.minute)
      },
      night: {
        startHour: this.setHourTime(this.nightZone.startTime.minute, this.nightZone.startTime.hour),
        startMinuties: this.setMinuitesTime(this.nightZone.startTime.minute),
        endHour: this.setHourTime(this.nightZone.endTime.minute, this.nightZone.endTime.hour),
        endMinuties: this.setMinuitesTime(this.nightZone.endTime.minute)
      },
      hours: '',
      minuties: '',
      seconds: '',
      nextMonth: '',
      nextWeekStr: '',
      nextDate: '',
      nextHour: '',
      nextMinuites: '',
      morningAndNight: '',
      nextTimeSale: ''
    }
    this.dayCounter(this.reactCompornentData.morningAndNight)
  }

  checkCowntDownTestFlug () {
    const flug = {}
    const search = location.search.substr(1).split('&')
    for (let i = 0; i < search.length; i++) {
      if (/viewDayCountDown=/.test(search[i])) {
        const val = search[i].split('=')[1]
        flug.test = true
        if (/^\d{14}$/.test(val)) {
          flug.now = val
        }
        break
      }
    }
    if (!flug.test) {
      flug.test = false
    }
    return flug
  }

  /**
    * 対象のストレージに格納されている日付の差分が1日過ぎている場合ストレージに保存
    * @param {string} key 対象のストレージのキー
    * @returns { boolean } tureの場合実行可能 falseの場合実行不可
    */
  dayCounter (key) {
    // キーの指定がない例外はtureを返す。
    const regNowDate = /^(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/

    if (typeof key !== 'string') return true

    // 14桁の数字をDateオブジェクトに変換
    const stringToDate = function (nowDate) {
      if (typeof nowDate === 'string' && regNowDate.test(nowDate)) {
        const tmpNowDate = nowDate.match(regNowDate)
        return new Date(
          tmpNowDate[1], // year
          tmpNowDate[2] - 1, // month
          tmpNowDate[3] // date
        )
      }
      return false
    }
    // 現在の日付と対象の日付の差分
    const getDiffDay = function (currentDate, targetDate) {
      const msDiff = currentDate - targetDate
      return Math.floor(msDiff / (1000 * 60 * 60 * 24))
    }

    // サーバーサイドの時刻を元にdate型で現在時刻を設定
    const _nowDate = this.tmpNowDate[0]
    const currentDate = stringToDate(_nowDate)

    // ローカルストレージの取得
    let storageItem = {}
    try {
      storageItem = JSON.parse(localStorage.getItem(this.storageName)) || {}
    } catch (e) {}

    // 比較対象の日付
    const storageDate = stringToDate(storageItem[key])

    // storageに保存されている情報が日付情報なら下記を実行
    if (storageDate instanceof Date) {
      const diffDate = getDiffDay(currentDate, storageDate)
      // 日付に差分がない場合処理ローカルストレージにキー情報を更新せず、中断しfalseを返す
      if (diffDate === 0) {
        return false
      } else {
        // ローカルストレージにキー情報と日付情報の更新
        storageItem[key] = _nowDate
        localStorage.setItem(this.storageName, JSON.stringify(storageItem))
        return true
      }
    } else {
      // ローカルストレージにキー情報と日付情報の保存
      storageItem[key] = _nowDate
      localStorage.setItem(this.storageName, JSON.stringify(storageItem))
      return true
    }
  }

  isMorning () {
    // hhmmssで表す5~6桁の数字に変換
    return this.isIntime(this.morningZone)
  }

  isNight () {
    // hhmmssで表す5~6桁の数字に変換
    return this.isIntime(this.nightZone)
  }

  isIntime (timeZone) {
    // hhmmssで表す5~6桁の数字に変換
    const currentTime = parseInt(
      this.toDoubleDigits(this.currentHour === 0 ? 24 : this.currentHour) +
      this.toDoubleDigits(this.currentMinutes) +
      this.toDoubleDigits(this.currentSeconds)
    )

    const startTimeNight = parseInt(
      this.toDoubleDigits(timeZone.startTime.hour) +
      this.toDoubleDigits(timeZone.startTime.minute) +
      this.toDoubleDigits(timeZone.startTime.second)
    )

    const endTimeNight = parseInt(
      this.toDoubleDigits(timeZone.endTime.hour) +
      this.toDoubleDigits(timeZone.endTime.minute) +
      this.toDoubleDigits(timeZone.endTime.second)
    )

    if (this.testFlg.test) {
      return this.testFlg.night
    } else {
      return (startTimeNight <= currentTime && currentTime <= endTimeNight)
    }
  }

  isPatternA () {
    function getParam (key) {
      const url = window.location.href
      key = key.replace(/\[\]/g, '\\$&')
      const regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)')
      const results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }
    return getParam('utm_medium') === 'mysb' && getParam('utm_source') === 'MYSB'
  }

  setCurrentTime () {
    this.currentHour = this.currentDate.getHours()
    this.currentMinutes = this.currentDate.getMinutes()
    this.currentSeconds = this.currentDate.getSeconds()
  }

  toDoubleDigits (number) {
    let toStrNum = number.toString()
    if (toStrNum.length === 1) {
      toStrNum = '0' + toStrNum
    }
    return toStrNum
  }

  checkInTimeSale () {
    return this.isMorning() ? 'morning' : this.isNight() ? 'night' : 'off'
  }

  countUP (countValue) {
    // console.log(this.currentDate.getSeconds())
    this.currentDate.setSeconds(this.currentDate.getSeconds() + countValue)
    this.setCurrentTime()
  }

  setHourTime (min, hour) {
    return this.toDoubleDigits(min + 1 === 60 ? hour + 1 : hour)
  }

  setMinuitesTime (min) {
    return this.toDoubleDigits(min + 1 === 60 ? 0 : min)
  }

  /**
   * 残り〇日〇時間〇分〇秒形式で、指定して時間までの残り期間を取得する。
   */
  drawFullRemainingDateAndTime () {
    const setNextTimeZone = (self, timeZone, isToday) => {
      const priodTime = timeZone.startTime
      const priodDate = new Date(
        self.currentYear, // year
        self.currentMonth, // month
        isToday ? self.currentDay : self.currentDay + 1, // date
        priodTime.hour, // hour
        priodTime.minute, // minute
        priodTime.second // second
      )
      return priodDate
    }

    const setPriodTime = (self, timeZone) => {
      const priodTime = timeZone.endTime
      const priodDate = new Date(
        priodTime.year ? priodTime.year : self.currentYear, // year
        priodTime.month ? priodTime.month : self.currentMonth, // month
        priodTime.day ? priodTime.day : self.currentDay, // date
        priodTime.hour, // hour
        priodTime.minute, // minute
        priodTime.second // second
      )
      return priodDate
    }

    const getElapsedTime = (day1, day2) => {
      const date1 = new Date(day1)
      const date2 = new Date(day2)

      const diff = date2.getTime() - date1.getTime()
      const diffTime = (diff / (60 * 60 * 1000))
      return Math.floor(diffTime)
    }

    const setPriodDate = (self, isTimeSale) => {
      const result = {
        nextTimeSale: '',
        timeZone: null
      }
      if (isTimeSale === 'off') {
        const today = self.currentDate
        const todayMorningZone = setNextTimeZone(this, self.morningZone, true)
        const nextMorningZone = setNextTimeZone(this, self.morningZone, false)
        const todayNightZone = setNextTimeZone(this, self.nightZone, true)
        const nextNightZone = setNextTimeZone(this, self.nightZone, false)

        const diffTodyMorning = getElapsedTime(today, todayMorningZone)
        const diffNextMorning = getElapsedTime(today, nextMorningZone)
        const diffTodyNight = getElapsedTime(today, todayNightZone)
        const diffNextNight = getElapsedTime(today, nextNightZone)

        const diffList = []
        const timeZone = {}

        if (diffTodyMorning >= 0) {
          diffList.push(diffTodyMorning)
          timeZone[diffTodyMorning] = todayMorningZone
        }
        if (diffNextMorning >= 0) {
          diffList.push(diffNextMorning)
          timeZone[diffNextMorning] = nextMorningZone
        }
        if (diffTodyNight >= 0) {
          diffList.push(diffTodyNight)
          timeZone[diffTodyNight] = todayNightZone
        }
        if (diffNextNight >= 0) {
          diffList.push(diffNextNight)
          timeZone[diffNextNight] = nextNightZone
        }

        const priodTimeZone = Math.min(...diffList)
        switch (priodTimeZone) {
          case diffTodyMorning:
          case diffNextMorning:
            result.nextTimeSale = 'morning'
            break
          case diffTodyNight:
          case diffNextNight:
            result.nextTimeSale = 'night'
            break
          default:
            break
        }
        result.timeZone = timeZone[priodTimeZone]
        return result
      }

      result.timeZone = setPriodTime(this, this.isMorning() ? this.morningZone : this.isNight() ? this.nightZone : this.currentDate)
      return result
    }

    const priodDateRes = setPriodDate(this, this.checkInTimeSale())
    const priodDate = priodDateRes.timeZone
    const oneDayMilliseconds = 86400000 // 1日をミリ秒に変換 24時間ｘ60分ｘ60秒ｘ1,000ミリ秒＝86,400,000ミリ秒
    const oneHoursMilliseconds = 3600000 // 1時間をミリ秒に変換 60分ｘ60秒ｘ1,000ミリ秒＝3600000ミリ秒
    const oneMinutesMilliseconds = 60000 // 1分をミリ秒に変換 60秒ｘ1,000ミリ秒＝60000ミリ秒
    const oneSecondsMilliseconds = 1000
    const remainingFullTimeMilliseconds = priodDate - this.currentDate// priodDate - this.currentDate > 0 ? priodDate - this.currentDate : 0 // 現在時刻が設定時刻を過ぎている場合残り時間を0として計算する

    const remainingDate = Math.floor((remainingFullTimeMilliseconds) / oneDayMilliseconds)
    const remainingHours = Math.floor((remainingFullTimeMilliseconds - remainingDate * oneDayMilliseconds) / oneHoursMilliseconds)
    const remainingMinutes = Math.floor((remainingFullTimeMilliseconds - remainingDate * oneDayMilliseconds - remainingHours * oneHoursMilliseconds) / oneMinutesMilliseconds)
    const remainingSeconds = Math.floor((remainingFullTimeMilliseconds - remainingDate * oneDayMilliseconds - remainingHours * oneHoursMilliseconds - remainingMinutes * oneMinutesMilliseconds) / oneSecondsMilliseconds)

    const dayMonth = priodDate.getMonth() + 1
    const dayDate = priodDate.getDate()
    const dayOfWeek = priodDate.getDay()
    const dayOfWeekStr = ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek]
    const hour = priodDate.getMinutes() + 1 === 60 ? priodDate.getHours() + 1 : priodDate.getHours() // this.setHourTime(priodDate.getMinutes(), priodDate.getHours())
    const min = this.setMinuitesTime(priodDate.getMinutes())

    // console.log('残り' + remainingDate + '日 ' + remainingHours + '時間' + remainingMinutes + '分' + remainingSeconds + '秒')

    this.reactCompornentData.hours = this.toDoubleDigits(remainingHours)
    this.reactCompornentData.minuties = this.toDoubleDigits(remainingMinutes)
    this.reactCompornentData.seconds = this.toDoubleDigits(remainingSeconds)
    this.reactCompornentData.nextMonth = dayMonth
    this.reactCompornentData.nextWeekStr = dayOfWeekStr
    this.reactCompornentData.nextDate = dayDate
    this.reactCompornentData.nextHour = hour
    this.reactCompornentData.nextMinuites = min
    this.reactCompornentData.morningAndNight = this.checkInTimeSale()
    this.reactCompornentData.nextTimeSale = priodDateRes.nextTimeSale

    this.countUP(1)
    return this.reactCompornentData
  }

  checkParam () {
    function checkUrl () {
      const url = location.href
      // eslint-disable-next-line prefer-regex-literals
      const regexp = new RegExp('viewTimeSale', 'g')
      return regexp.test(url)
    }

    if (checkUrl()) {
      const querys = location.search.substr(1).split('&')
      for (let i = 0; i < querys.length; i++) {
        if (/^viewTimeSale=(m|n|off)$/.test(querys[i])) {
          const value = querys[i].split('=')[1]

          switch (value) {
            case 'm':
              return { test: true, morning: true, night: false }
            case 'n':
              return { test: true, morning: false, night: true }
            case 'off':
              return { test: true, morning: false, night: false }
            default:
              return { test: false, morning: false, night: false }
          }
        }
      }
    }
    return { test: false, morning: false, night: false }
  }
}
