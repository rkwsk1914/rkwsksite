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
import { awatiFunction } from './../../../common/compornent/AwatiFunction'
import { ControllerGSAPandLocomotive } from './../compornent/s/ControllerGSAPandLocomotive'

/* ---------------------------------------------------------------------------------
  main
--------------------------------------------------------------------------------- */
export const MainSP = async () => {
  console.log('SP')
  const contollerAnimateCss = new ContollerAnimateCss()
  const controllerGSAPandLocomotive = new ControllerGSAPandLocomotive()

  $('.sub-visual__my-skils-icons').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    cssEase: 'linear',
    slidesToShow: 10,
    swipe: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 576,
        speed: 2000
      }
    ]
  })

  $('.works-list').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    infinite: true,
    swipe: true,
    dots: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1 // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  })

  await contollerAnimateCss.doAnimate('body', 'animate__fadeIn', 500)
  await contollerAnimateCss.doAnimate('.main-visual__text', 'animate__fadeInUp', 500)

  await awatiFunction(controllerGSAPandLocomotive.init.bind(controllerGSAPandLocomotive), 500)
  await awatiFunction(controllerGSAPandLocomotive.doMvAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doSubMvAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doMvTextAnimate.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doShowSectionWorkText.bind(controllerGSAPandLocomotive), 0)
  await awatiFunction(controllerGSAPandLocomotive.doShowSectionProfileText.bind(controllerGSAPandLocomotive), 0)
}
