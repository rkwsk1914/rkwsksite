/* ---------------------------------------------------------------------------------
  インポート
--------------------------------------------------------------------------------- */
/* React */
import * as React from 'react'
import { CONFIG_CTR_DATA } from './ctr-data.js'
/* ---------------------------------------------------------------------------------
  シュミレーターの設問カードデータ
--------------------------------------------------------------------------------- */
export const CONFIG_STEP_DATA = {
  Q1: {
    stepNumber: 1,
    questionId: 'Q1',
    nextCardId: 'Q2',
    layout: {
      quizBoyImg: (
        <img
          className="img-quiz-boy-using-smartphone"
          src="/assets/work/work1/img/shared/img-quiz-boy-using-smartphone.png"
          width="116"
          height="159"
          alt=""/>
      ),
      ctr: {
        blueButton: CONFIG_CTR_DATA.STEP1_NEXT_BUTTON,
        whiteButton: null,
        closeButton: CONFIG_CTR_DATA.STEP1_CLOSE
      },
      inputBoxColumn: {}
    },
    isSelected: false
  },
  Q2: {
    stepNumber: 2,
    questionId: 'Q2',
    nextCardId: 'Q3',
    previousCardId: 'Q1',
    layout: {
      quizBoyImg: (
        <img
          className="img-quiz-boy-smile"
          src="/assets/work/work1/img/shared/img-quiz-boy-smile.png"
          width="116"
          height="159"
          alt=""/>
      ),
      ctr: {
        blueButton: CONFIG_CTR_DATA.STEP2_NEXT_BUTTON,
        whiteButton: CONFIG_CTR_DATA.STEP2_PRE_BUTTON,
        closeButton: CONFIG_CTR_DATA.STEP2_CLOSE
      },
      inputBoxColumn: {
        pc: 3,
        sp: 2
      }
    },
    isSelected: false
  },
  Q3: {
    stepNumber: 3,
    questionId: 'Q3',
    nextCardId: 'Result',
    previousCardId: 'Q2',
    layout: {
      quizBoyImg: (
        <img
          className="img-quiz-boy-surprised"
          src="/assets/work/work1/img/shared/img-quiz-boy-surprised.png"
          width="116"
          height="159"
          alt=""/>
      ),
      ctr: {
        blueButton: CONFIG_CTR_DATA.STEP3_RESULT_BUTTON,
        whiteButton: CONFIG_CTR_DATA.STEP3_PRE_BUTTON,
        closeButton: CONFIG_CTR_DATA.STEP3_CLOSE
      },
      inputBoxColumn: {
        pc: 2,
        sp: 1
      }
    },
    isSelected: false
  },
  Result: {
    stepNumber: 3,
    questionId: 'Result',
    nextCardId: 'Q1',
    isSelected: false,
    layout: {
      ctr: {
        merihari: CONFIG_CTR_DATA.STEP_RESULT_LINK_MERIHARI,
        blueButton: CONFIG_CTR_DATA.STEP_RESULT_RESTART_BUTTON,
        accordionButton: {
          close: CONFIG_CTR_DATA.STEP_RESULT_ACCORDION_CLOSE,
          open: CONFIG_CTR_DATA.STEP_RESULT_ACCORDION_OPEN
        },
        claimBanner: CONFIG_CTR_DATA.CLAIM_AREA_LINK,
        closeButton: CONFIG_CTR_DATA.STEP_RESULT_CLOSE
      }
    }
  },
  HowTo: {
    stepNumber: 3,
    questionId: 'HowTo',
    nextCardId: 'Result',
    isSelected: false,
    layout: {
      ctr: {
        whiteButton: CONFIG_CTR_DATA.CLAIM_AREA_BACK,
        closeButton: CONFIG_CTR_DATA.CLAIM_AREA_CLOSE
      }
    }
  }
}
