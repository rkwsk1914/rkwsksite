export class Scroller {
  constructor (id, type = 'smooth', isToTop = false) {
    const blueLeft = isToTop ? 0 : document.getElementById(id).getBoundingClientRect().left
    const blueTop = isToTop ? 0 : document.getElementById(id).getBoundingClientRect().top
    window.scrollTo({
      left: blueLeft,
      top: blueTop,
      behavior: type
    })
  }
}
