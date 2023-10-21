import { createVar, style } from '@vanilla-extract/css'

import { vars } from '~/theme'
import { fromBp, fromBpVars } from '~/theme/utils'

const _playPauseBtnSize = createVar()
const _activeMarkSize = createVar()

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10rem',

  '@media': {
    [fromBp('xl')]: {
      gap: '30rem',
    },
  },
})

export const playPauseBtn = style({
  vars: { [_playPauseBtnSize]: '40rem' },

  justifyContent: 'center',

  width: _playPauseBtnSize,
  height: _playPauseBtnSize,
  borderRadius: '50%',
  backgroundColor: vars.color.accent.bg,

  '@media': fromBpVars('xl', { [_playPauseBtnSize]: '50rem' }),
})

export const activableBtn = style({
  vars: { [_activeMarkSize]: '3rem' },

  position: 'relative',

  selectors: {
    '&[data-is-active="true"]::after': {
      content: '',

      position: 'absolute',
      top: 1,
      right: 1,

      width: _activeMarkSize,
      height: _activeMarkSize,
      borderRadius: '50%',
      backgroundColor: vars.color.primary.text,
    },
  },
})
