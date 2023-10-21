import { style } from '@vanilla-extract/css'

import { fromBp } from '~/theme/utils'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '3.69rem',
})

export const playerParts = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '40rem',
  flexGrow: 1,

  paddingInline: '30rem',

  '@media': {
    [fromBp('xl')]: {
      gap: '50rem',
    },
  },
})
