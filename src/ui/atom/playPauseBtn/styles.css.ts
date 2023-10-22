import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const iconSizeVar = createVar()
const _iconSizeVar = createVar()

export const btnSizeVar = createVar()
const _btnSizeVar = createVar()

export const container = style({
  vars: {
    [_btnSizeVar]: fallbackVar(btnSizeVar, '35rem'),
    [_iconSizeVar]: fallbackVar(iconSizeVar, '16rem'),
  },

  width: _btnSizeVar,
  height: _btnSizeVar,

  selectors: {
    '&[data-is-highlighted="true"]': {
      borderRadius: '50%',
      backgroundColor: vars.color.accent.bg,
    },
  },
})

globalStyle(`${container} > svg`, {
  width: _iconSizeVar,
  height: _iconSizeVar,
})
