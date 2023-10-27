import { style } from '@vanilla-extract/css'

import * as playerInfoVar from '~/ui/molecule/playerInfo/vars.css'
import * as sliderVar from '~/ui/atom/slider/vars.css'
import { length } from '~/theme'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: length('25rem', ['xl', '59rem']),
})

export const playerInfo = style({
  vars: {
    [playerInfoVar.titleMaxWidth]: '277rem',
  },

  maxInlineSize: '45%',
})

export const playerParts = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: length('30rem', ['xl', '50rem']),
  flexGrow: 1,
  maxInlineSize: 'calc(50% + 125rem)',
})

export const playerSeeker = style({
  vars: {
    [sliderVar.width]: '100%',
  },

  flexGrow: 1,
})

export const playerVolume = style({
  vars: {
    [sliderVar.width]: length('70rem', ['xl', '100rem']),
  },
})
