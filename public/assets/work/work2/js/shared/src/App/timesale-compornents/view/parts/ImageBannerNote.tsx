/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { RESPONSIVE_BASE_WIDTH } from './../../common/constant'
import { ResponsivePx } from './../../logic/ResponsivePx'

export default function ImageBannerNote (props: any) {
  return (
    <div>
      <p>
        <a
          href="#"
          target="_blank"
          css={styles.detailLink}
        >
          <span className="">詳細をみる</span>
        </a>
      </p>
      <ul css={styles.ul}>
        <li css={[styles.li, styles.linotFirstChild]}><div>【SoftBank Airの場合】Airターミナル（専用接続機器）を分割もしくは一括で購入すること。</div></li>
        <li css={styles.li}><div>【SoftBank 光の場合】2年自動更新プランまたは5年自動更新プランにてお申し込みいただくこと。契約期間満了月の当月・翌月・翌々月以外での解約には、解約時の契約プラン・回線タイプに応じた割引前の月額料金相当額の解除料が必要です。契約成立日が2022年6月30日（木）以前の場合、2年自動更新プランは10,450円、5年自動更新プランは16,500円の解除料が必要です。詳細は<a href="#">ウェブ</a>をご確認ください。</div></li>
        <li css={[styles.li, styles.liRed]}><div>ウェブからお申し込みの場合、タイムセール時間内にお申し込みを完了させてください。</div></li>
        <li css={[styles.li, styles.liRed]}><div>お電話からお申し込みの場合、オペレーターへ必ず『タイムセールを見た』とお伝えください。</div></li>
      </ul>
    </div>
  )
}

const re = new ResponsivePx(RESPONSIVE_BASE_WIDTH)
const styles = {
  ul: css`
    margin: 20px 0 0 0;

    @media(max-width: 576px) {
      margin: ${re.responsivePx(14)} 0 0 0;
    }
  `,
  li: css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    line-height: 1.7;

    @media(max-width: 576px) {
      margin: 0;
    }

    &::before {
      content: "";
      width: 7px;
      min-width: 7px;
      height: 7px;
      min-height: 7px;
      position: relative;
      margin: 10px 6px 0 0;
      top: 50%;
      border-radius: 50%;
      transform: translateY(-50%);
      background-color: #333;

      @media(max-width: 576px) {
        display: block;
        margin: ${re.responsivePx(20)} ${re.responsivePx(15)} 0 0;
        width: ${re.responsivePx(10)};
        min-width: ${re.responsivePx(10)};
        height: ${re.responsivePx(10)};
        min-height: ${re.responsivePx(10)};
        position: relative;
        top: 50%;
        border-radius: 50%;
        transform: translateY(-50%);
      }
    }

    span {
      display: block;
      font-size: 12px;
      margin: 0 10px 0 0;

      @media(max-width: 576px) {
        margin: 0 ${re.responsivePx(15)} 0 0;
        font-size: ${re.responsivePx(24)};
      }

      &.bulet--long {
        @media(max-width: 576px) {
          width: 90px;
        }
      }
    }

    div {
      text-align: left;
      font-size: 14px;

      @media(max-width: 576px) {
        font-size: ${re.responsivePx(24)};
      }
    }
  `,
  liRed: css`
    color: #e64646!important;

    &::before {
      background-color: #e64646;
    }
  `,
  linotFirstChild: css`
    @media(max-width: 576px) {
      margin: ${re.responsivePx(30)} 0 0 0;
    }
  `,
  detailLink: css`
    &,
    &:hover,
    &:active,
    &:visited,
    &:focus {
      color: #0b5bce!important;
      margin: 20px 0 0 0;
      display: inline-block;

      @media (max-width: 576px) {
        margin: ${re.responsivePx(14)} 0 0 0;
      }

      img {
        @media (max-width: 576px) {
          display: block;
          width: 100%;
        }
      }

      span {
        display: inline-block;
        font-size: 14px;
        font-weight: bold;

        @media (max-width: 576px) {
          margin: ${re.responsivePx(14)} 0 0 0;
          text-align: left;
          display: inline-block;
        }
      }

      img.pdficon {
        width: auto;

        @media(max-width: 576px) {
          position: relative;
          top: ${re.responsivePx(-6)};
          display: inline-block;
        }
      }
    }
  `
}
