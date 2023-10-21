import { style } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const container = style({
  inlineSize: '100%',
  backgroundColor: vars.color.tertiary.bg,
})
