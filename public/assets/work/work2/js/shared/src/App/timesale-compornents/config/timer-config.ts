
import { TimeZone, DeadLine } from './../@type/types'

export const morningZone: TimeZone = {
  startTime: { hour: 10, minute: 0, second: 0 },
  endTime: { hour: 12, minute: 0, second: 0 }
}
export const nightZone: TimeZone = {
  startTime: { hour: 17, minute: 0, second: 0 },
  endTime: { hour: 24, minute: 0, second: 0 }
}
export const campaignCountZone: DeadLine = {
  endTime: { year: 2023, month: 1, day: 1, hour: 0, minute: 0, second: 0 }
}
