import { createVar, style } from '@vanilla-extract/css'

import * as playPausBtnVar from '~/ui/atom/playPauseBtn/vars.css'
import theme, { length } from '~/theme'

const _activeMarkSize = createVar()

export const container = style({
  vars: {
    [_activeMarkSize]: '3rem',
    [playPausBtnVar.btnSize]: length('40rem', ['xl', '50rem']),
  },
  display: 'flex',
  alignItems: 'center',
  gap: length('13rem', ['xl', '18rem']),
})

export const toggleBtn = style({
  position: 'relative',

  selectors: {
    '&[aria-pressed="true"]::after': {
      content: '',

      position: 'absolute',
      top: 1,
      right: 1,

      width: _activeMarkSize,
      height: _activeMarkSize,
      borderRadius: '50%',
      backgroundColor: theme.color.primary.text,
    },
  },
})
