import { style } from '@vanilla-extract/css'

import { vars } from '~/theme'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16rem',

  inlineSize: '100%',
  blockSize: 'inherit',
  paddingInline: '24rem',
  backgroundColor: vars.color.tertiary.bg,
  borderRadius: 15,

  ':focus-within': {
    outline: 'solid thin',
  },
})

export const input = style({
  inlineSize: 'inherit',
  backgroundColor: 'transparent',
  outline: 'none',

  color: vars.color.tertiary.text,
})
