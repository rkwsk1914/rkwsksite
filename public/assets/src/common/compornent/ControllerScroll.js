export class ControllerScroll {
  constructor (target, trigger = 'html, body', speed = 300) {
    console.log('in')
    $(trigger).on('scroll', (e) => {
      console.log('IN')
      e.preventDefault()
      const position = $(target).offset().top
      $(trigger).animate({ scrollTop: position }, speed, 'swing')
      return false
    })
  }
}
