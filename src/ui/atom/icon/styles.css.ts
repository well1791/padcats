import { createVar, fallbackVar, style } from '@vanilla-extract/css'

import * as vars from './vars.css'

const _iconSize = createVar()

export const container = style({
  vars: {
    [_iconSize]: fallbackVar(vars.iconSize, '24rem'),
  },

  width: _iconSize,
  height: _iconSize,
})
