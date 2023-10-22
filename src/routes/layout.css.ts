import { createVar, style, globalStyle } from '@vanilla-extract/css'

import { container as action } from '~/ui/atom/action/styles.css'
import { vars } from '~/theme'
import { cc } from '~/utils'

const _iconSizeVar = createVar()

export const container = style({
  maxInlineSize: vars.size.prose,
  marginInline: 'auto',
})

export const header = style([container])

export const footer = style({
  position: 'fixed',
  insetBlockEnd: 0,
})

globalStyle(cc(
  `${header} svg`,
  `${footer} ${action} > svg`,
), {
  vars: { [_iconSizeVar]: '24rem' },

  width: _iconSizeVar,
  height: _iconSizeVar,
})
