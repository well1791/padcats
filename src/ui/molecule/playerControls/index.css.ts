import { style } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '30rem',
})

export const playPauseBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '50rem',
  height: '50rem',
  borderRadius: '50%',
  backgroundColor: vars.color.accent.bg,
})

export const activableBtn = style({
  position: 'relative',

  selectors: {
    '&[data-is-active="true"]::after': {
      content: '',

      position: 'absolute',
      top: 1,
      right: 1,

      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      backgroundColor: vars.color.primary.text,
    },
  },
})
