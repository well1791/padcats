import { createVar, style } from '@vanilla-extract/css'

import { vars } from '~/theme'
import { fromBp, fromBpVars } from '~/theme/utils'

const playPauseBtnSize = createVar()
const activeMarkSize = createVar()

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '15rem',

  '@media': {
    [fromBp('xl')]: {
      gap: '30rem',
    },
  },
})

export const playPauseBtn = style({
  vars: { [playPauseBtnSize]: '40rem' },

  justifyContent: 'center',

  width: playPauseBtnSize,
  height: playPauseBtnSize,
  borderRadius: '50%',
  backgroundColor: vars.color.accent.bg,

  '@media': fromBpVars('xl', { [playPauseBtnSize]: '50rem' }),
})

export const activableBtn = style({
  vars: { [activeMarkSize]: '3rem' },

  position: 'relative',

  selectors: {
    '&[data-is-active="true"]::after': {
      content: '',

      position: 'absolute',
      top: 1,
      right: 1,

      width: activeMarkSize,
      height: activeMarkSize,
      borderRadius: '50%',
      backgroundColor: vars.color.primary.text,
    },
  },
})
