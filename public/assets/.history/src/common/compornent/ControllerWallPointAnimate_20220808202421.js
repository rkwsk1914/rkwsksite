import $ from 'jquery'
/* eslint-disable */
import 'waypoints/lib/jquery.waypoints.min.js'
/* eslint-enable */
import 'waypoints/lib/shortcuts/inview'
import 'waypoints/lib/shortcuts/sticky'
import { ContollerAnimateCss } from './ContollerAnimateCss'
import { awatiFunction } from './AwatiFunction'

export class ControllerWallPointAnimate {
  constructor () {
    this.body = $('body')
  }

  setSubTitle () {
    $('#sub-visual').waypoint({
      handler (direction) {
        console.log(direction)
        // .boxが画面内に入ったときに実行される処理をここに書く。
        // direction引数には、下方向のスクロールのときは"down"、
        // 上方向のスクロールのときは"up"が入る。
        switch (direction) {
          case 'up': {
            break
          }
          case 'down': {
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

  setUpDown (trigger, element) {
    // console.log(trigger, element)
    $(trigger).waypoint({
      handler (direction) {
        // console.log(direction)
        // .boxが画面内に入ったときに実行される処理をここに書く。
        // direction引数には、下方向のスクロールのときは"down"、
        // 上方向のスクロールのときは"up"が入る。
        switch (direction) {
          case 'up': {
            $(element).removeClass('animate__fadeIn')
            $(element).addClass('animate__fadeOut')
            break
          }
          case 'down': {
            $(element).removeClass('animate__fadeOut')
            $(element).addClass('animate__fadeIn')
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

  setFunc (funcUp, funcDown) {
    $(trigger).waypoint({
      handler (direction) {
        // console.log(direction)
        // .boxが画面内に入ったときに実行される処理をここに書く。
        // direction引数には、下方向のスクロールのときは"down"、
        // 上方向のスクロールのときは"up"が入る。
        switch (direction) {
          case 'up': {
            trigger
            break
          }
          case 'down': {
            funcUp()
            break
          }
          default: {
            funcDown()
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
