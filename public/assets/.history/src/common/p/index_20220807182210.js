/* ---------------------------------------------------------------------------------
  ライブラリ
--------------------------------------------------------------------------------- */
import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

/* ---------------------------------------------------------------------------------
  コンポーネント
--------------------------------------------------------------------------------- */
import { ContollerAnimateCss } from './../../common/compornent/ContollerAnimateCss'
import { awatiFunction } from './../../common/compornent/AwatiFunction'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
export const MainPC = async () => {
  await awatiFunction(function () {
    $('.nav-menu').addClass('show')
  }, 0)
  await awatiFunction(this.doFadeInDown.bind(this), 0, 'nav-menu')
}
