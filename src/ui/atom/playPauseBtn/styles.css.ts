import { createVar, fallbackVar, style } from '@vanilla-extract/css'

import * as vars from './vars.css'
import theme from '~/theme'

const _btnSize = createVar()

export const container = style({
  vars: {
    [_btnSize]: fallbackVar(vars.btnSize, '35rem'),
  },

  width: _btnSize,
  height: _btnSize,

  selectors: {
    '&[data-is-highlighted="true"]': {
      borderRadius: '50%',
      backgroundColor: theme.color.accent.bg,
    },
  },
})
