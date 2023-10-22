import { style } from '@vanilla-extract/css'

import { sliderWidthVar } from '~/ui/atom/slider/styles.css'
import { fluidUnit } from '~/theme'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: fluidUnit('25rem', ['xl', '59rem']),
})

export const playerInfo = style({
  maxInlineSize: '45%',
})

export const playerParts = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: fluidUnit('30rem', ['xl', '50rem']),
  flexGrow: 1,
  maxInlineSize: 'calc(50% + 150rem)',
})

export const playerSeeker = style({
  vars: {
    [sliderWidthVar]: '100%',
  },

  flexGrow: 1,
})

export const playerVolume = style({
  vars: {
    [sliderWidthVar]: fluidUnit('70rem', ['xl', '100rem']),
  },
})
