import { style } from '@vanilla-extract/css'

import { fluidUnit } from '~/theme'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: fluidUnit('5rem', ['xl', '11rem']),
})
