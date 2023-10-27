import { style } from '@vanilla-extract/css'

import theme from '~/theme'

export const container = style({
  inlineSize: '100%',
  backgroundColor: theme.color.tertiary.bg,
})

export const playerBar = style({
  maxInlineSize: theme.bp.xl,
  marginInline: 'auto',
  paddingInlineEnd: '30rem',
  height: '100%',
})
