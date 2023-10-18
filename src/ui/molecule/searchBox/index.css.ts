import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  width: '100%',
  paddingInline: '1.25rem',
  paddingBlock: '.94rem',
  backgroundColor: vars.color.tertiary.bg,
  borderRadius: '15px',
})

export const input = style({
  width: 'inherit',
  backgroundColor: 'transparent',

  color: vars.color.tertiary.text,
  fontSize: '1rem',
  fontWeight: 400,
})
