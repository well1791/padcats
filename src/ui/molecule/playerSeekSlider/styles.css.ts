import { style } from '@vanilla-extract/css'

import * as timeLabelVar from '~/ui/atom/timeLabel/vars.css'
import theme from '~/theme'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '14rem',
})

export const remainingTime = style({
  vars: { [timeLabelVar.color]: theme.color.secondary.text },
})
