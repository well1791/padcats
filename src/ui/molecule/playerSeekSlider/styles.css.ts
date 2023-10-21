import { style } from '@vanilla-extract/css'

import { colorVar } from '~/ui/atom/timeLabel/styles.css'
import { sliderWidth } from '~/ui/atom/slider/styles.css'
import { vars } from '~/theme'
import { fromBpVars } from '~/theme/utils'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '14rem',
})

export const remainingTime = style({
  vars: { [colorVar]: vars.color.secondary.text },
})

export const slider = style({
  vars: { [sliderWidth]: '160rem' },
  '@media': fromBpVars('xl', { [sliderWidth]: '419rem' }),
})
