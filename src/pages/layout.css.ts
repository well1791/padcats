import { createVar, style, globalStyle } from '@vanilla-extract/css'

import theme, { length } from '~/theme'
import { cc } from '~/utils'

const footerHeight = length('100rem', ['xl', '110rem'])

const _iconSize = createVar()

export const container = style({
  maxInlineSize: theme.size.prose,
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
  vars: { [_iconSize]: '24rem' },

  width: _iconSize,
  height: _iconSize,
})
