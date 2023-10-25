import { createVar, style, globalStyle } from '@vanilla-extract/css'

import { vars, length } from '~/theme'
import { cc } from '~/utils'

const footerHeight = length('100rem', ['xl', '110rem'])

const _iconSizeVar = createVar()

export const container = style({
  maxInlineSize: vars.size.prose,
  marginInline: 'auto',
})

export const header = style([container])

export const footer = style({
  position: 'fixed',
  insetBlockEnd: 0,
  height: footerHeight,
})

export const footerBackdrop = style({
  width: '100%',
  height: `calc(${footerHeight} + 50rem)`,
})

globalStyle(cc(`${header} svg`, `${footer} svg`), {
  vars: { [_iconSizeVar]: '24rem' },

  width: _iconSizeVar,
  height: _iconSizeVar,
})
