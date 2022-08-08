import $ from 'jquery'
import 'animate.css'
import 'waypoints/lib/noframework.waypoints'

export class ControllerWallPointAnimate {
  constructor () {}

  setEvent () {
    $('.box').waypoint({
      handler(direction) {
        // .boxが画面内に入ったときに実行される処理をここに書く。
        // direction引数には、下方向のスクロールのときは"down"、
        // 上方向のスクロールのときは"up"が入る。
      },
    
      // 要素の上端が画面のどの位置に来たときにhandlerを実行するかを指定。
      // 0%なら画面の一番上、100%なら画面の一番下に来たときに実行される。
      offset: '100%',
    });
  }
}