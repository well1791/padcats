import { style } from '@vanilla-extract/css'

import { fromBp } from '~/theme/utils'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '25rem',

  '@media': {
    [fromBp('xl')]: { gap: '59rem' },
  },
})

export const playerInfo = style({
  maxInlineSize: '45%',
})

export const playerParts = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '30rem',

  '@media': {
    [fromBp('xl')]: { gap: '50rem' },
  },
})
