import { createVar, fallbackVar, style } from '@vanilla-extract/css'

import * as vars from './vars.css'
import theme from '~/theme'

const _iconSize = createVar()
const _btnSize = createVar()

export const container = style({
  vars: {
    [_btnSize]: fallbackVar(vars.btnSize, '35rem'),
    [_iconSize]: fallbackVar(vars.iconSize, '16rem'),
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

export const icon = style({
  width: _iconSize,
  height: _iconSize,
})
