import $ from 'jquery'
// import 'bootstrap'
import LocomotiveScroll from 'locomotive-scroll';


/* ---------------------------------------------------------------------------------
  バンドルするCSS
--------------------------------------------------------------------------------- */
import './style/common.scss'


const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});