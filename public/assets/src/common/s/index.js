/* ---------------------------------------------------------------------------------
  ライブラリ
--------------------------------------------------------------------------------- */
import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'slick-carousel'

/* ---------------------------------------------------------------------------------
  コンポーネント
--------------------------------------------------------------------------------- */
import { ContollerAnimateCss } from './../../common/compornent/ContollerAnimateCss'
import { awatiFunction } from './../../common/compornent/AwatiFunction'
import { ControllerNavMenu } from './../../common/compornent/ControllerNavMenu'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
export const MainSP = async () => {
  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerNavMenu = new ControllerNavMenu()

  controllerNavMenu.init()
}
