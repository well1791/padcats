import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const container = style({
  display: 'flex',
  gap: '.94rem',
  alignItems: 'center',

  blockSize: '3.125rem',
  paddingBlockStart: '1.88rem',
  paddingBlockEnd: '1.25rem',
})

export const backLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  minInlineSize: '3.125rem',
  minBlockSize: '3.125rem',
  borderRadius: 15,
  backgroundColor: vars.color.tertiary.bg,
})
