import { createVar, style } from '@vanilla-extract/css'

import { vars, fluidUnit } from '~/theme'

const _playPauseBtnSizeVar = createVar()
const _activeMarkSizeVar = createVar()

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: fluidUnit('13rem', ['xl', '18rem']),
})

export const playPauseBtn = style({
  vars: {
    [_playPauseBtnSizeVar]: fluidUnit('40rem', ['xl', '50rem']),
  },

  justifyContent: 'center',

  width: _playPauseBtnSizeVar,
  height: _playPauseBtnSizeVar,
  borderRadius: '50%',
  backgroundColor: vars.color.accent.bg,
})

export const activableBtn = style({
  vars: { [_activeMarkSizeVar]: '3rem' },

  position: 'relative',

  selectors: {
    '&[data-is-active="true"]::after': {
      content: '',

      position: 'absolute',
      top: 1,
      right: 1,

      width: _activeMarkSizeVar,
      height: _activeMarkSizeVar,
      borderRadius: '50%',
      backgroundColor: vars.color.primary.text,
    },
  },
})
