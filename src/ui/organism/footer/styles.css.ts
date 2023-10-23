import { style } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const container = style({
  inlineSize: '100%',
  backgroundColor: vars.color.tertiary.bg,
})

export const playerBar = style({
  maxInlineSize: vars.bp.xl,
  marginInline: 'auto',
  paddingInlineEnd: '30rem',
  height: '100%',
})
