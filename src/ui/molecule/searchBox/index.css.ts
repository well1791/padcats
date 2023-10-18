import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  inlineSize: '100%',
  blockSize: 'inherit',
  paddingInline: '1.25rem',
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
  fontSize: '1rem',
  fontWeight: 400,
})
