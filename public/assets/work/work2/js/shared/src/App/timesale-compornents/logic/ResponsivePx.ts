/**
 * レスポンスシブデザインpx数計算
 */
export class ResponsivePx {
  deviceWidth: string
  baseWidth: number

  constructor (baseWidth: number) {
    this.deviceWidth = '100vw'
    this.baseWidth = baseWidth
  }

  responsivePx (pixel: number) {
    const result: string = String(pixel / this.baseWidth * 100) + 'vw'
    // const result: string = `(${pixel}px / ${this.deviceWidth}) * ${this.deviceWidth}`
    return result
  }
}
