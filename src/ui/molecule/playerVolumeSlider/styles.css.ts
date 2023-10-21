import { style } from '@vanilla-extract/css'

import { sliderWidth } from '~/ui/atom/slider/styles.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '11rem',
})

export const slider = style({
  vars: {
    [sliderWidth]: '100rem',
  },
})
