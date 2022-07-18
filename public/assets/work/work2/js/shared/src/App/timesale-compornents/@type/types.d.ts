export interface Window {
  CDN_FQDN: string,
  SB_DATE: any,
  nowDate: string
}

export type TimeSaleData = any

export interface TimerData {
  hour: number,
  minute: number,
  second: number
}

export interface TimeZone {
  startTime: TimerData,
  endTime: TimerData
}

export interface DeadLine {
  endTime: {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
  }
}
