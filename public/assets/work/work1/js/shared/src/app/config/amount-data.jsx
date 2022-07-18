/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
/* React */
import * as React from 'react'

/* ---------------------------------------------------------------------------------
  ロジックコンポーネント
--------------------------------------------------------------------------------- */
import { gaClick, setDataOnclick } from './../logical/control-ctr.js'

/* ---------------------------------------------------------------------------------
  シュミレーターコンポーネントのステータスデータ
--------------------------------------------------------------------------------- */
import { CONFIG_CTR_DATA } from './ctr-data.js'

/* ---------------------------------------------------------------------------------
  シュミレーターの明細データ
--------------------------------------------------------------------------------- */
export const CONFIG_AMOUNT_DATA = {
  categories: {
    '動画サービス / ゲーム': {
      inputType: 'checkbox',
      bonusText: 'PayPayポイント付与',
      annotationOl: {
        1: <div>スタンダードプランの場合です。</div>,
        2: <div>SPOTV NOWは月額プランのみ付与対象、年間パスは対象外です。</div>,
        3: <div>プレミアムプランに加入の場合です。GeForce NOW Powered by SoftBankは月額料金のみ付与、別途購入するゲームタイトル料金は対象外です。</div>
      },
      annotationUl: {
        1: <div>当社指定の料金プランへのご加入、対象サービスの月額料金について当社指定の支払い方法の設定、ソフトバンクプレミアム「エンタメ特典」へのエントリーが必要となります。</div>,
        2: <div>ソフトバンクユーザーで<a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP_RESULT_LINK_TERMS)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP_RESULT_LINK_TERMS)}>適用条件</a>を満たしているお客さまが対象です。</div>,
        3: <div>無料試用期間中は付与の対象外となります。</div>
      },
      contents: {
        Netflix: {
          tagText: (<span>
            Netflix<sup>※1</sup><br />
            <small>（月額料金 1,490円）</small>
          </span>),
          status: false,
          softBank: 136,
          payment: 1490,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_NETFLIX_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_NETFLIX_ON
          }
        },
        ABEMA: {
          tagText: (<span>
            ABEMA<br />
            <small>（月額料金 960円）</small>
          </span>),
          status: false,
          softBank: 175,
          payment: 960,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_ABEMA_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_ABEMA_ON
          }
        },
        Hulu: {
          tagText: (<span>
            Hulu<br />
            <small>（月額料金 1,026円）</small>
          </span>),
          status: false,
          softBank: 93,
          payment: 1026,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_HULU_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_HULU_ON
          }
        },
        DAZN: {
          tagText: (<span>
            DAZN<br />
            <small>（月額料金 3,000円）</small>
          </span>),
          status: false,
          softBank: 273,
          payment: 3000,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_DAZN_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_DAZN_ON
          }
        },
        'SPOTV NOW': {
          tagText: (<span>
            SPOTV NOW<br />
            <small>（月額料金 1,300円）<sup>※2</sup></small>
          </span>),
          status: false,
          softBank: 236,
          payment: 3000,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_SPOTV_NOW_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_SPOTV_NOW_ON
          }
        },
        'GeForce NOW': {
          tagText: (<span>
            GeForce NOW<sup>※3</sup><br />
            <small>（月額料金 1,980円）</small>
          </span>),
          status: false,
          softBank: 360,
          payment: 1980,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_GFNOW_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_GFNOW_ON
          }
        }
      }
    },
    音楽: {
      inputType: 'checkbox',
      bonusText: 'PayPayポイント付与',
      noticeBadge: '加入から6ヵ月間は月額料金無料！',
      annotationOl: null,
      annotationUl: {
        1: <div><a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP_RESULT_LINK_LINE_MUSIC)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP_RESULT_LINK_LINE_MUSIC)}>専用ページ</a>から加入した方のみが対象です。無料期間中の方は対象外です。</div>,
        2: <div>一般・月額プランに加入の場合です。学生・月額プランの場合は87円相当/月です。</div>
      },
      annotationUl2: {
        3: <div>7ヵ月目以降、一般プラン980円・学生プラン480円/月がかかります。</div>,
        4: <div>通常は初回登録時1ヵ月無料です。</div>
      },
      contents: {
        'LINE MUSIC': {
          tagText: (<span>
            LINE MUSIC<br />
            <small>（月額料金 980円）</small>
          </span>),
          status: false,
          softBank: 178,
          payment: 980,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_LINE_MUSIC_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_LINE_MUSIC_ON
          },
          noticeBadge: '加入から6ヵ月間は月額料金無料！',
          sideBoxDom: (
            <p className="simulator-content__resultArea__detailBox__card__category__contents__sideBox">
            7ヵ月目以降<br />
            <span className="simulator-content__resultArea__detailBox__card__category__contents__sideBox__redStrong">178円</span>相当/月<br />
            PayPayポイント付与
            </p>
          )
        }
      }
    },
    'マンガ（電子書籍）': {
      inputType: 'checkbox',
      bonusText: 'PayPayポイント付与',
      annotationOl: null,
      annotationUl: {
        1: <div>開催日ごとに毎回エントリーが必要です。</div>,
        2: <div>付与上限は500円／日です。</div>,
        3: <div>スマートログイン設定済みのYahoo! JAPAN IDとPayPayアカウントとの連携が必要です。</div>
      },
      contents: {
        ebookjapan: {
          tagText: (<span>
            ebookjapan<br />
            <small>毎週金曜日に1,000円お買い物した場合</small>
          </span>),
          description: '毎週金曜日に1,000円お買い物した場合',
          status: false,
          softBank: 400,
          payment: 4000,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_EBOOK_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_EBOOK_ON
          }
        }
      }
    },
    ショッピング: {
      inputType: 'radio',
      bonusText: 'PayPayポイント付与',
      annotationOl: null,
      annotationUl: {
        1: <div>付与上限は1,000円／日です。</div>,
        2: (<div>
              スマートログイン設定済みのYahoo! JAPAN IDでログインの上、同一のYahoo! JAPAN IDで「PayPay残高」または「PayPayカード（Yahoo! JAPANカード）」を利用してお買い物していることが必要です。法人向けなど、一部対象外の料金プランがあります。一部対象外の商品があります。ボーナス等の獲得・利用には条件があります。詳細は<a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP_RESULT_LINK_SHOPPING)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP_RESULT_LINK_SHOPPING)}>こちら</a>をご確認下さい。
            </div>)
      },
      contents: {
        '10,000円/週 程度': {
          tagText: (<span>
            10,000円/週 程度<br />
            <small>毎週日曜日にPayPayモールで<br />10,000円お買い物した場合</small>
          </span>),
          description: '毎週日曜日にPayPayモールで10,000円お買い物した場合',
          status: false,
          softBank: 4000,
          payment: 40000,
          ctr: {
            on: null,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_OFTEN_ON
          }
        },
        '5,000円/週 程度': {
          tagText: (<span>
            5,000円/週 程度<br />
            <small>毎週日曜日にPayPayモールで<br />5,000円お買い物した場合</small>
          </span>),
          description: '毎週日曜日にPayPayモールで5,000円お買い物した場合',
          status: false,
          softBank: 2000,
          payment: 10000,
          ctr: {
            on: null,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_USUAL_ON
          }
        },
        '3,000円/週 程度': {
          tagText: (<span>
            3,000円/週 程度<br />
            <small>毎週日曜日にPayPayモールで<br />3,000円お買い物した場合</small>
          </span>),
          description: '毎週日曜日にPayPayモールで3,000円お買い物した場合',
          status: false,
          softBank: 1200,
          payment: 10000,
          ctr: {
            on: null,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_USUAL_ON
          }
        },
        '1,000円/週 程度': {
          tagText: (<span>
            1,000円/週 程度<br />
            <small>毎週日曜日にPayPayモールで<br />1,000円お買い物した場合</small>
          </span>),
          description: '毎週日曜日にPayPayモールで1,000円お買い物した場合',
          status: false,
          softBank: 400,
          payment: 10000,
          ctr: {
            on: null,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_USUAL_ON
          }
        },
        まったく使わない: {
          tagText: <span>まったく使わない</span>,
          description: 'none',
          status: false,
          softBank: 0,
          payment: 0,
          ctr: {
            on: null,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_NOUSE_ON
          }
        }
      }
    },
    スーパーPayPayクーポン: {
      inputType: 'checkbox',
      bonusText: 'PayPayポイント付与',
      annotationOl: null,
      annotationUl: {
        1: <div>対象店舗でPayPay決済した場合。対象店舗ごとに付与上限・利用期限・回数上限・付与率が異なります。</div>,
        2: <div>対象店舗とクーポンの情報は<a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP_RESULT_LINK_COUPON)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP_RESULT_LINK_COUPON)}>こちら</a>からご確認ください。</div>
      },
      contents: {
        PayPayポイント: {
          tagText: (<span>
            PayPayポイント<br />
            <small>付与率50％のクーポンを使って<br className="u-pc-d-n" />600円以上のご利用を計4回行った場合</small>
          </span>),
          description: 'クーポンを使って600円以上のご利用を計4回行った場合',
          status: false,
          softBank: 1200,
          payment: 2400,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_PAYPAY_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_PAYPAY_ON
          }
        }
      }
    },
    長期継続特典: {
      inputType: 'checkbox',
      bonusText: 'PayPayポイント付与',
      annotationOl: null,
      annotationUl: null,
      contents: {
        '13ヵ月以上利用': {
          tagText: (<span>
            <small>対象プランのご加入で</small><br />
            13ヵ月以上利用
          </span>),
          topDescription: '対象プランのご加入で',
          description: 'none',
          status: false,
          softBank: 1000,
          payment: 0,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_MORE_YEAR_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_MORE_YEAR_ON
          },
          sideBoxDom: (
            <p className="simulator-content__resultArea__detailBox__card__category__contents__sideBox">
              毎年の誕生月に<br className="u-pc-d-n"/>
              <span className="simulator-content__resultArea__detailBox__card__category__contents__sideBox__redStrong">1,000円</span>相当/年<br />
              PayPayポイント付与
            </p>
          )
        }
      }
    },
    子育て応援クラブ: {
      inputType: 'checkbox',
      bonusText: 'PayPayポイント付与',
      annotationOl: null,
      annotationUl: null,
      contents: {
        '12歳以下のお子さまがいる': {
          tagText: <span>12歳以下の<br />お子さまがいる</span>,
          description: 'none',
          status: false,
          softBank: 1000,
          payment: 0,
          ctr: {
            on: CONFIG_CTR_DATA.STEP_RESULT_ITEM_CHILD_OFF,
            off: CONFIG_CTR_DATA.STEP_RESULT_ITEM_CHILD_ON
          },
          sideBoxDom: (
            <p className="simulator-content__resultArea__detailBox__card__category__contents__sideBox">
            お子さまの誕生月に<br className="u-pc-d-n"/>
            <span className="simulator-content__resultArea__detailBox__card__category__contents__sideBox__redStrong">1,000円</span>相当/年<br />
            (初回3000円相当)<br className="u-pc-d-n" />
            PayPayポイント付与
            </p>
          )
        }
      }
    }
  }
}
