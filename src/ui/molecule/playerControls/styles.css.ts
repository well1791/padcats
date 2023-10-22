import { createVar, style } from '@vanilla-extract/css'

import { btnSizeVar } from '~/ui/atom/playPauseBtn/styles.css'
import { vars, fluidUnit } from '~/theme'

const _activeMarkSizeVar = createVar()

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: fluidUnit('13rem', ['xl', '18rem']),
})

export const playPauseBtn = style({
  vars: {
    [btnSizeVar]: fluidUnit('40rem', ['xl', '50rem']),
  },
})

export const toggleBtn = style({
  vars: { [_activeMarkSizeVar]: '3rem' },

  position: 'relative',

  selectors: {
    '&[aria-pressed="true"]::after': {
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
