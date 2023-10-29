import { style } from '@vanilla-extract/css'

import theme, { length } from '~/theme'

const footerHeight = length('100rem', ['xl', '110rem'])

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
