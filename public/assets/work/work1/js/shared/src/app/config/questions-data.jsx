/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
/* React */
import * as React from 'react'
// import $ from 'jquery'

/* ---------------------------------------------------------------------------------
  ロジックコンポーネント
--------------------------------------------------------------------------------- */
import { gaClick, setDataOnclick } from './../logical/control-ctr.js'

/* ---------------------------------------------------------------------------------
  シュミレーターコンポーネントのステータスデータ
--------------------------------------------------------------------------------- */
import { CONFIG_CTR_DATA } from './ctr-data.js'

/* ---------------------------------------------------------------------------------
  シュミレーターの設問データ
--------------------------------------------------------------------------------- */
export const CONFIG_QUESTION_DATA = {
  Q1: {
    statement: <span>ネットショッピングはどれ位使う？</span>,
    inputType: 'radio',
    layout: 'column-1',
    selections: {
      select1: {
        label: '10,000円/週 程度',
        ctr: {
          on: null,
          off: CONFIG_CTR_DATA.STEP1_ITEM_10000_ON
        },
        value: '',
        status: false,
        relatedAmountData: {
          categories: {
            ショッピング: {
              contents: ['10,000円/週 程度']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: '付与上限は1,000円／日です。',
            2: (<p>
              スマートログイン設定済みのYahoo! JAPAN IDでログインの上、同一のYahoo! JAPAN IDで「PayPay残高」または「PayPayカード（Yahoo! JAPANカード）」を利用してお買い物していることが必要です。法人向けなど、一部対象外の料金プランがあります。一部対象外の商品があります。ボーナス等の獲得・利用には条件があります。詳細は<a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP1_LINK_PAYPAY)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP1_LINK_PAYPAY)}>こちら</a>をご確認下さい。
            </p>)
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>PayPayモール</strong><br />
                <small>毎週日曜日に10,000円お買い物した場合</small><br />
                <span><strong>4,000円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {}
          }
        }
      },
      select2: {
        label: '5,000円/週 程度',
        ctr: {
          on: null,
          off: CONFIG_CTR_DATA.STEP1_ITEM_5000_ON
        },
        value: '',
        status: false,
        relatedAmountData: {
          categories: {
            ショッピング: {
              contents: ['5,000円/週 程度']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: '付与上限は1,000円／日です。',
            2: (<p>
                  スマートログイン設定済みのYahoo! JAPAN IDでログインの上、同一のYahoo! JAPAN IDで「PayPay残高」または「PayPayカード（Yahoo! JAPANカード）」を利用してお買い物していることが必要です。法人向けなど、一部対象外の料金プランがあります。一部対象外の商品があります。ボーナス等の獲得・利用には条件があります。詳細は<a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP1_LINK_PAYPAY)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP1_LINK_PAYPAY)}>こちら</a>をご確認下さい。
                </p>)
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>PayPayモール</strong><br />
                <small>毎週日曜日に5,000円お買い物した場合</small><br />
                <span><strong>2,000円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {}
          }
        }
      },
      select3: {
        label: '3,000円/週 程度',
        ctr: {
          on: null,
          off: CONFIG_CTR_DATA.STEP1_ITEM_3000_ON
        },
        value: '',
        status: false,
        relatedAmountData: {
          categories: {
            ショッピング: {
              contents: ['3,000円/週 程度']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: '付与上限は1,000円／日です。',
            2: (<p>
                  スマートログイン設定済みのYahoo! JAPAN IDでログインの上、同一のYahoo! JAPAN IDで「PayPay残高」または「PayPayカード（Yahoo! JAPANカード）」を利用してお買い物していることが必要です。法人向けなど、一部対象外の料金プランがあります。一部対象外の商品があります。ボーナス等の獲得・利用には条件があります。詳細は<a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP1_LINK_PAYPAY)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP1_LINK_PAYPAY)}>こちら</a>をご確認下さい。
                </p>)
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>PayPayモール</strong><br />
                <small>毎週日曜日に3,000円お買い物した場合</small><br />
                <span><strong>1,200円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {}
          }
        }
      },
      select4: {
        label: '1,000円/週 程度',
        ctr: {
          on: null,
          off: CONFIG_CTR_DATA.STEP1_ITEM_1000_ON
        },
        value: '',
        status: false,
        relatedAmountData: {
          categories: {
            ショッピング: {
              contents: ['1,000円/週 程度']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: '付与上限は1,000円／日です。',
            2: (<p>
                  スマートログイン設定済みのYahoo! JAPAN IDでログインの上、同一のYahoo! JAPAN IDで「PayPay残高」または「PayPayカード（Yahoo! JAPANカード）」を利用してお買い物していることが必要です。法人向けなど、一部対象外の料金プランがあります。一部対象外の商品があります。ボーナス等の獲得・利用には条件があります。詳細は<a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP1_LINK_PAYPAY)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP1_LINK_PAYPAY)}>こちら</a>をご確認下さい。
                </p>)
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>PayPayモール</strong><br />
                <small>毎週日曜日に1,000円お買い物した場合</small><br />
                <span><strong>400円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {}
          }
        }
      },
      select5: {
        label: <span>まったく使わない</span>,
        ctr: {
          on: null,
          off: CONFIG_CTR_DATA.STEP1_ITEM_NOUSE_ON
        },
        value: '',
        status: false,
        relatedAmountData: {
          categories: {
            ショッピング: {
              contents: ['まったく使わない']
            }
          }
        }
      }
    }
  },
  Q2: {
    statement: <span>あなたの好きなエンタメは？</span>,
    inputType: 'checkbox',
    layout: 'column-2',
    selections: {
      select1: {
        label: '映画やアニメ',
        ctr: {
          on: CONFIG_CTR_DATA.STEP2_ITEM_MOVIE_OFF,
          off: CONFIG_CTR_DATA.STEP2_ITEM_MOVIE_ON
        },
        value: '',
        resetCheckBox: false,
        status: false,
        relatedAmountData: {
          categories: {
            '動画サービス / ゲーム': {
              contents: ['Netflix']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: 'スタンダードプランの場合です',
            2: '当社指定の料金プランへのご加入、対象サービスの月額料金について当社指定の支払い方法の設定、ソフトバンクプレミアム「エンタメ特典」へのエントリーが必要となります。',
            3: 'ソフトバンクユーザーで適用条件を満たしているお客さまが対象です。',
            4: '無料試用期間中は付与の対象外となります。'
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>Netflix</strong>に加入の場合<small>（月額料金1,490円）</small><br />
                <span><strong>136円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {
              1: (<strong>対象の動画サービスは明細画面で変更いただけます</strong>)
            }
          }
        }
      },
      select2: {
        label: '音楽',
        ctr: {
          on: CONFIG_CTR_DATA.STEP2_ITEM_MUSIC_OFF,
          off: CONFIG_CTR_DATA.STEP2_ITEM_MUSIC_ON
        },
        value: '',
        resetCheckBox: false,
        status: false,
        relatedAmountData: {
          categories: {
            音楽: {
              contents: ['LINE MUSIC']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: (<p><a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP2_LINK_LINE_MUSIC)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP2_LINK_LINE_MUSIC)}>専用ページ</a>から加入した方のみが対象です。無料期間中の方は対象外です。</p>),
            2: '一般・月額プランに加入の場合です。学生・月額プランの場合は87円相当/月です。'
          },
          ulAddTitle: '【加入から6か月間は月額料金無料！】',
          ulData2: {
            1: '7ヵ月目以降、一般プラン980円・学生プラン480円/月がかかります。',
            2: '通常は初回登録時1ヵ月無料です。'
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>LINE MUSIC</strong><small>（月額料金980円）</small><br />
                <small>7ヵ月目以降</small><br />
                <span><strong>178円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {}
          }
        }
      },
      select3: {
        label: 'マンガ',
        ctr: {
          on: CONFIG_CTR_DATA.STEP2_ITEM_COMIC_OFF,
          off: CONFIG_CTR_DATA.STEP2_ITEM_COMIC_ON
        },
        value: '',
        resetCheckBox: false,
        status: false,
        relatedAmountData: {
          categories: {
            'マンガ（電子書籍）': {
              contents: ['ebookjapan']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: '開催日ごとに毎回エントリーが必要です。',
            2: '付与上限は500円／日です。',
            3: 'スマートログイン設定済みのYahoo! JAPAN IDとPayPayアカウントとの連携が必要です。'
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>ebookjapan</strong><br />
                <small>毎週金曜日に1,000円お買い物した場合</small><br />
                <span><strong>400円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {}
          }
        }
      },
      select4: {
        label: 'ゲーム',
        ctr: {
          on: CONFIG_CTR_DATA.STEP2_ITEM_GAME_OFF,
          off: CONFIG_CTR_DATA.STEP2_ITEM_GAME_ON
        },
        value: '',
        resetCheckBox: false,
        status: false,
        relatedAmountData: {
          categories: {
            '動画サービス / ゲーム': {
              contents: ['GeForce NOW']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: 'プレミアムプランに加入の場合です。',
            2: 'GeForce NOW Powered by SoftBankは月額料金のみ付与、別途購入するゲームタイトル料金は対象外です。',
            3: '当社指定の料金プランへのご加入、対象サービスの月額料金について当社指定の支払い方法の設定、ソフトバンクプレミアム「エンタメ特典」へのエントリーが必要となります。',
            4: 'ソフトバンクユーザーで適用条件を満たしているお客さまが対象です。',
            5: '無料試用期間中は付与の対象外となります。'
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>GeForce NOW</strong><small>（月額料金1,980円）</small><br />
                <span><strong>360円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {}
          }
        }
      },
      select5: {
        label: 'スポーツ',
        ctr: {
          on: CONFIG_CTR_DATA.STEP2_ITEM_SPORT_OFF,
          off: CONFIG_CTR_DATA.STEP2_ITEM_SPORT_ON
        },
        value: '',
        resetCheckBox: false,
        status: false,
        relatedAmountData: {
          categories: {
            '動画サービス / ゲーム': {
              contents: ['DAZN']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: '当社指定の料金プランへのご加入、対象サービスの月額料金について当社指定の支払い方法の設定、ソフトバンクプレミアム「エンタメ特典」へのエントリーが必要となります。',
            2: 'ソフトバンクユーザーで適用条件を満たしているお客さまが対象です。',
            3: '無料試用期間中は付与の対象外となります。'
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>DAZN</strong>に加入の場合<small>（月額料金3,000円）</small><br />
                <span><strong>273円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {
              1: (<strong>対象の動画サービスは明細画面で変更いただけます</strong>)
            }
          }
        }
      },
      select6: {
        label: '特になし',
        ctr: {
          on: CONFIG_CTR_DATA.STEP2_ITEM_RESET_OFF,
          off: CONFIG_CTR_DATA.STEP2_ITEM_RESET_ON
        },
        value: '',
        resetCheckBox: true,
        status: false,
        relatedAmountData: {
          categories: {}
        }
      }
    }
  },
  Q3: {
    statement: <span>割引クーポンを使うのが好き？</span>,
    inputType: 'radio',
    layout: 'column-2',
    selections: {
      select1: {
        label: 'はい',
        ctr: {
          on: null,
          off: CONFIG_CTR_DATA.STEP3_ITEM_YES_ON
        },
        value: '',
        status: false,
        relatedAmountData: {
          categories: {
            スーパーPayPayクーポン: {
              contents: ['PayPayポイント']
            }
          }
        },
        additionalNote: {
          ulData: {
            1: '対象店舗でPayPay決済した場合。対象店舗ごとに付与上限・利用期限・回数上限・付与率が異なります。',
            2: (<p>対象店舗とクーポンの情報は<a href="#" onClick={(e) => gaClick(e, CONFIG_CTR_DATA.STEP3_LINK_COUPON)} data-onclick={setDataOnclick(CONFIG_CTR_DATA.STEP3_LINK_COUPON)}>こちら</a>からご確認ください。</p>)
          },
          olData: {},
          addtionalBubbleData: {
            content: (
              <p>
                <strong>スーパーPayPayクーポン</strong><br />
                <small>付与率50％のクーポンを使って600円以上のご利用を計4回行った場合</small><br />
                <span><strong>1,200円</strong></span>相当/月  PayPayポイント付与
              </p>
            ),
            notetData: {}
          }
        }
      },
      select2: {
        label: 'いいえ',
        ctr: {
          on: null,
          off: CONFIG_CTR_DATA.STEP3_ITEM_NO_ON
        },
        value: '',
        status: false,
        relatedAmountData: {
          categories: {}
        }
      }
    }
  }
}
