import { style } from '@vanilla-extract/css'

import { sliderWidth } from '~/ui/atom/slider/styles.css'
import { fromBp, fromBpVars } from '~/theme/utils'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5rem',

  '@media': {
    [fromBp('xl')]: {
      gap: '11rem',
    },
  },
})

export const slider = style({
  vars: { [sliderWidth]: '70rem' },
  '@media': fromBpVars('xl', { [sliderWidth]: '100rem' }),
})
