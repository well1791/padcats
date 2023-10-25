import { style } from '@vanilla-extract/css'

import { length } from '~/theme'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: length('5rem', ['xl', '11rem']),
})
