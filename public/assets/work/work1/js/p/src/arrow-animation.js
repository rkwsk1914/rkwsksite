import $ from 'jquery'

class ArrowAnimationRight {
  constructor (className, maxPhase) {
    this.timer = null
    this.countUp = 0
    this.speed = 200
    this.width = 0
    this.maxPhase = maxPhase
    this.arrrowElement = $(`.${className}`)

    this.init()
  }

  init () {
    this.width = $(this.arrrowElement).innerWidth()
  }

  doAnimation () {
    this.timer = setInterval(() => {
      if (this.countUp === 4) {
        this.countUp = 0
      }

      this.changeWidth(this.countUp)
      this.countUp++
    }, this.speed)
  }

  changeWidth (count) {
    const newWidth = `${(this.width * count / this.maxPhase)}px`
    console.log(newWidth)
    $(this.arrrowElement).css({
      width: newWidth
    })
  }
}

class ArrowAnimationBottom {
  constructor (className, maxPhase) {
    this.timer = null
    this.countUp = 0
    this.speed = 200
    this.height = 0
    this.maxPhase = maxPhase
    this.arrrowElement = $(`.${className}`)

    this.init()
  }

  init () {
    this.height = $(this.arrrowElement).innerHeight()
  }

  doAnimation () {
    this.timer = setInterval(() => {
      if (this.countUp === 4) {
        this.countUp = 0
      }

      this.changeheight(this.countUp)
      this.countUp++
    }, this.speed)
  }

  changeheight (count) {
    const newheight = `${(this.height * count / this.maxPhase)}px`
    const newMarginBottom = `${(this.height * (this.maxPhase - count) / this.maxPhase)}px`
    console.log(newheight)
    $(this.arrrowElement).css({
      height: newheight,
      marginBottom: newMarginBottom
    })
  }
}

const arrow = new ArrowAnimationBottom('js-arrow-animation', 3)
arrow.doAnimation()
