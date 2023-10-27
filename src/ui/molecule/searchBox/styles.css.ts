import { style } from '@vanilla-extract/css'

import theme from '~/theme'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16rem',

  inlineSize: '100%',
  blockSize: 'inherit',
  paddingInline: '24rem',
  backgroundColor: theme.color.tertiary.bg,
  borderRadius: 15,

  ':focus-within': {
    outline: 'solid thin',
  },
})

export const input = style({
  inlineSize: 'inherit',
  backgroundColor: 'transparent',
  outline: 'none',

  color: theme.color.tertiary.text,
})
