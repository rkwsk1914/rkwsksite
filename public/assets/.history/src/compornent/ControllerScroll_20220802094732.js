export class ControllerScroll {
  constructor (target, trigger = 'html, body', speed = 300) {
    $(trigger).on('scroll', (e) => {
      e.preventDefault()
      const position = $(target).offset().top
      $(trigger).animate({ scrollTop: position }, speed, 'swing')
      return false
    })
  }
}
