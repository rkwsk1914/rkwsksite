import $ from 'jquery'
import 'animate.css'
import 'waypoints/lib/noframework.waypoints'

export class ControllerWallPointAnimate {
  constructor () {}

  setSubTitle () {
    $('.sub-visual').waypoint({
      handler (direction) {
        // .boxが画面内に入ったときに実行される処理をここに書く。
        // direction引数には、下方向のスクロールのときは"down"、
        // 上方向のスクロールのときは"up"が入る。
        switch (direction) {
          case 'up':
          case 'down':
            const spans = $('sub-visual__title__strong>span')
            spans.forEach(span => {
              setTimeout(() => {
                $(span).addClass('animate__fadeInUp')
              }, 300)
            })
          default:
            break
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
}
