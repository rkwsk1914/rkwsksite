import $ from 'jquery'
/* eslint-disable */
import 'waypoints/lib/jquery.waypoints.min.js'
/* eslint-enable */
import 'waypoints/lib/shortcuts/inview'
import 'waypoints/lib/shortcuts/sticky'
import { ContollerAnimateCss } from './ContollerAnimateCss'

export class ControllerWallPointAnimate {
  constructor () {
    this.body = $('body')
  }

  setSubTitle () {
    $('#sub-visual').waypoint({
      handler (direction) {
        console.log(direction)
        // .boxが画面内に入ったときに実行される処理をここに書く。
        // direction引数には、下方向のスクロールのときは""、
        // 上方向のスクロールのときは""が入る。
        switch (direction) {
          case '': {
            break
          }
          case '': {
            // const spans = $('.sub-visual__title__strong__span')
            const spans = document.getElementsByClassName('sub-visual__title__strong__span')
            const spansKey = Object.keys(spans)
            spansKey.forEach(key => {
              setTimeout(() => {
                console.log(spans[key])
                $(spans[key]).addClass('animate__fadeIn')
              }, 1000)
            })
            break
          }
          default: {
            break
          }
        }

        /**
         * waypointを削除することで、この要素に対しては
         * これ以降handlerが呼ばれなくなる
         */
        this.destroy()
      },

      // 要素の上端が画面のどの位置に来たときにhandlerを実行するかを指定。
      // 0%なら画面の一番上、100%なら画面の一番下に来たときに実行される。
      offset: '100%'
    })
  }

  setProfile () {
    $('#first-view').waypoint({
      handler (direction) {
        console.log(direction)
        // .boxが画面内に入ったときに実行される処理をここに書く。
        // direction引数には、下方向のスクロールのときは""、
        // 上方向のスクロールのときは""が入る。
        switch (direction) {
          case '': {
            $('.first-view__left').removeClass('animate__fadeIn')
            $('.first-view__left').addClass('animate__fadeOut')
            $('.first-view__right').removeClass('animate__fadeIn')
            $('.first-view__right').addClass('animate__fadeOut')
            break
          }
          case '': {
            $('.first-view__left').removeClass('animate__fadeOut')
            $('.first-view__left').addClass('animate__fadeIn')
            $('.first-view__right').removeClass('animate__fadeOut')
            $('.first-view__right').addClass('animate__fadeIn')
            break
          }
          default: {
            break
          }
        }

        /**
         * waypointを削除することで、この要素に対しては
         * これ以降handlerが呼ばれなくなる
         */
        // this.destroy()
      },

      // 要素の上端が画面のどの位置に来たときにhandlerを実行するかを指定。
      // 0%なら画面の一番上、100%なら画面の一番下に来たときに実行される。
      offset: '50%'
    })
  }
}
